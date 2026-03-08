// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UpForge Intelligence — Startup Analysis, Leadership & Strategy",
  description: "Deep analysis on Indian startups, founder stories, leadership lessons, and business strategy. Trusted by founders, investors, and builders across India.",
  alternates: { canonical: "https://upforge.in/blog" },
  openGraph: {
    title: "UpForge Intelligence — Startup Analysis, Leadership & Strategy",
    description: "Deep analysis on Indian startups, founder stories, leadership lessons, and business strategy.",
    url: "https://upforge.in/blog",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-blog.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "website",
  },
};

// ── FEATURED HERO post ──────────────────────────────────────────────
const HERO_POST = {
  title: "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
  subtitle: "The match was cricket. The lessons are for builders. From calm decision-making under pressure to team strategy — seven principles that define both great captains and great founders.",
  slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",
  category: "Leadership",
  date: "March 2026",
  readTime: "7 min",
  img: "https://images.unsplash.com/photo-1540747913346-19212a4f73ef?w=1400&q=85&auto=format",
  tag: "Trending",
};

// ── SECONDARY featured posts (2-col strip) ─────────────────────────
const SECONDARY_POSTS = [
  {
    title: "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
    excerpt: "From AI cricket analytics to youth talent discovery — five businesses someone should build right now, born from the most-watched match of 2026.",
    slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
    category: "Startup Ideas",
    date: "March 2026",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=900&q=80&auto=format",
    tag: "New",
  },
  {
    title: "How Nithin Kamath Built Zerodha Without Raising a Rupee",
    excerpt: "India's largest stockbroker was built bootstrapped, with calm contrarian decisions during volatile markets. The story no MBA teaches.",
    slug: "/startup/zerodha",
    category: "Founder Story",
    date: "February 2026",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format",
    tag: null,
  },
];

// ── GRID posts (4 cards) ────────────────────────────────────────────
const GRID_POSTS = [
  {
    title: "Decision Making Under Pressure: What Cricket Teaches Founders",
    excerpt: "High-pressure overs and high-stakes pivots share the same psychology. Here's what the science says.",
    slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "Strategy",
    date: "March 2026",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80&auto=format",
  },
  {
    title: "PhysicsWallah: How Alakh Pandey Built a Unicorn from a YouTube Channel",
    excerpt: "No VC. No office. Just conviction, a camera, and a student base that grew faster than any paid acquisition ever could.",
    slug: "/startup/physicswallah",
    category: "Founder Story",
    date: "February 2026",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80&auto=format",
  },
  {
    title: "India's 126 Unicorns: The Data Behind the Decade",
    excerpt: "Which sectors produced the most unicorns? Which cities? Which founder backgrounds? A full breakdown of India's unicorn decade.",
    slug: "/indian-unicorns",
    category: "Analysis",
    date: "January 2026",
    readTime: "8 min",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80&auto=format",
  },
  {
    title: "Zepto's Pivot: From Carpooling to ₹1,000Cr in 18 Months",
    excerpt: "Aadit and Kaivalya saw the pandemic shift and changed everything in weeks. The anatomy of a pivot that actually worked.",
    slug: "/startup/zepto",
    category: "Case Study",
    date: "January 2026",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80&auto=format",
  },
];

// ── OPINION / COLUMN posts ─────────────────────────────────────────
const OPINION_POSTS = [
  {
    num: "I",
    title: "Why India's Startup Valuations Are Being Re-Set — and What It Means for Founders",
    author: "UpForge Analysis",
    date: "March 2026",
    slug: "/blog",
    category: "Opinion",
  },
  {
    num: "II",
    title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",
    author: "UpForge Analysis",
    date: "February 2026",
    slug: "/blog",
    category: "Opinion",
  },
  {
    num: "III",
    title: "Sports Tech in India: The ₹50,000Cr Market That Doesn't Exist Yet",
    author: "UpForge Analysis",
    date: "February 2026",
    slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
    category: "Sector Deep Dive",
  },
  {
    num: "IV",
    title: "What the IND vs NZ Final Tells Us About Indian Consumer Attention in 2026",
    author: "UpForge Analysis",
    date: "March 2026",
    slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "Trend Watch",
  },
];

// ── CATEGORY pills ─────────────────────────────────────────────────
const CATEGORIES = [
  { name: "All", active: true },
  { name: "Leadership", active: false },
  { name: "Startup Ideas", active: false },
  { name: "Founder Stories", active: false },
  { name: "Strategy", active: false },
  { name: "Analysis", active: false },
  { name: "Sector Deep Dives", active: false },
  { name: "Opinion", active: false },
];

