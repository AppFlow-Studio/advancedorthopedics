// components/ConditionsItemListSchema.tsx
import { conditions } from '@/components/data/conditions';
import { buildCanonical } from '@/lib/seo';

export function ConditionsItemListSchema() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Orthopedic and Spine Conditions Treated",
    "description": "A comprehensive guide to the spine, joint, and musculoskeletal conditions treated by the specialists at Mountain Spine & Orthopedics.",
    "url": buildCanonical('/area-of-specialty'),
    "numberOfItems": conditions.length,
    "itemListElement": conditions.map((condition, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalCondition",
        "@id": buildCanonical(`/area-of-specialty/${condition.slug}`), // Unique ID
        "name": condition.title,
        "description": condition.body,
        "url": buildCanonical(`/area-of-specialty/${condition.slug}`),
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

