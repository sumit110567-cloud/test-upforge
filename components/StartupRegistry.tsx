// components/StartupRegistry.tsx  ←  CLIENT COMPONENT
"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect, useRef, useCallback, useTransition } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BadgeCheck,
  ArrowUpRight,
  Calendar,
  Star,
  Search,
  X,
  Loader2,
  ChevronDown,
} from "lucide-react";

// ─── Types ───────────────────────────────────────────────────────────────────

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
  searchQuery: string;
  yearFilter: string;
  sortBy: string;
  uniqueYears: number[];
}

// ─── Constants ───────────────────────────────────────────────────────────────

const SORT_OPTIONS = [
  { value: "name",   label: "Name A–Z"     },
  { value: "newest", label: "Newest First" },
  { value: "year",   label: "Founded Year" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function StartupRegistry({
  startups,
  totalCount,
  totalPages,
  currentPage,
  searchQuery,
  yearFilter,
  sortBy,
  uniqueYears,
}: Props) {
  const router   = useRouter();
  const pathname = usePathname();

  const [isPending, startTransition] = useTransition();
  const [localSearch,   setLocalSearch]   = useState(searchQuery);
  const [yearOpen,      setYearOpen]      = useState(false);
  const [sortOpen,      setSortOpen]      = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const [visible,       setVisible]       = useState(false);

  const debounceRef  = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const yearRef      = useRef<HTMLDivElement>(null);
  const sortRef      = useRef<HTMLDivElement>(null);

  // Page-enter animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 40);
    return () => clearTimeout(t);
  }, []);

  // Sync local search with URL on back/forward
  useEffect(() => { setLocalSearch(searchQuery); }, [searchQuery]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (yearRef.current && !yearRef.current.contains(e.target as Node)) {
        setYearOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Build URL — only include non-default params
  const buildUrl = useCallback(
    (overrides: Record<string, string | undefined>): string => {
      const base: Record<string, string | undefined> = {
        q:    searchQuery   || undefined,
        year: yearFilter    || undefined,
        sort: sortBy !== "name" ? sortBy : undefined,
        page: currentPage > 1 ? String(currentPage) : undefined,
      };
      const merged = { ...base, ...overrides };
      const p = new URLSearchParams();
      Object.entries(merged).forEach(([k, v]) => { if (v) p.set(k, v); });
      const qs = p.toString();
      return `${pathname}${qs ? `?${qs}` : ""}`;
    },
    [pathname, searchQuery, yearFilter, sortBy, currentPage]
  );

  // Debounced search
  useEffect(() => {
    clearTimeout(debounceRef.current);
    if (localSearch === searchQuery) return;
    debounceRef.current = setTimeout(() => {
      startTransition(() => {
        router.push(buildUrl({ q: localSearch || undefined, page: undefined }));
      });
    }, 440);
    return () => clearTimeout(debounceRef.current);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localSearch]);

  const go = (url: string) => startTransition(() => router.push(url));

  // Split featured vs grid on page 1 with no filters
  const isFiltered   = !!(searchQuery || yearFilter);
  const showFeatured = currentPage === 1 && !isFiltered;
  const featuredList = showFeatured ? startups.filter(s => s.is_featured).slice(0, 3) : [];
  const gridList     = showFeatured
    ? startups.filter(s => !featuredList.includes(s))
    : startups;

  const currentSortLabel = SORT_OPTIONS.find(o => o.value === sortBy)?.label ?? "Name A–Z";
  const hasFilters = !!(yearFilter || (sortBy && sortBy !== "name"));

  return (
    <>
      <style>{CSS}</style>

      <div
        className="reg-root"
        style={{
          opacity:    visible ? 1 : 0,
          transform:  visible ? "translateY(0)" : "translateY(16px)",
          transition: "opacity .5s cubic-bezier(.16,1,.3,1), transform .5s cubic-bezier(.16,1,.3,1)",
        }}
      >

        {/* ── BREADCRUMB ── */}
        <nav className="reg-breadcrumb">
          <div className="reg-container">
            <ol className="reg-bc-list">
              <li><Link href="/" className="reg-bc-link">UpForge</Link></li>
              <li className="reg-bc-sep" aria-hidden>/</li>
              <li className="reg-bc-current">Startup Registry</li>
            </ol>
          </div>
        </nav>

        {/* ── MASTHEAD ── */}
        <header className="reg-masthead">
          <div className="reg-container">
            <div className="reg-masthead-inner">

              <div className="reg-eyebrow">
                <span className="reg-eyebrow-line" />
                <span className="reg-eyebrow-text">India Edition · 2026</span>
                <span className="reg-eyebrow-line" />
              </div>

              <h1 className="reg-h1 pf">Startup Registry</h1>

              <p className="reg-sub rp">
                India's independent registry of verified builders — free, structured, permanent.
              </p>

              <div className="reg-meta">
                <span className="reg-live">
                  <span className="reg-ldot" />
                  Live · {totalCount.toLocaleString()} Profiles
                </span>
                <span className="reg-meta-div" />
                <span className="reg-vbadge">
                  <BadgeCheck style={{ width: 9, height: 9 }} />
                  All Verified
                </span>
                <span className="reg-meta-div" />
                <span className="reg-updated">Updated Daily</span>
              </div>

            </div>
          </div>
        </header>

        {/* ── TOOLBAR ── */}
        <div className="reg-toolbar">
          <div className="reg-container reg-toolbar-inner">

            {/* Search */}
            <div className={`reg-search${searchFocused ? " focused" : ""}`}>
              <span className="reg-search-icon" aria-hidden>
                {isPending
                  ? <Loader2 style={{ width: 13, height: 13, animation: "reg-spin .8s linear infinite" }} />
                  : <Search  style={{ width: 13, height: 13 }} />
                }
              </span>
              <input
                type="text"
                className="reg-search-input"
                placeholder="Search startups, founders…"
                value={localSearch}
                onChange={e => setLocalSearch(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={()  => setSearchFocused(false)}
                aria-label="Search startups"
              />
              {localSearch && (
                <button
                  className="reg-search-clear"
                  onClick={() => {
                    setLocalSearch("");
                    go(buildUrl({ q: undefined, page: undefined }));
                  }}
                  aria-label="Clear search"
                >
                  <X style={{ width: 10, height: 10 }} />
                </button>
              )}
              {isPending && <span className="reg-scan" aria-hidden />}
            </div>

            {/* Sort */}
            <div className="reg-dropdown-wrap" ref={sortRef}>
              <button
                className={`reg-ctrl${sortOpen ? " open" : ""}`}
                onClick={() => { setSortOpen(v => !v); setYearOpen(false); }}
                aria-expanded={sortOpen}
                aria-haspopup="listbox"
              >
                <span>{currentSortLabel}</span>
                <ChevronDown
                  style={{
                    width: 10, height: 10, flexShrink: 0,
                    transition: "transform .2s",
                    transform: sortOpen ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
              {sortOpen && (
                <div className="reg-dropdown" role="listbox">
                  {SORT_OPTIONS.map(opt => (
                    <button
                      key={opt.value}
                      role="option"
                      aria-selected={sortBy === opt.value}
                      className={`reg-drop-item${sortBy === opt.value ? " active" : ""}`}
                      onClick={() => {
                        setSortOpen(false);
                        go(buildUrl({ sort: opt.value !== "name" ? opt.value : undefined, page: undefined }));
                      }}
                    >
                      {opt.label}
                      {sortBy === opt.value && <span aria-hidden>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Year filter */}
            <div className="reg-dropdown-wrap" ref={yearRef}>
              <button
                className={`reg-ctrl${yearOpen ? " open" : ""}${yearFilter ? " active-val" : ""}`}
                onClick={() => { setYearOpen(v => !v); setSortOpen(false); }}
                aria-expanded={yearOpen}
                aria-haspopup="listbox"
              >
                <span>{yearFilter ? `Est. ${yearFilter}` : "Year"}</span>
                <ChevronDown
                  style={{
                    width: 10, height: 10, flexShrink: 0,
                    transition: "transform .2s",
                    transform: yearOpen ? "rotate(180deg)" : "none",
                  }}
                />
              </button>
              {yearOpen && (
                <div className="reg-dropdown reg-dropdown-year" role="listbox">
                  <button
                    role="option"
                    aria-selected={!yearFilter}
                    className={`reg-drop-item${!yearFilter ? " active" : ""}`}
                    onClick={() => { setYearOpen(false); go(buildUrl({ year: undefined, page: undefined })); }}
                  >
                    Any Year {!yearFilter && <span aria-hidden>✓</span>}
                  </button>
                  {uniqueYears.map(yr => (
                    <button
                      key={yr}
                      role="option"
                      aria-selected={yearFilter === String(yr)}
                      className={`reg-drop-item${yearFilter === String(yr) ? " active" : ""}`}
                      onClick={() => { setYearOpen(false); go(buildUrl({ year: String(yr), page: undefined })); }}
                    >
                      {yr} {yearFilter === String(yr) && <span aria-hidden>✓</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* Active filter tags */}
          {hasFilters && (
            <div className="reg-container">
              <div className="reg-active-filters">
                {yearFilter && (
                  <span className="reg-af-tag">
                    Est. {yearFilter}
                    <button
                      className="reg-af-x"
                      onClick={() => go(buildUrl({ year: undefined, page: undefined }))}
                      aria-label="Remove year filter"
                    >×</button>
                  </span>
                )}
                {sortBy !== "name" && (
                  <span className="reg-af-tag">
                    {currentSortLabel}
                    <button
                      className="reg-af-x"
                      onClick={() => go(buildUrl({ sort: undefined, page: undefined }))}
                      aria-label="Remove sort"
                    >×</button>
                  </span>
                )}
                <Link href="/startup" className="reg-af-clear">Clear all</Link>
              </div>
            </div>
          )}
        </div>

        {/* ── RESULTS BAR ── */}
        <div className="reg-container reg-results-bar">
          <span className="reg-results-label">
            {searchQuery ? `"${searchQuery}"` : yearFilter ? `Est. ${yearFilter}` : "All Startups"}
          </span>
          <span className="reg-results-count rp">— {totalCount.toLocaleString()} profiles</span>
          <span className="reg-results-rule" />
          {isPending && (
            <span className="reg-searching">
              <Loader2 style={{ width: 9, height: 9, animation: "reg-spin .8s linear infinite" }} />
              Searching…
            </span>
          )}
          <span className="reg-page-label">Pg. {currentPage} / {totalPages || 1}</span>
        </div>

        {/* ── CONTENT ── */}
        <div className={`reg-container reg-content${isPending ? " fading" : ""}`}>

          {/* FEATURED (page 1, no filters, is_featured = true) */}
          {featuredList.length > 0 && (
            <section className="reg-featured-section">
              <div className="reg-section-head">
                <Star style={{ width: 10, height: 10, color: "var(--reg-gold2)" }} />
                <span className="reg-sh-label">Featured This Edition</span>
                <span className="reg-sh-rule" />
              </div>
              <div className="reg-feat-grid">
                {featuredList.map((s, fi) => (
                  <Link key={s.id} href={`/startup/${s.slug}`} className="reg-feat-card">
                    <div className="reg-feat-img">
                      {s.logo_url ? (
                        <img src={s.logo_url} alt={s.name} />
                      ) : (
                        <div className="reg-feat-ph">
                          <span className="pf reg-feat-ph-letter">{s.name.charAt(0)}</span>
                        </div>
                      )}
                      <div className="reg-feat-overlay" />
                      <span className="reg-feat-num">No.{String(fi + 1).padStart(2, "0")}</span>
                      <BadgeCheck className="reg-feat-check" />
                      <div className="reg-feat-caption">
                        <span className="reg-feat-sector">{s.category || "Startup"}</span>
                        <h2 className="pf reg-feat-name">{s.name}</h2>
                      </div>
                    </div>
                    <div className="reg-feat-body">
                      <p className="rp reg-feat-desc">
                        {s.description || "Building for India's next decade."}
                      </p>
                      {s.founders && (
                        <p className="reg-feat-founders">
                          <span className="reg-founders-label">Founders — </span>
                          {s.founders}
                        </p>
                      )}
                      <div className="reg-feat-footer">
                        <div className="reg-feat-meta">
                          {s.founded_year && (
                            <span className="reg-chip">
                              <Calendar style={{ width: 9, height: 9 }} />
                              {s.founded_year}
                            </span>
                          )}
                        </div>
                        <div className="reg-feat-actions">
                          <span className="reg-vbadge">
                            <BadgeCheck style={{ width: 8, height: 8 }} /> Verified
                          </span>
                          <ArrowUpRight style={{ width: 13, height: 13, color: "var(--reg-ink4)" }} />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* GRID */}
          {gridList.length > 0 && (
            <section>
              {showFeatured && featuredList.length > 0 && (
                <div className="reg-section-head">
                  <span className="reg-sh-label">All Startups</span>
                  <span className="reg-sh-rule" />
                </div>
              )}

              {/* Desktop */}
              <div className="reg-grid reg-hide-mob">
                {gridList.map((s, idx) => (
                  <Link
                    key={s.id}
                    href={`/startup/${s.slug}`}
                    className="reg-card"
                    style={{ animationDelay: `${Math.min(idx, 11) * 0.035}s` }}
                  >
                    <div className="reg-card-head">
                      <div className="reg-logo">
                        {s.logo_url
                          ? <img src={s.logo_url} alt={s.name} />
                          : <span className="pf reg-logo-letter">{s.name.charAt(0)}</span>
                        }
                      </div>
                      <div className="reg-card-titles">
                        <h3 className="pf reg-card-name">{s.name}</h3>
                        <span className="reg-card-cat">{(s.category || "Startup").slice(0, 24)}</span>
                      </div>
                      <BadgeCheck className="reg-card-badge" />
                    </div>
                    <div className="reg-card-body">
                      <p className="rp reg-card-desc">
                        {s.description || "Building for India's next decade."}
                      </p>
                      {s.founders && (
                        <p className="reg-card-founders">↳ {s.founders}</p>
                      )}
                      <div className="reg-card-footer">
                        {s.founded_year && (
                          <span className="reg-chip">
                            <Calendar style={{ width: 7, height: 7 }} />
                            {s.founded_year}
                          </span>
                        )}
                        <ArrowUpRight className="reg-card-arrow" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Mobile */}
              <div className="reg-mob-list reg-show-mob">
                {startups.map((s, idx) => (
                  <Link
                    key={s.id}
                    href={`/startup/${s.slug}`}
                    className="reg-mob-row"
                    style={{
                      borderBottom: idx < startups.length - 1
                        ? "1px solid var(--reg-rule2)"
                        : "none",
                    }}
                  >
                    <div className="reg-mob-logo">
                      {s.logo_url
                        ? <img src={s.logo_url} alt={s.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                        : <span className="pf" style={{ fontSize: ".85rem", fontWeight: 700, color: "var(--reg-ink4)" }}>{s.name.charAt(0)}</span>
                      }
                    </div>
                    <div className="reg-mob-info">
                      <div className="reg-mob-name-row">
                        <span className="pf reg-mob-name">{s.name}</span>
                        <BadgeCheck style={{ width: 9, height: 9, color: "#15803D", flexShrink: 0 }} />
                      </div>
                      <span className="reg-mob-meta">
                        {s.category || "Startup"}
                        {s.founded_year && ` · ${s.founded_year}`}
                      </span>
                    </div>
                    <ChevronRight style={{ width: 11, height: 11, color: "var(--reg-ink5)", flexShrink: 0 }} />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Empty */}
          {startups.length === 0 && !isPending && (
            <div className="reg-empty">
              <span className="pf reg-empty-glyph">∅</span>
              <h3 className="pf reg-empty-title">No startups found</h3>
              <p className="rp reg-empty-body">
                {searchQuery
                  ? <>Nothing matched &ldquo;{searchQuery}&rdquo;. Try a different term.</>
                  : <>No startups found for your filters. Try adjusting them.</>
                }
              </p>
              <Link href="/startup" className="reg-empty-btn">Clear filters</Link>
            </div>
          )}

          {/* Skeleton */}
          {isPending && startups.length === 0 && (
            <div className="reg-grid">
              {Array.from({ length: 12 }).map((_, i) => (
                <div key={i} className="reg-skel-card">
                  <div className="reg-skel-head">
                    <div className="reg-skel reg-skel-circle" />
                    <div style={{ flex: 1 }}>
                      <div className="reg-skel" style={{ height: 11, marginBottom: 7, width: "66%" }} />
                      <div className="reg-skel" style={{ height: 8,  width: "44%" }} />
                    </div>
                  </div>
                  <div className="reg-skel-body">
                    <div className="reg-skel" style={{ height: 8, marginBottom: 6 }} />
                    <div className="reg-skel" style={{ height: 8, marginBottom: 6, width: "82%" }} />
                    <div className="reg-skel" style={{ height: 8, width: "58%" }} />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <nav className="reg-pagination" aria-label="Pagination">
              <Link
                href={buildUrl({ page: currentPage > 2 ? String(currentPage - 1) : undefined })}
                className={`reg-pg-btn${currentPage === 1 ? " disabled" : ""}`}
                aria-disabled={currentPage === 1}
              >
                <ChevronLeft style={{ width: 10, height: 10 }} /> Prev
              </Link>
              <div className="reg-pg-nums">
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
                      className={`reg-pg-num${p === currentPage ? " on" : ""}`}
                      aria-current={p === currentPage ? "page" : undefined}
                    >
                      {p}
                    </Link>
                  );
                })}
              </div>
              <Link
                href={buildUrl({ page: String(Math.min(totalPages, currentPage + 1)) })}
                className={`reg-pg-btn${currentPage === totalPages ? " disabled" : ""}`}
                aria-disabled={currentPage === totalPages}
              >
                Next <ChevronRight style={{ width: 10, height: 10 }} />
              </Link>
            </nav>
          )}
        </div>

        {/* ── CTA ── */}
        <div className="reg-container">
          <div className="reg-cta">
            <div className="reg-cta-text">
              <p className="reg-cta-eyebrow">UpForge Registry</p>
              <p className="pf reg-cta-headline">Your founder story starts with a verified profile.</p>
              <p className="rp reg-cta-sub">
                Independently verified and indexed in India's most trusted startup registry. Free forever.
              </p>
            </div>
            <Link href="/submit" className="reg-cta-btn">List Free →</Link>
          </div>
        </div>

        {/* ── FOOTER NAV ── */}
        <nav className="reg-container reg-footer-nav" aria-label="Registry navigation">
          <ul className="reg-footer-links">
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
                <Link href={lnk.h} className="reg-footer-link">{lnk.l}</Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// CSS — all selectors scoped with "reg-" prefix to avoid touching global layout
// ─────────────────────────────────────────────────────────────────────────────

const CSS = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');

  /* Scoped custom properties */
  .reg-root {
    --reg-parch:  #F5F1E8;
    --reg-parch2: #EDE9DF;
    --reg-parch3: #E0DAD0;
    --reg-ink:    #1A1208;
    --reg-ink3:   #5A4A30;
    --reg-ink4:   #8C7D65;
    --reg-ink5:   #BBB0A0;
    --reg-rule:   #C8C2B4;
    --reg-rule2:  #D8D2C4;
    --reg-gold:   #B45309;
    --reg-gold2:  #D97706;
    --reg-gold3:  #92400E;
    --reg-goldlt: #FEF3C7;
    --reg-white:  #FDFCF9;
    --reg-green:  #15803D;
    min-height: 100vh;
    background: var(--reg-parch);
    font-family: Georgia, 'Times New Roman', serif;
  }

  .reg-root .pf { font-family: 'Playfair Display', Georgia, serif !important; }
  .reg-root .rp { font-family: Georgia, 'Times New Roman', serif; }

  .reg-container {
    max-width: 1340px;
    margin-left: auto;
    margin-right: auto;
    padding-left: clamp(16px, 3vw, 36px);
    padding-right: clamp(16px, 3vw, 36px);
  }

  @keyframes reg-fadeUp {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes reg-spin { to { transform: rotate(360deg); } }
  @keyframes reg-shimmer {
    0%   { background-position: -400px 0; }
    100% { background-position:  400px 0; }
  }
  @keyframes reg-scan {
    0%   { transform: translateX(-120%); }
    100% { transform: translateX(600%); }
  }
  @keyframes reg-ldot {
    0%, 100% { transform: scale(1);   opacity: 1; }
    50%       { transform: scale(2.4); opacity: 0; }
  }
  @keyframes reg-cardIn {
    from { opacity: 0; transform: translateY(8px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Breadcrumb ── */
  .reg-breadcrumb {
    background: var(--reg-parch2);
    border-bottom: 1px solid var(--reg-rule2);
    padding: 9px 0;
    font-family: system-ui, sans-serif;
  }
  .reg-bc-list {
    display: flex;
    align-items: center;
    gap: 7px;
    list-style: none;
    font-size: 9px;
    color: var(--reg-ink5);
    text-transform: uppercase;
    letter-spacing: .18em;
  }
  .reg-bc-link { color: var(--reg-ink5); text-decoration: none; transition: color .15s; }
  .reg-bc-link:hover { color: var(--reg-ink4); }
  .reg-bc-sep { color: var(--reg-rule); }
  .reg-bc-current { color: var(--reg-ink4); font-weight: 700; }

  /* ── Masthead ── */
  .reg-masthead {
    background: var(--reg-parch);
    border-bottom: 3px solid var(--reg-ink);
  }
  .reg-masthead-inner {
    text-align: center;
    padding-top: clamp(22px, 3vw, 38px);
    padding-bottom: clamp(18px, 2.2vw, 26px);
    border-bottom: 1px solid var(--reg-rule2);
  }
  .reg-eyebrow {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 14px;
    margin-bottom: 14px;
    font-family: system-ui, sans-serif;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: .36em;
    text-transform: uppercase;
    color: var(--reg-ink5);
  }
  .reg-eyebrow-line { height: 1px; width: 44px; background: var(--reg-rule); flex-shrink: 0; }
  .reg-eyebrow-text { white-space: nowrap; }
  .reg-h1 {
    font-size: clamp(2.8rem, 7.5vw, 6rem);
    font-weight: 900;
    line-height: .9;
    color: var(--reg-ink);
    letter-spacing: -.025em;
    margin-bottom: 14px;
  }
  .reg-sub {
    font-size: clamp(13px, 1.6vw, 15.5px);
    font-style: italic;
    color: var(--reg-ink4);
    line-height: 1.55;
    margin-bottom: 18px;
  }
  .reg-meta {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    font-family: system-ui, sans-serif;
    font-size: 9px;
    text-transform: uppercase;
    letter-spacing: .14em;
  }
  .reg-live {
    display: flex;
    align-items: center;
    gap: 7px;
    color: var(--reg-green);
    font-weight: 700;
  }
  .reg-ldot {
    width: 7px; height: 7px;
    border-radius: 50%;
    background: #22C55E;
    display: inline-block;
    flex-shrink: 0;
    position: relative;
  }
  .reg-ldot::after {
    content: '';
    position: absolute;
    inset: -3px;
    border-radius: 50%;
    background: rgba(34,197,94,.25);
    animation: reg-ldot 2.2s ease-in-out infinite;
  }
  .reg-meta-div { width: 1px; height: 12px; background: var(--reg-rule); }
  .reg-vbadge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-size: 7.5px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--reg-green);
    border: 1px solid rgba(21,128,61,.28);
    padding: 2px 8px;
    font-family: system-ui, sans-serif;
  }
  .reg-updated { color: var(--reg-ink5); font-weight: 600; }

  /* ── Toolbar ── */
  .reg-toolbar {
    border-bottom: 1px solid var(--reg-rule2);
    padding-top: 14px;
    padding-bottom: 14px;
    background: var(--reg-parch);
  }
  .reg-toolbar-inner {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  /* Search */
  .reg-search {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  .reg-search-icon {
    position: absolute;
    left: 13px;
    display: flex;
    align-items: center;
    pointer-events: none;
    color: var(--reg-ink5);
    z-index: 1;
    transition: color .2s;
  }
  .reg-search.focused .reg-search-icon { color: var(--reg-gold2); }
  .reg-search-input {
    width: 100%;
    height: 42px;
    padding: 0 38px;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-parch2);
    color: var(--reg-ink);
    font-family: system-ui, sans-serif;
    font-size: 12.5px;
    font-weight: 500;
    letter-spacing: .01em;
    outline: none;
    transition: border-color .2s, background .2s, box-shadow .2s;
  }
  .reg-search-input::placeholder { color: var(--reg-ink5); }
  .reg-search.focused .reg-search-input {
    border-color: var(--reg-ink);
    background: var(--reg-white);
    box-shadow: 0 0 0 3px rgba(217,119,6,.08);
  }
  .reg-search-clear {
    position: absolute;
    right: 11px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    color: var(--reg-ink5);
    transition: color .15s;
  }
  .reg-search-clear:hover { color: var(--reg-ink); }
  .reg-scan {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    overflow: hidden;
    display: block;
    pointer-events: none;
  }
  .reg-scan::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    height: 2px;
    width: 35%;
    background: linear-gradient(90deg, transparent, var(--reg-gold2), transparent);
    animation: reg-scan 1s ease-in-out infinite;
  }

  /* Dropdowns */
  .reg-dropdown-wrap { position: relative; flex-shrink: 0; }
  .reg-ctrl {
    display: inline-flex;
    align-items: center;
    gap: 7px;
    height: 42px;
    padding: 0 14px;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-parch2);
    font-family: system-ui, sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: var(--reg-ink4);
    cursor: pointer;
    white-space: nowrap;
    transition: border-color .15s, color .15s, background .15s;
  }
  .reg-ctrl:hover, .reg-ctrl.open {
    border-color: var(--reg-ink);
    color: var(--reg-ink);
    background: var(--reg-white);
  }
  .reg-ctrl.active-val {
    border-color: var(--reg-gold);
    color: var(--reg-gold);
    background: var(--reg-goldlt);
  }
  .reg-dropdown {
    position: absolute;
    top: calc(100% + 4px);
    right: 0;
    z-index: 100;
    background: var(--reg-white);
    border: 1.5px solid var(--reg-ink);
    box-shadow: 3px 3px 0 rgba(26,18,8,.07);
    min-width: 148px;
    animation: reg-fadeUp .16s cubic-bezier(.16,1,.3,1) both;
  }
  .reg-dropdown-year {
    min-width: 120px;
    max-height: 260px;
    overflow-y: auto;
  }
  .reg-dropdown-year::-webkit-scrollbar { width: 4px; }
  .reg-dropdown-year::-webkit-scrollbar-track { background: var(--reg-parch2); }
  .reg-dropdown-year::-webkit-scrollbar-thumb { background: var(--reg-rule); }
  .reg-drop-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
    padding: 9px 13px;
    background: none;
    border: none;
    font-family: system-ui, sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--reg-ink4);
    cursor: pointer;
    text-align: left;
    transition: background .1s, color .1s;
  }
  .reg-drop-item:hover { background: var(--reg-parch2); color: var(--reg-ink); }
  .reg-drop-item.active { color: var(--reg-gold3); background: var(--reg-goldlt); }

  /* Active filters */
  .reg-active-filters {
    display: flex;
    align-items: center;
    gap: 7px;
    flex-wrap: wrap;
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px dashed var(--reg-rule2);
    font-family: system-ui, sans-serif;
  }
  .reg-af-tag {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 8.5px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--reg-gold3);
    background: var(--reg-goldlt);
    border: 1px solid rgba(180,83,9,.2);
    padding: 3px 9px;
  }
  .reg-af-x {
    background: none;
    border: none;
    cursor: pointer;
    color: var(--reg-gold3);
    font-size: 13px;
    padding: 0;
    line-height: 1;
    font-weight: 700;
  }
  .reg-af-clear {
    font-family: system-ui, sans-serif;
    font-size: 8.5px;
    color: var(--reg-ink4);
    text-decoration: underline;
    font-weight: 700;
    letter-spacing: .1em;
    margin-left: 4px;
  }

  /* Results bar */
  .reg-results-bar {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 18px;
    margin-bottom: 14px;
  }
  .reg-results-label {
    font-family: system-ui, sans-serif;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .28em;
    color: var(--reg-ink5);
    white-space: nowrap;
  }
  .reg-results-count {
    font-size: 11px;
    font-style: italic;
    color: var(--reg-gold2);
    white-space: nowrap;
  }
  .reg-results-rule { flex: 1; height: 1px; background: var(--reg-rule2); }
  .reg-searching {
    display: flex;
    align-items: center;
    gap: 4px;
    font-family: system-ui, sans-serif;
    font-size: 8px;
    color: var(--reg-gold2);
    text-transform: uppercase;
    letter-spacing: .14em;
    white-space: nowrap;
  }
  .reg-page-label {
    font-family: system-ui, sans-serif;
    font-size: 8.5px;
    color: var(--reg-ink5);
    font-weight: 700;
    letter-spacing: .12em;
    white-space: nowrap;
  }

  /* Content */
  .reg-content {
    padding-bottom: clamp(36px, 5vw, 60px);
    transition: opacity .22s ease;
  }
  .reg-content.fading { opacity: .28; pointer-events: none; }

  /* Section head */
  .reg-section-head {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 16px;
  }
  .reg-sh-label {
    font-family: system-ui, sans-serif;
    font-size: 8px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .28em;
    color: var(--reg-ink5);
    white-space: nowrap;
  }
  .reg-sh-rule { flex: 1; height: 1px; background: var(--reg-rule2); }
  .reg-featured-section { margin-bottom: 34px; }

  /* Featured grid */
  .reg-feat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1.5px solid var(--reg-ink);
    background: var(--reg-ink);
    gap: 1.5px;
  }
  .reg-feat-card {
    background: var(--reg-white);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    transition: background .18s;
  }
  .reg-feat-card:hover { background: #FFFDF7; }
  .reg-feat-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: transparent;
    transition: background .18s;
  }
  .reg-feat-card:hover::after { background: var(--reg-gold2); }
  .reg-feat-img {
    height: 170px;
    position: relative;
    overflow: hidden;
    background: var(--reg-parch2);
    flex-shrink: 0;
    border-bottom: 1.5px solid var(--reg-ink);
  }
  .reg-feat-img img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform .5s ease;
  }
  .reg-feat-card:hover .reg-feat-img img { transform: scale(1.04); }
  .reg-feat-ph {
    width: 100%; height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--reg-parch3);
  }
  .reg-feat-ph-letter {
    font-size: 3.5rem;
    font-weight: 900;
    color: rgba(26,18,8,.08);
  }
  .reg-feat-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(26,18,8,.84) 0%, rgba(26,18,8,.07) 55%, transparent 100%);
  }
  .reg-feat-num {
    position: absolute;
    top: 11px; left: 11px;
    background: var(--reg-ink);
    color: white;
    font-family: system-ui, sans-serif;
    font-size: 7px;
    font-weight: 800;
    letter-spacing: .2em;
    text-transform: uppercase;
    padding: 3px 9px;
    border: 1px solid rgba(255,255,255,.12);
  }
  .reg-feat-check {
    position: absolute;
    top: 11px; right: 11px;
    width: 14px; height: 14px;
    color: #4ADE80;
  }
  .reg-feat-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 0 13px 12px;
  }
  .reg-feat-sector {
    display: block;
    font-family: system-ui, sans-serif;
    font-size: 7.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .2em;
    color: rgba(255,255,255,.5);
    margin-bottom: 4px;
  }
  .reg-feat-name {
    font-size: 1.1rem;
    font-weight: 700;
    color: white;
    line-height: 1.15;
  }
  .reg-feat-body {
    padding: 17px 17px 15px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .reg-feat-desc {
    font-size: 12px;
    color: var(--reg-ink3);
    line-height: 1.82;
    flex: 1;
    margin-bottom: 13px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .reg-feat-founders {
    font-family: system-ui, sans-serif;
    font-size: 8.5px;
    color: var(--reg-ink5);
    margin-bottom: 11px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .reg-founders-label { font-weight: 700; color: var(--reg-ink4); }
  .reg-feat-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 11px;
    border-top: 1px solid var(--reg-rule2);
  }
  .reg-feat-meta { display: flex; gap: 10px; align-items: center; }
  .reg-feat-actions { display: flex; align-items: center; gap: 7px; }
  .reg-chip {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    font-family: system-ui, sans-serif;
    font-size: 8.5px;
    color: var(--reg-ink5);
  }

  /* Card grid */
  .reg-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
    border: 1.5px solid var(--reg-ink);
    background: var(--reg-ink);
    gap: 1.5px;
  }
  .reg-card {
    background: var(--reg-white);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    position: relative;
    transition: background .14s, transform .14s, box-shadow .14s;
    animation: reg-cardIn .36s cubic-bezier(.16,1,.3,1) both;
  }
  .reg-card:hover {
    background: #FFFDF7;
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--reg-ink);
    z-index: 2;
  }
  .reg-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2.5px;
    background: transparent;
    transition: background .14s;
  }
  .reg-card:hover::before { background: var(--reg-gold2); }
  .reg-card-head {
    padding: 14px 14px 11px;
    display: flex;
    align-items: center;
    gap: 11px;
    border-bottom: 1px solid var(--reg-rule2);
  }
  .reg-logo {
    width: 40px; height: 40px;
    border-radius: 50%;
    flex-shrink: 0;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-parch2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition: border-color .14s;
  }
  .reg-card:hover .reg-logo { border-color: var(--reg-ink5); }
  .reg-logo img { width: 100%; height: 100%; object-fit: cover; }
  .reg-logo-letter { font-size: 1rem; font-weight: 900; color: var(--reg-ink4); }
  .reg-card-titles { min-width: 0; flex: 1; }
  .reg-card-name {
    font-size: .88rem;
    font-weight: 700;
    color: var(--reg-ink);
    line-height: 1.2;
    margin-bottom: 3px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .reg-card-cat {
    font-family: system-ui, sans-serif;
    font-size: 7.5px;
    color: var(--reg-ink5);
    text-transform: uppercase;
    letter-spacing: .12em;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .reg-card-badge { width: 11px; height: 11px; color: #15803D; flex-shrink: 0; }
  .reg-card-body {
    padding: 11px 14px 13px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .reg-card-desc {
    font-size: 11.5px;
    color: var(--reg-ink3);
    line-height: 1.78;
    flex: 1;
    margin-bottom: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .reg-card-founders {
    font-family: system-ui, sans-serif;
    font-size: 8px;
    color: var(--reg-ink5);
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .reg-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 9px;
    border-top: 1px solid var(--reg-rule2);
  }
  .reg-card-arrow { width: 11px; height: 11px; color: var(--reg-ink5); }

  /* Mobile list */
  .reg-mob-list {
    display: none;
    flex-direction: column;
    border: 1.5px solid var(--reg-ink);
  }
  .reg-mob-row {
    display: flex;
    align-items: center;
    gap: 13px;
    padding: 14px 16px;
    background: var(--reg-white);
    text-decoration: none;
    transition: background .12s;
  }
  .reg-mob-row:hover { background: var(--reg-parch2); }
  .reg-mob-logo {
    width: 38px; height: 38px;
    border-radius: 50%;
    flex-shrink: 0;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-parch2);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  .reg-mob-info { flex: 1; min-width: 0; }
  .reg-mob-name-row {
    display: flex;
    align-items: center;
    gap: 5px;
    margin-bottom: 3px;
  }
  .reg-mob-name {
    font-size: .88rem;
    font-weight: 700;
    color: var(--reg-ink);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .reg-mob-meta {
    font-family: system-ui, sans-serif;
    font-size: 8px;
    color: var(--reg-ink5);
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 600;
  }

  /* Empty state */
  .reg-empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;
    text-align: center;
    border: 1.5px solid var(--reg-ink);
    background: var(--reg-white);
  }
  .reg-empty-glyph {
    font-size: 3rem;
    color: rgba(26,18,8,.06);
    font-weight: 900;
    display: block;
    margin-bottom: 16px;
  }
  .reg-empty-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--reg-ink);
    margin-bottom: 8px;
  }
  .reg-empty-body {
    font-size: 13px;
    color: var(--reg-ink4);
    line-height: 1.75;
    max-width: 280px;
    margin-bottom: 22px;
  }
  .reg-empty-btn {
    display: inline-flex;
    align-items: center;
    border: 2px solid var(--reg-ink);
    padding: 9px 22px;
    font-family: system-ui, sans-serif;
    font-size: 9px;
    font-weight: 700;
    color: var(--reg-ink);
    text-transform: uppercase;
    letter-spacing: .14em;
    background: transparent;
    text-decoration: none;
    transition: background .15s;
  }
  .reg-empty-btn:hover { background: var(--reg-parch2); }

  /* Skeleton */
  .reg-skel-card { background: var(--reg-white); }
  .reg-skel-head {
    padding: 14px;
    display: flex;
    align-items: center;
    gap: 11px;
    border-bottom: 1px solid var(--reg-rule2);
  }
  .reg-skel-body { padding: 11px 14px 13px; }
  .reg-skel-circle { width: 40px; height: 40px; border-radius: 50%; flex-shrink: 0; }
  .reg-skel {
    background: linear-gradient(
      90deg,
      var(--reg-parch2) 25%,
      var(--reg-parch3) 50%,
      var(--reg-parch2) 75%
    );
    background-size: 400px 100%;
    animation: reg-shimmer 1.4s ease-in-out infinite;
    border-radius: 2px;
  }

  /* Pagination */
  .reg-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    margin-top: 44px;
  }
  .reg-pg-nums { display: flex; gap: 4px; }
  .reg-pg-btn {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 9px 15px;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-white);
    font-family: system-ui, sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    color: var(--reg-ink4);
    text-decoration: none;
    transition: border-color .14s, color .14s;
  }
  .reg-pg-btn:hover { border-color: var(--reg-ink); color: var(--reg-ink); }
  .reg-pg-btn.disabled { opacity: .22; pointer-events: none; }
  .reg-pg-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px; height: 36px;
    border: 1.5px solid var(--reg-rule2);
    background: var(--reg-white);
    font-family: system-ui, sans-serif;
    font-size: 11px;
    font-weight: 700;
    color: var(--reg-ink4);
    text-decoration: none;
    transition: border-color .14s, color .14s, background .14s;
  }
  .reg-pg-num:hover { border-color: var(--reg-ink4); color: var(--reg-ink); }
  .reg-pg-num.on {
    background: var(--reg-ink);
    color: white;
    border-color: var(--reg-ink);
  }

  /* CTA */
  .reg-cta {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 28px;
    align-items: center;
    padding: clamp(24px,4vw,40px);
    background: var(--reg-ink);
    border: 1.5px solid var(--reg-ink);
    margin-top: clamp(36px,5vw,56px);
    position: relative;
    overflow: hidden;
  }
  .reg-cta::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2.5px;
    background: linear-gradient(90deg, var(--reg-gold3), var(--reg-gold2), #E8C547, var(--reg-gold2), var(--reg-gold3));
  }
  .reg-cta-eyebrow {
    font-family: system-ui, sans-serif;
    font-size: 7.5px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: .32em;
    color: rgba(232,197,71,.72);
    margin-bottom: 9px;
  }
  .reg-cta-headline {
    font-size: clamp(1rem,2.5vw,1.6rem);
    font-weight: 700;
    color: white;
    line-height: 1.22;
    margin-bottom: 8px;
  }
  .reg-cta-sub {
    font-size: 12px;
    color: rgba(255,255,255,.35);
    line-height: 1.75;
  }
  .reg-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: var(--reg-gold2);
    color: var(--reg-ink);
    padding: 13px 22px;
    font-family: system-ui, sans-serif;
    font-size: 9.5px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: .14em;
    white-space: nowrap;
    box-shadow: 3px 3px 0 var(--reg-gold3);
    text-decoration: none;
    transition: transform .14s, box-shadow .14s;
  }
  .reg-cta-btn:hover {
    transform: translate(-1px,-1px);
    box-shadow: 4px 4px 0 var(--reg-gold3);
  }

  /* Footer nav */
  .reg-footer-nav {
    padding-top: 16px;
    padding-bottom: clamp(24px,4vw,48px);
    border-top: 2px solid var(--reg-ink);
    margin-top: clamp(28px,4vw,44px);
  }
  .reg-footer-links {
    display: flex;
    flex-wrap: wrap;
    gap: 8px 20px;
    list-style: none;
  }
  .reg-footer-link {
    font-family: system-ui, sans-serif;
    font-size: 8px;
    color: var(--reg-ink5);
    text-transform: uppercase;
    letter-spacing: .14em;
    text-decoration: none;
    transition: color .14s;
  }
  .reg-footer-link:hover { color: var(--reg-ink4); }

  /* Responsive */
  @media (max-width: 900px) {
    .reg-feat-grid { grid-template-columns: 1fr 1fr; }
  }
  @media (max-width: 640px) {
    .reg-feat-grid { grid-template-columns: 1fr; }
    .reg-hide-mob  { display: none !important; }
    .reg-show-mob  { display: flex !important; }
    .reg-grid      { grid-template-columns: 1fr 1fr; }
    .reg-cta       { grid-template-columns: 1fr; }
    .reg-cta-btn   { width: 100%; justify-content: center; }
    .reg-toolbar-inner { flex-wrap: wrap; }
    .reg-search    { min-width: 100%; order: -1; }
  }
  @media (max-width: 420px) {
    .reg-grid { grid-template-columns: 1fr; }
  }
`;