export default function BlogIndexPage() {
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

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: var(--parch); }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .45s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .45s .07s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .45s .14s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: fadeUp .45s .20s cubic-bezier(.16,1,.3,1) both; }
        .a4 { animation: fadeUp .45s .27s cubic-bezier(.16,1,.3,1) both; }

        /* ── LIVE DOT ── */
        .ldot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E; display: inline-block;
          flex-shrink: 0; position: relative;
        }
        .ldot::after {
          content: ''; position: absolute; inset: -3px;
          border-radius: 50%; background: rgba(34,197,94,.22);
          animation: lp 2.2s ease-in-out infinite;
        }
        @keyframes lp { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(2.2);opacity:0} }

        /* ── IMAGE FRAME ── */
        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(12%) contrast(108%);
          transition: transform .65s ease;
        }
        .imgf:hover img { transform: scale(1.04); }

        /* ── SECTION HEAD ── */
        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .3em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* ── CATEGORY PILL ── */
        .cpill {
          display: inline-flex; align-items: center;
          font-size: 8.5px; font-weight: 700; letter-spacing: .12em;
          text-transform: uppercase; padding: 5px 13px;
          border: 1px solid var(--rule2); background: var(--white);
          color: var(--ink4); font-family: system-ui;
          transition: all .15s; white-space: nowrap;
          text-decoration: none; cursor: pointer;
        }
        .cpill:hover { border-color: var(--ink); color: var(--ink); }
        .cpill.on { background: var(--ink); color: white; border-color: var(--ink); }
        .scroll-strip { overflow-x: auto; scrollbar-width: none; }
        .scroll-strip::-webkit-scrollbar { display: none; }

        /* ── HERO CARD ── */
        .hero-card {
          display: grid; grid-template-columns: 1fr 420px;
          border: 1.5px solid var(--ink); overflow: hidden;
          background: var(--white); position: relative;
          text-decoration: none;
          transition: box-shadow .2s;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3.5px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3));
        }
        .hero-card:hover { box-shadow: 5px 5px 0 var(--ink); transform: translate(-2px,-2px); }

        /* ── SECONDARY CARDS ── */
        .sec-card {
          background: var(--white); text-decoration: none; display: flex; flex-direction: column;
          border: none; position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .15s;
        }
        .sec-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2.5px; background: transparent; transition: background .15s;
        }
        .sec-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); z-index: 1; }
        .sec-card:hover::before { background: var(--gold2); }

        /* ── GRID CARD ── */
        .grid-card {
          background: var(--white); text-decoration: none; display: flex; flex-direction: column;
          position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .15s;
        }
        .grid-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 2px; background: transparent; transition: background .15s;
        }
        .grid-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); z-index: 1; }
        .grid-card:hover::before { background: var(--gold2); }

        /* ── OPINION ROW ── */
        .op-row {
          display: flex; align-items: flex-start; gap: 16px;
          padding: 16px 0; border-bottom: 1px solid var(--rule2);
          text-decoration: none; transition: padding-left .15s;
        }
        .op-row:last-child { border-bottom: none; padding-bottom: 0; }
        .op-row:hover { padding-left: 6px; }

        /* ── NEWSLETTER BOX ── */
        .nl-box {
          background: var(--ink); position: relative; overflow: hidden;
          padding: clamp(22px,4vw,40px);
        }
        .nl-box::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3));
        }

        /* ── TAG BADGE ── */
        .tag-badge {
          display: inline-block; font-size: 7px; font-weight: 800;
          letter-spacing: .22em; text-transform: uppercase;
          padding: 2px 8px; font-family: system-ui;
        }
        .tag-trending { background: #FEFCE8; color: #854D0E; border: 1px solid rgba(133,77,14,.25); }
        .tag-new { background: #F0FDF4; color: var(--green); border: 1px solid rgba(21,128,61,.25); }

        /* ── CATEGORY LABEL ── */
        .cat-label {
          font-size: 7.5px; font-weight: 700; letter-spacing: .2em;
          text-transform: uppercase; color: var(--gold2);
          font-family: system-ui;
        }

        @media (max-width: 900px) {
          .hero-card { grid-template-columns: 1fr !important; }
          .hero-card .hero-img { height: 260px !important; border-right: none !important; border-bottom: 1.5px solid var(--ink) !important; order: -1; }
          .sec-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .main-grid { grid-template-columns: 1fr !important; }
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 400px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="rp" style={{ minHeight: "100vh", background: "var(--parch)" }}>

        {/* ══════════════════════════════
            MASTHEAD — newspaper-style
        ══════════════════════════════ */}
        <header className="a0" style={{ background: "var(--parch)", borderBottom: "3px solid var(--ink)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>

            {/* Top bar: date + nav */}
            <div style={{
              display: "flex", alignItems: "center", justifyContent: "space-between",
              padding: "9px 0", borderBottom: "1px solid var(--rule2)",
              flexWrap: "wrap", gap: 8,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span className="ldot" />
                <span className="sf" style={{ fontSize: 8.5, color: "var(--green)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>
                  Live · Updated Daily
                </span>
                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", letterSpacing: "0.1em" }}>
                  {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {[
                  { l: "Registry",  h: "/startup"  },
                  { l: "Unicorns",  h: "/indian-unicorns" },
                  { l: "Submit",    h: "/submit"   },
                ].map(n => (
                  <Link key={n.h} href={n.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none" }}>
                    {n.l}
                  </Link>
                ))}
              </div>
            </div>

            {/* Publication nameplate */}
            <div style={{ textAlign: "center", padding: "clamp(20px,3.5vw,40px) 0 clamp(14px,2.5vw,24px)", borderBottom: "1px solid var(--rule2)" }}>
              {/* Eyebrow rule */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 14 }}>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
                <span className="sf" style={{ fontSize: 8, letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--ink5)", fontWeight: 700 }}>
                  UpForge · Intelligence
                </span>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
              </div>

              {/* Big nameplate */}
              <h1 className="pf" style={{
                fontSize: "clamp(2.8rem, 8vw, 6.5rem)",
                fontWeight: 900, lineHeight: 0.88,
                color: "var(--ink)", letterSpacing: "-0.03em",
                marginBottom: 16,
              }}>
                The Forge
              </h1>

              {/* Tagline */}
              <p className="rp" style={{
                fontSize: "clamp(12px,1.6vw,15px)",
                fontStyle: "italic", color: "var(--ink4)",
                letterSpacing: "0.02em",
              }}>
                Startup analysis, founder stories & strategy for India's builders
              </p>
            </div>

            {/* Category strip */}
            <div className="scroll-strip a1" style={{ padding: "11px 0" }}>
              <div style={{ display: "flex", gap: 6, minWidth: "max-content" }}>
                {CATEGORIES.map((c, i) => (
                  <span key={i} className={`cpill ${c.active ? "on" : ""}`}>{c.name}</span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* ══════════════════════════════
            MAIN CONTENT
        ══════════════════════════════ */}
        <main style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(56px,8vw,100px)" }}>

          {/* ── HERO FEATURED POST ── */}
          <div style={{ padding: "clamp(20px,3vw,36px) 0 0" }}>
            <div className="sh a2" style={{ marginBottom: 14 }}>
              <span className="sh-l">Cover Story</span>
              <div className="sh-r" />
            </div>

            <Link href={HERO_POST.slug} className="hero-card a2">
              {/* Left: content */}
              <div style={{ padding: "clamp(24px,3.5vw,48px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span className="cat-label">{HERO_POST.category}</span>
                    <div style={{ width: 1, height: 11, background: "var(--rule)" }} />
                    <span className="tag-badge tag-trending">{HERO_POST.tag}</span>
                  </div>

                  <h2 className="pf" style={{
                    fontSize: "clamp(1.5rem, 3.2vw, 2.6rem)",
                    fontWeight: 900, lineHeight: 1.08,
                    color: "var(--ink)", letterSpacing: "-0.02em",
                    marginBottom: 18,
                  }}>
                    {HERO_POST.title}
                  </h2>

                  {/* Decorative rule */}
                  <div style={{ width: 40, height: 3, background: "var(--gold2)", marginBottom: 18 }} />

                  <p className="rp" style={{
                    fontSize: "clamp(13px,1.6vw,15px)",
                    color: "var(--ink3)", lineHeight: 1.85,
                    marginBottom: 24, maxWidth: 520,
                  }}>
                    {HERO_POST.subtitle}
                  </p>
                </div>

                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 18, borderTop: "1px solid var(--rule2)" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", letterSpacing: "0.1em" }}>{HERO_POST.date}</span>
                    <div style={{ width: 1, height: 10, background: "var(--rule)" }} />
                    <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", letterSpacing: "0.1em" }}>{HERO_POST.readTime} read</span>
                  </div>
                  <span className="sf" style={{
                    fontSize: 9, fontWeight: 700, textTransform: "uppercase",
                    letterSpacing: "0.14em", color: "var(--gold2)",
                  }}>
                    Read →
                  </span>
                </div>
              </div>

              {/* Right: image */}
              <div className="hero-img imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 380 }}>
                <img src={HERO_POST.img} alt={HERO_POST.title} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 55%, rgba(26,18,8,.08) 100%)" }} />
              </div>
            </Link>
          </div>

          {/* ── SECONDARY 2-COL ── */}
          <div style={{ marginTop: "clamp(18px,3vw,28px)" }}>
            <div className="sh a3" style={{ marginBottom: 14 }}>
              <span className="sh-l">Latest Stories</span>
              <div className="sh-r" />
            </div>

            <div
              className="sec-grid"
              style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5,
              }}
            >
              {SECONDARY_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="sec-card">
                  {/* Image */}
                  <div className="imgf" style={{ height: "clamp(160px,18vw,220px)", borderBottom: "1px solid var(--rule2)" }}>
                    <img src={post.img} alt={post.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.65) 0%, transparent 55%)" }} />
                    {/* Category + tag on image */}
                    <div style={{ position: "absolute", top: 12, left: 14, display: "flex", gap: 7, alignItems: "center" }}>
                      <span className="sf" style={{
                        fontSize: 7.5, fontWeight: 700, letterSpacing: "0.18em",
                        textTransform: "uppercase", color: "#E8C547",
                        background: "rgba(26,18,8,.65)", padding: "2px 8px",
                        border: "1px solid rgba(232,197,71,.2)",
                      }}>{post.category}</span>
                      {post.tag && <span className="tag-badge tag-new">{post.tag}</span>}
                    </div>
                    {/* Read time on image */}
                    <div style={{ position: "absolute", bottom: 12, right: 14 }}>
                      <span className="sf" style={{ fontSize: 8, color: "rgba(255,255,255,.5)", letterSpacing: "0.1em" }}>{post.readTime} read</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div style={{ padding: "clamp(14px,2vw,22px)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="pf" style={{
                      fontSize: "clamp(1rem,1.8vw,1.28rem)",
                      fontWeight: 700, color: "var(--ink)",
                      lineHeight: 1.22, marginBottom: 10,
                    }}>
                      {post.title}
                    </h3>
                    <p className="rp" style={{
                      fontSize: 12.5, color: "var(--ink4)", lineHeight: 1.75,
                      flex: 1, marginBottom: 14,
                      display: "-webkit-box", WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical" as const, overflow: "hidden",
                    }}>
                      {post.excerpt}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12, borderTop: "1px solid var(--rule2)" }}>
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", letterSpacing: "0.1em" }}>{post.date}</span>
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--gold2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── MAIN 2-COL: GRID POSTS + OPINION COLUMN ── */}
          <div
            className="main-grid"
            style={{
              marginTop: "clamp(22px,3.5vw,36px)",
              display: "grid", gridTemplateColumns: "1fr 340px",
              gap: "clamp(18px,2.5vw,28px)",
              alignItems: "start",
            }}
          >
            {/* LEFT: 4-card grid */}
            <div>
              <div className="sh a3" style={{ marginBottom: 14 }}>
                <span className="sh-l">From the Registry</span>
                <div className="sh-r" />
              </div>
              <div
                className="grid-4"
                style={{
                  display: "grid", gridTemplateColumns: "1fr 1fr",
                  border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5,
                }}
              >
                {GRID_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="grid-card">
                    {/* Small image */}
                    <div className="imgf" style={{ height: 130, borderBottom: "1px solid var(--rule2)" }}>
                      <img src={post.img} alt={post.title} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(26,18,8,.12)" }} />
                      <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                        <span className="cat-label" style={{ color: "#E8C547", fontSize: 7 }}>{post.category}</span>
                      </div>
                    </div>
                    <div style={{ padding: "13px 14px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4 className="pf" style={{
                        fontSize: "0.92rem", fontWeight: 700,
                        color: "var(--ink)", lineHeight: 1.2, marginBottom: 8, flex: 1,
                      }}>
                        {post.title}
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", letterSpacing: "0.1em" }}>{post.readTime}</span>
                        <span className="sf" style={{ fontSize: 8, color: "var(--gold2)", fontWeight: 700 }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Opinion column */}
            <div>
              <div className="sh a3" style={{ marginBottom: 14 }}>
                <span className="sh-l">Analysis & Opinion</span>
                <div className="sh-r" />
              </div>

              <div style={{ border: "1.5px solid var(--ink)", background: "var(--white)" }}>
                {/* Column header */}
                <div style={{ background: "var(--ink)", padding: "14px 18px" }}>
                  <div style={{ height: 2, background: "linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547)", marginBottom: 10 }} />
                  <p className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.25, fontStyle: "italic" }}>
                    The UpForge<br />Perspective
                  </p>
                  <p className="sf" style={{ fontSize: 8, color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "0.16em", marginTop: 6 }}>
                    India · Startups · 2026
                  </p>
                </div>

                {/* Opinion items */}
                <div style={{ padding: "6px 18px 18px" }}>
                  {OPINION_POSTS.map((op, i) => (
                    <Link key={i} href={op.slug} className="op-row">
                      <span className="pf" style={{
                        fontSize: "1.1rem", fontWeight: 900, color: "var(--rule)",
                        lineHeight: 1, flexShrink: 0, width: 22, marginTop: 2,
                        fontStyle: "italic",
                      }}>
                        {op.num}
                      </span>
                      <div style={{ flex: 1 }}>
                        <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, color: "var(--gold2)", textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 5 }}>
                          {op.category}
                        </span>
                        <p className="pf" style={{ fontSize: "0.87rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.28, marginBottom: 5 }}>
                          {op.title}
                        </p>
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", letterSpacing: "0.1em" }}>
                          {op.date}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── NEWSLETTER / CTA STRIP ── */}
          <div className="nl-box a4" style={{ marginTop: "clamp(28px,5vw,52px)" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 24, alignItems: "center" }}>
              <div>
                <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.3em", color: "rgba(232,197,71,.65)", marginBottom: 10 }}>
                  UpForge Intelligence
                </p>
                <p className="pf" style={{ fontSize: "clamp(1.1rem,2.5vw,1.7rem)", fontWeight: 700, color: "white", lineHeight: 1.2, marginBottom: 10 }}>
                  India's most-read startup analysis.<br />
                  <em style={{ color: "#E8C547" }}>Free. Forever.</em>
                </p>
                <p className="rp" style={{ fontSize: 12.5, color: "rgba(255,255,255,.38)", lineHeight: 1.75, maxWidth: 480 }}>
                  Deep dives on founder stories, strategy breakdowns, and sector analysis — delivered to builders who want more than headlines.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
                <Link href="/startup" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "var(--gold2)", color: "var(--ink)",
                  padding: "13px 24px", fontSize: 10, fontWeight: 800,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  fontFamily: "system-ui", whiteSpace: "nowrap",
                  boxShadow: "3px 3px 0 var(--gold3)", textDecoration: "none",
                }}>
                  Browse Registry →
                </Link>
                <Link href="/submit" style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
                  border: "1.5px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.55)",
                  padding: "11px 24px", fontSize: 9.5, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  fontFamily: "system-ui", whiteSpace: "nowrap", textDecoration: "none",
                  background: "transparent",
                }}>
                  Submit Your Startup
                </Link>
              </div>
            </div>
          </div>

          {/* ── STATS TICKER ── */}
          <div style={{ marginTop: "clamp(24px,4vw,44px)", border: "1.5px solid var(--ink)", background: "var(--ink)", display: "flex", overflow: "hidden" }}>
            {[
              { v: "72,000+", l: "Verified Startups" },
              { v: "126+",    l: "Indian Unicorns"   },
              { v: "30+",     l: "Sectors Covered"   },
              { v: "₹950B",   l: "Value Tracked"     },
              { v: "Daily",   l: "Data Updates"      },
            ].map((s, i) => (
              <div key={i} style={{
                padding: "14px 24px", borderRight: "1px solid rgba(255,255,255,.07)",
                flex: 1, textAlign: "center", minWidth: 100,
              }}>
                <p className="pf" style={{ fontSize: "1.4rem", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: 4 }}>{s.v}</p>
                <p className="sf" style={{ fontSize: 7.5, color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>{s.l}</p>
              </div>
            ))}
          </div>

          {/* ── FOOTER NAV ── */}
          <nav aria-label="Blog navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(28px,4vw,44px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none" }}>
              {[
                { l: "Startup Registry",           h: "/startup"              },
                { l: "Indian Unicorns 2026",       h: "/indian-unicorns"      },
                { l: "AI Startups India",          h: "/startup?sector=AI%2FML" },
                { l: "FinTech Startups",           h: "/startup?sector=FinTech" },
                { l: "Submit Your Startup",        h: "/submit"               },
                { l: "Valuation Tool",             h: "/valuation"            },
                { l: "Leadership Lessons Blog",    h: "/blog/leadership-lessons-ind-vs-nz-final-2026" },
                { l: "Startup Ideas Blog",         h: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </main>
      </div>
    </>
  );
}
