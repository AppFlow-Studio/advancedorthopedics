'use client'
import React from 'react'
import Image from 'next/image'
import Landing from '@/public/MeetOurDoctorsLanding.jpeg'
import { Doctors } from "@/components/data/doctors";
import DoctorCard from '@/components/DoctorCard'
import RatingsAndReviews from '@/components/RatingsAndReviews';
import { socials } from '@/components/DoctorCard';
import { MiniContactForm } from '@/components/MiniContactForm';
import { Dot } from 'lucide-react';
import { DoctorContactForm } from '@/components/DoctorContactForm';
import { TextAnimate } from '@/components/magicui/text-animate';
export default function DocotorDetails(
    {
        params,
      }: {
        params: Promise<{ Doctor_Name : string }> //Must Match Name of folder
      }
) {
// Unwrap the promise using React.use (the experimental hook)
    const resolvedParams = React.use(params)
    const conditionSlug = resolvedParams.Doctor_Name
    const doctor_details = Doctors.find( x => x.slug === conditionSlug)
    if (!doctor_details) {
    return (
        <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Condition not found</h1>
        </main>
    )
    }
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
         {/* Landing */}
         <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden" >
            <Image src={Landing} className=" lg:max-h-[945px] h-full absolute top-0 object-cover object-top self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

            <div className="z-[1] flex flex-col w-full h-full text-left relative pt-30 md:pt-50">
                <div className="w-[565px] h-full absolute left-0 top-0"
                style={{
                background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
                }}
                />

            <div className=' px-4 xl:px-[80px] z-[2]'>
                <div className=' mt-[220px] flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
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
                        Doctors
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
                        Doctor Details
                    </h1>
                </div>
            </div>
            <div className="px-4 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px]">
                <TextAnimate animation="blurInUp" by="character" once
                style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 400,
                    fontSize : '72px'
                }}
                className="text-[#022968]"
                >
                    {doctor_details.name}
                </TextAnimate>
            </div>

            <div className="z-[2] px-4 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
                <p
                style={{
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "148%",
                }}
                className="text-[#111315]"
                >
                    {doctor_details.desc}
                </p>
            </div>
            </div>
        </section>

        <section className='max-w-[1440px] w-full h-full flex flex-col lg:flex-row gap-x-[60px] relative overflow-hidden px-4 xl:px-[80px] py-[50px] '>
            <div className=' w-full lg:w-[35%] flex flex-col md:flex-row lg:space-x-0 space-x-6 lg:flex-col space-y-[60px] h-full'>
                <div className='w-full h-full lg:max-h-[630px] rounded-[16px] overflow-hidden space-y-[24px] hover:cursor-pointer'
                >
                    <div className='w-full h-full flex flex-col'>
                        <Image src={doctor_details.img} alt={doctor_details.name} className='w-full lg:max-h-[400px] rounded-[16px] bg-gray-500 lg:h-[400px] aspect-square' draggable={false} />
                        <div className='flex flex-col space-y-[16px]'>
                            <h1
                            style={{
                            fontFamily: "var(--font-reem-kufi)",
                            fontWeight: 500,
                            }}
                            className="text-black text-3xl text-left w-full lg:mt-0 mt-4"
                            >{doctor_details.name}</h1>
                            <h1
                            style={{
                            fontFamily: "var(--font-inter)",
                            fontWeight: 400,
                            }}
                            className="text-[#54535C] w-[50%]"
                            >
                            {doctor_details.practice}
                            </h1>
    
                            <div className=' flex flex-row space-x-[16px]'>
                                {
                                    socials.map((item,index) => (
                                        <div className=' border border-[#EFF5FF] rounded-full px-[13px] py-[10px] items-center justify-center' key={index}>
                                            <item.icon />
                                        </div>
                                    ))
                                }
                            </div>
                                
                        </div>
                    </div>
                </div>
                <DoctorContactForm backgroundcolor='#FAFAFA'/>
            </div>
            <div className=' w-full lg:w-[70%] h-full flex flex-col space-y-[40px] md:mt-0 mt-4'>
                <div className=' flex flex-col space-y-[24px]'>
                    <h1
                    style={{
                        fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className='text-[#111315] text-4xl'
                    >
                    About Me
                    </h1>
                    
                    <h1
                     style={{
                        fontFamily : 'var(--font-inter)',
                        fontWeight : 400,
                    }}
                    className='text-[#838890] text-lg'
                    >
                        {doctor_details.aboutme}
                    </h1>
                </div>

                <div className=' flex flex-col space-y-[24px]'>
                    <h1
                    style={{
                        fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className='text-[#111315] text-4xl'
                    >
                    Board certified surgeon
                    </h1>
                    
                    <h1
                     style={{
                        fontFamily : 'var(--font-inter)',
                        fontWeight : 400,
                    }}
                    className='text-[#838890] text-lg'
                    >
                        {doctor_details.bio}
                    </h1>
                </div>

                <div className=' flex flex-col space-y-[24px]'>
                    <h1
                    style={{
                        fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className='text-[#111315] text-4xl'
                    >
                    Areas of expertise
                    </h1>
                    
                    <div className='flex flex-col space-y-4'>
                        {
                            ['Laser Spine Surgery', 'Laminoforaminotomy', 'Endoscopic Foraminotomy', 'Orthopedic Surgery', 'Interlaminar Spacer'].map((item) => (
                            <div className=' flex flex-row space-x-2 items-center' key={item}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M1.29199 8.99996C1.29199 13.2572 4.74313 16.7083 9.00033 16.7083C13.2575 16.7083 16.7087 13.2572 16.7087 8.99996C16.7087 4.74276 13.2575 1.29163 9.00033 1.29163C4.74313 1.29163 1.29199 4.74276 1.29199 8.99996ZM9.00033 17.9583C4.05277 17.9583 0.0419922 13.9475 0.0419922 8.99996C0.0419922 4.05241 4.05277 0.041626 9.00033 0.041626C13.9479 0.041626 17.9587 4.05241 17.9587 8.99996C17.9587 13.9475 13.9479 17.9583 9.00033 17.9583ZM12.7944 6.92229C13.0276 6.66784 13.0104 6.27249 12.756 6.03924C12.5015 5.806 12.1062 5.82319 11.8729 6.07764L7.73069 10.5964L6.10893 8.97469C5.86486 8.73061 5.46913 8.73061 5.22505 8.97469C4.98097 9.21877 4.98097 9.61449 5.22505 9.85857L7.30838 11.9419C7.42892 12.0624 7.59347 12.1285 7.7639 12.1248C7.93433 12.1211 8.09586 12.048 8.21105 11.9223L12.7944 6.92229Z" fill="#92BCFF"/>
                                </svg>
                                <h1
                                style={{
                                    fontFamily : 'var(--font-reem-kufi)',
                                    fontWeight : 400,
                                }}
                                className='text-[#111315] text-xl'
                                >
                                    {item}
                                </h1>
                            </div>
                            ))
                        }
                    </div>
                </div>

                <div className=' flex flex-col space-y-[24px]'>
                    <h1
                    style={{
                        fontFamily : 'var(--font-reem-kufi)',
                        fontWeight : 500,
                    }}
                    className='text-[#111315] text-4xl'
                    >
                    Snapshot
                    </h1>
                    
                    <div className='flex flex-col space-y-4'>
                        {
                            doctor_details.snapshot.map((item) => (
                            <div className=' flex flex-row space-x-2 items-center' key={item}>
                                <Dot className='text-[#838890]' size={25}/>
                                <h1
                                style={{
                                    fontFamily : 'var(--font-reem-kufi)',
                                    fontWeight : 400,
                                }}
                                className='text-[#838890] text-xl'
                                >
                                    {item}
                                </h1>
                            </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}
