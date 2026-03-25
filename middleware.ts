// middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

/**
 * UPFORGE DUAL-DOMAIN MIDDLEWARE
 *
 * STRATEGY:
 * 1. .org = Global Authority — UFRN Registry, emerging-market intelligence
 * 2. .in  = India Hub       — Founder stories, local SEO, Indian startup pages
 *
 * We do NOT redirect between domains. Instead we:
 *   a) Set 'x-upforge-domain' header → read by getDomainContext() in lib/domain.ts
 *   b) Set 'x-upforge-pathname' header → available for per-page canonical logic
 *
 * lib/domain.ts uses these headers to generate:
 *   • Correct canonical URLs and hreflang alternates in layout metadata
 *   • Domain-aware startup / registry URLs (getStartupUrl, getRegistryUrl)
 *   • Domain-aware Navbar / Footer links (getNavUrl)
 *
 * RESULT: No cross-domain link leaks, no user "flipping", no SEO duplicate penalty.
 */
export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  const pathname = request.nextUrl.pathname

  // Detect domain — covers www.upforge.org, upforge.org, and Vercel preview URLs
  // where NEXT_PUBLIC_DOMAIN=org is set in the project env.
  const isOrg =
    hostname.includes('upforge.org') ||
    process.env.NEXT_PUBLIC_DOMAIN === 'org'

  const domainContext = isOrg ? 'org' : 'in'

  // ── 1. Build initial response ─────────────────────────────────────────────
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  // ── 2. Inject domain context headers ─────────────────────────────────────
  // These are available in Server Components via next/headers → headers()
  response.headers.set('x-upforge-domain',   domainContext)
  response.headers.set('x-upforge-pathname', pathname)

  // ── 3. Supabase SSR session handling ──────────────────────────────────────
  // createServerClient must be called after we have a response object.
  // We re-apply domain headers after every cookie mutation to ensure they
  // are never lost when NextResponse.next() is called again.
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return request.cookies.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          // Re-apply after response rebuild
          response.headers.set('x-upforge-domain',   domainContext)
          response.headers.set('x-upforge-pathname', pathname)
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({
            request: { headers: request.headers },
          })
          // Re-apply after response rebuild
          response.headers.set('x-upforge-domain',   domainContext)
          response.headers.set('x-upforge-pathname', pathname)
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  // Refresh session if expired — required for SSR auth in Server Components
  await supabase.auth.getUser()

  return response
}

export const config = {
  matcher: [
    // Skip Next.js internals and static assets — only run on actual pages/APIs
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
