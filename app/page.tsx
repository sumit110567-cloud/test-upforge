// app/page.tsx — PRODUCTION v4
// All /startup refs → /registry | Full global SEO | Global authority look
// SERVER COMPONENT — all critical content renders as static HTML for SEO

import type { Metadata } from "next"
import { headers } from "next/headers"
import { GlobeHero } from "../components/globe-hero"
import { TopStoriesSection } from "../components/top-stories"
import { TopVideosSection } from "../components/top-videos"
import { ReviewsSection } from "../components/reviews"
import { TrustBar } from "../components/trust-bar"
import { FOUNDERS } from "../data/founders"
import { createReadClient } from "@/lib/supabase/server"

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
    const supabase = createReadClient()
    const { data } = await supabase
      .from("startups")
      .select("updated_at")
      .eq("status", "approved")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()
    if (data?.updated_at) return new Date(data.updated_at).toISOString().split("T")[0]
  } catch (_) {}
  return new Date().toISOString().split("T")[0]
}

async function getStartupCount(): Promise<number> {
  try {
    const supabase = createReadClient()
    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")
    return count ?? FOUNDERS.length
  } catch (_) {}
  return 5000
}

// ---------------------------------------------------------------------------
// METADATA — Maximum SEO, global authority language
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "Global Startup Registry — Verified UFRN Database | UpForge",
      description:
        "The world's first independent global startup registry. Every listing is manually verified and assigned a permanent UpForge Registry Number (UFRN). Trusted by 5,000+ founders, investors, and researchers across 50+ countries.",
      keywords: [
        "global startup registry", "verified startup database", "UFRN registry",
        "UpForge Registry Number", "startup proof of existence", "independent startup registry",
        "startup verification number", "UFRN lookup", "global founder database",
        "verified startup identity", "startup registry 2026", "global startup directory",
        "startup credibility score", "startup listing global", "emerging market startups",
        "Africa startup registry", "Southeast Asia startups", "Latin America startups",
        "India startup registry", "MENA startup database", "global unicorn tracker",
        "startup due diligence database", "founder verification", "startup intelligence platform",
      ],
      alternates: { canonical: canonicalUrl },
      metadataBase: new URL(canonicalUrl),
      openGraph: {
        title: "Global Startup Registry — Verified UFRN | UpForge",
        description: "The independent global registry for startups. Verified proof of existence via UFRN. 5,000+ verified companies across 50+ countries. Trusted by founders, VCs, and researchers worldwide.",
        url: canonicalUrl,
        siteName: "UpForge Global Registry",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Registry", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge_in",
        title: "UpForge — The Global Startup Registry",
        description: "Independent, verified registry for startups worldwide. Every company gets a permanent UFRN.",
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
      },
      authors: [{ name: "UpForge Editorial Team", url: canonicalUrl }],
      publisher: "UpForge",
      category: "Business Directory",
      verification: {
        google: "your-google-site-verification-token",
      },
    }
  }

  return {
    title: "Indian Startup Founders & Unicorn Stories 2026 — The Founder Chronicle | UpForge",
    description:
      "India's most trusted independent startup publication. Verified deep-dives on Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Real funding data, verified valuations, and lessons from India's unicorn founders. Updated weekly.",
    keywords: [
      "Indian startup founders 2026", "India unicorn stories", "best startup stories India",
      "Aadit Palicha Zepto", "Kunal Shah CRED", "Nithin Kamath Zerodha",
      "Falguni Nayar Nykaa", "Indian unicorn list 2026", "startup success India",
      "top founders India", "Indian startup news", "UpForge Founder Chronicle",
      "Indian startup ecosystem 2026", "Bangalore startup scene", "Mumbai startup founders",
      "startup funding India 2026", "Indian venture capital news", "Series B India startups",
      "profitable Indian startups", "D2C brands India 2026", "India startup registry",
      "UFRN India", "startup verification India", "Indian unicorn database",
    ],
    alternates: { canonical: canonicalUrl },
    metadataBase: new URL(canonicalUrl),
    openGraph: {
      title: "Indian Startup Founders & Unicorn Stories 2026 | UpForge",
      description: "Verified profiles of India's most iconic startup founders. Real data, real lessons, no PR fluff. The Founder Chronicle — India's most cited startup publication.",
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
      title: "Indian Startup Founders & Unicorn Stories 2026",
      description: "Zepto, CRED, Zerodha, Nykaa & more — verified profiles from India's most trusted startup publication.",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
    authors: [{ name: "UpForge Editorial Team", url: canonicalUrl }],
    publisher: "UpForge",
    category: "Business News",
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS
// ---------------------------------------------------------------------------

function buildOrganizationSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "UpForge",
    alternateName: "UpForge Global Startup Registry",
    url: base,
    logo: { "@type": "ImageObject", url: "https://www.upforge.in/logo.jpg", width: 512, height: 512 },
    sameAs: [
      "https://www.upforge.in",
      "https://www.upforge.org",
      "https://www.linkedin.com/company/upforge-india",
      "https://twitter.com/upforge_in",
      "https://www.youtube.com/@upforge-ind",
    ],
    description: isOrg
      ? "The world's first independent global startup registry. Creator of the UFRN (UpForge Registry Number) system. Open, verified, and free. Trusted by researchers at Harvard, IIM Ahmedabad, and Stanford."
      : "India's most trusted independent startup registry and editorial publication. Tracking 5,000+ verified companies and founder stories across the Indian ecosystem.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    knowsAbout: ["Startups", "Venture Capital", "Entrepreneurship", "Startup Verification", "UFRN", "Indian Unicorns"],
    award: "Cited by Harvard Business School, IIM Ahmedabad, and Stanford GSB researchers",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${base}/contact`,
      availableLanguage: ["English", "Hindi"],
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
    name: isOrg ? "UpForge Global Registry" : "UpForge — The Founder Chronicle",
    publisher: { "@id": `${base}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${base}/registry?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: isOrg ? "en" : "en-IN",
    copyrightYear: 2024,
    copyrightHolder: { "@id": `${base}/#organization` },
  }
}

function buildCollectionPageSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/#collectionpage`,
    name: isOrg
      ? "UpForge Global Startup Registry — UFRN Verified Database"
      : "The Founder Chronicle 2026 — Verified Indian Startup Stories",
    description: isOrg
      ? "Open, independent, verified database of startups worldwide. Every listing assigned a permanent UFRN (UpForge Registry Number). Trusted by researchers at Harvard, IIM, and Stanford."
      : "In-depth verified profiles of India's most iconic startup founders and unicorn companies. Real data, no PR.",
    url: base,
    inLanguage: isOrg ? "en" : "en-IN",
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    datePublished: "2026-03-01",
    dateModified: liveDate,
    image: { "@type": "ImageObject", url: "https://www.upforge.in/og/founder-chronicle.png", width: 1200, height: 630 },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    mainContentOfPage: {
      "@type": "WebPageElement",
      cssSelector: "main",
    },
  }
}

function buildDatasetSchema(liveDate: string, startupCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://www.upforge.org/#dataset",
    name: "UpForge Global Startup Registry Dataset (UFRN)",
    description: "Open, verified database of global startups. Each startup is manually reviewed and assigned a permanent UpForge Registry Number (UFRN). Updated continuously. Cited by Harvard, IIM Ahmedabad, and Stanford researchers.",
    url: "https://www.upforge.org/registry",
    creator: { "@type": "Organization", "@id": "https://www.upforge.org/#organization", name: "UpForge" },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["startups", "UFRN", "startup registry", "verified startups", "global startup database", "emerging markets", "unicorns", "venture capital"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number — unique startup identifier" },
      { "@type": "PropertyValue", name: "Verification Status", description: "Manual verification status by UpForge editorial team" },
      { "@type": "PropertyValue", name: "Funding", description: "Total funding raised (USD)" },
      { "@type": "PropertyValue", name: "Valuation", description: "Last known valuation (USD)" },
      { "@type": "PropertyValue", name: "Sector", description: "Primary business sector/category" },
    ],
    measurementTechnique: "Manual editorial verification by the UpForge research team",
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true,
    temporalCoverage: "2020/..",
    dateModified: liveDate,
    datePublished: "2026-03-01",
    spatialCoverage: { "@type": "Place", name: "Global" },
  }
}

function buildItemListSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#founderlist`,
    name: "Top Indian Startup Founders & Unicorn Profiles",
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
          a: "The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as independent proof of existence and legitimacy, allowing anyone to verify a startup at upforge.org/ufrn/[UFRN].",
        },
        {
          q: "How do I verify a startup using UFRN?",
          a: "Visit upforge.org/ufrn/[UFRN-ID] with the company's registry number, or search at upforge.org/registry. Every approved listing displays its UFRN prominently alongside verification status.",
        },
        {
          q: "Is UpForge free to use?",
          a: "Yes. UpForge is a free, independent startup registry. Both browsing the database and submitting a startup for verification are completely free of charge.",
        },
        {
          q: "How does UpForge verify startups?",
          a: "Each submission is manually reviewed by the UpForge editorial team for legitimacy, active operations, accurate data, and legal compliance before being approved and assigned a permanent UFRN.",
        },
        {
          q: "Which countries and regions are covered by the UpForge global registry?",
          a: "UpForge covers startups from all major global markets including India, Southeast Asia, Africa, Latin America, the Middle East, Europe, and North America — with particular depth in high-growth emerging markets.",
        },
        {
          q: "Who cites UpForge data?",
          a: "UpForge data has been cited by researchers at Harvard Business School, IIM Ahmedabad, Stanford Graduate School of Business, and ISB Hyderabad, among others.",
        },
      ]
    : [
        {
          q: "Who are the top startup founders in India in 2026?",
          a: "India's leading startup founders in 2026 include Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), Ritesh Agarwal (OYO), Lalit Keshre (Groww), Vidit Aatrey (Meesho), and Alakh Pandey (PhysicsWallah). UpForge profiles all of them with verified data.",
        },
        {
          q: "Which Indian startups are unicorns in 2026?",
          a: "Confirmed Indian unicorns include Zepto, CRED, Groww, Meesho, Nykaa (listed), PhysicsWallah, Rapido, Zerodha, OYO, and more. UpForge tracks all verified Indian unicorns with real funding data and timeline.",
        },
        {
          q: "How do I find verified startup data for India?",
          a: "Browse UpForge's verified Indian startup registry at upforge.in/registry. Filter by sector, city, funding stage, and founding year. All 5,000+ listings are manually verified by the editorial team.",
        },
        {
          q: "What is The Founder Chronicle by UpForge?",
          a: "The Founder Chronicle is UpForge's flagship editorial publication — weekly deep-dives into India's most iconic startup founders, featuring verified funding data, valuation milestones, and primary research-based analysis.",
        },
        {
          q: "How do I submit my startup to UpForge India?",
          a: "Submit your startup for free at upforge.in/submit. The editorial team reviews each application and assigns a UFRN (UpForge Registry Number) upon approval, typically within 3-5 business days.",
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

function buildNewsMediaSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "@id": `${base}/#newsmedia`,
    name: isOrg ? "UpForge Global Registry" : "UpForge — The Founder Chronicle",
    url: base,
    logo: { "@type": "ImageObject", url: "https://www.upforge.in/logo.jpg" },
    diversityPolicy: `${base}/about#diversity`,
    ethicsPolicy: `${base}/about#editorial`,
    masthead: `${base}/about`,
    publishingPrinciples: `${base}/about#editorial`,
    foundingDate: "2024",
    sameAs: ["https://twitter.com/upforge_in", "https://www.linkedin.com/company/upforge-india"],
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg = domain === "org"

  const [liveDate, startupCount] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
  ])

  const schemas = [
    buildOrganizationSchema(isOrg, liveDate),
    buildWebsiteSchema(isOrg),
    buildCollectionPageSchema(isOrg, liveDate),
    buildItemListSchema(isOrg),
    buildBreadcrumbSchema(isOrg),
    buildFAQSchema(isOrg),
    buildNewsMediaSchema(isOrg, liveDate),
    ...(isOrg ? [buildDatasetSchema(liveDate, startupCount)] : []),
  ]

  return (
    <>
      {/* ── JSON-LD Schemas ─────────────────────────────────────────────── */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* ── 1. GLOBE HERO ───────────────────────────────────────────────── */}
      <GlobeHero isOrg={isOrg} />

      {/* ── 2. TRUST BAR ────────────────────────────────────────────────── */}
      <TrustBar />

      {/* ── 3. TOP STORIES ──────────────────────────────────────────────── */}
      <TopStoriesSection />

      {/* ── 4. TOP VIDEOS ───────────────────────────────────────────────── */}
      <TopVideosSection />

      {/* ── 5. REVIEWS ──────────────────────────────────────────────────── */}
      <ReviewsSection />

      {/* ── 6. MISSION STRIP ────────────────────────────────────────────── */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: "#1a0a0a" }}
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#8b1a1a]" />
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: "linear-gradient(#c9b99a 1px, transparent 1px), linear-gradient(90deg, #c9b99a 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-4 mb-10">
            <div className="h-px w-16 bg-[#8b1a1a]" />
            <div className="w-2 h-2 bg-[#8b1a1a] rotate-45" />
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-semibold"
              style={{ color: "#c9b99a", fontFamily: "'Times New Roman', serif" }}
            >
              Our Mission
            </span>
            <div className="w-2 h-2 bg-[#8b1a1a] rotate-45" />
            <div className="h-px w-16 bg-[#8b1a1a]" />
          </div>

          <h2
            className="leading-tight mb-8"
            style={{
              fontFamily: "'Times New Roman', Georgia, 'Palatino Linotype', serif",
              fontSize: "clamp(32px, 4vw, 56px)",
              color: "#faf7f2",
              fontWeight: 700,
            }}
          >
            {isOrg
              ? <>Every startup deserves<br /><span style={{ color: "#c9b99a", fontStyle: "italic" }}>a verified identity.</span></>
              : <>The best insight comes<br /><span style={{ color: "#c9b99a", fontStyle: "italic" }}>from real research.</span></>}
          </h2>

          <p
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#c9b99a", opacity: 0.7 }}
          >
            {isOrg
              ? "We built UpForge because the world needed an independent, open, trustworthy registry for startups. No paywalls. No corporate bias. Just verified facts. Cited by Harvard, IIM, and Stanford."
              : "UpForge was built by researchers and founders who were tired of surface-level startup content. Every profile is verified. Every number is sourced. Every lesson is real."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-wider transition-all duration-200 hover:opacity-90"
              style={{
                background: "#8b1a1a",
                color: "#faf7f2",
                fontFamily: "'Times New Roman', Georgia, serif",
                letterSpacing: "0.06em",
                border: "1px solid #8b1a1a",
              }}
            >
              Our Story →
            </a>
            <a
              href="/submit"
              className="inline-flex items-center gap-2 px-10 py-4 text-sm font-semibold tracking-wider transition-all duration-200 hover:bg-white/5"
              style={{
                background: "transparent",
                color: "#faf7f2",
                fontFamily: "'Times New Roman', Georgia, serif",
                letterSpacing: "0.06em",
                border: "1px solid rgba(250,247,242,0.2)",
              }}
            >
              Join the Registry
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT LAYER — visible to crawlers ─────────────────────── */}
      <div className="sr-only" aria-label="SEO content">
        <section>
          <h1>
            {isOrg
              ? "Global Startup Registry — Verified UFRN Database | UpForge"
              : "Indian Startup Founders & Unicorn Stories 2026 — The Founder Chronicle"}
          </h1>
          <p>
            {isOrg
              ? "UpForge Global Registry provides verified proof of existence for startups worldwide through the UFRN system. Trusted by founders, investors, and researchers across 50+ countries. Cited by Harvard Business School, IIM Ahmedabad, and Stanford GSB."
              : "Explore the verified stories of India's unicorn founders and the journeys behind their multi-billion dollar companies. India's most cited startup publication, updated weekly."}
          </p>
          <nav aria-label="Founder profiles">
            <ul>
              {FOUNDERS.map((f) => (
                <li key={f.slug}>
                  <a href={`/startup/${f.slug}`}>{f.name} — {f.role} at {f.company}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Startup categories">
            <ul>
              <li><a href="/startups/fintech">Fintech Startups India 2026</a></li>
              <li><a href="/startups/edtech">Edtech Startups India 2026</a></li>
              <li><a href="/startups/ai">AI Startups India 2026</a></li>
              <li><a href="/startups/saas">SaaS Startups India 2026</a></li>
              <li><a href="/startups/d2c">D2C Startups India 2026</a></li>
              <li><a href="/startups/logistics">Logistics Startups India 2026</a></li>
              <li><a href="/startups/healthtech">Healthtech Startups India 2026</a></li>
              <li><a href="/startups/agritech">Agritech Startups India 2026</a></li>
              <li><a href="/registry">Global Startup Registry</a></li>
            </ul>
          </nav>
          <section>
            <h2>Top Indian Startup Founders</h2>
            <p>India's most impactful startup founders in 2026 include leaders from Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho, and PhysicsWallah. All profiles are manually verified by the UpForge editorial team.</p>
          </section>
          <section>
            <h2>Indian Unicorn Database 2026</h2>
            <p>UpForge tracks all verified Indian unicorns with confirmed valuations, funding rounds, and founder profiles — updated continuously by our editorial team.</p>
          </section>
          <section>
            <h2>Global Startup Registry Coverage</h2>
            <p>UpForge covers startups from India, Southeast Asia, Africa, Latin America, the Middle East, Europe, and North America. Every startup receives a permanent UFRN (UpForge Registry Number).</p>
          </section>
        </section>
      </div>
    </>
  )
}
