'use client'
import React from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import {Conditions} from '@/components/data/conditions'
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

export default function ConditionDetails({
    params,
  }: {
    params: Promise<{ ConditionDetails : string }>
  }) {
// Unwrap the promise using React.use (the experimental hook)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.ConditionDetails
  const condition_details = Conditions.find( x => x.slug === conditionSlug)
  if (!condition_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Condition not found</h1>
      </main>
    )
  }
  // Function to perform a Fisher-Yates shuffle on the array
    function shuffleArray(array) {
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
        <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div 
        style={{
        background: 'white',
        filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={ConditionDetialsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full lg:pr-0 lg:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative md:pt-20 lg:pt-40">
            <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

        <div className=' px-6 xl:px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit xl:w-[20%] items-center justify-center px-[20px] py-[10px]'
            style={{
                background : 'rgba(255, 255, 255, 0.50)'
            }}
            >
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    Condition
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#2358AC]"
                >
                    Condition Details
                </h1>
            </div>
        </div>
        <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[85%] lg:w-[62%] xl:w-[55%]">
            <TextAnimate animation="blurInUp" by="word" once
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
            }}
            className="text-[#022968] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
                {condition_details.title}
            </TextAnimate>
        </div>

        <div className="z-[2] px-6 xl:px-[80px] mt-[24px]  lg:w-[55%] pb-8">
            <p
            style={{
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "148%",
            }}
            className="text-[#111315]"
            >
                {condition_details.body}
            </p>
        </div>
        </div>
        </section>

        <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col overflow-hidden px-6 xl:px-[80px] py-[50px] space-x-[60px]'>
            <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
                <DoctorContactForm backgroundcolor={'#FAFAFA'}/>
                <div className=" flex w-[full] mt-[60px] ">
                    <span className="inline-flex items-center px-6 h-12 text-lg bg-[#EFF5FF] rounded-l-[62px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C12.4013 20 14.6049 19.1536 16.3287 17.7429L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.7429 16.3287C19.1536 14.6049 20 12.4013 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#5B5F67"/>
                    </svg>
                    </span>
                    <Input placeholder="Search Name or Keyword" className="h-12 text-lg rounded-l-none border-0 bg-[#EFF5FF] rounded-r-[62px] " onFocus={() => {}}/>
                </div> 

                <ConditionList currentCondition={condition_details.title} />

                <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] text-5xl"
                    >
                        Meet our Doctors
                    </h1>
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
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-5xl'
                        >
                        Details
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.detail}
                        </h1>
                    </div>
                    
                    {/* What are symptoms of */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-3xl'
                        >
                        What Are the Symptoms of {condition_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-lg'
                        >
                            {condition_details?.what_sym}
                        </h1>
                    </div>
                    
                    {/* Video */}
                    <Image src={condition_details?.inTxt_img ? condition_details?.inTxt_img : Logo} alt={condition_details.title} className="w-full h-full object-cover object-center aspect-video rounded-[24px]   " />
                    <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details.body}
                     </h1>
                    
                    
                    {/* Are There Specific Risk Factors  */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-3xl'
                        >
                        Are There Specific Risk Factors for {condition_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.risk_fac}
                        </h1>
                    </div>
    
                    {/*  Diagnosing */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-4xl'
                        >
                        Diagnosing {condition_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.diagnose}
                        </h1>
                    </div>
                    
                    {/* Treatment for  */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-4xl'
                        >
                        Treatment for {condition_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.treatment}
                        </h1>
                    </div>
    
                    {/* Does ... Cause Pain? */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-4xl'
                        >
                        Does {condition_details.title} Cause Pain?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.pain_info}
                        </h1>
                    </div>
                    
                    {/* What Can Patients Do to Prevent It? */}
    
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-4xl'
                        >
                        What Can Patients Do to Prevent It?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.prevent}
                        </h1>
                    </div>
    
                    {/* Schedule a Consultation Today */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h1
                            style={{
                                fontFamily : 'var(--font-reem-kufi)',
                                fontWeight : 500,
                            }}
                            className='text-[#111315] text-4xl'
                            >
                            Schedule a Consultation Today
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-xl'
                        >
                            {condition_details?.schedule}
                        </h1>
                    </div>
                </section>

                <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden '>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] text-5xl"
                    >
                        Meet our Doctors
                    </h1>
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
