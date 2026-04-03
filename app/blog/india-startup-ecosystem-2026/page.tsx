// app/blog/india-startup-ecosystem-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Target keywords: "india startup ecosystem 2026", "indian startup ecosystem overview",
//                  "india startup funding 2026", "india third largest startup ecosystem",
//                  "startup india dpiit 2026", "indian startup hubs 2026",
//                  "india unicorn count 2026", "indian vc funding trends"
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link"
import type { Metadata } from "next"
import {
  buildBlogMetadata,
  buildBlogJsonLd,
  SAFE_BLOG_FOOTER_LINKS,
  ALL_BLOG_SLUGS,
} from "../_config/blog.config"

const POST = {
  slug:          "india-startup-ecosystem-2026",
  title:         "India Startup Ecosystem 2026: 140,000 Startups, 111 Unicorns, $340B+ Value — Complete Overview",
  description:   "India's startup ecosystem in 2026 is the world's third-largest with 140,000+ DPIIT-registered startups, 111 unicorns valued at $340B+, and $42B+ in cumulative funding. Deep-dive into sectors (FinTech, SaaS, AI, D2C), hubs (Bengaluru, Mumbai, Delhi-NCR, Hyderabad), government policies (Startup India, India Stack), and what 2026-2030 looks like for Indian founders and investors.",
  keywords: [
    "india startup ecosystem 2026",
    "indian startup ecosystem overview",
    "india startup funding 2026",
    "india third largest startup ecosystem",
    "startup india dpiit 2026",
    "indian startup hubs 2026",
    "india unicorn count 2026",
    "indian vc funding trends",
    "startup india policy 2026",
    "india stack startups",
    "bengaluru startup hub",
    "indian fintech unicorns",
    "indian saas companies",
    "india ai startups 2026",
    "d2c brands india",
    "flipkart zomato phonepe swiggy",
    "freshworks postman chargebee",
    "physicswallah mamaearth boat lenskart",
    "krutrim sarvam ai",
    "gaganyaan isro startups",
  ],
  datePublished: "2026-03-01",
  dateModified:  "2026-04-03",
  readTime:      "12 min",
  category:      "Ecosystem Analysis",
  heroImage:     "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  heroImageAlt:  "India Startup Ecosystem 2026 — 140,000 startups, 111 unicorns, $340B+ valuation",
  wordCount:     3200,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ─────────────────────────────────────────────────────────────────────────────
// FAST FACTS TABLE — Enhanced for SEO (rich snippet ready)
// ─────────────────────────────────────────────────────────────────────────────
const FAST_FACTS = [
  { label: "Total DPIIT-Registered Startups", value: "140,000+ (as of 2026)" },
  { label: "Monthly New Startup Registrations", value: "~1,300" },
  { label: "Global Ranking", value: "#3 (behind US & China)" },
  { label: "Total Unicorns", value: "111" },
  { label: "Combined Unicorn Valuation", value: "$340B+" },
  { label: "Decacorns ($10B+ valuation)", value: "12 (Flipkart, Zomato, PhonePe, Swiggy, etc.)" },
  { label: "Peak Annual Funding (2021)", value: "$42B" },
  { label: "2025 Funding (estimated)", value: "$18–22B" },
  { label: "Largest Sector by Unicorns", value: "FinTech (22 unicorns)" },
  { label: "Government Fund of Funds", value: "₹10,000Cr (~$1.2B) via SIDBI" },
  { label: "Tax Holiday for DPIIT Startups", value: "3 years" },
  { label: "Engineering Graduates per Year", value: "1.5 million" },
  { label: "Projected Ecosystem Value by 2030", value: "$500B+" },
]

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS DATA — Enhanced with richer content and SEO optimization
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    num:     "01",
    title:   "The Scale of India's Startup Revolution: 140,000+ Startups and Counting",
    keyword: "India Startup Ecosystem Size 2026",
    img:     "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&q=85&auto=format",
    imgAlt:  "Bengaluru India startup ecosystem 2026 scale",
    body: `India's startup ecosystem did not happen overnight. It was built across two decades of infrastructure investment, talent creation, and policy reform — culminating in a 2026 landscape where 140,000+ DPIIT-registered startups compete across every sector of the economy.

To understand the scale: India adds approximately 1,300 new startups every single month. The country now sits at #3 globally in startup density, behind only the United States and China. Unlike the previous two positions on that list, India's ecosystem is still in its early-growth phase — the infrastructure improvements of the next decade will be more consequential than those of the last.

The combined valuation of India's startup ecosystem exceeds $340 billion, with 111 unicorns and 12 decacorns. What makes this particularly remarkable is the rate of acceleration: it took India nearly a decade to produce its first 10 unicorns, but the most recent 10 were added in under six months. The compounding effect is real, and it is accelerating.

For context, India's startup economy now represents approximately 10% of the country's GDP — up from less than 2% a decade ago. By 2030, that figure is projected to reach 20-25%, making the startup ecosystem one of the largest single contributors to India's economic growth.`,
    stat: { val: "140,000+", label: "DPIIT-Registered Startups in India — #3 Globally" },
    insight: "India is not catching up to Silicon Valley. It is building something different — and potentially more durable. The combination of population scale, digital infrastructure, and engineering talent exists nowhere else on earth.",
  },
  {
    num:     "02",
    title:   "India's Unicorn Economy: 111 Unicorns, $340B+ in Combined Value",
    keyword: "Indian Unicorns 2026 Count Valuation",
    img:     "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85&auto=format",
    imgAlt:  "India unicorn growth chart 2026 — 111 unicorns $340B valuation",
    body: `India's unicorn count reached 111 in 2026 — representing $340B+ in combined valuation. Twelve of those have crossed the $10B threshold to become decacorns, including Flipkart (Walmart-owned, $38B valuation), Zomato ($22B), PhonePe ($18B), and Swiggy ($15B).

The 2021 super-cycle that produced 44 unicorns in a single year — including Oxyzo, Ola Electric, Unacademy, and CRED — was followed by a necessary correction. Funding dropped from $42B in 2021 to $8.6B in 2023, as global venture capital pulled back and Indian public markets corrected. But what emerged from that correction is an ecosystem with stronger fundamentals: better unit economics, more capital-efficient growth, and a generation of founders who have been tested by difficulty and emerged with more discipline.

By 2025, funding had recovered to an estimated $18-22B annually — still below the 2021 peak, but with higher-quality deals and more sustainable valuations. The Indian IPO market has matured significantly, with Freshworks (NASDAQ listing), Zomato, Nykaa, and Mamaearth demonstrating that Indian startups can access public markets successfully. The exit ecosystem that was missing five years ago is now functioning, giving investors confidence to deploy capital into early-stage companies.`,
    stat: { val: "111", label: "Indian Unicorns — #3 Globally Behind US & China — $340B+ Combined Value" },
    insight: "The correction of 2022–2023 was not the end of the India story. It was the editing phase — cutting what didn't work so that what remained could grow stronger.",
  },
  {
    num:     "03",
    title:   "The Sectors Leading India's Startup Revolution: FinTech, SaaS, AI, D2C, EdTech",
    keyword: "India Startup Sectors FinTech SaaS AI D2C EdTech 2026",
    img:     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&auto=format",
    imgAlt:  "India startup sectors fintech saas ai d2c edtech 2026",
    body: `No single sector defines India's startup story. The ecosystem's breadth is its greatest strength, with at least five major sectors producing unicorns at scale.

FinTech leads with 22 unicorns — including PhonePe, Razorpay, CRED, Groww, BharatPe, Oxyzo, and slice — built on the India Stack infrastructure of UPI, Aadhaar, and Account Aggregator that the government quietly assembled over a decade. UPI alone processes over 15 billion transactions per month, creating an unprecedented digital payments foundation that FinTech startups leverage for everything from lending to wealth management.

SaaS has produced global champions like Freshworks (NASDAQ-listed, $6B market cap), Postman ($5.6B valuation), Chargebee ($3.5B), and BrowserStack ($4B) — companies that compete not just in India but on every continent, with customer bases that include Fortune 500 companies. India's SaaS sector is projected to reach $50B in annual recurring revenue by 2030.

EdTech exploded during COVID, consolidated painfully in 2022-2023, and is now emerging with a more sustainable model. PhysicsWallah's ₹999/year JEE course — serving over 10 million students — is the clearest proof that radical affordability, not premium pricing, is the winning strategy. Unacademy, upGrad, and Eruditus have pivoted to hybrid models that combine online and offline delivery.

D2C brands like Mamaearth (Honasa Consumer, listed at $2B+), boAt ($1.5B+), Lenskart ($4.5B), and The Whole Truth have demonstrated that Indian consumer companies can build globally competitive brands without a century of distribution advantages. The D2C sector now includes over 800 brands across beauty, fashion, food, and wellness.

The newest and fastest-growing sector is AI — with Krutrim (Ola's AI venture, valued at $1B within months), Sarvam AI (enterprise LLMs), and a wave of enterprise AI companies positioning India to be not just a consumer of AI tools but a builder of them. India's AI talent pool — estimated at 500,000+ engineers — is among the deepest in the world.`,
    stat: { val: "22", label: "FinTech Unicorns — India's Most Valuable Startup Sector — UPI: 15B+ Monthly Transactions" },
    insight: "The breadth of India's startup ecosystem is its greatest strength — and its biggest differentiator from every previous tech boom. No other country has unicorns in FinTech, SaaS, EdTech, D2C, and AI simultaneously.",
  },
  {
    num:     "04",
    title:   "The Four Startup Hubs: Bengaluru, Mumbai, Delhi-NCR, Hyderabad",
    keyword: "India Startup Hubs Bengaluru Mumbai Delhi Hyderabad 2026",
    img:     "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=1200&q=85&auto=format",
    imgAlt:  "Bengaluru India's Silicon Valley startup hub 2026",
    body: `India's startup activity is concentrated in four metropolitan areas that have developed distinct identities and specializations. Each hub offers different advantages, and where you build determines what you can build.

Bengaluru is India's Silicon Valley — home to 60+ unicorns and the birthplace of Flipkart, Zerodha, Razorpay, Unacademy, Swiggy, Ola, and the country's entire SaaS sector. The city's combination of IIT/IISc talent, a mature VC ecosystem (Accel India, Sequoia Surge, Lightspeed, Peak XV Partners), and a culture of technical ambition makes it the natural centre of India's startup universe. Operating costs are higher than other Indian cities, but the talent density is unmatched.

Mumbai brings financial capital, media, and D2C brand-building expertise — Nykaa, BrowserStack, Zepto, Jupiter, and Dream11 were all built here. The city's proximity to the Bombay Stock Exchange and institutional investors makes it the preferred location for FinTech and consumer companies preparing for IPOs. Delhi-NCR has a commerce and logistics strength — Zomato, OYO, boAt, Lenskart, and Snapdeal all chose the capital region for its access to distribution networks, government proximity, and lower real estate costs compared to Mumbai.

Hyderabad is the quiet achiever — a growing SaaS and HealthTech hub with significantly lower operating costs than its peers. Microsoft's largest campus outside the US is in Hyderabad, and the city has produced unicorns like Darwinbox and Urban Company. The Telangana government's proactive startup policies — including the T-Hub incubator, one of Asia's largest — have made Hyderabad an increasingly attractive destination for founders seeking cost advantage without sacrificing talent quality.`,
    stat: { val: "60+", label: "Unicorns from Bengaluru — India's #1 Startup City — 40% of National Total" },
    insight: "India's startup hubs are specialized, not interchangeable. Where you build determines what you can build. A D2C brand belongs in Mumbai. An AI SaaS company belongs in Bengaluru. A logistics startup belongs in Delhi-NCR.",
  },
  {
    num:     "05",
    title:   "Government Policy: Startup India, DPIIT Recognition, and the India Stack",
    keyword: "Startup India Policy DPIIT Recognition India Stack 2026",
    img:     "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&q=85&auto=format",
    imgAlt:  "Startup India policy DPIIT recognition India Stack infrastructure",
    body: `The Indian government's Startup India initiative, launched in 2016 and administered through the Department for Promotion of Industry and Internal Trade (DPIIT), has been one of the most consequential policy interventions in the history of the Indian economy.

DPIIT-recognised startups receive a three-year income tax holiday, exemption from capital gains tax on qualifying investments, and access to a ₹10,000 crore Fund of Funds for Startups through SIDBI (Small Industries Development Bank of India). More than 140,000 startups have received DPIIT recognition — a number that has grown 15x since 2016. The recognition process has been streamlined to be entirely digital, with most applications processed within 72 hours.

The India Stack — UPI, Aadhaar, DigiLocker, ONDC (Open Network for Digital Commerce), Account Aggregator — represents the most ambitious government-built technology infrastructure programme in history. It is the foundation on which every Indian FinTech, HealthTech, and commerce startup is built. Without India Stack, there is no PhonePe. Without Aadhaar, there is no instant KYC. Without UPI, there is no Razorpay. The government built the pipes. Startups built the water.

ONDC, launched in 2022, is the newest and potentially most transformative layer — an open protocol that aims to democratize e-commerce by unbundling buyer apps from seller apps. Early adopters include PhonePe, Paytm, and MagicPin, and ONDC has already processed over 10 million transactions. For D2C brands, ONDC offers an alternative to the Amazon-Flipkart duopoly, with significantly lower commission rates.

The Production Linked Incentive (PLI) schemes across electronics, pharmaceuticals, and textiles have also created startup opportunities in manufacturing and supply chain optimization — areas traditionally dominated by large incumbents.`,
    stat: { val: "₹10,000Cr", label: "Government Fund of Funds for Startups (SIDBI) — Plus 3-Year Tax Holiday" },
    insight: "India Stack is the most important piece of startup infrastructure ever built by any government. Full stop. No other country has built digital public goods at this scale and made them accessible to private innovation.",
  },
  {
    num:     "06",
    title:   "The Talent Engine: 1.5 Million Engineers Per Year and the Multiplier Effect",
    keyword: "India Startup Talent Engineering Workforce 2026",
    img:     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format",
    imgAlt:  "India engineering talent startup workforce multiplier effect",
    body: `India produces 1.5 million engineering graduates per year — more than any country on earth. The IIT system (23 institutes), NITs (31 institutes), BITS Pilani (3 campuses), and a network of state engineering colleges create a deep bench of technical talent that gives Indian startups a structural cost and capability advantage over competitors in the US, Europe, or Southeast Asia.

Beyond raw engineering talent, India now has a maturing second generation of startup operators — people who joined Flipkart or Paytm in 2013, left in 2017 to join Series A companies, and are now founding their own businesses with playbooks built from direct experience. This is the Flipkart Mafia (founders like Sujeet Kumar of Udaan, Mekin Maheshwari of Eruditus), the Paytm Mafia, the Razorpay Mafia — each generation of successful companies producing the founders of the next.

The talent multiplier effect is compounding. Every successful unicorn produces dozens of experienced product managers, engineers, and marketing leaders who either join other startups or start their own. And unlike the US, where startup talent is concentrated in San Francisco and New York, India's talent is distributed across four major hubs plus emerging centers like Pune, Ahmedabad, Chennai, and Kochi.

The quality of engineering talent has also improved dramatically. Indian engineers now lead product teams at Google, Microsoft, and Adobe. The CTOs of Stripe, Adobe, and Palo Alto Networks are all Indian. This diaspora effect creates a feedback loop: successful Indian-origin technologists in Silicon Valley invest in and mentor Indian startups, bringing global best practices back to the domestic ecosystem.`,
    stat: { val: "1.5M", label: "Engineering Graduates India Produces Every Year — Largest in the World" },
    insight: "India's talent advantage is not just depth. It is the institutional memory that compounds with every generation of successful startups. The Flipkart Mafia alone has produced over 100 founders.",
  },
  {
    num:     "07",
    title:   "The Road Ahead: What 2026-2030 Looks Like for Indian Startups",
    keyword: "India Startup Future 2026 2030 Predictions",
    img:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85&auto=format",
    imgAlt:  "India startup ecosystem future 2030 predictions AI deep tech",
    body: `The next phase of India's startup ecosystem will be defined by five convergent forces that will shape the landscape through 2030.

First, the maturation of AI-native startups. India's AI talent pool is among the deepest globally, and startups like Krutrim, Sarvam AI, and CoRover are building foundational models trained on Indian languages and contexts. Unlike the first wave of AI startups that wrapped OpenAI APIs, the next wave will build proprietary models optimized for India's unique data environment.

Second, the global expansion of Indian SaaS companies. Freshworks, Postman, and Chargebee have already shown it is possible to build billion-dollar ARR businesses selling to Fortune 500 companies. The next cohort — including Yellow.ai, Haptik, and Whatfix — is targeting $100M+ ARR within three years. India's SaaS sector is projected to reach $50B in annual recurring revenue by 2030.

Third, the D2C brand buildout into offline markets. Mamaearth, boAt, and Lenskart are expanding aggressively into physical retail, recognizing that India's premium consumers still prefer touch-and-feel experiences for high-value purchases. The omni-channel D2C model — online discovery, offline purchase — is becoming the standard.

Fourth, the emergence of deep tech in defence and space. The government's defence indigenization push and ISRO's successful Chandrayaan-3 and Gaganyaan programmes have created a generation of space-tech startups — Agnikul Cosmos, Skyroot Aerospace, Pixxel, Dhruva Space — that are building rockets, satellites, and earth observation platforms. Defence startups like Tonbo Imaging and Zen Technologies are supplying advanced systems to the Indian armed forces.

Fifth, the financialisation of India's 300M+ middle class through wealth management products. Groww, Zerodha, and INDmoney have already disrupted traditional brokerage. The next frontier is holistic financial planning — insurance, tax optimization, retirement planning — delivered through AI-powered platforms.

India's IPO market is maturing. Freshworks (NASDAQ), Zomato, Nykaa, Mamaearth, and Swiggy have all demonstrated that Indian startup companies can access public capital at scale. The pipeline for 2026-2027 includes Ola Electric, PhonePe, Razorpay, and CRED — any of which could be among the largest IPOs in Indian history.

The final frontier is global category leadership. Freshworks and Postman have already shown it is possible. The next decade will tell us whether India can produce not just regional champions but global category leaders in AI, SaaS, and consumer technology. The fundamentals suggest it can. The ambition is clearly there. The only question is execution.`,
    stat: { val: "$500B+", label: "Projected India Startup Ecosystem Value by 2030 — 20-25% of GDP" },
    insight: "India's startup story is not in its third act. It is still in the first. The next decade will determine whether India produces global category leaders or remains a regional powerhouse. The ingredients for both are present.",
  },
]

