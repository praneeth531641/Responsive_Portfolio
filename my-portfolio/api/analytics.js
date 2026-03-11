import { createSign } from 'node:crypto';

const TOKEN_URL = 'https://oauth2.googleapis.com/token';
const ANALYTICS_API_BASE = 'https://analyticsdata.googleapis.com/v1beta';
const ANALYTICS_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly';

function base64UrlEncode(input) {
  const source = typeof input === 'string' ? Buffer.from(input) : input;
  return source
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/g, '');
}

function getRequiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function buildServiceAccountJwt(clientEmail, privateKey) {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const payload = {
    iss: clientEmail,
    scope: ANALYTICS_SCOPE,
    aud: TOKEN_URL,
    exp: now + 3600,
    iat: now,
  };

  const encodedHeader = base64UrlEncode(JSON.stringify(header));
  const encodedPayload = base64UrlEncode(JSON.stringify(payload));
  const unsignedToken = `${encodedHeader}.${encodedPayload}`;
  const signer = createSign('RSA-SHA256');
  signer.update(unsignedToken);
  signer.end();

  const signature = signer.sign(privateKey);
  return `${unsignedToken}.${base64UrlEncode(signature)}`;
}

async function getAccessToken() {
  const clientEmail = getRequiredEnv('GA_CLIENT_EMAIL');
  const privateKey = getRequiredEnv('GA_PRIVATE_KEY').replace(/\\n/g, '\n');
  const assertion = buildServiceAccountJwt(clientEmail, privateKey);

  const response = await fetch(TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`Failed to get Google access token: ${response.status} ${details}`);
  }

  const data = await response.json();
  return data.access_token;
}

async function runReport(accessToken, propertyId, body) {
  const response = await fetch(`${ANALYTICS_API_BASE}/properties/${propertyId}:runReport`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const details = await response.text();
    throw new Error(`GA Data API request failed: ${response.status} ${details}`);
  }

  return response.json();
}

function metricValue(row, index = 0) {
  return Number(row?.metricValues?.[index]?.value || 0);
}

function dimensionValue(row, index = 0) {
  return row?.dimensionValues?.[index]?.value || '';
}

function getDaysQuery(query) {
  const parsed = Number.parseInt(query.days, 10);
  if (Number.isNaN(parsed)) return 30;
  return Math.min(Math.max(parsed, 1), 365);
}

async function getSectionsReport(accessToken, propertyId, dateRanges) {
  try {
    const report = await runReport(accessToken, propertyId, {
      dateRanges,
      dimensions: [{ name: 'customEvent:section_name' }],
      metrics: [{ name: 'eventCount' }],
      dimensionFilter: {
        filter: {
          fieldName: 'eventName',
          stringFilter: { value: 'section_viewed', matchType: 'EXACT' },
        },
      },
      orderBys: [{ metric: { metricName: 'eventCount' }, desc: true }],
      limit: 6,
    });

    return Object.fromEntries(
      (report.rows || [])
        .map((row) => [dimensionValue(row), metricValue(row)])
        .filter(([name]) => Boolean(name))
    );
  } catch (error) {
    return {
      __error:
        'Sections report unavailable. Register the GA4 custom dimension for event parameter "section_name".',
    };
  }
}

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const propertyId = getRequiredEnv('GA_PROPERTY_ID');
    const days = getDaysQuery(req.query || {});
    const accessToken = await getAccessToken();
    const dateRanges = [{ startDate: `${days}daysAgo`, endDate: 'today' }];

    const [
      summaryReport,
      aiUsageReport,
      socialClicksReport,
      scrollDepthReport,
      sectionsViewed,
    ] = await Promise.all([
      runReport(accessToken, propertyId, {
        dateRanges,
        metrics: [{ name: 'screenPageViews' }, { name: 'totalUsers' }],
      }),
      runReport(accessToken, propertyId, {
        dateRanges,
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: { value: 'ai_assistant_used', matchType: 'EXACT' },
          },
        },
      }),
      runReport(accessToken, propertyId, {
        dateRanges,
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          filter: {
            fieldName: 'eventName',
            stringFilter: { value: 'social_link_clicked', matchType: 'EXACT' },
          },
        },
      }),
      runReport(accessToken, propertyId, {
        dateRanges,
        dimensions: [{ name: 'eventName' }],
        metrics: [{ name: 'eventCount' }],
        dimensionFilter: {
          orGroup: {
            expressions: [
              { filter: { fieldName: 'eventName', stringFilter: { value: 'scroll_depth_25', matchType: 'EXACT' } } },
              { filter: { fieldName: 'eventName', stringFilter: { value: 'scroll_depth_50', matchType: 'EXACT' } } },
              { filter: { fieldName: 'eventName', stringFilter: { value: 'scroll_depth_75', matchType: 'EXACT' } } },
              { filter: { fieldName: 'eventName', stringFilter: { value: 'scroll_depth_100', matchType: 'EXACT' } } },
            ],
          },
        },
      }),
      getSectionsReport(accessToken, propertyId, dateRanges),
    ]);

    const summaryRow = summaryReport.rows?.[0];
    const aiUsageRow = aiUsageReport.rows?.[0];
    const socialClicksRow = socialClicksReport.rows?.[0];

    const scrollDepth = {
      '25%': 0,
      '50%': 0,
      '75%': 0,
      '100%': 0,
    };

    for (const row of scrollDepthReport.rows || []) {
      const eventName = dimensionValue(row);
      if (eventName === 'scroll_depth_25') scrollDepth['25%'] = metricValue(row);
      if (eventName === 'scroll_depth_50') scrollDepth['50%'] = metricValue(row);
      if (eventName === 'scroll_depth_75') scrollDepth['75%'] = metricValue(row);
      if (eventName === 'scroll_depth_100') scrollDepth['100%'] = metricValue(row);
    }

    const response = {
      source: 'ga4',
      dateRange: {
        startDate: `${days}daysAgo`,
        endDate: 'today',
      },
      totalViews: metricValue(summaryRow, 0),
      uniqueVisitors: metricValue(summaryRow, 1),
      aiUsage: metricValue(aiUsageRow),
      socialClicks: metricValue(socialClicksRow),
      scrollDepth,
      sectionsViewed: sectionsViewed.__error ? {} : sectionsViewed,
      warnings: sectionsViewed.__error ? [sectionsViewed.__error] : [],
    };

    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      error: 'Failed to load analytics data from GA4',
      details: error instanceof Error ? error.message : 'Unknown error',
    });
  }
}
