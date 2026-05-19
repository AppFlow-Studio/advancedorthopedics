"use client";

import dynamic from "next/dynamic";

const MapSkeleton = () => (
  <div
    className="h-[400px] sm:h-[500px] md:h-[600px] lg:h-[680px] bg-gray-50 rounded-3xl mx-auto max-w-[1440px]"
    aria-hidden="true"
  />
);

const ClinicsMap = dynamic(() => import("./ClinicsMap"), {
  ssr: false,
  loading: MapSkeleton,
});

export default ClinicsMap;
