// app/startup/[slug]/page.tsx — WORLD-CLASS ENTITY PAGE v2

import { createReadClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"

const BASE_URL = "https://www.upforge.org"
const MARKETING_BASE = "https://www.upforge.in"
const DEFAULT_OG = `${MARKETING_BASE}/og/startup-default.png`

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── DATA FETCHERS ───

async function getApprovedStartup(slug: string): Promise<Startup | null> {
  const supabase = createReadClient()
  const { data, error } = await supabase
    .from("startups")
    .select(`
      id, name, slug, description, website, logo_url, founders,
      founded_year, category, city, status, is_featured, is_sponsored,
      linkedin_url, twitter_url, instagram_url, ufrn,
      country_code, country_name
    `)
    .eq("slug", slug)
    .eq("status", "approved")
    .single()

  if (error || !data) return null
  return data as Startup
}

async function getRelatedStartups(
  category: string,
  currentSlug: string
): Promise<Pick<Startup, "name" | "slug" | "description" | "logo_url" | "category">[]> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("name, slug, description, logo_url, category")
    .eq("category", category)
    .eq("status", "approved")
    .neq("slug", currentSlug)
    .limit(4)
  return data ?? []
}

export async function generateStaticParams() {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("slug")
    .eq("status", "approved")
  return (data ?? []).map((row) => ({ slug: row.slug }))
}

export const revalidate = 86400
export const dynamicParams = false

// ─── HELPERS ───

function buildTitle(startup: Startup): string {
  const sector = startup.category ?? "Startup"
  const location = startup.city
    ? `, ${startup.city}`
    : startup.country_name
    ? `, ${startup.country_name}`
    : ""
  const ufrn = startup.ufrn ? ` · ${startup.ufrn}` : ""
  return `${startup.name} — ${sector}${location}${ufrn} | UpForge`
}

function buildDescription(startup: Startup): string {
  if (startup.description && startup.description.length > 60) {
    const base = startup.description.slice(0, 200).trimEnd()
    const suffix = startup.ufrn ? ` Registry ID: ${startup.ufrn}.` : ""
    return `${base}${base.endsWith(".") ? "" : "."}${suffix}`
  }
  const parts: string[] = []
  parts.push(`${startup.name} is a verified startup`)
  if (startup.category) parts[0] += ` in the ${startup.category} sector`
  if (startup.city) parts[0] += `, based in ${startup.city}`
  if (startup.country_name && startup.country_name !== startup.city) parts[0] += `, ${startup.country_name}`
  parts[0] += "."
  if (startup.founders) parts.push(`Founded by ${startup.founders}.`)
  if (startup.founded_year) parts.push(`Established ${startup.founded_year}.`)
  if (startup.ufrn) parts.push(`UpForge Registry Number: ${startup.ufrn}.`)
  parts.push("Listed on the UpForge Global Startup Registry.")
  return parts.join(" ")
}

function buildKeywords(startup: Startup): string[] {
  const kw: string[] = [
    startup.name,
    `${startup.name} startup`,
    `${startup.name} founders`,
  ]
  if (startup.category) {
    kw.push(startup.category, `${startup.category} startups`, `${startup.category} companies`)
  }
  if (startup.city) kw.push(`${startup.city} startups`, `startups in ${startup.city}`)
  if (startup.country_name) kw.push(`${startup.country_name} startups`)
  if (startup.founders) {
    startup.founders.split(/[,;&]/).forEach(f => {
      const name = f.trim()
      if (name) kw.push(name, `${name} founder`)
    })
  }
  if (startup.founded_year) kw.push(`${startup.founded_year} startup`)
  if (startup.ufrn) kw.push(startup.ufrn, "UFRN", "UpForge registry")
  kw.push("startup profile", "verified startup", "UpForge", "startup registry")
  return [...new Set(kw)].filter(Boolean)
}

