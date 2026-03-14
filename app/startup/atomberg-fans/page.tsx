"use client"

// app/startup/atomberg-fans/page.tsx
// UpForge — Atomberg Technologies · Manoj Meena & Sibabrata Das Founder Chronicle
// SEO: FAQPage ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.
// SEO: mainEntity is a proper JSON array [].

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/atomberg-fans#article",
      "headline": "Atomberg — How Manoj Meena & Sibabrata Das Revolutionised India's Ceiling Fan From an IIT Bombay Lab",
      "description": "Atomberg Technologies founder story — IIT Bombay graduates Manoj Meena and Sibabrata Das spent four years failing before inventing India's first BLDC smart fan. ₹1,000 crore revenue. $119M raised. IPO planned 2026. India's most energy-efficient home appliance brand.",
      "url": "https://upforge.in/startup/atomberg-fans",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-atomberg-fans.webp",
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
      "about": [
        {
          "@type": "Person",
          "name": "Manoj Meena",
          "jobTitle": "Co-Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Atomberg Technologies" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Bombay" },
          "sameAs": [
            "https://www.linkedin.com/company/atomberg-technologies-private-limited/"
          ]
        },
        {
          "@type": "Person",
          "name": "Sibabrata Das",
          "jobTitle": "Co-Founder & COO",
          "worksFor": { "@type": "Organization", "name": "Atomberg Technologies" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Bombay" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Atomberg Technologies",
        "url": "https://atomberg.com",
        "foundingDate": "2012",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Mumbai",
          "addressRegion": "Maharashtra",
          "addressCountry": "IN"
        },
        "description": "Atomberg Technologies is India's leading energy-efficient consumer appliances brand, famous for pioneering BLDC motor technology in ceiling fans. The company sells fans, mixer grinders, cold press juicers, water purifiers, and smart locks — all built around proprietary motor technology.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 832 },
        "sameAs": [
          "https://atomberg.com",
          "https://www.linkedin.com/company/atomberg-technologies-private-limited/",
          "https://twitter.com/atomberg_tech"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Consumer Tech Startups India", "item": "https://upforge.in/consumer-tech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Atomberg Technologies", "item": "https://upforge.in/startup/atomberg-fans" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Atomberg Technologies?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atomberg Technologies was founded in 2012 by Manoj Meena (Co-Founder & CEO) and Sibabrata Das (Co-Founder & COO), both graduates of IIT Bombay. Manoj grew up in Dausa, Rajasthan, in a village with only 1–2 hours of daily electricity — a childhood that shaped his obsession with energy efficiency. The company was incubated at SINE (Society for Innovation and Entrepreneurship) at IIT Bombay."
          }
        },
        {
          "@type": "Question",
          "name": "What is a BLDC fan and how does Atomberg's fan save energy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BLDC stands for Brushless Direct Current motor. Traditional ceiling fans use induction motors that consume 70–75 watts. Atomberg's BLDC fans consume only 28–32 watts — a 60–65% energy saving. A typical Indian household running a fan 15 hours a day saves approximately 200–250 units of electricity per year per fan. BLDC fans also run 3x longer on an inverter during power cuts, and are more resistant to voltage fluctuations."
          }
        },
        {
          "@type": "Question",
          "name": "How much funding has Atomberg raised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atomberg has raised $119 million across 9 rounds. Its largest round was an $86 million Series C in 2023 led by Temasek and Steadview Capital, with Trifecta Capital, Jungle Ventures, and Inflexor Ventures participating. In December 2025, the company raised a further $24 million in a Series C extension led by Temasek and A91 Partners. Earlier investors include Parampara Capital and Jungle Ventures."
          }
        },
        {
          "@type": "Question",
          "name": "Is Atomberg planning an IPO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Atomberg Technologies is planning an IPO targeted for the first quarter of FY2026–27 (April–June 2026) that aims to raise approximately ₹2,000 crore (~$200 million). Investment banks Avendus Capital and IIFL are expected to manage the public issue. The IPO will include a mix of fresh share issuance and secondary sale by existing investors."
          }
        },
        {
          "@type": "Question",
          "name": "What are Atomberg's revenues and financials?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In FY2025, Atomberg reported ₹958.4 crore in operating revenue and surpassed ₹1,000 crore in total revenue — a milestone confirmed by co-founder Sibabrata Das. Revenue grew 31.5% from ₹796.9 crore in FY24, and net losses narrowed sharply from ₹199 crore to ₹117.4 crore. The company has 832 employees and 2,000+ authorised dealers across India."
          }
        },
        {
          "@type": "Question",
          "name": "What products does Atomberg sell beyond fans?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Atomberg has expanded beyond ceiling fans into mixer grinders (using BLDC motors for quieter, more efficient grinding), cold press juicers, water purifiers (Intellon — India's first adaptive water purifier), smart door locks, and pedestal, table, wall, and exhaust fans. All products are built around the company's core competency in BLDC motor technology and intelligent electronics."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Revenue (FY25)", v: "₹1,000Cr+" },
  { l: "Total Funding", v: "$119M" },
  { l: "Founded", v: "2012" },
  { l: "HQ", v: "Mumbai, MH" },
  { l: "Employees", v: "832" },
  { l: "IPO Target", v: "FY2026" },
]

