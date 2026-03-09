"use client"

// app/startup/zomato/page.tsx
// UpForge — Zomato / Eternal · Deepinder Goyal Founder Chronicle
// SEO: full structured data, breadcrumbs, FAQ, timeline

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

export const metadata = {
  title: "Deepinder Goyal — Zomato / Eternal Founder | India's $25B FoodTech Empire | UpForge",
  description:
    "Deepinder Goyal built Zomato from a free menu digitisation project into India's most valuable food-tech and quick commerce company. Now rebranded as Eternal with Blinkit, Hyperpure & District. Full founder story, funding, and IPO details on UpForge.",
  keywords: [
    "Deepinder Goyal", "Zomato founder", "Eternal company India",
    "Zomato valuation 2025", "Blinkit founder", "Zomato IPO",
    "food delivery India unicorn", "quick commerce Blinkit",
    "Zomato Eternal rebranding", "FoodTech India",
    "Zomato story India", "UpForge startup profile"
  ],
  alternates: { canonical: "https://upforge.in/startup/zomato" },
  openGraph: {
    title: "Deepinder Goyal — Zomato / Eternal | India's $25B FoodTech Giant | UpForge",
    description: "A free side project digitising canteen menus at Bain & Company became India's largest food delivery and quick commerce empire. Deepinder Goyal's full founder story on UpForge.",
    url: "https://upforge.in/startup/zomato",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/zomato.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepinder Goyal — How Zomato Became India's $25B Food & Commerce Giant | UpForge",
    description: "From digitising canteen menus to IPO to Eternal — the full Zomato story on UpForge.",
    images: ["https://upforge.in/og/zomato.png"],
  },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/zomato#article",
      "headline": "Zomato / Eternal — How Deepinder Goyal Built India's Most Valuable FoodTech Empire",
      "description": "Deepinder Goyal co-founded Zomato (now Eternal) in 2008. The company went public in 2021, acquired Blinkit in 2022, and is now valued at over $25B. Full profile on UpForge.",
      "url": "https://upforge.in/startup/zomato",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Deepinder Goyal",
        "jobTitle": "Co-Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Eternal (formerly Zomato)" },
        "alumniOf": "IIT Delhi",
        "address": { "@type": "PostalAddress", "addressLocality": "Gurugram", "addressCountry": "IN" }
      },
      "mentions": {
        "@type": "Organization",
        "name": "Eternal (Zomato)",
        "url": "https://www.zomato.com",
        "foundingDate": "2008",
        "foundingLocation": { "@type": "Place", "addressLocality": "Gurugram", "addressCountry": "IN" },
        "tickerSymbol": "ZOMATO",
        "sameAs": ["https://www.zomato.com", "https://twitter.com/zomato"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "FoodTech Startups India", "item": "https://upforge.in/foodtech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Zomato / Eternal", "item": "https://upforge.in/startup/zomato" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question", "name": "Who founded Zomato?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zomato was co-founded by Deepinder Goyal and Pankaj Chaddah in 2008, initially as FoodieBay — a service that digitised restaurant menus. Both were analysts at Bain & Company when they started the project. Deepinder Goyal continues as CEO." }
        },
        {
          "@type": "Question", "name": "What is Zomato's current valuation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zomato (now rebranded as Eternal) is valued at over $25 billion as of early 2026. The company is listed on Indian stock exchanges (NSE/BSE) under the ticker ZOMATO. The rebranding to Eternal reflects the company's expansion beyond food delivery into quick commerce (Blinkit), B2B food supply (Hyperpure), and events/nightlife (District)." }
        },
        {
          "@type": "Question", "name": "Why did Zomato rebrand to Eternal?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zomato rebranded its parent company to Eternal in January 2025 to reflect that the business had evolved well beyond food delivery. The Eternal umbrella now covers Zomato (food delivery), Blinkit (quick commerce), Hyperpure (B2B food supply), and District (events and dining experiences). The Zomato app and brand remain unchanged for consumers." }
        },
        {
          "@type": "Question", "name": "When did Zomato go public?",
          "acceptedAnswer": { "@type": "Answer", "text": "Zomato listed on the BSE and NSE on 23 July 2021 via an IPO that raised ₹9,375 crore (~$1.25B). It was India's first major consumer internet IPO and one of the most watched listings in the country's stock market history." }
        }
      ]
    }
  ]
}

