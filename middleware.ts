import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // Temporarily disabled for local testing
  return NextResponse.next();
  
  const { pathname } = req.nextUrl;
  const lower = pathname.toLowerCase();
  const normalized = lower !== "/" && lower.endsWith("/") ? lower.slice(0, -1) : lower;
  if (pathname !== normalized) {
    const url = new URL(req.nextUrl.toString());
    url.pathname = normalized;
    return NextResponse.redirect(url, 301);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/:path*"] };
