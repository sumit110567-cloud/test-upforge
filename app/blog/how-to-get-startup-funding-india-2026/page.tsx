// app/blog/how-to-get-startup-funding-india-2026/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "How to Get Startup Funding in India 2026: Complete Founder's Guide | UpForge",
  description:
    "The definitive guide to startup funding in India 2026. Covers angel investors, VCs, government grants (SISFS, DPIIT), seed funds, pitch strategy, and investor-ready metrics every Indian founder must know.",
  keywords: [
    "startup funding India 2026",
    "how to get startup funding India",
    "DPIIT recognition 2026",
    "startup India seed fund scheme",
    "angel investors India",
    "venture capital India startups",
    "pre-seed funding India",
    "Series A India 2026",
    "government grants for startups India",
    "how to raise funds for startup India",
  ],
  openGraph: {
    title: "How to Get Startup Funding in India 2026 | UpForge",
    description:
      "Complete guide for Indian founders — angel investors, VCs, DPIIT, SISFS grants, pitch templates, valuation benchmarks, and the exact steps to raise your first round.",
    url: "https://upforge.in/blog/how-to-get-startup-funding-india-2026",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Startup funding India 2026 guide — UpForge",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Get Startup Funding in India 2026 | UpForge",
    description:
      "Everything Indian founders need to raise their first round in 2026 — from ₹20L seed grants to Series A.",
  },
  alternates: {
    canonical: "https://upforge.in/blog/how-to-get-startup-funding-india-2026",
  },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Get Startup Funding in India 2026: Complete Founder's Guide",
  description:
    "The definitive 2026 guide to raising startup funding in India — DPIIT grants, angel investors, venture capital, pitch strategy, and investor-ready metrics.",
  image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=85",
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Organization", name: "UpForge Editorial", url: "https://upforge.in" },
  publisher: {
    "@type": "Organization",
    name: "UpForge",
    logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" },
  },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://upforge.in/blog/how-to-get-startup-funding-india-2026" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://upforge.in/blog" },
      { "@type": "ListItem", position: 3, name: "Startup Funding", item: "https://upforge.in/blog/how-to-get-startup-funding-india-2026" },
    ],
  },
};

