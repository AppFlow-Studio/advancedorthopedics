// This is a unified route that handles both body parts and conditions
// Next.js requires the same parameter name for dynamic routes at the same level
import { notFound } from 'next/navigation';
import { BODY_PARTS } from '@/components/data/bodyParts';
import { conditions, conditionContentPlaceholders } from '@/components/data/conditions';

export const dynamicParams = false;

export async function generateStaticParams() {
  const bodyPartSlugs = BODY_PARTS.map(bp => ({ slug: bp.slug }));
  const conditionSlugs = [
    ...conditionContentPlaceholders.map(c => ({ slug: c.slug })),
    ...conditions.map(c => ({ slug: c.slug }))
  ];
  return [...bodyPartSlugs, ...conditionSlugs];
}

export default async function UnifiedConditionsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  // Check if it's a body part first (more specific, fewer items)
  const bodyPart = BODY_PARTS.find(bp => bp.slug === slug);
  if (bodyPart) {
    // Import and render body part page from local component
    const BodyPartPage = (await import('./BodyPartPage')).default;
    return <BodyPartPage bodyPartSlug={slug} />;
  }
  
  // Check if it's a condition
  const conditionContent = conditionContentPlaceholders.find(c => c.slug === slug);
  const condition = conditionContent ? null : conditions.find(c => c.slug === slug);
  
  if (conditionContent || condition) {
    // Import and render condition details page from local component
    const ConditionPage = (await import('./ConditionPage')).default;
    return <ConditionPage conditionSlug={slug} />;
  }
  
  // Not found
  notFound();
}
