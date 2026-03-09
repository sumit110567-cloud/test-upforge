"use client"

// app/startup/cred/page.tsx
// UpForge — CRED · Kunal Shah Founder Chronicle

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/cred#article",
      "headline": "CRED — Kunal Shah Founder Story on UpForge",
      "url": "https://upforge.in/startup/cred",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Kunal Shah",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "CRED" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Fintech Startups", "item": "https://upforge.in/fintech-startups" },
        { "@type": "ListItem", "position": 4, "name": "CRED", "item": "https://upforge.in/startup/cred" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who founded CRED?", "acceptedAnswer": { "@type": "Answer", "text": "CRED was founded by Kunal Shah in 2018 in Bengaluru. Kunal had previously co-founded FreeCharge, which was acquired by Snapdeal in 2015 for approximately $400 million, making him one of India's few serial unicorn founders." } },
        { "@type": "Question", "name": "What is CRED and how does it work?", "acceptedAnswer": { "@type": "Answer", "text": "CRED is a membership-based fintech platform for creditworthy Indians — specifically those with credit scores above 750. Members earn CRED coins by paying their credit card bills through the app. These coins can be redeemed for rewards, discounts, and exclusive products. CRED has since expanded into lending, P2P investments, rent payments, and vehicle services." } },
        { "@type": "Question", "name": "What is CRED's valuation?", "acceptedAnswer": { "@type": "Answer", "text": "CRED is valued at over $6 billion as of 2026, making it one of India's most valuable fintech startups. The company has raised funding from Sequoia Capital, Tiger Global, Ribbit Capital, and GIC Singapore among others." } },
        { "@type": "Question", "name": "What is Kunal Shah's Delta 4 theory?", "acceptedAnswer": { "@type": "Answer", "text": "Delta 4 is Kunal Shah's framework for identifying disruption opportunities. It states that when a new solution scores 4 or more points higher than the existing solution on a user experience scale, switching becomes irreversible and the new product achieves dominant market position. Kunal developed this theory during the gap between FreeCharge and CRED." } },
      ]
    }
  ]
}

const accent = "#111827"
const accentBg = "#F3F4F6"
const accentBorder = "#9CA3AF"

const STATS = [
  { l: "Valuation", v: "$6B+" },
  { l: "Users", v: "12M+" },
  { l: "Founded", v: "2018" },
  { l: "FreeCharge Exit", v: "$400M" },
  { l: "Category", v: "Premium Fintech" },
  { l: "Members", v: "Credit Score 750+" },
]

const TIMELINE = [
  { year: "2010", event: "Kunal Shah co-founds FreeCharge — India's first mobile recharge and bill payment platform" },
  { year: "2015", event: "FreeCharge acquired by Snapdeal for ~$400M — one of India's largest fintech exits at the time" },
  { year: "2016–2018", event: "Kunal studies consumer behaviour intensively. Develops Delta 4 theory of disruption. Plans next venture" },
  { year: "2018", event: "CRED founded. Premise: reward people with credit scores above 750 for paying their credit card bills on time" },
  { year: "2021", event: "CRED valued at $2.2B. Expands into CRED Store, CRED Pay, rent payments, travel bookings" },
  { year: "2022–2023", event: "CRED Cash (lending), CRED Mint (P2P), CRED Garage (vehicle services). Valuation $6B+" },
  { year: "2024–2026", event: "12M+ members. CRED becomes India's premium consumer fintech ecosystem — trust-gated, membership-based" },
]

const INVESTORS = [
  "Sequoia Capital India",
  "Tiger Global",
  "Ribbit Capital",
  "GIC Singapore",
  "Insight Partners",
]

const COLS = [
        {
          h: "The FreeCharge Foundation",
          b: `Kunal Shah's first company, FreeCharge, was built on a simple insight: mobile recharge was a high-frequency transaction in India, and if you could make it effortless and rewarding, you could build a massive user base.

FreeCharge launched cashback and discount coupons tied to recharges — a model that worked brilliantly in an India where prepaid mobile was dominant and every rupee of cashback felt meaningful. The company grew to tens of millions of users and was acquired by Snapdeal in 2015 for approximately $400 million — one of India's landmark fintech exits.

Most founders would have launched their next company immediately. Kunal Shah didn't. He spent two years studying why products succeed or fail — reading, thinking, and developing a framework he would later call the Delta 4 theory.`
        },
        {
          h: "The CRED Insight",
          b: `The insight behind CRED was counterintuitive: the most valuable fintech users in India — people with credit scores above 750, who consistently pay their bills on time — were being systematically ignored by the industry.

These users didn't need nudges to pay. They didn't need reminders or education. They were, by definition, financially responsible. What they weren't getting was recognition. CRED was built to give it to them.

The membership model was deliberate. CRED isn't open to everyone — you need a credit score above 750 to join. This exclusivity wasn't elitism; it was product design. By guaranteeing the quality of its user base, CRED could offer members exclusive access to premium products, curated brands, and financial services that a generic fintech platform couldn't.

The bet was that a smaller, higher-quality audience was worth more than a larger, undifferentiated one.`
        },
        {
          h: "Building the Trust Economy",
          b: `CRED's expansion from credit card bill payments into a broader financial ecosystem — CRED Store, CRED Pay, CRED Cash, CRED Mint, CRED Garage — was always the plan. Each product extension leverages the same trust architecture: members who have demonstrated financial discipline are offered products and services calibrated to that trust level.

At $6B+ valuation with 12M members, CRED has proven that premium, trust-gated community commerce is a viable model in India — not just in theory, but at scale.

Kunal Shah's broader intellectual contribution to Indian startups may be more important than CRED itself. His Delta 4 framework, his thinking on consumer behaviour, and his public writing on fintech have shaped how a generation of Indian founders think about product design. He built two unicorns. The ideas he shares have probably influenced many more.`
        },
]

