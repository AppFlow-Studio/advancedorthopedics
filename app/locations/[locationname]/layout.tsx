import { Metadata, ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";

// This function dynamically generates metadata for each location page on the server.
export async function generateMetadata(
    { params }: { params: { locationname: string } },
    parent: ResolvingMetadata
): Promise<Metadata> {

    // Find the specific clinic data based on the URL slug
    const location = clinics.find(clinic => clinic.slug === params.locationname);

    // If no matching location is found, return default metadata to prevent errors.
    if (!location) {
        return {
            title: 'Location Not Found | Mountain Spine & Orthopedics',
            description: 'The requested location could not be found. Please check the URL or navigate to our locations page to find a clinic.',
        };
    }

    const locationUrl = `https://mountainspineorthopedics.com/locations/${location.slug}`;

    // --- FINAL SEO IMPLEMENTATION ---
    // This code correctly uses your dedicated meta fields for optimal SEO.
    return {
      metadataBase: new URL('https://mountainspineorthopedics.com'), // Base URL for resolving relative image paths
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
        images: [
          {
            url: '/og-image-locations.jpg', // Ensure this image exists in your /public folder
            width: 1200,
            height: 630,
            alt: `A view of the Mountain Spine & Orthopedics clinic in ${location.region}`,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },

      twitter: {
        card: 'summary_large_image',
        title: location.metaTitle,
        description: location.metaDescription,
        images: ['/og-image-locations.jpg'], // Match the OpenGraph image
      },
    };
}

// --- DYNAMIC JSON-LD SCHEMA FOR EACH CLINIC ---
// This component generates a unique schema for each medical clinic location.
const LocationJsonLdSchema = ({ params }: { params: { locationname: string } }) => {
    const location = clinics.find(clinic => clinic.slug === params.locationname);

    if (!location) {
        return null;
    }

    // Safely split address for the schema
    const addressParts = location.address.split(', ');
    const streetAddress = addressParts[0] || '';
    const addressLocality = addressParts[1] || '';
    const regionAndPostal = (addressParts[2] || '').split(' ');
    const addressRegion = regionAndPostal[0] || 'FL';
    const postalCode = regionAndPostal[1] || '';

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'MedicalClinic',
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
      'parentOrganization': {
          '@type': 'MedicalOrganization',
          'name': 'Mountain Spine & Orthopedics',
          'url': 'https://mountainspineorthopedics.com/'
      },
      'image': 'https://mountainspineorthopedics.com/og-image-locations.jpg',
    };
  
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  };


// This is the final layout component. It renders the JSON-LD schema
// in the head and then renders the page content.
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
