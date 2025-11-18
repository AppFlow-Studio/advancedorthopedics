import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Frequently Asked Questions | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Find answers to frequently asked questions about orthopedic care, spine surgery, appointments, insurance, and treatments at Mountain Spine & Orthopedics."),
  alternates: {
    canonical: buildCanonical("/about/faqs"),
  },
  openGraph: {
    title: safeTitle(undefined, "Frequently Asked Questions | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Find answers to frequently asked questions about orthopedic care, spine surgery, appointments, insurance, and treatments at Mountain Spine & Orthopedics."),
    url: buildCanonical("/about/faqs"),
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
  return <>{children}</>;
}
