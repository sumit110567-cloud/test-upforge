"use client"

// app/startup/sarvam-ai/page.tsx — FIXED (no duplicate FAQPage, mainEntity as array)
// Fix: removed all itemScope/itemProp microdata from FAQ HTML → JSON-LD only
// Fix: mainEntity is now a proper array []

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// Updated video ID from https://youtu.be/c8Dc6vRE7VI
const VIDEO_ID = "c8Dc6vRE7VI"

// Updated founder image
const FOUNDER_IMG = "https://static.businessworld.in/sarvam_20250427233307_original_image_44.webp"

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/sarvam-ai#article",
      "headline": "Sarvam AI — How Vivek Raghavan & Pratyush Kumar Are Building India's Sovereign LLMs for 22 Indian Languages",
      "description": "Sarvam AI founders Vivek Raghavan and Pratyush Kumar are building India's own large language models for 22 Indian languages. Backed by Peak XV, Lightspeed and India's IndiaAI Mission. Valued at $1B+, $70M raised. Full founder story, funding timeline and vision on UpForge.",
      "url": "https://upforge.in/startup/sarvam-ai",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-10T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": { "@type": "ImageObject", "url": FOUNDER_IMG, "width": 1200, "height": 630 },
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": [
        {
          "@type": "Person", "name": "Vivek Raghavan",
          "jobTitle": "Co-Founder & CEO", "worksFor": { "@type": "Organization", "name": "Sarvam AI" },
          "sameAs": ["https://www.linkedin.com/in/vivekraghavan/"]
        },
        {
          "@type": "Person", "name": "Pratyush Kumar",
          "jobTitle": "Co-Founder & CTO", "worksFor": { "@type": "Organization", "name": "Sarvam AI" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Sarvam AI",
        "url": "https://www.sarvam.ai",
        "foundingDate": "2023",
        "foundingLocation": { "@type": "Place", "addressLocality": "Bengaluru", "addressCountry": "IN" },
        "description": "Sarvam AI builds sovereign large language models optimised for 22 Indian languages and Indian enterprise, government and consumer use cases.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 100 },
        "sameAs": ["https://www.sarvam.ai", "https://twitter.com/sarvam_ai"]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "AI Startups India", "item": "https://upforge.in/top-ai-startups" },
        { "@type": "ListItem", "position": 4, "name": "Sarvam AI", "item": "https://upforge.in/startup/sarvam-ai" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Sarvam AI?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sarvam AI was co-founded in 2023 by Vivek Raghavan (CEO) and Pratyush Kumar (CTO) in Bengaluru, India. Both founders previously led AI4Bharat at IIT Madras — a government-backed initiative to build open-source language technology for all 22 scheduled Indian languages. Their academic and research background directly informs Sarvam's architecture decisions." }
        },
        {
          "@type": "Question",
          "name": "How much funding has Sarvam AI raised and what is its valuation?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sarvam AI has raised over $70 million in total funding. The Series A of $41M was led by Peak XV Partners (formerly Sequoia India) and Lightspeed India. The company also secured anchor funding from India's IndiaAI Mission — a $1.2B national initiative. As of 2025, Sarvam AI is valued at over $1 billion, making it one of India's newest AI unicorns." }
        },
        {
          "@type": "Question",
          "name": "What does Sarvam AI build?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sarvam AI builds large language models (LLMs) trained from scratch on 22 Indian languages including Hindi, Tamil, Telugu, Bengali, Kannada, Malayalam, Odia, Marathi and more. Unlike fine-tuned Western models, Sarvam's LLMs understand Dravidian and Indo-Aryan grammatical structures natively. Their products include voice AI, conversational APIs, and enterprise tools deployed in government citizen services, healthcare, and agriculture." }
        },
        {
          "@type": "Question",
          "name": "Is Sarvam AI a unicorn?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. As of 2025, Sarvam AI is valued at over $1 billion, making it one of India's AI unicorns. The company achieved unicorn status within two years of founding — one of the fastest in Indian startup history — driven by its IndiaAI Mission partnership and Series A funding from Peak XV and Lightspeed." }
        },
        {
          "@type": "Question",
          "name": "What is the IndiaAI Mission and how is Sarvam AI involved?",
          "acceptedAnswer": { "@type": "Answer", "text": "The IndiaAI Mission is a Government of India initiative with a $1.2 billion budget to build sovereign AI infrastructure for the country. Sarvam AI was selected as the primary model development partner, giving it access to state capacity, government datasets and sovereign deployment rights across Indian public services." }
        }
      ]
    }
  ]
}

