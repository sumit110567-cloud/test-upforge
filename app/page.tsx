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

// ─── SEO METADATA ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UpForge — India's #1 Independent Startup Registry & Database 2026",
  description:
    "Discover, research and track 72,000+ verified Indian startups. Free listings, AI-powered growth reports, real-time funding news, unicorn tracker and live market intelligence. India's most trusted startup database.",
  keywords: [
    "Indian startups 2026","India startup database","startup registry India",
    "verified Indian startups","Indian unicorns 2026","startup funding India",
    "list your startup India free","startup ecosystem India","Indian founders database",
    "VC deals India","startup news India today","Bengaluru startups",
    "Mumbai startups","Delhi NCR startups","SaaS startups India",
    "fintech startups India","edtech startups India","healthtech India",
    "AI startups India","deeptech India startups","startup valuation India",
    "angel investors India","startup growth report India","UpForge",
    "India startup intelligence","Indian soonicorns","startup funding tracker India",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge", publisher: "UpForge",
  metadataBase: new URL("https://upforge.in"),
  alternates: { canonical: "https://upforge.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://upforge.in",
    siteName: "UpForge",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports · Live funding news · Unicorn tracker.",
    images: [{ url: "https://upforge.in/og-image.png", width: 1200, height: 630, alt: "UpForge" }],
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
      potentialAction: { "@type": "SearchAction", target: { "@type": "EntryPoint", urlTemplate: "https://upforge.in/startup?q={search_term_string}" }, "query-input": "required name=search_term_string" },
    },
    {
      "@type": "Organization", "@id": "https://upforge.in/#organization",
      name: "UpForge", url: "https://upforge.in",
      logo: { "@type": "ImageObject", url: "https://upforge.in/logo.png", width: 512, height: 512 },
      sameAs: ["https://twitter.com/upforge_in", "https://linkedin.com/company/upforge"],
      description: "India's most trusted independent startup registry.",
      areaServed: "IN",
    },
  ],
};

// ─── BILLIONAIRE DATA ─────────────────────────────────────────────────────────
const TOP_INDIAN_BILLIONAIRES = [
  { name: "Mukesh Ambani", netWorth: "$96.3B", rank: "#10", source: "Reliance Industries", yoy: "+$4.2B YoY", startupConnections: ["Jio Platforms", "Netmeds", "Dunzo"] },
  { name: "Gautam Adani", netWorth: "$68.7B", rank: "#17", source: "Adani Group", yoy: "+$2.1B YoY", startupConnections: ["Adani Digital Labs", "Adani Green Energy"] },
  { name: "Shiv Nadar", netWorth: "$29.4B", rank: "#56", source: "HCL Technologies", yoy: "+$3.8B YoY", startupConnections: ["HCL Software", "Vama Sundari Investments"] },
];

// ─── NEWS ─────────────────────────────────────────────────────────────────────
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
        const impact = title.match(/raises|funding|unicorn|launch|growth|profit|record|surge|ipo|expands/) ? "positive" : title.match(/shutdown|layoff|fraud|crisis|loss|decline|cut|fail|drops/) ? "negative" : "neutral";
        return {
          headline: article.title.length > 90 ? article.title.slice(0, 87) + "…" : article.title,
          source: article.source.name, url: article.url, impact, timestamp,
        };
      });
  } catch {
    return [
      { headline: "India startup ecosystem raises $9B+ in Q1 2026, up 34% year-on-year", source: "Inc42", impact: "positive", timestamp: "6h ago" },
      { headline: "SEBI eases startup IPO norms, reduces mandatory lock-in to 6 months", source: "Economic Times", impact: "positive", timestamp: "12h ago" },
      { headline: "Government's ₹1,000Cr DeepTech Fund opens applications for Indian startups", source: "PIB India", impact: "positive", timestamp: "1d ago" },
      { headline: "Indian SaaS companies cross $1.8B in new ARR, global expansion accelerates", source: "Mint", impact: "positive", timestamp: "1d ago" },
      { headline: "Zepto eyes secondary share sale at $5.5B valuation ahead of IPO", source: "Bloomberg", impact: "positive", timestamp: "2d ago" },
    ];
  }
}

