import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import RegistrySearch from "@/components/registry-search";
import PageTransition from "@/components/page-transition";
import { ChevronLeft, ChevronRight, Search, BadgeCheck, TrendingUp, Zap, Activity, Filter, ArrowRight } from "lucide-react";

export const revalidate = 0; // Search और Pagination के लिए 0 बेहतर है

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
  const params = await (searchParams as any);

  const searchQuery = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";
  
  // Search होने पर हमेशा Page 1 दिखाओ
  const currentPage = params?.page && !searchQuery ? Number(params.page) : 1;

  const ITEMS_PER_PAGE = 12;
  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase.from("startups").select("*", { count: "exact" });

  if (searchQuery) {
    query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,industry.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`);
  }

  if (sectorFilter) {
    query = query.ilike('industry', `%${sectorFilter}%`);
  }

  const { data: startups, count, error } = await query
    .order("name", { ascending: true })
    .range(from, to);

  if (error) console.log("SUPABASE ERROR:", error);

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#F7F5F0] text-[#1C1C1C] min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up-1 { animation: fadeUp 0.5s 0.05s ease both; }
        .fade-up-2 { animation: fadeUp 0.5s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.5s 0.25s ease both; }
        .fade-up-4 { animation: fadeUp 0.5s 0.38s ease both; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); border-color: #1C1C1C !important; transition: all 0.2s; }
        .num-font { font-variant-numeric: tabular-nums; }
      `}</style>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* ── MASTHEAD ── */}
        <div className="border-b-2 border-[#1C1C1C] pb-5 mb-0 fade-up-1">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-2">UpForge · Public Registry</p>
              <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight leading-none text-[#1C1C1C]" style={{ fontFamily: "'Georgia', serif" }}>
                Startup Registry
              </h1>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5">
                <PulseDot color="green" />
                <span className="text-[10px] font-semibold text-[#555] uppercase tracking-wide">Live · {count || 0} Profiles</span>
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
                <p className="text-sm font-semibold text-[#1C1C1C] leading-snug mb-1" style={{ fontFamily: "'Georgia', serif" }}>{insights.spotlight.headline}</p>
                <p className="text-[11px] text-[#888]">{insights.spotlight.sub}</p>
              </div>
            </div>
          </div>
          {[{ label: "New This Week", value: insights.registryStats.newThisWeek, sub: "added" }, { label: "Most Active", value: insights.registryStats.mostActiveSector, sub: "sector" }, { label: "Top City", value: insights.registryStats.topCity, sub: "listing" }].map((stat, i) => (
            <div key={i} className="py-5 px-4 sm:px-6 border-l border-[#D5D0C8]">
              <p className="num-font text-xl font-semibold text-[#1C1C1C]">{stat.value}</p>
              <p className="text-[9px] text-[#AAA] uppercase font-bold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── SEARCH (Using RegistrySearch Component) ── */}
        <div className="py-8 border-b border-[#D5D0C8] fade-up-3">
          <RegistrySearch />
          
          {(searchQuery || sectorFilter) && (
            <div className="mt-4 flex items-center gap-3">
              <p className="text-[11px] text-[#888]">
                Found {count || 0} profiles {searchQuery && <span>for "<span className="text-[#1C1C1C] font-bold">{searchQuery}</span>"</span>}
              </p>
              <Link href="/startup" className="text-[10px] text-red-500 hover:underline uppercase font-bold tracking-tighter">Clear Search</Link>
            </div>
          )}
        </div>

        {/* ── CONTENT GRID ── */}
        <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>
          
          {/* DESKTOP ONLY GRID (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#D5D0C8] border border-[#D5D0C8] mt-8 fade-up-4">
            {startups?.map((startup) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}>
                <article className="bg-[#F7F5F0] p-6 card-hover h-full flex flex-col border border-transparent">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 flex items-center justify-center border border-[#E2DDD5] bg-white flex-shrink-0 overflow-hidden">
                      {startup.logo_url ? <img src={startup.logo_url} alt="" className="max-h-full max-w-full object-contain p-1" /> : <span className="text-lg text-[#CCC]">{startup.name[0]}</span>}
                    </div>
                    <span className="text-[10px] text-[#AAA] num-font">{startup.founded_year || "EST."}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1C1C1C] mb-2 leading-tight" style={{ fontFamily: "'Georgia', serif" }}>{startup.name}</h3>
                  <p className="text-[12px] text-[#666] line-clamp-3 leading-relaxed flex-1 mb-4">{startup.description}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-[#EEEAE3]">
                    <span className="text-[9px] text-[#AAA] uppercase tracking-wider font-bold">{startup.industry || "Startup"}</span>
                    <ArrowRight className="w-3 h-3 text-[#CCC]" />
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {/* MOBILE ONLY LIST (Always one-line on small screens) */}
          <div className="md:hidden divide-y divide-[#E8E4DC] border border-[#D5D0C8] mt-8 fade-up-4">
            {startups?.map((startup) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`}>
                <div className="flex items-center gap-3 px-4 py-4 bg-[#F7F5F0] hover:bg-white transition-colors">
                  <div className="w-10 h-10 flex items-center justify-center border border-[#E2DDD5] bg-white flex-shrink-0 overflow-hidden">
                    {startup.logo_url ? <img src={startup.logo_url} alt="" className="max-h-full max-w-full object-contain p-0.5" /> : <span className="text-sm text-[#CCC]">{startup.name[0]}</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <p className="text-sm font-semibold text-[#1C1C1C] truncate" style={{ fontFamily: "'Georgia', serif" }}>{startup.name}</p>
                      <BadgeCheck className="w-3 h-3 text-emerald-500 flex-shrink-0" />
                    </div>
                    <span className="text-[10px] text-[#AAA] uppercase tracking-wider font-bold">{startup.industry || "Startup"}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#CCC] flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>

          {/* Empty State */}
          {(!startups || startups.length === 0) && (
            <div className="flex flex-col items-center justify-center py-32 text-center border border-[#D5D0C8] bg-white">
              <Search className="w-10 h-10 text-[#DDD] mb-4" />
              <p className="text-xl font-bold text-[#1C1C1C]" style={{ fontFamily: "serif" }}>No profiles found</p>
              <Link href="/startup" className="mt-6 text-xs bg-[#1C1C1C] text-white px-6 py-2 uppercase tracking-widest">Reset Registry</Link>
            </div>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2 fade-up-4">
              <Link
                href={`?page=${Math.max(1, currentPage - 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase ${currentPage === 1 ? "opacity-30 pointer-events-none" : "hover:border-black"}`}
              >
                Prev
              </Link>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }).map((_, i) => {
                  const p = i + 1;
                  if (p < currentPage - 2 || p > currentPage + 2) return null;
                  return (
                    <Link
                      key={p}
                      href={`?page=${p}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                      className={`w-10 h-10 flex items-center justify-center border text-xs font-bold ${currentPage === p ? "bg-black text-white border-black" : "bg-white hover:border-black"}`}
                    >
                      {p}
                    </Link>
                  );
                })}
              </div>
              <Link
                href={`?page=${Math.min(totalPages, currentPage + 1)}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase ${currentPage === totalPages ? "opacity-30 pointer-events-none" : "hover:border-black"}`}
              >
                Next
              </Link>
            </div>
          )}
        </PageTransition>

      </div>
    </div>
  );
}
