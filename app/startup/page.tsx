import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search } from "lucide-react";

interface Props {
  searchParams: {
    page?: string;
    search?: string;
  };
}

const ITEMS_PER_PAGE = 12;

export default async function StartupsPage({ searchParams }: Props) {
  const supabase = await createClient();

  const currentPage = Number(searchParams.page) > 0 ? Number(searchParams.page) : 1;
  const searchQuery = searchParams.search ?? "";

  const from = (currentPage - 1) * ITEMS_PER_PAGE;
  const to = from + ITEMS_PER_PAGE - 1;

  let query = supabase
    .from("startups")
    .select("id, name, slug, logo_url", { count: "exact" })
    .order("created_at", { ascending: false });

  if (searchQuery) {
    query = query.ilike("name", `%${searchQuery}%`);
  }

  const { data: startups, count, error } = await query.range(from, to);

  if (error) {
    console.error(error);
  }

  const totalPages = Math.ceil((count ?? 0) / ITEMS_PER_PAGE);

  function createPageLink(page: number) {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (page > 1) params.set("page", page.toString());
    return `/startups?${params.toString()}`;
  }

  return (
    <div className="bg-white min-h-screen pt-24 pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight mb-4">
            Startup Registry
          </h1>
          <p className="text-neutral-500">
            India’s structured startup archive.
          </p>
          <div className="mt-3 text-xs tracking-widest uppercase text-neutral-400">
            {count ?? 0} Results
          </div>
        </div>

        {/* SEARCH */}
        <form method="GET" className="mb-20">
          <div className="relative">
            <input
              type="text"
              name="search"
              defaultValue={searchQuery}
              placeholder="Search by startup name..."
              className="w-full border-b border-neutral-300 py-3 pr-10 text-lg focus:outline-none focus:border-black"
            />
            <Search className="absolute right-0 top-3 text-neutral-400 w-5 h-5" />
          </div>
        </form>

        {/* LIST */}
        <div className="space-y-12">
          {startups && startups.length > 0 ? (
            startups.map((startup) => (
              <Link
                key={startup.id}
                href={`/startup/${startup.slug}`}
                className="group block"
              >
                <div className="flex items-center justify-between pb-6 border-b border-neutral-200">

                  <div className="flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-neutral-50 border border-neutral-200">
                      {startup.logo_url ? (
                        <img
                          src={startup.logo_url}
                          alt={startup.name}
                          className="max-h-full max-w-full object-contain"
                        />
                      ) : (
                        <span className="font-serif text-xl text-neutral-400">
                          {startup.name.charAt(0)}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif text-2xl tracking-tight group-hover:underline">
                      {startup.name}
                    </h2>
                  </div>

                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-20 text-neutral-400">
              No startups found.
            </div>
          )}
        </div>

        {/* PAGINATION */}
        {totalPages > 1 && (
          <div className="mt-20 flex items-center justify-center gap-8">

            <Link
              href={createPageLink(currentPage - 1)}
              className={`p-2 border rounded-full ${
                currentPage === 1 ? "pointer-events-none opacity-30" : ""
              }`}
            >
              <ChevronLeft size={18} />
            </Link>

            <span className="text-sm tracking-wide">
              Page {currentPage} of {totalPages}
            </span>

            <Link
              href={createPageLink(currentPage + 1)}
              className={`p-2 border rounded-full ${
                currentPage === totalPages ? "pointer-events-none opacity-30" : ""
              }`}
            >
              <ChevronRight size={18} />
            </Link>

          </div>
        )}

      </div>
    </div>
  );
}
