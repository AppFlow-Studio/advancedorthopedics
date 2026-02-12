// scripts/submit-to-indexnow.ts
import { submitMultipleUrls } from '../lib/indexnow';
import { clinics } from '@/components/data/clinics';

const SITE_URL = 'https://mountainspineorthopedics.com';

const stateHubs = [
  '/locations/florida',
  '/locations/new-jersey',
  '/locations/new-york',
  '/locations/pennsylvania',
];

const locationUrls = clinics.map(
  (c) => `/locations/${c.stateSlug}/${c.locationSlug}`
);

const urlsToSubmit = [
  '/',
  '/about',
  '/conditions',
  '/treatments',
  '/locations',
  '/blogs',
  '/find-care/book-an-appointment',
  '/find-care/find-a-doctor',
  '/find-care/free-mri-review',
  '/find-care/candidacy-check',
  '/find-care/second-opinion',
  '/patient-forms',
  '/insurance-policy',
  '/privacy-policy',
  ...stateHubs,
  ...locationUrls,
].map((p) => `${SITE_URL}${p}`);

async function submitAllUrls() {
  console.log(`🚀 Submitting ${urlsToSubmit.length} URLs to IndexNow...`);

  const results = await submitMultipleUrls(urlsToSubmit, 10);

  let successCount = 0;
  let errorCount = 0;

  results.forEach((result, index) => {
    if (result.success) {
      successCount++;
      console.log(`✅ Batch ${index + 1}: ${result.message}`);
    } else {
      errorCount++;
      console.error(`❌ Batch ${index + 1}: ${result.message}`);
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`✅ Successful batches: ${successCount}`);
  console.log(`❌ Failed batches: ${errorCount}`);
  console.log(`📄 Total URLs submitted: ${urlsToSubmit.length}`);

  if (successCount > 0) {
    console.log(`\n🎉 IndexNow submission completed! Check Bing Webmaster Tools to verify.`);
  }
}

// Run the script
submitAllUrls().catch(console.error);
