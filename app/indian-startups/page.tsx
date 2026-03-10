// app/indian-startups/page.tsx
// ─── TARGET KEYWORDS ──────────────────────────────────────────────────────────
// "indian startups"                    ~90,000/mo  ← highest volume
// "startups in India"                  ~74,000/mo
// "Indian startup ecosystem"           ~22,000/mo
// "India startup funding 2026"         ~14,000/mo
// "list of startups in India"          ~18,000/mo
// "new startups in India"              ~12,000/mo
// "startup India 2026"                 ~9,800/mo
// ─────────────────────────────────────────────────────────────────────────────
// DESIGN SYSTEM — identical tokens to app/page.tsx & blog pages:
//   Background:  #F3EFE5  (parchment — NOT #F7F5F0)
//   Breadcrumb:  #EDE9DF  (slightly darker wash)
//   Primary ink: #1A1208  (warm near-black — NOT #1C1C1C)
//   Secondary:   #6B5C40
//   Muted:       #AAA, #BBB0A0
//   Rule/border: #C8C2B4, #D8D2C4
//   Gold label:  #E8C547  (city labels, insight strip)
//   Gold link:   #B45309  (header italic, internal links, §markers)
//   Fonts:       Playfair Display (headlines) · Georgia (body) · system-ui (chrome)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight, ChevronRight, BadgeCheck,
  TrendingUp, Globe, Zap, Users, BarChart3,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Indian Startups — Complete Guide to India's Startup Ecosystem 2026 | UpForge",
  description:
    "Everything about Indian startups in 2026 — 650,000+ startups, 126 unicorns, $11.6B raised in 2025. Sector guide, city breakdown, top funded companies, unicorn tracker and more. India's independent startup registry.",
  keywords:
    "indian startups, startups in India, Indian startup ecosystem 2026, India startup funding, list of startups in India, new startups in India, startup India, Indian unicorns, Bengaluru startups, Mumbai startups, Delhi startup, fintech India, edtech India, healthtech India, SaaS India, AI startups India, startup India DPIIT",
  alternates: { canonical: "https://upforge.in/indian-startups" },
  openGraph: {
    title: "Indian Startups 2026 — Complete Ecosystem Guide | UpForge",
    description:
      "650,000+ startups. 126 unicorns. $11.6B raised in 2025. The complete guide to India's startup ecosystem — sectors, cities, unicorns, and how to get listed.",
    url: "https://upforge.in/indian-startups",
    siteName: "UpForge",
    locale: "en_IN",
    type: "article",
    images: [{ url: "https://upforge.in/og/indian-startups.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "Indian Startups 2026 | UpForge",
    images: ["https://upforge.in/og/indian-startups.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ECOSYSTEM_STATS = [
  { v: "650,000+", l: "DPIIT-Recognized Startups" },
  { v: "126",      l: "Unicorns (March 2026)" },
  { v: "$11.6B",   l: "Funding Raised in 2025" },
  { v: "3rd",      l: "Largest Ecosystem Globally" },
]

const SECTORS = [
  {
    name: "Fintech", count: "23 unicorns", funding: "$1.6B in 2025",
    examples: "Razorpay, CRED, Groww, Zepto, PhonePe", icon: "💳",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
    why: "India's UPI stack and 900M+ banked citizens create a uniquely captive fintech market. Payments, lending, and wealthtech dominate.",
  },
  {
    name: "SaaS / Enterprise Tech", count: "15 unicorns", funding: "$1.1B in 2025",
    examples: "Zoho, Freshworks, Darwinbox, BrowserStack", icon: "⚙️",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
    why: "India's engineering talent and English fluency make it the world's SaaS factory. B2B software ships globally from Chennai and Bengaluru.",
  },
  {
    name: "AI / Deeptech", count: "3 unicorns + growing", funding: "$643M in 2025",
    examples: "Krutrim, Neysa, Sarvam AI, Fractal", icon: "🤖",
    accent: "#7C3AED", accentBg: "#F5F3FF", accentBorder: "#C4B5FD",
    why: "Government IndiaAI Mission, IIT talent pipeline, and enterprise demand are converging. India's AI story is just beginning.",
  },
  {
    name: "E-commerce / D2C", count: "18 unicorns", funding: "$800M+ in 2025",
    examples: "Meesho, Nykaa, Lenskart, FirstCry", icon: "🛒",
    accent: "#DC2626", accentBg: "#FEF2F2", accentBorder: "#FCA5A5",
    why: "500M internet users and a fast-growing middle class make India the world's most exciting e-commerce growth story — outside China.",
  },
  {
    name: "Edtech", count: "7 unicorns", funding: "$400M in 2025",
    examples: "PhysicsWallah, upGrad, Eruditus", icon: "📚",
    accent: "#059669", accentBg: "#ECFDF5", accentBorder: "#6EE7B7",
    why: "350M+ students and massive competitive exam culture drive demand. The post-BYJU's era favours profitability-first models.",
  },
  {
    name: "Healthtech", count: "6 unicorns", funding: "$500M in 2025",
    examples: "Qure.ai, Practo, Pristyn Care, 1mg", icon: "🏥",
    accent: "#0D9488", accentBg: "#F0FDFA", accentBorder: "#99F6E4",
    why: "Massive underserved market — India has 1 doctor per 1,800 patients. Digital health, diagnostics AI, and telemedicine are filling the gap.",
  },
  {
    name: "Quick Commerce / Logistics", count: "9 unicorns", funding: "$600M in 2025",
    examples: "Zepto, Porter, Shiprocket, Delhivery", icon: "🚀",
    accent: "#EA580C", accentBg: "#FFF7ED", accentBorder: "#FDBA74",
    why: "India's dark store revolution — Zepto's 10-minute delivery model has been copied globally. Logistics infrastructure is the backbone of the digital economy.",
  },
  {
    name: "Defence / Deeptech", count: "Emerging", funding: "$311M in H1 2025",
    examples: "Pixxel, Skyroot, Ideaforge", icon: "🛡️",
    accent: "#475569", accentBg: "#F8FAFC", accentBorder: "#CBD5E1",
    why: "Unprecedented $311M raised in H1 2025 alone. Government's Make-in-India defence push is creating a new category of well-funded hardware startups.",
  },
]

const CITIES = [
  { name: "Bengaluru", unicorns: 52, label: "Silicon Valley of India",  detail: "AI, SaaS, Fintech, Deeptech — the undisputed startup capital of India." },
  { name: "Delhi-NCR",  unicorns: 40, label: "Policy & Enterprise Hub",  detail: "Edtech, logistics, and enterprise tech dominate. Proximity to regulators is a real advantage." },
  { name: "Mumbai",     unicorns: 18, label: "FinTech & Media Capital",  detail: "BFSI startups, quick commerce, and D2C brands. Raised $8.2M per deal on average in 2025." },
  { name: "Hyderabad",  unicorns:  8, label: "Deeptech & Healthcare",    detail: "Darwinbox, Qure.ai, and strong pharma-adjacent startups define Hyderabad's identity." },
  { name: "Pune",       unicorns:  8, label: "Product-First Culture",    detail: "Engineering-led startups with strong product culture. Growing quickly as Bengaluru overflows." },
  { name: "Chennai",    unicorns:  5, label: "SaaS Origin City",         detail: "Freshworks, Zoho, Chargebee — Chennai is where Indian SaaS was invented." },
]

const TOP_FUNDED = [
  { name: "Ola Cabs",    funding: "$3.8B", sector: "Mobility" },
  { name: "OYO (PRISM)", funding: "$3.7B", sector: "Hospitality" },
  { name: "Zepto",       funding: "$2.5B", sector: "Quick Commerce" },
  { name: "Lenskart",    funding: "$1.8B", sector: "D2C / Eyewear" },
  { name: "Meesho",      funding: "$1.6B", sector: "Social Commerce" },
  { name: "CRED",        funding: "$1.4B", sector: "Fintech" },
  { name: "Razorpay",    funding: "$1.4B", sector: "Payments" },
  { name: "Groww",       funding: "$1.2B", sector: "WealthTech" },
]

const TRENDS = [
  { num: "01", title: "IPO Supercycle",                      body: "More than 18 Indian startups went public in 2025. 2026 will see the second wave — Groww, Zerodha, and multiple SaaS companies are in the pipeline. Public markets are now a viable and preferred exit route." },
  { num: "02", title: "Profitability Over Growth",           body: "Over one-third of Indian startups chose runway extension over fundraising in 2025. The 'grow at all costs' era is over. Investors now ask for EBITDA visibility as a baseline expectation at every stage." },
  { num: "03", title: "Reverse Flips",                       body: "Indian startups that had incorporated in Singapore or Delaware are moving their legal domicile back to India. Listing domestically is no longer a compromise — it's the smartest path for many." },
  { num: "04", title: "Tier-2 City Surge",                   body: "Jaipur, Indore, Kochi, Chandigarh — Tier-2 cities saw 45% YoY growth in startup registrations in 2025. The next generation of Indian founders is not from Bengaluru." },
  { num: "05", title: "AI from Experimentation to Accountability", body: "2026 will separate defensible AI businesses from surface-level wrappers. Startups that show measurable ROI from AI — not just a product with 'AI inside' — will attract capital." },
  { num: "06", title: "Defence Tech Breakthrough",           body: "$311M raised by defence tech startups in H1 2025 alone — an unprecedented figure. The Make-in-India defence push is creating a funded hardware startup category for the first time." },
]

const FAQS = [
  { q: "How many startups are in India?",       a: "India has over 650,000 DPIIT-recognized startups as of March 2026, making it the world's third-largest startup ecosystem after the US and China." },
  { q: "How many unicorns are in India?",        a: "India has 126 unicorns as of March 2026. The most recent is Neysa (February 2026), an AI cloud company. India is third globally in unicorn count." },
  { q: "Which is India's startup capital?",      a: "Bengaluru, with 52 unicorns and the highest deal volume, is India's undisputed startup capital — followed by Delhi-NCR (40 unicorns) and Mumbai (18 unicorns)." },
  { q: "How do I list my startup on UpForge?",  a: "Listing on UpForge is completely free. Visit upforge.in/submit, fill in your startup details, and get independently verified, publicly indexed, and added to India's trusted registry." },
]

const INSIGHT_STRIP = [
  { v: "~80%", l: "First-generation founders",     b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying." },
  { v: "$950B", l: "Value created by under-40s",   b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing." },
  { v: "126",   l: "Unicorns — and rising",         b: "India just crossed 126 unicorns. The founders reading this today will build the next 126. UpForge exists to help them get discovered." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://upforge.in/indian-startups",
      url: "https://upforge.in/indian-startups",
      name: "Indian Startups — Complete Ecosystem Guide 2026 | UpForge",
      description: "Complete guide to India's startup ecosystem: 650K+ startups, 126 unicorns, sector breakdown, city guide, and top funded companies.",
      dateModified: "2026-03-07",
      isPartOf: { "@type": "WebSite", name: "UpForge", url: "https://upforge.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
          { "@type": "ListItem", position: 2, name: "Indian Startups", item: "https://upforge.in/indian-startups" },
        ],
      },
    },
    {
      "@type": "Article",
      headline: "Indian Startups 2026 — Complete Ecosystem Guide",
      author: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
      datePublished: "2026-01-01",
      dateModified: "2026-03-07",
      description: "Everything you need to know about India's startup ecosystem in 2026.",
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(f => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
}

// ─── SECTION RULE COMPONENT ───────────────────────────────────────────────────
function SectionRule({ marker, title }: { marker: string; title: string }) {
  return (
    <div
      className="flex items-center gap-3 mb-6"
      style={{ paddingTop: "clamp(12px,2.5vw,20px)", borderTop: "2px solid #1A1208" }}
    >
      <span
        style={{
          fontSize: 9, fontWeight: 800, color: "#B45309",
          letterSpacing: ".22em", fontFamily: "system-ui,sans-serif",
        }}
      >
        {marker}
      </span>
      <h2
        style={{
          fontFamily: "'Playfair Display',Georgia,serif",
          fontSize: "clamp(1rem,2vw,1.35rem)",
          fontWeight: 900, color: "#1A1208", margin: 0,
        }}
      >
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: "#C8C2B4" }} />
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function IndianStartupsPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3EFE5",              // ← exact match to app/page.tsx
        fontFamily: "'Georgia','Times New Roman',serif",
        color: "#1A1208",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp .5s ease both; }
        .fu1 { animation-delay: .04s; }
        .fu2 { animation-delay: .12s; }
        .fu3 { animation-delay: .20s; }
        .fu4 { animation-delay: .28s; }
        .fu5 { animation-delay: .36s; }
        .fu6 { animation-delay: .44s; }

        .sector-card:hover {
          box-shadow: 0 4px 20px rgba(26,18,8,.08);
          transform: translateY(-1px);
          transition: all .2s ease;
        }
        .sector-card { transition: all .2s ease; }

        details summary::-webkit-details-marker { display: none; }
        details[open] .faq-chevron { transform: rotate(90deg); }
        .faq-chevron { transition: transform .2s ease; }

        .explore-link:hover {
          border-color: #1A1208 !important;
          color: #1A1208 !important;
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        @media (max-width: 639px) {
          .city-grid  { grid-template-columns: 1fr 1fr !important; }
          .trend-num  { display: none; }
        }
      `}</style>

      {/* ══════ BREADCRUMB ══════ */}
      <nav
        style={{
          background: "#EDE9DF",            // ← exact match to app/page.tsx breadcrumb
          borderBottom: "1px solid #C8C2B4",
          fontFamily: "system-ui,sans-serif",
        }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-2.5">
          <ol
            className="flex flex-wrap items-center gap-1.5"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {[["Home", "/"], ["Indian Startups", "#"]].map(([label, href], i) => (
              <li
                key={label}
                className="flex items-center gap-1.5"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                {href === "#" ? (
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "#1A1208" }}
                    itemProp="name"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-[10px] uppercase tracking-wider transition-colors"
                    style={{ color: "#AAA" }}
                    itemProp="item"
                  >
                    <span itemProp="name">{label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 1)} />
                {i < 1 && (
                  <ChevronRight className="w-3 h-3" style={{ color: "#C8C2B4" }} aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-24">

        {/* ══════ HEADER ══════ */}
        <header
          className="fu fu1"
          style={{ borderBottom: "3px solid #1A1208", padding: "clamp(28px,5vw,56px) 0 clamp(20px,4vw,36px)" }}
        >
          {/* Eyebrow */}
          <div
            className="flex items-center gap-2 mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            <span className="w-8 h-px" style={{ background: "#1A1208" }} />
            <span
              className="text-[9px] tracking-[0.3em] uppercase"
              style={{ color: "#AAA" }}
            >
              UpForge Intelligence · March 2026
            </span>
          </div>

          {/* H1 — Playfair Display, matching the other pages exactly */}
          <h1
            className="pf font-black leading-[1.04] tracking-tight"
            style={{
              fontSize: "clamp(2.2rem,5.5vw,4.4rem)",
              color: "#1A1208",
              marginBottom: 20,
            }}
          >
            Indian Startups
            <br />
            <em className="pf italic" style={{ color: "#B45309" }}>
              The Complete Guide
            </em>{" "}
            — 2026
          </h1>

          <p
            className="leading-relaxed mb-8"
            style={{
              fontSize: "clamp(14px,1.7vw,16px)",
              color: "#5A4A30",
              maxWidth: 680,
              fontFamily: "system-ui,sans-serif",
            }}
          >
            India is the world's third-largest startup ecosystem —{" "}
            <strong style={{ color: "#1A1208" }}>650,000+ DPIIT-recognized startups</strong>,{" "}
            <strong style={{ color: "#1A1208" }}>126 unicorns</strong>, and{" "}
            <strong style={{ color: "#1A1208" }}>$11.6B raised in 2025</strong>. This is the
            authoritative reference to understanding what's being built, where, by whom, and
            what's next.
          </p>

          {/* Stats grid — matches app/page.tsx "By the Numbers" sidebar exactly */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4"
            style={{ border: "2px solid #1A1208", background: "#1A1208", gap: "1.5px" }}
          >
            {ECOSYSTEM_STATS.map((s, i) => (
              <div
                key={i}
                style={{ background: "#FDFCF9", padding: "clamp(12px,2.5vw,20px)" }}
              >
                <p
                  className="pf font-black leading-none"
                  style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#1A1208", marginBottom: 6 }}
                >
                  {s.v}
                </p>
                <p
                  className="text-[9px] uppercase tracking-[0.18em]"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif", margin: 0 }}
                >
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </header>

        {/* ══════ SECTOR BREAKDOWN ══════ */}
        <section
          className="fu fu2 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-labelledby="sectors-heading"
        >
          <SectionRule marker="§01" title="Sector Breakdown" />
          <p
            className="text-[9px] uppercase tracking-[0.24em] mb-6"
            style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
          >
            Where India's startup capital flows
          </p>

          <div className="grid sm:grid-cols-2 gap-[1.5px]" style={{ background: "#1A1208", border: "1.5px solid #1A1208" }}>
            {SECTORS.map((s, i) => (
              <div
                key={i}
                className="sector-card"
                style={{
                  background: "#FDFCF9",
                  padding: "clamp(14px,2.5vw,22px)",
                  borderTop: `3px solid ${s.accent}`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl flex-shrink-0 mt-0.5">{s.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center flex-wrap gap-2 mb-2">
                      <h3
                        className="pf font-bold"
                        style={{ fontSize: 14, color: "#1A1208", margin: 0 }}
                      >
                        {s.name}
                      </h3>
                      <span
                        style={{
                          fontSize: 8, fontWeight: 800,
                          letterSpacing: ".18em", textTransform: "uppercase",
                          color: s.accent, fontFamily: "system-ui,sans-serif",
                          border: `1px solid ${s.accentBorder}`,
                          background: s.accentBg,
                          padding: "2px 7px",
                        }}
                      >
                        {s.count}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: 11.5, color: "#5A4A30",
                        lineHeight: 1.68, marginBottom: 10,
                        fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {s.why}
                    </p>
                    <div
                      className="flex flex-wrap items-center gap-3"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span style={{ fontSize: 9, color: "#AAA" }}>
                        Funding:{" "}
                        <strong style={{ color: "#6B5C40" }}>{s.funding}</strong>
                      </span>
                      <span style={{ color: "#C8C2B4" }}>·</span>
                      <span
                        className="truncate"
                        style={{ fontSize: 9, color: "#AAA" }}
                      >
                        e.g. {s.examples}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ CITY GUIDE ══════ */}
        <section
          className="fu fu3 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-labelledby="cities-heading"
        >
          <SectionRule marker="§02" title="Startup Cities of India" />

          <div
            className="city-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5px]"
            style={{ background: "#1A1208", border: "1.5px solid #1A1208" }}
          >
            {CITIES.map((c, i) => (
              <div
                key={i}
                style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,22px)" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3
                    className="pf font-bold"
                    style={{ fontSize: 15, color: "#1A1208", margin: 0 }}
                  >
                    {c.name}
                  </h3>
                  <div className="text-right flex-shrink-0 ml-3">
                    <span
                      className="pf font-black leading-none block"
                      style={{ fontSize: "1.5rem", color: "#1A1208" }}
                    >
                      {c.unicorns}
                    </span>
                    <span
                      className="text-[8px] uppercase tracking-wider block"
                      style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                    >
                      Unicorns
                    </span>
                  </div>
                </div>
                <p
                  className="text-[9.5px] font-bold uppercase tracking-wider mb-2"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
                >
                  {c.label}
                </p>
                <p
                  style={{ fontSize: 11.5, color: "#5A4A30", lineHeight: 1.65, fontFamily: "system-ui,sans-serif", margin: 0 }}
                >
                  {c.detail}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ TOP FUNDED ══════ */}
        <section
          className="fu fu4 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-labelledby="funded-heading"
        >
          <SectionRule marker="§03" title="Most Funded Indian Startups" />

          <div
            className="grid sm:grid-cols-2 gap-[1.5px]"
            style={{ background: "#1A1208", border: "1.5px solid #1A1208" }}
          >
            {TOP_FUNDED.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#FDFCF9",
                  padding: "clamp(10px,2vw,16px) clamp(14px,2.5vw,20px)",
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                }}
              >
                <div className="flex items-center gap-3">
                  <span
                    className="font-mono font-bold"
                    style={{ fontSize: 11, color: "#C8C2B4", width: 22, fontFamily: "system-ui,sans-serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p
                      className="pf font-bold leading-tight"
                      style={{ fontSize: 13.5, color: "#1A1208", margin: 0 }}
                    >
                      {s.name}
                    </p>
                    <p
                      style={{
                        fontSize: 9.5, color: "#AAA", textTransform: "uppercase",
                        letterSpacing: ".12em", fontFamily: "system-ui,sans-serif", margin: 0,
                      }}
                    >
                      {s.sector}
                    </p>
                  </div>
                </div>
                <span
                  className="pf font-black"
                  style={{ fontSize: "1.2rem", color: "#059669" }}
                >
                  {s.funding}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ INSIGHT STRIP — matches app/page.tsx insight section exactly ══════ */}
        <section
          className="fu fu4 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="UpForge ecosystem insights"
        >
          <SectionRule marker="§04" title="UpForge Ecosystem Insights" />

          <div className="grid sm:grid-cols-3 gap-4">
            {INSIGHT_STRIP.map((item, i) => (
              <div
                key={i}
                style={{ background: "white", border: "1px solid #D8D2C4", padding: "clamp(14px,2.5vw,20px)" }}
                itemScope
                itemType="https://schema.org/StatisticalVariable"
              >
                <p
                  className="pf font-black leading-none"
                  style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", color: "#1A1208", marginBottom: 6 }}
                >
                  {item.v}
                </p>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.18em] mb-3"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
                >
                  {item.l}
                </p>
                <p
                  style={{ fontSize: 11.5, color: "#6B5C40", lineHeight: 1.68, fontFamily: "system-ui,sans-serif", margin: 0 }}
                >
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ 2026 TRENDS ══════ */}
        <section
          className="fu fu5 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-labelledby="trends-heading"
        >
          <SectionRule marker="§05" title="Key Trends Shaping India's Startup Story in 2026" />

          <div
            className="space-y-[1.5px]"
            style={{ border: "1.5px solid #1A1208", background: "#1A1208" }}
          >
            {TRENDS.map((t) => (
              <div
                key={t.num}
                style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,22px)", display: "flex", gap: 16 }}
              >
                <span
                  className="trend-num flex-shrink-0 font-mono font-black"
                  style={{
                    fontSize: 11, color: "#C8C2B4", marginTop: 2,
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  {t.num}
                </span>
                <div>
                  <h3
                    className="pf font-bold"
                    style={{ fontSize: 14, color: "#1A1208", marginBottom: 6 }}
                  >
                    {t.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 12.5, color: "#5A4A30", lineHeight: 1.72,
                      fontFamily: "system-ui,sans-serif", margin: 0,
                    }}
                  >
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════ FAQ ══════ */}
        <section
          className="fu fu6 py-10"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-labelledby="faq-heading"
        >
          <SectionRule marker="§06" title="Frequently Asked Questions" />

          <div
            className="space-y-[1.5px]"
            style={{ border: "1.5px solid #1A1208", background: "#1A1208" }}
          >
            {FAQS.map((f, i) => (
              <details key={i} className="group" style={{ background: "#FDFCF9" }}>
                <summary
                  className="flex items-center justify-between cursor-pointer"
                  style={{
                    padding: "clamp(12px,2vw,18px) clamp(14px,2.5vw,22px)",
                    listStyle: "none",
                  }}
                >
                  <span
                    className="pf font-bold"
                    style={{ fontSize: 13.5, color: "#1A1208" }}
                  >
                    {f.q}
                  </span>
                  <ChevronRight
                    className="faq-chevron w-4 h-4 flex-shrink-0 ml-3"
                    style={{ color: "#C8C2B4" }}
                    aria-hidden="true"
                  />
                </summary>
                <div
                  style={{
                    padding: "0 clamp(14px,2.5vw,22px) clamp(12px,2vw,18px)",
                    borderTop: "1px solid #EDE9DF",
                  }}
                >
                  <p
                    style={{
                      fontSize: 12.5, color: "#5A4A30", lineHeight: 1.72,
                      paddingTop: 12, fontFamily: "system-ui,sans-serif", margin: 0,
                    }}
                  >
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* ══════ PULL QUOTE — matches app/page.tsx pull quote section exactly ══════ */}
        <div
          className="fu fu6 text-center py-8 my-4"
          style={{ borderTop: "3px solid #1A1208", borderBottom: "1px solid #C8C2B4" }}
        >
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, marginBottom: 12 }} aria-hidden="true">❧</span>
          <blockquote
            style={{
              fontFamily: "'Playfair Display',Georgia,serif",
              fontSize: "clamp(15px,2.2vw,20px)",
              fontStyle: "italic",
              color: "#1A1208",
              lineHeight: 1.72,
              maxWidth: 680,
              margin: "0 auto",
            }}
          >
            "India doesn't lack founders. It lacks the infrastructure to make them visible."
          </blockquote>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, margin: "12px 0 8px" }} aria-hidden="true">❧</span>
          <p
            style={{
              fontSize: 9, textTransform: "uppercase", letterSpacing: ".24em",
              color: "#AAA", fontFamily: "system-ui,sans-serif",
            }}
          >
            — UpForge Editorial · Why This Registry Exists
          </p>
        </div>

        {/* ══════ INTERNAL LINKS — matches app/page.tsx "Explore on UpForge" ══════ */}
        <nav
          className="fu fu6 py-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Related startup lists on UpForge"
        >
          <p
            className="text-[9px] tracking-[0.3em] uppercase mb-5"
            style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
          >
            Explore More on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Top AI Startups India",  href: "/top-ai-startups",      desc: "Best AI companies 2026" },
              { label: "Best SaaS Startups",     href: "/best-saas-startups",   desc: "B2B SaaS unicorns" },
              { label: "Indian Unicorns 2026",   href: "/indian-unicorns",      desc: "All 126 unicorns" },
              { label: "Top Funded Startups",    href: "/top-funded-startups",  desc: "Capital rankings" },
              { label: "Edtech Startups",        href: "/edtech-startups",      desc: "PhysicsWallah & more" },
              { label: "Fintech Startups",       href: "/fintech-startups",     desc: "Zerodha, CRED, Paytm" },
              { label: "Founder Chronicles",     href: "/",                     desc: "Editorial founder profiles" },
              { label: "Submit Your Startup",    href: "/submit",               desc: "Get listed free" },
            ].map((lnk) => (
              <Link
                key={lnk.href}
                href={lnk.href}
                className="explore-link flex flex-col gap-1 p-3 transition-all"
                style={{
                  border: "1px solid #D8D2C4",
                  background: "white",
                  textDecoration: "none",
                  color: "#1A1208",
                }}
              >
                <span
                  className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.label}
                  <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span
                  className="text-[9px]"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.desc}
                </span>
              </Link>
            ))}
          </div>
        </nav>

        {/* ══════ CTA — matches app/page.tsx footer CTA exactly ══════ */}
        <div
          className="fu fu6 mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 p-7 sm:p-10"
          style={{ background: "#1A1208" }}
          aria-label="List your startup on UpForge"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-4 h-4" style={{ color: "#E8C547" }} />
              <span
                className="text-[9px] uppercase tracking-[0.22em]"
                style={{ color: "rgba(255,255,255,.3)", fontFamily: "system-ui,sans-serif" }}
              >
                UpForge Registry
              </span>
            </div>
            <p
              className="pf font-bold text-white leading-snug mb-2"
              style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}
            >
              Your startup belongs in this list.
            </p>
            <p
              style={{
                fontSize: 12.5, color: "rgba(255,255,255,.5)",
                maxWidth: 380, fontFamily: "system-ui,sans-serif", lineHeight: 1.65,
              }}
            >
              Get independently verified and listed in India's most trusted startup registry.
              Free forever. Google-indexed. Trusted by founders and investors.
            </p>
          </div>
          <Link
            href="/submit"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 font-bold tracking-wide hover:opacity-90 transition-opacity"
            style={{
              background: "#E8C547",
              color: "#111",
              fontSize: 11,
              fontFamily: "system-ui,sans-serif",
              textDecoration: "none",
            }}
            aria-label="List your Indian startup on UpForge for free"
          >
            List Your Startup — Free <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ══════ DISCLAIMER + FOOTER LINKS — exact match to app/page.tsx ══════ */}
        <footer className="mt-6 pb-2">
          <p
            style={{
              fontSize: 9.5, color: "#BBB0A0", lineHeight: 1.65,
              fontFamily: "system-ui,sans-serif",
              borderTop: "1px solid #D8D2C4", paddingTop: 14,
            }}
          >
            * Statistics sourced from Tracxn, Inc42, DPIIT, Growthlist, and public company
            disclosures as of March 2026. UpForge is an independent registry — no paid
            placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Indian Startup Founders", h: "/" },
                { l: "Startup Registry India",  h: "/startup" },
                { l: "Indian Unicorns 2026",    h: "/indian-unicorns" },
                { l: "Top AI Startups",         h: "/top-ai-startups" },
                { l: "Fintech Startups India",  h: "/fintech-startups" },
                { l: "Edtech Founders",         h: "/edtech-startups" },
                { l: "Submit Startup",          h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] uppercase tracking-wider transition-colors hover:text-[#1A1208]"
                    style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>

      </div>
    </div>
  )
}
