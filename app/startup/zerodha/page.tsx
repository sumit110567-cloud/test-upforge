"use client"

// app/startup/zerodha/page.tsx
// UpForge — Zerodha · Nithin Kamath Founder Chronicle
// SEO: full structured data, breadcrumbs, FAQ, timeline

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Nithin Kamath — Zerodha Founder | India's $8.2B Bootstrapped Fintech | UpForge",
  description:
    "Nithin Kamath built Zerodha into India's largest stockbroker without raising a single rupee of VC funding. Zerodha serves 1.5 crore active investors at ₹20 flat brokerage. Full founder story, valuation, and bootstrapped strategy on UpForge.",
  keywords: [
    "Nithin Kamath", "Zerodha founder", "Zerodha valuation",
    "Zerodha bootstrapped", "India largest stockbroker",
    "Zerodha Kite trading platform", "Nithin Kamath net worth",
    "Varsity Zerodha", "Rainmatter fintech", "bootstrapped unicorn India",
    "Zerodha ₹20 brokerage", "fintech India 2025", "UpForge startup profile"
  ],
  alternates: { canonical: "https://upforge.in/startup/zerodha" },
  openGraph: {
    title: "Zerodha — Nithin Kamath | India's $8.2B Bootstrapped Fintech Unicorn | UpForge",
    description: "He dropped out at 17 to trade stocks. Never took a rupee of VC. Zerodha is India's largest stockbroker — worth $8.2 billion. Nithin Kamath's full story on UpForge.",
    url: "https://upforge.in/startup/zerodha",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/zerodha.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zerodha — Built to $8.2B Without VC | Nithin Kamath | UpForge",
    description: "The definitive antidote to the idea that fundraising equals success. Fifteen years of being genuinely useful — full profile on UpForge.",
    images: ["https://upforge.in/og/zerodha.png"],
  },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/zerodha#article",
      "headline": "Zerodha — How Nithin Kamath Built India's Largest Stockbroker Without a Single Rupee of VC",
      "description": "Nithin Kamath dropped out at 17 to trade stocks. In 2010 he founded Zerodha — India's largest brokerage — with his brother Nikhil. Never raised VC. Valued at $8.2B. Full profile on UpForge.",
      "url": "https://upforge.in/startup/zerodha",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Nithin Kamath",
        "jobTitle": "Co-Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Zerodha" },
        "address": { "@type": "PostalAddress", "addressLocality": "Bengaluru", "addressCountry": "IN" }
      },
      "mentions": {
        "@type": "Organization",
        "name": "Zerodha",
        "url": "https://zerodha.com",
        "foundingDate": "2010",
        "foundingLocation": { "@type": "Place", "addressLocality": "Bengaluru", "addressCountry": "IN" },
        "description": "Zerodha is India's largest retail stockbroker by active clients, offering flat ₹20 brokerage per trade.",
        "sameAs": ["https://zerodha.com", "https://twitter.com/Zerodha5paisa"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Fintech Startups India", "item": "https://upforge.in/fintech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Zerodha", "item": "https://upforge.in/startup/zerodha" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "Who founded Zerodha?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zerodha was co-founded by Nithin Kamath and his brother Nikhil Kamath in 2010 in Bengaluru. Nithin serves as CEO. He had previously spent a decade trading stocks himself before identifying the structural problems in Indian broking that Zerodha was built to solve." }
        },
        {
          "@type": "Question", "name": "Has Zerodha raised VC funding?",
          "acceptedAnswer": { "@type": "Answer", "text": "No. Zerodha is entirely bootstrapped — it has never raised external capital from venture capital firms, private equity, or any outside investors. Nithin Kamath reinvested all profits back into the business. This makes Zerodha one of the most valuable bootstrapped companies in India." }
        },
        {
          "@type": "Question", "name": "What is Zerodha's valuation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zerodha is valued at approximately $8.2 billion as of 2025. This valuation is entirely self-generated — no external funding, no dilution of equity, no investor board members. The valuation is based on revenue multiples relative to peers." }
        },
        {
          "@type": "Question", "name": "What is Zerodha's business model?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zerodha charges a flat ₹20 per executed trade regardless of trade value (₹0 for equity delivery trades). This flat-fee model — introduced in 2010 — democratised investing by making it accessible to small investors who were previously priced out by percentage-based brokerage. Revenue also comes from interest on idle funds, subscription products, and API access." }
        }
      ]
    }
  ]
}

