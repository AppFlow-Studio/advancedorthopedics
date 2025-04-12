import React from 'react'
import ContactUsSection from '@/components/ContactUsSection'
import RatingsAndReviews from '@/components/RatingsAndReviews'
import Image from 'next/image'
import AAOS from '@/public/aaos.png';
import ACP from '@/public/ACP.png';
import AOA from '@/public/AOA.png';
import NASS from '@/public/NASS.png';
import Serpent from '@/public/Serpent.png';
import SMIS from '@/public/SMIS.png';
import { Doctors } from '@/components/data/doctors';
import DoctorCard from '@/components/DoctorCard';
import FAQsSection from '@/components/FaqsSection';
import DoctorsTestitmonial from '@/components/DoctorsTestitmonial';
import FindCareContactUsSection from '@/components/FindCardContactUsSection';

const faqItems : {question : string, answer : React.JSX.Element}[] = [
    {
        question : 'What is a second opinion?',
        answer : (
            <p>
                A second opinion from Orthopedic & Laser Spine Surgery can ensure that you receive the most effective treatment plan. Our experienced spine and orthopedic specialists provide valuable insights into your medical condition. 
                <br/><br/>A remote second opinion helps confirm your diagnosis, prevent unnecessary procedures, optimize treatment strategies, and bolster your confidence in making informed health decisions.
            </p>
        )
    },
    {
        question : 'When should I seek a second opinion?',
        answer : (
            <p>
                A second opinion from Orthopedic & Laser Spine Surgery can ensure that you receive the most effective treatment plan. Our experienced spine and orthopedic specialists provide valuable insights into your medical condition. 
                <br/><br/>A remote second opinion helps confirm your diagnosis, prevent unnecessary procedures, optimize treatment strategies, and bolster your confidence in making informed health decisions.
            </p>
        )
    },
    {
        question : 'What does a second opinion cost?',
        answer : (
            <p>
                A second opinion from Orthopedic & Laser Spine Surgery can ensure that you receive the most effective treatment plan. Our experienced spine and orthopedic specialists provide valuable insights into your medical condition. 
                <br/><br/>A remote second opinion helps confirm your diagnosis, prevent unnecessary procedures, optimize treatment strategies, and bolster your confidence in making informed health decisions.
            </p>
        )
    },
    {
        question : 'Which patients benefit most from a second opinion?',
        answer : (
            <p>
                A second opinion from Orthopedic & Laser Spine Surgery can ensure that you receive the most effective treatment plan. Our experienced spine and orthopedic specialists provide valuable insights into your medical condition. 
                <br/><br/>A remote second opinion helps confirm your diagnosis, prevent unnecessary procedures, optimize treatment strategies, and bolster your confidence in making informed health decisions.
            </p>
        )
    },
    {
        question : 'Will my current doctor be offended if I get a second opinion?',
        answer : (
            <p>
                A second opinion from Orthopedic & Laser Spine Surgery can ensure that you receive the most effective treatment plan. Our experienced spine and orthopedic specialists provide valuable insights into your medical condition. 
                <br/><br/>A remote second opinion helps confirm your diagnosis, prevent unnecessary procedures, optimize treatment strategies, and bolster your confidence in making informed health decisions.
            </p>
        )
    }
]

