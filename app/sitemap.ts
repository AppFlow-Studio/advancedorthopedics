import { MetadataRoute } from "next";
import { GetBlogs } from "./blogs/api/get-blogs";
import { clinics } from "@/components/data/clinics";
import { Doctors } from "@/components/data/doctors";
import { Conditions } from "@/components/data/conditions";
import { AllTreatments } from "@/components/data/treatments";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;   

const BackPainAreas = Conditions.filter(( condition ) => 
    condition.slug === "degenerativediscdisease" || condition.slug == "lowerbackpain" || condition.slug == "lumbarherniateddisc" || condition.slug == ""
    || condition.slug == "foraminal-stenosis" || condition.slug == "sciatica" || condition.slug == "coccydynia"
);

const NeckPainAreas = Conditions.filter(( condition ) => 
    condition.slug === "cervicalspinalstenosis" || condition.slug == "cervicalherniateddisc" || condition.slug == "degenerativediscdisease" || condition.slug == "cervicalradiculopathy"
    || condition.slug == "arthritis" || condition.slug == "pinchednerve"
);

const FindCare = ["book-an-appointment", "find-a-doctor", "second-opinion", "free-mri-review", "candidacy-check", "insurance-policy", "patient-forms"];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const blogs = await GetBlogs();
    const clinicsUrls = clinics.map((clinic) => ({
        url: `${baseUrl}/clinics/${clinic.id}`,
        lastModified: '2025-05-17',
        changeFrequency: "yearly",
        priority: 0.8,
    })).flat() as MetadataRoute.Sitemap;

    const blogUrls = blogs.map((blog) => ({
        url: `${baseUrl}/blogs/${blog.id}`,
        lastModified: blog.modified_at,
        changeFrequency: "monthly",
        priority: 0.8,
    })).flat() as MetadataRoute.Sitemap;

   const doctorsUrls = Doctors.map((doctor) => ({
    url: `${baseUrl}/about/meetourdoctors/${doctor.slug}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
   const conditionsUrls = Conditions.map((condition) => ({
    url: `${baseUrl}/area-of-speciality/${condition.slug}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
   const treatmentsUrl = AllTreatments.map((treatment) => ({
    url: `${baseUrl}/treatments/${treatment.slug}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
   const backPainAreasUrls = BackPainAreas.map((backPainArea) => ({
    url: `${baseUrl}/area-of-pain/back-pain/${backPainArea.slug}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;

   const neckPainAreaUrls = NeckPainAreas.map((neckPainArea) => ({
    url: `${baseUrl}/area-of-pain/neck-and-shoulder-pain/${neckPainArea.slug}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
   const LocationsUrls = clinics.map((clinic) => ({
    url: `${baseUrl}/clinics/${clinic.id}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
   const FindCareUrls = FindCare.map((findCare) => ({
    url: `${baseUrl}/${findCare}`,
    lastModified: '2025-05-17',
    changeFrequency: "yearly",
    priority: 0.8,
   })).flat() as MetadataRoute.Sitemap;
   
    return [
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/condition-check`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url : `${baseUrl}/area-of-pain/back-pain/backpaintreatmentoptions`,
            lastModified: '2025-05-17',
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url : `${baseUrl}/area-of-pain/neck-and-shoulder-pain//neckandshouldertreatmentoptions`,
            lastModified: '2025-05-17',
            changeFrequency: "yearly",
            priority: 0.8,
        },
        {
            url : `${baseUrl}/area-of-pain/leg-pain/legpaintreatmentoptions`,
            lastModified: '2025-05-17',
            changeFrequency: "yearly",
            priority: 0.8,
        },

        ...FindCareUrls,
        ...clinicsUrls,
        ...doctorsUrls,
        ...conditionsUrls,
        ...treatmentsUrl,
        ...backPainAreasUrls,
        ...neckPainAreaUrls,
        ...LocationsUrls,
        
        ...blogUrls,
    ]
}