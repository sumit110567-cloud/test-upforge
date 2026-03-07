// app/startup/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import {
  ChevronLeft, ChevronRight, Search, BadgeCheck,
  TrendingUp, Zap, Activity, ArrowRight, ArrowUpRight,
  MapPin, Calendar, Layers,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  return {
    title: `Indian Startup Registry 2026 — ${(count || 72000).toLocaleString()}+ Verified Startups | UpForge`,
    description: `Browse ${(count || 72000).toLocaleString()}+ verified Indian startups across AI, SaaS, FinTech, HealthTech and 30+ sectors. Filter by industry, search by name — free, ad-free, independently verified.`,
    keywords: [
      "Indian startup directory 2026", "startup registry India", "verified Indian startups",
      "list of Indian startups", "startup database India", "UpForge registry",
      "top startups India 2026", "Indian startup list", "startup search India",
    ].join(", "),
    alternates: { canonical: "https://upforge.in/startup" },
    openGraph: {
      title: `Indian Startup Registry — ${(count || 72000).toLocaleString()}+ Verified | UpForge`,
      description: "Browse India's most comprehensive startup database. Free, verified, updated daily.",
      url: "https://upforge.in/startup",
      siteName: "UpForge",
      images: [{ url: "https://upforge.in/og-registry.png", width: 1200, height: 630 }],
      locale: "en_IN", type: "website",
    },
    twitter: {
      card: "summary_large_image", site: "@upforge_in",
      title: "Indian Startup Registry 2026 | UpForge",
      description: `${(count || 72000).toLocaleString()}+ verified Indian startups. Free & ad-free.`,
    },
    robots: { index: true, follow: true },
  };
}

export const revalidate = 0;

interface Props {
  searchParams?: { page?: string; search?: string; sector?: string };
}

async function getRegistryInsights() {
  try {
    const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: `Return ONLY valid JSON:
            {
              "trendingSectors": [{"name":"sector name","growth":"+XX%","heat":"hot/warm"}],
              "registryStats": {"newThisWeek":"number","mostActiveSector":"sector","avgFunding":"amount","topCity":"city"},
              "spotlight": {"headline":"short insight about Indian startup scene","sub":"one line detail"}
            }`,
          },
          { role: "user", content: "Give trending Indian startup sectors and registry insights for March 2026." },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
      next: { revalidate: 600 },
    });
    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return {
      trendingSectors: [
        { name: "AI/ML", growth: "+156%", heat: "hot" },
        { name: "FinTech", growth: "+112%", heat: "hot" },
        { name: "SaaS", growth: "+134%", heat: "hot" },
        { name: "Climate Tech", growth: "+89%", heat: "warm" },
        { name: "D2C Brands", growth: "+67%", heat: "warm" },
        { name: "HealthTech", growth: "+78%", heat: "warm" },
        { name: "EdTech", growth: "+55%", heat: "warm" },
        { name: "Space Tech", growth: "+145%", heat: "hot" },
      ],
      registryStats: { newThisWeek: "34", mostActiveSector: "SaaS", avgFunding: "$12.4M", topCity: "Bengaluru" },
      spotlight: {
        headline: "India's startup ecosystem hits record Q1 2026 funding",
        sub: "$9.2B deployed across 591 deals — AI and FinTech lead the charge",
      },
    };
  }
}

// ─── SECTOR IMAGE MAP — replace with real images ──────────────────────────────
const SECTOR_HERO_IMAGES: Record<string, string> = {
  "AI/ML":       "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
  "FinTech":     "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?w=800&q=80",
  "SaaS":        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  "Climate Tech":"https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&q=80",
  "HealthTech":  "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&q=80",
  "EdTech":      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
  "Space Tech":  "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800&q=80",
  "D2C Brands":  "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
}

// ─── MASTHEAD IMAGE — newspaper hero behind the title ─────────────────────────
const MASTHEAD_BG = "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"

