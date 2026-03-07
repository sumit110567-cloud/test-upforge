//components/footer.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import { BadgeCheck, Shield, Globe, ExternalLink, CheckCircle2, Award } from "lucide-react";

// ─── INLINE CLIENT COMPONENT — handles onError without separate file ───────────
function LeaderAvatar({ src, alt, initials }: { src: string; alt: string; initials: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div style={{
        width: "100%", height: "100%", display: "flex", alignItems: "center",
        justifyContent: "center", fontFamily: "'Playfair Display',serif",
        fontWeight: 900, fontSize: 16, color: "#C9A84C",
      }}>
        {initials}
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
    />
  );
}

// ─── INDIA TOP 3 BILLIONAIRES — Forbes March 2025 ─────────────────────────────
const INDIA_LEADERS = [
  {
    name: "Mukesh Ambani",
    title: "Chairman, Reliance Industries",
    netWorth: "$96.3B",
    rank: "#10",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mukesh_Ambani.jpg/240px-Mukesh_Ambani.jpg",
    initials: "MA",
    venture: "Jio Platforms",
  },
  {
    name: "Gautam Adani",
    title: "Chairman, Adani Group",
    netWorth: "$68.7B",
    rank: "#17",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Gautam_Adani_cropped.jpg/240px-Gautam_Adani_cropped.jpg",
    initials: "GA",
    venture: "Adani Green Energy",
  },
  {
    name: "Shiv Nadar",
    title: "Founder, HCL Technologies",
    netWorth: "$29.4B",
    rank: "#56",
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Shiv_Nadar.jpg/240px-Shiv_Nadar.jpg",
    initials: "SN",
    venture: "HCL Software",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#1A1208",
        color: "#fff",
        fontFamily: "system-ui, sans-serif",
        borderTop: "3px solid #C9A84C",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Libre+Baskerville:ital,wght@0,400;1,400&display=swap');
        .ft-pf  { font-family: 'Playfair Display', Georgia, serif !important; }
        .ft-bsk { font-family: 'Libre Baskerville', Georgia, serif !important; }
        .ft-sys { font-family: system-ui, sans-serif !important; }
        .ft-link:hover { color: #C9A84C !important; }
        .ft-card:hover { border-color: rgba(201,168,76,.35) !important; background: rgba(255,255,255,.05) !important; }
        @keyframes ftPing {
          0%,100%{transform:scale(1);opacity:.7} 50%{transform:scale(1.9);opacity:0}
        }
        .ft-ping { animation: ftPing 2.2s ease-in-out infinite; }
        .ft-orn { display:flex;align-items:center;gap:10px;color:rgba(201,168,76,.5);font-size:10px;letter-spacing:.28em;font-family:system-ui,sans-serif; }
        .ft-orn::before,.ft-orn::after { content:'';flex:1;height:1px;background:linear-gradient(90deg,transparent,rgba(201,168,76,.35),rgba(201,168,76,.6),rgba(201,168,76,.35),transparent); }
      `}</style>

      {/* ── TOP STATUS STRIP ── */}
      <div style={{ background: "#0F0B06", borderBottom: "1px solid rgba(201,168,76,.14)" }}>
        <div className="max-w-[1480px] mx-auto px-5 sm:px-8 py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="hidden sm:flex items-center gap-6">
            {[
              { icon: Shield, text: "100% Independent" },
              { icon: BadgeCheck, text: "Every listing verified" },
              { icon: Globe, text: "Open & Google-indexed" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <item.icon style={{ width: 10, height: 10, color: "#C9A84C" }} />
                <span className="ft-sys" style={{ fontSize: 9, color: "rgba(255,255,255,.3)", letterSpacing: ".18em", textTransform: "uppercase" }}>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex" style={{ width: 7, height: 7 }}>
              <span className="ft-ping absolute inline-flex rounded-full" style={{ inset: 0, background: "#22c55e", opacity: .6 }} />
              <span className="relative inline-flex rounded-full" style={{ width: 7, height: 7, background: "#22c55e" }} />
            </span>
            <span className="ft-sys" style={{ fontSize: 9, color: "rgba(255,255,255,.28)", letterSpacing: ".18em", textTransform: "uppercase" }}>
              Live Registry · India's Startup Database
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8">

        {/* ── FOOTER MASTHEAD ── */}
        <div className="py-10 sm:py-12 text-center" style={{ borderBottom: "1px solid rgba(201,168,76,.14)" }}>
          <div className="ft-orn mb-5">INDIA'S INDEPENDENT STARTUP REGISTRY</div>
          <p className="ft-pf font-black leading-none" style={{ fontSize: "clamp(2.4rem,6vw,4.5rem)", color: "#fff", letterSpacing: "-.02em" }}>
            UpForge
          </p>
          <p className="ft-bsk italic mt-2" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,.3)" }}>
            Est. 2025 · New Delhi, India · Registry of Record
          </p>
        </div>

        {/* ── INDIA'S BUSINESS LEADERS ── */}
        <div className="py-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Award style={{ width: 13, height: 13, color: "#C9A84C" }} />
              <span className="ft-sys" style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(255,255,255,.3)" }}>
                India's Business Leaders — Forbes 2025
              </span>
            </div>
            <a
              href="https://www.forbes.com/billionaires/"
              target="_blank"
              rel="noopener noreferrer"
              className="ft-sys"
              style={{ fontSize: 8, color: "rgba(255,255,255,.18)", letterSpacing: ".14em", textTransform: "uppercase" }}
            >
              Forbes ↗
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {INDIA_LEADERS.map((person, i) => (
              <div
                key={i}
                className="ft-card"
                style={{
                  border: "1px solid rgba(255,255,255,.08)",
                  background: "rgba(255,255,255,.025)",
                  padding: "16px",
                  display: "flex",
                  gap: 14,
                  alignItems: "flex-start",
                  transition: "border-color .2s ease, background .2s ease",
                }}
              >
                {/* Avatar — onError is safe here since the whole file is "use client" */}
                <div style={{
                  width: 52, height: 52, flexShrink: 0, overflow: "hidden",
                  border: "1.5px solid rgba(201,168,76,.3)",
                  background: "#2A1F0E",
                }}>
                  <LeaderAvatar src={person.img} alt={person.name} initials={person.initials} />
                </div>

                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <p className="ft-pf font-bold leading-tight" style={{ fontSize: 14, color: "#fff" }}>
                      {person.name}
                    </p>
                    <span
                      className="ft-sys flex-shrink-0"
                      style={{
                        fontSize: 8, fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase",
                        color: "#C9A84C", border: "1px solid rgba(201,168,76,.35)", padding: "1px 6px",
                      }}
                    >
                      {person.rank}
                    </span>
                  </div>
                  <p className="ft-sys mb-2" style={{ fontSize: 9.5, color: "rgba(255,255,255,.32)", lineHeight: 1.4 }}>
                    {person.title}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="ft-pf font-black" style={{ fontSize: "1.15rem", color: "#C9A84C" }}>
                      {person.netWorth}
                    </p>
                    <span
                      className="ft-sys"
                      style={{ fontSize: 8, color: "rgba(255,255,255,.22)", background: "rgba(255,255,255,.05)", border: "1px solid rgba(255,255,255,.08)", padding: "1px 6px" }}
                    >
                      {person.venture}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="ft-bsk italic mt-4 text-right" style={{ fontSize: 9.5, color: "rgba(255,255,255,.15)" }}>
            * Forbes Real-Time Billionaires, March 2025. Net worth figures fluctuate daily.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 py-10" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>

          {/* Brand */}
          <div className="col-span-2 sm:col-span-1">
            <p className="ft-pf font-black mb-1" style={{ fontSize: "1.35rem", color: "#fff" }}>UpForge</p>
            <p className="ft-bsk italic mb-4" style={{ fontSize: 11.5, color: "rgba(255,255,255,.3)" }}>
              India's Registry of Record
            </p>
            <p className="ft-sys mb-5" style={{ fontSize: 11, color: "rgba(255,255,255,.28)", lineHeight: 1.75, maxWidth: 240 }}>
              India's structured public registry — neutral, open, independently maintained. No ads. No paid rankings. Ever.
            </p>
            <div className="flex flex-wrap gap-2 mb-5">
              {[
                { icon: CheckCircle2, text: "Free Forever" },
                { icon: BadgeCheck, text: "Verified" },
                { icon: Shield, text: "Independent" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-1.5"
                  style={{ border: "1px solid rgba(201,168,76,.22)", padding: "4px 10px" }}>
                  <item.icon style={{ width: 10, height: 10, color: "#C9A84C" }} />
                  <span className="ft-sys" style={{ fontSize: 8.5, color: "rgba(255,255,255,.38)", letterSpacing: ".13em", textTransform: "uppercase" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <Link
              href="/submit"
              className="ft-sys inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
              style={{ fontSize: 10, fontWeight: 800, letterSpacing: ".16em", textTransform: "uppercase", background: "#C9A84C", color: "#1A1208", padding: "10px 20px" }}
            >
              List Your Startup →
            </Link>
          </div>

          {/* Registry */}
          <div>
            <h4 className="ft-sys mb-4" style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", borderBottom: "1px solid rgba(255,255,255,.07)", paddingBottom: 8 }}>
              Registry
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["Browse Startups", "/startup"],
                ["Indian Unicorns", "/indian-unicorns"],
                ["AI Startups", "/top-ai-startups"],
                ["Best SaaS", "/best-saas-startups"],
                ["Top Funded", "/top-funded-startups"],
                ["Founder Stories", "/founder-stories"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <Link href={href} className="ft-link ft-sys transition-colors" style={{ fontSize: 12, color: "rgba(255,255,255,.38)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Standards */}
          <div>
            <h4 className="ft-sys mb-4" style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", borderBottom: "1px solid rgba(255,255,255,.07)", paddingBottom: 8 }}>
              Standards
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["Verification Policy", "/verification"],
                ["Editorial Policy", "/editorial"],
                ["Data Policy", "/data-policy"],
                ["Corrections", "/corrections"],
                ["Reports", "/reports"],
                ["About", "/about"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <Link href={href} className="ft-link ft-sys transition-colors" style={{ fontSize: 12, color: "rgba(255,255,255,.38)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="ft-sys mb-4" style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", borderBottom: "1px solid rgba(255,255,255,.07)", paddingBottom: 8 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {[
                ["About UpForge", "/about"],
                ["FAQ", "/faq"],
                ["Contact", "/contact"],
                ["Feedback", "/feedback"],
                ["Submit a Startup", "/submit"],
                ["Sitemap", "/sitemap"],
              ].map(([label, href]) => (
                <li key={href} style={{ marginBottom: 10 }}>
                  <Link href={href} className="ft-link ft-sys transition-colors" style={{ fontSize: 12, color: "rgba(255,255,255,.38)" }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── SISTER PRODUCTS ── */}
        <div className="py-7" style={{ borderBottom: "1px solid rgba(255,255,255,.07)" }}>
          <p className="ft-sys mb-5" style={{ fontSize: 9, fontWeight: 800, letterSpacing: ".26em", textTransform: "uppercase", color: "rgba(255,255,255,.2)" }}>
            From the Same Ecosystem
          </p>
          <div className="grid sm:grid-cols-2 gap-3 max-w-xl">
            {[
              { name: "InternAdda", href: "https://www.internadda.com", desc: "India's internship & early-career platform for students and fresh graduates" },
              { name: "Arjuna AI", href: "https://www.arjunaai.in", desc: "AI-powered mock interview platform — practice, get feedback, land the role" },
            ].map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="ft-card flex items-start gap-3 transition-all"
                style={{ border: "1px solid rgba(255,255,255,.07)", background: "rgba(255,255,255,.02)", padding: "12px 14px" }}
              >
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="flex items-center gap-1.5 mb-1">
                    <p className="ft-pf font-bold" style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)" }}>{p.name}</p>
                    <ExternalLink style={{ width: 10, height: 10, color: "rgba(255,255,255,.18)", flexShrink: 0 }} />
                  </div>
                  <p className="ft-sys" style={{ fontSize: 10.5, color: "rgba(255,255,255,.26)", lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ── LEGAL ── */}
        <div className="py-6" style={{ borderBottom: "1px solid rgba(255,255,255,.05)" }}>
          <p className="ft-sys" style={{ fontSize: 10.5, color: "rgba(255,255,255,.18)", lineHeight: 1.75, maxWidth: "72ch" }}>
            UpForge is an informational public registry. Listings are compiled from publicly available sources or founder submissions.
            We do not provide investment advice, endorsements, rankings, or financial ratings.
            Information may change over time and should be independently verified before any business or investment decision.
            Billionaire data sourced from Forbes Real-Time Billionaires, March 2025.
          </p>
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="ft-pf font-black" style={{ fontSize: "1rem", color: "rgba(255,255,255,.45)" }}>UpForge</span>
            <span style={{ width: 1, height: 12, background: "rgba(255,255,255,.1)", display: "inline-block" }} />
            <p className="ft-sys" style={{ fontSize: 9.5, color: "rgba(255,255,255,.2)" }}>
              © {year} UpForge Registry. All rights reserved. · Est. 2025 · New Delhi, India
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {[["Privacy Policy", "/privacy"], ["Terms of Use", "/terms"], ["Cookie Policy", "/cookies"], ["Accessibility", "/accessibility"]].map(([label, href]) => (
              <Link key={href} href={href} className="ft-link ft-sys transition-colors" style={{ fontSize: 9.5, color: "rgba(255,255,255,.2)" }}>
                {label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
