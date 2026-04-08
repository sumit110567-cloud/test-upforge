// app/layout.tsx — GLOBAL AUTHORITY SEO v5
// Production-level global SEO, OpenGraph, Schema.org, hreflang
// Editorial magazine global trust signals

import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Chatbot } from "@/components/chatbot";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a0a0a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://upforge.org"),
  title: {
    default: "UpForge — The World's Startup Registry of Record",
    template: "%s | UpForge — Global Startup Registry",
  },
  description:
    "UpForge is the world's first independent global startup registry. 5,000+ startups verified across 50+ countries, each assigned a permanent UFRN™ identifier. Cited by Harvard, IIM, and Stanford researchers. Free forever.",
  keywords: [
    "global startup registry",
    "verified startup database",
    "UFRN startup number",
    "startup registry 2026",
    "indian unicorns list",
    "startup verification",
    "UpForge registry",
    "startup credibility",
    "global startup database",
    "startup identity verification",
    "upforge.org",
    "upforge.in",
  ].join(", "),
  authors: [{ name: "UpForge Editorial Team", url: "https://upforge.org/about" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business & Finance",
  classification: "Startup Registry",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://upforge.org",
    languages: {
      "en-US": "https://upforge.org",
      "en-IN": "https://upforge.in",
      "en-GB": "https://upforge.org",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["en_IN", "en_GB"],
    url: "https://upforge.org",
    siteName: "UpForge — Global Startup Registry",
    title: "UpForge — The World's Startup Registry of Record",
    description:
      "5,000+ startups verified across 50+ countries. Every startup assigned a permanent UFRN™. The editorial standard for global startup credibility.",
    images: [
      {
        url: "https://upforge.org/og-default.png",
        width: 1200,
        height: 630,
        alt: "UpForge — Global Startup Registry of Record",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "UpForge — The World's Startup Registry of Record",
    description:
      "5,000+ startups verified globally. UFRN™ — the global standard for startup identity. Free forever.",
    images: ["https://upforge.org/og-default.png"],
  },
  verification: {
    google: "your-google-site-verification-token",
    // yandex: "your-yandex-token",
    // bing: "your-bing-token",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#8b1a1a" }],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#1a0a0a",
    "application-name": "UpForge",
  },
};

// Global structured data
const GLOBAL_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://upforge.org/#organization",
      name: "UpForge",
      url: "https://upforge.org",
      logo: {
        "@type": "ImageObject",
        url: "https://upforge.org/logo.jpg",
        width: 512,
        height: 512,
      },
      description: "The world's first independent global startup registry.",
      sameAs: [
        "https://www.linkedin.com/company/upforge-india",
        "https://twitter.com/upforge_in",
        "https://www.youtube.com/@upforge-ind",
        "https://upforge.in",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "customer support",
        url: "https://upforge.org/contact",
        availableLanguage: ["English", "Hindi"],
      },
      foundingDate: "2024",
      knowsAbout: ["Startups", "Venture Capital", "Entrepreneurship", "Startup Registry", "UFRN"],
    },
    {
      "@type": "WebSite",
      "@id": "https://upforge.org/#website",
      url: "https://upforge.org",
      name: "UpForge — Global Startup Registry",
      description: "The world's first independent global startup registry of record.",
      publisher: { "@id": "https://upforge.org/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://upforge.org/search?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://upforge.org/#webpage",
      url: "https://upforge.org",
      name: "UpForge — The World's Startup Registry of Record",
      isPartOf: { "@id": "https://upforge.org/#website" },
      about: { "@id": "https://upforge.org/#organization" },
      description: "5,000+ startups verified globally with UFRN™ identifiers.",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(GLOBAL_SCHEMA) }}
        />
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Hreflang */}
        <link rel="alternate" hrefLang="en" href="https://upforge.org" />
        <link rel="alternate" hrefLang="en-IN" href="https://upforge.in" />
        <link rel="alternate" hrefLang="x-default" href="https://upforge.org" />
      </head>
      <body style={{ margin: 0, padding: 0, background: "#faf7f2" }}>
        <Navbar />
        <main id="main-content" role="main" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
