// lib/supabase/server.ts
//
// TWO CLIENTS:
//
// createClient()     — full client with cookie-based auth session support
//                      Use in: auth flows, user-specific data, mutations
//
// createReadClient() — lightweight read-only client, no session management
//                      Use in: registry queries, blog queries, sitemap,
//                      generateStaticParams, generateMetadata
//                      Faster instantiation, no GoTrue overhead
//
// ENVIRONMENT VARIABLES:
// NEXT_PUBLIC_SUPABASE_URL      — your project URL (safe to expose)
// NEXT_PUBLIC_SUPABASE_ANON_KEY — anon/public key (safe to expose)
//                                 RLS protects data, not key secrecy
//
// NEVER add NEXT_PUBLIC_ prefix to:
// SUPABASE_SERVICE_ROLE_KEY     — server-only, never expose to client

import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"

// ---------------------------------------------------------------------------
// ENVIRONMENT VALIDATION
// Fail loudly at startup rather than silently at query time.
// ---------------------------------------------------------------------------
function getSupabaseConfig(): { url: string; anonKey: string } {
  const url     = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url) {
    throw new Error(
      "[Supabase] NEXT_PUBLIC_SUPABASE_URL is not defined.\n" +
      "Add it to your .env.local file and Vercel environment variables."
    )
  }

  if (!anonKey) {
    throw new Error(
      "[Supabase] NEXT_PUBLIC_SUPABASE_ANON_KEY is not defined.\n" +
      "Add it to your .env.local file and Vercel environment variables."
    )
  }

  try {
    new URL(url)
  } catch {
    throw new Error(
      `[Supabase] NEXT_PUBLIC_SUPABASE_URL is not a valid URL: "${url}"`
    )
  }

  return { url, anonKey }
}

// ---------------------------------------------------------------------------
// TYPE
// ---------------------------------------------------------------------------
type CookieToSet = {
  name: string
  value: string
  options: CookieOptions
}

// ---------------------------------------------------------------------------
// FULL CLIENT — with cookie-based auth session
//
// Reads and writes cookies — requires a request context.
// ---------------------------------------------------------------------------
export async function createClient() {
  const { url, anonKey } = getSupabaseConfig()
  const cookieStore = await cookies()

  return createServerClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet: CookieToSet[]) {
        try {
          cookiesToSet.forEach((cookie) =>
            cookieStore.set(cookie.name, cookie.value, cookie.options)
          )
        } catch {
          // Expected in Server Components where cookies are read-only
        }
      },
    },
  })
}

// ---------------------------------------------------------------------------
// READ CLIENT — lightweight, no session management
//
// Safe to call outside request context (e.g. generateMetadata).
// ---------------------------------------------------------------------------
export function createReadClient() {
  const { url, anonKey } = getSupabaseConfig()

  return createServerClient(url, anonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    cookies: {
      getAll: () => [],
      setAll: () => {},
    },
    global: {
      // FIXED: Added explicit types to 'input' and 'init' to satisfy strict TypeScript rules
      fetch: (
        input: RequestInfo | URL,
        init?: RequestInit
      ): Promise<Response> => {
        return fetch(input, {
          ...init,
          cache: "no-store", // disables caching completely for fresh data
        })
      },
    },
  })
}

// ---------------------------------------------------------------------------
// SERVICE ROLE CLIENT
// ---------------------------------------------------------------------------
export function createServiceClient() {
  const { url } = getSupabaseConfig()
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!serviceKey) {
    throw new Error("[Supabase] SUPABASE_SERVICE_ROLE_KEY is not defined.")
  }

  return createServerClient(url, serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
      detectSessionInUrl: false,
    },
    cookies: {
      getAll: () => [],
      setAll: () => {},
    },
  })
}
