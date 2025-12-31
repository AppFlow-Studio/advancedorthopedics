'use client'
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

interface ConditionDetailsClientProps {
    condition: ConditionInfoProp;
}

export default function ConditionDetailsClient({ condition }: ConditionDetailsClientProps) {
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
                        background: 'white',
                        filter: 'blur(30px)'
                    }}
                    className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
                />
                <Image src={ConditionDetialsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full lg:pr-0 lg:pl-[100px]" alt={`Orthopedic doctor evaluating patient for ${condition_details.title} diagnosis and treatment plan`} />

                <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
                    <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
                        style={{
                            background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
                        }}
                    />

                    <div className=' px-6 xl:px-[80px] z-[2]'>
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
                    <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[85%] lg:w-[62%] xl:w-[55%]">
                        <h1
                            style={{
                                fontFamily: "var(--font-public-sans)",
                                fontWeight: 400,
                            }}
                            className="text-[#252932] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
                        >
                            {condition.title}
                        </h1>
                    </div>

                    <div className="z-[2] px-6 xl:px-[80px] mt-[24px]  lg:w-[55%] pb-8">
                        <p
                            style={{
                                fontWeight: 400,
                            }}
                            className="text-white text-shadow-sm sm:text-lg text-sm"
                        >
                            {condition.body}
                        </p>
                    </div>
                </div>
            </section>

            <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
                <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
                    <DoctorContactForm backgroundcolor={'#FAFAFA'} />
                    <div className='mt-10' />
                    <ConditionList currentCondition={condition.title} />

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
                                About {condition.title}
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.detail}
                            </p>
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
                                What Are the Symptoms of {condition.title}?
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.what_sym}
                            </p>
                        </div>

                        {/* Video */}
                        <Image src={condition?.inTxt_img ? condition?.inTxt_img : Logo} alt={condition.title} width={300} height={300} layout="responsive" className="w-full h-full object-cover object-center aspect-video rounded-[24px]   " />
                        <p
                            style={{
                                fontFamily: 'var(--font-inter)',
                                fontWeight: 400,
                            }}
                            className='text-[#424959] sm:text-xl text-sm'
                        >
                            {condition.body}
                        </p>


                        {/* Are There Specific Risk Factors  */}
                        <div className=' flex flex-col space-y-[16px] '>
                            <h2
                                style={{
                                    fontFamily: 'var(--font-public-sans)',
                                    fontWeight: 500,
                                }}
                                className='text-[#111315] sm:text-4xl text-2xl'
                            >
                                Are There Specific Risk Factors for {condition.title}?
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.risk_fac}
                            </p>
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
                                Diagnosing {condition.title}?
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.diagnose}
                            </p>
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
                                Treatment for {condition.title}?
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.treatment}
                            </p>
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
                                Does {condition.title} Cause Pain?
                            </h2>
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.pain_info}
                            </p>
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
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.prevent}
                            </p>
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
                            <p
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                    fontWeight: 400,
                                }}
                                className='text-[#424959] sm:text-xl text-sm'
                            >
                                {condition?.schedule}
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