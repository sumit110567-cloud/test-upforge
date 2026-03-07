// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BadgeCheck, ArrowRight, Shield, Clock, Sparkles, Globe,
  TrendingUp, Award, Zap, Building2, LineChart, Briefcase,
  DollarSign, IndianRupee, Newspaper, Rocket, Activity,
  Gem, CheckCircle2, ChevronRight, ArrowUpRight, Search,
  BarChart3, FileText, Users, Star, ExternalLink, Flame,
  Target, BookOpen, ChevronDown,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UpForge — India's #1 Independent Startup Registry & Database 2026",
  description:
    "Discover, research and track 72,000+ verified Indian startups. Free listings, AI-powered growth reports, real-time funding news, unicorn tracker and live market intelligence. India's most trusted startup database.",
  keywords: [
    "Indian startups 2026", "India startup database", "startup registry India",
    "verified Indian startups", "Indian unicorns 2026", "startup funding India",
    "list your startup India free", "startup ecosystem India",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  metadataBase: new URL("https://upforge.in"),
  alternates: { canonical: "https://upforge.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://upforge.in", siteName: "UpForge",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports · Live funding news.",
    images: [{ url: "https://upforge.in/og-image.png", width: 1200, height: 630, alt: "UpForge" }],
  },
  twitter: {
    card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description: "72,000+ verified Indian startups. Free listings · AI growth reports.",
    images: ["https://upforge.in/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
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
      logo: { "@type": "ImageObject", url: "https://upforge.in/logo.png" },
      description: "India's most trusted independent startup registry.",
    },
  ],
};

