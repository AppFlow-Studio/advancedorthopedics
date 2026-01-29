import { Metadata, ResolvingMetadata } from 'next';
import { injuries } from '@/components/data/injuries';
import { buildCanonical } from '@/lib/seo';

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  const injury = injuries.find(i => i.slug === slug);
  
  if (!injury) {
    return {
      title: 'Injury Information | Mountain Spine & Orthopedics',
      description: 'Learn about injury evaluation and treatment options at Mountain Spine & Orthopedics.',
    };
  }
  
  const canonicalUrl = buildCanonical(`/injuries/${slug}`);
  
  return {
    title: injury.metaTitle || `${injury.title} | Mountain Spine & Orthopedics`,
    description: injury.metaDesc || injury.body,
    keywords: injury.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: injury.metaTitle || `${injury.title} | Mountain Spine & Orthopedics`,
      description: injury.metaDesc || injury.body,
      url: canonicalUrl,
      siteName: 'Mountain Spine & Orthopedics',
      type: 'article',
      images: injury.card_img ? [
        {
          url: typeof injury.card_img === 'string' ? injury.card_img : injury.card_img.src,
          width: 1200,
          height: 630,
          alt: injury.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: injury.metaTitle || `${injury.title} | Mountain Spine & Orthopedics`,
      description: injury.metaDesc || injury.body,
      images: injury.card_img ? [
        typeof injury.card_img === 'string' ? injury.card_img : injury.card_img.src
      ] : [],
    },
  };
}

export default function InjuryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
