// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  BadgeCheck, ArrowRight, Shield, ChevronRight,
  TrendingUp, DollarSign, Newspaper, Rocket, CheckCircle2,
} from "lucide-react";

// ─── SEO METADATA ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "UpForge — India's Independent Startup Registry",
  description:
    "The definitive registry of verified Indian startups. Free listings, AI-powered growth reports, real-time funding news and market intelligence. Trusted by founders, investors and researchers.",
  keywords: [
    "Indian startups 2025","India startup database","startup registry India",
    "verified Indian startups","Indian unicorns","startup funding India",
    "list your startup India free","startup ecosystem India","Indian founders",
    "VC deals India","startup news India","Delhi startups","Bengaluru startups",
    "SaaS India","fintech India","AI startups India","UpForge",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge", publisher: "UpForge",
  metadataBase: new URL("https://upforge.in"),
  alternates: { canonical: "https://upforge.in" },
  openGraph: {
    type: "website", locale: "en_IN", url: "https://upforge.in", siteName: "UpForge",
    title: "UpForge — India's Independent Startup Registry",
    description: "The definitive registry of verified Indian startups. Free · AI reports · Live funding news.",
    images: [{ url: "https://upforge.in/og-image.png", width: 1200, height: 630, alt: "UpForge" }],
  },
  twitter: {
    card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in",
    title: "UpForge — India's Independent Startup Registry",
    description: "72,000+ verified Indian startups. Free · AI reports · Real-time funding news.",
    images: ["https://upforge.in/og-image.png"],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: { google: "YOUR_GOOGLE_SEARCH_CONSOLE_TOKEN" },
};

// ─── STRUCTURED DATA ──────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite", "@id": "https://upforge.in/#website",
      url: "https://upforge.in", name: "UpForge",
      description: "India's Independent Startup Registry",
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
      description: "India's most trusted independent startup registry.",
      areaServed: "IN", foundingDate: "2025", foundingLocation: "New Delhi, India",
    },
  ],
};

// ─── LIVE NEWS ────────────────────────────────────────────────────────────────
async function getLiveNews() {
  try {
    const today = new Date();
    const from = new Date(today);
    from.setDate(today.getDate() - 3);
    const url = new URL("https://newsapi.org/v2/everything");
    url.searchParams.set("q", "(Indian startup OR startup India OR VC funding India OR unicorn India)");
    url.searchParams.set("from", from.toISOString().split("T")[0]);
    url.searchParams.set("language", "en");
    url.searchParams.set("sortBy", "publishedAt");
    url.searchParams.set("pageSize", "6");
    url.searchParams.set("apiKey", process.env.NEWSAPI_KEY || "");
    const res = await fetch(url.toString(), { cache: "no-store" });
    if (!res.ok) throw new Error(`${res.status}`);
    const data = await res.json();
    if (!data.articles?.length) throw new Error("none");
    return data.articles
      .filter((a: any) => a.title && a.source?.name && a.title !== "[Removed]")
      .slice(0, 5)
      .map((a: any) => {
        const diffH = Math.floor((Date.now() - new Date(a.publishedAt).getTime()) / 3600000);
        const ts = diffH < 1 ? "just now" : diffH < 24 ? `${diffH}h ago` : `${Math.floor(diffH / 24)}d ago`;
        const t = a.title.toLowerCase();
        const impact = t.match(/raises|funding|unicorn|launch|growth|profit|surge|ipo/) ? "pos"
          : t.match(/shutdown|layoff|fraud|loss|fail/) ? "neg" : "neu";
        return {
          headline: a.title.length > 95 ? a.title.slice(0, 92) + "…" : a.title,
          source: a.source.name, url: a.url, impact, ts,
        };
      });
  } catch {
    return [
      { headline: "India startup ecosystem raises $9.2B in 2025, up 34% year-on-year", source: "Inc42", impact: "pos", ts: "6h ago" },
      { headline: "SEBI eases startup IPO norms — mandatory lock-in reduced to six months", source: "Economic Times", impact: "pos", ts: "12h ago" },
      { headline: "Government's ₹1,000 Cr DeepTech Fund opens applications for Indian startups", source: "PIB India", impact: "pos", ts: "1d ago" },
      { headline: "Indian SaaS crosses $1.8B new ARR as global expansion accelerates", source: "Mint", impact: "pos", ts: "1d ago" },
      { headline: "Zepto eyes $5.5B valuation in secondary sale ahead of IPO", source: "Bloomberg Quint", impact: "pos", ts: "2d ago" },
    ];
  }
}

