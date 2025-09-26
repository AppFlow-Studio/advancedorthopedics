import type { Metadata } from "next";
import { buildCanonical, safeTitle, safeDescription } from "@/lib/seo";

export const metadata: Metadata = {
  title: safeTitle(undefined, "Book an Appointment | Mountain Spine & Orthopedics"),
  description: safeDescription(undefined, "Schedule your orthopedic consultation with Mountain Spine & Orthopedics. Book online or call us for same-day appointments across Florida."),
  alternates: {
    canonical: buildCanonical("/find-care/book-an-appointment"),
  },
  openGraph: {
    title: safeTitle(undefined, "Book an Appointment | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Schedule your orthopedic consultation with Mountain Spine & Orthopedics. Book online or call us for same-day appointments across Florida."),
    url: buildCanonical("/find-care/book-an-appointment"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: safeTitle(undefined, "Book an Appointment | Mountain Spine & Orthopedics"),
    description: safeDescription(undefined, "Schedule your orthopedic consultation with Mountain Spine & Orthopedics. Book online or call us for same-day appointments across Florida."),
  },
};

export default function BookAppointmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">Book an Appointment</h1>
      <h2 className="sr-only">Schedule Your Consultation</h2>
      {children}
    </>
  );
}
