import type { Metadata, ResolvingMetadata } from "next";
import { conditions } from "@/components/data/conditions";

function capitalizeWords(str: string): string {
  return str.replace(/\b\w/g, l => l.toUpperCase());
}

export async function generateMetadata({ params }: { params: { FootSlug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const painArea = conditions.find(x => x.slug === params.FootSlug);

    if (!painArea) {
        const readableSlug = params.FootSlug.replace(/-/g, " ");
        return {
            title: `${capitalizeWords(readableSlug)} | Mountain Spine & Orthopedics`,
            description: "Learn about orthopedic care and treatments with our specialists in Florida."
        };
    }

    const painAreaUrl = `https://mountainspineorthopedics.com/area-of-pain/foot-pain/${painArea.slug}`;

    return {
        metadataBase: new URL('https://mountainspineorthopedics.com'),
        title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
        description: painArea.metaDesc || painArea.body,
        keywords: painArea.keywords || [painArea.title, "foot pain", "orthopedic treatment"],
        
        openGraph: {
            title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
            description: painArea.metaDesc || painArea.body,
            type: "article",
            url: painAreaUrl,
            images: [
                {
                    url: typeof painArea.card_img === "string" ? painArea.card_img : painArea.card_img?.src || "https://mountainspineorthopedics.com/default-image.png",
                    width: 1200,
                    height: 630,
                    alt: painArea.title,
                },
            ],
        },

        twitter: {
            card: "summary_large_image",
            title: painArea.metaTitle || `${painArea.title} | Mountain Spine & Orthopedics`,
            description: painArea.metaDesc || painArea.body,
            images: [typeof painArea.card_img === "string" ? painArea.card_img : painArea.card_img?.src || "https://mountainspineorthopedics.com/default-image.png"],
        },

        alternates: {
            canonical: painAreaUrl,
        },
    };
}

export default function FootPainAreaLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children;
} 