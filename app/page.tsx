// app/page.tsx  ←  SERVER COMPONENT
// FIX: headers() wrapped in try/catch — safe for both static + dynamic rendering.
// Next.js 15 crashes if headers() is called during static generation phase.
// Solution: fall back to "in" silently at build time.

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "@/components/founder-chronicle-client"
import { FOUNDERS } from "@/data/founders"

// ---------------------------------------------------------------------------
// SAFE DOMAIN DETECTION — try/catch prevents build-time crash
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  try {
    const h = await headers()
    const host = h.get("host") ?? ""
    return host.includes("upforge.org") ? "org" : "in"
  } catch {
    return "in" // static generation fallback
  }
}

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const isOrg = (await getDomain()) === "org"
  const base  = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const og    = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) {
    return {
      title: "UpForge Global Startup Registry — Verified Startup Database | upforge.org",
      description: "The open, independent, verified global registry of startups. Every listing is manually reviewed and assigned a unique UFRN. Free to access, forever.",
      keywords: ["global startup registry","verified startup database","UFRN startup registry","upforge registry","Indian startup founders 2026"],
      alternates: { canonical: base },
      openGraph: { title: "UpForge Global Startup Registry", description: "Open, independent, verified registry. Every startup gets a unique UFRN.", url: base, siteName: "UpForge Global Registry", locale: "en", type: "website", images: [{ url: og, width: 1200, height: 630 }] },
      twitter: { card: "summary_large_image", site: "@upforge_in", title: "UpForge Global Startup Registry", images: [og] },
      robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
    }
  }

  return {
    title: "The Founder Chronicle 2026 — India's Greatest Startup Founders | UpForge",
    description: "Verified stories of India's most iconic startup founders — Zepto, Zerodha, Nykaa, CRED, OYO, Sarvam AI, PhysicsWallah, Groww, Meesho & more. March 2026 edition by UpForge.",
    keywords: ["Aadit Palicha Zepto founder","Indian startup founders 2026","India unicorn founders","Zepto founder story","CRED founder story","UpForge Founder Chronicle"],
    alternates: { canonical: base },
    openGraph: { title: "The Founder Chronicle 2026 — India's Greatest Startup Founders | UpForge", description: "10 verified founder stories. Free. Deep. Verified. UpForge.", url: base, siteName: "UpForge", locale: "en_IN", type: "website", images: [{ url: og, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", site: "@upforge_in", creator: "@upforge_in", title: "The Founder Chronicle 2026", images: [og] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } },
  }
}

// ---------------------------------------------------------------------------
// SCHEMAS
// ---------------------------------------------------------------------------
function org(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"Organization","@id":`${b}/#organization`,name:"UpForge",url:b,logo:{url:"https://www.upforge.in/logo.jpg"},sameAs:["https://www.upforge.in","https://www.upforge.org","https://www.linkedin.com/company/upforge-india"],description:isOrg?"UpForge is the global open startup registry — independent, verified, free.":"UpForge is India's independent startup registry — tracking 5000+ companies.",areaServed:isOrg?"Worldwide":"India" }
}
function website(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"WebSite","@id":`${b}/#website`,url:b,name:isOrg?"UpForge Global Registry":"UpForge",publisher:{"@id":`${b}/#organization`},potentialAction:{"@type":"SearchAction",target:{urlTemplate:`${b}/startup?q={search_term_string}`},"query-input":"required name=search_term_string"} }
}
function dataset() {
  return { "@context":"https://schema.org","@type":"Dataset","@id":"https://www.upforge.org/#dataset",name:"UpForge Global Startup Registry Dataset",description:"Open, verified database of startups. Each assigned a unique UFRN. Free under CC BY 4.0.",url:"https://www.upforge.org",creator:{"@type":"Organization",name:"UpForge",url:"https://www.upforge.org"},license:"https://creativecommons.org/licenses/by/4.0/",isAccessibleForFree:true }
}
function collection(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"CollectionPage","@id":`${b}/#collectionpage`,name:isOrg?"UpForge Global Startup Registry":"The Founder Chronicle 2026 — India's Greatest Startup Founders",url:b,inLanguage:isOrg?"en":"en-IN",publisher:{"@id":`${b}/#organization`} }
}
function itemlist(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"ItemList","@id":`${b}/#founderlist`,name:"India's Top Startup Founders 2026",numberOfItems:FOUNDERS.length,itemListElement:FOUNDERS.map((f,i)=>({ "@type":"ListItem",position:i+1,name:`${f.name} — ${f.company}`,url:`${b}/startup/${f.slug}`,description:f.deck })) }
}
function breadcrumb(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{ "@type":"ListItem",position:1,name:"UpForge",item:b },{ "@type":"ListItem",position:2,name:isOrg?"Global Registry":"The Founder Chronicle 2026",item:b }] }
}
function faq(isOrg: boolean) {
  const b = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return {
    "@context":"https://schema.org","@type":"FAQPage",
    mainEntity:[
      { "@type":"Question",name:"Who are the top startup founders in India in 2026?",acceptedAnswer:{ "@type":"Answer",text:"India's top founders in 2026 include Aadit Palicha (Zepto $5.9B), Vivek Raghavan (Sarvam AI), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa). UpForge profiles all with verified data." } },
      { "@type":"Question",name:"Who founded Zepto?",acceptedAnswer:{ "@type":"Answer",text:"Zepto was founded in 2021 by Aadit Palicha and Kaivalya Vohra — Stanford dropouts aged 19. They pivoted from failed KiranaKart to a dark-store model. Zepto reached $5.9B valuation by 2025." } },
      { "@type":"Question",name:isOrg?"What is a UFRN?":"Which Indian startups are unicorns in 2026?",acceptedAnswer:{ "@type":"Answer",text:isOrg?"The UFRN (UpForge Registry Number) is a unique startup ID — format UF-YYYY-IND-XXXXX. Assigned on approval as a permanent proof of existence.":"India had 126 unicorns as of early 2026 including Zepto, Sarvam AI, Groww, CRED, Meesho, Rapido, Porter, Spinny." } },
      { "@type":"Question",name:"How do I find verified data on Indian startups?",acceptedAnswer:{ "@type":"Answer",text:`UpForge has 5000+ verified Indian startups. Search at ${b}/startup by sector, city, or funding stage.` } },
    ]
  }
}

