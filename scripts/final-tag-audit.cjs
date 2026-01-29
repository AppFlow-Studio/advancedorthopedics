const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve('components/data/treatments.tsx'), 'utf8');

// Get the 121 unique slugs
const slugRegex = /(?:slug|["']slug["']):\s*["']([^"']+)["']/g;
const slugs = [];
let match;
while ((match = slugRegex.exec(content)) !== null) {
    slugs.push(match[1]);
}
const uniqueSlugs = [...new Set(slugs)].sort();

console.log(`Analyzing ${uniqueSlugs.length} unique treatment slugs...\n`);

const results = [];

uniqueSlugs.forEach(slug => {
    // Find the object block for this slug
    // We search for the slug definition and then look at the surrounding text
    const escapedSlug = slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const pattern = new RegExp(`(?:slug|["']slug["']):\\s*["']${escapedSlug}["']`, 'g');
    const slugMatch = pattern.exec(content);
    
    if (slugMatch) {
        const startPos = slugMatch.index;
        // Look in a window around the slug to find 'tag:' or 'additionalTags:'
        // We'll search 1000 characters before and after to be safe
        const start = Math.max(0, startPos - 1000);
        const end = Math.min(content.length, startPos + 1000);
        const window = content.substring(start, end);
        
        // Very basic check: does 'tag:' exist in the same likely object block?
        // We'll look for 'tag:' that isn't inside another object (approximated by looking for '{' and '}')
        const hasTag = /tag:\s*["']/.test(window);
        const hasAdditionalTags = /additionalTags:\s*\[/.test(window);
        
        results.push({
            slug,
            hasTag,
            hasAdditionalTags
        });
    }
});

const untagged = results.filter(r => !r.hasTag);

console.log(`Summary:`);
console.log(`- Total Unique Slugs: ${uniqueSlugs.length}`);
console.log(`- Tagged: ${results.length - untagged.length}`);
console.log(`- Untagged: ${untagged.length}`);

if (untagged.length > 0) {
    console.log('\n--- Untagged Slugs ---');
    untagged.forEach((r, i) => console.log(`${i+1}. ${r.slug}`));
}
