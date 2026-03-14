"use client"

// app/startup/bolna/page.tsx
// UpForge — Bolna · Maitreya Wagh & Prateek Sachan Founder Chronicle
// SEO: FAQPage ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.
// SEO: mainEntity is a proper JSON array [].

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/bolna#article",
      "headline": "Bolna — How Maitreya Wagh & Prateek Sachan Built India's Enterprise Voice AI Platform From a Rejected YC Idea",
      "description": "Bolna founder story — IIT Delhi alumnus Maitreya Wagh (ex-Bain & Company, Probo) and Prateek Sachan (ex-Zomato, BrowserStack, Atlassian) founded Bolna in 2024 to automate India's 1 billion daily enterprise voice calls. Rejected by YC five times, admitted YC F25, $6.92M raised from General Catalyst, Y Combinator, and Blume Ventures. 200,000+ daily calls. 1,050+ paying customers. The fastest-growing voice AI startup in India.",
      "url": "https://upforge.in/startup/bolna",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-bolna.webp",
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
          "name": "Maitreya Wagh",
          "jobTitle": "Co-Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Bolna" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Delhi" },
          "sameAs": ["https://www.linkedin.com/in/maitreya-wagh/"]
        },
        {
          "@type": "Person",
          "name": "Prateek Sachan",
          "jobTitle": "Co-Founder & CTO",
          "worksFor": { "@type": "Organization", "name": "Bolna" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Delhi" },
          "sameAs": ["https://www.linkedin.com/in/prateek-sachan/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Bolna",
        "url": "https://www.bolna.ai",
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "description": "Bolna is India's leading enterprise voice AI platform, enabling businesses to build, test, deploy, and monitor multilingual human-like AI voice agents at scale. The platform supports 10+ Indian languages, handles 200,000+ daily calls, and serves 1,050+ paying customers across e-commerce, BFSI, logistics, recruitment, and education. Bolna's model-agnostic orchestration layer routes each call to the best-fit AI model based on language, context, and use case. Backed by General Catalyst, Y Combinator (YC F25), and Blume Ventures.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 10, "maxValue": 15 },
        "sameAs": [
          "https://www.bolna.ai",
          "https://www.linkedin.com/company/bolna-ai/",
          "https://www.ycombinator.com/companies/bolna-ai"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "AI Startups India", "item": "https://upforge.in/ai-startups-india" },
        { "@type": "ListItem", "position": 4, "name": "Bolna", "item": "https://upforge.in/startup/bolna" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Bolna and what is their background?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bolna was founded in early 2024 by Maitreya Wagh (CEO) and Prateek Sachan (CTO), both IIT Delhi alumni. Maitreya Wagh started his career at Bain & Company and then worked in the Founder's Office at Probo, a fast-growing consumer tech startup, where he saw firsthand how enterprises struggled to scale customer communication. Prateek Sachan is a senior engineer who previously built and scaled systems at Zomato, Tata 1MG, BrowserStack, and Atlassian — bringing deep infrastructure expertise to the platform."
          }
        },
        {
          "@type": "Question",
          "name": "What does Bolna do and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bolna is an enterprise voice AI platform that enables businesses to build, test, deploy, and monitor human-like multilingual AI voice agents at scale. It handles both inbound and outbound telephonic conversations across functions like customer support, sales, collections, recruitment, and onboarding. Bolna's key differentiator is its model-agnostic orchestration layer — instead of locking clients into a single AI model, it routes each call to the best-fit AI model based on language, context, and call conditions. The platform supports 10+ Indian languages, works in real-world noisy telephony conditions, and allows enterprises to launch voice agents without custom development or long onboarding cycles."
          }
        },
        {
          "@type": "Question",
          "name": "How much has Bolna raised and who are its investors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bolna has raised $6.92 million in total across three funding rounds. The most recent and largest was a $6.3 million seed round in January 2026, led by General Catalyst. Other investors include Y Combinator (YC F25 cohort), Blume Ventures, Orange Collective, Pioneer Fund, Transpose Capital, Eight Capital, and Upekkha. Notable angel investors include Aarthi Ramamurthy, Arpan Sheth, Watsan Madhavan, Ravi Iyer, and Taro Fukuyama."
          }
        },
        {
          "@type": "Question",
          "name": "How many calls does Bolna handle and how many customers does it have?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Since its first commercial deployment in May 2025, Bolna has scaled from 1,500 calls per day to over 200,000 daily calls — a growth of more than 13,000% in under a year. The platform serves 1,050+ paying customers across e-commerce (40% of usage), BFSI (20–25%), logistics, recruitment, and education. Enterprise customers include Varun Beverages, Spinny, and Snabbit, along with several listed companies. Notably, self-service customers account for 75% of total revenue."
          }
        },
        {
          "@type": "Question",
          "name": "Was Bolna rejected by Y Combinator?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Bolna was rejected by Y Combinator five times before being accepted into the YC Fall 2025 (F25) cohort. YC's initial concern was that while Bolna's product could generate lifelike voice agents, Indian companies would not pay for it — making profitability unlikely. Bolna reapplied after demonstrating consistent monthly revenues exceeding $25,000, and was admitted into the F25 batch. YC Group Partner Tom Blomfield later said he advised the founders to lean into India's complexity rather than downplay it: 'India's linguistic complexity makes it one of the hardest voice markets in the world — and Bolna was already solving it while generating revenue.'"
          }
        },
        {
          "@type": "Question",
          "name": "How does Bolna compare to Sarvam AI and other Indian voice AI competitors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bolna differentiates itself from competitors like Sarvam AI, Yellow.ai, and Uniphore by being fully model-agnostic — it acts as an orchestration layer that routes calls to the best-performing AI model per use case and language, rather than building its own foundational models. This means clients can switch models as better ones emerge without rebuilding their workflows. Bolna is also purpose-built for self-serve enterprise deployment, allowing companies to go live in hours rather than weeks. Its focus on India's real telephony conditions (background noise, regional accents, code-switching) is a key operational differentiator."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Funding", v: "$6.92M" },
  { l: "Founded", v: "2024" },
  { l: "HQ", v: "Bengaluru" },
  { l: "Daily Calls", v: "200K+" },
  { l: "Customers", v: "1,050+" },
  { l: "Languages", v: "10+" },
]

