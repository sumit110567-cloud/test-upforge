import type { MetadataRoute } from "next"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const BASE = "https://www.upforge.org"

  return {
    rules: [
      {
        userAgent: [
          "Googlebot",
          "Googlebot-News",
          "Googlebot-Image",
          "Google-Extended", // AI Crawlers
        ],
        allow: [
          "/", "/startup/", "/startups/", "/blog/", "/ufrn/", "/about", "/sitemap.xml"
        ],
        disallow: ["/admin/", "/api/"],
      },
      {
        userAgent: "*",
        allow: ["/"],
        disallow: ["/admin/", "/api/"],
      },
    ],
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
