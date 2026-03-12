"use client"

// app/startup/boat/page.tsx
// UpForge — boAt · Aman Gupta & Sameer Mehta Founder Chronicle
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
      "@id": "https://upforge.in/startup/boat#article",
      "headline": "boAt — How Aman Gupta Built India's No.1 Audio Brand from a Delhi Garage",
      "description": "boAt co-founders Aman Gupta and Sameer Mehta turned a bootstrapped audio accessories idea into a $1.3B Indian unicorn. $171M raised. IPO-bound. Full founder story on UpForge.",
      "url": "https://upforge.in/startup/boat",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": { "@type": "ImageObject", "url": "https://www.cheggindia.com/wp-content/uploads/2023/06/eo-35893-founder-of-boat-v2-1024x683.png", "width": 1200, "height": 630 },
      "publisher": {
        "@type": "Organization", "name": "UpForge", "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person", "name": "Aman Gupta",
          "jobTitle": "Co-Founder & CMO", "worksFor": { "@type": "Organization", "name": "boAt Lifestyle" },
          "sameAs": ["https://www.linkedin.com/in/aman-gupta-boAt/", "https://twitter.com/aman_boAt"]
        },
        {
          "@type": "Person", "name": "Sameer Mehta",
          "jobTitle": "Co-Founder & CEO", "worksFor": { "@type": "Organization", "name": "boAt Lifestyle" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "boAt Lifestyle",
        "url": "https://www.boat-lifestyle.com",
        "foundingDate": "2016",
        "foundingLocation": { "@type": "Place", "addressLocality": "New Delhi", "addressCountry": "IN" },
        "description": "boAt Lifestyle is India's leading consumer electronics brand specialising in audio products, wearables and mobile accessories.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 500 },
        "sameAs": ["https://www.boat-lifestyle.com", "https://twitter.com/boat_india"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Consumer Tech Startups", "item": "https://upforge.in/consumer-tech-startups" },
        { "@type": "ListItem", "position": 4, "name": "boAt", "item": "https://upforge.in/startup/boat" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded boAt?",
          "acceptedAnswer": { "@type": "Answer", "text": "boAt was co-founded in 2016 by Aman Gupta and Sameer Mehta in New Delhi. Aman Gupta, a CA and MBA from ISB, serves as CMO and is widely known as a judge on Shark Tank India. Sameer Mehta is the CEO and handles operations and supply chain." }
        },
        {
          "@type": "Question",
          "name": "How much funding has boAt raised?",
          "acceptedAnswer": { "@type": "Answer", "text": "boAt has raised over $171M in total funding. Key investors include Warburg Pincus, Qualcomm Ventures, Innoven Capital, and Fireside Ventures. The company was valued at approximately $1.3 billion, making it a unicorn." }
        },
        {
          "@type": "Question",
          "name": "What makes boAt different from global audio brands?",
          "acceptedAnswer": { "@type": "Answer", "text": "boAt built a brand for young India — aggressive pricing (₹500–₹5,000), vibrant design, celebrity endorsements and a massive D2C digital strategy. It became India's No.1 earwear brand and world's 5th-largest wearable company by shipments (IDC, 2022)." }
        },
        {
          "@type": "Question",
          "name": "Is boAt planning an IPO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. boAt has filed DRHP with SEBI for an IPO. The company has been profitable and targets a public listing. The IPO is expected to raise primary and secondary capital to fund expansion into newer product categories and global markets." }
        }
      ]
    }
  ]
}

const STATS = [
  { l: "Valuation", v: "$1.3B" },
  { l: "Funding", v: "$171M+" },
  { l: "Founded", v: "2016" },
  { l: "HQ", v: "New Delhi" },
  { l: "Market Rank", v: "#1 India" },
  { l: "Global Rank", v: "Top 5" },
]

