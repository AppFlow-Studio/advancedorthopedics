'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import ConditionDetialsLanding from '@/public/ConditionDetails.jpeg'
import { ConditionInfoProp } from '@/components/ConditionCard'
import { AllTreatments, TreatmentsCardProp } from '@/components/data/treatments'
import { ConsultationForm } from '@/components/ContactForm'
import { Input } from '@/components/ui/input'
import { Doctors } from '@/components/data/doctors'
import DoctorCard from '@/components/DoctorCard'
import Link from 'next/link'
import { TextAnimate } from '@/components/magicui/text-animate'
import TreatmentsList from '@/components/TreatmentsList'
import { TreatmentCardInfoProp } from '@/components/TreatmentCard'
export default function TreatmentDetails({
    params,
  }: {
    params: Promise<{ TreatmentDetails : string }>
  }) {
// Unwrap the promise using React.use (the experimental hook)
  const resolvedParams = React.use(params)
  const conditionSlug = resolvedParams.TreatmentDetails
  const treatment_details : TreatmentsCardProp | undefined = AllTreatments.find( x => x.slug === conditionSlug)
  if (!treatment_details) {
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
        <Image src={ConditionDetialsLanding} className="h-full absolute top-0 object-cover object-top self-end w-full pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

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
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968]"
                >
                    Treatment
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
                    Treatment Details
                </h1>
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#022968] sm:flex hidden"
                >
                    /
                </h1>
    
                <h1
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                }}
                className="text-[#2358AC] sm:flex hidden"
                >
                    {treatment_details.title}
                </h1>
            </div>
        </div>
        <div className=" px-6 xl:px-[80px] z-[2] flex flex-row items-center justify-start mt-[12px] lg:w-[50%]">
            <TextAnimate animation="blurInUp" by="word" once
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
            }}
            className="text-[#022968] flex-wrap text-3xl md:text-6xl lg:text-7xl"
            >
                {treatment_details.title}
            </TextAnimate>
        </div>

        <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
            <p
            style={{
                fontWeight: 400,
            }}
            className="text-white text-shadow-sm sm:text-xl text-md"
            >
                {treatment_details.body}
            </p>
        </div>
        </div>
        </section>

        <section className=' max-w-[1440px] w-full h-full flex lg:flex-row flex-col relative overflow-hidden py-[50px] px-6 xl:px-[80px] space-x-[60px]'>
            <div className='lg:w-[30%] w-full lg:order-1 order-2 bg-white flex flex-col'>
                <ConsultationForm />
                <div className='mt-10'/>
                <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px]'>
                    <TreatmentsList currentTreatment={treatment_details.title} />
                </div>

                <section className='bg-white space-y-[40px] lg:hidden flex flex-col mt-6'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] sm:text-5xl text-3xl"
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
                        className='text-[#111315] sm:text-5xl text-3xl'
                        >
                        Details
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.body}
                        </h1>
                    </div>
                    
                    {/* What are symptoms of */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What is {treatment_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] text-sm sm:text-lg'
                        >
                            {treatment_details.detail}
                        </h1>
                    </div>
                    
                    {/* Video */}
                    <Image src={treatment_details.inTxt_img} alt={treatment_details.title} className="w-full h-full object-fill object-center rounded-[24px] bg-[#EFF5FF] items-center justify-center flex overflow-hidden aspect-video" />
                    
                     <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What does {treatment_details.title} look like?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.procedure_info}
                        </h1>
                    </div>
    
                    
                    {/* Conditions it Treats */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What Conditions does {treatment_details.title} Help Ease?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.conditions_treated}
                        </h1>
                    </div>
    
                    {/*  Diagnosing */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        Why Choose Mountain Spine & Orthopedics for {treatment_details.title}?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.why_choose_us}
                        </h1>
                    </div>
                    
                    {/* Treatment for  */}
                    <div className=' flex flex-col space-y-[16px] '>
                    <h1
                        style={{
                            fontFamily : 'var(--font-reem-kufi)',
                            fontWeight : 500,
                          }}
                        className='text-[#111315] text-2xl sm:text-4xl'
                        >
                        What does post {treatment_details.title} recovery look like?
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.recovery_info}
                        </h1>
                    </div>
    
    
                    {/* Schedule a Consultation Today */}
                    <div className=' flex flex-col space-y-[16px] '>
                        <h1
                            style={{
                                fontFamily : 'var(--font-reem-kufi)',
                                fontWeight : 500,
                            }}
                            className='text-[#111315] text-2xl sm:text-4xl'
                            >
                            Schedule a Consultation Today
                        </h1>
                        <h1
                         style={{
                            fontFamily : 'var(--font-inter)',
                            fontWeight : 400,
                          }}
                          className='text-[#5B5F67] sm:text-xl text-md'
                        >
                            {treatment_details.schedule}
                        </h1>
                    </div>
                </section>

                <section className='bg-white space-y-[40px] lg:flex-col lg:flex hidden'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] sm:text-5xl text-3xl"
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
