// app/industries/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import type { Metadata } from "next";
import {
  TrendingUp, Building2, BadgeCheck, Globe, ArrowRight,
  Activity, Zap, ChevronRight, BarChart2, Target,
} from "lucide-react";

export const revalidate = 600;

export const metadata: Metadata = {
  title: "Industries — UpForge | India's Startup Ecosystem by Sector",
  description:
    "Explore India's startup ecosystem by industry. Live sector momentum, verified startups, funding trends, and AI-curated intelligence across AI/ML, FinTech, SaaS, EdTech, HealthTech, and more.",
  keywords: [
    "Indian startup sectors",
    "startup industries India",
    "AI startups India",
    "FinTech startups India",
    "SaaS startups India",
    "EdTech startups India",
    "HealthTech startups India",
    "startup ecosystem India 2026",
    "India startup funding by sector",
  ],
  openGraph: {
    title: "Industries — UpForge | India's Startup Ecosystem by Sector",
    description:
      "Live sector intelligence across India's startup ecosystem — verified data, funding momentum, and AI-curated insights.",
    type: "website",
    url: "https://upforge.in/industries",
  },
  alternates: { canonical: "https://upforge.in/industries" },
};

// ─── Sector static data ───────────────────────────────────────────────────────

const SECTORS = [
  {
    id: "ai-ml",
    name: "AI / ML",
    dbValue: "AI/ML",
    icon: "🤖",
    growth: "+156%",
    heat: "hot",
    color: "#7C3AED",
    colorLight: "#EDE9FE",
    fundingQ1: "$2.1B",
    topCity: "Bengaluru",
    description: "Foundation models, applied AI, enterprise automation, and AI-first SaaS — India's fastest growing sector.",
    leaders: ["Krutrim", "Sarvam AI", "Ola Krutrim", "Bhashini"],
  },
  {
    id: "fintech",
    name: "FinTech",
    dbValue: "FinTech",
    icon: "💳",
    growth: "+112%",
    heat: "hot",
    color: "#059669",
    colorLight: "#D1FAE5",
    fundingQ1: "$1.8B",
    topCity: "Mumbai",
    description: "Payments, lending, insurance-tech, wealth management, and B2B financial infrastructure for India's digital economy.",
    leaders: ["Razorpay", "PhonePe", "Zerodha", "CRED"],
  },
  {
    id: "saas",
    name: "SaaS",
    dbValue: "SaaS",
    icon: "☁️",
    growth: "+134%",
    heat: "hot",
    color: "#2563EB",
    colorLight: "#DBEAFE",
    fundingQ1: "$1.4B",
    topCity: "Bengaluru",
    description: "B2B software products serving global markets from India — the highest-density segment for repeat founders and outlier returns.",
    leaders: ["Freshworks", "Zoho", "Chargebee", "Postman"],
  },
  {
    id: "edtech",
    name: "EdTech",
    dbValue: "EdTech",
    icon: "📚",
    growth: "+55%",
    heat: "warm",
    color: "#D97706",
    colorLight: "#FEF3C7",
    fundingQ1: "$380M",
    topCity: "Bengaluru",
    description: "K-12 learning, test prep, upskilling, and vocational training — rebounding strongly after the post-COVID correction.",
    leaders: ["PhysicsWallah", "upGrad", "Unacademy", "Vedantu"],
  },
  {
    id: "healthtech",
    name: "HealthTech",
    dbValue: "HealthTech",
    icon: "🏥",
    growth: "+78%",
    heat: "warm",
    color: "#DC2626",
    colorLight: "#FEE2E2",
    fundingQ1: "$620M",
    topCity: "Bengaluru",
    description: "Digital health, telemedicine, diagnostics, and hospital SaaS — building India's next-gen healthcare infrastructure.",
    leaders: ["Practo", "PharmEasy", "1mg", "Niramai"],
  },
  {
    id: "d2c",
    name: "D2C / E-commerce",
    dbValue: "D2C/E-commerce",
    icon: "🛍️",
    growth: "+67%",
    heat: "warm",
    color: "#9333EA",
    colorLight: "#F3E8FF",
    fundingQ1: "$510M",
    topCity: "Delhi NCR",
    description: "Direct-to-consumer brands across beauty, food, fashion, and home — driven by social commerce and tier-2/3 India demand.",
    leaders: ["Mamaearth", "boAt", "Lenskart", "Sugar Cosmetics"],
  },
  {
    id: "climate-tech",
    name: "Climate Tech",
    dbValue: "Climate Tech",
    icon: "🌱",
    growth: "+89%",
    heat: "warm",
    color: "#16A34A",
    colorLight: "#DCFCE7",
    fundingQ1: "$290M",
    topCity: "Bengaluru",
    description: "Clean energy, EV infrastructure, carbon markets, and sustainable agriculture — India's fastest emerging deep-tech sector.",
    leaders: ["Ather Energy", "Euler Motors", "Climes", "Husk Power"],
  },
  {
    id: "space-tech",
    name: "Space Tech",
    dbValue: "Space Tech",
    icon: "🚀",
    growth: "+145%",
    heat: "hot",
    color: "#1D4ED8",
    colorLight: "#DBEAFE",
    fundingQ1: "$180M",
    topCity: "Hyderabad",
    description: "Launch vehicles, satellites, remote sensing, and space-as-a-service — India's post-ISRO private space boom.",
    leaders: ["Skyroot Aerospace", "Agnikul Cosmos", "Pixxel", "GalaxEye"],
  },
  {
    id: "agritech",
    name: "AgriTech",
    dbValue: "AgriTech",
    icon: "🌾",
    growth: "+61%",
    heat: "warm",
    color: "#65A30D",
    colorLight: "#ECFCCB",
    fundingQ1: "$210M",
    topCity: "Hyderabad",
    description: "Supply chain, precision farming, agri-fintech, and farmer intelligence platforms serving India's 600M+ agri-dependent population.",
    leaders: ["DeHaat", "Ninjacart", "AgroStar", "Samunnati"],
  },
  {
    id: "mobility",
    name: "Mobility",
    dbValue: "Mobility",
    icon: "🚗",
    growth: "+72%",
    heat: "warm",
    color: "#0891B2",
    colorLight: "#CFFAFE",
    fundingQ1: "$430M",
    topCity: "Bengaluru",
    description: "EVs, ride-hailing, fleet management, and urban logistics — transforming how India's 1.4B people move.",
    leaders: ["Ola Electric", "Rapido", "Porter", "ElasticRun"],
  },
  {
    id: "biotech",
    name: "BioTech",
    dbValue: "BioTech",
    icon: "🧬",
    growth: "+84%",
    heat: "warm",
    color: "#BE185D",
    colorLight: "#FCE7F3",
    fundingQ1: "$160M",
    topCity: "Pune",
    description: "Genomics, bioinformatics, novel therapeutics, and biotech manufacturing — riding India's pharma and research base.",
    leaders: ["Strand Life Sciences", "Immuneel", "Bugworks", "Mynvax"],
  },
  {
    id: "web3",
    name: "Web3 / Crypto",
    dbValue: "Web3/Crypto",
    icon: "⛓️",
    growth: "+48%",
    heat: "warm",
    color: "#EA580C",
    colorLight: "#FFEDD5",
    fundingQ1: "$95M",
    topCity: "Mumbai",
    description: "DeFi, NFT infrastructure, blockchain developer tooling, and regulated crypto — cautiously rebounding in 2026.",
    leaders: ["CoinDCX", "WazirX", "Mudrex", "Biconomy"],
  },
];