// ─── METADATA ───

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const startup = await getApprovedStartup(slug)

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description: "The requested startup profile could not be found on the UpForge Global Startup Registry.",
      robots: { index: false, follow: false },
    }
  }

  const canonicalUrl = `${BASE_URL}/startup/${slug}`
  const marketingUrl = `${MARKETING_BASE}/startup/${slug}`
  const title       = buildTitle(startup)
  const description = buildDescription(startup)
  const keywords    = buildKeywords(startup)

  // OG image: prefer logo if hosted and absolute, fallback to default
  const ogImage =
    startup.logo_url && startup.logo_url.startsWith("http")
      ? startup.logo_url
      : DEFAULT_OG

  return {
    title,
    description,
    keywords,
    category: startup.category ?? undefined,

    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en":       canonicalUrl,
        "en-US":    canonicalUrl,
        "en-IN":    canonicalUrl,
        "x-default": canonicalUrl,
      },
    },

    openGraph: {
      title,
      description,
      url: marketingUrl,
      siteName: "UpForge Global Registry",
      type: "profile",
      images: [
        { url: ogImage, width: 1200, height: 630, alt: `${startup.name} — UpForge Registry` },
        { url: DEFAULT_OG, width: 1200, height: 630, alt: "UpForge Global Startup Registry" },
      ],
      locale: "en",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@UpForgeHQ",
      creator: "@UpForgeHQ",
      images: [ogImage],
    },

    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },

    other: {
      lastModified: new Date().toISOString(),
      "speakable-css-selector": ".startup-name,.startup-description,.startup-sector",
      ...(startup.ufrn && {
        "upforge:registry-id":  startup.ufrn,
        "upforge:ufrn-url":     `${BASE_URL}/ufrn/${startup.ufrn}`,
      }),
    },
  }
}

// ─── SCHEMA BUILDERS ───

function buildOrganizationSchema(startup: Startup, canonicalUrl: string) {
  const sameAs = [
    startup.linkedin_url,
    startup.twitter_url,
    startup.instagram_url,
    startup.website,
    startup.ufrn ? `${BASE_URL}/ufrn/${startup.ufrn}` : null,
    `${MARKETING_BASE}/startup/${startup.slug}`,
  ].filter(Boolean)

  const founderPersons = startup.founders
    ? startup.founders.split(/[,;&]/).map((f) => {
        const name = f.trim()
        return name
          ? { "@type": "Person", name, jobTitle: "Founder", worksFor: { "@id": `${canonicalUrl}#organization` } }
          : null
      }).filter(Boolean)
    : undefined

  const identifiers: object[] = []
  if (startup.ufrn) {
    identifiers.push(
      { "@type": "PropertyValue", propertyID: "UFRN", name: "UpForge Registry Number", value: startup.ufrn, url: `${BASE_URL}/ufrn/${startup.ufrn}` },
      { "@type": "PropertyValue", propertyID: "serialNumber", value: startup.ufrn },
    )
  }

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${canonicalUrl}#organization`,
    name: startup.name,
    url: startup.website ?? canonicalUrl,
    description: buildDescription(startup),
    ...(startup.logo_url ? {
      logo: { "@type": "ImageObject", url: startup.logo_url, contentUrl: startup.logo_url },
      image: startup.logo_url,
    } : {}),
    foundingDate: startup.founded_year?.toString(),
    industry: startup.category,
    knowsAbout: startup.category,
    ...(founderPersons && founderPersons.length > 0 ? { founder: founderPersons } : {}),
    areaServed: startup.country_name ?? "Worldwide",
    ...(startup.city || startup.country_code ? {
      address: {
        "@type": "PostalAddress",
        ...(startup.city ? { addressLocality: startup.city } : {}),
        ...(startup.country_name ? { addressRegion: startup.country_name } : {}),
        ...(startup.country_code ? { addressCountry: startup.country_code } : {}),
      },
      location: {
        "@type": "Place",
        name: [startup.city, startup.country_name].filter(Boolean).join(", "),
        address: {
          "@type": "PostalAddress",
          ...(startup.city ? { addressLocality: startup.city } : {}),
          ...(startup.country_code ? { addressCountry: startup.country_code } : {}),
        },
      },
    } : {}),
    sameAs,
    ...(identifiers.length > 0 ? { identifier: identifiers } : {}),
    isPartOf: {
      "@type": "DataCatalog",
      "@id": `${BASE_URL}/registry#catalog`,
      name: "UpForge Global Startup Registry",
      url: `${BASE_URL}/registry`,
    },
    subjectOf: { "@id": `${canonicalUrl}#dataset` },
    mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "UpForge",
      url: BASE_URL,
      logo: { "@type": "ImageObject", url: `${MARKETING_BASE}/logo.jpg` },
    },
  }
}

function buildFounderPersonSchemas(startup: Startup, canonicalUrl: string): object[] {
  if (!startup.founders) return []
  return startup.founders
    .split(/[,;&]/)
    .map((f) => f.trim())
    .filter(Boolean)
    .map((name, idx) => ({
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${canonicalUrl}#founder-${idx + 1}`,
      name,
      jobTitle: "Founder",
      worksFor: {
        "@type": "Organization",
        "@id": `${canonicalUrl}#organization`,
        name: startup.name,
      },
      ...(startup.founded_year ? { startDate: String(startup.founded_year) } : {}),
      ...(startup.city || startup.country_name ? {
        homeLocation: {
          "@type": "Place",
          name: [startup.city, startup.country_name].filter(Boolean).join(", "),
        },
      } : {}),
    }))
}

