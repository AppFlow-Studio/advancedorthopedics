import type { Metadata } from "next";
import { Geist, Geist_Mono, Reem_Kufi, Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { MapProvider } from "@/providers/map-provider";
import { GeolocationProvider } from "@/providers/geolocationcontext";

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
  icons: {
    icon: '/newlogo4.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${ReemKufi.variable} ${inter.variable} antialiased overscroll-none`}
        >
          <MapProvider>
            <GeolocationProvider>
              <NavBar />
              {children}
              <Footer />
            </GeolocationProvider>
          </MapProvider>
        </body>
    </html>
  );
}
