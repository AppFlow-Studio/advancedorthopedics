// components/TreatmentsItemListSchema.tsx
import { AllTreatments, allTreatmentContent } from '@/components/data/treatments';
import { buildCanonical } from '@/lib/seo';

export function TreatmentsItemListSchema() {
  // Combine both old and new format treatments for the ItemList
  const allTreatments = [
    ...AllTreatments,
    ...allTreatmentContent
  ];
  
  const baseUrl = 'https://mountainspineorthopedics.com';
  const pageUrl = buildCanonical('/treatments');
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
        "name": "Treatments",
        "item": pageUrl
      }
    ]
  };

  // 2. ItemList Schema (Enhanced with @id)
  const itemList = {
    "@type": "ItemList",
    "@id": `${pageUrl}#treatments`,
    "name": "Orthopedic Treatments and Procedures",
    "description": "A comprehensive list of minimally invasive orthopedic and spine treatments offered by Mountain Spine & Orthopedics. Includes pain management, injections, and advanced surgical procedures.",
    "url": pageUrl,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "numberOfItems": allTreatments.length,
    "itemListElement": allTreatments.map((treatment, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "MedicalProcedure",
        "@id": buildCanonical(`/treatments/${treatment.slug}`),
        "name": treatment.title,
        "description": 'body' in treatment ? treatment.body : (treatment as any).overview?.body || treatment.title,
        "url": buildCanonical(`/treatments/${treatment.slug}`),
      }
    })),
  };

  // 3. CollectionPage Schema
  const collectionPage = {
    "@type": "CollectionPage",
    "@id": `${pageUrl}#collectionpage`,
    "url": pageUrl,
    "name": "Orthopedic Treatments & Procedures | Mountain Spine & Orthopedics",
    "description": "Comprehensive range of minimally invasive orthopedic and spine treatments including pain management, injections, and advanced surgical procedures. Expert care for back pain, neck pain, joint conditions, and sports injuries.",
    "breadcrumb": {
      "@id": `${pageUrl}#breadcrumb`
    },
    "mainEntity": {
      "@id": `${pageUrl}#treatments`
    },
    "isPartOf": {
      "@id": `${baseUrl}#website`
    }
  };

  // 4. Service Schema (Critical for GBP Services menu validation)
  const serviceSchema = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": "Orthopedic Treatment Services",
    "description": "Expert orthopedic and spine treatment services including minimally invasive procedures, pain management, injections, and surgical interventions. Comprehensive care for conditions affecting the spine, joints, and musculoskeletal system.",
    "url": pageUrl,
    "provider": {
      "@id": organizationId
    },
    "serviceType": [
      "Orthopedic Treatment",
      "Spine Surgery",
      "Pain Management",
      "Minimally Invasive Procedures",
      "Joint Replacement",
      "Arthroscopy",
      "Spinal Fusion",
      "Discectomy"
    ],
    "areaServed": {
      "@type": "State",
      "name": "Florida"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Orthopedic Treatment Services",
      "itemListElement": {
        "@type": "ItemList",
        "@id": `${pageUrl}#treatments`
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