const STATS = [
  { l: "Valuation", v: "$1B+" },
  { l: "Funding", v: "$70M+" },
  { l: "Languages", v: "22 Indian" },
  { l: "Founded", v: "2023" },
  { l: "Employees", v: "100+" },
  { l: "Govt Partner", v: "IndiaAI" },
]

const TIMELINE = [
  { year: "2023", event: "Sarvam AI founded in Bengaluru by Vivek Raghavan & Pratyush Kumar, both ex-AI4Bharat, IIT Madras" },
  { year: "Early 2024", event: "Sarvam-1 model launched — first Indian LLM trained on 22 Indic languages at scale, not just fine-tuned" },
  { year: "Mid 2024", event: "$41M Series A raised. Peak XV & Lightspeed India lead the round" },
  { year: "Late 2024", event: "Selected as anchor partner for Government of India's IndiaAI Mission — a $1.2B national AI initiative" },
  { year: "2025", event: "Total funding crosses $70M. Valuation exceeds $1 billion. Sarvam declared India's sovereign AI infrastructure layer" },
]

const RELATED = [
  { name: "Zepto", slug: "zepto", cat: "Quick Commerce", val: "$5.9B" },
  { name: "Zerodha", slug: "zerodha", cat: "Fintech", val: "$8.2B" },
  { name: "boAt", slug: "boat", cat: "Consumer Tech", val: "$1.3B" },
]

const COLS = [
  {
    h: "The India-First AI Vision",
    b: `In 2023, when the world was fixated on GPT-4 and the race between OpenAI and Google, two researchers in Bengaluru made a quieter but more consequential decision: India needed its own foundation models.\n\nVivek Raghavan and Pratyush Kumar had spent years at IIT Madras and AI4Bharat — a government-backed initiative to build language technology for the subcontinent. They knew something most Silicon Valley engineers didn't: that 90% of India's population primarily communicates in languages that are massively underrepresented in global AI training data.\n\nSarvam AI was built on a single premise — that the AI era would only serve India if India had sovereign infrastructure to participate in it on its own terms.`
  },
  {
    h: "Building India's Own LLM",
    b: `Sarvam's technical bet was specific and hard. Rather than fine-tuning existing Western models on Indian data, the founders committed to training models from scratch — with architectures that understood the grammatical structures of Dravidian and Indo-Aryan language families.\n\nBy early 2024, Sarvam-1 launched: the first LLM trained comprehensively on 22 Indian languages. It was not a translation model. It was a reasoning model — one that could understand context, disambiguate honorifics, and navigate the code-switching between English and Hindi that defines how educated Indians actually communicate.\n\nThe early results stunned enterprise customers. Sarvam's voice AI and conversational APIs outperformed global models on Hindi, Tamil, and Telugu by margins that made the product genuinely competitive at enterprise scale.`
  },
  {
    h: "The Sovereign AI Moment",
    b: `As the global AI race intensified through 2024, India's government moved decisively. The IndiaAI Mission — a $1.2B national initiative — selected Sarvam AI as its primary model development partner. The implications were enormous: state capacity, government data access, and sovereign deployment rights.\n\nThe $41M Series A from Peak XV and Lightspeed followed. Total funding crossed $70M. Valuation crossed $1B.\n\nBut what Raghavan describes as the real validation isn't the capital — it's the deployment. Sarvam's models now power government citizen services, agricultural advisory platforms, and healthcare chatbots across India's rural heartland. These are users GPT-4 was never designed for. They speak Bhojpuri, Odia, and Marathi. They use voice, not keyboards.\n\nFor them, Sarvam AI isn't a feature — it's the only viable interface.`
  }
]

const PULL_QUOTE = {
  text: "We are not building a product. We are building infrastructure for a billion people who deserve AI in their own languages.",
  by: "Vivek Raghavan, Co-Founder & CEO, Sarvam AI"
}

const LESSON = "In the AI era, the country that owns the infrastructure layer owns the future. Sarvam bet on sovereignty before it was fashionable — and won."

const INVESTORS = ["Peak XV Partners (Sequoia India)", "Lightspeed India", "IndiaAI Mission (Govt.)", "Surge", "Individual Angels"]

