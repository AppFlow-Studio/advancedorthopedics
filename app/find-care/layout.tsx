import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Find Care | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Find orthopedic and spine care services at Mountain Spine & Orthopedics. Book appointments, find doctors, get second opinions, and access patient resources."),
  alternates: {
    canonical: buildCanonical("/find-care"),
  },
  openGraph: {
    title: safeTitle(undefined, "Find Care | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find orthopedic and spine care services at Mountain Spine & Orthopedics. Book appointments, find doctors, get second opinions, and access patient resources."),
    url: buildCanonical("/find-care"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Find Care | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find orthopedic and spine care services at Mountain Spine & Orthopedics. Book appointments, find doctors, get second opinions, and access patient resources."),
  },
};

export default function FindCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Find Care</h1>
      <h2 className="sr-only">Orthopedic Services and Resources</h2>
      {children}
    </>
  );
}
