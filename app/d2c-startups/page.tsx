// app/d2c-startups/page.tsx
// ─── TARGET KEYWORDS ────────────────────────────────────────────────────────
// "d2c startups India"                 ~14,000/mo
// "direct to consumer brands India"    ~8,200/mo
// "best d2c companies India 2026"      ~6,400/mo
// "Nykaa Mamaearth startup"            ~9,000/mo
// ────────────────────────────────────────────────────────────────────────────
// DESIGN TOKENS — exact match to app/page.tsx + blog page:
//   bg: #F3EFE5  breadcrumb: #EDE9DF  ink: #1A1208
//   card-gap: 1.5px #1A1208  card-bg: #FDFCF9
//   sector accent: #C026D3 (fuchsia — D2C/Beauty brand)
//   fonts: Playfair Display · Georgia · system-ui
// ────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "D2C Startups India 2026 — Top Direct-to-Consumer Brands, Founders & Companies | UpForge",
  description:
    "Complete guide to India's D2C startups in 2026 — Nykaa, Mamaearth, boAt, Lenskart, Sugar Cosmetics, Bewakoof and more. 18 unicorns, $800M+ raised in 2025. Brand profiles, founder stories, and lessons from India's consumer brand revolution.",
  keywords: "d2c startups India, direct to consumer brands India 2026, Nykaa Falguni Nayar, Mamaearth, boAt Aman Gupta, Lenskart Peyush Bansal, Sugar Cosmetics Vineeta Singh, d2c unicorns India, consumer brands India, online brand startups India",
  alternates: { canonical: "https://upforge.in/d2c-startups" },
  openGraph: {
    title: "D2C Startups India 2026 — Top Direct-to-Consumer Brands | UpForge",
    description: "18 unicorns. $800M+ raised in 2025. Profiles, playbooks, and lessons from India's top D2C brand founders — Nykaa, Mamaearth, boAt, Lenskart, Sugar Cosmetics.",
    url: "https://upforge.in/d2c-startups",
    siteName: "UpForge", locale: "en_IN", type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85", width: 1200, height: 630, alt: "D2C consumer brands India 2026" }],
  },
  twitter: { card: "summary_large_image", site: "@upforge_in", title: "D2C Startups India 2026 | UpForge", images: ["https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
}

const COMPANIES = [
  {
    name: "Nykaa",
    nameShort: "Nykaa",
    founder: "Falguni Nayar",
    role: "Founder & CEO",
    city: "Mumbai",
    founded: "2012",
    valuation: "$2.5B",
    funding: "Bootstrapped to IPO",
    sector: "Beauty · Listed NSE",
    accent: "#C026D3",
    accentBg: "#FDF4FF",
    accentBorder: "#E879F9",
    slug: "nykaa",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    initials: "FN",
    philosophy: "Category expertise + digital distribution beats pure technology",
    quote: "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop.",
    why: "Falguni Nayar left investment banking at 50 to build India's first profitable beauty unicorn. She flew personally to brand offices in Paris and New York to guarantee product authenticity. Nykaa listed in 2021 — the first woman-founded Indian company to IPO. The most consequential personal bet in Indian startup history.",
    keyInsight: "Nayar understood that Indian women were buying beauty products from untrustworthy offline sources — and that an authenticated, curated online channel would create enormous loyalty. Authenticity was the moat, not the catalog. Every D2C brand in beauty now competes on that same axis.",
    tags: ["IPO 2021", "First Woman-Founded Unicorn", "Beauty Vertical"],
  },
  {
    name: "Mamaearth",
    nameShort: "Mamaearth",
    founder: "Varun Alagh",
    role: "Co-founder & CEO",
    city: "Gurugram",
    founded: "2016",
    valuation: "$1.2B",
    funding: "$111M",
    sector: "Beauty · Listed NSE",
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#6EE7B7",
    slug: "mamaearth",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    initials: "VA",
    philosophy: "Solve a problem you personally have",
    quote: "Ghazal and I could not find toxin-free products for our newborn. We built Mamaearth for every parent who had the same problem.",
    why: "Varun and Ghazal Alagh started Mamaearth from a deeply personal pain — no safe baby products for their newborn. That personal urgency became a Rs 2,000 crore brand. They listed on NSE, built a house of brands (Derma Co, Aqualogica), and proved that D2C can scale to public markets.",
    keyInsight: "The Alghs' lesson is one of the most repeatable in consumer brand history: found a brand on a problem you personally experienced. The authenticity compounds into trust, the trust compounds into word-of-mouth, and the word-of-mouth compounds into CAC efficiency that funded brands cannot replicate.",
    tags: ["Listed NSE", "House of Brands", "Clean Label"],
  },
  {
    name: "boAt",
    nameShort: "boAt",
    founder: "Aman Gupta",
    role: "Co-founder & CMO",
    city: "New Delhi",
    founded: "2016",
    valuation: "$1.6B",
    funding: "$177M",
    sector: "Consumer Electronics",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FCA5A5",
    slug: "boat",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    initials: "AG",
    philosophy: "In commoditised hardware, lifestyle branding is the moat",
    quote: "The product is the identity. boAt earphones are not just earphones — they are who you are when you wear them.",
    why: "Aman Gupta and Sameer Mehta looked at India's audio market and saw an obvious gap: lifestyle-forward earphones at prices Indians would actually pay. boAt became India's #1 audio brand by volume — beating Sony and JBL through cultural branding, not engineering superiority. Shark Tank India made Aman Gupta the most recognised face in Indian startup culture.",
    keyInsight: "boAt's insight is transferable across every commoditised hardware category: specs are table stakes, culture is the moat. They spent more on brand partnerships and cultural associations (cricket, music, youth) than on product R&D — and won. The lesson: brand identity is a D2C product feature.",
    tags: ["#1 Audio India", "Shark Tank Judge", "IPO Pipeline"],
  },
  {
    name: "Lenskart",
    nameShort: "Lenskart",
    founder: "Peyush Bansal",
    role: "Co-founder & CEO",
    city: "Gurugram",
    founded: "2010",
    valuation: "$4.5B",
    funding: "$1.8B",
    sector: "D2C Eyewear · Omnichannel",
    accent: "#0284C7",
    accentBg: "#EFF6FF",
    accentBorder: "#7DD3FC",
    slug: "lenskart",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    initials: "PB",
    philosophy: "Vertical integration from factory to customer is the ultimate D2C moat",
    quote: "We manufacture our own frames, we own the stores, we control the customer experience. No marketplace can compete with that.",
    why: "Peyush Bansal (IIT Delhi, Shark Tank India judge) built Lenskart into the world's largest vertically integrated eyewear brand — manufacturing their own frames, running 2,000+ stores, and using AI for virtual try-on. The combination of manufacturing + omnichannel + tech makes Lenskart nearly uncloneable.",
    keyInsight: "Bansal's most important strategic decision was to manufacture their own frames in India when every competitor sourced from China. That decision gave Lenskart 60%+ gross margins, full quality control, and an uncopiable supply chain advantage. Vertical integration is expensive upfront and nearly impossible to catch up with later.",
    tags: ["2,000+ Stores", "$4.5B Valuation", "Shark Tank Judge"],
  },
  {
    name: "Sugar Cosmetics",
    nameShort: "Sugar",
    founder: "Vineeta Singh",
    role: "Co-founder & CEO",
    city: "Mumbai",
    founded: "2012",
    valuation: "$500M+",
    funding: "$87M",
    sector: "Beauty · D2C",
    accent: "#7C3AED",
    accentBg: "#F5F3FF",
    accentBorder: "#C4B5FD",
    slug: "sugar-cosmetics",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    initials: "VS",
    philosophy: "Own a specific product category rather than compete across the range",
    quote: "We did not go after the full beauty category. We owned lip colour for Indian skin tones first. Everything else followed.",
    why: "Vineeta Singh (Shark Tank India judge, IIM Ahmedabad) built Sugar by refusing to compete with Lakme and L'Oreal in their strongest categories — and instead owning lip colour formulated specifically for Indian skin tones. 45,000+ retail touchpoints, one of India's fastest-growing beauty brands.",
    keyInsight: "Singh's strategic insight is rare among Indian D2C founders: she chose category focus over category breadth. Every SKU was formulated for Indian skin specifically — a segment that global brands chronically under-served with products designed for European skin tones. Specificity of customer = specificity of trust = defensibility.",
    tags: ["Indian Skin-First", "45K+ Retail Points", "Shark Tank Judge"],
  },
  {
    name: "Bewakoof",
    nameShort: "Bewakoof",
    founder: "Prabhkiran Singh",
    role: "Co-founder & CEO",
    city: "Mumbai",
    founded: "2012",
    valuation: "Private",
    funding: "$60M+",
    sector: "Fashion · D2C",
    accent: "#D97706",
    accentBg: "#FFFBEB",
    accentBorder: "#FDE68A",
    slug: "bewakoof",
    imgSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    initials: "PS",
    philosophy: "Pop culture is an acquisition strategy",
    quote: "We do not sell T-shirts. We sell identity. The young person in Jaipur wants to wear what they love, not what is expensive.",
    why: "Prabhkiran Singh built Bewakoof into India's most-loved affordable fashion brand by understanding Tier-2 India's cultural hunger — pop-culture T-shirts at Rs 399 that let 10M+ customers wear their identity. Pure-play digital brand built on meme culture, college humour, and social commerce.",
    keyInsight: "Bewakoof's insight is about the relationship between cultural identity and brand loyalty. The Rs 399 price point is not a discount — it is a carefully chosen signal that this brand belongs to you, not to the affluent consumer. Cultural resonance at accessible pricing is the most defensible D2C moat in India's Tier-2 market.",
    tags: ["10M+ Customers", "Tier-2 First", "Pop Culture Brand"],
  },
]

const ECOSYSTEM_STATS = [
  { v: "18",     l: "D2C Unicorns" },
  { v: "$800M+", l: "Raised in 2025" },
  { v: "500M",   l: "Online Shoppers" },
  { v: "$100B",  l: "D2C Market 2025" },
]

const TRAITS = [
  { no: "01", trait: "Authenticity is the Moat",            desc: "Nykaa's curated authenticity. Mamaearth's personal founding story. Sugar's India-specific formulation. The most defensible D2C brands in India are built on a specific, verifiable truth about the product." },
  { no: "02", trait: "Offline Expansion Is the Second Act",  desc: "Every surviving D2C brand — Nykaa, Sugar, Lenskart, boAt — is aggressively opening physical touchpoints. The founder who says 'we are digital-only' in 2026 is leaving their best customer acquisition channel empty." },
  { no: "03", trait: "Tier-2 India Has the Largest Appetite", desc: "Bewakoof's 10M customers and boAt's #1 market share are largely Tier-2 and Tier-3 phenomena. The Indian consumer brand that prices for Mumbai is missing the actual market." },
  { no: "04", trait: "House of Brands Beats Single Brand",   desc: "Mamaearth-to-Honasa, Good Glamm Group, Mensa Brands — the roll-up model lets D2C founders share infrastructure across brands. Single-brand D2C has a natural ceiling. House of brands does not." },
  { no: "05", trait: "Vertical Integration Compounds",       desc: "Lenskart's manufacturing moat is 15 years in the making — and no competitor has yet replicated it. Vertical integration is expensive and slow to build, which is precisely what makes it a moat." },
  { no: "06", trait: "Quick Commerce Is a D2C Channel",      desc: "A Sugar lipstick delivered via Blinkit in 10 minutes is a fundamentally different customer experience than the same product shipped in 48 hours. D2C brands with quick-commerce distribution are compounding a convenience moat." },
]

const TRENDS = [
  { num: "01", title: "Offline Is the Real D2C Channel in 2026",     body: "The brands that survived the 2022–23 D2C correction are all opening physical stores. Mamaearth, Sugar, Lenskart, and boAt have aggressive offline expansion plans. The customer who trusts the product offline becomes the most loyal digital repeat-buyer." },
  { num: "02", title: "Quick Commerce Rewrites Purchase Behaviour",   body: "Zepto, Blinkit, and Swiggy Instamart are now serious D2C distribution partners. A category that was 'impulse purchase at retail' is becoming 'impulse delivered in 10 minutes'. D2C brands with quick-commerce SKU presence are seeing 30–40% incremental revenue." },
  { num: "03", title: "House of Brands — D2C at PE Scale",            body: "Mensa Brands, Good Glamm Group, and Honasa Consumer are acquiring D2C brands and running them on shared infrastructure. This roll-up model gives each brand access to capital, logistics, and talent that standalone D2C companies cannot afford." },
  { num: "04", title: "ONDC Reduces Marketplace Dependency",         body: "The Open Network for Digital Commerce is reducing every D2C brand's dependence on Amazon and Flipkart. Brands with their own customer data and logistics infrastructure are best positioned for the ONDC transition — where they can own the relationship again." },
  { num: "05", title: "Tier-2 & Tier-3 India — The Real D2C Market", body: "The next 200M D2C customers are in Faridabad, Coimbatore, Patna, and Surat. Brands that price for Mumbai's Bandra are missing the actual market. Vernacular content, regional logistics, and accessible price points are the winning combination for the next growth cycle." },
  { num: "06", title: "Profitability Resets CAC Expectations",       body: "D2C boards are replacing GMV with gross contribution per order. Brands spending Rs 500 to acquire a customer who generates Rs 800 in lifetime revenue are being restructured or shut down. The profitable D2C brand — with Rs 200+ per order contribution — is the only type attracting capital in 2026." },
]

const FAQS = [
  { q: "Which is India's largest D2C brand by valuation?",       a: "By valuation, Lenskart ($4.5B) leads India's D2C sector as of March 2026. By brand awareness, Nykaa and boAt are the most recognised. Nykaa ($2.5B) is the most valuable beauty D2C brand." },
  { q: "How many D2C unicorns are in India in 2026?",            a: "India has 18 D2C unicorns as of March 2026. The sector raised $800M+ in 2025. Key unicorns include Nykaa, Lenskart, boAt, Mamaearth, Meesho, and FirstCry. Sugar Cosmetics is approaching unicorn status." },
  { q: "How did Falguni Nayar build Nykaa?",                     a: "Falguni Nayar founded Nykaa in 2012 at 50 years old after leaving investment banking. She focused on authentic product curation — flying personally to brand offices in Paris and New York — and building trust with Indian women customers who had no reliable online beauty destination. Nykaa listed on NSE in 2021." },
  { q: "What is the D2C market size in India 2026?",             a: "India's D2C market reached $100B in 2025, up from $12B in 2020. The market is expected to reach $300B by 2030, driven by 500M+ online shoppers, fast logistics infrastructure, and a growing middle class seeking branded quality at accessible prices." },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage", "@id": "https://upforge.in/d2c-startups",
      url: "https://upforge.in/d2c-startups",
      name: "D2C Startups India 2026 — Complete Guide | UpForge",
      dateModified: "2026-03-10",
      isPartOf: { "@type": "WebSite", name: "UpForge", url: "https://upforge.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
          { "@type": "ListItem", position: 2, name: "Indian Startups", item: "https://upforge.in/indian-startups" },
          { "@type": "ListItem", position: 3, name: "D2C Startups", item: "https://upforge.in/d2c-startups" },
        ],
      },
    },
    {
      "@type": "Article",
      headline: "D2C Startups India 2026 — Complete Sector Guide",
      author: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
      datePublished: "2026-03-10", dateModified: "2026-03-10",
      about: COMPANIES.map(c => ({ "@type": "Organization", name: c.name, founder: { "@type": "Person", name: c.founder } })),
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQS.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@type": "ItemList",
      name: "Top D2C Startups India 2026",
      numberOfItems: COMPANIES.length,
      itemListElement: COMPANIES.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: `${c.name} — ${c.sector}`, url: `https://upforge.in/startup/${c.slug}` })),
    },
  ],
}

