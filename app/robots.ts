// app/robots.ts
// ─────────────────────────────────────────────────────────────────────────────
// UPFORGE GLOBAL ROBOTS.TXT — MAXIMUM REACH EDITION
// Allows all search engines and AI crawlers for maximum visibility
// Next.js App Router Compatible
// ─────────────────────────────────────────────────────────────────────────────

import type { MetadataRoute } from "next"
import { headers } from "next/headers"

export default async function robots(): Promise<MetadataRoute.Robots> {

  // headers() is async in Next.js App Router — must be awaited
  const headersList = await headers()

  const ctx  = headersList.get("x-upforge-domain")
  const host = headersList.get("host") ?? ""

  const isOrg =
    ctx === "org" ||
    (!ctx && (host.includes("upforge.org") || host.includes(".org")))

  const BASE = isOrg
    ? "https://www.upforge.org"
    : "https://www.upforge.in"

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
          "Google-Extended",
        ],
        allow: [
          "/",
          "/startup/",
          "/startups/",
          "/founder/",
          "/founders/",
          "/blog/",
          "/about",
          "/submit",
          "/contact",
          "/privacy",
          "/terms",
          "/sitemap.xml",
          ...(isOrg ? ["/ufrn/"] : []),
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
        crawlDelay: 0,
      },

      // ─────────────────────────────────────────────
      // GLOBAL SEARCH ENGINES
      // ─────────────────────────────────────────────
      {
        userAgent: [
          "Bingbot",
          "Slurp",
          "DuckDuckBot",
          "Yandex",
          "Baiduspider",
          "NaverBot",
          "SeznamBot",
          "Sogou",
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
      // AI CRAWLERS (ALLOWED FOR MAX REACH)
      // ─────────────────────────────────────────────
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "PerplexityBot",
          "meta-externalagent",
          "Omgilibot",
          "Bytespider",
          "ImagesiftBot",
          "Diffbot",
        ],
        allow: ["/"],
        disallow: [
          "/admin/",
          "/api/",
        ],
      },

      // ─────────────────────────────────────────────
      // IMAGE & MEDIA CRAWLERS
      // ─────────────────────────────────────────────
      {
        userAgent: [
          "Googlebot-Image",
          "Bingbot-Image",
        ],
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
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

    sitemap: `${BASE}/sitemap.xml`,
    host: BASE,
  }
}
