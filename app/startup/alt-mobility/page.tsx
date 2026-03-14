"use client"

// app/startup/alt-mobility/page.tsx
// UpForge — Alt Mobility · Dev Arora & Co-Founders Founder Chronicle
// SEO: FAQPage ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.
// SEO: mainEntity is a proper JSON array [].

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/alt-mobility#article",
      "headline": "Alt Mobility — How Dev Arora & Team Built India's Largest Full-Stack EV Leasing Platform",
      "description": "Alt Mobility founder story — Dev Arora, Anuj Gupta, Harsh Dev Goyal, Manas Arora & Jayant Gupta built India's most comprehensive EV leasing and lifecycle management platform from IIT Delhi's incubator. $17.3M raised. 16,000+ vehicles leased. ₹350Cr+ AUM.",
      "url": "https://upforge.in/startup/alt-mobility",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-alt-mobility.webp",
        "width": 1200,
        "height": 630
      },
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person",
          "name": "Dev Arora",
          "jobTitle": "Co-Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Alt Mobility" },
          "sameAs": ["https://www.linkedin.com/company/altmobility/"]
        },
        {
          "@type": "Person",
          "name": "Anuj Gupta",
          "jobTitle": "Co-Founder & CBO",
          "worksFor": { "@type": "Organization", "name": "Alt Mobility" }
        },
        {
          "@type": "Person",
          "name": "Harsh Dev Goyal",
          "jobTitle": "Co-Founder & CPO",
          "worksFor": { "@type": "Organization", "name": "Alt Mobility" }
        },
        {
          "@type": "Person",
          "name": "Manas Arora",
          "jobTitle": "Co-Founder & CFO",
          "worksFor": { "@type": "Organization", "name": "Alt Mobility" }
        },
        {
          "@type": "Person",
          "name": "Jayant Gupta",
          "jobTitle": "Co-Founder & CCO",
          "worksFor": { "@type": "Organization", "name": "Alt Mobility" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Alt Mobility",
        "url": "https://alt-mobility.com",
        "foundingDate": "2020",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "New Delhi",
          "addressCountry": "IN"
        },
        "description": "Alt Mobility is India's leading full-stack EV leasing and lifecycle management platform, offering vehicle leasing, FleetOS telematics, insurance, maintenance and charging support for B2B commercial fleets.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 185 },
        "sameAs": [
          "https://alt-mobility.com",
          "https://www.linkedin.com/company/altmobility/",
          "https://twitter.com/mobilityalt"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "EV Startups India", "item": "https://upforge.in/ev-startups-india" },
        { "@type": "ListItem", "position": 4, "name": "Alt Mobility", "item": "https://upforge.in/startup/alt-mobility" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Alt Mobility?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alt Mobility was co-founded in 2020 by Dev Arora (CEO), Anuj Gupta (CBO), Harsh Dev Goyal (CPO), Manas Arora (CFO), and Jayant Gupta (CCO). The startup was born out of IIT Delhi's incubator. Four of the co-founders are second-time entrepreneurs with prior experience deploying 100MW+ of solar energy projects across India through their venture 8Minute."
          }
        },
        {
          "@type": "Question",
          "name": "How much funding has Alt Mobility raised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alt Mobility has raised $17.3 million in total funding across 5 rounds. Their Series A of $10 million in November 2024 was led by Eurazeo, with Shell Ventures, Twynam Earth Fund, and EV2 Ventures also participating. Earlier rounds included a $6 million round co-led by Shell, Eurazeo, EV2, and Twynam in January 2024."
          }
        },
        {
          "@type": "Question",
          "name": "What is FleetOS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "FleetOS is Alt Mobility's proprietary AI-powered fleet management platform. It provides real-time vehicle tracking, predictive and preemptive maintenance diagnostics, driver behaviour analytics, charging station integration, and roadside assistance. IoT devices fitted in every vehicle send continuous data to the platform, enabling Alt Mobility to predict breakdowns and payment defaults before they occur."
          }
        },
        {
          "@type": "Question",
          "name": "What is Alt Mobility's Drive-to-Own model?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Alt Mobility's Drive-to-Own model enables drivers who lease vehicles to transition into EV ownership over time without requiring a credit history, collateral, or high upfront down payment. It reduces total cost of ownership by 30–40% and is designed to promote financial inclusion for gig economy workers and last-mile delivery drivers."
          }
        },
        {
          "@type": "Question",
          "name": "How many EVs has Alt Mobility leased?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of early 2026, Alt Mobility has leased over 16,000 electric vehicles and manages ₹350 crore+ in Assets Under Management. It operates across 37+ cities in India with access to 7,000+ charging stations and 150+ service garages. The company works with 70+ B2B customers and over 1,000 drivers."
          }
        },
        {
          "@type": "Question",
          "name": "How does Alt Mobility make EVs affordable for fleet operators?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike banks that require 20–25% down payments, Alt Mobility only takes a three-month deposit. Its all-inclusive wet lease model bundles vehicle leasing with insurance, maintenance, registration, telematics, and 24/7 support under one contract. This can reduce total cost compared to traditional financing by up to 62%, making EV fleet transition economically viable even for small operators."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Funding", v: "$17.3M" },
  { l: "Valuation", v: "₹461 Cr" },
  { l: "Founded", v: "2020" },
  { l: "HQ", v: "New Delhi" },
  { l: "Vehicles Leased", v: "16,000+" },
  { l: "AUM", v: "₹350 Cr+" },
]

