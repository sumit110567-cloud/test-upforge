// app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN-AWARE SITEMAP — v2 (Global Reach Edition)
//
// WHAT CHANGED FROM v1:
//   • Added 10 new global founder slugs (openai, perplexity-ai, revolut,
//     canva, character-ai, anthropic, ramp, remove-bg, smallpdf, preply)
//   • Added global city+category long-tail pages on .org
//     (e.g. /startups/artificial-intelligence/san-francisco)
//   • Added new global blog slugs for the new founder categories
//   • Added /founders hub page (high-traffic, both domains)
//   • Priority bumped to 0.95 for featured global founder pages
//   • .org now gets city pages too (global tech hubs, not Indian cities)
//
// URL TIERS (priority order):
//   1. Static routes              — home, registry, categories hub, founders hub
//   2. Category pages             — /startups/[category]
//   3. City+Category long-tail    — /startups/[cat]/[city] (.in=India, .org=global)
//   4. Startup profiles           — /startup/[slug]           (0.8–0.95)
//   5. Founder profiles           — /founder/[slug]           (0.9, both domains)
//   6. UFRN lookup pages          — /ufrn/[ufrn-id]           (0.85, .org only)
//   7. Blog posts                 — /blog/[slug]
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next"
import { headers } from "next/headers"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug } from "@/lib/categories"

// ─────────────────────────────────────────────────────────────────────────────
// CITY LISTS
// .in  → top Indian cities (same as before)
// .org → top global tech hubs (NEW — captures "AI startups San Francisco" etc.)
// ─────────────────────────────────────────────────────────────────────────────
const INDIA_CITIES = [
  "mumbai", "bangalore", "delhi", "hyderabad", "pune",
  "chennai", "kolkata", "ahmedabad", "jaipur", "noida",
]

const GLOBAL_CITIES = [
  "san-francisco", "new-york", "london", "berlin", "singapore",
  "dubai", "amsterdam", "barcelona", "tel-aviv", "sydney",
]

// ─────────────────────────────────────────────────────────────────────────────
// NEW GLOBAL FOUNDER SLUGS — added in March 2026 edition
// These are pre-seeded so they appear in the sitemap immediately, before
// Supabase data catches up, giving Google an early crawl signal.
// ─────────────────────────────────────────────────────────────────────────────
const GLOBAL_FOUNDER_SLUGS = [
  "openai",
  "perplexity-ai",
  "revolut",
  "canva",
  "character-ai",
  "anthropic",
  "ramp",
  "remove-bg",
  "smallpdf",
  "preply",
]

// ─────────────────────────────────────────────────────────────────────────────
// BLOG SLUGS — all published articles, manually maintained for instant indexing
// Add new slugs here the same day you publish — don't wait for the DB crawl.
// ─────────────────────────────────────────────────────────────────────────────
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

// New global blog slugs — targeting the 10 new high-traffic keyword clusters
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

// ─────────────────────────────────────────────────────────────────────────────
// STATIC ROUTES
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_ROUTES: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  lastModified: string
  orgOnly?: boolean
  inOnly?: boolean
}> = [
  { path: "",            priority: 1.0, changeFrequency: "daily",   lastModified: "2026-03-01" },
  { path: "/startup",    priority: 0.9, changeFrequency: "daily",   lastModified: "2026-03-01" },
  { path: "/startups",   priority: 0.9, changeFrequency: "daily",   lastModified: "2026-03-01" },
  // /founders — new hub page, high priority, both domains
  { path: "/founders",   priority: 0.9, changeFrequency: "weekly",  lastModified: "2026-03-01" },
  { path: "/blog",       priority: 0.8, changeFrequency: "daily",   lastModified: "2026-03-01" },
  { path: "/about",      priority: 0.7, changeFrequency: "monthly", lastModified: "2026-03-01" },
  { path: "/submit",     priority: 0.6, changeFrequency: "monthly", lastModified: "2026-03-01" },
  { path: "/contact",    priority: 0.5, changeFrequency: "monthly", lastModified: "2026-03-01" },
  // UFRN index — .org only
  { path: "/ufrn",       priority: 0.8, changeFrequency: "daily",   lastModified: "2026-03-01", orgOnly: true },
  // Indian-specific hubs — .in only
  { path: "/indian-unicorns",   priority: 0.85, changeFrequency: "weekly", lastModified: "2026-03-01", inOnly: true },
  { path: "/indian-startups",   priority: 0.85, changeFrequency: "weekly", lastModified: "2026-03-01", inOnly: true },
]

// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN DETECTION
// ─────────────────────────────────────────────────────────────────────────────
async function getRequestDomain(): Promise<"in" | "org"> {
  const headersList = await headers()
  const ctx = headersList.get("x-upforge-domain")
  if (ctx === "in" || ctx === "org") return ctx
  const host = headersList.get("host") ?? ""
  if (host.includes(".org")) return "org"
  return "in"
}

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
function parseDate(raw: string | null | undefined): Date {
  if (!raw) return new Date("2026-03-01")
  const d = new Date(raw)
  return isNaN(d.getTime()) ? new Date("2026-03-01") : d
}

// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP
// ─────────────────────────────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const domain = await getRequestDomain()
  const isOrg  = domain === "org"
  const BASE   = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  const supabase = await createClient()

  // ── 1. Fetch approved startups ────────────────────────────────────────────
  const { data: startups, error: startupError } = await supabase
    .from("startups")
    .select("slug, category, updated_at, created_at, is_featured, ufrn")
    .eq("status", "approved")
    .not("slug", "is", null)
    .order("created_at", { ascending: false })

  if (startupError) {
    console.error("[sitemap] Startup fetch error:", startupError.message)
  }

  // ── 2. Category routes ────────────────────────────────────────────────────
  const seenCategorySlugs = new Set<string>()
  const categoryEntries: MetadataRoute.Sitemap = []

  for (const s of startups ?? []) {
    if (!s.category) continue
    const slug = categoryToSlug(s.category)
    if (seenCategorySlugs.has(slug)) continue
    seenCategorySlugs.add(slug)

    categoryEntries.push({
      url: `${BASE}/startups/${slug}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "daily",
      priority: 0.85,
    })
  }

  // Also seed categories for the new global founders even before DB catches up
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

  // ── 3. City + Category long-tail pages ────────────────────────────────────
  // .in  → Indian cities (same as before)
  // .org → Global tech hubs (NEW — captures global keyword clusters)
  const cityEntries: MetadataRoute.Sitemap = []
  const cityList = isOrg ? GLOBAL_CITIES : INDIA_CITIES

  for (const catSlug of seenCategorySlugs) {
    for (const city of cityList) {
      cityEntries.push({
        url: `${BASE}/startups/${catSlug}/${city}`,
        lastModified: new Date("2026-03-01"),
        changeFrequency: "weekly",
        priority: 0.75,
      })
    }
  }

  // ── 4. Startup profile routes ─────────────────────────────────────────────
  const startupEntries: MetadataRoute.Sitemap = (startups ?? []).map((s) => ({
    url: `${BASE}/startup/${s.slug}`,
    lastModified: parseDate(s.updated_at ?? s.created_at),
    changeFrequency: "weekly" as const,
    priority: s.is_featured ? 0.9 : 0.8,
  }))

  // ── 5. Global founder profile routes (pre-seeded, 0.95) ──────────────────
  // These are the highest-traffic pages in the new edition. Priority 0.95
  // tells Google these are near-canonical for their respective brand queries.
  const founderEntries: MetadataRoute.Sitemap = GLOBAL_FOUNDER_SLUGS.map((slug) => ({
    url: `${BASE}/startup/${slug}`,
    lastModified: new Date("2026-03-01"),
    changeFrequency: "weekly" as const,
    priority: 0.95,
  }))

  // ── 6. UFRN lookup routes — ONLY on .org ─────────────────────────────────
  const ufrnEntries: MetadataRoute.Sitemap = isOrg
    ? (startups ?? [])
        .filter((s): s is typeof s & { ufrn: string } => typeof s.ufrn === "string" && s.ufrn.length > 0)
        .map((s) => ({
          url: `${BASE}/ufrn/${s.ufrn}`,
          lastModified: parseDate(s.updated_at ?? s.created_at),
          changeFrequency: "monthly" as const,
          priority: 0.85,
        }))
    : []

  // ── 7. Blog posts — DB + pre-seeded slugs ────────────────────────────────
  const { data: blogs, error: blogError } = await supabase
    .from("blogs")
    .select("slug, updated_at, created_at, is_featured")
    .order("created_at", { ascending: false })

  if (blogError) {
    console.error("[sitemap] Blog fetch error:", blogError.message)
  }

  const seenBlogSlugs = new Set<string>((blogs ?? []).map((b) => b.slug))

  const blogEntries: MetadataRoute.Sitemap = (blogs ?? []).map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: parseDate(b.updated_at ?? b.created_at),
    changeFrequency: "monthly" as const,
    priority: b.is_featured ? 0.8 : 0.7,
  }))

  // Pre-seed India blog slugs that may not be in DB yet
  const preSeedBlogIndia: MetadataRoute.Sitemap = BLOG_SLUGS_INDIA
    .filter((s) => !seenBlogSlugs.has(s))
    .map((s) => ({
      url: `${BASE}/blog/${s}`,
      lastModified: new Date("2026-03-01"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))

  // Pre-seed global blog slugs — on .org only (global authority domain)
  const preSeedBlogGlobal: MetadataRoute.Sitemap = isOrg
    ? BLOG_SLUGS_GLOBAL
        .filter((s) => !seenBlogSlugs.has(s))
        .map((s) => ({
          url: `${BASE}/blog/${s}`,
          lastModified: new Date("2026-03-01"),
          changeFrequency: "monthly" as const,
          priority: 0.78, // Slightly higher — new high-traffic keyword targets
        }))
    : []

  // ── 8. Static routes (domain-filtered) ───────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES
    .filter((r) => {
      if (r.orgOnly && !isOrg) return false
      if (r.inOnly  &&  isOrg) return false
      return true
    })
    .map((r) => ({
      url: `${BASE}${r.path}`,
      lastModified: new Date(r.lastModified),
      changeFrequency: r.changeFrequency,
      priority: r.priority,
    }))

  // ── 9. Combine — most important first ────────────────────────────────────
  return [
    ...staticEntries,
    ...founderEntries,        // ← NEW: global founder pages, priority 0.95
    ...categoryEntries,
    ...cityEntries,           // ← .in=India cities / .org=global tech hubs
    ...startupEntries,
    ...ufrnEntries,           // ← .org only
    ...blogEntries,
    ...preSeedBlogIndia,
    ...preSeedBlogGlobal,     // ← NEW: global blog slugs on .org
  ]
}
