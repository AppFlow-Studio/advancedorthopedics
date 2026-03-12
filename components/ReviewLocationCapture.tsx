'use client';

import { useEffect } from 'react';

interface ReviewLocationCaptureProps {
  locationSlug: string;
}

export function ReviewLocationCapture({ locationSlug }: ReviewLocationCaptureProps) {
  useEffect(() => {
    try {
      if (locationSlug) {
        sessionStorage.setItem('review_location_slug', locationSlug);
      }
    } catch {
      // sessionStorage may be unavailable in some environments — fail silently
    }
  }, [locationSlug]);

  return null; // renders nothing
}
