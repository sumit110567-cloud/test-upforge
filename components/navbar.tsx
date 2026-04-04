"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search, Globe } from "lucide-react";

type NavItem = {
  name: string;
  href: string;
  dropdown?: { label: string; href: string; desc?: string }[];
};

const NAV_ITEMS: NavItem[] = [
  {
    name: "Registry",
    href: "/registry",
    dropdown: [
      { label: "Global Startups", href: "/registry", desc: "5000+ verified companies worldwide" },
      { label: "Unicorn Tracker", href: "/registry?filter=unicorn", desc: "Billion-dollar companies" },
      { label: "By Sector", href: "/registry?view=sectors", desc: "AI, Fintech, Climate & more" },
      { label: "Verify UFRN", href: "/verify", desc: "Authenticate a startup" },
    ],
  },
  {
    name: "Intelligence",
    href: "/reports",
    dropdown: [
      { label: "Market Reports", href: "/reports", desc: "Deep sector analysis" },
      { label: "Founder Stories", href: "/founder-stories", desc: "Behind the founding moment" },
      { label: "Research", href: "/research", desc: "Data-driven ecosystem insights" },
    ],
  },
  { name: "Journal", href: "/blog" },
  { name: "About", href: "/about" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); setActiveDropdown(null); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <style>{`
        .uf-nav-link { position: relative; }
        .uf-nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 1px;
          background: #C59A2E;
          transform: scaleX(0);
          transition: transform 0.22s ease;
          transform-origin: left;
        }
        .uf-nav-link:hover::after,
        .uf-nav-link.active::after { transform: scaleX(1); }
        .uf-dropdown {
          opacity: 0; pointer-events: none;
          transform: translateY(6px);
          transition: opacity 0.18s ease, transform 0.18s ease;
        }
        .uf-dropdown.open {
          opacity: 1; pointer-events: all;
          transform: translateY(0);
        }
        .uf-ticker { animation: ticker 28s linear infinite; }
        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .uf-search-input:focus { outline: none; border-color: #C59A2E; }
      `}</style>

      {/* Ticker bar */}
      <div className="hidden lg:block overflow-hidden" style={{ background: "#0D0D0D", height: 30 }}>
        <div className="max-w-[1520px] mx-auto px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-2 flex-shrink-0">
            <Globe size={10} style={{ color: "#C59A2E" }} />
            <span style={{ fontSize: 9, color: "#C59A2E", letterSpacing: "0.25em", fontFamily: "system-ui", fontWeight: 700 }}>
              UPFORGE GLOBAL
            </span>
          </div>
          <div className="flex-1 overflow-hidden mx-8">
            <div className="uf-ticker whitespace-nowrap" style={{ fontSize: 10, color: "#888", fontFamily: "system-ui", letterSpacing: "0.08em" }}>
              🌏 &nbsp; 5,000+ verified startups globally &nbsp;·&nbsp; 🦄 &nbsp; Track emerging unicorns &nbsp;·&nbsp; 📊 &nbsp; Real-time funding data &nbsp;·&nbsp; 🔍 &nbsp; UFRN verification live &nbsp;·&nbsp; 🚀 &nbsp; Submit your startup free
            </div>
          </div>
          <div className="flex items-center gap-4 flex-shrink-0">
            <Link href="/submit" style={{ fontSize: 9, color: "#C59A2E", letterSpacing: "0.15em", fontFamily: "system-ui", fontWeight: 700 }}>
              LIST FREE →
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 100,
          background: scrolled ? "rgba(255,252,247,0.97)" : "#FFFCF7",
          borderBottom: "1px solid #E2DDD4",
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          transition: "all 0.2s ease",
          marginTop: 0,
        }}
      >
        {/* Top rule */}
        <div style={{ height: 2, background: "linear-gradient(90deg, #8B6914 0%, #C59A2E 30%, #E8C547 50%, #C59A2E 70%, #8B6914 100%)" }} />

        <div className="max-w-[1520px] mx-auto px-6 lg:px-8" style={{ height: 58 }}>
          <div className="flex items-center justify-between h-full gap-6">

            {/* Brand */}
            <Link href="/" className="flex items-center gap-3 flex-shrink-0 group">
              <div style={{ width: 30, height: 30, position: "relative", overflow: "hidden" }}>
                <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
              </div>
              <div>
                <div style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#0D0D0D",
                  lineHeight: 1,
                  letterSpacing: "-0.01em",
                  transition: "color 0.15s",
                }}
                  className="group-hover:text-[#C59A2E]"
                >
                  UpForge
                </div>
                <div style={{ fontSize: 7.5, color: "#999", letterSpacing: "0.22em", fontFamily: "system-ui", fontWeight: 600, textTransform: "uppercase", marginTop: 2 }}>
                  Global Startup Registry
                </div>
              </div>
            </Link>

            {/* Vertical divider */}
            <div style={{ width: 1, height: 28, background: "#E2DDD4", flexShrink: 0 }} className="hidden lg:block" />

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-0 flex-1">
              {NAV_ITEMS.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={`uf-nav-link flex items-center gap-1 px-4 py-1.5 ${isActive(item.href) ? "active" : ""}`}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      fontFamily: "system-ui",
                      color: isActive(item.href) ? "#0D0D0D" : "#555",
                      whiteSpace: "nowrap",
                      transition: "color 0.15s",
                    }}
                  >
                    {item.name}
                    {item.dropdown && <ChevronDown size={10} style={{ opacity: 0.5, marginTop: 1 }} />}
                  </Link>

                  {/* Dropdown */}
                  {item.dropdown && (
                    <div
                      className={`uf-dropdown absolute top-full left-0 ${activeDropdown === item.name ? "open" : ""}`}
                      style={{
                        background: "#FFFCF7",
                        border: "1px solid #E2DDD4",
                        borderTop: "2px solid #C59A2E",
                        minWidth: 240,
                        boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                        zIndex: 200,
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          style={{ display: "block", padding: "10px 16px", borderBottom: "1px solid #F0EBE3" }}
                          className="group/sub"
                        >
                          <div style={{ fontSize: 11, fontWeight: 600, color: "#0D0D0D", fontFamily: "system-ui", letterSpacing: "0.05em", transition: "color 0.12s" }}
                            className="group-hover/sub:text-[#C59A2E]">
                            {sub.label}
                          </div>
                          {sub.desc && <div style={{ fontSize: 10, color: "#999", marginTop: 2, fontFamily: "system-ui" }}>{sub.desc}</div>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
              {/* Search toggle */}
              <button
                onClick={() => setSearchOpen(v => !v)}
                style={{
                  width: 34, height: 34,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  border: "1px solid #E2DDD4",
                  background: "transparent",
                  cursor: "pointer",
                  color: "#555",
                  transition: "all 0.15s",
                }}
                className="hover:border-[#C59A2E] hover:text-[#C59A2E]"
              >
                <Search size={14} />
              </button>

              <Link
                href="/verify"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "system-ui",
                  padding: "7px 14px",
                  border: "1px solid #D5D0C8",
                  color: "#555",
                  transition: "all 0.15s",
                  whiteSpace: "nowrap",
                }}
                className="hover:border-[#0D0D0D] hover:text-[#0D0D0D]"
              >
                Verify UFRN
              </Link>

              <Link
                href="/submit"
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  fontFamily: "system-ui",
                  padding: "7px 16px",
                  background: "#0D0D0D",
                  color: "#FFFCF7",
                  transition: "background 0.15s",
                  whiteSpace: "nowrap",
                }}
                className="hover:bg-[#C59A2E]"
              >
                List Startup
              </Link>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden"
              onClick={() => setIsOpen(v => !v)}
              style={{ padding: 6, color: "#0D0D0D" }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search bar (expands below header) */}
        {searchOpen && (
          <div style={{ borderTop: "1px solid #E2DDD4", background: "#FFFCF7", padding: "12px 32px" }}>
            <div className="max-w-[1520px] mx-auto flex items-center gap-3">
              <Search size={14} style={{ color: "#999", flexShrink: 0 }} />
              <input
                autoFocus
                type="text"
                placeholder="Search startups, founders, sectors…"
                className="uf-search-input flex-1"
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: "1px solid #D5D0C8",
                  padding: "4px 0",
                  fontSize: 14,
                  fontFamily: "'Georgia', serif",
                  color: "#0D0D0D",
                }}
              />
              <button onClick={() => setSearchOpen(false)} style={{ color: "#999", cursor: "pointer" }}>
                <X size={14} />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 90,
            background: "rgba(13,13,13,0.5)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            style={{
              position: "absolute",
              top: 90,
              left: 0,
              right: 0,
              background: "#FFFCF7",
              borderBottom: "2px solid #C59A2E",
              maxHeight: "80vh",
              overflowY: "auto",
            }}
            onClick={e => e.stopPropagation()}
          >
            {NAV_ITEMS.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    borderBottom: "1px solid #EDE9E0",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    fontFamily: "system-ui",
                    color: isActive(item.href) ? "#C59A2E" : "#0D0D0D",
                  }}
                >
                  {item.name}
                </Link>
                {item.dropdown?.map(sub => (
                  <Link
                    key={sub.href}
                    href={sub.href}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: "block",
                      padding: "10px 36px",
                      borderBottom: "1px solid #F5F1EA",
                      fontSize: 11,
                      color: "#666",
                      fontFamily: "system-ui",
                    }}
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            ))}
            <div style={{ padding: "16px 24px", display: "flex", gap: 12, background: "#F5F1EA" }}>
              <Link
                href="/verify"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1, textAlign: "center", padding: "10px",
                  border: "1px solid #D5D0C8",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", fontFamily: "system-ui", color: "#555",
                }}
              >
                Verify UFRN
              </Link>
              <Link
                href="/submit"
                onClick={() => setIsOpen(false)}
                style={{
                  flex: 1, textAlign: "center", padding: "10px",
                  background: "#0D0D0D", color: "#FFFCF7",
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", fontFamily: "system-ui",
                }}
              >
                List Startup
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
