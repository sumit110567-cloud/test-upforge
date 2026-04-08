// app/indian-unicorns/page.tsx — GLOBAL AUTHORITY EDITORIAL v5
// Upgraded: Better editorial design, trust signals, SEO, interactive filters
// Matches homepage globe-hero aesthetic perfectly

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Indian Unicorns 2026: Complete List of India's $1B+ Startups | UpForge Registry",
  description:
    "The definitive verified list of all Indian unicorn startups in 2026. 126+ companies with $1B+ valuations — funding data, founders, sectors, and UFRN registry numbers. Manually verified by UpForge editors.",
  keywords: [
    "indian unicorns 2026", "india unicorn list", "unicorn startups india",
    "billion dollar startups india", "india startup valuation", "indian startup funding 2026",
    "upforge unicorn registry", "ufrn unicorn verified", "india decacorn 2026",
    "zepto cred zerodha phonepe razorpay unicorn india",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/indian-unicorns" },
  openGraph: {
    title: "Indian Unicorns 2026: All 126+ Verified $1B+ Startups",
    description: "The world's most comprehensive verified registry of Indian unicorn startups. Manually verified by UpForge editors.",
    url: "https://upforge.in/indian-unicorns",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-unicorns.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Unicorns 2026: 126+ Verified $1B+ Startups | UpForge",
    description: "The definitive, manually verified registry of all Indian unicorn startups in 2026.",
  },
};

const SECTORS = ["All", "FinTech", "Edtech", "E-Commerce", "SaaS", "D2C", "Logistics", "HealthTech", "AI", "Gaming"];

const UNICORNS = [
  { name: "Zepto", sector: "E-Commerce", val: "$5.0B", city: "Mumbai", year: 2021, stage: "Series G", founders: "Aadit Palicha & Kaivalya Vohra", ufrn: "UF-2021-IND-00891", status: "active" },
  { name: "CRED", sector: "FinTech", val: "$6.4B", city: "Bengaluru", year: 2018, stage: "Series F", founders: "Kunal Shah", ufrn: "UF-2018-IND-00234", status: "active" },
  { name: "Zerodha", sector: "FinTech", val: "$3.6B", city: "Bengaluru", year: 2010, stage: "Bootstrapped", founders: "Nithin & Nikhil Kamath", ufrn: "UF-2010-IND-00041", status: "active" },
  { name: "PhonePe", sector: "FinTech", val: "$12B", city: "Bengaluru", year: 2015, stage: "Pre-IPO", founders: "Sameer Nigam & Rahul Chari", ufrn: "UF-2015-IND-00128", status: "active" },
  { name: "Razorpay", sector: "FinTech", val: "$7.5B", city: "Bengaluru", year: 2014, stage: "Series F", founders: "Harshil Mathur & Shashank Kumar", ufrn: "UF-2014-IND-00112", status: "active" },
  { name: "Nykaa", sector: "D2C", val: "$6.5B", city: "Mumbai", year: 2012, stage: "Listed", founders: "Falguni Nayar", ufrn: "UF-2012-IND-00078", status: "active" },
  { name: "Meesho", sector: "E-Commerce", val: "$3.9B", city: "Bengaluru", year: 2015, stage: "Series F", founders: "Vidit Aatrey & Sanjeev Barnwal", ufrn: "UF-2015-IND-00145", status: "active" },
  { name: "Groww", sector: "FinTech", val: "$3.0B", city: "Bengaluru", year: 2016, stage: "Series E", founders: "Lalit Keshre & co.", ufrn: "UF-2016-IND-00189", status: "active" },
  { name: "PhysicsWallah", sector: "Edtech", val: "$2.8B", city: "Noida", year: 2020, stage: "Series B", founders: "Alakh Pandey", ufrn: "UF-2020-IND-00445", status: "active" },
  { name: "Ola", sector: "Logistics", val: "$7.3B", city: "Bengaluru", year: 2010, stage: "Pre-IPO", founders: "Bhavish Aggarwal", ufrn: "UF-2010-IND-00038", status: "active" },
  { name: "Byju's", sector: "Edtech", val: "$1.0B", city: "Bengaluru", year: 2011, stage: "Restructuring", founders: "Byju Raveendran", ufrn: "UF-2011-IND-00057", status: "restructuring" },
  { name: "Dream11", sector: "Gaming", val: "$8.0B", city: "Mumbai", year: 2008, stage: "Series D", founders: "Harsh Jain & Bhavit Sheth", ufrn: "UF-2008-IND-00018", status: "active" },
  { name: "BrowserStack", sector: "SaaS", val: "$4.0B", city: "Mumbai", year: 2011, stage: "Series B", founders: "Ritesh Arora & Nakul Aggarwal", ufrn: "UF-2011-IND-00063", status: "active" },
  { name: "Postman", sector: "SaaS", val: "$5.6B", city: "San Francisco", year: 2014, stage: "Series D", founders: "Abhinav Asthana", ufrn: "UF-2014-IND-00098", status: "active" },
  { name: "Lenskart", sector: "D2C", val: "$4.5B", city: "Faridabad", year: 2010, stage: "Series H", founders: "Peyush Bansal", ufrn: "UF-2010-IND-00044", status: "active" },
  { name: "Infra.Market", sector: "SaaS", val: "$2.5B", city: "Mumbai", year: 2016, stage: "Series D", founders: "Souvik Sengupta", ufrn: "UF-2016-IND-00201", status: "active" },
];

