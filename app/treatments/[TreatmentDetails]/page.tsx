import { notFound } from 'next/navigation';
import { AllTreatments } from '@/components/data/treatments';
import React from 'react';
import Image from 'next/image';
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg';
import { ConsultationForm } from '@/components/ContactForm';
import { Doctors } from '@/components/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import TreatmentsList from '@/components/TreatmentsList';
import Link from 'next/link';
import { conditions } from '@/components/data/conditions';

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

function linkifyText(text, currentSlug) {
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
    const regex = new RegExp(`(?<![\w-])${title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}(?![\w-])`, 'g');
    replaced = replaced.replace(regex, match => {
      const href = type === 'condition' ? `/area-of-specialty/${slug}` : `/treatments/${slug}`;
      return `<a href="${href}" class="underline text-[#252932]">${match}</a>`;
    });
  });
  return replaced;
}

// Helper to render string or JSX/ReactNode fields
function renderField(field: any, currentSlug: string) {
  if (!field) return null;
  if (typeof field === 'string') {
    return (
      <div
        dangerouslySetInnerHTML={{ __html: linkifyText(field, currentSlug) }}
      />
    );
  }
  if (React.isValidElement(field)) {
    return field;
  }
  return null;
}

export const dynamicParams = false;        // ⬅ 404 unknown slugs immediately

export async function generateStaticParams() {
  return AllTreatments.map(t => ({ TreatmentDetails: t.slug }));
}

export default async function Page({ params }: { params: Promise<{ TreatmentDetails: string }> }) {
  const resolvedParams = await params;
  const treatment = AllTreatments.find(t => t.slug === resolvedParams.TreatmentDetails);
  if (!treatment) notFound();

  // Function to perform a Fisher-Yates shuffle on the array
  function shuffleArray<T>(array: T[]): T[] {
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
          alt={`A surgeon discussing ${treatment.title} options with a patient in Florida`}
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

          <div className='px-6 xl:px-[80px] z-[2] w-full flex items-center justify-center'>
            <div className=' mt-[220px] text-xs md:text-md flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
              style={{
                background: 'rgba(255, 255, 255, 0.50)'
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#252932]"
              >
                Treatment
              </span>
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#252932]"
              >
                /
              </span>
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#2358AC]"
              >
                Treatment Details
              </span>
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#252932] sm:flex hidden"
              >
                /
              </span>
              <span
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 400,
                }}
                className="text-[#2358AC] sm:flex hidden"
              >
                {treatment.title}
              </span>
            </div>
          </div>
          <div className=" px-6 xl:px-[80px] z-[2] flex flex-row items-center justify-center mt-[12px] lg:w-full">
            <h1
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#252932] flex-wrap text-3xl md:text-6xl lg:text-7xl text-center"
            >
              {treatment.title} in Florida
            </h1>
          </div>

          <div className="z-[2] px-10 xl:px-[80px] mt-[24px] self-center text-center lg:w-[70%] w-full pb-8">
            {renderField(treatment.body, treatment.slug)}
          </div>
        </div>
      </section>

      <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden py-[50px] px-6 xl:px-[80px] space-x-[60px]'>
        <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
          <ConsultationForm />
          <div className='mt-10' />
          <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px]'>
            <TreatmentsList currentTreatment={treatment.title} />
          </div>

          <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6'>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] sm:text-5xl text-3xl"
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
                About {treatment.title}
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.body, treatment.slug)}
              </div>
            </div>

            {/* What are symptoms of */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                What is {treatment.title}?
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.detail, treatment.slug)}
              </div>
            </div>


            <Image
              src={treatment.inTxt_img || '/default-treatment.png'}
              alt={treatment.title}
              width={300}
              height={300}
              layout="responsive"
              className="w-full h-full object-cover object-center rounded-[24px] bg-[#FAFAFA] items-center justify-center flex overflow-hidden aspect-video"
            />

            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                What does {treatment.title} look like?
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.procedure_info, treatment.slug)}
              </div>
            </div>


            {/* Conditions it Treats */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                What Conditions does {treatment.title} Help Ease?
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.conditions_treated, treatment.slug)}
              </div>
            </div>

            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                Benefits of {treatment.title}
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.benefits, treatment.slug)}
                {typeof treatment.benefits !== 'string' && treatment.benefits}
              </div>
            </div>

            {/*  Why Choose Us */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                Why Choose Mountain Spine & Orthopedics for {treatment.title}?
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.why_choose_us, treatment.slug)}
              </div>
            </div>

            {/* Recovery Info */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                What does post {treatment.title} recovery look like?
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.recovery_info, treatment.slug)}
              </div>
            </div>


            {/* Schedule a Consultation Today */}
            <div className=' flex flex-col space-y-[16px] '>
              <h2
                style={{
                  fontFamily: 'var(--font-public-sans)',
                  fontWeight: 500,
                }}
                className='text-[#111315] text-2xl sm:text-4xl'
              >
                Schedule a Consultation Today
              </h2>
              <div
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                }}
                className='text-[#424959] sm:text-xl text-sm'
              >
                {renderField(treatment.schedule, treatment.slug)}
                <p className="mt-4"><a href="/find-care/candidacy-check" className="text-blue-600 hover:underline">Take our quick candidacy check form&nbsp;↗</a></p>
              </div>
            </div>
          </section>

          <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden'>
            <h2
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] sm:text-5xl text-3xl"
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
          <div>

          </div>
        </div>

      </section>
    </main>
  );
}
