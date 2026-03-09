// app/blog/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forge — Startup Intelligence, Founder Stories & Strategy | UpForge",
  description:
    "Deep analysis on Indian startups, founder stories, funding guides, unicorn profiles, and leadership lessons. Trusted by founders, investors, and builders across India.",
  keywords: [
    "Indian startup blog",
    "startup founder stories India",
    "startup intelligence India",
    "Indian startup analysis 2026",
    "startup funding guide India",
    "Indian unicorns blog",
  ],
  alternates: { canonical: "https://upforge.in/blog" },
  openGraph: {
    title: "The Forge — Startup Intelligence by UpForge",
    description:
      "Deep analysis on Indian startups, founder stories, funding guides, unicorn profiles, and leadership lessons.",
    url: "https://upforge.in/blog",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-blog.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "The Forge — UpForge Intelligence",
  url: "https://upforge.in/blog",
  description: "Startup analysis, founder stories, and business strategy for India's builders.",
  publisher: {
    "@type": "Organization",
    name: "UpForge",
    logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" },
  },
  blogPost: [
    { "@type": "BlogPosting", headline: "India Startup Ecosystem 2026: State of the Nation",          url: "https://upforge.in/blog/india-startup-ecosystem-2026" },
    { "@type": "BlogPosting", headline: "How to Get Startup Funding in India 2026",                    url: "https://upforge.in/blog/how-to-get-startup-funding-india-2026" },
    { "@type": "BlogPosting", headline: "Top Indian Unicorns 2026: Ranked & Profiled",                 url: "https://upforge.in/blog/top-indian-unicorns-2026" },
    { "@type": "BlogPosting", headline: "25 Best Indian Startup Founders to Follow 2026",              url: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026" },
    { "@type": "BlogPosting", headline: "IND vs NZ Final 2026: 7 Leadership Lessons",                  url: "https://upforge.in/blog/leadership-lessons-ind-vs-nz-final-2026" },
    { "@type": "BlogPosting", headline: "5 Startup Ideas Inspired by IND vs NZ Final 2026",            url: "https://upforge.in/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
  ],
};

// ─── FEATURED HERO POST ───────────────────────────────────────────────────────
// Changed to the highest-traffic article (Ecosystem Report) as cover story
const HERO_POST = {
  title:     "India Startup Ecosystem 2026: The Complete State of the Nation Report",
  subtitle:  "650,000 startups. 125 unicorns. $3.44B raised in Q1 alone. The definitive data-driven picture of where India's startup ecosystem stands, where it's going, and what every founder and investor must understand right now.",
  slug:      "/blog/india-startup-ecosystem-2026",
  category:  "Annual Report",
  date:      "March 2026",
  readTime:  "20 min",
  img:       "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&q=85",
  tag:       "Must Read",
  topics:    ["Funding Trends", "Top Sectors", "City Rankings", "5 Macro Trends", "Policy Landscape"],
};

// ─── SECONDARY 2-COL STRIP ───────────────────────────────────────────────────
const SECONDARY_POSTS = [
  {
    title:    "How to Get Startup Funding in India 2026: Complete Founder's Guide",
    excerpt:  "DPIIT recognition, SISFS grants (₹945Cr corpus), angel networks, VC criteria, 90-day fundraising playbook, and the 7 mistakes that kill Indian fundraises.",
    slug:     "/blog/how-to-get-startup-funding-india-2026",
    category: "Funding Guide",
    date:     "March 2026",
    readTime: "12 min",
    img:      "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=900&q=80",
    tag:      "High Traffic",
    tagStyle: "new",   // green badge
  },
  {
    title:    "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked & Profiled",
    excerpt:  "125 Indian startups have crossed the $1 billion mark. Profiles, valuations, moat analysis, and the one founder lesson to extract from each company's rise.",
    slug:     "/blog/top-indian-unicorns-2026",
    category: "Unicorn Report",
    date:     "March 2026",
    readTime: "15 min",
    img:      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    tag:      "Trending",
    tagStyle: "trending",  // gold badge
  },
];

// ─── 4-CARD GRID ─────────────────────────────────────────────────────────────
const GRID_POSTS = [
  {
    title:    "25 Best Indian Startup Founders to Follow in 2026",
    excerpt:  "Philosophies, playbooks, and patterns of India's most influential builders — from Alakh Pandey to Nithin Kamath to Kunal Shah.",
    slug:     "/blog/best-indian-startup-founders-to-follow-2026",
    category: "Founder Profiles",
    date:     "March 2026",
    readTime: "18 min",
    img:      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    accent:   "#2563EB",
  },
  {
    title:    "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    excerpt:  "Calm under pressure, team strategy, resilience — seven principles born from the crease that define both great captains and great founders.",
    slug:     "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "Leadership",
    date:     "March 2026",
    readTime: "7 min",
    img:      "https://wpleague.in/wp-content/uploads/2026/03/Josh-Folder-2026-03-05T232154.662-1772733178087-1024x536.webp",
    accent:   "#B45309",
  },
  {
    title:    "5 Startup Ideas Inspired by the IND vs NZ Final 2026",
    excerpt:  "From AI cricket analytics to youth talent discovery — five businesses someone should build right now, born from the most-watched match of 2026.",
    slug:     "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",
    category: "Startup Ideas",
    date:     "March 2026",
    readTime: "6 min",
    img:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    accent:   "#059669",
  },
  {
    title:    "How Nithin Kamath Built Zerodha Without Raising a Rupee",
    excerpt:  "India's largest stockbroker was built bootstrapped with calm, contrarian decisions. The story no MBA teaches.",
    slug:     "/startup/zerodha",
    category: "Founder Story",
    date:     "February 2026",
    readTime: "5 min",
    img:      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
    accent:   "#2563EB",
  },
];

// ─── OPINION / ANALYSIS COLUMN ───────────────────────────────────────────────
const OPINION_POSTS = [
  { num: "I",   title: "Why India's Startup Valuations Are Being Re-Set — and What It Means for Founders",     category: "Opinion",          date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
  { num: "II",  title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",        category: "Analysis",         date: "Mar 2026", slug: "/blog/how-to-get-startup-funding-india-2026" },
  { num: "III", title: "Sports Tech in India: The ₹50,000Cr Market That Doesn't Exist Yet",                    category: "Sector Deep Dive", date: "Feb 2026", slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026" },
  { num: "IV",  title: "What the IND vs NZ Final Tells Us About Indian Consumer Attention in 2026",            category: "Trend Watch",      date: "Mar 2026", slug: "/blog/leadership-lessons-ind-vs-nz-final-2026" },
  { num: "V",   title: "Founder-Market Fit: Why Domain Obsession Beats MBA Strategy Every Time",               category: "Strategy",         date: "Mar 2026", slug: "/blog/best-indian-startup-founders-to-follow-2026" },
  { num: "VI",  title: "Bharat Is the New Engine: Why Tier 2 Startups Will Define India's Next Decade",        category: "Trend Watch",      date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
];

// ─── ALL PUBLISHED — archive table ───────────────────────────────────────────
const ALL_POSTS = [
  { title: "India Startup Ecosystem 2026: State of the Nation",         slug: "/blog/india-startup-ecosystem-2026",                    category: "Annual Report",    date: "Mar 2026", readTime: "20 min" },
  { title: "How to Get Startup Funding in India 2026",                  slug: "/blog/how-to-get-startup-funding-india-2026",            category: "Funding Guide",    date: "Mar 2026", readTime: "12 min" },
  { title: "Top Indian Unicorns 2026: Ranked & Profiled",               slug: "/blog/top-indian-unicorns-2026",                        category: "Unicorn Report",   date: "Mar 2026", readTime: "15 min" },
  { title: "25 Best Indian Startup Founders to Follow 2026",            slug: "/blog/best-indian-startup-founders-to-follow-2026",     category: "Founder Profiles", date: "Mar 2026", readTime: "18 min" },
  { title: "IND vs NZ Final 2026: 7 Leadership Lessons",                slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",         category: "Leadership",       date: "Mar 2026", readTime: "7 min"  },
  { title: "5 Startup Ideas Inspired by IND vs NZ Final 2026",          slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",  category: "Startup Ideas",    date: "Mar 2026", readTime: "6 min"  },
];

// ─── CATEGORY PILLS ───────────────────────────────────────────────────────────
const CATEGORIES = [
  { name: "All",             active: true  },
  { name: "Annual Report",   active: false },
  { name: "Funding Guide",   active: false },
  { name: "Unicorn Report",  active: false },
  { name: "Founder Profiles",active: false },
  { name: "Leadership",      active: false },
  { name: "Startup Ideas",   active: false },
  { name: "Analysis",        active: false },
  { name: "Opinion",         active: false },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
          --goldlt: #FEF3C7;
          --white:  #FDFCF9;
          --green:  #15803D;
        }

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

        /* ── TAG BADGE ── */
        .tag-badge {
          display: inline-block; font-size: 7px; font-weight: 800;
          letter-spacing: .22em; text-transform: uppercase;
          padding: 2px 8px; font-family: system-ui;
        }
        .tag-trending { background: #FEFCE8; color: #854D0E; border: 1px solid rgba(133,77,14,.25); }
        .tag-new      { background: #F0FDF4; color: var(--green); border: 1px solid rgba(21,128,61,.25); }
        .tag-mustread { background: var(--goldlt); color: var(--gold3); border: 1px solid rgba(180,83,9,.3); }

        /* ── CATEGORY LABEL ── */
        .cat-label {
          font-size: 7.5px; font-weight: 700; letter-spacing: .2em;
          text-transform: uppercase; color: var(--gold2);
          font-family: system-ui;
        }

        /* ── HERO CARD ── */
        .hero-card {
          display: grid; grid-template-columns: 1fr 440px;
          border: 1.5px solid var(--ink); overflow: hidden;
          background: var(--white); position: relative;
          text-decoration: none;
          transition: transform .2s, box-shadow .2s;
        }
        .hero-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3.5px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3));
        }
        .hero-card:hover { box-shadow: 5px 5px 0 var(--ink); transform: translate(-2px,-2px); }

        /* ── SECONDARY CARDS ── */
        .sec-card {
          background: var(--white); text-decoration: none; display: flex; flex-direction: column;
          position: relative; overflow: hidden;
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

        /* ── ARCHIVE ROW ── */
        .arch-row {
          display: grid; grid-template-columns: 1fr 150px 90px 75px;
          align-items: center; gap: 16px;
          padding: 13px 16px; border-bottom: 1px solid var(--rule2);
          text-decoration: none; background: var(--white);
          transition: background .12s, padding-left .15s;
        }
        .arch-row:last-child { border-bottom: none; }
        .arch-row:hover { background: var(--parch2); padding-left: 22px; }

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
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547, var(--gold2), var(--gold3));
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 900px) {
          .hero-card { grid-template-columns: 1fr !important; }
          .hero-card .hero-img { height: 260px !important; border-right: none !important; border-bottom: 1.5px solid var(--ink) !important; order: -1; }
          .sec-grid { grid-template-columns: 1fr !important; }
          .main-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 640px) {
          .grid-4 { grid-template-columns: 1fr 1fr !important; }
          .arch-row { grid-template-columns: 1fr !important; }
          .arch-meta { display: none !important; }
        }
        @media (max-width: 400px) {
          .grid-4 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <div className="rp" style={{ minHeight: "100vh", background: "var(--parch)" }}>

        {/* ══ MASTHEAD ══════════════════════════════════════════════════════════ */}
        <header className="a0" style={{ background: "var(--parch)", borderBottom: "3px solid var(--ink)" }}>
          <div style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>

            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid var(--rule2)", flexWrap: "wrap", gap: 8 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <span className="ldot" />
                <span className="sf" style={{ fontSize: 8.5, color: "var(--green)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>
                  Live · 6 Articles Published
                </span>
                <span className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", letterSpacing: "0.1em" }}>
                  {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
                </span>
              </div>
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                {[
                  { l: "Registry", h: "/startup"        },
                  { l: "Unicorns", h: "/indian-unicorns" },
                  { l: "Submit",   h: "/submit"          },
                  { l: "Valuation",h: "/report"          },
                ].map(n => (
                  <Link key={n.h} href={n.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink4)", textTransform: "uppercase", letterSpacing: "0.14em", fontWeight: 700, textDecoration: "none" }}>
                    {n.l}
                  </Link>
                ))}
              </div>
            </div>

            {/* Nameplate */}
            <div style={{ textAlign: "center", padding: "clamp(20px,3.5vw,40px) 0 clamp(14px,2.5vw,24px)", borderBottom: "1px solid var(--rule2)" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 14 }}>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
                <span className="sf" style={{ fontSize: 8, letterSpacing: "0.42em", textTransform: "uppercase", color: "var(--ink5)", fontWeight: 700 }}>
                  UpForge · Intelligence
                </span>
                <div style={{ height: 1, width: 60, background: "var(--rule)" }} />
              </div>
              <h1 className="pf" style={{ fontSize: "clamp(2.8rem,8vw,6.5rem)", fontWeight: 900, lineHeight: 0.88, color: "var(--ink)", letterSpacing: "-0.03em", marginBottom: 16 }}>
                The Forge
              </h1>
              <p className="rp" style={{ fontSize: "clamp(12px,1.6vw,15px)", fontStyle: "italic", color: "var(--ink4)", letterSpacing: "0.02em" }}>
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

        {/* ══ MAIN ══════════════════════════════════════════════════════════════ */}
        <main style={{ maxWidth: 1340, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(56px,8vw,100px)" }}>

          {/* ── HERO ── */}
          <div style={{ padding: "clamp(20px,3vw,36px) 0 0" }}>
            <div className="sh a2" style={{ marginBottom: 14 }}>
              <span className="sh-l">Cover Story · Most Comprehensive</span>
              <div className="sh-r" />
            </div>

            <Link href={HERO_POST.slug} className="hero-card a2">
              {/* Content */}
              <div style={{ padding: "clamp(24px,3.5vw,48px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                    <span className="cat-label">{HERO_POST.category}</span>
                    <div style={{ width: 1, height: 11, background: "var(--rule)" }} />
                    <span className="tag-badge tag-mustread">{HERO_POST.tag}</span>
                  </div>
                  <h2 className="pf" style={{ fontSize: "clamp(1.5rem,3.2vw,2.6rem)", fontWeight: 900, lineHeight: 1.08, color: "var(--ink)", letterSpacing: "-0.02em", marginBottom: 18 }}>
                    {HERO_POST.title}
                  </h2>
                  <div style={{ width: 40, height: 3, background: "var(--gold2)", marginBottom: 18 }} />
                  <p className="rp" style={{ fontSize: "clamp(13px,1.6vw,15px)", color: "var(--ink3)", lineHeight: 1.85, marginBottom: 20, maxWidth: 520 }}>
                    {HERO_POST.subtitle}
                  </p>
                  {/* Topic pills */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {HERO_POST.topics.map(t => (
                      <span key={t} className="sf" style={{ fontSize: 8, color: "var(--ink4)", border: "1px solid var(--rule2)", padding: "3px 9px", background: "var(--parch2)" }}>{t}</span>
                    ))}
                  </div>
                </div>
                {/* Meta */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 18, marginTop: 20, borderTop: "1px solid var(--rule2)" }}>
                  <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                    <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", letterSpacing: "0.1em" }}>{HERO_POST.date}</span>
                    <div style={{ width: 1, height: 10, background: "var(--rule)" }} />
                    <span className="sf" style={{ fontSize: 9, color: "var(--ink5)", letterSpacing: "0.1em" }}>{HERO_POST.readTime} read</span>
                  </div>
                  <span className="sf" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", color: "var(--gold2)" }}>
                    Read Report →
                  </span>
                </div>
              </div>
              {/* Image */}
              <div className="hero-img imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 380 }}>
                <img src={HERO_POST.img} alt={HERO_POST.title} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, transparent 55%, rgba(26,18,8,.08) 100%)" }} />
              </div>
            </Link>
          </div>

          {/* ── SECONDARY 2-COL ── */}
          <div style={{ marginTop: "clamp(18px,3vw,28px)" }}>
            <div className="sh a3" style={{ marginBottom: 14 }}>
              <span className="sh-l">Essential Reads · High Traffic</span>
              <div className="sh-r" />
            </div>
            <div className="sec-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
              {SECONDARY_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="sec-card">
                  <div className="imgf" style={{ height: "clamp(160px,18vw,220px)", borderBottom: "1px solid var(--rule2)" }}>
                    <img src={post.img} alt={post.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.65) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 12, left: 14, display: "flex", gap: 7, alignItems: "center" }}>
                      <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#E8C547", background: "rgba(26,18,8,.65)", padding: "2px 8px", border: "1px solid rgba(232,197,71,.2)" }}>
                        {post.category}
                      </span>
                      <span className={`tag-badge tag-${post.tagStyle}`}>{post.tag}</span>
                    </div>
                    <div style={{ position: "absolute", bottom: 12, right: 14 }}>
                      <span className="sf" style={{ fontSize: 8, color: "rgba(255,255,255,.5)", letterSpacing: "0.1em" }}>{post.readTime} read</span>
                    </div>
                  </div>
                  <div style={{ padding: "clamp(14px,2vw,22px)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="pf" style={{ fontSize: "clamp(1rem,1.8vw,1.28rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.22, marginBottom: 10 }}>
                      {post.title}
                    </h3>
                    <p className="rp" style={{ fontSize: 12.5, color: "var(--ink4)", lineHeight: 1.75, flex: 1, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
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

          {/* ── MAIN 2-COL: 4-CARD GRID + OPINION SIDEBAR ── */}
          <div className="main-grid" style={{ marginTop: "clamp(22px,3.5vw,36px)", display: "grid", gridTemplateColumns: "1fr 340px", gap: "clamp(18px,2.5vw,28px)", alignItems: "start" }}>

            {/* LEFT: 4-card grid */}
            <div>
              <div className="sh a3" style={{ marginBottom: 14 }}>
                <span className="sh-l">Latest Articles</span>
                <div className="sh-r" />
              </div>
              <div className="grid-4" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
                {GRID_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="grid-card">
                    <div className="imgf" style={{ height: 130, borderBottom: "1px solid var(--rule2)" }}>
                      <img src={post.img} alt={post.title} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(26,18,8,.12)" }} />
                      {/* Per-post accent line */}
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: post.accent }} />
                      <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                        <span className="cat-label" style={{ color: "#E8C547", fontSize: 7 }}>{post.category}</span>
                      </div>
                    </div>
                    <div style={{ padding: "13px 14px 14px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4 className="pf" style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.22, marginBottom: 8, flex: 1 }}>
                        {post.title}
                      </h4>
                      <p className="rp" style={{ fontSize: 11, color: "var(--ink4)", lineHeight: 1.6, marginBottom: 8, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>
                        {post.excerpt}
                      </p>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", letterSpacing: "0.1em" }}>{post.readTime}</span>
                        <span className="sf" style={{ fontSize: 8, color: "var(--gold2)", fontWeight: 700 }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* RIGHT: Opinion column + valuation CTA */}
            <div>
              <div className="sh a3" style={{ marginBottom: 14 }}>
                <span className="sh-l">Analysis & Opinion</span>
                <div className="sh-r" />
              </div>

              <div style={{ border: "1.5px solid var(--ink)", background: "var(--white)" }}>
                <div style={{ background: "var(--ink)", padding: "14px 18px" }}>
                  <div style={{ height: 2, background: "linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547)", marginBottom: 10 }} />
                  <p className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.25, fontStyle: "italic" }}>
                    The UpForge<br />Perspective
                  </p>
                  <p className="sf" style={{ fontSize: 8, color: "rgba(255,255,255,.35)", textTransform: "uppercase", letterSpacing: "0.16em", marginTop: 6 }}>
                    India · Startups · 2026
                  </p>
                </div>
                <div style={{ padding: "6px 18px 18px" }}>
                  {OPINION_POSTS.map((op, i) => (
                    <Link key={i} href={op.slug} className="op-row">
                      <span className="pf" style={{ fontSize: "1.1rem", fontWeight: 900, color: "var(--rule)", lineHeight: 1, flexShrink: 0, width: 22, marginTop: 2, fontStyle: "italic" }}>
                        {op.num}
                      </span>
                      <div style={{ flex: 1 }}>
                        <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, color: "var(--gold2)", textTransform: "uppercase", letterSpacing: "0.14em", display: "block", marginBottom: 5 }}>
                          {op.category}
                        </span>
                        <p className="pf" style={{ fontSize: "0.87rem", fontWeight: 700, color: "var(--ink)", lineHeight: 1.28, marginBottom: 5 }}>
                          {op.title}
                        </p>
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", letterSpacing: "0.1em" }}>{op.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Valuation CTA in sidebar */}
              <div style={{ marginTop: 12, background: "var(--ink)", padding: "20px 18px", border: "1.5px solid var(--ink)" }}>
                <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.24em", color: "rgba(232,197,71,.6)", marginBottom: 8 }}>Free AI Tool</p>
                <p className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "white", lineHeight: 1.3, marginBottom: 10 }}>
                  Startup Valuation<br /><em style={{ color: "#E8C547" }}>Report — Free</em>
                </p>
                <p className="sf" style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)", lineHeight: 1.6, marginBottom: 14 }}>
                  AI-powered analysis benchmarked against 500+ Indian startups. Takes 3 minutes.
                </p>
                <Link href="/report" style={{ display: "block", textAlign: "center", background: "var(--gold2)", color: "var(--ink)", padding: "10px", textDecoration: "none", fontFamily: "system-ui", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  Generate Free Report →
                </Link>
              </div>
            </div>
          </div>

          {/* ── ALL PUBLISHED ARTICLES — archive table ── */}
          <div style={{ marginTop: "clamp(28px,4vw,44px)" }}>
            <div className="sh a4" style={{ marginBottom: 14 }}>
              <span className="sh-l">All Published Articles — {ALL_POSTS.length} Articles · March 2026</span>
              <div className="sh-r" />
            </div>

            <div style={{ border: "1.5px solid var(--ink)", background: "var(--ink)", display: "flex", flexDirection: "column", gap: "1.5px" }}>
              {/* Table header */}
              <div style={{ background: "var(--ink)", padding: "8px 16px", display: "grid", gridTemplateColumns: "1fr 150px 90px 75px", gap: 16 }}>
                {["Article", "Category", "Published", "Read Time"].map(h => (
                  <span key={h} className="sf" style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.28)" }}>{h}</span>
                ))}
              </div>
              {ALL_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="arch-row">
                  <p className="pf" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink)", margin: 0, lineHeight: 1.3 }}>{post.title}</p>
                  <span className="arch-meta sf" style={{ fontSize: 9, color: "var(--gold)", border: "1px solid rgba(180,83,9,.3)", padding: "2px 8px", textAlign: "center" }}>{post.category}</span>
                  <span className="arch-meta sf" style={{ fontSize: 9, color: "var(--ink4)" }}>{post.date}</span>
                  <span className="arch-meta sf" style={{ fontSize: 9, color: "var(--ink5)" }}>{post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CTA STRIP ── */}
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
                  6 in-depth articles — funding guides, unicorn profiles, founder playbooks, ecosystem reports — built for builders who want more than headlines.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
                <Link href="/startup" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "var(--gold2)", color: "var(--ink)", padding: "13px 24px", fontSize: 10, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "system-ui", whiteSpace: "nowrap", boxShadow: "3px 3px 0 var(--gold3)", textDecoration: "none" }}>
                  Browse Registry →
                </Link>
                <Link href="/submit" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8, border: "1.5px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.55)", padding: "11px 24px", fontSize: 9.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "system-ui", whiteSpace: "nowrap", textDecoration: "none", background: "transparent" }}>
                  Submit Your Startup
                </Link>
              </div>
            </div>
          </div>

          {/* ── STATS TICKER ── */}
          <div style={{ marginTop: "clamp(24px,4vw,44px)", border: "1.5px solid var(--ink)", background: "var(--ink)", display: "flex", overflow: "hidden" }}>
            {[
              { v: "6",       l: "Articles Published" },
              { v: "650K+",   l: "Registered Startups" },
              { v: "125+",    l: "Indian Unicorns"      },
              { v: "₹950B",   l: "Value Tracked"        },
              { v: "$3.44B",  l: "Q1 2026 Funding"      },
            ].map((s, i) => (
              <div key={i} style={{ padding: "14px 24px", borderRight: "1px solid rgba(255,255,255,.07)", flex: 1, textAlign: "center", minWidth: 100 }}>
                <p className="pf" style={{ fontSize: "1.4rem", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: 4 }}>{s.v}</p>
                <p className="sf" style={{ fontSize: 7.5, color: "rgba(255,255,255,.3)", textTransform: "uppercase", letterSpacing: "0.16em", fontWeight: 700 }}>{s.l}</p>
              </div>
            ))}
          </div>

          {/* ── FOOTER NAV ── */}
          <nav aria-label="Blog navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(28px,4vw,44px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none" }}>
              {[
                { l: "Startup Registry",          h: "/startup"                                             },
                { l: "Indian Unicorns 2026",       h: "/blog/top-indian-unicorns-2026"                      },
                { l: "Startup Funding Guide 2026", h: "/blog/how-to-get-startup-funding-india-2026"          },
                { l: "Founders to Follow 2026",    h: "/blog/best-indian-startup-founders-to-follow-2026"   },
                { l: "Ecosystem Report 2026",      h: "/blog/india-startup-ecosystem-2026"                  },
                { l: "Leadership Lessons Blog",    h: "/blog/leadership-lessons-ind-vs-nz-final-2026"       },
                { l: "Startup Ideas Blog",         h: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026"},
                { l: "Free Valuation Tool",        h: "/report"                                             },
                { l: "Submit Your Startup",        h: "/submit"                                             },
                { l: "AI Startups India",          h: "/startup?sector=AI%2FML"                             },
                { l: "FinTech Startups",           h: "/startup?sector=FinTech"                             },
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
