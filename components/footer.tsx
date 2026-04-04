// components/footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Shield, Globe,
  Linkedin, Twitter, Instagram, Youtube,
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
      <BadgeCheck size={14} className="text-emerald-600" />
      <span className="text-[12px] text-[#6B6B6B]">Subscribed to UpForge Intel</span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex mt-3 max-w-[320px]">
      <input
        type="email" required placeholder="your@email.com" value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-3 py-2 text-[12px] border border-[#D8D2C8] border-r-0 bg-white outline-none"
      />
      <button type="submit" className="px-4 py-2 text-[11px] font-semibold bg-[#111111] text-white hover:bg-[#333333] flex items-center gap-1">
        Subscribe <ArrowRight size={11} />
      </button>
    </form>
  );
}

const TRUST_ITEMS = [
  { icon: Shield,    label: "Independent Platform" },
  { icon: BadgeCheck, label: "Verified Listings" },
  { icon: Globe,     label: "Open Data Registry" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#EFE9DF] border-t border-[#D8D2C8]">

      {/* TRUST STRIP */}
      <div className="border-b border-[#D8D2C8] bg-[#F6F3ED]">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex flex-wrap gap-6 justify-center lg:justify-between">
          {TRUST_ITEMS.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-2">
              <Icon size={13} className="text-[#C59A2E]" />
              <span className="text-[11px] text-[#6B6B6B] tracking-wider uppercase">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-10 gap-y-12 py-14 border-b border-[#D8D2C8]">

          {/* BRAND */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-7 h-7 overflow-hidden">
                <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
              </div>
              <span className="text-[22px] font-bold text-[#111111]" style={{ fontFamily: "'Playfair Display','Georgia',serif" }}>
                UpForge
              </span>
            </Link>

            <p className="text-[13px] text-[#6B6B6B] leading-relaxed max-w-[280px]">
              India's independent startup intelligence platform —
              tracking emerging companies, founder insights,
              and ecosystem trends.
            </p>

            {/* Dual-domain callout — newspaper-style, minimal */}
            <div className="mt-5 flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#AAA]">India Hub</span>
                <span className="text-[10px] text-[#C59A2E] font-mono">upforge.in</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-[#AAA]">Global Registry</span>
                <a
                  href="https://www.upforge.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-[#C59A2E] font-mono hover:underline"
                >
                  upforge.org
                </a>
              </div>
            </div>

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 mt-5 text-[11px] font-semibold bg-[#111111] text-white px-4 py-2 hover:bg-[#333333]"
            >
              List Your Startup <ArrowRight size={11} />
            </Link>

            {/* NEWSLETTER */}
            <div className="mt-7">
              <p className="text-[10px] uppercase tracking-widest font-semibold">UpForge Intel</p>
              <p className="text-[12px] text-[#6B6B6B] mt-1">Weekly startup insights and ecosystem research.</p>
              <NewsletterForm />
            </div>
          </div>

          {/* NAV COLUMNS */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <h3 className="text-[11px] uppercase tracking-widest font-semibold text-[#111111] mb-4">{heading}</h3>
              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[13px] text-[#6B6B6B] hover:text-[#C59A2E]">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        {/* GLOBAL REGISTRY BANNER */}
        <div className="py-6 border-b border-[#D8D2C8] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Globe size={14} className="text-[#C59A2E]" />
            <p className="text-[12px] text-[#6B6B6B]">
              Looking for the global startup database?{" "}
              <a
                href="https://www.upforge.org/registry"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C59A2E] hover:underline font-semibold"
              >
                Visit UpForge Global Registry →
              </a>
            </p>
          </div>
          <span className="text-[10px] uppercase tracking-widest text-[#AAA]">upforge.org</span>
        </div>

        {/* SOCIAL */}
        <div className="py-8 border-b border-[#D8D2C8] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[12px] text-[#6B6B6B]">Follow UpForge</p>
          <div className="flex items-center gap-5">
            <a href="https://www.linkedin.com/company/upforge-india" className="text-[#6B6B6B] hover:text-[#C59A2E]"><Linkedin size={18} /></a>
            <a href="#" className="text-[#6B6B6B] hover:text-[#C59A2E]"><Twitter size={18} /></a>
            <a href="#" className="text-[#6B6B6B] hover:text-[#C59A2E]"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/@upforge-ind" className="text-[#6B6B6B] hover:text-[#C59A2E]"><Youtube size={18} /></a>
          </div>
        </div>

        {/* TRUST LINE */}
        <div className="py-6 text-center border-b border-[#D8D2C8]">
          <p className="text-[12px] text-[#6B6B6B]">
            Independent Startup Intelligence Platform · Verified Data · Updated Daily ·{" "}
            <a href="https://www.upforge.org" target="_blank" rel="noopener noreferrer" className="hover:text-[#C59A2E]">
              Global Registry at upforge.org
            </a>
          </p>
        </div>

        {/* COPYRIGHT */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-[12px] text-[#6B6B6B]">© {year} UpForge · Built for founders and innovators</p>
            <p className="text-[10px] text-[#AAA] mt-0.5">
              upforge.in (India) · upforge.org (Global Registry)
            </p>
          </div>
          <div className="flex gap-6 text-[12px] text-[#6B6B6B]">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
