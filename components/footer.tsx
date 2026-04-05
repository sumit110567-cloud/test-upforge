// components/footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Shield, Globe,
  Linkedin, Twitter, Instagram, Youtube,
  Award, Database, Zap, TrendingUp,
} from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Startup Registry", href: "/startup" },
      { label: "Indian Unicorns", href: "/indian-unicorns" },
      { label: "Verify UFRN", href: "/verify" },
      { label: "Reports", href: "/reports" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Founder Stories", href: "/founder-stories" },
      { label: "Startup Research", href: "/research" },
      { label: "Submit Startup", href: "/submit" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "FAQs", href: "/faq" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(""); }
  };

  return submitted ? (
    <div className="flex items-center gap-2 mt-3">
      <BadgeCheck size={14} className="text-[#d4af37]" />
      <span className="text-[12px] text-[#4a5568] font-medium">✓ Subscribed to UpForge Intel</span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex mt-3 max-w-[320px]">
      <input
        type="email" required placeholder="your@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2 text-[12px] border border-[#d4af37]/30 border-r-0 bg-white outline-none focus:border-[#d4af37] transition-colors"
      />
      <button type="submit" className="px-4 py-2 text-[11px] font-semibold bg-[#0a2540] text-white hover:bg-[#1a3a5c] flex items-center gap-1 transition-all hover:gap-2">
        Subscribe <ArrowRight size={11} />
      </button>
    </form>
  );
}

