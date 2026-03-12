// app/indian-startups/page.tsx
// ─── THE FOUNDER CHRONICLE DESIGN SYSTEM ──────────────────────────────────────
// Background:   #F3EFE5  (parchment)
// Breadcrumb:   #EDE9DF
// Primary ink:  #1A1208  (warm near-black)
// Secondary:    #6B5C40 / #5A4A30
// Muted:        #AAA, #BBB0A0
// Rule/border:  #C8C2B4, #D8D2C4
// Gold label:   #E8C547
// Gold link:    #B45309
// White card:   #FDFCF9
// Fonts: Playfair Display (display) · Georgia (body) · system-ui (chrome)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, BadgeCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Indian Startups — Complete Guide to India's Startup Ecosystem 2026 | UpForge",
  description:
    "Everything about Indian startups in 2026 — 650,000+ startups, 126 unicorns, $11.6B raised in 2025. Sector guide, city breakdown, top funded companies, unicorn tracker and more.",
  keywords:
    "indian startups, startups in India, Indian startup ecosystem 2026, India startup funding, list of startups in India, new startups in India, startup India, Indian unicorns, Bengaluru startups, fintech India, edtech India, AI startups India",
  alternates: { canonical: "https://www.upforge.in/indian-startups" },
  openGraph: {
    title: "Indian Startups 2026 — Complete Ecosystem Guide | UpForge",
    description: "650,000+ startups. 126 unicorns. $11.6B raised in 2025. The complete guide to India's startup ecosystem.",
    url: "https://www.upforge.in/indian-startups",
    siteName: "UpForge",
    locale: "en_IN",
    type: "article",
    images: [{ url: "https://www.upforge.in/og/indian-startups.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "Indian Startups 2026 | UpForge",
    images: ["https://www.upforge.in/og/indian-startups.png"],
  },
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const ECOSYSTEM_STATS = [
  { v: "650,000+", l: "DPIIT-Recognized Startups",   sub: "As of March 2026" },
  { v: "126",      l: "Unicorns",                     sub: "3rd globally" },
  { v: "$11.6B",   l: "Funding in 2025",              sub: "+18% YoY" },
  { v: "3rd",      l: "Largest Ecosystem",            sub: "After US & China" },
]

const SECTORS = [
  {
    name: "Fintech", count: "23 unicorns", funding: "$1.6B in 2025",
    examples: "Razorpay · CRED · Groww · PhonePe",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=480&q=80&auto=format&fit=crop",
    imgAlt: "Digital payments fintech India",
    why: "India's UPI stack and 900M+ banked citizens create a uniquely captive fintech market. Payments, lending, and wealthtech dominate.",
  },
  {
    name: "SaaS / Enterprise", count: "15 unicorns", funding: "$1.1B in 2025",
    examples: "Zoho · Freshworks · Darwinbox · BrowserStack",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=480&q=80&auto=format&fit=crop",
    imgAlt: "SaaS enterprise software India",
    why: "India's engineering talent and English fluency make it the world's SaaS factory. B2B software ships globally from Chennai and Bengaluru.",
  },
  {
    name: "AI / Deeptech", count: "3 unicorns + rising", funding: "$643M in 2025",
    examples: "Krutrim · Sarvam AI · Neysa · Fractal",
    accent: "#7C3AED", accentBg: "#F5F3FF", accentBorder: "#C4B5FD",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=480&q=80&auto=format&fit=crop",
    imgAlt: "AI deep tech startup India",
    why: "Government IndiaAI Mission, IIT talent pipeline, and enterprise demand are converging. India's AI story is just beginning.",
  },
  {
    name: "E-commerce / D2C", count: "18 unicorns", funding: "$800M+ in 2025",
    examples: "Meesho · Nykaa · Lenskart · FirstCry",
    accent: "#DC2626", accentBg: "#FEF2F2", accentBorder: "#FCA5A5",
    img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=480&q=80&auto=format&fit=crop",
    imgAlt: "D2C e-commerce India startup",
    why: "500M internet users and a fast-growing middle class make India the world's most exciting e-commerce growth story outside China.",
  },
  {
    name: "Edtech", count: "7 unicorns", funding: "$400M in 2025",
    examples: "PhysicsWallah · upGrad · Eruditus",
    accent: "#059669", accentBg: "#ECFDF5", accentBorder: "#6EE7B7",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=480&q=80&auto=format&fit=crop",
    imgAlt: "Edtech online learning India",
    why: "350M+ students and massive competitive exam culture drive demand. The post-BYJU's era favours profitability-first models.",
  },
  {
    name: "Healthtech", count: "6 unicorns", funding: "$500M in 2025",
    examples: "Qure.ai · Practo · Pristyn Care · 1mg",
    accent: "#0D9488", accentBg: "#F0FDFA", accentBorder: "#99F6E4",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=480&q=80&auto=format&fit=crop",
    imgAlt: "Healthtech digital health India",
    why: "Massive underserved market — India has 1 doctor per 1,800 patients. Digital health, diagnostics AI, and telemedicine are filling the gap.",
  },
  {
    name: "Quick Commerce", count: "9 unicorns", funding: "$600M in 2025",
    examples: "Zepto · Porter · Shiprocket · Delhivery",
    accent: "#EA580C", accentBg: "#FFF7ED", accentBorder: "#FDBA74",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=480&q=80&auto=format&fit=crop",
    imgAlt: "Quick commerce delivery logistics India",
    why: "India's dark store revolution — Zepto's 10-minute delivery model has been copied globally. Logistics infrastructure is the backbone of the digital economy.",
  },
  {
    name: "Defence / Deeptech", count: "Emerging", funding: "$311M in H1 2025",
    examples: "Pixxel · Skyroot · Ideaforge",
    accent: "#475569", accentBg: "#F8FAFC", accentBorder: "#CBD5E1",
    img: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=480&q=80&auto=format&fit=crop",
    imgAlt: "Defence aerospace deeptech India",
    why: "$311M raised in H1 2025 alone. Government's Make-in-India defence push is creating a new category of well-funded hardware startups.",
  },
]

const CITIES = [
  {
    name: "Bengaluru", unicorns: 52, label: "Silicon Valley of India",
    detail: "AI, SaaS, Fintech, Deeptech — the undisputed startup capital of India.",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Bengaluru city skyline startup hub",
    accent: "#2563EB",
  },
  {
    name: "Delhi-NCR", unicorns: 40, label: "Policy & Enterprise Hub",
    detail: "Edtech, logistics, and enterprise tech dominate. Proximity to regulators is a real advantage.",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Delhi NCR city startup hub India",
    accent: "#DC2626",
  },
  {
    name: "Mumbai", unicorns: 18, label: "FinTech & Media Capital",
    detail: "BFSI startups, quick commerce, and D2C brands. Raised $8.2M per deal on average in 2025.",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Mumbai skyline fintech startup hub",
    accent: "#D97706",
  },
  {
    name: "Hyderabad", unicorns: 8, label: "Deeptech & Healthcare",
    detail: "Darwinbox, Qure.ai, and strong pharma-adjacent startups define Hyderabad's identity.",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Hyderabad tech city startup India",
    accent: "#7C3AED",
  },
  {
    name: "Pune", unicorns: 8, label: "Product-First Culture",
    detail: "Engineering-led startups with strong product culture. Growing quickly as Bengaluru overflows.",
    img: "https://images.unsplash.com/photo-1622050756792-5b1180bab37b?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Pune startup city India",
    accent: "#059669",
  },
  {
    name: "Chennai", unicorns: 5, label: "SaaS Origin City",
    detail: "Freshworks, Zoho, Chargebee — Chennai is where Indian SaaS was invented.",
    img: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&q=80&auto=format&fit=crop",
    imgAlt: "Chennai SaaS startup city India",
    accent: "#0D9488",
  },
]

const TOP_FUNDED = [
  { name: "Ola Cabs",    funding: "$3.8B", sector: "Mobility",        accent: "#EA580C" },
  { name: "OYO",         funding: "$3.7B", sector: "Hospitality",     accent: "#DC2626" },
  { name: "Zepto",       funding: "$2.5B", sector: "Quick Commerce",  accent: "#D97706" },
  { name: "Lenskart",    funding: "$1.8B", sector: "D2C / Eyewear",   accent: "#059669" },
  { name: "Meesho",      funding: "$1.6B", sector: "Social Commerce", accent: "#7C3AED" },
  { name: "CRED",        funding: "$1.4B", sector: "Fintech",         accent: "#111827" },
  { name: "Razorpay",    funding: "$1.4B", sector: "Payments",        accent: "#2563EB" },
  { name: "Groww",       funding: "$1.2B", sector: "WealthTech",      accent: "#0D9488" },
]

const TRENDS = [
  { num: "01", title: "IPO Supercycle",                            accent: "#2563EB",
    body: "More than 18 Indian startups went public in 2025. 2026 will see the second wave — Groww, Zerodha, and multiple SaaS companies are in the pipeline. Public markets are now a viable and preferred exit route." },
  { num: "02", title: "Profitability Over Growth",                 accent: "#059669",
    body: "Over one-third of Indian startups chose runway extension over fundraising in 2025. The 'grow at all costs' era is over. Investors now ask for EBITDA visibility as a baseline expectation at every stage." },
  { num: "03", title: "Reverse Flips",                            accent: "#D97706",
    body: "Indian startups that had incorporated in Singapore or Delaware are moving their legal domicile back to India. Listing domestically is no longer a compromise — it's the smartest path for many." },
  { num: "04", title: "Tier-2 City Surge",                        accent: "#DC2626",
    body: "Jaipur, Indore, Kochi, Chandigarh — Tier-2 cities saw 45% YoY growth in startup registrations in 2025. The next generation of Indian founders is not from Bengaluru." },
  { num: "05", title: "AI: From Experimentation to Accountability", accent: "#7C3AED",
    body: "2026 will separate defensible AI businesses from surface-level wrappers. Startups that show measurable ROI from AI — not just a product with 'AI inside' — will attract capital." },
  { num: "06", title: "Defence Tech Breakthrough",                 accent: "#475569",
    body: "$311M raised by defence tech startups in H1 2025 alone — an unprecedented figure. The Make-in-India defence push is creating a funded hardware startup category for the first time." },
]

const FAQS = [
  { q: "How many startups are in India?",
    a: "India has over 650,000 DPIIT-recognized startups as of March 2026, making it the world's third-largest startup ecosystem after the US and China." },
  { q: "How many unicorns are in India?",
    a: "India has 126 unicorns as of March 2026. The most recent is Neysa (February 2026), an AI cloud company. India is third globally in unicorn count." },
  { q: "Which is India's startup capital?",
    a: "Bengaluru, with 52 unicorns and the highest deal volume, is India's undisputed startup capital — followed by Delhi-NCR (40 unicorns) and Mumbai (18 unicorns)." },
  { q: "How do I list my startup on UpForge?",
    a: "Listing on UpForge is completely free. Visit upforge.in/submit, fill in your startup details, and get independently verified, publicly indexed, and added to India's trusted registry." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.upforge.in/indian-startups",
      url: "https://www.upforge.in/indian-startups",
      name: "Indian Startups — Complete Ecosystem Guide 2026 | UpForge",
      dateModified: "2026-03-07",
      isPartOf: { "@type": "WebSite", name: "UpForge", url: "https://www.upforge.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home",            item: "https://www.upforge.in" },
          { "@type": "ListItem", position: 2, name: "Indian Startups", item: "https://www.upforge.in/indian-startups" },
        ],
      },
    },
    {
      "@type": "Article",
      headline: "Indian Startups 2026 — Complete Ecosystem Guide",
      author: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.in" },
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

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function SH({ marker, title }: { marker: string; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-0"
      style={{ paddingTop: "clamp(28px,4vw,44px)", paddingBottom: 20, borderTop: "2px solid #1A1208" }}>
      <span style={{ fontSize: 8, fontWeight: 800, color: "#B45309", letterSpacing: ".28em", fontFamily: "system-ui,sans-serif", flexShrink: 0 }}>
        {marker}
      </span>
      <h2 className="pf" style={{ fontSize: "clamp(1.05rem,2vw,1.4rem)", fontWeight: 900, color: "#1A1208", margin: 0, lineHeight: 1.1 }}>
        {title}
      </h2>
      <div className="flex-1 h-px" style={{ background: "#C8C2B4" }} />
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function IndianStartupsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif", color: "#1A1208" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp .55s cubic-bezier(.22,.68,0,1.2) both; }
        .fu1 { animation-delay: .00s; }
        .fu2 { animation-delay: .07s; }
        .fu3 { animation-delay: .14s; }
        .fu4 { animation-delay: .21s; }
        .fu5 { animation-delay: .28s; }
        .fu6 { animation-delay: .35s; }

        .hc { transition: transform .18s ease, box-shadow .18s ease, border-color .18s ease; }
        .hc:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 #1A1208; border-color: #1A1208 !important; z-index: 1; }

        .img-cover { object-fit: cover; object-position: center; width: 100%; height: 100%; transition: transform .4s ease; }
        .img-wrap:hover .img-cover { transform: scale(1.03); }

        .sector-img-wrap { overflow: hidden; position: relative; }

        details summary::-webkit-details-marker { display: none; }
        details[open] .faq-chev { transform: rotate(90deg); }
        .faq-chev { transition: transform .2s ease; }

        .explore-link { transition: border-color .15s, background .15s; }
        .explore-link:hover { border-color: #1A1208 !important; background: #FDFCF9 !important; }

        .funded-row:hover { background: #F3EFE5 !important; }
        .funded-row { transition: background .15s; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        .intro-drop::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4em; font-weight: 900;
          line-height: 0.82; float: left;
          margin-right: 0.07em; margin-top: 0.05em;
          color: #1A1208;
        }

        @media (min-width: 768px) {
          .ncols-2 { columns: 2; column-gap: 2.5rem; column-rule: 1px solid #D8D2C4; }
          .ncols-3 { columns: 3; column-gap: 2rem; column-rule: 1px solid #D8D2C4; }
        }

        .city-card-img { height: 120px; overflow: hidden; position: relative; }
        @media (max-width: 639px) {
          .city-card-img { height: 90px; }
        }

        .trend-bar { width: 2px; flex-shrink: 0; align-self: stretch; }

        @keyframes barFill {
          from { width: 0; }
          to { width: var(--w); }
        }
        .bar-fill { animation: barFill 1s .6s cubic-bezier(.4,0,.2,1) both; }

        @media (max-width: 639px) {
          .hide-mob { display: none !important; }
        }
      `}</style>

      {/* BREADCRUMB */}
      <nav style={{ background: "#EDE9DF", borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }} aria-label="Breadcrumb">
        <div className="max-w-[1160px] mx-auto px-4 sm:px-8 py-2.5">
          <ol className="flex flex-wrap items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
            {[["Home", "/"], ["Startup Registry", "/startup"], ["Indian Startups", "#"]].map(([label, href], i) => (
              <li key={label} className="flex items-center gap-1.5" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                {href === "#"
                  ? <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#1A1208" }} itemProp="name">{label}</span>
                  : <Link href={href} className="text-[10px] uppercase tracking-wider transition-colors hover:text-[#1A1208]" style={{ color: "#AAA" }} itemProp="item"><span itemProp="name">{label}</span></Link>
                }
                <meta itemProp="position" content={String(i + 1)} />
                {i < 2 && <ChevronRight className="w-3 h-3 flex-shrink-0" style={{ color: "#C8C2B4" }} aria-hidden="true" />}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="max-w-[1160px] mx-auto px-4 sm:px-8 pb-24">

        {/* MASTHEAD */}
        <header className="fu fu1" style={{ borderBottom: "3px solid #1A1208" }}>

          <div className="text-center px-4 pt-10 sm:pt-14 pb-6 sm:pb-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
            <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
              UpForge Intelligence · Independent Startup Registry
            </p>
            <h1 className="pf font-black leading-[1.02] tracking-tight text-[#1A1208]"
              style={{ fontSize: "clamp(2rem,5.5vw,4.6rem)", marginBottom: 12 }}>
              Indian Startups
            </h1>
            <p className="pf italic" style={{ fontSize: "clamp(1rem,2vw,1.5rem)", color: "#B45309", marginBottom: 16 }}>
              The Complete Ecosystem Guide — 2026
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 sm:w-36" style={{ background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 13 }} aria-hidden="true">✦</span>
              <div className="h-px w-16 sm:w-36" style={{ background: "#C8C2B4" }} />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 px-1 py-2.5" style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}>
            <span className="text-[8px] font-black tracking-[0.28em] uppercase px-3 py-1 text-white" style={{ background: "#1A1208" }}>
              Ecosystem Report
            </span>
            {["650K+ Startups", "126 Unicorns", "$11.6B Raised 2025", "March 2026"].map((t, i) => (
              <span key={i} className="flex items-center gap-2 text-[8px] text-[#AAA] uppercase tracking-wider">
                {i > 0 && <span style={{ color: "#C8C2B4" }}>·</span>}
                {t}
              </span>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1fr_1.8px_320px] xl:grid-cols-[1fr_1.8px_360px] py-8 gap-0">

            <div className="lg:pr-8">
              <div className="img-wrap relative w-full mb-6 overflow-hidden" style={{ height: "clamp(200px,28vw,340px)" }}>
                {/* Hero image — no onError needed, Unsplash URLs are stable */}
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&q=85&auto=format&fit=crop"
                  alt="India startup ecosystem founders technology 2026"
                  className="img-cover"
                  width={900}
                  height={340}
                  loading="eager"
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(26,18,8,0.82) 0%, rgba(26,18,8,0.15) 55%, transparent 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                  <p className="pf font-black text-white leading-tight" style={{ fontSize: "clamp(1.1rem,2.2vw,1.55rem)", textShadow: "0 2px 8px rgba(0,0,0,0.5)" }}>
                    650,000 companies.<br />126 unicorns. One story.
                  </p>
                  <p className="text-white/60 text-[10px] uppercase tracking-wider mt-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                    India's startup ecosystem — 2026 edition
                  </p>
                </div>
              </div>

              <div className="ncols-3">
                <p className="intro-drop leading-[1.88] text-[#2C2010] mb-3" style={{ fontSize: "clamp(12px,1.2vw,13.5px)", fontFamily: "'Georgia','Times New Roman',serif" }}>
                  India is the world's third-largest startup ecosystem — a status earned through two decades of relentless founder ambition, engineering talent, and a domestic market large enough to sustain billion-dollar businesses.
                </p>
                <p className="leading-[1.88] text-[#2C2010] mb-3" style={{ fontSize: "clamp(12px,1.2vw,13.5px)" }}>
                  With 650,000+ DPIIT-recognized startups, 126 unicorns, and $11.6B raised in 2025 alone, India's startup story is no longer a future promise — it is a documented present. The ecosystem spans eight major sectors, six cities, and every income level of the Indian economy.
                </p>
                <p className="leading-[1.88] text-[#2C2010]" style={{ fontSize: "clamp(12px,1.2vw,13.5px)" }}>
                  This is UpForge's authoritative reference to understanding what's being built, where, by whom — and what comes next. Verified data, editorial depth, no paid placements.
                </p>
              </div>
            </div>

            <div className="hidden lg:block" style={{ background: "#C8C2B4", width: "1.5px", margin: "0 0" }} />

            <div className="hidden lg:flex flex-col gap-0 pl-8 pt-0">
              <div style={{ border: "2px solid #1A1208", marginBottom: 16 }}>
                <div className="px-4 py-2" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {ECOSYSTEM_STATS.map((s, i) => (
                    <div key={i} className="px-4 py-4" style={{ borderColor: "#D8D2C4", background: "#FDFCF9" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "clamp(1.3rem,1.8vw,1.8rem)" }}>{s.v}</dd>
                      <p className="text-[8px] text-[#B45309] mt-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.sub}</p>
                    </div>
                  ))}
                </dl>
              </div>

              <div style={{ border: "1px solid #D8D2C4", background: "#FDFCF9", marginBottom: 16 }}>
                <div className="px-4 py-2" style={{ borderBottom: "1.5px solid #1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>Top Cities</p>
                </div>
                {CITIES.slice(0, 3).map((c, i) => (
                  <div key={i} className="flex items-center justify-between px-4 py-3" style={{ borderBottom: i < 2 ? "1px solid #EDE9DF" : "none" }}>
                    <div>
                      <p className="pf font-bold text-[#1A1208]" style={{ fontSize: 12.5 }}>{c.name}</p>
                      <p className="text-[8.5px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>{c.label}</p>
                    </div>
                    <div className="text-right">
                      <p className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.3rem" }}>{c.unicorns}</p>
                      <p className="text-[7.5px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>unicorns</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-4 py-4" style={{ background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
                <p className="text-[7.5px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: "#2563EB", fontFamily: "system-ui,sans-serif" }}>The Insight</p>
                <p className="pf italic text-[#1A1208] leading-snug" style={{ fontSize: 12.5 }}>
                  "India doesn't lack founders. It lacks the infrastructure to make them visible."
                </p>
                <p className="text-[8px] text-[#AAA] mt-2 uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>— UpForge Editorial</p>
              </div>
            </div>
          </div>

          <div className="lg:hidden grid grid-cols-2 gap-[1.5px] mb-6" style={{ background: "#1A1208", border: "2px solid #1A1208" }}>
            {ECOSYSTEM_STATS.map((s, i) => (
              <div key={i} style={{ background: "#FDFCF9", padding: "clamp(10px,2.5vw,16px)" }}>
                <p className="pf font-black leading-none" style={{ fontSize: "clamp(1.4rem,5vw,1.8rem)", color: "#1A1208", marginBottom: 4 }}>{s.v}</p>
                <p className="text-[8.5px] uppercase tracking-[0.14em]" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif", marginBottom: 2 }}>{s.l}</p>
                <p className="text-[8px]" style={{ color: "#B45309", fontFamily: "system-ui,sans-serif" }}>{s.sub}</p>
              </div>
            ))}
          </div>
        </header>

        {/* §01 — SECTOR BREAKDOWN */}
        <section className="fu fu2" style={{ borderBottom: "1px solid #C8C2B4" }} aria-labelledby="sectors-heading">
          <SH marker="§01" title="India's Startup Sectors — Where the Capital Flows" />
          <p className="text-[9px] uppercase tracking-[0.24em] mb-6" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            8 dominant verticals · 2026 funding data
          </p>

          <div className="grid sm:grid-cols-2 gap-[1.5px]" style={{ background: "#1A1208", border: "1.5px solid #1A1208", marginBottom: "clamp(20px,4vw,36px)" }}>
            {SECTORS.map((s, i) => (
              <div key={i} className="hc" style={{ background: "#FDFCF9", borderTop: `3px solid ${s.accent}`, cursor: "default" }}>
                {/* ✅ FIX: removed onError handler — not allowed in Server Components */}
                <div className="sector-img-wrap img-wrap" style={{ height: 130, overflow: "hidden", position: "relative" }}>
                  <img
                    src={s.img}
                    alt={s.imgAlt}
                    className="img-cover"
                    width={480}
                    height={130}
                    loading="lazy"
                    style={{ display: "block", objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `linear-gradient(to right, ${s.accentBg}cc 0%, transparent 70%)` }} />
                  <div className="absolute top-3 left-3">
                    <span className="text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 text-white"
                      style={{ background: s.accent, fontFamily: "system-ui,sans-serif" }}>
                      {s.count}
                    </span>
                  </div>
                </div>

                <div style={{ padding: "clamp(14px,2.2vw,20px)" }}>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="pf font-bold" style={{ fontSize: "clamp(13px,1.4vw,15px)", color: "#1A1208", margin: 0 }}>{s.name}</h3>
                    <span className="flex-1 h-px" style={{ background: "#D8D2C4" }} />
                    <span style={{ fontSize: 9, color: s.accent, fontFamily: "system-ui,sans-serif", fontWeight: 700 }}>{s.funding}</span>
                  </div>
                  <p style={{ fontSize: "clamp(11px,1.1vw,12.5px)", color: "#5A4A30", lineHeight: 1.72, marginBottom: 10, fontFamily: "system-ui,sans-serif" }}>
                    {s.why}
                  </p>
                  <p style={{ fontSize: 9, color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
                    <span style={{ color: "#6B5C40", fontWeight: 600 }}>Notable: </span>{s.examples}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* §02 — STARTUP CITIES */}
        <section className="fu fu3" style={{ borderBottom: "1px solid #C8C2B4" }} aria-labelledby="cities-heading">
          <SH marker="§02" title="Startup Cities of India" />
          <p className="text-[9px] uppercase tracking-[0.24em] mb-6" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            6 cities · unicorn count · sector identity
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[1.5px]"
            style={{ background: "#1A1208", border: "1.5px solid #1A1208", marginBottom: "clamp(20px,4vw,36px)" }}>
            {CITIES.map((c, i) => (
              <div key={i} className="hc" style={{ background: "#FDFCF9", cursor: "default" }}>
                {/* ✅ FIX: removed onError handler — not allowed in Server Components */}
                <div className="city-card-img img-wrap" style={{ borderTop: `3px solid ${c.accent}`, overflow: "hidden", position: "relative" }}>
                  <img
                    src={c.img}
                    alt={c.imgAlt}
                    className="img-cover"
                    width={400}
                    height={120}
                    loading="lazy"
                    style={{ display: "block", objectFit: "cover", width: "100%", height: "100%" }}
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: "linear-gradient(to top, rgba(26,18,8,0.72) 0%, transparent 60%)" }} />
                  <div className="absolute bottom-2 left-3 right-3 flex items-end justify-between">
                    <p className="pf font-black text-white leading-none" style={{ fontSize: "clamp(14px,1.6vw,17px)" }}>{c.name}</p>
                    <div className="text-right">
                      <p className="pf font-black text-white leading-none" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>{c.unicorns}</p>
                      <p className="text-white/50 text-[8px] uppercase tracking-wider leading-none" style={{ fontFamily: "system-ui,sans-serif" }}>unicorns</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: "clamp(12px,2vw,16px)" }}>
                  <p className="text-[8.5px] font-black uppercase tracking-[0.22em] mb-2" style={{ color: c.accent, fontFamily: "system-ui,sans-serif" }}>
                    {c.label}
                  </p>
                  <p style={{ fontSize: "clamp(11px,1.1vw,12px)", color: "#5A4A30", lineHeight: 1.65, fontFamily: "system-ui,sans-serif", margin: 0 }}>
                    {c.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* §03 — MOST FUNDED */}
        <section className="fu fu3" style={{ borderBottom: "1px solid #C8C2B4" }} aria-labelledby="funded-heading">
          <SH marker="§03" title="Most Funded Indian Startups" />
          <p className="text-[9px] uppercase tracking-[0.24em] mb-6" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            Total capital raised · all rounds
          </p>

          <div style={{ border: "1.5px solid #1A1208", marginBottom: "clamp(20px,4vw,36px)" }}>
            <div className="grid grid-cols-[28px_1fr_auto_auto] gap-4 px-5 py-3 items-center"
              style={{ background: "#1A1208", fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white/30">#</span>
              <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white/30">Company</span>
              <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white/30">Sector</span>
              <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white/30">Raised</span>
            </div>
            {TOP_FUNDED.map((s, i) => (
              <div key={i} className="funded-row grid grid-cols-[28px_1fr_auto_auto] gap-4 px-5 items-center"
                style={{ background: i % 2 === 0 ? "#FDFCF9" : "#F8F5EF", borderBottom: i < TOP_FUNDED.length - 1 ? "1px solid #EDE9DF" : "none", padding: "clamp(10px,1.8vw,15px) 20px" }}>
                <span className="font-mono font-bold" style={{ fontSize: 11, color: "#C8C2B4", fontFamily: "system-ui,sans-serif" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="pf font-bold" style={{ fontSize: "clamp(12px,1.3vw,14px)", color: "#1A1208", margin: 0 }}>{s.name}</p>
                  <div className="h-1 mt-1.5 rounded-sm" style={{ width: `${85 - i * 9}%`, background: s.accent, opacity: 0.35 }} />
                </div>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5"
                  style={{ color: s.accent, background: `${s.accent}18`, border: `1px solid ${s.accent}33`, fontFamily: "system-ui,sans-serif", fontWeight: 700, whiteSpace: "nowrap" }}>
                  {s.sector}
                </span>
                <span className="pf font-black" style={{ fontSize: "clamp(1rem,1.5vw,1.2rem)", color: "#059669", whiteSpace: "nowrap" }}>
                  {s.funding}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* §04 — INSIGHT STRIP */}
        <section className="fu fu4" style={{ borderBottom: "1px solid #C8C2B4" }} aria-label="UpForge ecosystem insights">
          <SH marker="§04" title="UpForge Ecosystem Insights" />

          <div className="grid sm:grid-cols-3 gap-4" style={{ marginBottom: "clamp(20px,4vw,36px)" }}>
            {[
              { v: "~80%", l: "First-generation founders",
                b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying." },
              { v: "$950B", l: "Value created by under-40s",
                b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing." },
              { v: "126",   l: "Unicorns — and rising",
                b: "India just crossed 126 unicorns. The founders reading this today will build the next 126. UpForge exists to help them get discovered." },
            ].map((item, i) => (
              <div key={i} className="hc" style={{ background: "#FDFCF9", border: "1px solid #D8D2C4", padding: "clamp(16px,2.5vw,24px)", cursor: "default" }}>
                <p className="pf font-black text-[#1A1208] leading-none mb-2" style={{ fontSize: "clamp(1.8rem,3vw,2.4rem)" }}>{item.v}</p>
                <p className="text-[8px] font-black uppercase tracking-[0.18em] mb-3" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{item.l}</p>
                <p style={{ fontSize: "clamp(11px,1.1vw,12px)", color: "#6B5C40", lineHeight: 1.72, fontFamily: "system-ui,sans-serif", margin: 0 }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* §05 — 2026 TRENDS */}
        <section className="fu fu5" style={{ borderBottom: "1px solid #C8C2B4" }} aria-labelledby="trends-heading">
          <SH marker="§05" title="Key Trends Shaping India's Startup Story in 2026" />
          <p className="text-[9px] uppercase tracking-[0.24em] mb-6" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            Six forces founders must understand
          </p>

          <div style={{ border: "1.5px solid #1A1208", marginBottom: "clamp(20px,4vw,36px)" }}>
            {TRENDS.map((t, i) => (
              <div key={t.num} className="flex gap-0"
                style={{ background: i % 2 === 0 ? "#FDFCF9" : "#F8F5EF", borderBottom: i < TRENDS.length - 1 ? "1.5px solid #1A1208" : "none" }}>
                <div className="trend-bar flex-shrink-0" style={{ background: t.accent, width: 4 }} />
                <div className="flex-shrink-0 flex items-center justify-center px-4 py-4 hide-mob"
                  style={{ borderRight: "1px solid #EDE9DF", minWidth: 52 }}>
                  <span className="pf font-black text-[#C8C2B4] leading-none" style={{ fontSize: "1.1rem" }}>{t.num}</span>
                </div>
                <div style={{ padding: "clamp(14px,2.2vw,20px) clamp(14px,2vw,20px)" }}>
                  <h3 className="pf font-bold mb-2" style={{ fontSize: "clamp(13px,1.4vw,15px)", color: "#1A1208", margin: "0 0 8px 0" }}>
                    {t.title}
                  </h3>
                  <p style={{ fontSize: "clamp(11.5px,1.2vw,13px)", color: "#5A4A30", lineHeight: 1.76, fontFamily: "system-ui,sans-serif", margin: 0 }}>
                    {t.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* §06 — FAQ */}
        <section className="fu fu6" style={{ borderBottom: "1px solid #C8C2B4" }} aria-labelledby="faq-heading">
          <SH marker="§06" title="Frequently Asked Questions" />
          <p className="text-[9px] uppercase tracking-[0.24em] mb-6" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            About India's startup ecosystem
          </p>

          <div style={{ border: "1.5px solid #1A1208", marginBottom: "clamp(20px,4vw,36px)" }}>
            {FAQS.map((f, i) => (
              <details key={i} style={{ background: i % 2 === 0 ? "#FDFCF9" : "#F8F5EF", borderBottom: i < FAQS.length - 1 ? "1px solid #EDE9DF" : "none" }}>
                <summary className="flex items-center justify-between cursor-pointer"
                  style={{ padding: "clamp(13px,2vw,18px) clamp(16px,2.5vw,24px)", listStyle: "none" }}>
                  <span className="pf font-bold" style={{ fontSize: "clamp(12.5px,1.3vw,14.5px)", color: "#1A1208", paddingRight: 12 }}>{f.q}</span>
                  <ChevronRight className="faq-chev w-4 h-4 flex-shrink-0" style={{ color: "#C8C2B4" }} aria-hidden="true" />
                </summary>
                <div style={{ padding: "0 clamp(16px,2.5vw,24px) clamp(13px,2vw,18px)", borderTop: "1px solid #EDE9DF" }}>
                  <p style={{ fontSize: "clamp(12px,1.2vw,13px)", color: "#5A4A30", lineHeight: 1.76, paddingTop: 12, fontFamily: "system-ui,sans-serif", margin: 0 }}>
                    {f.a}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* PULL QUOTE */}
        <div className="fu fu6 text-center py-8 my-2" style={{ borderTop: "3px solid #1A1208", borderBottom: "1px solid #C8C2B4" }}>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, marginBottom: 12 }} aria-hidden="true">❧</span>
          <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
            style={{ fontSize: "clamp(15px,2.2vw,21px)" }}>
            "India doesn't lack founders. It lacks the infrastructure to make them visible."
          </blockquote>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, margin: "12px 0 8px" }} aria-hidden="true">❧</span>
          <p className="text-[8.5px] uppercase tracking-[0.24em] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
            — UpForge Editorial · Why This Registry Exists
          </p>
        </div>

        {/* INTERNAL LINKS */}
        <nav className="fu fu6 py-8" style={{ borderBottom: "1px solid #C8C2B4" }} aria-label="Related startup lists on UpForge">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
            Explore on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Top AI Startups India",  h: "/top-ai-startups",    desc: "Best AI companies 2026" },
              { l: "Best SaaS Startups",     h: "/best-saas-startups", desc: "B2B SaaS unicorns" },
              { l: "Indian Unicorns 2026",   h: "/indian-unicorns",    desc: "All 126 unicorns" },
              { l: "Startup Registry",       h: "/startup",            desc: "Full verified database" },
              { l: "Edtech Startups",        h: "/edtech-startups",    desc: "PhysicsWallah & more" },
              { l: "Fintech Startups",       h: "/fintech-startups",   desc: "Zerodha, CRED, Paytm" },
              { l: "Founder Chronicles",     h: "/",                   desc: "Editorial founder profiles" },
              { l: "Submit Your Startup",    h: "/submit",             desc: "Get listed free" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h}
                className="explore-link flex flex-col gap-1 p-3"
                style={{ border: "1px solid #D8D2C4", background: "white", textDecoration: "none", color: "#1A1208" }}>
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#1A1208] flex items-center gap-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span className="text-[8.5px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.desc}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <section className="fu fu6 pt-7 grid sm:grid-cols-2 gap-6 items-center" style={{ marginTop: 8 }} aria-label="List your startup on UpForge">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BadgeCheck className="w-4 h-4" style={{ color: "#E8C547" }} />
              <p className="text-[8px] font-black uppercase tracking-[0.24em]" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>UpForge Registry</p>
            </div>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)" }}>
              Your startup belongs in this list.
            </p>
            <p style={{ fontSize: "clamp(11px,1.1vw,12.5px)", color: "#6B5C40", fontFamily: "system-ui,sans-serif", lineHeight: 1.65, maxWidth: 400 }}>
              Get independently verified and indexed in India's most trusted startup registry. Free forever. Google-indexed. Trusted by founders and investors.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: "clamp(9px,1vw,11px)", fontFamily: "system-ui,sans-serif", textDecoration: "none" }}
              aria-label="List your Indian startup on UpForge for free">
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-7 pb-2">
          <p className="text-[8.5px] leading-relaxed"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}>
            * Statistics sourced from Tracxn, Inc42, DPIIT, Growthlist, and public company disclosures as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
            Startup valuations are approximate and reflect latest available public data.
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
              ].map(lnk => (
                <li key={lnk.h + lnk.l}>
                  <Link href={lnk.h}
                    className="text-[8.5px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}>
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
