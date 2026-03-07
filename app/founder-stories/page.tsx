"use client"

// app/founder-stories/page.tsx
// Newspaper broadsheet editorial — full immersive founder stories with page navigation

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight, ArrowRight } from "lucide-react"

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    edition: "No. 01",
    date: "March 2026",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha\n& Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    company: "Zepto",
    slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru",
    age: "19 when they left Stanford",
    valuation: "$5.9B",
    funding: "$2.5B+",
    founded: "2021",
    founderImg: "https://images.inc42.com/uploads/2023/08/Zepto-Co-Founders-Aadit-Palicha-and-Kaivalya-Vohra.jpg",
    coverBg: "#1a1008",
    accentColor: "#F59E0B",
    accentLight: "#FDE68A",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    deck: "Aadit Palicha and Kaivalya Vohra built India's fastest unicorn — and the youngest founders to do it — by failing first, then doing the logistics math nobody else wanted to.",
    columns: [
      {
        head: "The Stanford Dropout",
        body: "In 2020, Aadit Palicha and Kaivalya Vohra were Stanford freshmen who had just received some of the most coveted acceptances in the world. Within months, they were on a flight back to India, convinced that the problem they wanted to solve was here — not in a Silicon Valley dorm.\n\nThey built KiranaKart first: a 45-minute grocery delivery app. It failed in months. Most founders would have returned to California. These two stayed in Bengaluru, rented a room, and dissected the failure with unusual discipline."
      },
      {
        head: "The 10-Minute Thesis",
        body: "The pivot they arrived at was specific: if dark stores — small micro-warehouses — were placed within a 1.5km radius of dense demand, delivery in 10 minutes wasn't a gimmick. It was a logistics equation that could be solved.\n\nEvery competitor and investor called it operationally delusional. Aadit and Kaivalya called it a math problem. Zepto launched in 2021. By August 2023, India had its first unicorn of the year — at $1.4B. The $350M Series H in 2025 brought the valuation to $5.9B."
      },
      {
        head: "What They Built",
        body: "Zepto now operates 350+ dark stores, fulfils orders in under 10 minutes across 10 Indian cities, and has raised more than any quick commerce company in India. Kaivalya Vohra, at 22, became India's youngest billionaire.\n\nBut what defines the Zepto story isn't the speed — it's that the founders were willing to fail completely and rebuild immediately. The first startup taught them the question. The second let them answer it."
      }
    ],
    pullQuote: "We failed with KiranaKart in months. Most people would have gone back to Stanford. We stayed in Bengaluru and figured out what we got wrong.",
    pullAuthor: "Aadit Palicha",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    stats: [
      { l: "Valuation", v: "$5.9B" },
      { l: "Founded", v: "2021" },
      { l: "Dark Stores", v: "350+" },
      { l: "Total Raised", v: "$2.5B+" },
    ],
  },
  {
    edition: "No. 02",
    date: "March 2026",
    category: "EDTECH",
    name: "Alakh Pandey",
    nameShort: "Alakh Pandey",
    company: "PhysicsWallah",
    slug: "physicswallah",
    role: "Founder & CEO",
    city: "Prayagraj, Uttar Pradesh",
    age: "26 when he launched on YouTube",
    valuation: "$2.8B",
    funding: "$700M",
    founded: "2014",
    founderImg: "https://assets.inc42.com/uploads/2022/06/alakh-pandey-feature.jpg",
    coverBg: "#071a0e",
    accentColor: "#10B981",
    accentLight: "#A7F3D0",
    headline: "He taught from a bedroom in Prayagraj. Then 10 million students showed up.",
    deck: "Alakh Pandey didn't disrupt Indian edtech with a Harvard MBA or a VC term sheet. He disrupted it with a ₹2,000 price tag, a YouTube channel, and the conviction that BYJU's was charging too much.",
    columns: [
      {
        head: "The Bedroom Studio",
        body: "In 2014, Alakh Pandey was a young man in Prayagraj preparing for engineering entrance exams and simultaneously teaching the same material to earn tuition money. He set up a camera in his room — not a studio, a room — and started filming Physics lessons.\n\nThe difference between his classes and everyone else's was palpable: he taught like he was talking to a friend, not performing for an institution. No script. No production budget. Just clarity and care for the student sitting on the other side of a screen somewhere in Uttar Pradesh."
      },
      {
        head: "The Price That Changed Everything",
        body: "By 2020, his YouTube channel had crossed 5 million subscribers. In 2021, he launched the PhysicsWallah app with an annual fee of ₹2,000 — against BYJU's ₹80,000. The question wasn't whether students wanted quality education. The question was whether they could afford it. He answered by removing the affordability barrier entirely.\n\nSix million students enrolled within weeks of launch. Sequoia and WestBridge came calling. He raised $100M, achieved unicorn status, and became the story that Indian edtech had been waiting for — while BYJU's imploded under the weight of its own ambitions."
      },
      {
        head: "Profitability as Principle",
        body: "What separates PhysicsWallah from every other edtech bet is that it remained profitable through its growth — a near-impossibility in a sector that burned billions on celebrity ads and acquisitions.\n\nAlakh grew up watching his parents manage tight budgets. He was never going to be the founder who made education unaffordable for the students he came from. By 2025, PhysicsWallah served 10 million learners across JEE, NEET, and UPSC preparation. It is the only Indian edtech unicorn that can be called both affordable and profitable."
      }
    ],
    pullQuote: "BYJU's charged ₹80,000 for what I teach for ₹2,000. That wasn't a mission statement. It was just obviously the right thing to do.",
    pullAuthor: "Alakh Pandey",
    lesson: "Affordability is not a positioning strategy. It can be the entire moat.",
    stats: [
      { l: "Valuation", v: "$2.8B" },
      { l: "Students", v: "10M+" },
      { l: "Annual Fee", v: "₹2,000" },
      { l: "Founded", v: "2014" },
    ],
  },
  {
    edition: "No. 03",
    date: "March 2026",
    category: "FOODTECH",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    company: "Zomato",
    slug: "zomato",
    role: "Founder & CEO",
    city: "Delhi",
    age: "25 when he built Foodiebay",
    valuation: "$33B",
    funding: "$3.2B+",
    founded: "2008",
    founderImg: "https://assets.inc42.com/uploads/2023/07/Deepinder-Goyal-Zomato-1.jpg",
    coverBg: "#1a0a06",
    accentColor: "#F97316",
    accentLight: "#FED7AA",
    headline: "#1 on Hurun India 2025. Zomato is now worth ₹3.2 lakh crore. It started as scanned restaurant menus.",
    deck: "Deepinder Goyal tops India's self-made entrepreneur rankings in 2025. The Zomato story is one of the most complete in Indian tech — a decade and a half of pivots, pressure, and one very public bet on becoming profitable.",
    columns: [
      {
        head: "Foodiebay, 2008",
        body: "Deepinder Goyal was a 25-year-old consultant at Bain & Company in 2008 when he noticed office colleagues spending long lunches passing around printed restaurant menus. He scanned them, put them on a website, and called it Foodiebay.\n\nTraffic came without advertising. He quit Bain within months. Rebranded to Zomato in 2010 — a name that meant nothing, but was clean, sticky, and available. What followed was a decade of relentless iteration: restaurant discovery, reviews, delivery, groceries, Blinkit quick commerce, and ultimately, profitability."
      },
      {
        head: "The Public Company Bet",
        body: "Zomato's 2021 IPO was the defining moment for Indian startup optimism. It listed at a premium on both BSE and NSE, returned massive gains to early investors, and gave the Indian public market a taste of what tech companies could be worth.\n\nThen came the correction — a brutal 70% stock decline in 2022 as the market repriced every loss-making tech company globally. Deepinder didn't hedge publicly. He doubled down: cut costs, killed zombie products, and set a public target for profitability. Zomato posted its first quarterly profit in Q2 FY2024."
      },
      {
        head: "2025: No. 1 on Hurun",
        body: "Hurun India's Top 200 Self-Made Entrepreneurs of the Millennia 2025 placed Deepinder Goyal at No. 1 — with Eternal (Zomato's parent) valued at ₹3.2 lakh crore, a 27% increase year on year.\n\nThe journey from scanned restaurant menus to India's most valuable self-made founder took 17 years. It required surviving near-bankruptcy, a global pandemic, a brutal stock crash, and the patience to let a product compound. The lesson Deepinder's story teaches is about adaptation: the Zomato of 2025 is barely recognisable from the Foodiebay of 2008. That's the point."
      }
    ],
    pullQuote: "We have to keep reinventing Zomato. The product that got us here will not get us to where we are going.",
    pullAuthor: "Deepinder Goyal",
    lesson: "The company that survives is rarely the one that started. It's the one that kept reinventing.",
    stats: [
      { l: "Valuation", v: "$33B" },
      { l: "Hurun 2025", v: "#1" },
      { l: "Founded", v: "2008" },
      { l: "Total Raised", v: "$3.2B+" },
    ],
  },
  {
    edition: "No. 04",
    date: "March 2026",
    category: "FINTECH",
    name: "Nithin Kamath",
    nameShort: "Nithin Kamath",
    company: "Zerodha",
    slug: "zerodha",
    role: "Founder & CEO",
    city: "Bengaluru",
    age: "30 at founding. Dropped out of college at 17 to trade.",
    valuation: "$8.2B",
    funding: "Fully bootstrapped",
    founded: "2010",
    founderImg: "https://assets.inc42.com/uploads/2023/07/Nithin-Kamath-Zerodha.jpg",
    coverBg: "#090f1a",
    accentColor: "#3B82F6",
    accentLight: "#BFDBFE",
    headline: "He dropped out at 17 to trade stocks. He never took a rupee of VC money. Zerodha is worth $8.2 billion.",
    deck: "Nithin Kamath built India's largest stockbroker without a single outside investor, a single celebrity endorsement, or a single paid acquisition campaign. Just a better product, a fairer price, and fifteen years of compounding trust.",
    columns: [
      {
        head: "The Self-Taught Trader",
        body: "Nithin Kamath dropped out of college at 17 to learn stock markets the only way he believed they could be learned: by putting real money in and watching what happened. He traded, lost, recovered, and spent the next decade becoming exceptionally good at it — while working as a sub-broker and call centre employee to fund his positions.\n\nBy 2010, he had identified the structural problem in Indian broking: fees were opaque, interfaces were broken, and the entire system was designed to benefit brokers, not investors. He founded Zerodha with his brother Nikhil to fix that."
      },
      {
        head: "Zero Commission. Zero VC.",
        body: "Zerodha introduced the flat-fee brokerage model to India: ₹20 per trade, regardless of size, at a time when brokers charged a percentage of trade value. This one pricing decision democratised investing. Retail traders who had been priced out could now trade affordably.\n\nCritically, Zerodha never raised outside capital. No Series A. No Tiger Global. No SoftBank. Nithin reinvested profits, grew through word of mouth, and built a product — Kite — that traders genuinely loved. By 2021, Zerodha was processing 15% of India's daily stock market volume."
      },
      {
        head: "The Bootstrapped Billionaire",
        body: "Today, Zerodha has 1.5 crore active customers and an estimated valuation of $8.2B. Nithin Kamath has a net worth exceeding ₹11,500 crore. He also built Varsity (free financial education), Rainmatter (a fintech incubator), and has become one of India's most respected voices on sustainable investing and financial literacy.\n\nThe Zerodha story is an antidote to the startup narrative that equates fundraising with success. Nithin's company has never needed the validation of a term sheet. It built the validation through fifteen years of being genuinely useful."
      }
    ],
    pullQuote: "We never raised money because we didn't need it. We just needed to build something people actually wanted and charge them fairly for it.",
    pullAuthor: "Nithin Kamath",
    lesson: "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to.",
    stats: [
      { l: "Valuation", v: "$8.2B" },
      { l: "Customers", v: "1.5 Cr+" },
      { l: "VC Raised", v: "₹0" },
      { l: "Founded", v: "2010" },
    ],
  },
  {
    edition: "No. 05",
    date: "March 2026",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar",
    nameShort: "Falguni Nayar",
    company: "Nykaa",
    slug: "nykaa",
    role: "Founder & CEO",
    city: "Mumbai",
    age: "50 at founding",
    valuation: "$2.5B",
    funding: "Bootstrapped to IPO",
    founded: "2012",
    founderImg: "https://assets.inc42.com/uploads/2021/11/Falguni-Nayar-Nykaa.jpg",
    coverBg: "#1a0510",
    accentColor: "#EC4899",
    accentLight: "#FBCFE8",
    headline: "She left a 20-year banking career at 50 to build India's first profitable unicorn. They told her she was too old.",
    deck: "Falguni Nayar didn't just build a beauty company. She built the first Indian unicorn led by a woman to go public — and proved that the best founders sometimes take the longest to start.",
    columns: [
      {
        head: "Twenty Years at Kotak",
        body: "Falguni Nayar spent two decades at Kotak Mahindra Bank, rising through the ranks to Managing Director of Investment Banking. She was, by every professional metric, at the top of her career.\n\nIn 2012, at 50, she quit. Her network was sceptical: the beauty e-commerce market was fragmented, global brands were suspicious of Indian platforms, and the category was dominated by physical retail. She had noticed something that her banking instincts told her was real: Indian women were spending significant money on beauty products but had no trustworthy, curated online destination."
      },
      {
        head: "Curation Over Discounting",
        body: "Every other e-commerce platform competed on price. Falguni competed on trust. She flew personally to brand offices in France, Italy, and the United States — guaranteeing authenticity, explaining the Indian consumer, and building relationships that took years.\n\nNykaa launched with editorial curation, authentic products, and a shopping experience that felt like a premium store. It worked in a way that pure-play discounters never could: customers returned because they trusted what they were buying. By 2020, Nykaa had crossed 2 million orders per month."
      },
      {
        head: "India's First Woman-Led IPO",
        body: "In November 2021, Nykaa listed on the Bombay Stock Exchange. It was the first woman-founded Indian company to IPO, and the first profitable Indian unicorn to go public. Falguni Nayar's net worth at listing crossed $7 billion — making her India's wealthiest self-made woman.\n\nShe has since expanded into fashion, wellness, and men's grooming. Nykaa remains a case study in what happens when domain expertise, patience, and consumer empathy are applied to a market that everyone else had decided was too hard. Falguni was right. They were wrong."
      }
    ],
    pullQuote: "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop.",
    pullAuthor: "Falguni Nayar",
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
  const [page, setPage] = useState(0)
  const f = FOUNDERS[page]
  const isFirst = page === 0
  const isLast = page === FOUNDERS.length - 1

  return (
    <div className="min-h-screen bg-[#F2EFE8]" style={{ fontFamily: "'Georgia','Times New Roman',serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=IM+Fell+English:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; }

        :root {
          --ink: #1A1208;
          --paper: #F2EFE8;
          --rule: #2A220E;
          --muted: #6B5C40;
          --light-rule: #D4CABB;
        }

        .playfair { font-family: 'Playfair Display', 'Georgia', serif; }
        .fell { font-family: 'IM Fell English', 'Georgia', serif; }

        @keyframes fadeIn {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .page-enter { animation: fadeIn .4s ease both; }

        /* Newspaper column rule */
        .col-rule { column-rule: 1px solid var(--light-rule); }

        /* Drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 4.2em;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.08em;
          margin-top: 0.05em;
          color: var(--ink);
        }

        /* Hover on nav pill */
        .nav-pill { transition: background .14s, color .14s; }
        .nav-pill:hover { background: var(--ink) !important; color: #fff !important; }

        /* Story index pill */
        .idx-dot { transition: all .18s ease; cursor: pointer; }
        .idx-dot.active { width: 28px; }

        /* Pull quote ornament */
        .ornament::before, .ornament::after {
          content: '❧';
          display: block;
          text-align: center;
          font-size: 1.2rem;
          color: var(--light-rule);
          margin: 6px 0;
        }

        /* Mobile tap areas */
        @media (max-width: 640px) {
          .dropcap::first-letter { font-size: 3.2em; }
        }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: var(--light-rule); }
      `}</style>

      {/* ══════════════════════════════════════════════
          NEWSPAPER MASTHEAD
      ══════════════════════════════════════════════ */}
      <header
        className="border-b-4 bg-[#F2EFE8]"
        style={{ borderColor: "var(--ink)" }}
      >
        {/* Topline */}
        <div
          className="border-b px-4 sm:px-8 py-1.5 flex items-center justify-between"
          style={{ borderColor: "var(--light-rule)", fontFamily: "system-ui,sans-serif" }}
        >
          <div className="flex items-center gap-3">
            <Link href="/" className="text-[9px] text-[#888] hover:text-[var(--ink)] uppercase tracking-wider transition-colors">
              upforge.in
            </Link>
            <span className="text-[#DDD] text-[9px]">/</span>
            <span className="text-[9px] text-[#888] uppercase tracking-wider">Founder Series</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider hidden sm:block">
              Vol. I · India Edition
            </span>
            <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">
              March 2026
            </span>
          </div>
        </div>

        {/* Big masthead title */}
        <div className="px-4 sm:px-8 py-4 sm:py-6 text-center border-b" style={{ borderColor: "var(--light-rule)" }}>
          <p
            className="text-[9px] tracking-[0.4em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Independent Startup Registry
          </p>
          <h1
            className="playfair text-[2.8rem] sm:text-[4rem] lg:text-[5rem] font-black leading-none tracking-tight text-[var(--ink)]"
          >
            The Founder Chronicle
          </h1>
          <p
            className="fell italic text-[14px] sm:text-[16px] text-[var(--muted)] mt-1.5"
          >
            Stories of the builders reshaping India — in their own words
          </p>
        </div>

        {/* Story index strip */}
        <div
          className="px-4 sm:px-8 py-2.5 flex items-center gap-3 overflow-x-auto hide-scrollbar"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-[0.2em] flex-shrink-0">Stories:</span>
          {FOUNDERS.map((f, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              className={`idx-dot text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 flex-shrink-0 transition-all ${
                i === page
                  ? "bg-[var(--ink)] text-white"
                  : "text-[#888] hover:text-[var(--ink)]"
              }`}
            >
              {f.edition} · {f.nameShort}
            </button>
          ))}
        </div>
      </header>

      {/* ══════════════════════════════════════════════
          NEWSPAPER PAGE — full story
      ══════════════════════════════════════════════ */}
      <main key={page} className="page-enter max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-0 pb-16">

        {/* ── COVER SECTION ── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-0 border-b-2 mb-0" style={{ borderColor: "var(--rule)" }}>

          {/* LEFT: Category + Headline + Deck + Columns */}
          <div className="pt-8 pb-6 pr-0 lg:pr-8 lg:border-r" style={{ borderColor: "var(--light-rule)" }}>

            {/* Category tag */}
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[9px] font-black tracking-[0.3em] uppercase px-2 py-1"
                style={{ background: f.accentColor, color: "#fff", fontFamily: "system-ui,sans-serif" }}
              >
                {f.category}
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>
                {f.edition} · {f.date}
              </span>
            </div>

            {/* Main headline */}
            <h2
              className="playfair text-[1.9rem] sm:text-[2.5rem] lg:text-[3rem] font-black leading-[1.08] text-[var(--ink)] mb-4"
            >
              {f.headline}
            </h2>

            {/* Deck */}
            <p className="fell italic text-[15px] sm:text-[17px] text-[var(--muted)] leading-[1.6] mb-6 pb-6 border-b" style={{ borderColor: "var(--light-rule)" }}>
              {f.deck}
            </p>

            {/* Byline */}
            <div className="flex items-center gap-3 mb-6" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[9px] text-[#AAA] uppercase tracking-[0.2em]">By UpForge Editorial</span>
              <span className="text-[#DDD]">·</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-[0.2em]">{f.city}</span>
              <span className="text-[#DDD]">·</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-[0.2em]">Est. {f.founded}</span>
            </div>

            {/* 3-column newspaper body */}
            <div className="grid sm:grid-cols-3 gap-5 col-rule">
              {f.columns.map((col, i) => (
                <div key={i} className={i > 0 ? "sm:pl-5" : ""}>
                  <h3
                    className="playfair text-[13px] font-bold text-[var(--ink)] uppercase tracking-wider mb-3 pb-1.5 border-b"
                    style={{ borderColor: "var(--light-rule)" }}
                  >
                    {col.head}
                  </h3>
                  {col.body.split("\n\n").map((para, j) => (
                    <p
                      key={j}
                      className={`text-[13px] text-[#2A220E] leading-[1.85] mb-3 ${i === 0 && j === 0 ? "dropcap" : ""}`}
                      style={{ fontFamily: "'Georgia',serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Photo column */}
          <div className="pt-8 pb-6 lg:pl-8 flex flex-col gap-6">

            {/* Founder photo — full bleed tall */}
            <div
              className="relative w-full overflow-hidden"
              style={{ height: "min(480px, 55vw)", minHeight: 280 }}
            >
              <Image
                src={f.founderImg}
                alt={`${f.name.replace("\n", " ")} — ${f.company} founder`}
                fill
                className="object-cover object-top"
                unoptimized
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
              />
              {/* Bottom caption bar */}
              <div
                className="absolute bottom-0 left-0 right-0 px-3 py-2"
                style={{ background: "rgba(10,6,2,0.82)" }}
              >
                <p
                  className="text-white text-[11px] font-bold leading-tight"
                  style={{ fontFamily: "'Georgia',serif" }}
                >
                  {f.name.replace("\n", " ")}
                </p>
                <p
                  className="text-white/50 text-[9px] mt-0.5 uppercase tracking-wider"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* Stats box — newspaper fact box */}
            <div className="border-2" style={{ borderColor: "var(--rule)" }}>
              <div
                className="px-3 py-2 border-b-2 flex items-center gap-2"
                style={{ background: "var(--ink)", borderColor: "var(--rule)" }}
              >
                <span
                  className="text-[8px] font-black uppercase tracking-[0.28em] text-white"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  By the Numbers
                </span>
              </div>
              <div className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "var(--light-rule)" }}>
                {f.stats.map((s, i) => (
                  <div
                    key={i}
                    className="px-4 py-3"
                    style={{ borderColor: "var(--light-rule)" }}
                  >
                    <p
                      className="text-[8px] text-[#AAA] uppercase tracking-[0.18em] mb-0.5"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {s.l}
                    </p>
                    <p
                      className="playfair text-[1.3rem] font-bold text-[var(--ink)]"
                    >
                      {s.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Pull quote box */}
            <div
              className="border-t-4 border-b pt-4 pb-4"
              style={{ borderTopColor: f.accentColor, borderBottomColor: "var(--light-rule)" }}
            >
              <div className="ornament" />
              <blockquote
                className="fell italic text-[14.5px] text-[var(--ink)] leading-[1.7] text-center px-2"
              >
                "{f.pullQuote}"
              </blockquote>
              <p
                className="text-center text-[9px] uppercase tracking-[0.22em] text-[#AAA] mt-3"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {f.pullAuthor}, {f.company}
              </p>
              <div className="ornament" />
            </div>

            {/* Key lesson */}
            <div
              className="px-4 py-4"
              style={{ background: f.accentColor + "18", border: `1px solid ${f.accentColor}55` }}
            >
              <p
                className="text-[8px] font-black uppercase tracking-[0.22em] mb-2"
                style={{ color: f.accentColor, fontFamily: "system-ui,sans-serif" }}
              >
                The Lesson
              </p>
              <p
                className="fell italic text-[13.5px] text-[var(--ink)] leading-relaxed"
              >
                {f.lesson}
              </p>
            </div>

            {/* Startup profile link */}
            <Link
              href={`/startup/${f.slug}`}
              className="flex items-center justify-between px-4 py-3 group"
              style={{ border: `1px solid ${f.accentColor}`, fontFamily: "system-ui,sans-serif" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: f.accentColor }}>
                View {f.company} on UpForge
              </span>
              <ArrowUpRight
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: f.accentColor }}
              />
            </Link>

          </div>
        </div>

        {/* ══════════════════════════════════════════════
            PAGE NAVIGATION
        ══════════════════════════════════════════════ */}
        <div
          className="flex items-center justify-between py-5 border-b"
          style={{ borderColor: "var(--light-rule)" }}
        >
          {/* Previous */}
          <button
            onClick={() => !isFirst && setPage(p => p - 1)}
            disabled={isFirst}
            className={`nav-pill flex items-center gap-2 px-4 py-2.5 border text-[10px] font-bold uppercase tracking-wider transition-all ${
              isFirst
                ? "border-[#DDD] text-[#CCC] cursor-not-allowed"
                : "border-[var(--ink)] text-[var(--ink)] cursor-pointer"
            }`}
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            {isFirst ? "First Story" : `← ${FOUNDERS[page - 1].nameShort}`}
          </button>

          {/* Dot indicators */}
          <div className="flex items-center gap-1.5">
            {FOUNDERS.map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === page ? 28 : 6,
                  background: i === page ? f.accentColor : "#D4CABB",
                }}
                aria-label={`Go to story ${i + 1}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => !isLast && setPage(p => p + 1)}
            disabled={isLast}
            className={`nav-pill flex items-center gap-2 px-4 py-2.5 border text-[10px] font-bold uppercase tracking-wider transition-all ${
              isLast
                ? "border-[#DDD] text-[#CCC] cursor-not-allowed"
                : "border-[var(--ink)] text-[var(--ink)] cursor-pointer"
            }`}
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            {isLast ? "Last Story" : `${FOUNDERS[page + 1].nameShort} →`}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ── ALL STORIES INDEX (mini thumbnails) ── */}
        <div className="py-8 border-b" style={{ borderColor: "var(--light-rule)" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            All Stories in This Edition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`text-left border-t-[3px] pt-3 transition-all group ${i === page ? "opacity-100" : "opacity-55 hover:opacity-90"}`}
                style={{ borderTopColor: s.accentColor }}
              >
                <div className="relative w-full h-[100px] overflow-hidden bg-[#E8E4DC] mb-2">
                  <Image
                    src={s.founderImg}
                    alt={s.nameShort}
                    fill
                    className="object-cover object-top"
                    unoptimized
                    sizes="200px"
                  />
                </div>
                <p
                  className="text-[9px] font-black uppercase tracking-wider mb-0.5"
                  style={{ color: s.accentColor, fontFamily: "system-ui,sans-serif" }}
                >
                  {s.edition}
                </p>
                <p
                  className="playfair text-[12px] font-bold text-[var(--ink)] leading-tight"
                >
                  {s.nameShort}
                </p>
                <p
                  className="text-[9px] text-[#AAA] mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {s.company}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ── FOOTER STRIP ── */}
        <div className="pt-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p className="text-[9px] text-[#E8C547] font-black uppercase tracking-[0.24em] mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Registry</p>
            <p className="playfair text-[1.3rem] font-bold text-[var(--ink)] leading-snug mb-2">Your founder story starts with a verified profile.</p>
            <p className="text-[12px] text-[var(--muted)] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
              Get your startup independently verified and indexed in India's most trusted registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--ink)] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#333] transition-colors"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex flex-wrap gap-2">
              {[
                { l: "AI Startups", h: "/top-ai-startups" },
                { l: "SaaS Startups", h: "/best-saas-startups" },
                { l: "Unicorns", h: "/indian-unicorns" },
                { l: "All Registry", h: "/startup" },
              ].map((lnk) => (
                <Link
                  key={lnk.h}
                  href={lnk.h}
                  className="text-[9px] uppercase tracking-wider text-[#888] hover:text-[var(--ink)] transition-colors flex items-center gap-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-[9px] text-[#BBB] leading-relaxed pb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
          * Story details sourced from public interviews, Inc42, Forbes India, Hurun India 2025, Tracxn, and company announcements as of March 2026. Founder images from publicly indexed press coverage. UpForge is an independent registry — no paid placements.
        </p>
      </main>

    </div>
  )
}
