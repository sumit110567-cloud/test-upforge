"use client"

// app/startup/blue-energy-motors/page.tsx
// UpForge — Blue Energy Motors · Anirudh Batra Founder Chronicle
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
      "@id": "https://upforge.in/startup/blue-energy-motors#article",
      "headline": "Blue Energy Motors — Building India's LNG-Powered Truck Revolution",
      "description": "Blue Energy Motors founder Anirudh Batra is decarbonising India's long-haul trucking fleet with LNG-powered heavy commercial vehicles. Backed by SAIC and leading Indian investors.",
      "url": "https://upforge.in/startup/blue-energy-motors",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": { "@type": "ImageObject", "url": "https://upforge.in/og/blue-energy-motors.png", "width": 1200, "height": 630 },
      "publisher": {
        "@type": "Organization", "name": "UpForge", "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person", "name": "Anirudh Batra",
          "jobTitle": "Founder & CEO", "worksFor": { "@type": "Organization", "name": "Blue Energy Motors" },
          "sameAs": ["https://www.linkedin.com/in/anirudhbatra/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Blue Energy Motors",
        "url": "https://www.blueenergymotors.in",
        "foundingDate": "2019",
        "foundingLocation": { "@type": "Place", "addressLocality": "Pune", "addressCountry": "IN" },
        "description": "Blue Energy Motors builds LNG-powered heavy commercial vehicles for India's long-haul freight sector, enabling significant reductions in carbon emissions and operating costs.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 200 },
        "sameAs": ["https://www.blueenergymotors.in"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "CleanTech Startups India", "item": "https://upforge.in/cleantech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Blue Energy Motors", "item": "https://upforge.in/startup/blue-energy-motors" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Blue Energy Motors?",
          "acceptedAnswer": { "@type": "Answer", "text": "Blue Energy Motors was founded in 2019 by Anirudh Batra in Pune. Batra brings deep expertise in the commercial vehicle and logistics industry. The company was co-founded with backing from SAIC Motor, one of China's largest automotive groups." }
        },
        {
          "@type": "Question",
          "name": "What does Blue Energy Motors make?",
          "acceptedAnswer": { "@type": "Answer", "text": "Blue Energy Motors builds LNG (Liquefied Natural Gas) powered heavy commercial vehicles — primarily long-haul trucks — for India's freight sector. LNG trucks offer 30–40% lower carbon emissions compared to diesel, along with lower fuel costs over long distances." }
        },
        {
          "@type": "Question",
          "name": "Why LNG trucks instead of electric trucks for India?",
          "acceptedAnswer": { "@type": "Answer", "text": "Electric trucks face serious range and charging infrastructure challenges for India's long-haul freight routes. LNG trucks offer a practical bridge — they use existing refuelling infrastructure concepts, achieve 1,000+ km range, and deliver meaningful emission reductions today. Blue Energy Motors positions LNG as the realistic decarbonisation path for India's 10M+ heavy truck fleet." }
        },
        {
          "@type": "Question",
          "name": "Who has invested in Blue Energy Motors?",
          "acceptedAnswer": { "@type": "Answer", "text": "Blue Energy Motors is backed by SAIC Motor (China's largest automaker by volume), alongside Indian institutional investors. The company has raised multiple rounds to fund vehicle development, manufacturing scale-up, and LNG refuelling infrastructure partnerships." }
        }
      ]
    }
  ]
}

const STATS = [
  { l: "Founded", v: "2019" },
  { l: "HQ", v: "Pune" },
  { l: "Fuel", v: "LNG" },
  { l: "Emission Cut", v: "30–40%" },
  { l: "Backer", v: "SAIC" },
  { l: "Range", v: "1000+ km" },
]

