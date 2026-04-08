"use client"

// components/top-stories.tsx — MAGAZINE EDITORIAL v1
// Replaces the old FounderChronicle entirely.
// FT.com / Economist style: ivory bg, maroon accents, serif fonts, book-like cards
// Shows stories as a proper editorial magazine front page — date stamped, category tagged

import { useState } from "react"

export interface Story {
  id: string
  category: string
  headline: string
  standfirst: string // The sub-headline / deck
  founder: string
  company: string
  companyTag: string  // e.g. "Unicorn · $2.4B"
  readTime: string
  date: string        // e.g. "7 April 2026"
  issue: string       // e.g. "Vol. 3, No. 14"
  href: string
  isFeatured?: boolean
}

// ── EDIT THIS ARRAY to update stories ────────────────────────────────────────
export const TOP_STORIES: Story[] = [
  {
    id: "s1",
    category: "Cover Story",
    headline: "The Zepto Doctrine: How a 19-Year-Old Rewired India's Grocery Supply Chain",
    standfirst: "Aadit Palicha's obsession with 10-minute delivery wasn't a marketing gimmick — it was an engineering conviction that created an entirely new category.",
    founder: "Aadit Palicha",
    company: "Zepto",
    companyTag: "Quick Commerce · Unicorn",
    readTime: "14 min",
    date: "7 April 2026",
    issue: "Vol. 3, No. 14",
    href: "/startup/aadit-palicha-zepto",
    isFeatured: true,
  },
  {
    id: "s2",
    category: "Finance",
    headline: "Zerodha's Profitable Paradox: Growing Without Spending",
    standfirst: "While rivals burned capital on advertising, Nithin Kamath built India's largest brokerage on word-of-mouth and product obsession.",
    founder: "Nithin Kamath",
    company: "Zerodha",
    companyTag: "Fintech · Profitable",
    readTime: "11 min",
    date: "4 April 2026",
    issue: "Vol. 3, No. 14",
    href: "/startup/nithin-kamath-zerodha",
  },
  {
    id: "s3",
    category: "Strategy",
    headline: "CRED and the Counterintuitive Art of Choosing Your Customer",
    standfirst: "Kunal Shah built a $6.4B company by deliberately excluding 95% of potential users. The logic behind the industry's most controversial strategy.",
    founder: "Kunal Shah",
    company: "CRED",
    companyTag: "Fintech · $6.4B",
    readTime: "9 min",
    date: "2 April 2026",
    issue: "Vol. 3, No. 13",
    href: "/startup/kunal-shah-cred",
  },
  {
    id: "s4",
    category: "Commerce",
    headline: "Nykaa at Scale: Falguni Nayar's Lesson in Patient Capital",
    standfirst: "India's most celebrated female founder didn't chase hypergrowth. She built a beauty empire by understanding that trust is a moat.",
    founder: "Falguni Nayar",
    company: "Nykaa",
    companyTag: "D2C Beauty · Listed",
    readTime: "12 min",
    date: "31 March 2026",
    issue: "Vol. 3, No. 13",
    href: "/startup/falguni-nayar-nykaa",
  },
  {
    id: "s5",
    category: "Education",
    headline: "PhysicsWallah: The ₹1 Crore Teacher Who Became a $2.8B Founder",
    standfirst: "Alakh Pandey started with a YouTube channel and no funding. What followed is the most improbable unicorn story in Indian edtech history.",
    founder: "Alakh Pandey",
    company: "PhysicsWallah",
    companyTag: "Edtech · $2.8B",
    readTime: "10 min",
    date: "28 March 2026",
    issue: "Vol. 3, No. 12",
    href: "/startup/alakh-pandey-physicswallah",
  },
]

// Today's date formatted
const TODAY = new Date().toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long", year: "numeric" })

// ─────────────────────────────────────────────────────────────────────────────

function CategoryPill({ label }: { label: string }) {
  const colorMap: Record<string, string> = {
    "Cover Story": "#8b1a1a",
    "Finance": "#1a3d5c",
    "Strategy": "#2d5a1a",
    "Commerce": "#5a3d1a",
    "Education": "#3d1a5a",
  }
  const bg = colorMap[label] ?? "#8b1a1a"
  return (
    <span
      className="inline-block text-[9px] tracking-[0.2em] uppercase font-bold px-2.5 py-1"
      style={{
        background: bg,
        color: "#faf7f2",
        fontFamily: "'Times New Roman', Georgia, serif",
      }}
    >
      {label}
    </span>
  )
}

