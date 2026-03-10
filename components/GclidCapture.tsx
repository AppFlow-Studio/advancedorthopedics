'use client';

import { useEffect } from 'react';
import { captureGclid, captureUtmParams } from '@/lib/gclid';

/**
 * Zero-render component — captures GCLID and UTM params on page load.
 * Must be placed in the root layout so it fires on every page.
 * Renders nothing. Has zero visual impact.
 */
export default function GclidCapture() {
  useEffect(() => {
    captureGclid();
    captureUtmParams();
  }, []);

  return null;
}
