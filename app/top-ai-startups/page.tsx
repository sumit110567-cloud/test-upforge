// app/top-ai-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top AI Startups in India 2026: The Complete List of AI Companies to Watch | UpForge",
  description:
    "Discover India's top AI startups in 2026 — from generative AI to computer vision and NLP. Explore funding, founders, valuations, and what makes each company exceptional.",
  keywords: [
    "top AI startups India 2026",
    "best artificial intelligence startups India",
    "AI companies India funded",
    "generative AI startups India",
    "Indian AI unicorns 2026",
    "machine learning startups India",
    "AI startup founders India",
    "top AI companies Bangalore Mumbai",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/top-ai-startups" },
  openGraph: {
    title: "Top AI Startups in India 2026: The Complete List of AI Companies to Watch",
    description:
      "India's most ambitious AI startups ranked and profiled — funding, founders, technology focus, and growth trajectory.",
    url: "https://upforge.in/top-ai-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-ai-startups.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Startups in India 2026 | UpForge",
    description:
      "India's top AI startups in 2026 — generative AI, computer vision, NLP, and more. Profiles, funding, and founder stories.",
  },
};

const IMGS = {
  hero: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=85&auto=format",
  krutrim: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
  sarvam: "https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=900&q=80&auto=format",
  ideaForge: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=900&q=80&auto=format",
  frugal: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80&auto=format",
  haptik: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=900&q=80&auto=format",
  banner: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80&auto=format",
};

const STARTUPS = [
  {
    rank: "01",
    name: "Krutrim",
    founder: "Bhavish Aggarwal",
    sector: "Generative AI · LLMs",
    city: "Bengaluru",
    founded: 2023,
    funding: "$50M+",
    stage: "Series A",
    slug: "krutrim",
    img: IMGS.krutrim,
    what: "India's first AI unicorn, Krutrim builds large language models trained on Indic languages — enabling AI that genuinely understands the subcontinent's linguistic diversity.",
    why: "Most AI companies train on English-dominant data. Krutrim bets that 1.4 billion Indians deserve AI that speaks their language — literally.",
    tags: ["LLMs", "Indic AI", "Unicorn"],
  },
  {
    rank: "02",
    name: "Sarvam AI",
    founder: "Vivek Raghavan & Pratyush Kumar",
    sector: "Multilingual AI · Voice",
    city: "Bengaluru",
    founded: 2023,
    funding: "$41M",
    stage: "Series A",
    slug: "sarvam-ai",
    img: IMGS.sarvam,
    what: "Sarvam AI builds open-source, full-stack AI for India — voice models, language models, and APIs that power Indic-language applications at scale.",
    why: "Backed by Lightspeed and Peak XV, Sarvam is quietly becoming the infrastructure layer for India's AI economy — the AWS of Indic AI.",
    tags: ["Voice AI", "Open Source", "Indic Languages"],
  },
  {
    rank: "03",
    name: "ideaForge",
    founder: "Ankit Mehta",
    sector: "Drone AI · Defence Tech",
    city: "Mumbai",
    founded: 2012,
    funding: "₹567Cr (listed)",
    stage: "Public",
    slug: "ideaforge",
    img: IMGS.ideaForge,
    what: "India's leading drone manufacturer uses onboard AI for autonomous navigation, surveillance, and precision agriculture — with significant defence contracts.",
    why: "India's drone sector is projected to reach $23B by 2030. ideaForge has first-mover advantage in the most defensible part of that market: defence.",
    tags: ["Drones", "Defence", "Computer Vision"],
  },
  {
    rank: "04",
    name: "Frugal AI",
    founder: "Gaurav Tekriwal",
    sector: "Enterprise AI · Automation",
    city: "Hyderabad",
    founded: 2021,
    funding: "$12M",
    stage: "Seed+",
    slug: "frugal-ai",
    img: IMGS.frugal,
    what: "Frugal AI builds intelligent document processing and enterprise automation tools — replacing manual knowledge work with AI agents that operate at scale.",
    why: "India's BPO industry processes trillions of documents annually. Frugal AI is building the AI that automates the back-office of the entire economy.",
    tags: ["Enterprise AI", "Document AI", "Automation"],
  },
  {
    rank: "05",
    name: "Haptik",
    founder: "Aakrit Vaish & Swapan Rajdev",
    sector: "Conversational AI · CX",
    city: "Mumbai",
    founded: 2013,
    funding: "$100M+ (JioMet)",
    stage: "Acquired",
    slug: "haptik",
    img: IMGS.haptik,
    what: "Haptik builds enterprise conversational AI — WhatsApp bots, voice assistants, and AI agents — deployed by 500+ enterprises across 20+ countries.",
    why: "Acquired by Reliance for ₹700Cr, Haptik proved that Indian AI companies can build global B2B products. Their CX AI is now embedded in JioMart, CEAT, Kotak.",
    tags: ["Conversational AI", "WhatsApp Bots", "Enterprise"],
  },
];

