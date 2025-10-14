import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // --- SEO OPTIMIZATION: Enforce consistent URLs ---
  // This ensures that pages with a trailing slash (e.g., /locations/)
  // are permanently redirected to the non-slash version (/locations).
  // This prevents duplicate content issues with search engines.
  trailingSlash: false,

  /* Your existing config options */
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'originui.com',
        pathname: '/**', 
      },
      {
        protocol: 'https',
        hostname: 'mountainspineortho.b-cdn.net',
        pathname: '/**',
      }
    ]
  },

  // experimental: {
  //   optimizeCss: true,
  // },

  async redirects() {
  // Only apply host redirects in production
  const isProduction = process.env.NODE_ENV === 'production';
  
  return [
    // --- HOST/PROTOCOL/CASE NORMALIZATION (301s) - PRODUCTION ONLY ---
    ...(isProduction ? [
      { source: "/:path*", has:[{type:"host",value:"mountainspineorthopedics.com"}],
        destination:"https://mountainspineorthopedics.com/:path*", permanent:true },
      { source: "/:path*", has:[{type:"host",value:"www.mountainspineorthopedics.com"}],
        destination:"https://mountainspineorthopedics.com/:path*", permanent:true },
    ] : []),
    
    // Trailing slash handling now happens in middleware to avoid blank Location headers
    // that caused infinite refresh loops when developing locally.

    // --- TYPO FIX: area-of-speciality → area-of-specialty ---
    {"source":"/area-of-speciality","destination":"/area-of-specialty","permanent":true},
    {"source":"/area-of-speciality/:slug*","destination":"/area-of-specialty/:slug*","permanent":true},
    
    // --- ANTI-INFLAMMATORY INJECTIONS CONDITION TO TREATMENT REDIRECT ---
    {"source":"/area-of-specialty/anti-inflammatory-injections","destination":"/treatments/anti-inflammatory-injections-for-joint-and-spine-pain","permanent":true},
    
    // --- CLINIC SLUG REDIRECTS ---
    {"source":"/locations/palm-spring-orthopedics","destination":"/locations/palm-springs-orthopedics","permanent":true},
    
    // --- DOCTOR SLUG REDIRECTS (from dot notation to kebab-case) ---
    {"source":"/about/meetourdoctors/dr.scottkatzman","destination":"/about/meetourdoctors/dr-scott-katzman","permanent":true},
    {"source":"/about/meetourdoctors/dr.davidcowin","destination":"/about/meetourdoctors/dr-david-cowin","permanent":true},
    {"source":"/about/meetourdoctors/dr.christophermccarthy","destination":"/about/meetourdoctors/dr-christopher-mccarthy","permanent":true},
    {"source":"/about/meetourdoctors/dr.monicamcphailpruitt","destination":"/about/meetourdoctors/dr-monica-mcphail-pruitt","permanent":true},
    {"source":"/about/meetourdoctors/dr.douglasslaughter","destination":"/about/meetourdoctors/dr-douglas-slaughter","permanent":true},
    
    // --- SITEMAP SLUG REDIRECTS ---
    {"source":"/treatments/backpaintreatmentoptions","destination":"/treatments/back-pain-treatment-options","permanent":true},
    {"source":"/treatments/hammertoes","destination":"/treatments/hammer-toes","permanent":true},
    
    // --- EXISTING TREATMENT REDIRECTS ---
    {"source":"/treatments/triggerfingerrelease","destination":"/treatments/trigger-finger-release","permanent":true},
    {"source":"/treatments/totalkneereplacement","destination":"/treatments/total-knee-replacement","permanent":true},
    {"source":"/treatments/tlifsurgery","destination":"/treatments/understanding-tlif-surgery","permanent":true},
    {"source":"/treatments/surgicaltreatments","destination":"/treatments/surgical-treatments","permanent":true},
    {"source":"/treatments/stemcelltreatment","destination":"/treatments/stem-cell-treatment","permanent":true},
    {"source":"/treatments/spinalfusion","destination":"/treatments/spinal-fusion","permanent":true},
    {"source":"/treatments/shoulderarthroscopy","destination":"/treatments/shoulder-arthroscopy","permanent":true},
    {"source":"/treatments/rotatorcuffrepair","destination":"/treatments/rotator-cuff-repair-surgery","permanent":true},
    {"source":"/treatments/revisionspinalsurgery","destination":"/treatments/revision-spinal-surgery","permanent":true},
    {"source":"/treatments/resurfacingshoulderreplacement","destination":"/treatments/resurfacing-shoulder-replacement","permanent":true},
    {"source":"/treatments/posteriorcervicalfusionwithinstrumentation","destination":"/treatments/posterior-cervical-fusion-with-instrumentation-surgery","permanent":true},
    {"source":"/treatments/lumbardecompression","destination":"/treatments/lumbar-decompression","permanent":true},
    {"source":"/treatments/fracturefixation","destination":"/treatments/fracture-fixation","permanent":true},
    {"source":"/treatments/faqs","destination":"/find-care/candidacy-check","permanent":true},
    {"source":"/treatments/degenerative-disc-disease-surgery-overview","destination":"/treatments/degenerative-disc-disease-surgery","permanent":true},
    {"source":"/treatments/degenerative-disc-disease-surgery-detailed","destination":"/treatments/degenerative-disc-disease-surgery-details","permanent":true},
    {"source":"/treatments/bunioncorrectionsurgery","destination":"/treatments/bunion-correction-surgery","permanent":true},
    {"source":"/treatments/arthroscopickneesurgery","destination":"/treatments/arthroscopic-knee-surgery","permanent":true},
    {"source":"/treatments/anti-inflammatory-injections","destination":"/treatments/anti-inflammatory-injections-for-joint-and-spine-pain","permanent":true},
    {"source":"/treatments/botox-for-migraines-treatment","destination":"/treatments","permanent":true},
    {"source":"/treatments/cancer-pain-treatment","destination":"/treatments","permanent":true},
    
    // --- EXISTING AREA-OF-PAIN REDIRECTS ---
    {"source":"/area-of-pain/neck-and-shoulder-pain/degenerativediscdisease","destination":"/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease","permanent":true},
    {"source":"/area-of-pain/back-pain/lowerbackpain","destination":"/area-of-pain/back-pain/lower-back-pain","permanent":true},
    {"source":"/area-of-pain/back-pain/degenerativediscdisease","destination":"/area-of-pain/back-pain/degenerative-disc-disease","permanent":true},
    {"source":"/area-of-pain/back-pain/backpaintreatmentoptions","destination":"/area-of-pain/back-pain/back-pain-treatment-options","permanent":true},
    
    // --- DDD LEGACY REDIRECTS ---
    {"source":"/area-of-pain/back-pain/degenerative-disc-disease","destination":"/area-of-pain/back-pain/lumbar-degenerative-disc-disease","permanent":true},
    {"source":"/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease","destination":"/area-of-pain/neck-and-shoulder-pain/cervical-degenerative-disc-disease","permanent":true},
    
    // --- NEW PAIN SLUG REDIRECTS ---
    // Back Pain Group
    {"source":"/area-of-pain/back-pain/foraminal-stenosis","destination":"/area-of-pain/back-pain/foraminal-stenosis-back-pain","permanent":true},
    {"source":"/area-of-pain/back-pain/sciatica","destination":"/area-of-pain/back-pain/sciatica-nerve-pain","permanent":true},
    {"source":"/area-of-pain/back-pain/coccydynia","destination":"/area-of-pain/back-pain/tailbone-pain-coccydynia","permanent":true},
    
    // Neck & Shoulder Pain Group
    {"source":"/area-of-pain/neck-and-shoulder-pain/cervical-spinal-stenosis","destination":"/area-of-pain/neck-and-shoulder-pain/neck-spinal-stenosis","permanent":true},
    {"source":"/area-of-pain/neck-and-shoulder-pain/cervical-herniated-disc","destination":"/area-of-pain/neck-and-shoulder-pain/neck-herniated-disc","permanent":true},
    {"source":"/area-of-pain/neck-and-shoulder-pain/arthritis","destination":"/area-of-pain/neck-and-shoulder-pain/neck-shoulder-arthritis-pain","permanent":true},
    {"source":"/area-of-pain/neck-and-shoulder-pain/pinched-nerve","destination":"/area-of-pain/neck-and-shoulder-pain/pinched-nerve-neck-shoulder","permanent":true},
    
    // Foot & Ankle Pain Group
    {"source":"/area-of-pain/foot-pain/bunions-hallux-valgus","destination":"/area-of-pain/foot-pain/bunion-pain-hallux-valgus","permanent":true},
    {"source":"/area-of-pain/foot-pain/plantar-fasciitis","destination":"/area-of-pain/foot-pain/heel-pain-plantar-fasciitis","permanent":true},
    {"source":"/area-of-pain/foot-pain/achilles-tendonitis","destination":"/area-of-pain/foot-pain/achilles-tendon-pain","permanent":true},
    {"source":"/area-of-pain/foot-pain/flat-feet","destination":"/area-of-pain/foot-pain/flat-feet-pain","permanent":true},
    {"source":"/area-of-pain/foot-pain/ankle-arthroscopy","destination":"/area-of-pain/foot-pain/ankle-arthroscopy-recovery-pain","permanent":true},
    {"source":"/area-of-pain/foot-pain/hammer-toes","destination":"/area-of-pain/foot-pain/hammertoes-foot-pain","permanent":true},
    {"source":"/area-of-pain/foot-pain/diabetic-foot-ulcers","destination":"/area-of-pain/foot-pain/diabetic-foot-ulcer-care","permanent":true},
    {"source":"/area-of-pain/foot-pain/ankle-replacement","destination":"/area-of-pain/foot-pain/ankle-replacement-surgery-pain","permanent":true},
    
    // Legacy DDD redirects (from audit)
    {"source":"/area-of-pain/back-pain/degenerative-disc-disease","destination":"/area-of-pain/back-pain/lumbar-degenerative-disc-disease","permanent":true},
    {"source":"/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease","destination":"/area-of-pain/neck-and-shoulder-pain/cervical-degenerative-disc-disease","permanent":true},
    
    // --- EXISTING AREA-OF-SPECIALITY REDIRECTS ---
    {"source":"/area-of-specialty/trochantericbursitis","destination":"/conditions/trochanteric-bursitis","permanent":true},
    {"source":"/area-of-specialty/tornmeniscus","destination":"/conditions/torn-meniscus","permanent":true},
    {"source":"/area-of-specialty/snappinghipsydrome","destination":"/conditions/snapping-hip-syndrome","permanent":true},
    {"source":"/area-of-specialty/shouldertendonitis","destination":"/conditions/shoulder-tendonitis","permanent":true},
    {"source":"/area-of-specialty/sacroiliacjointdysfunction","destination":"/conditions/sacroiliac-joint-dysfunction","permanent":true},
    {"source":"/area-of-specialty/rotatorcufftear","destination":"/conditions/rotator-cuff-tear","permanent":true},
    {"source":"/area-of-specialty/neckpain","destination":"/conditions/neck-pain","permanent":true},
    {"source":"/area-of-specialty/labraltears","destination":"/conditions/labral-tears","permanent":true},
    {"source":"/area-of-specialty/facetjointdisease","destination":"/conditions/facet-joint-disease","permanent":true},
    {"source":"/area-of-specialty/degenerativediscdisease","destination":"/conditions/degenerative-disc-disease","permanent":true},
    {"source":"/area-of-specialty/cervicalspinalstenosis","destination":"/conditions/cervical-spinal-stenosis","permanent":true},
    {"source":"/area-of-specialty/carpaltunnelsyndrome","destination":"/conditions/carpal-tunnel-syndrome","permanent":true},
    {"source":"/area-of-specialty/bulgingdisc","destination":"/conditions/bulging-disc","permanent":true},
    {"source":"/area-of-specialty/adultdegenerativescoliosis","destination":"/conditions/adult-degenerative-scoliosis","permanent":true},
    {"source":"/area-of-specialty/adjacentsegmentdisease","destination":"/conditions/adjacent-segment-disease","permanent":true},
    {"source":"/area-of-specialty/acl-tear","destination":"/conditions/acl-tear","permanent":true},
    {"source":"/area-of-specialty/radiculopathy","destination":"/conditions/radiculopathy","permanent":true},
    {"source":"/area-of-specialty/work-injury","destination":"/conditions/work-injury","permanent":true},
    {"source":"/conditions/herniated-disc","destination":"/area-of-specialty/herniated-disc","permanent":true},
    {"source":"/area-of-specialty/sports-injuries","destination":"/conditions/sports-injuries","permanent":true},
    
    // --- EXISTING TREATMENT ALIAS REDIRECTS ---
    {"source":"/treatments/laser-spine-surgery","destination":"/treatments/endoscopic-laser-spine-surgery","permanent":true},
    {"source":"/treatments/minimally-invasive-surgery","destination":"/treatments/minimally-invasive-spine-surgery","permanent":true},
    {"source":"/treatments/non-surgical","destination":"/treatments/non-surgical-spine-treatment","permanent":true},
    {"source":"/treatments/neck-pain-treatment","destination":"/treatments/cervical-facet-radiofrequency","permanent":true},
    
    // --- Mountain Spine legacy → kebab-case --- //
    {"source":"/about/meetourdoctors/dr.monicamcphail-pruitt","destination":"/about/meetourdoctors/dr-monica-mcphail-pruitt","permanent":true},
    {"source":"/about/meetourdoctors/dr.douglasslaughter","destination":"/about/meetourdoctors/dr-douglas-slaughter","permanent":true},
    {"source":"/about/meetourdoctors/dr.christophermccarthy","destination":"/about/meetourdoctors/dr-christopher-mccarthy","permanent":true},
    {"source":"/about/meetourdoctors/dr.davidcowin","destination":"/about/meetourdoctors/dr-david-cowin","permanent":true},
    {"source":"/about/meetourdoctors/dr.scottkatzman","destination":"/about/meetourdoctors/dr-scott-katzman","permanent":true},
    // area-of-specialty old camel → kebab
    {"source":"/area-of-specialty/antiinflammatoryinjections","destination":"/area-of-specialty/anti-inflammatory-injections","permanent":true},
    {"source":"/area-of-specialty/backpain","destination":"/area-of-specialty/back-pain","permanent":true},
    {"source":"/area-of-specialty/failedbackorfailenecksurgerysyndrome","destination":"/area-of-specialty/failed-back-surgery-syndrome","permanent":true},
    {"source":"/area-of-specialty/hipimpingement","destination":"/area-of-specialty/hip-impingement","permanent":true},
    {"source":"/area-of-specialty/spinalbonespurs","destination":"/area-of-specialty/spinal-bone-spurs","permanent":true},
    {"source":"/area-of-specialty/spinalstenosis","destination":"/area-of-specialty/spinal-stenosis","permanent":true},
    {"source":"/area-of-specialty/spinedeformities","destination":"/area-of-specialty/spine-deformities","permanent":true},
    {"source":"/area-of-specialty/tinglingornumbnessinextremities","destination":"/area-of-specialty/tingling-or-numbness-in-extremities","permanent":true},
    {"source":"/area-of-specialty/herniateddisc","destination":"/area-of-specialty/herniated-disc","permanent":true},
    {"source":"/area-of-specialty/rheumatoidarthritis","destination":"/area-of-specialty/rheumatoid-arthritis","permanent":true},
    {"source":"/area-of-specialty/tenniselbow","destination":"/area-of-specialty/tennis-elbow","permanent":true},
    {"source":"/area-of-specialty/loosebodies","destination":"/area-of-specialty/loose-bodies","permanent":true},
    // treatments camel/dot variants
    {"source":"/treatments/totalkneereplacement","destination":"/treatments/total-knee-replacement","permanent":true},
    {"source":"/treatments/rotatorcuffrepair","destination":"/treatments/rotator-cuff-repair-surgery","permanent":true},
    {"source":"/treatments/spinalfusion","destination":"/treatments/spinal-fusion","permanent":true}
    ];
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: '/ingest/static/:path*',
  //       destination: 'https://us-assets.i.posthog.com/static/:path*',
  //     },
  //     {
  //       source: '/ingest/:path*',
  //       destination: 'https://us.i.posthog.com/:path*',
  //     },
  //     {
  //       source: '/ingest/decide',
  //       destination: 'https://us.i.posthog.com/decide',
  //     },
  //   ];
  // },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
