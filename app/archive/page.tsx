"use client"

// app/archive/page.tsx
// THE FOUNDER CHRONICLE — Archive
// 100% same design system as homepage (app/page.tsx)

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ArrowUpRight } from "lucide-react"

const ALL_STORIES = [
  {
    no: "01", edition: "No. 01",
    month: "March 2026", monthKey: "march-2026",
    category: "EDTECH",
    name: "Alakh Pandey", nameShort: "Alakh Pandey", initials: "AP",
    company: "PhysicsWallah", slug: "physicswallah",
    role: "Founder & CEO", city: "Prayagraj, UP", context: "YouTube teacher turned unicorn CEO",
    valuation: "$2.8B", funding: "$700M", founded: "2014",
    imgSrc: "https://i0.wp.com/globalkashmir.net/wp-content/uploads/2024/08/Physicswallah.jpg",
    accent: "#059669", accentBg: "#ECFDF5",
    headline: "BYJU's charged ₹80,000 for what he taught for ₹2,000. That wasn't a mission — it was just obviously the right thing to do.",
    lesson: "Affordability is not a positioning strategy. It can be the entire moat.",
    stats: [{ l: "Valuation", v: "$2.8B" }, { l: "Students", v: "10M+" }, { l: "Annual Fee", v: "₹2,000" }, { l: "Founded", v: "2014" }],
  },
  {
    no: "02", edition: "No. 02",
    month: "March 2026", monthKey: "march-2026",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra", nameShort: "Palicha & Vohra", initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders", city: "Bengaluru", context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
    imgSrc: "https://i.ytimg.com/vi/HBSOii00H68/maxresdefault.jpg",
    accent: "#D97706", accentBg: "#FFFBEB",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    stats: [{ l: "Valuation", v: "$5.9B" }, { l: "Founded", v: "2021" }, { l: "Dark Stores", v: "350+" }, { l: "Total Raised", v: "$2.5B+" }],
  },
  {
    no: "03", edition: "No. 03",
    month: "March 2026", monthKey: "march-2026",
    category: "FOODTECH",
    name: "Deepinder Goyal", nameShort: "Deepinder Goyal", initials: "DG",
    company: "Zomato / Eternal", slug: "zomato",
    role: "Founder & CEO", city: "Delhi", context: "IIT Delhi → Bain & Co → Foodiebay at 25",
    valuation: "$33B", funding: "$3.2B+", founded: "2008",
    imgSrc: "https://pbs.twimg.com/media/GSiTEQ2WcAAwE4b.png",
    accent: "#DC2626", accentBg: "#FFF1F2",
    headline: "#1 on Hurun India 2025. Zomato is worth ₹3.2 lakh crore. It started as scanned restaurant menus.",
    lesson: "The company that survives is rarely the one that started. It's the one that kept reinventing.",
    stats: [{ l: "Mkt. Cap", v: "₹3.2L Cr" }, { l: "Hurun 2025", v: "#1" }, { l: "Founded", v: "2008" }, { l: "Raised", v: "$3.2B+" }],
  },
  {
    no: "04", edition: "No. 04",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH",
    name: "Nithin Kamath", nameShort: "Nithin Kamath", initials: "NK",
    company: "Zerodha", slug: "zerodha",
    role: "Founder & CEO", city: "Bengaluru", context: "Dropped out at 17 to trade. Never took VC.",
    valuation: "$8.2B", funding: "Bootstrapped", founded: "2010",
    imgSrc: "https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF",
    headline: "He dropped out at 17 to trade stocks. Never took a rupee of VC. Zerodha is India's largest stockbroker — worth $8.2 billion.",
    lesson: "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to.",
    stats: [{ l: "Valuation", v: "$8.2B" }, { l: "Customers", v: "1.5 Cr+" }, { l: "VC Raised", v: "₹0" }, { l: "Founded", v: "2010" }],
  },
  {
    no: "05", edition: "No. 05",
    month: "March 2026", monthKey: "march-2026",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar", nameShort: "Falguni Nayar", initials: "FN",
    company: "Nykaa", slug: "nykaa",
    role: "Founder & CEO", city: "Mumbai", context: "Left investment banking at 50",
    valuation: "$2.5B", funding: "Bootstrapped to IPO", founded: "2012",
    imgSrc: "https://i.cdn.newsbytesapp.com/images/l12420211110152610.jpeg",
    accent: "#C026D3", accentBg: "#FDF4FF",
    headline: "She left a 20-year banking career at 50 to build India's first profitable unicorn. Everyone told her she was too old.",
    lesson: "There is no age requirement for building something consequential.",
    stats: [{ l: "Valuation", v: "$2.5B" }, { l: "IPO Year", v: "2021" }, { l: "Age at Start", v: "50" }, { l: "Founded", v: "2012" }],
  },
  {
    no: "06", edition: "No. 06",
    month: "March 2026", monthKey: "march-2026",
    category: "HOSPITALITY",
    name: "Ritesh Agarwal", nameShort: "Ritesh Agarwal", initials: "RA",
    company: "OYO", slug: "oyo",
    role: "Founder & CEO", city: "Gurgaon", context: "Youngest billionaire founder",
    valuation: "$10B+", funding: "$3B+", founded: "2013",
    imgSrc: "",
    accent: "#DC2626", accentBg: "#FEF2F2",
    headline: "At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.",
    lesson: "Start young. Learn fast. Scale relentlessly.",
    stats: [{ l: "Valuation", v: "$10B+" }, { l: "Countries", v: "80+" }, { l: "Founded", v: "2013" }, { l: "Age at Start", v: "19" }],
  },
  {
    no: "07", edition: "No. 07",
    month: "March 2026", monthKey: "march-2026",
    category: "MOBILITY",
    name: "Bhavish Aggarwal", nameShort: "Bhavish Aggarwal", initials: "BA",
    company: "Ola", slug: "ola",
    role: "Co-Founder & CEO", city: "Bangalore", context: "Built India's largest ride-hailing platform",
    valuation: "$7B+", funding: "$4B+", founded: "2010",
    imgSrc: "",
    accent: "#EA580C", accentBg: "#FFF7ED",
    headline: "A single bad taxi ride inspired him to build one of India's largest mobility platforms.",
    lesson: "Some of the biggest companies start with solving a personal problem.",
    stats: [{ l: "Valuation", v: "$7B+" }, { l: "Cities", v: "250+" }, { l: "Founded", v: "2010" }, { l: "Funding", v: "$4B+" }],
  },
  {
    no: "08", edition: "No. 08",
    month: "March 2026", monthKey: "march-2026",
    category: "CAREER PLATFORM",
    name: "Lucky Tiwari", nameShort: "Lucky Tiwari", initials: "LT",
    company: "InternAdda", slug: "internadda",
    role: "Founder", city: "India", context: "Building a modern platform for students",
    valuation: "Private", funding: "Bootstrapped", founded: "2020",
    imgSrc: "/luckyinternadda.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF",
    headline: "He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India.",
    lesson: "Sometimes the best startups are built by solving problems you personally faced.",
    stats: [{ l: "Platform", v: "InternAdda" }, { l: "Founded", v: "2024" }, { l: "Funding", v: "Bootstrapped" }, { l: "Focus", v: "Students" }],
  },
  {
    no: "09", edition: "No. 09",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH",
    name: "Kunal Shah", nameShort: "Kunal Shah", initials: "KS",
    company: "CRED", slug: "cred",
    role: "Founder & CEO", city: "Bangalore", context: "Built two unicorn fintech startups",
    valuation: "$6B+", funding: "$800M+", founded: "2018",
    imgSrc: "",
    accent: "#111827", accentBg: "#F3F4F6",
    headline: "He built CRED by rewarding people for paying their credit card bills on time.",
    lesson: "Understand human behaviour better than technology.",
    stats: [{ l: "Valuation", v: "$6B+" }, { l: "Users", v: "12M+" }, { l: "Founded", v: "2018" }, { l: "Previous Exit", v: "$400M" }],
  },
  {
    no: "10", edition: "No. 10",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH / PAYMENTS",
    name: "Vijay Shekhar Sharma", nameShort: "Vijay Sharma", initials: "VS",
    company: "Paytm", slug: "paytm",
    role: "Founder & CEO", city: "Noida", context: "Built India's biggest digital wallet",
    valuation: "$16B+", funding: "$3B+", founded: "2010",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s",
    accent: "#0284C7", accentBg: "#EFF6FF",
    headline: "From a small recharge website to India's largest digital payments ecosystem.",
    lesson: "Persistence beats privilege.",
    stats: [{ l: "Valuation", v: "$16B+" }, { l: "Users", v: "300M+" }, { l: "Founded", v: "2010" }, { l: "IPO", v: "2021" }],
  },
  // ── APRIL 2026 ──
  {
    no: "11", edition: "No. 11",
    month: "April 2026", monthKey: "april-2026",
    category: "D2C / FMCG",
    name: "Ghazal Alagh", nameShort: "Ghazal Alagh", initials: "GA",
    company: "Mamaearth", slug: "mamaearth",
    role: "Co-Founder & CIO", city: "Gurgaon", context: "Shark Tank India judge",
    valuation: "$1.2B", funding: "$52M", founded: "2016",
    imgSrc: "https://images.moneycontrol.com/static-mcnews/2023/09/ghazal-alagh-mamaearth.jpg",
    accent: "#16A34A", accentBg: "#F0FDF4",
    headline: "She built India's first profitable D2C personal care unicorn — starting from a problem her own child faced.",
    lesson: "The most authentic brands are built by founders who are also customers.",
    stats: [{ l: "Valuation", v: "$1.2B" }, { l: "IPO Year", v: "2023" }, { l: "Founded", v: "2016" }, { l: "Products", v: "200+" }],
  },
  {
    no: "12", edition: "No. 12",
    month: "April 2026", monthKey: "april-2026",
    category: "B2B SAAS",
    name: "Girish Mathrubootham", nameShort: "Girish Mathrubootham", initials: "GM",
    company: "Freshworks", slug: "freshworks",
    role: "Founder & CEO", city: "Chennai", context: "India's second NASDAQ-listed SaaS",
    valuation: "$3B+", funding: "$490M+", founded: "2010",
    imgSrc: "",
    accent: "#0D9488", accentBg: "#F0FDFA",
    headline: "He built a global SaaS giant from Chennai — and proved Indian software can compete with Silicon Valley.",
    lesson: "World-class software doesn't require a Bay Area zip code.",
    stats: [{ l: "Valuation", v: "$3B+" }, { l: "NASDAQ", v: "2021" }, { l: "Founded", v: "2010" }, { l: "Countries", v: "120+" }],
  },
]

