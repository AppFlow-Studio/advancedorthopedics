import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Meet Our Doctors | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Meet our board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care with years of experience in minimally invasive procedures."),
  alternates: {
    canonical: buildCanonical("/about/meetourdoctors"),
  },
  openGraph: {
    title: safeTitle(undefined, "Meet Our Doctors | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Meet our board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care with years of experience in minimally invasive procedures."),
    url: buildCanonical("/about/meetourdoctors"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Meet Our Doctors | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Meet our board-certified orthopedic surgeons and spine specialists at Mountain Spine & Orthopedics. Expert care with years of experience in minimally invasive procedures."),
  },
};

export default function MeetOurDoctorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
