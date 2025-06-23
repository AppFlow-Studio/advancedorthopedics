import { conditions } from '@/components/data/conditions'
import { Doctors } from '@/components/data/doctors'
import { PainAreaTreatments } from '@/components/data/painareatreatments'
import { notFound } from 'next/navigation'
import { FootPainAreaClient } from './FootPainAreaClient'

function shuffleArray(array: any[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default async function FootPainArea({ params }: { params: { FootSlug: string } }) {
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.FootSlug;
  let condition_details;

  if (conditionSlug === 'footpaintreatmentoptions') {
    condition_details = (await import('@/components/data/painareatreatments')).PainAreaTreatments.find(
      (x) => x.slug === conditionSlug
    );
  } else {
    condition_details = (await import('@/components/data/conditions')).conditions.find(
      (x) => x.slug === conditionSlug
    );
  }

  if (!condition_details) {
    return notFound();
  }

  const randomDoctors = shuffleArray(Doctors).slice(0, 2);

  return <FootPainAreaClient condition_details={condition_details} randomDoctors={randomDoctors} />;
}
