import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { clinics } from "@/components/data/clinics"; // Import clinics data
import { LocationItemListSchema } from "@/components/LocationItemListSchema"; // Import the new schema component

export const metadata: Metadata = {
  title: safeTitle(undefined, "Orthopedic Clinic Locations | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Find Mountain Spine & Orthopedics clinic locations across Florida. Convenient orthopedic and spine care near you with expert specialists."),
  alternates: {
    canonical: buildCanonical("/locations"),
  },
  openGraph: {
    title: safeTitle(undefined, "Orthopedic Clinic Locations | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find Mountain Spine & Orthopedics clinic locations across Florida. Convenient orthopedic and spine care near you with expert specialists."),
    url: buildCanonical("/locations"),
    type: "website",
    images: [
      {
        url: getOgImageForPath("/locations"),
        width: 1200,
        height: 630,
        alt: "Mountain Spine & Orthopedics clinic locations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Orthopedic Clinic Locations | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find Mountain Spine & Orthopedics clinic locations across Florida. Convenient orthopedic and spine care near you with expert specialists."),
    images: [getOgImageForPath("/locations")],
  },
};

export default function LocationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Add the ItemList Schema component here */}
      <LocationItemListSchema clinics={clinics} />
      {children}
    </>
  );
}
