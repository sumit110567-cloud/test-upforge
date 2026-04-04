// app/blog/page.tsx
// THE FORGE — Blog Index v3: Clean editorial redesign (Forbes/FT tier)

import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "The Forge — Startup Intelligence, Founder Stories & Strategy | UpForge",
  description:
    "Deep analysis on global and Indian startups, founder stories, AI tools, funding guides, unicorn profiles, and leadership lessons. Trusted by founders, investors, and builders worldwide.",
  keywords: [
    "startup blog 2026", "Indian startup blog", "startup founder stories",
    "startup intelligence 2026", "AI startup analysis 2026",
    "startup funding guide India", "Indian unicorns blog", "top AI startups 2026",
    "ChatGPT OpenAI startup story", "Perplexity vs Google 2026",
    "best language learning apps 2026", "Canva AI image generator startup",
  ],
  alternates: { canonical: "https://www.upforge.in/blog" },
  openGraph: {
    title: "The Forge — Startup Intelligence by UpForge",
    description: "Global and Indian startup analysis — AI tools, founder stories, funding guides, unicorn profiles, and business strategy.",
    url: "https://www.upforge.in/blog",
    siteName: "UpForge",
    images: [{ url: "https://www.upforge.in/og-blog.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
}

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://www.upforge.in/blog",
      "name": "The Forge — UpForge Intelligence",
      "url": "https://www.upforge.in/blog",
      "description": "Startup analysis, founder stories, AI startup guides, and business strategy for global builders.",
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://www.upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://www.upforge.in/logo.jpg" },
      },
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "UpForge", "item": "https://www.upforge.in/" },
        { "@type": "ListItem", "position": 2, "name": "The Forge", "item": "https://www.upforge.in/blog" },
      ],
    },
  ],
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HERO_POST = {
  title:    "India Startup Ecosystem 2026: The Complete State of the Nation Report",
  subtitle: "650,000 startups. 125 unicorns. $3.44B raised in Q1 alone. The definitive data-driven picture of where India's startup ecosystem stands.",
  slug:     "/blog/india-startup-ecosystem-2026",
  category: "Annual Report",
  date:     "March 2026",
  readTime: "20 min read",
  img:      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  tag:      "Cover Story",
  topics:   ["Funding Trends", "Top Sectors", "City Rankings", "5 Macro Trends", "Policy Landscape"],
}

const LEAD_STORIES = [
  {
    title:    "How to Get Startup Funding in India 2026",
    excerpt:  "DPIIT recognition, SISFS grants, angel networks, VC criteria, and the 7 mistakes that kill Indian fundraises.",
    slug:     "/blog/how-to-get-startup-funding-india-2026",
    category: "Funding",
    date:     "Mar 2026",
    readTime: "12 min",
    img:      "https://listunite.com/storage/2025/11/Indias-2026-Startup-Schemes-Funding-Opportunities-360x240.jpeg",
  },
  {
    title:    "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked",
    excerpt:  "125 Indian startups have crossed $1 billion. Valuations, moat analysis, and lessons from each company's rise.",
    slug:     "/blog/top-indian-unicorns-2026",
    category: "Unicorns",
    date:     "Mar 2026",
    readTime: "15 min",
    img:      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  },
  {
    title:    "Top AI Startups in India — 2026 Updated List",
    excerpt:  "Sarvam AI, Krutrim, Darwinbox, Qure.ai, Perfios — India's AI companies profiled with funding data.",
    slug:     "/blog/top-ai-startups-india-2026",
    category: "AI & Tech",
    date:     "Mar 2026",
    readTime: "11 min",
    img:      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
  },
]

const GLOBAL_LEAD = {
  title:    "Top 10 Trending Global Startups of 2026 — OpenAI, Perplexity, Revolut & More",
  subtitle: "The 10 highest-traffic startups in the world right now — ranked by search volume, monthly visits, and cultural impact.",
  slug:     "/blog/top-trending-global-startups-2026",
  category: "Global Edition",
  date:     "March 2026",
  readTime: "18 min read",
  img:      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85&auto=format",
  topics:   ["OpenAI", "Perplexity AI", "Revolut", "Canva", "Character.AI", "Anthropic", "Ramp", "Preply"],
}

const GLOBAL_STORIES = [
  {
    title:    "ChatGPT Plus vs Perplexity AI: Which AI Search Wins in 2026?",
    excerpt:  "Features, pricing, real-time search accuracy — which one should you actually pay for in 2026.",
    slug:     "/blog/chatgpt-plus-vs-perplexity-ai-2026",
    category: "AI",
    date:     "Mar 2026",
    readTime: "9 min",
    img:      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
  },
  {
    title:    "Best Travel Card 2026: Revolut vs Wise vs Monzo",
    excerpt:  "Multi-currency cards ranked — exchange rates, ATM limits, and which card saves you most abroad.",
    slug:     "/blog/best-travel-card-2026-revolut-wise-compared",
    category: "FinTech",
    date:     "Mar 2026",
    readTime: "8 min",
    img:      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80",
  },
  {
    title:    "Best Language Learning Apps 2026: Preply vs Duolingo vs Babbel",
    excerpt:  "Native tutors vs gamified apps — which platform actually gets you fluent, and at what price.",
    slug:     "/blog/best-language-learning-apps-2026",
    category: "EdTech",
    date:     "Mar 2026",
    readTime: "10 min",
    img:      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80",
  },
  {
    title:    "Ramp vs Brex 2026: Which Corporate Card Should Your Startup Use?",
    excerpt:  "Spend management, rewards, integrations — a data-driven comparison for 2026 startups.",
    slug:     "/blog/ramp-vs-brex-corporate-card-comparison-2026",
    category: "FinTech",
    date:     "Mar 2026",
    readTime: "8 min",
    img:      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format",
  },
]

