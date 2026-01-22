# Location Display Name Audit - Removing Redundant State Suffixes

**Audit Date:** 2026-01-11  
**Author:** AI Assistant  
**Purpose:** Remove redundant ", FL" (and other state) suffixes from location names in dropdowns and UI elements where state is already clear from context (URL structure, navigation grouping)

---

## Executive Summary

Location names were displaying with state suffixes (e.g., "Hollywood, FL", "Palm Springs, FL") in dropdowns and other UI elements where the state is already clear from:
1. URL structure (`/locations/fl/hollywood-orthopedics`)
2. Navigation context (being in the "Florida" dropdown section)
3. Breadcrumb navigation (state is shown separately)

This creates redundant information that clutters the UI. All location displays were updated to show city names only.

---

## Files Updated

### 1. `components/NavBar.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 847, 849 | `clinic.region` (e.g., "Hollywood, FL") | `clinic.region.split(',')[0].trim()` (e.g., "Hollywood") | Florida dropdown already shows state context |
| 859, 861 | Same as above | Same as above | New Jersey dropdown |
| 871, 873 | Same as above | Same as above | New York dropdown |
| 883, 885 | Same as above | Same as above | Pennsylvania dropdown |

**Impact:** Navigation dropdowns now show clean city names: "Hollywood", "Palm Springs", "Jacksonville" instead of "Hollywood, FL", etc.

---

### 2. `components/LocationsPicker.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 130 | `{clinic.region \|\| clinic.stateAbbr \|\| 'Location'}` | `{clinic.region ? clinic.region.split(',')[0].trim() : (clinic.stateAbbr \|\| 'Location')}` | Location picker badge should show city only |

**Impact:** Location picker badges show city names without state suffix.

---

### 3. `app/locations/LocationsClient.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 144 | `{clinic.region \|\| clinic.stateAbbr \|\| 'Location'}` | `{clinic.region ? clinic.region.split(',')[0].trim() : (clinic.stateAbbr \|\| 'Location')}` | Location card badge should show city only |

**Impact:** Location cards on main locations page show city names without state suffix.

---

### 4. `app/locations/[state]/page.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 147 | `{clinic.region \|\| stateInfo?.name}` | `{clinic.region ? clinic.region.split(',')[0].trim() : (stateInfo?.name \|\| 'Location')}` | State hub page already shows state in breadcrumb/title |

**Impact:** Location cards on state hub pages show city names without state suffix.

---

### 5. `app/locations/[state]/[location]/page.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 191 | `{locationData.region}` (breadcrumb) | `{locationData.region.split(',')[0].trim()}` | Breadcrumb already shows state separately |
| 201 | `Orthopedic Surgeons & Spine Specialists in {locationData.region}` | `Orthopedic Surgeons & Spine Specialists in {locationData.region.split(',')[0].trim()}` | H1 should use city name (state in URL) |
| 219 | `{locationData.region} most trusted...` | `{locationData.region.split(',')[0].trim()} most trusted...` | Body copy should use city name |
| 126 | Alt text with `locationData.region` | Uses `locationData.region.split(',')[0].trim()` | Alt text should be concise |
| 421 | Alt text with `locationData.region` | Uses `locationData.region.split(',')[0].trim()` | Alt text should be concise |

**Impact:** Location detail pages show city names only in breadcrumbs, H1, body copy, and alt text.

---

### 6. `app/locations/[state]/[location]/layout.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 83 | Alt text with `location.region` | Uses `cityName` (already extracted) | Alt text should use city name only |

**Impact:** OG image alt text uses city name only.

---

### 7. `app/injuries/car-accident/CarAccidentClient.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 504 | `clinic.region.replace(', FL', '')` | `clinic.region.split(',')[0].trim()` | More robust - works with all states, not just FL |

**Impact:** Injury page location list shows city names for all states.

---

### 8. `app/injuries/slip-and-fall/SlipAndFallClient.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 421 | `clinic.region.replace(', FL', '')` | `clinic.region.split(',')[0].trim()` | More robust - works with all states, not just FL |

