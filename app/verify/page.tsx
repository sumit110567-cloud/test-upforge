// app/verify/page.tsx — UpForge UFRN Verification
// NOTE: Footer is intentionally absent here.
// It is rendered by layout.tsx which wraps every page.
// If your layout.tsx does NOT include Footer, add it back here.
import type { Metadata } from "next"
import { headers } from "next/headers"
import { VerifyClient } from "@/components/verify-client"
import { createReadClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"

async function getDomain(): Promise<"org" | "in"> {
  const h = await headers()
  const ctx = h.get("x-upforge-domain")
  if (ctx === "org" || ctx === "in") return ctx as "org" | "in"
  return (h.get("host") ?? "").includes("upforge.org") ? "org" : "in"
}

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

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const canonical = "https://www.upforge.org/verify"
  const ogImage   = "https://www.upforge.in/og/ufrn-verify.png"
  return {
    title: "Verify UFRN — UpForge Startup Registry Number Lookup | Official Verification",
    description:
      "Instantly verify any startup's UFRN (UpForge Registry Number). Format: UF-2026-IND-00013 or UF-2026-AUS-00011. Look up verified company details, founders, funding, and official registry status. Free, instant, trusted.",
    keywords: [
      "UFRN lookup", "verify startup UFRN", "UpForge Registry Number",
      "UF-2026-IND startup verification", "startup registry number India",
      "verify startup India free", "UFRN search", "startup identity verification India",
      "is this startup verified", "startup due diligence India", "upforge verify",
      "startup proof of existence", "UFRN checker", "Indian startup verification 2026",
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
      title: "Verify UFRN — UpForge Startup Registry Lookup",
      description: "Enter any UFRN to instantly verify a startup's registration, founders, and funding.",
      url: canonical, siteName: "UpForge Global Registry",
      locale: domain === "org" ? "en" : "en_IN", type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge UFRN Verification Tool" }],
    },
    twitter: {
      card: "summary_large_image", site: "@upforge_in",
      title: "Verify a Startup's UFRN — UpForge Official Registry",
      description: "Instant startup verification via UFRN (UF-YEAR-CC-XXXXX).",
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
    "@context": "https://schema.org", "@type": "WebPage",
    "@id": "https://www.upforge.org/verify#webpage",
    url: "https://www.upforge.org/verify",
    name: "UFRN Verification — UpForge Startup Registry Number Lookup",
    description: `Verify any startup's UFRN in ${total.toLocaleString()}+ entry global registry.`,
    inLanguage: "en", datePublished: "2026-03-01",
    dateModified: new Date().toISOString().split("T")[0],
    publisher: { "@id": "https://www.upforge.org/#organization" },
  },
  {
    "@context": "https://schema.org", "@type": "SoftwareApplication",
    "@id": "https://www.upforge.org/verify#app",
    name: "UpForge UFRN Verification Tool",
    description: "Instantly verify any startup UFRN. Free, instant, no account needed.",
    url: "https://www.upforge.org/verify",
    applicationCategory: "BusinessApplication", operatingSystem: "Web",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
  },
  {
    "@context": "https://schema.org", "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: "What is the UFRN format?",
        acceptedAnswer: { "@type": "Answer", text: "UFRN = UpForge Registry Number. Format: UF-YEAR-COUNTRYCODE-SEQNUM. E.g. UF-2026-IND-00013 for India." } },
      { "@type": "Question", name: "Is UFRN verification free?",
        acceptedAnswer: { "@type": "Answer", text: "Yes. Free, no account required, unlimited lookups." } },
      { "@type": "Question", name: "How do I get a UFRN for my startup?",
        acceptedAnswer: { "@type": "Answer", text: "Submit for free at upforge.in/submit. The team reviews and assigns a UFRN on approval." } },
    ],
  },
  {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge",          item: "https://www.upforge.org" },
      { "@type": "ListItem", position: 2, name: "Startup Registry", item: "https://www.upforge.org/startup" },
      { "@type": "ListItem", position: 3, name: "Verify UFRN",      item: "https://www.upforge.org/verify" },
    ],
  },
]

export default async function VerifyPage() {
  const [domain, { total }] = await Promise.all([getDomain(), getVerifyStats()])
  const isOrg = domain === "org"

  return (
    <>
      {/* Structured data */}
      {makeSchemas(total).map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}/>
      ))}

      {/* Navbar — always rendered here because verify is a standalone page */}
      <Navbar />

      {/* pt-14 = navbar height. VerifyClient owns all its own top padding after that. */}
      <main className="flex-grow pt-14 bg-[#FDFCF8]">
        <VerifyClient totalCount={total} isOrg={isOrg}/>
      </main>

      {/*
        ⚠️  DO NOT ADD <Footer /> HERE.
        Your layout.tsx already wraps every page with <Footer />.
        Adding it here causes the double-footer bug.
        If your layout.tsx does NOT render a Footer, add it back:
          import { Footer } from "@/components/footer"
          <Footer />
      */}
    </>
  )
}
