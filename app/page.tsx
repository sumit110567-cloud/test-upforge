// app/page.tsx  ←  SERVER COMPONENT
// CRITICAL: No "use client" here.
// All founder stories render as static HTML — visible to Google on first crawl.
//
// REDESIGN NOTES (this version):
// ─────────────────────────────────────────────────────────────────────────────
// Design direction: FT.com-inspired global editorial authority.
//   - Playfair Display (serif) for headlines — gravitas, legacy feel
//   - IBM Plex Sans for UI chrome — precise, institutional
//   - Source Serif 4 for body copy — readable, journalistic
//   - Salmon/off-white palette: #FDF0E8 bg accent, #1a1a18 ink, #C9462A accent
//   - masthead.jpg used as full-bleed header image
//   - Mission statement, UFRN explainer, trust pillars above the fold
//   - All structured data and SEO logic preserved from previous version
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"
import Image from "next/image"

// ---------------------------------------------------------------------------
// DOMAIN DETECTION
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const context = headersList.get("x-upforge-domain")
  if (context === "org" || context === "in") return context as "org" | "in"
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

// ---------------------------------------------------------------------------
// LIVE DATA FETCHERS
// ---------------------------------------------------------------------------

async function getLatestDate(): Promise<string> {
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
  } catch (_) {}
  return new Date().toISOString().split("T")[0]
}

async function getStartupCount(): Promise<number> {
  try {
    const supabase = await createClient()
    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")
    return count ?? FOUNDERS.length
  } catch (_) {}
  return 5000
}

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage      = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "Global Startup Registry — Verified UFRN Database | UpForge",
      description:
        "The official global startup registry. Every listing is manually verified and assigned a unique UpForge Registry Number (UFRN). Access open startup data, verified founder profiles, and global ecosystem intelligence.",
      keywords: [
        "global startup registry", "verified startup database", "UFRN registry",
        "UpForge Registry Number", "open startup data", "startup proof of existence",
        "independent startup registry", "startup verification", "UFRN lookup",
        "global founder database", "startup identity number", "verified startup number",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "Global Startup Registry — Verified UFRN Database",
        description:
          "The independent global registry for startups. Verified proof of existence via UFRN. Features 5000+ companies and world-class founders.",
        url: canonicalUrl,
        siteName: "UpForge Global Registry",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Registry", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge_in",
        title: "UpForge Global Startup Registry",
        description: "Open, verified registry of startups. Every company gets a unique UFRN.",
        images: [ogImage],
      },
      robots: {
        index: true, follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
      },
    }
  }

  return {
    title: "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026",
    description:
      "Explore verified stories of India's greatest startup founders and unicorn success stories — Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Funding data, valuations, and entrepreneurial lessons for the Indian ecosystem.",
    keywords: [
      "Indian startup founders 2026", "India unicorn stories", "startup success stories India",
      "Aadit Palicha Zepto story", "Kunal Shah CRED profile", "Nithin Kamath Zerodha lessons",
      "Falguni Nayar Nykaa journey", "Indian unicorn list 2026", "how was Zepto built",
      "best startup stories India", "startup founder profiles India", "Indian entrepreneur stories",
      "UpForge Founder Chronicle", "top founders India 2026", "Indian startup news today",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026",
      description:
        "10 deep-dive profiles of India's most iconic startup founders. Verified funding data, unicorn valuations, and the real stories behind the success. UpForge India.",
      url: canonicalUrl,
      siteName: "UpForge",
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Founder Chronicle 2026", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      creator: "@upforge_in",
      title: "Indian Startup Founders & Unicorn Stories",
      description: "Verified founder profiles: Zepto, CRED, Zerodha, Nykaa, OYO & more. Lessons from India's unicorns.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS
// ---------------------------------------------------------------------------

function buildCollectionPageSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/#collectionpage`,
    name: isOrg
      ? "UpForge Global Startup Registry — Verified UFRN Database"
      : "The Founder Chronicle 2026 — Indian Startup Founders & Unicorn Stories",
    description: isOrg
      ? "Open, independent, verified database of startups. Every entry is assigned a unique UpForge Registry Number (UFRN)."
      : "Verified deep-dive profiles of India's most iconic startup founders and unicorn companies.",
    url: base,
    inLanguage: isOrg ? "en" : "en-IN",
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    datePublished: "2026-03-01",
    dateModified: liveDate,
    image: { "@type": "ImageObject", url: "https://www.upforge.in/og/founder-chronicle.png", width: 1200, height: 630 },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
  }
}