function buildDefinedTermSchema(startup: Startup) {
  if (!startup.ufrn) return null
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "@id": `${BASE_URL}/ufrn/${startup.ufrn}#term`,
    name: startup.ufrn,
    termCode: startup.ufrn,
    description: `${startup.ufrn} is the UpForge Registry Number assigned to ${startup.name}.`,
    url: `${BASE_URL}/ufrn/${startup.ufrn}`,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      "@id": `${BASE_URL}/registry#ufrn-system`,
      name: "UpForge Registry Number System",
      url: `${BASE_URL}/registry`,
      description: "UFRN (UpForge Registry Number) is a globally unique identifier assigned to every verified startup on UpForge.",
    },
  }
}

function buildDatasetSchema(startup: Startup, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": `${canonicalUrl}#dataset`,
    name: `${startup.name} — UpForge Registry Data Record`,
    description: startup.description ?? `Verified startup data record for ${startup.name} on the UpForge Global Startup Registry.`,
    url: canonicalUrl,
    ...(startup.ufrn ? {
      identifier: startup.ufrn,
      sameAs: `${BASE_URL}/ufrn/${startup.ufrn}`,
    } : {}),
    creator: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "UpForge", url: BASE_URL },
    publisher: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "UpForge", url: BASE_URL },
    keywords: buildKeywords(startup),
    license: { "@type": "CreativeWork", name: "CC BY 4.0", url: "https://creativecommons.org/licenses/by/4.0/" },
    isAccessibleForFree: true,
    dateModified: new Date().toISOString(),
    about: { "@id": `${canonicalUrl}#organization` },
    isPartOf: {
      "@type": "DataCatalog",
      "@id": `${BASE_URL}/registry#catalog`,
      name: "UpForge Global Startup Registry",
      url: `${BASE_URL}/registry`,
    },
    variableMeasured: ["Startup name", "Founders", "Year founded", "Sector", "Location", "UFRN"],
    measurementTechnique: "Manual review and editorial verification by UpForge editorial team",
  }
}

function buildWebPageSchema(startup: Startup, canonicalUrl: string) {
  const title       = buildTitle(startup)
  const description = buildDescription(startup)
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", "@id": `${BASE_URL}/#website`, name: "UpForge Global Registry", url: BASE_URL },
    about: { "@id": `${canonicalUrl}#organization` },
    dateModified: new Date().toISOString(),
    mainEntity: { "@id": `${canonicalUrl}#organization` },
    publisher: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "UpForge", url: BASE_URL },
    breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".startup-name", ".startup-description", ".startup-sector", ".startup-location"],
    },
    potentialAction: {
      "@type": "ReadAction",
      target: [canonicalUrl, `${MARKETING_BASE}/startup/${startup.slug}`],
    },
  }
}

function buildBreadcrumbSchema(startup: Startup, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "UpForge", item: BASE_URL },
      { "@type": "ListItem", position: 2, name: "Global Registry", item: `${BASE_URL}/registry` },
      ...(startup.category ? [{
        "@type": "ListItem",
        position: 3,
        name: startup.category,
        item: `${BASE_URL}/registry?sector=${encodeURIComponent(startup.category)}`,
      }] : []),
      {
        "@type": "ListItem",
        position: startup.category ? 4 : 3,
        name: startup.name,
        item: canonicalUrl,
      },
    ],
  }
}

