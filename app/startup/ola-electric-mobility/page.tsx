"use client"

// app/startup/ola/page.tsx
// UpForge — Ola · Bhavish Aggarwal Founder Chronicle

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/ola#article",
      "headline": "Ola — Bhavish Aggarwal Founder Story on UpForge",
      "url": "https://upforge.in/startup/ola",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Bhavish Aggarwal",
        "jobTitle": "Co-Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Ola" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Mobility / EV", "item": "https://upforge.in/ev-startups" },
        { "@type": "ListItem", "position": 4, "name": "Ola", "item": "https://upforge.in/startup/ola" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who founded Ola?", "acceptedAnswer": { "@type": "Answer", "text": "Ola was co-founded by Bhavish Aggarwal and Ankit Bhati in 2010 in Bengaluru. Bhavish serves as CEO. Both are IIT Bombay graduates. The company was founded after Bhavish had a frustrating experience with a taxi driver who demanded extra money mid-journey." } },
        { "@type": "Question", "name": "What is Ola's relationship with Ola Electric?", "acceptedAnswer": { "@type": "Answer", "text": "Ola Electric is a separate company founded by Bhavish Aggarwal in 2019. It is not a subsidiary of Ola Cabs but a distinct entity focused on electric scooters, motorcycles, and EV manufacturing. Ola Electric listed on Indian stock exchanges in 2024 in India's first major EV IPO." } },
        { "@type": "Question", "name": "What is Ola's current valuation?", "acceptedAnswer": { "@type": "Answer", "text": "Ola (the ride-hailing company) is valued at over $7 billion as of 2026. Ola Electric is separately listed and has its own market capitalisation. Together, Bhavish Aggarwal's mobility empire is one of India's most valuable founder-led portfolios." } },
        { "@type": "Question", "name": "Where is Ola Electric's gigafactory?", "acceptedAnswer": { "@type": "Answer", "text": "Ola Electric's Future Factory is located in Krishnagiri, Tamil Nadu. It is one of the world's largest electric two-wheeler manufacturing plants, with a capacity of millions of units per year. The facility also houses R&D for EV cells and battery technology." } },
      ]
    }
  ]
}

const accent = "#F59E0B"
const accentBg = "#FFFBEB"
const accentBorder = "#FDE68A"

const STATS = [
  { l: "Ola Valuation", v: "$7B+" },
  { l: "Ola Electric", v: "Listed" },
  { l: "Cities", v: "250+" },
  { l: "Founded", v: "2010" },
  { l: "Funding", v: "$4B+" },
  { l: "Gigafactory", v: "Tamil Nadu" },
]

const TIMELINE = [
  { year: "2010", event: "Bhavish Aggarwal, IIT Bombay alumnus, has a bad taxi experience Bangalore→Bandipur. Co-founds Ola with Ankit Bhati" },
  { year: "2011–2014", event: "Ola expands across India. Fleet model → aggregator model. SoftBank leads major round" },
  { year: "2015–2018", event: "Ola challenges Uber head-on in India. Expands to autos, bikes, outstation. 250+ cities" },
  { year: "2019", event: "Ola Electric founded as separate entity. Focus: electric scooters and EV infrastructure" },
  { year: "2021–2022", event: "Ola S1 electric scooter launches. Ola Electric builds India's largest EV manufacturing plant in Tamil Nadu" },
  { year: "2024", event: "Ola Electric IPO on Indian exchanges. India's first major EV company to list publicly" },
  { year: "2025–2026", event: "Ola Electric expands to motorcycles and EV cells. Bhavish's vision: make India a global EV manufacturing hub" },
]

const INVESTORS = [
  "SoftBank",
  "Tiger Global",
  "Tencent",
  "Matrix Partners India",
  "Hyundai (Strategic)",
]

const COLS = [
        {
          h: "The Taxi Ride That Started Everything",
          b: `In 2010, Bhavish Aggarwal — an IIT Bombay graduate working at Microsoft Research — was travelling from Bangalore to Bandipur when his taxi driver abruptly stopped the car midway and demanded extra money beyond the agreed fare. Bhavish refused. The driver left him stranded.

The experience was infuriating — but more importantly, it was structural. This wasn't a rogue driver. This was a system with no accountability, no pricing transparency, and no recourse for passengers. Millions of Indian commuters faced the same situation daily.

Bhavish called his friend Ankit Bhati. They registered Ola Cabs. The initial idea was modest: a better taxi booking service with upfront pricing and driver accountability. The ambition grew from there.`
        },
        {
          h: "Building India's Ride-Hailing Giant",
          b: `Ola didn't win India's mobility market because it was first. It won because it understood India better than its competition. The company built products for auto-rickshaws and motorcycle taxis — categories that Uber, built for American cities, never fully prioritised.

When SoftBank came in with capital, Ola expanded aggressively — 250+ cities, millions of drivers, categories ranging from shared rides to outstation travel. It was messy and loss-making and fast — exactly the profile of every platform company that defined the 2010s.

The battle with Uber was real and expensive. But by 2017, Ola was unambiguously India's dominant ride-hailing platform. Bhavish had solved the taxi problem. He was already thinking about the next one.`
        },
        {
          h: "The Electric Pivot",
          b: `In 2019, Bhavish Aggarwal made a separate bet: Ola Electric. Not a product line within Ola — a separate company, with separate funding, building electric scooters from scratch.

The Ola S1, launched in 2021, became India's best-selling electric scooter. The Tamil Nadu gigafactory — the largest two-wheeler EV plant in the world — became a symbol of India's ambition to lead the electric transition, not just participate in it.

Ola Electric's 2024 IPO was a milestone: India's first major EV company to list publicly. Bhavish's vision is now explicitly national in scale — not just making scooters, but making India a global hub for EV manufacturing, cell technology, and clean mobility infrastructure. The taxi ride from Bangalore to Bandipur has taken him a long way.`
        },
]

