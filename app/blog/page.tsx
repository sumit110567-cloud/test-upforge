"use client"

// app/blog/page.tsx
// FIXED: Header/footer collapse resolved by matching about/page.tsx structure exactly
// - Removed Navbar import (about page doesn't use it either)
// - blog-page-root uses min-height:100vh, display:flex, flex-direction:column
// - blog-page-content uses flex:1 + display:flex + flex-direction:column
// - Added overflow:visible to hero so search dropdown works

import Link from "next/link"
import { ArrowRight, ArrowUpRight, Search, X } from "lucide-react"
import { useState, useMemo } from "react"
import { Navbar } from "@/components/navbar"

// ─── DATA ─────────────────────────────────────────────────────────────────────

const HERO_POST = {
  title:    "India Startup Ecosystem 2026: The Complete State of the Nation Report",
  subtitle: "650,000 startups. 125 unicorns. $3.44B raised in Q1 alone. The definitive data-driven picture of where India's startup ecosystem stands, where it's going, and what every founder and investor must understand right now.",
  slug:     "/blog/india-startup-ecosystem-2026",
  category: "ANNUAL REPORT",
  date:     "March 2026",
  readTime: "20 min",
  img:      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  tag:      "Cover Story",
  topics:   ["Funding Trends", "Top Sectors", "City Rankings", "5 Macro Trends", "Policy Landscape"],
  accent:   "#0D9488",
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
    excerpt:  "Multi-currency cards ranked for international travellers — exchange rates, ATM limits, crypto, and which card saves you the most money abroad.",
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
    excerpt:  "Philosophies, playbooks, and patterns of India's most influential builders.",
    slug:     "/blog/best-indian-startup-founders-to-follow-2026",
    category: "FOUNDER PROFILES",
    date:     "March 2026",
    readTime: "18 min",
    img:      "https://media.licdn.com/dms/image/v2/D5612AQGfFSvn9o_bfQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1696065814097?e=2147483647&v=beta&t=Y1m22xcvOnMrRh33yrvsi5-SwW_0Gdyants9fS5-aAg",
    accent:   "#2563EB",
  },
  {
    title:    "Best AI Tools for Business 2026 — Complete Guide",
    excerpt:  "ChatGPT, Claude, Canva AI, Perplexity — the AI tools every business should use in 2026.",
    slug:     "/blog/best-ai-tools-for-business-2026",
    category: "AI GUIDE",
    date:     "March 2026",
    readTime: "12 min",
    img:      "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80&auto=format",
    accent:   "#10A37F",
  },
  {
    title:    "OpenAI vs Anthropic Claude: Which AI Model Is Better in 2026?",
    excerpt:  "GPT-4o vs Claude — coding, reasoning, safety, API pricing and which to build on.",
    slug:     "/blog/openai-vs-anthropic-claude-comparison-2026",
    category: "AI COMPARISON",
    date:     "March 2026",
    readTime: "10 min",
    img:      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80&auto=format",
    accent:   "#D97706",
  },
  {
    title:    "IND vs NZ Final 2026: 7 Leadership Lessons Every Startup Founder Must Learn",
    excerpt:  "Calm under pressure, team strategy, resilience — principles born from the crease.",
    slug:     "/blog/leadership-lessons-ind-vs-nz-final-2026",
    category: "LEADERSHIP",
    date:     "March 2026",
    readTime: "7 min",
    img:      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&q=80",
    accent:   "#B45309",
  },
  {
    title:    "Remove Background from Image Free: Best AI Tools 2026",
    excerpt:  "Remove.bg, Canva Background Remover, Adobe Express — ranked for speed, accuracy, and pricing.",
    slug:     "/blog/remove-background-from-image-free-tools-2026",
    category: "AI TOOLS",
    date:     "March 2026",
    readTime: "6 min",
    img:      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format",
    accent:   "#06B6D4",
  },
  {
    title:    "Compress PDF Free 2026: Smallpdf vs iLovePDF vs Adobe",
    excerpt:  "The fastest, highest-quality free PDF compression tools — compared on quality, limits, and privacy.",
    slug:     "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",
    category: "PRODUCTIVITY",
    date:     "March 2026",
    readTime: "5 min",
    img:      "https://images.unsplash.com/photo-1568667256549-094345857637?w=600&q=80&auto=format",
    accent:   "#EF4444",
  },
]

