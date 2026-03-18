// app/blog/how-to-start-startup-india-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Pattern: identical to app/blog/india-startup-ecosystem-2026/page.tsx
// Same SECTIONS data structure, same blog-card layout, same CSS, same imports.
// Target keywords: "how to start a startup in India",
//                  "startup guide India 2026", "business startup steps India"
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
  slug:          "how-to-start-startup-india-2026",
  title:         "How to Start a Startup in India (Step-by-Step Guide 2026)",
  description:   "A complete beginner's guide to starting a startup in India in 2026. From finding an idea to raising funding — step-by-step with real Indian startup examples, DPIIT registration, and expert insights.",
  keywords: [
    "how to start a startup in India",
    "startup guide India 2026",
    "business startup steps India",
    "how to register a startup in India",
    "startup India DPIIT registration",
    "how to raise startup funding India",
    "startup idea validation India",
    "MVP startup India",
    "Indian startup ecosystem beginner guide",
    "how to build a startup India",
    "startup registration process India",
    "startup funding India first round",
  ],
  datePublished: "2026-03-01",
  dateModified:  "2026-03-18",
  readTime:      "14 min",
  category:      "Founder Playbook",
  heroImage:     "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=85&auto=format",
  heroImageAlt:  "How to Start a Startup in India 2026 — Step by Step Guide by UpForge",
  wordCount:     3800,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS — 7 steps + 1 closing section, alternating image sides
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    num:     "01",
    title:   "Step 1: Find an Idea Worth Solving",
    keyword: "Startup Idea India 2026",
    img:     "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=900&q=80&auto=format",
    imgAlt:  "Startup idea brainstorming India 2026",
    body: `Every startup begins with a problem. Not an idea — a problem. The founders who succeed in India are almost always the ones who have personally experienced what they are building for. Aadit Palicha experienced grocery delivery frustration before Zepto. Nithin Kamath felt the friction of stock investing before Zerodha. Alakh Pandey knew what it felt like to be unable to afford coaching before PhysicsWallah.

The best startup ideas in India in 2026 come from one of three places: inefficiencies you have personally experienced and know deeply, large markets where the existing solution is shockingly bad (healthcare, agriculture, logistics, education), or problems that the India Stack infrastructure of UPI + Aadhaar + Account Aggregator has newly made technically solvable.

When evaluating your idea, ask three questions: Is this a vitamin (nice to have) or a painkiller (must have)? Does the Indian market — not the US market — have this problem at significant scale? And is there a reason this startup has to be built now, in 2026, that would not have been true in 2020? If you cannot answer all three convincingly, keep looking.`,
    stat: { val: "1,300+", label: "New Startups Registered in India Every Single Month" },
    insight: "The question is not 'is this a good idea?' The question is 'why will this work in India, at India's scale, given India's specific constraints?' That second question filters out 90% of ideas before you waste a year on them.",
    internal: null,
  },
  {
    num:     "02",
    title:   "Step 2: Validate Before You Build",
    keyword: "Startup Idea Validation India",
    img:     "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=900&q=80&auto=format",
    imgAlt:  "Startup idea validation customer interviews India",
    body: `The fastest way to fail is to build a product nobody wants. The second fastest way is to assume that because your friends thought your idea was interesting, real customers will pay for it. Validation is the hardest discipline for first-time founders because it requires actively seeking evidence that you are wrong.

The validation framework that works in India in 2026: Start with 20–30 deep customer interviews. Not surveys — actual 45-minute conversations with the people you want to serve. Ask them about the problem, not your solution. Ask how they currently solve it, what they pay, how often they face it. If fewer than 15 of your 30 conversations reveal genuine pain — significant time, money, or frustration lost to this problem — your idea needs to change.

Then build a pre-launch landing page and run ₹5,000–10,000 worth of Google or Meta ads targeting your ideal customer. Measure click-through rate and email signups. This is not about traffic — it is about whether your framing of the problem resonates. Meesho ran proto-experiments through WhatsApp groups before building their app. Groww used manual Excel sheets to onboard their first 50 investors before writing a line of app code. Validation is not a phase you complete — it is a mindset you maintain forever.`,
    stat: { val: "90%", label: "Startups That Fail Due to No Market Need — CB Insights" },
    insight: "The best founders in India treat every assumption as a hypothesis to be killed. Zepto failed once before succeeding. CRED ran pilots before scaling. Validation is not a delay — it is the work.",
    internal: null,
  },
  {
    num:     "03",
    title:   "Step 3: Build Your MVP",
    keyword: "MVP Startup Build India 2026",
    img:     "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=80&auto=format",
    imgAlt:  "Building startup MVP product India",
    body: `The Minimum Viable Product is the version of your product that does exactly one thing well enough that a real customer would pay you (or use you meaningfully) for it. Nothing more. The instinct of first-time founders is to build the full product. The discipline of experienced founders is to find the absolute minimum slice of value and deliver that perfectly.

India has specific MVP constraints worth understanding. Most of your customers will first encounter your product on a mobile phone, often a low-end Android device with intermittent connectivity. If your MVP is an iOS app or requires a fast internet connection to function, you have already excluded 80% of your potential market. Think WhatsApp-first, voice-friendly, low-bandwidth-tolerant.

The best MVPs in Indian startup history were embarrassingly simple: Zepto's MVP was a WhatsApp group for grocery orders. Dunzo's MVP was a spreadsheet of nearby stores and a human coordinator on WhatsApp. BYJU'S first product was an offline video-on-USB service. Simplicity is not a compromise — it is a competitive advantage. The faster you can put something in front of real users, the faster you learn what actually needs to exist.

Use Indian developer platforms where possible: Supabase for backend, Vercel for frontend, Razorpay for payments, Exotel for telephony. The cost of building an MVP in India in 2026 is lower than it has ever been — a capable two-person team can ship a working product in 8–12 weeks with less than ₹5 lakh in infrastructure costs.`,
    stat: { val: "8–12 Weeks", label: "Time to Ship a Working MVP With a 2-Person Indian Tech Team" },
    insight: "Your MVP should be so simple that you are almost embarrassed to show it. If you are not embarrassed, you waited too long.",
    internal: null,
  },
  {
    num:     "04",
    title:   "Step 4: Register Your Company",
    keyword: "How to Register Startup India DPIIT 2026",
    img:     "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=900&q=80&auto=format",
    imgAlt:  "Startup company registration India DPIIT 2026",
    body: `In India, the dominant legal structure for fundable startups is a Private Limited Company (Pvt Ltd) — not a proprietorship, not a partnership, not an LLP. The reason is simple: only Pvt Ltd companies can issue equity shares to investors, which is the foundation of the entire venture funding ecosystem.

The registration process in 2026 is faster than ever. Via the MCA21 portal (mca.gov.in), a Pvt Ltd company can be incorporated in 7–10 business days with two directors, a registered office address, and ₹8,000–15,000 in government fees. Most founders use a CA (Chartered Accountant) for ₹10,000–20,000 to handle the full process — worth every rupee.

DPIIT Recognition is the next critical step. After incorporating, apply for DPIIT (Department for Promotion of Industry and Internal Trade) recognition through the Startup India portal. Benefits are substantial: a three-year income tax holiday, exemption from angel tax on qualifying investments up to ₹25 crore, faster IP registration with 80% rebate on patent filing fees, and access to the ₹10,000 crore Fund of Funds for Startups (FFS) via SIDBI. The DPIIT application is free and typically processed in 2–4 weeks. As of 2026, over 140,000 startups have received DPIIT recognition.

Open a current account with a startup-friendly bank (HDFC, RazorpayX, or Jupiter Business) and set up your GST registration if your revenue will exceed ₹20 lakh annually or if you are selling digital services. GST registration is done through gstin.gov.in and takes 3–7 days.`,
    stat: { val: "140,000+", label: "DPIIT-Recognised Startups in India — Tax Benefits Unlocked" },
    insight: "Registration is not bureaucracy — it is the first act of treating your startup like a real company. The three-year tax holiday and angel tax exemption from DPIIT recognition have saved Indian startups thousands of crores collectively.",
    internal: null,
  },
  {
    num:     "05",
    title:   "Step 5: Get Your First 100 Users",
    keyword: "How to Get First Users Startup India",
    img:     "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format",
    imgAlt:  "Startup first users growth India 2026",
    body: `The difference between a startup and a hobby is whether people you don't know use your product. Getting the first 100 users is the hardest growth problem you will solve — harder than going from 100 to 10,000 — because you have no word-of-mouth, no reviews, no social proof, and often no budget.

In India in 2026, the most reliable channels for getting first users are: personal network (do not underestimate — your college WhatsApp group, your LinkedIn, your ex-colleagues), tier-specific communities (Reddit's r/India and r/IndiaInvestments, LinkedIn for B2B SaaS, local Facebook groups for hyperlocal consumer products), content marketing in Hindi or a regional language (most startup content is in English — there is a significant opportunity gap), and cold outreach.

The advice that works in Silicon Valley — "post on Product Hunt" — often does not translate to India. Your first 100 users are not going to come from a global launch. They are going to come from you personally going to the people who have the problem and persuading them to try your solution. Meesho's founders recruited their first sellers by physically visiting Jaipur's wholesale markets. Rapido's first captains were recruited from Bengaluru's local bike owner WhatsApp groups. Getting to 100 users is a sales problem, not a marketing problem.

The metrics that matter at this stage are not vanity metrics (downloads, signups) but engagement metrics: Do users come back? How often? What is your Day-7 retention? For Indian consumer apps, Day-7 retention above 25% is healthy. Below 15% means the product needs significant work before any paid acquisition.`,
    stat: { val: "Day-7 25%+", label: "Healthy Retention Benchmark for Indian Consumer Apps" },
    insight: "The founders who get their first 100 users fastest are the ones who never stop doing things that don't scale. Zepto's founders personally managed delivery routes. CRED's team manually approved every early member. Do the unscalable things until you understand what the scalable thing needs to be.",
    internal: "/startup",
  },
  {
    num:     "06",
    title:   "Step 6: Raise Your First Round of Funding",
    keyword: "How to Raise Startup Funding India 2026",
    img:     "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=900&q=80&auto=format",
    imgAlt:  "Startup funding raise India angel investor VC 2026",
    body: `Raising funding is not the goal — it is a tool. The best founders raise money to accelerate something that is already working, not to figure out whether something will work. If your MVP is live, you have 100+ active users, and you have evidence of retention and early revenue (or a clear path to it), you are fundable at pre-seed or seed stage in India.

The Indian funding landscape in 2026 has multiple entry points. Friends, family, and angels: typically ₹25 lakh – ₹1 crore for 5–10% equity. Reach out to successful founders from your sector (many actively angel invest), use platforms like LetsVenture, Ah! Ventures, and Indian Angel Network, and leverage LinkedIn. Accelerators: Y Combinator (accepts Indian companies), Sequoia Surge, Antler India, and Blume Ventures Stellaris early-stage programme all provide ₹60 lakh – ₹1.5 crore with mentorship and VC introductions in exchange for 7–10%.

Seed funding (₹2–8 crore): This is where institutional investors participate — Blume, 3one4, Stellaris, Kalaari, Better Capital, Lightspeed India, and dozens of others. At this stage, you need demonstrable traction: consistent monthly growth (10–15% month-on-month for at least 3–4 months), clear unit economics, and a team with a credible reason to win.

The DPIIT's Fund of Funds for Startups (FFS), managed through SIDBI, provides capital to SEBI-registered AIFs (Alternative Investment Funds) which then invest in Indian startups. Accessing this indirectly (through AIF investment) is one of the most overlooked sources of early capital for startups outside major metro ecosystems.`,
    stat: { val: "₹2–8Cr", label: "Typical Seed Round Size for Indian Startups in 2026" },
    insight: "Raise funding when you have momentum to sell, not when you desperately need survival capital. The best fundraising rounds happen when you can credibly say no to investors who aren't the right fit.",
    internal: "/blog/how-to-get-startup-funding-india-2026",
  },
  {
    num:     "07",
    title:   "Common Mistakes to Avoid",
    keyword: "Startup Mistakes India Founders 2026",
    img:     "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=900&q=80&auto=format",
    imgAlt:  "Startup founder mistakes to avoid India 2026",
    body: `The failures that kill Indian startups in their first two years are almost always the same mistakes, repeated. Understanding them in advance is one of the few genuine shortcuts available to first-time founders.

Mistake 1 — Building for the wrong customer. The Indian consumer who uses ₹10,000/month smartphones and has a credit card is not representative of India. If your product only works for that person, your total addressable market is 30–50 million people, not 1.4 billion. Most successful Indian startups won by going deeper into Tier-2/3 markets, not by chasing urban premiumisation.

Mistake 2 — Hiring too fast, too early. The #1 cash burn mistake in Indian startups is hiring a team of 8–10 people in the first six months before product-market fit. The optimal founding team is 2–4 people maximum until you have clear evidence of what you are building and who it is for.

Mistake 3 — Copying a Western startup in India. "Uber for X" or "Airbnb for Y" fails in India because the unit economics, customer expectations, and infrastructure constraints are completely different. Build for India's reality: cash-heavy, price-sensitive, mobile-first, low-trust-in-new-brands.

Mistake 4 — Not understanding your unit economics. Do you know your Customer Acquisition Cost (CAC), your Lifetime Value (LTV), and your payback period? If LTV/CAC is below 3, you do not have a business model — you have a marketing experiment. Indian investors in 2026 will not fund companies that cannot articulate a credible path to positive unit economics.

Mistake 5 — Raising money before you are ready. Taking pre-seed funding at a high valuation before product-market fit puts you on a treadmill of expectations that may require you to raise a Series A you are not ready for. Many great Indian startups have been killed not by failure but by premature scaling funded by money they were not ready to deploy effectively.`,
    stat: { val: "90%", label: "Indian Startups That Fail Within 5 Years — NASSCOM Data" },
    insight: "The founders who avoid these mistakes are not smarter — they have usually made them once already. Read Blume Ventures' Indus Valley reports, talk to founders who failed, and treat every assumption about your business as a hypothesis that needs to be killed before it kills you.",
    internal: null,
  },
  {
    num:     "08",
    title:   "Learn From India's Greatest Startup Builders",
    keyword: "Best Indian Startup Founders to Learn From 2026",
    img:     "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=900&q=80&auto=format",
    imgAlt:  "Indian startup founders success stories 2026",
    body: `The most efficient way to learn how to build a startup in India is to study the founders who have already done it — in your sector, with your constraints, solving analogous problems. The UpForge Founder Chronicle profiles India's most important startup builders in depth: their origin stories, the decisions that defined their companies, the mistakes they made and corrected, and the one lesson each would give to their earlier self.

Aadit Palicha of Zepto will teach you about the discipline of failing fast and the precision required to solve logistics problems. Nithin Kamath of Zerodha will show you that a profitable, bootstrapped business is as legitimate as a VC-backed hypergrowth company — Zerodha was the first Indian startup to reach profitability without taking a single rupee of VC funding. Alakh Pandey of PhysicsWallah demonstrates that radical affordability is a strategy, not a constraint. Vivek Raghavan of Sarvam AI shows what it looks like to build infrastructure, not just applications.

The common thread across all of them: they solved real Indian problems, they did not give up after the first failure, they understood their customer better than any competitor, and they built with discipline — not just ambition. These are learnable skills. The Founder Chronicle is your curriculum.`,
    stat: { val: "No. 01", label: "Reason Indian Startups Succeed — Founders Who Know Their Customer" },
    insight: "Study failure as much as success. The stories nobody tells — the shutdowns, the pivots, the near-deaths — contain more actionable information than a hundred Forbes profiles of founders who made it.",
    internal: "/",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// QUICK-START CHECKLIST — additional SEO-rich section
// ─────────────────────────────────────────────────────────────────────────────
const CHECKLIST = [
  { step: "Validate idea",           desc: "30 customer interviews, pre-launch landing page, ₹10K ad test",     done: false },
  { step: "Incorporate Pvt Ltd",     desc: "MCA21 portal or CA — 7–10 days, ₹15,000–25,000 total cost",         done: false },
  { step: "Apply for DPIIT",         desc: "Startup India portal — free, unlocks tax holiday & angel tax exemption", done: false },
  { step: "Open current account",    desc: "HDFC, RazorpayX, or Jupiter Business — required for fundraising",   done: false },
  { step: "Build MVP",               desc: "Ship in 8–12 weeks. One problem solved well. Mobile-first.",         done: false },
  { step: "Get first 100 users",     desc: "Personal network + community outreach + WhatsApp groups",            done: false },
  { step: "Measure retention",       desc: "Day-7 retention > 25% before any paid acquisition",                  done: false },
  { step: "File for GST",            desc: "Required above ₹20L revenue or for digital services",                done: false },
  { step: "Apply to accelerators",   desc: "YC, Sequoia Surge, Antler India — apply 6 months before you need them", done: false },
  { step: "Raise seed round",        desc: "Only after 3–4 months of 10%+ MoM growth and clear unit economics",  done: false },
]

const RELATED_SLUGS = [
  "india-startup-ecosystem-2026",
  "top-indian-unicorns-2026",
  "how-to-get-startup-funding-india-2026",
  "top-ai-startups-india-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ─────────────────────────────────────────────────────────────────────────────
// CSS — identical pattern, amber accent for founder playbook
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
    --amber: #D97706;
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
    overflow: hidden; position: relative;
  }
  .blog-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--gold3), var(--gold2), #E8C547);
  }

  .stat-pill {
    display: flex; align-items: center; gap: 14px;
    background: var(--ink); padding: 14px 18px; margin: 16px 0;
  }
  .insight {
    display: inline-flex; align-items: center; gap: 8px;
    background: #FEF3C7; border: 1px solid rgba(180,83,9,.25);
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
  .toc-link:hover span { color: var(--amber); }

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
  .rel-card:hover::before { background: var(--amber); }

  .dropcap::first-letter {
    font-family: var(--font-display), Georgia, serif;
    font-size: 3.8em; font-weight: 900;
    float: left; line-height: .82;
    margin-right: 8px; margin-top: 6px; color: var(--ink);
  }

  /* Step badge */
  .step-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--amber); padding: 3px 12px;
    font-family: system-ui; font-size: 8px; font-weight: 900;
    text-transform: uppercase; letter-spacing: .2em; color: var(--ink);
    margin-bottom: 10px;
  }

  /* Checklist */
  .ck-row {
    display: flex; align-items: flex-start; gap: 12px;
    padding: 12px 0; border-bottom: 1px solid var(--rule2);
  }
  .ck-row:last-child { border-bottom: none; }
  .ck-box {
    width: 18px; height: 18px; border: 1.5px solid var(--amber);
    border-radius: 2px; flex-shrink: 0; margin-top: 1px;
    display: flex; align-items: center; justify-content: center;
  }

  @media (max-width: 900px) {
    .section-grid { grid-template-columns: 1fr !important; }
    .toc-grid     { grid-template-columns: 1fr !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogHowToStartStartup() {
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
                <span itemProp="name">How to Start a Startup in India 2026</span>
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
                {["Founder Playbook", "India 2026", "Step-by-Step"].map((t) => (
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
                How to Start a Startup in India{" "}
                <em style={{ color: "#FCD34D" }}>(Step-by-Step Guide 2026)</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                From your first idea to your first funding round — the complete playbook.
              </p>
            </div>
          </div>

          {/* Meta bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Published",    v: "1 March 2026"   },
                  { l: "Reading Time", v: POST.readTime    },
                  { l: "Category",     v: POST.category    },
                  { l: "Steps Covered",v: `${SECTIONS.length} steps` },
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
                India adds 1,300 new startups every month. Most of them will fail within three years — not because India is a hard market, but because most founders skip the steps that actually matter.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}>
                This is not the guide that tells you to "think big" or "embrace failure". This is the operational playbook — the specific steps, the real costs, the actual government processes, and the honest lessons from Indian founders who have navigated them. It covers everything from finding your idea to registering your company under DPIIT to getting your first 100 users to raising your first funding round.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88 }}>
                India's startup ecosystem in 2026 is more accessible than at any point in history. The legal infrastructure, the funding ecosystem, the developer tools, and the market opportunities are all better than they were five years ago. What is still hard is what has always been hard: solving a real problem better than anyone else. This guide gives you the foundation. The rest is yours to build.
              </p>
            </div>

            {/* TOC */}
            <nav
              aria-label="Article sections"
              style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth: "clamp(200px,26vw,280px)" }}
            >
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">In This Guide</span>
                <div className="sh-r" />
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {SECTIONS.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${s.num}`} className="toc-link">
                      <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--amber)", flexShrink: 0, minWidth: 18 }}>{s.num}</span>
                      <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>{s.title}</span>
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--rule2)" }}>
                  <a href="#checklist" className="toc-link">
                    <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--amber)", flexShrink: 0, minWidth: 18 }}>→</span>
                    <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4, fontWeight: 700 }}>Launch Checklist</span>
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
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--amber)" }}>
                          Section {sec.num}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {sec.keyword}
                        </span>
                      </div>
                      {/* Step badge for steps 1–6 */}
                      {parseInt(sec.num) <= 6 && (
                        <div className="step-badge">Step {sec.num}</div>
                      )}
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
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, fontFamily: "system-ui", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--amber)", textDecoration: "none" }}
                        >
                          {sec.num === "05" ? "Browse Indian Startup Stories →" : sec.num === "06" ? "Read Full Funding Guide →" : sec.num === "08" ? "Read The Founder Chronicle →" : "Explore on UpForge →"}
                        </Link>
                      )}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div className="stat-pill">
                        <p className="pf" style={{ fontSize: "1.8rem", fontWeight: 900, color: "#E8C547", lineHeight: 1, flexShrink: 0 }}>
                          {sec.stat.val}
                        </p>
                        <p className="sf" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.5 }}>
                          {sec.stat.label}
                        </p>
                      </div>
                      <div className="insight">
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--gold2)", flexShrink: 0 }} aria-hidden="true" />
                        <p className="rp" style={{ fontSize: 12, color: "var(--gold3)", fontStyle: "italic", lineHeight: 1.6 }}>
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

          {/* ── LAUNCH CHECKLIST ── */}
          <div id="checklist" style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l" style={{ color: "var(--amber)" }}>✦ Quick Start</span>
              <div className="sh-r" />
            </div>
            <h2
              className="pf"
              style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.15 }}
            >
              The India Startup Launch Checklist
            </h2>
            <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", fontStyle: "italic", marginBottom: 20, lineHeight: 1.65 }}>
              Use this as your operating checklist. Each step has been distilled from the UpForge founder library and the DPIIT startup registration process.
            </p>
            <div style={{ border: "1.5px solid var(--ink)", background: "var(--white)", padding: "4px 20px 4px" }}>
              {CHECKLIST.map((item, i) => (
                <div key={i} className="ck-row">
                  <div className="ck-box" aria-hidden="true">
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="#D97706" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="sf" style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)", marginBottom: 2 }}>{item.step}</p>
                    <p className="rp" style={{ fontSize: 12, color: "var(--ink4)", fontStyle: "italic", lineHeight: 1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 14, display: "flex", justifyContent: "flex-end" }}>
              <Link
                href="/startup"
                style={{ fontFamily: "system-ui", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--amber)", textDecoration: "none" }}
              >
                Browse Indian Startups Who Did This →
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
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--gold2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>Read</span>
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
