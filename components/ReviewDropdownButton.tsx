'use client';

import { useState, useRef, useEffect } from 'react';

interface ReviewLocation {
  locationSlug: string;
  region: string;
  address: string;
  reviewUrl: string;
}

export function ReviewDropdownButton({ locations }: { locations: ReviewLocation[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={() => setIsOpen((v) => !v)}
        style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
        className="inline-flex items-center justify-center gap-2 bg-[#1A73E8] hover:bg-[#1557B0] text-white text-sm px-5 py-2.5 rounded-full shadow-sm transition-colors w-full"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        Write a review
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Select a location to write a review"
          className="absolute right-0 top-full mt-2 z-50 bg-white rounded-2xl shadow-xl border border-[#E8EAED] min-w-[280px] max-h-[320px] overflow-y-auto"
        >
          <p
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
            className="text-[#5F6368] text-[10px] tracking-[0.12em] uppercase px-4 pt-3 pb-2 border-b border-[#F1F3F4]"
          >
            Select your location
          </p>
          {locations.map((loc) => (
            <a
              key={loc.locationSlug}
              href={loc.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              role="option"
              aria-selected={false}
              onClick={() => setIsOpen(false)}
              className="flex flex-col px-4 py-3 hover:bg-[#F8F9FA] transition-colors border-b border-[#F1F3F4] last:border-0"
            >
              <span
                style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
                className="text-[#202124] text-sm"
              >
                {loc.region}
              </span>
              <span
                style={{ fontFamily: 'var(--font-inter)' }}
                className="text-[#5F6368] text-xs mt-0.5"
              >
                {loc.address}
              </span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
