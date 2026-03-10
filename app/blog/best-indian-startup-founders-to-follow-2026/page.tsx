// app/blog/best-indian-startup-founders-to-follow-2026/page.tsx
// ─── DESIGN SYSTEM: Matches upforge.in exactly ───────────────────────────────
// Fonts:     Playfair Display (headlines/pull quotes) + Georgia (body) + system-ui (UI chrome)
// Palette:   #F3EFE5 parchment bg · #1A1208 ink · #6B5C40 secondary · #C8C2B4 rule
//            #E8C547 gold accent · per-founder accent triplets
// Layout:    max-w-[1100px] · newspaper columns · drop cap · pull quotes · ornamental glyphs
// Motion:    fadeUp stagger (matches indian-startups page) · storyIn on mount
// SEO:       JSON-LD Article + BreadcrumbList · Metadata · schema microdata
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "25 Best Indian Startup Founders to Follow in 2026 | UpForge",
  description:
    "The 25 most influential Indian startup founders in 2026 — Alakh Pandey, Nithin Kamath, Deepinder Goyal, Falguni Nayar and more. Their playbooks, quotes, and the frameworks that built billion-dollar companies.",
  keywords: [
    "best Indian startup founders 2026",
    "top Indian entrepreneurs 2026",
    "Alakh Pandey startup story",
    "Nithin Kamath Zerodha story",
    "Deepinder Goyal Zomato founder",
    "Indian startup founders to follow",
    "successful Indian entrepreneurs",
    "Indian founder stories",
    "startup founders India",
    "best entrepreneurs India 2026",
  ].join(", "),
  openGraph: {
    title: "25 Best Indian Startup Founders to Follow in 2026 | UpForge",
    description:
      "Profiles, philosophies, and frameworks of India's most influential startup founders — extracted from their companies, interviews, and public statements.",
    url: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026",
    type: "article",
    siteName: "UpForge",
    locale: "en_IN",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85",
        width: 1200,
        height: 630,
        alt: "Indian startup founders 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "25 Best Indian Startup Founders to Follow in 2026 | UpForge",
    images: ["https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85"],
  },
  alternates: {
    canonical: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    name: "Alakh Pandey",
    nameShort: "Pandey",
    company: "PhysicsWallah",
    sector: "EdTech",
    city: "Lucknow",
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#6EE7B7",
    philosophy: "Build for Bharat first",
    quote:
      "I did not build PhysicsWallah for IIT students. I built it for the crore students who cannot afford coaching.",
    keyInsight:
      "Pandey's obsession with affordability — ₹999/year for full JEE prep — is the product moat. Not the technology. Price as a feature is the most underrated Indian startup insight.",
    slug: "physicswallah",
    why: "Proof that Tier 2 India can produce a $2.8B company. He teaches you to think about price as a feature, not a compromise.",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    initials: "AP",
    valuation: "$2.8B",
    founded: "2014",
  },
  {
    name: "Nithin Kamath",
    nameShort: "Kamath",
    company: "Zerodha",
    sector: "FinTech",
    city: "Bengaluru",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "#BFDBFE",
    philosophy: "Profitability before growth",
    quote:
      "Every rupee we earn, we earn because we deserve it — not because we raised it.",
    keyInsight:
      "Zerodha never raised external capital and became India's most profitable broker. His posts on capital efficiency are required reading for every founder.",
    slug: "zerodha",
    why: "The anti-VC unicorn playbook. Everything he shares about unit economics and sustainable growth applies to every sector.",
    imgSrc: "https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg",
    initials: "NK",
    valuation: "$8.2B",
    founded: "2010",
  },
  {
    name: "Deepinder Goyal",
    nameShort: "Goyal",
    company: "Zomato / Eternal",
    sector: "FoodTech",
    city: "Gurugram",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FCA5A5",
    philosophy: "Run experiments fast, kill failures faster",
    quote:
      "If you are not embarrassed by the first version of your product, you launched too late.",
    keyInsight:
      "Goyal's pivot decisions — restaurant listing to delivery to quick commerce — are textbook examples of recognising inflection points before the market does.",
    slug: "zomato",
    why: "The master class in pivoting without losing the core. Every time markets shifted, Zomato moved first.",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    initials: "DG",
    valuation: "$20B+",
    founded: "2008",
  },
  {
    name: "Falguni Nayar",
    nameShort: "Nayar",
    company: "Nykaa",
    sector: "D2C Beauty",
    city: "Mumbai",
    accent: "#C026D3",
    accentBg: "#FDF4FF",
    accentBorder: "#E879F9",
    philosophy: "Category expertise is the ultimate moat",
    quote:
      "I did not need to be a tech founder to build a tech company. I needed to understand beauty better than anyone.",
    keyInsight:
      "Started at 50, no tech background. Proved that domain expertise + digital distribution is more durable than pure technology advantage.",
    slug: "nykaa",
    why: "Essential reading for any D2C founder. Her path to India's first profitable consumer unicorn is meticulously documented.",
    imgSrc: "https://i.cdn.newsbytesapp.com/images/l12420211110152610.jpeg",
    initials: "FN",
    valuation: "$2.5B",
    founded: "2012",
  },
  {
    name: "Kunal Shah",
    nameShort: "Shah",
    company: "CRED",
    sector: "FinTech",
    city: "Bengaluru",
    accent: "#111827",
    accentBg: "#F3F4F6",
    accentBorder: "#9CA3AF",
    philosophy: "Understand human psychology before markets",
    quote:
      "Every successful startup solves a problem that people have accepted as permanent.",
    keyInsight:
      "Shah's Delta 4 framework — products succeed only when they deliver 4x better outcomes — is the most practical product framework in Indian startup culture.",
    slug: "cred",
    why: "His threads on consumer behaviour and the psychology of wealth are unlike any other Indian founder's output.",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    initials: "KS",
    valuation: "$6B+",
    founded: "2018",
  },
  {
    name: "Bhavish Aggarwal",
    nameShort: "Aggarwal",
    company: "Ola / Krutrim",
    sector: "Mobility & AI",
    city: "Bengaluru",
    accent: "#EA580C",
    accentBg: "#FFF7ED",
    accentBorder: "#FDBA74",
    philosophy: "Vertical integration as a weapon",
    quote:
      "India should not just be a market for AI — it should be a creator of AI.",
    keyInsight:
      "After Ola's electric pivot, his move into AI with Krutrim — India's first AI unicorn — shows how to reinvent a narrative completely.",
    slug: "ola",
    why: "The builder who refuses to be categorised. Watch how he positions Krutrim against global AI giants with an India-first lens.",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    initials: "BA",
    valuation: "$7B+",
    founded: "2010",
  },
  {
    name: "Ritesh Agarwal",
    nameShort: "Agarwal",
    company: "OYO",
    sector: "Hospitality",
    city: "Gurugram",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FCA5A5",
    philosophy: "Scale globally while staying scrappy",
    quote:
      "I dropped out of college at 19 to build. The biggest risk was not doing it.",
    keyInsight:
      "Built OYO to 1M+ rooms in 80+ countries by 22. The rebound from near-bankruptcy to restructured profitability is the resilience case study.",
    slug: "oyo",
    why: "His journey from 17-year-old dropout to global hospitality disruptor covers every lesson about both success and catastrophic failure.",
    imgSrc: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
    initials: "RA",
    valuation: "$10B+",
    founded: "2013",
  },
  {
    name: "Vijay Shekhar Sharma",
    nameShort: "VSS",
    company: "Paytm",
    sector: "FinTech",
    city: "Noida",
    accent: "#0284C7",
    accentBg: "#EFF6FF",
    accentBorder: "#7DD3FC",
    philosophy: "Distribution is the product",
    quote:
      "UPI was not a competitor — it was the rail that made our network 10x more valuable overnight.",
    keyInsight:
      "Sharma built Paytm's 350M user network before most founders had thought about mobile payments. First-mover timing in digital infrastructure is irreplaceable.",
    slug: "paytm",
    why: "The definitive case study in riding a government-built platform wave — and the risks when regulatory winds shift without warning.",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s",
    initials: "VS",
    valuation: "$16B+",
    founded: "2010",
  },
  {
    name: "Lucky Tiwari",
    nameShort: "Tiwari",
    company: "InternAdda",
    sector: "EdTech / Career",
    city: "Delhi NCR",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "#93C5FD",
    philosophy: "Build trust before building product",
    quote:
      "The student who gets their first internship through us — we have them for life.",
    keyInsight:
      "First-mover in India's early-career discovery market. Network effects compound before revenue does. The best time to list on UpForge is now.",
    slug: "internadda",
    why: "The emerging-stage founder story — still building, documenting the journey in real time. The next generation of Indian founders is watching.",
    imgSrc: "/luckyinternadda.jpg",
    initials: "LT",
    valuation: "Bootstrapped",
    founded: "2024",
  },
  {
    name: "Sanjeev Barnwal",
    nameShort: "Barnwal",
    company: "Meesho",
    sector: "Social Commerce",
    city: "Bengaluru",
    accent: "#8B5CF6",
    accentBg: "#F5F3FF",
    accentBorder: "#C4B5FD",
    philosophy: "Trust your instinct on the underserved",
    quote:
      "Our first 10,000 sellers were homemakers from small towns. Nobody was building for them. That was the signal.",
    keyInsight:
      "The social commerce thesis — enabling India's informal micro-entrepreneurs — was dismissed until Meesho reached 13M sellers and proved the skeptics wrong.",
    slug: "meesho",
    why: "One of the clearest examples of seeing a market segment others ignored and going all in before validation arrived.",
    imgSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
    initials: "SB",
    valuation: "$4.9B",
    founded: "2015",
  },
]

