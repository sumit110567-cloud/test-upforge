// app/about/page.tsx — GLOBAL AUTHORITY EDITORIAL v4
// Cormorant Garamond + Libre Baskerville + DM Mono
// Full Schema.org | Global SEO | Ink-on-Parchment magazine aesthetic

import { createClient } from "@/lib/supabase/server"
import Link from "next/link"
import type { Metadata } from "next"
import { Shield, Users, TrendingUp, Award, BadgeCheck, Globe, ArrowRight, Sparkles, Calculator, ArrowUpRight } from "lucide-react"

export const revalidate = 600

export const metadata: Metadata = {
  title: "About UpForge — The World's Independent Startup Registry | UpForge",
  description:
    "UpForge is the world's first open, independent startup registry. Not a media platform, not a marketplace — a permanent, verified public record of serious builders across 50+ countries. Free forever.",
  keywords: [
    "about UpForge", "global startup registry mission", "independent startup verification",
    "UFRN registry about", "startup registry India", "global startup database", "startup proof of existence",
    "UpForge editorial team", "startup credibility platform", "verified startup identity worldwide",
    "startup registry free", "open startup database global", "UpForge founders",
  ],
  alternates: {
    canonical: "https://www.upforge.org/about",
    languages: { "en": "https://www.upforge.org/about", "en-IN": "https://www.upforge.in/about", "x-default": "https://www.upforge.org/about" },
  },
  openGraph: {
    title: "About UpForge — The World's Independent Startup Registry",
    description: "Open, verified, permanent. UpForge is the independent global registry for startups. Every listing manually reviewed. Every startup gets a UFRN. Free forever.",
    url: "https://www.upforge.org/about",
    siteName: "UpForge Global Registry",
    images: [{ url: "https://www.upforge.in/og/about.png", width: 1200, height: 630 }],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "About UpForge — Global Independent Startup Registry",
    description: "The world's open, verified startup registry. Free forever. Trusted by founders, investors, and researchers worldwide.",
    images: ["https://www.upforge.in/og/about.png"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
}

const FAQ_ITEMS = [
  { q: "What is UpForge?", a: "UpForge is the world's independent startup registry — a free, structured, and permanently accessible public record of verified startups across 50+ countries and 30+ sectors." },
  { q: "Is UpForge free for founders?", a: "Yes. Listing your startup on UpForge is completely free. We believe every serious builder deserves institutional-grade digital credibility at zero cost." },
  { q: "How does UpForge verify startups?", a: "Every submission is manually reviewed by our editorial team for legitimacy, active operations, founder identity, and accurate data before receiving a UFRN." },
  { q: "What is UFRN?", a: "UFRN (UpForge Registry Number) is a unique, permanent identifier assigned to every approved startup. Format: UF-2026-IND-00001. Use it on LinkedIn, investor decks, and press kits." },
  { q: "Is UpForge a media company?", a: "No. UpForge is neither a media outlet nor an accelerator. We are an independent, neutral registry — no paid rankings, no sponsored placements, ever." },
  { q: "Who can use UpForge?", a: "Founders use UpForge to build a verified digital paper trail. Investors use it to discover startups. Press use it to cite reliable startup data. Researchers use it for due diligence." },
]

const TRUST_QUOTES = [
  { quote: "Every serious startup needs a permanent, verifiable record. UpForge fills that gap for the global ecosystem.", by: "Independent Founder · Singapore", accent: "#0A7C6F" },
  { quote: "We used UpForge to cite startup data in our due diligence report. Clean, structured, globally trustworthy.", by: "Early-Stage Investor · London", accent: "#B8902A" },
  { quote: "Listed our startup before our seed round. Three investors found us through UpForge directly.", by: "Founder, Series A · Bangalore", accent: "#8B1A1A" },
]

const PROMISE_ITEMS = [
  { icon: BadgeCheck, label: "Manually Verified", desc: "Every profile reviewed before listing", color: "#0A7C6F" },
  { icon: Shield, label: "No Paid Rankings", desc: "Zero sponsored placements, ever", color: "#2563EB" },
  { icon: Globe, label: "Permanently Indexed", desc: "Public, structured, always accessible", color: "#7C3AED" },
  { icon: Sparkles, label: "AI-Powered Analysis", desc: "Growth insights for every listing", color: "#B8902A" },
  { icon: Calculator, label: "Free for Founders", desc: "Listing, tools, and reports — always", color: "#8B1A1A" },
]

const PRINCIPLES = [
  { icon: Users, title: "Built for Builders", desc: "Every listed startup represents independent execution — no accelerator required, no VC needed to get listed." },
  { icon: Shield, title: "Structured Credibility", desc: "Profiles are institutional records, not social media posts. Data-first, editorial-grade, permanently accessible." },
  { icon: TrendingUp, title: "Independent First", desc: "We spotlight founders before the headlines do. UpForge is where a startup's story begins." },
  { icon: Award, title: "Long-Term Vision", desc: "Trust, quality, and permanence over traffic and virality. Built to last decades, not quarters." },
]

const MILESTONES = [
  { year: "2016", event: "Startup India launched — 10,000 registered startups" },
  { year: "2019", event: "India crosses 50,000 DPIIT-recognized startups" },
  { year: "2021", event: "Record $42B funding — India's breakout year" },
  { year: "2023", event: "100+ unicorns — 3rd largest ecosystem globally" },
  { year: "2025", event: "72,000+ active startups — AI-led second wave" },
  { year: "2026", event: "UpForge becomes the world's open startup registry" },
]

export default async function AboutPage() {
  const supabase = await createClient()
  const { count: totalStartups } = await supabase.from("startups").select("*", { count: "exact", head: true })
  const { count: startupsWithReports } = await supabase.from("startups").select("*", { count: "exact", head: true }).eq("has_report", true)
  const { data: industries } = await supabase.from("startups").select("industry").not("industry", "is", null)
  const uniqueIndustries = industries ? new Set(industries.map((i: any) => i.industry)).size : 0

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.upforge.org/#organization",
        name: "UpForge",
        url: "https://www.upforge.org",
        logo: "https://www.upforge.in/logo.jpg",
        description: "The world's first open, independent, verified global startup registry. Creator of the UFRN standard. Trusted by founders, investors, and researchers across 50+ countries.",
        foundingDate: "2024",
        areaServed: "Worldwide",
        sameAs: ["https://www.upforge.in", "https://twitter.com/upforge_in", "https://www.linkedin.com/company/upforge-india"],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "UpForge", item: "https://www.upforge.org/" },
          { "@type": "ListItem", position: 2, name: "About", item: "https://www.upforge.org/about" },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: FAQ_ITEMS.map(faq => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --ink:       #0D0D0D;
          --ink-2:     #1C1C1C;
          --parch:     #F9F6F0;
          --parch-2:   #F2EDE3;
          --parch-3:   #E8E1D4;
          --teal:      #0A7C6F;
          --teal-lt:   #12A093;
          --teal-pale: #E6F4F2;
          --gold:      #B8902A;
          --gold-lt:   #D4A94A;
          --gold-pale: #FDF8EC;
          --rule:      #D4CEC4;
          --rule-2:    #E0DAD0;
          --muted:     #6B6258;
          --red-acc:   #8B1A1A;
          --white:     #FEFEFE;
        }

        .ab-root { min-height: 100vh; background: var(--parch); font-family: 'Libre Baskerville', Georgia, serif; color: var(--ink); }

        @keyframes riseIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .ri-0 { animation: riseIn 0.55s 0.00s ease both; }
        .ri-1 { animation: riseIn 0.55s 0.10s ease both; }
        .ri-2 { animation: riseIn 0.55s 0.20s ease both; }
        .ri-3 { animation: riseIn 0.55s 0.30s ease both; }

        /* ── HERO ── */
        .ab-hero {
          position: relative;
          background: var(--ink-2);
          overflow: hidden;
          border-bottom: 3px solid var(--teal);
        }
        .ab-hero::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--red-acc) 0%, var(--gold) 33%, var(--teal) 66%, var(--red-acc) 100%);
          z-index: 3;
        }
        .ab-hero-texture {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            radial-gradient(ellipse 70% 50% at 30% 60%, rgba(10,124,111,0.1) 0%, transparent 70%),
            radial-gradient(ellipse 50% 70% at 80% 30%, rgba(184,144,42,0.06) 0%, transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.01) 48px, rgba(255,255,255,0.01) 49px),
            repeating-linear-gradient(90deg, transparent, transparent 96px, rgba(255,255,255,0.007) 96px, rgba(255,255,255,0.007) 97px);
        }
        .ab-hero-content {
          position: relative; z-index: 10;
          max-width: 1300px; margin: 0 auto;
          padding: 100px 32px 72px;
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .ab-hero-content { grid-template-columns: 1fr; gap: 36px; padding: 120px 24px 56px; }
          .ab-hero-right { order: -1; }
        }
        .ab-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 9px;
          text-transform: uppercase; letter-spacing: 0.25em;
          color: rgba(255,255,255,0.4); margin-bottom: 18px;
        }
        .ab-eyebrow a { color: rgba(255,255,255,0.4); text-decoration: none; transition: color 0.2s; }
        .ab-eyebrow a:hover { color: rgba(255,255,255,0.7); }
        .ab-eyebrow-sep { color: rgba(255,255,255,0.2); }
        .ab-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(44px, 5.5vw, 72px);
          font-weight: 700; color: var(--white);
          line-height: 1.05; letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .ab-h1-sub {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(18px, 2.5vw, 28px);
          font-weight: 600; font-style: italic;
          color: var(--gold-lt); margin-bottom: 20px;
        }
        .ab-rule {
          display: block; width: 180px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--teal-lt), var(--gold-lt), var(--teal-lt), transparent);
          margin-bottom: 22px;
        }
        .ab-tagline {
          font-family: 'Libre Baskerville', serif;
          font-size: 15px; font-style: italic;
          color: rgba(255,255,255,0.7);
          line-height: 1.75; margin-bottom: 28px; max-width: 500px;
        }
        .ab-live {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.08); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.14); padding: 10px 24px;
        }
        .ab-live-dot { width: 7px; height: 7px; border-radius: 50%; background: #22c55e; animation: pulse-green 2s infinite; }
        @keyframes pulse-green { 0%,100% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } }
        .ab-live-text { font-family: 'DM Mono', monospace; font-size: 10px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--white); }
        .ab-hero-right { display: flex; flex-direction: column; gap: 1px; }
        .ab-stat-block {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px; border-bottom: none;
        }
        .ab-stat-block:last-child { border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ab-stat-val { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 700; color: var(--white); line-height: 1; margin-bottom: 4px; }
        .ab-stat-lbl { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.35); }

        /* ── MAIN ── */
        .ab-main { max-width: 1300px; margin: 0 auto; padding: 0 32px 72px; }
        @media (max-width: 768px) { .ab-main { padding: 0 16px 56px; } }
        .ab-section { padding: 48px 0; border-bottom: 1px solid var(--rule-2); }
        .ab-section:last-child { border-bottom: none; }
        .ab-sh { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .ab-sh-lbl { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.3em; color: var(--rule); white-space: nowrap; }
        .ab-sh-line { flex: 1; height: 1px; background: var(--rule-2); }
        .ab-sh-mark { color: var(--teal); font-size: 10px; flex-shrink: 0; }

        /* ── PROMISE GRID ── */
        .ab-promise {
          display: grid; grid-template-columns: repeat(5, 1fr);
          border: 1px solid var(--rule-2); background: var(--rule-2); gap: 1px;
        }
        @media (max-width: 900px) { .ab-promise { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 560px) { .ab-promise { grid-template-columns: 1fr 1fr; } }
        .ab-promise-cell { background: var(--white); padding: 24px 20px; transition: background 0.2s; display: flex; flex-direction: column; gap: 10px; }
        .ab-promise-cell:hover { background: var(--parch-2); }
        .ab-promise-icon { width: 36px; height: 36px; background: var(--parch-2); display: flex; align-items: center; justify-content: center; transition: background 0.2s; }
        .ab-promise-cell:hover .ab-promise-icon { background: var(--ink-2); }
        .ab-promise-cell:hover .ab-promise-icon svg { color: var(--gold-lt) !important; }
        .ab-promise-icon svg { transition: color 0.2s; }
        .ab-promise-lbl { font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--ink); }
        .ab-promise-desc { font-size: 11.5px; color: var(--muted); font-style: italic; line-height: 1.55; }

        /* ── TRUST QUOTES ── */
        .ab-trust-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 768px) { .ab-trust-grid { grid-template-columns: 1fr; } }
        .ab-trust-card { background: var(--white); padding: 28px 24px; display: flex; flex-direction: column; gap: 16px; transition: background 0.2s; }
        .ab-trust-card:hover { background: var(--parch-2); }
        .ab-trust-accent { display: flex; align-items: center; gap: 12px; }
        .ab-trust-mark { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .ab-trust-line { height: 1px; flex: 1; }
        .ab-trust-q { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: clamp(13px, 1.3vw, 15px); color: var(--ink); line-height: 1.75; flex: 1; }
        .ab-trust-by { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--rule); padding-top: 12px; border-top: 1px solid var(--rule-2); }

        /* ── WHY GRID ── */
        .ab-why { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 860px) { .ab-why { grid-template-columns: 1fr; } }
        .ab-why-col { background: var(--white); padding: 36px 32px; }
        @media (max-width: 768px) { .ab-why-col { padding: 24px 20px; } }
        .ab-why-img { position: relative; overflow: hidden; margin-bottom: 24px; height: clamp(160px, 22vw, 220px); }
        .ab-why-img img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; filter: sepia(10%) contrast(108%); transition: transform 0.5s; }
        .ab-why-img:hover img { transform: scale(1.03); }
        .ab-why-img-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,13,13,0.65) 0%, transparent 55%); }
        .ab-why-img-tag {
          position: absolute; bottom: 12px; left: 12px;
          font-family: 'DM Mono', monospace; font-size: 7px;
          text-transform: uppercase; letter-spacing: 0.2em;
          color: var(--white); background: rgba(0,0,0,0.5); padding: 3px 10px;
        }
        .ab-why-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(18px, 2.2vw, 24px); font-weight: 700; color: var(--ink); line-height: 1.25; margin-bottom: 20px; }
        .ab-why-row { display: flex; align-items: flex-start; gap: 14px; padding: 13px 0; border-bottom: 1px solid var(--rule-2); }
        .ab-why-row:last-child { border-bottom: none; }
        .ab-why-num { width: 22px; height: 22px; flex-shrink: 0; background: var(--ink); color: var(--white); font-family: 'DM Mono', monospace; font-size: 8.5px; font-weight: 500; display: flex; align-items: center; justify-content: center; margin-top: 1px; }
        .ab-why-point { font-size: 13px; font-weight: 700; color: var(--ink); line-height: 1.4; margin-bottom: 2px; }
        .ab-why-data { font-family: 'DM Mono', monospace; font-size: 9.5px; color: var(--rule); }
        .ab-ans-feat { display: flex; align-items: flex-start; gap: 12px; padding: 11px 0; border-bottom: 1px solid var(--rule-2); }
        .ab-ans-feat:last-child { border-bottom: none; }
        .ab-ans-feat-icon { width: 20px; height: 20px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .ab-ans-feat-text { font-size: 12.5px; color: var(--muted); font-style: italic; line-height: 1.55; }

        /* ── PRINCIPLES ── */
        .ab-principles { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 768px) { .ab-principles { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 480px) { .ab-principles { grid-template-columns: 1fr; } }
        .ab-principle-cell { background: var(--white); padding: 28px 24px; transition: background 0.2s; }
        .ab-principle-cell:hover { background: var(--parch-2); }
        .ab-principle-icon { width: 38px; height: 38px; background: var(--parch-2); display: flex; align-items: center; justify-content: center; margin-bottom: 16px; transition: background 0.2s; }
        .ab-principle-cell:hover .ab-principle-icon { background: var(--ink-2); }
        .ab-principle-cell:hover .ab-principle-icon svg { color: var(--gold-lt) !important; }
        .ab-principle-icon svg { transition: color 0.2s; }
        .ab-principle-h { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .ab-principle-p { font-size: 12px; color: var(--muted); font-style: italic; line-height: 1.72; }

        /* ── MILESTONES ── */
        .ab-milestones { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 640px) { .ab-milestones { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 400px) { .ab-milestones { grid-template-columns: 1fr; } }
        .ab-ms-cell { background: var(--white); padding: 22px 20px; transition: background 0.2s; }
        .ab-ms-cell:hover { background: var(--parch-2); }
        .ab-ms-cell.dark { background: var(--ink-2); }
        .ab-ms-year { font-family: 'Cormorant Garamond', serif; font-size: 36px; font-weight: 700; line-height: 1; margin-bottom: 8px; color: var(--ink); }
        .ab-ms-cell.dark .ab-ms-year { color: var(--gold-lt); }
        .ab-ms-event { font-size: 12px; color: var(--muted); font-style: italic; line-height: 1.65; }
        .ab-ms-cell.dark .ab-ms-event { color: rgba(255,255,255,0.5); }

        /* ── AUDIENCE ── */
        .ab-audience { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 640px) { .ab-audience { grid-template-columns: 1fr; } }
        .ab-aud-cell { background: var(--white); padding: 30px 26px; }
        .ab-aud-cell.dark { background: var(--ink-2); }
        .ab-aud-ey { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.16em; color: var(--rule); margin-bottom: 8px; }
        .ab-aud-cell.dark .ab-aud-ey { color: rgba(10,160,147,0.7); }
        .ab-aud-h { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 700; color: var(--ink); margin-bottom: 10px; line-height: 1.2; }
        .ab-aud-cell.dark .ab-aud-h { color: var(--white); }
        .ab-aud-p { font-size: 12.5px; color: var(--muted); font-style: italic; line-height: 1.7; margin-bottom: 16px; }
        .ab-aud-cell.dark .ab-aud-p { color: rgba(255,255,255,0.45); }
        .ab-aud-link { display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; color: var(--ink); text-decoration: none; transition: opacity 0.2s; }
        .ab-aud-cell.dark .ab-aud-link { color: var(--gold-lt); }
        .ab-aud-link:hover { opacity: 0.6; }

        /* ── FAQ ── */
        .ab-faq { border: 1px solid var(--rule-2); background: var(--white); }
        .ab-faq-item { border-bottom: 1px solid var(--rule-2); padding: 0 28px; }
        .ab-faq-item:last-child { border-bottom: none; }
        .ab-faq-summary { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 18px 0; cursor: pointer; }
        .ab-faq-q { font-family: 'Libre Baskerville', serif; font-size: 14px; font-style: italic; color: var(--muted); line-height: 1.4; }
        .ab-faq-chevron { flex-shrink: 0; transition: transform 0.22s; }
        details[open] .ab-faq-chevron { transform: rotate(180deg); }
        .ab-faq-a { padding-bottom: 18px; font-size: 13px; color: var(--muted); font-style: italic; line-height: 1.85; }
        @media (max-width: 640px) { .ab-faq-item { padding: 0 16px; } }

        /* ── QUICK LINKS ── */
        .ab-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        @media (max-width: 768px) { .ab-links { grid-template-columns: repeat(2, 1fr); } }
        .ab-link-card { padding: 16px; border: 1px solid var(--rule-2); background: var(--white); text-decoration: none; transition: all 0.2s; }
        .ab-link-card:hover { border-color: var(--teal); transform: translateY(-2px); }
        .ab-link-title { font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
        .ab-link-desc { font-size: 10px; color: var(--rule); font-family: 'DM Mono', monospace; }

        /* ── CTA ── */
        .ab-cta {
          background: var(--ink-2); padding: 44px 48px;
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: space-between; gap: 28px;
          margin-top: 56px; border-left: 3px solid var(--teal);
        }
        @media (max-width: 640px) { .ab-cta { padding: 28px 22px; } }
        .ab-cta-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.28em; color: rgba(10,160,147,0.7); margin-bottom: 10px; }
        .ab-cta-h { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: var(--white); margin-bottom: 6px; line-height: 1.2; }
        .ab-cta-p { font-size: 12px; color: rgba(255,255,255,0.4); font-style: italic; }
        .ab-cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--teal); color: var(--white); padding: 14px 28px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; transition: all 0.2s; flex-shrink: 0; }
        .ab-cta-btn:hover { background: var(--teal-lt); transform: translateX(2px); }

        /* ── FOOTER ── */
        .ab-footer { margin-top: 32px; padding-top: 24px; border-top: 1px solid var(--rule-2); }
        .ab-footer-note { font-family: 'DM Mono', monospace; font-size: 8.5px; color: var(--rule); line-height: 1.7; margin-bottom: 14px; }
        .ab-footer-nav { display: flex; flex-wrap: wrap; gap: 16px 24px; list-style: none; padding: 0; margin: 0; }
        .ab-footer-nav a { font-family: 'DM Mono', monospace; font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.14em; color: var(--rule); text-decoration: none; transition: color 0.18s; }
        .ab-footer-nav a:hover { color: var(--ink); }

        @media (max-width: 768px) { .ab-hero-content { padding: 120px 20px 56px; } .ab-tagline br { display: none; } }
        @media (max-width: 480px) { .ab-h1 { font-size: 38px; } .ab-cta { border-radius: 0; } }
      `}</style>

      <div className="ab-root">

        {/* ── HERO ── */}
        <section className="ab-hero ri-0" aria-label="About UpForge">
          <div className="ab-hero-texture" role="presentation" />
          <div className="ab-hero-content">
            <div>
              <div className="ab-eyebrow">
                <a href="/">UpForge</a>
                <span className="ab-eyebrow-sep">›</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>About</span>
              </div>
              <h1 className="ab-h1">About UpForge</h1>
              <p className="ab-h1-sub">The World's Independent Startup Registry</p>
              <span className="ab-rule" />
              <p className="ab-tagline">
                Not a media platform. Not a marketplace.<br />
                A permanent, verified public record of serious builders — across 50+ countries.
              </p>
              <div className="ab-live">
                <span className="ab-live-dot" />
                <span className="ab-live-text">Live · {(totalStartups || 0).toLocaleString()}+ Verified Profiles</span>
              </div>
            </div>
            <div className="ab-hero-right">
              {[
                { v: `${(totalStartups || 0).toLocaleString()}+`, l: "Verified Profiles" },
                { v: `${(startupsWithReports || 30)}+`, l: "Reports Generated" },
                { v: `${uniqueIndustries || 30}+`, l: "Sectors Covered" },
                { v: "Free", l: "Always & Forever" },
              ].map((s, i) => (
                <div key={i} className="ab-stat-block">
                  <div className="ab-stat-val">{s.v}</div>
                  <div className="ab-stat-lbl">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── MAIN ── */}
        <main className="ab-main ri-1">

          {/* Promise Strip */}
          <section className="ab-section">
            <div className="ab-sh">
              <span className="ab-sh-mark">◆</span>
              <span className="ab-sh-lbl">What We Stand For</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-promise">
              {PROMISE_ITEMS.map((item, i) => (
                <div key={i} className="ab-promise-cell">
                  <div className="ab-promise-icon">
                    <item.icon style={{ width: 15, height: 15, color: item.color }} />
                  </div>
                  <div>
                    <p className="ab-promise-lbl">{item.label}</p>
                    <p className="ab-promise-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Trust Quotes */}
          <section className="ab-section ri-2" aria-label="What people say">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Trusted by Founders, Investors & Press</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-trust-grid">
              {TRUST_QUOTES.map((tq, i) => (
                <div key={i} className="ab-trust-card">
                  <div className="ab-trust-accent">
                    <div className="ab-trust-mark" style={{ background: tq.accent }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 900, color: "white", lineHeight: 1, marginTop: -2 }} aria-hidden="true">"</span>
                    </div>
                    <div className="ab-trust-line" style={{ background: tq.accent }} />
                  </div>
                  <p className="ab-trust-q">"{tq.quote}"</p>
                  <p className="ab-trust-by">— {tq.by}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why UpForge Exists */}
          <section className="ab-section" aria-label="Why UpForge exists">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Why UpForge Exists</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-why">
              <div className="ab-why-col">
                <div className="ab-why-img">
                  <img src="https://media.licdn.com/dms/image/v2/D5612AQHvdNFPlgO8mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726469383648?e=2147483647&v=beta&t=TOuXsxGGTTfnFrJ16aAHJdDZwFLP2fjF5u-Cutu1q68" alt="The fragmented startup data problem" loading="lazy" />
                  <div className="ab-why-img-overlay" />
                  <span className="ab-why-img-tag" style={{ background: "rgba(139,26,26,0.7)" }}>The Problem</span>
                </div>
                <h2 className="ab-why-h">Startup data was fragmented, unverified, and inaccessible — globally.</h2>
                <div>
                  {[
                    { point: "Most startups have zero structured global digital presence", data: "Less than 10% appear on verified databases" },
                    { point: "Investors lose weeks verifying basic startup information", data: "Avg 3–7 days per basic due diligence task" },
                    { point: "Founders lack institutional-grade digital credibility early on", data: "Most rely only on LinkedIn and AngelList" },
                    { point: "Global startup data is fragmented across 500+ sources", data: "No single trusted public registry existed" },
                  ].map((item, i) => (
                    <div key={i} className="ab-why-row">
                      <div className="ab-why-num">{i + 1}</div>
                      <div>
                        <p className="ab-why-point">{item.point}</p>
                        <p className="ab-why-data">{item.data}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="ab-why-col">
                <div className="ab-why-img">
                  <img src="https://images.yourstory.com/cs/2/ab6020f0259611ee840c6712417aa5cf/What-is-Startup-India-Showcase-11-1703785002234.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75" alt="UpForge — the answer to the startup registry gap" loading="lazy" />
                  <div className="ab-why-img-overlay" />
                  <span className="ab-why-img-tag" style={{ background: "rgba(10,124,111,0.75)" }}>Our Answer</span>
                </div>
                <h2 className="ab-why-h">One independent record. Neutral, free, and permanent.</h2>
                <p style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic", lineHeight: 1.82, marginBottom: 20 }}>
                  UpForge is the world's independent startup registry. Not a media outlet, not an accelerator — a neutral, permanently accessible record of verified companies.
                </p>
                <div>
                  {[
                    { icon: BadgeCheck, text: "Every profile manually verified before listing", c: "#0A7C6F" },
                    { icon: Shield, text: "No paid rankings, no sponsored placements", c: "#2563EB" },
                    { icon: Globe, text: "Publicly indexed and permanently accessible", c: "#7C3AED" },
                    { icon: Sparkles, text: "AI-powered growth analysis for every startup", c: "#B8902A" },
                    { icon: Calculator, text: "Free valuation and credibility tools for founders", c: "#8B1A1A" },
                  ].map((item, i) => (
                    <div key={i} className="ab-ans-feat">
                      <div className="ab-ans-feat-icon"><item.icon style={{ width: 13, height: 13, color: item.c }} /></div>
                      <span className="ab-ans-feat-text">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section className="ab-section" aria-label="Core principles">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Core Principles</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-principles">
              {PRINCIPLES.map((item, i) => (
                <div key={i} className="ab-principle-cell">
                  <div className="ab-principle-icon">
                    <item.icon style={{ width: 16, height: 16, color: "var(--muted)" }} />
                  </div>
                  <p className="ab-principle-h">{item.title}</p>
                  <p className="ab-principle-p">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Milestones */}
          <section className="ab-section" aria-label="Ecosystem milestones">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Ecosystem Milestones</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-milestones">
              {MILESTONES.map((m, i) => (
                <div key={i} className={`ab-ms-cell${i === MILESTONES.length - 1 ? " dark" : ""}`}>
                  <p className="ab-ms-year">{m.year}</p>
                  <p className="ab-ms-event">{m.event}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Who We Serve */}
          <section className="ab-section" aria-label="Who uses UpForge">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Who Uses UpForge</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-audience">
              {[
                { type: "Founders", headline: "Build your paper trail", dark: true, href: "/submit", desc: "Get independently verified and permanently indexed in the world's most trusted startup registry." },
                { type: "Investors", headline: "Discover before the crowd", dark: false, href: "/registry", desc: "Search verified startup data across 30+ sectors and 50+ countries before they hit headlines." },
                { type: "Press", headline: "Cite with confidence", dark: false, href: "/registry", desc: "Reliable, manually verified startup data — permanently accessible, always citable." },
              ].map((aud, i) => (
                <div key={i} className={`ab-aud-cell${aud.dark ? " dark" : ""}`}>
                  <p className="ab-aud-ey">{aud.type}</p>
                  <h3 className="ab-aud-h">{aud.headline}</h3>
                  <p className="ab-aud-p">{aud.desc}</p>
                  <Link href={aud.href} className="ab-aud-link">Explore <ArrowRight style={{ width: 11, height: 11 }} /></Link>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="ab-section" aria-label="Frequently asked questions">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Frequently Asked Questions</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-faq">
              {FAQ_ITEMS.map((faq, i) => (
                <details key={i} className="ab-faq-item">
                  <summary className="ab-faq-summary">
                    <span className="ab-faq-q">{faq.q}</span>
                    <svg className="ab-faq-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="var(--rule)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="ab-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* Quick Links */}
          <section className="ab-section" aria-label="Explore UpForge">
            <div className="ab-sh">
              <span className="ab-sh-lbl">Everything on UpForge</span>
              <div className="ab-sh-line" />
            </div>
            <div className="ab-links">
              {[
                { l: "Global Registry", h: "/registry", d: "Verified startups worldwide" },
                { l: "Submit Your Startup", h: "/submit", d: "Get listed free + UFRN" },
                { l: "Verify UFRN", h: "/verify", d: "Instant startup lookup" },
                { l: "Indian Unicorns", h: "/indian-unicorns", d: "All 126 unicorns tracked" },
                { l: "AI Startups", h: "/registry?sector=AI%2FML", d: "India's AI builders" },
                { l: "Fintech Startups", h: "/registry?sector=FinTech", d: "Zerodha, CRED & more" },
                { l: "Founder Chronicle", h: "/", d: "Flagship editorial" },
                { l: "The Forge Blog", h: "/blog", d: "Startup intelligence" },
              ].map(lnk => (
                <Link key={lnk.h + lnk.l} href={lnk.h} className="ab-link-card">
                  <span className="ab-link-title">{lnk.l} <ArrowUpRight style={{ width: 9, height: 9, flexShrink: 0 }} /></span>
                  <span className="ab-link-desc">{lnk.d}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <div className="ab-cta ri-3">
            <div>
              <p className="ab-cta-ey">🚀 UpForge Global Registry</p>
              <p className="ab-cta-h">Your founder story starts with a verified profile.</p>
              <p className="ab-cta-p">Free forever. Trusted by investors across 50+ countries.</p>
            </div>
            <Link href="/submit" className="ab-cta-btn">
              List Free — Get UFRN <ArrowRight size={13} />
            </Link>
          </div>

          {/* Footer */}
          <footer className="ab-footer ri-3">
            <p className="ab-footer-note">
              Registry data sourced from DPIIT, Tracxn, Inc42, Forbes, Hurun, and company announcements as of April 2026.
              UpForge is independent — no paid placements, no sponsored rankings, ever.
            </p>
            <nav aria-label="Footer navigation">
              <ul className="ab-footer-nav">
                {[
                  { l: "Founder Chronicle", h: "/" },
                  { l: "Startup Registry", h: "/registry" },
                  { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                  { l: "The Forge Blog", h: "/blog" },
                  { l: "Verify UFRN", h: "/verify" },
                  { l: "Submit Startup", h: "/submit" },
                ].map(lnk => (
                  <li key={lnk.h}><Link href={lnk.h}>{lnk.l}</Link></li>
                ))}
              </ul>
            </nav>
          </footer>
        </main>
      </div>
    </>
  )
}
