import { allTreatmentContent } from '../components/data/treatments.js';

console.log('=== Comprehensive Tag Analysis ===\n');

const treatmentsByCategory: Record<string, string[]> = {
  'Spine/Lower Spine': [],
  'Neck': [],
  'Hip': [],
  'Knee': [],
  'Shoulder': [],
  'Hand/Wrist/Elbow': [],
  'Foot/Ankle': [],
  'Sports Medicine': [],
  'Pain Management': [],
  'Missing/Incorrect': []
};

allTreatmentContent.forEach(t => {
  const slug = t.slug.toLowerCase();
  const title = t.title.toLowerCase();
  const keywords = t.keywords.join(' ').toLowerCase();
  const hasTag = !!t.tag;
  const currentTag = t.tag || 'MISSING';
  
  let shouldBeTagged = '';
  let needsMultiTag = false;
  
  if (slug.includes('hip') || title.includes('hip') || keywords.includes('hip') || 
      slug.includes('femoral') || slug.includes('acetabular') || slug.includes('pelvic')) {
    shouldBeTagged = 'Hip';
    if (slug.includes('arthroscopy') || keywords.includes('sports') || keywords.includes('athletic')) {
      needsMultiTag = true;
    }
  }
  else if (slug.includes('knee') || title.includes('knee') || keywords.includes('knee') ||
           slug.includes('acl') || slug.includes('pcl') || slug.includes('meniscus') ||
           slug.includes('patella') || slug.includes('cartilage-restoration')) {
    shouldBeTagged = 'Knee';
    if (slug.includes('acl') || slug.includes('pcl') || slug.includes('meniscus') || 
        slug.includes('arthroscopic') || keywords.includes('sports') || keywords.includes('athletic')) {
      needsMultiTag = true;
    }
  }
  else if (slug.includes('shoulder') || title.includes('shoulder') || keywords.includes('shoulder') ||
           slug.includes('rotator') || slug.includes('acromioplasty') || slug.includes('labral-repair-shoulder') ||
           slug.includes('biceps-tenodesis')) {
    shouldBeTagged = 'Shoulder';
    if (slug.includes('arthroscopy') || keywords.includes('sports') || keywords.includes('athletic')) {
      needsMultiTag = true;
    }
  }
  else if (slug.includes('hand') || slug.includes('wrist') || slug.includes('elbow') ||
           slug.includes('carpal') || slug.includes('cubital') || slug.includes('trigger') ||
           slug.includes('tennis-elbow') || slug.includes('golfers-elbow') || slug.includes('de-quervains') ||
           slug.includes('dupuytrens')) {
    shouldBeTagged = 'Hand/Wrist/Elbow';
  }
  else if (slug.includes('ankle') || slug.includes('foot') || slug.includes('bunion') ||
           slug.includes('hammertoe') || slug.includes('plantar') || slug.includes('achilles') ||
           slug.includes('mortons') || slug.includes('flat-foot')) {
    shouldBeTagged = 'Foot/Ankle';
  }
  else if (slug.includes('cervical') || title.includes('cervical') || keywords.includes('cervical') ||
           slug.includes('neck') || title.includes('neck') || slug.includes('acdf') ||
           slug.includes('posterior-cervical') || slug.includes('anterior-cervical')) {
    shouldBeTagged = 'Neck';
  }
  else if (slug.includes('spine') || slug.includes('spinal') || slug.includes('lumbar') ||
           slug.includes('fusion') || slug.includes('discectomy') || slug.includes('laminectomy') ||
           slug.includes('decompression') || slug.includes('kyphoplasty') || slug.includes('vertebroplasty') ||
           slug.includes('si-joint') || slug.includes('facet') || slug.includes('epidural') ||
           slug.includes('back-pain') || slug.includes('coccyx') || slug.includes('coccygectomy') ||
           slug.includes('xlif') || slug.includes('olif') || slug.includes('tlif') ||
           slug.includes('alif') || slug.includes('plif') || slug.includes('axial')) {
    shouldBeTagged = 'Spine/Lower Spine';
  }
  else if (slug.includes('sports') || slug.includes('athletic') || keywords.includes('sports') ||
           keywords.includes('athletic') || keywords.includes('athlete')) {
    shouldBeTagged = 'Sports Medicine';
  }
  else if (slug.includes('injection') || slug.includes('block') || slug.includes('ablation') ||
           slug.includes('rhizotomy') || slug.includes('epidural') || slug.includes('cortisone') ||
           slug.includes('nerve-block') || slug.includes('impar') || slug.includes('chronic-pain') ||
           slug.includes('non-surgical') || slug.includes('pain-management')) {
    shouldBeTagged = 'Pain Management';
  }
  
  const isCorrect = hasTag && (
    (shouldBeTagged === 'Hip' && currentTag === 'Hip') ||
    (shouldBeTagged === 'Knee' && currentTag === 'Knee') ||
    (shouldBeTagged === 'Shoulder' && currentTag === 'Shoulder') ||
    (shouldBeTagged === 'Hand/Wrist/Elbow' && currentTag === 'Hand') ||
    (shouldBeTagged === 'Foot/Ankle' && currentTag === 'Foot') ||
    (shouldBeTagged === 'Neck' && currentTag === 'Neck') ||
    (shouldBeTagged === 'Spine/Lower Spine' && (currentTag === 'Spine' || currentTag === 'Lower Spine')) ||
    (shouldBeTagged === 'Pain Management' && currentTag === 'Pain Management') ||
    (shouldBeTagged === 'Sports Medicine' && currentTag === 'Sports Medicine')
  );
  
  if (!isCorrect && shouldBeTagged) {
    treatmentsByCategory['Missing/Incorrect'].push(`${t.title} (${t.slug}): Current="${currentTag}", Should be="${shouldBeTagged}"${needsMultiTag ? ' + Sports Medicine' : ''}`);
  } else if (shouldBeTagged) {
    treatmentsByCategory[shouldBeTagged].push(t.title);
  } else {
    treatmentsByCategory['Missing/Incorrect'].push(`${t.title} (${t.slug}): Could not determine category`);
  }
});

Object.entries(treatmentsByCategory).forEach(([category, treatments]) => {
  if (treatments.length > 0) {
    console.log(`\n${category}: ${treatments.length} treatments`);
    if (category === 'Missing/Incorrect') {
      treatments.forEach(t => console.log(`  ⚠️  ${t}`));
    }
  }
});