const TIMELINE = [
  {
    year: "2012",
    event: "Manoj Meena incubates Atomberg at SINE, IIT Bombay. Sibabrata Das — after two failed startups — joins as co-founder. The team begins doing tech consulting for DRDO, BARC, and IITs to survive, building expertise in motor control systems.",
  },
  {
    year: "2012–14",
    event: "Three more ideas fail. Neck-deep in debt, advised by mentors to quit. Manoj and Sibabrata stay. They study industrial motors and discover that BLDC technology can make ceiling fans 60–65% more energy-efficient — a 50-year-old problem no one had solved.",
  },
  {
    year: "Apr 2015",
    event: "After 10–15 prototypes, the Gorilla Efficio BLDC fan is ready. 1,500 pre-orders validate product-market fit. Atomberg raises ₹1 crore angel funding. A production facility is set up at Navi Mumbai.",
  },
  {
    year: "2016–18",
    event: "B2B strategy validates technology in harsh environments — ceramic factories, textile plants. Case studies prove energy savings. Company pivots to consumer market. Revenue breaks ₹1 crore per month from e-commerce.",
  },
  {
    year: "2019–21",
    event: "Smart IoT-compatible fans launched. WWF and UNIDO awards won. National Entrepreneurship Award from Government of India. Highest-rated fans on Amazon and Flipkart. Customers include Reliance, Infosys, Tata, IIT, IIIT-H.",
  },
  {
    year: "2023",
    event: "$86M Series C raised, led by Temasek and Steadview Capital. Revenue crosses ₹645 crore (FY23). Expansion into mixer grinders and smart locks. Company now produces 1 million+ fans per year across 60+ Indian cities.",
  },
  {
    year: "Dec 2025",
    event: "$24M Series C extension led by Temasek. Total funding: $119M. FY25 revenue ₹958.4 crore — ₹1,000 crore milestone crossed. Net losses narrow 41% to ₹117.4 crore. IPO planned for FY2026 to raise ~₹2,000 crore.",
  },
]

const COLS = [
  {
    h: "Two Hours of Electricity, a Lifetime of Obsession",
    b: `Manoj Meena grew up in Dausa, a small town in Rajasthan, where the electricity grid delivered just one or two hours of power each day. His farmer family ran the motor to pump water, charged appliances, got their work done — and then the town went dark. That childhood didn't make Manoj pessimistic. It made him precise. Every watt of power was worth something. Waste was not an option.\n\nAfter graduating from IIT Bombay with a dual degree in Electrical Engineering, Manoj channelled that precision into robotics, algorithms, and motor control systems. He started Atomberg in 2012 at IIT Bombay's SINE incubator — not with a fully-formed idea, but with a refusal to accept that ceiling fans in 2012 consumed the same amount of power they did in 1965.\n\nSibabrata Das, his eventual co-founder, had his own story of persistence. After IIT Bombay, he tried silk export from Assam to Dubai, then an online cosmetics marketplace. Both failed. "The world looked at them as if they were failures," wrote one account. "Their mentors, friends and seniors advised them to quit." They didn't.`,
  },
  {
    h: "Four Years, Four Failures, Then the Fan That Clicked",
    b: `From 2012 to 2015, Atomberg tried and failed with multiple ideas — a vehicle tracking system, consulting projects, industrial automation. The consulting work kept them alive but never built a company. What it built was something more valuable: deep expertise in motor control, power electronics, and embedded systems.\n\nIn 2014, Manoj and Sibabrata put that knowledge to a new question: why do ceiling fans still consume 70–75 watts when BLDC motor technology existed that could do the same job on 28 watts? The answer wasn't a technical gap. It was a commercial one. Nobody had bothered.\n\nAfter 10–15 prototypes, they launched the Gorilla Efficio — India's first BLDC motor ceiling fan — in April 2015. Within weeks, 1,500 pre-orders arrived. Manoj Meena, who had spent four years accumulating debt while being told to quit, had his first win. "Armed with this win, his first in 4 years, a buoyant Manoj went to meet potential investors." The investors still said no. The founders self-funded the first manufacturing unit in Navi Mumbai anyway.`,
  },
  {
    h: "₹1,000 Crore and the Road to IPO",
    b: `Atomberg's go-to-market was unusual for a consumer brand: it started in B2B. Ceramic factories — with their dust, heat, voltage fluctuations, and 24/7 operations — became the proving ground. If a BLDC fan could survive there and deliver measurable savings, it would generate the case studies needed to build consumer trust. It did. The company then pivoted to consumers — first online, then offline.\n\nToday, Atomberg sells 1 million+ fans per year. Its products are the highest-rated ceiling fans on Amazon and Flipkart. It has 2,000+ authorised dealers, 3,000+ daily service transactions, and 99% pin code coverage across India. Revenue reached ₹958.4 crore in FY25 and crossed ₹1,000 crore — a milestone Sibabrata Das announced on LinkedIn.\n\nBeyond fans, Atomberg has expanded into mixer grinders (BLDC motors, 40% quieter than conventional), smart locks, cold press juicers, and the Intellon — India's first adaptive water purifier. A $119M total funding journey culminated in December 2025 with a $24M extension. The IPO — targeting ~₹2,000 crore — is planned for FY2026. The kid from Dausa who grew up with two hours of electricity is building India's most energy-efficient home.`,
  },
]

