/**
 * Returns condition and treatment data as JSON for the read-only content audit.
 * Used by scripts/audit-content-sections.ts so the audit can run without
 * importing TSX files that contain static image imports (which Node cannot load).
 *
 * Start the dev server (npm run dev) and run: npm run audit:content
 */
import { conditions, conditionContentPlaceholders } from '@/components/data/conditions';
import { AllTreatments, allTreatmentContent } from '@/components/data/treatments';
import { NextResponse } from 'next/server';

export async function GET() {
  const payload = {
    conditions,
    conditionContentPlaceholders,
    AllTreatments,
    allTreatmentContent,
  };
  return NextResponse.json(payload);
}
