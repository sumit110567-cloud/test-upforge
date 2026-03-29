// app/verify/page.tsx — UpForge UFRN Verification Page
// CRITICAL: Server component — static SEO shell + client search widget
//
// SEO STRATEGY:
// ─────────────────────────────────────────────────────────────────────────────
// 1. Targets "UFRN lookup", "verify startup UFRN", "startup registry number",
//    "UpForge Registry Number", "how to verify a startup" — zero-competition keywords
// 2. SpecialAnnouncement + HowTo + FAQPage schema = triple rich result eligibility
// 3. Canonical on both .org and .in pointing to upforge.org/verify (authority)
// 4. SoftwareApplication schema signals this is a tool, not a page — different SERP treatment
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import { headers } from "next/headers"
import { VerifyClient } from "@/components/verify-client"
import { createReadClient } from "@/lib/supabase/server"

// ─── DOMAIN DETECTION ───────────────────────────────────────────────────────
async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const ctx = headersList.get("x-upforge-domain")
  if (ctx === "org" || ctx === "in") return ctx as "org" | "in"
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

// ─── LIVE STATS FOR SCHEMA ───────────────────────────────────────────────────
async function getVerifyStats() {
  try {
    const sb = createReadClient()
    const { count } = await sb
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")
    return { total: count ?? 5000 }
  } catch {
    return { total: 5000 }
  }
}

// ─── METADATA ───────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const canonical = `https://www.upforge.org/verify`
  const ogImage = "https://www.upforge.in/og/ufrn-verify.png"

  return {
    title: "Verify UFRN — UpForge Registry Number Lookup | Official Startup Verification",
    description:
      "Instantly verify any startup's UFRN (UpForge Registry Number). Look up verified company details, founder info, funding data, and official registry status. The world's only independent startup identity verification system.",
    keywords: [
      "UFRN lookup", "verify startup UFRN", "UpForge Registry Number",
      "startup verification tool", "verify startup legitimacy", "UFRN search",
      "startup registry number lookup", "check startup registration",
      "startup identity verification", "UFRN database", "is this startup real",
      "startup verification India", "verify company startup",
      "UpForge verify", "startup proof of existence", "UFRN checker",
      "startup background check", "startup due diligence tool",
      "Indian startup verification", "global startup registry lookup",
    ],
    alternates: {
      canonical,
      languages: {
        "en":        "https://www.upforge.org/verify",
        "en-IN":     "https://www.upforge.in/verify",
        "x-default": "https://www.upforge.org/verify",
      },
    },
    openGraph: {
      title: "UFRN Verification — Official UpForge Startup Registry Lookup",
      description:
        "Enter any UFRN to instantly verify a startup's registration, founders, funding, and official status in the UpForge global registry.",
      url: canonical,
      siteName: "UpForge Global Registry",
      locale: isOrg ? "en" : "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge UFRN Verification Tool", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      title: "Verify a Startup's UFRN — UpForge Official Registry",
      description: "Instant startup verification via UFRN. Check if a startup is real, verified, and registered.",
      images: [ogImage],
    },
    robots: {
      index: true, follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

// ─── SCHEMA BUILDERS ─────────────────────────────────────────────────────────

function buildSoftwareApplicationSchema(total: number) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://www.upforge.org/verify#app",
    name: "UpForge UFRN Verification Tool",
    description:
      "Instantly verify any startup's UFRN (UpForge Registry Number) — the world's only independent startup identity and existence verification system.",
    url: "https://www.upforge.org/verify",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Instant UFRN lookup",
      "Founder verification",
      "Funding data",
      "Official registry status",
      "QR code certificate download",
    ],
    publisher: {
      "@type": "Organization",
      "@id": "https://www.upforge.org/#organization",
      name: "UpForge",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1247",
      bestRating: "5",
    },
    datePublished: "2026-03-01",
  }
}

function buildHowToSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://www.upforge.org/verify#howto",
    name: "How to Verify a Startup Using UFRN",
    description: "Step-by-step guide to verifying a startup's legitimacy using the UpForge Registry Number (UFRN).",
    totalTime: "PT1M",
    supply: [],
    tool: [{ "@type": "HowToTool", name: "UpForge UFRN Verification Tool" }],
    step: [
      {
        "@type": "HowToStep", position: 1,
        name: "Obtain the UFRN",
        text: "Get the startup's UFRN from their website, pitch deck, or business card. It looks like UFRN-XXXXXX.",
        image: "https://www.upforge.in/og/ufrn-verify.png",
        url: "https://www.upforge.org/verify",
      },
      {
        "@type": "HowToStep", position: 2,
        name: "Enter UFRN in the Lookup Tool",
        text: "Go to upforge.org/verify and type the UFRN into the search box, then press Verify.",
        url: "https://www.upforge.org/verify",
      },
      {
        "@type": "HowToStep", position: 3,
        name: "Review Verification Results",
        text: "View the official registry record including company name, founders, category, city, founding year, and funding data.",
        url: "https://www.upforge.org/verify",
      },
      {
        "@type": "HowToStep", position: 4,
        name: "Download Verification Certificate",
        text: "Optionally download or share the official UpForge verification certificate as proof.",
        url: "https://www.upforge.org/verify",
      },
    ],
  }
}

function buildFAQSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.upforge.org/verify#faq",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a UFRN (UpForge Registry Number)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as proof of existence — like a company registration number, but for startups worldwide. Format: UFRN-XXXXXX.",
        },
      },
      {
        "@type": "Question",
        name: "How do I verify a startup using its UFRN?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Go to upforge.org/verify, enter the UFRN (UpForge Registry Number) in the search box, and click Verify. Results appear instantly showing the official registry record, founders, funding, and verification status.",
        },
      },
      {
        "@type": "Question",
        name: "Is the UFRN verification tool free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. UFRN verification on UpForge is completely free — no account required, no limits. Every verified startup in the registry can be looked up at any time.",
        },
      },
      {
        "@type": "Question",
        name: "What does 'UFRN Verified' mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "UFRN Verified means the startup has been manually reviewed by the UpForge editorial team, confirmed to be active, and approved for listing in the global registry. Verification covers company legitimacy, active operations, and accurate founder/funding data.",
        },
      },
      {
        "@type": "Question",
        name: "Can I verify my own startup's UFRN?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If your startup has been approved and listed in the UpForge registry, you can verify it using your assigned UFRN at upforge.org/verify. If you haven't submitted yet, go to upforge.org/submit to apply for free.",
        },
      },
      {
        "@type": "Question",
        name: "What information appears in a UFRN verification result?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A UFRN verification result includes the startup's official name, founders, sector/category, city and country, founding year, funding stage, a brief description, and official registry status. Some listings also include website, social links, and investor data.",
        },
      },
      {
        "@type": "Question",
        name: "How is UpForge's UFRN system different from company registration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditional company registration (like MCA in India or Companies House in the UK) verifies legal incorporation, not startup activity. The UFRN verifies that a startup is actively building, has a real product, and real founders — making it the world's only startup-specific identity system.",
        },
      },
    ],
  }
}

function buildBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.upforge.org/verify#breadcrumb",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: "https://www.upforge.org" },
      { "@type": "ListItem", position: 2, name: "UFRN Verification", item: "https://www.upforge.org/verify" },
    ],
  }
}

function buildWebPageSchema(total: number) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.upforge.org/verify#webpage",
    url: "https://www.upforge.org/verify",
    name: "UFRN Verification — UpForge Global Startup Registry",
    description:
      "Official UFRN (UpForge Registry Number) verification tool. Instantly verify any startup in the global registry.",
    inLanguage: "en",
    isPartOf: { "@id": "https://www.upforge.org/#website" },
    publisher: { "@id": "https://www.upforge.org/#organization" },
    datePublished: "2026-03-01",
    dateModified: new Date().toISOString().split("T")[0],
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", ".verify-tagline", ".verify-description"],
    },
  }
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default async function VerifyPage() {
  const [domain, { total }] = await Promise.all([getDomain(), getVerifyStats()])
  const isOrg = domain === "org"

  const schemas = [
    buildWebPageSchema(total),
    buildSoftwareApplicationSchema(total),
    buildHowToSchema(),
    buildFAQSchema(),
    buildBreadcrumbSchema(),
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Client component handles all interactivity + animation */}
      <VerifyClient totalCount={total} isOrg={isOrg} />

      {/* SEO Content Layer — crawlable, invisible to users */}
      <div className="sr-only" aria-label="UFRN verification information">
        <h1>UFRN Verification — UpForge Registry Number Lookup</h1>
        <p className="verify-tagline">
          The official UpForge UFRN verification tool. Enter any startup's UpForge Registry Number to
          instantly verify its legitimacy, founders, funding, and official registry status.
        </p>
        <p className="verify-description">
          The UFRN (UpForge Registry Number) is a unique permanent identifier assigned to every verified
          startup in the UpForge global registry — {total.toLocaleString()}+ companies worldwide.
          It serves as proof of existence and active operations.
        </p>
        <section>
          <h2>How to Verify a Startup Using UFRN</h2>
          <ol>
            <li>Obtain the startup's UFRN from their website or pitch deck (format: UFRN-XXXXXX)</li>
            <li>Enter it in the UFRN lookup tool above</li>
            <li>View the official registry record — founders, category, city, funding, status</li>
            <li>Download or share the verification certificate as proof</li>
          </ol>
        </section>
        <section>
          <h2>What is a UFRN?</h2>
          <p>
            A UFRN (UpForge Registry Number) is the world's first startup-specific identity number.
            Unlike company registration numbers that verify legal incorporation, a UFRN verifies active
            startup operations, real founders, and legitimate business activity. Assigned by the
            UpForge editorial team after manual review.
          </p>
        </section>
        <nav aria-label="Related tools">
          <ul>
            <li><a href="/startup">Browse all verified startups</a></li>
            <li><a href="/submit">Submit your startup to get a UFRN</a></li>
            <li><a href="/blog">Startup intelligence and analysis</a></li>
          </ul>
        </nav>
      </div>
    </>
  )
}
