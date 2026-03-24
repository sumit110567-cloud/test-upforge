"use client"

// app/startup/codeair-software-solutions/page.tsx
// UpForge — Codeair Software Solutions · Sunmughan Swamy Founder Chronicle
// SEO: FAQPage ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/codeair-software-solutions#article",
      "headline": "Codeair Software Solutions — How Sunmughan Swamy Built a Global AI & IT Company from Raipur, Chhattisgarh",
      "description": "Codeair Software Solutions founder story — Sunmughan Swamy, a self-taught software engineer from Pt. Ravishankar Shukla University in Raipur, built one of Central India's most trusted AI and custom software companies. Founded 2015. 1,500+ global clients. 97% retention rate. Headquartered in Raipur, Chhattisgarh.",
      "url": "https://upforge.in/startup/codeair-software-solutions",
      "datePublished": "2026-03-24T00:00:00+05:30",
      "dateModified": "2026-03-24T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/codeair.webp",
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
          "name": "Sunmughan Swamy",
          "jobTitle": "Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "Codeair Software Solutions" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "Pt. Ravishankar Shukla University, Raipur" },
          "sameAs": ["https://www.linkedin.com/in/sunmughan/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "Codeair Software Solutions",
        "url": "https://codeair.tech",
        "foundingDate": "2015",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Raipur",
          "addressRegion": "Chhattisgarh",
          "addressCountry": "IN"
        },
        "description": "Codeair Software Solutions is a global AI and IT services company founded in 2015, headquartered in Raipur, Chhattisgarh. The company specialises in custom AI development, cloud applications, mobile and web development, UI/UX design, and digital marketing. With 1,500+ clients served and a 97% client retention rate, Codeair is recognised as one of Central India's leading software companies.",
        "sameAs": [
          "https://codeair.tech",
          "https://in.linkedin.com/company/codeairofficial"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "IT & SaaS Startups India", "item": "https://upforge.in/startup?sector=IT+Services" },
        { "@type": "ListItem", "position": 4, "name": "Codeair Software Solutions", "item": "https://upforge.in/startup/codeair-software-solutions" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Codeair Software Solutions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Codeair Software Solutions was founded in 2015 by Sunmughan Swamy, a software engineer and product-focused entrepreneur from Raipur, Chhattisgarh. Swamy studied at Pt. Ravishankar Shukla University, Raipur, and has over 10 years of experience in software engineering, having earlier served as CTO of QwikList Services Pvt. Ltd. and worked with Widle Studio LLP. He founded Codeair with the goal of making enterprise-grade AI and software solutions accessible to startups and SMEs globally."
          }
        },
        {
          "@type": "Question",
          "name": "What services does Codeair Software Solutions offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Codeair offers a full-stack suite of digital services: Custom AI Development, Cloud Application Development, Mobile Application Development, Web Design & Development, UI/UX Designing, AI Automation & Chatbots, Ready-made Digital Solutions, and SEO & Growth Optimization. The company serves startups, SMEs, enterprises, ISVs, digital agencies, and government entities across healthcare, fintech, eCommerce, and 30+ other industries."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Codeair Software Solutions based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Codeair Software Solutions is headquartered at Office 4074, Currency Tower, VIP Road, Telibandha, Raipur, Chhattisgarh — 492001, India. Despite being based in Tier-2 India, the company serves clients across India, USA, and other global markets, and was identified as the top software development company in Chhattisgarh."
          }
        },
        {
          "@type": "Question",
          "name": "How many clients has Codeair served?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "As of 2026, Codeair Software Solutions has served over 1,500 clients globally. The company maintains a 97% client retention rate — one of the highest in the Indian IT services segment for a company of its size. Clients include startups, enterprises, digital agencies, ISVs, and government bodies."
          }
        },
        {
          "@type": "Question",
          "name": "Is Codeair recognised for its work in AI development?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Codeair has positioned AI as its core competency and is recognised as a Top AI Solutions Company and Top AI Development Company in Raipur and Bhilai. The company offers custom AI development including predictive modelling, NLP, computer vision, and intelligent business workflow automation. Its AI Automation & Chatbot services are deployed across industries including healthcare, fintech, and eCommerce."
          }
        },
        {
          "@type": "Question",
          "name": "What is Codeair's Clutch and market rating?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Codeair is listed on Clutch as one of the best design and development agencies in India, with an average client rating of 4.9 out of 5 from 24+ reviews. The company is also listed on ZoomInfo as a recognised software engineering and consulting company specialising in modern technologies including IoT, SaaS, and cloud computing."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Founded", v: "2015" },
  { l: "Clients Served", v: "1,500+" },
  { l: "Retention Rate", v: "97%" },
  { l: "HQ", v: "Raipur, C.G." },
  { l: "Clutch Rating", v: "4.9 / 5" },
  { l: "Global Markets", v: "India, USA +" },
]

