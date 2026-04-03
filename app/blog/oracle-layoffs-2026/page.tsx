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
    img:     "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=1200&q=85&auto=format",
    imgAlt:  "Oracle layoffs March 31 2026 termination email employees",
    body: `On March 31, 2026 — the last day of Q1 — Oracle sent termination emails to thousands of employees across the United States, India, Canada, Mexico, and Uruguay. The emails arrived at approximately 6 AM local time from "Oracle Leadership." No prior warning from HR. No conversation with a manager. Access to company systems was cut immediately after the email was opened.

The subject line was clinical: an organisational change. The body informed recipients that their roles had been eliminated and that the day of the email was their final working day. Employees confirmed the cuts in real time on Reddit's r/employeesOfOracle and on the professional forum Blind — entire teams at Oracle's Revenue and Health Sciences (RHS) division and SaaS and Virtual Operations Services (SVOS) unit reported cuts of at least 30%.

Investment bank TD Cowen estimates the total workforce reduction will reach 20,000 to 30,000 employees — roughly 18% of Oracle's global workforce of approximately 162,000 people. Oracle has not officially confirmed the final number, and declined all media requests to comment. What is not in dispute: this is the largest layoff in Oracle's 48-year history, and it is happening while the company has never been more financially valuable on paper.`,
    stat: { val: "30,000", label: "Employees Cut — 18% of Global Workforce" },
    insight: "The 6 AM termination email with immediate system lockout arrived while Oracle was simultaneously reporting a 22% revenue increase and a $553 billion order backlog.",
  },
  {
    num:     "02",
    title:   "Why Oracle Cut 30,000 Jobs While Revenue Was Growing",
    keyword: "Oracle AI Pivot Data Centre Funding",
    img:     "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=85&auto=format",
    imgAlt:  "Oracle AI data centre infrastructure funding 2026",
    body: `The apparent contradiction at the heart of Oracle's layoffs is this: the company just reported quarterly revenue of $17.2 billion — up 22% year on year — and its remaining performance obligations stood at a staggering $553 billion, up 325% year over year. Oracle Cloud Infrastructure revenue alone surged 84% to $4.9 billion. This is not a company in distress.

It is a company that has made an extraordinarily expensive bet — and is cannibalising its present to fund its future. Oracle has committed approximately $50 billion in capital expenditure for fiscal 2026 to build out AI data centres. The $300 billion Stargate contract with OpenAI alone requires infrastructure Oracle does not yet have. To close the gap, Oracle has taken on $58 billion in new debt and is now eliminating tens of thousands of employees to free up an estimated $8 to $10 billion in annual cash flow.

TD Cowen analysts put it plainly: cutting 20,000 to 30,000 employees would generate that free cash flow needed to fund the data centre buildout. Oracle disclosed a $2.1 billion restructuring budget in its March 2026 SEC 10-Q filing. The company is not shrinking. It is restructuring to become an AI infrastructure hyperscaler.`,
    stat: { val: "$553B", label: "Remaining Performance Obligations — 325% YoY Jump" },
    insight: "This is the defining tension of the AI era: companies with record backlogs are cutting their workforces to fund the infrastructure required to fulfil that demand.",
  },
  {
    num:     "03",
    title:   "India: 12,000 Jobs Cut — The Highest Per-Country Impact",
    keyword: "Oracle India Layoffs Bengaluru Hyderabad",
    img:     "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1200&q=85&auto=format",
    imgAlt:  "Oracle India layoffs 2026 Bengaluru Hyderabad tech jobs",
    body: `India has emerged as the country most severely impacted by Oracle's global restructuring. Approximately 12,000 employees in India received termination notices on March 31 — representing roughly 40% of Oracle's Indian workforce of around 30,000. A second round of layoffs is expected within a month, according to employees including one from Oracle's HR department.

The cuts span Oracle's India operations comprehensively. NetSuite's India Development Centre saw reductions across project management and engineering roles. Technical teams in cloud and database units, support, sales, and operations functions were all affected. Recently promoted employees — some promoted weeks before the layoff — were among those let go.

For thousands of Indian professionals working in the United States on H-1B visas, the situation is acutely precarious: US immigration law gives H-1B holders a 60-day grace period to find new employment or leave the country. The returning wave of Indian tech professionals will intensify competition in Bengaluru and Hyderabad's already pressured job markets.`,
    stat: { val: "12,000", label: "Employees Cut in India — Another Round Expected" },
    insight: "The H-1B crisis within Oracle's layoffs is under-reported. Thousands of Indian professionals in the US face not just unemployment but an immigration clock.",
  },
  {
    num:     "04",
    title:   "Oracle Share Price: From Peak to Trough",
    keyword: "Oracle ORCL Share Price Stock Analysis",
    img:     "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=85&auto=format",
    imgAlt:  "Oracle ORCL share price stock market analysis",
    body: `Oracle's stock (NYSE: ORCL) peaked at $345.72 in September 2025, briefly making it one of the most valuable software companies in the world. By March 31, 2026, the stock had lost nearly 57% of its value — falling to around $140 per share — as investors worried about the company's rising debt load and negative free cash flow.

The layoff announcement on March 31 initially pushed the stock up 5%, as markets interpreted the workforce reduction as evidence that management was taking decisive action. By April 2, Oracle shares were trading at approximately $145.94. The stock is now at its cheapest valuation relative to earnings since before the AI boom began.

The bull case: Oracle's $553 billion RPO backlog is real contracted revenue. OCI's 84% revenue growth is accelerating. The bear case: free cash flow is deeply negative (negative $24.7 billion trailing), debt load exceeds $124 billion, and the Stargate deal carries execution risk.`,
    stat: { val: "-57%", label: "Stock Decline From Sept 2025 Peak of $345 to ~$145" },
    insight: "The market is treating Oracle as a company in transition. The question is whether its $553 billion backlog represents gold or a mirage.",
  },
  {
    num:     "05",
    title:   "Who Got Cut — and What Roles Survived",
    keyword: "Oracle Layoffs Which Departments Teams",
    img:     "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85&auto=format",
    imgAlt:  "Oracle layoffs which departments teams were cut",
    body: `Oracle's restructuring was not random. The cuts followed a clear logic: roles in traditional business areas not aligned with AI faced the deepest reductions, while technical talent in cloud architecture, AI, and security was largely retained.

The hardest-hit divisions were Oracle's Revenue and Health Sciences (RHS) unit and its SaaS and Virtual Operations Services (SVOS) group — both saw at least 30% workforce reductions. Support, sales, and operations functions tied to legacy on-premise database products also saw significant cuts. NetSuite's India Development Centre lost employees across project management and engineering.

What survived: Oracle's OCI engineering teams, data centre operations, AI platform development, and security divisions were largely protected. The global cybersecurity talent gap stands at 4.8 million unfilled positions. If you were laid off from Oracle's security stack, recruiters are already reaching out.`,
    stat: { val: "30%+", label: "Workforce Reduction in RHS and SVOS Divisions" },
    insight: "Oracle is not becoming a smaller company. It is becoming a different company — one where cloud infrastructure engineers are the core headcount.",
  },
  {
    num:     "06",
    title:   "What Oracle's Layoffs Say About the AI Economy",
    keyword: "Tech Layoffs AI Economy Oracle Meta Amazon",
    img:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=85&auto=format",
    imgAlt:  "AI economy tech layoffs automation workforce impact",
    body: `Oracle's mass layoff did not happen in isolation. It is part of a coherent pattern across the technology industry in 2026: companies are simultaneously reporting record revenues, announcing record AI infrastructure investments, and cutting tens of thousands of jobs. Meta, Amazon, and Block have all made significant cuts this year.

Oracle's cuts are particularly revealing because of what they say about the economics of the AI transition. The company is not cutting because it has fewer customers or less revenue. It is cutting because the work required to serve its new customers — building and operating AI data centres at hyperscale — is fundamentally different.

For workers, the message is clear: roles in traditional enterprise software support face structural pressure. Roles in cloud infrastructure, cybersecurity, and AI platform development face growing demand. The skill gap between what companies need and what their workforces provide is widening.`,
    stat: { val: "$8–10B", label: "Annual Cash Flow Freed — Redirected to AI Data Centres" },
    insight: "The most important question is what happens to the 30,000 people who built the company that generated the cash Oracle is now deploying.",
  },
  {
    num:     "07",
    title:   "What Displaced Oracle Employees Should Do Right Now",
    keyword: "Oracle Layoff Next Steps Jobs Severance",
    img:     "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=1200&q=85&auto=format",
    imgAlt:  "Oracle laid off employees next steps jobs 2026",
    body: `If you received the Oracle termination email, the first 72 hours matter disproportionately. Review your severance agreement carefully before signing. Oracle's severance offer is contingent on signing separation paperwork. The WARN Act in the US requires 60 days advance notice for qualifying mass layoffs. If Oracle classified you as a remote worker to avoid WARN requirements, consult an employment attorney.

File for unemployment benefits the day after your last paycheck. If you are in the US on an H-1B visa, your 60-day grace period begins at the end of your last day of employment. Update your LinkedIn profile immediately and reach out to recruiters in cybersecurity, cloud infrastructure, and AI platform development.

For Indian professionals returning to India: Bengaluru and Hyderabad markets are absorbing significant Oracle talent. Indian startups building cloud infrastructure and AI tools are actively hiring — and Oracle's experience is genuinely valued.`,
    stat: { val: "4.8M", label: "Global Cybersecurity Roles Unfilled — Highest Demand" },
    insight: "Oracle's security, cloud infrastructure, and database engineering talent is walking into a seller's market. Update your profile today.",
  },
]

