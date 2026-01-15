import { SITE_URL } from '@/lib/seo';

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

  '/conditions':                         '/conditions_og.png',   // master list (canonical URL)
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
 * Always uses production URL for proper social media sharing.
 * @example getOgImageForPath('/treatments/lumbar-fusion-surgery')
 */
export function getOgImageForPath(pathname: string): string {
  // Always use production URL for OG images (critical for social media sharing)
  for (const [prefix, img] of Object.entries(OG_IMAGE_MAP)
                                     .sort((a, b) => b[0].length - a[0].length)) {
    if (pathname.startsWith(prefix)) {
      return `${SITE_URL}${img}`;
    }
  }
  
  // Fallback to default
  return `${SITE_URL}${OG_IMAGE_MAP.DEFAULT}`;
} 
