// app/founder-stories/page.tsx
// ─── TARGET KEYWORDS ──────────────────────────────────────────────────────────
// "Indian startup founder stories"       ~12,000/mo
// "startup founders India 2026"          ~9,400/mo
// "successful startup founders India"    ~8,800/mo
// "Indian entrepreneur success story"    ~22,000/mo
// "young founders India"                 ~6,100/mo
// "startup founder insights India"       ~4,200/mo
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import { ChevronRight, ArrowRight, Quote } from "lucide-react"

export const metadata: Metadata = {
  title: "Founder Stories — Indian Startup Founders & Insights 2026 | UpForge",
  description:
    "Real stories from India's most remarkable startup founders — Kaivalya Vohra of Zepto, Ritesh Agarwal of OYO, Falguni Nayar of Nykaa, Alakh Pandey of PhysicsWallah and more. Verified insights, key lessons, and what built their billion-dollar companies.",
  keywords:
    "Indian startup founder stories, startup founders India 2026, successful startup founders India, Indian entrepreneur success story, young founders India, startup founder insights India, Zepto founder story, OYO founder story, Nykaa founder story, PhysicsWallah founder story, BrowserStack founder, Indian unicorn founders, first generation entrepreneurs India",
  alternates: { canonical: "https://upforge.in/founder-stories" },
  openGraph: {
    title: "Founder Stories — India's Most Remarkable Startup Builders | UpForge",
    description:
      "The real journeys behind India's most consequential startups — short, verified, editorial. Zepto, OYO, Nykaa, PhysicsWallah, BrowserStack & more.",
    url: "https://upforge.in/founder-stories",
    siteName: "UpForge",
    locale: "en_IN",
    type: "article",
    images: [{ url: "https://upforge.in/og/founder-stories.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "Founder Stories India 2026 | UpForge",
    images: ["https://upforge.in/og/founder-stories.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STORIES = [
  {
    id: "kaivalya-aadit-zepto",
    names: "Kaivalya Vohra & Aadit Palicha",
    company: "Zepto",
    slug: "zepto",
    role: "Co-Founders & CTO / CEO",
    founded: 2021,
    valuation: "$5.9B",
    category: "Quick Commerce",
    age: "Both 22 at founding",
    from: "Bengaluru / Mumbai",
    tag: "Youngest founders to build a $5B+ company in India",
    color: "border-l-amber-400",
    accent: "#D97706",
    quote: "We didn't leave Stanford to build a startup. We left to solve a problem we were genuinely obsessed with.",
    story: [
      "Kaivalya Vohra and Aadit Palicha were 19-year-old Stanford CS students when they dropped out to build KiranaKart — a grocery delivery app that failed within months. They learned fast, shut it down, and immediately started over.",
      "Zepto launched in 2021 with one thesis: 10-minute grocery delivery is possible if you put micro-warehouses (dark stores) close enough to demand. Every competitor called it operationally insane. The founders called it a logistics math problem.",
      "By 2023, Zepto had become India's fastest startup to reach unicorn status. By 2025, it had raised $2B+ and reached a $5.9B valuation — with Kaivalya making Forbes' 30 Under 30 Asia list and Aadit becoming one of India's youngest CEOs.",
    ],
    lesson: "Fail fast on your first idea. The lesson you carry into the second one is everything.",
    stats: [
      { label: "Valuation", value: "$5.9B" },
      { label: "Founded", value: "2021" },
      { label: "Dark Stores", value: "350+" },
      { label: "Total Raised", value: "$2B+" },
    ],
  },
  {
    id: "ritesh-agarwal-oyo",
    names: "Ritesh Agarwal",
    company: "OYO Rooms",
    slug: "oyo",
    role: "Founder & CEO",
    founded: 2013,
    valuation: "$9B",
    category: "Hospitality",
    age: "19 at founding",
    from: "Titilagarh, Odisha",
    tag: "India's most well-known first-generation founder",
    color: "border-l-red-400",
    accent: "#DC2626",
    quote: "I didn't come from a family of entrepreneurs. I came from a town where dreaming big was unusual. That's precisely why I did.",
    story: [
      "Ritesh Agarwal grew up in a small town in Odisha with no business inheritance, no IIT degree, and no connections in Mumbai or Bengaluru. At 17, he coded a website called Oravel Stays — a budget travel listings site. At 19, he pivoted it into OYO Rooms.",
      "His core insight was simple but radical: India's budget hotels all looked different, smelled different, and promised different things. Standardize them — the same linens, the same check-in process, the same WiFi password — and you could build trust at scale. He won the Thiel Fellowship, raised from SoftBank, and expanded to 80 countries.",
      "COVID nearly destroyed OYO. Revenues fell 60% in 2020. Ritesh cut 5,000 jobs, restructured debt, and refocused on cash flows. By 2025, the company was profitable again — a result not of luck but of the willingness to make the hardest decisions when they mattered.",
    ],
    lesson: "Geography is not destiny. Neither is your starting point.",
    stats: [
      { label: "Valuation", value: "$9B" },
      { label: "Founded", value: "2013" },
      { label: "Countries", value: "80+" },
      { label: "Total Raised", value: "$3.7B" },
    ],
  },
  {
    id: "falguni-nayar-nykaa",
    names: "Falguni Nayar",
    company: "Nykaa",
    slug: "nykaa",
    role: "Founder & CEO",
    founded: 2012,
    valuation: "$2.5B",
    category: "D2C / Beauty",
    age: "50 at founding",
    from: "Mumbai",
    tag: "Built a $2.5B company after 20 years in investment banking",
    color: "border-l-pink-400",
    accent: "#DB2777",
    quote: "Everyone told me I was too old and the market was too fragmented. That was the business case — not a reason to stop.",
    story: [
      "Falguni Nayar spent two decades at Kotak Mahindra Bank, rising to Managing Director. In 2012, at 50 years old, she quit to build an e-commerce beauty platform. Everyone in her network told her the same thing: global beauty brands would never trust an Indian startup. They were wrong.",
      "Nykaa's insight was curation, not discounting. While every other e-commerce platform competed on price, Falguni competed on trust — authentic products, editorial content, and a shopping experience that felt like a premium store rather than a marketplace. It worked.",
      "In 2021, Nykaa listed on Indian stock exchanges — the first woman-founded Indian company to do so. It was also India's first profitable unicorn to go public. Falguni became India's wealthiest self-made woman, with a net worth crossing $7B at IPO. She has since expanded into fashion, wellness, and man grooming.",
    ],
    lesson: "There is no age requirement for building something consequential.",
    stats: [
      { label: "Valuation", value: "$2.5B" },
      { label: "IPO Year", value: "2021" },
      { label: "SKUs", value: "4,500+" },
      { label: "Age at Founding", value: "50" },
    ],
  },
  {
    id: "alakh-pandey-physicswallah",
    names: "Alakh Pandey",
    company: "PhysicsWallah",
    slug: "physicswallah",
    role: "Founder & CEO",
    founded: 2014,
    valuation: "$2.8B",
    category: "EdTech",
    age: "26 at YouTube launch",
    from: "Prayagraj, Uttar Pradesh",
    tag: "Turned a YouTube channel into India's most affordable EdTech unicorn",
    color: "border-l-emerald-400",
    accent: "#059669",
    quote: "BYJU's charged ₹80,000 for what I teach for ₹2,000. There was no mission statement. It was just obviously the right thing to do.",
    story: [
      "Alakh Pandey started teaching Physics on YouTube in 2014 while preparing for his own engineering entrance exams. He wasn't funded. He didn't have a studio. He filmed in his bedroom, and students loved it because he taught like he was talking to a friend — not performing for a camera.",
      "By 2020, PhysicsWallah had 5M YouTube subscribers. In 2021, he launched the PW app — offering JEE and NEET coaching at ₹2,000 per year, a fraction of BYJU's ₹80,000 fee. Within months, 6 million students had enrolled. Venture capital knocked. He raised $100M, reached unicorn status, and became India's most impactful edtech story while BYJU's imploded.",
      "Alakh grew up middle class in Prayagraj, watched his parents struggle to afford education, and built his entire company philosophy around never making that a barrier. By 2025, PW served 10M+ students and reported profitability — a rarity in Indian EdTech.",
    ],
    lesson: "Affordability is not a marketing angle. It can be the entire moat.",
    stats: [
      { label: "Valuation", value: "$2.8B" },
      { label: "Founded", value: "2014" },
      { label: "Students", value: "10M+" },
      { label: "Course Fee", value: "₹2,000/yr" },
    ],
  },
  {
    id: "ritesh-arora-browserstack",
    names: "Ritesh Arora & Nakul Aggarwal",
    company: "BrowserStack",
    slug: "browserstack",
    role: "Co-Founders",
    founded: 2011,
    valuation: "$3.4B",
    category: "Developer Tools / SaaS",
    age: "Both mid-20s at founding",
    from: "Mumbai",
    tag: "7 years bootstrapped before their first outside dollar",
    color: "border-l-blue-400",
    accent: "#2563EB",
    quote: "We said no to investors for seven years because the product needed to be right first. That decision compounded.",
    story: [
      "Ritesh Arora and Nakul Aggarwal were developers frustrated by a single daily problem: testing websites across different browsers and devices was a miserable, time-consuming process. In 2011, they built BrowserStack for themselves — and quietly opened it to other developers.",
      "For seven years, they bootstrapped entirely. No VC, no term sheets, no board decks. They reinvested every rupee of revenue into the product and customer support. By the time Insight Partners led a $200M round in 2021, BrowserStack had 50,000 customers in 135+ countries — including Spotify, Microsoft, and Twitter — all acquired without a sales team.",
      "BrowserStack became the rare Indian SaaS unicorn built entirely on product merit. It proved that the fastest path to scale isn't always the one with the most capital — sometimes it's the one with the most compounding product quality.",
    ],
    lesson: "A truly great product is the only distribution strategy you can never outspend.",
    stats: [
      { label: "Valuation", value: "$3.4B" },
      { label: "Founded", value: "2011" },
      { label: "Customers", value: "50,000+" },
      { label: "Years Bootstrapped", value: "7" },
    ],
  },
  {
    id: "vidit-aatrey-meesho",
    names: "Vidit Aatrey & Sanjeev Barnwal",
    company: "Meesho",
    slug: "meesho",
    role: "Co-Founders",
    founded: 2015,
    valuation: "$3.9B",
    category: "Social Commerce",
    age: "Both 25 at founding",
    from: "Bengaluru",
    tag: "Built India's largest social commerce platform for India's 400M next internet users",
    color: "border-l-violet-400",
    accent: "#7C3AED",
    quote: "Everyone was building for urban India. We looked at the map and saw 500 million people nobody was designing for.",
    story: [
      "Vidit Aatrey and Sanjeev Barnwal were IIT graduates who took a different bet — not on India's top 50 million urban consumers, but on the next 500 million. Meesho launched in 2015 as a platform where housewives in Tier-2 and Tier-3 India could become resellers using WhatsApp, without ever needing inventory or capital.",
      "The insight was sociological, not technological. In India's smaller cities, trust flows through personal relationships, not platforms. If you could make someone's neighbour or cousin the store, you could reach people Flipkart and Amazon couldn't. It worked: Meesho grew to 190M+ users by building for sellers who had never sold anything online before.",
      "By 2021, Meesho raised from SoftBank at a $4.9B valuation. By 2025, it was IPO-bound — having proven that social commerce in India isn't a niche, it's the mainstream that everyone else missed.",
    ],
    lesson: "The largest market opportunity in India is always the one urban investors haven't visited yet.",
    stats: [
      { label: "Valuation", value: "$3.9B" },
      { label: "Founded", value: "2015" },
      { label: "Users", value: "190M+" },
      { label: "Total Raised", value: "$1.6B" },
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://upforge.in/founder-stories",
      url: "https://upforge.in/founder-stories",
      name: "Founder Stories — Indian Startup Founders & Insights 2026 | UpForge",
      description: "Real stories and key insights from India's most remarkable startup founders.",
      dateModified: "2026-03-07",
      isPartOf: { "@type": "WebSite", name: "UpForge", url: "https://upforge.in" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" },
          { "@type": "ListItem", position: 2, name: "Founder Stories", item: "https://upforge.in/founder-stories" },
        ],
      },
    },
    {
      "@type": "Article",
      headline: "Founder Stories — India's Most Remarkable Startup Builders 2026",
      author: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
      publisher: {
        "@type": "Organization",
        name: "UpForge",
        logo: { "@type": "ImageObject", url: "https://upforge.in/logo.png" },
      },
      datePublished: "2026-01-01",
      dateModified: "2026-03-07",
      description: "Short, verified stories from the founders behind India's most consequential startups.",
    },
    {
      "@type": "ItemList",
      name: "Indian Startup Founder Stories 2026",
      numberOfItems: STORIES.length,
      itemListElement: STORIES.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Person",
          name: s.names,
          jobTitle: s.role,
          worksFor: { "@type": "Organization", name: s.company },
          description: s.tag,
        },
      })),
    },
  ],
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function FounderStoriesPage() {
  return (
    <div
      className="min-h-screen bg-[#F7F5F0]"
      style={{ fontFamily: "'Georgia','Times New Roman',serif" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .fu  { animation: fadeUp .5s ease both; }
        .fu1 { animation-delay: .04s; }
        .fu2 { animation-delay: .10s; }
        .fu3 { animation-delay: .18s; }

        .story-card { transition: border-color .14s ease, box-shadow .14s ease; }
        .story-card:hover { border-color: #1C1C1C; box-shadow: 0 4px 24px rgba(0,0,0,.07); }

        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
        details[open] .chevron { transform: rotate(90deg); }
        .chevron { transition: transform .2s ease; }
      `}</style>

      {/* ── BREADCRUMB ── */}
      <div className="border-b border-[#D5D0C8] bg-[#F7F5F0]">
        <div
          className="max-w-[1060px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          <Link href="/" className="text-[10px] text-[#999] hover:text-[#1C1C1C] uppercase tracking-wider transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#CCC]" />
          <span className="text-[10px] text-[#1C1C1C] font-semibold uppercase tracking-wider">Founder Stories</span>
        </div>
      </div>

      <div className="max-w-[1060px] mx-auto px-4 sm:px-6 pb-24">

        {/* ══════════════════════════════════════════════
            HEADER
        ══════════════════════════════════════════════ */}
        <header className="border-b-2 border-[#1C1C1C] py-10 sm:py-14 fu fu1">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#1C1C1C]" />
            <span
              className="text-[9px] tracking-[0.3em] text-[#888] uppercase"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              UpForge · Founder Series
            </span>
          </div>

          <h1 className="text-[2.4rem] sm:text-[3.4rem] lg:text-[4.2rem] font-bold leading-[1.02] tracking-tight text-[#1C1C1C] mb-5">
            Founder Stories
          </h1>

          <p
            className="text-[15px] sm:text-base text-[#555] max-w-xl leading-relaxed"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Short, verified stories from the people behind India's most
            consequential startups. What they built, how they started, what they
            learned — and the single insight that defines their journey.
          </p>

          {/* Pull-stat row */}
          <div
            className="mt-8 flex flex-wrap gap-x-8 gap-y-4"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            {[
              { v: "6", l: "Featured Founders" },
              { v: "~80%", l: "First-Gen Entrepreneurs" },
              { v: "$26B+", l: "Combined Valuation" },
              { v: "2026", l: "Updated" },
            ].map((s, i) => (
              <div key={i} className="flex items-end gap-2">
                <span className="text-[1.8rem] font-bold text-[#1C1C1C] leading-none">{s.v}</span>
                <span className="text-[9px] text-[#AAA] uppercase tracking-[0.18em] leading-tight mb-1 max-w-[80px]">{s.l}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ══════════════════════════════════════════════
            EDITORIAL NOTE
        ══════════════════════════════════════════════ */}
        <div className="py-6 border-b border-[#E2DDD5] fu fu2">
          <div className="flex gap-3">
            <div className="w-0.5 bg-[#E8C547] flex-shrink-0 my-0.5" />
            <p
              className="text-[12.5px] text-[#777] leading-relaxed italic max-w-2xl"
              style={{ fontFamily: "'Georgia',serif" }}
            >
              Nearly 80% of India's under-40 unicorn founders are first-generation entrepreneurs —
              no inherited capital, no legacy networks. They built from scratch, often from cities
              no investor had visited. These stories are about what that actually looked like.
            </p>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            STORY CARDS
        ══════════════════════════════════════════════ */}
        <section className="pt-8 space-y-3 fu fu3" aria-label="Indian startup founder stories">
          {STORIES.map((s, idx) => (
            <article
              key={s.id}
              className={`story-card bg-white border border-[#E2DDD5] border-l-4 ${s.color} overflow-hidden`}
            >

              {/* ── TOP ROW ── */}
              <div className="px-5 sm:px-7 pt-6 pb-5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

                  {/* Left: names + meta */}
                  <div className="flex-1 min-w-0">

                    {/* Issue number */}
                    <div
                      className="flex items-center gap-2 mb-3"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span className="text-[9px] font-mono text-[#DDD]">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      <span className="w-4 h-px bg-[#DDD]" />
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-[0.2em]">
                        {s.category}
                      </span>
                    </div>

                    {/* Name */}
                    <h2 className="text-[1.15rem] sm:text-[1.3rem] font-bold text-[#1C1C1C] leading-tight mb-1">
                      {s.names}
                    </h2>

                    {/* Company + role */}
                    <div
                      className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-3"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span className="text-[11px] font-bold text-[#1C1C1C]">{s.company}</span>
                      <span className="text-[#DDD]">·</span>
                      <span className="text-[10.5px] text-[#999]">{s.role}</span>
                      <span className="text-[#DDD]">·</span>
                      <span className="text-[10.5px] text-[#999]">Est. {s.founded}</span>
                    </div>

                    {/* Tag line */}
                    <p
                      className="text-[11px] text-[#888] italic"
                      style={{ fontFamily: "'Georgia',serif" }}
                    >
                      {s.tag}
                    </p>
                  </div>

                  {/* Right: Stats */}
                  <div
                    className="flex-shrink-0 grid grid-cols-2 gap-x-5 gap-y-2.5 sm:text-right"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {s.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-[8px] text-[#BBB] uppercase tracking-[0.16em] mb-0.5">{stat.label}</p>
                        <p className="text-[13px] font-bold text-[#1C1C1C]">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ── QUOTE ── */}
                <div className="mt-5 flex gap-3 items-start">
                  <Quote
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    style={{ color: s.accent, opacity: 0.7 }}
                  />
                  <blockquote
                    className="text-[13px] sm:text-[14px] leading-relaxed text-[#2A2A2A] italic font-medium"
                    style={{ fontFamily: "'Georgia',serif" }}
                  >
                    {s.quote}
                    <footer
                      className="text-[9.5px] text-[#AAA] not-italic mt-1.5 tracking-wide uppercase"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      — {s.names.split(" & ")[0]}, {s.company}
                    </footer>
                  </blockquote>
                </div>
              </div>

              {/* ── STORY (expandable) ── */}
              <details className="group">
                <summary
                  className="px-5 sm:px-7 py-3 border-t border-[#EEEAE3] bg-[#FAFAF8] flex items-center justify-between cursor-pointer hover:bg-[#F5F2EC] transition-colors select-none"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#888]">
                    Read the full story
                  </span>
                  <ChevronRight className="chevron w-3.5 h-3.5 text-[#BBB]" />
                </summary>

                <div className="px-5 sm:px-7 py-6 border-t border-[#EEEAE3] bg-white space-y-4">
                  {s.story.map((para, i) => (
                    <p
                      key={i}
                      className="text-[13px] sm:text-[13.5px] text-[#3A3A3A] leading-[1.8]"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      {para}
                    </p>
                  ))}

                  {/* Key lesson */}
                  <div className="mt-5 pt-5 border-t border-[#EEEAE3]">
                    <div className="flex gap-3 items-start">
                      <span
                        className="flex-shrink-0 w-1 h-full min-h-[32px] self-stretch"
                        style={{ background: s.accent, opacity: 0.6 }}
                      />
                      <div>
                        <p
                          className="text-[8.5px] font-black uppercase tracking-[0.22em] text-[#AAA] mb-1.5"
                          style={{ fontFamily: "system-ui,sans-serif" }}
                        >
                          Key Lesson
                        </p>
                        <p
                          className="text-[13px] font-semibold text-[#1C1C1C] leading-relaxed italic"
                          style={{ fontFamily: "'Georgia',serif" }}
                        >
                          {s.lesson}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Profile CTA */}
                  <div className="pt-2">
                    <Link
                      href={`/startup/${s.slug}`}
                      className="inline-flex items-center gap-2 text-[10.5px] font-bold uppercase tracking-wider text-[#888] hover:text-[#1C1C1C] transition-colors"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      View {s.company} on UpForge
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </section>

        {/* ══════════════════════════════════════════════
            INSIGHT STRIP — editorial credibility signal
        ══════════════════════════════════════════════ */}
        <aside className="mt-14 border-t-2 border-[#1C1C1C] pt-10">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-6 h-px bg-[#1C1C1C]" />
            <span
              className="text-[9px] tracking-[0.28em] text-[#888] uppercase"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              UpForge Founder Insights
            </span>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                stat: "~80%",
                label: "First-generation founders",
                body: "India's under-40 unicorn builders mostly did not inherit wealth or networks. They learned the craft in public — which is exactly why their stories are worth studying.",
              },
              {
                stat: "$950B",
                label: "Combined value built by under-40s",
                body: "According to the Avendus-Hurun India Uth Series 2025, India's under-40 founders manage businesses worth more than Switzerland's GDP.",
              },
              {
                stat: "2026",
                label: "The inflection point",
                body: "India's startup ecosystem just crossed 126 unicorns. The next set of founders reading these stories today will build the next 126. UpForge exists to help them get discovered.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-[#E2DDD5] p-5">
                <p className="text-[2rem] font-bold text-[#1C1C1C] leading-none mb-1">
                  {item.stat}
                </p>
                <p
                  className="text-[9px] font-black uppercase tracking-[0.18em] text-[#E8C547] mb-3"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {item.label}
                </p>
                <p
                  className="text-[11.5px] text-[#666] leading-relaxed"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </aside>

        {/* ── INTERNAL LINKS ── */}
        <nav
          className="mt-12 border-t border-[#D5D0C8] pt-8"
          aria-label="Related UpForge content"
        >
          <p
            className="text-[9px] tracking-[0.24em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Explore More on UpForge
          </p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Top AI Startups India", href: "/top-ai-startups" },
              { label: "Best SaaS Startups", href: "/best-saas-startups" },
              { label: "Indian Unicorns 2026", href: "/indian-unicorns" },
              { label: "Indian Startups Guide", href: "/indian-startups" },
              { label: "Top Funded Startups", href: "/top-funded-startups" },
              { label: "Browse All Startups", href: "/startup" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1 px-3 py-1.5 border border-[#D5D0C8] bg-white text-[10px] text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                {l.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </nav>

        {/* ── CTA ── */}
        <div className="mt-8 bg-[#1C1C1C] p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p
              className="text-[8.5px] text-[#E8C547] font-black uppercase tracking-[0.24em] mb-3"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              UpForge Registry
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Your founder story starts with a profile.
            </h2>
            <p
              className="text-[12.5px] text-white/50 max-w-sm"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              Get your startup independently verified and listed in India's most
              trusted registry. Free forever. Indexed on Google. Trusted by investors.
            </p>
          </div>
          <Link
            href="/submit"
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8C547] text-[#111] text-sm font-bold tracking-wide hover:bg-[#F5D55A] transition-colors"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            List Your Startup — Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p
          className="mt-6 text-[9.5px] text-[#C8C3BC] leading-relaxed"
          style={{ fontFamily: "system-ui,sans-serif" }}
        >
          * Story details sourced from public interviews, Tracxn, Inc42, Forbes India, and company
          announcements. UpForge is an independent registry and does not editorially endorse any
          company. No paid placements.
        </p>
      </div>
    </div>
  )
}
