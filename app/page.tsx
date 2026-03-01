// app/startups/page.tsx

import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { BadgeCheck, ChevronLeft, ChevronRight, Search } from "lucide-react";

const ITEMS_PER_PAGE = 12;

export default async function StartupsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const supabase = await createClient();

  const pageParam = searchParams?.page;
  const searchParam = searchParams?.search;

  const currentPage =
    typeof pageParam === "string" ? parseInt(pageParam) || 1 : 1;

  const searchQuery =
    typeof searchParam === "string" ? searchParam.toLowerCase() : "";

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from("startups")
    .select(
      "id, name, slug, logo_url, description, founded_year, category",
      { count: "exact" }
    )
    .order("founded_year", { ascending: false });

  if (searchQuery) {
    query = query.or(
      `name.ilike.%${searchQuery}%,category.ilike.%${searchQuery}%`
    );
  }

  const { data: startups, count, error } = await query.range(from, to);

  if (error) {
    console.error(error);
  }

  const totalPages = Math.ceil((count || 0) / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFCFC] min-h-screen pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl tracking-tight mb-4">
            Startup Registry
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            India's verified startup database.
          </p>
          <div className="mt-4 text-xs text-gray-400 tracking-widest uppercase">
            {count || 0} Profiles Found
          </div>
        </div>

        {/* Search */}
        <form method="GET" className="max-w-xl mx-auto mb-16">
          <div className="relative">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search startups..."
              className="w-full border border-gray-300 px-4 py-3 pr-10 focus:outline-none"
            />
            <Search className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
          </div>
        </form>

        {startups && startups.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {startups.map((startup) => (
                <Link
                  key={startup.id}
                  href={`/startup/${startup.slug}`}
                  className="group"
                >
                  <article className="bg-white border border-gray-200 p-6 hover:border-black transition-all h-full flex flex-col items-center text-center relative">
                    <span className="absolute top-2 right-2 text-xs font-bold text-gray-400">
                      {startup.founded_year || "N/A"}
                    </span>

                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-gray-50 border">
                      {startup.logo_url ? (
                        <img
                          src={startup.logo_url}
                          alt={startup.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="text-2xl font-serif text-gray-300">
                          {startup.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-1 mb-2">
                      <h3 className="font-serif text-lg line-clamp-1">
                        {startup.name}
                      </h3>
                      <BadgeCheck className="w-4 h-4 text-blue-600" />
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2 mb-4">
                      {startup.description}
                    </p>

                    <span className="text-[10px] border border-gray-200 px-2 py-1 uppercase tracking-widest text-gray-400">
                      {startup.category || "General"}
                    </span>
                  </article>
                </Link>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-16 flex justify-center items-center gap-4">
                <Link
                  href={`?page=${Math.max(
                    1,
                    currentPage - 1
                  )}&search=${searchQuery}`}
                  className={`p-2 border rounded-full ${
                    currentPage === 1 ? "pointer-events-none opacity-30" : ""
                  }`}
                >
                  <ChevronLeft size={20} />
                </Link>

                <span className="text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <Link
                  href={`?page=${Math.min(
                    totalPages,
                    currentPage + 1
                  )}&search=${searchQuery}`}
                  className={`p-2 border rounded-full ${
                    currentPage === totalPages
                      ? "pointer-events-none opacity-30"
                      : ""
                  }`}
                >
                  <ChevronRight size={20} />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-gray-100">
            <p className="text-gray-400 font-serif">
              Afsos! Koi match nahi mila.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