const MONTHS = [
  { key: "all",        label: "All Editions" },
  { key: "march-2026", label: "March 2026"  },
  { key: "april-2026", label: "April 2026"  },
]

const PAGE_SIZE = 10

function FounderPhoto({ src, alt, initials, accent, accentBg, className = "", style = {} }: {
  src: string; alt: string; initials: string; accent: string; accentBg: string; className?: string; style?: React.CSSProperties
}) {
  const [failed, setFailed] = useState(false)
  const show = src && !failed
  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accentBg, ...style }}>
      {show && <img src={src} alt={alt} onError={() => setFailed(true)} className="absolute inset-0 w-full h-full object-cover object-top" loading="lazy" />}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "2rem", fontFamily: "Georgia,serif" }}>{initials}</div>
          <p className="text-[9px] uppercase tracking-[0.22em] text-center px-4"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>{alt}</p>
        </div>
      )}
    </div>
  )
}

export default function ArchivePage() {
  const [activeMonth, setActiveMonth] = useState("all")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filtered = activeMonth === "all" ? ALL_STORIES : ALL_STORIES.filter(s => s.monthKey === activeMonth)
  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const monthCount = (key: string) => key === "all" ? ALL_STORIES.length : ALL_STORIES.filter(s => s.monthKey === key).length

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: storyIn .3s ease both; }

        .month-btn {
          width: 100%; display: flex; align-items: center; justify-content: space-between;
          padding: 10px 14px; border: none; border-bottom: 1px solid #D8D2C4;
          background: #FDFCF9; cursor: pointer; text-align: left; transition: background .12s;
        }
        .month-btn:hover { background: #EDE9DF; }
        .month-btn.active { background: #1A1208; border-bottom-color: #1A1208; }
        .month-btn.active .mbl { color: white !important; }
        .month-btn.active .mbc { color: rgba(255,255,255,.35) !important; }
        .mbl { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: .18em; color: #5A4A30; font-family: system-ui,sans-serif; }
        .mbc { font-size: 8px; color: #BBB0A0; font-family: system-ui,sans-serif; }

        .arc-card { background: #FDFCF9; text-decoration: none; display: flex; flex-direction: column; transition: opacity .18s; }
        .arc-card:hover { opacity: .85; }

        .load-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 32px; border: 1.5px solid #1A1208;
          background: transparent; color: #1A1208;
          font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: .16em;
          cursor: pointer; transition: background .15s, color .15s; font-family: system-ui,sans-serif;
        }
        .load-btn:hover { background: #1A1208; color: white; }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          <li><Link href="/" className="hover:text-[#1A1208] transition-colors">UpForge</Link></li>
          <li className="text-[#C8C2B4]">/</li>
          <li><Link href="/" className="hover:text-[#1A1208] transition-colors">The Founder Chronicle</Link></li>
          <li className="text-[#C8C2B4]">/</li>
          <li className="text-[#1A1208] font-semibold">Archive</li>
        </ol>
      </nav>

      {/* ══ MASTHEAD — same as homepage ══ */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-[2px] pb-6 sm:pb-9" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · India Edition
          </p>
          <p className="pf font-black leading-none tracking-tight text-[#1A1208]" style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
            The Founder Chronicle
          </p>
          <p className="italic mt-2.5 text-[#6B5C40]" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
            Archive — Every edition, every founder, fully indexed
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 13 }}>✦</span>
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Edition tabs — same as homepage story tabs */}
        <nav className="flex items-stretch overflow-x-auto"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif", scrollbarWidth: "none" }}>
          <span className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-4 py-3 self-center flex-shrink-0">
            Browse by edition:
          </span>
          {MONTHS.map(m => (
            <button key={m.key}
              onClick={() => { setActiveMonth(m.key); setVisibleCount(PAGE_SIZE) }}
              aria-current={activeMonth === m.key ? "true" : undefined}
              className="flex-shrink-0 px-5 py-3 text-[9px] font-bold uppercase tracking-wider border-l transition-colors"
              style={{
                borderColor: "#D8D2C4",
                color: activeMonth === m.key ? "#1A1208" : "#888",
                borderBottom: `2.5px solid ${activeMonth === m.key ? "#1A1208" : "transparent"}`,
                background: activeMonth === m.key ? "rgba(255,255,255,0.55)" : "transparent",
                marginBottom: "-1px",
              }}>
              {m.label}
              <span className="ml-2 opacity-40 text-[8px]">({monthCount(m.key)})</span>
            </button>
          ))}
        </nav>
      </header>

      {/* ══ BODY ══ */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex gap-0" style={{ alignItems: "flex-start" }}>

          {/* ═══ LEFT SIDEBAR ═══ */}
          <aside className="hidden lg:block flex-shrink-0"
            style={{ width: 218, position: "sticky", top: 24, borderRight: "1px solid #C8C2B4" }}>

            {/* Header — same dark bar as "By the Numbers" on homepage */}
            <div style={{ background: "#1A1208", padding: "10px 14px", marginTop: 28 }}>
              <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                Filter by Edition
              </p>
            </div>

            {/* Month buttons */}
            <div style={{ border: "1px solid #C8C2B4", borderTop: "none" }}>
              {MONTHS.map(m => (
                <button key={m.key} onClick={() => { setActiveMonth(m.key); setVisibleCount(PAGE_SIZE) }}
                  className={`month-btn ${activeMonth === m.key ? "active" : ""}`}>
                  <span className="mbl">{m.label}</span>
                  <span className="mbc">{monthCount(m.key)}</span>
                </button>
              ))}
            </div>

            {/* Archive stats — same "By the Numbers" DL grid */}
            <div style={{ border: "1px solid #C8C2B4", borderTop: "none" }}>
              <div style={{ background: "#F3EFE5", padding: "9px 14px", borderBottom: "1px solid #D8D2C4" }}>
                <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#8C7D65]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Archive Stats
                </p>
              </div>
              <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                {[
                  { l: "Stories", v: ALL_STORIES.length + "+" },
                  { l: "Editions", v: (MONTHS.length - 1) + "" },
                  { l: "Sectors", v: "10+" },
                  { l: "Since", v: "2026" },
                ].map((s, i) => (
                  <div key={i} className="px-3 py-3" style={{ borderColor: "#D8D2C4" }}>
                    <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.14em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                    <dd className="pf font-black text-[#1A1208]" style={{ fontSize: "1.2rem", lineHeight: 1 }}>{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Nav links */}
            <div style={{ paddingTop: 14 }}>
              {[
                { l: "← Back to Chronicle", h: "/" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Submit Your Startup", h: "/submit" },
              ].map(lnk => (
                <Link key={lnk.h} href={lnk.h}
                  className="flex items-center justify-between py-2.5 hover:text-[#1A1208] transition-colors"
                  style={{ borderBottom: "1px solid #D8D2C4", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".14em", color: "#8C7D65", textDecoration: "none", fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </aside>

          {/* ═══ MAIN ═══ */}
          <div className="flex-1 min-w-0 lg:pl-8 pt-7">

            {/* Section head — same .sh pattern */}
            <div className="flex items-center gap-3 mb-6 pb-5" style={{ borderBottom: "2px solid #1A1208" }}>
              <div>
                <p className="text-[8px] tracking-[0.3em] uppercase text-[#AAA] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {activeMonth === "all" ? "Complete Archive" : "Edition"}
                </p>
                <p className="pf font-black text-[#1A1208]" style={{ fontSize: "clamp(1.3rem,3vw,2rem)", lineHeight: 1 }}>
                  {MONTHS.find(m => m.key === activeMonth)?.label}
                </p>
              </div>
              <div className="flex-1 h-px" style={{ background: "#C8C2B4" }} />
              <p className="text-[9px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>
                {filtered.length} {filtered.length === 1 ? "story" : "stories"}
              </p>
            </div>

            {/* ═══════════════════════════════════════
                THUMBNAIL GRID
                Exact same markup as homepage "All Stories in This Edition"
                grid — just larger thumbnails (180px height vs 116px)
                and with extra text fields below
            ═══════════════════════════════════════ */}
            <section aria-label="Archive stories">
              <div
                className="story-in"
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(195px, 1fr))",
                  border: "1.5px solid #1A1208",
                  background: "#1A1208",
                  gap: "1.5px",
                }}
              >
                {visible.map((s, i) => (
                  <Link
                    key={s.slug + i}
                    href={`/startup/${s.slug}`}
                    className="arc-card"
                    style={{ animationDelay: `${(i % PAGE_SIZE) * 0.04}s` }}
                    aria-label={`${s.nameShort} — ${s.company}`}
                  >
                    {/* Photo — same as homepage thumbnail, slightly taller */}
                    <div
                      className="relative w-full overflow-hidden"
                      style={{
                        height: 160,
                        borderTop: `3px solid ${s.accent}`,
                        background: s.accentBg,
                      }}
                    >
                      <FounderPhoto
                        src={s.imgSrc} alt={`${s.nameShort}, ${s.company} founder`}
                        initials={s.initials} accent={s.accent} accentBg={s.accentBg}
                        className="absolute inset-0 w-full h-full"
                      />
                      {/* Edition badge — same as homepage */}
                      <div className="absolute top-2 left-2"
                        style={{ background: "#1A1208", color: "white", fontSize: 7, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "2px 7px", fontFamily: "system-ui,sans-serif" }}>
                        {s.edition}
                      </div>
                      {/* Month badge */}
                      <div className="absolute top-2 right-2"
                        style={{ background: "rgba(26,18,8,.7)", color: "rgba(255,255,255,.5)", fontSize: 6.5, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "2px 6px", border: "1px solid rgba(255,255,255,.1)", fontFamily: "system-ui,sans-serif" }}>
                        {s.month}
                      </div>
                    </div>

                    {/* Text — same label hierarchy as homepage thumbnails + extra info */}
                    <div style={{ padding: "12px 13px 14px", flex: 1, display: "flex", flexDirection: "column" }}>

                      {/* Category — same accent colour label */}
                      <p className="text-[8.5px] font-black uppercase tracking-wider mb-0.5"
                        style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                        {s.edition} · {s.category}
                      </p>

                      {/* Name — pf font bold, same as homepage */}
                      <p className="pf font-bold text-[#1A1208] leading-snug mb-0.5" style={{ fontSize: 13.5 }}>
                        {s.nameShort}
                      </p>

                      {/* Company */}
                      <p className="text-[9.5px] text-[#AAA] mb-2.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {s.company}
                      </p>

                      {/* Headline — same serif body text */}
                      <p className="leading-[1.72] text-[#2C2010] mb-3 flex-1"
                        style={{
                          fontSize: "11.5px",
                          fontFamily: "'Georgia','Times New Roman',serif",
                          display: "-webkit-box",
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}>
                        {s.headline}
                      </p>

                      {/* Rule */}
                      <div style={{ height: 1, background: "#D8D2C4", marginBottom: 8 }} />

                      {/* Stats — same "By the Numbers" 2×1 grid */}
                      <div className="grid grid-cols-2 gap-1 mb-2.5">
                        {s.stats.slice(0, 2).map((st, si) => (
                          <div key={si}>
                            <p className="text-[7px] text-[#AAA] uppercase tracking-[0.14em]"
                              style={{ fontFamily: "system-ui,sans-serif" }}>{st.l}</p>
                            <p className="pf font-black text-[#1A1208]" style={{ fontSize: "0.9rem", lineHeight: 1.2 }}>{st.v}</p>
                          </div>
                        ))}
                      </div>

                      {/* Lesson + arrow — same "The Lesson" box feel */}
                      <div className="flex items-center justify-between pt-2.5" style={{ borderTop: "1px solid #D8D2C4" }}>
                        <p className="italic text-[10px] text-[#8C7D65] leading-snug flex-1 pr-2"
                          style={{ fontFamily: "'Georgia',serif", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          "{s.lesson}"
                        </p>
                        <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: s.accent }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ═══ LOAD MORE / END STATE ═══ */}
            <div className="flex flex-col items-center gap-4 mt-10">
              {hasMore && (
                <button className="load-btn" onClick={() => setVisibleCount(c => c + PAGE_SIZE)}>
                  Load More Stories
                  <span style={{ opacity: .4, fontSize: 9 }}>· {filtered.length - visibleCount} remaining</span>
                </button>
              )}
              {!hasMore && visible.length > 0 && (
                <p className="text-[9px] uppercase tracking-widest text-[#BBB0A0]"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  ✦ All {filtered.length} stories shown ✦
                </p>
              )}
            </div>

            {/* ═══ INSIGHT STRIP — same 3-box as homepage ═══ */}
            <section className="mt-12 pt-8" style={{ borderTop: "2px solid #1A1208" }}>
              <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
                style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Founder Insights</p>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { v: "~80%", l: "First-generation founders", b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying." },
                  { v: "$950B", l: "Value created by under-40s", b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing." },
                  { v: "126", l: "Unicorns — and rising", b: "India just crossed 126 unicorns. The founders reading these stories today will build the next 126. UpForge exists to help them get discovered." },
                ].map((item, i) => (
                  <div key={i} className="p-4" style={{ background: "white", border: "1px solid #D8D2C4" }}>
                    <p className="pf font-black text-[#1A1208] leading-none mb-1" style={{ fontSize: "2.1rem" }}>{item.v}</p>
                    <p className="text-[8px] font-black uppercase tracking-[0.18em] mb-2.5"
                      style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{item.l}</p>
                    <p className="text-[11.5px] leading-relaxed" style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>{item.b}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ═══ FOOTER CTA — same as homepage ═══ */}
            <section className="pt-8 mt-8 grid sm:grid-cols-2 gap-6 items-center"
              style={{ borderTop: "1px solid #C8C2B4" }}>
              <div>
                <p className="text-[8.5px] font-black uppercase tracking-[0.24em] mb-2.5"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>UpForge Registry</p>
                <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "1.3rem" }}>
                  Your founder story starts with a verified profile.
                </p>
                <p className="text-[12px] leading-relaxed" style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
                  Get independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <Link href="/submit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                  List Your Startup — Free <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>

            {/* ═══ FOOTER — same as homepage ═══ */}
            <footer className="mt-8 pb-2">
              <p className="text-[9px] leading-relaxed"
                style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}>
                * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn, and company announcements as of March 2026.
                UpForge is an independent registry — no paid placements, no sponsored rankings.
              </p>
              <nav aria-label="Footer navigation" className="mt-4">
                <ul className="flex flex-wrap gap-x-4 gap-y-2">
                  {[
                    { l: "Indian Startup Founders", h: "/" },
                    { l: "Startup Registry India", h: "/startup" },
                    { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                    { l: "Top AI Startups", h: "/top-ai-startups" },
                    { l: "Submit Startup", h: "/submit" },
                  ].map(lnk => (
                    <li key={lnk.h}>
                      <Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                        style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </footer>

          </div>
        </div>
      </main>
    </div>
  )
}
