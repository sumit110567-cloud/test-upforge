  // components/footer.tsx

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Shield, Globe } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Startup Directory", href: "/startup" },
      { label: "Reports", href: "/reports" },
      { label: "Insights", href: "/insights" },
      { label: "Tools", href: "/tools" },
      { label: "Indian Unicorns", href: "/indian-unicorns" },
      { label: "AI Startups", href: "/top-ai-startups" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Founder Guides", href: "/founder-stories" },
      { label: "Startup Research", href: "/research" },
      { label: "Newsletter", href: "/newsletter" },
      { label: "Funding Tracker", href: "/top-funded-startups" },
      { label: "Best SaaS", href: "/best-saas-startups" },
      { label: "Submit a Startup", href: "/submit" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About UpForge", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press", href: "/press" },
      { label: "Advertise", href: "/advertise" },
      { label: "Sitemap", href: "/sitemap" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Editorial Policy", href: "/editorial" },
      { label: "Verification Policy", href: "/verification" },
      { label: "Accessibility", href: "/accessibility" },
    ],
  },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return submitted ? (
    <div className="flex items-center gap-2 py-2">
      <BadgeCheck size={14} className="text-emerald-500" />
      <span className="text-[12px] text-[#555555]">
        You're subscribed to UpForge Intel.
      </span>
    </div>
  ) : (
    <form onSubmit={handleSubmit} className="flex gap-0 mt-3 max-w-[340px] mx-auto sm:mx-0">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="flex-1 px-3 py-2.5 text-[12px] border border-[#E5E5E5] border-r-0 rounded-l-sm outline-none focus:border-[#AAAAAA]"
      />
      <button
        type="submit"
        className="px-4 py-2.5 bg-[#111111] text-white text-[11px] font-semibold hover:bg-[#333333] rounded-r-sm flex items-center gap-1.5"
      >
        Subscribe <ArrowRight size={11} />
      </button>
    </form>
  );
}

const TRUST_ITEMS = [
  { icon: Shield, label: "Independent Platform" },
  { icon: BadgeCheck, label: "Verified Listings" },
  { icon: Globe, label: "Open Registry" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-white border-t-2 border-[#111111]">

      {/* TRUST STRIP */}

      <div className="border-b border-[#F0F0F0] bg-[#FAFAFA]">
        <div className="max-w-[1440px] mx-auto px-4 py-3">
          <div className="flex flex-wrap justify-center sm:justify-between gap-4">
            {TRUST_ITEMS.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon size={12} className="text-[#F5C542]" />
                <span className="text-[10px] text-[#888888] tracking-[0.14em] uppercase font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-10">

        {/* MAIN GRID */}

        <div
          className="
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-6
          gap-x-8
          gap-y-10
          py-14
          border-b border-[#E5E5E5]
        "
        >

          {/* BRAND */}

          <div className="col-span-2 md:col-span-3 lg:col-span-2 text-center sm:text-left">

            <Link href="/" className="flex items-center justify-center sm:justify-start gap-2 mb-4">
              <div className="relative w-7 h-7 overflow-hidden ring-1 ring-[#E5E5E5]">
                <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
              </div>

              <span
                className="text-[21px] font-bold text-[#111111]"
                style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
              >
                UpForge
              </span>
            </Link>

            <p className="text-[13px] text-[#555555] leading-[1.7] max-w-[280px] mx-auto sm:mx-0 mb-5">
              A modern registry for discovering startups, research,
              and insights shaping the future of innovation.
            </p>

            <Link
              href="/submit"
              className="inline-flex items-center gap-2 text-[11px] font-semibold text-white bg-[#111111] px-4 py-2.5 hover:bg-[#333333]"
            >
              List Your Startup <ArrowRight size={11} />
            </Link>

            <div className="mt-7">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase mb-1">
                UpForge Intel
              </p>

              <p className="text-[12px] text-[#888888]">
                Weekly insights on startups and innovation.
              </p>

              <NewsletterForm />
            </div>

          </div>

          {/* NAV COLUMNS */}

          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="text-center sm:text-left">

              <h3 className="text-[10px] font-semibold text-[#111111] tracking-[0.22em] uppercase mb-4 border-b border-[#E5E5E5] pb-2">
                {heading}
              </h3>

              <ul className="space-y-2">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-[13px] text-[#666666] hover:text-[#111111]"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

            </div>
          ))}

        </div>

        {/* BOTTOM BAR */}

        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-[11px] text-[#AAAAAA] text-center md:text-left">
            <span
              className="font-semibold text-[#555555]"
              style={{ fontFamily: "'Playfair Display','Georgia',serif" }}
            >
              UpForge
            </span>{" "}
            © {year}. Built for founders and innovators.
          </p>

          <div className="flex gap-5 text-[11px] text-[#AAAAAA]">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>

        </div>

      </div>
    </footer>
  );
}