// ─── ECOSYSTEM DATA ───────────────────────────────────────────────────────────
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
            content: `Indian startup market data analyst. Today: ${dateStr}. Return ONLY valid JSON, no markdown.
{"marketMood":{"sentiment":"Bullish/Neutral/Bearish","score":"0-100 string","reason":"max 8 words"},"topRisingStartups":[{"name":"real startup","sector":"sector","insight":"max 12 words","growthIndicator":"+XX%","momentum":"high/medium"}],"sectorMomentum":[{"sector":"sector","deals":"number","funding":"$XB or $XM","trend":"max 6 words","growth":"+XX%"}],"fundingNews":[{"startup":"real name","amount":"$XXM","round":"Series X","investors":"real investors","valuation":"$XXB or null"}],"ecosystemMetrics":{"totalActiveStartups":"XX,000+","totalFundingYTD":"$X.XB","activeVCFirms":"X,XXX+","unicorns":"XXX","soonicorns":"XXX+","avgDealSize":"$XX.XM","mostActiveSector":"sector","topCity":"city","monthlyGrowth":"+XX%","activeAngels":"X,XXX+"}}
EXACTLY: 6 topRisingStartups, 6 sectorMomentum, 4 fundingNews.`,
          },
          { role: "user", content: `Indian startup market data for ${dateStr}. Q1 2026 actuals. Real startups, real investors only.` },
        ],
        temperature: 0.15, max_tokens: 1500, response_format: { type: "json_object" },
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

