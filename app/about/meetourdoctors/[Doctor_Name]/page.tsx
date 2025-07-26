import { Doctors } from "@/components/data/doctors";
import Image from 'next/image';
import Landing from '@/public/MeetOurDoctorsLanding.jpeg';
import { notFound } from 'next/navigation';
import React from 'react';
import { Dot } from 'lucide-react';
import { TextAnimate } from '@/components/magicui/text-animate';
import { socials } from '@/components/DoctorCard';
import { DoctorContactForm } from '@/components/DoctorContactForm';
import Link from 'next/link';
import type { DoctorProp } from '@/components/data/doctors';

export const dynamicParams = false;
export async function generateStaticParams() {
  return Doctors.map(d => ({ Doctor_Name: d.slug }));
}

export async function generateMetadata({ params }: { params: { Doctor_Name: string } }) {
  const doctor = Doctors.find((d) => d.slug === params.Doctor_Name);
  if (!doctor) return {};
  const fullName = doctor.name.startsWith('Dr.') ? doctor.name : `Dr. ${doctor.name}`;
  const specialty = doctor.practice;
  return {
    title: `${fullName} | Spine & Orthopedic Surgeon in Florida | Mountain Spine & Orthopedics`,
    description: `Meet ${fullName}, a board-certified ${specialty} at Mountain Spine & Orthopedics. Expert in minimally invasive surgery and personalized spine and joint care. Locations across Florida.`,
    openGraph: {
      title: `${fullName} | Spine & Orthopedic Surgeon in Florida | Mountain Spine & Orthopedics`,
      description: `Meet ${fullName}, a board-certified ${specialty} at Mountain Spine & Orthopedics. Expert in minimally invasive surgery and personalized spine and joint care. Locations across Florida.`
    },
    twitter: {
      title: `${fullName} | Spine & Orthopedic Surgeon in Florida | Mountain Spine & Orthopedics`,
      description: `Meet ${fullName}, a board-certified ${specialty} at Mountain Spine & Orthopedics. Expert in minimally invasive surgery and personalized spine and joint care. Locations across Florida.`
    }
  };
}

