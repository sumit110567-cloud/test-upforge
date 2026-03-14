"use client"

// app/startup/ather-energy-ev/page.tsx
// UpForge — Ather Energy · Tarun Mehta & Swapnil Jain Founder Chronicle
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
      "@id": "https://upforge.in/startup/ather-energy-ev#article",
      "headline": "Ather Energy — How Tarun Mehta & Swapnil Jain Built India's Smartest Electric Scooter From an IIT Madras Lab",
      "description": "Ather Energy founder story — IIT Madras graduates Tarun Mehta and Swapnil Jain disassembled a scooter in a college lab in 2013 and set out to build India's most intelligent electric vehicle. $502M raised. Listed on NSE/BSE in May 2025. 2,600+ Ather Grid charging points. Hero MotoCorp's most important bet.",
      "url": "https://upforge.in/startup/ather-energy-ev",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-ather-energy-ev.webp",
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
          "name": "Tarun Mehta",
          "jobTitle": "Co-Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Ather Energy" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Madras" },
          "sameAs": ["https://www.linkedin.com/company/ather-energy/"]
        },
        {
          "@type": "Person",
          "name": "Swapnil Jain",
          "jobTitle": "Co-Founder & CTO",
          "worksFor": { "@type": "Organization", "name": "Ather Energy" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Madras" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Ather Energy",
        "url": "https://www.atherenergy.com",
        "foundingDate": "2013",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "description": "Ather Energy is an Indian electric two-wheeler manufacturer headquartered in Bengaluru. It designs, develops and manufactures smart electric scooters — the Ather 450X, 450S, and Rizta — alongside Ather Grid, India's largest two-wheeler EV charging network with 2,600+ fast chargers across 300+ cities.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 2500 },
        "sameAs": [
          "https://www.atherenergy.com",
          "https://www.linkedin.com/company/ather-energy/",
          "https://twitter.com/atherenergy",
          "https://en.wikipedia.org/wiki/Ather_Energy"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "EV Startups India", "item": "https://upforge.in/ev-startups-india" },
        { "@type": "ListItem", "position": 4, "name": "Ather Energy", "item": "https://upforge.in/startup/ather-energy-ev" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Ather Energy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ather Energy was co-founded in 2013 by Tarun Mehta (CEO) and Swapnil Jain (CTO), both IIT Madras alumni who completed dual degrees in Engineering Design in the 2012 batch. Mehta interned at Mercedes-Benz and briefly worked at Ashok Leyland before founding Ather. Jain interned at General Motors and BHEL. Both began working on Ather at the IIT Madras Research Park incubator."
          }
        },
        {
          "@type": "Question",
          "name": "What is Ather Grid?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ather Grid is Ather Energy's proprietary fast-charging network — India's largest two-wheeler EV charging infrastructure with over 2,600 fast chargers across 300+ cities as of 2025. Ather Grid charges Ather scooters at 1 km per minute using DC fast charging. Charging points also have a standard 3-pin AC socket compatible with other EV brands. Ather Grid access is often free for Ather owners."
          }
        },
        {
          "@type": "Question",
          "name": "How much funding has Ather Energy raised?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ather Energy has raised $502 million in total across 19 rounds. Key investors include Hero MotoCorp (38.19% stake, $300M+ invested), Tiger Global, NIIF ($71.4M Series E in August 2024), Caladium Investment (GIC affiliate), Sachin Bansal, and IIT Madras incubation cells. The company listed on NSE and BSE via an IPO in May 2025, raising ₹2,626 crore in fresh capital."
          }
        },
        {
          "@type": "Question",
          "name": "When did Ather Energy have its IPO?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ather Energy's IPO opened on April 28, 2025 and the company listed on NSE and BSE on May 6, 2025 — the second pure-play electric two-wheeler IPO in India after Ola Electric (August 2024). The IPO was priced at ₹304–321 per share, raised ₹2,981 crore in total, and valued Ather at approximately $1.3–1.4 billion. Founders Tarun Mehta and Swapnil Jain earned 15.2x returns on their nominal share cost through the OFS."
          }
        },
        {
          "@type": "Question",
          "name": "What makes the Ather 450X different from other electric scooters?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Ather 450X features a 7-inch capacitive touchscreen dashboard with Google Maps navigation, over-the-air (OTA) software updates, ride analytics, hill-hold assist, and a connected app ecosystem — features borrowed from Tesla and applied to urban Indian riding. It accelerates from 0 to 40 km/h in 3.3 seconds, is water-resistant, and receives new features via software updates every few months. It is widely regarded as India's most feature-rich electric scooter."
          }
        },
        {
          "@type": "Question",
          "name": "Is Ather Energy profitable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ather Energy is currently loss-making but showing improving financial trajectory. Net loss narrowed 26% to ₹577.9 crore in the nine months ended December 2024, from ₹776.4 crore in the prior year. Revenue grew 28.3% to ₹1,578.9 crore in the same period. The company is deploying IPO proceeds to build Factory 3.0 in Maharashtra and scale manufacturing capacity toward profitability."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Funding", v: "$502M" },
  { l: "IPO", v: "May 2025" },
  { l: "Founded", v: "2013" },
  { l: "HQ", v: "Bengaluru" },
  { l: "Ather Grid", v: "2,600+ pts" },
  { l: "Cities", v: "300+" },
]

