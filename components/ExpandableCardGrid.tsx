'use client';

import React, { useState, useEffect } from 'react';

interface ExpandableCardGridProps {
  children: React.ReactNode[];
  initialCount?: number;
  mobileInitialCount?: number;
  itemType: string;
  totalCount: number;
}

export default function ExpandableCardGrid({
  children,
  initialCount = 6,
  mobileInitialCount = 4,
  itemType,
  totalCount,
}: ExpandableCardGridProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track mount state for SSR hydration
  useEffect(() => {
    setMounted(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // sm breakpoint
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Determine the effective initial count based on screen size
  const effectiveInitialCount = isMobile ? mobileInitialCount : initialCount;
  const shouldShowButton = totalCount > effectiveInitialCount;

  return (
    <div className="w-full">
      {/* Grid container - responsive columns */}
      <div 
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8"
        id={`${itemType.toLowerCase().replace(/\s/g, '-')}-grid`}
      >
        {children.map((child, index) => {
          // Before mount (SSR), show all items for SEO
          // After mount (client), respect the expanded state
          const shouldHide = mounted && !isExpanded && index >= effectiveInitialCount;
          
          return (
            <div
              key={index}
              className={`transition-all duration-300 ease-in-out ${
                shouldHide 
                  ? 'hidden sm:hidden' // Hide on all screen sizes when collapsed
                  : 'block'
              }`}
            >
              {child}
            </div>
          );
        })}
      </div>

      {/* View More/Less Button - only show after mount to prevent hydration mismatch */}
      {mounted && shouldShowButton && (
        <div className="flex justify-center mt-6 sm:mt-8 xl:mt-10">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white border-2 border-[#2358AC] text-[#2358AC] rounded-full hover:bg-[#2358AC] hover:text-white transition-all duration-200 shadow-sm hover:shadow-md active:scale-95"
            aria-expanded={isExpanded}
            aria-controls={`${itemType.toLowerCase().replace(/\s/g, '-')}-grid`}
          >
            <span
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className="text-sm sm:text-base"
            >
              {isExpanded
                ? 'Show Less'
                : `View All ${totalCount} ${itemType}`}
            </span>
            <svg
              className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 
        SEO Note: Before JavaScript hydration (mounted=false), ALL children are rendered 
        and visible in the DOM. This ensures search engines can crawl all content.
        After hydration, the hiding is applied client-side for better UX.
      */}
    </div>
  );
}