const TIMELINE = [
  { year: "2014–20", event: "Dev Arora & Anuj Gupta build 8Minute, deploying 100MW+ of rooftop solar across India. They connect with Manas Arora, Harsh Dev Goyal, and Jayant Gupta in the solar industry." },
  { year: "2020–21", event: "The team identifies EVs facing the same barriers solar once did — unclear residual values, high upfront costs, fragmented after-sales. Alt Mobility is conceived at IIT Delhi's incubator." },
  { year: "Mar 2022", event: "First deployment: 82 two-wheelers and 10 three-wheelers leased to Lightning Logistics in Delhi. The full-stack leasing model — vehicle + insurance + maintenance + telematics — is proven viable." },
  { year: "2023", event: "Fleet crosses 6,500 EVs across 10+ cities. AUM reaches ₹100 crore. Drive-to-Own model launched in Delhi NCR under the Delhi EV Aggregators Policy." },
  { year: "Jan 2024", event: "$6M raised co-led by Shell Ventures, Eurazeo, EV2 Ventures, and Twynam. FleetOS platform expanded with AI-driven predictive maintenance and Fleet GPT." },
  { year: "Nov 2024", event: "$10M Series A led by Eurazeo. Total funding reaches $17.3M. Target: 30,000 vehicles and ₹500 Cr+ AUM by FY2026. Expansion to buses and trucks begins." },
  { year: "2025–26", event: "16,000+ vehicles leased. 37+ cities. 185 employees. ₹150 crore in fuel savings generated. Annual revenue reaches ₹63.4 crore. Expansion to UP, Haryana, Maharashtra, Karnataka underway." },
]

const COLS = [
  {
    h: "Solar Veterans Who Bet on EVs",
    b: `Dev Arora, a computer science graduate from NIT Kurukshetra, built his first company not in tech — but in rooftop solar. In 2014, he and Anuj Gupta founded 8Minute, deploying over 100MW of clean energy projects across homes and industries. Along the way, they met Manas Arora, Harsh Dev Goyal, and Jayant Gupta.\n\nThe solar industry taught them something few people know from the inside: new energy technologies fail to scale not because of the technology, but because of the financing. Buyers don't understand residual values. Lenders won't take the asset risk. The ecosystem is fragmented. Sound familiar?\n\nWhen Jayant Gupta moved into EV manufacturing around 2020, the team immediately recognised the pattern. "We all realised EVs faced the same challenges as solar in its early days," Arora says. "Lack of resale market, unclear residual values, and technology risks." The solution was the same one that had worked for solar: remove the upfront cost entirely. Offer a lease.`
  },
  {
    h: "The Full-Stack Leasing Bet",
    b: `Alt Mobility launched leasing operations in March 2022 with 82 two-wheelers and 10 three-wheelers for Lightning Logistics in Delhi. The model was deceptively simple from the outside — but radically different from anything else in the market.\n\nWhile banks demanded 20–25% down payments, Alt took only a three-month deposit. While NBFCs just disbursed loans, Alt bundled the vehicle with insurance, road tax, maintenance, 24/7 roadside support, and IoT telematics under one all-inclusive contract. Fleet operators didn't just get a vehicle. They got a running cost they could predict — and a single number to call when anything went wrong.\n\n"Traditional financiers just provide loans," Arora explains. "We go beyond financing to ensure vehicle uptime, lower costs, and complete lifecycle management. That's our differentiation." By 2023, the fleet had crossed 6,500 EVs. Revenues were doubling every year.`
  },
  {
    h: "FleetOS, Drive-to-Own & What's Next",
    b: `At the core of every Alt Mobility lease is FleetOS — the company's proprietary AI and IoT platform. Every leased vehicle carries an IoT device. The data it streams — location, battery health, usage patterns, driver behaviour — feeds into predictive algorithms that can flag a breakdown or payment default before it happens.\n\n"We deploy IoT devices in every vehicle," Arora says. "They send data to our servers, allowing us to monitor asset health in real time." The team is now building Fleet GPT — a conversational AI layer on top of FleetOS that lets fleet managers ask plain-language questions about their fleet.\n\nThe Drive-to-Own model takes the social mission further: structured pathways for gig economy drivers to graduate from leasing to full ownership, with no credit history required. By early 2026, Alt Mobility manages 16,000+ vehicles, ₹350 crore+ in AUM, across 37+ cities — and is preparing to expand into buses and trucks for intercity and corporate use.`
  }
]

