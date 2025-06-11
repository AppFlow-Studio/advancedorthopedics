import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";

// This function dynamically generates metadata for each location page.
export async function generateMetadata(
    { params }: { params: { locationname: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    // Find the specific clinic data based on the URL slug
    const location = clinics.find(clinic => clinic.slug === params.locationname);

    // If no matching location is found, return default metadata.
    if (!location) {
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
        };
    }

    const locationUrl = `https://mountainspineorthopedics.com/locations/${location.slug}`;

    // --- SEO ENHANCEMENT: Integrating Homepage SEO Structure ---
    return {
      metadataBase: new URL('https://mountainspineorthopedics.com'), // Important for resolving relative image paths
      title: location.metaTitle,
      description: location.metaDescription,
      keywords: location.keywords,

      alternates: {
        canonical: locationUrl,
      },

      openGraph: {
        title: location.metaTitle,
        description: location.metaDescription,
        url: locationUrl,
        siteName: 'Mountain Spine & Orthopedics',
        // Assuming a generic OG image, but you could add a specific one per location in clinics.tsx
        images: [
          {
            url: '/og-image-locations.jpg', // Place a relevant image in your /public folder
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
        title: location.metaTitle,
        description: location.metaDescription,
        // Match the OpenGraph image
        images: ['/og-image-locations.jpg'],
      },
    };
}

// --- SEO ENHANCEMENT: DYNAMIC JSON-LD SCHEMA FOR EACH CLINIC ---
// This component generates a unique schema for each medical clinic location.
const LocationJsonLdSchema = ({ params }: { params: { locationname: string } }) => {
    const location = clinics.find(clinic => clinic.slug === params.locationname);

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
      'image': 'https://mountainspineorthopedics.com/og-image-locations.jpg',
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
            <LocationJsonLdSchema params={params} />
            {children}
        </>
    );
}
