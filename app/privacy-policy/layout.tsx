import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Privacy Policy | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Mountain Spine & Orthopedics privacy policy. Learn how we protect your personal information and medical data in accordance with HIPAA regulations."),
  alternates: {
    canonical: buildCanonical("/privacy-policy"),
  },
  openGraph: {
    title: safeTitle(undefined, "Privacy Policy | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Mountain Spine & Orthopedics privacy policy. Learn how we protect your personal information and medical data in accordance with HIPAA regulations."),
    url: buildCanonical("/privacy-policy"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Privacy Policy | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Mountain Spine & Orthopedics privacy policy. Learn how we protect your personal information and medical data in accordance with HIPAA regulations."),
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Privacy Policy</h1>
      <h2 className="sr-only">Data Protection and HIPAA Compliance</h2>
      {children}
    </>
  );
}
