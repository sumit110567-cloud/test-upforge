// app/verify/page.tsx — UpForge UFRN Verification (FIXED & PREMIUM)
import type { Metadata } from "next"
import { headers } from "next/headers"
import { VerifyClient } from "@/components/verify-client"
import { createReadClient } from "@/lib/supabase/server"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

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
  } catch { return { total: 5000 } }
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const canonical = "https://www.upforge.org/verify"
  const ogImage  = "https://www.upforge.in/og/ufrn-verify.png"
  return {
    title: "Verify UFRN — UpForge Startup Registry Number Lookup | Official Verification",
    description:
      "Instantly verify any startup's UFRN (UpForge Registry Number). Format: UF-2026-IND-00013 or UF-2026-AUS-00011. Look up verified company details, founders, funding, and official registry status. Free, instant, trusted.",
    keywords: [
      "UFRN lookup", "verify startup UFRN", "UpForge Registry Number",
      "UF-2026-IND startup verification", "UF-2026-AUS startup lookup",
      "startup registry number India", "verify startup India free",
      "UFRN search", "startup identity verification India",
      "is this startup verified", "startup due diligence India",
      "upforge verify", "startup proof of existence", "UFRN checker",
      "Indian startup verification 2026", "startup registry number lookup",
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
      description: "Enter any UFRN (UF-2026-IND-00013 or UF-2026-AUS-00011) to instantly verify a startup's registration, founders, and funding.",
      url: canonical, siteName: "UpForge Global Registry",
      locale: domain === "org" ? "en" : "en_IN", type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge UFRN Verification Tool" }],
    },
    twitter: {
      card: "summary_large_image", site: "@upforge_in",
      title: "Verify a Startup's UFRN — UpForge Official Registry",
      description: "Instant startup verification via UFRN (UF-YEAR-CC-XXXXX). Check if a startup is real, verified, and registered.",
      images: [ogImage],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  }
}

export default async function VerifyPage() {
  const [domain, { total }] = await Promise.all([getDomain(), getVerifyStats()])
  const isOrg = domain === "org"

  const schemas = [
    {
      "@context": "https://schema.org", "@type": "WebPage",
      "@id": "https://www.upforge.org/verify#webpage",
      url: "https://www.upforge.org/verify",
      name: "UFRN Verification — UpForge Startup Registry Number Lookup",
      description: `Verify any startup's UFRN (format: UF-2026-IND-00013 or UF-2026-AUS-00011) in ${total.toLocaleString()}+ entry global registry.`,
      inLanguage: "en", datePublished: "2026-03-01",
      dateModified: new Date().toISOString().split("T")[0],
      publisher: { "@id": "https://www.upforge.org/#organization" },
    },
    {
      "@context": "https://schema.org", "@type": "SoftwareApplication",
      "@id": "https://www.upforge.org/verify#app",
      name: "UpForge UFRN Verification Tool",
      description: "Instantly verify any startup UFRN (UF-YEAR-COUNTRYCODE-NUMBER, e.g. UF-2026-IND-00013, UF-2026-AUS-00011). Free, instant, no account needed.",
      url: "https://www.upforge.org/verify",
      applicationCategory: "BusinessApplication", operatingSystem: "Web",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    },
    {
      "@context": "https://schema.org", "@type": "HowTo",
      name: "How to Verify a Startup Using UFRN (UF-2026-CC-XXXXX)",
      description: "Step-by-step guide to verifying a startup using the UpForge Registry Number. Format: UF-YEAR-COUNTRYCODE-SEQNUM.",
      totalTime: "PT1M",
      step: [
        { "@type": "HowToStep", position: 1, name: "Get the UFRN", text: "Obtain the startup's UFRN from their website or deck. Format: UF-2026-IND-00013 or UF-2026-AUS-00011. Short form (just the number) also works.", url: "https://www.upforge.org/verify" },
        { "@type": "HowToStep", position: 2, name: "Enter in Lookup Tool", text: "Go to upforge.org/verify, type the UFRN and press Verify.", url: "https://www.upforge.org/verify" },
        { "@type": "HowToStep", position: 3, name: "View Registry Record", text: "See official record: company name, founders, sector, city, founding year, funding, and verification status.", url: "https://www.upforge.org/verify" },
        { "@type": "HowToStep", position: 4, name: "Share Certificate", text: "Copy the verification link as official proof.", url: "https://www.upforge.org/verify" },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is the UFRN format?", acceptedAnswer: { "@type": "Answer", text: "UFRN = UpForge Registry Number. Format: UF-YEAR-COUNTRYCODE-SEQNUM. Examples: UF-2026-IND-00013 (India), UF-2026-AUS-00011 (Australia). You can enter just the number (e.g. 11) and the tool auto-formats it." } },
        { "@type": "Question", name: "Why does UFRN verification show 'Not Found'?", acceptedAnswer: { "@type": "Answer", text: "Usually: wrong country code in the UFRN (IND for India, AUS for Australia, etc.), a typo, or the startup hasn't been approved yet. Try entering just the numeric portion." } },
        { "@type": "Question", name: "Is UFRN verification free?", acceptedAnswer: { "@type": "Answer", text: "Yes. Completely free, no account required, unlimited lookups." } },
        { "@type": "Question", name: "How do I get a UFRN for my startup?", acceptedAnswer: { "@type": "Answer", text: "Submit for free at upforge.in/submit. The team reviews and assigns a permanent UFRN upon approval." } },
        { "@type": "Question", name: "How is UFRN different from company registration (CIN)?", acceptedAnswer: { "@type": "Answer", text: "CIN verifies legal incorporation. UFRN verifies active startup operations and real founders. They are complementary — not replacements." } },
      ],
    },
    {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "UpForge", item: "https://www.upforge.org" },
        { "@type": "ListItem", position: 2, name: "Startup Registry", item: "https://www.upforge.org/startup" },
        { "@type": "ListItem", position: 3, name: "Verify UFRN", item: "https://www.upforge.org/verify" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCF8]">
      {/* Schema injection */}
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* Navbar & Footer are placed here to ensure they correctly wrap the content
          and stay consistent with the rest of the application layout.
      */}
      <Navbar />

      <main className="flex-grow pt-24 pb-16 flex flex-col items-center">
        <div className="w-full max-w-[1280px]">
          <VerifyClient totalCount={total} isOrg={isOrg} />
        </div>
      </main>

      <div className="sr-only" aria-label="UFRN verification information">
        <h1>Verify UFRN — UpForge Registry Number Lookup (UF-2026-CC-XXXXX)</h1>
        <p>Official tool to verify any startup's UFRN. Format: UF-YEAR-COUNTRYCODE-NUMBER. Examples: UF-2026-IND-00013 for India, UF-2026-AUS-00011 for Australia. {total.toLocaleString()}+ entries in the global registry.</p>
        <section>
          <h2>UFRN Format</h2>
          <ul>
            <li>UF = UpForge prefix</li>
            <li>2026 = Year of registration</li>
            <li>IND / AUS / USA = Country code</li>
            <li>00013 = Sequential registry number</li>
          </ul>
        </section>
        <nav><ul>
          <li><a href="/startup">Browse all verified startups</a></li>
          <li><a href="/submit">Submit your startup to get a UFRN</a></li>
          <li><a href="/startups">Browse startups by sector</a></li>
        </ul></nav>
      </div>

      <Footer />
    </div>
  )
}
