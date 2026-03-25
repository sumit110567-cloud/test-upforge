// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "../components/client-layout"
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
// ---------------------------------------------------------------------------
export const viewport: Viewport = {
  themeColor: "#F3EFE5",
  width: "device-width",
  initialScale: 1,
}

// ---------------------------------------------------------------------------
// GLOBAL METADATA
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
    "UpForge", "UpForge startup registry", "UpForge founder chronicle",
    "Indian startup registry 2026", "Indian startup database 2026",
    "verified Indian startups", "startup directory India", "Indian startup list",
    "Indian startup founders 2026", "Indian unicorn founders", "founder stories India",
    "startup success stories India", "Indian entrepreneur profiles",
    "Indian unicorn list 2026", "Indian unicorn companies 2026",
    "funded Indian startups", "Indian startup funding", "startup valuation India",
    "Indian AI startups 2026", "Indian fintech startups 2026", "Indian edtech startups 2026",
    "Indian SaaS startups 2026", "Indian deep-tech startups", "quick commerce India startups",
    "Indian logistics startups", "Indian D2C startups", "Indian mobility startups",
    "Zepto startup", "Sarvam AI India", "CRED startup India", "Zerodha startup",
    "Groww startup", "Meesho startup", "Nykaa startup", "PhysicsWallah startup",
    "OYO startup", "Rapido startup",
  ],

  authors: [{ name: "UpForge Editorial", url: "https://www.upforge.in/about" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business & Entrepreneurship",

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
    description: "5000+ Indian startups. Verified founder profiles. Funding & valuation data. Free. Independent.",
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

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.upforge.in/#organization",
  name: "UpForge",
  url: "https://www.upforge.in",
  logo: "https://www.upforge.in/logo.png",
  description: "UpForge is India's independent, verified startup registry and founder intelligence platform.",
  foundingDate: "2024",
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [
    "https://twitter.com/upforge_in",
    "https://www.linkedin.com/company/upforge",
  ],
}

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.upforge.in/#website",
  url: "https://www.upforge.in",
  name: "UpForge",
  inLanguage: "en-IN",
  publisher: { "@id": "https://www.upforge.in/#organization" },
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
        {/* RESOURCE HINTS: Shaving 100-300ms by preconnecting to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        
        {/* Supabase Preconnect — Critical if images or data come from Supabase CDN */}
        {process.env.NEXT_PUBLIC_SUPABASE_URL && (
          <link rel="preconnect" href={process.env.NEXT_PUBLIC_SUPABASE_URL} crossOrigin="anonymous" />
        )}

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://static.businessworld.in" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>

      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        {/* OPTIMIZED SCRIPT LOADING
          - We load the gtag library ONLY once.
          - We use 'lazyOnload' for Ads (AW) and one of the GA4 IDs to reduce initial blocking time.
          - This significantly improves "Total Blocking Time" and "LCP" for mobile.
        */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3J7Y3695TK"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Consolidating all tracking into one snippet to save execution time
            gtag('config', 'G-3J7Y3695TK', { page_path: window.location.pathname });
            gtag('config', 'G-18282');
            gtag('config', 'AW-18011511989');
          `}
        </Script>

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
