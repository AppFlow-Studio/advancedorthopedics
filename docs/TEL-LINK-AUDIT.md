# tel: Link Audit for GTM Trigger Compatibility

**GTM trigger expects:** Click URL contains `tel:+19732596756` (exact format: `tel:+1` + 10 digits, no spaces/parens)

## Source of truth
- `lib/locationConstants.ts`: `STATE_PHONE_NUMBERS[].tel` = 10 digits only (`"5612239959"`, `"9732596756"`, `"6463895606"`). No `+1` in `tel` field.

---

## Already correct (use `tel:+1...`)
| File | Line | Current |
|------|------|---------|
| components/PhoneTextLink.tsx | 45 | `tel:+1${cleanPhone}` |
| components/StateHero.tsx | 106 | `tel:+1${phoneNumberRaw}` |
| components/StateCTA.tsx | 84 | `tel:+1${phoneNumberRaw}` |
| components/HomeHeroSection.client.tsx | 272 | `tel:+15612239959` |
| components/NavBar.tsx | 1198, 1286 | `tel:+15612239959` |
| app/ui/HomePageUI.tsx | 147 | `tel:+15612239959` |
| components/InjuryInsuranceCoverage.tsx | 319 | `tel:+15612239959` |
| components/InjuryAttorneyPanel.tsx | 38, 73 | `tel:+15612239959` |
| components/InjuryClinicFinder.tsx | 223 | `tel:+15612239959` |
| components/InjuryUrgencyBanner.tsx | 222 | `tel:+15612239959` |

---

## Needs change (no `+1` → add `+1`)

### Dynamic (use state/clinic phone)
| File | Line | Current | Fix |
|------|------|---------|-----|
| app/locations/LocationsClient.tsx | 169 | `tel:${statePhone.tel}` | `tel:+1${statePhone.tel}` |
| app/locations/LocationsClient.tsx | 279, 596, 697 | `tel:5612239959` etc. | `tel:+15612239959`, `tel:+19732596756`, `tel:+16463895606` |
| components/LocationsPicker.tsx | 145 | `tel:${statePhone.tel}` | `tel:+1${statePhone.tel}` |
| components/LocationsPicker.tsx | 287 | hardcoded 3 numbers | `tel:+1...` for each |
| components/StateLocationCard.tsx | 106 | `tel:${telPhone}` | `tel:+1${telPhone}` |
| components/LocationNAP.tsx | 40 | `tel:${telPhone}` | `tel:+1${telPhone}` |
| components/LocationGallerySection.tsx | 74 | `tel:${...replace(/\D/g,'')}` | `tel:+1${...}` |
| components/PhoneLink.tsx | 29 | `tel:${cleanPhone}` | `tel:+1${cleanPhone}` |
| components/email/emailtemplate.tsx | 122 | `tel:${statePhone.tel}` | `tel:+1${statePhone.tel}` |

### Hardcoded FL (561) 223-9959
| File | Line | Fix |
|------|------|-----|
| components/CondensedLocations.tsx | 99 | `tel:+15612239959`, `tel:+19732596756`, `tel:+16463895606` |
| components/email/useremailtemplate.tsx | 81, 198 | `tel:+15612239959` |
| components/email/conditioncheckemailtemplate.tsx | 188 | `tel:+15612239959` |
| components/email/candidemailtemplate.tsx | 160 | `tel:+15612239959` |
| components/email/lawyeremailtemplate.tsx | 273 | `tel:+15612239959` |
| components/email/lawyerconfirmationtemplate.tsx | 142, 220 | `tel:+15612239959` |
| components/email/mrireviewtemplate.tsx | 131 | `tel:+15612239959` |
| app/injuries/work-injury/WorkInjuryClient.tsx | 341 | `tel:+15612239959` |
| app/injuries/slip-and-fall/SlipAndFallClient.tsx | 704, 735 | `tel:+15612239959` |
| app/injuries/personal-injury/PersonalInjuryClient.tsx | 400 | `tel:+15612239959` |

---

## Implementation plan
1. Fix all dynamic links to use `tel:+1${digits}`.
2. Fix all hardcoded links to use `tel:+1XXXXXXXXXX`.
3. No change to `lib/locationConstants.ts` (keep `tel` as 10 digits; prefix at use site).
