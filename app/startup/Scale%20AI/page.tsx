"use client"

// app/startup/scale-ai/page.tsx
// UpForge — Scale AI · Alexandr Wang & Lucy Guo Founder Chronicle
// SEO: Scale AI Data Infrastructure, RLHF, Generative AI Training Data
// Designed for maximum crawlability and indexing on Google Search.

import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/scale-ai#article",
      "headline": "Scale AI — How Alexandr Wang Built the $14B Data Infrastructure Powering OpenAI & The US Defense",
      "description": "The definitive Scale AI founder story. Alexandr Wang and Lucy Guo built the 'Data Foundry' of the AI era. Discover how Scale AI provides RLHF and training data for GPT-4, Llama 3, and the Pentagon.",
      "url": "https://upforge.in/startup/scale-ai",
      "datePublished": "2026-03-24T00:00:00+05:30",
      "dateModified": "2026-03-24T00:00:00+05:30",
      "inLanguage": "en-US",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-scale-ai.webp",
        "width": 1200,
        "height": 630
      },
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person",
          "name": "Alexandr Wang",
          "jobTitle": "Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Scale AI" },
          "sameAs": ["https://www.linkedin.com/in/alexandr-wang/"]
        },
        {
          "@type": "Person",
          "name": "Lucy Guo",
          "jobTitle": "Co-Founder",
          "worksFor": { "@type": "Organization", "name": "Scale AI" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Scale AI",
        "url": "https://scale.com",
        "foundingDate": "2016",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "San Francisco",
          "addressCountry": "US"
        },
        "description": "Scale AI is the leading data infrastructure provider for the AI industry, specializing in RLHF, data annotation, and model evaluation for LLMs and autonomous systems.",
        "sameAs": [
          "https://scale.com",
          "https://www.linkedin.com/company/scaleai/",
          "https://twitter.com/alexandr_wang"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "AI Infrastructure", "item": "https://upforge.in/ai-startups" },
        { "@type": "ListItem", "position": 4, "name": "Scale AI", "item": "https://upforge.in/startup/scale-ai" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Scale AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scale AI was founded in 2016 by Alexandr Wang and Lucy Guo. Alexandr Wang, an MIT dropout, became the world's youngest self-made billionaire by recognizing that high-quality data, not just algorithms, would be the true bottleneck for AI development."
          }
        },
        {
          "@type": "Question",
          "name": "What is Scale AI's valuation in 2025?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of mid-2025, Scale AI is valued at approximately $14 billion following its $1 billion Series F funding round led by Accel, with participation from Amazon, Meta, and Nvidia."
          }
        },
        {
          "@type": "Question",
          "name": "What is Scale Donovan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scale Donovan is a specialized AI platform designed for the U.S. government and defense agencies. It allows operators to analyze, search, and act on massive amounts of structured and unstructured data across classified networks."
          }
        },
        {
          "@type": "Question",
          "name": "How does Scale AI support Generative AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Scale AI provides the 'data engine' for LLMs, including RLHF (Reinforcement Learning from Human Feedback), red-teaming, and model evaluation. They work with industry leaders like OpenAI, Meta, Google, and Microsoft to fine-tune foundational models."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Funding", v: "$1.6B+" },
  { l: "Valuation", v: "$14B" },
  { l: "Founded", v: "2016" },
  { l: "HQ", v: "San Francisco" },
  { l: "Core Markets", v: "GenAI, Defense" },
  { l: "Workforce", v: "Human-in-Loop" },
]

const TIMELINE = [
  { year: "2016", event: "Alexandr Wang (19) drops out of MIT to found Scale AI with Lucy Guo. The goal: Provide 'ground truth' data for autonomous vehicles via a simple API." },
  { year: "2018–19", event: "Series A led by Accel. Scale becomes the primary data labeller for Tesla, Waymo, and Uber. Expands beyond computer vision into NLP and text data." },
  { year: "2021", event: "Raises Series E at $7.3B valuation. Alexandr Wang is named the world's youngest self-made billionaire by Forbes. Launch of Nucleus for data management." },
  { year: "2022–23", event: "Massive pivot toward Generative AI. Scale becomes the critical RLHF partner for OpenAI (GPT-4) and Meta (Llama). Launch of Scale Donovan for the Pentagon." },
  { year: "2024", event: "Series F funding of $1B at $13.8B valuation. Investors include Nvidia, Amazon, Meta, and Cisco. Revenue run rate exceeds $750M." },
  { year: "2025", event: "Scale AI establishes SEAL (Safety, Evaluation, and Alignment Lab). Becomes the global standard for AI model testing and data curation for sovereign AI initiatives." },
]

