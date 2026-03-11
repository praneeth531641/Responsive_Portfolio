# Google Analytics Setup Guide

## Step 1: Create a Google Analytics Account

1. Go to [google.com/analytics](https://google.com/analytics)
2. Sign in with your Google account (create one if needed)
3. Click **"Start measuring"**
4. Fill in the details:
   - **Account name**: "Praneeth's Portfolio"
   - **Property name**: "Portfolio Website"
   - **Reporting timezone**: Select your timezone
   - **Industry category**: Technology
5. Click **"Create"** and accept the terms

## Step 2: Get Your Measurement ID

1. After creating, you'll see your **Measurement ID** (looks like: `G-XXXXXXXXXX`)
2. Copy this ID

## Step 3: Add to Your Portfolio

### Option A: Environment Variables (Recommended)

1. Create a `.env.local` file in your project root:
```
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

2. Replace `G-XXXXXXXXXX` with your actual Measurement ID

3. Restart your dev server:
```bash
npm run dev
```

### Option B: Direct Configuration

If you don't want to use .env, edit `src/App.tsx`:
```tsx
const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";  // Replace with your ID
```

## Step 4: Deploy to Vercel

Your analytics will automatically start tracking once deployed!

### Deployment Steps:

1. **Push your code to GitHub** (if not already)
2. **Go to** [vercel.com](https://vercel.com)
3. **Sign in** with GitHub
4. **Click "New Project"**
5. **Select your portfolio repository**
6. **Add Environment Variable:**
   - Name: `VITE_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX` (your Measurement ID)
7. **Click Deploy**

## Step 5: View Your Analytics Data

1. Go to [analytics.google.com](https://analytics.google.com)
2. Select your Property
3. You'll see:
   - **Real-time users** currently on your site
   - **Daily/Monthly pageviews**
   - **Unique visitors**
   - **Average session duration**
   - **Bounce rate**
   - **Geographic data** (where visitors are from)
   - **Top pages/sections viewed**
   - **Device data** (mobile vs desktop vs tablet)

## What We're Tracking:

✅ **Automatically Tracked:**
- Page views
- Unique visitors
- Session duration
- Location (country/city)
- Device type & OS
- Browser type

✅ **Custom Events Tracked:**
- Section views (Hero, Projects, Experience, etc.)
- Scroll depth (25%, 50%, 75%, 100%)
- AI Assistant usage
- Project clicks
- Social link clicks
- Contact form interactions

## Key Dashboards to Check:

### 1. **Real-time Dashboard**
- Path: `Reporting > Real-time > Overview`
- See live visitors on your site

### 2. **Users Report**
- Path: `Reporting > User data > Demographics`
- See: Total users, new vs returning, device types, locations

### 3. **Events Dashboard**
- Path: `Reporting > Events > Top events`
- See: Which sections are most viewed, AI assistant usage, links clicked

### 4. **Pages Dashboard**
- Path: `Reporting > Engagement > Pages and screens`
- See: Most visited pages, average time on page, bounce rate

### 5. **Timeline Report**
- Path: `Reporting > User acquisition`
- See: Visitor trends over time (hourly, daily, weekly, monthly)

## Timeline Analytics Best Practices:

1. **Daily Trend** - Best for short-term trends (check daily after launch)
2. **Weekly Trend** - See patterns over 7 days
3. **Monthly Trend** - See seasonal patterns
4. **Date Range Compare** - Compare this month vs last month

## Example Insights You'll Get:

- "You had 250 unique visitors this week"
- "The Projects section was viewed by 180 visitors (72% bounce rate)"
- "Average session lasts 3 minutes 45 seconds"
- "65% of visitors are from mobile devices"
- "Most visitors are from India, USA, and Canada"
- "Your AI Assistant was used by 42 visitors"

## Troubleshooting:

### Not seeing data?

1. **Wait 24-48 hours** - Google Analytics takes time to collect initial data
2. **Check Real-time** - Go to Real-time dashboard and visit your site
3. **Verify Measurement ID** - Double-check it's correct in `.env.local`
4. **Check for Privacy Extensions** - Disable ad blockers temporarily
5. **Console errors?** - Check browser DevTools (F12) for error messages

### Privacy Compliance:

✅ We're using `allow_ad_personalization_signals: false`
✅ No cookies tracking individual users
✅ Privacy-respecting data collection

## Next Steps:

1. Set up email alerts for key metrics
2. Create custom dashboards for your KPIs
3. Track conversion events (if you add contact forms, job applications, etc.)
4. Monitor traffic sources over time

---

**Questions?** Check [Google Analytics Help Center](https://support.google.com/analytics)
