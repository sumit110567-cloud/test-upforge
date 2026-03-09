// app/blog/top-indian-unicorns-2026/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked & Profiled | UpForge",
  description:
    "Complete list of Indian unicorn startups in 2026. Profiles, valuations, founders, sectors, and the lessons every Indian entrepreneur can steal from billion-dollar companies built in India.",
  keywords: [
    "Indian unicorns 2026",
    "unicorn startups India",
    "India unicorn list 2026",
    "billion dollar startups India",
    "Zepto unicorn",
    "Zerodha valuation 2026",
    "PhysicsWallah unicorn",
    "CRED valuation",
    "Indian startup valuation 2026",
    "fastest growing startups India",
  ],
  openGraph: {
    title: "Top Indian Unicorns 2026 | UpForge",
    description:
      "Every Indian startup worth over $1 billion — profiles, valuations, founders, and the growth secrets behind India's most valuable companies.",
    url: "https://upforge.in/blog/top-indian-unicorns-2026",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85", width: 1200, height: 630, alt: "Top Indian Unicorn Startups 2026" }],
  },
  alternates: { canonical: "https://upforge.in/blog/top-indian-unicorns-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked & Profiled",
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  author: { "@type": "Organization", name: "UpForge Editorial", url: "https://upforge.in" },
  publisher: { "@type": "Organization", name: "UpForge", logo: { "@type": "ImageObject", url: "https://upforge.in/logo.jpg" } },
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://upforge.in/blog/top-indian-unicorns-2026" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://upforge.in/blog" },
      { "@type": "ListItem", position: 3, name: "Indian Unicorns 2026", item: "https://upforge.in/blog/top-indian-unicorns-2026" },
    ],
  },
};

const T = { parch: "#F5F1E8", parch2: "#EDE9DF", ink: "#1A1208", ink2: "#2C2010", ink3: "#5A4A30", ink4: "#8C7D65", ink5: "#BBB0A0", rule: "#C8C2B4", rule2: "#D8D2C4", gold: "#B45309", gold2: "#D97706", gold3: "#92400E", goldlt: "#FEF3C7", white: "#FDFCF9", green: "#15803D", red: "#B91C1C" };

const UNICORNS = [
  { name: "Zepto", founder: "Aadit Palicha & Kaivalya Vohra", sector: "Quick Commerce", valuation: "$5B+", founded: 2021, city: "Mumbai", accent: "#D97706", moat: "10-minute grocery delivery, dark store network", lesson: "Age is irrelevant — Palicha was 19 when he raised his first VC round. Speed of execution trumps experience.", slug: "zepto" },
  { name: "Zerodha", founder: "Nithin Kamath", sector: "FinTech", valuation: "$3.6B", founded: 2010, city: "Bengaluru", accent: "#2563EB", moat: "Profitable, bootstrapped, built for traders by traders", lesson: "You don't need VC money to build a unicorn. Zerodha never took external funding and is India's most profitable broker.", slug: "zerodha" },
  { name: "PhysicsWallah", founder: "Alakh Pandey", sector: "EdTech", valuation: "$2.8B", founded: 2016, city: "Lucknow", accent: "#059669", moat: "Affordable education for Bharat, brand loyalty", lesson: "The biggest market in India is Bharat — Tier 2 and Tier 3 cities. Pandey built for them before anyone else did.", slug: "physicswallah" },
  { name: "Zomato / Eternal", founder: "Deepinder Goyal", sector: "FoodTech", valuation: "$20B+", founded: 2008, city: "Gurugram", accent: "#DC2626", moat: "Delivery network, Blinkit, brand", lesson: "Pivoting is not failure. Zomato pivoted from restaurant listings to delivery to quick commerce — each time correctly.", slug: "zomato" },
  { name: "CRED", founder: "Kunal Shah", sector: "FinTech", valuation: "$6.4B", founded: 2018, city: "Bengaluru", accent: "#111827", moat: "Premium credit card user base, data network effects", lesson: "Serving the top 3% of users is a valid strategy. CRED bet on high-value customers when others chased mass market.", slug: "cred" },
  { name: "Nykaa", founder: "Falguni Nayar", sector: "D2C Beauty", valuation: "$7B", founded: 2012, city: "Mumbai", accent: "#C026D3", moat: "Beauty category expertise, private labels", lesson: "Industry experience is a moat. A former investment banker building a beauty platform — nobody thought it would work.", slug: "nykaa" },
  { name: "OYO", founder: "Ritesh Agarwal", sector: "Hospitality", valuation: "$2.7B", founded: 2013, city: "Gurugram", accent: "#DC2626", moat: "Global scale, brand in budget hospitality", lesson: "Building globally from India is possible. OYO operates in 80+ countries. Scale ambition early.", slug: "oyo" },
  { name: "Razorpay", founder: "Harshil Mathur & Shashank Kumar", sector: "FinTech", valuation: "$7.5B", founded: 2014, city: "Bengaluru", accent: "#3B82F6", moat: "Developer-first payment infrastructure", lesson: "B2B infrastructure businesses in India can be massive. Payments are a utility — own the pipes.", slug: "razorpay" },
  { name: "Meesho", founder: "Vidit Aatrey & Sanjeev Barnwal", sector: "Social Commerce", valuation: "$4.9B", founded: 2015, city: "Bengaluru", accent: "#8B5CF6", moat: "Social selling network, Tier 3 penetration", lesson: "Trust your instinct on distribution. Meesho bet on WhatsApp resellers when everyone laughed. 13M sellers later, they stopped laughing.", slug: "meesho" },
  { name: "Paytm", founder: "Vijay Shekhar Sharma", sector: "FinTech", valuation: "$1.8B", founded: 2010, city: "Noida", accent: "#0284C7", moat: "Payment brand recognition, merchant network", lesson: "Resilience matters more than valuations. Paytm's 2023 crisis would have killed most companies. It survived.", slug: "paytm" },
];

