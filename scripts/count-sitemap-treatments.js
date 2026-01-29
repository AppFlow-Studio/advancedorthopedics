const fs = require('fs');
const path = require('path');

const content = fs.readFileSync(path.resolve('components/data/treatments.tsx'), 'utf8');

// Function to find array content by name
function findArraySlugs(name) {
    const regex = new RegExp(`export const ${name}\\s*[:\\w\\[\\]]*\\s*=\\s*\\[([\\s\\S]*?)\\];`, 'g');
    const match = regex.exec(content);
    if (!match) return [];
    
    const arrayContent = match[1];
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    const slugs = [];
    let slugMatch;
    while ((matchSlug = slugRegex.exec(arrayContent)) !== null) {
        slugs.push(matchSlug[1]);
    }
    return slugs;
}

// Slugs in AllTreatments (old format)
const oldSlugs = [];
const allTreatmentsMatch = content.match(/export const AllTreatments\s*[:\w\\[\]]*\s*=\s*\[([\s\S]*?)\];/);
if (allTreatmentsMatch) {
    const slugRegex = /"slug":\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(allTreatmentsMatch[1])) !== null) {
        oldSlugs.push(match[1]);
    }
}

// Slugs in allTreatmentContent (new format)
// allTreatmentContent combines multiple batches
const batch1 = findArraySlugs('treatmentContentBatch1');
const batch2 = findArraySlugs('treatmentContentBatch2');
const batch3 = findArraySlugs('treatmentContentBatch3');
const batch4 = findArraySlugs('treatmentContentBatch4');
const batch5 = findArraySlugs('treatmentContentBatch5');
const placeholders = findArraySlugs('treatmentContentPlaceholders');

// There's also some direct entries in allTreatmentContent
const directNewSlugs = [];
const allTreatmentContentMatch = content.match(/export const allTreatmentContent\s*[:\w\\[\]]*\s*=\s*\[([\s\S]*?)\];/);
if (allTreatmentContentMatch) {
    const slugRegex = /slug:\s*["']([^"']+)["']/g;
    let match;
    while ((match = slugRegex.exec(allTreatmentContentMatch[1])) !== null) {
        directNewSlugs.push(match[1]);
    }
}

const allNewSlugs = [...new Set([...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...placeholders, ...directNewSlugs])];
const newSlugsSet = new Set(allNewSlugs);
const uniqueOldSlugs = oldSlugs.filter(s => !newSlugsSet.has(s));

const combinedSlugs = [...new Set([...allNewSlugs, ...uniqueOldSlugs])];

console.log('=== Sitemap Treatment Slug Count ===');
console.log(`New Format Slugs: ${allNewSlugs.length}`);
console.log(`Unique Old Format Slugs: ${uniqueOldSlugs.length}`);
console.log(`Total Unique Combined Slugs: ${combinedSlugs.length}`);

console.log('\n--- Slugs ---');
combinedSlugs.sort().forEach((s, i) => console.log(`${i+1}. ${s}`));
