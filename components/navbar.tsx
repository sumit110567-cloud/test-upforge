import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Globe } from 'lucide-react';

/**
 * Navbar Component
 * Updated for cross-domain navigation (.in vs .org) 
 * and refactored for the preview environment.
 */
export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Tracking scroll for header styling
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    
    // Simulating path tracking in the single-file environment
    setCurrentPath(window.location.pathname);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on state change
  useEffect(() => {
    if (isOpen) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const links = [
    { name: "Home", href: "/" },
    { 
      name: "Indian Registry", 
      href: "https://www.upforge.in/startup",
      external: true,
      description: ".in domain"
    },
    {
      name: "Global Registry",
      href: "https://www.upforge.org/registry",
      external: true,
      description: ".org domain"
    },
    { name: "Journal", href: "/blog" },
    { name: "Reports", href: "/reports" },
    { name: "About", href: "/about" },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0]">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-[#D5D0C8] shadow-[0_1px_12px_rgba(0,0,0,0.06)]"
            : "bg-[#F7F5F0] border-b border-[#D5D0C8]"
        }`}
        style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-6">

          {/* ── Brand ── */}
          <a href="/" className="flex items-center gap-2.5 group flex-shrink-0 cursor-pointer">
            <div className="relative w-7 h-7 overflow-hidden flex-shrink-0 bg-[#1C1C1C] rounded-sm flex items-center justify-center">
               <span className="text-white text-[10px] font-bold">UF</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span
                className="text-lg tracking-tight text-[#1C1C1C] group-hover:text-[#444] transition-colors font-serif"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                UpForge
              </span>
              <span className="text-[8px] text-[#AAA] tracking-[0.18em] uppercase hidden sm:block">
                Startup Registry
              </span>
            </div>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden md:flex items-center gap-0 flex-1 justify-center">
            {links.map((link) => {
              const isActive = !link.external && (currentPath === link.href);
              
              const NavItemContent = (
                <span className="flex flex-col items-center">
                  <span>{link.name}</span>
                  {link.description && (
                    <span className="text-[7px] opacity-60 lowercase mt-[-2px] tracking-normal font-normal">
                      {link.description}
                    </span>
                  )}
                </span>
              );

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-1 text-[11px] font-medium tracking-wide uppercase transition-colors border-b-2 flex items-center gap-1 ${
                    isActive
                      ? "text-[#1C1C1C] border-[#1C1C1C]"
                      : "text-[#888] border-transparent hover:text-[#1C1C1C] hover:border-[#D5D0C8]"
                  }`}
                >
                  {NavItemContent}
                </a>
              );
            })}
          </nav>

          {/* ── Right Side ── */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            {/* Live dot */}
            <div className="flex items-center gap-1.5 border border-[#DDD] bg-white px-2.5 py-1">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[9px] text-[#666] font-medium tracking-wider uppercase">Live</span>
            </div>

            <a
              href="/submit"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1C1C1C] text-white text-[11px] font-bold tracking-wider uppercase hover:bg-[#333] transition-colors"
            >
              List Startup <ChevronRight className="w-3 h-3" />
            </a>
          </div>

          {/* ── Mobile Toggle ── */}
          <button
            className="md:hidden p-1.5 text-[#1C1C1C] hover:bg-[#E8E4DC] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* ── Mobile Menu ── */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-200 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"
          onClick={() => setIsOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-14 left-0 right-0 bg-[#F7F5F0] border-b-2 border-[#1C1C1C] transition-transform duration-200 ${
            isOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          {/* Nav links */}
          <div className="divide-y divide-[#E8E4DC]">
            {links.map((link) => {
              const isActive = !link.external && (currentPath === link.href);
              
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-5 py-4 transition-colors ${
                    isActive
                      ? "text-[#1C1C1C] bg-white"
                      : "text-[#666] hover:text-[#1C1C1C] hover:bg-white/60"
                  }`}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium tracking-wide uppercase">{link.name}</span>
                    {link.description && (
                      <span className="text-[9px] text-[#888] lowercase tracking-normal -mt-0.5">
                        {link.description}
                      </span>
                    )}
                  </div>
                  {link.external ? (
                    <Globe size={14} className="text-[#AAA]" />
                  ) : isActive ? (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#1C1C1C]" />
                  ) : null}
                </a>
              );
            })}
          </div>

          {/* Bottom CTA + Live */}
          <div className="px-5 py-4 flex items-center justify-between gap-3 border-t border-[#D5D0C8] bg-white/40">
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              <span className="text-[10px] text-[#888] font-medium uppercase tracking-wider">Live · Updated every 10 min</span>
            </div>
            <a
              href="/submit"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#1C1C1C] text-white text-[11px] font-bold tracking-wider uppercase"
            >
              List Startup <ChevronRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Page Content Placeholder */}
      <main className="pt-24 px-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif text-[#1C1C1C] mb-4">Registry Navigation Updated</h1>
        <p className="text-[#666] leading-relaxed">
          The navigation system has been refactored to support cross-domain links between the 
          <strong> Indian Registry (.in)</strong> and the <strong>Global Registry (.org)</strong>. 
          This ensures seamless movement for users while maintaining domain integrity.
        </p>
      </main>
    </div>
  );
}
