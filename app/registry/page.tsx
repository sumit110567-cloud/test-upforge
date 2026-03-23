// app/registry/page.tsx
// Design: matches The Founder Chronicle homepage — beige bg, serif masthead,
// newspaper tab nav, card grid with gold UFRN badge.
// Served on upforge.org via middleware rewrite.

import { createReadClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2 } from "lucide-react"

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

// ── JSON-LD ────────────────────────────────────────────────────────────────
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "UpForge Global Startup Registry",
  description: "Open, verified database of startups. Each startup is assigned a unique UFRN.",
  url: "https://www.upforge.org/registry",
  creator: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
  license: "https://creativecommons.org/licenses/by/4.0/",
}

// ── Types ──────────────────────────────────────────────────────────────────
interface RegistryRow {
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

// ── Data ───────────────────────────────────────────────────────────────────
async function getStartups(sector?: string, page = 1) {
  const supabase = createReadClient()
  const from = (page - 1) * PER_PAGE
  const to   = from + PER_PAGE - 1

  let q = supabase
    .from("startups")
    .select(
      "id,name,slug,description,logo_url,category,city,country_name,founded_year,ufrn,is_featured,founders",
      { count: "exact" }
    )
    .eq("status", "approved")
    .order("is_featured", { ascending: false })
    .order("created_at",  { ascending: false })
    .range(from, to)

  if (sector) q = q.eq("category", sector)
  const { data, count } = await q
  return { data: (data ?? []) as RegistryRow[], total: count ?? 0 }
}

async function getFeatured(): Promise<RegistryRow | null> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("id,name,slug,description,logo_url,category,city,country_name,founded_year,ufrn,is_featured,founders")
    .eq("status", "approved")
    .eq("is_featured", true)
    .order("created_at", { ascending: false })
    .limit(1)
    .single()
  return (data as RegistryRow) ?? null
}

async function getSectors(): Promise<string[]> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("category")
    .eq("status", "approved")
    .not("category", "is", null)
  if (!data) return []
  return [...new Set(data.map((r) => r.category).filter(Boolean))] as string[]
}

// ── Logo ───────────────────────────────────────────────────────────────────
function StartupLogo({ name, logo_url }: { name: string; logo_url?: string | null }) {
  if (logo_url) {
    return (
      <Image
        src={logo_url}
        alt={name}
        width={56}
        height={56}
        className="object-contain w-full h-full"
      />
    )
  }
  return (
    <span
      className="text-2xl font-bold text-[#A89060]"
      style={{ fontFamily: "Georgia, serif" }}
    >
      {name.charAt(0).toUpperCase()}
    </span>
  )
}

