import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function proxy(request: NextRequest) {
  const hostname = request.headers.get('host') ?? ''
  const url = request.nextUrl.clone()

  // FIXED: Explicit early-exit for correct domain — prevents any loop edge case
  if (hostname === 'www.upforge.org') {
    // Already on the correct domain — fall through to normal handling
  } else if (hostname.includes('upforge.in')) {
    // Redirect .in → .org (permanent 301)
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  } else if (hostname === 'upforge.org') {
    // Redirect non-www → www
    url.hostname = 'www.upforge.org'
    url.protocol = 'https'
    return NextResponse.redirect(url, 301)
  }

  let response = NextResponse.next()

  const pathname = request.nextUrl.pathname
  response.headers.set('x-upforge-domain', 'org')
  response.headers.set('x-upforge-pathname', pathname)

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
          response.cookies.set({ name, value: '', ...options })
        },
      },
    }
  )

  await supabase.auth.getUser()

  return response
}