const COLS = [
  {
    h: "The Infrastructure for the AI Gold Rush",
    b: `In 1849, the people who got rich weren't the miners; they were the ones selling picks and shovels. In 2016, Alexandr Wang realized that while everyone was building models, nobody was building the data. He dropped out of MIT at 19 to solve the most boring, yet most critical problem in machine learning: labelling data.\n\nScale AI began as an API to provide "human-in-the-loop" data for autonomous vehicles. If a car needed to know the difference between a pedestrian and a mailbox, Scale's army of labellers provided the "Ground Truth." This simple realization—that data is the code for AI—built the foundation for a decacorn.`
  },
  {
    h: "From Self-Driving to Generative AI",
    b: `While Scale grew through self-driving contracts, its true explosion came with the rise of Large Language Models (LLMs). Scale transitioned from mere labelling to "Data Engineering." They became the secret sauce behind GPT-4 and Llama, providing Reinforcement Learning from Human Feedback (RLHF).\n\n"Data-centric AI is the only way forward," Wang often says. By combining machine-assisted pre-labelling with a massive global workforce (via platforms like Outlier), Scale ensures that the data used to train AI is high-quality, safe, and aligned. This pivot made Scale indispensable to the biggest tech firms on earth.`
  },
  {
    h: "Defense, Sovereignty & The Future",
    b: `Scale isn't just a commercial vendor; it is now a national security asset. Scale Donovan, their specialized LLM platform for the U.S. military, allows the Pentagon to process vast amounts of data in real-time. In an era where AI dominance is a matter of sovereign defense, Scale has positioned itself as the primary data partner for the Western world.\n\nWith a $14B valuation in 2025 and backing from Nvidia and Meta, Scale AI is no longer a "labelling company." It is the data foundry of the 21st century—the place where raw information is refined into the intelligence that powers our future.`
  }
]

const PULL_QUOTE = {
  text: "Data is the new code. In the old world, you wrote logic. In the AI world, you curate data. Scale is the compiler for that data.",
  by: "Alexandr Wang, Founder & CEO, Scale AI"
}

const LESSON = "Scale AI's success proves that 'boring' infrastructure is often the most lucrative bet. By focusing on data quality—a problem most researchers ignored—Wang built a moat that even the largest tech giants now depend on."

const INVESTORS = [
  "Accel (Early Backer)",
  "Founders Fund",
  "Nvidia",
  "Amazon",
  "Meta Platforms",
  "Tiger Global",
  "Dragoneer Investment Group",
  "Greenoaks Capital",
]

const FAQS = [
  {
    q: "Is Scale AI a public company?",
    a: "No, Scale AI is a private, venture-backed company. As of mid-2025, it is valued at $14 billion and has not yet announced a date for an Initial Public Offering (IPO)."
  },
  {
    q: "What is RLHF and why does Scale AI do it?",
    a: "RLHF (Reinforcement Learning from Human Feedback) is a technique where humans rank and correct AI responses to help models become more helpful and safe. Scale AI provides the massive expert workforce needed to perform this at scale for models like GPT-4."
  },
  {
    q: "Who are Scale AI's main competitors?",
    a: "Scale AI competes with Labelbox, Snorkel AI, and Appen. However, Scale differentiates through its deep integration with the US Government and its specialized platforms for Generative AI."
  },
  {
    q: "Does Scale AI use humans or AI to label data?",
    a: "Scale uses a hybrid approach. It uses AI to perform 'pre-labelling' and then employs a global network of human specialists to verify and refine the data, ensuring high-accuracy ground truth."
  },
]