const accent = "#E11D48"
const accentBg = "#FFF1F2"
const accentBorder = "#FECDD3"

const STATS = [
  { l: "Valuation", v: "$25B+" },
  { l: "IPO Year", v: "2021" },
  { l: "Founded", v: "2008" },
  { l: "Countries", v: "10+" },
  { l: "Blinkit Stores", v: "1000+" },
  { l: "Listed On", v: "NSE/BSE" },
]

const TIMELINE = [
  { year: "2008", event: "FoodieBay founded by Deepinder Goyal & Pankaj Chaddah while working at Bain & Company, Delhi" },
  { year: "2010", event: "Rebranded to Zomato. Expands beyond Delhi; adds restaurant discovery for Mumbai, Bengaluru" },
  { year: "2015", event: "Global expansion — Zomato enters UAE, UK, Australia, USA. Series F raises $60M at $600M valuation" },
  { year: "2019", event: "Pivots seriously to food delivery. Acquires Urbanspoon in the US. Orders begin to scale" },
  { year: "July 2021", event: "IPO on BSE/NSE. Raises ₹9,375 crore. India's most-watched consumer internet listing" },
  { year: "2022", event: "Acquires Blinkit (formerly Grofers) for ~$568M. Enters quick commerce in earnest" },
  { year: "Jan 2025", event: "Parent company rebranded from Zomato Ltd to Eternal. Umbrella: Zomato, Blinkit, Hyperpure, District" },
  { year: "2026", event: "Eternal valuation exceeds $25B. Blinkit operates 1000+ dark stores. Deepinder runs India's largest food-commerce conglomerate" },
]

const RELATED = [
  { name: "Zepto", slug: "zepto", cat: "Quick Commerce", val: "$5.9B" },
  { name: "Zerodha", slug: "zerodha", cat: "Fintech", val: "$8.2B" },
  { name: "Sarvam AI", slug: "sarvam-ai", cat: "AI", val: "$1B+" },
]

