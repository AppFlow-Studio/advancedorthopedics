import { AllTreatmentsCombined } from '../components/data/treatments.js';

const missingImages = AllTreatmentsCombined.filter(t => {
  const hasImg = (t.card_img && typeof t.card_img === 'string' && t.card_img.length > 0) || 
                 (t.card_img && typeof t.card_img !== 'string');
  return !hasImg;
});

console.log('Treatments with missing card images:');
missingImages.forEach(t => {
  console.log(`- ${t.title} (${t.slug})`);
});

console.log(`\nTotal missing: ${missingImages.length}`);
console.log(`Total treatments: ${AllTreatmentsCombined.length}`);