const TIMELINE = [
  {
    year: "Early 2024",
    event: "Maitreya Wagh (IIT Delhi, ex-Bain & Company, ex-Probo Founder's Office) and Prateek Sachan (IIT Delhi, ex-Zomato, BrowserStack, Atlassian) co-found Bolna in Bengaluru. The founding thesis: India handles over a billion voice calls daily, yet enterprises are still running them through expensive human agents or broken IVR systems.",
  },
  {
    year: "Nov 2024",
    event: "First funding: seed round from Upekkha and angels. Bolna begins product development and initial customer outreach. Applies to Y Combinator — rejected for the first time (of five total rejections). Early pilots target recruiting automation, a high-volume, structured use case ideal for testing voice agent quality.",
  },
  {
    year: "Mid 2024 – Early 2025",
    event: "Bolna pivots from recruitment-only to a horizontal enterprise voice AI platform spanning customer support, collections, sales, and logistics. YC rejections 2–5 follow. Each rejection sharpens the revenue argument. The team reaches consistent monthly revenues of $25,000+, the number that will eventually open YC's door.",
  },
  {
    year: "May 2025",
    event: "First commercial deployment. The platform launches from private pilots to production. Day one: ~1,500 calls handled. The model-agnostic orchestration layer — routing calls to best-fit AI models by language and use case — proves its advantage immediately. Enterprise customers including Varun Beverages, Spinny, and Snabbit come on board.",
  },
  {
    year: "Sep 2025",
    event: "Y Combinator admits Bolna to the Fall 2025 (F25) cohort — after five rejections. Convertible note of $500K raised. Daily calls cross 100,000. The YC batch accelerates international positioning and enterprise sales. 10+ Indian languages now supported. Oct 2025: Bolna publishes its 'distribution layer for every voice model' thesis.",
  },
  {
    year: "Jan 2026",
    event: "$6.3M seed round announced on January 20, 2026 — led by General Catalyst. Y Combinator and Blume Ventures participate as existing investors. New investors: Orange Collective, Pioneer Fund, Transpose Capital, Eight Capital. Angels: Aarthi Ramamurthy, Arpan Sheth, and others. Daily calls: 200,000+. Paying customers: 1,050+. Total funding: $6.92M.",
  },
  {
    year: "2026 Target",
    event: "Bolna targets FY26 revenue of ₹3–4 crore (from ~₹50 lakh/month run rate), with FY27 target of ₹45–50 crore — a 10x+ leap. Capital deployed toward proprietary AI/ML for vernacular voice, engineering scale, and enterprise-grade infrastructure. International expansion into US, Brazil, and Southeast Asia underway.",
  },
]