export default function ZomatoPage() {
  useEffect(() => {
    const existing = document.getElementById("zomato-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "zomato-jsonld"; s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD); document.head.appendChild(s)
    }
    return () => { document.getElementById("zomato-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Deepinder Goyal — Zomato / Eternal Founder Story | India's $25B FoodTech | UpForge"
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
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      <h1 className="sr-only">
        Deepinder Goyal — Zomato Eternal Founder Story | India's $25B FoodTech & Quick Commerce Empire | UpForge
      </h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest"
          itemScope itemType="https://schema.org/BreadcrumbList">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "FoodTech Startups", h: "/foodtech-startups" }, { n: "Zomato / Eternal", h: "/startup/zomato" },
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
            UpForge · Startup Registry · FoodTech & Commerce
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
        {/* Red Zomato banner */}
        <div className="px-4 sm:px-8 py-2 flex items-center gap-3"
          style={{ background: accent, fontFamily: "system-ui,sans-serif" }}>
          <span className="text-[8px] text-white/70 uppercase tracking-widest flex-shrink-0">Edition No. 03</span>
          <div className="h-3 w-px bg-white/30" />
          <span className="text-[9px] font-black uppercase tracking-wider text-white">
            FoodTech / Commerce · Zomato → Eternal · March 2026
          </span>
        </div>
      </header>

      {/* MAIN */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
          itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="Zomato / Eternal — How Deepinder Goyal Built India's Most Valuable FoodTech Empire" />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/zomato" />

          {/* LEFT */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}>FOODTECH / COMMERCE</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 03 · March 2026</span>
              {/* Eternal badge */}
              <span className="text-[8px] font-bold uppercase tracking-wider px-2 py-1 ml-auto"
                style={{ background: "#1A1208", color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>
                Now: Eternal ↗
              </span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              He started by digitising a canteen menu. Eighteen years later, 
              Zomato is now Eternal — India's $25 billion food and commerce empire.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
              itemProp="description">
              In 2008, Deepinder Goyal was a junior analyst at Bain & Company with a free side project: 
              scanning restaurant menus so his colleagues could find food faster. That project became 
              Zomato. Zomato became India's most anticipated IPO. And in 2025, the parent 
              company became Eternal — a $25B conglomerate spanning food delivery, quick commerce, 
              B2B supply, and live experiences.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Gurugram, HR", "Est. 2008", "IIT Delhi · Bain alumni"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img
                src="https://images.livemint.com/img/2022/02/19/600x338/PTI04_09_2019_000172B-0_1645261016610_1645261016610.jpg"
                alt="Deepinder Goyal, Founder and CEO of Zomato / Eternal, India's largest food delivery company"
                className="w-full object-cover object-top"
                style={{ height: "min(280px,55vw)" }}
                loading="eager"
                onError={(e) => { (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Deepinder_Goyal.jpg/320px-Deepinder_Goyal.jpg" }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Deepinder Goyal</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founder & CEO · Zomato / Eternal</p>
              </div>
            </div>

            {/* ETERNAL REBRAND CALLOUT */}
            <div className="mb-8 p-4 flex gap-3 items-start"
              style={{ background: "#1A1208", border: `2px solid ${accent}` }}>
              <span style={{ color: accent, fontSize: 20, flexShrink: 0, marginTop: 2 }}>✦</span>
              <div>
                <p className="text-[9px] font-black uppercase tracking-[0.26em] mb-1"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>January 2025 Update</p>
                <p className="text-white text-[12px] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Zomato Ltd rebranded its parent entity to <strong className="text-white">Eternal</strong>. 
                  The Zomato app remains unchanged. Eternal now operates: 
                  <strong className="text-white"> Zomato</strong> (food delivery), 
                  <strong className="text-white"> Blinkit</strong> (quick commerce, 1000+ dark stores), 
                  <strong className="text-white"> Hyperpure</strong> (B2B food supply to restaurants), 
                  and <strong className="text-white"> District</strong> (events & nightlife).
                </p>
              </div>
            </div>

            {/* 3-COL BODY */}
            <div className="ncols" itemProp="articleBody">
              {[
                {
                  h: "The Canteen That Became a Company",
                  b: `In 2008, Deepinder Goyal was doing what millions of analysts do: waiting in long lines at the Bain & Company canteen in Delhi, spending 20 minutes on a lunch break just to figure out what was available. His solution was a weekend project — he scanned the canteen menus and put them online.\n\nTraffic from his own colleagues suggested something bigger. He and co-founder Pankaj Chaddah registered FoodieBay.com, started digitising restaurant menus across Delhi, and within a year had the city's most comprehensive restaurant directory.\n\nWhat made FoodieBay different from every other restaurant aggregator of the era — Yellow Pages, JustDial — was Goyal's obsession with accurate, updated information. Menus were photographed, not typed. Hours were verified. Photos were real, not stock images. The product was built on a trust loop that has remained Zomato's core competitive advantage for 18 years.`
                },
                {
                  h: "The IPO and The Acquisition",
                  b: `By 2010, FoodieBay had become Zomato. The name change signalled ambition. Over the next decade, Goyal raised over $2B, expanded to 24 countries, navigated the chaos of COVID (which nearly killed food delivery), and emerged as one of India's most strategically clear-headed founders.\n\nThe July 2021 IPO was India's defining consumer internet moment. Zomato listed at a valuation north of $8B and began the journey toward profitability that most analysts said was impossible. Within four quarters of the IPO, Zomato posted its first profitable quarter.\n\nThe 2022 acquisition of Blinkit (formerly Grofers) for ~$568M was Goyal's most controversial decision — and his most important. At the time, quick commerce was burning cash at a ferocious rate. Most investors wanted Zomato to focus on its core. Goyal was convinced that grocery delivery in 10 minutes would be Zomato's most defensible business within five years. He was right.`
                },
                {
                  h: "Eternal: The Next Chapter",
                  b: `The January 2025 rebrand from Zomato Ltd to Eternal wasn't cosmetic. It was a structural acknowledgment that Deepinder Goyal's ambitions have outgrown the restaurant-delivery category entirely.\n\nBlinkit now operates over 1,000 dark stores and is on track to become India's largest quick commerce platform. Hyperpure supplies fresh produce and ingredients to tens of thousands of restaurants. District is building the infrastructure for India's live events economy.\n\nAt $25B+ valuation, Eternal is India's most valuable consumer internet company — and Goyal remains its most visible, most polarising, and most underestimated founder. He started by solving a lunch queue problem. He ended up building the infrastructure layer for how urban India eats, shops, and entertains itself.\n\nThe lesson isn't about scale. It's about the conviction to keep expanding the definition of the problem you're solving.`
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
                "The best businesses are built by solving a problem you personally experienced — 
                and then refusing to stop expanding the definition of that problem."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4"
                style={{ fontFamily: "system-ui,sans-serif" }}>
                — Deepinder Goyal, Founder & CEO, Zomato / Eternal
              </p>
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

            {/* ETERNAL PORTFOLIO */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                The Eternal Portfolio
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { name: "Zomato", desc: "Food delivery platform. 300+ cities. Core business since 2008.", color: "#E11D48" },
                  { name: "Blinkit", desc: "Quick commerce — groceries in 10 minutes. 1000+ dark stores. Acquired 2022.", color: "#F59E0B" },
                  { name: "Hyperpure", desc: "B2B fresh ingredients supply to 40,000+ restaurants across India.", color: "#10B981" },
                  { name: "District", desc: "Events, nightlife, and dining experiences. India's live entertainment layer.", color: "#6366F1" },
                ].map((p) => (
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

            {/* FAQ */}
            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Frequently Asked Questions
              </p>
              {[
                { q: "Who founded Zomato?", a: "Zomato was co-founded by Deepinder Goyal and Pankaj Chaddah in 2008 as FoodieBay, while both were working as analysts at Bain & Company in Delhi. Deepinder Goyal continues as CEO. Pankaj Chaddah left the company in 2018." },
                { q: "Why did Zomato rebrand to Eternal?", a: "In January 2025, Zomato Ltd rebranded its parent entity to Eternal to reflect its evolution into a multi-business conglomerate. Eternal now encompasses Zomato (food delivery), Blinkit (quick commerce), Hyperpure (B2B food supply), and District (events). The consumer-facing Zomato app and brand remain unchanged." },
                { q: "What is Zomato/Eternal's current valuation?", a: "Eternal (listed as Zomato on NSE/BSE) is valued at over $25 billion as of early 2026, making it India's most valuable consumer internet company. The stock has significantly outperformed since its IPO in July 2021." },
                { q: "When did Zomato acquire Blinkit?", a: "Zomato acquired Blinkit (formerly Grofers) in August 2022 in an all-stock deal valued at approximately $568 million. The acquisition was completed after a period where Zomato had provided a $150M emergency loan to Grofers. As of 2026, Blinkit operates 1,000+ dark stores and is one of India's top three quick commerce platforms." },
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
                  src="https://images.livemint.com/img/2022/02/19/600x338/PTI04_09_2019_000172B-0_1645261016610_1645261016610.jpg"
                  alt="Deepinder Goyal, Zomato and Eternal founder — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager" itemProp="image"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Deepinder_Goyal.jpg/320px-Deepinder_Goyal.jpg"
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Deepinder Goyal</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founder & CEO · Zomato / Eternal</p>
                </div>
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
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.25rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  The best startups don't just solve a problem — they keep expanding 
                  the definition of the problem until they own an entire ecosystem.
                </p>
              </div>

              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}>Key Investors</p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {["Ant Financial / Alipay", "Tiger Global", "Sequoia Capital India", "Softbank Vision Fund", "Info Edge (Early backer)"].map((inv, i) => (
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
            style={{ fontFamily: "system-ui,sans-serif" }}>Explore More on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "FoodTech Startups India", h: "/foodtech-startups" },
              { l: "Quick Commerce India", h: "/quick-commerce-startups" },
              { l: "Indian IPOs 2021–2026", h: "/indian-ipos" },
              { l: "Zomato vs Swiggy 2026", h: "/comparison/zomato-swiggy" },
              { l: "Indian Unicorns List", h: "/indian-unicorns" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Zepto Profile", h: "/startup/zepto" },
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
            * Data sourced from public filings (BSE/NSE), Inc42, Forbes India, Tracxn, and Zomato/Eternal press releases as of March 2026. 
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "FoodTech Startups India", h: "/foodtech-startups" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Sarvam AI Profile", h: "/startup/sarvam-ai" },
                { l: "Zepto Profile", h: "/startup/zepto" },
                { l: "Zerodha Profile", h: "/startup/zerodha" },
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
