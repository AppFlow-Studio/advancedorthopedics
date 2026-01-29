import { AllTreatmentsCombined } from '../components/data/treatments.js';

const treatmentsWithMissingCdnImages = AllTreatmentsCombined.filter(t => {
    const img = t.card_img;
    if (!img) return true;
    if (typeof img === 'string') {
        return !img.includes('mountainspineortho.b-cdn.net/treatments-thumbnails/');
    }
    return false; // Static import
});

console.log('Treatments with MISSING or NON-THUMBNAIL CDN images:');
treatmentsWithMissingCdnImages.forEach(t => {
    console.log(`- ${t.title} (${t.slug}) | Image: ${t.card_img}`);
});

console.log(`\nTotal: ${treatmentsWithMissingCdnImages.length}`);
