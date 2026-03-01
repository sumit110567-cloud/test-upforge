import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Props {
  searchParams?: {
    page?: string;
    search?: string;
  };
}

export const dynamic = "force-dynamic";

export default async function StartupsPage({ searchParams }: Props) {
  const supabase = await createClient();

  const ITEMS_PER_PAGE_DESKTOP = 12;
  const ITEMS_PER_PAGE_MOBILE = 10;

  const pageParam = Number(searchParams?.page);
  const currentPage = pageParam && pageParam > 0 ? pageParam : 1;

  const searchQuery = searchParams?.search?.trim() ?? "";

  const ITEMS_PER_PAGE = 12; // backend constant (pagination same for all)

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from("startups")
    .select(
      "id, name, slug, logo_url, founded_year, founders",
      { count: "exact" }
    )
    .order("name", { ascending: true });

  if (searchQuery) {
    query = query.ilike("name", `%${searchQuery}%`);
  }

  const { data: startups, count } = await query.range(from, to);

  const totalPages = Math.ceil((count ?? 0) / ITEMS_PER_PAGE);

  function buildURL(page: number) {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (page > 1) params.set("page", page.toString());
    return `/startups?${params.toString()}`;
  }

  return (
    <div className="bg-[#FCFCFC] min-h-screen pt-24 pb-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-3">
            Startup Registry
          </h1>
          <p className="text-gray-500 text-sm sm:text-base">
            India’s structured startup database
          </p>
          <div className="mt-2 text-xs text-gray-400 tracking-widest uppercase">
            {count ?? 0} Results
          </div>
        </div>

        {/* SEARCH */}
        <form method="GET" className="max-w-xl mx-auto mb-14">
          <div className="relative">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search startup name..."
              className="w-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:border-black"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
          </div>
        </form>

        {/* GRID */}
        {startups && startups.length > 0 ? (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
              {startups.map((startup) => (
                <Link
                  key={startup.id}
                  href={`/startup/${startup.slug}`}
                  className="group"
                >
                  <article className="bg-white border border-gray-200 p-4 sm:p-6 hover:border-black transition-all h-full">

                    {/* Year */}
                    <div className="text-xs text-gray-400 mb-2">
                      {startup.founded_year ?? ""}
                    </div>

                    {/* Logo */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 flex items-center justify-center border bg-gray-50">
                      {startup.logo_url ? (
                        <img
                          src={startup.logo_url}
                          alt={startup.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-lg font-serif text-gray-300">
                          {startup.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    {/* Name */}
                    <h2 className="font-serif text-base sm:text-lg line-clamp-1 mb-1">
                      {startup.name}
                    </h2>

                    {/* Founder */}
                    <p className="text-xs text-gray-500 line-clamp-1">
                      {Array.isArray(startup.founders)
                        ? startup.founders.join(", ")
                        : startup.founders ?? ""}
                    </p>

                  </article>
                </Link>
              ))}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div className="mt-16 flex items-center justify-center gap-6">

                <Link
                  href={
                    currentPage > 1
                      ? buildURL(currentPage - 1)
                      : buildURL(1)
                  }
                  className={`p-2 border rounded-full ${
                    currentPage === 1 ? "opacity-30 pointer-events-none" : ""
                  }`}
                >
                  <ChevronLeft size={18} />
                </Link>

                <span className="text-sm">
                  Page {currentPage} of {totalPages}
                </span>

                <Link
                  href={
                    currentPage < totalPages
                      ? buildURL(currentPage + 1)
                      : buildURL(totalPages)
                  }
                  className={`p-2 border rounded-full ${
                    currentPage === totalPages
                      ? "opacity-30 pointer-events-none"
                      : ""
                  }`}
                >
                  <ChevronRight size={18} />
                </Link>

              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 text-gray-400">
            No startups found.
          </div>
        )}

      </div>
    </div>
  );
}
