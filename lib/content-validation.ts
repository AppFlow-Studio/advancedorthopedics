/**
 * Content validation utilities for condition and treatment pages
 * Used to prevent empty sections from rendering
 */

/**
 * Check if string has meaningful content
 */
export function isNonEmptyString(s: string | undefined | null): boolean {
  return typeof s === 'string' && s.trim().length > 0;
}

/**
 * Check if array has items
 */
export function isNonEmptyArray(arr: any[] | undefined | null): boolean {
  return Array.isArray(arr) && arr.length > 0;
}

/**
 * Check if object has content in any of the specified keys
 */
export function hasAnyContent(obj: any, keys: string[]): boolean {
  if (!obj) return false;
  return keys.some(key => {
    const val = obj[key];
    if (typeof val === 'string') return isNonEmptyString(val);
    if (Array.isArray(val)) return isNonEmptyArray(val);
    return !!val;
  });
}

/**
 * Check if section should render (has body content)
 */
export function shouldRenderSection(
  heading: string | undefined | null,
  body: string | any[] | undefined | null
): boolean {
  const hasBody = typeof body === 'string' 
    ? isNonEmptyString(body) 
    : isNonEmptyArray(body);
  return hasBody; // Only render if body exists
}
