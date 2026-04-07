"use client"

// components/global-search.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Sitewide search — accessible from any page via header.
// Searches: founders, startups, blog posts, categories.
// To extend: add more result groups in MOCK_INDEX or replace with real API.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect, useRef, useCallback } from "react"

export interface SearchResult {
  id: string
  type: "founder" | "startup" | "blog" | "category"
  title: string
  subtitle: string
  href: string
  icon?: string
}

// ── Plug this into a real API/Supabase search in production ──────────────────
// Shape: (query: string) => Promise<SearchResult[]>
async function searchAll(query: string): Promise<SearchResult[]> {
  if (!query || query.length < 2) return []

  // Replace this with: const res = await fetch(`/api/search?q=${query}`)
  // For now, filter from static mock data:
  const q = query.toLowerCase()
  return MOCK_INDEX.filter(
    (item) =>
      item.title.toLowerCase().includes(q) ||
      item.subtitle.toLowerCase().includes(q)
  ).slice(0, 8)
}

// ── Add your real data here or replace with API ───────────────────────────────
const MOCK_INDEX: SearchResult[] = [
  // Founders
  { id: "f1", type: "founder", title: "Aadit Palicha", subtitle: "Founder & CEO · Zepto", href: "/startup/aadit-palicha-zepto", icon: "👤" },
  { id: "f2", type: "founder", title: "Kunal Shah", subtitle: "Founder · CRED", href: "/startup/kunal-shah-cred", icon: "👤" },
  { id: "f3", type: "founder", title: "Nithin Kamath", subtitle: "Founder · Zerodha", href: "/startup/nithin-kamath-zerodha", icon: "👤" },
  { id: "f4", type: "founder", title: "Falguni Nayar", subtitle: "Founder & CEO · Nykaa", href: "/startup/falguni-nayar-nykaa", icon: "👤" },
  { id: "f5", type: "founder", title: "Ritesh Agarwal", subtitle: "Founder & CEO · OYO", href: "/startup/ritesh-agarwal-oyo", icon: "👤" },
  { id: "f6", type: "founder", title: "Lalit Keshre", subtitle: "Co-founder · Groww", href: "/startup/lalit-keshre-groww", icon: "👤" },
  { id: "f7", type: "founder", title: "Vidit Aatrey", subtitle: "Co-founder · Meesho", href: "/startup/vidit-aatrey-meesho", icon: "👤" },
  { id: "f8", type: "founder", title: "Alakh Pandey", subtitle: "Founder · PhysicsWallah", href: "/startup/alakh-pandey-physicswallah", icon: "👤" },
  // Startups
  { id: "s1", type: "startup", title: "Zepto", subtitle: "Quick Commerce · Unicorn", href: "/startup/zepto", icon: "🏢" },
  { id: "s2", type: "startup", title: "CRED", subtitle: "Fintech · Unicorn · $6.4B", href: "/startup/cred", icon: "🏢" },
  { id: "s3", type: "startup", title: "Zerodha", subtitle: "Fintech · Profitable", href: "/startup/zerodha", icon: "🏢" },
  { id: "s4", type: "startup", title: "Nykaa", subtitle: "D2C Beauty · Listed", href: "/startup/nykaa", icon: "🏢" },
  { id: "s5", type: "startup", title: "OYO", subtitle: "Hospitality · Global", href: "/startup/oyo", icon: "🏢" },
  { id: "s6", type: "startup", title: "Groww", subtitle: "Wealth Tech · Unicorn", href: "/startup/groww", icon: "🏢" },
  { id: "s7", type: "startup", title: "Meesho", subtitle: "Social Commerce · Unicorn", href: "/startup/meesho", icon: "🏢" },
  { id: "s8", type: "startup", title: "PhysicsWallah", subtitle: "Edtech · Unicorn", href: "/startup/physicswallah", icon: "🏢" },
  // Categories
  { id: "c1", type: "category", title: "Fintech Startups India", subtitle: "Browse all fintech companies", href: "/startups/fintech", icon: "📂" },
  { id: "c2", type: "category", title: "Edtech Startups India", subtitle: "Browse all edtech companies", href: "/startups/edtech", icon: "📂" },
  { id: "c3", type: "category", title: "AI Startups India", subtitle: "Browse all AI companies", href: "/startups/ai", icon: "📂" },
  { id: "c4", type: "category", title: "SaaS Startups India", subtitle: "Browse all SaaS companies", href: "/startups/saas", icon: "📂" },
  { id: "c5", type: "category", title: "D2C Startups India", subtitle: "Browse all D2C brands", href: "/startups/d2c", icon: "📂" },
  // Blog
  { id: "b1", type: "blog", title: "How Zepto Cracked 10-Minute Delivery", subtitle: "The Forge · Operations", href: "/blog/zepto-10-minute-delivery", icon: "📝" },
  { id: "b2", type: "blog", title: "Zerodha's Zero-Marketing Playbook", subtitle: "The Forge · Growth", href: "/blog/zerodha-zero-marketing", icon: "📝" },
  { id: "b3", type: "blog", title: "Why CRED Chose Rewards Over Revenue", subtitle: "The Forge · Strategy", href: "/blog/cred-rewards-strategy", icon: "📝" },
]

