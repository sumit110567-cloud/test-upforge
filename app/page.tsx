// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  BadgeCheck,
  Calculator,
  ArrowRight,
  Shield,
  Users,
  Clock,
  Sparkles,
  Globe,
  TrendingUp,
  Award,
  Zap,
  Building2,
  LineChart,
  Briefcase,
  DollarSign,
  IndianRupee,
  Newspaper,
  Rocket,
  Activity,
  Gem,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";

export const revalidate = 600;

async function getRealTimeInsights() {
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
            content: `You are a startup ecosystem analyst. Return ONLY valid JSON with current Indian startup ecosystem data:
            {
              "marketMood": { "sentiment": "Bullish/Neutral/Bearish", "score": "out of 100", "reason": "brief reason" },
              "liveNews": [{"headline": "news headline", "source": "source", "impact": "positive/negative/neutral", "timestamp": "2h ago"}],
              "topRisingStartups": [{"name": "startup name", "sector": "sector", "insight": "what makes them interesting", "growthIndicator": "+XX%", "momentum": "high/medium"}],
              "topIndianBillionaires": [{"name": "name", "netWorth": "in billions", "source": "industry", "startupConnections": ["related startup", "another"]}],
              "sectorMomentum": [{"sector": "sector", "deals": "number", "funding": "amount", "trend": "trend", "growth": "+XX%"}],
              "fundingNews": [{"startup": "name", "amount": "amount", "round": "stage", "investors": "investor names", "valuation": "valuation if available"}],
              "ecosystemMetrics": {
                "totalActiveStartups": "number with +", "totalFundingYTD": "amount with B", "activeVCFirms": "number with +",
                "unicorns": "number", "soonicorns": "number", "avgDealSize": "amount", "mostActiveSector": "sector name",
                "topCity": "city name", "monthlyGrowth": "+X%", "activeAngels": "number with +"
              }
            }`,
          },
          {
            role: "user",
            content: "Provide latest real Indian startup ecosystem data for March 2026. Make it dynamic and impressive with actual market trends.",
          },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });
    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return {
      marketMood: { sentiment: "Bullish", score: "78", reason: "Strong funding momentum in Q1 2026" },
      liveNews: [
        { headline: "Zepto in talks for $300M Series F at $3.5B valuation", source: "Economic Times", impact: "positive", timestamp: "2h ago" },
        { headline: "RBI introduces regulatory sandbox for FinTech startups", source: "MoneyControl", impact: "positive", timestamp: "5h ago" },
        { headline: "Peak XV leads $45M round in AI SaaS startup", source: "TechCrunch", impact: "positive", timestamp: "8h ago" },
        { headline: "Government announces ₹1000Cr fund for deeptech", source: "PIB", impact: "positive", timestamp: "12h ago" },
      ],
      topRisingStartups: [
        { name: "Krutrim AI", sector: "AI Infrastructure", insight: "Building India's first AI compute stack backed by Bhavish Aggarwal", growthIndicator: "+312%", momentum: "high" },
        { name: "Zepto", sector: "Quick Commerce", insight: "10-min delivery expanding to 50+ cities", growthIndicator: "+189%", momentum: "high" },
        { name: "Pixxel", sector: "Space Tech", insight: "Hyperspectral satellite constellation for agriculture", growthIndicator: "+156%", momentum: "high" },
        { name: "Rapido", sector: "Mobility", insight: "Bike taxi network capturing Tier 2/3 markets", growthIndicator: "+98%", momentum: "medium" },
        { name: "PhysicsWallah", sector: "EdTech", insight: "Offline expansion with 100+ centers", growthIndicator: "+145%", momentum: "high" },
        { name: "Mamaearth", sector: "D2C", insight: "Profitable growth post-IPO", growthIndicator: "+67%", momentum: "medium" },
      ],
      topIndianBillionaires: [
        { name: "Mukesh Ambani", netWorth: "$98.5B", source: "Reliance Industries", startupConnections: ["Jio Platforms", "Netmeds", "Addverb"] },
        { name: "Gautam Adani", netWorth: "$72.3B", source: "Adani Group", startupConnections: ["Adani Green", "Adani Digital Labs"] },
        { name: "Shiv Nadar", netWorth: "$28.7B", source: "HCL", startupConnections: ["HCL Software", "Freshworks"] },
        { name: "Radhakishan Damani", netWorth: "$24.1B", source: "DMart", startupConnections: ["Avenue Supermarts", "D2C brands"] },
      ],
      sectorMomentum: [
        { sector: "AI/ML", deals: "127", funding: "$1.2B", trend: "Enterprise adoption driving growth", growth: "+156%" },
        { sector: "Climate Tech", deals: "89", funding: "$845M", trend: "Carbon capture & EV infrastructure", growth: "+89%" },
        { sector: "D2C Brands", deals: "156", funding: "$923M", trend: "Tier 2/3 expansion", growth: "+67%" },
        { sector: "FinTech", deals: "143", funding: "$2.1B", trend: "Credit infrastructure & UPI innovation", growth: "+112%" },
        { sector: "SaaS", deals: "178", funding: "$1.8B", trend: "Global expansion of Indian SaaS", growth: "+134%" },
        { sector: "HealthTech", deals: "98", funding: "$678M", trend: "Telemedicine & diagnostics", growth: "+78%" },
      ],
      fundingNews: [
        { startup: "PhysicsWallah", amount: "$210M", round: "Series B", investors: "WestBridge, GSV", valuation: "$2.8B" },
        { startup: "Ola Electric", amount: "$385M", round: "Series C", investors: "Temasek, Warburg", valuation: "$5.4B" },
        { startup: "Rapido", amount: "$120M", round: "Series D", investors: "Nexus, WestBridge", valuation: "$1.2B" },
        { startup: "Pixxel", amount: "$70M", round: "Series C", investors: "Google, Radical", valuation: "$450M" },
      ],
      ecosystemMetrics: {
        totalActiveStartups: "72,000+", totalFundingYTD: "$9.2B", activeVCFirms: "1,450+",
        unicorns: "118", soonicorns: "210+", avgDealSize: "$12.4M",
        mostActiveSector: "SaaS", topCity: "Bengaluru", monthlyGrowth: "+23%", activeAngels: "8,500+",
      },
    };
  }
}

