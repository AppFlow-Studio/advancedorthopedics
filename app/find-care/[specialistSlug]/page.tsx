import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DoctorCard from "@/components/DoctorCard";
import FAQsSection from "@/components/FaqsSection";
import StateLocationCard from "@/components/StateLocationCard";
import { clinicsForMap } from "@/components/data/clinicsForMap.generated";
import { Doctors } from "@/components/data/doctors";
import { SpecialistPages } from "@/components/data/specialists";
import { STATE_METADATA } from "@/lib/locationRedirects";

const SITE_URL = "https://mountainspineorthopedics.com";

export const dynamicParams = false;

export function generateStaticParams() {
  return SpecialistPages.map((page) => ({ specialistSlug: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ specialistSlug: string }>;
}): Promise<Metadata> {
  const { specialistSlug } = await params;
  const page = SpecialistPages.find((item) => item.slug === specialistSlug);
  if (!page) return {};

  const url = `${SITE_URL}/find-care/${page.slug}`;
  const imageUrl = new URL(page.ogImage, SITE_URL).toString();

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url,
      type: "website",
      images: [{ url: imageUrl }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.metaDescription,
      images: [imageUrl],
    },
  };
}

export default async function SpecialistPage({
  params,
}: {
  params: Promise<{ specialistSlug: string }>;
}) {
  const { specialistSlug } = await params;
  const page = SpecialistPages.find((item) => item.slug === specialistSlug);

  if (!page) notFound();

  const physicians = page.physicianSlugs
    .map((slug) => Doctors.find((doctor) => doctor.slug === slug))
    .filter((doctor): doctor is (typeof Doctors)[number] => Boolean(doctor));

  // Georgia is intentionally excluded from linked locations in this branch.
  const treatingClinics = clinicsForMap.filter(
    (clinic) => clinic.locationType === "office" && clinic.stateSlug !== "georgia",
  );

  const faqItems = page.faqs.map((faq) => ({
    question: faq.question,
    answer: <p>{faq.answer}</p>,
  }));

  const pageUrl = `${SITE_URL}/find-care/${page.slug}`;
  const physicianSchemaIds = physicians.map(
    (doctor) => `${pageUrl}#physician-${doctor.slug}`,
  );
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "@id": `${pageUrl}#webpage`,
        name: page.h1,
        description: page.metaDescription,
        url: pageUrl,
        about: {
          "@type": "MedicalCondition",
          name: page.conditionName,
        },
        audience: {
          "@type": "Patient",
        },
        lastReviewed: page.updatedAt,
        reviewedBy: physicianSchemaIds.map((id) => ({ "@id": id })),
      },
      ...physicians.map((doctor, index) => ({
        "@type": "Physician",
        "@id": physicianSchemaIds[index],
        name: doctor.name,
        medicalSpecialty: doctor.medicalSpecialty,
        url: `${SITE_URL}/about/meetourdoctors/${doctor.slug}`,
        sameAs: doctor.sameAs,
      })),
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Find Care",
            item: `${SITE_URL}/find-care/find-a-doctor`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.h1,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="w-full flex flex-col items-center justify-center bg-white h-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]">
        <div
          style={{ filter: "blur(30px)" }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src="/herosectionimg.jpg"
          priority
          fetchPriority="high"
          fill
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt={`${page.conditionName} specialist consultation at Mountain Spine & Orthopedics`}
        />
        <div
          className="w-full h-full absolute left-0 top-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)",
          }}
        />
        <div className="z-[2] flex flex-col w-full h-full text-left relative pt-32 lg:pt-26 pb-20 px-6 lg:px-[80px]">
          <div className="max-w-[1440px] w-full flex flex-col items-start justify-start">
            <h1
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="text-[#252932] text-3xl md:text-6xl"
            >
              {page.h1}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="text-[#252932] text-lg md:text-xl mt-2 max-w-4xl"
            >
              {page.intro}
            </p>
            <Link
              href="/find-care/book-an-appointment"
              className="max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0A50EC] text-white text-[14px] font-semibold w-fit justify-center items-center hover:cursor-pointer mt-8"
            >
              Book an appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          Care that fits your schedule
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 text-[#424959] sm:text-xl text-sm">
          <li>Available 8AM–8PM, seven days a week</li>
          <li>Same-day to same-week appointments often available</li>
          <li>Same-day callbacks from our scheduling team</li>
          <li>No referral needed to request an appointment</li>
          <li>{"{{INSURANCE_LINE}}"}</li>
        </ul>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[24px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          When to see a specialist
        </h2>
        <p className="text-[#424959] sm:text-xl text-sm">
          {page.whenToSeeSpecialist.intro}
        </p>
        <ul className="flex flex-col space-y-4 text-[#424959] sm:text-xl text-sm list-disc pl-5">
          {page.whenToSeeSpecialist.triggers.map((trigger) => (
            <li key={trigger}>{trigger}</li>
          ))}
        </ul>
        <aside className="rounded-2xl border border-[#0A50EC]/20 bg-[#0A50EC]/[0.04] px-5 py-4 sm:px-6 sm:py-5">
          <h3
            style={{ fontFamily: "var(--font-public-sans)", fontWeight: 600 }}
            className="text-[#252932] text-base sm:text-lg"
          >
            Symptoms that need urgent attention
          </h3>
          <ul className="mt-3 flex flex-col space-y-2 text-[#424959] text-sm sm:text-base list-disc pl-5">
            {page.whenToSeeSpecialist.redFlags.map((flag) => (
              <li key={flag}>{flag}</li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[24px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          What happens at your first appointment
        </h2>
        <p className="text-[#424959] sm:text-xl text-sm">
          {page.firstAppointment.intro}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {page.firstAppointment.steps.map((step, index) => (
            <article
              key={step.title}
              className="border border-[#DCDEE1] rounded-[20px] overflow-hidden bg-[#FAFAFA] px-6 py-4"
            >
              <h3
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-2xl"
              >
                {index + 1}. {step.title}
              </h3>
              <p className="text-[#54535C] mt-3">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[40px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          Your specialists
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {physicians.map((doctor) => (
            <DoctorCard key={doctor.slug} doctor={doctor} />
          ))}
        </div>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[40px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          Your treatment pathway
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-[#111315] text-2xl mb-4">Non-surgical care</h3>
            <ul className="flex flex-col space-y-3 text-[#424959] list-disc pl-5">
              {page.treatmentPathway.nonSurgical.map((treatment) => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#111315] text-2xl mb-4">Surgical care</h3>
            <ul className="flex flex-col space-y-3 text-[#424959] list-disc pl-5">
              {page.treatmentPathway.surgical.map((treatment) => (
                <li key={treatment}>{treatment}</li>
              ))}
            </ul>
          </div>
        </div>
        {page.relatedTreatmentSlugs?.length ? (
          <div className="flex flex-wrap gap-4">
            {page.relatedTreatmentSlugs.map((slug) => (
              <Link
                key={slug}
                href={`/treatments/${slug}`}
                className="text-[#0A50EC] underline"
              >
                Learn about {slug.replace(/-/g, " ")}
              </Link>
            ))}
          </div>
        ) : null}
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[40px]">
        <h2
          style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
          className="text-[#111315] sm:text-4xl text-2xl"
        >
          Where we treat this
        </h2>
        <p className="text-[#424959] sm:text-xl text-sm">
          Our clinic pages list local contact details and office hours. Mountain
          Spine &amp; Orthopedics is available 8AM–8PM, seven days a week.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatingClinics.map((clinic, index) => (
            <StateLocationCard
              key={`${clinic.stateSlug}-${clinic.locationSlug}`}
              clinic={clinic}
              index={index}
              isMobile
              stateInfo={STATE_METADATA[clinic.stateSlug]}
            />
          ))}
        </div>
      </section>

      <FAQsSection
        header={<span>Frequently asked questions about {page.conditionName}</span>}
        faqItems={faqItems}
      />

      {page.relatedConditionSlug ? (
        <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[24px]">
          <h2
            style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
            className="text-[#111315] sm:text-4xl text-2xl"
          >
            Related reading
          </h2>
          <Link
            href={`/conditions/${page.relatedConditionSlug}`}
            className="text-[#0A50EC] underline"
          >
            Read the patient guide to {page.conditionName}
          </Link>
        </section>
      ) : null}

      <section className="max-w-[1440px] w-full py-[30px] px-6 xl:px-[80px] flex flex-wrap gap-4 items-center justify-center">
        <Link
          href="/find-care/book-an-appointment"
          className="max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0A50EC] text-white text-[14px] font-semibold w-fit justify-center items-center hover:cursor-pointer"
        >
          Book an appointment
        </Link>
        <Link
          href="/find-care/second-opinion"
          className="max-h-[56px] w-fit h-full px-[32px] py-[16px] space-x-[10px] rounded-[62px] relative flex bg-[white] text-[#252932] border border-[#252932] text-[14px] font-semibold justify-center items-center hover:cursor-pointer"
        >
          Request a second opinion
        </Link>
      </section>
    </main>
  );
}
