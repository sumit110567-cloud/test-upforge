// app/sitemap.ts
import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug } from "@/lib/categories"

/**
 * CONSOLIDATED GLOBAL SITEMAP
 * * STRATEGY:
 * All URLs are now hardcoded to 'https://www.upforge.org'. 
 * This ensures that when Google crawls the sitemap, it receives a single 
 * authoritative list of URLs, supporting the 301 redirect migration from .in.
 */

const BASE = "https://www.upforge.org"

const GLOBAL_CITIES = [
  "san-francisco", "new-york", "london", "berlin", "singapore",
  "dubai", "amsterdam", "barcelona", "tel-aviv", "sydney",
]

const INDIA_CITIES = [
  "mumbai", "bangalore", "delhi", "hyderabad", "pune",
  "chennai", "kolkata", "ahmedabad", "jaipur", "noida",
]

const GLOBAL_FOUNDER_SLUGS = [
  "openai", "perplexity-ai", "revolut", "canva", "character-ai",
  "anthropic", "ramp", "remove-bg", "smallpdf", "preply",
]

const BLOG_SLUGS_INDIA = [
  "india-startup-ecosystem-2026", "how-to-get-startup-funding-india-2026",
  "top-indian-unicorns-2026", "best-indian-startup-founders-to-follow-2026",
  "leadership-lessons-ind-vs-nz-final-2026", "startup-ideas-inspired-by-ind-vs-nz-final-2026",
  "top-ai-startups-india-2026", "how-to-start-startup-india-2026",
]

const BLOG_SLUGS_GLOBAL = [
  "chatgpt-plus-vs-perplexity-ai-2026", "best-ai-tools-for-business-2026",
  "openai-vs-anthropic-claude-comparison-2026", "best-travel-card-2026-revolut-wise-compared",
  "canva-ai-image-generator-vs-adobe-firefly-2026", "character-ai-vs-chatgpt-which-is-better-2026",
  "ramp-vs-brex-corporate-card-comparison-2026", "remove-background-from-image-free-tools-2026",
  "compress-pdf-free-smallpdf-ilovepdf-compared", "best-language-learning-apps-2026",
  "top-trending-global-startups-2026", "ai-startup-founders-to-watch-2026",
]

const STATIC_ROUTES = [
  { path: "",            priority: 1.0, changeFrequency: "daily" as const },
  { path: "/startup",    priority: 0.9, changeFrequency: "daily" as const },
  { path: "/startups",   priority: 0.9, changeFrequency: "daily" as const },
  { path: "/founders",   priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog",       priority: 0.8, changeFrequency: "daily" as const },
  { path: "/ufrn",       priority: 0.8, changeFrequency: "daily" as const },
  { path: "/indian-unicorns", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/about",      priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/submit",     priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact",    priority: 0.5, changeFrequency: "monthly" as const },
]

function parseDate(raw: string | null | undefined): Date {
  if (!raw) return new Date("2026-03-01")
  const d = new Date(raw)
  return isNaN(d.getTime()) ? new Date("2026-03-01") : d
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()

  // 1. Fetch approved startups
  const { data: startups } = await supabase
    .from("startups")
    .select("slug, category, updated_at, created_at, is_featured, ufrn")
    .eq("status", "approved")
    .not("slug", "is", null)

  // 2. Category routes
  const seenCategorySlugs = new Set<string>()
  const categoryEntries: MetadataRoute.Sitemap = []

  const GLOBAL_CATEGORIES = [
    "artificial-intelligence", "ai-powered-search", "global-fintech",
    "ai-design-creativity", "entertainment-ai", "enterprise-ai",
    "financial-operations", "single-purpose-ai-utility", "productivity-tools",
    "edtech-language-learning",
  ]

  // Seed with DB categories
  for (const s of startups ?? []) {
    if (!s.category) continue
    const slug = categoryToSlug(s.category)
    if (!seenCategorySlugs.has(slug)) {
      seenCategorySlugs.add(slug)
      categoryEntries.push({
        url: `${BASE}/startups/${slug}`,
        lastModified: new Date("2026-03-01"),
        changeFrequency: "daily",
        priority: 0.85,
      })
    }
  }

  // Seed with static global categories
  for (const cat of GLOBAL_CATEGORIES) {
    if (!seenCategorySlugs.has(cat)) {
      seenCategorySlugs.add(cat)
      categoryEntries.push({
        url: `${BASE}/startups/${cat}`,
        lastModified: new Date("2026-03-01"),
        changeFrequency: "daily",
        priority: 0.85,
      })
    }
  }

  // 3. City + Category routes (Combining Global and India for the single domain)
  const cityEntries: MetadataRoute.Sitemap = []
  const allCities = [...GLOBAL_CITIES, ...INDIA_CITIES]

  for (const catSlug of seenCategorySlugs) {
    for (const city of allCities) {
      cityEntries.push({
        url: `${BASE}/startups/${catSlug}/${city}`,
        lastModified: new Date("2026-03-01"),
        changeFrequency: "weekly",
        priority: 0.75,
      })
    }
  }

  // 4. Profiles
  const startupEntries: MetadataRoute.Sitemap = (startups ?? []).map((s) => ({
    url: `${BASE}/startup/${s.slug}`,
    lastModified: parseDate(s.updated_at ?? s.created_at),
    changeFrequency: "weekly",
    priority: s.is_featured ? 0.9 : 0.8,
  }))

  const founderEntries: MetadataRoute.Sitemap = GLOBAL_FOUNDER_SLUGS.map((slug) => ({
    url: `${BASE}/startup/${slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly",
    priority: 0.95,
  }))

  const ufrnEntries: MetadataRoute.Sitemap = (startups ?? [])
    .filter((s) => s.ufrn)
    .map((s) => ({
      url: `${BASE}/ufrn/${s.ufrn}`,
      lastModified: parseDate(s.updated_at ?? s.created_at),
      changeFrequency: "monthly",
      priority: 0.85,
    }))

  // 5. Blogs
  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, updated_at, created_at, is_featured")

  const blogEntries: MetadataRoute.Sitemap = (blogs ?? []).map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: parseDate(b.updated_at ?? b.created_at),
    changeFrequency: "monthly",
    priority: b.is_featured ? 0.8 : 0.7,
  }))

  const preSeedBlogs: MetadataRoute.Sitemap = [...BLOG_SLUGS_INDIA, ...BLOG_SLUGS_GLOBAL]
    .map((s) => ({
      url: `${BASE}/blog/${s}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly",
      priority: 0.75,
    }))

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  return [
    ...staticEntries,
    ...founderEntries,
    ...categoryEntries,
    ...cityEntries,
    ...startupEntries,
    ...ufrnEntries,
    ...blogEntries,
    ...preSeedBlogs,
  ]
}
