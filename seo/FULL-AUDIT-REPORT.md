# Full SEO Audit Report: mountainspineorthopedics.com
**Audit Date:** March 2, 2026
**Business Type:** Multi-location Medical Practice (Orthopedic & Spine Surgery)
**Locations:** 23 clinics across Florida, New Jersey, New York, Pennsylvania
**Technology:** Next.js (React SSR/App Router)
**Pages Crawled:** 378 (sitemap), key pages fetched and analyzed

---

## Overall SEO Health Score: 54 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 25% | 54/100 | 13.5 |
| Content Quality (E-E-A-T) | 25% | 53/100 | 13.3 |
| On-Page SEO | 20% | 58/100 | 11.6 |
| Schema / Structured Data | 10% | 52/100 | 5.2 |
| Performance (Core Web Vitals) | 10% | 48/100 | 4.8 |
| Images | 5% | 62/100 | 3.1 |
| AI Search Readiness | 5% | 37/100 | 1.9 |
| **TOTAL** | | | **53.4 / 100** |

**Interpretation:** The site has meaningful structural investment (Next.js SSR, schema markup, 23-location footprint, board-certified physicians) but is underperforming due to a cluster of E-E-A-T gaps, technical indexability issues, and schema quality problems that are material for a YMYL medical practice competing against hospital systems and national orthopedic brands.

---

## Top 5 Critical Issues

1. **FAQPage schema misuse** — FAQPage is restricted to government and health authority sites (since August 2023). Using it on condition, location, and injury pages risks a structured data manual action.
2. **Fabricated AggregateRating (250,000 reviews)** — The homepage claims 250,000 reviews vs. 1,247 on the About page and 28 at one location. This is Google's definition of misleading structured markup — penalty risk is real.
3. **No physician author attribution on 330+ clinical pages** — All condition/treatment pages use `author: @id = #medicalorganization`. For YMYL medical content under September 2025 QRG, this is the core E-E-A-T failure.
4. **Unbounded parameterized URL space** — `/conditions?data={tags}` creates an infinite crawlable URL space if not canonicalized or blocked. Critical indexability risk.
5. **Critical schema error: `bodyLocation: "Spine"` on ACL page** — The ACL is in the knee, not the spine. This is a template propagation error likely affecting many of the 180+ treatment pages and is a factual accuracy failure on YMYL content.

---

## Top 5 Quick Wins

1. **Remove FAQPage schema** from all non-authority pages (1-hour dev task, eliminates penalty risk)
2. **Fix homepage H1** from "Services & Expertise" to a brand/keyword-aligned headline (15-minute task)
3. **Add H1 to `/injuries/car-accident`** — currently missing entirely (15-minute task)
4. **Deduplicate sitemap** — remove duplicate `<loc>` entries (degenerative disc disease appears 3×, and likely more) (2-hour task)
5. **Fix or label the 250,000 review count** — either add sourcing context or remove it (1-hour task)

---

## Section 1: Technical SEO

**Score: 54 / 100**

### 1.1 Crawlability

**robots.txt: Medium Issues**
- Current file is minimal but functional: allows all crawlers, references sitemap correctly
- Missing: no AI crawler rules (GPTBot, ClaudeBot, PerplexityBot, Amazonbot) — a content policy gap for a HIPAA-adjacent practice
- Missing: no `Disallow` for `/api/` routes or parameterized URLs
- Recommended addition:
```
User-agent: GPTBot
Disallow: /

User-agent: *
Disallow: /api/
Disallow: /conditions?*
```

**Crawl Budget: High Risk**
- Sitemap duplicates (confirmed: degenerative disc disease ×3) waste budget
- `/conditions?data={tags}` parameter pattern generates unbounded URL variants
- No `lastmod` on 357/378 sitemap entries — Googlebot cannot prioritize recrawls

### 1.2 Indexability — CRITICAL

