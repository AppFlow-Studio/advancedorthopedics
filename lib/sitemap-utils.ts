import { buildCanonical } from "./seo";

/**
 * Helper function to generate a valid sitemap URL entry.
 * Follows Google's recommendations: 
 * - Omit <priority> and <changefreq> as they are ignored by Google.
 * - Only include <lastmod> if a valid date is provided.
 * - Ensure consistent ISO format.
 */
export function generateSitemapEntry(path: string, lastmod?: string | null) {
  const loc = buildCanonical(path);
  
  let lastmodTag = "";
  if (lastmod) {
    try {
      const date = new Date(lastmod);
      if (!isNaN(date.getTime())) {
        // Use ISO string but ensure it's just the date or full timestamp consistently
        // Google supports both. We'll use the full ISO string for precision if available.
        lastmodTag = `\n    <lastmod>${date.toISOString()}</lastmod>`;
      }
    } catch (e) {
      console.error(`Invalid lastmod date for path ${path}: ${lastmod}`);
    }
  }

  return `
  <url>
    <loc>${loc}</loc>${lastmodTag}
  </url>`;
}

/**
 * Wraps URL entries in the standard <urlset> tag.
 */
export function wrapInUrlset(content: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content}
</urlset>`;
}

/**
 * Wraps sitemap locations in the standard <sitemapindex> tag.
 */
export function wrapInSitemapIndex(content: string) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${content}
</sitemapindex>`;
}

/**
 * Generates a <sitemap> entry for the index file.
 */
export function generateSitemapIndexEntry(path: string, lastmod?: string | null) {
  const loc = buildCanonical(path);
  let lastmodTag = "";
  if (lastmod) {
    try {
      const date = new Date(lastmod);
      if (!isNaN(date.getTime())) {
        lastmodTag = `\n    <lastmod>${date.toISOString()}</lastmod>`;
      }
    } catch (e) {
      // Ignore invalid date
    }
  }

  return `
  <sitemap>
    <loc>${loc}</loc>${lastmodTag}
  </sitemap>`;
}
