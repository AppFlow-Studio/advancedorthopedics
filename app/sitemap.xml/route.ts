import { GetBlogs } from "../blogs/api/get-blogs";
import { clinics } from "@/components/data/clinics";
import { Doctors } from "@/components/data/doctors";
import { Conditions } from "@/components/data/conditions";
import { AllTreatments } from "@/components/data/treatments";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

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
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/about/FAQs</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  ${clinics.filter(clinic => clinic?.name).map(clinic => `
    <url>
      <loc>${baseUrl}/locations/${slugify(clinic.name)}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  <url>
    <loc>${baseUrl}/condition-check</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/area-of-pain/back-pain/backpaintreatmentoptions</loc>
    <lastmod>2025-05-17</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/area-of-pain/neck-and-shoulder-pain/neckandshouldertreatments</loc>
    <lastmod>2025-05-17</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>
  ${FindCare.map(findCare => `
    <url>
      <loc>${baseUrl}/find-care/${findCare}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${Doctors.filter(doctor => doctor?.slug).map(doctor => `
    <url>
      <loc>${baseUrl}/about/meetourdoctors/${doctor.slug}</loc>
      <lastmod>2025-05-17</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${Conditions.filter(condition => condition?.slug).map(condition => `
    <url>
      <loc>${baseUrl}/area-of-speciality/${condition.slug}</loc>
      <lastmod>2025-05-17</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${AllTreatments.filter(treatment => treatment?.slug).map(treatment => `
    <url>
      <loc>${baseUrl}/treatments/${treatment.slug}</loc>
      <lastmod>2025-05-17</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${BackPainAreas.map(backPainArea => `
    <url>
      <loc>${baseUrl}/area-of-pain/back-pain/${backPainArea.slug}</loc>
      <lastmod>2025-05-17</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${NeckPainAreas.map(neckPainArea => `
    <url>
      <loc>${baseUrl}/area-of-pain/neck-and-shoulder-pain/${neckPainArea.slug}</loc>
      <lastmod>2025-05-17</lastmod>
      <changefreq>yearly</changefreq>
      <priority>0.8</priority>
    </url>`).join('')}
  ${blogs
    .filter(blog => blog?.id && blog?.blog_info?.title && blog.id !== 'undefined' && blog.id !== 'faqs')
    .map(blog => `
      <url>
        <loc>${baseUrl}/blogs/${blog.id}</loc>
        <lastmod>${blog.modified_at || new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>`).join('')}
</urlset>`;

  return new Response(xmlContent, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
