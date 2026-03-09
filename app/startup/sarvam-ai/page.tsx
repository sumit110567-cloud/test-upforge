// app/startup/sarvam-ai/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

// ─── SEO ──────────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Sarvam AI — India's Sovereign AI Startup: Founders, Funding & Models | UpForge",
  description:
    "Deep profile of Sarvam AI — India's first sovereign LLM company. Founders Vivek Raghavan & Pratyush Kumar, $53.8M raised, Sarvam-105B model, IndiaAI Mission, Sarvam Kaze wearable, and why this startup could define India's AI decade.",
  keywords: [
    "Sarvam AI startup India",
    "Sarvam AI founders Vivek Raghavan Pratyush Kumar",
    "Sarvam AI funding valuation 2026",
    "India sovereign AI model",
    "Sarvam 105B model",
    "IndiaAI Mission startup",
    "Indian language AI model",
    "Sarvam AI vs ChatGPT Gemini",
    "Sarvam Kaze wearable AI",
    "best AI startups India 2026",
  ],
  openGraph: {
    title: "Sarvam AI — India's Sovereign AI Startup | UpForge",
    description:
      "From IIT research labs to Bharat Mandapam — how two IITians are building India's answer to OpenAI. Full profile: founders, funding, models, government contracts.",
    url: "https://upforge.in/startup/sarvam-ai",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Sarvam AI — India's Sovereign AI Startup Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvam AI — India's Sovereign AI Startup | UpForge",
    description:
      "$53.8M raised. Sarvam-105B model. Government-backed. Two IITians building India's sovereign AI stack.",
  },
  alternates: { canonical: "https://upforge.in/startup/sarvam-ai" },
};

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sarvam AI — India's Sovereign AI Startup: Founders, Funding & Models",
    description:
      "Deep profile of Sarvam AI — India's first sovereign LLM company built by Vivek Raghavan and Pratyush Kumar.",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85",
    datePublished: "2026-03-09",
    dateModified: "2026-03-09",
    author: { "@type": "Organization", name: "UpForge Editorial", url: "https://upforge.in" },
    publisher: {
      "@type": "Organization",
      name: "UpForge",
      logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": "https://upforge.in/startup/sarvam-ai" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
        { "@type": "ListItem", position: 2, name: "Startup Registry", item: "https://upforge.in/startup" },
        { "@type": "ListItem", position: 3, name: "AI / ML", item: "https://upforge.in/startup?sector=AI%2FML" },
        { "@type": "ListItem", position: 4, name: "Sarvam AI", item: "https://upforge.in/startup/sarvam-ai" },
      ],
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Sarvam AI",
    url: "https://www.sarvam.ai",
    foundingDate: "2023",
    foundingLocation: "Bengaluru, Karnataka, India",
    description: "India's full-stack sovereign AI platform building large language models for Indian languages and enterprise use cases.",
    founder: [
      { "@type": "Person", name: "Vivek Raghavan", jobTitle: "Co-Founder" },
      { "@type": "Person", name: "Pratyush Kumar", jobTitle: "Co-Founder & CEO" },
    ],
    numberOfEmployees: { "@type": "QuantitativeValue", value: 114 },
    sameAs: [
      "https://en.wikipedia.org/wiki/Sarvam_AI",
      "https://www.linkedin.com/company/sarvam-ai",
    ],
  },
];

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────
const T = {
  parch: "#F5F1E8", parch2: "#EDE9DF", parch3: "#E6E1D6",
  ink: "#1A1208", ink2: "#2C2010", ink3: "#5A4A30", ink4: "#8C7D65", ink5: "#BBB0A0",
  rule: "#C8C2B4", rule2: "#D8D2C4",
  gold: "#B45309", gold2: "#D97706", gold3: "#92400E", goldlt: "#FEF3C7",
  white: "#FDFCF9", green: "#15803D",
  accent: "#6D28D9", // Sarvam purple
  accentlt: "#EDE9FE",
};

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function SarvamAIProfile() {
  return (
    <>
      {jsonLd.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <article style={{ background: T.parch, fontFamily: "'Georgia','Times New Roman',serif", color: T.ink, lineHeight: 1.75 }}>

        {/* ── BREADCRUMB ── */}
        <div style={{ background: T.parch2, borderBottom: `1px solid ${T.rule}`, padding: "10px clamp(16px,4vw,40px)" }}>
          <nav aria-label="Breadcrumb">
            <ol style={{ display: "flex", flexWrap: "wrap", gap: 6, listStyle: "none", margin: 0, padding: 0 }}>
              {[["Home", "/"], ["Startup Registry", "/startup"], ["AI / ML", "/startup?sector=AI%2FML"], ["Sarvam AI", "#"]].map(([label, href], i, arr) => (
                <li key={label as string} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {href === "#"
                    ? <span style={{ fontSize: 11, color: T.ink4, fontFamily: "system-ui" }}>{label}</span>
                    : <Link href={href as string} style={{ fontSize: 11, color: T.gold, textDecoration: "none", fontFamily: "system-ui" }}>{label}</Link>}
                  {i < arr.length - 1 && <span style={{ color: T.rule, fontSize: 10 }}>›</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>

          {/* ══ MASTHEAD ══════════════════════════════════════════════════════════ */}
          <header style={{ borderBottom: `3px solid ${T.ink}`, padding: "clamp(28px,5vw,56px) 0 clamp(20px,4vw,36px)" }}>

            {/* Dateline row */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(18px,3vw,32px)", flexWrap: "wrap", gap: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", margin: 0 }}>
                9 March 2026 · UpForge Startup Intelligence · Bengaluru, India
              </p>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: T.accent, border: `1px solid ${T.accent}`, padding: "2px 10px", fontFamily: "system-ui" }}>AI / ML</span>
                <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: T.green, border: `1px solid ${T.green}`, padding: "2px 10px", fontFamily: "system-ui" }}>✓ Verified</span>
              </div>
            </div>

            {/* Main headline */}
            <div style={{ textAlign: "center", paddingBottom: "clamp(18px,3vw,32px)", borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(16px,3vw,28px)" }}>
              {/* Logo / initials badge */}
              <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 72, height: 72, background: T.accent, marginBottom: 20, borderRadius: 4, border: `2px solid ${T.ink}` }}>
                <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 28, fontWeight: 900, color: "white", letterSpacing: "-.03em" }}>SA</span>
              </div>

              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.2rem,5.5vw,4.5rem)", fontWeight: 900, lineHeight: 1.04, letterSpacing: "-.02em", color: T.ink, margin: "0 0 12px" }}>
                Sarvam AI
              </h1>
              <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2.2vw,1.5rem)", fontStyle: "italic", color: T.accent, margin: "0 0 18px", fontWeight: 700 }}>
                India's Full-Stack Sovereign AI Platform
              </p>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: T.ink3, maxWidth: 700, margin: "0 auto 18px", fontStyle: "italic" }}>
                Two IITians who built India's digital public infrastructure are now building India's AI brain — trained from scratch, for India's 22 languages, at government scale.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
                <span style={{ color: T.rule, fontSize: 14 }}>✦</span>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
              </div>
            </div>

            {/* Byline */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 11, color: T.ink4, fontFamily: "system-ui" }}>
              <span>Profile by <strong style={{ color: T.ink3 }}>UpForge Research</strong></span>
              <span style={{ color: T.rule }}>·</span>
              <span>Founded August 2023</span>
              <span style={{ color: T.rule }}>·</span>
              <span>Bengaluru, Karnataka</span>
              <span style={{ color: T.rule }}>·</span>
              <span>18 min read</span>
            </div>
          </header>

          {/* ── HERO IMAGE ── */}
          <figure style={{ margin: "clamp(20px,4vw,36px) 0 0" }}>
            <div style={{ position: "relative", overflow: "hidden", height: "clamp(220px,38vw,480px)" }}>
              <img
                src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85"
                alt="Sarvam AI — India sovereign AI language model startup Bengaluru"
                style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(8%) contrast(110%)" }}
              />
              {/* Overlay headline on image */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,18,8,.82) 0%, rgba(26,18,8,.3) 50%, transparent 100%)" }} />
              <div style={{ position: "absolute", bottom: "clamp(16px,3vw,32px)", left: "clamp(16px,3vw,32px)", right: "clamp(16px,3vw,32px)" }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2.5vw,1.6rem)", fontWeight: 700, color: "rgba(253,252,249,.9)", lineHeight: 1.35, margin: 0, maxWidth: 700 }}>
                  "India has demonstrated it can harness technology differently. With GenAI, we have an opportunity to reimagine how this technology adds value to people's lives."
                </p>
                <p style={{ fontSize: 10, color: "rgba(253,252,249,.45)", margin: "8px 0 0", fontFamily: "system-ui" }}>— Vivek Raghavan, Co-Founder, Sarvam AI</p>
              </div>
            </div>
            <figcaption style={{ fontSize: 10, color: T.ink5, marginTop: 8, fontFamily: "system-ui", fontStyle: "italic", paddingBottom: "clamp(16px,3vw,28px)", borderBottom: `1px solid ${T.rule}` }}>
              Sarvam AI launched its sovereign 105B parameter model at the India AI Impact Summit, Bharat Mandapam, New Delhi, February 2026 — a first for any Indian startup.
            </figcaption>
          </figure>

          {/* ══ BODY: 2-column layout ══════════════════════════════════════════ */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr clamp(260px,30%,320px)", gap: "clamp(28px,5vw,60px)", alignItems: "start", paddingTop: "clamp(24px,4vw,40px)" }}>

            {/* ── LEFT: Main article ── */}
            <div>

              {/* ── KEY STATS GRID ── */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: "clamp(24px,4vw,40px)" }}>
                {[
                  ["$53.8M", "Total Raised", "3 rounds"],
                  ["~$200M", "Valuation", "Aug 2025"],
                  ["₹29.1Cr", "Annual Revenue", "FY2025"],
                  ["2023", "Founded", "August"],
                  ["114", "Team Size", "As of 2025"],
                  ["22+", "Indian Languages", "Supported"],
                ].map(([v, l, s]) => (
                  <div key={l as string} style={{ background: T.white, padding: "16px 14px", textAlign: "center" }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,2rem)", fontWeight: 900, color: T.accent, margin: "0 0 4px", lineHeight: 1 }}>{v}</p>
                    <p style={{ fontSize: 11, fontWeight: 700, color: T.ink, margin: "0 0 2px", fontFamily: "system-ui" }}>{l}</p>
                    <p style={{ fontSize: 9, color: T.ink5, margin: 0, fontFamily: "system-ui" }}>{s}</p>
                  </div>
                ))}
              </div>

              {/* ── OPENING ── */}
              <p style={{ fontSize: "clamp(14px,1.6vw,16.5px)", lineHeight: 1.9, marginBottom: 20, color: T.ink2 }}>
                <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(3rem,5vw,4.2rem)", fontWeight: 900, float: "left", lineHeight: 0.82, marginRight: 10, marginTop: 10, color: T.ink }}>I</span>
                n August 2023, two Indian researchers who had spent their careers building technology for a billion people — one on Aadhaar's biometric backbone, one on open-source AI for Indian languages — decided that the most important thing they could do next was build India's own AI. Not fine-tune an American model. Not wrap OpenAI's API. Build from scratch, with Indian data, Indian compute, for Indian languages. They called the company Sarvam — Sanskrit for "all, everything, the whole."
              </p>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 24, color: T.ink2 }}>
                Within four months, Sarvam AI had raised $41 million in a seed-and-Series-A combined round — one of the fastest institutional rounds in Indian AI history. By February 2026, it had stood on the stage at Bharat Mandapam in New Delhi and demonstrated Sarvam-105B, a 105-billion-parameter model built on government GPU infrastructure. Not adapted from a foreign model — built from scratch, on Indian soil, with Indian data. That single fact changed the conversation about what Indian startups could do in artificial intelligence.
              </p>

              {/* §1 — Founders */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `2px solid ${T.ink}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§01</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Founders</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              {/* 2-col founder cards */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 24 }}>
                {[
                  {
                    name: "Dr. Pratyush Kumar",
                    role: "Co-Founder & CEO",
                    education: "B.Tech, IIT Bombay · PhD, ETH Zurich",
                    prev: "IBM Research · Microsoft Research · IIT Madras (Faculty) · AI4Bharat",
                    insight: "The researcher who built India's first open-source Hindi LLM (OpenHathi) before building a company. His PhD research on GPU design makes him one of the few AI CEOs who understands hardware as well as models.",
                    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
                  },
                  {
                    name: "Dr. Vivek Raghavan",
                    role: "Co-Founder",
                    education: "B.Tech, IIT Delhi · PhD, Carnegie Mellon University",
                    prev: "UIDAI / Aadhaar (12 years) · EkStep Foundation · Magma Design Automation · AI4Bharat",
                    insight: "The man who helped enrol 1.4 billion Indians in Aadhaar now wants to give them AI. His experience operating at population scale — not startup scale — is Sarvam's structural advantage over every other AI startup in India.",
                    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
                  },
                ].map((f, i) => (
                  <div key={i} style={{ background: T.white, padding: "clamp(14px,2.5vw,24px)" }}>
                    <div style={{ display: "flex", gap: 14, alignItems: "flex-start", marginBottom: 14 }}>
                      <div style={{ width: 54, height: 54, flexShrink: 0, borderRadius: "50%", overflow: "hidden", border: `2px solid ${T.ink}` }}>
                        <img src={f.img} alt={f.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(14%)" }} />
                      </div>
                      <div>
                        <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,1.8vw,1.2rem)", fontWeight: 900, color: T.ink, margin: "0 0 3px" }}>{f.name}</p>
                        <p style={{ fontSize: 10, fontWeight: 700, color: T.accent, margin: "0 0 3px", fontFamily: "system-ui", textTransform: "uppercase", letterSpacing: ".1em" }}>{f.role}</p>
                        <p style={{ fontSize: 10, color: T.ink4, margin: 0, fontFamily: "system-ui" }}>{f.education}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 10.5, color: T.ink4, margin: "0 0 10px", fontFamily: "system-ui", fontStyle: "italic" }}>Previously: {f.prev}</p>
                    <div style={{ background: T.accentlt, borderLeft: `3px solid ${T.accent}`, padding: "10px 12px" }}>
                      <p style={{ fontSize: 11.5, color: T.ink2, margin: 0, lineHeight: 1.65 }}>{f.insight}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* §2 — The Origin Story */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§02</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Origin Story</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                The story of Sarvam AI begins not in a garage or a dorm room but in a research lab at IIT Madras, where Pratyush Kumar was building AI tools for Indian languages under the AI4Bharat initiative — backed by Nandan Nilekani with a ₹36 crore grant. The lab produced India's first open-source Hindi language model, IndicBERT, and trained researchers who would go on to build the next generation of Indian AI. Kumar had been thinking about the gap for years: why did every major AI system work beautifully in English and struggle with Hindi, Tamil, Telugu?
              </p>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                Vivek Raghavan brought a different perspective. He had spent twelve years working on Aadhaar — the world's largest biometric identity system — watching how digital infrastructure deployed at population scale could transform lives. When ChatGPT launched in November 2022, Raghavan saw what Kumar saw: a massive window that was about to open. India had 1.4 billion people who wanted to use AI. Almost none of them spoke English as their primary language. The models being built in San Francisco were not designed for them.
              </p>

              {/* Pull quote */}
              <blockquote style={{ borderLeft: `4px solid ${T.accent}`, paddingLeft: 20, margin: "clamp(20px,4vw,32px) 0", background: T.accentlt, padding: "clamp(16px,3vw,24px)", borderLeft: `4px solid ${T.accent}` }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontWeight: 700, fontStyle: "italic", color: T.ink, margin: "0 0 10px", lineHeight: 1.65 }}>
                  "We came across Kumar's work at AI4Bharat and were lost in the depths of his blog on spiritualism and AI. In him, we noticed a rare combination of a world-class researcher with boundless ambition and unusual clarity of thought about how to serve India's AI revolution."
                </p>
                <footer style={{ fontSize: 10, color: T.ink4, fontFamily: "system-ui" }}>— Harshjit Sethi, Managing Director, Peak XV Partners</footer>
              </blockquote>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 24, color: T.ink2 }}>
                They incorporated Sarvam AI in August 2023. Four months later, in December 2023, they announced a combined seed and Series A round of $41 million — led by Lightspeed Venture Partners, with Peak XV Partners and Khosla Ventures participating. It was one of the largest early-stage AI rounds in Indian history. The speed of it — from founding to $41M in under five months — reflected both the quality of the team and the global intensity of the AI investment moment.
              </p>

              {/* §3 — The Models */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§03</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Models & Products</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 20, color: T.ink2 }}>
                Sarvam's product strategy is a full stack — not just a single model, but the complete infrastructure needed to deploy Indian-language AI at enterprise and government scale. By February 2026, the company had released multiple models in rapid succession — what they called a "14-day launch streak" — each targeting a different part of the Indian AI stack.
              </p>

              {/* Model cards */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 24 }}>
                {[
                  {
                    name: "Sarvam-105B",
                    codename: "Indus",
                    params: "105 Billion Parameters",
                    type: "Flagship Foundation Model",
                    desc: "Mixture-of-Experts architecture activating ~9B parameters per token. 128,000-token context window for processing entire documents — balance sheets, legal filings, technical manuals — in a single prompt. Built from scratch on government GPU infrastructure under IndiaAI Mission. Available on iOS, Android, and web.",
                    highlight: "First sovereign, scratch-built 100B+ parameter model by an Indian startup.",
                    status: "Released Feb 2026",
                  },
                  {
                    name: "Sarvam-30B",
                    codename: "–",
                    params: "30 Billion Parameters",
                    type: "Efficient Foundation Model",
                    desc: "Mixture-of-Experts design activating ~1B parameters per token. 32,000-token context window. Designed for real-time enterprise applications where cost and latency matter. Suitable for conversational agents, search, and document processing.",
                    highlight: "Enterprise-grade efficiency at a fraction of the computational cost of frontier models.",
                    status: "Released Feb 2026",
                  },
                  {
                    name: "Sarvam Vision",
                    codename: "–",
                    params: "Multimodal Vision-Language",
                    type: "Document Understanding & OCR",
                    desc: "Vision-language model designed for Indian-script OCR and document understanding. Achieved 84.3% accuracy on olmOCR-Bench — outperforming Google Gemini 3 Pro, DeepSeek OCR v2, and ChatGPT. Excels at complex layouts, Indian scripts, and mathematical formulas in documents.",
                    highlight: "Beats ChatGPT and Gemini on Indian-language OCR. Directly relevant to MSME and government use cases.",
                    status: "Released Feb 2026",
                  },
                  {
                    name: "Bulbul V3",
                    codename: "–",
                    params: "Speech Model",
                    type: "Text-to-Speech (TTS)",
                    desc: "High-quality, natural-sounding speech synthesis across 10+ Indian languages. Benchmark winner in Indian-language TTS quality. Powers Sarvam's voice-first product strategy and the UIDAI Aadhaar voice interaction system.",
                    highlight: "Outperforms global TTS systems on Indian language naturalness benchmarks.",
                    status: "Released 2025",
                  },
                  {
                    name: "Saaras V3",
                    codename: "–",
                    params: "Speech-to-Text Model",
                    type: "Automatic Speech Recognition (ASR)",
                    desc: "Multi-language ASR covering 10+ Indian languages and dialects. Designed for noisy real-world environments — call centres, field recordings, government kiosks. Powers the Aadhaar voice feedback system deployed by UIDAI.",
                    highlight: "Built for the acoustic realities of India — regional accents, background noise, code-switched speech.",
                    status: "Production",
                  },
                ].map((m, i) => (
                  <div key={i} style={{ background: i === 0 ? T.ink : T.white, padding: "clamp(14px,2.5vw,22px)", borderLeft: `4px solid ${i === 0 ? T.gold2 : T.accent}` }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10, flexWrap: "wrap" }}>
                      <div>
                        <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                          <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.3rem)", fontWeight: 900, color: i === 0 ? "#FDFCF9" : T.ink, margin: 0 }}>{m.name}</p>
                          {m.codename !== "–" && <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 12, fontStyle: "italic", color: i === 0 ? T.gold2 : T.accent, margin: 0 }}>"Indus"</p>}
                        </div>
                        <p style={{ fontSize: 9.5, color: i === 0 ? "rgba(232,197,71,.7)" : T.ink4, margin: 0, fontFamily: "system-ui", textTransform: "uppercase", letterSpacing: ".1em" }}>{m.type} · {m.params}</p>
                      </div>
                      <span style={{ fontSize: 8, fontWeight: 700, color: T.green, border: `1px solid ${T.green}`, padding: "2px 8px", fontFamily: "system-ui", flexShrink: 0 }}>{m.status}</span>
                    </div>
                    <p style={{ fontSize: "clamp(12px,1.4vw,13.5px)", color: i === 0 ? "rgba(253,252,249,.75)" : T.ink3, margin: "0 0 10px", lineHeight: 1.7 }}>{m.desc}</p>
                    <div style={{ background: i === 0 ? "rgba(232,197,71,.12)" : T.accentlt, borderLeft: `2px solid ${i === 0 ? T.gold2 : T.accent}`, padding: "7px 10px" }}>
                      <p style={{ fontSize: 11, fontWeight: 700, color: i === 0 ? T.gold2 : T.accent, margin: 0, fontFamily: "system-ui" }}>★ {m.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* §4 — YouTube Video */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§04</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>Watch: Sarvam AI in Their Own Words</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 18, color: T.ink2 }}>
                The clearest way to understand what Sarvam is building — and why — is to hear it directly from the founders. The video below captures the Sarvam vision: why Indian-language AI matters, how a sovereign model is different from fine-tuning a foreign one, and what it means for India to own its AI infrastructure.
              </p>

              {/* YouTube embed */}
              <div style={{ border: `1.5px solid ${T.ink}`, marginBottom: 24 }}>
                {/* Video header */}
                <div style={{ background: T.ink, padding: "10px 16px", display: "flex", alignItems: "center", gap: 10 }}>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.45)", fontFamily: "system-ui" }}>UpForge · Featured Video</span>
                  <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,.1)" }} />
                  <span style={{ fontSize: 9, fontWeight: 700, color: "#FF0000", fontFamily: "system-ui", letterSpacing: ".1em" }}>▶ YouTube</span>
                </div>

                {/* Actual YouTube embed — 16:9 */}
                <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "#000" }}>
                  <iframe
                    src="https://www.youtube.com/embed/l7pDuakyskI?rel=0&modestbranding=1&color=white"
                    title="Sarvam AI — India's Sovereign AI Platform | Founders Interview"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  />
                </div>

                {/* Video caption */}
                <div style={{ background: T.parch2, padding: "12px 16px", borderTop: `1px solid ${T.rule}` }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13, fontWeight: 700, color: T.ink, margin: "0 0 4px" }}>
                    Sarvam AI — Building India's Sovereign AI Stack
                  </p>
                  <p style={{ fontSize: 10.5, color: T.ink4, margin: 0, fontFamily: "system-ui" }}>
                    Co-founders Dr. Vivek Raghavan and Dr. Pratyush Kumar explain why India needs its own AI, what sovereign LLMs mean in practice, and how Sarvam's models are designed to serve 1.4 billion people in their own languages.
                  </p>
                </div>
              </div>

              {/* §5 — Government & Partnerships */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§05</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>Government Mandate & Key Partnerships</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                The single most important strategic fact about Sarvam AI is this: in April 2025, India's Ministry of Electronics and Information Technology (MeitY) selected Sarvam as one of the companies to develop India's sovereign foundational AI model under the IndiaAI Mission. This is not a grant or an endorsement — it is a mandate. Sarvam was given access to government-supported GPU compute infrastructure to train models that would otherwise be impossibly expensive for a startup to build.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 24 }}>
                {[
                  {
                    partner: "IndiaAI Mission (MeitY)",
                    type: "Government Mandate",
                    desc: "Selected to build India's sovereign foundational LLM. Received government GPU compute (Nvidia hardware, Yotta data centres) for training Sarvam-105B from scratch.",
                    significance: "Critical — removes the compute cost barrier that prevents most startups from training frontier models.",
                  },
                  {
                    partner: "UIDAI (Aadhaar)",
                    type: "Government Deployment",
                    desc: "Deployed AI-driven voice interaction system for Aadhaar users. Enables voice-based feedback collection, detects overcharging by service providers. Covers hundreds of millions of users.",
                    significance: "India's largest AI deployment in public digital infrastructure. Population-scale proof of concept.",
                  },
                  {
                    partner: "Microsoft Azure",
                    type: "Cloud Partnership",
                    desc: "Partnership to build Indic voice LLM available on Azure cloud platform. Gives enterprise developers access to Sarvam's Indian-language models through Microsoft's global distribution network.",
                    significance: "Enterprise distribution at global scale without Sarvam needing to build its own cloud.",
                  },
                  {
                    partner: "AI Alliance (Meta + IBM)",
                    type: "Global Consortium",
                    desc: "One of 7 Indian members admitted to the AI Alliance global consortium in September 2024, alongside Infosys and AI4Bharat. Promotes open, safe AI development globally.",
                    significance: "Signals global credibility beyond India's domestic AI ecosystem.",
                  },
                ].map(({ partner, type, desc, significance }, i) => (
                  <div key={i} style={{ background: T.white, padding: "clamp(14px,2.5vw,20px)", borderTop: `3px solid ${T.accent}` }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13.5, fontWeight: 900, color: T.ink, margin: "0 0 4px" }}>{partner}</p>
                    <p style={{ fontSize: 9, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 8px", fontFamily: "system-ui" }}>{type}</p>
                    <p style={{ fontSize: 12, color: T.ink3, margin: "0 0 10px", lineHeight: 1.65 }}>{desc}</p>
                    <div style={{ background: T.accentlt, borderLeft: `2px solid ${T.accent}`, padding: "7px 10px" }}>
                      <p style={{ fontSize: 10.5, color: T.accent, margin: 0, fontFamily: "system-ui", fontWeight: 600 }}>{significance}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* §6 — Sarvam Kaze */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§06</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Hardware Bet: Sarvam Kaze</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              {/* Kaze image */}
              <figure style={{ margin: "0 0 20px" }}>
                <div style={{ position: "relative", overflow: "hidden", height: "clamp(180px,28vw,320px)" }}>
                  <img
                    src="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=900&q=85"
                    alt="Sarvam Kaze AI wearable smart glasses India launch 2026"
                    style={{ width: "100%", height: "100%", objectFit: "cover", filter: "sepia(8%) contrast(108%)" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(109,40,217,.6) 0%, transparent 60%)" }} />
                  <div style={{ position: "absolute", bottom: 16, left: 16 }}>
                    <span style={{ fontFamily: "system-ui", fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "white", background: T.accent, padding: "4px 10px" }}>Launching May 2026</span>
                  </div>
                </div>
                <figcaption style={{ fontSize: 10, color: T.ink5, marginTop: 8, fontFamily: "system-ui", fontStyle: "italic" }}>
                  Sarvam Kaze — AI-powered smart eyewear supporting 10+ Indian languages, launching May 2026 in partnership with HMD Global.
                </figcaption>
              </figure>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                In February 2026, Sarvam announced a hardware product that nobody in the Indian AI ecosystem had expected: Sarvam Kaze, an AI-powered smart eyewear device built in partnership with HMD Global. The glasses listen, understand, and capture what users see — in real time, in over 10 Indian languages, with voice-based interaction and real-time translation capability.
              </p>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 24, color: T.ink2 }}>
                Launching in May 2026, Kaze represents a strategic pivot that few AI companies have successfully executed: from software models to a consumer hardware device. The bet is that the best way to deploy Indian-language AI at scale is not through enterprise APIs but through a wearable that goes wherever the user goes — a doctor on rounds in a rural hospital, a shopkeeper managing inventory in Bhojpuri, a student taking notes in Tamil. If it works, Kaze becomes Sarvam's distribution layer for everything the company has built.
              </p>

              {/* §7 — Investment Story */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§07</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>Funding & Investors</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: 24 }}>
                {/* Table header */}
                <div style={{ background: T.ink, padding: "8px 16px", display: "grid", gridTemplateColumns: "100px 1fr 140px 100px" }}>
                  {["Date", "Round", "Investors", "Amount"].map(h => (
                    <span key={h} style={{ fontSize: 7.5, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(255,255,255,.28)", fontFamily: "system-ui" }}>{h}</span>
                  ))}
                </div>
                {[
                  { date: "Aug 2023", round: "Seed", investors: "Peak XV Partners, Madhavan Living Trust, Angels", amount: "$5.4M" },
                  { date: "Dec 2023", round: "Series A", investors: "Lightspeed Venture Partners, Peak XV, Khosla Ventures, Neeraj Sagar + 7 others", amount: "~$41M" },
                  { date: "Aug 2025", round: "Series A (extension)", investors: "Avvanti Advisors + existing investors", amount: "Top-up" },
                ].map((row, i) => (
                  <div key={i} style={{ background: T.white, padding: "12px 16px", display: "grid", gridTemplateColumns: "100px 1fr 140px 100px", gap: 12, alignItems: "center" }}>
                    <p style={{ fontSize: 11, fontWeight: 700, color: T.ink4, margin: 0, fontFamily: "system-ui" }}>{row.date}</p>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13.5, fontWeight: 700, color: T.ink, margin: 0 }}>{row.round}</p>
                    <p style={{ fontSize: 11, color: T.ink3, margin: 0, fontFamily: "system-ui", lineHeight: 1.5 }}>{row.investors}</p>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 16, fontWeight: 900, color: T.accent, margin: 0, lineHeight: 1 }}>{row.amount}</p>
                  </div>
                ))}
                {/* Total */}
                <div style={{ background: T.parch2, padding: "12px 16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".14em", color: T.ink4, margin: 0, fontFamily: "system-ui" }}>Total Raised</p>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 900, color: T.accent, margin: 0, lineHeight: 1 }}>$53.8M</p>
                </div>
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                The cap table tells an important story: founders retain 51.34% of the company, institutional funds hold 36.21%, ESOP pool holds 12.09%, and angel investors hold 0.36%. For a $53.8M-raised AI startup in 2026, founder control at 51% is exceptional — and reflects both the leverage of the IndiaAI Mission selection (which reduced their dependence on VC capital for compute) and the discipline of a team that negotiated from a position of strength.
              </p>

              {/* §8 — The Why: Sovereign AI */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§08</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>Why Sovereign AI? The Geopolitical Bet</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                The word "sovereign" in Sarvam's positioning is not marketing language — it is a geopolitical argument. India currently depends on AI systems built, trained, and hosted in the United States. Every time an Indian government agency, hospital, or bank uses GPT-4 or Gemini, sensitive data routes through American servers and is governed by American regulatory frameworks. Sarvam's co-founder Vivek Raghavan has warned publicly of the risk of India becoming a "digital colony" — a country that consumes AI but does not control it.
              </p>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                The IndiaAI Mission's selection of Sarvam was partly driven by this logic. A country that builds Aadhaar and UPI — two of the world's most sophisticated digital public infrastructure systems — should be capable of building its own AI foundation models. Sarvam-105B, built on domestic compute with domestic data, is India's first serious answer to that question.
              </p>

              {/* Verdict box */}
              <div style={{ background: T.ink, padding: "clamp(20px,4vw,36px)", margin: "clamp(24px,4vw,40px) 0" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold2, fontFamily: "system-ui", margin: "0 0 14px" }}>✦ UpForge Analyst Verdict</p>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontStyle: "italic", color: "rgba(253,252,249,.88)", lineHeight: 1.8, margin: "0 0 16px" }}>
                  "Sarvam AI is not just the most interesting AI startup in India — it may be the most important. The combination of world-class researchers, government mandate, frontier-scale models trained from scratch, and a population-scale deployment partner in UIDAI creates a moat that no amount of VC funding alone can replicate. The Sarvam Kaze wearable is a high-risk bet, but if it succeeds, Sarvam becomes the hardware distribution layer for Indian-language AI at a scale no enterprise API strategy could achieve. Watch this company very closely."
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", border: "1px solid rgba(255,255,255,.1)", background: "rgba(255,255,255,.1)" }}>
                  {[
                    { label: "Moat Score", value: "★★★★★", note: "Government mandate + IIT research pedigree + data advantage" },
                    { label: "Risk Score", value: "★★★☆☆", note: "Hardware bet unproven; frontier model competition intensifying" },
                    { label: "Long-Term Potential", value: "★★★★★", note: "Sovereign AI for 1.4B people is a generational opportunity" },
                  ].map(({ label, value, note }) => (
                    <div key={label} style={{ background: "rgba(255,255,255,.05)", padding: "12px 14px", textAlign: "center" }}>
                      <p style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".14em", color: "rgba(255,255,255,.4)", fontFamily: "system-ui", margin: "0 0 6px" }}>{label}</p>
                      <p style={{ fontSize: 14, color: T.gold2, margin: "0 0 4px" }}>{value}</p>
                      <p style={{ fontSize: 9.5, color: "rgba(255,255,255,.35)", margin: 0, fontFamily: "system-ui", lineHeight: 1.5 }}>{note}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* §9 — Startup Programme */}
              <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,36px) 0 18px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
                <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§09</span>
                <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 900, margin: 0, color: T.ink }}>For Founders: The Sarvam Startup Programme</h2>
                <div style={{ flex: 1, height: 1, background: T.rule }} />
              </div>

              <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.9, marginBottom: 16, color: T.ink2 }}>
                In March 2026, Sarvam launched a startup programme specifically for early-stage founders building on Indian-language AI. Selected companies receive 6–12 months of API credits scaled to their needs, priority engineering support from the Sarvam team, and direct access to production infrastructure. If you are building in Indian languages — healthcare, agriculture, education, legal, financial services — this programme is worth applying to.
              </p>

              <div style={{ background: T.accentlt, border: `1.5px solid ${T.accent}`, padding: "clamp(16px,3vw,24px)", marginBottom: 24 }}>
                <p style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".2em", color: T.accent, fontFamily: "system-ui", margin: "0 0 10px" }}>Sarvam Startup Programme — What You Get</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {[
                    "6–12 months API credits (scaled to needs)",
                    "Priority engineering support from Sarvam team",
                    "Access to production infrastructure",
                    "Sarvam-105B & Sarvam-30B access",
                    "Speech models: Bulbul V3 (TTS) + Saaras V3 (ASR)",
                    "Direct contact with founders & research team",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", gap: 8 }}>
                      <span style={{ color: T.accent, fontSize: 12, flexShrink: 0 }}>✓</span>
                      <p style={{ fontSize: 12, color: T.ink2, margin: 0, fontFamily: "system-ui", lineHeight: 1.55 }}>{item}</p>
                    </div>
                  ))}
                </div>
                <a href="https://www.sarvam.ai" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 16, background: T.accent, color: "white", padding: "10px 18px", textDecoration: "none", fontFamily: "system-ui", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>
                  Apply at sarvam.ai →
                </a>
              </div>

              {/* Internal links */}
              <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: "clamp(16px,3vw,28px)", marginBottom: "clamp(24px,4vw,40px)" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", marginBottom: 14 }}>Continue Exploring on UpForge</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {[
                    ["India Startup Ecosystem 2026 Report", "/blog/india-startup-ecosystem-2026"],
                    ["Top Indian Unicorns 2026", "/blog/top-indian-unicorns-2026"],
                    ["Best AI Startups India 2026", "/startup?sector=AI%2FML"],
                    ["How to Get Startup Funding India", "/blog/how-to-get-startup-funding-india-2026"],
                    ["25 Indian Founders to Follow 2026", "/blog/best-indian-startup-founders-to-follow-2026"],
                    ["Generate Free Valuation Report", "/report"],
                  ].map(([label, href]) => (
                    <Link key={label as string} href={href as string} style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 12px", background: T.parch2, border: `1px solid ${T.rule2}`, textDecoration: "none", color: T.gold, fontSize: 11.5, fontFamily: "system-ui", fontWeight: 600 }}>
                      <span>›</span> {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* ── RIGHT: Sticky Sidebar ── */}
            <aside style={{ position: "sticky", top: "calc(var(--site-header-height, 64px) + 16px)", display: "flex", flexDirection: "column", gap: 12 }}>

              {/* Company snapshot */}
              <div>
                <div style={{ background: T.ink, padding: "10px 14px" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "white", margin: 0, fontFamily: "system-ui" }}>Company Snapshot</p>
                </div>
                <div style={{ border: `1px solid ${T.rule2}`, borderTop: "none" }}>
                  {[
                    ["Founded", "August 2023"],
                    ["Headquarters", "Bengaluru, India"],
                    ["Legal Entity", "Axonwise Pvt. Ltd."],
                    ["Total Raised", "$53.8M"],
                    ["Valuation", "~$200M (Aug 2025)"],
                    ["Annual Revenue", "₹29.1Cr (FY2025)"],
                    ["Team Size", "114 employees"],
                    ["Sector", "AI / ML"],
                    ["Stage", "Series A"],
                    ["Founders' Stake", "51.34%"],
                    ["Website", "sarvam.ai"],
                  ].map(([label, value], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 14px", borderBottom: `1px solid ${T.rule}`, background: i % 2 === 0 ? T.white : T.parch2, gap: 8 }}>
                      <p style={{ fontSize: 10.5, color: T.ink4, margin: 0, fontFamily: "system-ui" }}>{label}</p>
                      <p style={{ fontSize: 11, fontWeight: 700, color: i === 4 || i === 3 ? T.accent : T.ink, margin: 0, fontFamily: i === 0 ? "'Playfair Display',Georgia,serif" : "system-ui", textAlign: "right" }}>{value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Investors */}
              <div>
                <div style={{ background: T.ink, padding: "10px 14px" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: "white", margin: 0, fontFamily: "system-ui" }}>Key Investors</p>
                </div>
                <div style={{ border: `1px solid ${T.rule2}`, borderTop: "none" }}>
                  {[
                    { name: "Lightspeed Venture Partners", type: "Lead Investor", round: "Series A" },
                    { name: "Peak XV Partners", type: "Sequoia India", round: "Seed + Series A" },
                    { name: "Khosla Ventures", type: "Vinod Khosla's Fund", round: "Series A" },
                    { name: "Avvanti Advisors", type: "Strategic", round: "Series A ext." },
                  ].map((inv, i) => (
                    <div key={i} style={{ padding: "10px 14px", borderBottom: `1px solid ${T.rule}`, background: i % 2 === 0 ? T.white : T.parch2 }}>
                      <p style={{ fontSize: 12, fontWeight: 700, color: T.ink, margin: "0 0 3px", fontFamily: "system-ui" }}>{inv.name}</p>
                      <p style={{ fontSize: 9.5, color: T.ink4, margin: 0, fontFamily: "system-ui" }}>{inv.type} · {inv.round}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Milestones */}
              <div style={{ background: T.goldlt, border: `1px solid #FDE68A`, padding: "14px 16px" }}>
                <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold3, fontFamily: "system-ui", margin: "0 0 12px" }}>Key Milestones</p>
                {[
                  ["Aug 2023", "Founded by Raghavan & Kumar"],
                  ["Dec 2023", "$41M seed+Series A raised"],
                  ["Jan 2024", "Acquired Pipable AI"],
                  ["Sep 2024", "Joined AI Alliance (Meta + IBM)"],
                  ["Mar 2025", "UIDAI Aadhaar partnership live"],
                  ["Apr 2025", "IndiaAI Mission mandate — MeitY"],
                  ["Aug 2025", "Series A extension round"],
                  ["Feb 2026", "Sarvam-105B + 30B launched at Bharat Mandapam"],
                  ["Feb 2026", "Sarvam Kaze announced — HMD Global"],
                  ["Mar 2026", "Sarvam Startup Programme launched"],
                  ["May 2026", "Sarvam Kaze wearable — expected launch"],
                ].map(([date, event]) => (
                  <div key={date as string} style={{ display: "flex", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: T.gold3, fontFamily: "system-ui", whiteSpace: "nowrap", marginTop: 2 }}>{date}</span>
                    <p style={{ fontSize: 11, color: T.gold3, margin: 0, fontFamily: "system-ui", lineHeight: 1.5 }}>{event}</p>
                  </div>
                ))}
              </div>

              {/* Report CTA */}
              <Link href="/report" style={{ display: "block", background: T.ink, color: "#FDFCF9", textAlign: "center", padding: "14px 16px", textDecoration: "none", fontFamily: "system-ui", fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", border: `1.5px solid ${T.ink}` }}>
                Generate Your Free Valuation Report →
              </Link>

              {/* Browse Registry */}
              <Link href="/startup?sector=AI%2FML" style={{ display: "block", background: T.accentlt, color: T.accent, textAlign: "center", padding: "12px 16px", textDecoration: "none", fontFamily: "system-ui", fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", border: `1.5px solid ${T.accent}` }}>
                Browse All AI Startups →
              </Link>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
