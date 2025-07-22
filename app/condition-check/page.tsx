import Image from 'next/image'
import PatientFormsLanding from '@/public/PatientFormsLanding.jpeg'
import ContactUsSection from '@/components/ContactUsSection'
import type { Metadata } from 'next'
import ConditionCheckSection from '@/components/ConditionCheckSection'

export const metadata: Metadata = {
  title: 'Back & Neck Pain Condition Checker | Mountain Spine & Orthopedics',
  description: 'Use our free online condition check tool to describe your symptoms and receive a tailored assessment from our spine specialists. Fast, secure, and personalized.',
  openGraph: {
    title: 'Back & Neck Pain Condition Checker | Mountain Spine & Orthopedics',
    description: 'Use our free online condition check tool to describe your symptoms and receive a tailored assessment from our spine specialists. Fast, secure, and personalized.',
    url: 'https://www.mountainspineortho.com/condition-check',
    type: 'website',
    images: [
      {
        url: '/PatientFormsLanding.jpeg',
        width: 1200,
        height: 630,
        alt: 'Doctor Diagnosing a Old Patient',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Back & Neck Pain Condition Checker | Mountain Spine & Orthopedics',
    description: 'Use our free online condition check tool to describe your symptoms and receive a tailored assessment from our spine specialists. Fast, secure, and personalized.',
    images: ['/PatientFormsLanding.jpeg'],
  },
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/condition-check',
  },
}

const ConditionCheckSteps = [
  {
    step :  "Describe Your Pain",
    caption : "Understanding the nature and intensity your pain is the first step to diagnosing it.",
    questions : [
        { question : "Where is your pain? (Choose all that apply)", control: "pain_area", options : ["Lower Back","Middle Back","Neck","Shoulders","Arms","Buttocks","Legs"] },
        { question : "Where is the pain strongest?", control: "pain_strongest", options : ["Lower Back","Middle Back","Neck","Shoulders","Arms","Buttocks","Legs"] },
        { question : "How long have you been experiencing pain?", control : "pain_length", options : ["A month or less","One to six months","Seven months to a Year","Shoulders","A year or more"] },
        { question : "How would describe your pain?", control: "pain_desc", options : ["Sharp","Burning","Cramping","Radiating (throbbing)","Shocking (quick jolts of pain, with minor pain in-between)"] },
        { question : "Are you always in pain?", control : "pain_always", options : ["Yes, I am in constant pain that worsens depending on what activity I am doing.","No, it comes and goes depending on what activity I am doing."] }
    ]
  },
  {
    step :  "Describe Your Symptoms",
    caption : "Determining How your pain responds to different activities and identifying any other specific symptoms is the second step to diagnosing your pain",
    questions : [
        { question : "Do you have any of the following symptoms? (choose all that apply)?", control : "pain_symptoms", options : ["Pins and needles feeling","Numbness","Tingling sensations","Progressing weakness","Loss of coordination"] },
        { question : "When is your pain at its worst? (choose the one that most applies)", control : "pain_worst", options : ["In the morning after waking up","While standing or walking","While bending backward","While sitting","While performing strenous activity"] },
        { question : "When does your pain feel better?", control : "pain_feel_better", options : ["Sitting down","Standing up","Walking","Lying down and relaxing","Leaning forward","Bending backward"] },
        { question : "What caused your pain originally?", control : "pain_source", options : ["Lifting something heavy","Vehicle crash","Slip or fall","Traumatic injury","Leaning forward","Bending backward","Other (Specify in the next steps comments)"] },
        { question : "Have you undergone any of the following tests", control : "pain_test", options : ["CT Scan","MRI","X-Ray","Nerve conduction study","Other (Specify in the next steps comments)"] },
    ]
  },
  {
    step :  "Your Profile",
    caption : "Lastly, a few details about you helps us better protect your information and allows us to quickly give you a targeted diagnosis.",
    questions : [
        { question : "First Name", control : "first_name", options : [] },
        { question : "Last Name", control : "last_name", options : [] },
        { question : "Email", control : "email", options : [] },
        { question : "Phone", control : "phone", options : [] },
        { question : "State", control : "state", options : ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA","HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD","MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ","NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC","SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"] },
        { question : "Insurance Type", control : "insurance_type", options : ["Blue Cross Blue Shield","Aetna","Cigna Healthcare","United Healthcare","Meritan Health","Bright Health Group","Multiplan","Self-pay"] },
        { question : "Comments", control : "comments", options : [] },
        { question : 'Email Opt Out', control : 'email_optout', options : [] }
    ]
  }
]

const initialValues = {
  pain_area : [],
  pain_strongest : "",
  pain_length : "",
  pain_desc : "",
  pain_always : "",
  pain_symptoms : [],
  pain_worst : "",
  pain_feel_better : "",
  pain_source : "",
  pain_test : "",
  first_name : "",
  last_name : "",
  email : "",
  phone : "",
  state : "",
  insurance_type : "",
  comments : "",
  email_optout : ""
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': 'Home',
      'item': 'https://www.mountainspineortho.com/'
    },
    {
      '@type': 'ListItem',
      'position': 2,
      'name': 'Condition Check',
      'item': 'https://www.mountainspineortho.com/condition-check'
    }
  ]
}