// ─── SHARED DESIGN TOKENS ─────────────────────────────────────────────────────
const T = {
  parch:  "#F5F1E8",
  parch2: "#EDE9DF",
  parch3: "#E6E1D6",
  ink:    "#1A1208",
  ink2:   "#2C2010",
  ink3:   "#5A4A30",
  ink4:   "#8C7D65",
  ink5:   "#BBB0A0",
  rule:   "#C8C2B4",
  rule2:  "#D8D2C4",
  gold:   "#B45309",
  gold2:  "#D97706",
  gold3:  "#92400E",
  goldlt: "#FEF3C7",
  white:  "#FDFCF9",
  green:  "#15803D",
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BlogFundingGuide() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        style={{ background: T.parch, fontFamily: "'Georgia','Times New Roman',serif", color: T.ink, lineHeight: 1.75 }}
      >
        {/* ── BREADCRUMB ── */}
        <div style={{ background: T.parch2, borderBottom: `1px solid ${T.rule}`, padding: "10px clamp(16px,4vw,40px)" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", gap: 6, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
              {[["Home", "/"], ["Blog", "/blog"], ["Startup Funding 2026", "#"]].map(([label, href], i, arr) => (
                <li key={label as string} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {href === "#"
                    ? <span style={{ fontSize: 11, color: T.ink4, fontFamily: "system-ui,sans-serif" }}>{label}</span>
                    : <Link href={href as string} style={{ fontSize: 11, color: T.gold, textDecoration: "none", fontFamily: "system-ui,sans-serif" }}>{label}</Link>
                  }
                  {i < arr.length - 1 && <span style={{ color: T.rule, fontSize: 10 }}>›</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>

          {/* ── MASTHEAD ── */}
          <header style={{ borderBottom: `3px solid ${T.ink}`, padding: "clamp(28px,5vw,56px) 0 clamp(20px,4vw,36px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(18px,3vw,32px)", flexWrap: "wrap", gap: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui,sans-serif", margin: 0 }}>
                9 March 2026 · UpForge · Startup Intelligence
              </p>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui,sans-serif", border: `1px solid ${T.gold}`, padding: "2px 10px" }}>
                Funding Guide
              </span>
            </div>

            <div style={{ textAlign: "center", paddingBottom: "clamp(18px,3vw,32px)", borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(16px,3vw,28px)" }}>
              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-.02em", color: T.ink, margin: "0 0 14px" }}>
                How to Get Startup Funding<br />
                <em style={{ fontStyle: "italic", color: T.gold }}>in India — 2026 Edition</em>
              </h1>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: T.ink3, maxWidth: 660, margin: "0 auto", fontStyle: "italic" }}>
                The complete, no-fluff guide every Indian founder needs — from your first ₹20L government grant to closing a Series A with top-tier VCs.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 18 }}>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
                <span style={{ color: T.rule, fontSize: 14 }}>✦</span>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
              </div>
            </div>

            {/* Byline */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 11, color: T.ink4, fontFamily: "system-ui,sans-serif" }}>
              <span>By <strong style={{ color: T.ink3 }}>UpForge Editorial</strong></span>
              <span style={{ color: T.rule }}>·</span>
              <span>12 min read</span>
              <span style={{ color: T.rule }}>·</span>
              <span>Pre-Seed · Seed · Series A · Government Grants</span>
            </div>
          </header>

          {/* ── HERO IMAGE ── */}
          <figure style={{ margin: "clamp(20px,4vw,36px) 0", borderBottom: `1px solid ${T.rule}`, paddingBottom: "clamp(20px,4vw,36px)" }}>
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&q=85"
              alt="Indian startup founders planning fundraising strategy"
              style={{ width: "100%", height: "clamp(220px,35vw,440px)", objectFit: "cover", display: "block", filter: "sepia(10%) contrast(108%)" }}
            />
            <figcaption style={{ fontSize: 10, color: T.ink5, marginTop: 8, fontFamily: "system-ui,sans-serif", fontStyle: "italic" }}>
              India has over 650,000 recognised startups. Knowing where to look for capital separates the companies that scale from those that stall.
            </figcaption>
          </figure>

          {/* ── BODY: 2-column layout ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr clamp(240px,28%,300px)", gap: "clamp(24px,5vw,56px)", alignItems: "start" }}>

            {/* LEFT: main article */}
            <div>

              {/* Opening drop-cap paragraph */}
              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 20, color: T.ink2 }}>
                <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 900, float: "left", lineHeight: 0.82, marginRight: 8, marginTop: 8, color: T.ink }}>I</span>
                ndia is now the world's third-largest startup ecosystem with over 650,000 recognised companies and 125 unicorns. Yet the single most common reason Indian startups die — not bad products, not wrong markets — is running out of money before they find their footing. This guide tells you exactly how to fix that.
              </p>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 24, color: T.ink2 }}>
                In 2026, Indian startups raised $3.44 billion in the first quarter alone. The capital is there. What most founders lack is a structured understanding of where to look, how to qualify, and what investors actually want to see before they write a cheque.
              </p>

              {/* §1 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `2px solid ${T.ink}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§01</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  The Funding Ladder: Know Your Stage
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                Before approaching any investor, you need to know exactly which rung of the ladder you are standing on. The amount you can raise, who will talk to you, and what proof they need — all of it depends on your current stage.
              </p>

              {/* Funding stage table */}
              <div style={{ border: `1.5px solid ${T.ink}`, background: T.ink, display: "flex", flexDirection: "column", gap: "1.5px", marginBottom: 24 }}>
                {[
                  ["Idea / Pre-Seed", "₹5L – ₹50L", "Government grants, F&F, micro-angels", "Concept + passionate founder"],
                  ["Seed", "₹50L – ₹5Cr", "Angel investors, angel networks, early-stage VCs", "MVP + 50–200 paying users"],
                  ["Pre-Series A", "₹5Cr – ₹20Cr", "Institutional VCs, corporate VCs", "₹50L–₹2Cr ARR, clear unit economics"],
                  ["Series A", "₹20Cr – ₹100Cr", "Top-tier VCs (Sequoia, Accel, Blume)", "Strong MoM growth, defensible moat"],
                  ["Series B+", "₹100Cr+", "Growth funds, PE, international VCs", "Market leadership, path to profitability"],
                ].map(([stage, range, investors, proof], i) => (
                  <div key={i} style={{ background: i % 2 === 0 ? T.white : T.parch2, padding: "12px 14px", display: "grid", gridTemplateColumns: "160px 1fr 1fr", gap: 12 }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13, fontWeight: 700, color: T.ink, margin: 0 }}>{stage}</p>
                    <div>
                      <p style={{ fontSize: 11, fontWeight: 700, color: T.gold, margin: "0 0 2px", fontFamily: "system-ui,sans-serif" }}>{range}</p>
                      <p style={{ fontSize: 10.5, color: T.ink4, margin: 0, fontFamily: "system-ui,sans-serif" }}>{investors}</p>
                    </div>
                    <p style={{ fontSize: 10.5, color: T.ink3, margin: 0, fontFamily: "system-ui,sans-serif", fontStyle: "italic" }}>{proof}</p>
                  </div>
                ))}
              </div>

              {/* §2 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§02</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  Government Funding: ₹945 Crore Waiting for You
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                Most Indian founders skip government funding because they assume it is too slow, too bureaucratic, or meant for someone else. This is a mistake that costs them lakhs. The Indian government has committed ₹945 crore through the Startup India Seed Fund Scheme (SISFS) alone — and it disburses through 300+ incubators across the country.
              </p>

              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 700, color: T.ink, margin: "20px 0 10px" }}>
                Startup India Seed Fund Scheme (SISFS)
              </h3>
              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                The SISFS provides up to ₹20 lakh as a grant for Proof of Concept, prototype development, and product trials. If you progress to commercialisation, a further ₹50 lakh is available as convertible debt. This is non-dilutive capital — you don't give up equity. The catch: you must be DPIIT-recognised and apply through a listed incubator rather than directly to the government.
              </p>

              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 700, color: T.ink, margin: "20px 0 10px" }}>
                DPIIT Recognition: Your First Step
              </h3>
              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                Before anything else, get DPIIT recognition. It unlocks tax exemptions under Section 80-IAC, self-certification for labour laws, fast-tracked patent filing at 80% discounted fees, and eligibility for every government scheme. The application is free, takes 2–3 weeks, and the eligibility criteria are simple: incorporated within the last ten years, annual turnover under ₹100 crore, innovation-led and scalable.
              </p>

              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 700, color: T.ink, margin: "20px 0 10px" }}>
                State-Level Grants (Often Overlooked)
              </h3>
              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                Karnataka's Elevate program, Tamil Nadu's TANSEED 6.0, Kerala's KSUM, and Maharashtra's MahaFund each offer ₹10–50 lakh in grants to early-stage startups in their state. Tamil Nadu alone facilitated $9.6 million through StartupTN's partner network in late 2024. If you are building in a Tier 2 or Tier 3 city, these programs specifically seek you out — the competition is far lower than metro-focused programmes.
              </p>

              {/* §3 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§03</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  Angel Investors: India's Most Active Early-Stage Capital
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                Angel investors represent the most active early-stage capital pool in India. Key networks include Indian Angel Network (IAN), Mumbai Angels, Lead Angels, Chennai Angels, and LetsVenture — which alone has facilitated funding for over 784 rounds. Individual cheque sizes typically range from ₹25 lakh to ₹2 crore, with networked syndicates going up to ₹5–10 crore.
              </p>

              {/* Pull quote */}
              <blockquote style={{ borderLeft: `4px solid ${T.gold}`, paddingLeft: 20, margin: "clamp(20px,4vw,32px) 0", background: T.goldlt }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.2rem)", fontWeight: 700, fontStyle: "italic", color: T.ink, margin: 0, padding: "14px 0" }}>
                  "The single most important thing angels look for is not the idea — it is the founder's ability to execute. Show traction. Even ₹10,000 in revenue changes the conversation completely."
                </p>
                <footer style={{ fontSize: 10, color: T.ink4, fontFamily: "system-ui,sans-serif", paddingBottom: 14 }}>
                  — Common feedback from IAN network partners
                </footer>
              </blockquote>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                What angels actually evaluate, in order of importance: founder quality and domain knowledge, market size and timing, product differentiation, traction (even pre-revenue signals count), and exit potential within 5–7 years. The biggest mistake founders make with angels is sending a cold pitch. Always get a warm introduction through a mutual connection, portfolio founder, or an accelerator alumni network.
              </p>

              {/* §4 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§04</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  Venture Capital in India: The Real Criteria
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                India's VC ecosystem has matured dramatically. In 2025–2026, investors prioritise quality over quantity — startups with clear unit economics are closing rounds at healthy valuations while those without fundamentals face down rounds. The "AI premium" is real: startups with genuine AI integration are seeing 2–3x higher valuations than sector peers.
              </p>

              <h3 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.1rem,2vw,1.35rem)", fontWeight: 700, color: T.ink, margin: "20px 0 10px" }}>
                The Metrics VCs Look For at Each Stage
              </h3>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 20 }}>
                {[
                  { stage: "Seed", metrics: ["10–20% MoM growth", "Strong founder-market fit", "Early revenue or LOIs", "NPS > 40"] },
                  { stage: "Series A", metrics: ["₹2–10Cr ARR minimum", "12–18 months of runway post-round", "Payback period < 18 months", "CAC:LTV ratio > 1:3"] },
                ].map(({ stage, metrics }, i) => (
                  <div key={i} style={{ background: T.white, padding: "16px 18px" }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontWeight: 900, fontSize: 14, color: T.gold, margin: "0 0 10px" }}>{stage} Stage</p>
                    {metrics.map((m, j) => (
                      <div key={j} style={{ display: "flex", gap: 7, marginBottom: 6 }}>
                        <span style={{ color: T.green, fontSize: 12, flexShrink: 0 }}>✓</span>
                        <p style={{ fontSize: 12, color: T.ink3, margin: 0, fontFamily: "system-ui,sans-serif" }}>{m}</p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
                India's leading early-stage VCs in 2026 include Blume Ventures (founder-first, operational support), Accel India (strong track record with Flipkart, Freshworks), Sequoia Surge (pre-seed to seed global cohort), Lightspeed India, and Elevation Capital. For B2B SaaS specifically, SaaSBOOMi-aligned funds and Upekkha accelerator are strong starting points.
              </p>

              {/* §5 */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§05</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  Your 90-Day Fundraising Playbook
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              {[
                { phase: "Days 1–30", title: "Prepare Before You Pitch", steps: ["Get DPIIT recognition (free, 2–3 weeks)", "Build a 10-slide pitch deck: problem, solution, market, traction, team, ask", "Create a financial model projecting 3 years with monthly Year 1", "Prepare a data room: cap table, revenue data, customer testimonials", "Define your ask precisely: how much, for what milestones, at what valuation"] },
                { phase: "Days 31–60", title: "Warm Your Network & Apply", steps: ["Apply to SISFS through 2–3 relevant incubators simultaneously", "Apply to state grant programs (check eligibility carefully)", "Begin warm outreach — map second-degree connections to target angels", "Submit to 3–5 accelerator programs (YC Surge, Antler, Sequoia Surge)", "Attend 1–2 startup events (TiE, Nasscom, SaaSBOOMi) for investor face-time"] },
                { phase: "Days 61–90", title: "Run the Process", steps: ["Create urgency: run multiple meetings in parallel, not sequential", "Send weekly investor updates even before a deal — build the relationship", "Negotiate on milestone-based tranches to reduce dilution", "Get a CA/startup lawyer to review term sheets before signing", "Track conversations in a simple CRM — 50+ conversations is normal"] },
              ].map(({ phase, title, steps }, i) => (
                <div key={i} style={{ marginBottom: 20, padding: "18px 20px", background: i === 0 ? T.ink : T.white, border: `1.5px solid ${T.ink}`, borderTop: `3px solid ${T.gold}` }}>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13, fontWeight: 900, color: i === 0 ? T.gold : T.gold, margin: 0 }}>{phase}</p>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,1.8vw,1.15rem)", fontWeight: 700, color: i === 0 ? "#FDFCF9" : T.ink, margin: 0 }}>{title}</p>
                  </div>
                  {steps.map((s, j) => (
                    <div key={j} style={{ display: "flex", gap: 8, marginBottom: 7 }}>
                      <span style={{ color: T.gold, fontSize: 12, flexShrink: 0, marginTop: 1 }}>›</span>
                      <p style={{ fontSize: 12.5, color: i === 0 ? "rgba(253,252,249,.8)" : T.ink3, margin: 0, fontFamily: "system-ui,sans-serif", lineHeight: 1.6 }}>{s}</p>
                    </div>
                  ))}
                </div>
              ))}

              {/* §6 — Common Mistakes */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 16px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§06</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>
                  The 7 Mistakes That Kill Indian Fundraises
                </h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 24 }}>
                {[
                  ["Raising too early", "No product, no users, no traction. Investors pass and you've burned goodwill. Wait until you have something real to show."],
                  ["Overvaluing the company", "Asking for ₹50L at ₹10Cr valuation pre-revenue kills deals. Know your benchmarks."],
                  ["Pitching without a warm intro", "Cold emails convert at under 1%. Build relationships first, then pitch."],
                  ["Ignoring government grants", "Non-dilutive ₹20–70L is available. Most founders never apply. This is free money."],
                  ["Sequential investor meetings", "Running 3 parallel meetings creates urgency. Running them one-by-one takes 12 months and kills momentum."],
                  ["No financial model", "Every investor asks. 'We'll figure it out' is not an answer. A simple 3-year projection shows seriousness."],
                  ["Signing the first term sheet", "Always get competing offers. Even a conversation with another fund changes the negotiation dynamic."],
                  ["Skipping a startup lawyer", "Indian term sheets have gotchas. Anti-dilution clauses, liquidation preferences, and board control provisions all matter."],
                ].map(([title, desc], i) => (
                  <div key={i} style={{ background: T.white, padding: "14px 16px", borderTop: `2px solid #B91C1C` }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12.5, fontWeight: 700, color: T.ink, margin: "0 0 5px" }}>{title}</p>
                    <p style={{ fontSize: 11.5, color: T.ink3, margin: 0, fontFamily: "system-ui,sans-serif", lineHeight: 1.6 }}>{desc}</p>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div style={{ background: T.ink, padding: "clamp(20px,4vw,36px)", margin: "clamp(24px,4vw,40px) 0" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui,sans-serif", margin: "0 0 14px" }}>✦ UpForge Founder Verdict</p>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontStyle: "italic", color: "rgba(253,252,249,.88)", lineHeight: 1.75, margin: 0 }}>
                  "The best time to raise funding was before you needed it. The second best time is right now — but only after you've built something someone will actually pay for. Get your DPIIT recognition today. Apply to one government grant this week. Have your first investor conversation this month. Stack the ladder, and the capital follows the traction."
                </p>
              </div>

              {/* Internal links */}
              <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: "clamp(16px,3vw,28px)", marginTop: "clamp(16px,3vw,28px)" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui,sans-serif", marginBottom: 14 }}>Explore More on UpForge</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {[
                    ["Top Indian Unicorns 2026", "/startup"],
                    ["Generate Your Free Valuation Report", "/report"],
                    ["Top AI Startups in India 2026", "/blog/top-ai-startups-india-2026"],
                    ["Indian Startup Ecosystem Overview", "/startup"],
                  ].map(([label, href]) => (
                    <Link key={label as string} href={href as string} style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 12px", background: T.parch2, border: `1px solid ${T.rule2}`, textDecoration: "none", color: T.gold, fontSize: 11.5, fontFamily: "system-ui,sans-serif", fontWeight: 600 }}>
                      <span style={{ color: T.gold, flexShrink: 0 }}>›</span> {label}
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* RIGHT: Sticky sidebar */}
            <aside style={{ position: "sticky", top: "calc(var(--site-header-height, 64px) + 16px)" }}>

              {/* Quick Stats */}
              <div style={{ marginBottom: 16 }}>
                <div style={{ background: T.ink, padding: "10px 14px" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "white", margin: 0, fontFamily: "system-ui,sans-serif" }}>2026 Funding Snapshot</p>
                </div>
                <div style={{ border: `1px solid ${T.rule2}`, borderTop: "none" }}>
                  {[
                    ["Startups in India", "6,50,000+"],
                    ["Unicorns", "125"],
                    ["Q1 2026 Funding", "$3.44B"],
                    ["SISFS Corpus", "₹945 Cr"],
                    ["Angel Networks", "50+"],
                    ["Active VCs", "200+"],
                  ].map(([label, value], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 14px", borderBottom: `1px solid ${T.rule}`, background: i % 2 === 0 ? T.white : T.parch2 }}>
                      <p style={{ fontSize: 11, color: T.ink3, margin: 0, fontFamily: "system-ui,sans-serif" }}>{label}</p>
                      <p style={{ fontSize: 12, fontWeight: 900, color: T.gold, margin: 0, fontFamily: "'Playfair Display',Georgia,serif" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key terms */}
              <div style={{ background: T.goldlt, border: `1px solid #FDE68A`, padding: "14px 16px", marginBottom: 16 }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui,sans-serif", margin: "0 0 10px" }}>Key Terms</p>
                {[
                  ["DPIIT", "Dept for Promotion of Industry & Internal Trade — issues startup recognition"],
                  ["SISFS", "Startup India Seed Fund Scheme — up to ₹70L non-dilutive"],
                  ["AIF", "Alternative Investment Fund — SEBI-regulated VC vehicle"],
                  ["CAC", "Customer Acquisition Cost"],
                  ["LTV", "Lifetime Value of a customer"],
                  ["ARR", "Annual Recurring Revenue"],
                ].map(([term, def]) => (
                  <div key={term as string} style={{ marginBottom: 8 }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: T.gold3, margin: "0 0 2px", fontFamily: "system-ui,sans-serif" }}>{term}</p>
                    <p style={{ fontSize: 10.5, color: T.gold3, margin: 0, fontFamily: "system-ui,sans-serif", opacity: .8 }}>{def}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/report"
                style={{ display: "block", background: T.ink, color: "#FDFCF9", textAlign: "center", padding: "14px 16px", textDecoration: "none", fontFamily: "system-ui,sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}
              >
                Get Your Free Valuation Report →
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
