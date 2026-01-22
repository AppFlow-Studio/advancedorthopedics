/**
 * Duplicate Page Audit Script
 * 
 * This script analyzes the codebase for duplicate/cannibalizing pages
 * and generates a report with recommended winners and redirect targets.
 * 
 * Run: npx ts-node scripts/duplicate-page-audit.ts
 */

import * as fs from 'fs';
import * as path from 'path';

// Known duplicate clusters based on SEO audit
const DUPLICATE_CLUSTERS = [
  {
    name: 'Degenerative Disc Disease (DDD) Overlap',
    urls: [
      '/area-of-specialty/degenerative-disc-disease',
      '/area-of-specialty/degenerative-disc-disease-surgery',
      '/treatments/degenerative-disc-disease-surgery',
      '/treatments/degenerative-disc-disease-surgery-details',
      '/treatments/multilevel-degenerative-disc-disease-surgery',
      '/area-of-pain/back-pain/lumbar-degenerative-disc-disease',
    ],
    recommendedWinners: [
      { type: 'Condition', url: '/conditions/degenerative-disc-disease' },
      { type: 'Procedure', url: '/procedures/degenerative-disc-disease-surgery' },
    ],
    action: 'Merge "surgery" duplicates → keep 1 canonical surgery page, 301 the rest. Keep lumbar DDD under area-of-pain as distinct regional content.',
  },
  {
    name: 'Back Pain "Treatment Options" Overlap',
    urls: [
      '/area-of-specialty/back-pain',
      '/area-of-specialty/lower-back-pain',
      '/area-of-pain/back-pain/lower-back-pain',
      '/area-of-pain/back-pain/back-pain-treatment-options',
      '/treatments/back-pain-treatment',
    ],
    recommendedWinners: [
      { type: 'Condition', url: '/conditions/back-pain' },
      { type: 'Pain Pathway', url: '/area-of-pain/back-pain/lower-back-pain' },
      { type: 'Treatment', url: '/treatments/back-pain-treatment' },
    ],
    action: 'Decide one canonical for "Back Pain Treatment" and 301 the "treatment options" duplicate. Keep lower-back-pain as either condition or area-of-pain, not both.',
  },
  {
    name: 'Cervical/Lumbar Herniated Disc Overlap',
    urls: [
      '/area-of-specialty/herniated-disc',
      '/area-of-specialty/lumbar-herniated-disc',
      '/area-of-specialty/cervical-herniated-disc',
      '/area-of-pain/back-pain/lumbar-herniated-disc',
      '/area-of-pain/neck-and-shoulder-pain/neck-herniated-disc',
    ],
    recommendedWinners: [
      { type: 'Hub', url: '/conditions/herniated-disc' },
      { type: 'Cervical', url: '/conditions/cervical-herniated-disc' },
      { type: 'Lumbar', url: '/conditions/lumbar-herniated-disc' },
    ],
    action: 'Keep region-specific condition pages (cervical vs lumbar). Make /herniated-disc a hub that links out. Ensure area-of-pain pages have distinct regional/symptom content.',
  },
  {
    name: 'Disc Replacement Synonym Collision',
    urls: [
      '/treatments/cervical-disc-replacement',
      '/treatments/cervical-disc-arthroplasty',
      '/treatments/artificial-disc-replacement-surgery',
      '/treatments/lumbar-disc-replacement-surgery',
    ],
    recommendedWinners: [
      { type: 'Cervical', url: '/procedures/cervical-disc-replacement' },
      { type: 'Lumbar', url: '/procedures/lumbar-disc-replacement-surgery' },
    ],
    action: 'Pick canonical for cervical (usually "cervical-disc-replacement"), 301 arthroplasty URL into it. Keep lumbar separate.',
  },
  {
    name: 'Ankle Replacement / Arthroscopy Split',
    urls: [
      '/area-of-pain/foot-pain/ankle-replacement-surgery-pain',
      '/area-of-specialty/ankle-replacement',
      '/treatments/ankle-replacement-surgery',
      '/area-of-pain/foot-pain/ankle-arthroscopy-recovery-pain',
      '/area-of-specialty/ankle-arthroscopy',
      '/treatments/ankle-arthroscopy-minimally-invasive-surgery',
    ],
    recommendedWinners: [
      { type: 'Replacement Procedure', url: '/procedures/ankle-replacement-surgery' },
      { type: 'Arthroscopy Procedure', url: '/procedures/ankle-arthroscopy' },
    ],
    action: 'Keep three-intent model (pain vs condition vs procedure) ONLY if content is truly distinct. Otherwise canonicalize and redirect the weakest pages.',
  },
  {
    name: 'Aging Management Duplicated Path',
    urls: [
      '/area-of-specialty/aging-management',
      '/treatments/aging-management',
    ],
    recommendedWinners: [
      { type: 'Service', url: '/services/aging-management' },
    ],
    action: 'Make it a /services/aging-management page and 301 both existing URLs into it.',
  },
  {
    name: 'Spinal Fusion Page Sprawl',
    urls: [
      '/treatments/spinal-fusion',
      '/treatments/lumbar-fusion-surgery',
      '/treatments/anterior-lumbar-interbody-fusion',
      '/treatments/extreme-lateral-interbody-fusion-surgery',
      '/treatments/oblique-lumbar-interbody-fusion',
      '/treatments/understanding-tlif-surgery',
    ],
    recommendedWinners: [
      { type: 'Hub', url: '/procedures/spinal-fusion' },
      { type: 'Spoke - ALIF', url: '/procedures/alif-surgery' },
      { type: 'Spoke - XLIF', url: '/procedures/xlif-surgery' },
      { type: 'Spoke - OLIF', url: '/procedures/olif-surgery' },
      { type: 'Spoke - TLIF', url: '/procedures/tlif-surgery' },
    ],
    action: 'Keep one "Spinal Fusion Surgery" hub (canonical) + link out to ALIF/XLIF/OLIF/TLIF as spokes with distinct content.',
  },
];

