import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host") || "";

  // === SKIP MIDDLEWARE FOR WWW REDIRECTS ===
  // Let next.config.ts handle www → non-www redirect in production
  // This prevents redirect loops
  if (hostname.startsWith("www.")) {
    return NextResponse.next();
  }

  // === SKIP MIDDLEWARE FOR SPECIFIC PATHS ===

  // 1. Next.js internal paths (build assets, data fetching, HMR)
  if (pathname.startsWith("/_next")) {
    return NextResponse.next();
  }

  // 2. API routes
  if (pathname.startsWith("/api")) {
    return NextResponse.next();
  }

  // 3. PostHog analytics ingest paths
  if (pathname.startsWith("/ingest")) {
    return NextResponse.next();
  }

  // 4. Static files with extensions
  const hasFileExtension = /\.[a-zA-Z0-9]+$/.test(pathname);
  if (hasFileExtension) {
    return NextResponse.next();
  }

  // 5. Sitemap paths
  if (pathname.startsWith("/sitemap")) {
    return NextResponse.next();
  }

  // 6. robots.txt
  if (pathname === "/robots.txt") {
    return NextResponse.next();
  }

  // === URL NORMALIZATION ===
  const lower = pathname.toLowerCase();

  // Remove trailing slash for all paths EXCEPT root "/"
  const normalized =
    lower !== "/" && lower.endsWith("/") ? lower.slice(0, -1) : lower;

  // If pathname needs normalization, redirect with 301
  if (pathname !== normalized) {
    const url = new URL(req.nextUrl.toString());
    url.pathname = normalized;
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
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};