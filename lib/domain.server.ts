/**
 * lib/domain.server.ts — Server-only domain context reader
 *
 * ⚠️  ONLY import this in Server Components, layouts, generateMetadata(),
 *     and API route handlers. NEVER import in 'use client' files.
 *
 * It imports 'next/headers' which is unavailable in the client bundle —
 * that's the exact error we're fixing by separating this into its own file.
 *
 * Client Components should use getDomainContextClient() from '@/lib/domain'.
 * The useDomain() hook from '@/components/client-layout' is the easiest
 * option inside the React tree.
 */

import { headers } from 'next/headers'
import type { DomainContext } from './domain'

/**
 * getDomainContext()
 *
 * Reads the `x-upforge-domain` header set by middleware.ts.
 * This is the canonical, zero-cost way to detect domain in Server Components.
 *
 * Falls back to NEXT_PUBLIC_DOMAIN env var (set per-project in Vercel),
 * then defaults to 'in' (safe for preview deployments on .in project).
 *
 * @example
 * // app/layout.tsx or any Server Component:
 * import { getDomainContext } from '@/lib/domain.server'
 * const ctx = await getDomainContext()  // 'in' | 'org'
 */
export async function getDomainContext(): Promise<DomainContext> {
  try {
    const headersList = await headers()
    const domainHeader = headersList.get('x-upforge-domain')

    if (domainHeader === 'org') return 'org'
    if (domainHeader === 'in')  return 'in'

    // Per-deployment env var — set NEXT_PUBLIC_DOMAIN=org in your .org Vercel project
    const envDomain = process.env.NEXT_PUBLIC_DOMAIN
    if (envDomain === 'org') return 'org'
    if (envDomain === 'in')  return 'in'

    return 'in'
  } catch {
    // headers() throws at build time / ISR shell — env fallback is safe here
    return process.env.NEXT_PUBLIC_DOMAIN === 'org' ? 'org' : 'in'
  }
}