**Parameterized URL: `/conditions?data={tags}`**
- If this URL pattern returns HTTP 200 with per-tag unique `<title>` tags and is linked from navigation, Googlebot discovers and indexes every tag permutation
- With a medical taxonomy of 50+ possible tag values, this could generate thousands of thin indexed pages
- **Fix (Option A — preferred):** Add canonical in Next.js page component: `alternates: { canonical: 'https://mountainspineorthopedics.com/conditions' }`
- **Fix (Option B):** Add `Disallow: /conditions?*` to robots.txt
- Implement both

**Canonical Tags: Unverified**
- Trailing slash inconsistency risk in Next.js without `trailingSlash: false` in `next.config.js`
- Verify: `curl -sI https://mountainspineorthopedics.com/conditions/` to test redirect behavior

**JS Rendering Risk: High**
- Conditions index page confirmed to have **no visible H1-H3 or content in static HTML**
- Next.js CSR on this page means Googlebot receives a near-empty shell on first crawl pass
- 150+ condition pages may have reduced discovery frequency if their URLs are only in JS-rendered links
- `dynamic(..., { ssr: false })` usage must be audited — any content-critical component wrapped this way is invisible to crawlers

### 1.3 Security Headers — Not Confirmed

Without live HTTP header access, the following headers must be manually verified. Their absence on a healthcare site represents both SEO and compliance risk:

