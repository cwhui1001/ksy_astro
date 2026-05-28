import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloatingBtn from "@/components/WhatsAppFloatingBtn";
import PromotionModal from "@/components/PromotionModal";

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
        <PromotionModal />
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-18063176278"
          strategy="afterInteractive"
        />
        <Script id="google-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18063176278');

            // Global click listener to track conversion on all buttons and anchor tags that act as buttons
            document.addEventListener('click', function(e) {
              var target = e.target;
              while (target && target.tagName !== 'BUTTON' && target.tagName !== 'A' && target !== document.body) {
                target = target.parentElement;
              }
              
              if (target && target !== document.body) {
                // Trigger conversion for EVERY <button> or specific action-oriented <a> tags
                var isButton = target.tagName === 'BUTTON';
                var isActionLink = target.tagName === 'A';

                if (isButton || isActionLink) {
                  console.log('Conversion triggered for:', target.innerText.trim() || 'Button');
                  window.gtag('event', 'conversion', {
                    'send_to': 'AW-18063176278/PHXTCMrk9LEcENbkmKVD',
                    'value': 1.0,
                    'currency': 'MYR',
                    'transaction_id': ''
                  });
                }
              }
            }, true);
          `}
        </Script>
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
