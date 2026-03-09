"use client"

// app/startup/paytm/page.tsx
// UpForge — Paytm · Vijay Shekhar Sharma Founder Chronicle

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/paytm#article",
      "headline": "Paytm — Vijay Shekhar Sharma Founder Story on UpForge",
      "url": "https://upforge.in/startup/paytm",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person", "name": "Vijay Shekhar Sharma",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Paytm" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Fintech Startups", "item": "https://upforge.in/fintech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Paytm", "item": "https://upforge.in/startup/paytm" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        { "@type": "Question", "name": "Who founded Paytm?", "acceptedAnswer": { "@type": "Answer", "text": "Paytm was founded by Vijay Shekhar Sharma in 2010 under his company One97 Communications. Vijay grew up in Aligarh, UP, studied at Delhi College of Engineering, and sold his first tech company as a student before founding One97 in 2000 and launching Paytm as a mobile recharge platform." } },
        { "@type": "Question", "name": "When did Paytm go public?", "acceptedAnswer": { "@type": "Answer", "text": "Paytm (One97 Communications) listed on the BSE and NSE in November 2021. It was India's largest IPO at the time, raising ₹18,300 crore (~$2.5 billion). The IPO was oversubscribed but the stock fell significantly from its listing price of ₹2,150." } },
        { "@type": "Question", "name": "What happened to Paytm Payments Bank?", "acceptedAnswer": { "@type": "Answer", "text": "In January 2024, the Reserve Bank of India ordered Paytm Payments Bank to stop accepting new deposits and credits after March 2024, citing persistent non-compliance issues. This forced Paytm to restructure its payments business significantly. The company migrated its payment operations to partner banks and refocused on its core payments and financial services distribution business." } },
        { "@type": "Question", "name": "What is Paytm's parent company?", "acceptedAnswer": { "@type": "Answer", "text": "Paytm's parent company is One97 Communications Limited, founded by Vijay Shekhar Sharma in 2000. One97 is listed on Indian stock exchanges. Paytm is One97's primary consumer brand, along with Paytm Money (investments), Paytm Insurance, and Paytm for Business." } },
      ]
    }
  ]
}

const accent = "#0284C7"
const accentBg = "#EFF6FF"
const accentBorder = "#7DD3FC"

const STATS = [
  { l: "Users", v: "300M+" },
  { l: "IPO Year", v: "2021" },
  { l: "Founded", v: "2010" },
  { l: "Parent Co.", v: "One97" },
  { l: "Funding", v: "$3B+" },
  { l: "Listed On", v: "NSE/BSE" },
]

const TIMELINE = [
  { year: "1978", event: "Vijay Shekhar Sharma born in Aligarh, UP. First language Hindi. Struggles with English at Delhi College of Engineering" },
  { year: "1997–2000", event: "Sells his first software company while still a student. Founds One97 Communications — a mobile internet content company" },
  { year: "2010", event: "Paytm launched as a mobile recharge platform. Focuses on prepaid mobile and DTH recharge" },
  { year: "2014–2016", event: "Paytm expands to wallet, bill payments, e-commerce. Alibaba/Ant Financial invest. Valuation crosses $1B" },
  { year: "Nov 2016", event: "Demonetisation. Overnight, Paytm becomes India's default digital payment method. 400% user growth in weeks" },
  { year: "Nov 2021", event: "Paytm IPO — India's largest IPO at the time. Lists at ₹2,150 per share. ₹18,300 crore raised" },
  { year: "2022–2026", event: "Navigates RBI regulatory actions, restructures Paytm Payments Bank. Refocuses on payments, lending, insurance distribution" },
]

const INVESTORS = [
  "Ant Financial (Alibaba)",
  "SoftBank",
  "Warren Buffett (Berkshire)",
  "T Rowe Price",
  "Elevation Capital",
]