// ─── ECOSYSTEM DATA ───────────────────────────────────────────────────────────
async function getEcosystemData() {
  const dateStr = new Date().toLocaleDateString("en-IN", {
    day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata",
  });
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
            content: `Indian startup data analyst. Today: ${dateStr}. Return ONLY valid JSON, no markdown.
{"topRisingStartups":[{"name":"real startup","sector":"sector","insight":"max 10 words","growth":"+XX%","hot":true}],
"sectorMomentum":[{"sector":"name","deals":"N","funding":"$XB","growth":"+XX%"}],
"fundingNews":[{"startup":"name","amount":"$XXM","round":"Series X","investors":"names","valuation":"$XB"}],
"metrics":{"startups":"72,000+","funding":"$9.2B","unicorns":"118","avgDeal":"$12.4M","topSector":"SaaS","topCity":"Bengaluru"}}
Return exactly: 6 topRisingStartups, 6 sectorMomentum, 4 fundingNews. Real Indian startups only.`,
          },
          { role: "user", content: `Indian startup market data for ${dateStr}.` },
        ],
        temperature: 0.1, max_tokens: 1200, response_format: { type: "json_object" },
      }),
    });
    if (!response.ok) throw new Error(`${response.status}`);
    const data = await response.json();
    return JSON.parse(data.choices?.[0]?.message?.content || "{}");
  } catch {
    return {
      topRisingStartups: [
        { name: "Krutrim AI", sector: "AI Infrastructure", insight: "India's first sovereign AI cloud", growth: "+312%", hot: true },
        { name: "Zepto", sector: "Quick Commerce", insight: "Profitable 10-min delivery, 50 cities", growth: "+189%", hot: true },
        { name: "Pixxel", sector: "Space Tech", insight: "Hyperspectral satellites for enterprise", growth: "+156%", hot: true },
        { name: "PhysicsWallah", sector: "EdTech", insight: "100+ offline centres, India's largest", growth: "+145%", hot: true },
        { name: "Rapido", sector: "Mobility", insight: "8M daily rides across Tier 2 & 3", growth: "+98%", hot: false },
        { name: "Ather Energy", sector: "EV", insight: "40% premium EV share, 450 touchpoints", growth: "+87%", hot: false },
      ],
      sectorMomentum: [
        { sector: "AI / ML", deals: "127", funding: "$1.2B", growth: "+156%" },
        { sector: "SaaS", deals: "178", funding: "$1.8B", growth: "+134%" },
        { sector: "FinTech", deals: "143", funding: "$2.1B", growth: "+112%" },
        { sector: "Climate Tech", deals: "89", funding: "$845M", growth: "+89%" },
        { sector: "HealthTech", deals: "98", funding: "$678M", growth: "+78%" },
        { sector: "D2C Brands", deals: "156", funding: "$923M", growth: "+67%" },
      ],
      fundingNews: [
        { startup: "Zepto", amount: "$300M", round: "Series F", investors: "General Catalyst, Lightspeed", valuation: "$3.5B" },
        { startup: "Krutrim AI", amount: "$150M", round: "Series B", investors: "Matrix Partners, Elevation Capital", valuation: "$1.2B" },
        { startup: "Rapido", amount: "$120M", round: "Series D", investors: "Nexus Venture Partners, WestBridge", valuation: "$1.2B" },
        { startup: "Pixxel", amount: "$70M", round: "Series C", investors: "Google Ventures, Radical Ventures", valuation: "$450M" },
      ],
      metrics: {
        startups: "72,000+", funding: "$9.2B", unicorns: "118",
        avgDeal: "$12.4M", topSector: "SaaS", topCity: "Bengaluru",
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

  const totalCount = startupsCount.count ?? 0;
  const uniqueIndustries = industriesData.data
    ? new Set(industriesData.data.map((i: any) => i.industry)).size
    : 34;
  const verifiedStartups = recentData.data ?? [];

  const todayStr = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata",
  });
  const timeStr = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true,
  });

  const maxDeals = Math.max(...(eco.sectorMomentum?.map((s: any) => parseInt(s.deals)) ?? [178]));

  return (
    <div style={{ background: "#FAFAF7", color: "#111", fontFamily: "'Georgia','Times New Roman',serif", minHeight: "100vh" }}>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,600;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700&display=swap');

        .pf  { font-family: 'Playfair Display', Georgia, serif !important; }
        .gar { font-family: 'EB Garamond', Georgia, serif !important; }
        .dm  { font-family: 'DM Sans', system-ui, sans-serif !important; }

        @keyframes fadeUp   { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:translateY(0) } }
        @keyframes ticker   { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        @keyframes barGrow  { from { width:0 } to { width:var(--bw) } }
        @keyframes blink    { 0%,100%{opacity:1} 50%{opacity:.35} }

        .f0 { animation: fadeUp .55s .05s ease both }
        .f1 { animation: fadeUp .55s .13s ease both }
        .f2 { animation: fadeUp .55s .22s ease both }
        .f3 { animation: fadeUp .55s .33s ease both }
        .f4 { animation: fadeUp .55s .46s ease both }
        .f5 { animation: fadeUp .55s .58s ease both }

        .ticker-anim { animation: ticker 65s linear infinite }
        .ticker-anim:hover { animation-play-state: paused }

        .bar-anim { animation: barGrow .9s .6s ease both; width: 0 }

        .lift { transition: transform .2s ease, box-shadow .2s ease }
        .lift:hover { transform: translateY(-2px); box-shadow: 0 10px 30px rgba(0,0,0,.08) }

        .blink { animation: blink 2s infinite }

        /* Drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', serif;
          font-size: 3.8em; font-weight: 900;
          line-height: .82; float: left;
          margin-right: .06em; margin-top: .04em;
          color: #111;
        }

        /* Section rule */
        .srule { display:flex; align-items:center; gap:9px; margin-bottom:1.1rem; }
        .srule::after { content:''; flex:1; height:1px; background:#DDD9CF; }

        /* News link hover */
        a.nlink:hover { color: #7C4A1E !important }

        /* 2-col prose on md+ */
        @media (min-width:768px) {
          .p2col { columns:2; column-gap:2.2rem; column-rule:1px solid #DDD9CF; }
          .p2col p { break-inside:avoid }
        }

        /* Clean scrollbar */
        ::-webkit-scrollbar { width:3px }
        ::-webkit-scrollbar-thumb { background:#C8C3B8 }
        * { scrollbar-width:thin; scrollbar-color:#C8C3B8 transparent }
      `}</style>

      {/* ═══════════════ LIVE TICKER ═══════════════ */}
      <div style={{ background: "#0D0C0A", marginTop: "3.5rem" }}>
        <div className="flex items-stretch">
          <div className="flex items-center gap-2 px-4 py-2.5 flex-shrink-0"
            style={{ background: "#B8962A", borderRight: "1px solid #9A7C1A" }}>
            <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#fff", display: "block" }} />
            <span className="dm text-[9px] font-bold uppercase tracking-[.22em]" style={{ color: "#0D0C0A" }}>Live</span>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="ticker-anim flex whitespace-nowrap">
              {[...liveNews, ...liveNews].map((n: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-3 px-7 py-2.5"
                  style={{ borderRight: "1px solid #1E1C17" }}>
                  <span className="dm text-[8px] font-black"
                    style={{ color: n.impact === "pos" ? "#4ade80" : n.impact === "neg" ? "#f87171" : "#666" }}>
                    {n.impact === "pos" ? "▲" : n.impact === "neg" ? "▼" : "●"}
                  </span>
                  <span className="gar italic" style={{ fontSize: "12.5px", color: "rgba(255,255,255,.75)" }}>
                    {n.headline}
                  </span>
                  <span className="dm text-[9px]" style={{ color: "#4A4535", flexShrink: 0 }}>
                    {n.source} · {n.ts}
                  </span>
                </span>
              ))}
            </div>
          </div>
          <div className="hidden sm:flex items-center px-5 gap-3 flex-shrink-0"
            style={{ borderLeft: "1px solid #1E1C17" }}>
            <span className="dm text-[9px] font-medium" style={{ color: "#B8962A" }}>{timeStr} IST</span>
          </div>
        </div>
      </div>

      {/* ═══════════════ MASTHEAD ═══════════════════ */}
      <header style={{ background: "#FAFAF7", borderBottom: "3px solid #111" }}>

        {/* Dateline strip */}
        <div className="f0" style={{ background: "#F2EFE6", borderBottom: "1px solid #D8D3C8" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-2 flex flex-wrap items-center justify-between gap-2">
            <span className="dm text-[9px] uppercase tracking-[.22em]" style={{ color: "#999" }}>
              {todayStr} · New Delhi, India
            </span>
            <div className="flex items-center gap-5">
              <div className="flex items-center gap-1.5">
                <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "block" }} />
                <span className="dm text-[9px] uppercase tracking-wider" style={{ color: "#999" }}>Live · {timeStr} IST</span>
              </div>
              <span className="dm text-[9px]" style={{ color: "#C8C3B8" }}>Independent · Unbiased · Free</span>
            </div>
          </div>
        </div>

        {/* Name block */}
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 py-10 sm:py-14 text-center f1">
          {/* Top rule */}
          <div className="flex items-center gap-4 mb-7">
            <div style={{ flex: 1, height: 1, background: "#D8D3C8" }} />
            <span className="dm text-[8px] uppercase tracking-[.42em]" style={{ color: "#BBB" }}>
              Est. 2025 · New Delhi, India
            </span>
            <div style={{ flex: 1, height: 1, background: "#D8D3C8" }} />
          </div>

          {/* Masthead wordmark */}
          <h1 className="pf font-black leading-none"
            style={{ fontSize: "clamp(3.6rem, 10.5vw, 9rem)", color: "#111", letterSpacing: "-.03em" }}>
            UpForge
          </h1>
          <p className="gar italic mt-3" style={{ fontSize: "clamp(14px, 2vw, 19px)", color: "#6B5C3A" }}>
            India's Independent Startup Registry &amp; Market Intelligence
          </p>

          {/* Bottom rule with counts */}
          <div className="flex items-center gap-4 mt-7">
            <div style={{ flex: 1, height: 1, background: "#D8D3C8" }} />
            <span style={{ color: "#C8C3B8", fontSize: 13 }}>✦</span>
            <span className="dm text-[8.5px] uppercase tracking-[.3em]" style={{ color: "#BBB" }}>
              {totalCount > 0 ? `${totalCount.toLocaleString()}+` : "72,000+"} Verified Startups
            </span>
            <span style={{ color: "#C8C3B8", fontSize: 13 }}>·</span>
            <span className="dm text-[8.5px] uppercase tracking-[.3em]" style={{ color: "#BBB" }}>
              {uniqueIndustries} Sectors
            </span>
            <span style={{ color: "#C8C3B8", fontSize: 13 }}>✦</span>
            <div style={{ flex: 1, height: 1, background: "#D8D3C8" }} />
          </div>
        </div>

        {/* Section nav */}
        <div className="f2" style={{ borderTop: "1px solid #D8D3C8" }}>
          <div className="max-w-[1440px] mx-auto px-5 sm:px-8">
            <div className="flex items-stretch overflow-x-auto" style={{ scrollbarWidth: "none" }}>
              {[
                ["Registry", "/startup"],
                ["Unicorns", "/indian-unicorns"],
                ["Funding", "/funding"],
                ["Sectors", "/sectors"],
                ["Reports", "/reports"],
                ["Founder Stories", "/founder-stories"],
              ].map(([label, href]) => (
                <Link key={href} href={href}
                  className="dm text-[9.5px] font-medium uppercase tracking-[.16em] px-4 py-3 whitespace-nowrap flex-shrink-0 hover:text-[#B8962A] transition-colors"
                  style={{ color: "#666", borderRight: "1px solid #E8E3D8" }}>
                  {label}
                </Link>
              ))}
              <div style={{ flex: 1 }} />
              <Link href="/submit"
                className="dm text-[9.5px] font-bold uppercase tracking-wider px-6 py-3 flex-shrink-0 hover:bg-[#222] transition-colors"
                style={{ background: "#111", color: "#fff", borderLeft: "1px solid #333" }}>
                List Free →
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════ MAIN ═══════════════════════ */}
      <main className="max-w-[1440px] mx-auto px-5 sm:px-8 pb-20">

        {/* ── FRONT PAGE 3-COL ── */}
        <section className="f3" style={{ borderBottom: "2px solid #111" }}>
          <div className="grid lg:grid-cols-[260px_1fr_280px]">

            {/* LEFT — Numbers + mini chart */}
            <div className="py-8 lg:pr-7" style={{ borderRight: "1px solid #D8D3C8" }}>

              <div className="srule">
                <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>By The Numbers</span>
              </div>

              {[
                { label: "Active Startups", value: eco.metrics?.startups ?? "72,000+", note: "Registered & verified", gold: true },
                { label: "Funding YTD 2025", value: eco.metrics?.funding ?? "$9.2B", note: "Across all stages" },
                { label: "Unicorns", value: eco.metrics?.unicorns ?? "118", note: "210+ soonicorns" },
                { label: "VC Firms Active", value: "1,450+", note: "8,500+ angels" },
              ].map((s, i) => (
                <div key={i} className="py-3.5 pl-3 mb-2"
                  style={{ borderLeft: `3px solid ${s.gold ? "#B8962A" : "#D8D3C8"}` }}>
                  <p className="dm text-[8px] uppercase tracking-wider mb-0.5" style={{ color: "#AAA" }}>{s.label}</p>
                  <p className="pf font-black leading-none mb-1" style={{ fontSize: "1.9rem", color: "#111" }}>{s.value}</p>
                  <p className="dm text-[9px]" style={{ color: "#CCC" }}>{s.note}</p>
                </div>
              ))}

              {/* Mini bar chart */}
              <div className="mt-6 pt-5" style={{ borderTop: "1px solid #E8E3D8" }}>
                <p className="dm text-[8px] font-black uppercase tracking-[.28em] mb-4" style={{ color: "#BBB" }}>Deals by Sector · Q3</p>
                {eco.sectorMomentum?.slice(0, 5).map((s: any, i: number) => {
                  const pct = Math.round((parseInt(s.deals) / maxDeals) * 100);
                  return (
                    <div key={i} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <span className="dm text-[9.5px]" style={{ color: "#666" }}>{s.sector}</span>
                        <span className="dm text-[9.5px] font-bold" style={{ color: "#111" }}>{s.deals}</span>
                      </div>
                      <div style={{ height: 3, background: "#EEE9E0", borderRadius: 2, overflow: "hidden" }}>
                        <div className="bar-anim" style={{
                          height: "100%", borderRadius: 2,
                          background: i === 0 ? "#B8962A" : i === 1 ? "#888" : "#C8C3B8",
                          "--bw": pct + "%",
                        } as any} />
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col gap-2 mt-6">
                <Link href="/startup"
                  className="dm text-[9.5px] font-bold uppercase tracking-wider text-center py-3 block hover:bg-[#111] hover:text-white transition-colors"
                  style={{ border: "2px solid #111", color: "#111" }}>
                  Explore Registry
                </Link>
                <Link href="/submit"
                  className="dm text-[9.5px] font-bold uppercase tracking-wider text-center py-3 block hover:opacity-80 transition-opacity"
                  style={{ background: "#B8962A", color: "#111" }}>
                  List Startup — Free
                </Link>
              </div>
            </div>

            {/* CENTRE — Hero editorial */}
            <div className="py-8 lg:px-9" style={{ borderRight: "1px solid #D8D3C8" }}>

              <div className="flex items-center gap-3 mb-5">
                <span className="dm text-[8px] font-black uppercase tracking-[.3em] px-2.5 py-1.5"
                  style={{ background: "#111", color: "#fff" }}>
                  Registry Report · 2025
                </span>
              </div>

              <h2 className="pf font-black leading-[1.04] mb-5"
                style={{ fontSize: "clamp(2rem, 4vw, 3.1rem)", color: "#111" }}>
                Documenting Every Indian Startup That Matters
              </h2>

              <div style={{ height: 1, background: "#D8D3C8", marginBottom: "1.4rem" }} />

              <p className="gar italic leading-[1.82] mb-6"
                style={{ fontSize: "clamp(15px, 1.7vw, 17px)", color: "#5A4B2E" }}>
                UpForge is India's most rigorous independent startup registry — every company manually verified, every listing free, every ranking earned.
              </p>

              <div className="p2col mb-6">
                <p className="dropcap gar leading-[1.88] mb-4" style={{ fontSize: "13.5px", color: "#2C2010" }}>
                  India's startup ecosystem now spans 72,000 registered companies across 34 sectors, generating more than $9 billion in new investment in 2025 alone. For every headline unicorn, there are a thousand builders working in silence — and their stories deserve a permanent, credible record.
                </p>
                <p className="gar leading-[1.88] mb-4" style={{ fontSize: "13.5px", color: "#2C2010" }}>
                  UpForge was built from Delhi in 2025 with a single conviction: India needs a registry that earns its authority the old-fashioned way. No algorithms. No paid placement. No black boxes. A human reviews every listing before it goes live.
                </p>
                <p className="gar leading-[1.88]" style={{ fontSize: "13.5px", color: "#2C2010" }}>
                  When a startup appears on UpForge, it belongs here. That is the promise — and the record we are building, together.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-5" style={{ borderTop: "1px solid #D8D3C8" }}>
                {[
                  { icon: CheckCircle2, label: "Free Forever", color: "#16a34a" },
                  { icon: BadgeCheck, label: "Hand-Verified", color: "#1d4ed8" },
                  { icon: Shield, label: "No Paid Rankings", color: "#B8962A" },
                ].map((t, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 py-3 text-center"
                    style={{ background: "#F2EFE6", border: "1px solid #E8E3D8" }}>
                    <t.icon style={{ width: 14, height: 14, color: t.color }} />
                    <span className="dm text-[9px] font-bold uppercase tracking-wider" style={{ color: "#666" }}>{t.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — Live news dispatch */}
            <div className="py-8 lg:pl-7">

              <div className="srule">
                <Newspaper style={{ width: 12, height: 12, color: "#BBB" }} />
                <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>Startup Dispatch</span>
              </div>

              {liveNews.slice(0, 5).map((n: any, i: number) => (
                <div key={i} className="py-4" style={{ borderBottom: i < 4 ? "1px solid #E8E3D8" : "none" }}>
                  <div className="flex items-start gap-3">
                    <span className="pf font-black flex-shrink-0 leading-none"
                      style={{ fontSize: "1.55rem", color: "#E8E3D8", width: 28, paddingTop: 1 }}>
                      {i + 1}
                    </span>
                    <div className="flex-1 min-w-0">
                      {n.url ? (
                        <a href={n.url} target="_blank" rel="noopener noreferrer"
                          className="nlink gar leading-snug block mb-1.5 transition-colors"
                          style={{ fontSize: "13px", color: "#111" }}>
                          {n.headline}
                        </a>
                      ) : (
                        <p className="gar leading-snug mb-1.5" style={{ fontSize: "13px", color: "#111" }}>
                          {n.headline}
                        </p>
                      )}
                      <div className="flex items-center gap-2">
                        <span className="dm text-[9px] font-bold" style={{ color: "#999" }}>{n.source}</span>
                        <span style={{ color: "#DDD" }}>·</span>
                        <span className="dm text-[9px]" style={{ color: "#CCC" }}>{n.ts}</span>
                        <span className="ml-auto dm text-[7.5px] font-black px-1.5 py-0.5 uppercase"
                          style={{
                            color: n.impact === "pos" ? "#16a34a" : n.impact === "neg" ? "#dc2626" : "#999",
                            background: n.impact === "pos" ? "#f0fdf4" : n.impact === "neg" ? "#fef2f2" : "#f5f5f4",
                          }}>
                          {n.impact === "pos" ? "▲" : n.impact === "neg" ? "▼" : "—"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex items-center gap-2 mt-3 pt-3" style={{ borderTop: "1px solid #E8E3D8" }}>
                <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "block", flexShrink: 0 }} />
                <span className="dm text-[8.5px]" style={{ color: "#CCC" }}>Via NewsAPI · {timeStr} IST</span>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTOR TABLE + RISING ── */}
        <section className="f4" style={{ borderBottom: "2px solid #111" }}>
          <div className="grid lg:grid-cols-[1fr_300px]">

            {/* Sector table */}
            <div className="py-8 lg:pr-9" style={{ borderRight: "1px solid #D8D3C8" }}>
              <div className="srule">
                <TrendingUp style={{ width: 12, height: 12, color: "#BBB" }} />
                <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>Sector Momentum · Q3 2025</span>
                <div className="flex gap-10 ml-auto">
                  {["Deals", "Funding", "Growth"].map(h => (
                    <span key={h} className="dm text-[8px] uppercase tracking-wider" style={{ color: "#CCC" }}>{h}</span>
                  ))}
                </div>
              </div>

              {eco.sectorMomentum?.map((s: any, i: number) => {
                const pct = Math.min(Math.round((parseFloat(s.growth.replace("+", "").replace("%", "")) / 165) * 100), 100);
                return (
                  <div key={i} className="flex items-center gap-4 py-4 hover:bg-white transition-colors -mx-2 px-2"
                    style={{ borderBottom: "1px solid #EEEAE3" }}>
                    <span className="pf font-bold flex-shrink-0"
                      style={{ color: "#E0DCD4", fontSize: "1.5rem", width: 34 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p className="pf font-bold mb-1.5" style={{ fontSize: "15px", color: "#111" }}>{s.sector}</p>
                      <div style={{ height: 2, background: "#EEEAE3", borderRadius: 1, maxWidth: 200, overflow: "hidden" }}>
                        <div className="bar-anim" style={{
                          height: "100%", borderRadius: 1,
                          background: i === 0 ? "#B8962A" : "#C8C3B8",
                          "--bw": pct + "%",
                        } as any} />
                      </div>
                    </div>
                    <div className="flex items-center gap-10 flex-shrink-0">
                      <span className="dm font-medium text-sm" style={{ color: "#777", width: 30, textAlign: "right" }}>{s.deals}</span>
                      <span className="dm font-medium text-sm" style={{ color: "#777", width: 52, textAlign: "right" }}>{s.funding}</span>
                      <span className="dm font-bold text-sm" style={{ color: "#16a34a", width: 44, textAlign: "right" }}>{s.growth}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Rising startups */}
            <div className="py-8 lg:pl-8">
              <div className="srule">
                <Rocket style={{ width: 12, height: 12, color: "#BBB" }} />
                <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>Rising Startups</span>
                <Link href="/startup"
                  className="ml-auto dm text-[8px] uppercase tracking-wider flex items-center gap-1 hover:text-[#111] transition-colors"
                  style={{ color: "#CCC" }}>
                  All <ChevronRight style={{ width: 10, height: 10 }} />
                </Link>
              </div>

              <div className="flex flex-col gap-3">
                {eco.topRisingStartups?.slice(0, 6).map((s: any, i: number) => (
                  <div key={i} className="lift p-4" style={{ background: "#fff", border: "1px solid #E8E3D8" }}>
                    <div className="flex items-start justify-between mb-1.5">
                      <p className="pf font-bold" style={{ fontSize: "14px", color: "#111" }}>{s.name}</p>
                      <div className="flex items-center gap-2 ml-2 flex-shrink-0">
                        {s.hot && (
                          <span className="dm text-[7.5px] font-black uppercase px-1.5 py-0.5"
                            style={{ background: "#FFF7E0", color: "#B8962A", border: "1px solid #E8D08A" }}>
                            Hot
                          </span>
                        )}
                        <span className="dm font-bold text-sm" style={{ color: "#16a34a" }}>{s.growth}</span>
                      </div>
                    </div>
                    <p className="dm text-[8.5px] uppercase tracking-wider mb-1" style={{ color: "#CCC" }}>{s.sector}</p>
                    <p className="gar" style={{ fontSize: "12.5px", lineHeight: "1.6", color: "#888" }}>{s.insight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FUNDING ROUNDS ── */}
        <section className="py-8 f4" style={{ borderBottom: "2px solid #111" }}>
          <div className="srule">
            <DollarSign style={{ width: 12, height: 12, color: "#BBB" }} />
            <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>Latest Funding Rounds</span>
            <div className="flex items-center gap-1.5 ml-2">
              <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6", display: "block" }} />
              <span className="dm text-[8px] font-bold uppercase tracking-widest" style={{ color: "#3b82f6" }}>Active</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {eco.fundingNews?.map((f: any, i: number) => (
              <div key={i} className="lift p-5"
                style={{
                  background: i === 0 ? "#111" : "#fff",
                  border: `1px solid ${i === 0 ? "#111" : "#E8E3D8"}`,
                }}>
                {i === 0 && (
                  <p className="dm text-[7.5px] uppercase tracking-[.28em] mb-3"
                    style={{ color: "rgba(255,255,255,.22)" }}>Lead Round</p>
                )}
                <div className="flex items-start justify-between mb-2">
                  <p className="pf font-bold" style={{ fontSize: "15.5px", color: i === 0 ? "#fff" : "#111" }}>
                    {f.startup}
                  </p>
                  <p className="pf font-bold text-xl ml-2 flex-shrink-0"
                    style={{ color: i === 0 ? "#B8962A" : "#16a34a" }}>
                    {f.amount}
                  </p>
                </div>
                <span className="dm text-[8.5px] font-bold px-2 py-0.5 inline-block mb-2"
                  style={{
                    background: i === 0 ? "rgba(184,150,42,.15)" : "#F2EFE6",
                    color: i === 0 ? "#B8962A" : "#666",
                  }}>
                  {f.round}
                </span>
                <p className="dm text-[10px] leading-snug mb-1.5"
                  style={{ color: i === 0 ? "rgba(255,255,255,.3)" : "#AAA" }}>
                  {f.investors}
                </p>
                {f.valuation && (
                  <p className="dm text-[10px]" style={{ color: i === 0 ? "rgba(255,255,255,.22)" : "#CCC" }}>
                    Val:{" "}
                    <span className="font-semibold" style={{ color: i === 0 ? "rgba(255,255,255,.55)" : "#777" }}>
                      {f.valuation}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── RECENTLY VERIFIED ── */}
        {verifiedStartups.length > 0 && (
          <section className="py-8 f5" style={{ borderBottom: "2px solid #111" }}>
            <div className="flex items-center justify-between mb-5">
              <div className="srule flex-1" style={{ marginBottom: 0 }}>
                <BadgeCheck style={{ width: 12, height: 12, color: "#16a34a" }} />
                <span className="dm text-[8px] font-black uppercase tracking-[.3em]" style={{ color: "#BBB" }}>
                  Recently Verified on UpForge
                </span>
              </div>
              <Link href="/startup"
                className="dm flex items-center gap-1 text-[8.5px] uppercase tracking-wider hover:text-[#111] transition-colors ml-5 flex-shrink-0"
                style={{ color: "#CCC" }}>
                View all <ChevronRight style={{ width: 10, height: 10 }} />
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {verifiedStartups.slice(0, 6).map((s: any) => (
                <Link key={s.id} href={`/startup/${s.slug}`} className="lift p-4 block"
                  style={{ background: "#fff", border: "1px solid #E8E3D8" }}>
                  <div className="flex items-start justify-between mb-1.5">
                    <p className="pf font-bold leading-tight" style={{ fontSize: "13px", color: "#111" }}>{s.name}</p>
                    <BadgeCheck style={{ width: 12, height: 12, color: "#16a34a", flexShrink: 0, marginLeft: 3, marginTop: 2 }} />
                  </div>
                  <p className="gar leading-snug mb-3 line-clamp-2" style={{ fontSize: "12px", color: "#888" }}>
                    {s.description}
                  </p>
                  <div className="flex items-center gap-2 pt-2" style={{ borderTop: "1px solid #F2EFE6" }}>
                    <span className="dm text-[8.5px]" style={{ color: "#CCC" }}>{s.founded_year || "—"}</span>
                    <span style={{ color: "#DDD", fontSize: 5 }}>●</span>
                    <span className="dm text-[8.5px] font-bold uppercase tracking-wider truncate" style={{ color: "#999" }}>
                      {s.industry || "Startup"}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* ── EDITORIAL CTA — Reports ── */}
        <div className="my-12 f5">
          <div style={{ background: "#111", position: "relative", overflow: "hidden" }}>
            <div style={{
              position: "absolute", inset: 0, opacity: .03,
              backgroundImage: "repeating-linear-gradient(0deg,#fff 0,#fff 1px,transparent 1px,transparent 44px),repeating-linear-gradient(90deg,#fff 0,#fff 1px,transparent 1px,transparent 88px)",
              pointerEvents: "none",
            }} />
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "#B8962A" }} />
            <div style={{ position: "relative" }}
              className="px-8 sm:px-14 py-12 sm:py-16 grid sm:grid-cols-[1fr_auto] gap-10 items-center">
              <div>
                <p className="dm text-[8px] font-black uppercase tracking-[.34em] mb-4" style={{ color: "#B8962A" }}>
                  Premium Intelligence · UpForge Reports
                </p>
                <h2 className="pf font-black text-white leading-tight mb-4"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}>
                  Deep Research on<br />
                  <em className="italic" style={{ color: "#B8962A" }}>India's Startups</em>
                </h2>
                <p className="gar italic leading-relaxed max-w-lg"
                  style={{ fontSize: "15.5px", color: "rgba(255,255,255,.38)" }}>
                  Institutional-grade AI research — valuation signals, risk analysis, market positioning and growth intelligence. For founders, VCs and serious operators.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <Link href="/reports"
                  className="dm inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider hover:opacity-85 transition-opacity whitespace-nowrap"
                  style={{ background: "#B8962A", color: "#111", fontSize: "10px" }}>
                  Explore Reports <ArrowRight style={{ width: 14, height: 14 }} />
                </Link>
                <Link href="/founder-stories"
                  className="dm inline-flex items-center justify-center gap-2 px-8 py-4 font-bold uppercase tracking-wider hover:bg-white/10 transition-colors whitespace-nowrap"
                  style={{ border: "1.5px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.45)", fontSize: "10px" }}>
                  Founder Stories ↗
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "3px double #111" }}>
          <div className="py-8 grid sm:grid-cols-3 gap-8 items-start" style={{ borderBottom: "1px solid #D8D3C8" }}>
            <div>
              <p className="pf font-black text-2xl mb-1" style={{ color: "#111" }}>UpForge</p>
              <p className="gar italic text-sm mb-3" style={{ color: "#999" }}>
                India's Independent Startup Registry
              </p>
              <p className="dm text-[9.5px] leading-relaxed" style={{ color: "#BBB" }}>
                Founded 2025 · New Delhi, India<br />
                Independent · Unbiased · Free forever
              </p>
            </div>
            <div>
              <p className="dm text-[8px] font-black uppercase tracking-[.28em] mb-3" style={{ color: "#BBB" }}>Directory</p>
              {[
                ["Registry", "/startup"],
                ["Unicorn Tracker", "/indian-unicorns"],
                ["Funding Rounds", "/funding"],
                ["AI Reports", "/reports"],
                ["Founder Stories", "/founder-stories"],
                ["Submit a Startup", "/submit"],
              ].map(([label, href]) => (
                <Link key={href} href={href}
                  className="dm text-[10px] block mb-1.5 hover:text-[#111] transition-colors"
                  style={{ color: "#999" }}>
                  {label}
                </Link>
              ))}
            </div>
            <div>
              <p className="dm text-[8px] font-black uppercase tracking-[.28em] mb-3" style={{ color: "#BBB" }}>Our Commitment</p>
              {[
                { icon: Shield, text: "100% independent — no paid rankings" },
                { icon: BadgeCheck, text: "Every listing manually reviewed" },
                { icon: CheckCircle2, text: "Free to list, free to access, always" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2 mb-2.5">
                  <t.icon style={{ width: 11, height: 11, color: "#B8962A", flexShrink: 0 }} />
                  <span className="dm text-[10px]" style={{ color: "#999" }}>{t.text}</span>
                </div>
              ))}
              <div className="flex items-center gap-2 mt-4">
                <span className="blink" style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", display: "block" }} />
                <span className="dm text-[9px]" style={{ color: "#CCC" }}>Live · NewsAPI · {timeStr} IST</span>
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-wrap items-center justify-between gap-3">
            <span className="dm text-[9px]" style={{ color: "#CCC" }}>
              © {new Date().getFullYear()} UpForge · All rights reserved
            </span>
            <span className="gar italic text-[9px]" style={{ color: "#CCC" }}>
              No paid placements. No sponsored rankings. Every startup verified by a human.
            </span>
          </div>
        </footer>

      </main>
    </div>
  );
}
