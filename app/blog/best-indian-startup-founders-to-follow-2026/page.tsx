// app/blog/best-indian-startup-founders-to-follow-2026/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

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
  ],
  openGraph: {
    title: "25 Best Indian Startup Founders to Follow in 2026 | UpForge",
    description: "Profiles, philosophies, and frameworks of India's most influential startup founders — extracted from their companies, interviews, and public statements.",
    url: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85", width: 1200, height: 630, alt: "Indian startup founders 2026" }],
  },
  alternates: { canonical: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "25 Best Indian Startup Founders to Follow in 2026",
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Organization", name: "UpForge Editorial", url: "https://upforge.in" },
  publisher: { "@type": "Organization", name: "UpForge", logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://upforge.in/blog" },
      { "@type": "ListItem", position: 3, name: "Founders to Follow 2026", item: "https://upforge.in/blog/best-indian-startup-founders-to-follow-2026" },
    ],
  },
};

const T = { parch: "#F5F1E8", parch2: "#EDE9DF", ink: "#1A1208", ink2: "#2C2010", ink3: "#5A4A30", ink4: "#8C7D65", ink5: "#BBB0A0", rule: "#C8C2B4", rule2: "#D8D2C4", gold: "#B45309", gold2: "#D97706", gold3: "#92400E", goldlt: "#FEF3C7", white: "#FDFCF9", green: "#15803D" };

const FOUNDERS = [
  { name: "Alakh Pandey", company: "PhysicsWallah", sector: "EdTech", city: "Lucknow", accent: "#059669", philosophy: "Build for Bharat first", quote: "I did not build PhysicsWallah for IIT students. I built it for the crore students who cannot afford coaching.", keyInsight: "Pandey's obsession with affordability — ₹999/year for full JEE prep — is the product moat. Not the technology.", slug: "physicswallah", why: "Proof that Tier 2 India can produce a $2.8B company. He teaches you to think about price as a feature." },
  { name: "Nithin Kamath", company: "Zerodha", sector: "FinTech", city: "Bengaluru", accent: "#2563EB", philosophy: "Profitability before growth", quote: "Every rupee we earn, we earn because we deserve it — not because we raised it.", keyInsight: "Zerodha never raised external capital and became India's most profitable broker. His Twitter/X posts on capital efficiency are required reading.", slug: "zerodha", why: "The anti-VC unicorn playbook. Everything he shares about unit economics and sustainable growth applies to every sector." },
  { name: "Deepinder Goyal", company: "Zomato / Eternal", sector: "FoodTech", city: "Gurugram", accent: "#DC2626", philosophy: "Run experiments fast, kill failures faster", quote: "If you are not embarrassed by the first version of your product, you launched too late.", keyInsight: "Goyal's pivot decisions — restaurant listing to delivery to quick commerce — are textbook examples of recognising inflection points.", slug: "zomato", why: "The master class in pivoting without losing the core. Every time markets shifted, Zomato moved first." },
  { name: "Falguni Nayar", company: "Nykaa", sector: "D2C Beauty", city: "Mumbai", accent: "#C026D3", philosophy: "Category expertise is the ultimate moat", quote: "I did not need to be a tech founder to build a tech company. I needed to understand beauty better than anyone.", keyInsight: "Started at 50, no tech background. Proved that domain expertise + digital distribution is more durable than pure tech.", slug: "nykaa", why: "Essential reading for any D2C founder. Her path to India's first profitable consumer unicorn is meticulously documented." },
  { name: "Kunal Shah", company: "CRED", sector: "FinTech", city: "Bengaluru", accent: "#111827", philosophy: "Understand human psychology before markets", quote: "Every successful startup solves a problem that people have accepted as permanent.", keyInsight: "Shah's Delta 4 framework — the idea that products succeed only when they deliver 4x better outcomes — is the most practical product framework in Indian startup culture.", slug: "cred", why: "His Twitter threads on consumer behaviour and the psychology of wealth are unlike any other Indian founder's output." },
  { name: "Bhavish Aggarwal", company: "Ola / Krutrim", sector: "Mobility & AI", city: "Bengaluru", accent: "#EA580C", philosophy: "Vertical integration as a weapon", quote: "India should not just be a market for AI — it should be a creator of AI.", keyInsight: "After Ola's electric pivot struggles, his move into AI with Krutrim — India's first AI unicorn — shows how to reinvent a narrative.", slug: "ola", why: "The builder who refuses to be categorised. Watch how he positions Krutrim against global AI giants." },
  { name: "Ritesh Agarwal", company: "OYO", sector: "Hospitality", city: "Gurugram", accent: "#DC2626", philosophy: "Scale globally while staying scrappy", quote: "I dropped out of college at 19 to build. The biggest risk was not doing it.", keyInsight: "Built OYO to 1M+ rooms in 80+ countries by 22. The rebound story — from near bankruptcy to restructured profitable entity — is the resilience case study.", slug: "oyo", why: "His journey from 17-year-old dropout to global hospitality disruptor covers every lesson about both success and failure." },
  { name: "Vijay Shekhar Sharma", company: "Paytm", sector: "FinTech", city: "Noida", accent: "#0284C7", philosophy: "Distribution is the product", quote: "UPI was not a competitor — it was the rail that made our network 10x more valuable overnight.", keyInsight: "Sharma built Paytm's 350M user network before most founders had thought about mobile payments. First-mover timing in digital infrastructure.", slug: "paytm", why: "The definitive case study in riding a government-built platform wave — and the risks when regulatory winds shift." },
  { name: "Lucky Tiwari", company: "InternAdda", sector: "EdTech/Career", city: "Delhi NCR", accent: "#2563EB", philosophy: "Build trust before building product", quote: "The student who gets their first internship through us — we have them for life.", keyInsight: "First-mover in India's early-career discovery market. Network effects compound before revenue does.", slug: "internadda", why: "The emerging-stage founder story. Still building, documenting the journey in real time." },
  { name: "Sanjeev Barnwal", company: "Meesho", sector: "Social Commerce", city: "Bengaluru", accent: "#8B5CF6", philosophy: "Trust your instinct on the underserved", quote: "Our first 10,000 sellers were homemakers from small towns. Nobody was building for them. That was the signal.", keyInsight: "The social commerce thesis — enabling India's informal micro-entrepreneurs — was dismissed until Meesho reached 13M sellers.", slug: "meesho", why: "One of the clearest examples of seeing a market segment others ignored and going all in before validation arrived." },
];

