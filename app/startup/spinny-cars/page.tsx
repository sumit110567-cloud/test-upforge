"use client"

// app/startup/spinny-cars/page.tsx
// UpForge — Spinny · Niraj Singh Founder Chronicle
// FIX: FAQPage appears ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.
// FIX: mainEntity is a proper JSON array [].

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/spinny-cars#article",
      "headline": "Spinny — How Niraj Singh Built India's Most Trusted Used Car Platform",
      "description": "Spinny founder Niraj Singh turned a broken, opaque used car market into a $1.8B full-stack platform with certified, transparent buying. $315M raised from Tiger Global and General Atlantic.",
      "url": "https://upforge.in/startup/spinny-cars",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": { "@type": "ImageObject", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhEGcchrkMFMKY10CKmOUHWAIo3T06-9dPA&s", "width": 1200, "height": 630 },
      "publisher": {
        "@type": "Organization", "name": "UpForge", "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person", "name": "Niraj Singh",
          "jobTitle": "Founder & CEO", "worksFor": { "@type": "Organization", "name": "Spinny" },
          "sameAs": ["https://www.linkedin.com/in/nirajsingh1/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Spinny",
        "url": "https://www.spinny.com",
        "foundingDate": "2015",
        "foundingLocation": { "@type": "Place", "addressLocality": "Gurugram", "addressCountry": "IN" },
        "description": "Spinny is India's leading full-stack used car retail platform offering certified pre-owned cars with transparent pricing and a 5-day money-back guarantee.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 5000 },
        "sameAs": ["https://www.spinny.com", "https://twitter.com/SpinnyCars"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "AutoTech Startups India", "item": "https://upforge.in/autotech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Spinny", "item": "https://upforge.in/startup/spinny-cars" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Spinny?",
          "acceptedAnswer": { "@type": "Answer", "text": "Spinny was founded in 2015 by Niraj Singh in Gurugram, Haryana. Singh previously co-founded Carcrew, an auto service marketplace. He is an IIT Delhi and IIM Ahmedabad alumnus. Spinny's other early co-founders include Ramanshu Mahaur, Mohit Gupta, and Ganesh Pawar." }
        },
        {
          "@type": "Question",
          "name": "How much funding has Spinny raised?",
          "acceptedAnswer": { "@type": "Answer", "text": "Spinny has raised over $315M in total funding. Key investors include Tiger Global Management, General Atlantic, Accel, and Elevation Capital. The company reached unicorn status in 2021 with a valuation of $1.8 billion." }
        },
        {
          "@type": "Question",
          "name": "What makes Spinny different from other used car platforms in India?",
          "acceptedAnswer": { "@type": "Answer", "text": "Spinny operates as a full-stack platform — it buys cars directly, inspects them through a 200-point process, refurbishes them, and sells them with a fixed, transparent price. Unlike classifieds platforms like OLX, Spinny guarantees quality with a 5-day money-back policy and 1-year after-sales warranty." }
        },
        {
          "@type": "Question",
          "name": "Is Spinny a unicorn?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Spinny achieved unicorn status in October 2021 when Tiger Global led a $283M funding round valuing the company at $1.8 billion. It became one of India's fastest used car unicorns, reaching the milestone in just six years of operations." }
        }
      ]
    }
  ]
}

const STATS = [
  { l: "Valuation", v: "$1.8B" },
  { l: "Funding", v: "$315M+" },
  { l: "Founded", v: "2015" },
  { l: "HQ", v: "Gurugram" },
  { l: "Inspection", v: "200-point" },
  { l: "Guarantee", v: "5-Day" },
]

const TIMELINE = [
  { year: "2015", event: "Spinny founded in Gurugram by Niraj Singh. Initial model: peer-to-peer car inspections for used car buyers" },
  { year: "2017–19", event: "Pivoted to full-stack retail — buying, certifying, and selling used cars directly. Series A from Accel and Elevation Capital" },
  { year: "2020", event: "Expanded to 10+ cities. 200-point inspection process standardised. Revenue model proven at scale" },
  { year: "2021", event: "Tiger Global leads $283M round. Unicorn status achieved — valuation hits $1.8B. General Atlantic joins as investor" },
  { year: "2023–25", event: "Expanded to 25+ cities. Launched Spinny Max (premium pre-owned cars). Revenue crosses ₹3,500 Cr. Focus on profitability" },
]

