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
        <div
          style={{
            filter: 'blur(30px)'
          }}
          className="w-full h-[120px] absolute top-0 z-[1]"
        />
        <Image
          src={'/herosectionimg.jpg'}
          priority={true}
          fetchPriority="high"
          layout='fill'
          className="h-full absolute top-0 object-cover object-center md:object-center w-full"
          alt="Doctor Diagnosing a Old Patient"
        />
        <div
          className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[100%] w-full"
          style={{
            background: 'linear-gradient(180deg, rgba(10, 80, 236, 0.20) 0%, rgba(255, 255, 255, 0.20) 100%)',
          }}
        />
        {/* <div
        className="lg:w-[100%] z-[1] h-full absolute left-0 top-0 md:w-[85%] w-full"
        style={{
          background: '#5FBBEC',
        }}
      /> */}
        <div className="z-[1] flex flex-col w-full h-full text-left relative sm:pt-60 sm:pb-20 pt-30 pb-0">

          <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-center text-center w-full">
            <h1
              style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }}
              className="text-[#252932] lg:text-7xl md:text-5xl text-4xl text-center"
            >
              Meet Our Doctors
            </h1>
          </div>

          <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full">
            <p
              style={{
                fontWeight: 400,
              }}
              className="text-[#424959] text-xl lg:text-2xl text-center"
            >
              Not sure which spine condition you might have?<br className=' xl:flex hidden' />{' '}Find out with our 2-minute Condition Checker.
            </p>
          </div>

          <div className=' mt-[40px]  px-6 xl:px-[80px] pb-8 w-full flex items-center justify-center'>
            <Link href={'/condition-check'}
              className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-transparent border border-[#0A50EC] w-fit text-[#0A50EC] text-[14px] font-semibold justify-center items-center hover:cursor-pointe "
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
