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
import TanstackProvider from "@/providers/tanstack";
import OrphanLinksFooter from "@/components/OrphanLinksFooter";
import StaticNav from "@/components/StaticNav.server";

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
  metadataBase: new URL('https://mountainspineorthopedics.com'),
  title: "Mountain Spine & Orthopedics",
  description: "Florida's trusted experts in spine and joint care. Book today.",
  openGraph: {
    title: "Mountain Spine & Orthopedics",
    description: "Florida's trusted experts in spine and joint care. Book today.",
    url: "https://mountainspineorthopedics.com",
    siteName: "Mountain Spine & Orthopedics",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://mountainspineorthopedics.com/newlogo4.png", // using actual logo in public folder
        width: 1200,
        height: 630,
        alt: "Mountain Spine & Orthopedics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mountain Spine & Orthopedics",
    description: "Florida's trusted experts in spine and joint care. Book today.",
    images: ["https://mountainspineorthopedics.com/newlogo4.png"], // same image as above
  },
  alternates: {
    canonical: 'https://mountainspineorthopedics.com/',
  },
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
        <NavBar />
        {/* Hidden crawler nav */}
        <StaticNav />
        <MapProvider>
          <GeolocationProvider>
            <TanstackProvider>
              {children}
            </TanstackProvider>
            <Footer />
            <DelayedLocationPopup delayInSeconds={8} />
          </GeolocationProvider>
        </MapProvider>
        {/* SEO crawlable links for orphan pages */}
        <OrphanLinksFooter />
      </body>
    </html>
  );
}


// Base Colors
// Main: #0094E0
// Secondary: #FFFF
// Third: #022968