const TIMELINE = [
  {
    year: "Oct 2013",
    event: "Tarun Mehta and Swapnil Jain found Ather Energy at IIT Madras Research Park. They disassemble a YO EXL scooter, study its primitive lead-acid internals, and decide they can build something vastly better.",
  },
  {
    year: "2014",
    event: "First funding: ₹45 lakh from Technology Development Board and IIT Madras. In December, Flipkart founders Sachin and Binny Bansal invest $1 million seed — one of their first angel bets post-Flipkart success.",
  },
  {
    year: "2015–16",
    event: "$12 million from Tiger Global. First scooter prototype, the S340, unveiled at Surge conference in Bengaluru with a touchscreen dashboard — a feature no electric scooter in India had attempted.",
  },
  {
    year: "2016–19",
    event: "Hero MotoCorp invests ₹180 crore (Series B, 2016), then ₹130 crore more (2018). Sachin Bansal leads $51M round in 2019. Ather 450 launched — India's fastest electric scooter at the time. MoU signed with Tamil Nadu for Hosur factory.",
  },
  {
    year: "2020–22",
    event: "Hosur manufacturing plant begins operations (January 2021) — capacity: 110,000 scooters/year. Ather 450X launched with capacitive touchscreen and OTA updates. Caladium Investment (GIC affiliate) leads $50M round in October 2022.",
  },
  {
    year: "2023–24",
    event: "Hero MotoCorp infuses ₹1,000 crore (September 2023). Ather 450S launched for mass-market segment. Rizta — a family scooter — launched in 2024. NIIF leads $71.4M Series E (August 2024). DRHP filed with SEBI (September 2024). Unicorn status achieved.",
  },
  {
    year: "May 2025",
    event: "Ather Energy IPO: ₹2,981 crore raised at ₹304–321/share. Listed on NSE & BSE on May 6, 2025 — India's second pure-play EV two-wheeler IPO. IIT Madras earns 200x+ returns. Founders earn 15.2x. Total funding: $502M.",
  },
]

