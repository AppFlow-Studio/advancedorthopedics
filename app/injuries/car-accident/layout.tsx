import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription, srOnly } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Car Accident Orthopedic Care | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Specialized orthopedic care for car accident injuries. Same-week appointments, advanced spine & joint treatment."),
  keywords: [
    "car accident orthopedic care",
    "car accident injury treatment",
    "whiplash treatment",
    "car accident spine care",
    "personal injury orthopedic clinic",
    "accident injury specialist",
    "car crash orthopedic treatment",
    "auto accident injury care",
    "spinal trauma treatment",
    "orthopedic accident care",
    "car accident back pain treatment",
    "motor vehicle accident injuries",
    "car accident whiplash doctor",
    "auto accident orthopedic specialist",
    "car crash injury treatment",
    "motor vehicle accident orthopedic care",
    "car accident herniated disc treatment",
    "whiplash injury specialist",
    "car accident spinal injury doctor",
    "auto accident back pain treatment",
    "car crash trauma orthopedic care",
    "personal injury spine specialist",
    "car accident joint injury treatment",
    "motor vehicle accident whiplash care"
  ],
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  alternates: {
    canonical: buildCanonical("/injuries/car-accident"),
  },
  openGraph: {
    title: safeTitle(undefined, "Car Accident Orthopedic Care | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Specialized orthopedic care for car accident injuries. Same-week appointments, advanced spine & joint treatment."),
    url: buildCanonical("/injuries/car-accident"),
    type: "website",
    images: [
      {
        url: "/og-car-accident-treatment.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor providing car accident spine care at Mountain Spine Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Car Accident Orthopedic Care in Florida | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Specialized orthopedic care for car accident injuries in Florida. Same-week appointments, advanced spine & joint treatment."),
    images: ["/og-car-accident-treatment.jpg"],
  },
};

export default function CarAccidentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h2 className={srOnly}>Expert Trauma Care</h2>
      
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            "headline": "Car Accident Orthopedic Care in Florida - Expert Whiplash & Spinal Injury Treatment",
            "description": "Specialized orthopedic care for car accident injuries in Florida including whiplash, spinal trauma, and joint injuries. Same-week appointments, advanced minimally invasive treatment, and comprehensive personal injury care coordination.",
            "keywords": "car accident orthopedic care, car accident injury treatment Florida, whiplash treatment Florida, car accident spine care, personal injury orthopedic clinic, auto accident injury specialist, motor vehicle accident orthopedic care",
            "author": {
              "@type": "Organization",
              "name": "Mountain Spine & Orthopedics"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Mountain Spine & Orthopedics",
              "url": "https://mountainspineorthopedics.com"
            },
            "url": "https://mountainspineorthopedics.com/injuries/car-accident",
            "mainEntity": {
              "@type": "MedicalCondition",
              "name": "Car Accident Injuries",
              "description": "Orthopedic and spinal injuries resulting from motor vehicle accidents, including whiplash, herniated discs, and fractures.",
              "alternateName": "Auto Accident Injuries"
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
                  "name": "Injuries",
                  "item": "https://mountainspineorthopedics.com/injuries"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Car Accident",
                  "item": "https://mountainspineorthopedics.com/injuries/car-accident"
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
            mainEntity: require("./faqs").carAccidentFaqs.map((f: { q: string; a: string }) => ({
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