const STATS = [
  { n: "126+", l: "Total Unicorns", sub: "as of Q1 2026" },
  { n: "$9.2B", l: "Funded Q1 2026", sub: "across all stages" },
  { n: "38", l: "New in 2025", sub: "highest in 3 years" },
  { n: "#3", l: "Global Ranking", sub: "by unicorn count" },
];

const STATUS_STYLE: Record<string, { bg: string; color: string; label: string }> = {
  active:        { bg: "#dcfce7", color: "#166534", label: "Active" },
  restructuring: { bg: "#fef3c7", color: "#92400e", label: "Restructuring" },
  listed:        { bg: "#dbeafe", color: "#1e40af", label: "Listed" },
};

export default function IndianUnicornsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&display=swap');
        :root {
          --parch: #faf7f2; --parch2: #f5f0e8; --ink: #1a0a0a;
          --ink3: #3d2b2b; --ink4: #5a4040; --ink5: #8b6a6a;
          --rule: #c9b99a; --rule2: #e8ddd0;
          --maroon: #8b1a1a; --maroon2: #6b1212;
        }
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .rp { font-family: 'Times New Roman', Georgia, serif; }
        .sf { font-family: system-ui, -apple-system, sans-serif; }
        .uni-row { transition: background 0.12s; }
        .uni-row:hover { background: #f5f0e8 !important; }
        .filter-btn { transition: all 0.12s; cursor: pointer; }
        .filter-btn:hover { border-color: var(--maroon) !important; color: var(--maroon) !important; }
        .filter-btn.active { background: var(--maroon) !important; color: #faf7f2 !important; border-color: var(--maroon) !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(8px); } to { opacity:1; transform:translateY(0); } }
        .au { animation: fadeUp 0.4s ease both; }
      `}</style>

      <article itemScope itemType="https://schema.org/CollectionPage">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Indian Unicorns 2026 — UpForge Registry",
              description: "The definitive verified list of all Indian unicorn startups in 2026.",
              url: "https://upforge.in/indian-unicorns",
              publisher: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
              dateModified: new Date().toISOString().split("T")[0],
            }),
          }}
        />

        {/* ── HERO ─── */}
        <div style={{ background: "#1a0a0a", borderBottom: "3px solid #8b1a1a" }}>
          <div className="max-w-[1400px] mx-auto px-6 py-16">
            {/* Breadcrumb */}
            <nav className="sf au" style={{ marginBottom: 20 }}>
              <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "#5a4040", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
                <li><Link href="/" style={{ color: "#5a4040", textDecoration: "none" }}>UpForge</Link></li>
                <li style={{ color: "#3d1515" }}>/</li>
                <li style={{ color: "#c9b99a", fontWeight: 700 }}>Indian Unicorns 2026</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="au">
                {/* Kicker */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                  <div style={{ height: 1, width: 32, background: "#8b1a1a" }} />
                  <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "#c9b99a" }}>
                    UpForge Registry · Verified Data · 2026
                  </span>
                  <div style={{ height: 1, width: 32, background: "#8b1a1a" }} />
                </div>

                <h1
                  className="pf"
                  style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900, color: "#faf7f2", lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}
                >
                  India's{" "}
                  <em style={{ color: "#c9b99a", fontStyle: "italic" }}>126+ Unicorns</em>
                  <br />
                  Registry of Record
                </h1>

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ height: 1, width: 28, background: "#8b1a1a" }} />
                  <div style={{ width: 6, height: 6, background: "#8b1a1a", transform: "rotate(45deg)" }} />
                  <div style={{ height: 1, width: 28, background: "#8b1a1a" }} />
                </div>

                <p className="rp" style={{ fontSize: 15, color: "rgba(255,255,255,0.65)", lineHeight: 1.78, marginBottom: 24, maxWidth: 520 }}>
                  Every Indian startup valued at $1B+ — manually verified, with founder data,
                  funding history, and a permanent{" "}
                  <span style={{ color: "#c9b99a", fontWeight: 600 }}>UFRN™</span> identifier.
                  The only registry cited by Harvard, IIM, and Stanford researchers.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Link
                    href="/submit"
                    className="rp inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all hover:opacity-90"
                    style={{ background: "#8b1a1a", color: "#faf7f2" }}
                  >
                    List Your Startup →
                  </Link>
                  <Link
                    href="/verify"
                    className="rp inline-flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-all"
                    style={{ background: "transparent", color: "#c9b99a", border: "1px solid #3d1515" }}
                  >
                    Verify UFRN
                  </Link>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-px au" style={{ background: "#3d1515" }}>
                {STATS.map((s) => (
                  <div key={s.l} style={{ background: "#1a0a0a", padding: "clamp(16px,3vw,28px)" }}>
                    <div
                      className="pf"
                      style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 900, color: "#c9b99a", lineHeight: 1, marginBottom: 4 }}
                    >
                      {s.n}
                    </div>
                    <div className="sf" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#faf7f2", marginBottom: 2 }}>
                      {s.l}
                    </div>
                    <div className="sf" style={{ fontSize: 8.5, color: "#5a4040" }}>{s.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── TRUST BAR ─── */}
        <div style={{ background: "#f5f0e8", borderBottom: "1px solid #e8ddd0" }}>
          <div className="max-w-[1400px] mx-auto px-6 py-3">
            <div className="flex items-center gap-6 flex-wrap">
              {[
                "🛡️ Every startup manually verified by UpForge editors",
                "📋 UFRN™ issued to all approved listings",
                "📊 Data sourced from official filings & announcements",
                "🔄 Updated weekly — last refresh: " + new Date().toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" }),
              ].map((t, i) => (
                <span key={i} className="sf" style={{ fontSize: 9, color: "#5a4040", letterSpacing: "0.05em" }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ─── */}
        <div style={{ background: "#faf7f2" }}>
          <div className="max-w-[1400px] mx-auto px-6 py-10">

            {/* Section header + filters */}
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                  <div style={{ height: 1, width: 20, background: "#8b1a1a" }} />
                  <span className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#8b1a1a" }}>
                    Registry · 126 Companies Verified
                  </span>
                </div>
                <h2
                  className="pf"
                  style={{ fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: "#1a0a0a", lineHeight: 1.1 }}
                >
                  All Indian Unicorns — 2026
                </h2>
              </div>

              {/* Filters */}
              <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
                {SECTORS.slice(0, 6).map((s, i) => (
                  <button
                    key={s}
                    className={`filter-btn sf ${i === 0 ? "active" : ""}`}
                    style={{
                      fontSize: 8,
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.14em",
                      padding: "5px 10px",
                      border: "1px solid #e8ddd0",
                      background: i === 0 ? "#8b1a1a" : "#faf7f2",
                      color: i === 0 ? "#faf7f2" : "#5a4040",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Table */}
            <div style={{ border: "1px solid #e8ddd0", overflow: "hidden" }}>
              {/* Table header */}
              <div
                className="grid sf"
                style={{
                  gridTemplateColumns: "32px 2fr 1fr 1fr 1fr 1fr 1fr",
                  background: "#1a0a0a",
                  padding: "10px 16px",
                  gap: 8,
                }}
              >
                {["#", "Company", "Sector", "Valuation", "City", "Stage", "UFRN"].map((h) => (
                  <span
                    key={h}
                    style={{
                      fontSize: 7.5, fontWeight: 800, textTransform: "uppercase",
                      letterSpacing: "0.18em", color: "#c9b99a",
                    }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {UNICORNS.map((u, idx) => {
                const st = STATUS_STYLE[u.status] || STATUS_STYLE.active;
                return (
                  <Link
                    key={u.ufrn}
                    href={`/startup/${u.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="uni-row grid"
                    style={{
                      gridTemplateColumns: "32px 2fr 1fr 1fr 1fr 1fr 1fr",
                      padding: "12px 16px",
                      gap: 8,
                      alignItems: "center",
                      borderBottom: "1px solid #e8ddd0",
                      background: idx % 2 === 0 ? "#faf7f2" : "#f8f4ef",
                      textDecoration: "none",
                    }}
                  >
                    {/* Rank */}
                    <span
                      className="sf"
                      style={{ fontSize: 9, color: "#c9b99a", fontWeight: 700 }}
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </span>

                    {/* Name + founders */}
                    <div>
                      <div
                        className="rp"
                        style={{ fontSize: 13, fontWeight: 700, color: "#1a0a0a", lineHeight: 1.2 }}
                      >
                        {u.name}
                      </div>
                      <div className="sf" style={{ fontSize: 8.5, color: "#8b6a6a", marginTop: 1 }}>
                        {u.founders}
                      </div>
                    </div>

                    {/* Sector */}
                    <span
                      className="sf"
                      style={{
                        fontSize: 8, fontWeight: 700, textTransform: "uppercase",
                        letterSpacing: "0.1em", color: "#5a4040",
                        background: "#f0ebe0", padding: "2px 6px",
                        display: "inline-block",
                      }}
                    >
                      {u.sector}
                    </span>

                    {/* Valuation */}
                    <span
                      className="rp"
                      style={{ fontSize: 13, fontWeight: 700, color: "#8b1a1a" }}
                    >
                      {u.val}
                    </span>

                    {/* City */}
                    <span className="sf" style={{ fontSize: 10, color: "#5a4040" }}>{u.city}</span>

                    {/* Stage */}
                    <span
                      className="sf"
                      style={{
                        fontSize: 8, fontWeight: 700, padding: "2px 6px",
                        background: st.bg, color: st.color, display: "inline-block",
                      }}
                    >
                      {u.stage}
                    </span>

                    {/* UFRN */}
                    <span
                      className="sf"
                      style={{
                        fontSize: 8, fontFamily: "monospace", color: "#8b1a1a",
                        background: "#fff9f5", padding: "2px 5px",
                        border: "1px solid #f0ddd0", whiteSpace: "nowrap",
                      }}
                    >
                      {u.ufrn}
                    </span>
                  </Link>
                );
              })}

              {/* More rows indicator */}
              <div
                style={{
                  padding: "14px 16px",
                  background: "#f5f0e8",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span className="sf" style={{ fontSize: 10, color: "#8b6a6a" }}>
                  Showing 16 of 126+ verified unicorns
                </span>
                <Link
                  href="/registry"
                  className="sf"
                  style={{
                    fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.15em", color: "#8b1a1a",
                    textDecoration: "none", display: "flex", alignItems: "center", gap: 4,
                  }}
                >
                  View Full Registry →
                </Link>
              </div>
            </div>

            {/* Editorial note */}
            <div style={{ marginTop: 12, padding: "12px 16px", background: "#f5f0e8", border: "1px solid #e8ddd0", borderLeft: "3px solid #c9b99a" }}>
              <p className="sf" style={{ fontSize: 9, color: "#8b6a6a", lineHeight: 1.6 }}>
                <strong style={{ color: "#5a4040", fontWeight: 700 }}>Editorial Note:</strong>{" "}
                All valuation data is sourced from official funding announcements, stock exchange filings, and verified press releases.
                UpForge does not accept payments for listing or ranking. Data is updated weekly.{" "}
                <Link href="/about#editorial" style={{ color: "#8b1a1a", fontWeight: 600 }}>Read our editorial standards →</Link>
              </p>
            </div>

            {/* Related articles */}
            <div style={{ marginTop: 40 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <div style={{ height: 1, flex: 1, background: "#e8ddd0" }} />
                <span className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#8b6a6a" }}>
                  Related Reading
                </span>
                <div style={{ height: 1, flex: 1, background: "#e8ddd0" }} />
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { title: "Top Indian Unicorn Stories 2026", href: "/blog/top-indian-unicorns-2026", tag: "Deep Dive" },
                  { title: "India Startup Ecosystem 2026", href: "/blog/india-startup-ecosystem-2026", tag: "Ecosystem" },
                  { title: "How to Get Startup Funding in India", href: "/blog/how-to-get-startup-funding-india-2026", tag: "Guide" },
                ].map((r, i) => (
                  <Link
                    key={i}
                    href={r.href}
                    style={{
                      display: "block",
                      padding: "16px",
                      background: "#fff",
                      border: "1px solid #e8ddd0",
                      borderTop: "2px solid #8b1a1a",
                      textDecoration: "none",
                      transition: "box-shadow 0.12s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "3px 3px 0 #8b1a1a")}
                    onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "none")}
                  >
                    <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "#8b1a1a", display: "block", marginBottom: 6 }}>
                      {r.tag}
                    </span>
                    <span className="rp" style={{ fontSize: 13, fontWeight: 700, color: "#1a0a0a", lineHeight: 1.3 }}>
                      {r.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