// ── Card ───────────────────────────────────────────────────────────────────
function StartupCard({ s }: { s: RegistryRow }) {
  return (
    <Link
      href={`https://www.upforge.in/startup/${s.slug}`}
      className="group block bg-white border border-[#DDD8CE] hover:border-[#B8B0A0] hover:shadow-sm transition-all duration-150"
    >
      <div className="p-5">
        {/* Logo + category tag */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-14 h-14 border border-[#E8E4DC] bg-[#F7F5F0] flex items-center justify-center flex-shrink-0 overflow-hidden">
            <StartupLogo name={s.name} logo_url={s.logo_url} />
          </div>
          {s.category && (
            <span
              className="text-[8px] uppercase tracking-[0.18em] text-[#888] border border-[#E0DDD6] px-2 py-0.5 flex-shrink-0 mt-1 bg-[#F7F5F0]"
            >
              {s.category.length > 20 ? s.category.slice(0, 20) + "…" : s.category}
            </span>
          )}
        </div>

        {/* Name */}
        <h3
          className="text-[16px] font-bold text-[#1C1C1C] leading-snug mb-2 group-hover:underline underline-offset-2"
          style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        >
          {s.name}
        </h3>

        {/* Description */}
        {s.description && (
          <p className="text-[12px] text-[#666] leading-relaxed line-clamp-3 mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            {s.description}
          </p>
        )}

        {/* Footer meta */}
        <div className="flex items-center justify-between pt-3 border-t border-[#F0EFEA]">
          <div className="flex items-center gap-2 text-[10px] text-[#999]"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            {s.founders && (
              <span className="truncate max-w-[110px]">
                ↳ {s.founders.split(",")[0].trim()}
              </span>
            )}
            {s.founded_year && <span>· {s.founded_year}</span>}
          </div>

          {/* UFRN or Verified badge */}
          {s.ufrn ? (
            <span className="font-mono text-[9px] text-[#A89060] font-bold tracking-tight bg-[#FBF8F3] border border-[#E8DFCC] px-1.5 py-0.5">
              {s.ufrn}
            </span>
          ) : (
            <div className="flex items-center gap-1 text-[9px] text-emerald-700 font-bold uppercase tracking-wider">
              <CheckCircle2 className="w-3 h-3" />
              Verified
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}

// ── Featured Hero Card ─────────────────────────────────────────────────────
function FeaturedCard({ s }: { s: RegistryRow }) {
  return (
    <Link
      href={`https://www.upforge.in/startup/${s.slug}`}
      className="group block border border-[#1C1C1C] bg-white mb-10 hover:shadow-lg transition-all"
    >
      <div className="flex flex-col sm:flex-row">
        {s.logo_url && (
          <div className="sm:w-52 h-44 sm:h-auto bg-[#F0EDE6] flex items-center justify-center flex-shrink-0 border-b sm:border-b-0 sm:border-r border-[#DDD8CE] overflow-hidden p-8">
            <Image src={s.logo_url} alt={s.name} width={130} height={90} className="object-contain" />
          </div>
        )}
        <div className="p-7 flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span
              className="text-[8px] uppercase tracking-[0.25em] font-bold px-2.5 py-1"
              style={{ background: "#C59A2E", color: "#fff" }}
            >
              Featured This Edition
            </span>
            {s.category && (
              <span className="text-[9px] uppercase tracking-[0.15em] text-[#888]">
                {s.category}
              </span>
            )}
          </div>

          <h2
            className="text-[26px] font-bold text-[#1C1C1C] leading-tight mb-3 group-hover:underline underline-offset-2"
            style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
          >
            {s.name}
          </h2>

          {s.description && (
            <p className="text-[13px] text-[#555] leading-relaxed line-clamp-3 mb-5"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              {s.description}
            </p>
          )}

          <div className="flex items-center gap-5 text-[10px] text-[#888] flex-wrap"
            style={{ fontFamily: "system-ui, sans-serif" }}>
            {s.founders && <span>Founders — {s.founders}</span>}
            {s.founded_year && <span>Est. {s.founded_year}</span>}
            {s.city && <span>{s.city}, {s.country_name ?? "India"}</span>}
            {s.ufrn && (
              <span className="font-mono text-[#A89060] font-bold text-[10px] border border-[#E8DFCC] bg-[#FBF8F3] px-2 py-0.5">
                {s.ufrn}
              </span>
            )}
            <span className="ml-auto text-[#1C1C1C] font-bold uppercase tracking-widest text-[10px] group-hover:underline">
              View Profile →
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function RegistryPage({ searchParams }: PageProps) {
  const { sector, page: pageStr } = await searchParams
  const page     = parseInt(pageStr ?? "1", 10) || 1
  const baseHref = (s?: string) =>
    s ? `/registry?sector=${encodeURIComponent(s)}` : "/registry"

  const [{ data: startups, total }, featured, sectors] = await Promise.all([
    getStartups(sector, page),
    getFeatured(),
    getSectors(),
  ])

  const totalPages = Math.ceil(total / PER_PAGE)

  return (
    <div className="flex min-h-screen flex-col" style={{ background: "#F7F5F0" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      <Navbar />

      <main className="flex-1">

        {/* ── NEWSPAPER MASTHEAD ── */}
        <div
          className="border-b-2 border-[#1C1C1C]"
          style={{ background: "#F7F5F0" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 pt-10 pb-8 text-center">

            {/* Tagline — same as homepage */}
            <p
              className="text-[10px] uppercase tracking-[0.35em] text-[#888] mb-5"
              style={{ fontFamily: "system-ui, sans-serif", letterSpacing: "0.3em" }}
            >
              Independent Global Startup Registry
            </p>

            {/* Big serif masthead — same weight as "The Founder Chronicle" */}
            <h1
              className="text-[56px] sm:text-[72px] lg:text-[88px] text-[#1C1C1C] leading-none mb-4 tracking-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 700 }}
            >
              The Global Registry
            </h1>

            {/* Subtitle — italic serif like the homepage */}
            <p
              className="text-[16px] text-[#555] mb-6 max-w-xl mx-auto"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontStyle: "italic" }}
            >
              Verified profiles of the startups building tomorrow — {new Date().getFullYear()} Edition
            </p>

            {/* Decorative divider — same ✦ ornament */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-24 bg-[#C5BFB4]" />
              <span className="text-[#C5BFB4] text-xs">✦</span>
              <div className="h-px w-24 bg-[#C5BFB4]" />
            </div>

            {/* Stats row */}
            <div
              className="inline-flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-[#888]"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              <span className="flex items-center gap-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
                </span>
                Live · {total} Profiles
              </span>
              <span className="text-[#C5BFB4]">·</span>
              <span>All Verified</span>
              <span className="text-[#C5BFB4]">·</span>
              <span>Updated Daily</span>
              <span className="text-[#C5BFB4]">·</span>
              <span className="text-[#A89060] font-bold">UFRN Assigned on Approval</span>
            </div>
          </div>

          {/* ── SECTOR TAB NAV — same style as homepage founder tabs ── */}
          <div
            className="border-t border-[#D5D0C8] overflow-x-auto"
            style={{ background: "#F7F5F0" }}
          >
            <div className="max-w-[1200px] mx-auto px-6">
              <div className="flex items-center gap-0">
                {/* "In This Registry" label */}
                <div
                  className="flex-shrink-0 px-4 py-3 text-[9px] uppercase tracking-[0.2em] text-[#888] border-r border-[#D5D0C8] mr-2 hidden sm:flex items-center"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Browse By
                </div>

                <Link
                  href="/registry"
                  className={`flex-shrink-0 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] border-b-2 transition-colors whitespace-nowrap ${
                    !sector
                      ? "border-[#1C1C1C] text-[#1C1C1C]"
                      : "border-transparent text-[#888] hover:text-[#1C1C1C]"
                  }`}
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  All
                </Link>

                {sectors.map((s) => (
                  <Link
                    key={s}
                    href={`/registry?sector=${encodeURIComponent(s)}`}
                    className={`flex-shrink-0 px-5 py-3 text-[10px] font-bold uppercase tracking-[0.15em] border-b-2 transition-colors whitespace-nowrap ${
                      sector === s
                        ? "border-[#1C1C1C] text-[#1C1C1C]"
                        : "border-transparent text-[#888] hover:text-[#1C1C1C]"
                    }`}
                    style={{ fontFamily: "system-ui, sans-serif" }}
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <div className="max-w-[1200px] mx-auto px-6 py-10">

          {/* Section label row */}
          <div
            className="flex items-center justify-between mb-6 pb-3 border-b border-[#D5D0C8]"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            <div className="flex items-center gap-3">
              <span className="text-[9px] uppercase tracking-[0.25em] text-[#888] font-bold">
                {sector ? sector : "All Startups"}
              </span>
              <span className="text-[#D5D0C8]">—</span>
              <span className="text-[9px] text-[#AAA]">{total} profiles</span>
              <span className="text-[#D5D0C8]">·</span>
              <span className="text-[9px] text-[#AAA]">Pg. {page} / {totalPages || 1}</span>
            </div>

            {/* UFRN pill */}
            <div className="hidden sm:flex items-center gap-2 border border-[#E8DFCC] bg-[#FBF8F3] px-3 py-1.5">
              <span className="text-[8px] uppercase tracking-[0.2em] text-[#A89060] font-bold">UFRN</span>
              <span className="text-[9px] text-[#888]">Unique global ID — assigned on approval</span>
            </div>
          </div>

          {/* Featured — page 1, no sector filter */}
          {!sector && page === 1 && featured && (
            <FeaturedCard s={featured} />
          )}

          {/* ── CARD GRID — newspaper column feel ── */}
          {startups.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {startups
                .filter((s) =>
                  !(!sector && page === 1 && featured && s.id === featured.id)
                )
                .map((s) => (
                  <StartupCard key={s.id} s={s} />
                ))}
            </div>
          ) : (
            <div className="text-center py-24 text-[#AAA] text-sm">
              No startups found{sector ? ` in "${sector}"` : ""}.
            </div>
          )}

          {/* ── PAGINATION ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-14"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              {page > 1 && (
                <Link
                  href={`${baseHref(sector)}&page=${page - 1}`}
                  className="px-5 py-2 border border-[#D5D0C8] text-[10px] font-bold uppercase tracking-widest text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors"
                >
                  Prev
                </Link>
              )}
              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                const p = i + 1
                return (
                  <Link
                    key={p}
                    href={`${baseHref(sector)}${p > 1 ? `&page=${p}` : ""}`}
                    className={`w-9 h-9 flex items-center justify-center text-[11px] font-bold border transition-colors ${
                      p === page
                        ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                        : "border-[#D5D0C8] text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C]"
                    }`}
                  >
                    {p}
                  </Link>
                )
              })}
              {page < totalPages && (
                <Link
                  href={`${baseHref(sector)}&page=${page + 1}`}
                  className="px-5 py-2 border border-[#D5D0C8] text-[10px] font-bold uppercase tracking-widest text-[#666] hover:border-[#1C1C1C] hover:text-[#1C1C1C] transition-colors"
                >
                  Next
                </Link>
              )}
            </div>
          )}

          {/* ── CTA BANNER — newspaper pull-quote style ── */}
          <div
            className="mt-16 border-t-2 border-b-2 border-[#1C1C1C] py-10 text-center"
            style={{ background: "#F7F5F0" }}
          >
            <p
              className="text-[9px] uppercase tracking-[0.35em] text-[#888] mb-3"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              UpForge Registry
            </p>
            <h2
              className="text-[28px] text-[#1C1C1C] mb-2 leading-tight"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif", fontWeight: 700 }}
            >
              Your founder story starts with a verified profile.
            </h2>
            <p
              className="text-[13px] text-[#666] mb-6 max-w-md mx-auto italic"
              style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
            >
              Get independently verified, receive your UFRN, and get indexed in the world's
              most trusted startup registry. Free forever.
            </p>
            <a
              href="https://www.upforge.in/submit"
              className="inline-flex items-center gap-2 bg-[#1C1C1C] text-white px-10 py-3 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#333] transition-colors"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              List Free →
            </a>
          </div>

          {/* Internal links */}
          <nav
            className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Explore registry"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            {[
              { l: "Indian Startup Founders 2026", h: "https://www.upforge.in/" },
              { l: "Top AI Startups India",        h: "https://www.upforge.in/top-ai-startups" },
              { l: "Indian Unicorns List",         h: "https://www.upforge.in/indian-unicorns" },
              { l: "Best SaaS Startups",           h: "https://www.upforge.in/best-saas-startups" },
              { l: "Fintech Startups India",       h: "https://www.upforge.in/fintech-startups" },
              { l: "Submit Your Startup",          h: "https://www.upforge.in/submit" },
            ].map(({ l, h }) => (
              <a
                key={h}
                href={h}
                className="text-[11px] text-[#888] hover:text-[#1C1C1C] hover:underline transition-colors"
              >
                {l}
              </a>
            ))}
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  )
}