function buildFAQSchema(startup: Startup, canonicalUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${canonicalUrl}#faq`,
    mainEntity: [
      {
        "@type": "Question",
        name: `What is ${startup.name}'s UFRN?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: startup.ufrn
            ? `${startup.name}'s UpForge Registry Number (UFRN) is ${startup.ufrn}. This is a globally unique, permanent identifier assigned by UpForge after independent verification. It can be verified at ${BASE_URL}/ufrn/${startup.ufrn}.`
            : `${startup.name} is listed on the UpForge Global Startup Registry. A UFRN (UpForge Registry Number) is a unique identifier assigned to every verified startup. Visit ${BASE_URL}/registry to learn more.`,
        },
      },
      {
        "@type": "Question",
        name: "What is a UFRN (UpForge Registry Number)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A UFRN (UpForge Registry Number) is a unique, permanent identifier assigned to every approved startup listed on the UpForge Global Registry. It serves as an official proof of existence and is shareable on LinkedIn, investor decks, pitch presentations, and press kits. Format: UF-YYYY-CC-NNNNN.",
        },
      },
      {
        "@type": "Question",
        name: "How does startup verification work on UpForge?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every startup submitted to UpForge goes through a manual editorial review process. The UpForge team verifies the startup's existence, legitimacy, and core information before approving the listing and assigning a unique UFRN. Verified listings are marked with the UFRN badge.",
        },
      },
      {
        "@type": "Question",
        name: `How can I claim or update the ${startup.name} profile on UpForge?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `If you are a founder or representative of ${startup.name}, you can contact UpForge to claim or update this profile. Visit ${MARKETING_BASE}/contact or email registry@upforge.in. Claiming your profile allows you to update details, add social links, and display your verified UFRN badge.`,
        },
      },
      {
        "@type": "Question",
        name: "Is the UpForge Global Startup Registry free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: `Yes. The UpForge Global Startup Registry is completely free — both to browse and to submit your startup. There are no fees, subscriptions, or hidden charges. Every approved startup receives a free UFRN. Submit your startup at ${MARKETING_BASE}/submit.`,
        },
      },
    ],
  }
}

function buildSearchActionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    name: "UpForge Global Registry",
    url: BASE_URL,
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
}

function buildPublisherOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: "UpForge",
    url: BASE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${MARKETING_BASE}/logo.jpg`,
      width: 400,
      height: 400,
    },
    sameAs: [
      MARKETING_BASE,
      BASE_URL,
      "https://twitter.com/UpForgeHQ",
      "https://www.linkedin.com/company/upforge",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "hello@upforge.in",
        url: `${MARKETING_BASE}/contact`,
        availableLanguage: ["English", "Hindi"],
      },
      {
        "@type": "ContactPoint",
        contactType: "editorial",
        email: "registry@upforge.in",
        url: `${MARKETING_BASE}/submit`,
        availableLanguage: "English",
      },
    ],
    description: "UpForge is the world's open, independent, verified global startup registry.",
    foundingDate: "2024",
    areaServed: "Worldwide",
  }
}

// ─── PAGE ───

export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params

  const startup = await getApprovedStartup(slug)
  if (!startup) notFound()

  const canonicalUrl = `${BASE_URL}/startup/${slug}`

  const relatedStartups = startup.category
    ? await getRelatedStartups(startup.category, slug)
    : []

  const founderSchemas    = buildFounderPersonSchemas(startup, canonicalUrl)
  const definedTermSchema = buildDefinedTermSchema(startup)

  const allSchemas: object[] = [
    buildPublisherOrgSchema(),
    buildSearchActionSchema(),
    buildOrganizationSchema(startup, canonicalUrl),
    buildDatasetSchema(startup, canonicalUrl),
    buildWebPageSchema(startup, canonicalUrl),
    buildBreadcrumbSchema(startup, canonicalUrl),
    buildFAQSchema(startup, canonicalUrl),
    ...founderSchemas,
    ...(definedTermSchema ? [definedTermSchema] : []),
  ]

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">

      {/* ── All JSON-LD schemas ── */}
      {allSchemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}

      {/* ── hreflang link tags ── */}
      <link rel="alternate" hrefLang="en"        href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-US"     href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN"     href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* ── Internal linking signals ── */}
      <nav className="sr-only" aria-label="Site navigation">
        <a href={`${BASE_URL}/registry`}>Global Startup Registry</a>
        {startup.category && (
          <a href={`${BASE_URL}/registry?sector=${encodeURIComponent(startup.category)}`}>
            {startup.category} Startups
          </a>
        )}
        {startup.country_code && (
          <a href={`${BASE_URL}/registry?country=${encodeURIComponent(startup.country_code)}`}>
            Startups in {startup.country_name ?? startup.country_code}
          </a>
        )}
        <a href={`${BASE_URL}/registry?sort=newest`}>Latest Verified Startups</a>
        <a href={`${MARKETING_BASE}/submit`}>Submit Your Startup</a>
        <a href={`${MARKETING_BASE}/about`}>About UpForge</a>
      </nav>

      <Navbar />

      <main className="flex-1">

        {startup.is_sponsored && (
          <div className="bg-black text-white text-center py-3 text-xs uppercase tracking-[0.3em]">
            Sponsored Startup · Featured by UpForge
          </div>
        )}

        <StartupDetail
          startup={startup}
          relatedStartups={relatedStartups}
          profileUrl={canonicalUrl}
        />

      </main>

      <Footer />

    </div>
  )
}
