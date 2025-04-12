import React from 'react'
import Image from 'next/image'
import { ConsultationForm } from './ContactForm'
import HomeContactUs from '../public/HomeContactUs.jpeg'
export default function FindCareContactUsSection({ page, backgroundcolor = '#FAFCFF'}  : { page : string, backgroundcolor? : string}) {
  return (
    <section className={`bg-[${backgroundcolor}] w-full h-full py-[50px]`}>
    <div className="max-w-[1440px] w-full px-[40px] mx-auto flex flex-row space-x-[60px]">
      <div className=" w-[50%]  flex flex-col p-[24px]">
            <div className='pl-4 z-[2] w-full pb-2'>
                <div className='flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center'
                style={{
                    background : 'rgba(255, 255, 255, 0.50)'
                }}
                    >
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-black"
                    >
                        Find Care
                    </h1>

                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 400,
                    }}
                    className="text-black"
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
                        {page}
                    </h1>
                </div>
            </div>
          <h1
          style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            color : '#022968',
          }}
          className="text-5xl w-[90%]"
          >
            Take the first step toward 
            a pain-free life .
          </h1>

          <h1
           style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            color : '#5B5F67',
          }}
          className="text-lg mt-[24px]"
          >
            Don’t let pain hold you back any longer. Whether you need a second opinion, non-surgical options, or advanced orthopaedic surgery, our team is here to help.
          </h1>

          <Image src={HomeContactUs} className="w-full rounded-[24px] mt-[40px]" alt="Doctor teaching other doctors flex-1 flex" />
          
      </div>

      <div className=" w-[50%] flex flex-col bg-white p-[24px] rounded-[24px] items-center justify-center">
          <h1
          style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            color : '#022968',
          }}
          className="text-5xl text-center"
          >
            Contact Us
          </h1>

          <h1
           style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
            color : '#5B5F67',
          }}
          className="text-lg mt-[24px] text-center w-[60%]"
          >
            Have questions or need support? 
            Reach out to us anytime - we're here to help.
          </h1>

          <ConsultationForm />          
      </div>
    </div>      
    </section>
  )
}
