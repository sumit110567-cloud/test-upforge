"use client"

// app/startup/oyo/page.tsx
// UpForge — OYO · Ritesh Agarwal Founder Chronicle

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/oyo#article",
      "headline": "OYO — Ritesh Agarwal Founder Story on UpForge",
      "url": "https://upforge.in/startup/oyo",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Ritesh Agarwal",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "OYO" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Travel & Hospitality", "item": "https://upforge.in/travel-startups" },
        { "@type": "ListItem", "position": 4, "name": "OYO", "item": "https://upforge.in/startup/oyo" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who founded OYO?", "acceptedAnswer": { "@type": "Answer", "text": "OYO was founded by Ritesh Agarwal in 2013. He was 19 years old at the time, making him one of India's youngest successful startup founders. He had previously built a budget accommodation listing site called Oravel Stays, which he pivoted into OYO Rooms." } },
        { "@type": "Question", "name": "What is OYO's valuation?", "acceptedAnswer": { "@type": "Answer", "text": "OYO is valued at over $10 billion as of 2026. The company has filed for an IPO with SEBI. Its peak valuation was around $10B during the SoftBank-backed growth phase." } },
        { "@type": "Question", "name": "Is OYO profitable?", "acceptedAnswer": { "@type": "Answer", "text": "OYO achieved profitability in key markets after a major restructuring in 2020–2022. The company significantly reduced its footprint in unprofitable markets, cut costs, and focused on unit economics. India and select international markets are profitable." } },
        { "@type": "Question", "name": "How many hotels does OYO have?", "acceptedAnswer": { "@type": "Answer", "text": "OYO manages over 1 million rooms across 80+ countries as of 2026. It is one of the world's largest hotel chains by room count, though it does not own the hotels — it operates a franchise and technology partnership model with existing small hotels and B&Bs." } },
      ]
    }
  ]
}

const accent = "#DC2626"
const accentBg = "#FEF2F2"
const accentBorder = "#FCA5A5"

const STATS = [
  { l: "Valuation", v: "$10B+" },
  { l: "Countries", v: "80+" },
  { l: "Founded", v: "2013" },
  { l: "Age at Start", v: "19" },
  { l: "Funding", v: "$3B+" },
  { l: "Hotels", v: "1M+ rooms" },
]

const TIMELINE = [
  { year: "2012", event: "Ritesh Agarwal, 19, leaves college. Travels India staying in budget hotels. Registers Oravel Stays — a budget accommodation aggregator" },
  { year: "2013", event: "Pivots to OYO Rooms — not just listing hotels but standardising them. Cleanliness, Wi-Fi, branded toiletries become the promise" },
  { year: "2015–2017", event: "Accepted into Y Combinator. SoftBank invests. OYO expands to 200+ cities. Becomes India's largest budget hotel chain" },
  { year: "2018–2019", event: "Global expansion — China, UK, USA, Indonesia, Japan. OYO becomes one of the world's largest hotel companies by room count" },
  { year: "2020–2021", event: "COVID devastates hospitality globally. OYO restructures, cuts costs, refocuses on profitability" },
  { year: "2022–2026", event: "OYO files for India IPO. Valuation stabilises at $10B+. Profitability achieved in key markets. 80+ countries, 1M+ rooms" },
]

const INVESTORS = [
  "SoftBank Vision Fund",
  "Sequoia Capital India",
  "Lightspeed India",
  "Airbnb (Strategic)",
  "Hero Enterprise",
]

const COLS = [
        {
          h: "The Boy Who Stayed in Bad Hotels",
          b: `In 2012, Ritesh Agarwal was a 19-year-old from Titilagarh, Odisha — a small town most Indians couldn't place on a map. He had left home with ambition and very little else, and he was travelling across India staying in the kind of budget accommodation that most people endure rather than enjoy.

The experience was consistent: dirty rooms, broken promises, no standard pricing, no accountability. The same ₹500-a-night room could be a reasonable deal or a genuine ordeal — and you could never tell before you arrived.

He saw a technology problem masquerading as a hospitality problem. The hotels existed. The demand existed. What was missing was a layer that created standards, built trust, and made the experience predictable. He called his first attempt Oravel Stays. It was, in essence, a listings site. It was not enough.`
        },
        {
          h: "The OYO Standard",
          b: `The pivot to OYO Rooms in 2013 was more fundamental than a rebrand. Instead of listing hotels as they were, OYO would partner with them — install the technology, enforce the standards, train the staff, and co-brand the room. In return, OYO took a cut of the revenue and delivered demand.

The promise to the traveller was simple and radical: wherever you see an OYO, you know what you're getting. The room will be clean. The Wi-Fi will work. The price will be what the app said it was.

This was accepted into Y Combinator in 2015 — one of the few Indian startups to go through the programme. SoftBank's Masayoshi Son backed the vision with hundreds of millions. OYO expanded to 200 cities in India, then started looking beyond India's borders.`
        },
        {
          h: "80 Countries, One Standard",
          b: `Between 2018 and 2019, OYO became one of the fastest-expanding hospitality companies in history. It entered China, the UK, the USA, Indonesia, Japan, and dozens of other markets. At its peak, OYO was growing faster than any hotel chain had ever grown — not by building hotels but by standardising existing ones.

COVID brought the entire sector to a halt. OYO restructured aggressively, exited unprofitable markets, and refocused on unit economics. The painful rationalisation that followed was as important to the company's survival as its explosive growth phase had been to its ambition.

By 2026, OYO is in 80+ countries with over 1 million rooms under management. The IPO filed with SEBI reflects a company that has survived its adolescence and is now building toward sustainable scale. Ritesh Agarwal started at 19. The company he built is still young.`
        },
]