const STATS = [
  { val: "₹22,000Cr+", label: "Total AI Startup Funding in India (2024–25)" },
  { val: "3,200+", label: "Active AI Startups in India" },
  { val: "1", label: "AI Unicorns — Krutrim (and counting)" },
  { val: "#3", label: "India's Global Rank in AI Startup Density" },
];

const SECTORS = [
  { name: "Generative AI", count: 480, pct: 88 },
  { name: "Computer Vision", count: 390, pct: 71 },
  { name: "NLP & Voice", count: 340, pct: 62 },
  { name: "AI in FinTech", count: 290, pct: 53 },
  { name: "Healthcare AI", count: 210, pct: 38 },
  { name: "AgriTech AI", count: 140, pct: 26 },
];

export default function TopAIStartupsPage() {
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
          --parch3: #E6E1D6;
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
          --accent: #1D4ED8;
          --accentlt: #EFF6FF;
          --white:  #FDFCF9;
          --green:  #15803D;
        }

        body { background: var(--parch); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes barGrow {
          from { width: 0; }
          to   { width: var(--w); }
        }
        .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .44s .18s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: fadeUp .44s .28s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(10%) contrast(110%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.04); }

        .startup-card {
          border: 1.5px solid var(--ink);
          background: var(--white);
          overflow: hidden;
          position: relative;
          transition: transform .15s, box-shadow .15s;
        }
        .startup-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); }
        .startup-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--accent), #3B82F6, #60A5FA);
        }

        .stat-box {
          border: 1.5px solid var(--ink);
          background: var(--white);
          padding: 22px 18px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .stat-box::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--accent), #60A5FA);
        }

        .bar-track { background: var(--rule2); height: 6px; width: 100%; position: relative; overflow: hidden; }
        .bar-fill {
          height: 100%; background: linear-gradient(90deg, var(--accent), #60A5FA);
          animation: barGrow 1.2s cubic-bezier(.16,1,.3,1) .4s both;
        }

        .tag {
          display: inline-block;
          padding: 2px 8px;
          border: 1px solid rgba(29,78,216,.3);
          background: var(--accentlt);
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .12em; color: var(--accent);
          font-family: system-ui;
        }

        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .28em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        @media (max-width: 900px) {
          .card-grid { grid-template-columns: 1fr !important; }
          .stat-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 600px) {
          .stat-grid { grid-template-columns: 1fr !important; }
        }
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
              name: "Top AI Startups in India 2026",
              description:
                "A curated list of India's top artificial intelligence startups in 2026 — ranked by innovation, funding, and market impact.",
              url: "https://upforge.in/top-ai-startups",
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
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>Top AI Startups</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            <img src={IMGS.hero} alt="Top AI Startups India 2026" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,20,50,.4) 0%, rgba(10,20,50,.88) 100%)" }} />
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "0 clamp(16px,5vw,64px)", textAlign: "center",
            }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["Artificial Intelligence", "India 2026", "Startup Rankings"].map(tag => (
                  <span key={tag} className="sf" style={{
                    fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)",
                    padding: "3px 10px",
                  }}>{tag}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{
                fontSize: "clamp(1.8rem,5.5vw,4.2rem)",
                fontWeight: 900, lineHeight: 1.02,
                color: "white", letterSpacing: "-0.02em",
                marginBottom: 18, maxWidth: 860,
              }}>
                Top AI Startups in India 2026:{" "}
                <em style={{ color: "#60A5FA", fontStyle: "italic" }}>The Companies Rewriting the Future</em>
              </h1>
              <p className="rp" style={{
                fontSize: "clamp(13px,1.8vw,16px)",
                color: "rgba(255,255,255,0.62)", fontStyle: "italic",
                maxWidth: 560, lineHeight: 1.6,
              }}>
                From Indic language models to drone intelligence — India's AI revolution, ranked.
              </p>
            </div>
            <div className="sf" style={{
              position: "absolute", top: 18, right: 18,
              background: "rgba(10,20,50,.7)", border: "1px solid rgba(255,255,255,.1)",
              padding: "5px 12px", fontSize: 8, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.55)",
            }}>
              UpForge · AI Intelligence
            </div>
          </div>

          {/* Meta strip */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Updated", v: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { l: "Startups Listed", v: "5 Featured · 3,200+ Tracked" },
                  { l: "Category", v: "AI · Machine Learning" },
                  { l: "Coverage", v: "Pan-India" },
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
              <span className="sh-l">The AI Opportunity</span>
              <div className="sh-r" />
            </div>
            <p className="pf" itemProp="description" style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18, maxWidth: 760 }}>
              India is not just consuming artificial intelligence — it is beginning to produce it. In 2026, a generation of Indian AI founders is building language models, vision systems, and intelligent agents designed for the world's largest democratic market.
            </p>
            <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, maxWidth: 720 }}>
              This is UpForge's curated ranking of the top AI startups in India — selected on the basis of technical depth, market traction, funding quality, and founder calibre. Not hype. Signal.
            </p>
          </div>

          {/* STATS */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}>
              <span className="sh-l">India AI by the Numbers</span>
              <div className="sh-r" />
            </div>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {STATS.map((s, i) => (
                <div key={i} className="stat-box">
                  <p className="pf" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 900, color: "var(--ink)", marginBottom: 6, lineHeight: 1 }}>{s.val}</p>
                  <p className="sf" style={{ fontSize: 9.5, color: "var(--ink4)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR BARS */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}>
              <span className="sh-l">AI Sector Breakdown · 2026</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 32px" }}>
              {SECTORS.map((sec, i) => (
                <div key={i}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
                    <span className="sf" style={{ fontSize: 10, fontWeight: 700, color: "var(--ink3)" }}>{sec.name}</span>
                    <span className="sf" style={{ fontSize: 9, color: "var(--ink5)" }}>{sec.count} startups</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ "--w": `${sec.pct}%`, width: `${sec.pct}%` } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* STARTUPS LIST */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            <div className="sh" style={{ marginBottom: 20 }}>
              <span className="sh-l">Featured AI Startups · India 2026</span>
              <div className="sh-r" />
            </div>

            {STARTUPS.map((s, idx) => (
              <div key={idx} className="startup-card" style={{ marginBottom: 20 }}>
                <div className="card-grid" style={{
                  display: "grid",
                  gridTemplateColumns: idx % 2 === 0 ? "1fr 300px" : "300px 1fr",
                  gap: 0, minHeight: 300,
                }}>
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,20,50,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#3B82F6" }}>
                          Rank {s.rank}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {s.city} · Est. {s.founded}
                        </span>
                      </div>

                      <h2 className="pf" style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.1, marginBottom: 6 }}>
                        {s.name}
                      </h2>
                      <p className="sf" style={{ fontSize: 10, color: "var(--ink4)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>
                        {s.sector}
                      </p>

                      <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, marginBottom: 12 }}>{s.what}</p>
                      <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", lineHeight: 1.8, fontStyle: "italic" }}>{s.why}</p>

                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>

                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ display: "flex", gap: 16 }}>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>Funding</p>
                          <p className="sf" style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)" }}>{s.funding}</p>
                        </div>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>Stage</p>
                          <p className="sf" style={{ fontSize: 13, fontWeight: 800, color: "var(--ink)" }}>{s.stage}</p>
                        </div>
                      </div>
                      <Link href={`/startup/${s.slug}`} style={{
                        display: "inline-flex", alignItems: "center", gap: 6,
                        background: "var(--ink)", color: "white",
                        padding: "8px 16px", textDecoration: "none",
                        fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em",
                        fontFamily: "system-ui",
                        transition: "background .15s",
                      }}>
                        Full Profile →
                      </Link>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(10,20,50,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING BANNER */}
          <div style={{ marginTop: "clamp(36px,6vw,64px)", border: "1.5px solid var(--ink)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--accent), #3B82F6, #60A5FA, #3B82F6, var(--accent))" }} />
            <div className="imgf" style={{ height: 180 }}>
              <img src={IMGS.banner} alt="India AI ecosystem" style={{ filter: "sepia(30%) brightness(0.35) contrast(1.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px,5vw,60px)", textAlign: "center" }}>
                <p className="pf" style={{ fontSize: "clamp(1.2rem,2.8vw,2rem)", fontWeight: 700, color: "white", lineHeight: 1.25, fontStyle: "italic" }}>
                  "India is not just the world's largest democracy. In 2026, it is becoming its most ambitious{" "}
                  <em style={{ color: "#60A5FA" }}>AI laboratory.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding: "clamp(20px,3vw,36px)" }}>
              <p className="rp" style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)", lineHeight: 1.85, maxWidth: 720 }}>
                UpForge tracks every significant AI startup in India — from seed to IPO. Explore the full registry, read founder stories, and understand what is actually being built.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Page navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "All Startups", h: "/startup" },
                { l: "Best SaaS Startups", h: "/best-saas-startups" },
                { l: "EdTech Startups", h: "/edtech-startups" },
                { l: "FinTech Startups", h: "/fintech-startups" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Submit Startup", h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </main>
    </>
  );
}
