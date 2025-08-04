'use client';
import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Prevent duplicate script insertion
    if (document.querySelector('script[src*="botpress"]')) return;

    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    injectScript.defer = true;
    injectScript.async = true;

    injectScript.onload = () => {
      const configScript = document.createElement('script');
      configScript.src = "https://files.bpcontent.cloud/2025/08/02/15/20250802152006-RJPJY5A8.js";
      configScript.defer = true;
      configScript.async = true;
      document.body.appendChild(configScript);
    };

    document.body.appendChild(injectScript);

    return () => {
      if (injectScript.parentNode) injectScript.parentNode.removeChild(injectScript);
      const configScript = document.querySelector('script[src*="bpcontent.cloud"]');
      if (configScript && configScript.parentNode) configScript.parentNode.removeChild(configScript);
    };
  }, []);

  return null;
}
