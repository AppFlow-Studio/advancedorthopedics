import { notFound } from 'next/navigation';
import { AllTreatments } from '@/components/data/treatments';
import InjectFaqSchema from '@/components/InjectFaqSchema';
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
      const href = type === 'condition' ? `/area-of-speciality/${slug}` : `/treatments/${slug}`;
      return `<a href="${href}" class="underline text-[#022968]">${match}</a>`;
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

export default function Page({ params }: { params: { TreatmentDetails: string } }) {
  const treatment = AllTreatments.find(t => t.slug === params.TreatmentDetails);
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

  const faqSchema = treatment
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: `What are the benefits of ${treatment.title}?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: treatment.benefits || "Relieves spine and joint pain.",
            },
          },
          {
            "@type": "Question",
            name: `What conditions does ${treatment.title} treat?`,
            acceptedAnswer: {
              "@type": "Answer",
              text: treatment.conditions_treated || "Treats orthopedic and spinal conditions.",
            },
          },
          {
            "@type": "Question",
            name: "What is the recovery process like?",
            acceptedAnswer: {
              "@type": "Answer",
              text: treatment.recovery_info || "Often includes physical therapy.",
            },
          },
        ],
      }
    : null;

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {faqSchema && <InjectFaqSchema schema={faqSchema} />}
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
      <div 
      style={{
      background: 'white',
      filter: 'blur(30px)'
      }}
      className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
      />
      <Image src={ConditionDetialsLanding} fill className="h-full absolute top-0 object-cover object-top self-end w-full pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

      <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
          <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
          style={{
          background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
          }}
          />

      <div className='px-6 xl:px-[80px] z-[2]'>
          <div className=' mt-[220px] text-xs md:text-md flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
          style={{
              background : 'rgba(255, 255, 255, 0.50)'
          }}
          >
              <span
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#022968]"
              >
                  Treatment
              </span>
              <span
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#022968]"
              >
                  /
              </span>
              <span
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#2358AC]"
              >
                  Treatment Details
              </span>
              <span
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#022968] sm:flex hidden"
              >
                  /
              </span>
              <span
              style={{
                  fontFamily: "var(--font-reem-kufi)",
                  fontWeight: 400,
              }}
              className="text-[#2358AC] sm:flex hidden"
              >
                  {treatment.title}
              </span>
          </div>
      </div>
      <div className=" px-6 xl:px-[80px] z-[2] flex flex-row items-center justify-start mt-[12px] lg:w-[50%]">
          <h1
          style={{
              fontFamily: "var(--font-reem-kufi)",
              fontWeight: 400,
          }}
          className="text-[#022968] flex-wrap text-3xl md:text-6xl lg:text-7xl"
          >
              {treatment.title}
          </h1>
      </div>

      <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
          {renderField(treatment.body, treatment.slug)}
      </div>
      </div>
      </section>

      <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden py-[50px] px-6 xl:px-[80px] space-x-[60px]'>
          <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
              <ConsultationForm />
              <div className='mt-10'/>
              <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px]'>
                  <TreatmentsList currentTreatment={treatment.title} />
              </div>

              <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6'>
                  <h2
                  style={{
                      fontFamily: "var(--font-reem-kufi)",
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
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] sm:text-5xl text-2xl'
                        >
                        About {treatment.title}
                        </h2>
                        <div
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.body, treatment.slug)}
                        </div>
                    </div>
                    
                    {/* What are symptoms of */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What is {treatment.title}?
                        </h2>
                        <div 
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
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
                      className="w-full h-full object-cover object-center rounded-[24px] bg-[#EFF5FF] items-center justify-center flex overflow-hidden aspect-video" 
                    />
                    
                     <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What does {treatment.title} look like?
                        </h2>
                        <div 
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.procedure_info, treatment.slug)}
                        </div>
                    </div>
    
                    
                    {/* Conditions it Treats */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What Conditions does {treatment.title} Help Ease?
                        </h2>
                        <div
                        style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.conditions_treated, treatment.slug)}
                        </div>
                    </div>

                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        Benefits of {treatment.title}
                        </h2>
                        <div 
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.benefits, treatment.slug)}
                            {typeof treatment.benefits !== 'string' && treatment.benefits}
                        </div>
                    </div>
    
                    {/*  Why Choose Us */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        Why Choose Mountain Spine & Orthopedics for {treatment.title}?
                        </h2>
                        <div 
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.why_choose_us, treatment.slug)}
                        </div>
                    </div>
                    
                    {/* Recovery Info */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h2
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What does post {treatment.title} recovery look like?
                        </h2>
                        <div 
                         style={{
                          fontFamily : 'var(--font-inter)',
                          fontWeight : 400,
                        }}
                        className='text-[#5B5F67] sm:text-xl text-sm'
                        >
                            {renderField(treatment.recovery_info, treatment.slug)}
                        </div>
                    </div>
  
  
                  {/* Schedule a Consultation Today */}
                  <div className=' flex flex-col space-y-[16px] '>
                      <h2
                          style={{
                              fontFamily : 'var(--font-reem-kufi)',
                              fontWeight : 500,
                          }}
                          className='text-[#111315] text-2xl sm:text-4xl'
                          >
                          Schedule a Consultation Today
                      </h2>
                      <div 
                       style={{
                        fontFamily : 'var(--font-inter)',
                        fontWeight : 400,
                      }}
                      className='text-[#5B5F67] sm:text-xl text-sm'
                      >
                          {renderField(treatment.schedule, treatment.slug)}
                          <p className="mt-4"><a href="/find-care/candidacy-check" className="text-blue-600 hover:underline">Take our quick candidacy check form&nbsp;↗</a></p>
                      </div>
                  </div>
              </section>

              <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden'>
                  <h2
                  style={{
                      fontFamily: "var(--font-reem-kufi)",
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
