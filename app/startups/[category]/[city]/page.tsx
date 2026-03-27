// app/startups/[category]/[city]/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// PROGRAMMATIC LONG-TAIL SEO — City + Category Pages
//
// WHY THIS FILE EXISTS:
//   Keywords like "fintech startups in Mumbai" or "AI startups in Bangalore"
//   have high commercial intent (investors, job seekers, journalists) and
//   near-ZERO competition. No major startup directory does this well.
//
//   Each of these pages is a standalone SEO asset:
//     /startups/fintech/mumbai     → "fintech startups Mumbai"
//     /startups/ai/bangalore       → "AI startups Bangalore"
//     /startups/edtech/delhi       → "edtech startups Delhi"
//     ... etc for all category × city combinations
//
//   At 20 categories × 10 cities = 200 additional indexed pages, each with
//   a unique H1, unique meta description, and unique structured data.
//   Google treats each as a distinct, crawlable URL with its own ranking potential.
//
// ARCHITECTURE:
//   - generateStaticParams() pre-generates all combos at build time (ISR)
//   - generateMetadata() creates unique title/description per combo
//   - Page queries Supabase for startups in that category + city
//   - Falls back gracefully if no startups found yet (shows "coming soon" state)
//   - ItemList JSON-LD schema for each result set → rich results eligible
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug, slugToCategory } from "@/lib/categories"

// ─────────────────────────────────────────────────────────────────────────────
// CITY CONFIG — display name + state, used in titles and schema
// ─────────────────────────────────────────────────────────────────────────────
const CITY_META: Record<string, { display: string; state: string }> = {
  mumbai:    { display: "Mumbai",    state: "Maharashtra" },
  bangalore: { display: "Bangalore", state: "Karnataka" },
  delhi:     { display: "Delhi",     state: "Delhi NCR" },
  hyderabad: { display: "Hyderabad", state: "Telangana" },
  pune:      { display: "Pune",      state: "Maharashtra" },
  chennai:   { display: "Chennai",   state: "Tamil Nadu" },
  kolkata:   { display: "Kolkata",   state: "West Bengal" },
  ahmedabad: { display: "Ahmedabad", state: "Gujarat" },
  jaipur:    { display: "Jaipur",    state: "Rajasthan" },
  noida:     { display: "Noida",     state: "Uttar Pradesh" },
}

