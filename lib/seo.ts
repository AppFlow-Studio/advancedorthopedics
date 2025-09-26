// Handle both development and production environments
const getSiteUrl = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? 'http://localhost:3000' : 'https://mountainspineorthopedics.com';
};

export const siteUrl = getSiteUrl();

// Always use production domain for canonical URLs (SEO requirement)
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://mountainspineorthopedics.com";

/** Lowercase, no trailing slash, absolute URL - always uses production domain for canonicals */
export function buildCanonical(path = '/'): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${p}`;
}

// Safe title/description fallbacks
export function safeTitle(primary?: string, fallback?: string): string {
  return (primary || fallback || "Mountain Spine & Orthopedics").trim();
}

export function safeDescription(primary?: string, fallback?: string): string {
  const text = (primary || fallback || "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 158);
  return text || "Trusted orthopedic and spine care across Florida.";
}

// SR-only utility class (Tailwind assumed)
export const srOnly = "sr-only";

/** Build consistent OG description for doctor pages */
export function buildOgDescription(fullName: string): string {
  return `Meet ${fullName}, a board-certified orthopedic surgeon at Mountain Spine & Orthopedics. Expert in minimally invasive surgery and personalized spine and joint care. Locations across Florida.`;
} 