const Testimonial = (
    <p>
        While virtual care isn’t a complete substitute for face-to-face consultations, it is an exceptional method for obtaining second opinions. A virtual second opinion from Orthopedic & Laser Spine Surgery helps you make an informed decision about your medical treatment from the comfort of your home.<br/><br/>For patients who live far from major medical centers or have difficulties traveling, our Virtual Second Opinion service provides easy access to comprehensive evaluations by leading spine and orthopedic specialists. Already have an MRI? Use our Free MRI Review tool to let our doctors review it for free.`
    </p>
)

const Header = (
    <p>
        Your Questions Answered: Second Opinion<br/>
        FAQs From Our Patients
    </p>
)

export default function SecondOpinion() {
  return (
     <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
            <section className=' bg-[#6FC2ED] w-full flex flex-row'>
              <div className=' max-w-[1440px] w-full flex flex-col items-start justfiy-start p-[16px]  pt-26 px-[100px]'>
                  <h1
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-[#022968] text-6xl'
                  >
                    Get a Second Opinion
                  </h1>
                  <h1
                  style={{
                    fontFamily : 'var(--font-reem-kufi)',
                    fontWeight : 500,
    
                  }}
                  className='text-white text-xl'
                  >
                    Our Virtual Second Opinion service offers easy access for remote patients to top specialists.            
                </h1>
              </div>
            </section>
            <FindCareContactUsSection page={'Get a Second Opinion'} backgroundcolor="white"/>
            <div className="w-full flex flex-row items-center justify-evenly bg-white py-20 "
              style={{
                background : 'linear-gradient(0deg, #6FC2ED 47.98%, rgba(118, 197, 238, 0.00) 100%)',
              }}
              >
                {
                  [AAOS, ACP, AOA, NASS, Serpent, SMIS].map((item, index) => (
                    <Image key={index} src={item} alt="Logo" className=" h-[40px] object-contain mx-[20px]" />
                  ))
                }
            </div>
            <RatingsAndReviews />

            <FAQsSection  header={Header} faqItems={faqItems} />
            
            <DoctorsTestitmonial testimonial={Testimonial}/>
            

            <section className='max-w-[1440px] w-full py-[30px] flex flex-row items-center justify-center'>
                <div 
                className=" max-h-[56px] h-full px-[32px] py-[16px] rounded-[62px] relative flex bg-[#0094E0] text-white text-[14px] font-semibold w-[40%] justify-center items-center hover:cursor-pointer"
                >
                    <div className='pr-[10px]'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M6 1C6 0.447715 5.55229 0 5 0C4.44772 0 4 0.447715 4 1V1.44885C3.23882 1.6903 2.57734 2.06994 2.01802 2.6746C1.18949 3.57031 0.83279 4.69272 0.664161 6.04866C0.499967 7.36894 0.499982 9.05406 0.5 11.1739V11.1739V11.8261V11.8261C0.499982 13.9459 0.499967 15.6311 0.664161 16.9513C0.83279 18.3073 1.18949 19.4297 2.01802 20.3254C2.8568 21.2322 3.92535 21.6329 5.21533 21.8204C6.45141 22.0001 8.02291 22 9.97119 22H9.97121H9.97122H12.0288H12.0288H12.0288C13.9771 22 15.5486 22.0001 16.7847 21.8204C18.0747 21.6329 19.1432 21.2322 19.982 20.3254C20.8105 19.4297 21.1672 18.3073 21.3358 16.9513C21.5 15.6311 21.5 13.9459 21.5 11.8261V11.1739C21.5 9.05408 21.5 7.36895 21.3358 6.04866C21.1672 4.69272 20.8105 3.57031 19.982 2.6746C19.4227 2.06993 18.7612 1.6903 18 1.44885V1C18 0.447715 17.5523 0 17 0C16.4477 0 16 0.447715 16 1V1.09173C14.903 0.999955 13.5863 0.999976 12.0288 1H12.0288H9.97122H9.97121C8.41374 0.999976 7.09704 0.999955 6 1.09173V1ZM3.49783 8C3.03921 8 2.8099 8 2.66385 8.14417C2.51781 8.28833 2.51487 8.51472 2.509 8.96751C2.50027 9.64067 2.5 10.3942 2.5 11.2432V11.7568C2.5 13.9616 2.50182 15.5221 2.64887 16.7045C2.79327 17.8656 3.06263 18.5094 3.48622 18.9673C3.89956 19.4142 4.4647 19.6903 5.503 19.8412C6.57858 19.9975 8.00425 20 10.05 20H11.95C13.9957 20 15.4214 19.9975 16.497 19.8412C17.5353 19.6903 18.1004 19.4142 18.5138 18.9673C18.9374 18.5094 19.2067 17.8656 19.3511 16.7045C19.4982 15.5221 19.5 13.9616 19.5 11.7568V11.2432C19.5 10.3942 19.4997 9.64067 19.491 8.96751C19.4851 8.51472 19.4822 8.28833 19.3362 8.14417C19.1901 8 18.9608 8 18.5022 8H3.49783ZM12 11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11V13H8C7.44772 13 7 13.4477 7 14C7 14.5523 7.44772 15 8 15H10V17C10 17.5523 10.4477 18 11 18C11.5523 18 12 17.5523 12 17V15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H12V11Z" fill="#E5F6FF"/>
                        </svg>
                    </div>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                        fontSize: "16px",
                        lineHeight: "24px",
                        letterSpacing: "0.02em"
                    }}
                    >Request for a Second Opinion</h1>
                </div>
            </section>

        </main>
  )
}
