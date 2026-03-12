// app/blog/page.tsx
// THE FORGE — Blog Index (www.upforge.in/blog)
// ─────────────────────────────────────────────
// Rewritten to match homepage (app/page.tsx) exactly:
//  • Same masthead / nameplate / tab-strip pattern
//  • Same #F3EFE5 parchment bg, #1A1208 ink, Georgia serif
//  • Same CSS variables & Playfair Display font
//  • Same card hover: translate(-2,-2) + shadow
//  • Same section-header rule (.sh) pattern
//  • Same footer + nav pattern
//  • No hamburger (homepage never had one)
//  • Proper mobile — all breakpoints match homepage

import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "The Forge — Startup Intelligence, Founder Stories & Strategy | UpForge",
  description:
    "Deep analysis on Indian startups, founder stories, funding guides, unicorn profiles, and leadership lessons. Trusted by founders, investors, and builders across India.",
  keywords: [
    "Indian startup blog",
    "startup founder stories India",
    "startup intelligence India",
    "Indian startup analysis 2026",
    "startup funding guide India",
    "Indian unicorns blog",
  ],
  alternates: { canonical: "https://www.upforge.in/blog" },
  openGraph: {
    title: "The Forge — Startup Intelligence by UpForge",
    description:
      "Deep analysis on Indian startups, founder stories, funding guides, unicorn profiles, and leadership lessons.",
    url: "https://www.upforge.in/blog",
    siteName: "UpForge",
    images: [{ url: "https://www.upforge.in/og-blog.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.upforge.in/blog",
      "name": "The Forge — UpForge Intelligence",
      "url": "https://www.upforge.in/blog",
      "description": "Startup analysis, founder stories, and business strategy for India's builders.",
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://www.upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://www.upforge.in/logo.jpg" },
      },
      "blogPost": [
        { "@type": "BlogPosting", "headline": "India Startup Ecosystem 2026: State of the Nation",      "url": "https://www.upforge.in/blog/india-startup-ecosystem-2026" },
        { "@type": "BlogPosting", "headline": "How to Get Startup Funding in India 2026",               "url": "https://www.upforge.in/blog/how-to-get-startup-funding-india-2026" },
        { "@type": "BlogPosting", "headline": "Top Indian Unicorns 2026: Ranked & Profiled",            "url": "https://www.upforge.in/blog/top-indian-unicorns-2026" },
        { "@type": "BlogPosting", "headline": "25 Best Indian Startup Founders to Follow 2026",         "url": "https://www.upforge.in/blog/best-indian-startup-founders-to-follow-2026" },
        { "@type": "BlogPosting", "headline": "IND vs NZ Final 2026: 7 Leadership Lessons",             "url": "https://www.upforge.in/blog/leadership-lessons-ind-vs-nz-final-2026" },
        { "@type": "BlogPosting", "headline": "5 Startup Ideas Inspired by IND vs NZ Final 2026",       "url": "https://www.upforge.in/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "UpForge",             "item": "https://www.upforge.in/"    },
        { "@type": "ListItem", "position": 2, "name": "The Forge — Blog",    "item": "https://www.upforge.in/blog" },
      ],
    },
  ],
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HERO_POST = {
  title:    "India Startup Ecosystem 2026: The Complete State of the Nation Report",
  subtitle: "650,000 startups. 125 unicorns. $3.44B raised in Q1 alone. The definitive data-driven picture of where India's startup ecosystem stands, where it's going, and what every founder and investor must understand right now.",
  slug:     "/blog/india-startup-ecosystem-2026",
  category: "ANNUAL REPORT",
  date:     "March 2026",
  readTime: "20 min",
  img:      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85",
  tag:      "Must Read",
  topics:   ["Funding Trends", "Top Sectors", "City Rankings", "5 Macro Trends", "Policy Landscape"],
  accent:   "#B45309",
  accentBg: "#FEF3C7",
}

const SECONDARY_POSTS = [
  {
    title:    "How to Get Startup Funding in India 2026: Complete Founder's Guide",
    excerpt:  "DPIIT recognition, SISFS grants (₹945Cr corpus), angel networks, VC criteria, 90-day fundraising playbook, and the 7 mistakes that kill Indian fundraises.",
    slug:     "/blog/how-to-get-startup-funding-india-2026",
    category: "FUNDING GUIDE",
    date:     "March 2026",
    readTime: "12 min",
    img:      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
    tag:      "High Traffic",
    accent:   "#15803D",
  },
  {
    title:    "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked & Profiled",
    excerpt:  "125 Indian startups have crossed the $1 billion mark. Profiles, valuations, moat analysis, and the one founder lesson to extract from each company's rise.",
    slug:     "/blog/top-indian-unicorns-2026",
    category: "UNICORN REPORT",
    date:     "March 2026",
    readTime: "15 min",
    img:      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    tag:      "Trending",
    accent:   "#D97706",
  },
]

const GRID_POSTS = [
  {
    title:    "25 Best Indian Startup Founders to Follow in 2026",
    excerpt:  "Philosophies, playbooks, and patterns of India's most influential builders — from Alakh Pandey to Nithin Kamath to Kunal Shah.",
    slug:     "/blog/best-indian-startup-founders-to-follow-2026",
    category: "FOUNDER PROFILES",
    date:     "March 2026",
    readTime: "18 min",
    img:      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    accent:   "#2563EB",
    accentBg: "#EFF6FF",
  },
  {
    title:    "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    excerpt:  "Calm under pressure, team strategy, resilience — seven principles born from the crease that define both great captains and great founders.",
    slug:     "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "LEADERSHIP",
    date:     "March 2026",
    readTime: "7 min",
    img:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    accent:   "#B45309",
    accentBg: "#FEF3C7",
  },
  {
    title:    "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
    excerpt:  "From AI cricket analytics to youth talent discovery — five businesses someone should build right now, born from the most-watched match of 2026.",
    slug:     "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
    category: "STARTUP IDEAS",
    date:     "March 2026",
    readTime: "6 min",
    img:      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    accent:   "#059669",
    accentBg: "#ECFDF5",
  },
  {
    title:    "How Nithin Kamath Built Zerodha Without Raising a Rupee",
    excerpt:  "India's largest stockbroker was built bootstrapped with calm, contrarian decisions. The story no MBA teaches.",
    slug:     "/startup/zerodha",
    category: "FOUNDER STORY",
    date:     "February 2026",
    readTime: "5 min",
    img:      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    accent:   "#2563EB",
    accentBg: "#EFF6FF",
  },
]

const OPINION_POSTS = [
  { num: "I",   title: "Why India's Startup Valuations Are Being Re-Set — and What It Means for Founders",  category: "Opinion",          date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
  { num: "II",  title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",    category: "Analysis",         date: "Mar 2026", slug: "/blog/how-to-get-startup-funding-india-2026" },
  { num: "III", title: "Sports Tech in India: The ₹50,000Cr Market That Doesn't Exist Yet",                category: "Sector Deep Dive", date: "Feb 2026", slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
  { num: "IV",  title: "What the IND vs NZ Final Tells Us About Indian Consumer Attention in 2026",        category: "Trend Watch",      date: "Mar 2026", slug: "/blog/leadership-lessons-ind-vs-nz-final-2026" },
  { num: "V",   title: "Founder-Market Fit: Why Domain Obsession Beats MBA Strategy Every Time",           category: "Strategy",         date: "Mar 2026", slug: "/blog/best-indian-startup-founders-to-follow-2026" },
  { num: "VI",  title: "Bharat Is the New Engine: Why Tier 2 Startups Will Define India's Next Decade",   category: "Trend Watch",      date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
]

const ALL_POSTS = [
  { title: "India Startup Ecosystem 2026: State of the Nation",      slug: "/blog/india-startup-ecosystem-2026",                   category: "Annual Report",    date: "Mar 2026", readTime: "20 min" },
  { title: "How to Get Startup Funding in India 2026",               slug: "/blog/how-to-get-startup-funding-india-2026",           category: "Funding Guide",    date: "Mar 2026", readTime: "12 min" },
  { title: "Top Indian Unicorns 2026: Ranked & Profiled",            slug: "/blog/top-indian-unicorns-2026",                       category: "Unicorn Report",   date: "Mar 2026", readTime: "15 min" },
  { title: "25 Best Indian Startup Founders to Follow 2026",         slug: "/blog/best-indian-startup-founders-to-follow-2026",    category: "Founder Profiles", date: "Mar 2026", readTime: "18 min" },
  { title: "IND vs NZ Final 2026: 7 Leadership Lessons",             slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",        category: "Leadership",       date: "Mar 2026", readTime: "7 min"  },
  { title: "5 Startup Ideas Inspired by IND vs NZ Final 2026",       slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026", category: "Startup Ideas",    date: "Mar 2026", readTime: "6 min"  },
]

const CATEGORIES = [
  "All", "Annual Report", "Funding Guide", "Unicorn Report",
  "Founder Profiles", "Leadership", "Startup Ideas", "Analysis", "Opinion",
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <>
      {/* JSON-LD — server-rendered, SSR-safe */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf  { font-family: 'Playfair Display', Georgia, serif !important; }

        /* ── Animations — same as homepage storyIn ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .38s .00s ease both; }
        .a1 { animation: fadeUp .38s .07s ease both; }
        .a2 { animation: fadeUp .38s .14s ease both; }
        .a3 { animation: fadeUp .38s .20s ease both; }
        .a4 { animation: fadeUp .38s .27s ease both; }

        /* ── Tab strip — same as homepage ── */
        .tabs-strip { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .tabs-strip::-webkit-scrollbar { display: none; }

        /* ── Scrollbar — same as homepage ── */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        /* ── Section header divider ── */
        .sh {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
        }
        .sh-l {
          font-size: 8px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #AAA;
          font-family: system-ui, sans-serif;
          white-space: nowrap;
        }
        .sh-r { flex: 1; height: 1px; background: #D8D2C4; }

        /* ── Image zoom on hover ── */
        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.04); }

        /* ── Card hover — same offset shadow as homepage nbtn ── */
        .card-hover {
          transition: transform .15s ease, box-shadow .15s ease;
          text-decoration: none;
          display: block;
        }
        .card-hover:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #1A1208;
          z-index: 1;
          position: relative;
        }

        /* ── Hero card — desktop 2-col ── */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 420px;
          border: 1.5px solid #1A1208;
          overflow: hidden;
          background: #FDFCF9;
        }
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-img-col {
            height: 220px !important;
            border-left: none !important;
            border-top: 1.5px solid #1A1208 !important;
            order: -1;
          }
        }

        /* ── Secondary 2-col grid ── */
        .sec-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1.5px solid #1A1208;
          background: #1A1208;
          gap: 1.5px;
        }
        @media (max-width: 640px) {
          .sec-grid { grid-template-columns: 1fr !important; }
        }

        /* ── Main 2-col: articles + sidebar ── */
        .main-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: clamp(14px, 2vw, 22px);
          align-items: start;
        }
        @media (max-width: 900px) {
          .main-grid { grid-template-columns: 1fr !important; }
        }

        /* ── 4-card inner grid ── */
        .grid-4 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border: 1.5px solid #1A1208;
          background: #1A1208;
          gap: 1.5px;
        }
        @media (max-width: 480px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }

        /* ── Archive table row ── */
        .arch-row {
          display: grid;
          grid-template-columns: 1fr 145px 85px 70px;
          align-items: center;
          gap: 16px;
          padding: 13px 16px;
          border-bottom: 1px solid #D8D2C4;
          text-decoration: none;
          background: #FDFCF9;
          transition: background .12s, padding-left .15s;
        }
        .arch-row:last-child { border-bottom: none; }
        .arch-row:hover { background: #EDE9DF; padding-left: 22px; }

        @media (max-width: 640px) {
          .arch-row { grid-template-columns: 1fr !important; }
          .arch-meta { display: none !important; }
        }

        /* ── Opinion row ── */
        .op-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-bottom: 1px solid #D8D2C4;
          text-decoration: none;
          transition: padding-left .15s;
        }
        .op-row:last-child { border-bottom: none; padding-bottom: 0; }
        .op-row:hover { padding-left: 6px; }

        /* ── Tag badges — same pattern as homepage category pill ── */
        .tag-badge {
          display: inline-block;
          font-size: 7px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 2px 8px;
          font-family: system-ui, sans-serif;
        }
        .tag-trending { background: #FEFCE8; color: #854D0E; border: 1px solid rgba(133,77,14,.25); }
        .tag-new      { background: #F0FDF4; color: #15803D; border: 1px solid rgba(21,128,61,.25); }
        .tag-mustread { background: #FEF3C7; color: #92400E; border: 1px solid rgba(180,83,9,.30); }
        .tag-hightraffic { background: #F0FDF4; color: #15803D; border: 1px solid rgba(21,128,61,.25); }

        /* ── CTA gold strip ── */
        .nl-box {
          background: #1A1208;
          position: relative;
          overflow: hidden;
          padding: clamp(16px, 2.8vw, 28px);
        }
        .nl-box::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #92400E, #D97706, #E8C547, #D97706, #92400E);
        }

        /* ── Category pill (active / inactive) — same as homepage tab ── */
        .cpill {
          display: inline-flex;
          align-items: center;
          font-size: 8.5px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          padding: 5px 13px;
          border: 1px solid #D8D2C4;
          background: transparent;
          color: #888;
          font-family: system-ui, sans-serif;
          transition: all .15s;
          white-space: nowrap;
          cursor: pointer;
          border-bottom: 2.5px solid transparent;
        }
        .cpill:hover { color: #1A1208; border-color: #1A1208; }
        .cpill.active {
          color: #B45309;
          border-color: #D8D2C4;
          border-bottom: 2.5px solid #B45309;
          background: rgba(255,255,255,0.55);
        }

        /* ── Stats ticker ── */
        .ticker-wrap {
          display: flex;
          overflow: hidden;
          flex-wrap: wrap;
          border: 1.5px solid #1A1208;
          background: #1A1208;
        }
        .ticker-item {
          padding: 14px 24px;
          border-right: 1px solid rgba(255,255,255,.07);
          flex: 1;
          text-align: center;
          min-width: 90px;
        }

        /* ── NL box responsive ── */
        @media (max-width: 640px) {
          .nl-inner { grid-template-columns: 1fr !important; }
          .nl-btns  { flex-direction: row !important; flex-wrap: wrap; }
        }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

        {/* ══════════════════════════════════════════
            MASTHEAD — mirrors homepage header exactly
        ══════════════════════════════════════════ */}
        <header
          className="a0"
          style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}
          role="banner"
        >

          {/* Publication nameplate */}
          <div
            className="text-center px-4 pt-10 sm:pt-14 pb-5 sm:pb-8"
            style={{ borderBottom: "1px solid #C8C2B4" }}
          >
            <p
              className="text-[8px] tracking-[0.42em] uppercase mb-3"
              style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
            >
              Independent Startup Registry
            </p>
            <p
              className="pf font-black leading-none tracking-tight"
              style={{ fontSize: "clamp(1.9rem,5.5vw,4.6rem)", color: "#1A1208" }}
            >
              The Forge
            </p>
            <p
              className="italic mt-2"
              style={{
                fontSize: "clamp(12px,1.7vw,15px)",
                color: "#6B5C40",
              }}
            >
              Startup analysis, founder stories &amp; strategy for India's builders — March 2026
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 12 }} aria-hidden="true">✦</span>
              <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
            </div>
          </div>

          {/* Category tabs — same horizontal scroll strip as homepage */}
          <nav
            aria-label="Blog categories"
            className="tabs-strip flex items-stretch overflow-x-auto a1"
            style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
          >
            <span
              className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-3 py-3 self-center flex-shrink-0 hidden sm:inline"
            >
              Browse by:
            </span>
            {CATEGORIES.map((cat, i) => (
              <span
                key={i}
                className={`cpill flex-shrink-0 px-3 py-3 ${i === 0 ? "active" : ""}`}
              >
                {cat}
              </span>
            ))}
          </nav>
        </header>

        {/* ══════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════ */}
        <main
          className="a1 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-14"
          style={{ paddingTop: "clamp(12px,1.8vw,20px)" }}
        >

          {/* ── HERO POST ── */}
          <section aria-label="Cover story" className="a2">
            <div className="sh">
              <span className="sh-l">Cover Story · Most Comprehensive</span>
              <div className="sh-r" />
            </div>

            <Link href={HERO_POST.slug} className="card-hover" style={{ display: "block" }}>
              <div className="hero-grid">
                {/* Text side */}
                <div
                  style={{
                    padding: "clamp(16px,2.4vw,30px)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    background: "#FDFCF9",
                  }}
                >
                  <div>
                    {/* Top accent line */}
                    <div style={{ height: 3, background: `linear-gradient(90deg,#92400E,${HERO_POST.accent},#E8C547,${HERO_POST.accent},#92400E)`, marginBottom: 14 }} />

                    <div className="flex items-center gap-3 mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span
                        className="text-[8px] font-black tracking-[0.26em] uppercase px-3 py-1.5 text-white"
                        style={{ background: HERO_POST.accent }}
                      >
                        {HERO_POST.category}
                      </span>
                      <span className="tag-badge tag-mustread">{HERO_POST.tag}</span>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {HERO_POST.date}
                      </span>
                    </div>

                    <h2
                      className="pf font-black leading-[1.06] mb-4"
                      style={{ fontSize: "clamp(1.5rem,3.2vw,2.6rem)", color: "#1A1208" }}
                    >
                      {HERO_POST.title}
                    </h2>

                    <div style={{ width: 40, height: 3, background: HERO_POST.accent, marginBottom: 12 }} />

                    <p
                      className="italic leading-[1.78] mb-4"
                      style={{ fontSize: "clamp(13px,1.6vw,15px)", color: "#5A4A30", maxWidth: 520 }}
                    >
                      {HERO_POST.subtitle}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {HERO_POST.topics.map(t => (
                        <span
                          key={t}
                          className="text-[8px] uppercase tracking-wider"
                          style={{
                            color: "#6B5C40",
                            border: "1px solid #D8D2C4",
                            padding: "3px 9px",
                            background: "#F3EFE5",
                            fontFamily: "system-ui,sans-serif",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div
                    className="flex items-center justify-between mt-5 pt-4"
                    style={{ borderTop: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
                  >
                    <div className="flex gap-4 items-center">
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{HERO_POST.date}</span>
                      <span style={{ color: "#C8C2B4", fontSize: 10 }}>·</span>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{HERO_POST.readTime} read</span>
                    </div>
                    <span
                      className="text-[9px] font-black uppercase tracking-wider flex items-center gap-1"
                      style={{ color: HERO_POST.accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      Read Report <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                    </span>
                  </div>
                </div>

                {/* Image side */}
                <div
                  className="hero-img-col imgf"
                  style={{ minHeight: 340, borderLeft: "1.5px solid #1A1208" }}
                >
                  <img src={HERO_POST.img} alt={HERO_POST.title} />
                  <div
                    style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to left, transparent 55%, rgba(26,18,8,.1) 100%)",
                    }}
                  />
                </div>
              </div>
            </Link>
          </section>

          {/* ── SECONDARY 2-COL ── */}
          <section
            aria-label="Essential reads"
            className="a3"
            style={{ marginTop: "clamp(14px,2vw,20px)" }}
          >
            <div className="sh">
              <span className="sh-l">Essential Reads · High Traffic</span>
              <div className="sh-r" />
            </div>

            <div className="sec-grid">
              {SECONDARY_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="card-hover" style={{ background: "#FDFCF9", display: "flex", flexDirection: "column" }}>
                  {/* Image */}
                  <div className="imgf" style={{ height: "clamp(130px,14vw,170px)", borderBottom: "1px solid #D8D2C4", flexShrink: 0 }}>
                    <img src={post.img} alt={post.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.65) 0%, transparent 55%)" }} />
                    {/* Category pill on image — same style as homepage category pill */}
                    <div style={{ position: "absolute", top: 12, left: 14, display: "flex", gap: 7, alignItems: "center" }}>
                      <span
                        className="text-[7.5px] font-black tracking-[0.18em] uppercase px-2 py-1 text-white"
                        style={{ background: post.accent, fontFamily: "system-ui,sans-serif" }}
                      >
                        {post.category}
                      </span>
                      <span className="tag-badge tag-hightraffic">{post.tag}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: 10, right: 14 }}>
                      <span className="text-[8px] text-white/50 uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>{post.readTime} read</span>
                    </div>
                  </div>
                  {/* Text */}
                  <div style={{ padding: "clamp(12px,1.6vw,16px)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3
                      className="pf font-bold leading-[1.2] mb-2"
                      style={{ fontSize: "clamp(1rem,1.8vw,1.28rem)", color: "#1A1208" }}
                    >
                      {post.title}
                    </h3>
                    <p
                      className="italic leading-[1.72] flex-1 mb-3"
                      style={{
                        fontSize: "clamp(12px,1.3vw,13.5px)",
                        color: "#5A4A30",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical" as const,
                        overflow: "hidden",
                      }}
                    >
                      {post.excerpt}
                    </p>
                    <div
                      className="flex items-center justify-between pt-3"
                      style={{ borderTop: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
                    >
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{post.date}</span>
                      <span
                        className="text-[8.5px] font-black uppercase tracking-wider flex items-center gap-1"
                        style={{ color: post.accent }}
                      >
                        Read <ArrowRight className="w-2.5 h-2.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── MAIN 2-COL: 4 CARDS + OPINION SIDEBAR ── */}
          <div className="main-grid a3" style={{ marginTop: "clamp(14px,2.2vw,22px)" }}>

            {/* LEFT: 4-card grid */}
            <div>
              <div className="sh">
                <span className="sh-l">Latest Articles</span>
                <div className="sh-r" />
              </div>
              <div className="grid-4">
                {GRID_POSTS.map((post, i) => (
                  <Link
                    key={i}
                    href={post.slug}
                    className="card-hover"
                    style={{ background: "#FDFCF9", display: "flex", flexDirection: "column" }}
                  >
                    {/* Image */}
                    <div className="imgf" style={{ height: 110, borderBottom: "1px solid #D8D2C4", flexShrink: 0 }}>
                      <img src={post.img} alt={post.title} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(26,18,8,.1)" }} />
                      {/* Accent top border — same as thumbnail strip in homepage */}
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: post.accent }} />
                      <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                        <span
                          className="text-[7px] font-black tracking-[0.18em] uppercase"
                          style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                    {/* Text */}
                    <div style={{ padding: "10px 12px 12px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4
                        className="pf font-bold leading-[1.22] mb-2 flex-1"
                        style={{ fontSize: "clamp(0.86rem,1.2vw,0.94rem)", color: "#1A1208" }}
                      >
                        {post.title}
                      </h4>
                      <p
                        className="leading-[1.6] mb-3"
                        style={{
                          fontSize: 11,
                          color: "#5A4A30",
                          fontFamily: "'Georgia',serif",
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical" as const,
                          overflow: "hidden",
                        }}
                      >
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between" style={{ fontFamily: "system-ui,sans-serif" }}>
                        <span className="text-[8px] text-[#AAA] uppercase tracking-wider">{post.readTime}</span>
                        <span className="text-[8px] font-black" style={{ color: post.accent }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Opinion column + valuation CTA */}
            <div>
              <div className="sh">
                <span className="sh-l">Analysis &amp; Opinion</span>
                <div className="sh-r" />
              </div>

              {/* Opinion box — same "By the Numbers" border style as homepage */}
              <div style={{ border: "1.5px solid #1A1208", background: "#FDFCF9" }}>
                {/* Header — same dark bar as homepage stats box */}
                <div style={{ background: "#1A1208", padding: "14px 18px" }}>
                  <div style={{ height: 2, background: "linear-gradient(90deg,#92400E,#D97706,#E8C547)", marginBottom: 10 }} />
                  <p className="pf font-bold text-white italic" style={{ fontSize: "1rem", lineHeight: 1.25 }}>
                    The UpForge<br />Perspective
                  </p>
                  <p
                    className="text-[8px] uppercase tracking-[0.16em] mt-1.5"
                    style={{ color: "rgba(255,255,255,.35)", fontFamily: "system-ui,sans-serif" }}
                  >
                    India · Startups · 2026
                  </p>
                </div>

                <div style={{ padding: "6px 18px 18px" }}>
                  {OPINION_POSTS.map((op, i) => (
                    <Link key={i} href={op.slug} className="op-row">
                      <span
                        className="pf font-black italic flex-shrink-0"
                        style={{ fontSize: "1.1rem", color: "#C8C2B4", lineHeight: 1, width: 22, marginTop: 2 }}
                      >
                        {op.num}
                      </span>
                      <div style={{ flex: 1 }}>
                        <span
                          className="text-[7.5px] font-black uppercase tracking-[0.14em] block mb-1"
                          style={{ color: "#D97706", fontFamily: "system-ui,sans-serif" }}
                        >
                          {op.category}
                        </span>
                        <p
                          className="pf font-bold leading-[1.28] mb-1"
                          style={{ fontSize: "0.87rem", color: "#1A1208" }}
                        >
                          {op.title}
                        </p>
                        <span
                          className="text-[8px] uppercase tracking-wider"
                          style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                        >
                          {op.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Valuation CTA — same dark box style as homepage footer CTA */}
              <div style={{ marginTop: 12, background: "#1A1208", padding: "20px 18px", border: "1.5px solid #1A1208" }}>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.24em] mb-2"
                  style={{ color: "rgba(232,197,71,.6)", fontFamily: "system-ui,sans-serif" }}
                >
                  Free AI Tool
                </p>
                <p className="pf font-bold text-white leading-[1.3] mb-2" style={{ fontSize: "1rem" }}>
                  Startup Valuation<br />
                  <em style={{ color: "#E8C547" }}>Report — Free</em>
                </p>
                <p
                  className="leading-relaxed mb-4"
                  style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)", fontFamily: "system-ui,sans-serif" }}
                >
                  AI-powered analysis benchmarked against 500+ Indian startups. Takes 3 minutes.
                </p>
                <Link
                  href="/report"
                  className="flex items-center justify-center gap-2 text-white hover:opacity-90 transition-opacity"
                  style={{
                    background: "#D97706",
                    padding: "10px",
                    fontFamily: "system-ui,sans-serif",
                    fontSize: 9,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    color: "#1A1208",
                    textDecoration: "none",
                  }}
                >
                  Generate Free Report <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── ALL PUBLISHED ARTICLES ── */}
          <section
            aria-label="All published articles"
            className="a4"
            style={{ marginTop: "clamp(18px,2.8vw,30px)" }}
          >
            <div className="sh">
              <span className="sh-l">All Published Articles — {ALL_POSTS.length} Articles · March 2026</span>
              <div className="sh-r" />
            </div>

            <div style={{ border: "1.5px solid #1A1208", background: "#1A1208", display: "flex", flexDirection: "column", gap: "1.5px" }}>
              {/* Column headers */}
              <div
                style={{
                  background: "#1A1208",
                  padding: "8px 16px",
                  display: "grid",
                  gridTemplateColumns: "1fr 145px 85px 70px",
                  gap: 16,
                  fontFamily: "system-ui,sans-serif",
                }}
              >
                {["Article", "Category", "Published", "Read Time"].map(h => (
                  <span
                    key={h}
                    className="text-[7.5px] font-black uppercase tracking-[0.2em]"
                    style={{ color: "rgba(255,255,255,.28)" }}
                  >
                    {h}
                  </span>
                ))}
              </div>
              {ALL_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="arch-row">
                  <p className="pf font-bold leading-[1.3]" style={{ fontSize: 13, color: "#1A1208", margin: 0 }}>
                    {post.title}
                  </p>
                  <span
                    className="arch-meta text-[9px] uppercase tracking-wider text-center"
                    style={{
                      color: "#B45309",
                      border: "1px solid rgba(180,83,9,.3)",
                      padding: "2px 8px",
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {post.category}
                  </span>
                  <span className="arch-meta text-[9px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {post.date}
                  </span>
                  <span className="arch-meta text-[9px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {post.readTime}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── STATS TICKER — same pattern as homepage insight strip ── */}
          <section
            aria-label="UpForge key statistics"
            className="a4"
            style={{ marginTop: "clamp(14px,2.5vw,24px)" }}
          >
            <div className="ticker-wrap">
              {[
                { v: "6",      l: "Articles Published" },
                { v: "650K+",  l: "Registered Startups" },
                { v: "125+",   l: "Indian Unicorns"      },
                { v: "₹950B",  l: "Value Tracked"        },
                { v: "$3.44B", l: "Q1 2026 Funding"      },
              ].map((s, i) => (
                <div key={i} className="ticker-item">
                  <p className="pf font-black text-white leading-none mb-1" style={{ fontSize: "1.4rem" }}>{s.v}</p>
                  <p
                    className="text-[7.5px] font-black uppercase tracking-[0.16em]"
                    style={{ color: "rgba(255,255,255,.3)", fontFamily: "system-ui,sans-serif" }}
                  >
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── FOOTER CTA — mirrors homepage footer CTA section exactly ── */}
          <section
            className="nl-box a4"
            aria-label="List your startup on UpForge"
            style={{ marginTop: "clamp(18px,3vw,30px)" }}
          >
            <div
              className="nl-inner"
              style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}
            >
              <div>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.3em] mb-2"
                  style={{ color: "rgba(232,197,71,.65)", fontFamily: "system-ui,sans-serif" }}
                >
                  UpForge Intelligence
                </p>
                <p
                  className="pf font-bold text-white leading-[1.2] mb-2"
                  style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)" }}
                >
                  India's most-read startup analysis.<br />
                  <em style={{ color: "#E8C547" }}>Free. Forever.</em>
                </p>
                <p
                  className="leading-[1.75]"
                  style={{ fontSize: 12.5, color: "rgba(255,255,255,.38)", maxWidth: 480, fontFamily: "system-ui,sans-serif" }}
                >
                  6 in-depth articles — funding guides, unicorn profiles, founder playbooks, ecosystem reports — built for builders who want more than headlines.
                </p>
              </div>
              <div className="nl-btns flex flex-col gap-2.5 flex-shrink-0">
                <Link
                  href="/startup"
                  className="inline-flex items-center gap-2 hover:opacity-90 transition-opacity"
                  style={{
                    background: "#D97706",
                    color: "#1A1208",
                    padding: "13px 24px",
                    fontSize: 10,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: "0.14em",
                    fontFamily: "system-ui,sans-serif",
                    whiteSpace: "nowrap",
                    boxShadow: "3px 3px 0 #92400E",
                    textDecoration: "none",
                  }}
                  aria-label="Browse Indian startup registry on UpForge"
                >
                  Browse Registry <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center gap-2 hover:border-white/40 transition-all"
                  style={{
                    border: "1.5px solid rgba(255,255,255,.15)",
                    color: "rgba(255,255,255,.55)",
                    padding: "11px 24px",
                    fontSize: 9.5,
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    fontFamily: "system-ui,sans-serif",
                    whiteSpace: "nowrap",
                    textDecoration: "none",
                    background: "transparent",
                  }}
                  aria-label="Submit your startup to UpForge for free"
                >
                  Submit Your Startup
                </Link>
              </div>
            </div>
          </section>

          {/* ── INTERNAL LINKS — same grid as homepage ── */}
          <section
            className="py-7 a4"
            style={{ borderTop: "1px solid #C8C2B4", marginTop: "clamp(18px,3vw,30px)" }}
            aria-label="Explore more on UpForge"
          >
            <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
              Explore on UpForge
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { l: "Startup Registry India",          h: "/startup",                                              desc: "Full verified database" },
                { l: "Indian Unicorns 2026",            h: "/blog/top-indian-unicorns-2026",                       desc: "All 125 unicorns profiled" },
                { l: "Startup Funding Guide 2026",      h: "/blog/how-to-get-startup-funding-india-2026",          desc: "DPIIT, SISFS & VCs" },
                { l: "Founders to Follow 2026",         h: "/blog/best-indian-startup-founders-to-follow-2026",    desc: "25 must-follow builders" },
                { l: "Ecosystem Report 2026",           h: "/blog/india-startup-ecosystem-2026",                   desc: "$3.44B raised in Q1" },
                { l: "Leadership Lessons Blog",         h: "/blog/leadership-lessons-ind-vs-nz-final-2026",        desc: "7 lessons from the crease" },
                { l: "Startup Ideas Blog",              h: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026", desc: "5 ideas to build now" },
                { l: "Submit Your Startup",             h: "/submit",                                              desc: "Get listed free" },
              ].map(lnk => (
                <Link
                  key={lnk.h + lnk.l}
                  href={lnk.h}
                  className="flex flex-col gap-1 p-3 transition-all hover:border-[#1A1208]"
                  style={{ border: "1px solid #D8D2C4", background: "#FDFCF9" }}
                >
                  <span
                    className="text-[9.5px] font-bold uppercase tracking-wider text-[#1A1208] flex items-center gap-1"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l} <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                  </span>
                  <span className="text-[8.5px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {lnk.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ══ FOOTER — mirrors homepage footer exactly ══ */}
          <footer className="pb-2" style={{ borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}>
            <p
              className="text-[8.5px] leading-relaxed"
              style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
            >
              * Article data sourced from Inc42, Forbes India, Hurun India 2025, Tracxn, and company announcements as of March 2026.
              UpForge is an independent registry — no paid placements, no sponsored rankings.
              All figures are approximate and reflect latest available public data.
            </p>

            <nav aria-label="Footer navigation" className="mt-4">
              <ul className="flex flex-wrap gap-x-4 gap-y-2" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { l: "The Founder Chronicle",         h: "/"                                                     },
                  { l: "Startup Registry India",        h: "/startup"                                              },
                  { l: "Indian Unicorns 2026",          h: "/blog/top-indian-unicorns-2026"                        },
                  { l: "Startup Funding Guide",         h: "/blog/how-to-get-startup-funding-india-2026"           },
                  { l: "Founders to Follow 2026",       h: "/blog/best-indian-startup-founders-to-follow-2026"     },
                  { l: "Startup Ideas India",           h: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026"  },
                  { l: "Free Valuation Tool",           h: "/report"                                               },
                  { l: "Submit Startup",                h: "/submit"                                               },
                ].map(lnk => (
                  <li key={lnk.h + lnk.l}>
                    <Link
                      href={lnk.h}
                      className="text-[8.5px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                      style={{ fontFamily: "system-ui,sans-serif", textDecoration: "none" }}
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
    </>
  )
}
