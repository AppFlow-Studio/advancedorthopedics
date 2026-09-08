# Specialist-page visual and interaction audit

Local preview: http://127.0.0.1:3002/find-care/spine-specialist

## Scope

All seven `/find-care/` specialist pages. The later request explicitly authorized visual and animation changes to these pages. Existing shared cards, navigation, condition/treatment data, and unrelated working-tree files are preserved. No new package was installed.

## Design research and implementation choice

Primary sources reviewed:

- [Magic UI Animated Beam](https://magicui.design/docs/components/animated-beam): useful directional-path vocabulary for the sciatica and nerve illustrations. Custom SVG paths fit this task better than a diagram connecting DOM elements.
- [Magic UI Orbiting Circles](https://magicui.design/docs/components/orbiting-circles): useful radial composition for movement and spinal-space views. The implementation uses deliberate, finite state transitions instead of continuous orbiting beside medical copy.
- [Motion React](https://motion.dev/docs/react): the already-installed animation system handles interpolation, path reveals, and replay. No second animation runtime or WebGL canvas is introduced.
- [Motion reduced-motion support](https://motion.dev/docs/react-use-reduced-motion): user preferences disable animated transitions. Native buttons retain their functionality.
- [Motion scroll-linked animation](https://motion.dev/docs/react-use-scroll): considered, but the principal interaction is selection-driven so touch users do not have to perform a precise scroll gesture to read a view.
- [React Bits Spotlight Card](https://reactbits.dev/components/spotlight-card): considered as a surface treatment. The documentation site was JavaScript-dependent in the research fetch; no unverified implementation claims or copied code were used. Pointer-only effects were not made central to a mobile-first component.

The resulting components are original implementations, not downloaded library examples. The React best-practices review informed the isolated client boundary, small slug prop, static scene configuration, and reuse of the existing animation dependency.

## Seven distinct scenes

| Page | Illustration | Patient interaction |
|---|---|---|
| Spine specialist | Highlighted vertebral regions | Neck, mid-back, lower-back appointment prompts |
| Back pain doctor | Three-point movement compass | Sitting, standing, walking context |
| Scoliosis doctor | Curved alignment and balance frame | Alignment, balance, daily-life priorities |
| Sciatica doctor | Progressive symptom trail | Back, buttock, leg symptom descriptions |
| Spinal stenosis specialist | Layered spatial rings | Canal, opening, walking questions |
| Herniated disc specialist | Exploded disc layers | Outer layer, inner material, nearby nerve |
| Pinched nerve doctor | Branching signal map | Sensation, strength, location clues |

Every illustration is explicitly labeled conceptual, not diagnostic. Each view provides a short preparation prompt and a link to the first-appointment section. Controls have visible focus states, pressed-state semantics, and minimum 44px height. Changes are announced through a polite live region. Motion is finite and replayable; there is no autoplay carousel.

## Visual findings addressed

- Introduced a split desktop hero and stacked mobile layout with a strong booking CTA before the interactive panel.
- Added scoped typography, a restrained dark visual surface, and a different accent palette per condition.
- Added first-visit, physician, and office jump links.
- Reworked appointment cards with large numbered markers and clearer card separation.
- Grouped the office directory into four native state disclosures; clinic links remain server-rendered. Georgia remains excluded from linked offices.
- Added a closing booking panel with a clear heading and retained the second-opinion choice.
- Corrected SVG attribute animation that initially pushed spine shapes off-center.
- Kept decorative background imagery out of the accessibility tree.
- Preserved the insurance approval placeholder and existing specialist SEO data.

## Reproducible verification

With the preview running, PowerShell:

```powershell
$env:AUDIT_URL='http://127.0.0.1:3002'
$env:AUDIT_OUT="$env:TEMP\specialist-visual-final"
node scripts/audit-specialist-visuals.mjs
node scripts/specialist-contact-sheet.mjs
node scripts/check-specialist-interactions.mjs
npm run audit:specialists
```

The screenshot script checks all seven pages at 390px and 1440px, exercises all three view controls, asserts HTTP 200 and no horizontal overflow, and saves hero, interactive-panel, and full-page screenshots. The interaction script checks 320px and 768px in reduced-motion mode, keyboard selection, office disclosures, FAQs, canonical/title/description/schema requirements, existing routes, and unknown-slug 404 behavior.

Screenshots and machine-readable results are kept outside the repository in `%TEMP%/specialist-visual-final`; existing user audit folders are untouched. Initial first-visit captures include the global consent banner. Later screenshots reject optional cookies before testing to avoid mistaking a consent-triggered reload for a component failure.

## Release limitations

- The specialist cannibalization gate passes for all seven entries.
- Repository-wide `tsc --noEmit --incremental false` reports errors in existing unrelated files (including condition routes, FreeMRIReviewClient, doctor-linking utilities, and older scripts). No errors were reported for the new specialist component or route. This is not a clean repository-wide type-check certification.
- This pass does not claim production Core Web Vitals, ranking improvements, or measured conversion lift. Those require production measurements.
- Google's manual Rich Results Test and clinical review/approval remain separate release checks; local schema parsing is not a substitute.
- The literal insurance token remains pending approval. Do not merge an unapproved replacement.
- Existing shared consent and navigation behavior is preserved; this was not a sitewide redesign.
