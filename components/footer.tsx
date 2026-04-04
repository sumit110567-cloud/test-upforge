"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Globe2, ShieldCheck, BarChart3, Linkedin, Twitter, Instagram, Youtube } from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Registry",
    links: [
      { label: "Global Startups", href: "/registry" },
      { label: "Unicorn Tracker", href: "/registry?filter=unicorn" },
      { label: "By Sector", href: "/registry?view=sectors" },
      { label: "Submit Startup", href: "/submit" },
      { label: "Verify UFRN", href: "/verify" },
    ],
  },
  {
    heading: "Intelligence",
    links: [
      { label: "Market Reports", href: "/reports" },
      { label: "Founder Stories", href: "/founder-stories" },
      { label: "Research", href: "/research" },
      { label: "Journal", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About UpForge", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Careers", href: "/careers" },
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

const STATS = [
  { value: "5,000+", label: "Verified Startups" },
  { value: "40+", label: "Countries Tracked" },
  { value: "120+", label: "Sectors Covered" },
  { value: "Free", label: "Registry Access" },
];

function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) { setSubmitted(true); setEmail(""); }
  };

  if (submitted) return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
      <BadgeCheck size={14} style={{ color: "#4ADE80" }} />
      <span style={{ fontSize: 12, color: "#999" }}>You're on the list. Welcome to UpForge Intel.</span>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 12, display: "flex", maxWidth: 340 }}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
        style={{
          flex: 1,
          padding: "9px 12px",
          fontSize: 12,
          fontFamily: "'Georgia', serif",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRight: "none",
          color: "#E8E4DC",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "9px 14px",
          background: "#C59A2E",
          color: "#0D0D0D",
          fontSize: 10,
          fontWeight: 800,
          letterSpacing: "0.16em",
          textTransform: "uppercase",
          fontFamily: "system-ui",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 4,
          whiteSpace: "nowrap",
        }}
      >
        Subscribe <ArrowRight size={10} />
      </button>
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <style>{`
        .uf-footer-link {
          font-size: 12px;
          color: #888;
          font-family: system-ui;
          transition: color 0.15s;
          display: block;
        }
        .uf-footer-link:hover { color: #C59A2E; }
        .uf-social { 
          display: flex; align-items: center; justify-content: center;
          width: 34px; height: 34px;
          border: 1px solid rgba(255,255,255,0.1);
          color: #888;
          transition: all 0.15s;
        }
        .uf-social:hover { border-color: #C59A2E; color: #C59A2E; }
      `}</style>

      {/* Stats band */}
      <div style={{ background: "#161411", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="max-w-[1400px] mx-auto px-6" style={{ padding: "24px 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1, background: "rgba(255,255,255,0.04)" }}>
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                style={{
                  textAlign: "center",
                  padding: "20px 16px",
                  background: "#161411",
                  borderRight: "1px solid rgba(255,255,255,0.04)",
                }}
              >
                <div style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: 26,
                  fontWeight: 700,
                  color: "#C59A2E",
                  lineHeight: 1,
                }}>
                  {value}
                </div>
                <div style={{
                  fontSize: 9,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#555",
                  fontFamily: "system-ui",
                  fontWeight: 600,
                  marginTop: 6,
                }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main footer body */}
      <div style={{ background: "#0D0D0D" }}>
        <div className="max-w-[1400px] mx-auto" style={{ padding: "64px 24px 0" }}>

          {/* Top section: brand + columns */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 48, paddingBottom: 48, borderBottom: "1px solid rgba(255,255,255,0.06)" }}>

            {/* Brand column */}
            <div>
              {/* Gold top rule */}
              <div style={{ height: 2, background: "linear-gradient(90deg, #8B6914, #C59A2E, #8B6914)", marginBottom: 20, width: 48 }} />

              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                <div style={{ width: 28, height: 28, position: "relative", overflow: "hidden" }}>
                  <Image src="/logo.jpg" alt="UpForge" fill className="object-cover" />
                </div>
                <span style={{
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#F0EBE0",
                  letterSpacing: "-0.01em",
                }}>
                  UpForge
                </span>
              </Link>

              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.75, fontFamily: "'Georgia', serif", maxWidth: 280 }}>
                The world's independent verified startup registry. Tracking emerging companies, unicorn founders, and ecosystem intelligence across 40+ countries.
              </p>

              {/* Trust badges */}
              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { Icon: ShieldCheck, text: "Independent — no paid placements" },
                  { Icon: BadgeCheck, text: "Human-verified listings" },
                  { Icon: Globe2, text: "Global coverage, 40+ countries" },
                  { Icon: BarChart3, text: "Updated daily" },
                ].map(({ Icon, text }) => (
                  <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <Icon size={12} style={{ color: "#C59A2E", flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: "#555", fontFamily: "system-ui" }}>{text}</span>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div style={{ marginTop: 32 }}>
                <div style={{ fontSize: 9, letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 700, color: "#C59A2E", fontFamily: "system-ui" }}>
                  UpForge Intel — Weekly
                </div>
                <div style={{ fontSize: 12, color: "#666", marginTop: 6, fontFamily: "'Georgia', serif" }}>
                  Startup signals, funding moves & founder insights.
                </div>
                <NewsletterForm />
              </div>
            </div>

            {/* Nav columns */}
            {FOOTER_COLUMNS.map(({ heading, links }) => (
              <div key={heading}>
                <div style={{
                  fontSize: 9,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  color: "#C59A2E",
                  fontFamily: "system-ui",
                  marginBottom: 16,
                  paddingBottom: 10,
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                }}>
                  {heading}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {links.map(({ label, href }) => (
                    <Link key={href} href={href} className="uf-footer-link">{label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div style={{ padding: "24px 0", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>

            {/* Copyright */}
            <div>
              <div style={{ fontSize: 11, color: "#444", fontFamily: "system-ui" }}>
                © {year} UpForge · Global Startup Registry
              </div>
              <div style={{ fontSize: 10, color: "#333", fontFamily: "system-ui", marginTop: 3 }}>
                upforge.org · Built for founders, investors and innovators worldwide
              </div>
            </div>

            {/* Social */}
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 9, color: "#333", letterSpacing: "0.16em", textTransform: "uppercase", fontFamily: "system-ui", marginRight: 8 }}>
                Follow
              </span>
              <a href="https://www.linkedin.com/company/upforge-india" target="_blank" rel="noopener noreferrer" className="uf-social">
                <Linkedin size={13} />
              </a>
              <a href="https://twitter.com/upforge_in" target="_blank" rel="noopener noreferrer" className="uf-social">
                <Twitter size={13} />
              </a>
              <a href="https://www.instagram.com/upforge.official" target="_blank" rel="noopener noreferrer" className="uf-social">
                <Instagram size={13} />
              </a>
              <a href="https://www.youtube.com/@upforge-ind" target="_blank" rel="noopener noreferrer" className="uf-social">
                <Youtube size={13} />
              </a>
            </div>

            {/* Legal links */}
            <div style={{ display: "flex", gap: 20 }}>
              {["/privacy", "/terms", "/cookies"].map((href) => (
                <Link key={href} href={href} style={{ fontSize: 10, color: "#333", fontFamily: "system-ui", textTransform: "capitalize" }}
                  className="hover:text-[#C59A2E]">
                  {href.replace("/", "").replace("-", " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