export default async function DoctorDetails({ params }: { params: Promise<{ Doctor_Name: string }> }) {
  const { Doctor_Name } = await params;
  const doctor_details = Doctors.find(x => x.slug === Doctor_Name);
  if (!doctor_details) {
    return notFound();
  }

  // Example placeholder for conditions treated (replace with real data if available)
  const conditionsTreated = [
    'Herniated Discs',
    'Sciatica',
    'Spinal Stenosis',
    'Degenerative Disc Disease',
    'Scoliosis',
    'Spine Fractures',
  ];

  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <Image src={Landing} className="lg:max-h-[945px] h-full absolute top-0 object-cover object-top self-end w-full pl-[100px]" alt="Doctor Diagnosing a Old Patient" />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-30 md:pt-50">
          <div className="w-[565px] h-full absolute left-0 top-0"
            style={{ background: 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)' }}
          />
          <div className='px-6 xl:px-[80px] z-[2]'>
            {/* Breadcrumbs */}
            <nav aria-label="Breadcrumb" className="mt-[220px] mb-2">
              <ol className="flex flex-row flex-wrap gap-2 text-lg text-[#2358AC]">
                <li><a href="/about/meetourdoctors">Doctors</a> /</li>
                <li aria-current="page" className="text-[#022968] font-semibold">{doctor_details.name}</li>
              </ol>
            </nav>
          </div>
          <div className="px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px]">
            <h1 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#022968] lg:text-7xl md:text-5xl text-4xl">
              {doctor_details.name}
            </h1>
          </div>
          <div className="z-[2] px-6 xl:px-[80px] mt-[24px] w-full md:w-[70%] lg:w-[55%] pb-8">
            <p style={{ fontWeight: 400 }} className="text-white text-shadow-sm text-md lg:text-2xl">
              {doctor_details.desc}
            </p>
          </div>
        </div>
      </section>
      
      {/* Doctor Profile Details */}
      <section className='max-w-[1440px] w-full h-full flex flex-col lg:flex-row gap-x-[60px] relative overflow-hidden px-6 xl:px-[80px] py-[50px] '>
        <div className=' w-full lg:w-[35%] flex flex-col md:flex-row lg:space-x-0 space-x-6 lg:flex-col h-full'>
          <div className='lg:w-full sm:w-[50%] w-full h-full lg:max-h-[630px] rounded-[16px] overflow-hidden space-y-[24px] hover:cursor-pointer'>
            <div className='w-full h-full flex flex-col'>
              <Image src={doctor_details.img} alt={doctor_details.name} className='w-full lg:max-h-[400px] rounded-[16px] bg-gray-500 lg:h-[400px] aspect-square object-cover' draggable={false} />
              {/* Breadcrumbs */}
              <nav aria-label="Breadcrumb" className="mt-6 mb-2">
                <ol className="flex flex-row flex-wrap gap-2 text-sm text-[#2358AC]">
                  <li><a href="/about/meetourdoctors">Doctors</a> /</li>
                  <li aria-current="page" className="text-[#022968] font-semibold">{doctor_details.name}</li>
                </ol>
              </nav>
              {/* Main Heading (now <p> for visual, not <h1>) */}
              <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-black text-3xl text-left w-full lg:mt-0 mt-4">{doctor_details.name}</p>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#54535C] text-lg mt-1">{doctor_details.practice}</p>
              <div className=' flex flex-row space-x-[16px] mt-2'>
                {/* {socials.map((item: any, index: number) => (
                  <Link href={item.link} target='_blank' className=' border border-[#EFF5FF] rounded-full px-[13px] py-[10px] items-center justify-center' key={index}>
                    <item.icon />
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
          <div className='lg:my-10 sm:my-0 my-10'>
            {/* Client-side contact form */}
            <DoctorContactForm backgroundcolor='#FAFAFA' header='Book an Appointment' />
          </div>
          {doctor_details.cert && (
            <div className='w-full h-full object-cover rounded-2xl overflow-hidden lg:block hidden'>
              <Image src={doctor_details.cert} className='w-full h-full' alt='Doctor Certification' />
            </div>
          )}
        </div>
        <div className=' w-full lg:w-[70%] h-full flex flex-col py-2 space-y-[40px] md:mt-0 mt-4'>
          <section className=' flex flex-col space-y-[24px]'>
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-4xl">About</h2>
            {doctor_details.aboutme.split(/\n\n/).map((para, idx) => (
              <p key={idx} style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#838890] text-lg mb-2">{para}</p>
            ))}
          </section>
          <section className=' flex flex-col space-y-[24px]'>
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-4xl">Credentials</h2>
            {doctor_details.bio.split(/\n\n/).map((para, idx) => (
              <p key={idx} style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#838890] text-lg mb-2">{para}</p>
            ))}
          </section>
          <section className=' flex flex-col space-y-[24px]'>
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-4xl">Specialties</h2>
            <ul className='flex flex-col space-y-4'>
              {['Laser Spine Surgery', 'Laminoforaminotomy', 'Endoscopic Foraminotomy', 'Orthopedic Surgery', 'Interlaminar Spacer'].map((item) => (
                <li key={item} className=' flex flex-row space-x-2 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.29199 8.99996C1.29199 13.2572 4.74313 16.7083 9.00033 16.7083C13.2575 16.7083 16.7087 13.2572 16.7087 8.99996C16.7087 4.74276 13.2575 1.29163 9.00033 1.29163C4.74313 1.29163 1.29199 4.74276 1.29199 8.99996ZM9.00033 17.9583C4.05277 17.9583 0.0419922 13.9475 0.0419922 8.99996C0.0419922 4.05241 4.05277 0.041626 9.00033 0.041626C13.9479 0.041626 17.9587 4.05241 17.9587 8.99996C17.9587 13.9475 13.9479 17.9583 9.00033 17.9583ZM12.7944 6.92229C13.0276 6.66784 13.0104 6.27249 12.756 6.03924C12.5015 5.806 12.1062 5.82319 11.8729 6.07764L7.73069 10.5964L6.10893 8.97469C5.86486 8.73061 5.46913 8.73061 5.22505 8.97469C4.98097 9.21877 4.98097 9.61449 5.22505 9.85857L7.30838 11.9419C7.42892 12.0624 7.59347 12.1285 7.7639 12.1248C7.93433 12.1211 8.09586 12.048 8.21105 11.9223L12.7944 6.92229Z" fill="#92BCFF"/>
                  </svg>
                  <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className='text-[#111315] text-xl'>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className=' flex flex-col space-y-[24px]'>
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-4xl">Conditions Treated</h2>
            <ul className='flex flex-col space-y-4'>
              {conditionsTreated.map((item) => (
                <li key={item} className=' flex flex-row space-x-2 items-center'>
                  <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className='text-[#111315] text-xl'>{item}</span>
                </li>
              ))}
            </ul>
          </section>
          <section className=' flex flex-col space-y-[24px]'>
            <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-4xl">Snapshot</h2>
            <div>
              <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-[#111315] text-2xl mb-2">Career Highlights</h3>
              <ul className='flex flex-col space-y-4'>
                {doctor_details.snapshot.map((item) => (
                  <li className=' flex flex-row space-x-2 items-center' key={item}>
                    <Dot className='text-[#838890]' size={25} />
                    <span style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 400 }} className='text-[#838890] text-xl'>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
