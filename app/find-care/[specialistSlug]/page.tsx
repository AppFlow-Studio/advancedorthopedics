import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import DoctorCard from "@/components/DoctorCard";
import FAQsSection from "@/components/FaqsSection";
import StateLocationCard from "@/components/StateLocationCard";
import SpecialistExplorer from "@/components/SpecialistExplorer";
import VertebraViewer from "@/components/VertebraViewer";
import HeroPhoneCTA from "@/components/HeroPhoneCTA";
import styles from './specialist.module.css';
import { clinicsForMap } from "@/components/data/clinicsForMap.generated";
import { AVERAGE_RATING, TOTAL_REVIEW_COUNT } from "@/components/data/reviewAggregate.generated";
import { Doctors } from "@/components/data/doctors";
import { SpecialistPages } from "@/components/data/specialists";
import { STATE_METADATA } from "@/lib/locationRedirects";
import { MAIN_PHONE_DISPLAY, MAIN_PHONE_HREF } from "@/lib/locationConstants";
import { ArrowRight, CalendarCheck2, Clock3, MapPin, PhoneCall, ShieldCheck } from "lucide-react";

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
    <main className={`${styles.page} w-full flex flex-col items-center justify-center bg-white h-full overflow-x-hidden`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />
      <section className="w-full min-h-[560px] md:min-h-[620px] flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]">
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
          alt=""
          sizes="100vw"
        />
        <div
          className="w-full h-full absolute left-0 top-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)",
          }}
        />
        <div className="z-[2] flex flex-col w-full h-full text-left relative pt-28 sm:pt-32 lg:pt-26 pb-20 px-6 lg:px-[80px]">
          <div className={styles.hero}>
          <div className={styles.intro}>
            <span className={styles.eyebrow}>Mountain Spine &amp; Orthopedics · Find care</span>
            <h1
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="hero-fade-up text-[#252932] text-3xl leading-tight md:text-6xl md:leading-tight"
            >
              {page.h1}
            </h1>
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 500,
              }}
              className="hero-slide-left text-[#252932] text-base sm:text-lg md:text-xl mt-3 max-w-3xl leading-relaxed"
            >
              {page.intro}
            </p>
            <div className="hero-fade-up mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/find-care/book-an-appointment"
                className="group max-h-[56px] h-full px-[22px] sm:px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0A50EC] text-white text-[14px] font-semibold w-fit justify-center items-center hover:cursor-pointer shadow-[0_12px_30px_rgba(10,80,236,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0847d1]"
              >
                Book an appointment
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              <HeroPhoneCTA phoneDisplay={MAIN_PHONE_DISPLAY} phoneHref={MAIN_PHONE_HREF} trackLocation={`SpecialistHero-${page.slug}`} />
            </div>
            <div className="hero-fade-up mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5">
              <span className="flex items-center gap-1.5">
                <span className="flex gap-0.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 20 20" fill="#F5A623">
                      <path d="M10 1.6l2.6 5.3 5.8.8-4.2 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.6 7.7l5.8-.8L10 1.6z" />
                    </svg>
                  ))}
                </span>
                <span className="text-sm font-semibold text-[#252932]">{AVERAGE_RATING.toFixed(1)}</span>
                <span className="text-sm text-[#424959]">· {TOTAL_REVIEW_COUNT}+ Google reviews</span>
              </span>
              <span className="hidden sm:inline text-[#9DB0C9]" aria-hidden="true">|</span>
              <span className="flex items-center gap-1.5 text-sm text-[#424959]">
                <MapPin className="h-4 w-4 shrink-0 text-[#0A50EC]" aria-hidden="true" />
                <span>Serving <strong className="font-semibold text-[#252932]">FL · NJ · NY · PA · GA</strong></span>
              </span>
            </div>
            <div className="hero-fade-up mt-5 grid w-full max-w-2xl grid-cols-1 gap-2 text-sm text-[#252932] sm:grid-cols-3 sm:gap-3">
              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-2 backdrop-blur-sm">
                <Clock3 className="h-4 w-4 shrink-0 text-[#0A50EC]" aria-hidden="true" />
                <span>8AM–8PM, 7 days</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-2 backdrop-blur-sm">
                <CalendarCheck2 className="h-4 w-4 shrink-0 text-[#0A50EC]" aria-hidden="true" />
                <span>Same-day callbacks</span>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/80 bg-white/55 px-3 py-2 backdrop-blur-sm">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[#0A50EC]" aria-hidden="true" />
                <span>No referral needed</span>
              </div>
            </div>
            <nav className={styles.jump} aria-label="On this page">
              <a href="#first-appointment">Your first visit</a>
              <a href="#specialists">Meet your specialists</a>
              <a href="#locations">Find an office</a>
            </nav>
          </div>
          <SpecialistExplorer slug={page.slug}/>
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
          <li className="flex items-start gap-3 rounded-2xl border border-[#E7ECF7] bg-[#F8FAFF] px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
            <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-[#0A50EC]" aria-hidden="true" />
            <span>Available 8AM–8PM, seven days a week</span>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E7ECF7] bg-[#F8FAFF] px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
            <CalendarCheck2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0A50EC]" aria-hidden="true" />
            <span>Same-day to same-week appointments often available</span>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E7ECF7] bg-[#F8FAFF] px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
            <PhoneCall className="mt-0.5 h-5 w-5 shrink-0 text-[#0A50EC]" aria-hidden="true" />
            <span>Same-day callbacks from our scheduling team</span>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E7ECF7] bg-[#F8FAFF] px-4 py-4 transition-transform duration-300 hover:-translate-y-1">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0A50EC]" aria-hidden="true" />
            <span>No referral needed to request an appointment</span>
          </li>
          <li className="flex items-start gap-3 rounded-2xl border border-[#E7ECF7] bg-[#F8FAFF] px-4 py-4 transition-transform duration-300 hover:-translate-y-1 md:col-span-2">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#0A50EC]" aria-hidden="true" />
            <span>{"{{INSURANCE_LINE}}"}</span>
          </li>
        </ul>
      </section>

      <section className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:items-start">
          <div className="flex-1 min-w-0 space-y-[24px]">
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
          </div>
          <div className="w-full lg:w-[400px] xl:w-[430px] shrink-0 lg:sticky lg:top-24">
            <VertebraViewer slug={page.slug} />
          </div>
        </div>
      </section>

      <section id="first-appointment" className={`${styles.appointment} max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[24px]`}>
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
              className="group border border-[#DCDEE1] rounded-[20px] overflow-hidden bg-[#FAFAFA] px-6 py-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#B8CBF8] hover:bg-white hover:shadow-[0_16px_40px_rgba(37,41,50,0.08)]"
            >
              <h3
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500,
                }}
                className="text-[#111315] text-2xl transition-colors duration-300 group-hover:text-[#0A50EC]"
              >
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, '0')}</span> {step.title}
              </h3>
              <p className="text-[#54535C] mt-3">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="specialists" className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[40px]">
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

      <section id="locations" className="max-w-[1440px] w-full px-6 xl:px-[80px] py-[50px] space-y-[40px]">
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
        <div>
        {['florida','new-jersey','new-york','pennsylvania'].map((state) => (
        <details key={state} className={styles.locations}>
          <summary>{state.replace(/\b\w/g, c => c.toUpperCase()).replace(/-/g,' ')} · {treatingClinics.filter(c=>c.stateSlug===state).length} {treatingClinics.filter(c=>c.stateSlug===state).length === 1 ? 'office' : 'offices'}</summary>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatingClinics.filter(c=>c.stateSlug===state).map((clinic, index) => (
            <StateLocationCard
              key={`${clinic.stateSlug}-${clinic.locationSlug}`}
              clinic={clinic}
              index={index}
              isMobile
              stateInfo={STATE_METADATA[clinic.stateSlug]}
            />
          ))}
          </div>
        </details>
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
        <h2 className={styles.closingTitle}>Take the next step toward answers</h2>
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
