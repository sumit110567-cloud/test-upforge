"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  ArrowRight, BadgeCheck, Shield, Globe,
  Linkedin, Twitter, Instagram, Youtube, ShieldCheck,
} from "lucide-react";

const FOOTER_COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Startup Registry",  href: "/startup"         },
      { label: "Indian Unicorns",   href: "/indian-unicorns" },
      { label: "Verify UFRN",       href: "/verify"          },
      { label: "Reports",           href: "/reports"         },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Founder Chronicle", href: "/"                },
      { label: "Startup Research",  href: "/research"        },
      { label: "Submit Startup",    href: "/submit"          },
      { label: "Newsletter",        href: "/newsletter"      },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About",    href: "/about"   },
      { label: "Contact",  href: "/contact" },
      { label: "Careers",  href: "/careers" },
      { label: "FAQs",     href: "/faq"     },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy",  href: "/privacy"       },
      { label: "Terms of Service",href: "/terms"         },
      { label: "Cookie Policy",   href: "/cookies"       },
      { label: "Accessibility",   href: "/accessibility" },
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

  if (submitted) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "12px" }}>
        <BadgeCheck size={14} style={{ color: "#2d7a3a", flexShrink: 0 }} />
        <span style={{ fontFamily: "var(--uf-sans)", fontSize: "12px", color: "var(--uf-ink3)" }}>
          Subscribed to UpForge Intel
        </span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", marginTop: "12px" }}>
      <input
        type="email"
        required
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          flex: 1,
          padding: "8px 12px",
          fontFamily: "var(--uf-sans)",
          fontSize: "12px",
          border: "1px solid var(--uf-rule)",
          borderRight: "none",
          background: "var(--uf-paper)",
          color: "var(--uf-ink)",
          outline: "none",
          minWidth: 0,
        }}
      />
      <button
        type="submit"
        style={{
          padding: "8px 14px",
          fontFamily: "var(--uf-sans)",
          fontSize: "10px",
          fontWeight: 700,
          letterSpacing: ".1em",
          textTransform: "uppercase",
          background: "var(--uf-ink)",
          color: "var(--uf-paper)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          flexShrink: 0,
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
    <footer style={{ background: "var(--uf-paper2)", borderTop: "2px solid var(--uf-ink)" }}>

      {/* ── TRUST STRIP ── */}
      <div style={{ background: "var(--uf-paper)", borderBottom: "1px solid var(--uf-rule-light)" }}>
        <div
          style={{
            maxWidth: "1440px",
            margin: "0 auto",
            padding: "8px 24px",
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {[
            { icon: Shield,     label: "Independent Platform" },
            { icon: BadgeCheck, label: "Manually Verified Listings" },
            { icon: Globe,      label: "Open Data Registry · upforge.org" },
            { icon: ShieldCheck,label: "UFRN System · Proof of Existence" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <Icon size={12} style={{ color: "var(--uf-gold)", flexShrink: 0 }} />
              <span
                style={{
                  fontFamily: "var(--uf-sans)",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "var(--uf-ink4)",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr repeat(4, 1fr)",
            gap: "40px 32px",
            padding: "48px 0 40px",
            borderBottom: "1px solid var(--uf-rule-light)",
          }}
          className="footer-grid"
        >
          {/* BRAND COLUMN */}
          <div>
            <Link href="/" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <div style={{ position: "relative", width: "30px", height: "30px", overflow: "hidden", flexShrink: 0 }}>
                <Image src="/logo.jpg" alt="UpForge" fill style={{ objectFit: "cover" }} />
              </div>
              <span
                style={{
                  fontFamily: "var(--uf-serif)",
                  fontSize: "22px",
                  fontWeight: 900,
                  color: "var(--uf-ink)",
                  letterSpacing: "-.02em",
                }}
              >
                UpForge
              </span>
            </Link>

            <p
              style={{
                fontFamily: "var(--uf-body)",
                fontSize: "14px",
                lineHeight: 1.7,
                color: "var(--uf-ink3)",
                maxWidth: "280px",
                marginBottom: "16px",
                fontStyle: "italic",
              }}
            >
              India's independent startup intelligence platform — tracking emerging companies, founder insights, and ecosystem trends with verified data.
            </p>

            {/* Dual-domain callout */}
            <div style={{ marginBottom: "18px", display: "flex", flexDirection: "column", gap: "4px" }}>
              {[
                { label: "India Hub", val: "upforge.in", href: null },
                { label: "Global Registry", val: "upforge.org", href: "https://www.upforge.org" },
              ].map(({ label, val, href }) => (
                <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <span style={{ fontFamily: "var(--uf-sans)", fontSize: "9px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--uf-ink4)" }}>
                    {label}
                  </span>
                  {href ? (
                    <a href={href} target="_blank" rel="noopener noreferrer"
                      style={{ fontFamily: "var(--uf-sans)", fontSize: "10px", color: "var(--uf-gold)", fontWeight: 600, textDecoration: "none" }}>
                      {val}
                    </a>
                  ) : (
                    <span style={{ fontFamily: "var(--uf-sans)", fontSize: "10px", color: "var(--uf-gold)", fontWeight: 600 }}>
                      {val}
                    </span>
                  )}
                </div>
              ))}
            </div>

            <Link
              href="/submit"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                padding: "9px 16px",
                background: "var(--uf-ink)",
                color: "var(--uf-paper)",
                fontFamily: "var(--uf-sans)",
                fontSize: "10px",
                fontWeight: 700,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                textDecoration: "none",
                marginBottom: "24px",
              }}
            >
              List Your Startup <ArrowRight size={10} />
            </Link>

            {/* Newsletter */}
            <div>
              <p style={{ fontFamily: "var(--uf-sans)", fontSize: "9px", fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--uf-ink)" }}>
                UpForge Intel
              </p>
              <p style={{ fontFamily: "var(--uf-sans)", fontSize: "12px", color: "var(--uf-ink4)", marginTop: "4px" }}>
                Weekly startup insights and ecosystem research.
              </p>
              <NewsletterForm />
            </div>
          </div>

          {/* NAV COLUMNS */}
          {FOOTER_COLUMNS.map(({ heading, links }) => (
            <div key={heading}>
              <div
                style={{
                  fontFamily: "var(--uf-sans)",
                  fontSize: "9px",
                  fontWeight: 700,
                  letterSpacing: ".22em",
                  textTransform: "uppercase",
                  color: "var(--uf-ink)",
                  borderBottom: "1px solid var(--uf-rule-light)",
                  paddingBottom: "8px",
                  marginBottom: "14px",
                }}
              >
                {heading}
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      style={{
                        fontFamily: "var(--uf-sans)",
                        fontSize: "13px",
                        color: "var(--uf-ink3)",
                        textDecoration: "none",
                        transition: "color .15s",
                      }}
                      className="footer-link"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── GLOBAL REGISTRY BANNER ── */}
        <div
          style={{
            padding: "18px 0",
            borderBottom: "1px solid var(--uf-rule-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Globe size={13} style={{ color: "var(--uf-gold)", flexShrink: 0 }} />
            <p style={{ fontFamily: "var(--uf-sans)", fontSize: "12px", color: "var(--uf-ink4)" }}>
              Looking for the global startup database?{" "}
              <a
                href="https://www.upforge.org/registry"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--uf-gold)", fontWeight: 600, textDecoration: "none" }}
              >
                Visit UpForge Global Registry →
              </a>
            </p>
          </div>
          <span style={{ fontFamily: "var(--uf-sans)", fontSize: "9px", letterSpacing: ".18em", textTransform: "uppercase", color: "var(--uf-ink4)" }}>
            upforge.org
          </span>
        </div>

        {/* ── SOCIAL ROW ── */}
        <div
          style={{
            padding: "20px 0",
            borderBottom: "1px solid var(--uf-rule-light)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "16px",
          }}
        >
          <p style={{ fontFamily: "var(--uf-sans)", fontSize: "10px", letterSpacing: ".14em", textTransform: "uppercase", color: "var(--uf-ink4)" }}>
            Follow UpForge
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            {[
              { Icon: Linkedin,  href: "https://www.linkedin.com/company/upforge-india" },
              { Icon: Twitter,   href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube,   href: "https://www.youtube.com/@upforge-ind" },
            ].map(({ Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--uf-ink4)", transition: "color .15s" }}
                className="social-link"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        {/* ── COPYRIGHT ── */}
        <div
          style={{
            padding: "20px 0",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "12px",
          }}
        >
          <div>
            <p style={{ fontFamily: "var(--uf-sans)", fontSize: "11px", color: "var(--uf-ink4)" }}>
              © {year} UpForge · Independent Startup Intelligence · Verified Data · Updated Daily
            </p>
            <p style={{ fontFamily: "var(--uf-sans)", fontSize: "10px", color: "var(--uf-ink4)", opacity: .6, marginTop: "2px" }}>
              upforge.in (India) · upforge.org (Global Registry)
            </p>
          </div>
          <div style={{ display: "flex", gap: "20px" }}>
            {[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms",   href: "/terms"   },
              { label: "Cookies", href: "/cookies" },
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                style={{ fontFamily: "var(--uf-sans)", fontSize: "11px", color: "var(--uf-ink4)", textDecoration: "none" }}
                className="footer-link"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: var(--uf-gold) !important; }
        .social-link:hover { color: var(--uf-gold) !important; }
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 540px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