const accent = "#2563EB"
const accentBg = "#EFF6FF"
const accentBorder = "#BFDBFE"

const STATS = [
  { l: "Valuation", v: "$8.2B" },
  { l: "Active Clients", v: "1.5 Cr+" },
  { l: "VC Raised", v: "₹0" },
  { l: "Founded", v: "2010" },
  { l: "Brokerage", v: "₹20 Flat" },
  { l: "Incubated", v: "40+ Startups" },
]

const TIMELINE = [
  { year: "1994-2009", event: "Nithin Kamath drops out of college at 17 to trade stocks. Spends a decade learning markets; also works as sub-broker and call centre employee to fund positions" },
  { year: "2010", event: "Zerodha founded with brother Nikhil Kamath. ₹20 flat brokerage introduced — first in India. Zero VC raised" },
  { year: "2012-2014", event: "Kite trading platform launched. Becomes India's most intuitive retail trading interface. User base grows word-of-mouth" },
  { year: "2016-2018", event: "Varsity launched — free financial education platform. Hits 10M+ users. Zerodha surpasses 1 million active clients" },
  { year: "2019", event: "Zerodha becomes India's largest retail stockbroker by active client count. First broker to unseat legacy full-service brokers" },
  { year: "2020", event: "COVID-era surge: millions of new investors enter Indian markets. Zerodha's client base doubles to 3M+" },
  { year: "2021-2022", event: "Valuation crosses $2B then $8.2B. Rainmatter incubator has backed 40+ fintech startups. Nithin remains India's most respected voice on sustainable trading" },
  { year: "2024-2026", event: "1.5 crore active clients. Kite remains the benchmark for Indian trading platforms. Zerodha profits reinvested into ecosystem. No IPO announced" },
]

const PRODUCTS = [
  { name: "Kite", desc: "India's most-used trading platform. Web + mobile. Powers equity, F&O, commodities, and currency trading.", color: "#2563EB" },
  { name: "Varsity", desc: "Free financial education platform. 15+ modules on trading, investing, personal finance. 10M+ users.", color: "#0284C7" },
  { name: "Coin", desc: "Direct mutual fund investment platform. Zero commission. 5M+ investors.", color: "#0D9488" },
  { name: "Rainmatter", desc: "Fintech incubator. Backed 40+ startups including Smallcase, Sensibull, Streak, and Ditto Insurance.", color: "#6366F1" },
]

const RELATED = [
  { name: "Sarvam AI", slug: "sarvam-ai", cat: "AI", val: "$1B+" },
  { name: "Zepto", slug: "zepto", cat: "Quick Commerce", val: "$5.9B" },
  { name: "Zomato / Eternal", slug: "zomato", cat: "FoodTech", val: "$25B+" },
]

