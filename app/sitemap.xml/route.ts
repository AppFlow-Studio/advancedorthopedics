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

// Helper function to create SEO-friendly slugs from titles
function slugify(text: string): string {
  if (!text) return "";
  return text
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-") 
    .replace(/^-+|-+$/g, "")    
    .replace(/-+/g, "-");
}

const FindCare = [
  "book-an-appointment",
  "find-a-doctor",
  "second-opinion",
  "free-mri-review",
  "candidacy-check",
  "insurance-policy",
  "patient-forms",
];

const BackPainPages =[
"lower-back-pain",
'degenerativediscdisease',
'lumbar-herniated-disc',
'foraminal-stenosis',
'sciatica',
'coccydynia',
'backpaintreatmentoptions'
]

const NeckPainPages = [
  'cervical-spinal-stenosis',
  'cervical-herniated-disc',
  'degenerative-disc-disease',
  'arthritis',
  'pinched-nerve',
  'neckandshoulderpaintreatments',
];


const FootPainPages =[
  'bunions-hallux-valgus',
  'plantar-fasciitis',
  'flat-feet',
  'ankle-arthroscopy',
  'hammertoes',
  'diabetic-foot-ulcers',
  'ankle-replacement'
]

export async function GET() {
  if (!baseUrl) {
    console.error("FATAL: NEXT_PUBLIC_BASE_URL is not defined. Sitemap cannot be generated correctly.");
    return new Response("Server configuration error: Base URL not set. Sitemap generation failed.", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }

  let blogsData: any[] = [];
  try {
    const fetchedBlogs = await GetBlogs();
    if (Array.isArray(fetchedBlogs)) {
      blogsData = fetchedBlogs;
    } else {
      console.warn("Warning: GetBlogs did not return an array. Proceeding with empty blogs list for sitemap.");
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  const xmlContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  // --- Static Pages ---
  ${generateUrlEntry("/")}
  ${generateUrlEntry("/about")}
  ${generateUrlEntry("/about/FAQs")}
  ${generateUrlEntry("/condition-check")}
  // --- Dynamic Pages from Data ---

  ${clinics.map(clinic => generateUrlEntry(`/locations/${clinic.slug}`)).join('')}
  
  // CORRECTED: Logic to handle the two special-case URLs for insurance and patient forms
  ${FindCare.map(slug => {
    if (slug === 'insurance-policy' || slug === 'patient-forms') {
      return generateUrlEntry(`/${slug}`);
    }
    return generateUrlEntry(`/find-care/${slug}`);
  }).join('')}

  ${BackPainPages.map(slug => generateUrlEntry(`/area-of-pain/back-pain/${slug}`)).join('')}
  ${NeckPainPages.map(slug => generateUrlEntry(`/area-of-pain/neck-and-shoulder-pain/${slug}`)).join('')} 
  ${FootPainPages.map(slug => generateUrlEntry(`/area-of-pain/foot-pain/${slug}`)).join('')}

  ${Doctors.filter(doctor => isValidSlug(doctor.slug))
    .map(doctor => generateUrlEntry(`/about/meetourdoctors/${doctor.slug}`))
    .join('')}

  // CORRECTED: Only generating the canonical /area-of-speciality/ URLs to avoid duplicate content
  ${conditions.filter(condition => isValidSlug(condition.slug))
    .map(condition => generateUrlEntry(`/area-of-speciality/${condition.slug}`))
    .join('')}

  ${AllTreatments.filter(treatment => isValidSlug(treatment.slug))
    .map(treatment => generateUrlEntry(`/treatments/${treatment.slug}`))
    .join('')}

  // CORRECTED: Blog URLs generated from a title/slug field instead of a generic ID
  ${blogsData
    .filter(blog => blog?.blog_info?.title)
    .map(blog => generateUrlEntry(`/blogs/${slugify(blog.blog_info.title)}`, blog.modified_at, "monthly"))
    .join('')}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
