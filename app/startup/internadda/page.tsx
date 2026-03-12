// app/startup/internadda/page.tsx
// UpForge — InternAdda · Lucky Tiwari Founder Chronicle

import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ── SEO Metadata (server-side, proper canonical with www) ──
export const metadata: Metadata = {
  title: "Lucky Tiwari — InternAdda Founder | India's Student Career Platform | UpForge",
  description:
    "InternAdda was founded by Lucky Tiwari to make internships and career opportunities accessible to every Indian student — from IITs to Tier-3 colleges. Verified on UpForge.",
  alternates: {
    canonical: "https://www.upforge.in/startup/internadda",
  },
  openGraph: {
    title: "Lucky Tiwari — InternAdda Founder | UpForge",
    description:
      "InternAdda connects Indian students with internships and startup jobs. Founded by Lucky Tiwari. Verified on UpForge.",
    url: "https://www.upforge.in/startup/internadda",
    siteName: "UpForge",
    images: [{ url: "https://www.upforge.in/luckyinternadda.jpg", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  robots: { index: true, follow: true },
}

// ── Structured Data: Article + BreadcrumbList ONLY (no FAQPage) ──
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.upforge.in/startup/internadda#article",
      "headline": "InternAdda — Lucky Tiwari Founder Story on UpForge",
      "url": "https://www.upforge.in/startup/internadda",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://www.upforge.in",
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person",
        "name": "Lucky Tiwari",
        "jobTitle": "Founder",
        "worksFor": { "@type": "Organization", "name": "InternAdda" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home",            "item": "https://www.upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry","item": "https://www.upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Edtech / Career", "item": "https://www.upforge.in/edtech-startups" },
        { "@type": "ListItem", "position": 4, "name": "InternAdda",      "item": "https://www.upforge.in/startup/internadda" },
      ],
    },
  ],
}

const accent       = "#2563EB"
const accentBg     = "#EFF6FF"
const accentBorder = "#93C5FD"

const STATS = [
  { l: "Platform", v: "InternAdda" },
  { l: "Founded",  v: "2024"       },
  { l: "Funding",  v: "Bootstrapped" },
  { l: "Focus",    v: "Students"   },
  { l: "Stage",    v: "Early"      },
  { l: "Model",    v: "Career Platform" },
]

const TIMELINE = [
  { year: "2020–2023", event: "Lucky Tiwari observes the gap: millions of students struggle to find real internships. Information is scattered, access is unequal." },
  { year: "2024",      event: "InternAdda launched. Mission: one platform where students discover internships, startup roles, and career opportunities." },
  { year: "2024–2025", event: "Platform grows organically. Startup partnerships formed. Students from Tier-2 and Tier-3 cities find real opportunities." },
  { year: "2026",      event: "InternAdda expands its network. Vision: become the most trusted career discovery platform for India's 40M+ college students." },
]

const INVESTORS = [
  "Bootstrapped",
  "Angel network",
  "Founder-funded",
  "Community-backed",
  "Early partnerships",
  "Organic growth",
]

const COLS = [
  {
    h: "The Problem Students Face",
    b: `Every year, millions of Indian students graduate from colleges across the country — from IITs and IIMs down to district colleges in Tier-3 towns. The students at the top have networks, alumni connections, and placement cells that open doors. The majority don't.

For a first-generation college student in Gorakhpur or Nashik or Ranchi, finding a meaningful internship isn't just difficult — it's a maze with no map. Job boards are flooded with spam. LinkedIn rewards people who already have networks. Campus placement cells, where they exist, mostly serve the same set of large recruiters.

The gap between talent and opportunity is not a skills gap. It's an information gap — and Lucky Tiwari built InternAdda to close it.`,
  },
  {
    h: "Building InternAdda",
    b: `Lucky Tiwari launched InternAdda with a single, clear goal: create a platform where any student — regardless of college brand or city — can discover real internships, startup jobs, and early-career opportunities.

The platform focuses on three things that most career platforms get wrong: accessibility (works on low-bandwidth mobile), clarity (no spam listings, verified opportunities), and startup exposure (connecting students with India's emerging startup ecosystem, not just large corporates).

For students from non-metro colleges, InternAdda offers something invaluable: a way into the startup economy that doesn't require being at the right college or knowing the right people. Talent doesn't cluster — opportunity does. InternAdda is redistributing that opportunity.`,
  },
  {
    h: "Empowering the Next Generation",
    b: `The Indian startup ecosystem produces extraordinary wealth and innovation — but that economy is largely inaccessible to the students who will eventually power it. Most startup internships are filled through informal networks: WhatsApp groups, LinkedIn connections, accelerator cohort introductions.

InternAdda is building the infrastructure to change that. By creating a verified, accessible platform that connects startups directly with ambitious students from across India, Lucky Tiwari is working on what may be the most important talent pipeline problem in India's innovation economy.

The vision is simple and consequential: every student who discovers their first real opportunity through InternAdda is one more person contributing to India's next wave of startup founders, builders, and leaders. The platform is early. The problem is enormous. And Lucky Tiwari has the most important qualification for solving it: he lived it.`,
  },
]

