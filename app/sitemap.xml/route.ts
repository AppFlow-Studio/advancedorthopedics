import { GetBlogs } from "@/app/blogs/api/get-blogs";
import { clinics } from "@/components/data/clinics";
import { Doctors } from "@/components/data/doctors";
import { Conditions } from "@/components/data/conditions";
import { AllTreatments } from "@/components/data/treatments";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Helper function to ensure valid slugs
function isValidSlug(slug: string | undefined): boolean {
  return !!slug && slug !== "undefined" && slug !== "faqs" && !slug.includes("www");
}

// Helper function to generate URL entry
function generateUrlEntry(path: string, lastmod: string = new Date().toISOString(), changefreq: string = "yearly", priority: string = "0.8") {
  return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

const BackPainAreas = Conditions.filter((condition) =>
  [
    "degenerativediscdisease",
    "lowerbackpain",
    "lumbarherniateddisc",
    "foraminal-stenosis",
    "sciatica",
    "coccydynia",
  ].includes(condition.slug)
);

const NeckPainAreas = Conditions.filter((condition) =>
  [
    "cervicalspinalstenosis",
    "cervicalherniateddisc",
    "degenerativediscdisease",
    "cervicalradiculopathy",
    "arthritis",
    "pinchednerve",
  ].includes(condition.slug)
);

// Foot & Ankle conditions
const FootAnkleConditions = [
  "bunion",
  "plantar-fasciitis",
  "achilles-tendonitis",
  "flat-feet",
  "ankle-arthroscopy",
  "hammertoes",
];

const FindCare = [
  "book-an-appointment",
  "find-a-doctor",
  "second-opinion",
  "free-mri-review",
  "candidacy-check",
  "insurance-policy",
  "patient-forms",
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .replace(/-+/g, "-");
}

export async function GET() {
  const blogs = await GetBlogs();

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${generateUrlEntry("/about")}
  ${generateUrlEntry("/about/FAQs")}

  ${Array.from({ length: 8 }, (_, i) => generateUrlEntry(`/locations/${i + 1}`)).join('')}

  ${generateUrlEntry("/condition-check")}
  ${generateUrlEntry("/area-of-pain/back-pain/backpaintreatmentoptions")}
  ${generateUrlEntry("/area-of-pain/neck-and-shoulder-pain/neckandshouldertreatments")}

  ${FindCare.map(findCare => generateUrlEntry(`/find-care/${findCare}`)).join('')}

  ${Doctors.filter(doctor => isValidSlug(doctor.slug))
    .map(doctor => generateUrlEntry(`/about/meetourdoctors/${doctor.slug}`))
    .join('')}

  ${Conditions.filter(condition => isValidSlug(condition.slug))
    .map(condition => generateUrlEntry(`/area-of-speciality/${condition.slug}`))
    .join('')}

  ${FootAnkleConditions.filter(isValidSlug)
    .map(slug => generateUrlEntry(`/area-of-speciality/${slug}`))
    .join('')}

  ${AllTreatments.filter(treatment => isValidSlug(treatment.slug))
    .map(treatment => generateUrlEntry(`/treatments/${treatment.slug}`))
    .join('')}

  ${BackPainAreas.filter(condition => isValidSlug(condition.slug))
    .map(condition => generateUrlEntry(`/area-of-pain/back-pain/${condition.slug}`))
    .join('')}

  ${NeckPainAreas.filter(condition => isValidSlug(condition.slug))
    .map(condition => generateUrlEntry(`/area-of-pain/neck-and-shoulder-pain/${condition.slug}`))
    .join('')}

  ${blogs
    .filter(blog => isValidSlug(blog?.id) && blog?.blog_info?.title)
    .map(blog => generateUrlEntry(`/blogs/${blog.id}`, blog.modified_at, "monthly"))
    .join('')}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
