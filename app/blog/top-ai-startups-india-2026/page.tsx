// app/blog/top-ai-startups-india-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Pattern: identical to app/blog/india-startup-ecosystem-2026/page.tsx
// Same SECTIONS data structure, same blog-card layout, same CSS, same imports.
// Target keywords: "AI startups in India", "best AI startups India 2026",
//                  "Indian AI companies list", "Sarvam AI", "Krutrim AI"
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
  slug:          "top-ai-startups-india-2026",
  title:         "Top AI Startups in India (2026 Updated List)",
  description:   "Discover the best AI startups in India in 2026 — from Sarvam AI and Krutrim to enterprise AI, healthcare AI, and agri AI. Profiles, founders, funding, and why India is emerging as a global AI powerhouse.",
  keywords: [
    "AI startups in India",
    "best AI startups India 2026",
    "Indian AI companies list",
    "top artificial intelligence startups India",
    "Sarvam AI India",
    "Krutrim AI startup",
    "India AI ecosystem 2026",
    "Indian AI unicorns",
    "AI ML startups Bengaluru",
    "India sovereign AI",
    "generative AI India startups",
    "Indian deep tech AI companies",
  ],
  datePublished: "2026-03-01",
  dateModified:  "2026-03-18",
  readTime:      "11 min",
  category:      "AI & Deep Tech",
  heroImage:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=85&auto=format",
  heroImageAlt:  "Top AI Startups in India 2026 — Complete Guide by UpForge",
  wordCount:     3200,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS — 8 editorial cards, alternating image sides (identical pattern)
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    num: "01",
    title: "Why India Is Becoming a Global AI Force",
    keyword: "India AI Ecosystem 2026",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
    imgAlt: "AI technology India 2026",
    body: `India's AI story in 2026 is unlike any previous technology wave. For the first time, India is not just consuming technology built elsewhere — it is building it. The country has a unique convergence of ingredients that make it one of the most important AI markets in the world: 1.4 billion people generating data at scale, 1.5 million engineering graduates per year, government-backed AI infrastructure through the IndiaAI Mission, and a generation of founders who have been shaped by India's specific, complex problems.

The numbers reflect the momentum. India now has over 3,000 active AI startups, up from fewer than 500 five years ago. Government AI compute investment crossed ₹10,000 crore in 2025 under the IndiaAI Mission. And India has already produced its first AI unicorn — Krutrim — in record time. The conditions for a genuine Indian AI ecosystem are not just present. They are compounding.`,
    stat: { val: "3,000+", label: "Active AI Startups in India as of 2026" },
    insight: "India is not building Indian versions of American AI tools. It is solving problems that American AI tools were never designed to solve.",
    internal: null,
  },
  {
    num: "02",
    title: "Sarvam AI — India's Sovereign Language Model",
    keyword: "Sarvam AI India LLM Startup",
    img: "https://static.businessworld.in/sarvam_20250427233307_original_image_44.webp",
    imgAlt: "Sarvam AI founders Vivek Raghavan India sovereign LLM",
    body: `Sarvam AI is the most consequential AI startup in India today — not because it is the largest or most funded, but because of what it represents. Founded in 2023 by Vivek Raghavan (formerly Chief of Products at EkStep, the education non-profit backed by Gates Foundation and Infosys) and Pratyush Kumar (IIT Bombay, Microsoft Research), Sarvam is building large language models specifically designed for India's 22 official languages.

The problem they are solving is one that OpenAI and Google have neither the incentive nor the cultural context to solve: Hindi, Tamil, Telugu, Bengali, Marathi, and Kannada are spoken by hundreds of millions of Indians who currently receive a degraded AI experience because global models are trained overwhelmingly on English data. Sarvam's models understand not just language but cultural context — the difference between a query in Hyderabadi Urdu and standard Hindi, or a medical question phrased in Tamil colloquial versus formal language.

In April 2025, the Government of India selected Sarvam AI under the IndiaAI Mission to build India's sovereign LLM — a GPT-4-class model trained on Indian data, running on Indian compute. The company crossed a $1B valuation in 2025, becoming India's first AI unicorn, with $70M+ raised from Lightspeed, Peak XV, and others.`,
    stat: { val: "$1B+", label: "Sarvam AI Valuation — India's First AI Unicorn" },
    insight: "Sarvam is not competing with OpenAI. It is building the infrastructure that will make AI useful for the 800 million Indians who don't communicate primarily in English.",
    internal: "/startup/sarvam-ai",
  },
  {
    num: "03",
    title: "Krutrim AI — The Vertically Integrated AI Bet",
    keyword: "Krutrim AI Bhavish Aggarwal India",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80&auto=format",
    imgAlt: "Krutrim AI Bhavish Aggarwal India first AI unicorn",
    body: `Bhavish Aggarwal built Ola into India's dominant ride-hailing company. Then he decided the most important thing he could do next was not another consumer app — it was AI infrastructure. Krutrim, founded in 2023 and named from the Sanskrit word for "artificial", became India's fastest startup to achieve unicorn status — hitting a $1B valuation just seven months after founding.

What makes Krutrim genuinely ambitious is its vertical integration strategy. Most AI startups build applications on top of OpenAI or Anthropic APIs. Krutrim is building the entire stack: its own LLMs trained on Indian data, proprietary AI accelerator chips under the Krutrim Si brand (designed to reduce India's dependency on Nvidia), and Krutrim Cloud — an AI-native cloud platform for Indian enterprises.

The ambition has attracted $50M+ from Matrix Partners India and other investors. Critics point to the enormous execution risk. Supporters — including Bhavish himself — argue that India cannot afford to be dependent on foreign AI infrastructure for its digital future. The bet is existential, not commercial.`,
    stat: { val: "7 Months", label: "Time for Krutrim to Reach $1B Unicorn Status — India Record" },
    insight: "Krutrim's vertical integration strategy is either India's most important industrial bet of the decade or its most ambitious overreach. Possibly both.",
    internal: "/startup/krutrim-ai",
  },
  {
    num: "04",
    title: "Enterprise AI — The B2B Opportunity",
    keyword: "Enterprise AI Startups India 2026",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format",
    imgAlt: "Enterprise AI B2B startups India 2026",
    body: `While consumer-facing AI gets the headlines, the largest near-term revenue opportunity in Indian AI is enterprise: the 63 million Indian MSMEs, the 7,500+ listed companies, the government agencies processing millions of documents daily — all of them sitting on mountains of unstructured data they cannot currently use.

A generation of Indian enterprise AI startups is building the picks and shovels for this market. Darwinbox has built India's largest HR tech platform with AI-native features for talent matching, performance prediction, and workforce planning. Exotel uses AI for intelligent customer communication routing and sentiment analysis for 7,000+ businesses. Leena AI (acquired by Uniphore in 2024) built enterprise HR chatbots before enterprise chatbots were a mainstream category.

The entry point for most of these startups is a specific, painful workflow: contract review, customer support triage, financial document extraction, compliance monitoring. The wedge is the same as in any good B2B SaaS — make one thing 10x faster, then expand. The AI era makes the expansion faster and the switching costs higher.`,
    stat: { val: "63M+", label: "Indian MSMEs — The Primary Market for Enterprise AI" },
    insight: "The enterprise AI opportunity in India is underpriced by global investors because India's enterprise market looks small in dollars. In unit terms, it is enormous.",
    internal: "/startup",
  },
  {
    num: "05",
    title: "AI in Healthcare — Diagnosing India's Medical Gap",
    keyword: "AI Healthcare Startups India 2026",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format",
    imgAlt: "AI healthcare diagnosis India startup 2026",
    body: `India has 1.3 doctors per 1,000 people — versus a WHO recommendation of at least 4.45. This gap is not going to be closed by training more doctors in the next decade. It will be partially addressed by AI diagnostic tools that allow a nurse practitioner in rural Bihar to have the diagnostic capabilities previously available only at AIIMS Delhi.

Niramai Health Analytix uses thermal imaging and AI to detect early-stage breast cancer without radiation or physical contact — specifically designed for India's low-infrastructure healthcare settings where mammography machines are unavailable. Tricog Health uses AI-interpreted ECGs transmitted from rural clinics to cardiologists in urban centres, enabling cardiac diagnosis at scale. Qure.ai's AI system reads chest X-rays for tuberculosis, pneumonia, and COVID with radiologist-level accuracy — and has been deployed in 70+ countries.

These are not incremental improvements. They are category-creating products solving problems that simply cannot be solved with incumbent approaches given India's resource constraints.`,
    stat: { val: "70+", label: "Countries Where Qure.ai's AI Diagnostic System Is Deployed" },
    insight: "India's AI healthcare companies are not building for India's upper-middle class. They are building for India's missing healthcare infrastructure — and that puts them 20 years ahead of any comparable Western product.",
    internal: "/startups/healthtech",
  },
  {
    num: "06",
    title: "AI in Education — PhysicsWallah & the Next Wave",
    keyword: "AI EdTech Startups India 2026",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format",
    imgAlt: "AI education edtech startups India 2026 PhysicsWallah",
    body: `PhysicsWallah crossed 8 million paying students in 2026 — and the AI layer it has built over Alakh Pandey's original video-first model is what will drive the next growth phase. PW's AI tutoring assistant can identify a student's specific knowledge gap from their answer patterns and serve them the exact sub-topic they need to revisit. At ₹4,000–8,000 per batch, it is the most affordable high-quality test preparation product in India — and AI makes the personalisation possible without the teacher-to-student ratio that would otherwise make it economically impossible.

Beyond PhysicsWallah, a new generation of pure-play AI education startups is emerging. Learnosity (acquired by Archipelago Learning) and Indian-built alternatives like Suraasa (teacher training with AI feedback) and Virtually (AI tutoring for engineering students) are building the next layer of India's EdTech infrastructure on top of AI capabilities that simply did not exist when BYJU'S was founded.

The BYJU'S collapse — caused by aggressive sales, unsustainable spending, and a failure to build genuinely effective products — cleared space in the market for AI-native EdTech companies with better unit economics and measurably better learning outcomes.`,
    stat: { val: "8M+", label: "Paying Students on PhysicsWallah — India's AI-Enhanced EdTech Leader" },
    insight: "The EdTech companies that will win in India are not the ones who raised the most — they're the ones who built AI tutors that are actually better than a ₹50,000/year coaching class.",
    internal: "/startup/physicswallah",
  },
  {
    num: "07",
    title: "AI in FinTech — Credit, Fraud, and Wealth",
    keyword: "AI FinTech Startups India 2026",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format",
    imgAlt: "AI fintech startups India credit scoring fraud detection 2026",
    body: `India's financial infrastructure runs on AI in ways that are largely invisible to end users. Every UPI transaction passes through fraud detection models. Every alternative lending product underwriting relies on AI credit scoring for borrowers with thin or no traditional credit files. The India Stack — Aadhaar, UPI, Account Aggregator — generates the data inputs; AI converts those inputs into credit decisions, fraud flags, and personalised financial products.

Perfios is India's most important financial data infrastructure company — its bank statement analysis AI powers the credit underwriting of every major lender in the country. CreditMantri uses AI to help thin-file borrowers build credit histories and access loans they would otherwise be denied. Fibe (formerly EarlySalary) uses AI underwriting to extend instant personal loans to salaried millennials without traditional credit scores.

At the wealth end, Smallcase has built AI-powered thematic investment portfolios that have attracted 5M+ investors. Dezerv manages ₹4,000+ crore in AUM using AI-driven portfolio construction for India's mass affluent. The financialisation of India's 300M+ middle class is an AI story as much as a FinTech story.`,
    stat: { val: "5M+", label: "Investors on Smallcase — AI-Powered Thematic Investing Platform" },
    insight: "India's AI FinTech companies are not building marginally better banking apps. They are extending financial services to 400 million people who have never had meaningful access to credit or wealth products.",
    internal: "/startups/fintech",
  },
  {
    num: "08",
    title: "What to Watch: India's AI Startups in 2026–2030",
    keyword: "India AI Startups Future 2026 2030",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=900&q=80&auto=format",
    imgAlt: "India AI future 2026 2030 deep tech innovation",
    body: `The next four years will determine whether India becomes a consumer of AI built elsewhere or a genuine producer of AI infrastructure. The signs are encouraging: the IndiaAI Mission's ₹10,000 crore compute investment, the Sarvam sovereign LLM programme, and Krutrim's chip ambitions all point toward a country that takes AI sovereignty seriously.

The specific bets worth watching: AI-powered vernacular voice interfaces (the biggest UX unlock for India's 600M non-English-speaking internet users), AI-first healthcare diagnostics at primary health centre level (potentially the most consequential application of AI in any country), AI-enabled agricultural advisory (connecting 100M+ small farmers to precision advice they currently lack), and AI coding tools built specifically for India's 5M+ developers working on Indian compliance, tax, and regulatory systems.

India's AI advantage is not just talent. It is problems. The problems India faces — at the scale, the complexity, and the resource constraints of a $3.7 trillion economy with 1.4 billion people — are precisely the problems that AI is best positioned to solve. That is why the companies building AI for India are also, in many cases, building AI for Southeast Asia, Africa, and the Global South. India is not the test market. India is the template.`,
    stat: { val: "₹10,000Cr", label: "IndiaAI Mission Compute Investment — Govt Backing India's AI Future" },
    insight: "India's AI companies are building for markets that didn't exist five years ago and will be worth trillions by 2030. The incumbents don't understand the problems. The founders do.",
    internal: "/startups/ai-ml",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// STARTUP DIRECTORY CARDS — quick reference for SEO + internal linking
// ─────────────────────────────────────────────────────────────────────────────
const AI_STARTUPS_DIRECTORY = [
  { name:"Sarvam AI",      slug:"sarvam-ai",       cat:"Sovereign LLM",         note:"India's first AI unicorn. Government-selected to build India's sovereign LLM. Hindi/Tamil/Telugu native models.", funding:"$70M+",  val:"$1B+"  },
  { name:"Krutrim AI",     slug:"krutrim-ai",       cat:"Vertical AI Stack",     note:"Full-stack AI company: LLMs + AI chips (Krutrim Si) + AI cloud. Founded by Bhavish Aggarwal.", funding:"$50M+",  val:"$1B+"  },
  { name:"Darwinbox",      slug:"darwinbox",        cat:"HR Tech AI",            note:"India's largest HR platform with AI talent matching, 850+ enterprise clients, 2M+ employees managed.", funding:"$140M+", val:"$950M" },
  { name:"Qure.ai",        slug:"qure-ai",          cat:"Medical AI",            note:"AI radiology platform reading chest X-rays for TB and pneumonia. Deployed in 70+ countries.", funding:"$70M+",  val:"$700M" },
  { name:"Niramai",        slug:"niramai",          cat:"Healthcare AI",         note:"AI-powered thermal breast cancer screening without radiation. Built for low-infrastructure settings.", funding:"$12M+",  val:"N/D"   },
  { name:"Exotel",         slug:"exotel",           cat:"Customer Comms AI",     note:"AI-powered cloud telephony and communication platform for 7,000+ Indian businesses.", funding:"$100M+", val:"$500M" },
  { name:"Perfios",        slug:"perfios",          cat:"Financial Data AI",     note:"Bank statement analysis AI powering credit decisions at every major Indian lender.", funding:"$230M+", val:"$900M" },
  { name:"Smallcase",      slug:"smallcase",        cat:"WealthTech AI",         note:"AI thematic investment portfolios. 5M+ investors, 200+ portfolio managers on platform.", funding:"$40M+",  val:"$250M" },
  { name:"Tricog Health",  slug:"tricog-health",    cat:"Cardiac AI",            note:"AI ECG interpretation from rural clinics to urban cardiologists. Processes 1M+ ECGs/year.", funding:"$20M+",  val:"N/D"   },
  { name:"Leena AI",       slug:"leena-ai",         cat:"Enterprise AI",         note:"Enterprise HR AI chatbot, acquired by Uniphore 2024. Automated HR workflows for Fortune 500.", funding:"$30M+",  val:"N/D"   },
  { name:"Mad Street Den", slug:"mad-street-den",   cat:"Retail AI",             note:"Vue.ai — retail AI for personalization, catalog management, demand forecasting for fashion brands.", funding:"$30M+",  val:"$200M" },
  { name:"SigTuple",       slug:"sigtuple",         cat:"Pathology AI",          note:"AI-powered pathology analysis. Manthana platform automates blood test analysis at labs.", funding:"$20M+",  val:"N/D"   },
]

const RELATED_SLUGS = [
  "india-startup-ecosystem-2026",
  "top-indian-unicorns-2026",
  "how-to-get-startup-funding-india-2026",
  "best-indian-startup-founders-to-follow-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ─────────────────────────────────────────────────────────────────────────────
// CSS — identical to india-startup-ecosystem-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  .pf  { font-family: var(--font-display), Georgia, serif !important; }
  .rp  { font-family: Georgia, 'Times New Roman', serif; }
  .sf  { font-family: system-ui, -apple-system, sans-serif; }

  :root {
    --parch: #F5F1E8; --parch2: #EDE9DF; --ink: #1A1208;
    --ink3: #5A4A30; --ink4: #8C7D65; --ink5: #BBB0A0;
    --rule: #C8C2B4; --rule2: #D8D2C4;
    --gold: #B45309; --gold2: #D97706; --gold3: #92400E;
    --white: #FDFCF9;
    --ai: #2563EB;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
  .a1 { animation: fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }
  .a2 { animation: fadeUp .44s .16s cubic-bezier(.16,1,.3,1) both; }

  .imgf { position: relative; overflow: hidden; }
  .imgf img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    filter: sepia(14%) contrast(108%);
    transition: transform .6s ease;
  }
  .imgf:hover img { transform: scale(1.03); }

  .blog-card {
    border: 1.5px solid var(--ink);
    background: var(--white);
    overflow: hidden;
    position: relative;
  }
  .blog-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, #1D4ED8, #2563EB, #60A5FA);
  }

  .stat-pill {
    display: flex; align-items: center; gap: 14px;
    background: var(--ink); padding: 14px 18px; margin: 16px 0;
  }
  .insight {
    display: inline-flex; align-items: center; gap: 8px;
    background: #EFF6FF; border: 1px solid rgba(37,99,235,.2);
    padding: 9px 14px; width: 100%;
  }
  .sh { display: flex; align-items: center; gap: 10px; }
  .sh-l {
    font-size: 8px; font-weight: 700; text-transform: uppercase;
    letter-spacing: .28em; color: var(--ink5);
    font-family: system-ui; white-space: nowrap;
  }
  .sh-r { flex: 1; height: 1px; background: var(--rule2); }

  .toc-link {
    display: flex; align-items: baseline; gap: 8px;
    margin-bottom: 9px; text-decoration: none;
  }
  .toc-link:hover span { color: var(--ai); }

  .rel-card {
    display: flex; flex-direction: column;
    background: var(--white); text-decoration: none;
    transition: transform .15s, box-shadow .15s; position: relative;
  }
  .rel-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2.5px; background: transparent; transition: background .15s;
  }
  .rel-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--ink); z-index: 1;
  }
  .rel-card:hover::before { background: var(--ai); }

  .dropcap::first-letter {
    font-family: var(--font-display), Georgia, serif;
    font-size: 3.8em; font-weight: 900;
    float: left; line-height: .82;
    margin-right: 8px; margin-top: 6px; color: var(--ink);
  }

  /* Directory table */
  .dir-table { width: 100%; border-collapse: collapse; }
  .dir-table th {
    font-family: system-ui; font-size: 8px; font-weight: 700;
    text-transform: uppercase; letter-spacing: .2em; color: var(--ink5);
    padding: 9px 12px; border-bottom: 1.5px solid var(--ink);
    text-align: left; background: var(--parch2);
  }
  .dir-table td {
    padding: 11px 12px; border-bottom: 1px solid var(--rule2);
    vertical-align: top;
  }
  .dir-table tr:hover td { background: #F3EFE5; }
  .dir-table tr:last-child td { border-bottom: none; }

  @media (max-width: 900px) {
    .section-grid { grid-template-columns: 1fr !important; }
    .toc-grid     { grid-template-columns: 1fr !important; }
    .dir-hide     { display: none !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogTopAIStartups() {
  const jsonLd = buildBlogJsonLd(POST)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        itemScope
        itemType="https://schema.org/BlogPosting"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >

        {/* ── BREADCRUMB ── */}
        <nav
          className="sf a0"
          aria-label="Breadcrumb"
          style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}
              itemScope itemType="https://schema.org/BreadcrumbList"
            >
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }} itemProp="item">
                  <span itemProp="name">UpForge</span>
                </Link>
                <meta itemProp="position" content="1" />
              </li>
              <li aria-hidden="true" style={{ color: "var(--rule)" }}>/</li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <Link href="/blog" style={{ color: "var(--ink5)", textDecoration: "none" }} itemProp="item">
                  <span itemProp="name">Blog</span>
                </Link>
                <meta itemProp="position" content="2" />
              </li>
              <li aria-hidden="true" style={{ color: "var(--rule)" }}>/</li>
              <li
                style={{ color: "var(--ink4)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 260 }}
                itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">Top AI Startups India 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} loading="eager" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(26,18,8,.3) 0%,rgba(26,18,8,.9) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px,5vw,64px)", textAlign: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["Artificial Intelligence", "India 2026", "Deep Dive"].map((t) => (
                  <span key={t} className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 10px" }}>
                    {t}
                  </span>
                ))}
              </div>
              <h1
                className="pf"
                itemProp="headline"
                style={{ fontSize: "clamp(1.8rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.02, color: "white", letterSpacing: "-0.02em", marginBottom: 18, maxWidth: 860 }}
              >
                Top AI Startups in India{" "}
                <em style={{ color: "#93C5FD" }}>(2026 Updated List)</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                From sovereign LLMs to medical AI — the companies building India's AI future.
              </p>
            </div>
          </div>

          {/* Meta bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Published",     v: "1 March 2026"   },
                  { l: "Reading Time",  v: POST.readTime    },
                  { l: "Category",      v: POST.category    },
                  { l: "Startups Covered", v: `${AI_STARTUPS_DIRECTORY.length}+` },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "12px 20px", borderRight: "1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.3)", marginBottom: 3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize: 11, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* Intro + TOC */}
          <div
            className="a1 toc-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 0, borderBottom: "1px solid var(--rule2)", alignItems: "start" }}
          >
            <div style={{ padding: "clamp(28px,4vw,48px) clamp(16px,3vw,40px) clamp(28px,4vw,48px) 0", borderRight: "1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom: 18 }}>
                <span className="sh-l">Introduction</span>
                <div className="sh-r" />
              </div>
              <p
                className="pf"
                itemProp="description"
                style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18 }}
              >
                India's AI moment has arrived — and it looks different from Silicon Valley's.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}>
                With over 3,000 active AI startups, a government-backed sovereign LLM programme, the country's first AI unicorns, and a generation of founders solving problems at the scale of a 1.4 billion-person economy — India is not building AI tools for the world's tech elite. It is building AI for the next billion people who will come online, and the hundred million farmers, patients, students, and small business owners who need intelligence, not apps.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88 }}>
                This is the UpForge guide to the most important AI startups in India in 2026 — who they are, what they are building, why it matters, and what it tells us about where Indian AI is going.
              </p>
            </div>

            {/* TOC */}
            <nav
              aria-label="Article sections"
              style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth: "clamp(200px,26vw,280px)" }}
            >
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">In This Article</span>
                <div className="sh-r" />
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {SECTIONS.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${s.num}`} className="toc-link">
                      <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "#2563EB", flexShrink: 0, minWidth: 18 }}>{s.num}</span>
                      <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>{s.title}</span>
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--rule2)" }}>
                  <a href="#directory" className="toc-link">
                    <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "#2563EB", flexShrink: 0, minWidth: 18 }}>→</span>
                    <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4, fontWeight: 700 }}>Full Startup Directory</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* ── EDITORIAL SECTIONS ── */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            {SECTIONS.map((sec, idx) => (
              <div
                key={idx}
                id={`section-${sec.num}`}
                className="blog-card"
                style={{ marginBottom: 20 }}
              >
                <div
                  className="section-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 340px" : "340px 1fr",
                    gap: 0,
                    minHeight: 340,
                  }}
                >
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(26,18,8,.6) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2563EB" }}>
                          Section {sec.num}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {sec.keyword}
                        </span>
                      </div>
                      <h2
                        className="pf"
                        style={{ fontSize: "clamp(1.2rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.15, marginBottom: 18 }}
                      >
                        {sec.title}
                      </h2>
                      {sec.body.split("\n\n").map((para, pi) => (
                        <p
                          key={pi}
                          className={`rp${pi === 0 ? " dropcap" : ""}`}
                          style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}
                        >
                          {para}
                        </p>
                      ))}
                      {sec.internal && (
                        <Link
                          href={sec.internal}
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, fontFamily: "system-ui", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "#2563EB", textDecoration: "none" }}
                        >
                          View on UpForge Registry →
                        </Link>
                      )}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div className="stat-pill">
                        <p className="pf" style={{ fontSize: "1.8rem", fontWeight: 900, color: "#93C5FD", lineHeight: 1, flexShrink: 0 }}>
                          {sec.stat.val}
                        </p>
                        <p className="sf" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.5 }}>
                          {sec.stat.label}
                        </p>
                      </div>
                      <div className="insight">
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "#2563EB", flexShrink: 0 }} aria-hidden="true" />
                        <p className="rp" style={{ fontSize: 12, color: "#1D4ED8", fontStyle: "italic", lineHeight: 1.6 }}>
                          {sec.insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left,rgba(26,18,8,.6) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── STARTUP DIRECTORY ── */}
          <div id="directory" style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l" style={{ color: "#2563EB" }}>✦ Full Directory</span>
              <div className="sh-r" />
            </div>
            <h2
              className="pf"
              style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.15 }}
            >
              Top AI Startups in India — 2026 Verified List
            </h2>
            <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", fontStyle: "italic", marginBottom: 20, lineHeight: 1.65 }}>
              All profiles independently verified by UpForge editorial. Click any startup to view full profile on UpForge Registry.
            </p>

            <div style={{ border: "1.5px solid var(--ink)", overflow: "hidden" }}>
              <table className="dir-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Company</th>
                    <th>Sector</th>
                    <th className="dir-hide">What They Do</th>
                    <th>Funding</th>
                    <th>Valuation</th>
                  </tr>
                </thead>
                <tbody>
                  {AI_STARTUPS_DIRECTORY.map((s, i) => (
                    <tr key={s.slug}>
                      <td>
                        <span className="pf" style={{ fontSize: 13, fontWeight: 900, color: "var(--rule)" }}>{String(i + 1).padStart(2, "0")}</span>
                      </td>
                      <td>
                        <Link
                          href={`/startup/${s.slug}`}
                          style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 14, fontWeight: 700, color: "var(--ink)", textDecoration: "none" }}
                        >
                          {s.name}
                        </Link>
                      </td>
                      <td>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "#2563EB", background: "#EFF6FF", padding: "2px 8px", borderRadius: 2 }}>
                          {s.cat}
                        </span>
                      </td>
                      <td className="dir-hide">
                        <p className="rp" style={{ fontSize: 12, color: "var(--ink4)", lineHeight: 1.55, fontStyle: "italic" }}>{s.note}</p>
                      </td>
                      <td>
                        <span className="sf" style={{ fontSize: 12, fontWeight: 700, color: "var(--ink3)" }}>{s.funding}</span>
                      </td>
                      <td>
                        <span className="pf" style={{ fontSize: 13, fontWeight: 900, color: s.val === "N/D" ? "var(--ink5)" : "var(--ink)" }}>{s.val}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="/startups/ai-ml"
                style={{ fontFamily: "system-ui", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "#2563EB", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 5 }}
              >
                View All AI Startups on UpForge →
              </Link>
            </div>
          </div>

          {/* ── RELATED POSTS ── */}
          <div style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l">Related Reading on UpForge</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/blog/${r.slug}`} className="rel-card">
                  <div style={{ height: 80, background: ["#E8E0D0","#E0D8CC","#D8D0C4","#D0C8BC"][i % 4], display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--rule2)" }}>
                    <span className="pf" style={{ fontSize: "2.8rem", fontWeight: 900, color: "rgba(26,18,8,0.1)" }} aria-hidden="true">
                      {r.title.charAt(0)}
                    </span>
                  </div>
                  <div style={{ padding: "13px 14px 12px" }}>
                    <h3 className="pf" style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4, lineHeight: 1.2 }}>{r.title}</h3>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 700 }}>{r.category}</span>
                    <div style={{ marginTop: 8 }}>
                      <span className="sf" style={{ fontSize: 8.5, color: "#2563EB", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>Read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── FOOTER NAV ── */}
          <nav
            aria-label="Explore UpForge"
            style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}
          >
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="sf"
                    style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </article>
    </>
  )
}
