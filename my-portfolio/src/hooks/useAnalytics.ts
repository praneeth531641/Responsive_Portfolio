import { useEffect } from 'react';

// Extend Window interface for Google Analytics
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

// Initialize Google Analytics
export const useAnalytics = (measurementId: string) => {
  useEffect(() => {
    // Add Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(..._args: any[]) {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', measurementId, {
      page_path: window.location.pathname,
      'allow_google_signals': true,
      'allow_ad_personalization_signals': false,
    });
  }, [measurementId]);
};

// Track custom events
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// Track page view
export const trackPageView = (pagePath: string, pageTitle?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const gaId = (window as any).GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
    window.gtag('config', gaId, {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
};
