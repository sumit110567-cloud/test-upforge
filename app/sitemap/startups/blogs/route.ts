// app/sitemap/blogs/route.ts
// Dedicated blog sitemap — activate when total posts > 500

import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

const BASE_URL = "https://www.upforge.in"

export async function GET() {
  const supabase = await createClient()

  const { data: blogs } = await supabase
    .from("blogs")
    .select("slug, updated_at, created_at, is_featured")
    .order("created_at", { ascending: false })
  // .eq("status", "published")  // uncomment when status column exists

  const urls = (blogs ?? [])
    .map((b) => {
      const date = b.updated_at ?? b.created_at ?? "2026-01-01"
      const priority = b.is_featured ? "0.8" : "0.7"
      return `
  <url>
    <loc>${BASE_URL}/blog/${b.slug}</loc>
    <lastmod>${new Date(date).toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join("")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
    },
  })
}
