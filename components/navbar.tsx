"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Search, ChevronRight } from "lucide-react";

  const links = [
    { name: "Home", href: "/" },
    { name: "Registry", href: "/startup" },
    { name: "Founders", href: "/founder-stories" },
    { name: "Reports", href: "/reports" },
    { name: "About", href: "/about" },
  ];

export function Header() {
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [searchOpen,  setSearchOpen]  = useState(false);
  const [scrolled,    setScrolled]    = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const pathname  = usePathname();

  /* scroll shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close mobile menu on route change */
  useEffect(() => { setMenuOpen(false); setSearchOpen(false); }, [pathname]);

  /* focus search input when opened */
  useEffect(() => {
    if (searchOpen) setTimeout(() => searchRef.current?.focus(), 80);
  }, [searchOpen]);

  /* close on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setSearchOpen(false); setMenuOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* ─────────────────────────── HEADER ─────────────────────────── */}
      <header
        className={`
          fixed top-0 left-0 right-0 z-50
          bg-white
          transition-shadow duration-300
          ${scrolled ? "shadow-[0_1px_0_#e5e5e5,0_2px_12px_rgba(0,0,0,0.05)]" : "border-b border-[#E5E5E5]"}
        `}
      >
        {/* ── top micro-strip (editorial dateline) ── */}
        <div className="hidden lg:block border-b border-[#F0F0F0]">
          <div className="max-w-[1440px] mx-auto px-6 xl:px-10 flex items-center justify-between h-8">
            <p
              className="text-[10px] text-[#AAAAAA] tracking-[0.18em] uppercase"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              India's Independent Startup Registry &amp; Intelligence Platform
            </p>
            <div className="flex items-center gap-5">
              {/* live dot */}
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500" />
                </span>
                <span className="text-[9px] text-[#AAAAAA] tracking-[0.18em] uppercase">
                  Live · Updated hourly
                </span>
              </div>
              <span className="text-[#E5E5E5]">|</span>
              <Link
                href="/submit"
                className="text-[9px] text-[#AAAAAA] hover:text-[#111111] tracking-[0.14em] uppercase transition-colors duration-150"
              >
                List your startup free →
              </Link>
            </div>
          </div>
        </div>

        {/* ── main header row ── */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-10">
          <div className="flex items-center h-14 sm:h-[60px] gap-4">

            {/* ── Logo ── */}
            <Link
              href="/"
              aria-label="UpForge — Home"
              className="flex items-center gap-2.5 flex-shrink-0 group"
            >
              <div className="relative w-7 h-7 overflow-hidden ring-1 ring-[#E5E5E5] group-hover:ring-[#F5C542] transition-all duration-200">
                <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
              </div>
              <span
                className="text-[20px] font-bold tracking-[-0.025em] text-[#111111] group-hover:text-[#333333] transition-colors duration-150"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                UpForge
              </span>
            </Link>

            {/* ── Desktop Nav ── */}
            <nav
              className="hidden md:flex items-center flex-1 justify-center gap-1"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href || pathname.startsWith(href + "/");
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      relative px-4 py-1.5 text-[13px] font-medium tracking-[0.02em]
                      transition-colors duration-150
                      after:content-[''] after:absolute after:bottom-0 after:left-4 after:right-4 after:h-[2px]
                      after:rounded-full after:transition-all after:duration-200
                      ${
                        active
                          ? "text-[#111111] after:bg-[#F5C542]"
                          : "text-[#555555] hover:text-[#111111] after:bg-transparent hover:after:bg-[#E5E5E5]"
                      }
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
            </nav>

            {/* ── Right Actions ── */}
            <div className="hidden md:flex items-center gap-2 flex-shrink-0 ml-auto md:ml-0">
              {/* Search trigger */}
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="
                  flex items-center justify-center w-9 h-9
                  text-[#555555] hover:text-[#111111]
                  hover:bg-[#F7F7F7] rounded-sm
                  transition-all duration-150
                "
              >
                <Search size={16} strokeWidth={1.75} />
              </button>

              {/* Sign In */}
              <Link
                href="/sign-in"
                className="
                  px-4 h-9 flex items-center
                  text-[12px] font-semibold tracking-[0.04em] text-[#555555]
                  border border-[#E5E5E5] hover:border-[#BBBBBB] hover:text-[#111111]
                  rounded-sm transition-all duration-150
                "
              >
                Sign In
              </Link>

              {/* Submit CTA */}
              <Link
                href="/submit"
                className="
                  px-4 h-9 flex items-center gap-1.5
                  text-[12px] font-semibold tracking-[0.04em]
                  bg-[#111111] text-white
                  hover:bg-[#333333]
                  rounded-sm transition-all duration-150
                "
              >
                Submit Startup
                <ChevronRight size={13} strokeWidth={2.5} />
              </Link>
            </div>

            {/* ── Mobile: search + hamburger ── */}
            <div className="flex md:hidden items-center gap-1 ml-auto">
              <button
                onClick={() => setSearchOpen(true)}
                aria-label="Open search"
                className="flex items-center justify-center w-9 h-9 text-[#555555] hover:text-[#111111] transition-colors"
              >
                <Search size={17} strokeWidth={1.75} />
              </button>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="flex items-center justify-center w-9 h-9 text-[#111111] hover:bg-[#F7F7F7] rounded-sm transition-colors"
              >
                {menuOpen ? <X size={18} strokeWidth={1.75} /> : <Menu size={18} strokeWidth={1.75} />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile nav drawer ── */}
        <div
          className={`
            md:hidden overflow-hidden border-t border-[#E5E5E5]
            transition-all duration-200 ease-in-out
            ${menuOpen ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <nav className="bg-white" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => {
              const active = pathname === href || pathname.startsWith(href + "/");
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    flex items-center justify-between px-5 py-4
                    text-[14px] font-medium tracking-[0.01em]
                    border-b border-[#F0F0F0]
                    transition-colors duration-150
                    ${active
                      ? "text-[#111111] bg-[#FAFAFA]"
                      : "text-[#555555] hover:text-[#111111] hover:bg-[#FAFAFA]"
                    }
                  `}
                >
                  {label}
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5C542]" />
                  )}
                </Link>
              );
            })}

            {/* Mobile CTA row */}
            <div className="px-5 py-4 flex items-center justify-between gap-3 bg-[#FAFAFA]">
              <Link
                href="/sign-in"
                onClick={() => setMenuOpen(false)}
                className="
                  flex-1 flex items-center justify-center h-10
                  text-[12px] font-semibold text-[#555555]
                  border border-[#E5E5E5] rounded-sm
                  hover:border-[#BBBBBB] hover:text-[#111111]
                  transition-all duration-150
                "
              >
                Sign In
              </Link>
              <Link
                href="/submit"
                onClick={() => setMenuOpen(false)}
                className="
                  flex-1 flex items-center justify-center gap-1.5 h-10
                  text-[12px] font-semibold text-white
                  bg-[#111111] hover:bg-[#333333] rounded-sm
                  transition-all duration-150
                "
              >
                Submit Startup <ChevronRight size={12} strokeWidth={2.5} />
              </Link>
            </div>

            {/* Mobile live strip */}
            <div className="px-5 py-2.5 flex items-center gap-2 border-t border-[#F0F0F0]">
              <span className="relative flex h-[6px] w-[6px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-emerald-500" />
              </span>
              <span className="text-[10px] text-[#AAAAAA] tracking-[0.14em] uppercase">
                Live · Updated hourly
              </span>
            </div>
          </nav>
        </div>
      </header>

      {/* ─────────────────────────── SEARCH OVERLAY ─────────────────────────── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[60] flex flex-col items-center pt-[120px] sm:pt-[140px] px-4"
          style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(6px)" }}
        >
          {/* Close button */}
          <button
            onClick={() => setSearchOpen(false)}
            aria-label="Close search"
            className="absolute top-5 right-5 flex items-center justify-center w-9 h-9 text-[#555555] hover:text-[#111111] hover:bg-[#F0F0F0] rounded-sm transition-colors"
          >
            <X size={18} strokeWidth={1.75} />
          </button>

          {/* Search box */}
          <div className="w-full max-w-[640px]">
            <p
              className="text-[10px] text-[#AAAAAA] tracking-[0.22em] uppercase mb-4 text-center"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Search UpForge
            </p>

            <div className="relative border-b-2 border-[#111111] flex items-center gap-3 pb-1">
              <Search size={18} strokeWidth={1.5} className="text-[#AAAAAA] flex-shrink-0" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    window.location.href = `/startup?q=${encodeURIComponent(searchQuery.trim())}`;
                  }
                }}
                placeholder="Search startups, sectors, founders…"
                className="
                  flex-1 bg-transparent outline-none
                  text-[18px] text-[#111111] placeholder:text-[#CCCCCC]
                  py-2 font-medium
                "
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                aria-label="Search query"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-[#CCCCCC] hover:text-[#555555] transition-colors flex-shrink-0"
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["AI Startups", "Indian Unicorns", "SaaS Companies", "FinTech", "EdTech", "Climate Tech"].map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    window.location.href = `/startup?q=${encodeURIComponent(tag)}`;
                  }}
                  className="
                    px-3 py-1.5
                    text-[11px] text-[#555555] tracking-[0.06em]
                    border border-[#E5E5E5] hover:border-[#F5C542] hover:text-[#111111]
                    transition-all duration-150 rounded-sm
                  "
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
