// app/page.tsx  ←  SERVER COMPONENT
// CRITICAL: No "use client" here.
// All 10 founder stories render as static HTML — visible to Google on first crawl.
//
// DUAL-DOMAIN SEO STRATEGY:
// upforge.org  → canonical = .org | global authority | Wikipedia/Dataset signals
// upforge.in   → canonical = .in  | India marketing hub | local SEO
// Same page, same content, different canonical + schema signals per domain.

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "@/components/founder-chronicle-client"
import { FOUNDERS } from "@/data/founders"

// ---------------------------------------------------------------------------
// DOMAIN DETECTION HELPER
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

// ---------------------------------------------------------------------------
// METADATA — domain-aware
// .org → global authority signals, Dataset, Wikipedia-style
// .in  → India marketing, high-volume Indian startup keywords
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg  = domain === "org"

  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage      = isOrg
    ? "https://www.upforge.in/og/founder-chronicle.png"
    : "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    // ── .ORG metadata: global authority, open data, Wikipedia-style ────────
    return {
      title: "UpForge Global Startup Registry — Verified Startup Database | upforge.org",
      description:
        "The open, independent, verified global registry of startups. Every listing is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Free to access, forever. Featuring India's top startup founders — Zepto, Sarvam AI, CRED, Zerodha, Nykaa, OYO, Groww, Meesho, PhysicsWallah.",
      keywords: [
        "global startup registry",
        "verified startup database",
        "UFRN startup registry number",
        "open startup data",
        "startup proof of existence",
        "independent startup registry",
        "Indian startup founders 2026",
        "India unicorn founders",
        "startup registry org",
        "upforge registry",
        "startup verification",
        "startup database open source",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "UpForge Global Startup Registry — Verified Startup Database",
        description:
          "Open, independent, verified registry of startups worldwide. Every startup gets a unique UFRN. Features India's greatest founders — Zepto, Sarvam AI, CRED, and more.",
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
        description: "Open, verified registry of startups. Every startup gets a UFRN. India's top founders inside.",
        images: [ogImage],
      },
      robots: {
        index: true, follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
      },
    }
  }

  // ── .IN metadata: India marketing hub, high-volume keywords ──────────────
  return {
    title: "The Founder Chronicle 2026 — India's Greatest Startup Founders | UpForge",
    description:
      "Verified stories of India's most iconic startup founders — Zepto, Zerodha, Nykaa, CRED, OYO, Sarvam AI, PhysicsWallah, Groww, Meesho & more. Deep-dive profiles, funding data, and founder lessons. March 2026 edition by UpForge.",
    keywords: [
      "Aadit Palicha Zepto founder",
      "Vivek Raghavan Sarvam AI",
      "Indian startup founders 2026",
      "India unicorn founders",
      "Zepto founder story",
      "Sarvam AI founder story",
      "CRED founder story",
      "Zerodha founder story",
      "Nykaa founder story",
      "OYO founder story",
      "Groww founder story",
      "Meesho founder story",
      "PhysicsWallah founder story",
      "how was Zepto built",
      "India startup success stories 2026",
      "Indian startup founders to watch 2026",
      "Indian unicorn list 2026",
      "best startup stories India",
      "startup founder profiles India",
      "Indian entrepreneur stories",
      "UpForge Founder Chronicle",
      "UpForge startup registry",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "The Founder Chronicle 2026 — India's Greatest Startup Founders | UpForge",
      description:
        "10 verified founder stories from India's most consequential startups — Zepto, Sarvam AI, CRED, Zerodha, Nykaa, OYO, and more. Free. Deep. Verified. UpForge.",
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
      title: "The Founder Chronicle 2026 — India's Greatest Startup Founders",
      description: "10 deep-dive profiles: Zepto, Sarvam AI, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Verified. Free. UpForge.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS — domain-aware
// ---------------------------------------------------------------------------

function buildCollectionPageSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${base}/#collectionpage`,
    name: isOrg
      ? "UpForge Global Startup Registry — Verified Startup Database"
      : "The Founder Chronicle 2026 — India's Greatest Startup Founders",
    description: isOrg
      ? "Open, independent, verified database of startups from India and beyond. Every startup is assigned a unique UpForge Registry Number (UFRN)."
      : "Verified deep-dive profiles of India's most iconic startup founders. Published by UpForge, March 2026.",
    url: base,
    inLanguage: isOrg ? "en" : "en-IN",
    isPartOf: { "@id": `${base}/#website` },
    publisher: { "@id": `${base}/#organization` },
    datePublished: "2026-03-01",
    dateModified: new Date().toISOString().split("T")[0],
    image: { "@type": "ImageObject", url: "https://www.upforge.in/og/founder-chronicle.png", width: 1200, height: 630 },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
    keywords: isOrg
      ? "global startup registry, UFRN, verified startups, startup database, open data"
      : "Indian startup founders, unicorn founders India, Zepto, Sarvam AI, CRED, Zerodha, Nykaa, startup stories India 2026",
    about: isOrg
      ? [{ "@type": "Thing", name: "Startup Registry" }, { "@type": "Thing", name: "UFRN" }, { "@type": "Dataset", name: "Global Startup Database" }]
      : [{ "@type": "Thing", name: "Startup Founders" }, { "@type": "Thing", name: "Indian Startups" }, { "@type": "Thing", name: "Unicorn Companies" }, { "@type": "Country", name: "India" }],
  }
}