const COLS = [
  {
    h: "The Billion Calls Nobody Was Automating",
    b: `Maitreya Wagh did not set out to build a voice AI company. He set out to build something that solved a problem he had lived in close proximity to — the problem of scale-breaking communication. At Probo, the fast-growing opinion trading startup where he worked in the Founder's Office, he had seen what happened when a company's growth outpaced its customer communication infrastructure: human agents could not keep up, IVR systems failed users, and the gap between what enterprises needed and what technology offered was costing real money.\n\nThe insight that became Bolna was simple and enormous at the same time. India processes over a billion voice calls a day. A significant portion of these — customer support, debt collections, recruitment screening, logistics updates, sales outreach — are structured, repetitive, and entirely automatable. Yet in 2024, virtually all of this volume was still being handled by human agents or legacy IVR trees that infuriated callers and delivered no intelligence back to the business.\n\n"I saw how chatbots were taking off, but in India, people still prefer talking," Wagh later explained. "As AI models got better and cheaper, I knew the same revolution would come for voice." He called Prateek Sachan — a battle-tested infrastructure engineer who had built and scaled systems at Zomato, Tata 1MG, BrowserStack, and Atlassian — and the two IIT Delhi graduates founded Bolna in early 2024.`,
  },
  {
    h: "Five Rejections, One Key Number and the YC Door",
    b: `Y Combinator rejected Bolna five times. The feedback was consistent and damaging: while Bolna's product could generate lifelike voice agents, Indian companies wouldn't pay for it. The profitability argument didn't hold. Come back when you have revenue.\n\nWagh and Sachan came back. Each rejection was a sharper thesis. Each iteration refined the pitch. The team moved from recruitment-only to horizontal enterprise voice AI — covering support, collections, logistics, sales, and onboarding in a single platform. They built a model-agnostic orchestration layer: instead of betting on one AI model, Bolna routes each call to whichever model handles the language, accent, and use case best. This made the platform future-proof in a space where a new state-of-the-art model appears every few months.\n\nBy the time Bolna reapplied for YC's Fall 2025 cohort, monthly revenues had crossed $25,000 consistently. The founders had also found a compelling pricing wedge: $100 pilot programs that let enterprises hear their own use case automated, within hours. YC Group Partner Tom Blomfield admitted the F25 cohort with a specific view: "India's linguistic complexity makes it one of the hardest voice markets in the world — and Bolna was already solving it while generating revenue." Five rejections. One number. The door opened.`,
  },
  {
    h: "200,000 Calls a Day and What Comes Next",
    b: `The growth curve from Bolna's first commercial deployment in May 2025 to its seed round announcement in January 2026 is one of the most striking in recent Indian startup history. Day one of production: 1,500 calls. Eight months later: 200,000 calls a day. A 133x increase in daily volume, driven almost entirely by word-of-mouth among enterprise buyers who had exhausted their patience with IVR systems and custom AI builds that took months.\n\n1,050+ paying customers. Varun Beverages. Spinny. Snabbit. E-commerce at 40% of usage. BFSI at 20–25%. Travel, matrimonial, education filling the rest. Crucially, 75% of revenue comes from self-service customers — enterprises who deployed Bolna without a sales call, a professional services engagement, or a custom build. That metric is the core of the product thesis: voice AI that enterprises can deploy on their own, at scale, on the first attempt.\n\nThe $6.3M seed round, led by General Catalyst in January 2026, is earmarked for three things: expanding the engineering and deployment teams, investing further in proprietary AI and machine learning for vernacular Indian voice, and hardening enterprise infrastructure to support the production scale that is already arriving. FY27 target: ₹45–50 crore in revenue. International expansion into US, Brazil, and Southeast Asia underway. The question for Bolna is no longer whether enterprises will pay for voice AI. They already are.`,
  },
]

