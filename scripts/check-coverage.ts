import { AllTreatmentsCombined } from '../components/data/treatments.js';
import { BODY_PARTS } from '../components/data/bodyParts.js';
import { tagMatches } from '../lib/tag-utils.js';

console.log('=== Body Part Hub Coverage Analysis ===\n');

BODY_PARTS.forEach(bodyPart => {
  const matchingTreatments = AllTreatmentsCombined.filter(treatment =>
    tagMatches(treatment.tag, treatment.additionalTags, treatment.categories, bodyPart.tagMatchers)
  );
  
  console.log(`${bodyPart.title} (${bodyPart.slug}):`);
  console.log(`  Treatments found: ${matchingTreatments.length}`);
  
  if (matchingTreatments.length === 0) {
    console.log(`  ⚠️  NO TREATMENTS FOUND!`);
  } else {
    matchingTreatments.forEach(t => {
      console.log(`    - ${t.title} (tag: ${t.tag || 'none'}, additionalTags: [${t.additionalTags?.join(', ') || 'none'}])`);
    });
  }
  console.log('');
});
