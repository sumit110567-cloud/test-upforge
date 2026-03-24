"use client"

// app/startup/rosebud-ai/page.tsx
// UpForge — Rosebud AI · Lisha Li Founder Chronicle
// SEO: Rosebud AI, Lisha Li, AI Game Maker, Text-to-Game, Generative AI for Gaming
// Designed for maximum crawlability and indexing on Google Search.

import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/rosebud-ai#article",
      "headline": "Rosebud AI — How Lisha Li is Building the 'Roblox of the Generative AI Era'",
      "description": "The definitive Rosebud AI founder story. Discover how Lisha Li is leveraging generative AI to turn natural language into fully playable games with Rosebud Gamemaker.",
      "url": "https://upforge.in/startup/rosebud-ai",
      "datePublished": "2026-03-25T00:00:00+05:30",
      "dateModified": "2026-03-25T00:00:00+05:30",
      "inLanguage": "en-US",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-rosebud-ai.webp",
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
          "name": "Lisha Li",
          "jobTitle": "Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Rosebud AI" },
          "sameAs": ["https://www.linkedin.com/in/lishali/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Rosebud AI",
        "url": "https://rosebud.ai",
        "foundingDate": "2019",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "description": "Rosebud AI is a generative AI company building a platform for AI-powered game creation, enabling users to create games from text descriptions.",
        "sameAs": [
          "https://rosebud.ai",
          "https://www.linkedin.com/company/rosebud-ai/",
          "https://twitter.com/rosebudai"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "GameTech Startups", "item": "https://upforge.in/gametech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Rosebud AI", "item": "https://upforge.in/startup/rosebud-ai" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Rosebud AI Gamemaker?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rosebud AI Gamemaker is a platform that uses LLMs to convert natural language prompts into fully functional browser games. It handles asset generation, code writing, and game logic automatically."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the CEO of Rosebud AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lisha Li is the Founder and CEO of Rosebud AI. She holds a PhD in Statistics from UC Berkeley and is a veteran of the AI and venture capital space."
          }
        },
        {
          "@type": "Question",
          "name": "Is Rosebud AI free to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rosebud AI offers a free tier for users to begin creating and sharing games, with premium subscription options for advanced creators and developers needing more compute and asset generation power."
          }
        },
        {
          "@type": "Question",
          "name": "Which investors backed Rosebud AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Rosebud AI is backed by Y Combinator (W19), Khosla Ventures, and several high-profile individual investors in the AI and gaming sectors."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "YC Batch", v: "W19" },
  { l: "Focus", v: "Text-to-Game" },
  { l: "Founded", v: "2019" },
  { l: "HQ", v: "San Francisco" },
  { l: "Community", v: "100K+ Creators" },
  { l: "Tech Stack", v: "Phaser / WebGL" },
]

const TIMELINE = [
  { year: "2019", event: "Lisha Li founds Rosebud AI and joins Y Combinator. Early focus is on AI-generated synthetic media and avatars for marketing." },
  { year: "2020", event: "Launch of 'Generative Photos', an AI-powered library of diverse human faces, gaining massive traction in the creative industry." },
  { year: "2022", event: "Strategic pivot toward gaming. The team recognizes that the same generative tech can be used to build entire virtual worlds." },
  { year: "2023", event: "Launch of Rosebud AI Gamemaker in Beta. Users begin creating thousands of games using natural language prompts." },
  { year: "2024", event: "Introduction of 'Pixie', an AI NPC assistant. Expansion of the platform to support multiplayer and complex 3D asset generation." },
  { year: "Early 2026", event: "Rosebud AI announces integration with major social platforms, allowing one-click publishing of AI-generated games to billions of users." },
]

const COLS = [
  {
    h: "The Democratization of Play",
    b: `For decades, the barrier to entry for game development was a brick wall of C++ and complex physics engines. Lisha Li, a PhD from UC Berkeley, saw an opportunity to tear that wall down. Rosebud AI's mission is simple: if you can describe it, you can play it.\n\nRosebud's Gamemaker isn't just a tool; it's a creative shift. By using LLMs as a "translator" between human thought and game code, Rosebud allows anyone—from a 10-year-old student to a veteran designer—to prototype and deploy games in minutes. "We are moving from a world of consumers to a world of creators," Li notes. This vision has positioned Rosebud as a frontrunner in the emerging 'Creative AI' sector.`
  },
  {
    h: "The Generative Game Stack",
    b: `What sets Rosebud AI apart from traditional "no-code" builders is its deep integration of generative models. It doesn't just provide templates; it builds assets from scratch. Whether it's a pixel-art character, a synth-wave background track, or the complex Javascript logic for a platformer, Rosebud's AI handles the heavy lifting.\n\nThe platform utilizes the Phaser engine under the hood, ensuring that the games are high-performance and easily shareable in any browser. This technical choice allows for instant iteration—users can tweak game physics or change the entire art style with a single chat prompt, a process that used to take days of manual labor in traditional studios.`
  },
  {
    h: "The Future of Social Gaming",
    b: `As Rosebud moves into 2026, the focus has shifted from solo creation to social distribution. By making game creation as easy as tweeting, Rosebud is creating a new kind of "instant gaming" ecosystem. The platform now supports AI-driven NPCs that can hold conversations with players, creating dynamic experiences that are never the same twice.\n\nWith backing from Khosla Ventures and the YC network, Rosebud AI is well-funded to tackle the challenge of 3D world generation. As VR and AR become more mainstream, Rosebud’s ability to generate space and interaction via text will be the foundational infrastructure for the next generation of social virtual experiences.`
  }
]

