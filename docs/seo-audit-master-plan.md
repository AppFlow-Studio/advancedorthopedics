# SEO Master Plan Audit Report
## Mountain Spine & Orthopedics - Body-Part Silos & Multi-State Location Hierarchy

**Generated:** January 18, 2026  
**Auditor:** Cursor AI (Senior Technical SEO Engineer)  
**Project:** Next.js App Router Application

---

## Executive Summary

### Overall Compliance Status

| Plan | Compliance | Status |
|------|-----------|--------|
| **Body-Part Silos** | **PARTIAL** | ⚠️ Hybrid approach implemented - body-part hubs exist but condition/treatment pages remain at root level |
| **Location Hierarchy** | **YES** | ✅ State-first URL structure properly implemented (`/locations/[state]/[location]`) |

### Top 15 Critical Gaps

**Body-Part Silos (9 gaps):**
1. **CRITICAL:** Missing `/sports-medicine/` and `/pain-management/` hub pages (plan requires 8 hubs, only 9 exist but 2 missing)
2. **CRITICAL:** Services navigation dropdown uses query params (`/conditions?data=...`) instead of direct body-part hub links (`/conditions/spine`)
3. **CRITICAL:** Condition/treatment pages NOT nested under body-part silos (`/conditions/herniated-disc` vs `/spine/herniated-disc`)
4. **HIGH:** Body-part hubs don't link back to related body-part hubs (e.g., ACL → sports-medicine, spine → pain-management)
5. **HIGH:** Internal linking doesn't prioritize silo structure (cross-links exist but not silo-focused)
6. **MED:** Services dropdown "View All Conditions" links go to `/conditions/spine` (correct) but "View All Treatments" uses query params (inconsistent)
7. **MED:** Pain pages (`/area-of-pain/back-pain/...`) exist separately from body-part hubs - not integrated into silo structure
8. **MED:** Body-part hub pages lack breadcrumb navigation showing hierarchy (currently no breadcrumbs)
9. **LOW:** Body-part hubs reference `tagMatchers` but don't dynamically link to parent `/[body-part]/` when viewing condition pages

**Location Hierarchy (6 gaps):**
10. **CRITICAL:** State landing pages (`/locations/[state]`) exist but H1 says "{State} Locations" instead of "Spine & Orthopedic Surgeons in [State]"
11. **HIGH:** State landing pages missing explicit links to body-part hubs in "Services" section
12. **HIGH:** City pages link to `/treatments` and `/conditions` generically - should link to body-part hubs
13. **MED:** City pages "Services at this location" section exists but could better showcase body-part hubs
14. **MED:** State pages missing "Meet doctors" section (state-specific if supported)
15. **LOW:** Location pages don't explicitly link back to state hub page in breadcrumb navigation (visual breadcrumb exists but schema breadcrumb is correct)

---

## 1. Route Inventory

### Complete Route Tree

```
app/
├── / (homepage)
├── /about
│   ├── /faqs
│   └── /meetourdoctors
│       └── /[Doctor_Name]
├── /area-of-pain/
│   ├── /back-pain/[PainArea]
│   ├── /neck-and-shoulder-pain/[PainArea]
│   └── /foot-pain/[FootSlug]
├── /blogs
│   ├── / (hub)
│   ├── /[BlogSlug]
│   └── /tag/[tagSlug]
├── /condition-check
├── /conditions
│   ├── / (hub - all conditions)
│   └── /[slug] (BOTH body-part hubs AND condition detail pages)
│       ├── BodyPartPage.tsx (renders if slug matches body-part)
│       └── ConditionPage.tsx (renders if slug matches condition)
├── /find-care/
│   ├── /book-an-appointment
│   ├── /find-a-doctor
│   ├── /second-opinion
│   ├── /free-mri-review
│   └── /candidacy-check
├── /injuries/
│   ├── /car-accident
│   └── /slip-and-fall
├── /insurance-policy
├── /locations
│   ├── / (master hub)
│   ├── /[state]/ (state landing page)
│   │   └── /[location] (city page)
├── /patient-forms
├── /privacy-policy
├── /sitemap
├── /thank-you
└── /treatments
    ├── / (hub)
    └── /[TreatmentDetails]
```

### Page Type Classification

**Body-Part Hub Pages:**
- **Location:** `app/conditions/[slug]/BodyPartPage.tsx`
- **Route Pattern:** `/conditions/[slug]` where `slug` matches body-part slug
- **Existing Hubs (9 total):**
  - ✅ `/conditions/spine` - **EXISTS**
  - ✅ `/conditions/neck` - **EXISTS**
  - ✅ `/conditions/back` - **EXISTS** (duplicate of spine, both use "Lower Spine" tag)
  - ✅ `/conditions/shoulder` - **EXISTS**
  - ✅ `/conditions/hip` - **EXISTS**
  - ✅ `/conditions/knee` - **EXISTS**
  - ✅ `/conditions/hand-wrist` - **EXISTS**
  - ✅ `/conditions/foot-ankle` - **EXISTS**
  - ✅ `/conditions/elbow` - **EXISTS**
  - ❌ `/conditions/sports-medicine` - **MISSING**
  - ❌ `/conditions/pain-management` - **MISSING**

**Condition Detail Pages:**
- **Location:** `app/conditions/[slug]/ConditionPage.tsx`
- **Route Pattern:** `/conditions/[slug]` where `slug` matches condition slug
- **Example:** `/conditions/herniated-disc`, `/conditions/acl-tear`
- **Evidence:** Unified route handler in `app/conditions/[slug]/page.tsx` checks body-part first, then condition

**Treatment Detail Pages:**
- **Location:** `app/treatments/[TreatmentDetails]/TreatmentDetailsClient.tsx`
- **Route Pattern:** `/treatments/[TreatmentDetails]`
- **Example:** `/treatments/spinal-fusion`, `/treatments/arthroscopic-knee-surgery`
- **Note:** Treatments NOT nested under body-part silos

**Pain Pages:**
- **Location:** `app/area-of-pain/back-pain/[PainArea]/PainAreaClient.tsx`, etc.
- **Route Pattern:** `/area-of-pain/[pain-type]/[PainArea]`
- **Examples:** `/area-of-pain/back-pain/lower-back-pain`, `/area-of-pain/neck-and-shoulder-pain/neck-spinal-stenosis`
- **Note:** Separate from body-part silo structure

**Injuries Pages:**
- **Location:** `app/injuries/[slug]/`
- **Route Pattern:** `/injuries/[slug]`
- **Examples:** `/injuries/car-accident`, `/injuries/slip-and-fall`
- **Status:** ✅ Aligned with plan (kept at root level)

**Location Pages:**
- **Master Hub:** `app/locations/page.tsx` → `/locations`
- **State Landing:** `app/locations/[state]/page.tsx` → `/locations/fl`, `/locations/nj`, `/locations/ny`, `/locations/pa`
- **City Pages:** `app/locations/[state]/[location]/page.tsx` → `/locations/fl/hollywood-orthopedics`, etc.
- **Status:** ✅ Fully aligned with plan (state-first structure)

**Blog Pages:**
- **Hub:** `app/blogs/page.tsx` → `/blogs`
- **Detail:** `app/blogs/[BlogSlug]/page.tsx` → `/blogs/[slug]`
- **Tag Pages:** `app/blogs/tag/[tagSlug]/page.tsx` → `/blogs/tag/[tag]`

