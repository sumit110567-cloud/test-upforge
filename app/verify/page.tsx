// app/verify/page.tsx — UFRN VERIFICATION v3
// Global authority design | Maximum SEO | "what is UFRN" → featured snippet target
// Cormorant Garamond + Libre Baskerville + DM Mono — Ink-on-Parchment magazine

import type { Metadata } from "next"
import { headers } from "next/headers"
import { VerifyClient } from "@/components/verify-client"
import { createReadClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import Link from "next/link"
import { Shield, ArrowRight, Globe, CheckCircle, Search } from "lucide-react"

async function getDomain(): Promise<"org" | "in"> {
  const h = await headers()
  const ctx = h.get("x-upforge-domain")
  if (ctx === "org" || ctx === "in") return ctx as "org" | "in"
  return (h.get("host") ?? "").includes("upforge.org") ? "org" : "in"
}

async function getVerifyStats() {
  try {
    const sb = createReadClient()
    const { count } = await sb.from("startups").select("*", { count: "exact", head: true }).eq("status", "approved")
    return { total: count ?? 5000 }
  } catch {
    return { total: 5000 }
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const canonical = "https://www.upforge.org/verify"
  const ogImage = "https://www.upforge.in/og/ufrn-verify.png"

  return {
    title: "UFRN Lookup — Verify Any Startup Free | UpForge Registry Number",
    description:
      "UFRN (UpForge Registry Number) is the world's standard for startup identity. Format: UF-2026-IND-00013. Instantly verify any startup's UFRN — founders, funding, and official status. Free, instant, no login required.",
    keywords: [
      "what is UFRN", "UFRN meaning", "UFRN full form", "UpForge Registry Number",
      "UFRN startup India", "UFRN format UF-2026-IND", "UFRN lookup free",
      "verify UFRN", "check UFRN online", "UFRN search", "verify startup UFRN",
      "startup UFRN checker", "UFRN verification tool free", "startup registry number",
      "verify startup India free", "startup verification India 2026",
      "startup identity verification global", "startup proof of existence",
      "upforge verify", "upforge UFRN lookup", "upforge startup registry",
      "startup due diligence tool free", "is this startup real", "startup credibility check",
    ],
    alternates: {
      canonical,
      languages: {
        "en": "https://www.upforge.org/verify",
        "en-IN": "https://www.upforge.in/verify",
        "x-default": "https://www.upforge.org/verify",
      },
    },
    openGraph: {
      title: "UFRN Lookup — Verify Any Startup Free | UpForge",
      description: "UFRN = UpForge Registry Number. Enter any UFRN to instantly verify a startup's founders, funding, and official registry status.",
      url: canonical, siteName: "UpForge Global Registry",
      locale: "en", type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge UFRN Verification — Free Startup Registry Lookup" }],
    },
    twitter: {
      card: "summary_large_image", site: "@upforge_in",
      title: "What is UFRN? Verify Any Startup Free — UpForge Official Registry",
      description: "UFRN (UF-YEAR-CC-XXXXX) is the world's verified startup identifier. Instant lookup, no login, global coverage.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  }
}

const makeSchemas = (total: number) => [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.upforge.org/verify#webpage",
    url: "https://www.upforge.org/verify",
    name: "UFRN Lookup — Verify Any Startup Free | UpForge Registry Number",
    description: `UFRN (UpForge Registry Number) is a unique startup identifier. Verify any UFRN in our ${total.toLocaleString()}+ entry global registry. Instant, free, no login.`,
    inLanguage: "en",
    datePublished: "2026-03-01",
    dateModified: new Date().toISOString().split("T")[0],
    publisher: { "@id": "https://www.upforge.org/#organization" },
    speakable: { "@type": "SpeakableSpecification", cssSelector: [".vf-h1", ".vf-tagline", ".vf-ufrn-def"] },
  },
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "UpForge UFRN Verification Tool",
    description: "Free startup UFRN lookup. Enter a UFRN (UpForge Registry Number) to instantly verify any startup's registration, founders, and status. No account needed.",
    url: "https://www.upforge.org/verify",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    author: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is UFRN?", acceptedAnswer: { "@type": "Answer", text: "UFRN stands for UpForge Registry Number — a unique, permanent identifier assigned to verified startups. Format: UF-2026-IND-00013. It serves as official proof of existence and legitimacy." } },
      { "@type": "Question", name: "What does UFRN full form mean?", acceptedAnswer: { "@type": "Answer", text: "UFRN full form is UpForge Registry Number. It is an official startup identifier issued by UpForge after editorial verification of the company's founders, operational status, and business details." } },
      { "@type": "Question", name: "What is the UFRN format?", acceptedAnswer: { "@type": "Answer", text: "The UFRN format is UF-YEAR-COUNTRYCODE-SEQUENCENUMBER. Example: UF-2026-IND-00013 for an Indian startup in 2026. Country codes follow ISO 3166-1 alpha-3 (IND, USA, GBR, SGP, ARE, etc.)." } },
      { "@type": "Question", name: "Is UFRN verification free?", acceptedAnswer: { "@type": "Answer", text: "Yes. UFRN verification is completely free, requires no account or login, and provides instant results with no usage limits." } },
      { "@type": "Question", name: "How do I verify a startup using its UFRN?", acceptedAnswer: { "@type": "Answer", text: "Enter the UFRN (e.g. UF-2026-IND-00013 or just the number 13) in the search box. You'll instantly see the startup's verified name, founders, category, funding stage, and official status." } },
      { "@type": "Question", name: "How do I get a UFRN for my startup?", acceptedAnswer: { "@type": "Answer", text: "Submit your startup free at upforge.in/submit. The UpForge editorial team reviews and assigns a permanent UFRN upon approval. Open to startups worldwide." } },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: "https://www.upforge.org" },
      { "@type": "ListItem", position: 2, name: "Startup Registry", item: "https://www.upforge.org/registry" },
      { "@type": "ListItem", position: 3, name: "Verify UFRN", item: "https://www.upforge.org/verify" },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.upforge.org/#organization",
    name: "UpForge",
    url: "https://www.upforge.org",
    logo: "https://www.upforge.in/logo.jpg",
    description: "UpForge is the global startup registry issuing UFRN (UpForge Registry Numbers) — unique verified identifiers for startups worldwide.",
    sameAs: ["https://www.upforge.in", "https://twitter.com/upforge_in"],
  },
]

export default async function VerifyPage() {
  const [domain, { total }] = await Promise.all([getDomain(), getVerifyStats()])
  const isOrg = domain === "org"

  return (
    <>
      {makeSchemas(total).map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Hidden SEO content — crawlable, minimal visual footprint */}
      <div style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }} aria-hidden="false">
        <h2 className="vf-ufrn-def">What is UFRN?</h2>
        <p>UFRN (UpForge Registry Number) is a unique verified startup identifier. Format: UF-2026-IND-00013. Issued by UpForge after independent editorial review.</p>
        <h2>UFRN Full Form</h2>
        <p>UFRN full form is UpForge Registry Number — assigned after verification of founders, operational status, and business data.</p>
        <h2>How to Verify a Startup UFRN</h2>
        <p>Enter the UFRN in the search box on this page. Results are instant, free, and require no login.</p>
      </div>

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

        .vf-root { min-height: 100vh; background: var(--parch); font-family: 'Libre Baskerville', Georgia, serif; color: var(--ink); }

        @keyframes riseIn { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .ri-0 { animation: riseIn 0.55s 0.00s ease both; }
        .ri-1 { animation: riseIn 0.55s 0.10s ease both; }
        .ri-2 { animation: riseIn 0.55s 0.20s ease both; }

        /* ── HERO ── */
        .vf-hero {
          position: relative;
          background: var(--ink-2);
          overflow: hidden;
          border-bottom: 3px solid var(--teal);
        }
        .vf-hero::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--red-acc) 0%, var(--gold) 33%, var(--teal) 66%, var(--red-acc) 100%);
          z-index: 3;
        }
        .vf-hero-texture {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            radial-gradient(ellipse 60% 70% at 15% 50%, rgba(10,124,111,0.15) 0%, transparent 65%),
            radial-gradient(ellipse 40% 50% at 85% 30%, rgba(184,144,42,0.08) 0%, transparent 55%),
            repeating-linear-gradient(0deg, transparent, transparent 48px, rgba(255,255,255,0.01) 48px, rgba(255,255,255,0.01) 49px),
            repeating-linear-gradient(90deg, transparent, transparent 96px, rgba(255,255,255,0.007) 96px, rgba(255,255,255,0.007) 97px);
        }
        .vf-hero-inner {
          position: relative; z-index: 10;
          max-width: 1300px; margin: 0 auto;
          padding: 100px 32px 72px;
          display: grid;
          grid-template-columns: 1fr 380px;
          gap: 80px;
          align-items: center;
        }
        @media (max-width: 960px) { .vf-hero-inner { grid-template-columns: 1fr; gap: 40px; padding: 120px 24px 56px; } }
        .vf-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 9px;
          text-transform: uppercase; letter-spacing: 0.25em;
          color: rgba(255,255,255,0.4); margin-bottom: 18px;
        }
        .vf-eyebrow a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .vf-eyebrow a:hover { color: rgba(255,255,255,0.65); }
        .vf-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(42px, 5vw, 68px);
          font-weight: 700; color: var(--white);
          line-height: 1.05; letter-spacing: -0.02em;
          margin-bottom: 10px;
        }
        .vf-h1 em { font-style: italic; color: var(--gold-lt); }
        .vf-h1-sub {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(16px, 2vw, 22px);
          font-weight: 600; font-style: italic; color: var(--teal-lt);
          margin-bottom: 20px;
        }
        .vf-rule {
          display: block; width: 160px; height: 1px;
          background: linear-gradient(90deg, transparent, var(--teal-lt), var(--gold-lt), transparent);
          margin-bottom: 22px;
        }
        .vf-tagline {
          font-family: 'Libre Baskerville', serif;
          font-size: 14px; font-style: italic;
          color: rgba(255,255,255,0.7);
          line-height: 1.8; margin-bottom: 28px; max-width: 480px;
        }
        .vf-hero-badges { display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 32px; }
        .vf-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.12);
          padding: 8px 16px; font-family: 'DM Mono', monospace;
          font-size: 9px; text-transform: uppercase; letter-spacing: 0.14em; color: rgba(255,255,255,0.7);
        }
        .vf-badge svg { opacity: 0.6; }
        .vf-hero-right { display: flex; flex-direction: column; gap: 16px; }

        /* ── UFRN ANATOMY CARD ── */
        .vf-anatomy {
          background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.12);
          padding: 28px 24px;
        }
        .vf-anatomy-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.25em; color: rgba(10,160,147,0.7); margin-bottom: 14px; }
        .vf-anatomy-code {
          font-family: 'DM Mono', monospace; font-size: 22px; font-weight: 500;
          color: var(--gold-lt); letter-spacing: 0.03em;
          background: rgba(0,0,0,0.2); padding: 14px 16px;
          text-align: center; margin-bottom: 16px;
          border: 1px solid rgba(184,144,42,0.25);
        }
        .vf-anatomy-parts { display: flex; flex-direction: column; gap: 8px; }
        .vf-anatomy-part { display: flex; align-items: flex-start; gap: 10px; }
        .vf-anatomy-seg { font-family: 'DM Mono', monospace; font-size: 10px; font-weight: 500; color: var(--gold-lt); white-space: nowrap; padding: 2px 8px; background: rgba(184,144,42,0.12); border: 1px solid rgba(184,144,42,0.2); min-width: 60px; text-align: center; flex-shrink: 0; }
        .vf-anatomy-def { font-size: 11px; color: rgba(255,255,255,0.55); font-style: italic; line-height: 1.5; }

        /* ── QUICK VERIFY CTA ── */
        .vf-quick {
          background: var(--teal); padding: 22px 24px;
          text-decoration: none; display: block; transition: background 0.2s;
        }
        .vf-quick:hover { background: var(--teal-lt); }
        .vf-quick-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.6); margin-bottom: 6px; }
        .vf-quick-text { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--white); display: flex; align-items: center; justify-content: space-between; }

        /* ── MAIN ── */
        .vf-main { max-width: 1300px; margin: 0 auto; padding: 0 32px 64px; }
        @media (max-width: 768px) { .vf-main { padding: 0 16px 48px; } }
        .vf-section { padding: 48px 0; border-bottom: 1px solid var(--rule-2); }
        .vf-section:last-child { border-bottom: none; }
        .vf-sh { display: flex; align-items: center; gap: 12px; margin-bottom: 24px; }
        .vf-sh-lbl { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.3em; color: var(--rule); white-space: nowrap; }
        .vf-sh-line { flex: 1; height: 1px; background: var(--rule-2); }
        .vf-sh-mark { color: var(--teal); font-size: 10px; flex-shrink: 0; }

        /* ── WHAT IS UFRN ── */
        .vf-explainer { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--rule-2); border: 1px solid var(--rule-2); }
        @media (max-width: 768px) { .vf-explainer { grid-template-columns: 1fr; } }
        .vf-explainer-col { background: var(--white); padding: 32px 28px; }
        @media (max-width: 768px) { .vf-explainer-col { padding: 22px 20px; } }
        .vf-exp-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.22em; color: var(--teal); margin-bottom: 10px; }
        .vf-exp-h { font-family: 'Cormorant Garamond', serif; font-size: clamp(22px, 2.5vw, 30px); font-weight: 700; color: var(--ink); margin-bottom: 14px; line-height: 1.2; }
        .vf-exp-p { font-size: 13px; color: var(--muted); font-style: italic; line-height: 1.85; margin-bottom: 14px; }
        .vf-exp-def {
          background: var(--teal-pale); border: 1px solid rgba(10,124,111,0.2);
          padding: 16px; margin-bottom: 14px;
        }
        .vf-exp-def-label { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.2em; color: var(--teal); margin-bottom: 6px; }
        .vf-exp-def-text { font-size: 13px; font-style: italic; color: var(--ink); line-height: 1.65; }
        .vf-exp-format {
          font-family: 'DM Mono', monospace; font-size: 16px; font-weight: 500;
          color: var(--gold); background: var(--gold-pale);
          border: 1px solid rgba(184,144,42,0.25); padding: 12px 16px; text-align: center;
          letter-spacing: 0.04em;
        }
        .vf-use-list { list-style: none; padding: 0; margin: 0; }
        .vf-use-item { display: flex; align-items: flex-start; gap: 12px; padding: 12px 0; border-bottom: 1px solid var(--rule-2); }
        .vf-use-item:last-child { border-bottom: none; }
        .vf-use-icon { width: 20px; height: 20px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; margin-top: 2px; }
        .vf-use-text { font-size: 13px; color: var(--muted); font-style: italic; line-height: 1.55; }
        .vf-use-strong { font-style: normal; font-weight: 700; color: var(--ink); display: block; margin-bottom: 2px; font-size: 12.5px; }

        /* ── VERIFY WIDGET CONTAINER ── */
        .vf-widget-wrap {
          background: var(--white); border: 1px solid var(--rule-2);
          padding: 40px 36px;
        }
        @media (max-width: 640px) { .vf-widget-wrap { padding: 24px 18px; } }
        .vf-widget-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.25em; color: var(--teal); margin-bottom: 8px; }
        .vf-widget-h { font-family: 'Cormorant Garamond', serif; font-size: 32px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.15; }
        .vf-widget-p { font-size: 13px; color: var(--muted); font-style: italic; margin-bottom: 28px; line-height: 1.7; }
        .vf-widget-trust { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--rule-2); }
        .vf-trust-pill { display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); background: var(--parch-2); padding: 5px 12px; border: 1px solid var(--rule-2); }
        .vf-trust-pill svg { opacity: 0.6; }

        /* ── FAQ ── */
        .vf-faq { border: 1px solid var(--rule-2); background: var(--white); }
        .vf-faq-item { border-bottom: 1px solid var(--rule-2); padding: 0 28px; }
        .vf-faq-item:last-child { border-bottom: none; }
        .vf-faq-summary { list-style: none; display: flex; align-items: center; justify-content: space-between; gap: 14px; padding: 18px 0; cursor: pointer; }
        .vf-faq-q { font-family: 'Libre Baskerville', serif; font-size: 14px; font-style: italic; color: var(--muted); line-height: 1.4; }
        .vf-faq-chevron { flex-shrink: 0; transition: transform 0.22s; }
        details[open] .vf-faq-chevron { transform: rotate(180deg); }
        .vf-faq-a { padding-bottom: 18px; font-size: 13px; color: var(--muted); font-style: italic; line-height: 1.85; }
        @media (max-width: 640px) { .vf-faq-item { padding: 0 16px; } }

        /* ── FOOTER LINKS ── */
        .vf-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }
        @media (max-width: 768px) { .vf-links { grid-template-columns: repeat(2, 1fr); } }
        .vf-link-card { padding: 14px 16px; border: 1px solid var(--rule-2); background: var(--white); text-decoration: none; transition: all 0.2s; }
        .vf-link-card:hover { border-color: var(--teal); transform: translateY(-2px); }
        .vf-link-title { font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
        .vf-link-desc { font-size: 10px; color: var(--rule); font-family: 'DM Mono', monospace; }

        /* ── CTA ── */
        .vf-cta {
          background: var(--ink-2); padding: 44px 48px;
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: space-between; gap: 28px;
          margin-top: 48px; border-left: 3px solid var(--gold);
        }
        @media (max-width: 640px) { .vf-cta { padding: 26px 20px; } }
        .vf-cta-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.28em; color: rgba(184,144,42,0.7); margin-bottom: 10px; }
        .vf-cta-h { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: var(--white); margin-bottom: 6px; line-height: 1.2; }
        .vf-cta-p { font-size: 12px; color: rgba(255,255,255,0.4); font-style: italic; }
        .vf-cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--teal); color: var(--white); padding: 14px 28px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; text-decoration: none; transition: all 0.2s; flex-shrink: 0; }
        .vf-cta-btn:hover { background: var(--teal-lt); transform: translateX(2px); }

        @media (max-width: 960px) { .vf-hero-inner { padding: 120px 20px 56px; } }
        @media (max-width: 480px) { .vf-h1 { font-size: 36px; } }
      `}</style>

      <div className="vf-root">
        <Navbar />

        {/* ── HERO ── */}
        <section className="vf-hero ri-0" aria-label="UFRN Verification">
          <div className="vf-hero-texture" role="presentation" />
          <div className="vf-hero-inner">
            <div>
              <div className="vf-eyebrow">
                <a href="/">UpForge</a>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                <a href="/registry">Registry</a>
                <span style={{ color: "rgba(255,255,255,0.2)" }}>›</span>
                <span style={{ color: "rgba(255,255,255,0.6)" }}>Verify UFRN</span>
              </div>
              <h1 className="vf-h1">Verify <em>UFRN</em></h1>
              <p className="vf-h1-sub">UpForge Registry Number Lookup</p>
              <span className="vf-rule" />
              <p className="vf-tagline">
                Enter any UFRN to instantly verify a startup's founders, funding, and official registry status.
                Free, permanent, no login required.
              </p>
              <div className="vf-hero-badges">
                <span className="vf-badge"><Shield size={11} /> Manually Verified</span>
                <span className="vf-badge"><Globe size={11} /> Global Coverage</span>
                <span className="vf-badge"><Search size={11} /> Instant Results</span>
                <span className="vf-badge"><CheckCircle size={11} /> Free Forever</span>
              </div>
            </div>
            <div className="vf-hero-right">
              <div className="vf-anatomy">
                <div className="vf-anatomy-ey">UFRN Anatomy</div>
                <div className="vf-anatomy-code">UF-2026-IND-00013</div>
                <div className="vf-anatomy-parts">
                  {[
                    { seg: "UF", def: "UpForge — issuing authority prefix" },
                    { seg: "2026", def: "Year of registration / UFRN issuance" },
                    { seg: "IND", def: "ISO 3166-1 alpha-3 country code (IND = India)" },
                    { seg: "00013", def: "Unique sequential registry number" },
                  ].map((p, i) => (
                    <div key={i} className="vf-anatomy-part">
                      <span className="vf-anatomy-seg">{p.seg}</span>
                      <span className="vf-anatomy-def">{p.def}</span>
                    </div>
                  ))}
                </div>
              </div>
              <a href="https://www.upforge.in/submit" className="vf-quick">
                <div className="vf-quick-ey">Don't have a UFRN yet?</div>
                <div className="vf-quick-text">
                  Get Your UFRN Free
                  <ArrowRight size={16} />
                </div>
              </a>
            </div>
          </div>
        </section>

        <main className="vf-main ri-1">

          {/* ── VERIFY WIDGET ── */}
          <section className="vf-section" aria-label="UFRN Verification Tool">
            <div className="vf-widget-wrap">
              <div className="vf-widget-ey">🔍 Official UFRN Lookup</div>
              <h2 className="vf-widget-h">Verify Any Startup Instantly</h2>
              <p className="vf-widget-p">
                Enter a UFRN (e.g. <strong style={{ fontStyle: "normal" }}>UF-2026-IND-00013</strong>) or just the sequence number (e.g. <strong style={{ fontStyle: "normal" }}>13</strong>).
                Results include verified founders, sector, location, and official status.
              </p>
              <VerifyClient totalCount={total} isOrg={isOrg} />
              <div className="vf-widget-trust">
                {[
                  { icon: <Shield size={10} />, text: "Independently Verified" },
                  { icon: <Globe size={10} />, text: "50+ Countries" },
                  { icon: <CheckCircle size={10} />, text: "No Login Required" },
                  { icon: <Search size={10} />, text: "Instant Results" },
                ].map((p, i) => (
                  <span key={i} className="vf-trust-pill">{p.icon}{p.text}</span>
                ))}
              </div>
            </div>
          </section>

          {/* ── WHAT IS UFRN ── */}
          <section className="vf-section" aria-label="What is UFRN">
            <div className="vf-sh">
              <span className="vf-sh-mark">◆</span>
              <span className="vf-sh-lbl">What is UFRN?</span>
              <div className="vf-sh-line" />
            </div>
            <div className="vf-explainer">
              <div className="vf-explainer-col">
                <div className="vf-exp-ey">Definition</div>
                <h2 className="vf-exp-h">UFRN — UpForge Registry Number</h2>
                <div className="vf-exp-def">
                  <div className="vf-exp-def-label">Official Definition</div>
                  <div className="vf-exp-def-text">
                    A UFRN (UpForge Registry Number) is a unique, permanent identifier assigned to every verified startup in the UpForge Global Registry. It serves as official proof of existence and legitimacy.
                  </div>
                </div>
                <p className="vf-exp-p">
                  Every startup that passes UpForge's manual editorial review receives a permanent UFRN — free, forever. The UFRN is shareable on LinkedIn, investor decks, pitch presentations, and press kits.
                </p>
                <div className="vf-exp-format">UF — YEAR — COUNTRY — SEQUENCE</div>
              </div>
              <div className="vf-explainer-col">
                <div className="vf-exp-ey">Why UFRN Matters</div>
                <h2 className="vf-exp-h">The Global Standard for Startup Identity</h2>
                <ul className="vf-use-list">
                  {[
                    { title: "Proof of Existence", desc: "Investors and press can instantly verify your startup is real and active." },
                    { title: "Investor Decks", desc: "Include your UFRN on pitch decks for instant credibility with institutional investors." },
                    { title: "Press & Research", desc: "Journalists and researchers cite UFRNs as a reliable, primary source for startup data." },
                    { title: "Due Diligence", desc: "Replace lengthy background checks with a single, verified UFRN lookup." },
                    { title: "LinkedIn & Profiles", desc: "Add your UFRN to your founder profile as a badge of verified legitimacy." },
                  ].map((item, i) => (
                    <li key={i} className="vf-use-item">
                      <div className="vf-use-icon"><CheckCircle size={13} color="var(--teal)" /></div>
                      <div className="vf-use-text">
                        <span className="vf-use-strong">{item.title}</span>
                        {item.desc}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ── FAQ ── */}
          <section className="vf-section ri-2" aria-label="UFRN Frequently Asked Questions">
            <div className="vf-sh">
              <span className="vf-sh-lbl">Frequently Asked Questions</span>
              <div className="vf-sh-line" />
            </div>
            <div className="vf-faq">
              {[
                { q: "What is UFRN?", a: "UFRN stands for UpForge Registry Number — a unique, permanent identifier assigned to every verified startup in the UpForge Global Registry. Format: UF-2026-IND-00013. It serves as independent proof of existence and legitimacy." },
                { q: "What does UFRN full form mean?", a: "UFRN full form is UpForge Registry Number. It is an official startup identifier issued by UpForge after editorial verification of founders, operational status, and business details." },
                { q: "What is the UFRN format?", a: "The UFRN format is UF-YEAR-COUNTRYCODE-SEQUENCENUMBER. For example, UF-2026-IND-00013 for an Indian startup. Country codes follow ISO 3166-1 alpha-3 (IND = India, USA = United States, GBR = UK, SGP = Singapore, etc.)." },
                { q: "Is UFRN verification free?", a: "Yes. UFRN verification is completely free, requires no account or login, and provides instant results with no usage limits. It will always be free." },
                { q: "How do I verify a startup using its UFRN?", a: "Enter the UFRN (e.g. UF-2026-IND-00013 or just the sequence number 13) in the search box above. You'll instantly see the startup's verified name, founders, category, funding stage, and official registry status." },
                { q: "How do I get a UFRN for my startup?", a: "Submit your startup for free at upforge.in/submit. The UpForge editorial board reviews your submission and assigns a permanent UFRN upon approval — typically within 3–5 business days. Open to startups worldwide." },
                { q: "Which countries are supported by UFRN?", a: "UFRN covers startups from all countries worldwide. Country codes follow ISO 3166-1 alpha-3 standard — IND for India, USA for United States, GBR for UK, SGP for Singapore, ARE for UAE, and so on." },
              ].map((faq, i) => (
                <details key={i} className="vf-faq-item">
                  <summary className="vf-faq-summary">
                    <span className="vf-faq-q">{faq.q}</span>
                    <svg className="vf-faq-chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 4L6 8L10 4" stroke="var(--rule)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <p className="vf-faq-a">{faq.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* ── QUICK LINKS ── */}
          <section className="vf-section" aria-label="Explore UpForge">
            <div className="vf-sh">
              <span className="vf-sh-lbl">Explore More</span>
              <div className="vf-sh-line" />
            </div>
            <div className="vf-links">
              {[
                { l: "Global Registry", h: "/registry", d: "Browse all verified startups" },
                { l: "Submit Startup", h: "/submit", d: "Get your free UFRN" },
                { l: "About UpForge", h: "/about", d: "Our mission & editorial process" },
                { l: "Founder Chronicle", h: "/", d: "India's startup stories" },
              ].map((lnk, i) => (
                <Link key={i} href={lnk.h} className="vf-link-card">
                  <div className="vf-link-title">{lnk.l} <ArrowRight size={9} /></div>
                  <div className="vf-link-desc">{lnk.d}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <div className="vf-cta">
            <div>
              <p className="vf-cta-ey">🔏 UpForge Registry Number</p>
              <p className="vf-cta-h">Your startup deserves a verified identity.</p>
              <p className="vf-cta-p">Get your UFRN free. Trusted by founders, investors, and press across 50+ countries.</p>
            </div>
            <a href="https://www.upforge.in/submit" className="vf-cta-btn">
              Get Your UFRN Free <ArrowRight size={13} />
            </a>
          </div>
        </main>
      </div>
    </>
  )
}
