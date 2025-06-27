import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Reem_Kufi, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapProvider } from "@/providers/map-provider";
import { GeolocationProvider } from "@/providers/geolocationcontext";
import { GoogleAnalytics } from "@next/third-parties/google";
import { DelayedLocationPopup } from "@/components/delayedlocationpopup";
import Script from "next/script";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#61BCEC",
  colorScheme: "light dark",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
  description:
    "Florida's trusted experts in spine and orthopedic care. Discover minimally invasive procedures, advanced pain management, and top-rated specialists.",
  applicationName: "Mountain Spine & Orthopedics",
  verification: {
    google: "M4a0IB8-LOq1cLFtG4G6hYDMraxN6rNsFqk1614cVhY",
  },
  keywords: [
    "Florida orthopedic specialist",
    "spine surgery Florida",
    "minimally invasive spine care",
    "joint pain doctor Florida",
    "neck and back pain treatment",
    "sports injury doctor Florida",
    "orthopedic clinic Florida",
    "board certified orthopedic surgeons",
    "scoliosis treatment Florida",
    "Mountain Spine and Orthopedics",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: "index, follow",
  },
  openGraph: {
    url: "https://mountainspineorthopedics.com",
    type: "website",
    title: "Mountain Spine & Orthopedics",
    description: "Florida's trusted experts in spine and orthopedic care.",
    images: [
      {
        url: "https://mountainspineortho.b-cdn.net/Screenshot%202025-05-20%20at%2011.40.13%E2%80%AFAM.png",
        width: 1200,
        height: 630,
        alt: "Mountain Spine & Orthopedics Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Spine & Orthopedics",
    description: "Trusted Florida spine & orthopedic specialists.",
    site: "@MountainSpineOrtho", // Replace if you have a Twitter/X handle
    images: [
      "https://mountainspineortho.b-cdn.net/Screenshot%202025-05-20%20at%2011.40.13%E2%80%AFAM.png",
    ],
  },
  alternates: {
    canonical: "https://mountainspineorthopedics.com",
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  metadataBase: new URL("https://mountainspineorthopedics.com"),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Mountain Spine & Orthopedics",
  "url": "https://mountainspineorthopedics.com",
  "logo": "/android-chrome-512x512.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-561-223-9959",
    "contactType": "Customer Service",
    "areaServed": "US",
    "availableLanguage": ["en"],
  },
  // --- Social media links updated here ---
  "sameAs": [
    "https://www.facebook.com/people/Mountain-Spine-Orthopedics/61576930958681/",
    "https://www.instagram.com/mountainspineortho/"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Favicons and icons for SEO and device support */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
        <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXHSYV3NMD"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXHSYV3NMD');
          `}
        </Script>
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T57SB8NQ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ReemKufi.variable} ${inter.variable} antialiased overscroll-none `}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T57SB8NQ"
            height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe>
        </noscript>
        <MapProvider>
          <GeolocationProvider>
            <NavBar />
            {children}
            <Footer />
            <DelayedLocationPopup delayInSeconds={8} />
          </GeolocationProvider>
        </MapProvider>
      </body>
    </html>
  );
}