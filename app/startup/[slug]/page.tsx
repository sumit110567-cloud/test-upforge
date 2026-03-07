// app/startup/[slug]/page.tsx
// ZERO logic changes — UI upgraded to match UpForge broadsheet design system

import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"
import { BadgeCheck, Shield, Globe, ChevronRight } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── METADATA — unchanged logic ───────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) {
    return {
      title: "Startup Not Found | UpForge",
      description:
        "The requested startup profile could not be found in the UpForge founder registry.",
    }
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`
  const title = `${startup.name} | Official Startup Profile | UpForge`
  const description =
    startup.description ||
    `View the verified public startup profile of ${startup.name} on UpForge.`

  return {
    title,
    description,
    alternates: { canonical: profileUrl },
    keywords: [
      startup.name,
      `${startup.name} startup`,
      `${startup.name} India`,
      startup.industry || startup.category,
      "Indian startup",
      "verified startup India",
      "UpForge founder registry",
      startup.city,
      startup.founded_year ? `founded ${startup.founded_year}` : "",
    ]
      .filter(Boolean)
      .join(", "),
    openGraph: {
      title,
      description,
      url: profileUrl,
      siteName: "UpForge",
      images: [
        {
          url: startup.logo_url || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${startup.name} Official Profile`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      site: "@upforge_in",
      images: [startup.logo_url || "/og-image.jpg"],
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
}

