import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";
import { getOgImageForPath } from "@/lib/og";
import { STATE_METADATA, VALID_STATE_SLUGS } from "@/lib/locationRedirects";
import { clinics } from "@/components/data/clinics";

type Props = {
  children: React.ReactNode;
  params: Promise<{ state: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;

  if (!VALID_STATE_SLUGS.includes(state as (typeof VALID_STATE_SLUGS)[number])) {
    return {};
  }

  const stateInfo = STATE_METADATA[state];
  const stateClinics = clinics.filter((c) => c.stateSlug === state);
  const topCities = stateClinics
    .slice(0, 5)
    .map((c) => c.region.split(",")[0].trim())
    .join(", ");

  const title = safeTitle(
    undefined,
    `Orthopedic Surgeons in ${stateInfo?.name || state} | Same-Day Appointments | Mountain Spine & Orthopedics`
  );
  const description = safeDescription(
    undefined,
    `Board-certified spine and orthopedic surgeons in ${stateInfo?.name || state}. Locations in ${topCities}. Same-day and next-day appointments. Call today.`
  );
  const canonicalPath = `/locations/${state}`;

  return {
    title,
    description,
    alternates: {
      canonical: buildCanonical(canonicalPath),
    },
    openGraph: {
      title,
      description,
      url: buildCanonical(canonicalPath),
      type: "website",
      images: [
        {
          url: getOgImageForPath(canonicalPath),
          width: 1200,
          height: 630,
          alt: `Mountain Spine & Orthopedics - Orthopedic care in ${stateInfo?.name || state}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getOgImageForPath(canonicalPath)],
    },
  };
}

export default function StateLayout({ children, params }: Props) {
  return <>{children}</>;
}
