// app/blog/page.tsx
// THE FORGE — Blog Index (www.upforge.in/blog + www.upforge.org/blog)
// v3: Added title search, removed eyebrow text from masthead.

import Link from "next/link"
import type { Metadata } from "next"
import { ArrowRight, ArrowUpRight } from "lucide-react"

export const metadata: Metadata = {
  title: "The Forge — Startup Intelligence, Founder Stories & Strategy | UpForge",
  description:
    "Deep analysis on global and Indian startups, founder stories, AI tools, funding guides, unicorn profiles, and leadership lessons. Trusted by founders, investors, and builders worldwide.",
  keywords: [
    "startup blog 2026",
    "Indian startup blog",
    "startup founder stories",
    "startup intelligence 2026",
    "AI startup analysis 2026",
    "startup funding guide India",
    "Indian unicorns blog",
    "top AI startups 2026",
    "ChatGPT OpenAI startup story",
    "Perplexity vs Google 2026",
    "best language learning apps 2026",
    "Canva AI image generator startup",
  ],
  alternates: { canonical: "https://www.upforge.in/blog" },
  openGraph: {
    title: "The Forge — Startup Intelligence by UpForge",
    description:
      "Global and Indian startup analysis — AI tools, founder stories, funding guides, unicorn profiles, and business strategy.",
    url: "https://www.upforge.in/blog",
    siteName: "UpForge",
    images: [{ url: "https://www.upforge.in/og-blog.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
}

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
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
      "blogPost": [
        // India posts
        { "@type": "BlogPosting", "headline": "India Startup Ecosystem 2026: State of the Nation",              "url": "https://www.upforge.in/blog/india-startup-ecosystem-2026"                      },
        { "@type": "BlogPosting", "headline": "How to Get Startup Funding in India 2026",                       "url": "https://www.upforge.in/blog/how-to-get-startup-funding-india-2026"            },
        { "@type": "BlogPosting", "headline": "Top Indian Unicorns 2026: Ranked & Profiled",                    "url": "https://www.upforge.in/blog/top-indian-unicorns-2026"                        },
        { "@type": "BlogPosting", "headline": "25 Best Indian Startup Founders to Follow 2026",                 "url": "https://www.upforge.in/blog/best-indian-startup-founders-to-follow-2026"     },
        { "@type": "BlogPosting", "headline": "Top AI Startups in India (2026 Updated List)",                   "url": "https://www.upforge.in/blog/top-ai-startups-india-2026"                      },
        { "@type": "BlogPosting", "headline": "How to Start a Startup in India (Step-by-Step Guide 2026)",      "url": "https://www.upforge.in/blog/how-to-start-startup-india-2026"                  },
        // Global posts
        { "@type": "BlogPosting", "headline": "Top Trending Global Startups 2026 — OpenAI, Perplexity & More", "url": "https://www.upforge.in/blog/top-trending-global-startups-2026"               },
        { "@type": "BlogPosting", "headline": "ChatGPT Plus vs Perplexity AI: Which AI Search Wins in 2026?",  "url": "https://www.upforge.in/blog/chatgpt-plus-vs-perplexity-ai-2026"              },
        { "@type": "BlogPosting", "headline": "Best AI Tools for Business 2026 — Complete Guide",               "url": "https://www.upforge.in/blog/best-ai-tools-for-business-2026"                 },
        { "@type": "BlogPosting", "headline": "Best Language Learning Apps 2026: Preply vs Duolingo Ranked",    "url": "https://www.upforge.in/blog/best-language-learning-apps-2026"                },
        { "@type": "BlogPosting", "headline": "Ramp vs Brex 2026: Which Corporate Card Wins?",                  "url": "https://www.upforge.in/blog/ramp-vs-brex-corporate-card-comparison-2026"    },
        { "@type": "BlogPosting", "headline": "Best Travel Card 2026: Revolut vs Wise vs Monzo",                "url": "https://www.upforge.in/blog/best-travel-card-2026-revolut-wise-compared"    },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "UpForge",          "item": "https://www.upforge.in/"     },
        { "@type": "ListItem", "position": 2, "name": "The Forge — Blog", "item": "https://www.upforge.in/blog" },
      ],
    },
  ],
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HERO_POST = {
  title:    "India Startup Ecosystem 2026: The Complete State of the Nation Report",
  subtitle: "650,000 startups. 125 unicorns. $3.44B raised in Q1 alone. The definitive data-driven picture of where India's startup ecosystem stands, where it's going, and what every founder and investor must understand right now.",
  slug:     "/blog/india-startup-ecosystem-2026",
  category: "ANNUAL REPORT",
  date:     "March 2026",
  readTime: "20 min",
  img:      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  tag:      "Must Read",
  topics:   ["Funding Trends", "Top Sectors", "City Rankings", "5 Macro Trends", "Policy Landscape"],
  accent:   "#B45309",
  accentBg: "#FEF3C7",
}

const SECONDARY_POSTS = [
  {
    title:    "How to Get Startup Funding in India 2026: Complete Founder's Guide",
    excerpt:  "DPIIT recognition, SISFS grants, angel networks, VC criteria, 90-day fundraising playbook, and the 7 mistakes that kill Indian fundraises.",
    slug:     "/blog/how-to-get-startup-funding-india-2026",
    category: "FUNDING GUIDE",
    date:     "March 2026",
    readTime: "12 min",
    img:      "https://listunite.com/storage/2025/11/Indias-2026-Startup-Schemes-Funding-Opportunities-360x240.jpeg",
    tag:      "High Traffic",
    accent:   "#15803D",
  },
  {
    title:    "Top Indian Unicorns 2026: Every ₹1B+ Startup Ranked & Profiled",
    excerpt:  "125 Indian startups have crossed the $1 billion mark. Profiles, valuations, moat analysis, and the one founder lesson from each company's rise.",
    slug:     "/blog/top-indian-unicorns-2026",
    category: "UNICORN REPORT",
    date:     "March 2026",
    readTime: "15 min",
    img:      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
    tag:      "Trending",
    accent:   "#D97706",
  },
  {
    title:    "Top AI Startups in India (2026 Updated List)",
    excerpt:  "Sarvam AI, Krutrim, Darwinbox, Qure.ai, Perfios and more — India's AI companies profiled with funding data and founder stories.",
    slug:     "/blog/top-ai-startups-india-2026",
    category: "AI & DEEP TECH",
    date:     "March 2026",
    readTime: "11 min",
    img:      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
    tag:      "New",
    accent:   "#2563EB",
  },
  {
    title:    "How to Start a Startup in India (Step-by-Step Guide 2026)",
    excerpt:  "From idea validation to DPIIT registration to raising your first round — the complete operational playbook for first-time founders.",
    slug:     "/blog/how-to-start-startup-india-2026",
    category: "FOUNDER PLAYBOOK",
    date:     "March 2026",
    readTime: "14 min",
    img:      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=80&auto=format",
    tag:      "New",
    accent:   "#D97706",
  },
]

