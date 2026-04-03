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
// PREMIUM MAGAZINE CSS — Full editorial layout, elegant, clean, iconic
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  :root {
    --mag-bg: #FDFAF5;
    --mag-white: #FFFFFF;
    --mag-ink: #1C1917;
    --mag-ink-light: #44403C;
    --mag-muted: #78716C;
    --mag-border: #E7E5E4;
    --mag-border-light: #F1EFEC;
    --mag-accent: #B91C1C;
    --mag-accent-light: #DC2626;
    --mag-accent-glow: #FEF2F2;
    --mag-gold: #B45309;
    --mag-serif: 'Cormorant Garamond', 'Playfair Display', Georgia, 'Times New Roman', serif;
    --mag-sans: 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif;
    --mag-sans-alt: 'Source Serif Pro', Georgia, serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: #E8E4DF;
  }

  .mag-wrapper {
    max-width: 1120px;
    margin: 0 auto;
    background: var(--mag-bg);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade { animation: fadeUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
  .delay-1 { animation-delay: 0.08s; }
  .delay-2 { animation-delay: 0.16s; }
  .delay-3 { animation-delay: 0.24s; }

  .dropcap-large::first-letter {
    font-family: var(--mag-serif);
    font-size: 4rem;
    font-weight: 700;
    float: left;
    line-height: 0.75;
    margin-right: 14px;
    margin-top: 6px;
    color: var(--mag-accent);
    letter-spacing: -0.02em;
  }

  .magazine-headline {
    font-family: var(--mag-serif);
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.15;
  }

  .pull-quote {
    font-family: var(--mag-serif);
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.35;
    color: var(--mag-ink);
    border-left: 4px solid var(--mag-accent);
    padding-left: 1.8rem;
    margin: 2rem 0;
  }

  .stat-card {
    background: var(--mag-ink);
    color: white;
    padding: 1.5rem 2rem;
    margin: 1.5rem 0;
    display: flex;
    align-items: baseline;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .insight-block {
    background: var(--mag-accent-glow);
    border-left: 4px solid var(--mag-accent);
    padding: 1.2rem 1.5rem;
    font-family: var(--mag-serif);
    font-style: italic;
    font-size: 1rem;
    color: var(--mag-ink-light);
    margin: 1.5rem 0;
  }

  .img-full {
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
  }
  .img-full img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.6s ease;
  }
  .img-full:hover img {
    transform: scale(1.01);
  }

  .byline {
    font-family: var(--mag-sans);
    font-size: 0.7rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--mag-muted);
  }

  .section-number {
    font-family: var(--mag-serif);
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--mag-accent);
    letter-spacing: 0.1em;
  }

  hr.mag-rule {
    border: none;
    height: 1px;
    background: linear-gradient(90deg, var(--mag-border), transparent);
    margin: 2.5rem 0;
  }

  @media (max-width: 768px) {
    .pull-quote { font-size: 1.2rem; padding-left: 1.2rem; }
    .stat-card { padding: 1rem 1.2rem; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT — Full Magazine Layout
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

      <article className="mag-wrapper" itemScope itemType="https://schema.org/NewsArticle">

        {/* ── TOP BAR / BRANDING ── */}
        <div className="animate-fade" style={{ padding: "2rem 2.5rem 1rem 2.5rem", borderBottom: "1px solid var(--mag-border)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div className="byline" style={{ marginBottom: "4px" }}>Presented by</div>
              <div style={{ fontFamily: "var(--mag-serif)", fontSize: "2rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                UpForge<span style={{ color: "var(--mag-accent)" }}>.</span>org
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.2rem" }}>
              <span className="byline">Magazine</span>
              <span className="byline">Deep Dive</span>
              <span className="byline">April 2026</span>
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <span className="byline">
              <Link href="/" style={{ color: "var(--mag-muted)", textDecoration: "none" }}>Home</Link> /{" "}
              <Link href="/blog" style={{ color: "var(--mag-muted)", textDecoration: "none" }}>Blog</Link> /{" "}
              <span style={{ color: "var(--mag-ink)", fontWeight: 600 }}>Oracle Layoffs 2026</span>
            </span>
          </div>
        </div>

        {/* ── BREAKING BANNER ── */}
        <div className="animate-fade delay-1" style={{ margin: "1.5rem 2.5rem 0 2.5rem", background: "var(--mag-accent-glow)", border: "1px solid rgba(185,28,28,0.15)", padding: "0.75rem 1.25rem", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
          <span style={{ background: "var(--mag-accent)", color: "white", fontSize: "0.65rem", fontWeight: 700, padding: "2px 10px", borderRadius: "20px", letterSpacing: "0.1em" }}>BREAKING</span>
          <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", fontWeight: 500, color: "var(--mag-ink)" }}>Updated April 3, 2026 — Oracle layoffs ongoing; second India round expected within 30 days</span>
        </div>

        {/* ── HERO SECTION ── */}
        <div className="animate-fade delay-1" style={{ margin: "2rem 2.5rem 0 2.5rem" }}>
          <div className="img-full" style={{ borderRadius: "8px" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} style={{ width: "100%", maxHeight: "520px", objectFit: "cover" }} />
          </div>
          <div style={{ marginTop: "2rem", maxWidth: "860px" }}>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem", flexWrap: "wrap" }}>
              <span className="byline" style={{ color: "var(--mag-accent)", fontWeight: 600 }}>TECH INDUSTRY</span>
              <span className="byline">BREAKING NEWS</span>
              <span className="byline">AI ECONOMY</span>
            </div>
            <h1 className="magazine-headline" style={{ fontSize: "clamp(2.2rem, 6vw, 4rem)", marginBottom: "1rem" }}>
              Oracle Layoffs 2026: <span style={{ color: "var(--mag-accent)" }}>30,000 Jobs, One Email, No Warning</span>
            </h1>
            <p style={{ fontFamily: "var(--mag-sans-alt)", fontSize: "1.1rem", lineHeight: 1.6, color: "var(--mag-ink-light)", borderLeft: "3px solid var(--mag-accent)", paddingLeft: "1.2rem", fontStyle: "italic" }}>
              The biggest workforce reduction in Oracle's 48-year history — and what it reveals about the real cost of the AI era.
            </p>
          </div>
          {/* Meta info bar */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", marginTop: "1.8rem", paddingTop: "1.2rem", borderTop: "1px solid var(--mag-border)" }}>
            <div><span className="byline">PUBLISHED</span><div style={{ fontWeight: 600 }}>3 April 2026</div></div>
            <div><span className="byline">READING TIME</span><div style={{ fontWeight: 600 }}>{POST.readTime}</div></div>
            <div><span className="byline">JOBS AFFECTED</span><div style={{ fontWeight: 600 }}>Up to 30,000</div></div>
            <div><span className="byline">ORCL TODAY</span><div style={{ fontWeight: 600 }}>~$145 (−57% YTD)</div></div>
          </div>
        </div>

        {/* ── INTRO + TOC (full width magazine style) ── */}
        <div className="animate-fade delay-2" style={{ margin: "3rem 2.5rem 0 2.5rem", display: "grid", gridTemplateColumns: "1fr 260px", gap: "3rem" }}>
          <div>
            <div className="byline" style={{ marginBottom: "0.8rem" }}>THE STORY BEHIND THE HEADLINES</div>
            <div className="dropcap-large" style={{ fontFamily: "var(--mag-sans-alt)", fontSize: "1rem", lineHeight: 1.7, color: "var(--mag-ink-light)" }}>
              On March 31, 2026, Oracle sent termination emails to up to 30,000 employees before breakfast. The company had never cut this many people in its 48-year history. It also had never had a $553 billion order backlog before.
            </div>
            <p style={{ fontFamily: "var(--mag-sans-alt)", fontSize: "1rem", lineHeight: 1.7, color: "var(--mag-ink-light)", marginTop: "1rem" }}>
              This is the full story: what happened on the day of the layoffs, why Oracle made the decision, what it means for its share price, and what 30,000 displaced employees — including 12,000 in India — should do right now. UpForge covers the Indian startup ecosystem, the global forces that shape it, and the founders who navigate both.
            </p>
          </div>
          <div style={{ background: "var(--mag-white)", border: "1px solid var(--mag-border)", padding: "1.2rem 1.5rem", borderRadius: "4px" }}>
            <div className="byline" style={{ marginBottom: "1rem", color: "var(--mag-accent)" }}>IN THIS REPORT</div>
            <ul style={{ listStyle: "none" }}>
              {SECTIONS.slice(0, 6).map((s) => (
                <li key={s.num} style={{ marginBottom: "0.6rem" }}>
                  <a href={`#section-${s.num}`} style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px" }}>
                    <span style={{ fontFamily: "var(--mag-serif)", fontSize: "0.7rem", fontWeight: 700, color: "var(--mag-accent)", minWidth: "28px" }}>{s.num}</span>
                    <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.75rem", color: "var(--mag-ink)", transition: "color 0.15s" }}>{s.title.substring(0, 45)}</span>
                  </a>
                </li>
              ))}
              <li style={{ marginTop: "0.8rem", paddingTop: "0.5rem", borderTop: "1px solid var(--mag-border)" }}>
                <a href="#fast-facts" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ color: "var(--mag-accent)", fontWeight: 700 }}>→</span>
                  <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.75rem", fontWeight: 600, color: "var(--mag-ink)" }}>Fast Facts Table</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ── MAIN ARTICLES — Full magazine vertical flow ── */}
        <div style={{ margin: "2.5rem 2.5rem 0 2.5rem" }}>
          {SECTIONS.map((sec, idx) => (
            <div key={idx} id={`section-${sec.num}`} style={{ marginBottom: "3.5rem" }}>
              {/* Full width image at top of each section */}
              <div className="img-full" style={{ marginBottom: "1.5rem", borderRadius: "4px" }}>
                <img src={sec.img} alt={sec.imgAlt} style={{ maxHeight: "420px", objectFit: "cover", width: "100%" }} />
              </div>
              
              <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
                  <span className="section-number">Section {sec.num}</span>
                  <span style={{ flex: 1, height: "1px", background: "var(--mag-border)" }} />
                  <span className="byline">{sec.keyword}</span>
                </div>
                
                <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "clamp(1.6rem, 4vw, 2.2rem)", fontWeight: 700, marginBottom: "1.2rem", letterSpacing: "-0.01em" }}>
                  {sec.title}
                </h2>
                
                {sec.body.split("\n\n").map((para, pi) => (
                  <p key={pi} className={pi === 0 ? "dropcap-large" : ""} style={{ fontFamily: "var(--mag-sans-alt)", fontSize: "1rem", lineHeight: 1.7, color: "var(--mag-ink-light)", marginBottom: "1rem" }}>
                    {para}
                  </p>
                ))}
                
                <div className="stat-card">
                  <span style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 800, fontFamily: "var(--mag-serif)", color: "#FCA5A5" }}>{sec.stat.val}</span>
                  <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.75rem", letterSpacing: "0.05em", textTransform: "uppercase", opacity: 0.8 }}>{sec.stat.label}</span>
                </div>
                
                <div className="insight-block">
                  <span style={{ fontFamily: "var(--mag-serif)" }}>✦ {sec.insight}</span>
                </div>
              </div>
              <hr className="mag-rule" />
            </div>
          ))}
        </div>

        {/* ── FAST FACTS TABLE (full width clean) ── */}
        <div id="fast-facts" style={{ margin: "1rem 2.5rem 2rem 2.5rem" }}>
          <div style={{ maxWidth: "860px", margin: "0 auto" }}>
            <div className="byline" style={{ marginBottom: "0.5rem", color: "var(--mag-accent)" }}>⚡ DATA SNAPSHOT</div>
            <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.8rem", fontWeight: 700, marginBottom: "1.5rem" }}>Oracle Layoffs 2026: Key Numbers at a Glance</h2>
            <div style={{ background: "var(--mag-white)", border: "1px solid var(--mag-border)", padding: "0 1.8rem" }}>
              {FAST_FACTS.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.9rem 0", borderBottom: i === FAST_FACTS.length - 1 ? "none" : "1px solid var(--mag-border)", gap: "1rem" }}>
                  <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", fontWeight: 600, color: "var(--mag-ink)" }}>{item.label}</span>
                  <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.8rem", color: "var(--mag-ink-light)", textAlign: "right" }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── RELATED READING ── */}
        <div style={{ margin: "3rem 2.5rem 2.5rem 2.5rem" }}>
          <hr className="mag-rule" />
          <div className="byline" style={{ marginBottom: "0.5rem" }}>FURTHER READING</div>
          <h2 style={{ fontFamily: "var(--mag-serif)", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1.5rem" }}>From the UpForge Archive</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {RELATED.map((r, i) => (
              <Link key={i} href={`/blog/${r.slug}`} style={{ textDecoration: "none", background: "var(--mag-white)", border: "1px solid var(--mag-border)", padding: "1rem", borderRadius: "4px", transition: "all 0.2s" }}>
                <div style={{ fontFamily: "var(--mag-serif)", fontSize: "2rem", fontWeight: 700, color: "rgba(185,28,28,0.15)" }}>0{i+1}</div>
                <h3 style={{ fontFamily: "var(--mag-serif)", fontSize: "1rem", fontWeight: 700, marginTop: "0.5rem", color: "var(--mag-ink)" }}>{r.title}</h3>
                <span style={{ fontFamily: "var(--mag-sans)", fontSize: "0.65rem", color: "var(--mag-accent)", marginTop: "0.5rem", display: "inline-block", letterSpacing: "0.05em" }}>READ MORE →</span>
              </Link>
            ))}
          </div>
        </div>

        {/* ── FOOTER ── */}
        <footer style={{ borderTop: "2px solid var(--mag-ink)", marginTop: "2rem", padding: "2rem 2.5rem 2.5rem", background: "var(--mag-white)" }}>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "1.5rem" }}>
            <div>
              <div style={{ fontFamily: "var(--mag-serif)", fontSize: "1.6rem", fontWeight: 700 }}>UpForge<span style={{ color: "var(--mag-accent)" }}>.</span>org</div>
              <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", marginTop: "0.5rem", color: "var(--mag-muted)" }}>Deep analysis for founders & investors</p>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
                <Link key={lnk.h} href={lnk.h} style={{ fontFamily: "var(--mag-sans)", fontSize: "0.7rem", color: "var(--mag-ink-light)", textDecoration: "none" }}>
                  {lnk.l}
                </Link>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: "var(--mag-sans)", fontSize: "0.6rem", marginTop: "2rem", color: "var(--mag-muted)", borderTop: "1px solid var(--mag-border)", paddingTop: "1rem" }}>
            © 2026 UpForge. All data sourced from SEC filings, TD Cowen, CNBC, TNW, Business Standard.
          </p>
        </footer>
      </article>
    </>
  )
}