**Impact:** Injury page location list shows city names for all states.

---

### 9. `app/sitemap/page.tsx`

| Line(s) | Original | Change Made | Reason |
|---------|----------|-------------|--------|
| 168-169 | `url: '/locations/${clinic.slug}'` + `title: clinic.region.replace(', FL', '') + ' Office'` | `url: '/locations/${clinic.stateSlug}/${clinic.locationSlug}'` + `title: clinic.region.split(',')[0].trim() + ' Office'` | Use canonical URLs + robust city name extraction |
| 271 | `"Our Florida Locations"` | `"Our Locations"` | Multi-state support |

**Impact:** Sitemap page uses canonical URLs and shows city names for all states.

---

### 10. `components/Footer.tsx`

| Line(s) | Status | Description |
|---------|--------|-------------|
| 148 | ✅ Already correct | Uses `clinic.region.replace(`, ${stateInfo?.abbr}`, '')` which dynamically removes state suffix |

**Impact:** Footer already handles this correctly for all states.

---

## Files NOT Changed

### Email Templates
- `components/email/useremailtemplate.tsx` (line 119) - **KEPT AS-IS**
  - Email context may benefit from full region name for clarity
  - User can see full location information in email

### Schema/Data Processing
- `components/LocationItemListSchema.tsx` (line 22) - Uses `clinic.region.split(',')[0]` for `addressLocality` - **CORRECT** (schema needs city only)
- `app/locations/[state]/layout.tsx` (line 141) - Uses `clinic.region.split(',')[0]` for schema - **CORRECT**
- Various places that use `.split(',')[0]` for extracting city names - **CORRECT**

---

## Pattern Used

Consistent pattern applied: `clinic.region.split(',')[0].trim()` or `locationData.region.split(',')[0].trim()`

This approach:
- ✅ Works for all states (FL, NJ, NY, PA)
- ✅ Handles edge cases (missing comma, extra spaces)
- ✅ More robust than `.replace(', FL', '')` which is hardcoded to FL

---

## SEO Considerations

### ✅ Safe Changes
- **Navigation dropdowns:** City names only improve UX, state context is clear
- **Location badges:** Visual clarity improved, state context available
- **Breadcrumbs:** State shown separately, city name sufficient
- **H1 headings:** State is in URL, city name is cleaner
- **Body copy:** More natural reading, state context available

### ⚠️ Notes
- Location detail page H1 now shows: "Orthopedic Surgeons & Spine Specialists in Hollywood" instead of "Orthopedic Surgeons & Spine Specialists in Hollywood, FL"
- **SEO Impact:** Minimal - state is still in URL (`/locations/fl/hollywood-orthopedics`) and metadata
- **Metadata:** Location layout.tsx already uses city name for titles: "Top Orthopedic Surgeons & Spine Specialists in Hollywood | Mountain Spine & Orthopedics"
- **Schema:** Uses city name in `addressLocality` field (correct for schema.org)

---

## Testing Checklist

- [ ] Verify NavBar dropdowns show city names only (all 4 states)
- [ ] Verify LocationsPicker shows city names in badges
- [ ] Verify LocationsClient shows city names in badges
- [ ] Verify state hub pages show city names in badges
- [ ] Verify location detail pages show city names in breadcrumb, H1, body copy
- [ ] Verify sitemap page shows city names and uses canonical URLs
- [ ] Verify injury pages show city names (all states, not just FL)
- [ ] Verify Footer still works correctly (already had dynamic handling)

---

## Conclusion

All redundant state suffixes have been removed from location displays in dropdowns and UI elements. The state context remains clear through:
1. URL structure (`/locations/{state}/{location}`)
2. Navigation grouping (state dropdowns)
3. Breadcrumb navigation (state shown separately)
4. Page titles and metadata (state in SEO metadata)

This improves UI clarity while maintaining SEO value.
