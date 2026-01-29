import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Slip and Fall Injury Treatment | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Expert treatment for slip and fall injuries. Spine, joint, and fracture care by board-certified orthopedic specialists."),
  keywords: [
    "slip and fall doctor",
    "slip and fall injury treatment",
    "personal injury orthopedic clinic",
    "fracture treatment",
    "spine and joint accident treatment",
    "orthopedic injury care",
    "slip fall fracture repair",
    "accident injury specialist",
    "orthopedic trauma care",
    "bone fracture treatment",
    "spinal injury treatment",
    "joint injury rehabilitation",
    "slip and fall spine specialist",
    "fall injury orthopedic care",
    "slip fall accident doctor",
    "fall injury fracture treatment",
    "slip and fall whiplash treatment",
    "fall accident spinal injury care",
    "slip fall back injury treatment",
    "fall injury joint damage care",
    "slip and fall hip fracture treatment",
    "fall accident orthopedic specialist",
    "slip fall injury rehabilitation",
    "fall injury physical therapy"
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: buildCanonical("/injuries/slip-and-fall"),
  },
  openGraph: {
    title: safeTitle(undefined, "Slip and Fall Injury Treatment | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Expert treatment for slip and fall injuries. Spine, joint, and fracture care by board-certified orthopedic specialists."),
    url: buildCanonical("/injuries/slip-and-fall"),
    type: "website",
    images: [
      {
        url: "/og-slip-fall-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Orthopedic doctor treating slip and fall back injury in Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Slip and Fall Injury Treatment in Florida | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Expert treatment for slip and fall injuries in Florida. Spine, joint, and fracture care by board-certified orthopedic specialists."),
    images: ["/og-slip-fall-treatment.jpg"],
  },
};

export default function SlipAndFallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={srOnly}>Specialized Trauma Treatment</h2>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Slip and Fall Injury Treatment in Florida - Expert Fracture & Spinal Injury Care",
            "description": "Expert treatment for slip and fall injuries in Florida including fractures, spinal trauma, and joint injuries. Comprehensive care by board-certified orthopedic specialists with same-week appointments and advanced minimally invasive treatment options.",
            "keywords": "slip and fall doctor Florida, slip and fall injury treatment, personal injury orthopedic clinic, fracture treatment Florida, spine and joint accident treatment, fall injury specialist, slip fall accident orthopedic care",
            "author": {
              "@type": "Organization",
              "name": "Mountain Spine & Orthopedics"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mountain Spine & Orthopedics",
              "url": "https://mountainspineorthopedics.com"
            },
            "url": "https://mountainspineorthopedics.com/injuries/slip-and-fall",
            "mainEntity": {
              "@type": "MedicalCondition",
              "name": "Slip and Fall Injuries",
              "description": "Orthopedic and spinal injuries resulting from slip and fall accidents, including fractures, joint damage, and soft tissue injuries.",
              "alternateName": "Fall Accident Injuries"
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://mountainspineorthopedics.com"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Slip and Fall",
                  "item": "https://mountainspineorthopedics.com/injuries/slip-and-fall"
                }
              ]
            }
          }),
        }}
      />
      
      {/* FAQPage JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: require("./faqs").slipFallFaqs.map((f: { q: string; a: string }) => ({
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
