'use client';

import React from 'react';
import Link from 'next/link';
import { BODY_PARTS } from '@/components/data/bodyParts';
import { 
  Hand, 
  Footprints, 
  Zap, 
  BicepsFlexed
} from 'lucide-react';

// Professional, anatomically-focused icons for each body part
const BodyPartIcons: Record<string, React.ReactNode> = {
  // Spine - stacked vertebrae column
  spine: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M12 2v20M9 5h6M8 9h8M8 13h8M9 17h6" strokeLinecap="round" />
      <rect x="10" y="3" width="4" height="2" rx="1" />
      <rect x="9" y="7" width="6" height="3" rx="1" />
      <rect x="9" y="11" width="6" height="3" rx="1" />
      <rect x="9" y="15" width="6" height="3" rx="1" />
      <rect x="10" y="19" width="4" height="2" rx="1" />
    </svg>
  ),
  // Neck - cervical spine profile
  neck: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M12 2c-2 0-4 1-4 3s1 2 1 4v2c0 2-1 3-3 4" strokeLinecap="round" />
      <path d="M12 2c2 0 4 1 4 3s-1 2-1 4v2c0 2 1 3 3 4" strokeLinecap="round" />
      <rect x="10" y="9" width="4" height="2" rx="0.5" />
      <rect x="10" y="12" width="4" height="2" rx="0.5" />
      <rect x="10" y="15" width="4" height="2" rx="0.5" />
    </svg>
  ),
  // Back - lumbar region focus
  back: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M7 2c0 0 2 1 5 1s5-1 5-1" strokeLinecap="round" />
      <path d="M5 22c0 0 3-2 7-2s7 2 7 2" strokeLinecap="round" />
      <path d="M12 4v14" strokeDasharray="2 2" />
      <rect x="8" y="6" width="8" height="3" rx="1" />
      <rect x="7" y="10" width="10" height="3" rx="1" />
      <rect x="8" y="14" width="8" height="3" rx="1" />
    </svg>
  ),
  // Shoulder - joint focus
  shoulder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M4 10c0-4 4-6 8-6s8 2 8 6" strokeLinecap="round" />
      <circle cx="7" cy="12" r="3" />
      <path d="M7 15v5M10 12h4" strokeLinecap="round" />
      <path d="M17 10c0 2-1 4-3 4" strokeLinecap="round" />
    </svg>
  ),
  // Hip - pelvic joint focus
  hip: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M4 8c2-2 6-2 8-2s6 0 8 2" strokeLinecap="round" />
      <circle cx="7" cy="14" r="3" />
      <circle cx="17" cy="14" r="3" />
      <path d="M10 14h4M7 17v4M17 17v4" strokeLinecap="round" />
    </svg>
  ),
  // Knee - joint structure
  knee: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5 sm:w-6 sm:h-6">
      <path d="M9 3h6v6c0 2-1 3-3 3s-3-1-3-3V3z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="2" />
      <path d="M9 21h6v-6c0-2-1-3-3-3s-3 1-3 3v6z" strokeLinejoin="round" />
    </svg>
  ),
  // Hand, Wrist & Elbow - represented by Hand
  'hand-wrist-elbow': <Hand className="w-5 h-5 sm:w-6 sm:h-6" />,
  // Foot & Ankle - represented by Footprints
  'foot-ankle': <Footprints className="w-5 h-5 sm:w-6 sm:h-6" />,
  // Sports Medicine - represented by Biceps/Strength
  'sports-medicine': <BicepsFlexed className="w-5 h-5 sm:w-6 sm:h-6" />,
  // Pain Management - represented by Zap/Nerve
  'pain-management': <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
};

// Map body part slugs to treatment filter tags
const BODY_PART_TO_TREATMENT_TAG: Record<string, string> = {
  'spine': 'Spine',
  'neck': 'Neck',
  'back': 'Lower Spine',
  'shoulder': 'Shoulder',
  'hip': 'Hip',
  'knee': 'Knee',
  'hand-wrist-elbow': 'Hand',
  'foot-ankle': 'Foot',
  'sports-medicine': 'Sports Medicine',
  'pain-management': 'Pain Management',
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
