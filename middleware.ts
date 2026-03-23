import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';

  // 1. Detect the Domain
  const isOrgRegistry = hostname.includes('upforge.org');

  // 2. Routing Logic for .org (Global Registry)
  if (isOrgRegistry) {
    // If they are on the homepage of .org, show the clean registry list
    if (url.pathname === '/') {
      url.pathname = '/startups'; 
      return NextResponse.rewrite(url);
    }
    
    // If they are viewing a startup, rewrite to a "Registry-Style" view
    // Note: You will need to ensure /registry/[slug] exists or rewrite to /startup/[slug]
    if (url.pathname.startsWith('/startup/')) {
      const slug = url.pathname.split('/')[2];
      url.pathname = `/startup/${slug}`; // You can later point this to a specialized /registry/ view
      return NextResponse.rewrite(url);
    }
  }

  // 3. Standard Supabase Session Handling (Existing Logic)
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) { return request.cookies.get(name)?.value },
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

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
