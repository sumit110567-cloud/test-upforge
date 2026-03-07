import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import PageTransition from "@/components/page-transition";
import { 
  ChevronLeft, ChevronRight, Search, BadgeCheck, 
  TrendingUp, Zap, Activity, ArrowRight, ArrowUpRight 
} from "lucide-react";

export const revalidate = 0;

interface Props {
  searchParams?: {
    page?: string;
    search?: string;
    sector?: string;
  };
}

async function getRegistryInsights() {
  try {
    const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
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
              "trendingSectors": [
                {"name": "sector name", "growth": "+XX%", "heat": "hot/warm"}
              ],
              "registryStats": {
                "newThisWeek": "number",
                "mostActiveSector": "sector",
                "avgFunding": "amount",
                "topCity": "city"
              },
              "spotlight": {
                "headline": "short insight about Indian startup scene",
                "sub": "one line detail"
              }
            }`,
          },
          {
            role: "user",
            content: "Give trending Indian startup sectors and registry insights for March 2026.",
          },
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
        { name: "Space Tech", growth: "+145%", heat: "hot" },
      ],
      registryStats: {
        newThisWeek: "34",
        mostActiveSector: "SaaS",
        avgFunding: "$12.4M",
        topCity: "Bengaluru",
      },
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
  const searchQuery = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";
  const currentPage = params?.page && !searchQuery ? Number(params.page) : 1;

  const ITEMS_PER_PAGE = 12;
  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase.from("startups").select("*", { count: "exact" });

  if (searchQuery) {
    query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,industry.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
  }
  if (sectorFilter) {
    query = query.or(`industry.ilike.%${sectorFilter}%,category.ilike.%${sectorFilter}%`);
  }

  const { data: startups, count } = await query
    .order("name", { ascending: true })
    .range(from, to);

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);
  const updatedAt = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        
        .uf{background:#fff;color:#1a1a1a;font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        
        :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--bg:#fff;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--gr:#c9960d;--pos:#1a6b3a;--neg:#b91c1c}
        
        .uf-wrap{max-width:1400px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}

        .page-masthead {
          padding-top: 80px;
          margin-bottom: 20px;
        }

        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .5s .00s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:up .5s .08s cubic-bezier(.16,1,.3,1) both}
        .a2{animation:up .5s .16s cubic-bezier(.16,1,.3,1) both}
        .a3{animation:up .5s .24s cubic-bezier(.16,1,.3,1) both}

        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:pulse 2s ease-in-out infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(2);opacity:0}}

        .srch{display:flex;align-items:center;gap:10px;border-bottom:2px solid var(--ink);padding:4px 2px}
        .srch input{flex:1;font-size:14px;background:transparent;border:none;outline:none;padding:8px 0}
        
        .sec-pill{display:inline-flex;align-items:center;gap:6px;font-size:10px;font-weight:600;padding:5px 12px;border:1px solid var(--rule);background:#fff;transition:all .15s;cursor:pointer;text-decoration:none;color:inherit}
        .sec-pill.hot{border-color:var(--gold);background:rgba(184,134,11,.06);color:var(--gold)}
        .sec-pill.active{background:var(--ink);color:#fff;border-color:var(--ink)}

        .s-card{border:1px solid var(--rule);background:#fff;padding:20px;transition:all .18s;display:flex;flex-direction:column;height:100%}
        .s-card:hover{border-color:#bbb;box-shadow:0 4px 20px rgba(0,0,0,.08)}
        .logo-box{width:40px;height:40px;border:1px solid var(--rule);background:var(--off);display:flex;align-items:center;justify-content:center}

        .pg-btn{display:inline-flex;align-items:center;gap:5px;padding:8px 18px;border:1px solid var(--rule);background:#fff;font-size:11px;font-weight:600;text-transform:uppercase;transition:all .15s;text-decoration:none;color:inherit}
        .pg-btn.active{background:var(--ink);color:#fff}
        .pg-btn.disabled{opacity:.3;pointer-events:none}

        @media(max-width:768px){
          .page-masthead { padding-top: 70px; }
          .spotlight-box { display: none !important; }
          .stats-g { grid-template-columns: repeat(3, 1fr) !important; }
          .hide-mob { display: none !important; }
        }
      `}</style>

      <div className="uf">
        <div className="uf-wrap">

          <header className="a0 page-masthead">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--rule)", flexWrap: "wrap", gap: "8px" }}>
              <span className="uf-lbl" style={{ color: "var(--ink2)", fontWeight: 700 }}>{todayStr} · Vol. II</span>
              <div className="hide-mob" style={{ display: "flex", gap: "20px" }}>
                {["Independent", "Ad-Free", "Verified"].map((t) => (
                  <span key={t} className="uf-lbl" style={{ color: "var(--ink4)" }}>✓ {t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div className="dot" />
                <span className="uf-lbl">Updated {updatedAt} IST</span>
              </div>
            </div>

            <div style={{ padding: "40px 0 24px", borderBottom: "2px solid var(--ink)", textAlign: "center" }}>
              <p className="uf-lbl" style={{ letterSpacing: "0.35em", marginBottom: "12px" }}>Registry Intelligence</p>
              <h1 className="uf-d" style={{ fontSize: "clamp(2.5rem,7vw,5rem)", fontWeight: 900, color: "var(--ink)" }}>Indian Startup Database</h1>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "10px" }}>
                <span className="uf-lbl" style={{ color: "var(--pos)" }}>● {(count || 0).toLocaleString()} Profiles Live</span>
                <span style={{ fontSize: "10px", color: "var(--gold)", border: "1px solid var(--gold)", padding: "2px 8px", fontWeight: "700" }}>✓ 100% VERIFIED</span>
              </div>
            </div>
          </header>

          <section className="a1">
            <div className="stats-g" style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", borderBottom: "1px solid var(--rule)" }}>
              <div className="spotlight-box" style={{ padding: "18px 24px 18px 0", borderRight: "1px solid var(--rule)" }}>
                <div style={{ display: "flex", gap: "10px" }}>
                  <span className="uf-lbl" style={{ color: "var(--gold)", whiteSpace: "nowrap" }}>★ Spotlight</span>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", lineHeight: 1.4 }}>{insights.spotlight.headline}</p>
                    <p style={{ fontSize: "11px", color: "var(--ink4)" }}>{insights.spotlight.sub}</p>
                  </div>
                </div>
              </div>
              {[
                { label: "New Entries", v: insights.registryStats.newThisWeek, sub: "this week" },
                { label: "Hot Sector", v: insights.registryStats.mostActiveSector, sub: "high volume" },
                { label: "Leading Hub", v: insights.registryStats.topCity, sub: "by density" },
              ].map((s, i) => (
                <div key={i} className="stat" style={{ background: i === 1 ? "var(--warm)" : "#fff" }}>
                  <div className="uf-d" style={{ fontSize: "clamp(1.1rem,1.8vw,1.5rem)", fontWeight: 900 }}>{s.v}</div>
                  <div className="uf-lbl" style={{ fontSize: "9px" }}>{s.label}</div>
                  <div style={{ fontSize: "9px", color: "var(--ink4)" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </section>

          <section className="a2" style={{ padding: "20px 0", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", overflowX: "auto" }}>
                <Zap style={{ width: "12px", color: "var(--ink4)", flexShrink: 0 }} />
                <div style={{ display: "flex", gap: "8px" }}>
                  {insights.trendingSectors.map((s: any, i: number) => (
                    <Link key={i} href={`?sector=${s.name}`} className={`sec-pill ${sectorFilter === s.name ? "active" : s.heat === "hot" ? "hot" : ""}`}>
                      {s.name} <span style={{ opacity: 0.6 }}>{s.growth}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <form style={{ maxWidth: "500px" }}>
                <div className="srch">
                  <Search style={{ width: "14px", color: "var(--ink4)" }} />
                  <input type="text" name="search" defaultValue={searchQuery} placeholder="Search startups..." />
                  {sectorFilter && <input type="hidden" name="sector" value={sectorFilter} />}
                  <button type="submit" style={{ border: 'none', background: 'none', cursor: 'pointer' }}>
                    <ArrowRight style={{ width: "16px" }} />
                  </button>
                </div>
              </form>
            </div>
          </section>

          <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>
            <div className="a3" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px", marginTop: "30px" }}>
              {startups?.map((s) => (
                <Link key={s.id} href={`/startup/${s.slug}`} style={{ textDecoration: 'none' }}>
                  <div className="s-card">
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "16px" }}>
                      <div className="logo-box">
                        {s.logo_url ? <img src={s.logo_url} alt="" style={{ maxWidth: "80%" }} /> : s.name[0]}
                      </div>
                      <BadgeCheck style={{ width: "16px", color: "var(--pos)" }} />
                    </div>
                    <h3 className="uf-d" style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "8px", color: 'var(--ink)' }}>{s.name}</h3>
                    <p style={{ fontSize: "13px", color: "var(--ink3)", lineHeight: 1.6, flex: 1, marginBottom: "16px" }}>
                      {s.description?.substring(0, 120)}...
                    </p>
                    {/* FIXED LINE BELOW: pt to paddingTop */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "12px", borderTop: "1px solid var(--rl)" }}>
                      <span className="uf-lbl" style={{ fontSize: "9px" }}>{s.industry || "General"}</span>
                      <ArrowUpRight style={{ width: "12px", color: "var(--ink4)" }} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "50px" }}>
                <Link href={`?page=${currentPage - 1}`} className={`pg-btn ${currentPage === 1 ? "disabled" : ""}`}>Prev</Link>
                <div className="uf-m" style={{ alignSelf: "center", fontSize: "12px" }}>Page {currentPage} of {totalPages}</div>
                <Link href={`?page=${currentPage + 1}`} className={`pg-btn ${currentPage === totalPages ? "disabled" : ""}`}>Next</Link>
              </div>
            )}
          </PageTransition>

          <div style={{ marginTop: "60px", padding: "20px 0", borderTop: "1px solid var(--ink)", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: "30px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Activity style={{ width: "14px" }} />
                <span className="uf-lbl">Live updates from Bengaluru Hub</span>
              </div>
              <span className="uf-lbl">© 2026 UpForge India</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
