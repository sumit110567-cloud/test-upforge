"use client";

import { useState, useMemo, useEffect } from "react";
import { createClient } from "@/lib/supabase/client";
import { SearchBar } from "@/components/search-bar";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import { Search, BadgeCheck, ChevronLeft, ChevronRight } from "lucide-react";
import type { StartupDirectoryItem } from "@/types/startup";

export default function StartupsPage() {
  const supabase = createClient();

  const [allStartups, setAllStartups] = useState<StartupDirectoryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = 12;

  // ✅ Fetch Data
  useEffect(() => {
    async function fetchAll() {
      setLoading(true);

      const { data, error } = await supabase
        .from("startups")
        .select("id, name, slug, logo_url, description, founded_year, category")
        .order("founded_year", { ascending: false, nullsFirst: false });

      if (error) {
        console.error("Supabase Error:", error);
      } else if (data) {
        setAllStartups(data);
      }

      setLoading(false);
    }

    fetchAll();
  }, [supabase]);

  // ✅ Reset page when search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [query]);

  // ✅ Search Filter
  const filteredStartups = useMemo(() => {
    if (!query) return allStartups;

    return allStartups.filter((s) =>
      s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.category?.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, allStartups]);

  // ✅ Pagination
  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredStartups.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredStartups, currentPage]);

  const totalPages = Math.ceil(filteredStartups.length / ITEMS_PER_PAGE);

  return (
    <div className="bg-[#FCFCFC] min-h-screen pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-5xl tracking-tight mb-4">
            Startup Registry
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            India's verified startup database.
          </p>
          <div className="mt-4 text-xs text-gray-400 tracking-widest uppercase">
            {filteredStartups.length} Profiles Found
          </div>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto mb-16">
          <SearchBar query={query} setQuery={setQuery} />
        </div>

        {/* Grid */}
        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-64" />
            ))}
          </div>
        ) : paginatedItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {paginatedItems.map((startup) => (
                <Link key={startup.id} href={`/startup/${startup.slug}`} className="group">
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-4">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 border rounded-full disabled:opacity-30"
                >
                  <ChevronLeft size={20} />
                </button>

                <span className="text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>

                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 border rounded-full disabled:opacity-30"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 border-2 border-dashed border-gray-100">
            <Search className="h-10 w-10 text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-serif">
              Afsos! Koi match nahi mila.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
