// app/sitemap.ts
import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()
  const baseUrl = "https://upforge.in"

  // 1. Fetch all startup slugs from Supabase
  const { data: startups } = await supabase
    .from('startups')
    .select('slug, updated_at')

  const startupEntries = (startups || []).map((startup) => ({
    url: `${baseUrl}/startup/${startup.slug}`,
    lastModified: new Date(startup.updated_at || new Date()),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // 2. Define static routes
  const staticRoutes = [
    "",
    "/about",
    "/startup",
    "/reports",
    "/industries",
    "/verification",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === "" ? 1.0 : 0.9,
  }))

  return [...staticRoutes, ...startupEntries]
}
