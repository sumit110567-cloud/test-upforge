// components/StartupRegistry.tsx  ← CLIENT COMPONENT
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback, useTransition } from "react";
import {
  ChevronLeft, ChevronRight, BadgeCheck, ArrowUpRight,
  Calendar, Star, Search, SlidersHorizontal,
  X, TrendingUp, Clock, AlignLeft, ChevronDown, Loader2,
} from "lucide-react";

// ─── TYPES ─────────────────────────────────────────────────────────────────

interface Startup {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo_url?: string;
  website?: string;
  founders?: string;
  founded_year?: number;
  category?: string;
  is_featured?: boolean;
  created_at?: string;
}

interface Props {
  startups: Startup[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  sectorFilter: string;
  searchQuery: string;
  yearFilter: string;
  sortBy: string;
  uniqueYears: number[];
}

// ─── CONSTANTS ──────────────────────────────────────────────────────────────

const SECTORS = [
  { name: "AI/ML",        hot: true  },
  { name: "FinTech",      hot: true  },
  { name: "SaaS",         hot: true  },
  { name: "Space Tech",   hot: true  },
  { name: "Climate Tech", hot: false },
  { name: "D2C Brands",   hot: false },
  { name: "HealthTech",   hot: false },
  { name: "EdTech",       hot: false },
  { name: "DeepTech",     hot: false },
  { name: "Gaming",       hot: false },
];

const SORT_OPTIONS = [
  { value: "name",   label: "Name A–Z",     Icon: AlignLeft  },
  { value: "newest", label: "Newest First", Icon: Clock      },
  { value: "year",   label: "Founded Year", Icon: Calendar   },
];

// ─── COMPONENT ──────────────────────────────────────────────────────────────

export default function StartupRegistry({
  startups,
  totalCount,
  totalPages,
  currentPage,
  sectorFilter,
  searchQuery,
  yearFilter,
  sortBy,
  uniqueYears,
}: Props) {
  const router   = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [localSearch,   setLocalSearch]   = useState(searchQuery);
  const [filterOpen,    setFilterOpen]    = useState(false);
  const [sortOpen,      setSortOpen]      = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [mounted,       setMounted]       = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => { setMounted(true); }, []);

  // Sync local search if server-side query changes (e.g. back/forward)
  useEffect(() => { setLocalSearch(searchQuery); }, [searchQuery]);

  // Build URL helper — preserves all active params, merges overrides
  const buildUrl = useCallback(
    (overrides: Record<string, string | undefined>) => {
      const base: Record<string, string | undefined> = {
        sector: sectorFilter || undefined,
        q:      searchQuery  || undefined,
        year:   yearFilter   || undefined,
        sort:   (sortBy && sortBy !== "name") ? sortBy : undefined,
        page:   currentPage > 1 ? String(currentPage) : undefined,
      };
      const merged = { ...base, ...overrides };
      const params = new URLSearchParams();
      Object.entries(merged).forEach(([k, v]) => { if (v) params.set(k, v); });
      const qs = params.toString();
      return `${pathname}${qs ? `?${qs}` : ""}`;
    },
    [pathname, sectorFilter, searchQuery, yearFilter, sortBy, currentPage]
  );

  // Debounced search → router push
  useEffect(() => {
    clearTimeout(debounceRef.current);
    if (localSearch === searchQuery) return;
    debounceRef.current = setTimeout(() => {
      startTransition(() => {
        router.push(buildUrl({ q: localSearch || undefined, page: undefined }));
      });
    }, 420);
    return () => clearTimeout(debounceRef.current);
  }, [localSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = () => { setSortOpen(false); setFilterOpen(false); };
    document.addEventListener("click", handler, { capture: false });
    return () => document.removeEventListener("click", handler, { capture: false });
  }, []);

  const hasFilters   = !!(sectorFilter || searchQuery || yearFilter || (sortBy && sortBy !== "name"));
  const showFeatured = currentPage === 1 && !sectorFilter && !searchQuery && !yearFilter;
  const featuredStartups = showFeatured ? startups.slice(0, 3) : [];
  const gridStartups     = showFeatured ? startups.slice(3) : startups;

  if (!mounted) return null;

