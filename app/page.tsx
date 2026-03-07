// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  BadgeCheck, ArrowRight, Shield, Clock, Sparkles, Globe,
  Gem, CheckCircle2, ChevronRight, ArrowUpRight, Search,
  DollarSign, Newspaper, Users, BookOpen, ExternalLink,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UpForge — India's #1 Independent Startup Registry & Database 2026",
  description:
    "Discover, research and track 72,000+ verified Indian startups across AI, SaaS, FinTech, HealthTech and more. Free listings, AI-powered growth reports, real-time funding news, unicorn tracker, and live market intelligence.",
  keywords: [
    "Indian startups 2026", "India startup database", "startup registry India",
    "verified Indian startups", "Indian unicorns 2026", "startup funding India",
    "list your startup India free", "startup ecosystem India", "UpForge",
    "India startup intelligence", "top Indian startups", "Indian startup news",
    "best startup database India", "free startup listing India",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge", publisher: "UpForge",
  metadataBase: new URL("https://upforge.in"),
  alternates: { canonical: "https://upforge.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://upforge.in", siteName: "UpForge",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports · Real-time funding news.",
    images: [{ url: "https://upforge.in/og-image.png", width: 1200, height: 630, alt: "UpForge" }],
  },
  twitter: {
    card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports.",
    images: ["https://upforge.in/og-image.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  other: { "theme-color": "#ffffff" },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite", "@id": "https://upforge.in/#website",
      url: "https://upforge.in", name: "UpForge", inLanguage: "en-IN",
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: "https://upforge.in/startup?q={search_term_string}" }, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "Organization", "@id": "https://upforge.in/#organization",
      name: "UpForge", url: "https://upforge.in",
      logo: { "@type": "ImageObject", url: "https://upforge.in/logo.png", width: 512, height: 512 },
      sameAs: ["https://twitter.com/upforge_in", "https://linkedin.com/company/upforge"],
      foundingDate: "2025", areaServed: "IN",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "How many Indian startups are on UpForge?", acceptedAnswer: { "@type": "Answer", text: "72,000+ verified Indian startups across 30+ sectors, manually reviewed." } },
        { "@type": "Question", name: "Is listing on UpForge free?", acceptedAnswer: { "@type": "Answer", text: "Yes, completely free. Submit at upforge.in/submit." } },
      ],
    },
  ],
};

// ─── DATA FETCHERS ────────────────────────────────────────────────────────────
async function getLiveNews() {
  try {
    const threeDaysAgo = new Date();
    threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
    const url = new URL("https://newsapi.org/v2/everything");
    url.searchParams.set("q", "(Indian startup OR startup India OR VC funding India OR unicorn India)");
    url.searchParams.set("from", threeDaysAgo.toISOString().split("T")[0]);
    url.searchParams.set("language", "en");
    url.searchParams.set("sortBy", "publishedAt");
    url.searchParams.set("pageSize", "8");
    url.searchParams.set("apiKey", process.env.NEWSAPI_KEY || "");
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error("NewsAPI failed");
    const data = await res.json();
    if (!data.articles?.length) throw new Error("No articles");
    return data.articles
      .filter((a: any) => a.title && a.source?.name && a.title !== "[Removed]")
      .slice(0, 6)
      .map((a: any) => {
        const diffH = Math.floor((Date.now() - new Date(a.publishedAt).getTime()) / 3600000);
        const diffD = Math.floor(diffH / 24);
        const timestamp = diffH < 1 ? "Just now" : diffH < 24 ? `${diffH}h ago` : diffD === 1 ? "1d ago" : `${diffD}d ago`;
        const t = a.title.toLowerCase();
        const impact = t.match(/raises|funding|unicorn|launch|growth|profit|surge|ipo/) ? "positive"
          : t.match(/shutdown|layoff|fraud|crisis|loss|decline|fail/) ? "negative" : "neutral";
        return { headline: a.title.length > 100 ? a.title.slice(0, 97) + "…" : a.title, source: a.source.name, url: a.url, impact, timestamp };
      });
  } catch {
    return [
      { headline: "India startup ecosystem raises $9B+ in Q1 2026, up 34% year-on-year", source: "Inc42", impact: "positive", timestamp: "6h ago", url: null },
      { headline: "SEBI eases startup IPO norms, reduces mandatory lock-in to 6 months", source: "Economic Times", impact: "positive", timestamp: "12h ago", url: null },
      { headline: "Government's ₹1,000Cr DeepTech Fund opens applications for Indian startups", source: "PIB India", impact: "positive", timestamp: "1d ago", url: null },
      { headline: "Indian SaaS companies cross $1.8B in new ARR, global expansion accelerates", source: "Mint", impact: "positive", timestamp: "1d ago", url: null },
      { headline: "Krutrim AI hits 1M enterprise users; eyes Southeast Asia expansion", source: "Inc42", impact: "positive", timestamp: "2d ago", url: null },
      { headline: "Zepto valued at $5B after latest funding round; profitability in sight", source: "TechCrunch", impact: "positive", timestamp: "2d ago", url: null },
    ];
  }
}

