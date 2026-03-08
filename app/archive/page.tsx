"use client"

// app/archive/page.tsx
// THE FOUNDER CHRONICLE — Archive Page

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft, ArrowUpRight, BookOpen, Calendar, Filter, X } from "lucide-react"

// ── REUSE same FOUNDERS data structure ─────────────────────────────
const ALL_STORIES = [
  {
    no: "01", edition: "No. 01",
    month: "March 2026", monthKey: "march-2026",
    category: "EDTECH",
    name: "Alakh Pandey",
    nameShort: "Alakh Pandey",
    initials: "AP",
    company: "PhysicsWallah", slug: "physicswallah",
    role: "Founder & CEO",
    city: "Prayagraj, UP",
    valuation: "$2.8B", funding: "$700M", founded: "2014",
    imgSrc: "https://i0.wp.com/globalkashmir.net/wp-content/uploads/2024/08/Physicswallah.jpg",
    accent: "#059669", accentBg: "#ECFDF5", accentBorder: "#A7F3D0",
    headline: "BYJU's charged ₹80,000 for what he taught for ₹2,000. That wasn't a mission — it was just obviously the right thing to do.",
    deck: "Alakh Pandey disrupted Indian edtech without a Harvard MBA or a term sheet — just a bedroom camera and an impossibly fair price.",
    lesson: "Affordability is not a positioning strategy. It can be the entire moat.",
    tags: ["EdTech", "Bootstrapped", "Unicorn"],
  },
  {
    no: "02", edition: "No. 02",
    month: "March 2026", monthKey: "march-2026",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders",
    city: "Bengaluru",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
    imgSrc: "https://i.ytimg.com/vi/HBSOii00H68/maxresdefault.jpg",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    deck: "Aadit Palicha and Kaivalya Vohra built India's fastest unicorn by failing first, then solving the logistics math nobody else wanted to.",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    tags: ["Quick Commerce", "D2C", "Stanford"],
  },
  {
    no: "03", edition: "No. 03",
    month: "March 2026", monthKey: "march-2026",
    category: "FOODTECH",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "Zomato / Eternal", slug: "zomato",
    role: "Founder & CEO",
    city: "Delhi",
    valuation: "$33B", funding: "$3.2B+", founded: "2008",
    imgSrc: "https://pbs.twimg.com/media/GSiTEQ2WcAAwE4b.png",
    accent: "#DC2626", accentBg: "#FFF1F2", accentBorder: "#FECDD3",
    headline: "#1 on Hurun India 2025. Zomato is worth ₹3.2 lakh crore. It started as scanned restaurant menus.",
    deck: "Deepinder Goyal tops India's self-made entrepreneur rankings. The Zomato story is 17 years of pivots.",
    lesson: "The company that survives is rarely the one that started. It's the one that kept reinventing.",
    tags: ["FoodTech", "IPO", "Profitability"],
  },
  {
    no: "04", edition: "No. 04",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH",
    name: "Nithin Kamath",
    nameShort: "Nithin Kamath",
    initials: "NK",
    company: "Zerodha", slug: "zerodha",
    role: "Founder & CEO",
    city: "Bengaluru",
    valuation: "$8.2B", funding: "Bootstrapped", founded: "2010",
    imgSrc: "https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
    headline: "He dropped out at 17 to trade stocks. Never took a rupee of VC. Zerodha is India's largest stockbroker.",
    deck: "Nithin Kamath built India's largest brokerage without a single outside investor or celebrity ad.",
    lesson: "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to.",
    tags: ["FinTech", "Bootstrapped", "Profitable"],
  },
  {
    no: "05", edition: "No. 05",
    month: "March 2026", monthKey: "march-2026",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar",
    nameShort: "Falguni Nayar",
    initials: "FN",
    company: "Nykaa", slug: "nykaa",
    role: "Founder & CEO",
    city: "Mumbai",
    valuation: "$2.5B", funding: "Bootstrapped to IPO", founded: "2012",
    imgSrc: "https://i.cdn.newsbytesapp.com/images/l12420211110152610.jpeg",
    accent: "#C026D3", accentBg: "#FDF4FF", accentBorder: "#E879F9",
    headline: "She left a 20-year banking career at 50 to build India's first profitable unicorn.",
    deck: "Falguni Nayar built India's first woman-founded company to IPO — and proved the best founders sometimes take the longest to begin.",
    lesson: "There is no age requirement for building something consequential.",
    tags: ["D2C", "Beauty", "IPO", "Women Founders"],
  },
  {
    no: "06", edition: "No. 06",
    month: "March 2026", monthKey: "march-2026",
    category: "HOSPITALITY",
    name: "Ritesh Agarwal",
    nameShort: "Ritesh Agarwal",
    initials: "RA",
    company: "OYO", slug: "oyo",
    role: "Founder & CEO",
    city: "Gurgaon",
    valuation: "$10B+", funding: "$3B+", founded: "2013",
    imgSrc: "",
    accent: "#DC2626", accentBg: "#FEF2F2", accentBorder: "#FCA5A5",
    headline: "At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.",
    deck: "Ritesh Agarwal built OYO after travelling across India and seeing the chaos in budget hotels.",
    lesson: "Start young. Learn fast. Scale relentlessly.",
    tags: ["Hospitality", "Global", "Youth"],
  },
  {
    no: "07", edition: "No. 07",
    month: "March 2026", monthKey: "march-2026",
    category: "MOBILITY",
    name: "Bhavish Aggarwal",
    nameShort: "Bhavish Aggarwal",
    initials: "BA",
    company: "Ola", slug: "ola",
    role: "Co-Founder & CEO",
    city: "Bangalore",
    valuation: "$7B+", funding: "$4B+", founded: "2010",
    imgSrc: "",
    accent: "#EA580C", accentBg: "#FFF7ED", accentBorder: "#FDBA74",
    headline: "A single bad taxi ride inspired him to build one of India's largest mobility platforms.",
    deck: "Bhavish Aggarwal founded Ola after a frustrating cab experience — and went on to build a transportation network.",
    lesson: "Some of the biggest companies start with solving a personal problem.",
    tags: ["Mobility", "EV", "Transport"],
  },
  {
    no: "08", edition: "No. 08",
    month: "March 2026", monthKey: "march-2026",
    category: "CAREER / STUDENT PLATFORM",
    name: "Lucky Tiwari",
    nameShort: "Lucky Tiwari",
    initials: "LT",
    company: "InternAdda", slug: "internadda",
    role: "Founder",
    city: "India",
    valuation: "Private", funding: "Bootstrapped", founded: "2020",
    imgSrc: "/luckyinternadda.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#93C5FD",
    headline: "He is building InternAdda to make internships and career opportunities accessible to every student in India.",
    deck: "InternAdda bridges the gap between students and real-world startup opportunities across India.",
    lesson: "Sometimes the best startups are built by solving problems you personally faced.",
    tags: ["EdTech", "Careers", "Students", "Bootstrapped"],
  },
  {
    no: "09", edition: "No. 09",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH",
    name: "Kunal Shah",
    nameShort: "Kunal Shah",
    initials: "KS",
    company: "CRED", slug: "cred",
    role: "Founder & CEO",
    city: "Bangalore",
    valuation: "$6B+", funding: "$800M+", founded: "2018",
    imgSrc: "",
    accent: "#111827", accentBg: "#F3F4F6", accentBorder: "#9CA3AF",
    headline: "He built CRED by rewarding people for paying their credit card bills on time.",
    deck: "Kunal Shah is known for deep thinking on consumer behaviour. After selling FreeCharge, he launched CRED.",
    lesson: "Understand human behaviour better than technology.",
    tags: ["FinTech", "Premium", "Consumer"],
  },
  {
    no: "10", edition: "No. 10",
    month: "March 2026", monthKey: "march-2026",
    category: "FINTECH / PAYMENTS",
    name: "Vijay Shekhar Sharma",
    nameShort: "Vijay Sharma",
    initials: "VS",
    company: "Paytm", slug: "paytm",
    role: "Founder & CEO",
    city: "Noida",
    valuation: "$16B+", funding: "$3B+", founded: "2010",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s",
    accent: "#0284C7", accentBg: "#EFF6FF", accentBorder: "#7DD3FC",
    headline: "From a small recharge website to India's largest digital payments ecosystem.",
    deck: "Vijay Shekhar Sharma built Paytm to simplify mobile payments in India, becoming one of the biggest fintech platforms.",
    lesson: "Persistence beats privilege.",
    tags: ["FinTech", "Payments", "IPO"],
  },
  // ── APRIL 2026 (placeholder — shows the month system works) ──
  {
    no: "11", edition: "No. 11",
    month: "April 2026", monthKey: "april-2026",
    category: "HEALTHTECH",
    name: "Ghazal Alagh",
    nameShort: "Ghazal Alagh",
    initials: "GA",
    company: "Mamaearth", slug: "mamaearth",
    role: "Co-Founder & CIO",
    city: "Gurgaon",
    valuation: "$1.2B", funding: "$52M", founded: "2016",
    imgSrc: "https://images.moneycontrol.com/static-mcnews/2023/09/ghazal-alagh-mamaearth.jpg",
    accent: "#16A34A", accentBg: "#F0FDF4", accentBorder: "#86EFAC",
    headline: "She built India's first profitable direct-to-consumer personal care unicorn — starting from a problem her own child faced.",
    deck: "Ghazal Alagh co-founded Mamaearth with Varun Alagh after struggling to find toxin-free baby products in India.",
    lesson: "The most authentic brands are built by founders who are also customers.",
    tags: ["D2C", "FMCG", "IPO", "Women Founders"],
  },
  {
    no: "12", edition: "No. 12",
    month: "April 2026", monthKey: "april-2026",
    category: "B2B SAAS",
    name: "Girish Mathrubootham",
    nameShort: "Girish Mathrubootham",
    initials: "GM",
    company: "Freshworks", slug: "freshworks",
    role: "Founder & CEO",
    city: "Chennai",
    valuation: "$3B+", funding: "$490M+", founded: "2010",
    imgSrc: "https://www.freshworks.com/static-assets/images/freshworks-journey/girish.jpg",
    accent: "#0D9488", accentBg: "#F0FDFA", accentBorder: "#99F6E4",
    headline: "He built a global SaaS giant from Chennai — and proved Indian software companies can compete with Silicon Valley.",
    deck: "Girish Mathrubootham founded Freshworks after a frustrating customer support experience — and built India's second NASDAQ-listed SaaS company.",
    lesson: "World-class software doesn't require a Bay Area zip code.",
    tags: ["SaaS", "B2B", "NASDAQ", "Chennai"],
  },
]

