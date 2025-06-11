import type { Metadata, ResolvingMetadata } from "next";
import { Doctors } from "@/components/data/doctors";

// Dynamically generate metadata for each doctor's page
export async function generateMetadata(
    { params }: { params: { Doctor_Name: string } }
): Promise<Metadata> {
    const doctor = Doctors.find((d) => d.slug === params.Doctor_Name);

    if (!doctor) {
        return {
            title: "Doctor Not Found | Mountain Spine & Orthopedics",
            description: "The requested doctor profile could not be found.",
        };
    }
    
    // Ensure image path is a full URL for metadata
    const imageUrl = `https://mountainspineorthopedics.com${typeof doctor.img === 'string' ? doctor.img : doctor.img?.src || '/default-doctor.png'}`;
    const doctorUrl = `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`;

    return {
        metadataBase: new URL('https://mountainspineorthopedics.com'),
        // --- FIX: Using the new, specific SEO fields from doctors.tsx ---
        title: doctor.metaTitle,
        description: doctor.metaDescription,
        keywords: doctor.keywords,
        
        alternates: {
            canonical: doctorUrl,
        },
        openGraph: {
            title: doctor.metaTitle,
            description: doctor.metaDescription,
            url: doctorUrl,
            type: "profile",
            images: [{ url: imageUrl, alt: doctor.name }],
        },
        twitter: {
            card: "summary_large_image",
            title: doctor.metaTitle,
            description: doctor.metaDescription,
            images: [imageUrl],
        },
    };
}

// --- SEO ENHANCEMENT: Combined JSON-LD Schema for Physician and Breadcrumbs ---
const CombinedSchema = ({ params }: { params: { Doctor_Name: string } }) => {
    const doctor = Doctors.find(d => d.slug === params.Doctor_Name);

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
        "medicalSpecialty": "Orthopedic",
        "knowsAbout": doctor.keywords // Using keywords to show expertise
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
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        </>
    );
};


// Main layout component to render the page and inject schemas
export default function DoctorLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { Doctor_Name: string };
}) {
    return (
        <>
            <CombinedSchema params={params} />
            {children}
        </>
    );
}