function FeaturedStoryCard({ story }: { story: Story }) {
  return (
    <a
      href={story.href}
      className="group block border-b-2 pb-8 mb-8 story-featured"
      style={{ borderColor: "#8b1a1a" }}
    >
      <div className="mb-3">
        <CategoryPill label={story.category} />
      </div>

      <h2
        className="leading-tight mb-4 group-hover:text-[#8b1a1a] transition-colors duration-200"
        style={{
          fontFamily: "'Times New Roman', Georgia, 'Palatino Linotype', serif",
          fontSize: "clamp(26px, 3.5vw, 42px)",
          color: "#1a0a0a",
          fontWeight: 700,
        }}
      >
        {story.headline}
      </h2>

      <p
        className="leading-relaxed mb-6"
        style={{
          fontFamily: "'Times New Roman', Georgia, serif",
          fontSize: "17px",
          color: "#3d2b2b",
        }}
      >
        {story.standfirst}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <div
              className="font-semibold text-sm"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
            >
              {story.founder}
            </div>
            <div
              className="text-xs"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              {story.company} · {story.companyTag}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] tracking-widest uppercase text-[#8b6a6a]" style={{ fontFamily: "'Times New Roman', serif" }}>
            {story.readTime} read
          </span>
          <span
            className="text-sm font-semibold flex items-center gap-1 text-[#8b1a1a] group-hover:gap-2 transition-all"
            style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
          >
            Read →
          </span>
        </div>
      </div>
    </a>
  )
}

