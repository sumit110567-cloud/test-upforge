import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import PageTransition from "@/components/page-transition";
import { ChevronLeft, ChevronRight, BadgeCheck, ArrowUpRight, MapPin, Calendar, Star } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  const supabase = await createClient();
  const { count } = await supabase.from("startups").select("*", { count: "exact", head: true });
  return {
    title: `Indian Startup Registry 2026 — ${(count || 72000).toLocaleString()}+ Verified Startups | UpForge`,
    description: `Browse ${(count || 72000).toLocaleString()}+ verified Indian startups across AI, SaaS, FinTech, HealthTech and 30+ sectors.`,
    alternates: { canonical: "https://www.upforge.in/startup" },
    openGraph: {
      title: `Indian Startup Registry — ${(count || 72000).toLocaleString()}+ Verified | UpForge`,
      description: "Browse India's most comprehensive startup database. Free, verified, updated daily.",
      url: "https://www.upforge.in/startup",
      siteName: "UpForge",
      images: [{ url: "https://www.upforge.in/og-registry.png", width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export const revalidate = 0;

interface Props {
  searchParams?: Promise<{ page?: string; sector?: string }>;
}

const SECTORS = [
  { name: "AI/ML",        hot: true  },
  { name: "FinTech",      hot: true  },
  { name: "SaaS",         hot: true  },
  { name: "Space Tech",   hot: true  },
  { name: "Climate Tech", hot: false },
  { name: "D2C Brands",   hot: false },
  { name: "HealthTech",   hot: false },
  { name: "EdTech",       hot: false },
];

const FIRST_PAGE_ITEMS = 23;
const OTHER_PAGE_ITEMS = 20;

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "UpForge", "item": "https://www.upforge.in/" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://www.upforge.in/startup" },
      ],
    },
    {
      "@type": "CollectionPage",
      "@id": "https://www.upforge.in/startup",
      "name": "Indian Startup Registry 2026",
      "description": "India's independent registry of verified startups across 30+ sectors.",
      "url": "https://www.upforge.in/startup",
      "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://www.upforge.in" },
    },
  ],
};

