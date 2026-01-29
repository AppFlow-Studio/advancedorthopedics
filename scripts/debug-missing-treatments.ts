import { AllTreatments, allTreatmentContent, AllTreatmentsCombined } from '../components/data/treatments.js';

console.log(`AllTreatments length: ${AllTreatments.length}`);
console.log(`allTreatmentContent length: ${allTreatmentContent.length}`);
console.log(`AllTreatmentsCombined length: ${AllTreatmentsCombined.length}`);

// Find which slugs are in the file but not in AllTreatmentsCombined
import * as fs from 'fs';
const content = fs.readFileSync('components/data/treatments.tsx', 'utf8');
const slugsInFile = new Set();
const slugRegex = /slug\s*:\s*["']([^"']+)["']/g;
let match;
while ((match = slugRegex.exec(content)) !== null) {
  slugsInFile.add(match[1]);
}
const quotedSlugRegex = /"slug"\s*:\s*["']([^"']+)["']/g;
while ((match = quotedSlugRegex.exec(content)) !== null) {
  slugsInFile.add(match[1]);
}

const combinedSlugs = new Set(AllTreatmentsCombined.map(t => t.slug));
const missingSlugs = Array.from(slugsInFile).filter(s => !combinedSlugs.has(s));

console.log('\nSlugs in file but NOT in AllTreatmentsCombined:');
missingSlugs.forEach(s => console.log(`- ${s}`));
console.log(`Total missing slugs: ${missingSlugs.length}`);
