import Image from 'next/image';
import Link from 'next/link';
import { getReviewLocations } from '@/lib/reviewLinks';
import { ReviewDropdownButton } from '@/components/ReviewDropdownButton';

export type GoogleStyleReview = {
  quote: string;
  name: string;
  location: string;
  detail: string;
  /** Shown next to stars, Google-style */
  date: string;
  /** Optional link for location-specific "Write a review" on the card */
  writeReviewHref?: string;
};

function StarRow({ size = 16 }: { size?: number }) {
  return (
    <div className="flex gap-0.5 shrink-0" aria-hidden="true">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg
          key={s}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#FABB05"
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      ))}
    </div>
  );
}

function avatarFromName(name: string): { initial: string; hue: string } {
  const initial = name.trim().charAt(0).toUpperCase() || '?';
  const hues = ['#5F6368', '#9333EA', '#C2410C', '#0D9488', '#1D4ED8', '#B45309'];
  let hash = 0;
  for (let i = 0; i < name.length; i++) hash = name.charCodeAt(i) + ((hash << 5) - hash);
  const hue = hues[Math.abs(hash) % hues.length];
  return { initial, hue };
}

type Props = {
  testimonials: GoogleStyleReview[];
  /** Primary "Write a review" target — kept for backwards compat, used as fallback on cards */
  writeReviewHref: string;
  /** Optional aggregate count label, e.g. "500+ reviews" */
  aggregateReviewLabel?: string;
};

export function GoogleStylePatientReviews({
  testimonials,
  writeReviewHref,
  aggregateReviewLabel = 'Patient feedback',
}: Props) {
  const reviewLocations = getReviewLocations();

  return (
    <section
      className="w-full bg-[#F8F9FA] border-y border-[#E8EAED] py-10 px-6 xl:px-[80px]"
      aria-labelledby="google-style-reviews-heading"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-8">
          <h2
            id="google-style-reviews-heading"
            style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 500 }}
            className="text-[#202124] text-2xl md:text-3xl"
          >
            Patient Reviews
          </h2>
          <p
            style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
            className="text-[#5F6368] text-sm mt-2"
          >
            Reviews from patients across our locations
          </p>
        </div>

        {/* Summary bar — Google Reviews–style */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-6 border-b border-[#E8EAED]">
          <div className="flex flex-wrap items-end gap-3 md:gap-5">
            <div className="flex flex-col gap-0.5">
              <span
                style={{ fontFamily: 'var(--font-inter)' }}
                className="text-[#202124] text-sm font-medium"
              >
                Rating
              </span>
              <div className="flex items-baseline gap-2 flex-wrap">
                <span
                  style={{ fontFamily: 'var(--font-public-sans)' }}
                  className="text-[#202124] text-4xl md:text-5xl font-normal leading-none"
                >
                  5.0
                </span>
                <div className="flex items-center gap-2 pb-0.5">
                  <StarRow size={22} />
                  <span
                    style={{ fontFamily: 'var(--font-inter)' }}
                    className="text-[#5F6368] text-sm"
                  >
                    {aggregateReviewLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Location-selector dropdown — client component */}
          <ReviewDropdownButton locations={reviewLocations} />
        </div>

        {/*
          Carousel: horizontal scroll-snap on mobile, equal-width flex row on md+.
          Content is always in the DOM (SSR'd) — no JS needed for the scroll itself.
          Cards are sized so exactly one fits on mobile, ~2 on sm, and 3 fill md+.
        */}
        <div
          className="flex gap-4 md:gap-5 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none pb-3 md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden scroll-smooth"
          role="list"
        >
          {testimonials.map((t) => {
            const { initial, hue } = avatarFromName(t.name);
            const cardReviewLink = t.writeReviewHref ?? writeReviewHref;
            return (
              <article
                key={`${t.name}-${t.date}`}
                role="listitem"
                className="snap-start flex-shrink-0 w-[calc(100vw-4rem)] sm:w-[min(380px,72vw)] md:flex-1 md:w-auto bg-white rounded-2xl p-5 shadow-[0_1px_2px_rgba(60,64,67,0.15),0_1px_3px_1px_rgba(60,64,67,0.1)] border border-[#E8EAED] flex flex-col min-h-[200px]"
              >
                <div className="flex gap-3 mb-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium shrink-0"
                    style={{ backgroundColor: hue }}
                    aria-hidden="true"
                  >
                    {initial}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p
                      style={{ fontFamily: 'var(--font-public-sans)', fontWeight: 600 }}
                      className="text-[#202124] text-sm truncate"
                    >
                      {t.name}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                      <StarRow size={14} />
                      <span
                        style={{ fontFamily: 'var(--font-inter)' }}
                        className="text-[#5F6368] text-xs"
                      >
                        {t.date}
                      </span>
                    </div>
                  </div>
                </div>

                <p
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                  className="text-[#3C4043] text-sm leading-relaxed flex-1"
                >
                  {t.quote}
                </p>

                <p
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                  className="text-[#1A73E8] text-xs mt-3"
                >
                  {t.detail}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-inter)', fontWeight: 400 }}
                  className="text-[#5F6368] text-xs mt-0.5"
                >
                  {t.location}
                </p>

                <div className="mt-4 pt-3 border-t border-[#F1F3F4] flex items-center gap-2">
                  <Image
                    src="/images/google-g-mark.png"
                    alt=""
                    width={22}
                    height={22}
                    className="shrink-0"
                  />
                  <div className="text-xs leading-tight">
                    <span
                      style={{ fontFamily: 'var(--font-inter)' }}
                      className="text-[#5F6368] block"
                    >
                      Posted on
                    </span>
                    <Link
                      href={cardReviewLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: 'var(--font-inter)', fontWeight: 500 }}
                      className="text-[#1A73E8] hover:underline"
                    >
                      Google
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
