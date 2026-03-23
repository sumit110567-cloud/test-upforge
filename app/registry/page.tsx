// app/registry/page.tsx
// SERVER COMPONENT — no "use client", no inline event handlers
// Pure CSS hover via Tailwind + <style> block (safe in RSC)

import { createReadClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Shield, BadgeCheck, Globe } from "lucide-react"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "Global Startup Registry 2026 — Verified Worldwide | UpForge",
  description:
    "The open, independent, verified global registry of startups. Every listing is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Free to access, forever.",
  alternates: { canonical: "https://www.upforge.org/registry" },
  openGraph: {
    title: "UpForge Global Startup Registry",
    url: "https://www.upforge.org/registry",
    images: [{ url: "https://www.upforge.in/og/startup-default.png", width: 1200, height: 630 }],
  },
}

const LD = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "UpForge Global Startup Registry",
  description: "Open, verified, independent database of startups. Each startup is assigned a unique UFRN.",
  url: "https://www.upforge.org/registry",
  creator: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
  license: "https://creativecommons.org/licenses/by/4.0/",
  isAccessibleForFree: true,
}

interface Row {
  id: string
  name: string
  slug: string
  description: string | null
  logo_url: string | null
  category: string | null
  city: string | null
  country_name: string | null
  founded_year: number | null
  ufrn: string | null
  is_featured?: boolean
  founders?: string | null
}

interface PageProps {
  searchParams: Promise<{ sector?: string; page?: string }>
}

const PER_PAGE = 20

async function getStartups(sector?: string, page = 1) {
  const supabase = createReadClient()
  const from = (page - 1) * PER_PAGE
  const to   = from + PER_PAGE - 1
  let q = supabase
    .from("startups")
    .select("id,name,slug,description,logo_url,category,city,country_name,founded_year,ufrn,is_featured,founders", { count: "exact" })
    .eq("status", "approved")
    .order("is_featured", { ascending: false })
    .order("created_at",  { ascending: false })
    .range(from, to)
  if (sector) q = q.eq("category", sector)
  const { data, count } = await q
  return { data: (data ?? []) as Row[], total: count ?? 0 }
}

async function getFeatured(): Promise<Row | null> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("id,name,slug,description,logo_url,category,city,country_name,founded_year,ufrn,is_featured,founders")
    .eq("status", "approved").eq("is_featured", true)
    .order("created_at", { ascending: false }).limit(1).single()
  return (data as Row) ?? null
}

async function getSectors(): Promise<string[]> {
  const supabase = createReadClient()
  const { data } = await supabase.from("startups").select("category").eq("status", "approved").not("category", "is", null)
  if (!data) return []
  return [...new Set(data.map((r) => r.category).filter(Boolean))] as string[]
}

function LogoBox({ name, logo_url }: { name: string; logo_url?: string | null }) {
  if (logo_url)
    return <Image src={logo_url} alt={name} width={52} height={52} className="object-contain w-full h-full" />
  return (
    <span style={{ fontFamily: "Georgia,serif", fontSize: "1.4rem", fontWeight: 700, color: "#C59A2E" }}>
      {name.charAt(0).toUpperCase()}
    </span>
  )
}

function StartupCard({ s }: { s: Row }) {
  return (
    <a href={`https://www.upforge.in/startup/${s.slug}`} className="reg-card">
      <div style={{ padding: "18px 16px" }}>
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 12 }}>
          <div style={{
            width: 50, height: 50, flexShrink: 0,
            border: "1px solid #E8E4DC", background: "#F7F5F0",
            display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden",
          }}>
            <LogoBox name={s.name} logo_url={s.logo_url} />
          </div>
          {s.category && (
            <span style={{
              fontSize: 8, fontFamily: "system-ui,sans-serif", textTransform: "uppercase",
              letterSpacing: "0.15em", color: "#888", border: "1px solid #E0DDD6",
              background: "#F7F5F0", padding: "2px 6px", marginTop: 2, flexShrink: 0,
              maxWidth: 110, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap",
            }}>
              {s.category}
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: "'Georgia','Times New Roman',serif",
          fontSize: "clamp(13px,1.4vw,15px)", fontWeight: 700,
          color: "#1A1208", lineHeight: 1.3, marginBottom: 8,
        }}>
          {s.name}
        </h3>

        {s.description && (
          <p style={{
            fontFamily: "system-ui,sans-serif", fontSize: "clamp(11px,1.1vw,12px)",
            color: "#6B5C40", lineHeight: 1.6, marginBottom: 12,
            display: "-webkit-box", WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical", overflow: "hidden",
          }}>
            {s.description}
          </p>
        )}

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 10, borderTop: "1px solid #F0EFEA" }}>
          <div style={{ fontFamily: "system-ui,sans-serif", fontSize: 10, color: "#AAA", display: "flex", gap: 5 }}>
            {s.founders && <span style={{ maxWidth: 100, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>↳ {s.founders.split(",")[0].trim()}</span>}
            {s.founded_year && <span>· {s.founded_year}</span>}
          </div>
          {s.ufrn ? (
            <span style={{ fontFamily: "monospace", fontSize: 9, fontWeight: 700, color: "#C59A2E", background: "#FBF8F3", border: "1px solid #E8DFCC", padding: "2px 5px" }}>
              {s.ufrn}
            </span>
          ) : (
            <span style={{ fontFamily: "system-ui,sans-serif", fontSize: 9, color: "#15803D", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: 3 }}>
              <CheckCircle2 style={{ width: 10, height: 10 }} /> Verified
            </span>
          )}
        </div>
      </div>
    </a>
  )
}

