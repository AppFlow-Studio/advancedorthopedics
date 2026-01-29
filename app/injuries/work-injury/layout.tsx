import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";
import { workInjuryFaqs } from "./faqs";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Work Injury Orthopedic Care | Mountain Spine & Orthopedics"),
  description: safeDescription(
    undefined,
    "Expert orthopedic care for work-related injuries. Workers' comp coordination, same-week evaluation, and treatment across FL, NJ, NY & PA."
  ),
  keywords: [
    "work injury doctor",
    "workers compensation orthopedic",
    "work-related injury treatment",
    "occupational injury specialist",
    "work injury evaluation",
    "workers comp orthopedics",
    "workplace injury care",
    "on-the-job injury doctor",
    "work injury spine specialist",
    "work injury knee shoulder back",
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: buildCanonical("/injuries/work-injury"),
  },
  openGraph: {
    title: safeTitle(undefined, "Work Injury Orthopedic Care | Mountain Spine & Orthopedics"),
    description: safeDescription(
      undefined,
      "Expert orthopedic care for work-related injuries. Workers' comp coordination across FL, NJ, NY & PA."
    ),
    url: buildCanonical("/injuries/work-injury"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Work Injury Orthopedic Care | Mountain Spine & Orthopedics"),
    description: safeDescription(
      undefined,
      "Expert orthopedic care for work-related injuries. Workers' comp coordination across FL, NJ, NY & PA."
    ),
  },
};

export default function WorkInjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={srOnly}>Work Injury Orthopedic Care</h2>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            headline: "Work Injury Orthopedic Care - Mountain Spine & Orthopedics",
            description:
              "Expert orthopedic and spine care for work-related injuries. Workers' compensation coordination, same-week evaluation, and treatment across Florida, New Jersey, New York, and Pennsylvania.",
            keywords:
              "work injury doctor, workers compensation orthopedic, work-related injury treatment, occupational injury specialist",
            author: {
              "@type": "Organization",
              name: "Mountain Spine & Orthopedics",
            },
            publisher: {
              "@type": "Organization",
              name: "Mountain Spine & Orthopedics",
              url: "https://mountainspineorthopedics.com",
            },
            url: "https://mountainspineorthopedics.com/injuries/work-injury",
            mainEntity: {
              "@type": "MedicalCondition",
              name: "Work-Related Orthopedic Injuries",
              description:
                "Orthopedic and spinal injuries sustained at work, including back strain, shoulder and knee injuries, and extremity trauma.",
              alternateName: "Workplace Injury",
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://mountainspineorthopedics.com" },
                { "@type": "ListItem", position: 2, name: "Injuries", item: "https://mountainspineorthopedics.com/injuries" },
                { "@type": "ListItem", position: 3, name: "Work Injury", item: "https://mountainspineorthopedics.com/injuries/work-injury" },
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
            mainEntity: workInjuryFaqs.map((f) => ({
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
