import React from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import { conditions, conditionContentPlaceholders, ConditionContent } from '@/components/data/conditions'
import { AllTreatments, allTreatmentContent } from '@/components/data/treatments'
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
import { srOnly } from '@/lib/seo';
import InternalLinkingSection from '@/components/InternalLinkingSection';
import ConditionTreatmentFAQSection from '@/components/ConditionTreatmentFAQSection';
import ConditionFAQ from '@/components/ConditionFAQ';

// Helper: Build a map of all condition/treatment titles to their slugs and type
// Include both old and new format data
const conditionMap = Object.fromEntries([
  ...conditions.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }]),
  ...conditionContentPlaceholders.map(c => [c.title.toLowerCase(), { slug: c.slug, type: 'condition' }])
]);
const treatmentMap = Object.fromEntries([
  ...AllTreatments.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }]),
  ...allTreatmentContent.map(t => [t.title.toLowerCase(), { slug: t.slug, type: 'treatment' }])
]);
const allTitles = [
  ...conditions.map(c => c.title),
  ...conditionContentPlaceholders.map(c => c.title),
  ...AllTreatments.map(t => t.title),
  ...allTreatmentContent.map(t => t.title)
];

// Enhanced function to handle both bold text conversion and internal linking
function processTextWithBoldAndLinks(text: string, currentSlug: string): string {
  if (!text || typeof text !== 'string') return text;
  
  // Step 1: Convert **bold** markdown to <strong> tags first
  let processed = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Step 2: Split text into segments (text and HTML tags) to avoid linking inside HTML
  const segments: Array<{ type: 'text' | 'html'; content: string }> = [];
  let lastIndex = 0;
  const tagRegex = /<[^>]+>/g;
  let tagMatch;
  
  while ((tagMatch = tagRegex.exec(processed)) !== null) {
    // Add text before tag
    if (tagMatch.index > lastIndex) {
      segments.push({
        type: 'text',
        content: processed.substring(lastIndex, tagMatch.index)
      });
    }
    // Add HTML tag
    segments.push({
      type: 'html',
      content: tagMatch[0]
    });
    lastIndex = tagMatch.index + tagMatch[0].length;
  }
  
  // Add remaining text
  if (lastIndex < processed.length) {
    segments.push({
      type: 'text',
      content: processed.substring(lastIndex)
    });
  }
  
  // Step 3: Process only text segments for linking
  // Sort titles by length descending to avoid partial matches
  const sortedTitles = allTitles.slice().sort((a, b) => b.length - a.length);
  
  const processedSegments = segments.map(segment => {
    if (segment.type === 'html') {
      return segment.content; // Keep HTML as-is
    }
    
    let textContent = segment.content;
    
    // Linkify condition and treatment names in text segments
    sortedTitles.forEach(title => {
      const lowerTitle = title.toLowerCase();
      const cond = conditionMap[lowerTitle];
      const treat = treatmentMap[lowerTitle];
      const slug = cond ? cond.slug : treat ? treat.slug : null;
      const type = cond ? 'condition' : treat ? 'treatment' : null;
      
      if (!slug || slug === currentSlug) return;
      
      // Escape special regex characters
      const escapedTitle = title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      // Match as whole word, case-insensitive
      const titleRegex = new RegExp(`(?<![\\w-])${escapedTitle}(?![\\w-])`, 'gi');
      
      textContent = textContent.replace(titleRegex, (match) => {
        const href = type === 'condition' ? `/conditions/${slug}` : `/treatments/${slug}`;
        return `<a href="${href}" class="underline text-[#252932] hover:text-[#2358AC]">${match}</a>`;
      });
    });
    
    return textContent;
  });
  
  return processedSegments.join('');
}

// Legacy function for old format data (backward compatibility)
function linkifyText(text: string, currentSlug: string): string {
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
    const regex = new RegExp(`(?<![\\w-])${title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}(?![\\w-])`, 'g');
    replaced = replaced.replace(regex, match => {
      const href = type === 'condition' ? `/conditions/${slug}` : `/treatments/${slug}`;
      return `<a href="${href}" class="underline text-[#252932]">${match}</a>`;
    });
  });
  return replaced;
}

type HeadingSuffix = "for" | "of";