function FeaturedHero({ s }: { s: Row }) {
  return (
    <a href={`https://www.upforge.in/startup/${s.slug}`} className="reg-featured" style={{ display: "block", textDecoration: "none", marginBottom: 28 }}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {s.logo_url && (
          <div style={{
            width: "clamp(100px,14vw,180px)", minHeight: 130,
            background: "#F0EDE6", display: "flex", alignItems: "center", justifyContent: "center",
            borderRight: "1px solid #D8D2C4", padding: "clamp(14px,3vw,28px)", flexShrink: 0,
          }}>
            <Image src={s.logo_url} alt={s.name} width={110} height={75} className="object-contain" />
          </div>
        )}
        <div style={{ flex: 1, minWidth: 180, padding: "clamp(16px,3vw,28px)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
            <span style={{ fontFamily: "system-ui,sans-serif", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.25em", fontWeight: 700, background: "#C59A2E", color: "#fff", padding: "3px 9px" }}>
              Featured This Edition
            </span>
            {s.category && <span style={{ fontFamily: "system-ui,sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: "#888" }}>{s.category}</span>}
          </div>
          <h2 style={{ fontFamily: "'Georgia','Times New Roman',serif", fontSize: "clamp(16px,2.2vw,24px)", fontWeight: 700, color: "#1A1208", lineHeight: 1.25, marginBottom: 8 }}>
            {s.name}
          </h2>
          {s.description && (
            <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "clamp(11px,1.2vw,13px)", color: "#5A4A30", lineHeight: 1.65, marginBottom: 12, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
              {s.description}
            </p>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap", fontFamily: "system-ui,sans-serif", fontSize: 10, color: "#AAA" }}>
            {s.founders && <span>Founders — {s.founders}</span>}
            {s.founded_year && <span>Est. {s.founded_year}</span>}
            {s.ufrn && <span style={{ fontFamily: "monospace", color: "#C59A2E", fontWeight: 700, border: "1px solid #E8DFCC", background: "#FBF8F3", padding: "2px 7px", fontSize: 10 }}>{s.ufrn}</span>}
            <span style={{ marginLeft: "auto", color: "#1A1208", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", fontSize: 10 }}>View Profile →</span>
          </div>
        </div>
      </div>
    </a>
  )
}

export default async function RegistryPage({ searchParams }: PageProps) {
  const { sector, page: ps } = await searchParams
  const page     = parseInt(ps ?? "1", 10) || 1
  const baseHref = (s?: string) => s ? `/registry?sector=${encodeURIComponent(s)}` : "/registry"

  const [{ data: startups, total }, featured, sectors] = await Promise.all([
    getStartups(sector, page),
    getFeatured(),
    getSectors(),
  ])
  const totalPages = Math.ceil(total / PER_PAGE)

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf{font-family:'Playfair Display',Georgia,serif!important}

        /* Card hover — pure CSS, no JS */
        .reg-card{
          display:block;background:#FDFCF9;
          border:1px solid #D8D2C4;text-decoration:none;
          transition:transform .15s ease,box-shadow .15s ease,border-color .15s ease;
        }
        .reg-card:hover{
          transform:translate(-2px,-2px);
          box-shadow:4px 4px 0 #1A1208;
          border-color:#1A1208;
        }

        /* Featured hover */
        .reg-featured{
          border:2px solid #1A1208;background:#FDFCF9;
          transition:box-shadow .15s ease;
        }
        .reg-featured:hover{box-shadow:6px 6px 0 #1A1208}

        /* Pagination */
        .pg{display:inline-flex;align-items:center;justify-content:center;border:1px solid #D8D2C4;background:#FDFCF9;font-family:system-ui,sans-serif;font-size:11px;font-weight:700;color:#5A4A30;text-decoration:none;transition:border-color .15s,background .15s,color .15s;padding:8px 16px}
        .pg:hover,.pg.on{border-color:#1A1208;background:#1A1208;color:#fff}
        .pg-n{width:36px;height:36px;padding:0}

        /* Card grid */
        .reg-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:#D8D2C4;border:1px solid #D8D2C4;margin-bottom:32px}
        @media(max-width:1100px){.reg-grid{grid-template-columns:repeat(3,1fr)}}
        @media(max-width:720px){.reg-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:420px){.reg-grid{grid-template-columns:1fr}}

        /* Stats bar */
        .stat-bar{display:flex;background:#1A1208}
        @media(max-width:520px){
          .stat-bar{flex-direction:column}
          .stat-bar>div{border-right:none!important;border-bottom:1px solid rgba(255,255,255,.07)}
          .stat-bar>div:last-child{border-bottom:none}
        }

        /* Promise strip */
        .prom-strip{display:flex;flex-wrap:wrap;background:#FDFCF9;border:1px solid #D8D2C4;border-top:none}
        .prom-item{flex:1;min-width:150px;padding:16px 18px;border-right:1px solid #D8D2C4;display:flex;align-items:flex-start;gap:9px}
        .prom-item:last-child{border-right:none}
        @media(max-width:600px){
          .prom-item{border-right:none!important;border-bottom:1px solid #D8D2C4;flex:0 0 100%}
          .prom-item:last-child{border-bottom:none}
        }

        /* Tab nav scrollbar hide */
        .tab-scroll{overflow-x:auto;-ms-overflow-style:none;scrollbar-width:none}
        .tab-scroll::-webkit-scrollbar{display:none}

        /* Section header */
        .sh{display:flex;align-items:center;gap:10px;margin-bottom:14px}
        .sh-l{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.3em;color:#AAA;font-family:system-ui,sans-serif;white-space:nowrap}
        .sh-r{flex:1;height:1px;background:#D8D2C4}

        /* CTA link hover */
        .cta-link{display:inline-flex;align-items:center;gap:8px;background:#1A1208;color:#fff;font-family:system-ui,sans-serif;font-size:clamp(9px,1vw,11px);font-weight:700;text-transform:uppercase;letter-spacing:.2em;padding:clamp(10px,1.5vw,14px) clamp(22px,3vw,38px);text-decoration:none;transition:background .15s}
        .cta-link:hover{background:#C59A2E}

        /* Internal nav links */
        .int-link{font-family:system-ui,sans-serif;font-size:clamp(10px,1.1vw,12px);color:#888;text-decoration:none;transition:color .15s}
        .int-link:hover{color:#1A1208;text-decoration:underline}

        @keyframes fadeUp{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
        .fu0{animation:fadeUp .38s .00s ease both}
        .fu1{animation:fadeUp .38s .08s ease both}
        .fu2{animation:fadeUp .38s .16s ease both}

        @keyframes ping{75%,100%{transform:scale(2);opacity:0}}
        .ping{animation:ping 1.5s cubic-bezier(0,0,.2,1) infinite}
      `}</style>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(LD) }} />

      <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>
        <Navbar />

        {/* ── MASTHEAD ── */}
        <header className="fu0" style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
          <div style={{ textAlign: "center", padding: "clamp(28px,5vw,56px) 24px clamp(18px,3vw,32px)" }}>

            <p style={{ fontFamily: "system-ui,sans-serif", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.4em", color: "#AAA", marginBottom: 10 }}>
              Independent Global Startup Registry
            </p>

            <h1 className="pf" style={{ fontSize: "clamp(2.2rem,6.5vw,5.5rem)", fontWeight: 900, color: "#1A1208", lineHeight: 1, letterSpacing: "-0.02em", marginBottom: 12 }}>
              The Global Registry
            </h1>

            <p style={{ fontFamily: "'Georgia',serif", fontStyle: "italic", fontSize: "clamp(13px,1.5vw,15px)", color: "#6B5C40", maxWidth: 520, margin: "0 auto 18px" }}>
              Verified profiles of the startups building tomorrow — {new Date().getFullYear()} Edition
            </p>

            {/* Ornament */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 18 }}>
              <div style={{ height: 1, width: "clamp(36px,7vw,90px)", background: "#C8C2B4" }} />
              <span style={{ color: "#C8C2B4", fontSize: 12 }} aria-hidden>✦</span>
              <div style={{ height: 1, width: "clamp(36px,7vw,90px)", background: "#C8C2B4" }} />
            </div>

            {/* Live stats row */}
            <div style={{ display: "inline-flex", flexWrap: "wrap", justifyContent: "center", gap: "clamp(10px,2vw,24px)", fontFamily: "system-ui,sans-serif", fontSize: "clamp(9px,1vw,10px)", textTransform: "uppercase", letterSpacing: "0.2em", color: "#888" }}>
              <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ position: "relative", display: "inline-flex", width: 7, height: 7 }}>
                  <span className="ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#22c55e", opacity: 0.7 }} />
                  <span style={{ position: "relative", width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-flex" }} />
                </span>
                Live · {total} Profiles
              </span>
              <span style={{ color: "#C8C2B4" }}>·</span>
              <span>All Verified</span>
              <span style={{ color: "#C8C2B4" }}>·</span>
              <span>Updated Daily</span>
              <span style={{ color: "#C8C2B4" }}>·</span>
              <span style={{ color: "#C59A2E", fontWeight: 700 }}>UFRN on Approval</span>
            </div>
          </div>

          {/* Dark stats bar */}
          <div className="stat-bar">
            {[
              { v: `${total.toLocaleString("en-IN")}+`, l: "Verified Profiles",   gold: false },
              { v: "UFRN",                              l: "Global Registry ID",   gold: true  },
              { v: "12+",                               l: "Countries",            gold: false },
            ].map((s, i) => (
              <div key={i} style={{ flex: 1, padding: "clamp(14px,2vw,22px) 0", textAlign: "center", borderRight: i < 2 ? "1px solid rgba(255,255,255,.07)" : "none" }}>
                <p className="pf" style={{ fontSize: "clamp(1.4rem,2.8vw,2rem)", fontWeight: 900, color: s.gold ? "#E8C547" : "#fff", lineHeight: 1, marginBottom: 5 }}>{s.v}</p>
                <p style={{ fontFamily: "system-ui,sans-serif", fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.35)" }}>{s.l}</p>
              </div>
            ))}
          </div>

          {/* Promise strip */}
          <div className="prom-strip">
            {[
              { icon: BadgeCheck, label: "Manually Verified",   desc: "Every profile reviewed before listing",  c: "#15803D" },
              { icon: Shield,     label: "No Paid Rankings",    desc: "Zero sponsored placements, ever",        c: "#2563EB" },
              { icon: Globe,      label: "Permanently Indexed", desc: "Public, structured, always accessible",  c: "#7C3AED" },
            ].map((item, i) => (
              <div key={i} className="prom-item">
                <item.icon style={{ width: 13, height: 13, color: item.c, flexShrink: 0, marginTop: 2 }} />
                <div>
                  <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "clamp(9px,1vw,10px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#1A1208", marginBottom: 2 }}>{item.label}</p>
                  <p style={{ fontFamily: "Georgia,serif", fontStyle: "italic", fontSize: "clamp(11px,1.1vw,12px)", color: "#6B5C40", lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              </div>
            ))}
            {/* UFRN dark item */}
            <div className="prom-item" style={{ background: "#1A1208" }}>
              <div>
                <p style={{ fontFamily: "system-ui,sans-serif", fontSize: "clamp(9px,1vw,10px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em", color: "#E8C547", marginBottom: 2 }}>What is a UFRN?</p>
                <p style={{ fontFamily: "Georgia,serif", fontStyle: "italic", fontSize: "clamp(11px,1.1vw,12px)", color: "rgba(255,255,255,.55)", lineHeight: 1.5 }}>
                  Your global startup ID — <span style={{ fontFamily: "monospace", color: "#E8C547", fontSize: 10 }}>UF-2026-IND-00001</span>
                </p>
              </div>
            </div>
          </div>

          {/* Sector tabs */}
          <div className="tab-scroll" style={{ borderTop: "1px solid #D8D2C4", background: "#F3EFE5" }}>
            <div style={{ display: "flex", maxWidth: 1300, margin: "0 auto", padding: "0 clamp(10px,3vw,24px)" }}>
              <div style={{ flexShrink: 0, padding: "0 14px 0 0", marginRight: 6, display: "flex", alignItems: "center", borderRight: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.2em", color: "#AAA" }}>
                Browse
              </div>
              {[{ label: "All", href: "/registry", active: !sector },
                ...sectors.map((s) => ({ label: s, href: `/registry?sector=${encodeURIComponent(s)}`, active: sector === s }))
              ].map((tab) => (
                <Link key={tab.href} href={tab.href} style={{
                  flexShrink: 0, padding: "clamp(10px,1.4vw,13px) clamp(10px,1.4vw,18px)",
                  fontFamily: "system-ui,sans-serif", fontSize: "clamp(9px,1vw,11px)",
                  fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.13em",
                  textDecoration: "none", whiteSpace: "nowrap",
                  borderBottom: tab.active ? "2px solid #1A1208" : "2px solid transparent",
                  color: tab.active ? "#1A1208" : "#888",
                  transition: "color .15s,border-color .15s",
                }}>
                  {tab.label}
                </Link>
              ))}
            </div>
          </div>
        </header>

        {/* ── MAIN ── */}
        <main className="fu1" style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(20px,4vw,44px) clamp(14px,3vw,24px)" }}>

          {/* Section label */}
          <div className="sh">
            <span className="sh-l">
              {sector ? sector : "All Startups"} · {total} profiles · Pg. {page}/{totalPages || 1}
            </span>
            <div className="sh-r" />
          </div>

          {/* Featured */}
          {!sector && page === 1 && featured && <FeaturedHero s={featured} />}

          {/* Grid */}
          {startups.length > 0 ? (
            <div className="reg-grid">
              {startups
                .filter((s) => !(!sector && page === 1 && featured && s.id === featured.id))
                .map((s) => <StartupCard key={s.id} s={s} />)
              }
            </div>
          ) : (
            <div style={{ textAlign: "center", padding: "72px 24px", color: "#AAA", fontFamily: "system-ui,sans-serif", fontSize: 14 }}>
              No startups found{sector ? ` in "${sector}"` : ""}.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 5, marginBottom: 44 }}>
              {page > 1 && <Link href={`${baseHref(sector)}&page=${page - 1}`} className="pg">← Prev</Link>}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const p = i + 1
                return (
                  <Link key={p} href={`${baseHref(sector)}${p > 1 ? `&page=${p}` : ""}`} className={`pg pg-n${p === page ? " on" : ""}`}>{p}</Link>
                )
              })}
              {page < totalPages && <Link href={`${baseHref(sector)}&page=${page + 1}`} className="pg">Next →</Link>}
            </div>
          )}

          {/* CTA */}
          <div className="fu2" style={{ borderTop: "3px solid #1A1208", borderBottom: "1px solid #1A1208", padding: "clamp(24px,4vw,44px) clamp(14px,4vw,44px)", textAlign: "center", marginBottom: 28 }}>
            <p style={{ fontFamily: "system-ui,sans-serif", fontSize: 8, textTransform: "uppercase", letterSpacing: "0.35em", color: "#AAA", marginBottom: 8 }}>UpForge Registry</p>
            <h2 className="pf" style={{ fontSize: "clamp(1.2rem,2.8vw,1.9rem)", fontWeight: 700, color: "#1A1208", lineHeight: 1.2, marginBottom: 8 }}>
              Your founder story starts with a verified profile.
            </h2>
            <p style={{ fontFamily: "Georgia,serif", fontStyle: "italic", fontSize: "clamp(12px,1.3vw,14px)", color: "#6B5C40", marginBottom: 22, maxWidth: 460, margin: "0 auto 22px" }}>
              Get independently verified, receive your UFRN, and get indexed in the world's most trusted startup registry. Free forever.
            </p>
            <a href="https://www.upforge.in/submit" className="cta-link">List Free → Get Your UFRN</a>
          </div>

          {/* Internal links */}
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "clamp(7px,1.5vw,14px) clamp(14px,2vw,26px)" }}>
            {[
              { l: "Indian Startup Founders 2026", h: "https://www.upforge.in/" },
              { l: "Top AI Startups India",        h: "https://www.upforge.in/top-ai-startups" },
              { l: "Indian Unicorns List",         h: "https://www.upforge.in/indian-unicorns" },
              { l: "Best SaaS Startups",           h: "https://www.upforge.in/best-saas-startups" },
              { l: "Fintech Startups India",       h: "https://www.upforge.in/fintech-startups" },
              { l: "Submit Your Startup",          h: "https://www.upforge.in/submit" },
            ].map(({ l, h }) => (
              <a key={h} href={h} className="int-link">{l}</a>
            ))}
          </nav>
        </main>

        <Footer />
      </div>
    </>
  )
}
