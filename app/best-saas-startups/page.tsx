// app/best-saas-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best SaaS Startups in India 2026: Top B2B Software Companies Ranked | UpForge",
  description:
    "Explore India's best SaaS startups in 2026 — from HR tech and marketing automation to DevOps and customer success platforms. Profiles, funding rounds, ARR milestones, and founder stories.",
  keywords: [
    "best SaaS startups India 2026",
    "top B2B software companies India",
    "Indian SaaS unicorns 2026",
    "SaaS startup funding India",
    "India SaaS ARR leaders",
    "best Indian SaaS products",
    "B2B SaaS founders India",
    "SaaS companies Bangalore Hyderabad",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/best-saas-startups" },
  openGraph: {
    title: "Best SaaS Startups in India 2026: Top B2B Software Companies Ranked",
    description:
      "India's top SaaS startups — ARR, funding, founder stories, and why each company is worth watching in 2026.",
    url: "https://upforge.in/best-saas-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-saas-startups.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best SaaS Startups India 2026 | UpForge",
    description: "India's best SaaS startups ranked — Freshworks, Chargebee, Postman, Zoho, and the next generation of B2B builders.",
  },
};

const IMGS = {
  hero: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85&auto=format",
  freshworks: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=900&q=80&auto=format",
  chargebee: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80&auto=format",
  postman: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80&auto=format",
  leadsquared: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  browserstack: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=900&q=80&auto=format",
  banner: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format",
};

const STARTUPS = [
  {
    rank: "01",
    name: "Freshworks",
    founder: "Girish Mathrubootham",
    sector: "CRM · Customer Support SaaS",
    city: "Chennai / San Mateo",
    founded: 2010,
    arr: "$700M+ ARR",
    stage: "NASDAQ: FRSH",
    slug: "freshworks",
    img: IMGS.freshworks,
    what: "Freshworks builds CRM, ITSM, and customer support software used by 68,000+ businesses globally — from local SMBs to enterprises like Bridgestone and Vicaima.",
    why: "The first Indian SaaS company to IPO on NASDAQ, Freshworks proved the India SaaS thesis to the world. Girish built a $12B company without a single rupee of revenue from India for the first five years.",
    tags: ["CRM", "ITSM", "Public Company"],
    metric: { label: "Global Customers", val: "68,000+" },
  },
  {
    rank: "02",
    name: "Chargebee",
    founder: "Krish Subramanian",
    sector: "Subscription Billing SaaS",
    city: "Chennai",
    founded: 2011,
    arr: "$100M+ ARR",
    stage: "Series G · Unicorn",
    slug: "chargebee",
    img: IMGS.chargebee,
    what: "Chargebee is the operating system for subscription revenue — managing billing, dunning, revenue recognition, and growth analytics for 6,500+ SaaS businesses worldwide.",
    why: "Every SaaS company in the world needs billing infrastructure. Chargebee chose to build the best in the world, not just the best for India — and that ambition made them a unicorn.",
    tags: ["Billing", "RevOps", "Unicorn"],
    metric: { label: "SaaS Customers", val: "6,500+" },
  },
  {
    rank: "03",
    name: "Postman",
    founder: "Abhinav Asthana",
    sector: "API Development Platform",
    city: "San Francisco (founded India)",
    founded: 2014,
    arr: "$150M+ ARR",
    stage: "Series D · $5.6B Valuation",
    slug: "postman",
    img: IMGS.postman,
    what: "Postman is the world's leading API platform — used by 30 million developers across 500,000 companies to design, test, and document APIs.",
    why: "Abhinav built a free tool that developers loved, then built a business around it. Postman is proof that India can build developer-first products that win globally without a single sales call.",
    tags: ["Developer Tools", "APIs", "PLG"],
    metric: { label: "Developers", val: "30 Million" },
  },
  {
    rank: "04",
    name: "LeadSquared",
    founder: "Nilesh Patel",
    sector: "Sales Automation · CRM",
    city: "Bengaluru",
    founded: 2011,
    arr: "$50M+ ARR",
    stage: "Series C · Unicorn",
    slug: "leadsquared",
    img: IMGS.leadsquared,
    what: "LeadSquared is India's leading sales execution CRM — purpose-built for high-velocity, field-heavy sales teams in healthcare, education, financial services, and real estate.",
    why: "Most CRMs are built for Western sales motions. LeadSquared built for India's — where salespeople ride bikes to client offices and field ops matter as much as email sequences.",
    tags: ["Sales CRM", "India-first", "Field Sales"],
    metric: { label: "Enterprises", val: "2,000+" },
  },
  {
    rank: "05",
    name: "BrowserStack",
    founder: "Ritesh Arora & Nakul Aggarwal",
    sector: "Testing Infrastructure SaaS",
    city: "Mumbai",
    founded: 2011,
    arr: "$100M+ ARR",
    stage: "Series B · Unicorn",
    slug: "browserstack",
    img: IMGS.browserstack,
    what: "BrowserStack is the world's largest cloud-based browser and device testing platform — used by Microsoft, Twitter, and Expedia to test apps across 3,000+ device-browser combinations.",
    why: "The founders built the exact tool developers needed and priced it to convert. BrowserStack raised almost no money for a decade, grew to unicorn status on the back of a product that simply worked.",
    tags: ["QA Testing", "DevOps", "Bootstrapped Origins"],
    metric: { label: "Companies", val: "50,000+" },
  },
];

