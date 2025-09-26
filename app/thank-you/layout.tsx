import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Thank You | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Thank you for contacting Mountain Spine & Orthopedics. We'll get back to you soon to schedule your consultation."),
  alternates: {
    canonical: buildCanonical("/thank-you"),
  },
  openGraph: {
    title: safeTitle(undefined, "Thank You | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Thank you for contacting Mountain Spine & Orthopedics. We'll get back to you soon to schedule your consultation."),
    url: buildCanonical("/thank-you"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Thank You | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Thank you for contacting Mountain Spine & Orthopedics. We'll get back to you soon to schedule your consultation."),
  },
};

export default function ThankYouLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Thank You</h1>
      <h2 className="sr-only">We'll Contact You Soon</h2>
      {children}
    </>
  );
}
