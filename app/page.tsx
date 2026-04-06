// app/page.tsx
// GLOBAL AUTHORITY HOMEPAGE — UpForge Archive Edition

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"

// ------------------------------------------------
// DOMAIN DETECTION
// ------------------------------------------------

async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()

  const context = headersList.get("x-upforge-domain")

  if (context === "org" || context === "in") return context

  const host = headersList.get("host") ?? ""

  return host.includes("upforge.org") ? "org" : "in"
}

// ------------------------------------------------
// FETCH LIVE STARTUP COUNT
// ------------------------------------------------

async function getStartupCount(): Promise<number> {
  try {
    const supabase = await createClient()

    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")

    return count ?? 5000
  } catch {
    return 5000
  }
}

// ------------------------------------------------
// METADATA
// ------------------------------------------------

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()

  const canonical =
    domain === "org"
      ? "https://www.upforge.org"
      : "https://www.upforge.in"

  return {
    title:
      "UpForge | Global Startup Registry & Verified Builder Archive",

    description:
      "Explore the UpForge Registry — a verified global database of startups. Each approved company receives a permanent UFRN identifier.",

    alternates: { canonical },

    robots: { index: true, follow: true },

    openGraph: {
      title: "UpForge — Global Startup Registry",

      description:
        "Manual verification. Permanent identifiers. Global startup infrastructure.",

      url: canonical,
      siteName: "UpForge",
      type: "website",
    },
  }
}

// ------------------------------------------------
// PAGE
// ------------------------------------------------

export default async function HomePage() {
  const domain = await getDomain()

  const isOrg = domain === "org"

  const startupCount = await getStartupCount()

  return (
    <>
      <div className="magazine-root">

        {/* HERO */}

        <section className="editorial-hero">

          <div className="hero-overlay" />

          <div className="hero-container">

            <div className="hero-grid">

              <div>

                <span className="magazine-label">
                  GLOBAL STARTUP INFRASTRUCTURE
                </span>

                <h1 className="hero-headline">
                  {isOrg
                    ? "The global registry for verified startups."
                    : "India's verified archive of startup builders."}
                </h1>

                <div className="hero-divider" />

                <p className="hero-excerpt">
                  UpForge assigns every verified startup a permanent UFRN —
                  a proof-of-existence identifier trusted across ecosystems.
                </p>

                {/* CTA */}

                <div className="hero-cta">

                  <a href="/registry" className="primary-cta">
                    Explore Global Registry →
                  </a>

                  <a href="/submit" className="secondary-cta">
                    Submit Startup
                  </a>

                </div>

                {/* STATS */}

                <div className="hero-meta">

                  <div className="stat-block">
                    <span className="stat-number">
                      {startupCount.toLocaleString()}+
                    </span>

                    <span className="stat-label">
                      Verified Companies
                    </span>
                  </div>

                  <div className="stat-block">
                    <span className="stat-number">
                      100%
                    </span>

                    <span className="stat-label">
                      Manual Review
                    </span>
                  </div>

                  <div className="stat-block">
                    <span className="stat-number">
                      UFRN
                    </span>

                    <span className="stat-label">
                      Permanent Identifier
                    </span>
                  </div>

                </div>

              </div>

              <div className="hero-quote">

                <blockquote>
                  Verification is infrastructure. UpForge makes it global.
                </blockquote>

              </div>

            </div>

          </div>

        </section>

        {/* TRUST STRIP */}

        <section className="trust-strip">

          <div className="trust-strip-inner">

            <span>✓ Manual verification</span>
            <span>✓ Permanent UFRN</span>
            <span>✓ Open registry</span>
            <span>✓ Free submission</span>

          </div>

        </section>

        {/* ARCHIVE */}

        <section className="chronicle-section">

          <div className="chronicle-header">

            <span className="chronicle-label">
              THE UPFORGE ARCHIVE
            </span>

            <h2 className="chronicle-title">
              Verified startup builders from the innovation ecosystem.
            </h2>

            <div className="chronicle-line" />

          </div>

          <FounderChronicleClient

            founders={FOUNDERS}

            internalLinks={[

              {
                l: "Startup Registry",
                h: "/registry",
                desc: "Browse verified startups"
              },

              {
                l: "Submit Startup",
                h: "/submit",
                desc: "Get your startup listed"
              },

              {
                l: "Insights",
                h: "/blog",
                desc: "Startup intelligence & analysis"
              },

              {
                l: "About",
                h: "/about",
                desc: "Learn about UpForge"
              }

            ]}

            footerLinks={[

              {
                l: "Archive",
                h: "/",
                desc: "Startup builder archive"
              },

              {
                l: "Registry",
                h: "/registry",
                desc: "Global startup registry"
              },

              {
                l: "Submit",
                h: "/submit",
                desc: "Submit your startup"
              }

            ]}

          />

        </section>

        {/* BOOK NAVIGATION */}

        <section className="reading-nav">

          <a href="/startup">
            ← Previous
          </a>

          <a href="/registry">
            Next →
          </a>

        </section>

        {/* REGISTRY CTA */}

        <section className="registry-cta">

          <h2>
            Explore the Global Startup Registry
          </h2>

          <p>
            Every approved startup receives a permanent UpForge Registry Number —
            a proof-of-existence identifier for the internet economy.
          </p>

          <a href="/registry" className="primary-cta">
            Browse Registry →
          </a>

        </section>

      </div>

      {/* STYLES */}

      <style
        dangerouslySetInnerHTML={{
          __html: `

.magazine-root{
--gold:#c6a43b;
font-family:system-ui;
}

.editorial-hero{
position:relative;
min-height:60vh;
background:url('/masthead.jpg');
background-size:cover;
background-position:center;
display:flex;
align-items:center;
}

.hero-overlay{
position:absolute;
inset:0;
background:rgba(0,0,0,.6);
}

.hero-container{
position:relative;
max-width:1200px;
margin:auto;
padding:3rem;
color:white;
}

.hero-grid{
display:grid;
grid-template-columns:1fr .8fr;
gap:4rem;
}

@media(max-width:900px){
.hero-grid{
grid-template-columns:1fr;
}
}

.hero-headline{
font-size:clamp(2rem,4vw,4rem);
}

.hero-cta{
margin-top:2rem;
display:flex;
gap:1rem;
flex-wrap:wrap;
}

.primary-cta{
background:var(--gold);
padding:12px 22px;
color:white;
text-decoration:none;
}

.secondary-cta{
border:1px solid white;
padding:12px 22px;
color:white;
text-decoration:none;
}

.trust-strip{
background:black;
color:white;
padding:12px;
text-align:center;
}

.chronicle-section{
max-width:1200px;
margin:auto;
padding:4rem 2rem;
}

.reading-nav{
display:flex;
justify-content:space-between;
padding:2rem;
font-size:1.1rem;
}

.registry-cta{
text-align:center;
padding:4rem 2rem;
background:#fafafa;
}

`
        }}
      />

    </>
  )
}
