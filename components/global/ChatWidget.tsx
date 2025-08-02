'use client'; // Required for client-side components

import { useEffect } from 'react';

export default function ChatWidget() {
  useEffect(() => {
    // Check if scripts already exist
    if (document.querySelector('script[src*="botpress"]')) return;

    const script1 = document.createElement('script');
    script1.src = "https://cdn.botpress.cloud/webchat/v3.2/inject.js";
    script1.defer = true;
    script1.async = true;
    
    const script2 = document.createElement('script');
    script2.src = "https://files.bpcontent.cloud/2025/08/02/15/20250802152006-RJPJY5A8.js";
    script2.defer = true;
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      // Cleanup on component unmount
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return null;
}
    