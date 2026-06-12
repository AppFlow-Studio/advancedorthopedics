# MSO SEO Pre-Audit — 2026-03-31

## AUDIT TASK 1 — Title Tags & Meta Descriptions

| location | title_text | title_chars | title_ok | desc_chars | desc_ok |
|---|---|---|---|---|---|
| Hollywood FL | Top Orthopedic Surgeons & Spine Specialists in Hollywood \| Mountain Spine & Orthopedics | 87 | ❌ | ~272 | ❌ |
| Altamonte Springs-Casselberry | Top Orthopedic Surgeons & Spine Specialists in Altamonte Springs - Casselberry \| Mountain Spine & Orthopedics | 108 | ❌ | ~273 | ❌ |
| Orlando | Top Orthopedic Surgeons & Spine Specialists in Orlando \| Mountain Spine & Orthopedics | 87 | ❌ | ~273 | ❌ |
| Fort Pierce | Top Orthopedic Surgeons & Spine Specialists in Fort Pierce \| Mountain Spine & Orthopedics | 91 | ❌ | ~273 | ❌ |
| Palm Beach Gardens | Top Orthopedic Surgeons & Spine Specialists in Palm Beach Gardens \| Mountain Spine & Orthopedics | 97 | ❌ | ~273 | ❌ |
| South Miami | Top Orthopedic Surgeons & Spine Specialists in South Miami \| Mountain Spine & Orthopedics | 91 | ❌ | ~272 | ❌ |
| Boca Raton | Top Orthopedic Surgeons & Spine Specialists in Boca Raton \| Mountain Spine & Orthopedics | 90 | ❌ | ~273 | ❌ |
| Altamonte Springs | Top Orthopedic Surgeons & Spine Specialists in Altamonte Springs \| Mountain Spine & Orthopedics | 96 | ❌ | ~273 | ❌ |
| Davenport | Top Orthopedic Surgeons & Spine Specialists in Davenport \| Mountain Spine & Orthopedics | 89 | ❌ | ~273 | ❌ |
| Jacksonville | Top Orthopedic Surgeons & Spine Specialists in Jacksonville \| Mountain Spine & Orthopedics | 91 | ❌ | ~273 | ❌ |
| Bridgewater NJ | Top Orthopedic Surgeons & Spine Specialists in Bridgewater, NJ \| Mountain Spine & Orthopedics | 95 | ❌ | ~273 | ❌ |
| Cherry Hill NJ | Top Orthopedic Surgeons & Spine Specialists in Cherry Hill, NJ \| Mountain Spine & Orthopedics | 95 | ❌ | ~273 | ❌ |
| Edison NJ | Top Orthopedic Surgeons & Spine Specialists in Edison, NJ \| Mountain Spine & Orthopedics | 91 | ❌ | ~273 | ❌ |
| Freehold NJ | Top Orthopedic Surgeons & Spine Specialists in Freehold, NJ \| Mountain Spine & Orthopedics | 93 | ❌ | ~273 | ❌ |
| Paramus NJ | Top Orthopedic Surgeons & Spine Specialists in Paramus, NJ \| Mountain Spine & Orthopedics | 92 | ❌ | ~273 | ❌ |
| West Orange NJ | Ambulatory Surgery Center in West Orange, NJ \| Mountain Spine & Orthopedics | 75 | ❌ | ~238 | ❌ |
| New York City | Top Orthopedic Surgeons & Spine Specialists in NYC \| Mountain Spine & Orthopedics | 83 | ❌ | ~273 | ❌ |
| Allentown PA | Top Orthopedic Surgeons & Spine Specialists in Allentown, PA \| Mountain Spine & Orthopedics | 94 | ❌ | 186 | ❌ |
| Philadelphia Center City | Top Orthopedic Surgeons & Spine Specialists in Philadelphia (Center City) \| Mountain Spine & Orthopedics | 102 | ❌ | 178 | ❌ |
| Philadelphia Port Richmond | Top Orthopedic Surgeons & Spine Specialists in North Philadelphia (Port Richmond) \| Mountain Spine & Orthopedics | 110 | ❌ | 172 | ❌ |
| Philadelphia Germantown | Top Orthopedic Surgeons & Spine Specialists in Germantown Philadelphia \| Mountain Spine & Orthopedics | 101 | ❌ | 164 | ✅ |
| Voorhees NJ | Top Orthopedic Surgeons & Spine Specialists in Voorhees, NJ | 61 | ✅ | 184 | ❌ |
| Princeton NJ | Top Orthopedic Surgeons & Spine Specialists in Princeton, NJ | 62 | ✅ | 188 | ❌ |

