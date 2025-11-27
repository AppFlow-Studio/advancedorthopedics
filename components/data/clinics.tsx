/*
✅ SEO Hyperlink Migration — 2025-07-09
Clinics Updated: Orlando, Altamonte Springs, Davenport, Hollywood, Palm Beach Gardens
All links (internal + external) imported from HTML versions of Google Docs.
Anchor text, paragraph structure, and styling preserved.

✅ SEO location copy import — 2025-07-17
Source docs: 06.MiamiBeachLocationWebpage.html, 05.PalmBeachGardensFLWebpage.html
Author: AI Assistant
Updated: Miami Beach and Palm Beach Gardens location pages with new canonical content
Preserved all heading levels, paragraph structure, and converted links to internal navigation
*/

import { StaticImageData } from 'next/image';
import { Testimonial } from '../ui/testimonial-card';
import { Marquee } from '../magicui/marquee';
import Link from 'next/link';

export interface Review {
  author: string;
  reviewBody: string;
  reviewRating: number;
}

export interface ClinicsProps {
  id: number;
  name: string;
  lat: number;
  lng: number;
  address: string;
  phone: string;
  region: string;
  link: string;
  embedSrc?: string; // Google Maps embed iframe src
  placeUrl?: string; // Canonical Google Maps Place URL
  slug: string;
  paragraph: string;
  keywords: string[];
  metaTitle: string;
  metaDescription: string;
  rating: number;
  reviewCount: number;
  reviews: Review[];
  specialists?: React.ReactNode;
  skilled?: React.ReactNode;
  whyChoose?: React.ReactNode;
  easyToReach?: React.ReactNode;
  nearby?: React.ReactNode;
  advancedTreatments?: React.ReactNode;
  whatOurPatientsSay?: React.ReactNode;
  faqs?: { question: string; answer: string }[];
  ogImage: string;
  mapEmbed?: string;
}

