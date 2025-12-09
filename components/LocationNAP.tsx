"use client";

import { clinics } from "@/components/data/clinics";
import { MapPin } from "lucide-react";
import Link from "next/link";

export function LocationNAP({ slug }: { slug: string }) {
  const clinic = clinics.find((c) => c.slug === slug);
  if (!clinic) return null;

  const { address, placeUrl } = clinic;

  return (
    <div
      className="
        w-full max-w-xl
        bg-white/55
        backdrop-blur-md
        border border-white/40
        rounded-2xl
        px-5 py-3
        shadow-sm
        flex items-center justify-between
        flex-wrap
      "
    >
      <div className="flex items-center space-x-2">
        <MapPin className="text-[#0A50EC] w-5 h-5 flex-shrink-0" />
        <span className="text-[#111315] font-semibold text-base leading-tight">
          {address}
        </span>
      </div>

      {placeUrl ? (
        <Link
          href={placeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0A50EC] underline text-sm whitespace-nowrap ml-2"
        >
          View on Google Maps
        </Link>
      ) : (
        <span className="text-gray-500 text-sm whitespace-nowrap ml-2">
          Maps Link Unavailable
        </span>
      )}
    </div>
  );
}