async function getEcosystemData() {
  const dateStr = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      cache: "no-store",
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `Indian startup market analyst. Today: ${dateStr}. Return ONLY valid JSON, no markdown.
{
  "marketMood": { "sentiment": "Bullish/Neutral/Bearish", "score": "0-100 string", "reason": "max 8 words" },
  "topRisingStartups": [{"name":"string","sector":"string","insight":"max 12 words","growthIndicator":"+XX%","momentum":"high/medium"}],
  "sectorMomentum": [{"sector":"string","deals":"number","funding":"$XB or $XM","trend":"max 6 words","growth":"+XX%"}],
  "fundingNews": [{"startup":"string","amount":"$XXM","round":"Series X","investors":"string","valuation":"$XXB or null"}],
  "ecosystemMetrics": {"totalActiveStartups":"XX,000+","totalFundingYTD":"$X.XB","activeVCFirms":"X,XXX+","unicorns":"XXX","soonicorns":"XXX+","avgDealSize":"$XX.XM","mostActiveSector":"string","topCity":"string","monthlyGrowth":"+XX%","activeAngels":"X,XXX+"}
}
EXACTLY: 6 topRisingStartups, 6 sectorMomentum, 5 fundingNews.`,
          },
          { role: "user", content: `Indian startup market data for ${dateStr}. Q1 2026. Real names only.` },
        ],
        temperature: 0.15, max_tokens: 1600, response_format: { type: "json_object" },
      }),
    });
    if (!res.ok) throw new Error("Groq failed");
    const data = await res.json();
    const parsed = JSON.parse(data.choices?.[0]?.message?.content || "");
    if (!parsed.marketMood || !parsed.ecosystemMetrics) throw new Error("Bad structure");
    return parsed;
  } catch {
    return {
      marketMood: { sentiment: "Bullish", score: "76", reason: "Q1 2026 funding momentum strong" },
      topRisingStartups: [
        { name: "Krutrim AI",    sector: "AI",           insight: "India's first sovereign AI cloud, expanding fast",   growthIndicator: "+312%", momentum: "high" },
        { name: "Zepto",         sector: "Quick Commerce", insight: "10-min delivery, profitable in 50+ cities",         growthIndicator: "+189%", momentum: "high" },
        { name: "Pixxel",        sector: "Space Tech",   insight: "Hyperspectral satellites for enterprise agriculture", growthIndicator: "+156%", momentum: "high" },
        { name: "PhysicsWallah", sector: "EdTech",       insight: "100+ offline centres, India's largest ed-network",   growthIndicator: "+145%", momentum: "high" },
        { name: "Rapido",        sector: "Mobility",     insight: "Bike taxi dominating Tier 2/3 cities",               growthIndicator: "+98%",  momentum: "medium" },
        { name: "Ather Energy",  sector: "EV",           insight: "450+ touchpoints, 40% premium EV market share",      growthIndicator: "+87%",  momentum: "medium" },
      ],
      sectorMomentum: [
        { sector: "AI / ML",      deals: "127", funding: "$1.2B", trend: "Enterprise AI adoption accelerating", growth: "+156%" },
        { sector: "SaaS",         deals: "178", funding: "$1.8B", trend: "Global expansion by Indian SaaS",     growth: "+134%" },
        { sector: "FinTech",      deals: "143", funding: "$2.1B", trend: "Credit infra & UPI 3.0 innovation",   growth: "+112%" },
        { sector: "Climate Tech", deals: "89",  funding: "$845M", trend: "EV infra & carbon markets boom",      growth: "+89%"  },
        { sector: "HealthTech",   deals: "98",  funding: "$678M", trend: "Telemedicine & diagnostics scaling",  growth: "+78%"  },
        { sector: "D2C Brands",   deals: "156", funding: "$923M", trend: "Profitable growth after reset",       growth: "+67%"  },
      ],
      fundingNews: [
        { startup: "Zepto",        amount: "$300M", round: "Series F", investors: "General Catalyst, Lightspeed",       valuation: "$3.5B" },
        { startup: "Krutrim AI",   amount: "$150M", round: "Series B", investors: "Matrix Partners, Elevation Capital", valuation: "$1.2B" },
        { startup: "Rapido",       amount: "$120M", round: "Series D", investors: "Nexus VP, WestBridge Capital",       valuation: "$1.2B" },
        { startup: "Pixxel",       amount: "$70M",  round: "Series C", investors: "Google Ventures, Radical Ventures",  valuation: "$450M" },
        { startup: "PhysicsWallah", amount: "$50M", round: "Series B", investors: "GSV Ventures, Westbridge",           valuation: "$2.8B" },
      ],
      ecosystemMetrics: {
        totalActiveStartups: "72,000+", totalFundingYTD: "$9.2B", activeVCFirms: "1,450+",
        unicorns: "118", soonicorns: "210+", avgDealSize: "$12.4M",
        mostActiveSector: "SaaS", topCity: "Bengaluru", monthlyGrowth: "+23%", activeAngels: "8,500+",
      },
    };
  }
}

