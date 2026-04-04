// app/robots.ts
// ─────────────────────────────────────────────────────────────────────────────
// UPFORGE CONSOLIDATED ROBOTS.TXT — GLOBAL AUTHORITY EDITION
// Consolidates all crawl authority onto upforge.org
// ─────────────────────────────────────────────────────────────────────────────

import type { MetadataRoute } from "next"

export default async function robots(): Promise<MetadataRoute.Robots> {
  // CRITICAL: Hardcode BASE to the global domain to consolidate SEO authority.
  // This ensures all sitemap declarations across any cached crawl point to .org.
  const BASE = "https://www.upforge.org"

  return {
    rules: [
      // ─────────────────────────────────────────────
      // GOOGLE CRAWLERS
      // ─────────────────────────────────────────────
      {
        userAgent: [
          "Googlebot",
          "Googlebot-News",
          "Googlebot-Image",
          "Googlebot-Video",
          "Google-Extended", // Allows Gemini/AI to crawl for better global ranking
        ],
        allow: [
          "/",
          "/startup/",
          "/startups/",
          "/founder/",
          "/founders/",
          "/blog/",
          "/ufrn/",      // Enabled globally for the .org registry
          "/about",
          "/submit",
          "/contact",
          "/privacy",
          "/terms",
          "/sitemap.xml",
        ],
        disallow: [
          "/admin/",
          "/api/",
          "/submit/success",
          "/submit/confirm",
          "/*?page=",
          "/*?sort=",
          "/*?filter=",
          "/*?search=",
          "/*?ref=",
          "/*?utm_",
          "/*?fbclid=",
          "/*?gclid=",
        ],
      },

      // ─────────────────────────────────────────────
      // GLOBAL SEARCH ENGINES & AI CRAWLERS
      // ─────────────────────────────────────────────
      {
        userAgent: [
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Yandex",
          "Baiduspider",
          "GPTBot",
          "ChatGPT-User",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
        ],
        allow: [
          "/",
          "/startup/",
          "/startups/",
          "/founder/",
          "/founders/",
          "/blog/",
        ],
        disallow: [
          "/admin/",
          "/api/",
        ],
      },

      // ─────────────────────────────────────────────
      // DEFAULT RULE
      // ─────────────────────────────────────────────
      {
        userAgent: "*",
        allow: ["/"],
        disallow: [
          "/admin/",
          "/api/",
          "/submit/success",
          "/submit/confirm",
        ],
      },
    ],

    // These ensure the search engines know exactly where the primary domain lives
    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
