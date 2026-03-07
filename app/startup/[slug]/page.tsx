// app/startup/[slug]/page.tsx institutional design system v2.1

import { createClient } from "@/lib/supabase/server"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import type { Startup } from "@/types/startup"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { StartupDetail } from "@/components/startup-detail"
import { BadgeCheck, Shield, Globe, ChevronRight, Share2, Download } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

// ─── INSTITUTIONAL SEO ───────────────────────────────────────────────────────
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const supabase = await createClient()
  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) {
    return { title: "Startup Not Found | UpForge" }
  }

  const profileUrl = `https://www.upforge.in/startup/${slug}`
  const title = `${startup.name} — Verified Startup Profile | UpForge Registry`
  const description = `${startup.name} is a ${startup.industry || startup.category} startup based in ${startup.city || "India"}. ${startup.description?.slice(0, 150)}...`

  return {
    title,
    description,
    alternates: { canonical: profileUrl },
    keywords: [startup.name, "Indian startup", "founder registry", "venture capital", startup.industry].filter(Boolean),
    openGraph: {
      title,
      description,
      url: profileUrl,
      siteName: "UpForge",
      images: [{ url: startup.logo_url || "/og-image.jpg" }],
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
  }
}

export default async function StartupPage({ params }: PageProps) {
  const { slug } = await params
  const supabase = await createClient()
  const { data: startup } = await supabase
    .from("startups")
    .select("*")
    .eq("slug", slug)
    .single()

  if (!startup) notFound()

  // High-Trust JSON-LD Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: startup.name,
    description: startup.description,
    url: startup.website || `https://upforge.in/startup/${slug}`,
    logo: startup.logo_url,
    address: { "@type": "PostalAddress", addressLocality: startup.city, addressCountry: "IN" },
    foundingDate: startup.founded_year?.toString(),
    iso6523: "Verified via UpForge Founder Registry",
  }

  const updatedAt = new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit", timeZone: "Asia/Kolkata", hour12: true })
  const todayStr = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        
        .uf{background:#fff;color:#1a1a1a;font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        
        :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--bg:#fff;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--gr:#c9960d;--pos:#1a6b3a;--neg:#b91c1c}
        .uf-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}

        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .45s .04s cubic-bezier(.16,1,.3,1) both}

        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:pulse 2s infinite}
        @keyframes pulse{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(2);opacity:0}}

        .vbadge{display:inline-flex;align-items:center;gap:4px;font-size:9px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--pos);border:1px solid var(--pos);padding:3px 9px}
        .bc-link{font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--ink4);transition:color .15s;text-decoration:none}
        .bc-link:hover{color:var(--ink)}

        .meta-cell{display:flex;flex-direction:column;justify-content:center;padding:12px 20px;border-right:1px solid var(--rule);flex:1;min-width:120px}
        
        @media(max-width:768px){
          .hide-mob{display:none !important}
          .meta-cell{border-right:none;border-bottom:1px solid var(--rule);width:100%}
        }
      `}</style>

      <div className="uf" style={{ minHeight: "100vh" }}>
        <Navbar />

        <main>
          {/* Featured Ribbon */}
          {startup.is_sponsored && (
            <div style={{ background: "var(--ink)", color: "var(--gold)", textAlign: "center", padding: "8px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>
              ★ &nbsp; Featured Startup Profile
            </div>
          )}

          {/* ── BROAD SHEET HEADER ── */}
          <div className="a0" style={{ borderBottom: "2px solid var(--ink)" }}>
            <div className="uf-wrap">
              
              {/* Masthead Metadata */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: "1px solid var(--rule)" }}>
                <span className="uf-lbl" style={{ color: "var(--ink2)", fontWeight: 700 }}>{todayStr} · Vol. II</span>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div className="dot" />
                  <span className="uf-lbl">Live · Verified Profile</span>
                </div>
              </div>

              {/* Breadcrumbs */}
              <nav style={{ display: "flex", alignItems: "center", gap: "6px", padding: "12px 0", borderBottom: "1px solid var(--rl)" }}>
                <a href="/" className="bc-link">Home</a>
                <ChevronRight size={10} color="#aaa" />
                <a href="/startup" className="bc-link">Registry</a>
                <ChevronRight size={10} color="#aaa" />
                <span className="uf-lbl" style={{ color: "var(--ink)", fontWeight: 800 }}>{startup.name}</span>
              </nav>

              {/* ── PROFILE BRANDING ── */}
              <div style={{ padding: "40px 0" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "28px", flexWrap: "wrap" }}>
                  
                  {/* Logo Box */}
                  <div style={{ width: "80px", height: "80px", border: "1px solid var(--rule)", background: "var(--off)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {startup.logo_url 
                      ? <img src={startup.logo_url} alt="" style={{ maxWidth: "85%", maxHeight: "85%", objectFit: "contain" }} />
                      : <span className="uf-d" style={{ fontSize: "2rem", fontWeight: 900, color: "#ccc" }}>{startup.name[0]}</span>
                    }
                  </div>

                  {/* Title & Tagline */}
                  <div style={{ flex: 1, minWidth: "300px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                      <h1 className="uf-d" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 0.85, margin: 0 }}>{startup.name}</h1>
                      <div className="vbadge hide-mob"><BadgeCheck size={11} /> Verified</div>
                    </div>
                    {startup.tagline && (
                      <p className="uf-d" style={{ fontSize: "1.2rem", fontStyle: "italic", color: "var(--ink3)", margin: "10px 0 0", maxWidth: "700px" }}>
                        "{startup.tagline}"
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: "flex", gap: "10px" }} className="hide-mob">
                    <button style={{ height: "40px", padding: "0 16px", border: "1.5px solid var(--ink)", background: "none", cursor: "pointer" }}><Share2 size={16} /></button>
                    <button style={{ height: "40px", padding: "0 20px", background: "var(--ink)", color: "#fff", display: "flex", alignItems: "center", gap: "8px", fontWeight: 600, fontSize: "12px", cursor: "pointer" }}>
                      <Download size={14} /> Intelligence Report
                    </button>
                  </div>
                </div>

                {/* ── KEY METRICS STRIP ── */}
                <div style={{ display: "flex", flexWrap: "wrap", border: "1px solid var(--rule)", marginTop: "40px" }}>
                  {[
                    { label: "Founding Year", val: startup.founded_year || "2020" },
                    { label: "Primary Sector", val: startup.industry || startup.category },
                    { label: "Headquarters", val: startup.city || "India" },
                    { label: "Growth Stage", val: startup.funding_stage || "Early Stage" },
                    { label: "Registry ID", val: `UF-${startup.id.slice(0,6).toUpperCase()}` },
                  ].map((m, i) => (
                    <div key={i} className="meta-cell" style={{ background: i % 2 === 1 ? "var(--warm)" : "#fff" }}>
                      <span className="uf-lbl" style={{ fontSize: "8px", marginBottom: "4px" }}>{m.label}</span>
                      <span style={{ fontSize: "14px", fontWeight: 700 }}>{m.val}</span>
                    </div>
                  ))}
                  <div style={{ flex: 1, padding: "12px 20px", background: "var(--off)", display: "flex", alignItems: "center", justifyContent: "flex-end" }} className="hide-mob">
                     <span className="uf-lbl" style={{ color: "var(--pos)", fontSize: "9px" }}>● Institutional Record</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── DATA BODY ── */}
          <div style={{ background: "var(--off)", padding: "20px 0 60px" }}>
            <div className="uf-wrap">
               <StartupDetail startup={startup as Startup} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}
