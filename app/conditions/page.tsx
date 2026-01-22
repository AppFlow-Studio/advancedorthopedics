import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { conditions } from '@/components/data/conditions';
import ConditionCard from '@/components/ConditionCard';
import BodyPartTabs from '@/components/BodyPartTabs';
import { Metadata } from 'next';
import { buildCanonical, canonicalForOg } from '@/lib/seo';
import { getOgImageForPath } from '@/lib/og';

export async function generateMetadata(): Promise<Metadata> {
  const url = buildCanonical('/conditions');
  const ogImage = getOgImageForPath('/conditions');

  return {
    title: "Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics",
    description: "Comprehensive guide to orthopedic and spine conditions. Expert diagnosis and treatment for back pain, neck pain, joint conditions, and more. Board-certified specialists in Florida. Book a consultation today.",
    keywords: ["orthopedic conditions", "spine conditions", "back pain", "neck pain", "joint conditions", "Florida orthopedic specialists"],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: "Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics",
      description: "Comprehensive guide to orthopedic and spine conditions. Expert diagnosis and treatment for back pain, neck pain, joint conditions, and more.",
      url: canonicalForOg('/conditions'),
      siteName: "Mountain Spine & Orthopedics",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: "Orthopedic Conditions & Treatments at Mountain Spine & Orthopedics",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Orthopedic Conditions & Treatments | Mountain Spine & Orthopedics",
      description: "Comprehensive guide to orthopedic and spine conditions. Expert diagnosis and treatment for back pain, neck pain, joint conditions, and more.",
      images: [ogImage],
    },
  };
}

// Group conditions by tag
function groupConditionsByTag() {
  const grouped: Record<string, typeof conditions> = {};
  conditions.forEach(condition => {
    const tag = condition.tag || 'Other';
    if (!grouped[tag]) {
      grouped[tag] = [];
    }
    grouped[tag].push(condition);
  });
  return grouped;
}

