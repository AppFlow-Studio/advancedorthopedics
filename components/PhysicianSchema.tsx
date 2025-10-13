import { DoctorProp } from './data/doctors';

interface PhysicianSchemaProps {
  doctors: DoctorProp[];
  wrapInItemList?: boolean;
}

/**
 * Reusable Physician Schema Component
 * Generates JSON-LD schema for physician(s) to improve SEO and Knowledge Graph presence
 * 
 * @param doctors - Array of doctor objects to generate schema for
 * @param wrapInItemList - If true, wraps physicians in an ItemList (useful for listing pages)
 */
export default function PhysicianSchema({ doctors, wrapInItemList = false }: PhysicianSchemaProps) {
  const generatePhysicianSchema = (doctor: DoctorProp) => ({
    "@type": "Physician",
    "name": doctor.name,
    "image": `https://mountainspineorthopedics.com${doctor.img.src}`,
    "url": `https://mountainspineorthopedics.com/about/meetourdoctors/${doctor.slug}`,
    "jobTitle": doctor.practice,
    "medicalSpecialty": doctor.medicalSpecialty, // DYNAMIC from data
    "knowsAbout": doctor.specialties, // DYNAMIC & SPECIFIC from data
    "worksFor": {
      "@type": "MedicalOrganization",
      "name": "Mountain Spine & Orthopedics",
      "url": "https://mountainspineorthopedics.com"
    },
    "description": doctor.short_bio || doctor.desc,
    "sameAs": doctor.sameAs // DYNAMIC E-E-A-T SIGNAL from data
  });

  let schema;

  if (wrapInItemList) {
    // For listing pages (About, Find a Doctor)
    schema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": doctors.map((doctor, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": generatePhysicianSchema(doctor)
      }))
    };
  } else {
    // For single doctor pages or arrays of physicians
    schema = doctors.length === 1
      ? {
          "@context": "https://schema.org",
          ...generatePhysicianSchema(doctors[0])
        }
      : {
          "@context": "https://schema.org",
          "@graph": doctors.map(doctor => generatePhysicianSchema(doctor))
        };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

