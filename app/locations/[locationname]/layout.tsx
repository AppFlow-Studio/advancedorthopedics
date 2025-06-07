import { ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";

export async function generateMetadata({ params }: { params: { locationname: string } }, parent: ResolvingMetadata) {
    const location = clinics.filter(x => x.slug === params.locationname)[0]
    return {
      title: location.name,
      description: location.paragraph.replaceAll('[PARAGRAPH BREAK]', ''),
      keywords: ['Florida Orthopedic Care', 'Florida Orthopedic Surgeon', 'Florida Orthopedic Clinic', 'Florida Orthopedic Hospital', 'Florida Orthopedic Doctor', 'Florida Orthopedic Surgeon', 'Florida Orthopedic Clinic', 'Florida Orthopedic Hospital', 'Florida Orthopedic Doctor', `${location.name}`, `${location.region} Orthopedics`, `${location.region} Orthopedics Center`, 'Minimally Invasive Surgery', 'Minimally Invasive Spine Surgery', 'Minimally Invasive Spine Surgery Center', 'Minimally Invasive Spine Surgery Hospital', 'Minimally Invasive Spine Surgery Doctor', 'Minimally Invasive Spine Surgery Surgeon', 'Minimally Invasive Spine Surgery Clinic', 'Minimally Invasive Spine Surgery Hospital', 'Minimally Invasive Spine Surgery Doctor'],
  
      openGraph: {
        title: location.name,
        description: location.paragraph.replaceAll('[PARAGRAPH BREAK]', ''),
        type: "article",
        url: `https://mountainspineorthopedics.com/locations/${location.slug}`,
        tags: ['Florida Orthopedic Care', 'Florida Orthopedic Surgeon', 'Florida Orthopedic Clinic', 'Florida Orthopedic Hospital', 'Florida Orthopedic Doctor', 'Florida Orthopedic Surgeon', 'Florida Orthopedic Clinic', 'Florida Orthopedic Hospital', 'Florida Orthopedic Doctor', `${location.name}`, `${location.region} Orthopedics`, `${location.region} Orthopedics Center`, 'Minimally Invasive Surgery', 'Minimally Invasive Spine Surgery', 'Minimally Invasive Spine Surgery Center', 'Minimally Invasive Spine Surgery Hospital', 'Minimally Invasive Spine Surgery Doctor', 'Minimally Invasive Spine Surgery Surgeon', 'Minimally Invasive Spine Surgery Clinic', 'Minimally Invasive Spine Surgery Hospital', 'Minimally Invasive Spine Surgery Doctor'],
      },
      alternates: {
        canonical: `https://mountainspineorthopedics.com/locations/${location.slug}`
      }
    }
}


export default function LocationLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 