const TYPE_LABELS: Record<SearchResult["type"], string> = {
  founder: "Founder",
  startup: "Startup",
  blog: "Article",
  category: "Category",
}

const TYPE_COLORS: Record<SearchResult["type"], string> = {
  founder: "bg-violet-100 text-violet-700",
  startup: "bg-blue-100 text-blue-700",
  blog: "bg-emerald-100 text-emerald-700",
  category: "bg-orange-100 text-orange-700",
}

// ─────────────────────────────────────────────────────────────────────────────

interface GlobalSearchProps {
  variant?: "header" | "hero" // header = compact icon+modal, hero = full bar
}

export function GlobalSearch({ variant = "header" }: GlobalSearchProps) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Keyboard shortcut: Cmd+K / Ctrl+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === "Escape") setOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 50)
  }, [open])

  const handleQuery = useCallback((q: string) => {
    setQuery(q)
    setActiveIndex(-1)
    if (debounceRef.current) clearTimeout(debounceRef.current)
    debounceRef.current = setTimeout(async () => {
      setLoading(true)
      const res = await searchAll(q)
      setResults(res)
      setLoading(false)
    }, 200)
  }, [])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActiveIndex((i) => Math.min(i + 1, results.length - 1)) }
    if (e.key === "ArrowUp") { e.preventDefault(); setActiveIndex((i) => Math.max(i - 1, -1)) }
    if (e.key === "Enter" && activeIndex >= 0 && results[activeIndex]) {
      window.location.href = results[activeIndex].href
      setOpen(false)
    }
  }

  return (
    <>
      {/* Trigger button */}
      {variant === "header" ? (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white/90 px-4 py-2 rounded-xl text-sm transition-all duration-200"
          aria-label="Open search"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <span className="hidden sm:inline">Search...</span>
          <kbd className="hidden sm:flex items-center gap-0.5 bg-white/10 rounded px-1.5 py-0.5 text-xs font-mono">
            ⌘K
          </kbd>
        </button>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 w-full max-w-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/50 hover:text-white/80 px-5 py-3.5 rounded-2xl text-sm transition-all duration-200 text-left"
        >
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search founders, startups, stories...
          <kbd className="ml-auto flex items-center gap-0.5 bg-white/10 rounded px-1.5 py-0.5 text-xs font-mono flex-shrink-0">
            ⌘K
          </kbd>
        </button>
      )}

      {/* Search modal */}
      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[10vh] px-4"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md" onClick={() => setOpen(false)} />

          {/* Modal */}
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden search-modal">
            {/* Input */}
            <div className="flex items-center gap-4 p-5 border-b border-gray-100">
              <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search founders, startups, articles..."
                className="flex-1 text-gray-900 text-lg placeholder-gray-400 outline-none bg-transparent"
                autoComplete="off"
              />
              {loading && (
                <div className="w-4 h-4 border-2 border-gray-200 border-t-blue-500 rounded-full animate-spin flex-shrink-0" />
              )}
              <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-gray-600 text-sm font-medium">
                Esc
              </button>
            </div>

            {/* Results */}
            <div className="max-h-[60vh] overflow-y-auto">
              {query.length >= 2 && results.length === 0 && !loading && (
                <div className="p-8 text-center text-gray-400">
                  <div className="text-4xl mb-3">🔍</div>
                  <div className="font-medium">No results for "{query}"</div>
                  <div className="text-sm mt-1">Try searching a founder name, startup, or topic</div>
                </div>
              )}

              {results.length > 0 && (
                <div className="p-2">
                  {results.map((result, i) => (
                    <a
                      key={result.id}
                      href={result.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-4 p-3 rounded-xl transition-colors ${
                        i === activeIndex ? "bg-blue-50" : "hover:bg-gray-50"
                      }`}
                    >
                      <span className="text-2xl w-10 text-center flex-shrink-0">{result.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-gray-900 text-sm">{result.title}</div>
                        <div className="text-gray-500 text-xs truncate">{result.subtitle}</div>
                      </div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${TYPE_COLORS[result.type]}`}>
                        {TYPE_LABELS[result.type]}
                      </span>
                    </a>
                  ))}
                </div>
              )}

              {/* Default state */}
              {query.length < 2 && (
                <div className="p-4">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-2">Quick Links</div>
                  {[
                    { label: "Startup Registry", href: "/startup", icon: "🏢" },
                    { label: "Submit Your Startup", href: "/submit", icon: "✨" },
                    { label: "The Forge Blog", href: "/blog", icon: "📝" },
                    { label: "About UpForge", href: "/about", icon: "ℹ️" },
                  ].map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl w-8 text-center">{link.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes searchModalIn {
          from { opacity: 0; transform: translateY(-20px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .search-modal { animation: searchModalIn 0.25s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </>
  )
}
