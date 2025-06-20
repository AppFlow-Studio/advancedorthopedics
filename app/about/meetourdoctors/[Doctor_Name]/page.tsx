import { Doctors } from "@/components/data/doctors";
import Image from 'next/image';
import Landing from '@/public/MeetOurDoctorsLanding.jpeg';

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

export default async function DoctorDetails({ params }: { params: { Doctor_Name: string } }) {
  const dynamic = (await import('next/dynamic')).default;
  const doctor_details = Doctors.find(x => x.slug === params.Doctor_Name);
  if (!doctor_details) {
    return (
      <main className="w-full h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">Doctor not found</h1>
      </main>
    );
  }
  const DoctorProfileClient = dynamic(() => import('./DoctorProfileClient'), { ssr: false });
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
                <li><a href="/">Home</a> /</li>
                <li><a href="/find-care">Find Care</a> /</li>
                <li><a href="/area-of-speciality">Area of Speciality</a> /</li>
                <li><a href="/about">About</a> /</li>
                <li><a href="/locations">Location</a> /</li>
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
      {/* Client-side profile details and forms */}
      <DoctorProfileClient doctor={doctor_details} />
    </main>
  );
}
