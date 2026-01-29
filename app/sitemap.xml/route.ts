import { clinics } from "@/components/data/clinics";
import { Doctors } from "@/components/data/doctors";
import { conditions, conditionContentPlaceholders } from "@/components/data/conditions";
import { AllTreatmentsCombined } from "@/components/data/treatments";
import { BODY_PARTS } from "@/components/data/bodyParts";
import { GetBlogsPublic } from "@/app/blogs/api/get-blogs";
import { VALID_STATE_SLUGS } from "@/lib/locationRedirects";
import { generateSitemapEntry, wrapInUrlset } from "@/lib/sitemap-utils";

export const revalidate = 3600;

/**
 * Comprehensive Sitemap
 * 
 * SEO Best Practices Applied:
 * - No <changefreq> or <priority> tags (Google ignores these)
 * - <lastmod> only included when accurate data is available
 * - Consistent ISO 8601 date format
 * - Only canonical URLs (no area-of-pain duplicates)
 * - All URLs return 200 status
 */

const staticPages = [
  "/",
  "/about",
  "/about/faqs",
  "/condition-check",
  "/privacy-policy",
  "/conditions",
  "/treatments",
  "/locations",
  "/blogs",
  "/find-care/book-an-appointment",
  "/find-care/find-a-doctor",
  "/find-care/free-mri-review",
  "/find-care/candidacy-check",
  "/find-care/second-opinion",
  "/insurance-policy",
  "/patient-forms",
  "/injuries/car-accident",
  "/injuries/slip-and-fall",
  "/injuries/work-injury",
  "/injuries/personal-injury",
];

export async function GET() {
  // 1. Static pages
  const staticUrls = staticPages
    .map((path) => generateSitemapEntry(path))
    .join("");

  // 2. Location pages (state hubs + individual clinics)
  const stateHubUrls = VALID_STATE_SLUGS
    .map((state) => generateSitemapEntry(`/locations/${state}`))
    .join("");

  const clinicUrls = clinics
    .map((clinic) =>
      generateSitemapEntry(
        `/locations/${clinic.stateSlug}/${clinic.locationSlug}`,
        clinic.updatedAt
      )
    )
    .join("");

  // 3. Doctor pages
  const doctorUrls = Doctors
    .filter((doctor) => doctor.slug && doctor.slug !== "undefined")
    .map((doctor) =>
      generateSitemapEntry(`/about/meetourdoctors/${doctor.slug}`, doctor.updatedAt)
    )
    .join("");

  // 4. Condition pages (body part hubs + individual conditions)
  const allConditions = [...conditions, ...conditionContentPlaceholders];
  
  const bodyPartHubUrls = BODY_PARTS
    .map((bodyPart) => generateSitemapEntry(`/conditions/${bodyPart.slug}`))
    .join("");

  const conditionUrls = allConditions
    .filter((c) => c.slug && c.slug !== "undefined")
    .map((condition) =>
      generateSitemapEntry(`/conditions/${condition.slug}`, condition.updatedAt)
    )
    .join("");

  // 5. Treatment pages
  const treatmentUrls = AllTreatmentsCombined
    .filter((treatment) => treatment.slug && treatment.slug !== "undefined")
    .map((treatment) =>
      generateSitemapEntry(`/treatments/${treatment.slug}`, treatment.updatedAt)
    )
    .join("");

  // 6. Blog pages (fetched from Supabase)
  let blogUrls = "";
  try {
    const blogsData = await GetBlogsPublic();
    blogUrls = (blogsData || [])
      .filter((blog) => blog?.slug)
      .map((blog) =>
        generateSitemapEntry(`/blogs/${blog.slug}`, blog.modified_at || blog.created_at)
      )
      .join("");
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }

  // Combine all URLs
  const allUrls = [
    staticUrls,
    stateHubUrls,
    clinicUrls,
    doctorUrls,
    bodyPartHubUrls,
    conditionUrls,
    treatmentUrls,
    blogUrls,
  ].join("");

  return new Response(wrapInUrlset(allUrls), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=59",
    },
  });
}