// ─────────────────────────────────────────────────────────────────────────────
// STATIC PARAMS — pre-generate all category × city combos at build time
// ─────────────────────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  const supabase = await createClient()
  const { data: startups } = await supabase
    .from("startups")
    .select("category")
    .eq("status", "approved")
    .not("category", "is", null)

  const categorySlugs = [...new Set((startups ?? []).map((s) => categoryToSlug(s.category)))]
  const citySlugs     = Object.keys(CITY_META)

  const params: { category: string; city: string }[] = []
  for (const category of categorySlugs) {
    for (const city of citySlugs) {
      params.push({ category, city })
    }
  }
  return params
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA — unique per combo
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; city: string }>
}): Promise<Metadata> {
  const { category: categorySlug, city: citySlug } = await params

  const cityMeta    = CITY_META[citySlug]
  if (!cityMeta) return {}

  const categoryName = slugToCategory(categorySlug) ?? categorySlug
  const headersList  = await headers()
  const host         = headersList.get("host") ?? ""
  const isOrg        = host.includes(".org")
  const BASE         = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  const title       = `${categoryName} Startups in ${cityMeta.display} — Verified List 2026`
  const description = `Discover verified ${categoryName.toLowerCase()} startups based in ${cityMeta.display}, ${cityMeta.state}. Browse funding data, founder profiles, and company details. Updated 2026.`
  const canonical   = `${BASE}/startups/${categorySlug}/${citySlug}`

  return {
    title,
    description,
    keywords: [
      `${categoryName} startups ${cityMeta.display}`,
      `${categoryName} startups in ${cityMeta.display}`,
      `${categoryName} companies ${cityMeta.display}`,
      `top ${categoryName} startups ${cityMeta.display} 2026`,
      `${cityMeta.display} ${categoryName} startups`,
      `${cityMeta.state} ${categoryName} companies`,
      `verified ${categoryName} startups India`,
      `${categoryName} startup funding ${cityMeta.display}`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_IN",
      siteName: "UpForge",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function CategoryCityPage({
  params,
}: {
  params: Promise<{ category: string; city: string }>
}) {
  const { category: categorySlug, city: citySlug } = await params

  const cityMeta = CITY_META[citySlug]
  if (!cityMeta) notFound()

  const categoryName = slugToCategory(categorySlug) ?? categorySlug

  const headersList = await headers()
  const host        = headersList.get("host") ?? ""
  const isOrg       = host.includes(".org")
  const BASE        = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  // ── Fetch startups for this category + city ─────────────────────────────
  const supabase = await createClient()
  const { data: startups } = await supabase
    .from("startups")
    .select("slug, name, category, city, description, is_featured, logo_url, funding_total")
    .eq("status", "approved")
    .ilike("category", `%${categoryName}%`)
    .ilike("city", `%${cityMeta.display}%`)
    .order("is_featured", { ascending: false })
    .order("created_at", { ascending: false })
    .limit(50)

  // ── JSON-LD: ItemList for this category+city result set ─────────────────
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${categoryName} Startups in ${cityMeta.display} 2026`,
    description: `Verified list of ${categoryName.toLowerCase()} startups in ${cityMeta.display}, India.`,
    url: `${BASE}/startups/${categorySlug}/${citySlug}`,
    numberOfItems: startups?.length ?? 0,
    itemListElement: (startups ?? []).map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Organization",
        name: s.name,
        url: `${BASE}/startup/${s.slug}`,
        description: s.description,
        ...(s.logo_url ? { logo: { "@type": "ImageObject", url: s.logo_url } } : {}),
      },
    })),
  }

  // ── BreadcrumbList ───────────────────────────────────────────────────────
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: BASE },
      { "@type": "ListItem", position: 2, name: "Startups", item: `${BASE}/startups` },
      { "@type": "ListItem", position: 3, name: `${categoryName} Startups`, item: `${BASE}/startups/${categorySlug}` },
      { "@type": "ListItem", position: 4, name: `${categoryName} Startups in ${cityMeta.display}`, item: `${BASE}/startups/${categorySlug}/${citySlug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="container mx-auto px-4 py-8">
        {/* H1 — exact match for target keyword */}
        <h1 className="text-3xl font-bold mb-2">
          {categoryName} Startups in {cityMeta.display}
        </h1>
        <p className="text-muted-foreground mb-6">
          {startups?.length ?? 0} verified {categoryName.toLowerCase()} companies in{" "}
          {cityMeta.display}, {cityMeta.state} — updated 2026.
        </p>

        {/* ── Breadcrumb ──────────────────────────────────────────────────── */}
        <nav aria-label="Breadcrumb" className="text-sm mb-8">
          <ol className="flex gap-1 text-muted-foreground">
            <li><a href="/" className="hover:underline">UpForge</a></li>
            <li>/</li>
            <li><a href="/startups" className="hover:underline">Startups</a></li>
            <li>/</li>
            <li><a href={`/startups/${categorySlug}`} className="hover:underline">{categoryName}</a></li>
            <li>/</li>
            <li className="text-foreground font-medium">{cityMeta.display}</li>
          </ol>
        </nav>

        {/* ── Results grid ─────────────────────────────────────────────────── */}
        {startups && startups.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {startups.map((s) => (
              <a
                key={s.slug}
                href={`/startup/${s.slug}`}
                className="block border rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                {s.logo_url && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.logo_url}
                    alt={`${s.name} logo — ${categoryName} startup ${cityMeta.display}`}
                    className="w-12 h-12 object-contain mb-3 rounded"
                    loading="lazy"
                    width={48}
                    height={48}
                  />
                )}
                <h2 className="font-semibold text-lg">{s.name}</h2>
                {s.description && (
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{s.description}</p>
                )}
                {s.funding_total && (
                  <p className="text-xs text-green-600 mt-2 font-medium">
                    Raised: ${Number(s.funding_total).toLocaleString()}
                  </p>
                )}
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              We&apos;re building this list — know a {categoryName.toLowerCase()} startup in{" "}
              {cityMeta.display}?
            </p>
            <a
              href="/submit"
              className="mt-4 inline-block bg-primary text-primary-foreground px-6 py-2 rounded-md font-medium"
            >
              Submit a Startup →
            </a>
          </div>
        )}

        {/* ── Internal link cluster — pushes PageRank to related pages ──── */}
        <section className="mt-12 pt-8 border-t">
          <h2 className="text-xl font-semibold mb-4">
            Explore More {categoryName} Startups in India
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(CITY_META)
              .filter(([slug]) => slug !== citySlug)
              .map(([slug, meta]) => (
                <a
                  key={slug}
                  href={`/startups/${categorySlug}/${slug}`}
                  className="px-3 py-1 border rounded-full text-sm hover:bg-muted transition-colors"
                >
                  {categoryName} startups in {meta.display}
                </a>
              ))}
          </div>
        </section>
      </main>
    </>
  )
}

// ISR — revalidate every 24 hours
export const revalidate = 86400
