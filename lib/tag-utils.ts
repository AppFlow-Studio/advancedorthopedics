/**
 * Tag normalization and matching utilities
 * Ensures consistent tag matching across conditions, treatments, and body part hubs
 */

/**
 * Normalizes a tag to lowercase-hyphen format for consistent matching.
 * @example normalizeTag("Lower Spine") -> "lower-spine"
 * @example normalizeTag("Pain Management") -> "pain-management"
 * @example normalizeTag("Shoulder") -> "shoulder"
 */
export function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '')  // Remove ampersands
    .replace(/[^a-z0-9-]/g, '');
}

/**
 * Checks if a condition/treatment matches any of the matchers based on tag, additionalTags, or categories.
 * All comparisons are done with normalized tags for consistency.
 * 
 * @param tag - Primary tag from condition/treatment
 * @param additionalTags - Additional body part tags
 * @param categories - Category tags like "pain-management", "sports-medicine"
 * @param matchers - Array of tag matchers from body part hub
 * @returns true if any tag matches any matcher
 */
export function tagMatches(
  tag: string | undefined,
  additionalTags: string[] | undefined,
  categories: string[] | undefined,
  matchers: string[]
): boolean {
  const normalizedMatchers = matchers.map(normalizeTag);
  
  // Check primary tag
  if (tag && normalizedMatchers.includes(normalizeTag(tag))) {
    return true;
  }
  
  // Check additional tags
  if (additionalTags?.some(t => normalizedMatchers.includes(normalizeTag(t)))) {
    return true;
  }
  
  // Check categories
  if (categories?.some(c => normalizedMatchers.includes(normalizeTag(c)))) {
    return true;
  }
  
  return false;
}