export default function BlogFoundersToFollow() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={{ background: T.parch, fontFamily: "'Georgia','Times New Roman',serif", color: T.ink, lineHeight: 1.75 }}>

        {/* Breadcrumb */}
        <div style={{ background: T.parch2, borderBottom: `1px solid ${T.rule}`, padding: "10px clamp(16px,4vw,40px)" }}>
          <nav>
            <ol style={{ display: "flex", gap: 6, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
              {[["Home", "/"], ["Blog", "/blog"], ["Founders to Follow 2026", "#"]].map(([label, href], i, arr) => (
                <li key={label as string} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  {href === "#" ? <span style={{ fontSize: 11, color: T.ink4, fontFamily: "system-ui" }}>{label}</span> : <Link href={href as string} style={{ fontSize: 11, color: T.gold, textDecoration: "none", fontFamily: "system-ui" }}>{label}</Link>}
                  {i < arr.length - 1 && <span style={{ color: T.rule, fontSize: 10 }}>›</span>}
                </li>
              ))}
            </ol>
          </nav>
        </div>

        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 clamp(16px,4vw,40px)" }}>

          {/* Masthead */}
          <header style={{ borderBottom: `3px solid ${T.ink}`, padding: "clamp(28px,5vw,56px) 0 clamp(20px,4vw,36px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(18px,3vw,32px)", flexWrap: "wrap", gap: 8 }}>
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", margin: 0 }}>9 March 2026 · UpForge · Founder Profiles</p>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui", border: `1px solid ${T.gold}`, padding: "2px 10px" }}>Founder Intelligence</span>
            </div>
            <div style={{ textAlign: "center", paddingBottom: "clamp(18px,3vw,32px)", borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(16px,3vw,28px)" }}>
              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-.02em", color: T.ink, margin: "0 0 14px" }}>
                Indian Startup Founders<br />
                <em style={{ fontStyle: "italic", color: T.gold }}>to Follow in 2026</em>
              </h1>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: T.ink3, maxWidth: 680, margin: "0 auto", fontStyle: "italic" }}>
                The philosophies, playbooks, and patterns of India's most influential startup builders — extracted for the next generation of founders.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 18 }}>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
                <span style={{ color: T.rule, fontSize: 14 }}>✦</span>
                <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: T.rule }} />
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px", fontSize: 11, color: T.ink4, fontFamily: "system-ui" }}>
              <span>By <strong style={{ color: T.ink3 }}>UpForge Editorial</strong></span>
              <span style={{ color: T.rule }}>·</span>
              <span>18 min read</span>
              <span style={{ color: T.rule }}>·</span>
              <span>Updated March 2026</span>
            </div>
          </header>

          {/* Hero Image */}
          <figure style={{ margin: "clamp(20px,4vw,36px) 0", borderBottom: `1px solid ${T.rule}`, paddingBottom: "clamp(20px,4vw,36px)" }}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=85" alt="Indian startup team working" style={{ width: "100%", height: "clamp(200px,32vw,420px)", objectFit: "cover", display: "block", filter: "sepia(12%) contrast(106%)" }} />
            <figcaption style={{ fontSize: 10, color: T.ink5, marginTop: 8, fontFamily: "system-ui", fontStyle: "italic" }}>The founders listed here collectively created more than $100B in verified market value — and many started with nothing but a laptop and an obsession.</figcaption>
          </figure>

          {/* Intro */}
          <section style={{ maxWidth: 760, marginBottom: "clamp(24px,4vw,40px)" }}>
            <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 900, float: "left", lineHeight: 0.82, marginRight: 8, marginTop: 8, color: T.ink }}>T</span>
              he most honest thing you can say about learning to build a startup is this: read fewer books and study more founders. Theory explains why things work. Founders show you how. The Indian founders listed below are not just interesting stories — they are instruction manuals, each one teaching a different lesson about product, market timing, fundraising, resilience, and the kind of conviction that builds companies from nothing.
            </p>
            <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 0, color: T.ink2 }}>
              We have deliberately included founders at different stages — from bootstrapped billionaires to early-stage builders still forging their path. Each entry includes why you should follow them, their core philosophy, and the single most transferable insight from their journey.
            </p>
          </section>

          {/* Why This Matters strip */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: `1.5px solid ${T.ink}`, background: T.ink, gap: "1.5px", marginBottom: "clamp(24px,4vw,40px)" }}>
            {[
              ["Study the Pattern, Not the Story", "Every founder here won for a specific, replicable reason. Pattern-matching their key decisions is more valuable than inspiration."],
              ["India-Specific Context", "These founders navigated Indian regulatory complexity, capital scarcity, and Bharat-scale markets. Their lessons apply here, not Silicon Valley playbooks."],
              ["Frameworks You Can Use Today", "Each profile includes one actionable framework — something you can implement this week in your own company."],
            ].map(([t, d]) => (
              <div key={t as string} style={{ background: T.white, padding: "16px 18px", borderTop: `3px solid ${T.gold}` }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13.5, fontWeight: 700, color: T.ink, margin: "0 0 8px" }}>{t}</p>
                <p style={{ fontSize: 11.5, color: T.ink3, margin: 0, fontFamily: "system-ui", lineHeight: 1.6 }}>{d}</p>
              </div>
            ))}
          </div>

          {/* §1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 24px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `2px solid ${T.ink}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§01</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Founders & Their Playbooks</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          {/* Founder profiles — newspaper 2-col alternating */}
          {FOUNDERS.map((f, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr clamp(180px,22%,220px)"  : "clamp(180px,22%,220px) 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: "1.5px" }}>
              {i % 2 !== 0 && (
                <div style={{ background: f.accent, padding: "clamp(16px,3vw,28px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, color: "#FDFCF9", lineHeight: 1.1, margin: "0 0 6px" }}>{f.name}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,.7)", margin: "0 0 12px", fontFamily: "system-ui" }}>{f.company} · {f.city}</p>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.3)", padding: "2px 8px", fontFamily: "system-ui" }}>{f.sector}</span>
                </div>
              )}
              <div style={{ background: T.white, padding: "clamp(16px,3vw,28px)" }}>
                {i % 2 === 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                      <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 900, color: T.ink, margin: 0 }}>{f.name}</p>
                      <span style={{ fontSize: 9, fontWeight: 700, color: f.accent, border: `1px solid ${f.accent}`, padding: "2px 8px", fontFamily: "system-ui", letterSpacing: ".1em", textTransform: "uppercase" }}>{f.sector}</span>
                    </div>
                    <p style={{ fontSize: 11, color: T.ink4, margin: "4px 0 0", fontFamily: "system-ui" }}>{f.company} · {f.city}</p>
                  </div>
                )}
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", margin: "0 0 4px" }}>Why Follow</p>
                <p style={{ fontSize: 12.5, color: T.ink3, margin: "0 0 14px", lineHeight: 1.65 }}>{f.why}</p>
                <div style={{ background: T.parch2, borderLeft: `3px solid ${f.accent}`, padding: "10px 12px", marginBottom: 12 }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13.5, fontStyle: "italic", color: T.ink2, margin: 0, lineHeight: 1.65 }}>"{f.quote}"</p>
                </div>
                <div style={{ background: T.goldlt, border: `1px solid #FDE68A`, padding: "10px 12px", marginBottom: 12 }}>
                  <p style={{ fontSize: 10, fontWeight: 700, color: T.gold3, fontFamily: "system-ui", textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 4px" }}>Key Insight</p>
                  <p style={{ fontSize: 12, color: T.gold3, margin: 0, fontFamily: "system-ui", lineHeight: 1.6 }}>{f.keyInsight}</p>
                </div>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", margin: "0 0 4px" }}>Core Philosophy</p>
                <p style={{ fontSize: 12, color: T.gold, fontFamily: "system-ui", fontStyle: "italic", fontWeight: 600, margin: "0 0 14px" }}>{f.philosophy}</p>
                <Link href={`/startup/${f.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 10, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: T.gold, textDecoration: "none", fontFamily: "system-ui", borderBottom: `1px solid ${T.gold}` }}>
                  View Company Profile →
                </Link>
              </div>
              {i % 2 === 0 && (
                <div style={{ background: f.accent, padding: "clamp(16px,3vw,28px)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, color: "#FDFCF9", lineHeight: 1.1, margin: "0 0 6px" }}>{f.name}</p>
                  <p style={{ fontSize: 11, color: "rgba(255,255,255,.7)", margin: "0 0 12px", fontFamily: "system-ui" }}>{f.company} · {f.city}</p>
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.3)", padding: "2px 8px", fontFamily: "system-ui" }}>{f.sector}</span>
                </div>
              )}
            </div>
          ))}

          {/* §2 — What all great founders share */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "clamp(24px,4vw,40px) 0 20px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§02</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>The 5 Traits Every Great Indian Founder Shares</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: "clamp(24px,4vw,40px)" }}>
            {[
              { no: "01", trait: "Obsessive Domain Knowledge", desc: "Not general business knowledge — deep, specific, almost irrational knowledge about one domain. Pandey on JEE chemistry. Kamath on stock market microstructure. Nayar on beauty supply chains." },
              { no: "02", trait: "Comfort With Uncertainty", desc: "Every company in this list navigated periods where the path was completely unclear. The ability to operate without certainty — to make decisions with 60% information — separates builders from planners." },
              { no: "03", trait: "Speed Over Perfection", desc: "The Indian startup ecosystem moves too fast for perfectionism. Every founder here has a version of the same story: shipped something imperfect, got feedback, improved, and is grateful they didn't wait." },
              { no: "04", trait: "India-First Instinct", desc: "The founders who tried to copy Western models failed. The founders who asked 'what does India specifically need' built the biggest companies. Price sensitivity and scale are features, not bugs." },
              { no: "05", trait: "Resilience as Strategy", desc: "OYO survived near-bankruptcy. Paytm survived regulatory crisis. Every company on this list has a near-death story. Resilience is not a soft skill — it is the hardest competitive advantage to replicate." },
              { no: "06", trait: "Builder's Frugality", desc: "Even after Zerodha became worth ₹30,000 crore, Kamath continued working from the same office. Capital efficiency is a culture that starts at the top and gets embedded into every hiring decision." },
            ].map(({ no, trait, desc }) => (
              <div key={no} style={{ background: T.white, padding: "16px 18px" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 8 }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 900, color: T.gold, margin: 0, lineHeight: 1 }}>{no}</p>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 13, fontWeight: 700, color: T.ink, margin: 0 }}>{trait}</p>
                </div>
                <p style={{ fontSize: 11.5, color: T.ink3, margin: 0, fontFamily: "system-ui", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div style={{ background: T.ink, padding: "clamp(20px,4vw,36px)", margin: "clamp(24px,4vw,40px) 0" }}>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui", margin: "0 0 14px" }}>✦ UpForge Editorial Note</p>
            <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontStyle: "italic", color: "rgba(253,252,249,.88)", lineHeight: 1.75, margin: 0 }}>
              "The most dangerous thing a new Indian founder can do is model themselves on Silicon Valley. The Indian market punishes every assumption borrowed from a different economy. The founders listed here succeeded because they understood India — its price sensitivity, its aspirational middle class, its regulatory complexity, and the extraordinary talent that exists outside Bengaluru and Mumbai. Study their decisions, not their funding amounts."
            </p>
          </div>

          {/* Internal links */}
          <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: "clamp(16px,3vw,28px)", marginBottom: "clamp(24px,4vw,48px)" }}>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", marginBottom: 14 }}>Continue Exploring</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["Browse All Startup Profiles", "/startup"], ["India's Top Unicorns 2026", "/blog/top-indian-unicorns-2026"], ["How to Get Startup Funding India 2026", "/blog/how-to-get-startup-funding-india-2026"], ["Generate Your Free Valuation Report", "/report"]].map(([label, href]) => (
                <Link key={label as string} href={href as string} style={{ display: "flex", alignItems: "center", gap: 7, padding: "10px 12px", background: T.parch2, border: `1px solid ${T.rule2}`, textDecoration: "none", color: T.gold, fontSize: 11.5, fontFamily: "system-ui", fontWeight: 600 }}>
                  <span>›</span> {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
