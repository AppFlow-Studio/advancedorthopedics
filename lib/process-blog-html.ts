/**
 * Processes blog HTML content to ensure links have proper styling and spacing is preserved
 * This is safe for server-side use as it only modifies HTML strings
 */
export function processBlogHTML(html: string): string {
  if (!html) return '';

  let processedHTML = html;

  // Process all anchor tags - match <a> tags with any attribute order
  processedHTML = processedHTML.replace(
    /<a\s+([^>]*?)>/gi,
    (match, attributes) => {
      // Extract href if it exists
      const hrefMatch = attributes.match(/href=["']([^"']+)["']/i);
      if (!hrefMatch) return match; // Skip if no href
      
      const href = hrefMatch[1];
      const fullAttributes = attributes;
      
      // Check what attributes already exist
      const hasTarget = /target=/i.test(fullAttributes);
      const hasRel = /rel=/i.test(fullAttributes);
      const hasClass = /class=/i.test(fullAttributes);
      const hasStyle = /style=/i.test(fullAttributes);
      
      let newAttributes = fullAttributes;
      
      // Add or update class
      if (!hasClass) {
        newAttributes = `class="text-blue-600 hover:text-blue-800 underline transition-colors duration-200" ${newAttributes}`;
      } else {
        // Append to existing class, avoiding duplicates
        newAttributes = newAttributes.replace(
          /class=["']([^"']+)["']/i,
          (classMatch, existingClass) => {
            // Check if our classes are already there
            if (existingClass.includes('text-blue-600')) {
              return classMatch;
            }
            return `class="${existingClass} text-blue-600 hover:text-blue-800 underline transition-colors duration-200"`;
          }
        );
      }
      
      // Add target if not present
      if (!hasTarget) {
        newAttributes += ' target="_blank"';
      }
      
      // Add rel if not present
      if (!hasRel) {
        newAttributes += ' rel="noopener noreferrer"';
      }
      
      // Add style if not present
      if (!hasStyle) {
        newAttributes += ' style="color: #2563eb"';
      }
      
      return `<a ${newAttributes.trim()}>`;
    }
  );

  // Ensure <p> tags have proper spacing (mb-4 class)
  processedHTML = processedHTML.replace(
    /<p\s+([^>]*?)>/gi,
    (match, attributes) => {
      const hasClass = /class=/i.test(attributes);
      
      if (!hasClass) {
        return `<p class="mb-4" ${attributes}>`;
      } else {
        // Check if mb-4 is already there
        if (attributes.includes('mb-4')) {
          return match;
        }
        // Append mb-4 to existing class
        const updatedAttributes = attributes.replace(
          /class=["']([^"']+)["']/i,
          (classMatch, existingClass) => {
            return `class="${existingClass} mb-4"`;
          }
        );
        return `<p ${updatedAttributes}>`;
      }
    }
  );

  // Handle <p> tags without attributes
  processedHTML = processedHTML.replace(
    /<p>/gi,
    '<p class="mb-4">'
  );

  return processedHTML;
}

