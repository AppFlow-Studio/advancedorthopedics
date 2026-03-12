import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Review Links — Internal Staff Tool | Mountain Spine & Orthopedics",
  robots: {
    index: false,
    follow: false,
  },
};

export default function InternalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
