const fs = require('fs');

// 1) gather invalid paths into a Set for quick look-ups
const invalidContent = fs.readFileSync('invalid_orphans.txt', 'utf8');
const INVALID = new Set(invalidContent.split(/\r?\n/).filter(Boolean).map(u => u.trim()));

// canonical slug helpers
function fixSlug(path) {
  return path
    .replace(/^\/area-of-speciality\//, '/conditions/')
    .replace('/treatments/faqs', '/find-care/candidacy-check')
    .replace('triggerfingerrelease', 'trigger-finger-release')
    .replace('totalkneereplacement', 'total-knee-replacement')
    .replace('degenerativediscdisease', 'degenerative-disc-disease')
    .replace('tlifsurgery', 'understanding-tlif-surgery')
    .replace('stemcelltreatment', 'stem-cell-treatment')
    .replace('rotatorcuffrepair', 'rotator-cuff-repair-surgery')
    .replace('lumbardecompression', 'lumbar-decompression')
    .replace('surgicaltreatments', 'surgical-treatments')
    .replace('spinalfusion', 'spinal-fusion')
    .replace('shoulderarthroscopy', 'shoulder-arthroscopy')
    .replace('revisionspinalsurgery', 'revision-spinal-surgery')
    .replace('resurfacingshoulderreplacement', 'resurfacing-shoulder-replacement')
    .replace('posteriorcervicalfusionwithinstrumentation', 'posterior-cervical-fusion-with-instrumentation-surgery')
    .replace('fracturefixation', 'fracture-fixation')
    .replace('degenerative-disc-disease-surgery-overview', 'degenerative-disc-disease-surgery')
    .replace('degenerative-disc-disease-surgery-detailed', 'degenerative-disc-disease-surgery-details')
    .replace('bunioncorrectionsurgery', 'bunion-correction-surgery')
    .replace('arthroscopickneesurgery', 'arthroscopic-knee-surgery')
    .replace('anti-inflammatory-injections', 'anti-inflammatory-injections-for-joint-and-spine-pain')
    .replace('lowerbackpain', 'lower-back-pain')
    .replace('trochantericbursitis', 'trochanteric-bursitis')
    .replace('tornmeniscus', 'torn-meniscus')
    .replace('snappinghipsydrome', 'snapping-hip-syndrome')
    .replace('shouldertendonitis', 'shoulder-tendonitis')
    .replace('sacroiliacjointdysfunction', 'sacroiliac-joint-dysfunction')
    .replace('rotatorcufftear', 'rotator-cuff-tear')
    .replace('neckpain', 'neck-pain')
    .replace('labraltears', 'labral-tears')
    .replace('facetjointdisease', 'facet-joint-disease')
    .replace('cervicalspinalstenosis', 'cervical-spinal-stenosis')
    .replace('carpaltunnelsyndrome', 'carpal-tunnel-syndrome')
    .replace('bulgingdisc', 'bulging-disc')
    .replace('adultdegenerativescoliosis', 'adult-degenerative-scoliosis')
    .replace('adjacentsegmentdisease', 'adjacent-segment-disease');
}

// 2) open next.config.ts and rewrite the redirects() array
const configPath = 'next.config.ts';
const lines = fs.readFileSync(configPath, 'utf8').split(/\r?\n/);
const start = lines.findIndex(l => l.match(/async\s+redirects\s*\(\)/));
const open = lines.findIndex((l, i) => i > start && l.includes('['));       // first [
const close = lines.findIndex((l, i) => i > open && l.includes(']'));       // matching ]

if (start === -1 || open === -1 || close === -1) {
  console.error('Could not find redirects function in next.config.ts');
  process.exit(1);
}

// Extract and parse redirects manually
const redirectLines = lines.slice(open + 1, close);
const objects = [];

for (let line of redirectLines) {
  line = line.trim();
  
  // Skip comments and empty lines
  if (line.startsWith('//') || line.startsWith('/*') || line === '' || line === ',') {
    continue;
  }
  
  // Try to extract JSON object from the line
  const jsonMatch = line.match(/\{.*\}/);
  if (jsonMatch) {
    try {
      // Clean up the JSON string
      let jsonStr = jsonMatch[0]
        .replace(/(\w+):/g, '"$1":')  // Quote property names
        .replace(/'/g, '"')            // Replace single quotes with double quotes
        .replace(/,\s*}/g, '}')        // Remove trailing commas
        .replace(/,\s*]/g, ']');       // Remove trailing commas in arrays
      
      const obj = JSON.parse(jsonStr);
      if (obj.source && obj.destination) {
        objects.push(obj);
      }
    } catch (e) {
      // Skip malformed objects
      continue;
    }
  }
}

console.log(`Found ${objects.length} redirect objects`);

const cleaned = [];

for (let obj of objects) {
  if (!obj?.source || !obj.destination) continue;

  // strip protocol/domain
  obj.source = obj.source.replace(/^https?:\/\/[^/]+/, '');
  obj.destination = obj.destination.replace(/^https?:\/\/[^/]+/, '');

  // ensure leading slash
  if (!obj.source.startsWith('/')) obj.source = '/' + obj.source;
  if (!obj.destination.startsWith('/')) obj.destination = '/' + obj.destination;

  // static asset redirect? drop it
  if (obj.source.startsWith('/_next/static') || obj.destination.startsWith('/_next/static')) continue;

  // self-redirect? drop it
  if (obj.source === obj.destination) continue;

  // if destination path is in INVALID set, try to canonicalise
  const fullDest = 'https://mountainspineorthopedics.com' + obj.destination;
  if (INVALID.has(fullDest)) {
    const fixed = fixSlug(obj.destination);
    if (fixed !== obj.destination) obj.destination = fixed;
  }

  cleaned.push(obj);
}

const newRedirectTxt = cleaned.map(o => JSON.stringify(o)).join(',\n    ');

// replace old array with new
lines.splice(open + 1, close - open - 1, `    ${newRedirectTxt}`);

fs.writeFileSync(configPath, lines.join('\n'));
console.log(`✓ Cleaned redirects: ${objects.length} → ${cleaned.length} rules`);

// 3) robots.txt: ensure static assets are blocked only once
const robotsPath = 'public/robots.txt';
const robotsContent = fs.existsSync(robotsPath) ? fs.readFileSync(robotsPath, 'utf8') : '';
const rLines = new Set(robotsContent.split(/\r?\n/).filter(Boolean));
rLines.add('Disallow: /_next/static/media/*');
fs.writeFileSync(robotsPath, [...rLines].join('\n') + '\n');
console.log('✓ Updated robots.txt with static asset blocking'); 