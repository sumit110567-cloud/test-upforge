// app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// CHANGES vs. PREVIOUS VERSION:
//
// 1. LIVE dateModified via Supabase max(updated_at)
//    Google rewards freshness. A static "2026-01-01" in schema tells Google
//    the dataset is stale. We now query the real latest update timestamp.
//
// 2. Canonical URLs are domain-specific and set in generateMetadata()
//    The <link rel="canonical"> must exactly match the domain being served.
//    Mixed canonicals (e.g. .org page with .in canonical) cause Google to
//    silently ignore the page and credit .in instead.
//
// 3. Expanded "near me" + location-based keywords for .in
//    Queries like "fintech startups in Mumbai" or "AI startups near me" have
//    high commercial intent and near-zero competition. Added to keywords array.
//
// 4. verification block added for .org
//    GSC verification was only on .in. Both domains need independent GSC
//    properties — each needs its own HTML tag (or DNS record).
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "../components/client-layout"
import Script from "next/script"
import { getDomainContext } from "@/lib/domain.server"
import {
  getDomainMeta,
  getAlternatesForLayout,
  getOrganizationJsonLd,
  getWebsiteJsonLd,
} from "@/lib/domain"
import { createClient } from "@/lib/supabase/server"

// ---------------------------------------------------------------------------
// FONTS
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
// HELPER — get the latest updated_at from the startups table.
// This gives Google a real "freshness" signal. If the query fails,
// we fall back to today's date rather than crashing.
// ---------------------------------------------------------------------------
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
  } catch (_) {
    // Silently fall through to default
  }
  return new Date().toISOString().split("T")[0]
}

