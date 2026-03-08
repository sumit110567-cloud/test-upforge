// app/blog/leadership-lessons-ind-vs-nz-final-2026/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn | UpForge",
  description: "The IND vs NZ Final 2026 was more than just cricket. Discover 7 powerful leadership and startup lessons founders can learn from the high-pressure final match.",
  keywords: [
    "leadership lessons from ind vs nz final 2026",
    "startup lessons from cricket final",
    "ind vs nz final business lessons",
    "what founders can learn from cricket",
    "ind vs nz final analysis 2026",
    "decision making under pressure cricket",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/blog/leadership-lessons-ind-vs-nz-final-2026" },
  openGraph: {
    title: "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    description: "The IND vs NZ Final 2026 was more than just cricket. Discover 7 powerful leadership and startup lessons founders can learn from the high-pressure final match.",
    url: "https://upforge.in/blog/leadership-lessons-ind-vs-nz-final-2026",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-blog-cricket.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    description: "7 powerful startup lessons from the IND vs NZ Final 2026 — calm decisions, team strategy, adaptability under pressure.",
  },
};

// Curated Unsplash images
const IMGS = {
  hero:        "https://wpleague.in/wp-content/uploads/2026/03/Josh-Folder-2026-03-05T232154.662-1772733178087-1024x536.webp",
  pressure:    "https://static.wixstatic.com/media/aa447a_647d2c3fe7594fec9c0b384bed0b05d8~mv2.png/v1/fill/w_568,h_352,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/aa447a_647d2c3fe7594fec9c0b384bed0b05d8~mv2.png",
  team:        "https://m.media-amazon.com/images/I/911-lgiv2FL.jpg",
  strategy:    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTxqNOH3z1MqCaO8gfN0IlS3xPbnhp0__xbQ&s",
  adapt:       "https://www.shutterstock.com/image-photo/outdoor-photo-background-dramatic-sky-600nw-2720124993.jpg",
  leadership:  "https://images.stockcake.com/public/c/2/3/c23d5f73-0e32-48c5-8e1f-c2ee9406c3fa_large/cricket-s-golden-moment-stockcake.jpg",
  resilience:  "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80&auto=format",
  execution:   "https://m.media-amazon.com/images/I/51wKbY7F3-L._AC_UY1100_.jpg",
    };