const TIMELINE = [
  {
    year: "2015",
    event: "Sunmughan Swamy founds Codeair Software Solutions in Raipur, Chhattisgarh. Armed with a decade of engineering experience — including a stint as CTO at QwikList Services Pvt. Ltd. — he sets up shop to offer bespoke software services to entrepreneurs and businesses launching new ventures.",
  },
  {
    year: "2015–18",
    event: "Early focus on custom software development for startups and SMEs across India. Codeair builds a reputation for rapid MVP delivery, operating with limited resources while maintaining engineering quality. The company grows primarily through word-of-mouth and repeat business.",
  },
  {
    year: "2018–20",
    event: "Service portfolio expands beyond custom software into UI/UX design, mobile application development, and digital marketing. Codeair starts serving digital agencies as a white-label development and design partner, becoming one of India's go-to outsourcing firms for agencies.",
  },
  {
    year: "2020–22",
    event: "Pivot toward AI and cloud technologies accelerates. Codeair adds IoT architecture, RPA automation, AR/VR, and SaaS product development to its stack. Client base extends to healthcare, fintech, and eCommerce. Recognised as the top software development company in Chhattisgarh.",
  },
  {
    year: "2023–24",
    event: "1,200+ custom solutions delivered. ISO 9001-aligned quality management process adopted. Clutch listing earned, with 4.9/5 average client rating from 24+ reviews. ZoomInfo recognition follows. Codeair is now operating globally — clients in India, the USA, and beyond.",
  },
  {
    year: "2025",
    event: "AI becomes the company's defining product line. Codeair launches Custom AI Development, AI Automation & Chatbot services, and Ready-made Digital Solutions. The new codeair.tech platform goes live. Founder Sunmughan Swamy is named 'Top AI Solutions Company' in Central India.",
  },
  {
    year: "2026",
    event: "1,500+ clients served. 97% retention rate. New Currency Tower headquarters in Raipur operational. Codeair is empowering entrepreneurs across India and globally with end-to-end AI, cloud, and software solutions — with a mission to make world-class tech accessible from Tier-2 India.",
  },
]

const COLS = [
  {
    h: "Engineering from the Heart of India",
    b: `Sunmughan Swamy did not grow up in Bengaluru or Mumbai. He built his career in Raipur — Chhattisgarh's capital, a city more associated with steel and coal than software startups. After graduating from Pt. Ravishankar Shukla University, he spent his formative years writing code, leading development teams, and building products for others. As CTO at QwikList Services Pvt. Ltd., he managed the full technical stack — from server administration and database architecture to mobile app development and security analysis.\n\nThat experience gave Swamy something more valuable than a résumé: a systems-level view of how businesses actually fail when their technology doesn't match their ambitions. He saw founders lose momentum because they couldn't find a development partner who understood urgency, cost constraints, and real business outcomes. So in 2015, he built one.\n\nCodéair Software Solutions was founded with a sharp brief: deliver specifically designed bespoke software for entrepreneurs and businesses starting new ventures. Not generic templates. Not offshore body shops. Genuinely tailored technology — fast, scalable, and built with the founder's problems in mind.`,
  },
  {
    h: "From Tier-2 City to 1,500+ Global Clients",
    b: `The early years were built on trust and turnaround speed. Codeair earned a reputation for getting relevant skills on board quickly and delivering working MVPs within aggressive timeframes and limited budgets. As one early client noted, "This sense of urgency sets them apart from the competition and makes Codeair Solutions a great partner for startups."\n\nAgency outsourcing became a significant growth lever. Digital agencies from across India and the USA discovered that Codeair could deliver end-to-end design, development, and digital marketing at a quality that competed globally — while letting the agency maintain client relationships. Over time, 1,200+ custom solutions were delivered across sectors as varied as healthcare, eCommerce, fintech, government, and consumer apps.\n\nThe company maintained an ISO 9001-aligned quality management system and a 97% client retention rate — a metric that speaks louder than any award. When a Tier-2 Indian IT company retains 97 out of every 100 clients, it isn't doing commodity work. It's solving real problems.`,
  },
  {
    h: "AI as the New Core: Codeair in 2026",
    b: `Codeair's most significant bet in the last three years has been AI. Not AI as a buzzword — but AI as a genuine service line. The company's Custom AI Development practice covers predictive modelling, natural language processing, computer vision, and intelligent business workflow automation. Its AI Automation & Chatbot services deploy unattended and attended software robots for customer service, data management, HR automation, and infrastructure management.\n\nThe codeair.tech platform, relaunched in 2025–26, reflects this pivot — presenting Codeair as an "AI & IT Solutions Company" with ready-made digital solutions, cloud-native development, and a structured design thinking process. With 1,500+ clients served, a 4.9-star Clutch rating, and operations spanning India and the USA, Codeair is proof that world-class software companies don't require a Bengaluru postcode.\n\nSunmughan Swamy has spent over a decade proving that India's Tier-2 cities can produce engineering talent, process discipline, and product quality that scales globally. From Currency Tower in Raipur, he's building what many larger cities failed to: a software company defined by retention, not acquisition.`,
  },
]

