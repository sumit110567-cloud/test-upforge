// components/navbar.tsx
// Institutional registry-grade navbar — FT.com / WSJ / Crunchbase authority patterns
// Features: Creamy/white aesthetic, theme switcher, search entry point, authority badges

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, ShieldCheck, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  const links: NavLink[] = [
    { name: "Registry", href: "/registry" },
    { name: "Chronicle", href: "/" },
    { name: "Journal", href: "/blog" },
    { name: "Reports", href: "/reports" },
    { name: "About", href: "/about" },
  ];

  const isLinkActive = (link: NavLink) => {
    if (link.external) return false;
    if (link.href === "/") return pathname === "/";
    return pathname === link.href || pathname.startsWith(link.href + "/");
  };

  const desktopClass = (link: NavLink) => {
    const active = isLinkActive(link);
    return `relative px-4 py-1 text-[12px] font-medium tracking-wide uppercase transition-colors border-b-2 ${
      active
        ? "text-ink-900 dark:text-cream-light border-ink-900 dark:border-cream-light"
        : "text-ink-500 dark:text-ink-400 border-transparent hover:text-ink-700 dark:hover:text-cream-light hover:border-ink-300 dark:hover:border-ink-600"
    }`;
  };

  const mobileClass = (link: NavLink) => {
    const active = isLinkActive(link);
    return `flex items-center justify-between px-5 py-4 text-sm font-medium tracking-wide uppercase transition-colors ${
      active
        ? "text-ink-900 dark:text-cream-light bg-cream-dark dark:bg-charcoal-800"
        : "text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-light hover:bg-cream-dark/60 dark:hover:bg-charcoal-800/60"
    }`;
  };

  const renderDesktop = (link: NavLink) =>
    link.external ? (
      <a key={link.name} href={link.href} className={desktopClass(link)}>
        {link.name}
      </a>
    ) : (
      <Link key={link.name} href={link.href} className={desktopClass(link)}>
        {link.name}
      </Link>
    );

  const renderMobile = (link: NavLink) => {
    const active = isLinkActive(link);
    const inner = (
      <>
        {link.name}
        {active && <span className="w-1.5 h-1.5 rounded-full bg-ink-900 dark:bg-cream-light" />}
      </>
    );
    return link.external ? (
      <a
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={mobileClass(link)}
      >
        {inner}
      </a>
    ) : (
      <Link
        key={link.name}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className={mobileClass(link)}
      >
        {inner}
      </Link>
    );
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-cream-light/95 dark:bg-charcoal-950/95 backdrop-blur-md border-b border-ink-200 dark:border-charcoal-800 shadow-sm"
            : "bg-cream-light dark:bg-charcoal-950 border-b border-ink-200 dark:border-charcoal-800"
        }`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
          {/* Brand — LARGER (w-9 h-9) for institutional weight */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative w-9 h-9 overflow-hidden rounded flex-shrink-0 bg-ink-900 dark:bg-cream-light transition-all duration-200 group-hover:scale-105">
              <Image
                src="/logo.jpg"
                alt="UpForge"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span
                className="text-xl tracking-tight text-ink-900 dark:text-cream-light group-hover:text-ink-700 dark:group-hover:text-cream-dark transition-colors"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                UpForge
              </span>
              {/* AUTHORITY BADGE — GLOBAL REGISTRY / INDIA REGISTRY */}
              <span className="block text-[9px] text-ink-500 dark:text-ink-400 tracking-[0.22em] uppercase font-medium">
                GLOBAL REGISTRY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation — SPACING INCREASED (gap-2) */}
          <nav className="hidden md:flex items-center gap-2 flex-1 justify-center">
            {links.map(renderDesktop)}
          </nav>

          {/* Right side — Search + Theme + CTAs */}
          <div className="hidden md:flex items-center gap-1 flex-shrink-0">
            {/* Search — Registry expectation signal */}
            <button
              className="p-2 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-light transition-colors rounded-full hover:bg-ink-100 dark:hover:bg-charcoal-800"
              aria-label="Search registry"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle — Institutional with smooth transition */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-light transition-all duration-200 rounded-full hover:bg-ink-100 dark:hover:bg-charcoal-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
            )}

            {/* CTAs — Registry psychology: Trust CTA + Conversion CTA */}
            <div className="flex items-center gap-2 ml-2">
              <Link
                href="/verify"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 border border-ink-300 dark:border-charcoal-700 bg-cream-light dark:bg-transparent text-[11px] font-semibold tracking-wider uppercase text-ink-700 dark:text-ink-300 hover:border-ink-900 dark:hover:border-cream-light hover:text-ink-900 dark:hover:text-cream-light transition-all rounded"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                Verify UFRN
              </Link>
              <Link
                href="/submit"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-ink-900 dark:bg-cream-light text-cream-light dark:text-ink-900 text-[11px] font-bold tracking-wider uppercase hover:bg-ink-800 dark:hover:bg-cream-dark transition-all rounded"
              >
                List Startup <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 text-ink-900 dark:text-cream-light hover:bg-ink-100 dark:hover:bg-charcoal-800 transition-colors rounded"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu — Enhanced with theme support */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-cream-light dark:bg-charcoal-950 border-b border-ink-200 dark:border-charcoal-800 transition-transform duration-200 ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <div className="divide-y divide-ink-100 dark:divide-charcoal-800">
            {links.map(renderMobile)}
          </div>

          {/* Mobile CTAs + Theme toggle row */}
          <div className="px-5 py-4 flex items-center justify-between gap-3 border-t border-ink-200 dark:border-charcoal-800">
            <Link
              href="/verify"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 border border-ink-300 dark:border-charcoal-700 bg-cream-light dark:bg-transparent text-[11px] font-semibold tracking-wider uppercase text-ink-700 dark:text-ink-300 hover:border-ink-900 dark:hover:border-cream-light transition-colors rounded"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Verify UFRN
            </Link>
            <Link
              href="/submit"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink-900 dark:bg-cream-light text-cream-light dark:text-ink-900 text-[11px] font-bold tracking-wider uppercase rounded"
            >
              List Startup <ChevronRight className="w-3.5 h-3.5" />
            </Link>
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 text-ink-600 dark:text-ink-400 hover:text-ink-900 dark:hover:text-cream-light transition-all duration-200 rounded-full hover:bg-ink-100 dark:hover:bg-charcoal-800"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
