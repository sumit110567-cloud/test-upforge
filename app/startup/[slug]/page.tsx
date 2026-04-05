// app/startup/[slug]/page.tsx

import { createReadClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getApprovedStartup(slug: string): Promise<Startup | null> {
  const supabase = createReadClient()

  const { data, error } = await supabase
    .from("startups")
    .select(`
      id,
      name,
      slug,
      description,
      website,
      logo_url,
      founders,
      founded_year,
      category,
      city,
      status,
      is_featured,
      is_sponsored,
      linkedin_url,
      twitter_url,
      instagram_url,
      ufrn,
      country_code,
      country_name
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
): Promise<
  Pick<
    Startup,
    "name" | "slug" | "description" | "logo_url" | "category"
  >[]
> {
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

  return (data ?? []).map((row) => ({
    slug: row.slug,
  }))
}

export const revalidate = 86400
export const dynamicParams = false

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params

  const startup = await getApprovedStartup(slug)

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description:
        "The requested startup profile could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    }
  }

  const canonicalUrl = `https://www.upforge.org/startup/${slug}`
  const marketingUrl = `https://www.upforge.in/startup/${slug}`

  const ufrnSuffix = startup.ufrn
    ? ` · ${startup.ufrn}`
    : ""

  const title = `${startup.name} — ${
    startup.category ?? "Startup"
  }${ufrnSuffix} | UpForge`

  const description =
    startup.description ??
    `Verified profile of ${startup.name} on the UpForge Global Startup Registry.${
      startup.ufrn
        ? ` Registry ID: ${startup.ufrn}.`
        : ""
    }`

  const ogImage =
    "https://www.upforge.in/og/startup-default.png"

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      title,
      description,
      url: marketingUrl,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      images: [ogImage],
    },

    other: {
      lastModified: new Date().toISOString(),

      ...(startup.ufrn && {
        "upforge:registry-id": startup.ufrn,
        "upforge:ufrn-url": `https://www.upforge.org/ufrn/${startup.ufrn}`,
      }),
    },
  }
}

function buildDefinedTermSchema(
  startup: Startup
) {
  if (!startup.ufrn) return null

  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",

    "@id": `https://www.upforge.org/ufrn/${startup.ufrn}#term`,

    name: startup.ufrn,

    termCode: startup.ufrn,

    inDefinedTermSet: {
      "@type": "DefinedTermSet",

      "@id": "https://www.upforge.org/registry#ufrn-system",

      name: "UpForge Registry Number System",

      url: "https://www.upforge.org/registry",

      description:
        "UFRN (UpForge Registry Number) is a globally unique identifier assigned to verified startups.",
    },

    url: `https://www.upforge.org/ufrn/${startup.ufrn}`,

    description: `${startup.ufrn} is the UpForge Registry Number for ${startup.name}.`,
  }
}

function buildOrganizationSchema(
  startup: Startup,
  canonicalUrl: string
) {
  const sameAs = [
    startup.linkedin_url,
    startup.twitter_url,
    startup.instagram_url,
    startup.website,
    startup.ufrn
      ? `https://www.upforge.org/ufrn/${startup.ufrn}`
      : null,
  ].filter(Boolean)

  const identifiers = startup.ufrn
    ? [
        {
          "@type": "PropertyValue",
          propertyID: "UFRN",
          value: startup.ufrn,
          url: `https://www.upforge.org/ufrn/${startup.ufrn}`,
        },
        {
          "@type": "PropertyValue",
          propertyID: "serialNumber",
          value: startup.ufrn,
        },
        {
          "@type": "PropertyValue",
          propertyID: "shortCode",
          value: startup.ufrn.split("-").pop(),
          url: canonicalUrl,
        },
      ]
    : undefined

  return {
    "@context": "https://schema.org",

    "@type": "Organization",

    "@id": `${canonicalUrl}#organization`,

    name: startup.name,

    url: startup.website ?? canonicalUrl,

    logo: startup.logo_url
      ? {
          "@type": "ImageObject",
          url: startup.logo_url,
        }
      : undefined,

    foundingDate:
      startup.founded_year?.toString(),

    industry: startup.category,

    areaServed: {
      "@type": "Place",
      name:
        startup.country_name ??
        "Worldwide",
    },

    address: startup.country_code
      ? {
          "@type": "PostalAddress",
          addressCountry:
            startup.country_code,
        }
      : undefined,

    sameAs,

    ...(identifiers && {
      identifier: identifiers,
    }),
  }
}

function buildDatasetSchema(
  startup: Startup,
  canonicalUrl: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "Dataset",

    "@id": `${canonicalUrl}#dataset`,

    name: `${startup.name} — UpForge Registry Profile`,

    description:
      startup.description ??
      `Verified startup data record for ${startup.name}.`,

    url: canonicalUrl,

    ...(startup.ufrn && {
      sameAs: `https://www.upforge.org/ufrn/${startup.ufrn}`,
    }),

    creator: {
      "@type": "Organization",
      name: "UpForge",
      url: "https://www.upforge.org",
    },

    keywords: [
      startup.name,
      startup.category ?? "",
      startup.city ?? "",
      startup.ufrn ?? "",
      "startup registry",
      "UpForge",
      "UFRN",
    ].filter(Boolean),

    license: {
      "@type": "CreativeWork",
      name: "CC BY 4.0",
      url:
        "https://creativecommons.org/licenses/by/4.0/",
    },

    dateModified:
      new Date().toISOString(),

    ...(startup.ufrn && {
      identifier: startup.ufrn,
    }),

    isPartOf: {
      "@type": "DataCatalog",

      "@id": "https://www.upforge.org/registry#catalog",

      name: "UpForge Global Startup Registry",

      url: "https://www.upforge.org/registry",
    },
  }
}

function buildWebPageSchema(
  startup: Startup,
  canonicalUrl: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "ProfilePage",

    "@id": `${canonicalUrl}#webpage`,

    url: canonicalUrl,

    name: `${startup.name} Profile | UpForge`,

    inLanguage: "en-US",

    dateModified:
      new Date().toISOString(),

    mainEntity: {
      "@id": `${canonicalUrl}#organization`,
    },
  }
}

function buildBreadcrumbSchema(
  startup: Startup,
  canonicalUrl: string
) {
  return {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item:
          "https://www.upforge.org",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Registry",
        item:
          "https://www.upforge.org/registry",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: startup.name,
        item: canonicalUrl,
      },
    ],
  }
}

export default async function StartupPage({
  params,
}: PageProps) {
  const { slug } = await params

  const startup =
    await getApprovedStartup(slug)

  if (!startup) notFound()

  const canonicalUrl = `https://www.upforge.org/startup/${slug}`

  const relatedStartups =
    startup.category
      ? await getRelatedStartups(
          startup.category,
          slug
        )
      : []

  const definedTermSchema =
    buildDefinedTermSchema(startup)

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">

      {definedTermSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html:
              JSON.stringify(
                definedTermSchema
              ),
          }}
        />
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              buildOrganizationSchema(
                startup,
                canonicalUrl
              )
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              buildDatasetSchema(
                startup,
                canonicalUrl
              )
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              buildWebPageSchema(
                startup,
                canonicalUrl
              )
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              buildBreadcrumbSchema(
                startup,
                canonicalUrl
              )
            ),
        }}
      />

      <nav className="sr-only">
        <a href="/registry">
          Startup Registry
        </a>
        <a href="/about">
          About UpForge
        </a>
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