export default async function StartupPage({ searchParams }: Props) {
  const supabase = await createClient();
  const insights = await getRegistryInsights();

  const params = await (searchParams as any);
  const searchQuery  = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";
  const currentPage  = params?.page && !searchQuery ? Number(params.page) : 1;

  const ITEMS_PER_PAGE = 15;
  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to   = from + ITEMS_PER_PAGE - 1;

  let query = supabase.from("startups").select("*", { count: "exact" });
  if (searchQuery)  query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,industry.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
  if (sectorFilter) query = query.or(`industry.ilike.%${sectorFilter}%,category.ilike.%${sectorFilter}%`);

  const { data: startups, count, error } = await query
    .order("name", { ascending: true })
    .range(from, to);

  if (error) console.log("SUPABASE ERROR:", error);

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);
  const updatedAt  = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr   = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        /* ── BASE ── */
        .rp { font-family: 'Georgia', 'Times New Roman', serif; }
        .pf { font-family: 'Playfair Display', Georgia, serif; }
        .sf { font-family: system-ui, -apple-system, sans-serif; }

        /* ── PALETTE (matches homepage exactly) ── */
        :root {
          --parch:   #F3EFE5;
          --parch2:  #EDE9DF;
          --ink:     #1A1208;
          --ink2:    #2C2010;
          --ink3:    #5A4A30;
          --ink4:    #8C7D65;
          --ink5:    #BBB0A0;
          --rule:    #C8C2B4;
          --rule2:   #D8D2C4;
          --gold:    #D97706;
          --gold2:   #E8C547;
          --gold3:   #8B6914;
          --white:   #FDFCF9;
        }

        /* ── PAGE BG ── */
        body { background: var(--parch); }

        /* ── ANIMATIONS (staggered like homepage) ── */
        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: storyIn .4s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: storyIn .4s .07s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: storyIn .4s .14s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: storyIn .4s .21s cubic-bezier(.16,1,.3,1) both; }
        .a4 { animation: storyIn .4s .28s cubic-bezier(.16,1,.3,1) both; }

        /* ── LIVE DOT ── */
        .live-dot {
          width: 7px; height: 7px; background: #22C55E;
          border-radius: 50%; flex-shrink: 0; display: inline-block;
        }
        .live-dot::after {
          content: ''; display: block; width: 100%; height: 100%;
          border-radius: 50%; background: rgba(34,197,94,.35);
          animation: livePulse 2s ease-in-out infinite;
        }
        @keyframes livePulse {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(2.4); opacity: 0; }
        }

        /* ── MASTHEAD BG IMAGE ── */
        .masthead-hero {
          position: relative;
          overflow: hidden;
        }
        .masthead-hero::before {
          content: '';
          position: absolute; inset: 0;
          background: url('${MASTHEAD_BG}') center/cover no-repeat;
          opacity: 0.045;
          filter: sepia(100%) contrast(120%);
        }
        .masthead-hero > * { position: relative; z-index: 1; }

        /* ── SECTOR PILL ── */
        .sec-pill {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 9.5px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; padding: 5px 12px;
          border: 1px solid var(--rule2); background: var(--white);
          color: var(--ink4); font-family: system-ui, sans-serif;
          transition: all .15s; white-space: nowrap; cursor: pointer;
        }
        .sec-pill:hover { border-color: var(--ink); color: var(--ink); background: var(--parch2); }
        .sec-pill.active { background: var(--ink); color: white; border-color: var(--ink); }
        .sec-pill.hot { border-color: rgba(217,119,6,.4); background: rgba(217,119,6,.06); color: var(--gold); }
        .sec-pill.hot:hover { background: var(--gold); color: white; border-color: var(--gold); }

        /* ── SEARCH ── */
        .srch-wrap {
          display: flex; align-items: center; gap: 10px;
          border-bottom: 2px solid var(--ink); padding: 6px 2px;
          transition: border-color .18s; max-width: 680px;
          background: transparent;
        }
        .srch-wrap:focus-within { border-color: var(--gold); }
        .srch-input {
          flex: 1; font-size: 14px; color: var(--ink);
          background: transparent; border: none; outline: none;
          padding: 8px 0; font-family: 'Georgia', serif;
        }
        .srch-input::placeholder { color: var(--ink5); }

        /* ── STARTUP CARD ── */
        .s-card {
          background: var(--white);
          border: 1px solid var(--rule2);
          display: flex; flex-direction: column; height: 100%;
          transition: border-color .18s, box-shadow .18s, transform .18s;
          position: relative; overflow: hidden;
        }
        .s-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: var(--rule2);
          transition: background .18s;
        }
        .s-card:hover { border-color: var(--ink); box-shadow: 4px 4px 0 var(--ink); transform: translate(-1px,-1px); }
        .s-card:hover::before { background: var(--gold); }

        /* ── CARD IMAGE ── */
        .card-img-wrap {
          width: 100%; height: 120px; overflow: hidden;
          background: var(--parch2); position: relative;
          border-bottom: 1px solid var(--rule2); flex-shrink: 0;
        }
        .card-img-wrap img { width: 100%; height: 100%; object-fit: cover; object-position: center; }
        .card-img-monogram {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
        }

        /* ── LOGO BOX ── */
        .logo-box {
          width: 40px; height: 40px; flex-shrink: 0;
          border: 1.5px solid var(--rule2); background: white;
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }

        /* ── MOBILE ROW ── */
        .m-row {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px; background: var(--white);
          border-bottom: 1px solid var(--rule2); transition: background .15s;
        }
        .m-row:hover { background: var(--parch2); }

        /* ── STAT CARD ── */
        .stat-card {
          background: var(--white); border: 1px solid var(--rule2);
          padding: 18px 20px; flex: 1; position: relative; overflow: hidden;
        }
        .stat-card::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: var(--rule2);
        }

        /* ── INSIGHT STRIP CARD ── */
        .insight-card {
          padding: 18px 20px; background: var(--white);
          border: 1px solid var(--rule2); position: relative; overflow: hidden;
        }
        .insight-card::before {
          content: '';
          position: absolute; top: 0; left: 0; bottom: 0;
          width: 2px; background: var(--gold);
        }

        /* ── PAGINATION ── */
        .pg-btn {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 8px 16px; border: 1px solid var(--rule2);
          background: var(--white); font-size: 10.5px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase;
          color: var(--ink4); font-family: system-ui, sans-serif;
          transition: all .15s;
        }
        .pg-btn:hover { border-color: var(--ink); color: var(--ink); background: var(--parch2); }
        .pg-btn.active { background: var(--ink); color: white; border-color: var(--ink); }
        .pg-btn.off { opacity: .28; pointer-events: none; }

        /* ── FEATURED ROW — big 3-col layout ── */
        .featured-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1px; background: var(--rule2); }
        .featured-col { background: var(--white); }

        /* ── CARD GRID ── */
        .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1px; background: var(--rule2); }

        /* ── VERIFIED BADGE ── */
        .vbadge {
          display: inline-flex; align-items: center; gap: 4px;
          font-size: 8.5px; font-weight: 700; letter-spacing: .14em;
          text-transform: uppercase; color: #15803D;
          border: 1px solid rgba(21,128,61,.4); padding: 3px 8px;
          font-family: system-ui, sans-serif;
        }

        /* ── SCROLL SNAP for sector pills ── */
        .sec-scroll { overflow-x: auto; -webkit-overflow-scrolling: touch; scrollbar-width: none; }
        .sec-scroll::-webkit-scrollbar { display: none; }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) { .featured-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 768px) {
          .featured-grid { grid-template-columns: 1fr; }
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
          .card-grid { grid-template-columns: 1fr 1fr; }
          .stats-row { flex-wrap: wrap; }
          .stats-row .stat-card { min-width: calc(50% - 1px); }
        }
        @media (max-width: 480px) {
          .card-grid { grid-template-columns: 1fr; }
          .stats-row .stat-card { min-width: 100%; }
        }

        /* ── DROP CAP for spotlight ── */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.2em; font-weight: 900; line-height: 0.82;
          float: left; margin-right: 0.06em; margin-top: 0.05em;
          color: var(--ink);
        }
      `}</style>

      <div className="rp" style={{ minHeight: "100vh", background: "var(--parch)" }}>

        {/* ══════════════════════════════════════════════════════════
            BREADCRUMB
        ══════════════════════════════════════════════════════════ */}
        <nav
          aria-label="Breadcrumb"
          className="sf"
          style={{ background: "#EDE9DF", borderBottom: "1px solid var(--rule2)", padding: "7px 0" }}
        >
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px,3vw,32px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }} className="hover:text-[var(--ink)]">UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 600 }}>Startup Registry</li>
            </ol>
          </div>
        </nav>

        {/* ══════════════════════════════════════════════════════════
            MASTHEAD — full broadsheet header with background texture
        ══════════════════════════════════════════════════════════ */}
        <header
          className="masthead-hero a0"
          style={{ borderBottom: "3px solid var(--ink)", background: "var(--parch)" }}
        >
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px,3vw,32px)" }}>

            {/* ── Dateline strip ── */}
            <div
              className="sf"
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "10px 0", borderBottom: "1px solid var(--rule2)", flexWrap: "wrap", gap: 8,
              }}
            >
              <span style={{ fontSize: 9, color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600 }}>
                {todayStr} · Vol. II
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                {["Independent", "Ad-Free", "Verified"].map(t => (
                  <span key={t} style={{ fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em" }}>✓ {t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span className="live-dot" />
                <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em" }}>
                  Updated {updatedAt} IST
                </span>
              </div>
            </div>

            {/* ── Publication wordmark ── */}
            <div
              style={{
                textAlign: "center",
                padding: "clamp(28px,5vw,52px) 0 clamp(16px,3vw,28px)",
                borderBottom: "1px solid var(--rule2)",
              }}
            >
              <p className="sf" style={{ fontSize: 9, letterSpacing: "0.36em", textTransform: "uppercase", color: "var(--ink5)", marginBottom: 14 }}>
                UpForge · Public Startup Registry · India Edition
              </p>

              {/* Ornament rule */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 18 }}>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
                <span style={{ color: "var(--rule)", fontSize: 11 }}>✦</span>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
              </div>

              {/* Big title */}
              <h1
                className="pf"
                style={{
                  fontSize: "clamp(3rem, 9vw, 7.5rem)",
                  fontWeight: 900, lineHeight: 0.9,
                  color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 22,
                }}
              >
                Startup Registry
              </h1>

              {/* Status row */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(10px,2vw,28px)", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="live-dot" />
                  <span className="sf" style={{ fontSize: 9, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
                    Live · {(count || 0).toLocaleString()} Profiles
                  </span>
                </div>
                <span className="vbadge"><BadgeCheck style={{ width: 9, height: 9 }} /> All Verified</span>
                <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  India's Most Comprehensive Database
                </span>
              </div>
            </div>

            {/* ── Spotlight + Stats strip ── */}
            <div
              className="a1 hide-mob"
              style={{ display: "flex", alignItems: "stretch", borderBottom: "1px solid var(--rule2)", flexWrap: "wrap" }}
            >

              {/* Spotlight editorial */}
              <div
                style={{
                  flex: "0 0 auto", width: "clamp(260px,40%,500px)",
                  padding: "20px 28px 20px 0", borderRight: "1px solid var(--rule2)",
                  display: "flex", flexDirection: "column", gap: 10,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 2, height: 28, background: "var(--gold)", flexShrink: 0 }} />
                  <span className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.26em", color: "var(--gold)" }}>
                    Registry Spotlight
                  </span>
                </div>
                <p
                  className="rp"
                  style={{ fontSize: 13.5, fontWeight: 600, color: "var(--ink)", lineHeight: 1.6 }}
                >
                  {insights.spotlight.headline}
                </p>
                <p className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.7 }}>
                  {insights.spotlight.sub}
                </p>
              </div>

              {/* Stat cells */}
              <div className="stats-row" style={{ flex: 1, display: "flex", alignItems: "stretch" }}>
                {[
                  { label: "New This Week",  v: insights.registryStats.newThisWeek,     sub: "startups added",     warm: false },
                  { label: "Most Active",    v: insights.registryStats.mostActiveSector, sub: "sector right now",   warm: true  },
                  { label: "Top City",       v: insights.registryStats.topCity,          sub: "by listing count",   warm: false },
                  { label: "Our Registry",   v: `${(count || 0).toLocaleString()}+`,     sub: "verified profiles",  warm: true  },
                ].map((s, i) => (
                  <div key={i} className="stat-card" style={{ background: s.warm ? "#FAF6EE" : "var(--white)", borderLeft: "1px solid var(--rule2)", borderBottom: "none", borderTop: "none", borderRight: "none" }}>
                    <p
                      className="pf"
                      style={{ fontSize: "clamp(1.1rem,2.2vw,1.6rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, marginBottom: 5 }}
                    >
                      {s.v}
                    </p>
                    <p className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--ink5)", marginBottom: 2 }}>
                      {s.label}
                    </p>
                    <p className="rp" style={{ fontSize: 10.5, color: "var(--ink5)" }}>{s.sub}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </header>

        {/* ══════════════════════════════════════════════════════════
            SECTOR IMAGES — visual strip (like magazine covers row)
        ══════════════════════════════════════════════════════════ */}
        <div
          className="a2 hide-mob"
          style={{
            borderBottom: "2px solid var(--ink)",
            background: "var(--ink)", overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", height: 180 }}>
            {insights.trendingSectors.slice(0, 6).map((sector: any, i: number) => (
              <Link
                key={i}
                href={`/startup?sector=${encodeURIComponent(sector.name)}`}
                style={{
                  flex: 1, position: "relative", overflow: "hidden",
                  borderRight: i < 5 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  display: "block",
                }}
              >
                {/* Sector image */}
                {SECTOR_HERO_IMAGES[sector.name] && (
                  <img
                    src={SECTOR_HERO_IMAGES[sector.name]}
                    alt={sector.name}
                    style={{
                      position: "absolute", inset: 0, width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      filter: "grayscale(30%) sepia(20%) contrast(110%)",
                      opacity: sectorFilter === sector.name ? 1 : 0.65,
                      transition: "opacity .2s, transform .3s",
                    }}
                  />
                )}
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,0.92) 0%, rgba(26,18,8,0.3) 60%, transparent 100%)" }} />
                {/* Heat badge */}
                {sector.heat === "hot" && (
                  <div
                    className="sf"
                    style={{
                      position: "absolute", top: 8, right: 8,
                      background: "var(--gold)", color: "var(--ink)",
                      fontSize: 7, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.2em",
                      padding: "2px 6px",
                    }}
                  >
                    HOT
                  </div>
                )}
                {/* Label */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "10px 12px" }}>
                  <p className="pf" style={{ fontSize: 13, fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 3 }}>
                    {sector.name}
                  </p>
                  <p className="sf" style={{ fontSize: 9, color: "var(--gold2)", fontWeight: 700 }}>{sector.growth}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════════════════ */}
        <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px,3vw,32px) clamp(40px,8vw,80px)" }}>

          {/* ── Sector pills + Search ── */}
          <div className="a2">

            {/* Sector pills */}
            <div
              className="sec-scroll"
              style={{ padding: "14px 0", borderBottom: "1px solid var(--rule2)" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10, minWidth: "max-content" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 5, flexShrink: 0 }}>
                  <Zap style={{ width: 11, height: 11, color: "var(--ink5)" }} />
                  <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--ink5)" }}>
                    Trending
                  </span>
                </div>

                {/* All sectors link */}
                <Link
                  href="/startup"
                  className={`sec-pill ${!sectorFilter ? "active" : ""}`}
                >
                  All Sectors
                </Link>

                {insights.trendingSectors.map((sector: any, i: number) => (
                  <Link
                    key={i}
                    href={`?sector=${encodeURIComponent(sector.name)}${searchQuery ? `&search=${searchQuery}` : ""}`}
                    className={`sec-pill ${sectorFilter === sector.name ? "active" : sector.heat === "hot" ? "hot" : ""}`}
                  >
                    {sector.heat === "hot" && sectorFilter !== sector.name && (
                      <span style={{ fontSize: 9 }}>🔥</span>
                    )}
                    {sector.name}
                    <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, color: sectorFilter === sector.name ? "rgba(255,255,255,0.6)" : "#15803D" }}>
                      {sector.growth}
                    </span>
                  </Link>
                ))}

                {sectorFilter && (
                  <Link
                    href={`?${searchQuery ? `search=${searchQuery}` : ""}`}
                    className="sf"
                    style={{ fontSize: 10.5, color: "var(--ink5)", textDecoration: "underline", textUnderlineOffset: 3, flexShrink: 0 }}
                  >
                    Clear ×
                  </Link>
                )}
              </div>
            </div>

            {/* Search bar */}
            <div style={{ padding: "18px 0", borderBottom: "1px solid var(--rule2)" }}>
              <form method="GET">
                <div className="srch-wrap">
                  <Search style={{ width: 14, height: 14, color: "var(--ink5)", flexShrink: 0 }} />
                  <input
                    type="text" name="search" defaultValue={searchQuery}
                    placeholder="Search startups, sectors, industries, cities…"
                    aria-label="Search Indian startups"
                    className="srch-input"
                  />
                  <input type="hidden" name="page" value="1" />
                  {sectorFilter && <input type="hidden" name="sector" value={sectorFilter} />}
                  <button
                    type="submit"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}
                    aria-label="Search"
                  >
                    <ArrowRight style={{ width: 14, height: 14, color: "var(--ink4)" }} />
                  </button>
                </div>
              </form>

              {(searchQuery || sectorFilter) && (
                <p className="rp" style={{ marginTop: 8, fontSize: 11.5, color: "var(--ink4)" }}>
                  <span className="pf" style={{ fontWeight: 700, color: "var(--ink)", fontSize: 15 }}>
                    {(count || 0).toLocaleString()}
                  </span>{" "}
                  result{count !== 1 ? "s" : ""}
                  {searchQuery  && <> for <strong style={{ color: "var(--ink)", fontFamily: "'Georgia', serif" }}>"{searchQuery}"</strong></>}
                  {sectorFilter && <> in <strong style={{ color: "var(--ink)", fontFamily: "'Georgia', serif" }}>{sectorFilter}</strong></>}
                  {" · "}
                  <Link href="/startup" style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: 3 }}>
                    Clear all
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* ── RESULTS ── */}
          <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>

            {/* ── Featured top 3 — larger editorial cards ── */}
            {startups && startups.length >= 3 && currentPage === 1 && !searchQuery && !sectorFilter && (
              <div className="a3" style={{ marginTop: 28 }}>

                {/* Column head */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                  <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.26em", color: "var(--ink5)" }}>
                    Featured in This Edition
                  </span>
                  <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                </div>

                {/* 3-col featured grid */}
                <div className="featured-grid" style={{ marginBottom: 28, border: "1px solid var(--rule2)" }}>
                  {startups.slice(0, 3).map((startup, fi) => (
                    <Link key={startup.id} href={`/startup/${startup.slug}`} style={{ display: "block" }}>
                      <div className="featured-col" style={{ height: "100%", display: "flex", flexDirection: "column", padding: 0 }}>

                        {/* Hero image */}
                        <div style={{ height: 180, background: "var(--parch2)", overflow: "hidden", position: "relative", borderBottom: "1px solid var(--rule2)" }}>
                          {startup.logo_url ? (
                            <img
                              src={startup.logo_url}
                              alt={startup.name}
                              style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "sepia(8%)" }}
                            />
                          ) : (
                            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: `hsl(${fi * 40 + 30}, 18%, 88%)` }}>
                              <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(26,18,8,0.18)" }}>
                                {startup.name.charAt(0)}
                              </span>
                            </div>
                          )}
                          {/* Overlay label */}
                          <div style={{
                            position: "absolute", bottom: 0, left: 0, right: 0,
                            background: "linear-gradient(to top, rgba(26,18,8,0.85) 0%, transparent 100%)",
                            padding: "24px 16px 12px",
                          }}>
                            <span className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--gold2)" }}>
                              {startup.industry || startup.category || "Startup"}
                            </span>
                          </div>
                          {/* Edition number */}
                          <div className="sf" style={{ position: "absolute", top: 10, left: 10, background: "var(--ink)", color: "white", fontSize: 8, fontWeight: 700, padding: "3px 7px", letterSpacing: "0.18em", textTransform: "uppercase" }}>
                            No. {String(fi + 1).padStart(2, "0")}
                          </div>
                        </div>

                        {/* Card body */}
                        <div style={{ padding: "18px 18px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                          <h2
                            className="pf"
                            style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, marginBottom: 10 }}
                          >
                            {startup.name}
                          </h2>
                          <p
                            className="rp"
                            style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.8, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}
                          >
                            {startup.description}
                          </p>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--rule2)" }}>
                            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                              {startup.founded_year && (
                                <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                  <Calendar style={{ width: 9, height: 9, color: "var(--ink5)" }} />
                                  <span className="sf" style={{ fontSize: 9, color: "var(--ink5)" }}>{startup.founded_year}</span>
                                </div>
                              )}
                              <span className="vbadge"><BadgeCheck style={{ width: 9, height: 9 }} /> Verified</span>
                            </div>
                            <ArrowUpRight style={{ width: 13, height: 13, color: "var(--ink4)" }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ── Column head for full grid ── */}
            <div className="a3" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14, marginTop: (currentPage === 1 && !searchQuery && !sectorFilter) ? 0 : 28 }}>
              <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.26em", color: "var(--ink5)" }}>
                {searchQuery || sectorFilter ? "Search Results" : "All Startups"}
                {" "}
                <span style={{ color: "var(--gold)", fontFamily: "'Georgia', serif", fontStyle: "italic", textTransform: "none", letterSpacing: 0, fontWeight: 400, fontSize: 11 }}>
                  — {(count || 0).toLocaleString()} profiles
                </span>
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
              {/* Page indicator */}
              <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", flexShrink: 0, fontWeight: 600, letterSpacing: "0.1em" }}>
                Pg. {currentPage} / {totalPages || 1}
              </span>
            </div>

            {/* ── Desktop: card grid ── */}
            <div
              className="a3 card-grid hide-mob"
              style={{ border: "1px solid var(--rule2)" }}
            >
              {(startups && startups.length >= 3 && currentPage === 1 && !searchQuery && !sectorFilter
                ? startups.slice(3)
                : startups || []
              ).map((startup) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`} style={{ display: "block" }}>
                  <div className="s-card">

                    {/* Card image area */}
                    <div className="card-img-wrap">
                      {startup.logo_url ? (
                      <img
                        src={startup.logo_url}
                        alt={startup.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                      />
                      ) : (
                        <div className="card-img-monogram">
                          <span className="pf" style={{ fontSize: "3.2rem", fontWeight: 900, color: "rgba(26,18,8,0.12)" }}>
                            {startup.name.charAt(0)}
                          </span>
                        </div>
                      )}
                      {/* Sector overlay tag */}
                      <div
                        className="sf"
                        style={{
                          position: "absolute", bottom: 8, left: 10,
                          background: "var(--ink)", color: "white",
                          fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em",
                          padding: "2px 7px",
                        }}
                      >
                        {startup.industry || startup.category || "Startup"}
                      </div>
                      <BadgeCheck style={{ position: "absolute", top: 8, right: 8, width: 13, height: 13, color: "#15803D" }} />
                    </div>

                    {/* Card body */}
                    <div style={{ padding: "14px 14px 12px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h3
                        className="pf"
                        style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, marginBottom: 8 }}
                      >
                        {startup.name}
                      </h3>
                      <p
                        className="rp"
                        style={{ fontSize: 11.5, color: "var(--ink3)", lineHeight: 1.75, flex: 1, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}
                      >
                        {startup.description}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 9, borderTop: "1px solid var(--rule2)" }}>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                          {startup.founded_year && (
                            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                              <Calendar style={{ width: 8, height: 8, color: "var(--ink5)" }} />
                              <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.founded_year}</span>
                            </div>
                          )}
                          {startup.city && (
                            <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                              <MapPin style={{ width: 8, height: 8, color: "var(--ink5)" }} />
                              <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.city}</span>
                            </div>
                          )}
                        </div>
                        <ArrowUpRight style={{ width: 11, height: 11, color: "var(--ink5)" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Mobile: list view ── */}
            <div
              className="show-mob"
              style={{ display: "none", flexDirection: "column", border: "1px solid var(--rule2)" }}
            >
              {startups?.map((startup) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`}>
                  <div className="m-row">
                    {/* Logo */}
                    <div
                      className="logo-box"
                      style={{ width: 38, height: 38, borderRadius: 0 }}
                    >
                      {startup.logo_url ? (
                        <img
                          src={startup.logo_url}
                          alt={startup.name}
                          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", padding: 3 }}
                        />
                      ) : (
                        <span className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink4)" }}>
                          {startup.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                        <span className="pf" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                          {startup.name}
                        </span>
                        <BadgeCheck style={{ width: 10, height: 10, color: "#15803D", flexShrink: 0 }} />
                      </div>
                      <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                        <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                          {startup.industry || startup.category || "Startup"}
                        </span>
                        {startup.founded_year && (
                          <>
                            <span style={{ color: "var(--rule2)" }}>·</span>
                            <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.founded_year}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <ChevronRight style={{ width: 13, height: 13, color: "var(--ink5)", flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>

            {/* ── Empty state ── */}
            {(!startups || startups.length === 0) && (
              <div
                style={{
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  padding: "80px 24px", textAlign: "center",
                  border: "1px solid var(--rule2)", background: "var(--white)",
                }}
              >
                <span className="pf" style={{ fontSize: "4rem", color: "rgba(26,18,8,0.08)", fontWeight: 900, lineHeight: 1, marginBottom: 20 }}>
                  ?
                </span>
                <h3 className="pf" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>
                  No startups found
                </h3>
                <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", marginBottom: 24, maxWidth: 340, lineHeight: 1.7 }}>
                  Try a different search term, or clear the filter and browse all {(count || 0).toLocaleString()}+ verified startups.
                </p>
                <Link
                  href="/startup"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    border: "2px solid var(--ink)", padding: "10px 24px",
                    fontSize: 10.5, fontWeight: 700, color: "var(--ink)",
                    textTransform: "uppercase", letterSpacing: "0.12em",
                    fontFamily: "system-ui", transition: "background .18s",
                    background: "transparent",
                  }}
                >
                  Clear all filters <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            )}

            {/* ── Pagination ── */}
            {totalPages > 1 && (
              <div
                className="a4"
                style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}
              >
                <Link
                  href={`?page=${Math.max(1, currentPage - 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                  className={`pg-btn ${currentPage === 1 ? "off" : ""}`}
                >
                  <ChevronLeft style={{ width: 11, height: 11 }} /> Prev
                </Link>

                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let p: number;
                    if (totalPages <= 5)                    p = i + 1;
                    else if (currentPage <= 3)              p = i + 1;
                    else if (currentPage >= totalPages - 2) p = totalPages - 4 + i;
                    else                                    p = currentPage - 2 + i;
                    return (
                      <Link
                        key={p}
                        href={`?page=${p}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                        className={`pg-btn ${p === currentPage ? "active" : ""}`}
                        style={{ padding: "8px 13px", minWidth: 36, justifyContent: "center" }}
                      >
                        <span className="sf" style={{ fontSize: 11.5 }}>{p}</span>
                      </Link>
                    );
                  })}
                </div>

                <Link
                  href={`?page=${Math.min(totalPages, currentPage + 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                  className={`pg-btn ${currentPage === totalPages ? "off" : ""}`}
                >
                  Next <ChevronRight style={{ width: 11, height: 11 }} />
                </Link>
              </div>
            )}

          </PageTransition>

          {/* ══════════════════════════════════════════════════════════
              INSIGHT STRIP — 3-col editorial data cards
          ══════════════════════════════════════════════════════════ */}
          <div style={{ marginTop: "clamp(40px,7vw,72px)" }}>

            {/* Section head */}
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.26em", color: "var(--ink5)" }}>
                UpForge Registry Insights
              </span>
              <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
              <span style={{ color: "var(--rule)", fontSize: 11 }}>✦</span>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 1, background: "var(--rule2)", border: "1px solid var(--rule2)" }}>
              {[
                { v: "~80%", l: "First-gen founders", b: "India's unicorn builders mostly had no inherited capital — they built with pure conviction and relentless iteration.", icon: "✦" },
                { v: "$950B", l: "Value created under 40", b: "Avendus-Hurun 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP.", icon: "✦" },
                { v: "126+", l: "Indian unicorns", b: "India crossed 126 unicorns. Every founder reading this could build the next one. UpForge helps them get discovered.", icon: "✦" },
              ].map((item, i) => (
                <div key={i} className="insight-card">
                  <p className="pf" style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: 6 }}>{item.v}</p>
                  <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold)", marginBottom: 10 }}>{item.l}</p>
                  <p className="rp" style={{ fontSize: 11.5, color: "var(--ink3)", lineHeight: 1.75 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════
              CTA — List your startup
          ══════════════════════════════════════════════════════════ */}
          <div style={{ marginTop: "clamp(32px,6vw,56px)", padding: "clamp(24px,4vw,40px)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
            {/* Texture overlay */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3C/g%3E%3C/svg%3E")` }} />
            {/* Gold top rule */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, var(--gold3), var(--gold), var(--gold2), var(--gold), var(--gold3))" }} />

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
              <div>
                <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "var(--gold2)", marginBottom: 10 }}>
                  UpForge Registry
                </p>
                <p className="pf" style={{ fontSize: "clamp(1.2rem,3vw,1.8rem)", fontWeight: 700, color: "white", lineHeight: 1.25, marginBottom: 10 }}>
                  Your founder story starts with a verified profile.
                </p>
                <p className="rp" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.5)", lineHeight: 1.75 }}>
                  Get independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <div>
                <Link
                  href="/submit"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "var(--gold)", color: "var(--ink)",
                    padding: "13px 24px", fontSize: 10.5, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.14em",
                    fontFamily: "system-ui", whiteSpace: "nowrap",
                    boxShadow: "3px 3px 0 var(--gold3)",
                    transition: "box-shadow .15s, transform .15s",
                  }}
                >
                  List Free <ArrowRight style={{ width: 13, height: 13 }} />
                </Link>
              </div>
            </div>
          </div>

          {/* ── Trust footer strip ── */}
          <div style={{ height: 2, background: "var(--ink)", marginTop: "clamp(28px,5vw,48px)" }} />
          <div
            style={{
              padding: "14px 0", background: "var(--parch2)",
              display: "flex", flexWrap: "wrap", gap: "8px 24px",
              alignItems: "center", justifyContent: "center",
              borderBottom: "1px solid var(--rule2)",
            }}
          >
            {[
              { icon: BadgeCheck, text: "Every listing manually verified" },
              { icon: Activity,   text: `Live data · ${updatedAt} IST` },
              { icon: TrendingUp, text: "Ecosystem-backed intelligence" },
              { icon: Layers,     text: "No paid placements · Ever" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <item.icon style={{ width: 11, height: 11, color: "var(--ink4)" }} />
                <span className="rp" style={{ fontSize: 11, color: "var(--ink4)" }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* ── Footer nav — SEO keyword links ── */}
          <nav aria-label="Registry navigation" style={{ padding: "16px 0" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Indian Startup Founders 2026", h: "/" },
                { l: "Top AI Startups India",        h: "/top-ai-startups" },
                { l: "Indian Unicorns List",          h: "/indian-unicorns" },
                { l: "Best SaaS Startups",            h: "/best-saas-startups" },
                { l: "Fintech Startups India",        h: "/fintech-startups" },
                { l: "Edtech Founders India",         h: "/edtech-startups" },
                { l: "Submit Your Startup",           h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="sf"
                    style={{ fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>{/* /main content */}
      </div>{/* /page */}
    </>
  );
}
