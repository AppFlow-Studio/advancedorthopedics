import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";
import StaticNav from "@/components/StaticNav.server";
import OrphanLinksFooter from '@/components/OrphanLinksFooter';
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// This function dynamically generates metadata for each location page.
export async function generateMetadata(
    { params }: { params: { locationname: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // Await params in case it's a Promise (Next.js 14+ dynamic route requirement)
    const resolvedParams = await params;
    // Find the specific clinic data based on the URL slug
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    // If no matching location is found, return default metadata.
    if (!location) {
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
        };
    }

    const canonicalUrl = buildCanonical(`/locations/${location.slug}`);
    const ogImage = getOgImageForPath('/locations');

    // Extract city name from location data
    const cityName = location.region.split(',')[0].trim();
    
    // Create consistent title format
    const consistentTitle = `Orthopedic & Spine Care in ${cityName}, FL | Mountain Spine & Orthopedics`;
    
    // Create consistent description format
    const consistentDescription = `Experience minimally invasive spine & orthopedic care in ${cityName}, FL—board-certified surgeons, on-site imaging, and same-day appointments at Mountain Spine & Orthopedics.`;
    
    // --- SEO ENHANCEMENT: Integrating Homepage SEO Structure ---
    return {
      title: consistentTitle,
      description: consistentDescription,
      keywords: location.keywords,

      alternates: {
        canonical: canonicalUrl,
      },

      openGraph: {
        title: consistentTitle,
        description: consistentDescription,
        url: canonicalUrl,
        siteName: 'Mountain Spine & Orthopedics',
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `A view of the Mountain Spine & Orthopedics clinic in ${location.region}`,
          },
        ],
        locale: 'en_US',
        type: 'website', // or 'MedicalClinic' could also be appropriate
      },

      twitter: {
        card: 'summary_large_image',
        title: consistentTitle,
        description: consistentDescription,
        images: [ogImage],
      },
    };
}

// --- SEO ENHANCEMENT: DYNAMIC JSON-LD SCHEMA FOR EACH CLINIC ---
// This component generates a unique schema for each medical clinic location.
const LocationJsonLdSchema = async ({ params }: { params: { locationname: string } }) => {
    const resolvedParams = await params;
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    if (!location) {
        return null;
    }

    // Split address for the schema
    const addressParts = location.address.split(', ');
    const streetAddress = addressParts[0];
    const addressLocality = addressParts[1];
    const addressRegion = addressParts.length > 2 ? addressParts[2].split(' ')[0] : 'FL';
    const postalCode = addressParts.length > 2 ? addressParts[2].split(' ')[1] : '';

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic', // More specific than MedicalOrganization for a location page
      'name': location.name,
      'description': location.metaDescription,
      'url': `https://mountainspineorthopedics.com/locations/${location.slug}`,
      'telephone': location.phone,
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': streetAddress,
        'addressLocality': addressLocality,
        'addressRegion': addressRegion,
        'postalCode': postalCode,
        'addressCountry': 'US'
      },
      'geo': {
          '@type': 'GeoCoordinates',
          'latitude': location.lat,
          'longitude': location.lng
      },
      // This links each clinic back to the main organization
      'parentOrganization': {
          '@type': 'MedicalOrganization',
          'name': 'Mountain Spine & Orthopedics',
          'url': 'https://mountainspineorthopedics.com/'
      },
      // Add a generic image or create a location-specific one
      'image': 'https://mountainspineorthopedics.com/locations_og.png',
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };

// This is the layout component that will wrap the page.
// We inject the JSON-LD schema here.
export default function LocationLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { locationname: string };
}) {
    return (
        <>
            <StaticNav />
            {/* Await the async LocationJsonLdSchema and render it */}
            {/* @ts-expect-error Async Server Component */}
            <LocationJsonLdSchema params={params} />
            {children}
            <OrphanLinksFooter /> {/* sr-only, zero visual impact */}
        </>
    );
}
