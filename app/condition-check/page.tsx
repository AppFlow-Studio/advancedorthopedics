'use client'
import React, { useState } from 'react'
import PatientFormsLanding from '@/public/PatientFormsLanding.jpeg'
import OrthoDoctos from '@/public/OrthoDoctors.jpeg'
import Image from 'next/image'
import ContactUsSection from '@/components/ContactUsSection'
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  pain_area : z.string().array().nonempty({
    message : "Can't be empty!"
  }),
  pain_strongest : z.string().nonempty({ message : "Choose an area "}),
  pain_length : z.string().nonempty({ message : " "}),
  pain_desc : z.string().nonempty({}),
  pain_always : z.string()
  
})

export default function ConditionChecker() {
  const [ ConditionStep, setConditionStep ] = useState(1)
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        {/* Landing */}
        <section className="max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={PatientFormsLanding} className=" max-h-[945px] h-full absolute top-0 object-cover object-center self-end w-full max-w-[1440px] xl:w-[1440px] pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

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
                    Home
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
                    Condition Check
                </h1>
            </div>
        </div>
        <div className="px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] w-[55%]">
            <h1
            style={{
                fontFamily: "var(--font-reem-kufi)",
                fontWeight: 400,
                fontSize : '72px'
            }}
            className="text-[#022968]"
            >
                Condition Check
            </h1>
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
                Welcome to an exciting new way to obtain a preliminary diagnosis online based on your symptoms, previous tests, and history. This tool’s confidential results are often used by pain sufferers to assist them in seeking effective treatment, or as a confirmation of the existence of a specific orthopedic condition they may be concerned about.
            </p>
        </div>
        </div>
        </section>

        {/* Condition Checker */}
        <section className='max-w-[1440px] w-full h-full flex flex-col relative overflow-hidden bg-[#EFF5FF] py-[50px] px-[80px]'>
            <div className=' flex flex-row space-x-[20px] items-center justify-center'>

            </div>

            <div>

            </div>
        </section>
    </main>
  )
}
