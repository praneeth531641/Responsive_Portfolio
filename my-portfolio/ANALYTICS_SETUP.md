# GA4 Dashboard Setup

This project now has two separate analytics pieces:

- client-side event collection via `gtag` using `VITE_GA_MEASUREMENT_ID`
- server-side dashboard reporting via `/api/analytics` using the GA4 Data API

## Required Environment Variables

Add these in local env files for development and in Vercel project settings for deployment:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
GA_PROPERTY_ID=123456789
GA_CLIENT_EMAIL=analytics-reader@your-project.iam.gserviceaccount.com
GA_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Notes:

- `GA_PROPERTY_ID` is the numeric GA4 property id, not the measurement id.
- `GA_PRIVATE_KEY` must preserve newlines. In Vercel, paste it with line breaks or escaped `\n`.

## Service Account Setup

1. Open Google Cloud Console.
2. Create or reuse the GCP project linked to your analytics setup.
3. Enable the `Google Analytics Data API`.
4. Create a service account.
5. Generate a JSON key for that service account.
6. Copy:
   - `client_email` -> `GA_CLIENT_EMAIL`
   - `private_key` -> `GA_PRIVATE_KEY`

## Grant GA4 Access

1. Open Google Analytics.
2. Go to `Admin -> Property Access Management`.
3. Add the service account email.
4. Grant at least `Viewer` access.

Without this, the `/api/analytics` endpoint will return permission errors.

## Required Custom Dimension

The "Most Viewed Sections" chart depends on the `section_viewed` event parameter `section_name`.

Create this GA4 custom dimension:

- Dimension name: `Section Name`
- Scope: `Event`
- Event parameter: `section_name`

Path:

`Admin -> Custom definitions -> Create custom dimensions`

If this custom dimension is not registered, the dashboard still loads, but the sections chart will be empty and the API will return a warning.

## What The Dashboard Shows

- `Total Page Views` -> GA metric `screenPageViews`
- `Unique Visitors` -> GA metric `totalUsers`
- `AI Chat Usage` -> event count for `ai_assistant_used`
- `Social Link Clicks` -> event count for `social_link_clicked`
- `Scroll Depth Engagement` -> event counts for:
  - `scroll_depth_25`
  - `scroll_depth_50`
  - `scroll_depth_75`
  - `scroll_depth_100`
- `Most Viewed Sections` -> event count grouped by `customEvent:section_name`

## Local Development

The frontend requests:

```txt
/api/analytics?days=30
```

When running locally, ensure your local environment includes the GA server variables above. If they are missing, the analytics section will show the API error instead of fake local counters.
