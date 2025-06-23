import { conditions } from '@/components/data/conditions'
import { Doctors } from '@/components/data/doctors'
import { PainAreaTreatments } from '@/components/data/painareatreatments'
import { notFound } from 'next/navigation'
import { PainAreaClient } from './PainAreaClient'

// This function shuffles an array and is used to display random doctors.
// It's defined here because it's only used for this server component.
function shuffleArray(array: any[]) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default async function PainArea({ params }: { params: { PainArea: string } }) {
  // If params ever becomes a Promise, this will future-proof it:
  const resolvedParams = await params;
  const conditionSlug = resolvedParams.PainArea;
  let condition_details;

  if (conditionSlug === 'backpaintreatmentoptions') {
    condition_details = (await import('@/components/data/painareatreatments')).PainAreaTreatments.find(
      (x) => x.slug === conditionSlug
    );
  } else {
    condition_details = (await import('@/components/data/conditions')).conditions.find(
      (x) => x.slug === conditionSlug
    );
  }

  if (!condition_details) {
    // If the condition is not found, render the 404 page.
    return notFound();
  }

  // Select two random doctors to display on the page.
  const randomDoctors = shuffleArray(Doctors).slice(0, 2);

  // Render the client component with the fetched data.
  // This server component does not render any JSX itself.
  return <PainAreaClient condition_details={condition_details} randomDoctors={randomDoctors} />;
}
