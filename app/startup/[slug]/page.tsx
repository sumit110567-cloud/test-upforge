
// app/startup/[slug]/page.tsx

import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"

interface PageProps {
  params: { slug: string }
}

/*
DYNAMIC METADATA
SEO optimized for search + social previews
*/

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = params
  const supabase = await createClient()

  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description:
        "The requested startup profile could not be found in the UpForge registry.",
    }
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`

  const title = `${startup.name} | Official Startup Profile | UpForge`

  const description =
    startup.description ||
    `View the verified public startup profile of ${startup.name} on UpForge.`

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
          url: startup.logo_url || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${startup.name} Official Profile`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [startup.logo_url || "/og-image.jpg"],
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

/*
STARTUP PROFILE PAGE
*/

export default async function StartupPage({ params }: PageProps) {
  const { slug } = params
  const supabase = await createClient()

  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) {
    notFound()
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`

  /*
  VALID STRUCTURED DATA
  */

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": profileUrl + "#organization",
    name: startup.name,
    description: startup.description,
    url: startup.website || profileUrl,
    logo: startup.logo_url,
    foundingDate: startup.founded_year?.toString(),
    industry: startup.category,
    areaServed: "India",
    sameAs: [
      startup.linkedin_url,
      startup.twitter_url,
      startup.instagram_url,
    ].filter(Boolean),
    memberOf: {
      "@type": "Organization",
      name: "UpForge Founder Registry",
      url: "https://www.upforge.in",
    },
  }

  return (
    <div className="flex min-h-screen flex-col bg-[#FAFAF9]">

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Navbar />

      <main className="flex-1">

        {startup.is_sponsored && (
          <div className="bg-black text-white text-center py-3 text-xs uppercase tracking-[0.3em]">
            Sponsored Startup · Featured by UpForge
          </div>
        )}

        <StartupDetail startup={startup as Startup} />

      </main>

      <Footer />

    </div>
  )
}
