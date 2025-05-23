import { AllTreatments } from "./treatments";

// Returns a single treatment based on slug
export async function GetTreatmentInfo(slug: string) {
  const treatment = AllTreatments.find((t) => t.slug === slug);
  return treatment || null;
}
