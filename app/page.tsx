// app/page.tsx  ←  SERVER COMPONENT
// CRITICAL: No "use client" here.
// All 10 founder stories render as static HTML — visible to Google on first crawl.
// Client interactivity (tab switching, video facade) is handled by
// FounderChronicleClient imported below.

import type { Metadata } from "next"
import { FounderChronicleClient } from "@/components/founder-chronicle-client"
import { FOUNDERS } from "@/data/founders"

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export const metadata: Metadata = {
  title: "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge",
  description:
    "Verified stories of India's top startup founders — Zepto, Zerodha, Nykaa, CRED, OYO, Paytm, Ola, Sarvam AI, and InternAdda. The Founder Chronicle, March 2026 edition by UpForge.",
  alternates: {
    canonical: "https://www.upforge.in",
  },
  openGraph: {
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026",
    description:
      "10 verified founder stories from India's most consequential startups. The Founder Chronicle by UpForge — March 2026.",
    url: "https://www.upforge.in",
    siteName: "UpForge",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.upforge.in/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "UpForge Founder Chronicle 2026 — India's Greatest Startup Builders",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026",
    description:
      "10 verified stories: Zepto, Zerodha, Nykaa, CRED, OYO, Paytm, Ola, Sarvam AI. Free. Verified. UpForge.",
    images: ["https://www.upforge.in/og/founder-chronicle.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
  },
}

// ---------------------------------------------------------------------------
// STRUCTURED DATA
// Note: Organization and WebSite schemas are in layout.tsx.
// This page adds only page-specific schemas.
// No @graph — separate scripts for clean Google parsing.
// ---------------------------------------------------------------------------
function buildCollectionPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.upforge.in/#collectionpage",
    name: "The Founder Chronicle — India's Greatest Startup Builders 2026",
    description:
      "Verified stories of India's top startup founders — Zepto, Zerodha, Nykaa, CRED, OYO, Paytm, and more. March 2026 edition.",
    url: "https://www.upforge.in",
    inLanguage: "en-IN",
    isPartOf: { "@id": "https://www.upforge.in/#website" },
    publisher: { "@id": "https://www.upforge.in/#organization" },
    datePublished: "2026-03-01",
    dateModified: "2026-03-15",
    image: {
      "@type": "ImageObject",
      url: "https://www.upforge.in/og/founder-chronicle.png",
      width: 1200,
      height: 630,
    },
  }
}

function buildItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.upforge.in/#founderlist",
    name: "Indian Startup Founders 2026",
    description:
      "India's top startup founders profiled by UpForge — verified data, editorial format.",
    numberOfItems: FOUNDERS.length,
    itemListElement: FOUNDERS.map((f, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${f.name} — ${f.company}`,
      url: `https://www.upforge.in/startup/${f.slug}`,
      description: f.deck,
    })),
  }
}

// ---------------------------------------------------------------------------
// SAFE INTERNAL LINKS
// Only routes that exist and return 200.
// Dead links on the homepage damage domain authority directly.
// ---------------------------------------------------------------------------
const HOMEPAGE_INTERNAL_LINKS = [
  { l: "Startup Registry India", h: "/startup",  desc: "Full verified database" },
  { l: "Submit Your Startup",    h: "/submit",   desc: "Get listed free"        },
  { l: "The Forge — Blog",       h: "/blog",     desc: "Startup intelligence"   },
  { l: "About UpForge",          h: "/about",    desc: "Our mission"            },
  // Uncomment only when these routes exist and return 200:
  // { l: "AI Startups India",    h: "/startups/ai",      desc: "Best AI companies 2026" },
  // { l: "Fintech Startups",     h: "/startups/fintech", desc: "Zerodha, CRED, Paytm"   },
  // { l: "Unicorns 2026",        h: "/startups/unicorns",desc: "All 126 unicorns"        },
  // { l: "Edtech Startups",      h: "/startups/edtech",  desc: "PhysicsWallah & more"   },
]

const FOOTER_NAV_LINKS = [
  { l: "The Founder Chronicle", h: "/"        },
  { l: "Startup Registry",      h: "/startup" },
  { l: "Blog",                  h: "/blog"    },
  { l: "Submit Startup",        h: "/submit"  },
  { l: "About UpForge",         h: "/about"   },
]

// ---------------------------------------------------------------------------
// PAGE COMPONENT — SERVER RENDERED
// ---------------------------------------------------------------------------
export default function HomePage() {
  return (
    <>
      {/* Structured data — page-specific only */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildCollectionPageSchema()),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildItemListSchema()),
        }}
      />

      {/*
        FounderChronicleClient handles ALL client-side interactivity:
        - Tab navigation between founders
        - YouTube video facade
        - Pagination dots
        - Scroll-to-top on founder change

        CRITICAL SEO MECHANISM:
        The server-rendered hidden index below this component ensures
        all 10 founder names, companies, and profile URLs are in the
        static HTML that Google crawls — regardless of which tab is active.
        Google discovers all 10 startup pages from the homepage on every crawl.
      */}
      <FounderChronicleClient
        founders={FOUNDERS}
        internalLinks={HOMEPAGE_INTERNAL_LINKS}
        footerLinks={FOOTER_NAV_LINKS}
      />

      {/*
        SERVER-RENDERED SEO INDEX
        This section is visually hidden but present in static HTML.
        It guarantees all 10 founder profiles are crawlable by Google
        regardless of the client-side tab state.

        Do NOT use display:none — Google ignores display:none content.
        Use sr-only (clip-based hiding) which is accessible and crawlable.
      */}
      <div className="sr-only" aria-hidden="true">
        <h2>All Founders in This Edition</h2>
        <ul>
          {FOUNDERS.map((f) => (
            <li key={f.slug}>
              <a href={`/startup/${f.slug}`}>
                {f.name} — {f.company} — {f.category}
              </a>
              <p>{f.deck}</p>
              <p>{f.headline}</p>
            </li>
          ))}
        </ul>
        <h2>Explore Indian Startups</h2>
        <ul>
          {HOMEPAGE_INTERNAL_LINKS.map((lnk) => (
            <li key={lnk.h}>
              <a href={lnk.h}>{lnk.l}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
