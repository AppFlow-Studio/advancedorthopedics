import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import React from 'react'
import Image from 'next/image'
import AAOS from '@/public/AAOS.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import FindCareContactUsSection from '@/components/FindCardContactUsSection';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Marquee } from '@/components/magicui/marquee';
import type { Metadata } from 'next'
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata: Metadata = {
  title: 'Book Your Appointment | Mountain Spine & Orthopedics',
  description: 'Schedule your orthopedic consultation today. Our patient advocates are ready to help you book an in-person or virtual visit with our Florida specialists.',
  openGraph: {
    title: 'Book Your Appointment | Mountain Spine & Orthopedics',
    description: 'Schedule your orthopedic consultation today. Our patient advocates are ready to help you book an in-person or virtual visit with our Florida specialists.',
    url: buildCanonical('/find-care/book-an-appointment'),
    images: [
      {
        url: getOgImageForPath('/find-care/book-an-appointment'),
        width: 1200,
        height: 630,
        alt: 'Book an Appointment at Mountain Spine & Orthopedics',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Book Your Appointment | Mountain Spine & Orthopedics',
    description: 'Schedule your orthopedic consultation today. Our patient advocates are ready to help you book an in-person or virtual visit with our Florida specialists.',
    images: [getOgImageForPath('/find-care/book-an-appointment')],
  },
}

export default function BookAnAppointment() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
        <section className=' bg-[#6FC2ED] w-full flex flex-row'>
          <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px] pt-32 lg:pt-26 px-6 lg:px-[80px]'>
              <TextAnimate animation="blurInUp" by="word" once
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
              }}
              className='text-[#022968] text-3xl md:text-6xl'
              >
                Book an Appointment
              </TextAnimate>
              <p
              style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
              }}
              className='text-white md:text-xl text-lg mt-2'
              >
                Our patient advocates are here to help. Schedule a virtual or in-person appointment at your earliest convenience.
              </p>
          </div>
        </section>
        <FindCareContactUsSection page={'Book an Appointment'} backgroundcolor="white"/>
        <div className="w-full flex flex-row items-center justify-evenly bg-white py-20 "
          style={{
            background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)',
          }}
          >

            <Marquee pauseOnHover className='w-full' >
              {
                [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                  <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" />
                ))
              }   
            </Marquee>
            
        </div>
        <RatingsAndReviews />
    </main>
  )
}