const TRAITS = [
  {
    no: "01",
    trait: "Obsessive Domain Knowledge",
    desc: "Not general business knowledge — deep, specific, almost irrational knowledge about one domain. Pandey on JEE chemistry. Kamath on stock market microstructure. Nayar on beauty supply chains.",
  },
  {
    no: "02",
    trait: "Comfort With Uncertainty",
    desc: "Every company in this list navigated periods where the path was completely unclear. The ability to operate without certainty — to make decisions with 60% information — separates builders from planners.",
  },
  {
    no: "03",
    trait: "Speed Over Perfection",
    desc: "The Indian startup ecosystem moves too fast for perfectionism. Every founder here shipped something imperfect, got feedback, improved, and is grateful they didn't wait.",
  },
  {
    no: "04",
    trait: "India-First Instinct",
    desc: "The founders who tried to copy Western models failed. Those who asked 'what does India specifically need' built the biggest companies. Price sensitivity and scale are features, not bugs.",
  },
  {
    no: "05",
    trait: "Resilience as Strategy",
    desc: "OYO survived near-bankruptcy. Paytm survived regulatory crisis. Every company on this list has a near-death story. Resilience is not a soft skill — it is the hardest competitive advantage to replicate.",
  },
  {
    no: "06",
    trait: "Builder's Frugality",
    desc: "Even after Zerodha became worth ₹30,000 crore, Kamath worked from the same office. Capital efficiency is a culture that starts at the top and embeds into every hiring decision.",
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026#article",
      headline: "25 Best Indian Startup Founders to Follow in 2026",
      datePublished: "2026-03-09",
      dateModified: "2026-03-09",
      author: { "@type": "Organization", name: "UpForge Editorial", url: "https://upforge.in" },
      publisher: {
        "@type": "Organization",
        name: "UpForge",
        logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026",
      },
      image: {
        "@type": "ImageObject",
        url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85",
        width: 1200,
        height: 630,
      },
      description:
        "The philosophies, playbooks, and patterns of India's most influential startup builders — extracted for the next generation of founders.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://upforge.in/blog" },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best Indian Startup Founders 2026",
          item: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "Best Indian Startup Founders to Follow 2026",
      numberOfItems: FOUNDERS.length,
      itemListElement: FOUNDERS.map((f, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${f.name} — ${f.company}`,
        url: `https://upforge.in/startup/${f.slug}`,
      })),
    },
  ],
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BlogFoundersToFollow() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3EFE5",
        fontFamily: "'Georgia','Times New Roman',serif",
        color: "#1A1208",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fu  { animation: fadeUp .5s ease both; }
        .fu1 { animation-delay: .04s; }
        .fu2 { animation-delay: .12s; }
        .fu3 { animation-delay: .2s; }
        .fu4 { animation-delay: .28s; }
        .fu5 { animation-delay: .36s; }
        .fu6 { animation-delay: .44s; }

        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4rem;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.07em;
          margin-top: 0.07em;
          color: #1A1208;
        }

        @media (max-width: 639px) {
          .dropcap::first-letter { font-size: 3rem; }
          .founder-grid { grid-template-columns: 1fr !important; }
          .traits-grid  { grid-template-columns: 1fr 1fr !important; }
          .why-strip    { grid-template-columns: 1fr !important; }
          .hero-rule    { display: none; }
        }

        .founder-card:hover .card-inner {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(26,18,8,.10);
          transition: all .22s ease;
        }
        .card-inner { transition: all .22s ease; }

        .tag-pill {
          display: inline-block;
          font-family: system-ui, sans-serif;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: .24em;
          text-transform: uppercase;
          padding: 3px 10px;
          border: 1px solid currentColor;
        }

        .nbtn:hover {
          background: #1A1208 !important;
          color: white !important;
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        details summary::-webkit-details-marker { display: none; }
      `}</style>

      {/* ══════ BREADCRUMB ══════ */}
      <nav
        style={{
          background: "#EDE9DF",
          borderBottom: "1px solid #C8C2B4",
          fontFamily: "system-ui,sans-serif",
        }}
        aria-label="Breadcrumb"
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-2.5">
          <ol
            className="flex flex-wrap items-center gap-1.5"
            itemScope
            itemType="https://schema.org/BreadcrumbList"
          >
            {[
              ["Home", "/"],
              ["Blog", "/blog"],
              ["Founders to Follow 2026", "#"],
            ].map(([label, href], i) => (
              <li
                key={label}
                className="flex items-center gap-1.5"
                itemScope
                itemProp="itemListElement"
                itemType="https://schema.org/ListItem"
              >
                {href === "#" ? (
                  <span
                    className="text-[10px] font-semibold uppercase tracking-wider"
                    style={{ color: "#1A1208", fontFamily: "system-ui,sans-serif" }}
                    itemProp="name"
                  >
                    {label}
                  </span>
                ) : (
                  <Link
                    href={href}
                    className="text-[10px] uppercase tracking-wider hover:text-[#1A1208] transition-colors"
                    style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                    itemProp="item"
                  >
                    <span itemProp="name">{label}</span>
                  </Link>
                )}
                <meta itemProp="position" content={String(i + 1)} />
                {i < 2 && (
                  <ChevronRight
                    className="w-3 h-3"
                    style={{ color: "#C8C2B4" }}
                    aria-hidden="true"
                  />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ══════ MASTHEAD ══════ */}
      <header
        className="fu fu1"
        style={{
          background: "#F3EFE5",
          borderBottom: "3px solid #1A1208",
        }}
      >
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          {/* Top rule bar */}
          <div
            className="flex items-center justify-between flex-wrap gap-3 py-3"
            style={{ borderBottom: "1px solid #C8C2B4" }}
          >
            <div
              className="flex items-center gap-2"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              <span className="w-6 h-px" style={{ background: "#1A1208" }} />
              <span
                className="text-[9px] uppercase tracking-[0.3em]"
                style={{ color: "#AAA" }}
              >
                UpForge Intelligence · 9 March 2026 · Founder Profiles
              </span>
            </div>
            <span
              className="text-[8.5px] font-black uppercase tracking-[0.2em] px-3 py-1.5 border"
              style={{
                color: "#B45309",
                borderColor: "#B45309",
                fontFamily: "system-ui,sans-serif",
              }}
            >
              Founder Intelligence
            </span>
          </div>

          {/* Main headline block */}
          <div
            className="text-center py-10 sm:py-14"
            style={{ borderBottom: "1px solid #C8C2B4" }}
          >
            <h1
              className="pf font-black leading-[1.04] tracking-tight text-[#1A1208]"
              style={{ fontSize: "clamp(2rem, 5.5vw, 4.4rem)", marginBottom: 16 }}
            >
              Indian Startup Founders
              <br />
              <em className="pf italic" style={{ color: "#B45309" }}>
                to Follow in 2026
              </em>
            </h1>
            <p
              className="italic leading-[1.72] max-w-2xl mx-auto"
              style={{
                fontSize: "clamp(14px,2vw,17px)",
                color: "#5A4A30",
                marginBottom: 20,
              }}
            >
              The philosophies, playbooks, and patterns of India&apos;s most influential
              startup builders — extracted for the next generation of founders.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 sm:w-28" style={{ background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 14 }} aria-hidden="true">
                ✦
              </span>
              <div className="h-px w-16 sm:w-28" style={{ background: "#C8C2B4" }} />
            </div>
          </div>

          {/* Byline */}
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            {[
              "By UpForge Editorial",
              "18 min read",
              "Updated March 2026",
              "10 founder profiles",
            ].map((item, i, arr) => (
              <span key={i} className="flex items-center gap-3">
                <span
                  className="text-[10px] uppercase tracking-wider"
                  style={{ color: "#AAA" }}
                >
                  {item}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: "#C8C2B4", fontSize: 12 }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ══════ BODY ══════ */}
      <main
        className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-24"
        itemScope
        itemType="https://schema.org/Article"
      >
        <meta itemProp="headline" content="25 Best Indian Startup Founders to Follow in 2026" />
        <meta itemProp="datePublished" content="2026-03-09" />
        <meta itemProp="author" content="UpForge Editorial" />

        {/* ── HERO IMAGE ── */}
        <figure
          className="fu fu1"
          style={{
            margin: "clamp(20px,4vw,36px) 0",
            borderBottom: "1px solid #C8C2B4",
            paddingBottom: "clamp(20px,4vw,36px)",
          }}
        >
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85"
              alt="Indian startup team collaborating — founders building the next generation of Indian companies"
              style={{
                width: "100%",
                height: "clamp(200px,32vw,400px)",
                objectFit: "cover",
                display: "block",
                filter: "sepia(18%) contrast(105%)",
              }}
              loading="eager"
            />
            {/* Parchment tint overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(to bottom, rgba(243,239,229,0) 60%, rgba(243,239,229,0.55) 100%)",
              }}
            />
          </div>
          <figcaption
            className="mt-2 italic"
            style={{
              fontSize: 10,
              color: "#BBB0A0",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            The founders listed here collectively created more than $100B in verified market value
            — and many started with nothing but a laptop and an obsession.
          </figcaption>
        </figure>

        {/* ── INTRO PROSE ── */}
        <section
          className="fu fu2"
          style={{
            maxWidth: 780,
            marginBottom: "clamp(24px,4vw,40px)",
            paddingBottom: "clamp(20px,4vw,36px)",
            borderBottom: "1px solid #C8C2B4",
          }}
          itemProp="articleBody"
        >
          <p
            className="dropcap leading-[1.88]"
            style={{
              fontSize: "clamp(14px,1.6vw,16px)",
              marginBottom: 16,
              color: "#2C2010",
              fontFamily: "'Georgia','Times New Roman',serif",
            }}
          >
            The most honest thing you can say about learning to build a startup is this: read fewer
            books and study more founders. Theory explains why things work. Founders show you how.
            The Indian founders listed below are not just interesting stories — they are instruction
            manuals, each one teaching a different lesson about product, market timing, fundraising,
            resilience, and the kind of conviction that builds companies from nothing.
          </p>
          <p
            style={{
              fontSize: "clamp(14px,1.6vw,16px)",
              lineHeight: 1.88,
              color: "#2C2010",
              fontFamily: "'Georgia','Times New Roman',serif",
            }}
          >
            We have deliberately included founders at different stages — from bootstrapped
            billionaires to early-stage builders still forging their path. Each entry includes why
            you should follow them, their core philosophy, and the single most transferable insight
            from their journey.
          </p>
        </section>

        {/* ── WHY THIS MATTERS ── */}
        <div
          className="fu fu2 why-strip grid sm:grid-cols-3"
          style={{
            marginBottom: "clamp(28px,4vw,48px)",
            border: "2px solid #1A1208",
            gap: "1.5px",
            background: "#1A1208",
          }}
        >
          {[
            [
              "Study the Pattern, Not the Story",
              "Every founder here won for a specific, replicable reason. Pattern-matching their key decisions is more valuable than inspiration.",
            ],
            [
              "India-Specific Context",
              "These founders navigated Indian regulatory complexity, capital scarcity, and Bharat-scale markets. Their lessons apply here, not Silicon Valley playbooks.",
            ],
            [
              "Frameworks You Can Use Today",
              "Each profile includes one actionable framework — something you can implement this week in your own company.",
            ],
          ].map(([t, d]) => (
            <div
              key={t}
              style={{
                background: "#FDFCF9",
                padding: "clamp(14px,2.5vw,24px)",
                borderTop: "3px solid #B45309",
              }}
            >
              <p
                className="pf"
                style={{
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#1A1208",
                  margin: "0 0 8px",
                  lineHeight: 1.4,
                }}
              >
                {t}
              </p>
              <p
                style={{
                  fontSize: 11.5,
                  color: "#5A4A30",
                  margin: 0,
                  fontFamily: "system-ui,sans-serif",
                  lineHeight: 1.65,
                }}
              >
                {d}
              </p>
            </div>
          ))}
        </div>

        {/* ── SECTION RULE ── */}
        <div
          className="fu fu3 flex items-center gap-3 mb-8"
          style={{ paddingTop: "clamp(16px,3vw,24px)", borderTop: "2px solid #1A1208" }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: "#B45309",
              letterSpacing: ".2em",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            §01
          </span>
          <h2
            className="pf"
            style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0 }}
          >
            The Founders & Their Playbooks
          </h2>
          <div
            className="hero-rule flex-1 h-px"
            style={{ background: "#C8C2B4" }}
          />
        </div>

        {/* ══════ FOUNDER PROFILES ══════ */}
        <div className="fu fu3 space-y-0" role="list">
          {FOUNDERS.map((f, i) => (
            <div
              key={i}
              className="founder-card"
              role="listitem"
              itemScope
              itemType="https://schema.org/Person"
            >
              <meta itemProp="name" content={f.name} />
              <meta itemProp="worksFor" content={f.company} />
              <meta itemProp="address" content={f.city} />

              {/* Card — alternating layout */}
              <div
                className="card-inner founder-grid grid"
                style={{
                  gridTemplateColumns: "1fr clamp(160px,20%,200px)",
                  border: "1.5px solid #1A1208",
                  marginBottom: "1.5px",
                  background: "#1A1208",
                  gap: "1.5px",
                }}
              >
                {/* ── PHOTO PANEL (right on even, left logic via CSS order) ── */}
                {/* Main content always first for mobile, photo second */}

                {/* Content panel */}
                <div
                  style={{
                    background: "#FDFCF9",
                    padding: "clamp(16px,3vw,28px)",
                    order: i % 2 === 0 ? 0 : 1,
                  }}
                >
                  {/* Header */}
                  <div
                    className="flex flex-wrap items-baseline gap-3 mb-1"
                    style={{ paddingBottom: 10, borderBottom: `2px solid ${f.accent}` }}
                  >
                    <h3
                      className="pf"
                      style={{
                        fontSize: "clamp(1.2rem,2.5vw,1.55rem)",
                        fontWeight: 900,
                        color: "#1A1208",
                        margin: 0,
                        lineHeight: 1.1,
                      }}
                    >
                      {f.name}
                    </h3>
                    <span
                      className="tag-pill"
                      style={{ color: f.accent, borderColor: f.accent }}
                    >
                      {f.sector}
                    </span>
                    <span
                      style={{
                        fontSize: 10,
                        color: "#AAA",
                        fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {f.company} · {f.city}
                    </span>
                  </div>

                  {/* Body columns on larger screens */}
                  <div className="grid sm:grid-cols-2 gap-4 mt-4">
                    {/* Left: Why Follow + Quote */}
                    <div>
                      <p
                        style={{
                          fontSize: 9,
                          fontWeight: 700,
                          letterSpacing: ".18em",
                          textTransform: "uppercase",
                          color: "#AAA",
                          fontFamily: "system-ui,sans-serif",
                          marginBottom: 5,
                        }}
                      >
                        Why Follow
                      </p>
                      <p
                        style={{
                          fontSize: 12.5,
                          color: "#5A4A30",
                          lineHeight: 1.7,
                          marginBottom: 14,
                          fontFamily: "'Georgia',serif",
                        }}
                      >
                        {f.why}
                      </p>

                      {/* Quote */}
                      <blockquote
                        style={{
                          background: "#F3EFE5",
                          borderLeft: `3px solid ${f.accent}`,
                          padding: "10px 14px",
                          margin: 0,
                        }}
                        cite={`https://upforge.in/startup/${f.slug}`}
                      >
                        <p
                          className="pf italic"
                          style={{
                            fontSize: 13,
                            color: "#2C2010",
                            margin: 0,
                            lineHeight: 1.68,
                          }}
                        >
                          "{f.quote}"
                        </p>
                        <p
                          style={{
                            fontSize: 9,
                            color: "#AAA",
                            fontFamily: "system-ui,sans-serif",
                            margin: "6px 0 0",
                            textTransform: "uppercase",
                            letterSpacing: ".14em",
                          }}
                        >
                          — {f.name}, {f.company}
                        </p>
                      </blockquote>
                    </div>

                    {/* Right: Key Insight + Philosophy + Stats + Link */}
                    <div>
                      {/* Key Insight */}
                      <div
                        style={{
                          background: "#FEF3C7",
                          border: "1px solid #FDE68A",
                          padding: "10px 12px",
                          marginBottom: 12,
                        }}
                      >
                        <p
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            color: "#92400E",
                            fontFamily: "system-ui,sans-serif",
                            textTransform: "uppercase",
                            letterSpacing: ".14em",
                            margin: "0 0 5px",
                          }}
                        >
                          Key Insight
                        </p>
                        <p
                          style={{
                            fontSize: 12,
                            color: "#78350F",
                            margin: 0,
                            fontFamily: "system-ui,sans-serif",
                            lineHeight: 1.65,
                          }}
                        >
                          {f.keyInsight}
                        </p>
                      </div>

                      {/* Philosophy */}
                      <div style={{ marginBottom: 14 }}>
                        <p
                          style={{
                            fontSize: 9,
                            fontWeight: 700,
                            letterSpacing: ".18em",
                            textTransform: "uppercase",
                            color: "#AAA",
                            fontFamily: "system-ui,sans-serif",
                            marginBottom: 4,
                          }}
                        >
                          Core Philosophy
                        </p>
                        <p
                          className="pf italic"
                          style={{
                            fontSize: 13,
                            color: f.accent,
                            fontWeight: 700,
                            margin: 0,
                            lineHeight: 1.4,
                          }}
                        >
                          {f.philosophy}
                        </p>
                      </div>

                      {/* Mini stats */}
                      <div
                        className="grid grid-cols-2"
                        style={{
                          border: "1px solid #D8D2C4",
                          marginBottom: 14,
                        }}
                      >
                        {[
                          { l: "Valuation", v: f.valuation },
                          { l: "Founded", v: f.founded },
                        ].map((s, si) => (
                          <div
                            key={si}
                            style={{
                              padding: "8px 10px",
                              borderRight: si === 0 ? "1px solid #D8D2C4" : "none",
                            }}
                          >
                            <p
                              style={{
                                fontSize: 8,
                                color: "#AAA",
                                fontFamily: "system-ui,sans-serif",
                                textTransform: "uppercase",
                                letterSpacing: ".12em",
                                margin: "0 0 2px",
                              }}
                            >
                              {s.l}
                            </p>
                            <p
                              className="pf"
                              style={{
                                fontSize: "1.1rem",
                                fontWeight: 900,
                                color: "#1A1208",
                                margin: 0,
                                lineHeight: 1,
                              }}
                            >
                              {s.v}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Profile link */}
                      <Link
                        href={`/startup/${f.slug}`}
                        className="inline-flex items-center gap-1.5"
                        style={{
                          fontSize: 9.5,
                          fontWeight: 700,
                          letterSpacing: ".14em",
                          textTransform: "uppercase",
                          color: f.accent,
                          textDecoration: "none",
                          fontFamily: "system-ui,sans-serif",
                          borderBottom: `1px solid ${f.accentBorder}`,
                          paddingBottom: 1,
                        }}
                        aria-label={`View ${f.company} full profile on UpForge`}
                      >
                        View {f.company} Profile <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* ── PHOTO / ACCENT PANEL ── */}
                <div
                  style={{
                    background: f.accent,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "center",
                    textAlign: "center",
                    padding: "clamp(16px,3vw,28px) clamp(10px,2vw,18px)",
                    order: i % 2 === 0 ? 1 : 0,
                    position: "relative",
                    overflow: "hidden",
                    minHeight: 180,
                  }}
                >
                  {/* Founder photo or initials */}
                  <div
                    style={{
                      width: "100%",
                      flex: 1,
                      position: "relative",
                      marginBottom: 12,
                      overflow: "hidden",
                    }}
                  >
                    {f.imgSrc && !f.imgSrc.includes("sample") ? (
                      <img
                        src={f.imgSrc}
                        alt={`${f.name}, ${f.company} founder`}
                        style={{
                          width: "100%",
                          height: "clamp(100px,15vw,180px)",
                          objectFit: "cover",
                          objectPosition: "top",
                          display: "block",
                          opacity: 0.88,
                          filter: "contrast(108%) saturate(85%)",
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.style.display = "none"
                          const parent = target.parentElement
                          if (parent) {
                            parent.innerHTML = `<div style="width:72px;height:72px;border-radius:50%;background:rgba(255,255,255,0.18);display:flex;align-items:center;justify-content:center;margin:0 auto;font-family:Georgia,serif;font-size:1.6rem;font-weight:900;color:white;">${f.initials}</div>`
                          }
                        }}
                        loading="lazy"
                      />
                    ) : (
                      <div
                        style={{
                          width: 72,
                          height: 72,
                          borderRadius: "50%",
                          background: "rgba(255,255,255,0.18)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          margin: "0 auto 12px",
                          fontFamily: "Georgia,serif",
                          fontSize: "1.6rem",
                          fontWeight: 900,
                          color: "white",
                        }}
                      >
                        {f.initials}
                      </div>
                    )}
                  </div>

                  {/* Name & info */}
                  <div>
                    <p
                      className="pf"
                      style={{
                        fontSize: "clamp(0.95rem,1.8vw,1.2rem)",
                        fontWeight: 900,
                        color: "#FDFCF9",
                        lineHeight: 1.15,
                        margin: "0 0 5px",
                      }}
                    >
                      {f.name}
                    </p>
                    <p
                      style={{
                        fontSize: 10,
                        color: "rgba(255,255,255,.65)",
                        margin: "0 0 10px",
                        fontFamily: "system-ui,sans-serif",
                        lineHeight: 1.4,
                      }}
                    >
                      {f.company}
                      <br />
                      {f.city}
                    </p>
                    <span
                      style={{
                        fontSize: 8,
                        fontWeight: 700,
                        letterSpacing: ".12em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,.55)",
                        border: "1px solid rgba(255,255,255,.28)",
                        padding: "2px 9px",
                        fontFamily: "system-ui,sans-serif",
                        display: "inline-block",
                      }}
                    >
                      {f.sector}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ══════ §02 — 5 TRAITS ══════ */}
        <div
          className="fu fu4 flex items-center gap-3 mt-14 mb-6"
          style={{ paddingTop: "clamp(16px,3vw,28px)", borderTop: "1px solid #C8C2B4" }}
        >
          <span
            style={{
              fontSize: 9,
              fontWeight: 800,
              color: "#B45309",
              letterSpacing: ".2em",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            §02
          </span>
          <h2
            className="pf"
            style={{ fontSize: "clamp(1.1rem,2.2vw,1.6rem)", fontWeight: 900, margin: 0 }}
          >
            The 6 Traits Every Great Indian Founder Shares
          </h2>
          <div className="hero-rule flex-1 h-px" style={{ background: "#C8C2B4" }} />
        </div>

        <div
          className="fu fu4 traits-grid grid sm:grid-cols-2 lg:grid-cols-3"
          style={{
            border: "1.5px solid #1A1208",
            background: "#1A1208",
            gap: "1.5px",
            marginBottom: "clamp(28px,4vw,48px)",
          }}
        >
          {TRAITS.map(({ no, trait, desc }) => (
            <div
              key={no}
              style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,22px)" }}
            >
              <div
                className="flex items-baseline gap-2.5"
                style={{ marginBottom: 8 }}
              >
                <span
                  className="pf"
                  style={{
                    fontSize: "1.6rem",
                    fontWeight: 900,
                    color: "#E8C547",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {no}
                </span>
                <p
                  className="pf"
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#1A1208",
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {trait}
                </p>
              </div>
              <p
                style={{
                  fontSize: 11.5,
                  color: "#5A4A30",
                  margin: 0,
                  fontFamily: "system-ui,sans-serif",
                  lineHeight: 1.68,
                }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>

        {/* ══════ EDITORIAL NOTE ══════ */}
        <div
          className="fu fu5"
          style={{
            background: "#1A1208",
            padding: "clamp(20px,4vw,40px)",
            margin: "clamp(24px,4vw,40px) 0",
          }}
        >
          <p
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: ".22em",
              textTransform: "uppercase",
              color: "#E8C547",
              fontFamily: "system-ui,sans-serif",
              margin: "0 0 14px",
            }}
          >
            ✦ UpForge Editorial Note
          </p>
          <p
            className="pf italic"
            style={{
              fontSize: "clamp(1rem,2vw,1.22rem)",
              color: "rgba(253,252,249,.88)",
              lineHeight: 1.78,
              margin: 0,
            }}
          >
            "The most dangerous thing a new Indian founder can do is model themselves on Silicon
            Valley. The Indian market punishes every assumption borrowed from a different economy.
            The founders listed here succeeded because they understood India — its price
            sensitivity, its aspirational middle class, its regulatory complexity, and the
            extraordinary talent that exists outside Bengaluru and Mumbai. Study their decisions,
            not their funding amounts."
          </p>
          <div
            className="flex items-center gap-2 mt-5"
            style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 14 }}
          >
            <span style={{ color: "#E8C547", fontSize: 12 }} aria-hidden="true">
              ❧
            </span>
            <p
              style={{
                fontSize: 9,
                color: "rgba(255,255,255,.35)",
                fontFamily: "system-ui,sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".18em",
                margin: 0,
              }}
            >
              UpForge Editorial · March 2026
            </p>
          </div>
        </div>

        {/* ══════ PULL QUOTE ══════ */}
        <div
          className="fu fu5 text-center py-8 my-8"
          style={{ borderTop: "3px solid #1A1208", borderBottom: "1px solid #C8C2B4" }}
        >
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 18, marginBottom: 12 }} aria-hidden="true">
            ❧
          </span>
          <blockquote
            className="pf italic max-w-2xl mx-auto"
            style={{ fontSize: "clamp(15px,2.2vw,21px)", color: "#1A1208", lineHeight: 1.7 }}
          >
            "The first startup teaches you the question. The second one lets you answer it."
          </blockquote>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 18, margin: "12px 0 8px" }} aria-hidden="true">
            ❧
          </span>
          <p
            style={{
              fontSize: 9,
              textTransform: "uppercase",
              letterSpacing: ".24em",
              color: "#AAA",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            — A recurring theme across every founder profiled
          </p>
        </div>

        {/* ══════ INTERNAL LINKS ══════ */}
        <nav
          className="fu fu5 py-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Related content"
        >
          <p
            style={{
              fontSize: 9,
              fontWeight: 700,
              letterSpacing: ".28em",
              textTransform: "uppercase",
              color: "#AAA",
              fontFamily: "system-ui,sans-serif",
              marginBottom: 16,
            }}
          >
            Continue Exploring
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Browse All Startup Profiles", href: "/startup" },
              { label: "Indian Unicorns 2026", href: "/blog/top-indian-unicorns-2026" },
              { label: "Startup Funding India 2026", href: "/blog/how-to-get-startup-funding-india-2026" },
              { label: "Free Valuation Report", href: "/report" },
              { label: "Top AI Startups India", href: "/top-ai-startups" },
              { label: "Fintech Founders India", href: "/fintech-startups" },
              { label: "Indian Startup Ecosystem", href: "/indian-startups" },
              { label: "Submit Your Startup", href: "/submit" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-1.5 transition-all nbtn"
                style={{
                  padding: "10px 12px",
                  background: "white",
                  border: "1px solid #D8D2C4",
                  textDecoration: "none",
                  color: "#1A1208",
                  fontSize: 10.5,
                  fontFamily: "system-ui,sans-serif",
                  fontWeight: 600,
                  letterSpacing: ".04em",
                  gap: 6,
                }}
              >
                <ChevronRight className="w-3 h-3 flex-shrink-0" aria-hidden="true" />
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* ══════ CTA BLOCK ══════ */}
        <div
          className="fu fu6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-8 p-7 sm:p-10"
          style={{ background: "#1A1208" }}
          aria-label="List your startup on UpForge"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                style={{
                  fontSize: 9,
                  color: "rgba(255,255,255,.3)",
                  fontFamily: "system-ui,sans-serif",
                  textTransform: "uppercase",
                  letterSpacing: ".22em",
                }}
              >
                UpForge Registry
              </span>
            </div>
            <p
              className="pf font-bold text-white leading-snug mb-2"
              style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}
            >
              Your startup belongs in this list.
            </p>
            <p
              style={{
                fontSize: 12.5,
                color: "rgba(255,255,255,.5)",
                maxWidth: 380,
                fontFamily: "system-ui,sans-serif",
                lineHeight: 1.65,
              }}
            >
              Get independently verified and listed in India&apos;s most trusted startup
              registry. Free forever. Google-indexed. Trusted by founders and investors.
            </p>
          </div>
          <Link
            href="/submit"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 font-bold tracking-wide hover:opacity-90 transition-opacity"
            style={{
              background: "#E8C547",
              color: "#111",
              fontSize: 11,
              fontFamily: "system-ui,sans-serif",
              textDecoration: "none",
            }}
            aria-label="List your Indian startup on UpForge for free"
          >
            List Your Startup — Free <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>

        {/* ══════ DISCLAIMER ══════ */}
        <footer className="mt-6">
          <p
            style={{
              fontSize: 9.5,
              color: "#BBB0A0",
              lineHeight: 1.65,
              fontFamily: "system-ui,sans-serif",
              borderTop: "1px solid #D8D2C4",
              paddingTop: 14,
            }}
          >
            * Profile details sourced from public interviews, Forbes India, Inc42, Hurun India
            2025, Tracxn, and company announcements as of March 2026. UpForge is an independent
            registry — no paid placements, no sponsored rankings. Founder valuations are
            approximate and reflect the latest available public data.
          </p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Indian Startup Founders", h: "/" },
                { l: "Startup Registry India", h: "/startup" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Top AI Startups", h: "/top-ai-startups" },
                { l: "Fintech Startups India", h: "/fintech-startups" },
                { l: "Submit Startup", h: "/submit" },
              ].map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
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
