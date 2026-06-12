# MSO SEO Pre-Audit Phase 2 — 2026-03-31

## AUDIT TASK A — Reviews Gap Inventory

| locationSlug | stateSlug | city | stateAbbr | rating | reviewCount | reviews.length | flag |
|---|---|---|---|---|---|---|---|
| hollywood-orthopedics | florida | Hollywood | FL | 5.0 | 28 | 28 | ✅ |
| palm-springs-orthopedics | florida | Altamonte Springs - Casselberry | FL | 5.0 | 31 | 31 | ✅ |
| orlando-orthopedics | florida | Orlando | FL | 5.0 | 25 | 25 | ✅ |
| fort-pierce-orthopedics | florida | Fort Pierce | FL | 5.0 | 23 | 23 | ✅ |
| palm-beach-gardens-orthopedics | florida | Palm Beach Gardens | FL | 5.0 | 33 | 33 | ✅ |
| miami-beach-orthopedics | florida | South Miami | FL | 5.0 | 27 | 27 | ✅ |
| boca-raton-orthopedics | florida | Boca Raton | FL | 5.0 | 29 | 29 | ✅ |
| altamonte-springs-orthopedics | florida | Central Pkwy Altamonte Springs | FL | 5.0 | 26 | 26 | ✅ |
| davenport-orthopedics | florida | Davenport | FL | 5.0 | 22 | 22 | ✅ |
| jacksonville-orthopedics | florida | Jacksonville | FL | 5.0 | 24 | 24 | ✅ |
| bridgewater-orthopedics | new-jersey | Bridgewater | NJ | 5 | **0** | **0** | ❌ MISSING |
| cherry-hill-orthopedics | new-jersey | Cherry Hill | NJ | 5 | **0** | **0** | ❌ MISSING |
| edison-orthopedics | new-jersey | Edison | NJ | 5 | **0** | **0** | ❌ MISSING |
| freehold-orthopedics | new-jersey | Freehold | NJ | 5 | **0** | **0** | ❌ MISSING |
| paramus-orthopedics | new-jersey | Paramus | NJ | 5 | **0** | **0** | ❌ MISSING |
| west-orange-surgery-center | new-jersey | West Orange | NJ | 5 | **0** | **0** | ❌ MISSING |
| voorhees-orthopedics | new-jersey | Voorhees | NJ | 5 | **0** | **0** | ❌ MISSING |
| princeton-orthopedics | new-jersey | Princeton | NJ | 5 | **0** | **0** | ❌ MISSING |
| new-york-city-orthopedics | new-york | New York | NY | 5 | **0** | **0** | ❌ MISSING |
| allentown-orthopedics | pennsylvania | Allentown | PA | 5 | **0** | **0** | ❌ MISSING |
| philadelphia-walnut-orthopedics | pennsylvania | Philadelphia | PA | 5 | **0** | **0** | ❌ MISSING |
| philadelphia-tioga-orthopedics | pennsylvania | Philadelphia | PA | 5 | **0** | **0** | ❌ MISSING |
| philadelphia-germantown-orthopedics | pennsylvania | Philadelphia | PA | 5 | **0** | **0** | ❌ MISSING |

**13 locations confirmed missing review data.**

---

## AUDIT TASK B — OG Image Gap Inventory

**layout.tsx line 40 (current):**
```ts
const ogImage = getOgImageForPath('/locations');
```
This always resolves to `https://mountainspineorthopedics.com/locations-og.png` for ALL location pages regardless of per-location ogImage fields.

**All 23 locations have ogImage set in clinics.tsx:**

| locationSlug | ogImage |
|---|---|
| hollywood-orthopedics | /hollywood-orthopedics-og.png |
| palm-springs-orthopedics | /altamonte-springs-og.png |
| orlando-orthopedics | /orlando-og.png |
| fort-pierce-orthopedics | /fort-pierce-og.png |
| palm-beach-gardens-orthopedics | /palm-beach-gardens-og.png |
| miami-beach-orthopedics | /south-miami-og.png |
| boca-raton-orthopedics | /Boca-Raton-og.png |
| altamonte-springs-orthopedics | /altamonte-springs-og.png |
| davenport-orthopedics | /Davenport-og.png |
| jacksonville-orthopedics | /jacksonville-og.png |
| bridgewater-orthopedics | /bridgewater-og.png |
| cherry-hill-orthopedics | /cherry-hill-og.png |
| edison-orthopedics | /Edison-og.png |
| freehold-orthopedics | /Freehold-og.png |
| paramus-orthopedics | /locations-new-jersey-og.png |
| west-orange-surgery-center | /West-Orange-og.png |
| new-york-city-orthopedics | /New-York-City-og.png |
| allentown-orthopedics | /locations-pennsylvania-og.png |
| philadelphia-walnut-orthopedics | /Philadelphia-og.png |
| philadelphia-tioga-orthopedics | /Philadelphia-og.png |
| philadelphia-germantown-orthopedics | /Philadelphia-og.png |
| voorhees-orthopedics | /Voorhees-og.png |
| princeton-orthopedics | /Princeton-og.png |

