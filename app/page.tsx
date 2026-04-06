// app/page.tsx  ←  SERVER COMPONENT
// EDITORIAL MAGAZINE REDESIGN — Global Authority Look
// FT / The Economist inspired — clean, trusted, authoritative

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
// METADATA — Global Authority
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage      = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "UpForge | The Global Standard for Startup Verification",
      description:
        "Independent startup registry. Manual verification. Unique UFRN for every company. Trusted by founders, investors, and ecosystems worldwide.",
      keywords: [
        "global startup registry", "startup verification", "UFRN", "UpForge Registry Number",
        "verified startup database", "startup proof of existence", "trusted startup directory",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "UpForge — The Global Standard for Startup Verification",
        description: "Independent registry. Manual verification. Unique UFRN. Trusted worldwide.",
        url: canonicalUrl,
        siteName: "UpForge",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Registry", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge",
        title: "UpForge — Global Startup Verification",
        description: "Every verified startup gets a unique UFRN.",
        images: [ogImage],
      },
      robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    }
  }

  return {
    title: "The Founder Chronicle | India's Definitive Startup Stories",
    description:
      "Long-form editorial profiles of India's most iconic founders. Zepto, CRED, Zerodha, Nykaa, OYO. Verified data. Real stories.",
    keywords: [
      "Indian startup founders", "unicorn stories India", "Zepto story", "Kunal Shah", "Nithin Kamath",
      "Falguni Nayar", "startup success stories", "Indian entrepreneurs",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "The Founder Chronicle — India's Definitive Startup Stories",
      description: "Deep-dive editorial profiles of India's most iconic founders.",
      url: canonicalUrl,
      siteName: "UpForge",
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "The Founder Chronicle", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      title: "The Founder Chronicle",
      description: "Definitive stories of India's startup icons.",
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA — Same as before (keeping all SEO signals)
// ---------------------------------------------------------------------------

function buildCollectionPageSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/#collectionpage`,
    name: isOrg ? "UpForge Global Startup Registry" : "The Founder Chronicle",
    description: isOrg
      ? "Independent verified database of global startups. Each entry assigned a unique UFRN."
      : "Editorial profiles of India's most iconic startup founders.",
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
    description: "Verified global startup database. Each startup manually reviewed and assigned a permanent UFRN.",
    url: "https://www.upforge.org",
    creator: { "@type": "Organization", "@id": "https://www.upforge.org/#organization", name: "UpForge", url: "https://www.upforge.org" },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["startups", "UFRN", "startup registry", "verified startups"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number" },
      { "@type": "PropertyValue", name: "Status", description: "Verification Status" },
      { "@type": "PropertyValue", name: "Funding", description: "Funding Amount (USD)" },
    ],
    measurementTechnique: "Manual verification by UpForge editorial team",
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true,
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
    sameAs: ["https://www.upforge.in", "https://www.upforge.org", "https://www.linkedin.com/company/upforge-india"],
    description: isOrg ? "Global open startup registry — independent, verified, free. Creator of UFRN system." : "India's independent startup registry.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    contactPoint: { "@type": "ContactPoint", contactType: "editorial", url: `${base}/contact`, availableLanguage: "English" },
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
    name: "Top Startup Founders",
    numberOfItems: FOUNDERS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: FOUNDERS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: { "@type": "Person", name: f.name, jobTitle: f.role, worksFor: { "@type": "Organization", name: f.company }, url: `${base}/startup/${f.slug}` },
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
      { "@type": "ListItem", position: 2, name: isOrg ? "Global Registry" : "The Founder Chronicle", item: base },
    ],
  }
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const questions = isOrg ? [
    { q: "What is the UFRN (UpForge Registry Number)?", a: "Unique permanent identifier assigned to every verified startup. Proof of existence." },
    { q: "How does UpForge verify startups?", a: "Manual review by editorial team for legitimacy, active operations, and accurate data." },
    { q: "Is UpForge free to use?", a: "Yes. Both browsing and submitting a startup are completely free." },
    { q: "Why get a UFRN?", a: "Establishes trust, increases visibility to investors, proves your startup exists." },
  ] : [
    { q: "Who are India's top startup founders?", a: "Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), Ritesh Agarwal (OYO)." },
    { q: "Which Indian startups are unicorns?", a: "Zepto, CRED, Groww, Meesho, Nykaa, PhysicsWallah, Rapido, Zerodha." },
    { q: "How do I find verified Indian startups?", a: "Browse UpForge's verified registry at upforge.in/startup." },
    { q: "How do I submit my startup?", a: "Submit for free at upforge.in/submit. Editorial team reviews and assigns UFRN upon approval." },
  ]
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: questions.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT — Editorial Magazine Layout
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg  = domain === "org"
  const [liveDate, startupCount] = await Promise.all([getLatestDate(), getStartupCount()])

  return (
    <>
      {/* STRUCTURED DATA */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg, liveDate)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />
      {isOrg && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDatasetSchema(liveDate, startupCount)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(isOrg, liveDate)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }} />

      <div className="magazine-root">
        {/* HERO — Editorial Statement */}
        <div className="editorial-hero" style={{ backgroundImage: "url('/masthead.jpg')" }}>
          <div className="hero-overlay"></div>
          <div className="hero-container">
            <div className="hero-grid">
              <div className="hero-statement">
                <span className="magazine-label">THE MANIFESTO</span>
                <h1 className="hero-headline">
                  {isOrg 
                    ? "Building the global standard for startup verification."
                    : "The definitive archive of India's startup builders."}
                </h1>
                <div className="hero-divider"></div>
                <p className="hero-excerpt">
                  {isOrg
                    ? "UpForge exists because trust in startups is broken. We fix it — one manual verification, one unique UFRN at a time. No automation. No AI. Just editorial rigor."
                    : "Ten stories. Ten founders. One belief: India's next generation deserves to know how the first was built. Verified data. Real lessons."}
                </p>
                <div className="hero-meta">
                  <div className="stat-block">
                    <span className="stat-number">{isOrg ? `${startupCount.toLocaleString()}+` : "10"}</span>
                    <span className="stat-label">{isOrg ? "Verified Companies" : "Founder Chronicles"}</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-number">{isOrg ? "100%" : "Editorial"}</span>
                    <span className="stat-label">{isOrg ? "Manual Verification" : "Long-form"}</span>
                  </div>
                  <div className="stat-block">
                    <span className="stat-number">{isOrg ? "UFRN" : "2026"}</span>
                    <span className="stat-label">{isOrg ? "Unique ID System" : "Edition"}</span>
                  </div>
                </div>
              </div>
              <div className="hero-quote">
                <blockquote>
                  {isOrg
                    ? "“Verification is the foundation of trust. UpForge makes it global.”"
                    : "“The best way to predict the future is to study the past. These founders built India's future.”"}
                </blockquote>
              </div>
            </div>
          </div>
        </div>

        {/* TRUST BAR — Clean authority signals */}
        <div className="trust-strip">
          <div className="trust-strip-inner">
            <span>✓ Manual Verification</span>
            <span>✓ Unique UFRN</span>
            <span>✓ Open & Free</span>
            <span>✓ Global Standard</span>
          </div>
        </div>

        {/* EDITORIAL NOTE — Why we exist */}
        <div className="editorial-note">
          <div className="note-container">
            <div className="note-left">
              <span className="note-label">WHY UPFORGE EXISTS</span>
              <h2 className="note-title">
                {isOrg
                  ? "A registry, not a ranking. Verification, not automation."
                  : "Stories that build the future."}
              </h2>
            </div>
            <div className="note-right">
              <p className="note-text">
                {isOrg
                  ? "Every day, thousands of startups launch. Most directories are spam. Most \"verification\" is automated. UpForge is different. Every single listing is manually reviewed by our editorial team. Every approved startup receives a permanent UpForge Registry Number — a unique identifier that proves existence and builds trust."
                  : "India's startup ecosystem has produced over 100 unicorns and thousands of success stories. But the real lessons — the failures, the pivots, the moments of clarity — rarely get told. The Founder Chronicle changes that. Each profile is deeply researched, fact-checked, and presented with the rigor of a financial times feature."}
              </p>
              <div className="note-signature">
                <span>— UpForge Editorial</span>
              </div>
            </div>
          </div>
        </div>

        {/* FOUNDER CHRONICLE — Magazine layout integration */}
        {/* Original component preserved, wrapped in editorial container */}
        <div className="chronicle-section">
          <div className="chronicle-header">
            <span className="chronicle-label">THE FOUNDER CHRONICLE</span>
            <h2 className="chronicle-title">
              {isOrg ? "Featured startups from the global registry" : "India's most iconic founders, one story at a time."}
            </h2>
            <div className="chronicle-line"></div>
          </div>
          
          <FounderChronicleClient
            founders={FOUNDERS}
            internalLinks={[
              { l: "Startup Registry",   h: "/startup", desc: "Browse verified startups" },
              { l: "Submit Your Startup", h: "/submit",  desc: "Get listed free" },
              { l: "The Forge — Insights", h: "/blog",    desc: "Intelligence & analysis" },
              { l: "About UpForge",       h: "/about",   desc: "Our mission" },
            ]}
            footerLinks={[
              { l: "The Founder Chronicle", h: "/" },
              { l: "Startup Registry",      h: "/startup" },
              { l: "Insights",              h: "/blog" },
              { l: "Submit Startup",        h: "/submit" },
              { l: "About",                 h: "/about" },
            ]}
          />
        </div>

        {/* GLOBAL RECOGNITION BANNER */}
        <div className="global-banner">
          <div className="banner-inner">
            <p>
              {isOrg
                ? "Recognized by founders, investors, and ecosystems across 50+ countries as the independent standard for startup verification."
                : "Read by 500,000+ founders, investors, and operators monthly. The most trusted source for Indian startup stories."}
            </p>
          </div>
        </div>
      </div>

      {/* EDITORIAL MAGAZINE STYLES */}
      <style dangerouslySetInnerHTML={{ __html: `
        .magazine-root {
          --magazine-black: #1a1a1a;
          --magazine-gray: #2c2c2c;
          --magazine-light: #f5f5f0;
          --magazine-border: #e0e0e0;
          --magazine-gold: #c6a43b;
          --serif: 'Georgia', 'Times New Roman', Times, serif;
          --sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
          background: white;
        }

        /* Editorial Hero */
        .editorial-hero {
          position: relative;
          min-height: 85vh;
          background-size: cover;
          background-position: center 30%;
          display: flex;
          align-items: center;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 50%, rgba(0,0,0,0.4) 100%);
        }
        .hero-container {
          position: relative;
          z-index: 2;
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
          width: 100%;
        }
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.8fr;
          gap: 4rem;
          align-items: start;
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
        .magazine-label {
          font-size: 0.75rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--magazine-gold);
          font-weight: 500;
          font-family: var(--sans);
        }
        .hero-headline {
          font-size: 3.2rem;
          font-weight: 500;
          font-family: var(--serif);
          line-height: 1.2;
          margin: 1.5rem 0 1rem;
          color: white;
          letter-spacing: -0.02em;
        }
        @media (min-width: 768px) {
          .hero-headline { font-size: 4rem; }
        }
        .hero-divider {
          width: 60px;
          height: 2px;
          background: var(--magazine-gold);
          margin: 1.5rem 0;
        }
        .hero-excerpt {
          font-size: 1.1rem;
          line-height: 1.5;
          color: rgba(255,255,255,0.85);
          max-width: 90%;
          font-family: var(--sans);
        }
        .hero-meta {
          display: flex;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        .stat-block {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 1.8rem;
          font-weight: 600;
          color: white;
          font-family: var(--serif);
        }
        .stat-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: rgba(255,255,255,0.6);
        }
        .hero-quote blockquote {
          font-size: 1.3rem;
          font-family: var(--serif);
          font-style: italic;
          color: rgba(255,255,255,0.9);
          border-left: 3px solid var(--magazine-gold);
          padding-left: 1.5rem;
          line-height: 1.4;
        }

        /* Trust Strip */
        .trust-strip {
          background: var(--magazine-black);
          color: white;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        .trust-strip-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          font-size: 0.8rem;
          letter-spacing: 0.5px;
        }

        /* Editorial Note */
        .editorial-note {
          padding: 5rem 2rem;
          background: var(--magazine-light);
          border-bottom: 1px solid var(--magazine-border);
        }
        .note-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 3rem;
        }
        @media (max-width: 768px) {
          .note-container { grid-template-columns: 1fr; gap: 1.5rem; }
        }
        .note-label {
          font-size: 0.7rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--magazine-gold);
          font-weight: 500;
        }
        .note-title {
          font-size: 1.8rem;
          font-family: var(--serif);
          font-weight: 450;
          line-height: 1.3;
          margin-top: 0.75rem;
          color: var(--magazine-black);
        }
        .note-text {
          font-size: 1rem;
          line-height: 1.6;
          color: #3a3a3a;
          margin-bottom: 1.5rem;
          font-family: var(--sans);
        }
        .note-signature {
          font-size: 0.85rem;
          font-style: italic;
          color: #666;
        }

        /* Chronicle Section */
        .chronicle-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 4rem 2rem;
        }
        .chronicle-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .chronicle-label {
          font-size: 0.7rem;
          letter-spacing: 4px;
          text-transform: uppercase;
          color: var(--magazine-gold);
          font-weight: 500;
        }
        .chronicle-title {
          font-size: 2.2rem;
          font-family: var(--serif);
          font-weight: 450;
          margin: 1rem 0;
          color: var(--magazine-black);
        }
        .chronicle-line {
          width: 80px;
          height: 2px;
          background: var(--magazine-gold);
          margin: 1rem auto 0;
        }

        /* Global Banner */
        .global-banner {
          background: var(--magazine-black);
          padding: 2rem;
          text-align: center;
        }
        .banner-inner {
          max-width: 800px;
          margin: 0 auto;
        }
        .banner-inner p {
          color: rgba(255,255,255,0.85);
          font-size: 1rem;
          letter-spacing: 0.3px;
          font-family: var(--sans);
        }
      ` }} />

      {/* SEO CONTENT */}
      <div className="sr-only" aria-label="SEO content">
        <section>
          <h1>{isOrg ? "Global Startup Registry — Verified UFRN Database | UpForge" : "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026"}</h1>
          <p>{isOrg ? "UpForge Global Registry provides verified proof of existence for startups worldwide through the UFRN system." : "Explore the verified stories of India's unicorn founders."}</p>
          <nav aria-label="Founder profiles">
            <ul>{FOUNDERS.map((f) => (<li key={f.slug}><a href={`/startup/${f.slug}`}>{f.name} — {f.role} at {f.company}</a></li>))}</ul>
          </nav>
        </section>
      </div>
    </>
  )
}