export default function BlogIndianUnicorns() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article style={{ background: T.parch, fontFamily: "'Georgia','Times New Roman',serif", color: T.ink, lineHeight: 1.75 }}>

        {/* Breadcrumb */}
        <div style={{ background: T.parch2, borderBottom: `1px solid ${T.rule}`, padding: "10px clamp(16px,4vw,40px)" }}>
          <nav>
            <ol style={{ display: "flex", gap: 6, listStyle: "none", margin: 0, padding: 0, flexWrap: "wrap" }}>
              {[["Home", "/"], ["Blog", "/blog"], ["Indian Unicorns 2026", "#"]].map(([label, href], i, arr) => (
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
              <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".22em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", margin: 0 }}>9 March 2026 · UpForge · Startup Intelligence</p>
              <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui", border: `1px solid ${T.gold}`, padding: "2px 10px" }}>Unicorn Report</span>
            </div>
            <div style={{ textAlign: "center", paddingBottom: "clamp(18px,3vw,32px)", borderBottom: `1px solid ${T.rule}`, marginBottom: "clamp(16px,3vw,28px)" }}>
              <h1 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.06, letterSpacing: "-.02em", color: T.ink, margin: "0 0 14px" }}>
                India's Top Unicorns in 2026<br />
                <em style={{ fontStyle: "italic", color: T.gold }}>Ranked, Profiled & Decoded</em>
              </h1>
              <p style={{ fontSize: "clamp(14px,1.8vw,17px)", color: T.ink3, maxWidth: 680, margin: "0 auto", fontStyle: "italic" }}>
                125 Indian startups have crossed the $1 billion valuation mark. Here are the most important ones — and the lessons every founder must extract from their rise.
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
              <span>15 min read</span>
              <span style={{ color: T.rule }}>·</span>
              <span>Updated March 2026</span>
            </div>
          </header>

          {/* Hero Image */}
          <figure style={{ margin: "clamp(20px,4vw,36px) 0", borderBottom: `1px solid ${T.rule}`, paddingBottom: "clamp(20px,4vw,36px)" }}>
            <img src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85" alt="Indian startup founders" style={{ width: "100%", height: "clamp(220px,35vw,440px)", objectFit: "cover", display: "block", filter: "sepia(10%) contrast(108%)" }} />
            <figcaption style={{ fontSize: 10, color: T.ink5, marginTop: 8, fontFamily: "system-ui", fontStyle: "italic" }}>India is now the world's third-largest startup ecosystem, home to 125 unicorns collectively valued at hundreds of billions of dollars.</figcaption>
          </figure>

          {/* Intro */}
          <section style={{ maxWidth: 760, marginBottom: "clamp(24px,4vw,40px)" }}>
            <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
              <span style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(2.8rem,5vw,4rem)", fontWeight: 900, float: "left", lineHeight: 0.82, marginRight: 8, marginTop: 8, color: T.ink }}>I</span>
              n the year 2026, India has 125 startups valued at over $1 billion. That number was 0 in 2011. No other country in history has created unicorn companies at this speed, at this scale, from this socioeconomic starting point. Understanding what these companies did — the specific decisions, the timing, the markets they chose — is the most valuable education available to any Indian founder.
            </p>
            <p style={{ fontSize: "clamp(14px,1.6vw,16px)", lineHeight: 1.85, marginBottom: 0, color: T.ink2 }}>
              This is not a celebration article. It is a dissection. For each company profiled below, we have extracted the single most transferable insight — the thing that made the difference between a startup that died and a startup that became worth billions.
            </p>
          </section>

          {/* Ecosystem Stats */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", border: `1.5px solid ${T.ink}`, background: T.ink, gap: "1.5px", marginBottom: "clamp(24px,4vw,40px)" }}>
            {[["125", "Unicorns", "As of March 2026"], ["$629B", "Total VC Raised", "All-time, India"], ["$3.44B", "Q1 2026 Funding", "First quarter"], ["650K+", "Registered Startups", "DPIIT recognised"]].map(([v, l, s]) => (
              <div key={l as string} style={{ background: T.white, padding: "18px 16px", textAlign: "center" }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.5rem,3vw,2.2rem)", fontWeight: 900, color: T.gold, margin: "0 0 4px", lineHeight: 1 }}>{v}</p>
                <p style={{ fontSize: 11, fontWeight: 700, color: T.ink, margin: "0 0 3px", fontFamily: "system-ui" }}>{l}</p>
                <p style={{ fontSize: 9.5, color: T.ink5, margin: 0, fontFamily: "system-ui" }}>{s}</p>
              </div>
            ))}
          </div>

          {/* §1 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 20px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `2px solid ${T.ink}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§01</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>What Makes an Indian Startup Become a Unicorn</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 16, color: T.ink2 }}>
            After analysing every Indian unicorn created between 2011 and 2026, four patterns emerge consistently. First, the best Indian unicorns identified a large underserved market before it became obvious — Zepto in quick commerce, Zerodha in retail trading, PhysicsWallah in affordable education. Second, they had founders with deep domain obsession, not just business interest. Third, they chose distribution models that leveraged India's unique characteristics — mobile-first, price-sensitive, Tier 2 aspirational. Fourth, and most critically, they focused on unit economics earlier than their peers.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: "clamp(24px,4vw,40px)" }}>
            {[
              { title: "Market Timing", desc: "Indian unicorns almost universally entered their market 12–24 months before it became crowded. Too early and you burn capital educating users. Too late and incumbents dominate. The sweet spot is when the infrastructure just caught up — Jio-era data, UPI-era payments." },
              { title: "India-Specific Distribution", desc: "WhatsApp for Meesho. Dark stores for Zepto. YouTube for PhysicsWallah. Every major unicorn found a distribution channel native to Indian consumer behaviour rather than copying Western playbooks." },
              { title: "Unit Economics First", desc: "The 2022 funding winter killed Indian startups that ignored unit economics. Zerodha and bootstrapped companies proved you could build massive without burning cash. Today's investors demand it. Gross margin, CAC payback, and LTV/CAC are table stakes." },
              { title: "Founder-Market Fit Over Product-Market Fit", desc: "Falguni Nayar in beauty. Alakh Pandey in NEET preparation. Nithin Kamath in trading. The pattern is relentless: the founder's personal obsession with the domain creates a product that outsiders cannot replicate." },
            ].map(({ title, desc }, i) => (
              <div key={i} style={{ background: T.white, padding: "16px 18px", borderTop: `3px solid ${T.gold}` }}>
                <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 14, fontWeight: 700, color: T.ink, margin: "0 0 8px" }}>{title}</p>
                <p style={{ fontSize: 12, color: T.ink3, margin: 0, fontFamily: "system-ui", lineHeight: 1.65 }}>{desc}</p>
              </div>
            ))}
          </div>

          {/* §2 — The Profiles */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 24px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§02</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>The Unicorn Profiles</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5px", border: `1.5px solid ${T.ink}`, background: T.ink, marginBottom: "clamp(24px,4vw,40px)" }}>
            {UNICORNS.map((u, i) => (
              <div key={i} style={{ background: T.white, padding: "clamp(16px,3vw,24px)", borderLeft: `4px solid ${u.accent}`, display: "grid", gridTemplateColumns: "1fr clamp(120px,18%,180px)", gap: 20, alignItems: "start" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
                    <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.1rem,2vw,1.4rem)", fontWeight: 900, color: T.ink, margin: 0 }}>{u.name}</p>
                    <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase", color: u.accent, border: `1px solid ${u.accent}`, padding: "2px 7px", fontFamily: "system-ui" }}>{u.sector}</span>
                  </div>
                  <p style={{ fontSize: 11.5, color: T.ink4, margin: "0 0 10px", fontFamily: "system-ui" }}>Founded {u.founded} · {u.city} · by {u.founder}</p>
                  <p style={{ fontSize: 12.5, color: T.ink3, margin: "0 0 10px", lineHeight: 1.65 }}>
                    <strong style={{ color: T.ink2, fontFamily: "system-ui", fontSize: 10.5, textTransform: "uppercase", letterSpacing: ".1em" }}>Moat: </strong>{u.moat}
                  </p>
                  <div style={{ background: T.goldlt, border: `1px solid #FDE68A`, padding: "10px 12px", borderLeft: `3px solid ${T.gold}` }}>
                    <p style={{ fontSize: 10.5, fontWeight: 700, color: T.gold3, fontFamily: "system-ui", textTransform: "uppercase", letterSpacing: ".1em", margin: "0 0 4px" }}>The Lesson</p>
                    <p style={{ fontSize: 12, color: T.gold3, margin: 0, fontFamily: "system-ui", lineHeight: 1.6 }}>{u.lesson}</p>
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".16em", textTransform: "uppercase", color: T.ink4, margin: "0 0 4px", fontFamily: "system-ui" }}>Valuation</p>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", fontWeight: 900, color: u.accent, lineHeight: 1, margin: "0 0 12px" }}>{u.valuation}</p>
                  <Link href={`/startup/${u.slug}`} style={{ display: "block", background: T.ink, color: "#FDFCF9", textAlign: "center", padding: "7px 10px", textDecoration: "none", fontFamily: "system-ui", fontSize: 9, fontWeight: 700, letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Full Profile →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* §3 */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 20px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§03</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>Sectors Producing the Most Indian Unicorns</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", border: `1.5px solid ${T.ink}`, background: T.ink, gap: "1.5px", marginBottom: "clamp(24px,4vw,40px)" }}>
            {[
              { sector: "FinTech", count: "34", examples: "Razorpay, Zerodha, Paytm, CRED, Groww", growth: "UPI scale, credit gap, insurance", },
              { sector: "SaaS / B2B Tech", count: "28", examples: "Freshworks, Postman, Druva, Capillary", growth: "India as global SaaS talent base" },
              { sector: "Consumer / D2C", count: "22", examples: "Nykaa, Lenskart, Mamaearth, boAt", growth: "Rising middle class, brand premiumisation" },
              { sector: "EdTech", count: "14", examples: "PhysicsWallah, BYJU's, Unacademy", growth: "500M+ students, aspirational India" },
              { sector: "HealthTech", count: "12", examples: "Pharmeasy, 1mg, Pristyn Care", growth: "Healthcare digitalisation, insurance" },
              { sector: "Quick Commerce", count: "6", examples: "Zepto, Swiggy Instamart, Blinkit", growth: "Urban density + cold chain build-out" },
            ].map(({ sector, count, examples, growth }) => (
              <div key={sector} style={{ background: T.white, padding: "16px 14px", borderTop: `3px solid ${T.gold}` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 15, fontWeight: 900, color: T.ink, margin: 0 }}>{sector}</p>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 22, fontWeight: 900, color: T.gold, margin: 0, lineHeight: 1 }}>{count}</p>
                </div>
                <p style={{ fontSize: 10.5, color: T.ink3, margin: "0 0 6px", fontFamily: "system-ui" }}>{examples}</p>
                <p style={{ fontSize: 10, color: T.ink5, margin: 0, fontFamily: "system-ui", fontStyle: "italic" }}>{growth}</p>
              </div>
            ))}
          </div>

          {/* §4 — Emerging Next Unicorns */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "0 0 20px", paddingTop: "clamp(16px,3vw,24px)", borderTop: `1px solid ${T.rule}` }}>
            <span style={{ fontSize: 9, fontWeight: 800, color: T.gold, letterSpacing: ".2em", fontFamily: "system-ui" }}>§04</span>
            <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 900, margin: 0, color: T.ink }}>India's Next Unicorns: Watch These Companies</h2>
            <div style={{ flex: 1, height: 1, background: T.rule }} />
          </div>

          <p style={{ fontSize: "clamp(14px,1.6vw,15.5px)", lineHeight: 1.85, marginBottom: 20, color: T.ink2 }}>
            India added 5 new unicorns in 2025 alone — Netradyne, Drools, Porter, Fireflies AI, and Jumbotail. The companies most likely to cross the $1 billion threshold next share a common profile: deep B2B focus, AI-integrated workflows, and a Bharat-first rather than metro-first distribution strategy.
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: `1.5px solid ${T.ink}`, background: T.ink, gap: "1.5px", marginBottom: "clamp(24px,4vw,40px)" }}>
            {[
              { name: "Sarvam AI", why: "Indian-language LLMs with enterprise contracts — rare IP moat in AI", sector: "AI/ML" },
              { name: "Porter", why: "Profitable logistics network now a unicorn — intra-city delivery infrastructure", sector: "Logistics" },
              { name: "InternAdda", why: "India's largest student career platform — early-career network effects", sector: "EdTech/Career" },
              { name: "Neysa", why: "AI cloud infrastructure built for India — riding the GPU compute wave", sector: "AI Infrastructure" },
              { name: "Zelio", why: "Profitable EV two-wheelers for Tier 2–3 India — 200%+ stock growth post-IPO", sector: "EV/Mobility" },
              { name: "Addverb", why: "Humanoid robotics for warehouses — defence and industrial automation", sector: "Robotics" },
            ].map(({ name, why, sector }) => (
              <div key={name} style={{ background: T.white, padding: "14px 16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                  <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: 14, fontWeight: 700, color: T.ink, margin: 0 }}>{name}</p>
                  <span style={{ fontSize: 8, fontWeight: 700, color: T.green, border: `1px solid ${T.green}`, padding: "2px 6px", fontFamily: "system-ui", flexShrink: 0, marginLeft: 6 }}>{sector}</span>
                </div>
                <p style={{ fontSize: 11, color: T.ink3, margin: 0, fontFamily: "system-ui", lineHeight: 1.6 }}>{why}</p>
              </div>
            ))}
          </div>

          {/* Verdict */}
          <div style={{ background: T.ink, padding: "clamp(20px,4vw,36px)", margin: "clamp(24px,4vw,40px) 0" }}>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.gold, fontFamily: "system-ui", margin: "0 0 14px" }}>✦ UpForge Analyst Verdict</p>
            <p style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1rem,2vw,1.25rem)", fontStyle: "italic", color: "rgba(253,252,249,.88)", lineHeight: 1.75, margin: 0 }}>
              "India's unicorn factory is accelerating, not slowing. The companies that will define the next decade are being built right now in Bengaluru, Lucknow, Gurugram, and increasingly in cities that don't yet appear on any investor map. The common thread is not sector — it is obsession, speed, and a product that works for people who earn ₹30,000 a month, not $30,000."
            </p>
          </div>

          {/* Internal links */}
          <div style={{ borderTop: `1px solid ${T.rule}`, paddingTop: "clamp(16px,3vw,28px)", marginBottom: "clamp(24px,4vw,48px)" }}>
            <p style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".2em", textTransform: "uppercase", color: T.ink4, fontFamily: "system-ui", marginBottom: 14 }}>Explore the Registry</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {[["Browse All Indian Startups", "/startup"], ["Get Your Free Valuation Report", "/report"], ["How to Raise Startup Funding India 2026", "/blog/how-to-get-startup-funding-india-2026"], ["Top AI Startups India 2026", "/blog/top-ai-startups-india-2026"]].map(([label, href]) => (
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
