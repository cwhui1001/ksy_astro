import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingBtn from "@/components/WhatsAppFloatingBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Astro Packages | Authorised Astro Channel & Astro One Reseller",
  description: "Official Astro authorised reseller providing the latest Astro TV packages, channels, and Astro One plans. Register online for seamless entertainment.",
  icons: {
    icon: [
      { url: "/images/astro-malaysia-holdings-berhad--600.png" },
      { url: "/images/astro-malaysia-holdings-berhad--600.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/images/astro-malaysia-holdings-berhad--600.png",
    shortcut: "/images/astro-malaysia-holdings-berhad--600.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-primary selection:text-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppFloatingBtn />
      </body>
    </html>
  );
}
