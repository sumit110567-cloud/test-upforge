// middleware.ts
//
// DUAL-DOMAIN ROUTING
// ─────────────────────────────────────────────────────────────────────────────
//  upforge.org  →  /registry/[slug]  (Wikipedia-style data vault)
//  upforge.in   →  current marketing & directory pages  (unchanged)
//
// The .org domain is the "Master Record" / global authority.
// The .in domain is the commercial Indian ecosystem hub.
// ─────────────────────────────────────────────────────────────────────────────

import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { NextResponse, type NextRequest } from "next/server"

// Hosts that should receive the stripped-down "registry" experience
const REGISTRY_HOSTS = ["upforge.org", "www.upforge.org"]

// Paths that are always served identically on both domains
const SHARED_PATHS = ["/api/", "/_next/", "/favicon", "/og/", "/logo"]

function isSharedPath(pathname: string): boolean {
  return SHARED_PATHS.some((p) => pathname.startsWith(p))
}

export async function middleware(request: NextRequest) {
  const { pathname, host } = request.nextUrl

  // ── 1. Dual-domain rewrite logic ──────────────────────────────────────────
  const isOrgDomain = REGISTRY_HOSTS.includes(host)

  if (isOrgDomain && !isSharedPath(pathname)) {
    const url = request.nextUrl.clone()

    if (pathname === "/" || pathname === "") {
      // Root of .org  →  /registry  (Wikipedia-style index page)
      url.pathname = "/registry"
      return NextResponse.rewrite(url)
    }

    // /startup/[slug] on .org → serve as-is (UFRN stamp already in startup-detail)
    if (pathname.startsWith("/startup/")) {
      return NextResponse.next({ request: { headers: request.headers } })
    }
  }

  // ── 2. Canonical-domain redirect (SEO) ────────────────────────────────────
  // If someone hits a startup profile on .in, let it serve normally.
  // The canonical tag in generateMetadata points to .org for authority.
  // No redirect needed here — we handle it at the meta layer.

  // ── 3. Supabase session passthrough (unchanged) ───────────────────────────
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          response.cookies.set({ name, value: "", ...options })
        },
      },
    }
  )

  await supabase.auth.getUser()
  return response
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}
