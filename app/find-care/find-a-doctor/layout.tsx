import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Find a Doctor | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Find board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care across Florida locations."),
  alternates: {
    canonical: buildCanonical("/find-care/find-a-doctor"),
  },
  openGraph: {
    title: safeTitle(undefined, "Find a Doctor | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care across Florida locations."),
    url: buildCanonical("/find-care/find-a-doctor"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Find a Doctor | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care across Florida locations."),
  },
};

export default function FindADoctorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Find a Doctor</h1>
      <h2 className="sr-only">Orthopedic Specialists Near You</h2>
      {children}
    </>
  );
}
