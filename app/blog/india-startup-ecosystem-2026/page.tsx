// app/blog/india-startup-ecosystem-2026/page.tsx
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import {
  buildBlogMetadata,
  buildBlogJsonLd,
  SAFE_BLOG_FOOTER_LINKS,
  ALL_BLOG_SLUGS,
  BLOG_BASE_URL,
  SITE_BASE_URL,
} from "../_config/blog.config"

// ---------------------------------------------------------------------------
// POST CONFIG
// datePublished and dateModified are fixed ISO strings — never auto-generated.
// Update dateModified manually when you edit the post content.
// ---------------------------------------------------------------------------
const POST = {
  slug:          "india-startup-ecosystem-2026",
  title:         "India Startup Ecosystem 2026: The Complete Overview",
  description:   "India's startup ecosystem in 2026 — 140,000+ startups, 111 unicorns, $340B+ in combined value. A deep-dive into the sectors, cities, funding trends, government policy, and the structural forces shaping India's startup revolution.",
  keywords: [
    "india startup ecosystem 2026",
    "indian startup ecosystem overview",
    "india startup funding 2026",
    "india third largest startup ecosystem",
    "startup india dpiit 2026",
    "indian startup hubs 2026",
    "india unicorn count 2026",
    "indian vc funding trends",
    "startup india policy 2026",
  ],
  datePublished: "2026-03-01",   // Fixed — do not use new Date()
  dateModified:  "2026-03-15",   // Update manually when content changes
  readTime:      "10 min",
  category:      "Ecosystem Analysis",
  heroImage:     "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  heroImageAlt:  "India Startup Ecosystem 2026 — Complete Overview",
  wordCount:     2800,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ---------------------------------------------------------------------------
// CONTENT DATA
// ---------------------------------------------------------------------------
const SECTIONS = [
  {
    num: "01",
    title: "The Scale of the Opportunity",
    keyword: "India Startup Ecosystem 2026",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80&auto=format",
    imgAlt: "Bengaluru India startup hub",
    body: `India's startup ecosystem did not happen overnight. It was built across two decades of infrastructure investment, talent creation, and policy reform — culminating in a 2026 landscape where 140,000+ registered startups compete across every sector of the economy.

To understand the scale: India adds approximately 1,300 new startups every single month. The country now sits at #3 globally in startup density, behind only the United States and China. And unlike the previous two positions on that list, India's ecosystem is still in its early-growth phase — the infrastructure improvements of the next decade will be more consequential than those of the last.`,
    stat: { val: "140,000+", label: "Registered Startups in India as of 2026" },
    insight: "India is not catching up to Silicon Valley. It is building something different — and potentially more durable.",
  },
  {
    num: "02",
    title: "The Unicorn Economy",
    keyword: "Indian Unicorns 2026",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format",
    imgAlt: "Indian startup funding and unicorn growth",
    body: `India's unicorn count reached 111 in 2026 — representing $340B+ in combined valuation. Twelve of those have crossed the $10B threshold to become decacorns, including Flipkart, Zomato, PhonePe, and Swiggy.

The 2021 super-cycle that produced 44 unicorns in a single year was followed by a necessary correction — funding dropped from $42B to $8.6B between 2021 and 2023. But what emerged from that correction is an ecosystem with stronger fundamentals: better unit economics, more capital-efficient growth, and a generation of founders who have been tested by difficulty and emerged with more discipline.`,
    stat: { val: "111", label: "Indian Unicorns — #3 Globally Behind US & China" },
    insight: "The correction of 2022–2023 was not the end of the India story. It was the editing phase.",
  },
  {
    num: "03",
    title: "The Sectors Leading India's Startup Revolution",
    keyword: "India Startup Sectors 2026",
    img: "https://www.careercounsellingiicc.com/images/service/banner_1696336393.webp",
    imgAlt: "India startup sectors AI fintech edtech",
    body: `No single sector defines India's startup story. FinTech leads with 22 unicorns — built on the India Stack infrastructure of UPI, Aadhaar, and Account Aggregator that the government quietly assembled over a decade. SaaS has produced global champions like Freshworks, Postman, and Chargebee who compete not just in India but on every continent.

EdTech exploded after COVID, consolidated painfully in 2022, and is now emerging with a more sustainable model — PhysicsWallah's ₹999/year JEE course being the clearest proof that radical affordability, not premium pricing, is the winning strategy. D2C brands like Mamaearth, boAt, and Lenskart have demonstrated that Indian consumer companies can build globally competitive brands without a century of distribution advantages.

The newest and fastest-growing sector is AI — with Krutrim, Sarvam AI, and a wave of enterprise AI companies positioning India to be not just a consumer of AI tools but a builder of them.`,
    stat: { val: "22", label: "FinTech Unicorns — India's Most Valuable Startup Sector" },
    insight: "The breadth of India's startup ecosystem is its greatest strength — and its biggest differentiator from every previous tech boom.",
  },
  {
    num: "04",
    title: "The Four Startup Hubs",
    keyword: "India Startup Hubs Bangalore Mumbai Delhi",
    img: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80&auto=format",
    imgAlt: "Bengaluru startup hub India",
    body: `India's startup activity is concentrated in four metropolitan areas that have developed distinct identities and specialisations.

Bengaluru is India's Silicon Valley — home to 60+ unicorns and the birthplace of Flipkart, Zerodha, Razorpay, Unacademy, and the country's entire SaaS sector. The city's combination of IIT/IISc talent, a mature VC ecosystem, and a culture of technical ambition makes it the natural centre of India's startup universe.

Mumbai brings financial capital, media, and D2C brand-building expertise — Nykaa, BrowserStack, Zepto, and Jupiter were all built here. Delhi-NCR has a commerce and logistics strength — Zomato, OYO, boAt, and Lenskart all chose the capital region for its access to distribution networks and government proximity. Hyderabad is the quiet achiever — a growing SaaS and HealthTech hub with significantly lower operating costs than its peers.`,
    stat: { val: "60+", label: "Unicorns from Bengaluru — India's #1 Startup City" },
    insight: "India's startup hubs are specialised, not interchangeable. Where you build determines what you can build.",
  },
  {
    num: "05",
    title: "Government Policy: Startup India & DPIIT",
    keyword: "Startup India Policy DPIIT 2026",
    img: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80&auto=format",
    imgAlt: "India government startup policy DPIIT",
    body: `The Indian government's Startup India initiative, launched in 2016 and administered through the Department for Promotion of Industry and Internal Trade (DPIIT), has been one of the most consequential policy interventions in the history of the Indian economy.

DPIIT-recognised startups receive a three-year income tax holiday, exemption from capital gains tax on qualifying investments, and access to a ₹10,000Cr Fund of Funds for Startups through SIDBI. More than 140,000 startups have received DPIIT recognition — a number that has grown 15x since 2016.

The India Stack — UPI, Aadhaar, DigiLocker, ONDC, Account Aggregator — represents the most ambitious government-built technology infrastructure programme in history. It is the foundation on which every Indian FinTech, HealthTech, and commerce startup is built. Without India Stack, there is no PhonePe. Without Aadhaar, there is no instant KYC. The government built the pipes. Startups built the water.`,
    stat: { val: "₹10,000Cr", label: "Government Fund of Funds for Startups (SIDBI)" },
    insight: "India Stack is the most important piece of startup infrastructure ever built by any government. Full stop.",
  },
  {
    num: "06",
    title: "The Talent Engine",
    keyword: "India Startup Talent 2026",
    img: "https://storage.googleapis.com/referio-cms-hr/talent_engine_b2cd090fd3/talent_engine_b2cd090fd3.png",
    imgAlt: "India engineering talent startup workforce",
    body: `India produces 1.5 million engineering graduates per year — more than any country on earth. The IIT system, NITs, BITS Pilani, and a network of state engineering colleges create a deep bench of technical talent that gives Indian startups a structural cost and capability advantage over competitors in the US, Europe, or Southeast Asia.

Beyond raw engineering talent, India now has a maturing second generation of startup operators — people who joined Flipkart or Paytm in 2013, left in 2017 to join Series A companies, and are now founding their own businesses with playbooks built from direct experience. This is the Flipkart Mafia, the Paytm Mafia, the Razorpay Mafia — each generation of successful companies producing the founders of the next.

The talent multiplier effect is compounding. And it will continue to compound for decades.`,
    stat: { val: "1.5M", label: "Engineering Graduates India Produces Every Year" },
    insight: "India's talent advantage is not just depth. It is the institutional memory that compounds with every generation of successful startups.",
  },
  {
    num: "07",
    title: "The Road Ahead: What 2026–2030 Looks Like",
    keyword: "India Startup Future 2026 2030",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
    imgAlt: "India startup future 2030 AI deep tech",
    body: `The next phase of India's startup ecosystem will be defined by five convergent forces: the maturation of AI-native startups, the global expansion of Indian SaaS companies, the D2C brand buildout into offline markets, the emergence of deep tech in defence and space, and the financialisation of India's 300M+ middle class through wealth management products.

India's IPO market is maturing — Freshworks, Zomato, Nykaa, Mamaearth, Swiggy have all demonstrated that Indian startup companies can access public capital at scale. The exit ecosystem that was missing five years ago is now functioning.

The final frontier is global domination. Freshworks and Postman have already shown it is possible. The next decade will tell us whether India can produce not just regional champions but global category leaders in AI, SaaS, and consumer technology. The fundamentals suggest it can. The ambition is clearly there. The only question is execution.`,
    stat: { val: "$500B+", label: "Projected India Startup Ecosystem Value by 2030" },
    insight: "India's startup story is not in its third act. It is still in the first.",
  },
]

// Related posts — only slugs from ALL_BLOG_SLUGS (all exist)
const RELATED_SLUGS = [
  "top-indian-unicorns-2026",
  "how-to-get-startup-funding-india-2026",
  "best-indian-startup-founders-to-follow-2026",
  "startup-ideas-inspired-by-ind-vs-nz-final-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ---------------------------------------------------------------------------
// CSS — scoped to this page, no @import (font loaded by layout.tsx)
// ---------------------------------------------------------------------------
const PAGE_CSS = `
  .pf  { font-family: var(--font-display), Georgia, serif !important; }
  .rp  { font-family: Georgia, 'Times New Roman', serif; }
  .sf  { font-family: system-ui, -apple-system, sans-serif; }

  :root {
    --parch: #F5F1E8; --parch2: #EDE9DF; --ink: #1A1208;
    --ink3: #5A4A30; --ink4: #8C7D65; --ink5: #BBB0A0;
    --rule: #C8C2B4; --rule2: #D8D2C4;
    --gold: #B45309; --gold2: #D97706; --gold3: #92400E;
    --white: #FDFCF9;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
  .a1 { animation: fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }

  .imgf { position: relative; overflow: hidden; }
  .imgf img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    filter: sepia(14%) contrast(108%);
    transition: transform .6s ease;
  }
  .imgf:hover img { transform: scale(1.03); }

  .blog-card {
    border: 1.5px solid var(--ink);
    background: var(--white);
    overflow: hidden;
    position: relative;
  }
  .blog-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547);
  }

  .stat-pill {
    display: flex; align-items: center; gap: 14px;
    background: var(--ink); padding: 14px 18px; margin: 16px 0;
  }
  .insight {
    display: inline-flex; align-items: center; gap: 8px;
    background: #FEF3C7; border: 1px solid rgba(180,83,9,.25);
    padding: 9px 14px; width: 100%;
  }
  .sh { display: flex; align-items: center; gap: 10px; }
  .sh-l {
    font-size: 8px; font-weight: 700; text-transform: uppercase;
    letter-spacing: .28em; color: var(--ink5);
    font-family: system-ui; white-space: nowrap;
  }
  .sh-r { flex: 1; height: 1px; background: var(--rule2); }

  .rel-card {
    display: flex; flex-direction: column;
    background: var(--white); text-decoration: none;
    transition: transform .15s, box-shadow .15s; position: relative;
  }
  .rel-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2.5px; background: transparent; transition: background .15s;
  }
  .rel-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--ink); z-index: 1;
  }
  .rel-card:hover::before { background: var(--gold2); }

  .dropcap::first-letter {
    font-family: var(--font-display), Georgia, serif;
    font-size: 3.8em; font-weight: 900;
    float: left; line-height: .82;
    margin-right: 8px; margin-top: 6px; color: var(--ink);
  }

  @media (max-width: 900px) {
    .section-grid { grid-template-columns: 1fr !important; }
    .toc-grid     { grid-template-columns: 1fr !important; }
  }
`

// ---------------------------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------------------------
export default function BlogEcosystem() {
  const jsonLd = buildBlogJsonLd(POST)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >
        {/* ── BREADCRUMB ── */}
        <nav
          className="sf a0"
          aria-label="Breadcrumb"
          style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }} itemProp="item">
                  <span itemProp="name">UpForge</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" style={{ color: "var(--rule)" }}>/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" style={{ color: "var(--ink5)", textDecoration: "none" }} itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true" style={{ color: "var(--rule)" }}>/</li>
              <li
                style={{ color: "var(--ink4)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 240 }}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">India Startup Ecosystem 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            {/*
              Hero image is LCP element.
              loading="eager" + fetchPriority="high" tells browser
              to fetch this before anything else on the page.
            */}
            <img
              src={POST.heroImage}
              alt={POST.heroImageAlt}
              loading="eager"
              fetchPriority="high"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(26,18,8,.35) 0%,rgba(26,18,8,.88) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px,5vw,64px)", textAlign: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["Ecosystem", "India 2026", "Deep Dive"].map((t) => (
                  <span key={t} className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 10px" }}>{t}</span>
                ))}
              </div>
              <h1
                className="pf"
                itemProp="headline"
                style={{ fontSize: "clamp(1.8rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.02, color: "white", letterSpacing: "-0.02em", marginBottom: 18, maxWidth: 860 }}
              >
                India Startup Ecosystem 2026:{" "}
                <em style={{ color: "#E8C547" }}>The Complete Overview</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                140,000 startups. 111 unicorns. $340B+ in combined value.
              </p>
            </div>
          </div>

          {/* Article meta bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Published",    v: "1 March 2026" },
                  { l: "Reading Time", v: POST.readTime  },
                  { l: "Category",     v: POST.category  },
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

        {/* ── MAIN CONTENT ── */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* Intro + TOC */}
          <div
            className="a1 toc-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 0, borderBottom: "1px solid var(--rule2)", alignItems: "start" }}
          >
            <div style={{ padding: "clamp(28px,4vw,48px) clamp(16px,3vw,40px) clamp(28px,4vw,48px) 0", borderRight: "1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom: 18 }}>
                <span className="sh-l">Introduction</span>
                <div className="sh-r" />
              </div>
              <p
                className="pf"
                itemProp="description"
                style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18 }}
              >
                India's startup ecosystem in 2026 is not a story about a single company, a single founder, or a single moment.
              </p>
            </div>
            <nav
              aria-label="Article sections"
              style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth: "clamp(200px,26vw,280px)" }}
            >
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">In This Article</span>
                <div className="sh-r" />
              </div>
              {SECTIONS.map((s, i) => (
                
                  key={i}
                  href={`#section-${s.num}`}
                  style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 9, textDecoration: "none" }}
                >
                  <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--gold2)", flexShrink: 0, minWidth: 18 }}>{s.num}</span>
                  <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>{s.title}</span>
                </a>
              ))}
            </nav>
          </div>

          {/* Article sections */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            {SECTIONS.map((sec, idx) => (
              <div
                key={idx}
                id={`section-${sec.num}`}
                className="blog-card"
                style={{ marginBottom: 20 }}
              >
                <div
                  className="section-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 340px" : "340px 1fr",
                    gap: 0,
                    minHeight: 340,
                  }}
                >
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(26,18,8,.6) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold2)" }}>Section {sec.num}</span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{sec.keyword}</span>
                      </div>
                      <h2
                        className="pf"
                        style={{ fontSize: "clamp(1.2rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.15, marginBottom: 18 }}
                      >
                        {sec.title}
                      </h2>
                      {sec.body.split("\n\n").map((para, pi) => (
                        <p
                          key={pi}
                          className={`rp${pi === 0 ? " dropcap" : ""}`}
                          style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}
                        >
                          {para}
                        </p>
                      ))}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div className="stat-pill">
                        <p className="pf" style={{ fontSize: "1.8rem", fontWeight: 900, color: "#E8C547", lineHeight: 1, flexShrink: 0 }}>{sec.stat.val}</p>
                        <p className="sf" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.5 }}>{sec.stat.label}</p>
                      </div>
                      <div className="insight">
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--gold2)", flexShrink: 0 }} aria-hidden="true" />
                        <p className="rp" style={{ fontSize: 12, color: "var(--gold3)", fontStyle: "italic", lineHeight: 1.6 }}>{sec.insight}</p>
                      </div>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left,rgba(26,18,8,.6) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Related posts */}
          <div style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l">Related Reading on UpForge</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/blog/${r.slug}`} className="rel-card">
                  <div style={{ height: 80, background: ["#E8E0D0", "#E0D8CC", "#D8D0C4", "#D0C8BC"][i % 4], display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--rule2)" }}>
                    <span className="pf" style={{ fontSize: "2.8rem", fontWeight: 900, color: "rgba(26,18,8,0.1)" }} aria-hidden="true">{r.title.charAt(0)}</span>
                  </div>
                  <div style={{ padding: "13px 14px 12px" }}>
                    <h3 className="pf" style={{ fontSize: "0.9rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4, lineHeight: 1.2 }}>{r.title}</h3>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>{r.category}</span>
                    <div style={{ marginTop: 8 }}>
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--gold2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Read →</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer nav — only live routes */}
          <nav
            aria-label="Explore UpForge"
            style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}
          >
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="sf"
                    style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </article>
    </>
  )
}
