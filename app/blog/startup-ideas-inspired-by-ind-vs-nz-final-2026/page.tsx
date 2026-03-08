// app/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Startup Ideas Inspired by the IND vs NZ Final 2026 | UpForge",
  description: "The IND vs NZ Final 2026 was more than cricket — it sparked 5 powerful startup ideas. From AI cricket analytics to fan engagement platforms, discover what founders can build.",
  keywords: [
    "startup ideas inspired by ind vs nz final",
    "cricket startup ideas 2026",
    "sports tech startup india",
    "ind vs nz final 2026 startup",
    "AI cricket analytics startup",
    "fan engagement platform india",
    "sports entrepreneurship india",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
  openGraph: {
    title: "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
    description: "From AI cricket analytics to youth talent discovery — 5 startup ideas every founder should know, inspired by the IND vs NZ Final 2026.",
    url: "https://upforge.in/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-blog-cricket-startups.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
    description: "AI analytics, fan engagement, pressure training — 5 startup ideas born from the most intense cricket final of 2026.",
  },
};

const IMGS = {
  hero:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=1400&q=85&auto=format",
  ai:        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=900&q=80&auto=format",
  fan:       "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=900&q=80&auto=format",
  pressure:  "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80&auto=format",
  media:     "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=900&q=80&auto=format",
  talent:    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&q=80&auto=format",
  closing:   "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80&auto=format",
};