const LESSONS = [
  {
    num: "01",
    title: "Calm Decision Making Under Pressure",
    keyword: "Decision Making Under Pressure",
    img: IMGS.pressure,
    body: `In a high-pressure final, captains must make decisions within seconds — who bowls the death overs, when to review a dismissal, whether to attack or defend with 10 runs needed off 12 balls. There is no time to overthink. The mind must be clear, the instincts sharp, and the ego silent.

Startup founders face the same crucible. When a key engineer resigns three weeks before launch, when a competitor raises ₹100Cr out of nowhere, when a product you shipped quietly starts bleeding users — the quality of your decision in that moment defines the trajectory of your company.`,
    founder: {
      name: "Nithin Kamath",
      company: "Zerodha",
      quote: "Nithin Kamath built Zerodha into India's largest stockbroker by making calm, contrarian decisions during volatile market conditions — choosing to stay bootstrapped when every investor said raise, choosing to be transparent when peers were opaque.",
      link: "/startup/zerodha",
      linkText: "See how Nithin Kamath built Zerodha →",
    },
    insight: "Pressure is not an obstacle. It is the filter that separates good founders from great ones.",
  },
  {
    num: "02",
    title: "Team Wins Championships",
    keyword: "Team Strategy",
    img: IMGS.team,
    body: `No cricket team wins a final with one star player. Kohli can score a century but if the middle order collapses, the innings ends. Bumrah can bowl a perfect spell but if the fielders drop catches, the match is lost. Championships are collective. They are won in practice sessions at 6am, in quiet conversations in the dressing room, in the unglamorous contributions of the number seven batsman.

Startups are no different. Founders who try to be the only star rarely build lasting companies. The ones who build great teams — and then trust those teams — build the ones that last.`,
    founder: {
      name: "Alakh Pandey",
      company: "PhysicsWallah",
      quote: "PhysicsWallah grew into a unicorn because Alakh Pandey built a strong educator and operations team around his content vision. He was the anchor, but the team was the innings.",
      link: "/startup/physicswallah",
      linkText: "Read the story of PhysicsWallah founder Alakh Pandey →",
    },
    insight: "The founder is the captain. But the team wins or loses the match.",
  },
  {
    num: "03",
    title: "Strategy Beats Raw Talent",
    keyword: "Startup Lessons from Cricket Final",
    img: IMGS.strategy,
    body: `New Zealand rarely has the most talented squad in world cricket. But they consistently punch above their weight — because they play as a unit with a clear, disciplined strategy. They study opponents. They identify weaknesses. They execute with ruthless consistency.

Many funded Indian startups have burned crores chasing talent — expensive engineers, star executives, premium offices — only to collapse because their strategy was unclear. A well-structured startup with a lean, aligned team will outlast a talent-heavy one with no coherent direction every single time.`,
    founder: null,
    insight: "Strategy is your field placement. Talent is your pace. You need both — but strategy sets the field first.",
  },
  {
    num: "04",
    title: "Adaptability Wins the Game",
    keyword: "India vs New Zealand Final 2026",
    img: IMGS.adapt,
    body: `Pitch conditions change. A surface that was playing low in the morning becomes a run-fest by afternoon. A team that cannot adapt its game plan to changing conditions — even mid-innings — loses. The best teams in world cricket hold their strategy loosely enough to abandon it when reality demands something different.

The market is your pitch. Consumer behaviour, regulatory environment, competitor moves, macroeconomic conditions — all of these change, often without warning. The founders who treat their initial business plan as sacred are the ones who get eliminated in the group stage.`,
    founder: {
      name: "Palicha & Vohra",
      company: "Zepto",
      quote: "Aadit Palicha and Kaivalya Vohra pivoted from a university carpooling app to 10-minute grocery delivery in a matter of weeks when they saw what the pandemic had done to consumer habits. That one adaptation turned into a multi-billion dollar company.",
      link: "/startup/zepto",
      linkText: "Read Zepto's story on UpForge →",
    },
    insight: "The plan you started with is not the plan you finish with. And that's exactly as it should be.",
  },
  {
    num: "05",
    title: "Leadership Creates Momentum",
    keyword: "Leadership Lessons from IND vs NZ Final 2026",
    img: IMGS.leadership,
    body: `A great captain does not just set fields and make bowling changes. They manage the energy of eleven human beings under enormous pressure. They know who needs a word of encouragement, who needs to be left alone, who needs to be pulled off the field before they lose confidence. Leadership in cricket is fundamentally emotional intelligence applied under competitive pressure.

The same is true in startups. When a company is going through a difficult quarter — delayed product, missed targets, team conflict — the founder's demeanour sets the ceiling for how the team responds. Panic at the top creates panic everywhere. Calm at the top creates resilience everywhere.`,
    founder: {
      name: "Deepinder Goyal",
      company: "Zomato",
      quote: "Deepinder Goyal led Zomato through near-bankruptcy, a failed acquisition, multiple pivots, and a public listing that initially disappointed markets — and kept building. That stubborn, calm leadership is why Zomato is still standing while most of its early competitors are not.",
      link: "/startup/zomato",
      linkText: "Read Zomato's founder story on UpForge →",
    },
    insight: "Momentum is manufactured. Great leaders manufacture it every single day.",
  },
  {
    num: "06",
    title: "Process Over Brilliance",
    keyword: "What Founders Can Learn from Cricket",
    img: IMGS.resilience,
    body: `The IND vs NZ Final was not won on one brilliant shot or one unplayable delivery. It was won through hundreds of small, correct decisions compounded over five hours. Running hard between wickets. Communicating clearly. Maintaining field intensity in the 30th over as in the first. Cricket at the highest level is primarily a game of process discipline, not sporadic brilliance.

India's best startups — Zerodha, CRED, Zepto — are not built on one brilliant product idea alone. They are built on repeatable processes: how they hire, how they ship product, how they talk to customers, how they make decisions. The boring infrastructure of excellence.`,
    founder: null,
    insight: "Brilliant ideas open doors. Reliable process is what you build once you're inside.",
  },
  {
    num: "07",
    title: "Resilience is the Only Unfair Advantage",
    keyword: "IND vs NZ Final Business Lessons",
    img: IMGS.execution,
    body: `Cricket finals are long. They are exhausting. There are moments — often multiple moments — when a team looks beaten. When the required run rate crosses 12, when a wicket falls at the worst possible time, when the opposition gets three boundaries in a row. The teams that win finals are the ones that do not let those moments end the innings early.

Every startup goes through its version of a collapse. Product fails. Key hires leave. Funding falls through. The market moves in the wrong direction. Resilience — the stubborn refusal to let those moments become the final score — is the only advantage that cannot be copied, cannot be funded into existence, cannot be faked.`,
    founder: {
      name: "Ritesh Agarwal",
      company: "OYO",
      quote: "Ritesh Agarwal started OYO at 17, dropped out of college, was rejected by dozens of investors, and built India's largest hospitality brand. The resilience required to keep building through that kind of adversity is what makes the story worth reading.",
      link: "/startup/oyo",
      linkText: "Read OYO's founder story on UpForge →",
    },
    insight: "You cannot buy resilience. You can only earn it — one difficult day at a time.",
  },
];