const PULL_QUOTE = {
  text: "Atomberg is an engineering-led product-first company focused on solving latent consumer problems. Our proprietary tech stack is at the core of every product.",
  by: "Manoj Meena, Co-Founder & CEO, Atomberg Technologies",
}

const LESSON =
  "The most durable consumer brands are built on genuine technical moats, not marketing budgets. Atomberg's BLDC fan wasn't a design refresh — it was a 60% energy reduction that pays for itself. When your product genuinely performs, distribution, loyalty, and IPO readiness follow naturally."

const INVESTORS = [
  "Temasek (Lead, Series C & Extension)",
  "Steadview Capital",
  "A91 Partners",
  "Trifecta Capital",
  "Jungle Ventures",
  "Inflexor Ventures",
  "Parampara Capital",
  "Aarti Industries (Seed, Promoter Family)",
]

const FAQS = [
  {
    q: "Who are the founders of Atomberg and what is their background?",
    a: "Atomberg was co-founded in 2012 by Manoj Meena (CEO) and Sibabrata Das (COO), both IIT Bombay graduates. Manoj grew up in Dausa, Rajasthan, with only 1–2 hours of daily electricity — which shaped his mission of energy efficiency. Both founders had multiple failed ventures before discovering the BLDC fan opportunity, and were incubated at SINE, IIT Bombay.",
  },
  {
    q: "How is Atomberg's BLDC fan different from regular fans?",
    a: "Atomberg's BLDC (Brushless DC) fans consume 28 watts versus 70–75 watts for conventional fans — a 60–65% energy reduction. They run 3x longer on inverter backup during power cuts, are remote and IoT-compatible, have no carbon brushes to wear out, and are significantly quieter. A household can save 200–250 electrical units per fan per year, often recovering the price premium within 12–18 months.",
  },
  {
    q: "Is Atomberg profitable?",
    a: "Atomberg remains loss-making but is rapidly narrowing losses. Net loss fell 41% from ₹199 crore in FY24 to ₹117.4 crore in FY25, on revenue of ₹958.4 crore. EBITDA margin improved to -6.62%. The company is on a clear path to profitability as scale increases and marketing spend efficiency improves post-IPO.",
  },
  {
    q: "What is Atomberg's IPO plan?",
    a: "Atomberg is targeting an IPO in Q1 FY2026–27 (April–June 2026) aiming to raise approximately ₹2,000 crore (~$200 million). Avendus Capital and IIFL are expected to manage the issue. The offering will include a mix of fresh share issuance and secondary sale by existing investors including Temasek and Steadview Capital.",
  },
]

