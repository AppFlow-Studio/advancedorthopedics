# Legacy location redirect chain audit

Audited: 2026-09-07

All legacy city-level location redirects declared in `next.config.ts` resolve in
one configured hop to a canonical `/locations/{stateSlug}/{locationSlug}` route.
The destination slugs were checked against `components/data/clinics.tsx`.

| Legacy source | Canonical destination | Hops |
| --- | --- | ---: |
| `/locations/hollywood-fl-orthopedics` | `/locations/florida/hollywood-orthopedics` | 1 |
| `/locations/hollywood-orthopedics` | `/locations/florida/hollywood-orthopedics` | 1 |
| `/locations/palm-spring-orthopedics` | `/locations/florida/palm-springs-orthopedics` | 1 |
| `/locations/palm-springs-orthopedics` | `/locations/florida/palm-springs-orthopedics` | 1 |
| `/locations/orlando-orthopedics` | `/locations/florida/orlando-orthopedics` | 1 |
| `/locations/fort-pierce-orthopedics` | `/locations/florida/fort-pierce-orthopedics` | 1 |
| `/locations/palm-beach-gardens-orthopedics` | `/locations/florida/palm-beach-gardens-orthopedics` | 1 |
| `/locations/miami-beach-orthopedics` | `/locations/florida/south-miami-orthopedics` | 1 |
| `/locations/florida/miami-beach-orthopedics` | `/locations/florida/south-miami-orthopedics` | 1 |
| `/locations/boca-raton-orthopedics` | `/locations/florida/boca-raton-orthopedics` | 1 |
| `/locations/altamonte-springs-orthopedics` | `/locations/florida/altamonte-springs-orthopedics` | 1 |
| `/locations/davenport-orthopedics` | `/locations/florida/davenport-orthopedics` | 1 |
| `/locations/jacksonville-orthopedics` | `/locations/florida/jacksonville-orthopedics` | 1 |

## Manual citation updates

The repository does not contain the backlink export or referring-page URLs, so
editability cannot be determined here without inventing sources. When the export
is available, prioritize citations pointing to the legacy Orlando, Hollywood,
Altamonte Springs, and Fort Pierce URLs. Record the referring URL, owner/contact,
editable status, outreach date, and replacement canonical URL before contacting
the source.
