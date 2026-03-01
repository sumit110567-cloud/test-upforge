import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import RegistrySearch from "@/components/registry-search";
import PageTransition from "@/components/page-transition";
import { ChevronLeft, ChevronRight, Search, BadgeCheck, TrendingUp, Zap, Activity, Filter, ArrowRight } from "lucide-react";

export const revalidate = 0; // Pagination और Search के लिए इसे 0 रखना बेहतर है ताकि तुरंत अपडेट दिखे

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
            content: `Return ONLY valid JSON...`, // Content truncated for brevity
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

  // Search Params parsing
  const params = await searchParams; // Next.js 15+ needs await
  const currentPage = params?.page ? parseInt(params.page) : 1;
  const searchQuery = params?.search?.trim() ?? "";
  const sectorFilter = params?.sector?.trim() ?? "";

  const ITEMS_PER_PAGE = 12;
  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase.from("startups").select("*", { count: "exact" });

  if (searchQuery) {
    query = query.or(`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,industry.ilike.%${searchQuery}%`);
  }

  if (sectorFilter) {
    query = query.ilike('industry', `%${sectorFilter}%`);
  }

  const { data: startups, count, error } = await query
    .order("name", { ascending: true })
    .range(from, to);

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#F7F5F0] text-[#1C1C1C] min-h-screen">
      <style>{`
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up-1 { animation: fadeUp 0.5s 0.05s ease both; }
        .fade-up-2 { animation: fadeUp 0.5s 0.15s ease both; }
        .fade-up-3 { animation: fadeUp 0.5s 0.25s ease both; }
        .fade-up-4 { animation: fadeUp 0.5s 0.38s ease both; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); border-color: #1C1C1C !important; transition: all 0.2s; }
      `}</style>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">
        {/* MASTHEAD */}
        <div className="border-b-2 border-[#1C1C1C] pb-5 mb-0 fade-up-1">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-2">UpForge · Public Registry</p>
              <h1 className="text-[2.2rem] sm:text-[3rem] lg:text-[3.6rem] tracking-tight leading-none text-[#1C1C1C]" style={{ fontFamily: "serif" }}>
                Startup Registry
              </h1>
            </div>
            <div className="flex items-center gap-3 pb-1">
              <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5">
                <PulseDot color="green" />
                <span className="text-[10px] font-semibold text-[#555] uppercase">Live · {count || 0} Profiles</span>
              </div>
            </div>
          </div>
        </div>

        {/* SEARCH SECTION - Fixed with Form */}
        <div className="py-8 border-b border-[#D5D0C8] fade-up-3">
          <form action="/startup" method="GET" className="flex flex-col sm:flex-row gap-0 max-w-3xl">
            <div className="relative flex-1">
              <input
                type="text"
                name="search"
                defaultValue={searchQuery}
                placeholder="Search startups..."
                className="w-full border border-[#D5D0C8] bg-white px-4 py-3 text-sm focus:outline-none focus:border-[#1C1C1C]"
              />
              {sectorFilter && <input type="hidden" name="sector" value={sectorFilter} />}
            </div>
            <button type="submit" className="bg-[#1C1C1C] text-white px-8 py-3 flex items-center justify-center gap-2 hover:bg-[#333]">
              <Search className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Search</span>
            </button>
          </form>
          
          {(searchQuery || sectorFilter) && (
            <div className="mt-4 flex items-center gap-4">
               <p className="text-[11px] text-[#888]">
                Found {count || 0} results {searchQuery && <span>for "{searchQuery}"</span>}
              </p>
              <Link href="/startup" className="text-[11px] underline text-red-600">Clear All</Link>
            </div>
          )}
        </div>

        {/* GRID SECTION */}
        <PageTransition key={`${searchQuery}-${sectorFilter}-${currentPage}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-[#D5D0C8] border border-[#D5D0C8] mt-8">
            {startups?.map((startup) => (
              <Link key={startup.id} href={`/startup/${startup.slug}`} className="bg-[#F7F5F0] p-6 card-hover flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 border border-[#E2DDD5] bg-white flex items-center justify-center overflow-hidden">
                    {startup.logo_url ? <img src={startup.logo_url} alt="" className="p-1 object-contain" /> : <span className="text-xl text-gray-300">{startup.name[0]}</span>}
                  </div>
                  <span className="text-[10px] text-gray-400 font-mono">{startup.founded_year}</span>
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ fontFamily: "serif" }}>{startup.name}</h3>
                <p className="text-xs text-gray-600 line-clamp-3 mb-6 flex-1">{startup.description}</p>
                <div className="pt-4 border-t border-[#EEEAE3] flex justify-between items-center">
                  <span className="text-[9px] font-bold uppercase tracking-tighter text-gray-400">{startup.industry || "General"}</span>
                  <ArrowRight className="w-3 h-3 text-gray-300" />
                </div>
              </Link>
            ))}
          </div>

          {/* PAGINATION */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center items-center gap-2">
              <Link
                href={`?page=${currentPage - 1}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase transition-all ${currentPage <= 1 ? "opacity-30 pointer-events-none" : "hover:border-black"}`}
              >
                Prev
              </Link>
              
              <div className="flex gap-1">
                {[...Array(totalPages)].map((_, i) => {
                  const p = i + 1;
                  if (p < currentPage - 2 || p > currentPage + 2) return null;
                  return (
                    <Link
                      key={p}
                      href={`?page=${p}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                      className={`w-10 h-10 flex items-center justify-center border text-xs font-bold ${currentPage === p ? "bg-black text-white border-black" : "bg-white border-[#D5D0C8] hover:border-black"}`}
                    >
                      {p}
                    </Link>
                  );
                })}
              </div>

              <Link
                href={`?page=${currentPage + 1}${searchQuery ? `&search=${searchQuery}` : ""}${sectorFilter ? `&sector=${sectorFilter}` : ""}`}
                className={`px-4 py-2 border border-[#D5D0C8] bg-white text-[11px] font-bold uppercase transition-all ${currentPage >= totalPages ? "opacity-30 pointer-events-none" : "hover:border-black"}`}
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