const IDEAS = [
  {
    num: "01",
    title: "AI Cricket Strategy Analytics Platform",
    tag: "SportsTech · AI/ML",
    img: IMGS.ai,
    problem: "Cricket teams rely heavily on analysts to study opponents, but current analysis tools are slow, manual, and built for post-match review — not real-time decision making.",
    solution: "An AI-powered platform that analyses player performance in real time, predicts optimal bowling changes, identifies batting weaknesses from historical data, and suggests field placements mid-over. Coaches get a second brain. Analysts get leverage.",
    model: [
      "Subscription plans for professional IPL and national teams",
      "Data analytics dashboards for cricket broadcasters",
      "Premium insights layer for serious fantasy sports players",
    ],
    why: "The IND vs NZ final was decided by micro-decisions — a bowling change in the 32nd over, a field adjustment at deep mid-wicket. AI-driven analysis can give teams that edge before the moment arrives, not after.",
    market: "India's fantasy sports market alone crossed ₹30,000Cr in 2025. The analytics layer powering it is massively underbuilt.",
    color: "#E8E0D0",
  },
  {
    num: "02",
    title: "Real-Time Fan Engagement Platform",
    tag: "Consumer · SaaS",
    img: IMGS.fan,
    problem: "350 million cricket fans in India passively watch matches. They comment on social media. They cheer. But they have no structured, rewarding way to participate in the game they love.",
    solution: "A live fan engagement app where users predict the next wicket, vote on captain strategy, participate in over-by-over polls, and earn points redeemable for merchandise, tickets, or player meet-and-greets. Make watching cricket feel like playing cricket.",
    model: [
      "Brand sponsorships tied to in-match moments",
      "Premium fan memberships with exclusive access",
      "Targeted advertising on a verified cricket-intent audience",
    ],
    why: "The IND vs NZ final trended globally for 9 hours. That is 9 hours of captive, emotionally engaged audience with no structured engagement product to convert into. That gap is a startup.",
    market: "Sports engagement apps like Dream11 proved Indians pay to be involved. The next layer is real-time, non-fantasy interaction.",
    color: "#E0D8CC",
  },
  {
    num: "03",
    title: "Pressure Training Platform for Leaders",
    tag: "EdTech · Leadership",
    img: IMGS.pressure,
    problem: "Most founders and managers learn to handle high-pressure decisions by failing at them — in real meetings, with real stakes. Business schools teach frameworks. Nobody teaches you what to do when your hands are shaking.",
    solution: "A training platform with interactive leadership simulations modelled on high-stakes sporting moments. Crisis decision scenarios, gamified pressure drills, and coaching from founders who have actually been through it. Not theory — reps.",
    model: [
      "Corporate training programs for senior leadership teams",
      "Monthly subscription for individual founders and managers",
      "University and MBA institution partnerships",
    ],
    why: "When India's batting collapsed in the 28th over of the final, every decision made in the next 90 seconds determined the match. Founders face equivalent moments. They should be trained for them.",
    market: "India's corporate training market is ₹15,000Cr and growing. Leadership-specific, simulation-based training remains almost entirely unbuilt for the Indian market.",
    color: "#D8D0C4",
  },
  {
    num: "04",
    title: "Smart Sports Data Media Platform",
    tag: "Media · Data",
    img: IMGS.media,
    problem: "Indian sports journalism is built around highlights, quotes, and reaction takes. It is fast. It is shallow. The moment a match ends, the analysis evaporates. Serious fans — and there are hundreds of millions of them — have nowhere to go for depth.",
    solution: "A media platform that combines sports journalism with deep data storytelling. Match reports built around performance graphs, not prose. Player career arcs visualised. Team strategy decoded with data overlays. Think The Athletic meets Cricinfo, built for a data-native Indian audience.",
    model: [
      "Premium monthly subscription for ad-free deep analysis",
      "Brand partnerships with cricket-adjacent companies",
      "Custom analytics reports licensed to broadcasters",
    ],
    why: "The IND vs NZ final will be discussed for months. But the post-match coverage will last 48 hours. There is a product gap between breaking news and genuine analysis — and a large, underserved audience sitting inside it.",
    market: "Paid sports journalism is nearly zero in India. The audience exists. The habit simply hasn't been built because no quality product has tried to build it.",
    color: "#D0C8BC",
  },
  {
    num: "05",
    title: "Youth Sports Talent Discovery Platform",
    tag: "Social · Marketplace",
    img: IMGS.talent,
    problem: "India produces more cricketers than any other country. Most of them play in dusty maidans with no scouts, no cameras, and no way to reach a coach who could change their life. Talent is not the problem. Discovery infrastructure is.",
    solution: "A digital platform where young athletes upload match videos and performance statistics, get AI-generated skill assessments, and get connected with academies, coaches, and scouts actively looking for talent. A LinkedIn, built specifically for the maidans of India.",
    model: [
      "Premium player profiles with verified performance data",
      "Recruitment pipeline fees from academies and teams",
      "Sponsored talent camps and scouting events",
    ],
    why: "Every edition of the IND vs NZ Final inspires millions of 14-year-olds across India to pick up a bat. A fraction of them have structured pathways to get discovered. The infrastructure to bridge that gap does not yet exist at scale.",
    market: "India has 50+ million youth cricket participants. The formal talent discovery infrastructure serves fewer than 1% of them. That is a structural gap with a massive addressable market.",
    color: "#C8C0B4",
  },
];

const RELATED = [
  { name: "Zerodha",       slug: "zerodha",       sector: "FinTech",  note: "Decision making under pressure" },
  { name: "PhysicsWallah", slug: "physicswallah", sector: "EdTech",   note: "Scaling with conviction"       },
  { name: "Zepto",         slug: "zepto",         sector: "D2C",      note: "Pivoting before it's too late" },
  { name: "Zomato",        slug: "zomato",        sector: "FoodTech", note: "Resilience through failure"    },
];

