// app/blog/oracle-layoffs-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Target keywords: "oracle layoffs 2026", "oracle layoffs", "oracle news",
//                  "oracle share price", "oracle layoff india", "oracle AI pivot"
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
  slug:          "oracle-layoffs-2026",
  title:         "Oracle Layoffs 2026: 30,000 Jobs Cut in the Biggest Tech Workforce Reduction Ever",
  description:   "Oracle laid off up to 30,000 employees on March 31, 2026 — roughly 18% of its global workforce — to fund a $50 billion AI data centre buildout. Here is everything you need to know: what happened, who was affected, what it means for Oracle's share price, and what comes next.",
  keywords: [
    "oracle layoffs 2026",
    "oracle layoffs",
    "oracle layoff",
    "oracle news 2026",
    "oracle share price 2026",
    "oracle stock ORCL",
    "oracle AI pivot",
    "oracle 30000 jobs cut",
    "oracle india layoffs",
    "oracle DPIIT india employees",
    "oracle restructuring 2026",
    "tech layoffs 2026",
    "oracle data center AI",
    "oracle OpenAI Stargate",
    "oracle termination email",
    "oracle H1B visa layoffs",
    "oracle severance 2026",
  ],
  datePublished: "2026-04-03",
  dateModified:  "2026-04-03",
  readTime:      "11 min",
  category:      "Tech Industry",
  heroImage:     "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=1600&q=85&auto=format",
  heroImageAlt:  "Oracle Layoffs 2026 — 30,000 Jobs Cut in Biggest Tech Workforce Reduction",
  wordCount:     2900,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS DATA
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    num:     "01",
    title:   "What Happened: The 6 AM Email That Changed 30,000 Lives",
    keyword: "Oracle Layoffs March 2026",
    img:     "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=900&q=80&auto=format",
    imgAlt:  "Oracle layoffs March 31 2026 termination email employees",
    body: `On March 31, 2026 — the last day of Q1 — Oracle sent termination emails to thousands of employees across the United States, India, Canada, Mexico, and Uruguay. The emails arrived at approximately 6 AM local time from "Oracle Leadership." No prior warning from HR. No conversation with a manager. Access to company systems was cut immediately after the email was opened.

The subject line was clinical: an organisational change. The body informed recipients that their roles had been eliminated and that the day of the email was their final working day. Employees confirmed the cuts in real time on Reddit's r/employeesOfOracle and on the professional forum Blind — entire teams at Oracle's Revenue and Health Sciences (RHS) division and SaaS and Virtual Operations Services (SVOS) unit reported cuts of at least 30%.

Investment bank TD Cowen estimates the total workforce reduction will reach 20,000 to 30,000 employees — roughly 18% of Oracle's global workforce of approximately 162,000 people. Oracle has not officially confirmed the final number, and declined all media requests to comment. What is not in dispute: this is the largest layoff in Oracle's 48-year history, and it is happening while the company has never been more financially valuable on paper.`,
    stat: { val: "30,000", label: "Employees Cut — 18% of Oracle's Global Workforce of 162,000" },
    insight: "The 6 AM termination email with immediate system lockout is now a pattern in Big Tech layoffs. What made Oracle's notable: it arrived while the company was simultaneously reporting a 22% revenue increase and a $553 billion order backlog.",
    internal: null,
  },
  {
    num:     "02",
    title:   "Why Oracle Cut 30,000 Jobs While Revenue Was Growing",
    keyword: "Oracle AI Pivot Data Centre Funding 2026",
    img:     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80&auto=format",
    imgAlt:  "Oracle AI data centre infrastructure funding 2026",
    body: `The apparent contradiction at the heart of Oracle's layoffs is this: the company just reported quarterly revenue of $17.2 billion — up 22% year on year — and its remaining performance obligations (contracted future revenue not yet recognised) stood at a staggering $553 billion, up 325% year over year. Oracle Cloud Infrastructure revenue alone surged 84% to $4.9 billion in the same quarter. This is not a company in distress.

It is a company that has made an extraordinarily expensive bet — and is cannibalising its present to fund its future. Oracle has committed approximately $50 billion in capital expenditure for fiscal 2026 to build out AI data centres capable of handling the AI training workloads of customers including OpenAI, Meta, Cohere, and xAI. The $300 billion Stargate contract with OpenAI alone requires infrastructure Oracle does not yet have. To close the gap between its ambitious build programme and its available cash, Oracle has taken on $58 billion in new debt in just two months — including a $50 billion bond offering in February — and is now eliminating tens of thousands of employees to free up an estimated $8 to $10 billion in annual cash flow.

TD Cowen analysts put it plainly in a January note: cutting 20,000 to 30,000 employees would generate that free cash flow increment needed to fund the data centre buildout without issuing further debt. Oracle disclosed a $2.1 billion restructuring budget in its March 2026 SEC 10-Q filing, with $982 million already recorded. The bulk of what remains — roughly $1.1 billion — is earmarked for severance. The company is not shrinking. It is restructuring its cost base to become a different kind of company: not a legacy software vendor but an AI infrastructure hyperscaler that competes directly with Amazon Web Services, Microsoft Azure, and Google Cloud.`,
    stat: { val: "$553B", label: "Oracle's Remaining Performance Obligations — 325% YoY Jump" },
    insight: "This is the defining tension of the AI era: companies with record backlogs and surging demand are cutting their existing workforces to fund the infrastructure required to actually fulfil that demand. Oracle is the starkest example yet.",
    internal: null,
  },
  {
    num:     "03",
    title:   "India: 12,000 Jobs Cut — The Highest Per-Country Impact",
    keyword: "Oracle India Layoffs 2026 Bengaluru Hyderabad",
    img:     "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900&q=80&auto=format",
    imgAlt:  "Oracle India layoffs 2026 Bengaluru Hyderabad tech jobs",
    body: `India has emerged as the country most severely impacted by Oracle's global restructuring. Approximately 12,000 employees in India received termination notices on March 31 — representing roughly 40% of Oracle's Indian workforce of around 30,000. A second round of layoffs is expected within a month, according to employees including one from Oracle's HR department who confirmed the timeline to Business Standard.

The cuts span Oracle's India operations comprehensively. NetSuite's India Development Centre saw reductions across project management and engineering roles at multiple seniority levels. Technical teams in cloud and database units, support, sales, and operations functions were all affected. Recently promoted employees — some promoted weeks before the layoff — were among those let go, according to multiple affected employees who shared their experiences on LinkedIn and Reddit.

The ripple effects extend beyond the individuals directly terminated. For the thousands of Indian professionals working in the United States on H-1B visas who are now unemployed, the situation is acutely precarious: US immigration law typically gives H-1B holders a 60-day grace period to find new employment or leave the country. For those with pending green card applications — particularly those in the decades-long India-specific EB-2 and EB-3 queues — losing employment can mean losing years of position in line. The returning wave of Indian tech professionals will also intensify competition in Bengaluru and Hyderabad's already pressured job markets. Cybersecurity, cloud architecture, and AI infrastructure roles are currently the most sought after by displaced Oracle employees globally, according to recruiters.`,
    stat: { val: "12,000", label: "Oracle Employees Cut in India — Another Round Expected Within 30 Days" },
    insight: "The H-1B crisis within Oracle's layoffs is an under-reported story. Tens of thousands of Indian professionals in the US, many with long-pending green card applications, now face not just unemployment but an immigration clock that starts the moment their employment ends.",
    internal: "/blog/india-startup-ecosystem-2026",
  },
  {
    num:     "04",
    title:   "Oracle Share Price: From ₹28,000 to ₹12,000 — and What Happens Next",
    keyword: "Oracle ORCL Share Price 2026 Stock Analysis",
    img:     "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format",
    imgAlt:  "Oracle ORCL share price stock market 2026 analysis",
    body: `Oracle's stock (NYSE: ORCL) peaked at $345.72 in September 2025, briefly making it one of the most valuable software companies in the world as investors priced in the AI infrastructure opportunity. By March 31, 2026, the stock had lost nearly 57% of its value — falling to around $140 per share — as investors worried about the company's rising debt load, negative free cash flow, and the reliability of its largest customers.

The layoff announcement on March 31 initially pushed the stock up 5%, as markets interpreted the workforce reduction as evidence that management was taking decisive action to improve cash flow. By April 2, Oracle shares were trading at approximately $145.94. The stock is now at its cheapest valuation relative to earnings since before the AI boom began in early 2023, which has prompted some analysts to call it a buying opportunity — and others to flag that the structural challenges remain unresolved.

The core bull case: Oracle's $553 billion RPO backlog is real contracted revenue. OCI's 84% revenue growth is accelerating. The company has signed over $29 billion of new contracts since its Q3 earnings call using a "bring your own hardware" model that requires major customers to front the cost of GPU clusters — limiting Oracle's own capex exposure. The bear case: Oracle's free cash flow is deeply negative (negative $24.7 billion trailing), its debt load exceeds $124 billion, and its largest single contract — the $300 billion Stargate deal with OpenAI — carries execution risk that Wall Street has not fully modelled. Oracle's fiscal 2027 revenue target of $90 billion requires the company to nearly double revenue in 18 months while simultaneously completing the largest infrastructure buildout in its history.`,
    stat: { val: "-57%", label: "Oracle Stock Decline From Sept 2025 Peak of $345 to ~$145 Today" },
    insight: "The market is treating Oracle as a company in transition, not a company in decline. The question is whether its $553 billion backlog represents gold or a mirage — and the answer will become clear as data centres come online through 2026 and 2027.",
    internal: null,
  },
  {
    num:     "05",
    title:   "Who Got Cut — and What Roles Survived",
    keyword: "Oracle Layoffs Which Teams Departments 2026",
    img:     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format",
    imgAlt:  "Oracle layoffs 2026 which departments teams were cut",
    body: `Oracle's restructuring was not random. The cuts followed a clear logic: roles in traditional business areas not aligned with AI, cloud infrastructure, or data centre operations faced the deepest reductions, while technical talent in cloud architecture, AI, and security was largely retained.

The hardest-hit divisions were Oracle's Revenue and Health Sciences (RHS) unit and its SaaS and Virtual Operations Services (SVOS) group — both saw at least 30% workforce reductions, according to employee reports corroborated by multiple outlets. Support, sales, and operations functions tied to legacy on-premise database products also saw significant cuts. NetSuite's India Development Centre lost employees across project management and engineering. The Health Sciences division — which serves pharmaceutical, biotech, and clinical research organisations — saw cuts despite being a high-growth segment, suggesting Oracle is willing to sacrifice revenue-generating headcount to hit cash flow targets.

What survived: Oracle's OCI (Oracle Cloud Infrastructure) engineering teams, data centre operations, AI platform development, and security divisions were largely protected. Oracle's security portfolio — which includes Identity Management, Cloud Guard, and database security products — is considered a strategic asset in the current market, where the global cybersecurity talent gap stands at 4.8 million unfilled positions. If you were laid off from Oracle's security stack, recruiters are already reaching out. The WARN Act, which requires 60 days advance notice for qualifying mass layoffs in the United States, may provide additional legal recourse for some affected employees — several have already noted on Blind and LinkedIn that Oracle classified them as remote workers, which Oracle may argue exempts certain locations from WARN requirements.`,
    stat: { val: "30%+", label: "Workforce Reduction in Oracle's RHS and SVOS Divisions" },
    insight: "Oracle is not becoming a smaller company. It is becoming a different company — one where cloud infrastructure engineers and AI platform builders are the core headcount, and legacy software and operations roles are managed down. The question is whether it can execute that transition at $50 billion in capex per year.",
    internal: null,
  },
  {
    num:     "06",
    title:   "The Bigger Picture: What Oracle's Layoffs Say About the AI Economy",
    keyword: "Tech Layoffs AI Economy 2026 Oracle Meta Amazon",
    img:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
    imgAlt:  "AI economy tech layoffs 2026 automation workforce impact",
    body: `Oracle's mass layoff did not happen in isolation. It is part of a coherent pattern across the technology industry in 2026: companies are simultaneously reporting record revenues, announcing record AI infrastructure investments, and cutting tens of thousands of jobs. Meta, Amazon, and Block have all made significant cuts this year. The common thread is not financial distress — it is the belief that AI will replace significant portions of traditional white-collar technology work, combined with the capital demands of building the infrastructure to make that replacement possible.

Oracle's cuts are particularly revealing because of what they say about the economics of the AI transition. The company is not cutting because it has fewer customers or less revenue. It is cutting because the work required to serve its new customers — building and operating AI data centres at hyperscale — is fundamentally different from the work required to maintain legacy enterprise software, and because AI itself is beginning to reduce the headcount needed for support, sales, and operations functions.

For workers, the message is uncomfortable but clear: roles in traditional enterprise software support, on-premise infrastructure management, and non-technical operations face structural pressure across the entire industry. Roles in cloud infrastructure, cybersecurity, AI platform development, and data engineering face growing demand that the industry cannot currently supply. The skill gap between what companies need and what their existing workforces provide is widening — and the pace of that widening is accelerating.

For India specifically, Oracle's layoffs are a stress test for an economy that has bet heavily on technology services employment. The returning wave of H-1B workers, the re-entry of 12,000 domestic Oracle employees into an already competitive market, and the broader slowdown in traditional IT services hiring are converging simultaneously. The Indian startups that will absorb some of this talent displacement — and the opportunities that emerge from it — are a story that UpForge will be tracking closely.`,
    stat: { val: "$8–10B", label: "Annual Cash Flow Freed by Oracle Layoffs — Redirected to AI Data Centres" },
    insight: "The most important question is not whether Oracle's AI bet will pay off — it is what happens to the 30,000 people who built the company that generated the cash Oracle is now deploying. The answer matters for every technology worker, in India and globally.",
    internal: "/blog/top-ai-startups-india-2026",
  },
  {
    num:     "07",
    title:   "What Displaced Oracle Employees Should Do Right Now",
    keyword: "Oracle Layoff 2026 Next Steps Jobs Severance",
    img:     "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&q=80&auto=format",
    imgAlt:  "Oracle laid off employees next steps jobs 2026",
    body: `If you received the Oracle termination email, the first 72 hours matter disproportionately — access expires, recruiter attention peaks, and the most actively hiring roles fill first. Here is what the evidence from previous large tech layoffs suggests you should do immediately.

Review your severance agreement carefully before signing. Oracle's severance offer is contingent on signing separation paperwork, according to screenshots shared by multiple affected employees. The standard WARN Act in the US requires 60 days advance notice (or equivalent pay) for qualifying mass layoffs. If Oracle classified you as a remote worker to avoid WARN requirements and your office was a qualifying site, consult an employment attorney before signing — the potential back pay is significant.

File for unemployment benefits the day after your last paycheck. Do not wait until severance runs out. California EDD processing is slow — filing immediately maximises your timeline. If you are in the US on an H-1B visa, your 60-day grace period begins at the end of your last day of employment, not when your severance ends. Use that time actively: update your LinkedIn profile immediately, set your profile to "Open to Work", and reach out to recruiters in cybersecurity, cloud infrastructure, and AI platform development — the roles with the highest demand for Oracle-experienced professionals right now.

For Indian professionals returning to India: the Bengaluru and Hyderabad markets are absorbing significant Oracle talent right now. Indian startups building cloud infrastructure, enterprise SaaS, and AI tools are actively hiring — and Oracle's operational and engineering experience is genuinely valued. The Indian startup ecosystem in 2026 is more open to experienced professionals from large tech companies than at any previous point, and the DPIIT-recognised startup ecosystem has never been better funded.`,
    stat: { val: "4.8M", label: "Global Cybersecurity Roles Unfilled — Highest Demand Segment for Oracle Alumni" },
    insight: "Oracle's security, cloud infrastructure, and database engineering talent is walking into a seller's market. The worst thing a displaced Oracle employee can do is wait. Update your profile today. Recruiters are already looking.",
    internal: "/blog/how-to-start-startup-india-2026",
  },
]

