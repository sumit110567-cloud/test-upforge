"use client"

// app/startup/bharatpe-fintech/page.tsx
// UpForge — BharatPe · Ashneer Grover & Shashvat Nakrani Founder Chronicle
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
      "@id": "https://upforge.in/startup/bharatpe-fintech#article",
      "headline": "BharatPe — How Ashneer Grover & Shashvat Nakrani Built India's ₹24,000 Crore Merchant Fintech",
      "description": "BharatPe founder story — IIT Delhi & IIM Ahmedabad graduate Ashneer Grover and 19-year-old IIT dropout Shashvat Nakrani invented India's first zero-MDR interoperable UPI QR in 2018. $604M raised. $2.85B peak valuation. 17 million merchant partners. The most turbulent and consequential fintech story in India.",
      "url": "https://upforge.in/startup/bharatpe-fintech",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-bharatpe.webp",
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
          "name": "Ashneer Grover",
          "jobTitle": "Co-Founder & former MD",
          "worksFor": { "@type": "Organization", "name": "BharatPe" },
          "alumniOf": [
            { "@type": "CollegeOrUniversity", "name": "IIT Delhi" },
            { "@type": "CollegeOrUniversity", "name": "IIM Ahmedabad" }
          ],
          "sameAs": ["https://www.linkedin.com/company/bharatpe/"]
        },
        {
          "@type": "Person",
          "name": "Shashvat Nakrani",
          "jobTitle": "Co-Founder & COO",
          "worksFor": { "@type": "Organization", "name": "BharatPe" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "IIT Delhi" }
        },
        {
          "@type": "Person",
          "name": "Bhavik Koladiya",
          "jobTitle": "Co-Founder",
          "worksFor": { "@type": "Organization", "name": "BharatPe" }
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "BharatPe",
        "url": "https://bharatpe.com",
        "foundingDate": "2018",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "New Delhi",
          "addressCountry": "IN"
        },
        "description": "BharatPe is India's leading merchant fintech and UPI payments company, offering zero-MDR QR codes, POS devices, business loans, and consumer financial products to over 17 million merchant partners across 450+ cities. The company is the only fintech with an NBFC (Trillionloans), a stake in a Small Finance Bank (Unity SFB), and an online Payment Aggregator licence.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 1500 },
        "sameAs": [
          "https://bharatpe.com",
          "https://www.linkedin.com/company/bharatpe/",
          "https://twitter.com/bharatpe11",
          "https://en.wikipedia.org/wiki/BharatPe"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Fintech Startups India", "item": "https://upforge.in/fintech-startups" },
        { "@type": "ListItem", "position": 4, "name": "BharatPe", "item": "https://upforge.in/startup/bharatpe-fintech" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded BharatPe?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BharatPe was originally co-founded in March 2018 by Shashvat Nakrani (then 19, IIT Delhi Textile Technology dropout) and Bhavik Koladiya (IIT Delhi), with Ashneer Grover (IIT Delhi B.Tech Civil + IIM Ahmedabad MBA) joining as the third co-founder and CEO in July 2018. Grover resigned in March 2022 after a governance controversy, and all legal disputes between Grover and BharatPe were settled in September 2024. Shashvat Nakrani continues as Co-Founder & COO."
          }
        },
        {
          "@type": "Question",
          "name": "What did BharatPe invent?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BharatPe invented India's first zero-MDR (Merchant Discount Rate) interoperable UPI QR code in 2018 — a single QR code that allowed merchants to accept payments from any UPI app (PhonePe, Google Pay, Paytm, etc.) for free. This solved a critical problem: small merchants were being charged 1–2% MDR fees on every digital transaction, which ate into razor-thin margins. BharatPe made accepting UPI payments free for merchants and made money by using the resulting transaction data to underwrite merchant loans."
          }
        },
        {
          "@type": "Question",
          "name": "How much has BharatPe raised and what is its valuation?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BharatPe has raised approximately $604 million across 16 funding rounds. Its peak valuation was $2.85 billion, achieved in August 2021 following a $370M Series E led by Tiger Global. Current estimated valuation is approximately $2.7 billion. Key investors include Sequoia Capital India (Peak XV), Ribbit Capital, Coatue, Insight Partners, Dragoneer, and Amrish Rau."
          }
        },
        {
          "@type": "Question",
          "name": "What happened between BharatPe and Ashneer Grover?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In January 2022, an audio clip surfaced of Ashneer Grover allegedly using abusive language with a Kotak Mahindra Bank employee. He took voluntary leave, and BharatPe's board commissioned an Alvarez & Marsal audit that implicated Grover and his wife in financial irregularities — including alleged payments to non-existent vendors. Grover resigned in March 2022. BharatPe filed a criminal complaint in December 2022 seeking ₹88.67 crore in damages. After two years of legal battles, both parties reached a definitive settlement in September 2024. Grover ceased all association with BharatPe and his shares were transferred to a trust for the company's benefit."
          }
        },
        {
          "@type": "Question",
          "name": "Has BharatPe turned profitable?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. In August 2025, BharatPe announced it had achieved adjusted PBT (Profit Before Tax) profitability for the first time — a significant milestone described by the company as marking a 'deeper, durable turnaround.' BharatPe is the only Indian fintech with an NBFC (Trillionloans), a stake in Unity Small Finance Bank, and an online Payment Aggregator licence — a full-stack fintech structure that underpins its path to sustainable profitability."
          }
        },
        {
          "@type": "Question",
          "name": "What products does BharatPe offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BharatPe's business offerings include: BharatPe QR (zero-MDR UPI acceptance), BharatPe One (all-in-one payment device), BharatPe Swipe (POS machine), BharatPe Speaker (voice payment alerts), and BharatPe Easy Loans (collateral-free merchant loans — ₹14,600+ crore disbursed). Consumer products include BharatPe UPI, Zillion (loyalty rewards), Invest BharatPe, and a co-branded Unity Bank credit card. The company has 17M+ merchant partners across 450+ cities."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Peak Valuation", v: "$2.85B" },
  { l: "Total Funding", v: "$604M" },
  { l: "Founded", v: "2018" },
  { l: "HQ", v: "New Delhi" },
  { l: "Merchants", v: "17M+" },
  { l: "Loans Disbursed", v: "₹14,600Cr+" },
]