const RELATED = [
  { name: "Nykaa", slug: "nykaa", cat: "D2C / BEAUTY", val: "$2.5B" },
  { name: "OYO", slug: "oyo", cat: "TRAVEL / HOSPITALITY", val: "$10B+" },
  { name: "InternAdda", slug: "internadda", cat: "CAREER / EDTECH", val: "InternAdda" },

]

export default function OlaPage() {
  useEffect(() => {
    const s = document.getElementById("ola-jsonld")
    if (!s) {
      const el = document.createElement("script")
      el.id = "ola-jsonld"; el.type = "application/ld+json"
      el.textContent = JSON.stringify(JSON_LD); document.head.appendChild(el)
    }
    return () => { document.getElementById("ola-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Bhavish Aggarwal — Ola Founder | India's EV & Ride-Hailing Giant | UpForge"
  }, [])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }} role="main">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .dropcap::first-letter { font-family: 'Playfair Display', Georgia, serif; font-size: 4em; font-weight: 900; line-height: 0.82; float: left; margin-right: 0.08em; margin-top: 0.06em; color: #1A1208; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .4s ease both; }
        @media (min-width:640px) { .ncols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0; } .ncols > div { padding:0 1.5rem; border-right:1px solid #C8C2B4; } .ncols > div:first-child { padding-left:0; } .ncols > div:last-child { border-right:none; padding-right:0; } }
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      <h1 className="sr-only">Bhavish Aggarwal — Ola Founder Story | MOBILITY / EV India | UpForge</h1>

      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" }, { n: "Mobility / EV", h: "/ev-startups" }, { n: "Ola", h: "/startup/ola" }].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
              {i < arr.length - 1 ? <Link href={b.h} itemProp="item" className="hover:text-[#1A1208] transition-colors"><span itemProp="name">{b.n}</span></Link> : <span itemProp="name" className="text-[#1A1208] font-semibold">{b.n}</span>}
              <meta itemProp="position" content={String(i + 1)} />
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge · Startup Registry · Mobility / EV</p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>India's independent startup registry — verified, editorial, March 2026</p>
          <div className="flex items-center justify-center gap-3 mt-4"><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /><span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /></div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 07</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>MOBILITY / EV · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]" style={{ borderBottom: "2px solid #1A1208" }} itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="A single bad taxi ride inspired him to build India's largest mobility platform — then pivot to redefine it with electricity." />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/ola" />

          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>MOBILITY / EV</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 07 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              A single bad taxi ride inspired him to build India's largest mobility platform — then pivot to redefine it with electricity.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              Bhavish Aggarwal founded Ola after a cab driver stopped midway and demanded more money. What started as a solution to one frustrating ride became India's dominant ride-hailing platform — and then a bet on India's electric future.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Bengaluru, Karnataka", "Est. 2010", "Built India's largest ride-hailing platform, now pivoting to EV"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <img src="https://media.assettype.com/fortuneindia/2024-12/76a0b77a-7578-41d5-81b0-02b4cf0e7a3a/bhavish_aggarwal.jpg" alt="Bhavish Aggarwal, Co-Founder & CEO at Ola" className="w-full object-cover object-top" style={{ height: "min(280px,55vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Bhavish Aggarwal</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founder & CEO · Ola</p>
              </div>
            </div>

            <div className="ncols" itemProp="articleBody">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5" style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}>{col.h}</h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p key={pi} className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`} style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}>{para}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 pb-6 text-center" style={{ borderTop: `3px solid ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4" style={{ fontSize: "clamp(15px,2.1vw,21px)" }}>
                "Every frustrating experience is an opportunity to build something better. That taxi ride was my starting point."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>— Bhavish Aggarwal, Co-Founder & CEO, Ola</p>
            </div>

            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Watch · Ola in Conversation</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" title="Ola — Bhavish Aggarwal Founder Interview | UpForge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Bhavish Aggarwal on building Ola — UpForge Featured Interview</p>
            </div>

            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Company Timeline</p>
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

            <div className="mt-8 p-5" style={{ background: accentBg, border: `1.5px solid ${accentBorder}` }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>UpForge Takeaway</p>
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>The best companies start by solving a specific, personal problem — and then refuse to stop expanding the solution.</p>
            </div>

            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Frequently Asked Questions</p>
              {[
              { q: "Who founded Ola?", a: "Ola was co-founded by Bhavish Aggarwal and Ankit Bhati in 2010 in Bengaluru. Bhavish serves as CEO. Both are IIT Bombay graduates. The company was founded after Bhavish had a frustrating experience with a taxi driver who demanded extra money mid-journey." },
              { q: "What is Ola's relationship with Ola Electric?", a: "Ola Electric is a separate company founded by Bhavish Aggarwal in 2019. It is not a subsidiary of Ola Cabs but a distinct entity focused on electric scooters, motorcycles, and EV manufacturing. Ola Electric listed on Indian stock exchanges in 2024 in India's first major EV IPO." },
              { q: "What is Ola's current valuation?", a: "Ola (the ride-hailing company) is valued at over $7 billion as of 2026. Ola Electric is separately listed and has its own market capitalisation. Together, Bhavish Aggarwal's mobility empire is one of India's most valuable founder-led portfolios." },
              { q: "Where is Ola Electric's gigafactory?", a: "Ola Electric's Future Factory is located in Krishnagiri, Tamil Nadu. It is one of the world's largest electric two-wheeler manufacturing plants, with a capacity of millions of units per year. The facility also houses R&D for EV cells and battery technology." },
              ].map((faq, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: "1px solid #D8D2C4" }} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }} itemProp="name">{faq.q}</h3>
                  <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer"><p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }} itemProp="text">{faq.a}</p></div>
                </div>
              ))}
            </section>
          </article>

          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img src="https://media.assettype.com/fortuneindia/2024-12/76a0b77a-7578-41d5-81b0-02b4cf0e7a3a/bhavish_aggarwal.jpg" alt="Bhavish Aggarwal, Ola — UpForge Founder Chronicle" className="w-full h-full object-cover object-top" loading="eager" itemProp="image" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Bhavish Aggarwal</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founder & CEO · Ola</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch Ola founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg" alt="Bhavish Aggarwal — Ola founder interview" className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Bhavish Aggarwal on building Ola — UpForge Featured</p>
              </div>

              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}><p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p></div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.1rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>The best companies start by solving a specific, personal problem — and then refuse to stop expanding the solution.</p>
              </div>

              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}><p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>Key Investors</p></div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
                    <p key={i} className="flex items-center gap-2 text-[11px] text-[#2C2010]" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 1, background: accent, display: "inline-block", flexShrink: 0 }} />{inv}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>Also Read on UpForge</p>
                {RELATED.map((r) => (
                  <Link key={r.slug} href={`/startup/${r.slug}`} className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity" style={{ borderBottom: "1px solid #EDE9DF" }}>
                    <div><p className="text-[11px] font-bold text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{r.name}</p><p className="text-[9px] text-[#AAA] uppercase tracking-wider">{r.cat} · {r.val}</p></div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "EV Startups India 2026", h: "/ev-startups" },
              { l: "Mobility Startups India", h: "/mobility-startups" },
              { l: "Ola vs Uber India", h: "/comparison/ola-uber" },
              { l: "Indian EV Market 2026", h: "/ev-market-india" },
              { l: "Indian Unicorns List", h: "/indian-unicorns" },
              { l: "Startup Registry", h: "/startup" },
              { l: "OYO Profile", h: "/startup/oyo" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h} className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all" style={{ border: "1px solid #D8D2C4", background: "white" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div><p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>Building India's next unicorn? Get verified on UpForge.</p><p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>Free startup profiles. Independent verification. Indexed by Google.</p></div>
            <div className="flex sm:justify-end"><Link href="/submit" className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90" style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" /></Link></div>
          </div>
          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>* Data sourced from public sources and press releases as of March 2026. UpForge is an independent registry — no paid placements, no sponsored rankings.</p>
          <nav aria-label="Footer navigation" className="mt-3"><ul className="flex flex-wrap gap-x-4 gap-y-2">{[
              { l: "EV Startups India 2026", h: "/ev-startups" },
              { l: "Mobility Startups India", h: "/mobility-startups" },
              { l: "Ola vs Uber India", h: "/comparison/ola-uber" },
              { l: "Indian EV Market 2026", h: "/ev-market-india" },
              { l: "Indian Unicorns List", h: "/indian-unicorns" },
              { l: "Startup Registry", h: "/startup" },
          ].map(lnk => (<li key={lnk.h}><Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>))}</ul></nav>
        </footer>
      </main>
    </div>
  )
}