const PULL_QUOTE = {
  text: "Traditional financiers just provide loans. We go beyond financing to ensure vehicle uptime, lower costs, and complete lifecycle management. That's our differentiation.",
  by: "Dev Arora, Co-Founder & CEO, Alt Mobility"
}

const LESSON = "The best infrastructure businesses solve the same problem twice. Alt Mobility's founders broke the solar adoption barrier in 2014, then applied the same playbook to EVs in 2022 — proving that understanding a financing gap is worth more than any single technology."

const INVESTORS = [
  "Eurazeo (Paris)",
  "Shell Ventures",
  "Twynam Earth Fund (Australia)",
  "EV2 Ventures",
  "UC Inclusive Credit",
  "Piper Serica",
  "PitchRight Ventures",
  "LetsVenture",
]

const FAQS = [
  {
    q: "Who are the founders of Alt Mobility?",
    a: "Alt Mobility was co-founded in 2020 by Dev Arora (CEO), Anuj Gupta (CBO), Harsh Dev Goyal (CPO), Manas Arora (CFO), and Jayant Gupta (CCO) — born out of IIT Delhi's incubator. Four are second-time entrepreneurs who previously deployed 100MW+ of rooftop solar across India through their venture 8Minute."
  },
  {
    q: "What does Alt Mobility's all-inclusive lease include?",
    a: "Alt Mobility's wet lease bundles the vehicle with vehicle registration, insurance, maintenance, 24/7 roadside assistance, IoT telematics via FleetOS, and access to 7,000+ charging stations — all under one contract and one monthly payment. The model saves fleet operators up to 62% compared to traditional vehicle financing with a bank loan."
  },
  {
    q: "How does Alt Mobility compare to Zypp Electric and MoEving?",
    a: "All three offer EV leasing for commercial fleets in India, but Alt Mobility differentiates through its full-stack FleetOS technology platform, Drive-to-Own model for driver ownership, and its multi-category fleet spanning 2W, 3W, and 4W vehicles. Alt is also the only player in its segment backed by global energy majors Shell Ventures and Twynam Earth Fund."
  },
  {
    q: "Is Alt Mobility profitable?",
    a: "Alt Mobility reported annual revenue of ₹63.4 crore as of March 2025 and has doubled revenues every year since launch. The company is focused on scaling toward profitability as AUM grows toward the ₹500 crore target. Dev Arora has stated that maintaining a lean cost structure has been key to earning investor trust."
  },
]