// ---------------------------------------------------------------------------
// STATIC LINKS
// ---------------------------------------------------------------------------
const LINKS = [
  { l:"Startup Registry India", h:"/startup", desc:"5000+ verified startups" },
  { l:"Submit Your Startup",    h:"/submit",  desc:"Get listed free"         },
  { l:"The Forge — Blog",       h:"/blog",    desc:"Intelligence & analysis" },
  { l:"About UpForge",          h:"/about",   desc:"Our mission"             },
]
const FOOTER = [
  { l:"The Founder Chronicle", h:"/"        },
  { l:"Startup Registry",      h:"/startup" },
  { l:"Blog",                  h:"/blog"    },
  { l:"Submit Startup",        h:"/submit"  },
  { l:"About UpForge",         h:"/about"   },
]

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const isOrg = (await getDomain()) === "org"
  const base  = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website(isOrg)) }} />
      {isOrg && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(dataset()) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collection(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemlist(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq(isOrg)) }} />

      <FounderChronicleClient founders={FOUNDERS} internalLinks={LINKS} footerLinks={FOOTER} />

      <div className="sr-only" aria-label="Full editorial index">
        <section>
          <h1>{isOrg ? "UpForge Global Startup Registry" : "The Founder Chronicle 2026 — India's Greatest Startup Founders"}</h1>
          <p>{isOrg ? "Open, independent, verified database of startups. Every startup assigned a unique UFRN." : "UpForge's Founder Chronicle — 10 iconic Indian startup founders, March 2026 edition."}</p>
          <h2>Founders Featured</h2>
          <ul>
            {FOUNDERS.map((f) => (
              <li key={f.slug}>
                <a href={`/startup/${f.slug}`}>{f.name} — {f.company} — {f.role} — {f.city}</a>
                <p>{f.deck} · Founded: {f.founded} · Valuation: {f.valuation}</p>
              </li>
            ))}
          </ul>
        </section>
        {isOrg && (
          <section>
            <h2>What is the UFRN?</h2>
            <p>The UFRN (UpForge Registry Number) is a unique permanent ID — format UF-YYYY-IND-XXXXX — assigned to every approved startup as proof of existence. Submit at upforge.in/submit.</p>
          </section>
        )}
        <section>
          <h2>Explore Startups</h2>
          <ul>{LINKS.map((l) => <li key={l.h}><a href={l.h}>{l.l}</a> — {l.desc}</li>)}</ul>
          <ul>{FOUNDERS.map((f) => <li key={f.slug}><a href={`/startup/${f.slug}`}>{f.name} — {f.company} founder story</a> · {f.category} · {f.valuation}</li>)}</ul>
        </section>
      </div>
    </>
  )
}
