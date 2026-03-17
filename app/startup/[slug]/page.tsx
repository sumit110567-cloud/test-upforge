// app/startup/[slug]/page.tsx
import { createReadClient } from "@/lib/supabase/server" // Switched to Read Client
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
// ---------------------------------------------------------------------------
async function getApprovedStartup(slug: string): Promise<Startup | null> {
  const supabase = createReadClient() // Use createReadClient for SSG/Metadata
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
    .eq("status", "approved")
    .single()

  if (error || !data) return null
  return data as Startup
}

// ---------------------------------------------------------------------------
// RELATED STARTUPS FETCHER
// ---------------------------------------------------------------------------
async function getRelatedStartups(
  category: string,
  currentSlug: string
): Promise<Pick<Startup, "name" | "slug" | "description" | "logo_url" | "category">[]> {
  const supabase = createReadClient() // Use createReadClient for internal linking
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
// ---------------------------------------------------------------------------
export async function generateStaticParams() {
  const supabase = createReadClient() // Crucial fix for build-time execution
  const { data } = await supabase
    .from("startups")
    .select("slug")
    .eq("status", "approved")

  return (data ?? []).map((row) => ({ slug: row.slug }))
}

export const revalidate = 86400

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const startup = await getApprovedStartup(slug)

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description: "The requested startup profile could not be found.",
      robots: { index: false, follow: false },
    }
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`
  const title = `${startup.name} — ${startup.category ?? "Indian Startup"} | UpForge`
  const ogImage = `https://www.upforge.in/og/startup-default.png`

  return {
    title,
    description: startup.description ?? `Verified profile of ${startup.name} on UpForge.`,
    alternates: { canonical: profileUrl },
    openGraph: {
      title,
      url: profileUrl,
      images: [{ url: ogImage, width: 1200, height: 630, type: "image/png" }],
    },
    twitter: { card: "summary_large_image", images: [ogImage] },
  }
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA BUILDERS
// ---------------------------------------------------------------------------
function buildOrganizationSchema(startup: Startup, profileUrl: string) {
  const sameAs = [startup.linkedin_url, startup.twitter_url, startup.instagram_url, startup.website]
    .filter((url): url is string => typeof url === "string" && url.length > 0)
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${profileUrl}#organization`,
    name: startup.name,
    url: startup.website ?? profileUrl,
    logo: startup.logo_url,
    foundingDate: startup.founded_year?.toString(),
    industry: startup.category,
    sameAs,
  }
}

function buildWebPageSchema(startup: Startup, profileUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profileUrl}#webpage`,
    url: profileUrl,
    name: `${startup.name} Profile | UpForge`,
    dateModified: new Date().toISOString(),
  }
}

function buildBreadcrumbSchema(startup: Startup, profileUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.upforge.in" },
      { "@type": "ListItem", position: 2, name: "Startups", item: "https://www.upforge.in/startups" },
      { "@type": "ListItem", position: 3, name: startup.name, item: profileUrl },
    ],
  }
}

// ---------------------------------------------------------------------------
// PAGE COMPONENT
// ---------------------------------------------------------------------------
export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params
  const startup = await getApprovedStartup(slug)
  if (!startup) notFound()

  const profileUrl = `https://www.upforge.in/startup/${slug}`
  const relatedStartups = startup.category ? await getRelatedStartups(startup.category, slug) : []

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(startup, profileUrl)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebPageSchema(startup, profileUrl)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(startup, profileUrl)) }}
      />

      <Navbar />
      <main className="flex-1">
        {startup.is_sponsored && (
          <div className="bg-black text-white text-center py-3 text-xs uppercase tracking-[0.3em]">
            Sponsored Startup · Featured by UpForge
          </div>
        )}
        <StartupDetail startup={startup} relatedStartups={relatedStartups} profileUrl={profileUrl} />
      </main>
      <Footer />
    </div>
  )
}