const COLS = [
        {
          h: "The Small-Town Dreamer",
          b: `Vijay Shekhar Sharma grew up in Aligarh, Uttar Pradesh — a city better known for its locks than its tech startups. He was, by his own account, a below-average student of English in a system that rewarded English fluency above almost everything else.

He got into Delhi College of Engineering. He struggled. He adapted. And in the way that many first-generation students do, he converted the disadvantage of having no safety net into an unusual focus and drive.

He sold his first company — a web solutions business — while still a student. He founded One97 Communications in 2000 as a mobile internet content company. Over the next decade, One97 built out services for mobile operators and slowly evolved toward direct consumer payments. In 2010, he launched Paytm as a mobile recharge platform.`
        },
        {
          h: "The Demonetisation Moment",
          b: `For six years, Paytm grew steadily — mobile recharges, bill payments, a digital wallet for online transactions. Useful. Growing. But not yet a movement.

Then, on the night of 8 November 2016, Prime Minister Narendra Modi announced the demonetisation of ₹500 and ₹1000 currency notes. Within hours, India's cash economy was in crisis. Within days, Paytm had become the only functional alternative for hundreds of millions of transactions.

The app crossed 100 million downloads in weeks. Merchants who had never heard of digital payments put up Paytm QR codes overnight. Vijay Shekhar Sharma's photo appeared on the front page of the New York Times. Paytm hadn't created the moment — but they had spent six years preparing for it, and they were the only platform ready to handle the scale when it arrived.`
        },
        {
          h: "IPO, Regulation, and Resilience",
          b: `Paytm's November 2021 IPO was India's largest ever — raising ₹18,300 crore (~$2.5B) and listing One97 Communications at a valuation north of $16B. For Vijay Shekhar Sharma, the boy from Aligarh who struggled with English at engineering college, it was the moment that validated every bet.

The post-IPO journey has been harder. The stock fell sharply from its listing price. RBI actions against Paytm Payments Bank in 2024 forced a significant restructuring. The company navigated regulatory headwinds with the same stubborn resilience that built it in the first place.

By 2026, Paytm has refocused its business on payments processing, lending distribution, and insurance. The 300M+ user base remains among the largest in Indian fintech. Vijay Shekhar Sharma remains its most recognisable face — a reminder that in India's startup story, the best chapters are rarely the smoothest ones.`
        },
]

const RELATED = [
  { name: "Nykaa", slug: "nykaa", cat: "D2C / BEAUTY", val: "$2.5B" },
  { name: "OYO", slug: "oyo", cat: "TRAVEL / HOSPITALITY", val: "$10B+" },
  { name: "Ola", slug: "ola", cat: "MOBILITY / EV", val: "$7B+" },

]

