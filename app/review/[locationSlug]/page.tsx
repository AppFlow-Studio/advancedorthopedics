import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { clinics } from "@/components/data/clinics";
import { getReviewLink } from "@/lib/reviewLinks";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ReviewPageProps {
  params: Promise<{ locationSlug: string }>;
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { locationSlug } = await params;
  const clinic = clinics.find((c) => c.locationSlug === locationSlug);

  if (!clinic) {
    notFound();
  }

  const reviewLink = getReviewLink(locationSlug);

  const filledStars = Math.round(clinic.rating);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-50 flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-lg">
        <Card className="shadow-lg border-0">
          <CardContent className="p-8 space-y-6">
            {/* Logo */}
            <div className="flex justify-center">
              <Image
                src="/newlogo4.png"
                alt="Mountain Spine & Orthopedics"
                width={180}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>

            {/* Star rating */}
            <div className="flex flex-col items-center gap-1">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill={i < filledStars ? "#0A50EC" : "none"}
                    stroke="#0A50EC"
                    strokeWidth="1.5"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Rated {clinic.rating}★ by our patients
              </p>
            </div>

            {/* Heading */}
            <div className="text-center space-y-1">
              <h1
                className="text-2xl font-bold text-[#252932]"
                style={{ fontFamily: "var(--font-public-sans)" }}
              >
                Thank you for choosing Mountain Spine & Orthopedics
              </h1>
              <p className="text-gray-500 text-sm">{clinic.region}</p>
            </div>

            {/* Body copy */}
            <p className="text-gray-700 text-center leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
              Your experience matters — to us and to patients just like you who are looking for
              trusted spine and orthopedic care. If you'd like to share your experience, it only
              takes a minute.
            </p>

            {/* Soft review nudge */}
            <p className="text-sm text-gray-400 italic text-center leading-relaxed">
              Feel free to mention your doctor, the condition you came in for, and how your
              treatment went — it helps other patients in similar situations find the right care.
            </p>

            {/* CTA or fallback */}
            {reviewLink ? (
              <Button
                asChild
                className="w-full bg-[#0A50EC] hover:bg-[#252932] text-white"
              >
                <a href={reviewLink} target="_blank" rel="noopener noreferrer">
                  Share Your Experience on Google
                </a>
              </Button>
            ) : (
              <p className="text-center text-sm text-gray-400">
                Google Reviews for this location coming soon.
              </p>
            )}

            {/* Footer link */}
            <div className="text-center">
              <Link href="/" className="text-sm text-gray-400 hover:text-[#0A50EC] transition-colors">
                ← Return to Homepage
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
