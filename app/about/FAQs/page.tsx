import Link from 'next/link'
import Image from 'next/image'
import FAQsLanding from '@/public/FAQs.jpeg'
import FAQsDocotorTestimony from '@/public/FAQsDoctorTestimony.png'
import type { Metadata } from 'next'
import FaqsSection from '@/components/FaqsSection'

export const metadata: Metadata = {
  title: 'Spine Surgery FAQs | Mountain Spine & Orthopedics Florida',
  description: 'Find answers to frequently asked questions about spine surgery, recovery, and treatment options at Mountain Spine & Orthopedics. Get informed before your visit.',
  openGraph: {
    title: 'Spine Surgery FAQs | Mountain Spine & Orthopedics Florida',
    description: 'Find answers to frequently asked questions about spine surgery, recovery, and treatment options at Mountain Spine & Orthopedics. Get informed before your visit.',
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
          Mountain Spine & Orthopedics has developed a specialized minimally invasive technique that reduces recovery time and pain following surgery by using tiny incisions and preserving the muscles and tissue surrounding your spine. The results are longer lasting and more effective than traditional surgery. Recovery is significantly faster, often allowing patients to return to work within just a few days.
        </p>
      </>
    ),
  },
  {
    question: "How experienced are your surgeons?",
    answer: (
      <p>
        Our surgeons have over 20 years of combined experience in minimally invasive spine surgery. Each surgeon is
        board-certified and fellowship-trained, specializing in the latest techniques and technologies for spine care.
        They have successfully performed thousands of procedures with excellent patient outcomes.
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
        We offer a comprehensive range of non-surgical treatments including pain management
        injections, medication management and lifestyle modification programs. Our
        team believes in exploring all conservative treatment options before considering surgical intervention.
      </p>
    ),
  },
  {
    question: "How do I begin the process of finding a treatment with Mountain Spine & Orthopedics?",
    answer: (
      <p>
        The process begins with scheduling an initial consultation with one of our spine specialists. During this
        appointment, we'll review your medical history, perform a physical examination, and discuss any imaging
        studies you may have. Based on this assessment, we'll develop a personalized treatment plan tailored to your
        specific condition and needs.
      </p>
    ),
  },
  {
    question: "How do I know which treatment is the right one for me?",
    answer: (
      <p>
        Determining the right treatment involves a collaborative decision-making process between you and your care
        team. We consider factors such as your specific diagnosis, symptom severity, previous treatments, overall
        health, and personal goals. We'll thoroughly explain all available options, including their benefits and
        risks, to help you make an informed decision about your care.
      </p>
    ),
  },
  {
    question: "Is spine surgery covered by insurance?",
    answer: (
      <p>
        Most spine surgeries are covered by insurance when deemed medically necessary. Our dedicated insurance
        specialists will work directly with your insurance provider to verify coverage, obtain necessary
        authorizations, and explain any out-of-pocket costs before proceeding with treatment. We accept most major
        insurance plans and can discuss payment options for any uncovered services.
      </p>
    ),
  },
]

export default function FAQs() {
  return (
    <main className='w-full flex flex-col items-center justify-center bg-white h-full'>
      {/* Landing */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" >
        <div 
          style={{ background: 'white', filter: 'blur(30px)' }}
          className="w-full h-[120px] absolute top-0 z-[1] border border-red-500"
        />
        <Image src={FAQsLanding} className=" xl:max-h-[945px] h-full absolute top-0 object-cover object-top pt-10 self-end w-full xl:pl-[100px]" alt="Doctor Diagnosing a Old Patient"/>
        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-80">
          <div className="md:w-[565px] h-full absolute left-0 top-0 w-full"
            style={{ background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)' }}
          />
          <div className=' px-6 xl:px-[80px] z-[2]'>
            <div className='flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px]'
              style={{ background : 'rgba(255, 255, 255, 0.50)' }}
            >
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-[#022968]">About</span>
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-[#022968]">/</span>
              <span style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 400 }} className="text-[#2358AC]">FAQ's</span>
            </div>
          </div>
          <div className=" px-6 xl:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] md:w-[71%] xl:w-[58%] pb-20">
            <h1 style={{ fontFamily: "var(--font-reem-kufi)", fontWeight: 700 }} className="text-[#022968] text-3xl sm:text-5xl md:text-6xl">
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
          <Image src={FAQsDocotorTestimony} alt='Happy Female Doctor' className=' md:flex hidden absolute -bottom-8 left-[40%] w-[75%] z-20'/>
          <p 
            style={{ fontFamily : 'var(--font-reem-kufi)', fontWeight : 500 }}
            className=' text-[#5B5F67] md:w-[55%] w-full text-xl md:text-2xl'
          >
            At Mountain Spine & Orthopedics, we take the time to listen to each patient to provide you with a positive and individualized treatment experience. We believe in equipping you with the knowledge needed to make an informed and confident decision about your spine care. View some of our commonly-asked questions.
          </p>
        </div>
      </section>
    </main>
  )
}