const FAQS = [
  { q: "Who are the founders of Sarvam AI?", a: "Sarvam AI was co-founded by Vivek Raghavan (CEO) and Pratyush Kumar (CTO) in 2023. Both previously led AI4Bharat at IIT Madras — the open-source initiative building language technology for all 22 scheduled Indian languages. Raghavan leads strategy and partnerships; Kumar leads model research and technical architecture." },
  { q: "How much funding has Sarvam AI raised?", a: "Sarvam AI has raised over $70M in total funding. The Series A of $41M was led by Peak XV Partners (formerly Sequoia India) and Lightspeed India. The company also secured anchor funding through India's IndiaAI Mission — a $1.2B national initiative. Valuation crossed $1 billion in 2025." },
  { q: "What makes Sarvam AI different from other AI companies?", a: "Sarvam AI trains LLMs from scratch on Indian language data — rather than fine-tuning Western models. Their models natively understand the grammatical structures of Dravidian and Indo-Aryan languages and outperform global models on Hindi, Tamil, and Telugu benchmarks. They also hold a unique position as India's government-backed sovereign AI infrastructure partner." },
  { q: "Is Sarvam AI a unicorn?", a: "Yes. As of 2025, Sarvam AI is valued at over $1 billion, making it one of India's AI unicorns — achieved within just two years of founding, one of the fastest in Indian startup history." },
  { q: "What is the IndiaAI Mission and why does it matter for Sarvam AI?", a: "The IndiaAI Mission is a Government of India programme with a $1.2B budget to build sovereign AI infrastructure. Sarvam AI was selected as the primary model development partner, granting access to government datasets, state compute infrastructure, and deployment rights across Indian public services — a structural advantage no other Indian AI startup has." },
]

