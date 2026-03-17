// app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
// Fully dynamic sitemap — derives all URLs from Supabase.
// Zero hardcoded startup slugs or category slugs.
//
// URL tiers included (in priority order):
//   1. Static routes     — home, registry, categories hub, about, etc.
//   2. Category pages    — /startups/[category]  (derived from DB)
//   3. Startup profiles  — /startup/[slug]       (all approved startups)
//   4. Blog posts        — /blog/[slug]           (all published posts)
//
// ARCHITECTURE NOTE:
// At 5000+ startups and 2500+ blogs, split into sub-sitemaps:
//   app/sitemap/static/route.ts
//   app/sitemap/startups/route.ts
//   app/sitemap/blogs/route.ts
// For current scale, a single file is correct and fast.
//
// CANONICAL CONFLICT WARNING:
// Do NOT add /industries, /verification, /founder-stories to static routes
// until those canonical errors are resolved in Google Search Console.
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug } from "@/lib/categories"

const BASE = "https://www.upforge.in"

// ─────────────────────────────────────────────────────────────────────────────
// STATIC ROUTES
// lastModified: use a real ISO date string — update manually when page changes.
// dynamic new Date() on every request trains Google to distrust freshness signals.
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_ROUTES: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  lastModified: string
}> = [
  { path: "",           priority: 1.0, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/startup",   priority: 0.9, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/startups",  priority: 0.9, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/blog",      priority: 0.8, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/about",     priority: 0.7, changeFrequency: "monthly", lastModified: "2026-01-01" },
  { path: "/submit",    priority: 0.6, changeFrequency: "monthly", lastModified: "2026-01-01" },
  { path: "/contact",   priority: 0.5, changeFrequency: "monthly", lastModified: "2026-01-01" },
  // ── ADD WHEN LIVE ── Uncomment only when the route returns 200.
  // { path: "/report",           priority: 0.7, changeFrequency: "monthly", lastModified: "2026-01-01" },
  // { path: "/indian-unicorns",  priority: 0.8, changeFrequency: "weekly",  lastModified: "2026-01-01" },
  //
  // ── DO NOT ADD until canonical errors are resolved in GSC ──
  // { path: "/industries",       ... }  ← canonical conflict
  // { path: "/verification",     ... }  ← canonical conflict
  // { path: "/founder-stories",  ... }  ← canonical conflict
]

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────

/** Safely parse a date string, fall back to a fixed date rather than new Date(). */
function parseDate(raw: string | null | undefined): Date {
  if (!raw) return new Date("2026-01-01")
  const d = new Date(raw)
  return isNaN(d.getTime()) ? new Date("2026-01-01") : d
}

// ─────────────────────────────────────────────────────────────────────────────
// SITEMAP
// ─────────────────────────────────────────────────────────────────────────────
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const supabase = await createClient()

  // ── 1. Fetch approved startups ────────────────────────────────────────────
  // Single query — used to derive both category routes and startup profile routes.
  const { data: startups, error: startupError } = await supabase
    .from("startups")
    .select("slug, category, updated_at, created_at, is_featured")
    .eq("status", "approved")
    .not("slug", "is", null)
    .order("created_at", { ascending: false })

  if (startupError) {
    console.error("[sitemap] Startup fetch error:", startupError.message)
  }

  // ── 2. Derive category routes from startup data ───────────────────────────
  // No extra Supabase query needed — reuse the startups result.
  const seenCategorySlugs = new Set<string>()
  const categoryEntries: MetadataRoute.Sitemap = []

  for (const s of startups ?? []) {
    if (!s.category) continue
    const slug = categoryToSlug(s.category)
    if (seenCategorySlugs.has(slug)) continue
    seenCategorySlugs.add(slug)
    categoryEntries.push({
      url: `${BASE}/startups/${slug}`,
      lastModified: new Date("2026-01-01"), // stable date — avoids freshness noise
      changeFrequency: "daily",
      priority: 0.85,
    })
  }

  // ── 3. Startup profile routes ─────────────────────────────────────────────
  const startupEntries: MetadataRoute.Sitemap = (startups ?? []).map((s) => ({
    url: `${BASE}/startup/${s.slug}`,
    lastModified: parseDate(s.updated_at ?? s.created_at),
    changeFrequency: "weekly",
    // Featured startup profiles get a small priority boost
    priority: s.is_featured ? 0.9 : 0.8,
  }))

  // ── 4. Blog posts ─────────────────────────────────────────────────────────
  const { data: blogs, error: blogError } = await supabase
    .from("blogs")
    .select("slug, updated_at, created_at, is_featured")
    .order("created_at", { ascending: false })
  // Uncomment when blogs table has a status column:
  // .eq("status", "published")

  if (blogError) {
    console.error("[sitemap] Blog fetch error:", blogError.message)
  }

  const blogEntries: MetadataRoute.Sitemap = (blogs ?? []).map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: parseDate(b.updated_at ?? b.created_at),
    changeFrequency: "monthly",
    priority: b.is_featured ? 0.8 : 0.7,
  }))

  // ── 5. Static routes ──────────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${BASE}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  // ── 6. Combine — most important URLs first ────────────────────────────────
  // Google processes sitemaps in order, so static > categories > startups > blogs.
  return [
    ...staticEntries,
    ...categoryEntries,
    ...startupEntries,
    ...blogEntries,
  ]
}
