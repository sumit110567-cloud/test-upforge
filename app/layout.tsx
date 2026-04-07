// app/layout.tsx

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

import { getDomainContext } from "@/lib/domain.server"
import { createReadClient } from "@/lib/supabase/server"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
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
      return new Date(data.updated_at).toISOString()
    }
  } catch {}

  return new Date().toISOString()
}

export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://www.upforge.org"

  const alternates = getAlternatesForLayout("/")

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default:
        "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      template: "%s | UpForge",
    },

    description:
      "UpForge is the world's independent verified startup registry. Discover global startups, unicorn founders, funding intelligence, and emerging market insights.",

    applicationName: "UpForge",

    keywords: [
      "global startup registry",
      "startup database worldwide",
      "verified startups directory",
      "Indian startup registry",
      "AI startups database",
      "fintech startups global",
      "emerging market startups",
      "UFRN lookup",
    ],

    authors: [
      {
        name: "UpForge Editorial",
        url: `${baseUrl}/about`,
      },
    ],

    creator: "UpForge",
    publisher: "UpForge",

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

    referrer: "origin-when-cross-origin",

    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      siteName: "UpForge",
      title:
        "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      description:
        "Discover verified startups globally. Founder profiles, funding intelligence, and sector analysis.",
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
      creator: "@upforge_in",
      title: "UpForge — Global Startup Registry",
      images: [`${baseUrl}/og/global-registry.png`],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ctx = await getDomainContext()

  const latestDate = await getLatestStartupDate()

  const organizationJsonLd = getOrganizationJsonLd(ctx)

  const websiteJsonLd = {
    ...getWebsiteJsonLd(ctx),

    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.upforge.org/startups?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }

  const enrichedOrgJsonLd = {
    ...organizationJsonLd,
    dateModified: latestDate,
  }

  return (
    <html
      lang="en-US"
      className={`${inter.variable} ${playfair.variable}`}
      data-domain={ctx}
      suppressHydrationWarning
    >
      <head>

        <Script
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5377045438787332"
          crossOrigin="anonymous"
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(enrichedOrgJsonLd),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />

      </head>

      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">

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
