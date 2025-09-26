import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Candidacy Check | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Take our candidacy check to see if you're a candidate for orthopedic surgery or spine procedures at Mountain Spine & Orthopedics."),
  alternates: {
    canonical: buildCanonical("/find-care/candidacy-check"),
  },
  openGraph: {
    title: safeTitle(undefined, "Candidacy Check | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Take our candidacy check to see if you're a candidate for orthopedic surgery or spine procedures at Mountain Spine & Orthopedics."),
    url: buildCanonical("/find-care/candidacy-check"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Candidacy Check | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Take our candidacy check to see if you're a candidate for orthopedic surgery or spine procedures at Mountain Spine & Orthopedics."),
  },
};

export default function CandidacyCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Candidacy Check</h1>
      <h2 className="sr-only">Surgery Candidacy Assessment</h2>
      {children}
    </>
  );
}