const FAST_FACTS = [
  { label: "Date of Layoffs",       value: "March 31, 2026"                        },
  { label: "Estimated Jobs Cut",    value: "20,000 – 30,000 (TD Cowen est.)"        },
  { label: "% of Global Workforce", value: "~18% of 162,000 employees"              },
  { label: "India Impact",          value: "~12,000 cut; another round expected"    },
  { label: "Restructuring Budget",  value: "$2.1B (SEC 10-Q, March 2026)"           },
  { label: "Cash Flow Freed",       value: "$8B – $10B annually"         },
  { label: "Oracle Stock (ORCL)",   value: "~$145 (down 57% from $345)"  },
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
// PREMIUM NEWSPAPER / MAGAZINE CSS — Clean, editorial, iconic, fully responsive
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  :root {
    --news-bg: #FEFCF8;
    --news-white: #FFFFFF;
    --news-ink: #1A1814;
    --news-ink-light: #3C3730;
    --news-muted: #8A8378;
    --news-border: #E8E3D9;
    --news-accent: #C52828;
    --news-accent-light: #E05A5A;
    --news-accent-glow: #FEF2F2;
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
// PAGE COMPONENT — Pure magazine content, fully responsive
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

      <article className="newspaper-container" itemScope itemType="https://schema.org/NewsArticle">

        {/* ── TOP DATE LINE / NEWSPAPER STYLE ── */}
        <div className="fade-up" style={{ padding: "2rem 1.5rem 0.5rem 1.5rem", borderBottom: "2px solid var(--news-ink)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: "0.5rem", fontFamily: "var(--news-sans)", fontSize: "0.7rem", letterSpacing: "0.05em", color: "var(--news-muted)", textTransform: "uppercase" }}>
            <span>VOL. III · SPECIAL REPORT</span>
            <span>FRIDAY, APRIL 3, 2026</span>
            <span>EDITION: INDIA + GLOBAL TECH</span>
          </div>
        </div>

        {/* ── BREAKING NEWS FLAG ── */}
        <div className="fade-up delay-1" style={{ margin: "1rem 1.5rem 0 1.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", background: "var(--news-accent)", color: "white", padding: "0.3rem 1rem", fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em" }}>
            <span style={{ width: 8, height: 8, background: "white", borderRadius: "50%", display: "inline-block", animation: "pulse 1.2s infinite" }}></span>
            BREAKING NEWS
          </div>
          <p style={{ fontFamily: "var(--news-sans)", fontSize: "0.75rem", marginTop: "0.5rem", color: "var(--news-ink-light)", borderLeft: "2px solid var(--news-accent)", paddingLeft: "0.8rem" }}>
            Updated April 3, 2026 — Oracle layoffs ongoing; second India round expected within 30 days. 12,000 jobs confirmed in India.
          </p>
        </div>

        {/* ── HERO HEADLINE ── */}
        <div className="fade-up delay-1" style={{ margin: "1.5rem 1.5rem 0 1.5rem" }}>
          <div className="img-responsive" style={{ marginBottom: "1.5rem", borderRadius: "2px", overflow: "hidden" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} style={{ width: "100%", maxHeight: "480px", objectFit: "cover" }} />
          </div>
          <div style={{ maxWidth: "880px" }}>
            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "0.8rem", flexWrap: "wrap" }}>
              <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", color: "var(--news-accent)", textTransform: "uppercase" }}>TECH · LAYOFFS · AI ECONOMY</span>
            </div>
            <h1 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", color: "var(--news-ink)", marginBottom: "0.8rem" }}>
              Oracle Layoffs 2026: <span style={{ color: "var(--news-accent)" }}>30,000 Jobs, One Email, No Warning</span>
            </h1>
            <p style={{ fontFamily: "var(--news-serif)", fontSize: "1.1rem", lineHeight: 1.5, color: "var(--news-ink-light)", fontStyle: "italic", borderLeft: "3px solid var(--news-accent)", paddingLeft: "1rem" }}>
              The biggest workforce reduction in Oracle's 48-year history — and what it reveals about the real cost of the AI era.
            </p>
          </div>
          {/* byline and meta */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1.8rem", marginTop: "1.5rem", paddingTop: "1rem", borderTop: "1px solid var(--news-border)", fontFamily: "var(--news-sans)", fontSize: "0.7rem", color: "var(--news-muted)" }}>
            <span>📅 PUBLISHED: 3 APRIL 2026</span>
            <span>⏱️ READING TIME: {POST.readTime}</span>
            <span>👥 JOBS AFFECTED: UP TO 30,000</span>
            <span>📊 ORCL: ~$145 (−57% YTD)</span>
          </div>
        </div>

        {/* ── INTRO + TOC — stacked on mobile, side-by-side on desktop ── */}
        <div className="fade-up delay-2" style={{ margin: "2.5rem 1.5rem 0 1.5rem", display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
          {/* Intro text - full width on mobile, then TOC below */}
          <div>
            <div className="dropcap" style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)" }}>
              On March 31, 2026, Oracle sent termination emails to up to 30,000 employees before breakfast. The company had never cut this many people in its 48-year history. It also had never had a $553 billion order backlog before.
            </div>
            <p style={{ fontFamily: "var(--news-sans)", fontSize: "0.95rem", lineHeight: 1.7, color: "var(--news-ink-light)", marginTop: "1rem" }}>
              This is the full story: what happened on the day of the layoffs, why Oracle made the decision, what it means for its share price, and what 30,000 displaced employees — including 12,000 in India — should do right now. UpForge covers the Indian startup ecosystem, the global forces that shape it, and the founders who navigate both.
            </p>
          </div>
          
          {/* TOC - full width on mobile, styled as a clean card */}
          <div style={{ background: "var(--news-white)", border: "1px solid var(--news-border)", padding: "1rem 1.2rem", width: "100%" }}>
            <div style={{ fontFamily: "var(--news-sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", color: "var(--news-accent)", marginBottom: "0.8rem", textTransform: "uppercase" }}>IN THIS REPORT</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "0.5rem" }}>
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.num} style={{ marginBottom: "0.5rem" }}>
                  <a href={`#section-${s.num}`} style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px", fontFamily: "var(--news-sans)", fontSize: "0.7rem", color: "var(--news-ink)" }}>
                    <span style={{ fontWeight: 700, color: "var(--news-accent)", minWidth: "28px" }}>{s.num}</span>
                    <span>{s.title.substring(0, 45)}</span>
                  </a>
                </li>
              ))}
              <li style={{ marginTop: "0.6rem", paddingTop: "0.5rem", borderTop: "1px solid var(--news-border)" }}>
                <a href="#fast-facts" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px", fontFamily: "var(--news-sans)", fontSize: "0.7rem", fontWeight: 600, color: "var(--news-ink)" }}>
                  <span style={{ color: "var(--news-accent)" }}>→</span>
                  <span>Fast Facts Table</span>
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
                  <span style={{ fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 800, fontFamily: "var(--news-serif)", color: "#FCA5A5" }}>{sec.stat.val}</span>
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
            <h2 style={{ fontFamily: "var(--news-serif)", fontSize: "clamp(1.4rem, 4vw, 1.8rem)", fontWeight: 700, marginBottom: "1rem" }}>Oracle Layoffs 2026: Key Numbers</h2>
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
                  <div style={{ fontFamily: "var(--news-serif)", fontSize: "1.8rem", fontWeight: 700, color: "rgba(197,40,40,0.15)" }}>0{i+1}</div>
                  <h3 style={{ fontFamily: "var(--news-serif)", fontSize: "0.9rem", fontWeight: 700, marginTop: "0.5rem", color: "var(--news-ink)" }}>{r.title}</h3>
                  <span style={{ fontFamily: "var(--news-sans)", fontSize: "0.6rem", color: "var(--news-accent)", marginTop: "0.5rem", display: "inline-block", letterSpacing: "0.05em" }}>READ MORE →</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

      </article>
    </>
  )
}