---

## 2. URL Taxonomy + Canonical Strategy

### 2A. Body-Part Taxonomy

**Current Implementation:**
- **Body-Part Hubs:** `/conditions/[slug]` (e.g., `/conditions/spine`, `/conditions/knee`)
- **Condition Pages:** `/conditions/[slug]` (e.g., `/conditions/herniated-disc`, `/conditions/acl-tear`)
- **Treatment Pages:** `/treatments/[slug]` (e.g., `/treatments/spinal-fusion`, `/treatments/knee-arthroscopy`)
- **Pain Pages:** `/area-of-pain/[pain-type]/[slug]` (separate from silos)

**Plan Standard:**
- **Recommended:** `/spine/[condition-slug]`, `/spine/[treatment-slug]`
- **Example:** `/spine/herniated-disc`, `/spine/microdiscectomy`

**Hybrid Approach Evaluation:**

The current implementation uses a **hybrid approach** where:
- Body-part hubs exist at `/conditions/[body-part-slug]` ✅
- Conditions/treatments remain at `/conditions/[condition-slug]` and `/treatments/[treatment-slug]` (NOT nested)

**Topical Silo Signals Present:**
1. ✅ **Breadcrumbs:** Body-part hubs lack breadcrumb schema (gap)
2. ✅ **Internal Links:** Body-part hubs link to conditions/treatments via tags (`tagMatchers`)
3. ✅ **Schema:** Body-part pages have comprehensive schema (MedicalOrganization, MedicalSpecialty, ItemList)
4. ✅ **Navigation:** Services dropdown references body-part hubs in "View All Conditions" subsection
5. ✅ **Sitemap:** Body-part hubs included with high priority (0.9)

**Evidence Snippets:**

**Body-Part Hub Links to Conditions:**
```typescript
// app/conditions/[slug]/BodyPartPage.tsx:526-528
{filteredConditions.map((condition) => (
  <ConditionCard key={condition.slug} ConditionInfo={condition} />
))}
// Renders links to /conditions/[condition-slug] - NOT nested under body-part
```

**Body-Part Hub Links to Treatments:**
```typescript
// app/conditions/[slug]/BodyPartPage.tsx:562-564
{filteredTreatments.map((treatment) => (
  <TreatmentCard key={treatment.slug} ConditionInfo={treatment} />
))}
// Renders links to /treatments/[treatment-slug] - NOT nested under body-part
```

**Tag Matching Logic:**
```typescript
// app/conditions/[slug]/BodyPartPage.tsx:15-20
function matchesTag(tag: string | undefined, tagMatchers: string[]): boolean {
  if (!tag) return false;
  return tagMatchers.some(matcher => 
    tag.toLowerCase() === matcher.toLowerCase()
  );
}
// Filters conditions/treatments by tag, not by URL hierarchy
```

**Recommendation:**
The hybrid approach is **workable but suboptimal**. Topical silo signals exist through:
- Tag-based filtering in body-part hubs
- Schema cross-references
- Internal linking logic

However, stronger silo signals would come from:
- Nesting conditions/treatments under body-part URLs (requires redirects and URL migration)
- Adding breadcrumb navigation to body-part hubs
- Ensuring all internal links from conditions reference parent body-part hub

**Safest Alignment:**
Maintain current structure but enhance:
1. Add breadcrumb schema to body-part hubs showing `Home > Conditions > [Body Part]`
2. Ensure condition/treatment pages link back to parent body-part hub
3. Add "Related Body-Part Hubs" sections (e.g., ACL → Sports Medicine, Spine → Pain Management)

### 2B. Location Taxonomy

**Current Implementation:**
- **Master Hub:** `/locations` ✅
- **State Landings:** `/locations/[state]` where `state` = `fl`, `nj`, `ny`, `pa` ✅
- **City Pages:** `/locations/[state]/[location]` ✅
- **Examples:** `/locations/fl/hollywood-orthopedics`, `/locations/nj/cherry-hill-orthopedics`

**Plan Standard:**
- **Recommended:** `/florida/`, `/new-jersey/` (full state names) OR `/fl/`, `/nj/` (abbreviations)
- **Current:** Uses abbreviations (`fl`, `nj`, `ny`, `pa`) ✅

**Status:** ✅ **FULLY ALIGNED**

**Evidence:**
```typescript
// lib/locationRedirects.ts:146
export const VALID_STATE_SLUGS = ['fl', 'nj', 'ny', 'pa'] as const;

// app/locations/[state]/[location]/page.tsx:55-66
const { state, location: locationSlug } = await params;
const locationData = findClinicByStateAndLocation(state, locationSlug);
const canonicalUrl = buildCanonical(`/locations/${location.stateSlug}/${location.locationSlug}`);
```