const PULL_QUOTE = {
  text: "We deliver specifically designed bespoke software services and digital solutions for our clients, to cater to their unique business goals.",
  by: "Sunmughan Swamy, Founder & CEO, Codeair Software Solutions",
}

const LESSON =
  "The most resilient IT services companies are built on retention, not volume. Codeair's 97% client retention rate isn't a marketing stat — it's the result of a decade of urgency, honesty, and genuine problem-solving. When your clients stay, your reputation compounds and your pipeline builds itself."

const SERVICES = [
  "Custom AI Development",
  "Cloud Application Development",
  "Mobile Application Development",
  "Web Design & Development",
  "UI/UX Designing",
  "AI Automation & Chatbots",
  "Ready-made Digital Solutions",
  "SEO & Growth Optimization",
]

const FAQS = [
  {
    q: "Who is the founder of Codeair Software Solutions and what is his background?",
    a: "Codeair was founded in 2015 by Sunmughan Swamy, a software engineer with 10+ years of experience. He studied at Pt. Ravishankar Shukla University, Raipur, and previously served as CTO at QwikList Services Pvt. Ltd. He also worked with Widle Studio LLP. His technical background spans full-stack development, motor control systems engineering, mobile apps, cloud architecture, and AI automation.",
  },
  {
    q: "What makes Codeair different from other software companies in India?",
    a: "Codeair combines the engineering rigour of a product company with the flexibility and speed of a boutique agency. Its 97% client retention rate, 1,500+ clients served, and 4.9/5 Clutch rating distinguish it from commodity IT vendors. The company specialises in truly bespoke solutions — not templates — and serves as a trusted white-label partner for digital agencies globally.",
  },
  {
    q: "Does Codeair work with international clients?",
    a: "Yes. Despite being headquartered in Raipur, Chhattisgarh, Codeair serves clients across India, the USA, and global markets. The company offers marketing and technology outsourcing for agencies of all sizes. Its client list includes startups, SMEs, enterprises, ISVs, digital agencies, and government entities across healthcare, fintech, eCommerce, and 30+ sectors.",
  },
  {
    q: "What AI services does Codeair offer?",
    a: "Codeair's AI services include Custom AI Development (predictive modelling, NLP, computer vision), AI Automation & Chatbots (RPA for customer service, HR, data management), and intelligent workflow automation. The company is recognised as a Top AI Development Company in Raipur and Bhilai, and positions AI as its core product line as of 2025–26.",
  },
]