| Header | Required Value |
|--------|----------------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` |
| `Content-Security-Policy` | Restrict to known origins including GTM |
| `X-Content-Type-Options` | `nosniff` |
| `X-Frame-Options` | `SAMEORIGIN` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |

**Add to `next.config.js`:**
```javascript
async headers() {
  return [{
    source: '/(.*)',
    headers: [
      { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains; preload' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
    ]
  }]
}
```

### 1.4 Internal Linking Architecture — High Risk

- Condition pages (`/conditions/sciatica`) do not appear to cross-link to relevant location pages — missing the location + condition relevance signal critical for local rankings
- Homepage should directly link to the top 8–10 conditions by search volume (currently only links to "Services" index)
- 23 location pages likely receive minimal direct internal link equity from the homepage
- Breadcrumb navigation needs verification on all condition and location pages

**Recommended cross-linking model:**
```
/conditions/sciatica → links to all locations treating sciatica
/locations/new-york-ny → links to all conditions treated at this location
Homepage → direct links to top 8 conditions + link to all 23 locations
```

### 1.5 Mobile Optimization — Unverified Risk

- Google operates exclusively on mobile-first indexing (since July 2024)
- Viewport meta tag must be confirmed: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Touch target sizes on conditions filter buttons and appointment CTAs need 48×48px minimum
- Any content hidden on mobile via CSS (`display: none`) that appears on desktop is invisible to Google

---

## Section 2: Content Quality & E-E-A-T

**Score: 53 / 100 | YMYL Classification: HIGH**

### 2.1 E-E-A-T Breakdown

| Factor | Score | Weight | Weighted |
|--------|-------|--------|---------|
| Experience | 48/100 | 20% | 9.6 |
| Expertise | 61/100 | 25% | 15.3 |
| Authoritativeness | 44/100 | 25% | 11.0 |
| Trustworthiness | 41/100 | 30% | 12.3 |
| **E-E-A-T Total** | | | **48.2/100** |

### 2.2 Expertise — 61/100

**Strengths:**
- 6 board-certified surgeons with elite fellowship training (Harvard, Brown, Princeton, Penn)
- Sciatica page at 2,000–2,500 words with MedicalCondition schema and doctor attribution is the internal benchmark — all other pages should match this standard
- ACL page has genuine clinical specificity: graft type rationale, AAOS citation in schema description, arthroscopic step-by-step procedure notes

**Critical gap:**
- Expertise signals are concentrated on the About page and not distributed into the 330+ clinical content pages
- `author: {"@id": "#medicalorganization"}` on every condition and treatment page tells quality raters that no specific qualified person authored this content
- `bodyLocation: "Spine"` on the ACL treatment page is a clinical accuracy failure detectable by any reviewer — evidence of template-generated content without physician review

### 2.3 Authoritativeness — 44/100

**Critical failure: Review count inconsistency**
- Homepage: 250,000+ reviews
- About page: 1,247 reviews
- Hollywood location: 28 reviews

These three numbers are not reconcilable without an explicit methodology statement. Google QRG raters are specifically trained to flag unverifiable authority claims. The 250,000 figure needs immediate resolution: either add sourcing context ("250,000+ verified patient interactions across all platforms since 2005") or remove it.

**Other gaps:**
- No external citations in body content (one AAOS reference in ACL schema description only)
- No hospital affiliations displayed on content pages
- No professional society memberships (AAOS, NASS, AOSSM) with verification links
- No evidence of inbound editorial links from medical publications

### 2.4 Trustworthiness — 41/100

**Positive:**
- HTTPS confirmed, multiple physical locations, named physicians with verifiable credentials

**Critical negatives:**
- Review count discrepancy (see above) — single most damaging trust signal on the site
- No medical content review policy or editorial standards page
- No visible "Last Reviewed: [Date]" on any clinical page
- Missing H1 on `/injuries/car-accident` — signals template rendering failure on a YMYL page
- Homepage H1 "Services & Expertise" — non-informative navigational label, not a page-defining headline for the site's most authoritative page

### 2.5 Page-Level Findings

**Conditions pages (sample: rotator cuff tear):**
- Title: Well-formed, keyword leads
- H1: Present in RSC but not in static HTML — heading hierarchy invisible to non-JS crawlers
- Schema: FAQPage present (must be removed), MedicalCondition likely present
- Author: Organization attribution only — no named shoulder specialist
- Word count: ~600–800 words (meets minimum but thin for YMYL depth)
- Missing: Author byline, last-reviewed date, surgeon-voice content

**Treatment pages (sample: ACL reconstruction):**
- Title: Well-formed
- Schema: `bodyLocation: "Spine"` — critical factual error on a knee procedure
- Content: Genuine clinical specificity (graft rationale, AAOS reference) — strongest content page audited
- Missing: Named surgeon attribution, dateModified, corrected bodyLocation

**Blog (sample: "When Should You See an Orthopedist"):**
- Published: 2026-01-11 (fresh)
- Schema: `BlogPosting` present with `speakable` (positive AI signal); `author` is Organization, not Physician
- Word count: ~800–1,200 (below 1,500-word floor for YMYL medical blog)
- Missing: Named physician byline, external citations, dateModified

### 2.6 Thin Content Risk at Scale

330+ programmatic pages (150 conditions + 180 treatments) represent 87% of the sitemap. Risk assessment:
- If template structure is identical across pages with only condition/procedure name swapped, Google's helpful content algorithm flags this as mass-produced content
- Audit recommendation: Random sample 33 pages (10% of total). If average unique content falls below 60% per page, content enrichment sprint is required before any further expansion

---

## Section 3: On-Page SEO

**Score: 58 / 100**

### 3.1 Title Tags

| Page | Title | Assessment |
|------|-------|-----------|
| Homepage | "Mountain Spine & Orthopedics \| Top Orthopedic & Spine Surgeons in FL, NJ, NY & PA" | Good — brand + keywords + geo |
| Conditions | "Orthopedic & Podiatric Conditions \| Mountain Spine & Orthopedics" | Good |
| Sciatica | "Sciatica – Symptoms & Treatment \| Spine & Orthopedic Specialists" | Good — condition leads |
| ACL | "ACL Reconstruction Surgery – Procedure & Recovery \| Spine & Orthopedic Specialists" | Good |
| Hollywood location | "Top Orthopedic Surgeons & Spine Specialists in Hollywood \| Mountain Spine & Orthopedics" | Good — geo present |
| About | "About Mountain Spine & Orthopedics \| Expert Spine & Joint Care" | Good |
| Doctors | "Board-Certified Orthopedic Doctors \| Mountain Spine & Orthopedics" | Good |
| Car accident | "Car Accident Orthopedic Care \| Mountain Spine & Orthopedics" | Thin — no geo, no differentiator |

### 3.2 Meta Descriptions

Generally adequate but generic on some pages. No differentiated value proposition or urgency signals. Car accident meta description at "Specialized orthopedic care for car accident injuries. Same-week appointments, advanced spine & joint treatment." is better than most.

### 3.3 Heading Structure — Critical Issues

| Page | H1 Status | Issue |
|------|-----------|-------|
| Homepage | "Services & Expertise" | Misaligned — should be brand/keyword/geo headline |
| Conditions index | Not visible in static HTML | JS-rendering risk |
| Car accident | **MISSING** | Critical — YMYL page with no H1 |
| Sciatica | "Sciatica" | Good |
| ACL | Not confirmed | RSC-rendered |
| Hollywood location | "Orthopedic Surgeons & Spine Specialists in Hollywood" | Good — geo keyword |

### 3.4 Meta Description Length & Coverage

Most pages have meta descriptions. Car accident meta (148 chars) is within range. Homepage meta truncates — verify character count is under 160.

---

## Section 4: Schema & Structured Data

**Score: 52 / 100**

### 4.1 Current Implementation Overview

| Page | Schema Types | Status |
|------|-------------|--------|
| Homepage | MedicalOrganization, WebSite, SearchAction, AggregateRating | AggregateRating is penalty risk |
| Condition pages | MedicalCondition, FAQPage, BreadcrumbList, Service | FAQPage must be removed |
| Treatment pages | MedicalOrganization, Service, BreadcrumbList, ItemList, MedicalProcedure | bodyLocation errors |
| Location hub | MedicalOrganization, ItemList (23 locations), FAQPage, BreadcrumbList | FAQPage must be removed |
| Location detail | LocalBusiness, AggregateRating, BreadcrumbList | Missing hours, geo, map |
| About/Doctors | MedicalOrganization | Physician schema entirely absent |
| Blog posts | BlogPosting (confirmed one post) | Author is Organization, not Physician |

### 4.2 Critical Schema Errors

**Error 1 — FAQPage restricted type (CRITICAL)**
FAQPage has been restricted to government and health authority sites since August 2023. Using it on:
- `/conditions/sciatica`
- `/locations` hub
- `/injuries/car-accident` (assumed)
- All other condition/location pages

**Action: Remove FAQPage schema from all pages immediately.** The underlying FAQ content can remain on the page — only the schema markup needs removal.

**Error 2 — Fabricated AggregateRating (CRITICAL)**
Homepage claims 250,000 reviews. Google's review content policies prohibit ratings not sourced from verifiable user experiences. This will either be silently ignored or trigger a manual action under "Spammy Structured Markup."

**Action: Remove homepage AggregateRating entirely OR replace with a sourced aggregate from a named platform (Google Business Profile, Healthgrades) with a defensible, accurate count.**

**Error 3 — `bodyLocation: "Spine"` on ACL page (HIGH)**
The ACL is in the knee. This is a template propagation error. Audit all 180+ treatment pages for similar field mismatches.

**Error 4 — No Physician schema on doctor pages (HIGH)**
The `/about/meetourdoctors` page and all 6 individual doctor profile pages have no `Person`/`Physician` schema. This is the highest-impact missing schema for a medical practice's E-E-A-T and Knowledge Panel eligibility.

### 4.3 Missing Schema Opportunities

| Page Type | Missing Schema | Priority | Value |
|-----------|---------------|----------|-------|
| Doctor profile pages | `Physician` + `ProfilePage` | Critical | E-E-A-T, Knowledge Panel |
| Doctor listing page | `ItemList` of Physicians | High | Entity disambiguation |
| Location detail pages | `openingHoursSpecification`, `geo`, `hasMap` | High | Local rich results |
| Blog posts | `Article` with `Person` author | High | AI citation weight |
| All condition pages | `signOrSymptom`, `associatedAnatomy`, `possibleTreatment` in MedicalCondition | Medium | Medical rich results |
| Homepage | `Organization.sameAs` links | Medium | Entity disambiguation |

### 4.4 Physician Schema Template (for each doctor page)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "url": "https://mountainspineorthopedics.com/about/meetourdoctors/dr-[name]",
  "mainEntity": {
    "@type": "Physician",
    "@id": "https://mountainspineorthopedics.com/about/meetourdoctors/dr-[name]#physician",
    "name": "Dr. [Full Name]",
    "honorificSuffix": "MD",
    "medicalSpecialty": "https://schema.org/Osteopathic",
    "jobTitle": "Orthopedic Spine Surgeon",
    "worksFor": {
      "@type": "MedicalOrganization",
      "@id": "https://mountainspineorthopedics.com/#organization",
      "name": "Mountain Spine Orthopedics"
    },
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

## Section 5: Core Web Vitals & Performance

**Score: 48 / 100 (predictive — CrUX field data needed for confirmation)**

### 5.1 LCP (Largest Contentful Paint) — High Risk

**Target: < 2.5s | Estimated: 3.5s–6.0s on mobile**

Primary risk factors:
- **GTM (GTM-T57SB8NQ)** loader adds 150–400ms render-blocking initialization in default configuration
- **Hero image likely not using `priority={true}`** on Next.js `<Image>` — browser discovers LCP element late in parse order
- **React hydration delay** on a large route tree adds 200–500ms element render delay

**Fix — highest impact:**
```jsx
<Image
  src="/hero.webp"
  alt="Mountain Spine & Orthopedics"
  width={1200}
  height={600}
  priority={true}        // generates fetchpriority="high" + preload link
  fetchPriority="high"
/>
```

**Fix — GTM loading strategy:**
```jsx
<Script
  id="gtm"
  strategy="afterInteractive"  // NOT "beforeInteractive" or "lazyOnload"
  dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){...GTM-T57SB8NQ...})` }}
/>
```