export default function SarvamAIPage() {
  const accent = "#2563EB"
  const accentBg = "#EFF6FF"
  const accentBorder = "#BFDBFE"

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
        ::-webkit-scrollbar { width:3px; } ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      <h1 className="sr-only">Sarvam AI Founder Story — Vivek Raghavan &amp; Pratyush Kumar | India's Sovereign LLM Unicorn | UpForge</h1>

      {/* BREADCRUMB */}
      <nav aria-label="Breadcrumb" className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" }, { n: "Startup Registry", h: "/startup" },
            { n: "AI Startups", h: "/top-ai-startups" }, { n: "Sarvam AI", h: "/startup/sarvam-ai" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1
                ? <Link href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</Link>
                : <span className="text-[#1A1208] font-semibold">{b.n}</span>}
              {i < arr.length - 1 && <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />}
            </li>
          ))}
        </ol>
      </nav>

      {/* MASTHEAD */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="text-center px-4 pt-3 pb-6" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Startup Registry · Artificial Intelligence
          </p>
          <p className="pf font-black leading-none text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}>
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            India's independent startup registry — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span>
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
        <div className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}>
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition No. 01</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            Artificial Intelligence · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
        </div>
      </header>

      {/* MAIN */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}>

          {/* LEFT EDITORIAL */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}>ARTIFICIAL INTELLIGENCE</span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">No. 01 · March 2026</span>
            </div>
            <h2 className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}>
              If India wants to lead the AI era, it cannot rely only on models built elsewhere.
            </h2>
            <p className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}>
              Sarvam AI is building the foundational AI infrastructure India needs — large language models
              designed not just to translate Indian languages, but to <em>think</em> in them.
              With $70M raised, India's government as anchor partner, and a $1B+ valuation, Vivek Raghavan
              and Pratyush Kumar are building the sovereign AI layer for 1.4 billion people.
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", "Bengaluru, KA", "Est. 2023", "India's Sovereign AI"].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* MOBILE PHOTO */}
            <div className="lg:hidden mb-8">
              <img src={FOUNDER_IMG}
                alt="Vivek Raghavan and Pratyush Kumar, Co-Founders of Sarvam AI — India's Sovereign LLM Startup"
                className="w-full object-cover object-top" style={{ height: "min(300px,60vw)" }} loading="eager" />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Vivek Raghavan & Pratyush Kumar</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founders · Sarvam AI</p>
              </div>
            </div>

            {/* 3-COL BODY */}
            <div className="ncols">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3 className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}>
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p key={pi} className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}>{p}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* PULL QUOTE */}
            <div className="mt-10 pt-6 pb-6 text-center"
              style={{ borderTop: `3px double ${accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: accent, fontSize: 24, marginBottom: 10 }}>❝</span>
              <blockquote className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(16px,2.2vw,22px)" }}>
                "{PULL_QUOTE.text}"
              </blockquote>
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* YOUTUBE EMBED */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-3"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Watch · Sarvam AI in Conversation
              </p>
              <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
                <iframe src={`https://www.youtube.com/embed/${VIDEO_ID}?si=zBilS3qJcqpL7YCq`}
                  title="Sarvam AI — Vivek Raghavan on Building India's Sovereign LLM for 22 Indian Languages | UpForge Founder Interview"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="absolute inset-0 w-full h-full" loading="lazy"
                  style={{ border: "none" }} />
              </div>
              <p className="text-[10px] text-[#AAA] mt-2 italic" style={{ fontFamily: "system-ui,sans-serif" }}>
                Vivek Raghavan on building India's sovereign AI infrastructure, IndiaAI Mission, and the future of Indic LLMs — UpForge Featured Interview
              </p>
            </div>

            {/* TIMELINE */}
            <div className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
                      {i < TIMELINE.length - 1 && <div className="w-px flex-1 mt-1" style={{ background: accentBorder, minHeight: 24 }} />}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>{t.year}</span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata. JSON-LD above handles schema. */}
            <section className="mt-8">
              <p className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}>
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: "1px solid #D8D2C4" }}>
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}>{faq.q}</h3>
                  <p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>{faq.a}</p>
                </div>
              ))}
            </section>
          </article>

          {/* RIGHT SIDEBAR */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img src={FOUNDER_IMG}
                  alt="Vivek Raghavan and Pratyush Kumar, Co-Founders of Sarvam AI — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top" loading="eager" />
                <div className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}>
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Vivek Raghavan & Pratyush Kumar</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>Co-Founders · Sarvam AI</p>
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>Featured Watch</p>
                <a href={`https://youtu.be/${VIDEO_ID}`} target="_blank" rel="noopener noreferrer"
                  className="block relative group" aria-label="Watch Sarvam AI founder Vivek Raghavan interview on YouTube">
                  <img src={`https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`}
                    alt="Sarvam AI — Vivek Raghavan on building India's sovereign LLM and IndiaAI Mission"
                    className="w-full object-cover" style={{ height: 140, border: `1px solid ${accentBorder}` }}
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg` }} />
                  <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(0,0,0,0.3)" }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,0,0,0.9)" }}>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </a>
                <p className="text-[9px] text-[#AAA] mt-1.5 italic" style={{ fontFamily: "system-ui,sans-serif" }}>Vivek Raghavan on India's sovereign AI mission and Indic LLMs</p>
              </div>

              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.25rem" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>{LESSON}</p>
              </div>

              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>Key Investors</p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
                    <p key={i} className="flex items-center gap-2 text-[11px] text-[#2C2010]" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 1, background: accent, display: "inline-block", flexShrink: 0 }} />
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>Also Read on UpForge</p>
                {RELATED.map((r) => (
                  <Link key={r.slug} href={`/startup/${r.slug}`}
                    className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid #EDE9DF" }}>
                    <div>
                      <p className="text-[11px] font-bold text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{r.name}</p>
                      <p className="text-[9px] text-[#AAA] uppercase tracking-wider">{r.cat} · {r.val}</p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* SEO INTERNAL LINKS */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>Explore More AI Startups on UpForge</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Top AI Startups India 2026", h: "/top-ai-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Sarvam AI vs Krutrim", h: "/ai-startups/sarvam-vs-krutrim" },
              { l: "AI4Bharat Research", h: "/research/ai4bharat" },
              { l: "Deep Tech Startups India", h: "/deep-tech-startups" },
              { l: "NLP India Landscape", h: "/nlp-india" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link key={lnk.h} href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white" }}>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>Building India's next unicorn? Get verified on UpForge.</p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>Free startup profiles. Independent verification. Indexed by Google.</p>
            </div>
            <div className="flex sm:justify-end">
              <Link href="/submit" className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}>
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            * Data sourced from public filings, Tracxn, Inc42, Forbes India, and Sarvam AI press releases as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
          </p>
          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Indian AI Startups", h: "/top-ai-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Fintech Startups", h: "/fintech-startups" },
                { l: "boAt Profile", h: "/startup/boat" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Spinny Profile", h: "/startup/spinny-cars" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
