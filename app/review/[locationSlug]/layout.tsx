import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Leave a Review | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Share your experience with Mountain Spine & Orthopedics."),
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: buildCanonical("/review"),
  },
};

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
