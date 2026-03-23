// app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────
// UPGRADE: /ufrn/[id] routes now included as a separate tier.
//
// URL tiers (in priority order):
//   1. Static routes     — home, registry, categories hub, about, etc.
//   2. Category pages    — /startups/[category]
//   3. Startup profiles  — /startup/[slug]         (priority: 0.8–0.9)
//   4. UFRN lookup pages — /ufrn/[ufrn-id]         (priority: 0.85)
//      ↑ NEW — these are "double-parked" ranking pages for UFRN searches.
//      Each UFRN page is a second chance to rank #1 when someone searches
//      the exact ID. Google indexes them as Dataset entries.
//   5. Blog posts        — /blog/[slug]
//
// ARCHITECTURE NOTE:
// At 5000+ startups, split into sub-sitemaps. See comments below.
// ─────────────────────────────────────────────────────────────────────────────

import { MetadataRoute } from "next"
import { createClient } from "@/lib/supabase/server"
import { categoryToSlug } from "@/lib/categories"

const BASE = "https://www.upforge.in"
// UFRN pages are canonical on .org — they point to the authority domain
const BASE_ORG = "https://www.upforge.org"

// ─────────────────────────────────────────────────────────────────────────────
// STATIC ROUTES
// ─────────────────────────────────────────────────────────────────────────────
const STATIC_ROUTES: Array<{
  path: string
  priority: number
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
  lastModified: string
  base?: string
}> = [
  { path: "",           priority: 1.0, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/startup",   priority: 0.9, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/startups",  priority: 0.9, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/blog",      priority: 0.8, changeFrequency: "daily",   lastModified: "2026-01-01" },
  { path: "/about",     priority: 0.7, changeFrequency: "monthly", lastModified: "2026-01-01" },
  { path: "/submit",    priority: 0.6, changeFrequency: "monthly", lastModified: "2026-01-01" },
  { path: "/contact",   priority: 0.5, changeFrequency: "monthly", lastModified: "2026-01-01" },
  // UFRN index page on .org — the "UFRN system" landing page
  // Uncomment when /ufrn route exists and returns 200:
  // { path: "/ufrn",    priority: 0.8, changeFrequency: "daily",   lastModified: "2026-01-01", base: BASE_ORG },
]

// ─────────────────────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────────────────────
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
      lastModified: new Date("2026-01-01"),
      changeFrequency: "daily",
      priority: 0.85,
    })
  }

  // ── 3. Startup profile routes ─────────────────────────────────────────────
  const startupEntries: MetadataRoute.Sitemap = (startups ?? []).map((s) => ({
    url: `${BASE}/startup/${s.slug}`,
    lastModified: parseDate(s.updated_at ?? s.created_at),
    changeFrequency: "weekly",
    priority: s.is_featured ? 0.9 : 0.8,
  }))

  // ── 4. UFRN lookup routes (NEW) ───────────────────────────────────────────
  // These are canonical on .org — separate from the /startup/[slug] entries.
  // Google will index these as Dataset pages, "double-parking" UpForge on
  // the first SERP for any UFRN search.
  //
  // Priority 0.85 — higher than a blog post (0.7), lower than a profile (0.8–0.9).
  // These pages exist purely for UFRN lookup authority, not for general traffic.
  const ufrnEntries: MetadataRoute.Sitemap = (startups ?? [])
    .filter((s): s is typeof s & { ufrn: string } => typeof s.ufrn === "string" && s.ufrn.length > 0)
    .map((s) => ({
      url: `${BASE_ORG}/ufrn/${s.ufrn}`,
      lastModified: parseDate(s.updated_at ?? s.created_at),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    }))

  // ── 5. Blog posts ─────────────────────────────────────────────────────────
  const { data: blogs, error: blogError } = await supabase
    .from("blogs")
    .select("slug, updated_at, created_at, is_featured")
    .order("created_at", { ascending: false })

  if (blogError) {
    console.error("[sitemap] Blog fetch error:", blogError.message)
  }

  const blogEntries: MetadataRoute.Sitemap = (blogs ?? []).map((b) => ({
    url: `${BASE}/blog/${b.slug}`,
    lastModified: parseDate(b.updated_at ?? b.created_at),
    changeFrequency: "monthly",
    priority: b.is_featured ? 0.8 : 0.7,
  }))

  // ── 6. Static routes ──────────────────────────────────────────────────────
  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${r.base ?? BASE}${r.path}`,
    lastModified: new Date(r.lastModified),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))

  // ── 7. Combine — most important first ────────────────────────────────────
  return [
    ...staticEntries,
    ...categoryEntries,
    ...startupEntries,
    ...ufrnEntries,     // ← NEW: UFRN lookup pages on .org
    ...blogEntries,
  ]
}