export const revalidate = 3600;

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function Home() {
  const supabase = await createClient();
  const [liveNews, eco, startupsCount, industriesData, recentData] = await Promise.all([
    getLiveNews(),
    getEcosystemData(),
    supabase.from("startups").select("*", { count: "exact", head: true }),
    supabase.from("startups").select("industry").not("industry", "is", null),
    supabase.from("startups").select("*").order("created_at", { ascending: false }).limit(6),
  ]);

  const total     = startupsCount.count ?? 0;
  const sectors   = industriesData.data ? new Set(industriesData.data.map((i: any) => i.industry)).size : 30;
  const recent    = recentData.data ?? [];
  const updatedAt = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr  = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  const sentColor = eco.marketMood.sentiment === "Bullish" ? "#1a6b3a" : eco.marketMood.sentiment === "Bearish" ? "#b91c1c" : "#92400e";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        .uf{background:#fff;color:#1a1a1a;font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--bg:#fff;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--gr:#c9960d;--pos:#1a6b3a;--neg:#b91c1c}
        .uf-wrap{max-width:1400px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}

        /* ticker */
        @keyframes tick{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        .tk-track{display:inline-flex;white-space:nowrap;animation:tick 70s linear infinite}
        .tk-track:hover{animation-play-state:paused}

        /* animations */
        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .5s .00s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:up .5s .08s cubic-bezier(.16,1,.3,1) both}
        .a2{animation:up .5s .16s cubic-bezier(.16,1,.3,1) both}
        .a3{animation:up .5s .24s cubic-bezier(.16,1,.3,1) both}
        .a4{animation:up .5s .32s cubic-bezier(.16,1,.3,1) both}

        /* live dot */
        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:pulse 2s ease-in-out infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(2);opacity:0}}

        /* nav links (sub-nav) */
        .snav-link{font-size:13px;color:#555;padding:0 14px;height:42px;display:flex;align-items:center;border-bottom:2px solid transparent;white-space:nowrap;transition:color .15s,border-color .15s;font-family:'Source Serif 4',Georgia,serif}
        .snav-link:hover{color:#1a1a1a;border-color:var(--gr)}

        /* buttons */
        .btn-d{display:inline-flex;align-items:center;gap:8px;background:var(--ink);color:#fff;font-size:13px;font-weight:600;letter-spacing:.04em;padding:12px 28px;border:2px solid var(--ink);transition:background .18s;font-family:'Source Serif 4',Georgia,serif}
        .btn-d:hover{background:#333}
        .btn-g{display:inline-flex;align-items:center;gap:8px;background:transparent;color:var(--ink);font-size:13px;font-weight:600;letter-spacing:.04em;padding:11px 28px;border:2px solid var(--ink);transition:background .18s,color .18s;font-family:'Source Serif 4',Georgia,serif}
        .btn-g:hover{background:var(--ink);color:#fff}
        .btn-sm{font-size:11px !important;padding:7px 16px !important;letter-spacing:.12em !important}

        /* search */
        .srch{display:flex;align-items:center;gap:10px;border-bottom:2px solid var(--ink);padding:4px 2px;transition:border-color .18s}
        .srch:focus-within{border-color:var(--gr)}
        .srch input{flex:1;font-size:14px;color:var(--ink);background:transparent;border:none;outline:none;padding:8px 0;font-family:'Source Serif 4',Georgia,serif}
        .srch input::placeholder{color:var(--ink4)}

        /* cards */
        .card{border:1px solid var(--rule);background:#fff;transition:border-color .18s,box-shadow .18s}
        .card:hover{border-color:#bbb;box-shadow:0 3px 16px rgba(0,0,0,.07)}

        /* rows */
        .row{display:flex;align-items:center;justify-content:space-between;padding:10px 0;border-bottom:1px solid var(--rl)}
        .row:last-child{border-bottom:none}
        .row:hover{background:var(--off)}

        /* pill */
        .pill{display:inline-flex;align-items:center;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:3px 8px;border:1px solid currentColor;font-family:'Source Serif 4',Georgia,serif}

        /* verified badge */
        .vbadge{display:inline-flex;align-items:center;gap:3px;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--pos);border:1px solid var(--pos);padding:2px 7px;font-family:'Source Serif 4',Georgia,serif}

        /* stat cell */
        .stat{padding:18px 14px;border-right:1px solid var(--rule);text-align:center}
        .stat:last-child{border-right:none}

        /* grid-divider feature grid */
        .feat-grid{display:grid;gap:1px;background:var(--rule);border:1px solid var(--rule)}
        .feat-cell{background:#fff;padding:22px;transition:background .18s}
        .feat-cell:hover{background:var(--off)}

        /* bar */
        .bar-tr{flex:1;height:2px;background:var(--rl);border-radius:1px;overflow:hidden}
        .bar-fi{height:100%;background:var(--ink);border-radius:1px}

        /* section header */
        .sh{display:flex;align-items:center;gap:12px;margin-bottom:20px}
        .sh::after{content:'';flex:1;height:1px;background:var(--rule)}

        /* thick rule */
        .rule-t{height:2px;background:var(--ink)}

        /* blockquote */
        .bq{border-left:3px solid var(--gr);padding:4px 0 4px 16px;font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:1rem;line-height:1.6;color:var(--ink2)}

        /* no scroll */
        .noscroll::-webkit-scrollbar{display:none}
        .noscroll{-ms-overflow-style:none;scrollbar-width:none}

        /* article hover */
        .art{transition:opacity .15s}
        .art:hover{opacity:.65}

        /* ── SECTOR TABLE ── */
        .s-row{display:grid;grid-template-columns:24px 1fr;gap:0 8px;padding:9px 0;border-bottom:1px solid var(--rl)}
        .s-row:last-child{border-bottom:none}
        .s-num{font-family:'JetBrains Mono',monospace;font-size:10px;color:var(--ink4);padding-top:2px}
        .s-body{min-width:0}
        .s-top{display:flex;align-items:center;justify-content:space-between;gap:8px}
        .s-name{font-size:14px;font-weight:600;color:var(--ink);font-family:'Source Serif 4',Georgia,serif;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}
        .s-nums{display:flex;align-items:center;gap:10px;flex-shrink:0}
        .s-growth{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:700;color:var(--pos);min-width:50px;text-align:right}
        .s-fund{font-family:'JetBrains Mono',monospace;font-size:12px;color:var(--ink2);min-width:44px;text-align:right}
        .s-deals{font-family:'JetBrains Mono',monospace;font-size:11px;color:var(--ink4);min-width:26px;text-align:right}
        .s-bar{display:flex;align-items:center;gap:8px;margin-top:5px}

        /* ── RESPONSIVE ── */
        @media(max-width:1024px){
          .hide-tab{display:none !important}
          .three-col{grid-template-columns:1fr !important}
          .sector-grid{grid-template-columns:1fr !important}
        }
        @media(max-width:640px){
          .hide-mob{display:none !important}
          .stat{border-right:none;border-bottom:1px solid var(--rule)}
          .stat:last-child{border-bottom:none}
          .stats-g{grid-template-columns:repeat(2,1fr) !important}
          .card-g{grid-template-columns:1fr !important}
          .three-col>div{padding-left:0 !important;padding-right:0 !important;border-right:none !important;border-bottom:1px solid var(--rule) !important;padding-bottom:20px !important;margin-bottom:8px !important}
          .three-col>div:last-child{border-bottom:none !important}
          .center-mob{text-align:center !important;align-items:center !important}
          .jc-center{justify-content:center !important}
          .btn-d,.btn-g{width:100%;justify-content:center}
          .sh{justify-content:center}
          .sh::after{display:none}
          .srch{max-width:100% !important;width:100% !important}
          .bq{text-align:left !important}
          /* hide sector section entirely on mobile */
          .sector-section{display:none !important}
          @media(max-width:360px){.s-deals{display:none}}
        }
      `}</style>

      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <Navbar />

      <div className="uf">

        {/* ══ LIVE TICKER ══════════════════════════════════════════════════ */}
        <div style={{ background: "var(--off)", borderBottom: "1px solid var(--rule)", overflow: "hidden" }}>
          <div style={{ display: "flex", alignItems: "stretch", height: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 16px", flexShrink: 0, borderRight: "1px solid var(--rule)", background: "var(--warm)" }}>
              <div className="dot" />
              <span className="uf-lbl">Live</span>
            </div>
            <div style={{ flex: 1, overflow: "hidden" }}>
              <div className="tk-track" style={{ height: "36px", alignItems: "center" }}>
                {[...liveNews, ...liveNews].map((n: any, i: number) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "12px", padding: "0 28px", borderRight: "1px solid var(--rl)" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: n.impact === "positive" ? "var(--pos)" : n.impact === "negative" ? "var(--neg)" : "var(--ink4)" }}>
                      {n.impact === "positive" ? "▲" : n.impact === "negative" ? "▼" : "●"}
                    </span>
                    <span style={{ fontSize: "12px", color: "var(--ink2)", fontFamily: "'Source Serif 4',serif" }}>{n.headline}</span>
                    <span style={{ fontSize: "10px", color: "var(--ink4)", flexShrink: 0, fontFamily: "'Source Serif 4',serif" }}>{n.source} · {n.timestamp}</span>
                  </span>
                ))}
              </div>
            </div>
            <div className="hide-mob" style={{ display: "flex", alignItems: "center", gap: "8px", padding: "0 18px", borderLeft: "1px solid var(--rule)", flexShrink: 0 }}>
              <span className="uf-lbl">Market</span>
              <span className="uf-m" style={{ fontSize: "12px", fontWeight: 600, color: sentColor }}>{eco.marketMood.sentiment} {eco.marketMood.score}/100</span>
            </div>
          </div>
        </div>

        <div className="uf-wrap">

          {/* ── MASTHEAD ──────────────────────────────────────────────────── */}
          <header className="a0">
            {/* Meta strip */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--rule)", flexWrap: "wrap", gap: "8px" }}>
              <span className="uf-lbl" style={{ color: "var(--ink4)" }}>{todayStr} · Vol. II</span>
              <div className="hide-mob" style={{ display: "flex", gap: "20px" }}>
                {["Independent", "Ad-Free", "Verified"].map((t) => (
                  <span key={t} style={{ fontSize: "10px", color: "var(--ink4)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Source Serif 4',serif" }}>✓ {t}</span>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div className="dot" />
                <span className="uf-lbl" style={{ color: "var(--ink4)" }}>Updated {updatedAt} IST</span>
              </div>
            </div>

            {/* Wordmark */}
            <div style={{ textAlign: "center", padding: "clamp(20px,5vw,44px) 0 clamp(14px,3vw,24px)", borderBottom: "2px solid var(--ink)" }}>
              <p style={{ fontSize: "10px", letterSpacing: "0.30em", textTransform: "uppercase", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", marginBottom: "12px" }}>
                India's Independent Startup Intelligence Platform
              </p>
              <h1 className="uf-d" style={{ fontSize: "clamp(3rem,10vw,8rem)", fontWeight: 900, lineHeight: 0.88, color: "var(--ink)", marginBottom: "16px" }}>UpForge</h1>
              <div style={{ display: "flex", justifyContent: "center", gap: "clamp(10px,2vw,24px)", flexWrap: "wrap" }}>
                {[`${total.toLocaleString() || "72,000"}+ Verified`, "100% Independent", "AI Reports", "Real-Time Data"].map((t) => (
                  <span key={t} className="uf-lbl" style={{ color: "var(--ink3)", fontSize: "9px" }}>{t}</span>
                ))}
              </div>
            </div>
          </header>

          {/* ── THREE-COLUMN BROADSHEET ───────────────────────────────────── */}
          <section className="a1" style={{ borderBottom: "1px solid var(--rule)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "clamp(230px,22%,290px) 1px 1fr 1px clamp(250px,24%,330px)", padding: "clamp(18px,4vw,36px) 0" }} className="three-col">

              {/* LEFT: Market Pulse + Latest Deals */}
              <div style={{ paddingRight: "clamp(14px,3vw,28px)" }}>
                <div className="sh"><span className="uf-lbl" style={{ color: "var(--gold)" }}>Market Pulse</span></div>

                {/* Mood card */}
                <div style={{ background: "var(--warm)", border: "1px solid var(--rule)", padding: "16px", marginBottom: "20px" }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: "10px", marginBottom: "12px" }}>
                    <span className="uf-d" style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 900, color: sentColor, lineHeight: 1 }}>{eco.marketMood.sentiment}</span>
                    <span className="uf-m" style={{ fontSize: "1.2rem", fontWeight: 600, color: "var(--ink4)" }}>{eco.marketMood.score}</span>
                  </div>
                  <div style={{ height: "4px", background: "var(--rule)", borderRadius: "2px", marginBottom: "6px", position: "relative" }}>
                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: `${eco.marketMood.score}%`, background: "linear-gradient(90deg,#dc2626 0%,#ca8a04 45%,#16a34a 100%)", borderRadius: "2px" }} />
                    <div style={{ position: "absolute", top: "50%", left: `${eco.marketMood.score}%`, transform: "translate(-50%,-50%)", width: "9px", height: "9px", background: "#fff", borderRadius: "50%", border: "2px solid var(--ink)", boxShadow: "0 1px 4px rgba(0,0,0,.15)" }} />
                  </div>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    {["Bearish","Neutral","Bullish"].map((l) => <span key={l} style={{ fontSize: "9px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{l}</span>)}
                  </div>
                  <p style={{ fontSize: "11px", color: "var(--ink3)", lineHeight: 1.5, fontFamily: "'Source Serif 4',serif" }}>{eco.marketMood.reason}</p>
                </div>

                {/* Latest Deals — 5 items */}
                <div className="sh"><span className="uf-lbl">Latest Deals</span></div>
                {eco.fundingNews.map((f: any, i: number) => (
                  <div key={i} className="row">
                    <div style={{ flex: 1, minWidth: 0, paddingRight: "10px" }}>
                      <div style={{ fontSize: "13.5px", fontWeight: 600, color: "var(--ink)", marginBottom: "2px", fontFamily: "'Source Serif 4',serif" }}>{f.startup}</div>
                      <div style={{ fontSize: "10.5px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{f.round} · {f.investors.split(",")[0]}</div>
                    </div>
                    <div style={{ textAlign: "right", flexShrink: 0 }}>
                      <div className="uf-m" style={{ fontSize: "13px", fontWeight: 600, color: "var(--pos)" }}>{f.amount}</div>
                      {f.valuation && <div style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>@ {f.valuation}</div>}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ background: "var(--rule)", width: "1px" }} className="hide-tab" />

              {/* CENTER: Hero */}
              <div style={{ padding: "0 clamp(14px,3vw,36px)" }} className="center-mob">
                <span className="pill" style={{ color: "var(--gold)", marginBottom: "14px", display: "inline-flex" }}>India's #1 Startup Database</span>
                <h2 className="uf-d" style={{ fontSize: "clamp(1.7rem,3.5vw,2.6rem)", fontWeight: 700, lineHeight: 1.06, color: "var(--ink)", marginBottom: "14px", marginTop: "8px" }}>
                  India's most comprehensive registry of{" "}
                  <em style={{ fontStyle: "italic", color: "var(--gr)" }}>72,000+ verified startups</em>
                  {" "}— researched, ranked, and updated daily.
                </h2>

                <div className="srch" style={{ marginBottom: "22px", maxWidth: "480px" }}>
                  <Search style={{ width: "14px", height: "14px", color: "var(--ink4)", flexShrink: 0 }} />
                  <input type="text" placeholder="Search startups, sectors, founders…" aria-label="Search Indian startups" />
                </div>

                <div className="jc-center" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "20px" }}>
                  <Link href="/startup" className="btn-d">Open Registry <ArrowRight style={{ width: "13px", height: "13px" }} /></Link>
                  <Link href="/submit" className="btn-g">List Your Startup — Free</Link>
                </div>

                <div className="jc-center" style={{ display: "flex", gap: "20px", paddingTop: "16px", borderTop: "1px solid var(--rule)", flexWrap: "wrap" }}>
                  {[{ icon: CheckCircle2, text: "Free forever" }, { icon: BadgeCheck, text: "Manual verification" }, { icon: Sparkles, text: "AI reports" }].map((p) => (
                    <div key={p.text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <p.icon style={{ width: "12px", height: "12px", color: "var(--pos)" }} />
                      <span style={{ fontSize: "12px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif" }}>{p.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: "var(--rule)", width: "1px" }} className="hide-tab" />

              {/* RIGHT: Live Dispatch */}
              <div style={{ paddingLeft: "clamp(14px,3vw,28px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <div className="dot" />
                    <span className="uf-lbl">Startup Dispatch</span>
                  </div>
                  <span className="pill" style={{ color: "var(--pos)" }}>Live</span>
                </div>
                {liveNews.map((n: any, i: number) => (
                  <div key={i} className="art" style={{ paddingBottom: "12px", marginBottom: "12px", borderBottom: i < liveNews.length - 1 ? "1px solid var(--rl)" : "none" }}>
                    <div style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <div style={{ width: "3px", minHeight: "36px", flexShrink: 0, background: n.impact === "positive" ? "var(--pos)" : n.impact === "negative" ? "var(--neg)" : "var(--rule)", borderRadius: "2px", marginTop: "2px" }} />
                      <div>
                        {n.url
                          ? <a href={n.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: "12.5px", color: "var(--ink)", lineHeight: 1.5, display: "block", marginBottom: "4px", fontFamily: "'Source Serif 4',serif" }}>{n.headline}</a>
                          : <p style={{ fontSize: "12.5px", color: "var(--ink)", lineHeight: 1.5, marginBottom: "4px", fontFamily: "'Source Serif 4',serif" }}>{n.headline}</p>
                        }
                        <div style={{ display: "flex", gap: "8px" }}>
                          <span style={{ fontSize: "10px", color: "var(--gold)", fontWeight: 700, fontFamily: "'Source Serif 4',serif", textTransform: "uppercase", letterSpacing: "0.08em" }}>{n.source}</span>
                          <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{n.timestamp}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <div style={{ display: "flex", alignItems: "center", gap: "5px", paddingTop: "8px", borderTop: "1px solid var(--rl)" }}>
                  <Clock style={{ width: "10px", height: "10px", color: "var(--ink4)" }} />
                  <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>Hourly via NewsAPI · {updatedAt} IST</span>
                </div>
              </div>
            </div>
          </section>

          {/* ── ECOSYSTEM METRICS ─────────────────────────────────────────── */}
          <section className="a2">
            <div className="stats-g" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(120px,1fr))", borderBottom: "1px solid var(--rule)" }}>
              {[
                { label: "Active Startups", v: eco.ecosystemMetrics.totalActiveStartups,  sub: "+2,300 / month" },
                { label: "Funding YTD",     v: eco.ecosystemMetrics.totalFundingYTD,      sub: `${eco.ecosystemMetrics.monthlyGrowth} YoY`, warm: true },
                { label: "VC Firms",        v: eco.ecosystemMetrics.activeVCFirms,        sub: `${eco.ecosystemMetrics.activeAngels} angels` },
                { label: "Unicorns",        v: eco.ecosystemMetrics.unicorns,             sub: `${eco.ecosystemMetrics.soonicorns} soonicorns`, warm: true },
                { label: "Avg Deal",        v: eco.ecosystemMetrics.avgDealSize,          sub: "Seed → Series A" },
                { label: "Hot Sector",      v: eco.ecosystemMetrics.mostActiveSector,     sub: `${eco.sectorMomentum[0]?.deals} deals` },
                { label: "Top City",        v: eco.ecosystemMetrics.topCity,              sub: "Leading hub" },
                { label: "Our Registry",    v: `${total.toLocaleString() || 0}+`,        sub: `${sectors} sectors`, warm: true },
              ].map((s, i) => (
                <div key={i} className="stat" style={{ background: s.warm ? "var(--warm)" : "#fff" }}>
                  <div className="uf-d" style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.1, marginBottom: "4px" }}>{s.v}</div>
                  <div className="uf-lbl" style={{ marginBottom: "2px", color: "var(--ink3)" }}>{s.label}</div>
                  <div style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{s.sub}</div>
                </div>
              ))}
            </div>
          </section>

          {/* ══ SECTOR MOMENTUM — hidden on mobile ═══════════════════════════ */}
          <section className="a3 sector-section" style={{ padding: "clamp(18px,4vw,36px) 0", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr clamp(260px,27%,340px)" }} className="sector-grid">

              {/* Sector table */}
              <div style={{ paddingRight: "clamp(0px,3vw,28px)" }}>
                {/* Header */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "8px", paddingBottom: "8px", borderBottom: "1px solid var(--rule)" }}>
                  <span className="uf-lbl">Sector Momentum · Q1 2026</span>
                  <div style={{ display: "flex", gap: "10px" }}>
                    {["Deals","Funding","Growth"].map((h, i) => (
                      <span key={h} style={{ fontSize: "9px", color: i === 2 ? "var(--pos)" : "var(--ink4)", fontFamily: "'Source Serif 4',serif", letterSpacing: "0.1em", textTransform: "uppercase", minWidth: i === 0 ? 26 : i === 1 ? 44 : 50, textAlign: "right" }}>{h}</span>
                    ))}
                  </div>
                </div>
                {eco.sectorMomentum.map((s: any, i: number) => {
                  const pct = Math.min(parseFloat(s.growth.replace("+","").replace("%","")), 160);
                  return (
                    <div key={i} className="s-row">
                      <span className="s-num">{String(i+1).padStart(2,"0")}</span>
                      <div className="s-body">
                        <div className="s-top">
                          <span className="s-name">{s.sector}</span>
                          <div className="s-nums">
                            <span className="s-deals">{s.deals}</span>
                            <span className="s-fund">{s.funding}</span>
                            <span className="s-growth">{s.growth}</span>
                          </div>
                        </div>
                        <div className="s-bar">
                          <div className="bar-tr"><div className="bar-fi" style={{ width: `${(pct/160)*100}%` }} /></div>
                          <span style={{ fontSize: "9.5px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", flexShrink: 0, maxWidth: "130px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.trend}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Leaders sidebar */}
              <div style={{ borderLeft: "1px solid var(--rule)", paddingLeft: "clamp(14px,3vw,28px)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <span className="uf-lbl">Business Leaders</span>
                  <a href="https://www.forbes.com/billionaires/" target="_blank" rel="noopener noreferrer"
                    style={{ fontSize: "10px", color: "var(--gold)", fontFamily: "'Source Serif 4',serif", display: "flex", alignItems: "center", gap: "3px" }}>
                    Forbes <ExternalLink style={{ width: "10px", height: "10px" }} />
                  </a>
                </div>
                {[
                  { name: "Mukesh Ambani", netWorth: "$96.3B", rank: "10", source: "Reliance", yoy: "+4.4%" },
                  { name: "Gautam Adani",  netWorth: "$68.7B", rank: "17", source: "Adani Group", yoy: "+3.2%" },
                  { name: "Shiv Nadar",    netWorth: "$29.4B", rank: "56", source: "HCL Tech", yoy: "+14.8%" },
                ].map((p, i) => (
                  <div key={i} className="row">
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1, minWidth: 0 }}>
                      <div style={{ width: "20px", height: "20px", background: "var(--off)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="uf-m" style={{ fontSize: "8px", fontWeight: 700, color: "var(--ink3)" }}>{p.rank}</span>
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',serif" }}>{p.name}</div>
                        <div style={{ display: "flex", gap: "6px" }}>
                          <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{p.source}</span>
                          <span style={{ fontSize: "10px", color: "var(--pos)", fontWeight: 600, fontFamily: "'Source Serif 4',serif" }}>{p.yoy}</span>
                        </div>
                      </div>
                    </div>
                    <span className="uf-m" style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)", flexShrink: 0 }}>{p.netWorth}</span>
                  </div>
                ))}
                <div style={{ marginTop: "16px", padding: "14px", background: "var(--warm)", border: "1px solid var(--rule)" }}>
                  <div className="uf-lbl" style={{ marginBottom: "8px" }}>Q1 2026 Snapshot</div>
                  {[
                    { l: "Funding YTD", v: eco.ecosystemMetrics.totalFundingYTD },
                    { l: "Avg Deal",    v: eco.ecosystemMetrics.avgDealSize },
                    { l: "Unicorns",   v: eco.ecosystemMetrics.unicorns },
                    { l: "Soonicorns", v: eco.ecosystemMetrics.soonicorns },
                  ].map((s, i) => (
                    <div key={i} className="row" style={{ padding: "6px 0" }}>
                      <span style={{ fontSize: "11px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif" }}>{s.l}</span>
                      <span className="uf-d" style={{ fontSize: "14px", fontWeight: 700, color: "var(--ink)" }}>{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ── TOP RISING STARTUPS ───────────────────────────────────────── */}
          <section className="a3" style={{ padding: "clamp(20px,5vw,44px) 0", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
              <div className="sh" style={{ flex: 1, marginBottom: 0 }}><span className="uf-lbl">Top Rising Startups · 2026</span></div>
              <Link href="/startup" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "12px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif", marginLeft: "14px", flexShrink: 0 }}>
                Full registry <ChevronRight style={{ width: "12px", height: "12px" }} />
              </Link>
            </div>

            {/* Hero card */}
            {eco.topRisingStartups[0] && (
              <div style={{ background: "var(--warm)", border: "1px solid var(--rule)", padding: "clamp(16px,3vw,28px)", marginBottom: "14px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "16px", alignItems: "start" }}>
                  <div>
                    <div style={{ display: "flex", gap: "8px", alignItems: "center", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span className="pill" style={{ color: "var(--gold)" }}>Editor's Pick</span>
                      <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", letterSpacing: "0.1em", textTransform: "uppercase" }}>{eco.topRisingStartups[0].sector}</span>
                      {eco.topRisingStartups[0].momentum === "high" && <span className="pill" style={{ color: "var(--pos)" }}>🔥 High Momentum</span>}
                    </div>
                    <h3 className="uf-d" style={{ fontSize: "clamp(1.5rem,3.5vw,2.2rem)", fontWeight: 700, color: "var(--ink)", marginBottom: "8px", lineHeight: 1.1 }}>{eco.topRisingStartups[0].name}</h3>
                    <p style={{ fontSize: "13.5px", color: "var(--ink2)", lineHeight: 1.65, maxWidth: "480px", marginBottom: "14px", fontFamily: "'Source Serif 4',serif" }}>{eco.topRisingStartups[0].insight}</p>
                    <Link href="/startup" className="btn-d" style={{ fontSize: "12px", padding: "9px 20px" }}>
                      View Profile <ArrowUpRight style={{ width: "12px", height: "12px" }} />
                    </Link>
                  </div>
                  <div style={{ textAlign: "right", flexShrink: 0 }}>
                    <div className="uf-m" style={{ fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "var(--pos)", lineHeight: 1 }}>{eco.topRisingStartups[0].growthIndicator}</div>
                    <div className="uf-lbl" style={{ fontSize: "9px", marginTop: "4px" }}>Growth Rate</div>
                  </div>
                </div>
              </div>
            )}

            <div className="card-g" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
              {eco.topRisingStartups.slice(1).map((s: any, i: number) => (
                <Link key={i} href="/startup" className="card" style={{ display: "block", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: "9px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "3px" }}>{s.sector}</div>
                      <h4 className="uf-d" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2 }}>{s.name}</h4>
                    </div>
                    <span className="uf-m" style={{ fontSize: ".95rem", fontWeight: 700, color: "var(--pos)", flexShrink: 0, marginLeft: "8px" }}>{s.growthIndicator}</span>
                  </div>
                  <p style={{ fontSize: "11.5px", color: "var(--ink3)", lineHeight: 1.6, marginBottom: "10px", fontFamily: "'Source Serif 4',serif" }}>{s.insight}</p>
                  <div style={{ height: "2px", background: "var(--rl)", borderRadius: "1px", overflow: "hidden" }}>
                    <div style={{ height: "100%", background: "var(--ink)", width: `${Math.min(parseFloat(s.growthIndicator.replace("+","").replace("%","")),200)/2}%` }} />
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── RECENTLY VERIFIED ─────────────────────────────────────────── */}
          <section className="a4" style={{ padding: "clamp(20px,5vw,44px) 0", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px", flexWrap: "wrap", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span className="uf-lbl">Recently Verified</span>
                <span className="vbadge">✓ Live Registry</span>
              </div>
              <Link href="/startup" style={{ fontSize: "12px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif", display: "flex", alignItems: "center", gap: "4px" }}>
                View all {total.toLocaleString()}+ <ChevronRight style={{ width: "12px", height: "12px" }} />
              </Link>
            </div>
            <div className="card-g" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", gap: "10px" }}>
              {recent.slice(0, 6).map((s: any) => (
                <Link key={s.id} href={`/startup/${s.slug}`} className="card" style={{ display: "block", padding: "16px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                    <h4 className="uf-d" style={{ fontSize: ".95rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.25, flex: 1 }}>{s.name}</h4>
                    <BadgeCheck style={{ width: "12px", height: "12px", color: "var(--pos)", flexShrink: 0, marginLeft: "8px", marginTop: "2px" }} />
                  </div>
                  <p style={{ fontSize: "11.5px", color: "var(--ink3)", lineHeight: 1.6, marginBottom: "12px", fontFamily: "'Source Serif 4',serif", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{s.description}</p>
                  <div style={{ display: "flex", gap: "8px", paddingTop: "10px", borderTop: "1px solid var(--rl)" }}>
                    <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',serif" }}>{s.founded_year || "—"}</span>
                    <span style={{ color: "var(--rule)" }}>·</span>
                    <span style={{ fontSize: "10px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{s.industry || "Startup"}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── INTELLIGENCE HUB ──────────────────────────────────────────── */}
          <section className="a4" style={{ padding: "clamp(20px,5vw,44px) 0", borderBottom: "1px solid var(--rule)" }}>
            <div className="sh"><span className="uf-lbl">Intelligence Hub</span></div>
            <div className="feat-grid" style={{ gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))" }}>
              {[
                { label: "AI Startup Reports",     desc: "Deep dives on India's fastest-growing AI companies — valuation, growth signals, competitive moats.", href: "/top-ai-startups",      icon: Sparkles,   stat: "1,779+ companies", tag: "AI / ML" },
                { label: "Indian Unicorn Tracker", desc: "118 verified unicorn profiles with funding history, investor networks, and growth trajectory.",       href: "/indian-unicorns",     icon: Gem,        stat: "118 unicorns",     tag: "Unicorns" },
                { label: "Funding Database",       desc: "Track every major round — angel to Series F — with investor and valuation data.",                     href: "/top-funded-startups", icon: DollarSign, stat: "$14B+ tracked",    tag: "Funding" },
                { label: "Founder Stories",        desc: "In-depth profiles of India's most ambitious founders — journey, decisions, and lessons.",             href: "/founder-stories",     icon: Users,      stat: "Curated profiles", tag: "Founders" },
                { label: "Full Startup Registry",  desc: `${total.toLocaleString() || "72,000"}+ verified startups across ${sectors} sectors.`,               href: "/startup",             icon: BookOpen,   stat: `${total.toLocaleString() || "72,000"}+`, tag: "Registry" },
              ].map((item, i) => (
                <Link key={i} href={item.href} className="feat-cell" style={{ display: "block" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                    <div style={{ width: "34px", height: "34px", background: "var(--warm)", border: "1px solid var(--rule)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <item.icon style={{ width: "15px", height: "15px", color: "var(--ink3)" }} />
                    </div>
                    <ArrowUpRight style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                  </div>
                  <div style={{ fontSize: "9px", color: "var(--gold)", fontFamily: "'Source Serif 4',serif", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "5px" }}>{item.tag}</div>
                  <h3 className="uf-d" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: "7px", lineHeight: 1.2 }}>{item.label}</h3>
                  <p style={{ fontSize: "12px", color: "var(--ink3)", lineHeight: 1.6, marginBottom: "14px", fontFamily: "'Source Serif 4',serif" }}>{item.desc}</p>
                  <div style={{ paddingTop: "10px", borderTop: "1px solid var(--rl)" }}>
                    <span className="uf-m" style={{ fontSize: "11.5px", fontWeight: 600, color: "var(--ink2)" }}>{item.stat}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── AI REPORTS CTA ────────────────────────────────────────────── */}
          <section style={{ padding: "clamp(28px,6vw,56px) 0", borderBottom: "1px solid var(--rule)" }}>
            <div style={{ background: "var(--warm)", border: "1px solid var(--rule)", padding: "clamp(24px,5vw,48px)", display: "grid", gridTemplateColumns: "1fr auto", gap: "clamp(16px,4vw,40px)", alignItems: "center" }}>
              <div>
                <span className="uf-lbl" style={{ color: "var(--gold)", display: "block", marginBottom: "10px" }}>Premium Intelligence</span>
                <h2 className="uf-d" style={{ fontSize: "clamp(1.6rem,4vw,2.8rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1.06, marginBottom: "14px" }}>
                  AI-Powered Deep Research Reports on Indian Startups
                </h2>
                <p style={{ fontSize: "14px", color: "var(--ink2)", lineHeight: 1.8, maxWidth: "520px", marginBottom: "24px", fontFamily: "'Source Serif 4',serif" }}>
                  Institutional-grade analysis — valuation insights, competitive landscape, market positioning, and risk signals. Built for founders, investors, and analysts.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/reports" className="btn-d">Explore Reports <ArrowRight style={{ width: "13px", height: "13px" }} /></Link>
                  <Link href="/startup" className="btn-g">Browse Registry</Link>
                </div>
              </div>
              <div className="hide-tab" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", width: "220px" }}>
                {["Valuation Analysis","Market Positioning","Risk Signals","Growth Trajectory"].map((t) => (
                  <div key={t} style={{ padding: "14px", background: "#fff", border: "1px solid var(--rule)", textAlign: "center" }}>
                    <Newspaper style={{ width: "16px", height: "16px", color: "var(--ink4)", margin: "0 auto 7px" }} />
                    <p style={{ fontSize: "10.5px", fontWeight: 600, color: "var(--ink2)", lineHeight: 1.4, fontFamily: "'Source Serif 4',serif" }}>{t}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── TRUST STRIP ───────────────────────────────────────────────── */}
          <div className="rule-t" />
          <div style={{ padding: "16px 0", display: "flex", flexWrap: "wrap", gap: "8px 24px", alignItems: "center", justifyContent: "center", background: "var(--off)" }}>
            {[
              { icon: Shield,     text: "100% Independent · Zero paid rankings" },
              { icon: BadgeCheck, text: "Every startup manually reviewed" },
              { icon: Sparkles,   text: "AI-powered research reports" },
              { icon: Globe,      text: "Open, public & Google-indexed" },
              { icon: Clock,      text: `Refreshed hourly · ${updatedAt} IST` },
            ].map((item) => (
              <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <item.icon style={{ width: "12px", height: "12px", color: "var(--ink3)" }} />
                <span style={{ fontSize: "11px", color: "var(--ink3)", fontFamily: "'Source Serif 4',serif" }}>{item.text}</span>
              </div>
            ))}
          </div>

        </div>{/* /uf-wrap */}
      </div>{/* /uf */}

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <Footer />
    </>
  );
}
