import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import RegistrySearch from "@/components/registry-search";
import PageTransition from "@/components/page-transition";
import { ChevronLeft, ChevronRight, Search, BadgeCheck, TrendingUp, Zap, Activity, Filter, ArrowRight } from "lucide-react";

export const revalidate = 600; // 10 minutes

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
        { name: "EdTech", growth: "+55%", heat: "warm" },
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

export default async function StartupPage({ searchParams }: Props) {
  const supabase = await createClient();
  const insights = await getRegistryInsights();

  // Fix for Next.js 15+ searchParams sync/async behavior
  const params = await (searchParams as any);
  
  const currentPage =
    params?.page && Number(params.page) > 0
      ? Number(params.page)
      : 1;

  const searchQuery = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";

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

  const { data: startups, count, error } = await query
    .order("name")
    .range(from, to);

  if (error) {
    console.log("SUPABASE ERROR:", error);
  }

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#F7F5F0] text-[#1C1C1C] min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-up-1 { animation: fadeUp 0.5s 0.05s ease both; }
        .fade-up-2 { animation: fadeUp 0.5s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.5s 0.25s ease both; }
        .fade-up-4 { animation: fadeUp 0.5s 0.38s ease both; }
        .card-hover { transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); border-color: #1C1C1C !important; }
        .num-font { font-variant-numeric: tabular-nums; }
      `}</style>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* ── MASTHEAD ── */}
        <div className="border-b-2 border-[#1C1C1C] pb-5 mb-0 fade-up-1">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-2">UpForge · Public Registry</p>
              <h1
                className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight leading-none text-[#1C1C1C]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Startup Registry
              </h1>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5">
                <PulseDot color="green" />
                <span className="text-[10px] font-semibold text-[#555] tracking-wide uppercase">Live · {count || 0} Profiles</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-[11px] text-[#888]">
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-600" />
                All Verified
              </div>
            </div>
          </div>
        </div>

        {/* ── SPOTLIGHT + STATS STRIP ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-[#D5D0C8] fade-up-2">
          <div className="lg:col-span-2 py-5 pr-0 lg:pr-8 border-r border-[#D5D0C8]">
            <div className="flex items-start gap-3">
              <div className="flex items-center gap-2 flex-shrink-0 mt-0.5">
                <PulseDot color="amber" />
                <span className="text-[9px] text-[#AAA] uppercase tracking-widest font-bold">Spotlight</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#1C1C1C] leading-snug mb-1" style={{ fontFamily: "'Georgia', serif" }}>
                  {insights.spotlight.headline}
                </p>
                <p className="text-[11px] text-[#888]">{insights.spotlight.sub}</p>
              </div>
            </div>
          </div>

          {[
            { label: "New This Week", value: insights.registryStats.newThisWeek, sub: "startups added" },
            { label: "Most Active", value: insights.registryStats.mostActiveSector, sub: "sector right now" },
            { label: "Top City", value: insights.registryStats.topCity, sub: "by listing count" },
          ].map((stat, i) => (
            <div key={i} className={`py-5 px-4 sm:px-6 border-l border-[#D5D0C8] ${i === 2 ? "hidden lg:block" : ""}`}>
              <p className="num-font text-xl sm:text-2xl font-semibold text-[#1C1C1C] leading-none mb-1">{stat.value}</p>
              <p className="text-[9px] text-[#AAA] uppercase tracking-wider font-bold mb-0.5">{stat.label}</p>
              <p className="text-[10px] text-[#BBB]">{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* ── TRENDING SECTORS ── */}
        <div className="border-b border-[#D5D0C8] py-4 fade-up-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1.5 flex-shrink-0">
              <Zap className="w-3.5 h-3.5 text-[#AAA]" />
              <span className="text-[9px] text-[#AAA] uppercase tracking-widest font-bold">Trending</span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              {insights.trendingSectors.map((sector: any, i: number) => (
                <Link
                  key={i}
                  href={`?sector=${encodeURIComponent(sector.name)}${searchQuery ? `&search=${searchQuery}` : ""}`}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 border text-[10px] font-semibold tracking-wide transition-colors ${
                    sectorFilter === sector.name
                      ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                      : sector.heat === "hot"
                      ? "border-[#E8C547]/50 bg-[#E8C547]/10 text-[#7A6A20] hover:border-[#E8C547] hover:bg-[#E8C547]/20"
                      : "border-[#DDD] bg-white text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
                  }`}
                >
                  {sector.heat === "hot" && <span className="text-[8px]">🔥</span>}
                  {sector.name}
                  <span className={`text-[9px] ${sectorFilter === sector.name ? "text-white/60" : "text-emerald-600"}`}>
                    {sector.growth}
                  </span>
                </Link>
              ))}
              {sectorFilter && (
                <Link
                  href={`?${searchQuery ? `search=${searchQuery}` : ""}`}
                  className="text-[10px] text-[#AAA] hover:text-[#1C1C1C] underline underline-offset-2 transition-colors"
                >
                  Clear filter
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* ── SEARCH (FIXED) ── */}
        <div className="py-5 border-b border-[#D5D0C8] fade-up-3">
          <form action="" method="GET" className="flex items-stretch">
            <div className="relative flex-1">
              <input
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Search by name, sector, or industry…"
                className="w-full border border-[#D5D0C8] border-r-0 bg-white px-4 py-2.5 text-sm text-[#1C1C1C] placeholder-[#BBB] focus:outline-none focus:border-[#1C1C1C] transition-colors"
              />
              {sectorFilter && (
                <input type="hidden" name="sector" value={sectorFilter} />
              )}
            </div>
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1C1C1C] text-white border border-[#1C1C1C] hover:bg-[#333] transition-colors flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span className="text-[11px] font-bold tracking-wide uppercase hidden sm:block">Search</span>
            </button>
          </form>

          {(searchQuery || sectorFilter) && (
            <p className="mt-2 text-[11px] text-[#888]">
              {count || 0} result{count !== 1 ? "s" : ""} for
              {searchQuery && <span className="font-semibold text-[#1C1C1C]"> "{searchQuery}"</span>}
              {sectorFilter && <span className="font-semibold text-[#1C1C1C]"> in {sectorFilter}</span>}
            </p>
          )}
        </div>

        {/* ── CONTENT GRID (FIXED WITH KEY) ── */}
        <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#D5D0C8] mt-0 fade-up-4 border border-[#D5D0C8]">
            {startups?.map((startup) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}>
                <article className="bg-[#F7F5F0] p-5 lg:p-6 card-hover h-full flex flex-col border border-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#E2DDD5] bg-white flex-shrink-0">
                      {startup.logo_url ? (
                        <img src={startup.logo_url} alt={startup.name} className="max-h-full max-w-full object-contain p-1" />
                      ) : (
                        <span className="text-lg text-[#CCC]" style={{ fontFamily: "'Georgia', serif" }}>{startup.name.charAt(0)}</span>
                      )}
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-[#AAA] num-font">{startup.founded_year || "—"}</span>
                      <div className="mt-1"><BadgeCheck className="w-3 h-3 text-emerald-500 ml-auto" /></div>
                    </div>
                  </div>
                  <h3 className="text-[1.05rem] font-semibold text-[#1C1C1C] mb-2 leading-tight" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
                    {startup.name}
                  </h3>
                  <p className="text-[12px] text-[#666] line-clamp-3 leading-relaxed flex-1 mb-4">{startup.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#EEEAE3]">
                    <span className="text-[9px] text-[#AAA] uppercase tracking-wider font-bold">{startup.industry || startup.category || "Startup"}</span>
                    <ArrowRight className="w-3 h-3 text-[#CCC] group-hover:text-[#1C1C1C] transition-colors" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {(!startups || startups.length === 0) && (
            <div className="hidden md:flex flex-col items-center justify-center py-24 text-center border border-[#D5D0C8] mt-0">
              <Search className="w-8 h-8 text-[#CCC] mb-4" />
              <p className="text-lg font-semibold text-[#555]" style={{ fontFamily: "'Georgia', serif" }}>No startups found</p>
              <p className="text-sm text-[#AAA] mt-1">Try a different search term or clear the filter</p>
              <Link href="/startup" className="mt-4 text-[11px] text-[#888] hover:text-[#1C1C1C] underline underline-offset-2 transition-colors">Clear all filters</Link>
            </div>
          )}

          {/* ── MOBILE LIST ── */}
          <div className="md:hidden divide-y divide-[#E8E4DC] border border-[#D5D0C8] mt-0 fade-up-4">
            {startups?.map((startup) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}>
                <div className="flex items-center gap-3 px-4 py-4 bg-[#F7F5F0] hover:bg-white transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#E2DDD5] bg-white flex-shrink-0">
                    {startup.logo_url ? (
                      <img src={startup.logo_url} alt={startup.name} className="max-h-full max-w-full object-contain p-0.5" />
                    ) : (
                      <span className="text-sm text-[#CCC]" style={{ fontFamily: "'Georgia', serif" }}>{startup.name.charAt(0)}</span>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-sm font-semibold text-[#1C1C1C] truncate" style={{ fontFamily: "'Georgia', serif" }}>{startup.name}</p>
                      <BadgeCheck className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-[#AAA] uppercase tracking-wider font-bold">{startup.industry || startup.category || "Startup"}</span>
                      {startup.founded_year && <><span className="text-[#DDD]">·</span><span className="text-[10px] text-[#BBB] num-font">{startup.founded_year}</span></>}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#CCC] flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* ── PAGINATION (FIXED LINKS) ── */}
          {totalPages > 1 && (
            <div className="mt-10 flex items-center justify-center gap-2 fade-up-4">
              <Link
                href={`?page=${Math.max(1, currentPage - 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`flex items-center gap-1.5 px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors ${
                  currentPage === 1 ? "pointer-events-none opacity-30" : ""
                }`}
              >
                <ChevronLeft className="w-3.5 h-3.5" /> Prev
              </Link>

              <div className="flex items-center gap-1">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) pageNum = i + 1;
                  else if (currentPage <= 3) pageNum = i + 1;
                  else if (currentPage >= totalPages - 2) pageNum = totalPages - 4 + i;
                  else pageNum = currentPage - 2 + i;
                  
                  return (
                    <Link
                      key={pageNum}
                      href={`?page=${pageNum}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                      className={`w-8 h-8 flex items-center justify-center border text-[11px] font-bold num-font transition-colors ${
                        pageNum === currentPage
                          ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                          : "border-[#D5D0C8] bg-white text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
                      }`}
                    >
                      {pageNum}
                    </Link>
                  );
                })}
              </div>

              <Link
                href={`?page=${Math.min(totalPages, currentPage + 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`flex items-center gap-1.5 px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase tracking-wider text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors ${
                  currentPage === totalPages ? "pointer-events-none opacity-30" : ""
                }`}
              >
                Next <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </PageTransition>

        {/* ── BOTTOM TRUST BAR ── */}
        <div className="mt-14 pt-6 border-t border-[#D5D0C8] flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {[
            { icon: BadgeCheck, text: "Every listing manually verified" },
            { icon: Activity, text: "Live data · Updates every 10 min" },
            { icon: TrendingUp, text: "Ecosystem-backed intelligence" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <item.icon className="w-3.5 h-3.5 text-[#BBB]" />
              <span className="text-[11px] text-[#888]">{item.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
