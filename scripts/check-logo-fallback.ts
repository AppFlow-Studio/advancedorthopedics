import { AllTreatmentsCombined } from '../components/data/treatments.js';

const fallbackToLogo = AllTreatmentsCombined.filter(t => {
    const img = t.card_img;
    const isValid = (img && typeof img !== 'string' && img !== null) || 
                    (typeof img === 'string' && img.length > 0 && !img.includes('Placeholder'));
    return !isValid;
});

console.log('Treatments falling back to Logo (no valid image):');
fallbackToLogo.forEach(t => {
    console.log(`- ${t.title} (${t.slug}) | Image: ${t.card_img}`);
});

console.log(`\nTotal falling back to Logo: ${fallbackToLogo.length}`);
