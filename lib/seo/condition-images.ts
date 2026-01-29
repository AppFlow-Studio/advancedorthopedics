/**
 * Central source of truth for condition and hub body-part thumbnail images
 * Includes URL, alt text, and title for SEO optimization
 */

export interface ConditionImageMetadata {
  url: string;
  alt: string;
  title: string;
}

// Hub body-part slugs (for /conditions/[slug] pages that are NOT individual conditions)
const HUB_SLUGS = new Set([
  'back',
  'neck',
  'shoulder',
  'hip',
  'knee',
  'spine',
  'foot-ankle',
  'hand-wrist-elbow',
  'sports-medicine',
  'pain-management',
]);

// Complete authoritative list of all thumbnail URLs
const ALL_THUMBNAIL_URLS = [
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ac-joint-injury--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--achilles-tendonitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--acl-injury--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--acromioclavicular-joint-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--adjacent-segment-disease--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--adult-degenerative-scoliosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--aging-management--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ankle-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ankle-arthroscopy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ankle-instability--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ankle-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--ankle-replacement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--avascular-necrosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--back--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--back-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--bakers-cyst--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--beach-volleyball-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--biceps-tendonitis-shoulder--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--bulging-disc--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--bunions-hallux-valgus--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--bursitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--carpal-tunnel-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--cervical-deformities--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--cervical-herniated-disc--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--cervical-spinal-stenosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--chondromalacia-patella--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--chronic-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--coccydynia--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--crossfit-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--cubital-tunnel-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--cycling-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--de-quervains--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--degenerative-disc-disease--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--degenerative-disc-disease-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--diabetic-foot-ulcers--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--disc-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--dupuytrens-contracture--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--elbow-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--facet-joint-disease--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--failed-back-surgery-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--flat-feet--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--foot-ankle--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--foraminal-stenosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--frozen-shoulder--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--golf-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--golfers-elbow--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hammer-toes--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hand-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hand-wrist-elbow--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--heel-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--herniated-disc--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-bursitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-dysplasia--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-fracture--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-impingement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-labral-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--hip-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--iliotibial-band-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee-bursitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee-cartilage-damage--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee-instability--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--knee-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--kyphosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--labral-tears--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--loose-bodies--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--loose-bodies-hip--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--lower-back-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--lumbar-herniated-disc--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--mortons-neuroma--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--neck--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--neck-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--nerve-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--osteoarthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--pain-management--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--patellofemoral-pain-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--pcl-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--pickleball-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--pinched-nerve--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--plantar-fasciitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--pseudarthrosis-revision-surgery--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--radiculopathy--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--rheumatoid-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--rotator-cuff-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--rotator-cuff-tendonitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--runner-knee--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--running-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--sacroiliac-joint-dysfunction--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--sciatica--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-arthritis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-bursitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-dislocation--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-impingement--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-instability--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--shoulder-tendonitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--slap-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--snapping-hip-syndrome--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spinal-bone-spurs--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spinal-compression-fractures--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spinal-stenosis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spine--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spine-deformities--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--spondylolisthesis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--sports-medicine--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--surfing-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--swimming-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--synovitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--tennis-elbow--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--tennis-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--tfcc-tear--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--throwing-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--tingling-or-numbness-in-extremities--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--torn-meniscus--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--trigger-finger--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--trochanteric-bursitis--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--water-sports-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--weightlifting-injuries--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--wrist-pain--thumbnail.png',
  'https://mountainspineortho.b-cdn.net/conditions-thumbnails/mountain-spine-orthopedics--condition--yoga-injuries--thumbnail.png',
];

// Helper: Extract slug from URL
function extractSlugFromUrl(url: string): string | null {
  const match = url.match(/--condition--(.+?)--thumbnail\.png$/);
  return match ? match[1] : null;
}

// Helper: Convert slug to title with special case handling
function slugToTitle(slug: string): string {
  // Special cases for abbreviations and possessives
  const specialCases: Record<string, string> = {
    'ac-joint-injury': 'AC Joint Injury',
    'acl-injury': 'ACL Injury',
    'pcl-tear': 'PCL Tear',
    'tfcc-tear': 'TFCC Tear',
    'de-quervains': "De Quervain's",
    'dupuytrens-contracture': "Dupuytren's Contracture",
    'mortons-neuroma': "Morton's Neuroma",
    'bunions-hallux-valgus': 'Bunions (Hallux Valgus)',
    'bakers-cyst': "Baker's Cyst",
    'golfers-elbow': "Golfer's Elbow",
    'runner-knee': "Runner's Knee",
    'iliotibial-band-syndrome': 'Iliotibial Band Syndrome',
    'patellofemoral-pain-syndrome': 'Patellofemoral Pain Syndrome',
    'biceps-tendonitis-shoulder': 'Biceps Tendonitis (Shoulder)',
    'acromioclavicular-joint-arthritis': 'Acromioclavicular Joint Arthritis',
    'loose-bodies-hip': 'Loose Bodies (Hip)',
    'tingling-or-numbness-in-extremities': 'Tingling or Numbness in Extremities',
  };

  if (specialCases[slug]) {
    return specialCases[slug];
  }

  // Default: title case conversion
  return slug
    .split('-')
    .map(word => capitalize(word))
    .join(' ');
}

function capitalize(word: string): string {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Generate metadata for each URL
function generateMetadata(url: string, slug: string, isHub: boolean): ConditionImageMetadata {
  const title = slugToTitle(slug);
  
  if (isHub) {
    return {
      url,
      alt: `Orthopedic and spine care for ${title} at Mountain Spine & Orthopedics.`,
      title: `${title} Conditions | Mountain Spine & Orthopedics`,
    };
  }
  
  return {
    url,
    alt: `Medical illustration of ${title} treated by Mountain Spine & Orthopedics.`,
    title: `${title} Thumbnail | Mountain Spine & Orthopedics`,
  };
}

// Build mappings
const conditionMap: Record<string, ConditionImageMetadata> = {};
const hubMap: Record<string, ConditionImageMetadata> = {};

for (const url of ALL_THUMBNAIL_URLS) {
  const slug = extractSlugFromUrl(url);
  if (!slug) continue;
  
  const isHub = HUB_SLUGS.has(slug);
  const metadata = generateMetadata(url, slug, isHub);
  
  if (isHub) {
    hubMap[slug] = metadata;
  } else {
    conditionMap[slug] = metadata;
  }
}

// Exported mappings
export const conditionThumbnailBySlug = conditionMap;
export const hubThumbnailBySlug = hubMap;

// For verification
export const THUMBNAIL_COUNTS = {
  conditions: Object.keys(conditionMap).length,
  hubs: Object.keys(hubMap).length,
  total: ALL_THUMBNAIL_URLS.length,
};
