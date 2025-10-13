import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

// This function dynamically generates metadata for each location page.
export async function generateMetadata(
    { params }: { params: Promise<{ locationname: string }> },
    parent: ResolvingMetadata
): Promise<Metadata> {
    // Await params in case it's a Promise (Next.js 14+ dynamic route requirement)
    const resolvedParams = await params;
    // Find the specific clinic data based on the URL slug
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    // If no matching location is found, return default metadata.
    if (!location) {
        const canonicalUrl = buildCanonical(`/locations/${resolvedParams.locationname}`);
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
            alternates: {
                canonical: canonicalUrl,
            },
        };
    }

    const canonicalUrl = buildCanonical(`/locations/${location.slug}`);
    const ogImage = getOgImageForPath('/locations');

    // Extract city name from location data
    const cityName = location.region.split(',')[0].trim();
    
    // Create consistent title format
    const consistentTitle = safeTitle(location.metaTitle, `Mountain Spine & Orthopedics in ${cityName}, FL | Official Site`);
    
    // Use FULL meta description directly (no truncation for location pages)
    const consistentDescription = location.metaDescription || `Trusted orthopedic care in ${cityName}, FL—board-certified surgeons, compassionate staff, and convenient appointments at Mountain Spine & Orthopedics.`;
    
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
const LocationJsonLdSchema = async ({ params }: { params: Promise<{ locationname: string }> }) => {
    const resolvedParams = await params;
    const location = clinics.find(clinic => clinic.slug === resolvedParams.locationname);

    if (!location) {
        return null;
    }

    // Robust address parsing for schema
    // This function reliably parses US addresses into schema components.
    const parseAddress = (fullAddress: string) => {
        const addressParts = fullAddress.split(', ');
        
        let streetAddress = fullAddress;
        let addressLocality = '';
        let addressRegion = 'FL';
        let postalCode = '';

        if (addressParts.length >= 2) {
            // Handles formats like "Street, City, State ZIP" or "Street, City"
            streetAddress = addressParts[0];
            addressLocality = addressParts[1];

            if (addressParts.length === 3) {
                const stateZip = addressParts[2].split(' ');
                addressRegion = stateZip[0];
                postalCode = stateZip[1];
            }
        } else if (addressParts.length === 1) {
            // Fallback for formats like "Street City State ZIP" without commas
            const stateMatch = fullAddress.match(/\b([A-Z]{2})\s+(\d{5}(?:-\d{4})?)\s*$/);
            if (stateMatch) {
                addressRegion = stateMatch[1];
                postalCode = stateMatch[2];
                const cityAndStreet = fullAddress.substring(0, stateMatch.index).trim();
                const lastSpaceIndex = cityAndStreet.lastIndexOf(' ');
                
                if (lastSpaceIndex > -1) {
                    streetAddress = cityAndStreet.substring(0, lastSpaceIndex);
                    addressLocality = cityAndStreet.substring(lastSpaceIndex + 1);
                }
            }
        }

        return { streetAddress, addressLocality, addressRegion, postalCode };
    };
    
    const { streetAddress, addressLocality, addressRegion, postalCode } = parseAddress(location.address);

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
export default async function LocationLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locationname: string }>;
}) {
    return (
        <>
            {/* Await the async LocationJsonLdSchema and render it */}
            {/* @ts-expect-error Async Server Component */}
            <LocationJsonLdSchema params={params} />
            {children}
        </>
    );
}

