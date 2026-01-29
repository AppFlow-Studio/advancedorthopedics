import { BODY_PARTS } from '@/components/data/bodyParts';
import { normalizeTag } from './tag-utils';

/**
 * Maps a condition or treatment tag to its corresponding body-part hub slug.
 * Uses normalized tag comparison for consistent matching.
 * 
 * @param tag - The tag from a condition or treatment (e.g., "Spine", "Knee", "Sports Medicine")
 * @returns The body-part hub slug (e.g., "spine", "knee", "sports-medicine") or null if no match found
 * 
 * @example
 * getBodyPartSlugFromTag("Spine") // Returns "spine"
 * getBodyPartSlugFromTag("Knee") // Returns "knee"
 * getBodyPartSlugFromTag("Lower Spine") // Returns "spine" (matches "spine" hub's tagMatchers)
 */
export function getBodyPartSlugFromTag(tag: string | undefined | null): string | null {
  if (!tag) return null;

  const normalizedInputTag = normalizeTag(tag);

  // Iterate through body parts to find a match
  for (const bodyPart of BODY_PARTS) {
    // Check if the tag matches any of the tagMatchers using normalized comparison
    const matches = bodyPart.tagMatchers.some(
      matcher => normalizeTag(matcher) === normalizedInputTag
    );

    if (matches) {
      return bodyPart.slug;
    }
  }

  // Return null if no match found
  return null;
}

/**
 * Gets the body part object from a tag.
 * 
 * @param tag - The tag from a condition or treatment
 * @returns The BodyPart object or null if no match found
 */
export function getBodyPartFromTag(tag: string | undefined | null) {
  const slug = getBodyPartSlugFromTag(tag);
  if (!slug) return null;
  
  return BODY_PARTS.find(bp => bp.slug === slug) || null;
}
