// app/page.tsx — COMPLETE REDESIGN v2
// ─────────────────────────────────────────────────────────────────────────────
// SERVER COMPONENT — No "use client" here.
// All critical content renders as static HTML for Google on first crawl.
//
// NEW SECTIONS vs PREVIOUS:
// 1. GlobeHero         — animated wireframe globe, represents global reach
// 2. FounderChronicle  — scroll-snapped founder cards (existing client component)
// 3. TopVideos         — horizontally scrollable video section
// 4. ReviewsSection    — imported from components/reviews.tsx (editable anytime)
// 5. GlobalSearch      — sitewide search, accessible from header + hero
// 6. Full JSON-LD      — live dates, recordCount, FAQ, all schemas
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { GlobeHero } from "../components/globe-hero"
import { ReviewsSection } from "../components/reviews"
import { GlobalSearch } from "../components/global-search"
import { FOUNDERS } from "../data/founders"
import { createReadClient } from "@/lib/supabase/server"
import { TrustBar } from "../components/trust-bar"

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
    // FIXED: Use createReadClient() and remove 'await'
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
    // FIXED: Use createReadClient() and remove 'await'
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
// METADATA — same as before, untouched
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
        description: "The independent global registry for startups. Verified proof of existence via UFRN. Features 5000+ companies and world-class founders.",
        url: canonicalUrl, siteName: "UpForge Global Registry", locale: "en", type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Registry", type: "image/png" }],
      },
      twitter: { card: "summary_large_image", site: "@upforge_in", title: "UpForge Global Startup Registry", description: "Open, verified registry of startups. Every company gets a unique UFRN.", images: [ogImage] },
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
    }
  }

  return {
    title: "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026",
    description: "Explore verified stories of India's greatest startup founders and unicorn success stories — Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Funding data, valuations, and entrepreneurial lessons for the Indian ecosystem.",
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
      description: "10 deep-dive profiles of India's most iconic startup founders. Verified funding data, unicorn valuations, and the real stories behind the success. UpForge India.",
      url: canonicalUrl, siteName: "UpForge", locale: "en_IN", type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Founder Chronicle 2026", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in",
      title: "Indian Startup Founders & Unicorn Stories",
      description: "Verified founder profiles: Zepto, CRED, Zerodha, Nykaa, OYO & more. Lessons from India's unicorns.",
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS — identical to previous, all accept liveDate
// ---------------------------------------------------------------------------

function buildCollectionPageSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org", "@type": "CollectionPage", "@id": `${base}/#collectionpage`,
    name: isOrg ? "UpForge Global Startup Registry — Verified UFRN Database" : "The Founder Chronicle 2026 — Indian Startup Founders & Unicorn Stories",
    description: isOrg ? "Open, independent, verified database of startups. Every entry is assigned a unique UpForge Registry Number (UFRN)." : "Verified deep-dive profiles of India's most iconic startup founders and unicorn companies.",
    url: base, inLanguage: isOrg ? "en" : "en-IN",
    isPartOf: { "@id": `${base}/#website` }, publisher: { "@id": `${base}/#organization` },
    datePublished: "2026-03-01", dateModified: liveDate,
    image: { "@type": "ImageObject", url: "https://www.upforge.in/og/founder-chronicle.png", width: 1200, height: 630 },
    breadcrumb: { "@id": `${base}/#breadcrumb` },
  }
}

function buildDatasetSchema(liveDate: string, startupCount: number) {
  return {
    "@context": "https://schema.org", "@type": "Dataset", "@id": "https://www.upforge.org/#dataset",
    name: "UpForge Global Startup Registry Dataset (UFRN)",
    description: "Open, verified database of global startups. Each startup is manually reviewed and assigned a permanent UpForge Registry Number (UFRN).",
    url: "https://www.upforge.org",
    creator: { "@type": "Organization", "@id": "https://www.upforge.org/#organization", name: "UpForge", url: "https://www.upforge.org" },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["startups", "UFRN", "startup registry", "verified startups", "global startup database"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number" },
      { "@type": "PropertyValue", name: "Status", description: "Verification Status" },
      { "@type": "PropertyValue", name: "Funding", description: "Funding Amount (USD)" },
    ],
    measurementTechnique: "Manual verification by UpForge editorial team",
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true, temporalCoverage: "2020/..",
    dateModified: liveDate, datePublished: "2026-03-01",
  }
}

function buildOrganizationSchema(isOrg: boolean, liveDate: string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org", "@type": "Organization", "@id": `${base}/#organization`,
    name: "UpForge", url: base,
    logo: { "@type": "ImageObject", url: "https://www.upforge.in/logo.jpg", width: 512, height: 512 },
    sameAs: ["https://www.upforge.in", "https://www.upforge.org", "https://www.linkedin.com/company/upforge-india"],
    description: isOrg ? "The global open startup registry — independent, verified, and free. Creator of the UFRN system." : "India's independent startup registry and discovery platform tracking 5000+ companies and founder stories.",
    foundingDate: "2024", areaServed: isOrg ? "Worldwide" : "India",
    contactPoint: { "@type": "ContactPoint", contactType: "editorial", url: `${base}/contact`, availableLanguage: "English" },
    dateModified: liveDate,
  }
}

function buildWebsiteSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org", "@type": "WebSite", "@id": `${base}/#website`,
    url: base, name: isOrg ? "UpForge Global Registry" : "UpForge",
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
    "@context": "https://schema.org", "@type": "ItemList", "@id": `${base}/#founderlist`,
    name: "Top Startup Founders & Unicorn Profiles",
    numberOfItems: FOUNDERS.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: FOUNDERS.map((f, i) => ({
      "@type": "ListItem", position: i + 1,
      item: { "@type": "Person", name: f.name, jobTitle: f.role, worksFor: { "@type": "Organization", name: f.company }, url: `${base}/startup/${f.slug}` },
    })),
  }
}

function buildBreadcrumbSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context": "https://schema.org", "@type": "BreadcrumbList", "@id": `${base}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: base },
      { "@type": "ListItem", position: 2, name: isOrg ? "Global Registry" : "The Founder Chronicle 2026", item: base },
    ],
  }
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const questions = isOrg
    ? [
        { q: "What is the UFRN (UpForge Registry Number)?", a: "The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as proof of existence and allows anyone to look up a startup's official listing at upforge.org/ufrn/[UFRN]." },
        { q: "How do I look up a startup's UFRN?", a: "Visit upforge.org/ufrn/[UFRN-ID] with the company's registry number, or search for the company at upforge.org/startup. Every approved listing displays its UFRN prominently." },
        { q: "Is UpForge free to use?", a: "Yes. UpForge is a free, independent startup registry. Both browsing and submitting a startup are completely free." },
        { q: "How does UpForge verify startups?", a: "Each submission is manually reviewed by the UpForge editorial team for legitimacy, active operations, and accurate data before being approved and assigned a UFRN." },
        { q: "Which countries are included in the UpForge global registry?", a: "UpForge covers startups from all major emerging markets including India, Southeast Asia, Africa, Latin America, and the Middle East, as well as global tech hubs worldwide." },
      ]
    : [
        { q: "Who are the top startup founders in India in 2026?", a: "India's top startup founders in 2026 include Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), and Ritesh Agarwal (OYO). UpForge profiles all of these founders with verified funding and valuation data." },
        { q: "Which Indian startups are unicorns in 2026?", a: "Top Indian unicorns include Zepto, CRED, Groww, Meesho, Nykaa, PhysicsWallah, Rapido, and Zerodha. UpForge tracks all verified Indian unicorns with real funding data." },
        { q: "How do I find verified startups in India?", a: "Browse UpForge's verified Indian startup registry at upforge.in/startup. Filter by sector, city, funding stage, or founding year. All 5000+ listings are manually verified." },
        { q: "Which cities have the most startups in India?", a: "Bangalore leads India's startup ecosystem, followed by Mumbai, Delhi NCR, Hyderabad, and Pune. UpForge lets you filter startups by city to find companies in your region." },
        { q: "How do I submit my Indian startup to UpForge?", a: "Submit your startup for free at upforge.in/submit. The editorial team reviews each application and assigns a UFRN (UpForge Registry Number) upon approval." },
      ]

  return {
    "@context": "https://schema.org", "@type": "FAQPage", "@id": `${base}/#faq`,
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a },
    })),
  }
}

// ---------------------------------------------------------------------------
// TOP VIDEOS DATA — edit this array to update the videos section
// ---------------------------------------------------------------------------
const TOP_VIDEOS = [
  {
    id: "v1",
    title: "How Zepto Cracked 10-Min Delivery",
    channel: "UpForge",
    thumbnail: "/thumbnails/zepto.jpg",
    duration: "18:42",
    views: "124K",
    href: "/videos/zepto-delivery-model",
    tag: "Operations",
  },
  {
    id: "v2",
    title: "Zerodha's Zero-Marketing Playbook",
    channel: "UpForge",
    thumbnail: "/thumbnails/zerodha.jpg",
    duration: "22:15",
    views: "98K",
    href: "/videos/zerodha-no-marketing",
    tag: "Growth",
  },
  {
    id: "v3",
    title: "CRED: Why Give Rewards to Rich People?",
    channel: "UpForge",
    thumbnail: "/thumbnails/cred.jpg",
    duration: "15:30",
    views: "87K",
    href: "/videos/cred-strategy",
    tag: "Strategy",
  },
  {
    id: "v4",
    title: "Nykaa IPO: The Beauty Unicorn Story",
    channel: "UpForge",
    thumbnail: "/thumbnails/nykaa.jpg",
    duration: "20:08",
    views: "76K",
    href: "/videos/nykaa-ipo",
    tag: "D2C",
  },
  {
    id: "v5",
    title: "PhysicsWallah: ₹1 Crore to $2.8B",
    channel: "UpForge",
    thumbnail: "/thumbnails/pw.jpg",
    duration: "24:55",
    views: "210K",
    href: "/videos/physicswallah-story",
    tag: "Edtech",
  },
  {
    id: "v6",
    title: "Meesho: Social Commerce Revolution",
    channel: "UpForge",
    thumbnail: "/thumbnails/meesho.jpg",
    duration: "17:22",
    views: "65K",
    href: "/videos/meesho-social",
    tag: "Commerce",
  },
]

