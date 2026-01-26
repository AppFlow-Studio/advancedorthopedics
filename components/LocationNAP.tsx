"use client";

import { clinics } from "@/components/data/clinics";
import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import { MAIN_PHONE_DISPLAY, MAIN_PHONE_TEL, LOCATION_HOURS_DISPLAY } from "@/lib/locationConstants";

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
        flex flex-col
        space-y-2
      "
    >
      <div className="flex items-center space-x-2">
        <MapPin className="text-[#0A50EC] w-5 h-5 flex-shrink-0" />
        <span className="text-[#111315] font-semibold text-base leading-tight">
          {address}
        </span>
      </div>

      <div className="flex items-center space-x-2">
        <Phone className="text-[#0A50EC] w-5 h-5 flex-shrink-0" />
        <a
          href={`tel:${MAIN_PHONE_TEL}`}
          className="text-[#111315] font-semibold text-base leading-tight hover:text-[#0A50EC] transition-colors"
        >
          {MAIN_PHONE_DISPLAY}
        </a>
      </div>

      <div className="flex items-center space-x-2">
        <Clock className="text-[#0A50EC] w-5 h-5 flex-shrink-0" />
        <span className="text-[#111315] font-semibold text-base leading-tight">
          Hours: {LOCATION_HOURS_DISPLAY}
        </span>
      </div>

      {placeUrl && (
        <div className="pt-1">
          <Link
            href={placeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0A50EC] underline text-sm whitespace-nowrap"
          >
            View on Google Maps
          </Link>
        </div>
      )}
    </div>
  );
}