// ── Global Trending Posts ────────────────────────────────────────────────
const GLOBAL_HERO_POST = {
  title:    "Top 10 Trending Global Startups of 2026 — OpenAI, Perplexity, Revolut & More",
  subtitle: "The 10 highest-traffic startups in the world right now — ranked by search volume, monthly visits, and cultural impact. Founder stories, valuations, and the keywords driving each one.",
  slug:     "/blog/top-trending-global-startups-2026",
  category: "GLOBAL EDITION",
  date:     "March 2026",
  readTime: "18 min",
  img:      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=85&auto=format",
  tag:      "🌍 New",
  topics:   ["OpenAI", "Perplexity AI", "Revolut", "Canva", "Character.AI", "Anthropic", "Ramp", "Preply"],
  accent:   "#2563EB",
  accentBg: "#EFF6FF",
}

const GLOBAL_SECONDARY_POSTS = [
  {
    title:    "ChatGPT Plus vs Perplexity AI: Which AI Search Engine Wins in 2026?",
    excerpt:  "ChatGPT Plus login vs Perplexity AI Pro — features, pricing, real-time search accuracy, and which one you should actually pay for in 2026.",
    slug:     "/blog/chatgpt-plus-vs-perplexity-ai-2026",
    category: "AI COMPARISON",
    date:     "March 2026",
    readTime: "9 min",
    img:      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=80&auto=format",
    tag:      "Trending",
    accent:   "#10A37F",
  },
  {
    title:    "Best Travel Card 2026: Revolut vs Wise vs Monzo Compared",
    excerpt:  "Multi-currency cards ranked for international travellers — exchange rates, ATM limits, crypto, and which card saves you the most money abroad in 2026.",
    slug:     "/blog/best-travel-card-2026-revolut-wise-compared",
    category: "FINTECH GUIDE",
    date:     "March 2026",
    readTime: "8 min",
    img:      "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=900&q=80",
    tag:      "High Traffic",
    accent:   "#6366F1",
  },
  {
    title:    "Best Language Learning Apps 2026: Preply vs Duolingo vs Babbel Ranked",
    excerpt:  "Native speaking tutors vs gamified apps — which language learning platform actually gets you fluent in 2026, and at what price.",
    slug:     "/blog/best-language-learning-apps-2026",
    category: "EDTECH GUIDE",
    date:     "March 2026",
    readTime: "10 min",
    img:      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=900&q=80",
    tag:      "Trending",
    accent:   "#2563EB",
  },
  {
    title:    "Ramp vs Brex 2026: Which Corporate Card Should Your Startup Use?",
    excerpt:  "Spend management, rewards, integrations, and which corporate card actually saves your business money — a data-driven comparison for 2026.",
    slug:     "/blog/ramp-vs-brex-corporate-card-comparison-2026",
    category: "FINTECH GUIDE",
    date:     "March 2026",
    readTime: "8 min",
    img:      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=900&q=80&auto=format",
    tag:      "New",
    accent:   "#F59E0B",
  },
]

const GRID_POSTS = [
  {
    title:    "10 Best Indian Startup Founders to Follow in 2026",
    excerpt:  "Philosophies, playbooks, and patterns of India's most influential builders — from Alakh Pandey to Nithin Kamath to Kunal Shah.",
    slug:     "/blog/best-indian-startup-founders-to-follow-2026",
    category: "FOUNDER PROFILES",
    date:     "March 2026",
    readTime: "18 min",
    img:      "https://media.licdn.com/dms/image/v2/D5612AQGfFSvn9o_bfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696065814097?e=2147483647&v=beta&t=Y1m22xcvOnMrRh33yrvsi5-SwW_0Gdyants9fS5-aAg",
    accent:   "#2563EB",
    accentBg: "#EFF6FF",
  },
  {
    title:    "Best AI Tools for Business 2026 — Complete Guide",
    excerpt:  "ChatGPT, Claude, Canva AI, Perplexity — the AI tools every business should be using in 2026, with use cases, pricing, and honest comparisons.",
    slug:     "/blog/best-ai-tools-for-business-2026",
    category: "AI GUIDE",
    date:     "March 2026",
    readTime: "12 min",
    img:      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format",
    accent:   "#10A37F",
    accentBg: "#F0FDF4",
  },
  {
    title:    "OpenAI vs Anthropic Claude: Which AI Model Is Better in 2026?",
    excerpt:  "GPT-4o vs Claude 3.5 — coding, reasoning, safety, API pricing and which model to build on for your startup in 2026.",
    slug:     "/blog/openai-vs-anthropic-claude-comparison-2026",
    category: "AI COMPARISON",
    date:     "March 2026",
    readTime: "10 min",
    img:      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format",
    accent:   "#D97706",
    accentBg: "#FFFBEB",
  },
  {
    title:    "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    excerpt:  "Calm under pressure, team strategy, resilience — seven principles born from the crease that define both great captains and great founders.",
    slug:     "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "LEADERSHIP",
    date:     "March 2026",
    readTime: "7 min",
    img:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    accent:   "#B45309",
    accentBg: "#FEF3C7",
  },
  {
    title:    "Remove Background from Image Free: Best AI Tools 2026",
    excerpt:  "Remove.bg, Canva Background Remover, Adobe Express — the best free and paid AI photo cutout tools ranked for speed, accuracy, and API pricing.",
    slug:     "/blog/remove-background-from-image-free-tools-2026",
    category: "AI TOOLS",
    date:     "March 2026",
    readTime: "6 min",
    img:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format",
    accent:   "#06B6D4",
    accentBg: "#ECFEFF",
  },
  {
    title:    "Compress PDF Free 2026: Smallpdf vs iLovePDF vs Adobe",
    excerpt:  "The fastest, highest-quality free PDF compression tools in 2026 — compared on file size reduction, quality loss, upload limits, and privacy.",
    slug:     "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",
    category: "PRODUCTIVITY",
    date:     "March 2026",
    readTime: "5 min",
    img:      "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80&auto=format",
    accent:   "#EF4444",
    accentBg: "#FEF2F2",
  },
]