const STATS = [
  { val: "$50B+", label: "Indian SaaS Revenue by 2030 (projected)" },
  { val: "1,000+", label: "SaaS Startups in India" },
  { val: "16", label: "SaaS Unicorns from India" },
  { val: "#2", label: "India's Global Rank in SaaS Talent Density" },
];

const MILESTONES = [
  { year: "2013", event: "Freshworks hits $1M ARR — India's first SaaS milestone" },
  { year: "2016", event: "Zoho reaches 15M users globally without a single VC dollar" },
  { year: "2019", event: "Chargebee raises Series D — India SaaS goes global" },
  { year: "2021", event: "Freshworks IPOs on NASDAQ — India SaaS moment of truth" },
  { year: "2024", event: "India has 16 SaaS unicorns — more than all of Europe" },
  { year: "2026", event: "Next wave: AI-native SaaS companies emerge from Bengaluru & Hyderabad" },
];

export default function BestSaaSStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        .pf  { font-family: 'Playfair Display', Georgia, serif !important; }
        .rp  { font-family: 'Georgia', 'Times New Roman', serif; }
        .sf  { font-family: system-ui, -apple-system, sans-serif; }

        :root {
          --parch:  #F5F1E8;
          --parch2: #EDE9DF;
          --ink:    #1A1208;
          --ink2:   #2C2010;
          --ink3:   #5A4A30;
          --ink4:   #8C7D65;
          --ink5:   #BBB0A0;
          --rule:   #C8C2B4;
          --rule2:  #D8D2C4;
          --gold:   #B45309;
          --gold2:  #D97706;
          --gold3:  #92400E;
          --accent: #059669;
          --accentlt: #ECFDF5;
          --white:  #FDFCF9;
        }

        body { background: var(--parch); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .44s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .44s .20s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(12%) contrast(108%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.04); }

        .startup-card {
          border: 1.5px solid var(--ink);
          background: var(--white);
          overflow: hidden; position: relative;
          transition: transform .15s, box-shadow .15s;
        }
        .startup-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); }
        .startup-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #047857, var(--accent), #34D399);
        }

        .stat-box {
          border: 1.5px solid var(--ink); background: var(--white);
          padding: 22px 18px; text-align: center; position: relative; overflow: hidden;
        }
        .stat-box::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(90deg, #047857, #34D399);
        }

        .timeline-dot {
          width: 10px; height: 10px; border-radius: 50%;
          background: var(--accent); border: 2px solid var(--white);
          flex-shrink: 0; box-shadow: 0 0 0 2px var(--accent);
        }

        .tag {
          display: inline-block; padding: 2px 8px;
          border: 1px solid rgba(5,150,105,.35);
          background: var(--accentlt);
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .12em; color: #047857; font-family: system-ui;
        }

        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .28em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        @media (max-width: 900px) { .card-grid { grid-template-columns: 1fr !important; } .stat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .stat-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <main
        itemScope
        itemType="https://schema.org/CollectionPage"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Best SaaS Startups in India 2026",
              description: "India's top B2B SaaS startups ranked by ARR, innovation, and global impact.",
              url: "https://upforge.in/best-saas-startups",
              publisher: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
              dateModified: new Date().toISOString().split("T")[0],
            }),
          }}
        />

        {/* BREADCRUMB */}
        <nav className="sf a0" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }}>UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>Best SaaS Startups</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            <img src={IMGS.hero} alt="Best SaaS Startups India 2026" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(4,47,46,.4) 0%, rgba(4,47,46,.88) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px,5vw,64px)", textAlign: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["SaaS", "B2B Software", "India 2026"].map(tag => (
                  <span key={tag} className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 10px" }}>{tag}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{ fontSize: "clamp(1.8rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.02, color: "white", letterSpacing: "-0.02em", marginBottom: 18, maxWidth: 860 }}>
                Best SaaS Startups in India 2026:{" "}
                <em style={{ color: "#34D399", fontStyle: "italic" }}>B2B Software at Global Scale</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                India's software builders are no longer just serving the world — they are leading it.
              </p>
            </div>
            <div className="sf" style={{ position: "absolute", top: 18, right: 18, background: "rgba(4,47,46,.75)", border: "1px solid rgba(255,255,255,.1)", padding: "5px 12px", fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
              UpForge · SaaS Intelligence
            </div>
          </div>
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Updated", v: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { l: "Companies Ranked", v: "5 Featured · 1,000+ Tracked" },
                  { l: "Category", v: "SaaS · B2B Software" },
                  { l: "Focus", v: "ARR · Global Expansion" },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "12px 20px", borderRight: "1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.3)", marginBottom: 3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize: 11, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* INTRO */}
          <div className="a1" style={{ padding: "clamp(28px,4vw,48px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 18 }}>
              <span className="sh-l">The India SaaS Story</span>
              <div className="sh-r" />
            </div>
            <p className="pf" itemProp="description" style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18, maxWidth: 760 }}>
              India's SaaS sector is now a global force. Freshworks trades on NASDAQ. Postman has 30 million developers. Chargebee, BrowserStack, and Zoho compete not just in India but on every continent.
            </p>
            <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, maxWidth: 720 }}>
              This is UpForge's ranking of India's best SaaS startups — evaluated on ARR trajectory, product depth, founder quality, and international expansion. Not just the largest — the most significant.
            </p>
          </div>

          {/* STATS */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">India SaaS by the Numbers</span><div className="sh-r" /></div>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {STATS.map((s, i) => (
                <div key={i} className="stat-box">
                  <p className="pf" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 900, color: "var(--ink)", marginBottom: 6, lineHeight: 1 }}>{s.val}</p>
                  <p className="sf" style={{ fontSize: 9.5, color: "var(--ink4)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">India SaaS · A Decade of Milestones</span><div className="sh-r" /></div>
            <div style={{ position: "relative", paddingLeft: 28 }}>
              <div style={{ position: "absolute", left: 4, top: 6, bottom: 6, width: 2, background: "var(--rule2)" }} />
              {MILESTONES.map((m, i) => (
                <div key={i} style={{ display: "flex", gap: 16, marginBottom: 14, alignItems: "flex-start" }}>
                  <div className="timeline-dot" style={{ marginTop: 3 }} />
                  <div>
                    <span className="sf" style={{ fontSize: 8.5, fontWeight: 800, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.15em" }}>{m.year}</span>
                    <p className="rp" style={{ fontSize: 13, color: "var(--ink3)", lineHeight: 1.6, marginTop: 2 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STARTUPS */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">Featured SaaS Startups · India 2026</span><div className="sh-r" /></div>

            {STARTUPS.map((s, idx) => (
              <div key={idx} className="startup-card" style={{ marginBottom: 20 }}>
                <div className="card-grid" style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "1fr 300px" : "300px 1fr", gap: 0, minHeight: 300 }}>
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(4,47,46,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>Rank {s.rank}</span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.city} · Est. {s.founded}</span>
                      </div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.1, marginBottom: 6 }}>{s.name}</h2>
                      <p className="sf" style={{ fontSize: 10, color: "var(--ink4)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{s.sector}</p>
                      <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, marginBottom: 12 }}>{s.what}</p>
                      <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", lineHeight: 1.8, fontStyle: "italic" }}>{s.why}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>

                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ display: "flex", gap: 16 }}>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>ARR</p>
                          <p className="sf" style={{ fontSize: 13, fontWeight: 800, color: "var(--accent)" }}>{s.arr}</p>
                        </div>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>{s.metric.label}</p>
                          <p className="sf" style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)" }}>{s.metric.val}</p>
                        </div>
                      </div>
                      <Link href={`/startup/${s.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--ink)", color: "white", padding: "8px 16px", textDecoration: "none", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "system-ui" }}>
                        Full Profile →
                      </Link>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(4,47,46,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div style={{ marginTop: "clamp(36px,6vw,64px)", border: "1.5px solid var(--ink)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #047857, var(--accent), #34D399, var(--accent), #047857)" }} />
            <div className="imgf" style={{ height: 180 }}>
              <img src={IMGS.banner} alt="India SaaS ecosystem" style={{ filter: "sepia(30%) brightness(0.35) contrast(1.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px,5vw,60px)", textAlign: "center" }}>
                <p className="pf" style={{ fontSize: "clamp(1.2rem,2.8vw,2rem)", fontWeight: 700, color: "white", lineHeight: 1.25, fontStyle: "italic" }}>
                  "India's SaaS founders are not building for India. They are building{" "}
                  <em style={{ color: "#34D399" }}>for the world — from India.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding: "clamp(20px,3vw,36px)" }}>
              <p className="rp" style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)", lineHeight: 1.85, maxWidth: 720 }}>
                UpForge tracks India's SaaS landscape in full — from bootstrapped products to NASDAQ listings. Explore the complete startup registry, ARR milestones, and the founders who built them.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Page navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Top AI Startups", h: "/top-ai-startups" },
                { l: "EdTech Startups", h: "/edtech-startups" },
                { l: "FinTech Startups", h: "/fintech-startups" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "All Startups", h: "/startup" },
                { l: "Submit Startup", h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}><Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
