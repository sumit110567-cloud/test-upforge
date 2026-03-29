"use client"

// app/startup/genie-skip-bins/page.tsx
// UpForge — Genie Skip Bins · Founder Chronicle
// SEO: Genie Skip Bins, Skip Bin Hire Australia, Waste Management, Bin Hire Melbourne Sydney Brisbane Perth
// Designed for maximum crawlability and indexing on Google Search.

import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/genie-skip-bins#article",
      "headline": "Genie Skip Bins — Reliable Skip Bin Hire Across Australia for Residential & Commercial Waste Management",
      "description": "The definitive Genie Skip Bins company profile. Australia's trusted skip bin hire service for residential and commercial waste removal across major cities including Melbourne, Sydney, Brisbane, and Perth.",
      "url": "https://upforge.in/startup/genie-skip-bins",
      "datePublished": "2026-03-25T00:00:00+05:30",
      "dateModified": "2026-03-25T00:00:00+05:30",
      "inLanguage": "en-AU",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-genie-skip-bins.webp",
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
      "about": {
        "@type": "Organization",
        "name": "Genie Skip Bins",
        "url": "https://genieskipbins.com.au",
        "foundingLocation": {
          "@type": "Place",
          "addressCountry": "AU"
        },
        "description": "Genie Skip Bins provides reliable skip bin hire services for waste management across major cities in Australia, catering to residential and commercial needs.",
        "areaServed": ["Melbourne", "Sydney", "Brisbane", "Perth", "Adelaide"],
        "sameAs": [
          "https://genieskipbins.com.au",
          "https://www.linkedin.com/company/genieskipbins/"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Waste Management", "item": "https://upforge.in/waste-management-startups" },
        { "@type": "ListItem", "position": 4, "name": "Genie Skip Bins", "item": "https://upforge.in/startup/genie-skip-bins" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas does Genie Skip Bins service?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genie Skip Bins services major cities across Australia including Melbourne, Sydney, Brisbane, Perth, and Adelaide, covering both metropolitan and surrounding suburban areas for residential and commercial clients."
          }
        },
        {
          "@type": "Question",
          "name": "What types of waste can Genie Skip Bins handle?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Genie Skip Bins facilitates removal of general household waste, construction and demolition debris, green waste, soil, concrete, mixed waste, and commercial rubbish — catering to a wide range of waste removal requirements."
          }
        },
        {
          "@type": "Question",
          "name": "How do I hire a skip bin from Genie Skip Bins?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can book a skip bin directly through the Genie Skip Bins website at genieskipbins.com.au. The platform lets you select bin size, location, hire duration, and waste type for a quick and transparent quote."
          }
        },
        {
          "@type": "Question",
          "name": "Does Genie Skip Bins cater to both residential and commercial clients?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Genie Skip Bins serves both homeowners undertaking renovations, cleanouts, or landscaping, as well as commercial and construction businesses requiring regular or one-off large-scale waste removal solutions."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Service Type", v: "Skip Hire" },
  { l: "Coverage", v: "5+ Cities" },
  { l: "Country", v: "Australia" },
  { l: "Clients", v: "Resi + Comm" },
  { l: "Booking", v: "Online" },
  { l: "Waste Types", v: "10+" },
]

const TIMELINE = [
  { year: "Founded", event: "Genie Skip Bins is established in Australia with a mission to simplify waste management for homeowners and businesses through reliable, flexible skip bin hire." },
  { year: "Early Growth", event: "The company expands its service footprint across major Australian cities, building a reputation for same-day and next-day delivery reliability." },
  { year: "Digital First", event: "Genie Skip Bins launches its streamlined online booking platform — genieskipbins.com.au — enabling instant quotes, size selection, and easy scheduling without phone calls." },
  { year: "Multi-City", event: "Coverage extends across Melbourne, Sydney, Brisbane, Perth, and Adelaide metropolitan areas, establishing Genie as a nationally recognised skip bin provider." },
  { year: "Commercial Scaling", event: "A dedicated commercial and construction waste division is formalised, serving builders, project managers, and facility operators with tailored bin hire solutions." },
  { year: "2026 & Beyond", event: "Genie Skip Bins continues to grow its operational footprint, adding more suburban coverage, new bin sizes, and environmentally responsible waste sorting and recycling programmes." },
]

