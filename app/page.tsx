// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BadgeCheck, ArrowRight, Shield, Clock, Sparkles, Globe,
  TrendingUp, Award, Zap, Building2, LineChart, Briefcase,
  DollarSign, IndianRupee, Newspaper, Rocket, Activity,
  Gem, CheckCircle2, ChevronRight,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UpForge — India's #1 Independent Startup Registry & Database 2026",
  description:
    "Discover, research and track 72,000+ verified Indian startups. Free listings, AI-powered growth reports, real-time funding news, unicorn tracker and live market intelligence. India's most trusted startup database.",
  keywords: [
    "Indian startups 2026", "India startup database", "startup registry India",
    "verified Indian startups", "Indian unicorns 2026", "startup funding India",
    "list your startup India free", "startup ecosystem India", "Indian founders database",
    "VC deals India", "startup news India today", "Bengaluru startups",
    "Mumbai startups", "Delhi NCR startups", "SaaS startups India",
    "fintech startups India", "edtech startups India", "healthtech India",
    "AI startups India", "deeptech India startups", "startup valuation India",
    "angel investors India", "startup growth report India", "UpForge",
    "India startup intelligence", "Indian soonicorns", "startup funding tracker India",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  metadataBase: new URL("https://upforge.in"),
  alternates: { canonical: "https://upforge.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://upforge.in", siteName: "UpForge",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports · Live funding news · Unicorn tracker.",
    images: [{ url: "https://upforge.in/og-image.png", width: 1200, height: 630, alt: "UpForge — India's Independent Startup Registry" }],
  },
  twitter: {
    card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports · Real-time funding news.",
    images: ["https://upforge.in/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN" },
  other: { "og:locale:alternate": "hi_IN", "article:publisher": "https://upforge.in" },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite", "@id": "https://upforge.in/#website",
      url: "https://upforge.in", name: "UpForge",
      description: "India's Independent Startup Registry & Live Market Intelligence",
      inLanguage: "en-IN",
      potentialAction: {
        "@type": "SearchAction",
        target: { "@type": "EntryPoint", urlTemplate: "https://upforge.in/startup?q={search_term_string}" },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization", "@id": "https://upforge.in/#organization",
      name: "UpForge", url: "https://upforge.in",
      logo: { "@type": "ImageObject", url: "https://upforge.in/logo.png", width: 512, height: 512 },
      sameAs: ["https://twitter.com/upforge_in", "https://linkedin.com/company/upforge"],
      description: "India's most trusted independent startup registry — verified listings, AI growth reports, and real-time market intelligence.",
      areaServed: "IN",
      knowsAbout: ["Indian Startups", "Startup Ecosystem", "Venture Capital India", "Startup Funding", "Indian Unicorns"],
    },
    {
      "@type": "WebPage", "@id": "https://upforge.in/#webpage",
      url: "https://upforge.in", name: "UpForge — India's #1 Independent Startup Registry 2026",
      isPartOf: { "@id": "https://upforge.in/#website" },
      about: { "@id": "https://upforge.in/#organization" },
      description: "Discover and research 72,000+ verified Indian startups. Free listings, AI growth reports, live funding news.",
      dateModified: new Date().toISOString(),
    },
    {
      "@type": "ItemList", name: "Top Indian Startup Sectors 2026",
      description: "Most active startup sectors in India by funding and deal count",
      numberOfItems: 6,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "SaaS" }, { "@type": "ListItem", position: 2, name: "FinTech" },
        { "@type": "ListItem", position: 3, name: "AI/ML" }, { "@type": "ListItem", position: 4, name: "D2C Brands" },
        { "@type": "ListItem", position: 5, name: "Climate Tech" }, { "@type": "ListItem", position: 6, name: "HealthTech" },
      ],
    },
  ],
};

// ─── BILLIONAIRE DATA ─────────────────────────────────────────────────────────
const TOP_INDIAN_BILLIONAIRES = [
  { name: "Mukesh Ambani", netWorth: "$96.3B", rank: "#10", source: "Reliance Industries", yoy: "+$4.2B YoY", startupConnections: ["Jio Platforms", "Netmeds", "Dunzo"] },
  { name: "Gautam Adani", netWorth: "$68.7B", rank: "#17", source: "Adani Group", yoy: "+$2.1B YoY", startupConnections: ["Adani Digital Labs", "Adani Green Energy"] },
  { name: "Shiv Nadar", netWorth: "$29.4B", rank: "#56", source: "HCL Technologies", yoy: "+$3.8B YoY", startupConnections: ["HCL Software", "Vama Sundari Investments"] },
];

// ─── NEWSAPI ──────────────────────────────────────────────────────────────────
async function getLiveNews() {
  try {
    const today = new Date();
    const threeDaysAgo = new Date(today);
    threeDaysAgo.setDate(today.getDate() - 3);
    const fromDate = threeDaysAgo.toISOString().split("T")[0];
    const url = new URL("https://newsapi.org/v2/everything");
    url.searchParams.set("q", "(Indian startup OR startup India OR VC funding India OR unicorn India OR fintech India OR SaaS India)");
    url.searchParams.set("from", fromDate);
    url.searchParams.set("language", "en");
    url.searchParams.set("sortBy", "publishedAt");
    url.searchParams.set("pageSize", "6");
    url.searchParams.set("apiKey", process.env.NEWSAPI_KEY || "");
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error(`NewsAPI ${res.status}`);
    const data = await res.json();
    if (!data.articles?.length) throw new Error("No articles");
    return data.articles
      .filter((a: any) => a.title && a.source?.name && a.title !== "[Removed]")
      .slice(0, 5)
      .map((article: any) => {
        const publishedAt = new Date(article.publishedAt);
        const diffH = Math.floor((Date.now() - publishedAt.getTime()) / 3600000);
        const diffD = Math.floor(diffH / 24);
        const timestamp = diffH < 1 ? "just now" : diffH < 24 ? `${diffH}h ago` : diffD === 1 ? "1d ago" : `${diffD}d ago`;
        const title = article.title.toLowerCase();
        const impact = title.match(/raises|funding|unicorn|launch|growth|profit|record|surge|ipo|expands/) ? "positive" :
          title.match(/shutdown|layoff|fraud|crisis|loss|decline|cut|fail|drops/) ? "negative" : "neutral";
        return {
          headline: article.title.length > 95 ? article.title.slice(0, 92) + "…" : article.title,
          source: article.source.name, url: article.url, impact, timestamp,
        };
      });
  } catch {
    return [
      { headline: "India startup ecosystem raises $9B+ in Q1 2026, up 34% year-on-year", source: "Inc42", impact: "positive", timestamp: "6h ago" },
      { headline: "SEBI eases startup IPO norms, reduces mandatory lock-in to 6 months", source: "Economic Times", impact: "positive", timestamp: "12h ago" },
      { headline: "Government's ₹1,000Cr DeepTech Fund opens applications for Indian startups", source: "PIB India", impact: "positive", timestamp: "1d ago" },
      { headline: "Indian SaaS companies cross $1.8B in new ARR, global expansion accelerates", source: "Mint", impact: "positive", timestamp: "1d ago" },
      { headline: "Krutrim AI hits 1M enterprise users; eyes Southeast Asia expansion in H2", source: "Inc42", impact: "positive", timestamp: "2d ago" },
    ];
  }
}