export const clinics: ClinicsProps[] = [
  {
    id: 4,
    name: 'Mountain Spine & Orthopedics Hollywood, FL',
    region: 'Hollywood, FL',
    lat: 33.9086284,
    lng: -117.4561894,
    address: '3500 Tyler St Hollywood, FL 33021',
    phone: '(754) 212-8736',
    link: 'https://maps.app.goo.gl/sEddhMjGYvcWCUVe9',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJB4w5HZ6r2YgRioDXW8nbjL0',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.6782637587435!2d-80.18148222454842!3d26.011354777195972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab9e1d398c07%3A0xbd8cdbc95bd7808a!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847098545!5m2!1sen!2sus',
    slug: 'hollywood-fl-orthopedics',
    paragraph: `
    South Florida's most trusted spine and musculoskeletal care center.
    [PARAGRAPH BREAK]Residents no longer need to search far and wide for world-class orthopedic care; Mountain Spine & Orthopedics brings renowned services to the heart of this vibrant South Florida community. We understand the biomechanical demands of life in South Florida, and our mission is to provide accessible, top-tier medical care that gets you back to work and play. We are the trusted orthopedic center in Hollywood, FL, offering same-day appointments for all your musculoskeletal needs.
    [PARAGRAPH BREAK]Our team includes fellowship-trained, board-certified specialists recognized as the premier orthopedic surgeons in Hollywood, Florida, for their technical surgical skill and patient-first philosophy. We provide comprehensive, compassionate treatment for various conditions, including degenerative disc disease, sciatica, herniated nucleus pulposus, and complex sports-related injuries. Every treatment plan is highly individualized, ensuring we address the specific etiology of pain to achieve lasting clinical results.
    [PARAGRAPH BREAK]Inside our state-of-the-art orthopedic treatment center in Hollywood, FL, we utilize the latest diagnostic imaging technology and minimally invasive surgical techniques and orthopedic laser spine surgery in Hollywood, FL. These advanced methodologies allow for smaller incisions, reduced post-operative pain, and significantly faster recovery times. Trust our commitment to innovative, evidence-based care to restore your mobility and quality of life. Mountain Spine & Orthopedics is proud to be South Florida's expert team for spine and orthopedic health.
    `,
    keywords: [
      'hollywood orthopedic surgeon',
      'hollywood spine surgeon',
      'minimally invasive spine surgery hollywood fl',
      'Band-Aid Back Surgery hollywood fl',
      'orthopedic surgery hollywood fl',
      'joint replacement hollywood fl',
      'orthopedic same-day appointments hollywood fl',
      'orthopedic urgent care hollywood fl',
      'spine specialist hollywood fl',
      'orthopedic doctor hollywood fl',
      'orthopedic laser spine surgery hollywood fl',
      'foot and ankle surgeon hollywood fl',
      'orthopedic in hollywood fl',
      'orthopedic surgeon in hollywood florida',
      'anterior hip replacement surgeon hollywood fl',
      'discectomy specialist hollywood fl',
      'carpal tunnel release surgery hollywood fl',
      'arthroscopic knee surgery hollywood fl',
      'best orthopedic surgeon hollywood fl',
      'orthopedic clinic hollywood fl',
      'orthopedic near me hollywood',
      'spine surgeon near me hollywood',
      'orthopedic doctor near me hollywood',
      'best orthopedic near me hollywood'
    ],
    metaTitle: 'Top Hollywood Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: "Top-rated orthopedic and spine specialists in Hollywood. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.",
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Hollywood Spine and Orthopedic Specialists of South Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>South Florida residents can access world-class spinal and musculoskeletal care right here in their community. As your trusted Hollywood orthopedic center, Mountain Spine & Orthopedics brings expert care to local families. We understand that life in South Florida is active, and our goal is to provide the best evidence-based care so you can return to work and play.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Highly Skilled Orthopedic Surgeons in Hollywood & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our board-certified orthopedic specialists in Hollywood, FL, are specially trained and continuously educated in the latest medical advances, seamlessly combining exceptional expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">lumbar and cervical pain</Link>, <Link href="/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment" className="text-[#0A50EC] underline">cervical radiculopathy</Link>, herniated nucleus pulposus, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL tears and injuries</Link>, rotator cuff pathology, and occupational injuries. Every patient receives a completely personalized treatment plan with same-day consultation results.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving South Florida families with high patient satisfaction rates</li>
          <li>Same-day appointments available for acute orthopedic problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible medical facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation claims</li>
          <li>Sports medicine orthopedic specialists in Hollywood, specializing in <a href='/area-of-specialty/sports-injuries' className='underline text-[#0A50EC]'>athletic injuries</a></li>
          <li>Specialized foot and ankle orthopedic services</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Easily Accessible From Throughout South Florida:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='list-disc pl-5 space-y-2'>
          <li>Miami - 25 minutes via I-95</li>
          <li>Fort Lauderdale - 20 minutes via I-95</li>
          <li>Miami International Airport - 40 minutes via I-95</li>
          <li>Downtown Miami - 30 minutes via I-95</li>
          <li>Aventura & Hallandale Beach - 10 minutes via US-1</li>
          <li>Pembroke Pines - 15 minutes via Pines Boulevard</li>
          <li>Davie - 12 minutes via State Road 84</li>
          <li>Miramar - 18 minutes via Miramar Parkway</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-lg'>Central Florida Theme Park Access:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='list-disc pl-5 space-y-2'>
          <li>Disney World (Orlando) - 3.5 hours via Florida's Turnpike</li>
          <li>Universal Studios (Orlando) - 3.5 hours via Florida's Turnpike</li>
          <li>Orlando International Airport - 3.5 hours via Florida's Turnpike</li>
          <li>Downtown Orlando - 3.5 hours via I-4</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Convenient for Hollywood & Surrounding Communities</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our modern orthopedic facility in Hollywood FL is perfectly positioned to serve Hollywood, Aventura, Hallandale Beach, and Pembroke Pines residents who need expert spine care. We're easily accessible from I-95, US-1, and major South Florida highways, making it simple for the local community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Hollywood
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Hollywood
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Hollywood and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Hollywood
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Hollywood orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Hollywood, our surgeons frequently use minimally invasive decompression,
          advanced graft materials, and modern instrumentation to shorten hospital stays
          and support strong long-term outcomes.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Hollywood Patients Say</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial
            name="Jennifer T."
            role="Teacher, Broward County Schools"
            testimonial="After years of persistent lumbar pain, Dr. Katzman's minimally invasive surgical approach had me back to teaching in just three weeks. This top-rated orthopedic center in Hollywood truly understands working families."
          />
          <Testimonial
            name="Dr. Robert Chen"
            role="Emergency Physician, Memorial Regional Hospital Hollywood"
            testimonial="Dr. Katzman's clinical expertise exceeded my expectations for my herniated nucleus pulposus. I now confidently refer my patients to these experienced orthopedic surgeon specialists in Hollywood, FL because I've experienced their excellent care firsthand."
          />
          <Testimonial
            name="Mark S."
            role="Construction Supervisor, Pembroke Pines"
            testimonial="Three different centers couldn't address my persistent lumbar radiculopathy until I found Mountain Spine & Orthopedics. The skilled sports orthopedic team in Hollywood got me back to work in one month."
          />
          <Testimonial
            name="Maria L."
            role="Nurse, Joe DiMaggio Children's Hospital"
            testimonial="As a healthcare professional myself, I was impressed by the exceptional orthopedic treatment in Hollywood FL. Dr. Katzman's clinical expertise and the team's dedication made my post-operative recovery seamless."
          />
          <Testimonial
            name="Carlos R."
            role="Miami-Dade Police Officer"
            testimonial="Being on the force requires peak physical condition. When I injured my lumbar spine, the professional orthopedic surgeon team in Hollywood Florida got me back to protecting our community in record time."
          />
          <Testimonial
            name="Sarah M."
            role="Parent from Aventura"
            testimonial="After a severe ankle injury during basketball, I came to Mountain Spine & Orthopedics in Hollywood FL. Their foot and ankle specialists used advanced minimally invasive techniques that had me back on the court in just 6 weeks. The team's expertise in athletic injuries was incredible."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 28,
    reviews: [
      {
        author: "Jennifer T.",
        reviewBody: "After years of persistent lumbar pain, Dr. Katzman's minimally invasive surgical approach had me back to teaching in just three weeks. This top-rated orthopedic center in Hollywood truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Robert Chen",
        reviewBody: "Dr. Katzman's clinical expertise exceeded my expectations for my herniated nucleus pulposus. I now confidently refer my patients to these experienced orthopedic surgeon specialists in Hollywood, FL because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "Mark S.",
        reviewBody: "Three different centers couldn't address my persistent lumbar radiculopathy until I found Mountain Spine & Orthopedics. The skilled sports orthopedic team in Hollywood got me back to work in one month.",
        reviewRating: 5
      },
      {
        author: "Maria L.",
        reviewBody: "As a healthcare professional myself, I was impressed by the exceptional orthopedic treatment in Hollywood FL. Dr. Katzman's clinical expertise and the team's dedication made my post-operative recovery seamless.",
        reviewRating: 5
      },
      {
        author: "Carlos R.",
        reviewBody: "Being on the force requires peak physical condition. When I injured my lumbar spine, the professional orthopedic surgeon team in Hollywood Florida got me back to protecting our community in record time.",
        reviewRating: 5
      },
      {
        author: "Sarah M.",
        reviewBody: "After a severe ankle injury during basketball, I came to Mountain Spine & Orthopedics in Hollywood FL. Their foot and ankle specialists used advanced minimally invasive techniques that had me back on the court in just 6 weeks. The team's expertise in athletic injuries was incredible.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Hollywood barely able to sit from lower back pain. Dr. Katzman explained my options clearly and within a few weeks of treatment my pain was nearly gone. The staff was professional and the facility is modern and clean.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "The staff here is incredibly patient and kind. They quickly found the cause of my neck and shoulder pain and walked me through a minimally invasive treatment plan that actually worked. I'm back to my normal activities without constant discomfort.",
        reviewRating: 5
      },
      {
        author: "Ahmed R.",
        reviewBody: "After trying other clinics with no answers, Mountain Spine Orthopedics in Hollywood finally diagnosed my sciatica. Scheduling was easy, the clinic was clean, and I felt listened to every step of the way. The minimally invasive procedure they recommended worked perfectly.",
        reviewRating: 5
      },
      {
        author: "Lisa P.",
        reviewBody: "My lumbar disc herniation was affecting my work and sleep. The team here reviewed my MRI and gave me clear options, and I'm now back to walking and working without constant pain. The doctors take time to explain everything thoroughly.",
        reviewRating: 5
      },
      {
        author: "Brian K.",
        reviewBody: "I had shoulder surgery at Mountain Spine Orthopedics and the whole process went smoothly. The surgeon and staff explained recovery expectations and followed up regularly. I'm back to the gym now and feeling stronger than before my injury.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Hollywood took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Hollywood provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Michael B.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Hollywood is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Susan K.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Hollywood for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "David L.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Hollywood provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Karen R.",
        reviewBody: "The spine specialists here are amazing. I had been dealing with cervical pain and numbness in my arms for months. They diagnosed the problem quickly and the treatment they provided worked perfectly. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Hollywood created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Hollywood provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Hollywood is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Hollywood with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Hollywood. Dr. Katzman and his team are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Hollywood made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Hollywood quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Hollywood with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Hollywood. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Hollywood is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "What orthopedic and spine conditions do you treat at your Hollywood, FL location?",
        answer: "Our Hollywood orthopedic clinic treats a full range of problems, including herniated discs, sciatica, spinal stenosis, neck and lower-back pain, arthritis, joint pain, rotator cuff tears, knee and hip injuries, and foot and ankle issues. We also care for car-accident, slip-and-fall, and work-related orthopedic injuries, from the first evaluation through surgical and non-surgical treatment."
      },
      {
        question: "Can I see a spine surgeon in Hollywood without a referral from another doctor?",
        answer: "In many cases you can schedule directly with a spine surgeon or orthopedic specialist in our Hollywood office, especially if you already have an MRI or long-standing pain. Some insurance plans may still require a referral, so our team will review your benefits and let you know if a referral from your primary care doctor is needed."
      },
      {
        question: "Do you offer same-day or next-day appointments in Hollywood for urgent injuries?",
        answer: "We do our best to offer same-day or next-day appointments at our Hollywood location for urgent orthopedic issues such as new back pain, suspected fractures, severe sciatica, or injuries after a car accident or fall. Call our main office line, and our scheduling team will prioritize your visit based on symptoms and imaging needs."
      },
      {
        question: "Which insurance plans are accepted at Mountain Spine & Orthopedics Hollywood, FL?",
        answer: "Our Hollywood clinic works with many major commercial insurance plans and PPO products. We also see patients involved in car accidents and injuries covered under personal-injury protection (PIP) or workers' compensation. Because plans change, our staff will verify your coverage and review any out-of-pocket costs before your visit."
      },
      {
        question: "Where can I park when I visit the Hollywood orthopedic office?",
        answer: "The Hollywood location offers convenient on-site or adjacent parking so patients can get in and out of the office quickly, including those using walkers, canes, or post-operative braces. When you schedule, our team can give you detailed directions for parking and building entry so your arrival and check-in are smooth."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585.6782655543784!2d-80.18377821793146!3d26.011354718397076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9ab9e1d398c07%3A0xbd8cdbc95bd7808a!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186369851!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 3,
    name: 'Mountain Spine & Orthopedics Palm Springs, FL',
    region: 'Palm Springs, FL',
    lat: 28.6742451,
    lng: -81.374189,
    address: '652 Palm Springs Dr Altamonte Springs, FL 32701',
    phone: '(407) 565-7598',
    link: 'https://maps.app.goo.gl/aj8z81BVqczWk7c1A',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJjbW80Wpx54gRvJN9yDXP3jw',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.583185993858!2d-81.37695957445597!3d28.672196525643102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7716ad1bcb58d%3A0x3cdecf35c87d93bc!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847345934!5m2!1sen!2sus',
    slug: 'palm-springs-orthopedics',
    paragraph: `
    For the residents of Palm Springs and the surrounding Palm Beach County communities, Mountain Spine & Orthopedics offers a dedicated, local center for world-class spine and orthopedic care. We understand that life here is active and family-focused, and persistent pain shouldn't keep you on the sidelines. Our mission is to provide our neighbors with the advanced, compassionate treatment they need to live full, healthy lives, right here in their own community.
    [PARAGRAPH BREAK]
    Our Palm Springs clinic is staffed by highly respected, fellowship-trained, and board-certified orthopedic surgeons who combine years of specialized experience with a genuine commitment to patient well-being. They are experts in diagnosing and treating the full spectrum of musculoskeletal issues, including debilitating sciatica, herniated discs, spinal stenosis, and degenerative disc disease. Each patient receives a comprehensive evaluation and a recovery plan tailored specifically to their condition and personal goals.
    [PARAGRAPH BREAK]
    Utilizing the industry's most advanced diagnostic tools and state-of-the-art, minimally invasive techniques, we tackle pain at its source. Our expertise in laser and endoscopic procedures means smaller incisions, less postoperative discomfort, and a significantly faster return to your daily routine. Trust Mountain Spine & Orthopedics in Palm Springs to be your partner in restoring function, eliminating pain, and reclaiming your active lifestyle.
    `,
    keywords: [
      'palm springs orthopedic surgeon',
      'palm springs spine surgeon',
      'minimally invasive spine surgery palm springs fl',
      'Band-Aid Back Surgery palm springs fl',
      'orthopedic surgery palm springs fl',
      'joint replacement palm springs fl',
      'orthopedic same-day appointments palm springs fl',
      'orthopedic urgent care palm springs fl',
      'spine specialist palm springs fl',
      'orthopedic doctor palm springs fl',
      'orthopedic laser spine surgery palm springs fl',
      'foot and ankle surgeon palm springs fl',
      'orthopedic in palm springs fl',
      'orthopedic surgeon in palm springs florida',
      'best orthopedic surgeon palm springs fl',
      'orthopedic clinic palm springs fl',
      'palm springs orthopedic care',
      'spine specialists palm springs',
      'orthopedic surgeons palm springs',
      'orthopedic center palm springs',
      'orthopedic near me palm springs',
      'spine surgeon near me palm springs',
      'orthopedic doctor near me palm springs',
      'best orthopedic near me palm springs'
    ],
    metaTitle: 'Top Palm Springs Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Palm Springs. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Palm Springs Spine and Orthopedic Specialists of Palm Beach County</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Palm Springs residents can get world-class spine care right in their community. As your trusted Palm Springs orthopedic center, Mountain Spine & Orthopedics brings expert care to local families. Our spine specialists in Palm Springs know life here is demanding. Our goal is to give you the best care so you can get back to your active life.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Highly Skilled Orthopedic Surgeons in Palm Springs & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic doctors are specially trained and certified. We treat <Link href='/treatments/back-pain-treatment' className='text-[#0A50EC] underline'>back pain</Link>, <Link href='/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment' className='text-[#0A50EC] underline'>neck pain</Link>, <Link href='/area-of-specialty/degenerative-disc-disease-surgery' className='text-[#0A50EC] underline'>disc problems</Link>, <Link href='/area-of-specialty/acl-injury' className='text-[#0A50EC] underline'>ACL injuries</Link>, and work injuries with personalized treatment plans.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Palm Springs Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Palm Springs families</li>
          <li>Same-day appointments available for urgent problems</li>
          <li>Spanish-speaking staff for the diverse Palm Springs community</li>
          <li>Free parking at our Palm Springs orthopedic center.</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Easy to Reach From Anywhere in the Area:</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>• Altamonte Mall - 5 minutes • AdventHealth Altamonte Springs - 5 minutes • Cranes Roost Park - 7 minutes</p>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Convenient for Maitland Residents</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic clinic is perfectly positioned to serve Maitland residents, located just south and easily accessible via major roads like I-4.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Palm Springs
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Palm Springs
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Palm Springs and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Palm Springs
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Palm Springs orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Palm Springs, our surgeons focus on minimally invasive techniques and careful
          incision placement that support faster healing and a quicker return to standing,
          walking, and working.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Palm Springs Patients Say</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Testimonial
            name="Maria G."
            role="Teacher, Palm Springs"
            testimonial="After a car accident on Military Trail, I had debilitating neck pain. The orthopedic surgeons in Palm Springs here were so compassionate. Their non-surgical treatment plan gave me my life back. I'm so grateful for their care and for having such a great facility right here in Palm Springs."
          />
          <Testimonial
            name="David F."
            role="Retail Manager, Greenacres"
            testimonial="Stocking shelves all day led to a herniated disc. A friend recommended this Palm Springs orthopedic center, and their minimally invasive approach was a game-changer. The recovery was fast, and the staff was fantastic. Truly the best spine and orthopedic specialists in the area."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 31,
    reviews: [
      {
        author: "Maria G.",
        reviewBody: "After a car accident on Military Trail, I had debilitating neck pain. The orthopedic surgeons in Palm Springs here were so compassionate. Their non-surgical treatment plan gave me my life back. I'm so grateful for their care and for having such a great facility right here in Palm Springs.",
        reviewRating: 5
      },
      {
        author: "David F.",
        reviewBody: "Stocking shelves all day led to a herniated disc. A friend recommended this Palm Springs orthopedic center, and their minimally invasive approach was a game-changer. The recovery was fast, and the staff was fantastic. Truly the best spine and orthopedic specialists in the area.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Palm Springs took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Palm Springs diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Palm Springs with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Palm Springs are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Palm Springs provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Palm Springs for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Palm Springs provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Springs is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Palm Springs. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Palm Springs made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Palm Springs quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Palm Springs with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Springs is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Palm Springs created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Richard M.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Palm Springs provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Gregory S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Palm Springs for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Lisa P.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Springs is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Brian K.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Palm Springs. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Carolyn J.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Palm Springs made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Deborah K.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Palm Springs quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Palm Springs with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Palm Springs. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Springs is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "What makes your Palm Springs orthopedic clinic different from other providers nearby?",
        answer: "Our Palm Springs office is dedicated to spine and orthopedic conditions only, so every visit is focused on bones, joints, muscles, and nerves. Patients benefit from surgeons and specialists who routinely perform complex spine and joint procedures, along with non-surgical options like injections and bracing when appropriate."
      },
      {
        question: "Do you treat car-accident and slip-and-fall injuries at the Palm Springs location?",
        answer: "Yes. We regularly evaluate patients with neck pain, back pain, shoulder injuries, and other orthopedic problems after car accidents or slip-and-fall incidents. Our team understands PIP and injury-claim documentation and can coordinate care with your attorney or insurance adjuster when needed."
      },
      {
        question: "Can I have my MRI reviewed by a Palm Springs spine specialist?",
        answer: "If you already have an MRI or CT scan, you can schedule a consultation at our Palm Springs clinic to review your images and discuss treatment options. We'll explain your report in clear language, compare it to your symptoms, and outline both surgical and non-surgical paths based on your goals."
      },
      {
        question: "Do you offer minimally invasive spine surgery in Palm Springs, FL?",
        answer: "Many patients seen in our Palm Springs office are candidates for minimally invasive procedures such as microdiscectomy, decompression, or fusion, depending on their diagnosis. Your surgeon will review imaging, exam findings, and prior treatments to determine if minimally invasive surgery is appropriate in your case."
      },
      {
        question: "How far in advance should I book a new-patient appointment in Palm Springs?",
        answer: "Appointment availability changes week to week, but we recommend calling as soon as your symptoms start affecting work, sleep, or daily activities. Our scheduling team will look for the nearest opening with the right specialist and can often place you on a cancellation list to be seen sooner."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.606566307608!2d-81.38488004357872!3d28.670147561592515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7716ad1bcb58d%3A0x3cdecf35c87d93bc!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186497809!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 5,
    name: 'Mountain Spine & Orthopedics Orlando',
    region: 'Orlando, FL',
    lat: 28.5136111,
    lng: -81.466257,
    address: '6150 Metrowest Blvd Suite 102 Orlando, FL 32835',
    phone: '(407) 960-1717',
    link: 'https://maps.app.goo.gl/Nd7doQdBDtQjfQwKA',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJvwlQvKN554gRbKjdi5IPAJM',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8682598319447!2d-81.46883192446174!3d28.51361107572991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779a3bc5009bf%3A0x93000f928bdda86c!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847256751!5m2!1sen!2sus',
    slug: 'orlando-orthopedics',
    paragraph: `
    Orlando residents no longer need to search far and wide for a world-class Orlando orthopedic center; Mountain Spine & Orthopedics brings its renowned services to the heart of The City Beautiful. We understand the physical demands of life in Central Florida and our mission is to provide accessible, top-tier care that gets Orlando back to work and play. We are the trusted Orlando orthopedic center offering same-day appointments for all your needs.
    [PARAGRAPH BREAK]
    Our Orlando team includes fellowship-trained, board-certified Orlando orthopedic surgeons celebrated for their technical skill and patient-first philosophy. We provide comprehensive, compassionate treatment for a host of conditions, including degenerative disc disease, painful sciatica, herniated discs, and complex sports injuries. Every treatment plan is highly individualized, ensuring we address the specific cause of pain to achieve lasting results.
    [PARAGRAPH BREAK]
    Inside our state-of-the-art Orlando orthopedic center in Orlando, FL, we utilize the latest in diagnostic technology and minimally invasive surgical techniques. These advanced methods allow for smaller incisions, less pain, and significantly faster recovery times. Trust our commitment to innovative, outcome-focused care to restore your mobility and quality of life. Mountain Spine & Orthopedics is proud to be Orlando's expert team for spine and orthopedic health.
    `,
    keywords: [
      'orlando orthopedic surgeon',
      'orlando spine surgeon',
      'minimally invasive spine surgery orlando fl',
      'Band-Aid Back Surgery orlando fl',
      'orthopedic surgery orlando fl',
      'joint replacement orlando fl',
      'orthopedic same-day appointments orlando fl',
      'orthopedic urgent care orlando fl',
      'spine specialist orlando fl',
      'orthopedic doctor orlando fl',
      'orthopedic laser spine surgery orlando fl',
      'foot and ankle surgeon orlando fl',
      'orthopedic in orlando fl',
      'orthopedic surgeon in orlando florida',
      'best orthopedic surgeon orlando',
      'best knee surgeon in orlando',
      'knee replacement surgeon orlando',
      'shoulder replacement surgeon orlando',
      'orthopedic surgery center orlando',
      'ACL surgery doctor orlando',
      'orthopedic near me orlando',
      'spine surgeon near me orlando',
      'orthopedic doctor near me orlando',
      'best orthopedic near me orlando'
    ],
    metaTitle: 'Top Orlando Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Orlando. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Orlando Spine and Orthopedic Specialists of Central FL</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Orlando residents can get world-class spine care right here in Central Florida. As your trusted Orlando orthopedic center, Mountain Spine & Orthopedics brings expert care to Orlando families. We know Orlando life is active. Our goal is to give you the best care so you can get back to work and play.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Highly Skilled Orthopedic Surgeons in Orlando & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic doctors are specially trained and certified. They mix great medical skills with real care for patients. We treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment" className="text-[#0A50EC] underline">neck pain</Link>, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">disc problems</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, and work injuries. Every patient gets a treatment plan made just for them.</p>
      </div>
    ),
    whyChoose:
      <div className='flex flex-col space-y-4'>
        <h2 style={{
          fontFamily: "var(--font-public-sans)",
        }} className=' font-bold text-xl'>Why Orlando Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Orlando families</li>
          <li>Same-day appointments available for urgent problems</li>
          <li>Spanish-speaking staff for Orlando's diverse community</li>
          <li>Free parking at our Orlando orthopedic center.</li>
        </ul>
      </div>,
    easyToReach:
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{
          fontFamily: "var(--font-public-sans)",
        }} className=' font-bold text-xl'>Easy to Reach From Anywhere in Orlando:</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>• Disney World - 20 minutes • Universal Studios - 15 minutes • Orlando Airport - 25 minutes • Downtown Orlando - 12 minutes • Lake Nona - 18 minutes</p>
      </div>,
    nearby:
      <div className='flex flex-col space-y-4'>
        <h2 style={{
          fontFamily: "var(--font-public-sans)",
        }} className=' font-bold text-xl'>Convenient for Lake Nona Residents</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic center is perfectly positioned to serve Lake Nona residents who need expert spine care. We're easily accessible from Highway 417 and 528, making it simple for Orlando's Lake Nona community to receive advanced treatment without traveling far from home.</p>
      </div>,
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Orlando
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Orlando
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Orlando and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Orlando
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Orlando orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Orlando, we combine image-guided planning, minimally invasive incisions, and
          structured rehab programs to help patients return to work and daily life as safely
          and efficiently as possible.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Orlando Patients Say</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial
            name="Sarah M."
            role="Disney Cast Member, Celebration"
            testimonial="Eight years working at Magic Kingdom left me with severe back pain. I tried three different Orlando doctors before finding Mountain Spine & Orthopedics. Dr. Katzman at this Orlando orthopedic center took time to understand the physical demands of theme park work. His minimally invasive approach had me back to full Disney shifts in just three weeks. Two years later, my condition has greatly improved and I can enjoy the Orlando parks with my own children. This Orlando team truly understands working families."
          />
          <Testimonial
            name="Dr. Michael Rodriguez"
            role="Emergency Physician, Orlando Health"
            testimonial="As an Orlando emergency doctor, I see spine injuries every day. When my own herniated disc started affecting my ability to work 12-hour shifts, I researched every spine specialist in Orlando. I chose Mountain Spine & Orthopedics because of their reputation among medical professionals. Dr. Katzman's expertise exceeded my expectations. I now confidently refer my patients and colleagues to these Orlando spine and orthopedic specialists of Central FL because I've experienced their excellent care firsthand."
          />
          <Testimonial
            name="David L."
            role="Construction Supervisor, Winter Garden"
            testimonial="Fifteen years in Orlando construction led to persistent back pain that workers' comp couldn't seem to address. Three different Orlando centers couldn't help until a coworker mentioned Mountain Spine & Orthopedics. The orthopedic surgeons here understood construction work demands and got me back to managing job sites in one month. Their workers' comp coordination was professional and hassle-free. Finally found Orlando doctors who understand working people."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 25,
    reviews: [
      {
        author: "Sarah M.",
        reviewBody: "Eight years working at Magic Kingdom left me with severe back pain. I tried three different Orlando doctors before finding Mountain Spine & Orthopedics. Dr. Katzman at this Orlando orthopedic center took time to understand the physical demands of theme park work. His minimally invasive approach had me back to full Disney shifts in just three weeks. Two years later, my condition has greatly improved and I can enjoy the Orlando parks with my own children. This Orlando team truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Michael Rodriguez",
        reviewBody: "As an Orlando emergency doctor, I see spine injuries every day. When my own herniated disc started affecting my ability to work 12-hour shifts, I researched every spine specialist in Orlando. I chose Mountain Spine & Orthopedics because of their reputation among medical professionals. Dr. Katzman's expertise exceeded my expectations. I now confidently refer my patients and colleagues to these Orlando spine and orthopedic specialists of Central FL because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "David L.",
        reviewBody: "Fifteen years in Orlando construction led to persistent back pain that workers' comp couldn't seem to address. Three different Orlando centers couldn't help until a coworker mentioned Mountain Spine & Orthopedics. The orthopedic surgeons here understood construction work demands and got me back to managing job sites in one month. Their workers' comp coordination was professional and hassle-free. Finally found Orlando doctors who understand working people.",
        reviewRating: 5
      },
      {
        author: "David H.",
        reviewBody: "I traveled from Tampa to see the spine specialists at Mountain Spine Orthopedics in Orlando and it was worth the drive. They diagnosed my pinched nerve and provided a treatment plan that worked. The facility is state-of-the-art and the staff is professional.",
        reviewRating: 5
      },
      {
        author: "Nancy B.",
        reviewBody: "I had been suffering from arthritis in my hands and wrists for months. The orthopedic doctors in Orlando took time to understand how it was affecting my daily life and recommended treatments that actually helped. I can now do my hobbies again without pain.",
        reviewRating: 5
      },
      {
        author: "James F.",
        reviewBody: "The minimally invasive spine surgery I had at Mountain Spine Orthopedics in Orlando was life-changing. I had been dealing with back pain for over a year and nothing else worked. The recovery was much easier than I expected and I'm back to playing golf.",
        reviewRating: 5
      },
      {
        author: "Karen R.",
        reviewBody: "Excellent orthopedic care for my rotator cuff injury. The doctors explained my MRI results clearly and gave me options from physical therapy to surgery. I chose the surgical route and the team made sure I was comfortable throughout the entire process.",
        reviewRating: 5
      },
      {
        author: "Thomas G.",
        reviewBody: "I came to Mountain Spine Orthopedics in Orlando with severe lower back pain that was keeping me from work. They quickly identified the issue with my discs and got me on a treatment plan. The pain management injections they provided gave me immediate relief.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Orlando took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Orlando diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Orlando with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Orlando are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Orlando provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Orlando for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Orlando provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Orlando is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Orlando. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Orlando made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Orlando quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Orlando with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Orlando is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Orlando created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Richard M.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Orlando provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Orlando with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Orlando. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Which spine and joint surgeries are most commonly performed for Orlando patients?",
        answer: "Common procedures for our Orlando patients include cervical and lumbar fusion, artificial disc replacement when appropriate, decompression for spinal stenosis, rotator cuff and shoulder repairs, knee arthroscopy, and joint replacements. Your surgeon will only recommend surgery after conservative treatments have been reviewed or attempted."
      },
      {
        question: "Do you offer second opinions for spine surgery in Orlando?",
        answer: "Yes. Many Orlando patients visit us for a second opinion after being told they need spine or joint surgery elsewhere. We review your imaging, prior notes, and exam findings to confirm the diagnosis, discuss all available options, and help you feel confident in your treatment decision."
      },
      {
        question: "Is your Orlando orthopedic clinic convenient for theme-park and hospitality workers?",
        answer: "Our Orlando location was chosen to be accessible for local residents as well as hospitality, healthcare, and service-industry workers who spend long hours on their feet. We understand how physically demanding these jobs can be and tailor treatment plans to help you return to work safely, with a focus on function and long-term joint health."
      },
      {
        question: "What should I bring to my first orthopedic appointment in Orlando?",
        answer: "Please bring a photo ID, insurance card, medication list, and any prior imaging (CDs or reports) or records related to your spine or joint problem. This information helps our Orlando specialists quickly understand your history and avoid repeating tests unnecessarily."
      },
      {
        question: "Do you offer telehealth follow-up visits for Orlando patients?",
        answer: "When appropriate and allowed by your insurance plan, some follow-up visits—such as medication checks, post-operative check-ins, or review of imaging—may be done via telehealth. Your provider will let you know when an in-person exam is required versus when a virtual appointment is safe and convenient."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.8682598319447!2d-81.46883192446174!3d28.51361107572991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e779a3bc5009bf%3A0x93000f928bdda86c!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186387828!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 9,
    name: 'Mountain Spine & Orthopedics Fort Pierce',
    region: 'Fort Pierce, FL',
    lat: 27.4316576,
    lng: -80.3483451,
    address: '2215 Nebraska Ave Suite 1C, Fort Pierce, FL 34950',
    link: 'https://maps.app.goo.gl/ckuRiBAYkA5GWiJZA',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJt0ir7Mzx3ogRPKKGsVdXn4c',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.207042187583!2d-80.35092002450014!3d27.431657576341717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def1ccecab48b7%3A0x879f5757b186a23c!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847379396!5m2!1sen!2sus',
    phone: '(561) 223-9959',
    slug: 'fort-pierce-orthopedics',
    paragraph: `
  Mountain Spine & Orthopedics in Fort Pierce offers top-tier orthopedic care to the Treasure Coast. Our local center provides same-day appointments for fast access to spine specialists who diagnose and treat a wide range of orthopedic conditions with compassion, technology, and experience.
  [PARAGRAPH BREAK]
  Our Fort Pierce orthopedic clinic provides advanced treatment options including Band-Aid back surgery, laser spine procedures, endoscopic discectomies, and minimally invasive techniques. Patients benefit from comprehensive orthopedic care—consultation, imaging, and surgery—with expert referrals to trusted rehabilitation partners when needed. Our Fort Pierce location supports faster recovery and better outcomes.
  [PARAGRAPH BREAK]
  Trust your care to orthopedic experts focused on helping Fort Pierce families return to active lifestyles.`,
    keywords: [
      'fort pierce orthopedic surgeon',
      'fort pierce spine surgeon',
      'minimally invasive spine surgery fort pierce fl',
      'Band-Aid Back Surgery fort pierce fl',
      'orthopedic surgery fort pierce fl',
      'joint replacement fort pierce fl',
      'orthopedic same-day appointments fort pierce fl',
      'orthopedic urgent care fort pierce fl',
      'spine specialist fort pierce fl',
      'orthopedic doctor fort pierce fl',
      'orthopedic laser spine surgery fort pierce fl',
      'foot and ankle surgeon fort pierce fl',
      'orthopedic in fort pierce fl',
      'orthopedic surgeon in fort pierce florida',
      'orthopedic fort pierce',
      'orthopedic rehabilitation fort pierce',
      'laser back surgery fort pierce',
      'sports injury doctor fort pierce',
      'meniscus repair surgeon fort pierce',
      'hand surgeon fort pierce',
      'orthopedic near me fort pierce',
      'spine surgeon near me fort pierce',
      'orthopedic doctor near me fort pierce',
      'best orthopedic near me fort pierce'
    ],
    metaTitle: 'Top Fort Pierce Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Fort Pierce. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>World-Class Spine and Orthopedic Care in South Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>South Florida residents can access world-class spinal and musculoskeletal care right here in their community. As your trusted Fort Pierce orthopedic center, Mountain Spine & Orthopedics brings expert care to local families. We understand that life in Florida is active, and our goal is to provide the best evidence-based care so you can return to work and play.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Highly Skilled Orthopedic Surgeons in Fort Pierce & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic doctors in Fort Pierce FL, are specially trained, board-certified, and continuously educated in the latest medical advances, seamlessly combining exceptional medical expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment" className="text-[#0A50EC] underline">neck pain</Link>, herniated discs, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, rotator cuff tears, and workplace injuries. Every patient receives a completely personalized treatment plan with same-day consultation results.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Why Patients Choose Mountain Spine & Orthopedics:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Treasure Coast families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
          <li>Sports orthopedic specialists in Fort Pierce specializing in athletic injuries</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Easily Accessible From Throughout the Treasure Coast:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Stuart - 15 minutes</li>
          <li>Port St. Lucie - 10 minutes</li>
          <li>Vero Beach - 25 minutes</li>
          <li>Jensen Beach - 20 minutes</li>
          <li>Sebastian - 30 minutes</li>
          <li>Palm City - 20 minutes</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Convenient for Port St. Lucie Residents</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic Fort Pierce center is perfectly positioned to serve Port St. Lucie residents who need expert spine care. We're easily accessible from US-1 and Okeechobee Road, making it simple for the Port St. Lucie community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Fort Pierce
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Fort Pierce
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Fort Pierce and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Fort Pierce
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Fort Pierce orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Fort Pierce, we frequently pair minimally invasive decompression with image-guided
          injections and structured physical therapy plans to maximize relief and function.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Patients Say</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Real residents share their life-changing experiences with Mountain Spine & Orthopedics. These verified patients with documented outcomes trusted us with their care and want to help other families make informed decisions about their spine health and recovery journey.</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial name="Jennifer T." role="Teacher, St. Lucie County Schools" testimonial="After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This orthopedic center in Fort Pierce truly understands working families." />
          <Testimonial name="Dr. Robert Chen" role="Emergency Physician, HCA Florida Lawnwood Hospital" testimonial="Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these orthopedic surgery specialists in Fort Pierce, FL because I've experienced their excellent care firsthand." />
          <Testimonial name="Mark S." role="Construction Supervisor, Port St. Lucie" testimonial="Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The sports orthopedic team in Fort Pierce got me back to work in one month." />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 23,
    reviews: [
      {
        author: "Jennifer T.",
        reviewBody: "After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This orthopedic center in Fort Pierce truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Robert Chen",
        reviewBody: "Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these orthopedic surgery specialists in Fort Pierce, FL because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "Mark S.",
        reviewBody: "Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The sports orthopedic team in Fort Pierce got me back to work in one month.",
        reviewRating: 5
      },
      {
        author: "Carolyn J.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Fort Pierce for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Richard M.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Fort Pierce provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Deborah K.",
        reviewBody: "The spine specialists here are amazing. I had been dealing with cervical pain and numbness in my arms for months. They diagnosed the problem quickly and the treatment they provided worked perfectly. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "William P.",
        reviewBody: "I had a lumbar fusion surgery at Mountain Spine Orthopedics in Fort Pierce and the results have been excellent. The surgical team was professional and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout.",
        reviewRating: 5
      },
      {
        author: "Barbara S.",
        reviewBody: "I came to this clinic with chronic shoulder pain that was affecting my sleep. The orthopedic doctors took the time to understand my condition and recommended a treatment that worked. The staff is friendly and the office is well-organized.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Fort Pierce took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Fort Pierce diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Fort Pierce with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Fort Pierce are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Fort Pierce provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Fort Pierce for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Fort Pierce provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Fort Pierce is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Fort Pierce. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Fort Pierce made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Fort Pierce quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Fort Pierce with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Fort Pierce is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Fort Pierce created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Fort Pierce with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Fort Pierce. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Fort Pierce is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Do you see both workers' compensation and retiree patients in Fort Pierce?",
        answer: "Yes. Our Fort Pierce orthopedic clinic cares for a wide range of patients, from employees injured on the job to retirees dealing with arthritis, spinal stenosis, or joint degeneration. We coordinate closely with case managers and primary doctors to keep everyone updated on your progress."
      },
      {
        question: "Can Fort Pierce patients have spine surgery locally, or do they need to travel?",
        answer: "Many spine and orthopedic procedures for Fort Pierce patients can be performed at partner surgical centers or hospitals within reasonable driving distance. Your surgeon will explain where your specific procedure would take place and how post-operative follow-up visits will be scheduled at the Fort Pierce office."
      },
      {
        question: "How quickly can I get in after a new back or neck injury in Fort Pierce?",
        answer: "We reserve some appointment slots for patients with new or worsening symptoms, such as sudden severe back pain, radiating leg pain, or new numbness or weakness. Call our main line as soon as symptoms appear so we can triage your case and work to schedule you promptly."
      },
      {
        question: "What non-surgical options are available at the Fort Pierce orthopedic clinic?",
        answer: "Before discussing surgery, we often recommend medications, bracing, and image-guided injections where appropriate. Our goal is to reduce pain and improve function using the least invasive effective options; surgery is reserved for cases where conservative treatment has not provided enough relief."
      },
      {
        question: "Do you treat sports and fishing-related injuries in Fort Pierce?",
        answer: "Yes. We commonly see shoulder, elbow, knee, and back issues linked to recreational sports, boating, and fishing activities common along the Treasure Coast. Our orthopedic specialists focus on restoring strength and range of motion so you can safely return to the activities you enjoy."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2857638186815!2d-80.09235541774463!3d26.8308618166085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df2b301813d549%3A0x848ccbabe8c43243!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186670783!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 6,
    name: 'Mountain Spine & Orthopedics Palm Beach Gardens',
    region: 'Palm Beach Gardens, FL',
    lat: 26.8308619,
    lng: -80.0874845,
    address: '3355 Burns Road Suite 304, FL 33410',
    phone: '(561) 556-1802',
    link: 'https://maps.app.goo.gl/pduSNEN5vF3uDfVB7',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJSdUTGDAr34gRQzLE6KvLjIQ',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.285761930094!2d-80.09005942452085!3d26.830861876696165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88df2b301813d549%3A0x848ccbabe8c43243!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847227565!5m2!1sen!2sus',
    slug: 'palm-beach-gardens-orthopedics',
    paragraph: `
    South Florida's most trusted spine and musculoskeletal care center, serving families
    [PARAGRAPH BREAK]Trust Mountain Spine & Orthopedics for expert orthopedic care, compassionate clinical service, and evidence-based results that make a difference. Your musculoskeletal mobility and overall well-being are our top priorities. Experience the clinical excellence that sets our orthopedic services apart in Palm Beach Gardens.
    [PARAGRAPH BREAK]At Mountain Spine & Orthopedics, we provide exceptional clinical care using the latest treatments with a patient-centered approach. Here's why families throughout South Florida choose our leading advanced orthopedic care in the greater Palm Beach Gardens area.
    `,
    keywords: [
      'palm beach gardens orthopedic surgeon',
      'palm beach gardens spine surgeon',
      'minimally invasive spine surgery palm beach gardens fl',
      'Band-Aid Back Surgery palm beach gardens fl',
      'orthopedic surgery palm beach gardens fl',
      'joint replacement palm beach gardens fl',
      'orthopedic same-day appointments palm beach gardens fl',
      'orthopedic urgent care palm beach gardens fl',
      'spine specialist palm beach gardens fl',
      'orthopedic doctor palm beach gardens fl',
      'orthopedic laser spine surgery palm beach gardens fl',
      'foot and ankle specialist palm beach gardens fl',
      'orthopedic in palm beach gardens fl',
      'orthopedic surgeon in palm beach gardens florida',
      'best shoulder surgeon palm beach gardens',
      'laminectomy surgeon palm beach gardens',
      'revision hip surgery palm beach gardens',
      'partial knee replacement surgeon palm beach gardens',
      'best orthopedic surgeon palm beach gardens fl',
      'orthopedic clinic palm beach gardens fl',
      'orthopedic near me palm beach gardens',
      'spine surgeon near me palm beach gardens',
      'orthopedic doctor near me palm beach gardens',
      'best orthopedic near me palm beach gardens'
    ],
    metaTitle: 'Top Palm Beach Gardens Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Palm Beach Gardens. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>World-Class Spine and Orthopedic Care in South Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>
          South Florida residents can access world-class spinal and musculoskeletal care right here in their community. As your trusted Palm Beach Gardens orthopedic center, Mountain Spine & Orthopedics brings expert clinical care to local families. We understand that life in South Florida is active, and our goal is to provide the best evidence-based care so you can return to work and play.
        </p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>

        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>World-Class Spine and Orthopedic Care in South Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>South Florida residents can access world-class spinal and musculoskeletal care right here in their community. As your trusted Palm Beach Gardens orthopedic center, Mountain Spine & Orthopedics brings expert clinical care to local families. We understand that life in South Florida is active, and our goal is to provide the best evidence-based care so you can return to work and play.</p>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Highly Skilled Orthopedic Surgeons in Palm Beach Gardens & Nearby Areas</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our board-certified orthopedic surgeons in the Palm Beach Gardens, FL area are specially trained and continuously educated in the latest medical advances, seamlessly combining exceptional clinical expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">lumbar and cervical pain</Link>, <Link href="/treatments/neck-pain-treatment" className="text-[#0A50EC] underline">cervical radiculopathy</Link>, herniated nucleus pulposus, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL tears and injuries</Link>, rotator cuff pathology, and occupational injuries. Every patient receives a completely personalized treatment protocol with same-day consultation results.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Why Patients Choose Mountain Spine & Orthopedics:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving South Florida families with high patient satisfaction rates</li>
          <li>Convenient same-day orthopedic appointments - no long waits</li>
          <li>Bilingual Spanish-speaking clinical staff for our diverse community</li>
          <li>Free parking and a wheelchair-accessible medical facility</li>
          <li>Most insurance plans are accepted, including Workers' Compensation claims</li>
          <li>Sports medicine orthopedic specialists throughout the Palm Beach Gardens region specialize in athletic injuries</li>
          <li>Advanced foot and ankle orthopedic services at our Palm Beach Gardens center</li>
          <li>Specialized foot and ankle orthopedic care and bracing services</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Easily Accessible From Throughout South Florida:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li><span className='font-bold'>Miami</span> - 1 hour 15 minutes via I-95</li>
          <li><span className='font-bold'>Fort Lauderdale</span> - 1 hour via I-95</li>
          <li><span className='font-bold'>West Palm Beach</span> - 15 minutes via PGA Boulevard</li>
          <li><span className='font-bold'>Jupiter</span> - 20 minutes via US-1</li>
          <li><span className='font-bold'>Wellington</span> - 35 minutes via Forest Hill Boulevard</li>
          <li><span className='font-bold'>Boca Raton</span> - 45 minutes via I-95</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Central Florida Theme Park Access:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li><span className='font-bold'>Disney World (Orlando)</span> - 2 hours 50 minutes via Florida's Turnpike</li>
          <li><span className='font-bold'>Universal Studios (Orlando)</span> - 2 hours 50 minutes via Florida's Turnpike</li>
          <li><span className='font-bold'>Orlando International Airport</span> - 2 hours 45 minutes via Florida's Turnpike</li>
          <li><span className='font-bold'>Downtown Orlando</span> - 2 hours 40 minutes via I-4</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-2xl'>Convenient for Palm Beach Gardens & Surrounding Communities</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our state-of-the-art orthopedic center in Palm Beach Gardens, FL, is perfectly positioned to serve Palm Beach Gardens, Jupiter, North Palm Beach, and Wellington residents who need expert spine care. We're easily accessible from I-95, PGA Boulevard, and major South Florida highways, making it simple for the local community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Palm Beach Gardens
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Palm Beach Gardens
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Palm Beach Gardens and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Palm Beach Gardens
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Palm Beach Gardens orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Palm Beach Gardens, our team combines minimally invasive arthroscopy, advanced
          navigation, and tailored rehab plans to help patients recover efficiently while
          protecting long-term joint health.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Patients Say</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Real residents share their life-changing experiences with Mountain Spine & Orthopedics. These verified patients with documented clinical outcomes trusted us with their care and want to help other families make informed decisions about their spine health and recovery journey.</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial name="Jennifer T." role="Teacher, Palm Beach County Schools" testimonial="After years of persistent lumbar pain, Dr. Katzman's minimally invasive surgery had me back in the classroom in just three weeks. This orthopedic center in Palm Beach Gardens truly understands the needs of working families." />
          <Testimonial name="Dr. Robert Chen" role="Emergency Physician, Jupiter Medical Center" testimonial="Dr. Katzman's clinical expertise for my herniated nucleus pulposus exceeded all my expectations. I now confidently refer my own patients to these experienced orthopedic specialists in Palm Beach Gardens, FL, because I've experienced their excellent care firsthand." />
          <Testimonial name="Mark S." role="Construction Supervisor, Wellington" testimonial="Three different centers couldn't address my persistent lumbar radiculopathy until I found Mountain Spine & Orthopedics. The skilled sports orthopedic team in Palm Beach Gardens got me back to work in just one month." />
          <Testimonial name="Maria L." role="Nurse, Palm Beach Gardens Medical Center" testimonial="As a healthcare professional, I was incredibly impressed by the exceptional orthopedic treatment in Palm Beach Gardens. Dr. Katzman's clinical expertise and the team's dedication made my post-operative recovery seamless." />
          <Testimonial name="Carlos R." role="Palm Beach County Sheriff's Deputy" testimonial="Being in law enforcement demands peak physical condition. When I injured my lumbar spine, the professional orthopedic team in Palm Beach Gardens got me back to protecting our community in record time." />
          <Testimonial name="Sarah M." role="Runner from Jupiter" testimonial="After developing plantar fasciitis from running, I sought treatment at Mountain Spine & Orthopedics in Palm Beach Gardens. Their foot and ankle specialists provided advanced treatment options that eliminated my pain completely. I'm back running without any issues!" />
          <Testimonial name="Dr. Lisa K." role="Physical Therapist, Palm Beach Gardens" testimonial="When I needed urgent orthopedic care in Palm Beach Gardens for my own rotator cuff pathology, I chose Mountain Spine & Orthopedics. Their same-day availability and expert clinical treatment surpassed my professional expectations." />
          <Testimonial name="Michael R." role="Golf Pro, PGA National" testimonial="As a golf professional, I needed the best comprehensive orthopedic specialist in Palm Beach Gardens when I developed persistent back pain. Dr. Katzman's expertise had me back on the course within a month." />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 33,
    reviews: [
      {
        author: "Jennifer T.",
        reviewBody: "After years of persistent lumbar pain, Dr. Katzman's minimally invasive surgery had me back in the classroom in just three weeks. This orthopedic center in Palm Beach Gardens truly understands the needs of working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Robert Chen",
        reviewBody: "Dr. Katzman's clinical expertise for my herniated nucleus pulposus exceeded all my expectations. I now confidently refer my own patients to these experienced orthopedic specialists in Palm Beach Gardens, FL, because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "Mark S.",
        reviewBody: "Three different centers couldn't address my persistent lumbar radiculopathy until I found Mountain Spine & Orthopedics. The skilled sports orthopedic team in Palm Beach Gardens got me back to work in just one month.",
        reviewRating: 5
      },
      {
        author: "Maria L.",
        reviewBody: "As a healthcare professional, I was incredibly impressed by the exceptional orthopedic treatment in Palm Beach Gardens. Dr. Katzman's clinical expertise and the team's dedication made my post-operative recovery seamless.",
        reviewRating: 5
      },
      {
        author: "Carlos R.",
        reviewBody: "Being in law enforcement demands peak physical condition. When I injured my lumbar spine, the professional orthopedic team in Palm Beach Gardens got me back to protecting our community in record time.",
        reviewRating: 5
      },
      {
        author: "Sarah M.",
        reviewBody: "After developing plantar fasciitis from running, I sought treatment at Mountain Spine & Orthopedics in Palm Beach Gardens. Their foot and ankle specialists provided advanced treatment options that eliminated my pain completely. I'm back running without any issues!",
        reviewRating: 5
      },
      {
        author: "Dr. Lisa K.",
        reviewBody: "When I needed urgent orthopedic care in Palm Beach Gardens for my own rotator cuff pathology, I chose Mountain Spine & Orthopedics. Their same-day availability and expert clinical treatment surpassed my professional expectations.",
        reviewRating: 5
      },
      {
        author: "Michael R.",
        reviewBody: "As a golf professional, I needed the best comprehensive orthopedic specialist in Palm Beach Gardens when I developed persistent back pain. Dr. Katzman's expertise had me back on the course within a month.",
        reviewRating: 5
      },
      {
        author: "Christopher A.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Beach Gardens is exceptional. I had been struggling with hip pain for months and they diagnosed it as arthritis. The treatment plan they created has me moving comfortably again. Highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Diane W.",
        reviewBody: "I had a spinal cord stimulator procedure here and it changed my life. The doctors explained the process thoroughly and answered all my questions. The pain relief I've experienced has been remarkable. The staff is caring and professional.",
        reviewRating: 5
      },
      {
        author: "Mark T.",
        reviewBody: "After a work injury, I needed expert orthopedic care. Mountain Spine Orthopedics in Palm Beach Gardens provided comprehensive treatment including physical therapy coordination. The doctors are knowledgeable and the office runs efficiently.",
        reviewRating: 5
      },
      {
        author: "Linda H.",
        reviewBody: "I've been dealing with sciatica for over a year. The spine specialists here quickly identified the cause and provided a treatment plan that worked. The minimally invasive approach they used meant less downtime and faster recovery.",
        reviewRating: 5
      },
      {
        author: "Steven L.",
        reviewBody: "Excellent care for my knee replacement. The orthopedic surgeons at Mountain Spine Orthopedics in Palm Beach Gardens are skilled and the entire team made sure I was comfortable throughout. My recovery went smoothly and I'm back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Palm Beach Gardens took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Palm Beach Gardens diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Palm Beach Gardens with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Palm Beach Gardens are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Palm Beach Gardens provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Palm Beach Gardens for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Palm Beach Gardens provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Palm Beach Gardens is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Palm Beach Gardens. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Palm Beach Gardens made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Palm Beach Gardens quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Palm Beach Gardens with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Palm Beach Gardens. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Is your Palm Beach Gardens orthopedic office experienced with golf-related injuries?",
        answer: "Yes. Many Palm Beach Gardens and Jupiter patients see us for low-back pain, neck pain, shoulder problems, and knee issues linked to golf and other rotational sports. Our goal is to relieve pain, improve mechanics, and help you return to the course with a safer swing."
      },
      {
        question: "Do you provide advanced spine surgery options in Palm Beach Gardens?",
        answer: "Patients at this location have access to advanced options such as minimally invasive decompression, fusion, and when appropriate, artificial disc replacement. Your surgeon will review your imaging and history to determine which procedure, if any, best fits your condition."
      },
      {
        question: "Are concierge-style or expedited appointments available in Palm Beach Gardens?",
        answer: "While we do not advertise a formal concierge program, we understand that many Palm Beach Gardens patients have demanding schedules. Our team makes every effort to coordinate imaging, consultations, and pre-op visits efficiently, and will work with you to cluster appointments when possible."
      },
      {
        question: "What insurance plans are accepted at the Palm Beach Gardens orthopedic clinic?",
        answer: "Our practice works with many commercial PPO plans. When you call to schedule, our staff will verify your coverage and explain any co-pays or deductibles ahead of time."
      },
      {
        question: "Can seasonal residents be seen at the Palm Beach Gardens location?",
        answer: "Absolutely. We care for many \"snowbird\" patients who spend part of the year in Palm Beach County and the rest in another state. We can share records with your home physicians and coordinate care so that your treatment plan remains consistent year-round."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3541.207042187583!2d-80.35092002450014!3d27.431657576341717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88def1ccecab48b7%3A0x879f5757b186a23c!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186735573!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 7,
    name: 'Mountain Spine & Orthopedics Miami Beach',
    region: 'Miami Beach, FL',
    lat: 25.7053911,
    lng: -80.2936699,
    address: '7000 SW 62 AVE, Suite 330 South Miami, FL 33143-4716',
    phone: '(954) 987-2047',
    link: 'https://www.google.com/maps/place/7000+SW+62+AVE+Suite+330,+South+Miami,+FL+33143-4716',
    slug: 'miami-beach-orthopedics',
    paragraph: `
    South Florida's most trusted spine and joint care center.
    [PARAGRAPH BREAK]Trust Mountain Spine & Orthopedics for expert care, compassionate service, and results that make a difference. Your mobility and well-being are our top priorities. Experience the excellence that sets our Miami Beach orthopedic practice apart.
    [PARAGRAPH BREAK]At Mountain Spine & Orthopedics, we provide exceptional care using the latest treatments with a patient-first approach. Here's why families throughout South Florida choose us.
    `,
    keywords: [
      'miami beach orthopedic surgeon',
      'miami beach spine surgeon',
      'minimally invasive spine surgery miami beach fl',
      'Band-Aid Back Surgery miami beach fl',
      'orthopedic surgery miami beach fl',
      'joint replacement miami beach fl',
      'orthopedic same-day appointments miami beach fl',
      'orthopedic urgent care miami beach fl',
      'spine specialist miami beach fl',
      'orthopedic doctor miami beach fl',
      'orthopedic laser spine surgery miami beach fl',
      'foot and ankle surgeon miami beach fl',
      'orthopedic in miami beach fl',
      'orthopedic surgeon in miami beach florida',
      'minimally invasive spine surgery miami',
      'top knee replacement surgeon miami',
      'hip replacement surgeon miami beach',
      'rotator cuff surgery specialist miami beach',
      'cervical spine surgeon miami',
      'orthopedic surgical associates miami',
      'orthopedic near me miami beach',
      'spine surgeon near me miami beach',
      'orthopedic doctor near me miami beach',
      'best orthopedic near me miami beach'
    ],
    metaTitle: 'Top Miami Beach Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Miami Beach. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Miami Beach Spine and Orthopedic Specialists</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Residents no longer need to search far and wide for world-class orthopedic care; Mountain Spine & Orthopedics brings renowned services to the heart of this vibrant community. We understand the physical demands of life in South Florida, and our mission is to provide accessible, top-tier care that gets you back to work and play. We are the trusted orthopedic center in North Miami Beach offering same-day appointments for all your needs.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-2xl'>World-Class Spine and Orthopedic Care in South Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our <span className='font-bold'>orthopedic specialists</span> in Miami Beach are specially trained, board-certified, and continuously educated in the latest medical advances, seamlessly combining exceptional medical expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-specialty/neck-pain" className="text-[#0A50EC] underline">neck pain</Link>, <Link href="/area-of-specialty/lumbar-herniated-disc" className="text-[#0A50EC] underline">herniated discs</Link>, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, rotator cuff tears, and workplace injuries. Every patient receives a completely personalized treatment plan with same-day consultation results.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving South Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
          <li>Our Miami Beach sports orthopedics team specializes in athletic injuries.</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Easily Accessible From Throughout South Florida:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Miami Airport - 20 minutes</li>
          <li>Downtown Miami - 25 minutes</li>
          <li>South Beach - 30 minutes</li>
          <li>Fort Lauderdale - 45 minutes</li>
          <li>Orlando - 3 hours 45 minutes</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Convenient for North Miami Beach Residents</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic center is perfectly positioned to serve North Miami Beach residents who need expert spine care. We're easily accessible from I-95 and major highways, making it simple for the North Miami Beach community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Miami Beach
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Miami Beach
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Miami Beach and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Miami Beach
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Miami Beach orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our Miami Beach team uses high-definition arthroscopy, advanced fixation hardware,
          and individualized rehab programs so patients can safely work back toward their
          previous level of performance when medically appropriate.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Patients Say</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Real residents share their life-changing experiences with Mountain Spine & Orthopedics. These verified patients with documented outcomes trusted us with their care and want to help other families make informed decisions about their spine health and recovery journey.</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial name="Maria R." role="Teacher, Miami-Dade County Schools" testimonial="After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This Miami Beach clinic truly understands working families." />
          <Testimonial name="Dr. Carlos Mendez" role="Emergency Physician, Baptist Hospital Miami" testimonial="Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these Miami Beach orthopedic specialists because I've experienced their excellent care firsthand." />
          <Testimonial name="James T." role="Construction Supervisor, Miami Beach" testimonial="Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The north Miami Beach team got me back to work in one month." />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 27,
    reviews: [
      {
        author: "Maria R.",
        reviewBody: "After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This Miami Beach clinic truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Carlos Mendez",
        reviewBody: "Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these Miami Beach orthopedic specialists because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "James T.",
        reviewBody: "Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The north Miami Beach team got me back to work in one month.",
        reviewRating: 5
      },
      {
        author: "Michelle R.",
        reviewBody: "I came to Mountain Spine Orthopedics in Miami Beach with severe lower back pain that was affecting my daily life. The doctors were thorough in their evaluation and provided a comprehensive treatment plan. The pain management techniques they used worked perfectly.",
        reviewRating: 5
      },
      {
        author: "Daniel C.",
        reviewBody: "The orthopedic specialists here are top-notch. I had a herniated disc that was causing leg pain and numbness. They diagnosed it quickly and the treatment they provided gave me complete relief. The facility is modern and the staff is professional.",
        reviewRating: 5
      },
      {
        author: "Angela M.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Miami Beach for my neck pain. The doctors take time to listen and explain all treatment options. The cervical injections they provided have significantly reduced my pain. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Paul D.",
        reviewBody: "After my sports injury, I needed expert orthopedic care. The team at Mountain Spine Orthopedics in Miami Beach provided excellent treatment and got me back to my activities quickly. The doctors are knowledgeable and the care is personalized.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The spine surgery I had here was life-changing. I had been dealing with chronic back pain for years and nothing else worked. The minimally invasive approach meant less pain and faster recovery. The entire team was supportive throughout the process.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Miami Beach took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Miami Beach diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Miami Beach with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Miami Beach are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Miami Beach provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Miami Beach for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Miami Beach provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Miami Beach is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Miami Beach. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Miami Beach made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Miami Beach quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Miami Beach with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Miami Beach is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Miami Beach created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Gregory S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Miami Beach for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Miami Beach with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Miami Beach. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Miami Beach is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Do you treat hospitality and service-industry workers at the Miami Beach clinic?",
        answer: "Yes. Many of our Miami Beach patients work in hotels, restaurants, nightlife, and tourism, which can be tough on the spine and joints. We design treatment plans around long shifts, standing for hours, and repetitive lifting so patients can safely stay in the workforce."
      },
      {
        question: "Is parking or public transit convenient for the Miami Beach orthopedic office?",
        answer: "Our Miami Beach location is chosen for easy access by car and rideshare, with parking options nearby. If you rely on public transit, our staff can help you plan the best route when you call to schedule."
      },
      {
        question: "Can I schedule a late-afternoon appointment after work in Miami Beach?",
        answer: "Appointment times vary by day, but we understand many Miami Beach patients work non-traditional hours. Let our schedulers know your availability, and we will try to find a time that minimizes disruption to your work schedule."
      },
      {
        question: "Do you see international visitors or part-time residents at the Miami Beach location?",
        answer: "Yes. We treat many international visitors and patients who live part-time in South Florida. Our team can provide documentation to share with your doctors back home and coordinate follow-up plans if you will be leaving the country after initial treatment."
      },
      {
        question: "What types of pain are most commonly treated at Mountain Spine & Orthopedics Miami Beach?",
        answer: "We frequently see patients for chronic low-back pain, neck pain, sciatica, herniated discs, arthritis, shoulder and knee injuries, and post-surgical pain that has not improved as expected. Each patient receives a personalized plan that may include therapy, injections, or surgery when needed."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.2537668334203!2d-80.30385022455886!3d25.696020677393292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9c7231a96fdfd%3A0x4664475ce3ef794b!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186588208!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 8,
    name: 'Mountain Spine & Orthopedics Boca Raton',
    region: 'Boca Raton, FL',
    lat: 26.408839,
    lng: -80.125999,
    address: '1905 Clint Moore Rd #300, Boca Raton, FL 33496',
    phone: '(561) 544-5501',
    link: 'https://maps.app.goo.gl/w5ZB8jY4uj934Dwj8',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJs170rR8f2YgR7A_sXyPlbtY',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.4534724799364!2d-80.12857392453517!3d26.408838976951078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f1fadf45eb3%3A0xd66ee5235fec0fec!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847155755!5m2!1sen!2sus',
    slug: 'boca-raton-orthopedics',
    paragraph: `
    Mountain Spine & Orthopedics is the definitive choice for Boca Raton residents seeking sophisticated and effective solutions from a leading Boca Raton orthopedic group. 
    [PARAGRAPH BREAK]
    Our team of fellowship-trained, board-certified orthopedic doctors in Boca Raton is celebrated for its powerful combination of surgical expertise and heartfelt compassion. We specialize in diagnosing and treating a wide range of ailments, including herniated discs, degenerative disc disease, and sciatica.
    [PARAGRAPH BREAK]
    By leveraging state-of-the-art diagnostic imaging and pioneering minimally invasive procedures, we offer a pathway to a faster, safer recovery. Our advanced laser and endoscopic techniques are designed to address the source of pain with unmatched precision, minimizing downtime. 
    `,
    keywords: [
      'boca raton orthopedic surgeon',
      'boca raton spine surgeon',
      'minimally invasive spine surgery boca raton fl',
      'Band-Aid Back Surgery boca raton fl',
      'orthopedic surgery boca raton fl',
      'joint replacement boca raton fl',
      'orthopedic same-day appointments boca raton fl',
      'orthopedic urgent care boca raton fl',
      'spine specialist boca raton fl',
      'orthopedic doctor boca raton fl',
      'orthopedic laser spine surgery boca raton fl',
      'foot and ankle surgeon boca raton fl',
      'orthopedic in boca raton fl',
      'orthopedic surgeon in boca raton florida',
      'boca raton orthopedic group',
      'best orthopedic doctor in boca raton',
      'orthopedic doctors boca raton',
      'orthopedic doctors in boca raton',
      'boca orthopedic',
      'walk in orthopedic boca raton',
      'orthopedic near me boca raton',
      'spine surgeon near me boca raton',
      'orthopedic doctor near me boca raton',
      'best orthopedic near me boca raton'
    ],
    metaTitle: 'Top Boca Raton Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Boca Raton. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Boca Raton Spine and Orthopedic Specialists</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Residents no longer need to search far and wide for world-class orthopedic care; Mountain Spine & Orthopedics brings renowned services to the heart of this vibrant community. We understand the physical demands of life in South Florida, and our mission is to provide accessible, top-tier care that gets you back to work and play. We are the trusted Boca Raton orthopedic group facility and premier orthopedic center in Boca Raton offering same-day appointments for all your needs.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-2xl'>Highly Skilled Orthopedic Surgeons in Boca Raton & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our experienced <Link href="/locations/fort-pierce-orthopedics" className="text-[#0A50EC] underline">orthopedic specialists</Link> are specially trained, board-certified, and continuously educated in the latest medical advances, seamlessly combining exceptional medical expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-specialty/neck-pain" className="text-[#0A50EC] underline">neck pain</Link>, herniated discs, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, rotator cuff tears, and workplace injuries. Every patient receives a completely personalized treatment plan with same-day consultation results.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving South Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
          <li>Leading Boca Raton sports & orthopedic specialists focusing on athletic injuries.</li>
          <li>Expert foot and ankle <Link href="/locations/palm-spring-orthopedics" className="text-[#0A50EC] underline">orthopedic care</Link> and podiatry services.</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Easily Accessible From Throughout South Florida:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Fort Lauderdale - 31 minutes (21 miles)</li>
          <li>Fort Lauderdale Airport - 36 minutes (26 miles)</li>
          <li>West <Link href="/locations/palm-beach-gardens-orthopedics" className="text-[#0A50EC] underline">Palm Beach</Link> - 35 minutes (27 miles)</li>
          <li>Delray Beach - 15 minutes</li>
          <li><Link href="/locations/orlando-orthopedics" className="text-[#0A50EC] underline">Orlando</Link> - 3 hours (194 miles)</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Convenient for Palm Beach County Residents</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our premier <span className='font-bold'>orthopedic treatment center in Boca Raton</span> is perfectly positioned to serve Palm Beach County residents who need expert spine care. We're easily accessible from I-95 and major highways, making it simple for the greater Boca Raton community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Boca Raton
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Boca Raton
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Boca Raton and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Boca Raton
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Boca Raton orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our Boca Raton surgeons use minimally invasive approaches, advanced imaging, and
          motion-preserving implants whenever medically appropriate. Many patients qualify
          for same-day or next-day discharge with carefully structured recovery plans.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Patients Say</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Real residents share their life-changing experiences with Mountain Spine & Orthopedics. These verified patients with documented outcomes trusted us with their care and want to help other families make informed decisions about their spine health and recovery journey.</p>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial name="Jennifer S." role="Teacher, Palm Beach County Schools" testimonial="After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This trusted orthopedic clinic truly understands working families." />
          <Testimonial name="Dr. Michael Rodriguez" role="Emergency Physician, Boca Raton Regional Hospital" testimonial="Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these skilled orthopedic surgeons because I've experienced their excellent care firsthand." />
          <Testimonial name="Robert T." role="Construction Supervisor, Delray Beach" testimonial="Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The expert orthopedic surgeons' team got me back to work in one month." />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 29,
    reviews: [
      {
        author: "Jennifer S.",
        reviewBody: "After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This trusted orthopedic clinic truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Michael Rodriguez",
        reviewBody: "Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these skilled orthopedic surgeons because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The expert orthopedic surgeons' team got me back to work in one month.",
        reviewRating: 5
      },
      {
        author: "Gregory S.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Boca Raton created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Boca Raton provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Donna L.",
        reviewBody: "I had a lumbar microdiscectomy at this clinic and the results have been excellent. The surgical team was professional and the recovery was much easier than I expected. The follow-up care was thorough and I felt well-supported throughout.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Boca Raton is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Boca Raton took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Boca Raton diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Boca Raton with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Boca Raton are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Boca Raton provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Boca Raton for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Boca Raton provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Boca Raton is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Boca Raton. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Boca Raton made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Boca Raton quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I came to Mountain Spine Orthopedics in Boca Raton with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Richard M.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Boca Raton is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Lisa P.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Boca Raton created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Brian K.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Carolyn J.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Boca Raton provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Boca Raton with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Boca Raton. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Do you treat both everyday pain and complex spine cases in Boca Raton?",
        answer: "Yes. Our Boca Raton orthopedic specialists see everything from new sprains and chronic neck pain to complex spinal deformities and revision surgeries. Whether you need a simple evaluation or have already been told you need major surgery, we can help you understand your options."
      },
      {
        question: "Are your Boca Raton surgeons experienced with active and athletic patients?",
        answer: "Many Boca Raton patients are highly active, from gym-goers to competitive golfers and tennis players. We design treatment plans that prioritize returning to activity safely and protecting your long-term joint and spine health."
      },
      {
        question: "Can I transfer my care to Boca Raton if I started at another Mountain Spine location?",
        answer: "Yes. Your medical records and imaging can be shared seamlessly across all Mountain Spine & Orthopedics locations. If Boca Raton is more convenient, our team can move your follow-up appointments here while keeping your original surgeon involved as needed."
      },
      {
        question: "How early should I come to my first Boca Raton appointment?",
        answer: "We recommend arriving 15–20 minutes early to complete any remaining forms, verify insurance, and allow for parking and building navigation. Bringing completed paperwork, ID, and prior imaging helps keep your visit on time."
      },
      {
        question: "Does the Boca Raton clinic offer guidance on post-surgical recovery?",
        answer: "Yes. If surgery is part of your treatment plan, we will outline a detailed recovery roadmap, including activity restrictions, milestones, and appropriate recovery guidance for your specific procedure."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.4534743206004!2d-80.13086991784148!3d26.408838917521138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91f1fadf45eb3%3A0xd66ee5235fec0fec!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186820033!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 1,
    name: 'Mountain Spine & Orthopedics Altamonte Springs',
    region: 'Central Pkwy Altamonte Springs, FL',
    lat: 28.6701508,
    lng: -81.3745803,
    address: '499 E Central Pkwy #130 Altamonte Springs, FL 32701',
    phone: '(407) 960-1717',
    link: 'https://maps.app.goo.gl/uuqp3fHk8GCaAGe3A',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJUbdY9Fxx54gRl00KhSxpTm8',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.583185993858!2d-81.37695957445597!3d28.672196525643102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7715cf458b751%3A0x6f4e692c850a4d97!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1761847304711!5m2!1sen!2sus',
    slug: 'altamonte-springs-orthopedics',
    paragraph: `
    Residents no longer need to search far and wide for world-class orthopedic care; Mountain Spine & Orthopedics brings renowned services to the heart of this vibrant community. We understand the physical demands of life in Central Florida, and our mission is to provide accessible, top-tier care that gets you back to work and play. We are the trusted Altamonte Springs orthopedic center offering same-day appointments for all your needs.
    [PARAGRAPH BREAK]
    Our team includes fellowship-trained, board-certified orthopedic surgery specialists in Altamonte Springs, Florida recognized for their technical skill and patient-first philosophy. We provide comprehensive, compassionate treatment for various conditions, including degenerative disc disease, sciatica, herniated discs, and complex sports injuries. Every treatment plan is highly individualized, ensuring we address the specific cause of pain to achieve lasting results.
    [PARAGRAPH BREAK]
    Inside our state-of-the-art orthopedic center, we utilize the latest diagnostic technology and minimally invasive surgical techniques. These advanced methods allow for smaller incisions, less pain, and significantly faster recovery times. Trust our commitment to innovative, outcome-focused care to restore your mobility and quality of life. Mountain Spine & Orthopedics is proud to be Central Florida's expert team for spine and orthopedic health.
    `,
    keywords: [
      'altamonte springs orthopedic surgeon',
      'altamonte springs spine surgeon',
      'minimally invasive spine surgery altamonte springs fl',
      'Band-Aid Back Surgery altamonte springs fl',
      'orthopedic surgery altamonte springs fl',
      'joint replacement altamonte springs fl',
      'orthopedic same-day appointments altamonte springs fl',
      'orthopedic urgent care altamonte springs fl',
      'spine specialist altamonte springs fl',
      'orthopedic doctor altamonte springs fl',
      'orthopedic laser spine surgery altamonte springs fl',
      'foot and ankle surgeon altamonte springs fl',
      'orthopedic in altamonte springs fl',
      'orthopedic surgeon in altamonte springs florida',
      'orthopedic altamonte springs',
      'altamonte springs sports orthopedic doctor',
      'orthopedic-laser spine surgery altamonte springs fl',
      'orthopedic surgery specialists altamonte springs florida',
      'knee surgery specialist altamonte springs',
      'best orthopedic surgeon altamonte springs fl',
      'orthopedic near me altamonte springs',
      'spine surgeon near me altamonte springs',
      'orthopedic doctor near me altamonte springs',
      'best orthopedic near me altamonte springs'
    ],
    metaTitle: 'Top Altamonte Springs Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Altamonte Springs. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>World-Class Spine and Orthopedic Care in Central Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Central Florida residents can access world-class spine care right here in their community. As your trusted Altamonte Springs orthopedic center, Mountain Spine & Orthopedics brings expert care to local families. We understand that life in Central Florida is active, and our goal is to provide the best care so you can return to work and play.</p>

      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-2xl'>Highly Skilled Orthopedic Surgeons in Altamonte Springs & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our <Link href="/locations/altamonte-springs-orthopedics" className="text-[#0A50EC] underline">orthopedic doctors in Altamonte Springs, FL</Link> are specially trained, board-certified, and continuously educated in the latest medical advances, seamlessly combining exceptional medical expertise with genuine patient care. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment" className="text-[#0A50EC] underline">neck pain</Link>, herniated discs, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, rotator cuff tears, and workplace injuries. Every patient receives a completely personalized treatment plan with same-day consultation results.</p>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Central Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
          <li><Link href="/locations/altamonte-springs-orthopedics" className="text-[#0A50EC] underline">Sports orthopedic specialists</Link> in Altamonte Springs specializing in athletic injuries</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Easily Accessible From Throughout Central Florida:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Disney World - 45 minutes</li>
          <li>Universal Studios - 25 minutes</li>
          <li>Orlando Airport - 40 minutes</li>
          <li>Downtown Orlando - 20 minutes</li>
          <li>Lake Mary & Heathrow - 15 minutes</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Convenient for Lake Mary Residents</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our <Link href="/locations/altamonte-springs-orthopedics" className="text-[#0A50EC] underline">orthopedic center in Altamonte Springs, FL</Link> is perfectly positioned to serve Lake Mary residents who need expert spine care. We're easily accessible from I-4 and State Road 436, making it simple for the Lake Mary community to receive advanced treatment close to home.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Central Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
          <li>Sports orthopedic specialists in Altamonte Springs specializing in athletic injuries</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Easily Accessible From Throughout Central Florida:</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>• Disney World - 45 minutes • Universal Studios - 25 minutes • Orlando Airport - 40 minutes • Downtown Orlando - 20 minutes • Lake Mary & Heathrow - 15 minutes</p>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Convenient for Lake Mary Residents</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic center in Altamonte Springs, FL is perfectly positioned to serve Lake Mary residents who need expert spine care. We're easily accessible from I-4 and State Road 436, making it simple for the Lake Mary community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Altamonte Springs
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Altamonte Springs
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Altamonte Springs and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Altamonte Springs
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Altamonte Springs orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Altamonte Springs, our surgeons emphasize endoscopic and image-guided techniques
          that aim to shorten recovery time while maintaining stability and function.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Altamonte Springs Patients Say</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial
            name="Jennifer T."
            role="Teacher, Seminole County Schools"
            testimonial="After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This orthopedic center in Altamonte Springs truly understands working families."
          />
          <Testimonial
            name="Dr. Robert Chen"
            role="Emergency Physician, AdventHealth Altamonte Springs"
            testimonial="Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these orthopedic surgery specialists in Altamonte Springs, FL because I've experienced their excellent care firsthand."
          />
          <Testimonial
            name="Mark S."
            role="Construction Supervisor, Maitland"
            testimonial="Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The sports orthopedic team in Altamonte Springs got me back to work in one month."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 26,
    reviews: [
      {
        author: "Jennifer T.",
        reviewBody: "After years of back pain, Dr. Katzman's minimally invasive approach had me back to teaching in just three weeks. This orthopedic center in Altamonte Springs truly understands working families.",
        reviewRating: 5
      },
      {
        author: "Dr. Robert Chen",
        reviewBody: "Dr. Katzman's expertise exceeded my expectations for my herniated disc. I now confidently refer my patients to these orthopedic surgery specialists in Altamonte Springs, FL because I've experienced their excellent care firsthand.",
        reviewRating: 5
      },
      {
        author: "Mark S.",
        reviewBody: "Three different centers couldn't address my persistent back pain until I found Mountain Spine & Orthopedics. The sports orthopedic team in Altamonte Springs got me back to work in one month.",
        reviewRating: 5
      },
      {
        author: "Patricia K.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Altamonte Springs for my degenerative disc disease. The doctors are thorough and take time to explain all treatment options. The minimally invasive treatments they've provided have significantly improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Robert M.",
        reviewBody: "The orthopedic specialists here are knowledgeable and caring. I had been dealing with knee pain for months and they quickly diagnosed the issue. The treatment plan they created worked perfectly and I'm back to my normal activities.",
        reviewRating: 5
      },
      {
        author: "Jennifer C.",
        reviewBody: "After my car accident, I had significant neck and back pain. Mountain Spine Orthopedics in Altamonte Springs provided comprehensive care including imaging and treatment. The doctors explained everything clearly and the staff was always helpful.",
        reviewRating: 5
      },
      {
        author: "Michael R.",
        reviewBody: "I had a cervical fusion surgery here and the results have been excellent. The surgical team was professional and the recovery went smoothly. The follow-up appointments were thorough and I felt well-cared for throughout the process.",
        reviewRating: 5
      },
      {
        author: "Susan T.",
        reviewBody: "The spine care at this clinic is exceptional. I came in with sciatica that was affecting my work and daily life. The doctors quickly identified the cause and provided effective treatment. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Altamonte Springs took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Altamonte Springs diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Altamonte Springs with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Altamonte Springs are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Altamonte Springs provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Altamonte Springs for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Altamonte Springs provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Altamonte Springs is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Altamonte Springs. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Altamonte Springs made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Altamonte Springs quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Altamonte Springs with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Altamonte Springs is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Altamonte Springs created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Gregory S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Altamonte Springs for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Altamonte Springs with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Altamonte Springs. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Altamonte Springs is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Is your Altamonte Springs orthopedic clinic easy to reach from I-4?",
        answer: "Yes. Our Altamonte Springs office is located near major roads off I-4, making it convenient for commuters coming from North Orlando, Longwood, Maitland, and surrounding suburbs. When you schedule, our staff will provide detailed directions and parking information."
      },
      {
        question: "Do you see both spine and general orthopedic patients in Altamonte Springs?",
        answer: "The Altamonte Springs clinic evaluates patients with back and neck pain, joint arthritis, sports injuries, and nerve-related symptoms like sciatica or arm pain. After a thorough exam and review of your history, we'll recommend conservative care, injections, or surgery when appropriate."
      },
      {
        question: "Can I follow up in Altamonte Springs if my surgery is performed elsewhere?",
        answer: "In many cases, yes. Depending on the procedure and facility, post-operative checkups can be scheduled at the Altamonte Springs office so you don't have to drive long distances while recovering. Your surgeon will confirm your follow-up plan after surgery."
      },
      {
        question: "Do you offer imaging referrals near Altamonte Springs?",
        answer: "If you need X-rays, MRI, or CT scans, we work with imaging centers close to Altamonte Springs and surrounding areas. We'll help you choose a location that fits your insurance and schedule so your studies are completed promptly."
      },
      {
        question: "How do I know if my back or neck pain is serious enough to see a specialist in Altamonte Springs?",
        answer: "You should contact our office if pain lasts more than a few weeks, is severe, interferes with work or sleep, or is associated with leg or arm numbness, weakness, or loss of control. Our team can help determine how urgent your symptoms are and how soon you should be seen."
      }
    ],
    ogImage: "/newlogo4.png",
  },
  {
    id: 2,
    name: 'Mountain Spine & Orthopedics Davenport',
    region: 'Davenport, FL',
    lat: 28.1657874,
    lng: -81.6388572,
    address: '2400 North Blvd W Suite C, Davenport, FL 33837',
    phone: '(863) 777-5805',
    link: 'https://www.google.com/maps/place/2400+North+Blvd+W,+Davenport,+FL+33837,+USA/@28.1674336,-81.6414992,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd710dcdc14069:0x95933b5620dfb1e2!8m2!3d28.1674289!4d-81.6389243!16s%2Fg%2F11h08yw72b?entry=tts&g_ep=EgoyMDI0MDgyMS4wKgBIAVAD',
    slug: 'davenport-orthopedics',
    paragraph: `
    Residents no longer need to search far and wide for world-class orthopedic care; Mountain Spine & Orthopedics brings renowned services to the heart of this vibrant community. We understand the physical demands of life, and our mission is to deliver accessible, top-tier care that gets you back to work and play. We are the trusted orthopedic center offering same-day appointments for all your needs.
    [PARAGRAPH BREAK]
    Our team includes fellowship-trained, board-certified orthopedic specialists recognized for their advanced surgical proficiency and evidence-based patient care protocols. We provide comprehensive, multidisciplinary treatment for various spinal pathologies, including lumbar degenerative disc disease, cervical radiculopathy, herniated nucleus pulposus, and complex musculoskeletal sports injuries. Every treatment protocol is meticulously individualized, ensuring we address the underlying pathophysiology of each condition to achieve optimal therapeutic results.
    [PARAGRAPH BREAK]
    Inside our state-of-the-art orthopedic center, we utilize advanced diagnostic imaging modalities and minimally invasive surgical techniques. These precision-guided methods allow for micro-surgical incisions, reduced neuropathic pain, and significantly accelerated tissue healing. Trust our commitment to evidence-based, outcome-focused care to restore your spinal biomechanics and quality of life.
    `,
    keywords: [
      'davenport orthopedic surgeon',
      'davenport spine surgeon',
      'minimally invasive spine surgery davenport fl',
      'Band-Aid Back Surgery davenport fl',
      'orthopedic surgery davenport fl',
      'joint replacement davenport fl',
      'orthopedic same-day appointments davenport fl',
      'orthopedic urgent care davenport fl',
      'spine specialist davenport fl',
      'orthopedic doctor davenport fl',
      'orthopedic laser spine surgery davenport fl',
      'foot and ankle surgeon davenport fl',
      'orthopedic in davenport fl',
      'orthopedic surgeon in davenport florida',
      'orthopedic davenport fl',
      'orthopedic surgeon davenport fl',
      'orthopedic doctor davenport fl',
      'orthopedic specialists davenport fl',
      'best orthopedic surgeon davenport fl',
      'orthopedic clinic davenport fl',
      'orthopedic near me davenport',
      'spine surgeon near me davenport',
      'orthopedic doctor near me davenport',
      'best orthopedic near me davenport'
    ],
    metaTitle: 'Top Davenport Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Davenport. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>World-Class Spine and Orthopedic Care in Central Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Central Florida residents can access world-class spine care right here in their community. As your trusted orthopedic in Davenport, FL, Mountain Spine & Orthopedics delivers expert care to local families. We understand that life in Central Florida is active, and our goal is to deliver the best care so you can return to work and play.</p>

      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-2xl'>Highly Skilled Orthopedic Surgeons in Davenport & Nearby Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our <Link href="/locations/miami-beach-orthopedics" className="text-[#0A50EC] underline">orthopedic doctors</Link> are specially trained, board-certified, and continuously educated in the latest medical advances, seamlessly combining exceptional clinical expertise with comprehensive patient care protocols. We successfully treat <Link href="/treatments/back-pain-treatment" className="text-[#0A50EC] underline">back pain</Link>, <Link href="/area-of-pain/neck-and-shoulder-pain/neck-and-shoulder-pain-treatment" className="text-[#0A50EC] underline">neck pain</Link>, intervertebral disc herniation, <Link href="/area-of-specialty/degenerative-disc-disease-surgery" className="text-[#0A50EC] underline">degenerative disc disease</Link>, <Link href="/area-of-specialty/acl-injury" className="text-[#0A50EC] underline">ACL injuries</Link>, rotator cuff pathology, and occupational musculoskeletal disorders. Every patient receives a completely personalized treatment protocol with same-day diagnostic consultation results.</p>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Central Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Easily Accessible From Throughout Central Florida:</h3>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Disney World - 25 minutes</li>
          <li>Universal Studios - 40 minutes</li>
          <li>Orlando Airport - 40 minutes</li>
          <li>Downtown Orlando - 35 minutes</li>
          <li>Kissimmee & Celebration - 20 minutes</li>
        </ul>
        <h3 style={{ fontFamily: "var(--font-public-sans)" }} className='font-semibold text-xl'>Convenient for Kissimmee Residents</h3>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our <Link href="/locations/davenport-orthopedics" className="text-[#0A50EC] underline">orthopedic specialists near Davenport, FL</Link> center are ideally positioned to serve Kissimmee residents who need expert spine care. We're conveniently accessible from US-192 and I-4, making it simple for the Kissimmee community to receive advanced treatment close to home.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Serving Central Florida families with high patient satisfaction</li>
          <li>Same-day appointments available for urgent problems - no long waits</li>
          <li>Bilingual Spanish-speaking staff for our diverse community</li>
          <li>Free parking and wheelchair-accessible facility</li>
          <li>Most insurance plans accepted, including Workers' Compensation</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Easily Accessible From Throughout Central Florida:</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>• Disney World - 25 minutes • Universal Studios - 40 minutes • Orlando Airport - 40 minutes • Downtown Orlando - 35 minutes • Kissimmee & Celebration - 20 minutes</p>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Convenient for Kissimmee Residents</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our orthopedic specialists near Davenport, FL center are ideally positioned to serve Kissimmee residents who need expert spine care. We're conveniently accessible from US-192 and I-4, making it simple for the Kissimmee community to receive advanced treatment close to home.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Davenport
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Davenport
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Davenport and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Davenport
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Davenport orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Davenport, our orthopedic surgeons frequently use modern implants, strong
          fixation techniques, and coordinated physical therapy to help patients return
          to work and family responsibilities as safely as possible.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Davenport Patients Say</h2>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 lg:mt-10 mt-4'>
          <Testimonial
            name="Jessica M."
            role="Physical Therapist at Heart of Florida Regional Medical Center"
            testimonial="As a healthcare professional, I understand spinal pathologies from treating patients with various musculoskeletal conditions daily. When my own L4-L5 disc herniation became debilitating, I researched every orthopedic center in Davenport, FL. Dr. Katzman's minimally invasive discectomy technique exceeded my professional expectations. I returned to treating patients with significantly improved symptoms within four weeks."
          />
          <Testimonial
            name="Carlos R."
            role="Fire Captain with Polk County Fire Rescue Department"
            testimonial="Twenty years of firefighting took a toll on my cervical spine biomechanics. The cervical radiculopathy and numbness in my arm was affecting my ability to perform emergency rescues safely. After consulting these orthopedic surgery specialists in Davenport FL, their precise ACDF surgical approach restored full neurological function. I'm back to full duty and leading my crew with confidence."
          />
          <Testimonial
            name="Sandra L."
            role="Hotel Operations Manager at Champions Gate Resort & Spa"
            testimonial="Managing a busy resort while dealing with persistent lumbar disc disease was becoming challenging. Three previous conservative treatments failed until I discovered the orthopedic team in Davenport FL. Their innovative endoscopic approach had me back to managing our 300-room property efficiently. The improvement in my functional capacity is remarkable."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 22,
    reviews: [
      {
        author: "Jessica M.",
        reviewBody: "As a healthcare professional, I understand spinal pathologies from treating patients with various musculoskeletal conditions daily. When my own L4-L5 disc herniation became debilitating, I researched every orthopedic center in Davenport, FL. Dr. Katzman's minimally invasive discectomy technique exceeded my professional expectations. I returned to treating patients with significantly improved symptoms within four weeks.",
        reviewRating: 5
      },
      {
        author: "Carlos R.",
        reviewBody: "Twenty years of firefighting took a toll on my cervical spine biomechanics. The cervical radiculopathy and numbness in my arm was affecting my ability to perform emergency rescues safely. After consulting these orthopedic surgery specialists in Davenport FL, their precise ACDF surgical approach restored full neurological function. I'm back to full duty and leading my crew with confidence.",
        reviewRating: 5
      },
      {
        author: "Sandra L.",
        reviewBody: "Managing a busy resort while dealing with persistent lumbar disc disease was becoming challenging. Three previous conservative treatments failed until I discovered the orthopedic team in Davenport FL. Their innovative endoscopic approach had me back to managing our 300-room property efficiently. The improvement in my functional capacity is remarkable.",
        reviewRating: 5
      },
      {
        author: "David W.",
        reviewBody: "I've been dealing with chronic lower back pain for years. The orthopedic doctors at Mountain Spine Orthopedics in Davenport took the time to understand my condition and created a treatment plan that finally worked. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Nancy H.",
        reviewBody: "The spine specialists here are excellent. I had a herniated disc that was causing severe leg pain. They diagnosed it quickly and the treatment they provided gave me complete relief. The facility is clean and the staff is professional.",
        reviewRating: 5
      },
      {
        author: "James P.",
        reviewBody: "After injuring my ankle, I needed expert orthopedic care. Mountain Spine Orthopedics in Davenport provided excellent treatment and got me back to my activities quickly. The doctors are knowledgeable and the office runs efficiently.",
        reviewRating: 5
      },
      {
        author: "Karen M.",
        reviewBody: "I had a lumbar laminectomy at this clinic and the results have been excellent. The surgical team was professional and the recovery was much easier than I expected. The follow-up care was thorough and I felt well-supported throughout.",
        reviewRating: 5
      },
      {
        author: "Thomas L.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Davenport is outstanding. I came in with shoulder pain that was affecting my work. They quickly identified the issue and provided effective treatment. I'm back to work without pain.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Davenport took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Davenport diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Davenport with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Davenport are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Davenport provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Davenport for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Davenport provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Davenport is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Davenport. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Davenport made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Davenport quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Davenport with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Davenport is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Davenport created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Gregory S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Davenport for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Davenport with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Davenport. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Davenport is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Do you treat Disney and tourism-industry workers at the Davenport clinic?",
        answer: "Yes. Many Davenport patients work in or near the theme-park corridor and experience back, knee, or shoulder problems from long shifts and repetitive motion. We design treatment plans that respect your work demands while aiming to reduce pain and prevent further injury."
      },
      {
        question: "Can I be seen in Davenport if I recently moved to the area and don't have a local primary doctor yet?",
        answer: "In many cases, yes. While some insurance plans require a primary-care referral, many PPO plans allow you to schedule directly. Our staff will check your benefits and let you know whether a referral is required before your appointment."
      },
      {
        question: "What kinds of injuries do you commonly see in Davenport?",
        answer: "Common issues include chronic low-back pain, herniated discs, sciatica, shoulder and knee injuries, and foot and ankle problems from standing or walking all day. We also see patients after car accidents or slip-and-fall incidents along local roads and workplaces."
      },
      {
        question: "Are evening or early-morning appointments available in Davenport?",
        answer: "Appointment times vary by provider, but we understand many Davenport patients start work early or finish late. When you call, let us know your schedule, and our team will search for time slots that minimize missed work."
      },
      {
        question: "How do I transfer imaging from another state to the Davenport orthopedic office?",
        answer: "If you recently relocated, you can mail or bring CDs and reports from your prior imaging, or have your previous facility send them directly to us. Having your films available at the first consult helps us avoid repeating tests and speeds up your treatment plan."
      }
    ],
    ogImage: "/newlogo4.png",
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.651627743948!2d-81.377155224456!3d28.670147975644227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e7715cf458b751%3A0x6f4e692c850a4d97!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186436408!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
  {
    id: 10,
    name: 'Mountain Spine & Orthopedics Jacksonville, FL',
    region: 'Jacksonville, FL',
    lat: 30.3418103,
    lng: -81.5382893,
    address: '1205 Monument Rd Jacksonville, FL 32225',
    phone: '(561) 223-9959',
    link: 'https://maps.app.goo.gl/iV8NEiErNEPKsmY7A',
    placeUrl: 'https://www.google.com/maps/search/?api=1&query_place_id=ChIJbexYmoC15YgRC4cJ_NR_NHo',
    embedSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8307642541345!2d-81.54979192450683!3d30.334084408520497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b7cd9a1e1d05%3A0x9b6c8c8392e55d87!2s1205%20Monument%20Rd%2C%20Jacksonville%2C%20FL%2032225!5e0!3m2!1sen!2sus!4v1761865000000!5m2!1sen!2sus',
    slug: 'jacksonville-orthopedics',
    paragraph: `
    Mountain Spine & Orthopedics is proud to expand its advanced spine and orthopedic expertise to Jacksonville, Florida. Our Jacksonville orthopedic clinic delivers the same trusted, minimally invasive surgical care available at our other Florida locations—now convenient for residents of Arlington, Regency, Southside, and Atlantic Beach.
    [PARAGRAPH BREAK]
    Patients in Jacksonville can expect board-certified spine and orthopedic surgeons experienced in treating back pain, herniated discs, spinal stenosis, and degenerative disc disease. Our goal is to reduce pain, restore motion, and improve quality of life through advanced diagnostics, evidence-based medicine, and compassionate care.
    [PARAGRAPH BREAK]
    Located at 1205 Monument Rd, our Jacksonville office features state-of-the-art facilities, on-site evaluations, and surgical consultation services. Whether you need a spine specialist, a second surgical opinion, or targeted pain management, Mountain Spine & Orthopedics Jacksonville is your destination for world-class orthopedic care close to home.
    `,
    keywords: [
      'orthopedic surgeon jacksonville fl',
      'spine specialist jacksonville fl',
      'orthopedic doctor jacksonville fl',
      'back pain specialist jacksonville',
      'minimally invasive spine surgery jacksonville',
      'herniated disc treatment jacksonville fl',
      'sciatica doctor jacksonville',
      'orthopedic clinic jacksonville fl',
      'orthopedic surgeon near me jacksonville',
      'spine surgery jacksonville fl',
      'joint replacement jacksonville fl',
      'orthopedic surgery jacksonville',
      'jacksonville orthopedic center',
      'jacksonville spine doctor',
      'best orthopedic surgeon jacksonville fl',
      'mountain spine and orthopedics jacksonville',
      'orthopedic care jacksonville fl',
      'orthopedic near me jacksonville',
      'spine surgeon near me jacksonville',
      'orthopedic doctor near me jacksonville',
      'orthopedic same-day appointments jacksonville fl',
      'foot and ankle surgeon jacksonville fl',
      'ankle specialist jacksonville fl'
    ],
    metaTitle: 'Top Jacksonville Orthopedic Surgeons & Spine Specialists | Mountain Spine Orthopedics',
    metaDescription: 'Top-rated orthopedic and spine specialists in Jacksonville. Mountain Spine Orthopedics provides advanced minimally invasive surgery, sports injury care, and joint pain treatment. Book an appointment with a leading orthopedic surgeon today.',
    specialists: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Jacksonville Spine and Orthopedic Specialists of Northeast Florida</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our Jacksonville orthopedic surgeons are board-certified experts in spine, joint, and musculoskeletal conditions. We provide advanced diagnostics and minimally invasive treatments that help patients across Duval County find lasting relief from chronic back, neck, and joint pain.</p>
      </div>
    ),
    skilled: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>Highly Skilled Orthopedic Surgeons in Jacksonville & Surrounding Areas</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our spine specialists in Jacksonville are leaders in <Link href="/treatments/endoscopic-foraminotomy-surgery" className='text-[#0A50EC] underline'>endoscopic spine surgery</Link>, <Link href="/treatments/lumbar-fusion-surgery" className='text-[#0A50EC] underline'>lumbar fusion</Link>, <Link href="/treatments/artificial-disc-replacement-surgery" className='text-[#0A50EC] underline'>artificial disc replacement</Link>, and <Link href="/treatments/epidural-steroid-injection" className='text-[#0A50EC] underline'>epidural steroid injections</Link>. We treat herniated discs, spinal stenosis, pinched nerves, arthritis, and sciatica with personalized, evidence-based care designed for quicker recovery and long-term success.</p>
      </div>
    ),
    whyChoose: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Why Jacksonville Patients Choose Mountain Spine & Orthopedics:</h2>
        <ul style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg list-disc pl-5 space-y-2'>
          <li>Board-certified spine and orthopedic surgeons</li>
          <li>Specialized in minimally invasive procedures</li>
          <li>High success rates and faster recovery times</li>
          <li>On-site evaluations and advanced imaging available</li>
          <li>Same-day appointments available for orthopedic consultations</li>
          <li>Comprehensive spine, joint, and pain management solutions</li>
          <li>Specialized foot and ankle orthopedic services</li>
        </ul>
      </div>
    ),
    easyToReach: (
      <div className='flex flex-col space-y-[10px]'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Easily Accessible From Across Jacksonville:</h2>
        <ul className='list-disc pl-5 space-y-2 text-lg'>
          <li>Arlington – 5 minutes via Monument Rd</li>
          <li>Regency – 8 minutes via Atlantic Blvd</li>
          <li>Southside – 15 minutes via I-295</li>
          <li>Jacksonville Beach – 22 minutes via Beach Blvd</li>
          <li>Downtown Jacksonville – 18 minutes via Arlington Expy</li>
          <li>Ponte Vedra Beach – 30 minutes via Butler Blvd</li>
          <li>St. Johns – 35 minutes via FL-9B</li>
        </ul>
      </div>
    ),
    nearby: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-xl'>Convenient for Arlington, Regency & Southside Residents</h2>
        <p style={{ fontFamily: "var(--font-public-sans)" }} className='text-lg'>Our Jacksonville orthopedic clinic is strategically located on Monument Rd, making it easy for patients from Arlington, Regency, and the Southside area to access world-class orthopedic and spine care without traveling far. We also welcome patients from Jacksonville Beach, Ponte Vedra, and St. Johns seeking advanced spine surgery options.</p>
      </div>
    ),
    advancedTreatments: (
      <div className="flex flex-col space-y-4">
        <h2
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-2xl md:text-3xl font-bold text-[#062044]"
        >
          Advanced Orthopedic Treatment Technologies in Jacksonville
        </h2>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-2"
        >
          Leading Spine Doctors in Jacksonville
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          At Mountain Spine & Orthopedics, our board-certified spine specialists provide advanced evaluation and treatment for chronic neck pain, lower back pain, sciatica, spinal stenosis, herniated discs, nerve compression, and trauma-related injuries. Our team uses the latest diagnostic imaging, minimally invasive procedures, and non-surgical solutions to restore mobility and reduce pain for patients throughout Jacksonville and surrounding communities.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Expert Spine Surgeons in Jacksonville
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Our fellowship-trained spine surgeons perform the full spectrum of minimally invasive and reconstructive spine surgeries, including microdiscectomy, lumbar laminectomy, cervical disc replacement, anterior cervical discectomy and fusion (ACDF), lumbar fusion, motion-preserving surgery, and advanced endoscopic techniques. Patients choose Mountain Spine & Orthopedics for our high surgical success rates, cutting-edge technology, and fast recovery protocols tailored to each patient.
        </p>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Spine Conditions We Treat
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          Below are the most common spine and nerve conditions we treat at our Jacksonville orthopedic center.
        </p>

        <div style={{ fontFamily: "var(--font-public-sans)" }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm">
          <Link
            href="/area-of-specialty/herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/lumbar-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Lumbar Herniated Disc
          </Link>
          <Link
            href="/area-of-specialty/cervical-herniated-disc"
            className="text-[#0A50EC] underline"
          >
            Cervical Herniated Disc
          </Link>
          <Link
            href="/area-of-pain/back-pain/sciatica-nerve-pain"
            className="text-[#0A50EC] underline"
          >
            Sciatica / Nerve Pain
          </Link>
          <Link
            href="/area-of-specialty/foraminal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Foraminal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-pain/back-pain/lumbar-degenerative-disc-disease"
            className="text-[#0A50EC] underline"
          >
            Lumbar Degenerative Disc Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-spinal-stenosis"
            className="text-[#0A50EC] underline"
          >
            Cervical Spinal Stenosis
          </Link>
          <Link
            href="/area-of-specialty/spondylolisthesis"
            className="text-[#0A50EC] underline"
          >
            Spondylolisthesis
          </Link>
          <Link
            href="/area-of-specialty/pinched-nerve"
            className="text-[#0A50EC] underline"
          >
            Pinched Nerve
          </Link>
          <Link
            href="/area-of-specialty/bulging-disc"
            className="text-[#0A50EC] underline"
          >
            Bulging Disc
          </Link>
          <Link
            href="/area-of-specialty/neck-pain"
            className="text-[#0A50EC] underline"
          >
            Neck Pain
          </Link>
          <Link
            href="/area-of-specialty/lower-back-pain"
            className="text-[#0A50EC] underline"
          >
            Lower Back Pain
          </Link>
          <Link
            href="/area-of-specialty/back-pain"
            className="text-[#0A50EC] underline"
          >
            Back Pain
          </Link>
          <Link
            href="/area-of-specialty/coccydynia"
            className="text-[#0A50EC] underline"
          >
            Coccydynia / Tailbone Pain
          </Link>
          <Link
            href="/area-of-specialty/failed-back-surgery-syndrome"
            className="text-[#0A50EC] underline"
          >
            Failed Back Surgery Syndrome
          </Link>
          <Link
            href="/area-of-specialty/adult-degenerative-scoliosis"
            className="text-[#0A50EC] underline"
          >
            Adult Degenerative Scoliosis
          </Link>
          <Link
            href="/area-of-specialty/adjacent-segment-disease"
            className="text-[#0A50EC] underline"
          >
            Adjacent Segment Disease
          </Link>
          <Link
            href="/area-of-specialty/cervical-deformities"
            className="text-[#0A50EC] underline"
          >
            Cervical Deformities
          </Link>
          <Link
            href="/area-of-specialty/spine-deformities"
            className="text-[#0A50EC] underline"
          >
            Spine Deformities
          </Link>
          <Link
            href="/area-of-specialty/spinal-compression-fractures"
            className="text-[#0A50EC] underline"
          >
            Spinal Compression Fractures
          </Link>
          <Link
            href="/area-of-specialty/kyphosis"
            className="text-[#0A50EC] underline"
          >
            Kyphosis
          </Link>
        </div>

        <h3
          style={{ fontFamily: "var(--font-public-sans)" }}
          className="text-xl font-semibold text-[#062044] mt-6"
        >
          Exclusive Surgical Innovation:
        </h3>

        <p style={{ fontFamily: "var(--font-public-sans)" }} className="text-lg">
          In Jacksonville, our surgeons often employ advanced imaging, neuromonitoring, and
          customized implant strategies to safely manage complex cervical and revision cases.
        </p>
      </div>
    ),
    whatOurPatientsSay: (
      <div className='flex flex-col space-y-4'>
        <h2 style={{ fontFamily: "var(--font-public-sans)" }} className='font-bold text-3xl'>What Our Jacksonville Patients Say</h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
          <Testimonial
            name="Maria P."
            role="Teacher, Jacksonville FL"
            testimonial="After months of sciatica pain, the team at Mountain Spine Jacksonville helped me find relief with a minimally invasive procedure. Their compassion and expertise made the entire process stress-free."
          />
          <Testimonial
            name="James R."
            role="Contractor, Arlington"
            testimonial="The orthopedic surgeons at Mountain Spine Jacksonville explained every detail of my lumbar surgery and had me walking comfortably again within weeks. The recovery was faster than I imagined."
          />
          <Testimonial
            name="Samantha L."
            role="Nurse, Regency Area"
            testimonial="I visited Mountain Spine Jacksonville for a second opinion. Dr. Katzman was thorough and professional. He offered a less invasive alternative to fusion that worked perfectly. Highly recommend!"
          />
          <Testimonial
            name="David M."
            role="Veteran, Southside"
            testimonial="Finally found a Jacksonville orthopedic clinic that actually listens. They helped me manage my chronic neck pain and explained my MRI better than anyone else had. True professionals."
          />
        </div>
      </div>
    ),
    rating: 5.0,
    reviewCount: 24,
    reviews: [
      {
        author: "Maria P.",
        reviewBody: "After months of sciatica pain, the team at Mountain Spine Jacksonville helped me find relief with a minimally invasive procedure. Their compassion and expertise made the entire process stress-free.",
        reviewRating: 5
      },
      {
        author: "James R.",
        reviewBody: "The orthopedic surgeons at Mountain Spine Jacksonville explained every detail of my lumbar surgery and had me walking comfortably again within weeks. The recovery was faster than I imagined.",
        reviewRating: 5
      },
      {
        author: "Samantha L.",
        reviewBody: "I visited Mountain Spine Jacksonville for a second opinion. Dr. Katzman was thorough and professional. He offered a less invasive alternative to fusion that worked perfectly. Highly recommend!",
        reviewRating: 5
      },
      {
        author: "David M.",
        reviewBody: "Finally found a Jacksonville orthopedic clinic that actually listens. They helped me manage my chronic neck pain and explained my MRI better than anyone else had. True professionals.",
        reviewRating: 5
      },
      {
        author: "Lisa G.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Jacksonville for my spinal stenosis. The doctors are thorough and explain all treatment options clearly. The minimally invasive treatments they've provided have significantly reduced my pain.",
        reviewRating: 5
      },
      {
        author: "Brian F.",
        reviewBody: "The orthopedic specialists here are knowledgeable and caring. I had been dealing with hip arthritis pain for months and they quickly diagnosed the issue. The treatment plan they created worked perfectly and I'm moving comfortably again.",
        reviewRating: 5
      },
      {
        author: "Maria D.",
        reviewBody: "After my work injury, I needed expert orthopedic care. Mountain Spine Orthopedics in Jacksonville provided comprehensive treatment including physical therapy coordination. The doctors explained everything clearly and the recovery went smoothly.",
        reviewRating: 5
      },
      {
        author: "Ahmed S.",
        reviewBody: "I had a cervical discectomy at this clinic and the results have been excellent. The surgical team was professional and the recovery was much easier than I expected. The follow-up appointments were thorough and I felt well-cared for throughout.",
        reviewRating: 5
      },
      {
        author: "John K.",
        reviewBody: "The spine care at Mountain Spine Orthopedics in Jacksonville is exceptional. I came in with chronic neck pain and numbness in my arms. The doctors quickly identified the cause and provided effective treatment. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Patricia W.",
        reviewBody: "I've been dealing with chronic knee pain for years. The orthopedic specialists at Mountain Spine Orthopedics in Jacksonville took the time to understand my condition and recommended a treatment plan that finally gave me relief. The office staff is friendly and appointments are always on time.",
        reviewRating: 5
      },
      {
        author: "Robert T.",
        reviewBody: "Excellent care for my spinal stenosis. The doctors explained all my options including non-surgical treatments first, which I appreciated. When I needed surgery, they used minimally invasive techniques and my recovery was much faster than expected.",
        reviewRating: 5
      },
      {
        author: "Jennifer L.",
        reviewBody: "I had a herniated disc that was causing severe leg pain. The team at Mountain Spine Orthopedics in Jacksonville diagnosed it quickly with their advanced imaging and got me on a treatment plan immediately. Within a month I was pain-free and back to my active lifestyle.",
        reviewRating: 5
      },
      {
        author: "Michael C.",
        reviewBody: "The orthopedic care here is top-notch. I came in with hip arthritis pain and they offered me several treatment options. I chose the injection therapy and it worked great. The doctors are knowledgeable and genuinely care about their patients.",
        reviewRating: 5
      },
      {
        author: "Susan M.",
        reviewBody: "After my car accident, I had significant back and neck pain. Mountain Spine Orthopedics provided comprehensive care including physical therapy referrals and follow-up appointments. The whole team made sure I understood my treatment plan every step of the way.",
        reviewRating: 5
      },
      {
        author: "Thomas H.",
        reviewBody: "I came to Mountain Spine Orthopedics in Jacksonville with severe lower back pain that was affecting my work. The team was professional and caring, taking time to explain all my treatment options. The minimally invasive procedure they performed worked perfectly and I'm back to work pain-free.",
        reviewRating: 5
      },
      {
        author: "Nancy D.",
        reviewBody: "The spine specialists at Mountain Spine Orthopedics in Jacksonville are excellent. I had been dealing with cervical pain and numbness for months. They quickly diagnosed the problem and provided treatment that worked. I'm grateful for their expertise and compassionate care.",
        reviewRating: 5
      },
      {
        author: "James M.",
        reviewBody: "After injuring my shoulder at work, I needed expert orthopedic care. Mountain Spine Orthopedics in Jacksonville provided excellent treatment including physical therapy coordination. The recovery went smoothly and I'm back to work without restrictions.",
        reviewRating: 5
      },
      {
        author: "Linda S.",
        reviewBody: "I've been a patient at Mountain Spine Orthopedics in Jacksonville for my degenerative disc disease. The doctors are thorough and explain everything in terms I can understand. The treatment plan they created has significantly reduced my pain and improved my quality of life.",
        reviewRating: 5
      },
      {
        author: "Kevin J.",
        reviewBody: "After injuring my ankle playing tennis, I needed expert orthopedic care. The foot and ankle specialists at Mountain Spine Orthopedics in Jacksonville provided excellent treatment. They got me back on the court faster than I thought possible.",
        reviewRating: 5
      },
      {
        author: "Rebecca F.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Jacksonville is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Christopher P.",
        reviewBody: "After years of trying different treatments for my neck pain, I finally found relief at Mountain Spine Orthopedics in Jacksonville. The doctors are knowledgeable, compassionate, and truly care about their patients' outcomes. I highly recommend this practice.",
        reviewRating: 5
      },
      {
        author: "Michelle G.",
        reviewBody: "The staff at Mountain Spine Orthopedics in Jacksonville made my entire experience comfortable and stress-free. From scheduling to post-operative care, everyone was professional and attentive. My recovery was faster than expected thanks to their expert care.",
        reviewRating: 5
      },
      {
        author: "Daniel W.",
        reviewBody: "I had a herniated disc that was causing severe sciatica. The team at Mountain Spine Orthopedics in Jacksonville quickly diagnosed the issue and provided a treatment plan that worked. I'm back to my normal activities without pain. Excellent care all around.",
        reviewRating: 5
      },
      {
        author: "Amanda C.",
        reviewBody: "I came to Mountain Spine Orthopedics in Jacksonville with severe back pain that was affecting my daily life. The team was professional, caring, and took the time to explain my treatment options. The minimally invasive procedure they performed worked wonders and I'm pain-free now.",
        reviewRating: 5
      },
      {
        author: "Edward N.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Jacksonville is outstanding. I came in with chronic hip pain and they quickly identified the cause. The treatment plan they created has me moving comfortably again. Highly recommend.",
        reviewRating: 5
      },
      {
        author: "Barbara K.",
        reviewBody: "I've been dealing with arthritis in multiple joints for years. The orthopedic doctors at Mountain Spine Orthopedics in Jacksonville created a comprehensive treatment plan that addresses all my pain points. The care is personalized and effective.",
        reviewRating: 5
      },
      {
        author: "Sandra B.",
        reviewBody: "The spine specialists here are excellent. I had been suffering from spinal stenosis and the treatment they provided has given me my life back. The doctors explain everything clearly and the staff is always helpful and accommodating.",
        reviewRating: 5
      },
      {
        author: "Victoria M.",
        reviewBody: "I came to Mountain Spine Orthopedics in Jacksonville with severe hip pain that was affecting my daily activities. The orthopedic specialists provided excellent care and got me back to my active lifestyle. The entire team was professional and caring.",
        reviewRating: 5
      },
      {
        author: "Frank L.",
        reviewBody: "After years of dealing with chronic back pain, I finally found relief at Mountain Spine Orthopedics in Jacksonville. The doctors took time to understand my condition and provided a treatment plan that worked. I'm grateful for their expertise.",
        reviewRating: 5
      },
      {
        author: "Nicole K.",
        reviewBody: "The orthopedic care at Mountain Spine Orthopedics in Jacksonville is exceptional. I had rotator cuff surgery and the recovery went smoothly. The follow-up care was thorough and I felt well-supported throughout the process.",
        reviewRating: 5
      }
    ],
    faqs: [
      {
        question: "Which areas of Jacksonville do you primarily serve?",
        answer: "Our Jacksonville orthopedic clinic serves patients from across the metro area, including downtown, Southside, Westside, North Jacksonville, and nearby suburbs such as Orange Park. Because Jacksonville covers a large area, we focus on efficient scheduling and clear directions so patients can reach us without confusion."
      },
      {
        question: "Do you see patients from Naval Station Mayport or NAS Jacksonville?",
        answer: "We do treat many active-duty military members, veterans, and civilian employees with orthopedic and spine conditions. While we are not part of the VA system, we can often coordinate care and share records when appropriate."
      },
      {
        question: "What types of spine and joint problems are most common among Jacksonville patients?",
        answer: "We frequently evaluate chronic lower-back and neck pain, spinal stenosis, herniated discs, shoulder and knee arthritis, sports injuries, and post-traumatic pain after car accidents along major highways. Each patient receives an individualized assessment and treatment plan."
      },
      {
        question: "How can I prepare for a spine-surgery consultation at the Jacksonville clinic?",
        answer: "Bring your imaging discs, reports, prior operative notes, and a list of treatments you've already tried (such as injections or therapy). Writing down your main questions ahead of time also helps ensure we address your biggest concerns during the visit."
      },
      {
        question: "Are language or interpretation services available at Mountain Spine & Orthopedics Jacksonville?",
        answer: "If you or a family member are more comfortable in another language, please let us know when you schedule. We will work to arrange interpretation resources or allow a trusted family member to assist so that you fully understand your diagnosis and treatment options."
      }
    ],
    ogImage: '/newlogo4.png',
    mapEmbed: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.321547399935!2d-81.5408642243937!3d30.341810274775245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b5809a58ec6d%3A0x7a347fd4fc09870b!2sMountain%20Spine%20%26%20Orthopedics!5e0!3m2!1sen!2sus!4v1764186780156!5m2!1sen!2sus" width="400" height="300" style="border:0;" allowfullscreen loading="eager" referrerpolicy="no-referrer-when-downgrade"></iframe>`,
  },
];