export default function ConditionChecker() {
  return (
    <main className="w-full flex flex-col items-center justify-center bg-white h-full" aria-label="Condition Check Main Content">
      {/* JSON-LD Breadcrumb Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {/* Landing Section */}
      <section className="w-full h-full flex flex-col relative overflow-hidden" aria-labelledby="condition-check-heading">
        <Image src={PatientFormsLanding} className="h-full absolute top-0 object-cover object-center self-end w-full " alt="Doctor Diagnosing a Old Patient" priority />
        <div className="z-[1] flex flex-col w-full h-full text-left relative pt-60">
          <div className="md:w-[80%] w-full h-full absolute left-0 top-0" style={{ background : 'linear-gradient(90deg, #5FBBEC 20.16%, rgba(95, 187, 236, 0.26) 90%,  rgba(255,0,0,0) 100%)' }} />
          <nav aria-label="Breadcrumb" className="px-6 lg:px-[80px] z-[2] mt-[220px]">
            <ol className="flex flex-row space-x-[4px] rounded-[62px] w-fit items-center justify-center px-[20px] py-[10px] bg-[rgba(255,255,255,0.5)]">
              <li><a href="/" className="text-[#022968]" style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 400 }}>Home</a></li>
              <li aria-hidden="true" className="text-[#022968]">/</li>
              <li aria-current="page" className="text-[#2358AC]" style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 400 }}>Condition Check</li>
            </ol>
          </nav>
          <div className="px-6 lg:px-[80px] z-[2] flex flex-row space-x-[20px] items-center justify-start mt-[12px] xl:w-[55%]">
            <h1 id="condition-check-heading" style={{ fontFamily: 'var(--font-reem-kufi)', fontWeight: 400 }} className="text-[#022968] text-5xl sm:text-6xl xl:text-6xl">
              Check Your Spine Condition – Free Online Assessment
            </h1>
          </div>
          <div className="z-[2] px-6 lg:px-[80px] mt-[24px] lg:w-[55%] md:w-[70%] w-full pb-8">
            <p style={{ fontWeight: 400 }} className="text-white sm:text-xl lg:text-2xl text-shadow-sm">
              Welcome to an exciting new way to obtain a preliminary diagnosis online based on your symptoms, previous tests, and history. This tool's confidential results are often used by pain sufferers to assist them in seeking effective treatment, or as a confirmation of the existence of a specific orthopedic condition they may be concerned about.
            </p>
          </div>
        </div>
      </section>
      {/* Interactive Condition Checker Section */}
      <ConditionCheckSection steps={ConditionCheckSteps} initialValues={initialValues} />
      {/* Informational Cards Section */}
      <section className='w-full h-full xl:space-y-0 space-y-6 flex flex-col xl:flex-row space-x-[32px] relative overflow-hidden py-[50px] px-6 lg:px-[80px]'>
            <div className=' flex flex-col space-y-[40px] rounded-[24px] bg-[#FAFAFA] p-4 md:p-[40px] w-full xl:w-[50%]'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    className='text-[#022968] text-4xl md:text-5xl'
                    >Check<br className='md:flex hidden' /> Back Pain & Neck Pain</h1>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    className='text-[#5B5F67] text-lg md:text-xl'
                    >When you first visit a doctor, he will ask questions about the symptoms you’re experiencing. This is known as medical history. It allows the doctor to get more information about your symptoms. For instance, when they first developed, what makes them worse and what treatments you’ve tried.
                    <br /> <br/>
                    The doctor will then do a physical examination to assess your muscle strength, sensation and reflexes so they can determine your particular condition. The location of symptoms will help the doctor narrow down the conditions you may have. After the physical examination, the doctor may perform additional tests to accurately confirm the diagnosis. These can include X-rays, CT scans or MRI scans.</h1>
            </div>
            <div className=' flex flex-col space-y-[40px] rounded-[24px] bg-[#FAFAFA] p-4 md:p-[40px] w-full xl:w-[50%]'>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    className='text-[#022968] text-4xl md:text-5xl'
                    >Mountain Spine & Orthopedics<br className='md:flex hidden'/> Condition Check Tool</h1>
                    <h1
                    style={{
                        fontFamily: "var(--font-reem-kufi)",
                        fontWeight: 500,
                    }}
                    className='text-[#5B5F67] text-lg md:text-xl'>
                        Mountain Spine & Orthopedics offers a free condition check tool to help you understand the source of <a href="/area-of-speciality?data=%7B%22tags%22%3A%5B%22Lower+Spine%22%5D%7D" className='text-[#022968] underline'>your back pain.</a> With our condition check tool, you can quickly identify your current neck, back or spine problem so you can obtain treatment as soon as possible.
                        <br /><br/>
                        To complete the condition check tool, describe your pain, tell us about your symptoms and give us additional information about the history of your pain. An Mountain Spine & Orthopedics spine specialist will get back to you with the results of your assessment. Keep in mind, however, that an online diagnosis isn’t conclusive and you need to<a href="#contact-us-section" className='text-[#022968] underline'> be further evaluated by an Mountain Spine & Orthopedics specialist</a> at one of our clinics.
                   </h1>
            </div>
        </section>
      {/* Final CTA Section */}
      <section className="w-full flex flex-col items-center justify-center py-16" aria-label="Condition Check CTA">
        <h2 className="text-3xl md:text-5xl font-bold text-[#022968] mb-4" style={{ fontFamily: 'var(--font-reem-kufi)' }}>
          Take the first step toward a pain-free life.
        </h2>
        <h3 className="text-xl md:text-2xl text-[#2358AC] mb-8" style={{ fontFamily: 'var(--font-reem-kufi)' }}>
          Contact Us
        </h3>
        <ContactUsSection />
      </section>
    </main>
  )
}