**Summary: 21/23 titles over 65 chars. 22/23 descriptions over 170 chars.**

Fallback standardizedTitle in layout.tsx:
`Top Orthopedic Surgeons & Spine Specialists in ${cityName} | Mountain Spine & Orthopedics`
This is ~93 chars for a 5-char city — always over 65. Only triggered if metaTitle field is empty (currently all locations have metaTitle set).

---

## AUDIT TASK 2 — Schema Address Bug

**Root cause:** `parseAddress()` in `lib/generateLocationSchema.ts` (lines 39–48) handles 3-part addresses but NOT 4-part addresses.
When split by `", "`, a 4-part address ("Street, Suite X, City, ST ZIP") assigns `addressLocality = parts[1]` (the suite) instead of `parts[2]` (the city). The `if (addressParts.length === 3)` branch to extract state/zip is never reached for 4-part addresses, leaving `postalCode = ""`.

| location | raw_address | current_addressLocality | current_postalCode | bug_detected |
|---|---|---|---|---|
| South Miami | 7000 SW 62nd Ave, Suite 330, Miami, FL 33143 | Suite 330 | "" | ❌ BUG |
| Altamonte Springs | 499 E Central Pkwy, Suite 130, Altamonte Springs, FL 32701 | Suite 130 | "" | ❌ BUG |
| Jacksonville | 1205 Monument Rd, Suite 202, Jacksonville, FL 32225 | Suite 202 | "" | ❌ BUG |
| Cherry Hill NJ | 100 Springdale Rd, Suite B5, Cherry Hill, NJ 08003 | Suite B5 | "" | ❌ BUG |
| Freehold NJ | 77 Schanck Rd, Suite B17, Freehold, NJ 07728 | Suite B17 | "" | ❌ BUG |
| Paramus NJ | 140 NJ-17, Suite 101B, Paramus, NJ 07652 | Suite 101B | "" | ❌ BUG |
| West Orange NJ | 375 Mount Pleasant Ave, Unit 2E, West Orange, NJ 07052 | Unit 2E | "" | ❌ BUG |
| New York City | 535 5th Ave, Suite 1012, New York, NY 10017 | Suite 1012 | "" | ❌ BUG |
| Princeton NJ | 601 Ewing Street, Suite A8, Princeton, NJ 08540 | Suite A8 | "" | ❌ BUG |
| Hollywood FL | 3500 Tyler St, Hollywood, FL 33021 | Hollywood | 33021 | ✅ OK |
| Orlando | 6150 Metrowest Blvd STE 102, Orlando, FL 32835 | Orlando | 32835 | ✅ OK |
| Fort Pierce | 2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950 | Fort Pierce | 34950 | ✅ OK |
| Palm Beach Gardens | 3355 Burns Rd STE 304, Palm Beach Gardens, FL 33410 | Palm Beach Gardens | 33410 | ✅ OK |
| Boca Raton | 1905 Clint Moore Rd #300, Boca Raton, FL 33496 | Boca Raton | 33496 | ✅ OK |
| Bridgewater NJ | 1200 US-22 #14, Bridgewater, NJ 08807 | Bridgewater | 08807 | ✅ OK |
| Edison NJ | 25 Main St suite 12, Edison, NJ 08837 | Edison | 08837 | ✅ OK |
| Davenport FL | 2400 North Blvd W Suite C, Davenport, FL 33837 | Davenport | 33837 | ✅ OK |
| Allentown PA | 451 W. Linden St., Allentown, PA 18102 | Allentown | 18102 | ✅ OK |
| Philadelphia Walnut | 1601 Walnut St. Suite 514, Philadelphia, PA 19102 | Philadelphia | 19102 | ✅ OK |
| Philadelphia Tioga | 2401 E. Tioga St., Philadelphia, PA 19134 | Philadelphia | 19134 | ✅ OK |
| Philadelphia Germantown | 5245 Germantown Ave. Suite A, Philadelphia, PA 19144 | Philadelphia | 19144 | ✅ OK |
| Voorhees NJ | 701 White Horse Rd Unit 5, Voorhees Township, NJ 08043 | Voorhees Township | 08043 | ✅ OK |

