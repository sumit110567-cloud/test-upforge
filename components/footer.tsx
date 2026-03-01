import Link from "next/link";
import Image from "next/image";
import { BadgeCheck, Calculator, FileText, Shield, Globe, ExternalLink } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-[#1C1C1C] text-white mt-0"
      style={{ fontFamily: "system-ui, sans-serif" }}
    >
      {/* ── TOP STRIP ── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
              India's Independent Startup Registry · Live & Open
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] text-white/30 tracking-wider uppercase">
            <span className="flex items-center gap-1.5"><Shield className="w-3 h-3" /> Independent</span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5"><BadgeCheck className="w-3 h-3" /> Verified</span>
            <span className="w-px h-3 bg-white/10"></span>
            <span className="flex items-center gap-1.5"><Globe className="w-3 h-3" /> Public</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-14 mb-14">

          {/* ── Brand Identity ── */}
          <div className="col-span-2 space-y-6">
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div
                  className="w-8 h-8 bg-[#E8C547] text-[#1C1C1C] flex items-center justify-center font-bold text-[11px] tracking-tight flex-shrink-0"
                >
                  UF
                </div>
                <span
                  className="text-xl tracking-tight text-white"
                  style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
                >
                  UpForge
                </span>
              </div>
              <p className="text-[11px] text-white/30 tracking-[0.15em] uppercase mb-4">
                Independent Startup Registry · Est. {year}
              </p>
              <p className="text-sm text-white/50 leading-relaxed max-w-xs">
                India's structured public registry documenting founders, startups,
                and ecosystem data — neutral, open, and independently maintained.
              </p>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2">
              {[
                { icon: BadgeCheck, text: "Verified Listings" },
                { icon: Calculator, text: "Free Valuation" },
                { icon: FileText, text: "Growth Reports" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5 border border-white/10 px-2.5 py-1.5">
                  <item.icon className="w-3 h-3 text-[#E8C547]" />
                  <span className="text-[9px] text-white/40 uppercase tracking-wider">{item.text}</span>
                </div>
              ))}
            </div>

            {/* Submit CTA */}
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#E8C547] text-[#1C1C1C] text-[11px] font-bold tracking-wider uppercase hover:bg-[#F5D55A] transition-colors w-fit"
            >
              List Your Startup →
            </Link>
          </div>

          {/* ── Registry ── */}
          <div className="space-y-5">
            <h4 className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-bold border-b border-white/10 pb-2">
              Registry
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Browse Startups", href: "/startup" },
                { label: "Valuation Tool", href: "/valuation" },
                { label: "Sample Report", href: "/reports" },
                { label: "Industries", href: "/industries" },
                { label: "Sitemap", href: "/sitemap" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Standards ── */}
          <div className="space-y-5">
            <h4 className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-bold border-b border-white/10 pb-2">
              Standards
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Verification Policy", href: "/verification" },
                { label: "Editorial Policy", href: "/editorial" },
                { label: "Data Policy", href: "/data-policy" },
                { label: "Corrections", href: "/corrections" },
                { label: "Transparency", href: "/transparency" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Company ── */}
          <div className="space-y-5">
            <h4 className="text-[9px] uppercase tracking-[0.25em] text-white/30 font-bold border-b border-white/10 pb-2">
              Company
            </h4>
            <ul className="space-y-3">
              {[
                { label: "About", href: "/about" },
                { label: "FAQ", href: "/faq" },
                { label: "Contact", href: "/contact" },
                { label: "Press", href: "/press" },
                { label: "Feedback", href: "/feedback" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] text-white/50 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── SISTER PRODUCTS ── */}
        <div className="border-t border-white/10 pt-10 mb-10">
          <p className="text-[9px] uppercase tracking-[0.25em] text-white/25 font-bold mb-6">
            From the Same Ecosystem
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">

            {/* InternAdda */}
            <a
              href="https://www.internadda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 hover:border-[#E8C547]/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="relative w-9 h-9 flex-shrink-0 overflow-hidden bg-white/10">
                <Image
                  src="https://www.internadda.com/_next/image?url=%2Flogo.jpg&w=1920&q=75"
                  alt="InternAdda"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-sm font-semibold text-white group-hover:text-[#E8C547] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    InternAdda
                  </p>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#E8C547]/60 transition-colors" />
                </div>
                <p className="text-[10px] text-white/35 leading-snug">
                  India's internship & early-career opportunity platform for students and fresh graduates
                </p>
              </div>
            </a>

            {/* ArjunaAI */}
            <a
              href="https://www.arjunaai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 border border-white/10 bg-white/[0.03] p-4 hover:border-[#E8C547]/40 hover:bg-white/[0.06] transition-all"
            >
              <div className="relative w-9 h-9 flex-shrink-0 overflow-hidden bg-white/10">
                <Image
                  src="https://www.arjunaai.in/_next/image?url=%2Farjuna_logo.png&w=32&q=75"
                  alt="Arjuna AI"
                  fill
                  className="object-contain p-0.5"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <p className="text-sm font-semibold text-white group-hover:text-[#E8C547] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    Arjuna AI
                  </p>
                  <ExternalLink className="w-3 h-3 text-white/20 group-hover:text-[#E8C547]/60 transition-colors" />
                </div>
                <p className="text-[10px] text-white/35 leading-snug">
                  AI-powered mock interview platform — practice, get feedback, and land your next role
                </p>
              </div>
            </a>

          </div>
        </div>

        {/* ── LEGAL DISCLAIMER ── */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <p className="text-[11px] text-white/25 leading-relaxed max-w-4xl">
            UpForge is an informational public registry. Listings are compiled from publicly available sources or
            founder submissions. We do not provide investment advice, endorsements, rankings, or financial ratings.
            Information may change over time and should be independently verified before any business or investment decision.
          </p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/10 pt-6">
          <p className="text-[10px] text-white/25">
            © {year} UpForge Registry. All rights reserved. · Independent Startup Documentation Platform · v2.0
          </p>
          <div className="flex flex-wrap gap-5">
            {[
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Cookie Policy", href: "/cookies" },
              { label: "Accessibility", href: "/accessibility" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] text-white/25 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
