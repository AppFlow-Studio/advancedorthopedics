import { allTreatmentContent } from '../components/data/treatments.js';

console.log(`allTreatmentContent length: ${allTreatmentContent.length}`);
console.log('Last 5 slugs in allTreatmentContent:');
allTreatmentContent.slice(-5).forEach(t => console.log(`- ${t.slug}`));