  return (
    <>
      <style>{CSS}</style>

      <div className="rp" style={{ minHeight: "100vh", background: "var(--parch)" }}>

        {/* ── BREADCRUMB ── */}
        <nav className="sf" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }}>UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>Startup Registry</li>
            </ol>
          </div>
        </nav>

        {/* ── MASTHEAD ── */}
        <header style={{ background: "var(--parch)", borderBottom: "3px solid var(--ink)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <div style={{ textAlign: "center", padding: "clamp(16px,2.5vw,28px) 0 clamp(12px,1.8vw,18px)", borderBottom: "1px solid var(--rule2)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
                <div style={{ height: 1, width: 48, background: "var(--rule)" }} />
                <span className="sf" style={{ fontSize: 8.5, letterSpacing: "0.36em", textTransform: "uppercase", color: "var(--ink5)", fontWeight: 700 }}>
                  India Edition · 2026
                </span>
                <div style={{ height: 1, width: 48, background: "var(--rule)" }} />
              </div>
              <h1 className="pf" style={{ fontSize: "clamp(2.6rem,7vw,5.8rem)", fontWeight: 900, lineHeight: 0.9, color: "var(--ink)", letterSpacing: "-0.025em", marginBottom: 12 }}>
                Startup Registry
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", fontStyle: "italic", color: "var(--ink4)", marginBottom: 14, lineHeight: 1.5 }}>
                India's independent registry of verified builders — free, structured, permanent.
              </p>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span className="ldot" />
                  <span className="sf" style={{ fontSize: 9, color: "#15803D", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>
                    Live · {totalCount.toLocaleString()} Profiles
                  </span>
                </div>
                <div style={{ width: 1, height: 12, background: "var(--rule)" }} />
                <span className="vbadge"><BadgeCheck style={{ width: 9, height: 9 }} /> All Verified</span>
                <div style={{ width: 1, height: 12, background: "var(--rule)" }} />
                <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                  Updated Daily
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(32px,5vw,60px)" }}>

          {/* ── SEARCH + FILTER BAR ── */}
          <div style={{ padding: "14px 0", borderBottom: "1px solid var(--rule2)" }}>

            {/* Top row */}
            <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 10 }}>

              {/* Search */}
              <div className={`search-wrap${searchFocused ? " focused" : ""}${isPending ? " loading" : ""}`}
                style={{ flex: 1, position: "relative" }}>
                <div style={{ position: "absolute", left: 13, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", zIndex: 1 }}>
                  {isPending
                    ? <Loader2 style={{ width: 13, height: 13, color: "var(--gold2)", animation: "spin 0.8s linear infinite" }} />
                    : <Search  style={{ width: 13, height: 13, color: searchFocused ? "var(--gold2)" : "var(--ink5)" }} />
                  }
                </div>
                <input
                  type="text"
                  placeholder="Search startups, founders, categories…"
                  value={localSearch}
                  onChange={e => setLocalSearch(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={()  => setSearchFocused(false)}
                  className="search-input sf"
                  style={{
                    width: "100%",
                    paddingLeft: 36,
                    paddingRight: localSearch ? 36 : 14,
                    height: 40,
                    border: "1.5px solid",
                    fontSize: 12,
                    fontWeight: 500,
                    borderColor: searchFocused ? "var(--ink)" : "var(--rule2)",
                    background: searchFocused ? "var(--white)" : "var(--parch2)",
                    color: "var(--ink)",
                    outline: "none",
                    transition: "border-color .2s, background .2s, box-shadow .2s",
                    letterSpacing: "0.01em",
                  }}
                />
                {localSearch && (
                  <button
                    onClick={() => {
                      setLocalSearch("");
                      startTransition(() => router.push(buildUrl({ q: undefined, page: undefined })));
                    }}
                    style={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", padding: 4, display: "flex", alignItems: "center" }}
                  >
                    <X style={{ width: 11, height: 11, color: "var(--ink5)" }} />
                  </button>
                )}
                {isPending && (
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 2, overflow: "hidden" }}>
                    <div className="scan-line" />
                  </div>
                )}
              </div>

              {/* Sort */}
              <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => { setSortOpen(s => !s); setFilterOpen(false); }}
                  className={`ctrl-btn sf${sortOpen ? " active" : ""}`}
                >
                  <TrendingUp style={{ width: 11, height: 11 }} />
                  <span className="hide-xs">
                    {SORT_OPTIONS.find(s => s.value === sortBy)?.label ?? "Sort"}
                  </span>
                  <ChevronDown style={{ width: 9, height: 9, transform: sortOpen ? "rotate(180deg)" : "none", transition: "transform .2s" }} />
                </button>
                {sortOpen && (
                  <div className="dropdown" style={{ right: 0, minWidth: 160 }}>
                    {SORT_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        className={`drop-item sf${sortBy === opt.value ? " on" : ""}`}
                        onClick={() => {
                          setSortOpen(false);
                          startTransition(() => router.push(buildUrl({ sort: opt.value === "name" ? undefined : opt.value, page: undefined })));
                        }}
                      >
                        <opt.Icon style={{ width: 10, height: 10 }} />
                        {opt.label}
                        {sortBy === opt.value && <span style={{ marginLeft: "auto", fontSize: 10 }}>✓</span>}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Filter toggle */}
              <div style={{ position: "relative" }} onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => { setFilterOpen(s => !s); setSortOpen(false); }}
                  className={`ctrl-btn sf${filterOpen ? " active" : ""}${hasFilters ? " has-filter" : ""}`}
                >
                  <SlidersHorizontal style={{ width: 11, height: 11 }} />
                  <span className="hide-xs">Filters</span>
                  {hasFilters && <span className="filter-dot" />}
                </button>
              </div>
            </div>

            {/* Sector pills */}
            <div className="strip" style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--ink5)", flexShrink: 0 }}>
                Sector:
              </span>
              <Link href={buildUrl({ sector: undefined, page: undefined })}
                className={`pill${!sectorFilter ? " on" : ""}`}>
                All
              </Link>
              {SECTORS.map((s, i) => (
                <Link
                  key={i}
                  href={buildUrl({ sector: s.name, page: undefined })}
                  className={`pill${sectorFilter === s.name ? " on" : ""}`}
                  style={sectorFilter !== s.name && s.hot ? { borderColor: "rgba(180,83,9,.3)", color: "var(--gold)" } : {}}
                >
                  {s.hot && sectorFilter !== s.name && <span style={{ fontSize: 8 }}>🔥</span>}
                  {s.name}
                </Link>
              ))}
            </div>

            {/* Expanded filter panel */}
            {filterOpen && (
              <div className="filter-panel" style={{ marginTop: 10 }}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 24, alignItems: "flex-start" }}>
                  {/* Year */}
                  <div>
                    <label className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--ink5)", display: "block", marginBottom: 8 }}>
                      Founded Year
                    </label>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                      <button
                        className={`pill${!yearFilter ? " on" : ""}`}
                        onClick={() => startTransition(() => router.push(buildUrl({ year: undefined, page: undefined })))}
                      >
                        Any Year
                      </button>
                      {uniqueYears.slice(0, 14).map(yr => (
                        <button
                          key={yr}
                          className={`pill${yearFilter === String(yr) ? " on" : ""}`}
                          onClick={() => startTransition(() => router.push(buildUrl({ year: String(yr), page: undefined })))}
                        >
                          {yr}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Active filters */}
                {hasFilters && (
                  <div style={{ marginTop: 14, display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", paddingTop: 12, borderTop: "1px solid var(--rule2)" }}>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.16em" }}>Active:</span>
                    {sectorFilter && (
                      <span className="active-tag">
                        {sectorFilter}
                        <button className="tag-x" onClick={() => startTransition(() => router.push(buildUrl({ sector: undefined, page: undefined })))}>×</button>
                      </span>
                    )}
                    {searchQuery && (
                      <span className="active-tag">
                        &ldquo;{searchQuery}&rdquo;
                        <button className="tag-x" onClick={() => { setLocalSearch(""); startTransition(() => router.push(buildUrl({ q: undefined, page: undefined }))); }}>×</button>
                      </span>
                    )}
                    {yearFilter && (
                      <span className="active-tag">
                        Est. {yearFilter}
                        <button className="tag-x" onClick={() => startTransition(() => router.push(buildUrl({ year: undefined, page: undefined })))}>×</button>
                      </span>
                    )}
                    <Link href="/startup" className="sf" style={{ fontSize: 9, color: "var(--gold3)", textDecoration: "underline", fontWeight: 700, marginLeft: 4 }}>
                      Clear all
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ── RESULTS HEADER ── */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "14px 0 12px" }}>
            <span className="sh-l">
              {sectorFilter || (searchQuery ? `"${searchQuery}"` : "All Startups")}
            </span>
            <span className="rp" style={{ fontSize: 11, fontStyle: "italic", color: "var(--gold2)" }}>
              — {totalCount.toLocaleString()} profiles
            </span>
            <div className="sh-r" />
            {isPending && (
              <span className="sf" style={{ fontSize: 8, color: "var(--gold2)", textTransform: "uppercase", letterSpacing: "0.14em", display: "flex", alignItems: "center", gap: 4 }}>
                <Loader2 style={{ width: 9, height: 9, animation: "spin 0.8s linear infinite" }} />
                Searching…
              </span>
            )}
            <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", flexShrink: 0, fontWeight: 700, letterSpacing: "0.12em" }}>
              Pg. {currentPage} / {totalPages || 1}
            </span>
          </div>

          {/* ── CONTENT AREA ── */}
          <div className={`content-area${isPending ? " fading" : ""}`}>

            {/* FEATURED TOP 3 */}
            {featuredStartups.length === 3 && (
              <div style={{ marginBottom: 28 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                  <Star style={{ width: 10, height: 10, color: "var(--gold2)" }} />
                  <span className="sh-l">Featured in This Edition</span>
                  <div className="sh-r" />
                </div>
                <div className="feat-grid">
                  {featuredStartups.map((startup, fi) => (
                    <Link key={startup.id} href={`/startup/${startup.slug}`} className="feat-card">
                      <div className="feat-img">
                        {startup.logo_url ? (
                          <img src={startup.logo_url} alt={startup.name} />
                        ) : (
                          <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: (["#E8E0D0","#E0D8CC","#D8D0C4"])[fi] }}>
                            <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(26,18,8,0.10)" }}>{startup.name.charAt(0)}</span>
                          </div>
                        )}
                        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.1) 55%, transparent 100%)" }} />
                        <div className="sf" style={{ position: "absolute", top: 12, left: 12, background: "var(--ink)", color: "white", fontSize: 7, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", padding: "3px 9px", border: "1px solid rgba(255,255,255,0.12)" }}>
                          No.{String(fi + 1).padStart(2, "0")}
                        </div>
                        <div style={{ position: "absolute", top: 12, right: 12 }}>
                          <BadgeCheck style={{ width: 14, height: 14, color: "#4ADE80" }} />
                        </div>
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 14px 13px" }}>
                          <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "rgba(255,255,255,0.55)", display: "block", marginBottom: 4 }}>
                            {startup.category || "Startup"}
                          </span>
                          <h2 className="pf" style={{ fontSize: "1.18rem", fontWeight: 700, color: "white", lineHeight: 1.15, margin: 0 }}>
                            {startup.name}
                          </h2>
                        </div>
                      </div>
                      <div style={{ padding: "16px 16px 15px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p className="rp" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.82, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          {startup.description || "Building for India's next decade."}
                        </p>
                        {startup.founders && (
                          <p className="sf" style={{ fontSize: 9, color: "var(--ink5)", marginBottom: 10, letterSpacing: "0.04em" }}>
                            <span style={{ fontWeight: 700, color: "var(--ink4)" }}>Founders: </span>
                            {startup.founders}
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 11, borderTop: "1px solid var(--rule2)" }}>
                          <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
                            {startup.founded_year && (
                              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                                <Calendar style={{ width: 9, height: 9, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)" }}>{startup.founded_year}</span>
                              </div>
                            )}
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                            <span className="vbadge"><BadgeCheck style={{ width: 8, height: 8 }} /> Verified</span>
                            <ArrowUpRight style={{ width: 13, height: 13, color: "var(--ink4)" }} />
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* ALL STARTUPS GRID — desktop */}
            {gridStartups.length > 0 && (
              <>
                {showFeatured && (
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                    <span className="sh-l">All Startups</span>
                    <div className="sh-r" />
                  </div>
                )}
                <div className="card-grid hide-mob">
                  {gridStartups.map((startup, idx) => (
                    <Link
                      key={startup.id}
                      href={`/startup/${startup.slug}`}
                      className="s-card"
                      style={{ animationDelay: `${Math.min(idx, 11) * 0.04}s` }}
                    >
                      <div style={{ padding: "15px 15px 12px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid var(--rule2)" }}>
                        <div className="logo-circle">
                          {startup.logo_url
                            ? <img src={startup.logo_url} alt={startup.name} />
                            : <span className="pf" style={{ fontSize: "1.05rem", fontWeight: 900, color: "var(--ink4)" }}>{startup.name.charAt(0)}</span>
                          }
                        </div>
                        <div style={{ minWidth: 0, flex: 1 }}>
                          <h3 className="pf" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.2, marginBottom: 3, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            {startup.name}
                          </h3>
                          <span className="sf" style={{ fontSize: 7.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", display: "block" }}>
                            {(startup.category || "Startup").slice(0, 22)}
                          </span>
                        </div>
                        <BadgeCheck style={{ width: 12, height: 12, color: "#15803D", flexShrink: 0 }} />
                      </div>
                      <div style={{ padding: "12px 15px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <p className="rp" style={{ fontSize: 11.5, color: "var(--ink3)", lineHeight: 1.78, flex: 1, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                          {startup.description || "Building for India's next decade."}
                        </p>
                        {startup.founders && (
                          <p className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", marginBottom: 8, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                            <span style={{ fontWeight: 700, color: "var(--ink4)" }}>↳ </span>
                            {startup.founders}
                          </p>
                        )}
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid var(--rule2)" }}>
                          <div style={{ display: "flex", gap: 9, alignItems: "center" }}>
                            {startup.founded_year && (
                              <div style={{ display: "flex", alignItems: "center", gap: 3 }}>
                                <Calendar style={{ width: 7.5, height: 7.5, color: "var(--ink5)" }} />
                                <span className="sf" style={{ fontSize: 8, color: "var(--ink5)" }}>{startup.founded_year}</span>
                              </div>
                            )}
                          </div>
                          <ArrowUpRight style={{ width: 11, height: 11, color: "var(--ink5)" }} />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {/* MOBILE LIST */}
            <div className="show-mob" style={{ display: "none", flexDirection: "column", border: "1.5px solid var(--ink)" }}>
              {startups.map((startup, idx) => (
                <Link
                  key={startup.id}
                  href={`/startup/${startup.slug}`}
                  className="m-row"
                  style={{ borderBottom: idx < startups.length - 1 ? "1px solid var(--rule2)" : "none" }}
                >
                  <div style={{ width: 38, height: 38, borderRadius: "50%", flexShrink: 0, border: "1.5px solid var(--rule2)", background: "var(--parch2)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
                    {startup.logo_url
                      ? <img src={startup.logo_url} alt={startup.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      : <span className="pf" style={{ fontSize: "0.88rem", fontWeight: 700, color: "var(--ink4)" }}>{startup.name.charAt(0)}</span>
                    }
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 5, marginBottom: 3 }}>
                      <span className="pf" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {startup.name}
                      </span>
                      <BadgeCheck style={{ width: 9, height: 9, color: "#15803D", flexShrink: 0 }} />
                    </div>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600 }}>
                      {startup.category || "Startup"}
                      {startup.founded_year && ` · ${startup.founded_year}`}
                    </span>
                  </div>
                  <ChevronRight style={{ width: 11, height: 11, color: "var(--ink5)", flexShrink: 0 }} />
                </Link>
              ))}
            </div>

            {/* SKELETON while loading */}
            {isPending && startups.length === 0 && (
              <div className="card-grid">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} style={{ background: "var(--white)" }}>
                    <div style={{ padding: 15, display: "flex", gap: 12, borderBottom: "1px solid var(--rule2)" }}>
                      <div className="skel" style={{ width: 42, height: 42, borderRadius: "50%", flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div className="skel" style={{ height: 12, marginBottom: 8, width: "70%" }} />
                        <div className="skel" style={{ height: 8, width: "45%" }} />
                      </div>
                    </div>
                    <div style={{ padding: "12px 15px 14px" }}>
                      <div className="skel" style={{ height: 9, marginBottom: 7 }} />
                      <div className="skel" style={{ height: 9, marginBottom: 7, width: "85%" }} />
                      <div className="skel" style={{ height: 9, width: "60%" }} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* EMPTY STATE */}
            {startups.length === 0 && !isPending && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "80px 24px", textAlign: "center", border: "1.5px solid var(--ink)", background: "var(--white)" }}>
                <span className="pf" style={{ fontSize: "3.5rem", color: "rgba(26,18,8,0.06)", fontWeight: 900, lineHeight: 1, marginBottom: 18 }}>∅</span>
                <h3 className="pf" style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8 }}>No startups found</h3>
                <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", marginBottom: 24, maxWidth: 300, lineHeight: 1.75 }}>
                  {searchQuery
                    ? <>No results for &ldquo;{searchQuery}&rdquo;. Try a different term.</>
                    : <>No startups in {sectorFilter ? `"${sectorFilter}"` : "this filter"}. Try adjusting your filters.</>
                  }
                </p>
                <Link href="/startup" style={{ display: "inline-flex", alignItems: "center", gap: 8, border: "2px solid var(--ink)", padding: "10px 24px", fontSize: 10, fontWeight: 700, color: "var(--ink)", textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "system-ui", background: "transparent", textDecoration: "none" }}>
                  Clear all filters
                </Link>
              </div>
            )}

            {/* PAGINATION */}
            {totalPages > 1 && (
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
                <Link
                  href={buildUrl({ page: currentPage > 2 ? String(currentPage - 1) : undefined })}
                  className={`pg${currentPage === 1 ? " off" : ""}`}
                >
                  <ChevronLeft style={{ width: 10, height: 10 }} /> Prev
                </Link>
                <div style={{ display: "flex", gap: 4 }}>
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let p: number;
                    if (totalPages <= 5)                    p = i + 1;
                    else if (currentPage <= 3)              p = i + 1;
                    else if (currentPage >= totalPages - 2) p = totalPages - 4 + i;
                    else                                    p = currentPage - 2 + i;
                    return (
                      <Link
                        key={p}
                        href={buildUrl({ page: p === 1 ? undefined : String(p) })}
                        className={`pg${p === currentPage ? " on" : ""}`}
                        style={{ padding: "8px 13px", minWidth: 36, justifyContent: "center" }}
                      >
                        <span className="sf" style={{ fontSize: 11 }}>{p}</span>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href={buildUrl({ page: String(Math.min(totalPages, currentPage + 1)) })}
                  className={`pg${currentPage === totalPages ? " off" : ""}`}
                >
                  Next <ChevronRight style={{ width: 10, height: 10 }} />
                </Link>
              </div>
            )}
          </div>

          {/* ── INSIGHT STRIP ── */}
          <div style={{ marginTop: "clamp(28px,4vw,44px)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <span className="sh-l">UpForge Registry Insights</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px" }}>
              {[
                { v: "~80%",  l: "First-gen founders",    b: "India's unicorn builders mostly had no inherited capital — built with pure conviction." },
                { v: "$950B", l: "Value created under 40", b: "Founders under 40 manage businesses worth more than Switzerland's entire GDP." },
                { v: "126+",  l: "Indian unicorns",        b: "India crossed 126 unicorns. Every founder reading this could build the next one." },
              ].map((item, i) => (
                <div key={i} style={{ padding: "22px 22px 20px", background: "var(--white)", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: 3, background: "var(--gold2)" }} />
                  <p className="pf" style={{ fontSize: "2.3rem", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: 6 }}>{item.v}</p>
                  <p className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.22em", color: "var(--gold2)", marginBottom: 9 }}>{item.l}</p>
                  <p className="rp" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.78 }}>{item.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA BLOCK ── */}
          <div style={{ marginTop: "clamp(28px,5vw,48px)", padding: "clamp(24px,4vw,40px)", background: "var(--ink)", position: "relative", overflow: "hidden", border: "1.5px solid var(--ink)" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2.5, background: "linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3))" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
              <div>
                <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(232,197,71,0.8)", marginBottom: 10 }}>UpForge Registry</p>
                <p className="pf" style={{ fontSize: "clamp(1.1rem,2.8vw,1.7rem)", fontWeight: 700, color: "white", lineHeight: 1.22, marginBottom: 9 }}>
                  Your founder story starts with a verified profile.
                </p>
                <p className="rp" style={{ fontSize: 12.5, color: "rgba(255,255,255,0.4)", lineHeight: 1.75 }}>
                  Independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <Link href="/submit" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold2)", color: "var(--ink)", padding: "13px 24px", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "system-ui", whiteSpace: "nowrap", boxShadow: "3px 3px 0 var(--gold3)", textDecoration: "none" }}>
                List Free →
              </Link>
            </div>
          </div>

          {/* ── FOOTER NAV ── */}
          <nav aria-label="Registry navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(28px,4vw,44px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Indian Startup Founders 2026", h: "/"                    },
                { l: "Top AI Startups India",        h: "/top-ai-startups"     },
                { l: "Indian Unicorns List",          h: "/indian-unicorns"     },
                { l: "Best SaaS Startups",            h: "/best-saas-startups" },
                { l: "Fintech Startups India",        h: "/fintech-startups"   },
                { l: "Edtech Founders India",         h: "/edtech-startups"    },
                { l: "Submit Your Startup",           h: "/submit"             },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </div>
    </>
  );
}

// ─── STYLES ─────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');

  .pf  { font-family: 'Playfair Display', Georgia, serif !important; }
  .rp  { font-family: 'Georgia', 'Times New Roman', serif; }
  .sf  { font-family: system-ui, -apple-system, sans-serif; }

  :root {
    --parch:  #F5F1E8;
    --parch2: #EDE9DF;
    --parch3: #E6E1D6;
    --ink:    #1A1208;
    --ink2:   #2C2010;
    --ink3:   #5A4A30;
    --ink4:   #8C7D65;
    --ink5:   #BBB0A0;
    --rule:   #C8C2B4;
    --rule2:  #D8D2C4;
    --gold:   #B45309;
    --gold2:  #D97706;
    --gold3:  #92400E;
    --goldlt: #FEF3C7;
    --white:  #FDFCF9;
    --green:  #15803D;
  }
  body { background: var(--parch); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  @keyframes shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  @keyframes scanMove {
    0%   { transform: translateX(-100%); }
    100% { transform: translateX(500%); }
  }
  @keyframes lp {
    0%,100% { transform: scale(1);   opacity: 1; }
    50%     { transform: scale(2.2); opacity: 0; }
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Live dot ── */
  .ldot { width:7px;height:7px;border-radius:50%;background:#22C55E;display:inline-block;flex-shrink:0;position:relative; }
  .ldot::after { content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(34,197,94,.25);animation:lp 2.2s ease-in-out infinite; }

  /* ── Pill ── */
  .pill {
    display:inline-flex;align-items:center;gap:4px;
    font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
    padding:5px 13px;border:1px solid var(--rule2);background:var(--white);
    color:var(--ink4);font-family:system-ui,sans-serif;
    transition:border-color .15s,color .15s,background .15s;
    white-space:nowrap;text-decoration:none;cursor:pointer;
  }
  .pill:hover { border-color:var(--ink);color:var(--ink); }
  .pill.on { background:var(--ink);color:white;border-color:var(--ink); }

  /* ── Scrollable strip ── */
  .strip { overflow-x:auto;scrollbar-width:none;-webkit-overflow-scrolling:touch; }
  .strip::-webkit-scrollbar { display:none; }

  /* ── Section header ── */
  .sh-l { font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.28em;color:var(--ink5);font-family:system-ui;white-space:nowrap; }
  .sh-r { flex:1;height:1px;background:var(--rule2); }

  /* ── Verified badge ── */
  .vbadge {
    display:inline-flex;align-items:center;gap:3px;
    font-size:7.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
    color:var(--green);border:1px solid rgba(21,128,61,.28);padding:2px 7px;font-family:system-ui;
  }

  /* ── Search ── */
  .search-input { border-radius:0; }
  .search-wrap.focused .search-input {
    box-shadow: 0 0 0 3px rgba(217,119,6,0.12);
  }

  /* ── Scan animation ── */
  .scan-line {
    position:absolute;top:0;left:0;height:2px;width:50%;
    background:linear-gradient(90deg, transparent, var(--gold2), transparent);
    animation: scanMove 1s ease-in-out infinite;
  }

  /* ── Content fade on transition ── */
  .content-area { transition: opacity .24s ease; }
  .content-area.fading { opacity: 0.32; pointer-events: none; }

  /* ── Control buttons (sort/filter) ── */
  .ctrl-btn {
    display:inline-flex;align-items:center;gap:6px;height:40px;padding:0 14px;
    border:1.5px solid var(--rule2);background:var(--parch2);
    font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;
    color:var(--ink4);cursor:pointer;transition:all .15s;white-space:nowrap;
    position:relative;
  }
  .ctrl-btn:hover, .ctrl-btn.active {
    border-color:var(--ink);color:var(--ink);background:var(--white);
  }
  .ctrl-btn.has-filter { border-color:var(--gold);color:var(--gold); }
  .filter-dot { width:5px;height:5px;border-radius:50%;background:var(--gold2);margin-left:2px; }

  /* ── Dropdown ── */
  .dropdown {
    position:absolute;top:calc(100% + 4px);z-index:50;
    background:var(--white);border:1.5px solid var(--ink);
    box-shadow:4px 4px 0 rgba(26,18,8,0.10);
    animation: fadeUp .18s cubic-bezier(.16,1,.3,1) both;
  }
  .drop-item {
    display:flex;align-items:center;gap:8px;width:100%;padding:9px 14px;
    background:none;border:none;font-size:9px;font-weight:700;
    letter-spacing:.1em;text-transform:uppercase;color:var(--ink4);
    cursor:pointer;transition:background .12s,color .12s;text-align:left;
  }
  .drop-item:hover { background:var(--parch2);color:var(--ink); }
  .drop-item.on { color:var(--gold3);background:var(--goldlt); }

  /* ── Filter panel ── */
  .filter-panel {
    border:1.5px solid var(--rule2);padding:18px 20px;background:var(--white);
    animation: fadeUp .22s cubic-bezier(.16,1,.3,1) both;
    position:relative;
  }
  .filter-panel::before {
    content:'';position:absolute;top:0;left:0;right:0;height:2px;
    background:linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold3));
  }

  /* ── Active filter tags ── */
  .active-tag {
    display:inline-flex;align-items:center;gap:5px;
    font-size:9px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;
    font-family:system-ui;color:var(--gold3);background:var(--goldlt);
    border:1px solid rgba(180,83,9,.25);padding:3px 9px;
  }
  .tag-x {
    background:none;border:none;cursor:pointer;
    color:var(--gold3);font-size:12px;padding:0;line-height:1;font-weight:700;
  }

  /* ── Featured grid ── */
  .feat-grid { display:grid;grid-template-columns:repeat(3,1fr);border:1.5px solid var(--ink);background:var(--ink);gap:1.5px; }
  .feat-card { background:var(--white);display:flex;flex-direction:column;text-decoration:none;position:relative;overflow:hidden;transition:background .18s; }
  .feat-card:hover { background:#FEFCF5; }
  .feat-card::after { content:'';position:absolute;top:0;left:0;right:0;height:3px;background:transparent;transition:background .18s; }
  .feat-card:hover::after { background:var(--gold2); }
  .feat-img { height:170px;position:relative;overflow:hidden;background:var(--parch2);flex-shrink:0;border-bottom:1.5px solid var(--ink); }
  .feat-img img { width:100%;height:100%;object-fit:cover;object-position:center;transition:transform .5s ease; }
  .feat-card:hover .feat-img img { transform:scale(1.04); }

  /* ── Card grid ── */
  .card-grid {
    display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));
    border:1.5px solid var(--ink);background:var(--ink);gap:1.5px;
  }
  .s-card {
    background:var(--white);display:flex;flex-direction:column;text-decoration:none;
    position:relative;transition:background .15s,transform .15s,box-shadow .15s;
    animation: cardIn .38s cubic-bezier(.16,1,.3,1) both;
  }
  .s-card:hover { background:#FEFCF5;transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink);z-index:2; }
  .s-card::before { content:'';position:absolute;top:0;left:0;right:0;height:2.5px;background:transparent;transition:background .15s; }
  .s-card:hover::before { background:var(--gold2); }

  /* ── Logo circle ── */
  .logo-circle { width:42px;height:42px;border-radius:50%;flex-shrink:0;border:1.5px solid var(--rule2);background:var(--parch2);display:flex;align-items:center;justify-content:center;overflow:hidden;transition:border-color .15s; }
  .s-card:hover .logo-circle { border-color:var(--ink4); }
  .logo-circle img { width:100%;height:100%;object-fit:cover; }

  /* ── Skeleton ── */
  .skel {
    background: linear-gradient(90deg, var(--parch2) 25%, var(--parch3) 50%, var(--parch2) 75%);
    background-size: 400px 100%;
    animation: shimmer 1.4s ease-in-out infinite;
    border-radius: 2px;
  }

  /* ── Pagination ── */
  .pg { display:inline-flex;align-items:center;gap:5px;padding:8px 16px;border:1.5px solid var(--rule2);background:var(--white);font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--ink4);font-family:system-ui;transition:all .15s;text-decoration:none; }
  .pg:hover { border-color:var(--ink);color:var(--ink); }
  .pg.on { background:var(--ink);color:white;border-color:var(--ink); }
  .pg.off { opacity:.25;pointer-events:none; }

  /* ── Mobile list ── */
  .m-row { display:flex;align-items:center;gap:13px;padding:14px 16px;background:var(--white);border-bottom:1px solid var(--rule2);text-decoration:none;transition:background .13s; }
  .m-row:hover { background:var(--parch2); }

  /* ── Responsive ── */
  @media (max-width:900px) {
    .feat-grid { grid-template-columns:1fr 1fr !important; }
  }
  @media (max-width:640px) {
    .feat-grid { grid-template-columns:1fr !important; }
    .hide-mob  { display:none !important; }
    .show-mob  { display:flex !important; }
    .card-grid { grid-template-columns:1fr 1fr !important; }
    .hide-xs   { display:none !important; }
  }
  @media (max-width:400px) {
    .card-grid { grid-template-columns:1fr !important; }
  }
`;
