import { ClinicsProps } from '@/components/data/clinics';
import { buildCanonical } from '@/lib/seo';

export function LocationItemListSchema({ clinics }: { clinics: ClinicsProps[] }) {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Mountain Spine & Orthopedics Clinic Locations",
    "description": "Find all official clinic locations for Mountain Spine & Orthopedics throughout Florida for expert spine and joint care.",
    "url": buildCanonical('/locations'),
    "itemListElement": clinics.map((clinic, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalClinic",
        "@id": buildCanonical(`/locations/${clinic.slug}`), // Unique ID for this clinic
        "name": clinic.name,
        "url": buildCanonical(`/locations/${clinic.slug}`),
        "address": {
          "@type": "PostalAddress",
          "streetAddress": clinic.address.split(',')[0],
          "addressLocality": clinic.region.split(',')[0],
          "addressRegion": "FL",
          "addressCountry": "US"
        },
        "telephone": clinic.phone,
      }
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
    />
  );
}
