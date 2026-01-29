import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";
import { personalInjuryFaqs } from "./faqs";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Personal Injury Orthopedic Care | Mountain Spine & Orthopedics"),
  description: safeDescription(
    undefined,
    "Expert orthopedic and spine care for personal injuries from car accidents, falls, and other trauma. Same-week evaluation across FL, NJ, NY & PA."
  ),
  keywords: [
    "personal injury orthopedic",
    "accident injury doctor",
    "car accident orthopedic specialist",
    "slip and fall injury treatment",
    "personal injury spine doctor",
    "orthopedic trauma clinic",
    "accident injury evaluation",
    "neck and back injury after crash",
    "orthopedic personal injury care",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: buildCanonical("/injuries/personal-injury"),
  },
  openGraph: {
    title: safeTitle(undefined, "Personal Injury Orthopedic Care | Mountain Spine & Orthopedics"),
    description: safeDescription(
      undefined,
      "Expert orthopedic and spine care for personal injuries from car accidents, falls, and other trauma."
    ),
    url: buildCanonical("/injuries/personal-injury"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Personal Injury Orthopedic Care | Mountain Spine & Orthopedics"),
    description: safeDescription(
      undefined,
      "Expert orthopedic and spine care for personal injuries from car accidents, falls, and other trauma across FL, NJ, NY & PA."
    ),
  },
};

export default function PersonalInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={srOnly}>Personal Injury Orthopedic Care</h2>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            headline: "Personal Injury Orthopedic Care - Mountain Spine & Orthopedics",
            description:
              "Orthopedic and spine care for personal injuries from car accidents, slip-and-fall incidents, and other trauma. Same-week evaluation and advanced treatment across Florida, New Jersey, New York, and Pennsylvania.",
            keywords:
              "personal injury orthopedic, accident injury doctor, car accident orthopedic specialist, slip and fall injury treatment",
            author: {
              "@type": "Organization",
              name: "Mountain Spine & Orthopedics",
            },
            publisher: {
              "@type": "Organization",
              name: "Mountain Spine & Orthopedics",
              url: "https://mountainspineorthopedics.com",
            },
            url: "https://mountainspineorthopedics.com/injuries/personal-injury",
            mainEntity: {
              "@type": "MedicalCondition",
              name: "Personal Injury-Related Orthopedic Conditions",
              description:
                "Spine, joint, and extremity injuries caused by car accidents, slip-and-fall events, and other trauma.",
              alternateName: "Accident-Related Orthopedic Injuries",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://mountainspineorthopedics.com" },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Injuries",
                  item: "https://mountainspineorthopedics.com/injuries",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Personal Injury",
                  item: "https://mountainspineorthopedics.com/injuries/personal-injury",
                },
              ],
            },
          }),
        }}
      />

      {/* FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: personalInjuryFaqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {children}
    </>
  );
}