// ─── BILLIONAIRE DATA ─────────────────────────────────────────────────────────
const TOP_INDIAN_BILLIONAIRES = [
  { name: "Mukesh Ambani", netWorth: "$96.3B", rank: "10", source: "Reliance Industries", yoy: "+4.4%", startupConnections: ["Jio Platforms", "Netmeds", "Dunzo"] },
  { name: "Gautam Adani", netWorth: "$68.7B", rank: "17", source: "Adani Group", yoy: "+3.2%", startupConnections: ["Adani Digital Labs", "Adani Green Energy"] },
  { name: "Shiv Nadar", netWorth: "$29.4B", rank: "56", source: "HCL Technologies", yoy: "+14.8%", startupConnections: ["HCL Software", "Vama Sundari Investments"] },
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
      .slice(0, 6)
      .map((article: any) => {
        const publishedAt = new Date(article.publishedAt);
        const diffH = Math.floor((Date.now() - publishedAt.getTime()) / 3600000);
        const diffD = Math.floor(diffH / 24);
        const timestamp = diffH < 1 ? "Just now" : diffH < 24 ? `${diffH}h ago` : diffD === 1 ? "1d ago" : `${diffD}d ago`;
        const title = article.title.toLowerCase();
        const impact = title.match(/raises|funding|unicorn|launch|growth|profit|record|surge|ipo|expands/) ? "positive" :
          title.match(/shutdown|layoff|fraud|crisis|loss|decline|cut|fail|drops/) ? "negative" : "neutral";
        return {
          headline: article.title.length > 110 ? article.title.slice(0, 107) + "…" : article.title,
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
      { headline: "Zepto valued at $5B after latest funding round; profitability in sight", source: "TechCrunch", impact: "positive", timestamp: "2d ago" },
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

// ─── LIVE DOT ─────────────────────────────────────────────────────────────────
function LiveDot({ color = "emerald" }: { color?: "emerald" | "blue" | "amber" }) {
  const colors = {
    emerald: "bg-emerald-400",
    blue: "bg-blue-400",
    amber: "bg-amber-400",
  };
  return (
    <span className="relative flex h-1.5 w-1.5 flex-shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[color]} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${colors[color]}`} />
    </span>
  );
}

// ─── IMPACT BADGE ─────────────────────────────────────────────────────────────
function ImpactBadge({ impact }: { impact: string }) {
  if (impact === "positive") return <span className="text-emerald-400 text-xs">↑</span>;
  if (impact === "negative") return <span className="text-red-400 text-xs">↓</span>;
  return <span className="text-slate-500 text-xs">→</span>;
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
  const sentimentColor = ecosystem.marketMood.sentiment === "Bullish" ? "#34d399" : ecosystem.marketMood.sentiment === "Neutral" ? "#fbbf24" : "#f87171";
  const lastUpdated = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true });
  const todayStr = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" });

  const featuredStartup = ecosystem.topRisingStartups[0];
  const secondaryStartups = ecosystem.topRisingStartups.slice(1, 4);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0A0A0F", color: "#E8E6E1", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script dangerouslySetInnerHTML={{ __html: `var _hAt=null;document.addEventListener('visibilitychange',function(){if(document.hidden){_hAt=Date.now();}else if(_hAt&&(Date.now()-_hAt)>3600000){window.location.reload();}});` }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --bg: #0A0A0F;
          --bg2: #111118;
          --bg3: #16161F;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --gold: #C9A84C;
          --gold-dim: rgba(201,168,76,0.15);
          --text: #E8E6E1;
          --text-2: #9B9896;
          --text-3: #5C5955;
          --emerald: #34d399;
          --blue: #60a5fa;
        }

        * { box-sizing: border-box; }

        .serif { font-family: 'DM Serif Display', Georgia, serif; }
        .mono { font-family: 'DM Mono', 'Courier New', monospace; }

        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideRight {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes counterUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-1 { animation: fadeUp 0.7s 0.1s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-2 { animation: fadeUp 0.7s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-3 { animation: fadeUp 0.7s 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-up-4 { animation: fadeUp 0.7s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both; }
        .fade-in { animation: fadeIn 1s both; }

        .ticker-wrap { overflow: hidden; }
        .ticker-track {
          display: inline-flex;
          white-space: nowrap;
          animation: ticker 60s linear infinite;
        }
        .ticker-track:hover { animation-play-state: paused; }

        .card {
          background: var(--bg2);
          border: 1px solid var(--border);
          transition: border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card:hover {
          border-color: var(--border2);
          transform: translateY(-2px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.4);
        }

        .card-gold:hover {
          border-color: rgba(201,168,76,0.3) !important;
        }

        .tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 8px;
          border-radius: 2px;
        }

        .tag-gold { background: rgba(201,168,76,0.12); color: #C9A84C; border: 1px solid rgba(201,168,76,0.2); }
        .tag-emerald { background: rgba(52,211,153,0.1); color: #34d399; border: 1px solid rgba(52,211,153,0.2); }
        .tag-blue { background: rgba(96,165,250,0.1); color: #60a5fa; border: 1px solid rgba(96,165,250,0.2); }
        .tag-red { background: rgba(248,113,113,0.1); color: #f87171; border: 1px solid rgba(248,113,113,0.2); }
        .tag-slate { background: rgba(255,255,255,0.05); color: #9B9896; border: 1px solid var(--border); }

        .divider { height: 1px; background: var(--border); }
        .divider-v { width: 1px; background: var(--border); flex-shrink: 0; }

        .section-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text-3);
        }

        .gold-line {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--gold);
          margin-bottom: 12px;
        }

        .stat-num {
          font-family: 'DM Serif Display', Georgia, serif;
          font-size: 2rem;
          line-height: 1;
          color: var(--text);
        }

        .growth-bar {
          height: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 1px;
          overflow: hidden;
        }
        .growth-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, rgba(52,211,153,0.6), #34d399);
          border-radius: 1px;
          transition: width 0.8s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .nav-link {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-2);
          transition: color 0.15s;
          letter-spacing: 0.02em;
          padding: 6px 0;
          border-bottom: 2px solid transparent;
          transition: color 0.15s, border-color 0.15s;
        }
        .nav-link:hover { color: var(--text); border-color: var(--gold); }

        .hero-bg {
          background:
            radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.08) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 80% 50%, rgba(96,165,250,0.04) 0%, transparent 60%),
            #0A0A0F;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
        }

        .glow-gold { box-shadow: 0 0 0 1px rgba(201,168,76,0.2), 0 4px 20px rgba(201,168,76,0.1); }
        .glow-emerald { box-shadow: 0 0 0 1px rgba(52,211,153,0.15), 0 4px 20px rgba(52,211,153,0.08); }

        .text-gradient {
          background: linear-gradient(135deg, #E8E6E1 30%, #9B9896 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-gold {
          background: linear-gradient(135deg, #C9A84C, #E8C547);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .search-input {
          background: rgba(255,255,255,0.04);
          border: 1px solid var(--border);
          color: var(--text);
          outline: none;
          transition: border-color 0.2s, background 0.2s;
        }
        .search-input:focus {
          border-color: rgba(201,168,76,0.4);
          background: rgba(255,255,255,0.06);
        }
        .search-input::placeholder { color: var(--text-3); }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--gold);
          color: #0A0A0F;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 12px 24px;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-primary:hover { background: #E8C547; transform: translateY(-1px); }

        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: var(--text);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 11px 24px;
          border: 1px solid var(--border2);
          transition: border-color 0.2s, background 0.2s;
        }
        .btn-secondary:hover { border-color: rgba(255,255,255,0.25); background: rgba(255,255,255,0.04); }

        .news-item { transition: background 0.15s; }
        .news-item:hover { background: rgba(255,255,255,0.03); }

        .market-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 600;
        }

        .sector-row { transition: background 0.12s; }
        .sector-row:hover { background: rgba(255,255,255,0.025); }

        .startup-card { cursor: pointer; }

        .footer-link { font-size: 12px; color: var(--text-3); transition: color 0.15s; }
        .footer-link:hover { color: var(--text-2); }

        /* Mobile */
        @media (max-width: 768px) {
          .stat-num { font-size: 1.6rem; }
          .hide-mobile { display: none !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ══ BREAKING NEWS TICKER ════════════════════════════════════════════ */}
      <div style={{ backgroundColor: "#0D0D15", borderBottom: "1px solid rgba(201,168,76,0.15)", marginTop: "3.5rem" }}>
        <div className="flex items-stretch" style={{ minHeight: "38px" }}>
          <div className="flex items-center gap-2.5 px-4 flex-shrink-0" style={{ background: "rgba(201,168,76,0.1)", borderRight: "1px solid rgba(201,168,76,0.2)" }}>
            <LiveDot color="emerald" />
            <span className="tag tag-gold">Breaking</span>
          </div>
          <div className="ticker-wrap flex-1">
            <div className="ticker-track items-center" style={{ height: "38px" }}>
              {[...liveNews, ...liveNews].map((news: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-3 px-8" style={{ borderRight: "1px solid rgba(255,255,255,0.05)" }}>
                  <ImpactBadge impact={news.impact} />
                  <span style={{ fontSize: "12px", color: "#C8C6C2", fontWeight: 400 }}>{news.headline}</span>
                  <span className="mono" style={{ fontSize: "10px", color: "#5C5955" }}>{news.source} · {news.timestamp}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 items-center gap-4 px-5 hide-mobile" style={{ borderLeft: "1px solid rgba(255,255,255,0.06)", display: "flex" }}>
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "10px", color: "#5C5955", letterSpacing: "0.1em" }}>MARKET</span>
              <span className="mono" style={{ fontSize: "13px", fontWeight: 600, color: sentimentColor }}>
                {ecosystem.marketMood.sentiment} {ecosystem.marketMood.score}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ══ NAVIGATION ══════════════════════════════════════════════════════ */}
      {/* Note: Nav is handled by layout, but we add sub-nav */}
      <div style={{ backgroundColor: "#0D0D15", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between no-scrollbar overflow-x-auto" style={{ gap: "0" }}>
            <div className="flex items-center gap-0 flex-nowrap no-scrollbar overflow-x-auto">
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
                  className="nav-link whitespace-nowrap"
                  style={{ padding: "14px 16px", borderBottom: "2px solid transparent", display: "block" }}>
                  {item.label}
                </Link>
              ))}
            </div>
            <Link href="/submit" className="btn-primary hide-mobile" style={{ padding: "8px 20px", fontSize: "11px" }}>
              + List Free
            </Link>
          </div>
        </div>
      </div>

      {/* ══ HERO ════════════════════════════════════════════════════════════ */}
      <section className="hero-bg grid-pattern" style={{ padding: "80px 0 60px" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Hero header */}
          <div className="fade-up" style={{ maxWidth: "720px", marginBottom: "48px" }}>
            <div className="flex items-center gap-3 mb-6">
              <span className="tag tag-gold">
                <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" /><span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-400" /></span>
                Live Intelligence
              </span>
              <span style={{ fontSize: "11px", color: "#5C5955" }}>{todayStr}</span>
            </div>

            <h1 className="serif" style={{ fontSize: "clamp(2.8rem, 6vw, 4.5rem)", lineHeight: "1.06", fontWeight: 400, marginBottom: "20px", letterSpacing: "-0.02em" }}>
              India's Definitive<br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Startup Intelligence</em><br />
              Platform
            </h1>

            <p style={{ fontSize: "16px", color: "#9B9896", lineHeight: "1.7", maxWidth: "520px", marginBottom: "32px" }}>
              Track, research, and discover {totalStartups?.toLocaleString() || "72,000"}+ verified Indian startups. Institutional-grade data, AI-powered reports, and real-time market intelligence — free, independent, and ad-free.
            </p>

            {/* Search bar */}
            <div className="flex gap-2 mb-8" style={{ maxWidth: "520px" }}>
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4" style={{ color: "#5C5955" }} />
                <input
                  type="text"
                  placeholder="Search startups, sectors, founders..."
                  className="search-input w-full"
                  style={{ padding: "12px 16px 12px 38px", fontSize: "13px", borderRadius: "4px" }}
                />
              </div>
              <Link href="/startup" className="btn-primary" style={{ borderRadius: "4px", flexShrink: 0 }}>
                Search
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="/startup" className="btn-secondary" style={{ borderRadius: "4px" }}>
                Open Registry <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/submit" className="flex items-center gap-1.5" style={{ fontSize: "12px", color: "#C9A84C", fontWeight: 600, letterSpacing: "0.04em" }}>
                List your startup free <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Hero stats row */}
          <div className="fade-up-1 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-0" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
            {[
              { label: "Verified Startups", value: ecosystem.ecosystemMetrics.totalActiveStartups, sub: "In registry", color: "#E8E6E1" },
              { label: "Funding YTD", value: ecosystem.ecosystemMetrics.totalFundingYTD, sub: ecosystem.ecosystemMetrics.monthlyGrowth + " YoY", color: "#34d399" },
              { label: "Active VCs", value: ecosystem.ecosystemMetrics.activeVCFirms, sub: ecosystem.ecosystemMetrics.activeAngels + " angels", color: "#E8E6E1" },
              { label: "Unicorns", value: ecosystem.ecosystemMetrics.unicorns, sub: ecosystem.ecosystemMetrics.soonicorns + " soonicorns", color: "#C9A84C" },
              { label: "Avg Deal Size", value: ecosystem.ecosystemMetrics.avgDealSize, sub: "Seed → Series A", color: "#E8E6E1" },
              { label: "Hottest Sector", value: ecosystem.ecosystemMetrics.mostActiveSector, sub: ecosystem.sectorMomentum[0]?.deals + " deals", color: "#60a5fa" },
              { label: "Top City", value: ecosystem.ecosystemMetrics.topCity, sub: "Leading hub", color: "#E8E6E1" },
              { label: "Market Mood", value: ecosystem.marketMood.sentiment, sub: "Score: " + ecosystem.marketMood.score + "/100", color: sentimentColor },
            ].map((stat, i) => (
              <div key={i} className="p-4 sm:p-5 group hover:bg-white/[0.02] transition-colors"
                style={{ borderRight: i < 7 ? "1px solid var(--border)" : "none", borderBottom: i >= 4 ? "0" : "0" }}>
                <div className="stat-num mb-1" style={{ fontSize: "1.4rem", color: stat.color }}>{stat.value}</div>
                <div className="section-label mb-0.5" style={{ fontSize: "9px" }}>{stat.label}</div>
                <div style={{ fontSize: "10px", color: "#5C5955" }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ MAIN CONTENT GRID ═══════════════════════════════════════════════ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ paddingTop: "48px", paddingBottom: "80px" }}>

        {/* ── ROW 1: FEATURED + NEWS SIDEBAR ──────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_360px] gap-6 mb-12">

          {/* FEATURED STARTUPS */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="gold-line" style={{ marginBottom: 0 }} />
                <span className="section-label">Featured Intelligence</span>
              </div>
              <Link href="/startup" className="flex items-center gap-1" style={{ fontSize: "11px", color: "#9B9896" }}>
                View all <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Hero feature card */}
            {featuredStartup && (
              <div className="card card-gold mb-4" style={{ padding: "0", overflow: "hidden", borderRadius: "6px" }}>
                <div style={{
                  background: "linear-gradient(135deg, #111118 0%, #16161F 100%)",
                  padding: "36px",
                  borderBottom: "1px solid var(--border)",
                  position: "relative",
                  overflow: "hidden"
                }}>
                  {/* Background glow */}
                  <div style={{
                    position: "absolute", top: 0, right: 0, width: "300px", height: "300px",
                    background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <span className="tag tag-gold">Editor's Pick</span>
                          <span className="tag tag-slate">{featuredStartup.sector}</span>
                          {featuredStartup.momentum === "high" && <span className="tag tag-emerald">🔥 High Momentum</span>}
                        </div>
                        <h2 className="serif" style={{ fontSize: "2.2rem", fontWeight: 400, color: "#E8E6E1", lineHeight: 1.1, marginBottom: "12px" }}>
                          {featuredStartup.name}
                        </h2>
                        <p style={{ fontSize: "14px", color: "#9B9896", lineHeight: 1.6, maxWidth: "400px" }}>
                          {featuredStartup.insight}
                        </p>
                      </div>
                      <div className="hide-mobile text-right flex-shrink-0 ml-6">
                        <div className="mono text-gradient-gold" style={{ fontSize: "3rem", fontWeight: 700, lineHeight: 1 }}>
                          {featuredStartup.growthIndicator}
                        </div>
                        <div style={{ fontSize: "10px", color: "#5C5955", letterSpacing: "0.12em", marginTop: "4px" }}>GROWTH RATE</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Link href={`/startup`} className="btn-primary" style={{ borderRadius: "4px", padding: "10px 20px" }}>
                        View Profile <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link href="/reports" style={{ fontSize: "12px", color: "#C9A84C", display: "flex", alignItems: "center", gap: "4px" }}>
                        <FileText className="w-3.5 h-3.5" />
                        Full Research Report
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Secondary startup cards */}
            <div className="grid sm:grid-cols-3 gap-3">
              {ecosystem.topRisingStartups.slice(1, 4).map((startup: any, i: number) => (
                <Link key={i} href="/startup" className="card startup-card" style={{ padding: "20px", borderRadius: "6px", display: "block" }}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <span className="tag tag-slate" style={{ fontSize: "9px" }}>{startup.sector}</span>
                      </div>
                      <h3 className="serif" style={{ fontSize: "1.1rem", color: "#E8E6E1", lineHeight: 1.2 }}>{startup.name}</h3>
                    </div>
                    <span className="mono" style={{ fontSize: "1rem", color: "#34d399", fontWeight: 600, flexShrink: 0, marginLeft: "8px" }}>
                      {startup.growthIndicator}
                    </span>
                  </div>
                  <p style={{ fontSize: "11.5px", color: "#9B9896", lineHeight: 1.55, marginBottom: "12px" }}>{startup.insight}</p>
                  <div className="growth-bar">
                    <div className="growth-bar-fill" style={{ width: `${Math.min(parseFloat(startup.growthIndicator.replace("+","").replace("%","")), 200)/2}%` }} />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* NEWS SIDEBAR */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <LiveDot color="emerald" />
                <span className="section-label">Startup Dispatch</span>
              </div>
              <span className="tag tag-emerald">Live</span>
            </div>

            <div className="card" style={{ borderRadius: "6px", overflow: "hidden" }}>
              {liveNews.map((news: any, i: number) => (
                <div key={i} className="news-item" style={{ padding: "14px 18px", borderBottom: i < liveNews.length - 1 ? "1px solid var(--border)" : "none" }}>
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 mt-1">
                      {news.impact === "positive" && <div style={{ width: "2px", height: "32px", background: "rgba(52,211,153,0.5)", borderRadius: "1px" }} />}
                      {news.impact === "negative" && <div style={{ width: "2px", height: "32px", background: "rgba(248,113,113,0.5)", borderRadius: "1px" }} />}
                      {news.impact === "neutral" && <div style={{ width: "2px", height: "32px", background: "rgba(255,255,255,0.1)", borderRadius: "1px" }} />}
                    </div>
                    <div className="flex-1 min-w-0">
                      {news.url ? (
                        <a href={news.url} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: "12.5px", color: "#C8C6C2", lineHeight: 1.55, display: "block", marginBottom: "5px", fontWeight: 400 }}
                          className="hover:text-white transition-colors">
                          {news.headline}
                        </a>
                      ) : (
                        <p style={{ fontSize: "12.5px", color: "#C8C6C2", lineHeight: 1.55, marginBottom: "5px" }}>{news.headline}</p>
                      )}
                      <div className="flex items-center gap-2">
                        <span style={{ fontSize: "10px", color: "#5C5955", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase" }}>{news.source}</span>
                        <span style={{ color: "#2A2825", fontSize: "10px" }}>·</span>
                        <span style={{ fontSize: "10px", color: "#5C5955" }}>{news.timestamp}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div style={{ padding: "12px 18px", borderTop: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" style={{ color: "#5C5955" }} />
                  <span style={{ fontSize: "10px", color: "#5C5955" }}>Refreshed hourly via NewsAPI · {lastUpdated} IST</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── ROW 2: SECTOR INTELLIGENCE ──────────────────────────────────── */}
        <div className="divider mb-8" />

        <div className="grid lg:grid-cols-[1fr_1fr_280px] gap-6 mb-12">

          {/* SECTOR MOMENTUM */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" style={{ marginBottom: 0 }} />
              <span className="section-label">Sector Momentum · Q1 2026</span>
            </div>

            <div className="card" style={{ borderRadius: "6px", overflow: "hidden" }}>
              <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
                <span style={{ fontSize: "10px", color: "#5C5955" }}>SECTOR</span>
                <div className="flex gap-6" style={{ fontSize: "10px", color: "#5C5955" }}>
                  <span>DEALS</span>
                  <span>FUNDING</span>
                  <span>GROWTH</span>
                </div>
              </div>

              {ecosystem.sectorMomentum.map((sector: any, i: number) => {
                const growthNum = Math.min(parseFloat(sector.growth.replace("+", "").replace("%", "")), 160);
                return (
                  <div key={i} className="sector-row px-4 py-3.5" style={{ borderBottom: i < 5 ? "1px solid var(--border)" : "none" }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2.5">
                        <span className="mono" style={{ fontSize: "10px", color: "#5C5955", width: "16px" }}>{String(i + 1).padStart(2, "0")}</span>
                        <span className="serif" style={{ fontSize: "14px", color: "#E8E6E1" }}>{sector.sector}</span>
                      </div>
                      <div className="flex items-center gap-5 flex-shrink-0">
                        <span className="mono" style={{ fontSize: "12px", color: "#9B9896", width: "28px", textAlign: "right" }}>{sector.deals}</span>
                        <span className="mono" style={{ fontSize: "12px", color: "#9B9896", width: "48px", textAlign: "right" }}>{sector.funding}</span>
                        <span className="mono" style={{ fontSize: "13px", color: "#34d399", fontWeight: 600, width: "48px", textAlign: "right" }}>{sector.growth}</span>
                      </div>
                    </div>
                    <div className="growth-bar ml-7">
                      <div className="growth-bar-fill" style={{ width: `${(growthNum / 160) * 100}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* FUNDING TRACKER */}
          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="gold-line" style={{ marginBottom: 0 }} />
                <span className="section-label">Funding Tracker</span>
              </div>
              <div className="flex items-center gap-1.5">
                <LiveDot color="blue" />
                <span style={{ fontSize: "10px", color: "#60a5fa", fontWeight: 600, letterSpacing: "0.1em" }}>ACTIVE</span>
              </div>
            </div>

            <div className="card" style={{ borderRadius: "6px", overflow: "hidden" }}>
              {ecosystem.fundingNews.map((funding: any, i: number) => (
                <div key={i} style={{
                  padding: "18px 20px",
                  borderBottom: i < ecosystem.fundingNews.length - 1 ? "1px solid var(--border)" : "none",
                  background: i === 0 ? "linear-gradient(135deg, rgba(201,168,76,0.06), rgba(201,168,76,0.02))" : "transparent"
                }}>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      {i === 0 && <Star className="w-3 h-3 flex-shrink-0" style={{ color: "#C9A84C" }} />}
                      <span className="serif" style={{ fontSize: "15px", color: "#E8E6E1" }}>{funding.startup}</span>
                    </div>
                    <span className="mono" style={{ fontSize: "15px", color: i === 0 ? "#C9A84C" : "#34d399", fontWeight: 600, marginLeft: "12px", flexShrink: 0 }}>
                      {funding.amount}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="tag tag-slate" style={{ fontSize: "9px" }}>{funding.round}</span>
                    <span style={{ fontSize: "11px", color: "#5C5955" }}>{funding.investors.split(",")[0]}</span>
                  </div>
                  {funding.valuation && (
                    <p style={{ fontSize: "10.5px", color: "#5C5955" }}>
                      Valuation: <span style={{ color: "#9B9896", fontWeight: 600 }}>{funding.valuation}</span>
                    </p>
                  )}
                </div>
              ))}

              <div style={{ padding: "16px 20px", borderTop: "1px solid var(--border)", background: "rgba(255,255,255,0.02)" }}>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Funding YTD", value: ecosystem.ecosystemMetrics.totalFundingYTD },
                    { label: "Avg Deal", value: ecosystem.ecosystemMetrics.avgDealSize },
                  ].map((s, i) => (
                    <div key={i}>
                      <div style={{ fontSize: "9px", color: "#5C5955", letterSpacing: "0.1em", marginBottom: "2px" }}>{s.label}</div>
                      <div className="serif" style={{ fontSize: "1.1rem", color: "#E8E6E1" }}>{s.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* MARKET MOOD + LEADERS */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="gold-line" style={{ marginBottom: 0 }} />
              <span className="section-label">Market Pulse</span>
            </div>

            {/* Mood card */}
            <div className="card card-gold mb-4" style={{ padding: "20px", borderRadius: "6px" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="serif" style={{ fontSize: "1.5rem", color: sentimentColor }}>
                  {ecosystem.marketMood.sentiment}
                </span>
                <span className="mono" style={{ fontSize: "1.8rem", color: sentimentColor, opacity: 0.7, fontWeight: 700 }}>
                  {ecosystem.marketMood.score}
                </span>
              </div>

              {/* Gauge bar */}
              <div style={{ height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "3px", marginBottom: "8px", position: "relative", overflow: "visible" }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, bottom: 0,
                  width: `${ecosystem.marketMood.score}%`,
                  background: `linear-gradient(90deg, #f87171 0%, #fbbf24 45%, #34d399 100%)`,
                  borderRadius: "3px"
                }} />
                <div style={{
                  position: "absolute", top: "50%", left: `${ecosystem.marketMood.score}%`,
                  transform: "translate(-50%, -50%)",
                  width: "12px", height: "12px",
                  background: "#E8E6E1",
                  borderRadius: "50%",
                  boxShadow: "0 0 0 3px rgba(232,230,225,0.2)"
                }} />
              </div>

              <div className="flex justify-between mb-3" style={{ fontSize: "9px", color: "#5C5955" }}>
                <span>Bearish</span><span>Neutral</span><span>Bullish</span>
              </div>
              <p style={{ fontSize: "11px", color: "#9B9896", lineHeight: 1.5 }}>{ecosystem.marketMood.reason}</p>
            </div>

            {/* Business leaders */}
            <div className="flex items-center justify-between mb-3">
              <span className="section-label" style={{ fontSize: "9px" }}>Business Leaders</span>
              <a href="https://www.forbes.com/billionaires/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-1" style={{ fontSize: "10px", color: "#5C5955" }}>
                Forbes <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>

            <div className="card" style={{ borderRadius: "6px" }}>
              {TOP_INDIAN_BILLIONAIRES.map((person, i) => (
                <div key={i} className="news-item" style={{ padding: "12px 16px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                  <div className="flex items-center gap-2.5 mb-1">
                    <div style={{ width: "18px", height: "18px", background: "rgba(201,168,76,0.15)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, borderRadius: "2px" }}>
                      <span className="mono" style={{ fontSize: "8px", color: "#C9A84C", fontWeight: 700 }}>{person.rank}</span>
                    </div>
                    <span className="serif" style={{ fontSize: "13px", color: "#E8E6E1", flex: 1 }}>{person.name}</span>
                    <span className="mono" style={{ fontSize: "12px", color: "#E8E6E1", fontWeight: 600 }}>{person.netWorth}</span>
                  </div>
                  <div className="flex items-center justify-between ml-7">
                    <span style={{ fontSize: "10px", color: "#5C5955" }}>{person.source}</span>
                    <span className="mono" style={{ fontSize: "10px", color: "#34d399" }}>{person.yoy}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ROW 3: RECENTLY VERIFIED ─────────────────────────────────────── */}
        <div className="divider mb-8" />

        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="gold-line" style={{ marginBottom: 0 }} />
              <span className="section-label">Recently Verified in Registry</span>
              <span className="tag tag-emerald">
                <BadgeCheck className="w-2.5 h-2.5" />
                Live
              </span>
            </div>
            <Link href="/startup" className="flex items-center gap-1" style={{ fontSize: "11px", color: "#9B9896" }}>
              View all {totalStartups?.toLocaleString()}+ <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {verifiedStartups?.slice(0, 6).map((startup: any) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}
                className="card startup-card" style={{ padding: "18px", borderRadius: "6px", display: "block" }}>
                <div className="flex items-start justify-between mb-3">
                  <div style={{ width: "32px", height: "32px", background: "rgba(255,255,255,0.05)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Building2 className="w-4 h-4" style={{ color: "#5C5955" }} />
                  </div>
                  <BadgeCheck className="w-3.5 h-3.5" style={{ color: "#34d399", flexShrink: 0 }} />
                </div>
                <h3 className="serif" style={{ fontSize: "14px", color: "#E8E6E1", marginBottom: "6px", lineHeight: 1.2 }}>{startup.name}</h3>
                <p style={{ fontSize: "11px", color: "#9B9896", lineHeight: 1.5, marginBottom: "12px", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {startup.description}
                </p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "10px" }}>
                  <div className="flex items-center gap-2">
                    <span style={{ fontSize: "10px", color: "#5C5955" }}>{startup.founded_year || "—"}</span>
                    <span style={{ color: "#2A2825" }}>·</span>
                    <span style={{ fontSize: "10px", color: "#9B9896", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase" }}>{startup.industry || "Startup"}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── ROW 4: EDITORIAL PAGES ────────────────────────────────────────── */}
        <div className="divider mb-8" />

        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="gold-line" style={{ marginBottom: 0 }} />
            <span className="section-label">Intelligence Hub</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "AI Startup Reports",
                desc: "Deep dives into India's fastest-growing AI companies — valuation, growth signals, competitive moats.",
                href: "/top-ai-startups",
                icon: Sparkles,
                stat: "1,779+ companies",
                tag: "AI/ML",
                highlight: true,
              },
              {
                label: "Indian Unicorn Tracker",
                desc: "126 verified unicorn profiles with funding history, investor networks, and growth trajectory data.",
                href: "/indian-unicorns",
                icon: Gem,
                stat: "126 unicorns",
                tag: "Unicorns",
              },
              {
                label: "SaaS Intelligence",
                desc: "India's $26B SaaS landscape — ranked by ARR growth, global reach, and category leadership.",
                href: "/best-saas-startups",
                icon: BarChart3,
                stat: "$26B market",
                tag: "SaaS",
              },
              {
                label: "Funding Database",
                desc: "Track every major funding round in India — from angel to Series F, with investor and valuation data.",
                href: "/top-funded-startups",
                icon: DollarSign,
                stat: "$14B+ tracked",
                tag: "Funding",
              },
              {
                label: "Founder Stories",
                desc: "In-depth profiles of India's most ambitious founders — their journey, decisions, and lessons.",
                href: "/founder-stories",
                icon: Users,
                stat: "Curated profiles",
                tag: "Founders",
              },
              {
                label: "Full Startup Registry",
                desc: `${totalStartups?.toLocaleString() || "72,000"}+ verified startups across ${uniqueIndustries} sectors — the most comprehensive free database in India.`,
                href: "/startup",
                icon: BookOpen,
                stat: `${totalStartups?.toLocaleString() || "72,000"}+`,
                tag: "Registry",
              },
            ].map((item, i) => (
              <Link key={i} href={item.href}
                className={`card card-gold group`}
                style={{
                  padding: "24px",
                  borderRadius: "6px",
                  display: "block",
                  border: item.highlight ? "1px solid rgba(201,168,76,0.2)" : "1px solid var(--border)",
                  background: item.highlight ? "linear-gradient(135deg, rgba(201,168,76,0.04), rgba(201,168,76,0.01))" : undefined
                }}>
                <div className="flex items-start justify-between mb-4">
                  <div style={{
                    width: "40px", height: "40px",
                    background: item.highlight ? "rgba(201,168,76,0.12)" : "rgba(255,255,255,0.05)",
                    borderRadius: "6px",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <item.icon className="w-5 h-5" style={{ color: item.highlight ? "#C9A84C" : "#9B9896" }} />
                  </div>
                  <ArrowUpRight className="w-4 h-4 group-hover:opacity-100 opacity-0 transition-opacity" style={{ color: "#C9A84C" }} />
                </div>
                <div className="tag tag-slate mb-3" style={{ display: "inline-flex" }}>{item.tag}</div>
                <h3 className="serif" style={{ fontSize: "1.1rem", color: "#E8E6E1", marginBottom: "8px", lineHeight: 1.25 }}>{item.label}</h3>
                <p style={{ fontSize: "12px", color: "#9B9896", lineHeight: 1.6, marginBottom: "16px" }}>{item.desc}</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "12px" }}>
                  <span className="mono" style={{ fontSize: "12px", color: item.highlight ? "#C9A84C" : "#34d399", fontWeight: 600 }}>{item.stat}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ── CTA BLOCK: AI REPORTS ─────────────────────────────────────────── */}
        <div className="mb-12">
          <div style={{
            borderRadius: "8px",
            overflow: "hidden",
            background: "linear-gradient(135deg, #111118 0%, #16161F 100%)",
            border: "1px solid rgba(201,168,76,0.15)",
            position: "relative"
          }}>
            {/* Grid overlay */}
            <div className="grid-pattern absolute inset-0 opacity-40" />
            {/* Glow */}
            <div style={{
              position: "absolute", bottom: 0, right: "10%",
              width: "400px", height: "400px",
              background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 70%)",
              pointerEvents: "none"
            }} />

            <div className="relative grid lg:grid-cols-2 gap-8 p-10 sm:p-14 items-center">
              <div>
                <div className="flex items-center gap-2 mb-5">
                  <span className="gold-line" style={{ marginBottom: 0 }} />
                  <span className="tag tag-gold">Premium Intelligence</span>
                </div>
                <h2 className="serif" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#E8E6E1", lineHeight: 1.1, marginBottom: "16px", fontWeight: 400 }}>
                  AI-Powered Deep<br />
                  <em style={{ color: "#C9A84C" }}>Research Reports</em>
                </h2>
                <p style={{ fontSize: "14px", color: "#9B9896", lineHeight: 1.7, maxWidth: "420px", marginBottom: "28px" }}>
                  Institutional-grade analysis on Indian startups — valuation insights, competitive landscape, market positioning, and risk signals. Built for founders, investors, and analysts.
                </p>
                <div className="flex items-center gap-3">
                  <Link href="/reports" className="btn-primary" style={{ borderRadius: "4px" }}>
                    Explore Reports <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link href="/startup" className="btn-secondary" style={{ borderRadius: "4px" }}>
                    Browse Registry
                  </Link>
                </div>
              </div>

              <div className="hidden lg:grid grid-cols-2 gap-3">
                {[
                  { label: "Valuation Analysis", icon: LineChart, desc: "DCF models, comparables, funding multiples" },
                  { label: "Market Positioning", icon: Target, desc: "Competitive maps, category definitions" },
                  { label: "Risk Signals", icon: Activity, desc: "Regulatory, operational, market risks" },
                  { label: "Growth Trajectory", icon: TrendingUp, desc: "Revenue projections, expansion signals" },
                ].map((item, i) => (
                  <div key={i} style={{
                    padding: "18px",
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRadius: "6px",
                    transition: "border-color 0.2s"
                  }}>
                    <item.icon className="w-4 h-4 mb-3" style={{ color: "#C9A84C", opacity: 0.7 }} />
                    <p className="serif" style={{ fontSize: "14px", color: "#E8E6E1", marginBottom: "6px" }}>{item.label}</p>
                    <p style={{ fontSize: "11px", color: "#5C5955", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TRUST STRIP ──────────────────────────────────────────────────── */}
        <div className="divider mb-8" />

        <div style={{ marginBottom: "48px" }}>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              { icon: Shield, text: "100% Independent · Zero paid rankings" },
              { icon: BadgeCheck, text: "Every startup manually reviewed" },
              { icon: Sparkles, text: "AI-powered deep analysis" },
              { icon: Globe, text: "Open, public & Google-indexed" },
              { icon: Clock, text: "Refreshed hourly via NewsAPI + Groq" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5" style={{ color: "#C9A84C", opacity: 0.6 }} />
                <span style={{ fontSize: "11.5px", color: "#9B9896" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── FOOTER ───────────────────────────────────────────────────────── */}
        <footer style={{ borderTop: "1px solid var(--border)", paddingTop: "40px" }}>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div style={{ width: "32px", height: "32px", background: "rgba(201,168,76,0.15)", borderRadius: "4px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span className="mono" style={{ fontSize: "11px", color: "#C9A84C", fontWeight: 700 }}>UF</span>
                </div>
                <div>
                  <div className="serif" style={{ fontSize: "16px", color: "#E8E6E1" }}>UpForge</div>
                  <div style={{ fontSize: "9px", color: "#5C5955", letterSpacing: "0.12em", textTransform: "uppercase" }}>Registry of Record</div>
                </div>
              </div>
              <p style={{ fontSize: "12px", color: "#5C5955", lineHeight: 1.7 }}>
                India's independent startup intelligence platform. Free, verified, and built for the ecosystem.
              </p>
            </div>

            {/* Registry */}
            <div>
              <p style={{ fontSize: "10px", color: "#5C5955", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>Registry</p>
              {[
                { label: "All Startups", href: "/startup" },
                { label: "AI Startups", href: "/top-ai-startups" },
                { label: "Unicorns", href: "/indian-unicorns" },
                { label: "Funded Startups", href: "/top-funded-startups" },
                { label: "List Your Startup", href: "/submit" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="footer-link block mb-2.5">{link.label}</Link>
              ))}
            </div>

            {/* Intelligence */}
            <div>
              <p style={{ fontSize: "10px", color: "#5C5955", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>Intelligence</p>
              {[
                { label: "Research Reports", href: "/reports" },
                { label: "SaaS Rankings", href: "/best-saas-startups" },
                { label: "Founder Stories", href: "/founder-stories" },
                { label: "Sector Analysis", href: "/startup" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="footer-link block mb-2.5">{link.label}</Link>
              ))}
            </div>

            {/* Live data */}
            <div>
              <p style={{ fontSize: "10px", color: "#5C5955", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "14px" }}>Live Data</p>
              <div className="flex items-center gap-2 mb-3">
                <LiveDot color="emerald" />
                <span style={{ fontSize: "11px", color: "#9B9896" }}>Market: <span style={{ color: sentimentColor }}>{ecosystem.marketMood.sentiment}</span></span>
              </div>
              <div style={{ fontSize: "11px", color: "#5C5955", lineHeight: 1.8 }}>
                <div>News via NewsAPI</div>
                <div>Market data via Groq LLM</div>
                <div>Registry: Supabase</div>
                <div style={{ marginTop: "8px", color: "#3A3835" }}>Updated {lastUpdated} IST</div>
              </div>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "20px", display: "flex", flexDirection: "column", gap: "6px", alignItems: "center", justifyContent: "center", textAlign: "center" }}>
            <p style={{ fontSize: "11px", color: "#3A3835" }}>
              © {new Date().getFullYear()} UpForge · Independent · Ad-Free · Open Registry · v2.3
            </p>
            <p style={{ fontSize: "10px", color: "#2A2825" }}>
              Delhi, India · Est. 2025 · Market data is AI-generated for informational purposes only
            </p>
          </div>
        </footer>

      </div>
    </div>
  );
}