const RELATED = [
  { name: "Nykaa", slug: "nykaa", cat: "D2C / BEAUTY",       val: "$2.5B"  },
  { name: "OYO",   slug: "oyo",   cat: "TRAVEL / HOSPITALITY",val: "$10B+" },
  { name: "Ola",   slug: "ola",   cat: "MOBILITY / EV",       val: "$7B+"  },
]

// Plain Q&A — renders as normal content, NOT FAQPage schema
const QA = [
  {
    q: "What is InternAdda?",
    a: "InternAdda is an Indian career platform founded by Lucky Tiwari in 2024 to connect college students with internships, startup roles, and early-career opportunities. The platform focuses on making career opportunities accessible to students from all colleges, including Tier-2 and Tier-3 institutions.",
  },
  {
    q: "Who founded InternAdda?",
    a: "InternAdda was founded by Lucky Tiwari. He built the platform after observing that millions of Indian students struggle to find meaningful internships and career opportunities, especially those without premium college brands or established professional networks.",
  },
  {
    q: "How does InternAdda help students?",
    a: "InternAdda provides a curated, accessible platform where students can discover verified internships and startup job opportunities. The platform is designed to be mobile-friendly and accessible to students from smaller cities, giving them access to the startup ecosystem that was previously only available through informal networks.",
  },
  {
    q: "Is InternAdda free for students?",
    a: "Yes, InternAdda is free for students. The platform's mission is to democratise access to career opportunities for all Indian students, regardless of their college or city.",
  },
]