export default function BlogPage() {
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
          --white:  #FDFCF9;
          --green:  #15803D;
        }

        body { background: var(--parch); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(11px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .44s .16s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: fadeUp .44s .24s cubic-bezier(.16,1,.3,1) both; }

        /* image frame */
        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(14%) contrast(107%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.03); }

        /* idea card */
        .idea-card {
          border: 1.5px solid var(--ink);
          background: var(--white);
          overflow: hidden;
          position: relative;
        }
        .idea-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547);
        }

        /* info block (problem/solution/model) */
        .info-block {
          padding: 14px 16px;
          border-bottom: 1px solid var(--rule2);
        }
        .info-block:last-child { border-bottom: none; }

        /* market callout */
        .market-strip {
          background: var(--parch2);
          border-top: 1px solid var(--rule2);
          border-left: 3px solid var(--gold2);
          padding: 12px 16px;
        }

        /* related card */
        .rel-card {
          background: var(--white); display: flex; flex-direction: column;
          text-decoration: none; position: relative;
          transition: transform .15s, box-shadow .15s;
        }
        .rel-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2.5px; background: transparent; transition: background .15s;
        }
        .rel-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); z-index: 1; }
        .rel-card:hover::before { background: var(--gold2); }

        /* section head */
        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .28em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* TOC link */
        .toc-link { text-decoration: none; display: flex; align-items: baseline; gap: 9px; padding: 8px 0; border-bottom: 1px solid var(--rule2); transition: padding-left .15s; }
        .toc-link:last-child { border-bottom: none; }
        .toc-link:hover { padding-left: 5px; }

        /* dropcap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.8em; font-weight: 900;
          float: left; line-height: .82;
          margin-right: 8px; margin-top: 5px;
          color: var(--ink);
        }

        @media (max-width: 900px) {
          .idea-inner { grid-template-columns: 1fr !important; }
          .idea-inner .idea-img { min-height: 220px !important; border-left: none !important; border-top: 1.5px solid var(--ink) !important; }
        }
        @media (max-width: 640px) {
          .two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <article
        className="rp"
        itemScope
        itemType="https://schema.org/Article"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
            "description": "From AI cricket analytics to youth talent discovery — 5 startup ideas inspired by the IND vs NZ Final 2026.",
            "author": { "@type": "Organization", "name": "UpForge" },
            "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
            "datePublished": new Date().toISOString().split("T")[0],
            "url": "https://upforge.in/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
            "keywords": "startup ideas ind vs nz final, cricket startup ideas 2026, sports tech startup india",
          })}}
        />

        {/* BREADCRUMB */}
        <nav className="sf a0" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }}>UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li><Link href="/blog" style={{ color: "var(--ink5)", textDecoration: "none" }}>Blog</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>Startup Ideas · IND vs NZ Final</li>
            </ol>
          </div>
        </nav>

        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>

          <div className="imgf" style={{ height: "clamp(280px,36vw,460px)" }}>
            <img src={IMGS.hero} alt="5 Startup Ideas Inspired by the IND vs NZ Final 2026" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(26,18,8,.25) 0%, rgba(26,18,8,.88) 100%)" }} />

            {/* Hero content */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "0 clamp(16px,5vw,64px)", textAlign: "center",
            }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["IND vs NZ Final 2026", "Startup Ideas", "SportsTech India"].map(tag => (
                  <span key={tag} className="sf" style={{
                    fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.2)", padding: "3px 10px",
                  }}>{tag}</span>
                ))}
              </div>

              <h1 className="pf" itemProp="headline" style={{
                fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)",
                fontWeight: 900, lineHeight: 1.0,
                color: "white", letterSpacing: "-0.02em",
                marginBottom: 18, maxWidth: 780,
              }}>
                5 Startup Ideas Inspired by the{" "}
                <em style={{ color: "#E8C547", fontStyle: "italic" }}>IND vs NZ Final 2026</em>
              </h1>

              <p className="rp" style={{
                fontSize: "clamp(13px,1.8vw,16px)",
                color: "rgba(255,255,255,.58)", fontStyle: "italic",
                maxWidth: 520, lineHeight: 1.6,
              }}>
                When 350 million people watch the same match, the market speaks.<br />Here are five businesses someone should build from it.
              </p>
            </div>

            <div className="sf" style={{
              position: "absolute", top: 18, right: 18,
              background: "rgba(26,18,8,.7)", border: "1px solid rgba(255,255,255,.1)",
              padding: "5px 12px", fontSize: 8, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.5)",
            }}>
              UpForge · Intelligence
            </div>
          </div>

          {/* Meta bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[
                  { l: "Published", v: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { l: "Reading Time", v: "~6 min" },
                  { l: "Ideas", v: "5 Startup Concepts" },
                  { l: "Sectors", v: "SportsTech · AI · EdTech · Media" },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "12px 20px", borderRight: "1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.28)", marginBottom: 3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize: 11, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════
            MAIN
        ══════════════════════════════ */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* INTRO + TOC */}
          <div className="a1 two-col" style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: 0, borderBottom: "1px solid var(--rule2)" }}>

            {/* Intro text */}
            <div style={{ padding: "clamp(26px,4vw,44px) clamp(16px,3vw,40px) clamp(26px,4vw,44px) 0", borderRight: "1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom: 16 }}>
                <span className="sh-l">Introduction</span>
                <div className="sh-r" />
              </div>
              <p className="pf dropcap" itemProp="description" style={{ fontSize: "clamp(1rem,2vw,1.28rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 16 }}>
                The India vs New Zealand final captured the attention of millions of fans worldwide. The intensity, strategy, and leadership displayed on the field were not just lessons for cricket lovers — they were signals for entrepreneurs paying close enough attention.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}>
                Great founders often draw inspiration from unexpected places. Sports, in particular, compress the dynamics of markets — pressure, competition, team coordination, and real-time decision making — into a few intense hours. Every major match creates observable patterns that translate directly into business problems worth solving.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88 }}>
                Here are five startup ideas the IND vs NZ Final 2026 made visible. Each one addresses a real market gap. Each one is buildable today.
              </p>
            </div>

            {/* TOC */}
            <div style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,28px)" }}>
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">5 Ideas</span>
                <div className="sh-r" />
              </div>
              {IDEAS.map((idea, i) => (
                <a key={i} href={`#idea-${idea.num}`} className="toc-link">
                  <span className="sf" style={{ fontSize: 8.5, fontWeight: 800, color: "var(--gold2)", flexShrink: 0, minWidth: 20 }}>
                    {idea.num}
                  </span>
                  <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>
                    {idea.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ══════════════════════════════
              5 IDEA CARDS
          ══════════════════════════════ */}
          <div style={{ marginTop: "clamp(28px,4vw,48px)", display: "flex", flexDirection: "column", gap: 18 }}>
            {IDEAS.map((idea, idx) => (
              <div key={idx} id={`idea-${idea.num}`} className="idea-card">
                <div
                  className="idea-inner"
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 320px" : "320px 1fr",
                    minHeight: 380,
                  }}
                >
                  {/* Image — left for odd index */}
                  {idx % 2 !== 0 && (
                    <div className="imgf idea-img" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 380, position: "relative" }}>
                      <img src={idea.img} alt={idea.title} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,18,8,.55) 0%, transparent 65%)" }} />
                      {/* Big number watermark */}
                      <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                        <span className="pf" style={{ fontSize: "5.5rem", fontWeight: 900, color: "rgba(255,255,255,.09)", lineHeight: 1 }}>{idea.num}</span>
                      </div>
                      {/* Sector tag */}
                      <div style={{ position: "absolute", top: 16, left: 16 }}>
                        <span className="sf" style={{
                          fontSize: 7.5, fontWeight: 700, letterSpacing: "0.18em",
                          textTransform: "uppercase", color: "#E8C547",
                          background: "rgba(26,18,8,.7)", padding: "3px 9px",
                          border: "1px solid rgba(232,197,71,.2)",
                        }}>{idea.tag}</span>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: "clamp(20px,3vw,34px)", display: "flex", flexDirection: "column" }}>

                    {/* Header */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--gold2)" }}>
                          Idea {idea.num}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        {idx % 2 === 0 && (
                          <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink5)" }}>{idea.tag}</span>
                        )}
                      </div>
                      <h2 className="pf" style={{
                        fontSize: "clamp(1.15rem,2.4vw,1.7rem)",
                        fontWeight: 700, color: "var(--ink)", lineHeight: 1.15, marginBottom: 0,
                      }}>
                        {idea.title}
                      </h2>
                    </div>

                    {/* Problem */}
                    <div className="info-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <span className="sf" style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--ink5)", display: "block", marginBottom: 7 }}>
                        The Problem
                      </span>
                      <p className="rp" style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.82 }}>{idea.problem}</p>
                    </div>

                    {/* Solution */}
                    <div className="info-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <span className="sf" style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--green)", display: "block", marginBottom: 7 }}>
                        The Solution
                      </span>
                      <p className="rp" style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.82 }}>{idea.solution}</p>
                    </div>

                    {/* Revenue model */}
                    <div className="info-block" style={{ paddingLeft: 0, paddingRight: 0 }}>
                      <span className="sf" style={{ fontSize: 7.5, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.2em", color: "var(--gold)", display: "block", marginBottom: 9 }}>
                        Revenue Model
                      </span>
                      <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                        {idea.model.map((m, mi) => (
                          <div key={mi} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold2)", flexShrink: 0, marginTop: 6 }} />
                            <span className="rp" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.65 }}>{m}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Why + Market */}
                    <div style={{ marginTop: "auto", paddingTop: 16 }}>
                      {/* Why it works — dark quote style */}
                      <div style={{
                        background: "var(--ink)", borderLeft: "4px solid var(--gold2)",
                        padding: "14px 18px", marginBottom: 12,
                      }}>
                        <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(232,197,71,.6)", display: "block", marginBottom: 7 }}>
                          Why This Works
                        </span>
                        <p className="rp" style={{ fontSize: 12, color: "rgba(255,255,255,.72)", lineHeight: 1.75, fontStyle: "italic" }}>
                          {idea.why}
                        </p>
                      </div>

                      {/* Market signal */}
                      <div className="market-strip">
                        <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em", color: "var(--gold)", display: "block", marginBottom: 5 }}>
                          Market Signal
                        </span>
                        <p className="rp" style={{ fontSize: 11.5, color: "var(--ink3)", lineHeight: 1.72 }}>{idea.market}</p>
                      </div>
                    </div>
                  </div>

                  {/* Image — right for even index */}
                  {idx % 2 === 0 && (
                    <div className="imgf idea-img" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 380, position: "relative" }}>
                      <img src={idea.img} alt={idea.title} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(26,18,8,.55) 0%, transparent 65%)" }} />
                      <div style={{ position: "absolute", bottom: 16, right: 16, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "5.5rem", fontWeight: 900, color: "rgba(255,255,255,.09)", lineHeight: 1 }}>{idea.num}</span>
                      </div>
                      <div style={{ position: "absolute", top: 16, right: 16 }}>
                        <span className="sf" style={{
                          fontSize: 7.5, fontWeight: 700, letterSpacing: "0.18em",
                          textTransform: "uppercase", color: "#E8C547",
                          background: "rgba(26,18,8,.7)", padding: "3px 9px",
                          border: "1px solid rgba(232,197,71,.2)",
                        }}>{idea.tag}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── CLOSING ── */}
          <div style={{ marginTop: "clamp(36px,6vw,64px)", border: "1.5px solid var(--ink)", overflow: "hidden" }}>

            {/* Image banner */}
            <div className="imgf" style={{ height: "clamp(160px,20vw,240px)" }}>
              <img src={IMGS.closing} alt="Sports and entrepreneurship share the same principles" style={{ filter: "sepia(30%) brightness(0.42) contrast(1.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px,5vw,60px)", textAlign: "center" }}>
                <p className="pf" style={{ fontSize: "clamp(1.2rem,3vw,2.1rem)", fontWeight: 700, color: "white", lineHeight: 1.2, fontStyle: "italic" }}>
                  "Both require strategy, teamwork, resilience, and{" "}
                  <em style={{ color: "#E8C547" }}>leadership under pressure.</em>"
                </p>
              </div>
            </div>

            {/* Text body */}
            <div style={{ background: "var(--white)", padding: "clamp(22px,4vw,40px)" }}>
              <div className="sh" style={{ marginBottom: 18 }}>
                <span className="sh-l">Final Thoughts</span>
                <div className="sh-r" />
              </div>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.9, marginBottom: 16, maxWidth: 720 }}>
                Sports and entrepreneurship share more than metaphors. Both require strategy, teamwork, resilience, and the capacity to perform under pressure when the margin for error collapses to nothing.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.9, maxWidth: 720 }}>
                Matches like the IND vs NZ Final remind us that success is rarely accidental. It is the result of preparation, strategy, and execution. For entrepreneurs, inspiration can come from anywhere — even from the most intense cricket finals. And sometimes, a single idea inspired by such a moment becomes the next great Indian startup.
              </p>

              {/* Cta */}
              <div style={{ marginTop: 24, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/startup" style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "var(--ink)", color: "white",
                  padding: "11px 22px", fontSize: 10, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  fontFamily: "system-ui", textDecoration: "none",
                }}>
                  Explore Indian Startups →
                </Link>
                <Link href="/submit" style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  border: "2px solid var(--ink)", color: "var(--ink)",
                  padding: "11px 22px", fontSize: 10, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  fontFamily: "system-ui", textDecoration: "none", background: "transparent",
                }}>
                  List Your Startup Free
                </Link>
              </div>
            </div>
          </div>

          {/* ── RELATED FOUNDER STORIES ── */}
          <div style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 8 }}>
              <span className="sh-l">Related Founder Stories on UpForge</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize: 12.5, color: "var(--ink4)", marginBottom: 18, fontStyle: "italic" }}>
              The founders who already embody what these five ideas demand.
            </p>

            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5,
            }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/startup/${r.slug}`} className="rel-card">
                  {/* Monogram block */}
                  <div style={{
                    height: 90, background: ["#E8E0D0","#E0D8CC","#D8D0C4","#D0C8BC"][i],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderBottom: "1px solid var(--rule2)",
                  }}>
                    <span className="pf" style={{ fontSize: "2.8rem", fontWeight: 900, color: "rgba(26,18,8,0.1)" }}>
                      {r.name.charAt(0)}
                    </span>
                  </div>
                  <div style={{ padding: "12px 14px 14px" }}>
                    <h3 className="pf" style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--ink)", marginBottom: 3, lineHeight: 1.2 }}>
                      {r.name}
                    </h3>
                    <span className="sf" style={{ fontSize: 7.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700, display: "block", marginBottom: 6 }}>
                      {r.sector}
                    </span>
                    <span className="rp" style={{ fontSize: 10.5, color: "var(--ink4)", fontStyle: "italic", lineHeight: 1.5, display: "block", marginBottom: 9 }}>
                      {r.note}
                    </span>
                    <span className="sf" style={{ fontSize: 8.5, color: "var(--gold2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                      Read Story →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── ALSO READ ── */}
          <div style={{ marginTop: "clamp(28px,4vw,44px)", padding: "18px 20px", border: "1.5px solid var(--rule2)", background: "var(--parch2)" }}>
            <div className="sh" style={{ marginBottom: 14 }}>
              <span className="sh-l">Also on UpForge</span>
              <div className="sh-r" />
            </div>
            <Link
              href="/blog/leadership-lessons-ind-vs-nz-final-2026"
              style={{ display: "flex", alignItems: "flex-start", gap: 14, textDecoration: "none" }}
            >
              <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold2)", flexShrink: 0, marginTop: 6 }} />
              <div>
                <p className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4, lineHeight: 1.3 }}>
                  IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn
                </p>
                <p className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.6 }}>
                  Decision making under pressure. Team that wins championships. Strategy over talent. Read the companion piece.
                </p>
              </div>
            </Link>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Blog navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(28px,4vw,44px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Startup Registry",           h: "/startup"             },
                { l: "Indian Startup Founders",    h: "/"                    },
                { l: "Indian Unicorns 2026",       h: "/indian-unicorns"     },
                { l: "Submit Your Startup",        h: "/submit"              },
                { l: "Leadership Lessons Blog",    h: "/blog/leadership-lessons-ind-vs-nz-final-2026" },
                { l: "Back to Blog",               h: "/blog"                },
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
      </article>
    </>
  );
}
