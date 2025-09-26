import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Slip and Fall Injuries | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Specialized treatment for slip and fall injuries including fractures, spinal trauma, and soft tissue damage. Comprehensive care at Mountain Spine & Orthopedics."),
  alternates: {
    canonical: buildCanonical("/injuries/slip-and-fall"),
  },
  openGraph: {
    title: safeTitle(undefined, "Slip and Fall Injuries | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Specialized treatment for slip and fall injuries including fractures, spinal trauma, and soft tissue damage. Comprehensive care at Mountain Spine & Orthopedics."),
    url: buildCanonical("/injuries/slip-and-fall"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Slip and Fall Injuries | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Specialized treatment for slip and fall injuries including fractures, spinal trauma, and soft tissue damage. Comprehensive care at Mountain Spine & Orthopedics."),
  },
};

export default function SlipAndFallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className={srOnly}>Slip and Fall Injuries</h1>
      <h2 className={srOnly}>Specialized Trauma Treatment</h2>
      {children}
    </>
  );
}