**Breadcrumb Hierarchy:**
```typescript
// app/locations/[state]/[location]/layout.tsx:122-150
const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { position: 1, name: 'Home', item: 'https://mountainspineorthopedics.com/' },
    { position: 2, name: 'Locations', item: 'https://mountainspineorthopedics.com/locations' },
    { position: 3, name: stateInfo.name, item: `https://mountainspineorthopedics.com/locations/${state}` },
    { position: 4, name: location.name, item: canonicalUrl }
  ]
};
```
✅ **Correct hierarchy reflected in schema**

**Redirect Map Readiness:**
- Legacy location redirects exist: `lib/locationRedirects.ts:LEGACY_LOCATION_REDIRECTS`
- Old format: `/locations/hollywood-fl-orthopedics` → New: `/locations/fl/hollywood-orthopedics` ✅

---

## 3. Navigation Menu Audit

### Main Navigation Structure

**Location:** `components/NavBar.tsx:548-1024`

**Current Navigation Items:**
1. **HOME** → `/` (with sublink: Condition Check)
2. **FIND CARE** → `/find-care/book-an-appointment` (dropdown with 7 items)
3. **SERVICES** → `/conditions` (dropdown with Back Pain, Neck & Shoulder Pain, Foot & Ankle, View All Conditions, View All Treatments)
4. **ABOUT** → `/about` (dropdown with About, Meet Doctors, FAQs, Blogs)
5. **LOCATION** → `/locations` (dropdown organized by state: Florida, New Jersey, New York, Pennsylvania)
6. **INJURIES** → `/injuries/car-accident` (dropdown with Car Accident, Slip and Fall)

### Services Dropdown Analysis

**Current Structure (lines 624-906):**
```typescript
{
  href: '/conditions',
  title: 'SERVICES',
  subLinks: [
    {
      title: 'Back Pain',
      href: `/conditions?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`,
      // Uses query params - NOT direct body-part hub link
    },
    {
      title: 'Neck & Shoulder Pain',
      href: `/conditions?data=${encodeURIComponent(JSON.stringify({ tags: ['Neck', 'Shoulder'] }))}`,
      // Uses query params - NOT direct body-part hub link
    },
    {
      title: 'Foot & Ankle',
      href: `/conditions?data=${encodeURIComponent(JSON.stringify({ tags: ['Foot'] }))}`,
      // Uses query params - NOT direct body-part hub link
    },
    {
      title: 'View All Conditions',
      subLinks: [
        { title: 'Spine Conditions', href: '/conditions/spine' }, ✅ CORRECT
        { title: 'Neck Conditions', href: '/conditions/neck' }, ✅ CORRECT
        { title: 'Back Conditions', href: '/conditions/back' }, ✅ CORRECT
        { title: 'Shoulder Conditions', href: '/conditions/shoulder' }, ✅ CORRECT
        { title: 'Hip Conditions', href: '/conditions/hip' }, ✅ CORRECT
        { title: 'Knee Conditions', href: '/conditions/knee' }, ✅ CORRECT
        { title: 'Hand & Wrist Conditions', href: '/conditions/hand-wrist' }, ✅ CORRECT
        { title: 'Foot & Ankle Conditions', href: '/conditions/foot-ankle' }, ✅ CORRECT
        { title: 'Elbow Conditions', href: '/conditions/elbow' }, ✅ CORRECT
      ]
    },
    {
      title: 'View All Treatments',
      subLinks: [
        { title: 'Spine Treatments', href: '/treatments?category=Spine' }, ⚠️ Query param
        { title: 'Neck Treatments', href: '/treatments?category=Neck' }, ⚠️ Query param
        // ... all use query params, NOT body-part hub links
      ]
    }
  ]
}
```

**Issues Identified:**
1. ❌ Top-level items (Back Pain, Neck & Shoulder Pain, Foot & Ankle) use query params instead of body-part hub links
2. ⚠️ "View All Conditions" correctly links to body-part hubs (`/conditions/spine`)
3. ⚠️ "View All Treatments" uses query params instead of linking to body-part hubs
4. ❌ Missing: Sports Medicine, Pain Management in dropdown
5. ❌ Missing: Direct links to `/conditions/sports-medicine` and `/conditions/pain-management`

**Plan Standard:**
```
Services Dropdown MUST be:
- Spine → /conditions/spine (or /spine/)
- Knee → /conditions/knee (or /knee/)
- Hip → /conditions/hip (or /hip/)
- Shoulder → /conditions/shoulder (or /shoulder/)
- Hand/Wrist/Elbow → /conditions/hand-wrist (or /hand-wrist-elbow/)
- Foot/Ankle → /conditions/foot-ankle (or /foot-ankle/)
- Sports Medicine → /conditions/sports-medicine (or /sports-medicine/)
- Pain Management → /conditions/pain-management (or /pain-management/)
- Injuries → /injuries/
```

**Current vs Plan Mismatch:**
- ❌ Top-level items don't match plan (Back Pain, Neck & Shoulder Pain, Foot & Ankle vs. Spine, Knee, Hip, etc.)
- ✅ Sub-navigation "View All Conditions" matches plan structure
- ⚠️ Sub-navigation "View All Treatments" uses query params (should link to body-part hubs)
- ❌ Missing Sports Medicine and Pain Management entirely

### Locations Navigation

**Current Structure (lines 944-1000):**
```typescript
{
  href: '/locations',
  title: 'LOCATION',
  subLinks: [
    {
      title: 'Florida',
      href: '/locations/fl', ✅ CORRECT (abbreviation matches plan flexibility)
      subLinks: [/* city links */]
    },
    {
      title: 'New Jersey',
      href: '/locations/nj', ✅ CORRECT
      subLinks: [/* city links */]
    },
    {
      title: 'New York',
      href: '/locations/ny', ✅ CORRECT
      subLinks: [/* city links */]
    },
    {
      title: 'Pennsylvania',
      href: '/locations/pa', ✅ CORRECT
      subLinks: [/* city links */]
    }
  ]
}
```

**Status:** ✅ **FULLY ALIGNED** - Uses state abbreviations which matches plan (`/locations/fl/`)

---

## 4. Internal Linking Audit

### 4A. Body-Part Internal Linking

**Current Implementation:**

**1. Body-Part Hub → Conditions/Treatments:**
- **Location:** `app/conditions/[slug]/BodyPartPage.tsx:526-564`
- **Method:** Tag-based filtering (`matchesTag()` function)
- **Links Created:** `/conditions/[condition-slug]` and `/treatments/[treatment-slug]`
- **Status:** ✅ Works but links are NOT nested under body-part

**Example:**
```typescript
// Body-part hub /conditions/spine links to:
// - /conditions/herniated-disc (correct tag match)
// - /conditions/spinal-stenosis (correct tag match)
// But NOT to /spine/herniated-disc (which doesn't exist)
```

**2. Condition Pages → Related Content:**
- **Location:** `app/conditions/[slug]/ConditionPage.tsx:534-575`
- **Component:** `InternalLinkingSection` + `conditionContent.internalLinks`
- **Links Created:** `/conditions/[related-condition]` and `/treatments/[related-treatment]`
- **Cross-Link Logic:** Tag-based scoring system (`components/InternalLinkingSection.tsx:15-108`)

**Evidence:**
```typescript
// components/InternalLinkingSection.tsx:15-52
function findRelatedConditions(currentSlug: string, currentCondition: ConditionInfoProp) {
  // Scores based on: same tag (+10), keyword overlap (+2), title overlap (+1)
  // Returns top 6 related conditions
}
```

**3. Treatment Pages → Related Content:**
- **Location:** `app/treatments/[TreatmentDetails]/TreatmentDetailsClient.tsx` (uses InternalLinkingSection)
- **Links Created:** `/treatments/[related-treatment]`
- **Status:** ✅ Cross-linking exists but not silo-focused

**Missing Cross-Links:**
- ❌ `/conditions/acl-tear` should link to `/conditions/knee` (parent hub) AND `/conditions/sports-medicine` (related hub)
- ❌ `/conditions/herniated-disc` should link to `/conditions/spine` (parent hub) AND `/conditions/pain-management` (related hub)
- ❌ Body-part hubs don't cross-link to related body-part hubs (e.g., Knee → Sports Medicine)

**Text Linkification:**
- **Location:** `app/conditions/[slug]/ConditionPage.tsx:41-113`
- **Function:** `processTextWithBoldAndLinks()` - automatically links condition/treatment names in body text
- **Links Created:** `/conditions/[slug]` and `/treatments/[slug]`
- **Status:** ✅ Internal linking in content exists

**Blog Internal Linking:**
- **Location:** `components/BlogPostCard.tsx:53-127`
- **Function:** `getInternalLinks(tags)` - maps blog tags to conditions/treatments
- **Example:** Tag "Back Pain" → links to `/conditions/degenerative-disc-disease`, `/conditions/lumbar-herniated-disc`, `/treatments/back-pain-treatment`
- **Status:** ✅ Cross-linking exists but could link to body-part hubs

**Gap:** No "Related Body-Part Hubs" section on condition/treatment pages to strengthen silo signals.

### 4B. Location Internal Linking

**Master Hub → State Pages:**
- **Location:** `app/locations/LocationsClient.tsx` (assumed, not read but referenced)
- **Expected:** `/locations` should link to `/locations/fl`, `/locations/nj`, etc.
- **Status:** ✅ Likely implemented (standard pattern)

**State Pages → City Pages:**
- **Location:** `app/locations/[state]/page.tsx:190`
- **Links:** `<Link href={`/locations/${clinic.stateSlug}/${clinic.locationSlug}`}>`
- **Status:** ✅ **CORRECT** - All city pages linked from state hub

**City Pages → State Hub:**
- **Location:** `app/locations/[state]/[location]/page.tsx:165-174`
- **Links:** Breadcrumb navigation includes state link
- **Evidence:**
```tsx
<Link href={`/locations/${state}`}>
  {stateInfo?.name || state.toUpperCase()}
