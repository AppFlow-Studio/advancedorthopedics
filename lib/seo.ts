// Handle both development and production environments
const getSiteUrl = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return isDevelopment ? 'http://localhost:3000' : 'https://mountainspineorthopedics.com';
};

export const siteUrl = getSiteUrl();

/** Lowercase, no trailing slash, absolute URL */
export function buildCanonical(path = '/'): string {
  const url = new URL(path.startsWith('/') ? path : `/${path}`, siteUrl);
  return url.toString().replace(/\/$/, '').toLowerCase();
}

/** Build consistent OG description for doctor pages */
export function buildOgDescription(fullName: string): string {
  return `Meet ${fullName}, a board-certified orthopedic surgeon at Mountain Spine & Orthopedics. Expert in minimally invasive surgery and personalized spine and joint care. Locations across Florida.`;
} 