const TIMELINE = [
  {
    year: "Mar 2018",
    event: "Shashvat Nakrani (19, IIT Delhi dropout) and Bhavik Koladiya co-found BharatPe in New Delhi. The founding insight: India's digital payments boom is excluding 60 million small merchants who cannot afford 1–2% MDR fees.",
  },
  {
    year: "Jul 2018",
    event: "Ashneer Grover — IIT Delhi B.Tech, IIM Ahmedabad MBA, ex-VP Kotak Investment Banking, ex-CFO Grofers — joins as third co-founder and takes over as CEO. BharatPe launches India's first zero-MDR interoperable UPI QR code.",
  },
  {
    year: "2019–20",
    event: "Rapid growth. $75M Series C (2020) led by Ribbit Capital + Coatue. BharatPe crosses 5 million merchant partners. POS machine (BharatSwipe) launched. ₹1,000+ crore in merchant loans disbursed in 18 months.",
  },
  {
    year: "Aug 2021",
    event: "$370M Series E led by Tiger Global at $2.85B valuation — the fastest Indian fintech to reach this milestone. Shashvat Nakrani, 23, becomes the youngest self-made billionaire in the IIFL Hurun India Rich List. Merchant count: 7M+.",
  },
  {
    year: "Jan–Mar 2022",
    event: "Viral Kotak audio clip. Board-initiated Alvarez & Marsal governance audit. Ashneer Grover resigns as MD on February 28, 2022. Suhail Sameer becomes CEO. BharatPe files ₹88.67 crore fraud complaint against Grover family in December 2022.",
  },
  {
    year: "2023–24",
    event: "Nalin Negi becomes CEO after Suhail Sameer's exit. Company stabilises and refocuses on merchant lending and consumer products. Legal settlement with Ashneer Grover concluded September 2024 — all cases dropped, Grover exits cap table entirely.",
  },
  {
    year: "Aug 2025",
    event: "BharatPe achieves adjusted PBT profitability for first time — announced August 14, 2025. 17M+ merchant partners. ₹14,600+ crore loans disbursed. Unity Bank BharatPe credit card launched. Company is India's only fintech with NBFC + SFB stake + PA licence.",
  },
]