All 23 have per-location ogImage set — after FIX 2, all will use their specific image in og:image.

---

## AUDIT TASK C — Remaining 16 Location metaTitle Inventory

(Sorted by stateSlug then locationSlug. Excluding Phase 1 already-updated: hollywood, orlando, jacksonville, bridgewater, edison, freehold, paramus)

| locationSlug | stateSlug | city | current_metaTitle | chars | over_65 |
|---|---|---|---|---|---|
| altamonte-springs-orthopedics | florida | Altamonte Springs | Top Orthopedic Surgeons & Spine Specialists in Altamonte Springs \| Mountain Spine & Orthopedics | 96 | ❌ |
| boca-raton-orthopedics | florida | Boca Raton | Top Orthopedic Surgeons & Spine Specialists in Boca Raton \| Mountain Spine & Orthopedics | 90 | ❌ |
| davenport-orthopedics | florida | Davenport | Top Orthopedic Surgeons & Spine Specialists in Davenport \| Mountain Spine & Orthopedics | 89 | ❌ |
| fort-pierce-orthopedics | florida | Fort Pierce | Top Orthopedic Surgeons & Spine Specialists in Fort Pierce \| Mountain Spine & Orthopedics | 91 | ❌ |
| miami-beach-orthopedics | florida | South Miami | Top Orthopedic Surgeons & Spine Specialists in South Miami \| Mountain Spine & Orthopedics | 91 | ❌ |
| palm-beach-gardens-orthopedics | florida | Palm Beach Gardens | Top Orthopedic Surgeons & Spine Specialists in Palm Beach Gardens \| Mountain Spine & Orthopedics | 97 | ❌ |
| palm-springs-orthopedics | florida | Altamonte Springs - Casselberry | Top Orthopedic Surgeons & Spine Specialists in Altamonte Springs - Casselberry \| Mountain Spine & Orthopedics | 108 | ❌ |
| cherry-hill-orthopedics | new-jersey | Cherry Hill | Top Orthopedic Surgeons & Spine Specialists in Cherry Hill, NJ \| Mountain Spine & Orthopedics | 95 | ❌ |
| princeton-orthopedics | new-jersey | Princeton | Top Orthopedic Surgeons & Spine Specialists in Princeton, NJ | 62 | ✅ but generic |
| voorhees-orthopedics | new-jersey | Voorhees | Top Orthopedic Surgeons & Spine Specialists in Voorhees, NJ | 61 | ✅ but generic |
| west-orange-surgery-center | new-jersey | West Orange | Ambulatory Surgery Center in West Orange, NJ \| Mountain Spine & Orthopedics | 75 | ❌ |
| new-york-city-orthopedics | new-york | New York | Top Orthopedic Surgeons & Spine Specialists in NYC \| Mountain Spine & Orthopedics | 83 | ❌ |
| allentown-orthopedics | pennsylvania | Allentown | Top Orthopedic Surgeons & Spine Specialists in Allentown, PA \| Mountain Spine & Orthopedics | 92 | ❌ |
| philadelphia-germantown-orthopedics | pennsylvania | Philadelphia | Top Orthopedic Surgeons & Spine Specialists in Germantown Philadelphia \| Mountain Spine & Orthopedics | 101 | ❌ |
| philadelphia-tioga-orthopedics | pennsylvania | Philadelphia | Top Orthopedic Surgeons & Spine Specialists in North Philadelphia (Port Richmond) \| Mountain Spine & Orthopedics | 110 | ❌ |
| philadelphia-walnut-orthopedics | pennsylvania | Philadelphia | Top Orthopedic Surgeons & Spine Specialists in Philadelphia (Center City) \| Mountain Spine & Orthopedics | 102 | ❌ |

**14 of 16 have titles over 65 chars. 2 (voorhees, princeton) are under 65 but still use generic "Top Orthopedic Surgeons" format without keyword optimization.**

**Note on Review interface:** Existing interface uses `reviewBody: string` and `reviewRating: number` (NOT `text`/`rating` as specified in the prompt). New reviews will use the existing field names to maintain TypeScript compatibility. A `date?: string` optional field will be added to the Review interface.