### 5.2 INP (Interaction to Next Paint) — High Risk

**Target: < 200ms | Estimated: 250–600ms on mobile**

Primary risk factors:
- GTM container with 5–15 tags adds main thread contention during the interaction window
- Conditions index page is client-side rendered with a large DOM — filter interactions trigger expensive re-renders
- Heavy React component trees on 23 location pages with photo galleries and embedded maps

**Fix:**
- Move heatmap, chat, and remarketing tags to fire on `Window Loaded` in GTM settings
- Virtualize the conditions list with `react-window` to cap DOM nodes
- Convert conditions index to SSG (see Section 1.2)

### 5.3 CLS (Cumulative Layout Shift) — High Risk

**Target: < 0.1 | Estimated: 0.08–0.25**

Primary risk factors:
- GTM-injected cookie consent bars and chat widgets push content down after initial render
- Images without explicit `width`/`height` attributes cause layout shift on load
- Web fonts without `font-display: optional` cause text reflow

**Fix:**
```css
/* Reserve space for GTM-injected cookie bar */
.cookie-banner-placeholder {
  min-height: 60px;
  content-visibility: auto;
}
```
```jsx
/* Always specify dimensions on images */
<Image src="/clinic.jpg" width={800} height={450} alt="Clinic" />
```

### 5.4 Next.js Rendering Strategy