const COLS = [
  {
    h: "The MDR Problem That Nobody Wanted to Fix",
    b: `In 2018, India's digital payments ecosystem was booming on paper. Demonetization had forced hundreds of millions of people to experiment with UPI. PhonePe, Google Pay, and Paytm were registering jaw-dropping transaction volumes. The government was celebrating. The narrative was working.\n\nBut Shashvat Nakrani, a 19-year-old third-year student at IIT Delhi studying Textile Technology of all things, had spotted something that the celebration was drowning out. The 60 million small merchants at the actual base of India's economy — the kirana stores, the tea stalls, the pharmacies, the vegetable vendors — were largely frozen out of this revolution. Not because they didn't have phones. Because accepting digital payments cost them money.\n\nThe Merchant Discount Rate — a 1–2% fee charged on every digital transaction — was invisible to consumers but catastrophic for merchants operating on margins of 3–5%. Nakrani and his co-founder Bhavik Koladiya identified UPI's interoperability framework as the lever. One QR code. Every app. Zero MDR. They called it BharatPe — and they built it in a college dorm.`,
  },
  {
    h: "Ashneer, the Series E and the Fastest Unicorn",
    b: `Ashneer Grover brought the infrastructure that a dorm-room insight needed to become a company. IIT Delhi B.Tech, IIM Ahmedabad MBA, seven years at Kotak Investment Banking, Director at American Express, CFO at Grofers (now Blinkit). When he joined BharatPe as co-founder and CEO in July 2018, he brought a specific thesis: free payments was the customer acquisition strategy, but merchant lending — enabled by the transaction data BharatPe was accumulating — was the business.\n\nThe thesis was correct. By 2020, BharatPe had disbursed ₹1,000 crore in collateral-free merchant loans using its own proprietary credit model. No bank had the transaction data to underwrite these borrowers. BharatPe had built it, one QR scan at a time. The $370M Series E in August 2021, led by Tiger Global at a $2.85 billion valuation, made BharatPe one of India's fastest-growing fintechs. Shashvat Nakrani, then 23, became the youngest self-made billionaire in the IIFL Hurun India Rich List. The origin story — two founders, a college dorm, and a problem nobody else wanted to solve — had delivered a $2.85 billion outcome in just three years.`,
  },
  {
    h: "The Governance Crisis, the Settlement and the Rebuild",
    b: `The audit, the resignation, the FIRs, the legal battles — and then, in September 2024, the settlement. All cases dropped. Ashneer Grover exited the cap table entirely. His shares were transferred to a trust. "I repose my faith in the management and board," he wrote. "Peace."\n\nWhat was left behind was not a carcass but a company that had quietly done the hard work of rebuilding. Nalin Negi, as CEO from 2023, stabilised operations, narrowed losses, and refocused the product roadmap. The lending flywheel — now ₹14,600 crore in disbursed merchant loans — kept compounding. The consumer products, from BharatPe UPI to Zillion rewards to Invest BharatPe, expanded the moat.\n\nIn August 2025, BharatPe announced adjusted PBT profitability for the first time. The only Indian fintech to hold simultaneously an NBFC, a stake in a Small Finance Bank, and an online Payment Aggregator licence, BharatPe had emerged from one of India's most public corporate crises with its foundational thesis intact: free payments, real lending, and 17 million merchants who needed both.`,
  },
]

const PULL_QUOTE = {
  text: "We want to be the financial best friend of every small merchant in India — the one who shows up at the door, not just the one who answers the phone.",
  by: "Ashneer Grover, Co-Founder, BharatPe (2021)",
}

const LESSON =
  "The most consequential fintech innovations are not about technology — they are about removing a fee that was always wrong. BharatPe's zero-MDR QR code wasn't a technical breakthrough. It was a moral one: small merchants deserved to accept digital money for free. Everything else followed from that conviction."

const INVESTORS = [
  "Tiger Global Management",
  "Sequoia Capital India (Peak XV)",
  "Ribbit Capital",
  "Coatue Management",
  "Insight Partners",
  "Dragoneer Investment Group",
  "Steadfast Capital",
  "Amrish Rau & Jitendra Gupta (Angels)",
]

