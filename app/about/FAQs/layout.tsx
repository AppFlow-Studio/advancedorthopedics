import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Frequently Asked Questions | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Find answers to frequently asked questions about orthopedic care, spine surgery, appointments, insurance, and treatments at Mountain Spine & Orthopedics."),
  alternates: {
    canonical: buildCanonical("/about/FAQs"),
  },
  openGraph: {
    title: safeTitle(undefined, "Frequently Asked Questions | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find answers to frequently asked questions about orthopedic care, spine surgery, appointments, insurance, and treatments at Mountain Spine & Orthopedics."),
    url: buildCanonical("/about/FAQs"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Frequently Asked Questions | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find answers to frequently asked questions about orthopedic care, spine surgery, appointments, insurance, and treatments at Mountain Spine & Orthopedics."),
  },
};

export default function FAQsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Frequently Asked Questions</h1>
      <h2 className="sr-only">Common Questions About Orthopedic Care</h2>
      {children}
    </>
  );
}
