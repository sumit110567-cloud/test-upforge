/**
 * lib/domain.ts — UpForge Domain Utilities (universal)
 * * ✅ UPDATED FOR AUTHORITY CONSOLIDATION (upforge.org)
 * ✅ Safe to import in BOTH Server Components AND Client Components.
 * ✅ No 'next/headers', no browser APIs at module level.
 */

// ─── Types ────────────────────────────────────────────────────────────────────

export type DomainContext = 'in' | 'org'

export interface DomainMeta {
  context: DomainContext
  baseUrl: string
  alternateUrl: string // Kept for legacy support/redirect mapping
  isIndia: boolean
  isGlobal: boolean
  locale: string
  hreflangSelf: string
  hreflangAlternate: string
  siteName: string
  region: 'IN' | 'GLOBAL'
}

// ─── Client-safe domain detection ────────────────────────────────────────────

export function getDomainContextClient(): DomainContext {
  if (typeof window === 'undefined') {
    // During migration, we default to 'org' for all environment triggers
    return 'org'
  }
  const htmlDomain = document.documentElement.getAttribute('data-domain')
  // We prioritize 'org' even if the attribute hasn't updated yet
  if (htmlDomain === 'org') return 'org'
  
  // If still on .in, we treat context as 'org' to ensure UI/Links point to the new home
  return 'org'
}

// ─── getDomainMeta ────────────────────────────────────────────────────────────

/**
 * getDomainMeta(context)
 * Updated to ensure both contexts point back to .org as the primary base.
 */
export function getDomainMeta(context: DomainContext): DomainMeta {
  // Global Authority (Primary)
  return {
    context:           'org',
    baseUrl:           'https://www.upforge.org',
    alternateUrl:      'https://www.upforge.in', // Legacy
    isIndia:           context === 'in', 
    isGlobal:          true,
    locale:            context === 'in' ? 'en-IN' : 'en-US',
    hreflangSelf:      'en',
    hreflangAlternate: 'en-IN',
    siteName:          'UpForge',
    region:            context === 'in' ? 'IN' : 'GLOBAL',
  }
}

// ─── URL helpers ──────────────────────────────────────────────────────────────

/**
 * getStartupUrl(slug, context)
 * Always returns relative paths to keep the user on the current (consolidated) domain.
 */
export function getStartupUrl(slug: string, context: DomainContext): string {
  return `/startup/${slug}`
}

/**
 * getRegistryUrl(path, context)
 * Consolidated to the main registry path.
 */
export function getRegistryUrl(path = '', context: DomainContext): string {
  const suffix = path ? `/${path}` : ''
  return `/registry${suffix}`
}

/**
 * getNavUrl(route, context)
 * No longer performs cross-domain switching. All navigation stays on .org.
 */
export function getNavUrl(route: string, context: DomainContext): string {
  return route
}

/**
 * getCanonicalUrl(pathname, context)
 * CRITICAL: Always returns the .org URL to consolidate SEO juice.
 */
export function getCanonicalUrl(pathname: string, context: DomainContext): string {
  const baseUrl = 'https://www.upforge.org'
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${baseUrl}${cleanPath}`
}

/**
 * getAlternatesForLayout(pathname, context)
 * Tells Google: "The .org is the main version (x-default)."
 */
export function getAlternatesForLayout(pathname: string, context: DomainContext) {
  const path = pathname === '/' ? '' : pathname
  const orgUrl = `https://www.upforge.org${path}`
  
  return {
    canonical: orgUrl,
    languages: {
      'en':        orgUrl,
      'x-default': orgUrl,
      // We keep a self-referencing en-IN tag if the user is in an India context,
      // but it still points to the .org domain structure.
      'en-IN':     orgUrl, 
    },
  }
}

// ─── JSON-LD helpers ──────────────────────────────────────────────────────────

export function getOrganizationJsonLd(context: DomainContext) {
  const baseUrl = 'https://www.upforge.org'
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'UpForge',
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description: 'UpForge is the global startup registry and emerging market intelligence platform.',
    foundingDate: '2024',
    areaServed: [
      { '@type': 'Place', name: 'Worldwide' },
      { '@type': 'Country', name: 'India' }
    ],
    sameAs: [
      'https://twitter.com/upforge_in',
      'https://www.linkedin.com/company/upforge',
    ],
  }
}

export function getWebsiteJsonLd(context: DomainContext) {
  const baseUrl = 'https://www.upforge.org'
  const { locale } = getDomainMeta(context)
  
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
        urlTemplate: `${baseUrl}/registry?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}