const COLS = [
  {
    h: "Rethinking How Australia Removes Waste",
    b: `Australia generates millions of tonnes of waste every year. For decades, getting rid of it meant navigating confusing council rules, booking unreliable contractors, or making countless trips to the tip. Genie Skip Bins was built to change that.\n\nBy providing a simple, transparent online booking system, Genie puts the power of professional waste removal directly in the hands of homeowners and project managers. Whether it's clearing out a garage, demolishing a bathroom, or managing a full commercial building site, Genie delivers the right skip bin to the right place — on time, every time. The promise is straightforward: remove the friction from waste removal so Australians can focus on what they actually came to do.`
  },
  {
    h: "A Solution Built for Every Job Size",
    b: `Waste doesn't come in one size, and neither do Genie's skip bins. The company offers a comprehensive range of bin sizes — from compact 2m³ mini skips ideal for household cleanouts, through to large 12m³ and beyond for heavy construction and demolition projects. This flexibility is core to the Genie value proposition.\n\nResidential customers appreciate the no-fuss booking experience: select a suburb, pick a size, choose a hire period, and done. Commercial clients — builders, landscapers, project managers — benefit from volume arrangements and priority delivery windows. Genie's ability to service both markets without compromising on responsiveness is what sets it apart in a fragmented industry still dominated by local, phone-only operators.`
  },
  {
    h: "Serving Australia's Biggest Cities",
    b: `Scale in the skip bin industry is about logistics, not software. Genie Skip Bins has cracked the model by establishing strong operational presences in Australia's major metropolitan markets — Melbourne, Sydney, Brisbane, Perth, and Adelaide.\n\nThis multi-city reach means that whether a customer is renovating a terrace in Surry Hills, landscaping an acreage in Melbourne's outer east, or clearing a commercial tenancy in Brisbane's CBD, Genie can deliver. The company's focus on digital-first operations, transparent pricing, and consistent service has earned it strong word-of-mouth referrals and repeat business — the most powerful currency in the trade services sector.`
  }
]

const PULL_QUOTE = {
  text: "Waste management shouldn't be complicated. With the right skip bin, at the right price, delivered on time — we make clean-ups effortless for every Australian.",
  by: "Genie Skip Bins — Company Mission"
}

const LESSON = "Genie Skip Bins proves that even in traditional, fragmented industries, a digital-first approach and relentless focus on customer convenience can carve out a strong, scalable business. Clear pricing, wide coverage, and simple booking are a moat in trade services."

const SERVICE_CITIES = [
  "Melbourne, VIC",
  "Sydney, NSW",
  "Brisbane, QLD",
  "Perth, WA",
  "Adelaide, SA",
]

const WASTE_TYPES = [
  "General Household Waste",
  "Construction & Demolition Debris",
  "Green & Garden Waste",
  "Soil & Dirt",
  "Concrete & Bricks",
  "Mixed Commercial Waste",
  "Renovation Rubbish",
  "Office & Retail Clearouts",
]

const FAQS = [
  {
    q: "How quickly can Genie Skip Bins deliver?",
    a: "Genie Skip Bins offers fast turnaround, with same-day and next-day delivery available across most serviced areas. Exact availability depends on location and bin size. Book via genieskipbins.com.au to check your area."
  },
  {
    q: "What size skip bin do I need for a house renovation?",
    a: "For a standard bathroom or kitchen renovation, a 4m³ to 6m³ skip bin is typically sufficient. For whole-home renovations or larger construction projects, a 8m³ to 12m³ bin is recommended. Genie's website provides a helpful size guide."
  },
  {
    q: "Can I put any waste type in a Genie skip bin?",
    a: "Most general, green, and construction waste is accepted. Hazardous materials — including asbestos, chemicals, and tyres — are not permitted. Genie's booking process clearly outlines accepted waste types so you choose the right bin for your job."
  },
  {
    q: "Is Genie Skip Bins available for long-term commercial hire?",
    a: "Yes. Commercial clients including builders, property managers, and construction companies can arrange ongoing or scheduled hire. Contact Genie directly via genieskipbins.com.au for commercial account enquiries and volume pricing."
  },
]

