// app/layout.tsx
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://upforge.in"),

  // ── Title ─────────────────────────────────────────────────────────────────
  title: {
    default: "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge",
    template: "%s | UpForge",
  },

  // ── Description ───────────────────────────────────────────────────────────
  description:
    "10 verified stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda. Independent startup registry. March 2026.",

  // ── Keywords ──────────────────────────────────────────────────────────────
  keywords: [
    "Indian startup founder stories 2026",
    "startup founders India",
    "Indian entrepreneur success story",
    "Aadit Palicha Zepto founder",
    "Alakh Pandey PhysicsWallah founder",
    "Deepinder Goyal Zomato founder",
    "Nithin Kamath Zerodha founder",
    "Falguni Nayar Nykaa founder",
    "Ritesh Agarwal OYO founder",
    "Bhavish Aggarwal Ola founder",
    "Kunal Shah CRED founder",
    "Vijay Shekhar Sharma Paytm founder",
    "Indian startup database",
    "startup registry India",
    "verified Indian startups",
    "Indian unicorns 2026",
    "startup funding India",
    "list your startup India",
    "startup ecosystem India",
    "Indian founders",
    "VC deals India",
    "young startup founders India",
    "bootstrapped unicorn India",
    "first generation entrepreneurs India",
    "best Indian startups 2026",
    "Indian fintech founders",
    "edtech founders India",
    "quick commerce India startup",
    "UpForge founder chronicle",
  ].join(", "),

  // ── Authors ───────────────────────────────────────────────────────────────
  authors: [{ name: "UpForge Editorial", url: "https://upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business",

  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://upforge.in",
    languages: { "en-IN": "https://upforge.in" },
  },

  // ── Favicon & Icons ───────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1C1C1C" },
    ],
  },
  manifest: "/site.webmanifest",

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://upforge.in",
    siteName: "UpForge",
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge",
    description:
      "10 verified stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa and more. Free startup registry. March 2026.",
    images: [
      {
        url: "/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "The Founder Chronicle — India's Greatest Startup Founders 2026 | UpForge",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "The Founder Chronicle — India's Top Startup Founders 2026 | UpForge",
    description:
      "10 verified founder stories — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda. Independent startup registry.",
    images: ["/og/founder-chronicle.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
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

  // ── MS Tile / Theme ───────────────────────────────────────────────────────
  other: {
    "msapplication-TileColor": "#1C1C1C",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#F3EFE5",
  },
}

// ── JSON-LD Structured Data ───────────────────────────────────────────────────
// Server-side injection — best for SEO (no client JS needed)
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    // Website entity
    {
      "@type": "WebSite",
      "@id": "https://upforge.in/#website",
      "url": "https://upforge.in",
      "name": "UpForge",
      "description":
        "India's independent startup registry — verified founder profiles, startup data and editorial chronicles.",
      "publisher": { "@id": "https://upforge.in/#organization" },
      "inLanguage": "en-IN",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://upforge.in/startup?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    // Organization entity
    {
      "@type": "Organization",
      "@id": "https://upforge.in/#organization",
      "name": "UpForge",
      "url": "https://upforge.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://upforge.in/logo.png",
        "width": 200,
        "height": 60,
      },
      "sameAs": [
        "https://twitter.com/upforge_in",
      ],
    },
    // Homepage WebPage entity
    {
      "@type": "WebPage",
      "@id": "https://upforge.in/#webpage",
      "url": "https://upforge.in",
      "name": "The Founder Chronicle — India's Greatest Startup Builders 2026",
      "isPartOf": { "@id": "https://upforge.in/#website" },
      "about": { "@id": "https://upforge.in/#article" },
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-08T00:00:00+05:30",
      "description":
        "10 verified stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda.",
      "inLanguage": "en-IN",
      "breadcrumb": { "@id": "https://upforge.in/#breadcrumb" },
    },
    // Article entity
    {
      "@type": "Article",
      "@id": "https://upforge.in/#article",
      "headline": "The Founder Chronicle — India's Greatest Startup Builders 2026",
      "description":
        "10 real stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda. Verified by UpForge. March 2026.",
      "url": "https://upforge.in",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-08T00:00:00+05:30",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://upforge.in/#website" },
      "publisher": { "@id": "https://upforge.in/#organization" },
      "author": { "@id": "https://upforge.in/#organization" },
      "image": {
        "@type": "ImageObject",
        "url": "https://upforge.in/og/founder-chronicle.png",
        "width": 1200,
        "height": 630,
      },
      "about": [
        { "@type": "Person", "name": "Aadit Palicha", "jobTitle": "Co-Founder & CEO, Zepto", "worksFor": { "@type": "Organization", "name": "Zepto" } },
        { "@type": "Person", "name": "Kaivalya Vohra", "jobTitle": "Co-Founder & CTO, Zepto", "worksFor": { "@type": "Organization", "name": "Zepto" } },
        { "@type": "Person", "name": "Alakh Pandey", "jobTitle": "Founder & CEO, PhysicsWallah", "worksFor": { "@type": "Organization", "name": "PhysicsWallah" } },
        { "@type": "Person", "name": "Deepinder Goyal", "jobTitle": "Founder & CEO, Zomato", "worksFor": { "@type": "Organization", "name": "Zomato" } },
        { "@type": "Person", "name": "Nithin Kamath", "jobTitle": "Founder & CEO, Zerodha", "worksFor": { "@type": "Organization", "name": "Zerodha" } },
        { "@type": "Person", "name": "Falguni Nayar", "jobTitle": "Founder & CEO, Nykaa", "worksFor": { "@type": "Organization", "name": "Nykaa" } },
        { "@type": "Person", "name": "Ritesh Agarwal", "jobTitle": "Founder & CEO, OYO", "worksFor": { "@type": "Organization", "name": "OYO" } },
        { "@type": "Person", "name": "Bhavish Aggarwal", "jobTitle": "Co-Founder & CEO, Ola", "worksFor": { "@type": "Organization", "name": "Ola" } },
        { "@type": "Person", "name": "Lucky Tiwari", "jobTitle": "Founder, InternAdda", "worksFor": { "@type": "Organization", "name": "InternAdda" } },
        { "@type": "Person", "name": "Kunal Shah", "jobTitle": "Founder & CEO, CRED", "worksFor": { "@type": "Organization", "name": "CRED" } },
        { "@type": "Person", "name": "Vijay Shekhar Sharma", "jobTitle": "Founder & CEO, Paytm", "worksFor": { "@type": "Organization", "name": "Paytm" } },
      ],
    },
    // Breadcrumb entity
    {
      "@type": "BreadcrumbList",
      "@id": "https://upforge.in/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "UpForge",
          "item": "https://upforge.in",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "The Founder Chronicle",
          "item": "https://upforge.in",
        },
      ],
    },
    // ItemList — all 10 founders for Google rich results
    {
      "@type": "ItemList",
      "name": "Indian Startup Founders 2026 — UpForge Chronicle",
      "description":
        "India's top startup founders profiled by UpForge — verified data, editorial format, March 2026.",
      "url": "https://upforge.in",
      "numberOfItems": 10,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Aadit Palicha & Kaivalya Vohra — Zepto", "url": "https://upforge.in/startup/zepto", "description": "Stanford dropouts who built India's fastest unicorn with 10-minute grocery delivery. Valuation: $5.9B." },
        { "@type": "ListItem", "position": 2, "name": "Alakh Pandey — PhysicsWallah", "url": "https://upforge.in/startup/physicswallah", "description": "YouTube teacher who disrupted Indian edtech with ₹2,000/year courses vs BYJU's ₹80,000. Valuation: $2.8B." },
        { "@type": "ListItem", "position": 3, "name": "Deepinder Goyal — Zomato", "url": "https://upforge.in/startup/zomato", "description": "Hurun India 2025 #1. Built Zomato from scanned restaurant menus to ₹3.2 lakh crore company." },
        { "@type": "ListItem", "position": 4, "name": "Nithin Kamath — Zerodha", "url": "https://upforge.in/startup/zerodha", "description": "Bootstrapped India's largest stockbroker to $8.2B without a single rupee of VC funding." },
        { "@type": "ListItem", "position": 5, "name": "Falguni Nayar — Nykaa", "url": "https://upforge.in/startup/nykaa", "description": "Left investment banking at 50 to build India's first profitable unicorn and woman-founded IPO." },
        { "@type": "ListItem", "position": 6, "name": "Ritesh Agarwal — OYO", "url": "https://upforge.in/startup/oyo", "description": "Started at 19 to fix India's budget hotel problem. Built OYO into a $10B+ global chain." },
        { "@type": "ListItem", "position": 7, "name": "Bhavish Aggarwal — Ola", "url": "https://upforge.in/startup/ola", "description": "A bad taxi ride inspired India's largest ride-hailing platform. Now building India's EV future." },
        { "@type": "ListItem", "position": 8, "name": "Lucky Tiwari — InternAdda", "url": "https://upforge.in/startup/internadda", "description": "Building India's most accessible platform for student internships and early career opportunities." },
        { "@type": "ListItem", "position": 9, "name": "Kunal Shah — CRED", "url": "https://upforge.in/startup/cred", "description": "After selling FreeCharge for $400M, built CRED to reward India's creditworthy users. Valuation: $6B+." },
        { "@type": "ListItem", "position": 10, "name": "Vijay Shekhar Sharma — Paytm", "url": "https://upforge.in/startup/paytm", "description": "From small-town recharge site to India's largest digital payments platform with 300M+ users." },
      ],
    },
    // FAQPage — targets "People Also Ask" Google feature
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who are the most successful startup founders in India 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "India's most successful startup founders in 2026 include Deepinder Goyal (Zomato, ₹3.2L Cr market cap), Nithin Kamath (Zerodha, $8.2B bootstrapped), Falguni Nayar (Nykaa, first profitable unicorn IPO), Aadit Palicha (Zepto, $5.9B), Ritesh Agarwal (OYO, $10B+), Vijay Shekhar Sharma (Paytm, 300M+ users), Kunal Shah (CRED, $6B+), Bhavish Aggarwal (Ola, $7B+), and Alakh Pandey (PhysicsWallah, $2.8B).",
          },
        },
        {
          "@type": "Question",
          "name": "What is the youngest Indian startup founder to become a billionaire?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Kaivalya Vohra of Zepto became India's youngest billionaire at age 22. He co-founded Zepto with Aadit Palicha after dropping out of Stanford at 19. Zepto reached a $5.9B valuation in 2025.",
          },
        },
        {
          "@type": "Question",
          "name": "Which Indian startup was bootstrapped to become a unicorn?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Zerodha, founded by Nithin Kamath in 2010, is India's most celebrated bootstrapped unicorn. It reached an $8.2B valuation without raising a single rupee of venture capital. Zerodha has 1.5 crore active customers and is India's largest stockbroker.",
          },
        },
        {
          "@type": "Question",
          "name": "How many unicorns does India have in 2026?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "India had 126 unicorns as of early 2026, making it the world's third-largest startup ecosystem. UpForge tracks all Indian unicorns with verified data on funding, valuation, and founders.",
          },
        },
        {
          "@type": "Question",
          "name": "How can I list my startup on UpForge?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can list your Indian startup on UpForge for free at upforge.in/submit. UpForge is India's independent startup registry with 72,000+ verified startups. Listings are free and permanent.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        {/* JSON-LD — server-rendered for best SEO crawlability */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Preconnect to Google Fonts (performance) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
