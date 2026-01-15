// components/ConditionsItemListSchema.tsx
import { conditions, conditionContentPlaceholders } from '@/components/data/conditions';
import { buildCanonical } from '@/lib/seo';

export function ConditionsItemListSchema() {
  // Combine both old and new format conditions for the ItemList
  const allConditions = [
    ...conditions,
    ...conditionContentPlaceholders
  ];
  
  const baseUrl = 'https://mountainspineorthopedics.com';
  const pageUrl = buildCanonical('/conditions');
  const organizationId = `${baseUrl}#medicalorganization`;

  // 1. BreadcrumbList Schema
  const breadcrumbList = {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}#breadcrumb`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `${baseUrl}/`
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Conditions We Treat",
        "item": pageUrl
      }
    ]
  };

  // 2. ItemList Schema (Enhanced with @id)
  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#conditions`,
    "name": "Orthopedic and Spine Conditions Treated",
    "description": "A comprehensive guide to the spine, joint, and musculoskeletal conditions treated by the specialists at Mountain Spine & Orthopedics.",
    "url": pageUrl,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "numberOfItems": allConditions.length,
    "itemListElement": allConditions.map((condition, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalCondition",
        "@id": buildCanonical(`/conditions/${condition.slug}`),
        "name": condition.title,
        "description": 'body' in condition ? condition.body : (condition as any).overview?.body || condition.title,
        "url": buildCanonical(`/conditions/${condition.slug}`),
      }
    })),
  };

  // 3. CollectionPage Schema
  const collectionPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collectionpage`,
    "url": pageUrl,
    "name": "Orthopedic Conditions We Treat | Spine & Joint Specialists",
    "description": "Explore orthopedic conditions we treat, including spine, joint, and nerve-related pain. Learn symptoms, causes, and treatment pathways guided by specialists.",
    "breadcrumb": {
      "@id": `${pageUrl}#breadcrumb`
    },
    "mainEntity": {
      "@id": `${pageUrl}#conditions`
    },
    "isPartOf": {
      "@id": `${baseUrl}#website`
    }
  };

  // 4. Service Schema (Critical for GBP Services menu validation)
  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": "Orthopedic Condition Diagnosis & Treatment",
    "description": "Expert diagnosis and treatment services for spine, joint, and musculoskeletal conditions. Comprehensive care including conservative treatments and advanced minimally invasive surgical options.",
    "url": pageUrl,
    "provider": {
      "@id": organizationId
    },
    "serviceType": [
      "Orthopedic Care",
      "Spine Care",
      "Pain Management",
      "Joint Care",
      "Nerve Condition Treatment",
      "Musculoskeletal Care"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Orthopedic Conditions Treated",
      "itemListElement": {
        "@type": "ItemList",
        "@id": `${pageUrl}#conditions`
      }
    }
  };

  // Return consolidated @graph schema
  const consolidatedSchema = {
    "@context": "https://schema.org",
    "@graph": [
      breadcrumbList,
      collectionPage,
      serviceSchema,
      itemList
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(consolidatedSchema) }}
    />
  );
}

