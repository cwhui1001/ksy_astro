export const GA_TRACKING_ID = "AW-18063176278";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ 
  action, 
  category, 
  label, 
  value, 
  ...params 
}: { 
  action: string; 
  category?: string; 
  label?: string; 
  value?: number; 
  [key: string]: unknown;
}) => {
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
      ...params,
    });
  }
};

export const triggerConversion = () => {
  if (typeof window.gtag !== "undefined") {
    window.gtag('event', 'conversion', {
      'send_to': 'AW-18063176278/PHXTCMrk9LEcENbkmKVD',
      'value': 1.0,
      'currency': 'MYR',
      'transaction_id': ''
    });
  }
};