const MONTHS = [
  { key: "all", label: "All Editions" },
  { key: "march-2026", label: "March 2026" },
  { key: "april-2026", label: "April 2026" },
]

const CATEGORIES = ["All", "FinTech", "EdTech", "D2C", "SaaS", "FoodTech", "Mobility", "HealthTech"]

const PAGE_SIZE = 10

function FounderPhoto({
  src, alt, initials, accent, accentBg, className = "", style = {}
}: {
  src: string; alt: string; initials: string
  accent: string; accentBg: string
  className?: string; style?: React.CSSProperties
}) {
  const [failed, setFailed] = useState(false)
  const show = src && !failed

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accentBg, ...style }}>
      {show && (
        <img
          src={src} alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-black text-white"
            style={{ fontSize: "2.2rem", fontFamily: "Georgia,serif", background: accent, width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            {initials}
          </span>
        </div>
      )}
    </div>
  )
}

export default function ArchivePage() {
  const [activeMonth, setActiveMonth] = useState("all")
  const [activeCategory, setActiveCategory] = useState("All")
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [menuOpen, setMenuOpen] = useState(false)
  const [layout, setLayout] = useState<"grid" | "list">("grid")

  // Filter
  const filtered = ALL_STORIES.filter(s => {
    const monthMatch = activeMonth === "all" || s.monthKey === activeMonth
    const catMatch = activeCategory === "All" ||
      s.tags.some(t => t.toLowerCase().includes(activeCategory.toLowerCase())) ||
      s.category.toLowerCase().includes(activeCategory.toLowerCase())
    return monthMatch && catMatch
  })

  const visible = filtered.slice(0, visibleCount)
  const hasMore = visibleCount < filtered.length
  const totalEditions = ALL_STORIES.length
  const monthCounts: Record<string, number> = {}
  ALL_STORIES.forEach(s => {
    monthCounts[s.monthKey] = (monthCounts[s.monthKey] || 0) + 1
  })

  return (
    <div style={{ minHeight: "100vh", background: "#F5F1E8", fontFamily: "'Georgia','Times New Roman',serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        :root {
          --parch: #F5F1E8; --parch2: #EDE9DF; --ink: #1A1208;
          --ink3: #5A4A30; --ink4: #8C7D65; --ink5: #BBB0A0;
          --rule: #C8C2B4; --rule2: #D8D2C4;
          --gold: #B45309; --gold2: #D97706; --white: #FDFCF9;
        }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(8px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fade-in { animation: fadeUp .35s ease both; }

        /* month sidebar */
        .month-pill {
          display: flex; align-items: center; gap: 8px;
          padding: 9px 14px; font-size: 9px; font-weight: 700;
          text-transform: uppercase; letter-spacing: .18em;
          color: var(--ink4); background: transparent;
          border: 1px solid var(--rule2); cursor: pointer;
          transition: all .15s; font-family: system-ui,sans-serif;
          width: 100%; text-align: left;
        }
        .month-pill:hover { border-color: var(--ink); color: var(--ink); }
        .month-pill.active { background: var(--ink); color: white; border-color: var(--ink); }
        .month-pill .count {
          margin-left: auto; font-size: 8px; opacity: .6;
        }

        /* category chip */
        .cat-chip {
          display: inline-flex; align-items: center; gap: 4px;
          padding: 4px 12px; font-size: 8.5px; font-weight: 700;
          text-transform: uppercase; letter-spacing: .12em;
          border: 1px solid var(--rule2); background: var(--white);
          color: var(--ink4); cursor: pointer; white-space: nowrap;
          transition: all .15s; font-family: system-ui,sans-serif;
        }
        .cat-chip:hover { border-color: var(--ink); color: var(--ink); }
        .cat-chip.active { background: var(--ink); color: white; border-color: var(--ink); }

        /* GRID card */
        .arc-card {
          background: var(--white); position: relative; overflow: hidden;
          text-decoration: none; display: flex; flex-direction: column;
          transition: transform .15s, box-shadow .15s;
        }
        .arc-card::before {
          content:''; position:absolute; top:0; left:0; right:0;
          height:3px; transition: background .15s;
        }
        .arc-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); z-index:1; }
        .arc-card:hover::before { background: var(--gold2) !important; }

        /* LIST row */
        .arc-row {
          display: flex; align-items: stretch; background: var(--white);
          text-decoration: none; position: relative; overflow:hidden;
          transition: background .15s;
          border-bottom: 1px solid var(--rule2);
        }
        .arc-row::before {
          content:''; position:absolute; top:0; left:0; bottom:0;
          width:3px; background: transparent; transition: background .15s;
        }
        .arc-row:hover { background: #FEFCF5; }
        .arc-row:hover::before { background: var(--gold2); }

        /* load more */
        .load-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 28px; border: 1.5px solid var(--ink);
          background: transparent; color: var(--ink);
          font-size: 10px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .14em; cursor: pointer; transition: all .15s;
          font-family: system-ui,sans-serif;
        }
        .load-btn:hover { background: var(--ink); color: white; }

        /* hamburger menu overlay */
        .filter-overlay {
          position: fixed; inset: 0; z-index: 50;
          background: rgba(26,18,8,.55); backdrop-filter: blur(2px);
        }
        .filter-panel {
          position: fixed; top:0; left:0; bottom:0; width: min(320px,90vw);
          background: var(--parch); z-index:51; overflow-y: auto;
          border-right: 2px solid var(--ink);
        }

        /* scroll strip */
        .scroll-x { overflow-x:auto; scrollbar-width:none; }
        .scroll-x::-webkit-scrollbar { display:none; }

        @media (max-width:1024px) { .sidebar { display:none; } }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <nav className="sf" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
          <ol style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", listStyle:"none", margin:0, padding:0, fontFamily:"system-ui,sans-serif" }}>
            <li><Link href="/" style={{ color:"var(--ink5)", textDecoration:"none" }}>UpForge</Link></li>
            <li style={{ color:"var(--rule)" }}>/</li>
            <li style={{ color:"var(--ink4)", fontWeight:700 }}>Archive</li>
          </ol>
        </div>
      </nav>

      {/* ══════════════════════════════
          MASTHEAD
      ══════════════════════════════ */}
      <header style={{ background:"var(--parch)", borderBottom:"3px solid var(--ink)" }}>
        <div style={{ maxWidth:1340, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>

          {/* Top bar */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", padding:"9px 0", borderBottom:"1px solid var(--rule2)", flexWrap:"wrap", gap:8, fontFamily:"system-ui,sans-serif" }}>
            <div style={{ display:"flex", gap:14, alignItems:"center" }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"#22C55E", flexShrink:0 }} />
              <span style={{ fontSize:8.5, color:"#15803D", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.16em" }}>
                Live Archive
              </span>
              <span style={{ fontSize:8.5, color:"var(--ink5)", letterSpacing:"0.1em" }}>
                {totalEditions} founder stories indexed
              </span>
            </div>
            <div style={{ display:"flex", gap:12, alignItems:"center", fontFamily:"system-ui,sans-serif" }}>
              <Link href="/" style={{ fontSize:8.5, color:"var(--ink4)", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:700, textDecoration:"none" }}>← Chronicle</Link>
              <Link href="/startup" style={{ fontSize:8.5, color:"var(--ink4)", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:700, textDecoration:"none" }}>Registry</Link>
            </div>
          </div>

          {/* Nameplate */}
          <div style={{ textAlign:"center", padding:"clamp(22px,3.5vw,44px) 0 clamp(14px,2.5vw,24px)", borderBottom:"1px solid var(--rule2)" }}>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:14, marginBottom:14 }}>
              <div style={{ height:1, width:52, background:"var(--rule)" }} />
              <span style={{ fontSize:8, letterSpacing:"0.42em", textTransform:"uppercase", color:"var(--ink5)", fontWeight:700, fontFamily:"system-ui,sans-serif" }}>
                UpForge · The Founder Chronicle
              </span>
              <div style={{ height:1, width:52, background:"var(--rule)" }} />
            </div>
            <h1 className="pf" style={{ fontSize:"clamp(2.4rem,6.5vw,5.2rem)", fontWeight:900, lineHeight:.9, color:"var(--ink)", letterSpacing:"-0.025em", marginBottom:14 }}>
              The Archive
            </h1>
            <p style={{ fontSize:"clamp(12px,1.6vw,15px)", fontStyle:"italic", color:"var(--ink4)" }}>
              Every founder story. Every edition. Indexed and searchable.
            </p>
          </div>

          {/* Stats bar */}
          <div style={{ display:"flex", background:"var(--ink)", marginTop:0, overflow:"hidden" }}>
            {[
              { v: totalEditions + "+", l:"Stories Published" },
              { v: MONTHS.length - 1 + "", l:"Editions" },
              { v:"10+", l:"Sectors Covered" },
              { v:"Free", l:"Forever" },
            ].map((s,i) => (
              <div key={i} style={{ padding:"11px 22px", borderRight:"1px solid rgba(255,255,255,.07)", flex:1, textAlign:"center", minWidth:80 }}>
                <p className="pf" style={{ fontSize:"1.2rem", fontWeight:900, color:"white", lineHeight:1, marginBottom:3 }}>{s.v}</p>
                <p style={{ fontSize:7.5, color:"rgba(255,255,255,.3)", textTransform:"uppercase", letterSpacing:"0.16em", fontFamily:"system-ui,sans-serif" }}>{s.l}</p>
              </div>
            ))}
          </div>

        </div>
      </header>

      {/* ══════════════════════════════
          BODY: SIDEBAR + CONTENT
      ══════════════════════════════ */}
      <div style={{ maxWidth:1340, margin:"0 auto", padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>
        <div style={{ display:"grid", gridTemplateColumns:"240px 1fr", gap:28, alignItems:"start", marginTop:28 }}>

          {/* ════ LEFT SIDEBAR ════ */}
          <aside className="sidebar" style={{ position:"sticky", top:24 }}>

            {/* Month filter — newspaper section header feel */}
            <div style={{ border:"1.5px solid var(--ink)", marginBottom:16 }}>
              <div style={{ background:"var(--ink)", padding:"10px 14px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                  <Calendar style={{ width:10, height:10, color:"rgba(255,255,255,.4)" }} />
                  <span style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.26em", color:"rgba(255,255,255,.5)", fontFamily:"system-ui,sans-serif" }}>
                    Filter by Edition
                  </span>
                </div>
              </div>
              <div style={{ padding:"6px 8px", background:"var(--white)" }}>
                {MONTHS.map((m) => (
                  <button
                    key={m.key}
                    className={`month-pill ${activeMonth === m.key ? "active" : ""}`}
                    onClick={() => { setActiveMonth(m.key); setVisibleCount(PAGE_SIZE); }}
                    style={{ marginBottom:4 }}
                  >
                    {m.key === "all"
                      ? <BookOpen style={{ width:9, height:9 }} />
                      : <Calendar style={{ width:9, height:9 }} />
                    }
                    {m.label}
                    <span className="count">
                      {m.key === "all" ? ALL_STORIES.length : (monthCounts[m.key] || 0)}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Category filter */}
            <div style={{ border:"1.5px solid var(--rule2)", background:"var(--white)" }}>
              <div style={{ background:"var(--parch2)", padding:"10px 14px", borderBottom:"1px solid var(--rule2)" }}>
                <div style={{ display:"flex", alignItems:"center", gap:7 }}>
                  <Filter style={{ width:10, height:10, color:"var(--ink5)" }} />
                  <span style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.26em", color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>
                    Filter by Sector
                  </span>
                </div>
              </div>
              <div style={{ padding:"8px 10px", display:"flex", flexDirection:"column", gap:5 }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => { setActiveCategory(cat); setVisibleCount(PAGE_SIZE); }}
                    style={{
                      display:"flex", alignItems:"center", justifyContent:"space-between",
                      padding:"8px 10px", fontSize:9, fontWeight:700,
                      textTransform:"uppercase", letterSpacing:".12em",
                      color: activeCategory === cat ? "white" : "var(--ink4)",
                      background: activeCategory === cat ? "var(--ink)" : "transparent",
                      border: activeCategory === cat ? "1px solid var(--ink)" : "1px solid transparent",
                      cursor:"pointer", fontFamily:"system-ui,sans-serif",
                      transition:"all .13s",
                    }}
                  >
                    {cat}
                    {activeCategory === cat && <X style={{ width:8, height:8 }} />}
                  </button>
                ))}
              </div>
            </div>

            {/* Edition info */}
            <div style={{ marginTop:16, padding:"14px", border:"1px solid var(--rule2)", background:"var(--white)" }}>
              <p style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--gold2)", marginBottom:8, fontFamily:"system-ui,sans-serif" }}>
                About the Archive
              </p>
              <p style={{ fontSize:11.5, color:"var(--ink3)", lineHeight:1.75 }}>
                The Founder Chronicle is published monthly. Each edition profiles 10 verified Indian startup founders.
              </p>
              <Link href="/startup" style={{ display:"inline-flex", alignItems:"center", gap:5, marginTop:10, fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", color:"var(--ink)", textDecoration:"none", fontFamily:"system-ui,sans-serif" }}>
                Full Registry <ChevronRight style={{ width:8, height:8 }} />
              </Link>
            </div>

          </aside>

          {/* ════ MAIN CONTENT ════ */}
          <main>

            {/* Toolbar */}
            <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", marginBottom:18, flexWrap:"wrap", gap:10 }}>
              <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                {/* Mobile hamburger filter */}
                <button
                  onClick={() => setMenuOpen(true)}
                  style={{ display:"none", alignItems:"center", gap:6, padding:"7px 13px", border:"1.5px solid var(--ink)", background:"transparent", cursor:"pointer", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", fontFamily:"system-ui,sans-serif", color:"var(--ink)" }}
                  className="lg:hidden"
                  aria-label="Open filters"
                >
                  <Filter style={{ width:10, height:10 }} />
                  Filter
                </button>

                <span style={{ fontSize:8.5, color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>
                  {filtered.length} {filtered.length === 1 ? "story" : "stories"}
                  {activeMonth !== "all" && ` · ${MONTHS.find(m=>m.key===activeMonth)?.label}`}
                  {activeCategory !== "All" && ` · ${activeCategory}`}
                </span>
              </div>

              {/* Category chips (scrollable) */}
              <div className="scroll-x" style={{ display:"flex", gap:6 }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`cat-chip ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => { setActiveCategory(cat); setVisibleCount(PAGE_SIZE); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Layout toggle */}
              <div style={{ display:"flex", gap:0, border:"1px solid var(--rule2)", overflow:"hidden" }}>
                {(["grid","list"] as const).map(l => (
                  <button
                    key={l}
                    onClick={() => setLayout(l)}
                    style={{ padding:"6px 12px", fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", cursor:"pointer", fontFamily:"system-ui,sans-serif", background: layout===l ? "var(--ink)" : "var(--white)", color: layout===l ? "white" : "var(--ink4)", border:"none" }}
                  >
                    {l === "grid" ? "▦" : "☰"} {l}
                  </button>
                ))}
              </div>
            </div>

            {/* Month header pill */}
            {activeMonth !== "all" && (
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:18 }}>
                <span style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:".28em", color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>
                  Edition
                </span>
                <div style={{ flex:1, height:1, background:"var(--rule2)" }} />
                <span className="pf" style={{ fontSize:"1.1rem", fontWeight:700, color:"var(--ink)" }}>
                  {MONTHS.find(m=>m.key===activeMonth)?.label}
                </span>
                <div style={{ flex:1, height:1, background:"var(--rule2)" }} />
                <button onClick={() => setActiveMonth("all")} style={{ fontSize:9, color:"var(--ink5)", background:"none", border:"none", cursor:"pointer", fontFamily:"system-ui,sans-serif" }}>
                  Clear ×
                </button>
              </div>
            )}

            {/* ── GRID LAYOUT ── */}
            {layout === "grid" && (
              <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(220px,1fr))", border:"1.5px solid var(--ink)", background:"var(--ink)", gap:1.5 }}>
                {visible.map((s, i) => (
                  <Link
                    key={s.slug + i}
                    href={`/startup/${s.slug}`}
                    className="arc-card fade-in"
                    style={{ "--card-accent": s.accent } as React.CSSProperties}
                  >
                    {/* Accent top */}
                    <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:s.accent }} />

                    {/* Image */}
                    <div style={{ height:130, position:"relative", borderBottom:"1px solid var(--rule2)", marginTop:3 }}>
                      <FounderPhoto
                        src={s.imgSrc} alt={s.name}
                        initials={s.initials} accent={s.accent} accentBg={s.accentBg}
                        className="absolute inset-0 w-full h-full"
                      />
                      {/* Overlay */}
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.75) 0%,transparent 55%)" }} />
                      {/* Edition badge */}
                      <div style={{ position:"absolute", top:10, left:10, background:"var(--ink)", color:"white", fontSize:7, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", padding:"2px 8px", fontFamily:"system-ui,sans-serif" }}>
                        {s.edition}
                      </div>
                      {/* Month badge */}
                      <div style={{ position:"absolute", top:10, right:10, background:"rgba(26,18,8,.65)", color:"rgba(255,255,255,.6)", fontSize:7, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"2px 7px", border:"1px solid rgba(255,255,255,.1)", fontFamily:"system-ui,sans-serif" }}>
                        {s.month}
                      </div>
                      {/* Name on image */}
                      <div style={{ position:"absolute", bottom:10, left:12 }}>
                        <span style={{ fontSize:7.5, fontWeight:700, color:"rgba(255,255,255,.5)", textTransform:"uppercase", letterSpacing:"0.14em", display:"block", marginBottom:3, fontFamily:"system-ui,sans-serif" }}>{s.category}</span>
                        <span className="pf" style={{ fontSize:"0.92rem", fontWeight:700, color:"white", lineHeight:1.15 }}>{s.name}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div style={{ padding:"13px 14px 14px", flex:1, display:"flex", flexDirection:"column" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
                        <span style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:s.accent, fontFamily:"system-ui,sans-serif" }}>
                          {s.company}
                        </span>
                        <div style={{ flex:1, height:1, background:"var(--rule2)" }} />
                        <span style={{ fontSize:7.5, color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>{s.founded}</span>
                      </div>

                      <p className="pf" style={{ fontSize:"0.83rem", fontWeight:700, color:"var(--ink)", lineHeight:1.25, marginBottom:8, flex:1, display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical" as const, overflow:"hidden" }}>
                        {s.headline}
                      </p>

                      {/* Tags */}
                      <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:10 }}>
                        {s.tags.slice(0,2).map(tag => (
                          <span key={tag} style={{ fontSize:7, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em", color:"var(--ink4)", border:"1px solid var(--rule2)", padding:"2px 6px", fontFamily:"system-ui,sans-serif" }}>
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Footer */}
                      <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", paddingTop:10, borderTop:"1px solid var(--rule2)" }}>
                        <div>
                          <p style={{ fontSize:7.5, color:"var(--ink5)", marginBottom:1, fontFamily:"system-ui,sans-serif" }}>Valuation</p>
                          <p className="pf" style={{ fontSize:"0.95rem", fontWeight:900, color:"var(--ink)", lineHeight:1 }}>{s.valuation}</p>
                        </div>
                        <ArrowUpRight style={{ width:12, height:12, color:"var(--ink5)" }} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* ── LIST LAYOUT ── */}
            {layout === "list" && (
              <div style={{ border:"1.5px solid var(--ink)" }}>
                {visible.map((s, i) => (
                  <Link
                    key={s.slug + i}
                    href={`/startup/${s.slug}`}
                    className="arc-row fade-in"
                  >
                    {/* Accent left stripe */}
                    <div style={{ width:4, flexShrink:0, background:s.accent }} />

                    {/* Photo */}
                    <div style={{ width:80, flexShrink:0, position:"relative", borderRight:"1px solid var(--rule2)" }}>
                      <FounderPhoto
                        src={s.imgSrc} alt={s.name}
                        initials={s.initials} accent={s.accent} accentBg={s.accentBg}
                        className="w-full h-full absolute inset-0"
                        style={{ minHeight:90 }}
                      />
                    </div>

                    {/* Content */}
                    <div style={{ flex:1, padding:"14px 16px", display:"flex", flexDirection:"column", justifyContent:"center" }}>
                      <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:6, flexWrap:"wrap" }}>
                        <span style={{ fontSize:7.5, fontWeight:800, color:s.accent, textTransform:"uppercase", letterSpacing:"0.16em", fontFamily:"system-ui,sans-serif" }}>
                          {s.edition}
                        </span>
                        <span style={{ fontSize:7.5, color:"var(--rule)", fontFamily:"system-ui,sans-serif" }}>·</span>
                        <span style={{ fontSize:7.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.12em", fontFamily:"system-ui,sans-serif" }}>
                          {s.month}
                        </span>
                        <span style={{ fontSize:7.5, color:"var(--rule)", fontFamily:"system-ui,sans-serif" }}>·</span>
                        <span style={{ fontSize:7.5, fontWeight:700, color:"var(--ink4)", textTransform:"uppercase", letterSpacing:"0.1em", fontFamily:"system-ui,sans-serif" }}>
                          {s.category}
                        </span>
                      </div>

                      <div style={{ display:"flex", alignItems:"flex-start", justifyContent:"space-between", gap:12 }}>
                        <div style={{ flex:1 }}>
                          <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:4 }}>
                            <span className="pf" style={{ fontSize:"1rem", fontWeight:700, color:"var(--ink)", lineHeight:1.2 }}>
                              {s.name}
                            </span>
                            <span style={{ fontSize:8, color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>— {s.company}</span>
                          </div>
                          <p style={{ fontSize:11.5, color:"var(--ink3)", lineHeight:1.65, display:"-webkit-box", WebkitLineClamp:2, WebkitBoxOrient:"vertical" as const, overflow:"hidden" }}>
                            {s.headline}
                          </p>
                        </div>
                        <div style={{ textAlign:"right", flexShrink:0 }}>
                          <p className="pf" style={{ fontSize:"1.1rem", fontWeight:900, color:"var(--ink)", lineHeight:1, marginBottom:3 }}>{s.valuation}</p>
                          <p style={{ fontSize:7.5, color:"var(--ink5)", fontFamily:"system-ui,sans-serif" }}>{s.city}</p>
                        </div>
                      </div>
                    </div>

                    <div style={{ display:"flex", alignItems:"center", padding:"0 16px" }}>
                      <ChevronRight style={{ width:12, height:12, color:"var(--ink5)" }} />
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{ textAlign:"center", padding:"72px 24px", border:"1.5px solid var(--rule2)", background:"var(--white)" }}>
                <span className="pf" style={{ fontSize:"3rem", color:"rgba(26,18,8,.06)", fontWeight:900, display:"block", marginBottom:16 }}>?</span>
                <p className="pf" style={{ fontSize:"1.2rem", fontWeight:700, color:"var(--ink)", marginBottom:8 }}>No stories found</p>
                <p style={{ fontSize:12.5, color:"var(--ink4)", lineHeight:1.75, fontFamily:"system-ui,sans-serif" }}>
                  Try a different month or sector filter.
                </p>
                <button onClick={() => { setActiveMonth("all"); setActiveCategory("All"); }} style={{ marginTop:18, padding:"9px 22px", border:"2px solid var(--ink)", background:"transparent", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", cursor:"pointer", fontFamily:"system-ui,sans-serif" }}>
                  Reset Filters
                </button>
              </div>
            )}

            {/* ── PAGINATION: Load More + Prev/Next ── */}
            {filtered.length > 0 && (
              <div style={{ marginTop:32, display:"flex", flexDirection:"column", alignItems:"center", gap:16 }}>

                {/* Load more */}
                {hasMore && (
                  <button
                    className="load-btn"
                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                  >
                    Load More Stories
                    <span style={{ opacity:.5, fontSize:9 }}>({filtered.length - visibleCount} remaining)</span>
                  </button>
                )}

                {/* Prev / Next page navigation */}
                <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                  <button
                    style={{ display:"flex", alignItems:"center", gap:5, padding:"7px 15px", border:"1.5px solid var(--rule2)", background:"var(--white)", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", color: visibleCount <= PAGE_SIZE ? "var(--ink5)" : "var(--ink)", cursor: visibleCount <= PAGE_SIZE ? "not-allowed" : "pointer", fontFamily:"system-ui,sans-serif" }}
                    onClick={() => setVisibleCount(c => Math.max(PAGE_SIZE, c - PAGE_SIZE))}
                    disabled={visibleCount <= PAGE_SIZE}
                  >
                    <ChevronLeft style={{ width:10, height:10 }} /> Prev
                  </button>

                  <span style={{ fontSize:9, color:"var(--ink5)", fontFamily:"system-ui,sans-serif", padding:"0 8px" }}>
                    Showing {Math.min(visibleCount, filtered.length)} of {filtered.length}
                  </span>

                  <button
                    style={{ display:"flex", alignItems:"center", gap:5, padding:"7px 15px", border:"1.5px solid var(--rule2)", background:"var(--white)", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".1em", color: !hasMore ? "var(--ink5)" : "var(--ink)", cursor: !hasMore ? "not-allowed" : "pointer", fontFamily:"system-ui,sans-serif" }}
                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                    disabled={!hasMore}
                  >
                    Next <ChevronRight style={{ width:10, height:10 }} />
                  </button>
                </div>

              </div>
            )}

            {/* Footer nav */}
            <nav style={{ marginTop:"clamp(32px,5vw,56px)", paddingTop:16, borderTop:"2px solid var(--ink)" }}>
              <ul style={{ display:"flex", flexWrap:"wrap", gap:"8px 20px", listStyle:"none", margin:0, padding:0 }}>
                {[
                  { l:"Startup Registry",  h:"/startup" },
                  { l:"Indian Unicorns",   h:"/indian-unicorns" },
                  { l:"Submit Startup",    h:"/submit" },
                  { l:"Blog",              h:"/blog" },
                  { l:"Homepage",          h:"/" },
                ].map(lnk => (
                  <li key={lnk.h}>
                    <Link href={lnk.h} style={{ fontSize:8.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none", fontFamily:"system-ui,sans-serif" }}>
                      {lnk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

          </main>
        </div>
      </div>

      {/* ════ MOBILE FILTER PANEL (hamburger) ════ */}
      {menuOpen && (
        <>
          <div className="filter-overlay" onClick={() => setMenuOpen(false)} />
          <div className="filter-panel">
            <div style={{ background:"var(--ink)", padding:"16px 20px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
              <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                <Filter style={{ width:12, height:12, color:"rgba(255,255,255,.5)" }} />
                <span style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"white", fontFamily:"system-ui,sans-serif" }}>
                  Filters
                </span>
              </div>
              <button onClick={() => setMenuOpen(false)} style={{ background:"none", border:"none", color:"white", cursor:"pointer" }}>
                <X style={{ width:16, height:16 }} />
              </button>
            </div>

            <div style={{ padding:"16px" }}>
              {/* Month */}
              <p style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.24em", color:"var(--ink5)", marginBottom:10, fontFamily:"system-ui,sans-serif" }}>
                Edition / Month
              </p>
              {MONTHS.map(m => (
                <button
                  key={m.key}
                  className={`month-pill ${activeMonth === m.key ? "active" : ""}`}
                  style={{ marginBottom:6 }}
                  onClick={() => { setActiveMonth(m.key); setVisibleCount(PAGE_SIZE); setMenuOpen(false); }}
                >
                  <Calendar style={{ width:9, height:9 }} />
                  {m.label}
                  <span className="count">{m.key === "all" ? ALL_STORIES.length : (monthCounts[m.key] || 0)}</span>
                </button>
              ))}

              <div style={{ height:1, background:"var(--rule2)", margin:"16px 0" }} />

              {/* Category */}
              <p style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.24em", color:"var(--ink5)", marginBottom:10, fontFamily:"system-ui,sans-serif" }}>
                Sector
              </p>
              <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    className={`cat-chip ${activeCategory === cat ? "active" : ""}`}
                    onClick={() => { setActiveCategory(cat); setVisibleCount(PAGE_SIZE); setMenuOpen(false); }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Reset */}
              <button
                style={{ marginTop:20, width:"100%", padding:"11px", border:"2px solid var(--ink)", background:"transparent", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:".12em", cursor:"pointer", fontFamily:"system-ui,sans-serif" }}
                onClick={() => { setActiveMonth("all"); setActiveCategory("All"); setVisibleCount(PAGE_SIZE); setMenuOpen(false); }}
              >
                Reset All Filters
              </button>
            </div>
          </div>
        </>
      )}

    </div>
  )
}