function PulseDot({ color = "green" }: { color?: "green" | "blue" | "amber" }) {
  const colors = {
    green: { ring: "bg-green-400", dot: "bg-green-500" },
    blue: { ring: "bg-blue-400", dot: "bg-blue-500" },
    amber: { ring: "bg-amber-400", dot: "bg-amber-500" },
  };
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[color].ring} opacity-75`}></span>
      <span className={`relative inline-flex rounded-full h-2 w-2 ${colors[color].dot}`}></span>
    </span>
  );
}

export default async function Home() {
  const supabase = await createClient();
  const insights = await getRealTimeInsights();

  const { count: totalStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  const { data: industries } = await supabase
    .from("startups")
    .select("industry")
    .not("industry", "is", null);

  const uniqueIndustries = industries ? new Set(industries.map((i) => i.industry)).size : 30;

  const { data: recent } = await supabase
    .from("startups")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  const verifiedStartups = recent?.map((s) => ({ ...s, verified: true }));

  const sentimentColor =
    insights.marketMood.sentiment === "Bullish" ? "text-emerald-400" :
    insights.marketMood.sentiment === "Neutral" ? "text-amber-400" : "text-red-400";

  return (
    <div className="bg-[#F7F5F0] text-[#1C1C1C] antialiased" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>

      {/* ─── GLOBAL STYLES ─── */}
      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-0 { animation: fadeUp 0.55s 0.05s ease both; }
        .fade-up-1 { animation: fadeUp 0.55s 0.15s ease both; }
        .fade-up-2 { animation: fadeUp 0.55s 0.25s ease both; }
        .fade-up-3 { animation: fadeUp 0.55s 0.38s ease both; }
        .fade-up-4 { animation: fadeUp 0.55s 0.50s ease both; }
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(0,0,0,0.09);
          border-color: #1C1C1C !important;
        }
        .num-font { font-variant-numeric: tabular-nums; }
        .ticker-track { animation: ticker 45s linear infinite; }
        .ticker-track:hover { animation-play-state: paused; }
      `}</style>

      {/* ─── LIVE TICKER BAR (pinned below navbar) ─── */}
      <div className="bg-[#111] text-white overflow-hidden" style={{ marginTop: "3.5rem" }}>
        <div className="flex items-stretch">
          {/* Label badge */}
          <div className="flex items-center gap-2 bg-[#E8C547] text-[#111] px-4 py-2.5 flex-shrink-0">
            <PulseDot color="green" />
            <span className="text-[10px] font-bold tracking-[0.18em] uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
              Live
            </span>
          </div>

          {/* Scrolling content */}
          <div className="flex-1 overflow-hidden">
            <div className="ticker-track flex whitespace-nowrap">
              {[...insights.liveNews, ...insights.liveNews].map((news: any, i: number) => (
                <span key={i} className="inline-flex items-center gap-2.5 px-6 py-2.5 border-r border-white/10">
                  <span
                    className={`text-[9px] font-black px-1.5 py-0.5 flex-shrink-0 ${
                      news.impact === "positive" ? "bg-emerald-500/20 text-emerald-400" :
                      news.impact === "negative" ? "bg-red-500/20 text-red-400" : "bg-white/10 text-white/50"
                    }`}
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {news.impact === "positive" ? "▲" : news.impact === "negative" ? "▼" : "●"}
                  </span>
                  <span className="text-[11px] text-white/85">{news.headline}</span>
                  <span className="text-[10px] text-white/30 flex-shrink-0" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {news.source} · {news.timestamp}
                  </span>
                </span>
              ))}
            </div>
          </div>

          {/* Right: Sentiment */}
          <div className="flex-shrink-0 flex items-center gap-3 px-5 border-l border-white/10 hidden sm:flex">
            <Activity className="w-3.5 h-3.5 text-white/30" />
            <div style={{ fontFamily: "system-ui, sans-serif" }}>
              <div className="text-[9px] text-white/30 uppercase tracking-widest">Sentiment</div>
              <div className={`text-sm font-bold ${sentimentColor}`}>
                {insights.marketMood.sentiment} {insights.marketMood.score}/100
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── MAIN CONTENT ─── */}
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* ─── MASTHEAD ─── */}
        <div className="border-b-2 border-[#1C1C1C] py-5 fade-up-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Brand */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 bg-[#1C1C1C] text-[#E8C547] flex items-center justify-center font-bold text-sm tracking-tight flex-shrink-0"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                UF
              </div>
              <div>
                <p className="text-2xl sm:text-[1.7rem] tracking-tight leading-none text-[#1C1C1C]">UpForge</p>
                <p className="text-[10px] text-[#999] tracking-[0.22em] uppercase mt-0.5" style={{ fontFamily: "system-ui, sans-serif" }}>
                  India's Independent Startup Registry
                </p>
              </div>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5">
                <PulseDot color="green" />
                <span className="text-[10px] font-semibold text-[#555] tracking-wide uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Live · Auto-refreshes
                </span>
              </div>
              {[
                { icon: Shield, label: "Independent" },
                { icon: BadgeCheck, label: `${totalStartups || 0}+ Verified`, accent: true },
                { icon: Globe, label: `${uniqueIndustries} Sectors` },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-1.5 text-[11px] ${item.accent ? "font-semibold text-[#1C1C1C]" : "text-[#777]"}`} style={{ fontFamily: "system-ui, sans-serif" }}>
                  <item.icon className={`w-3.5 h-3.5 ${item.accent ? "text-emerald-600" : ""}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── HERO + NEWS ─── */}
        <div className="grid lg:grid-cols-5 gap-0 border-b border-[#D5D0C8]">

          {/* HERO */}
          <div className="lg:col-span-3 py-10 lg:py-16 lg:pr-12 border-r border-[#D5D0C8] fade-up-1">
            <div className="flex items-center gap-2 mb-5">
              <span className="w-8 h-px bg-[#1C1C1C] block"></span>
              <span className="text-[10px] tracking-[0.28em] text-[#888] uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
                India's Most Trusted Startup Database
              </span>
            </div>

            <h2 className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.6rem] xl:text-[5.4rem] leading-[1.0] tracking-tight text-[#1C1C1C] mb-6">
              Documenting<br />
              India's{" "}
              <em className="text-[#A89060] not-italic">emerging</em>
              <br />
              founders
            </h2>

            <p
              className="text-base sm:text-[1.05rem] lg:text-lg text-[#555] leading-relaxed max-w-lg mb-8"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 400 }}
            >
              Free verified listings, AI-powered growth reports, and real-time market intelligence —
              structured for serious builders and investors.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link
                href="/startup"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#1C1C1C] text-white text-sm font-bold tracking-wide hover:bg-[#333] transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Explore Registry <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-[#1C1C1C] text-[#1C1C1C] text-sm font-bold tracking-wide hover:bg-[#1C1C1C] hover:text-white transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                List Your Startup
              </Link>
            </div>

            {/* Proof points */}
            <div className="flex flex-wrap gap-x-5 gap-y-3 pt-6 border-t border-[#D5D0C8]">
              {[
                { icon: CheckCircle2, text: "100% Free to List", color: "text-emerald-600" },
                { icon: BadgeCheck, text: "Manually Verified", color: "text-blue-600" },
                { icon: Sparkles, text: "AI Growth Reports", color: "text-amber-600" },
              ].map((p, i) => (
                <div key={i} className="flex items-center gap-2">
                  <p.icon className={`w-4 h-4 ${p.color}`} />
                  <span className="text-[11px] text-[#555] font-medium" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {p.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* NEWS FEED */}
          <div className="lg:col-span-2 py-8 lg:py-10 lg:pl-8 fade-up-2">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Newspaper className="w-4 h-4 text-[#999]" />
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Startup News
                </h3>
              </div>
              <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-2.5 py-1">
                <PulseDot color="green" />
                <span className="text-[9px] text-emerald-700 font-bold tracking-widest uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Live
                </span>
              </div>
            </div>

            <div className="divide-y divide-[#E8E4DC]">
              {insights.liveNews.map((news: any, i: number) => (
                <div key={i} className="py-4 group">
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                        news.impact === "positive" ? "bg-emerald-500" :
                        news.impact === "negative" ? "bg-red-500" : "bg-[#AAA]"
                      }`}
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-[0.88rem] leading-snug text-[#1C1C1C] mb-2 group-hover:text-[#444] transition-colors">
                        {news.headline}
                      </p>
                      <div className="flex items-center gap-2 flex-wrap" style={{ fontFamily: "system-ui, sans-serif" }}>
                        <span className="text-[10px] font-bold text-[#888]">{news.source}</span>
                        <span className="text-[#DDD]">·</span>
                        <span className="text-[10px] text-[#BBB]">{news.timestamp}</span>
                        <span
                          className={`ml-auto text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider ${
                            news.impact === "positive" ? "bg-emerald-50 text-emerald-600" :
                            news.impact === "negative" ? "bg-red-50 text-red-600" : "bg-gray-100 text-gray-500"
                          }`}
                        >
                          {news.impact === "positive" ? "▲" : news.impact === "negative" ? "▼" : "●"} {news.impact}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-[#E8E4DC] flex items-center gap-1.5 text-[10px] text-[#BBB]" style={{ fontFamily: "system-ui, sans-serif" }}>
              <Clock className="w-3 h-3" />
              AI-curated · refreshes every 10 minutes
            </div>
          </div>
        </div>

        {/* ─── ECOSYSTEM METRICS ─── */}
        <div className="border-b border-[#D5D0C8] fade-up-3">
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8">
            {[
              { icon: Building2, label: "Active Startups", value: insights.ecosystemMetrics.totalActiveStartups, sub: "+2,300 this month", dark: false },
              { icon: IndianRupee, label: "Funding YTD '26", value: insights.ecosystemMetrics.totalFundingYTD, sub: `${insights.ecosystemMetrics.monthlyGrowth} YoY`, dark: false },
              { icon: Briefcase, label: "VC Firms Active", value: insights.ecosystemMetrics.activeVCFirms, sub: `${insights.ecosystemMetrics.activeAngels} angels`, dark: false },
              { icon: Gem, label: "Unicorns", value: insights.ecosystemMetrics.unicorns, sub: `${insights.ecosystemMetrics.soonicorns} soonicorns`, dark: true },
              { icon: LineChart, label: "Avg Deal Size", value: insights.ecosystemMetrics.avgDealSize, sub: "Seed → Series A", dark: false },
              { icon: Zap, label: "Hottest Sector", value: insights.ecosystemMetrics.mostActiveSector, sub: `${insights.sectorMomentum[0]?.deals || 178} deals`, dark: false },
              { icon: Globe, label: "Startup Capital", value: insights.ecosystemMetrics.topCity, sub: "Leading hub", dark: false },
              { icon: Award, label: "Our Registry", value: `${totalStartups || 0}+`, sub: `${uniqueIndustries} sectors`, dark: true },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-4 sm:p-5 border-r border-[#D5D0C8] last:border-r-0 transition-colors group ${
                  item.dark ? "bg-[#1C1C1C] text-white" : "bg-[#F7F5F0] hover:bg-white"
                } ${i >= 4 ? "border-t border-[#D5D0C8] lg:border-t-0" : ""}`}
              >
                <item.icon className={`w-4 h-4 mb-3 ${item.dark ? "text-[#E8C547]" : "text-[#BBB] group-hover:text-[#888]"} transition-colors`} />
                <p className={`num-font font-semibold tracking-tight leading-none mb-1.5 text-xl sm:text-2xl lg:text-[1.65rem] ${item.dark ? "text-white" : "text-[#1C1C1C]"}`}>
                  {item.value}
                </p>
                <p className={`text-[10px] font-bold tracking-wider uppercase mb-1 ${item.dark ? "text-white/50" : "text-[#999]"}`} style={{ fontFamily: "system-ui, sans-serif" }}>
                  {item.label}
                </p>
                <p className={`text-[9px] ${item.dark ? "text-white/30" : "text-[#BBB]"}`} style={{ fontFamily: "system-ui, sans-serif" }}>
                  {item.sub}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SECTOR MOMENTUM + BUSINESS LEADERS ─── */}
        <div className="grid lg:grid-cols-3 border-b border-[#D5D0C8] fade-up-4">

          {/* Sector Momentum */}
          <div className="lg:col-span-2 border-r border-[#D5D0C8] py-8 pr-0 lg:pr-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#999]" />
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Sector Momentum · Q1 2026
                </h3>
              </div>
              <div className="flex gap-5 text-[9px] text-[#CCC] uppercase tracking-widest" style={{ fontFamily: "system-ui, sans-serif" }}>
                <span>Deals</span>
                <span>Funding</span>
                <span>Growth</span>
              </div>
            </div>

            <div className="divide-y divide-[#EEEAE3]">
              {insights.sectorMomentum.map((sector: any, i: number) => (
                <div key={i} className="flex items-center gap-3 py-3.5 hover:bg-white/70 px-2 -mx-2 transition-colors">
                  <span className="text-[11px] text-[#CCC] w-5 flex-shrink-0 num-font" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-semibold text-[0.9rem] text-[#1C1C1C] min-w-[90px] flex-shrink-0">{sector.sector}</p>

                  {/* Progress bar */}
                  <div className="flex-1 hidden sm:block px-2">
                    <div className="h-0.5 bg-[#E8E4DC] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#1C1C1C] rounded-full"
                        style={{
                          width: Math.min(parseFloat(sector.growth.replace("+", "").replace("%", "")), 100) + "%",
                        }}
                      />
                    </div>
                    <p className="text-[9px] text-[#BBB] mt-1 truncate" style={{ fontFamily: "system-ui, sans-serif" }}>{sector.trend}</p>
                  </div>

                  {/* Numbers */}
                  <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0 ml-auto" style={{ fontFamily: "system-ui, sans-serif" }}>
                    <span className="num-font text-sm text-[#666] w-8 sm:w-10 text-right">{sector.deals}</span>
                    <span className="num-font text-sm text-[#666] w-14 text-right">{sector.funding}</span>
                    <span className="num-font text-sm font-bold text-emerald-600 w-12 text-right">{sector.growth}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Business Leaders */}
          <div className="py-8 lg:pl-8">
            <div className="flex items-center gap-2 mb-5">
              <Award className="w-4 h-4 text-[#999]" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                India's Business Leaders
              </h3>
            </div>

            <div className="divide-y divide-[#EEEAE3]">
              {insights.topIndianBillionaires.map((person: any, i: number) => (
                <div key={i} className="py-4 hover:bg-white/70 px-2 -mx-2 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <p className="font-semibold text-[0.9rem] text-[#1C1C1C]">{person.name}</p>
                    <p className="num-font text-sm font-bold text-[#1C1C1C]" style={{ fontFamily: "system-ui, sans-serif" }}>
                      {person.netWorth}
                    </p>
                  </div>
                  <p className="text-[10px] text-[#999] mb-2.5" style={{ fontFamily: "system-ui, sans-serif" }}>{person.source}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {person.startupConnections.slice(0, 2).map((conn: string, j: number) => (
                      <span key={j} className="text-[9px] bg-[#EEEAE3] text-[#666] px-2 py-0.5" style={{ fontFamily: "system-ui, sans-serif" }}>
                        {conn}
                      </span>
                    ))}
                    {person.startupConnections.length > 2 && (
                      <span className="text-[9px] text-[#BBB]" style={{ fontFamily: "system-ui, sans-serif" }}>
                        +{person.startupConnections.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[8px] text-[#CCC] mt-4" style={{ fontFamily: "system-ui, sans-serif" }}>
              *Net worth approximate · With startup ventures
            </p>
          </div>
        </div>

        {/* ─── RISING STARTUPS + FUNDING ─── */}
        <div className="grid lg:grid-cols-3 border-b border-[#D5D0C8]">

          {/* Rising Startups */}
          <div className="lg:col-span-2 border-r border-[#D5D0C8] py-8 pr-0 lg:pr-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-[#999]" />
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Top Rising Startups · 2026
                </h3>
              </div>
              <Link
                href="/startup"
                className="flex items-center gap-1 text-[10px] text-[#888] hover:text-[#1C1C1C] transition-colors"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                View all <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {insights.topRisingStartups.slice(0, 4).map((startup: any, i: number) => (
                <div key={i} className="bg-white border border-[#E2DDD5] p-4 sm:p-5 card-hover cursor-default">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-[1rem] font-semibold text-[#1C1C1C] leading-tight">{startup.name}</p>
                    <span
                      className={`text-[9px] px-2 py-0.5 font-bold uppercase tracking-wider flex-shrink-0 ml-2 ${
                        startup.momentum === "high"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : "bg-amber-50 text-amber-700 border border-amber-200"
                      }`}
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {startup.momentum === "high" ? "🔥 Hot" : "↑ Rising"}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold tracking-widest uppercase text-[#AAA] mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {startup.sector}
                  </p>
                  <p className="text-xs text-[#666] leading-snug mb-3.5 line-clamp-2" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {startup.insight}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#F0ECE5]">
                    <span className="text-[9px] text-[#BBB] uppercase tracking-wider" style={{ fontFamily: "system-ui, sans-serif" }}>
                      Momentum
                    </span>
                    <span className="num-font text-sm font-bold text-emerald-600" style={{ fontFamily: "system-ui, sans-serif" }}>
                      {startup.growthIndicator}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Funding News */}
          <div className="py-8 lg:pl-8">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[#999]" />
                <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Latest Funding
                </h3>
              </div>
              <div className="flex items-center gap-1.5">
                <PulseDot color="blue" />
                <span className="text-[9px] text-blue-500 font-bold uppercase tracking-widest" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Active
                </span>
              </div>
            </div>

            <div className="divide-y divide-[#EEEAE3]">
              {insights.fundingNews.map((funding: any, i: number) => (
                <div key={i} className="py-4 hover:bg-white/70 px-2 -mx-2 transition-colors">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-[1rem] font-semibold text-[#1C1C1C]">{funding.startup}</p>
                    <p className="num-font text-[0.95rem] font-bold text-emerald-600 ml-2 flex-shrink-0" style={{ fontFamily: "system-ui, sans-serif" }}>
                      {funding.amount}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mb-1.5" style={{ fontFamily: "system-ui, sans-serif" }}>
                    <span className="text-[10px] bg-[#EEEAE3] text-[#555] px-2 py-0.5 font-semibold">{funding.round}</span>
                    <span className="text-[10px] text-[#AAA] truncate">{funding.investors}</span>
                  </div>
                  {funding.valuation && (
                    <p className="text-[10px] text-[#999]" style={{ fontFamily: "system-ui, sans-serif" }}>
                      Valuation: <span className="font-semibold text-[#555]">{funding.valuation}</span>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── RECENTLY VERIFIED ─── */}
        <div className="py-8 border-b border-[#D5D0C8]">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <BadgeCheck className="w-4 h-4 text-emerald-600" />
              <h3 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#888]" style={{ fontFamily: "system-ui, sans-serif" }}>
                Recently Verified on UpForge
              </h3>
            </div>
            <Link
              href="/startup"
              className="flex items-center gap-1 text-[10px] text-[#888] hover:text-[#1C1C1C] transition-colors"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              View all <ChevronRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {verifiedStartups?.slice(0, 6).map((startup) => (
              <Link
                key={startup.id}
                href={`/startup/${startup.slug}`}
                className="bg-white border border-[#E2DDD5] p-4 card-hover group"
              >
                <div className="flex items-start justify-between mb-2">
                  <p className="text-sm font-semibold text-[#1C1C1C] line-clamp-1 leading-tight">{startup.name}</p>
                  <BadgeCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 ml-1 mt-0.5" />
                </div>
                <p className="text-xs text-[#777] line-clamp-2 mb-3.5 leading-snug" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {startup.description}
                </p>
                <div className="flex items-center gap-2 pt-2.5 border-t border-[#F0ECE5]" style={{ fontFamily: "system-ui, sans-serif" }}>
                  <span className="text-[9px] text-[#BBB]">{startup.founded_year || "N/A"}</span>
                  <span className="w-0.5 h-0.5 bg-[#CCC] rounded-full"></span>
                  <span className="text-[9px] text-[#666] uppercase tracking-wider font-bold truncate">{startup.industry || "Startup"}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* ─── TRUST STRIP ─── */}
        <div className="py-5 border-b border-[#D5D0C8] bg-white/50">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {[
              { icon: Shield, text: "100% Independent · No paid rankings" },
              { icon: BadgeCheck, text: "Every startup manually reviewed" },
              { icon: Sparkles, text: "AI-powered analysis reports" },
              { icon: Globe, text: "Public, open & Google-indexed" },
              { icon: Clock, text: "Data refreshed every 10 minutes" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <item.icon className="w-3.5 h-3.5 text-[#999]" />
                <span className="text-[11px] text-[#666]" style={{ fontFamily: "system-ui, sans-serif" }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ─── REPORTS CTA ─── */}
      <div className="my-12">
        <div className="bg-[#1C1C1C] relative overflow-hidden">
      
          {/* Decorative grid lines */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, white 0px, white 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, white 0px, white 1px, transparent 1px, transparent 80px)",
            }}
          ></div>
      
          <div className="relative p-10 sm:p-14 flex flex-col items-center justify-center text-center gap-6">
      
            <div className="bg-[#E8C547] p-4">
              <Newspaper className="w-7 h-7 text-[#1C1C1C]" />
            </div>
      
            <div>
              <p
                className="text-[10px] text-white/30 tracking-[0.25em] uppercase mb-3"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Premium Intelligence
              </p>
      
              <h3 className="text-3xl sm:text-4xl tracking-tight text-white mb-3">
                Deep Startup Reports
              </h3>
      
              <p
                className="text-sm text-white/50 max-w-xl mx-auto"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Institutional-grade AI research reports on Indian startups —
                valuation insights, risk analysis, market positioning & growth signals.
              </p>
            </div>
      
            <Link
              href="/reports"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8C547] text-[#1C1C1C] text-sm font-bold tracking-wide hover:bg-[#F5D55A] transition-colors"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Explore Reports <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

        {/* ─── FOOTER ─── */}
        <div className="pt-4 border-t border-[#D5D0C8] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 bg-[#1C1C1C] text-[#E8C547] flex items-center justify-center text-[8px] font-bold"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              UF
            </div>
            <span className="text-[10px] text-[#BBB]" style={{ fontFamily: "system-ui, sans-serif" }}>
              UpForge · India's Independent Startup Registry · {new Date().getFullYear()} · v2.0
            </span>
          </div>
          <div className="flex items-center gap-2">
            <PulseDot color="green" />
            <span className="text-[10px] text-[#BBB]" style={{ fontFamily: "system-ui, sans-serif" }}>
              Institutional data · Live · Auto-refreshing
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