const COLS = [
  {
    h: "The Scooter They Took Apart in a Lab",
    b: `In 2013, Tarun Mehta and Swapnil Jain were final-year students at IIT Madras's Research Park in Chennai, trying to work out what to build. Both had completed dual degrees in Engineering Design — a programme that trained you not just to make things, but to understand why the things that already existed were wrong.\n\nThey bought a YO EXL electric scooter and disassembled it. What they found confirmed what they suspected: the electric scooters of 2013 were not innovations. They were petrol scooters with a lead-acid battery bolted in, producing something underpowered, range-limited, mechanically unreliable, and insulting to ride. No intelligence. No character. No reason for an urban Indian to choose them over a 150cc Honda.\n\n"Electric vehicles were inevitable," Mehta would later say. But to become inevitable, they first had to become genuinely good. Ather Energy was the attempt to make that happen — built from day one on the belief that an electric scooter had to be smarter, faster, and better-connected than anything running on petrol.`,
  },
  {
    h: "Hero MotoCorp, the 450X and Vertical Integration",
    b: `The Hero MotoCorp investment in 2016 was Ather's defining inflection point. India's largest two-wheeler manufacturer — with 75 million vehicles on Indian roads — chose to back a three-year-old startup over any of the established players or its own internal EV programme. The implicit message: Ather was building something that Hero couldn't.\n\nThe Ather 450X, launched in 2020, delivered on that trust. It was India's first scooter with a capacitive 7-inch touchscreen, Google Maps navigation built into the dashboard, over-the-air software updates, ride history analytics, and a hill-hold feature that made Indian traffic genuinely liveable. It accelerated from 0 to 40 km/h in 3.3 seconds. It was IP67 water resistant. It received new features by OTA every few months — updates that most existing scooters would have needed a hardware recall to match.\n\nAther's vertical integration strategy was the enabler. The company designed its own battery packs, motor controllers, vehicle software, and Ather Grid charging network in-house. This made development slower and more expensive — but it made the experience impossible for fast followers to replicate without building the same capabilities from scratch.`,
  },
  {
    h: "Rizta, the IPO and What Comes Next",
    b: `Ather's strategic challenge through 2022–24 was clear: how to bring the intelligence and quality of the 450X to price points that reach beyond premium urban buyers. The Ather 450S and the Rizta — a family scooter with 34 litres of storage, traction control, and Ather's connected ecosystem — were the answers.\n\nThe Rizta proved particularly important. While the 450X dominated in Bengaluru and Hyderabad, the Rizta opened northern and western India — markets where family utility matters more than 0–40 acceleration. Sales crossed 1.26 lakh units in FY2024 and continued growing in FY2025.\n\nIn May 2025, Ather listed on NSE and BSE — India's second pure-play EV two-wheeler IPO. The ₹2,981 crore offering valued the company at approximately $1.3 billion. IIT Madras, which seeded the company with ₹25 lakh in 2014, booked 200x+ returns. Tiger Global's 732% return and Hero MotoCorp's 120% confirmed that the decade of patient, engineering-first building had been worth it. IPO proceeds are earmarked for Factory 3.0 in Maharashtra — the manufacturing scale needed to challenge Ola Electric and TVS for market leadership.`,
  },
]

const PULL_QUOTE = {
  text: "The biggest challenge and opportunity when you are building an electric vehicle in India is that there is no local ecosystem — not just vendors but also talent. We completely missed this when we started. That's why our timelines looked different. But we had to build it all ourselves, and that is exactly what makes us difficult to copy.",
  by: "Tarun Mehta, Co-Founder & CEO, Ather Energy",
}

const LESSON =
  "Vertical integration is painful and expensive — until it isn't. Ather owned hardware, software, and charging because shortcuts would have compromised the experience. That patience built a moat no fast-follower can easily replicate. The company that goes deepest into its own stack builds the most defensible product."

const INVESTORS = [
  "Hero MotoCorp (38.19% stake, ₹1,300Cr+)",
  "NIIF — National Investment & Infra Fund",
  "Caladium Investment Pte / GIC (Singapore)",
  "Tiger Global Management",
  "Sachin Bansal (Flipkart Co-Founder)",
  "Binny Bansal (Flipkart Co-Founder)",
  "IIT Madras Incubation Cell",
  "Technology Development Board (Govt. of India)",
]

const FAQS = [
  {
    q: "Who are Tarun Mehta and Swapnil Jain and what is their background?",
    a: "Both are IIT Madras graduates (2012 batch, Dual Degree in Engineering Design). Tarun Mehta is CEO and briefly worked at Ashok Leyland, interning at Mercedes-Benz during college. Swapnil Jain is CTO and interned at General Motors and BHEL. They started Ather at the IIT Madras Research Park incubator, where the institute also became an early investor.",
  },
  {
    q: "How does Ather Energy compare to Ola Electric and TVS iQube?",
    a: "Ather positions as the premium, software-first electric scooter with the deepest vertical integration. The 450X is typically priced higher than Ola S1 variants but competes on build quality, OTA updates, touchscreen interface, and brand trust earned over 10+ years of pure EV focus. TVS iQube targets a similar premium urban segment. Ather's Rizta now directly challenges the mainstream family scooter market. Ather is India's fourth-largest e2W maker by volume after Ola, TVS, and Bajaj Auto.",
  },
  {
    q: "What is Ather's Factory 3.0?",
    a: "Factory 3.0 is Ather Energy's new electric two-wheeler manufacturing plant being set up in Chhatrapati Sambhajinagar, Maharashtra, funded by IPO proceeds. It is designed to increase production capacity beyond the current Hosur, Tamil Nadu facility (110,000 scooters/year capacity) and reduce per-unit costs as Ather scales toward market leadership against Ola Electric and TVS.",
  },
  {
    q: "What returns did investors make on the Ather Energy IPO?",
    a: "IIT Madras incubation cells earned 200x+ returns on a ₹25 lakh investment made in 2014. Founders Tarun Mehta and Swapnil Jain earned 15.2x returns via OFS. Tiger Global earned 732% return (8.3x). Hero MotoCorp earned 120% return on ₹1,300 crore+ invested. Caladium Investment (GIC affiliate) also sold shares worth ₹192.7 crore in the OFS.",
  },
]

