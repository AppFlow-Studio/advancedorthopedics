# MSO SEO Changes Diff Summary — 2026-03-31

---

## File: `lib/generateLocationSchema.ts`

### Change 1 — Address Parser Bug Fix
**Lines changed:** ~31–66 (parseAddress function replaced)
**SEO rationale:** Parser incorrectly set `addressLocality` to the suite/unit number (e.g., "Suite B5") instead of the city name for all addresses with 4+ comma-separated parts. This corrupted the PostalAddress schema for 9 locations, causing Google to associate the clinic with a "Suite" locality rather than a real city. Empty `postalCode` also failed schema validation.
**Fix:** New logic takes last comma-part as "STATE ZIP", second-to-last as city, all prior parts as streetAddress. Handles both 3-part (no suite) and 4-part (with suite) address formats.

**Key before/after (Cherry Hill example):**
- `addressLocality`: "Suite B5" → "Cherry Hill"
- `postalCode`: "" → "08003"
- `streetAddress`: "100 Springdale Rd" → "100 Springdale Rd, Suite B5"

### Change 2 — Remove Bare State Abbreviation from areaServed
**Lines changed:** ~216–240 (areaServed array construction)
**SEO rationale:** A bare state abbreviation ("NJ", "FL") is not a valid `AdministrativeArea` name and adds noise to the schema. Removed the trailing `{ name: addressRegion }` entry from both branches.

---

## File: `components/Footer.tsx`

### Change 3 — Footer Element Type
**Lines changed:** 29, 237
**SEO rationale:** The footer's outermost element was `<main>`. A page must have exactly one `<main>` landmark (already used in the page body). Using `<main>` inside the footer creates duplicate landmark confusion for screen readers and may cause accessibility/crawl issues.

- Line 29: `<main className='bg-black...'>` → `<footer className='bg-black...'>`
- Line 237: `</main>` → `</footer>`

---

## File: `app/locations/[state]/[location]/page.tsx`

### Change 4 — Remove Duplicate sr-only H1
**Line changed:** 117 (deleted)
**SEO rationale:** Page had two H1 tags with identical text. The sr-only H1 was added as a "first-wave crawler" backup, but in Next.js App Router, SlidingDiv's children (including the visible H1) ARE rendered server-side as static HTML. The sr-only copy is redundant and creates a duplicate H1 — a known SEO issue that can suppress ranking for the primary H1.

- REMOVED: `<h1 className="sr-only">Orthopedic Surgeons & Spine Specialists in {city}</h1>`

### Change 5 — Fix Deprecated layout='fill' Hero Image
**Line changed:** 130
**SEO rationale:** `layout='fill'` was removed in Next.js 13. Using deprecated props can cause build warnings, hydration mismatches, and may affect how Next.js generates the `<img>` tag (missing srcSet/sizes). Added `fill` boolean and `sizes="100vw"` for proper responsive image generation.

- `layout='fill'` → `fill` (boolean prop)
- Added `sizes="100vw"`

### Change 6 — Extract H2 "Why Choose" Above Reveal Wrapper
**Lines changed:** ~407–435 (section structure)
**SEO rationale:** The H2 heading "Why Choose [clinic name]" was rendered inside a Framer Motion `<Reveal>` component that starts with `opacity: 0, y: 75`. Google may not reliably index content that is invisible on first paint (opacity: 0). Extracted the H2 to render above the animated container so it is present in the initial HTML without any CSS/JS hiding it.

- H2 moved outside `<Reveal>` wrapper — renders immediately in SSR HTML
- Body text paragraph and CTA button remain inside Reveal (animation preserved)
- No visual change on page load for users (H2 appears instantly, body text still animates in)

### Change 7 — Add loading="lazy" to Below-Fold Image
**Line changed:** ~438**
**SEO rationale:** The HomeWhyAO image is below the fold. Explicit `loading="lazy"` annotation makes intent clear and ensures the browser doesn't fetch this image during initial page load, improving LCP for the hero image above.

- Added `loading="lazy"` to `<Image src={HomeWhyAO} ...>`

---

## File: `app/locations/[state]/[location]/layout.tsx`

### Change 8 — Shorter Title Template (Fallback)
**Lines changed:** ~47–48**
**SEO rationale:** The fallback `standardizedTitle` was 93+ characters (e.g., "Top Orthopedic Surgeons & Spine Specialists in Orlando | Mountain Spine & Orthopedics"). This exceeds Google's ~600px display width. New formula puts the city name and primary keyword first and uses a shorter brand suffix.

- PRE: `` `Top Orthopedic Surgeons & Spine Specialists in ${cityName} | Mountain Spine & Orthopedics` `` (~93 chars)
- POST: `` `${cityName} Orthopedic Surgeon & Spine Specialist | Mountain Spine` `` (~57–65 chars)

### Change 9 — Shorter Description Template (Fallback)
**Lines changed:** ~51–54**
**SEO rationale:** The fallback `standardizedDescription` was ~274 characters. Google truncates at ~155–160 chars. New copy includes rating data (when reviewCount > 0), condition keywords (herniated disc, sciatica), and a clear CTA — all under 160 chars.