export default function D2CStartupsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif", color: "#1A1208" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px) } to { opacity:1; transform:translateY(0) } }
        .fu  { animation: fadeUp .5s ease both; }
        .fu1 { animation-delay:.04s } .fu2 { animation-delay:.12s } .fu3 { animation-delay:.2s }
        .fu4 { animation-delay:.28s } .fu5 { animation-delay:.36s } .fu6 { animation-delay:.44s }
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4rem; font-weight: 900; line-height: 0.82;
          float: left; margin-right: 0.07em; margin-top: 0.07em; color: #1A1208;
        }
        @media (max-width:639px) {
          .dropcap::first-letter { font-size: 3rem; }
          .company-grid { grid-template-columns: 1fr !important; }
          .hero-rule { display:none; }
        }
        .company-card:hover .card-inner { transform:translateY(-2px); box-shadow:0 8px 32px rgba(26,18,8,.10); transition:all .22s ease; }
        .card-inner { transition: all .22s ease; }
        .tag-pill { display:inline-block; font-family:system-ui,sans-serif; font-size:8px; font-weight:800; letter-spacing:.24em; text-transform:uppercase; padding:3px 10px; border:1px solid currentColor; }
        .nbtn:hover { background:#1A1208 !important; color:white !important; }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#C8C2B4; }
        details summary::-webkit-details-marker { display:none; }
        details[open] .faq-chev { transform:rotate(90deg); }
        .faq-chev { transition:transform .2s ease; }
      `}</style>

      {/* BREADCRUMB */}
      <nav style={{ background: "#EDE9DF", borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }} aria-label="Breadcrumb">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-2.5">
          <ol className="flex flex-wrap items-center gap-1.5" itemScope itemType="https://schema.org/BreadcrumbList">
            {[["Home", "/"], ["Indian Startups", "/indian-startups"], ["D2C Startups", "#"]].map(([label, href], i) => (
              <li key={label} className="flex items-center gap-1.5" itemScope itemProp="itemListElement" itemType="https://schema.org/ListItem">
                {href === "#"
                  ? <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "#1A1208" }} itemProp="name">{label}</span>
                  : <Link href={href} className="text-[10px] uppercase tracking-wider hover:text-[#1A1208] transition-colors" style={{ color: "#AAA" }} itemProp="item"><span itemProp="name">{label}</span></Link>}
                <meta itemProp="position" content={String(i + 1)} />
                {i < 2 && <ChevronRight className="w-3 h-3" style={{ color: "#C8C2B4" }} />}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* MASTHEAD */}
      <header className="fu fu1" style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between flex-wrap gap-3 py-3" style={{ borderBottom: "1px solid #C8C2B4" }}>
            <div className="flex items-center gap-2" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="w-6 h-px" style={{ background: "#C026D3" }} />
              <span className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "#AAA" }}>UpForge Intelligence · March 2026 · D2C & Consumer Brands</span>
            </div>
            <span className="text-[8.5px] font-black uppercase tracking-[0.2em] px-3 py-1.5 border" style={{ color: "#C026D3", borderColor: "#C026D3", fontFamily: "system-ui,sans-serif" }}>Sector Guide</span>
          </div>
          <div className="text-center py-10 sm:py-14" style={{ borderBottom: "1px solid #C8C2B4" }}>
            <h1 className="pf font-black leading-[1.04] tracking-tight text-[#1A1208]" style={{ fontSize: "clamp(2rem,5.5vw,4.4rem)", marginBottom: 16 }}>
              D2C Startups India
              <br />
              <em className="pf italic" style={{ color: "#C026D3" }}>The Complete Guide</em> — 2026
            </h1>
            <p className="italic leading-[1.72] max-w-2xl mx-auto" style={{ fontSize: "clamp(14px,2vw,17px)", color: "#5A4A30", marginBottom: 20 }}>
              The brands, founders, playbooks, and counter-intuitive lessons that define India's direct-to-consumer revolution — from Falguni Nayar's bet at 50 to boAt's cultural moat and Lenskart's uncopiable vertical integration.
            </p>
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 sm:w-28" style={{ background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 14 }}>✦</span>
              <div className="h-px w-16 sm:w-28" style={{ background: "#C8C2B4" }} />
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 py-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            {["By UpForge Editorial", "23 min read", "Updated March 2026", "6 brand profiles"].map((item, i, arr) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-wider" style={{ color: "#AAA" }}>{item}</span>
                {i < arr.length - 1 && <span style={{ color: "#C8C2B4", fontSize: 12 }}>·</span>}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* BODY */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-24" itemScope itemType="https://schema.org/Article">
        <meta itemProp="headline" content="D2C Startups India 2026 — Complete Sector Guide" />
        <meta itemProp="datePublished" content="2026-03-10" />
        <meta itemProp="author" content="UpForge Editorial" />

        {/* Hero image */}
        <figure className="fu fu1" style={{ margin: "clamp(20px,4vw,36px) 0", borderBottom: "1px solid #C8C2B4", paddingBottom: "clamp(20px,4vw,36px)" }}>
          <div style={{ position: "relative", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&q=85"
              alt="Indian consumer shopping online — the 500M online shopper market that D2C brands are building for"
              style={{ width: "100%", height: "clamp(200px,32vw,400px)", objectFit: "cover", display: "block", filter: "sepia(18%) contrast(105%)" }}
              loading="eager"
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(243,239,229,0) 60%, rgba(243,239,229,0.55) 100%)" }} />
          </div>
          <figcaption className="mt-2 italic" style={{ fontSize: 10, color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}>
            India's D2C market reached $100B in 2025. The founders below built brands that 500M+ Indian online shoppers choose over every global alternative they could have picked.
          </figcaption>
        </figure>

        {/* Intro */}
        <section className="fu fu2" style={{ maxWidth: 780, marginBottom: "clamp(24px,4vw,40px)", paddingBottom: "clamp(20px,4vw,36px)", borderBottom: "1px solid #C8C2B4" }} itemProp="articleBody">
          <p className="dropcap leading-[1.88]" style={{ fontSize: "clamp(14px,1.6vw,16px)", marginBottom: 16, color: "#2C2010", fontFamily: "'Georgia','Times New Roman',serif" }}>
            The most honest insight about India's D2C sector is this: the brands that won did not win because they were digitally sophisticated. They won because their founders understood the Indian consumer's relationship with trust, identity, and price — and built for that specific human truth. Nykaa's curated authenticity. Mamaearth's personal founding story. boAt's cultural identity play. Lenskart's uncopiable vertical moat. Each of these is a distinct thesis about what an Indian consumer will pay for, and why.
          </p>
          <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.88, color: "#2C2010", fontFamily: "'Georgia','Times New Roman',serif" }}>
            The brands profiled below represent the full maturity spectrum of Indian D2C — from listed companies (Nykaa, Mamaearth) to the next wave (Sugar Cosmetics, boAt's IPO pipeline) and the challenger playbooks (Bewakoof's cultural moat). Study each one for the specific strategic decision that explains their success — not their funding amount or their year of founding.
          </p>
        </section>

        {/* Why strip */}
        <div className="fu fu2 grid sm:grid-cols-3" style={{ marginBottom: "clamp(28px,4vw,48px)", border: "2px solid #1A1208", gap: "1.5px", background: "#1A1208" }}>
          {[
            ["Trust is the Product", "Every winning D2C brand in India was built on a specific, verifiable truth that earned trust before it earned revenue. Authenticity is not a brand attribute — it is the competitive moat."],
            ["Offline is the Second Chapter", "The D2C brands that survived the 2022–23 correction are all opening physical stores. The customer who trusts a brand offline becomes the most loyal digital repeat-buyer."],
            ["Tier-2 India Is the Market", "boAt's #1 market share and Bewakoof's 10M customers are largely Tier-2 phenomena. The D2C brand that prices for Bandra is missing the actual market."],
          ].map(([t, d]) => (
            <div key={String(t)} style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,24px)", borderTop: "3px solid #C026D3" }}>
              <p className="pf" style={{ fontSize: 13.5, fontWeight: 700, color: "#1A1208", margin: "0 0 8px", lineHeight: 1.4 }}>{t}</p>
              <p style={{ fontSize: 11.5, color: "#5A4A30", margin: 0, fontFamily: "system-ui,sans-serif", lineHeight: 1.65 }}>{d}</p>
            </div>
          ))}
        </div>

        {/* Ecosystem stats */}
        <div className="fu fu2 grid grid-cols-2 sm:grid-cols-4" style={{ border: "2px solid #1A1208", background: "#1A1208", gap: "1.5px", marginBottom: "clamp(28px,4vw,48px)" }}>
          {ECOSYSTEM_STATS.map((s, i) => (
            <div key={i} style={{ background: "#FDFCF9", padding: "clamp(12px,2.5vw,20px)" }}>
              <p className="pf font-black leading-none" style={{ fontSize: "clamp(1.6rem,3vw,2.4rem)", color: "#C026D3", marginBottom: 6 }}>{s.v}</p>
              <p className="text-[9px] uppercase tracking-[0.18em]" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif", margin: 0 }}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* Section rule */}
        <div className="fu fu3 flex items-center gap-3 mb-8" style={{ paddingTop: "clamp(16px,3vw,24px)", borderTop: "2px solid #1A1208" }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#B45309", letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§01</span>
          <h2 className="pf" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0 }}>India's Top D2C Brands — Profiles & Playbooks</h2>
          <div className="hero-rule flex-1 h-px" style={{ background: "#C8C2B4" }} />
        </div>

        {/* Company profiles */}
        <div className="fu fu3 space-y-0" role="list">
          {COMPANIES.map((c, i) => (
            <div key={i} className="company-card" role="listitem" itemScope itemType="https://schema.org/Organization">
              <meta itemProp="name" content={c.name} />
              <meta itemProp="foundingDate" content={c.founded} />

              <div className="card-inner company-grid grid" style={{ gridTemplateColumns: "1fr clamp(160px,20%,200px)", border: "1.5px solid #1A1208", marginBottom: "1.5px", background: "#1A1208", gap: "1.5px" }}>
                <div style={{ background: "#FDFCF9", padding: "clamp(16px,3vw,28px)", order: i % 2 === 0 ? 0 : 1 }}>
                  <div className="flex flex-wrap items-baseline gap-3 mb-1" style={{ paddingBottom: 10, borderBottom: `2px solid ${c.accent}` }}>
                    <h3 className="pf" style={{ fontSize: "clamp(1.2rem,2.5vw,1.55rem)", fontWeight: 900, color: "#1A1208", margin: 0, lineHeight: 1.1 }}>{c.name}</h3>
                    <span className="tag-pill" style={{ color: c.accent, borderColor: c.accent }}>{c.sector}</span>
                    <span style={{ fontSize: 10, color: "#AAA", fontFamily: "system-ui,sans-serif" }}>{c.city} · Est. {c.founded}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-2 mt-3 mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
                    <span style={{ fontSize: 9, color: "#AAA", textTransform: "uppercase", letterSpacing: ".12em" }}>Founder</span>
                    <span style={{ color: "#C8C2B4" }}>·</span>
                    <span style={{ fontSize: 11, fontWeight: 700, color: "#1A1208" }}>{c.founder}</span>
                    {c.tags.map(t => (
                      <span key={t} style={{ fontSize: 8, color: c.accent, border: `1px solid ${c.accentBorder}`, background: c.accentBg, padding: "1px 7px", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", fontFamily: "system-ui,sans-serif" }}>{t}</span>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#AAA", fontFamily: "system-ui,sans-serif", marginBottom: 5 }}>Why It Matters</p>
                      <p style={{ fontSize: 12.5, color: "#5A4A30", lineHeight: 1.7, marginBottom: 14, fontFamily: "'Georgia',serif" }}>{c.why}</p>
                      <blockquote style={{ background: "#F3EFE5", borderLeft: `3px solid ${c.accent}`, padding: "10px 14px", margin: 0 }}>
                        <p className="pf italic" style={{ fontSize: 13, color: "#2C2010", margin: 0, lineHeight: 1.68 }}>"{c.quote}"</p>
                        <p style={{ fontSize: 9, color: "#AAA", fontFamily: "system-ui,sans-serif", margin: "6px 0 0", textTransform: "uppercase", letterSpacing: ".14em" }}>— {c.founder}, {c.name}</p>
                      </blockquote>
                    </div>
                    <div>
                      <div style={{ background: "#FEF3C7", border: "1px solid #FDE68A", padding: "10px 12px", marginBottom: 12 }}>
                        <p style={{ fontSize: 9, fontWeight: 700, color: "#92400E", fontFamily: "system-ui,sans-serif", textTransform: "uppercase", letterSpacing: ".14em", margin: "0 0 5px" }}>Key Insight</p>
                        <p style={{ fontSize: 12, color: "#78350F", margin: 0, fontFamily: "system-ui,sans-serif", lineHeight: 1.65 }}>{c.keyInsight}</p>
                      </div>
                      <div style={{ marginBottom: 14 }}>
                        <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase", color: "#AAA", fontFamily: "system-ui,sans-serif", marginBottom: 4 }}>Core Philosophy</p>
                        <p className="pf italic" style={{ fontSize: 13, color: c.accent, fontWeight: 700, margin: 0, lineHeight: 1.4 }}>{c.philosophy}</p>
                      </div>
                      <div className="grid grid-cols-2" style={{ border: "1px solid #D8D2C4", marginBottom: 14 }}>
                        {[{ l: "Valuation", v: c.valuation }, { l: "Founded", v: c.founded }].map((s, si) => (
                          <div key={si} style={{ padding: "8px 10px", borderRight: si === 0 ? "1px solid #D8D2C4" : "none" }}>
                            <p style={{ fontSize: 8, color: "#AAA", fontFamily: "system-ui,sans-serif", textTransform: "uppercase", letterSpacing: ".12em", margin: "0 0 2px" }}>{s.l}</p>
                            <p className="pf" style={{ fontSize: "1.1rem", fontWeight: 900, color: "#1A1208", margin: 0, lineHeight: 1 }}>{s.v}</p>
                          </div>
                        ))}
                      </div>
                      <Link href={`/startup/${c.slug}`} className="inline-flex items-center gap-1.5" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", color: c.accent, textDecoration: "none", fontFamily: "system-ui,sans-serif", borderBottom: `1px solid ${c.accentBorder}`, paddingBottom: 1 }}>
                        View {c.name} Profile <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div style={{ background: c.accent, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", textAlign: "center", padding: "clamp(16px,3vw,28px) clamp(10px,2vw,18px)", order: i % 2 === 0 ? 1 : 0, position: "relative", overflow: "hidden", minHeight: 180 }}>
                  <div style={{ width: "100%", flex: 1, position: "relative", marginBottom: 12, overflow: "hidden" }}>
                    <img
                      src={c.imgSrc}
                      alt={`${c.founder}, ${c.name} founder`}
                      style={{ width: "100%", height: "clamp(100px,15vw,180px)", objectFit: "cover", objectPosition: "top", display: "block", opacity: 0.88, filter: "contrast(108%) saturate(85%)" }}
                      onError={(e) => {
                        const t = e.target as HTMLImageElement
                        t.style.display = "none"
                        const fb = t.nextSibling as HTMLElement
                        if (fb) fb.style.display = "flex"
                      }}
                    />
                    <div style={{ display: "none", width: "100%", height: "clamp(100px,15vw,180px)", alignItems: "center", justifyContent: "center", background: "rgba(255,255,255,.15)", fontSize: "2rem", fontFamily: "Georgia,serif", fontWeight: 900, color: "#fff" }}>{c.initials}</div>
                  </div>
                  <div>
                    <p className="pf font-black" style={{ fontSize: "clamp(.95rem,1.8vw,1.2rem)", color: "#FDFCF9", lineHeight: 1.15, margin: "0 0 3px" }}>{c.name}</p>
                    <p style={{ fontSize: 10, color: "rgba(255,255,255,.65)", margin: "0 0 5px", fontFamily: "system-ui,sans-serif" }}>{c.founder}</p>
                    <p style={{ fontSize: 9, color: "rgba(255,255,255,.45)", fontFamily: "system-ui,sans-serif", fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>{c.funding}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Traits */}
        <div className="fu fu4 flex items-center gap-3 mb-6 mt-14" style={{ paddingTop: "clamp(16px,3vw,24px)", borderTop: "2px solid #1A1208" }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#B45309", letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§02</span>
          <h2 className="pf" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0 }}>6 Patterns Every Winning Indian D2C Brand Shares</h2>
          <div className="hero-rule flex-1 h-px" style={{ background: "#C8C2B4" }} />
        </div>
        <div className="fu fu4 grid sm:grid-cols-2 lg:grid-cols-3" style={{ border: "1.5px solid #1A1208", background: "#1A1208", gap: "1.5px", marginBottom: "clamp(28px,4vw,48px)" }}>
          {TRAITS.map(({ no, trait, desc }) => (
            <div key={no} style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,22px)" }}>
              <div className="flex items-baseline gap-2.5" style={{ marginBottom: 8 }}>
                <span className="pf" style={{ fontSize: "1.6rem", fontWeight: 900, color: "#E8C547", lineHeight: 1, flexShrink: 0 }}>{no}</span>
                <p className="pf" style={{ fontSize: 13, fontWeight: 700, color: "#1A1208", margin: 0, lineHeight: 1.3 }}>{trait}</p>
              </div>
              <p style={{ fontSize: 11.5, color: "#5A4A30", margin: 0, fontFamily: "system-ui,sans-serif", lineHeight: 1.68 }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Trends */}
        <div className="fu fu4 flex items-center gap-3 mb-6" style={{ paddingTop: "clamp(16px,3vw,24px)", borderTop: "2px solid #1A1208" }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#B45309", letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§03</span>
          <h2 className="pf" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0 }}>Key Trends Shaping India's D2C Sector in 2026</h2>
          <div className="hero-rule flex-1 h-px" style={{ background: "#C8C2B4" }} />
        </div>
        <div className="fu fu4 space-y-[1.5px]" style={{ border: "1.5px solid #1A1208", background: "#1A1208", marginBottom: "clamp(28px,4vw,48px)" }}>
          {TRENDS.map(t => (
            <div key={t.num} style={{ background: "#FDFCF9", padding: "clamp(14px,2.5vw,22px)", display: "flex", gap: 16 }}>
              <span style={{ fontSize: 11, color: "#C8C2B4", fontFamily: "system-ui,sans-serif", fontWeight: 700, flexShrink: 0, marginTop: 2 }}>{t.num}</span>
              <div>
                <h3 className="pf font-bold" style={{ fontSize: 14, color: "#1A1208", marginBottom: 6 }}>{t.title}</h3>
                <p style={{ fontSize: 12.5, color: "#5A4A30", lineHeight: 1.72, fontFamily: "system-ui,sans-serif", margin: 0 }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Editorial note */}
        <div className="fu fu5" style={{ background: "#1A1208", padding: "clamp(20px,4vw,40px)", margin: "clamp(24px,4vw,40px) 0" }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: "#E8C547", fontFamily: "system-ui,sans-serif", margin: "0 0 14px" }}>✦ UpForge Editorial Note</p>
          <p className="pf italic" style={{ fontSize: "clamp(1rem,2vw,1.22rem)", color: "rgba(253,252,249,.88)", lineHeight: 1.78, margin: 0 }}>
            "The most important thing that India's best D2C founders understood is that they are not selling a product — they are selling a relationship with a specific truth. Nayar sold authenticated beauty. Alagh sold safety. Gupta sold cultural belonging. Singh sold Indian identity in every formulation. The founders who articulate that specific truth clearly — and deliver against it consistently — build the only kind of D2C brand that survives past the first VC funding cycle."
          </p>
          <div className="flex items-center gap-2 mt-5" style={{ borderTop: "1px solid rgba(255,255,255,.12)", paddingTop: 14 }}>
            <span style={{ color: "#E8C547", fontSize: 12 }}>❧</span>
            <p style={{ fontSize: 9, color: "rgba(255,255,255,.35)", fontFamily: "system-ui,sans-serif", textTransform: "uppercase", letterSpacing: ".18em", margin: 0 }}>UpForge Editorial · March 2026</p>
          </div>
        </div>

        {/* Pull quote */}
        <div className="fu fu5 text-center py-8 my-8" style={{ borderTop: "3px solid #1A1208", borderBottom: "1px solid #C8C2B4" }}>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 18, marginBottom: 12 }}>❧</span>
          <blockquote className="pf italic max-w-2xl mx-auto" style={{ fontSize: "clamp(15px,2.2vw,21px)", color: "#1A1208", lineHeight: 1.7 }}>
            "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop."
          </blockquote>
          <span style={{ display: "block", color: "#C8C2B4", fontSize: 18, margin: "12px 0 8px" }}>❧</span>
          <p style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: ".24em", color: "#AAA", fontFamily: "system-ui,sans-serif" }}>— Falguni Nayar, Founder of Nykaa</p>
        </div>

        {/* FAQ */}
        <div className="fu fu5 flex items-center gap-3 mb-6" style={{ paddingTop: "clamp(16px,3vw,24px)", borderTop: "2px solid #1A1208" }}>
          <span style={{ fontSize: 9, fontWeight: 800, color: "#B45309", letterSpacing: ".2em", fontFamily: "system-ui,sans-serif" }}>§04</span>
          <h2 className="pf" style={{ fontSize: "clamp(1.2rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0 }}>Frequently Asked Questions</h2>
          <div className="hero-rule flex-1 h-px" style={{ background: "#C8C2B4" }} />
        </div>
        <div className="fu fu5 space-y-[1.5px]" style={{ border: "1.5px solid #1A1208", background: "#1A1208", marginBottom: "clamp(28px,4vw,48px)" }}>
          {FAQS.map((f, i) => (
            <details key={i} style={{ background: "#FDFCF9" }}>
              <summary className="flex items-center justify-between cursor-pointer" style={{ padding: "clamp(12px,2vw,18px) clamp(14px,2.5vw,22px)", listStyle: "none" }}>
                <span className="pf font-bold" style={{ fontSize: 13.5, color: "#1A1208" }}>{f.q}</span>
                <ChevronRight className="faq-chev w-4 h-4 flex-shrink-0 ml-3" style={{ color: "#C8C2B4" }} />
              </summary>
              <div style={{ padding: "0 clamp(14px,2.5vw,22px) clamp(12px,2vw,18px)", borderTop: "1px solid #EDE9DF" }}>
                <p style={{ fontSize: 12.5, color: "#5A4A30", lineHeight: 1.72, paddingTop: 12, fontFamily: "system-ui,sans-serif", margin: 0 }}>{f.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* Internal links */}
        <nav className="fu fu5 py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".28em", textTransform: "uppercase", color: "#AAA", fontFamily: "system-ui,sans-serif", marginBottom: 16 }}>Continue Exploring</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {[
              { label: "Indian Startups Guide",     href: "/indian-startups" },
              { label: "Fintech Startups India",    href: "/fintech-startups" },
              { label: "EdTech Startups India",     href: "/edtech-startups" },
              { label: "Indian Unicorns 2026",      href: "/indian-unicorns" },
              { label: "Top AI Startups India",     href: "/top-ai-startups" },
              { label: "Founder Chronicles",        href: "/" },
              { label: "Startup Registry India",   href: "/startup" },
              { label: "Submit Your Startup",       href: "/submit" },
            ].map(l => (
              <Link key={l.href} href={l.href} className="flex items-center gap-1.5 transition-all nbtn" style={{ padding: "10px 12px", background: "white", border: "1px solid #D8D2C4", textDecoration: "none", color: "#1A1208", fontSize: 10.5, fontFamily: "system-ui,sans-serif", fontWeight: 600 }}>
                <ChevronRight className="w-3 h-3 flex-shrink-0" />
                <span>{l.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* CTA */}
        <div className="fu fu6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-8 p-7 sm:p-10" style={{ background: "#1A1208" }}>
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span style={{ fontSize: 9, color: "rgba(255,255,255,.3)", fontFamily: "system-ui,sans-serif", textTransform: "uppercase", letterSpacing: ".22em" }}>UpForge Registry</span>
            </div>
            <p className="pf font-bold text-white leading-snug mb-2" style={{ fontSize: "clamp(1rem,2.5vw,1.5rem)" }}>Your D2C brand belongs in this list.</p>
            <p style={{ fontSize: 12.5, color: "rgba(255,255,255,.5)", maxWidth: 380, fontFamily: "system-ui,sans-serif", lineHeight: 1.65 }}>Get independently verified and listed in India's most trusted startup registry. Free forever. Google-indexed. Trusted by founders and investors.</p>
          </div>
          <Link href="/submit" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 font-bold tracking-wide hover:opacity-90 transition-opacity" style={{ background: "#E8C547", color: "#111", fontSize: 11, fontFamily: "system-ui,sans-serif", textDecoration: "none" }}>
            List Your Startup — Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <footer className="mt-6">
          <p style={{ fontSize: 9.5, color: "#BBB0A0", lineHeight: 1.65, fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: 14 }}>
            * Profile details sourced from Tracxn, Inc42, Redseer, Forbes India, and company disclosures as of March 2026. UpForge is an independent registry — no paid placements, no sponsored rankings. Valuations are approximate and reflect latest available public data.
          </p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Founder Chronicles", h: "/" }, { l: "Indian Startups", h: "/indian-startups" },
                { l: "Fintech Startups", h: "/fintech-startups" }, { l: "EdTech Startups", h: "/edtech-startups" },
                { l: "Startup Registry", h: "/startup" }, { l: "Submit Startup", h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}><Link href={lnk.h} className="text-[9px] hover:text-[#1A1208] uppercase tracking-wider transition-colors" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