export default function ZerodhaPage() {
  useEffect(() => {
    const existing = document.getElementById("zerodha-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "zerodha-jsonld"; s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD); document.head.appendChild(s)
    }
    return () => { document.getElementById("zerodha-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Nithin Kamath — Zerodha Founder | $8.2B Bootstrapped Fintech | UpForge"
  }, [])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }} role="main">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4em; font-weight: 900; line-height: 0.82;
          float: left; margin-right: 0.08em; margin-top: 0.06em; color: #1A1208;
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .4s ease both; }
        @media (min-width:640px) {
          .ncols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0; }
          .ncols > div { padding:0 1.5rem; border-right:1px solid #C8C2B4; }
          .ncols > div:first-child { padding-left:0; }
          .ncols > div:last-child { border-right:none; padding-right:0; }
        }
        .vc-zero { 
          display: inline-flex; align-items: center; gap: 6px;
          padding: 4px 10px; background: #1A1208; color: #E8C547;
          font-family: system-ui, sans-serif; font-size: 9px; 
          font-weight: 900; text-transform: uppercase; letter-spacing: 0.2em;
        }
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      <h1 className="sr-only">
        Nithin Kamath — Zerodha Founder Story | India's Largest Bootstrapped Stockbroker | $8.2B Valuation | UpForge
      </h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest"
          itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "Fintech Startups", h: "/fintech-startups" }, { n: "Zerodha", h: "/startup/zerodha" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5"
              itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              {i < arr.length - 1
                ? <Link href={b.h} itemProp="item" className="hover:text-[#1A1208] transition-colors"><span itemProp="name">{b.n}</span></Link>
                : <span itemProp="name" className="text-[#1A1208] font-semibold">{b.n}</span>}
              <meta itemProp="position" content={String(i + 1)} />
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* MASTHEAD */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }} role="banner">
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Startup Registry · Fintech
          </p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            India's independent startup registry — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span>
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
        <div className="flex flex-wrap items-center px-4 sm:px-8 py-2 gap-3"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition No. 04</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Fintech · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="vc-zero">₹0 VC · Bootstrapped to $8.2B</span>
        </div>
      </header>

      {/* MAIN */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
          itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Zerodha — How Nithin Kamath Built India's Largest Stockbroker Without a Single Rupee of VC" />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/zerodha" />

          {/* LEFT */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}>FINTECH</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 04 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              He dropped out at 17 to trade stocks. Never took a rupee of VC. 
              Zerodha is India's largest stockbroker — worth $8.2 billion.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
              itemProp="description">
              Nithin Kamath built India's largest brokerage without a single outside investor, 
              a celebrity advertisement, or a paid acquisition. Just a better product and fifteen 
              years of compounding trust. In a sector defined by rent-seeking and opacity, 
              Zerodha is the industry's most consequential disruptor — and it got there by being 
              radically, unfashionably useful.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Bengaluru, KA", "Est. 2010", "Dropped out at 17"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img
                src="https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg"
                alt="Nithin Kamath, Founder and CEO of Zerodha, India's largest bootstrapped stockbroker"
                className="w-full object-cover object-top"
                style={{ height: "min(280px,55vw)" }}
                loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Nithin Kamath</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Zerodha</p>
              </div>
            </div>

            {/* BOOTSTRAPPED CALLOUT */}
            <div className="mb-8 grid sm:grid-cols-3 gap-3">
              {[
                { v: "₹0", l: "VC raised", note: "Ever" },
                { v: "100%", l: "Founder owned", note: "No dilution" },
                { v: "$8.2B", l: "Valuation", note: "Self-generated" },
              ].map((s, i) => (
                <div key={i} className="p-4 text-center" style={{ background: accent }}>
                  <p className="pf font-black text-white leading-none" style={{ fontSize: "2rem" }}>{s.v}</p>
                  <p className="text-white/70 text-[8px] uppercase tracking-wider mt-1"
                    style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</p>
                  <p className="text-white/40 text-[8px] mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}>{s.note}</p>
                </div>
              ))}
            </div>

            {/* 3-COL BODY */}
            <div className="ncols" itemProp="articleBody">
              {[
                {
                  h: "The Self-Taught Trader",
                  b: `Nithin Kamath dropped out of college at 17 to learn stock markets by doing: putting real money in and watching what happened. He spent a decade becoming exceptionally good at trading — while working as a sub-broker and call centre employee to fund his positions.\n\nHe wasn't born into a family with capital or connections. He was a self-taught, self-funded market practitioner who understood, at a granular level, exactly how the Indian brokerage system was extracting value from small investors — through opaque percentage commissions, poor execution infrastructure, and interfaces designed to discourage rather than enable.\n\nBy 2010, he had identified the structural problem in Indian broking with the precision of someone who had lived it for ten years. He co-founded Zerodha with his brother Nikhil to fix exactly that. The name itself — Zerodha, a portmanteau of 'zero' and 'rodha' (barrier in Sanskrit) — was the product thesis: remove every barrier between the Indian investor and the market.`
                },
                {
                  h: "₹20 Flat. Zero VC.",
                  b: `Zerodha introduced flat-fee brokerage to India: ₹20 per trade regardless of order size (and ₹0 for equity delivery), at a time when brokers charged 0.5%-1% of trade value. This single pricing decision democratised investing for millions priced out by the old model.\n\nA retail investor trading ₹5 lakh would have paid ₹2,500-5,000 to a traditional broker. With Zerodha: ₹20. The math was obvious. The incumbents couldn't match it without cannibalising their own business models. Zerodha had no such legacy cost structure to protect.\n\nKite — their trading platform — launched and quickly became the benchmark for every Indian fintech. Clean. Fast. Honest. No dark patterns. No upsell. Just a well-designed interface that let investors do what they came to do. In a sector addicted to complexity, simplicity became Zerodha's most powerful competitive moat.\n\nAnd throughout this entire process — not a single rupee raised from venture capital.`
                },
                {
                  h: "The Bootstrapped Billionaire",
                  b: `Today, Zerodha has 1.5 crore active customers and an $8.2B valuation. Nithin also built Varsity (free financial education, 10M+ users), Rainmatter (a fintech incubator backing 40+ startups including Smallcase, Sensibull, and Ditto Insurance), and has become India's most respected voice on sustainable investing and responsible capital allocation.\n\nThe Zerodha story is the definitive antidote to the idea that fundraising equals success. Every Indian fintech that followed — CRED, Groww, INDmoney — has had to answer the Zerodha question: why do you need external capital, and what does it cost you to have it?\n\nNithin Kamath's answer has always been the same: if your business is genuinely useful, the capital comes from the customers. Everything else is just a story founders tell to justify giving away equity they didn't need to give away.\n\nFifteen years. ₹0 VC. $8.2B. 1.5 crore investors. The math is simple — and it's the most important lesson in Indian startup history.`
                }
              ].map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}>
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p key={pi} className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* PULL QUOTE */}
            <div className="mt-10 pt-6 pb-6 text-center"
              style={{ borderTop: `3px solid ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(15px,2.1vw,21px)" }}>
                "We never raised money because we didn't need to. Build something people actually want, 
                charge them fairly — that's the whole playbook."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4"
                style={{ fontFamily: "system-ui,sans-serif" }}>
                — Nithin Kamath, Founder & CEO, Zerodha
              </p>
            </div>

            {/* PRODUCT PORTFOLIO */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                The Zerodha Portfolio
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {PRODUCTS.map((p) => (
                  <div key={p.name} className="p-4" style={{ border: "1px solid #D8D2C4", background: "white" }}>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full" style={{ background: p.color }} />
                      <p className="font-black text-[#1A1208]" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}>{p.name}</p>
                    </div>
                    <p className="text-[11px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full mt-1.5" style={{ background: accent }} />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: accentBorder, minHeight: 24 }} />}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>{t.year}</span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* THE LESSON */}
            <div className="mt-8 p-5" style={{ background: accentBg, border: `1.5px solid ${accentBorder}` }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3"
                style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>UpForge Takeaway</p>
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>
                "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to. 
                Nithin Kamath is accountable to 1.5 crore investors — not a board."
              </p>
            </div>

            {/* FAQ */}
            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Frequently Asked Questions
              </p>
              {[
                { q: "Who founded Zerodha?", a: "Zerodha was co-founded by Nithin Kamath and Nikhil Kamath in 2010 in Bengaluru. Nithin serves as CEO, Nikhil co-founded the company and later also started True Beacon and Gruhas. Nithin had spent the previous decade trading stocks and working as a sub-broker before founding Zerodha." },
                { q: "Why has Zerodha never raised VC funding?", a: "Nithin Kamath has consistently argued that Zerodha didn't need external capital because it was profitable from early on. The flat-fee model generated strong unit economics — each new customer was immediately profitable. Raising VC would have meant giving up equity unnecessarily and introducing incentives that might compromise the customer-first approach." },
                { q: "What is Kite, Zerodha's trading platform?", a: "Kite is Zerodha's web and mobile trading platform, considered by most market participants to be India's best-designed retail trading interface. It offers real-time market data, charting tools, order management, and portfolio tracking. Kite is used by Zerodha's 1.5 crore active clients for equity, F&O, commodities, currency, and mutual fund investments." },
                { q: "Is Zerodha planning an IPO?", a: "As of March 2026, Zerodha has not announced plans for an IPO. Nithin Kamath has publicly stated he does not see the need to go public, as Zerodha does not require capital from public markets. The company remains 100% founder-owned. This could change in future, but there are no current indications of an imminent IPO." },
              ].map((faq, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: "1px solid #D8D2C4" }}
                  itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}
                    itemProp="name">{faq.q}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                    <p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}
                      itemProp="text">{faq.a}</p>
                  </div>
                </div>
              ))}
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg"
                  alt="Nithin Kamath, Zerodha Founder and CEO — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager" itemProp="image"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Nithin Kamath</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Zerodha</p>
                </div>
              </div>

              {/* BOOTSTRAP BADGE */}
              <div className="p-4 text-center" style={{ background: "#1A1208" }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>The Bootstrapped Exception</p>
                <p className="pf text-white italic leading-relaxed" style={{ fontSize: 13 }}>
                  One of the largest fintech companies in the world built without a single rupee of venture capital.
                </p>
              </div>

              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                        style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.2rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  Bootstrapping is not a funding strategy. It's a philosophy about who 
                  you're accountable to — and what you're willing to trade away for growth.
                </p>
              </div>

              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}>Rainmatter Investments</p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {["Smallcase (Portfolio investing)", "Sensibull (Options analytics)", "Streak (Algo trading)", "Ditto Insurance", "GoldenPi (Bonds)"].map((inv, i) => (
                    <p key={i} className="flex items-center gap-2 text-[11px] text-[#2C2010]"
                      style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 1, background: accent, display: "inline-block", flexShrink: 0 }} />
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>Also Read on UpForge</p>
                {RELATED.map((r) => (
                  <Link key={r.slug} href={`/startup/${r.slug}`}
                    className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid #EDE9DF" }}>
                    <div>
                      <p className="text-[11px] font-bold text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{r.name}</p>
                      <p className="text-[9px] text-[#AAA] uppercase tracking-wider">{r.cat} · {r.val}</p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* INTERNAL LINKS */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}>Explore More Fintech on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Fintech Startups India 2026", h: "/fintech-startups" },
              { l: "Bootstrapped Unicorns India", h: "/bootstrapped-startups" },
              { l: "Zerodha vs Groww vs CRED", h: "/comparison/fintech-india" },
              { l: "Indian Stock Market Apps", h: "/trading-apps-india" },
              { l: "Indian Unicorns List", h: "/indian-unicorns" },
              { l: "CRED — Kunal Shah Profile", h: "/startup/cred" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building India's next unicorn? Get verified on UpForge.
              </p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            * Data sourced from public sources, Inc42, Forbes India, Tracxn, Moneycontrol, and Zerodha press releases as of March 2026. 
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Fintech Startups India", h: "/fintech-startups" },
                { l: "Bootstrapped Startups", h: "/bootstrapped-startups" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Sarvam AI Profile", h: "/startup/sarvam-ai" },
                { l: "Zepto Profile", h: "/startup/zepto" },
                { l: "Zomato Profile", h: "/startup/zomato" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
