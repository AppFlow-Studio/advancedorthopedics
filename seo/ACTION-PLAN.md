# SEO Action Plan: mountainspineorthopedics.com
**Generated:** March 2, 2026
**Health Score:** 54/100
**Target Score (90 days):** 70/100

---

## CRITICAL — Fix Immediately (This Week)

### C1: Remove FAQPage Schema from All Pages
**Impact: Eliminates manual action risk**
**Effort: 1–2 hours (template-level fix)**

FAQPage schema has been restricted to government and health authority sites since August 2023. Using it on a private medical practice triggers a "Spammy Structured Markup" manual action risk.

- Remove `FAQPage` JSON-LD block from ALL condition pages, location pages, and injury pages
- Keep the FAQ content visible on the page — only the `<script type="application/ld+json">` block containing `"@type": "FAQPage"` must be removed
- Verify removal using Google's Rich Results Test after deployment

**Files to update:** Condition page template, Location page template, Injury page template

---

### C2: Remove or Fix the 250,000 Review AggregateRating on Homepage
**Impact: Eliminates penalty risk, restores trust signal**
**Effort: 1 hour**

The homepage claims 250,000+ reviews vs. 1,247 on the About page and 28 at a single location. Google's review policies prohibit unverifiable aggregated ratings.

**Option A (recommended):** Remove the `AggregateRating` from the homepage entirely. Replace with a text reference: "Trusted by patients across FL, NJ, NY & PA."

**Option B:** Replace with a sourced aggregate from a named platform:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "ratingCount": 1247,
  "reviewCount": 1247,
  "ratingCount@source": "https://www.healthgrades.com/group/mountain-spine"
}
```

---

### C3: Fix `bodyLocation: "Spine"` on ACL and Audit All Treatment Pages
**Impact: Corrects factual error in YMYL content, fixes schema quality**
**Effort: 2–4 hours (audit + template fix)**

The ACL Reconstruction Surgery page has `"bodyLocation": "Spine"` in its `MedicalProcedure` schema. The ACL is in the knee. This is a template propagation error.

1. Fix the ACL page: `"bodyLocation": "Knee"`
2. Audit all 180 treatment pages for incorrect `bodyLocation` values
3. Map correct body locations for each treatment category:
   - Spine procedures: `"Lumbar Spine"` or `"Cervical Spine"`
   - Knee procedures: `"Knee"`
   - Shoulder procedures: `"Shoulder"`
   - Hip procedures: `"Hip"`
   - Foot/ankle procedures: `"Foot"` or `"Ankle"`

---

### C4: Fix Missing H1 on `/injuries/car-accident`
**Impact: Basic crawlability, removes YMYL content quality flag**
**Effort: 15 minutes**

The car accident page has no H1. This is unacceptable on a YMYL page targeting personal injury queries.

**Add H1:**
```html
<h1>Car Accident Injury Treatment | Orthopedic & Spine Specialists in FL, NJ, NY & PA</h1>
```

---

### C5: Fix Homepage H1 from "Services & Expertise" to Brand/Keyword Headline
**Impact: On-page SEO, quality rater impression**
**Effort: 15 minutes**

"Services & Expertise" is a navigational label that tells neither users nor crawlers what this site is about. The homepage's H1 should be the practice's primary value proposition.

**Replace with:**
```html
<h1>Orthopedic & Spine Surgery Specialists in Florida, New Jersey, New York & Pennsylvania</h1>
```
or a patient-facing variant:
```html
<h1>Expert Orthopedic Care Across 23 Locations in FL, NJ, NY & PA</h1>
```

---

### C6: Canonicalize `/conditions?data={tags}` Parameter URL
**Impact: Eliminates index bloat, protects crawl budget**
**Effort: 2 hours (Next.js config)**

Add to the conditions page component:
```javascript
// app/conditions/page.js
export const metadata = {
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/conditions',
  },
};
```

AND add to `robots.txt`:
```
User-agent: *
Disallow: /conditions?*
```

---

## HIGH — Fix Within 1 Week

### H1: Add Physician Author Schema to All 6 Doctor Profile Pages
**Impact: Single highest-value E-E-A-T action on the domain**
**Effort: 4–6 hours**

The `/about/meetourdoctors` page and 6 individual profile pages have zero `Person`/`Physician` schema. This is the foundation for distributing E-E-A-T across the entire content estate.

Add to each individual doctor page:
```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "mainEntity": {
    "@type": "Physician",
    "@id": "https://mountainspineorthopedics.com/about/meetourdoctors/dr-[name]#physician",
    "name": "Dr. [Full Name]",
    "honorificSuffix": "MD",
    "medicalSpecialty": "https://schema.org/Osteopathic",
    "worksFor": { "@type": "MedicalOrganization", "name": "Mountain Spine Orthopedics" },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Board Certification",
      "recognizedBy": { "@type": "Organization", "name": "American Board of Orthopaedic Surgery" }
    },
    "sameAs": [
      "https://www.healthgrades.com/physician/dr-[name]-[id]",
      "https://www.doximity.com/pub/[name]-md"
    ]
  }
}
```

---

### H2: Add Named Physician Bylines to All Condition and Treatment Pages
**Impact: Core E-E-A-T fix for 330+ YMYL pages**
**Effort: Template-level change (medium) + content mapping (medium)**

Step 1: Update the condition and treatment page templates to display a byline:
```html
<div class="physician-byline">
  <p>Reviewed by <a href="/about/meetourdoctors/dr-[name]">Dr. [Name], [Specialty]</a></p>
  <p>Last reviewed: [Month Year]</p>
