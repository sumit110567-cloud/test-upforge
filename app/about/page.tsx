// app/about/page.tsx
// ABOUT — UpForge (www.upforge.in/about)
// ─────────────────────────────────────────────────────
// Rewritten to match homepage (app/page.tsx) exactly:
//  • Same masthead / nameplate / tab-strip pattern
//  • Same #F3EFE5 parchment bg, #1A1208 ink, Georgia serif
//  • Same Playfair Display font, same CSS animation
//  • Same section-header (.sh) pattern throughout
//  • Same card hover: translate(-2,-2) + shadow
//  • Same footer + nav pattern
//  • No breadcrumb, no live dot, no top info bar
//  • Proper mobile — all breakpoints mirror homepage

import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Shield, Users, TrendingUp, Award, BadgeCheck,
  Globe, ArrowRight, Sparkles, Calculator,
} from "lucide-react"

export const revalidate = 600

export const metadata: Metadata = {
  title: "About UpForge — India's Independent Startup Registry | UpForge",
  description:
    "UpForge is India's independent startup registry — not a media platform, not a marketplace. A permanent public record of serious builders across 30+ sectors.",
  alternates: { canonical: "https://www.upforge.in/about" },
  openGraph: {
    title: "About UpForge — India's Independent Startup Registry",
    description:
      "India's verified, structured, permanent startup registry. Free for founders. Trusted by investors and press.",
    url: "https://www.upforge.in/about",
    siteName: "UpForge",
    images: [{ url: "https://www.upforge.in/og-about.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
}

// ─── AI INSIGHTS ─────────────────────────────────────────────────────────────
async function getAboutInsights() {
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: `Return ONLY valid JSON:
            {
              "ecosystemPulse": {
                "headline": "one powerful stat or fact about Indian startup ecosystem 2026",
                "stat": "big number or %",
                "context": "brief context under 12 words"
              },
              "whyRegistry": [
                {"point": "why a startup registry matters in India", "data": "supporting stat"}
              ],
              "milestones": [
                {"year": "year", "event": "Indian startup ecosystem milestone"}
              ]
            }`,
          },
          {
            role: "user",
            content: "Give compelling data about why documenting Indian startups matters in 2026.",
          },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    })
    const data = await response.json()
    return JSON.parse(data.choices[0].message.content)
  } catch {
    return {
      ecosystemPulse: {
        headline: "India is now home to the world's 3rd largest startup ecosystem",
        stat: "126 Unicorns",
        context: "and growing — ₹9.2B funded in Q1 2026 alone",
      },
      whyRegistry: [
        { point: "90% of Indian startups have zero structured digital presence",       data: "Less than 10% appear on verified databases" },
        { point: "Investors lose time verifying basic startup information",             data: "Avg 3–5 days per due diligence on basic data" },
        { point: "Founders lack institutional-grade digital credibility early on",     data: "Most rely only on LinkedIn and AngelList" },
        { point: "India's startup data is fragmented across 200+ sources",             data: "No single trusted public registry existed before" },
      ],
      milestones: [
        { year: "2016", event: "Startup India launched — 10,000 registered startups" },
        { year: "2019", event: "India crosses 50,000 DPIIT-recognized startups" },
        { year: "2021", event: "Record $42B funding — India's breakout year" },
        { year: "2023", event: "100+ unicorns, 3rd largest ecosystem globally" },
        { year: "2025", event: "72,000+ active startups, AI-led second wave begins" },
        { year: "2026", event: "UpForge becomes India's independent public registry" },
      ],
    }
  }
}

// ─── IMAGES ──────────────────────────────────────────────────────────────────
const IMAGES = {
  hero:     "/aboutus.jpg",
  problem:  "https://media.licdn.com/dms/image/v2/D5612AQHvdNFPlgO8mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726469383648?e=2147483647&v=beta&t=TOuXsxGGTTfnFrJ16aAHJdDZwFLP2fjF5u-Cutu1q68",
  answer:   "https://images.yourstory.com/cs/2/ab6020f0259611ee840c6712417aa5cf/What-is-Startup-India-Showcase-11-1703785002234.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
  builders: "https://p2.piqsels.com/preview/160/1022/497/startup-start-up-growth-hacking-market.jpg",
}