function generateReport(): string {
  const now = new Date().toISOString().split('T')[0];
  
  let report = `# SEO Duplicate Page Audit Report

Generated: ${now}

## Overview

This report identifies pages that may be cannibalizing each other in search results due to overlapping content and keyword targeting. For each cluster, we recommend a "winner" URL to consolidate rankings and 301 redirect targets.

---

`;

  DUPLICATE_CLUSTERS.forEach((cluster, index) => {
    report += `## ${index + 1}. ${cluster.name}

### Current URLs

${cluster.urls.map(url => `- \`${url}\``).join('\n')}

### Recommended Winners

${cluster.recommendedWinners.map(w => `- **${w.type}:** \`${w.url}\``).join('\n')}

### Recommended Action

${cluster.action}

---

`;
  });

  report += `## Implementation Priority

1. **High Priority:** DDD overlap, Back pain treatment options, Disc replacement synonyms
2. **Medium Priority:** Herniated disc overlap, Aging management, Spinal fusion sprawl
3. **Lower Priority:** Ankle surgery clusters (if content is distinct)

## Next Steps

1. Review each cluster to confirm content overlap
2. Choose canonical winners based on traffic/rankings data
3. Implement 301 redirects from duplicate URLs to winners
4. Update internal links to point to canonical URLs
5. Monitor search rankings after consolidation

## Notes

- This audit is based on URL structure analysis
- Manual content review recommended before implementing redirects
- Check Google Search Console for actual cannibalization evidence
- Consider user intent when choosing winners
`;

  return report;
}

// Generate and write the report
const report = generateReport();
const outputPath = path.join(process.cwd(), 'docs', 'seo', 'duplicate-page-audit.md');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(outputPath, report, 'utf-8');
console.log(`Report generated: ${outputPath}`);