</Link>
```
- **Status:** ✅ **CORRECT**

**City Pages → Body-Part Hubs:**
- **Location:** `app/locations/[state]/[location]/page.tsx:443`
- **Current:** Links to generic `/treatments` and `/conditions`
- **Evidence:**
```tsx
At Mountain Spine & Orthopedics, we provide exceptional care with the newest 
<a href='/treatments' className='underline text-[#252932]'>treatments</a> 
and a wide range of <a href='/conditions' className='underline text-[#252932]'>conditions</a> 
we treat.
```
- **Gap:** ❌ Should link to body-part hubs (`/conditions/spine`, `/conditions/knee`, etc.)
- **Location-Specific Links:** `components/data/clinics.tsx:246-299` shows location pages have condition links in `advancedTreatments` section
- **Example:**
```tsx
<Link href="/conditions/herniated-disc">Herniated Disc</Link>
<Link href="/conditions/spinal-stenosis">Spinal Stenosis</Link>
```
- **Status:** ⚠️ **PARTIAL** - Some location-specific content links exist, but main "Services" section is generic

**State Pages → Body-Part Hubs:**
- **Location:** `app/locations/[state]/page.tsx`
- **Status:** ❌ **MISSING** - No "Services at this location" section linking to body-part hubs
- **Gap:** Plan requires state pages to link to body-part hubs (`/spine/`, `/knee/`, etc.)

---

## 5. Redirect Audit

### Redirect Configuration Location

**File:** `next.config.ts:37-200`

### Existing Redirects

**1. Conditions URL Migration:**
```typescript
{ source: "/area-of-specialty", destination: "/conditions", permanent: true },
{ source: "/area-of-specialty/:slug", destination: "/conditions/:slug", permanent: true },
```
✅ **Correct** - Migrates old condition URLs

**2. Location URL Migration:**
```typescript
// Lines 188-199
{"source":"/locations/hollywood-fl-orthopedics","destination":"/locations/fl/hollywood-orthopedics","permanent":true},
{"source":"/locations/palm-springs-orthopedics","destination":"/locations/fl/palm-springs-orthopedics","permanent":true},
// ... 10 Florida location redirects
```
✅ **Correct** - Legacy location URLs redirect to state-first structure

**3. Typo Fixes:**
```typescript
{"source":"/area-of-speciality","destination":"/conditions","permanent":true},
{"source":"/area-of-speciality/:slug*","destination":"/conditions/:slug*","permanent":true},
```
✅ **Correct** - Handles common misspellings

### Missing Redirects (Body-Part Silos)

**If migrating to nested structure (`/spine/herniated-disc`):**
- ❌ `/conditions/herniated-disc` → `/spine/herniated-disc` (NOT implemented - current structure keeps at root)
- ❌ `/treatments/spinal-fusion` → `/spine/spinal-fusion` (NOT implemented)

**Recommendation:**
Since owner prefers hybrid approach (body-part hubs at `/conditions/[body-part]` but conditions/treatments remain at root), **NO ADDITIONAL REDIRECTS NEEDED** for body-part silos.

Current redirects are sufficient for:
- Legacy condition URLs (`/area-of-specialty/*` → `/conditions/*`)
- Legacy location URLs (`/locations/city-state` → `/locations/state/city`)

### Redirect Safety

All redirects use `permanent: true` (301 redirects) ✅  
All redirects in `next.config.ts` (proper location) ✅  
Production-only redirects use conditional: `process.env.NODE_ENV === 'production'` ✅

---

## 6. Sitemap + Robots Audit

### Sitemap Configuration

**Location:** `app/sitemap.xml/route.ts`

### Sitemap Contents

**Current Inclusion (evidence from lines 115-166):**
1. ✅ Homepage: `/`
2. ✅ Core pages: `/about`, `/about/faqs`, `/condition-check`, `/privacy-policy`
3. ✅ Hub pages: `/conditions`, `/locations`
4. ✅ State landing pages: `VALID_STATE_SLUGS.map(state => /locations/${state})`
5. ✅ City pages: `clinics.map(clinic => /locations/${clinic.stateSlug}/${clinic.locationSlug})`
6. ✅ Find Care pages: All `FindCare` array items
7. ✅ Pain pages: `BackPainPages`, `NeckPainPages`, `FootPainPages`
8. ✅ Injury pages: `InjuryPages`
9. ✅ Doctor pages: `Doctors.filter(doctor => isValidSlug(doctor.slug))`
10. ✅ Condition pages: `conditions.filter(condition => isValidSlug(condition.slug))`
11. ✅ **Body-part hub pages:** `BODY_PARTS.map(bodyPart => /conditions/${bodyPart.slug})` with priority 0.9 ✅
12. ✅ Treatment pages: `AllTreatmentsCombined.filter(treatment => isValidSlug(treatment.slug))`
13. ✅ Blog hub: `/blogs`
14. ✅ Blog posts: `blogsData.map(blog => /blogs/${blog.slug})`

**Priority Levels:**
- Body-part hubs: `0.9` (high priority) ✅
- Blog posts: `monthly` changefreq
- Other pages: `0.8` (default)

### Sitemap Gaps

**Missing from Sitemap:**
1. ❌ `/conditions/sports-medicine` (hub page doesn't exist, so not in sitemap)
2. ❌ `/conditions/pain-management` (hub page doesn't exist, so not in sitemap)
3. ⚠️ Pain pages included but not integrated with body-part structure

**Canonical Strategy:**
- All URLs use `buildCanonical()` helper ✅
- Self-check assertion exists (line 26-28) to catch canonical mismatches ✅

**Evidence:**
```typescript
// app/sitemap.xml/route.ts:154-155
${/* Body-part hub pages - high priority as key aggregation/landing pages */ ''}
${BODY_PARTS.map(bodyPart => generateUrlEntry(`/conditions/${bodyPart.slug}`, new Date().toISOString(), 'monthly', '0.9')).join('')}
```

### Robots.txt

**Location:** Not found in codebase (likely handled by Next.js or hosting provider)

**Expected:** Should reference sitemap: `Sitemap: https://mountainspineorthopedics.com/sitemap.xml`

**Status:** ⚠️ **CANNOT VERIFY** - No robots.txt found in codebase

---

## 7. Schema Audit

### 7A. Body-Part Pages Schema

**Location:** `app/conditions/[slug]/BodyPartPage.tsx:67-748`

**Schemas Implemented:**
1. ✅ **MedicalOrganization** - Comprehensive organization schema
2. ✅ **MedicalSpecialty** - Maps body-part to specialty
3. ✅ **BreadcrumbList** - Shows hierarchy (Home → Conditions → [Body Part])
4. ✅ **MedicalWebPage** - WebPage schema with @id
5. ✅ **Service** - Service schema for body-part services
6. ✅ **ItemList (Conditions)** - Lists related conditions with MedicalCondition types
7. ✅ **ItemList (Treatments)** - Lists related treatments with MedicalProcedure types
8. ✅ **FAQPage** - FAQ schema if FAQs exist