// ─── FAQ ─────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  { q: "What is UpForge?",                    a: "UpForge is India's independent startup registry — a free, structured, and permanently accessible public record of verified Indian startups across 30+ sectors." },
  { q: "Is UpForge free for founders?",       a: "Yes. Listing your startup on UpForge is completely free. We believe every serious builder deserves institutional-grade digital credibility without paying for it." },
  { q: "How does UpForge verify startups?",   a: "Every startup profile is manually reviewed before listing. We check basic company details, founders, and operational status to ensure accuracy." },
  { q: "Is UpForge a media company?",         a: "No. UpForge is neither a media outlet nor an accelerator. We are India's neutral, independent registry — no paid rankings, no sponsored placements." },
  { q: "Who can use UpForge?",                a: "Founders use UpForge to build a verified digital paper trail. Investors use it to discover startups before they hit headlines. Press use it to cite reliable startup data." },
  { q: "How many startups are on UpForge?",   a: "UpForge lists thousands of verified Indian startups and grows daily across sectors like AI/ML, FinTech, SaaS, HealthTech, Climate Tech, and more." },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function AboutPage() {
  const supabase = await createClient()
  const insights = await getAboutInsights()

  const { count: totalStartups } = await supabase
    .from("startups").select("*", { count: "exact", head: true })

  const { count: startupsWithReports } = await supabase
    .from("startups").select("*", { count: "exact", head: true }).eq("has_report", true)

  const { data: industries } = await supabase
    .from("startups").select("industry").not("industry", "is", null)

  const uniqueIndustries = industries ? new Set(industries.map((i) => i.industry)).size : 0

  // Structured data
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.upforge.in/#organization",
        "name": "UpForge",
        "url": "https://www.upforge.in",
        "logo": "https://www.upforge.in/logo.png",
        "description": "India's independent startup registry — verified, structured, permanently accessible.",
        "foundingDate": "2025",
        "areaServed": "IN",
        "sameAs": ["https://www.linkedin.com/company/upforge", "https://twitter.com/upforge_in"],
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "UpForge", "item": "https://www.upforge.in/" },
          { "@type": "ListItem", "position": 2, "name": "About",   "item": "https://www.upforge.in/about" },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": FAQ_ITEMS.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": { "@type": "Answer", "text": faq.a },
        })),
      },
    ],
  }

  return (
    <>
      {/* JSON-LD — server-rendered, SSR-safe */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        /* ── Font helpers — same as homepage ── */
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        /* ── Animations — same timing as homepage storyIn ── */
        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: storyIn .38s .00s ease both; }
        .a1 { animation: storyIn .38s .07s ease both; }
        .a2 { animation: storyIn .38s .14s ease both; }
        .a3 { animation: storyIn .38s .20s ease both; }
        .a4 { animation: storyIn .38s .27s ease both; }

        /* ── Tab strip — exact homepage copy ── */
        .tabs-strip { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .tabs-strip::-webkit-scrollbar { display: none; }

        /* ── Scrollbar — same as homepage ── */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        /* ── Section header ── */
        .sh { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .sh-l {
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.3em; color: #AAA;
          font-family: system-ui, sans-serif; white-space: nowrap;
        }
        .sh-r { flex: 1; height: 1px; background: #D8D2C4; }

        /* ── Image zoom ── */
        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0;
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(14%) contrast(107%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.025); }

        /* ── Card hover — exact homepage pattern ── */
        .hc {
          transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
        }
        .hc:hover {
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 #1A1208;
          border-color: #1A1208 !important;
          z-index: 1;
          position: relative;
        }

        /* ── Principle card icon hover ── */
        .pc-wrap:hover .pc-icon { background: #1A1208; }
        .pc-wrap:hover .pc-icon svg { color: #E8C547 !important; }
        .pc-icon { transition: background .18s; }
        .pc-icon svg { transition: color .18s; }

        /* ── FAQ accordion ── */
        .faq-item { border-bottom: 1px solid #D8D2C4; }
        .faq-item:last-child { border-bottom: none; }
        details[open] .faq-arrow { transform: rotate(180deg); }
        .faq-arrow { transition: transform .2s; flex-shrink: 0; }
        .faq-q:hover .faq-q-text { color: #1A1208 !important; }

        /* ── Tab pills — same as homepage tab active style ── */
        .about-tab {
          flex-shrink: 0; padding: 12px 16px;
          font-size: 8.5px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.14em; border-left: 1px solid #D8D2C4;
          color: #888; border-bottom: 2.5px solid transparent;
          font-family: system-ui, sans-serif; transition: color .15s;
          margin-bottom: -1px;
        }
        .about-tab.active {
          color: #B45309;
          border-bottom-color: #B45309;
          background: rgba(255,255,255,0.55);
        }

        /* ── Two-col layout ── */
        .two-col { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
          .two-col > .col-l { border-right: none !important; padding-right: 0 !important; border-bottom: 1px solid #C8C2B4; padding-bottom: clamp(28px,4vw,44px); }
          .two-col > .col-r { padding-left: 0 !important; padding-top: clamp(28px,4vw,44px); }
        }

        /* ── Stats bar ── */
        .stats-bar { display: flex; flex-direction: row; }
        @media (max-width: 640px) {
          .stats-bar { flex-direction: column !important; }
          .stats-bar > div { border-right: none !important; border-bottom: 1px solid rgba(255,255,255,.07) !important; }
          .stats-bar > div:last-child { border-bottom: none !important; }
        }

        /* ── Principles grid ── */
        .principles-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        @media (max-width: 768px) { .principles-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px) { .principles-grid { grid-template-columns: 1fr !important; } }

        /* ── Milestones grid ── */
        .milestone-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(155px,1fr)); }
        @media (max-width: 480px) { .milestone-grid { grid-template-columns: 1fr 1fr !important; } }

        /* ── Serve grid ── */
        .serve-grid { display: grid; grid-template-columns: repeat(3, 1fr); }
        @media (max-width: 640px) { .serve-grid { grid-template-columns: 1fr !important; } }

        /* ── Ecosystem pulse ── */
        .pulse-grid { display: grid; grid-template-columns: 1fr auto; gap: 0; align-items: stretch; }
        @media (max-width: 640px) {
          .pulse-grid { grid-template-columns: 1fr !important; }
          .pulse-stat { border-left: none !important; padding-left: 0 !important; border-top: 1px solid #C8C2B4 !important; padding-top: clamp(20px,3vw,28px) !important; }
        }

        /* ── CTA footer strip ── */
        .cta-inner { display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; }
        @media (max-width: 640px) {
          .cta-inner { grid-template-columns: 1fr !important; }
        }

        /* ── Internal links grid ── */
        .links-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid #D8D2C4; background: #D8D2C4; }
        .links-grid a { background: #FDFCF9; transition: background .12s, padding-left .15s; text-decoration: none; }
        .links-grid a:hover { background: #EDE9DF; padding-left: 20px; }

        /* ── Hero image ── */
        .hero-img-wrap { height: clamp(260px,32vw,420px); }
        @media (max-width: 768px) { .hero-img-wrap { height: clamp(220px,50vw,300px) !important; } }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

        {/* ══════════════════════════════════════════
            MASTHEAD — exact homepage header pattern
        ══════════════════════════════════════════ */}
        <header
          className="a0"
          style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}
          role="banner"
        >
          {/* Nameplate */}
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
              About UpForge
            </p>
            <p
              className="italic mt-2"
              style={{ fontSize: "clamp(12px,1.7vw,15px)", color: "#6B5C40" }}
            >
              Not a media platform. Not a marketplace. A permanent public record of serious builders.
            </p>
            <div className="flex items-center justify-center gap-3 mt-4">
              <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 12 }} aria-hidden="true">✦</span>
              <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
            </div>
          </div>

          {/* Section tabs — same horizontal scroll strip as homepage */}
          <nav
            aria-label="About page sections"
            className="tabs-strip flex items-stretch overflow-x-auto a1"
            style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
          >
            <span className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-3 py-3 self-center flex-shrink-0 hidden sm:inline">
              On this page:
            </span>
            {["Our Story", "Why It Exists", "Core Principles", "Ecosystem Timeline", "Who We Serve", "FAQ"].map((tab, i) => (
              <span key={i} className={`about-tab ${i === 0 ? "active" : ""}`}>
                {tab}
              </span>
            ))}
          </nav>
        </header>

        {/* ══════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════ */}
        <main
          className="a1 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-14"
        >

          {/* ── HERO IMAGE + STATS BAR ── */}
          <section className="a2" style={{ borderBottom: "2px solid #1A1208" }}>
            <div className="imgf hero-img-wrap">
              <img src={IMAGES.hero} alt="Indian startup ecosystem — UpForge registry" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,18,8,.38) 0%, rgba(26,18,8,.82) 100%)" }} />
              <div style={{
                position: "absolute", inset: 0,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                padding: "0 clamp(16px,5vw,60px)", textAlign: "center",
              }}>
                <p
                  className="text-[8.5px] uppercase tracking-[0.42em] mb-4"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "system-ui,sans-serif" }}
                >
                  UpForge · Our Story · Est. 2025
                </p>
                <h1
                  className="pf font-black text-white leading-[0.93] mb-4"
                  style={{ fontSize: "clamp(2rem,6.5vw,5.2rem)", letterSpacing: "-0.02em" }}
                >
                  India's Independent<br />
                  <span style={{ color: "#E8C547" }}>Startup Registry</span>
                </h1>
                <p
                  className="italic leading-[1.6]"
                  style={{
                    fontSize: "clamp(13px,1.8vw,16px)",
                    color: "rgba(255,255,255,0.6)",
                    maxWidth: 520,
                    fontFamily: "'Georgia',serif",
                  }}
                >
                  Not a media platform. Not a marketplace.<br />A permanent public record of serious builders.
                </p>
              </div>
            </div>

            {/* Stats bar — same dark bar as homepage "By the Numbers" header */}
            <div style={{ background: "#1A1208" }}>
              <div className="stats-bar">
                {[
                  { v: `${(totalStartups   || 0).toLocaleString()}+`, l: "Verified Profiles"   },
                  { v: `${(startupsWithReports || 30)}+`,              l: "Reports Generated"   },
                  { v: `${uniqueIndustries  || 20}+`,                  l: "Industries Covered"  },
                ].map((s, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1, padding: "24px 0", textAlign: "center",
                      borderRight: i < 2 ? "1px solid rgba(255,255,255,.07)" : "none",
                    }}
                  >
                    <p className="pf font-black text-white leading-none mb-2"
                      style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)" }}>
                      {s.v}
                    </p>
                    <p className="text-[8.5px] font-black uppercase tracking-[0.18em]"
                      style={{ color: "rgba(255,255,255,.4)", fontFamily: "system-ui,sans-serif" }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── ECOSYSTEM PULSE ── */}
          <section
            className="a2 pulse-grid"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Ecosystem pulse"
          >
            <div
              className="py-7 pr-0 sm:pr-10"
              style={{ borderRight: "1px solid #C8C2B4" }}
            >
              <div className="sh">
                <span className="sh-l">Ecosystem Pulse · March 2026</span>
                <div className="sh-r" />
              </div>
              <p
                className="pf font-bold leading-[1.25] mb-2"
                style={{ fontSize: "clamp(1.1rem,2.5vw,1.9rem)", color: "#1A1208" }}
              >
                {insights.ecosystemPulse.headline}
              </p>
              <p
                className="italic leading-[1.7]"
                style={{ fontSize: "clamp(12px,1.4vw,13.5px)", color: "#5A4A30" }}
              >
                {insights.ecosystemPulse.context}
              </p>
            </div>
            <div
              className="pulse-stat py-7 flex flex-col justify-center"
              style={{ paddingLeft: "clamp(24px,3vw,44px)", borderLeft: "1px solid #C8C2B4", minWidth: "clamp(120px,18vw,200px)" }}
            >
              <p
                className="pf font-black leading-none mb-2"
                style={{ fontSize: "clamp(2.2rem,5vw,4.5rem)", color: "#1A1208" }}
              >
                {insights.ecosystemPulse.stat}
              </p>
              <p
                className="text-[8.5px] uppercase tracking-[0.18em]"
                style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
              >
                &amp; counting in India
              </p>
            </div>
          </section>

          {/* ── WHY THIS EXISTS (2-col) ── */}
          <section
            className="a2 two-col"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Why UpForge exists"
          >
            {/* Left: problem */}
            <div
              className="col-l py-7"
              style={{ borderRight: "1px solid #C8C2B4", paddingRight: "clamp(16px,3vw,44px)" }}
            >
              <div className="imgf" style={{ height: 200, marginBottom: 20 }}>
                <img src={IMAGES.problem} alt="The fragmented startup data problem in India" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.72) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 14 }}>
                  <span
                    className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white"
                    style={{ background: "#DC2626", padding: "2px 8px", fontFamily: "system-ui,sans-serif" }}
                  >
                    The Problem
                  </span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">Why UpForge Exists</span><div className="sh-r" /></div>
              <h2
                className="pf font-bold leading-[1.22] mb-5"
                style={{ fontSize: "clamp(1.1rem,2.2vw,1.65rem)", color: "#1A1208" }}
              >
                India's startup data was fragmented, unverified, and buried.
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {insights.whyRegistry.map((item: any, i: number) => (
                  <div
                    key={i}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12,
                      padding: "12px 0", borderBottom: "1px solid #D8D2C4",
                    }}
                  >
                    <div
                      className="text-[8.5px] font-black text-white flex-shrink-0 flex items-center justify-center"
                      style={{
                        width: 20, height: 20, background: "#1A1208",
                        marginTop: 1, fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {i + 1}
                    </div>
                    <div>
                      <p
                        className="leading-[1.4] mb-1"
                        style={{ fontSize: 13, fontWeight: 600, color: "#1A1208" }}
                      >
                        {item.point}
                      </p>
                      <p
                        className="text-[10.5px]"
                        style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                      >
                        {item.data}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: answer */}
            <div
              className="col-r py-7"
              style={{ paddingLeft: "clamp(16px,3vw,44px)" }}
            >
              <div className="imgf" style={{ height: 200, marginBottom: 20 }}>
                <img src={IMAGES.answer} alt="UpForge — India's answer to the startup registry gap" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.72) 0%, transparent 55%)" }} />
                <div style={{ position: "absolute", bottom: 12, left: 14 }}>
                  <span
                    className="text-[7.5px] font-black uppercase tracking-[0.2em] text-white"
                    style={{ background: "#2563EB", padding: "2px 8px", fontFamily: "system-ui,sans-serif" }}
                  >
                    Our Answer
                  </span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">One Independent Record</span><div className="sh-r" /></div>
              <p
                className="italic leading-[1.82] mb-5"
                style={{ fontSize: 13, color: "#5A4A30" }}
              >
                UpForge is India's independent startup registry — not a media outlet, not an accelerator. We document startup data in a neutral, permanently accessible format.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { icon: BadgeCheck, text: "Every profile manually verified before listing",    c: "#15803D" },
                  { icon: Shield,     text: "No paid rankings, no sponsored placements",          c: "#2563EB" },
                  { icon: Globe,      text: "Publicly indexed and permanently accessible",        c: "#7C3AED" },
                  { icon: Sparkles,   text: "AI-powered growth analysis for every startup",       c: "#D97706" },
                  { icon: Calculator, text: "Free valuation tool for early-stage founders",       c: "#DC2626" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon style={{ width: 13, height: 13, color: item.c, flexShrink: 0 }} />
                    <span className="italic" style={{ fontSize: 13, color: "#5A4A30" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CORE PRINCIPLES ── */}
          <section
            className="a3 py-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Core principles"
          >
            <div className="sh"><span className="sh-l">Core Principles</span><div className="sh-r" /></div>
            <div
              className="principles-grid"
              style={{ gap: 1, background: "#D8D2C4", border: "1px solid #D8D2C4" }}
            >
              {[
                { icon: Users,     title: "Built for Builders",       desc: "Every listed startup represents independent execution — no accelerator required, no VC needed to get listed." },
                { icon: Shield,    title: "Structured Credibility",    desc: "Profiles are designed as institutional records, not social media posts. Data-first, editorial-grade." },
                { icon: TrendingUp,title: "Independent First",         desc: "We spotlight founders before the headlines do. UpForge is where a startup's story starts." },
                { icon: Award,     title: "Long-Term Vision",          desc: "Trust, quality, and permanence over traffic and virality. Built to last decades, not quarters." },
              ].map((item, i) => (
                <div
                  key={i}
                  className="pc-wrap hc"
                  style={{ background: "#FDFCF9", padding: "24px 22px", border: "1px solid #D8D2C4" }}
                >
                  <div
                    className="pc-icon flex items-center justify-center mb-3"
                    style={{ width: 34, height: 34, background: "#F3EFE5" }}
                  >
                    <item.icon style={{ width: 15, height: 15, color: "#8C7D65" }} />
                  </div>
                  <h3 className="pf font-bold mb-2" style={{ fontSize: "1rem", color: "#1A1208" }}>
                    {item.title}
                  </h3>
                  <p className="italic leading-[1.75]" style={{ fontSize: 11.5, color: "#5A4A30" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── ECOSYSTEM MILESTONES ── */}
          <section
            className="a3 py-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Ecosystem milestones"
          >
            {/* Full-width image banner */}
            <div className="imgf" style={{ height: "clamp(160px,22vw,290px)", marginBottom: 20 }}>
              <img src={IMAGES.builders} alt="Indian startup builders — from 10,000 to a global ecosystem" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,18,8,.82) 0%, rgba(26,18,8,.15) 60%, transparent 100%)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 clamp(20px,4vw,52px)" }}>
                <p
                  className="pf font-black text-white"
                  style={{ fontSize: "clamp(1.2rem,3vw,2.4rem)", lineHeight: 1.18 }}
                >
                  From 10,000 startups<br />to a global ecosystem.
                </p>
              </div>
            </div>

            <div className="sh"><span className="sh-l">Ecosystem Milestones</span><div className="sh-r" /></div>
            <div
              className="milestone-grid"
              style={{ gap: 1, background: "#D8D2C4", border: "1px solid #D8D2C4" }}
            >
              {insights.milestones.map((m: any, i: number) => {
                const isLast = i === insights.milestones.length - 1
                return (
                  <div
                    key={i}
                    style={{
                      background: isLast ? "#1A1208" : "#FDFCF9",
                      padding: "18px 16px",
                    }}
                  >
                    <p
                      className="pf font-black leading-none mb-2"
                      style={{ fontSize: "1.45rem", color: isLast ? "#E8C547" : "#1A1208" }}
                    >
                      {m.year}
                    </p>
                    <p
                      className="italic leading-[1.65]"
                      style={{ fontSize: 11, color: isLast ? "rgba(255,255,255,.65)" : "#5A4A30" }}
                    >
                      {m.event}
                    </p>
                  </div>
                )
              })}
            </div>
          </section>

          {/* ── WHO WE SERVE ── */}
          <section
            className="a3 py-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Who uses UpForge"
          >
            <div className="sh"><span className="sh-l">Who Uses UpForge</span><div className="sh-r" /></div>
            <div
              className="serve-grid"
              style={{ gap: 1, background: "#D8D2C4", border: "1px solid #D8D2C4" }}
            >
              {[
                { type: "Founders",  headline: "Build your paper trail",    dark: true,  href: "/submit",   desc: "Get independently verified and indexed in India's most trusted startup registry." },
                { type: "Investors", headline: "Discover before the crowd", dark: false, href: "/startup",  desc: "Search verified startup data across 30+ sectors before they hit headlines." },
                { type: "Press",     headline: "Cite with confidence",      dark: false, href: "/startup",  desc: "Reliable startup data — manually verified, permanently accessible, always citable." },
              ].map((aud, i) => (
                <div
                  key={i}
                  style={{
                    background: aud.dark ? "#1A1208" : "#FDFCF9",
                    padding: "24px 22px",
                  }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.16em] mb-2"
                    style={{ color: aud.dark ? "#E8C547" : "#AAA", fontFamily: "system-ui,sans-serif" }}
                  >
                    {aud.type}
                  </p>
                  <h3
                    className="pf font-bold mb-3"
                    style={{ fontSize: "1.1rem", color: aud.dark ? "white" : "#1A1208" }}
                  >
                    {aud.headline}
                  </h3>
                  <p
                    className="italic leading-[1.72] mb-4"
                    style={{ fontSize: 12, color: aud.dark ? "rgba(255,255,255,.5)" : "#5A4A30" }}
                  >
                    {aud.desc}
                  </p>
                  <Link
                    href={aud.href}
                    className="inline-flex items-center gap-1 hover:opacity-70 transition-opacity"
                    style={{
                      fontSize: 10, fontWeight: 700,
                      color: aud.dark ? "#E8C547" : "#1A1208",
                      textDecoration: "none", fontFamily: "system-ui,sans-serif",
                      textTransform: "uppercase", letterSpacing: "0.12em",
                    }}
                  >
                    Explore <ArrowRight style={{ width: 11, height: 11 }} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          {/* ── FAQ ── */}
          <section
            className="a4 py-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Frequently asked questions"
          >
            <div className="sh"><span className="sh-l">Frequently Asked Questions</span><div className="sh-r" /></div>
            <div style={{ border: "1px solid #D8D2C4", background: "#FDFCF9", padding: "0 clamp(16px,3vw,28px)" }}>
              {FAQ_ITEMS.map((faq, i) => (
                <details
                  key={i}
                  className="faq-item"
                  style={{ borderBottom: i === FAQ_ITEMS.length - 1 ? "none" : "1px solid #D8D2C4" }}
                >
                  <summary
                    style={{
                      listStyle: "none", display: "flex",
                      alignItems: "center", justifyContent: "space-between",
                      gap: 12, padding: "16px 0", cursor: "pointer",
                    }}
                  >
                    <span
                      className="faq-q-text italic leading-[1.4]"
                      style={{ fontSize: "clamp(13px,1.6vw,14.5px)", fontWeight: 600, color: "#5A4A30" }}
                    >
                      {faq.q}
                    </span>
                    <svg
                      className="faq-arrow"
                      width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ flexShrink: 0 }}
                    >
                      <path d="M2 4L6 8L10 4" stroke="#8C7D65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <div style={{ paddingBottom: 14 }}>
                    <p className="italic leading-[1.82]" style={{ fontSize: 13, color: "#5A4A30" }}>
                      {faq.a}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* ── QUICK LINKS — same grid as homepage ── */}
          <section
            className="a4 py-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="Explore more on UpForge"
          >
            <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
              Everything on UpForge
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { l: "Startup Registry",    h: "/startup",        desc: "Full verified database" },
                { l: "The Founder Chronicle",h: "/",             desc: "10 founder stories" },
                { l: "Indian Unicorns",      h: "/indian-unicorns",desc: "All 126 unicorns" },
                { l: "The Forge (Blog)",     h: "/blog",           desc: "Startup intelligence" },
                { l: "AI Startups India",    h: "/startup?sector=AI%2FML", desc: "India's AI builders" },
                { l: "FinTech Startups",     h: "/startup?sector=FinTech", desc: "Zerodha, CRED & more" },
                { l: "Valuation Tool",       h: "/report",         desc: "Free AI estimate" },
                { l: "Submit Your Startup",  h: "/submit",         desc: "Get listed free" },
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
                    {lnk.l}
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                      <path d="M2 7L7 2M7 2H3M7 2V6" stroke="#1A1208" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[8.5px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {lnk.desc}
                  </span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── FOOTER CTA — mirrors homepage footer CTA exactly ── */}
          <section
            className="a4 pt-7"
            style={{ borderBottom: "1px solid #C8C2B4" }}
            aria-label="List your startup on UpForge"
          >
            <div className="grid sm:grid-cols-2 gap-6 items-center">
              <div>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.24em] mb-2"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
                >
                  UpForge Registry
                </p>
                <p
                  className="pf font-bold leading-snug mb-2"
                  style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)", color: "#1A1208" }}
                >
                  Your founder story starts with a verified profile.
                </p>
                <p
                  className="leading-relaxed"
                  style={{ fontSize: 11.5, color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}
                >
                  Get independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <div className="flex flex-col sm:items-end gap-3">
                <Link
                  href="/submit"
                  className="inline-flex items-center gap-2 px-5 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
                  style={{
                    background: "#1A1208",
                    fontSize: "clamp(9px,1vw,11px)",
                    fontFamily: "system-ui,sans-serif",
                  }}
                  aria-label="List your Indian startup on UpForge for free"
                >
                  List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ FOOTER — mirrors homepage footer exactly ══ */}
          <footer className="mt-7 pb-2">
            <p
              className="text-[8.5px] leading-relaxed"
              style={{
                color: "#BBB0A0",
                fontFamily: "system-ui,sans-serif",
                borderTop: "1px solid #D8D2C4",
                paddingTop: "1rem",
              }}
            >
              * Registry data sourced from DPIIT, Tracxn, Inc42, Forbes India, Hurun India 2025, and company announcements as of March 2026.
              UpForge is an independent registry — no paid placements, no sponsored rankings.
              All figures are approximate and reflect latest available public data.
            </p>

            <nav aria-label="Footer navigation" className="mt-4">
              <ul
                className="flex flex-wrap gap-x-4 gap-y-2"
                style={{ listStyle: "none", margin: 0, padding: 0 }}
              >
                {[
                  { l: "The Founder Chronicle",  h: "/"                },
                  { l: "Startup Registry India", h: "/startup"         },
                  { l: "Indian Unicorns 2026",   h: "/indian-unicorns" },
                  { l: "The Forge — Blog",        h: "/blog"            },
                  { l: "Valuation Tool",          h: "/report"          },
                  { l: "Submit Startup",          h: "/submit"          },
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
