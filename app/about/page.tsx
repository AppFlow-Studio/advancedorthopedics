import React from 'react'
import Image from 'next/image'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import ClinicsMap from '@/components/ClinicsMap'
import ContactUsSection from '@/components/ContactUsSection'
import { Doctors } from "@/components/data/doctors";
import DoctorCard from '@/components/DoctorCard'
import StarRating from '@/components/StarRating'
import { TextAnimate } from '@/components/magicui/text-animate'
import Link from 'next/link'
export default function AboutUs() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
    {/* Landing */}
    <section className=" w-full h-full flex flex-col relative overflow-hidden" >
    
      <Image src={'https://mountainspineortho.b-cdn.net/public/AboutUsLanding.jpeg'} fill className=" h-full absolute top-0 object-cover object-center pt-0 self-end w-full  md:pl-10 lg:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>

      <div className="z-[1] flex flex-col w-full h-full text-left relative pt-10">
        <div className="lg:w-[60%] w-full h-full absolute left-0 top-0"
        style={{
          background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)',
        }}
        />

      <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[300px] md:w-[70%] xl:w-[55%]">
          <TextAnimate animation="blurInUp" by="character" once
          style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 400,
          }}
          className="text-[#022968] text-3xl md:text-6xl"
          >
            About Mountain Spine & Orthopedics
          </TextAnimate>
      </div>

      <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] xl:w-[50%] pb-8">
          <p
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "148%",
          }}
          className="text-white text-shadow-sm text-md sm:text-lg md:text-xl"
          >
              Advanced Orthopaedics is dedicated to delivering minimally invasive laser spine surgeries to eliminate the pain, discomfort, and dysfunction of numerous conditions of the neck and back.            
          </p>
      </div>
      </div>
    </section>

    {/* Leading Experts */}
    <section className=' w-full max-w-[1440px] flex flex-col py-[50px] h-full px-6 xl:px-[40px]'>
        <div className=' space-x-[12px] flex flex-row items-center justify-center'>
            <StarRating rating={5} size={25}  />
            <h1 
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className='text-[#5B5F67] text-xl'
            >
                250k+ Reviews
            </h1>
        </div>

        <div className=' mt-[16px] '>
            <h1
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className='text-[#00031A] md:text-6xl text-center text-3xl sm:text-5xl '
            >
            Leading Experts in Minimally Invasive Spine Surgery & Pain Management
            </h1>
        </div>

        <div className=' mt-[20px] self-center w-[92%]'>
            <h1
            style={{
                fontFamily : 'var(--font-reem-kufi)',
                fontWeight : 500,
            }}
            className='text-[#5B5F67] text-lg sm:text-xl text-center'
            >
            Our award-winning team of FL spine surgeons and medical staff offer the latest in research, technology, and treatments for pain management and minimally invasive surgery.<span className='text-black font-[600]'> Our comprehensive “concierge” services range from non-surgical, conservative methods to gentle, minimally invasive surgeries performed through incisions that are smaller than a postage stamp.</span>
            <br/><br/>
            Our spine surgeons are dedicated to achieving the best results for every patient with the least invasive approach possible using state-of-the-art equipment and procedures to promote faster recovery times that allow you to return to normal activities much sooner. We offer expert diagnosis and treatment for pain and dysfunction caused by deformity, degenerative disc disease, trauma, and failed neck or back surgeries.<span className='text-black font-[600]'>Mountain Spine & Orthopedics operate in the most efficient ways to provide a safe environment and deliver the most effective surgical services to patients in Florida, New York, New Jersey and Pennsylvania.</span> When it comes to spine-related issues, Mountain Spine & Orthopedics offers the treatment and care you deserve and expect. Regardless of the cause, our experienced team is ready to help.
            <br/><br/>
            Our experienced and board-certified neurologists, neurosurgeons, orthopedic specialists, and physicians work together to treat specific spine and back disorders using minimally invasive techniques. We combine advanced technology with a patient-centered approach to ensure our patients get the best possible outcomes.
            </h1>
        </div>
        
        <div className='mt-[10px]'/>
        <ClinicsMap />

    </section>

    {/* Meet our Experts */}
    <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
      <div className=" flex md:flex-row flex-col">
        <div className=" flex flex-col space-y-[24px] md:w-[50%] w-full">
          <h1
          style={{
            fontFamily: "var(--font-reem-kufi)",
            fontWeight: 500,
          }}
          className="text-black text-5xl text-left w-full"
          >Meet Our Experts</h1>
          <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
          }}
          className="text-[#54535C] md:w-[50%] w-full"
          >
            Highly skilled and compassionate professionals ready to care for you
          </h1>
        </div>

        <div className="md:w-[50%] flex items-center md:justify-end w-full md:mt-0 mt-4">
          <Link
          href={'/about/meetourdoctors'}
          className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px]">
          <h1
          style={{
            fontFamily: "var(--font-inter)",
            fontWeight: 400,
          }}
          className="text-[#022968]"
          >View all</h1>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
            <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968"/>
          </svg>
          </Link>
        </div>
      </div>    
      <div className=" mt-[60px] grid xl:grid-cols-3  grid-cols-1 md:grid-cols-2 gap-[32px]">
          {
            Doctors.slice(0,3).map((item) => (
              <DoctorCard key={item.name} doctor={item}/>
            ))
          }
        </div>
    </section>


    {/* What our patients say */}
    <RatingsAndReviews />

    {/* Map */}
    <ClinicsMap />

    {/* Contact Us */}
    <ContactUsSection />

    </main>
  )
}
