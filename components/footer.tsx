"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Shield, Globe,
  Linkedin, Twitter, Instagram, Youtube,
  Database, Zap, TrendingUp, MapPin, Clock,
  Award, BookOpen, Rss, BarChart2,
} from "lucide-react";

/* ---------------- CONFIG ---------------- */

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
      { label: "Data License", href: "/data-license" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

const TRUST_SIGNALS = [
  { icon: Shield, label: "Independent" },
  { icon: BadgeCheck, label: "Verified" },
  { icon: Globe, label: "Open Data" },
  { icon: Award, label: "UFRN™ Standard" },
  { icon: BookOpen, label: "Editorial" },
  { icon: Database, label: "Live Registry" },
];

const SECTOR_DATA = [
  { label: "AI/ML", pct: 95 },
  { label: "Climate", pct: 78 },
  { label: "FinTech", pct: 70 },
  { label: "SaaS", pct: 58 },
  { label: "D2C", pct: 45 },
  { label: "Edtech", pct: 38 },
];

/* ---------------- COMPONENTS ---------------- */

function MiniBarChart() {
  return (
    <div>
      <div className="text-[10px] font-bold mb-3 text-[#8b1a1a]">
        Sector Growth YoY
      </div>
      <div className="space-y-2">
        {SECTOR_DATA.map((s) => (
          <div key={s.label} className="flex items-center gap-2">
            <span className="text-[10px] w-14">{s.label}</span>
            <div className="flex-1 h-1 bg-[#eee]">
              <div
                className="h-full bg-[#8b1a1a]"
                style={{ width: `${s.pct}%` }}
              />
            </div>
            <span className="text-[10px]">+{s.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  if (done) return <div className="text-green-600 text-sm">Subscribed ✓</div>;

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="flex mt-3"
    >
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 border px-2 py-2 text-sm"
      />
      <button className="bg-[#8b1a1a] text-white px-4 text-sm">
        Subscribe
      </button>
    </form>
  );
}

/* ---------------- MAIN ---------------- */

export function Footer() {
  return (
    <footer className="bg-[#faf7f2] border-t-4 border-[#8b1a1a]">

      {/* TRUST BAR */}
      <div className="bg-black text-white">
        <div className="max-w-[1600px] mx-auto grid grid-cols-2 md:grid-cols-6 gap-4 p-4">
          {TRUST_SIGNALS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs">
              <Icon size={14} />
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="max-w-[1600px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10 gap-8">

        {/* BRAND */}
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo.jpg" alt="logo" width={40} height={40} />
            <div className="text-xl font-bold">UpForge</div>
          </div>

          <p className="text-sm mb-4">
            Global startup registry. Verified. Trusted. Open.
          </p>

          <button className="bg-[#8b1a1a] text-white px-4 py-2 text-sm">
            List Startup
          </button>

          <NewsletterForm />
        </div>

        {/* NAV */}
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.heading}>
            <h4 className="font-bold mb-3 text-sm">{col.heading}</h4>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* 🔥 NEW AUTHORITY PANEL */}
        <div className="col-span-2 lg:col-span-3 border p-6 bg-[#f5f0e8]">
          <h3 className="text-sm font-bold mb-3 text-[#8b1a1a]">
            Global Registry Intelligence
          </h3>

          <p className="text-sm mb-6">
            A continuously verified global dataset tracking startups across
            regions, sectors, and funding stages.
          </p>

          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              "5,000+ Startups",
              "50+ Countries",
              "1,240+ Funded",
              "34 Weekly",
              "100% Verified",
              "Daily Updated",
            ].map((x) => (
              <div key={x} className="border p-2 text-center text-sm">
                {x}
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-600">
            Trusted by Harvard · Stanford · IIM
          </div>
        </div>

        {/* STATS */}
        <div className="col-span-2">
          <h3 className="font-bold mb-4">Live Stats</h3>

          <div className="grid grid-cols-2 gap-3 mb-4">
            {["5000+", "50+", "1240+", "34"].map((n) => (
              <div key={n} className="border p-3 text-center">
                {n}
              </div>
            ))}
          </div>

          <MiniBarChart />
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-xs py-4 border-t">
        © 2026 UpForge
      </div>
    </footer>
  );
}
