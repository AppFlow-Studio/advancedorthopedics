'use client';

import { ReactNode } from 'react';

// MapProvider no longer gates children on Google Maps script load.
// ClinicsMap loads the API independently via its own useJsApiLoader call,
// so blocking {children} here was preventing ALL page content from server-rendering.
export function MapProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}