const RELATED = [
  { name: "Alt Mobility", slug: "alt-mobility", cat: "EV Leasing", val: "$17.3M" },
  { name: "Atomberg Technologies", slug: "atomberg-fans", cat: "Consumer Tech", val: "₹1,000Cr" },
  { name: "Atlan", slug: "atlan-data", cat: "SaaS / Data AI", val: "$750M" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function AtherEnergyPage() {
  const accent = "#7c3aed"
  const accentDark = "#6d28d9"
  const accentBg = "#f5f3ff"
  const accentBorder = "#ddd6fe"

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
        Ather Energy Founder Story — Tarun Mehta & Swapnil Jain | India's Smart Electric Scooter | IPO May 2025 | $502M Raised | UpForge
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
            { n: "EV Startups India", h: "/ev-startups-india" },
            { n: "Ather Energy", h: "/startup/ather-energy-ev" },
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
            UpForge · Startup Registry · Electric Vehicles
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
            Edition · EV
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Electric Vehicles · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
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
                ELECTRIC VEHICLES
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              Two IIT Madras graduates took apart a scooter in a lab.{" "}
              <em style={{ color: accent }}>
                What they put back together changed India's EV future.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Tarun Mehta and Swapnil Jain didn't enter the EV market — they built it.
              From a touchscreen that no Indian scooter had ever attempted, to 2,600 charging
              points across 300 cities, to India's second EV two-wheeler IPO in May 2025.
              Ather Energy is the story of what happens when engineers refuse to accept
              that a product category is broken beyond repair.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Bengaluru, Karnataka",
                "Est. 2013",
                "India's Smart EV Pioneer",
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
                src="/Upforge-ather-energy-ev.webp"
                alt="Tarun Mehta and Swapnil Jain, Co-Founders of Ather Energy — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Tarun Mehta & Swapnil Jain
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founders · Ather Energy
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

            {/* FAQ — visual only, NO microdata */}
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
                  src="/Upforge-ather-energy-ev.webp"
                  alt="Tarun Mehta and Swapnil Jain, Co-Founders of Ather Energy — UpForge Founder Chronicle"
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
                    Tarun Mehta & Swapnil Jain
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founders · Ather Energy
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.atherenergy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Ather Energy official website"
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
                      atherenergy.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/ather-energy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Ather Energy on LinkedIn"
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
                      LinkedIn — Ather Energy
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
            Explore More EV Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "EV Startups India 2026", h: "/ev-startups-india" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Ather vs Ola Electric", h: "/ev-startups/ather-vs-ola-electric" },
              { l: "IIT Madras Startups", h: "/iit-startups" },
              { l: "Alt Mobility Profile", h: "/startup/alt-mobility" },
              { l: "Electric Scooter India Guide", h: "/electric-scooter-india" },
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
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building India's next unicorn? Get verified on UpForge.
              </p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
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
            * Data sourced from Wikipedia, Inc42, Tracxn, IndianStartupNews, StockGro, SEBI DRHP
            filings, and Ather Energy press releases as of March 2026. UpForge is an independent
            registry — no paid placements, no sponsored rankings. Funding figures, shareholding
            percentages, and valuations reflect latest available public data including DRHP filings.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "EV Startups India", h: "/ev-startups-india" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Alt Mobility Profile", h: "/startup/alt-mobility" },
                { l: "Atomberg Profile", h: "/startup/atomberg-fans" },
                { l: "Agnikul Cosmos Profile", h: "/startup/agnikul-cosmos" },
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
