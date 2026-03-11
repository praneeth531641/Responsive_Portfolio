import { useEffect } from 'react';
import { trackEvent } from '../hooks/useAnalytics';

// Helper function to update localStorage metrics
const updateMetric = (key: string, value: any) => {
  try {
    const metrics = JSON.parse(localStorage.getItem('portfolioMetrics') || '{}');
    metrics[key] = value;
    localStorage.setItem('portfolioMetrics', JSON.stringify(metrics));
  } catch (e) {
    console.error('Error updating metrics:', e);
  }
};

// Helper function to increment a counter
const incrementMetric = (key: string) => {
  try {
    const metrics = JSON.parse(localStorage.getItem('portfolioMetrics') || '{}');
    if (typeof metrics[key] === 'number') {
      metrics[key]++;
    } else {
      metrics[key] = 1;
    }
    localStorage.setItem('portfolioMetrics', JSON.stringify(metrics));
  } catch (e) {
    console.error('Error incrementing metric:', e);
  }
};

// Helper function to increment nested metric
const incrementNestedMetric = (key: string, nestedKey: string) => {
  try {
    const metrics = JSON.parse(localStorage.getItem('portfolioMetrics') || '{}');
    if (!metrics[key]) metrics[key] = {};
    if (typeof metrics[key][nestedKey] === 'number') {
      metrics[key][nestedKey]++;
    } else {
      metrics[key][nestedKey] = 1;
    }
    localStorage.setItem('portfolioMetrics', JSON.stringify(metrics));
  } catch (e) {
    console.error('Error incrementing nested metric:', e);
  }
};

// Track when user scrolls to different sections
export const useSectionTracking = () => {
  useEffect(() => {
    const sections = ['hero', 'what-i-do', 'projects', 'tech', 'experience', 'flagship', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section-name') || entry.target.id;
            trackEvent('section_viewed', {
              section_id: entry.target.id,
              section_name: sectionName,
            });
            // Also track in localStorage for dashboard
            incrementNestedMetric('sectionsViewed', sectionName);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);
};

// Track important user interactions
export const trackAIAssistantUsage = (messageCount: number) => {
  trackEvent('ai_assistant_used', {
    message_count: messageCount,
  });
  updateMetric('aiUsage', messageCount);
};

export const trackProjectClicked = (projectName: string) => {
  trackEvent('project_clicked', {
    project_name: projectName,
  });
  incrementNestedMetric('projectsClicked', projectName);
};

export const trackSocialLinkClicked = (platform: string) => {
  trackEvent('social_link_clicked', {
    platform: platform,
  });
  incrementMetric('socialClicks');
};

export const trackContactFormStarted = () => {
  trackEvent('contact_form_started', {
    timestamp: new Date().toISOString(),
  });
};

export const trackContactFormSubmitted = (method: string) => {
  trackEvent('contact_form_submitted', {
    contact_method: method,
    timestamp: new Date().toISOString(),
  });
};

export const trackScrollDepth = () => {
  let maxScroll = 0;

  const scrollHandler = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage > maxScroll) {
      maxScroll = scrollPercentage;
      
      // Track scroll milestones
      if (maxScroll >= 25 && maxScroll < 50) {
        trackEvent('scroll_depth_25');
        incrementNestedMetric('scrollDepth', '25%');
      } else if (maxScroll >= 50 && maxScroll < 75) {
        trackEvent('scroll_depth_50');
        incrementNestedMetric('scrollDepth', '50%');
      } else if (maxScroll >= 75 && maxScroll < 100) {
        trackEvent('scroll_depth_75');
        incrementNestedMetric('scrollDepth', '75%');
      } else if (maxScroll >= 100) {
        trackEvent('scroll_depth_100');
        incrementNestedMetric('scrollDepth', '100%');
      }
    }
  };

  window.addEventListener('scroll', scrollHandler);
  
  return () => window.removeEventListener('scroll', scrollHandler);
};