const FAST_FACTS = [
  { label: "Date of Layoffs",       value: "March 31, 2026"                        },
  { label: "Estimated Jobs Cut",    value: "20,000 – 30,000 (TD Cowen est.)"        },
  { label: "% of Global Workforce", value: "~18% of 162,000 employees"              },
  { label: "India Impact",          value: "~12,000 cut; another round expected"    },
  { label: "Restructuring Budget",  value: "$2.1B (SEC 10-Q, March 2026)"           },
  { label: "Cash Flow Freed",       value: "$8B – $10B annually (TD Cowen)"         },
  { label: "Oracle Stock (ORCL)",   value: "~$145 (down 57% from $345 Sept 2025)"  },
  { label: "Revenue Q3 FY2026",     value: "$17.2B (+22% YoY)"                     },
  { label: "RPO Backlog",           value: "$553B (+325% YoY)"                     },
  { label: "AI Capex FY2026",       value: "~$50B committed"                       },
]

const RELATED_SLUGS = [
  "india-startup-ecosystem-2026",
  "top-ai-startups-india-2026",
  "how-to-start-startup-india-2026",
  "how-to-get-startup-funding-india-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ─────────────────────────────────────────────────────────────────────────────
// PREMIUM MAGAZINE CSS — Clean, Editorial, Iconic
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  :root {
    --mag-bg: #FCF9F4;
    --mag-paper: #FFFFFF;
    --mag-ink: #1A1A1A;
    --mag-ink-light: #3A3A3A;
    --mag-muted: #6B6B6B;
    --mag-border: #EAE5DC;
    --mag-accent: #C72A2A;
    --mag-accent-light: #E85D5D;
    --mag-accent-glow: rgba(199, 42, 42, 0.06);
    --mag-serif: 'Playfair Display', Georgia, 'Times New Roman', serif;
    --mag-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: var(--mag-bg);
  }

  .mag-container {
    max-width: 1280px;
    margin: 0 auto;
    background: var(--mag-paper);
    box-shadow: 0 0 0 1px rgba(0,0,0,0.02), 0 20px 40px -20px rgba(0,0,0,0.1);
  }

  @keyframes magFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .mag-fade { animation: magFadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .mag-delay-1 { animation-delay: 0.05s; }
  .mag-delay-2 { animation-delay: 0.1s; }
  .mag-delay-3 { animation-delay: 0.15s; }

  @keyframes pulseRed {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.95); }
  }
  .live-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--mag-accent);
    color: white;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    padding: 4px 14px;
    border-radius: 40px;
    text-transform: uppercase;
  }
  .live-dot {
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
    animation: pulseRed 1.2s infinite;
  }

  .mag-dropcap::first-letter {
    font-family: var(--mag-serif);
    font-size: 3.2rem;
    font-weight: 700;
    float: left;
    line-height: 0.78;
    margin-right: 12px;
    margin-top: 4px;
    color: var(--mag-accent);
  }

  .mag-card {
    background: var(--mag-paper);
    border: 1px solid var(--mag-border);
    transition: all 0.2s ease;
  }
  .mag-card:hover {
    border-color: var(--mag-accent-light);
    box-shadow: 0 12px 28px -12px rgba(0,0,0,0.08);
  }

  .mag-stat {
    background: var(--mag-ink);
    padding: 1.2rem 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .mag-insight {
    background: var(--mag-accent-glow);
    border-left: 3px solid var(--mag-accent);
    padding: 1rem 1.2rem;
    font-family: var(--mag-serif);
    font-style: italic;
    font-size: 0.9rem;
    color: var(--mag-ink-light);
  }

  .img-hover {
    overflow: hidden;
  }
  .img-hover img {
    transition: transform 0.5s ease;
  }
  .img-hover:hover img {
    transform: scale(1.02);
  }

  .toc-link {
    display: flex;
    align-items: baseline;
    gap: 12px;
    text-decoration: none;
    padding: 6px 0;
    transition: color 0.15s;
  }
  .toc-link:hover .toc-text {
    color: var(--mag-accent);
  }

  .fact-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0.9rem 0;
    border-bottom: 1px solid var(--mag-border);
    gap: 1rem;
  }
  .fact-row:last-child { border-bottom: none; }

  .related-card {
    background: white;
    border: 1px solid var(--mag-border);
    transition: all 0.2s;
    text-decoration: none;
  }
  .related-card:hover {
    transform: translateY(-3px);
    border-color: var(--mag-accent);
    box-shadow: 0 10px 20px -8px rgba(0,0,0,0.1);
  }

  .eyebrow {
    font-family: var(--mag-sans);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--mag-accent);
    font-weight: 600;
  }

  hr.mag-hr {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, var(--mag-border), transparent);
    margin: 2rem 0;
  }

  @media (max-width: 900px) {
    .mag-section-grid { grid-template-columns: 1fr !important; }
    .mag-hero-title { font-size: 2.2rem !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogOracleLayoffs2026() {
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
        itemType="https://schema.org/NewsArticle"
        className="mag-container"
        style={{ minHeight: "100vh" }}
      >

        {/* ── HEADER / BRANDING ── */}
        <div className="mag-fade" style={{ padding: "1.8rem 2rem 1rem 2rem", borderBottom: "1px solid var(--mag-border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--mag-muted)", textTransform: "uppercase" }}>Presented by</span>
              <h1 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.01em", marginTop: "2px" }}>
                UpForge<span style={{ color: "var(--mag-accent)" }}>.</span>org
              </h1>
            </div>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", fontWeight: 500, color: "var(--mag-muted)" }}>MAGAZINE</span>
              <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", fontWeight: 500, color: "var(--mag-muted)" }}>DEEP DIVE</span>
            </div>
          </div>
          <nav style={{ marginTop: "1.2rem" }}>
            <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", color: "var(--mag-muted)" }}>
              <Link href="/" style={{ color: "var(--mag-muted)", textDecoration: "none" }}>Home</Link> /{" "}
              <Link href="/blog" style={{ color: "var(--mag-muted)", textDecoration: "none" }}>Blog</Link> /{" "}
              <span style={{ color: "var(--mag-ink)", fontWeight: 600 }}>Oracle Layoffs 2026</span>
            </span>
          </nav>
        </div>

        {/* ── BREAKING ALERT ── */}
        <div className="mag-fade mag-delay-1" style={{ margin: "1.5rem 2rem 0 2rem" }}>
          <div className="live-badge">
            <span className="live-dot" />
            Breaking News · Updated April 3, 2026
          </div>
          <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", marginTop: "0.75rem", color: "var(--mag-ink-light)", borderLeft: "2px solid var(--mag-accent)", paddingLeft: "1rem" }}>
            Oracle layoffs ongoing; second India round expected within 30 days. 12,000 jobs in India confirmed.
          </p>
        </div>

        {/* ── HERO SECTION ── */}
        <div className="mag-fade mag-delay-1" style={{ margin: "2rem 2rem 0 2rem" }}>
          <div className="img-hover" style={{ borderRadius: "20px", overflow: "hidden" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} style={{ width: "100%", height: "auto", maxHeight: "520px", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "1.8rem", maxWidth: "880px" }}>
            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className="eyebrow">Tech Industry</span>
              <span className="eyebrow" style={{ color: "var(--mag-muted)" }}>Breaking News</span>
              <span className="eyebrow" style={{ color: "var(--mag-muted)" }}>April 2026</span>
            </div>
            <h1 className="mag-hero-title" style={{ fontFamily: "var(--mag-serif)", fontSize: "clamp(2rem, 5vw, 3.6rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--mag-ink)" }}>
              Oracle Layoffs 2026: <span style={{ color: "var(--mag-accent)" }}>30,000 Jobs, One Email, No Warning</span>
            </h1>
            <p style={{ fontFamily: "var(--mag-serif)", fontSize: "1.1rem", color: "var(--mag-ink-light)", marginTop: "1rem", fontStyle: "italic", borderLeft: "3px solid var(--mag-accent)", paddingLeft: "1.2rem" }}>
              The biggest workforce reduction in Oracle's history — and what it reveals about the real cost of the AI era.
            </p>
          </div>
          {/* meta strip */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1.8rem", paddingTop: "1.2rem", borderTop: "1px solid var(--mag-border)" }}>
            <div><span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", textTransform: "uppercase", color: "var(--mag-muted)" }}>Published</span><br /><span style={{ fontWeight: 600 }}>3 April 2026</span></div>
            <div><span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", textTransform: "uppercase", color: "var(--mag-muted)" }}>Reading Time</span><br /><span style={{ fontWeight: 600 }}>{POST.readTime}</span></div>
            <div><span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", textTransform: "uppercase", color: "var(--mag-muted)" }}>Jobs Affected</span><br /><span style={{ fontWeight: 600 }}>Up to 30,000</span></div>
            <div><span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", textTransform: "uppercase", color: "var(--mag-muted)" }}>ORCL Today</span><br /><span style={{ fontWeight: 600 }}>~$145 (−57% YTD)</span></div>
          </div>
        </div>

        {/* ── INTRO + TABLE OF CONTENTS ── */}
        <div className="mag-fade mag-delay-2" style={{ display: "grid", gridTemplateColumns: "1fr 280px", gap: "3rem", margin: "3rem 2rem 2rem 2rem", paddingBottom: "2rem", borderBottom: "1px solid var(--mag-border)" }}>
          <div>
            <div className="eyebrow">The Story</div>
            <p className="mag-dropcap" style={{ fontFamily: "var(--mag-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--mag-ink-light)", marginTop: "0.8rem" }}>
              On March 31, 2026, Oracle sent termination emails to up to 30,000 employees before breakfast. The company had never cut this many people in its 48-year history. It also had never had a $553 billion order backlog before.
            </p>
            <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--mag-ink-light)", marginTop: "1rem" }}>
              This is the full story: what happened on the day of the layoffs, why Oracle made the decision, what it means for its share price, and what 30,000 displaced employees — including 12,000 in India — should do right now. UpForge covers the Indian startup ecosystem, the global forces that shape it, and the founders who navigate both.
            </p>
          </div>
          <div style={{ background: "var(--mag-accent-glow)", padding: "1.2rem 1.5rem", borderRadius: "12px" }}>
            <div className="eyebrow" style={{ marginBottom: "1rem" }}>In This Article</div>
            <ul style={{ listStyle: "none" }}>
              {SECTIONS.slice(0, 5).map((s) => (
                <li key={s.num}><a href={`#section-${s.num}`} className="toc-link"><span style={{ fontWeight: 700, color: "var(--mag-accent)", minWidth: 28 }}>{s.num}</span><span className="toc-text" style={{ fontSize: "0.8rem", color: "var(--mag-ink)" }}>{s.title.substring(0, 38)}</span></a></li>
              ))}
              <li style={{ marginTop: "0.8rem" }}><a href="#fast-facts" className="toc-link"><span style={{ fontWeight: 700, color: "var(--mag-accent)" }}>→</span><span className="toc-text" style={{ fontWeight: 600 }}>Fast Facts Table</span></a></li>
            </ul>
          </div>
        </div>

        {/* ── MAIN SECTIONS (alternating magazine layout) ── */}
        <div style={{ margin: "0 2rem" }}>
          {SECTIONS.map((sec, idx) => (
            <div key={idx} id={`section-${sec.num}`} className="mag-card" style={{ marginBottom: "2.5rem", borderRadius: "20px", overflow: "hidden" }}>
              <div style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "1fr 0.9fr" : "0.9fr 1fr", gap: 0 }}>
                {idx % 2 !== 0 && (
                  <div className="img-hover" style={{ minHeight: "320px" }}>
                    <img src={sec.img} alt={sec.imgAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
                <div style={{ padding: "2rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.8rem" }}>
                    <span className="eyebrow">Section {sec.num}</span>
                    <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", color: "var(--mag-muted)", textTransform: "uppercase" }}>{sec.keyword}</span>
                  </div>
                  <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem", lineHeight: 1.2 }}>{sec.title}</h2>
                  {sec.body.split("\n\n").map((para, pi) => (
                    <p key={pi} className={pi === 0 ? "mag-dropcap" : ""} style={{ fontFamily: "var(--mag-sans)", fontSize: "0.9rem", lineHeight: 1.7, color: "var(--mag-ink-light)", marginBottom: "1rem" }}>
                      {para}
                    </p>
                  ))}
                  {sec.internal && (
                    <Link href={sec.internal} style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--mag-accent)", textDecoration: "none", display: "inline-block", marginBottom: "1rem" }}>
                      Related: Read on UpForge →
                    </Link>
                  )}
                  <div className="mag-stat" style={{ margin: "1rem 0" }}>
                    <span style={{ fontSize: "2rem", fontWeight: 800, color: "#FCA5A5", fontFamily: "var(--mag-serif)" }}>{sec.stat.val}</span>
                    <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", color: "rgba(255,255,255,0.7)", textTransform: "uppercase" }}>{sec.stat.label}</span>
                  </div>
                  <div className="mag-insight">
                    <span style={{ fontFamily: "var(--mag-serif)" }}>🔍 {sec.insight}</span>
                  </div>
                </div>
                {idx % 2 === 0 && (
                  <div className="img-hover" style={{ minHeight: "320px" }}>
                    <img src={sec.img} alt={sec.imgAlt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* ── FAST FACTS TABLE ── */}
        <div id="fast-facts" style={{ margin: "3rem 2rem" }}>
          <hr className="mag-hr" />
          <div className="eyebrow" style={{ marginBottom: "0.5rem" }}>⚡ Data Snapshot</div>
          <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1.5rem" }}>Oracle Layoffs 2026: Key Numbers at a Glance</h2>
          <div style={{ border: "1px solid var(--mag-border)", background: "white", padding: "0 1.5rem" }}>
            {FAST_FACTS.map((item, i) => (
              <div key={i} className="fact-row">
                <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", fontWeight: 600, color: "var(--mag-ink)" }}>{item.label}</span>
                <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", color: "var(--mag-ink-light)" }}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RELATED ARTICLES ── */}
        <div style={{ margin: "2rem 2rem 3rem 2rem" }}>
          <hr className="mag-hr" />
          <div className="eyebrow">Further Reading</div>
          <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.5rem", marginBottom: "1.2rem" }}>From the UpForge Archive</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.2rem" }}>
            {RELATED.map((r, i) => (
              <Link key={i} href={`/blog/${r.slug}`} className="related-card" style={{ padding: "1rem", borderRadius: "12px", display: "block" }}>
                <div style={{ fontFamily: "var(--mag-serif)", fontSize: "2rem", fontWeight: 700, color: "var(--mag-accent-glow)" }}>0{i+1}</div>
                <h3 style={{ fontFamily: "var(--mag-serif)", fontSize: "1rem", fontWeight: 700, marginTop: "0.5rem", color: "var(--mag-ink)" }}>{r.title}</h3>
                <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", color: "var(--mag-accent)", marginTop: "0.5rem", display: "inline-block" }}>Read more →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "2px solid var(--mag-ink)", padding: "2rem 2rem 2.5rem", background: "var(--mag-paper)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <span style={{ fontFamily: "var(--mag-serif)", fontSize: "1.4rem", fontWeight: 700 }}>UpForge<span style={{ color: "var(--mag-accent)" }}>.</span>org</span>
              <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", marginTop: "0.5rem", color: "var(--mag-muted)" }}>Deep analysis for founders & investors</p>
            </div>
            <nav style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
                <Link key={lnk.h} href={lnk.h} style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", color: "var(--mag-ink-light)", textDecoration: "none" }}>
                  {lnk.l}
                </Link>
              ))}
            </nav>
          </div>
          <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", marginTop: "2rem", color: "var(--mag-muted)" }}>
            © 2026 UpForge. All data sourced from SEC filings, TD Cowen, CNBC, TNW, Business Standard.
          </p>
        </footer>
      </article>
    </>
  )
}