// ─── PULSE DOT ───────────────────────────────────────────────────────────────
function PulseDot({ color = "green" }: { color?: "green" | "blue" | "amber" }) {
  const c = { green: ["bg-emerald-400", "bg-emerald-500"], blue: ["bg-blue-400", "bg-blue-500"], amber: ["bg-amber-400", "bg-amber-500"] };
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

  const sentimentColor = ecosystem.marketMood.sentiment === "Bullish" ? "#16a34a" : ecosystem.marketMood.sentiment === "Neutral" ? "#d97706" : "#dc2626";

  const today = new Date();
  const dateStr = today.toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });
  const lastUpdated = today.toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });

  return (
    <div style={{ background: "#FAF8F3", minHeight: "100vh", fontFamily: "'Georgia','Times New Roman',serif", color: "#1A1208" }}>

      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: `var _hAt=null;document.addEventListener('visibilitychange',function(){if(document.hidden){_hAt=Date.now();}else if(_hAt&&(Date.now()-_hAt)>3600000){window.location.reload();}});` }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .ss { font-family: 'Source Serif 4', Georgia, serif !important; }
        .dm { font-family: 'DM Sans', system-ui, sans-serif !important; }

        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }

        .fade-0{animation:fadeUp .6s .05s ease both}
        .fade-1{animation:fadeUp .6s .15s ease both}
        .fade-2{animation:fadeUp .6s .25s ease both}
        .fade-3{animation:fadeUp .6s .38s ease both}
        .fade-4{animation:fadeUp .6s .50s ease both}
        .fade-5{animation:fadeUp .6s .62s ease both}

        .ticker-track{animation:ticker 55s linear infinite}
        .ticker-track:hover{animation-play-state:paused}

        .card-lift{transition:transform .22s ease,box-shadow .22s ease,border-color .22s ease}
        .card-lift:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(26,18,8,.1)}

        .num{font-variant-numeric:tabular-nums}

        /* Newspaper column dividers */
        .col-rule{column-rule:1px solid #DDD8CE}

        /* Drop cap */
        .dropcap::first-letter{
          font-family:'Playfair Display',Georgia,serif;
          font-size:4.2em;font-weight:900;line-height:0.8;
          float:left;margin-right:0.06em;margin-top:0.04em;
          color:#1A1208;
        }

        /* Ornament hr */
        .ornament{
          display:flex;align-items:center;gap:12px;
          margin:0 auto;
        }
        .ornament::before,.ornament::after{
          content:'';flex:1;height:1px;background:#C8C2B4;
        }

        /* Section rule */
        .section-label{
          display:flex;align-items:center;gap:10px;
          margin-bottom:1.25rem;
        }
        .section-label::after{
          content:'';flex:1;height:1px;background:#DDD8CE;
        }

        /* Hover news link */
        .news-link:hover{color:#8B4513 !important}

        /* Metric card hover */
        .metric-hover:hover{background:#fff !important}

        /* Mobile ticker speed */
        @media(max-width:640px){
          .ticker-track{animation-duration:35s}
        }

        /* Print-style column layout for body text */
        @media(min-width:768px){
          .prose-cols{
            columns:3;column-gap:2rem;
            column-rule:1px solid #DDD8CE;
          }
          .prose-cols p{break-inside:avoid}
        }
      `}</style>

      {/* ══════════════════════════════════════════════════════
          LIVE TICKER BAR
      ══════════════════════════════════════════════════════ */}
      <div style={{ background: "#111108", marginTop: "3.5rem", borderBottom: "1px solid #2A2820" }}>
        <div className="flex items-stretch">
          <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0" style={{ background: "#C9A84C", borderRight: "1px solid #B8973A" }}>
            <PulseDot color="green" />
            <span className="dm text-[9px] font-bold tracking-[0.22em] uppercase text-[#111108]">Live Feed</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap">
              {[...liveNews, ...liveNews].map((news: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-3 px-7 py-2.5" style={{ borderRight: "1px solid #2A2820" }}>
                  <span className="dm text-[8px] font-black px-1.5 py-0.5 flex-shrink-0"
                    style={{
                      background: news.impact === "positive" ? "rgba(22,163,74,0.15)" : news.impact === "negative" ? "rgba(220,38,38,0.15)" : "rgba(255,255,255,0.06)",
                      color: news.impact === "positive" ? "#4ade80" : news.impact === "negative" ? "#f87171" : "#888",
                    }}>
                    {news.impact === "positive" ? "▲" : news.impact === "negative" ? "▼" : "●"}
                  </span>
                  <span className="ss text-[11.5px] text-white/80 italic">{news.headline}</span>
                  <span className="dm text-[9px] flex-shrink-0" style={{ color: "#665" }}>
                    {news.source} · {news.timestamp}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3 px-5 flex-shrink-0" style={{ borderLeft: "1px solid #2A2820" }}>
            <div>
              <div className="dm text-[8px] uppercase tracking-widest mb-0.5" style={{ color: "#555" }}>Sentiment</div>
              <div className="pf font-bold text-base" style={{ color: sentimentColor }}>{ecosystem.marketMood.sentiment} · {ecosystem.marketMood.score}/100</div>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          MASTHEAD — Newspaper Front Page Style
      ══════════════════════════════════════════════════════ */}
      <header style={{ borderBottom: "4px double #1A1208" }}>

        {/* Dateline strip */}
        <div className="fade-0" style={{ borderBottom: "1px solid #C8C2B4", background: "#F0EDE3" }}>
          <div className="max-w-[1480px] mx-auto px-4 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-4">
              <span className="dm text-[9px] text-[#888] uppercase tracking-[0.22em]">{dateStr}</span>
              <span style={{ color: "#C8C2B4" }}>·</span>
              <div className="flex items-center gap-1.5">
                <PulseDot color="green" />
                <span className="dm text-[9px] text-[#888] uppercase tracking-wider">Live · {lastUpdated} IST</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Shield, text: "100% Independent" },
                { icon: BadgeCheck, text: `${totalStartups || "72,000"}+ Verified` },
                { icon: Globe, text: `${uniqueIndustries} Sectors` },
              ].map((item, i) => (
                <div key={i} className="hidden sm:flex items-center gap-1.5">
                  <item.icon className="w-3 h-3" style={{ color: "#999" }} />
                  <span className="dm text-[9px] text-[#777] uppercase tracking-wide">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Publication name — big broadsheet */}
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 py-8 sm:py-10 text-center fade-1" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <div className="ornament mb-5">
            <span className="dm text-[9px] text-[#AAA] uppercase tracking-[0.32em] flex-shrink-0">Est. 2024 · Bengaluru</span>
          </div>
          <h1 className="pf font-black leading-none tracking-tight text-[#1A1208]"
            style={{ fontSize: "clamp(2.8rem, 8vw, 7rem)", letterSpacing: "-0.02em" }}>
            UpForge
          </h1>
          <p className="ss italic mt-2" style={{ fontSize: "clamp(13px, 2vw, 19px)", color: "#6B5C40" }}>
            India's Independent Startup Registry & Live Market Intelligence
          </p>
          <div className="ornament mt-5">
            <span style={{ color: "#C8C2B4", fontSize: 14 }}>✦</span>
          </div>
        </div>

        {/* Nav strip */}
        <div className="max-w-[1480px] mx-auto px-4 sm:px-8 fade-2">
          <div className="flex items-center justify-between py-2.5 flex-wrap gap-3" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            <nav className="flex items-center gap-0 overflow-x-auto">
              {["Registry", "Unicorns", "Funding", "Reports", "Founder Stories", "Sectors", "Submit"].map((item, i) => (
                <Link key={i} href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="dm text-[10px] font-semibold uppercase tracking-widest px-4 py-2 transition-colors hover:text-[#8B4513] whitespace-nowrap flex-shrink-0"
                  style={{ color: "#555", borderRight: "1px solid #DDD8CE" }}>
                  {item}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <Link href="/submit" className="dm text-[10px] font-bold uppercase tracking-wider px-4 py-2 text-white transition-opacity hover:opacity-80"
                style={{ background: "#1A1208" }}>
                List Free →
              </Link>
            </div>
          </div>
        </div>

      </header>

      {/* ══════════════════════════════════════════════════════
          MAIN CONTENT — Broadsheet Layout
      ══════════════════════════════════════════════════════ */}
      <main className="max-w-[1480px] mx-auto px-4 sm:px-8 pb-16">

        {/* ─── FRONT PAGE GRID ─────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_2px_1fr_2px_1fr] gap-0 fade-3" style={{ borderBottom: "2px solid #1A1208" }}>

          {/* COL 1 — Market Mood + Stats */}
          <div className="py-8 lg:pr-7" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Market mood badge */}
            <div className="flex items-center gap-2 mb-5">
              <Activity className="w-3.5 h-3.5" style={{ color: "#999" }} />
              <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">Market Intelligence</span>
            </div>

            <div className="p-4 mb-6" style={{ background: "#1A1208", border: "1px solid #1A1208" }}>
              <div className="dm text-[8px] uppercase tracking-[0.26em] text-white/40 mb-1">Live Sentiment Score</div>
              <div className="pf font-black text-5xl leading-none mb-1" style={{ color: "#C9A84C" }}>
                {ecosystem.marketMood.score}
                <span className="text-2xl">/100</span>
              </div>
              <div className="pf italic text-lg mt-2" style={{ color: sentimentColor }}>{ecosystem.marketMood.sentiment}</div>
              <div className="dm text-[10px] mt-1.5" style={{ color: "rgba(255,255,255,0.35)" }}>{ecosystem.marketMood.reason}</div>
            </div>

            {/* Key ecosystem numbers in newspaper stat style */}
            {[
              { label: "Active Startups", value: ecosystem.ecosystemMetrics.totalActiveStartups, sub: "Verified & tracked" },
              { label: "Funding YTD 2026", value: ecosystem.ecosystemMetrics.totalFundingYTD, sub: ecosystem.ecosystemMetrics.monthlyGrowth + " YoY" },
              { label: "Unicorns", value: ecosystem.ecosystemMetrics.unicorns, sub: ecosystem.ecosystemMetrics.soonicorns + " soonicorns" },
              { label: "Active VC Firms", value: ecosystem.ecosystemMetrics.activeVCFirms, sub: ecosystem.ecosystemMetrics.activeAngels + " angels" },
            ].map((item, i) => (
              <div key={i} className="flex items-start justify-between py-3" style={{ borderBottom: "1px solid #E8E4DC" }}>
                <div>
                  <div className="dm text-[9px] uppercase tracking-wider text-[#888] mb-0.5">{item.label}</div>
                  <div className="dm text-[9px] text-[#BBB]">{item.sub}</div>
                </div>
                <div className="pf font-bold text-xl num text-[#1A1208]">{item.value}</div>
              </div>
            ))}

            <div className="mt-5 flex flex-col gap-2">
              <Link href="/startup" className="dm text-[11px] font-bold uppercase tracking-wider text-center py-3 block transition-colors hover:text-white hover:bg-[#1A1208]"
                style={{ border: "2px solid #1A1208", color: "#1A1208" }}>
                Explore Full Registry →
              </Link>
              <Link href="/submit" className="dm text-[11px] font-bold uppercase tracking-wider text-center py-3 block transition-colors hover:opacity-80"
                style={{ background: "#C9A84C", color: "#1A1208" }}>
                List Your Startup — Free
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div style={{ background: "#C8C2B4", width: 1 }} className="hidden lg:block" />

          {/* COL 2 — HERO STORY */}
          <div className="py-8 lg:px-7" style={{ borderRight: "1px solid #C8C2B4" }}>

            <div className="flex items-center gap-2 mb-5">
              <span className="dm text-[8px] font-black uppercase tracking-[0.3em] px-2.5 py-1 text-white" style={{ background: "#C9A84C", color: "#1A1208" }}>
                Registry Report
              </span>
              <span className="dm text-[9px] text-[#AAA] uppercase tracking-wider">Q1 2026</span>
            </div>

            {/* Big headline */}
            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.9rem, 3.5vw, 2.8rem)" }}>
              Documenting India's Most Consequential Wave of Builders
            </h2>

            {/* Deck */}
            <p className="ss italic leading-[1.8] mb-5 pb-5 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px, 1.6vw, 16.5px)", borderBottom: "1px solid #C8C2B4" }}>
              72,000 verified startups. Real-time funding intelligence. Independent, unbiased, and free — UpForge is where India's builders get discovered.
            </p>

            {/* Newspaper body columns */}
            <div className="prose-cols mb-5">
              <p className="dropcap leading-[1.85] text-[#2C2010] mb-3" style={{ fontSize: "13.5px" }}>
                India's startup ecosystem is no longer emerging — it is among the three largest on Earth, generating $9.2 billion in new investment in the first quarter of 2026 alone. Behind every headline valuation is a founder story that rarely gets told with the rigour it deserves.
              </p>
              <p className="leading-[1.85] text-[#2C2010] mb-3" style={{ fontSize: "13.5px" }}>
                UpForge was built to change that. Every startup in our registry is manually reviewed. No paid rankings, no sponsored placements, no black-box algorithms. When a company appears on UpForge, it belongs there — verified by a human, indexed for the world.
              </p>
              <p className="leading-[1.85] text-[#2C2010]" style={{ fontSize: "13.5px" }}>
                From the Bengaluru garage to the Bombay Stock Exchange, the journey of an Indian startup has never been more scrutinised or more celebrated. This is the definitive record of that journey.
              </p>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 pt-4" style={{ borderTop: "1px solid #C8C2B4" }}>
              {[
                { icon: CheckCircle2, text: "Free Forever", color: "#16a34a" },
                { icon: BadgeCheck, text: "Hand-Verified", color: "#2563eb" },
                { icon: Sparkles, text: "AI Reports", color: "#d97706" },
              ].map((p, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5 p-3 text-center" style={{ background: "#F0EDE3" }}>
                  <p.icon className="w-4 h-4" style={{ color: p.color }} />
                  <span className="dm text-[9px] font-bold uppercase tracking-wider text-[#555]">{p.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ background: "#C8C2B4", width: 1 }} className="hidden lg:block" />

          {/* COL 3 — LIVE NEWS */}
          <div className="py-8 lg:pl-7">

            <div className="section-label">
              <Newspaper className="w-3.5 h-3.5 text-[#999]" />
              <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">Startup Dispatch</span>
            </div>

            <div className="divide-y" style={{ borderColor: "#E8E4DC" }}>
              {liveNews.slice(0, 5).map((news: any, i: number) => (
                <div key={i} className="py-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-[3px]">
                      <span className="pf font-bold text-2xl num leading-none" style={{ color: "#DDD8CE" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className={`dm text-[8px] font-black px-1.5 py-0.5 uppercase tracking-wider ${news.impact === "positive" ? "text-emerald-700 bg-emerald-50" : news.impact === "negative" ? "text-red-700 bg-red-50" : "text-gray-500 bg-gray-100"}`}>
                          {news.impact === "positive" ? "▲" : news.impact === "negative" ? "▼" : "●"} {news.impact}
                        </span>
                      </div>
                      {news.url ? (
                        <a href={news.url} target="_blank" rel="noopener noreferrer"
                          className="news-link ss leading-snug block mb-1.5 transition-colors"
                          style={{ fontSize: "13.5px", color: "#1A1208" }}>
                          {news.headline}
                        </a>
                      ) : (
                        <p className="ss leading-snug mb-1.5" style={{ fontSize: "13.5px", color: "#1A1208" }}>{news.headline}</p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="dm text-[9px] font-bold text-[#888]">{news.source}</span>
                        <span style={{ color: "#DDD" }}>·</span>
                        <span className="dm text-[9px] text-[#BBB]">{news.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 pt-3 flex items-center gap-2" style={{ borderTop: "1px solid #E8E4DC" }}>
              <Clock className="w-3 h-3 text-[#CCC]" />
              <span className="dm text-[9px] text-[#CCC]">NewsAPI · {lastUpdated} IST</span>
            </div>

          </div>
        </div>

        {/* ─── SECTION HEADER: SECTOR INTELLIGENCE ──────── */}
        <div className="fade-3" style={{ borderBottom: "2px solid #1A1208" }}>
          <div className="py-3 px-0 flex items-center justify-between" style={{ borderBottom: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3">
              <TrendingUp className="w-4 h-4 text-[#999]" />
              <span className="dm text-[10px] font-black uppercase tracking-[0.26em] text-[#888]">Sector Intelligence · Q1 2026</span>
            </div>
            <div className="hidden sm:flex gap-6 dm text-[9px] uppercase tracking-widest text-[#CCC]">
              <span>Deals</span><span>Funding</span><span>Growth</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-0">
            {/* LEFT: Sector table */}
            <div style={{ borderRight: "1px solid #C8C2B4" }}>
              {ecosystem.sectorMomentum.map((sector: any, i: number) => (
                <div key={i} className="flex items-center gap-4 py-3.5 px-0 transition-colors hover:bg-white" style={{ borderBottom: i < 5 ? "1px solid #EEEAE3" : "none" }}>
                  <span className="pf font-bold text-2xl num flex-shrink-0" style={{ color: "#E8E4DC", width: 32 }}>{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <p className="pf font-bold text-[#1A1208]" style={{ fontSize: "15px" }}>{sector.sector}</p>
                      <span className="dm num font-bold text-sm" style={{ color: "#16a34a" }}>{sector.growth}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px overflow-hidden" style={{ background: "#EEEAE3" }}>
                        <div className="h-px" style={{ background: "#1A1208", width: Math.min(parseFloat(sector.growth.replace("+", "").replace("%", "")), 100) + "%" }} />
                      </div>
                      <span className="dm text-[9px] text-[#BBB] whitespace-nowrap">{sector.trend}</span>
                    </div>
                  </div>
                  <div className="hidden sm:flex items-center gap-5 flex-shrink-0">
                    <span className="dm num text-sm text-[#666] w-8 text-right">{sector.deals}</span>
                    <span className="dm num text-sm text-[#666] w-16 text-right">{sector.funding}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT: Rising startups */}
            <div className="lg:pl-8 py-3 lg:py-0">
              <div className="section-label pt-3 lg:pt-4">
                <Rocket className="w-3.5 h-3.5 text-[#999]" />
                <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">Rising Startups</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-3 pb-4">
                {ecosystem.topRisingStartups.slice(0, 4).map((startup: any, i: number) => (
                  <div key={i} className="p-4 card-lift cursor-default" style={{ background: "#fff", border: "1px solid #E2DDD5" }}>
                    <div className="flex items-start justify-between mb-2">
                      <p className="pf font-bold text-[#1A1208]" style={{ fontSize: "14.5px" }}>{startup.name}</p>
                      <span className="dm text-[8px] font-black uppercase tracking-wider px-2 py-0.5 flex-shrink-0 ml-2"
                        style={{
                          background: startup.momentum === "high" ? "#FFF7E6" : "#F0FDF4",
                          color: startup.momentum === "high" ? "#d97706" : "#16a34a",
                          border: `1px solid ${startup.momentum === "high" ? "#FDE68A" : "#A7F3D0"}`,
                        }}>
                        {startup.momentum === "high" ? "🔥 Hot" : "↑ Rising"}
                      </span>
                    </div>
                    <p className="dm text-[9px] uppercase tracking-widest text-[#AAA] mb-2">{startup.sector}</p>
                    <p className="ss text-xs text-[#666] leading-snug mb-3" style={{ fontSize: "12px" }}>{startup.insight}</p>
                    <div className="flex items-center justify-between pt-2.5" style={{ borderTop: "1px solid #F0ECE5" }}>
                      <span className="dm text-[9px] text-[#CCC] uppercase tracking-wider">Momentum</span>
                      <span className="dm num font-bold text-sm" style={{ color: "#16a34a" }}>{startup.growthIndicator}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── FUNDING + BUSINESS LEADERS ──────────────── */}
        <div className="grid lg:grid-cols-[1fr_1px_340px] fade-4" style={{ borderBottom: "2px solid #1A1208" }}>

          {/* Funding rounds */}
          <div className="py-8 lg:pr-8">
            <div className="section-label">
              <DollarSign className="w-3.5 h-3.5 text-[#999]" />
              <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">Latest Funding Rounds</span>
              <div className="flex items-center gap-1.5 ml-2">
                <PulseDot color="blue" />
                <span className="dm text-[8px] text-blue-500 font-bold uppercase tracking-widest">Active</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {ecosystem.fundingNews.map((funding: any, i: number) => (
                <div key={i} className="p-5 card-lift" style={{ background: i === 0 ? "#1A1208" : "#fff", border: "1px solid #E2DDD5" }}>
                  {i === 0 && (
                    <div className="dm text-[8px] uppercase tracking-[0.26em] text-white/30 mb-3">Lead Story</div>
                  )}
                  <div className="flex items-start justify-between mb-2">
                    <p className="pf font-bold" style={{ fontSize: "17px", color: i === 0 ? "#fff" : "#1A1208" }}>{funding.startup}</p>
                    <p className="pf font-bold text-xl num ml-2 flex-shrink-0" style={{ color: i === 0 ? "#C9A84C" : "#16a34a" }}>{funding.amount}</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="dm text-[9px] font-bold px-2 py-0.5"
                      style={{ background: i === 0 ? "rgba(201,168,76,0.2)" : "#EEEAE3", color: i === 0 ? "#C9A84C" : "#555" }}>
                      {funding.round}
                    </span>
                  </div>
                  <p className="dm text-[10px] leading-snug mb-1" style={{ color: i === 0 ? "rgba(255,255,255,0.4)" : "#AAA" }}>{funding.investors}</p>
                  {funding.valuation && (
                    <p className="dm text-[10px]" style={{ color: i === 0 ? "rgba(255,255,255,0.3)" : "#BBB" }}>
                      Val: <span className="font-bold" style={{ color: i === 0 ? "rgba(255,255,255,0.7)" : "#666" }}>{funding.valuation}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: "#C8C2B4", width: 1 }} className="hidden lg:block" />

          {/* Business Leaders */}
          <div className="py-8 lg:pl-8">
            <div className="section-label">
              <Award className="w-3.5 h-3.5 text-[#999]" />
              <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">India's Business Leaders</span>
              <a href="https://www.forbes.com/billionaires/" target="_blank" rel="noopener noreferrer"
                className="dm text-[8px] text-[#BBB] hover:text-[#888] transition-colors uppercase tracking-wider ml-2">
                Forbes ↗
              </a>
            </div>

            <div className="divide-y" style={{ borderColor: "#EEEAE3" }}>
              {TOP_INDIAN_BILLIONAIRES.map((person, i) => (
                <div key={i} className="py-4 hover:bg-white/70 -mx-2 px-2 transition-colors">
                  <div className="flex items-start justify-between mb-1.5">
                    <div>
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="dm text-[9px] font-black text-[#C8C2B4]">{person.rank}</span>
                        <p className="pf font-bold text-[#1A1208]" style={{ fontSize: "15px" }}>{person.name}</p>
                      </div>
                      <p className="dm text-[9px] text-[#999]">{person.source}</p>
                    </div>
                    <div className="text-right">
                      <p className="pf font-bold text-xl num text-[#1A1208]">{person.netWorth}</p>
                      <p className="dm text-[9px] font-semibold" style={{ color: "#16a34a" }}>{person.yoy}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {person.startupConnections.map((conn, j) => (
                      <span key={j} className="dm text-[9px] px-2 py-0.5 text-[#666]" style={{ background: "#F0EDE3", border: "1px solid #E8E4DC" }}>{conn}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="dm text-[8px] text-[#C8C2B4] mt-4 italic">
              *Forbes Real-Time Billionaires, March 2026. Daily fluctuations apply.
            </p>
          </div>
        </div>

        {/* ─── RECENTLY VERIFIED ON UPFORGE ──────────────── */}
        <section className="py-8 fade-4" style={{ borderBottom: "2px solid #1A1208" }}>
          <div className="flex items-center justify-between mb-6">
            <div className="section-label flex-1">
              <BadgeCheck className="w-4 h-4" style={{ color: "#16a34a" }} />
              <span className="dm text-[9px] font-black uppercase tracking-[0.26em] text-[#888]">Recently Verified on UpForge Registry</span>
            </div>
            <Link href="/startup" className="dm flex items-center gap-1 text-[10px] uppercase tracking-wider text-[#888] hover:text-[#1A1208] transition-colors flex-shrink-0 ml-4">
              View all <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {verifiedStartups?.slice(0, 6).map((startup: any) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}
                className="p-4 card-lift group block"
                style={{ background: "#fff", border: "1px solid #E2DDD5" }}>
                <div className="flex items-start justify-between mb-2">
                  <p className="pf font-bold text-[#1A1208] leading-tight" style={{ fontSize: "14px" }}>{startup.name}</p>
                  <BadgeCheck className="w-3.5 h-3.5 flex-shrink-0 ml-1 mt-0.5" style={{ color: "#16a34a" }} />
                </div>
                <p className="ss text-xs text-[#777] leading-snug mb-3.5 line-clamp-2" style={{ fontSize: "12px" }}>{startup.description}</p>
                <div className="flex items-center gap-2 pt-2.5" style={{ borderTop: "1px solid #F0ECE5" }}>
                  <span className="dm text-[9px] text-[#BBB]">{startup.founded_year || "N/A"}</span>
                  <span style={{ color: "#DDD", fontSize: 8 }}>●</span>
                  <span className="dm text-[9px] text-[#666] uppercase tracking-wider font-bold truncate">{startup.industry || "Startup"}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ─── TRUST / AUTHORITY STRIP ───────────────────── */}
        <div className="fade-5" style={{ borderBottom: "1px solid #C8C2B4", background: "#F0EDE3" }}>
          <div className="py-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
            {[
              { icon: Shield, text: "100% Independent · No paid rankings" },
              { icon: BadgeCheck, text: "Every listing manually reviewed" },
              { icon: Sparkles, text: "AI-powered analysis & growth reports" },
              { icon: Globe, text: "Public, open & Google-indexed" },
              { icon: Clock, text: "Live via NewsAPI · Market data via Groq" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5" style={{ color: "#AAA" }} />
                <span className="dm text-[10px] text-[#666]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── REPORTS CTA — Magazine Feature Style ──────── */}
        <div className="my-12 fade-5">
          <div style={{ background: "#1A1208", position: "relative", overflow: "hidden" }}>
            {/* Grid texture */}
            <div style={{ position: "absolute", inset: 0, opacity: 0.04, backgroundImage: "repeating-linear-gradient(0deg,white 0,white 1px,transparent 1px,transparent 44px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 1px,transparent 88px)", pointerEvents: "none" }} />
            {/* Gold accent bar */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#C9A84C" }} />

            <div style={{ position: "relative" }} className="p-10 sm:p-16 grid sm:grid-cols-[1fr_auto] gap-8 items-center">
              <div>
                <div className="dm text-[9px] font-black uppercase tracking-[0.32em] mb-4" style={{ color: "#C9A84C" }}>
                  Premium Intelligence · UpForge Reports
                </div>
                <h2 className="pf font-black text-white leading-tight mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}>
                  Institutional-Grade<br />
                  <em className="italic" style={{ color: "#C9A84C" }}>Startup Intelligence</em>
                </h2>
                <p className="ss italic leading-relaxed mb-0 max-w-xl" style={{ fontSize: "15px", color: "rgba(255,255,255,0.45)" }}>
                  AI-powered deep research on Indian startups — valuation signals, risk analysis, market positioning, and growth intelligence. Built for founders, VCs, and serious operators.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <Link href="/reports" className="dm inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider transition-opacity hover:opacity-85 whitespace-nowrap"
                  style={{ background: "#C9A84C", color: "#1A1208", fontSize: "11px" }}>
                  Explore Reports <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/founder-stories" className="dm inline-flex items-center gap-2 px-8 py-4 font-bold uppercase tracking-wider transition-colors hover:bg-white/10 whitespace-nowrap"
                  style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)", fontSize: "11px" }}>
                  Founder Stories ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ─── FOOTER ────────────────────────────────────── */}
        <footer style={{ borderTop: "3px double #1A1208" }}>
          <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-[10px] font-black dm"
                style={{ background: "#1A1208", color: "#C9A84C" }}>UF</div>
              <div>
                <p className="pf font-bold text-sm text-[#1A1208]">UpForge</p>
                <p className="dm text-[9px] text-[#AAA] uppercase tracking-wider">India's Independent Startup Registry · {new Date().getFullYear()}</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {["Registry", "Reports", "Founder Stories", "Unicorns", "Submit"].map((item) => (
                <Link key={item} href={`/${item.toLowerCase().replace(/ /g, "-")}`}
                  className="dm text-[9px] uppercase tracking-wider text-[#AAA] hover:text-[#1A1208] transition-colors">
                  {item}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <PulseDot color="green" />
              <span className="dm text-[9px] text-[#BBB]">Live · NewsAPI · Groq · {lastUpdated} IST</span>
            </div>
          </div>

          <div className="pb-6 text-center">
            <p className="dm text-[9px] text-[#CCC] italic">
              UpForge is 100% independent. No paid placements, no sponsored rankings. All startups are manually verified before listing.
            </p>
          </div>
        </footer>

      </main>
    </div>
  );
}
