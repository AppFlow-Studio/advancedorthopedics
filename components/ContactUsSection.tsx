import React from 'react'
import Image from 'next/image'
import { ConsultationForm } from './ContactForm'
import HomeContactUs from '../public/HomeContactUs.jpeg'
export default function ContactUsSection({ backgroundcolor = '#FAFCFF' }: { backgroundcolor?: string }) {
  return (
    <section className={`bg-[${backgroundcolor}] w-full h-full py-[50px]`}>
      <div className="max-w-[1440px] w-full md:px-[40px] px-2 mx-auto flex xl:flex-row flex-col space-x-[60px]">
        <div className=" xl:w-[50%] w-full  flex flex-col p-[24px]">
          <h2
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#252932',
            }}
            className="text-5xl w-[90%]"
          >
            Take the first step toward
            a pain-free life .
          </h2>

          <p
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#424959',
            }}
            className="text-lg mt-[24px]"
          >
            Don't let pain hold you back any longer. Whether you need a second opinion, non-surgical options, or Mountain Spine & Orthopedics surgery, our team is here to help.
          </p>

          <Image src={HomeContactUs} className="w-full rounded-[24px] mt-[40px]" alt="Doctor teaching other doctors flex-1 flex" />
        </div>

        <div className=" xl:w-[50%] w-full flex flex-col bg-white p-[24px] rounded-[24px] items-center justify-center">
          <h3
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#252932',
            }}
            className="text-5xl text-center"
          >
            Contact Us
          </h3>

          <p
            style={{
              fontFamily: "var(--font-public-sans)",
              fontWeight: 500, color: '#424959',
            }}
            className="text-lg mt-[24px] text-center xl:w-[60%] w-full"
          >
            Have questions or need support?
            Reach out to us anytime - we're here to help.
          </p>

          <ConsultationForm />
        </div>
      </div>
    </section>
  )
}