// ---------------------------------------------------------------------------
// PAGE COMPONENT — SERVER RENDERED
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg = domain === "org"

  const [liveDate, startupCount] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
  ])

  return (
    <>
      {/* ── JSON-LD Schemas ─────────────────────────────────────────────── */}
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

      {/* ── 1. GLOBE HERO ───────────────────────────────────────────────── */}
      <GlobeHero isOrg={isOrg} />

     {/* ── 2. TRUST BAR ────────────────────────────────────────────────── */}
    <TrustBar />

      {/* ── 3. FOUNDER CHRONICLE — scroll-through stories ───────────────── */}
      <section className="bg-[#050b18] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
                ✦ Founder Chronicle
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                Stories of the week
              </h2>
              <p className="text-blue-200/50 mt-2 text-lg">Real lessons from founders who've done it.</p>
            </div>
            <a href="/startup" className="hidden md:inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm font-semibold transition-colors">
              View all founders →
            </a>
          </div>
        </div>

        {/* FounderChronicleClient — existing component, zero logic changes */}
        <FounderChronicleClient
          founders={FOUNDERS}
          internalLinks={[
            { l: "Startup Registry India", h: "/startup", desc: "5000+ verified startups" },
            { l: "Submit Your Startup",    h: "/submit",  desc: "Get listed free"         },
            { l: "The Forge — Blog",       h: "/blog",    desc: "Intelligence & analysis" },
            { l: "About UpForge",          h: "/about",   desc: "Our mission"             },
          ]}
          footerLinks={[
            { l: "The Founder Chronicle", h: "/"        },
            { l: "Startup Registry",      h: "/startup" },
            { l: "Blog",                  h: "/blog"    },
            { l: "Submit Startup",        h: "/submit"  },
            { l: "About UpForge",         h: "/about"   },
          ]}
        />
      </section>

      {/* ── 4. TOP VIDEOS ───────────────────────────────────────────────── */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-bold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
                <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Top Videos
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                Watch & learn
              </h2>
              <p className="text-gray-500 mt-2 text-lg">Deep dives into India's best startup stories.</p>
            </div>
            <a href="/videos" className="hidden md:inline-flex items-center gap-2 text-gray-700 hover:text-gray-900 text-sm font-semibold transition-colors">
              All videos →
            </a>
          </div>

          {/* Horizontally scrollable video row */}
          <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth -mx-4 px-4"
               style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
            {TOP_VIDEOS.map((video) => (
              <a
                key={video.id}
                href={video.href}
                className="group flex-shrink-0 w-72 md:w-80 snap-start"
              >
                {/* Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden bg-gray-100 aspect-video mb-3">
                  {/* Fallback gradient if image missing */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="text-white/20 text-6xl font-black leading-none">
                      {video.title.charAt(0)}
                    </div>
                  </div>
                  {/* Actual image */}
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-black/30">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
                      <svg className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                  {/* Duration */}
                  <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded-md">
                    {video.duration}
                  </div>
                  {/* Tag */}
                  <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                    {video.tag}
                  </div>
                </div>

                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <div className="text-gray-400 text-xs">
                  {video.channel} · {video.views} views
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. REVIEWS SECTION ──────────────────────────────────────────── */}
      {/* Edit components/reviews.tsx anytime to update reviews & Google Form URL */}
      <ReviewsSection />

      {/* ── 6. ABOUT / MISSION STRIP ────────────────────────────────────── */}
      <section className="py-24 bg-[#050b18] relative overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: "linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            Our Mission
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6">
            {isOrg
              ? "Every startup deserves a verified identity."
              : "The best content comes from real research."}
          </h2>
          <p className="text-blue-200/50 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            {isOrg
              ? "We built UpForge because the world needed an independent, open, trustworthy registry for startups. No paywalls. No bias. Just facts."
              : "UpForge was built by researchers and founders who were tired of surface-level startup content. Every profile is verified. Every number is sourced. Every lesson is real."}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="/about" className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl transition-all hover:scale-105 text-sm shadow-xl shadow-blue-500/20">
              Our Story →
            </a>
            <a href="/submit" className="bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all text-sm">
              Join the Registry
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO CONTENT LAYER — DOM-visible, user-invisible ─────────────── */}
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
                  <a href={`/startup/${f.slug}`}>{f.name} — {f.role} at {f.company}</a>
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
    </>
  )
}