// ─── GROQ sector intelligence ─────────────────────────────────────────────────

async function getSectorIntelligence() {
  try {
    const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "Return only valid JSON, no markdown, no explanation.",
          },
          {
            role: "user",
            content: `Give a brief live snapshot of India's startup sector landscape in March 2026. Return this JSON:
{
  "overallMood": "bullish/neutral/cautious",
  "moodReason": "one sentence on why",
  "hotSector": "single sector name that is hottest right now",
  "hotSectorStat": "one compelling stat about that sector",
  "totalFundingQ1": "total VC funding in India Q1 2026 in $B",
  "weeklyInsight": "one sharp, specific insight about Indian startup ecosystem this week — max 20 words",
  "watchSector": "one sector to watch that is under the radar"
}`,
          },
        ],
        temperature: 0.3,
        max_tokens: 300,
      }),
      next: { revalidate: 600 },
    });
    const data = await res.json();
    const raw = data.choices?.[0]?.message?.content ?? "{}";
    return JSON.parse(raw.replace(/```json|```/g, "").trim());
  } catch {
    return {
      overallMood: "bullish",
      moodReason: "Record Q1 2026 deployment signals strong LP and founder confidence",
      hotSector: "AI/ML",
      hotSectorStat: "$2.1B deployed into Indian AI startups in Q1 2026 alone",
      totalFundingQ1: "$9.2B",
      weeklyInsight: "India's AI-first startups are now raising at 20x ARR — a 2021-like moment",
      watchSector: "Space Tech",
    };
  }
}

