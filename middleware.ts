// middleware.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  
  // ── 1. STRICT DOMAIN REDIRECT (Handle .in -> .org) ───────────────────────
  // We only redirect if we are CERTAIN we are on the old domain.
  if (hostname.includes('upforge.in')) {
    const url = request.nextUrl.clone()
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // ── 2. INITIALIZE RESPONSE ──────────────────────────────────────────────
  // If we are here, we are on .org or localhost. 
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  const pathname = request.nextUrl.pathname
  const domainContext = 'org' // Force org context as per your consolidation strategy

  // Inject headers for app logic
  response.headers.set('x-upforge-domain', domainContext)
  response.headers.set('x-upforge-pathname', pathname)

  // ── 3. SUPABASE AUTH ────────────────────────────────────────────────────
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return request.cookies.get(name)?.value },
        set(name: string, value: string, options: CookieOptions) {
          // When setting cookies, we must update both the request and the response
          request.cookies.set({ name, value, ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          // RE-APPLY HEADERS to the new response object created by NextResponse.next()
          response.headers.set('x-upforge-domain', domainContext)
          response.headers.set('x-upforge-pathname', pathname)
          response.cookies.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          request.cookies.set({ name, value: '', ...options })
          response = NextResponse.next({ request: { headers: request.headers } })
          // RE-APPLY HEADERS
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
    // Exclude static assets and common file types to prevent unnecessary middleware execution
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
