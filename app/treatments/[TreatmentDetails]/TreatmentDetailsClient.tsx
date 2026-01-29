'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg';
import { TreatmentsCardProp } from '@/types/content';
import { AllTreatments } from '@/components/data/treatments';
import { ConsultationForm } from '@/components/ContactForm';
import { Input } from '@/components/ui/input';
import { Doctors } from '@/components/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import Link from 'next/link';
import { TextAnimate } from '@/components/magicui/text-animate';
import TreatmentsList from '@/components/TreatmentsList';
import { notFound, redirect } from 'next/navigation';
import { treatmentThumbnailBySlug } from '@/lib/seo/treatment-images';

interface TreatmentDetailsClientProps {
    treatment: TreatmentsCardProp;
}

export default function TreatmentDetailsClient({ treatment }: TreatmentDetailsClientProps) {
    // ✅ Add JSON-LD schema for MedicalProcedure, BIlal Addition
    if (typeof window !== "undefined" && treatment) {
        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "MedicalProcedure",
            name: treatment.title,
            description: treatment.body,
            bodyLocation: treatment.conditions_treated,
            howPerformed: treatment.procedure_info,
            preparation: treatment.detail,
            followup: treatment.recovery_info,
            recognizingAuthority: {
                "@type": "Organization",
                name: "Mountain Spine and Orthopedics",
                url: "https://mountainspineorthopedics.com"
            },
            provider: {
                "@type": "MedicalOrganization",
                name: "Mountain Spine and Orthopedics",
                url: "https://mountainspineorthopedics.com"
            }
        };

        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.innerHTML = JSON.stringify(jsonLd);
        document.head.appendChild(script);
    }
    // ✅ End of JSON-LD schema for MedicalProcedure, BIlal Addition
    // Note: FAQPage schema is handled in layout.tsx to avoid duplicates

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
                        background: 'white',
                        filter: 'blur(30px)'
                    }}
                    className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
                />
                <Image src={ConditionDetialsLanding} fill className="h-full absolute top-0 object-cover object-top self-end w-full pl-[100px]" alt={`Orthopedic surgeon explaining ${treatment.title} procedure options to patient at Mountain Spine & Orthopedics`} />

                <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
                    <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
                        style={{
                            background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
                        }}
                    />

                    <div className='px-6 xl:px-[80px] z-[2]'>
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
                    <div className=" px-6 xl:px-[80px] z-[2] flex flex-row items-center justify-start mt-[12px] lg:w-[50%]">
                        <h1
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 400,
                            }}
                            className="text-[#252932] flex-wrap text-3xl md:text-6xl lg:text-7xl"
                        >
                            {treatment.title}
                        </h1>
                    </div>

                    <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
                        <p
                            style={{
                                fontWeight: 400,
                            }}
                            className="text-[#424959] sm:text-xl text-sm"
                        >
                            {treatment.body}
                        </p>
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
                        {/* Detail (skip redundant "About" - same text as hero subtitle) */}
                        {/* What is {treatment.title}? */}
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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.detail}
                            </p>
                        </div>


                        {/* Get SEO metadata from mapping if available */}
                        {(() => {
                            const seoMetadata = typeof treatment.inTxt_img === 'string' ? treatmentThumbnailBySlug[treatment.slug] : null;
                            const imageAlt = seoMetadata?.alt || `Medical illustration of ${treatment.title} treatment at Mountain Spine & Orthopedics`;
                            const imageTitle = seoMetadata?.title || `${treatment.title} | Mountain Spine & Orthopedics`;
                            
                            return (
                                <Image
                                    src={treatment.inTxt_img || '/default-treatment.png'}
                                    alt={imageAlt}
                                    title={imageTitle}
                                    width={300}
                                    height={300}
                                    layout="responsive"
                                    className="w-full h-full object-cover object-center rounded-[24px] bg-[#FAFAFA] items-center justify-center flex overflow-hidden aspect-video"
                                />
                            );
                        })()}

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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.procedure_info}
                            </p>
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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.conditions_treated}
                            </p>
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
                            {typeof treatment.benefits === 'string' ? (
                                <ul className="list-disc list-inside space-y-2 text-[#424959] sm:text-xl text-sm">
                                    <li>{treatment.benefits}</li>
                                </ul>
                            ) : Array.isArray(treatment.benefits) ? (
                                <ul className="list-disc list-inside space-y-2 text-[#424959] sm:text-xl text-sm">
                                    {treatment.benefits.map((benefit, index) => (
                                        <li key={index}>{benefit}</li>
                                    ))}
                                </ul>
                            ) : (
                                treatment.benefits
                            )}
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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.why_choose_us}
                            </p>
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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.recovery_info}
                            </p>
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
                            <p
                                style={{
                                    fontWeight: 400,
                                }}
                                className="text-[#424959] sm:text-xl text-sm"
                            >
                                {treatment.schedule}
                            </p>
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
                    </section>

                    <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden' aria-labelledby="doctors-desktop">
                        <p
                            id="doctors-desktop"
                            role="heading"
                            aria-level={2}
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 400,
                            }}
                            className="text-[#111315] sm:text-5xl text-3xl"
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
                    <div>

                    </div>
                </div>

            </section>
        </main>
    )
} 