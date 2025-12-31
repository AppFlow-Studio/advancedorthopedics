// components/ConditionsItemListSchema.tsx
import { conditions, conditionContentPlaceholders } from '@/components/data/conditions';
import { buildCanonical } from '@/lib/seo';

export function ConditionsItemListSchema() {
  // Combine both old and new format conditions for the ItemList
  const allConditions = [
    ...conditions,
    ...conditionContentPlaceholders
  ];
  
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Orthopedic and Spine Conditions Treated",
    "description": "A comprehensive guide to the spine, joint, and musculoskeletal conditions treated by the specialists at Mountain Spine & Orthopedics.",
    "url": buildCanonical('/area-of-specialty'),
    "numberOfItems": allConditions.length,
    "itemListElement": allConditions.map((condition, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalCondition",
        "@id": buildCanonical(`/area-of-specialty/${condition.slug}`), // Unique ID
        "name": condition.title,
        "description": 'body' in condition ? condition.body : (condition as any).overview?.body || condition.title,
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

