import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"

async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const context = headersList.get("x-upforge-domain")
  if (context === "org" || context === "in") return context as "org" | "in"
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

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

async function getLatestStartups(): Promise<Array<{ name: string; sector: string; country: string; stage: string; slug: string }>> {
  try {
    const supabase = await createClient()
    const { data } = await supabase
      .from("startups")
      .select("name, sector, country, stage, slug")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(6)
    if (data && data.length > 0) return data
  } catch (_) {}
  return [
    { name: "Zepto", sector: "Quick Commerce", country: "India", stage: "Series F", slug: "zepto" },
    { name: "CRED", sector: "Fintech", country: "India", stage: "Series F", slug: "cred" },
    { name: "Groww", sector: "Wealthtech", country: "India", stage: "Series F", slug: "groww" },
    { name: "Meesho", sector: "E-Commerce", country: "India", stage: "Series F", slug: "meesho" },
    { name: "PhysicsWallah", sector: "Edtech", country: "India", stage: "Series B", slug: "physicswallah" },
    { name: "Rapido", sector: "Mobility", country: "India", stage: "Series D", slug: "rapido" },
  ]
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "UpForge — Global Startup Registry | Discover Startups Before They Become Unicorns",
      description:
        "The world's open startup registry. Verified founders, breakout companies, and emerging innovations. Every startup gets a unique UFRN. 5000+ listings. Free to browse and submit.",
      keywords: [
        "global startup registry", "verified startup database", "UFRN registry",
        "UpForge Registry Number", "open startup data", "startup discovery platform",
        "startup proof of existence", "independent startup registry", "startup verification",
        "global founder database", "startup identity number", "verified startup number",
        "discover startups", "startup unicorn early discovery",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "UpForge — Discover Startups Before They Become Unicorns",
        description: "The open global registry for startups. Verified proof of existence via UFRN. 5000+ companies worldwide.",
        url: canonicalUrl,
        siteName: "UpForge Global Registry",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Registry", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge_in",
        title: "UpForge — Global Startup Registry",
        description: "Discover startups before they become unicorns. Open, verified, free.",
        images: [ogImage],
      },
      robots: {
        index: true, follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
      },
    }
  }

  return {
    title: "UpForge — Discover India's Next Unicorns | Startup Registry & Founder Stories",
    description:
      "Discover India's breakout startups and verified founder stories. Zepto, CRED, Zerodha, Nykaa, OYO, Groww & 5000+ more. Real funding data, valuations, and founder lessons. The Founder Chronicle 2026.",
    keywords: [
      "Indian startup discovery", "India unicorn startups 2026", "startup founders India",
      "Aadit Palicha Zepto", "Kunal Shah CRED", "Nithin Kamath Zerodha",
      "Falguni Nayar Nykaa", "Indian unicorn list 2026", "startup registry India",
      "best startup stories India", "Indian entrepreneur profiles", "UpForge Founder Chronicle",
      "top founders India 2026", "discover startups India",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "UpForge — Discover India's Next Unicorns",
      description: "India's verified startup registry and founder discovery platform. 5000+ companies. Real data.",
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
      title: "UpForge — India's Startup Discovery Platform",
      description: "Verified founder profiles: Zepto, CRED, Zerodha, Nykaa & 5000+ more startups.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

function buildWebSiteSchema(isOrg: boolean) {
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
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${base}/contact`,
      availableLanguage: "English",
    },
    dateModified: liveDate,
  }
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const questions = isOrg
    ? [
        {
          q: "What is UpForge?",
          a: "UpForge is the world's open, independent startup registry. Every startup is manually verified and assigned a unique UpForge Registry Number (UFRN) as proof of existence.",
        },
        {
          q: "What is the UFRN (UpForge Registry Number)?",
          a: "The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as proof of existence and allows anyone to look up a startup's official listing.",
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
          q: "What is UpForge?",
          a: "UpForge is India's leading startup discovery and registry platform. It tracks 5000+ verified Indian startups and provides verified founder profiles with real funding and valuation data.",
        },
        {
          q: "Who are the top startup founders in India in 2026?",
          a: "India's top startup founders in 2026 include Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), and Ritesh Agarwal (OYO). UpForge profiles all of these founders with verified data.",
        },
        {
          q: "Which Indian startups are unicorns in 2026?",
          a: "Top Indian unicorns include Zepto, CRED, Groww, Meesho, Nykaa, PhysicsWallah, Rapido, and Zerodha. UpForge tracks all verified Indian unicorns with real funding data.",
        },
        {
          q: "How do I submit my startup to UpForge?",
          a: "Submit your startup for free at upforge.in/submit. The editorial team reviews each application and assigns a UFRN upon approval.",
        },
        {
          q: "Is UpForge free?",
          a: "Yes. Browsing and submitting a startup on UpForge is completely free.",
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

const STATS = [
  { value: "5,000+", label: "Verified Startups" },
  { value: "12,000+", label: "Founders Profiled" },
  { value: "40+", label: "Countries Covered" },
  { value: "100%", label: "Manually Verified" },
]

const WHY_CARDS = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: "Early Discovery Advantage",
    body: "Find breakout companies before they dominate headlines. Our registry surfaces high-signal startups months before mainstream coverage catches up.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Verified Founder Credibility",
    body: "Every profile is manually reviewed. No ghost companies, no inflated metrics — just clean, trustworthy data that investors and partners can rely on.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z" />
      </svg>
    ),
    title: "Startup Visibility at Scale",
    body: "A permanent UFRN listing ensures your startup is discoverable by investors, partners, and media worldwide — from day one.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "SEO-Driven Discoverability",
    body: "UpForge listings rank in Google. Being listed means your startup surfaces organically when investors, journalists, and customers search for you.",
  },
]

export default async function HomePage() {
  const domain = await getDomain()
  const isOrg = domain === "org"

  const [liveDate, startupCount, latestStartups] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
    getLatestStartups(),
  ])

  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebSiteSchema(isOrg)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg, liveDate)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }}
      />

      <main className="min-h-screen bg-[#0a0a0a] text-white font-sans" style={{ fontFamily: "'DM Sans', 'Inter', sans-serif" }}>

        {/* ── NAV ── */}
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
            <a href="/" className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/90">UPFORGE</span>
              <span className="text-[9px] font-semibold tracking-widest uppercase text-orange-400/80 bg-orange-400/10 border border-orange-400/20 px-1.5 py-0.5 rounded-sm">REGISTRY</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              {[
                { label: "Registry", href: "/startup" },
                { label: "Founders", href: "/founders" },
                { label: "Insights", href: "/blog" },
                { label: "About", href: "/about" },
              ].map((item) => (
                <a key={item.label} href={item.href} className="text-[13px] text-white/50 hover:text-white transition-colors duration-150">
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="/submit"
              className="text-[12px] font-semibold bg-orange-500 hover:bg-orange-400 text-white px-4 py-1.5 rounded-md transition-colors duration-150"
            >
              Submit Startup
            </a>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="relative pt-32 pb-24 px-6 overflow-hidden">
          {/* background grid */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          {/* glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="relative max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-full px-4 py-1.5 mb-8 bg-white/[0.03]">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-[11px] font-medium tracking-widest uppercase text-white/50">
                {startupCount.toLocaleString()}+ Verified Startups — Updated Daily
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight text-white mb-6" style={{ fontFamily: "'DM Serif Display', 'Georgia', serif", fontStyle: "italic" }}>
              Discover Startups<br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(135deg, #f97316 0%, #fb923c 50%, #fbbf24 100%)" }}>
                Before They Become Unicorns
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed">
              Explore verified founders, breakout companies, and emerging innovations across India and globally.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
              <a
                href="/startup"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-[14px] px-7 py-3 rounded-lg transition-all duration-150 shadow-lg shadow-orange-500/20"
              >
                Explore Registry
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="/submit"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 hover:text-white font-semibold text-[14px] px-7 py-3 rounded-lg transition-all duration-150 bg-white/[0.03] hover:bg-white/[0.06]"
              >
                Submit Startup
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                { icon: "🌐", label: "Global Founders" },
                { icon: "✅", label: "Verified Registry" },
                { icon: "🚀", label: "Early Discovery Platform" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2 text-[13px] text-white/40">
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ── */}
        <section className="border-y border-white/[0.06] bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-black text-white tracking-tight" style={{ fontFamily: "'DM Serif Display', 'Georgia', serif" }}>
                  {stat.value}
                </div>
                <div className="text-[12px] text-white/40 mt-1 uppercase tracking-widest font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REGISTRY PREVIEW ── */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Registry Preview</p>
                <h2 className="text-3xl md:text-4xl font-black text-white leading-tight" style={{ fontFamily: "'DM Serif Display', 'Georgia', serif", fontStyle: "italic" }}>
                  Latest Verified Startups
                </h2>
              </div>
              <a
                href="/startup"
                className="hidden md:inline-flex items-center gap-1.5 text-[13px] text-orange-400 hover:text-orange-300 font-semibold transition-colors"
              >
                View full registry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {latestStartups.map((startup, i) => (
                <a
                  key={startup.slug}
                  href={`/startup/${startup.slug}`}
                  className="group relative border border-white/[0.08] rounded-xl p-5 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-200"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-sm">
                      {startup.name.charAt(0)}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-semibold text-green-400/80 bg-green-400/10 border border-green-400/20 px-2 py-0.5 rounded-full">
                        ✓ Verified
                      </span>
                    </div>
                  </div>
                  <h3 className="text-[15px] font-bold text-white mb-1 group-hover:text-orange-300 transition-colors">
                    {startup.name}
                  </h3>
                  <p className="text-[12px] text-white/40 mb-3">{startup.sector}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] text-white/30 font-medium">{startup.country}</span>
                    <span className="text-[11px] text-white/30 font-medium bg-white/[0.05] px-2 py-0.5 rounded-full border border-white/10">
                      {startup.stage}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>

            <div className="mt-8 text-center md:hidden">
              <a
                href="/startup"
                className="inline-flex items-center gap-2 border border-white/15 text-white/60 hover:text-white font-semibold text-[13px] px-6 py-2.5 rounded-lg transition-all duration-150 bg-white/[0.03] hover:bg-white/[0.06]"
              >
                View all registry
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── WHY UPFORGE ── */}
        <section className="py-20 px-6 border-t border-white/[0.06]">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-xl mb-14">
              <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-400 mb-2">Why UpForge</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-tight" style={{ fontFamily: "'DM Serif Display', 'Georgia', serif", fontStyle: "italic" }}>
                The infrastructure layer for the global startup ecosystem
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {WHY_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="relative border border-white/[0.08] rounded-xl p-7 bg-white/[0.02] hover:border-white/[0.15] transition-colors duration-200"
                >
                  <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center text-orange-400 mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-[16px] font-bold text-white mb-2">{card.title}</h3>
                  <p className="text-[14px] text-white/40 leading-relaxed">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FOUNDER CHRONICLE ── */}
        <section className="border-t border-white/[0.06]">
          <FounderChronicleClient
            founders={FOUNDERS}
            internalLinks={[
              { l: "Startup Registry", h: "/startup", desc: "5,000+ verified startups globally" },
              { l: "Submit Startup", h: "/submit", desc: "Get listed free — UFRN assigned" },
              { l: "Insights", h: "/blog", desc: "Ecosystem intelligence & analysis" },
              { l: "About UpForge", h: "/about", desc: "Our mission and editorial standards" },
            ]}
            footerLinks={[
              { l: "Archive", h: "/archive", desc: "Historical registry records" },
              { l: "Registry", h: "/startup", desc: "Browse all verified startups" },
              { l: "Submit", h: "/submit", desc: "List your startup for free" },
            ]}
          />
        </section>

        {/* ── SUBMIT CTA ── */}
        <section className="py-24 px-6 border-t border-white/[0.06]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="relative border border-white/[0.08] rounded-2xl p-12 bg-white/[0.02] overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 60% 40%, #f97316, transparent 70%)" }} />
              <div className="relative">
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-orange-400 mb-3">Free Forever</p>
                <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'DM Serif Display', 'Georgia', serif", fontStyle: "italic" }}>
                  Get your startup listed
                </h2>
                <p className="text-[15px] text-white/40 mb-8 max-w-lg mx-auto leading-relaxed">
                  Every approved startup receives a permanent UFRN — your verified proof of existence and global discoverability.
                </p>
                <a
                  href="/submit"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold text-[14px] px-8 py-3.5 rounded-lg transition-all duration-150 shadow-lg shadow-orange-500/25"
                >
                  Submit Your Startup — Free
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="border-t border-white/[0.06] py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/60">UPFORGE</span>
              <span className="text-white/20">·</span>
              <span className="text-[11px] text-white/30">Open Startup Registry</span>
            </div>
            <nav className="flex flex-wrap items-center gap-6">
              {[
                { l: "The Founder Chronicle", h: "/" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Blog", h: "/blog" },
                { l: "Submit Startup", h: "/submit" },
                { l: "About UpForge", h: "/about" },
              ].map((item) => (
                <a key={item.l} href={item.h} className="text-[12px] text-white/30 hover:text-white/70 transition-colors">
                  {item.l}
                </a>
              ))}
            </nav>
            <p className="text-[11px] text-white/20">© {new Date().getFullYear()} UpForge</p>
          </div>
        </footer>
      </main>

      {/* ── SEO CONTENT LAYER ── */}
      <div className="sr-only" aria-label="SEO content">
        <section>
          <h1>
            {isOrg
              ? "Global Startup Registry — Discover Startups Before They Become Unicorns"
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
    </>
  )
}
