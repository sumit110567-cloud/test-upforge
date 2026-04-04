/**
 * lib/domain.ts — UpForge Domain Utilities
 * FINAL SEO CONSOLIDATED VERSION (.org PRIMARY)
 */

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

// ─────────────────────────────────────────────
// CLIENT DOMAIN DETECTION
// ─────────────────────────────────────────────

export function getDomainContextClient(): DomainContext {
  if (typeof window === 'undefined') return 'org'
  const htmlDomain = document.documentElement.getAttribute('data-domain')
  return htmlDomain === 'in' ? 'in' : 'org'
}

// ─────────────────────────────────────────────
// DOMAIN META CONFIG
// ─────────────────────────────────────────────

export function getDomainMeta(context: DomainContext): DomainMeta {

  const isIndia = context === 'in'

  return {
    context,
    baseUrl: 'https://www.upforge.org',
    alternateUrl: 'https://www.upforge.in',
    isIndia,
    isGlobal: true,
    locale: isIndia ? 'en-IN' : 'en-US',
    hreflangSelf: isIndia ? 'en-IN' : 'en',
    hreflangAlternate: isIndia ? 'en' : 'en-IN',
    siteName: 'UpForge',
    region: isIndia ? 'IN' : 'GLOBAL',
  }
}

// ─────────────────────────────────────────────
// URL HELPERS
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// HREFLANG + CANONICAL
// ─────────────────────────────────────────────

export function getAlternatesForLayout(pathname: string) {

  const path = pathname === '/' ? '' : pathname
  const orgUrl = `https://www.upforge.org${path}`

  return {
    canonical: orgUrl,
    languages: {
      en: orgUrl,
      'x-default': orgUrl,
    },
  }
}

// ─────────────────────────────────────────────
// JSON-LD ORGANIZATION
// ─────────────────────────────────────────────

export function getOrganizationJsonLd() {

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

    description:
      'UpForge is the global independent startup registry providing verified intelligence on emerging startups worldwide.',

    foundingDate: '2024',

    areaServed: [
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' }
    ],

    sameAs: [
      'https://twitter.com/upforge_in',
      'https://www.linkedin.com/company/upforge'
    ],

    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'editorial support',
      email: 'team@upforge.org',
      url: `${baseUrl}/contact`
    }
  }
}

// ─────────────────────────────────────────────
// JSON-LD WEBSITE
// ─────────────────────────────────────────────

export function getWebsiteJsonLd() {

  const baseUrl = 'https://www.upforge.org'

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website',

    url: baseUrl,

    name: 'UpForge',

    alternateName:
      'UpForge Global Startup Registry',

    publisher: {
      '@id': `${baseUrl}/#organization`
    },

    potentialAction: {
      '@type': 'SearchAction',

      target: {
        '@type': 'EntryPoint',

        urlTemplate:
          `${baseUrl}/registry?q={search_term_string}`,
      },

      'query-input':
        'required name=search_term_string',
    },
  }
}

// ─────────────────────────────────────────────
// JSON-LD BREADCRUMB
// ─────────────────────────────────────────────

export function getBreadcrumbJsonLd(
  items: { name: string; item: string }[]
) {

  const baseUrl = 'https://www.upforge.org'

  return {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: items.map(
      (item, index) => ({
        '@type': 'ListItem',

        position: index + 1,

        name: item.name,

        item: item.item.startsWith('http')
          ? item.item
          : `${baseUrl}${item.item}`,
      })
    ),
  }
}