function ensureConditionHeadingIncludesKeyword(
  heading: string,
  conditionTitle: string,
  suffix: HeadingSuffix = "for"
): string {
  if (!heading || !conditionTitle) return heading;
  const normalizedHeading = heading.toLowerCase();
  const normalizedTitle = conditionTitle.toLowerCase();
  if (normalizedHeading.includes(normalizedTitle)) {
    return heading;
  }

  const cleanHeading = heading.trim();
  const separator = suffix === "of" ? "of" : "for";
  return `${cleanHeading} ${separator} ${conditionTitle}`;
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

// This component is used internally by the unified [slug] route
// It accepts a slug prop instead of params
export default async function ConditionPage({ conditionSlug }: { conditionSlug: string }) {
  
  // Check conditionContentPlaceholders first for new ConditionContent format
  const conditionContent = conditionContentPlaceholders.find((c: ConditionContent) => c.slug === conditionSlug);
  
  // Legacy fallback - check conditions array for old ConditionInfoProp format
  const condition_details = conditionContent 
    ? null 
    : conditions.find(c => c.slug === conditionSlug);
  
  if (!conditionContent && !condition_details) {
    return (
      notFound()
    )
  }
  
  // Use new format if available, otherwise use old format
  const isNewFormat = !!conditionContent;
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
          alt={`Doctor evaluating patient symptoms for ${isNewFormat ? conditionContent!.title : condition_details!.title} diagnosis at Mountain Spine & Orthopedics`}
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pb-20">

          <div className=' px-6 xl:px-[80px] z-[2] w-full flex items-center justify-center'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit xl:w-[20%] items-center justify-center px-[20px] py-[10px]'
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
                Condition
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
                Condition Details
              </span>
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
              {isNewFormat ? conditionContent!.title : condition_details!.title}
            </h1>
          </div>

          <div className="z-[2] px-10 self-center xl:px-[80px] mt-[24px]  lg:w-[70%] pb-8">
            {isNewFormat ? (
              <div
                style={{
                  fontWeight: 400,
                }}
                className="text-[#424959] text-center sm:text-lg text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                dangerouslySetInnerHTML={{
                  __html: processTextWithBoldAndLinks(
                    conditionContent!.subtitle ||
                      `Comprehensive care and treatment options for ${conditionContent!.title} at Mountain Spine & Orthopedics.`,
                    conditionContent!.slug
                  )
                }}
              />
            ) : (
              <div
                style={{
                  fontWeight: 400,
                }}
                className="text-[#424959] text-center sm:text-lg text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                dangerouslySetInnerHTML={{
                  __html: linkifyText(condition_details!.body, condition_details!.slug)
                }}
              />
            )}
          </div>
        </div>
      </section>

      <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
        <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
          <DoctorContactForm backgroundcolor={'#FAFAFA'} />
          <div className='mt-10' />
          <ConditionList currentCondition={isNewFormat ? conditionContent!.title : condition_details!.title} />

          <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6' aria-label="Our Doctors">
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] text-5xl"
              aria-hidden="true"
            >
              Meet our Doctors
            </p>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-[32px] gap-y-[32px] '>
              {
                randomDoctors.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.name} />
                ))
              }
            </div>
          </section>
          <div className='lg:hidden flex flex-col mt-6'>
            <InternalLinkingSection currentSlug={isNewFormat ? conditionContent!.slug : condition_details!.slug} pageType="condition" />
          </div>

        </div>


        <div className=' w-full lg:w-[70%] lg:order-2 order-1  flex flex-col space-y-[60px] lg:mt-0 mt-6 rounded-[24px] '>
          <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full p-4 md:p-[40px] rounded-[24px]'>
            {isNewFormat ? (
              <>
                {/* Overview Section - uses detailedOverview for richer SEO content if available */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-5xl text-2xl'
                  >
                    {conditionContent!.overview.heading}
                  </h2>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                    className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                    dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(conditionContent!.detailedOverview || conditionContent!.overview.body, conditionContent!.slug) }}
                  />
                </div>

                {/* Symptoms Section */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-4xl text-2xl'
                  >
                    {ensureConditionHeadingIncludesKeyword(
                      conditionContent!.symptoms.heading,
                      conditionContent!.title,
                      'of'
                    )}
                  </h2>
                  <p
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                    className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                    dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(conditionContent!.symptoms.intro, conditionContent!.slug) }}
                  />
                  <ul className="list-disc pl-5 space-y-2">
                    {conditionContent!.symptoms.list.map((symptom, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                        }}
                        className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                        dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(symptom, conditionContent!.slug) }}
                      />
                    ))}
                  </ul>
                </div>

                {/* Hero Image */}
                <Image 
                  src={conditionContent!.heroImage} 
                  alt={conditionContent!.heroImageAlt} 
                  width={300} 
                  height={300} 
                  layout="responsive" 
                  className="w-full h-full object-cover object-center aspect-video rounded-[24px]" 
                />

                {/* Causes Section */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-4xl text-2xl'
                  >
                    {ensureConditionHeadingIncludesKeyword(
                      conditionContent!.causes.heading,
                      conditionContent!.title,
                      'of'
                    )}
                  </h2>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                    className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                    dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(conditionContent!.causes.body, conditionContent!.slug) }}
                  />
                </div>

                {/* Conservative Care Section */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-4xl text-2xl'
                  >
                    {ensureConditionHeadingIncludesKeyword(
                      conditionContent!.conservativeCare.heading,
                      conditionContent!.title,
                      'for'
                    )}
                  </h2>
                  <div
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontWeight: 400,
                    }}
                    className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                    dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(conditionContent!.conservativeCare.body, conditionContent!.slug) }}
                  />
                  <ul className="list-disc pl-5 space-y-2">
                    {conditionContent!.conservativeCare.methods.map((method, index) => (
                      <li
                        key={index}
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                        }}
                        className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                        dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(method, conditionContent!.slug) }}
                      />
                    ))}
                  </ul>
                </div>

                {/* Surgery Option CTA */}
                {conditionContent!.surgeryOption && (
                  <div className=' flex flex-col space-y-[16px] '>
                    <h2
                      style={{
                        fontFamily: 'var(--font-public-sans)',
                        fontWeight: 500,
                      }}
                      className='text-[#111315] sm:text-4xl text-2xl'
                    >
                      {ensureConditionHeadingIncludesKeyword(
                        conditionContent!.surgeryOption.heading,
                        conditionContent!.title,
                        'for'
                      )}
                    </h2>
                    <div
                      style={{
                        fontFamily: "var(--font-inter)",
                        fontWeight: 400,
                      }}
                      className="text-[#424959] sm:text-xl text-sm [&_strong]:font-semibold [&_strong]:text-[#111315] [&_a]:underline [&_a]:text-[#252932] [&_a:hover]:text-[#2358AC]"
                      dangerouslySetInnerHTML={{ __html: processTextWithBoldAndLinks(conditionContent!.surgeryOption.description, conditionContent!.slug) }}
                    />
                    <Link 
                      href={`/treatments/${conditionContent!.surgeryOption.slug}`}
                      className="bg-white border hover:cursor-pointer border-[#252932] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px] w-fit"
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-inter)",
                          fontWeight: 400,
                        }}
                        className="text-[#252932]"
                      >
                        Learn More About {conditionContent!.surgeryOption.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                        <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#252932" />
                      </svg>
                    </Link>
                  </div>
                )}

                {/* Internal Links Section */}
                {conditionContent!.internalLinks && conditionContent!.internalLinks.length > 0 && (
                  <div className=' flex flex-col space-y-[16px] '>
                    <h2
                      style={{
                        fontFamily: 'var(--font-public-sans)',
                        fontWeight: 500,
                      }}
                      className='text-[#111315] sm:text-4xl text-2xl'
                    >
                      Related Treatments & Conditions
                    </h2>
                    <div className="flex flex-wrap gap-3">
                      {conditionContent!.internalLinks.map((link, index) => {
                        // Check if slug exists in conditions or treatments arrays
                        const isCondition = conditions.some(c => c.slug === link.slug) || conditionContentPlaceholders.some(c => c.slug === link.slug);
                        const isTreatment = AllTreatments.some(t => t.slug === link.slug) || allTreatmentContent.some(t => t.slug === link.slug);
                        
                        // Default to treatment if not found in conditions (most internal links are treatments)
                        const href = isCondition ? `/conditions/${link.slug}` : `/treatments/${link.slug}`;
                        
                        return (
                          <Link
                            key={index}
                            href={href}
                            className="bg-white border hover:cursor-pointer border-[#252932] px-[20px] py-[10px] rounded-[62px] text-sm transition-colors hover:bg-[#FAFAFA]"
                          >
                            <span
                              style={{
                                fontFamily: "var(--font-inter)",
                                fontWeight: 400,
                              }}
                              className="text-[#252932]"
                            >
                              {link.text}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Schedule a Consultation Today */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-4xl text-2xl'
                  >
                    {ensureConditionHeadingIncludesKeyword(
                      'Schedule a Consultation Today',
                      conditionContent!.title,
                      'for'
                    )}
                  </h2>
                  <Link href="/find-care/candidacy-check">
                    <button
                      style={{
                        fontFamily: 'var(--font-public-sans)',
                        fontWeight: 500,
                      }}
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[62px] bg-[#2358AC] text-white text-base font-semibold hover:bg-[#1a4a8a] transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      Take our quick candidacy check form
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* FAQ Section */}
                {conditionContent!.faqs && conditionContent!.faqs.length > 0 && (
                  <ConditionTreatmentFAQSection 
                    faqs={conditionContent!.faqs} 
                    pageTitle={conditionContent!.title}
                    currentSlug={conditionContent!.slug}
                  />
                )}

                {/* FAQ Section from dedicated data file */}
                <ConditionFAQ slug={conditionContent!.slug} />
              </>
            ) : (
              <>
                {/* Legacy Format - Keep existing rendering */}
                {/* Detail */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-5xl text-2xl'
                  >
                    About {condition_details!.title}
                  </h2>
                  {renderField(condition_details?.detail, condition_details!.slug)}
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
                    What Are the Symptoms of {condition_details!.title}?
                  </h2>
                  {renderField(condition_details?.what_sym, condition_details!.slug)}
                </div>

                {/* Video */}
                <Image src={condition_details?.inTxt_img ? condition_details?.inTxt_img : Logo} alt={condition_details!.title} width={300} height={300} layout="responsive" className="w-full h-full object-cover object-center aspect-video rounded-[24px]   " />
                {renderField(condition_details!.body, condition_details!.slug)}


                {/* Are There Specific Risk Factors  */}
                <div className=' flex flex-col space-y-[16px] '>
                  <h2
                    style={{
                      fontFamily: 'var(--font-public-sans)',
                      fontWeight: 500,
                    }}
                    className='text-[#111315] sm:text-4xl text-2xl'
                  >
                    Are There Specific Risk Factors for {condition_details!.title}?
                  </h2>
                  {renderField(condition_details?.risk_fac, condition_details!.slug)}
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
                    Diagnosing {condition_details!.title}?
                  </h2>
                  {renderField(condition_details?.diagnose, condition_details!.slug)}
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
                    Treatment for {condition_details!.title}?
                  </h2>
                  {renderField(
                    condition_details?.slug === 'synovitis'
                      ? `Treatment depends on the underlying cause. Nonsteroidal anti-inflammatory drugs (NSAIDs) and corticosteroid injections are often used to reduce inflammation and restore function. If the cause is an autoimmune condition, specific medications like DMARDs may be prescribed. In persistent cases, a minimally invasive procedure called an arthroscopic synovectomy may be recommended to remove the inflamed tissue. For targeted relief, see our <Link href="/treatments/anti-inflammatory-injections-for-joint-and-spine-pain">Anti-Inflammatory Injections for Joint and Spine Pain</Link> and <Link href="/treatments/arthroscopic-knee-surgery">Arthroscopic Knee Surgery</Link>.`
                      : condition_details?.treatment,
                    condition_details!.slug
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
                    Does {condition_details!.title} Cause Pain?
                  </h2>
                  {renderField(condition_details?.pain_info, condition_details!.slug)}
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
                  {renderField(condition_details?.prevent, condition_details!.slug)}
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
                  {renderField(condition_details?.schedule, condition_details!.slug)}
                  <Link href="/find-care/candidacy-check">
                    <button
                      style={{
                        fontFamily: 'var(--font-public-sans)',
                        fontWeight: 500,
                      }}
                      className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[62px] bg-[#2358AC] text-white text-base font-semibold hover:bg-[#1a4a8a] transition-all duration-200 shadow-sm hover:shadow-md"
                    >
                      Take our quick candidacy check form
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </Link>
                </div>

                {/* FAQ Section from dedicated data file */}
                <ConditionFAQ slug={condition_details!.slug} />
              </>
            )}
          </section>

          <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden ' aria-label="Our Doctors">
            <p
              style={{
                fontFamily: "var(--font-public-sans)",
                fontWeight: 400,
              }}
              className="text-[#111315] text-5xl"
              aria-hidden="true"
            >
              Meet our Doctors
            </p>
            <div className='grid grid-cols-1 xl:grid-cols-2 gap-x-[32px] gap-y-[32px]'>
              {
                randomDoctors.map((doctor) => (
                  <DoctorCard doctor={doctor} key={doctor.name} />
                ))
              }
            </div>
          </section>
          <div className='lg:flex hidden flex-col'>
            <InternalLinkingSection currentSlug={isNewFormat ? conditionContent!.slug : condition_details!.slug} pageType="condition" />
          </div>
          <div>

          </div>
        </div>
      </section>
    </main>
  )
}