const TIMELINE = [
  { year: "2019", event: "Blue Energy Motors founded in Pune. Focus: LNG-powered heavy commercial vehicles for India's long-haul freight routes" },
  { year: "2020–21", event: "SAIC Motor (China's largest automaker) backs Blue Energy Motors. First LNG truck prototypes developed and tested" },
  { year: "2022", event: "Commercial launch of BEM LNG trucks. Early fleet deployments with major logistics and fleet operators across India" },
  { year: "2023", event: "Series B funding raised. Manufacturing capacity expanded at Pune facility. LNG refuelling partnerships established on key freight corridors" },
  { year: "2024–25", event: "Fleet deployments scaled to hundreds of vehicles. Expanded product line. Positioned as India's leading clean energy HCV manufacturer" },
]

const COLS = [
  {
    h: "The Problem Nobody Wanted to Solve",
    b: `India has roughly 10 million heavy commercial vehicles. They burn diesel. They move 65% of the country's freight. And they account for a disproportionate share of India's carbon emissions and urban air pollution.\n\nThe obvious solution — electric trucks — doesn't work for long-haul India yet. The charging infrastructure doesn't exist on national highways. Battery technology can't yet support the 800–1,200 km daily routes that Indian truck operators run. And the upfront cost premium of electric HCVs is prohibitive for a fleet industry operating on thin margins.\n\nAnirudh Batra identified LNG as the realistic bridge. Liquefied Natural Gas burns 30–40% cleaner than diesel. LNG trucks can achieve ranges exceeding 1,000 km. And the refuelling model — centralised depot refuelling — maps directly onto how large Indian fleet operators already manage their vehicles.`
  },
  {
    h: "SAIC, Pune, and the Manufacturing Bet",
    b: `The decision to build in India, for India, was deliberate. Blue Energy Motors didn't import trucks or rebadge foreign products. The company designed and built LNG heavy trucks from the ground up in Pune, drawing on deep commercial vehicle engineering expertise and a supply chain rooted in India's existing HCV ecosystem.\n\nThe partnership with SAIC Motor — one of the world's largest automakers — gave Blue Energy access to LNG powertrain technology, manufacturing best practices, and global component supply chains. But the application was uniquely Indian: vehicle specifications tuned for Indian road conditions, load patterns, and driver ergonomics.\n\nBy 2022, commercial deployments had begun with large fleet operators on India's busiest freight corridors — Delhi-Mumbai, Chennai-Bengaluru, Pune-Hyderabad — routes where LNG's cost and emission advantages are most pronounced.`
  },
  {
    h: "The Hardest Part of India's Climate Puzzle",
    b: `India's climate goals are ambitious. Net zero by 2070. 500 GW of renewable energy by 2030. But decarbonising road freight — the backbone of the economy — is uniquely difficult because it requires solutions that work for millions of individual fleet operators, many running two or three trucks, for whom economic logic always trumps environmental virtue.\n\nBlue Energy Motors' pitch is economic before it's environmental: LNG trucks cost less to run per kilometre on long-haul routes than diesel equivalents. The emission benefit is real, but it's the fuel savings that close the sale.\n\nThis is the right approach for India. Clean technology that requires sacrifice doesn't scale. Clean technology that saves money does. Anirudh Batra understood this — and built accordingly.`
  }
]

const PULL_QUOTE = {
  text: "We are not asking fleet operators to sacrifice economics for the environment. We are giving them cleaner trucks that cost less to run. That is how you actually decarbonise India.",
  by: "Anirudh Batra, Founder & CEO, Blue Energy Motors"
}

const LESSON = "In hard-to-abate sectors, the winning climate technology is always the one that improves economics first and emissions second. Blue Energy built the right product in the right order."

const INVESTORS = ["SAIC Motor Corporation", "Series B Institutional Investors", "Strategic logistics backers", "Indian family offices"]

