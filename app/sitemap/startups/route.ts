// app/sitemap/startups/route.ts
// Dedicated startup sitemap — activate when total startups > 2000
// Add this URL to a sitemap index file at app/sitemap-index.ts

import { createClient } from "@/lib/supabase/server"
import { NextResponse } from "next/server"

const BASE_URL = "https://www.upforge.in"

export async function GET() {
  const supabase = await createClient()

  const { data: startups } = await supabase
    .from("startups")
    .select("slug, updated_at, created_at")
    .eq("status", "approved")
    .not("slug", "is", null)
    .order("created_at", { ascending: false })

  const urls = (startups ?? [])
    .map((s) => {
      const date = s.updated_at ?? s.created_at ?? "2026-01-01"
      return `
  <url>
    <loc>${BASE_URL}/startup/${s.slug}</loc>
    <lastmod>${new Date(date).toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
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
