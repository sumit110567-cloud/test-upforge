// app/sitemap.ts
import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug } from "@/lib/categories"

const BASE = "https://www.upforge.org"

const STATIC_DATE = new Date("2026-03-01")

const GLOBAL_CITIES = [
  "san-francisco","new-york","london","berlin","singapore",
  "dubai","amsterdam","barcelona","tel-aviv","sydney",
]

const INDIA_CITIES = [
  "mumbai","bangalore","delhi","hyderabad","pune",
  "chennai","kolkata","ahmedabad","jaipur","noida",
]

const GLOBAL_FOUNDER_SLUGS = [
  "openai","perplexity-ai","revolut","canva","character-ai",
  "anthropic","ramp","remove-bg","smallpdf","preply",
]

const BLOG_SLUGS_INDIA = [
  "india-startup-ecosystem-2026",
  "how-to-get-startup-funding-india-2026",
  "top-indian-unicorns-2026",
  "best-indian-startup-founders-to-follow-2026",
  "leadership-lessons-ind-vs-nz-final-2026",
  "startup-ideas-inspired-by-ind-vs-nz-final-2026",
  "top-ai-startups-india-2026",
  "how-to-start-startup-india-2026",
]

const BLOG_SLUGS_GLOBAL = [
  "chatgpt-plus-vs-perplexity-ai-2026",
  "best-ai-tools-for-business-2026",
  "openai-vs-anthropic-claude-comparison-2026",
  "best-travel-card-2026-revolut-wise-compared",
  "canva-ai-image-generator-vs-adobe-firefly-2026",
  "character-ai-vs-chatgpt-which-is-better-2026",
  "ramp-vs-brex-corporate-card-comparison-2026",
  "remove-background-from-image-free-tools-2026",
  "compress-pdf-free-smallpdf-ilovepdf-compared",
  "best-language-learning-apps-2026",
  "top-trending-global-startups-2026",
  "ai-startup-founders-to-watch-2026",
]

const STATIC_ROUTES = [
  { path: "", priority: 1.0, changeFrequency: "daily" as const },
  { path: "/startup", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/startups", priority: 0.9, changeFrequency: "daily" as const },
  { path: "/founders", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/blog", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/ufrn", priority: 0.8, changeFrequency: "daily" as const },
  { path: "/indian-unicorns", priority: 0.85, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/submit", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" as const },
]

function safeDate(value?: string | null) {
  if (!value) return STATIC_DATE
  const d = new Date(value)
  return isNaN(d.getTime()) ? STATIC_DATE : d
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let startups = []
  let blogs = []

  try {
    const supabase = await createClient()

    const startupsRes = await supabase
      .from("startups")
      .select("slug,category,updated_at,created_at,is_featured,ufrn")
      .eq("status", "approved")
      .not("slug", "is", null)
      .limit(10000)

    startups = startupsRes.data ?? []

    const blogsRes = await supabase
      .from("blogs")
      .select("slug,updated_at,created_at,is_featured")
      .limit(5000)

    blogs = blogsRes.data ?? []
  } catch {
    startups = []
    blogs = []
  }

  const categorySet = new Set<string>()

  for (const s of startups) {
    if (!s.category) continue
    categorySet.add(categoryToSlug(s.category))
  }

  const GLOBAL_CATEGORIES = [
    "artificial-intelligence",
    "ai-powered-search",
    "global-fintech",
    "ai-design-creativity",
    "entertainment-ai",
    "enterprise-ai",
    "financial-operations",
    "single-purpose-ai-utility",
    "productivity-tools",
    "edtech-language-learning",
  ]

  GLOBAL_CATEGORIES.forEach(c => categorySet.add(c))

  const categoryEntries: MetadataRoute.Sitemap = Array.from(categorySet).map(cat => ({
    url: `${BASE}/startups/${cat}`,
    lastModified: STATIC_DATE,
    changeFrequency: "daily",
    priority: 0.85,
  }))

  const allCities = [...GLOBAL_CITIES, ...INDIA_CITIES]

  const cityEntries: MetadataRoute.Sitemap = []

  for (const cat of categorySet) {
    for (const city of allCities) {
      cityEntries.push({
        url: `${BASE}/startups/${cat}/${city}`,
        lastModified: STATIC_DATE,
        changeFrequency: "weekly",
        priority: 0.75,
      })
    }
  }

  const startupEntries: MetadataRoute.Sitemap = startups.map(s => ({
    url: `${BASE}/startup/${s.slug}`,
    lastModified: safeDate(s.updated_at ?? s.created_at),
    changeFrequency: "weekly",
    priority: s.is_featured ? 0.9 : 0.8,
  }))

  const founderEntries: MetadataRoute.Sitemap = GLOBAL_FOUNDER_SLUGS.map(slug => ({
    url: `${BASE}/startup/${slug}`,
    lastModified: STATIC_DATE,
    changeFrequency: "weekly",
    priority: 0.95,
  }))

  const ufrnEntries: MetadataRoute.Sitemap = startups
    .filter(s => s.ufrn)
    .map(s => ({
      url: `${BASE}/ufrn/${s.ufrn}`,
      lastModified: safeDate(s.updated_at ?? s.created_at),
      changeFrequency: "monthly",
      priority: 0.85,
    }))

  const blogEntries: MetadataRoute.Sitemap = blogs.map(b => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: safeDate(b.updated_at ?? b.created_at),
    changeFrequency: "monthly",
    priority: b.is_featured ? 0.8 : 0.7,
  }))

  const seededBlogs: MetadataRoute.Sitemap = [
    ...BLOG_SLUGS_INDIA,
    ...BLOG_SLUGS_GLOBAL,
  ].map(slug => ({
    url: `${BASE}/blog/${slug}`,
    lastModified: STATIC_DATE,
    changeFrequency: "monthly",
    priority: 0.75,
  }))

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map(route => ({
    url: `${BASE}${route.path}`,
    lastModified: STATIC_DATE,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))

  return [
    ...staticEntries,
    ...founderEntries,
    ...categoryEntries,
    ...cityEntries,
    ...startupEntries,
    ...ufrnEntries,
    ...blogEntries,
    ...seededBlogs,
  ]
}