**Conditions index page — CSR confirmed, must convert to SSG:**
```javascript
// app/conditions/page.js (App Router)
// This is a Server Component by default — ensure no 'use client' at top level
// Pre-render all condition data at build time

// pages/conditions/index.js (Pages Router)
export async function getStaticProps() {
  const conditions = await getAllConditions();
  return { props: { conditions }, revalidate: 3600 }; // ISR
}
```

---

## Section 6: Images

**Score: 62 / 100**

**Positive signals:**
- Alt text confirmed on audited pages with descriptive, contextual text (e.g., "Doctor evaluating patient symptoms for Sciatica diagnosis at Mountain Spine & Orthopedics")
- Responsive design confirmed

**Issues:**
- `priority={true}` on hero/LCP images unconfirmed — likely missing (see Section 5.1)
- Image format (WebP vs JPEG/PNG) unconfirmed for 330+ content pages
- Images injected by GTM for tracking pixels/chat widgets bypass Next.js image optimization

**Recommendations:**
- Audit all `<img>` tags across condition and treatment page templates for `width`, `height`, and `alt` attributes
- Ensure Next.js `<Image>` component is used (not raw `<img>`) on all CMS-sourced images
- Confirm hero images use WebP/AVIF format with `quality={85}` parameter

---

## Section 7: AI Search Readiness (GEO)

