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
            description: "Learn about orthopedic care and treatments with our specialists in Florida.",
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
