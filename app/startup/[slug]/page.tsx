// app/startup/[slug]/page.tsx
import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"

// ---------------------------------------------------------------------------
// TYPES
// ---------------------------------------------------------------------------
interface PageProps {
  // Next.js 15 requires params to be a Promise
  params: Promise<{ slug: string }>
}

// ---------------------------------------------------------------------------
// DATA FETCHER
// Single source of truth. Called by both generateMetadata and the page.
// Only returns APPROVED startups — prevents rejected/pending pages
// from being publicly accessible or indexed.
// ---------------------------------------------------------------------------
async function getApprovedStartup(slug: string): Promise<Startup | null> {
  const supabase = await createClient()
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
      instagram_url
    `)
    .eq("slug", slug)
    .eq("status", "approved")   // CRITICAL: only approved startups
    .single()

  if (error || !data) return null
  return data as Startup
}

// ---------------------------------------------------------------------------
// RELATED STARTUPS FETCHER
// Fetches up to 4 approved startups in the same category, excluding self.
// Drives internal linking — critical for crawl depth and topical authority.
// ---------------------------------------------------------------------------
async function getRelatedStartups(
  category: string,
  currentSlug: string
): Promise<Pick<Startup, "name" | "slug" | "description" | "logo_url" | "category">[]> {
  const supabase = await createClient()
  const { data } = await supabase
    .from("startups")
    .select("name, slug, description, logo_url, category")
    .eq("category", category)
    .eq("status", "approved")
    .neq("slug", currentSlug)
    .limit(4)

  return data ?? []
}

// ---------------------------------------------------------------------------
// STATIC PARAMS
// Pre-renders all approved startup pages at build time.
// Result: near-zero TTFB on startup profile pages.
// Remove this function if you want fully dynamic (on-demand) rendering.
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  const supabase = await createClient()
  const { data } = await supabase
    .from("startups")
    .select("slug")
    .eq("status", "approved")

  return (data ?? []).map((row) => ({ slug: row.slug }))
}

// Revalidate static pages every 24 hours
// Ensures newly approved startups appear without a full redeploy
export const revalidate = 86400

// ---------------------------------------------------------------------------
// METADATA
// No Supabase double-query — reuses getApprovedStartup()
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const startup = await getApprovedStartup(slug)

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description:
        "The requested startup profile could not be found in the UpForge registry.",
      robots: { index: false, follow: false },
    }
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`

  const title = `${startup.name} — ${startup.category ?? "Indian Startup"} | UpForge`

  const description =
    startup.description ??
    `Discover the verified profile of ${startup.name} on UpForge — India's independent startup registry. Explore founding story, team, and category insights.`

  // Determine OG image:
  // Prefer a dedicated OG image if available, fall back to a branded default.
  // Do NOT use logo_url — logos are square and too small for OG previews.
  const ogImage = `https://www.upforge.in/og/startup-default.png`

  return {
    title,
    description,
    alternates: {
      canonical: profileUrl,
    },
    openGraph: {
      title,
      description,
      url: profileUrl,
      siteName: "UpForge",
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${startup.name} — Verified Startup Profile on UpForge`,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
      },
    },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS
// ---------------------------------------------------------------------------

function buildOrganizationSchema(startup: Startup, profileUrl: string) {
  const sameAs = [
    startup.linkedin_url,
    startup.twitter_url,
    startup.instagram_url,
    startup.website,
  ].filter((url): url is string => typeof url === "string" && url.length > 0)

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${profileUrl}#organization`,
    name: startup.name,
    description: startup.description ?? undefined,
    url: startup.website ?? profileUrl,
    ...(startup.logo_url && {
      logo: {
        "@type": "ImageObject",
        url: startup.logo_url,
      },
    }),
    ...(startup.founded_year && {
      foundingDate: startup.founded_year.toString(),
    }),
    ...(startup.category && { industry: startup.category }),
    ...(startup.city && {
      address: {
        "@type": "PostalAddress",
        addressLocality: startup.city,
        addressCountry: "IN",
      },
    }),
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    ...(sameAs.length > 0 && { sameAs }),
  }
}

function buildWebPageSchema(startup: Startup, profileUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profileUrl}#webpage`,
    url: profileUrl,
    name: `${startup.name} — Verified Startup Profile | UpForge`,
    description: startup.description ?? undefined,
    inLanguage: "en-IN",
    isPartOf: {
      "@id": "https://www.upforge.in/#website",
    },
    about: {
      "@id": `${profileUrl}#organization`,
    },
    breadcrumb: {
      "@id": `${profileUrl}#breadcrumb`,
    },
    dateModified: new Date().toISOString(),
  }
}

function buildBreadcrumbSchema(startup: Startup, profileUrl: string) {
  const items = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.upforge.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Startups",
      item: "https://www.upforge.in/startups",
    },
  ]

  if (startup.category) {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: startup.category,
      item: `https://www.upforge.in/startups/${startup.category.toLowerCase().replace(/\s+/g, "-")}`,
    })
    items.push({
      "@type": "ListItem",
      position: 4,
      name: startup.name,
      item: profileUrl,
    })
  } else {
    items.push({
      "@type": "ListItem",
      position: 3,
      name: startup.name,
      item: profileUrl,
    })
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${profileUrl}#breadcrumb`,
    itemListElement: items,
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------------------------
export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params

  // Single query — no double fetch
  const startup = await getApprovedStartup(slug)
  if (!startup) notFound()

  const profileUrl = `https://www.upforge.in/startup/${slug}`

  // Fetch related startups in parallel (non-blocking — page renders even if this fails)
  const relatedStartups = startup.category
    ? await getRelatedStartups(startup.category, slug)
    : []

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">

      {/* Structured Data — three separate scripts for clean Google parsing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildOrganizationSchema(startup, profileUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildWebPageSchema(startup, profileUrl)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildBreadcrumbSchema(startup, profileUrl)),
        }}
      />

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
          profileUrl={profileUrl}
        />
      </main>

      <Footer />
    </div>
  )
}
