import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Normalizes URLs by lowercasing the path and stripping any trailing slash.
// This runs in middleware so that we can safely handle the root path without
// triggering the blank `Location` header issue we saw when using a global
// redirect in `next.config.ts` (which caused the dev server to constantly
// refresh).
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  
  // === SKIP MIDDLEWARE FOR SPECIFIC PATHS ===
  // These paths should NEVER be modified to prevent breaking functionality
  
  // 1. Next.js internal paths (build assets, data fetching, HMR)
  if (pathname.startsWith('/_next')) {
    return NextResponse.next();
  }
  
  // 2. API routes
  if (pathname.startsWith('/api')) {
    return NextResponse.next();
  }
  
  // 3. PostHog analytics ingest paths (from your rewrites config)
  // if (pathname.startsWith('/ingest')) {
  //   return NextResponse.next();
  // }
  
  // 4. Static files with extensions (images, fonts, manifests, etc.)
  // Match: .png, .jpg, .jpeg, .gif, .svg, .webp, .avif, .ico, .woff, .woff2, .ttf, .eot, .otf, .xml, .json, .txt, .pdf, .css, .js, .map
  const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
  if (hasFileExtension) {
    return NextResponse.next();
  }
  
  // 5. Sitemap paths (XML sitemaps)
  if (pathname.startsWith('/sitemap')) {
    return NextResponse.next();
  }
  
  // 6. robots.txt
  if (pathname === '/robots.txt') {
    return NextResponse.next();
  }
  
  // === URL NORMALIZATION ===
  // Only runs for actual page routes
  
  const lower = pathname.toLowerCase();
  
  // Remove trailing slash for all paths EXCEPT root "/"
  const normalized = lower !== "/" && lower.endsWith("/") ? lower.slice(0, -1) : lower;
  
  // If pathname needs normalization, redirect with 301
  if (pathname !== normalized) {
    const url = new URL(req.nextUrl.toString());
    url.pathname = normalized;
    // Preserve query parameters and hash
    url.search = req.nextUrl.search;
    url.hash = req.nextUrl.hash;
    return NextResponse.redirect(url, 301);
  }
  
  // No changes needed, continue
  return NextResponse.next();
}

// Apply to all routes, but exclusions are handled in the function above
export const config = { 
  matcher: [
    // Match all paths EXCEPT Next.js internal paths and static assets
    '/((?!_next/static|_next/image|_next/webpack-hmr|favicon\\.ico).*)',
  ]
};