const PULL_QUOTE = {
  text: "Generative AI will do for games what the smartphone did for photography. It turns every player into a creator and every idea into a world.",
  by: "Lisha Li, Founder & CEO, Rosebud AI"
}

const LESSON = "Rosebud AI demonstrates the power of the 'Horizontal Pivot.' By taking their core competency in generative imagery and applying it to the massive gaming market, they found a product-market fit that is redefining digital entertainment."

const INVESTORS = [
  "Y Combinator (W19)",
  "Khosla Ventures",
  "Balaji Srinivasan",
  "Various AI Researchers",
  "SV Angel",
  "A-Grade Investments",
]

const FAQS = [
  {
    q: "Do I need to know how to code for Rosebud AI?",
    a: "No. Rosebud is designed for non-coders. You provide text prompts, and the AI generates the code for you. However, advanced users can still view and edit the generated code to fine-tune their games."
  },
  {
    q: "What kind of games can I make?",
    a: "Currently, Rosebud is optimized for 2D and 2.5D browser games, including platformers, RPGs, puzzle games, and top-down shooters. Support for 3D environments is currently in advanced testing."
  },
  {
    q: "Can I monetize my Rosebud AI games?",
    a: "Yes. Rosebud AI provides hosting and sharing tools, and many creators are exploring ad-supported and 'play-to-earn' models as the platform expands its monetization features."
  },
  {
    q: "How does Rosebud handle copyright?",
    a: "Rosebud AI uses proprietary models trained on permissive datasets. Users generally own the creative output of their games, though terms of service provide the platform with the necessary rights to host and display the content."
  },
]

const RELATED = [
  { name: "Roblox", slug: "roblox-corp", cat: "UGC Gaming", val: "$20B+" },
  { name: "Midjourney", slug: "midjourney-ai", cat: "Generative Art", val: "$1B+" },
  { name: "Hugging Face", slug: "hugging-face", cat: "AI Infrastructure", val: "$4.5B" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function RosebudAIPage() {
  const accent = "#ec4899" // Rosebud Pink/Magenta
  const accentDark = "#db2777"
  const accentBg = "#fdf2f8"
  const accentBorder = "#fbcfe8"

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
        Rosebud AI Founder Story — Lisha Li | The Future of AI-Generated Games | Text-to-Game | UpForge
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
            { n: "GameTech", h: "/gametech-startups" },
            { n: "Rosebud AI", h: "/startup/rosebud-ai" },
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
            UpForge · Global Startup Registry · Generative Media
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            Documenting the architects of the Text-to-Game revolution — March 2026
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
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · Creative AI</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Gaming Infrastructure · March 2026
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
                AI / GAMETECH
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              The Berkeley Statistician Building the 
              First Instant <em style={{ color: accent }}>Game Engine.</em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Lisha Li spent her academic career mastering the math of data. Now, she is 
              using it to automate creativity. Rosebud AI has evolved from a synthetic face generator 
              into the most advanced text-to-game platform on earth. With a simple chat prompt, 
              thousands of creators are bypassing years of coding to build fully playable, 
              high-fidelity browser games. In the world of Rosebud, the only limit 
              on the virtual world is the user's vocabulary.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "San Francisco",
                "Est. 2019",
                "Creative AI Leader",
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
                src="/rosebud-ai.jpg"
                alt="Lisha Li, Founder & CEO of Rosebud AI — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Lisha Li</p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Founder & CEO · Rosebud AI
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
                className="pf italic text-[#1A1208] text-balance leading-[1.7] max-w-2xl mx-auto px-4"
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
                  src="/rosebud-ai.jpg"
                  alt="Lisha Li, Founder & CEO of Rosebud AI — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Lisha Li</p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Founder & CEO · Rosebud AI
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://rosebud.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Rosebud AI official website"
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
                      rosebud.ai — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/rosebud-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Rosebud AI on LinkedIn"
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
                      LinkedIn — Rosebud AI
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
                    Rosebud AI Scale
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
            Explore the GameTech & AI Ecosystem
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Future of AI Gaming 2026", h: "/ai-gaming-guide" },
              { l: "Rosebud vs Roblox", h: "/vs/rosebud-vs-roblox" },
              { l: "Y Combinator Startups", h: "/yc-startups-list" },
              { l: "Midjourney Profile", h: "/startup/midjourney-ai" },
              { l: "Text-to-World Tech", h: "/generative-worlds-guide" },
              { l: "Creative AI Trends", h: "/creative-ai-future" },
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
                Building the future of entertainment? Get verified on UpForge.
              </p>
              <p
                className="text-[12px] text-[#6B5C40]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                Independent verification. Global authority. Indexed by Google.
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
            * Data sourced from public filings, Y Combinator, and Rosebud AI official
            announcements as of March 2026. UpForge is an independent registry. No paid 
            placements or sponsored rankings. Valuations are estimates based on latest market cycles.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "AI Startup List", h: "/ai-startups" },
                { l: "Registry Home", h: "/startup" },
                { l: "Unicorn List", h: "/unicorns" },
                { l: "GameTech Guide", h: "/gametech-guide" },
                { l: "YC Startups", h: "/yc-startups-list" },
                { l: "Creative AI", h: "/creative-ai-future" },
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
