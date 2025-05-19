import type { Metadata , Viewport} from "next";
import { Geist, Geist_Mono, Reem_Kufi, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapProvider } from "@/providers/map-provider";
import { GeolocationProvider } from "@/providers/geolocationcontext";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import Head from "next/head";
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff"
};
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const ReemKufi = Reem_Kufi({
  variable: "--font-reem-kufi",
  weight: ["500"],
  subsets: ["latin"],
});
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mountain Spine And Orthopedics",
  description: "Mountain Spine and Orthopedics - Florida's premier destination for minimally invasive spine and orthopedic procedures. Our expert doctors provide world-class care using advanced techniques for optimal patient outcomes.",
  verification: {
    google: "M4a0IB8-LOq1cLFtG4G6hYDMraxN6rNsFqk1614cVhY"
  },
  keywords: [
    "spine",
    "flordia spine surgeon",
    "flordia spine care",
    "flordia spine treatment",
    "flordia spine pain",
    "flordia spine injury",
    "flordia spine condition",
    "flordia spine surgery",
    "orthopedics",
    "spine care",
    "spine surgery",
    "spine treatment",
    "spine pain",
    "spine injury",
    "spine condition",
    "spine treatment",
    "spine pain",
    "spine injury",
  ],
  openGraph: {
    url: "https://mountainspineorthopedics.com",
    type: "website",
    title: "Mountain Spine & Orthopedics",
    locale: "en_US",
    description:
      "Mountain Spine & Orthopedics - Your trusted partner in spine care.",
    images: [
      {
        url: "https://mountainspineorthopedics.com/images/home/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Mountain Spine & Orthopedics"
      }
    ]
  },
  alternates: {
    canonical: "https://mountainspineorthopedics.com"
  },
  icons: {
    icon: '/newlogo4.png',
    apple: '/newlogo4.png',

  },
  metadataBase: new URL("https://mountainspineorthopedics.com"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Mountain Spine & Orthopedics",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GOOGLE_TAG!} />
        
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${ReemKufi.variable} ${inter.variable} antialiased overscroll-none `}
        >
          <MapProvider>
            <GeolocationProvider>
              <NavBar />
              {children}
              <Footer />
            </GeolocationProvider>
          </MapProvider>
          {/* <GoogleAnalytics gaId="G-VND71HX8WE" /> */}
        </body>
    </html>
  );
}
