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
    ],
    domains: [
      'originui.com',
      'mountainspineortho.b-cdn.net'
    ]
  },

  async redirects() {
  return [
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
    
    // --- EXISTING AREA-OF-PAIN REDIRECTS ---
    {"source":"/area-of-pain/neck-and-shoulder-pain/degenerativediscdisease","destination":"/area-of-pain/neck-and-shoulder-pain/degenerative-disc-disease","permanent":true},
    {"source":"/area-of-pain/back-pain/lowerbackpain","destination":"/area-of-pain/back-pain/lower-back-pain","permanent":true},
    {"source":"/area-of-pain/back-pain/degenerativediscdisease","destination":"/area-of-pain/back-pain/degenerative-disc-disease","permanent":true},
    
    // --- EXISTING AREA-OF-SPECIALITY REDIRECTS ---
    {"source":"/area-of-speciality/trochantericbursitis","destination":"/conditions/trochanteric-bursitis","permanent":true},
    {"source":"/area-of-speciality/tornmeniscus","destination":"/conditions/torn-meniscus","permanent":true},
    {"source":"/area-of-speciality/snappinghipsydrome","destination":"/conditions/snapping-hip-syndrome","permanent":true},
    {"source":"/area-of-speciality/shouldertendonitis","destination":"/conditions/shoulder-tendonitis","permanent":true},
    {"source":"/area-of-speciality/sacroiliacjointdysfunction","destination":"/conditions/sacroiliac-joint-dysfunction","permanent":true},
    {"source":"/area-of-speciality/rotatorcufftear","destination":"/conditions/rotator-cuff-tear","permanent":true},
    {"source":"/area-of-speciality/neckpain","destination":"/conditions/neck-pain","permanent":true},
    {"source":"/area-of-speciality/labraltears","destination":"/conditions/labral-tears","permanent":true},
    {"source":"/area-of-speciality/facetjointdisease","destination":"/conditions/facet-joint-disease","permanent":true},
    {"source":"/area-of-speciality/degenerativediscdisease","destination":"/conditions/degenerative-disc-disease","permanent":true},
    {"source":"/area-of-speciality/cervicalspinalstenosis","destination":"/conditions/cervical-spinal-stenosis","permanent":true},
    {"source":"/area-of-speciality/carpaltunnelsyndrome","destination":"/conditions/carpal-tunnel-syndrome","permanent":true},
    {"source":"/area-of-speciality/bulgingdisc","destination":"/conditions/bulging-disc","permanent":true},
    {"source":"/area-of-speciality/adultdegenerativescoliosis","destination":"/conditions/adult-degenerative-scoliosis","permanent":true},
    {"source":"/area-of-speciality/adjacentsegmentdisease","destination":"/conditions/adjacent-segment-disease","permanent":true},
    {"source":"/area-of-speciality/acl-tear","destination":"/conditions/acl-tear","permanent":true},
    {"source":"/area-of-speciality/radiculopathy","destination":"/conditions/radiculopathy","permanent":true},
    {"source":"/area-of-speciality/work-injury","destination":"/conditions/work-injury","permanent":true},
    {"source":"/conditions/herniated-disc","destination":"/area-of-speciality/herniated-disc","permanent":true},
    {"source":"/area-of-speciality/sports-injuries","destination":"/conditions/sports-injuries","permanent":true},
    
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
    // area-of-speciality old camel → kebab
    {"source":"/area-of-speciality/antiinflammatoryinjections","destination":"/area-of-speciality/anti-inflammatory-injections","permanent":true},
    {"source":"/area-of-speciality/backpain","destination":"/area-of-speciality/back-pain","permanent":true},
    {"source":"/area-of-speciality/failedbackorfailenecksurgerysyndrome","destination":"/area-of-speciality/failed-back-surgery-syndrome","permanent":true},
    {"source":"/area-of-speciality/hipimpingement","destination":"/area-of-speciality/hip-impingement","permanent":true},
    {"source":"/area-of-speciality/spinalbonespurs","destination":"/area-of-speciality/spinal-bone-spurs","permanent":true},
    {"source":"/area-of-speciality/spinalstenosis","destination":"/area-of-speciality/spinal-stenosis","permanent":true},
    {"source":"/area-of-speciality/spinedeformities","destination":"/area-of-speciality/spine-deformities","permanent":true},
    {"source":"/area-of-speciality/tinglingornumbnessinextremities","destination":"/area-of-speciality/tingling-or-numbness-in-extremities","permanent":true},
    {"source":"/area-of-speciality/herniateddisc","destination":"/area-of-speciality/herniated-disc","permanent":true},
    {"source":"/area-of-speciality/rheumatoidarthritis","destination":"/area-of-speciality/rheumatoid-arthritis","permanent":true},
    {"source":"/area-of-speciality/tenniselbow","destination":"/area-of-speciality/tennis-elbow","permanent":true},
    {"source":"/area-of-speciality/loosebodies","destination":"/area-of-speciality/loose-bodies","permanent":true},
    // treatments camel/dot variants
    {"source":"/treatments/totalkneereplacement","destination":"/treatments/total-knee-replacement","permanent":true},
    {"source":"/treatments/rotatorcuffrepair","destination":"/treatments/rotator-cuff-repair-surgery","permanent":true},
    {"source":"/treatments/spinalfusion","destination":"/treatments/spinal-fusion","permanent":true}
    ];
  },

  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },

  // This is required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