const FAQS = [
  {
    q: "Who are the founders of BharatPe and what happened to Ashneer Grover?",
    a: "BharatPe was co-founded in March 2018 by Shashvat Nakrani (19, IIT Delhi dropout) and Bhavik Koladiya, with Ashneer Grover (IIT Delhi + IIM Ahmedabad, ex-Kotak VP) joining in July 2018 as CEO. Grover resigned in February 2022 after a governance controversy triggered by a viral audio clip and a subsequent Alvarez & Marsal audit. A September 2024 settlement ended all legal disputes — Grover exited the cap table entirely. Nakrani continues as Co-Founder & COO.",
  },
  {
    q: "How does BharatPe make money if the QR is free?",
    a: "BharatPe's revenue model is built on merchant lending. The transaction data from millions of merchant QR scans creates the world's most granular credit profile for small businesses — data no bank possesses. BharatPe uses this to underwrite collateral-free business loans at scale, having disbursed ₹14,600+ crore as of 2025. Revenue also comes from POS device rentals (BharatPe Swipe), BharatPe One all-in-one device subscriptions, and consumer financial products.",
  },
  {
    q: "How does BharatPe compare to PhonePe, Paytm, and Google Pay?",
    a: "PhonePe, Google Pay, and Paytm are primarily consumer-side UPI apps. BharatPe is merchant-first: its QR enables acceptance from all UPI apps on one code (zero MDR), and its primary value proposition beyond payments is merchant credit. BharatPe is uniquely positioned as the only fintech with an NBFC (Trillionloans), a stake in Unity Small Finance Bank, and an online Payment Aggregator licence — a regulatory stack no UPI consumer app has assembled.",
  },
  {
    q: "What is Unity Small Finance Bank and how is BharatPe involved?",
    a: "Unity Small Finance Bank (Unity SFB) was formed by the merger of BharatPe's NBFC licence and the former Punjab & Maharashtra Co-operative Bank under RBI's resolution framework. BharatPe holds a significant stake in Unity SFB, giving it access to deposit mobilisation and banking infrastructure. The bank is a key pillar of BharatPe's full-stack financial services ambition — payments, lending, banking, and investment products — all anchored in the merchant relationship.",
  },
]

const RELATED = [
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "Electric Vehicles", val: "$502M raised" },
  { name: "Atlan", slug: "atlan-data", cat: "SaaS / Data AI", val: "$750M" },
  { name: "Atomberg Technologies", slug: "atomberg-fans", cat: "Consumer Tech", val: "₹1,000Cr" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BharatPeFintech() {
  const accent = "#0f766e"
  const accentDark = "#0d6460"
  const accentBg = "#f0fdfa"
  const accentBorder = "#99f6e4"

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
        BharatPe Founder Story — Ashneer Grover & Shashvat Nakrani | India's Zero-MDR UPI Revolution | $2.85B Valuation | UpForge
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
            { n: "Fintech Startups India", h: "/fintech-startups" },
            { n: "BharatPe", h: "/startup/bharatpe-fintech" },
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
            UpForge · Startup Registry · Fintech
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
            Edition · Fintech
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Payments & Lending · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">New Delhi, India</span>
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
                FINTECH / PAYMENTS
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              A 19-year-old dorm-room idea. A $2.85 billion valuation.{" "}
              <em style={{ color: accent }}>
                And the most turbulent founder story in Indian fintech.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Shashvat Nakrani was 19 and in his third year at IIT Delhi when he identified the
              MDR fee as the single biggest barrier keeping 60 million Indian merchants out of
              the digital economy. He built BharatPe to fix it. Ashneer Grover joined and turned
              it into one of India's fastest-growing fintechs. What followed — the growth, the
              controversy, the governance crisis, the settlement, and the quiet rebuild to
              profitability — is India's most complicated startup story.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "New Delhi",
                "Est. 2018",
                "India's Merchant Fintech",
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
                src="/Upforge-bharatpe.webp"
                alt="Ashneer Grover and Shashvat Nakrani, Co-Founders of BharatPe — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Ashneer Grover & Shashvat Nakrani
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founders · BharatPe
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
                  src="/Upforge-bharatpe.webp"
                  alt="Ashneer Grover and Shashvat Nakrani, Co-Founders of BharatPe — UpForge Founder Chronicle"
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
                    Ashneer Grover & Shashvat Nakrani
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founders · BharatPe
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://bharatpe.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit BharatPe official website"
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
                      bharatpe.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/bharatpe/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View BharatPe on LinkedIn"
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
                      LinkedIn — BharatPe
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
            Explore More Fintech Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Fintech Startups India 2026", h: "/fintech-startups" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "BharatPe vs PhonePe vs Paytm", h: "/fintech-startups/bharatpe-vs-phonePe-paytm" },
              { l: "IIT Delhi Startups", h: "/iit-startups" },
              { l: "UPI Payments India Guide", h: "/fintech-startups/upi-payments-india" },
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
            * Data sourced from YourStory, Inc42, Tracxn, Entrepreneur India, Startuptalky,
            Founder Thesis, and BharatPe press releases as of March 2026. UpForge is an
            independent registry — no paid placements, no sponsored rankings. Funding figures
            and valuations are approximate and reflect latest available public data.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Fintech Startups India", h: "/fintech-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Ather Energy Profile", h: "/startup/ather-energy-ev" },
                { l: "Atomberg Profile", h: "/startup/atomberg-fans" },
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
