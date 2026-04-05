// app/registry/page.tsx — WORLD-CLASS AUTHORITY v5
// SEO + Schema.org + Google Dataset Search Optimised

import { createReadClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ArrowUpRight, MapPin, Calendar, Users } from "lucide-react"
import { unstable_noStore } from "next/cache"

// ─── NO CACHING — always fresh from DB ───
export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

const PAGE_SIZE = 10
const BASE_URL = "https://www.upforge.org"

interface StartupRow {
  id: string; name: string; slug: string
  description?: string | null; logo_url?: string | null
  founders?: string | null; founded_year?: number | null
  category?: string | null; city?: string | null
  country_name?: string | null; country_code?: string | null
  is_featured?: boolean; ufrn?: string | null
}

interface PageProps {
  searchParams: Promise<{
    page?: string; q?: string; year?: string; sort?: string
    sector?: string; country?: string
  }>
}

// ─── DATA FETCHERS ───

async function getData(
  q: string, year: string, sort: string,
  cat: string, country: string, page: number
) {
  const sb = createReadClient()
  const from = (page - 1) * PAGE_SIZE
  let query = sb.from("startups")
    .select(
      "id,name,slug,description,logo_url,founders,founded_year,category,city,country_name,country_code,is_featured,ufrn",
      { count: "exact" }
    )
    .eq("status", "approved")

  if (q)       query = query.or(`name.ilike.%${q}%,description.ilike.%${q}%,founders.ilike.%${q}%,category.ilike.%${q}%,city.ilike.%${q}%`)
  if (year)    query = query.eq("founded_year", Number(year))
  if (cat)     query = query.eq("category", cat)
  if (country) query = query.eq("country_code", country)

  const col = sort === "year" ? "founded_year" : sort === "newest" ? "created_at" : "name"
  const { data, count, error } = await query
    .order("is_featured", { ascending: false })
    .order(col, { ascending: sort !== "newest" })
    .range(from, from + PAGE_SIZE - 1)

  if (error) console.error("[registry/global]", error.message)
  return { startups: (data ?? []) as StartupRow[], total: count ?? 0 }
}

async function getFilters() {
  const sb = createReadClient()
  const [{ data: yd }, { data: cd }, { data: ctd }] = await Promise.all([
    sb.from("startups").select("founded_year")
      .eq("status", "approved")
      .not("founded_year", "is", null)
      .gte("founded_year", 2010)
      .order("founded_year", { ascending: false }),
    sb.from("startups").select("category")
      .eq("status", "approved")
      .not("category", "is", null),
    sb.from("startups").select("country_code,country_name")
      .eq("status", "approved")
      .not("country_code", "is", null)
      .not("country_name", "is", null),
  ])

  const countryMap = new Map<string, string>()
  ;(ctd ?? []).forEach(r => {
    if (r.country_code && r.country_name && !countryMap.has(r.country_code)) {
      countryMap.set(r.country_code, r.country_name)
    }
  })
  const countries = [...countryMap.entries()]
    .map(([code, name]) => ({ code, name }))
    .sort((a, b) => a.name.localeCompare(b.name))

  return {
    years:     [...new Set((yd ?? []).map(r => r.founded_year as number))].filter(Boolean),
    cats:      [...new Set((cd ?? []).map(r => r.category as string))].filter(Boolean).sort(),
    countries,
  }
}

// ─── HELPERS ───

function buildPageUrl(page: number, extra?: Record<string, string>): string {
  const p = new URLSearchParams()
  if (extra?.q)       p.set("q", extra.q)
  if (extra?.year)    p.set("year", extra.year)
  if (extra?.sort && extra.sort !== "name") p.set("sort", extra.sort)
  if (extra?.sector)  p.set("sector", extra.sector)
  if (extra?.country) p.set("country", extra.country)
  if (page > 1)       p.set("page", String(page))
  const s = p.toString()
  return `${BASE_URL}/registry${s ? `?${s}` : ""}`
}

function buildDynamicTitle(sp: {
  q?: string; year?: string; sort?: string; sector?: string; country?: string; page?: string
}, total: number): string {
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  const pg = Number(sp?.page ?? 1)
  const pgSuffix = pg > 1 ? ` — Page ${pg}` : ""

  if (sp?.q)      return `"${sp.q}" Startup Search — Global Registry${pgSuffix} | UpForge`
  if (sp?.sector) return `${sp.sector} Startups — Global Registry${pgSuffix} | UpForge`
  if (sp?.country) return `${sp.country} Startups — Global Registry${pgSuffix} | UpForge`
  if (sp?.year)   return `Startups Founded ${sp.year} — Global Registry${pgSuffix} | UpForge`
  if (pg > 1)     return `Global Startup Registry — Page ${pg} | UpForge`
  return `Global Startup Registry 2026 — ${n}+ Verified Startups | UpForge`
}

function buildDynamicDescription(sp: {
  q?: string; year?: string; sort?: string; sector?: string; country?: string
}, total: number): string {
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  if (sp?.sector) return `Browse ${n}+ verified ${sp.sector} startups on UpForge Global Registry. Every listing manually reviewed and assigned a unique UFRN. Free to access forever.`
  if (sp?.country) return `Explore verified startups from ${sp.country} on UpForge Global Registry. ${n}+ listings, each with a unique UFRN identifier. Free to access.`
  if (sp?.year)   return `Discover ${n}+ startups founded in ${sp.year} on UpForge Global Registry. Every listing independently verified and assigned a UFRN.`
  if (sp?.q)      return `Search results for "${sp.q}" across ${n}+ verified global startups on UpForge Registry. Find founders, sectors, cities and more.`
  return `The open, independent, verified global registry of ${n}+ startups. Every listing is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Search by founder, sector, city, country, year. Free to access, forever.`
}