const RELATED = [
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "Electric Vehicles", val: "$1.3B" },
  { name: "Sarvam AI", slug: "sarvam-ai", cat: "Artificial Intelligence", val: "$1B+" },
  { name: "Agnikul Cosmos", slug: "agnikul-cosmos", cat: "Spacetech", val: "$500M" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AltMobilityPage() {
  const accent = "#16a34a"
  const accentDark = "#15803d"
  const accentBg = "#f0fdf4"
  const accentBorder = "#bbf7d0"

  useEffect(() => {
    const existing = document.getElementById("page-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "page-jsonld"
      s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(s)
    }
    return () => { document.getElementById("page-jsonld")?.remove() }
  }, [])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>
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
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Alt Mobility Founder Story — Dev Arora | India's Full-Stack EV Leasing Platform | FleetOS | UpForge
      </h1>

      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" },
            { n: "Startup Registry", h: "/startup" },
            { n: "EV Startups India", h: "/ev-startups-india" },
            { n: "Alt Mobility", h: "/startup/alt-mobility" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <Link href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</Link>
              ) : (
                <span className="text-[#1A1208] font-semibold">{b.n}</span>
              )}
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Startup Registry · Electric Vehicles
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
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
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · EV</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            EV Leasing · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">New Delhi, India</span>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >

          {/* ────── LEFT: EDITORIAL ────── */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category tag */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}
              >
                CLEANTECH / EV
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              They fixed India's solar financing problem in 2014.
              Then they did it again —{" "}
              <em style={{ color: accent }}>for electric vehicles.</em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Alt Mobility's founders didn't discover EVs on a whiteboard. They spent six years removing
              the financing barrier for rooftop solar — then watched the exact same problem kill EV
              adoption in India. Dev Arora and his team built the solution they already knew worked:
              a full-stack lease. $17.3M raised. 16,000+ vehicles. ₹350 crore in assets.
              37 cities. India's EV logistics revolution, quietly assembled in New Delhi.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "New Delhi",
                "Est. 2020",
                "India's EV Fleet OS",
              ].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden mb-8">
              <img
                src="/Upforge-alt-mobility.webp"
                alt="Dev Arora, Co-Founder & CEO of Alt Mobility — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Dev Arora</p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founder & CEO · Alt Mobility
                </p>
              </div>
            </div>

            {/* 3-col newspaper body */}
            <div className="ncols">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{
                      fontSize: 11,
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 pt-6 pb-6 text-center"
              style={{ borderTop: `3px double ${accent}`, borderBottom: "1px solid #C8C2B4" }}
            >
              <span style={{ display: "block", color: accentDark, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(16px,2.2vw,22px)" }}
              >
                "{PULL_QUOTE.text}"
              </blockquote>
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* Company Timeline */}
            <div className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: accent }}
                      />
                      {i < TIMELINE.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1"
                          style={{ background: accentBorder, minHeight: 24 }}
                        />
                      )}
                    </div>
                    <div>
                      <span
                        className="text-[9px] font-black uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {t.year}
                      </span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata (schema is in JSON-LD) */}
            <section className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="mb-4 pb-4"
                  style={{ borderBottom: "1px solid #D8D2C4" }}
                >
                  <h3
                    className="font-bold text-[#1A1208] mb-1.5"
                    style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-[12.5px] text-[#5A4A30] leading-relaxed"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </section>
          </article>

          {/* ────── RIGHT: SIDEBAR ────── */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">

              {/* Founder image */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/Upforge-alt-mobility.webp"
                  alt="Dev Arora, Co-Founder & CEO of Alt Mobility — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Dev Arora</p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founder & CEO · Alt Mobility
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://alt-mobility.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Alt Mobility official website"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      alt-mobility.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/altmobility/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Alt Mobility on LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#0077b5", fontFamily: "system-ui,sans-serif" }}
                    >
                      LinkedIn — Alt Mobility
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#0077b5" }} />
                </a>
              </div>

              {/* By the Numbers */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    By the Numbers
                  </p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt
                        className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {s.l}
                      </dt>
                      <dd
                        className="pf font-black text-[#1A1208] leading-none"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* The Lesson */}
              <div
                className="px-4 py-4"
                style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
              >
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                >
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
              </div>

              {/* Key Investors */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Key Investors
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
                    <p
                      key={i}
                      className="flex items-center gap-2 text-[11px] text-[#2C2010]"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 1,
                          background: accent,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              {/* Also Read */}
              <div>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-3"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                >
                  Also Read on UpForge
                </p>
                {RELATED.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/startup/${r.slug}`}
                    className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid #EDE9DF", textDecoration: "none" }}
                  >
                    <div>
                      <p
                        className="text-[11px] font-bold text-[#1A1208]"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {r.name}
                      </p>
                      <p className="text-[9px] text-[#AAA] uppercase tracking-wider">
                        {r.cat} · {r.val}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </Link>
                ))}
              </div>

            </div>
          </aside>
        </div>

        {/* ── SEO INTERNAL LINKS ── */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Explore More EV Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "EV Startups India 2026", h: "/ev-startups-india" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Alt Mobility vs Zypp Electric", h: "/ev-startups/alt-mobility-vs-zypp" },
              { l: "CleanTech Startups India", h: "/cleantech-startups" },
              { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
              { l: "EV Leasing India Guide", h: "/ev-leasing-india" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white", textDecoration: "none" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-2">
          <div
            className="grid sm:grid-cols-2 gap-6 items-center pb-8"
            style={{ borderBottom: "1px solid #D8D2C4" }}
          >
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building India's next unicorn? Get verified on UpForge.
              </p>
              <p
                className="text-[12px] text-[#6B5C40]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
                aria-label="List your Indian startup on UpForge for free"
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Data sourced from public filings, Tracxn, Inc42, YourStory, and Alt Mobility press
            releases as of March 2026. UpForge is an independent registry — no paid placements,
            no sponsored rankings. Funding figures and valuations are approximate and reflect
            latest available public data.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "EV Startups India", h: "/ev-startups-india" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Agnikul Cosmos Profile", h: "/startup/agnikul-cosmos" },
                { l: "CleanTech Startups", h: "/cleantech-startups" },
                { l: "Submit Startup", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
