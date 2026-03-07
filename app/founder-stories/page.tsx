"use client"

// app/founder-stories/page.tsx
// THE FOUNDER CHRONICLE — broadsheet newspaper UI
// Images proxied via wsrv.nl (open CDN proxy, no hotlink blocks, HD output)

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"

// ─── IMAGE PROXY ──────────────────────────────────────────────────────────────
// wsrv.nl is a free image proxy/CDN that fetches any URL and serves it cleanly.
// It bypasses hotlink restrictions and outputs optimised JPEG at any size.
function proxyImg(url: string, width = 800): string {
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=${width}&output=jpg&q=90`
}

// ─── FOUNDER IMAGE COMPONENT ──────────────────────────────────────────────────
function FounderImg({
  src, alt, initials, accent,
  className = "", style = {}
}: {
  src: string; alt: string; initials: string; accent: string
  className?: string; style?: React.CSSProperties
}) {
  const [status, setStatus] = useState<"loading"|"ok"|"err">("loading")

  // Try proxied URL first, fall back to monogram
  const proxied = proxyImg(src, 800)

  return (
    <div className={`relative overflow-hidden bg-[#EAE6DC] ${className}`} style={style}>
      {status !== "err" && (
        <img
          src={proxied}
          alt={alt}
          onLoad={() => setStatus("ok")}
          onError={() => setStatus("err")}
          className="w-full h-full object-cover object-top transition-opacity duration-300"
          style={{ opacity: status === "ok" ? 1 : 0 }}
          loading="eager"
          decoding="async"
        />
      )}
      {/* Skeleton shimmer while loading */}
      {status === "loading" && (
        <div className="absolute inset-0 shimmer" />
      )}
      {/* Monogram fallback */}
      {status === "err" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          style={{ background: accent + "14" }}>
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-3xl font-black text-white"
            style={{ background: accent, fontFamily: "Georgia,serif" }}
          >
            {initials}
          </div>
          <p className="text-[9px] uppercase tracking-widest text-center px-4"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>
            {alt}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    no: "01", edition: "No. 01",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha &\nKaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru", context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
    // Source: Mint/TOI press coverage — proxied via wsrv.nl
    imgSrc: "https://static.toiimg.com/thumb/msid-106034544,width-1280,height-720,imgsize-100998,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    deck: "Aadit Palicha and Kaivalya Vohra built India's fastest unicorn by failing first, then solving the logistics math nobody else wanted to.",
    cols: [
      {
        h: "The Failed First Act",
        b: "In 2020, Palicha and Vohra were Stanford freshmen who flew back to India to build KiranaKart — a 45-minute grocery app. It failed in months. Most founders would have returned to California. These two stayed in Bengaluru, rented a room, and dissected every mistake with unusual discipline.\n\nThe pivot they arrived at was specific: dark stores placed within 1.5km of dense demand made 10-minute delivery a pure logistics equation, not a gimmick."
      },
      {
        h: "The $5.9B Math Problem",
        b: "Every competitor called it operationally insane. Aadit and Kaivalya called it math. Zepto launched in 2021. By August 2023, India had its first unicorn of the year — at $1.4B. The $350M Series H in 2025 brought the valuation to $5.9B.\n\nKaivalya Vohra, at 22, became India's youngest billionaire. Zepto now operates 350+ dark stores across 10 cities, fulfilling orders in under 10 minutes."
      },
      {
        h: "What the Story Really Is",
        b: "The Zepto story isn't about being young or lucky. It is about the discipline to treat failure as data. KiranaKart showed them what didn't work. Zepto was the answer once they knew the right question.\n\nIndia's quick commerce market crossed $3.3B in 2025. Zepto commands its second-largest share — earned not by being first, but by being most precise about what '10 minutes' actually requires behind the scenes."
      }
    ],
    pull: "We failed with KiranaKart in months. Most people would have gone back to Stanford. We stayed and figured out what we got wrong.",
    pullBy: "Aadit Palicha",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    stats: [
      { l: "Valuation", v: "$5.9B" },
      { l: "Founded", v: "2021" },
      { l: "Dark Stores", v: "350+" },
      { l: "Total Raised", v: "$2.5B+" },
    ],
  },
  {
    no: "02", edition: "No. 02",
    category: "EDTECH",
    name: "Alakh Pandey",
    nameShort: "Alakh Pandey",
    initials: "AP",
    company: "PhysicsWallah", slug: "physicswallah",
    role: "Founder & CEO",
    city: "Prayagraj, UP", context: "YouTube teacher turned unicorn CEO",
    valuation: "$2.8B", funding: "$700M", founded: "2014",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Alakh_Pandey_at_Startup_Mahakumbh_2024.jpg",
    accent: "#059669", accentBg: "#ECFDF5", accentBorder: "#A7F3D0",
    headline: "BYJU's charged ₹80,000 for what he taught for ₹2,000. That wasn't a mission — it was just obviously the right thing to do.",
    deck: "Alakh Pandey disrupted Indian edtech without a Harvard MBA or a term sheet — just a bedroom camera and an impossibly low price.",
    cols: [
      {
        h: "The Bedroom Studio",
        b: "In 2014, Alakh Pandey was preparing for engineering entrance exams in Prayagraj and teaching the same material to earn money. He set up a camera in his room — not a studio, just a room — and started filming Physics lessons.\n\nThe difference was palpable: he taught like he was talking to a friend, not performing for an institution. No script, no production budget. Just clarity and genuine care for the student sitting somewhere in UP."
      },
      {
        h: "The Price That Changed Everything",
        b: "By 2020, his YouTube channel had 5M subscribers. In 2021, he launched the PW app at ₹2,000/year — against BYJU's ₹80,000. Six million students enrolled within weeks. He raised $100M, hit unicorn status, and built the edtech story India had been waiting for — while BYJU's collapsed under its own weight.\n\nAlakh understood the real addressable market: not 20M rich students, but 350M students who need something they can actually pay for."
      },
      {
        h: "Profitable. By Design.",
        b: "PhysicsWallah remained profitable through its entire growth arc — a near-impossibility in a sector that burned billions on celebrity ads. By 2025, it served 10M+ learners across JEE, NEET, and UPSC prep — and listed via a ₹3,480 crore IPO in November 2025.\n\nAlakh grew up watching his parents manage tight budgets. He built his entire company around never making affordability the barrier. It is the only Indian edtech unicorn that is both affordable and profitable."
      }
    ],
    pull: "BYJU's charged ₹80,000 for what I teach for ₹2,000. That wasn't a mission statement. It was just obviously the right thing to do.",
    pullBy: "Alakh Pandey",
    lesson: "Affordability is not a positioning strategy. It can be the entire moat.",
    stats: [
      { l: "Valuation", v: "$2.8B" },
      { l: "Students", v: "10M+" },
      { l: "Annual Fee", v: "₹2,000" },
      { l: "Founded", v: "2014" },
    ],
  },
  {
    no: "03", edition: "No. 03",
    category: "FOODTECH",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "Zomato / Eternal", slug: "zomato",
    role: "Founder & CEO",
    city: "Delhi", context: "IIT Delhi → Bain → Foodiebay at 25",
    valuation: "$33B", funding: "$3.2B+", founded: "2008",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Deepinder_Goyal_at_Shark_Tank_India.jpg",
    accent: "#DC2626", accentBg: "#FFF1F2", accentBorder: "#FECDD3",
    headline: "#1 on Hurun India 2025. Zomato is worth ₹3.2 lakh crore. It started as scanned restaurant menus.",
    deck: "Deepinder Goyal tops India's self-made entrepreneur rankings. The Zomato story is 17 years of pivots, a brutal stock crash, and one very public bet on profitability.",
    cols: [
      {
        h: "Scanned Menus, 2008",
        b: "Deepinder Goyal was 25, consulting at Bain & Company, when he noticed colleagues spending long lunches passing printed restaurant menus. He scanned them, put them on a website, called it Foodiebay, and watched traffic arrive without advertising.\n\nHe quit Bain within months. Rebranded to Zomato in 2010 — a name that meant nothing but was clean, sticky, and available. What followed was a decade of relentless iteration: discovery, reviews, delivery, groceries, Blinkit quick commerce."
      },
      {
        h: "The Public Company Bet",
        b: "Zomato's 2021 IPO was the defining moment for Indian startup optimism. It listed at a premium — then fell 70% in 2022 as markets repriced every loss-making tech company globally. Deepinder didn't hedge. He doubled down: cut costs, killed zombie products, set a public profitability target.\n\nZomato posted its first quarterly profit in Q2 FY2024. By 2025, the parent was renamed Eternal and valued at ₹3.2 lakh crore — up 27% year-on-year. Hurun India placed Deepinder at No. 1."
      },
      {
        h: "17 Years. Still Reinventing.",
        b: "The Eternal of 2025 — profitable food delivery, Blinkit, District ticketing, LAT Aerospace — is unrecognisable from the Foodiebay of 2008. That is precisely the point.\n\nDeepinder's story is about adaptation above everything else. The companies that survive 17 years aren't the ones with the best original idea. They are the ones willing to admit when the original idea needs to change — and courageous enough to make the change publicly."
      }
    ],
    pull: "We have to keep reinventing Zomato. The product that got us here will not get us to where we need to go.",
    pullBy: "Deepinder Goyal",
    lesson: "The company that survives is rarely the one that started. It's the one that kept reinventing.",
    stats: [
      { l: "Mkt. Cap", v: "₹3.2L Cr" },
      { l: "Hurun 2025", v: "#1" },
      { l: "Founded", v: "2008" },
      { l: "Raised", v: "$3.2B+" },
    ],
  },
  {
    no: "04", edition: "No. 04",
    category: "FINTECH",
    name: "Nithin Kamath",
    nameShort: "Nithin Kamath",
    initials: "NK",
    company: "Zerodha", slug: "zerodha",
    role: "Founder & CEO",
    city: "Bengaluru", context: "Dropped out at 17 to trade. Never took VC.",
    valuation: "$8.2B", funding: "Fully bootstrapped", founded: "2010",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/92/Nithin_Kamath_-_Zerodha.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
    headline: "He dropped out at 17 to trade stocks. Never took a rupee of VC. Zerodha is worth $8.2 billion.",
    deck: "Nithin Kamath built India's largest stockbroker without a single outside investor, a celebrity ad, or a paid acquisition. Just a better product and fifteen years of compounding trust.",
    cols: [
      {
        h: "The Self-Taught Trader",
        b: "Nithin Kamath dropped out of college at 17 to learn stock markets by doing: putting real money in and watching what happened. He spent a decade becoming exceptionally good at trading — while working as a sub-broker and call centre employee to fund his positions.\n\nBy 2010, he had identified the structural problem in Indian broking: fees were opaque, interfaces were broken, and the entire system was designed to benefit brokers, not investors."
      },
      {
        h: "₹20 Flat. Zero VC.",
        b: "Zerodha introduced flat-fee brokerage to India: ₹20 per trade regardless of order size, when brokers charged a percentage of trade value. This single pricing decision democratised investing for millions priced out by the old model.\n\nCritically, Zerodha never raised outside capital. No Series A, no Tiger Global, no SoftBank. Nithin reinvested every profit. Kite — their trading platform — became the benchmark every Indian fintech is measured against."
      },
      {
        h: "The Bootstrapped Billionaire",
        b: "Today, Zerodha has 1.5 crore active customers and an $8.2B valuation. Nithin also built Varsity (free financial education, 10M+ users), Rainmatter (a fintech incubator backing 40+ startups), and has become India's most respected voice on sustainable investing.\n\nThe Zerodha story is the definitive antidote to the idea that fundraising equals success. It built its validation through 15 years of being genuinely, unfashionably useful."
      }
    ],
    pull: "We never raised money because we didn't need to. Build something people actually want, charge them fairly — that's the whole playbook.",
    pullBy: "Nithin Kamath",
    lesson: "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to.",
    stats: [
      { l: "Valuation", v: "$8.2B" },
      { l: "Customers", v: "1.5 Cr+" },
      { l: "VC Raised", v: "₹0" },
      { l: "Founded", v: "2010" },
    ],
  },
  {
    no: "05", edition: "No. 05",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar",
    nameShort: "Falguni Nayar",
    initials: "FN",
    company: "Nykaa", slug: "nykaa",
    role: "Founder & CEO",
    city: "Mumbai", context: "Left investment banking at 50",
    valuation: "$2.5B", funding: "Bootstrapped to IPO", founded: "2012",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Falguni_Nayar_at_Startup_Mahakumbh_2024.jpg",
    accent: "#C026D3", accentBg: "#FDF4FF", accentBorder: "#E879F9",
    headline: "She left a 20-year banking career at 50 to build India's first profitable unicorn. Everyone told her she was too old.",
    deck: "Falguni Nayar built the first Indian unicorn led by a woman to go public — and proved the best founders sometimes take the longest to start.",
    cols: [
      {
        h: "Twenty Years at Kotak",
        b: "Falguni Nayar spent two decades at Kotak Mahindra Bank, rising to Managing Director of Investment Banking. In 2012, at 50, she quit. Her network was sceptical: global beauty brands wouldn't trust an Indian startup, the market was fragmented, physical retail was dominant.\n\nShe flew personally to brand offices in France, Italy, and the United States to guarantee authenticity and explain the Indian consumer. She earned the trust one brand at a time."
      },
      {
        h: "Curation Over Discounting",
        b: "While every other platform competed on price, Falguni competed on trust. Nykaa launched with editorial curation, authentic products, and an experience that felt like a premium store. Customers returned because they trusted what they were buying — a sustainable advantage discounters couldn't replicate.\n\nBy 2020, Nykaa crossed 2 million orders per month. No splashy VC backing. No celebrity campaigns in the early years. Just a product built around the conviction that Indian women deserved a trustworthy beauty destination."
      },
      {
        h: "India's First Woman-Led IPO",
        b: "In November 2021, Nykaa listed on the BSE — the first woman-founded Indian company to IPO, and the first profitable Indian unicorn to go public. Falguni's net worth crossed $7B at listing, making her India's wealthiest self-made woman.\n\nShe has since expanded into fashion, wellness, and men's grooming. Nykaa remains a masterclass in patience, domain expertise, and the radical idea that serving your customer well — not raising money — is the primary job of a founder."
      }
    ],
    pull: "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop.",
    pullBy: "Falguni Nayar",
    lesson: "There is no age requirement for building something consequential.",
    stats: [
      { l: "Valuation", v: "$2.5B" },
      { l: "IPO Year", v: "2021" },
      { l: "Age at Start", v: "50" },
      { l: "Founded", v: "2012" },
    ],
  },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function FounderStoriesPage() {
  const [idx, setIdx] = useState(0)
  const f = FOUNDERS[idx]

  // Scroll to top on story change
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }) }, [idx])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        /* Skeleton shimmer */
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position: 600px 0; }
        }
        .shimmer {
          background: linear-gradient(90deg, #E8E2D6 25%, #F0EBE0 50%, #E8E2D6 75%);
          background-size: 600px 100%;
          animation: shimmer 1.4s infinite linear;
        }

        /* Page enter */
        @keyframes pageIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .page-in { animation: pageIn .3s ease both; }

        /* Newspaper column rules */
        @media (min-width: 640px) {
          .three-col {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            column-gap: 1.5rem;
          }
          .three-col > * + * {
            border-left: 1px solid #C8C2B4;
            padding-left: 1.5rem;
          }
        }

        /* Drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.8em;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.08em;
          margin-top: 0.04em;
          color: #1A1208;
        }

        /* Story tab active */
        .stab-active { border-bottom: 2px solid currentColor !important; }

        /* Nav button hover */
        .navbtn:not(:disabled):hover { background: #1A1208 !important; color: white !important; }

        /* Thumbnail hover */
        .thumb-card { transition: opacity .18s; }
        .thumb-card:hover { opacity: 1 !important; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; border-radius: 2px; }
      `}</style>

      {/* ════════════════════════════════════
          MASTHEAD
      ════════════════════════════════════ */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>

        {/* Dateline */}
        <div
          className="flex items-center justify-between px-4 sm:px-8 py-1.5"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
        >
          <div className="flex items-center gap-2.5">
            <Link href="/" className="text-[9px] text-[#888] uppercase tracking-widest hover:text-[#1A1208] transition-colors">upforge.in</Link>
            <span className="text-[#C8C2B4] text-[10px]">/</span>
            <span className="text-[9px] text-[#888] uppercase tracking-widest">Founder Series</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="hidden sm:block text-[9px] text-[#AAA] uppercase tracking-widest">Vol. I · India</span>
            <span className="text-[9px] text-[#AAA] uppercase tracking-widest">March 2026</span>
          </div>
        </div>

        {/* Publication title */}
        <div className="text-center px-4 py-5 sm:py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8.5px] tracking-[0.38em] text-[#AAA] uppercase mb-2.5" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · India Edition
          </p>
          <h1 className="pf text-[2.4rem] sm:text-[3.6rem] lg:text-[4.8rem] font-black leading-none tracking-tight" style={{ color: "#1A1208" }}>
            The Founder Chronicle
          </h1>
          <p className="italic text-[14px] sm:text-[16px] mt-2.5" style={{ color: "#6B5C40" }}>
            Stories of the builders reshaping India — verified, editorial, March 2026
          </p>
          {/* Rule ornament */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 14 }}>✦</span>
            <div className="h-px flex-1 max-w-[120px]" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Story tab strip */}
        <div
          className="flex items-stretch overflow-x-auto"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
        >
          <span className="text-[8px] text-[#BBB] uppercase tracking-widest px-4 py-3 flex-shrink-0 self-center">
            In this edition:
          </span>
          {FOUNDERS.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`stab flex-shrink-0 px-4 py-3 text-[9px] font-bold uppercase tracking-wider border-l transition-colors ${i === idx ? "stab-active" : ""}`}
              style={{
                borderColor: "#D8D2C4",
                color: i === idx ? s.accent : "#888",
                borderBottom: i === idx ? `2.5px solid ${s.accent}` : "2.5px solid transparent",
                background: i === idx ? "rgba(255,255,255,0.6)" : "transparent",
                marginBottom: "-1px",
              }}
            >
              {s.edition} · {s.nameShort}
            </button>
          ))}
        </div>
      </header>

      {/* ════════════════════════════════════
          STORY BODY
      ════════════════════════════════════ */}
      <main key={idx} className="page-in max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ── TWO-COLUMN LAYOUT: story left | photo+facts right ── */}
        <div
          className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >

          {/* ════ LEFT: ALL TEXT ════ */}
          <div className="pt-8 pb-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category + edition label */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8.5px] font-black tracking-[0.28em] uppercase px-2.5 py-1.5"
                style={{ background: f.accent, color: "#fff" }}
              >
                {f.category}
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{f.edition} · March 2026</span>
            </div>

            {/* MAIN HEADLINE */}
            <h2
              className="pf font-black leading-[1.06] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.75rem, 3.5vw, 2.9rem)" }}
            >
              {f.headline}
            </h2>

            {/* DECK */}
            <p
              className="italic leading-[1.7] mb-5 pb-5"
              style={{
                color: "#5A4A30",
                fontSize: "clamp(14px, 2vw, 17px)",
                borderBottom: "1px solid #C8C2B4"
              }}
            >
              {f.deck}
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-7"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial", f.city,
                `Est. ${f.founded}`, f.context
              ].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2.5">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{item}</span>
                  {i < arr.length - 1 && <span style={{ color: "#C8C2B4" }}>·</span>}
                </span>
              ))}
            </div>

            {/* ── MOBILE: founder photo ── */}
            <div className="lg:hidden mb-8">
              <FounderImg
                src={f.imgSrc}
                alt={`${f.name.replace("\n"," ")} — ${f.company} founder`}
                initials={f.initials}
                accent={f.accent}
                className="w-full"
                style={{ height: "min(300px, 58vw)", minHeight: 200 }}
              />
              <div className="px-3 py-2.5" style={{ background: "#1A1208" }}>
                <p className="pf text-white text-[12px] font-bold leading-snug">{f.name.replace("\n"," ")}</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* ── 3-COLUMN NEWSPAPER BODY ── */}
            <div className="three-col">
              {f.cols.map((col, ci) => (
                <div key={ci} style={ci > 0 ? {} : {}}>
                  <h3
                    className="text-[10.5px] font-black uppercase tracking-[0.14em] mb-3 pb-1.5"
                    style={{
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${f.accent}`,
                      fontFamily: "system-ui,sans-serif"
                    }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.88] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px, 1.3vw, 13.5px)", fontFamily: "'Georgia','Times New Roman',serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* ── PULL QUOTE (below columns, full width) ── */}
            <div
              className="mt-8 pt-6 pb-6 text-center hidden sm:block"
              style={{
                borderTop: `3px solid ${f.accent}`,
                borderBottom: "1px solid #C8C2B4"
              }}
            >
              <span style={{ color: "#C8C2B4", fontSize: 18, display: "block", marginBottom: 10 }}>❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(15px, 2vw, 19px)" }}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ color: "#C8C2B4", fontSize: 18, display: "block", margin: "10px 0 8px" }}>❧</span>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                — {f.pullBy}, {f.company}
              </p>
            </div>

          </div>

          {/* ════ RIGHT: PHOTO + FACTS ════ */}
          <div className="hidden lg:flex flex-col pt-8 pb-8 pl-8 gap-6">

            {/* FOUNDER PHOTO */}
            <div className="relative w-full flex-shrink-0" style={{ height: 360 }}>
              <FounderImg
                src={f.imgSrc}
                alt={`${f.name.replace("\n"," ")} — ${f.company} founder`}
                initials={f.initials}
                accent={f.accent}
                className="w-full h-full"
              />
              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3"
                style={{ background: "linear-gradient(to top, rgba(15,9,3,0.95) 60%, transparent)" }}
              >
                <p className="pf text-white font-bold text-[13px] leading-snug">{f.name.replace("\n"," ")}</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* STAT BOX */}
            <div style={{ border: "2px solid #1A1208" }}>
              <div className="px-3.5 py-2" style={{ background: "#1A1208" }}>
                <span className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                  By the Numbers
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                {f.stats.map((s, si) => (
                  <div key={si} className="px-4 py-3.5" style={{ borderColor: "#D8D2C4" }}>
                    <p className="text-[8px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</p>
                    <p className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.3rem" }}>{s.v}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* THE LESSON */}
            <div className="px-4 py-4" style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}>
              <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>
                The Lesson
              </p>
              <p className="italic text-[#1A1208] leading-[1.7]" style={{ fontFamily: "'Georgia',serif", fontSize: 13.5 }}>
                {f.lesson}
              </p>
            </div>

            {/* PROFILE LINK */}
            <Link
              href={`/startup/${f.slug}`}
              className="group flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-75"
              style={{ border: `1.5px solid ${f.accent}` }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>
                View {f.company} on UpForge
              </span>
              <ArrowUpRight className="w-4 h-4" style={{ color: f.accent }} />
            </Link>

            {/* CONTEXT LABEL */}
            <div className="pt-3" style={{ borderTop: "1px solid #D8D2C4" }}>
              <p className="text-[9px] text-[#AAA] italic leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
                {f.context} · {f.city} · Est. {f.founded}
              </p>
            </div>

          </div>
        </div>

        {/* ════════════════════════════════════
            PAGE NAVIGATION
        ════════════════════════════════════ */}
        <div
          className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <button
            onClick={() => idx > 0 && setIdx(i => i - 1)}
            disabled={idx === 0}
            className="navbtn flex items-center gap-2 px-4 py-2.5 transition-all text-[10px] font-bold uppercase tracking-wider"
            style={{
              border: `1px solid ${idx === 0 ? "#D8D2C4" : "#1A1208"}`,
              color: idx === 0 ? "#C8C2B4" : "#1A1208",
              cursor: idx === 0 ? "not-allowed" : "pointer",
              fontFamily: "system-ui,sans-serif",
              background: "transparent"
            }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            {idx === 0 ? "First Story" : FOUNDERS[idx - 1].nameShort}
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Story ${i + 1}`}
                className="h-1.5 rounded-sm transition-all"
                style={{
                  width: i === idx ? 26 : 6,
                  background: i === idx ? f.accent : "#C8C2B4",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => idx < FOUNDERS.length - 1 && setIdx(i => i + 1)}
            disabled={idx === FOUNDERS.length - 1}
            className="navbtn flex items-center gap-2 px-4 py-2.5 transition-all text-[10px] font-bold uppercase tracking-wider"
            style={{
              border: `1px solid ${idx === FOUNDERS.length - 1 ? "#D8D2C4" : "#1A1208"}`,
              color: idx === FOUNDERS.length - 1 ? "#C8C2B4" : "#1A1208",
              cursor: idx === FOUNDERS.length - 1 ? "not-allowed" : "pointer",
              fontFamily: "system-ui,sans-serif",
              background: "transparent"
            }}
          >
            {idx === FOUNDERS.length - 1 ? "Last Story" : FOUNDERS[idx + 1].nameShort}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ════════════════════════════════════
            STORY INDEX — all 5 thumbnails
        ════════════════════════════════════ */}
        <div className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
            All Stories in This Edition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="thumb-card text-left"
                style={{ opacity: i === idx ? 1 : 0.5 }}
              >
                <div
                  className="relative w-full overflow-hidden mb-2.5"
                  style={{
                    height: 120,
                    borderTop: `3px solid ${s.accent}`,
                  }}
                >
                  <FounderImg
                    src={s.imgSrc}
                    alt={s.nameShort}
                    initials={s.initials}
                    accent={s.accent}
                    className="w-full h-full"
                  />
                </div>
                <p className="text-[8.5px] font-black uppercase tracking-wider mb-0.5" style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                  {s.edition}
                </p>
                <p className="pf text-[12.5px] font-bold text-[#1A1208] leading-snug">{s.nameShort}</p>
                <p className="text-[9.5px] text-[#AAA] mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>{s.company}</p>
              </button>
            ))}
          </div>
        </div>

        {/* ════════════════════════════════════
            INSIGHT STRIP
        ════════════════════════════════════ */}
        <div className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Founder Insights</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { v: "~80%", l: "First-generation founders", b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying." },
              { v: "$950B", l: "Value created by under-40s", b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing." },
              { v: "126", l: "Unicorns — and rising", b: "India just crossed 126 unicorns. The founders reading these stories today will build the next 126. UpForge exists to help them get discovered." },
            ].map((item, i) => (
              <div key={i} className="p-4" style={{ background: "white", border: "1px solid #D8D2C4" }}>
                <p className="pf font-black text-[#1A1208] leading-none mb-1" style={{ fontSize: "2.1rem" }}>{item.v}</p>
                <p className="text-[8px] font-black uppercase tracking-[0.18em] mb-2.5" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{item.l}</p>
                <p className="text-[11.5px] leading-relaxed text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>{item.b}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER CTA ── */}
        <div className="pt-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[8.5px] font-black uppercase tracking-[0.24em] mb-2.5" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>
              UpForge Registry
            </p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "1.3rem" }}>
              Your founder story starts with a verified profile.
            </p>
            <p className="text-[12px] leading-relaxed text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
              Get independently verified and indexed in India's most trusted startup registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white text-[11px] font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontFamily: "system-ui,sans-serif" }}
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                { l: "AI Startups", h: "/top-ai-startups" },
                { l: "SaaS", h: "/best-saas-startups" },
                { l: "Unicorns", h: "/indian-unicorns" },
                { l: "All Registry", h: "/startup" },
              ].map((lnk) => (
                <Link key={lnk.h} href={lnk.h}
                  className="flex items-center gap-0.5 text-[9px] uppercase tracking-wider text-[#888] hover:text-[#1A1208] transition-colors"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 pb-2 text-[9px] leading-relaxed" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
          * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn, Wikipedia and company announcements as of March 2026. Founder images served via wsrv.nl image proxy from publicly indexed sources. UpForge is an independent registry — no paid placements.
        </p>

      </main>
    </div>
  )
}
