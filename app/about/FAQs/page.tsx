import Link from 'next/link'
import Image from 'next/image'
import FAQsLanding from '@/public/FAQs.jpeg'
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'
import type { Metadata } from 'next'
import FaqsSection from '@/components/FaqsSection'
import { buildCanonical } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Spine Surgery FAQs | Mountain Spine & Orthopedics Florida',
  description: 'Find answers to frequently asked questions about spine surgery, recovery, and treatment options at Mountain Spine & Orthopedics. Get informed before your visit.',
  alternates: {
    canonical: buildCanonical('/about/faqs'),
  },
  openGraph: {
    title: 'Spine Surgery FAQs | Mountain Spine & Orthopedics Florida',
    description: 'Find answers to frequently asked questions about spine surgery, recovery, and treatment options at Mountain Spine & Orthopedics. Get informed before your visit.',
    url: buildCanonical('/about/faqs'),
    images: ['/FAQs.jpeg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spine Surgery FAQs | Mountain Spine & Orthopedics Florida',
    description: 'Find answers to frequently asked questions about spine surgery, recovery, and treatment options at Mountain Spine & Orthopedics. Get informed before your visit.',
    images: ['/FAQs.jpeg'],
  },
};

const faqItems = [
  {
    question: 'What does "minimally invasive surgery" mean?',
    answer: (
      <>
        <p className="mb-3">
          Gone are the days of undergoing traditional open back surgery and a long, difficult recovery for those who
          suffer from neck or back conditions – minimally invasive surgery is the safer, more effective, and less
          painful alternative.
        </p>
        <p>
          Minimally invasive surgery is a modern approach that uses smaller incisions and specialized instruments to treat spinal conditions. Unlike traditional open surgery, it preserves the muscles and tissues surrounding your spine. At Mountain Spine & Orthopedics, procedures like our <a href="/treatments/endoscopic-discectomy-surgery" className="text-blue-600 hover:underline">endoscopic discectomy</a> result in less pain, a significantly faster recovery, and more effective, long-lasting outcomes. Many of our patients return to work and daily activities within just a few days.
        </p>
      </>
    ),
  },
  {
    question: "How experienced are your surgeons?",
    answer: (
      <p>
        Our surgeons have over 20 years of combined experience in minimally invasive spine surgery. Each surgeon is
        board-certified and fellowship-trained, specializing in the latest techniques. You can learn more about their extensive credentials on our <a href="/find-care/find-a-doctor" className="text-blue-600 hover:underline">Find a Doctor page</a>. They have successfully performed thousands of procedures with excellent patient outcomes.
      </p>
    ),
  },
  {
    question: "What do past patients have to say about their Mountain Spine & Orthopedics experience?",
    answer: (
      <p>
        Our patients consistently report high satisfaction rates with their Mountain Spine & Orthopedics experience. Many highlight the
        personalized care they received, the effectiveness of their treatment, and the significant improvement in
        their quality of life following surgery. We maintain a 95% patient satisfaction rate, with many patients
        returning to normal activities within weeks of their procedure.
      </p>
    ),
  },
  {
    question: "What non-surgical alternatives do you offer?",
    answer: (
      <p>
        We offer a comprehensive range of <a href="/treatments/non-surgical-treatments-for-pain-management" className="text-blue-600 hover:underline">non-surgical treatments</a>, including pain management
        injections like <a href="/treatments/epidural-steroid-injection" className="text-blue-600 hover:underline">epidural steroid injections</a>, medication management and lifestyle modification programs. Our
        team believes in exploring all conservative treatment options before considering surgical intervention.
      </p>
    ),
  },
  {
    question: "How do I begin the process of finding a treatment with Mountain Spine & Orthopedics?",
    answer: (
      <p>
        The process begins with scheduling an initial consultation. During this
        appointment, we'll review your medical history, perform an exam, and discuss your imaging. A great first step is to submit your records through our <a href="/find-care/free-mri-review" className="text-blue-600 hover:underline">Free MRI Review tool</a>. Based on this, we'll develop a personalized treatment plan tailored to your needs.
      </p>
    ),
  },
  {
    question: "How do I know which treatment is the right one for me?",
    answer: (
      <p>
        Determining the right treatment is a collaborative decision between you and your care
        team. We consider your diagnosis, symptoms, previous treatments, and personal goals. We recommend getting a <a href="/find-care/second-opinion" className="text-blue-600 hover:underline">second opinion</a> to feel fully confident. We'll thoroughly explain all options to help you make an informed decision.
      </p>
    ),
  },
  {
    question: "Is spine surgery covered by insurance?",
    answer: (
      <p>
        Most spine surgeries are covered by insurance when deemed medically necessary. Our dedicated insurance
        specialists will work directly with your provider to verify coverage and obtain authorizations. We accept most major
        insurance plans; please see our <a href="/insurance-policy" className="text-blue-600 hover:underline">insurance policy page</a> for more details.
      </p>
    ),
  },
]

export default function FAQs() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden [mask-composite:intersect] [mask-image:linear-gradient(to_top,transparent,black_6rem)]" >
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
        <div className="z-[1] flex flex-col w-full h-full text-center items-center justify-center relative sm:pt-60 sm:pb-20 pt-30 pb-0">
          <div className=' px-6 xl:px-[80px] z-[2] w-full flex items-center justify-center'>
            <div className='flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
              style={{ background: 'rgba(255, 255, 255, 0.50)' }}
            >
              <span style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-[#252932]">About</span>
              <span style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-[#252932]">/</span>
              <span style={{ fontFamily: "var(--font-public-sans)", fontWeight: 400 }} className="text-[#2358AC]">FAQ's</span>
            </div>
          </div>
          <div className=" px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] md:w-[71%] xl:w-[70%] pb-20">
            <h1 style={{ fontFamily: "var(--font-public-sans)", fontWeight: 500 }} className="text-[#252932] text-3xl sm:text-5xl md:text-6xl">
              Frequently Asked Questions – Mountain Spine & Orthopedics
            </h1>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Section */}
      <FaqsSection
        header={<span>Your Questions Answered: Spine Surgery FAQs From Our Patients</span>}
        faqItems={faqItems}
      />

      {/* Testimonial/Closing Section */}
      <section className=' xl:mt-[80px] py-[50px] max-w-[1440px]  px-6 xl:px-[80px] w-full max-h-[680px] lg:h-[680px]'>
        <div className=' h-full w-full rounded-[40px] bg-[#EDEEE9] p-8 xl:p-[80px] relative border overflow-clip'>
          <Image src={FAQsDocotorTestimony} alt='Happy Female Doctor' className=' md:flex hidden absolute -bottom-8 left-[40%] w-[75%] z-20' />
          <p
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className=' text-[#424959] md:w-[55%] w-full text-xl md:text-2xl'
          >
            At Mountain Spine & Orthopedics, we take the time to listen to each patient to provide you with a positive and individualized treatment experience. We believe in equipping you with the knowledge needed to make an informed and confident decision about your spine care. View some of our commonly-asked questions.
          </p>
        </div>
      </section>
    </main>
  )
}
