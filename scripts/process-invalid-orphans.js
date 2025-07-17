const fs = require('fs');
const path = require('path');

const base = 'https://mountainspineorthopedics.com';
const lines = fs.readFileSync('invalid_orphans.txt', 'utf8').split(/\r?\n/).filter(Boolean);

const redirects = [];
const disallows = new Set();

for (const url of lines) {
  if (url.includes('/_next/static/')) {
    // Static asset – block crawling
    const dir = url.replace(base, '').split('/').slice(0, 4).join('/');
    disallows.add(`Disallow: ${dir}/*`);
    continue;
  }

  // map known old-slug patterns → canonical equivalents
  let dest = url
    .replace('https://www.', base)        // www → bare
    .replace('/treatments/faqs', '/find-care/candidacy-check')
    .replace('/area-of-speciality/', '/conditions/')
    .replace('triggerfingerrelease',      'trigger-finger-release')
    .replace('totalkneereplacement',      'total-knee-replacement')
    .replace('tlifsurgery',               'understanding-tlif-surgery')
    .replace('surgicaltreatments',        'surgical-treatments')
    .replace('stemcelltreatment',         'stem-cell-treatment')
    .replace('spinalfusion',              'spinal-fusion')
    .replace('shoulderarthroscopy',       'shoulder-arthroscopy')
    .replace('rotatorcuffrepair',         'rotator-cuff-repair-surgery')
    .replace('lumbardecompression',       'lumbar-decompression')
    .replace('revisionspinalsurgery',     'revision-spinal-surgery')
    .replace('resurfacingshoulderreplacement', 'resurfacing-shoulder-replacement')
    .replace('posteriorcervicalfusionwithinstrumentation', 'posterior-cervical-fusion-with-instrumentation-surgery')
    .replace('fracturefixation',          'fracture-fixation')
    .replace('degenerative-disc-disease-surgery-overview', 'degenerative-disc-disease-surgery')
    .replace('degenerative-disc-disease-surgery-detailed', 'degenerative-disc-disease-surgery-details')
    .replace('bunioncorrectionsurgery',   'bunion-correction-surgery')
    .replace('arthroscopickneesurgery',   'arthroscopic-knee-surgery')
    .replace('anti-inflammatory-injections', 'anti-inflammatory-injections-for-joint-and-spine-pain')
    .replace('degenerativediscdisease',   'degenerative-disc-disease')
    .replace('lowerbackpain',             'lower-back-pain')
    .replace('trochantericbursitis',      'trochanteric-bursitis')
    .replace('tornmeniscus',              'torn-meniscus')
    .replace('snappinghipsydrome',        'snapping-hip-syndrome')
    .replace('shouldertendonitis',        'shoulder-tendonitis')
    .replace('sacroiliacjointdysfunction', 'sacroiliac-joint-dysfunction')
    .replace('rotatorcufftear',           'rotator-cuff-tear')
    .replace('neckpain',                  'neck-pain')
    .replace('labraltears',               'labral-tears')
    .replace('facetjointdisease',         'facet-joint-disease')
    .replace('cervicalspinalstenosis',    'cervical-spinal-stenosis')
    .replace('carpaltunnelsyndrome',      'carpal-tunnel-syndrome')
    .replace('bulgingdisc',               'bulging-disc')
    .replace('adultdegenerativescoliosis', 'adult-degenerative-scoliosis')
    .replace('adjacentsegmentdisease',    'adjacent-segment-disease');

  if (dest !== url) {
    redirects.push({
      source: url.replace(base, ''),
      destination: dest.replace(base, ''),
      permanent: true,
    });
  }
}

console.log(`Generated ${redirects.length} redirects and ${disallows.size} disallow rules`);

// 1) append redirects to next.config.ts
const configPath = 'next.config.ts';
let config = fs.readFileSync(configPath, 'utf8');

// Find the redirects array and append new redirects
const redirectsArray = redirects.map(r => `    ${JSON.stringify(r)}`).join(',\n');
config = config.replace(
  /async redirects\(\) \{\s*return \[/,
  `async redirects() {\n  return [\n${redirectsArray},`
);

fs.writeFileSync(configPath, config);
console.log('✓ Updated next.config.ts with redirects');

// 2) update robots.txt
const robotsPath = 'public/robots.txt';
let robots = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
robots = robots.trim() + '\n' + [...disallows].join('\n') + '\n';
fs.writeFileSync(robotsPath, robots);
console.log('✓ Updated robots.txt with disallow rules'); 