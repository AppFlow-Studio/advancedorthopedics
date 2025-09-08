import React from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import { conditions } from '@/components/data/conditions'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import { MiniContactForm } from '@/components/MiniContactForm'
import { DoctorContactForm } from '@/components/DoctorContactForm'
import Link from 'next/link'
import { TextAnimate } from '@/components/magicui/text-animate'
import ConditionList from '@/components/ConditionsList'
import Logo from '@/public/newlogo4.png'
import { notFound } from 'next/navigation';
import { AllTreatments } from '@/components/data/treatments';

// Helper: Build a map of all condition/treatment titles to their slugs and type
const conditionMap = Object.fromEntries(
  conditions.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }])
);
const treatmentMap = Object.fromEntries(
  AllTreatments.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }])
);
const allTitles = [
  ...conditions.map(c => c.title),
  ...AllTreatments.map(t => t.title)
];

function linkifyText(text: string, currentSlug: string) {
  if (!text || typeof text !== 'string') return text;
  let replaced = text;
  // Sort titles by length descending to avoid partial matches
  const sortedTitles = allTitles.slice().sort((a, b) => b.length - a.length);
  sortedTitles.forEach(title => {
    const lowerTitle = title.toLowerCase();
    const cond = conditionMap[lowerTitle];
    const treat = treatmentMap[lowerTitle];
    const slug = cond ? cond.slug : treat ? treat.slug : null;
    const type = cond ? 'condition' : treat ? 'treatment' : null;
    if (!slug || slug === currentSlug) return;
    // Only link if the title matches exactly as a whole word/phrase
    const regex = new RegExp(`(?<![\\w-])${title.replace(/[-/\\^$*+?.()|[\\]{}]/g, '\\$&')}(?![\\w-])`, 'g');
    replaced = replaced.replace(regex, match => {
      const href = type === 'condition' ? `/area-of-specialty/${slug}` : `/treatments/${slug}`;
      return `<a href="${href}" class="underline text-[#252932]">${match}</a>`;
    });
  });
  return replaced;
}

function renderField(field: any, currentSlug: string) {
  if (!field) return null;

  // If its astring, apply linkification and render as HTML
  if (typeof field === 'string') {
    return (
      <p
        style={{
          fontFamily: "var(--font-inter)",
          fontWeight: 400,
        }}
        className="text-[#424959] sm:text-xl text-sm"
        dangerouslySetInnerHTML={{
          __html: linkifyText(field, currentSlug)
        }}
      />
    );
  }

  // If it's JSX/React element, render as-is
  if (React.isValidElement(field)) {
    return field;
  }

  // If it's an object or other type, return null
  return null;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return conditions.map(c => ({ ConditionDetails: c.slug }));
}