**Score: 37 / 100**

### 7.1 What Works

- `speakable` SpeakableSpecification on the blog post (`cssSelector: ["h1", "h2"]`) — directly signals Google AI Overviews which content is quotable
- FAQPage schema (though it must be removed for penalty reasons) currently provides structured Q&A that AI systems can surface — FAQ content should remain on-page in structured format
- `BlogPosting` with `datePublished` allows AI systems to assess freshness
- `MedicalCondition` with `signOrSymptom` and `possibleTreatment` gives AI crawlers factual claims to extract

### 7.2 What Prevents Higher Score

- **No named physician author on any content page** — AI citation pipelines for YMYL content increasingly require `Person` schema with `medicalSpecialty` and `affiliation`
- **No `dateModified` on condition/treatment pages** — AI systems deprioritize undated medical claims
- **`bodyLocation: "Spine"` error on ACL page** — if cited by an AI system, produces incorrect medical information. This is the type of error Google's AI Overview quality filters are designed to catch.
- **No external citation links in body content** — AI crawlers give higher citation weight to content that links to authoritative external sources (AAOS, NCBI, peer-reviewed journals)
- **AI crawler rules absent from robots.txt** — GPTBot, ClaudeBot, PerplexityBot can freely index all content without any content policy guidance from the site

### 7.3 llms.txt Compliance

Not detected. The site has no `/llms.txt` file to guide AI systems on how to use its content. This is an emerging but increasingly important signal for AI citation platforms.

### 7.4 Recommended AI Citation Improvements

1. Add named physician quote blocks: `"According to Dr. [Name], Fellowship-Trained Spine Surgeon, [specific clinical claim]..."`
2. Include specific citable statistics with sourcing: surgical success rates, recovery timelines, complication rates from AAOS or peer-reviewed sources
3. Implement FAQ sections on condition/treatment pages with direct Q&A format and specific answers
4. Add `speakable` schema to condition pages (currently only on blog)
5. Create `/llms.txt` to guide AI platforms on content usage permissions

---

## Section 8: Sitemap Analysis

**Score: 58 / 100**

| Check | Result |
|-------|--------|
| Valid XML | Pass |
| URL count (378 < 50,000) | Pass |
| Sitemap index needed | Not needed |
| Duplicate URLs | **FAIL — degenerative disc disease ×3, likely more** |
| lastmod on all URLs | **FAIL — 357/378 missing** |
| All 23 locations present | **FAIL — 4 missing** |
| robots.txt Sitemap directive | Pass (confirmed in robots.txt) |
| priority/changefreq tags | Unverified (deprecated, remove if present) |

**Action items:**
1. Deduplicate all 378 `<loc>` entries
2. Add 4 missing clinic location URLs
3. Add accurate `<lastmod>` timestamps from CMS to all URLs
4. Remove `<priority>` and `<changefreq>` tags if present

---

## Competitive Benchmark

The site's credential quality (Harvard/Brown/Princeton fellowship-trained surgeons) is competitive with regional multi-location peers like Rothman Orthopaedics and OrthoCarolina. The E-E-A-T gap is not a credential gap — it is a **distribution gap**: the credentials on the About page are invisible to the clinical content estate where they would carry ranking weight.

Top-ranking competitors in this space (HSS, AAOS, Rothman, OrthoCarolina) all deploy:
- Named physician bylines on every condition/treatment page
- Explicit medical review dates on clinical content
- External citations to clinical guidelines
- Physician schema with verifiable `sameAs` links

These are engineering/template tasks, not content rewrites. They can be implemented at scale across all 330+ pages simultaneously by fixing the template layer.

---

*Audit produced by Claude Code SEO Audit System*
*Specialist agents: seo-technical, seo-content, seo-schema, seo-sitemap, seo-performance*
*Output: FULL-AUDIT-REPORT.md + ACTION-PLAN.md*
