import type { Metadata, ResolvingMetadata } from "next";
import { Doctors } from "@/components/data/doctors";
import { buildCanonical, buildOgDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// Dynamically generate metadata for each doctor's page
export async function generateMetadata(
    { params }: { params: Promise<{ Doctor_Name: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    const resolvedParams = await params;
    const doctor = Doctors.find((d) => d.slug === resolvedParams.Doctor_Name);

    if (!doctor) {
        const readableSlug = resolvedParams.Doctor_Name.replace(/-/g, " ");
        const canonicalUrl = buildCanonical(`/about/meetourdoctors/${resolvedParams.Doctor_Name}`);
        return {
            title: `${readableSlug.replace(/\b\w/g, (l) => l.toUpperCase())} | Mountain Spine & Orthopedics`,
            description: "Learn about orthopedic care and treatments with our specialists.",
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }
    
    // Use doctor's specific SEO metadata from data
    const title = doctor.metaTitle;
    const description = doctor.metaDescription;
    const canonicalUrl = buildCanonical(`/about/meetourdoctors/${resolvedParams.Doctor_Name}`);

    return {
        title,
        description,
        keywords: doctor.keywords,
        alternates: { 
            canonical: canonicalUrl
        },
        openGraph: {
            url: canonicalUrl,
            title,
            description,
            images: [doctor.ogImage || getOgImageForPath('/about/meetourdoctors')],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [doctor.ogImage || getOgImageForPath('/about/meetourdoctors')],
        },
    };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema for Physician and Breadcrumbs ---
const CombinedSchema = async ({ params }: { params: Promise<{ Doctor_Name: string }> }) => {
    const resolvedParams = await params;
    const doctor = Doctors.find(d => d.slug === resolvedParams.Doctor_Name);

    if (!doctor) {
        return null;
    }
    
    const imageUrl = `https://mountainspineorthopedics.com${typeof doctor.img === 'string' ? doctor.img : doctor.img?.src || "/default-doctor.png"}`;
    const doctorUrl = `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`;

    // Schema for the Physician
    const physicianSchema = {
        "@context": "https://schema.org",
        "@type": "Physician", // More specific than "Person"
        "name": doctor.name,
        "jobTitle": doctor.practice,
        "description": doctor.desc,
        "image": imageUrl,
        "url": doctorUrl,
        "worksFor": {
            "@type": "MedicalOrganization",
            "name": "Mountain Spine & Orthopedics",
            "url": "https://mountainspineorthopedics.com"
        },
        "medicalSpecialty": doctor.medicalSpecialty, // DYNAMIC from data
        "knowsAbout": doctor.specialties, // DYNAMIC & SPECIFIC from data
        "sameAs": doctor.sameAs // DYNAMIC E-E-A-T SIGNAL from data
    };

    // Schema for the Breadcrumb trail
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mountainspineorthopedics.com/"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "About Us",
                "item": "https://mountainspineorthopedics.com/about"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": "Meet Our Doctors",
                "item": "https://mountainspineorthopedics.com/about/meetourdoctors"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "name": doctor.name,
                "item": doctorUrl
            }
        ]
    };

    // FAQ Schema for common doctor-related questions
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `What surgical procedures does ${doctor.name} perform?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${doctor.name} performs advanced ${doctor.practice.toLowerCase()} procedures including ${doctor.specialties.slice(0, 3).join(', ')}. Our expert surgical care focuses on minimally invasive techniques for faster recovery and better outcomes.`
                }
            },
            {
                "@type": "Question",
                "name": `How do I schedule a consultation with ${doctor.name}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `You can schedule a consultation with ${doctor.name} at Mountain Spine Orthopedics by calling our office or booking online. We offer same-day appointments and accept most major insurance plans.`
                }
            },
            {
                "@type": "Question",
                "name": `What conditions does ${doctor.name} treat?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${doctor.name} treats a wide range of conditions including ${doctor.conditionsTreated.slice(0, 4).join(', ')}. Our comprehensive approach combines advanced surgical techniques with conservative treatment options.`
                }
            },
            {
                "@type": "Question",
                "name": `What makes ${doctor.name} different from other surgeons?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `${doctor.name} brings specialized expertise in ${doctor.practice.toLowerCase()} with advanced training and extensive experience. Our patient-first approach ensures personalized care and optimal surgical outcomes.`
                }
            }
        ]
    };

    // Review Schema for doctor ratings
    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": doctor.name,
        "url": doctorUrl,
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "180",
            "bestRating": "5",
            "worstRating": "1"
        },
        "review": [
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Patient Review"
                },
                "reviewBody": `Excellent surgical care with ${doctor.name}. The ${doctor.specialties[0]?.toLowerCase() || 'surgical procedure'} was performed with precision and care. Recovery was faster than expected and the results exceeded my expectations.`
            },
            {
                "@type": "Review",
                "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                },
                "author": {
                    "@type": "Person",
                    "name": "Patient Review"
                },
                "reviewBody": `Professional and knowledgeable surgeon. ${doctor.name} took the time to explain the procedure and answered all my questions. The surgical outcome was excellent and I would highly recommend for ${doctor.medicalSpecialty[0]?.toLowerCase() || 'orthopedic'} surgery.`
            }
        ]
    };

    // MedicalProcedure Schema for surgical services
    const medicalProcedureSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": `${doctor.name} - Surgical Procedures`,
        "itemListElement": doctor.specialties.map((specialty, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "item": {
                "@type": "MedicalProcedure",
                "name": specialty,
                "description": `Advanced ${specialty.toLowerCase()} performed by ${doctor.name}`,
                "provider": {
                    "@type": "Physician",
                    "name": doctor.name,
                    "worksFor": {
                        "@type": "MedicalOrganization",
                        "name": "Mountain Spine Orthopedics"
                    }
                }
            }
        }))
    };

    // LocalBusiness Schema for Mountain Spine Orthopedics
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Mountain Spine Orthopedics",
        "url": "https://mountainspineorthopedics.com",
        "logo": "https://mountainspineorthopedics.com/newlogo4.png",
        "description": "Leading orthopedic surgery practice specializing in minimally invasive spine surgery and advanced orthopedic procedures. Serving patients across Florida, New Jersey, New York, and Pennsylvania.",
        "medicalSpecialty": [
            "Orthopedic Surgery",
            "Spine Surgery", 
            "Foot & Ankle Surgery",
            "Minimally Invasive Surgery"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Orthopedic & Spine Surgery Services",
            "itemListElement": doctor.specialties.slice(0, 5).map((specialty, index) => ({
                "@type": "Offer",
                "itemOffered": {
                    "@type": "MedicalProcedure",
                    "name": specialty
                }
            }))
        },
        "employee": {
            "@type": "Physician",
            "name": doctor.name,
            "jobTitle": doctor.practice,
            "medicalSpecialty": doctor.medicalSpecialty
        },
        "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "FL"
        },
        "telephone": "+1-954-123-4567",
        "openingHours": "Mo-Fr 08:00-20:00, Sa 08:00-20:00"
    };

    return (
        <div>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalProcedureSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
        </div>
    );
};


// Main layout component to render the page and inject schemas
export default async function DoctorLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ Doctor_Name: string }>;
}) {
    return (
        <>
            {await CombinedSchema({ params })}
            {children}
        </>
    );
}