const RELATED_SLUGS = [
  "top-indian-unicorns-2026",
  "how-to-get-startup-funding-india-2026",
  "best-indian-startup-founders-to-follow-2026",
  "startup-ideas-inspired-by-ind-vs-nz-final-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM MAGAZINE CSS — Clean, editorial, iconic, fully responsive
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  :root {
    --news-bg: #FEFCF8;
    --news-white: #FFFFFF;
    --news-ink: #1A1814;
    --news-ink-light: #3C3730;
    --news-muted: #8A8378;
    --news-border: #E8E3D9;
    --news-accent: #B45309;
    --news-accent-light: #D97706;
    --news-accent-glow: #FEF3C7;
    --news-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif;
    --news-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  }

  .newspaper-container {
    max-width: 1200px;
    margin: 0 auto;
    background: var(--news-bg);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.4; transform: scale(0.9); }
  }

  .fade-up { animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .delay-1 { animation-delay: 0.05s; }
  .delay-2 { animation-delay: 0.1s; }
  .delay-3 { animation-delay: 0.15s; }

  .dropcap::first-letter {
    font-family: var(--news-serif);
    font-size: 3.6rem;
    font-weight: 700;
    float: left;
    line-height: 0.8;
    margin-right: 12px;
    margin-top: 5px;
    color: var(--news-accent);
  }

  .stat-pill {
    background: var(--news-ink);
    padding: 1.2rem 1.8rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 1.5rem 0;
  }

  .insight-box {
    background: var(--news-accent-glow);
    border-left: 4px solid var(--news-accent);
    padding: 1rem 1.5rem;
    font-family: var(--news-serif);
    font-style: italic;
    font-size: 0.95rem;
    color: var(--news-ink-light);
    margin: 1.5rem 0;
  }

  .img-responsive {
    width: 100%;
    height: auto;
    display: block;
    transition: opacity 0.3s ease;
  }

  .section-anchor {
    scroll-margin-top: 40px;
  }

  hr.newspaper-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, var(--news-border), transparent);
    margin: 2.5rem 0;
  }

  .fact-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.85rem 0;
    border-bottom: 1px solid var(--news-border);
    gap: 1rem;
  }
  .fact-row:last-child { border-bottom: none; }

  /* Responsive typography and spacing */
  @media (max-width: 768px) {
    .stat-pill { padding: 0.8rem 1rem; }
    .insight-box { padding: 0.8rem 1rem; font-size: 0.85rem; }
    .dropcap::first-letter { font-size: 2.8rem; margin-right: 8px; }
    .newspaper-container { padding: 0 0.5rem; }
    .fact-row { flex-direction: column; align-items: flex-start; gap: 0.25rem; padding: 0.7rem 0; }
    .fact-row span:first-child { font-size: 0.7rem; letter-spacing: 0.02em; }
    .fact-row span:last-child { font-size: 0.8rem; font-weight: 500; }
  }

  @media (max-width: 480px) {
    .stat-pill { flex-direction: column; align-items: flex-start; gap: 0.5rem; text-align: left; }
    .insight-box { font-size: 0.8rem; padding: 0.7rem 1rem; }
    p, .dropcap { font-size: 0.9rem !important; line-height: 1.6 !important; }
    h2 { font-size: 1.6rem !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT — Pure magazine content, fully responsive, SEO optimized
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogEcosystem() {
  const jsonLd = buildBlogJsonLd(POST)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="newspaper-container" itemScope itemType="https://schema.org/NewsArticle">

        {/* ── TOP DATE LINE / NEWSPAPER STYLE ── */}
        <div className="fade-up" style={{ padding: "2rem 1.5rem 0.5rem 1.5rem", borderBottom: "2px solid var(--news-ink)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", fontFamily: "var(--news-sans)", fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--news-muted)", textTransform: "uppercase" }}>
            <span>VOL. III · ECOSYSTEM REPORT</span>
            <span>FRIDAY, APRIL 3, 2026</span>
            <span>EDITION: INDIA STARTUPS</span>
          </div>
        </div>

        {/* ── HERO HEADLINE ── */}
        <div className="fade-up delay-1" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
          <div className="img-responsive" style={{ marginBottom: "1.5rem", borderRadius: "2px", overflow: "hidden" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} style={{ width: "100%", maxHeight: "480px", objectFit: "cover" }} />
          </div>
          <div style={{ maxWidth: "880px" }}>
            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--news-accent)", textTransform: "uppercase" }}>ECOSYSTEM · INDIA 2026 · DEEP DIVE</span>
            </div>
            <h1 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--news-ink)", marginBottom: "0.8rem" }}>
              India Startup Ecosystem 2026: <span style={{ color: "var(--news-accent)" }}>140,000 Startups, 111 Unicorns, $340B+ Value</span>
            </h1>
            <p style={{ fontFamily: "var(--news-serif)", fontSize: "1.1rem", lineHeight: 1.5, color: "var(--news-ink-light)", fontStyle: "italic", borderLeft: "3px solid var(--news-accent)", paddingLeft: "1rem" }}>
              The complete overview of India's startup revolution — sectors, hubs, funding, government policy, talent, and what 2026-2030 looks like for Indian founders and investors.
            </p>
          </div>
          {/* byline and meta */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.8rem", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--news-border)", fontFamily: "var(--news-sans)", fontSize: "0.7rem", color: "var(--news-muted)" }}>
            <span>📅 PUBLISHED: 1 MARCH 2026</span>
            <span>⏱️ READING TIME: {POST.readTime}</span>
            <span>🦄 UNICORNS: 111</span>
            <span>💰 ECOSYSTEM VALUE: $340B+</span>
          </div>
        </div>

        {/* ── INTRO + TOC — stacked on mobile, side-by-side on desktop ── */}
        <div className="fade-up delay-2" style={{ margin: "2.5rem 1.5rem 0 1.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          {/* Intro text - full width on mobile */}
          <div>
            <div className="dropcap" style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)" }}>
              India's startup ecosystem in 2026 is not a story about a single company, a single founder, or a single moment. It is a story about structural transformation — the quiet accumulation of talent, capital, policy, and infrastructure that has made India the world's third-largest startup hub.
            </div>
            <p style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)", marginTop: "1rem" }}>
              With 140,000+ DPIIT-registered startups, 111 unicorns valued at over $340 billion, and an ecosystem that adds ~1,300 new startups every month, India has moved definitively from "emerging" to "established." This guide covers everything you need to know: the sectors leading the charge (FinTech, SaaS, AI, D2C, EdTech), the four major hubs (Bengaluru, Mumbai, Delhi-NCR, Hyderabad), the government policies that enabled it all (Startup India, India Stack), the talent engine producing 1.5 million engineers per year, and what the next five years look like.
            </p>
            <p style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)", marginTop: "0.5rem" }}>
              UpForge tracks where ambition meets execution. India's startup story is the most important business story of the decade — and this is the complete overview.
            </p>
          </div>
          
          {/* TOC - full width on mobile, styled as a clean card */}
          <div style={{ background: "var(--news-white)", border: "1px solid var(--news-border)", padding: "1rem 1.2rem", width: "100%" }}>
            <div style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--news-accent)", marginBottom: "0.8rem", textTransform: "uppercase" }}>IN THIS REPORT</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "0.5rem" }}>
              {SECTIONS.map((s) => (
                <li key={s.num} style={{ marginBottom: "0.5rem" }}>
                  <a href={`#section-${s.num}`} style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px", fontFamily: "var(--news-sans)", fontSize: "0.7rem", color: "var(--news-ink)" }}>
                    <span style={{ fontWeight: 700, color: "var(--news-accent)", minWidth: "28px" }}>{s.num}</span>
                    <span>{s.title.substring(0, 55)}</span>
                  </a>
                </li>
              ))}
              <li style={{ marginTop: "0.6rem", paddingTop: "0.5rem", borderTop: "1px solid var(--news-border)" }}>
                <a href="#fast-facts" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px", fontFamily: "var(--news-sans)", fontSize: "0.7rem", fontWeight: 600, color: "var(--news-ink)" }}>
                  <span style={{ color: "var(--news-accent)" }}>→</span>
                  <span>Fast Facts: Key Numbers</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── MAIN ARTICLES (vertical newspaper flow) ── */}
        <div style={{ margin: "2rem 1.5rem 0 1.5rem" }}>
          {SECTIONS.map((sec, idx) => (
            <div key={idx} id={`section-${sec.num}`} className="section-anchor" style={{ marginBottom: "3rem" }}>
              {/* full width image */}
              <div style={{ marginBottom: "1.2rem", borderRadius: "2px", overflow: "hidden" }}>
                <img src={sec.img} alt={sec.imgAlt} style={{ width: "100%", maxHeight: "400px", objectFit: "cover" }} className="img-responsive" />
              </div>
              
              <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.5rem", flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--news-accent)" }}>SECTION {sec.num}</span>
                  <span style={{ flex: 1, height: "1px", background: "var(--news-border)" }} />
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.6rem", color: "var(--news-muted)", textTransform: "uppercase" }}>{sec.keyword}</span>
                </div>
                
                <h2 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 700, marginBottom: "1rem", letterSpacing: "-0.01em", color: "var(--news-ink)" }}>
                  {sec.title}
                </h2>
                
                {sec.body.split("\n\n").map((para, pi) => (
                  <p key={pi} className={pi === 0 ? "dropcap" : ""} style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)", marginBottom: "0.9rem" }}>
                    {para}
                  </p>
                ))}
                
                <div className="stat-pill">
                  <span style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, fontFamily: "var(--news-serif)", color: "#FBBF24" }}>{sec.stat.val}</span>
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.7rem", letterSpacing: "0.05em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>{sec.stat.label}</span>
                </div>
                
                <div className="insight-box">
                  <span>✧ {sec.insight}</span>
                </div>
              </div>
              <hr className="newspaper-rule" />
            </div>
          ))}
        </div>

        {/* ── FAST FACTS TABLE ── */}
        <div id="fast-facts" style={{ margin: "0 1.5rem 2rem 1.5rem" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--news-accent)", marginBottom: "0.5rem", textTransform: "uppercase" }}>⚡ DATA SNAPSHOT</div>
            <h2 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, marginBottom: "1rem" }}>India Startup Ecosystem 2026: Key Numbers</h2>
            <div style={{ background: "var(--news-white)", border: "1px solid var(--news-border)", padding: "0 1.5rem" }}>
              {FAST_FACTS.map((item, i) => (
                <div key={i} className="fact-row">
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.8rem", fontWeight: 600, color: "var(--news-ink)" }}>{item.label}</span>
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.8rem", color: "var(--news-ink-light)" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RELATED ARTICLES (clean card grid) ── */}
        <div style={{ margin: "2rem 1.5rem 2.5rem 1.5rem" }}>
          <hr className="newspaper-rule" />
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--news-accent)", marginBottom: "0.5rem", textTransform: "uppercase" }}>FURTHER READING</div>
            <h2 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(1.2rem, 4vw, 1.5rem)", fontWeight: 700, marginBottom: "1.2rem" }}>From the UpForge Archive</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/blog/${r.slug}`} style={{ textDecoration: "none", background: "var(--news-white)", border: "1px solid var(--news-border)", padding: "1rem", borderRadius: "2px", transition: "all 0.2s", display: "block" }}>
                  <div style={{ fontFamily: "var(--news-serif)", fontSize: "1.8rem", fontWeight: 700, color: "rgba(180,83,9,0.1)" }}>0{i+1}</div>
                  <h3 style={{ fontFamily: "var(--news-serif)", fontSize: "0.9rem", fontWeight: 700, marginTop: "0.5rem", color: "var(--news-ink)" }}>{r.title}</h3>
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.6rem", color: "var(--news-accent)", marginTop: "0.5rem", display: "inline-block", letterSpacing: "0.05em" }}>READ MORE →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── FOOTER NAV ── */}
        <nav aria-label="Explore UpForge" style={{ padding: "1rem 1.5rem 2rem 1.5rem", borderTop: "1px solid var(--news-border)" }}>
          <ul style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1.5rem", listStyle: "none", margin: 0, padding: 0 }}>
            {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
              <li key={lnk.h}>
                <Link href={lnk.h} style={{ fontFamily: "var(--news-sans)", fontSize: "0.7rem", color: "var(--news-muted)", textTransform: "uppercase", letterSpacing: "0.05em", textDecoration: "none" }}>
                  {lnk.l}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </article>
    </>
  )
}