// ---------------------------------------------------------------------------
// METADATA — Dynamic per domain
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const ctx        = await getDomainContext()
  const meta       = getDomainMeta(ctx)
  const alternates = getAlternatesForLayout("/", ctx)

  // ── .in — India hub ──────────────────────────────────────────────────────
  if (ctx === "in") {
    return {
      metadataBase: new URL(meta.baseUrl),

      title: {
        default: "UpForge — India's Verified Startup Registry & Founder Stories 2026",
        template: "%s | UpForge",
      },

      description:
        "UpForge is India's independent verified startup registry. Discover 5000+ Indian startups, unicorn founders, funding data, sector analysis, and deep-dive founder stories — all free, all verified.",

      keywords: [
        // Brand
        "UpForge", "UpForge startup registry", "UpForge founder chronicle",

        // Core registry
        "Indian startup registry 2026", "Indian startup database 2026",
        "verified Indian startups", "startup directory India", "Indian startup list",

        // Founders & stories
        "Indian startup founders 2026", "Indian unicorn founders", "founder stories India",
        "startup success stories India", "Indian entrepreneur profiles",

        // Unicorns
        "Indian unicorn list 2026", "Indian unicorn companies 2026",
        "funded Indian startups", "Indian startup funding", "startup valuation India",

        // Sector verticals
        "Indian AI startups 2026", "Indian fintech startups 2026", "Indian edtech startups 2026",
        "Indian SaaS startups 2026", "Indian deep-tech startups", "quick commerce India startups",
        "Indian logistics startups", "Indian D2C startups", "Indian mobility startups",

        // ── NEW: Location-based long-tail — near-zero competition ─────────
        "startups in Mumbai 2026", "startups in Bangalore 2026", "startups in Delhi 2026",
        "fintech startups in Mumbai", "AI startups in Bangalore", "edtech startups near me",
        "startup ecosystem Hyderabad", "startup companies in Pune India",
        "best startups to work for India 2026", "top Indian startup jobs 2026",
        "unicorn startups Bangalore India", "emerging startups Delhi NCR",
        "startup funding news India today", "latest Indian startup news 2026",

        // Named companies (explicit brand searches)
        "Zepto startup", "Sarvam AI India", "CRED startup India", "Zerodha startup",
        "Groww startup", "Meesho startup", "Nykaa startup", "PhysicsWallah startup",
        "OYO startup", "Rapido startup",
      ],

      authors: [{ name: "UpForge Editorial", url: `${meta.baseUrl}/about` }],
      creator: "UpForge",
      publisher: "UpForge",
      category: "Business & Entrepreneurship",

      alternates: {
        ...alternates,
        // Canonical MUST match the serving domain exactly — no cross-domain
        canonical: meta.baseUrl,
      },

      verification: {
        google: "g7JT-FIdylY2-2Pq4axQcEP8q_4tuG1fogKPWdWuF1Y",
        // Add .in GSC verification tag here if different from layout verification
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
        locale: meta.locale,
        url: meta.baseUrl,
        siteName: "UpForge",
        title: "UpForge — India's Verified Startup Registry & Founder Stories 2026",
        description:
          "5000+ verified Indian startups. Deep-dive founder profiles. Funding data. Sector analysis. The definitive startup intelligence platform for the Indian ecosystem.",
        images: [
          {
            url: `${meta.baseUrl}/og/founder-chronicle.png`,
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
          "5000+ Indian startups. Verified founder profiles. Funding & valuation data. Free. Independent.",
        images: [`${meta.baseUrl}/og/founder-chronicle.png`],
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
  }

  // ── .org — Global hub ─────────────────────────────────────────────────────
  return {
    metadataBase: new URL(meta.baseUrl),

    title: {
      default: "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      template: "%s | UpForge",
    },

    description:
      "UpForge is the world's verified startup registry for emerging markets. Discover 5000+ startups, cross-border funding data, founder intelligence, and sector analysis — free and independent.",

    keywords: [
      // Brand
      "UpForge", "UpForge global registry", "UFRN startup registry",

      // Core registry
      "global startup database 2026", "emerging market startups 2026",
      "verified startup directory", "global founder database", "cross-border venture data",
      "emerging market unicorns", "global startup intelligence", "startup registry worldwide",

      // Geographies
      "India startup global", "Southeast Asia startups", "Africa startups database",
      "LatAm startup directory", "Middle East startups", "global unicorn list 2026",

      // Data & funding
      "international startup funding", "global venture capital data",
      "startup valuation database", "founder profiles global",

      // Sectors (global)
      "global AI startups 2026", "global fintech startups 2026", "global SaaS startups",
      "deep tech startups global", "cross-border startup investment", "startup ecosystem data",

      // UFRN-specific — these are near-zero competition, very targeted
      "UFRN lookup", "UpForge Registry Number", "startup registry number",
      "verified startup identity", "startup proof of existence", "startup verification number",
    ],

    authors: [{ name: "UpForge Editorial", url: `${meta.baseUrl}/about` }],
    creator: "UpForge",
    publisher: "UpForge",
    category: "Business & Entrepreneurship",

    alternates: {
      ...alternates,
      // Canonical MUST match the serving domain exactly
      canonical: meta.baseUrl,
    },

    // ── IMPORTANT: Add the GSC verification tag for upforge.org ────────────
    // Get this from Google Search Console → Add Property → HTML Tag method.
    // verification: { google: "YOUR_ORG_VERIFICATION_TAG_HERE" },

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
      locale: meta.locale,
      url: meta.baseUrl,
      siteName: "UpForge",
      title: "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      description:
        "5000+ verified startups across emerging markets. Cross-border funding data. Founder intelligence. Sector analysis. The definitive global startup intelligence platform.",
      images: [
        {
          url: `${meta.baseUrl}/og/global-registry.png`,
          width: 1200,
          height: 630,
          alt: "UpForge — Global Startup Registry 2026",
          type: "image/png",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      creator: "@upforge_in",
      title: "UpForge — Global Startup Registry & Emerging Market Intelligence 2026",
      description:
        "5000+ verified startups globally. Cross-border funding data. Founder profiles. Free. Independent.",
      images: [`${meta.baseUrl}/og/global-registry.png`],
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
}

// ---------------------------------------------------------------------------
// ROOT LAYOUT
// ---------------------------------------------------------------------------
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const ctx  = await getDomainContext()
  const meta = getDomainMeta(ctx)

  // Fetch the real last-updated date for schema freshness signals
  const latestDate = await getLatestStartupDate()

  // Build JSON-LD for this domain
  const organizationJsonLd = getOrganizationJsonLd(ctx)
  const websiteJsonLd      = getWebsiteJsonLd(ctx)

  // Inject live dateModified into Organization schema
  // This tells Google "this dataset was last updated TODAY" — freshness signal
  const enrichedOrgJsonLd = {
    ...organizationJsonLd,
    dateModified: latestDate,
  }

  return (
    <html
      lang={meta.locale}
      className={`${inter.variable} ${playfair.variable}`}
      data-domain={ctx}
    >
      <head>

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5377045438787332"
     crossorigin="anonymous"></script>
        {/* RESOURCE HINTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />

        {process.env.NEXT_PUBLIC_SUPABASE_URL && (
          <link
            rel="preconnect"
            href={process.env.NEXT_PUBLIC_SUPABASE_URL}
            crossOrigin="anonymous"
          />
        )}

        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://static.businessworld.in" />

        {/*
          Hreflang — belt-and-suspenders alongside Next.js alternates.
          These are THE most important tags for dual-domain SEO.
          They tell Google: "these two domains are the same content,
          serve .in for India users and .org for everyone else."
        */}
        <link rel="alternate" hrefLang="en-IN"    href="https://www.upforge.in" />
        <link rel="alternate" hrefLang="en"       href="https://www.upforge.org" />
        <link rel="alternate" hrefLang="x-default" href="https://www.upforge.org" />

        {/* Organization JSON-LD with live dateModified */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedOrgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
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
            gtag('config', 'G-3J7Y3695TK', { page_path: window.location.pathname });
            gtag('config', 'G-18282');
            gtag('config', 'AW-18011511989');
          `}
        </Script>

        <ClientLayout domainContext={ctx}>{children}</ClientLayout>
      </body>
    </html>
  )
}
