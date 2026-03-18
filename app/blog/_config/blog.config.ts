// app/blog/_config/blog.config.ts
// Shared configuration for all static blog posts.
// Import this in each post's page.tsx to ensure consistency.

export const BLOG_BASE_URL = "https://www.upforge.in/blog"
export const SITE_BASE_URL = "https://www.upforge.in"

export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  keywords: string[]
  // ISO date string — set once, never auto-generated
  datePublished: string
  dateModified: string
  readTime: string
  category: string
  heroImage: string
  heroImageAlt: string
  wordCount: number
}

// Builds consistent metadata for all blog posts
export function buildBlogMetadata(post: BlogPostMeta) {
  const url = `${BLOG_BASE_URL}/${post.slug}`
  const ogImage = `${SITE_BASE_URL}/og/blog-${post.slug}.png`

  return {
    title: `${post.title} | UpForge`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      siteName: "UpForge",
      locale: "en_IN",
      type: "article" as const,
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: post.heroImageAlt,
          type: "image/png",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large" as const,
      },
    },
  }
}

// Builds consistent JSON-LD for all blog posts
export function buildBlogJsonLd(post: BlogPostMeta) {
  const url = `${BLOG_BASE_URL}/${post.slug}`
  const ogImage = `${SITE_BASE_URL}/og/blog-${post.slug}.png`

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    url,
    inLanguage: "en-IN",
    articleSection: post.category,
    wordCount: post.wordCount,
    keywords: post.keywords.join(", "),
    image: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
    author: {
      "@type": "Organization",
      "@id": `${SITE_BASE_URL}/#organization`,
      name: "UpForge",
      url: SITE_BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_BASE_URL}/#organization`,
      name: "UpForge",
      url: SITE_BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_BASE_URL}/logo.png`,
        width: 512,
        height: 512,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    isPartOf: {
      "@id": `${SITE_BASE_URL}/#website`,
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",  item: SITE_BASE_URL },
        { "@type": "ListItem", position: 2, name: "Blog",  item: `${SITE_BASE_URL}/blog` },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// SAFE INTERNAL LINKS
// Only routes that return HTTP 200. Add when new routes go live.
// ─────────────────────────────────────────────────────────────────────────────
export const SAFE_BLOG_FOOTER_LINKS = [
  { l: "All Indian Startups",            h: "/startup"                                           },
  { l: "Submit Your Startup",            h: "/submit"                                            },
  { l: "The Forge — Blog",               h: "/blog"                                              },
  { l: "Top AI Startups India 2026",     h: "/blog/top-ai-startups-india-2026"                   },
  { l: "How to Start a Startup India",   h: "/blog/how-to-start-startup-india-2026"              },
  { l: "About UpForge",                  h: "/about"                                             },
  // Uncomment when live:
  // { l: "AI Startups India",           h: "/startups/ai-ml"    },
  // { l: "FinTech Startups India",      h: "/startups/fintech"  },
  // { l: "Indian Unicorns 2026",        h: "/startups/unicorns" },
]

// ─────────────────────────────────────────────────────────────────────────────
// ALL BLOG SLUGS
// Single source of truth for every live blog post.
// Used by related-post grids across all post pages.
// Add new entries here when publishing new posts — they auto-propagate
// to every page that imports this array.
// ─────────────────────────────────────────────────────────────────────────────
export const ALL_BLOG_SLUGS = [
  {
    slug:     "india-startup-ecosystem-2026",
    title:    "India Startup Ecosystem 2026",
    category: "Ecosystem",
  },
  {
    slug:     "top-indian-unicorns-2026",
    title:    "Top Indian Unicorns 2026",
    category: "Unicorn Report",
  },
  {
    slug:     "how-to-get-startup-funding-india-2026",
    title:    "How to Get Startup Funding in India 2026",
    category: "Funding Guide",
  },
  {
    slug:     "best-indian-startup-founders-to-follow-2026",
    title:    "Best Indian Startup Founders 2026",
    category: "Founder Profiles",
  },
  {
    slug:     "leadership-lessons-ind-vs-nz-final-2026",
    title:    "Leadership Lessons — IND vs NZ Final 2026",
    category: "Leadership",
  },
  {
    slug:     "startup-ideas-inspired-by-ind-vs-nz-final-2026",
    title:    "5 Startup Ideas from IND vs NZ Final 2026",
    category: "Startup Ideas",
  },
  // ── NEW POSTS ──────────────────────────────────────────────────────────────
  {
    slug:     "top-ai-startups-india-2026",
    title:    "Top AI Startups in India (2026 Updated List)",
    category: "AI & Deep Tech",
  },
  {
    slug:     "how-to-start-startup-india-2026",
    title:    "How to Start a Startup in India (Step-by-Step Guide 2026)",
    category: "Founder Playbook",
  },
]
