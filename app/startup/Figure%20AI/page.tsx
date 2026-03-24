"use client"

// app/startup/figure-ai/page.tsx
// UpForge — Figure AI · Brett Adcock Founder Chronicle
// SEO: Figure AI Humanoid Robots, Brett Adcock, Figure 02, BMW Robotics, OpenAI Partnership
// Designed for maximum crawlability and indexing on Google Search.

import { useEffect } from "react"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/figure-ai#article",
      "headline": "Figure AI — How Brett Adcock is Engineering the First Commercially Viable Humanoid Robot",
      "description": "The definitive Figure AI founder story. Brett Adcock's mission to build Figure 02, a general-purpose humanoid robot backed by Microsoft, Nvidia, OpenAI, and Jeff Bezos.",
      "url": "https://upforge.in/startup/figure-ai",
      "datePublished": "2026-03-25T00:00:00+05:30",
      "dateModified": "2026-03-25T00:00:00+05:30",
      "inLanguage": "en-US",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-figure-ai.webp",
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
          "name": "Brett Adcock",
          "jobTitle": "Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Figure AI" },
          "sameAs": ["https://www.linkedin.com/in/brettadcock/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Figure AI",
        "url": "https://www.figure.ai",
        "foundingDate": "2022",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Sunnyvale",
          "addressRegion": "CA",
          "addressCountry": "US"
        },
        "description": "Figure AI is an AI robotics company developing autonomous general-purpose humanoid robots to address labor shortages and dangerous tasks.",
        "sameAs": [
          "https://www.figure.ai",
          "https://www.linkedin.com/company/figure-ai/",
          "https://twitter.com/figure_robot"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Robotics Startups", "item": "https://upforge.in/robotics-startups" },
        { "@type": "ListItem", "position": 4, "name": "Figure AI", "item": "https://upforge.in/startup/figure-ai" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Figure 02?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Figure 02 is Figure AI's second-generation humanoid robot. It features advanced speech-to-speech communication via OpenAI, increased processing power, and is designed for autonomous work in manufacturing and logistics environments."
          }
        },
        {
          "@type": "Question",
          "name": "Who is the founder of Figure AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Figure AI was founded in 2022 by Brett Adcock. Adcock is a serial entrepreneur who previously founded Archer Aviation (eVTOL) and Vettery (hiring marketplace)."
          }
        },
        {
          "@type": "Question",
          "name": "Which companies have invested in Figure AI?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Figure AI is backed by a 'who's who' of tech, including Microsoft, Nvidia, OpenAI Startup Fund, Jeff Bezos (Bezos Expeditions), Parkway Venture Capital, and Intel Capital."
          }
        },
        {
          "@type": "Question",
          "name": "What is the Figure AI and BMW partnership?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In 2024, Figure AI partnered with BMW Manufacturing to deploy humanoid robots at BMW's Spartanburg plant. The robots are tasked with automating difficult, unsafe, or tedious parts of the automotive production process."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Funding", v: "$754M+" },
  { l: "Valuation", v: "$2.6B" },
  { l: "Founded", v: "2022" },
  { l: "HQ", v: "Sunnyvale, CA" },
  { l: "Flagship Bot", v: "Figure 02" },
  { l: "Investors", v: "MSFT, Nvidia" },
]

const TIMELINE = [
  { year: "2022", event: "Brett Adcock founds Figure AI with a self-funded $100M investment. He recruits top talent from Boston Dynamics, Tesla, and Google X." },
  { year: "Mar 2023", event: "Figure AI reveals Figure 01, the world’s first commercially viable general-purpose humanoid robot. Proves dynamic walking within months of founding." },
  { year: "Jan 2024", event: "Landmark partnership announced with BMW Manufacturing to integrate humanoid robots into the automotive production line in South Carolina." },
  { year: "Feb 2024", event: "Raises $675M Series B at a $2.6B valuation. Investors include Jeff Bezos, Microsoft, Nvidia, and the OpenAI Startup Fund." },
  { year: "Aug 2024", event: "Figure 02 is launched. It features 3x more processing power than Figure 01 and integrated OpenAI models for natural language interaction." },
  { year: "Early 2026", event: "Figure robots reach 10,000+ hours of autonomous operation in industrial settings. Expansion into commercial logistics and elder-care pilot programs begins." },
]