export default function ConditionDetails({
  params,
}: {
  params: { ConditionDetails: string }
}) {
  const conditionSlug = params.ConditionDetails
  const condition_details = conditions.find((x: ConditionInfoProp) => x.slug === conditionSlug)
  if (!condition_details) {
    return (
      notFound()
    )
  }
  // Function to perform a Fisher-Yates shuffle on the array
  function shuffleArray(array: any[]) {
    const newArray = [...array]; // Clone the array
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)); // Pick a random index from 0 to i
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements at indices i and j
    }
    return newArray;
  }

  // Shuffle the Doctors array and then take the first two doctors
  const randomDoctors = shuffleArray(Doctors).slice(0, 2);
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]" >
        <div
          style={{
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          layout='fill'
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt="Doctor Diagnosing a Old Patient"
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        {/* <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
        style={{
          background: '#5FBBEC',
        }}
      /> */}
        <div className="z-[1] flex flex-col w-full h-full text-left relative pb-20">

          <div className=' px-6 xl:px-[80px] z-[2] w-full flex items-center justify-center'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit xl:w-[20%] items-center justify-center px-[20px] py-[10px]'
              style={{
                background: 'rgba(255, 255, 255, 0.50)'
              }}
            >
              <h1
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#252932]"
              >
                Condition
              </h1>

              <h1
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#252932]"
              >
                /
              </h1>

              <h1
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#2358AC]"
              >
                Condition Details
              </h1>
            </div>
          </div>
          <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-center mt-[12px] w-full">
            <h1
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#252932] text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-center"
            >
              {condition_details.title}
            </h1>
          </div>

          <div className="z-[2] px-10 self-center xl:px-[80px] mt-[24px]  lg:w-[70%] pb-8">
            <p
              style={{
                fontWeight: 400,
              }}
              className="text-[#424959] text-center sm:text-lg text-sm"
              dangerouslySetInnerHTML={{ __html: linkifyText(condition_details.body, condition_details.slug) }}
            />
          </div>
        </div>
      </section>

      <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
        <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
          <DoctorContactForm backgroundcolor={'#FAFAFA'} />
          <div className='mt-10' />
          <ConditionList currentCondition={condition_details.title} />

          <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6'>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] text-5xl"
            >
              Meet our Doctors
            </h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-[32px] gap-y-[32px] '>
              {
                randomDoctors.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.name} />
                ))
              }
            </div>
          </section>

        </div>


        <div className=' w-full lg:w-[70%] lg:order-2 order-1  flex flex-col space-y-[60px] lg:mt-0 mt-6 rounded-[24px] '>
          <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full p-4 md:p-[40px] rounded-[24px]'>
            {/* Detail */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-5xl text-2xl'
              >
                About {condition_details.title}
              </h2>
              {renderField(condition_details?.detail, condition_details.slug)}
            </div>

            {/* What are symptoms of */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                What Are the Symptoms of {condition_details.title}?
              </h2>
              {renderField(condition_details?.what_sym, condition_details.slug)}
            </div>

            {/* Video */}
            <Image src={condition_details?.inTxt_img ? condition_details?.inTxt_img : Logo} alt={condition_details.title} width={300} height={300} layout="responsive" className="w-full h-full object-cover object-center aspect-video rounded-[24px]   " />
            {renderField(condition_details.body, condition_details.slug)}


            {/* Are There Specific Risk Factors  */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                Are There Specific Risk Factors for {condition_details.title}?
              </h2>
              {renderField(condition_details?.risk_fac, condition_details.slug)}
            </div>

            {/*  Diagnosing */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                Diagnosing {condition_details.title}?
              </h2>
              {renderField(condition_details?.diagnose, condition_details.slug)}
            </div>

            {/* Treatment for  */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                Treatment for {condition_details.title}?
              </h2>
              {renderField(
                condition_details?.slug === 'synovitis'
                  ? `Treatment depends on the underlying cause. Nonsteroidal anti-inflammatory drugs (NSAIDs) and corticosteroid injections are often used to reduce inflammation and restore function. If the cause is an autoimmune condition, specific medications like DMARDs may be prescribed. In persistent cases, a minimally invasive procedure called an arthroscopic synovectomy may be recommended to remove the inflamed tissue. For targeted relief, see our <Link href="/treatments/anti-inflammatory-injections-for-joint-and-spine-pain">Anti-Inflammatory Injections for Joint and Spine Pain</Link> and <Link href="/treatments/arthroscopic-knee-surgery">Arthroscopic Knee Surgery</Link>.`
                  : condition_details?.treatment,
                condition_details.slug
              )}
            </div>

            {/* Does ... Cause Pain? */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                Does {condition_details.title} Cause Pain?
              </h2>
              {renderField(condition_details?.pain_info, condition_details.slug)}
            </div>

            {/* What Can Patients Do to Prevent It? */}

            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                What Can Patients Do to Prevent It?
              </h2>
              {renderField(condition_details?.prevent, condition_details.slug)}
            </div>

            {/* Schedule a Consultation Today */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] sm:text-4xl text-2xl'
              >
                Schedule a Consultation Today
              </h2>
              {renderField(condition_details?.schedule, condition_details.slug)}
              <p className="mt-4"><a href="/find-care/candidacy-check" className="text-blue-600 hover:underline">Take our quick candidacy check form&nbsp;↗</a></p>
            </div>
          </section>

          <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden '>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] text-5xl"
            >
              Meet our Doctors
            </h2>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-[32px] gap-y-[32px]'>
              {
                randomDoctors.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.name} />
                ))
              }
            </div>
          </section>
          <div>

          </div>
        </div>
      </section>
    </main>
  )
}
