/**
 * lib/domain.ts — UpForge Global Authority
 * VERSION: SINGLE DOMAIN CONSOLIDATED (.org PRIMARY)
 */

export type DomainContext = 'org' | 'in'

export interface DomainMeta {
  context: DomainContext
  baseUrl: string
  isGlobal: boolean
  locale: string
  hreflangSelf: string
  siteName: string
  region: 'GLOBAL'
}

export function getDomainContextClient(): DomainContext {
  return 'org'
}

/**
 * FIXED: Added ctx parameter to satisfy calls in app/startup/page.tsx
 * Logic is locked to .org to consolidate SEO authority.
 */
export function getDomainMeta(ctx?: DomainContext): DomainMeta {
  return {
    context: 'org',
    baseUrl: 'https://www.upforge.org',
    isGlobal: true,
    locale: 'en-US',
    hreflangSelf: 'en',
    siteName: 'UpForge',
    region: 'GLOBAL',
  }
}

// ... rest of your URL helpers (getStartupUrl, getRegistryUrl, etc.)

/**
 * FIXED: Added ctx parameter to satisfy calls in app/layout.tsx
 */
export function getOrganizationJsonLd(ctx?: DomainContext) {
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
    // ... rest of schema
  }
}

/**
 * FIXED: Added ctx parameter to satisfy calls in app/layout.tsx
 */
export function getWebsiteJsonLd(ctx?: DomainContext) {
  const baseUrl = 'https://www.upforge.org'
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    url: baseUrl,
    name: 'UpForge',
    // ... rest of schema
  }
}
