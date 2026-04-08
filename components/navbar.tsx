"use client";
// components/navbar.tsx — GLOBAL AUTHORITY EDITORIAL v4
// UpForge.org — The World's Startup Registry of Record
// FT.com × The Economist × Bloomberg aesthetic
// Three-tier header: dateline strip → masthead → nav rail

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ShieldCheck, ChevronRight, Globe, TrendingUp, Search, X, Menu } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
  badge?: string;
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "Registry", href: "/registry", badge: "5K+" },
  { name: "Unicorns", href: "/indian-unicorns" },
  { name: "Chronicle", href: "/blog" },
  { name: "Reports", href: "/reports" },
  { name: "Verify UFRN", href: "/verify" },
  { name: "About", href: "/about" },
];

const TICKER_ITEMS = [
  "🇮🇳 India leads with 112 unicorns in 2026",
  "🌍 5,000+ startups verified across 50+ countries",
  "🔴 NEW: Southeast Asia Startup Index Q1 2026",
  "📊 UFRN™ — The global standard for startup identity",
  "🇺🇸 US startup funding up 34% YoY — Full report →",
  "🇸🇬 Singapore becomes #3 global startup hub by UFRN count",
  "🏆 UpForge Registry cited by Harvard, IIM, Stanford researchers",
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [tickerIndex, setTickerIndex] = useState(0);
  const [tickerVisible, setTickerVisible] = useState(true);
  const pathname = usePathname();
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    const id = setInterval(() => {
      setTickerVisible(false);
      setTimeout(() => {
        setTickerIndex(i => (i + 1) % TICKER_ITEMS.length);
        setTickerVisible(true);
      }, 400);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const isActive = (link: NavLink) => {
    if (link.external) return false;
    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

  const now = new Date();
  const dateLine = now.toLocaleDateString("en-GB", {
    weekday: "long", day: "numeric", month: "long", year: "numeric"
  });

  return (
    <>
      {/* ── TIER 1: DATELINE STRIP ───────────────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 h-8 flex items-center border-b"
        style={{
          background: "#1a0a0a",
          borderColor: "#8b1a1a",
        }}
      >
        <div className="max-w-[1600px] mx-auto px-4 w-full flex items-center justify-between">
          {/* Left: Date */}
          <span
            className="text-[10px] tracking-[0.18em] uppercase hidden sm:block"
            style={{ fontFamily: "'Times New Roman', serif", color: "#c9b99a", opacity: 0.7 }}
          >
            {dateLine}
          </span>

          {/* Center: Ticker */}
          <div className="flex-1 flex items-center justify-center overflow-hidden px-4">
            <div className="flex items-center gap-3">
              <span
                className="text-[9px] tracking-[0.2em] uppercase font-bold px-2 py-0.5 flex-shrink-0"
                style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
              >
                LIVE
              </span>
              <span
                className="text-[10px] truncate transition-all duration-400"
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

          {/* Right: Global domains */}
          <div className="hidden sm:flex items-center gap-4">
            
              href="https://www.upforge.in"
              className="text-[9px] tracking-widest uppercase transition-colors"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              🇮🇳 India
            </a>
            <span style={{ color: "#3d2b2b" }}>·</span>
            
              href="https://www.upforge.org"
              className="text-[9px] tracking-widest uppercase transition-colors font-semibold"
              style={{ fontFamily: "'Times New Roman', serif", color: "#c9b99a" }}
            >
              🌍 Global
            </a>
          </div>
        </div>
      </div>

      {/* ── TIER 2: MASTHEAD ─────────────────────────────────────────────── */}
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

            {/* Logo + wordmark */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
              <div
                className="w-9 h-9 overflow-hidden flex-shrink-0"
                style={{ border: "1px solid #c9b99a" }}
              >
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

            {/* Center: tagline (hidden on small) */}
            <div className="hidden xl:flex flex-col items-center">
              <div
                className="h-px w-24 mb-2"
                style={{ background: "#c9b99a" }}
              />
              <span
                className="text-[9px] tracking-[0.28em] uppercase text-center"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
              >
                The World's Startup Registry of Record
              </span>
              <div
                className="h-px w-24 mt-2"
                style={{ background: "#c9b99a" }}
              />
            </div>

            {/* Right: Search + CTAs */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Search */}
              <div className="relative hidden md:flex items-center">
                {searchOpen ? (
                  <div className="flex items-center border" style={{ borderColor: "#8b1a1a", background: "#fff" }}>
                    <input
                      ref={searchRef}
                      type="text"
                      placeholder="Search registry…"
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      className="px-3 py-1.5 text-xs outline-none w-48"
                      style={{ fontFamily: "'Times New Roman', serif", color: "#1a0a0a" }}
                    />
                    <button
                      onClick={() => { setSearchOpen(false); setSearchQuery(""); }}
                      className="px-2 py-1.5 hover:bg-[#f5f0e8] transition-colors"
                    >
                      <X size={12} color="#8b1a1a" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 hover:bg-[#f5f0e8] transition-colors"
                    aria-label="Search"
                  >
                    <Search size={14} color="#8b6a6a" />
                  </button>
                )}
              </div>

              <Link
                href="/verify"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-[10px] font-semibold tracking-widest uppercase transition-all hover:bg-[#f5f0e8]"
                style={{
                  border: "1px solid #c9b99a",
                  color: "#5a4040",
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                <ShieldCheck size={11} />
                Verify UFRN
              </Link>

              <Link
                href="/submit"
                className="hidden md:inline-flex items-center gap-1.5 px-4 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-all hover:opacity-90"
                style={{
                  background: "#8b1a1a",
                  color: "#faf7f2",
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                List Startup <ChevronRight size={10} />
              </Link>

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
        </div>

        {/* ── TIER 3: NAV RAIL ──────────────────────────────────────────── */}
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
                      <span
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8b1a1a] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Right: live stat */}
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

      {/* ── MOBILE MENU ──────────────────────────────────────────────────── */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-200 ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        style={{ background: "rgba(0,0,0,0.35)", backdropFilter: "blur(2px)" }}
        onClick={() => setIsOpen(false)}
      />

      {/* Panel — positioned below all 3 header tiers */}
      <div
        className={`fixed left-0 right-0 z-50 md:hidden border-b-2 transition-all duration-200 overflow-y-auto`}
        style={{
          top: 104, // 32px dateline + 72px masthead = 104px
          maxHeight: "calc(100dvh - 104px)",
          background: "#faf7f2",
          borderColor: "#8b1a1a",
          transform: isOpen ? "translateY(0)" : "translateY(-6px)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* Search */}
        <div className="px-4 py-3 border-b" style={{ borderColor: "#e8ddd0" }}>
          <div className="flex items-center border" style={{ borderColor: "#c9b99a" }}>
            <Search size={14} color="#8b6a6a" className="ml-3 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search registry…"
              className="flex-1 px-3 py-2 text-sm outline-none bg-transparent"
              style={{ fontFamily: "'Times New Roman', serif" }}
            />
          </div>
        </div>

        {/* Nav links */}
        {NAV_LINKS.map(link => {
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
                {link.name}
                {link.badge && (
                  <span
                    className="text-[8px] px-1.5 py-0.5 font-bold"
                    style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
                  >
                    {link.badge}
                  </span>
                )}
              </span>
              {active && <div className="w-1.5 h-1.5 bg-[#8b1a1a] rotate-45 flex-shrink-0" />}
            </Link>
          );
        })}

        {/* CTA buttons */}
        <div className="p-4 flex gap-3" style={{ borderTop: "1px solid #e8ddd0" }}>
          <Link
            href="/verify"
            onClick={() => setIsOpen(false)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[10px] font-semibold tracking-widest uppercase"
            style={{ border: "1px solid #c9b99a", color: "#5a4040", fontFamily: "'Times New Roman', serif" }}
          >
            <ShieldCheck size={11} /> Verify UFRN
          </Link>
          <Link
            href="/submit"
            onClick={() => setIsOpen(false)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-[10px] font-bold tracking-widest uppercase"
            style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
          >
            List Startup <ChevronRight size={10} />
          </Link>
        </div>
      </div>

      {/* Spacer — 3-tier header height */}
      <div className="h-[112px] md:h-[120px]" />
    </>
  );
}
