"use client";
// components/navbar.tsx — GLOBAL AUTHORITY EDITORIAL v5
// FIXES: Mobile hamburger search position, Home link, working global search with suggestions
// Desktop: proper spacing, no wasted space
// SEO: editorial trusted magazine global vibe

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ShieldCheck, ChevronRight, TrendingUp, Search, X, Menu, Home } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
  icon?: React.ReactNode;
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/", icon: <Home size={10} /> },
  { name: "Registry", href: "/registry", badge: "5K+" },
  { name: "Unicorns", href: "/indian-unicorns" },
  { name: "Chronicle", href: "/blog" },
  { name: "Reports", href: "/reports" },
  { name: "Verify UFRN", href: "/verify" },
  { name: "About", href: "/about" },
];

const TICKER_ITEMS = [
  "🇮🇳 India leads with 126 unicorns in 2026",
  "🌍 5,000+ startups verified across 50+ countries",
  "🔴 NEW: Southeast Asia Startup Index Q1 2026",
  "📊 UFRN™ — The global standard for startup identity",
  "🇺🇸 US startup funding up 34% YoY — Full report →",
  "🇸🇬 Singapore becomes #3 global startup hub by UFRN count",
  "🏆 UpForge Registry cited by Harvard, IIM, Stanford researchers",
];

// Search suggestions data
const SEARCH_SUGGESTIONS = [
  { type: "startup", label: "Zepto", sub: "Quick Commerce · Unicorn", href: "/startup/zepto" },
  { type: "startup", label: "CRED", sub: "Fintech · $6.4B", href: "/startup/cred" },
  { type: "startup", label: "Zerodha", sub: "Fintech · Bootstrapped", href: "/startup/zerodha" },
  { type: "startup", label: "PhonePe", sub: "Payments · $12B", href: "/startup/phonepe" },
  { type: "startup", label: "Razorpay", sub: "Infrastructure · $7.5B", href: "/startup/razorpay" },
  { type: "startup", label: "Nykaa", sub: "D2C Beauty · Listed", href: "/startup/nykaa" },
  { type: "startup", label: "OYO", sub: "Hospitality · Global", href: "/startup/oyo" },
  { type: "startup", label: "Meesho", sub: "Social Commerce · Unicorn", href: "/startup/meesho" },
  { type: "startup", label: "Groww", sub: "Wealth Tech · Unicorn", href: "/startup/groww" },
  { type: "startup", label: "PhysicsWallah", sub: "Edtech · Unicorn", href: "/startup/physicswallah" },
  { type: "founder", label: "Kunal Shah", sub: "Founder · CRED", href: "/startup/cred" },
  { type: "founder", label: "Nithin Kamath", sub: "Founder · Zerodha", href: "/startup/zerodha" },
  { type: "founder", label: "Aadit Palicha", sub: "Founder · Zepto", href: "/startup/zepto" },
  { type: "founder", label: "Falguni Nayar", sub: "Founder · Nykaa", href: "/startup/nykaa" },
  { type: "category", label: "Fintech Startups", sub: "Browse all fintech", href: "/startups/fintech" },
  { type: "category", label: "AI & Deep Tech", sub: "Browse AI companies", href: "/startups/ai" },
  { type: "category", label: "SaaS Startups", sub: "Browse B2B SaaS", href: "/startups/saas" },
  { type: "category", label: "D2C Brands", sub: "Browse direct-to-consumer", href: "/startups/d2c" },
  { type: "article", label: "Top Indian Unicorns 2026", sub: "Chronicle · Deep Dive", href: "/blog/top-indian-unicorns-2026" },
  { type: "article", label: "How Zepto Built 10-Min Delivery", sub: "Chronicle · Operations", href: "/blog/zepto-10-minute-delivery" },
];