const RELATED = [
  { name: "Zerodha",       slug: "zerodha",        sector: "FinTech"  },
  { name: "PhysicsWallah", slug: "physicswallah",  sector: "EdTech"   },
  { name: "Zepto",         slug: "zepto",          sector: "D2C"      },
  { name: "Zomato",        slug: "zomato",         sector: "FoodTech" },
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
          --white:  #FDFCF9;
          --green:  #15803D;
        }

        body { background: var(--parch); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
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
          filter: sepia(14%) contrast(108%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.03); }

        /* lesson card */
        .lesson-card {
          border: 1.5px solid var(--ink);
          background: var(--white);
          overflow: hidden;
          position: relative;
        }
        .lesson-card::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547);
        }

        /* quote block */
        .qblock {
          background: var(--ink);
          border-left: 4px solid var(--gold2);
          padding: 18px 20px;
          position: relative;
        }

        /* insight pill */
        .insight {
          display: inline-flex; align-items: center; gap: 8px;
          background: var(--goldlt, #FEF3C7);
          border: 1px solid rgba(180,83,9,.25);
          padding: 9px 14px;
          width: 100%;
        }

        /* section rule */
        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .28em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* related card */
        .rel-card {
          display: flex; flex-direction: column;
          background: var(--white);
          text-decoration: none;
          border: none;
          transition: transform .15s, box-shadow .15s, background .15s;
          position: relative;
        }
        .rel-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2.5px; background: transparent; transition: background .15s;
        }
        .rel-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); z-index: 1; }
        .rel-card:hover::before { background: var(--gold2); }

        /* drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.8em; font-weight: 900;
          float: left; line-height: .82;
          margin-right: 8px; margin-top: 6px;
          color: var(--ink);
        }

        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .lesson-two { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) {
          .lesson-two { grid-template-columns: 1fr !important; }
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
            "headline": "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
            "description": "The IND vs NZ Final 2026 was more than just cricket. Discover 7 powerful leadership and startup lessons founders can learn from the high-pressure final match.",
            "author": { "@type": "Organization", "name": "UpForge" },
            "publisher": { "@type": "Organization", "name": "UpForge", "url": "https://upforge.in" },
            "datePublished": new Date().toISOString().split("T")[0],
            "url": "https://upforge.in/blog/leadership-lessons-ind-vs-nz-final-2026",
            "keywords": "leadership lessons ind vs nz final 2026, startup lessons from cricket, decision making under pressure",
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
              <li style={{ color: "var(--ink4)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 220 }}>
                IND vs NZ Final 2026
              </li>
            </ol>
          </div>
        </nav>

        {/* ══════════════════════════════
            HERO IMAGE MASTHEAD
        ══════════════════════════════ */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>

          {/* Full-bleed hero */}
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            <img src={IMGS.hero} alt="IND vs NZ Final 2026 — leadership lessons for startup founders" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(26,18,8,.3) 0%, rgba(26,18,8,.85) 100%)" }} />

            {/* Centered hero content */}
            <div style={{
              position: "absolute", inset: 0,
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              padding: "0 clamp(16px,5vw,64px)", textAlign: "center",
            }}>
              {/* Category tags */}
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["IND vs NZ Final", "Leadership", "Startup Strategy"].map(tag => (
                  <span key={tag} className="sf" style={{
                    fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)",
                    padding: "3px 10px",
                  }}>{tag}</span>
                ))}
              </div>

              <h1 className="pf" itemProp="headline" style={{
                fontSize: "clamp(1.8rem, 5.5vw, 4.2rem)",
                fontWeight: 900, lineHeight: 1.02,
                color: "white", letterSpacing: "-0.02em",
                marginBottom: 18, maxWidth: 820,
              }}>
                IND vs NZ Final 2026:{" "}
                <em style={{ color: "#E8C547", fontStyle: "italic" }}>7 Leadership Lessons</em>{" "}
                Every Startup Founder Must Learn
              </h1>

              <p className="rp" style={{
                fontSize: "clamp(13px,1.8vw,16px)",
                color: "rgba(255,255,255,0.62)", fontStyle: "italic",
                maxWidth: 560, lineHeight: 1.6,
              }}>
                The match was cricket. The lessons are for builders.
              </p>
            </div>

            {/* UpForge badge */}
            <div className="sf" style={{
              position: "absolute", top: 18, right: 18,
              background: "rgba(26,18,8,.7)", border: "1px solid rgba(255,255,255,.1)",
              padding: "5px 12px", fontSize: 8, fontWeight: 700,
              letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.55)",
            }}>
              UpForge · Intelligence
            </div>
          </div>

          {/* Meta strip */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 0 }}>
                {[
                  { l: "Published", v: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { l: "Reading Time", v: "~7 min" },
                  { l: "Category", v: "Leadership · Strategy" },
                  { l: "Keywords", v: "IND vs NZ Final 2026" },
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

        {/* ══════════════════════════════
            MAIN CONTENT
        ══════════════════════════════ */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* ── INTRO ── */}
          <div className="a1" style={{
            display: "grid", gridTemplateColumns: "1fr auto",
            gap: 0, borderBottom: "1px solid var(--rule2)",
            alignItems: "start",
          }}>
            <div style={{ padding: "clamp(28px,4vw,48px) clamp(16px,3vw,40px) clamp(28px,4vw,48px) 0", borderRight: "1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom: 18 }}>
                <span className="sh-l">Introduction</span>
                <div className="sh-r" />
              </div>
              <p className="pf" itemProp="description" style={{
                fontSize: "clamp(1.05rem,2.2vw,1.35rem)",
                fontWeight: 400, lineHeight: 1.72,
                color: "var(--ink)", marginBottom: 18,
              }}>
                The India vs New Zealand Final 2026 captured millions of searches worldwide. But beyond the cricket field, the match revealed powerful lessons about leadership, strategy, and decision-making under pressure — the same qualities required to build successful startups.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85 }}>
                This is not a match report. It is a breakdown of seven principles that the finest cricketers and the finest founders share — principles that will still matter long after the scorecard is forgotten.
              </p>
            </div>

            {/* Aside: what you'll learn */}
            <div style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth: "clamp(200px,26vw,280px)" }}>
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">In This Article</span>
                <div className="sh-r" />
              </div>
              {LESSONS.map((l, i) => (
                <a key={i} href={`#lesson-${l.num}`} style={{
                  display: "flex", alignItems: "baseline", gap: 8, marginBottom: 9,
                  textDecoration: "none",
                }}>
                  <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--gold2)", flexShrink: 0, minWidth: 18 }}>
                    {l.num}
                  </span>
                  <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>
                    {l.title}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* ── 7 LESSONS ── */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            {LESSONS.map((lesson, idx) => (
              <div
                key={idx}
                id={`lesson-${lesson.num}`}
                className="lesson-card"
                style={{ marginBottom: idx < LESSONS.length - 1 ? 20 : 0 }}
              >
                <div
                  className="lesson-two"
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 340px" : "340px 1fr",
                    gap: 0,
                    minHeight: 340,
                  }}
                >
                  {/* IMAGE — alternating sides */}
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={lesson.img} alt={lesson.title} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(26,18,8,.6) 0%, transparent 60%)" }} />
                      {/* Lesson number */}
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>
                          {lesson.num}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* CONTENT */}
                  <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    {/* Lesson header */}
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span className="sf" style={{
                          fontSize: 9, fontWeight: 800, letterSpacing: "0.2em",
                          textTransform: "uppercase", color: "var(--gold2)",
                        }}>
                          Lesson {lesson.num}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {lesson.keyword}
                        </span>
                      </div>

                      <h2 className="pf" style={{
                        fontSize: "clamp(1.2rem, 2.5vw, 1.75rem)",
                        fontWeight: 700, color: "var(--ink)",
                        lineHeight: 1.15, marginBottom: 18,
                      }}>
                        {lesson.title}
                      </h2>

                      {/* Body text */}
                      {lesson.body.split("\n\n").map((para, pi) => (
                        <p key={pi} className={`rp ${pi === 0 ? "dropcap" : ""}`} style={{
                          fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88,
                          marginBottom: 14,
                        }}>
                          {para}
                        </p>
                      ))}
                    </div>

                    {/* Founder quote + insight */}
                    <div style={{ marginTop: 20 }}>
                      {lesson.founder && (
                        <div className="qblock" style={{ marginBottom: 12 }}>
                          <p className="sf" style={{
                            fontSize: 8, fontWeight: 700, textTransform: "uppercase",
                            letterSpacing: "0.2em", color: "rgba(232,197,71,0.7)",
                            marginBottom: 8,
                          }}>
                            {lesson.founder.company} · {lesson.founder.name}
                          </p>
                          <p className="rp" style={{
                            fontSize: 12.5, color: "rgba(255,255,255,.75)",
                            lineHeight: 1.75, marginBottom: 12, fontStyle: "italic",
                          }}>
                            {lesson.founder.quote}
                          </p>
                          <Link href={lesson.founder.link} style={{
                            display: "inline-flex", alignItems: "center", gap: 6,
                            fontSize: 9.5, fontWeight: 700, textTransform: "uppercase",
                            letterSpacing: "0.14em", color: "#E8C547",
                            textDecoration: "none", fontFamily: "system-ui",
                          }}>
                            {lesson.founder.linkText}
                          </Link>
                        </div>
                      )}

                      {/* Insight strip */}
                      <div className="insight">
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--gold2)", flexShrink: 0 }} />
                        <p className="rp" style={{
                          fontSize: 12, color: "var(--gold3)", fontStyle: "italic", lineHeight: 1.6,
                        }}>
                          {lesson.insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* IMAGE — even-indexed lessons */}
                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={lesson.img} alt={lesson.title} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(26,18,8,.6) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>
                          {lesson.num}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── CLOSING STATEMENT ── */}
          <div style={{ marginTop: "clamp(36px,6vw,64px)", border: "1.5px solid var(--ink)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3))" }} />

            {/* Image background */}
            <div className="imgf" style={{ height: 200, position: "relative" }}>
              <img src={IMGS.resilience} alt="Resilience under pressure" style={{ filter: "sepia(40%) brightness(0.4) contrast(1.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px,5vw,60px)", textAlign: "center" }}>
                <p className="pf" style={{
                  fontSize: "clamp(1.3rem,3vw,2.2rem)", fontWeight: 700,
                  color: "white", lineHeight: 1.22, fontStyle: "italic",
                }}>
                  "Cricket finals and startup journeys share the same core principle: <em style={{ color: "#E8C547" }}>resilience under pressure.</em>"
                </p>
              </div>
            </div>

            <div style={{ padding: "clamp(24px,4vw,40px)" }}>
              <p className="rp" style={{ fontSize: 14, color: "rgba(255,255,255,.75)", lineHeight: 1.88, maxWidth: 760 }}>
                Whether it's building Zerodha, PhysicsWallah, or the next big Indian startup, success often depends on the same leadership qualities displayed in high-stakes matches like the IND vs NZ Final. The pitch changes. The opposition changes. The scoreboard pressure changes. But the principles — calm decisions, trusted teams, clear strategy, relentless adaptability — stay constant.
              </p>
              <p className="rp" style={{ fontSize: 14, color: "rgba(255,255,255,.55)", lineHeight: 1.88, marginTop: 16, maxWidth: 760 }}>
                The next Indian unicorn is being built by someone reading this. The final over is still being bowled.
              </p>
            </div>
          </div>

          {/* ── RELATED FOUNDER STORIES ── */}
          <div style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l">Related Founder Stories on UpForge</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize: 12.5, color: "var(--ink4)", marginBottom: 18, fontStyle: "italic" }}>
              Meet the founders who embody these seven principles — building India's most important companies.
            </p>

            {/* Founder cards — SEO internal links */}
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
              border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5,
            }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/startup/${r.slug}`} className="rel-card">
                  {/* Logo placeholder */}
                  <div style={{
                    height: 100, background: ["#E8E0D0","#E0D8CC","#D8D0C4","#D0C8BC"][i],
                    display: "flex", alignItems: "center", justifyContent: "center",
                    borderBottom: "1px solid var(--rule2)",
                  }}>
                    <span className="pf" style={{ fontSize: "3rem", fontWeight: 900, color: "rgba(26,18,8,0.1)" }}>
                      {r.name.charAt(0)}
                    </span>
                  </div>
                  <div style={{ padding: "13px 14px 12px" }}>
                    <h3 className="pf" style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4, lineHeight: 1.2 }}>
                      {r.name}
                    </h3>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>
                      {r.sector}
                    </span>
                    <div style={{ marginTop: 10, display: "flex", alignItems: "center", gap: 4 }}>
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--gold2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        Read Story →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── FOOTER NAV ── */}
          <nav aria-label="Blog navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Startup Registry",           h: "/startup" },
                { l: "Indian Startup Founders",    h: "/"        },
                { l: "Indian Unicorns 2026",       h: "/indian-unicorns" },
                { l: "Submit Your Startup",        h: "/submit"  },
                { l: "Valuation Tool",             h: "/valuation" },
                { l: "Back to Blog",               h: "/blog"    },
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
