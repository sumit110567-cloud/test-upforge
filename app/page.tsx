// app/page.tsx — PRODUCTION v5
// Global SEO & Trust-Focused Redesign
// Replacing previous UI with High-Authority Editorial Look

import type { Metadata } from "next"
import { headers } from "next/headers"
import { GlobeHero } from "../components/globe-hero"
import { TopStoriesSection } from "../components/top-stories"
import { TopVideosSection } from "../components/top-videos"
import { ReviewsSection } from "../components/reviews"
import { TrustBar } from "../components/trust-bar"
import { FOUNDERS } from "../data/founders"
import { createReadClient } from "@/lib/supabase/server"

// ---------------------------------------------------------------------------
// DOMAIN DETECTION (Logic to switch SEO between .org and .in)
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const context = headersList.get("x-upforge-domain")
  if (context === "org" || context === "in") return context as "org" | "in"
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

// ---------------------------------------------------------------------------
// LIVE DATA FETCHERS (Freshness signals for Google)
// ---------------------------------------------------------------------------
async function getLatestDate(): Promise<string> {
  try {
    const supabase = createReadClient()
    const { data } = await supabase
      .from("startups")
      .select("updated_at")
      .eq("status", "approved")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single()
    if (data?.updated_at) return new Date(data.updated_at).toISOString().split("T")[0]
  } catch (_) {}
  return new Date().toISOString().split("T")[0]
}

async function getStartupCount(): Promise<number> {
  try {
    const supabase = createReadClient()
    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")
    return count ?? FOUNDERS.length
  } catch (_) {}
  return 5000
}

// ---------------------------------------------------------------------------
// METADATA GENERATOR (Maximum SEO Impact)
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const ogImage = "https://www.upforge.in/og/founder-chronicle.png"

  const baseMetadata = {
    alternates: { canonical: canonicalUrl },
    metadataBase: new URL(canonicalUrl),
    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
    authors: [{ name: "UpForge Editorial Team" }],
    publisher: "UpForge",
    verification: { google: "your-google-site-verification-token" },
  }

  if (isOrg) {
    return {
      ...baseMetadata,
      title: "Global Startup Registry — Verified UFRN Database | UpForge",
      description: "The world's first independent global startup registry. Every listing is manually verified and assigned a permanent UpForge Registry Number (UFRN). Trusted by 5,000+ founders worldwide.",
      keywords: ["global startup registry", "verified startup database", "UFRN registry", "startup proof of existence", "UFRN lookup"],
    }
  }

  return {
    ...baseMetadata,
    title: "Indian Startup Founders & Unicorn Stories 2026 — The Founder Chronicle",
    description: "India's most trusted independent startup publication. Verified deep-dives on Zepto, CRED, Zerodha, and more. Real funding data and unicorn founder insights.",
    keywords: ["Indian startup founders 2026", "India unicorn stories", "startup success stories India", "Aadit Palicha Zepto", "Kunal Shah CRED"],
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT (Server-Side for speed and crawlability)
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const [liveDate, startupCount] = await Promise.all([getLatestDate(), getStartupCount()])

  // Structured Data (JSON-LD) for Rich Snippets
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "UpForge",
    url: isOrg ? "https://www.upforge.org" : "https://www.upforge.in",
    logo: "https://www.upforge.in/logo.jpg",
    description: "The independent global registry for startups and verified founder stories.",
    dateModified: liveDate
  }

  return (
    <main className="bg-[#faf7f2]">
      {/* ── SEO JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* ── 1. PREMIUM HERO ── */}
      <GlobeHero isOrg={isOrg} />

      {/* ── 2. TRUST INDICATORS ── */}
      <TrustBar startupCount={startupCount} />

      {/* ── 3. TOP EDITORIAL STORIES ── */}
      <TopStoriesSection />

      {/* ── 4. WATCH & LEARN (VIDEO SECTION) ── */}
      <TopVideosSection />

      {/* ── 5. REVIEWS & TESTIMONIALS ── */}
      <ReviewsSection />

      {/* ── 6. FINAL MISSION CTA ── */}
      <section className="py-24 bg-[#1a0a0a] text-center border-t border-[#8b1a1a]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-serif text-[#faf7f2] font-bold mb-6">
            {isOrg ? "Every startup deserves a verified identity." : "The best insight comes from real research."}
          </h2>
          <p className="text-[#c9b99a] font-serif text-lg opacity-80 mb-10 max-w-2xl mx-auto">
            Join the 5,000+ companies already verified on UpForge. No paywalls. No PR fluff. Just verified facts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/submit" className="bg-[#8b1a1a] text-[#faf7f2] px-10 py-4 font-serif font-bold transition-all hover:opacity-90">
              Join the Registry →
            </a>
            <a href="/about" className="border border-white/20 text-[#faf7f2] px-10 py-4 font-serif transition-all hover:bg-white/5">
              Read Our Story
            </a>
          </div>
        </div>
      </section>

      {/* ── HIDDEN SEO LAYER ── */}
      <div className="sr-only">
        <h1>{isOrg ? "Global Startup Registry" : "Indian Startup Founders Chronicle"}</h1>
        <p>Verified UFRN Database, tracking over {startupCount} startups worldwide.</p>
        <ul>
          {FOUNDERS.map(f => (
            <li key={f.slug}><a href={`/startup/${f.slug}`}>{f.name} at {f.company}</a></li>
          ))}
        </ul>
      </div>
    </main>
  )
}