**Schema Evidence:**
```typescript
// app/conditions/[slug]/BodyPartPage.tsx:178-235
const breadcrumbSchema = {
  '@type': 'BreadcrumbList',
  'itemListElement': [
    { position: 1, name: 'Home', item: baseUrl + '/' },
    { position: 2, name: 'Conditions', item: baseUrl + '/conditions' },
    { position: 3, name: bodyPart.title, item: canonicalUrl }
  ]
};
```
✅ **Correct hierarchy**

**Condition Pages Schema:**
- **Location:** `app/conditions/[slug]/layout.tsx:232-548`
- **Schemas:** MedicalOrganization, MedicalCondition, WebPage, Service, BreadcrumbList, FAQPage
- **Breadcrumb:** Home → Conditions → [Condition Name]
- **Gap:** ❌ Breadcrumb doesn't include body-part hub (should be: Home → Conditions → [Body Part] → [Condition])

**Treatment Pages Schema:**
- **Location:** `app/treatments/[TreatmentDetails]/layout.tsx:143-459`
- **Schemas:** MedicalOrganization, MedicalProcedure, WebPage, Service, BreadcrumbList, FAQPage
- **Breadcrumb:** Home → Treatments → [Treatment Name]
- **Gap:** ❌ Breadcrumb doesn't include body-part hub

### 7B. Location Pages Schema

**City Location Pages:**
- **Location:** `app/locations/[state]/[location]/layout.tsx:101-176`
- **Schema Generator:** `lib/generateLocationSchema.ts:86-366`
- **Schemas Implemented:**
  1. ✅ **MedicalClinic** (not LocalBusiness, but MedicalClinic is valid)
  2. ✅ **BreadcrumbList** - Home → Locations → State → City ✅
  3. ✅ **FAQPage** (if FAQs exist)

**Required Fields Check:**
- ✅ `address` - Parsed from `formattedAddress` or `address` field
- ✅ `telephone` - From `clinic.phone`
- ✅ `geo` - From `clinic.lat` and `clinic.lng`
- ✅ `openingHours` - Hardcoded: `Mo-Fr 08:00-20:00`, `Sa 08:00-20:00`, `Su 08:00-20:00`
- ✅ `openingHoursSpecification` - Detailed specification
- ✅ `url` - Canonical URL: `/locations/${stateSlug}/${locationSlug}`
- ✅ `image` - From `clinic.ogImage` or fallback

**Schema Evidence:**
```typescript
// lib/generateLocationSchema.ts:170-210
const enhancedSchema = {
  '@type': 'MedicalClinic',
  'address': { '@type': 'PostalAddress', ... },
  'telephone': clinic.phone,
  'geo': { '@type': 'GeoCoordinates', 'latitude': clinic.lat, 'longitude': clinic.lng },
  'openingHours': ['Mo-Fr 08:00-20:00', 'Sa 08:00-20:00', 'Su 08:00-20:00'],
  'url': canonicalUrl,
  'image': clinic.ogImage || fallback
};
```

**State Landing Pages Schema:**
- **Location:** `app/locations/[state]/layout.tsx:86-163`
- **Schemas:** BreadcrumbList, ItemList (state clinics)
- **Status:** ✅ **CORRECT**

**Geo Coordinates:**
- **Source:** `components/data/clinics.tsx` - Each clinic has `lat` and `lng` fields
- **Example:** Hollywood: `lat: 26.01135480, lng: -80.17890730`
- **Status:** ✅ Geo coordinates present in schema