const FAQS = [
  { q: "Who is the founder of Blue Energy Motors?", a: "Blue Energy Motors was founded in 2019 by Anirudh Batra in Pune. Batra has deep expertise in the commercial vehicle and logistics industry. The company was established with strategic backing from SAIC Motor, one of China's largest automotive groups." },
  { q: "Why LNG trucks instead of electric for Indian logistics?", a: "Electric trucks currently lack the range (800–1,200+ km daily routes) and refuelling infrastructure needed for Indian long-haul freight. LNG trucks are a practical bridge solution — 30–40% lower emissions than diesel, 1,000+ km range, and lower total cost of ownership for high-mileage operators." },
  { q: "Where are Blue Energy Motors trucks manufactured?", a: "Blue Energy Motors trucks are designed and manufactured in India at the company's facility in Pune, Maharashtra. The company has built a supply chain rooted in India's existing HCV component ecosystem, with powertrain technology supported through its partnership with SAIC Motor." },
  { q: "What routes are Blue Energy LNG trucks deployed on?", a: "Blue Energy Motors trucks are primarily deployed on India's major long-haul freight corridors — Delhi-Mumbai, Chennai-Bengaluru, Pune-Hyderabad and similar routes where high daily mileage makes LNG's cost and emission advantages most commercially significant." },
]

const RELATED = [
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "EV / CleanTech", val: "$1.3B" },
  { name: "Spinny", slug: "spinny-cars", cat: "AutoTech", val: "$1.8B" },
  { name: "boAt", slug: "boat", cat: "Consumer Tech", val: "$1.3B" },
]

export default function BlueEnergyMotorsPage() {
  const accent = "#0369A1"
  const accentBg = "#F0F9FF"
  const accentBorder = "#BAE6FD"

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

      <h1 className="sr-only">Blue Energy Motors Founder Story — Anirudh Batra | India's LNG Truck Pioneer | UpForge</h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "CleanTech Startups", h: "/cleantech-startups" }, { n: "Blue Energy Motors", h: "/startup/blue-energy-motors" },
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
            UpForge · Startup Registry · CleanTech
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
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition No. 04</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            CleanTech · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Pune, Maharashtra</span>
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
                style={{ background: accent }}>CLEANTECH</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 04 · March 2026</span>
            </div>
            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              India cannot decarbonise its economy without first decarbonising its trucks.
            </h2>
            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}>
              Blue Energy Motors is building LNG-powered heavy trucks that cut emissions by 30–40%
              and cost less to operate than diesel equivalents. Not a pilot. Not a promise.
              Commercial deployments already running on India's busiest freight corridors.
              Anirudh Batra chose the hardest problem in India's climate stack — and built a business case for it.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Pune, Maharashtra", "Est. 2019", "India's Green Highway Pioneer"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img src="https://images.yourstory.com/cs/1/88a43be0d5b811e9aa4b5178b9b9e6ab/Blue-Energy-Motors1580897991927.jpg"
                alt="Anirudh Batra, Founder and CEO of Blue Energy Motors"
                className="w-full object-cover object-top" style={{ height: "min(300px,60vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Anirudh Batra</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Blue Energy Motors</p>
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
                Watch · Blue Energy Motors in Conversation
              </p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=ldN2OI7y4ciehvsq"
                  title="Blue Energy Motors — Anirudh Batra on India's LNG Truck Revolution | UpForge"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy"
                  style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>
                Anirudh Batra on decarbonising India's roads with LNG — UpForge Featured Interview
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
                <img src="https://images.yourstory.com/cs/1/88a43be0d5b811e9aa4b5178b9b9e6ab/Blue-Energy-Motors1580897991927.jpg"
                  alt="Anirudh Batra, Founder and CEO of Blue Energy Motors — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top" loading="eager" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Anirudh Batra</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Blue Energy Motors</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI" target="_blank" rel="noopener noreferrer"
                  className="block relative" aria-label="Watch Blue Energy Motors interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg"
                    alt="Blue Energy Motors — Anirudh Batra interview"
                    className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Anirudh Batra on India's LNG freight revolution</p>
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
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More CleanTech Startups on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "CleanTech Startups India 2026", h: "/cleantech-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "EV Startups India", h: "/ev-startups-india" },
              { l: "Green Logistics India", h: "/green-logistics-india" },
              { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
              { l: "Deep Tech Startups India", h: "/deep-tech-startups" },
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
            * Data sourced from public filings, Tracxn, Inc42, Forbes India, and Blue Energy Motors press releases as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "CleanTech Startups", h: "/cleantech-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Spinny Profile", h: "/startup/spinny-cars" },
                { l: "boAt Profile", h: "/startup/boat" },
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
