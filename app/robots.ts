// app/robots.ts
// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN-AWARE ROBOTS.TXT
//
// PROBLEM FIXED:
//   The old file hardcoded "sitemap: https://www.upforge.in/sitemap.xml"
//   This told every crawler — including Google's global crawler hitting .org —
//   to use the .in sitemap. That completely undermined .org's authority.
//
// SOLUTION:
//   Detect the host and emit the correct sitemap URL for that domain.
//   Also: tighten crawl rules to avoid wasting crawl budget on thin pages.
//
// CRAWL BUDGET STRATEGY:
//   • Allow all content pages  → maximum indexation
//   • Block /api/, /admin/     → don't waste quota on non-indexable responses
//   • Block duplicate param URLs (e.g. ?page=, ?sort=) → prevent dilution
//   • Block success/confirm pages → no SEO value
// ─────────────────────────────────────────────────────────────────────────────

import type { MetadataRoute } from "next"
import { headers } from "next/headers"

export default async function robots(): Promise<MetadataRoute.Robots> {
  const headersList = await headers()

  // Domain detection — same pattern as sitemap.ts and middleware
  const ctx  = headersList.get("x-upforge-domain")
  const host = headersList.get("host") ?? ""

  const isOrg =
    ctx === "org" ||
    (!ctx && (host.includes("upforge.org") || host.includes(".org")))

  const BASE = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  return {
    rules: [
      // ── Primary crawlers ─────────────────────────────────────────────────
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot"],
        allow: [
          "/",
          "/startup/",
          "/startups/",
          "/blog/",
          "/about",
          "/submit",
          "/contact",
          ...(isOrg ? ["/ufrn/"] : []),  // UFRN pages only exposed on .org
        ],
        disallow: [
          "/admin/",
          "/api/",
          "/submit/success",
          "/submit/confirm",
          // Block URL parameters that create duplicate content
          "/*?page=",
          "/*?sort=",
          "/*?filter=",
          "/*?ref=",
          "/*?utm_",
          "/*?fbclid=",
          "/*?gclid=",
        ],
        // Crawl delay in seconds — give Google enough room to index fast
        crawlDelay: 0,
      },

      // ── Image crawlers — important for startup logos in Google Images ────
      {
        userAgent: "Googlebot-Image",
        allow: ["/"],
        disallow: ["/api/", "/admin/"],
      },

      // ── AI training crawlers — block to protect data value ───────────────
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "CCBot",
          "anthropic-ai",
          "Claude-Web",
          "Omgilibot",
          "FacebookBot",
          "meta-externalagent",
        ],
        disallow: ["/"],
      },

      // ── Default (all other bots) ─────────────────────────────────────────
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

    // ── THIS IS THE CRITICAL FIX ──────────────────────────────────────────
    // Each domain points to its OWN sitemap.
    // Google gets two separate authority signals, zero duplication.
    sitemap: `${BASE}/sitemap.xml`,

    host: BASE,
  }
}