const RELATED = [
  { name: "1300 Rubbish", slug: "1300-rubbish-au", cat: "Waste Removal", val: "National" },
  { name: "Cleanaway", slug: "cleanaway-australia", cat: "Waste Management", val: "ASX Listed" },
  { name: "JunkMD", slug: "junkmd-australia", cat: "Junk Removal", val: "Growing" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function GenieSkipBinsPage() {
  const accent = "#1a7a3c" // Genie Green
  const accentDark = "#145f2e"
  const accentBg = "#f0f7f2"
  const accentBorder = "#b6dfc5"

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
        Genie Skip Bins — Skip Bin Hire Australia | Residential & Commercial Waste Management | UpForge
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
            { n: "Waste Management", h: "/waste-management-startups" },
            { n: "Genie Skip Bins", h: "/startup/genie-skip-bins" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <a href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</a>
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
            UpForge · Business Registry · Waste Management · Australia
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
            The Business Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            Documenting Australia's essential service businesses — March 2026
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
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · Waste & Logistics</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Skip Bin Hire · Australia · 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Australia-Wide</span>
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
                WASTE MANAGEMENT / SKIP BIN HIRE
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              Clean, Simple, On Time: How Genie Skip Bins is Making{" "}
              <em style={{ color: accent }}>Waste Removal Effortless</em> Across Australia.
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Australians generate mountains of waste every year — from home renovations and 
              garden cleanouts to major commercial demolitions. Genie Skip Bins has built a 
              reputation for cutting through the complexity with a no-fuss, online-first skip bin 
              hire service operating across Melbourne, Sydney, Brisbane, Perth, and Adelaide. 
              One booking, the right bin, delivered on time — for every job, every size, every suburb.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Australia",
                "Residential & Commercial",
                "Est. Australia",
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
                src="/genie-skip-bins.jpg"
                alt="Genie Skip Bins — Reliable Skip Bin Hire Across Australia — UpForge Business Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://genieskipbins.com.au/assets/admin/images/blog/Can%20I%20Place%20a%20Skip%20Bin%20on%20the%20Street%20(2).png'; }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Genie Skip Bins</p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Skip Bin Hire · Australia-Wide
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
                Company Journey
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

            {/* Waste Types */}
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
                Accepted Waste Types
              </p>
              <div className="grid grid-cols-2 gap-2">
                {WASTE_TYPES.map((w, i) => (
                  <p
                    key={i}
                    className="flex items-center gap-2 text-[11.5px] text-[#2C2010]"
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
                    {w}
                  </p>
                ))}
              </div>
            </div>

            {/* FAQ */}
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

              {/* Company image */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/genie-skip-bins.jpg"
                  alt="Genie Skip Bins — Skip Bin Hire Australia — UpForge Business Chronicle"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Genie Skip Bins</p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Skip Bin Hire · Australia-Wide
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://genieskipbins.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Genie Skip Bins official website"
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
                      genieskipbins.com.au — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/genieskipbins/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Genie Skip Bins on LinkedIn"
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
                      LinkedIn — Genie Skip Bins
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
                    Genie Skip Bins At A Glance
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
                        style={{ fontSize: "1.1rem" }}
                      >
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Service Cities */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Service Cities
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {SERVICE_CITIES.map((city, i) => (
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
                      {city}
                    </p>
                  ))}
                </div>
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
                  The Takeaway
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
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
                  <a
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
                  </a>
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
            Explore More on UpForge & blog.upforge.in
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Skip Bin Size Guide", h: "https://blog.upforge.in/skip-bin-size-guide-australia" },
              { l: "Waste Management AU", h: "https://blog.upforge.in/waste-management-australia" },
              { l: "Home Renovation Tips", h: "https://blog.upforge.in/home-renovation-waste-tips" },
              { l: "Commercial Waste Guide", h: "https://blog.upforge.in/commercial-waste-removal-guide" },
              { l: "Top Trade Services AU", h: "https://blog.upforge.in/top-trade-services-australia" },
              { l: "Green Waste Disposal", h: "https://blog.upforge.in/green-waste-disposal-tips" },
              { l: "Startup Registry", h: "/startup" },
              { l: "Submit Your Business", h: "/submit" },
            ].map((lnk) => (
              <a
                key={lnk.h}
                href={lnk.h}
                target={lnk.h.startsWith("https://blog") ? "_blank" : undefined}
                rel={lnk.h.startsWith("https://blog") ? "noopener noreferrer" : undefined}
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
              </a>
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
                Running a waste or trade services business in Australia?
              </p>
              <p
                className="text-[12px] text-[#6B5C40]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                Get your business verified and indexed on UpForge — free, permanent, and Google-indexed.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <a
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
              >
                List Your Business — Free <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Information sourced from Genie Skip Bins public listings, company website (genieskipbins.com.au), 
            LinkedIn company profile, and publicly available business directories as of March 2026. 
            UpForge is an independent registry. No paid placements or sponsored rankings.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Waste Management Businesses", h: "/waste-management-startups" },
                { l: "Registry Home", h: "/startup" },
                { l: "Australian Businesses", h: "/australian-startups" },
                { l: "Trade Services", h: "/trade-services" },
                { l: "Blog — Waste Tips", h: "https://blog.upforge.in/waste-management-australia" },
                { l: "Submit Profile", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <a
                    href={lnk.h}
                    target={lnk.h.startsWith("https://blog") ? "_blank" : undefined}
                    rel={lnk.h.startsWith("https://blog") ? "noopener noreferrer" : undefined}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