- PRE: ~274 chars generic template
- POST: ~143–155 chars with rating signal when available

---

## File: `components/data/clinics.tsx`

### Change 10 — 7 Priority Location metaTitles
**Locations updated:** Hollywood FL, Orlando FL, Jacksonville FL, Bridgewater NJ, Edison NJ, Freehold NJ, Paramus NJ
**SEO rationale:** Based on Ahrefs/GSC keyword data. Previous titles were generic "Top Orthopedic Surgeons..." formula that buries the search keyword. New titles front-load city + primary keyword.

| location | PRE | POST |
|---|---|---|
| Hollywood FL | Top Orthopedic Surgeons & Spine Specialists in Hollywood \| Mountain Spine & Orthopedics (88) | Hollywood FL Orthopedic Surgeon & Spine Specialist \| Mountain Spine (68) |
| Orlando FL | Top Orthopedic Surgeons & Spine Specialists in Orlando \| Mountain Spine & Orthopedics (87) | Orlando Spine Surgeon & Orthopedic Doctor \| Mountain Spine & Orthopedics (72) |
| Jacksonville FL | Top Orthopedic Surgeons & Spine Specialists in Jacksonville \| Mountain Spine & Orthopedics (91) | Jacksonville Orthopedic & Spine Surgeon \| Same-Day Appts \| Mountain Spine (74) |
| Bridgewater NJ | Top Orthopedic Surgeons & Spine Specialists in Bridgewater, NJ \| Mountain Spine & Orthopedics (95) | Orthopedic Doctor in Bridgewater, NJ \| Spine Surgeon \| Mountain Spine (70) |
| Edison NJ | Top Orthopedic Surgeons & Spine Specialists in Edison, NJ \| Mountain Spine & Orthopedics (91) | Orthopedic Doctor in Edison, NJ \| Spine Surgeon \| Mountain Spine (65) |
| Freehold NJ | Top Orthopedic Surgeons & Spine Specialists in Freehold, NJ \| Mountain Spine & Orthopedics (93) | Orthopedic Doctor in Freehold, NJ \| Monmouth County \| Mountain Spine (67) |
| Paramus NJ | Top Orthopedic Surgeons & Spine Specialists in Paramus, NJ \| Mountain Spine & Orthopedics (92) | Paramus NJ Orthopedic Surgeon & Spine Doctor \| Mountain Spine (62) |

### Change 11 — 7 Priority Location metaDescriptions
**SEO rationale:** Previous descriptions were ~270 chars (well over 160). New descriptions include rating signals (where available), condition keywords, and PPO accepted note — all under 160 chars.

### Change 12 — Replace area-of-pain Internal Links (Bulk)
**Occurrences replaced:**
- `/area-of-pain/back-pain/sciatica-nerve-pain` → `/conditions/sciatica` (20+ instances across all locations' `advancedTreatments` JSX)
- `/area-of-pain/back-pain/lumbar-degenerative-disc-disease` → `/conditions/degenerative-disc-disease` (20+ instances)
- `/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment` → `/conditions/neck-pain` (5+ instances in FL location `skilled` fields)
**SEO rationale:** Canonical URL structure for conditions is `/conditions/[slug]`. Using old area-of-pain paths creates inconsistent internal link equity distribution and non-canonical URL references. Now all condition links across all location pages point to the canonical `/conditions/` routes.

---

## File: `next.config.ts`

### Change 13 — 3 New 301 Redirects
**Lines added:** after line 44
**SEO rationale:** External links, Google cache, and backlinks pointing to the old area-of-pain URLs need server-side 301 redirects to pass link equity to the canonical /conditions/ pages. This is additive — existing routes still work, but old URLs now redirect cleanly.

```
/area-of-pain/back-pain/sciatica-nerve-pain → /conditions/sciatica (301)
/area-of-pain/back-pain/lumbar-degenerative-disc-disease → /conditions/degenerative-disc-disease (301)
/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment → /conditions/neck-pain (301)
```

---

## Summary

| fix | file(s) | lines_changed | status |
|---|---|---|---|
| 1. Address parser | generateLocationSchema.ts | ~35 | ✅ Done |
| 2. areaServed noise | generateLocationSchema.ts | ~8 | ✅ Done |
| 3. Footer main→footer | Footer.tsx | 2 | ✅ Done |
| 4. Remove sr-only H1 | page.tsx | 2 (deleted) | ✅ Done |
| 5. layout='fill' → fill | page.tsx | 2 | ✅ Done |
| 6. H2 outside Reveal | page.tsx | ~15 | ✅ Done |
| 7. loading=lazy image | page.tsx | 1 | ✅ Done |
| 8. Title template fallback | layout.tsx | 2 | ✅ Done |
| 9. Desc template fallback | layout.tsx | 3 | ✅ Done |
| 10. 7 priority metaTitles | clinics.tsx | 14 | ✅ Done |
| 11. 7 priority metaDescs | clinics.tsx | 14 | ✅ Done |
| 12. area-of-pain links | clinics.tsx | 40+ instances | ✅ Done |
| 13. 301 redirects | next.config.ts | 3 | ✅ Done |