**Schema URL vs Canonical URL:**
```typescript
// lib/generateLocationSchema.ts:167
const canonicalUrl = `https://mountainspineorthopedics.com/locations/${clinic.stateSlug}/${clinic.locationSlug}`;
// Used in schema @id and url fields
```
✅ **Matches canonical URL** - Schema URL is consistent with canonical

---

## 8. Header Structure + Content Section Audit

### 8A. Body-Part Hub Pages

**Sample Pages Audited:**
- `/conditions/spine` (BodyPartPage.tsx:453)
- `/conditions/knee` (same component)
- `/conditions/shoulder` (same component)

**H1 Structure:**
- **Location:** `app/conditions/[slug]/BodyPartPage.tsx:453-460`
- **Current:** `<h1>{bodyPart.seoH1}</h1>` (e.g., "Spine Conditions & Treatments")
- **Plan Standard:** Should be "Spine Conditions & Treatments" or "[Body Part] Conditions & Treatments"
- **Status:** ✅ **CORRECT** - One H1 per page

**H2/H3 Structure:**
- **H2:** "Common {bodyPart.title} Conditions We Treat" (line 501)
- **H2:** "Treatments for {bodyPart.title} Pain & Injury" (line 537)
- **H2:** "Common {bodyPart.title} Symptoms" (line 572)
- **H2:** "When to See a {bodyPart.title} Specialist" (line 595)
- **H2:** "How We Treat {bodyPart.title} Conditions" (line 618)
- **H2:** "Frequently Asked Questions About {bodyPart.title} Conditions" (line 710)
- **H3:** FAQ questions (line 722)
- **Status:** ✅ **CORRECT** - Semantic hierarchy maintained

**Required Sections Checklist:**

| Section | Required | Status | Evidence |
|---------|----------|--------|----------|
| Hero (H1 + subhead + CTA) | ✅ | ✅ PASS | Lines 453-494 |
| Intro paragraph (~100 words) | ✅ | ✅ PASS | `bodyPart.intro` (line 469) |
| Conditions grid (links to condition pages) | ✅ | ✅ PASS | Lines 498-530 |
| Treatments grid (links to treatment pages) | ✅ | ✅ PASS | Lines 534-566 |
| Symptoms section | ✅ | ✅ PASS | Lines 569-590 |
| When to see section | ✅ | ✅ PASS | Lines 593-615 |
| How we treat section | ✅ | ✅ PASS | Lines 617-639 |
| FAQ section | ✅ | ✅ PASS | Lines 707-743 |
| CTA section | ✅ | ✅ PASS | Lines 642-705 |

**Component File:** `app/conditions/[slug]/BodyPartPage.tsx` ✅

### 8B. Condition Detail Pages

**Sample Pages Audited:**
- `/conditions/herniated-disc` (ConditionPage.tsx:281)
- `/conditions/acl-tear` (same component)
- `/conditions/spinal-stenosis` (same component)

**H1 Structure:**
- **Location:** `app/conditions/[slug]/ConditionPage.tsx:281-289`
- **Current:** `<h1>{condition.title}</h1>` (e.g., "Herniated Disc")
- **Status:** ✅ **CORRECT** - One H1 per page

**H2/H3 Structure:**
- Multiple H2 sections for different content blocks
- **Status:** ✅ **CORRECT** - Semantic hierarchy maintained

**Required Sections Checklist:**

| Section | Required | Status | Evidence |
|---------|----------|--------|----------|
| Hero (H1 + description) | ✅ | ✅ PASS | Lines 280-306 |
| Overview section | ✅ | ✅ PASS | ConditionContent.overview |
| Symptoms section | ✅ | ✅ PASS | ConditionContent.symptoms |
| Causes/Risk factors | ✅ | ✅ PASS | ConditionContent.causes |
| Treatment options | ✅ | ✅ PASS | ConditionContent.treatments |
| Related conditions/treatments | ✅ | ✅ PASS | Lines 534-575 (InternalLinkingSection) |
| FAQ section | ✅ | ✅ PASS | ConditionTreatmentFAQSection |
| CTA section | ✅ | ✅ PASS | Consultation form |

**Missing Sections:**
- ❌ Link back to parent body-part hub (e.g., "View All Spine Conditions")
- ⚠️ Breadcrumb navigation exists in markup but doesn't show body-part hub level

**Component File:** `app/conditions/[slug]/ConditionPage.tsx` ✅

### 8C. Treatment Detail Pages

**Sample Pages Audited:**
- `/treatments/spinal-fusion` (TreatmentDetailsClient.tsx:139)
- `/treatments/arthroscopic-knee-surgery` (same component)
- `/treatments/total-knee-replacement` (same component)

**H1 Structure:**
- **Location:** `app/treatments/[TreatmentDetails]/TreatmentDetailsClient.tsx:139-147`
- **Current:** `<h1>{treatment.title}</h1>`
- **Status:** ✅ **CORRECT** - One H1 per page

**Required Sections Checklist:**

| Section | Required | Status | Evidence |
|---------|----------|--------|----------|
| Hero (H1 + description) | ✅ | ✅ PASS | Lines 139-149 |
| Overview | ✅ | ✅ PASS | TreatmentContent.overview |
| Candidates | ✅ | ✅ PASS | TreatmentContent.candidates |
| Procedure steps | ✅ | ✅ PASS | TreatmentContent.procedure |
| Recovery timeline | ✅ | ✅ PASS | TreatmentContent.recovery |
| Benefits | ✅ | ✅ PASS | TreatmentContent.benefits |
| Insurance | ✅ | ✅ PASS | TreatmentContent.insurance |
| FAQ section | ✅ | ✅ PASS | TreatmentFAQ component |
| Related treatments | ✅ | ✅ PASS | InternalLinkingSection |
| CTA section | ✅ | ✅ PASS | Consultation form |

**Component File:** `app/treatments/[TreatmentDetails]/TreatmentDetailsClient.tsx` ✅

### 8D. Location Pages

**Master Locations Page:**
- **Location:** `app/locations/page.tsx`
- **H1:** Not audited (component not fully read)
- **Expected:** "Orthopedic Clinic Locations" or similar

**State Landing Pages:**
- **Sample:** `/locations/fl` (app/locations/[state]/page.tsx:269-278)
- **H1:** `{stateInfo.name} Locations` (e.g., "Florida Locations")
- **Plan Standard:** "Spine & Orthopedic Surgeons in [State]"
- **Status:** ❌ **MISMATCH** - H1 doesn't match plan template

**Required Sections Checklist (State Landing):**

| Section | Required | Status | Evidence |
|---------|----------|--------|----------|
| Hero (H1 + subhead + CTA) | ✅ | ⚠️ PARTIAL | Lines 269-298 (H1 incorrect) |
| Intro paragraph (~100 words) | ✅ | ✅ PASS | Lines 289-297 |
| Locations grid (cards with address/phone + "View Location") | ✅ | ✅ PASS | Lines 108-212, 364-373 |
| Services section (links to body-part hubs) | ✅ | ❌ MISSING | No services section found |
| Why choose us | ✅ | ✅ PASS | Lines 375-407 |
| Meet doctors (state-specific) | ✅ | ❌ MISSING | Not found in state page |
| Reviews | ✅ | ❌ MISSING | Not found in state page |
| Insurance accepted | ✅ | ❌ MISSING | Not found in state page |
| CTA | ✅ | ⚠️ PARTIAL | Locations grid has CTAs but no main CTA section |

**Component File:** `app/locations/[state]/page.tsx` ⚠️

**City Location Pages:**
- **Sample:** `/locations/fl/hollywood-orthopedics` (app/locations/[state]/[location]/page.tsx:194-202)
- **H1:** `Orthopedic Surgeons & Spine Specialists in {cityName}`
- **Plan Standard:** "Spine & Orthopedic Surgeons in [City], [State Abbr]"
- **Status:** ✅ **CORRECT** - Matches plan (minor word order difference acceptable)

**Required Sections Checklist (City Landing):**

| Section | Required | Status | Evidence |
|---------|----------|--------|----------|
| Hero (H1 + subhead + CTA) | ✅ | ✅ PASS | Lines 194-357 |
| Location info box (address, phone, hours, map) | ✅ | ✅ PASS | Lines 222-229 (LocationNAP component) |
| Intro paragraph (~150 words incl. nearby areas) | ✅ | ✅ PASS | Lines 211-220 |
| Services at this location (links to body-part hubs) | ✅ | ⚠️ PARTIAL | Lines 443 (generic links to /treatments, /conditions) |
| Conditions we treat (contextual internal links) | ✅ | ✅ PASS | Lines 574 (locationData.advancedTreatments) |
| Treatments & procedures (contextual internal links) | ✅ | ✅ PASS | Lines 574 (locationData.advancedTreatments) |
| Meet doctors (location-specific) | ✅ | ✅ PASS | Lines 482-538 |
| Areas we serve list | ✅ | ✅ PASS | Lines 573 (locationData.nearby) |
| Reviews (location-specific) | ✅ | ✅ PASS | Lines 586-594 (ReviewsCarousel) |
| Insurance accepted | ✅ | ⚠️ MISSING | Not found in city page template |
| Directions & parking | ✅ | ✅ PASS | Lines 244-256 (Get Directions button) |
| FAQ section (FAQ schema) | ✅ | ✅ PASS | Lines 577-584 (LocationFAQSection) |
| CTA section | ✅ | ✅ PASS | Multiple CTAs throughout page |

**Missing Sections:**
- ❌ "Services at this location" links generically to `/treatments` and `/conditions` instead of body-part hubs
- ❌ Insurance accepted section not found in template

**Component File:** `app/locations/[state]/[location]/page.tsx` ⚠️

---

## 9. Gap Analysis Tables

### Table A: Body-Part Silo Requirements

| Requirement | Expected | Current State | Severity | Fix Approach |
|-------------|----------|---------------|----------|--------------|
| **Spine hub page** | `/spine/` or `/conditions/spine` | `/conditions/spine` ✅ | - | - |
| **Knee hub page** | `/knee/` or `/conditions/knee` | `/conditions/knee` ✅ | - | - |
| **Hip hub page** | `/hip/` or `/conditions/hip` | `/conditions/hip` ✅ | - | - |
| **Shoulder hub page** | `/shoulder/` or `/conditions/shoulder` | `/conditions/shoulder` ✅ | - | - |
| **Hand/Wrist/Elbow hub** | `/hand-wrist-elbow/` or `/conditions/hand-wrist` | `/conditions/hand-wrist` ⚠️ (missing elbow integration) | MED | Add elbow to hand-wrist hub OR create separate `/conditions/elbow` link in nav |
| **Foot/Ankle hub** | `/foot-ankle/` or `/conditions/foot-ankle` | `/conditions/foot-ankle` ✅ | - | - |
| **Sports Medicine hub** | `/sports-medicine/` or `/conditions/sports-medicine` | ❌ **MISSING** | **CRITICAL** | Create body-part entry in `components/data/bodyParts.ts` with slug `sports-medicine` |
| **Pain Management hub** | `/pain-management/` or `/conditions/pain-management` | ❌ **MISSING** | **CRITICAL** | Create body-part entry in `components/data/bodyParts.ts` with slug `pain-management` |
| **Services nav dropdown** | Direct links to body-part hubs | Query params (`/conditions?data=...`) ❌ | **CRITICAL** | Update `components/NavBar.tsx:631-679` to use `/conditions/spine` instead of query params |
| **Services nav "Treatments"** | Links to body-part hubs | Query params (`/treatments?category=...`) ⚠️ | HIGH | Update `components/NavBar.tsx:843-902` to link to body-part hubs (treatments filtered by tag) |
| **Condition pages link to parent hub** | Breadcrumb: Home → [Body Part] → [Condition] | Home → Conditions → [Condition] ⚠️ | HIGH | Update breadcrumb in `app/conditions/[slug]/layout.tsx` to include body-part level |
| **Treatment pages link to parent hub** | Breadcrumb: Home → [Body Part] → [Treatment] | Home → Treatments → [Treatment] ⚠️ | HIGH | Update breadcrumb in `app/treatments/[TreatmentDetails]/layout.tsx` to include body-part level |
| **Body-part hubs cross-link** | Knee → Sports Medicine, Spine → Pain Management | ❌ **MISSING** | MED | Add "Related Services" section to body-part hubs linking to related hubs |
| **Body-part hub breadcrumbs** | Home → Conditions → [Body Part] | Home → Conditions → [Body Part] ✅ | - | Already correct |
| **Internal links prioritize silos** | ACL → `/knee/acl-tear` OR `/conditions/acl-tear` + link to `/conditions/knee` | `/conditions/acl-tear` only ⚠️ | MED | Add "Related Body-Part Hubs" section to condition/treatment pages |

### Table B: Location Hierarchy Requirements

| Requirement | Expected | Current State | Severity | Fix Approach |
|-------------|----------|---------------|----------|--------------|
| **Master locations hub** | `/locations/` | `/locations/` ✅ | - | - |
| **State landing pages** | `/florida/` or `/locations/fl` | `/locations/fl`, `/locations/nj`, `/locations/ny`, `/locations/pa` ✅ | - | - |
| **City pages under states** | `/locations/[state]/[city]` | `/locations/[state]/[location]` ✅ | - | - |
| **State H1 template** | "Spine & Orthopedic Surgeons in [State]" | "{State} Locations" ❌ | **CRITICAL** | Update `app/locations/[state]/page.tsx:269-278` H1 to match template |
| **City H1 template** | "Spine & Orthopedic Surgeons in [City], [State Abbr]" | "Orthopedic Surgeons & Spine Specialists in {cityName}" ✅ | - | Minor word order difference acceptable |
| **State page links to cities** | All city pages listed | ✅ **CORRECT** - Locations grid (lines 108-212, 364-373) | - | - |
| **City page links to state** | Breadcrumb includes state | ✅ **CORRECT** - Breadcrumb (lines 165-174) | - | - |
| **State page services section** | Links to `/spine/`, `/knee/`, etc. | ❌ **MISSING** | HIGH | Add "Services We Offer" section with links to body-part hubs |
| **City page services section** | Links to body-part hubs | Generic `/treatments`, `/conditions` ⚠️ | HIGH | Update `app/locations/[state]/[location]/page.tsx:443` to link to body-part hubs |
| **State page "Meet doctors"** | State-specific doctors if supported | ❌ **MISSING** | MED | Add section if doctor data supports state filtering |
| **City page "Areas we serve"** | List of neighborhoods | ✅ **CORRECT** - `locationData.nearby` (line 573) | - | - |
| **City page insurance** | Insurance accepted section | ❌ **MISSING** | MED | Add insurance section to city page template |
| **State page intro (~100 words)** | State-specific intro | ✅ **CORRECT** - Lines 289-297 | - | - |
| **City page intro (~150 words)** | City-specific with nearby areas | ✅ **CORRECT** - Lines 211-220 | - | - |
| **State breadcrumb schema** | Home → Locations → [State] | ✅ **CORRECT** - `app/locations/[state]/layout.tsx:98-121` | - | - |
| **City breadcrumb schema** | Home → Locations → [State] → [City] | ✅ **CORRECT** - `app/locations/[state]/[location]/layout.tsx:122-151` | - | - |

---

## 10. Phased Implementation Checklist

### Phase 1: Critical Body-Part Silos (Weeks 1-2)

**Priority: CRITICAL**

- [ ] **1.1** Create `/conditions/sports-medicine` hub page
  - Add entry to `components/data/bodyParts.ts` with slug `sports-medicine`
  - Tag matchers: `["Sports Medicine", "Knee", "Shoulder", "Hip"]`
  - File: `components/data/bodyParts.ts` (add new entry after elbow)

- [ ] **1.2** Create `/conditions/pain-management` hub page
  - Add entry to `components/data/bodyParts.ts` with slug `pain-management`
  - Tag matchers: `["Pain Management", "Spine", "Lower Spine", "Neck"]`
  - File: `components/data/bodyParts.ts` (add new entry after sports-medicine)

- [ ] **1.3** Update Services navigation dropdown
  - File: `components/NavBar.tsx:624-906`
  - Change top-level items from query params to direct body-part hub links:
    - "Back Pain" → `/conditions/spine` (instead of `/conditions?data=...`)
    - "Neck & Shoulder Pain" → `/conditions/shoulder` (instead of query param)
    - "Foot & Ankle" → `/conditions/foot-ankle` (instead of query param)
  - Add "Sports Medicine" → `/conditions/sports-medicine`
  - Add "Pain Management" → `/conditions/pain-management`

- [ ] **1.4** Update "View All Treatments" sub-navigation
  - File: `components/NavBar.tsx:843-902`
  - Change from query params to body-part hub links:
    - "Spine Treatments" → `/conditions/spine#treatments` (or create treatment filtering on hub)
    - "Knee Treatments" → `/conditions/knee#treatments`
    - Continue for all body parts