export default function PaytmPage() {
  useEffect(() => {
    const s = document.getElementById("paytm-jsonld")
    if (!s) {
      const el = document.createElement("script")
      el.id = "paytm-jsonld"; el.type = "application/ld+json"
      el.textContent = JSON.stringify(JSON_LD); document.head.appendChild(el)
    }
    return () => { document.getElementById("paytm-jsonld")?.remove() }
  }, [])

  useEffect(() => {
    document.title = "Vijay Shekhar Sharma — Paytm Founder | India's Digital Payments Pioneer | UpForge"
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

      <h1 className="sr-only">Vijay Shekhar Sharma — Paytm Founder Story | FINTECH / PAYMENTS India | UpForge</h1>

      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" itemScope itemType="https://schema.org/BreadcrumbList">
          {[{ n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" }, { n: "Fintech Startups", h: "/fintech-startups" }, { n: "Paytm", h: "/startup/paytm" }].map((b, i, arr) => (
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
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge · Startup Registry · Fintech / Payments</p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>India's independent startup registry — verified, editorial, March 2026</p>
          <div className="flex items-center justify-center gap-3 mt-4"><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /><span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span><div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} /></div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 10</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>FINTECH / PAYMENTS · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Noida, Uttar Pradesh</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]" style={{ borderBottom: "2px solid #1A1208" }} itemScope itemType="https://schema.org/Article">
          <meta itemProp="headline" content="From a small-town boy who struggled with English to building India's most recognised digital payments brand." />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://upforge.in/startup/paytm" />

          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>FINTECH / PAYMENTS</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 10 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              From a small-town boy who struggled with English to building India's most recognised digital payments brand.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              Vijay Shekhar Sharma grew up in Aligarh, studied engineering in Delhi, and built Paytm — India's most recognised digital payments platform — with sheer persistence. Demonetisation made Paytm a household name. His journey made it a lesson in first-generation ambition.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Noida, Uttar Pradesh", "Est. 2010", "Built India's biggest digital wallet — from a small-town dreamer"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            <div className="lg:hidden mb-8">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s" alt="Vijay Shekhar Sharma, Founder & CEO at Paytm" className="w-full object-cover object-top" style={{ height: "min(280px,55vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Vijay Shekhar Sharma</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Paytm</p>
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
                "I grew up in a small town, struggled with English, and had no networks. Persistence is the only advantage that doesn't run out."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>— Vijay Shekhar Sharma, Founder & CEO, Paytm</p>
            </div>

            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Watch · Paytm in Conversation</p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" title="Paytm — Vijay Shekhar Sharma Founder Interview | UpForge" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy" style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Vijay Shekhar Sharma on building Paytm — UpForge Featured Interview</p>
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
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>Persistence beats privilege. First-generation founders often build more durable companies because they have no fallback.</p>
            </div>

            <section className="mt-8" itemScope itemType="https://schema.org/FAQPage">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>Frequently Asked Questions</p>
              {[
              { q: "Who founded Paytm?", a: "Paytm was founded by Vijay Shekhar Sharma in 2010 under his company One97 Communications. Vijay grew up in Aligarh, UP, studied at Delhi College of Engineering, and sold his first tech company as a student before founding One97 in 2000 and launching Paytm as a mobile recharge platform." },
              { q: "When did Paytm go public?", a: "Paytm (One97 Communications) listed on the BSE and NSE in November 2021. It was India's largest IPO at the time, raising ₹18,300 crore (~$2.5 billion). The IPO was oversubscribed but the stock fell significantly from its listing price of ₹2,150." },
              { q: "What happened to Paytm Payments Bank?", a: "In January 2024, the Reserve Bank of India ordered Paytm Payments Bank to stop accepting new deposits and credits after March 2024, citing persistent non-compliance issues. This forced Paytm to restructure its payments business significantly. The company migrated its payment operations to partner banks and refocused on its core payments and financial services distribution business." },
              { q: "What is Paytm's parent company?", a: "Paytm's parent company is One97 Communications Limited, founded by Vijay Shekhar Sharma in 2000. One97 is listed on Indian stock exchanges. Paytm is One97's primary consumer brand, along with Paytm Money (investments), Paytm Insurance, and Paytm for Business." },
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
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s" alt="Vijay Shekhar Sharma, Paytm — UpForge Founder Chronicle" className="w-full h-full object-cover object-top" loading="eager" itemProp="image" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Vijay Shekhar Sharma</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder & CEO · Paytm</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch Paytm founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg" alt="Vijay Shekhar Sharma — Paytm founder interview" className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Vijay Shekhar Sharma on building Paytm — UpForge Featured</p>
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
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>Persistence beats privilege. First-generation founders often build more durable companies because they have no fallback.</p>
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
              { l: "India Digital Payments", h: "/digital-payments-india" },
              { l: "Paytm vs PhonePe vs GPay", h: "/comparison/india-payments" },
              { l: "Indian IPOs 2021", h: "/indian-ipos" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "Startup Registry", h: "/startup" },
              { l: "CRED Profile", h: "/startup/cred" },
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
              { l: "India Digital Payments", h: "/digital-payments-india" },
              { l: "Paytm vs PhonePe vs GPay", h: "/comparison/india-payments" },
              { l: "Indian IPOs 2021", h: "/indian-ipos" },
              { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
              { l: "Startup Registry", h: "/startup" },
          ].map(lnk => (<li key={lnk.h}><Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>))}</ul></nav>
        </footer>
      </main>
    </div>
  )
}
