"use client";

import { useState } from "react";
import { getReviewLocations } from "@/lib/reviewLinks";

export default function ReviewLinksPage() {
  const locations = getReviewLocations();
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({});

  const handleCopy = async (locationSlug: string, url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      setCopiedStates(prev => ({ ...prev, [locationSlug]: true }));
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [locationSlug]: false }));
      }, 2000);
    } catch {
      // clipboard API unavailable — fail silently
    }
  };

  return (
    <div
      className="bg-gray-50 min-h-screen py-12 px-4"
      style={{ fontFamily: "var(--font-inter)" }}
    >
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#252932]">Google Review Links</h1>
          <p className="text-gray-500">
            Send the correct link to patients after their clinic is assigned by phone.
          </p>
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-gray-600 leading-relaxed">
            After a patient's clinic is confirmed by phone, copy the link for that location
            and paste it into their confirmation text or email. Each link goes directly to
            the Google review submission form for that specific location.
          </div>
        </div>

        {/* Location list */}
        <div className="space-y-3">
          {locations.map(({ locationSlug, region, address, reviewUrl }) => (
            <div
              key={locationSlug}
              className="bg-white border border-gray-200 rounded-lg p-4 space-y-2"
            >
              <div>
                <p className="font-semibold text-[#252932]">{region}</p>
                <p className="text-sm text-gray-400">{address}</p>
              </div>
              <p className="text-xs text-gray-400 font-mono truncate">{reviewUrl}</p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={() => handleCopy(locationSlug, reviewUrl)}
                  className="px-4 py-1.5 rounded-md text-sm font-medium text-white bg-[#0A50EC] hover:bg-[#252932] transition-colors"
                >
                  {copiedStates[locationSlug] ? "✓ Copied!" : "Copy Link"}
                </button>
                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-md text-sm font-medium text-[#0A50EC] border border-[#0A50EC]/30 hover:bg-[#0A50EC]/10 transition-colors"
                >
                  Open →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