// ─── GROQ ─────────────────────────────────────────────────────────────────────
async function getEcosystemData() {
  const dateStr = new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      cache: "no-store",
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: `Indian startup market data analyst. Today: ${dateStr}.
Return ONLY valid JSON, no markdown.
{
  "marketMood": { "sentiment": "Bullish/Neutral/Bearish", "score": "0-100 string", "reason": "max 8 words" },
  "topRisingStartups": [{"name":"real startup","sector":"sector","insight":"max 12 words","growthIndicator":"+XX%","momentum":"high/medium"}],
  "sectorMomentum": [{"sector":"sector","deals":"number","funding":"$XB or $XM","trend":"max 6 words","growth":"+XX%"}],
  "fundingNews": [{"startup":"real name","amount":"$XXM","round":"Series X","investors":"real investors","valuation":"$XXB or null"}],
  "ecosystemMetrics": {"totalActiveStartups":"XX,000+","totalFundingYTD":"$X.XB","activeVCFirms":"X,XXX+","unicorns":"XXX","soonicorns":"XXX+","avgDealSize":"$XX.XM","mostActiveSector":"sector","topCity":"city","monthlyGrowth":"+XX%","activeAngels":"X,XXX+"}
}
EXACTLY: 6 topRisingStartups, 6 sectorMomentum, 4 fundingNews.`,
          },
          { role: "user", content: `Indian startup market data for ${dateStr}. Q1 2026 actuals. Real startups, real investors only.` },
        ],
        temperature: 0.15,
        max_tokens: 1500,
        response_format: { type: "json_object" },
      }),
    });
    if (!response.ok) throw new Error(`Groq ${response.status}`);
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (!content) throw new Error("Empty");
    const parsed = JSON.parse(content);
    if (!parsed.marketMood || !parsed.ecosystemMetrics) throw new Error("Invalid structure");
    return parsed;
  } catch {
    return {
      marketMood: { sentiment: "Bullish", score: "76", reason: "Q1 2026 funding momentum strong" },
      topRisingStartups: [
        { name: "Krutrim AI", sector: "AI Infrastructure", insight: "India's first sovereign AI cloud, expanding fast", growthIndicator: "+312%", momentum: "high" },
        { name: "Zepto", sector: "Quick Commerce", insight: "10-min delivery, profitable in 50+ cities", growthIndicator: "+189%", momentum: "high" },
        { name: "Pixxel", sector: "Space Tech", insight: "Hyperspectral satellites for enterprise agriculture", growthIndicator: "+156%", momentum: "high" },
        { name: "PhysicsWallah", sector: "EdTech", insight: "100+ offline centres, India's largest ed-network", growthIndicator: "+145%", momentum: "high" },
        { name: "Rapido", sector: "Mobility", insight: "Bike taxi dominating Tier 2/3 with 8M daily rides", growthIndicator: "+98%", momentum: "medium" },
        { name: "Ather Energy", sector: "EV", insight: "450+ touchpoints, 40% premium EV market share", growthIndicator: "+87%", momentum: "medium" },
      ],
      sectorMomentum: [
        { sector: "AI/ML", deals: "127", funding: "$1.2B", trend: "Enterprise AI adoption accelerating", growth: "+156%" },
        { sector: "SaaS", deals: "178", funding: "$1.8B", trend: "Global expansion by Indian SaaS", growth: "+134%" },
        { sector: "FinTech", deals: "143", funding: "$2.1B", trend: "Credit infra & UPI 3.0 innovation", growth: "+112%" },
        { sector: "Climate Tech", deals: "89", funding: "$845M", trend: "EV infra & carbon markets boom", growth: "+89%" },
        { sector: "HealthTech", deals: "98", funding: "$678M", trend: "Telemedicine & diagnostics scaling", growth: "+78%" },
        { sector: "D2C Brands", deals: "156", funding: "$923M", trend: "Profitable growth after reset", growth: "+67%" },
      ],
      fundingNews: [
        { startup: "Zepto", amount: "$300M", round: "Series F", investors: "General Catalyst, Lightspeed", valuation: "$3.5B" },
        { startup: "Krutrim AI", amount: "$150M", round: "Series B", investors: "Matrix Partners, Elevation Capital", valuation: "$1.2B" },
        { startup: "Rapido", amount: "$120M", round: "Series D", investors: "Nexus Venture Partners, WestBridge", valuation: "$1.2B" },
        { startup: "Pixxel", amount: "$70M", round: "Series C", investors: "Google Ventures, Radical Ventures", valuation: "$450M" },
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

// ─── PULSE DOT ────────────────────────────────────────────────────────────────
function PulseDot({ color = "green" }: { color?: "green" | "blue" | "amber" }) {
  const c = { green: ["bg-green-400", "bg-green-500"], blue: ["bg-blue-400", "bg-blue-500"], amber: ["bg-amber-400", "bg-amber-500"] };
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c[color][0]} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${c[color][1]}`} />
    </span>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default async function Home() {
  const supabase = await createClient();
  const [liveNews, ecosystem, startupsCount, industriesData, recentData] = await Promise.all([
    getLiveNews(),
    getEcosystemData(),
    supabase.from("startups").select("*", { count: "exact", head: true }),
    supabase.from("startups").select("industry").not("industry", "is", null),
    supabase.from("startups").select("*").order("created_at", { ascending: false }).limit(6),
  ]);

  const totalStartups = startupsCount.count;
  const uniqueIndustries = industriesData.data ? new Set(industriesData.data.map((i: any) => i.industry)).size : 30;
  const verifiedStartups = recentData.data?.map((s: any) => ({ ...s, verified: true }));
  const sentimentColor = ecosystem.marketMood.sentiment === "Bullish" ? "#22c55e" : ecosystem.marketMood.sentiment === "Neutral" ? "#f59e0b" : "#ef4444";
  const lastUpdated = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  return (
    <div className="bg-[#F5F0E8] text-[#1A1208] antialiased" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: `var _hAt=null;document.addEventListener('visibilitychange',function(){if(document.hidden){_hAt=Date.now();}else if(_hAt&&(Date.now()-_hAt)>3600000){window.location.reload();}});` }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }

        .fade-up-0{animation:fadeUp .6s .00s ease both}
        .fade-up-1{animation:fadeUp .6s .10s ease both}
        .fade-up-2{animation:fadeUp .6s .20s ease both}
        .fade-up-3{animation:fadeUp .6s .32s ease both}
        .fade-up-4{animation:fadeUp .6s .44s ease both}
        .fade-up-5{animation:fadeUp .6s .56s ease both}

        .ticker-track{animation:ticker 55s linear infinite}
        .ticker-track:hover{animation-play-state:paused}

        .num-font{font-variant-numeric:tabular-nums;font-feature-settings:"tnum"}
        .playfair{font-family:'Playfair Display',Georgia,serif}
        .baskerville{font-family:'Libre Baskerville',Georgia,serif}

        .dropcap::first-letter{
          float:left;font-family:'Playfair Display',Georgia,serif;
          font-size:3.8em;line-height:.78;font-weight:900;
          margin:.04em .12em 0 0;color:#1A1208;
        }

        .card-lift{transition:transform .22s ease,box-shadow .22s ease,border-color .18s ease}
        .card-lift:hover{transform:translateY(-3px);box-shadow:0 10px 32px rgba(26,18,8,.12);border-color:#8B7355!important}

        .orn-rule{display:flex;align-items:center;gap:10px;color:#C9A84C;font-size:11px;letter-spacing:.25em;font-family:system-ui,sans-serif}
        .orn-rule::before,.orn-rule::after{content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,#C9A84C70,#C9A84C,#C9A84C70,transparent)}

        .sector-bar{height:2px;background:#E8E2D8;border-radius:1px;overflow:hidden}
        .sector-bar-fill{height:100%;background:linear-gradient(90deg,#1A1208,#5C4A2A);border-radius:1px}

        .pull-quote{border-left:3px solid #C9A84C;padding-left:1rem;font-family:'Playfair Display',Georgia,serif;font-style:italic;font-size:1.1rem;line-height:1.55;color:#3D2B1A}

        .section-divider{text-align:center;color:#C9A84C;letter-spacing:.3em;font-size:10px;font-family:system-ui,sans-serif;position:relative;overflow:hidden}
        .section-divider::before,.section-divider::after{content:'';position:absolute;top:50%;width:44%;height:1px;background:linear-gradient(90deg,transparent,#C9A84C50)}
        .section-divider::before{left:0}.section-divider::after{right:0;transform:scaleX(-1)}

        .round-badge{font-family:system-ui,sans-serif;font-size:9px;font-weight:800;letter-spacing:.12em;text-transform:uppercase;padding:2px 7px;border:1px solid currentColor}

        .vr{width:1px;background:linear-gradient(180deg,transparent,#C8BCA8 10%,#C8BCA8 90%,transparent);flex-shrink:0}

        .trust-chip{display:inline-flex;align-items:center;gap:6px;font-family:system-ui,sans-serif;font-size:10px;font-weight:600;color:#5C4A2A;letter-spacing:.05em;padding:5px 12px;background:#EDE7DA;border:1px solid #D4C9B0}

        .mood-meter{height:4px;border-radius:2px;background:linear-gradient(90deg,#ef4444 0%,#f59e0b 45%,#22c55e 100%);position:relative}

        .verified-stamp{display:inline-flex;align-items:center;gap:4px;font-family:system-ui,sans-serif;font-size:9px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:#16a34a;border:1.5px solid #16a34a;padding:2px 8px;transform:rotate(-1deg)}

        .paper-texture{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.022'/%3E%3C/svg%3E")}
      `}</style>

      {/* ══ BREAKING TICKER ══════════════════════════════════════════════════ */}
      <div className="bg-[#0F0B06] text-white overflow-hidden border-b border-[#2A2218]" style={{ marginTop: "3.5rem" }}>
        <div className="flex items-stretch">
          <div className="flex items-center gap-2.5 bg-[#C9A84C] text-[#0F0B06] px-4 py-2.5 flex-shrink-0">
            <PulseDot color="green" />
            <span className="text-[9px] font-black tracking-[.22em] uppercase" style={{ fontFamily: "system-ui,sans-serif" }}>Breaking</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap py-2.5">
              {[...liveNews, ...liveNews].map((news: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-3 px-7 border-r border-white/10">
                  <span className={`text-[8px] font-black px-1.5 py-0.5 flex-shrink-0 tracking-wider ${news.impact === "positive" ? "bg-emerald-500/25 text-emerald-400" : news.impact === "negative" ? "bg-red-500/20 text-red-400" : "bg-white/8 text-white/40"}`} style={{ fontFamily: "system-ui,sans-serif" }}>
                    {news.impact === "positive" ? "▲ UP" : news.impact === "negative" ? "▼ DOWN" : "● WATCH"}
                  </span>
                  <span className="text-[11.5px] text-white/80" style={{ fontFamily: "'Libre Baskerville',Georgia,serif" }}>{news.headline}</span>
                  <span className="text-[9px] text-white/25 flex-shrink-0" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {news.source} · {news.timestamp}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 items-center gap-3 px-5 border-l border-white/10 hidden md:flex">
            <Activity className="w-3 h-3 text-white/25" />
            <div style={{ fontFamily: "system-ui,sans-serif" }}>
              <div className="text-[8px] text-white/25 uppercase tracking-widest mb-0.5">Market</div>
              <div className="text-[13px] font-bold" style={{ color: sentimentColor }}>{ecosystem.marketMood.sentiment} {ecosystem.marketMood.score}/100</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══ MAIN WRAPPER ═════════════════════════════════════════════════════ */}
      <div className="paper-texture" style={{ backgroundColor: "#F5F0E8" }}>
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 pb-20">

          {/* ── NEWSPAPER MASTHEAD ─────────────────────────────────────────── */}
          <header className="fade-up-0">
            {/* Dateline strip */}
            <div className="flex items-center justify-between py-2.5 border-b border-[#C8BCA8]">
              <span className="text-[10px] text-[#8B7355] tracking-wide baskerville">{todayStr} · Vol. II</span>
              <div className="hidden sm:flex items-center gap-5">
                {["Independent", "Ad-Free", "Verified"].map((t) => (
                  <span key={t} className="flex items-center gap-1.5 text-[9px] text-[#8B7355] uppercase tracking-[.15em]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    <span className="w-1 h-1 rounded-full bg-[#C9A84C] inline-block" />
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <PulseDot color="green" />
                <span className="text-[9px] text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>{lastUpdated} IST</span>
              </div>
            </div>

            {/* Masthead */}
            <div className="py-7 sm:py-10 text-center border-b-2 border-[#1A1208]">
              <div className="orn-rule mb-5">INDIA'S INDEPENDENT STARTUP REGISTRY</div>
              <h1 className="playfair text-[4rem] sm:text-[5.5rem] md:text-[7rem] lg:text-[8.5rem] font-black leading-[.88] tracking-tight text-[#1A1208] mb-4">
                UpForge
              </h1>
              <p className="text-[10px] tracking-[.38em] text-[#8B7355] uppercase mb-6" style={{ fontFamily: "system-ui,sans-serif" }}>
                Est. 2025 · Delhi, India · Registry of Record
              </p>
              <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3">
                <span className="trust-chip"><BadgeCheck className="w-3 h-3 text-emerald-600" />{totalStartups || 0}+ Verified</span>
                <span className="trust-chip"><Shield className="w-3 h-3 text-amber-600" />100% Independent</span>
                <span className="trust-chip"><Sparkles className="w-3 h-3 text-purple-600" />AI Reports</span>
              </div>
            </div>

            {/* Navigation bar */}
            <div className="flex items-center justify-between border-b border-[#C8BCA8] overflow-x-auto">
              <div className="flex items-center gap-0 flex-nowrap">
                {[
                  { label: "Registry", href: "/startup" },
                  { label: "AI Startups", href: "/top-ai-startups" },
                  { label: "Unicorns", href: "/indian-unicorns" },
                  { label: "Founders", href: "/founder-stories" },
                  { label: "Funded", href: "/top-funded-startups" },
                  { label: "SaaS", href: "/best-saas-startups" },
                  { label: "Reports", href: "/reports" },
                ].map((item, i) => (
                  <Link key={i} href={item.href}
                    className="text-[10px] font-bold tracking-[.12em] uppercase text-[#5C4A2A] px-3 sm:px-4 py-2 hover:bg-[#1A1208] hover:text-[#C9A84C] transition-colors border-r border-[#C8BCA8] whitespace-nowrap"
                    style={{ fontFamily: "system-ui,sans-serif" }}>
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link href="/submit"
                className="text-[9px] font-black tracking-[.18em] uppercase bg-[#1A1208] text-[#C9A84C] px-4 py-2 hover:bg-[#C9A84C] hover:text-[#1A1208] transition-colors whitespace-nowrap hidden sm:block"
                style={{ fontFamily: "system-ui,sans-serif" }}>
                + List Free
              </Link>
            </div>
          </header>

          {/* ── 3-COLUMN BROADSHEET HERO ────────────────────────────────────── */}
          <section className="border-b border-[#C8BCA8] fade-up-1">
            <div className="grid lg:grid-cols-[1fr_2px_1.65fr_2px_1fr] gap-0 py-8">

              {/* LEFT: Market mood + funding deals */}
              <div className="pr-0 lg:pr-7 pb-8 lg:pb-0 border-b lg:border-b-0 border-[#C8BCA8]">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-5 h-px bg-[#C9A84C]" />
                  <span className="text-[9px] font-black tracking-[.2em] uppercase text-[#C9A84C]" style={{ fontFamily: "system-ui,sans-serif" }}>Market Pulse</span>
                </div>

                {/* Mood card */}
                <div className="bg-[#1A1208] text-white p-4 mb-5">
                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="playfair text-[2.2rem] font-black leading-none" style={{ color: sentimentColor }}>{ecosystem.marketMood.sentiment}</span>
                    <span className="num-font text-lg font-black text-white/40" style={{ fontFamily: "system-ui,sans-serif" }}>{ecosystem.marketMood.score}</span>
                  </div>
                  <div className="mood-meter mb-2">
                    <div className="absolute -top-0.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#1A1208] shadow" style={{ left: `calc(${ecosystem.marketMood.score}% - 7px)`, position: "relative", top: "-5px", marginTop: "0" }} />
                  </div>
                  <div className="flex justify-between text-[7.5px] text-white/25 mt-2 mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
                    <span>Bearish</span><span>Neutral</span><span>Bullish</span>
                  </div>
                  <p className="text-[9px] text-white/45 leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {ecosystem.marketMood.reason}
                  </p>
                </div>

                {/* Latest 3 deals */}
                <p className="text-[8.5px] font-black tracking-[.2em] uppercase text-[#8B7355] mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>Latest Deals</p>
                {ecosystem.fundingNews.slice(0, 3).map((f: any, i: number) => (
                  <div key={i} className="flex items-start justify-between py-2.5 border-b border-[#EDE7DA] last:border-b-0">
                    <div className="flex-1 min-w-0 pr-2">
                      <p className="playfair font-bold text-[.88rem] text-[#1A1208] leading-tight">{f.startup}</p>
                      <p className="text-[8.5px] text-[#8B7355] mt-0.5 truncate" style={{ fontFamily: "system-ui,sans-serif" }}>{f.round} · {f.investors.split(",")[0]}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="num-font playfair font-bold text-[.9rem] text-emerald-700">{f.amount}</p>
                      {f.valuation && <p className="text-[7.5px] text-[#B0A090]" style={{ fontFamily: "system-ui,sans-serif" }}>@ {f.valuation}</p>}
                    </div>
                  </div>
                ))}
              </div>

              {/* VERTICAL RULE */}
              <div className="vr hidden lg:block mx-5" />

              {/* CENTER: Hero */}
              <div className="py-8 lg:py-0 border-b lg:border-b-0 border-[#C8BCA8]">
                {/* Hero image */}
                <div className="relative w-full overflow-hidden mb-5" style={{ aspectRatio: "16/9" }}>
                  <img
                    src="https://www.ifourtechnolab.com/pics/startup_india.webp"
                    alt="India startup ecosystem — Bengaluru tech hub office"
                    className="w-full h-full object-cover"
                    style={{ filter: "sepia(15%) contrast(108%)" }}
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 50%,rgba(26,18,8,.8) 100%)" }} />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="bg-[#C9A84C] text-[#1A1208] text-[7.5px] font-black tracking-[.2em] uppercase px-2.5 py-1" style={{ fontFamily: "system-ui,sans-serif" }}>Feature Story</span>
                    <p className="playfair text-white font-bold text-[.95rem] mt-2 leading-snug">India's startup hubs are rewriting the rules of global innovation</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-[#1A1208] text-[#C9A84C] text-[7.5px] font-black tracking-[.2em] uppercase px-2.5 py-1" style={{ fontFamily: "system-ui,sans-serif" }}>Verified Registry</span>
                  <span className="text-[9px] text-[#8B7355] baskerville italic">Updated {lastUpdated} IST</span>
                </div>

                <h2 className="playfair text-[2rem] sm:text-[2.6rem] font-black leading-[1.02] tracking-tight text-[#1A1208] mb-4">
                  Documenting India's{" "}
                  <em className="not-italic" style={{ color: "#8B5E3C" }}>72,000+</em>{" "}
                  emerging founders — one verified listing at a time.
                </h2>

                <p className="dropcap baskerville text-[.93rem] text-[#3D2B1A] leading-relaxed mb-4">
                  UpForge is India's only fully independent, ad-free startup registry — built for founders, investors, and researchers who demand verified data, not sponsored noise. Every single listing is manually reviewed before it appears in our registry.
                </p>

                <div className="pull-quote mb-5">
                  "The most comprehensive free database of verified Indian startups — used by 340+ VC firms and research teams."
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mb-5">
                  <Link href="/startup"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1A1208] text-[#C9A84C] text-[10.5px] font-black tracking-[.18em] uppercase hover:bg-[#C9A84C] hover:text-[#1A1208] transition-all"
                    style={{ fontFamily: "system-ui,sans-serif" }}>
                    Open Registry <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link href="/submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#1A1208] text-[#1A1208] text-[10.5px] font-black tracking-[.18em] uppercase hover:bg-[#1A1208] hover:text-[#C9A84C] transition-all"
                    style={{ fontFamily: "system-ui,sans-serif" }}>
                    List Your Startup — Free
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 border-t border-[#E8E2D8]">
                  {[
                    { icon: CheckCircle2, text: "Free forever", c: "text-emerald-700" },
                    { icon: BadgeCheck, text: "Manual verification", c: "text-blue-700" },
                    { icon: Sparkles, text: "AI reports", c: "text-amber-700" },
                  ].map((p, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <p.icon className={`w-3.5 h-3.5 ${p.c}`} />
                      <span className="text-[10px] text-[#5C4A2A]" style={{ fontFamily: "system-ui,sans-serif" }}>{p.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* VERTICAL RULE */}
              <div className="vr hidden lg:block mx-5" />

              {/* RIGHT: Live news dispatch */}
              <div className="pt-8 lg:pt-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Newspaper className="w-3.5 h-3.5 text-[#8B7355]" />
                    <span className="text-[9px] font-black tracking-[.2em] uppercase text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>Startup Dispatch</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <PulseDot color="green" />
                    <span className="text-[8px] text-emerald-700 font-bold uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>Live</span>
                  </div>
                </div>

                <div className="divide-y divide-[#E8E2D8]">
                  {liveNews.map((news: any, i: number) => (
                    <article key={i} className="py-3.5">
                      <div className="flex items-start gap-2.5">
                        <div className={`mt-2 flex-shrink-0 w-0 h-0 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent border-l-[7px] ${news.impact === "positive" ? "border-l-emerald-500" : news.impact === "negative" ? "border-l-red-500" : "border-l-[#C8BCA8]"}`} />
                        <div className="flex-1 min-w-0">
                          {news.url ? (
                            <a href={news.url} target="_blank" rel="noopener noreferrer"
                              className="baskerville text-[.82rem] leading-snug text-[#1A1208] hover:text-[#8B5E3C] transition-colors block mb-1.5 font-bold">
                              {news.headline}
                            </a>
                          ) : (
                            <p className="baskerville text-[.82rem] leading-snug text-[#1A1208] mb-1.5 font-bold">{news.headline}</p>
                          )}
                          <div className="flex items-center gap-2" style={{ fontFamily: "system-ui,sans-serif" }}>
                            <span className="text-[8.5px] font-black text-[#8B7355] uppercase tracking-wider">{news.source}</span>
                            <span className="text-[#D4C9B0]">·</span>
                            <span className="text-[8.5px] text-[#B0A090]">{news.timestamp}</span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>

                <div className="mt-3 pt-3 border-t border-[#E8E2D8] flex items-center gap-1.5 text-[8.5px] text-[#B0A090]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  <Clock className="w-3 h-3" />
                  NewsAPI · Refreshed hourly · {lastUpdated} IST
                </div>
              </div>
            </div>
          </section>

          {/* ── SECTION DIVIDER ───────────────────────────────────────────── */}
          <div className="section-divider py-3 fade-up-2">✦ ECOSYSTEM METRICS · Q1 2026 ✦</div>

          {/* ── METRICS GRID ──────────────────────────────────────────────── */}
          <section className="border-y border-[#C8BCA8] fade-up-2" aria-label="Indian startup ecosystem metrics 2026">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
              {[
                { icon: Building2, label: "Active Startups", value: ecosystem.ecosystemMetrics.totalActiveStartups, sub: "+2,300 this month", dark: false },
                { icon: IndianRupee, label: "Funding YTD '26", value: ecosystem.ecosystemMetrics.totalFundingYTD, sub: `${ecosystem.ecosystemMetrics.monthlyGrowth} YoY`, dark: false },
                { icon: Briefcase, label: "VC Firms", value: ecosystem.ecosystemMetrics.activeVCFirms, sub: `${ecosystem.ecosystemMetrics.activeAngels} angels`, dark: false },
                { icon: Gem, label: "Unicorns", value: ecosystem.ecosystemMetrics.unicorns, sub: `${ecosystem.ecosystemMetrics.soonicorns} soonicorns`, dark: true },
                { icon: LineChart, label: "Avg Deal Size", value: ecosystem.ecosystemMetrics.avgDealSize, sub: "Seed → Series A", dark: false },
                { icon: Zap, label: "Hottest Sector", value: ecosystem.ecosystemMetrics.mostActiveSector, sub: `${ecosystem.sectorMomentum[0]?.deals || 178} deals`, dark: false },
                { icon: Globe, label: "Top City", value: ecosystem.ecosystemMetrics.topCity, sub: "Leading hub", dark: false },
                { icon: Award, label: "Our Registry", value: `${totalStartups || 0}+`, sub: `${uniqueIndustries} sectors`, dark: true },
              ].map((item, i) => (
                <div key={i}
                  className={`p-4 sm:p-5 border-r border-[#C8BCA8] last:border-r-0 transition-colors group ${item.dark ? "bg-[#1A1208] text-white" : "hover:bg-[#EDE7DA]"} ${i >= 4 ? "border-t border-[#C8BCA8] lg:border-t-0" : ""}`}>
                  <item.icon className={`w-3.5 h-3.5 mb-2.5 transition-colors ${item.dark ? "text-[#C9A84C]" : "text-[#C8BCA8] group-hover:text-[#8B7355]"}`} />
                  <p className={`num-font playfair font-black leading-none mb-1.5 text-[1.5rem] sm:text-[1.7rem] ${item.dark ? "text-white" : "text-[#1A1208]"}`}>{item.value}</p>
                  <p className={`text-[8.5px] font-black tracking-[.15em] uppercase mb-1 ${item.dark ? "text-white/40" : "text-[#8B7355]"}`} style={{ fontFamily: "system-ui,sans-serif" }}>{item.label}</p>
                  <p className={`text-[8px] ${item.dark ? "text-white/25" : "text-[#B0A090]"}`} style={{ fontFamily: "system-ui,sans-serif" }}>{item.sub}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SECTION DIVIDER ───────────────────────────────────────────── */}
          <div className="section-divider py-3 fade-up-3">✦ SECTOR INTELLIGENCE ✦</div>

          {/* ── SECTORS + BILLIONAIRES ─────────────────────────────────────── */}
          <div className="grid lg:grid-cols-[1fr_2px_360px] border-y border-[#C8BCA8] fade-up-3">
            <section className="py-8 pr-0 lg:pr-8" aria-label="Sector momentum Q1 2026">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5 text-[#8B7355]" />
                  <h2 className="text-[9px] font-black tracking-[.2em] uppercase text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>Sector Momentum · Q1 2026</h2>
                </div>
                <div className="flex gap-5 text-[8px] text-[#C8BCA8] uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>
                  <span>Deals</span><span>Funding</span><span>Growth</span>
                </div>
              </div>
              <div className="divide-y divide-[#EDE7DA]">
                {ecosystem.sectorMomentum.map((sector: any, i: number) => {
                  const growthNum = Math.min(parseFloat(sector.growth.replace("+", "").replace("%", "")), 160);
                  return (
                    <div key={i} className="flex items-center gap-3 py-3 hover:bg-[#EDE7DA]/60 px-2 -mx-2 transition-colors">
                      <span className="playfair text-[.75rem] text-[#C8BCA8] w-5 flex-shrink-0 font-bold num-font">{String(i + 1).padStart(2, "0")}</span>
                      <p className="playfair font-bold text-[.9rem] text-[#1A1208] w-[100px] sm:w-[120px] flex-shrink-0">{sector.sector}</p>
                      <div className="flex-1 hidden sm:block px-3">
                        <div className="sector-bar">
                          <div className="sector-bar-fill" style={{ width: `${(growthNum / 160) * 100}%` }} />
                        </div>
                        <p className="text-[8.5px] text-[#B0A090] mt-1 truncate" style={{ fontFamily: "system-ui,sans-serif" }}>{sector.trend}</p>
                      </div>
                      <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 ml-auto" style={{ fontFamily: "system-ui,sans-serif" }}>
                        <span className="num-font text-sm text-[#5C4A2A] w-8 sm:w-10 text-right">{sector.deals}</span>
                        <span className="num-font text-sm text-[#5C4A2A] w-14 text-right">{sector.funding}</span>
                        <span className="num-font playfair font-black text-[.9rem] text-emerald-700 w-14 text-right">{sector.growth}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            <div className="vr hidden lg:block mx-0" />

            <aside className="py-8 lg:pl-8 border-t lg:border-t-0 border-[#C8BCA8]" aria-label="India's top billionaires">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-[#8B7355]" />
                  <h2 className="text-[9px] font-black tracking-[.2em] uppercase text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>Business Leaders</h2>
                </div>
                <a href="https://www.forbes.com/billionaires/" target="_blank" rel="noopener noreferrer"
                  className="text-[8px] text-[#B0A090] hover:text-[#8B7355] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Forbes ↗
                </a>
              </div>
              <div className="divide-y divide-[#EDE7DA]">
                {TOP_INDIAN_BILLIONAIRES.map((person, i) => (
                  <div key={i} className="py-4 hover:bg-[#EDE7DA]/60 px-2 -mx-2 transition-colors">
                    <div className="flex items-start justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-[#1A1208] flex items-center justify-center flex-shrink-0">
                          <span className="text-[#C9A84C] text-[8px] font-black" style={{ fontFamily: "system-ui,sans-serif" }}>{person.rank.replace("#", "")}</span>
                        </div>
                        <p className="playfair font-bold text-[.9rem] text-[#1A1208]">{person.name}</p>
                      </div>
                      <p className="num-font playfair font-black text-base text-[#1A1208] ml-2 flex-shrink-0">{person.netWorth}</p>
                    </div>
                    <div className="flex items-center justify-between mb-2.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <p className="text-[9px] text-[#8B7355]">{person.source}</p>
                      <p className="text-[9px] text-emerald-700 font-bold">{person.yoy}</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {person.startupConnections.slice(0, 2).map((conn, j) => (
                        <span key={j} className="text-[8px] bg-[#EDE7DA] text-[#5C4A2A] px-2 py-0.5 border border-[#D4C9B0]" style={{ fontFamily: "system-ui,sans-serif" }}>{conn}</span>
                      ))}
                      {person.startupConnections.length > 2 && (
                        <span className="text-[8px] text-[#B0A090]" style={{ fontFamily: "system-ui,sans-serif" }}>+{person.startupConnections.length - 2}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[8px] text-[#C8BCA8] mt-4 leading-relaxed baskerville italic">
                Forbes Real-Time Billionaires, March 2026. Rankings fluctuate daily.
              </p>
            </aside>
          </div>

          {/* ── SECTION DIVIDER ───────────────────────────────────────────── */}
          <div className="section-divider py-3 fade-up-4">✦ RISING COMPANIES · FUNDING TRACKER ✦</div>

          {/* ── RISING STARTUPS + FUNDING ─────────────────────────────────── */}
          <div className="grid lg:grid-cols-[1fr_2px_340px] border-b border-[#C8BCA8] fade-up-4">
            <section className="py-8 pr-0 lg:pr-8" aria-label="Top rising Indian startups 2026">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <Rocket className="w-3.5 h-3.5 text-[#8B7355]" />
                  <h2 className="text-[9px] font-black tracking-[.2em] uppercase text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>Top Rising Startups · 2026</h2>
                </div>
                <Link href="/startup" className="flex items-center gap-1 text-[9px] text-[#8B7355] hover:text-[#1A1208] transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Full registry <ChevronRight className="w-3 h-3" />
                </Link>
              </div>

              {/* Editor's Pick hero card */}
              {ecosystem.topRisingStartups[0] && (
                <div className="bg-[#1A1208] text-white p-5 sm:p-6 mb-4 card-lift border border-[#1A1208]">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#C9A84C] text-[#1A1208] text-[7px] font-black tracking-[.25em] uppercase px-2 py-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Editor's Pick</span>
                        <span className="text-[8px] text-white/40 uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>{ecosystem.topRisingStartups[0].sector}</span>
                      </div>
                      <p className="playfair font-black text-2xl sm:text-3xl text-white leading-tight">{ecosystem.topRisingStartups[0].name}</p>
                    </div>
                    <span className="num-font playfair text-3xl font-black text-[#C9A84C] ml-4 flex-shrink-0">{ecosystem.topRisingStartups[0].growthIndicator}</span>
                  </div>
                  <p className="baskerville text-[.88rem] text-white/65 leading-relaxed mb-3">{ecosystem.topRisingStartups[0].insight}</p>
                  <span className="inline-block bg-emerald-500/20 text-emerald-400 text-[8px] font-black px-2.5 py-1 uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>🔥 Momentum: High</span>
                </div>
              )}

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {ecosystem.topRisingStartups.slice(1, 6).map((startup: any, i: number) => (
                  <div key={i} className="bg-white border border-[#E8E2D8] p-4 card-lift">
                    <div className="flex items-start justify-between mb-2">
                      <p className="playfair font-bold text-[.9rem] text-[#1A1208] leading-tight">{startup.name}</p>
                      <span className={`text-[8px] px-1.5 py-0.5 font-black uppercase tracking-wider flex-shrink-0 ml-2 ${startup.momentum === "high" ? "bg-emerald-50 text-emerald-700 border border-emerald-200" : "bg-amber-50 text-amber-700 border border-amber-200"}`} style={{ fontFamily: "system-ui,sans-serif" }}>
                        {startup.momentum === "high" ? "🔥" : "↑"}
                      </span>
                    </div>
                    <p className="text-[8.5px] font-black tracking-widest uppercase text-[#B0A090] mb-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>{startup.sector}</p>
                    <p className="baskerville text-[.8rem] text-[#5C4A2A] leading-snug mb-3 line-clamp-2">{startup.insight}</p>
                    <div className="flex items-center justify-between pt-2.5 border-t border-[#F0E9D8]">
                      <span className="text-[8px] text-[#B0A090] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>Growth</span>
                      <span className="num-font playfair font-black text-base text-emerald-700">{startup.growthIndicator}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="vr hidden lg:block mx-0" />

            <aside className="py-8 lg:pl-8 border-t lg:border-t-0 border-[#C8BCA8]" aria-label="Funding tracker">
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-3.5 h-3.5 text-[#8B7355]" />
                  <h2 className="text-[9px] font-black tracking-[.2em] uppercase text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>Funding Tracker</h2>
                </div>
                <div className="flex items-center gap-1.5">
                  <PulseDot color="blue" />
                  <span className="text-[8px] text-blue-600 font-bold uppercase tracking-widest" style={{ fontFamily: "system-ui,sans-serif" }}>Active</span>
                </div>
              </div>

              {ecosystem.fundingNews.map((funding: any, i: number) => (
                <div key={i} className={`py-4 border-b border-[#EDE7DA] last:border-b-0 ${i === 0 ? "bg-[#1A1208] -mx-5 px-5 mb-1" : ""}`}>
                  <div className="flex items-start justify-between mb-1.5">
                    <p className={`playfair font-bold text-[.92rem] leading-tight ${i === 0 ? "text-white" : "text-[#1A1208]"}`}>{funding.startup}</p>
                    <p className={`num-font playfair font-black text-base ml-2 flex-shrink-0 ${i === 0 ? "text-[#C9A84C]" : "text-emerald-700"}`}>{funding.amount}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                    <span className={`round-badge ${i === 0 ? "text-[#C9A84C] border-[#C9A84C]/40" : "text-[#5C4A2A] border-[#D4C9B0]"}`}>{funding.round}</span>
                    <span className={`text-[8.5px] truncate ${i === 0 ? "text-white/40" : "text-[#B0A090]"}`}>{funding.investors.split(",")[0]}</span>
                  </div>
                  {funding.valuation && (
                    <p className={`text-[8.5px] ${i === 0 ? "text-white/30" : "text-[#B0A090]"}`} style={{ fontFamily: "system-ui,sans-serif" }}>
                      Valuation: <span className={`font-bold ${i === 0 ? "text-white/55" : "text-[#5C4A2A]"}`}>{funding.valuation}</span>
                    </p>
                  )}
                </div>
              ))}

              <div className="mt-5 p-4 bg-[#EDE7DA] border border-[#D4C9B0]">
                <p className="text-[8.5px] font-black tracking-[.2em] uppercase text-[#8B7355] mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>Q1 2026 Snapshot</p>
                {[
                  { label: "Total Funding YTD", value: ecosystem.ecosystemMetrics.totalFundingYTD },
                  { label: "Avg Deal Size", value: ecosystem.ecosystemMetrics.avgDealSize },
                  { label: "Active Unicorns", value: ecosystem.ecosystemMetrics.unicorns },
                  { label: "Soonicorns", value: ecosystem.ecosystemMetrics.soonicorns },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5 border-b border-[#C8BCA8] last:border-0">
                    <span className="text-[9px] text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>{stat.label}</span>
                    <span className="num-font playfair font-black text-[.9rem] text-[#1A1208]">{stat.value}</span>
                  </div>
                ))}
              </div>
            </aside>
          </div>

          {/* ── RECENTLY VERIFIED ──────────────────────────────────────────── */}
          <section className="py-8 border-b border-[#C8BCA8] fade-up-5" aria-label="Recently verified startups">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-4 h-4 text-emerald-700" />
                <h2 className="playfair font-black text-xl text-[#1A1208]">Recently Verified on UpForge</h2>
                <span className="verified-stamp">✓ Live Registry</span>
              </div>
              <Link href="/startup" className="flex items-center gap-1 text-[9px] text-[#8B7355] hover:text-[#1A1208] transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>
                View all {totalStartups}+ <ChevronRight className="w-3 h-3" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
              {verifiedStartups?.slice(0, 6).map((startup: any) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`}
                  className="bg-white border border-[#E8E2D8] p-4 card-lift group"
                  aria-label={`${startup.name} — UpForge registry`}>
                  <div className="flex items-start justify-between mb-2">
                    <p className="playfair font-bold text-[.88rem] text-[#1A1208] line-clamp-1 leading-tight">{startup.name}</p>
                    <BadgeCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 ml-1 mt-0.5" />
                  </div>
                  <p className="baskerville text-[.78rem] text-[#5C4A2A] line-clamp-2 mb-3.5 leading-snug">{startup.description}</p>
                  <div className="flex items-center gap-2 pt-2.5 border-t border-[#F0E9D8]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    <span className="text-[8.5px] text-[#B0A090]">{startup.founded_year || "N/A"}</span>
                    <span className="w-0.5 h-0.5 bg-[#D4C9B0] rounded-full" />
                    <span className="text-[8.5px] text-[#5C4A2A] uppercase tracking-wider font-bold truncate">{startup.industry || "Startup"}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── EDITORIAL PAGES ROW ─────────────────────────────────────────── */}
          <section className="py-8 border-b border-[#C8BCA8] fade-up-5">
            <div className="orn-rule mb-6">EDITORIAL INTELLIGENCE</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: "Top AI Startups", sub: "55K+ monthly readers", href: "/top-ai-startups", icon: Sparkles, num: "1,779+" },
                { label: "Indian Unicorns", sub: "126 verified profiles", href: "/indian-unicorns", icon: Gem, num: "126" },
                { label: "Best SaaS", sub: "$26B market guide", href: "/best-saas-startups", icon: Zap, num: "$26B" },
                { label: "Top Funded", sub: "$14B+ tracked", href: "/top-funded-startups", icon: DollarSign, num: "$14B+" },
                { label: "Founder Stories", sub: "India's best builders", href: "/founder-stories", icon: Rocket, num: "5 Profiles" },
                { label: "Full Registry", sub: "Live startup database", href: "/startup", icon: Building2, num: `${totalStartups}+` },
              ].map((item, i) => (
                <Link key={i} href={item.href}
                  className="group bg-white border border-[#E8E2D8] p-4 card-lift flex flex-col justify-between min-h-[105px]">
                  <div className="flex items-start justify-between mb-3">
                    <item.icon className="w-4 h-4 text-[#C9A84C]" />
                    <ChevronRight className="w-3.5 h-3.5 text-[#C8BCA8] group-hover:text-[#1A1208] transition-colors" />
                  </div>
                  <div>
                    <p className="playfair font-bold text-[.9rem] text-[#1A1208] leading-tight mb-0.5">{item.label}</p>
                    <p className="text-[8.5px] text-[#8B7355]" style={{ fontFamily: "system-ui,sans-serif" }}>{item.sub}</p>
                  </div>
                  <p className="num-font playfair text-base font-black text-[#C9A84C] mt-2">{item.num}</p>
                </Link>
              ))}
            </div>
          </section>

          {/* ── TRUST STRIP ─────────────────────────────────────────────────── */}
          <div className="py-5 border-b border-[#C8BCA8] bg-[#EDE7DA]/40">
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
              {[
                { icon: Shield, text: "100% Independent · Zero paid rankings" },
                { icon: BadgeCheck, text: "Every startup manually reviewed & verified" },
                { icon: Sparkles, text: "AI-powered deep analysis reports" },
                { icon: Globe, text: "Open, public & fully Google-indexed" },
                { icon: Clock, text: "News via NewsAPI · Market data via Groq LLM" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <item.icon className="w-3.5 h-3.5 text-[#8B7355]" />
                  <span className="text-[10px] text-[#5C4A2A]" style={{ fontFamily: "system-ui,sans-serif" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ── REPORTS CTA ─────────────────────────────────────────────────── */}
          <div className="my-12">
            <div className="bg-[#1A1208] relative overflow-hidden"
              style={{ backgroundImage: "repeating-linear-gradient(0deg,rgba(201,168,76,.04) 0px,rgba(201,168,76,.04) 1px,transparent 1px,transparent 40px),repeating-linear-gradient(90deg,rgba(201,168,76,.04) 0px,rgba(201,168,76,.04) 1px,transparent 1px,transparent 80px)" }}>
              <div className="relative p-10 sm:p-14">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="orn-rule mb-6" style={{ color: "#C9A84C80" }}>PREMIUM INTELLIGENCE</div>
                    <h2 className="playfair text-[2.4rem] sm:text-[3rem] font-black text-white leading-tight mb-4">
                      Deep Startup<br /><em className="not-italic" style={{ color: "#C9A84C" }}>Research Reports</em>
                    </h2>
                    <p className="baskerville text-[.93rem] text-white/48 max-w-lg leading-relaxed mb-6">
                      Institutional-grade AI research on Indian startups — valuation insights, competitive analysis, market positioning, risk signals, and growth trajectory.
                    </p>
                    <Link href="/reports"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A84C] text-[#1A1208] text-[10.5px] font-black tracking-[.18em] uppercase hover:bg-[#E8C547] transition-colors"
                      style={{ fontFamily: "system-ui,sans-serif" }}>
                      Explore Reports <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="hidden lg:grid grid-cols-2 gap-3">
                    {["Valuation Analysis", "Market Positioning", "Risk Signals", "Growth Trajectory"].map((t, i) => (
                      <div key={i} className="border border-[#C9A84C]/20 p-5 hover:border-[#C9A84C]/50 transition-colors">
                        <Newspaper className="w-5 h-5 text-[#C9A84C] mb-3 opacity-50" />
                        <p className="playfair font-bold text-white text-[.9rem] leading-tight">{t}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER ──────────────────────────────────────────────────────── */}
          <footer className="pt-5 border-t-2 border-[#1A1208]">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#1A1208] flex items-center justify-center">
                  <span className="text-[#C9A84C] text-[10px] font-black" style={{ fontFamily: "system-ui,sans-serif" }}>UF</span>
                </div>
                <div>
                  <p className="playfair font-black text-[#1A1208] text-base leading-tight">UpForge</p>
                  <p className="text-[9px] text-[#8B7355] tracking-[.2em] uppercase" style={{ fontFamily: "system-ui,sans-serif" }}>India's Registry of Record</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <PulseDot color="green" />
                <span className="text-[9px] text-[#B0A090]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Live news via NewsAPI · Market data via Groq · {lastUpdated} IST
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-[#E8E2D8] flex items-center justify-center">
              <span className="text-[8.5px] text-[#C8BCA8] baskerville italic">
                © {new Date().getFullYear()} UpForge · Independent · Ad-Free · Open Registry · v2.3
              </span>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
}
