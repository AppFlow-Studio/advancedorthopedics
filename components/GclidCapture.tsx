'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { bufferLandingAttribution, captureGclid, captureUtmParams } from '@/lib/gclid';
import { CONSENT_UPDATED_EVENT } from '@/lib/consent';

/**
 * Zero-render component — captures GCLID and UTM params on page load.
 * Must be placed in the root layout so it fires on every page.
 * Renders nothing. Has zero visual impact.
 */
export default function GclidCapture() {
  const pathname = usePathname();

  // Buffer the ARRIVAL parameters into memory before consent is known, so a
  // visitor who browses first and accepts later is still attributed correctly.
  // Reads the URL only — writes nothing, sends nothing. See lib/gclid.ts.
  if (typeof window !== 'undefined') bufferLandingAttribution();

  useEffect(() => {
    bufferLandingAttribution();
    captureGclid();
    captureUtmParams();
  }, [pathname]);

  useEffect(() => {
    const handleConsentUpdated = () => {
      captureGclid();
      captureUtmParams();
    };

    window.addEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdated);
    return () => window.removeEventListener(CONSENT_UPDATED_EVENT, handleConsentUpdated);
  }, []);

  return null;
}