const RELATED = [
  { name: "OpenAI", slug: "openai-profile", cat: "Generative AI", val: "$100B+" },
  { name: "Anthropic", slug: "anthropic-ai", cat: "AI Safety", val: "$18B" },
  { name: "Databricks", slug: "databricks-data", cat: "Data Lakehouse", val: "$43B" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ScaleAIPage() {
  const accent = "#6366f1" // Scale Indigo
  const accentDark = "#4f46e5"
  const accentBg = "#f5f3ff"
  const accentBorder = "#ddd6fe"

  useEffect(() => {
    const existing = document.getElementById("page-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "page-jsonld"
      s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(s)
    }
    return () => { document.getElementById("page-jsonld")?.remove() }
  }, [])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4em; font-weight: 900; line-height: 0.82;
          float: left; margin-right: 0.08em; margin-top: 0.06em; color: #1A1208;
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .4s ease both; }
        @media (min-width:640px) {
          .ncols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0; }
          .ncols > div { padding:0 1.5rem; border-right:1px solid #C8C2B4; }
          .ncols > div:first-child { padding-left:0; }
          .ncols > div:last-child { border-right:none; padding-right:0; }
        }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Scale AI Founder Story — Alexandr Wang | World's Data Foundry for Generative AI & Defense | UpForge
      </h1>

      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" },
            { n: "Startup Registry", h: "/startup" },
            { n: "AI Infrastructure", h: "/ai-startups" },
            { n: "Scale AI", h: "/startup/scale-ai" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <a href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</a>
              ) : (
                <span className="text-[#1A1208] font-semibold">{b.n}</span>
              )}
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Global Startup Registry · AI Infrastructure
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            The definitive record of builders — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span>
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · Artificial Intelligence</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Data Infrastructure · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">San Francisco, CA</span>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >

          {/* ────── LEFT: EDITORIAL ────── */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category tag */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}
              >
                AI / DATA INFRASTRUCTURE
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              The 19-Year-Old MIT Dropout Who Became the 
              Architect of the <em style={{ color: accent }}>AI Revolution.</em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Alexandr Wang didn't build a chatbot. He built the refinery that processes the raw data 
              required to make those chatbots think. Scale AI has quietly become the most critical 
              chokepoint in the global AI race. $14B valuation. $1.6B raised. The primary data 
              engine for OpenAI, Meta, and the US Defense. This is the story of how data 
              became the world's most valuable commodity.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "San Francisco",
                "Est. 2016",
                "World's Data Foundry",
              ].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden mb-8">
              <img
                src="/scaleai.jpg"
                alt="Alexandr Wang, Founder & CEO of Scale AI — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Alexandr Wang</p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Founder & CEO · Scale AI
                </p>
              </div>
            </div>

            {/* 3-col newspaper body */}
            <div className="ncols">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{
                      fontSize: 11,
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 pt-6 pb-6 text-center"
              style={{ borderTop: `3px double ${accent}`, borderBottom: "1px solid #C8C2B4" }}
            >
              <span style={{ display: "block", color: accentDark, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(16px,2.2vw,22px)" }}
              >
                "{PULL_QUOTE.text}"
              </blockquote>
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* Company Timeline */}
            <div className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: accent }}
                      />
                      {i < TIMELINE.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1"
                          style={{ background: accentBorder, minHeight: 24 }}
                        />
                      )}
                    </div>
                    <div>
                      <span
                        className="text-[9px] font-black uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {t.year}
                      </span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ */}
            <section className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="mb-4 pb-4"
                  style={{ borderBottom: "1px solid #D8D2C4" }}
                >
                  <h3
                    className="font-bold text-[#1A1208] mb-1.5"
                    style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-[12.5px] text-[#5A4A30] leading-relaxed"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </section>
          </article>

          {/* ────── RIGHT: SIDEBAR ────── */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">

              {/* Founder image */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/scaleai.jpg"
                  alt="Alexandr Wang, Founder & CEO of Scale AI — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Alexandr Wang</p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Founder & CEO · Scale AI
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://scale.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Scale AI official website"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      scale.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/scaleai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Scale AI on LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#0077b5", fontFamily: "system-ui,sans-serif" }}
                    >
                      LinkedIn — Scale AI
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#0077b5" }} />
                </a>
              </div>

              {/* By the Numbers */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Scale AI Performance
                  </p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt
                        className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {s.l}
                      </dt>
                      <dd
                        className="pf font-black text-[#1A1208] leading-none"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* The Lesson */}
              <div
                className="px-4 py-4"
                style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
              >
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                >
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
              </div>

              {/* Key Investors */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Key Investors
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
                    <p
                      key={i}
                      className="flex items-center gap-2 text-[11px] text-[#2C2010]"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 1,
                          background: accent,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              {/* Also Read */}
              <div>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-3"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                >
                  Also Read on UpForge
                </p>
                {RELATED.map((r) => (
                  <a
                    key={r.slug}
                    href={`/startup/${r.slug}`}
                    className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid #EDE9DF", textDecoration: "none" }}
                  >
                    <div>
                      <p
                        className="text-[11px] font-bold text-[#1A1208]"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {r.name}
                      </p>
                      <p className="text-[9px] text-[#AAA] uppercase tracking-wider">
                        {r.cat} · {r.val}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </a>
                ))}
              </div>

            </div>
          </aside>
        </div>

        {/* ── SEO INTERNAL LINKS ── */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Explore the AI Infrastructure Ecosystem
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Top AI Startups 2026", h: "/ai-startups-2026" },
              { l: "Generative AI Landscape", h: "/gen-ai-guide" },
              { l: "Nvidia Portfolio List", h: "/nvidia-investments" },
              { l: "Scale AI vs Snorkel AI", h: "/vs/scale-vs-snorkel" },
              { l: "Sovereign AI Guide", h: "/sovereign-ai" },
              { l: "Defense Tech Startups", h: "/defense-tech" },
              { l: "Startup Registry", h: "/startup" },
              { l: "Submit Profile", h: "/submit" },
            ].map((lnk) => (
              <a
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white", textDecoration: "none" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </a>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-2">
          <div
            className="grid sm:grid-cols-2 gap-6 items-center pb-8"
            style={{ borderBottom: "1px solid #D8D2C4" }}
          >
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building for the AI future? Get verified on UpForge.
              </p>
              <p
                className="text-[12px] text-[#6B5C40]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                Independent verification. Global reach. Google Indexed.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <a
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Data sourced from SEC filings, Forbes, Reuters, and Scale AI official press 
            as of March 2026. UpForge is an independent registry. No paid placements.
            Valuations are based on the latest Series F private equity round.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "AI Startup List", h: "/ai-startups" },
                { l: "Registry Home", h: "/startup" },
                { l: "Unicorn List", h: "/unicorns" },
                { l: "OpenAI Profile", h: "/startup/openai-profile" },
                { l: "Defense Tech", h: "/defense-tech" },
                { l: "Data Infrastructure", h: "/data-inf-startups" },
                { l: "Submit Profile", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <a
                    href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
