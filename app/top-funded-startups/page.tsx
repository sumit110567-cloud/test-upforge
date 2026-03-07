// app/top-funded-startups/page.tsx
// ─── TARGET KEYWORDS ──────────────────────────────────────────────────────────
// "top funded startups India"          ~16,000/mo
// "most funded startups India 2026"    ~8,400/mo
// "highest funded Indian startups"     ~5,800/mo
// "India startup funding rounds 2025"  ~7,200/mo
// "recently funded startups India"     ~9,100/mo
// "startup funding India 2026"         ~12,000/mo
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, BadgeCheck, TrendingUp, DollarSign, Layers } from "lucide-react"

export const metadata: Metadata = {
  title: "Top Funded Startups in India 2026 — Biggest Rounds | UpForge",
  description:
    "India's most funded startups ranked by total capital raised — Ola Cabs ($3.8B), OYO ($3.7B), Zepto ($2.5B) and more. Recent 2025-26 funding rounds, sector breakdown & investor intelligence. Updated March 2026.",
  keywords: "top funded startups India, most funded startups India 2026, highest funded Indian startups, India startup funding 2025, recently funded startups India, startup funding rounds India, Zepto funding, Meesho funding, PhysicsWallah valuation, Indian startup investment, VC funding India, tiger global india, sequoia india startups, softbank india",
  alternates: { canonical: "https://upforge.in/top-funded-startups" },
  openGraph: {
    title: "Top Funded Startups India 2026 — Biggest Rounds | UpForge",
    description: "India's most funded startups ranked — cumulative funding, latest rounds, investors & valuation. $11.6B raised in 2025. March 2026.",
    url: "https://upforge.in/top-funded-startups",
    siteName: "UpForge", locale: "en_IN", type: "article",
    images: [{ url: "https://upforge.in/og/top-funded-startups.png", width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", site: "@upforge_in", title: "Top Funded Startups India 2026 | UpForge", images: ["https://upforge.in/og/top-funded-startups.png"] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
}

const TOP_FUNDED = [
  { rank: 1, name: "Ola Cabs", slug: "ola-cabs", total: "$3.8B", lastRound: "Series J", lastAmt: "Undisclosed", lastYear: 2023, sector: "Mobility / Ride-hailing", hq: "Bengaluru", valuation: "$7.3B", investors: "SoftBank, Tiger Global, Accel, DST Global", note: "India's largest ride-hailing company. Parent company ANI Technologies. SoftBank is the largest external shareholder." },
  { rank: 2, name: "OYO (PRISM)", slug: "oyo", total: "$3.7B", lastRound: "Series G", lastAmt: "$807M", lastYear: 2021, sector: "Hospitality / Travel Tech", hq: "Delhi", valuation: "$9B", investors: "SoftBank, Airbnb, Sequoia, Lightspeed", note: "World's third-largest hotel chain by property count. Filed DRHP for IPO. Founder Ritesh Agarwal started at 19." },
  { rank: 3, name: "Zepto", slug: "zepto", total: "$2.5B", lastRound: "Series H", lastAmt: "$350M", lastYear: 2025, sector: "Quick Commerce", hq: "Mumbai", valuation: "$5.9B", investors: "StepStone, Nexus, Y Combinator, Contrary", note: "10-minute grocery delivery. Founded by two IIT dropouts — Kaivalya Vohra and Aadit Palicha — aged 22. Fastest startup to reach $5B+ in India." },
  { rank: 4, name: "Lenskart", slug: "lenskart", total: "$1.8B", lastRound: "Series H", lastAmt: "$200M", lastYear: 2023, sector: "D2C / Eyewear", hq: "Delhi", valuation: "$4.5B", investors: "SoftBank, KKR, Temasek, Premji Invest", note: "Omnichannel eyewear retailer — 2,000+ stores across India, Singapore, UAE. Preparing for IPO listing in 2026." },
  { rank: 5, name: "Meesho", slug: "meesho", total: "$1.6B", lastRound: "Secondary", lastAmt: "$275M", lastYear: 2024, sector: "Social Commerce", hq: "Bengaluru", valuation: "$3.9B", investors: "SoftBank, Naspers, Prosus, Y Combinator", note: "India's leading social commerce platform enabling small businesses to sell online. 150M+ transacting users. IPO preparations underway." },
  { rank: 6, name: "CRED", slug: "cred", total: "$1.4B", lastRound: "Series F", lastAmt: "$140M", lastYear: 2023, sector: "Fintech / Credit Cards", hq: "Bengaluru", valuation: "$6.4B", investors: "DST Global, Tiger Global, Sequoia Capital", note: "Premium credit card management platform by serial founder Kunal Shah. Expanding into lending, payments, and investing." },
  { rank: 7, name: "Razorpay", slug: "razorpay", total: "$1.4B", lastRound: "Series F", lastAmt: "$375M", lastYear: 2021, sector: "Payments Infrastructure", hq: "Bengaluru", valuation: "$7.5B", investors: "Sequoia, GIC, Tiger Global, Ribbit Capital", note: "India's leading payment gateway — processes payments for 8M+ businesses. Reverse-flipped to India in 2023 for domestic IPO preparation." },
  { rank: 8, name: "Groww", slug: "groww", total: "$1.2B", lastRound: "Series F", lastAmt: "$251M", lastYear: 2022, sector: "WealthTech / Stock Investing", hq: "Bengaluru", valuation: "$7B", investors: "Tiger Global, Sequoia, YC, Ribbit", note: "India's largest retail investment platform — 12M+ active investors. Plans to raise ₹8,500 crore via IPO in 2026. Reverse-flipped to India." },
  { rank: 9, name: "Neysa", slug: "neysa", total: "$600M", lastRound: "Series B", lastAmt: "$600M", lastYear: 2026, sector: "AI Cloud / GPU Infrastructure", hq: "Bengaluru", valuation: "$1B+", investors: "Blackstone", note: "India's newest unicorn (Feb 2026). AI-native GPU cloud platform offering GPU-as-a-Service and AI inference. The largest AI infra round in India history." },
  { rank: 10, name: "PhysicsWallah", slug: "physicswallah", total: "$700M", lastRound: "Series B", lastAmt: "$210M", lastYear: 2024, sector: "EdTech", hq: "Noida", valuation: "$2.8B", investors: "GSV Ventures, WestBridge Capital, Hornbill", note: "India's most affordable EdTech platform — started as a YouTube channel, now serves 10M+ learners across JEE, NEET, and UPSC prep at a fraction of BYJU's prices." },
]

const RECENT_ROUNDS = [
  { startup: "Neysa", sector: "AI Cloud", amount: "$600M", type: "Series B", month: "Feb 2026", hot: true },
  { startup: "Juspay", sector: "Payments Infra", amount: "$45M", type: "Series D", month: "Jan 2026", hot: true },
  { startup: "Zepto", sector: "Quick Commerce", amount: "$350M", type: "Series H", month: "Dec 2025", hot: false },
  { startup: "Darwinbox", sector: "HR SaaS", amount: "$40M+", type: "Series D", month: "Nov 2025", hot: false },
  { startup: "TrueMeds", sector: "HealthTech", amount: "$85M", type: "Series C", month: "Oct 2025", hot: false },
  { startup: "Porter", sector: "Logistics", amount: "$200M", type: "Series F", month: "Sep 2025", hot: false },
]

const TOP_INVESTORS = [
  { name: "Sequoia Capital India", portfolio: "Razorpay, CRED, Groww, Unacademy, BrowserStack", focus: "All stages, all sectors", deals: "20+ unicorns" },
  { name: "Tiger Global Management", portfolio: "CRED, Upstox, Groww, Infra.Market, Games24x7", focus: "Growth-stage internet", deals: "15+ unicorns" },
  { name: "SoftBank Group", portfolio: "OYO, Lenskart, Meesho, Ola", focus: "Late-stage scale-up", deals: "$5B+ deployed in India" },
  { name: "Accel India", portfolio: "Flipkart, Freshworks, Swiggy, BrowserStack", focus: "Seed to Series B", deals: "Oldest India-focused VC" },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": "https://upforge.in/top-funded-startups", url: "https://upforge.in/top-funded-startups", name: "Top Funded Startups India 2026 | UpForge", dateModified: "2026-03-07", isPartOf: { "@type": "WebSite", name: "UpForge", url: "https://upforge.in" }, breadcrumb: { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://upforge.in" }, { "@type": "ListItem", position: 2, name: "Top Funded Startups India 2026", item: "https://upforge.in/top-funded-startups" }] } },
    { "@type": "ItemList", name: "Most Funded Startups India 2026", numberOfItems: 10, itemListElement: TOP_FUNDED.map((s, i) => ({ "@type": "ListItem", position: i + 1, item: { "@type": "Organization", name: s.name, description: s.note } })) },
    { "@type": "Article", headline: "Top Funded Startups in India 2026", author: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" }, datePublished: "2026-01-01", dateModified: "2026-03-07" },
  ],
}

export default function TopFundedStartupsPage() {
  return (
    <div className="min-h-screen bg-[#F7F5F0]" style={{ fontFamily: "'Georgia','Times New Roman',serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        @keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .fu{animation:fadeUp .5s ease both}
        .fu1{animation-delay:.04s}.fu2{animation-delay:.12s}.fu3{animation-delay:.2s}.fu4{animation-delay:.28s}.fu5{animation-delay:.36s}
        .card:hover{background:white;border-color:#1C1C1C;box-shadow:0 2px 16px rgba(0,0,0,.06)}
        .card{transition:all .15s ease}
      `}</style>

      <div className="border-b border-[#D5D0C8] bg-[#F7F5F0]">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 py-3 flex items-center gap-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
          <Link href="/" className="text-[10px] text-[#999] hover:text-[#1C1C1C] uppercase tracking-wider">Home</Link>
          <ChevronRight className="w-3 h-3 text-[#CCC]" />
          <span className="text-[10px] text-[#1C1C1C] font-semibold uppercase tracking-wider">Top Funded Startups India 2026</span>
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 pb-20">

        {/* HEADER */}
        <header className="border-b-2 border-[#1C1C1C] py-10 sm:py-14 fu fu1">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-8 h-px bg-[#1C1C1C]" />
            <span className="text-[9px] tracking-[0.3em] text-[#888] uppercase" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Intelligence · March 2026</span>
          </div>
          <h1 className="text-[2.6rem] sm:text-[3.6rem] lg:text-[4.4rem] font-bold leading-[1.0] tracking-tight text-[#1C1C1C] mb-6">
            Top Funded Startups<br />
            <span className="text-[#A89060] italic">in India</span> — 2026
          </h1>
          <p className="text-[15px] sm:text-base text-[#555] max-w-2xl leading-relaxed mb-8" style={{ fontFamily: "system-ui,sans-serif" }}>
            Indian startups raised <strong className="text-[#1C1C1C]">$11.6B in 2025</strong> across 936 deals. Here are the most capital-intensive companies — ranked by total funding raised — along with recent rounds, key investors, and what their capital concentration tells us about India's next decade.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 border border-[#1C1C1C] divide-x divide-y sm:divide-y-0 divide-[#1C1C1C]">
            {[
              { v: "$11.6B", l: "Raised in 2025" },
              { v: "936", l: "Deals in 2025" },
              { v: "$3.32B", l: "Raised YTD 2026" },
              { v: "332", l: "Deals YTD 2026" },
            ].map((s, i) => (
              <div key={i} className="px-5 py-4">
                <p className="text-2xl sm:text-3xl font-bold text-[#1C1C1C] leading-none mb-1.5">{s.v}</p>
                <p className="text-[9px] text-[#999] uppercase tracking-[0.18em]" style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </header>

        {/* RANKED LIST */}
        <section className="pt-8 fu fu2">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-[10px] font-bold tracking-[0.24em] uppercase text-[#888]" style={{ fontFamily: "system-ui,sans-serif" }}>Top 10 · Ranked by Total Funding Raised</h2>
            <div className="flex items-center gap-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="relative flex h-1.5 w-1.5"><span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" /><span className="relative h-1.5 w-1.5 rounded-full bg-emerald-500" /></span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">Verified · March 2026</span>
            </div>
          </div>
          <div className="space-y-2">
            {TOP_FUNDED.map((s) => (
              <article key={s.rank} className="card border border-[#E2DDD5] bg-white/70 p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-9 pt-0.5 text-center">
                    <span className="text-[11px] font-mono text-[#CCC]" style={{ fontFamily: "system-ui,sans-serif" }}>{String(s.rank).padStart(2,"0")}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <h3 className="text-[1.05rem] font-bold text-[#1C1C1C] leading-tight">{s.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-x-3 gap-y-0.5 mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span className="text-[10px] font-semibold text-[#888] uppercase tracking-wider">{s.sector}</span>
                      <span className="text-[#DDD]">·</span>
                      <span className="text-[10px] text-[#AAA]">{s.hq}</span>
                    </div>
                    <p className="text-[12.5px] text-[#444] leading-relaxed mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>{s.note}</p>
                    <div className="flex flex-wrap items-end gap-x-5 gap-y-2" style={{ fontFamily: "system-ui,sans-serif" }}>
                      {[
                        { label: "Total Raised", value: s.total, cls: "text-[#1C1C1C] font-bold text-[16px]" },
                        { label: "Last Round", value: `${s.lastAmt} (${s.lastRound})`, cls: "text-emerald-700 font-bold" },
                        { label: "Valuation", value: s.valuation, cls: "text-[#555] font-semibold" },
                      ].map((m, i) => (
                        <div key={i}>
                          <span className="text-[8.5px] text-[#BBB] uppercase tracking-wider block mb-0.5">{m.label}</span>
                          <span className={`text-[13px] ${m.cls}`}>{m.value}</span>
                        </div>
                      ))}
                      <div className="flex-1 min-w-[120px]">
                        <span className="text-[8.5px] text-[#BBB] uppercase tracking-wider block mb-0.5">Key Investors</span>
                        <span className="text-[11.5px] text-[#666]">{s.investors}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <Link href={`/startup/${s.slug}`} className="inline-flex items-center gap-1 px-3 py-2 bg-[#1C1C1C] text-white text-[9.5px] font-bold uppercase tracking-wider hover:bg-[#333] transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>
                      Profile <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* RECENT ROUNDS */}
        <section className="py-10 border-t border-[#D5D0C8] mt-10 fu fu3">
          <div className="flex items-center gap-2 mb-5">
            <DollarSign className="w-4 h-4 text-[#999]" />
            <h2 className="text-base font-bold text-[#1C1C1C]">Recent Notable Funding Rounds</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-2">
            {RECENT_ROUNDS.map((r, i) => (
              <div key={i} className="bg-white border border-[#E2DDD5] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {r.hot && <span className="text-[7px] bg-[#1C1C1C] text-[#E8C547] px-1.5 py-0.5 font-black uppercase tracking-[0.12em] flex-shrink-0" style={{ fontFamily: "system-ui,sans-serif" }}>NEW</span>}
                  <div>
                    <p className="text-[13px] font-bold text-[#1C1C1C] leading-tight">{r.startup}</p>
                    <p className="text-[9px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>{r.sector} · {r.type} · {r.month}</p>
                  </div>
                </div>
                <span className="text-[15px] font-bold text-emerald-700 flex-shrink-0" style={{ fontFamily: "system-ui,sans-serif" }}>{r.amount}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TOP INVESTORS */}
        <section className="py-10 border-t border-[#D5D0C8] fu fu4">
          <div className="flex items-center gap-2 mb-5">
            <Layers className="w-4 h-4 text-[#999]" />
            <h2 className="text-base font-bold text-[#1C1C1C]">India's Power Investors</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-3">
            {TOP_INVESTORS.map((inv, i) => (
              <div key={i} className="bg-white border border-[#E2DDD5] p-4">
                <h3 className="text-[13px] font-bold text-[#1C1C1C] mb-1.5">{inv.name}</h3>
                <p className="text-[9px] font-bold text-[#E8C547] uppercase tracking-wider mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>{inv.deals}</p>
                <p className="text-[11px] text-[#AAA] mb-1.5" style={{ fontFamily: "system-ui,sans-serif" }}>Focus: {inv.focus}</p>
                <p className="text-[11px] text-[#666]" style={{ fontFamily: "system-ui,sans-serif" }}>Portfolio includes {inv.portfolio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal nav */}
        <nav className="border-t border-[#D5D0C8] pt-8 fu fu5" aria-label="Related startup lists">
          <p className="text-[9px] tracking-[0.24em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>More UpForge Lists</p>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Top AI Startups India", href: "/top-ai-startups" },
              { label: "Best SaaS Startups", href: "/best-saas-startups" },
              { label: "Indian Unicorns 2026", href: "/indian-unicorns" },
              { label: "Indian Startups Guide", href: "/indian-startups" },
              { label: "Browse All Startups", href: "/startup" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="inline-flex items-center gap-1 px-3 py-1.5 border border-[#D5D0C8] text-[10px] text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors bg-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                {l.label} <ChevronRight className="w-3 h-3" />
              </Link>
            ))}
          </div>
        </nav>

        <div className="mt-8 bg-[#1C1C1C] p-7 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2"><BadgeCheck className="w-4 h-4 text-[#E8C547]" /><span className="text-[9px] text-white/30 uppercase tracking-[0.22em]" style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Registry</span></div>
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Is your startup in the next funding wave?</h2>
            <p className="text-[12.5px] text-white/50 max-w-sm" style={{ fontFamily: "system-ui,sans-serif" }}>Investors research startups on UpForge. Get listed, verified, and found. Free forever.</p>
          </div>
          <Link href="/submit" className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3.5 bg-[#E8C547] text-[#111] text-sm font-bold tracking-wide hover:bg-[#F5D55A] transition-colors" style={{ fontFamily: "system-ui,sans-serif" }}>
            List Your Startup — Free <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="mt-6 text-[9.5px] text-[#C8C3BC] leading-relaxed" style={{ fontFamily: "system-ui,sans-serif" }}>
          * All funding data sourced from Tracxn, Inc42, Growthlist, and public company announcements as of March 2026. UpForge is an independent registry — no paid placements or sponsored rankings.
        </p>
      </div>
    </div>
  )
}
