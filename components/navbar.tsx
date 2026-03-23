// components/navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, Globe } from "lucide-react";

export function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);



  /*
  NAV STRUCTURE
  Wikipedia-style hierarchy
  Improves crawl clarity
  */

  const links = [
    { name: "Home", href: "/" },

    { name: "India Registry", href: "/startup" },

    {
      name: "Global Registry",
      href: "https://www.upforge.org/registry",
      external: true,
    },

    { name: "Journal", href: "/blog" },

    { name: "Reports", href: "/reports" },

    { name: "Rankings", href: "/rankings" },

    { name: "Archive", href: "/archive" },

    { name: "About", href: "/about" },
  ];



  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-200 ${
          scrolled
            ? "bg-white/96 backdrop-blur-md border-b border-[#DDD] shadow-[0_1px_12px_rgba(0,0,0,0.05)]"
            : "bg-[#F7F5F0] border-b border-[#DDD]"
        }`}
      >

        <div className="max-w-[1550px] mx-auto px-5 h-15 flex items-center justify-between">


          {/* BRAND */}

          <Link
            href="/"
            className="flex items-center gap-3 group flex-shrink-0"
          >

            <div className="relative w-7 h-7">

              <Image
                src="/logo.jpg"
                alt="UpForge Registry"
                fill
                className="object-cover"
              />

            </div>


            <div className="flex flex-col leading-tight">

              <span
                className="text-[18px] tracking-tight text-[#111]"
                style={{
                  fontFamily: "'Georgia','Times New Roman',serif",
                }}
              >
                UpForge
              </span>

              <span className="text-[9px] uppercase tracking-[0.22em] text-[#888]">

                Registry Network

              </span>

            </div>

          </Link>



          {/* DESKTOP NAV */}

          <nav className="hidden md:flex items-center flex-1 justify-center">

            {links.map((link) => {

              const isActive =
                pathname === link.href ||
                pathname.startsWith(link.href + "/");

              const baseClass =
                "px-4 py-1 text-[12px] uppercase tracking-wide border-b-2 transition-colors";

              const activeClass =
                "text-[#111] border-[#111]";

              const inactiveClass =
                "text-[#777] border-transparent hover:text-[#111] hover:border-[#DDD]";



              if (link.external) {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${baseClass} text-[#A89060] hover:border-[#A89060] flex items-center gap-1`}
                  >
                    <Globe size={13} />
                    {link.name}
                  </a>
                );
              }



              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`${baseClass} ${
                    isActive ? activeClass : inactiveClass
                  }`}
                >
                  {link.name}
                </Link>
              );

            })}

          </nav>



          {/* RIGHT PANEL */}

          <div className="hidden md:flex items-center gap-3">


            {/* LIVE STATUS */}

            <div className="flex items-center gap-2 border px-3 py-1 bg-white">

              <span className="relative flex h-2 w-2">

                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-70"></span>

                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>

              </span>

              <span className="text-[10px] uppercase tracking-wider text-[#666]">

                Registry Live

              </span>

            </div>



            {/* SUBMIT BUTTON */}

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-2 bg-[#111] text-white text-[11px] font-bold uppercase tracking-wider hover:bg-[#333] transition"
            >
              List Startup

              <ChevronRight size={14} />

            </Link>

          </div>



          {/* MOBILE BUTTON */}

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </div>

      </header>



      {/* MOBILE MENU */}

      <div
        className={`fixed inset-0 z-40 md:hidden transition ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >

        <div
          className="absolute inset-0 bg-black/20"
          onClick={() => setIsOpen(false)}
        />


        <div className="absolute top-14 left-0 right-0 bg-[#F7F5F0] border-b">

          {links.map((link) => {

            if (link.external) {

              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-4 text-sm uppercase text-[#A89060]"
                >
                  {link.name}
                  <span>.org</span>
                </a>
              );

            }



            return (
              <Link
                key={link.name}
                href={link.href}
                className="block px-5 py-4 text-sm uppercase text-[#444]"
              >
                {link.name}
              </Link>
            );

          })}



          <div className="p-5 border-t">

            <Link
              href="/submit"
              className="block text-center bg-[#111] text-white py-3 uppercase text-sm"
            >
              List Startup
            </Link>

          </div>

        </div>

      </div>
    </>
  );

}
