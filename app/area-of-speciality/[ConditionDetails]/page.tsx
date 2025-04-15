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
        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden" >
        <div 
        style={{
        background: 'white',
        filter: 'blur(30px)'
        }}
        className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={ConditionDetialsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-top pt-16 self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

        <div className="z-[1] flex flex-col w-full h-full  text-left relative  pb-[160px]">
            <div className="w-[565px] h-full absolute left-0 top-0"
            style={{
            background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
            />

        <div className=' px-[80px] z-[2]'>
            <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-[20%] items-center justify-center px-[20px] py-[10px]'
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
        <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[55%]">
            <TextAnimate animation="blurInUp" by="character" once
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
                fontSize : '72px'
            }}
            className="text-[#022968]"
            >
                {condition_details.title}
            </TextAnimate>
        </div>

        <div className="z-[2] px-[80px] mt-[24px] w-[55%]">
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

        <section className=' max-w-[1440px] w-full h-full flex lg:flex-row relative overflow-hidden px-[80px] py-[50px] space-x-[60px]'>
            <div className='w-[30%] bg-white flex flex-col'>
                <DoctorContactForm backgroundcolor={'#FAFAFA'}/>
                <div className=" flex w-[full] mt-[60px] ">
                    <span className="inline-flex items-center px-4 h-12 text-lg bg-[#EFF5FF] rounded-l-[62px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20C12.4013 20 14.6049 19.1536 16.3287 17.7429L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L17.7429 16.3287C19.1536 14.6049 20 12.4013 20 10C20 4.47715 15.5228 0 10 0ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="#5B5F67"/>
                    </svg>
                    </span>
                    <Input placeholder="Search Name or Keyword" className="h-12 text-lg rounded-l-none border-0 bg-[#EFF5FF] rounded-r-[62px] " onFocus={() => {}}/>
                </div> 

                <div className=' flex flex-col space-y-[20px] hover:cursor-pointer mt-[32px]'>
                    {
                        Conditions.map((item) => (
                            <Link href={`/area-of-speciality/${item.slug}`} className=' bg-[#FAFAFA] p-[16px] w-full flex flex-row justify-between items-center rounded-[10px]' key={item.title}>
                                <h1
                                style={{
                                fontFamily: "var(--font-reem-kufi)",
                                fontWeight: 400,
                                }}  
                                className=' text-[#111315] text-lg '
                                >{item.title}</h1>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                                    <path d="M0.55723 12.3964C0.718604 12.2745 1.20035 11.9106 1.47806 11.6939C2.03427 11.2598 2.77336 10.6667 3.51025 10.0269C4.25087 9.38385 4.97216 8.70833 5.50241 8.10822C5.76829 7.80731 5.97032 7.54297 6.10182 7.32484C6.22549 7.11969 6.25121 6.99851 6.25121 6.99851C6.25121 6.99851 6.22549 6.88088 6.10182 6.67574C5.97032 6.45761 5.76829 6.19328 5.50241 5.89236C4.97217 5.29225 4.25087 4.61674 3.51024 3.9737C2.77334 3.3339 2.03424 2.74079 1.47802 2.30671C1.20031 2.08998 0.719248 1.72658 0.557872 1.6047C0.224349 1.35906 0.152413 0.889059 0.398046 0.555536C0.643678 0.222013 1.11318 0.150764 1.4467 0.396397L1.44924 0.398315C1.6185 0.526155 2.11751 0.903056 2.40086 1.12419C2.96965 1.56806 3.73055 2.17849 4.49365 2.84105C5.25303 3.50037 6.03173 4.22604 6.62649 4.89916C6.9231 5.23486 7.18982 5.57515 7.38645 5.90131C7.57066 6.20689 7.75195 6.59379 7.75194 7.0003C7.75194 7.40681 7.57066 7.7937 7.38644 8.09927C7.18982 8.42544 6.9231 8.76573 6.62648 9.10143C6.03173 9.77454 5.25304 10.5002 4.49367 11.1595C3.73058 11.8221 2.96968 12.4325 2.40091 12.8764C2.11735 13.0977 1.61832 13.4746 1.44941 13.6022L1.44723 13.6038C1.11371 13.8495 0.643732 13.7786 0.398097 13.4451C0.152471 13.1115 0.223736 12.642 0.55723 12.3964Z" fill="#5B5F67"/>
                                </svg>
                            </Link>
                        ))
                    }
                </div>

            </div>


            <div className=' w-[70%]  flex flex-col space-y-[60px] rounded-[24px] '>
                <section className='bg-[#FAFAFA] space-y-[40px] flex flex-col w-full p-[40px] rounded-[24px]'>
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
                            {condition_details.body}
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
                            {condition_details.body}
                        </h1>
                    </div>
                    
                    {/* Video */}
                    <div className='rounded-[20px] w-full max-h-[425px] lg:h-[425px] bg-gray-500' />
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
                            {condition_details.body}
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
                            {condition_details.body}
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
                            {condition_details.body}
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
                            {condition_details.body}
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
                            {condition_details.body}
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
                            {condition_details.body}
                        </h1>
                    </div>
                </section>

                <section className='bg-white space-y-[40px] '>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-[#111315] text-5xl"
                    >
                        Meet our Doctors
                    </h1>
                    <div className='grid grid-cols-2 gap-x-[32px] '>
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