const MORE_STORIES = [
  {
    title:    "10 Best Indian Startup Founders to Follow in 2026",
    slug:     "/blog/best-indian-startup-founders-to-follow-2026",
    category: "Founders",
    date:     "Mar 2026",
    readTime: "18 min",
    img:      "https://media.licdn.com/dms/image/v2/D5612AQGfFSvn9o_bfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696065814097?e=2147483647&v=beta&t=Y1m22xcvOnMrRh33yrvsi5-SwW_0Gdyants9fS5-aAg",
    excerpt:  "Philosophies, playbooks, and patterns of India's most influential builders.",
  },
  {
    title:    "Best AI Tools for Business 2026 — Complete Guide",
    slug:     "/blog/best-ai-tools-for-business-2026",
    category: "AI Guide",
    date:     "Mar 2026",
    readTime: "12 min",
    img:      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format",
    excerpt:  "ChatGPT, Claude, Canva AI, Perplexity — the AI tools every business should use in 2026.",
  },
  {
    title:    "OpenAI vs Anthropic Claude: Which AI Model Is Better in 2026?",
    slug:     "/blog/openai-vs-anthropic-claude-comparison-2026",
    category: "AI",
    date:     "Mar 2026",
    readTime: "10 min",
    img:      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format",
    excerpt:  "GPT-4o vs Claude — coding, reasoning, safety, API pricing and which model to build on.",
  },
  {
    title:    "IND vs NZ Final 2026: 7 Leadership Lessons Every Founder Must Learn",
    slug:     "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "Leadership",
    date:     "Mar 2026",
    readTime: "7 min",
    img:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    excerpt:  "Calm under pressure, team strategy, resilience — principles that define great captains and great founders.",
  },
  {
    title:    "Remove Background from Image Free: Best AI Tools 2026",
    slug:     "/blog/remove-background-from-image-free-tools-2026",
    category: "AI Tools",
    date:     "Mar 2026",
    readTime: "6 min",
    img:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format",
    excerpt:  "Remove.bg, Canva, Adobe Express — the best free AI photo cutout tools ranked.",
  },
  {
    title:    "Compress PDF Free 2026: Smallpdf vs iLovePDF vs Adobe",
    slug:     "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",
    category: "Productivity",
    date:     "Mar 2026",
    readTime: "5 min",
    img:      "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80&auto=format",
    excerpt:  "The fastest, highest-quality free PDF compression tools — compared on size, quality, and privacy.",
  },
]