const OPINION_POSTS = [
  { num: "I",    title: "Why India's Startup Valuations Are Being Re-Set — and What It Means for Founders",        category: "Opinion",          date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
  { num: "II",   title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",          category: "Analysis",         date: "Mar 2026", slug: "/blog/how-to-get-startup-funding-india-2026" },
  { num: "III",  title: "Why Perplexity AI Will Not Kill Google — But Will Permanently Shrink It",                 category: "AI Opinion",       date: "Mar 2026", slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026" },
  { num: "IV",   title: "Canva vs Adobe: The Design War That Adobe Is Quietly Losing",                             category: "Sector Analysis",  date: "Mar 2026", slug: "/blog/top-trending-global-startups-2026" },
  { num: "V",    title: "Founder-Market Fit: Why Domain Obsession Beats MBA Strategy Every Time",                  category: "Strategy",         date: "Mar 2026", slug: "/blog/best-indian-startup-founders-to-follow-2026" },
  { num: "VI",   title: "Character.AI's Engagement Problem: When 2 Hours/Day Is Both the Strength and the Risk",  category: "AI Opinion",       date: "Mar 2026", slug: "/blog/top-trending-global-startups-2026" },
  { num: "VII",  title: "India Cannot Be a Consumer of AI Built Elsewhere — the Case for Sarvam & Krutrim",       category: "AI Opinion",       date: "Mar 2026", slug: "/blog/top-ai-startups-india-2026" },
  { num: "VIII", title: "The Single-Purpose AI Utility Playbook: How Remove.bg Built 150M Visits With One Tool",  category: "Growth Analysis",  date: "Mar 2026", slug: "/blog/remove-background-from-image-free-tools-2026" },
]

const ALL_POSTS = [
  // India
  { title: "India Startup Ecosystem 2026: State of the Nation",        slug: "/blog/india-startup-ecosystem-2026",                   category: "Annual Report",    date: "Mar 2026", readTime: "20 min" },
  { title: "How to Get Startup Funding in India 2026",                 slug: "/blog/how-to-get-startup-funding-india-2026",           category: "Funding Guide",    date: "Mar 2026", readTime: "12 min" },
  { title: "Top Indian Unicorns 2026: Ranked & Profiled",              slug: "/blog/top-indian-unicorns-2026",                       category: "Unicorn Report",   date: "Mar 2026", readTime: "15 min" },
  { title: "25 Best Indian Startup Founders to Follow 2026",           slug: "/blog/best-indian-startup-founders-to-follow-2026",    category: "Founder Profiles", date: "Mar 2026", readTime: "18 min" },
  { title: "IND vs NZ Final 2026: 7 Leadership Lessons",               slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",        category: "Leadership",       date: "Mar 2026", readTime: "7 min"  },
  { title: "5 Startup Ideas Inspired by IND vs NZ Final 2026",         slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026", category: "Startup Ideas",    date: "Mar 2026", readTime: "6 min"  },
  { title: "Top AI Startups in India (2026 Updated List)",             slug: "/blog/top-ai-startups-india-2026",                     category: "AI & Deep Tech",   date: "Mar 2026", readTime: "11 min" },
  { title: "How to Start a Startup in India (Step-by-Step 2026)",      slug: "/blog/how-to-start-startup-india-2026",                category: "Founder Playbook", date: "Mar 2026", readTime: "14 min" },
  // Global
  { title: "Top 10 Trending Global Startups 2026",                     slug: "/blog/top-trending-global-startups-2026",              category: "Global Edition",   date: "Mar 2026", readTime: "18 min" },
  { title: "ChatGPT Plus vs Perplexity AI 2026",                       slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026",             category: "AI Comparison",    date: "Mar 2026", readTime: "9 min"  },
  { title: "Best AI Tools for Business 2026",                          slug: "/blog/best-ai-tools-for-business-2026",                category: "AI Guide",         date: "Mar 2026", readTime: "12 min" },
  { title: "Best Travel Card 2026: Revolut vs Wise vs Monzo",          slug: "/blog/best-travel-card-2026-revolut-wise-compared",    category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "Best Language Learning Apps 2026",                         slug: "/blog/best-language-learning-apps-2026",               category: "EdTech Guide",     date: "Mar 2026", readTime: "10 min" },
  { title: "Ramp vs Brex 2026: Which Corporate Card Wins?",            slug: "/blog/ramp-vs-brex-corporate-card-comparison-2026",   category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "OpenAI vs Anthropic Claude Comparison 2026",               slug: "/blog/openai-vs-anthropic-claude-comparison-2026",     category: "AI Comparison",    date: "Mar 2026", readTime: "10 min" },
  { title: "Remove Background from Image Free — Best AI Tools 2026",   slug: "/blog/remove-background-from-image-free-tools-2026",  category: "AI Tools",         date: "Mar 2026", readTime: "6 min"  },
  { title: "Compress PDF Free 2026: Smallpdf vs iLovePDF",             slug: "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",  category: "Productivity",     date: "Mar 2026", readTime: "5 min"  },
  { title: "Character.AI vs ChatGPT — Which Is Better in 2026?",       slug: "/blog/character-ai-vs-chatgpt-which-is-better-2026",  category: "AI Comparison",    date: "Mar 2026", readTime: "8 min"  },
]

const CATEGORIES = [
  "All", "Global Edition", "AI Comparison", "AI Guide", "AI Tools",
  "FinTech Guide", "EdTech Guide", "Annual Report", "Funding Guide",
  "Unicorn Report", "Founder Profiles", "Leadership", "Startup Ideas",
  "AI & Deep Tech", "Founder Playbook", "Productivity",
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        :root {
          --teal: #0D9488; --teal-dark: #0F766E; --teal-light: #5EEAD4;
          --ink: #0F1A1C; --parch: #F2F4F3; --parch-dark: #E8EDEC;
          --rule: #C4CCCB; --rule2: #D4DCDA; --muted: #4A6360; --gold: #C59A2E;
        }
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        @keyframes riseIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .ri-0 { animation: riseIn 0.5s 0.00s ease both; }
        .ri-1 { animation: riseIn 0.5s 0.08s ease both; }
        .ri-2 { animation: riseIn 0.5s 0.16s ease both; }
        .ri-3 { animation: riseIn 0.5s 0.24s ease both; }
        .ri-4 { animation: riseIn 0.5s 0.32s ease both; }
        .ri-5 { animation: riseIn 0.5s 0.40s ease both; }
        .blog-hero { position: relative; background: linear-gradient(135deg, rgba(15,26,28,0.88) 0%, rgba(15,26,28,0.75) 100%); overflow: hidden; border-bottom: 1px solid var(--rule); }
        .blog-hero-bg { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=70'); background-size: cover; background-position: center 40%; opacity: 0.22; z-index: 0; }
        .blog-hero-bg::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, rgba(15,26,28,0.85) 0%, rgba(15,26,28,0.5) 50%, rgba(15,26,28,0.85) 100%); }
        .blog-hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #0F766E 0%, #0D9488 50%, #5EEAD4 100%); z-index: 2; }
        .blog-mast { position: relative; z-index: 2; }
        .blog-mast-content { position: relative; z-index: 10; text-align: center; padding: 100px 24px 80px; }
        .blog-mast-h1 { font-family: 'Playfair Display', Georgia, serif; font-size: clamp(40px, 6vw, 68px); font-weight: 900; letter-spacing: -0.02em; color: white; line-height: 1.05; text-shadow: 0 2px 12px rgba(0,0,0,0.3); margin-bottom: 20px; }
        .blog-mast-h1 em { font-style: italic; color: var(--teal-light); }
        .blog-mast-rule { display: block; width: 200px; height: 2px; background: linear-gradient(90deg, transparent, var(--teal), var(--teal-light), var(--teal), transparent); margin: 20px auto 24px; }
        .blog-mast-tagline { font-family: Georgia, serif; font-size: 16px; color: rgba(255,255,255,0.88); font-style: italic; line-height: 1.7; max-width: 600px; margin: 0 auto 28px; }
        .blog-live-badge { display: inline-flex; align-items: center; gap: 10px; background: rgba(255,255,255,0.12); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.25); padding: 10px 28px; border-radius: 100px; }
        .blog-live-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--teal-light); animation: pulse 2s infinite; }
        .blog-live-text { font-family: system-ui, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: white; }
        @keyframes pulse { 0% { box-shadow: 0 0 0 0 rgba(94,234,212,0.4); } 70% { box-shadow: 0 0 0 8px rgba(94,234,212,0); } 100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); } }

        /* ── SEARCH BAR ── */
        .search-wrap { position: relative; z-index: 10; margin-top: 20px; display: flex; justify-content: center; }
        .search-form { display: flex; align-items: center; background: rgba(255,255,255,0.10); backdrop-filter: blur(14px); border: 1px solid rgba(255,255,255,0.22); border-radius: 100px; overflow: hidden; width: 100%; max-width: 480px; transition: border-color 0.2s, background 0.2s; }
        .search-form:focus-within { background: rgba(255,255,255,0.16); border-color: rgba(94,234,212,0.55); }
        .search-input { flex: 1; background: transparent; border: none; outline: none; padding: 12px 20px; font-family: system-ui, sans-serif; font-size: 13px; color: white; }
        .search-input::placeholder { color: rgba(255,255,255,0.45); }
        .search-btn { flex-shrink: 0; background: var(--teal); border: none; cursor: pointer; padding: 10px 18px; display: flex; align-items: center; gap: 6px; font-family: system-ui, sans-serif; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: white; transition: background 0.18s; border-radius: 0 100px 100px 0; }
        .search-btn:hover { background: var(--teal-dark); }
        .search-results-overlay { display: none; position: absolute; top: calc(100% + 8px); left: 50%; transform: translateX(-50%); width: 100%; max-width: 480px; background: #0F1A1C; border: 1px solid rgba(94,234,212,0.25); border-radius: 14px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); overflow: hidden; z-index: 100; }
        .search-results-overlay.active { display: block; }
        .search-result-item { display: flex; align-items: flex-start; gap: 10px; padding: 12px 16px; border-bottom: 1px solid rgba(255,255,255,0.06); text-decoration: none; transition: background 0.12s; }
        .search-result-item:last-child { border-bottom: none; }
        .search-result-item:hover { background: rgba(255,255,255,0.06); }
        .search-result-num { font-family: 'Playfair Display', Georgia, serif; font-style: italic; font-size: 11px; color: rgba(94,234,212,0.5); flex-shrink: 0; width: 18px; padding-top: 2px; }
        .search-result-text { flex: 1; }
        .search-result-title { font-family: system-ui, sans-serif; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.9); line-height: 1.35; margin-bottom: 3px; }
        .search-result-meta { font-family: system-ui, sans-serif; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--teal); }
        .search-no-results { padding: 20px 16px; text-align: center; font-family: system-ui, sans-serif; font-size: 12px; color: rgba(255,255,255,0.35); font-style: italic; }

        .cat-tabs { display: flex; overflow-x: auto; border-bottom: 1px solid var(--rule2); scrollbar-width: none; background: white; padding: 0 24px; }
        .cat-tabs::-webkit-scrollbar { display: none; }
        .cat-tab { flex-shrink: 0; padding: 14px 20px; font-family: system-ui, sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #999; text-decoration: none; border-bottom: 2px solid transparent; transition: all 0.2s; white-space: nowrap; cursor: pointer; }
        .cat-tab:hover { color: var(--ink); }
        .cat-tab.on { color: var(--teal); border-bottom-color: var(--teal); }
        .page-root { min-height: 100vh; background: var(--parch); font-family: 'Georgia', 'Times New Roman', serif; }
        .sh { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3em; color: #AAA; font-family: system-ui, sans-serif; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }
        .imgf { position: relative; overflow: hidden; }
        .imgf img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; transition: transform .6s ease; }
        .imgf:hover img { transform: scale(1.04); }
        .card-hover { transition: transform .15s ease, box-shadow .15s ease; text-decoration: none; display: block; }
        .card-hover:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 var(--ink); z-index: 1; position: relative; }
        .hero-grid { display: grid; grid-template-columns: 1fr 420px; border: 1.5px solid var(--ink); overflow: hidden; background: #FDFCF9; }
        @media (max-width: 900px) { .hero-grid { grid-template-columns: 1fr !important; } .hero-img-col { height: 220px !important; border-left: none !important; border-top: 1.5px solid var(--ink) !important; order: -1; } }
        .sec-grid { display: grid; grid-template-columns: repeat(4,1fr); border: 1.5px solid var(--ink); background: var(--ink); gap: 1.5px; }
        @media (max-width: 1100px) { .sec-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 640px)  { .sec-grid { grid-template-columns: 1fr !important; } }
        .main-grid { display: grid; grid-template-columns: 1fr 320px; gap: clamp(14px, 2vw, 22px); align-items: start; }
        @media (max-width: 900px) { .main-grid { grid-template-columns: 1fr !important; } }
        .grid-6 { display: grid; grid-template-columns: repeat(3,1fr); border: 1.5px solid var(--ink); background: var(--ink); gap: 1.5px; }
        @media (max-width: 900px) { .grid-6 { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 480px) { .grid-6 { grid-template-columns: 1fr !important; } }
        .arch-row { display: grid; grid-template-columns: 1fr 145px 85px 70px; align-items: center; gap: 16px; padding: 13px 16px; border-bottom: 1px solid var(--rule2); text-decoration: none; background: #FDFCF9; transition: background .12s, padding-left .15s; }
        .arch-row:last-child { border-bottom: none; }
        .arch-row:hover { background: #EDE9DF; padding-left: 22px; }
        @media (max-width: 640px) { .arch-row { grid-template-columns: 1fr !important; } .arch-meta { display: none !important; } }
        .op-row { display: flex; align-items: flex-start; gap: 14px; padding: 14px 0; border-bottom: 1px solid var(--rule2); text-decoration: none; transition: padding-left .15s; }
        .op-row:last-child { border-bottom: none; padding-bottom: 0; }
        .op-row:hover { padding-left: 6px; }
        .tag-badge { display: inline-block; font-size: 7px; font-weight: 800; letter-spacing: 0.22em; text-transform: uppercase; padding: 2px 8px; font-family: system-ui, sans-serif; }
        .tag-trending    { background: #FEFCE8; color: #854D0E; border: 1px solid rgba(133,77,14,.25); }
        .tag-new         { background: #EFF6FF; color: #1D4ED8; border: 1px solid rgba(29,78,216,.25); }
        .tag-global      { background: #EFF6FF; color: #1D4ED8; border: 1px solid rgba(37,99,235,.3); }
        .tag-mustread    { background: #FEF3C7; color: #92400E; border: 1px solid rgba(180,83,9,.30); }
        .tag-hightraffic { background: #F0FDF4; color: #15803D; border: 1px solid rgba(21,128,61,.25); }
        .global-divider { background: linear-gradient(135deg, #0F1A1C 0%, #1A2A2C 100%); padding: 16px 24px; display: flex; align-items: center; gap: 16px; border-top: 3px solid #2563EB; border-bottom: 1px solid rgba(255,255,255,.08); }
        .nl-box { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); position: relative; overflow: hidden; padding: clamp(16px, 2.8vw, 28px); }
        .nl-box::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #0F766E, #0D9488, #5EEAD4, #0D9488, #0F766E); }
        .ticker-wrap { display: flex; overflow: hidden; flex-wrap: wrap; border: 1.5px solid var(--ink); background: var(--ink); }
        .ticker-item { padding: 14px 24px; border-right: 1px solid rgba(255,255,255,.07); flex: 1; text-align: center; min-width: 90px; }
        .cta-block { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); border-radius: 20px; padding: 36px 44px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; margin-top: 48px; position: relative; overflow: hidden; }
        .cta-block::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #0F766E, #0D9488, #5EEAD4, #0D9488, #0F766E); }
        .cta-ey { font-size: 8.5px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(94,234,212,0.7); margin-bottom: 8px; font-family: system-ui, sans-serif; }
        .cta-h { font-family: 'Playfair Display', Georgia, serif; font-size: 19px; font-weight: 700; color: white; margin-bottom: 6px; }
        .cta-p { font-size: 12px; color: rgba(255,255,255,0.45); font-style: italic; }
        .cta-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 10px; background: var(--teal); color: white; padding: 13px 28px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; border-radius: 40px; transition: all 0.2s; }
        .cta-btn:hover { background: var(--teal-dark); transform: translateY(-2px); }
        .links-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 36px; padding-top: 36px; border-top: 1px solid var(--rule2); }
        @media (max-width: 700px) { .links-grid { grid-template-columns: repeat(2, 1fr); } }
        .link-card { padding: 12px 14px; border-radius: 12px; border: 1px solid var(--rule2); background: white; text-decoration: none; transition: all 0.2s; }
        .link-card:hover { border-color: var(--teal); transform: translateY(-1px); }
        .link-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); display: flex; align-items: center; gap: 5px; margin-bottom: 4px; font-family: system-ui, sans-serif; }
        .link-desc { font-size: 10px; color: #AAA; font-family: system-ui, sans-serif; }
        .main-wrap { max-width: 1300px; margin: 0 auto; padding: 32px 24px 56px; }
        @media (max-width: 768px) { .blog-mast-content { padding: 120px 20px 70px !important; } .main-wrap { padding: 24px 16px 40px; } .cta-block { padding: 24px 20px; } }
        @media (max-width: 480px) { .blog-mast-content { padding: 100px 16px 60px !important; } .blog-mast-h1 { font-size: 36px; } }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: var(--rule); }
      `}</style>

      {/* ── SEARCH SCRIPT ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var ALL_POSTS = ${JSON.stringify(ALL_POSTS)};

          function initSearch() {
            var input = document.getElementById('forge-search-input');
            var btn = document.getElementById('forge-search-btn');
            var overlay = document.getElementById('forge-search-results');
            if (!input || !btn || !overlay) return;

            function doSearch() {
              var q = input.value.trim().toLowerCase();
              overlay.innerHTML = '';
              if (!q) { overlay.classList.remove('active'); return; }
              var results = ALL_POSTS.filter(function(p) {
                return p.title.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
              });
              if (results.length === 0) {
                overlay.innerHTML = '<div class="search-no-results">No articles found for "' + input.value + '"</div>';
              } else {
                results.slice(0, 8).forEach(function(p, i) {
                  var a = document.createElement('a');
                  a.href = p.slug;
                  a.className = 'search-result-item';
                  a.innerHTML =
                    '<span class="search-result-num">' + (i + 1) + '</span>' +
                    '<span class="search-result-text">' +
                      '<div class="search-result-title">' + p.title + '</div>' +
                      '<div class="search-result-meta">' + p.category + ' · ' + p.readTime + ' read</div>' +
                    '</span>';
                  overlay.appendChild(a);
                });
              }
              overlay.classList.add('active');
            }

            input.addEventListener('input', doSearch);
            btn.addEventListener('click', function(e) { e.preventDefault(); doSearch(); });
            input.addEventListener('keydown', function(e) { if (e.key === 'Enter') { e.preventDefault(); doSearch(); } });

            document.addEventListener('click', function(e) {
              if (!overlay.contains(e.target) && e.target !== input && e.target !== btn) {
                overlay.classList.remove('active');
              }
            });
          }

          if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initSearch);
          } else {
            initSearch();
          }
        })();
      `}} />

      <div className="page-root">

        {/* ── HERO ── */}
        <div className="blog-hero">
          <div className="blog-hero-bg" />
          <div className="blog-mast">
            <div className="blog-mast-content ri-0">
              {/* eyebrow text removed */}
              <h1 className="blog-mast-h1">The <em>Forge</em></h1>
              <span className="blog-mast-rule" />
              <p className="blog-mast-tagline">
                Startup analysis, founder stories &amp; strategy<br />for India's &amp; the world's builders — March 2026
              </p>
              <div className="blog-live-badge">
                <span className="blog-live-dot" />
                <span className="blog-live-text">Live · {ALL_POSTS.length} Articles · Updated March 2026</span>
              </div>

              {/* ── SEARCH BAR ── */}
              <div className="search-wrap" style={{ marginTop: 20 }}>
                <div style={{ position: "relative", width: "100%", maxWidth: 480 }}>
                  <div className="search-form">
                    <input
                      id="forge-search-input"
                      className="search-input"
                      type="text"
                      placeholder="Search articles by title or topic…"
                      autoComplete="off"
                    />
                    <button id="forge-search-btn" className="search-btn" type="button">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                      Search
                    </button>
                  </div>
                  <div id="forge-search-results" className="search-results-overlay" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── CATEGORY TABS ── */}
        <nav className="cat-tabs" aria-label="Browse by category">
          <span style={{ fontSize: 9, color: "#CCC", textTransform: "uppercase", letterSpacing: ".2em", padding: "14px 8px 14px 0", flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>Browse:</span>
          {CATEGORIES.map((cat, i) => (
            <span key={i} className={`cat-tab${i === 0 ? " on" : ""}`}>{cat}</span>
          ))}
        </nav>

        <main className="main-wrap">

          {/* ── INDIA HERO POST ── */}
          <section aria-label="India cover story" className="ri-1">
            <div className="sh">
              <span style={{ color: "var(--teal)", fontSize: 12 }}>◆</span>
              <span className="sh-l">India Cover Story · Most Comprehensive</span>
              <div className="sh-r" />
            </div>
            <Link href={HERO_POST.slug} className="card-hover" style={{ display: "block" }}>
              <div className="hero-grid">
                <div style={{ padding: "clamp(16px,2.4vw,30px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FDFCF9" }}>
                  <div>
                    <div style={{ height: 3, background: `linear-gradient(90deg,#0F766E,${HERO_POST.accent},#E8C547,${HERO_POST.accent},#0F766E)`, marginBottom: 14 }} />
                    <div className="flex items-center gap-3 mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span className="text-[8px] font-black tracking-[0.26em] uppercase px-3 py-1.5 text-white" style={{ background: HERO_POST.accent }}>{HERO_POST.category}</span>
                      <span className="tag-badge tag-mustread">{HERO_POST.tag}</span>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider" style={{ fontFamily: "system-ui,sans-serif" }}>{HERO_POST.date}</span>
                    </div>
                    <h2 className="pf font-black leading-[1.06] mb-4" style={{ fontSize: "clamp(1.5rem,3.2vw,2.6rem)", color: "var(--ink)" }}>{HERO_POST.title}</h2>
                    <div style={{ width: 40, height: 3, background: HERO_POST.accent, marginBottom: 12 }} />
                    <p className="italic leading-[1.78] mb-4" style={{ fontSize: "clamp(13px,1.6vw,15px)", color: "#5A4A30", maxWidth: 520 }}>{HERO_POST.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {HERO_POST.topics.map(t => (<span key={t} className="text-[8px] uppercase tracking-wider" style={{ color: "#6B5C40", border: "1px solid var(--rule2)", padding: "3px 9px", background: "var(--parch)", fontFamily: "system-ui,sans-serif" }}>{t}</span>))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--rule2)", fontFamily: "system-ui,sans-serif" }}>
                    <div className="flex gap-4 items-center">
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{HERO_POST.date}</span>
                      <span style={{ color: "var(--rule)", fontSize: 10 }}>·</span>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{HERO_POST.readTime} read</span>
                    </div>
                    <span className="text-[9px] font-black uppercase tracking-wider flex items-center gap-1" style={{ color: HERO_POST.accent, fontFamily: "system-ui,sans-serif" }}>Read Report <ArrowUpRight className="w-3 h-3" aria-hidden="true" /></span>
                  </div>
                </div>
                <div className="hero-img-col imgf" style={{ minHeight: 340, borderLeft: "1.5px solid var(--ink)" }}>
                  <img src={HERO_POST.img} alt={HERO_POST.title} />
                </div>
              </div>
            </Link>
          </section>

          {/* ── INDIA SECONDARY 4-col ── */}
          <section aria-label="India essential reads" className="ri-2" style={{ marginTop: "clamp(14px,2vw,20px)" }}>
            <div className="sh"><span className="sh-l">India Edition · Essential Reads</span><div className="sh-r" /></div>
            <div className="sec-grid">
              {SECONDARY_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="card-hover" style={{ background: "#FDFCF9", display: "flex", flexDirection: "column" }}>
                  <div className="imgf" style={{ height: "clamp(110px,12vw,150px)", borderBottom: "1px solid var(--rule2)", flexShrink: 0 }}>
                    <img src={post.img} alt={post.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,26,28,.65) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 12, left: 14, display: "flex", gap: 7, alignItems: "center" }}>
                      <span className="text-[7.5px] font-black tracking-[0.18em] uppercase px-2 py-1 text-white" style={{ background: post.accent, fontFamily: "system-ui,sans-serif" }}>{post.category}</span>
                      <span className={`tag-badge ${post.tag === "New" ? "tag-new" : post.tag === "Trending" ? "tag-trending" : "tag-hightraffic"}`}>{post.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: "clamp(10px,1.4vw,14px)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="pf font-bold leading-[1.2] mb-2" style={{ fontSize: "clamp(.9rem,1.5vw,1.1rem)", color: "var(--ink)" }}>{post.title}</h3>
                    <p className="italic leading-[1.72] flex-1 mb-3" style={{ fontSize: "clamp(11px,1.1vw,12.5px)", color: "#5A4A30", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--rule2)", fontFamily: "system-ui,sans-serif" }}>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{post.date}</span>
                      <span className="text-[8.5px] font-black uppercase tracking-wider flex items-center gap-1" style={{ color: post.accent }}>Read <ArrowRight className="w-2.5 h-2.5" aria-hidden="true" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── GLOBAL EDITION DIVIDER ── */}
          <div className="global-divider ri-3" style={{ marginTop: "clamp(14px,2.2vw,22px)", borderRadius: 8 }}>
            <div style={{ width: 32, height: 32, background: "#2563EB", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>🌍</div>
            <div>
              <p style={{ fontFamily: "system-ui,sans-serif", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.24em", color: "rgba(94,234,212,.7)", marginBottom: 2 }}>New · Global Edition — March 2026</p>
              <p style={{ fontFamily: "system-ui,sans-serif", fontSize: 12, color: "rgba(255,255,255,.6)" }}>The 10 highest-traffic global startups — OpenAI, Perplexity, Revolut, Canva, Character.AI &amp; more.</p>
            </div>
            <Link href="/blog/top-trending-global-startups-2026" style={{ marginLeft: "auto", flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 6, background: "#2563EB", color: "white", padding: "8px 18px", borderRadius: 40, fontFamily: "system-ui,sans-serif", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.1em", textDecoration: "none", whiteSpace: "nowrap" }}>
              Read Feature <ArrowRight size={12} />
            </Link>
          </div>

          {/* ── GLOBAL HERO POST ── */}
          <section aria-label="Global cover story" className="ri-3" style={{ marginTop: "clamp(14px,2vw,20px)" }}>
            <div className="sh">
              <span style={{ color: "#2563EB", fontSize: 12 }}>◆</span>
              <span className="sh-l">Global Cover Story · March 2026 Edition</span>
              <div className="sh-r" />
            </div>
            <Link href={GLOBAL_HERO_POST.slug} className="card-hover" style={{ display: "block" }}>
              <div className="hero-grid">
                <div className="hero-img-col imgf" style={{ minHeight: 340, borderRight: "1.5px solid var(--ink)" }}>
                  <img src={GLOBAL_HERO_POST.img} alt={GLOBAL_HERO_POST.title} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 40%, rgba(15,26,28,.9) 100%)" }} />
                </div>
                <div style={{ padding: "clamp(16px,2.4vw,30px)", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FDFCF9" }}>
                  <div>
                    <div style={{ height: 3, background: `linear-gradient(90deg,#1D4ED8,#2563EB,#60A5FA,#2563EB,#1D4ED8)`, marginBottom: 14 }} />
                    <div className="flex items-center gap-3 mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
                      <span className="text-[8px] font-black tracking-[0.26em] uppercase px-3 py-1.5 text-white" style={{ background: "#2563EB" }}>{GLOBAL_HERO_POST.category}</span>
                      <span className="tag-badge tag-global">{GLOBAL_HERO_POST.tag}</span>
                    </div>
                    <h2 className="pf font-black leading-[1.06] mb-4" style={{ fontSize: "clamp(1.3rem,2.8vw,2.2rem)", color: "var(--ink)" }}>{GLOBAL_HERO_POST.title}</h2>
                    <div style={{ width: 40, height: 3, background: "#2563EB", marginBottom: 12 }} />
                    <p className="italic leading-[1.78] mb-4" style={{ fontSize: "clamp(12px,1.5vw,14px)", color: "#5A4A30", maxWidth: 480 }}>{GLOBAL_HERO_POST.subtitle}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {GLOBAL_HERO_POST.topics.map(t => (<span key={t} className="text-[8px] uppercase tracking-wider" style={{ color: "#3B5291", border: "1px solid rgba(37,99,235,.25)", padding: "3px 9px", background: "#EFF6FF", fontFamily: "system-ui,sans-serif" }}>{t}</span>))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-5 pt-4" style={{ borderTop: "1px solid var(--rule2)", fontFamily: "system-ui,sans-serif" }}>
                    <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{GLOBAL_HERO_POST.readTime} read · {GLOBAL_HERO_POST.date}</span>
                    <span className="text-[9px] font-black uppercase tracking-wider flex items-center gap-1" style={{ color: "#2563EB" }}>Read Report <ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>
            </Link>
          </section>

          {/* ── GLOBAL SECONDARY 4-col ── */}
          <section aria-label="Global essential reads" className="ri-3" style={{ marginTop: "clamp(14px,2vw,20px)" }}>
            <div className="sh"><span className="sh-l">Global Edition · High-Traffic Comparisons</span><div className="sh-r" /></div>
            <div className="sec-grid">
              {GLOBAL_SECONDARY_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="card-hover" style={{ background: "#FDFCF9", display: "flex", flexDirection: "column" }}>
                  <div className="imgf" style={{ height: "clamp(110px,12vw,150px)", borderBottom: "1px solid var(--rule2)", flexShrink: 0 }}>
                    <img src={post.img} alt={post.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(15,26,28,.65) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", top: 12, left: 14, display: "flex", gap: 7, alignItems: "center" }}>
                      <span className="text-[7.5px] font-black tracking-[0.18em] uppercase px-2 py-1 text-white" style={{ background: post.accent, fontFamily: "system-ui,sans-serif" }}>{post.category}</span>
                      <span className={`tag-badge ${post.tag === "New" ? "tag-new" : post.tag === "Trending" ? "tag-trending" : "tag-hightraffic"}`}>{post.tag}</span>
                    </div>
                  </div>
                  <div style={{ padding: "clamp(10px,1.4vw,14px)", flex: 1, display: "flex", flexDirection: "column" }}>
                    <h3 className="pf font-bold leading-[1.2] mb-2" style={{ fontSize: "clamp(.9rem,1.5vw,1.1rem)", color: "var(--ink)" }}>{post.title}</h3>
                    <p className="italic leading-[1.72] flex-1 mb-3" style={{ fontSize: "clamp(11px,1.1vw,12.5px)", color: "#5A4A30", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid var(--rule2)", fontFamily: "system-ui,sans-serif" }}>
                      <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{post.date}</span>
                      <span className="text-[8.5px] font-black uppercase tracking-wider flex items-center gap-1" style={{ color: post.accent }}>Read <ArrowRight className="w-2.5 h-2.5" /></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── MAIN 2-COL: 6-card grid + sidebar ── */}
          <div className="main-grid ri-4" style={{ marginTop: "clamp(14px,2.2vw,22px)" }}>
            <div>
              <div className="sh"><span className="sh-l">Latest Articles — {GRID_POSTS.length} Articles</span><div className="sh-r" /></div>
              <div className="grid-6">
                {GRID_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="card-hover" style={{ background: "#FDFCF9", display: "flex", flexDirection: "column" }}>
                    <div className="imgf" style={{ height: 110, borderBottom: "1px solid var(--rule2)", flexShrink: 0 }}>
                      <img src={post.img} alt={post.title} />
                      <div style={{ position: "absolute", inset: 0, background: "rgba(15,26,28,.1)" }} />
                      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: post.accent }} />
                      <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                        <span className="text-[7px] font-black tracking-[0.18em] uppercase" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{post.category}</span>
                      </div>
                    </div>
                    <div style={{ padding: "10px 12px 12px", flex: 1, display: "flex", flexDirection: "column" }}>
                      <h4 className="pf font-bold leading-[1.22] mb-2 flex-1" style={{ fontSize: "clamp(0.82rem,1.1vw,0.92rem)", color: "var(--ink)" }}>{post.title}</h4>
                      <p className="leading-[1.6] mb-3" style={{ fontSize: 11, color: "#5A4A30", fontFamily: "'Georgia',serif", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{post.excerpt}</p>
                      <div className="flex items-center justify-between" style={{ fontFamily: "system-ui,sans-serif" }}>
                        <span className="text-[8px] text-[#AAA] uppercase tracking-wider">{post.readTime}</span>
                        <span className="text-[8px] font-black" style={{ color: post.accent }}>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* SIDEBAR */}
            <div>
              <div className="sh"><span className="sh-l">Analysis &amp; Opinion</span><div className="sh-r" /></div>
              <div style={{ border: "1.5px solid var(--ink)", background: "#FDFCF9" }}>
                <div style={{ background: "linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%)", padding: "14px 18px", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0F766E, #0D9488, #5EEAD4)" }} />
                  <p className="pf font-bold text-white italic" style={{ fontSize: "1rem", lineHeight: 1.25 }}>The UpForge<br />Perspective</p>
                  <p className="text-[8px] uppercase tracking-[0.16em] mt-1.5" style={{ color: "rgba(94,234,212,.5)", fontFamily: "system-ui,sans-serif" }}>India &amp; Global · Startups · 2026</p>
                </div>
                <div style={{ padding: "6px 18px 18px" }}>
                  {OPINION_POSTS.map((op, i) => (
                    <Link key={i} href={op.slug} className="op-row">
                      <span className="pf font-black italic flex-shrink-0" style={{ fontSize: "1.05rem", color: "var(--rule)", lineHeight: 1, width: 28, marginTop: 2 }}>{op.num}</span>
                      <div style={{ flex: 1 }}>
                        <span className="text-[7.5px] font-black uppercase tracking-[0.14em] block mb-1" style={{ color: "var(--teal)", fontFamily: "system-ui,sans-serif" }}>{op.category}</span>
                        <p className="pf font-bold leading-[1.28] mb-1" style={{ fontSize: "0.84rem", color: "var(--ink)" }}>{op.title}</p>
                        <span className="text-[8px] uppercase tracking-wider" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>{op.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ marginTop: 12, background: "linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%)", padding: "20px 18px", borderRadius: 16, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #0F766E, #0D9488, #5EEAD4)" }} />
                <p className="text-[8px] font-black uppercase tracking-[0.24em] mb-2" style={{ color: "rgba(94,234,212,.6)", fontFamily: "system-ui,sans-serif" }}>Free AI Tool</p>
                <p className="pf font-bold text-white leading-[1.3] mb-2" style={{ fontSize: "1rem" }}>Startup Valuation<br /><em style={{ color: "var(--teal-light)" }}>Report — Free</em></p>
                <p className="leading-relaxed mb-4" style={{ fontSize: 10.5, color: "rgba(255,255,255,.4)", fontFamily: "system-ui,sans-serif" }}>AI-powered analysis benchmarked against 500+ global startups. Takes 3 minutes.</p>
                <Link href="/report" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, background: "var(--teal)", padding: "10px", fontFamily: "system-ui,sans-serif", fontSize: 9, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em", color: "white", textDecoration: "none", borderRadius: 10 }}>
                  Generate Free Report <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── ALL PUBLISHED ARTICLES ── */}
          <section aria-label="All published articles" className="ri-5" style={{ marginTop: "clamp(18px,2.8vw,30px)" }}>
            <div className="sh">
              <span style={{ color: "var(--teal)", fontSize: 12 }}>◆</span>
              <span className="sh-l">All Published Articles — {ALL_POSTS.length} Articles · March 2026</span>
              <div className="sh-r" />
            </div>
            <div style={{ border: "1.5px solid var(--ink)", background: "var(--ink)", display: "flex", flexDirection: "column", gap: "1.5px" }}>
              <div style={{ background: "var(--ink)", padding: "8px 16px", display: "grid", gridTemplateColumns: "1fr 145px 85px 70px", gap: 16, fontFamily: "system-ui,sans-serif" }}>
                {["Article", "Category", "Published", "Read Time"].map(h => (
                  <span key={h} className="text-[7.5px] font-black uppercase tracking-[0.2em]" style={{ color: "rgba(255,255,255,.28)" }}>{h}</span>
                ))}
              </div>
              {ALL_POSTS.map((post, i) => (
                <Link key={i} href={post.slug} className="arch-row">
                  <p className="pf font-bold leading-[1.3]" style={{ fontSize: 13, color: "var(--ink)", margin: 0 }}>{post.title}</p>
                  <span className="arch-meta text-[9px] uppercase tracking-wider text-center" style={{ color: "var(--teal-dark)", border: "1px solid rgba(13,148,136,.3)", padding: "2px 8px", fontFamily: "system-ui,sans-serif" }}>{post.category}</span>
                  <span className="arch-meta text-[9px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>{post.date}</span>
                  <span className="arch-meta text-[9px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>{post.readTime}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* ── STATS TICKER ── */}
          <section aria-label="UpForge key statistics" style={{ marginTop: "clamp(14px,2.5vw,24px)" }}>
            <div className="ticker-wrap">
              {[
                { v: String(ALL_POSTS.length), l: "Articles Published" },
                { v: "650K+",  l: "Registered Startups" },
                { v: "125+",   l: "Indian Unicorns"      },
                { v: "10",     l: "Global Founders"      },
                { v: "$3.44B", l: "Q1 2026 Funding"      },
              ].map((s, i) => (
                <div key={i} className="ticker-item">
                  <p className="pf font-black text-white leading-none mb-1" style={{ fontSize: "1.4rem" }}>{s.v}</p>
                  <p className="text-[7.5px] font-black uppercase tracking-[0.16em]" style={{ color: "rgba(255,255,255,.3)", fontFamily: "system-ui,sans-serif" }}>{s.l}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="cta-block">
            <div>
              <p className="cta-ey">🌍 UpForge · The Forge Blog · India &amp; Global</p>
              <p className="cta-h">The world's most-read startup analysis. Free. Forever.</p>
              <p className="cta-p">{ALL_POSTS.length} in-depth articles — AI guides, funding playbooks, global founder profiles, and ecosystem reports.</p>
            </div>
            <Link href="/submit" className="cta-btn">Submit Your Startup <ArrowRight size={13} /></Link>
          </div>

          {/* ── INTERNAL LINKS ── */}
          <div className="links-grid">
            {[
              { l: "Global Registry →",           h: "https://www.upforge.org/registry",               desc: "Full verified database"          },
              { l: "Indian Unicorns 2026 →",       h: "/blog/top-indian-unicorns-2026",                 desc: "All 125 unicorns profiled"        },
              { l: "Top AI Startups 2026 →",       h: "/blog/top-ai-startups-india-2026",               desc: "Sarvam, Krutrim & more"           },
              { l: "Global Startups 2026 →",       h: "/blog/top-trending-global-startups-2026",        desc: "OpenAI, Perplexity, Revolut…"     },
            ].map(lnk => (
              <Link key={lnk.h} href={lnk.h} className="link-card">
                <span className="link-title">{lnk.l}</span>
                <span className="link-desc">{lnk.desc}</span>
              </Link>
            ))}
          </div>

          {/* ── FOOTER ── */}
          <footer style={{ borderTop: "1px solid var(--rule2)", paddingTop: "1rem", marginTop: 32 }}>
            <p style={{ fontSize: "8.5px", lineHeight: 1.7, color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
              * Article data sourced from Inc42, Forbes India, TechCrunch, Crunchbase, Tracxn, and company announcements as of March 2026.
              UpForge is an independent registry — no paid placements, no sponsored rankings.
            </p>
            <nav aria-label="Footer navigation" style={{ marginTop: 16 }}>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 16px", listStyle: "none", margin: 0, padding: 0 }}>
                {[
                  { l: "The Founder Chronicle",           h: "/"                                                   },
                  { l: "Global Registry",                 h: "https://www.upforge.org/registry"                    },
                  { l: "Indian Unicorns 2026",            h: "/blog/top-indian-unicorns-2026"                      },
                  { l: "Top Global Startups 2026",        h: "/blog/top-trending-global-startups-2026"             },
                  { l: "Startup Funding Guide",           h: "/blog/how-to-get-startup-funding-india-2026"         },
                  { l: "Best AI Tools 2026",              h: "/blog/best-ai-tools-for-business-2026"               },
                  { l: "Best Language Learning Apps",     h: "/blog/best-language-learning-apps-2026"              },
                  { l: "Ramp vs Brex 2026",               h: "/blog/ramp-vs-brex-corporate-card-comparison-2026"  },
                  { l: "Free Valuation Tool",             h: "/report"                                             },
                  { l: "Submit Startup",                  h: "/submit"                                             },
                ].map(lnk => (
                  <li key={lnk.h}>
                    <Link href={lnk.h} style={{ fontSize: "8.5px", color: "#AAA", textTransform: "uppercase", letterSpacing: "0.08em", textDecoration: "none", fontFamily: "system-ui,sans-serif" }}>
                      {lnk.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </footer>
        </main>
      </div>
    </>
  )
}
