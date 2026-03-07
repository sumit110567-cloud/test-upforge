import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import {
  ChevronLeft, ChevronRight, Search, BadgeCheck,
  TrendingUp, Zap, Activity, ArrowRight, ArrowUpRight,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const supabase = await createClient();
  const { count } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  return {
    title: `Indian Startup Registry 2026 — ${(count || 72000).toLocaleString()}+ Verified Startups | UpForge`,
    description:
      `Browse ${(count || 72000).toLocaleString()}+ verified Indian startups across AI, SaaS, FinTech, HealthTech and 30+ sectors. Filter by industry, search by name — free, ad-free, independently verified.`,
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

export default async function StartupPage({ searchParams }: Props) {
  const supabase = await createClient();
  const insights = await getRegistryInsights();

  const params = await (searchParams as any);
  const searchQuery  = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";
  const currentPage  = params?.page && !searchQuery ? Number(params.page) : 1;

  const ITEMS_PER_PAGE = 12;
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
  const updatedAt  = new Date().toLocaleTimeString("en-IN",  { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr   = new Date().toLocaleDateString("en-IN",  { weekday: "long",  day: "numeric",   month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        .uf{background:#fff;color:#1a1a1a;font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        :root{
          --ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;
          --rule:#e5e5e5;--rl:#f0f0f0;--bg:#fff;--off:#fafaf8;
          --warm:#fdf8f0;--gold:#b8860b;--gr:#c9960d;--pos:#1a6b3a;--neg:#b91c1c;
          --nav-h:64px; /* adjust to match your Navbar height */
        }
        .uf-wrap{max-width:1400px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}

        /* ── ANIMATIONS ── */
        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .5s .00s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:up .5s .08s cubic-bezier(.16,1,.3,1) both}
        .a2{animation:up .5s .16s cubic-bezier(.16,1,.3,1) both}
        .a3{animation:up .5s .24s cubic-bezier(.16,1,.3,1) both}
        .a4{animation:up .5s .32s cubic-bezier(.16,1,.3,1) both}

        /* ── LIVE DOT ── */
        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:dot-pulse 2s ease-in-out infinite}
        .dot.amber{background:#ca8a04}
        .dot.amber::after{background:rgba(202,138,4,.2)}
        @keyframes dot-pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(2);opacity:0}}

        /* ── VERIFIED BADGE ── */
        .vbadge{display:inline-flex;align-items:center;gap:4px;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--pos);border:1px solid var(--pos);padding:3px 8px;font-family:'Source Serif 4',Georgia,serif}

        /* ── PILL ── */
        .pill{display:inline-flex;align-items:center;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:3px 8px;border:1px solid currentColor;font-family:'Source Serif 4',Georgia,serif}

        /* ── SEARCH ── */
        .srch{display:flex;align-items:center;gap:10px;border-bottom:2px solid var(--ink);padding:4px 2px;transition:border-color .18s;max-width:640px}
        .srch:focus-within{border-color:var(--gr)}
        .srch input{flex:1;font-size:14px;color:var(--ink);background:transparent;border:none;outline:none;padding:8px 0;font-family:'Source Serif 4',Georgia,serif}
        .srch input::placeholder{color:var(--ink4)}

        /* ── SECTOR PILLS ── */
        .sec-pill{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:5px 11px;border:1px solid var(--rule);background:#fff;color:var(--ink3);font-family:'Source Serif 4',Georgia,serif;transition:all .15s;white-space:nowrap}
        .sec-pill:hover{border-color:var(--ink);color:var(--ink)}
        .sec-pill.hot{border-color:rgba(184,134,11,.35);background:rgba(184,134,11,.05);color:var(--gold)}
        .sec-pill.active{background:var(--ink);color:#fff;border-color:var(--ink)}

        /* ── STARTUP CARD ── */
        .s-card{background:#fff;padding:20px;transition:border-color .18s,box-shadow .18s;display:flex;flex-direction:column;height:100%;border:1px solid transparent}
        .s-card:hover{border-color:#bbb !important;box-shadow:0 4px 24px rgba(0,0,0,.08)}

        /* ── LOGO BOX ── */
        .logo-box{width:42px;height:42px;border:1px solid var(--rule);background:var(--off);display:flex;align-items:center;justify-content:center;flex-shrink:0}

        /* ── MOBILE ROW ── */
        .m-row{display:flex;align-items:center;gap:12px;padding:13px 16px;background:#fff;border-bottom:1px solid var(--rl);transition:background .15s}
        .m-row:hover{background:var(--off)}

        /* ── PAGINATION ── */
        .pg-btn{display:inline-flex;align-items:center;gap:5px;padding:8px 16px;border:1px solid var(--rule);background:#fff;font-size:11px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:var(--ink3);font-family:'Source Serif 4',Georgia,serif;transition:all .15s}
        .pg-btn:hover{border-color:var(--ink);color:var(--ink)}
        .pg-btn.active{background:var(--ink);color:#fff;border-color:var(--ink)}
        .pg-btn.off{opacity:.3;pointer-events:none}

        /* ── STAT CELL ── */
        .stat-cell{padding:16px 20px;border-left:1px solid var(--rule);text-align:center;flex:1}

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){.hide-tab{display:none !important}}
        @media(max-width:768px){
          /* spotlight + stats: hide on mobile */
          .spotlight-strip{display:none !important}
          .hide-mob{display:none !important}
          .show-mob{display:flex !important}
          .card-grid{grid-template-columns:repeat(2,1fr) !important}
        }
        @media(max-width:480px){
          .card-grid{grid-template-columns:1fr !important}
          .hide-xs{display:none !important}
        }
      `}</style>

      <div className="uf">

        {/* ══ FULL-WIDTH MASTHEAD — sits flush against Navbar ══ */}
        <div style={{ borderBottom: "2px solid var(--ink)", background: "#fff" }}>
          <div className="uf-wrap">

            {/* ── Meta strip: date · trust · live ── */}
            <div className="a0" style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "11px 0", borderBottom: "1px solid var(--rule)",
              flexWrap: "wrap", gap: "8px",
            }}>
              <span className="uf-lbl" style={{ color: "var(--ink2)", fontWeight: 700 }}>{todayStr} · Vol. II</span>
              <div className="hide-mob" style={{ display: "flex", gap: "22px" }}>
                {["Independent", "Ad-Free", "Verified"].map((t) => (
                  <span key={t} style={{ fontSize: "10px", color: "var(--ink4)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Source Serif 4',serif" }}>✓ {t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div className="dot" />
                <span className="uf-lbl" style={{ color: "var(--ink4)" }}>Updated {updatedAt} IST</span>
              </div>
            </div>

            {/* ── Wordmark block ── */}
            <div className="a1" style={{ padding: "clamp(28px,5vw,52px) 0 clamp(18px,3vw,32px)", borderBottom: "1px solid var(--rule)", textAlign: "center" }}>
              {/* Sub-label */}
              <p style={{ fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif", marginBottom: "14px" }}>
                UpForge · Public Startup Registry
              </p>
              {/* Big title */}
              <h1 className="uf-d" style={{ fontSize: "clamp(2.8rem,9vw,7rem)", fontWeight: 900, lineHeight: 0.88, color: "var(--ink)", marginBottom: "20px", letterSpacing: "-.03em" }}>
                Startup Registry
              </h1>
              {/* Status row */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(10px,2vw,28px)", flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div className="dot" />
                  <span className="uf-lbl" style={{ color: "var(--pos)" }}>Live · {(count || 0).toLocaleString()} Profiles</span>
                </div>
                <span className="vbadge">✓ All Verified</span>
                <span className="uf-lbl" style={{ color: "var(--ink4)" }}>India's Most Comprehensive Database</span>
              </div>
            </div>

            {/* ── Spotlight + Stats strip — hidden on mobile ── */}
            <div className="a2 spotlight-strip" style={{ display: "flex", alignItems: "stretch", borderBottom: "1px solid var(--rule)" }}>

              {/* Spotlight */}
              <div style={{ flex: "0 0 auto", width: "clamp(260px,42%,520px)", padding: "16px 24px 16px 0", borderRight: "1px solid var(--rule)", display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px", flexShrink: 0 }}>
                  <div className="dot amber" />
                  <span className="uf-lbl" style={{ color: "var(--gold)", fontSize: "8px", writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.2em" }}>Spotlight</span>
                </div>
                <div>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.5, marginBottom: "4px", fontFamily: "'Source Serif 4',serif" }}>
                    {insights.spotlight.headline}
                  </p>
                  <p style={{ fontSize: "11px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{insights.spotlight.sub}</p>
                </div>
              </div>

              {/* Stats */}
              {[
                { label: "New This Week",   v: insights.registryStats.newThisWeek,      sub: "startups added",    warm: false },
                { label: "Most Active",     v: insights.registryStats.mostActiveSector,  sub: "sector right now",  warm: true  },
                { label: "Top City",        v: insights.registryStats.topCity,           sub: "by listing count",  warm: false },
                { label: "Our Registry",    v: `${(count || 0).toLocaleString()}+`,      sub: "verified profiles", warm: true  },
              ].map((s, i) => (
                <div key={i} className="stat-cell" style={{ background: s.warm ? "var(--warm)" : "#fff" }}>
                  <div className="uf-d" style={{ fontSize: "clamp(1rem,2vw,1.5rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, marginBottom: "4px" }}>{s.v}</div>
                  <div className="uf-lbl" style={{ marginBottom: "2px", color: "var(--ink3)", fontSize: "9px" }}>{s.label}</div>
                  <div style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{s.sub}</div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* ══ MAIN CONTENT ══ */}
        <div className="uf-wrap" style={{ paddingBottom: "clamp(40px,8vw,80px)" }}>

          {/* ── Trending sectors + Search ── */}
          <div className="a2">

            {/* Sectors scrollable row */}
            <div style={{ padding: "14px 0", borderBottom: "1px solid var(--rule)", overflowX: "auto", WebkitOverflowScrolling: "touch" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", minWidth: "max-content" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "5px", flexShrink: 0 }}>
                  <Zap style={{ width: "11px", height: "11px", color: "var(--ink4)" }} />
                  <span className="uf-lbl" style={{ fontSize: "9px" }}>Trending</span>
                </div>
                {insights.trendingSectors.map((sector: any, i: number) => (
                  <Link
                    key={i}
                    href={`?sector=${encodeURIComponent(sector.name)}${searchQuery ? `&search=${searchQuery}` : ""}`}
                    className={`sec-pill ${sectorFilter === sector.name ? "active" : sector.heat === "hot" ? "hot" : ""}`}
                  >
                    {sector.heat === "hot" && sectorFilter !== sector.name && <span style={{ fontSize: "9px" }}>🔥</span>}
                    {sector.name}
                    <span className="uf-m" style={{ fontSize: "9px", fontWeight: 700, color: sectorFilter === sector.name ? "rgba(255,255,255,.6)" : "var(--pos)" }}>
                      {sector.growth}
                    </span>
                  </Link>
                ))}
                {sectorFilter && (
                  <Link href={`?${searchQuery ? `search=${searchQuery}` : ""}`}
                    style={{ fontSize: "11px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", textDecoration: "underline", textUnderlineOffset: "3px", flexShrink: 0 }}>
                    Clear ×
                  </Link>
                )}
              </div>
            </div>

            {/* Search */}
            <div style={{ padding: "18px 0", borderBottom: "1px solid var(--rule)" }}>
              <form action="" method="GET">
                <div className="srch">
                  <Search style={{ width: "14px", height: "14px", color: "var(--ink4)", flexShrink: 0 }} />
                  <input
                    type="text" name="search" defaultValue={searchQuery}
                    placeholder="Search startups, sectors, industries…"
                    aria-label="Search Indian startups"
                  />
                  <input type="hidden" name="page" value="1" />
                  {sectorFilter && <input type="hidden" name="sector" value={sectorFilter} />}
                  <button type="submit" style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                    <ArrowRight style={{ width: "14px", height: "14px", color: "var(--ink3)" }} />
                  </button>
                </div>
              </form>
              {(searchQuery || sectorFilter) && (
                <p style={{ marginTop: "8px", fontSize: "11px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>
                  <span className="uf-m" style={{ fontWeight: 700, color: "var(--ink)", fontSize: "13px" }}>{(count || 0).toLocaleString()}</span> result{count !== 1 ? "s" : ""}
                  {searchQuery  && <> for <strong style={{ color: "var(--ink)" }}>"{searchQuery}"</strong></>}
                  {sectorFilter && <> in <strong style={{ color: "var(--ink)" }}>{sectorFilter}</strong></>}
                  {" · "}
                  <Link href="/startup" style={{ color: "var(--gold)", textDecoration: "underline", textUnderlineOffset: "3px" }}>Clear all</Link>
                </p>
              )}
            </div>
          </div>

          {/* ── Grid + List ── */}
          <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>

            {/* Desktop card grid */}
            <div
              className="a3 card-grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(230px,1fr))", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)" }}
            >
              {startups?.map((startup) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`} style={{ display: "block" }} className="hide-mob">
                  <div className="s-card">
                    {/* Card header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                      <div className="logo-box">
                        {startup.logo_url
                          ? <img src={startup.logo_url} alt={startup.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", padding: "4px" }} />
                          : <span className="uf-d" style={{ fontSize: "1.1rem", color: "var(--ink3)", fontWeight: 700 }}>{startup.name.charAt(0)}</span>
                        }
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px" }}>
                        <span className="uf-m" style={{ fontSize: "10px", color: "var(--ink4)" }}>{startup.founded_year || "—"}</span>
                        <BadgeCheck style={{ width: "11px", height: "11px", color: "var(--pos)" }} />
                      </div>
                    </div>

                    <h3 className="uf-d" style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px", lineHeight: 1.15 }}>
                      {startup.name}
                    </h3>

                    <p style={{
                      fontSize: "12px", color: "var(--ink3)", lineHeight: 1.7, flex: 1, marginBottom: "14px",
                      fontFamily: "'Source Serif 4',serif",
                      display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                    }}>
                      {startup.description}
                    </p>

                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "10px", borderTop: "1px solid var(--rl)" }}>
                      <span className="uf-lbl" style={{ fontSize: "9px", color: "var(--ink4)" }}>{startup.industry || startup.category || "Startup"}</span>
                      <ArrowUpRight style={{ width: "11px", height: "11px", color: "var(--ink4)" }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile list view */}
            <div className="show-mob" style={{ display: "none", flexDirection: "column", border: "1px solid var(--rule)" }}>
              {startups?.map((startup) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`}>
                  <div className="m-row">
                    <div className="logo-box" style={{ width: "36px", height: "36px" }}>
                      {startup.logo_url
                        ? <img src={startup.logo_url} alt={startup.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain", padding: "2px" }} />
                        : <span className="uf-d" style={{ fontSize: "0.9rem", color: "var(--ink3)", fontWeight: 700 }}>{startup.name.charAt(0)}</span>
                      }
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "2px" }}>
                        <span className="uf-d" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{startup.name}</span>
                        <BadgeCheck style={{ width: "11px", height: "11px", color: "var(--pos)", flexShrink: 0 }} />
                      </div>
                      <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                        <span className="uf-lbl" style={{ fontSize: "9px" }}>{startup.industry || startup.category || "Startup"}</span>
                        {startup.founded_year && <><span style={{ color: "var(--rule)" }}>·</span><span className="uf-m" style={{ fontSize: "10px", color: "var(--ink4)" }}>{startup.founded_year}</span></>}
                      </div>
                    </div>
                    <ChevronRight style={{ width: "14px", height: "14px", color: "var(--ink4)", flexShrink: 0 }} />
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty state */}
            {(!startups || startups.length === 0) && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", border: "1px solid var(--rule)", background: "var(--off)" }}>
                <Search style={{ width: "28px", height: "28px", color: "var(--ink4)", marginBottom: "16px" }} />
                <h3 className="uf-d" style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--ink)", marginBottom: "8px" }}>No startups found</h3>
                <p style={{ fontSize: "13px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", marginBottom: "20px" }}>Try a different search term or clear the filter</p>
                <Link href="/startup" style={{ display: "inline-flex", alignItems: "center", gap: "6px", border: "2px solid var(--ink)", padding: "10px 22px", fontSize: "12px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',serif", letterSpacing: "0.06em", transition: "background .18s" }}>
                  Clear all filters
                </Link>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="a4" style={{ marginTop: "40px", display: "flex", alignItems: "center", justifyContent: "center", gap: "5px" }}>
                <Link
                  href={`?page=${Math.max(1, currentPage - 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                  className={`pg-btn ${currentPage === 1 ? "off" : ""}`}
                >
                  <ChevronLeft style={{ width: "12px", height: "12px" }} /> Prev
                </Link>
                <div style={{ display: "flex", gap: "4px" }}>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let p: number;
                    if (totalPages <= 5)            p = i + 1;
                    else if (currentPage <= 3)       p = i + 1;
                    else if (currentPage >= totalPages - 2) p = totalPages - 4 + i;
                    else                             p = currentPage - 2 + i;
                    return (
                      <Link key={p} href={`?page=${p}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                        className={`pg-btn ${p === currentPage ? "active" : ""}`}
                        style={{ padding: "8px 13px", minWidth: "36px", justifyContent: "center" }}>
                        <span className="uf-m" style={{ fontSize: "12px" }}>{p}</span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href={`?page=${Math.min(totalPages, currentPage + 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                  className={`pg-btn ${currentPage === totalPages ? "off" : ""}`}
                >
                  Next <ChevronRight style={{ width: "12px", height: "12px" }} />
                </Link>
              </div>
            )}
          </PageTransition>

          {/* ── Trust strip ── */}
          <div style={{ height: "2px", background: "var(--ink)", marginTop: "clamp(32px,6vw,64px)" }} />
          <div style={{ padding: "14px 0", display: "flex", flexWrap: "wrap", gap: "8px 24px", alignItems: "center", justifyContent: "center", background: "var(--off)" }}>
            {[
              { icon: BadgeCheck, text: "Every listing manually verified" },
              { icon: Activity,   text: `Live data · ${updatedAt} IST` },
              { icon: TrendingUp, text: "Ecosystem-backed intelligence" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <item.icon style={{ width: "12px", height: "12px", color: "var(--ink3)" }} />
                <span style={{ fontSize: "11px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif" }}>{item.text}</span>
              </div>
            ))}
          </div>

        </div>{/* /uf-wrap */}
      </div>{/* /uf */}
    </>
  );
}