**9 locations have address schema bug (suite/unit in addressLocality, empty postalCode).**

---

## AUDIT TASK 3 — areaServed Noise Entries

In `generateLocationSchema.ts` lines 216–240, every location appends two entries:
1. `"${addressLocality}, ${addressRegion}"` — for buggy locations this becomes e.g. "Suite 330, FL"
2. `"${addressRegion}"` alone — e.g. "NJ", "FL" — bare 2-letter state abbreviation

| location | noise_entries_flagged |
|---|---|
| South Miami | "Suite 330, FL", "FL" |
| Altamonte Springs | "Suite 130, FL", "FL" |
| Jacksonville | "Suite 202, FL", "FL" |
| Cherry Hill NJ | "Suite B5, NJ", "NJ" |
| Freehold NJ | "Suite B17, NJ", "NJ" |
| Paramus NJ | "Suite 101B, NJ", "NJ" |
| West Orange NJ | "Unit 2E, NJ", "NJ" |
| New York City | "Suite 1012, NY", "NY" |
| Princeton NJ | "Suite A8, NJ", "NJ" |
| All other locations | One noise entry each: bare state abbreviation ("FL", "NJ", "NY", "PA") |

---

## AUDIT TASK 4 — Duplicate H1 Tags

**File:** `app/locations/[state]/[location]/page.tsx`

| h1 | line | className | text |
|---|---|---|---|
| #1 | 117 | "sr-only" | Orthopedic Surgeons & Spine Specialists in {city} |
| #2 | 200–208 | (visible, inside SlidingDiv) | Orthopedic Surgeons & Spine Specialists in {city} |

Both H1s have **identical text**. The sr-only H1 is redundant because Next.js App Router server-renders the children of SlidingDiv (a client component) during SSR. The visible H1 inside SlidingDiv IS present in the initial HTML response.

---

## AUDIT TASK 5 — Footer `<main>` Tag

**File:** `components/Footer.tsx`, **line 29**

```tsx
<main className='bg-black w-full flex-col flex py-[60px]'>
```

Closing tag at **line 237**: `</main>`

This is invalid HTML. A page should have only one `<main>` element (already used in the location page body). The footer's outermost container must be `<footer>`.

---

## AUDIT TASK 6 — Deprecated `layout='fill'` Image Prop

**In scope (location page):**
- `app/locations/[state]/[location]/page.tsx` line 130: `layout='fill'` on hero Image

**Also found sitewide (25 additional files — not in scope for this session):**
- `app/landing-page/page.tsx:53`
- `components/CandidacyCheckClient.tsx:198`
- `app/about/page.tsx:186`
- `app/condition-check/page.tsx:206`
- `components/BlogPostClient.tsx:327`
- `app/insurance-policy/InsurancePolicyClient.tsx:106`
- `app/conditions/[slug]/ConditionPage.tsx:254`
- `app/area-of-pain/neck-and-shoulder-pain/[PainArea]/PainAreaClient.tsx:156`
- `components/RatingsAndReviews.tsx:133`
- `app/area-of-pain/foot-pain/[FootSlug]/FootPainAreaClient.tsx:160`
- `app/about/meetourdoctors/page.tsx:52`
- `app/about/meetourdoctors/[Doctor_Name]/page.tsx:42`
- `app/injuries/personal-injury/PersonalInjuryClient.tsx:99`
- `app/about/faqs/page.tsx:352`
- `app/find-care/second-opinion/page.tsx:193`
- `app/ui/HomePageUI.tsx:101`
- `app/locations/LocationsClient.tsx:233`
- `app/area-of-pain/back-pain/[PainArea]/PainAreaClient.tsx:155`
- `app/injuries/work-injury/WorkInjuryClient.tsx:61`
- `app/find-care/find-a-doctor/page.tsx:127`
- `app/find-care/free-mri-review/FreeMRIReviewClient.tsx:279`
- `app/injuries/car-accident/CarAccidentClient.tsx:412`
- `app/injuries/slip-and-fall/SlipAndFallClient.tsx:334`
- `app/patient-forms/page.tsx:130`
- `app/find-care/book-an-appointment/page.tsx:397`
- `app/treatments/[TreatmentDetails]/page.tsx:261`

