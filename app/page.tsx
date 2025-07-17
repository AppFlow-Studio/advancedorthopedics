import { Metadata } from 'next';
import Image from "next/image";
import Link from "next/link";

// Data Imports from the centralized file
import {
  ServicesAndExpertise,
  OurSpecialtyItems,
  Testimonials,
  Amenities,
  PainToProgress,
  OrthoConditionsWeTreat
} from '@/components/data/homepage-data';

// Component Imports
import BookAnAppoitmentButton from "@/components/BookAnAppoitmentButton";
import DoctorCard from "@/components/DoctorCard";
import ClinicsMap from "@/components/ClinicsMap";
import ContactUsSection from "@/components/ContactUsSection";
import RatingsAndReviews from "@/components/RatingsAndReviews";
import { DoctorContactForm } from "@/components/DoctorContactForm";
import { Doctors } from "@/components/data/doctors";

// Animation & UI Imports
import Reveal from "@/components/RevealAnimation";
import SlidingDiv from "@/components/SlidingAnimation";
import { TextAnimate } from "@/components/magicui/text-animate";

// Interactive Client Components
import HomeHeroSection from '@/components/HomeHeroSection.client';
import HomeInteractiveAnatomy from '@/components/HomeInteractiveAnatomy.client';
import HomeStatisticsBar from '@/components/HomeStatisticsBar.client';
import HomePainToProgress from '@/components/HomePainToProgress.client';

// Image Asset Imports
import AAOS from '../public/AAOS.png';
import ACP from '../public/ACP.png';
import AOA from '../public/AOA.png';
import NASS from '../public/NASS.png';
import Serpent from '../public/Serpent.png';
import SMIS from '../public/SMIS.png';
import HomeWhyAO from '../public/HomeWhyAO-min.jpeg';
import MRI1 from '../public/MRI1.png';
import MRI2 from '../public/MRI2.png';
import MRI3 from '../public/MRI3.png';

