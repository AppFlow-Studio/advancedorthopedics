const fs = require('fs');
const path = require('path');

const clinicsPath = path.resolve('components/data/clinics.tsx');
const content = fs.readFileSync(clinicsPath, 'utf8');

const stateRegex = /stateSlug:\s*["']([^"']+)["']/g;
const states = new Set();
let match;
while ((match = stateRegex.exec(content)) !== null) {
    states.add(match[1]);
}

console.log('States found in clinics.tsx:');
Array.from(states).sort().forEach(state => console.log(`- ${state}`));