function buildDatasetSchema(liveDate: string, startupCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://www.upforge.org/#dataset",
    name: "UpForge Global Startup Registry Dataset (UFRN)",
    description:
      "Open, verified database of global startups. Each startup is manually reviewed and assigned a permanent UpForge Registry Number (UFRN).",
    url: "https://www.upforge.org",
    creator: {
      "@type": "Organization",
      "@id": "https://www.upforge.org/#organization",
      name: "UpForge",
      url: "https://www.upforge.org",
    },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["startups", "UFRN", "startup registry", "verified startups", "global startup database"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number" },
      { "@type": "PropertyValue", name: "Status", description: "Verification Status" },
      { "@type": "PropertyValue", name: "Funding", description: "Funding Amount (USD)" },
    ],
    measurementTechnique: "Manual verification by UpForge editorial team",
    recordSet: {
      "@type": "DataFeedItem",
      item: { "@type": "Dataset", name: "Startup records", identifier: "ufrn-dataset" },
    },
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true,
    temporalCoverage: "2020/..",
    dateModified: liveDate,
    datePublished: "2026-03-01",
  }
}

function buildOrganizationSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "UpForge",
    url: base,
    logo: { "@type": "ImageObject", url: "https://www.upforge.in/logo.jpg", width: 512, height: 512 },
    sameAs: [
      "https://www.upforge.in",
      "https://www.upforge.org",
      "https://www.linkedin.com/company/upforge-india",
    ],
    description: isOrg
      ? "The global open startup registry — independent, verified, and free. Creator of the UFRN system."
      : "India's independent startup registry and discovery platform tracking 5000+ companies and founder stories.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${base}/contact`,
      availableLanguage: "English",
    },
    dateModified: liveDate,
  }
}

function buildWebsiteSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: isOrg ? "UpForge Global Registry" : "UpForge",
    publisher: { "@id": `${base}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${base}/startup?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: isOrg ? "en" : "en-IN",
  }
}

function buildItemListSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#founderlist`,
    name: "Top Startup Founders & Unicorn Profiles",
    numberOfItems: FOUNDERS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: FOUNDERS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        worksFor: { "@type": "Organization", name: f.company },
        url: `${base}/startup/${f.slug}`,
      },
    })),
  }
}

function buildBreadcrumbSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${base}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: base },
      {
        "@type": "ListItem",
        position: 2,
        name: isOrg ? "Global Registry" : "The Founder Chronicle 2026",
        item: base,
      },
    ],
  }
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  const questions = isOrg
    ? [
        {
          q: "What is the UFRN (UpForge Registry Number)?",
          a: "The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as proof of existence and allows anyone to look up a startup's official listing at upforge.org/ufrn/[UFRN].",
        },
        {
          q: "How do I look up a startup's UFRN?",
          a: "Visit upforge.org/ufrn/[UFRN-ID] with the company's registry number, or search for the company at upforge.org/startup. Every approved listing displays its UFRN prominently.",
        },
        {
          q: "Is UpForge free to use?",
          a: "Yes. UpForge is a free, independent startup registry. Both browsing and submitting a startup are completely free.",
        },
        {
          q: "How does UpForge verify startups?",
          a: "Each submission is manually reviewed by the UpForge editorial team for legitimacy, active operations, and accurate data before being approved and assigned a UFRN.",
        },
        {
          q: "Which countries are included in the UpForge global registry?",
          a: "UpForge covers startups from all major emerging markets including India, Southeast Asia, Africa, Latin America, and the Middle East, as well as global tech hubs worldwide.",
        },
      ]
    : [
        {
          q: "Who are the top startup founders in India in 2026?",
          a: "India's top startup founders in 2026 include Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), and Ritesh Agarwal (OYO). UpForge profiles all of these founders with verified funding and valuation data.",
        },
        {
          q: "Which Indian startups are unicorns in 2026?",
          a: "Top Indian unicorns include Zepto, CRED, Groww, Meesho, Nykaa, PhysicsWallah, Rapido, and Zerodha. UpForge tracks all verified Indian unicorns with real funding data.",
        },
        {
          q: "How do I find verified startups in India?",
          a: "Browse UpForge's verified Indian startup registry at upforge.in/startup. Filter by sector, city, funding stage, or founding year. All 5000+ listings are manually verified.",
        },
        {
          q: "Which cities have the most startups in India?",
          a: "Bangalore leads India's startup ecosystem, followed by Mumbai, Delhi NCR, Hyderabad, and Pune. UpForge lets you filter startups by city to find companies in your region.",
        },
        {
          q: "How do I submit my Indian startup to UpForge?",
          a: "Submit your startup for free at upforge.in/submit. The editorial team reviews each application and assigns a UFRN (UpForge Registry Number) upon approval.",
        },
      ]

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT — SERVER RENDERED
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  const [liveDate, startupCount] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
  ])

  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  return (
    <>
      {/* ── JSON-LD STRUCTURED DATA ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg, liveDate)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />
      {isOrg && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDatasetSchema(liveDate, startupCount)) }} />
      )}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(isOrg, liveDate)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(isOrg)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(isOrg)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }} />

      {/* ─────────────────────────────────────────────────────────────────────
          REDESIGNED PAGE — FT.com-inspired editorial authority
          Font imports live in globals.css or layout.tsx:
            Playfair Display (400, 500, 700 + italic variants)
            Source Serif 4  (300, 400, 600 + italic)
            IBM Plex Sans   (300, 400, 500)
          ──────────────────────────────────────────────────────────────────── */}

      {/* ── CSS VARIABLES ── */}
      <style>{`
        :root {
          --upf-ink:       #1a1a18;
          --upf-ink2:      #3d3d38;
          --upf-ink3:      #6b6b64;
          --upf-salmon:    #FDF0E8;
          --upf-salmon-d:  #f5d5bf;
          --upf-accent:    #C9462A;
          --upf-gold:      #8B6914;
          --upf-rule:      #c8c8c0;
          --upf-bg:        #FDFCF8;
        }
        .upf-body {
          font-family: 'IBM Plex Sans', system-ui, sans-serif;
          background: var(--upf-bg);
          color: var(--upf-ink);
          -webkit-font-smoothing: antialiased;
        }
        .upf-wrap { max-width: 1080px; margin: 0 auto; padding: 0 24px; }

        /* ── TOP BAR ── */
        .upf-topbar {
          border-bottom: 1px solid var(--upf-ink);
          padding: 8px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .upf-topbar-left {
          font-size: 11px;
          letter-spacing: .08em;
          color: var(--upf-ink3);
          text-transform: uppercase;
        }
        .upf-topbar-right { display: flex; gap: 20px; align-items: center; }
        .upf-topbar-right a {
          font-size: 11px;
          letter-spacing: .06em;
          color: var(--upf-ink2);
          text-decoration: none;
          text-transform: uppercase;
        }
        .upf-topbar-right a:hover { color: var(--upf-accent); }
        .upf-topbar-right .upf-cta {
          color: var(--upf-accent);
          border: 1px solid var(--upf-accent);
          padding: 3px 12px;
          font-size: 10px;
          letter-spacing: .1em;
        }

        /* ── MASTHEAD IMAGE ── */
        .upf-masthead-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
          object-position: center 30%;
          display: block;
          filter: contrast(1.05) saturate(0.85);
        }
        .upf-masthead-fallback {
          height: 240px;
          background: linear-gradient(135deg, #1a1a18 0%, #2d2d28 60%, #3a2a1a 100%);
        }

        /* ── NAMEPLATE ── */
        .upf-nameplate {
          text-align: center;
          padding: 28px 0 18px;
          border-bottom: 1px solid var(--upf-rule);
        }
        .upf-nameplate-pre {
          font-size: 10px;
          letter-spacing: .22em;
          text-transform: uppercase;
          color: var(--upf-gold);
          margin-bottom: 10px;
        }
        .upf-nameplate-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(36px, 6vw, 62px);
          font-weight: 700;
          letter-spacing: -.01em;
          line-height: 1;
          color: var(--upf-ink);
        }
        .upf-nameplate-tagline {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 15px;
          font-style: italic;
          color: var(--upf-ink3);
          margin-top: 10px;
          font-weight: 300;
        }
        .upf-nameplate-rule {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          justify-content: center;
        }
        .upf-nameplate-rule span {
          height: 1px;
          width: 80px;
          background: var(--upf-rule);
          display: block;
        }
        .upf-nameplate-rule em {
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--upf-ink3);
          font-style: normal;
        }

        /* ── EDITION BAR ── */
        .upf-edition-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          border-bottom: 1px solid var(--upf-rule);
          font-size: 11px;
          color: var(--upf-ink3);
        }
        .upf-edition-bar strong { color: var(--upf-accent); font-weight: 500; }

        /* ── MISSION BANNER ── */
        .upf-mission {
          background: var(--upf-ink);
          color: #f5f2ec;
          padding: 40px 24px;
          margin: 28px 0;
          position: relative;
        }
        .upf-mission::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--upf-accent);
        }
        .upf-mission-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }
        .upf-mission-kicker {
          font-size: 10px;
          letter-spacing: .2em;
          text-transform: uppercase;
          color: #c9b99a;
          margin-bottom: 14px;
        }
        .upf-mission-headline {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(22px, 4vw, 34px);
          font-weight: 400;
          font-style: italic;
          line-height: 1.35;
          color: #f5f2ec;
          margin-bottom: 16px;
        }
        .upf-mission-body {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 15px;
          line-height: 1.75;
          color: #c9c4ba;
          font-weight: 300;
        }
        .upf-mission-body strong { color: #f5f2ec; font-weight: 400; }

        /* ── STAT STRIP ── */
        .upf-statstrip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid var(--upf-rule);
          border-bottom: 1px solid var(--upf-rule);
          margin: 24px 0;
        }
        .upf-stat {
          padding: 20px 16px;
          text-align: center;
          border-right: 1px solid var(--upf-rule);
        }
        .upf-stat:last-child { border-right: none; }
        .upf-stat-num {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 28px;
          font-weight: 700;
          color: var(--upf-accent);
          line-height: 1;
        }
        .upf-stat-label {
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--upf-ink3);
          margin-top: 5px;
        }

        /* ── CONTENT GRID ── */
        .upf-grid {
          display: grid;
          grid-template-columns: 1fr 220px;
          gap: 0;
          border-top: 1px solid var(--upf-rule);
          margin-top: 8px;
        }
        .upf-pillars {
          border-right: 1px solid var(--upf-rule);
          padding-right: 28px;
        }
        .upf-section-head {
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--upf-gold);
          padding: 16px 0 10px;
          border-bottom: 1px solid var(--upf-rule);
          margin-bottom: 20px;
        }
        .upf-pillar {
          padding: 18px 0;
          border-bottom: 1px solid var(--upf-rule);
        }
        .upf-pillar:last-of-type { border-bottom: none; }
        .upf-pillar-kicker {
          font-size: 10px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: var(--upf-accent);
          margin-bottom: 6px;
        }
        .upf-pillar-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 19px;
          font-weight: 700;
          line-height: 1.25;
          color: var(--upf-ink);
          margin-bottom: 8px;
        }
        .upf-pillar-body {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 14px;
          line-height: 1.7;
          color: var(--upf-ink2);
          font-weight: 300;
        }
        .upf-pillar-body strong { font-weight: 400; color: var(--upf-ink); }

        /* ── UFRN BLOCK ── */
        .upf-ufrn-block {
          border: 1px solid var(--upf-rule);
          padding: 24px;
          margin: 24px 0;
          position: relative;
        }
        .upf-ufrn-block::before {
          content: 'UFRN — Registry Number';
          position: absolute;
          top: -9px;
          left: 20px;
          background: var(--upf-bg);
          padding: 0 8px;
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--upf-gold);
        }
        .upf-ufrn-sample {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 16px;
        }
        .upf-ufrn-badge {
          font-size: 20px;
          font-weight: 500;
          letter-spacing: .08em;
          color: var(--upf-ink);
          background: var(--upf-salmon);
          border: 1px solid var(--upf-salmon-d);
          padding: 8px 16px;
        }
        .upf-ufrn-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 17px;
          color: var(--upf-ink);
        }
        .upf-ufrn-desc {
          font-family: 'Source Serif 4', Georgia, serif;
          font-size: 14px;
          line-height: 1.7;
          color: var(--upf-ink2);
          font-weight: 300;
        }

        /* ── SIDEBAR ── */
        .upf-sidebar { padding-left: 24px; }
        .upf-sidebar-block {
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--upf-rule);
        }
        .upf-sidebar-block:last-child { border-bottom: none; }
        .upf-sidebar-head {
          font-size: 10px;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: var(--upf-gold);
          padding: 16px 0 10px;
          border-bottom: 1px solid var(--upf-rule);
          margin-bottom: 14px;
        }
        .upf-sidebar-item {
          padding: 10px 0;
          border-bottom: 1px solid var(--upf-rule);
        }
        .upf-sidebar-item:last-child { border-bottom: none; }
        .upf-sidebar-label {
          font-size: 10px;
          letter-spacing: .08em;
          text-transform: uppercase;
          color: var(--upf-ink3);
          margin-bottom: 3px;
        }
        .upf-sidebar-val {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--upf-ink);
        }
        .upf-sidebar-sub {
          font-size: 12px;
          color: var(--upf-ink3);
          margin-top: 1px;
        }
        .upf-submit-btn {
          display: block;
          text-align: center;
          padding: 10px;
          background: var(--upf-accent);
          color: white;
          text-decoration: none;
          font-size: 11px;
          letter-spacing: .1em;
          text-transform: uppercase;
          margin-top: 12px;
        }
        .upf-submit-btn:hover { opacity: .88; }

        /* ── TRUST STRIP ── */
        .upf-trust {
          background: var(--upf-salmon);
          border-top: 1px solid var(--upf-salmon-d);
          border-bottom: 1px solid var(--upf-salmon-d);
          padding: 32px 24px;
          margin: 28px 0;
        }
        .upf-trust-head {
          font-size: 10px;
          letter-spacing: .18em;
          text-transform: uppercase;
          color: var(--upf-gold);
          text-align: center;
          margin-bottom: 20px;
        }
        .upf-trust-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--upf-salmon-d);
          max-width: 1080px;
          margin: 0 auto;
        }
        .upf-trust-item {
          background: var(--upf-salmon);
          padding: 20px;
          text-align: center;
        }
        .upf-trust-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--upf-ink);
          margin-bottom: 6px;
          margin-top: 10px;
        }
        .upf-trust-body {
          font-size: 12px;
          line-height: 1.6;
          color: var(--upf-ink2);
          font-weight: 300;
        }

        /* ── FOOTER ── */
        .upf-footer {
          border-top: 3px double var(--upf-ink);
          padding: 28px 0 48px;
          margin-top: 32px;
        }
        .upf-footer-name {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--upf-ink);
          margin-bottom: 4px;
        }
        .upf-footer-sub {
          font-size: 11px;
          color: var(--upf-ink3);
          letter-spacing: .06em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .upf-footer-links { display: flex; gap: 20px; flex-wrap: wrap; }
        .upf-footer-links a {
          font-size: 12px;
          color: var(--upf-ink2);
          text-decoration: none;
          letter-spacing: .04em;
          border-bottom: 1px solid var(--upf-rule);
          padding-bottom: 1px;
        }
        .upf-footer-links a:hover { color: var(--upf-accent); border-color: var(--upf-accent); }
        .upf-footer-note {
          font-size: 11px;
          color: var(--upf-ink3);
          margin-top: 20px;
          line-height: 1.65;
          max-width: 640px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .upf-grid { grid-template-columns: 1fr; }
          .upf-pillars { border-right: none; padding-right: 0; }
          .upf-sidebar { padding-left: 0; border-top: 1px solid var(--upf-rule); padding-top: 24px; }
          .upf-statstrip { grid-template-columns: repeat(2, 1fr); }
          .upf-stat:nth-child(2) { border-right: none; }
          .upf-trust-grid { grid-template-columns: 1fr; }
          .upf-topbar-right a:not(.upf-cta) { display: none; }
        }
      `}</style>

      <div className="upf-body">

        {/* ── TOP BAR ── */}
        <div className="upf-wrap">
          <div className="upf-topbar">
            <span className="upf-topbar-left">Global Startup Registry · Est. 2024</span>
            <div className="upf-topbar-right">
              <a href="/startup">Registry</a>
              <a href="/submit">Submit</a>
              <a href="/about">About</a>
              <a href="/startup" className="upf-cta">Verify UFRN</a>
            </div>
          </div>
        </div>

        {/* ── MASTHEAD IMAGE ── */}
        <img
          src="/masthead.jpg"
          alt="UpForge — The Global Startup Registry"
          className="upf-masthead-img"
          width={1200}
          height={320}
        />

        {/* ── NAMEPLATE ── */}
        <div className="upf-wrap">
          <div className="upf-nameplate">
            <div className="upf-nameplate-pre">The Independent Global Registry of Startups</div>
            <div className="upf-nameplate-title">UpForge</div>
            <p className="upf-nameplate-tagline">
              Every startup, verified. Every founder, recorded. Every number, real.
            </p>
            <div className="upf-nameplate-rule">
              <span />
              <em>upforge.org</em>
              <span />
            </div>
          </div>

          <div className="upf-edition-bar">
            <span>Global Registry Edition · <strong>Open Access</strong></span>
            <span>{startupCount.toLocaleString()}+ verified listings · Updated daily</span>
          </div>
        </div>

        {/* ── MISSION BANNER ── */}
        <div className="upf-mission">
          <div className="upf-mission-inner">
            <div className="upf-mission-kicker">Why UpForge Exists</div>
            <p className="upf-mission-headline">
              &ldquo;The startup world has no single source of truth. We are building one.&rdquo;
            </p>
            <p className="upf-mission-body">
              Billions of dollars flow into startups every year — yet there is no independent, open
              registry that verifies they exist.{" "}
              <strong>UpForge is that registry.</strong> We manually verify every company, assign a
              permanent identity number, and publish the record openly. No paywalls. No gatekeepers.
              No bias.
            </p>
          </div>
        </div>

        <div className="upf-wrap">

          {/* ── STAT STRIP ── */}
          <div className="upf-statstrip">
            <div className="upf-stat">
              <div className="upf-stat-num">{startupCount.toLocaleString()}+</div>
              <div className="upf-stat-label">Verified startups</div>
            </div>
            <div className="upf-stat">
              <div className="upf-stat-num">60+</div>
              <div className="upf-stat-label">Countries covered</div>
            </div>
            <div className="upf-stat">
              <div className="upf-stat-num">100%</div>
              <div className="upf-stat-label">Manually reviewed</div>
            </div>
            <div className="upf-stat">
              <div className="upf-stat-num">Free</div>
              <div className="upf-stat-label">Always open access</div>
            </div>
          </div>

          {/* ── MAIN CONTENT GRID ── */}
          <div className="upf-grid">

            {/* ── LEFT: PILLARS ── */}
            <div className="upf-pillars">
              <div className="upf-section-head">What We Solve</div>

              <div className="upf-pillar">
                <div className="upf-pillar-kicker">Problem 01 — Identity</div>
                <h2 className="upf-pillar-title">No startup has a permanent, verifiable identity</h2>
                <p className="upf-pillar-body">
                  A company's LinkedIn page can vanish. Its website can redirect. Press coverage fades. Yet
                  investors, partners, and governments need to confirm:{" "}
                  <strong>does this startup actually exist?</strong> The UFRN — UpForge Registry Number —
                  gives every verified startup a permanent, lookup-able proof of existence.
                </p>
              </div>

              <div className="upf-pillar">
                <div className="upf-pillar-kicker">Problem 02 — Data integrity</div>
                <h2 className="upf-pillar-title">Startup data is scattered, stale, and often fabricated</h2>
                <p className="upf-pillar-body">
                  Funding rounds get misreported. Valuations are inflated. Most databases rely on
                  self-reported numbers. UpForge cross-references{" "}
                  <strong>primary sources</strong> — filings, term sheets, founder interviews — before any
                  number enters our registry.
                </p>
              </div>

              <div className="upf-pillar">
                <div className="upf-pillar-kicker">Problem 03 — Access</div>
                <h2 className="upf-pillar-title">Quality startup intelligence is locked behind enterprise paywalls</h2>
                <p className="upf-pillar-body">
                  The best startup data costs thousands per seat per year. That locks out emerging market
                  founders, researchers, and journalists who need it most.{" "}
                  <strong>UpForge is free.</strong> Every record, every UFRN lookup, every dataset export —
                  permanently open.
                </p>
              </div>

              {/* ── UFRN EXPLAINER ── */}
              <div className="upf-ufrn-block">
                <div className="upf-ufrn-sample">
                  <div className="upf-ufrn-badge">UFRN-00412</div>
                  <span style={{ color: "var(--upf-rule)", fontSize: "18px" }}>→</span>
                  <div className="upf-ufrn-name">Zepto (KiranaKart)</div>
                </div>
                <p className="upf-ufrn-desc">
                  Each UpForge Registry Number is permanent, human-readable, and globally unique. It follows
                  a company for its entire lifecycle — from seed round to IPO. Look up any UFRN at{" "}
                  <strong>upforge.org/ufrn/[number]</strong>.
                </p>
              </div>
            </div>

            {/* ── RIGHT: SIDEBAR ── */}
            <div className="upf-sidebar">

              <div className="upf-sidebar-block">
                <div className="upf-sidebar-head">Registry highlights</div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Largest sector</div>
                  <div className="upf-sidebar-val">Fintech</div>
                  <div className="upf-sidebar-sub">1,240 verified companies</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Top market</div>
                  <div className="upf-sidebar-val">India</div>
                  <div className="upf-sidebar-sub">2,100+ listings</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Newest region</div>
                  <div className="upf-sidebar-val">MENA</div>
                  <div className="upf-sidebar-sub">Added Q1 2026</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Unicorns tracked</div>
                  <div className="upf-sidebar-val">280+</div>
                  <div className="upf-sidebar-sub">Verified valuations only</div>
                </div>
              </div>

              <div className="upf-sidebar-block">
                <div className="upf-sidebar-head">Who uses UpForge</div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Investors</div>
                  <div className="upf-sidebar-sub">Due diligence & deal sourcing</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Founders</div>
                  <div className="upf-sidebar-sub">Proof of existence & credibility</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Journalists</div>
                  <div className="upf-sidebar-sub">Verified facts & funding data</div>
                </div>
                <div className="upf-sidebar-item">
                  <div className="upf-sidebar-label">Researchers</div>
                  <div className="upf-sidebar-sub">Open dataset access</div>
                </div>
              </div>

              <div className="upf-sidebar-block">
                <div className="upf-sidebar-head">List your startup</div>
                <p style={{ fontFamily: "'Source Serif 4', Georgia, serif", fontSize: "13px", lineHeight: "1.65", color: "var(--upf-ink2)", fontWeight: 300 }}>
                  Verification is free. Submit your company and receive a permanent UFRN upon approval.
                </p>
                <a href="/submit" className="upf-submit-btn">Submit for verification →</a>
              </div>

            </div>
          </div>
        </div>

        {/* ── TRUST STRIP ── */}
        <div className="upf-trust">
          <div className="upf-trust-head">The UpForge Standard</div>
          <div className="upf-trust-grid">
            <div className="upf-trust-item">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <circle cx="14" cy="14" r="12" stroke="#8B6914" strokeWidth="1.5"/>
                <path d="M9 14l3.5 3.5L19 10" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="upf-trust-title">Manual verification</div>
              <p className="upf-trust-body">
                Every listing is reviewed by a human editor before entering the registry. No automated
                ingestion from third-party sources.
              </p>
            </div>
            <div className="upf-trust-item">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect x="6" y="6" width="16" height="16" rx="2" stroke="#8B6914" strokeWidth="1.5"/>
                <path d="M10 14h8M14 10v8" stroke="#8B6914" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="upf-trust-title">Primary sources only</div>
              <p className="upf-trust-body">
                Funding data is sourced from regulatory filings, term sheets, and direct founder
                confirmation — not press releases.
              </p>
            </div>
            <div className="upf-trust-item">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M14 4L4 9v6c0 5 4.5 9.5 10 11 5.5-1.5 10-6 10-11V9L14 4z" stroke="#8B6914" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
              <div className="upf-trust-title">Permanently open</div>
              <p className="upf-trust-body">
                The UpForge dataset is licensed under Creative Commons. Every record is free to read,
                cite, and build on — forever.
              </p>
            </div>
          </div>
        </div>

        {/* ── FOUNDER CHRONICLE CLIENT (existing interactive component) ── */}
        <FounderChronicleClient
          founders={FOUNDERS}
          internalLinks={[
            { l: "Startup Registry India",   h: "/startup", desc: "5000+ verified startups" },
            { l: "Submit Your Startup",      h: "/submit",  desc: "Get listed free"         },
            { l: "The Forge — Startup Blog", h: "/blog",    desc: "Intelligence & analysis" },
            { l: "About UpForge",            h: "/about",   desc: "Our mission"             },
          ]}
          footerLinks={[
            { l: "The Founder Chronicle", h: "/"        },
            { l: "Startup Registry",      h: "/startup" },
            { l: "Blog",                  h: "/blog"    },
            { l: "Submit Startup",        h: "/submit"  },
            { l: "About UpForge",         h: "/about"   },
          ]}
        />

        {/* ── FOOTER ── */}
        <div className="upf-wrap">
          <div className="upf-footer">
            <div className="upf-footer-name">UpForge</div>
            <div className="upf-footer-sub">Global Startup Registry · upforge.org</div>
            <div className="upf-footer-links">
              <a href="/startup">Startup Registry</a>
              <a href="/submit">Submit a Startup</a>
              <a href="/blog">The Forge — Blog</a>
              <a href="/about">About UpForge</a>
              <a href="/contact">Contact</a>
            </div>
            <p className="upf-footer-note">
              UpForge is an independent, editorially operated registry. We accept no advertising and are
              not affiliated with any venture fund, accelerator, or government body. Data is published
              under Creative Commons Attribution 4.0.
            </p>
          </div>
        </div>

        {/* ── SEO CONTENT LAYER — rendered in DOM, invisible to users, read by crawlers ── */}
        <div className="sr-only" aria-label="SEO content">
          <section>
            <h1>
              {isOrg
                ? "Global Startup Registry — Verified UFRN Database"
                : "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026"}
            </h1>
            <p>
              {isOrg
                ? "UpForge Global Registry provides verified proof of existence for startups worldwide through the UFRN system. Every startup receives a unique UpForge Registry Number upon manual verification."
                : "Explore the verified stories of India's unicorn founders and the journeys behind their multi-billion dollar companies. Updated daily with real funding data."}
            </p>
            <nav aria-label="Founder profiles">
              <ul>
                {FOUNDERS.map((f) => (
                  <li key={f.slug}>
                    <a href={`/startup/${f.slug}`}>
                      {f.name} — {f.role} at {f.company}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Startup categories">
              <ul>
                <li><a href="/startups/fintech">Fintech Startups India</a></li>
                <li><a href="/startups/edtech">Edtech Startups India</a></li>
                <li><a href="/startups/ai">AI Startups India</a></li>
                <li><a href="/startups/saas">SaaS Startups India</a></li>
                <li><a href="/startups/d2c">D2C Startups India</a></li>
                <li><a href="/startups/logistics">Logistics Startups India</a></li>
              </ul>
            </nav>
          </section>
        </div>

      </div>
    </>
  )
}
