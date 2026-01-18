/**
 * Blog utility functions for schema generation
 * 
 * Calculates word count and reading time from blog content for schema markup
 */

export interface ContentStats {
  wordCount: number;
  timeRequired: string; // ISO 8601 duration format (e.g., "PT5M" = 5 minutes)
}

/**
 * Calculates word count and reading time from blog content
 * 
 * Extracts text from blog_info sections, strips HTML, and calculates:
 * - Word count: Total words in the blog post
 * - Reading time: Estimated reading time at 200 words per minute (ISO 8601 format)
 * 
 * @param blog - Blog data from Supabase
 * @returns Object with wordCount (number) and timeRequired (ISO 8601 duration string)
 */
export function calculateContentStats(blog: any): ContentStats {
  // Start with description text
  let allText = blog.blog_info?.desc || '';
  
  // Extract text from all blog_info sections
  const sections = blog.blog_info?.blog_info || [];
  
  sections.forEach((section: any) => {
    // Add section body text
    if (section.body) {
      const cleanText = section.body
        .replace(/<[^>]*>/g, ' ') // Strip HTML tags
        .replace(/&nbsp;/gi, ' ') // Replace &nbsp; with space
        .replace(/&[a-z]+;/gi, ' ') // Replace other HTML entities
        .replace(/\s+/g, ' ') // Normalize whitespace
        .trim();
      allText += ' ' + cleanText;
    }
    
    // Add sub_stories text
    if (Array.isArray(section.sub_stories)) {
      section.sub_stories.forEach((sub: any) => {
        if (sub.body) {
          const cleanText = sub.body
            .replace(/<[^>]*>/g, ' ')
            .replace(/&nbsp;/gi, ' ')
            .replace(/&[a-z]+;/gi, ' ')
            .replace(/\s+/g, ' ')
            .trim();
          allText += ' ' + cleanText;
        }
      });
    }
  });
  
  // Count words (filter out empty strings)
  const words = allText.trim().split(/\s+/).filter(w => w.length > 0);
  const wordCount = words.length;
  
  // Calculate reading time: 200 words per minute average reading speed
  const minutes = Math.max(1, Math.ceil(wordCount / 200)); // Minimum 1 minute
  const timeRequired = `PT${minutes}M`; // ISO 8601 duration format
  
  return { wordCount, timeRequired };
}
