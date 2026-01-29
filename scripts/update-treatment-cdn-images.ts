// scripts/update-treatment-cdn-images.ts
// Safely updates card_img and inTxt_img in the AllTreatments array
// inside components/data/treatments.tsx to use the canonical CDN
// thumbnail URLs for each treatment slug, without touching the newer
// structured treatment content blocks.

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// __dirname equivalent for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// All known treatment CDN thumbnail URLs
const CDN_URLS: string[] = [
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--acdf-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--achilles-tendon-repair--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--acl-reconstruction-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--acromioplasty--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--aging-management--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--ankle-arthroscopy-minimally-invasive-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--ankle-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--ankle-ligament-reconstruction-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--ankle-replacement-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--anterior-cervical-corpectomy-and-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--anterior-lumbar-corpectomy-and-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--anterior-lumbar-interbody-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--anti-inflammatory-injections-for-joint-and-spine-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--arthritis-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--arthroscopic-knee-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--artificial-disc-replacement-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--athletic-evaluation--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--axial-fusion-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--back-pain-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--biceps-tenodesis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--bunion-correction-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--bursitis-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--carpal-tunnel-release--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--cervical-disc-arthroplasty--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--cervical-disc-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--cervical-laminectomy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--chronic-pain-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--coccygectomy-tailbone-removal-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--coccyx-nerve-ablation--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--core-decompression--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--cortisone-injections-for-back-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--cubital-tunnel-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--de-quervains-release--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--degenerative-disc-disease-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--degenerative-disc-disease-surgery-details--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--diabetic-foot-care--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--disc-replacement-vs-fusion-what-you-need-to-know--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--dupuytrens-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--elbow-arthroscopy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--elbow-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--endoscopic-discectomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--endoscopic-foraminotomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--epidural-steroid-injection--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--extreme-lateral-interbody-fusion-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--facet-ablation-rhizotomy-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--facet-block-ablation-rhizotomy-and-facet-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--flat-foot-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--foot-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--fracture-fixation--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--golfers-elbow-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hammertoe-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hand-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--heel-pain-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-arthroscopy-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-bursectomy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-impingement-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-labral-repair--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hip-resurfacing--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hybrid-cervical-spine-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--hybrid-lumbar-spine-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--impar-block-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--joint-pain-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--knee-cartilage-restoration--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--knee-ligament-repair--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--knee-osteotomy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--kyphoplasty--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--labral-repair-shoulder--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-decompression--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-disc-replacement-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-fusion-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-laminectomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-microdiscectomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--lumbar-microendoscopic-discectomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--meniscus-repair-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--meniscus-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--mortons-neuroma-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--motion-preservation-spine-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--multilevel-degenerative-disc-disease-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--neck-pain-treatment-and-shoulder-pain-relief--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--nerve-block-injection--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--non-surgical-treatments-for-pain-management--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--oblique-lumbar-interbody-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--osteoporosis-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--partial-knee-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--pcl-reconstruction--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--percutaneous-carpal-tunnel-release--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--percutaneous-discectomy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--plantar-fasciitis-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--plantar-fasciitis-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--plif--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--posterior-cervical-foraminotomy-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--posterior-cervical-fusion-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--posterior-cervical-fusion-with-instrumentation-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--posterior-cervical-laminoplasty--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--resurfacing-shoulder-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--reverse-shoulder-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--revision-hip-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--revision-knee-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--revision-spinal-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--rotator-cuff-repair-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--sacroiliac-joint-injection--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--shoulder-arthroscopy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--shoulder-fracture-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--shoulder-instability-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--shoulder-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--si-joint-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--spinal-fusion--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--sports-injury-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--stem-cell-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--surgical-treatments--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--tendonitis-treatment--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--tennis-elbow-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--thoracic-spine-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--total-hip-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--total-knee-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--trigger-finger-release--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--understanding-tlif-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--vertebroplasty--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--wrist-arthroscopy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/treatments-thumbnails/mountain-spine-orthopedics--treatment--wrist-fracture-surgery--thumbnail.png',
];