// ─── PAGE — unchanged logic, upgraded visual wrapper ─────────────────────────
export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) {
    notFound()
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`

  // JSON-LD — unchanged
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: startup.name,
    description: startup.description,
    url: startup.website || profileUrl,
    logo: startup.logo_url,
    foundingDate: startup.founded_year?.toString(),
    industry: startup.category,
    areaServed: "India",
    sameAs: [
      startup.linkedin_url,
      startup.twitter_url,
      startup.instagram_url,
    ].filter(Boolean),
    memberOf: {
      "@type": "Organization",
      name: "UpForge Founder Registry",
      url: "https://www.upforge.in",
    },
  }

  const updatedAt = new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true,
  })
  const todayStr = new Date().toLocaleDateString("en-IN", {
    weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata",
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        *,*::before,*::after{box-sizing:border-box}
        .uf{background:#fff;color:#1a1a1a;font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--bg:#fff;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--gr:#c9960d;--pos:#1a6b3a;--neg:#b91c1c}
        .uf-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}

        /* animations */
        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .45s .04s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:up .45s .14s cubic-bezier(.16,1,.3,1) both}
        .a2{animation:up .45s .24s cubic-bezier(.16,1,.3,1) both}

        /* live dot */
        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:pulse 2s ease-in-out infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(2);opacity:0}}

        /* pill */
        .pill{display:inline-flex;align-items:center;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;padding:3px 8px;border:1px solid currentColor;font-family:'Source Serif 4',Georgia,serif}

        /* verified badge */
        .vbadge{display:inline-flex;align-items:center;gap:4px;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--pos);border:1px solid var(--pos);padding:3px 9px;font-family:'Source Serif 4',Georgia,serif}

        /* breadcrumb */
        .bc-link{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink4);font-family:'Source Serif 4',Georgia,serif;transition:color .15s}
        .bc-link:hover{color:var(--ink)}

        /* trust badges */
        .trust-badge{display:inline-flex;align-items:center;gap:5px;font-size:9px;font-weight:700;letter-spacing:.12em;text-transform:uppercase}

        /* thick rule */
        .rule-t{height:2px;background:var(--ink)}

        @media(max-width:640px){
          .hide-mob{display:none !important}
          .cert-inner{flex-direction:column !important}
          .trust-row{flex-direction:column !important;align-items:flex-start !important}
        }
      `}</style>

      <div className="uf" style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />

        <main style={{ flex: 1 }}>

          {/* Sponsor banner — unchanged condition */}
          {startup.is_sponsored && (
            <div style={{
              background: "var(--ink)", color: "var(--gold)", textAlign: "center",
              padding: "10px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.35em",
              textTransform: "uppercase", fontFamily: "'Source Serif 4',serif",
            }}>
              ★ &nbsp; Featured Startup · Sponsored Listing on UpForge
            </div>
          )}

          {/* ── HEADER BAND ── */}
          <div className="a0" style={{ borderBottom: "2px solid var(--ink)", background: "#fff" }}>
            <div className="uf-wrap">

              {/* Top strip — date / trust / live */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--rule)", flexWrap: "wrap", gap: "8px" }}>
                <span className="uf-lbl" style={{ color: "var(--ink2)", fontWeight: 700 }}>{todayStr} · Vol. II</span>
                <div className="hide-mob" style={{ display: "flex", gap: "20px" }}>
                  {["Independent", "Ad-Free", "Verified"].map((t) => (
                    <span key={t} style={{ fontSize: "10px", color: "var(--ink4)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Source Serif 4',serif" }}>✓ {t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div className="dot" />
                  <span className="uf-lbl" style={{ color: "var(--ink4)" }}>Updated {updatedAt} IST</span>
                </div>
              </div>

              {/* Breadcrumb */}
              <nav aria-label="Breadcrumb" style={{ display: "flex", alignItems: "center", gap: "4px", padding: "11px 0", borderBottom: "1px solid var(--rl)" }}>
                <a href="/" className="bc-link">Home</a>
                <ChevronRight style={{ width: "11px", height: "11px", color: "var(--ink4)" }} />
                <a href="/startup" className="bc-link">Registry</a>
                <ChevronRight style={{ width: "11px", height: "11px", color: "var(--ink4)" }} />
                <span style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--ink)", fontWeight: 700, fontFamily: "'Source Serif 4',serif", maxWidth: "200px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                  {startup.name}
                </span>
              </nav>

              {/* ── PROFILE HEADER ── */}
              <div style={{ padding: "clamp(24px,5vw,48px) 0 0" }}>

                {/* Logo + Name + Tagline */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "clamp(14px,3vw,24px)", marginBottom: "clamp(20px,4vw,36px)" }}>

                  {/* Startup logo box */}
                  {startup.logo_url && (
                    <div style={{
                      width: "clamp(52px,7vw,68px)", height: "clamp(52px,7vw,68px)",
                      border: "1px solid var(--rule)", background: "var(--off)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}>
                      <img src={startup.logo_url} alt={startup.name} style={{ maxWidth: "80%", maxHeight: "80%", objectFit: "contain" }} />
                    </div>
                  )}

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h1 className="uf-d" style={{
                      fontSize: "clamp(2rem,5.5vw,3.8rem)", fontWeight: 900,
                      color: "var(--ink)", lineHeight: 0.9, marginBottom: startup.tagline ? "12px" : "0",
                    }}>
                      {startup.name}
                    </h1>
                    {startup.tagline && (
                      <p style={{
                        fontSize: "clamp(13px,1.8vw,15px)", color: "var(--ink3)",
                        fontStyle: "italic", fontFamily: "'Playfair Display',Georgia,serif",
                        lineHeight: 1.5, maxWidth: "600px", marginBottom: 0,
                      }}>
                        {startup.tagline}
                      </p>
                    )}
                  </div>
                </div>

                {/* Meta strip — founded · sector · city · stage */}
                <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid var(--rule)" }}>
                  {([
                    startup.founded_year && { label: "Founded",  value: String(startup.founded_year) },
                    (startup.industry || startup.category) && { label: "Sector", value: startup.industry || startup.category },
                    startup.city         && { label: "Based In", value: startup.city },
                    startup.funding_stage && { label: "Stage",   value: startup.funding_stage },
                  ] as any[])
                    .filter(Boolean)
                    .map((item: any, i: number) => (
                      <div key={i} style={{
                        display: "flex", flexDirection: "column", justifyContent: "center",
                        padding: "11px 20px",
                        borderRight: "1px solid var(--rule)",
                        borderBottom: "1px solid var(--rule)",
                        background: i % 2 === 1 ? "var(--warm)" : "#fff",
                      }}>
                        <span className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)", marginBottom: "3px" }}>{item.label}</span>
                        <span style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',serif", whiteSpace: "nowrap" }}>{item.value}</span>
                      </div>
                    ))}
                  {/* Live badge — pushed to end */}
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", padding: "11px 20px", marginLeft: "auto", borderBottom: "1px solid var(--rule)" }}>
                    <div className="dot" />
                    <span className="uf-lbl" style={{ fontSize: "9px", color: "var(--pos)" }}>Verified · Live</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* StartupDetail — completely unchanged */}
          <StartupDetail startup={startup as Startup} />

        </main>

        <Footer />
      </div>
    </>
  )
}