export default async function StartupPage({ searchParams }: Props) {
  const supabase = await createClient();
  const params       = await searchParams;
  const sectorFilter = params?.sector?.trim() ?? "";
  const currentPage  = Number(params?.page ?? 1);
  const isFirstPage  = currentPage === 1;
  const showFeatured = isFirstPage && !sectorFilter;
  const itemsForPage = isFirstPage ? FIRST_PAGE_ITEMS : OTHER_PAGE_ITEMS;
  const from         = isFirstPage ? 0 : FIRST_PAGE_ITEMS + (currentPage - 2) * OTHER_PAGE_ITEMS;
  const to           = from + itemsForPage - 1;

  let query = supabase.from("startups").select("*", { count: "exact" });
  if (sectorFilter) query = query.or(`industry.ilike.%${sectorFilter}%,category.ilike.%${sectorFilter}%`);
  const { data: startups, count, error } = await query
    .order("name", { ascending: true })
    .range(from, to);

  if (error) console.log("SUPABASE ERROR:", error);

  const totalCount  = count || 0;
  const totalPages  = totalCount <= FIRST_PAGE_ITEMS
    ? 1
    : 1 + Math.ceil((totalCount - FIRST_PAGE_ITEMS) / OTHER_PAGE_ITEMS);
  const featuredStartups = showFeatured ? (startups || []).slice(0, 3) : [];
  const gridStartups     = showFeatured ? (startups || []).slice(3)    : (startups || []);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── TOKENS ── */
        :root {
          --parch:   #F3EFE5;
          --parch2:  #EDE9DF;
          --parch3:  #E6E1D6;
          --ink:     #1A1208;
          --ink2:    #2C2010;
          --ink3:    #5A4A30;
          --ink4:    #8A7A68;
          --ink5:    #AAA09A;
          --rule:    #C8C2B4;
          --rule2:   #D8D2C4;
          --gold:    #B45309;
          --gold2:   #D97706;
          --gold3:   #92400E;
          --goldlt:  #FEF3C7;
          --white:   #FFFFFF;
          --green:   #15803D;
        }

        body { background: var(--parch); }

        /* ── FONTS ── */
        .pf  { font-family: 'Playfair Display', Georgia, 'Times New Roman', serif !important; }
        .rp  { font-family: Georgia, 'Times New Roman', serif; }
        .sf  { font-family: 'DM Sans', system-ui, sans-serif; }
        .mono { font-family: 'DM Mono', 'Courier New', monospace; }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .45s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .45s .08s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .45s .16s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: fadeUp .45s .24s cubic-bezier(.16,1,.3,1) both; }
        .a4 { animation: fadeUp .45s .32s cubic-bezier(.16,1,.3,1) both; }

        /* ── LIVE DOT ── */
        .ldot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E; display: inline-block;
          flex-shrink: 0; position: relative;
        }
        .ldot::after {
          content: ''; position: absolute; inset: -3px;
          border-radius: 50%; background: rgba(34,197,94,.25);
          animation: lp 2.2s ease-in-out infinite;
        }
        @keyframes lp {
          0%,100% { transform: scale(1); opacity: 1; }
          50%      { transform: scale(2.2); opacity: 0; }
        }

        /* ── VERIFIED BADGE ── */
        .vbadge {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: 7.5px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; color: var(--green);
          border: 1px solid rgba(21,128,61,.28); padding: 2px 7px;
          font-family: 'DM Sans', system-ui;
        }

        /* ── SECTION HEADER ── */
        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l {
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .28em; color: var(--ink5);
          font-family: 'DM Mono', monospace; white-space: nowrap;
        }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* ── SECTOR PILL FILTER ── */
        .strip { overflow-x: auto; scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .strip::-webkit-scrollbar { display: none; }

        .pill {
          display: inline-flex; align-items: center; gap: 5px;
          font-size: 8.5px; font-weight: 700; letter-spacing: .1em;
          text-transform: uppercase; padding: 6px 14px;
          border: 1px solid var(--rule2); background: var(--white);
          color: var(--ink4); font-family: 'DM Sans', system-ui;
          transition: border-color .15s, color .15s, background .15s, box-shadow .15s;
          white-space: nowrap; text-decoration: none; cursor: pointer;
          border-radius: 0;
        }
        .pill:hover {
          border-color: var(--ink); color: var(--ink);
          box-shadow: 2px 2px 0 var(--ink);
        }
        .pill.on {
          background: var(--ink); color: var(--parch);
          border-color: var(--ink); box-shadow: none;
        }
        .pill.hot-pill:not(.on) {
          border-color: rgba(180,83,9,.35);
          color: var(--gold);
        }
        .pill.hot-pill:not(.on):hover {
          border-color: var(--gold); color: var(--gold3);
          box-shadow: 2px 2px 0 var(--gold3);
        }

        /* ── FEATURED 3-UP GRID ── */
        .feat-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1.5px solid var(--ink);
          background: var(--ink);
          gap: 1.5px;
        }
        @media (max-width: 900px) { .feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 580px) { .feat-grid { grid-template-columns: 1fr; } }

        .feat-card {
          background: var(--white); display: flex; flex-direction: column;
          text-decoration: none; position: relative; overflow: hidden;
          transition: background .18s;
        }
        .feat-card:hover { background: #FEFCF5; }
        .feat-card::after {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: transparent; transition: background .18s;
        }
        .feat-card:hover::after { background: var(--gold2); }

        .feat-img {
          height: 175px; position: relative; overflow: hidden;
          background: var(--parch2); flex-shrink: 0;
          border-bottom: 1.5px solid var(--ink);
        }
        .feat-img img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          transition: transform .5s ease;
        }
        .feat-card:hover .feat-img img { transform: scale(1.04); }

        /* ── STARTUP CARD GRID ── */
        .card-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          border: 1.5px solid var(--ink);
          background: var(--ink);
          gap: 1.5px;
        }
        @media (max-width: 640px) { .card-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 380px) { .card-grid { grid-template-columns: 1fr; } }

        .s-card {
          background: var(--white); display: flex; flex-direction: column;
          text-decoration: none; position: relative;
          transition: background .15s, transform .15s, box-shadow .15s;
        }
        .s-card:hover {
          background: #FEFCF5;
          transform: translate(-2px, -2px);
          box-shadow: 4px 4px 0 var(--ink);
          z-index: 2;
        }
        .s-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2.5px; background: transparent; transition: background .15s;
        }
        .s-card:hover::before { background: var(--gold2); }

        .logo-circle {
          width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0;
          border: 1.5px solid var(--rule2); background: var(--parch2);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden; transition: border-color .15s;
        }
        .s-card:hover .logo-circle { border-color: var(--ink4); }
        .logo-circle img { width: 100%; height: 100%; object-fit: cover; }

        /* ── MOBILE LIST ── */
        .m-row {
          display: flex; align-items: center; gap: 13px;
          padding: 14px 16px; background: var(--white);
          border-bottom: 1px solid var(--rule2);
          text-decoration: none; transition: background .13s;
        }
        .m-row:hover { background: var(--parch2); }

        /* ── PAGINATION ── */
        .pg {
          display: inline-flex; align-items: center; gap: 5px;
          padding: 8px 16px; border: 1.5px solid var(--rule2);
          background: var(--white); font-size: 9.5px; font-weight: 700;
          letter-spacing: .1em; text-transform: uppercase; color: var(--ink4);
          font-family: 'DM Sans', system-ui; transition: all .15s;
          text-decoration: none; border-radius: 0;
        }
        .pg:hover { border-color: var(--ink); color: var(--ink); box-shadow: 2px 2px 0 var(--ink); }
        .pg.on  { background: var(--ink); color: var(--parch); border-color: var(--ink); box-shadow: none; }
        .pg.off { opacity: .3; pointer-events: none; }

        /* ── VISIBILITY HELPERS ── */
        .hide-mob { display: grid; }
        .show-mob { display: none; }
        @media (max-width: 640px) {
          .hide-mob { display: none !important; }
          .show-mob { display: flex !important; }
        }

        /* ── ORNAMENT LINES ── */
        .orn-line { height: 1px; background: var(--rule); }
      `}</style>

      <div className="rp" style={{ minHeight: "100vh", background: "var(--parch)" }}>

        {/* ══ BREADCRUMB ══ */}
        <nav className="sf a0" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }}>UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>Startup Registry</li>
              {sectorFilter && <>
                <li style={{ color: "var(--rule)" }}>/</li>
                <li style={{ color: "var(--ink3)", fontWeight: 700 }}>{sectorFilter}</li>
              </>}
            </ol>
          </div>
        </nav>

        {/* ══ MASTHEAD ══ */}
        <header className="a0" style={{ background: "var(--parch)", borderBottom: "3px solid var(--ink)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <div style={{ textAlign: "center", padding: "clamp(20px,3vw,36px) 0 clamp(14px,2vw,22px)", borderBottom: "1px solid var(--rule2)" }}>

              {/* Kicker */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 14 }}>
                <div className="orn-line" style={{ width: 52 }} />
                <span className="mono" style={{ fontSize: 8, letterSpacing: "0.38em", textTransform: "uppercase", color: "var(--ink5)", fontWeight: 500 }}>
                  India Edition · 2026
                </span>
                <div className="orn-line" style={{ width: 52 }} />
              </div>

              <h1 className="pf" style={{
                fontSize: "clamp(2.8rem, 8vw, 6.2rem)",
                fontWeight: 900, lineHeight: 0.88,
                color: "var(--ink)", letterSpacing: "-0.03em",
                marginBottom: 16,
              }}>
                Startup Registry
              </h1>

              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", fontStyle: "italic", color: "var(--ink4)", marginBottom: 18, lineHeight: 1.55 }}>
                India's independent registry of verified builders — free, structured, permanent.
              </p>

              {/* Status pills row */}
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span className="ldot" />
                  <span className="sf" style={{ fontSize: 8.5, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
                    Live · {totalCount.toLocaleString()} Profiles
                  </span>
                </div>
                <div style={{ width: 1, height: 14, background: "var(--rule)" }} />
                <span className="vbadge"><BadgeCheck style={{ width: 9, height: 9 }} /> All Verified</span>
                <div style={{ width: 1, height: 14, background: "var(--rule)" }} />
                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                  Updated Daily
                </span>
              </div>
            </div>

            {/* ── SECTOR FILTER STRIP ── */}
            <div className="a1 strip" style={{ padding: "10px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 7, minWidth: "max-content" }}>
                <span className="mono" style={{ fontSize: 7.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--ink5)", flexShrink: 0 }}>
                  Sector
                </span>
                <div style={{ width: 1, height: 14, background: "var(--rule2)", flexShrink: 0 }} />
                <Link href="/startup" className={`pill ${!sectorFilter ? "on" : ""}`}>All</Link>
                {SECTORS.map((s, i) => (
                  <Link
                    key={i}
                    href={`/startup?sector=${encodeURIComponent(s.name)}`}
                    className={`pill${sectorFilter === s.name ? " on" : ""}${s.hot && sectorFilter !== s.name ? " hot-pill" : ""}`}
                  >
                    {s.hot && sectorFilter !== s.name && (
                      <span style={{ fontSize: 9, lineHeight: 1 }}>🔥</span>
                    )}
                    {s.name}
                  </Link>
                ))}
                {sectorFilter && (
                  <Link href="/startup" style={{ fontSize: 9, color: "var(--ink5)", textDecoration: "none", flexShrink: 0, marginLeft: 4, fontFamily: "'DM Mono', monospace", letterSpacing: "0.06em" }}>
                    Clear ×
                  </Link>
                )}
              </div>
            </div>
          </div>
        </header>

        {/* ══ MAIN CONTENT ══ */}
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(32px,5vw,60px)" }}>

          {/* Results header */}
          <div className="a2" style={{ display: "flex", alignItems: "center", gap: 10, margin: "18px 0 14px" }}>
            <span className="sh-l">{sectorFilter || "All Startups"}</span>
            <span className="rp" style={{ fontSize: 11, fontStyle: "italic", color: "var(--gold2)", fontWeight: 400 }}>
              — {totalCount.toLocaleString()} profiles
            </span>
            <div className="sh-r" />
            <span className="mono" style={{ fontSize: 8, color: "var(--ink5)", flexShrink: 0, letterSpacing: "0.12em" }}>
              Pg. {currentPage} / {totalPages || 1}
            </span>
          </div>

          <PageTransition key={`${sectorFilter}-${currentPage}`}>

            {/* ══ FEATURED TOP 3 ══ */}
            {featuredStartups.length === 3 && (
              <div className="a2" style={{ marginBottom: 32 }}>
                <div className="sh" style={{ marginBottom: 14 }}>
                  <Star style={{ width: 10, height: 10, color: "var(--gold2)", fill: "var(--gold2)", flexShrink: 0 }} />
                  <span className="sh-l">Featured in This Edition</span>
                  <div className="sh-r" />
                  <span className="mono" style={{ fontSize: 7.5, color: "var(--ink5)", flexShrink: 0, letterSpacing: "0.08em" }}>March 2026</span>
                </div>
                <div className="feat-grid">
                  {featuredStartups.map((startup, fi) => (
                    <Link key={startup.id} href={`/startup/${startup.slug}`} className="feat-card">
                      <div className="feat-img">
                        {startup.logo_url ? (
                          <img src={startup.logo_url} alt={startup.name} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: ["#E8E0D0","#E0D8CC","#D8D0C4"][fi] }}>
                            <span className="pf" style={{ fontSize: "4.5rem", fontWeight: 900, color: "rgba(26,18,8,0.08)" }}>{startup.name.charAt(0)}</span>
                          </div>
                        )}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.1) 55%, transparent 100%)" }} />
                        {/* Edition number */}
                        <div className="sf" style={{ position: "absolute", top: 12, left: 12, background: "var(--ink)", color: "var(--parch)", fontSize: 7, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", padding: "3px 9px", border: "1px solid rgba(255,255,255,0.12)" }}>
                          No.{String(fi + 1).padStart(2, "0")}
                        </div>
                        <div style={{ position: "absolute", top: 12, right: 12 }}>
                          <BadgeCheck style={{ width: 14, height: 14, color: "#4ADE80" }} />
                        </div>
                        {/* Name overlay */}
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 16px 14px" }}>
                          <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "rgba(255,255,255,0.5)", display: "block", marginBottom: 4 }}>
                            {startup.industry || startup.category || "Startup"}
                          </span>
                          <h2 className="pf" style={{ fontSize: "1.2rem", fontWeight: 700, color: "white", lineHeight: 1.15, margin: 0 }}>
                            {startup.name}
                          </h2>
                        </div>
                      </div>
                      <div style={{ padding: "16px 16px 15px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p className="rp" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.85, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          {startup.description || "Building for India's next decade."}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 11, borderTop: "1px solid var(--rule2)" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                            {startup.founded_year && (
                              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <Calendar style={{ width: 9, height: 9, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.founded_year}</span>
                              </div>
                            )}
                            {startup.city && (
                              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <MapPin style={{ width: 9, height: 9, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.city}</span>
                              </div>
                            )}
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <span className="vbadge"><BadgeCheck style={{ width: 8, height: 8 }} /> Verified</span>
                            <ArrowUpRight style={{ width: 13, height: 13, color: "var(--ink4)" }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ══ GRID ══ */}
            {gridStartups.length > 0 && (
              <>
                {showFeatured && (
                  <div className="sh" style={{ marginBottom: 14 }}>
                    <span className="sh-l">All Startups</span>
                    <div className="sh-r" />
                  </div>
                )}

                {/* DESKTOP GRID */}
                <div className="a3 card-grid hide-mob">
                  {gridStartups.map((startup) => (
                    <Link key={startup.id} href={`/startup/${startup.slug}`} className="s-card">
                      <div style={{ padding: "14px 14px 12px", display: "flex", alignItems: "center", gap: 11, borderBottom: "1px solid var(--rule2)" }}>
                        <div className="logo-circle">
                          {startup.logo_url
                            ? <img src={startup.logo_url} alt={startup.name} />
                            : <span className="pf" style={{ fontSize: "1rem", fontWeight: 900, color: "var(--ink4)" }}>{startup.name.charAt(0)}</span>
                          }
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <h3 className="pf" style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {startup.name}
                          </h3>
                          <span className="mono" style={{ fontSize: 7, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 400, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>
                            {(startup.industry || startup.category || "Startup").slice(0, 22)}
                          </span>
                        </div>
                        <BadgeCheck style={{ width: 11, height: 11, color: "#15803D", flexShrink: 0 }} />
                      </div>
                      <div style={{ padding: "11px 14px 13px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p className="rp" style={{ fontSize: 11.5, color: "var(--ink3)", lineHeight: 1.82, flex: 1, marginBottom: 11, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          {startup.description || "Building for India's next decade."}
                        </p>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 9, borderTop: "1px solid var(--rule2)" }}>
                          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            {startup.founded_year && (
                              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                                <Calendar style={{ width: 7.5, height: 7.5, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8, color: "var(--ink5)" }}>{startup.founded_year}</span>
                              </div>
                            )}
                            {startup.city && (
                              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                                <MapPin style={{ width: 7.5, height: 7.5, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 60 }}>
                                  {startup.city}
                                </span>
                              </div>
                            )}
                          </div>
                          <ArrowUpRight style={{ width: 11, height: 11, color: "var(--ink5)" }} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* ══ MOBILE LIST ══ */}
            <div className="show-mob a3" style={{ display: "none", flexDirection: "column", border: "1.5px solid var(--ink)" }}>
              {(startups || []).map((startup, idx) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`} className="m-row"
                  style={{ borderBottom: idx < (startups?.length || 0) - 1 ? "1px solid var(--rule2)" : "none" }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", flexShrink: 0, border: "1.5px solid var(--rule2)", background: "var(--parch2)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {startup.logo_url
                      ? <img src={startup.logo_url} alt={startup.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <span className="pf" style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--ink4)" }}>{startup.name.charAt(0)}</span>
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                      <span className="pf" style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{startup.name}</span>
                      <BadgeCheck style={{ width: 9, height: 9, color: "#15803D", flexShrink: 0 }} />
                    </div>
                    <span className="mono" style={{ fontSize: 7.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 400 }}>
                      {startup.industry || startup.category || "Startup"}
                      {startup.founded_year && ` · ${startup.founded_year}`}
                    </span>
                  </div>
                  <ChevronRight style={{ width: 11, height: 11, color: "var(--ink5)", flexShrink: 0 }} />
                </Link>
              ))}
            </div>

            {/* ══ EMPTY STATE ══ */}
            {(!startups || startups.length === 0) && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", border: "1.5px solid var(--ink)", background: "var(--white)" }}>
                <span className="pf" style={{ fontSize: "3.5rem", color: "rgba(26,18,8,0.06)", fontWeight: 900, lineHeight: 1, marginBottom: 18 }}>?</span>
                <h3 className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>No startups found</h3>
                <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", marginBottom: 24, maxWidth: 300, lineHeight: 1.75 }}>
                  No results for {sectorFilter ? `"${sectorFilter}"` : "this filter"}. Try a different sector.
                </p>
                <Link href="/startup" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid var(--ink)", padding: "10px 24px", fontSize: 9, fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'DM Sans', system-ui", background: "transparent", textDecoration: "none" }}>
                  View all sectors
                </Link>
              </div>
            )}

            {/* ══ PAGINATION ══ */}
            {totalPages > 1 && (
              <div className="a4" style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <Link
                  href={`/startup?page=${Math.max(1, currentPage - 1)}${sectorFilter ? `&sector=${encodeURIComponent(sectorFilter)}` : ""}`}
                  className={`pg ${currentPage === 1 ? "off" : ""}`}
                >
                  <ChevronLeft style={{ width: 10, height: 10 }} /> Prev
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
                        href={`/startup?page=${p}${sectorFilter ? `&sector=${encodeURIComponent(sectorFilter)}` : ""}`}
                        className={`pg ${p === currentPage ? "on" : ""}`}
                        style={{ padding: "8px 13px", minWidth: 36, justifyContent: "center" }}
                      >
                        <span className="sf" style={{ fontSize: 11 }}>{p}</span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href={`/startup?page=${Math.min(totalPages, currentPage + 1)}${sectorFilter ? `&sector=${encodeURIComponent(sectorFilter)}` : ""}`}
                  className={`pg ${currentPage === totalPages ? "off" : ""}`}
                >
                  Next <ChevronRight style={{ width: 10, height: 10 }} />
                </Link>
              </div>
            )}

          </PageTransition>

          {/* ══ INSIGHT STRIP ══ */}
          <div style={{ marginTop: "clamp(32px,4vw,48px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l">UpForge Registry Insights</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
              {[
                { v: "~80%",  l: "First-gen founders",     b: "India's unicorn builders mostly had no inherited capital — built with pure conviction." },
                { v: "$950B", l: "Value created under 40",  b: "Founders under 40 manage businesses worth more than Switzerland's entire GDP." },
                { v: "126+",  l: "Indian unicorns",         b: "India crossed 126 unicorns. Every founder reading this could build the next one." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "22px 22px 20px", background: "var(--white)", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "var(--gold2)" }} />
                  <p className="pf" style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: 6 }}>{item.v}</p>
                  <p className="mono" style={{ fontSize: 7.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--gold2)", marginBottom: 9 }}>{item.l}</p>
                  <p className="rp" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.82 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ══ CTA BLOCK ══ */}
          <div style={{ marginTop: "clamp(28px,5vw,48px)", padding: "clamp(24px,4vw,40px)", background: "var(--ink)", position: "relative", overflow: "hidden", border: "1.5px solid var(--ink)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: "linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3))" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
              <div>
                <p className="mono" style={{ fontSize: 7.5, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(232,197,71,0.75)", marginBottom: 10 }}>
                  UpForge Registry
                </p>
                <p className="pf" style={{ fontSize: "clamp(1.1rem,2.8vw,1.7rem)", fontWeight: 700, color: "white", lineHeight: 1.22, marginBottom: 9 }}>
                  Your founder story starts with a verified profile.
                </p>
                <p className="rp" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>
                  Independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <Link href="/submit" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold2)", color: "var(--ink)", padding: "13px 24px", fontSize: 9.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "'DM Sans', system-ui", whiteSpace: "nowrap", boxShadow: "3px 3px 0 var(--gold3)", textDecoration: "none" }}>
                List Free →
              </Link>
            </div>
          </div>

          {/* ══ FOOTER NAV ══ */}
          <nav aria-label="Registry navigation" style={{ padding: "18px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(28px,4vw,44px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 22px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Indian Startup Founders 2026", h: "/"                    },
                { l: "Top AI Startups India",        h: "/top-ai-startups"     },
                { l: "Indian Unicorns List",          h: "/indian-unicorns"     },
                { l: "Best SaaS Startups",            h: "/best-saas-startups" },
                { l: "Fintech Startups India",        h: "/fintech-startups"   },
                { l: "Edtech Founders India",         h: "/edtech-startups"    },
                { l: "Submit Your Startup",           h: "/submit"             },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="mono" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none", fontWeight: 400 }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </>
  );
}
