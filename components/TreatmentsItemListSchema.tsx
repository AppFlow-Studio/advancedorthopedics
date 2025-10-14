// components/TreatmentsItemListSchema.tsx
import { AllTreatments } from '@/components/data/treatments';
import { buildCanonical } from '@/lib/seo';

export function TreatmentsItemListSchema() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Orthopedic Treatments and Procedures",
    "description": "A comprehensive list of minimally invasive orthopedic and spine treatments offered by Mountain Spine & Orthopedics.",
    "url": buildCanonical('/treatments'),
    "numberOfItems": AllTreatments.length,
    "itemListElement": AllTreatments.map((treatment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalProcedure",
        "@id": buildCanonical(`/treatments/${treatment.slug}`), // Unique ID
        "name": treatment.title,
        "description": treatment.body,
        "url": buildCanonical(`/treatments/${treatment.slug}`),
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