const COLS = [
  {
    h: "The Master of Multimodal Hardware",
    b: `Brett Adcock doesn't build small things. After founding Archer Aviation to revolutionize urban flight, he turned his attention to a more grounded, yet equally complex challenge: the human labor shortage. Figure AI was born from the realization that our world is built for the human form. If you want a robot to work in a factory designed for people, the robot must be a person—functionally speaking.\n\nWhile most robotics companies focused on specialized tasks, Figure bet on generality. The goal was simple but audacious: create a machine that can think, see, and interact with the world exactly as we do. By recruiting a "dream team" of engineers from the world's most successful robotics labs, Adcock turned a whiteboard dream into walking steel in less than a year.`
  },
  {
    h: "The OpenAI & Nvidia Symbiosis",
    b: `Hardware is nothing without intelligence. In early 2024, Figure AI solidified its lead by partnering with OpenAI to develop specialized AI models for humanoid robots. This allowed Figure 02 to not just follow commands, but to engage in speech-to-speech reasoning. If you tell a Figure robot "I'm hungry," it can see an apple on a table, understand its nutritional value, and hand it to you while explaining its choice.\n\nSimultaneously, Nvidia's Omniverse became the digital playground for Figure's training. Using synthetic data and high-fidelity simulations, Figure robots can learn 1,000 hours of labor in a matter of minutes. This "digital-to-physical" pipeline is why Figure has outpaced legacy robotics firms that have been in the field for decades.`
  },
  {
    h: "A Legacy for the 21st Century",
    b: `The true test of a humanoid robot isn't a viral video; it's a factory floor. Figure's deployment at BMW’s Spartanburg plant marked the first time a general-purpose humanoid took over a role in a heavy manufacturing environment. The robots are currently mastering sheet metal manipulation and logistics—tasks that are ergonomically taxing for humans.\n\n"We are building Figure to expand human capability," Adcock says. With a $2.6B valuation and the backing of the world's largest sovereign and tech funds, the company is no longer a startup; it is the vanguard of a new industrial revolution. As Figure 02 begins mass production, the boundary between biological and mechanical labor is beginning to blur for the first time in history.`
  }
]

const PULL_QUOTE = {
  text: "Humanoids will be more impactful than the internet. We are moving from a world of digital intelligence to a world where intelligence has hands and feet.",
  by: "Brett Adcock, Founder & CEO, Figure AI"
}

const LESSON = "Figure AI demonstrates that vertical integration—owning both the brain (AI) and the body (Hardware)—is the only way to win in the next era of technology. Brett Adcock proved that speed is a moat when combined with world-class talent."

const INVESTORS = [
  "Jeff Bezos (Bezos Expeditions)",
  "Microsoft",
  "Nvidia",
  "OpenAI Startup Fund",
  "Parkway Venture Capital",
  "Intel Capital",
  "Align Ventures",
  "ARK Invest",
]

const FAQS = [
  {
    q: "How tall is the Figure robot?",
    a: "The Figure 02 stands approximately 5 feet 6 inches tall (1.6 meters) and weighs about 60kg. It is designed to match human proportions to work seamlessly in human-centric environments."
  },
  {
    q: "Can Figure robots talk?",
    a: "Yes. Through its partnership with OpenAI, Figure 02 features integrated microphones and speakers that allow for real-time, natural language conversation with humans, enabling it to explain its actions and take complex verbal instructions."
  },
  {
    q: "Is Figure AI better than Tesla Optimus?",
    a: "Both are leaders in the humanoid space. While Tesla benefits from its manufacturing scale and FSD data, Figure has differentiated itself through its direct partnership with OpenAI and its early, successful deployment in third-party industrial settings like BMW."
  },
  {
    q: "What is the battery life of Figure 02?",
    a: "Figure 02 is equipped with a high-capacity custom battery pack that allows for roughly 5 hours of continuous runtime, depending on the complexity of the tasks being performed."
  },
]