// ─── METADATA ───

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const { total } = await getData("", "", "name", "", "", 1)
  const page = Math.max(1, Number(sp?.page ?? 1))
  const isFiltered = !!(sp?.q || sp?.year || sp?.sector || sp?.country)
  const sort = sp?.sort ?? "name"

  const title       = buildDynamicTitle(sp ?? {}, total)
  const description = buildDynamicDescription(sp ?? {}, total)

  // ── Canonical ──
  const canonicalParams: Record<string, string> = {}
  if (sp?.q)       canonicalParams.q       = sp.q
  if (sp?.year)    canonicalParams.year     = sp.year
  if (sort !== "name") canonicalParams.sort = sort
  if (sp?.sector)  canonicalParams.sector   = sp.sector
  if (sp?.country) canonicalParams.country  = sp.country
  const canonicalUrl = buildPageUrl(page, canonicalParams)

  // ── Prev / Next ──
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const prevUrl = page > 1       ? buildPageUrl(page - 1, canonicalParams) : undefined
  const nextUrl = page < totalPages ? buildPageUrl(page + 1, canonicalParams) : undefined

  // ── Robots logic ──
  // page 1 unfiltered = index | filtered = noindex | page > 1 = index (paginated)
  const shouldIndex = !isFiltered || page > 1

  return {
    title,
    description,
    keywords: [
      "global startup registry", "verified startup database", "UFRN startup registry number",
      "open startup data", "startup proof of existence", "independent startup registry",
      "Indian startup founders 2026", "India unicorn founders", "upforge registry",
      "startup verification", "startup database", "global startup database 2026",
      "startup directory", "startup search", "founder registry",
    ],
    alternates: {
      canonical: canonicalUrl,
      ...(prevUrl || nextUrl ? {
        // rel prev/next handled via <link> tags in JSON-LD section below
        // Next.js Metadata API exposes these through alternates.types
        types: {
          ...(prevUrl ? { prev: prevUrl } : {}),
          ...(nextUrl ? { next: nextUrl } : {}),
        },
      } : {}),
      // hreflang — English default
      languages: {
        "en":    canonicalUrl,
        "en-US": canonicalUrl,
        "en-IN": canonicalUrl,
        "x-default": `${BASE_URL}/registry`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "UpForge Global Registry",
      images: [
        {
          url: sp?.sector
            ? `${BASE_URL}/og/sector-${encodeURIComponent((sp.sector ?? "").toLowerCase().replace(/\s+/g, "-"))}.png`
            : `${BASE_URL}/og/startup-default.png`,
          width: 1200, height: 630,
          alt: title,
          secureUrl: sp?.sector
            ? `${BASE_URL}/og/sector-${encodeURIComponent((sp.sector ?? "").toLowerCase().replace(/\s+/g, "-"))}.png`
            : `${BASE_URL}/og/startup-default.png`,
        },
        // Fallback OG image
        { url: `${BASE_URL}/og/startup-default.png`, width: 1200, height: 630, alt: "UpForge Global Startup Registry" },
      ],
      locale: "en",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@UpForgeHQ",
      creator: "@UpForgeHQ",
      images: [`${BASE_URL}/og/startup-default.png`],
    },
    robots: {
      index:  shouldIndex,
      follow: true,
      googleBot: {
        index:  shouldIndex,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
    other: {
      // Speakable hint for Google Assistant / voice search
      "speakable-css-selector": ".mast-h1,.mast-tagline,.results-q",
    },
  }
}

// ─── PAGE ───

export default async function RegistryPage({ searchParams }: PageProps) {

  unstable_noStore()

  const sp      = await searchParams
  const q       = sp?.q?.trim()       ?? ""
  const year    = sp?.year?.trim()    ?? ""
  const sort    = sp?.sort?.trim()    ?? "name"
  const cat     = sp?.sector?.trim()  ?? ""
  const country = sp?.country?.trim() ?? ""
  const page    = Math.max(1, Number(sp?.page ?? 1))

  const [{ startups, total }, { years, cats, countries }] = await Promise.all([
    getData(q, year, sort, cat, country, page),
    getFilters(),
  ])

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const isFiltered = !!(q || year || cat || country || (sort && sort !== "name"))

  const qs = (ov: Record<string, string | undefined>) => {
    const base: Record<string, string | undefined> = {
      q:       q       || undefined,
      year:    year    || undefined,
      sort:    sort !== "name" ? sort : undefined,
      sector:  cat     || undefined,
      country: country || undefined,
      page:    page > 1 ? String(page) : undefined,
    }
    const m = { ...base, ...ov }
    const p = new URLSearchParams()
    Object.entries(m).forEach(([k, v]) => { if (v) p.set(k, v) })
    const s = p.toString()
    return `/registry${s ? `?${s}` : ""}`
  }

  const pgHref = (p: number) =>
    qs({ page: p === 1 ? undefined : String(p) })

  const winSize  = Math.min(5, totalPages)
  const winStart =
    page <= 3 || totalPages <= 5
      ? 1
      : page >= totalPages - 2
      ? totalPages - 4
      : page - 2
  const pgNums = Array.from({ length: winSize }, (_, i) => winStart + i)

  const featured =
    page === 1 && !isFiltered
      ? startups.filter(s => s.is_featured).slice(0, 3)
      : []

  const featIds = new Set(featured.map(s => s.id))
  const grid =
    page === 1 && !isFiltered
      ? startups.filter(s => !featIds.has(s.id))
      : startups

  const baseNum = (page - 1) * PAGE_SIZE
  const activeFilterCount = [year, cat, country, sort !== "name" ? sort : ""].filter(Boolean).length

  // ─── Canonical URL (for JSON-LD) ───
  const canonicalParams: Record<string, string> = {}
  if (q)             canonicalParams.q       = q
  if (year)          canonicalParams.year    = year
  if (sort !== "name") canonicalParams.sort  = sort
  if (cat)           canonicalParams.sector  = cat
  if (country)       canonicalParams.country = country
  const canonicalUrl = buildPageUrl(page, canonicalParams)
  const prevUrl = page > 1          ? buildPageUrl(page - 1, canonicalParams) : undefined
  const nextUrl = page < totalPages  ? buildPageUrl(page + 1, canonicalParams) : undefined

  // ─── All startups on this page for schema ───
  const allPageStartups = [...featured, ...grid]

  // ─── SCHEMA BLOCKS ───

  // 1. Dataset (enhanced for Google Dataset Search)
  const datasetSchema = {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${BASE_URL}/registry#dataset`,
    name: "UpForge Global Startup Registry",
    alternateName: ["UpForge Registry", "Global Startup Database", "UFRN Registry"],
    description: `Open, verified, independent database of ${total.toLocaleString()}+ startups worldwide. Each startup is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Free to access forever.`,
    url: `${BASE_URL}/registry`,
    sameAs: [
      "https://www.upforge.in/registry",
      `${BASE_URL}/registry`,
    ],
    keywords: [
      "startups", "founders", "startup database", "UFRN", "startup registry",
      "verified startups", "global startups", "fintech", "edtech", "healthtech",
      "India startups", "startup verification", "2026 startups",
    ],
    temporalCoverage: "2010/..",
    spatialCoverage: {
      "@type": "Place",
      name: "Worldwide",
      geo: {
        "@type": "GeoShape",
        box: "-90 -180 90 180",
      },
    },
    creator: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "UpForge",
      url: BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "UpForge",
      url: BASE_URL,
    },
    license: "https://creativecommons.org/licenses/by/4.0/",
    isAccessibleForFree: true,
    measurementTechnique: "Manual review and editorial verification by UpForge editorial team",
    variableMeasured: [
      "Startup name", "Founders", "Year founded", "Sector", "Location", "UFRN identifier",
    ],
    distribution: [
      {
        "@type": "DataDownload",
        encodingFormat: "text/html",
        contentUrl: `${BASE_URL}/registry`,
      },
    ],
    includedInDataCatalog: {
      "@type": "DataCatalog",
      name: "UpForge Open Data",
      url: BASE_URL,
    },
  }

  // 2. Organization (with contactPoint)
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "UpForge",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: "https://www.upforge.in/logo.jpg",
      width: 400,
      height: 400,
    },
    sameAs: [
      "https://www.upforge.in",
      BASE_URL,
      "https://twitter.com/UpForgeHQ",
      "https://www.linkedin.com/company/upforge",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@upforge.in",
        url: "https://www.upforge.in/contact",
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "editorial",
        email: "registry@upforge.in",
        url: "https://www.upforge.in/submit",
        availableLanguage: "English",
      },
    ],
    foundingDate: "2024",
    areaServed: "Worldwide",
    description: "UpForge is the world's open, independent, verified global startup registry. Every listed startup receives a unique UFRN.",
  }

  // 3. WebSite with enhanced SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "UpForge Global Registry",
    url: BASE_URL,
    inLanguage: "en",
    potentialAction: [
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/registry?q={search_term_string}`,
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: true,
          valueName: "search_term_string",
        },
      },
      // Autocomplete / sector search
      {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${BASE_URL}/registry?sector={sector_name}`,
        },
        "query-input": {
          "@type": "PropertyValueSpecification",
          valueRequired: false,
          valueName: "sector_name",
        },
      },
    ],
  }

  // 4. CollectionPage with mainEntity
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${canonicalUrl}#cp`,
    name: buildDynamicTitle(sp ?? {}, total).replace(" | UpForge", ""),
    url: canonicalUrl,
    description: buildDynamicDescription(sp ?? {}, total),
    numberOfItems: total,
    inLanguage: "en",
    isPartOf: { "@id": `${BASE_URL}/#website` },
    about: { "@id": `${BASE_URL}/registry#dataset` },
    mainEntity: { "@id": `${canonicalUrl}#itemlist` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".mast-h1", ".mast-tagline", ".results-q", ".live-text"],
    },
  }

  // 5. ItemList — all startups shown on this page
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${canonicalUrl}#itemlist`,
    name: `Verified Startups — Page ${page}`,
    numberOfItems: allPageStartups.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: allPageStartups.map((s, idx) => ({
      "@type": "ListItem",
      position: baseNum + idx + 1,
      name: s.name,
      url: `https://www.upforge.in/startup/${s.slug}`,
      item: {
        "@type": "Organization",
        name: s.name,
        url: `https://www.upforge.in/startup/${s.slug}`,
        ...(s.logo_url ? { logo: { "@type": "ImageObject", url: s.logo_url } } : {}),
        ...(s.description ? { description: s.description.slice(0, 200) } : {}),
        ...(s.founders ? { founder: s.founders.split(/[,;&]/).map(f => ({ "@type": "Person", name: f.trim() })) } : {}),
        ...(s.founded_year ? { foundingDate: String(s.founded_year) } : {}),
        ...(s.city || s.country_name ? {
          location: {
            "@type": "Place",
            name: [s.city, s.country_name].filter(Boolean).join(", "),
            ...(s.country_name ? { address: { "@type": "PostalAddress", addressCountry: s.country_code ?? s.country_name } } : {}),
          },
        } : {}),
        ...(s.ufrn ? {
          identifier: {
            "@type": "PropertyValue",
            propertyID: "UFRN",
            name: "UpForge Registry Number",
            value: s.ufrn,
          },
        } : {}),
        ...(s.category ? { knowsAbout: s.category } : {}),
      },
    })),
  }

  // 6. SoftwareApplication — UpForge Registry platform itself
  const softwareAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${BASE_URL}/#app`,
    name: "UpForge Global Registry",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `${BASE_URL}/registry`,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    description: "The world's open, independent verified startup registry. Search 1,000+ startups globally. Every listing gets a unique UFRN.",
    screenshot: `${BASE_URL}/og/startup-default.png`,
    author: { "@id": `${BASE_URL}/#organization` },
    featureList: [
      "Global startup search", "UFRN assignment", "Sector filters",
      "Country filters", "Founded year filters", "Verified listings",
    ],
    isAccessibleForFree: true,
    inLanguage: "en",
  }

  // 7. BreadcrumbList (improved)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Global Registry", item: `${BASE_URL}/registry` },
      ...(cat ? [{ "@type": "ListItem", position: 3, name: cat, item: `${BASE_URL}/registry?sector=${encodeURIComponent(cat)}` }] : []),
      ...(country ? [{ "@type": "ListItem", position: 3, name: country, item: `${BASE_URL}/registry?country=${encodeURIComponent(country)}` }] : []),
      ...(page > 1 ? [{ "@type": "ListItem", position: (cat || country) ? 4 : 3, name: `Page ${page}`, item: canonicalUrl }] : []),
    ],
  }

  // 8. FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${BASE_URL}/registry#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a UFRN (UpForge Registry Number)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A UFRN (UpForge Registry Number) is a unique, permanent identifier assigned to every approved startup listed on the UpForge Global Registry. It serves as an official proof of existence, shareable on LinkedIn profiles, investor decks, pitch presentations, and press kits. Format example: UF-2026-IND-00001.",
        },
      },
      {
        "@type": "Question",
        name: "Is the UpForge Global Registry free to access and list on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The UpForge Global Registry is completely free — both to browse and to submit your startup. There are no fees, subscriptions, or hidden charges. Every approved startup receives a free UFRN, forever.",
        },
      },
      {
        "@type": "Question",
        name: "How does startup verification work on UpForge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every startup submitted to UpForge goes through a manual editorial review process. The team verifies the startup's existence, legitimacy, and basic information before approving the listing and assigning a UFRN. Listings marked as verified have been independently reviewed and confirmed.",
        },
      },
      {
        "@type": "Question",
        name: "How do I submit my startup to the UpForge Global Registry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Visit https://www.upforge.in/submit and fill in your startup details. The review process typically takes a few business days. Upon approval, your startup will appear in the global registry and receive a unique UFRN.",
        },
      },
      {
        "@type": "Question",
        name: "What countries are included in the UpForge Global Registry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The UpForge Global Registry accepts startups from all countries worldwide. You can filter the registry by country to discover startups from specific regions including India, USA, UK, Singapore, UAE, and many more.",
        },
      },
    ],
  }

  const allSchemas = [
    datasetSchema,
    orgSchema,
    websiteSchema,
    collectionSchema,
    itemListSchema,
    softwareAppSchema,
    breadcrumbSchema,
    faqSchema,
  ]

  return (
    <>
      {/* ── All JSON-LD schemas ── */}
      {allSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* ── Prev/Next link tags for pagination ── */}
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}

      {/* ── hreflang alternate links ── */}
      <link rel="alternate" hrefLang="en"      href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-US"   href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN"   href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/registry`} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        :root {
          --teal: #0D9488;
          --teal-dark: #0F766E;
          --teal-light: #5EEAD4;
          --ink: #0F1A1C;
          --parch: #F2F4F3;
          --parch-dark: #E8EDEC;
          --rule: #C4CCCB;
          --rule2: #D4DCDA;
          --muted: #4A6360;
          --accent: #0D9488;
          --gold: #C59A2E;
        }

        .page-root {
          min-height: 100vh;
          background: var(--parch);
          font-family: 'Georgia', 'Times New Roman', serif;
          display: flex;
          flex-direction: column;
        }
        .page-content { flex: 1; }

        @keyframes riseIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: none; }
        }
        .ri-0 { animation: riseIn 0.5s 0s ease both; }

        /* ─── HERO ─── */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, rgba(15,26,28,0.88) 0%, rgba(15,26,28,0.75) 100%);
          overflow: hidden; border-bottom: 1px solid var(--rule);
        }
        .hero-bg {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background-image: url('https://simplemaps.com/static/demos/resources/svg-library/svgs/world.svg');
          background-size: cover; background-position: center 30%;
          opacity: 0.2; z-index: 0;
        }
        .hero-bg::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(90deg, rgba(15,26,28,0.85) 0%, rgba(15,26,28,0.5) 50%, rgba(15,26,28,0.85) 100%);
        }
        .hero-section::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #0F766E 0%, #0D9488 50%, #5EEAD4 100%); z-index: 2;
        }
        .mast { position: relative; z-index: 2; }
        .mast-content { position: relative; z-index: 10; text-align: center; padding: 100px 24px 80px; }
        .mast-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: clamp(40px, 6vw, 64px); font-weight: 900;
          letter-spacing: -0.02em; color: white; line-height: 1.1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3); margin-bottom: 20px;
        }
        .mast-rule {
          display: block; width: 200px; height: 2px;
          background: linear-gradient(90deg, transparent, var(--teal), var(--teal-light), var(--teal), transparent);
          margin: 20px auto 24px;
        }
        .mast-tagline {
          font-family: Georgia, serif; font-size: 16px; color: rgba(255,255,255,0.92);
          font-style: italic; line-height: 1.7; max-width: 580px; margin: 0 auto 28px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }
        .live-badge {
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(255,255,255,0.12); backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.25); padding: 10px 28px; border-radius: 100px;
        }
        .live-dot {
          width: 8px; height: 8px; border-radius: 50%; background: var(--teal-light);
          animation: pulse 2s infinite;
        }
        .live-text { font-family: system-ui, sans-serif; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: white; }
        @keyframes pulse {
          0%   { box-shadow: 0 0 0 0 rgba(94,234,212,0.4); }
          70%  { box-shadow: 0 0 0 8px rgba(94,234,212,0); }
          100% { box-shadow: 0 0 0 0 rgba(94,234,212,0); }
        }

        /* ─── CATEGORY TABS ─── */
        .cat-tabs {
          display: flex; overflow-x: auto; border-bottom: 1px solid var(--rule);
          scrollbar-width: none; background: white; padding: 0 24px;
        }
        .cat-tabs::-webkit-scrollbar { display: none; }
        .cat-tab {
          flex-shrink: 0; padding: 14px 20px; font-family: system-ui, sans-serif;
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;
          color: #999; text-decoration: none; border-bottom: 2px solid transparent; transition: all 0.2s; white-space: nowrap;
        }
        .cat-tab:hover { color: var(--ink); }
        .cat-tab.on { color: var(--teal); border-bottom-color: var(--teal); }

        /* ─── TOOLBAR ─── */
        .toolbar {
          position: sticky; top: 0; z-index: 20;
          background: rgba(242,244,243,0.97); backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--rule);
        }
        .toolbar-inner { max-width: 1300px; margin: 0 auto; padding: 0 24px; }

        /* Search row */
        .t-search-row {
          display: flex; align-items: center; height: 52px; background: white;
          border-radius: 12px; margin: 14px 0 10px; border: 1px solid var(--rule2);
        }
        .t-icon { padding: 0 14px; color: #CCC; font-size: 15px; flex-shrink: 0; }
        .t-inp { flex: 1; border: none; background: transparent; font-size: 14px; font-style: italic; color: var(--ink); outline: none; padding: 0; min-width: 0; }
        .t-inp::placeholder { color: #CCC; font-size: 13px; }
        .t-btn { height: 40px; padding: 0 24px; background: var(--ink); color: #fff; border: none; font-size: 9px; font-weight: 800; letter-spacing: 0.16em; text-transform: uppercase; cursor: pointer; flex-shrink: 0; border-radius: 10px; margin-right: 8px; transition: background 0.2s; }
        .t-btn:hover { background: var(--teal); }

        /* ─── FILTER TOGGLE BUTTON ─── */
        .filter-toggle-row {
          display: flex; align-items: center; gap: 10px; margin-bottom: 10px;
        }
        .filter-toggle-btn {
          display: inline-flex; align-items: center; gap: 8px;
          height: 36px; padding: 0 16px;
          background: white; border: 1px solid var(--rule2);
          border-radius: 10px; cursor: pointer;
          font-family: system-ui, sans-serif; font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--muted);
          transition: all 0.2s; flex-shrink: 0;
        }
        .filter-toggle-btn:hover { border-color: var(--teal); color: var(--teal); }
        .filter-toggle-btn.active { border-color: var(--teal); color: var(--teal); background: #F0FDFB; }
        .filter-toggle-chevron {
          width: 14px; height: 14px; flex-shrink: 0;
          transition: transform 0.25s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .filter-toggle-btn.active .filter-toggle-chevron { transform: rotate(180deg); }
        .filter-count-badge {
          background: var(--teal); color: white; border-radius: 100px;
          font-size: 9px; font-weight: 800; padding: 1px 7px; letter-spacing: 0; min-width: 18px; text-align: center;
        }

        /* Sort quick links (always visible) */
        .sort-quick {
          display: flex; align-items: center; gap: 6px; margin-left: auto;
        }
        .t-sort { padding: 0 10px; font-size: 10px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; color: #BBB; text-decoration: none; flex-shrink: 0; white-space: nowrap; }
        .t-sort.on { color: var(--teal); font-weight: 800; }
        .t-div { width: 1px; height: 20px; background: var(--rule2); flex-shrink: 0; }

        /* ─── COLLAPSIBLE FILTER PANEL ─── */
        .filter-panel-wrap {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin-bottom 0.25s ease;
          opacity: 0;
          margin-bottom: 0;
        }
        .filter-panel-wrap.open {
          max-height: 240px;
          opacity: 1;
          margin-bottom: 12px;
        }
        .filter-panel {
          background: white; border: 1px solid var(--rule2); border-radius: 12px;
          padding: 16px 18px; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;
        }
        .fp-group { display: flex; flex-direction: column; gap: 4px; }
        .fp-label { font-size: 8.5px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.18em; color: #BBB; font-family: system-ui, sans-serif; }
        .fp-sel {
          height: 34px; border: 1px solid var(--rule2); border-radius: 8px;
          background: white; font-size: 11px; color: var(--muted);
          padding: 0 10px; cursor: pointer; min-width: 140px;
          font-family: system-ui, sans-serif;
          transition: border-color 0.2s;
        }
        .fp-sel:focus { outline: none; border-color: var(--teal); }
        .fp-sel.active { border-color: var(--teal); color: var(--teal); background: #F0FDFB; }
        .fp-divider { width: 1px; height: 40px; background: var(--rule2); flex-shrink: 0; align-self: center; }
        .t-clear {
          font-size: 9px; font-weight: 700; color: #DC2626; text-decoration: none; flex-shrink: 0;
          padding: 6px 12px; border: 1px solid rgba(220,38,38,0.25); border-radius: 8px;
          transition: all 0.2s; background: rgba(220,38,38,0.04);
          font-family: system-ui, sans-serif;
        }
        .t-clear:hover { background: rgba(220,38,38,0.1); }

        /* ─── RESULTS BAR ─── */
        .results-bar { max-width: 1300px; margin: 0 auto; padding: 16px 24px; display: flex; align-items: center; gap: 14px; border-bottom: 1px solid var(--rule2); }
        .results-q { font-size: 14px; font-weight: 700; color: var(--ink); font-style: italic; }
        .results-n { font-size: 12px; color: var(--muted); }
        .results-rule { flex: 1; height: 1px; background: var(--rule2); }
        .results-pg { font-size: 11px; color: #AAA; font-family: system-ui, sans-serif; }

        /* ─── MAIN LAYOUT ─── */
        .main-wrap { max-width: 1300px; margin: 0 auto; padding: 32px 24px 56px; }
        .main-grid { display: grid; grid-template-columns: 1fr 300px; gap: 40px; align-items: start; }
        @media (max-width: 1000px) { .main-grid { grid-template-columns: 1fr; } .rg-aside { display: none; } }

        .sh { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; }
        .sh-l { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3em; color: #BBB; font-family: system-ui, sans-serif; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* ─── FEATURED CARDS ─── */
        .feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 44px; }
        @media (max-width: 800px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .feat-grid { grid-template-columns: 1fr; } }
        .feat-card { background: white; border-radius: 16px; text-decoration: none; transition: all 0.25s; overflow: hidden; border: 1px solid var(--rule2); }
        .feat-card:hover { transform: translateY(-4px); box-shadow: 0 16px 32px -8px rgba(0,0,0,0.12); border-color: var(--teal); }
        .feat-img-wrap { width: 100%; aspect-ratio: 16/9; position: relative; background: var(--parch-dark); overflow: hidden; }
        .feat-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .feat-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%); }
        .feat-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px 18px; }
        .feat-sector { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(255,255,255,0.65); margin-bottom: 4px; }
        .feat-company { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: #fff; line-height: 1.2; }
        .feat-body { padding: 16px 18px; }
        .feat-desc { font-size: 12px; color: #3D5452; font-style: italic; line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 12px; }
        .feat-foot { display: flex; align-items: center; justify-content: space-between; }
        .feat-chips { font-size: 11px; color: #AAA; display: flex; gap: 10px; }

        /* ─── STARTUP LIST CARDS ─── */
        .startup-list { display: flex; flex-direction: column; }
        .s-row {
          display: flex; background: white; text-decoration: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          border: 1px solid var(--rule2); border-top: none; overflow: hidden; position: relative;
        }
        .s-row:first-child { border-top: 1px solid var(--rule2); border-radius: 16px 16px 0 0; }
        .s-row:last-child  { border-radius: 0 0 16px 16px; }
        .s-row:only-child  { border-radius: 16px; border-top: 1px solid var(--rule2); }
        .s-row:hover { border-color: var(--teal); box-shadow: 0 4px 20px rgba(13,148,136,0.1); z-index: 1; }
        .s-row:hover + .s-row { border-top: 1px solid var(--rule2); }

        .s-accent-strip { width: 3px; flex-shrink: 0; background: var(--rule2); transition: background 0.2s; }
        .s-row:hover .s-accent-strip { background: var(--teal); }
        .s-accent-strip.top3 { background: var(--teal); }

        .s-body { flex: 1; padding: 20px 22px; display: flex; align-items: flex-start; gap: 18px; min-width: 0; }
        .s-logo-wrap { width: 52px; height: 52px; flex-shrink: 0; border-radius: 12px; border: 1px solid var(--rule2); background: var(--parch-dark); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .s-logo-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .s-logo-initial { font-size: 20px; font-weight: 700; color: #CCC; font-family: 'Playfair Display', serif; }
        .s-content { flex: 1; min-width: 0; }

        .s-top-line { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 6px; }
        .s-name { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--ink); line-height: 1.25; }
        .s-row:hover .s-name { color: var(--teal-dark); }
        .s-badges { display: flex; align-items: center; gap: 6px; flex-wrap: wrap; }
        .s-badge-cat { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); background: var(--parch-dark); padding: 2px 8px; border-radius: 4px; font-family: system-ui, sans-serif; white-space: nowrap; }
        .s-badge-verified { display: inline-flex; align-items: center; gap: 3px; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--teal); font-family: system-ui, sans-serif; }

        /* ─── COUNTRY CODE BADGE ─── */
        .s-badge-cc {
          display: inline-flex; align-items: center; gap: 3px;
          font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em;
          color: white; background: var(--teal-dark);
          padding: 2px 7px; border-radius: 4px; font-family: system-ui, sans-serif; white-space: nowrap;
        }

        .s-desc { font-size: 13px; color: #3D5452; font-style: italic; line-height: 1.55; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 10px; }
        .s-meta-row { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .s-meta-item { display: flex; align-items: center; gap: 5px; font-size: 11px; color: var(--muted); font-family: system-ui, sans-serif; }
        .s-meta-item svg { opacity: 0.6; }
        .s-ufrn { font-family: monospace; font-size: 9px; font-weight: 700; color: var(--gold); letter-spacing: 0.05em; background: #FDFDF5; border: 1px solid #E8DFA0; padding: 2px 8px; border-radius: 4px; }
        .s-country { font-size: 9px; font-weight: 600; color: var(--teal); background: #F0FDFB; border: 1px solid rgba(13,148,136,0.25); padding: 2px 8px; border-radius: 4px; font-family: system-ui, sans-serif; }

        .s-right-col { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; padding: 20px 20px 20px 0; gap: 12px; flex-shrink: 0; }
        .s-rank-num { font-family: 'Playfair Display', serif; font-size: 22px; font-weight: 900; color: var(--rule); line-height: 1; transition: color 0.2s; }
        .s-row:hover .s-rank-num { color: var(--teal); }
        .s-rank-num.top3 { color: var(--teal); }
        .s-arrow { width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; border-radius: 8px; background: var(--parch-dark); transition: all 0.2s; }
        .s-row:hover .s-arrow { background: var(--teal); }
        .s-row:hover .s-arrow svg { color: white !important; }

        @media (max-width: 600px) {
          .s-right-col { padding: 14px 14px 14px 0; }
          .s-rank-num { font-size: 18px; }
          .s-body { padding: 14px 0 14px 14px; gap: 12px; }
          .s-name { font-size: 15px; }
          .s-desc { font-size: 12px; }
          .s-logo-wrap { width: 44px; height: 44px; }
        }

        .empty-state { text-align: center; padding: 80px 32px; border: 1px solid var(--rule2); background: white; border-radius: 16px; }

        /* ─── PAGINATION ─── */
        .pag { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 44px; padding-top: 28px; border-top: 1px solid var(--rule2); }
        .pag-btn { padding: 9px 20px; font-size: 10px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; border: 1px solid var(--rule); background: white; color: var(--muted); text-decoration: none; border-radius: 10px; }
        .pag-btn:hover { border-color: var(--teal); color: var(--teal); }
        .pag-btn.dis { opacity: 0.35; pointer-events: none; }
        .pag-num { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: 700; border: 1px solid var(--rule); text-decoration: none; color: var(--muted); border-radius: 10px; }
        .pag-num:hover { border-color: var(--teal); color: var(--teal); }
        .pag-num.on { background: var(--teal); color: white; border-color: var(--teal); }

        /* ─── SIDEBAR ─── */
        .rg-aside { display: flex; flex-direction: column; gap: 20px; }
        .aside-box { border-radius: 16px; border: 1px solid var(--rule2); background: white; padding: 22px; }
        .aside-box.dk { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); border-color: transparent; }
        .aside-box.tl { border-color: rgba(13,148,136,0.3); background: #F0FDFB; }
        .aside-ey { font-size: 8.5px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.28em; color: #AAA; margin-bottom: 12px; font-family: system-ui, sans-serif; }
        .aside-box.dk .aside-ey { color: rgba(94,234,212,0.7); }
        .aside-box.tl .aside-ey { color: var(--teal-dark); }
        .aside-h { font-family: 'Playfair Display', serif; font-size: 17px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .aside-box.dk .aside-h { color: white; }
        .aside-p { font-size: 12.5px; color: #3D5452; font-style: italic; line-height: 1.6; margin-bottom: 16px; }
        .aside-btn { display: block; text-align: center; font-size: 9.5px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.14em; background: var(--teal); color: white; padding: 13px; text-decoration: none; border-radius: 10px; }
        .aside-btn:hover { background: var(--teal-dark); }
        .aside-list { list-style: none; padding: 0; margin: 0; }
        .aside-list li { border-bottom: 1px solid var(--rule2); }
        .aside-list li:last-child { border-bottom: none; }
        .aside-list a { display: flex; align-items: center; justify-content: space-between; padding: 10px 0; font-size: 12.5px; color: #3D5452; text-decoration: none; font-style: italic; }
        .aside-list a:hover { color: var(--teal); }

        /* ─── CTA / FOOTER LINKS ─── */
        .cta-block { background: linear-gradient(135deg, var(--ink) 0%, #1A2A2C 100%); border-radius: 20px; padding: 36px 44px; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 24px; margin-top: 48px; }
        .cta-ey { font-size: 8.5px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(94,234,212,0.7); margin-bottom: 8px; font-family: system-ui, sans-serif; }
        .cta-h { font-family: 'Playfair Display', serif; font-size: 19px; font-weight: 700; color: white; margin-bottom: 6px; }
        .cta-p { font-size: 12px; color: rgba(255,255,255,0.45); font-style: italic; }
        .cta-btn { flex-shrink: 0; display: inline-flex; align-items: center; gap: 10px; background: var(--teal); color: white; padding: 13px 28px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; text-decoration: none; border-radius: 40px; transition: all 0.2s; }
        .cta-btn:hover { background: var(--teal-dark); transform: translateY(-2px); }

        .links-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 36px; padding-top: 36px; border-top: 1px solid var(--rule2); }
        @media (max-width: 700px) { .links-grid { grid-template-columns: repeat(2, 1fr); } }
        .link-card { padding: 12px 14px; border-radius: 12px; border: 1px solid var(--rule2); background: white; text-decoration: none; transition: all 0.2s; }
        .link-card:hover { border-color: var(--teal); transform: translateY(-1px); }
        .link-title { font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); display: flex; align-items: center; gap: 5px; margin-bottom: 4px; font-family: system-ui, sans-serif; }
        .link-desc { font-size: 10px; color: #AAA; font-family: system-ui, sans-serif; }

        @media (max-width: 768px) {
          .mast-content { padding: 120px 20px 70px !important; }
          .mast-tagline br { display: none; }
          .toolbar-inner { padding: 0 16px; }
          .results-bar { padding: 14px 16px; }
          .main-wrap { padding: 24px 16px 40px; }
          .cta-block { padding: 24px 20px; }
          .filter-panel { gap: 10px; }
          .fp-sel { min-width: 120px; }
        }
        @media (max-width: 480px) {
          .mast-content { padding: 100px 16px 60px !important; }
          .mast-h1 { font-size: 36px; }
          .sort-quick { display: none; }
        }
      `}</style>

      <div className="page-root">
        <Navbar />

        <div className="page-content">

          {/* ── Hero ── */}
          <div className="hero-section">
            <div className="hero-bg" />
            <div className="mast">
              <div className="mast-content ri-0">
                <h1 className="mast-h1">Global Registry</h1>
                <span className="mast-rule" />
                <p className="mast-tagline">
                  The world's open, independent registry of verified startups —<br />free, structured, permanent.
                </p>
                <div className="live-badge">
                  <span className="live-dot" />
                  <span className="live-text">Live · {total.toLocaleString()} Profiles · UFRN on Approval</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Category Tabs ── */}
          <nav className="cat-tabs" aria-label="Browse by sector">
            <span style={{ fontSize: 9, color: "#CCC", textTransform: "uppercase", letterSpacing: ".2em", padding: "14px 8px 14px 0", flexShrink: 0, fontFamily: "system-ui, sans-serif" }}>
              Browse:
            </span>
            <Link href="/registry" className={`cat-tab${!cat && !q && !country ? " on" : ""}`}>All</Link>
            {cats.slice(0, 12).map(c => (
              <Link
                key={c}
                href={`/registry?sector=${encodeURIComponent(c)}${q ? `&q=${encodeURIComponent(q)}` : ""}${country ? `&country=${encodeURIComponent(country)}` : ""}`}
                className={`cat-tab${cat === c ? " on" : ""}`}
              >
                {c}
              </Link>
            ))}
            {cats.length > 12 && <Link href="/registry/sectors" className="cat-tab">More →</Link>}
          </nav>

          {/* ── Toolbar ── */}
          <div className="toolbar" id="rg-toolbar">
            <div className="toolbar-inner">

              {/* Search row */}
              <form action="/registry" method="GET" className="t-search-row" id="search-form">
                {year    && <input type="hidden" name="year"    value={year} />}
                {cat     && <input type="hidden" name="sector"  value={cat} />}
                {country && <input type="hidden" name="country" value={country} />}
                {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} />}
                <span className="t-icon" aria-hidden="true">🌍</span>
                <input
                  type="search" name="q" defaultValue={q} className="t-inp"
                  placeholder="Search startups, founders, sectors, cities, countries…"
                  aria-label="Search global registry" autoComplete="off"
                />
                <button type="submit" className="t-btn">Search</button>
              </form>

              {/* Filter toggle row */}
              <div className="filter-toggle-row">
                <button
                  type="button"
                  className={`filter-toggle-btn${activeFilterCount > 0 ? " active" : ""}`}
                  id="filter-toggle-btn"
                  aria-expanded="false"
                  aria-controls="filter-panel"
                >
                  <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                    <line x1="2" y1="4" x2="14" y2="4"/><line x1="4" y1="8" x2="12" y2="8"/><line x1="6" y1="12" x2="10" y2="12"/>
                  </svg>
                  Filters
                  {activeFilterCount > 0 && <span className="filter-count-badge">{activeFilterCount}</span>}
                  <span className="filter-toggle-chevron">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="2,3 5,7 8,3"/>
                    </svg>
                  </span>
                </button>

                {/* Sort — always visible */}
                <div className="sort-quick">
                  <span className="t-div" />
                  <Link href={qs({ sort: "name",   page: undefined })} className={`t-sort${sort === "name"   ? " on" : ""}`}>A–Z</Link>
                  <Link href={qs({ sort: "newest", page: undefined })} className={`t-sort${sort === "newest" ? " on" : ""}`}>Newest</Link>
                  <Link href={qs({ sort: "year",   page: undefined })} className={`t-sort${sort === "year"   ? " on" : ""}`}>Founded</Link>
                  {isFiltered && <Link href="/registry" className="t-clear">✕ Clear</Link>}
                </div>
              </div>

              {/* Collapsible filter panel */}
              <div className="filter-panel-wrap" id="filter-panel" role="region" aria-label="Filters">
                <div className="filter-panel">

                  <div className="fp-group">
                    <label className="fp-label" htmlFor="rg-year-sel">Year</label>
                    <select className={`fp-sel${year ? " active" : ""}`} id="rg-year-sel" aria-label="Filter by founded year">
                      <option value="">Any Year</option>
                      {years.map(yr => (
                        <option key={yr} value={String(yr)} selected={year === String(yr)}>{yr}</option>
                      ))}
                    </select>
                  </div>

                  <div className="fp-group">
                    <label className="fp-label" htmlFor="rg-cat-sel">Sector</label>
                    <select className={`fp-sel${cat ? " active" : ""}`} id="rg-cat-sel" aria-label="Filter by sector">
                      <option value="">All Sectors</option>
                      {cats.map(c => (
                        <option key={c} value={c} selected={cat === c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  {/* ── Country filter ── */}
                  <div className="fp-group">
                    <label className="fp-label" htmlFor="rg-country-sel">Country</label>
                    <select className={`fp-sel${country ? " active" : ""}`} id="rg-country-sel" aria-label="Filter by country">
                      <option value="">All Countries</option>
                      {countries.map(ct => (
                        <option key={ct.code} value={ct.code} selected={country === ct.code}>
                          {ct.name} ({ct.code})
                        </option>
                      ))}
                    </select>
                  </div>

                  {isFiltered && (
                    <>
                      <div className="fp-divider" />
                      <Link href="/registry" className="t-clear">✕ Clear all</Link>
                    </>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* ── Results bar ── */}
          <div className="results-bar">
            <span className="results-q">
              {q ? `"${q}"` : cat ? cat : country ? (countries.find(c => c.code === country)?.name ?? country) : year ? `Est. ${year}` : "All Startups"}
            </span>
            <span className="results-n">{total.toLocaleString()} profiles</span>
            <span className="results-rule" />
            <span className="results-pg">Page {page} of {totalPages || 1}</span>
          </div>

          <div className="main-wrap">
            <div className="main-grid">
              <div>

                {/* Featured */}
                {featured.length > 0 && (
                  <section>
                    <div className="sh">
                      <span style={{ color: "var(--teal)", fontSize: 12 }}>◆</span>
                      <span className="sh-l">Featured Startups</span>
                      <div className="sh-r" />
                    </div>
                    <div className="feat-grid">
                      {featured.map((s, fi) => (
                        <a key={s.id} href={`https://www.upforge.in/startup/${s.slug}`} className="feat-card">
                          <div className="feat-img-wrap">
                            {s.logo_url
                              ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                              : (
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", background: "var(--parch-dark)" }}>
                                  <span style={{ fontSize: 32, fontWeight: 700, color: "#CCC", fontFamily: "'Playfair Display', serif" }}>{s.name.charAt(0)}</span>
                                </div>
                              )
                            }
                            <div className="feat-overlay" />
                            <div className="feat-caption">
                              <div className="feat-sector">{s.category ?? "Startup"}</div>
                              <div className="feat-company">{s.name}</div>
                            </div>
                          </div>
                          <div className="feat-body">
                            <p className="feat-desc">{s.description?.slice(0, 100) ?? "Building for tomorrow."}</p>
                            <div className="feat-foot">
                              <div className="feat-chips">
                                {s.founded_year && <span>📅 {s.founded_year}</span>}
                                {s.city && <span>📍 {s.city}</span>}
                                {s.country_code && <span>🌍 {s.country_code}</span>}
                              </div>
                              <ArrowUpRight size={13} style={{ color: "var(--rule)" }} />
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  </section>
                )}

                {/* Grid list */}
                {grid.length > 0 ? (
                  <section>
                    {featured.length > 0 && (
                      <div className="sh">
                        <span className="sh-l">All Startups</span>
                        <div className="sh-r" />
                      </div>
                    )}
                    <div className="startup-list">
                      {grid.map((s, idx) => {
                        const rank   = baseNum + idx + 1
                        const isTop3 = rank <= 3
                        return (
                          <a key={s.id} href={`https://www.upforge.in/startup/${s.slug}`} className="s-row">
                            <div className={`s-accent-strip${isTop3 ? " top3" : ""}`} />
                            <div className="s-body">
                              <div className="s-logo-wrap">
                                {s.logo_url
                                  ? <Image src={s.logo_url} alt={s.name} width={52} height={52} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                  : <span className="s-logo-initial">{s.name.charAt(0)}</span>
                                }
                              </div>
                              <div className="s-content">
                                <div className="s-top-line">
                                  <span className="s-name">{s.name}</span>
                                  <div className="s-badges">
                                    {s.category && <span className="s-badge-cat">{s.category}</span>}
                                    {s.country_code && <span className="s-badge-cc">{s.country_code}</span>}
                                    <span className="s-badge-verified">
                                      <svg width="9" height="9" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 6L5 9L10 3" />
                                      </svg>
                                      UFRN
                                    </span>
                                  </div>
                                </div>
                                {s.description && <p className="s-desc">{s.description.slice(0, 130)}</p>}
                                <div className="s-meta-row">
                                  {s.founders && (
                                    <div className="s-meta-item"><Users size={11} /><span>{s.founders}</span></div>
                                  )}
                                  {s.founded_year && (
                                    <div className="s-meta-item"><Calendar size={11} /><span>{s.founded_year}</span></div>
                                  )}
                                  {s.city && (
                                    <div className="s-meta-item">
                                      <MapPin size={11} />
                                      <span>
                                        {s.city}{s.country_name && s.country_name !== "India" ? `, ${s.country_name}` : ""}
                                      </span>
                                    </div>
                                  )}
                                  {s.country_name && s.country_name !== "India" && (
                                    <span className="s-country">🌍 {s.country_name}</span>
                                  )}
                                  {s.ufrn && <span className="s-ufrn">{s.ufrn}</span>}
                                </div>
                              </div>
                            </div>
                            <div className="s-right-col">
                              <span className={`s-rank-num${isTop3 ? " top3" : ""}`}>
                                {rank < 10 ? `0${rank}` : rank}
                              </span>
                              <div className="s-arrow">
                                <ArrowUpRight size={13} style={{ color: "#CCC" }} />
                              </div>
                            </div>
                          </a>
                        )
                      })}
                    </div>
                  </section>
                ) : (
                  <div className="empty-state">
                    <span style={{ fontSize: 48, color: "var(--rule)", display: "block", marginBottom: 16 }}>🌐</span>
                    <p style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, fontFamily: "'Playfair Display', serif" }}>No startups found</p>
                    <p style={{ fontSize: 13, color: "#3D5452", fontStyle: "italic" }}>
                      {q ? `Nothing matched "${q}".` : "Try adjusting your filters."}
                    </p>
                    <Link href="/registry" style={{ display: "inline-block", background: "var(--teal)", color: "white", padding: "11px 24px", borderRadius: "40px", fontSize: 11, marginTop: 20, textDecoration: "none", fontFamily: "system-ui, sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Clear filters
                    </Link>
                  </div>
                )}

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav className="pag" aria-label="Registry pagination">
                    <Link href={pgHref(page - 1)} className={`pag-btn${page === 1 ? " dis" : ""}`} aria-disabled={page === 1} rel={page > 1 ? "prev" : undefined}>← Prev</Link>
                    {pgNums.map(p => (
                      <Link key={p} href={pgHref(p)} className={`pag-num${p === page ? " on" : ""}`} aria-current={p === page ? "page" : undefined}>{p}</Link>
                    ))}
                    <Link href={pgHref(page + 1)} className={`pag-btn${page === totalPages ? " dis" : ""}`} aria-disabled={page === totalPages} rel={page < totalPages ? "next" : undefined}>Next →</Link>
                  </nav>
                )}
              </div>

              {/* ── Sidebar ── */}
              <aside className="rg-aside" style={{ position: "sticky", top: 80 }}>
                <div className="aside-box dk">
                  <p className="aside-ey">✨ Get Your UFRN</p>
                  <p className="aside-h">Got a startup to list?</p>
                  <p className="aside-p">Get independently verified. Receive your global UFRN. Free forever.</p>
                  <a href="https://www.upforge.in/submit" className="aside-btn">Submit Your Startup →</a>
                </div>
                <div className="aside-box tl">
                  <p className="aside-ey">📌 What is a UFRN?</p>
                  <p className="aside-h">Your startup's global ID</p>
                  <p className="aside-p" style={{ marginBottom: 0 }}>
                    A unique, permanent identifier assigned to every approved startup. Shareable on LinkedIn, investor decks, and press kits.
                  </p>
                  <div style={{ marginTop: 14, fontFamily: "monospace", fontSize: 12, fontWeight: 700, color: "var(--gold)", background: "white", padding: "8px 12px", borderRadius: 8, textAlign: "center", border: "1px solid rgba(197,154,46,0.3)" }}>
                    UF-2026-IND-00001
                  </div>
                </div>
                {cats.length > 0 && (
                  <div className="aside-box">
                    <p className="aside-ey">📂 Browse by Sector</p>
                    <ul className="aside-list">
                      {cats.slice(0, 8).map(c => (
                        <li key={c}>
                          <Link href={`/registry?sector=${encodeURIComponent(c)}`}>
                            <span>{c}</span><span style={{ color: "#CCC" }}>→</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {countries.length > 0 && (
                  <div className="aside-box">
                    <p className="aside-ey">🌍 Browse by Country</p>
                    <ul className="aside-list">
                      {countries.slice(0, 8).map(ct => (
                        <li key={ct.code}>
                          <Link href={`/registry?country=${encodeURIComponent(ct.code)}`}>
                            <span>{ct.name}</span>
                            <span style={{ fontFamily: "monospace", fontSize: 10, color: "var(--teal)", fontWeight: 700 }}>{ct.code}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </aside>
            </div>

            {/* CTA */}
            <div className="cta-block">
              <div>
                <p className="cta-ey">🌍 UpForge Global Registry</p>
                <p className="cta-h">Your founder story starts with a verified profile.</p>
                <p className="cta-p">Get your UFRN. Free forever. Trusted by investors and press worldwide.</p>
              </div>
              <a href="https://www.upforge.in/submit" className="cta-btn">
                List Free — Get UFRN <ArrowRight size={13} />
              </a>
            </div>

            {/* Footer links */}
            <div className="links-grid">
              <a href="/registry" className="link-card"><span className="link-title">Global Registry →</span><span className="link-desc">Full verified database</span></a>
              <a href="https://www.upforge.in/" className="link-card"><span className="link-title">Indian Startup Founders →</span><span className="link-desc">Founder Chronicle 2026</span></a>
              <a href="https://www.upforge.in/blog" className="link-card"><span className="link-title">The Forge Blog →</span><span className="link-desc">Startup intelligence</span></a>
              <a href="https://www.upforge.in/submit" className="link-card"><span className="link-title">Submit Your Startup →</span><span className="link-desc">Get listed + UFRN free</span></a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Client-side JS ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function () {

          // ── Filter panel toggle ──────────────────────────────────────
          var btn   = document.getElementById('filter-toggle-btn');
          var panel = document.getElementById('filter-panel');
          if (btn && panel) {
            var hasActive = ${activeFilterCount > 0 ? "true" : "false"};
            if (hasActive) {
              panel.classList.add('open');
              btn.classList.add('active');
              btn.setAttribute('aria-expanded', 'true');
            }
            btn.addEventListener('click', function () {
              var isOpen = panel.classList.toggle('open');
              btn.classList.toggle('active', isOpen);
              btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
          }

          // ── URL builder ─────────────────────────────────────────────
          function buildUrl(params) {
            var p = new URLSearchParams();
            if (params.q)       p.set('q',       params.q);
            if (params.year)    p.set('year',    params.year);
            if (params.sector)  p.set('sector',  params.sector);
            if (params.country) p.set('country', params.country);
            if (params.sort && params.sort !== 'name') p.set('sort', params.sort);
            var s = p.toString();
            return '/registry' + (s ? '?' + s : '');
          }

          function getCurrentParams() {
            var u = new URLSearchParams(window.location.search);
            return {
              q:       u.get('q')       || '',
              year:    u.get('year')    || '',
              sector:  u.get('sector')  || '',
              country: u.get('country') || '',
              sort:    u.get('sort')    || 'name',
            };
          }

          // ── Select change handlers ───────────────────────────────────
          var yearSel    = document.getElementById('rg-year-sel');
          var catSel     = document.getElementById('rg-cat-sel');
          var countrySel = document.getElementById('rg-country-sel');

          if (yearSel) yearSel.addEventListener('change', function () {
            var c = getCurrentParams(); c.year = this.value;
            window.location.href = buildUrl(c);
          });
          if (catSel) catSel.addEventListener('change', function () {
            var c = getCurrentParams(); c.sector = this.value;
            window.location.href = buildUrl(c);
          });
          if (countrySel) countrySel.addEventListener('change', function () {
            var c = getCurrentParams(); c.country = this.value;
            window.location.href = buildUrl(c);
          });

          // ── Search form ──────────────────────────────────────────────
          var searchForm = document.getElementById('search-form');
          if (searchForm) searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var c = getCurrentParams();
            c.q = this.querySelector('input[name="q"]').value;
            window.location.href = buildUrl(c);
          });

        })();
      `}} />
    </>
  )
}