const PULL_QUOTE = {
  text: "Voice remains the most critical channel for enterprises in India, but migrating from IVR or human-led workflows to voice AI is still slow and complex. Most companies wait weeks for custom agents. Our focus is enabling enterprises to build, test, deploy, and monitor voice AI on their own, at scale.",
  by: "Maitreya Wagh, Co-Founder & CEO, Bolna (January 2026)",
}

const LESSON =
  "Five rejections from Y Combinator are not a verdict — they are a roadmap. Bolna was rejected because YC doubted Indian enterprises would pay for voice AI. Bolna's response was not to change the market, but to prove it: consistent $25K+ monthly revenue, enterprise logos, real production deployments. The right answer to scepticism about a market is always more market."

const INVESTORS = [
  "General Catalyst (Lead, Jan 2026 Seed)",
  "Y Combinator (YC F25 Cohort)",
  "Blume Ventures",
  "Orange Collective",
  "Pioneer Fund",
  "Transpose Capital",
  "Eight Capital India Fund",
  "Aarthi Ramamurthy & Arpan Sheth (Angels)",
  "Upekkha (Pre-Seed)",
]

const FAQS = [
  {
    q: "Who are Maitreya Wagh and Prateek Sachan, the founders of Bolna?",
    a: "Maitreya Wagh (CEO) is an IIT Delhi graduate who worked at Bain & Company and then the Founder's Office at Probo before founding Bolna. Prateek Sachan (CTO) is also an IIT Delhi alumnus and a senior infrastructure engineer with experience scaling systems at Zomato, Tata 1MG, BrowserStack, and Atlassian. Both co-founded Bolna in early 2024 in Bengaluru.",
  },
  {
    q: "How does Bolna's model-agnostic orchestration work?",
    a: "Bolna's orchestration layer routes each inbound or outbound call to the most suitable AI model based on the call's language, regional accent, use case, and conditions — rather than relying on a single foundational model. This means a Hindi support call, a Tamil collections call, and an English recruitment screening can each be handled by the optimal model. Enterprises can switch models as better ones emerge without rebuilding their workflows. It is this approach that Y Combinator's Tom Blomfield described as Bolna's core technical advantage.",
  },
  {
    q: "What industries use Bolna and who are its enterprise customers?",
    a: "E-commerce accounts for approximately 40% of Bolna's usage, followed by BFSI (20–25%), with logistics, recruitment, education, travel, and matrimonial services making up the rest. Enterprise customers include Varun Beverages, Spinny, and Snabbit, as well as several BSE/NSE-listed companies. The platform supports both large enterprises and high-growth startups. 75% of revenue comes from self-service customers — enterprises that deploy Bolna without professional services or custom development.",
  },
  {
    q: "Is Bolna open source and can developers build on it?",
    a: "Yes. Bolna maintains an open-source voice AI framework on GitHub that allows developers to build and deploy voice agents using its stack. The enterprise platform (bolna.ai) offers a self-serve interface for no-code and low-code deployment, while the developer API supports deep customisation. This dual-track approach — open-source for developers, enterprise platform for business buyers — has been a significant customer acquisition driver for the company.",
  },
]

