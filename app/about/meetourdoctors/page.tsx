import React from 'react'
import Image from 'next/image'
import { Doctors } from "@/components/data/doctors";
import DoctorCard from '@/components/DoctorCard'
import RatingsAndReviews from '@/components/RatingsAndReviews';
import { TextAnimate } from '@/components/magicui/text-animate';
import Link from 'next/link';

export const metadata = {
  title: 'Meet Our Doctors | Orthopedic & Spine Specialists in Florida | Mountain Spine & Orthopedics',
  description: 'Our team of board-certified spine and orthopedic specialists offers expert care across Florida. Learn more about our surgeons and pain management experts.',
  openGraph: {
    title: 'Meet Our Doctors | Orthopedic & Spine Specialists in Florida | Mountain Spine & Orthopedics',
    description: 'Our team of board-certified spine and orthopedic specialists offers expert care across Florida. Learn more about our surgeons and pain management experts.'
  },
  twitter: {
    title: 'Meet Our Doctors | Orthopedic & Spine Specialists in Florida | Mountain Spine & Orthopedics',
    description: 'Our team of board-certified spine and orthopedic specialists offers expert care across Florida. Learn more about our surgeons and pain management experts.'
  }
};

export default function MeetOurDoctors() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={'https://mountainspineortho.b-cdn.net/public/MeetOurDoctorsLanding.jpeg'} fill className="h-full absolute top-0 object-cover  object-center md:object-top self-end w-full md:pl-[100px] pl-8" alt="Doctor Diagnosing a Old Patient" />

        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-50">
          <div className="md:w-[565px] h-full absolute left-0 top-0 w-[95%]"
            style={{
              background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
            }}
          />

          <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[220px] md:w-[60%] lg:w-[45%] xl:w-[56%]">
            <h1
              style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
              className="text-[#022968] lg:text-7xl md:text-5xl text-4xl"
            >
              Meet Our Doctors
            </h1>
          </div>

          <div className="z-[2] px-6 xl:px-[80px] mt-[24px] md:w-[50%]">
            <p
              style={{
                fontWeight: 400,
              }}
              className="text-white text-shadow-sm text-xl lg:text-2xl"
            >
              Not sure which spine condition you might have?<br className=' xl:flex hidden' />{' '}Find out with our 2-minute Condition Checker.
            </p>
          </div>

          <div className=' mt-[40px]  px-6 xl:px-[80px] pb-8'>
            <Link href={'/condition-check'}
              className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0094E0] w-fit text-white text-[14px] font-semibold justify-center items-center hover:cursor-pointe "
            >
              <h1
                style={{
                  fontFamily: "var(--font-public-sans)",
                  fontWeight: 500, fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0.02em"
                }}
              >Condition Checker</h1>
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
        <div className=" flex flex-row">
          <div className=" flex flex-col space-y-[24px] md:w-[50%]">
            <h2
              style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
              className="text-black text-5xl text-left w-full"
            >Meet Our Doctors</h2>
          </div>
        </div>
        <div className=" mt-[60px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-16 items-stretch">
          {
            Doctors.map((item) => (
              <DoctorCard key={item.name} doctor={item} />
            ))
          }
        </div>
      </section>

      <RatingsAndReviews />
    </main>
  )
}
