import { GetBlogs } from "@/app/blogs/api/get-blogs";
import { clinics } from "@/components/data/clinics";
import { Doctors } from "@/components/data/doctors";
import { conditions } from "@/components/data/conditions";
import { AllTreatments } from "@/components/data/treatments";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Helper function to ensure valid slugs
function isValidSlug(slug: string | undefined | null): boolean {
  if (!slug) return false;
  const invalid = ["undefined", "null", "faqs", ""];
  return !invalid.includes(slug);
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

const BackPainAreas = conditions.filter((condition) =>
  [
    "degenerativediscdisease",
    "lower-back-pain",
    "lumbar-herniateddisc",
    "foraminal-stenosis",
    "sciatica",
    "coccydynia",
  ].includes(condition.slug)
);

const NeckPainAreas = conditions.filter((condition) =>
  [
    "cervical-spinal-stenosis",
    "cervical-herniated-disc",
    "degenerativediscdisease",
    "arthritis",
    "pinched-nerve",
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
  "ankle-replacement",
  "diabetic-foot-ulcers"
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
  if (!baseUrl) {
    console.error("FATAL: NEXT_PUBLIC_BASE_URL is not defined. Sitemap cannot be generated correctly.");
    return new Response("Server configuration error: Base URL not set. Sitemap generation failed.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }

  let blogsData: any[] = []; // Initialize with an empty array for type safety
  try {
    const fetchedBlogs = await GetBlogs();
    // Ensure that GetBlogs returns an array before assigning it
    if (Array.isArray(fetchedBlogs)) {
      blogsData = fetchedBlogs;
    } else {
      console.warn("Warning: GetBlogs did not return an array. Received:", fetchedBlogs, ". Proceeding with empty blogs list for sitemap.");
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
    // Proceed with an empty blogsData array; sitemap will be generated without blog entries.
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${generateUrlEntry("/about")}
  ${generateUrlEntry("/about/FAQs")}

  ${clinics.map( clinic => generateUrlEntry(`/locations/${clinic.slug}`)).join('')}

  ${generateUrlEntry("/condition-check")}
  ${generateUrlEntry("/area-of-pain/back-pain/backpaintreatmentoptions")}
  ${generateUrlEntry("/area-of-pain/neck-and-shoulder-pain/neckandshoulderpaintreatments")}

  ${FindCare.map(findCare => generateUrlEntry(`/find-care/${findCare}`)).join('')}

  ${Doctors.filter(doctor => isValidSlug(doctor.slug))
    .map(doctor => generateUrlEntry(`/about/meetourdoctors/${doctor.slug}`))
    .join('')}

  ${conditions.filter(condition => isValidSlug(condition.slug))
    .map(condition => generateUrlEntry(`/area-of-speciality/${condition.slug}`))
    .join('')}

  ${FootAnkleConditions.filter(isValidSlug)
    .map(slug => generateUrlEntry(`/area-of-pain/foot-pain/${slug}`))
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

  ${blogsData
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
