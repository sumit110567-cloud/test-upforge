"use client"

// app/startup/lat-aerospace/page.tsx
// UpForge — LAT Aerospace · Deepinder Goyal

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/lat-aerospace#article",
      "headline": "LAT Aerospace — Deepinder Goyal's Mission to Build India's Electric Regional Aircraft",
      "description": "After building Zomato into a $25B company, Deepinder Goyal founded LAT Aerospace to build electric short take-off aircraft for India's underconnected Tier-2 and Tier-3 cities.",
      "url": "https://upforge.in/startup/lat-aerospace",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Deepinder Goyal",
        "jobTitle": "Founder",
        "worksFor": { "@type": "Organization", "name": "LAT Aerospace" },
        "address": { "@type": "PostalAddress", "addressLocality": "Gurugram", "addressCountry": "IN" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Deep Tech Startups", "item": "https://upforge.in/deep-tech-startups" },
        { "@type": "ListItem", "position": 4, "name": "LAT Aerospace", "item": "https://upforge.in/startup/lat-aerospace" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who founded LAT Aerospace?", "acceptedAnswer": { "@type": "Answer", "text": "LAT Aerospace was founded by Deepinder Goyal, who is also the co-founder and CEO of Zomato (now Eternal). He founded LAT Aerospace in 2024 to build electric short take-off and landing (eSTOL) aircraft for India's regional aviation market." } },
        { "@type": "Question", "name": "What does LAT Aerospace build?", "acceptedAnswer": { "@type": "Answer", "text": "LAT Aerospace is developing electric short take-off and landing (eSTOL) aircraft designed to operate from smaller runways and regional airstrips in India. The aircraft are intended to connect Tier-2 and Tier-3 cities that lack conventional airport infrastructure." } },
        { "@type": "Question", "name": "Why is Deepinder Goyal building LAT Aerospace?", "acceptedAnswer": { "@type": "Answer", "text": "Deepinder Goyal founded LAT Aerospace because he believes India's regional connectivity problem cannot be solved by building more large airports. Electric aircraft that can use shorter runways and operate at lower cost could unlock air travel for hundreds of smaller Indian cities." } }
      ]
    }
  ]
}

const accent = "#EA580C"
const accentBg = "#FFF7ED"
const accentBorder = "#FED7AA"

const STATS = [
  { l: "Industry", v: "Aerospace" },
  { l: "Aircraft", v: "Electric" },
  { l: "Founded", v: "2024" },
  { l: "Stage", v: "Stealth" },
  { l: "Focus", v: "Regional" },
  { l: "Founder", v: "Zomato CEO" },
]

const TIMELINE = [
  { year: "2008–2024", event: "Deepinder Goyal builds Zomato from a canteen menu project into India's $25B food & commerce giant" },
  { year: "2024", event: "LAT Aerospace founded — Deepinder's second act. Focus: electric short take-off aircraft for Indian regional aviation" },
  { year: "2025", event: "Stealth development. Team assembled from aerospace and electric propulsion backgrounds" },
  { year: "2026", event: "LAT Aerospace in active R&D. Prototype development underway. India's regional aviation gap estimated at 400+ underserved cities" },
]

const RELATED = [
  { name: "Zomato / Eternal", slug: "zomato", cat: "FoodTech", val: "$25B+" },
  { name: "Sarvam AI", slug: "sarvam-ai", cat: "AI", val: "$1B+" },
  { name: "Zepto", slug: "zepto", cat: "Quick Commerce", val: "$5.9B" },
]