export default function ConditionsPage() {
  const groupedConditions = groupConditionsByTag();
  const tagOrder = ['Spine', 'Lower Spine', 'Neck', 'Shoulder', 'Hip', 'Knee', 'Hand', 'Foot', 'Elbow', 'Other'];

  return (
    <main className="w-full flex flex-col items-center justify-center bg-white h-full">
      {/* Landing Section */}
      <section className="w-full min-h-[180px] sm:min-h-[260px] lg:min-h-[320px] flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_4rem)] sm:[mask-image:linear-gradient(to_top,transparent,black_6rem)]">
        <div
          style={{
            filter: 'blur(30px)'
          }}
          className="w-full h-[80px] sm:h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          fill
          className="h-full absolute top-0 object-cover object-center w-full"
          alt="Orthopedic specialist consulting with patient about conditions at Mountain Spine & Orthopedics Florida"
          sizes="100vw"
        />
        <div
          className="w-full z-[1] h-full absolute left-0 top-0"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-20 pb-6 sm:pt-36 sm:pb-12 lg:pt-48 lg:pb-16">
          <div className="px-4 sm:px-6 xl:px-[80px] z-[2] flex flex-row items-center justify-center w-full">
            <h1
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 400,
              }}
              className="text-[#252932] text-2xl sm:text-4xl lg:text-5xl xl:text-6xl text-center leading-tight"
            >
              Orthopedic Conditions & Treatments
            </h1>
          </div>
          <div className="z-[2] px-4 sm:px-6 xl:px-[80px] mt-3 sm:mt-5 lg:w-full items-center justify-center">
            <p
              style={{ fontWeight: 400, lineHeight: '148%' }}
              className="text-shadow-sm text-[#424959] text-sm sm:text-lg lg:text-xl w-full text-center"
            >
              Comprehensive care for spine, joint, and musculoskeletal conditions.
              <br className='sm:flex hidden' />{' '}
              Expert diagnosis and personalized treatment plans.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Body Part Section - Condensed Tabs */}
      <section className="max-w-[1440px] w-full flex flex-col py-6 sm:py-8 xl:py-10 xl:px-[80px] px-4 sm:px-6 space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div className="flex flex-col gap-1">
            <h2
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className="text-[#111315] text-xl sm:text-2xl lg:text-3xl"
            >
              Browse by Body Part
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#6B7280] text-sm sm:text-base hidden sm:block"
            >
              Select a body region to explore conditions and treatments
            </p>
          </div>
        </div>
        <BodyPartTabs />
      </section>

      {/* All Conditions Section */}
      <section className="max-w-[1440px] w-full flex flex-col py-8 sm:py-10 xl:py-[50px] xl:px-[80px] px-4 sm:px-6 space-y-6 sm:space-y-8 xl:space-y-[40px]">
        <div className="flex flex-col space-y-3 sm:space-y-4">
          <h2
            style={{
              fontFamily: 'var(--font-public-sans)',
              fontWeight: 500,
            }}
            className="text-[#111315] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
          >
            All Our Conditions
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter)",
              fontWeight: 400,
            }}
            className="text-[#424959] text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed"
          >
            Explore our comprehensive list of orthopedic and spine conditions we treat. Each condition page provides detailed information about symptoms, causes, diagnosis, and treatment options.
          </p>
        </div>

        {/* Grouped Conditions */}
        {tagOrder.map((tag) => {
          const tagConditions = groupedConditions[tag];
          if (!tagConditions || tagConditions.length === 0) return null;

          return (
            <div key={tag} className="flex flex-col space-y-4 sm:space-y-6">
              <h3
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className="text-[#111315] text-xl sm:text-2xl lg:text-3xl"
              >
                {tag} Conditions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 xl:gap-8">
                {tagConditions.map((condition) => (
                  <ConditionCard key={condition.slug} ConditionInfo={condition} />
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 sm:px-6 xl:px-[80px] mb-8 sm:mb-10 xl:mb-[50px]">
        <div className="max-w-[1440px] mx-auto w-full flex flex-col py-6 sm:py-10 xl:py-[50px] px-4 sm:px-6 xl:px-10 space-y-4 sm:space-y-6 bg-[#FAFAFA] rounded-2xl sm:rounded-3xl">
          <div className="flex flex-col space-y-3 sm:space-y-4 text-center">
            <h2
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className="text-[#111315] text-xl sm:text-2xl lg:text-3xl xl:text-4xl"
            >
              Ready to Get Started?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-inter)",
                fontWeight: 400,
              }}
              className="text-[#424959] text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              Take the first step toward relief. Book a consultation, get a free MRI review, or request a second opinion from our board-certified specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mt-4 sm:mt-6">
              <Link
                href="/find-care/book-an-appointment"
                className="w-full sm:w-auto bg-[#2358AC] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-[#1a4a8a] transition-all duration-200 shadow-sm hover:shadow-md text-center"
              >
                <span
                  style={{
                    fontFamily: "var(--font-public-sans)",
                    fontWeight: 500,
                  }}
                  className="text-sm sm:text-base"
                >
                  Book an Appointment
                </span>
              </Link>
              <Link
                href="/find-care/free-mri-review"
                className="w-full sm:w-auto bg-white border border-[#252932] text-[#252932] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/80 transition-all duration-200 text-center"
              >
                <span
                  style={{
                    fontFamily: "var(--font-public-sans)",
                    fontWeight: 500,
                  }}
                  className="text-sm sm:text-base"
                >
                  Free MRI Review
                </span>
              </Link>
              <Link
                href="/find-care/second-opinion"
                className="w-full sm:w-auto bg-white border border-[#252932] text-[#252932] px-6 py-3 sm:px-8 sm:py-4 rounded-full hover:bg-white/80 transition-all duration-200 text-center"
              >
                <span
                  style={{
                    fontFamily: "var(--font-public-sans)",
                    fontWeight: 500,
                  }}
                  className="text-sm sm:text-base"
                >
                  Second Opinion
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
