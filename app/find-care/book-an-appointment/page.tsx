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

// Professional association logo alt text mapping
const associationLogoAlt: Record<string, string> = {
  'AAOS': 'American Academy of Orthopaedic Surgeons (AAOS) member logo',
  'ACP': 'American College of Physicians (ACP) certification',
  'AOA': 'American Osteopathic Association (AOA) accreditation',
  'NASS': 'North American Spine Society (NASS) membership badge',
  'Serpent': 'Medical caduceus symbol representing healthcare excellence',
  'SMIS': 'Society for Minimally Invasive Spine Surgery (SMISS) member'
};
import FindCareContactUsSection from '@/components/FindCardContactUsSection';
import { TextAnimate } from '@/components/magicui/text-animate';
import { Marquee } from '@/components/magicui/marquee';
import type { Metadata } from 'next'
import { buildCanonical } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";

export const metadata: Metadata = {
  title: 'Book Your Appointment | Mountain Spine & Orthopedics',
  description: 'Schedule your orthopedic consultation today. Our patient advocates are ready to help you book an in-person or virtual visit with our Florida specialists.',
  alternates: {
    canonical: buildCanonical('/find-care/book-an-appointment'),
  },
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

// MedicalOrganization Schema for Book an Appointment page
const BookAppointmentJsonLdSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": "Mountain Spine & Orthopedics",
    "description": "Leading spine and orthopedic specialists in Florida providing advanced minimally invasive treatments, including Band-Aid Back Surgery, laser spine procedures, and comprehensive pain management.",
    "url": "https://mountainspineorthopedics.com",
    "logo": "https://mountainspineorthopedics.com/newlogo4.png",
    "image": "https://mountainspineorthopedics.com/herosectionimg.jpg",
    "telephone": [
      "(561) 223-9959",
      "(754) 212-8736", 
      "(407) 565-7598",
      "(407) 960-1717",
      "(863) 777-5805",
      "(561) 556-1802",
      "(954) 987-2047",
      "(561) 544-5501"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "3500 Tyler St",
        "addressLocality": "Hollywood",
        "addressRegion": "FL",
        "postalCode": "33021",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress", 
        "streetAddress": "652 Palm Springs Dr",
        "addressLocality": "Altamonte Springs",
        "addressRegion": "FL",
        "postalCode": "32701",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "6150 Metrowest Blvd Suite 102",
        "addressLocality": "Orlando",
        "addressRegion": "FL", 
        "postalCode": "32835",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2215 Nebraska Ave Suite 1C",
        "addressLocality": "Fort Pierce",
        "addressRegion": "FL",
        "postalCode": "34950",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "3355 Burns Road Suite 304",
        "addressLocality": "Palm Beach Gardens",
        "addressRegion": "FL",
        "postalCode": "33410",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "7000 SW 62 AVE, Suite 330",
        "addressLocality": "South Miami",
        "addressRegion": "FL",
        "postalCode": "33143-4716",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "1905 Clint Moore Rd #300",
        "addressLocality": "Boca Raton",
        "addressRegion": "FL",
        "postalCode": "33496",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "499 E Central Pkwy #130",
        "addressLocality": "Altamonte Springs",
        "addressRegion": "FL",
        "postalCode": "32701",
        "addressCountry": "US"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "2400 North Blvd W Suite C",
        "addressLocality": "Davenport",
        "addressRegion": "FL",
        "postalCode": "33837",
        "addressCountry": "US"
      }
    ],
    "geo": [
      {
        "@type": "GeoCoordinates",
        "latitude": 26.011352,
        "longitude": -80.178874
      },
      {
        "@type": "GeoCoordinates", 
        "latitude": 28.674217,
        "longitude": -81.374192
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 28.5144368,
        "longitude": -81.4658519
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 27.432531,
        "longitude": -80.344623
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 26.8307353,
        "longitude": -80.0878284
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 25.696306,
        "longitude": -80.30121
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 26.408449,
        "longitude": -80.125801
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 28.670213,
        "longitude": -81.374701
      },
      {
        "@type": "GeoCoordinates",
        "latitude": 28.167513,
        "longitude": -81.638889
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1247",
      "bestRating": "5",
      "worstRating": "1"
    },
    "medicalSpecialty": [
      "Orthopedic Surgery",
      "Spine Surgery", 
      "Sports Medicine",
      "Pain Management",
      "Minimally Invasive Surgery",
      "Joint Replacement",
      "Spinal Fusion",
      "Discectomy",
      "Arthroscopy"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Orthopedic Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Band-Aid Back Surgery"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Minimally Invasive Spine Surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure", 
            "name": "Laser Spine Surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Joint Replacement Surgery"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Pain Management"
          }
        }
      ]
    },
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 27.7663,
        "longitude": -82.6404
      },
      "geoRadius": "300000"
    },
    "areaServed": [
      "Florida",
      "Hollywood, FL",
      "Orlando, FL", 
      "Altamonte Springs, FL",
      "Davenport, FL",
      "Fort Pierce, FL",
      "Palm Beach Gardens, FL",
      "Miami Beach, FL",
      "Boca Raton, FL"
    ],
    "sameAs": [
      "https://www.facebook.com/mountainspineorthopedics",
      "https://www.instagram.com/mountainspineorthopedics",
      "https://www.linkedin.com/company/mountainspineorthopedics"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default function BookAnAppointment() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* MedicalOrganization Schema for SEO */}
      <BookAppointmentJsonLdSchema />
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]">
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
          alt="Book an appointment with Mountain Spine & Orthopedics specialists"
        />
        <div
          className="w-full h-[100px] absolute bottom-0 z-[1]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 1) 100%)',
          }}
        />
        <div className="z-[2] flex flex-col w-full h-full text-left relative pt-32 lg:pt-26 pb-20 px-6 lg:px-[80px]">
          <div className='max-w-[1440px] w-full flex flex-col items-start justify-start'>
            <TextAnimate animation="blurInUp" by="word" once
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className='text-[#252932] text-3xl md:text-6xl'
            >
              Book an Appointment
            </TextAnimate>
            <p
              style={{
                fontFamily: 'var(--font-public-sans)',
                fontWeight: 500,
              }}
              className='text-[#252932] md:text-xl text-lg mt-2'
            >
              Our patient advocates are here to help. Schedule a virtual or in-person appointment at your earliest convenience.
            </p>
          </div>
        </div>
      </section>
      <FindCareContactUsSection page={'Book an Appointment'} backgroundcolor="white" />
      <div className="w-full flex flex-row items-center justify-evenly py-20 "
      >

        <Marquee pauseOnHover className='w-full' >
          {
            [
              { img: AAOS, name: 'AAOS' },
              { img: ACP, name: 'ACP' },
              { img: AOA, name: 'AOA' },
              { img: NASS, name: 'NASS' },
              { img: Serpent, name: 'Serpent' },
              { img: SMIS, name: 'SMIS' }
            ].map((item, index) => (
              <Image key={index} src={item.img} alt={associationLogoAlt[item.name]} className=" h-[40px] object-contain mx-[20px]" />
            ))
          }
        </Marquee>

      </div>
      <RatingsAndReviews />
    </main>
  )
}