const RELATED = [
  { name: "Nykaa", slug: "nykaa", cat: "D2C / BEAUTY", val: "$2.5B" },
  { name: "Ola", slug: "ola", cat: "MOBILITY / EV", val: "$7B+" },
  { name: "InternAdda", slug: "internadda", cat: "CAREER / EDTECH", val: "InternAdda" },

]

export default function OYOPage() {
  useEffect(() => {
    const s = document.getElementById("oyo-jsonld")
    if (!s) {
      const el = document.createElement("script")
      el.id = "oyo-jsonld"; el.type = "application/ld+json"
      el.textContent = JSON.stringify(JSON_LD); document.head.appendChild(el)
    }
    return () => { document.getElementById("oyo-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Ritesh Agarwal — OYO Founder | World's Largest Hotel Chain Story | UpForge"
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

      <h1 className="sr-only">Ritesh Agarwal — OYO Founder Story | TRAVEL / HOSPITALITY India | UpForge</h1>

      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" }, { n: "Travel & Hospitality", h: "/travel-startups" }, { n: "OYO", h: "/startup/oyo" }].map((b, i, arr) => (
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
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge · Startup Registry · Travel / Hospitality</p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>India's independent startup registry — verified, editorial, March 2026</p>
          <div className="flex items-center justify-center gap-3 mt-4"><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /><span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /></div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 06</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>TRAVEL / HOSPITALITY · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Gurugram, Haryana</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]" style={{ borderBottom: "2px solid #1A1208" }} itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains." />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/oyo" />

          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>TRAVEL / HOSPITALITY</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 06 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              Ritesh Agarwal built OYO after travelling across India and experiencing firsthand the chaos of budget accommodation. His solution — standardise and brand small hotels using technology — became one of the fastest-growing hospitality companies in the world.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Gurugram, Haryana", "Est. 2013", "Youngest billionaire founder — started at 19"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/ritesh_agarwal-sixteen_nine.jpg" alt="Ritesh Agarwal, Founder & CEO at OYO" className="w-full object-cover object-top" style={{ height: "min(280px,55vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Ritesh Agarwal</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · OYO</p>
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
                "Every frustrating experience is a signal. Most people complain — founders turn that signal into a company."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>— Ritesh Agarwal, Founder & CEO, OYO</p>
            </div>

            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Watch · OYO in Conversation</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" title="OYO — Ritesh Agarwal Founder Interview | UpForge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Ritesh Agarwal on building OYO — UpForge Featured Interview</p>
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
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>The best consumer businesses are built by people who personally experienced the problem at its worst.</p>
            </div>

            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Frequently Asked Questions</p>
              {[
              { q: "Who founded OYO?", a: "OYO was founded by Ritesh Agarwal in 2013. He was 19 years old at the time, making him one of India's youngest successful startup founders. He had previously built a budget accommodation listing site called Oravel Stays, which he pivoted into OYO Rooms." },
              { q: "What is OYO's valuation?", a: "OYO is valued at over $10 billion as of 2026. The company has filed for an IPO with SEBI. Its peak valuation was around $10B during the SoftBank-backed growth phase." },
              { q: "Is OYO profitable?", a: "OYO achieved profitability in key markets after a major restructuring in 2020–2022. The company significantly reduced its footprint in unprofitable markets, cut costs, and focused on unit economics. India and select international markets are profitable." },
              { q: "How many hotels does OYO have?", a: "OYO manages over 1 million rooms across 80+ countries as of 2026. It is one of the world's largest hotel chains by room count, though it does not own the hotels — it operates a franchise and technology partnership model with existing small hotels and B&Bs." },
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
                <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202306/ritesh_agarwal-sixteen_nine.jpg" alt="Ritesh Agarwal, OYO — UpForge Founder Chronicle" className="w-full h-full object-cover object-top" loading="eager" itemProp="image" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Ritesh Agarwal</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · OYO</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch OYO founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg" alt="Ritesh Agarwal — OYO founder interview" className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Ritesh Agarwal on building OYO — UpForge Featured</p>
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
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>The best consumer businesses are built by people who personally experienced the problem at its worst.</p>
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
              { l: "Travel Startups India", h: "/travel-startups" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "OYO vs MakeMyTrip", h: "/comparison/oyo-mmt" },
              { l: "Hospitality Tech India", h: "/hospitality-startups" },
              { l: "SoftBank India Portfolio", h: "/softbank-india" },
              { l: "Startup Registry", h: "/startup" },
              { l: "Ola Profile", h: "/startup/ola" },
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
              { l: "Travel Startups India", h: "/travel-startups" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "OYO vs MakeMyTrip", h: "/comparison/oyo-mmt" },
              { l: "Hospitality Tech India", h: "/hospitality-startups" },
              { l: "SoftBank India Portfolio", h: "/softbank-india" },
              { l: "Startup Registry", h: "/startup" },
          ].map(lnk => (<li key={lnk.h}><Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>))}</ul></nav>
        </footer>
      </main>
    </div>
  )
}
