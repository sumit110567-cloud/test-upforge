"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ArrowRight, BadgeCheck, Shield, Globe, Linkedin, Twitter, Instagram, Youtube, ShieldCheck } from "lucide-react";

const COLUMNS = [
  {
    heading: "Platform",
    links: [
      { label: "Startup Registry",  href: "/startup"         },
      { label: "Global Unicorns",   href: "/indian-unicorns" },
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
      { label: "Privacy Policy",   href: "/privacy"       },
      { label: "Terms of Service", href: "/terms"         },
      { label: "Cookie Policy",    href: "/cookies"       },
      { label: "Accessibility",    href: "/accessibility" },
    ],
  },
];

function Newsletter() {
  const [email,     setEmail]     = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="uf-ft-subscribed">
        <BadgeCheck size={13} style={{ color: "#2d7a3a", flexShrink: 0 }} />
        <span>Subscribed to UpForge Intelligence</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); if (email.trim()) { setSubmitted(true); setEmail(""); } }}
      className="uf-ft-form"
    >
      <input
        type="email" required value={email} placeholder="your@email.com"
        onChange={(e) => setEmail(e.target.value)}
        className="uf-ft-email"
      />
      <button type="submit" className="uf-ft-submit">
        Subscribe <ArrowRight size={10} />
      </button>
    </form>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="uf-footer">

      {/* ── TRUST STRIP ── */}
      <div className="uf-ft-trust">
        <div className="uf-ft-trust-inner">
          {[
            { Icon: Shield,      label: "Independent Platform"              },
            { Icon: BadgeCheck,  label: "Manually Verified Listings"        },
            { Icon: Globe,       label: "Open Registry · upforge.org"       },
            { Icon: ShieldCheck, label: "UFRN · Proof of Existence"         },
          ].map(({ Icon, label }) => (
            <div key={label} className="uf-ft-trust-item">
              <Icon size={12} style={{ color: "var(--uf-gold)", flexShrink: 0 }} />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <div className="uf-ft-main">
        <div className="uf-ft-grid">

          {/* Brand */}
          <div className="uf-ft-brand-col">
            <Link href="/" className="uf-ft-logo-link">
              <div className="uf-ft-logo">
                <Image src="/logo.jpg" alt="UpForge" fill style={{ objectFit: "cover" }} />
              </div>
              <span className="uf-ft-wordmark">UpForge</span>
            </Link>

            <p className="uf-ft-desc">
              The world's independent startup intelligence platform — tracking emerging companies, verified founder profiles, and ecosystem intelligence across 50+ countries.
            </p>

            <div className="uf-ft-domains">
              {[
                { label: "Global Registry", val: "upforge.org", href: "https://www.upforge.org" },
                { label: "India Hub",       val: "upforge.in",  href: null                      },
              ].map(({ label, val, href }) => (
                <div key={label} className="uf-ft-domain-row">
                  <span className="uf-ft-domain-label">{label}</span>
                  {href
                    ? <a href={href} target="_blank" rel="noopener noreferrer" className="uf-ft-domain-val">{val}</a>
                    : <span className="uf-ft-domain-val">{val}</span>
                  }
                </div>
              ))}
            </div>

            <Link href="/submit" className="uf-btn-solid uf-ft-cta">
              List Your Startup <ArrowRight size={10} />
            </Link>

            <div className="uf-ft-newsletter">
              <div className="uf-ft-nl-title">UpForge Intelligence</div>
              <div className="uf-ft-nl-sub">Weekly ecosystem insights, funding data, and founder stories.</div>
              <Newsletter />
            </div>
          </div>

          {/* Nav columns */}
          {COLUMNS.map(({ heading, links }) => (
            <div key={heading} className="uf-ft-nav-col">
              <div className="uf-ft-col-head">{heading}</div>
              <ul className="uf-ft-col-links">
                {links.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="uf-ft-link">{label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── GLOBAL REGISTRY BAND ── */}
      <div className="uf-ft-band">
        <div className="uf-ft-band-inner">
          <div className="uf-ft-band-left">
            <Globe size={13} style={{ color: "var(--uf-gold)", flexShrink: 0 }} />
            <span>
              Browse the global startup database →&nbsp;
              <a href="https://www.upforge.org/registry" target="_blank" rel="noopener noreferrer" className="uf-ft-band-link">
                upforge.org/registry
              </a>
            </span>
          </div>
          <span className="uf-ft-band-badge">Global · Open · Verified</span>
        </div>
      </div>

      {/* ── SOCIAL + COPYRIGHT ── */}
      <div className="uf-ft-bottom">
        <div className="uf-ft-bottom-inner">
          <div className="uf-ft-social">
            {[
              { Icon: Linkedin,  href: "https://www.linkedin.com/company/upforge-india" },
              { Icon: Twitter,   href: "#" },
              { Icon: Instagram, href: "#" },
              { Icon: Youtube,   href: "https://www.youtube.com/@upforge-ind" },
            ].map(({ Icon, href }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer" className="uf-ft-social-icon">
                <Icon size={17} />
              </a>
            ))}
          </div>

          <div className="uf-ft-copy">
            <span>© {year} UpForge · Independent · Verified · Open</span>
            <span className="uf-ft-copy-sep">·</span>
            <Link href="/privacy" className="uf-ft-link">Privacy</Link>
            <Link href="/terms"   className="uf-ft-link">Terms</Link>
            <Link href="/cookies" className="uf-ft-link">Cookies</Link>
          </div>
        </div>
      </div>

      <style>{`
        .uf-footer     { background:var(--uf-paper2); border-top:2px solid var(--uf-ink); font-family:var(--uf-sans); }

        /* trust strip */
        .uf-ft-trust       { background:var(--uf-paper); border-bottom:1px solid var(--uf-rule-light); }
        .uf-ft-trust-inner {
          max-width:1440px; margin:0 auto; padding:8px 24px;
          display:flex; flex-wrap:wrap; align-items:center; justify-content:center; gap:20px;
        }
        .uf-ft-trust-item  { display:flex; align-items:center; gap:6px; }
        .uf-ft-trust-item span {
          font-size:10px; font-weight:500; letter-spacing:.14em; text-transform:uppercase;
          color:var(--uf-ink4); white-space:nowrap;
        }

        /* main grid */
        .uf-ft-main { max-width:1440px; margin:0 auto; padding:0 24px; }
        .uf-ft-grid {
          display:grid; grid-template-columns:2fr repeat(4,1fr);
          gap:40px 32px; padding:48px 0 40px;
          border-bottom:1px solid var(--uf-rule-light);
        }

        /* brand column */
        .uf-ft-logo-link {
          display:inline-flex; align-items:center; gap:10px;
          text-decoration:none; margin-bottom:16px;
        }
        .uf-ft-logo {
          position:relative; width:30px; height:30px; overflow:hidden; flex-shrink:0;
        }
        .uf-ft-wordmark {
          font-family:var(--uf-serif); font-size:22px; font-weight:900;
          color:var(--uf-ink); letter-spacing:-.02em;
        }
        .uf-ft-desc {
          font-family:var(--uf-body); font-size:14px; line-height:1.7;
          color:var(--uf-ink3); max-width:280px; margin-bottom:18px; font-style:italic;
        }
        .uf-ft-domains       { display:flex; flex-direction:column; gap:5px; margin-bottom:18px; }
        .uf-ft-domain-row    { display:flex; align-items:center; gap:8px; }
        .uf-ft-domain-label  { font-size:9px; letter-spacing:.18em; text-transform:uppercase; color:var(--uf-ink5); }
        .uf-ft-domain-val    { font-size:10px; color:var(--uf-gold); font-weight:600; text-decoration:none; }
        .uf-ft-domain-val:hover { text-decoration:underline; }
        .uf-ft-cta { margin-bottom:24px; }

        /* newsletter */
        .uf-ft-newsletter { margin-top:4px; }
        .uf-ft-nl-title   { font-size:9px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; color:var(--uf-ink); }
        .uf-ft-nl-sub     { font-size:11px; color:var(--uf-ink4); margin-top:4px; margin-bottom:10px; }
        .uf-ft-form       { display:flex; }
        .uf-ft-email {
          flex:1; min-width:0; padding:8px 12px;
          font-family:var(--uf-sans); font-size:12px;
          border:1px solid var(--uf-rule); border-right:none;
          background:var(--uf-paper); color:var(--uf-ink); outline:none;
        }
        .uf-ft-submit {
          padding:8px 14px; background:var(--uf-ink); color:var(--uf-paper);
          font-family:var(--uf-sans); font-size:10px; font-weight:700; letter-spacing:.1em; text-transform:uppercase;
          border:none; cursor:pointer; display:flex; align-items:center; gap:5px; flex-shrink:0;
          transition:background .15s;
        }
        .uf-ft-submit:hover { background:var(--uf-ink3); }
        .uf-ft-subscribed   { display:flex; align-items:center; gap:8px; font-size:12px; color:var(--uf-ink3); margin-top:10px; }

        /* nav columns */
        .uf-ft-col-head {
          font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:var(--uf-ink);
          border-bottom:1px solid var(--uf-rule-light); padding-bottom:8px; margin-bottom:14px;
        }
        .uf-ft-col-links { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:9px; }
        .uf-ft-link      { font-size:13px; color:var(--uf-ink3); text-decoration:none; transition:color .15s; }
        .uf-ft-link:hover { color:var(--uf-gold); }

        /* global band */
        .uf-ft-band       { border-top:1px solid var(--uf-rule-light); border-bottom:1px solid var(--uf-rule-light); }
        .uf-ft-band-inner {
          max-width:1440px; margin:0 auto; padding:14px 24px;
          display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:10px;
        }
        .uf-ft-band-left  { display:flex; align-items:center; gap:9px; font-size:12px; color:var(--uf-ink4); }
        .uf-ft-band-link  { color:var(--uf-gold); font-weight:600; text-decoration:none; }
        .uf-ft-band-link:hover { text-decoration:underline; }
        .uf-ft-band-badge { font-size:9px; letter-spacing:.18em; text-transform:uppercase; color:var(--uf-ink5); }

        /* bottom */
        .uf-ft-bottom       { }
        .uf-ft-bottom-inner {
          max-width:1440px; margin:0 auto; padding:16px 24px;
          display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:12px;
        }
        .uf-ft-social       { display:flex; align-items:center; gap:18px; }
        .uf-ft-social-icon  { color:var(--uf-ink4); transition:color .15s; }
        .uf-ft-social-icon:hover { color:var(--uf-gold); }
        .uf-ft-copy         { display:flex; align-items:center; gap:12px; font-size:11px; color:var(--uf-ink4); flex-wrap:wrap; }
        .uf-ft-copy-sep     { opacity:.3; }

        /* shared button */
        .uf-btn-solid {
          display:inline-flex; align-items:center; gap:5px; padding:8px 16px;
          background:var(--uf-ink); border:none;
          font-family:var(--uf-sans); font-size:10px; font-weight:700; letter-spacing:.12em; text-transform:uppercase;
          color:var(--uf-paper); text-decoration:none; cursor:pointer; transition:background .15s;
        }
        .uf-btn-solid:hover { background:var(--uf-ink3); }

        @media (max-width:1024px) { .uf-ft-grid { grid-template-columns:1fr 1fr 1fr; } .uf-ft-brand-col { grid-column:1/-1; } }
        @media (max-width:640px)  { .uf-ft-grid { grid-template-columns:1fr 1fr; } .uf-ft-brand-col { grid-column:1/-1; } }
        @media (max-width:420px)  { .uf-ft-grid { grid-template-columns:1fr; } }
      `}</style>
    </footer>
  );
}