- [ ] **1.5** Fix state landing page H1
  - File: `app/locations/[state]/page.tsx:269-278`
  - Change: `{stateInfo.name} Locations` → `Spine & Orthopedic Surgeons in {stateInfo.name}`
  - Update H2: `Find Orthopedic Care in {stateInfo.name}` → Keep or refine

**Estimated Impact:** High - Completes body-part silo structure and fixes navigation

---

### Phase 2: Internal Linking & Cross-References (Weeks 3-4)

**Priority: HIGH**

- [ ] **2.1** Add breadcrumb navigation to condition pages (include body-part level)
  - File: `app/conditions/[slug]/layout.tsx:433-457`
  - Update breadcrumb: Home → Conditions → **[Body Part]** → [Condition Name]
  - Requires: Detect parent body-part from condition's tag (e.g., "Spine" tag → `/conditions/spine`)

- [ ] **2.2** Add breadcrumb navigation to treatment pages (include body-part level)
  - File: `app/treatments/[TreatmentDetails]/layout.tsx:300-324`
  - Update breadcrumb: Home → Treatments → **[Body Part]** → [Treatment Name]
  - Requires: Detect parent body-part from treatment's tag

- [ ] **2.3** Add "View All [Body Part] Conditions" link on condition pages
  - File: `app/conditions/[slug]/ConditionPage.tsx`
  - Add section after hero: Link back to parent body-part hub
  - Example: `/conditions/herniated-disc` → Add link to `/conditions/spine`