const OPINION_POSTS = [
  { num: "I",    title: "Why India's Startup Valuations Are Being Re-Set — and What It Means for Founders",         category: "Opinion",          date: "Mar 2026", slug: "/blog/india-startup-ecosystem-2026" },
  { num: "II",   title: "The Bootstrapped Advantage: Why 2026 May Be the Best Year to Build Without VC",           category: "Analysis",         date: "Mar 2026", slug: "/blog/how-to-get-startup-funding-india-2026" },
  { num: "III",  title: "Why Perplexity AI Will Not Kill Google — But Will Permanently Shrink It",                  category: "AI Opinion",       date: "Mar 2026", slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026" },
  { num: "IV",   title: "Canva vs Adobe: The Design War That Adobe Is Quietly Losing",                              category: "Sector Analysis",  date: "Mar 2026", slug: "/blog/top-trending-global-startups-2026" },
  { num: "V",    title: "Founder-Market Fit: Why Domain Obsession Beats MBA Strategy Every Time",                   category: "Strategy",         date: "Mar 2026", slug: "/blog/best-indian-startup-founders-to-follow-2026" },
  { num: "VI",   title: "Character.AI's Engagement Problem: When 2 Hours/Day Is Both the Strength and the Risk",   category: "AI Opinion",       date: "Mar 2026", slug: "/blog/top-trending-global-startups-2026" },
  { num: "VII",  title: "India Cannot Be a Consumer of AI Built Elsewhere — the Case for Sarvam & Krutrim",        category: "AI Opinion",       date: "Mar 2026", slug: "/blog/top-ai-startups-india-2026" },
  { num: "VIII", title: "The Single-Purpose AI Utility Playbook: How Remove.bg Built 150M Visits With One Tool",   category: "Growth Analysis",  date: "Mar 2026", slug: "/blog/remove-background-from-image-free-tools-2026" },
]

const ALL_POSTS = [
  { title: "Oracle Layoffs 2026: 30,000 Jobs, One Email, No Warning",                    slug: "/blog/oracle-layoffs-2026",                          category: "Global Edition",   date: "Mar 2026", readTime: "16 min" },
  { title: "India Startup Ecosystem 2026: State of the Nation",                          slug: "/blog/india-startup-ecosystem-2026",                  category: "Annual Report",    date: "Mar 2026", readTime: "20 min" },
  { title: "How to Get Startup Funding in India 2026",                                   slug: "/blog/how-to-get-startup-funding-india-2026",         category: "Funding Guide",    date: "Mar 2026", readTime: "12 min" },
  { title: "Top Indian Unicorns 2026: Ranked & Profiled",                               slug: "/blog/top-indian-unicorns-2026",                      category: "Unicorn Report",   date: "Mar 2026", readTime: "15 min" },
  { title: "25 Best Indian Startup Founders to Follow 2026",                             slug: "/blog/best-indian-startup-founders-to-follow-2026",   category: "Founder Profiles", date: "Mar 2026", readTime: "18 min" },
  { title: "IND vs NZ Final 2026: 7 Leadership Lessons",                                slug: "/blog/leadership-lessons-ind-vs-nz-final-2026",       category: "Leadership",       date: "Mar 2026", readTime: "7 min"  },
  { title: "5 Startup Ideas Inspired by IND vs NZ Final 2026",                          slug: "/blog/startup-ideas-inspired-by-ind-vs-nz-final-2026",category: "Startup Ideas",    date: "Mar 2026", readTime: "6 min"  },
  { title: "Top AI Startups in India (2026 Updated List)",                               slug: "/blog/top-ai-startups-india-2026",                    category: "AI & Deep Tech",   date: "Mar 2026", readTime: "11 min" },
  { title: "How to Start a Startup in India (Step-by-Step 2026)",                       slug: "/blog/how-to-start-startup-india-2026",               category: "Founder Playbook", date: "Mar 2026", readTime: "14 min" },
  { title: "Top 10 Trending Global Startups 2026",                                       slug: "/blog/top-trending-global-startups-2026",             category: "Global Edition",   date: "Mar 2026", readTime: "18 min" },
  { title: "ChatGPT Plus vs Perplexity AI 2026",                                         slug: "/blog/chatgpt-plus-vs-perplexity-ai-2026",            category: "AI Comparison",    date: "Mar 2026", readTime: "9 min"  },
  { title: "Best AI Tools for Business 2026",                                             slug: "/blog/best-ai-tools-for-business-2026",               category: "AI Guide",         date: "Mar 2026", readTime: "12 min" },
  { title: "Best Travel Card 2026: Revolut vs Wise vs Monzo",                           slug: "/blog/best-travel-card-2026-revolut-wise-compared",   category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "Best Language Learning Apps 2026",                                            slug: "/blog/best-language-learning-apps-2026",              category: "EdTech Guide",     date: "Mar 2026", readTime: "10 min" },
  { title: "Ramp vs Brex 2026: Which Corporate Card Wins?",                             slug: "/blog/ramp-vs-brex-corporate-card-comparison-2026",   category: "FinTech Guide",    date: "Mar 2026", readTime: "8 min"  },
  { title: "OpenAI vs Anthropic Claude Comparison 2026",                                 slug: "/blog/openai-vs-anthropic-claude-comparison-2026",    category: "AI Comparison",    date: "Mar 2026", readTime: "10 min" },
  { title: "Remove Background from Image Free — Best AI Tools 2026",                    slug: "/blog/remove-background-from-image-free-tools-2026",  category: "AI Tools",         date: "Mar 2026", readTime: "6 min"  },
  { title: "Compress PDF Free 2026: Smallpdf vs iLovePDF",                              slug: "/blog/compress-pdf-free-smallpdf-ilovepdf-compared",  category: "Productivity",     date: "Mar 2026", readTime: "5 min"  },
  { title: "Character.AI vs ChatGPT — Which Is Better in 2026?",                       slug: "/blog/character-ai-vs-chatgpt-which-is-better-2026",  category: "AI Comparison",    date: "Mar 2026", readTime: "8 min"  },
]

// ─── PAGE COMPONENT ──────────────────────────────────────────────────────────

export default function BlogIndexPage() {
  const [searchQ, setSearchQ] = useState("")

  const searchResults = useMemo(() => {
    if (!searchQ.trim()) return []
    const q = searchQ.toLowerCase()
    return ALL_POSTS.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    )
  }, [searchQ])

  const showResults = searchQ.trim().length > 0

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --teal: #0D9488; --teal-dark: #0F766E; --teal-light: #5EEAD4;
          --ink: #0F1A1C; --parch: #F2F4F3; --parch-dark: #E8EDEC;
          --rule: #C4CCCB; --rule2: #D4DCDA; --muted: #4A6360;
          --gold: #C59A2E; --blue: #2563EB; --blue-dark: #1D4ED8;
          --pf: 'Playfair Display', Georgia, serif;
          --sf: system-ui, -apple-system, 'Segoe UI', sans-serif;
        }

        /* ══════════════════════════════════════════════════════════════
           ROOT LAYOUT — mirrors about/page.tsx exactly:
             .blog-page-root    → min-height:100vh, flex column
             <Navbar />         → flex-shrink:0 header
             .blog-page-content → flex:1, flex column (fills remaining space)

           KEY FIXES vs old version:
             1. blog-page-content has flex:1 so it pushes footer to bottom
             2. blog-hero has NO overflow:hidden — lets search dropdown escape
             3. blog-hero position:relative + z-index on search-wrap works correctly
        ══════════════════════════════════════════════════════════════ */

        .blog-page-root {
          min-height: 100vh;
          background: var(--parch);
          font-family: Georgia, 'Times New Roman', serif;
          color: var(--ink);
          display: flex;
          flex-direction: column;
        }

        /* flex:1 ensures this div grows to fill all space below Navbar */
        .blog-page-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          /* Do NOT set overflow:hidden here — it clips the search dropdown */
        }

        /* ── HERO — NO overflow:hidden — search dropdown must escape ── */
        .blog-hero {
          position: relative;
          /* overflow: hidden  ← REMOVED: this was clipping the search dropdown */
          background: linear-gradient(135deg, rgba(15,26,28,0.92) 0%, rgba(15,26,28,0.80) 100%);
          border-bottom: 1px solid var(--rule);
          flex-shrink: 0;
        }
        .blog-hero-bg {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=70');
          background-size: cover; background-position: center 40%;
          opacity: 0.18; z-index: 0;
          /* pointer-events:none so bg doesn't block clicks */
          pointer-events: none;
        }
        .blog-hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(15,26,28,0.9) 0%, rgba(15,26,28,0.4) 50%, rgba(15,26,28,0.9) 100%);
        }
        .blog-hero::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg, #0F766E, #0D9488, #5EEAD4, #0D9488, #0F766E);
          z-index: 3;
        }

        .blog-mast-content {
          position: relative; z-index: 10;
          text-align: center; padding: 72px 24px 60px;
        }
        .blog-mast-h1 {
          font-family: var(--pf); font-size: clamp(44px, 6.5vw, 76px);
          font-weight: 900; letter-spacing: -0.02em; color: white;
          line-height: 1.03; text-shadow: 0 2px 16px rgba(0,0,0,0.4); margin-bottom: 18px;
        }
        .blog-mast-h1 em { font-style: italic; color: var(--teal-light); }
        .blog-mast-rule {
          display: block; width: 180px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--teal), var(--teal-light), var(--teal), transparent);
          margin: 0 auto 20px;
        }
        .blog-mast-tagline {
          font-family: Georgia, serif; font-size: clamp(14px, 1.8vw, 16px);
          color: rgba(255,255,255,0.82); font-style: italic;
          line-height: 1.7; max-width: 560px; margin: 0 auto 28px;
        }

        /* ── SEARCH — z-index above all page content ── */
        .search-wrap {
          max-width: 640px; margin: 0 auto;
          position: relative; z-index: 9999;
        }
        .search-bar {
          display: flex; align-items: center;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.22); border-radius: 12px;
          padding: 4px 4px 4px 18px; gap: 8px;
          transition: border-color 0.2s, background 0.2s;
        }
        .search-bar:focus-within { border-color: rgba(94,234,212,0.6); background: rgba(255,255,255,0.14); }
        .search-icon { color: rgba(255,255,255,0.45); flex-shrink: 0; }
        .search-input {
          flex: 1; border: none; background: transparent;
          font-family: Georgia, serif; font-size: 14px; font-style: italic;
          color: white; outline: none; padding: 10px 0; min-width: 0;
        }
        .search-input::placeholder { color: rgba(255,255,255,0.38); }
        .search-clear {
          width: 32px; height: 32px; display: flex; align-items: center; justify-content: center;
          border-radius: 8px; background: rgba(255,255,255,0.1); border: none; cursor: pointer;
          color: rgba(255,255,255,0.6); transition: background 0.15s; flex-shrink: 0;
        }
        .search-clear:hover { background: rgba(255,255,255,0.2); }
        .search-results {
          position: absolute; top: calc(100% + 8px); left: 0; right: 0;
          background: white; border-radius: 12px; border: 1px solid var(--rule2);
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
          max-height: 420px; overflow-y: auto; z-index: 9999;
        }
        .search-results-header {
          padding: 10px 16px; border-bottom: 1px solid var(--rule2);
          font-family: var(--sf); font-size: 8.5px; font-weight: 800;
          letter-spacing: 0.2em; text-transform: uppercase; color: #AAA;
        }
        .search-result-item {
          display: flex; align-items: center; gap: 14px;
          padding: 13px 16px; border-bottom: 1px solid var(--rule2);
          text-decoration: none; transition: background 0.1s;
        }
        .search-result-item:last-child { border-bottom: none; }
        .search-result-item:hover { background: var(--parch); }
        .search-result-cat {
          flex-shrink: 0; font-family: var(--sf); font-size: 7.5px; font-weight: 800;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--teal);
          background: rgba(13,148,136,0.1); padding: 3px 8px; border-radius: 4px;
          min-width: 80px; text-align: center;
        }
        .search-result-title { font-family: var(--pf); font-size: 13px; font-weight: 700; color: var(--ink); flex: 1; line-height: 1.3; }
        .search-result-meta { font-family: var(--sf); font-size: 9px; color: #AAA; flex-shrink: 0; white-space: nowrap; }
        .search-no-results { padding: 32px 20px; text-align: center; font-style: italic; color: #AAA; font-size: 13px; }

        .live-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2); padding: 9px 24px;
          border-radius: 100px; margin-top: 20px;
        }
        .live-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--teal-light); animation: pulse 2s infinite; }
        .live-text { font-family: var(--sf); font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: white; }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(94,234,212,0.5); }
          70%  { box-shadow: 0 0 0 7px rgba(94,234,212,0); }
          100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }

        /* ── MAIN WRAP — fills remaining flex space, pushes footer down ── */
        .main-wrap {
          max-width: 1340px; margin: 0 auto;
          padding: 28px clamp(16px, 4vw, 48px) 56px;
          /* flex:1 not needed here since blog-page-content already has it */
          width: 100%;
        }

        .sh { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .sh-accent { width: 18px; height: 2px; background: var(--teal); flex-shrink: 0; }
        .sh-l { font-family: var(--sf); font-size: 8.5px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.28em; color: #AAA; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        .hero-grid { display: grid; grid-template-columns: 1fr 400px; border: 1px solid var(--rule); background: white; overflow: hidden; }
        @media (max-width: 880px) { .hero-grid { grid-template-columns: 1fr; } .hero-img-col { order: -1; height: 220px !important; border-left: none !important; border-bottom: 1px solid var(--rule) !important; } }
        .hero-txt { padding: clamp(20px, 3vw, 36px); display: flex; flex-direction: column; justify-content: space-between; }
        .hero-img-col { position: relative; overflow: hidden; }
        .hero-img-col img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
        .hero-grid:hover .hero-img-col img { transform: scale(1.04); }

        .section-mt  { margin-top: clamp(16px, 2.5vw, 28px); }
        .section-mt2 { margin-top: clamp(22px, 3.2vw, 40px); }

        .sec-grid { display: grid; grid-template-columns: repeat(4, 1fr); border: 1px solid var(--rule); border-top: none; background: var(--rule); gap: 1px; }
        @media (max-width: 1050px) { .sec-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 580px)  { .sec-grid { grid-template-columns: 1fr; } }

        .story-card { background: white; display: flex; flex-direction: column; text-decoration: none; transition: background 0.15s; }
        .story-card:hover { background: #FAFAF5; }
        .story-img-wrap { position: relative; overflow: hidden; flex-shrink: 0; }
        .story-img-wrap img { display: block; width: 100%; height: 100%; object-fit: cover; transition: transform 0.55s ease; }
        .story-card:hover .story-img-wrap img { transform: scale(1.05); }
        .story-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(15,26,28,0.7) 0%, transparent 55%); }
        .story-img-badge { position: absolute; top: 12px; left: 12px; display: flex; gap: 6px; align-items: center; }
        .story-body { padding: 16px 18px 18px; flex: 1; display: flex; flex-direction: column; }
        .story-title { font-family: var(--pf); font-size: clamp(0.9rem, 1.5vw, 1.05rem); font-weight: 700; line-height: 1.22; color: var(--ink); margin-bottom: 8px; flex: 1; }
        .story-excerpt { font-size: 12px; line-height: 1.68; color: var(--muted); font-style: italic; margin-bottom: 14px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .story-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 11px; border-top: 1px solid var(--rule2); font-family: var(--sf); font-size: 8.5px; }
        .story-foot-meta { color: #AAA; letter-spacing: 0.05em; text-transform: uppercase; }
        .story-foot-arrow { display: flex; align-items: center; gap: 3px; font-weight: 800; transition: gap 0.15s; }
        .story-card:hover .story-foot-arrow { gap: 6px; }

        .badge { font-family: var(--sf); font-size: 7.5px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; padding: 3px 8px; display: inline-block; }
        .badge-cat { color: white; }
        .badge-tag-trending    { background: #FEFCE8; color: #92400E; border: 1px solid rgba(146,64,14,.2); }
        .badge-tag-new         { background: #EFF6FF; color: #1D4ED8; border: 1px solid rgba(29,78,216,.2); }
        .badge-tag-global      { background: #EFF6FF; color: #1D4ED8; border: 1px solid rgba(37,99,235,.25); }
        .badge-tag-cover       { background: #FEF3C7; color: #92400E; border: 1px solid rgba(180,83,9,.25); }
        .badge-tag-hightraffic { background: #F0FDF4; color: #15803D; border: 1px solid rgba(21,128,61,.2); }

        .global-banner { background: var(--ink); padding: 20px 28px; display: flex; align-items: center; gap: 18px; border-top: 3px solid var(--blue); }
        .global-banner-icon { width: 38px; height: 38px; background: var(--blue); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 17px; flex-shrink: 0; }
        .global-banner-label { font-family: var(--sf); font-size: 8px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase; color: #7BA4F0; margin-bottom: 3px; }
        .global-banner-text { font-size: 13px; color: rgba(255,255,255,0.68); font-style: italic; }
        .global-banner-btn { margin-left: auto; flex-shrink: 0; display: inline-flex; align-items: center; gap: 6px; background: var(--blue); color: white; padding: 9px 20px; border-radius: 4px; font-family: var(--sf); font-size: 9px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: background 0.15s; white-space: nowrap; }
        .global-banner-btn:hover { background: var(--blue-dark); }
        @media (max-width: 600px) { .global-banner { flex-wrap: wrap; } .global-banner-btn { margin-left: 0; } }

        .hero-grid-flip { display: grid; grid-template-columns: 420px 1fr; border: 1px solid var(--rule); border-top: none; background: white; overflow: hidden; }
        @media (max-width: 880px) { .hero-grid-flip { grid-template-columns: 1fr; } .hero-img-flip { height: 220px !important; border-right: none !important; border-bottom: 1px solid var(--rule) !important; } }
        .hero-img-flip { position: relative; overflow: hidden; border-right: 1px solid var(--rule); }
        .hero-img-flip img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.7s ease; }
        .hero-grid-flip:hover .hero-img-flip img { transform: scale(1.04); }

        .hero-title { font-family: var(--pf); font-size: clamp(1.5rem, 2.8vw, 2.4rem); font-weight: 900; line-height: 1.07; letter-spacing: -0.02em; color: var(--ink); margin-bottom: 12px; }
        .hero-rule-line { width: 32px; height: 2px; margin-bottom: 12px; }
        .hero-subtitle { font-size: clamp(13px, 1.4vw, 15px); line-height: 1.76; color: #5A4A30; margin-bottom: 16px; font-style: italic; }
        .topic-pills { display: flex; flex-wrap: wrap; gap: 5px; margin-bottom: 22px; }
        .topic-pill { font-family: var(--sf); font-size: 8px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: var(--muted); background: var(--parch); border: 1px solid var(--rule2); padding: 3px 9px; }
        .hero-foot { display: flex; align-items: center; justify-content: space-between; padding-top: 18px; border-top: 1px solid var(--rule2); font-family: var(--sf); font-size: 8.5px; }
        .hero-foot-meta { color: #AAA; letter-spacing: 0.06em; text-transform: uppercase; }
        .hero-foot-read { display: flex; align-items: center; gap: 5px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: gap 0.15s; }
        .hero-foot-read:hover { gap: 8px; }

        .two-col { display: grid; grid-template-columns: 1fr 308px; gap: clamp(16px, 2.5vw, 28px); align-items: start; }
        @media (max-width: 980px) { .two-col { grid-template-columns: 1fr; } }

        .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); border: 1px solid var(--rule); background: var(--rule); gap: 1px; }
        @media (max-width: 880px) { .grid-3 { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 520px) { .grid-3 { grid-template-columns: 1fr; } }
        .grid-card { background: white; text-decoration: none; display: flex; flex-direction: column; transition: background 0.15s; }
        .grid-card:hover { background: #FAFAF5; }
        .grid-card-img { position: relative; height: 110px; overflow: hidden; flex-shrink: 0; }
        .grid-card-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s; }
        .grid-card:hover .grid-card-img img { transform: scale(1.06); }
        .grid-card-img-bar { position: absolute; top: 0; left: 0; right: 0; height: 2px; }
        .grid-card-body { padding: 12px 14px 14px; flex: 1; display: flex; flex-direction: column; }
        .grid-card-title { font-family: var(--pf); font-size: 0.88rem; font-weight: 700; line-height: 1.26; color: var(--ink); flex: 1; margin-bottom: 10px; }
        .grid-card-foot { display: flex; justify-content: space-between; align-items: center; padding-top: 9px; border-top: 1px solid var(--rule2); font-family: var(--sf); font-size: 8px; color: #AAA; text-transform: uppercase; letter-spacing: 0.06em; }

        .sidebar-box { border: 1px solid var(--rule); background: white; overflow: hidden; }
        .sidebar-box + .sidebar-box { margin-top: 14px; }
        .sidebar-hd { background: var(--ink); padding: 14px 18px; position: relative; }
        .sidebar-hd::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--teal), var(--teal-light)); }
        .sidebar-hd-title { font-family: var(--pf); font-size: 0.95rem; font-weight: 700; color: white; font-style: italic; }
        .sidebar-hd-sub { font-family: var(--sf); font-size: 7.5px; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(94,234,212,0.45); margin-top: 3px; }
        .op-row { display: flex; align-items: flex-start; gap: 12px; padding: 12px 18px; border-bottom: 1px solid var(--rule2); text-decoration: none; transition: background 0.12s; }
        .op-row:last-child { border-bottom: none; }
        .op-row:hover { background: var(--parch); }
        .op-num { font-family: var(--pf); font-size: 1.1rem; font-weight: 900; color: var(--rule); flex-shrink: 0; width: 26px; padding-top: 1px; line-height: 1; }
        .op-cat { font-family: var(--sf); font-size: 7px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: var(--teal); margin-bottom: 3px; }
        .op-title { font-family: var(--pf); font-size: 0.8rem; font-weight: 700; line-height: 1.3; color: var(--ink); margin-bottom: 3px; }
        .op-date { font-family: var(--sf); font-size: 7.5px; color: #AAA; text-transform: uppercase; letter-spacing: 0.06em; }

        .sidebar-cta { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); padding: 20px 18px; position: relative; overflow: hidden; margin-top: 14px; border: 1px solid var(--rule); }
        .sidebar-cta::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px; background: linear-gradient(90deg, var(--teal), var(--teal-light)); }
        .sidebar-cta-label { font-family: var(--sf); font-size: 7.5px; font-weight: 800; letter-spacing: 0.24em; text-transform: uppercase; color: rgba(94,234,212,0.5); margin-bottom: 7px; }
        .sidebar-cta-title { font-family: var(--pf); font-size: 1rem; font-weight: 700; color: white; line-height: 1.3; margin-bottom: 7px; font-style: italic; }
        .sidebar-cta-body { font-size: 11px; color: rgba(255,255,255,0.38); line-height: 1.6; margin-bottom: 16px; }
        .sidebar-cta-btn { display: flex; align-items: center; justify-content: center; gap: 6px; background: var(--teal); color: white; padding: 10px 14px; font-family: var(--sf); font-size: 9px; font-weight: 800; letter-spacing: 0.12em; text-transform: uppercase; text-decoration: none; border-radius: 4px; transition: background 0.15s; }
        .sidebar-cta-btn:hover { background: var(--teal-dark); }

        .articles-table { border: 1px solid var(--rule); background: white; overflow: hidden; }
        .articles-table-hd { background: var(--ink); padding: 9px 18px; display: grid; grid-template-columns: 1fr 150px 78px 68px; gap: 14px; }
        @media (max-width: 620px) { .articles-table-hd { grid-template-columns: 1fr; } .art-hide { display: none !important; } }
        .articles-table-hd span { font-family: var(--sf); font-size: 7.5px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .art-row { display: grid; grid-template-columns: 1fr 150px 78px 68px; gap: 14px; align-items: center; padding: 12px 18px; border-bottom: 1px solid var(--rule2); text-decoration: none; background: white; transition: background 0.1s, padding-left 0.15s; }
        .art-row:last-child { border-bottom: none; }
        .art-row:hover { background: var(--parch); padding-left: 24px; }
        @media (max-width: 620px) { .art-row { grid-template-columns: 1fr; } }
        .art-title { font-family: var(--pf); font-size: 13px; font-weight: 700; color: var(--ink); line-height: 1.3; }
        .art-cat { font-family: var(--sf); font-size: 8px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--teal); border: 1px solid rgba(13,148,136,.28); padding: 2px 9px; text-align: center; }
        .art-meta { font-family: var(--sf); font-size: 9px; color: #AAA; }

        .ticker { display: flex; flex-wrap: wrap; background: var(--ink); border: 1px solid var(--rule); border-top: none; }
        .ticker-item { flex: 1; min-width: 90px; padding: 16px 20px; text-align: center; border-right: 1px solid rgba(255,255,255,0.06); }
        .ticker-item:last-child { border-right: none; }
        .ticker-val { font-family: var(--pf); font-size: 1.5rem; font-weight: 900; color: white; line-height: 1; margin-bottom: 4px; }
        .ticker-label { font-family: var(--sf); font-size: 7.5px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; color: rgba(255,255,255,.28); }

        .bottom-cta { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); padding: clamp(24px, 4vw, 44px) clamp(20px, 4vw, 52px); margin-top: 36px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; border-top: 3px solid var(--teal); border-radius: 12px; }
        .bottom-cta-label { font-family: var(--sf); font-size: 8px; font-weight: 800; letter-spacing: 0.26em; text-transform: uppercase; color: rgba(94,234,212,0.5); margin-bottom: 7px; }
        .bottom-cta-title { font-family: var(--pf); font-size: clamp(1rem, 2vw, 1.4rem); font-weight: 700; color: white; margin-bottom: 5px; }
        .bottom-cta-sub { font-size: 12px; color: rgba(255,255,255,.35); font-style: italic; }
        .bottom-cta-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 8px; background: var(--teal); color: white; padding: 13px 26px; border-radius: 40px; font-family: var(--sf); font-size: 10px; font-weight: 800; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; transition: background 0.2s, transform 0.15s; }
        .bottom-cta-btn:hover { background: var(--teal-dark); transform: translateY(-2px); }

        .footer-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 28px; padding-top: 28px; border-top: 1px solid var(--rule2); }
        @media (max-width: 680px) { .footer-grid { grid-template-columns: repeat(2, 1fr); } }
        .footer-link-card { padding: 11px 14px; border: 1px solid var(--rule2); background: white; text-decoration: none; border-radius: 6px; transition: border-color 0.15s; }
        .footer-link-card:hover { border-color: var(--teal); }
        .footer-link-title { font-family: var(--sf); font-size: 9.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--ink); margin-bottom: 3px; }
        .footer-link-desc { font-family: var(--sf); font-size: 9.5px; color: #AAA; }
        .footer-note { margin-top: 20px; padding-top: 20px; border-top: 1px solid var(--rule2); font-family: var(--sf); font-size: 8.5px; color: #AAA; line-height: 1.7; }
        .footer-nav-links { margin-top: 12px; display: flex; flex-wrap: wrap; gap: 5px 16px; }
        .footer-nav-links a { font-family: var(--sf); font-size: 8.5px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: #AAA; text-decoration: none; transition: color 0.15s; }
        .footer-nav-links a:hover { color: var(--teal); }

        @keyframes riseIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }
        .ri-0 { animation: riseIn 0.5s 0.00s ease both; }
        .ri-1 { animation: riseIn 0.5s 0.07s ease both; }
        .ri-2 { animation: riseIn 0.5s 0.14s ease both; }
        .ri-3 { animation: riseIn 0.5s 0.21s ease both; }
        .ri-4 { animation: riseIn 0.5s 0.28s ease both; }
        .ri-5 { animation: riseIn 0.5s 0.35s ease both; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb { background: var(--rule); }
      `}</style>

      {/*
        ══════════════════════════════════════════════════════════
        STRUCTURE — mirrors about/page.tsx exactly:

          .blog-page-root          → min-height:100vh, flex column
            <Navbar />             → header (flex-shrink:0, never collapses)
            .blog-page-content     → flex:1 (fills ALL remaining height)
              .blog-hero           → masthead (flex-shrink:0, no overflow:hidden)
              .main-wrap           → article content (fills remaining space in page-content)
        ══════════════════════════════════════════════════════════
      */}
      <div className="blog-page-root">

        {/* Navbar sits as first child of the flex-column root — identical to registry/page.tsx */}
        <Navbar />

        {/* flex:1 — this div fills ALL vertical space below Navbar */}
        <div className="blog-page-content">

          {/* ══ HERO MASTHEAD — no overflow:hidden so search dropdown is visible ══ */}
          <section className="blog-hero" aria-label="The Forge blog masthead">
            <div className="blog-hero-bg" role="presentation" />
            <div className="blog-mast-content ri-0">
              <h1 className="blog-mast-h1">The <em>Forge</em></h1>
              <span className="blog-mast-rule" />
              <p className="blog-mast-tagline">
                Startup analysis, founder stories &amp; strategy<br />for India's &amp; the world's builders — 2026
              </p>

              <div className="search-wrap">
                <div className="search-bar">
                  <Search size={16} className="search-icon" />
                  <input
                    type="text" className="search-input"
                    placeholder="Search articles, topics, startups…"
                    value={searchQ}
                    onChange={e => setSearchQ(e.target.value)}
                    aria-label="Search articles"
                    autoComplete="off"
                  />
                  {searchQ && (
                    <button className="search-clear" onClick={() => setSearchQ("")} aria-label="Clear search">
                      <X size={14} />
                    </button>
                  )}
                </div>
                {showResults && (
                  <div className="search-results" role="listbox">
                    {searchResults.length > 0 ? (
                      <>
                        <div className="search-results-header">
                          {searchResults.length} result{searchResults.length !== 1 ? "s" : ""} for &ldquo;{searchQ}&rdquo;
                        </div>
                        {searchResults.map((post, i) => (
                          <Link key={i} href={post.slug} className="search-result-item" onClick={() => setSearchQ("")}>
                            <span className="search-result-cat">{post.category}</span>
                            <span className="search-result-title">{post.title}</span>
                            <span className="search-result-meta">{post.readTime}</span>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <div className="search-no-results">No articles found for &ldquo;{searchQ}&rdquo;</div>
                    )}
                  </div>
                )}
              </div>

              <div className="live-badge">
                <span className="live-dot" />
                <span className="live-text">Live · {ALL_POSTS.length} Articles · Updated March 2026</span>
              </div>
            </div>
          </section>

          {/* ══ MAIN CONTENT ══ */}
          <main className="main-wrap">

            {/* ── INDIA COVER STORY ── */}
            <section aria-label="India Cover Story" className="ri-1">
              <div className="sh"><div className="sh-accent" /><span className="sh-l">India Edition · Cover Story</span><div className="sh-r" /></div>
              <Link href={HERO_POST.slug} style={{ textDecoration: "none", display: "block" }}>
                <div className="hero-grid">
                  <div className="hero-txt">
                    <div>
                      <div style={{ height: 3, background: `linear-gradient(90deg, var(--teal-dark), ${HERO_POST.accent}, #E8C547)`, marginBottom: 14 }} />
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                        <span className="badge badge-cat" style={{ background: HERO_POST.accent, fontSize: "7.5px", letterSpacing: "0.2em" }}>{HERO_POST.category}</span>
                        <span className="badge badge-tag-cover">{HERO_POST.tag}</span>
                        <span style={{ fontFamily: "system-ui", fontSize: 8.5, color: "#AAA", textTransform: "uppercase", letterSpacing: "0.1em" }}>{HERO_POST.date}</span>
                      </div>
                      <h2 className="hero-title">{HERO_POST.title}</h2>
                      <div className="hero-rule-line" style={{ background: HERO_POST.accent }} />
                      <p className="hero-subtitle">{HERO_POST.subtitle}</p>
                      <div className="topic-pills">{HERO_POST.topics.map(t => <span key={t} className="topic-pill">{t}</span>)}</div>
                    </div>
                    <div className="hero-foot">
                      <span className="hero-foot-meta">{HERO_POST.date} · {HERO_POST.readTime} read</span>
                      <span className="hero-foot-read" style={{ color: HERO_POST.accent }}>Read Report <ArrowUpRight size={12} /></span>
                    </div>
                  </div>
                  <div className="hero-img-col" style={{ minHeight: 320, borderLeft: "1px solid var(--rule)" }}>
                    <img src={HERO_POST.img} alt={HERO_POST.title} />
                  </div>
                </div>
              </Link>
              <div className="sec-grid">
                {SECONDARY_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="story-card" style={{ textDecoration: "none" }}>
                    <div className="story-img-wrap" style={{ height: "clamp(110px,11vw,148px)" }}>
                      <img src={post.img} alt={post.title} loading="lazy" />
                      <div className="story-img-overlay" />
                      <div className="story-img-badge">
                        <span className="badge badge-cat" style={{ background: post.accent, fontSize: "7px", letterSpacing: "0.15em" }}>{post.category}</span>
                        <span className={`badge ${post.tag === "New" ? "badge-tag-new" : post.tag === "Trending" ? "badge-tag-trending" : "badge-tag-hightraffic"}`}>{post.tag}</span>
                      </div>
                    </div>
                    <div className="story-body">
                      <h3 className="story-title">{post.title}</h3>
                      <p className="story-excerpt">{post.excerpt}</p>
                      <div className="story-foot">
                        <span className="story-foot-meta">{post.date}</span>
                        <span className="story-foot-arrow" style={{ color: post.accent }}>{post.readTime} <ArrowRight size={11} /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── GLOBAL EDITION ── */}
            <section aria-label="Global Edition" className="ri-2 section-mt2">
              <div className="global-banner" style={{ borderRadius: "6px 6px 0 0" }}>
                <div className="global-banner-icon">🌍</div>
                <div>
                  <p className="global-banner-label">New · Global Edition — March 2026</p>
                  <p className="global-banner-text">The 10 highest-traffic global startups — OpenAI, Perplexity, Revolut, Canva, Character.AI &amp; more.</p>
                </div>
                <Link href="/blog/top-trending-global-startups-2026" className="global-banner-btn">Read Feature <ArrowRight size={11} /></Link>
              </div>
              <Link href={GLOBAL_HERO_POST.slug} style={{ textDecoration: "none", display: "block" }}>
                <div className="hero-grid-flip">
                  <div className="hero-img-flip">
                    <img src={GLOBAL_HERO_POST.img} alt={GLOBAL_HERO_POST.title} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 50%, rgba(15,26,28,0.5) 100%)" }} />
                  </div>
                  <div className="hero-txt" style={{ borderLeft: "1px solid var(--rule)" }}>
                    <div>
                      <div style={{ height: 3, background: `linear-gradient(90deg, var(--blue-dark), var(--blue), #93C5FD)`, marginBottom: 14 }} />
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                        <span className="badge badge-cat" style={{ background: GLOBAL_HERO_POST.accent, fontSize: "7.5px", letterSpacing: "0.2em" }}>{GLOBAL_HERO_POST.category}</span>
                        <span className="badge badge-tag-global">{GLOBAL_HERO_POST.tag}</span>
                      </div>
                      <h2 className="hero-title">{GLOBAL_HERO_POST.title}</h2>
                      <div className="hero-rule-line" style={{ background: GLOBAL_HERO_POST.accent }} />
                      <p className="hero-subtitle">{GLOBAL_HERO_POST.subtitle}</p>
                      <div className="topic-pills">
                        {GLOBAL_HERO_POST.topics.map(t => (
                          <span key={t} className="topic-pill" style={{ color: "var(--blue-dark)", borderColor: "rgba(37,99,235,0.2)", background: "#EEF2FF" }}>{t}</span>
                        ))}
                      </div>
                    </div>
                    <div className="hero-foot">
                      <span className="hero-foot-meta">{GLOBAL_HERO_POST.date} · {GLOBAL_HERO_POST.readTime} read</span>
                      <span className="hero-foot-read" style={{ color: GLOBAL_HERO_POST.accent }}>Read Report <ArrowUpRight size={12} /></span>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="sec-grid">
                {GLOBAL_SECONDARY_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="story-card" style={{ textDecoration: "none" }}>
                    <div className="story-img-wrap" style={{ height: "clamp(110px,11vw,140px)" }}>
                      <img src={post.img} alt={post.title} loading="lazy" />
                      <div className="story-img-overlay" />
                      <div className="story-img-badge">
                        <span className="badge badge-cat" style={{ background: post.accent, fontSize: "7px", letterSpacing: "0.15em" }}>{post.category}</span>
                        <span className={`badge ${post.tag === "New" ? "badge-tag-new" : post.tag === "Trending" ? "badge-tag-trending" : "badge-tag-hightraffic"}`}>{post.tag}</span>
                      </div>
                    </div>
                    <div className="story-body">
                      <h3 className="story-title" style={{ fontSize: "0.9rem" }}>{post.title}</h3>
                      <p className="story-excerpt">{post.excerpt}</p>
                      <div className="story-foot">
                        <span className="story-foot-meta">{post.date}</span>
                        <span className="story-foot-arrow" style={{ color: post.accent }}>{post.readTime} <ArrowRight size={11} /></span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── MORE STORIES + SIDEBAR ── */}
            <div className="two-col section-mt2 ri-3">
              <div>
                <div className="sh"><div className="sh-accent" /><span className="sh-l">More Stories — {GRID_POSTS.length} Articles</span><div className="sh-r" /></div>
                <div className="grid-3">
                  {GRID_POSTS.map((post, i) => (
                    <Link key={i} href={post.slug} className="grid-card">
                      <div className="grid-card-img">
                        <img src={post.img} alt={post.title} loading="lazy" />
                        <div className="grid-card-img-bar" style={{ background: post.accent }} />
                        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.08)" }} />
                        <div style={{ position: "absolute", bottom: 8, left: 10 }}>
                          <span style={{ fontFamily: "system-ui", fontSize: 7, fontWeight: 800, color: "rgba(255,255,255,0.75)", textTransform: "uppercase", letterSpacing: "0.14em" }}>{post.category}</span>
                        </div>
                      </div>
                      <div className="grid-card-body">
                        <h4 className="grid-card-title">{post.title}</h4>
                        <p style={{ fontFamily: "Georgia, serif", fontSize: 11.5, color: "var(--muted)", fontStyle: "italic", lineHeight: 1.6, marginBottom: 10, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical" as const, overflow: "hidden" }}>{post.excerpt}</p>
                        <div className="grid-card-foot"><span>{post.readTime}</span><span style={{ color: post.accent, fontWeight: 800, fontSize: 11 }}>→</span></div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <aside>
                <div className="sh"><div className="sh-accent" /><span className="sh-l">Opinion &amp; Analysis</span><div className="sh-r" /></div>
                <div className="sidebar-box">
                  <div className="sidebar-hd">
                    <p className="sidebar-hd-title">The UpForge Perspective</p>
                    <p className="sidebar-hd-sub">India &amp; Global · 2026</p>
                  </div>
                  {OPINION_POSTS.map((op, i) => (
                    <Link key={i} href={op.slug} className="op-row">
                      <span className="op-num">{op.num}</span>
                      <div><p className="op-cat">{op.category}</p><p className="op-title">{op.title}</p><span className="op-date">{op.date}</span></div>
                    </Link>
                  ))}
                </div>
                <div className="sidebar-cta">
                  <p className="sidebar-cta-label">✨ Free AI Tool</p>
                  <p className="sidebar-cta-title">Startup Valuation<br /><em style={{ color: "var(--teal-light)" }}>Report — Free</em></p>
                  <p className="sidebar-cta-body">AI-powered analysis benchmarked against 500+ global startups. Takes 3 minutes.</p>
                  <Link href="/report" className="sidebar-cta-btn">Generate Free Report <ArrowRight size={12} /></Link>
                </div>
                <div className="sidebar-cta" style={{ marginTop: 14, borderTop: "3px solid var(--blue)" }}>
                  <p className="sidebar-cta-label" style={{ color: "rgba(147,197,253,0.6)" }}>🌍 Global Registry</p>
                  <p className="sidebar-cta-title">Get your startup<br /><em style={{ color: "#93C5FD" }}>listed + verified</em></p>
                  <p className="sidebar-cta-body">Free UFRN assigned to every approved startup. Trusted by investors and press.</p>
                  <Link href="/registry" className="sidebar-cta-btn" style={{ background: "var(--blue)" }}>Submit to Registry <ArrowRight size={12} /></Link>
                </div>
              </aside>
            </div>

            {/* ── ALL PUBLISHED ARTICLES ── */}
            <section aria-label="All published articles" className="ri-4 section-mt2">
              <div className="sh"><div className="sh-accent" /><span className="sh-l">All Published — {ALL_POSTS.length} Articles · March 2026</span><div className="sh-r" /></div>
              <div className="articles-table">
                <div className="articles-table-hd">
                  <span>Article</span><span className="art-hide">Category</span><span className="art-hide">Published</span><span className="art-hide">Read Time</span>
                </div>
                {ALL_POSTS.map((post, i) => (
                  <Link key={i} href={post.slug} className="art-row">
                    <p className="art-title">{post.title}</p>
                    <span className="art-cat art-hide">{post.category}</span>
                    <span className="art-meta art-hide">{post.date}</span>
                    <span className="art-meta art-hide">{post.readTime}</span>
                  </Link>
                ))}
              </div>
              <div className="ticker">
                {[
                  { v: String(ALL_POSTS.length), l: "Articles Published"  },
                  { v: "650K+",                  l: "Registered Startups" },
                  { v: "125+",                   l: "Indian Unicorns"     },
                  { v: "10",                     l: "Global Founders"     },
                  { v: "$3.44B",                 l: "Q1 2026 Funding"     },
                ].map((s, i) => (
                  <div key={i} className="ticker-item"><p className="ticker-val">{s.v}</p><p className="ticker-label">{s.l}</p></div>
                ))}
              </div>
            </section>

            {/* ── BOTTOM CTA ── */}
            <div className="bottom-cta ri-5">
              <div>
                <p className="bottom-cta-label">UpForge · The Forge · India &amp; Global</p>
                <p className="bottom-cta-title">The world's most-read startup analysis. Free. Forever.</p>
                <p className="bottom-cta-sub">{ALL_POSTS.length} in-depth articles — AI guides, funding playbooks, global founder profiles, and ecosystem reports.</p>
              </div>
              <Link href="/submit" className="bottom-cta-btn">Submit Your Startup <ArrowRight size={13} /></Link>
            </div>

            {/* ── FOOTER ── */}
            <footer>
              <div className="footer-grid">
                {[
                  { l: "Global Registry →",       h: "https://www.upforge.org/registry",       desc: "Full verified database"       },
                  { l: "Indian Unicorns 2026 →",  h: "/blog/top-indian-unicorns-2026",          desc: "All 125 unicorns profiled"    },
                  { l: "Top AI Startups 2026 →",  h: "/blog/top-ai-startups-india-2026",        desc: "Sarvam, Krutrim & more"       },
                  { l: "Global Startups 2026 →",  h: "/blog/top-trending-global-startups-2026", desc: "OpenAI, Perplexity, Revolut…" },
                ].map(lnk => (
                  <Link key={lnk.h} href={lnk.h} className="footer-link-card">
                    <p className="footer-link-title">{lnk.l}</p>
                    <p className="footer-link-desc">{lnk.desc}</p>
                  </Link>
                ))}
              </div>
              <p className="footer-note">
                * Article data sourced from Inc42, Forbes India, TechCrunch, Crunchbase, Tracxn, and company announcements as of March 2026.
                UpForge is an independent registry — no paid placements, no sponsored rankings.
              </p>
              <nav className="footer-nav-links" aria-label="Footer navigation">
                {[
                  ["The Founder Chronicle",       "/"],
                  ["Global Registry",             "https://www.upforge.org/registry"],
                  ["Indian Unicorns 2026",        "/blog/top-indian-unicorns-2026"],
                  ["Top Global Startups 2026",    "/blog/top-trending-global-startups-2026"],
                  ["Startup Funding Guide",       "/blog/how-to-get-startup-funding-india-2026"],
                  ["Best AI Tools 2026",          "/blog/best-ai-tools-for-business-2026"],
                  ["Best Language Learning Apps", "/blog/best-language-learning-apps-2026"],
                  ["Ramp vs Brex 2026",           "/blog/ramp-vs-brex-corporate-card-comparison-2026"],
                  ["Free Valuation Tool",         "/report"],
                  ["Submit Startup",              "/submit"],
                ].map(([l, h]) => (
                  <Link key={h} href={h}>{l}</Link>
                ))}
              </nav>
            </footer>

          </main>
        </div>{/* end blog-page-content */}
      </div>{/* end blog-page-root */}
    </>
  )
}