const OPINION_POSTS = [
  { num: "01", title: "Why India's Startup Valuations Are Being Re-Set",                                              category: "Opinion",         date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
  { num: "02", title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",               category: "Analysis",        date: "Mar 2026", slug: "/blog/how-to-get-startup-funding-india-2026" },
  { num: "03", title: "Why Perplexity AI Will Not Kill Google — But Will Permanently Shrink It",                      category: "AI",              date: "Mar 2026", slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026" },
  { num: "04", title: "Canva vs Adobe: The Design War That Adobe Is Quietly Losing",                                  category: "Sector Analysis", date: "Mar 2026", slug: "/blog/top-trending-global-startups-2026" },
  { num: "05", title: "Founder-Market Fit: Why Domain Obsession Beats MBA Strategy",                                  category: "Strategy",        date: "Mar 2026", slug: "/blog/best-indian-startup-founders-to-follow-2026" },
  { num: "06", title: "India Cannot Be a Consumer of AI Built Elsewhere — the Case for Sarvam & Krutrim",             category: "AI",              date: "Mar 2026", slug: "/blog/top-ai-startups-india-2026" },
]

const ALL_POSTS = [
  { title: "Oracle Layoffs 2026: 30,000 Jobs, One Email, No Warning",       slug: "/blog/oracle-layoffs-2026",                   category: "Global Edition",    date: "Mar 2026", readTime: "16 min" },
  { title: "India Startup Ecosystem 2026: State of the Nation",       slug: "/blog/india-startup-ecosystem-2026",                   category: "Annual Report",    date: "Mar 2026", readTime: "20 min" },
  { title: "How to Get Startup Funding in India 2026",                slug: "/blog/how-to-get-startup-funding-india-2026",           category: "Funding Guide",    date: "Mar 2026", readTime: "12 min" },
  { title: "Top Indian Unicorns 2026: Ranked & Profiled",             slug: "/blog/top-indian-unicorns-2026",                       category: "Unicorn Report",   date: "Mar 2026", readTime: "15 min" },
  { title: "25 Best Indian Startup Founders to Follow 2026",          slug: "/blog/best-indian-startup-founders-to-follow-2026",    category: "Founder Profiles", date: "Mar 2026", readTime: "18 min" },
  { title: "IND vs NZ Final 2026: 7 Leadership Lessons",              slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",        category: "Leadership",       date: "Mar 2026", readTime: "7 min"  },
  { title: "5 Startup Ideas Inspired by IND vs NZ Final 2026",        slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026", category: "Startup Ideas",    date: "Mar 2026", readTime: "6 min"  },
  { title: "Top AI Startups in India (2026 Updated List)",            slug: "/blog/top-ai-startups-india-2026",                     category: "AI & Deep Tech",   date: "Mar 2026", readTime: "11 min" },
  { title: "How to Start a Startup in India (Step-by-Step 2026)",     slug: "/blog/how-to-start-startup-india-2026",                category: "Founder Playbook", date: "Mar 2026", readTime: "14 min" },
  { title: "Top 10 Trending Global Startups 2026",                    slug: "/blog/top-trending-global-startups-2026",              category: "Global Edition",   date: "Mar 2026", readTime: "18 min" },
  { title: "ChatGPT Plus vs Perplexity AI 2026",                      slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026",             category: "AI Comparison",    date: "Mar 2026", readTime: "9 min"  },
  { title: "Best AI Tools for Business 2026",                         slug: "/blog/best-ai-tools-for-business-2026",                category: "AI Guide",         date: "Mar 2026", readTime: "12 min" },
  { title: "Best Travel Card 2026: Revolut vs Wise vs Monzo",         slug: "/blog/best-travel-card-2026-revolut-wise-compared",    category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "Best Language Learning Apps 2026",                        slug: "/blog/best-language-learning-apps-2026",               category: "EdTech Guide",     date: "Mar 2026", readTime: "10 min" },
  { title: "Ramp vs Brex 2026: Which Corporate Card Wins?",           slug: "/blog/ramp-vs-brex-corporate-card-comparison-2026",    category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "OpenAI vs Anthropic Claude Comparison 2026",              slug: "/blog/openai-vs-anthropic-claude-comparison-2026",     category: "AI Comparison",    date: "Mar 2026", readTime: "10 min" },
  { title: "Remove Background from Image Free — Best AI Tools 2026",  slug: "/blog/remove-background-from-image-free-tools-2026",  category: "AI Tools",         date: "Mar 2026", readTime: "6 min"  },
  { title: "Compress PDF Free 2026: Smallpdf vs iLovePDF",            slug: "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",  category: "Productivity",     date: "Mar 2026", readTime: "5 min"  },
  { title: "Character.AI vs ChatGPT — Which Is Better in 2026?",      slug: "/blog/character-ai-vs-chatgpt-which-is-better-2026",  category: "AI Comparison",    date: "Mar 2026", readTime: "8 min"  },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #111111;
          --ink-soft: #2D2D2D;
          --ink-muted: #6B6B6B;
          --ink-faint: #9B9B9B;
          --paper: #FAFAF8;
          --paper-warm: #F4F3EF;
          --rule: #E0DFDA;
          --rule-strong: #C8C7C1;
          --teal: #0A6B63;
          --teal-mid: #0D8A80;
          --teal-light: #13B8AB;
          --accent-red: #C0392B;
          --accent-blue: #1A4A9E;
          --gold: #A07C28;
          --serif: 'Source Serif 4', 'Georgia', serif;
          --display: 'Playfair Display', 'Georgia', serif;
          --sans: 'system-ui', '-apple-system', 'Segoe UI', sans-serif;
        }

        body { background: var(--paper); color: var(--ink); font-family: var(--serif); }

        /* ── MASTHEAD ── */
        .masthead {
          background: var(--ink);
          border-bottom: 1px solid #333;
          padding: 0 clamp(20px, 4vw, 64px);
        }
        .masthead-inner {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          padding: 18px 0 16px;
          border-bottom: 1px solid #2A2A2A;
        }
        .masthead-left {
          display: flex;
          align-items: baseline;
          gap: 18px;
        }
        .masthead-logo {
          font-family: var(--display);
          font-size: clamp(22px, 2.8vw, 30px);
          font-weight: 900;
          color: white;
          letter-spacing: -0.02em;
          text-decoration: none;
          line-height: 1;
        }
        .masthead-logo em { color: var(--teal-light); font-style: italic; }
        .masthead-divider {
          width: 1px;
          height: 18px;
          background: #3A3A3A;
        }
        .masthead-section {
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #888;
        }
        .masthead-nav {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .masthead-nav a {
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #888;
          text-decoration: none;
          transition: color 0.15s;
        }
        .masthead-nav a:hover { color: white; }
        .masthead-cta {
          background: var(--teal);
          color: white !important;
          padding: 7px 16px;
          border-radius: 3px;
          font-size: 9px !important;
        }
        .masthead-cta:hover { background: var(--teal-mid); }
        @media (max-width: 768px) {
          .masthead-nav { display: none; }
        }

        /* Date bar */
        .datebar {
          max-width: 1360px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
        }
        .datebar-date {
          font-family: var(--sans);
          font-size: 9px;
          color: #666;
          letter-spacing: 0.08em;
        }
        .datebar-stats {
          display: flex;
          align-items: center;
          gap: 20px;
        }
        .datebar-stat {
          font-family: var(--sans);
          font-size: 9px;
          color: #555;
          letter-spacing: 0.05em;
        }
        .datebar-stat strong {
          color: var(--teal-light);
          font-weight: 700;
        }

        /* ── MAIN WRAP ── */
        .page-wrap {
          max-width: 1360px;
          margin: 0 auto;
          padding: 0 clamp(20px, 4vw, 64px);
        }

        /* ── SECTION LABELS ── */
        .section-label {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 24px 0 14px;
        }
        .section-label-text {
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--ink-faint);
          white-space: nowrap;
        }
        .section-label-line {
          flex: 1;
          height: 1px;
          background: var(--rule);
        }
        .section-label-accent {
          width: 20px;
          height: 2px;
          background: var(--teal);
          flex-shrink: 0;
        }

        /* ── INDIA HERO BLOCK ── */
        .hero-block {
          display: grid;
          grid-template-columns: 1fr 420px;
          border: 1px solid var(--rule-strong);
          background: white;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .hero-block { grid-template-columns: 1fr; }
          .hero-img { order: -1; height: 240px !important; }
        }
        .hero-content {
          padding: clamp(24px, 3vw, 40px);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-right: 1px solid var(--rule);
        }
        .hero-img {
          position: relative;
          overflow: hidden;
        }
        .hero-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .hero-block:hover .hero-img img { transform: scale(1.03); }

        .cat-label {
          display: inline-block;
          font-family: var(--sans);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 14px;
        }
        .hero-title {
          font-family: var(--display);
          font-size: clamp(1.6rem, 3vw, 2.6rem);
          font-weight: 900;
          line-height: 1.08;
          letter-spacing: -0.02em;
          color: var(--ink);
          margin-bottom: 14px;
        }
        .hero-rule {
          width: 32px;
          height: 2px;
          background: var(--teal);
          margin-bottom: 14px;
        }
        .hero-subtitle {
          font-size: clamp(13px, 1.4vw, 15px);
          line-height: 1.75;
          color: var(--ink-soft);
          margin-bottom: 18px;
          font-weight: 300;
        }
        .topic-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 24px;
        }
        .topic-pill {
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--ink-muted);
          background: var(--paper-warm);
          border: 1px solid var(--rule);
          padding: 4px 10px;
        }
        .hero-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid var(--rule);
        }
        .hero-meta {
          font-family: var(--sans);
          font-size: 9px;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .read-link {
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--teal);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 5px;
          transition: gap 0.15s;
        }
        .read-link:hover { gap: 8px; }

        /* ── 3-COL SECONDARY ── */
        .three-col {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--rule-strong);
          border-top: none;
          background: var(--rule-strong);
          gap: 1px;
        }
        @media (max-width: 900px) { .three-col { grid-template-columns: 1fr; } }
        @media (max-width: 640px) { .three-col { grid-template-columns: 1fr; } }

        .story-card {
          background: white;
          display: flex;
          flex-direction: column;
          text-decoration: none;
          transition: background 0.15s;
        }
        .story-card:hover { background: var(--paper-warm); }
        .story-img {
          position: relative;
          height: 160px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .story-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .story-card:hover .story-img img { transform: scale(1.04); }
        .story-body {
          padding: 18px 20px 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          border-top: 1px solid var(--rule);
        }
        .story-cat {
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 8px;
        }
        .story-title {
          font-family: var(--display);
          font-size: clamp(0.95rem, 1.4vw, 1.05rem);
          font-weight: 700;
          line-height: 1.25;
          color: var(--ink);
          margin-bottom: 8px;
          flex: 1;
        }
        .story-excerpt {
          font-size: 12.5px;
          line-height: 1.65;
          color: var(--ink-muted);
          font-weight: 300;
          margin-bottom: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .story-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
          border-top: 1px solid var(--rule);
        }
        .story-meta {
          font-family: var(--sans);
          font-size: 8.5px;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .arrow-link {
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 700;
          color: var(--teal);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        /* ── GLOBAL DIVIDER ── */
        .global-banner {
          background: var(--ink);
          margin: 36px 0 0;
          padding: 22px 32px;
          display: flex;
          align-items: center;
          gap: 20px;
          border-top: 3px solid var(--accent-blue);
        }
        .global-banner-globe {
          width: 40px;
          height: 40px;
          background: var(--accent-blue);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }
        .global-banner-label {
          font-family: var(--sans);
          font-size: 8.5px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: #7BA4F0;
          margin-bottom: 4px;
        }
        .global-banner-title {
          font-family: var(--serif);
          font-size: 14px;
          color: rgba(255,255,255,0.75);
          font-weight: 300;
        }
        .global-banner-btn {
          margin-left: auto;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: var(--accent-blue);
          color: white;
          padding: 9px 20px;
          border-radius: 3px;
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.15s;
          white-space: nowrap;
        }
        .global-banner-btn:hover { background: #1353C4; }
        @media (max-width: 640px) {
          .global-banner { flex-wrap: wrap; }
          .global-banner-btn { margin-left: 0; }
        }

        /* ── GLOBAL HERO (flipped layout) ── */
        .hero-block-global {
          display: grid;
          grid-template-columns: 460px 1fr;
          border: 1px solid var(--rule-strong);
          border-top: none;
          background: white;
          overflow: hidden;
        }
        @media (max-width: 900px) {
          .hero-block-global { grid-template-columns: 1fr; }
          .hero-img-global { height: 220px !important; border-right: none !important; border-bottom: 1px solid var(--rule); }
        }
        .hero-img-global {
          position: relative;
          overflow: hidden;
          border-right: 1px solid var(--rule);
        }
        .hero-img-global img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.7s ease;
        }
        .hero-block-global:hover .hero-img-global img { transform: scale(1.03); }

        /* ── 4-COL GRID ── */
        .four-col {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid var(--rule-strong);
          border-top: none;
          background: var(--rule-strong);
          gap: 1px;
        }
        @media (max-width: 1100px) { .four-col { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px)  { .four-col { grid-template-columns: 1fr; } }

        /* ── MAIN 2-COL ── */
        .content-sidebar {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 32px;
          align-items: start;
          margin-top: 36px;
        }
        @media (max-width: 1000px) { .content-sidebar { grid-template-columns: 1fr; } }

        /* ── 3-COL MORE STORIES ── */
        .six-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid var(--rule-strong);
          background: var(--rule-strong);
          gap: 1px;
        }
        @media (max-width: 900px) { .six-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 540px) { .six-grid { grid-template-columns: 1fr; } }

        .grid-card {
          background: white;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          transition: background 0.15s;
        }
        .grid-card:hover { background: var(--paper-warm); }
        .grid-card-img {
          position: relative;
          height: 120px;
          overflow: hidden;
          flex-shrink: 0;
        }
        .grid-card-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s;
        }
        .grid-card:hover .grid-card-img img { transform: scale(1.05); }
        .grid-card-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
        }
        .grid-card-body {
          padding: 14px 16px 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
          border-top: 2px solid var(--teal);
        }
        .grid-card-cat {
          font-family: var(--sans);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 7px;
        }
        .grid-card-title {
          font-family: var(--display);
          font-size: 0.9rem;
          font-weight: 700;
          line-height: 1.28;
          color: var(--ink);
          flex: 1;
          margin-bottom: 10px;
        }
        .grid-card-footer {
          font-family: var(--sans);
          font-size: 8px;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 10px;
          border-top: 1px solid var(--rule);
        }

        /* ── SIDEBAR ── */
        .sidebar-widget {
          border: 1px solid var(--rule-strong);
          background: white;
          overflow: hidden;
        }
        .sidebar-widget + .sidebar-widget { margin-top: 20px; }
        .sidebar-header {
          background: var(--ink);
          padding: 16px 20px;
          position: relative;
        }
        .sidebar-header::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), var(--teal-light));
        }
        .sidebar-header-title {
          font-family: var(--display);
          font-size: 1rem;
          font-weight: 700;
          color: white;
          font-style: italic;
        }
        .sidebar-header-sub {
          font-family: var(--sans);
          font-size: 8px;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: rgba(94,234,212,0.5);
          margin-top: 3px;
        }

        .op-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 20px;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          transition: background 0.12s;
        }
        .op-item:last-child { border-bottom: none; }
        .op-item:hover { background: var(--paper-warm); }
        .op-num {
          font-family: var(--display);
          font-size: 1.3rem;
          font-weight: 900;
          color: var(--rule-strong);
          flex-shrink: 0;
          line-height: 1;
          width: 28px;
          padding-top: 2px;
        }
        .op-cat {
          font-family: var(--sans);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--teal);
          margin-bottom: 4px;
        }
        .op-title {
          font-family: var(--display);
          font-size: 0.82rem;
          font-weight: 700;
          line-height: 1.3;
          color: var(--ink);
          margin-bottom: 4px;
        }
        .op-date {
          font-family: var(--sans);
          font-size: 8px;
          color: var(--ink-faint);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        /* Sidebar CTA */
        .sidebar-cta {
          background: var(--ink);
          padding: 22px 20px;
          position: relative;
          overflow: hidden;
          border: 1px solid var(--rule-strong);
          margin-top: 20px;
        }
        .sidebar-cta::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--teal), var(--teal-light));
        }
        .sidebar-cta-label {
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(94,234,212,0.5);
          margin-bottom: 8px;
        }
        .sidebar-cta-title {
          font-family: var(--display);
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          line-height: 1.3;
          margin-bottom: 8px;
          font-style: italic;
        }
        .sidebar-cta-body {
          font-size: 11.5px;
          color: rgba(255,255,255,0.4);
          line-height: 1.6;
          margin-bottom: 18px;
          font-weight: 300;
        }
        .sidebar-cta-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          background: var(--teal);
          color: white;
          padding: 11px 16px;
          font-family: var(--sans);
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          text-decoration: none;
          border-radius: 3px;
          transition: background 0.15s;
        }
        .sidebar-cta-btn:hover { background: var(--teal-mid); }

        /* ── ALL ARTICLES TABLE ── */
        .articles-section { margin-top: 40px; }
        .articles-table {
          border: 1px solid var(--rule-strong);
          background: white;
          overflow: hidden;
        }
        .articles-table-header {
          background: var(--ink);
          padding: 10px 20px;
          display: grid;
          grid-template-columns: 1fr 150px 80px 70px;
          gap: 16px;
        }
        @media (max-width: 640px) {
          .articles-table-header { grid-template-columns: 1fr; }
          .table-col-hide { display: none !important; }
        }
        .articles-table-header span {
          font-family: var(--sans);
          font-size: 7.5px;
          font-weight: 800;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
        }
        .article-row {
          display: grid;
          grid-template-columns: 1fr 150px 80px 70px;
          gap: 16px;
          align-items: center;
          padding: 13px 20px;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          background: white;
          transition: background 0.1s, padding-left 0.15s;
        }
        .article-row:last-child { border-bottom: none; }
        .article-row:hover { background: var(--paper-warm); padding-left: 26px; }
        @media (max-width: 640px) {
          .article-row { grid-template-columns: 1fr; }
          .article-row-hide { display: none !important; }
        }
        .article-row-title {
          font-family: var(--display);
          font-size: 13.5px;
          font-weight: 700;
          color: var(--ink);
          line-height: 1.3;
        }
        .article-row-cat {
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--teal);
          border: 1px solid rgba(10,107,99,0.3);
          padding: 3px 10px;
          text-align: center;
        }
        .article-row-meta {
          font-family: var(--sans);
          font-size: 9px;
          color: var(--ink-faint);
        }

        /* ── BOTTOM CTA ── */
        .bottom-cta {
          background: var(--ink);
          padding: clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px);
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-top: 3px solid var(--teal);
        }
        .bottom-cta-label {
          font-family: var(--sans);
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(94,234,212,0.5);
          margin-bottom: 8px;
        }
        .bottom-cta-title {
          font-family: var(--display);
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 700;
          color: white;
          margin-bottom: 6px;
        }
        .bottom-cta-sub {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
          font-weight: 300;
        }
        .bottom-cta-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--teal);
          color: white;
          padding: 14px 28px;
          border-radius: 3px;
          font-family: var(--sans);
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.15s;
        }
        .bottom-cta-btn:hover { background: var(--teal-mid); }

        /* ── FOOTER LINKS ── */
        .footer-links {
          padding: 28px 0;
          border-top: 1px solid var(--rule);
          margin-top: 32px;
        }
        .footer-links-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 6px 20px;
        }
        .footer-links-grid a {
          font-family: var(--sans);
          font-size: 8.5px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--ink-faint);
          text-decoration: none;
          transition: color 0.15s;
        }
        .footer-links-grid a:hover { color: var(--teal); }
        .footer-note {
          margin-top: 16px;
          font-family: var(--sans);
          font-size: 8.5px;
          color: var(--ink-faint);
          line-height: 1.7;
        }

        /* ── ANIMATIONS ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: none; }
        }
        .a1 { animation: fadeUp 0.5s 0.05s both; }
        .a2 { animation: fadeUp 0.5s 0.12s both; }
        .a3 { animation: fadeUp 0.5s 0.20s both; }
        .a4 { animation: fadeUp 0.5s 0.28s both; }
        .a5 { animation: fadeUp 0.5s 0.36s both; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: var(--rule-strong); }
      `}</style>

      <div style={{ minHeight: "100vh", background: "var(--paper)", fontFamily: "var(--serif)" }}>

        {/* ── MASTHEAD ── */}
        <header className="masthead">
          <div className="masthead-inner">
            <div className="masthead-left">
              <Link href="/" className="masthead-logo">Up<em>Forge</em></Link>
              <div className="masthead-divider" />
              <span className="masthead-section">The Forge</span>
            </div>
            <nav className="masthead-nav">
              <a href="/blog/india-startup-ecosystem-2026">India</a>
              <a href="/blog/top-trending-global-startups-2026">Global</a>
              <a href="/blog/best-ai-tools-for-business-2026">AI</a>
              <a href="/blog/how-to-get-startup-funding-india-2026">Funding</a>
              <a href="/report" className="masthead-cta">Free Report →</a>
            </nav>
          </div>
          <div className="datebar">
            <span className="datebar-date">Sunday, March 30, 2026 · India &amp; Global Edition</span>
            <div className="datebar-stats">
              <span className="datebar-stat"><strong>{ALL_POSTS.length}</strong> Articles</span>
              <span className="datebar-stat"><strong>125+</strong> Unicorns Tracked</span>
              <span className="datebar-stat"><strong>$3.44B</strong> Q1 Funding</span>
            </div>
          </div>
        </header>

        <div className="page-wrap">

          {/* ── INDIA SECTION ── */}
          <section className="a1">
            <div className="section-label">
              <div className="section-label-accent" />
              <span className="section-label-text">India Edition · Cover Story</span>
              <div className="section-label-line" />
            </div>

            {/* India Hero */}
            <Link href={HERO_POST.slug} style={{ textDecoration: "none", display: "block" }}>
              <div className="hero-block">
                <div className="hero-content">
                  <div>
                    <span className="cat-label">{HERO_POST.category}</span>
                    <h1 className="hero-title">{HERO_POST.title}</h1>
                    <div className="hero-rule" />
                    <p className="hero-subtitle">{HERO_POST.subtitle}</p>
                    <div className="topic-pills">
                      {HERO_POST.topics.map(t => <span key={t} className="topic-pill">{t}</span>)}
                    </div>
                  </div>
                  <div className="hero-footer">
                    <span className="hero-meta">{HERO_POST.date} · {HERO_POST.readTime}</span>
                    <span className="read-link">Read Full Report <ArrowUpRight size={12} aria-hidden="true" /></span>
                  </div>
                </div>
                <div className="hero-img">
                  <img src={HERO_POST.img} alt={HERO_POST.title} />
                </div>
              </div>
            </Link>

            {/* India 3-col */}
            <div className="three-col">
              {LEAD_STORIES.map((post, i) => (
                <Link key={i} href={post.slug} className="story-card">
                  <div className="story-img">
                    <img src={post.img} alt={post.title} />
                  </div>
                  <div className="story-body">
                    <span className="story-cat">{post.category}</span>
                    <h2 className="story-title">{post.title}</h2>
                    <p className="story-excerpt">{post.excerpt}</p>
                    <div className="story-footer">
                      <span className="story-meta">{post.date} · {post.readTime}</span>
                      <span className="arrow-link"><ArrowRight size={11} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── GLOBAL EDITION ── */}
          <section className="a2">
            <div className="global-banner">
              <div className="global-banner-globe">🌍</div>
              <div>
                <p className="global-banner-label">Global Edition · March 2026</p>
                <p className="global-banner-title">The 10 highest-traffic global startups — OpenAI, Perplexity, Revolut, Canva &amp; more.</p>
              </div>
              <Link href="/blog/top-trending-global-startups-2026" className="global-banner-btn">
                Read Feature <ArrowRight size={11} />
              </Link>
            </div>

            {/* Global Hero */}
            <Link href={GLOBAL_LEAD.slug} style={{ textDecoration: "none", display: "block" }}>
              <div className="hero-block-global">
                <div className="hero-img-global">
                  <img src={GLOBAL_LEAD.img} alt={GLOBAL_LEAD.title} />
                </div>
                <div className="hero-content" style={{ borderRight: "none", borderLeft: "1px solid var(--rule)" }}>
                  <div>
                    <span className="cat-label" style={{ color: "var(--accent-blue)" }}>{GLOBAL_LEAD.category}</span>
                    <h2 className="hero-title">{GLOBAL_LEAD.title}</h2>
                    <div className="hero-rule" style={{ background: "var(--accent-blue)" }} />
                    <p className="hero-subtitle">{GLOBAL_LEAD.subtitle}</p>
                    <div className="topic-pills">
                      {GLOBAL_LEAD.topics.map(t => <span key={t} className="topic-pill" style={{ color: "var(--accent-blue)", borderColor: "rgba(26,74,158,0.25)", background: "#EEF2FF" }}>{t}</span>)}
                    </div>
                  </div>
                  <div className="hero-footer">
                    <span className="hero-meta">{GLOBAL_LEAD.date} · {GLOBAL_LEAD.readTime}</span>
                    <span className="read-link" style={{ color: "var(--accent-blue)" }}>Read Full Report <ArrowUpRight size={12} /></span>
                  </div>
                </div>
              </div>
            </Link>

            {/* Global 4-col */}
            <div className="four-col">
              {GLOBAL_STORIES.map((post, i) => (
                <Link key={i} href={post.slug} className="story-card">
                  <div className="story-img" style={{ height: 130 }}>
                    <img src={post.img} alt={post.title} />
                  </div>
                  <div className="story-body" style={{ borderTop: "2px solid var(--accent-blue)" }}>
                    <span className="story-cat" style={{ color: "var(--accent-blue)" }}>{post.category}</span>
                    <h3 className="story-title">{post.title}</h3>
                    <p className="story-excerpt">{post.excerpt}</p>
                    <div className="story-footer">
                      <span className="story-meta">{post.date} · {post.readTime}</span>
                      <span className="arrow-link" style={{ color: "var(--accent-blue)" }}><ArrowRight size={11} /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CONTENT + SIDEBAR ── */}
          <div className="content-sidebar a3">
            {/* More Stories Grid */}
            <div>
              <div className="section-label">
                <div className="section-label-accent" />
                <span className="section-label-text">More Stories</span>
                <div className="section-label-line" />
              </div>
              <div className="six-grid">
                {MORE_STORIES.map((post, i) => (
                  <Link key={i} href={post.slug} className="grid-card">
                    <div className="grid-card-img">
                      <img src={post.img} alt={post.title} />
                      <div className="grid-card-img-overlay" />
                    </div>
                    <div className="grid-card-body">
                      <span className="grid-card-cat">{post.category}</span>
                      <h3 className="grid-card-title">{post.title}</h3>
                      <div className="grid-card-footer">
                        <span>{post.readTime}</span>
                        <span style={{ color: "var(--teal)", fontWeight: 700 }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <aside>
              <div className="section-label">
                <div className="section-label-accent" />
                <span className="section-label-text">Opinion &amp; Analysis</span>
                <div className="section-label-line" />
              </div>
              <div className="sidebar-widget">
                <div className="sidebar-header">
                  <p className="sidebar-header-title">The UpForge Perspective</p>
                  <p className="sidebar-header-sub">India &amp; Global · 2026</p>
                </div>
                {OPINION_POSTS.map((op, i) => (
                  <Link key={i} href={op.slug} className="op-item">
                    <span className="op-num">{op.num}</span>
                    <div>
                      <p className="op-cat">{op.category}</p>
                      <p className="op-title">{op.title}</p>
                      <span className="op-date">{op.date}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="sidebar-cta">
                <p className="sidebar-cta-label">Free AI Tool</p>
                <p className="sidebar-cta-title">Startup Valuation<br />Report</p>
                <p className="sidebar-cta-body">AI-powered analysis benchmarked against 500+ global startups. Takes 3 minutes.</p>
                <Link href="/report" className="sidebar-cta-btn">
                  Generate Free Report <ArrowRight size={12} />
                </Link>
              </div>
            </aside>
          </div>

          {/* ── ALL ARTICLES ── */}
          <section className="articles-section a4">
            <div className="section-label">
              <div className="section-label-accent" />
              <span className="section-label-text">All Published Articles — {ALL_POSTS.length} Articles · March 2026</span>
              <div className="section-label-line" />
            </div>
            <div className="articles-table">
              <div className="articles-table-header">
                <span>Article</span>
                <span className="table-col-hide">Category</span>
                <span className="table-col-hide">Published</span>
                <span className="table-col-hide">Read Time</span>
              </div>
              {ALL_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="article-row">
                  <p className="article-row-title">{post.title}</p>
                  <span className="article-row-cat article-row-hide">{post.category}</span>
                  <span className="article-row-meta article-row-hide">{post.date}</span>
                  <span className="article-row-meta article-row-hide">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── BOTTOM CTA ── */}
          <div className="bottom-cta a5">
            <div>
              <p className="bottom-cta-label">UpForge · The Forge · India &amp; Global</p>
              <p className="bottom-cta-title">The world's most-read startup analysis. Free. Forever.</p>
              <p className="bottom-cta-sub">{ALL_POSTS.length} in-depth articles — AI guides, funding playbooks, global founder profiles, and ecosystem reports.</p>
            </div>
            <Link href="/submit" className="bottom-cta-btn">Submit Your Startup <ArrowRight size={13} /></Link>
          </div>

          {/* ── FOOTER LINKS ── */}
          <footer className="footer-links">
            <nav className="footer-links-grid" aria-label="Footer navigation">
              {[
                { l: "Global Registry",              h: "https://www.upforge.org/registry"               },
                { l: "Indian Unicorns 2026",         h: "/blog/top-indian-unicorns-2026"                 },
                { l: "Top AI Startups 2026",         h: "/blog/top-ai-startups-india-2026"               },
                { l: "Global Startups 2026",         h: "/blog/top-trending-global-startups-2026"        },
                { l: "Startup Funding Guide",        h: "/blog/how-to-get-startup-funding-india-2026"    },
                { l: "Best AI Tools 2026",           h: "/blog/best-ai-tools-for-business-2026"          },
                { l: "Best Language Learning Apps",  h: "/blog/best-language-learning-apps-2026"         },
                { l: "Ramp vs Brex 2026",            h: "/blog/ramp-vs-brex-corporate-card-comparison-2026" },
                { l: "Free Valuation Tool",          h: "/report"                                        },
                { l: "Submit Startup",               h: "/submit"                                        },
              ].map(lnk => <a key={lnk.h} href={lnk.h}>{lnk.l}</a>)}
            </nav>
            <p className="footer-note">
              * Article data sourced from Inc42, Forbes India, TechCrunch, Crunchbase, Tracxn, and company announcements as of March 2026.
              UpForge is an independent registry — no paid placements, no sponsored rankings.
            </p>
          </footer>

        </div>
      </div>
    </>
  )
}