const RELATED = [
  { name: "Atlan", slug: "atlan-data", cat: "SaaS / Data Intelligence", val: "$750M" },
  { name: "Alt Mobility", slug: "alt-mobility", cat: "EV Leasing", val: "$17.3M" },
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "Electric Vehicles", val: "$1.3B" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AtombergFansPage() {
  const accent = "#d97706"
  const accentDark = "#b45309"
  const accentBg = "#fffbeb"
  const accentBorder = "#fde68a"

  useEffect(() => {
    const existing = document.getElementById("page-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "page-jsonld"
      s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(s)
    }
    return () => {
      document.getElementById("page-jsonld")?.remove()
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3EFE5",
        fontFamily: "'Georgia','Times New Roman',serif",
      }}
    >
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
        Atomberg Technologies Founder Story — Manoj Meena & Sibabrata Das | India's BLDC Fan Revolution | ₹1,000 Crore Revenue | IPO 2026 | UpForge
      </h1>

      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{
          background: "#EDE9DF",
          borderBottom: "1px solid #D8D2C4",
          fontFamily: "system-ui,sans-serif",
        }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" },
            { n: "Startup Registry", h: "/startup" },
            { n: "Consumer Tech Startups", h: "/consumer-tech-startups" },
            { n: "Atomberg Technologies", h: "/startup/atomberg-fans" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <Link href={b.h} className="hover:text-[#1A1208] transition-colors">
                  {b.n}
                </Link>
              ) : (
                <span className="text-[#1A1208] font-semibold">{b.n}</span>
              )}
              {i < arr.length - 1 && (
                <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div
          className="text-center px-4 pt-3 pb-6"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <p
            className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Startup Registry · Consumer Tech
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
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
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">
            Edition · Consumer Tech
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            D2C / Hardware · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Mumbai, Maharashtra</span>
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
                CONSUMER TECH / D2C
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              He grew up with two hours of electricity a day.{" "}
              <em style={{ color: accent }}>
                Now his fans save India billions in energy bills.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Manoj Meena and Sibabrata Das spent four years failing at IIT Bombay's
              incubator, drowning in debt, and refusing to quit — before they asked a question
              nobody in the Indian appliances industry had bothered with: why does a ceiling fan
              still use the same electricity it did in 1965? The answer became Atomberg.
              ₹1,000 crore in revenue. $119M raised. India's No. 1 BLDC fan brand. IPO 2026.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Mumbai, Maharashtra",
                "Est. 2012",
                "India's BLDC Pioneer",
              ].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && (
                    <span className="text-[#C8C2B4] text-[10px]">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden mb-8">
              <img
                src="/Upforge-atomberg-fans.webp"
                alt="Manoj Meena and Sibabrata Das, Co-Founders of Atomberg Technologies — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Manoj Meena & Sibabrata Das
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founders · Atomberg Technologies
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
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${
                        ci === 0 && pi === 0 ? "dropcap" : ""
                      }`}
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
              style={{
                borderTop: `3px double ${accent}`,
                borderBottom: "1px solid #C8C2B4",
              }}
            >
              <span
                style={{ display: "block", color: accentDark, fontSize: 24, marginBottom: 10 }}
              >
                ❝
              </span>
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
                Company Timeline
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
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">
                        {t.event}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata (schema is in JSON-LD) */}
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

              {/* Founder image */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/Upforge-atomberg-fans.webp"
                  alt="Manoj Meena and Sibabrata Das, Co-Founders of Atomberg Technologies — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{
                    background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)",
                  }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>
                    Manoj Meena & Sibabrata Das
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founders · Atomberg Technologies
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://atomberg.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Atomberg official website"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={accent}
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      atomberg.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/atomberg-technologies-private-limited/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Atomberg Technologies on LinkedIn"
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
                      LinkedIn — Atomberg
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
                    By the Numbers
                  </p>
                </div>
                <dl
                  className="grid grid-cols-2 divide-x divide-y"
                  style={{ borderColor: "#D8D2C4" }}
                >
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
                        style={{ fontSize: "1.25rem" }}
                      >
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
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
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
              </div>

              {/* Key Investors */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Key Investors
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
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
                      {inv}
                    </p>
                  ))}
                </div>
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
                  <Link
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
                  </Link>
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
            Explore More on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Consumer Tech Startups India", h: "/consumer-tech-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "D2C Startups India", h: "/d2c-startups" },
              { l: "IIT Bombay Startups", h: "/iit-startups" },
              { l: "Atomberg vs Havells vs Crompton", h: "/consumer-tech/bldc-fan-comparison" },
              { l: "EV Startups India", h: "/ev-startups-india" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{
                  border: "1px solid #D8D2C4",
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
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
              <p
                className="pf font-bold text-[#1A1208] mb-2"
                style={{ fontSize: "1.2rem" }}
              >
                Building India's next unicorn? Get verified on UpForge.
              </p>
              <p
                className="text-[12px] text-[#6B5C40]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
                aria-label="List your Indian startup on UpForge for free"
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Data sourced from Tracxn, Avendus Capital press releases, Inc42, Startuppedia,
            Deccan Founders, and Atomberg Technologies public filings as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
            Funding figures and revenue are approximate and reflect latest available public data.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Consumer Tech Startups", h: "/consumer-tech-startups" },
                { l: "D2C Startups India", h: "/d2c-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Atlan Profile", h: "/startup/atlan-data" },
                { l: "Submit Startup", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
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
