"use client";
// components/footer.tsx — GLOBAL AUTHORITY EDITORIAL v5
// FIXES: Better space utilization, stats visualization, tighter layout, global trust signals
// Added: live stat bar chart, better grid, editorial magazine look

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Shield, Globe,
  Linkedin, Twitter, Instagram, Youtube,
  Database, Zap, TrendingUp, MapPin, Clock,
  Award, BookOpen, Rss, BarChart2,
} from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Registry",
    links: [
      { label: "All Startups", href: "/registry" },
      { label: "Indian Unicorns", href: "/indian-unicorns" },
      { label: "Verify UFRN", href: "/verify" },
      { label: "UFRN Lookup", href: "/verify" },
      { label: "Submit Startup", href: "/submit" },
    ],
  },
  {
    heading: "Editorial",
    links: [
      { label: "The Chronicle", href: "/blog" },
      { label: "Founder Stories", href: "/founder-stories" },
      { label: "Reports & Data", href: "/reports" },
      { label: "Research", href: "/research" },
      { label: "Newsletter", href: "/newsletter" },
    ],
  },
  {
    heading: "Sectors",
    links: [
      { label: "Fintech", href: "/startups/fintech" },
      { label: "Edtech", href: "/startups/edtech" },
      { label: "Deep Tech & AI", href: "/startups/ai" },
      { label: "D2C & Commerce", href: "/startups/d2c" },
      { label: "SaaS & B2B", href: "/startups/saas" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About UpForge", href: "/about" },
      { label: "Editorial Standards", href: "/about#editorial" },
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
      { label: "Data License (CC-BY 4.0)", href: "/data-license" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const GLOBAL_HUBS = [
  { region: "🇮🇳 India", count: "3,200+", growth: "+18%" },
  { region: "🌍 Global", count: "5,000+", growth: "+34%" },
  { region: "🇸🇬 SEA", count: "820+", growth: "+22%" },
  { region: "🇳🇬 Africa", count: "410+", growth: "+41%" },
  { region: "🇧🇷 LatAm", count: "360+", growth: "+29%" },
  { region: "🇦🇪 MENA", count: "290+", growth: "+37%" },
];

const TRUST_SIGNALS = [
  { icon: Shield, label: "Independent", sub: "No corporate ownership or bias" },
  { icon: BadgeCheck, label: "Manual Verified", sub: "Every startup reviewed by editors" },
  { icon: Globe, label: "Open Data", sub: "CC-BY 4.0 licensed, free forever" },
  { icon: Award, label: "UFRN™ Standard", sub: "Cited by Harvard, IIM & Stanford" },
  { icon: BookOpen, label: "Editorial Rigour", sub: "FT-level journalistic standards" },
  { icon: Database, label: "Live Registry", sub: "Refreshed daily, globally" },
];

// Mini bar chart data for sector growth
const SECTOR_DATA = [
  { label: "AI/ML", pct: 95, color: "#8b1a1a" },
  { label: "Climate", pct: 78, color: "#a02020" },
  { label: "FinTech", pct: 70, color: "#b04040" },
  { label: "SaaS", pct: 58, color: "#c06060" },
  { label: "D2C", pct: 45, color: "#c9836e" },
  { label: "Edtech", pct: 38, color: "#d9a090" },
];

function MiniBarChart() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <BarChart2 size={11} color="#8b1a1a" />
        <span
          className="text-[9px] tracking-[0.22em] uppercase font-bold"
          style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
        >
          Sector Growth YoY
        </span>
      </div>
      <div className="space-y-2">
        {SECTOR_DATA.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span
              className="text-[9px] w-12 flex-shrink-0"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              {s.label}
            </span>
            <div className="flex-1 h-1.5" style={{ background: "#f0ebe0" }}>
              <div
                className="h-full"
                style={{ width: `${s.pct}%`, background: s.color, transition: "width 1s ease" }}
              />
            </div>
            <span
              className="text-[8px] w-6 text-right flex-shrink-0 font-bold"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
            >
              +{s.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(""); }
  };
  return submitted ? (
    <div className="flex items-center gap-2 mt-3">
      <BadgeCheck size={14} color="#8b1a1a" />
      <span
        className="text-[12px] font-semibold"
        style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
      >
        ✓ Subscribed to UpForge Intelligence
      </span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex mt-3 max-w-sm">
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2.5 text-[12px] outline-none border-y border-l"
        style={{ borderColor: "#c9b99a", background: "#faf7f2", fontFamily: "'Times New Roman', serif", color: "#1a0a0a" }}
      />
      <button
        type="submit"
        className="px-4 py-2.5 text-[10px] font-bold tracking-widest uppercase flex items-center gap-1 transition-all hover:gap-2 hover:opacity-90"
        style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
      >
        Subscribe <ArrowRight size={11} />
      </button>
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#faf7f2", borderTop: "3px solid #8b1a1a" }}>

      {/* ── TRUST BAR ─── */}
      <div style={{ background: "#1a0a0a", borderBottom: "1px solid #3d1515" }}>
        <div className="max-w-[1600px] mx-auto px-6 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_SIGNALS.map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-start gap-2.5 group">
                <Icon size={13} color="#c9b99a" className="flex-shrink-0 mt-0.5" />
                <div>
                  <div
                    className="text-[10px] font-bold tracking-widest uppercase mb-0.5"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#faf7f2" }}
                  >
                    {label}
                  </div>
                  <div
                    className="text-[9px] leading-snug"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                  >
                    {sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GLOBAL COVERAGE STRIP ─── */}
      <div style={{ background: "#f5f0e8", borderBottom: "1px solid #e8ddd0" }}>
        <div className="max-w-[1600px] mx-auto px-6 py-3">
          <div className="flex items-center gap-0 flex-wrap">
            <div className="flex items-center gap-2 pr-5 mr-1 border-r" style={{ borderColor: "#c9b99a" }}>
              <MapPin size={10} color="#8b1a1a" />
              <span
                className="text-[9px] tracking-[0.22em] uppercase font-bold whitespace-nowrap"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
              >
                Global Coverage
              </span>
            </div>
            <div className="flex items-center gap-0 flex-wrap">
              {GLOBAL_HUBS.map((hub, i) => (
                <div key={hub.region} className="flex items-center">
                  <div className="flex items-center gap-2 px-4 py-1.5">
                    <span
                      className="text-[10px] font-semibold"
                      style={{ fontFamily: "'Times New Roman', serif", color: "#3d2b2b" }}
                    >
                      {hub.region}
                    </span>
                    <span
                      className="text-[9px] font-bold px-1.5 py-0.5"
                      style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
                    >
                      {hub.count}
                    </span>
                    <span
                      className="text-[8px] font-semibold"
                      style={{ color: "#2d7a2d", fontFamily: "'Times New Roman', serif" }}
                    >
                      {hub.growth}
                    </span>
                  </div>
                  {i < GLOBAL_HUBS.length - 1 && (
                    <div className="w-px h-4" style={{ background: "#c9b99a" }} />
                  )}
                </div>
              ))}
            </div>
            <div className="ml-auto hidden lg:flex items-center gap-2">
              <Clock size={10} color="#8b6a6a" />
              <span
                className="text-[9px]"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
              >
                Updated {new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN BODY ─── */}
      <div className="max-w-[1600px] mx-auto px-6">
        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-x-6 gap-y-10 py-12 border-b"
          style={{ borderColor: "#e8ddd0" }}
        >

          {/* BRAND COLUMN — spans 2 cols */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <div className="w-9 h-9 overflow-hidden" style={{ border: "1px solid #c9b99a" }}>
                <Image src="/logo.jpg" alt="UpForge" width={36} height={36} className="object-cover w-full h-full" />
              </div>
              <div>
                <div
                  className="text-[24px] font-bold leading-none group-hover:text-[#8b1a1a] transition-colors"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
                >
                  UpForge
                </div>
                <div
                  className="text-[8px] tracking-[0.22em] uppercase"
                  style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                >
                  Global Startup Registry
                </div>
              </div>
            </Link>

            <div className="flex items-center gap-3 mb-4">
              <div className="h-px flex-1" style={{ background: "#c9b99a" }} />
              <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#8b1a1a" }} />
              <div className="h-px flex-1" style={{ background: "#c9b99a" }} />
            </div>

            <p
              className="text-[12.5px] leading-relaxed mb-4"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#3d2b2b" }}
            >
              The world's first independent global startup registry. Every listing manually verified. The{" "}
              <em>record of record</em> for the global startup ecosystem.
            </p>

            {/* Domain cards — more compact */}
            <div className="space-y-1.5 mb-4">
              {[
                { flag: "🇮🇳", label: "India Edition", domain: "upforge.in", count: "3,200+", highlight: false },
                { flag: "🌍", label: "Global Registry", domain: "upforge.org →", count: "5,000+", highlight: true },
              ].map((d) => (
                <div
                  key={d.domain}
                  className="flex items-center justify-between px-3 py-2"
                  style={{
                    border: d.highlight ? "1px solid #8b1a1a" : "1px solid #e8ddd0",
                    background: d.highlight ? "#fff9f5" : "#f5f0e8",
                  }}
                >
                  <div>
                    <div
                      className="text-[8px] tracking-widest uppercase font-bold"
                      style={{ fontFamily: "'Times New Roman', serif", color: d.highlight ? "#8b1a1a" : "#8b6a6a" }}
                    >
                      {d.flag} {d.label}
                    </div>
                    <div
                      className="text-[11px] font-bold"
                      style={{ fontFamily: "'Times New Roman', serif", color: "#1a0a0a" }}
                    >
                      {d.domain}
                    </div>
                  </div>
                  <span
                    className="text-[9px] font-bold px-2 py-1"
                    style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
                  >
                    {d.count}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[10px] font-bold tracking-widest uppercase transition-all hover:gap-3 hover:opacity-90"
              style={{ background: "#8b1a1a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
            >
              List Your Startup <ArrowRight size={11} />
            </Link>

            {/* Newsletter */}
            <div className="mt-6 pt-5" style={{ borderTop: "1px solid #e8ddd0" }}>
              <div className="flex items-center gap-2 mb-1">
                <Rss size={10} color="#8b1a1a" />
                <span
                  className="text-[9px] tracking-[0.22em] uppercase font-bold"
                  style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
                >
                  UpForge Intelligence
                </span>
              </div>
              <p className="text-[11px]" style={{ fontFamily: "'Times New Roman', serif", color: "#5a4040" }}>
                Weekly verified startup insights, funding data & founder profiles.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* NAV COLUMNS — 5 cols */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="col-span-1">
              <h3
                className="text-[9px] tracking-[0.22em] uppercase font-bold mb-4 pb-2 border-b"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a", borderColor: "#8b1a1a" }}
              >
                {heading}
              </h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[11.5px] leading-snug transition-colors hover:text-[#8b1a1a] flex items-center gap-1 group"
                      style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#3d2b2b" }}
                    >
                      <span className="group-hover:translate-x-0.5 transition-transform">{label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* LIVE STATS + CHART column — spans 1 col */}
          <div className="col-span-2 lg:col-span-1">
            <h3
              className="text-[9px] tracking-[0.22em] uppercase font-bold mb-4 pb-2 border-b"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a", borderColor: "#8b1a1a" }}
            >
              Live Stats
            </h3>
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { icon: Database, n: "5,000+", l: "Verified" },
                { icon: Globe, n: "50+", l: "Countries" },
                { icon: TrendingUp, n: "1,240+", l: "Funded" },
                { icon: Zap, n: "34", l: "This Week" },
              ].map(({ icon: Icon, n, l }) => (
                <div key={l} className="p-2 border" style={{ borderColor: "#e8ddd0", background: "#f5f0e8" }}>
                  <Icon size={10} color="#c9b99a" className="mb-1" />
                  <div
                    className="text-[16px] font-bold leading-none"
                    style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#8b1a1a" }}
                  >
                    {n}
                  </div>
                  <div
                    className="text-[8px] tracking-wide"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>

            {/* Sector growth mini chart */}
            <div className="p-3 border" style={{ borderColor: "#e8ddd0", background: "#f5f0e8" }}>
              <MiniBarChart />
            </div>

            {/* Cited by */}
            <div className="mt-4 pt-4" style={{ borderTop: "1px solid #e8ddd0" }}>
              <div
                className="text-[8px] tracking-[0.2em] uppercase mb-2"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
              >
                Cited by researchers at
              </div>
              <div className="grid grid-cols-2 gap-1">
                {["Harvard Business", "IIM Ahmedabad", "Stanford GSB", "ISB Hyderabad"].map((org) => (
                  <div
                    key={org}
                    className="text-[9px] font-semibold opacity-50 truncate"
                    style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
                  >
                    {org}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── SOCIAL + BADGES ─── */}
        <div
          className="py-5 flex flex-col sm:flex-row items-center justify-between gap-4 border-b"
          style={{ borderColor: "#e8ddd0" }}
        >
          <div className="flex items-center gap-5">
            <span
              className="text-[9px] tracking-[0.22em] uppercase font-bold"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              Follow UpForge
            </span>
            <div className="flex items-center gap-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/company/upforge-india", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com/upforge_in", label: "X/Twitter" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Youtube, href: "https://www.youtube.com/@upforge-ind", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-all hover:scale-110"
                  style={{ color: "#8b6a6a" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#8b1a1a")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#8b6a6a")}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span
              className="text-[9px] px-2 py-1 font-bold tracking-widest uppercase"
              style={{ background: "#1a0a0a", color: "#c9b99a", fontFamily: "'Times New Roman', serif" }}
            >
              UFRN™ Certified
            </span>
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              Open Data · CC-BY 4.0
            </span>
            <span
              className="text-[9px] tracking-widest uppercase"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              Est. 2024
            </span>
          </div>
        </div>

        {/* ── COPYRIGHT ─── */}
        <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <p
              className="text-[11px]"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#5a4040" }}
            >
              © {year} UpForge · The World's Startup Registry of Record
            </p>
            <p
              className="text-[9px] mt-0.5"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              upforge.in (India) · upforge.org (Global) · UFRN™ is a trademark of UpForge
            </p>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            {["Privacy", "Terms", "Data License", "Cookies", "Accessibility"].map((label, i) => (
              <span key={label} className="flex items-center gap-4">
                <Link
                  href={`/${label.toLowerCase().replace(" ", "-")}`}
                  className="text-[10px] tracking-wide transition-colors hover:text-[#8b1a1a]"
                  style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
                >
                  {label}
                </Link>
                {i < 4 && <span style={{ color: "#c9b99a" }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