const RELATED = [
  { name: "Nykaa", slug: "nykaa", cat: "D2C / BEAUTY", val: "$2.5B" },
  { name: "OYO", slug: "oyo", cat: "TRAVEL / HOSPITALITY", val: "$10B+" },
  { name: "Ola", slug: "ola", cat: "MOBILITY / EV", val: "$7B+" },

]

export default function CREDPage() {
  useEffect(() => {
    const s = document.getElementById("cred-jsonld")
    if (!s) {
      const el = document.createElement("script")
      el.id = "cred-jsonld"; el.type = "application/ld+json"
      el.textContent = JSON.stringify(JSON_LD); document.head.appendChild(el)
    }
    return () => { document.getElementById("cred-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Kunal Shah — CRED Founder | India's $6B Premium Fintech | UpForge"
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

      <h1 className="sr-only">Kunal Shah — CRED Founder Story | FINTECH India | UpForge</h1>

      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" }, { n: "Fintech Startups", h: "/fintech-startups" }, { n: "CRED", h: "/startup/cred" }].map((b, i, arr) => (
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
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge · Startup Registry · Fintech</p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>India's independent startup registry — verified, editorial, March 2026</p>
          <div className="flex items-center justify-center gap-3 mt-4"><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /><span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /></div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 09</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>FINTECH · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]" style={{ borderBottom: "2px solid #1A1208" }} itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="He sold one fintech for $400M. Then built CRED — a $6B club for people who pay their bills on time." />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/cred" />

          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>FINTECH</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 09 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              He sold one fintech for $400M. Then built CRED — a $6B club for people who pay their bills on time.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              Kunal Shah is India's most philosophically-minded fintech founder. After selling FreeCharge, he spent years studying consumer behaviour before launching CRED — not as a payment app, but as a trust-gated community where financial discipline is rewarded.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Bengaluru, Karnataka", "Est. 2018", "Built two unicorn fintech startups"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <img src="https://images.moneycontrol.com/static-mcnews/2022/11/Kunal-Shah-1.jpg" alt="Kunal Shah, Founder & CEO at CRED" className="w-full object-cover object-top" style={{ height: "min(280px,55vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Kunal Shah</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · CRED</p>
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
                "Trust is the most powerful currency in fintech. Everything else can be copied — trust has to be earned."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>— Kunal Shah, Founder & CEO, CRED</p>
            </div>

            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Watch · CRED in Conversation</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" title="CRED — Kunal Shah Founder Interview | UpForge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Kunal Shah on building CRED — UpForge Featured Interview</p>
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
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>Understand human behaviour better than technology. The best fintech products are built on psychology, not just payments infrastructure.</p>
            </div>

            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Frequently Asked Questions</p>
              {[
              { q: "Who founded CRED?", a: "CRED was founded by Kunal Shah in 2018 in Bengaluru. Kunal had previously co-founded FreeCharge, which was acquired by Snapdeal in 2015 for approximately $400 million, making him one of India's few serial unicorn founders." },
              { q: "What is CRED and how does it work?", a: "CRED is a membership-based fintech platform for creditworthy Indians — specifically those with credit scores above 750. Members earn CRED coins by paying their credit card bills through the app. These coins can be redeemed for rewards, discounts, and exclusive products. CRED has since expanded into lending, P2P investments, rent payments, and vehicle services." },
              { q: "What is CRED's valuation?", a: "CRED is valued at over $6 billion as of 2026, making it one of India's most valuable fintech startups. The company has raised funding from Sequoia Capital, Tiger Global, Ribbit Capital, and GIC Singapore among others." },
              { q: "What is Kunal Shah's Delta 4 theory?", a: "Delta 4 is Kunal Shah's framework for identifying disruption opportunities. It states that when a new solution scores 4 or more points higher than the existing solution on a user experience scale, switching becomes irreversible and the new product achieves dominant market position. Kunal developed this theory during the gap between FreeCharge and CRED." },
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
                <img src="https://images.moneycontrol.com/static-mcnews/2022/11/Kunal-Shah-1.jpg" alt="Kunal Shah, CRED — UpForge Founder Chronicle" className="w-full h-full object-cover object-top" loading="eager" itemProp="image" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Kunal Shah</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · CRED</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch CRED founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg" alt="Kunal Shah — CRED founder interview" className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Kunal Shah on building CRED — UpForge Featured</p>
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
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>Understand human behaviour better than technology. The best fintech products are built on psychology, not just payments infrastructure.</p>
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
              { l: "Fintech Startups India 2026", h: "/fintech-startups" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "CRED vs Zerodha vs Paytm", h: "/comparison/fintech-india" },
              { l: "Premium Fintech India", h: "/premium-fintech" },
              { l: "FreeCharge Story", h: "/startup/freecharge" },
              { l: "Startup Registry", h: "/startup" },
              { l: "Paytm Profile", h: "/startup/paytm" },
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
              { l: "Fintech Startups India 2026", h: "/fintech-startups" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "CRED vs Zerodha vs Paytm", h: "/comparison/fintech-india" },
              { l: "Premium Fintech India", h: "/premium-fintech" },
              { l: "FreeCharge Story", h: "/startup/freecharge" },
              { l: "Startup Registry", h: "/startup" },
          ].map(lnk => (<li key={lnk.h}><Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>))}</ul></nav>
        </footer>
      </main>
    </div>
  )
}
