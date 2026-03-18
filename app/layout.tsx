// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"
import Script from "next/script"

// ---------------------------------------------------------------------------
// FONTS
// preload: true on both — they're used above-the-fold on every page.
// display: swap — text stays visible while fonts load (good for CLS).
// ---------------------------------------------------------------------------
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  preload: true,
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  preload: true,
})

// ---------------------------------------------------------------------------
// VIEWPORT
// Do NOT set maximumScale — breaks WCAG 1.4.4 (user scalability).
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  themeColor: "#F3EFE5",
  width: "device-width",
  initialScale: 1,
}

// ---------------------------------------------------------------------------
// GLOBAL METADATA
//
// CANONICAL RULE:
//   Do NOT set alternates.canonical here.
//   Setting it on layout makes EVERY page without its own canonical
//   inherit the homepage URL — causing "Duplicate, non-canonical"
//   errors in Google Search Console for all internal pages.
//   Each page/route sets its own canonical via generateMetadata().
//
// KEYWORD STRATEGY:
//   Layout keywords = evergreen brand + registry keywords.
//   Page-specific keywords override/extend these via page metadata.
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL("https://www.upforge.in"),

  title: {
    default: "UpForge — India's Verified Startup Registry & Founder Stories 2026",
    template: "%s | UpForge",
  },

  description:
    "UpForge is India's independent verified startup registry. Discover 5000+ Indian startups, unicorn founders, funding data, sector analysis, and deep-dive founder stories — all free, all verified.",

  keywords: [
    // Brand
    "UpForge",
    "UpForge startup registry",
    "UpForge founder chronicle",
    // Primary registry intent
    "Indian startup registry 2026",
    "Indian startup database 2026",
    "verified Indian startups",
    "startup directory India",
    "Indian startup list",
    // Founder / discovery intent
    "Indian startup founders 2026",
    "Indian unicorn founders",
    "founder stories India",
    "startup success stories India",
    "Indian entrepreneur profiles",
    // Unicorn / funding intent
    "Indian unicorn list 2026",
    "Indian unicorn companies 2026",
    "funded Indian startups",
    "Indian startup funding",
    "startup valuation India",
    // Sector verticals — each generates search traffic
    "Indian AI startups 2026",
    "Indian fintech startups 2026",
    "Indian edtech startups 2026",
    "Indian SaaS startups 2026",
    "Indian deep-tech startups",
    "quick commerce India startups",
    "Indian logistics startups",
    "Indian D2C startups",
    "Indian mobility startups",
    // High-volume company names (associative ranking)
    "Zepto startup",
    "Sarvam AI India",
    "CRED startup India",
    "Zerodha startup",
    "Groww startup",
    "Meesho startup",
    "Nykaa startup",
    "PhysicsWallah startup",
    "OYO startup",
    "Rapido startup",
  ],

  authors: [{ name: "UpForge Editorial", url: "https://www.upforge.in/about" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business & Entrepreneurship",

  // Google Search Console verification token
  verification: {
    google: "g7JT-FIdylY2-2Pq4axQcEP8q_4tuG1fogKPWdWuF1Y",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.upforge.in",
    siteName: "UpForge",
    title: "UpForge — India's Verified Startup Registry & Founder Stories 2026",
    description:
      "5000+ verified Indian startups. Deep-dive founder profiles. Funding data. Sector analysis. The definitive startup intelligence platform for the Indian ecosystem.",
    images: [
      {
        url: "https://www.upforge.in/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "UpForge — India's Verified Startup Registry 2026",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "UpForge — India's Verified Startup Registry & Founder Stories 2026",
    description:
      "5000+ Indian startups. Verified founder profiles. Funding & valuation data. Free. The definitive startup registry for India.",
    images: ["https://www.upforge.in/og/founder-chronicle.png"],
  },

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
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA (JSON-LD) — SITE-WIDE
//
// Scope: Organization + WebSite only.
//   These are singleton nodes that should exist exactly once across the site.
//   Page-specific schema (CollectionPage, ItemList, FAQPage, Article, etc.)
//   lives in each route's page.tsx.
//
// Why @id anchors matter:
//   Other pages reference "@id": "...//#organization" and "...//#website"
//   Google stitches these into a Knowledge Graph node for the site.
//   Without stable @id values, Google treats each reference as a new entity.
// ---------------------------------------------------------------------------
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.upforge.in/#organization",
  name: "UpForge",
  legalName: "UpForge",
  url: "https://www.upforge.in",
  logo: {
    "@type": "ImageObject",
    "@id": "https://www.upforge.in/#logo",
    url: "https://www.upforge.in/logo.png",
    width: 512,
    height: 512,
    caption: "UpForge — India's Startup Registry",
  },
  image: {
    "@type": "ImageObject",
    url: "https://www.upforge.in/og/founder-chronicle.png",
    width: 1200,
    height: 630,
  },
  description:
    "UpForge is India's independent, verified startup registry and founder intelligence platform. We track 5000+ Indian startups across AI, fintech, edtech, quick commerce, logistics, SaaS, and deep tech.",
  foundingDate: "2024",
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  knowsAbout: [
    "Indian Startups",
    "Startup Founders",
    "Venture Capital",
    "Indian Unicorns",
    "Startup Funding",
    "Entrepreneurship in India",
  ],
  sameAs: [
    "https://twitter.com/upforge_in",
    "https://www.linkedin.com/company/upforge",
    // Add Instagram / YouTube when live:
    // "https://www.instagram.com/upforge_in",
    // "https://www.youtube.com/@upforge_in",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "editorial",
    url: "https://www.upforge.in/about",
    availableLanguage: ["English", "Hindi"],
  },
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.upforge.in/#website",
  url: "https://www.upforge.in",
  name: "UpForge",
  description:
    "India's Verified Startup Registry — founder stories, funding data, unicorn profiles, and sector analysis. Free. Independent. 5000+ startups.",
  inLanguage: "en-IN",
  publisher: {
    "@id": "https://www.upforge.in/#organization",
  },
  // Sitelinks SearchBox — Google may show a search box directly in SERP
  // when users search for "UpForge". Target must return relevant results.
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.upforge.in/startup?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en-IN"
      className={`${inter.variable} ${playfair.variable}`}
    >
      <head>
        {/*
          RESOURCE HINTS
          Preconnect to external origins used above the fold.
          This shaves 100–300ms off first-party font and image loads.
        */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* YouTube facade — preconnect only when video thumbnails are above fold */}
        <link rel="preconnect" href="https://i.ytimg.com" />
        {/* Static asset CDN — update with your actual CDN origin if different */}
        {/* <link rel="preconnect" href="https://cdn.upforge.in" /> */}

        {/*
          DNS-PREFETCH fallback for browsers that don't support preconnect.
          Minimal overhead — include all third-party origins.
        */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://static.businessworld.in" />

        {/* Organization JSON-LD — site-wide entity node */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* WebSite JSON-LD — Sitelinks SearchBox eligibility */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        {/*
          GOOGLE ADS TAG (AW-18011511989)
          strategy="afterInteractive" — loads after hydration, does not block paint.

          RECOMMENDATION:
          Move this tag to your conversion confirmation page only (e.g. /submit/success).
          Firing it site-wide skews conversion data and wastes budget.
          If you need GA4 analytics, use a GTM-XXXXXX container instead
          and manage the AW tag inside GTM for cleaner separation.
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18011511989"
          strategy="afterInteractive"
        />
        <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-18282"
  strategy="afterInteractive"
/>
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-3J7Y3695TK"
  strategy="afterInteractive"
/>
<Script id="gtag-init" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-3J7Y3695TK');
  `}
</Script>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
