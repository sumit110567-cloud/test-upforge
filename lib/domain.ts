// lib/domain.ts
// Domain-aware URL helper for UpForge dual-domain setup.
// .org = Global Registry, .in = India Hub
// All internal startup links must go through here to avoid cross-domain leaks.

export type DomainContext = "org" | "in"

/**
 * Returns the correct absolute URL for a startup profile
 * based on which domain the user is currently on.
 *
 * On .in  → relative path  → /startup/[slug]  (stays on .in)
 * On .org → absolute URL   → https://www.upforge.org/startup/[slug]  (stays on .org)
 */
export function getStartupUrl(slug: string, domain: DomainContext): string {
  const encoded = encodeURIComponent(slug)
  if (domain === "org") {
    return `https://www.upforge.org/startup/${encoded}`
  }
  return `/startup/${encoded}`
}

/**
 * Reads the x-upforge-domain header set by middleware.ts.
 * Use this in Server Components only.
 * Falls back to "in" so existing .in behaviour is unchanged.
 */
export async function getDomainContext(): Promise<DomainContext> {
  // Dynamic import so this file is safe to import in client components too
  // (they just won't call this function).
  const { headers } = await import("next/headers")
  const h = await headers()
  const value = h.get("x-upforge-domain")
  return value === "org" ? "org" : "in"
}
