import { allTreatmentContent, AllTreatments } from '../components/data/treatments.js';

console.log('=== Analyzing Treatment Tags ===\n');

// Check allTreatmentContent
const treatmentsNeedingTags: Array<{slug: string, title: string, currentTag?: string, keywords: string[]}> = [];
const treatmentsWithTags: Array<{slug: string, title: string, tag: string, additionalTags?: string[]}> = [];

allTreatmentContent.forEach(t => {
  if (t.tag) {
    treatmentsWithTags.push({
      slug: t.slug,
      title: t.title,
      tag: t.tag,
      additionalTags: t.additionalTags
    });
  } else {
    treatmentsNeedingTags.push({
      slug: t.slug,
      title: t.title,
      keywords: t.keywords
    });
  }
});

console.log(`Treatments WITH explicit tags: ${treatmentsWithTags.length}`);
console.log(`Treatments NEEDING explicit tags: ${treatmentsNeedingTags.length}\n`);

console.log('Treatments needing tags:');
treatmentsNeedingTags.forEach(t => {
  console.log(`- ${t.title} (${t.slug})`);
});

console.log('\n\nTreatments with tags:');
treatmentsWithTags.forEach(t => {
  console.log(`- ${t.title}: tag="${t.tag}", additionalTags=[${t.additionalTags?.join(', ') || 'none'}]`);
});