function extractSlug(url: string): string | null {
  const match = url.match(/--treatment--(.+)--thumbnail\.png$/);
  return match ? match[1] : null;
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function updateTreatmentImages() {
  const filePath = path.join(__dirname, '..', 'components', 'data', 'treatments.tsx');
  const original = fs.readFileSync(filePath, 'utf8');

  const allTreatmentsMarker = 'export const AllTreatments : TreatmentsCardProp[] = [';
  const startIdx = original.indexOf(allTreatmentsMarker);
  if (startIdx === -1) {
    console.error('Could not find AllTreatments array in treatments.tsx');
    return;
  }

  const blockStart = startIdx + allTreatmentsMarker.length;
  const endIdx = original.indexOf('];', blockStart);
  if (endIdx === -1) {
    console.error('Could not find end of AllTreatments array in treatments.tsx');
    return;
  }

  const before = original.slice(0, blockStart);
  let block = original.slice(blockStart, endIdx); // contents inside [...]
  const after = original.slice(endIdx);

  const slugToUrl = new Map<string, string>();

  for (const url of CDN_URLS) {
    const slug = extractSlug(url);
    if (!slug) {
      console.warn(`Skipping URL (could not extract slug): ${url}`);
      continue;
    }

    if (slugToUrl.has(slug) && slugToUrl.get(slug) !== url) {
      console.warn(`Duplicate slug with different URL detected: ${slug}`);
    }

    slugToUrl.set(slug, url);
  }

  let anyUpdated = false;

  for (const [slug, url] of slugToUrl.entries()) {
    const escapedSlug = escapeRegExp(slug);

    // Find the slug position first
    const slugPattern = new RegExp(`"slug"\\s*:\\s*['"]${escapedSlug}['"]`);
    const slugMatch = slugPattern.exec(block);

    if (!slugMatch) {
      console.warn(`No AllTreatments object found for slug: ${slug}`);
      continue;
    }

    const slugIndex = slugMatch.index;

    // Find the object start (the opening { before this slug)
    let objStart = block.lastIndexOf('{', slugIndex);
    if (objStart === -1) {
      console.warn(`Could not find object start for slug: ${slug}`);
      continue;
    }

    // Find the object end (the closing }, or } before the next {)
    let objEnd = block.indexOf('},', slugIndex);
    if (objEnd === -1) {
      objEnd = block.indexOf('\n}', slugIndex);
      if (objEnd !== -1) objEnd += 1; // include the newline
    }
    if (objEnd === -1) {
      // Last object might end with just }
      objEnd = block.indexOf('}', slugIndex);
    }
    if (objEnd === -1) {
      console.warn(`Could not find object end for slug: ${slug}`);
      continue;
    }
    objEnd += objEnd < block.length && block[objEnd + 1] === ',' ? 2 : 1; // include }, or }

    // Extract the object text
    let objText = block.slice(objStart, objEnd);

    const cardPattern = /["']card_img["']\s*:\s*['"][^'"]*['"]/;
    const inTxtPattern = /["']inTxt_img["']\s*:\s*['"][^'"]*['"]/;

    let objUpdated = false;

    // Update card_img
    if (cardPattern.test(objText)) {
      objText = objText.replace(cardPattern, `"card_img": '${url}'`);
      objUpdated = true;
    } else {
      // Insert card_img after "tag" or "title" if missing
      const tagLinePattern = /(\n\s*["']tag["'][^,\n]*,?)/;
      const titleLinePattern = /(\n\s*["']title["'][^,\n]*,?)/;

      if (tagLinePattern.test(objText)) {
        objText = objText.replace(
          tagLinePattern,
          `$1\n  "card_img": '${url}',`,
        );
        objUpdated = true;
      } else if (titleLinePattern.test(objText)) {
        objText = objText.replace(
          titleLinePattern,
          `$1\n  "card_img": '${url}',`,
        );
        objUpdated = true;
      }
    }

    // Update inTxt_img
    if (inTxtPattern.test(objText)) {
      objText = objText.replace(inTxtPattern, `"inTxt_img": '${url}'`);
      objUpdated = true;
    } else {
      const cardLinePattern = /("card_img"[^,\n]*,?)/;
      if (cardLinePattern.test(objText)) {
        objText = objText.replace(
          cardLinePattern,
          `$1\n  "inTxt_img": '${url}',`,
        );
        objUpdated = true;
      }
    }

    if (objUpdated) {
      // Replace the object in the block
      block = block.slice(0, objStart) + objText + block.slice(objEnd);
      anyUpdated = true;
      console.log(`Updated card_img and inTxt_img for slug: ${slug}`);
    }
  }

  if (anyUpdated) {
    const newContent = before + block + after;
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log('treatments.tsx updated with CDN image URLs in AllTreatments.');
  } else {
    console.log('No changes made to treatments.tsx (no matching AllTreatments slugs found).');
  }

  // Also update heroImage, card_img, and inTxt_img in structured treatment content arrays
  let content = fs.readFileSync(filePath, 'utf8');
  let heroImageUpdated = false;

  // Find all treatmentContent arrays (treatmentContentPlaceholders, treatmentContentBatch1, etc.)
  const contentArrayPattern = /(export\s+const\s+(?:treatmentContentPlaceholders|treatmentContentBatch\d+|allTreatmentContent)\s*:\s*TreatmentContent\[\]\s*=\s*\[)([\s\S]*?)(\];)/g;
  
  content = content.replace(contentArrayPattern, (match, prefix, arrayContent, suffix) => {
    let updatedContent = arrayContent;
    
    for (const [slug, url] of slugToUrl.entries()) {
      const escapedSlug = escapeRegExp(slug);
      
      // Find slug in this array
      const slugPattern = new RegExp(`slug\\s*:\\s*['"]${escapedSlug}['"]`);
      const slugMatch = slugPattern.exec(updatedContent);
      
      if (!slugMatch) continue;
      
      const slugIndex = slugMatch.index;
      
      // Find the object containing this slug
      let objStart = updatedContent.lastIndexOf('{', slugIndex);
      if (objStart === -1) continue;
      
      // Find object end
      let objEnd = updatedContent.indexOf('},', slugIndex);
      if (objEnd === -1) {
        objEnd = updatedContent.indexOf('\n}', slugIndex);
        if (objEnd !== -1) objEnd += 1;
      }
      if (objEnd === -1) {
        objEnd = updatedContent.indexOf('}', slugIndex);
      }
      if (objEnd === -1) continue;
      objEnd += objEnd < updatedContent.length && updatedContent[objEnd + 1] === ',' ? 2 : 1;
      
      let objText = updatedContent.slice(objStart, objEnd);
      let objUpdated = false;
      
      // Update heroImage to CDN URL string
      const heroImagePattern = /heroImage\s*:\s*([^,\n]+)/;
      if (heroImagePattern.test(objText)) {
        objText = objText.replace(
          heroImagePattern,
          `heroImage: '${url}'`
        );
        objUpdated = true;
      }

      // Update card_img if it exists, or insert it
      const cardPattern = /card_img\s*:\s*['"][^'"]*['"]/;
      if (cardPattern.test(objText)) {
        objText = objText.replace(cardPattern, `card_img: '${url}'`);
        objUpdated = true;
      } else {
        // Insert after heroImage
        objText = objText.replace(/(heroImage\s*:[^,\n]+,?)/, `$1\n    card_img: '${url}',`);
        objUpdated = true;
      }

      // Update inTxt_img if it exists, or insert it
      const inTxtPattern = /inTxt_img\s*:\s*['"][^'"]*['"]/;
      if (inTxtPattern.test(objText)) {
        objText = objText.replace(inTxtPattern, `inTxt_img: '${url}'`);
        objUpdated = true;
      } else {
        // Insert after card_img
        objText = objText.replace(/(card_img\s*:[^,\n]+,?)/, `$1\n    inTxt_img: '${url}',`);
        objUpdated = true;
      }
      
      if (objUpdated) {
        updatedContent = updatedContent.slice(0, objStart) + objText + updatedContent.slice(objEnd);
        heroImageUpdated = true;
        console.log(`Updated structured content images for slug: ${slug}`);
      }
    }
    
    return prefix + updatedContent + suffix;
  });

  if (heroImageUpdated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('treatments.tsx updated with CDN image URLs in all structured treatment arrays.');
  }
}

updateTreatmentImages();