// ✅ Server-Rendered Metadata for Homepage SEO (This part is correct)
export const metadata: Metadata = {
  title: 'Mountain Spine & Orthopedics | Top Florida Spine & Joint Pain Specialists',
  description: 'Trusted orthopedic and spine care across Florida. Experts in minimally invasive surgery, arthritis, and joint pain relief. Book your free MRI review or second opinion today.',
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/',
  },
  openGraph: {
    title: 'Mountain Spine & Orthopedics | Advanced Spine, Neck, and Joint Pain Relief in Florida',
    description: 'Florida\'s leader in orthopedic care. Book a consultation for spinal stenosis, sciatica, herniated disc, and joint pain treatments. Now accepting new patients in all locations.',
    url: 'https://mountainspineorthopedics.com/',
    siteName: 'Mountain Spine & Orthopedics',
    images: [
      {
        url: 'https://mountainspineorthopedics.com/og-image-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Patient and doctor consultation at Mountain Spine & Orthopedics Florida clinic.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mountain Spine & Orthopedics | Advanced Spine, Neck, and Joint Pain Relief in Florida',
    description: 'Florida\'s leader in orthopedic care. Book a consultation for spinal stenosis, sciatica, herniated disc, and joint pain treatments. Now accepting new patients in all locations.',
    images: ['https://mountainspineorthopedics.com/og-image-homepage.jpg'],
  },
  keywords: [
    "minimally invasive spine surgery Florida",
    "orthopedic surgeon near me",
    "back pain doctor Florida",
    "herniated disc specialist Florida",
    "cervical disc replacement expert",
    "spinal stenosis treatment Florida",
    "sciatica pain relief Florida",
    "orthopedic clinic Altamonte Springs",
    "free MRI review orthopedic",
    "Florida spine specialist",
    "joint pain relief Florida",
    "neck pain treatment Florida",
    "shoulder pain specialist Florida",
    "knee pain doctor Florida",
    "foot pain treatment Florida"
  ],
};

// ✅ JSON-LD Schema for Search Engine Rich Results (This part is also correct)
const HomePageJsonLdSchema = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    'name': 'Mountain Spine & Orthopedics',
    'url': 'https://mountainspineorthopedics.com/',
    'logo': 'https://mountainspineorthopedics.com/logo.png',
    'contactPoint': {
      '@type': 'ContactPoint',
      'telephone': '+1-561-223-9959',
      'contactType': 'Customer Service',
      'areaServed': 'Florida',
      'availableLanguage': ['en']
    },
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Altamonte Springs',
      'addressRegion': 'FL',
      'postalCode': '32701',
      'addressCountry': 'US'
    },
    'sameAs': [
      'https://www.facebook.com/mountainspineorthopedics',
      'https://www.instagram.com/mountainspineorthopedics',
      'https://www.linkedin.com/company/mountainspineorthopedics',
      'https://www.youtube.com/@mountainspineorthopedics'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function Home() {
  return (
    <>
      <HomePageJsonLdSchema />
      <main className="w-full flex flex-col items-center justify-center bg-white h-full">
        {/* Hero Section - Interactive */}
        <HomeHeroSection />

        {/* Services & Expertise */}
        <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-3 md:px-[40px]">
          <div className="xl:grid xl:grid-cols-3 flex flex-col gap-[32px]">
            <div className="rounded-[24px] bg-[#FAFAFA] p-[40px] flex flex-col col-span-1">
              <div className="bg-white rounded-[32px] px-[14px] py-[7px] w-fit">
                <p
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    background: 'linear-gradient(270deg, #D4ABE5 0%, #9596EC 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                  className="text-sm text-center"
                >
                  The Future of Spine & Orthopedic Care
                </p>
              </div>

              <div className="mt-[12px]">
                <h2
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    color: '#022968',
                  }}
                  className="text-5xl text-left"
                >
                  Services & Expertise
                </h2>
              </div>

              <div className="sm:grid hidden grid-cols-2 gap-[10px] mt-[40px]">
                {ServicesAndExpertise.map((item) => (
                  <Link
                    href={`/area-of-speciality?data=${encodeURIComponent(JSON.stringify({ tags: item.link }))}`}
                    key={item.title} 
                    className="flex flex-row px-[15px] py-[10px] space-x-[10px] bg-[#EFF5FF] rounded-2xl items-center justify-center hover:cursor-pointer"
                  >
                    <Image src={item.img} alt={item.title} className="h-[22px] w-[22px]" />
                    <span className="text-[#5B5F67]">{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-[24px] bg-[#FAFAFA] p-10 flex-col col-span-2 sm:flex hidden">
              <div className="">
                <p
                  style={{
                    fontFamily: "var(--font-reem-kufi)",
                    fontWeight: 500,
                    color: 'black',
                    lineHeight: 1.5
                  }}
                  className="md:px-6 sm:text-2xl text-lg"
                >
                  We combine cutting-edge orthopedic innovations with compassionate care to treat spine disorders, fractures, arthritis,
                  sports injuries, and joint pain. Using minimally invasive techniques
                  and evidence-based treatments, our specialists provide personalised solutions for faster recovery and lasting mobility.
                </p>
              </div>

              <div className="mt-[40px] md:w-[45%]">
                <BookAnAppoitmentButton />
              </div>
            </div>
          </div>

          <Reveal className="w-full" width="100%">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px] mt-[32px]">
              {ServicesAndExpertise.map((item, index) => (
                <Link 
                  href={`/area-of-speciality?data=${encodeURIComponent(JSON.stringify({ tags: item.link }))}`} 
                  className={`flex flex-col p-4 rounded-[24px] space-y-[24px] hover:cursor-pointer ${`sm:bg-[#FAFAFA] ${index % 2 === 1 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'}`}`} 
                  key={item.title}
                >
                  <div className="flex flex-row items-center justify-between">
                    <div className="rounded-full border border-[#EFF5FF] h-12 w-12 items-center justify-center flex">
                      <span
                        style={{
                          fontFamily: "var(--font-reem-kufi)",
                          fontWeight: 500,
                        }}
                        className="text-lg self-center text-[#022968]"
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div className={`sm:bg-[#EFF5FF] ${index % 2 === 1 ? 'bg-[#E5F6FF]' : 'bg-[#EFF5FF]'} rounded-full border border-[#EFF5FF] py-3 px-6`}>
                      <Image src={item.img} alt={item.title} className="h-[22px] w-[22px]" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-[16px]">
                    <h3
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                      }}
                      className="text-3xl text-[#022968]"
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                      }}
                      className="text-lg text-[#022967]"
                    >
                      {item.desc}
                    </p>
                  </div>

                  <div className="w-full max-h-[240px] h-full relative">
                    <Image 
                      src={item.anatomy} 
                      alt={item.title} 
                      height={240} 
                      width={240} 
                      layout="responsive" 
                      className="w-full sm:flex hidden max-h-[240px] h-full object-cover aspect-square rounded-[24px] lg:h-[240px]" 
                    />
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Expert Orthopedic Conditions We Treat - Interactive */}
        <HomeInteractiveAnatomy />

        {/* Why Choose Mountain Spine & Orthopedics */}
        <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-2 md:px-[40px] items-center justify-center space-y-[60px]">
          <Reveal className="w-full" width="100%">
            <div className="flex xl:flex-row space-x-[60px] flex-col xl:space-y-0 space-y-8 w-full">
              <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#111315' }} className="text-6xl w-[100%]">
                Why Choose<br /> Mountain Spine & Orthopedics
              </h2>
              <div>
                <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400, color: '#5B5F67' }} className="text-lg">
                  Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results that make a difference. Your mobility and well-being are our top priority!
                </p>
                <div className="mt-[40px] xl:w-[50%] w-full md:w-fit">
                  <BookAnAppoitmentButton />
                </div>
              </div>
            </div>
          </Reveal>
          <div className="flex xl:flex-row flex-col w-full gap-[32px] xl:items-stretch">
            <div className="xl:w-[50%] w-full rounded-[20px] overflow-hidden">
              <Image src={HomeWhyAO} className="w-full h-full md:aspect-video aspect-square object-cover" alt="Doctor Diagnosing Patient" />
            </div>
            <div className="xl:w-[50%] w-full flex flex-col space-y-[32px]">
              <Reveal className="w-full" width="100%">
                <div className="flex flex-col w-full space-y-[16px]">
                  <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#111315' }} className="text-4xl">
                    Our Specialty
                  </h3>
                                  <p style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#5B5F67' }} className="text-lg">
                  At Mountain Spine & Orthopedics, we are dedicated to providing exceptional care with cutting-edge treatments and a patient-first approach. Here's why we stand out:
                </p>
                </div>
              </Reveal>
              <Reveal className="w-full" width="100%">
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-[20px] overflow-hidden w-full">
                  {OurSpecialtyItems.map((item, index) => (
                    <div key={index} className={`flex flex-col space-y-[16px] ${index == 1 || index == 2 ? 'bg-[#EFF5FF]' : 'bg-[#E5F6FF]'} p-6`}>
                      <div className="rounded-full bg-white p-1 items-center justify-center flex w-[20%] px-[12px] py-[15px]">
                        <item.icon />
                      </div>
                      <h4 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: '#022968' }} className="text-xl">
                        {item.title}
                      </h4>
                      <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="text-md">
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Statistics/Testimonials Bar - Interactive */}
        <HomeStatisticsBar />

        {/* What Our Patients Say */}
        <RatingsAndReviews />

        {/* Meet Our Experts */}
        <section className="w-full max-w-[1440px] flex flex-col py-[50px] h-full px-[40px]">
          <div className="flex md:flex-row flex-col">
            <div className="flex flex-col space-y-[24px] md:w-[50%] w-full">
              <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-black text-5xl text-left w-full">
                Meet Our Experts
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#54535C] md:w-[50%] w-full">
                Highly skilled and compassionate professionals ready to care for you
              </p>
            </div>
            <div className="md:w-[50%] flex items-center md:justify-end w-full md:mt-0 mt-4">
              <Link href={'/about/meetourdoctors'} className="bg-white border hover:cursor-pointer border-[#022968] px-[20px] py-[10px] space-x-[10px] flex flex-row items-center justify-center rounded-[62px]">
                <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#022968]">View all</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11" fill="none">
                  <path d="M12.3982 0.268483C12.0402 -0.0894963 11.4598 -0.089494 11.1018 0.268488C10.7438 0.62647 10.7438 1.20687 11.1018 1.56485L14.1203 4.58333H1.66667C1.16041 4.58333 0.75 4.99374 0.75 5.5C0.75 6.00626 1.16041 6.41667 1.66667 6.41667H14.1203L11.1018 9.43516C10.7439 9.79314 10.7439 10.3735 11.1019 10.7315C11.4598 11.0895 12.0402 11.0895 12.3982 10.7315L16.9766 6.15303C16.9935 6.13637 17.0098 6.11905 17.0254 6.10112C17.0873 6.02997 17.1365 5.95154 17.1728 5.86885C17.2221 5.75677 17.2496 5.63294 17.25 5.50273L17.25 5.5C17.25 5.49717 17.25 5.49434 17.25 5.49152C17.2489 5.37622 17.2266 5.26602 17.1867 5.16463C17.142 5.05068 17.0736 4.94387 16.9815 4.85178L12.3982 0.268483Z" fill="#022968" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-[60px] grid xl:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-[32px]">
            {Doctors.slice(0, 3).map((item) => (<DoctorCard key={item.name} doctor={item} />))}
          </div>
        </section>

        {/* Complimentary Perks */}
        <section className="w-full max-w-[1440px] flex xl:flex-row flex-col py-[50px] h-full px-2 md:px-[40px] space-x-[32px]">
          <div className="rounded-[24px] bg-[#FAFAFA] p-[24px] flex flex-col xl:w-[50%] w-full h-full">
            <div className="flex flex-col space-y-[24px]">
              <h2 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black' }} className="text-5xl">
                Top Florida Clinic Free Second Opinion & MRI Reading
              </h2>
              <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67', lineHeight: 1.5 }} className="">
                <span className="text-[#0094E0]">Free Second Opinion.</span>Still suffering from pain-despite multiple treatments? At Mountain Spine & Orthopedics we <span className="text-[#0094E0]">offer a free second opinion</span> and cutting-edge, minimally invasive procedures to relieve pain, restore mobility, and enhance your quality of life.
              </p>
              <div className="flex md:flex-row flex-col w-full md:space-x-[11px] md:space-y-0 space-y-4 justify-center items-center">
                <div className="md:w-[45%] w-full">
                  <BookAnAppoitmentButton />
                </div>
                <Link href={'/about'} className="bg-white border hover:cursor-pointer border-[#022968] px-[32px] py-[16px] space-x-[10px] max-h-[56px] flex flex-row items-center justify-center rounded-[62px] w-full md:w-[45%] group">
                  <span style={{ fontFamily: "var(--font-inter)", fontWeight: 400 }} className="text-[#022968]">Learn More</span>
                  <div className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
                      <path d="M13.4985 0.965242C13.252 0.736636 12.9267 0.609835 12.6498 0.530065C12.3544 0.444969 12.0165 0.386948 11.6686 0.34632C10.9713 0.264898 10.1536 0.244548 9.38838 0.251159C8.61878 0.257808 7.88161 0.291999 7.33826 0.324347C7.06612 0.340548 6.84152 0.356353 6.68445 0.368151C6.6059 0.374051 6.54417 0.378953 6.50177 0.382408L6.45295 0.38645L6.43999 0.387552L6.43495 0.387986C6.0223 0.423934 5.71693 0.787596 5.75287 1.20025C5.78882 1.61288 6.15303 1.9182 6.56565 1.88228L6.56817 1.88207L6.57907 1.88114L6.62358 1.87745C6.66303 1.87424 6.7216 1.86959 6.7968 1.86394C6.94725 1.85264 7.16405 1.83737 7.42741 1.8217C7.95506 1.79028 8.66529 1.75746 9.40134 1.7511C10.1417 1.74471 10.8879 1.76536 11.4946 1.8362C11.5287 1.84017 11.562 1.84428 11.5947 1.84852L0.96967 12.4736C0.676777 12.7665 0.676777 13.2413 0.96967 13.5342C1.26256 13.8271 1.73744 13.8271 2.03033 13.5342L12.6578 2.90672C12.6596 2.92107 12.6614 2.93557 12.6631 2.95021C12.7334 3.55004 12.7544 4.30047 12.7486 5.05046C12.7429 5.79576 12.711 6.51955 12.6803 7.05855C12.6651 7.32757 12.6501 7.54947 12.6391 7.70364C12.6336 7.7807 12.629 7.84078 12.6258 7.8813L12.6222 7.92705L12.621 7.94154C12.5868 8.35431 12.8936 8.71673 13.3063 8.75104C13.7191 8.78536 14.0816 8.47805 14.1159 8.06526L14.1163 8.06067L14.1174 8.04746L14.1213 7.99761C14.1247 7.95428 14.1295 7.89119 14.1352 7.81094C14.1467 7.65046 14.1622 7.4211 14.1779 7.14367C14.2094 6.58976 14.2426 5.83985 14.2485 5.06198C14.2545 4.2888 14.2338 3.46659 14.1529 2.77563C14.1125 2.43136 14.0547 2.09687 13.9689 1.80777C13.8907 1.54431 13.758 1.20593 13.4985 0.965242Z" fill="#022968" />
                    </svg>
                  </div>
                </Link>
              </div>
              <div className="">
                <Image src={'https://mountainspineortho.b-cdn.net/public/HomeWhyAO-min.jpeg'} layout="responsive" height={1000} width={1440} alt="Doctor Treating a Patient" className="w-full xl:h-[250px] xl:max-h-[250px] object-cover object-center xl:object-top-left rounded-[12px]" />
              </div>
            </div>
          </div>
          <Reveal className="xl:w-[50%] w-full mt-0" width="100%">
            <div className="flex flex-col space-y-[38px] w-full">
              <div className="bg-[#EFF5FF] w-full rounded-[24px] p-[24px] space-y-[24px] h-[50%]">
                <div className="flex flex-col space-y-[8px]">
                  <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black', lineHeight: 1.2 }} className="text-2xl">
                    Complimentary MRI Reading
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="lg">
                    Get a free MRI reading from our experts to tailor your treatment plan.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-x-[16px]">
                  {[MRI1, MRI2, MRI3].map((item, index) => (
                    <div key={index}>
                      <Image src={item} className="w-full h-full aspect-square rounded-[12px]" alt="Image of an MRI Bone Scan" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#E5F6FF] w-full rounded-[24px] p-4 md:p-[24px] space-y-[24px] h-[50%] items-center justify-center">
                <div className="flex flex-col space-y-[8px] items-center justify-center md:mt-10">
                  <h3 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500, color: 'black', lineHeight: 1.2 }} className="md:text-2xl text-4xl text-center">
                    Complimentary Amenities
                  </h3>
                  <p style={{ fontFamily: "var(--font-inter)", fontWeight: 500, color: '#5B5F67' }} className="w-[65%] text-center">
                    Enjoy Complimentary Amenities: Free Car Service, Refreshments & WiFi
                  </p>
                </div>
                <div className="flex flex-row gap-x-[16px] items-center justify-center">
                  {Amenities.map((item, index) => (
                    <div className="flex flex-col space-y-[12px] max-w-[88px] aspect-square p-[8px] items-center justify-center" key={item.title}>
                      <div className="bg-white rounded-[12px] aspect-square flex items-center justify-center p-[8px]">
                        <item.icon />
                      </div>
                      <div>
                        <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 500 }} className="text-sm text-[#022968]">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* From Pain to Progress - Interactive */}
        <HomePainToProgress />

        {/* ClinicsMap */}
        <ClinicsMap />

        {/* ContactUsSection */}
        <ContactUsSection />
      </main>
    </>
  );
}