// Dataset schema — ONLY for .org — tells Google this is a citable scientific database
// This is what makes Google treat UpForge like Wikipedia in SGE/AI Overviews
function buildDatasetSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://www.upforge.org/#dataset",
    name: "UpForge Global Startup Registry Dataset",
    description:
      "Open, verified database of startups from India and beyond. Each startup is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Free to access under CC BY 4.0.",
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
    keywords: ["startups", "startup registry", "Indian startups", "UFRN", "verified startups", "unicorns", "global startup database"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number — unique identifier per startup" },
      { "@type": "PropertyValue", name: "Founded Year" },
      { "@type": "PropertyValue", name: "Category / Sector" },
      { "@type": "PropertyValue", name: "Country" },
      { "@type": "PropertyValue", name: "Funding Stage" },
    ],
    isAccessibleForFree: true,
    temporalCoverage: "2020/..",
    spatialCoverage: { "@type": "Place", name: "India" },
  }
}

// Organization schema — .org version is the "master" authority node
function buildOrganizationSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "UpForge",
    url: base,
    logo: { "@type": "ImageObject", url: "https://www.upforge.in/logo.jpg" },
    sameAs: [
      "https://www.upforge.in",
      "https://www.upforge.org",
      "https://www.linkedin.com/company/upforge-india",
      "https://www.youtube.com/@upforge-ind",
    ],
    description: isOrg
      ? "UpForge is the global open startup registry — independent, verified, and free. Every startup is assigned a UFRN (UpForge Registry Number)."
      : "UpForge is India's independent startup registry and discovery platform — tracking 5000+ companies, founder stories, and ecosystem trends.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    knowsAbout: ["Startups", "Venture Capital", "Indian Startup Ecosystem", "Startup Founders", "UFRN"],
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
  }
}

function buildItemListSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#founderlist`,
    name: "India's Top Startup Founders 2026 — Verified Profiles",
    numberOfItems: FOUNDERS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: FOUNDERS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${f.name} — ${f.company}`,
      url: `${base}/startup/${f.slug}`,
      description: f.deck,
      item: {
        "@type": "Person",
        name: f.name,
        jobTitle: f.role,
        worksFor: { "@type": "Organization", name: f.company, url: `${base}/startup/${f.slug}` },
        description: f.deck,
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
      { "@type": "ListItem", position: 2, name: isOrg ? "Global Registry" : "The Founder Chronicle 2026", item: base },
    ],
  }
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const registryUrl = `${base}/startup`

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "Who are the top startup founders in India in 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "India's top startup founders in 2026 include Aadit Palicha (Zepto, $5.9B valuation), Vivek Raghavan (Sarvam AI, India's first sovereign LLM unicorn), and founders behind CRED, Zerodha, Nykaa, OYO, Groww, Meesho, and PhysicsWallah. UpForge's Founder Chronicle profiles all 10 with verified data.",
        },
      },
      {
        "@type": "Question",
        name: "Who founded Zepto and how was it built?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Zepto was founded in 2021 by Aadit Palicha and Kaivalya Vohra, both Stanford dropouts aged 19 at the time. They first built KiranaKart (which failed), then pivoted to a dark-store model enabling 10-minute grocery delivery. By 2025, Zepto reached a $5.9 billion valuation, making them India's youngest billion-dollar founders.",
        },
      },
      {
        "@type": "Question",
        name: "What is Sarvam AI and who are its founders?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sarvam AI is India's first AI unicorn, founded in 2023 by Vivek Raghavan and Pratyush Kumar in Bengaluru. It builds large language models (LLMs) designed for Indian languages and use cases. In 2025, the Indian government selected Sarvam AI under the IndiaAI Mission to build India's sovereign LLM.",
        },
      },
      {
        "@type": "Question",
        name: isOrg ? "What is the UFRN (UpForge Registry Number)?" : "Which Indian startups became unicorns in 2025–2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isOrg
            ? "The UFRN (UpForge Registry Number) is every startup's official global identity — a unique, permanent identifier in the format UF-YYYY-IND-XXXXX (e.g. UF-2026-IND-00001). It is assigned to every approved startup in the UpForge Global Registry and can be embedded on the startup's website, LinkedIn, and investor materials as proof of existence."
            : "Notable Indian unicorns in 2025–2026 include Zepto ($5.9B), Sarvam AI ($1B+), Rapido, Porter, and Spinny. UpForge tracks all 126 Indian unicorns in its verified startup registry.",
        },
      },
      {
        "@type": "Question",
        name: "What is UpForge and how does it work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: isOrg
            ? "UpForge is the global open startup registry — independent, verified, and free. Every startup submitted to UpForge is manually reviewed and, upon approval, assigned a permanent UFRN (UpForge Registry Number). The registry is accessible at upforge.org and upforge.in, serving founders, investors, journalists, and researchers worldwide."
            : "UpForge is India's independent startup registry and discovery platform. It tracks 5000+ Indian startups across sectors including AI, fintech, edtech, quick commerce, mobility, SaaS, and D2C. Startups can submit for free at upforge.in/submit and receive a verified profile with a permanent URL.",
        },
      },
      {
        "@type": "Question",
        name: "How can I find verified information about Indian startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `UpForge maintains India's most comprehensive verified startup registry with data on 5000+ companies. You can search by sector, city, funding stage, or founder name at ${registryUrl}. The platform covers AI startups, fintech companies, edtech platforms, quick commerce startups, mobility companies, and SaaS businesses.`,
        },
      },
    ],
  }
}

// ---------------------------------------------------------------------------
// INTERNAL LINKS
// ---------------------------------------------------------------------------
const HOMEPAGE_INTERNAL_LINKS = [
  { l: "Startup Registry India",   h: "/startup", desc: "5000+ verified startups" },
  { l: "Submit Your Startup",      h: "/submit",  desc: "Get listed free"         },
  { l: "The Forge — Startup Blog", h: "/blog",    desc: "Intelligence & analysis" },
  { l: "About UpForge",            h: "/about",   desc: "Our mission"             },
]

const FOOTER_NAV_LINKS = [
  { l: "The Founder Chronicle", h: "/"        },
  { l: "Startup Registry",      h: "/startup" },
  { l: "Blog",                  h: "/blog"    },
  { l: "Submit Startup",        h: "/submit"  },
  { l: "About UpForge",         h: "/about"   },
]

