import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Car Accident Injuries | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Expert treatment for car accident injuries including whiplash, spinal trauma, and orthopedic injuries. Immediate care and long-term recovery at Mountain Spine & Orthopedics."),
  alternates: {
    canonical: buildCanonical("/injuries/car-accident"),
  },
  openGraph: {
    title: safeTitle(undefined, "Car Accident Injuries | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Expert treatment for car accident injuries including whiplash, spinal trauma, and orthopedic injuries. Immediate care and long-term recovery at Mountain Spine & Orthopedics."),
    url: buildCanonical("/injuries/car-accident"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Car Accident Injuries | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Expert treatment for car accident injuries including whiplash, spinal trauma, and orthopedic injuries. Immediate care and long-term recovery at Mountain Spine & Orthopedics."),
  },
};

export default function CarAccidentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className={srOnly}>Car Accident Injuries</h1>
      <h2 className={srOnly}>Expert Trauma Care</h2>
      {children}
    </>
  );
}
