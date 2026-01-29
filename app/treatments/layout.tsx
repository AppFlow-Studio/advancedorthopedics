import type { Metadata } from 'next'
import { buildCanonical, srOnly } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { TreatmentsItemListSchema } from '@/components/TreatmentsItemListSchema';

export default function TreatmentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <TreatmentsItemListSchema />
      {children}
    </div>
  );
}