export default function LATAerospacePage() {
  useEffect(() => {
    const s = document.getElementById("lat-jsonld")
    if (!s) {
      const el = document.createElement("script")
      el.id = "lat-jsonld"; el.type = "application/ld+json"
      el.textContent = JSON.stringify(JSON_LD); document.head.appendChild(el)
    }
    return () => { document.getElementById("lat-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Deepinder Goyal — LAT Aerospace | Electric Aviation India | UpForge"
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

      <h1 className="sr-only">LAT Aerospace Founder Story — Deepinder Goyal | Electric Regional Aviation India | UpForge</h1>

      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" }, { n: "Deep Tech", h: "/deep-tech-startups" }, { n: "LAT Aerospace", h: "/startup/lat-aerospace" }].map((b, i, arr) => (
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
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge · Startup Registry · Aerospace</p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>India's independent startup registry — verified, editorial, March 2026</p>
          <div className="flex items-center justify-center gap-3 mt-4"><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /><span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /></div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 03</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>Aerospace · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Gurugram, Haryana</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]" style={{ borderBottom: "2px solid #1A1208" }} itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="LAT Aerospace — Deepinder Goyal's Electric Aviation Bet for India" />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/lat-aerospace" />

          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>AEROSPACE</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 03 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              India doesn't just need more airports. It needs a new way to fly.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              After building Zomato into India's most valuable consumer internet company, Deepinder Goyal turned his attention to a problem that has nothing to do with food — and everything to do with how India moves. LAT Aerospace is building electric aircraft for the hundreds of Indian cities that will never be served by conventional aviation.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Gurugram, HR", "Est. 2024", "Post-Zomato second act"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FTtR9px3fbhDE8ihpSI_tPLHNaBXBeE9Cw&s" alt="Deepinder Goyal, Founder of LAT Aerospace and CEO of Zomato" className="w-full object-cover object-top" style={{ height: "min(280px,55vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Deepinder Goyal</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder · LAT Aerospace</p>
              </div>
            </div>

            <div className="ncols" itemProp="articleBody">
              {[
                { h: "Beyond Food Delivery", b: `After building Zomato into one of India's most recognised technology companies and overseeing its transformation into Eternal — a multi-business conglomerate spanning food delivery, quick commerce, B2B supply, and live events — Deepinder Goyal turned his attention to a very different challenge: regional aviation.\n\nMillions of Indians live in cities without efficient air connectivity. India has over 400 cities with populations above 100,000. Fewer than 100 of them have functional commercial airports. The rest are connected, if at all, by roads and railways that can take 8–12 hours to cover distances a plane would cover in 45 minutes.\n\nLAT Aerospace was founded on a simple conviction: that electric aviation technology, applied intelligently to India's geography, could solve a connectivity problem that neither roads nor high-speed rail can fully address.` },
                { h: "Electric Short Take-Off Aircraft", b: `The technical bet at LAT Aerospace is specific. Conventional commercial aircraft require runways of at least 2,000 metres — infrastructure that costs hundreds of crores to build and years to commission. Most of India's underserved cities could not justify that investment even if the funding were available.\n\nLAT Aerospace is focused on developing electric short take-off and landing (eSTOL) aircraft — planes designed to operate from runways as short as 300–500 metres. This means existing airstrips, military fields, and purpose-built landing pads in district headquarters could become viable aviation nodes.\n\nThe combination of electric propulsion (lower operating cost) and eSTOL capability (lower infrastructure requirement) is the core product thesis. If it works, it doesn't just connect more cities — it creates an entirely new category of Indian aviation.` },
                { h: "The Founder's Logic", b: `Deepinder Goyal's move into aerospace is not as surprising as it might appear. His pattern as a founder has always been the same: identify a problem where the existing infrastructure is fundamentally inadequate, build a technology layer that makes a better solution economically viable, and scale aggressively once unit economics are validated.\n\nHe did it with restaurant discovery (Zomato), with quick grocery delivery (Blinkit acquisition), and now he is attempting it with regional air mobility.\n\nThe project reflects a broader trend in Indian deep tech: founders who built their first companies on software and logistics are now turning to hard engineering problems — aerospace, energy, defence — where the barriers to entry are high but the market opportunity is generational.\n\nLAT Aerospace is in stealth as of 2026. But in a country with 400 underserved cities and a founder who has already built one of India's most valuable companies, the ambition has earned its audience.` }
              ].map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5" style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}>{col.h}</h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p key={pi} className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`} style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 pb-6 text-center" style={{ borderTop: `3px solid ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4" style={{ fontSize: "clamp(15px,2.1vw,21px)" }}>
                "India doesn't just need more airports. It needs a new way to fly."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>— Deepinder Goyal, Founder, LAT Aerospace</p>
            </div>

            {/* YOUTUBE VIDEO */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Watch · LAT Aerospace in Conversation</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" title="LAT Aerospace — Deepinder Goyal on Electric Aviation India | UpForge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Deepinder Goyal on India's next mobility frontier — electric regional aviation — UpForge Featured Interview</p>
            </div>

            {/* TIMELINE */}
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

            {/* FAQ */}
            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Frequently Asked Questions</p>
              {[
                { q: "Who founded LAT Aerospace?", a: "LAT Aerospace was founded by Deepinder Goyal in 2024. Goyal is also the co-founder and CEO of Zomato (now Eternal), India's most valuable consumer internet company. LAT Aerospace represents his second major entrepreneurial venture." },
                { q: "What does LAT Aerospace build?", a: "LAT Aerospace is developing electric short take-off and landing (eSTOL) aircraft designed to operate from runways as short as 300–500 metres. The aircraft target India's regional aviation market — the 400+ cities with populations above 100,000 that are currently underserved by commercial aviation." },
                { q: "Is LAT Aerospace funded?", a: "LAT Aerospace is operating in stealth mode as of 2026. Funding details are undisclosed. Given Deepinder Goyal's track record and network, the startup is expected to be well-resourced, but no public round has been announced." },
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FTtR9px3fbhDE8ihpSI_tPLHNaBXBeE9Cw&s" alt="Deepinder Goyal, Founder of LAT Aerospace — UpForge Founder Chronicle" className="w-full h-full object-cover object-top" loading="eager" itemProp="image" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Deepinder Goyal</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder · LAT Aerospace</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch LAT Aerospace interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg" alt="Deepinder Goyal — LAT Aerospace electric aviation interview" className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Deepinder Goyal on electric aviation & India's next mobility frontier</p>
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
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>The biggest opportunities often lie in industries that haven't changed for decades — and where software alone cannot be the solution.</p>
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
            {[{ l: "Deep Tech Startups India", h: "/deep-tech-startups" }, { l: "Aerospace Startups India", h: "/aerospace-startups" }, { l: "Zomato / Eternal Profile", h: "/startup/zomato" }, { l: "Indian Unicorns 2026", h: "/indian-unicorns" }, { l: "EV Startups India", h: "/ev-startups" }, { l: "Startup Registry", h: "/startup" }, { l: "Ola Electric Profile", h: "/startup/ola" }, { l: "Submit Your Startup", h: "/submit" }].map((lnk) => (
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
          <nav aria-label="Footer navigation" className="mt-3"><ul className="flex flex-wrap gap-x-4 gap-y-2">{[{ l: "Deep Tech Startups", h: "/deep-tech-startups" }, { l: "Zomato Profile", h: "/startup/zomato" }, { l: "Startup Registry", h: "/startup" }, { l: "Indian Unicorns", h: "/indian-unicorns" }].map(lnk => (<li key={lnk.h}><Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>))}</ul></nav>
        </footer>
      </main>
    </div>
  )
}