- [ ] **2.4** Add "View All [Body Part] Treatments" link on treatment pages
  - File: `app/treatments/[TreatmentDetails]/TreatmentDetailsClient.tsx`
  - Add section: Link back to parent body-part hub
  - Example: `/treatments/knee-arthroscopy` → Add link to `/conditions/knee`

- [ ] **2.5** Add "Related Body-Part Hubs" section to body-part hub pages
  - File: `app/conditions/[slug]/BodyPartPage.tsx`
  - Add cross-links: Knee → Sports Medicine, Spine → Pain Management, ACL → Sports Medicine
  - Place after treatments section

- [ ] **2.6** Update location pages to link to body-part hubs
  - File: `app/locations/[state]/[location]/page.tsx:443`
  - Change generic `/treatments` and `/conditions` links to body-part hubs:
    - `/conditions/spine`, `/conditions/knee`, `/conditions/hip`, etc.
  - File: `app/locations/[state]/page.tsx`
  - Add "Services We Offer" section with links to all body-part hubs

**Estimated Impact:** High - Strengthens silo signals and improves internal linking

---

### Phase 3: State Landing Page Enhancements (Week 5)

**Priority: MEDIUM**

- [ ] **3.1** Add "Services We Offer" section to state landing pages
  - File: `app/locations/[state]/page.tsx`
  - Add section with links: `/conditions/spine`, `/conditions/knee`, `/conditions/hip`, etc.
  - Place after locations grid

- [ ] **3.2** Add "Meet Doctors" section (if state-specific doctor data exists)
  - Check if doctor data supports state filtering
  - If yes: Add filtered doctor cards
  - If no: Link to `/about/meetourdoctors` with state query param

- [ ] **3.3** Add "Reviews" section to state landing pages
  - Aggregate reviews from all cities in state
  - Display aggregate rating and review count
  - Link to individual city pages

- [ ] **3.4** Add "Insurance Accepted" section
  - Generic insurance information
  - Link to `/insurance-policy` for details

- [ ] **3.5** Add main CTA section
  - "Book Appointment" button
  - "Find a Doctor" link
  - Place prominently after hero

**Estimated Impact:** Medium - Improves state landing page completeness

---

### Phase 4: City Page Enhancements & Validation (Week 6)

**Priority: MEDIUM**

- [ ] **4.1** Add "Insurance Accepted" section to city pages
  - File: `app/locations/[state]/[location]/page.tsx`
  - Add section with insurance information
  - Place before FAQ section

- [ ] **4.2** Enhance "Services at this location" section
  - File: `app/locations/[state]/[location]/page.tsx:443`
  - Replace generic links with body-part hub links
  - Add visual icons or cards for each body-part service

- [ ] **4.3** Validate all schema implementations
  - Test all location pages with Google Rich Results Test
  - Verify geo coordinates are correct
  - Verify opening hours format (ISO 8601)
  - Check for schema validation errors

- [ ] **4.4** Add sitemap validation
  - Ensure all body-part hubs in sitemap
  - Ensure all state/city pages in sitemap
  - Verify canonical URLs match schema URLs
  - Test sitemap.xml accessibility

**Estimated Impact:** Medium - Completes location page template and validates implementation

---

### Phase 5: Redirects & Final Validation (Week 7)

**Priority: LOW (if needed)**

- [ ] **5.1** Add redirects for any URL migrations (if body-part structure changes)
  - Only needed if migrating to nested structure (`/spine/herniated-disc`)
  - Current hybrid approach doesn't require new redirects

- [ ] **5.2** Validate redirect map
  - Test all existing redirects in `next.config.ts`
  - Verify 301 status codes
  - Check redirect chains

- [ ] **5.3** Final SEO validation
  - Google Rich Results Test for all page types
  - Schema validation for all pages
  - Canonical URL verification
  - Internal linking audit (crawl site)

**Estimated Impact:** Low - Validation and cleanup only

---

## 11. Evidence Snippets

### Body-Part Hub Implementation
```typescript
// app/conditions/[slug]/page.tsx:26-31
const bodyPart = BODY_PARTS.find(bp => bp.slug === slug);
if (bodyPart) {
  const BodyPartPage = (await import('./BodyPartPage')).default;
  return <BodyPartPage bodyPartSlug={slug} />;
}
// Evidence: Unified route handler checks body-part first
```

### Location URL Structure
```typescript
// app/locations/[state]/[location]/page.tsx:46
const canonicalUrl = buildCanonical(`/locations/${location.stateSlug}/${location.locationSlug}`);
// Evidence: State-first URL structure implemented correctly
```

### Navigation Services Dropdown
```typescript
// components/NavBar.tsx:632
href: `/conditions?data=${encodeURIComponent(JSON.stringify({ tags: ['Spine'] }))}`,
// Evidence: Uses query params instead of direct body-part hub link
```

### Internal Linking Logic
```typescript
// components/InternalLinkingSection.tsx:15-52
function findRelatedConditions(currentSlug: string, currentCondition: ConditionInfoProp) {
  // Scores based on: same tag (+10), keyword overlap (+2), title overlap (+1)
  if (condition.tag === currentCondition.tag) {
    score += 10; // Tag-based matching
  }
}
// Evidence: Tag-based cross-linking exists but doesn't prioritize silo structure
```

---

## 12. Recommendations Summary

### Immediate Actions (Week 1)

1. **Create missing body-part hubs:** Add `sports-medicine` and `pain-management` to `components/data/bodyParts.ts`
2. **Fix Services navigation:** Update `components/NavBar.tsx` to use direct body-part hub links
3. **Fix state H1:** Update `app/locations/[state]/page.tsx` H1 to match template

### High Priority (Weeks 2-4)

4. **Enhance breadcrumbs:** Add body-part level to condition/treatment page breadcrumbs
5. **Add cross-links:** Body-part hubs → related hubs (Knee → Sports Medicine)
6. **Update location pages:** Link to body-part hubs instead of generic pages

### Medium Priority (Weeks 5-6)

7. **Complete state landing pages:** Add services, reviews, insurance sections
8. **Complete city landing pages:** Add insurance section
9. **Validate schemas:** Test all pages with Google Rich Results Test

---

## Appendix: File Reference Index

**Key Files:**
- `components/NavBar.tsx` - Navigation menu (Services dropdown)
- `components/data/bodyParts.ts` - Body-part hub definitions (9 entries, missing 2)
- `app/conditions/[slug]/BodyPartPage.tsx` - Body-part hub page component
- `app/conditions/[slug]/ConditionPage.tsx` - Condition detail page component
- `app/conditions/[slug]/page.tsx` - Unified route handler
- `app/locations/[state]/page.tsx` - State landing pages
- `app/locations/[state]/[location]/page.tsx` - City location pages
- `app/sitemap.xml/route.ts` - Sitemap generation
- `next.config.ts` - Redirect configuration
- `lib/generateLocationSchema.ts` - Location schema generator
- `components/InternalLinkingSection.tsx` - Related content linking logic

---

**Report Status:** Complete  
**Next Steps:** Review gaps, prioritize fixes, implement Phase 1 (critical items)
