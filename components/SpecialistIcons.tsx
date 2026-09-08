import type { SVGProps } from 'react';

/**
 * Custom nav icons for the seven specialist guide pages, drawn in the lucide
 * visual language (24x24, 2px round-capped strokes, currentColor) so they sit
 * seamlessly next to lucide icons while actually depicting each condition.
 */

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

/** Stacked vertebrae. */
export function SpineIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="7.5" y="3" width="9" height="4.6" rx="2.1" />
      <rect x="7.5" y="9.7" width="9" height="4.6" rx="2.1" />
      <rect x="7.5" y="16.4" width="9" height="4.6" rx="2.1" />
    </svg>
  );
}

/** Side-view back with radiating lumbar pain. */
export function BackPainIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.2" cy="4.6" r="2.1" />
      <path d="M11.4 8.2 C9.6 11 9.5 14 10.8 16.8 L10.4 21" />
      <path d="M14.8 11.4 l2.6 -1.1" />
      <path d="M15.4 14.2 l2.8 0" />
      <path d="M14.8 17 l2.6 1.1" />
    </svg>
  );
}

/** Scoliotic S-curve with vertebra points. */
export function ScoliosisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12.5 3 C8.5 6.5 15.5 9.5 12.5 13 C10 16 11.5 18.5 12 21" />
      <circle cx="11" cy="5.4" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="13.6" cy="10.6" r="1.15" fill="currentColor" stroke="none" />
      <circle cx="11.2" cy="15.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Hip-to-leg path with the radiating bolt of sciatica. */
export function SciaticaIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M8.5 3 C8.5 7 9 9.5 10.5 12 L10.5 21" />
      <path d="M15.5 6 L13.4 10 L16.6 10 L14.2 14.6" />
    </svg>
  );
}

/** Canal ring narrowing inward. */
export function StenosisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 6.2 v1.6 M12 16.2 v1.6 M6.2 12 h1.6 M16.2 12 h1.6" />
    </svg>
  );
}

/** Disc between two vertebrae with extruded material. */
export function HerniatedDiscIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="3.2" width="13" height="5" rx="2.2" />
      <rect x="5" y="15.8" width="13" height="5" rx="2.2" />
      <ellipse cx="11" cy="12" rx="4.4" ry="1.9" />
      <circle cx="18.2" cy="12.8" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Nerve signal squeezed between two compression points. */
export function PinchedNerveIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12 C5.5 9.4 7.5 14.6 10 12 L14 12 C17 12 18.5 12 21 12" />
      <path d="M11.5 4.6 L14 8.2 L16.5 4.6" />
      <path d="M11.5 19.4 L14 15.8 L16.5 19.4" />
    </svg>
  );
}
