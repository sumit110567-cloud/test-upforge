// middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  const pathname = request.nextUrl.pathname

  // ── 1. PREVENT INFINITE LOOP ─────────────────────────────────────────────
  // ONLY redirect if the hostname is explicitly the old .in domain.
  // If it's already .org or a Vercel preview URL, SKIP the redirect.
  if (hostname.includes('upforge.in')) {
    const url = request.nextUrl.clone()
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    // 301 is permanent; browsers cache this, so we must be precise.
    return NextResponse.redirect(url, 301)
  }

  // If we reach here, we are on .org. NO REDIRECTS allowed below this line
  // for the domain itself, or you will trigger the "Too many redirects" error.
  
  const domainContext = 'org'
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  // Inject headers for your app logic
  response.headers.set('x-upforge-domain', domainContext)
  response.headers.set('x-upforge-pathname', pathname)

  // ── 2. SUPABASE AUTH (SSR) ────────────────────────────────────────────────
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return request.cookies.get(name)?.value },
        set(name: string, value: string, options: CookieOptions) {
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.headers.set('x-upforge-domain', domainContext)
          response.headers.set('x-upforge-pathname', pathname)
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          response.headers.set('x-upforge-domain', domainContext)
          response.headers.set('x-upforge-pathname', pathname)
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  await supabase.auth.getUser()
  return response
}

export const config = {
  matcher: [
    // Ensure we don't redirect static assets which can also cause loops
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
