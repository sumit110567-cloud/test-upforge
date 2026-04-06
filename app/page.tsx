// app/page.tsx  ←  SERVER COMPONENT
// CRITICAL: No "use client" here.
// All 10 founder stories render as static HTML — visible to Google on first crawl.
//
// REDESIGN v2.0 — GLOBAL AUTHORITY LAYOUT
// ─────────────────────────────────────────────────────────────────────────────
// 1. /masthead.jpg integrated in hero header with overlay text
// 2. Clean, FT.com-inspired typography and spacing (Guardian, sharp serif + clean sans)
// 3. Clear value proposition: "Global Startup Directory" + "Verified Connections"
// 4. Trust indicators: UFRN system, manual verification, live startup count
// 5. Professional global authority look — no major structural changes, just refinement
// 6. Footer and header kept minimal for now (as requested)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"

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

/** Real last-updated date from Supabase — used in all dateModified fields */
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

/** Real approved startup count — used in Dataset schema recordCount */
async function getStartupCount(): Promise<number> {
  try {
    const supabase = await createClient()
    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")
    return count ?? FOUNDERS.length
  } catch (_) {}
  return 5000 // conservative fallback
}

// ---------------------------------------------------------------------------
// METADATA — refined for global authority positioning
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage      = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "UpForge — Global Startup Directory & Verified Registry | UFRN",
      description:
        "The trusted global startup directory. Every company is manually verified and issued a unique UpForge Registry Number (UFRN). Join 10,000+ founders building the future.",
      keywords: [
        "global startup directory", "verified startup database", "UFRN registry",
        "UpForge Registry Number", "open startup data", "startup proof of existence",
        "independent startup registry", "startup verification", "UFRN lookup",
        "global founder database", "startup identity number", "verified startup number",
        "startup directory", "trusted connections",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "UpForge — Global Startup Directory & Verified Registry",
        description:
          "The independent global registry for startups. Verified proof of existence via UFRN. Connect with trusted founders worldwide.",
        url: canonicalUrl,
        siteName: "UpForge Global Registry",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Directory", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge_in",
        title: "UpForge Global Startup Directory",
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
    title: "The Founder Chronicle 2026 — India's Greatest Startup Stories | UpForge",
    description:
      "Verified stories of India's most iconic founders — Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Trusted by 500,000+ readers monthly.",
    keywords: [
      "Indian startup founders 2026", "India unicorn stories", "startup success stories India",
      "Aadit Palicha Zepto story", "Kunal Shah CRED profile", "Nithin Kamath Zerodha lessons",
      "Falguni Nayar Nykaa journey", "Indian unicorn list 2026", "how was Zepto built",
      "best startup stories India", "startup founder profiles India", "Indian entrepreneur stories",
      "UpForge Founder Chronicle", "top founders India 2026", "Indian startup news today",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "The Founder Chronicle 2026 — India's Greatest Startup Stories",
      description:
        "10 deep-dive profiles of India's most iconic startup founders. Verified funding data, unicorn valuations, and the real stories behind the success.",
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
      title: "The Founder Chronicle 2026",
      description: "Verified founder profiles: Zepto, CRED, Zerodha, Nykaa, OYO & more.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS — all now accept liveDate and startupCount
// ---------------------------------------------------------------------------

function buildCollectionPageSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/#collectionpage`,
    name: isOrg
      ? "UpForge Global Startup Directory — Verified UFRN Database"
      : "The Founder Chronicle 2026 — Indian Startup Founders & Unicorn Stories",
    description: isOrg
      ? "The trusted global directory of verified startups. Every entry is manually reviewed and assigned a unique UpForge Registry Number (UFRN)."
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
    publisher: {
      "@type": "Organization",
      name: "UpForge",
      url: "https://www.upforge.org",
    },
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
    logo: {
      "@type": "ImageObject",
      url: "https://www.upforge.in/logo.jpg",
      width: 512,
      height: 512,
    },
    sameAs: [
      "https://www.upforge.in",
      "https://www.upforge.org",
      "https://www.linkedin.com/company/upforge-india",
    ],
    description: isOrg
      ? "The global open startup directory — independent, verified, and free. Creator of the UFRN system for trusted connections."
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
    name: isOrg ? "UpForge Global Startup Directory" : "UpForge India",
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
        name: isOrg ? "Global Startup Directory" : "The Founder Chronicle 2026",
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
          a: "The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global directory. It serves as proof of existence and allows anyone to look up a startup's official listing at upforge.org/ufrn/[UFRN].",
        },
        {
          q: "How do I look up a startup's UFRN?",
          a: "Visit upforge.org/ufrn/[UFRN-ID] with the company's registry number, or search for the company at upforge.org/startup. Every approved listing displays its UFRN prominently.",
        },
        {
          q: "Is UpForge free to use?",
          a: "Yes. UpForge is a free, independent startup directory. Both browsing and submitting a startup are completely free.",
        },
        {
          q: "How does UpForge verify startups?",
          a: "Each submission is manually reviewed by the UpForge editorial team for legitimacy, active operations, and accurate data before being approved and assigned a UFRN.",
        },
        {
          q: "Why list my startup on UpForge?",
          a: "Listing on UpForge gives your startup a verified UFRN, increases visibility to investors and partners, and establishes trust through our manual verification process.",
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
          a: "Browse UpForge's verified Indian startup directory at upforge.in/startup. Filter by sector, city, funding stage, or founding year. All 5000+ listings are manually verified.",
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
// PAGE COMPONENT — SERVER RENDERED with enhanced professional layout
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  // Fetch live data for schema freshness — both run in parallel
  const [liveDate, startupCount] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
  ])

  // Hero content based on domain
  const heroContent = isOrg ? {
    badge: "Global Startup Directory",
    title: "The Trusted Registry for Verified Startups",
    description: "Every company is manually verified and assigned a unique UpForge Registry Number (UFRN). Join the global standard for trusted startup connections.",
    ctaPrimary: "List Your Startup",
    ctaSecondary: "Browse Directory",
    stats: `${startupCount.toLocaleString()}+ Verified Companies`
  } : {
    badge: "The Founder Chronicle 2026",
    title: "India's Greatest Startup Stories",
    description: "Verified deep-dive profiles of India's most iconic founders. Trusted by 500,000+ readers monthly.",
    ctaPrimary: "Explore Stories",
    ctaSecondary: "Browse Registry",
    stats: "10 Iconic Founders"
  }

  return (
    <>
      {/* Structured Data */}
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

      {/* Main Content with enhanced professional layout */}
      <div className="upforge-root">
        {/* Global header - minimal for now as requested */}
        <header className="upforge-header">
          <div className="header-container">
            <div className="logo-area">
              <a href="/" className="logo-link">
                <span className="logo-mark">Up</span>
                <span className="logo-text">Forge</span>
              </a>
              {isOrg && <span className="badge-global">Global</span>}
            </div>
            <nav className="header-nav">
              <a href="/startup" className="nav-link">Directory</a>
              <a href="/submit" className="nav-link nav-primary">List Your Startup</a>
            </nav>
          </div>
        </header>

        {/* Hero Section with /masthead.jpg background */}
        <section className="hero-section">
          <div className="hero-bg" style={{ backgroundImage: "url('/masthead.jpg')" }}>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-container">
            <div className="hero-content">
              <span className="hero-badge">{heroContent.badge}</span>
              <h1 className="hero-title">{heroContent.title}</h1>
              <p className="hero-description">{heroContent.description}</p>
              <div className="hero-stats">
                <span className="stat">{heroContent.stats}</span>
                <span className="stat-divider">•</span>
                <span className="stat">Manual Verification</span>
                <span className="stat-divider">•</span>
                <span className="stat">Unique UFRN</span>
              </div>
              <div className="hero-buttons">
                <a href={isOrg ? "/submit" : "/startup"} className="btn-primary">{heroContent.ctaPrimary}</a>
                <a href={isOrg ? "/startup" : "/"} className="btn-secondary">{heroContent.ctaSecondary}</a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar - clean authority signals */}
        <div className="trust-bar">
          <div className="trust-container">
            <span className="trust-item">✓ Manually Verified</span>
            <span className="trust-item">✓ Unique UFRN ID</span>
            <span className="trust-item">✓ Open & Free</span>
            <span className="trust-item">✓ Global Standard</span>
          </div>
        </div>

        {/* Founder Chronicle Client Component - passes through as before */}
        <FounderChronicleClient
          founders={FOUNDERS}
          internalLinks={[
            { l: "Startup Directory",   h: "/startup", desc: "Browse verified startups" },
            { l: "Submit Your Startup",  h: "/submit",  desc: "Get listed for free" },
            { l: "The Forge — Insights", h: "/blog",    desc: "Startup intelligence" },
            { l: "About UpForge",        h: "/about",   desc: "Our mission & team" },
          ]}
          footerLinks={[
            { l: "The Founder Chronicle", h: "/" },
            { l: "Startup Directory",      h: "/startup" },
            { l: "Insights",               h: "/blog" },
            { l: "Submit Startup",         h: "/submit" },
            { l: "About",                  h: "/about" },
          ]}
        />

        {/* Minimal Footer - as requested */}
        <footer className="upforge-footer">
          <div className="footer-container">
            <div className="footer-brand">
              <span className="footer-logo">UpForge</span>
              <p className="footer-tagline">The trusted global startup directory</p>
            </div>
            <div className="footer-links">
              <a href="/privacy">Privacy</a>
              <a href="/terms">Terms</a>
              <a href="/contact">Contact</a>
            </div>
            <div className="footer-copyright">
              © 2026 UpForge — Global Startup Registry
            </div>
          </div>
        </footer>
      </div>

      {/* Global Styles - FT.com inspired professional typography */}
      <style dangerouslySetInnerHTML={{ __html: `
        /* FT.com inspired reset & typography */
        .upforge-root {
          --color-primary: #1a2c3e;
          --color-secondary: #2c5f7a;
          --color-accent: #d4af37;
          --color-text: #1e2a36;
          --color-text-light: #5a6e7c;
          --color-background: #ffffff;
          --color-border: #e6e9ed;
          --font-serif: 'Georgia', 'Times New Roman', Times, serif;
          --font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          --spacing-xs: 0.5rem;
          --spacing-sm: 1rem;
          --spacing-md: 2rem;
          --spacing-lg: 4rem;
          --spacing-xl: 6rem;
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          background: var(--color-background);
          color: var(--color-text);
          font-family: var(--font-sans);
          line-height: 1.5;
        }
        
        /* Header Styles */
        .upforge-header {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--color-border);
        }
        
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-area {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }
        
        .logo-link {
          text-decoration: none;
          display: flex;
          align-items: baseline;
          gap: 0.125rem;
        }
        
        .logo-mark {
          font-size: 1.75rem;
          font-weight: 700;
          font-family: var(--font-serif);
          color: var(--color-primary);
          letter-spacing: -0.02em;
        }
        
        .logo-text {
          font-size: 1.75rem;
          font-weight: 400;
          font-family: var(--font-serif);
          color: var(--color-secondary);
          letter-spacing: -0.01em;
        }
        
        .badge-global {
          font-size: 0.7rem;
          font-weight: 500;
          background: var(--color-accent);
          color: var(--color-primary);
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          letter-spacing: 0.5px;
        }
        
        .header-nav {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        
        .nav-link {
          text-decoration: none;
          color: var(--color-text);
          font-size: 0.9rem;
          font-weight: 450;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: var(--color-secondary);
        }
        
        .nav-primary {
          background: var(--color-primary);
          color: white;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
        }
        
        .nav-primary:hover {
          background: var(--color-secondary);
          color: white;
        }
        
        /* Hero Section with /masthead.jpg */
        .hero-section {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center 30%;
          z-index: 0;
        }
        
        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.4) 100%);
        }
        
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          width: 100%;
        }
        
        .hero-content {
          max-width: 720px;
          color: white;
        }
        
        .hero-badge {
          display: inline-block;
          font-size: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          font-weight: 500;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(4px);
          padding: 0.25rem 1rem;
          border-radius: 100px;
          margin-bottom: 1.5rem;
        }
        
        .hero-title {
          font-size: 3.5rem;
          font-weight: 500;
          font-family: var(--font-serif);
          line-height: 1.2;
          margin-bottom: 1.5rem;
          letter-spacing: -0.02em;
        }
        
        @media (min-width: 768px) {
          .hero-title {
            font-size: 4.5rem;
          }
        }
        
        .hero-description {
          font-size: 1.2rem;
          line-height: 1.5;
          margin-bottom: 2rem;
          opacity: 0.9;
          max-width: 560px;
        }
        
        .hero-stats {
          display: flex;
          gap: 1rem;
          margin-bottom: 2rem;
          font-size: 0.9rem;
          font-weight: 450;
          opacity: 0.85;
        }
        
        .stat-divider {
          opacity: 0.5;
        }
        
        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          display: inline-block;
          background: white;
          color: var(--color-primary);
          text-decoration: none;
          padding: 0.9rem 2rem;
          border-radius: 100px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s;
          border: none;
        }
        
        .btn-primary:hover {
          background: var(--color-accent);
          color: var(--color-primary);
          transform: translateY(-2px);
        }
        
        .btn-secondary {
          display: inline-block;
          background: transparent;
          color: white;
          text-decoration: none;
          padding: 0.9rem 2rem;
          border-radius: 100px;
          font-weight: 500;
          font-size: 0.95rem;
          border: 1px solid rgba(255,255,255,0.4);
          transition: all 0.2s;
        }
        
        .btn-secondary:hover {
          background: rgba(255,255,255,0.1);
          border-color: white;
        }
        
        /* Trust Bar */
        .trust-bar {
          background: var(--color-primary);
          color: white;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .trust-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
        }
        
        .trust-item {
          font-size: 0.85rem;
          font-weight: 450;
          letter-spacing: 0.3px;
        }
        
        /* Footer */
        .upforge-footer {
          background: #f8f9fa;
          border-top: 1px solid var(--color-border);
          padding: 2rem 0;
          margin-top: 2rem;
        }
        
        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }
        
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        
        .footer-logo {
          font-size: 1.25rem;
          font-weight: 600;
          font-family: var(--font-serif);
          color: var(--color-primary);
        }
        
        .footer-tagline {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        
        .footer-links {
          display: flex;
          gap: 2rem;
        }
        
        .footer-links a {
          text-decoration: none;
          color: var(--color-text-light);
          font-size: 0.85rem;
          transition: color 0.2s;
        }
        
        .footer-links a:hover {
          color: var(--color-primary);
        }
        
        .footer-copyright {
          font-size: 0.75rem;
          color: var(--color-text-light);
        }
        
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            text-align: center;
          }
          .trust-container {
            gap: 1rem;
          }
          .hero-title {
            font-size: 2.5rem;
          }
          .header-container {
            padding: 0.75rem 1rem;
          }
        }
      ` }} />
      
      {/* SEO CONTENT LAYER — rendered in DOM, invisible to users, read by crawlers */}
      <div className="sr-only" aria-label="SEO content">
        <section>
          <h1>
            {isOrg
              ? "UpForge — Global Startup Directory & Verified Registry"
              : "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026"}
          </h1>
          <p>
            {isOrg
              ? "UpForge is the trusted global startup directory. Every company is manually verified and assigned a unique UpForge Registry Number (UFRN). Join 10,000+ founders building the future with trusted connections."
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
              <li><a href="/startups/fintech">Fintech Startups</a></li>
              <li><a href="/startups/edtech">Edtech Startups</a></li>
              <li><a href="/startups/ai">AI Startups</a></li>
              <li><a href="/startups/saas">SaaS Startups</a></li>
              <li><a href="/startups/d2c">D2C Startups</a></li>
              <li><a href="/startups/logistics">Logistics Startups</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  )
}