function SecondaryStoryCard({ story, index }: { story: Story; index: number }) {
  return (
    <a
      href={story.href}
      className="group block py-6 border-b story-secondary"
      style={{ borderColor: "#e8ddd0", animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start gap-5">
        {/* Issue number */}
        <div
          className="flex-shrink-0 text-4xl font-bold leading-none pt-1 select-none"
          style={{ color: "#e8ddd0", fontFamily: "'Times New Roman', Georgia, serif" }}
        >
          {String(index + 2).padStart(2, "0")}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <CategoryPill label={story.category} />
          </div>

          <h3
            className="leading-tight mb-2 group-hover:text-[#8b1a1a] transition-colors duration-200"
            style={{
              fontFamily: "'Times New Roman', Georgia, 'Palatino Linotype', serif",
              fontSize: "18px",
              color: "#1a0a0a",
              fontWeight: 700,
            }}
          >
            {story.headline}
          </h3>

          <p
            className="text-sm leading-relaxed mb-3 line-clamp-2"
            style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#5a4040" }}
          >
            {story.standfirst}
          </p>

          <div className="flex items-center justify-between">
            <div
              className="text-xs"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              {story.founder} · <span className="italic">{story.company}</span> · {story.date}
            </div>
            <span className="text-xs tracking-widest uppercase text-[#8b6a6a]" style={{ fontFamily: "'Times New Roman', serif" }}>
              {story.readTime}
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export function TopStoriesSection() {
  const featured = TOP_STORIES.find((s) => s.isFeatured)!
  const secondary = TOP_STORIES.filter((s) => !s.isFeatured)

  return (
    <section
      className="py-0 overflow-hidden"
      style={{ background: "#faf7f2" }}
    >
      {/* Section masthead */}
      <div
        className="border-b-2 border-t"
        style={{ borderColor: "#8b1a1a", borderTopColor: "#e8ddd0" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-baseline justify-between flex-wrap gap-4">
          <div className="flex items-baseline gap-6">
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
            >
              This Week's Edition
            </h2>
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-[#8b6a6a]"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              {TODAY}
            </span>
          </div>
          <a
            href="/startup"
            className="text-xs tracking-widest uppercase text-[#8b1a1a] hover:text-[#6b1212] transition-colors font-semibold"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            Full Archive →
          </a>
        </div>
      </div>

      {/* Two-column editorial layout */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-0">

          {/* LEFT: Featured + secondary stories */}
          <div className="border-r py-10 pr-0 lg:pr-10" style={{ borderColor: "#e8ddd0" }}>
            <FeaturedStoryCard story={featured} />
            {secondary.map((story, i) => (
              <SecondaryStoryCard key={story.id} story={story} index={i} />
            ))}
          </div>

          {/* RIGHT: Sidebar — editorial style */}
          <div className="py-10 pl-0 lg:pl-10">

            {/* Current issue block */}
            <div
              className="p-6 mb-8"
              style={{ background: "#8b1a1a" }}
            >
              <div
                className="text-[9px] tracking-[0.25em] uppercase mb-3 opacity-70"
                style={{ fontFamily: "'Times New Roman', serif", color: "#faf7f2" }}
              >
                Current Issue
              </div>
              <div
                className="text-2xl font-bold mb-1 leading-tight"
                style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#faf7f2" }}
              >
                The Founder<br />Chronicle
              </div>
              <div
                className="text-xs mb-4 opacity-70"
                style={{ fontFamily: "'Times New Roman', serif", color: "#faf7f2" }}
              >
                Vol. 3, No. 14 · April 2026
              </div>
              <div className="h-px bg-white/20 mb-4" />
              <div
                className="text-xs leading-relaxed opacity-80"
                style={{ fontFamily: "'Times New Roman', serif", color: "#faf7f2" }}
              >
                India's most trusted independent publication on startup founders. Verified data, no PR fluff.
              </div>
            </div>

            {/* Quick reads */}
            <div className="mb-8">
              <div
                className="text-[10px] tracking-[0.2em] uppercase text-[#8b1a1a] font-semibold mb-4 pb-2 border-b"
                style={{ fontFamily: "'Times New Roman', serif", borderColor: "#8b1a1a" }}
              >
                Also In This Issue
              </div>
              {[
                { title: "Groww's Wealth Management Pivot", tag: "Wealth Tech", href: "/startup/lalit-keshre-groww" },
                { title: "How Meesho Cracked Tier-3 India", tag: "Commerce", href: "/startup/vidit-aatrey-meesho" },
                { title: "OYO's Global Restructure — What Worked", tag: "Hospitality", href: "/startup/ritesh-agarwal-oyo" },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  className="group flex items-start gap-3 py-3 border-b hover:bg-[#f5f0e8] -mx-2 px-2 transition-colors"
                  style={{ borderColor: "#e8ddd0" }}
                >
                  <span
                    className="flex-shrink-0 text-sm font-bold text-[#c9b99a] leading-tight pt-0.5"
                    style={{ fontFamily: "'Times New Roman', serif" }}
                  >
                    {String(i + 1).padStart(2, "0")}.
                  </span>
                  <div>
                    <div
                      className="text-sm font-semibold leading-snug group-hover:text-[#8b1a1a] transition-colors mb-1"
                      style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
                    >
                      {item.title}
                    </div>
                    <div
                      className="text-[10px] tracking-widest uppercase"
                      style={{ color: "#8b6a6a", fontFamily: "'Times New Roman', serif" }}
                    >
                      {item.tag}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Registry stats */}
            <div
              className="p-6 border"
              style={{ borderColor: "#c9b99a", background: "#f5f0e8" }}
            >
              <div
                className="text-[10px] tracking-[0.2em] uppercase text-[#8b1a1a] font-semibold mb-4"
                style={{ fontFamily: "'Times New Roman', serif" }}
              >
                Registry Intelligence
              </div>
              {[
                { label: "Verified Startups", value: "5,000+" },
                { label: "Countries Covered", value: "50+" },
                { label: "New This Week", value: "34" },
                { label: "Funded (Series A+)", value: "1,240" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-baseline py-2 border-b"
                  style={{ borderColor: "#e8ddd0" }}
                >
                  <span
                    className="text-xs"
                    style={{ fontFamily: "'Times New Roman', serif", color: "#5a4040" }}
                  >
                    {stat.label}
                  </span>
                  <span
                    className="font-bold text-sm"
                    style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#8b1a1a" }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
              <a
                href="/startup"
                className="mt-4 flex items-center justify-center gap-2 py-3 w-full text-xs tracking-widest uppercase font-semibold transition-all"
                style={{
                  background: "#8b1a1a",
                  color: "#faf7f2",
                  fontFamily: "'Times New Roman', serif",
                }}
              >
                Browse Registry →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .story-featured { animation: fadeUp 0.6s ease both; }
        .story-secondary { animation: fadeUp 0.6s ease both; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