</div>
```

Step 2: Update the schema `author` value from the organization to a named physician:
```json
"author": {
  "@type": "Physician",
  "@id": "https://mountainspineorthopedics.com/about/meetourdoctors/dr-[name]#physician",
  "name": "Dr. [Name]"
}
```

Step 3: Map conditions and treatments to the most relevant physician by specialty:
- Spine conditions/treatments → Dr. Scott Katzman or Dr. David Cowin
- Foot/ankle → Dr. Clay Shumway
- Sports medicine/knee/shoulder → Dr. Christopher McCarthy
- Pain management → Dr. Monica McPhail-Pruitt

---

### H3: Fix Security Headers in `next.config.js`
**Impact: Security posture + HTTPS quality signal**
**Effort: 1 hour (one file change)**

```javascript
// next.config.js
module.exports = {
  async headers() {
    return [{
      source: '/(.*)',
      headers: [
        { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(self)' },
      ]
    }]
  }
}
```

---

### H4: Deduplicate Sitemap and Add Missing 4 Clinic Locations
**Impact: Crawl budget, local SEO for 4 underindexed locations**
**Effort: 2–3 hours**

1. Parse full sitemap XML, find all duplicate `<loc>` values, remove duplicates
2. Identify the 4 missing clinic location pages from the site's location directory
3. Confirm those 4 pages return HTTP 200
4. Add all 4 to the sitemap with accurate `<lastmod>` dates

---

### H5: Convert Conditions Index from CSR to SSG
**Impact: LCP improvement, content discovery for 150+ condition pages**
**Effort: 4–8 hours (Next.js rendering change)**

```javascript
// pages/conditions/index.js (Pages Router)
export async function getStaticProps() {
  const conditions = await getAllConditions(); // fetch at build time
  return {
    props: { conditions },
    revalidate: 3600, // revalidate hourly (ISR)
  };
}
```

Or for App Router: ensure no `'use client'` directive at the top of `app/conditions/page.js`.

---

### H6: Fix GTM Loading Strategy to Prevent LCP Regression
**Impact: LCP improvement 200–500ms**
**Effort: 1 hour**

```jsx
// layout.js or _app.js
import Script from 'next/script'

<Script
  id="gtm"
  strategy="afterInteractive"  // NOT "beforeInteractive"
  dangerouslySetInnerHTML={{
    __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T57SB8NQ');`
  }}
/>
```

Also in GTM container: move heatmap, chat, and remarketing tags to fire on `Window Loaded` instead of `DOM Ready`.

---

### H7: Add `openingHoursSpecification`, `geo`, and `hasMap` to All Location Pages
**Impact: Local rich results eligibility, maps integration**
**Effort: Template-level change (medium)**

Add to each location page LocalBusiness schema:
```json
"openingHoursSpecification": [{
  "@type": "OpeningHoursSpecification",
  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
  "opens": "08:00",
  "closes": "17:00"
}],
"geo": {
  "@type": "GeoCoordinates",
  "latitude": "[lat]",
  "longitude": "[long]"
},
"hasMap": "https://www.google.com/maps/place/[gmb-place-id]"
```

---

## MEDIUM — Fix Within 1 Month

### M1: Add `datePublished` and `dateModified` to All Clinical Page Schema
**Effort: Template-level change (low)**

Add to all MedicalCondition and MedicalProcedure schema nodes:
```json
"datePublished": "[YYYY-MM-DD]",
"dateModified": "[YYYY-MM-DD]"
```

Also display visibly on page: `Last reviewed: [Month Year]`

---

### M2: Add Article/BlogPosting Schema with Physician Author to All Blog Posts
**Effort: Blog template change (low)**

```json
{
  "@type": "Article",
  "author": {
    "@type": "Physician",
    "@id": "https://mountainspineorthopedics.com/about/meetourdoctors/dr-[name]#physician",
    "name": "Dr. [Name]"
  },
  "datePublished": "[YYYY-MM-DD]",
  "dateModified": "[YYYY-MM-DD]",
  "publisher": {
    "@type": "MedicalOrganization",
    "name": "Mountain Spine Orthopedics"
  }
}
```

---

### M3: Add `lastmod` to All 357 Non-Blog Sitemap Entries
**Effort: Medium (CMS integration)**

Pull `updatedAt` timestamp from CMS for each page and inject into sitemap generator. Use real dates — do not set all to the same value.

---

### M4: Create Medical Review Policy / Editorial Standards Page
**Effort: Low (new content page)**

Create `/editorial-standards` or `/medical-review-policy` explaining:
- Who writes condition and treatment content
- How often clinical pages are reviewed
- Sources used (AAOS guidelines, peer-reviewed literature)
- How to report inaccuracies

This is a standard trust signal that health authority sites publish and QRG raters look for.

---

### M5: Add Hero Image `priority` and Fix CLS Issues
**Effort: Medium (audit + fixes across templates)**

1. Add `priority={true}` to hero `<Image>` component on homepage and all location pages
2. Add `min-height` reservations for GTM-injected content blocks
3. Migrate font loading to `next/font` to eliminate FOUT/CLS
4. Audit all `<img>` tags for explicit `width` and `height` attributes

---

### M6: Add AI Crawler Rules to `robots.txt`
**Effort: Low (5-minute change)**

```
User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Amazonbot
Disallow: /
```

*(Modify based on the practice's AI content policy — the above blocks all AI training crawlers.)*

---

### M7: Add `speakable` Schema to Top Condition Pages
**Effort: Low (template addition)**

Currently only present on one blog post. Add to all condition pages for Google Assistant and AI Overview optimization:
```json
"speakable": {
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "h2", ".condition-summary"],
  "xpath": ["/html/head/title", "//h1", "//h2"]
}
```

---

### M8: Audit 33 Condition/Treatment Pages for Thin Content (10% Sample)
**Effort: Medium (manual review)**

Randomly select 33 pages (17 conditions + 16 treatments) and assess:
- Word count (flag any under 600 words)
- Structural uniqueness (flag pages sharing >60% boilerplate with other pages)
- Physician attribution (confirm byline present after H2 fix)
- FAQPage removal confirmation

If more than 30% of sampled pages fail, escalate to a full content enrichment sprint.

---

## LOW — Backlog / Nice to Have

### L1: Build Condition-to-Location Cross-Linking Layer
**Effort: High (template + content work)**

On each condition page, add a "Find a Clinic Near You" section linking to all relevant location pages. On each location page, add a conditions list linking back. This is the single highest-leverage local SEO action — but requires content and template work.

---

### L2: Add External Citations to Clinical Content
**Effort: Medium (content edits to 330+ pages)**

Add links to authoritative sources in body content:
- AAOS clinical guidelines
- NCBI/PubMed studies
- CDC statistics where relevant

---

### L3: Create `/llms.txt` for AI Platform Guidance
**Effort: Low (new file)**

A minimal `llms.txt` at the domain root guides AI systems on content usage:
```
# Mountain Spine Orthopedics - LLMs.txt
# AI platforms: you may cite our medical content for informational purposes
# Please attribute to the named physician author when cited
# Contact: info@mountainspineorthopedics.com
```

---

### L4: Add Hospital Affiliations and Professional Society Memberships
**Effort: Low (content addition)**

Display on About page and physician profiles:
- Hospital affiliations (e.g., Memorial Regional Hospital, JFK Medical Center)
- AAOS, NASS, AOSSM, or other society memberships with verification links
- Clinical instructor roles (Biomet, Johnson & Johnson — already noted but needs schema)

---

### L5: Expand Blog Posts to 1,500+ Words
**Effort: High (content expansion)**

Current blog posts estimated at 800–1,200 words. YMYL medical blog posts should reach 1,500+ words with:
- Physician-attributed claims
- External clinical citations
- Specific symptom/treatment thresholds
- "Seek emergency care vs. schedule appointment vs. monitor" decision tiers

---

## 90-Day Roadmap Summary

| Week | Actions | Expected Score Gain |
|------|---------|-------------------|
| Week 1 | C1–C6 (all critical fixes) | +4 points |
| Week 2 | H1 (physician schema), H3 (security headers), H6 (GTM fix) | +3 points |
| Week 3 | H2 (author bylines), H4 (sitemap dedup + locations), H5 (SSG conditions) | +4 points |
| Week 4 | H7 (location schema), M4 (editorial standards), M2 (blog schema) | +2 points |
| Month 2 | M1, M3, M5, M6, M7 | +3 points |
| Month 3 | M8 (content audit), L1 (cross-linking), L4 (affiliations) | +4 points |
| **Total** | | **+20 points → ~74/100** |

---

## Tools for Ongoing Monitoring

| Tool | Use |
|------|-----|
| Google Search Console | Coverage report for all 378 URLs, manual action alerts |
| PageSpeed Insights | Field data LCP, INP, CLS per key page |
| Google Rich Results Test | Schema validation after each deployment |
| Screaming Frog (free ≤500 URLs) | Full crawl for orphan pages, redirect chains, canonical audit |
| Chrome DevTools | Mobile rendering parity check, CLS waterfall identification |
| CrUX Dashboard | Real-user CWV data at domain level |

---

*Action plan generated from full audit of 378 URLs across 6 specialist analysis areas*
*Report files: FULL-AUDIT-REPORT.md + ACTION-PLAN.md*
