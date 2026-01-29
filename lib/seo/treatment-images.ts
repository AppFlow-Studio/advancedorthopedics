/**
 * Central source of truth for treatment thumbnail images
 * Includes URL, alt text, and title for SEO optimization
 */

export interface TreatmentImageMetadata {
  url: string;
  alt: string;
  title: string;
}

// Complete authoritative list of all treatment thumbnail URLs
const ALL_TREATMENT_THUMBNAIL_URLS = [
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

// Helper: Extract slug from URL
function extractSlugFromUrl(url: string): string | null {
  const match = url.match(/--treatment--(.+?)--thumbnail\.png$/);
  return match ? match[1] : null;
}

// Helper: Convert slug to title with special case handling
function slugToTitle(slug: string): string {
  const specialCases: Record<string, string> = {
    'acdf-surgery': 'ACDF Surgery',
    'acl-reconstruction-surgery': 'ACL Reconstruction Surgery',
    'axial-fusion-surgery': 'Axial Fusion Surgery',
    'axialif': 'AxiaLIF',
    'plif': 'PLIF',
    'tlif': 'TLIF',
    'xlif': 'XLIF',
    'olif': 'OLIF',
    'adr': 'Artificial Disc Replacement',
    'cts': 'Carpal Tunnel Syndrome',
    'prp': 'Platelet-Rich Plasma',
    'si-joint': 'Sacroiliac Joint',
    'tfcc': 'TFCC',
    'accf': 'ACCF',
    'de-quervains': "De Quervain's",
    'dupuytrens': "Dupuytren's",
    'golfers-elbow': "Golfer's Elbow",
    'tennis-elbow': "Tennis Elbow",
  };

  if (specialCases[slug]) {
    return specialCases[slug];
  }

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Generate metadata for each URL
function generateMetadata(url: string, slug: string): TreatmentImageMetadata {
  const title = slugToTitle(slug);
  
  return {
    url,
    alt: `Medical illustration of ${title} procedure at Mountain Spine & Orthopedics.`,
    title: `${title} Treatment | Mountain Spine & Orthopedics`,
  };
}

// Build mapping
const treatmentMap: Record<string, TreatmentImageMetadata> = {};

for (const url of ALL_TREATMENT_THUMBNAIL_URLS) {
  const slug = extractSlugFromUrl(url);
  if (!slug) continue;
  
  treatmentMap[slug] = generateMetadata(url, slug);
}

// Export mapping
export const treatmentThumbnailBySlug = treatmentMap;

// For verification
export const TREATMENT_THUMBNAIL_COUNTS = {
  total: ALL_TREATMENT_THUMBNAIL_URLS.length,
  mapped: Object.keys(treatmentMap).length,
};
