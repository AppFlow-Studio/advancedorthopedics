import { buildCanonical } from '@/lib/seo';

/**
 * Map route-prefix ➜ image file.
 * ✱  Keys are **longest-prefix-first** so the first match always wins.
 * ✱  Keep everything 1200×630 px and in /public for zero-runtime cost.
 */
const OG_IMAGE_MAP: Record<string, string> = {
  // ----- high-intent landing buckets -----
  '/find-care/free-mri-review':          '/MRI_og.png',
  '/find-care/book-an-appointment':      '/Appointment_og.png',
  '/find-care':                          '/default_og.png',

  '/area-of-specialty':                 '/conditions_og.png',   // master list
  '/area-of-pain':                       '/conditions_og.png',   // sub-folders
  '/treatments':                         '/treatments_og.png',
  '/about/meetourdoctors':               '/doctors_og.png',
  '/locations':                          '/locations_og.png',
  '/blogs':                              '/blogs_og.png',

  // ----- site-wide defaults -----
  '/':                                   '/default_og.png',      // homepage
  DEFAULT:                               '/default_og.png',      // safety-net
};

/**
 * Resolve an absolute, canonical OG image for any pathname.
 * @example getOgImageForPath('/treatments/lumbar-fusion-surgery')
 */
export function getOgImageForPath(pathname: string): string {
  // Handle both development and production environments
  const isDevelopment = process.env.NODE_ENV === 'development';
  const siteUrl = isDevelopment ? 'http://localhost:3000' : 'https://mountainspineorthopedics.com';
  
  for (const [prefix, img] of Object.entries(OG_IMAGE_MAP)
                                     .sort((a, b) => b[0].length - a[0].length)) {
    if (pathname.startsWith(prefix)) {
      // Build the full URL directly
      const fullUrl = new URL(img, siteUrl);
      return fullUrl.toString();
    }
  }
  
  // Fallback to default
  const fullUrl = new URL(OG_IMAGE_MAP.DEFAULT, siteUrl);
  return fullUrl.toString();
} 
