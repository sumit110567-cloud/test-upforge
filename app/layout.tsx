// app/layout.tsx
// ─────────────────────────────────────────────────────────────
// GLOBAL AUTHORITY ROOT LAYOUT — UpForge.org (Final Production)
// Consolidates SEO signals to .org canonical domain
// Next.js 16 compliant
// TypeScript-safe
// Vercel build-safe
// ─────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "../components/client-layout"
import Script from "next/script"
import {
  getAlternatesForLayout,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/domain"
import { createClient } from "@/lib/supabase/server"

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

export const viewport: Viewport = {
  themeColor: "#F3EFE5",
  width: "device-width",
  initialScale: 1,
}

async function getLatestStartupDate(): Promise<string> {
  try {
    const supabase = await createClient()

    const { data } = await supabase
      .from("startups")
      .select("updated_at")
      .eq("status", "approved")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()

    if (data?.updated_at) {
      return new Date(data.updated_at).toISOString().split("T")[0]
    }
  } catch {}

  return new Date().toISOString().split("T")[0]
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://www.upforge.org"

  // FIXED: now only 1 argument
  const alternates = getAlternatesForLayout("/")

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default:
        "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      template: "%s | UpForge",
    },

    description:
      "UpForge is the world's independent verified startup registry. Discover 5000+ startups across India and emerging markets, unicorn founder stories, funding data, and sector analysis — free and independent.",

    keywords: [
      "UpForge",
      "UpForge global registry",
      "UFRN startup registry",
      "global startup database 2026",
      "verified startup directory",
      "global founder database",
      "cross-border venture data",
      "emerging market unicorns",
      "startup registry worldwide",
      "Indian startup registry 2026",
      "verified Indian startups",
      "startup directory India",
      "Indian unicorn list 2026",
      "fintech startups in Mumbai",
      "AI startups in Bangalore",
      "top Indian startup jobs 2026",
      "Indian AI startups 2026",
      "startups in San Francisco",
      "startups in London",
      "startups in Singapore",
      "global AI startups 2026",
      "global fintech startups 2026",
      "UFRN lookup",
      "UpForge Registry Number",
      "startup verification number",
    ],

    authors: [
      {
        name: "UpForge Editorial",
        url: `${baseUrl}/about`,
      },
    ],

    creator: "UpForge",
    publisher: "UpForge",
    category: "Business & Entrepreneurship",

    alternates,

    verification: {
      google: "YOUR_GLOBAL_ORG_VERIFICATION_TAG",
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
      locale: "en_US",
      url: baseUrl,
      siteName: "UpForge",
      title:
        "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      description:
        "5000+ verified startups globally. Deep-dive founder profiles. Funding & sector analysis.",
      images: [
        {
          url: `${baseUrl}/og/global-registry.png`,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      title: "UpForge — Global Startup Registry 2026",
      images: [`${baseUrl}/og/global-registry.png`],
    },

    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ctx = "org"

  const latestDate = await getLatestStartupDate()

  const organizationJsonLd = getOrganizationJsonLd(ctx)
  const websiteJsonLd = getWebsiteJsonLd(ctx)

  const enrichedOrgJsonLd = {
    ...organizationJsonLd,
    dateModified: latestDate,
  }

  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${playfair.variable}`}
      data-domain={ctx}
    >
      <head>
        {/* Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5377045438787332"
          crossOrigin="anonymous"
        />

        {/* font optimization */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* JSON-LD Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(enrichedOrgJsonLd),
          }}
        />

        {/* JSON-LD Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>

      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        {/* Google Analytics */}
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

        <ClientLayout domainContext={ctx}>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
