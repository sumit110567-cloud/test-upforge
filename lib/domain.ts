/**
 * lib/domain.ts — UpForge Domain Utilities (universal)
 * ✅ UPDATED FOR SEO MAXIMIZATION & AUTHORITY CONSOLIDATION (upforge.org)
 * ✅ Safe to import in BOTH Server Components AND Client Components.
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

export function getDomainContextClient(): DomainContext {
  if (typeof window === 'undefined') return 'org'
  const htmlDomain = document.documentElement.getAttribute('data-domain')
  return htmlDomain === 'in' ? 'in' : 'org'
}

// ─── getDomainMeta ────────────────────────────────────────────────────────────

export function getDomainMeta(context: DomainContext): DomainMeta {
  return {
    context:           'org',
    baseUrl:           'https://www.upforge.org',
    alternateUrl:      'https://www.upforge.in', 
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

export function getStartupUrl(slug: string): string {
  return `/startup/${slug}`
}

export function getRegistryUrl(path = ''): string {
  return `/registry${path ? `/${path}` : ''}`
}

export function getCanonicalUrl(pathname: string): string {
  const baseUrl = 'https://www.upforge.org'
  const cleanPath = pathname === '/' ? '' : pathname.replace(/\/$/, '')
  return `${baseUrl}${cleanPath}`
}

export function getAlternatesForLayout(pathname: string) {
  const path = pathname === '/' ? '' : pathname
  const orgUrl = `https://www.upforge.org${path}`
  
  return {
    canonical: orgUrl,
    languages: {
      'en':        orgUrl,
      'x-default': orgUrl,
      'en-IN':     orgUrl, 
    },
  }
}

// ─── JSON-LD helpers (SEO ENHANCED) ──────────────────────────────────────────

/**
 * Enhanced Organization Schema
 * Signals to Google that UpForge is an authority on Startups and Venture Capital.
 */
export function getOrganizationJsonLd(context: DomainContext) {
  const baseUrl = 'https://www.upforge.org'
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'UpForge',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: '512',
      height: '512'
    },
    description: 'UpForge is the global independent startup registry, providing verified data and intelligence on emerging market unicorns.',
    foundingDate: '2024',
    knowsAbout: [
      'Startup Ecosystems',
      'Venture Capital India',
      'Emerging Markets',
      'SaaS Startups',
      'AI Technology'
    ],
    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' }
    ],
    sameAs: [
      'https://twitter.com/upforge_in',
      'https://www.linkedin.com/company/upforge',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial support',
      email: 'team@upforge.org',
      url: `${baseUrl}/contact`
    }
  }
}

/**
 * Enhanced Website Schema
 * Enables the Sitelinks Searchbox in Google results.
 */
export function getWebsiteJsonLd(context: DomainContext) {
  const baseUrl = 'https://www.upforge.org'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'UpForge',
    alternateName: 'UpForge Global Startup Registry',
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

/**
 * New: Breadcrumb Schema Helper
 * Helps search engines display breadcrumbs in SERPs.
 */
export function getBreadcrumbJsonLd(items: { name: string; item: string }[]) {
  const baseUrl = 'https://www.upforge.org'
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${baseUrl}${item.item}`
    }))
  }
}