const COLS = [
  {
    h: "The Problem Was Trust",
    b: `Buying a used car in India has always been a leap of faith. Odometer tampering. Hidden accident damage. Undisclosed service history. Dealers who disappeared after the sale. For a market moving millions of cars a year, the trust deficit was staggering.\n\nNiraj Singh experienced this frustration firsthand as a consumer and a founder. His first startup, Carcrew, had tried to solve auto servicing. By 2015, he saw a larger problem: the entire used car transaction was broken, and fixing it required controlling the full stack — not just connecting buyers and sellers, but standing behind every car sold.\n\nSpinny's founding insight was deceptively simple: if you own the inventory, you own the quality. And if you own the quality, customers will pay a premium for certainty.`
  },
  {
    h: "Full Stack, Not Just a Marketplace",
    b: `The structural difference between Spinny and every competitor is ownership of the product. Cars24 and OLX Autos are marketplaces — they connect buyers and sellers but don't control quality. Spinny buys every car it sells, runs it through a 200-point inspection, fixes what needs fixing, prices it transparently, and backs it with a 5-day money-back guarantee and 1-year after-sales support.\n\nThis model is harder, more capital-intensive, and operationally complex. But it's also the only model that can sustainably build trust in a category where trust has historically been absent.\n\nBy 2021, Tiger Global — one of the world's most rigorous technology investors — bet $283M on this thesis. General Atlantic followed. The used car category was ready for a premium, trustworthy player, and Spinny had built the infrastructure to deliver it.`
  },
  {
    h: "Unicorn and the Road Ahead",
    b: `Spinny's $1.8B valuation in 2021 arrived faster than most expected. Within six years, the company had gone from a small inspection service to India's most trusted used car retailer — operating across 25+ cities and managing one of the country's largest offline-and-digital car retail networks.\n\nBut the real test for Spinny isn't the valuation — it's unit economics. Used car retail is inventory-heavy and margin-thin. The path to profitability requires selling more premium inventory (Spinny Max), building stronger after-sales revenue, and scaling financing products that capture more of the transaction value.\n\nNiraj Singh has shown the discipline to pivot when needed — from peer-to-peer inspections to full retail in 2017, and from growth-at-all-costs to profitability focus post-2022. That adaptability, more than the funding, is what makes Spinny a serious long-term bet.`
  }
]

const PULL_QUOTE = {
  text: "Every used car buyer in India deserves to know exactly what they're buying. No surprises. No regrets. That's the business we built.",
  by: "Niraj Singh, Founder & CEO, Spinny"
}

const LESSON = "Owning the hard part — inventory, quality, and trust — is more defensible than owning the easy part. Spinny chose the hard path and it became their moat."

const INVESTORS = ["Tiger Global Management", "General Atlantic", "Accel India", "Elevation Capital", "FJ Labs"]

const FAQS = [
  { q: "Who founded Spinny?", a: "Spinny was founded in 2015 by Niraj Singh in Gurugram. Singh is an IIT Delhi and IIM Ahmedabad alumnus who previously co-founded Carcrew. Other early co-founders include Ramanshu Mahaur, Mohit Gupta, and Ganesh Pawar." },
  { q: "How much has Spinny raised?", a: "Spinny has raised over $315M. Tiger Global led the landmark $283M Series E in 2021. Other key investors include General Atlantic, Accel, and Elevation Capital. The raise pushed Spinny's valuation to $1.8 billion." },
  { q: "How does Spinny's 200-point inspection work?", a: "Spinny's inspection covers all major car systems — engine, transmission, brakes, electricals, interior, bodywork and more — evaluated by trained technicians. Cars that pass the inspection are certified, priced transparently, and come with a 5-day return guarantee and 1-year warranty." },
  { q: "Is Spinny profitable?", a: "Spinny shifted its focus to profitability post-2022, reducing aggressive expansion and improving unit economics. The company has been working towards EBITDA breakeven, with revenue from financing, insurance, and after-sales services supplementing car sale margins." },
]

const RELATED = [
  { name: "boAt", slug: "boat", cat: "Consumer Tech", val: "$1.3B" },
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "EV / CleanTech", val: "$1.3B" },
  { name: "Blue Energy Motors", slug: "blue-energy-motors", cat: "Green Logistics", val: "Series B" },
]

