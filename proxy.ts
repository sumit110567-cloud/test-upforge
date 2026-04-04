// proxy.ts
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {

  const hostname = request.headers.get('host') ?? ''
  const url = request.nextUrl.clone()

  // ─────────────────────────────────────────────
  // 1️⃣ STRICT DOMAIN REDIRECT (.in → .org)
  // ─────────────────────────────────────────────

  if (hostname === 'upforge.in' || hostname === 'www.upforge.in') {
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // ─────────────────────────────────────────────
  // 2️⃣ FORCE NON-WWW → WWW (.org)
  // ─────────────────────────────────────────────

  if (hostname === 'upforge.org') {
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  // ─────────────────────────────────────────────
  // 3️⃣ CONTINUE NORMAL REQUEST
  // ─────────────────────────────────────────────

  let response = NextResponse.next()

  const pathname = request.nextUrl.pathname
  const domainContext = 'org'

  response.headers.set('x-upforge-domain', domainContext)
  response.headers.set('x-upforge-pathname', pathname)

  // ─────────────────────────────────────────────
  // 4️⃣ SUPABASE AUTH SAFE COOKIE HANDLING
  // ─────────────────────────────────────────────

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {

        get(name: string) {
          return request.cookies.get(name)?.value
        },

        set(name: string, value: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value,
            ...options,
          })
        },

        remove(name: string, options: CookieOptions) {
          response.cookies.set({
            name,
            value: '',
            ...options,
          })
        },

      },
    }
  )

  await supabase.auth.getUser()

  return response
}

// REQUIRED matcher config for proxy

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
