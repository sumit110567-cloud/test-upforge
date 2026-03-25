/**
 * lib/domain.ts — UpForge Domain Utilities (universal)
 *
 * ✅ Safe to import in BOTH Server Components AND Client Components.
 * ✅ No 'next/headers', no browser APIs at module level.
 *
 * For the server-side getDomainContext() that reads request headers,
 * import from '@/lib/domain.server' — Server Components and layouts ONLY.
 *
 * ARCHITECTURE:
 *   upforge.in   → India hub  : Founder stories, local SEO, Indian startup pages
 *   upforge.org  → Global hub : UFRN Registry, cross-border data, global SEO
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type DomainContext = 'in' | 'org'

export interface DomainMeta {
  context: DomainContext
  baseUrl: string
  alternateUrl: string
  isIndia: boolean
  isGlobal: boolean
  locale: string
  hreflangSelf: string
  hreflangAlternate: string
  siteName: string
  region: 'IN' | 'GLOBAL'
}

// ─── Client-safe domain detection ────────────────────────────────────────────

/**
 * getDomainContextClient()
 *
 * Safe for Client Components and any shared utility.
 * - During SSR (window undefined) → reads NEXT_PUBLIC_DOMAIN env var
 * - In browser                    → reads data-domain attr on <html> (fastest),
 *                                   then falls back to hostname parsing
 *
 * For Server Components / layouts use getDomainContext() from '@/lib/domain.server'.
 */
export function getDomainContextClient(): DomainContext {
  if (typeof window === 'undefined') {
    return process.env.NEXT_PUBLIC_DOMAIN === 'org' ? 'org' : 'in'
  }
  const htmlDomain = document.documentElement.getAttribute('data-domain')
  if (htmlDomain === 'org') return 'org'
  if (htmlDomain === 'in')  return 'in'
  return window.location.hostname.includes('upforge.org') ? 'org' : 'in'
}

// ─── getDomainMeta ────────────────────────────────────────────────────────────

export function getDomainMeta(context: DomainContext): DomainMeta {
  if (context === 'org') {
    return {
      context:           'org',
      baseUrl:           'https://www.upforge.org',
      alternateUrl:      'https://www.upforge.in',
      isIndia:           false,
      isGlobal:          true,
      locale:            'en-US',
      hreflangSelf:      'en',
      hreflangAlternate: 'en-IN',
      siteName:          'UpForge',
      region:            'GLOBAL',
    }
  }
  return {
    context:           'in',
    baseUrl:           'https://www.upforge.in',
    alternateUrl:      'https://www.upforge.org',
    isIndia:           true,
    isGlobal:          false,
    locale:            'en-IN',
    hreflangSelf:      'en-IN',
    hreflangAlternate: 'en',
    siteName:          'UpForge',
    region:            'IN',
  }
}

// ─── URL helpers ──────────────────────────────────────────────────────────────

/**
 * getStartupUrl(slug, context)
 * .in  → /startup/[slug]
 * .org → https://www.upforge.in/startup/[slug]
 */
export function getStartupUrl(slug: string, context: DomainContext): string {
  return context === 'org'
    ? `https://www.upforge.in/startup/${slug}`
    : `/startup/${slug}`
}

/**
 * getRegistryUrl(path, context)
 * .org → /registry/[path]
 * .in  → https://www.upforge.org/registry/[path]
 */
export function getRegistryUrl(path = '', context: DomainContext): string {
  const suffix = path ? `/${path}` : ''
  return context === 'in'
    ? `https://www.upforge.org/registry${suffix}`
    : `/registry${suffix}`
}

/**
 * getNavUrl(route, context)
 * Keeps Navbar/Footer links on the correct domain.
 * .in  owns: /startup/*, /founders, /sector, /reports
 * .org owns: /registry/*, /ufrn, /global
 * shared:    /about, /contact, etc. → always relative
 */
export function getNavUrl(route: string, context: DomainContext): string {
  const orgRoutes = ['/registry', '/ufrn', '/global']
  const inRoutes  = ['/startup', '/founders', '/sector', '/reports']
  if (orgRoutes.some(r => route.startsWith(r)) && context === 'in')
    return `https://www.upforge.org${route}`
  if (inRoutes.some(r => route.startsWith(r)) && context === 'org')
    return `https://www.upforge.in${route}`
  return route
}

/**
 * getCanonicalUrl(pathname, context)
 * Returns full canonical URL for a page path on the current domain.
 */
export function getCanonicalUrl(pathname: string, context: DomainContext): string {
  const { baseUrl } = getDomainMeta(context)
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${baseUrl}${cleanPath}`
}

/**
 * getAlternatesForLayout(pathname, context)
 * Returns Next.js `alternates` metadata object for hreflang.
 * Drop directly into generateMetadata() return values.
 */
export function getAlternatesForLayout(pathname: string, context: DomainContext) {
  const inUrl  = `https://www.upforge.in${pathname === '/' ? '' : pathname}`
  const orgUrl = `https://www.upforge.org${pathname === '/' ? '' : pathname}`
  return {
    canonical: context === 'in' ? inUrl : orgUrl,
    languages: {
      'en-IN':     inUrl,
      'en':        orgUrl,
      'x-default': orgUrl,
    },
  }
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

export function getOrganizationJsonLd(context: DomainContext) {
  const { baseUrl } = getDomainMeta(context)
  const isGlobal = context === 'org'
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'UpForge',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: isGlobal
      ? 'UpForge is the global startup registry and emerging market intelligence platform.'
      : "UpForge is India's independent, verified startup registry and founder intelligence platform.",
    foundingDate: '2024',
    areaServed: isGlobal
      ? { '@type': 'Place', name: 'Worldwide' }
      : { '@type': 'Country', name: 'India' },
    sameAs: [
      'https://twitter.com/upforge_in',
      'https://www.linkedin.com/company/upforge',
    ],
  }
}

export function getWebsiteJsonLd(context: DomainContext) {
  const { baseUrl, locale } = getDomainMeta(context)
  const searchBase = context === 'org'
    ? 'https://www.upforge.org/registry'
    : 'https://www.upforge.in/startup'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'UpForge',
    inLanguage: locale,
    publisher: { '@id': `${baseUrl}/#organization` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${searchBase}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
