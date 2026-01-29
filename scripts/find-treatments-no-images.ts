import { AllTreatmentsCombined } from '../components/data/treatments.js';

const treatmentsWithNoImages = AllTreatmentsCombined.filter(t => {
  const img = t.card_img;
  if (!img) return true;
  if (typeof img === 'string') {
    // If it's a string, check if it's a valid CDN URL or non-empty
    return img.length === 0 || img.includes('Placeholder') || !img.includes('mountainspineortho.b-cdn.net');
  }
  return false; // It's a static import (StaticImageData), which is valid
});

console.log('Treatments with NO images (or placeholder/invalid):');
treatmentsWithNoImages.forEach(t => {
  console.log(`- ${t.title} (${t.slug}) | Image: ${t.card_img}`);
});

console.log(`\nTotal: ${treatmentsWithNoImages.length}`);