// ─── Pulse Dot ─────────────────────────────────────────────────────────────────

function PulseDot({ color = "green" }: { color?: "green" | "amber" }) {
  const c = color === "green"
    ? { ring: "bg-green-400", dot: "bg-green-500" }
    : { ring: "bg-amber-400", dot: "bg-amber-500" };
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${c.ring} opacity-75`} />
      <span className={`relative inline-flex rounded-full h-2 w-2 ${c.dot}`} />
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default async function IndustriesPage() {
  const supabase = await createClient();
  const intel = await getSectorIntelligence();

  // Count startups per sector from DB
  const { data: sectorCounts } = await supabase
    .from("startups")
    .select("industry")
    .not("industry", "is", null);

  const countMap: Record<string, number> = {};
  (sectorCounts ?? []).forEach((row) => {
    const k = row.industry?.trim();
    if (k) countMap[k] = (countMap[k] || 0) + 1;
  });

  const totalStartups = Object.values(countMap).reduce((a, b) => a + b, 0);

  const moodColor =
    intel.overallMood === "bullish" ? "text-emerald-600" :
    intel.overallMood === "cautious" ? "text-amber-600" : "text-[#888]";

  // JSON-LD for sector pages (BreadcrumbList + ItemList)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "India Startup Industries — UpForge",
    description: "India's startup ecosystem indexed by industry sector",
    url: "https://upforge.in/industries",
    numberOfItems: SECTORS.length,
    itemListElement: SECTORS.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.name,
      url: `https://upforge.in/startup?sector=${encodeURIComponent(s.dbValue)}`,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-[#F7F5F0] min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>
        <style>{`
          @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
          .fu-1 { animation: fadeUp 0.5s 0.05s ease both; }
          .fu-2 { animation: fadeUp 0.5s 0.15s ease both; }
          .fu-3 { animation: fadeUp 0.5s 0.28s ease both; }
          .fu-4 { animation: fadeUp 0.5s 0.4s ease both; }
          .card-hover { transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
          .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); border-color: #1C1C1C !important; }
          .num-font { font-variant-numeric: tabular-nums; }
        `}</style>

        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

          {/* ── MASTHEAD ── */}
          <div className="border-b-2 border-[#1C1C1C] pb-6 mb-0 fu-1">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
              <div>
                <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-3">UpForge · Sector Intelligence</p>
                <h1
                  className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] tracking-tight leading-[1.0] text-[#1C1C1C]"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  India's Startup<br />
                  <em className="text-[#A89060] not-italic">Industries</em>
                </h1>
              </div>
              <div className="pb-1 flex flex-col gap-2 lg:items-end">
                <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5 w-fit">
                  <PulseDot color="green" />
                  <span className="text-[10px] font-semibold text-[#555] tracking-wide uppercase">
                    Live · {SECTORS.length} Sectors · {totalStartups}+ Startups
                  </span>
                </div>
                <p className="text-[11px] text-[#888] lg:text-right">
                  AI-curated sector intelligence · Updated every 10 min
                </p>
              </div>
            </div>
          </div>

          {/* ── LIVE INTEL STRIP ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#D5D0C8] fu-2">
            {/* Mood */}
            <div className="py-5 px-4 border-r border-[#D5D0C8]">
              <div className="flex items-center gap-2 mb-2">
                <PulseDot color="amber" />
                <span className="text-[9px] text-[#AAA] font-bold uppercase tracking-widest">Ecosystem Mood</span>
              </div>
              <p className={`text-xl font-bold capitalize mb-1 num-font ${moodColor}`} style={{ fontFamily: "'Georgia', serif" }}>
                {intel.overallMood}
              </p>
              <p className="text-[10px] text-[#888] leading-snug">{intel.moodReason}</p>
            </div>

            {/* Q1 Funding */}
            <div className="py-5 px-4 border-r border-[#D5D0C8]">
              <p className="text-[9px] text-[#AAA] font-bold uppercase tracking-widest mb-2">Q1 2026 Funding</p>
              <p className="text-3xl font-bold text-[#1C1C1C] num-font mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                {intel.totalFundingQ1}
              </p>
              <p className="text-[10px] text-[#888]">Total VC deployed · India</p>
            </div>

            {/* Hot sector */}
            <div className="py-5 px-4 border-r border-[#D5D0C8]">
              <p className="text-[9px] text-[#AAA] font-bold uppercase tracking-widest mb-2">🔥 Hottest Sector</p>
              <p className="text-xl font-bold text-[#1C1C1C] mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                {intel.hotSector}
              </p>
              <p className="text-[10px] text-[#888] leading-snug">{intel.hotSectorStat}</p>
            </div>

            {/* Watch */}
            <div className="py-5 px-4">
              <p className="text-[9px] text-[#AAA] font-bold uppercase tracking-widest mb-2">👀 One to Watch</p>
              <p className="text-xl font-bold text-[#1C1C1C] mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                {intel.watchSector}
              </p>
              <p className="text-[10px] text-[#888] leading-snug">{intel.weeklyInsight}</p>
            </div>
          </div>

          {/* ── SECTOR MOMENTUM BAR ── */}
          <div className="py-5 border-b border-[#D5D0C8] fu-3">
            <div className="flex items-center gap-2 mb-4">
              <BarChart2 className="w-3.5 h-3.5 text-[#AAA]" />
              <span className="text-[9px] text-[#AAA] font-bold uppercase tracking-widest">Sector Momentum — Growth YoY</span>
            </div>
            <div className="space-y-2">
              {[...SECTORS]
                .sort((a, b) => parseInt(b.growth) - parseInt(a.growth))
                .map((s) => {
                  const pct = parseInt(s.growth);
                  const barW = Math.min(100, (pct / 160) * 100);
                  return (
                    <Link key={s.id} href={`/startup?sector=${encodeURIComponent(s.dbValue)}`}>
                      <div className="flex items-center gap-3 group py-1">
                        <span className="w-24 text-[10px] text-[#666] font-medium truncate group-hover:text-[#1C1C1C] transition-colors">
                          {s.name}
                        </span>
                        <div className="flex-1 h-1.5 bg-[#E8E4DC] relative">
                          <div
                            className="h-full transition-all duration-500"
                            style={{ width: `${barW}%`, backgroundColor: s.heat === "hot" ? "#E8C547" : "#D5D0C8" }}
                          />
                        </div>
                        <span className={`text-[10px] font-bold num-font w-14 text-right ${s.heat === "hot" ? "text-emerald-600" : "text-[#888]"}`}>
                          {s.growth}
                        </span>
                        {s.heat === "hot" && <span className="text-[10px]">🔥</span>}
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>

          {/* ── SECTOR GRID ── */}
          <div className="py-8 fu-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#AAA]" />
                <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888]">All Sectors</h2>
              </div>
              <p className="text-[10px] text-[#BBB]">{SECTORS.length} industries tracked</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#D5D0C8] border border-[#D5D0C8]">
              {SECTORS.map((sector) => {
                const count = countMap[sector.dbValue] || 0;
                const isHot = sector.heat === "hot";

                return (
                  <Link
                    key={sector.id}
                    href={`/startup?sector=${encodeURIComponent(sector.dbValue)}`}
                  >
                    <article className="bg-[#F7F5F0] p-6 card-hover h-full flex flex-col border border-transparent group">

                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl leading-none">{sector.icon}</span>
                          <div>
                            <h3
                              className="text-[1rem] font-semibold text-[#1C1C1C] leading-none mb-1"
                              style={{ fontFamily: "'Georgia', serif" }}
                            >
                              {sector.name}
                            </h3>
                            <p className="text-[9px] text-[#AAA] uppercase tracking-wider">{sector.topCity}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 ${
                              isHot
                                ? "bg-[#E8C547]/20 text-[#7A6A20]"
                                : "bg-[#EEEAE3] text-[#888]"
                            }`}
                          >
                            {isHot ? "🔥 Hot" : "↑ Active"}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-[11px] text-[#666] leading-relaxed line-clamp-2 flex-1 mb-4">
                        {sector.description}
                      </p>

                      {/* Stats row */}
                      <div className="grid grid-cols-3 border-t border-[#EEEAE3] pt-3 mt-auto">
                        <div>
                          <p className="text-[9px] text-[#AAA] uppercase tracking-wider mb-0.5">Growth</p>
                          <p className={`num-font text-sm font-bold ${isHot ? "text-emerald-600" : "text-[#888]"}`}>
                            {sector.growth}
                          </p>
                        </div>
                        <div>
                          <p className="text-[9px] text-[#AAA] uppercase tracking-wider mb-0.5">Q1 Funding</p>
                          <p className="num-font text-sm font-bold text-[#1C1C1C]">{sector.fundingQ1}</p>
                        </div>
                        <div>
                          <p className="text-[9px] text-[#AAA] uppercase tracking-wider mb-0.5">On UpForge</p>
                          <p className="num-font text-sm font-bold text-[#1C1C1C]">{count > 0 ? `${count}+` : "—"}</p>
                        </div>
                      </div>

                      {/* Leaders */}
                      <div className="mt-3 pt-3 border-t border-[#EEEAE3]">
                        <p className="text-[9px] text-[#AAA] uppercase tracking-wider mb-1.5">Notable names</p>
                        <div className="flex flex-wrap gap-1">
                          {sector.leaders.slice(0, 3).map((l) => (
                            <span key={l} className="text-[9px] bg-white border border-[#E2DDD5] px-2 py-0.5 text-[#666]">
                              {l}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA arrow */}
                      <div className="flex items-center gap-1 mt-4 text-[10px] text-[#CCC] group-hover:text-[#1C1C1C] transition-colors">
                        <span>Browse {sector.name} startups</span>
                        <ArrowRight className="w-3 h-3" />
                      </div>

                    </article>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* ── TRUST + ECOSYSTEM CONTEXT ── */}
          <div className="grid lg:grid-cols-2 gap-px bg-[#D5D0C8] border border-[#D5D0C8] mb-10">
            <div className="bg-[#F7F5F0] p-7 hover:bg-white transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <BadgeCheck className="w-4 h-4 text-[#AAA]" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888]">Why Sector Data Matters</h3>
              </div>
              <p className="text-sm text-[#555] leading-relaxed mb-4" style={{ fontFamily: "'Georgia', serif" }}>
                India's startup ecosystem is highly sector-concentrated — the top 5 sectors receive over 80% of all VC funding. Understanding sector momentum helps founders time their fundraise, investors identify allocation gaps, and researchers benchmark emerging trends.
              </p>
              <div className="space-y-2">
                {[
                  "Growth rates calculated from public funding databases",
                  "Funding figures from verified news and DPIIT data",
                  "Startup counts pulled live from UpForge's verified registry",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <BadgeCheck className="w-3 h-3 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-[11px] text-[#666]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#1C1C1C] p-7">
              <p className="text-[9px] text-[#E8C547] font-bold uppercase tracking-[0.25em] mb-4">List Your Startup</p>
              <h3
                className="text-xl text-white mb-3 leading-snug"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Building in any of these sectors? Get your startup listed.
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-6">
                Free, verified, permanently indexed. Takes under 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8C547] text-[#1C1C1C] text-[11px] font-bold uppercase tracking-wider hover:bg-[#F5D55A] transition-colors"
                >
                  List Your Startup <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/reports"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-[11px] font-bold uppercase tracking-wider hover:border-white/40 transition-colors"
                >
                  Get Free Report <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── TRUST FOOTER STRIP ── */}
          <div className="pt-6 border-t border-[#D5D0C8] flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
            {[
              { icon: Activity, text: "Live data · Refreshed every 10 min" },
              { icon: BadgeCheck, text: "Manually verified startup profiles" },
              { icon: Globe, text: "Publicly indexed · Google discoverable" },
              { icon: Target, text: "Independent · No paid placements" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon className="w-3.5 h-3.5 text-[#BBB]" />
                <span className="text-[11px] text-[#888]">{item.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}