const TYPE_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  startup:  { bg: "#8b1a1a15", color: "#8b1a1a", label: "Startup" },
  founder:  { bg: "#1a3d5c15", color: "#1a3d5c", label: "Founder" },
  category: { bg: "#2d5a1a15", color: "#2d5a1a", label: "Category" },
  article:  { bg: "#5a3d1a15", color: "#5a3d1a", label: "Article" },
};

function GlobalSearchBar({
  onClose,
  autoFocus = false,
}: {
  onClose?: () => void;
  autoFocus?: boolean;
}) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<typeof SEARCH_SUGGESTIONS>([]);
  const [active, setActive] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (autoFocus) setTimeout(() => inputRef.current?.focus(), 60);
  }, [autoFocus]);

  const handleChange = useCallback((val: string) => {
    setQuery(val);
    setActive(-1);
    if (val.trim().length < 1) {
      setSuggestions([]);
      return;
    }
    const q = val.toLowerCase();
    const filtered = SEARCH_SUGGESTIONS.filter(
      (s) =>
        s.label.toLowerCase().includes(q) ||
        s.sub.toLowerCase().includes(q) ||
        s.type.toLowerCase().includes(q)
    ).slice(0, 7);
    setSuggestions(filtered);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") { e.preventDefault(); setActive((i) => Math.min(i + 1, suggestions.length - 1)); }
    if (e.key === "ArrowUp")   { e.preventDefault(); setActive((i) => Math.max(i - 1, -1)); }
    if (e.key === "Enter") {
      if (active >= 0 && suggestions[active]) {
        router.push(suggestions[active].href);
        onClose?.();
      } else if (query.trim()) {
        router.push(`/search?q=${encodeURIComponent(query.trim())}`);
        onClose?.();
      }
    }
    if (e.key === "Escape") onClose?.();
  };

  return (
    <div className="relative w-full">
      <div
        className="flex items-center border"
        style={{ borderColor: "#8b1a1a", background: "#fff" }}
      >
        <Search size={13} color="#8b6a6a" className="ml-3 flex-shrink-0" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search startups, founders, reports…"
          value={query}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-3 py-2 text-xs outline-none bg-transparent"
          style={{ fontFamily: "'Times New Roman', serif", color: "#1a0a0a", minWidth: 0 }}
        />
        {query && (
          <button
            onClick={() => { setQuery(""); setSuggestions([]); inputRef.current?.focus(); }}
            className="px-2 py-2 hover:bg-[#f5f0e8] transition-colors flex-shrink-0"
          >
            <X size={11} color="#8b1a1a" />
          </button>
        )}
        {onClose && (
          <button
            onClick={onClose}
            className="px-2 py-2 hover:bg-[#f5f0e8] transition-colors flex-shrink-0 border-l"
            style={{ borderColor: "#e8ddd0" }}
          >
            <X size={11} color="#8b1a1a" />
          </button>
        )}
      </div>

      {/* Suggestions dropdown */}
      {suggestions.length > 0 && (
        <div
          className="absolute top-full left-0 right-0 z-[200] border border-t-0 overflow-hidden"
          style={{
            background: "#faf7f2",
            borderColor: "#8b1a1a",
            boxShadow: "0 8px 32px rgba(139,26,26,0.12)",
          }}
        >
          {suggestions.map((s, i) => {
            const ts = TYPE_STYLE[s.type] || TYPE_STYLE.startup;
            return (
              <Link
                key={s.href + i}
                href={s.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2.5 border-b transition-colors"
                style={{
                  borderColor: "#f0ebe0",
                  background: i === active ? "#f5f0e8" : "transparent",
                }}
                onMouseEnter={() => setActive(i)}
              >
                <div className="flex-1 min-w-0">
                  <div
                    className="text-[12px] font-semibold truncate"
                    style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
                  >
                    {s.label}
                  </div>
                  <div
                    className="text-[9px] truncate"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                  >
                    {s.sub}
                  </div>
                </div>
                <span
                  className="text-[8px] font-bold tracking-wider uppercase px-2 py-0.5 flex-shrink-0"
                  style={{ background: ts.bg, color: ts.color, fontFamily: "'Times New Roman', serif" }}
                >
                  {ts.label}
                </span>
              </Link>
            );
          })}
          {query.trim() && (
            <Link
              href={`/search?q=${encodeURIComponent(query.trim())}`}
              onClick={onClose}
              className="flex items-center gap-2 px-4 py-2.5 hover:bg-[#f5f0e8] transition-colors"
              style={{ background: "#f5f0e8" }}
            >
              <Search size={11} color="#8b1a1a" />
              <span
                className="text-[10px] font-semibold"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
              >
                Search all results for &ldquo;{query}&rdquo; →
              </span>
            </Link>
          )}
        </div>
      )}

      {/* Quick links when empty */}
      {query.length === 0 && (
        <div
          className="absolute top-full left-0 right-0 z-[200] border border-t-0"
          style={{
            background: "#faf7f2",
            borderColor: "#8b1a1a",
            boxShadow: "0 8px 32px rgba(139,26,26,0.12)",
          }}
        >
          <div className="px-4 pt-3 pb-1">
            <span
              className="text-[8px] tracking-[0.2em] uppercase font-bold"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              Quick Links
            </span>
          </div>
          {[
            { label: "Startup Registry", href: "/registry", type: "category" },
            { label: "Indian Unicorns", href: "/indian-unicorns", type: "category" },
            { label: "Submit Your Startup", href: "/submit", type: "startup" },
            { label: "Verify UFRN", href: "/verify", type: "founder" },
          ].map((ql, i) => {
            const ts = TYPE_STYLE[ql.type];
            return (
              <Link
                key={i}
                href={ql.href}
                onClick={onClose}
                className="flex items-center gap-3 px-4 py-2.5 border-b hover:bg-[#f5f0e8] transition-colors"
                style={{ borderColor: "#f0ebe0" }}
              >
                <span
                  className="text-[12px] font-medium flex-1"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
                >
                  {ql.label}
                </span>
                <span
                  className="text-[8px] font-bold tracking-wider uppercase px-2 py-0.5"
                  style={{ background: ts.bg, color: ts.color, fontFamily: "'Times New Roman', serif" }}
                >
                  {ts.label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    const id = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIndex((i) => (i + 1) % TICKER_ITEMS.length);
        setTickerVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  // Close search on outside click
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest("[data-search-container]")) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  const isActive = (link: NavLink) => {
    if (link.external) return false;
    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

  const now = new Date();
  const dateLine = now.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric",
  });

  return (
    <>
      {/* ── TIER 1: DATELINE STRIP ─── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-8 flex items-center border-b"
        style={{ background: "#1a0a0a", borderColor: "#8b1a1a" }}
      >
        <div className="max-w-[1600px] mx-auto px-4 w-full flex items-center justify-between">
          <span
            className="text-[10px] tracking-[0.18em] uppercase hidden sm:block"
            style={{ fontFamily: "'Times New Roman', serif", color: "#c9b99a", opacity: 0.7 }}
          >
            {dateLine}
          </span>

          <div className="flex-1 flex items-center justify-center overflow-hidden px-4">
            <div className="flex items-center gap-3">
              <span
                className="text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5 flex-shrink-0"
                style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
              >
                LIVE
              </span>
              <span
                className="text-[10px] truncate"
                style={{
                  fontFamily: "'Times New Roman', serif",
                  color: "#e8ddd0",
                  opacity: tickerVisible ? 1 : 0,
                  transform: tickerVisible ? "translateY(0)" : "translateY(-4px)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
              >
                {TICKER_ITEMS[tickerIndex]}
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.upforge.in"
              className="text-[9px] tracking-widest uppercase transition-colors"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              🇮🇳 India
            </a>
            <span style={{ color: "#3d2b2b" }}>·</span>
            <a
              href="https://www.upforge.org"
              className="text-[9px] tracking-widest uppercase font-semibold"
              style={{ fontFamily: "'Times New Roman', serif", color: "#c9b99a" }}
            >
              🌍 Global
            </a>
          </div>
        </div>
      </div>

      {/* ── TIER 2: MASTHEAD ─── */}
      <div
        className="fixed top-8 left-0 right-0 z-50 border-b"
        style={{
          background: scrolled ? "rgba(250,247,242,0.97)" : "#faf7f2",
          borderColor: "#e8ddd0",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.2s",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-4">
          <div className="flex items-center justify-between py-3 gap-4">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div className="w-9 h-9 overflow-hidden flex-shrink-0" style={{ border: "1px solid #c9b99a" }}>
                <Image src="/logo.jpg" alt="UpForge" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <div>
                <div
                  className="text-[22px] font-bold leading-none tracking-tight group-hover:text-[#8b1a1a] transition-colors"
                  style={{ fontFamily: "'Times New Roman', Georgia, 'Palatino Linotype', serif", color: "#1a0a0a" }}
                >
                  UpForge
                </div>
                <div
                  className="text-[8px] tracking-[0.22em] uppercase leading-none mt-0.5 hidden sm:block"
                  style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                >
                  Global Startup Registry
                </div>
              </div>
            </Link>

            {/* Center tagline */}
            <div className="hidden xl:flex flex-col items-center">
              <div className="h-px w-24 mb-2" style={{ background: "#c9b99a" }} />
              <span
                className="text-[9px] tracking-[0.28em] uppercase text-center"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
              >
                The World's Startup Registry of Record
              </span>
              <div className="h-px w-24 mt-2" style={{ background: "#c9b99a" }} />
            </div>

            {/* Right: Search + CTAs */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Desktop Search */}
              <div className="relative hidden md:flex items-center" data-search-container>
                {searchOpen ? (
                  <div className="w-72">
                    <GlobalSearchBar onClose={() => setSearchOpen(false)} autoFocus />
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="flex items-center gap-2 px-3 py-1.5 hover:bg-[#f5f0e8] transition-colors border"
                    style={{ borderColor: "#e8ddd0" }}
                    aria-label="Search"
                  >
                    <Search size={13} color="#8b6a6a" />
                    <span
                      className="text-[10px] hidden lg:block"
                      style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                    >
                      Search…
                    </span>
                    <kbd
                      className="text-[8px] hidden lg:flex items-center px-1.5 py-0.5 font-mono"
                      style={{ background: "#f0ebe0", color: "#8b6a6a", border: "1px solid #e0dbd2" }}
                    >
                      ⌘K
                    </kbd>
                  </button>
                )}
              </div>

              <Link
                href="/verify"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase transition-all hover:bg-[#f5f0e8]"
                style={{ border: "1px solid #c9b99a", color: "#5a4040", fontFamily: "'Times New Roman', serif" }}
              >
                <ShieldCheck size={11} />
                Verify UFRN
              </Link>

              <Link
                href="/submit"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-all hover:opacity-90"
                style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
              >
                List Startup <ChevronRight size={10} />
              </Link>

              {/* Mobile search icon */}
              <button
                className="md:hidden p-2 transition-colors hover:bg-[#f5f0e8]"
                onClick={() => setSearchOpen(!searchOpen)}
                aria-label="Search"
              >
                <Search size={16} color="#1a0a0a" />
              </button>

              {/* Mobile menu toggle */}
              <button
                className="md:hidden p-2 transition-colors hover:bg-[#f5f0e8]"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={18} color="#8b1a1a" /> : <Menu size={18} color="#1a0a0a" />}
              </button>
            </div>
          </div>

          {/* Mobile search bar — below masthead, above nav */}
          {searchOpen && (
            <div className="md:hidden pb-3 px-0" data-search-container>
              <GlobalSearchBar onClose={() => setSearchOpen(false)} autoFocus />
            </div>
          )}
        </div>

        {/* ── TIER 3: NAV RAIL ─── */}
        <div
          className="hidden md:block border-t"
          style={{ borderColor: "#e8ddd0", background: scrolled ? "transparent" : "#f5f0e8" }}
        >
          <div className="max-w-[1600px] mx-auto px-4">
            <nav className="flex items-center">
              {NAV_LINKS.map((link, i) => {
                const active = isActive(link);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="relative group flex items-center gap-1.5 px-4 py-2.5 text-[11px] tracking-[0.12em] uppercase transition-all"
                    style={{
                      fontFamily: "'Times New Roman', serif",
                      fontWeight: active ? 700 : 500,
                      color: active ? "#8b1a1a" : "#5a4040",
                      borderBottom: active ? "2px solid #8b1a1a" : "2px solid transparent",
                      borderRight: i < NAV_LINKS.length - 1 ? "1px solid #e8ddd0" : "none",
                    }}
                  >
                    {link.icon && <span className="opacity-60">{link.icon}</span>}
                    {link.name}
                    {link.badge && (
                      <span
                        className="text-[8px] px-1 py-0.5 font-bold"
                        style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
                      >
                        {link.badge}
                      </span>
                    )}
                    {!active && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8b1a1a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                    )}
                  </Link>
                );
              })}

              <div className="ml-auto flex items-center gap-2 pl-4">
                <TrendingUp size={11} color="#8b1a1a" />
                <span
                  className="text-[9px] tracking-[0.15em] uppercase"
                  style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                >
                  <span style={{ color: "#8b1a1a", fontWeight: 700 }}>34</span> new listings this week
                </span>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* ── MOBILE MENU ─── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-200 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
        <div
          className={`absolute left-0 right-0 border-b-2 transition-transform duration-200 overflow-y-auto ${isOpen ? "translate-y-0" : "-translate-y-2"}`}
          style={{
            top: searchOpen ? 112 : 96, // push below search bar if open
            maxHeight: "calc(100vh - 96px)",
            background: "#faf7f2",
            borderColor: "#8b1a1a",
          }}
        >
          {/* Nav links */}
          {NAV_LINKS.map((link) => {
            const active = isActive(link);
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-5 py-4 border-b"
                style={{
                  borderColor: "#e8ddd0",
                  background: active ? "#f5f0e8" : "transparent",
                  fontFamily: "'Times New Roman', serif",
                  fontSize: 13,
                  fontWeight: active ? 700 : 500,
                  color: active ? "#8b1a1a" : "#3d2b2b",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                <span className="flex items-center gap-2">
                  {link.icon && <span>{link.icon}</span>}
                  {link.name}
                  {link.badge && (
                    <span
                      className="text-[8px] px-1 py-0.5 font-bold"
                      style={{ background: "#8b1a1a", color: "#faf7f2" }}
                    >
                      {link.badge}
                    </span>
                  )}
                </span>
                {active && <div className="w-1.5 h-1.5 bg-[#8b1a1a] rotate-45" />}
              </Link>
            );
          })}

          <div className="p-4 flex gap-3">
            <Link
              href="/verify"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 text-[10px] font-semibold tracking-widest uppercase"
              style={{ border: "1px solid #c9b99a", color: "#5a4040", fontFamily: "'Times New Roman', serif" }}
            >
              <ShieldCheck size={11} /> Verify UFRN
            </Link>
            <Link
              href="/submit"
              onClick={() => setIsOpen(false)}
              className="flex-1 flex items-center justify-center gap-1.5 py-3 text-[10px] font-bold tracking-widest uppercase"
              style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
            >
              List Startup <ChevronRight size={10} />
            </Link>
          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="h-[96px] md:h-[120px]" />
    </>
  );
}
