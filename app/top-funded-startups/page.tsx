"use client"

// app/top-funded-startups/page.tsx
// THE CAPITAL REPORT — Broadsheet newspaper slide navigator (like The Founder Chronicle)
//
// ─── HOW TO ADD IMAGES ───────────────────────────────────────────────────────
// Each startup has imgSrc — currently set to real Unsplash URLs as placeholders.
// Replace any URL with your own direct image link (JPG/WebP, ideally 1200×800px).
// Images use plain <img> tag — any public URL works, no Next.js config needed.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"

const STARTUPS = [
  {
    no: "01",
    name: "Ola Cabs",
    slug: "ola-cabs",
    sector: "MOBILITY",
    hq: "Bengaluru",
    founded: "2010",
    total: "$3.8B",
    totalRaw: 3.8,
    valuation: "$7.3B",
    lastRound: "Series J · 2023",
    investors: "SoftBank · Tiger Global · Accel · DST Global",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    accentBorder: "#DDD6FE",
    tag: "Market Leader",
    // Real image: Indian ride-hailing / city traffic / Ola cab
    imgSrc: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=85",
    imgAlt: "Ola Cabs — India's largest ride-hailing company, Bengaluru",
    headline: "India's largest ride-hailing fleet. SoftBank's single biggest India bet.",
    deck: "From a single city to 250+ — ANI Technologies absorbed more capital than any mobility company in India and still commands the road.",
    col1: {
      h: "The Infrastructure Play",
      b: "Ola is not just a taxi app. It is the reason 250 Indian cities have reliable, priced, on-demand urban transport. SoftBank's $2B+ commitment was not a bet on Ola alone — it was a bet that India's urbanisation curve would make this infrastructure irreplaceable.\n\nWhen Uber arrived with US capital and Silicon Valley muscle, Ola did not retreat. It deepened into Tier 2 cities where Uber found no economics, building a moat through geography rather than product."
    },
    col2: {
      h: "The Number That Matters",
      b: "$3.8B raised. $7.3B valuation. 250+ cities. But the number that matters most is not financial — it is the 1 million driver-partners whose entire livelihood runs on Ola's platform.\n\nThat dependency is both the company's greatest asset and its greatest responsibility. The IPO, when it comes, will be one of the most watched listings in Indian market history — not for the returns, but for what it says about India's gig economy."
    },
    pull: "Geography is a moat. Ola built in cities nobody else wanted, then owned them.",
    lesson: "Infrastructure is not glamorous. It is permanent.",
    stats: [
      { l: "Total Raised", v: "$3.8B" },
      { l: "Valuation",    v: "$7.3B" },
      { l: "Cities",       v: "250+"  },
      { l: "Founded",      v: "2010"  },
    ],
  },
  {
    no: "02",
    name: "OYO Rooms",
    slug: "oyo",
    sector: "HOSPITALITY",
    hq: "Delhi",
    founded: "2013",
    total: "$3.7B",
    totalRaw: 3.7,
    valuation: "$9B",
    lastRound: "Series G · $807M · 2021",
    investors: "SoftBank · Airbnb · Sequoia · Lightspeed",
    accent: "#DC2626",
    accentBg: "#FFF1F2",
    accentBorder: "#FECDD3",
    tag: "IPO Bound",
    // Real image: hotel lobby / hospitality / India budget hotel
    imgSrc: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=85",
    imgAlt: "OYO Rooms — hospitality startup, India's standardised hotel chain",
    headline: "A 19-year-old from Odisha built the world's third-largest hotel chain.",
    deck: "No IIT degree. No VC network. One insight: India's budget accommodation was fragmented, inconsistent, and waiting for a single brand to impose order on it.",
    col1: {
      h: "One Standard. Every City.",
      b: "Ritesh Agarwal's thesis was deceptively simple: brand standardisation in a fragmented market creates disproportionate value. Indian budget hotels were invisible online, inconsistent in quality, and impossible to trust from a distance.\n\nOYO imposed a standard — clean linen, working WiFi, a predictable check-in experience — across thousands of properties it did not own. The asset-light model attracted SoftBank's Vision Fund at a scale that shocked the hospitality industry."
    },
    col2: {
      h: "Survived. Restructured. Standing.",
      b: "COVID nearly ended OYO. Occupancy collapsed overnight. Thousands of hotel partners demanded exits. Ritesh Agarwal bought back shares at personal cost, restructured the balance sheet, and rebuilt revenue city by city.\n\nThe OYO that filed its DRHP for IPO is a leaner company than the one that was valued at $10B in 2019 — but it is a real company, with real revenue, and a founder who proved that conviction is not destroyed by a pandemic."
    },
    pull: "He bought back his own shares during COVID. That is what conviction looks like.",
    lesson: "The company that survives a near-death experience is harder to kill than the one that never faced one.",
    stats: [
      { l: "Total Raised", v: "$3.7B" },
      { l: "Valuation",    v: "$9B"   },
      { l: "Properties",   v: "157K+" },
      { l: "Founded",      v: "2013"  },
    ],
  },
  {
    no: "03",
    name: "Zepto",
    slug: "zepto",
    sector: "QUICK COMMERCE",
    hq: "Mumbai",
    founded: "2021",
    total: "$2.5B",
    totalRaw: 2.5,
    valuation: "$5.9B",
    lastRound: "Series H · $350M · 2025",
    investors: "StepStone · Nexus · Y Combinator · Contrary",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    accentBorder: "#FDE68A",
    tag: "Fastest Growing",
    // Real image: grocery delivery / warehouse / quick commerce dark store
    imgSrc: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=85",
    imgAlt: "Zepto — 10-minute grocery delivery startup India, quick commerce",
    headline: "They failed at 19. Rebuilt. Worth $5.9 billion by 22.",
    deck: "KiranaKart failed in months. Aadit Palicha and Kaivalya Vohra treated it as data — and built the fastest-scaling startup in Indian history from its ruins.",
    col1: {
      h: "Failure as Research",
      b: "In 2020, two Stanford freshmen flew back to India to build KiranaKart, a 45-minute grocery app. It failed. Most founders would have returned to California.\n\nThese two stayed in Bengaluru, rented a room, and dissected every mistake. The conclusion: 10-minute delivery was not a gimmick — it was a logistics equation. Dark stores within 1.5km of dense demand. Inventory science. Route optimisation. Every competitor called it insane. The founders called it math."
    },
    col2: {
      h: "The $5.9B Proof",
      b: "Zepto launched in 2021. By August 2023, it was India's first unicorn of the year — at $1.4B. The $350M Series H in 2025 brought the valuation to $5.9B, and Kaivalya Vohra became India's youngest billionaire at 22.\n\n350+ dark stores. 10 cities. Sub-10-minute average delivery. India's quick commerce market crossed $3.3B in 2025. Zepto commands its second-largest share — built not on being first, but on being most precise about what 10 minutes actually requires."
    },
    pull: "We failed with KiranaKart. Most founders go home. We stayed and figured out what we got wrong.",
    lesson: "The first startup teaches you the question. The second lets you answer it.",
    stats: [
      { l: "Total Raised", v: "$2.5B" },
      { l: "Valuation",    v: "$5.9B" },
      { l: "Dark Stores",  v: "350+"  },
      { l: "Founded",      v: "2021"  },
    ],
  },
  {
    no: "04",
    name: "Meesho",
    slug: "meesho",
    sector: "SOCIAL COMMERCE",
    hq: "Bengaluru",
    founded: "2015",
    total: "$1.6B",
    totalRaw: 1.6,
    valuation: "$3.9B",
    lastRound: "Secondary · $275M · 2024",
    investors: "SoftBank · Naspers · Prosus · Y Combinator",
    accent: "#E11D48",
    accentBg: "#FFF1F5",
    accentBorder: "#FECDD3",
    tag: "IPO Bound",
    // Real image: small business / e-commerce / India market / seller
    imgSrc: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=1200&q=85",
    imgAlt: "Meesho — social commerce platform, Indian small business sellers",
    headline: "Built for the 500 million Indians that Flipkart and Amazon never served.",
    deck: "IIT Delhi founders who saw what every VC missed: India's real e-commerce market was not in Mumbai or Bengaluru. It was everywhere else.",
    col1: {
      h: "The Invisible Market",
      b: "Vidit Aatrey and Sanjeev Barnwal built Meesho for the reseller in Rajasthan, the small shop owner in Assam, the first-time online buyer in a Tier 3 city. Every product decision — zero commission, WhatsApp-first, vernacular-first — was made for someone Flipkart's product team had never met.\n\nThe insight was not technology. It was empathy for a segment of Indian commerce that was invisible to everyone building from Bengaluru's upmarket neighbourhoods."
    },
    col2: {
      h: "150 Million Transacting Users",
      b: "150M+ transacting users. $3.9B valuation. A pending IPO that will be one of the most important listings in Indian commerce history — not for the number, but for what it validates.\n\nMeesho proved that India's real digital commerce revolution would happen in towns nobody named in pitch decks, through a messaging app everybody already had, for sellers who wanted to start with zero investment. SoftBank, Naspers, and Y Combinator all agreed."
    },
    pull: "India's real e-commerce revolution happened on WhatsApp, in towns nobody put in a pitch deck.",
    lesson: "Empathy for the underserved is not altruism. It is a billion-dollar competitive advantage.",
    stats: [
      { l: "Total Raised", v: "$1.6B" },
      { l: "Valuation",    v: "$3.9B" },
      { l: "Users",        v: "150M+" },
      { l: "Founded",      v: "2015"  },
    ],
  },
  {
    no: "05",
    name: "Razorpay",
    slug: "razorpay",
    sector: "PAYMENTS INFRASTRUCTURE",
    hq: "Bengaluru",
    founded: "2014",
    total: "$1.4B",
    totalRaw: 1.4,
    valuation: "$7.5B",
    lastRound: "Series F · $375M · 2021",
    investors: "Sequoia · GIC · Tiger Global · Ribbit Capital",
    accent: "#0891B2",
    accentBg: "#F0FDFF",
    accentBorder: "#A5F3FC",
    tag: "Infrastructure",
    // Real image: fintech / payments / digital finance / code
    imgSrc: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=85",
    imgAlt: "Razorpay — India's payments infrastructure, 8 million businesses",
    headline: "8 million businesses process payments through Razorpay. It is infrastructure.",
    deck: "Harshil Mathur and Shashank Kumar built the payment rails that power Indian digital commerce — because the existing ones were broken, undocumented, and unreliable.",
    col1: {
      h: "The Problem Was Documentation",
      b: "In 2014, integrating a payment gateway in India meant weeks of paperwork, opaque pricing, and APIs with no documentation. Razorpay's first product was a clean API with honest documentation — targeted at developers who were tired of fighting their payment provider.\n\nWord spread fast. Developers are the most effective distribution channel in software history. Within months, thousands of Indian businesses had switched — not because of a sales team, but because the documentation was good."
    },
    col2: {
      h: "The Reverse Flip Signal",
      b: "In 2023, Razorpay reverse-flipped its corporate domicile from the US back to India. This is a significant signal — one that says the founders believe Indian capital markets are ready to value a payments infrastructure company at its true worth.\n\nThe IPO, when it comes, will test that thesis. But the underlying business is not in question: 8M+ businesses, from solo founders to enterprise, depend on Razorpay every single day. That dependency is a moat that cannot be replicated by a weekend sprint."
    },
    pull: "The invisible rails that power Indian digital commerce. Nobody sees them. Nobody can stop using them.",
    lesson: "Developer trust is the most durable distribution channel in software.",
    stats: [
      { l: "Total Raised", v: "$1.4B" },
      { l: "Valuation",    v: "$7.5B" },
      { l: "Businesses",   v: "8M+"   },
      { l: "Founded",      v: "2014"  },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
export default function TopFundedStartupsPage() {
  const [idx, setIdx] = useState(0)
  const s = STARTUPS[idx]
  const isFirst = idx === 0
  const isLast = idx === STARTUPS.length - 1

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [idx])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: storyIn .3s ease both; }

        /* Two newspaper columns */
        @media (min-width: 640px) {
          .two-col {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0;
          }
          .two-col > div:first-child {
            padding-right: 1.5rem;
            border-right: 1px solid #C8C2B4;
          }
          .two-col > div:last-child {
            padding-left: 1.5rem;
          }
        }

        /* Drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.9em;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.07em;
          margin-top: 0.05em;
          color: #1A1208;
        }

        .nbtn:not([disabled]):hover {
          background: #1A1208 !important;
          color: white !important;
        }

        .thumb { transition: opacity .18s; }
        .thumb:hover { opacity: 1 !important; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }
      `}</style>

      {/* ══════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════ */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>

        {/* Dateline */}
        <div className="flex items-center justify-between px-4 sm:px-8 py-1.5"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}>
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[9px] text-[#888] uppercase tracking-widest hover:text-[#1A1208] transition-colors">
              upforge.in
            </Link>
            <span style={{ color: "#C8C2B4" }}> / </span>
            <span className="text-[9px] text-[#888] uppercase tracking-widest">Capital Report</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-[9px] text-[#AAA] uppercase tracking-widest">Vol. I · India</span>
            <span className="text-[9px] text-[#AAA] uppercase tracking-widest">March 2026</span>
          </div>
        </div>

        {/* Publication name */}
        <div className="text-center px-4 py-6 sm:py-9" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · India Edition
          </p>
          <h1 className="pf font-black leading-none tracking-tight text-[#1A1208]"
            style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)" }}>
            The Capital Report
          </h1>
          <p className="italic mt-2.5 text-[#6B5C40]"
            style={{ fontSize: "clamp(13px, 1.8vw, 16px)" }}>
            India's most funded startups — their capital, their story, their lesson · March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 13 }}>✦</span>
            <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Story tabs */}
        <div className="flex items-stretch overflow-x-auto"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif", scrollbarWidth: "none" }}>
          <span className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-4 py-3 self-center flex-shrink-0">
            In this report:
          </span>
          {STARTUPS.map((st, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="flex-shrink-0 px-4 py-3 text-[9px] font-bold uppercase tracking-wider border-l transition-colors"
              style={{
                borderColor: "#D8D2C4",
                color: i === idx ? st.accent : "#888",
                borderBottom: `2.5px solid ${i === idx ? st.accent : "transparent"}`,
                background: i === idx ? "rgba(255,255,255,0.55)" : "transparent",
                marginBottom: "-1px",
              }}
            >
              {st.no} · {st.name}
            </button>
          ))}
        </div>
      </header>

      {/* ══════════════════════════════════════
          STORY CONTENT
      ══════════════════════════════════════ */}
      <main key={idx} className="story-in max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* HERO IMAGE — full width, proper 16:9 aspect ratio */}
        <div className="relative w-full mt-0" style={{ aspectRatio: "16 / 7" }}>
          <img
            src={s.imgSrc}
            alt={s.imgAlt}
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1" style={{ background: s.accent }} />
          {/* Bottom gradient */}
          <div className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(12,8,3,0.88) 0%, rgba(12,8,3,0.3) 45%, transparent 75%)" }} />
          {/* Caption in image */}
          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-[8px] uppercase tracking-[0.28em] mb-2"
                  style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                  {s.sector} · {s.no} of 05
                </p>
                <h2 className="pf font-black text-white leading-tight"
                  style={{ fontSize: "clamp(1.6rem, 3.5vw, 3rem)" }}>
                  {s.name}
                </h2>
                <p className="text-white/50 text-[9px] uppercase tracking-wider mt-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {s.hq} · Est. {s.founded}
                </p>
              </div>
              {/* Big stat */}
              <div className="flex-shrink-0 text-right hidden sm:block">
                <p className="pf font-black text-white leading-none"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}>
                  {s.total}
                </p>
                <p className="text-white/35 text-[8px] uppercase tracking-widest mt-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  Total Raised
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* TWO-COLUMN: main story | sidebar */}
        <div className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_360px]"
          style={{ borderBottom: "2px solid #1A1208" }}>

          {/* ════ LEFT: EDITORIAL ════ */}
          <div className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Headline + deck */}
            <h3 className="pf font-black leading-[1.07] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.4rem)" }}>
              {s.headline}
            </h3>
            <p className="italic leading-[1.72] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px, 1.8vw, 17px)", borderBottom: "1px solid #C8C2B4" }}>
              {s.deck}
            </p>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "India", `Est. ${s.founded}`, s.hq].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{item}</span>
                  {i < arr.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* Two newspaper columns */}
            <div className="two-col">
              {[s.col1, s.col2].map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h4 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${s.accent}`, fontFamily: "system-ui,sans-serif" }}>
                    {col.h}
                  </h4>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px, 1.3vw, 13.5px)", fontFamily: "'Georgia',serif" }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-10 pt-6 pb-6 text-center"
              style={{ borderTop: `3px solid ${s.accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, marginBottom: 10 }}>❧</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(15px, 1.8vw, 20px)" }}>
                "{s.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, margin: "10px 0 8px" }}>❧</span>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA]"
                style={{ fontFamily: "system-ui,sans-serif" }}>
                — {s.name} · UpForge Capital Report
              </p>
            </div>

          </div>

          {/* ════ RIGHT: STATS + FACTS ════ */}
          <div className="hidden lg:flex flex-col gap-5 pl-8 pt-8 pb-8">

            {/* BY THE NUMBERS */}
            <div style={{ border: "2px solid #1A1208" }}>
              <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  By the Numbers
                </p>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                {s.stats.map((st, si) => (
                  <div key={si} className="px-4 py-3.5" style={{ borderColor: "#D8D2C4" }}>
                    <p className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                      style={{ fontFamily: "system-ui,sans-serif" }}>
                      {st.l}
                    </p>
                    <p className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.35rem" }}>
                      {st.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* INVESTORS */}
            <div className="px-4 py-4" style={{ border: "1px solid #D8D2C4", background: "white" }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
                Key Investors
              </p>
              <p className="text-[13px] leading-[1.72] text-[#1A1208]"
                style={{ fontFamily: "'Georgia',serif" }}>
                {s.investors}
              </p>
            </div>

            {/* THE LESSON */}
            <div className="px-4 py-4"
              style={{ background: s.accentBg, border: `1px solid ${s.accentBorder}` }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                The Lesson
              </p>
              <p className="italic text-[#1A1208] leading-[1.72]"
                style={{ fontSize: 13.5, fontFamily: "'Georgia',serif" }}>
                {s.lesson}
              </p>
            </div>

            {/* Funding bar */}
            <div className="px-4 py-4" style={{ border: "1px solid #D8D2C4", background: "white" }}>
              <div className="flex items-center justify-between mb-2">
                <p className="text-[8px] uppercase tracking-widest text-[#AAA]"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  Capital Raised vs. Leader
                </p>
                <p className="pf font-black text-[#1A1208]" style={{ fontSize: "1.1rem" }}>{s.total}</p>
              </div>
              <div className="h-1.5 rounded-sm" style={{ background: "#EAE6DC" }}>
                <div className="h-full rounded-sm transition-all duration-700"
                  style={{ width: `${Math.round((s.totalRaw / 3.8) * 100)}%`, background: s.accent }} />
              </div>
              <p className="text-[8px] text-[#BBB] mt-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                {Math.round((s.totalRaw / 3.8) * 100)}% of top raise ($3.8B)
              </p>
            </div>

            {/* Profile link */}
            <Link
              href={`/startup/${s.slug}`}
              className="group flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-70"
              style={{ border: `1.5px solid ${s.accent}` }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider"
                style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                View {s.name} on UpForge
              </span>
              <ArrowUpRight className="w-4 h-4" style={{ color: s.accent }} />
            </Link>

          </div>
        </div>

        {/* ══════════════════════════════════════
            NAVIGATION — prev / dots / next
        ══════════════════════════════════════ */}
        <div className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #C8C2B4" }}>
          <button
            onClick={() => !isFirst && setIdx(i => i - 1)}
            disabled={isFirst}
            className="nbtn flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            style={{
              border: `1px solid ${isFirst ? "#D8D2C4" : "#1A1208"}`,
              color: isFirst ? "#C8C2B4" : "#1A1208",
              cursor: isFirst ? "not-allowed" : "pointer",
              fontSize: 10,
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            {isFirst ? "First Entry" : STARTUPS[idx - 1].name}
          </button>

          {/* Dots */}
          <div className="flex items-center gap-1.5">
            {STARTUPS.map((st, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="h-1.5 rounded-sm transition-all"
                style={{
                  width: i === idx ? 28 : 6,
                  background: i === idx ? s.accent : "#C8C2B4",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && setIdx(i => i + 1)}
            disabled={isLast}
            className="nbtn flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            style={{
              border: `1px solid ${isLast ? "#D8D2C4" : "#1A1208"}`,
              color: isLast ? "#C8C2B4" : "#1A1208",
              cursor: isLast ? "not-allowed" : "pointer",
              fontSize: 10,
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            {isLast ? "Last Entry" : STARTUPS[idx + 1].name}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ══════════════════════════════════════
            ALL 5 THUMBNAILS
        ══════════════════════════════════════ */}
        <div className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            All Entries in This Report
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {STARTUPS.map((st, i) => (
              <button key={i} onClick={() => setIdx(i)}
                className="thumb text-left"
                style={{ opacity: i === idx ? 1 : 0.45 }}>
                {/* Thumbnail image */}
                <div className="relative w-full overflow-hidden mb-2.5"
                  style={{
                    aspectRatio: "4/3",
                    borderTop: `3px solid ${st.accent}`,
                  }}>
                  <img
                    src={st.imgSrc}
                    alt={st.name}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0"
                    style={{ background: "linear-gradient(to top, rgba(12,8,3,0.6) 0%, transparent 60%)" }} />
                  <p className="absolute bottom-2 left-2.5 pf text-white font-bold leading-tight"
                    style={{ fontSize: 12 }}>
                    {st.name}
                  </p>
                </div>
                <p className="text-[8.5px] font-black uppercase tracking-wider mb-0.5"
                  style={{ color: st.accent, fontFamily: "system-ui,sans-serif" }}>
                  {st.no}
                </p>
                <p className="text-[9.5px] text-[#AAA]"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {st.total} raised
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════
            INSIGHTS + CTA
        ══════════════════════════════════════ */}
        <div className="py-8 grid sm:grid-cols-3 gap-4" style={{ borderBottom: "1px solid #C8C2B4" }}>
          {[
            { v: "$11.6B", l: "Raised in 2025", b: "Across 936 deals. India's startup funding reached its highest point since 2021." },
            { v: "$17B+",  l: "Top 5 Combined", b: "Five companies. Seventeen billion dollars. Mobility, hospitality, commerce, fintech, payments." },
            { v: "126",    l: "Unicorns Total",  b: "India crossed 126 unicorns. The founders reading this will build the next 126." },
          ].map((item, i) => (
            <div key={i} className="p-4" style={{ background: "white", border: "1px solid #D8D2C4" }}>
              <p className="pf font-black text-[#1A1208] leading-none mb-1" style={{ fontSize: "2rem" }}>
                {item.v}
              </p>
              <p className="text-[8px] font-black uppercase tracking-[0.18em] mb-2"
                style={{ color: "#C9A84C", fontFamily: "system-ui,sans-serif" }}>
                {item.l}
              </p>
              <p className="text-[11.5px] leading-relaxed"
                style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
                {item.b}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[8.5px] font-black uppercase tracking-[0.24em] mb-2"
              style={{ color: "#C9A84C", fontFamily: "system-ui,sans-serif" }}>
              UpForge Registry
            </p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "1.3rem" }}>
              Your startup belongs in the next report.
            </p>
            <p className="text-[12px] leading-relaxed"
              style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
              Get independently verified and indexed in India's most trusted startup registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                { l: "Founder Stories", h: "/founder-stories" },
                { l: "AI Startups", h: "/top-ai-startups" },
                { l: "Unicorns", h: "/indian-unicorns" },
                { l: "Registry", h: "/startup" },
              ].map((lnk) => (
                <Link key={lnk.h} href={lnk.h}
                  className="flex items-center gap-0.5 text-[9px] uppercase tracking-wider hover:text-[#1A1208] transition-colors"
                  style={{ color: "#888", fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 pb-2 text-[9px] leading-relaxed"
          style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
          * Funding data sourced from Tracxn, Inc42, Growthlist and public company announcements as of March 2026. Valuations are last known figures. Hero images: replace <code>imgSrc</code> URLs with your own direct image links — any public URL works, no Next.js config required. UpForge is an independent registry — no paid placements.
        </p>

      </main>
    </div>
  )
}