const TIMELINE = [
  { year: "2016", event: "boAt founded in New Delhi by Aman Gupta & Sameer Mehta. First product: Apple-certified charging cables" },
  { year: "2018", event: "Earphones and headphones launched. Revenue crosses ₹100 Cr. D2C-first strategy pays off on Amazon & Flipkart" },
  { year: "2020–21", event: "Crossed 5 million customers. Became India's No.1 earwear brand. Series B funding from Warburg Pincus" },
  { year: "2022", event: "Unicorn status achieved — valuation crosses $1B. Aman Gupta joins Shark Tank India Season 1 as judge" },
  { year: "2024–25", event: "DRHP filed for IPO. Revenue approaches ₹4,000 Cr. Expanded into smartwatches, grooming and home audio" },
]

const COLS = [
  {
    h: "Made for Bharatiya Youth",
    b: `In 2016, Aman Gupta was 33, freshly back from a stint at JBL's parent company Harman, and had a problem he couldn't solve as a consumer: why did quality audio gear cost so much in India?\n\nGupta and his college friend Sameer Mehta didn't start with a factory or a funding round. They started with Apple-certified charging cables — a product with a clear gap and a willing market of iPhone users frustrated by cheap knockoffs. The margins were thin, but the lesson was invaluable: Indian youth wanted premium-feeling products at accessible prices.\n\nboAt's thesis was brutally simple. Sell audio gear that looks expensive, works well, and costs under ₹2,000. The rest was distribution — Amazon, Flipkart, and a social media strategy that made the brand feel like a lifestyle, not a gadget company.`
  },
  {
    h: "The Brand That Beat JBL and Sony",
    b: `By 2020, boAt had done something remarkable: it had outsold Sony and JBL in India's earwear category. Not because it had better technology — but because it had better marketing, better pricing, and an almost uncanny read on what urban India's 18–30 demographic wanted.\n\nThe brand signed Hardik Pandya, Kiara Advani, Kartik Aaryan — making earphones feel like fashion. It ran flash sales with the urgency of streetwear drops. It built a community it called "boAtheads" with the same playbook Supreme used in New York.\n\nBy 2022, IDC ranked boAt as the world's 5th-largest wearable brand by shipments. It was a company selling ₹999 earphones competing on global charts with Apple and Samsung.`
  },
  {
    h: "Shark Tank, Unicorn & What Comes Next",
    b: `When Aman Gupta appeared on Shark Tank India Season 1 in 2021, it wasn't just a TV appearance — it was the moment boAt's brand became a national story. Gupta's directness, his willingness to call out unrealistic valuations, and his obvious pride in building a consumer brand from India made him the show's breakout personality.\n\nThe unicorn status followed in 2022. The IPO filing in 2024.\n\nBut the harder question is what boAt becomes next. The earwear market is maturing. Competition from Noise, Boat's own clones, and Chinese brands has compressed margins. boAt's answer is category expansion — smartwatches, home audio, grooming, and international markets. Whether it can replicate the ₹999 magic at ₹5,000 is the defining challenge of its next chapter.`
  }
]

const PULL_QUOTE = {
  text: "We didn't want to make a product. We wanted to build a brand that every Indian youth could be proud of — made in India, priced for India.",
  by: "Aman Gupta, Co-Founder & CMO, boAt"
}

const LESSON = "Brand is a moat. boAt proved that an Indian startup could out-market Sony and JBL without out-spending them — by simply understanding its customer better."

const INVESTORS = ["Warburg Pincus", "Qualcomm Ventures", "Fireside Ventures", "Innoven Capital", "Navi Technologies"]

const FAQS = [
  { q: "Who are the founders of boAt?", a: "boAt was co-founded in 2016 by Aman Gupta (CMO) and Sameer Mehta (CEO) in New Delhi. Gupta, a CA and MBA from ISB Hyderabad, previously worked at KPMG and Citibank before joining Harman. Mehta comes from a trading background and handles supply chain and operations." },
  { q: "How much funding has boAt raised?", a: "boAt has raised over $171M in total funding. Warburg Pincus led a major growth round. Other investors include Qualcomm Ventures, Fireside Ventures, and Innoven Capital. The company achieved unicorn status with a valuation of approximately $1.3 billion." },
  { q: "What makes boAt India's top audio brand?", a: "boAt's formula: premium-looking design, sub-₹2,000 pricing, massive celebrity endorsements, and a D2C-first distribution strategy. It consistently ranks #1 in India's earwear market and was the world's 5th-largest wearable brand by shipments in 2022 (IDC data)." },
  { q: "When will boAt IPO happen?", a: "boAt filed its DRHP with SEBI in 2022 and has been working towards an IPO. The exact timing depends on market conditions. The company has been profitable and the IPO is expected to list on Indian stock exchanges." },
]

