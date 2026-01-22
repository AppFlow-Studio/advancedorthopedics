'use client';

import React from 'react';
import Link from 'next/link';
import { BODY_PARTS } from '@/components/data/bodyParts';

// Anatomically accurate icons for each body part
const BodyPartIcons: Record<string, React.ReactNode> = {
  // Spine - vertebrae stacked vertically
  spine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <rect x="9" y="2" width="6" height="3" rx="1" />
      <rect x="8" y="6" width="8" height="3" rx="1" />
      <rect x="8" y="10" width="8" height="3" rx="1" />
      <rect x="8" y="14" width="8" height="3" rx="1" />
      <rect x="9" y="18" width="6" height="4" rx="1" />
      <line x1="12" y1="5" x2="12" y2="6" />
      <line x1="12" y1="9" x2="12" y2="10" />
      <line x1="12" y1="13" x2="12" y2="14" />
      <line x1="12" y1="17" x2="12" y2="18" />
    </svg>
  ),
  // Neck - cervical spine with head outline
  neck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <circle cx="12" cy="5" r="3" />
      <path d="M10 8v2M14 8v2" />
      <rect x="9" y="10" width="6" height="2" rx="0.5" />
      <rect x="9" y="13" width="6" height="2" rx="0.5" />
      <rect x="9" y="16" width="6" height="2" rx="0.5" />
      <path d="M8 19h8" strokeLinecap="round" />
    </svg>
  ),
  // Back - lumbar spine region
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M7 4c0 0 2-1 5-1s5 1 5 1" strokeLinecap="round" />
      <rect x="8" y="5" width="8" height="3" rx="1" />
      <rect x="7" y="9" width="10" height="3" rx="1" />
      <rect x="7" y="13" width="10" height="3" rx="1" />
      <rect x="8" y="17" width="8" height="3" rx="1" />
      <path d="M6 21h4M14 21h4" strokeLinecap="round" />
    </svg>
  ),
  // Shoulder - ball and socket joint
  shoulder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M4 8c0 0 2-4 8-4s8 4 8 4" strokeLinecap="round" />
      <circle cx="7" cy="10" r="3" />
      <circle cx="17" cy="10" r="3" />
      <path d="M7 13v6M17 13v6" strokeLinecap="round" />
      <path d="M10 10h4" strokeLinecap="round" />
      <circle cx="7" cy="10" r="1" fill="currentColor" />
      <circle cx="17" cy="10" r="1" fill="currentColor" />
    </svg>
  ),
  // Hip - pelvis with ball joints
  hip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M4 6c2-2 6-2 8-2s6 0 8 2" strokeLinecap="round" />
      <ellipse cx="12" cy="8" rx="8" ry="3" />
      <circle cx="7" cy="12" r="2" />
      <circle cx="17" cy="12" r="2" />
      <path d="M7 14v7M17 14v7" strokeLinecap="round" />
      <circle cx="7" cy="12" r="0.75" fill="currentColor" />
      <circle cx="17" cy="12" r="0.75" fill="currentColor" />
    </svg>
  ),
  // Knee - patella and joint
  knee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M10 2h4v6h-4z" strokeLinejoin="round" />
      <ellipse cx="12" cy="11" rx="4" ry="3" />
      <circle cx="12" cy="11" r="1.5" fill="currentColor" />
      <path d="M10 14h4v8h-4z" strokeLinejoin="round" />
      <path d="M8 8l2 2M16 8l-2 2" strokeLinecap="round" />
    </svg>
  ),
  // Hand & Wrist - palm with fingers
  'hand-wrist': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M7 13v7a1 1 0 001 1h8a1 1 0 001-1v-7" />
      <rect x="8" y="11" width="8" height="3" rx="1" />
      <path d="M6 11V7a1 1 0 012 0v4" />
      <path d="M9 11V4a1 1 0 012 0v7" />
      <path d="M12 11V3a1 1 0 012 0v8" />
      <path d="M15 11V5a1 1 0 012 0v6" />
      <path d="M18 11V9a1 1 0 012 0v4c0 1-1 2-2 2" />
    </svg>
  ),
  // Foot & Ankle - side view of foot
  'foot-ankle': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M6 4v8c0 2 1 4 3 5l8 3c2 1 4 0 4-2v-1c0-1-1-2-2-2H9" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="8" r="2" />
      <path d="M19 18h2M17 18h1M15 18h1" strokeLinecap="round" />
      <path d="M4 12h4" strokeLinecap="round" />
    </svg>
  ),
  // Elbow - hinge joint
  elbow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M8 2h4v7H8z" strokeLinejoin="round" />
      <ellipse cx="10" cy="12" rx="5" ry="3" />
      <circle cx="10" cy="12" r="1.5" fill="currentColor" />
      <path d="M6 15l-2 7M14 15l2 7" strokeLinecap="round" />
      <path d="M8 9l-2 2M12 9l2 2" strokeLinecap="round" />
    </svg>
  ),
};

// Map body part slugs to treatment filter tags
const BODY_PART_TO_TREATMENT_TAG: Record<string, string> = {
  'spine': 'Spine',
  'neck': 'Neck',
  'back': 'Lower Spine',
  'shoulder': 'Shoulder',
  'hip': 'Hip',
  'knee': 'Knee',
  'hand-wrist': 'Hand',
  'foot-ankle': 'Foot',
  'elbow': 'Elbow',
};

interface BodyPartTabsProps {
  linkPrefix?: string;
  useQueryParam?: boolean;
}

export default function BodyPartTabs({ linkPrefix = '/conditions/', useQueryParam = false }: BodyPartTabsProps) {
  // Generate the href based on whether we're using query params or path
  const getHref = (bodyPart: typeof BODY_PARTS[0]) => {
    if (useQueryParam) {
      const tag = BODY_PART_TO_TREATMENT_TAG[bodyPart.slug] || bodyPart.title;
      return `${linkPrefix}${encodeURIComponent(tag)}`;
    }
    return `${linkPrefix}${bodyPart.slug}`;
  };

  return (
    <div className="w-full">
      {/* Mobile: Scrollable horizontal tabs */}
      <div className="flex overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide sm:overflow-visible">
        <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-3">
          {BODY_PARTS.map((bodyPart) => (
            <Link
              key={bodyPart.slug}
              href={getHref(bodyPart)}
              className="flex-shrink-0 group flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-white border border-[#E5E7EB] hover:border-[#2358AC] hover:bg-[#F0F5FF] rounded-full transition-all duration-200 hover:shadow-sm"
            >
              <span className="text-[#6B7280] group-hover:text-[#2358AC] transition-colors duration-200">
                {BodyPartIcons[bodyPart.slug] || BodyPartIcons.spine}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className="text-sm sm:text-base text-[#374151] group-hover:text-[#2358AC] transition-colors duration-200 whitespace-nowrap"
              >
                {bodyPart.title}
              </span>
              <svg
                className="w-4 h-4 text-[#9CA3AF] group-hover:text-[#2358AC] group-hover:translate-x-0.5 transition-all duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          ))}
        </div>
      </div>

      {/* Hide scrollbar but keep functionality */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