const RELATED = [
  { name: "Tesla Optimus", slug: "tesla-robotics", cat: "Humanoid Robots", val: "Internal" },
  { name: "Boston Dynamics", slug: "boston-dynamics", cat: "Legged Robotics", val: "$1.1B" },
  { name: "Archer Aviation", slug: "archer-aviation", cat: "eVTOL", val: "$2.5B" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function FigureAIPage() {
  const accent = "#f97316" // Figure Industrial Orange
  const accentDark = "#ea580c"
  const accentBg = "#fff7ed"
  const accentBorder = "#fed7aa"

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
        Figure AI Founder Story — Brett Adcock | Building the World's First General-Purpose Humanoid Robot | UpForge
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
            { n: "Robotics", h: "/robotics-startups" },
            { n: "Figure AI", h: "/startup/figure-ai" },
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
            UpForge · Global Startup Registry · Robotics & AI Hardware
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            Documenting the architects of the Silicon Labor Force — March 2026
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
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · Humanoid Era</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Industrial Robotics · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Sunnyvale, CA</span>
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
                ROBOTICS / HARDWARE
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              The Man Who Scaled the Sky, Now 
              Wants to Automate the <em style={{ color: accent }}>Human Form.</em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Brett Adcock spent his career building platforms for human labor and aviation. Now, 
              he is building the labor itself. Figure AI has surged into a $2.6B powerhouse, 
              marrying OpenAI's neural networks with the most advanced humanoid chassis on 
              earth. Backed by Bezos, Nvidia, and Microsoft, Figure is no longer just a 
              robotics lab—it is the blueprint for the next industrial workforce.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Sunnyvale",
                "Est. 2022",
                "The Labor Revolution",
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
                src="/figure-ai.jpg"
                alt="Brett Adcock, Founder & CEO of Figure AI — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
                onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800'; }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Brett Adcock</p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Founder & CEO · Figure AI
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
                  src="/figure-ai.jpg"
                  alt="Brett Adcock, Founder & CEO of Figure AI — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  onError={(e) => { (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Brett Adcock</p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Founder & CEO · Figure AI
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn links */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.figure.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Figure AI official website"
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
                      figure.ai — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/figure-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Figure AI on LinkedIn"
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
                      LinkedIn — Figure AI
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
                    Figure AI Scale
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
            Explore the Robotics & AI Hardware Ecosystem
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Humanoid Robots 2026", h: "/humanoid-robotics-guide" },
              { l: "Figure AI vs Tesla Optimus", h: "/vs/figure-vs-tesla" },
              { l: "Nvidia AI Hardware", h: "/nvidia-investments" },
              { l: "OpenAI Robotics Lab", h: "/openai-robotics-guide" },
              { l: "Future of Manufacturing", h: "/manufacturing-ai-impact" },
              { l: "Jeff Bezos Ventures", h: "/bezos-expeditions-list" },
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
                Building the future of labor? Get verified on UpForge.
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
            * Data sourced from public filings, Crunchbase, Reuters, and Figure AI official
            announcements as of March 2026. UpForge is an independent registry. No paid 
            placements or sponsored rankings. Valuations are estimates based on latest market cycles.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "AI Startup List", h: "/ai-startups" },
                { l: "Registry Home", h: "/startup" },
                { l: "Unicorn List", h: "/unicorns" },
                { l: "Robotics Guide", h: "/robotics-guide" },
                { l: "Tesla Optimus Profile", h: "/startup/tesla-robotics" },
                { l: "Archer Aviation Profile", h: "/startup/archer-aviation" },
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
