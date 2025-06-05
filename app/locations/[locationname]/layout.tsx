import { ResolvingMetadata } from "next";
import { clinics } from "@/components/data/clinics";

export async function generateMetadata({ params }: { params: { locationname: string } }, parent: ResolvingMetadata) {
    const location = clinics.filter(x => x.slug === params.locationname)[0]
    return {
      title: location.name,
      description: location.paragraph.replaceAll('[PARAGRAPH BREAK]', ''),
      openGraph: {
        title: location.name,
        description: location.paragraph.replaceAll('[PARAGRAPH BREAK]', ''),
        type: "article",
        url: `https://mountainspineorthopedics.com/locations/${location.slug}`,
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