export default function SpinnyCarsPage() {
  const accent = "#16A34A"
  const accentBg = "#F0FDF4"
  const accentBorder = "#BBF7D0"

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
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      <h1 className="sr-only">Spinny Founder Story — Niraj Singh | India's Used Car Unicorn | UpForge</h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "AutoTech Startups", h: "/autotech-startups" }, { n: "Spinny", h: "/startup/spinny-cars" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1
                ? <Link href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</Link>
                : <span className="text-[#1A1208] font-semibold">{b.n}</span>}
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* MASTHEAD */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Startup Registry · AutoTech
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
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition No. 03</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            AutoTech · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Gurugram, Haryana</span>
        </div>
      </header>

      {/* MAIN */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}>

          {/* LEFT EDITORIAL */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}>AUTOTECH</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 03 · March 2026</span>
            </div>
            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              India's used car market was broken. Spinny decided to fix it by owning every step of the chain.
            </h2>
            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}>
              Spinny is India's most trusted used car platform — but trust was never given, it was built.
              Through a 200-point inspection process, transparent pricing, and a 5-day money-back guarantee,
              Niraj Singh turned a market notorious for opacity into a category where consumers
              finally feel safe. $315M raised. $1.8B valued. The mission is unfinished.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Gurugram, Haryana", "Est. 2015", "India's Used Car Unicorn"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img src="https://images.yourstory.com/cs/wordpress/2021/11/Spinny-Niraj-Singh.jpg"
                alt="Niraj Singh, Founder and CEO of Spinny Cars"
                className="w-full object-cover object-top" style={{ height: "min(300px,60vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Niraj Singh</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Spinny</p>
              </div>
            </div>

            {/* 3-COL BODY */}
            <div className="ncols">
              {COLS.map((col, ci) => (
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
              style={{ borderTop: `3px double ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(16px,2.2vw,22px)" }}>
                "{PULL_QUOTE.text}"
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* YOUTUBE EMBED */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Watch · Spinny Founder in Conversation
              </p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=ldN2OI7y4ciehvsq"
                  title="Spinny — Niraj Singh on Building India's Trusted Used Car Platform | UpForge"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy"
                  style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>
                Niraj Singh on building trust in India's used car market — UpForge Featured Interview
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
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
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

            {/* FAQ — visual only, NO microdata */}
            <section className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: "1px solid #D8D2C4" }}>
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}>{faq.q}</h3>
                  <p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>{faq.a}</p>
                </div>
              ))}
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img src="https://images.yourstory.com/cs/wordpress/2021/11/Spinny-Niraj-Singh.jpg"
                  alt="Niraj Singh, Founder and CEO of Spinny — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top" loading="eager" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Niraj Singh</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Spinny</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI" target="_blank" rel="noopener noreferrer"
                  className="block relative" aria-label="Watch Spinny founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg"
                    alt="Spinny — Niraj Singh founder interview"
                    className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Niraj Singh on building trust in used cars</p>
              </div>

              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.25rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>{LESSON}</p>
              </div>

              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>Key Investors</p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
                    <p key={i} className="flex items-center gap-2 text-[11px] text-[#2C2010]" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 1, background: accent, display: "inline-block", flexShrink: 0 }} />
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>Also Read on UpForge</p>
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

        {/* SEO INTERNAL LINKS */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More AutoTech Startups on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "AutoTech Startups India 2026", h: "/autotech-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Spinny vs Cars24 India", h: "/autotech/spinny-vs-cars24" },
              { l: "Used Car Market India", h: "/used-car-market-india" },
              { l: "Ather Energy EV Profile", h: "/startup/ather-energy-ev" },
              { l: "Blue Energy Motors", h: "/startup/blue-energy-motors" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>Building India's next unicorn? Get verified on UpForge.</p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>Free startup profiles. Independent verification. Indexed by Google.</p>
            </div>
            <div className="flex sm:justify-end">
              <Link href="/submit" className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            * Data sourced from public filings, Tracxn, Inc42, Forbes India, and Spinny press releases as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "AutoTech Startups", h: "/autotech-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "boAt Profile", h: "/startup/boat" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Blue Energy Motors", h: "/startup/blue-energy-motors" },
                { l: "Sarvam AI Profile", h: "/startup/sarvam-ai" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
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