---

## AUDIT TASK 7 — Reveal/SlidingDiv Hidden Content

**File:** `app/locations/[state]/[location]/page.tsx`

`RevealAnimation.tsx` uses Framer Motion: `initial={{ opacity: 0, y: 75 }}` → animated to visible when in-view. The `<main className='hidden'>` style is applied via a JS-controlled motion.div wrapper.

| heading_tag | heading_text | wrapping_component | risk |
|---|---|---|---|
| h1 | Orthopedic Surgeons & Spine Specialists in {city} | SlidingDiv (position-based, not opacity) | Lower — uses translateX not opacity |
| h2 | Why Choose {clinic name} | Reveal (opacity: 0 initial) | Medium — Google may not index opacity:0 content reliably |
| h3 | Our {location} Clinic Specialty | Reveal (opacity: 0 initial) | Medium |

---

## AUDIT TASK 8 — OG Image Consistency

**layout.tsx line 40:**
```ts
const ogImage = getOgImageForPath('/locations');
// → Always resolves to: https://mountainspineorthopedics.com/locations-og.png
// (matches /locations prefix, ignores per-location path)
```

**generateLocationSchema.ts line 341:**
```ts
'image': clinic.ogImage ? `https://mountainspineorthopedics.com${clinic.ogImage}` : 'https://mountainspineorthopedics.com/locations_og.png'
```

**Mismatch:** OG meta tag uses generic `/locations-og.png` for ALL location pages. Schema uses per-location image. All 23 locations have individual ogImage fields set.

| location | schema_image | og_meta_image | match |
|---|---|---|---|
| Hollywood | /hollywood-orthopedics-og.png | /locations-og.png | ❌ |
| Orlando | /orlando-og.png | /locations-og.png | ❌ |
| All FL locations | per-location | /locations-og.png | ❌ |
| All NJ/NY/PA locations | per-location | /locations-og.png | ❌ |

---

## AUDIT TASK 9 — Image Attribute Completeness

**File:** `app/locations/[state]/[location]/page.tsx`

| image | alt | has_dimensions | loading | issues |
|---|---|---|---|---|
| Hero (line 126) `/herosectionimg.jpg` | ✅ | layout='fill' (deprecated) | priority={true} ✅ | No `sizes` prop; deprecated `layout='fill'` |
| HomeWhyAO (line 438) static import | ✅ | Next.js infers from static import | Not set (defaults to lazy) | No explicit `loading="lazy"` annotation |
| Association logos (line 390) static imports | ✅ via mapping | Next.js infers | Not set | Fine — small logos in marquee |

---

## AUDIT TASK 10 — Broken Internal Links

**File:** `components/data/clinics.tsx` (rendered as JSX in `advancedTreatments`, `skilled` fields)

| href | display_text | occurrences | target_exists | canonical_replacement |
|---|---|---|---|---|
| /area-of-pain/back-pain/sciatica-nerve-pain | Sciatica / Nerve Pain | 20+ (every location) | Yes (via alias) | /conditions/sciatica |
| /area-of-pain/back-pain/lumbar-degenerative-disc-disease | Lumbar Degenerative Disc Disease | 20+ (every location) | Yes (via alias) | /conditions/degenerative-disc-disease |
| /area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment | cervical radiculopathy | 5+ (FL locations) | Yes (valid static param) | /conditions/neck-pain |

These use old area-of-pain URL structure. Canonical paths are under `/conditions/`.

---

## AUDIT TASK 11 — reviewCount & Reviews Data Completeness

| state | location | rating | reviewCount | reviews_array | flag |
|---|---|---|---|---|---|
| FL | Hollywood | 5.0 | 28 | present | ✅ |
| FL | Altamonte Springs (palm-springs) | 5.0 | 31 | present | ✅ |
| FL | Orlando | 5.0 | 25 | present | ✅ |
| FL | Fort Pierce | 5.0 | 23 | present | ✅ |
| FL | Palm Beach Gardens | 5.0 | 33 | present | ✅ |
| FL | South Miami | 5.0 | 27 | present | ✅ |
| FL | Boca Raton | 5.0 | 29 | present | ✅ |
| FL | Altamonte Springs | 5.0 | 26 | present | ✅ |
| FL | Davenport | 5.0 | 22 | present | ✅ |
| FL | Jacksonville | 5.0 | 24 | present | ✅ |
| NJ | Bridgewater | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Cherry Hill | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Edison | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Freehold | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Paramus | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | West Orange | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Voorhees | 5 | **0** | unknown | ❌ reviewCount=0 |
| NJ | Princeton | 5 | **0** | unknown | ❌ reviewCount=0 |
| NY | New York City | 5 | **0** | unknown | ❌ reviewCount=0 |
| PA | Allentown | 5 | **0** | unknown | ❌ reviewCount=0 |
| PA | Philadelphia Walnut | 5 | **0** | unknown | ❌ reviewCount=0 |
| PA | Philadelphia Tioga | 5 | **0** | unknown | ❌ reviewCount=0 |
| PA | Philadelphia Germantown | 5 | **0** | unknown | ❌ reviewCount=0 |

**13 of 23 locations have reviewCount = 0. All NJ, NY, PA pages lack review data.**

---

## AUDIT TASK 12 — metaTitle Keyword Optimization

| location | current_metaTitle | priority_keyword | keyword_present |
|---|---|---|---|
| Orlando | Top Orthopedic Surgeons & Spine Specialists in Orlando \| Mountain Spine & Orthopedics | "spine surgeon near me" (vol 3,400 KD 1 pos 14.9) | ❌ |
| Edison NJ | Top Orthopedic Surgeons & Spine Specialists in Edison, NJ \| Mountain Spine & Orthopedics | "orthopedic doctor edison nj" (vol 70 CPC $350 pos 57.9) | ❌ |
| Paramus NJ | Top Orthopedic Surgeons & Spine Specialists in Paramus, NJ \| Mountain Spine & Orthopedics | "orthopedic doctor paramus nj" (CPC $400 pos 55.9) | ❌ |
| Bridgewater NJ | Top Orthopedic Surgeons & Spine Specialists in Bridgewater, NJ \| Mountain Spine & Orthopedics | "orthopedic doctor bridgewater nj" (KD 3 CPC $300) | ❌ |
| Freehold NJ | Top Orthopedic Surgeons & Spine Specialists in Freehold, NJ \| Mountain Spine & Orthopedics | "orthopedic doctor freehold nj" (KD 1) | ❌ |
| Hollywood FL | Top Orthopedic Surgeons & Spine Specialists in Hollywood \| Mountain Spine & Orthopedics | (top traffic 83 clicks/3mo) | ❌ not optimized |
| Jacksonville FL | Top Orthopedic Surgeons & Spine Specialists in Jacksonville \| Mountain Spine & Orthopedics | (pos 37.2, closest to page 1) | ❌ not optimized |

---

## PRE-AUDIT SUMMARY

| Issue | Count |
|---|---|
| Title tags over 65 chars | 21 of 23 |
| Meta descriptions over 170 chars | 22 of 23 |
| Locations with address schema bug (suite in city field) | 9 |
| areaServed entries with bare state abbreviation (all locations) | 23 |
| H1 duplicate instances | 1 (on all location pages) |
| Deprecated `layout='fill'` in location page | 1 (+ 25 sitewide) |
| Headings hidden by Reveal animation wrapper | 2 (H2, H3 per location page) |
| Locations missing review data (reviewCount=0) | 13 |
| OG image mismatch (schema vs meta tag) | 23 |
| Broken/non-canonical area-of-pain internal links (per instance) | 40+ |
| Priority location titles not keyword-optimized | 7 |
| Footer using `<main>` instead of `<footer>` | 1 |