// ---------------------------------------------------------------------------
// PAGE COMPONENT — SERVER RENDERED
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg  = domain === "org"
  const base   = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  return (
    <>
      {/* ── Organization (domain-aware, .org = global authority node) ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg)) }} />

      {/* ── WebSite with SearchAction ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />

      {/* ── Dataset schema — ONLY on .org — Wikipedia/citable database signal ── */}
      {isOrg && (
        <script type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDatasetSchema()) }} />
      )}

      {/* ── CollectionPage ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(isOrg)) }} />

      {/* ── ItemList (rich carousel eligibility) ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(isOrg)) }} />

      {/* ── BreadcrumbList ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(isOrg)) }} />

      {/* ── FAQPage — highest CTR schema type ── */}
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }} />

      {/* FounderChronicleClient — all UI, tabs, videos, interactions */}
      <FounderChronicleClient
        founders={FOUNDERS}
        internalLinks={HOMEPAGE_INTERNAL_LINKS}
        footerLinks={FOOTER_NAV_LINKS}
      />

      {/*
        ══════════════════════════════════════════════════════════════════════
        SERVER-RENDERED SEO CONTENT LAYER
        sr-only = clip-based hide (NOT display:none — Google penalises that)
        ══════════════════════════════════════════════════════════════════════
      */}
      <div className="sr-only" aria-label="Full editorial index — screen reader and search engine content">

        {/* ── 1. Founder profiles index ── */}
        <section aria-label="All founder profiles in this edition">
          <h1>
            {isOrg
              ? "UpForge Global Startup Registry — Verified Startup Database"
              : "The Founder Chronicle 2026 — India's Greatest Startup Founders"}
          </h1>
          <p>
            {isOrg
              ? "UpForge Global Registry is the open, independent, verified database of startups from India and beyond. Every startup is assigned a unique UFRN (UpForge Registry Number). The March 2026 edition features India's most iconic startup founders."
              : "UpForge's Founder Chronicle is India's most detailed editorial series on startup founders. The March 2026 edition profiles 10 of India's most iconic entrepreneurs — covering their origin stories, funding journeys, company valuations, and the hard-won lessons behind India's most valuable startups."}
          </p>
          <h2>Startup Founders Featured</h2>
          <ul>
            {FOUNDERS.map((f) => (
              <li key={f.slug}>
                <a href={`/startup/${f.slug}`}>
                  {f.name} — {f.company} — {f.role} — {f.city}
                </a>
                <p>{f.deck}</p>
                <p>{f.headline}</p>
                <p>Founded: {f.founded} · Valuation: {f.valuation} · Funding: {f.funding} · Sector: {f.category}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 2. .org only: UFRN explanation for Knowledge Graph ── */}
        {isOrg && (
          <section aria-label="About the UFRN Registry System">
            <h2>What is the UFRN — UpForge Registry Number?</h2>
            <p>
              The UFRN (UpForge Registry Number) is a unique, permanent identifier assigned to every
              approved startup in the UpForge Global Registry. Format: UF-YYYY-IND-XXXXX
              (e.g. UF-2026-IND-00001). It works like a company registration number for the internet —
              a third-party, verified proof of existence that founders can share on LinkedIn, investor
              decks, and their website. When investors or journalists search a startup's UFRN,
              they land on UpForge — creating a proprietary SEO moat for the platform.
            </p>
            <h3>How to get a UFRN</h3>
            <p>
              Submit your startup at upforge.in/submit. After manual review (3–5 days), approved
              startups receive a permanent profile URL and their UFRN via email, along with
              a digital Certificate of Existence.
            </p>
          </section>
        )}

        {/* ── 3. Sector index ── */}
        <section aria-label="Indian startup sectors covered">
          <h2>Indian Startup Sectors Covered by UpForge</h2>
          <ul>
            <li>Artificial Intelligence startups India — Sarvam AI, Krutrim AI</li>
            <li>Quick Commerce startups India — Zepto, Blinkit, Swiggy Instamart</li>
            <li>Fintech startups India — Zerodha, CRED, Groww, Paytm, Razorpay</li>
            <li>Edtech startups India — PhysicsWallah, BYJU'S, Unacademy</li>
            <li>Social Commerce India — Meesho, DealShare</li>
            <li>Mobility startups India — Ola, Rapido, Porter, BluSmart</li>
            <li>D2C and Beauty startups India — Nykaa, Mamaearth, Sugar Cosmetics</li>
            <li>Hospitality and Travel startups India — OYO, MakeMyTrip, Zostel</li>
            <li>Logistics startups India — Porter, Delhivery, Shadowfax</li>
            <li>SaaS startups India — Freshworks, Zoho, Chargebee, Clevertap</li>
          </ul>
        </section>

        {/* ── 4. FAQ ── */}
        <section aria-label="Frequently asked questions about Indian startup founders">
          <h2>Frequently Asked Questions — Indian Startup Founders 2026</h2>
          <article>
            <h3>Who are the top startup founders in India in 2026?</h3>
            <p>India's top startup founders in 2026 include Aadit Palicha (Zepto, $5.9B), Vivek Raghavan (Sarvam AI), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), Kunal Shah (CRED), Ritesh Agarwal (OYO), Vijay Shekhar Sharma (Paytm), and Bhavish Aggarwal (Ola). UpForge profiles all 10 with verified data.</p>
          </article>
          <article>
            <h3>Who founded Zepto and how old are its founders?</h3>
            <p>Zepto was co-founded by Aadit Palicha (CEO) and Kaivalya Vohra (CTO) in 2021. Both dropped out of Stanford University at age 19. By 2025, Zepto reached a $5.9 billion valuation and Kaivalya Vohra became India's youngest billionaire at 22.</p>
          </article>
          {isOrg && (
            <article>
              <h3>What is the UFRN and how does it work?</h3>
              <p>The UFRN (UpForge Registry Number) is a unique startup ID in format UF-YYYY-IND-XXXXX assigned to every approved startup on UpForge. It is a permanent, verified proof of existence — shareable on LinkedIn, websites, and investor decks. Submit at upforge.in/submit to receive yours.</p>
            </article>
          )}
          <article>
            <h3>What is the UpForge Founder Chronicle?</h3>
            <p>The Founder Chronicle is UpForge's flagship editorial series featuring deep-dive, verified profiles of India's most influential startup founders. Each edition covers 10 founders with funding history, company valuations, origin stories, and the lessons behind their success.</p>
          </article>
          <article>
            <h3>How do I find verified data on Indian startups?</h3>
            <p>UpForge is India's independent verified startup registry with data on 5000+ companies. Search by sector, city, funding stage, or founder name at {base}/startup.</p>
          </article>
        </section>

        {/* ── 5. About ── */}
        <section aria-label="About UpForge">
          <h2>About UpForge — {isOrg ? "Global Startup Registry" : "India's Verified Startup Registry"}</h2>
          <p>
            {isOrg
              ? "UpForge is the world's open startup registry — independent, verified, and free. The platform assigns a unique UFRN (UpForge Registry Number) to every approved startup and maintains an open dataset of global startups, with particular depth on the Indian startup ecosystem."
              : "UpForge is India's independent startup registry and discovery platform, tracking 5000+ Indian startups across AI, fintech, edtech, quick commerce, mobility, logistics, SaaS, D2C, and deep tech."}
          </p>
        </section>

        {/* ── 6. Internal links ── */}
        <section aria-label="Explore Indian startups by category">
          <h2>Explore Indian Startups on UpForge</h2>
          <ul>
            {HOMEPAGE_INTERNAL_LINKS.map((lnk) => (
              <li key={lnk.h}><a href={lnk.h}>{lnk.l}</a> — {lnk.desc}</li>
            ))}
          </ul>
          <h2>Individual Founder Profiles</h2>
          <ul>
            {FOUNDERS.map((f) => (
              <li key={`link-${f.slug}`}>
                <a href={`/startup/${f.slug}`}>{f.name} — {f.company} founder story</a>
                {" "}· {f.category} · {f.city} · Valuation {f.valuation}
              </li>
            ))}
          </ul>
        </section>

      </div>
    </>
  )
}
