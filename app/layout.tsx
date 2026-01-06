import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import * as siteData from "../lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteData.siteUrl),
  title: {
    default: "Développeur freelance Paris | Next.js & SEO technique",
    template: "%s | Développeur freelance Paris",
  },
  description:
    "Développeur freelance à Paris spécialisé Next.js, SEO technique et Core Web Vitals pour des sites rapides, indexables et rentables.",
  applicationName: "Développeur freelance Paris",
  alternates: {
    canonical: siteData.siteUrl,
  },
  openGraph: {
    url: siteData.siteUrl,
    siteName: siteData.business.name,
    type: "website",
    title: "Développeur freelance Paris | Next.js & SEO technique",
    description:
      "Sites Next.js ultra-rapides, optimisés Core Web Vitals et SEO local pour Paris et Île-de-France.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Développeur freelance à Paris - vitrine Next.js",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    title: "Développeur freelance Paris | Next.js & SEO technique",
    description:
      "Expert Next.js et SEO technique basé à Paris : performance, indexation et conversions.",
    images: [
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-XXXXX";

  return (
    <html lang="fr">
      <Script
        id="gtag-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