const RELATED = [
  { name: "BharatPe", slug: "bharatpe-fintech", cat: "Fintech / Payments", val: "$604M raised" },
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "Electric Vehicles", val: "$502M raised" },
  { name: "Atlan", slug: "atlan-data", cat: "SaaS / Data AI", val: "$750M" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BolnaPage() {
  const accent = "#2563eb"
  const accentDark = "#1d4ed8"
  const accentBg = "#eff6ff"
  const accentBorder = "#bfdbfe"

  useEffect(() => {
    const existing = document.getElementById("page-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "page-jsonld"
      s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(s)
    }
    return () => {
      document.getElementById("page-jsonld")?.remove()
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3EFE5",
        fontFamily: "'Georgia','Times New Roman',serif",
      }}
    >
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
        Bolna Founder Story — Maitreya Wagh & Prateek Sachan | India's Enterprise Voice AI Platform | YC F25 | $6.92M Raised | UpForge
      </h1>

      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{
          background: "#EDE9DF",
          borderBottom: "1px solid #D8D2C4",
          fontFamily: "system-ui,sans-serif",
        }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" },
            { n: "Startup Registry", h: "/startup" },
            { n: "AI Startups India", h: "/ai-startups-india" },
            { n: "Bolna", h: "/startup/bolna" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <Link href={b.h} className="hover:text-[#1A1208] transition-colors">
                  {b.n}
                </Link>
              ) : (
                <span className="text-[#1A1208] font-semibold">{b.n}</span>
              )}
              {i < arr.length - 1 && (
                <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div
          className="text-center px-4 pt-3 pb-6"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <p
            className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Startup Registry · Artificial Intelligence
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
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
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">
            Edition · AI / Voice
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Voice AI · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
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
                AI / VOICE AUTOMATION
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              Rejected by YC five times. Admitted on the sixth.{" "}
              <em style={{ color: accent }}>
                Now automating 200,000 enterprise calls a day.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              India handles over a billion voice calls every day. In 2024, Maitreya Wagh and
              Prateek Sachan — two IIT Delhi graduates with backgrounds at Bain, Zomato, and
              BrowserStack — decided that most of them should be automated. Y Combinator
              disagreed. Five times. Then Bolna proved the market, got admitted to YC F25, raised
              $6.92M from General Catalyst, and scaled to 1,050+ enterprise customers in under a year.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Bengaluru, Karnataka",
                "Est. 2024",
                "India's Voice AI Infrastructure",
              ].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && (
                    <span className="text-[#C8C2B4] text-[10px]">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden mb-8">
              <img
                src="/Upforge-bolna.webp"
                alt="Maitreya Wagh and Prateek Sachan, Co-Founders of Bolna — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Maitreya Wagh & Prateek Sachan
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founders · Bolna
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
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${
                        ci === 0 && pi === 0 ? "dropcap" : ""
                      }`}
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
              style={{
                borderTop: `3px double ${accent}`,
                borderBottom: "1px solid #C8C2B4",
              }}
            >
              <span
                style={{ display: "block", color: accentDark, fontSize: 24, marginBottom: 10 }}
              >
                ❝
              </span>
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
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">
                        {t.event}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata */}
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
                  src="/Upforge-bolna.webp"
                  alt="Maitreya Wagh and Prateek Sachan, Co-Founders of Bolna — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{
                    background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)",
                  }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>
                    Maitreya Wagh & Prateek Sachan
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founders · Bolna
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.bolna.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Bolna official website"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={accent}
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      bolna.ai — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/bolna-ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Bolna on LinkedIn"
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
                      LinkedIn — Bolna AI
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
                    By the Numbers
                  </p>
                </div>
                <dl
                  className="grid grid-cols-2 divide-x divide-y"
                  style={{ borderColor: "#D8D2C4" }}
                >
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
                  <Link
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
                  </Link>
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
            Explore More AI Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "AI Startups India 2026", h: "/ai-startups-india" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Voice AI India Guide", h: "/ai-startups-india/voice-ai-india" },
              { l: "IIT Delhi Startups", h: "/iit-startups" },
              { l: "YC India Startups", h: "/yc-india-startups" },
              { l: "Top Funded Startups India", h: "/top-funded-startups" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{
                  border: "1px solid #D8D2C4",
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
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
                Building India's next unicorn? Get verified on UpForge.
              </p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
                aria-label="List your Indian startup on UpForge for free"
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Data sourced from Inc42, YourStory, StartupNews.fyi, AngelOne, PitchBook, Tracxn,
            Y Combinator company page, and Bolna press releases as of March 2026. UpForge is an
            independent registry — no paid placements, no sponsored rankings. Funding figures and
            customer metrics reflect latest available public data including company announcements.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "AI Startups India", h: "/ai-startups-india" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "BharatPe Profile", h: "/startup/bharatpe-fintech" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Atlan Profile", h: "/startup/atlan-data" },
                { l: "Submit Startup", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