export default function InternAddaPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }} role="main">

      {/* ── JSON-LD: Server-rendered in <head> via Next.js ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

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

      <h1 className="sr-only">Lucky Tiwari — InternAdda Founder Story | CAREER / EDTECH India | UpForge</h1>

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2" style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {[
            { n: "UpForge",          h: "/"                       },
            { n: "Startup Registry", h: "/startup"                },
            { n: "Edtech / Career",  h: "/edtech-startups"        },
            { n: "InternAdda",       h: "/startup/internadda"     },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1
                ? <Link href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</Link>
                : <span className="text-[#1A1208] font-semibold">{b.n}</span>
              }
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Startup Registry · Career / Edtech
          </p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>The Founder Chronicle</p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            India's independent startup registry — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span>
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4" style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest">Edition No. 08</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>CAREER / EDTECH · March 2026</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">India</span>
        </div>
      </header>

      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
          itemScope itemType="https://schema.org/Article"
        >
          <meta itemProp="headline" content="He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India." />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="author" content="UpForge Editorial" />
          <link itemProp="url" href="https://www.upforge.in/startup/internadda" />

          {/* ── MAIN ARTICLE ── */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white" style={{ background: accent }}>CAREER / EDTECH</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 08 · March 2026</span>
            </div>

            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India.
            </h2>

            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]" style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }} itemProp="description">
              InternAdda was born from a simple frustration: millions of Indian students graduate every year, but real career opportunities remain inaccessible, scattered, and dominated by networks the first-generation student doesn't have. Lucky Tiwari is building the platform that changes that.
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "India", "Est. 2024", "Building India's student-first career platform"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* Mobile image */}
            <div className="lg:hidden mb-8">
              <img
                src="/luckyinternadda.jpg"
                alt="Lucky Tiwari, Founder at InternAdda"
                className="w-full object-cover object-top"
                style={{ height: "min(280px,55vw)" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Lucky Tiwari</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder · InternAdda</p>
              </div>
            </div>

            {/* Article columns */}
            <div className="ncols" itemProp="articleBody">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5" style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}>
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p key={pi} className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`} style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}>
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-10 pt-6 pb-6 text-center" style={{ borderTop: `3px solid ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4" style={{ fontSize: "clamp(15px,2.1vw,21px)" }}>
                "Talent exists everywhere in India. Students just need the right opportunity to prove it."
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>
                — Lucky Tiwari, Founder, InternAdda
              </p>
            </div>

            {/* Video */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Watch · InternAdda in Conversation
              </p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe
                  src="https://www.youtube.com/embed/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ"
                  title="InternAdda — Lucky Tiwari Founder Interview | UpForge"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  style={{ border: "none" }}
                />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>
                Lucky Tiwari on building InternAdda — UpForge Featured Interview
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif", listStyle: "none", margin: 0, padding: 0 }}>
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

            {/* Takeaway */}
            <div className="mt-8 p-5" style={{ background: accentBg, border: `1.5px solid ${accentBorder}` }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>UpForge Takeaway</p>
              <p className="pf italic text-[#1A1208] leading-[1.7]" style={{ fontSize: "clamp(14px,1.8vw,17px)" }}>
                Sometimes the best startups are built by solving a problem you personally faced — because you understand the pain better than any investor ever will.
              </p>
            </div>

            {/* ── Q&A SECTION — plain content, NO FAQPage schema ── */}
            <section className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4" style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                About InternAdda
              </p>
              {QA.map((item, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: i === QA.length - 1 ? "none" : "1px solid #D8D2C4" }}>
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}>
                    {item.q}
                  </h3>
                  <p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </section>
          </article>

          {/* ── SIDEBAR ── */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">

              {/* Founder photo */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/luckyinternadda.jpg"
                  alt="Lucky Tiwari, InternAdda — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  itemProp="image"
                />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5" style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Lucky Tiwari</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Founder · InternAdda</p>
                </div>
              </div>

              {/* YouTube thumbnail */}
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href="https://youtu.be/l7pDuakyskI?si=zAxsfi7fsPWKKrrQ" target="_blank" rel="noopener noreferrer" className="block relative group" aria-label="Watch InternAdda founder interview on YouTube">
                  <img
                    src="https://img.youtube.com/vi/l7pDuakyskI/maxresdefault.jpg"
                    alt="Lucky Tiwari — InternAdda founder interview"
                    className="w-full object-cover"
                    style={{ height: 140, border: `1px solid ${accentBorder}` }}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://img.youtube.com/vi/l7pDuakyskI/hqdefault.jpg" }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Lucky Tiwari on building InternAdda — UpForge Featured</p>
              </div>

              {/* Stats */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.1rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Lesson */}
              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  Sometimes the best startups are built by solving a problem you personally faced — because you understand the pain better than any investor ever will.
                </p>
              </div>

              {/* Investors */}
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

              {/* Related */}
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>Also Read on UpForge</p>
                {RELATED.map((r) => (
                  <Link key={r.slug} href={`/startup/${r.slug}`} className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity" style={{ borderBottom: "1px solid #EDE9DF" }}>
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

        {/* ── EXPLORE MORE ── */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Edtech Startups India",         h: "/edtech-startups"     },
              { l: "Student Career Platforms India", h: "/career-platforms"    },
              { l: "Internship Platforms India",     h: "/internship-platforms"},
              { l: "Startup Jobs India",             h: "/startup-jobs"        },
              { l: "Indian Startup Ecosystem",       h: "/startup"             },
              { l: "Startup Registry",               h: "/startup"             },
              { l: "CRED Profile",                   h: "/startup/cred"        },
              { l: "Submit Your Startup",            h: "/submit"              },
            ].map((lnk) => (
              <Link key={lnk.h + lnk.l} href={lnk.h} className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all" style={{ border: "1px solid #D8D2C4", background: "white" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>Building India's next unicorn? Get verified on UpForge.</p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>Free startup profiles. Independent verification. Indexed by Google.</p>
            </div>
            <div className="flex sm:justify-end">
              <Link href="/submit" className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90" style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            * Data sourced from public sources and press releases as of March 2026. UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Edtech Startups India",         h: "/edtech-startups"      },
                { l: "Student Career Platforms India", h: "/career-platforms"     },
                { l: "Internship Platforms India",     h: "/internship-platforms" },
                { l: "Startup Jobs India",             h: "/startup-jobs"         },
                { l: "Indian Startup Ecosystem",       h: "/startup"              },
                { l: "Startup Registry",               h: "/startup"              },
              ].map(lnk => (
                <li key={lnk.h + lnk.l}>
                  <Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
