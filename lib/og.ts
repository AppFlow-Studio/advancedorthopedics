import { SITE_URL } from '@/lib/seo';

/**
 * Map route-prefix ➜ image file.
 * ✱  Keys are **longest-prefix-first** so the first match always wins.
 * ✱  Keep everything 1200×630 px and in /public for zero-runtime cost.
 */
const OG_IMAGE_MAP: Record<string, string> = {
  // ----- find-care pages (longest prefix first) -----
  '/find-care/free-mri-review':          '/free-MRI-review.png',
  '/find-care/book-an-appointment':      '/book-appointment-og.png',
  '/find-care/second-opinion':           '/second-opinion-og.png',
  '/find-care/candidacy-check':          '/candidacy-check-og.png',
  '/find-care/find-a-doctor':            '/find-a-doctor-og.png',
  '/find-care':                          '/default-og.png',

  // ----- condition / treatment pages -----
  '/conditions':                         '/conditions-og.png',   // master list (canonical URL)
  '/area-of-pain':                       '/conditions-og.png',   // sub-folders
  '/condition-check':                    '/condition-check-og.png',
  '/treatments':                         '/treatments-og.png',
  '/insurance-policy':                   '/Insurance-Policy-og.png',

  // ----- location hub pages (sub-regions before parent) -----
  '/locations/florida':                  '/locations-florida-og.png',
  '/locations/new-jersey':               '/locations-new-jersey-og.png',
  '/locations/new-york':                 '/locations-new-york-og.png',
  '/locations/pennsylvania':             '/locations-pennsylvania-og.png',
  '/locations':                          '/locations-og.png',

  // ----- other hub pages -----
  '/about/meetourdoctors':               '/meetourdoctors-og.png',
  '/blogs':                              '/blog-og.png',

  // ----- site-wide defaults -----
  '/':                                   '/default-og.png',      // homepage
  DEFAULT:                               '/default-og.png',      // safety-net
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