const TRUST_ITEMS = [
  { icon: Shield,    label: "Independent Registry", desc: "No corporate bias" },
  { icon: BadgeCheck, label: "Verified Listings", desc: "Manual review + UFRN" },
  { icon: Globe,     label: "Open Data", desc: "Free & accessible" },
  { icon: Award,     label: "Global Standard", desc: "Trusted worldwide" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#faf8f4] border-t border-[#e8e2d6]">

      {/* PREMIUM TRUST STRIP — Forbes/FT inspired */}
      <div className="border-b border-[#e8e2d6] bg-white">
        <div className="max-w-[1400px] mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-8 justify-center lg:justify-between items-center">
            {TRUST_ITEMS.map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-center gap-3 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-[#0a2540]/5 flex items-center justify-center group-hover:bg-[#0a2540]/10 transition-colors">
                  <Icon size={14} className="text-[#d4af37]" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-[#0a2540] uppercase tracking-wider">{label}</p>
                  <p className="text-[10px] text-[#6b6b6b]">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">

        {/* MAIN GRID — Magazine layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-12 py-16 border-b border-[#e8e2d6]">

          {/* BRAND COLUMN — Premium typography */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5 group">
              <div className="relative w-8 h-8 overflow-hidden rounded-full border border-[#d4af37]/30">
                <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
              </div>
              <span className="text-[26px] font-bold tracking-tight text-[#0a2540]" style={{ fontFamily: "'Cormorant Garamond', 'Playfair Display', Georgia, serif" }}>
                UpForge
              </span>
              <span className="text-[9px] uppercase tracking-wider text-[#d4af37] font-semibold ml-1">Global</span>
            </Link>

            <p className="text-[13px] text-[#4a5568] leading-relaxed max-w-[300px]">
              The authoritative source for verified startup intelligence — 
              tracking emerging companies, founder insights, and global ecosystem trends.
            </p>

            {/* Dual-domain callout — newspaper-style */}
            <div className="mt-6 flex flex-col gap-2 p-3 bg-[#f0ebe2] rounded-md">
              <div className="flex items-center gap-3">
                <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">🇮🇳 India Hub</span>
                <span className="text-[11px] text-[#0a2540] font-mono">upforge.in</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">🌍 Global Registry</span>
                <a
                  href="https://www.upforge.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-[#0a2540] font-mono hover:text-[#d4af37] transition-colors"
                >
                  upforge.org →
                </a>
              </div>
            </div>

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 mt-6 text-[12px] font-semibold bg-[#0a2540] text-white px-5 py-2.5 hover:bg-[#1a3a5c] transition-all hover:gap-3"
            >
              List Your Startup <ArrowRight size={12} />
            </Link>

            {/* NEWSLETTER — Premium styling */}
            <div className="mt-8 pt-4 border-t border-[#e8e2d6]">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={12} className="text-[#d4af37]" />
                <p className="text-[10px] uppercase tracking-widest font-semibold text-[#0a2540]">UpForge Intel</p>
              </div>
              <p className="text-[12px] text-[#4a5568]">Weekly startup insights and ecosystem research, delivered.</p>
              <NewsletterForm />
            </div>
          </div>

          {/* NAV COLUMNS — Clean, readable */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-[10px] uppercase tracking-wider font-bold text-[#0a2540] mb-5">{heading}</h3>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[13px] text-[#4a5568] hover:text-[#d4af37] transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* STATS BONUS — Adds authority */}
          <div className="hidden lg:block">
            <h3 className="text-[10px] uppercase tracking-wider font-bold text-[#0a2540] mb-5">Global Reach</h3>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Database size={14} />
                  <span className="text-[20px] font-bold text-[#0a2540]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>5,000+</span>
                </div>
                <p className="text-[10px] text-[#6b6b6b] mt-1">Verified Startups</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-[#d4af37]">
                  <Zap size={14} />
                  <span className="text-[20px] font-bold text-[#0a2540]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>50+</span>
                </div>
                <p className="text-[10px] text-[#6b6b6b] mt-1">Countries Covered</p>
              </div>
            </div>
          </div>

        </div>

        {/* GLOBAL REGISTRY BANNER — Premium gold accent */}
        <div className="py-7 border-b border-[#e8e2d6] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
              <Globe size={14} className="text-[#d4af37]" />
            </div>
            <p className="text-[12px] text-[#4a5568]">
              <span className="font-semibold text-[#0a2540]">Global Startup Registry</span> — 
              The world's most comprehensive verified database.{" "}
              <a
                href="https://www.upforge.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4af37] hover:underline font-semibold"
              >
                Explore upforge.org →
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] uppercase tracking-widest text-[#d4af37] font-bold">UFRN™ Certified</span>
            <span className="w-1 h-1 rounded-full bg-[#d4af37]/50"></span>
            <span className="text-[9px] uppercase tracking-widest text-[#6b6b6b]">Open Data</span>
          </div>
        </div>

        {/* SOCIAL + PARTNER BADGES */}
        <div className="py-8 border-b border-[#e8e2d6] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <p className="text-[11px] font-semibold text-[#0a2540] uppercase tracking-wider">Follow UpForge</p>
            <div className="flex items-center gap-5">
              <a href="https://www.linkedin.com/company/upforge-india" target="_blank" rel="noopener noreferrer" 
                 className="text-[#6b6b6b] hover:text-[#d4af37] transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="text-[#6b6b6b] hover:text-[#d4af37] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" 
                 className="text-[#6b6b6b] hover:text-[#d4af37] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.youtube.com/@upforge-ind" target="_blank" rel="noopener noreferrer" 
                 className="text-[#6b6b6b] hover:text-[#d4af37] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[9px] text-[#aaa] uppercase tracking-wider">Trusted By</span>
            <div className="flex gap-3 text-[10px] font-semibold text-[#0a2540]/60 uppercase tracking-wide">
              <span>Founders</span>
              <span>•</span>
              <span>Investors</span>
              <span>•</span>
              <span>Accelerators</span>
            </div>
          </div>
        </div>

        {/* TRUST LINE — Legal & compliance */}
        <div className="py-7 text-center">
          <p className="text-[11px] text-[#6b6b6b] leading-relaxed">
            Independent Startup Intelligence Platform · Verified Data via UFRN System · Updated Daily<br />
            <a href="https://www.upforge.org" target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline">
              Global Registry at upforge.org
            </a>{" "}
            · <Link href="/privacy" className="hover:text-[#d4af37]">Privacy</Link>
            {" "}· <Link href="/terms" className="hover:text-[#d4af37]">Terms</Link>
          </p>
        </div>

        {/* COPYRIGHT — Clean finish */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-[#e8e2d6]">
          <div>
            <p className="text-[11px] text-[#6b6b6b]">© {year} UpForge · Built for founders, innovators, and the global startup ecosystem</p>
            <p className="text-[9px] text-[#aaa] mt-1">
              upforge.in (India) · upforge.org (Global Registry) · UFRN™
            </p>
          </div>
          <div className="flex gap-6 text-[10px] text-[#6b6b6b]">
            <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#d4af37] transition-colors">Terms</Link>
            <Link href="/cookies" className="hover:text-[#d4af37] transition-colors">Cookies</Link>
            <Link href="/accessibility" className="hover:text-[#d4af37] transition-colors">Accessibility</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