const RELATED = [
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "EV / CleanTech", val: "$1.3B" },
  { name: "Spinny", slug: "spinny-cars", cat: "Used Cars", val: "$1.8B" },
  { name: "Sarvam AI", slug: "sarvam-ai", cat: "Artificial Intelligence", val: "$1B+" },
]

export default function BoatPage() {
  const accent = "#E85D04"
  const accentBg = "#FFF7ED"
  const accentBorder = "#FED7AA"

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

      <h1 className="sr-only">boAt Founder Story — Aman Gupta & Sameer Mehta | India's Audio Unicorn | UpForge</h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "Consumer Tech", h: "/consumer-tech-startups" }, { n: "boAt", h: "/startup/boat" },
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
            UpForge · Startup Registry · Consumer Technology
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
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition No. 02</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Consumer Technology · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">New Delhi, India</span>
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
                style={{ background: accent }}>CONSUMER TECHNOLOGY</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 02 · March 2026</span>
            </div>
            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              India's youth didn't need cheaper JBL. They needed a brand that was entirely their own.
            </h2>
            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}>
              boAt is India's most successful consumer electronics brand story — built not in Silicon Valley
              but in the Delhi supply-chain ecosystem, priced for Tier 2 India, marketed like a streetwear
              label, and now valued at $1.3 billion. Aman Gupta and Sameer Mehta didn't disrupt technology.
              They disrupted perception.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "New Delhi, India", "Est. 2016", "India's No.1 Audio Brand"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img src="https://images.yourstory.com/cs/2/6d4bbe40d02011e9aa4b5178b9b9e6ab/Imagep7x3-1698133866739.jpg"
                alt="Aman Gupta, Co-Founder and CMO of boAt Lifestyle"
                className="w-full object-cover object-top" style={{ height: "min(300px,60vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Aman Gupta & Sameer Mehta</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founders · boAt Lifestyle</p>
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
                Watch · boAt Founder in Conversation
              </p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src="https://www.youtube.com/embed/l7pDuakyskI?si=ldN2OI7y4ciehvsq"
                  title="boAt — Aman Gupta on Building India's No.1 Audio Brand | UpForge"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy"
                  style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>
                Aman Gupta on building boAt and India's consumer brand revolution — UpForge Featured Interview
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
                <img src="https://images.yourstory.com/cs/2/6d4bbe40d02011e9aa4b5178b9b9e6ab/Imagep7x3-1698133866739.jpg"
                  alt="Aman Gupta, Co-Founder and CMO of boAt — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top" loading="eager" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Aman Gupta</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founder & CMO · boAt Lifestyle</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI" target="_blank" rel="noopener noreferrer"
                  className="block relative" aria-label="Watch boAt founder interview on YouTube">
                  <img src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg"
                    alt="boAt — Aman Gupta founder interview"
                    className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Aman Gupta on boAt's brand-first strategy</p>
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
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More Consumer Startups on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Consumer Tech Startups India", h: "/consumer-tech-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "boAt vs Noise Comparison", h: "/consumer-tech/boat-vs-noise" },
              { l: "D2C Brands India 2026", h: "/d2c-brands-india" },
              { l: "Made in India Startups", h: "/made-in-india-startups" },
              { l: "Shark Tank India Startups", h: "/shark-tank-india-startups" },
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
            * Data sourced from public filings, Tracxn, Inc42, Forbes India, and boAt press releases as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Consumer Tech Startups", h: "/consumer-tech-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Spinny Profile", h: "/startup/spinny-cars" },
                { l: "Sarvam AI Profile", h: "/startup/sarvam-ai" },
                { l: "Blue Energy Motors", h: "/startup/blue-energy-motors" },
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