const RELATED = [
  { name: "Atomberg Technologies", slug: "atomberg-fans", cat: "Consumer Tech / D2C", val: "$119M" },
  { name: "Atlan", slug: "atlan-data", cat: "SaaS / Data Intelligence", val: "$750M" },
  { name: "Alt Mobility", slug: "alt-mobility", cat: "EV Leasing", val: "$17.3M" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function CodeairPage() {
  const accent = "#0e7490"       // Deep teal/cyan — tech-forward, trustworthy
  const accentDark = "#0c5f73"
  const accentBg = "#f0f9ff"
  const accentBorder = "#bae6fd"

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
        Codeair Software Solutions Founder Story — Sunmughan Swamy | AI &amp; IT Company from Raipur Chhattisgarh | 1500+ Global Clients | 97% Retention | UpForge
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
            { n: "IT & Software Startups", h: "/startup?sector=IT+Services" },
            { n: "Codeair Software Solutions", h: "/startup/codeair-software-solutions" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <Link href={b.h} className="hover:text-[#1A1208] transition-colors">{b.n}</Link>
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
          <p className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Startup Registry · IT & Software
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
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">Edition · IT & Software</span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
            AI / Custom Software · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Raipur, Chhattisgarh</span>
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
                AI / IT SERVICES
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              He built a global AI company{" "}
              <em style={{ color: accent }}>
                from a Tier-2 city — and 97% of his clients never left.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Sunmughan Swamy didn't need Bengaluru, a startup hub, or VC backing to build
              one of Central India's most trusted software companies. From Raipur, Chhattisgarh,
              he spent a decade building Codeair Software Solutions into a global AI and IT firm
              with 1,500+ clients, a 4.9-star Clutch rating, and a retention rate that most
              enterprise SaaS companies would envy.
            </p>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
              {[
                "By UpForge Editorial",
                "Raipur, Chhattisgarh",
                "Est. 2015",
                "AI & Custom Software",
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
                src="/codeair.webp"
                alt="Sunmughan Swamy, Founder & CEO of Codeair Software Solutions — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>Sunmughan Swamy</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  Founder & CEO · Codeair Software Solutions
                </p>
              </div>
            </div>

            {/* 3-col newspaper body */}
            <div className="ncols">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{ fontSize: 11, color: "#1A1208", borderBottom: `1.5px solid ${accent}`, fontFamily: "system-ui,sans-serif" }}
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
              <p className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4" style={{ fontFamily: "system-ui,sans-serif" }}>
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* Company Timeline */}
            <div className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}
              >
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0" style={{ background: accent }} />
                      {i < TIMELINE.length - 1 && (
                        <div className="w-px flex-1 mt-1" style={{ background: accentBorder, minHeight: 24 }} />
                      )}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase tracking-wider" style={{ color: accent }}>
                        {t.year}
                      </span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">{t.event}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata (schema is in JSON-LD) */}
            <section className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{ color: accent, fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${accentBorder}`, paddingBottom: 8 }}
              >
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div key={i} className="mb-4 pb-4" style={{ borderBottom: "1px solid #D8D2C4" }}>
                  <h3 className="font-bold text-[#1A1208] mb-1.5" style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}>
                    {faq.q}
                  </h3>
                  <p className="text-[12.5px] text-[#5A4A30] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
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
                  src="/codeair.webp"
                  alt="Sunmughan Swamy, Founder & CEO of Codeair Software Solutions — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)" }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>Sunmughan Swamy</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                    Founder & CEO · Codeair Software Solutions
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://codeair.tech/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Codeair official website"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>
                      codeair.tech — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://in.linkedin.com/company/codeairofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Codeair Software Solutions on LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#0077b5", fontFamily: "system-ui,sans-serif" }}>
                      LinkedIn — Codeair
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#0077b5" }} />
                </a>
                <a
                  href="https://www.linkedin.com/in/sunmughan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Sunmughan Swamy on LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider" style={{ color: "#0077b5", fontFamily: "system-ui,sans-serif" }}>
                      Sunmughan Swamy — Founder
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#0077b5" }} />
                </a>
              </div>

              {/* By the Numbers */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                    By the Numbers
                  </p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {s.l}
                      </dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.25rem" }}>
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* The Lesson */}
              <div className="px-4 py-4" style={{ background: accentBg, border: `1px solid ${accentBorder}` }}>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-2" style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
              </div>

              {/* Services */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div className="px-4 py-2" style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>
                    Services Offered
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {SERVICES.map((svc, i) => (
                    <p key={i} className="flex items-center gap-2 text-[11px] text-[#2C2010]" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 1, background: accent, display: "inline-block", flexShrink: 0 }} />
                      {svc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Also Read */}
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.26em] mb-3" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
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

        {/* ── SEO INTERNAL LINKS ── */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
            Explore More on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "IT Services Startups India", h: "/startup?sector=IT+Services" },
              { l: "AI Startups India 2026", h: "/startup?sector=Artificial+Intelligence" },
              { l: "Chhattisgarh Startups", h: "/startup?q=chhattisgarh" },
              { l: "SaaS Startups India", h: "/startup?sector=SaaS" },
              { l: "Software Companies Raipur", h: "/startup?q=raipur" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{ border: "1px solid #D8D2C4", background: "white", textDecoration: "none" }}
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-2">
          <div className="grid sm:grid-cols-2 gap-6 items-center pb-8" style={{ borderBottom: "1px solid #D8D2C4" }}>
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building India's next tech success? Get verified on UpForge.
              </p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif", textDecoration: "none" }}
                aria-label="List your Indian startup on UpForge for free"
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p className="text-[9px] leading-relaxed mt-4" style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            * Data sourced from Codeair Software Solutions official website (codeair.tech), LinkedIn company profile, ZoomInfo, Clutch platform, and public sources as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
            Client and revenue figures are based on publicly available company disclosures.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "IT Services Startups", h: "/startup?sector=IT+Services" },
                { l: "AI Startups India", h: "/startup?sector=Artificial+Intelligence" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Atomberg Profile", h: "/startup/atomberg-fans" },
                { l: "Atlan Profile", h: "/startup/atlan-data" },
                { l: "Global Registry", h: "/registry" },
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
