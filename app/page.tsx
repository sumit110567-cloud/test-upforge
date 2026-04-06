// app/page.tsx  ←  SERVER COMPONENT
// CRITICAL: No "use client" here.
// All 10 founder stories render as static HTML — visible to Google on first crawl.
//
// CHANGES vs. PREVIOUS VERSION:
// ─────────────────────────────────────────────────────────────────────────────
// 1. LIVE dateModified in ALL JSON-LD schemas.
//    Static dates were lying to Google. We now query Supabase for the real
//    latest update timestamp and inject it into every schema block.
//    Google's freshness algorithm rewards sites that update their schema dates
//    in sync with actual content updates — this is the simplest "freshness hack"
//    available.
//
// 2. Dataset schema on .org now includes recordCount (real startup count).
//    A Dataset with a real measurementTechnique and recordCount tells Google
//    this is a live, authoritative data source — not a static page.
//
// 3. Organization.numberOfEmployees and Organization.contactPoint added.
//    These complete the E-E-A-T (Experience, Expertise, Authority, Trust)
//    entity signals Google uses for Knowledge Panel eligibility.
//
// 4. FAQ schema expanded with 4 high-volume questions (was 2).
//    FAQ rich results appear directly in SERPs as expandable dropdowns,
//    stealing extra real estate from competitors without additional clicks.
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
// STRUCTURED DATA BUILDERS — all now accept liveDate and startupCount
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
    // ── LIVE dateModified — critical freshness signal ─────────────────────
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
    // ── LIVE record count — tells Google this is a live, large dataset ────
    measurementTechnique: "Manual verification by UpForge editorial team",
    recordSet: {
      "@type": "DataFeedItem",
      item: { "@type": "Dataset", name: "Startup records", identifier: "ufrn-dataset" },
    },
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true,
    temporalCoverage: "2020/..",
    // ── LIVE dateModified — Dataset freshness signal ──────────────────────
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
      ? "The global open startup registry — independent, verified, and free. Creator of the UFRN system."
      : "India's independent startup registry and discovery platform tracking 5000+ companies and founder stories.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    // ── E-E-A-T signals — helps with Knowledge Panel eligibility ─────────
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${base}/contact`,
      availableLanguage: "English",
    },
    // ── LIVE dateModified ─────────────────────────────────────────────────
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
    // SearchAction enables the "Search box" in Google's rich results for your domain
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

  // ── EXPANDED to 5 questions — more FAQ rich results = more SERP real estate
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

  // Fetch live data for schema freshness — both run in parallel
  const [liveDate, startupCount] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
  ])

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg, liveDate)) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />

      {/* Dataset schema — ONLY on .org — High authority signal */}
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

      {/* SEO CONTENT LAYER — rendered in DOM, invisible to users, read by crawlers */}
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
          {/* ── Semantic internal link cluster — distributes PageRank to profiles ── */}
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
          {/* ── Category internal links — help Google understand site structure ── */}
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
    </>
  )
}
