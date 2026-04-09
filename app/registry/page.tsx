// app/registry/page.tsx — WORLD-CLASS GLOBAL AUTHORITY v6
// Global editorial magazine aesthetic | Maximum SEO | Schema.org Dataset
// Design: Ink & Parchment with teal authority accents — refined broadsheet

import { createReadClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ArrowUpRight, MapPin, Calendar, Users, Globe, Shield, Zap } from "lucide-react"
import { unstable_noStore } from "next/cache"

export const dynamic = "force-dynamic"
export const revalidate = 0
export const fetchCache = "force-no-store"

const PAGE_SIZE = 10
const BASE_URL = "https://www.upforge.org"

interface StartupRow {
  id: string; name: string; slug: string
  description?: string | null; logo_url?: string | null
  founders?: string | null; founded_year?: number | null
  category?: string | null; city?: string | null
  country_name?: string | null; country_code?: string | null
  is_featured?: boolean; ufrn?: string | null
}

interface PageProps {
  searchParams: Promise<{
    page?: string; q?: string; year?: string; sort?: string
    sector?: string; country?: string
  }>
}

async function getData(q: string, year: string, sort: string, cat: string, country: string, page: number) {
  const sb = createReadClient()
  const from = (page - 1) * PAGE_SIZE
  let query = sb.from("startups")
    .select("id,name,slug,description,logo_url,founders,founded_year,category,city,country_name,country_code,is_featured,ufrn", { count: "exact" })
    .eq("status", "approved")
  if (q) query = query.or(`name.ilike.%${q}%,description.ilike.%${q}%,founders.ilike.%${q}%,category.ilike.%${q}%,city.ilike.%${q}%`)
  if (year) query = query.eq("founded_year", Number(year))
  if (cat) query = query.eq("category", cat)
  if (country) query = query.eq("country_code", country)
  const col = sort === "year" ? "founded_year" : sort === "newest" ? "created_at" : "name"
  const { data, count, error } = await query
    .order("is_featured", { ascending: false })
    .order(col, { ascending: sort !== "newest" })
    .range(from, from + PAGE_SIZE - 1)
  if (error) console.error("[registry]", error.message)
  return { startups: (data ?? []) as StartupRow[], total: count ?? 0 }
}

async function getFilters() {
  const sb = createReadClient()
  const [{ data: yd }, { data: cd }, { data: ctd }] = await Promise.all([
    sb.from("startups").select("founded_year").eq("status", "approved").not("founded_year", "is", null).gte("founded_year", 2010).order("founded_year", { ascending: false }),
    sb.from("startups").select("category").eq("status", "approved").not("category", "is", null),
    sb.from("startups").select("country_code,country_name").eq("status", "approved").not("country_code", "is", null).not("country_name", "is", null),
  ])
  const countryMap = new Map<string, string>()
  ;(ctd ?? []).forEach(r => { if (r.country_code && r.country_name && !countryMap.has(r.country_code)) countryMap.set(r.country_code, r.country_name) })
  return {
    years: [...new Set((yd ?? []).map(r => r.founded_year as number))].filter(Boolean),
    cats: [...new Set((cd ?? []).map(r => r.category as string))].filter(Boolean).sort(),
    countries: [...countryMap.entries()].map(([code, name]) => ({ code, name })).sort((a, b) => a.name.localeCompare(b.name)),
  }
}

function buildPageUrl(page: number, extra?: Record<string, string>): string {
  const p = new URLSearchParams()
  if (extra?.q) p.set("q", extra.q)
  if (extra?.year) p.set("year", extra.year)
  if (extra?.sort && extra.sort !== "name") p.set("sort", extra.sort)
  if (extra?.sector) p.set("sector", extra.sector)
  if (extra?.country) p.set("country", extra.country)
  if (page > 1) p.set("page", String(page))
  const s = p.toString()
  return `${BASE_URL}/registry${s ? `?${s}` : ""}`
}

function buildDynamicTitle(sp: Record<string, string | undefined>, total: number): string {
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  const pg = Number(sp?.page ?? 1)
  const pgSuffix = pg > 1 ? ` — Page ${pg}` : ""
  if (sp?.q) return `"${sp.q}" — Global Startup Search${pgSuffix} | UpForge`
  if (sp?.sector) return `${sp.sector} Startups — Global Registry${pgSuffix} | UpForge`
  if (sp?.country) return `${sp.country} Startups — Global Registry${pgSuffix} | UpForge`
  if (sp?.year) return `Startups Founded ${sp.year}${pgSuffix} | UpForge`
  if (pg > 1) return `Global Startup Registry — Page ${pg} | UpForge`
  return `Global Startup Registry 2026 — ${n}+ Verified Startups, UFRN Indexed | UpForge`
}

function buildDynamicDescription(sp: Record<string, string | undefined>, total: number): string {
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  if (sp?.sector) return `Browse ${n}+ verified ${sp.sector} startups. Every listing independently reviewed and assigned a permanent UFRN by the UpForge editorial board. Free to access.`
  if (sp?.country) return `Discover verified startups from ${sp.country}. ${n}+ listings, each with a unique UFRN identifier. Free to access forever.`
  if (sp?.year) return `${n}+ startups founded in ${sp.year}. Every listing verified and assigned a UFRN by UpForge's independent editorial team.`
  if (sp?.q) return `Search results for "${sp.q}" across ${n}+ verified global startups. Founders, sectors, cities, countries — all independently verified.`
  return `The open, independent, verified global registry of ${n}+ startups. Every listing is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Search by founder, sector, city, country, year. Free to access, forever.`
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const { total } = await getData("", "", "name", "", "", 1)
  const page = Math.max(1, Number(sp?.page ?? 1))
  const isFiltered = !!(sp?.q || sp?.year || sp?.sector || sp?.country)
  const sort = sp?.sort ?? "name"
  const title = buildDynamicTitle(sp ?? {}, total)
  const description = buildDynamicDescription(sp ?? {}, total)
  const canonicalParams: Record<string, string> = {}
  if (sp?.q) canonicalParams.q = sp.q
  if (sp?.year) canonicalParams.year = sp.year
  if (sort !== "name") canonicalParams.sort = sort
  if (sp?.sector) canonicalParams.sector = sp.sector ?? ""
  if (sp?.country) canonicalParams.country = sp.country ?? ""
  const canonicalUrl = buildPageUrl(page, canonicalParams)
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const prevUrl = page > 1 ? buildPageUrl(page - 1, canonicalParams) : undefined
  const nextUrl = page < totalPages ? buildPageUrl(page + 1, canonicalParams) : undefined
  const shouldIndex = !isFiltered || page > 1

  return {
    title,
    description,
    keywords: [
      "global startup registry 2026", "verified startup database", "UFRN startup registry number",
      "open startup data", "startup proof of existence", "independent startup registry",
      "Indian startup founders 2026", "India unicorn founders", "upforge registry",
      "startup verification", "global startup database 2026", "startup directory worldwide",
      "startup search engine", "founder registry", "startup UFRN lookup",
      "Africa startup registry", "Southeast Asia startups", "MENA startups 2026",
      "Latin America startup database", "global emerging market startups",
    ],
    alternates: {
      canonical: canonicalUrl,
      ...(prevUrl || nextUrl ? { types: { ...(prevUrl ? { prev: prevUrl } : {}), ...(nextUrl ? { next: nextUrl } : {}) } } : {}),
      languages: { "en": canonicalUrl, "en-US": canonicalUrl, "en-IN": canonicalUrl, "x-default": `${BASE_URL}/registry` },
    },
    openGraph: {
      title, description, url: canonicalUrl, siteName: "UpForge Global Registry",
      images: [{ url: `${BASE_URL}/og/startup-default.png`, width: 1200, height: 630, alt: title }],
      locale: "en", type: "website",
    },
    twitter: {
      card: "summary_large_image", title, description,
      site: "@upforge_in", creator: "@upforge_in",
      images: [`${BASE_URL}/og/startup-default.png`],
    },
    robots: {
      index: shouldIndex, follow: true,
      googleBot: { index: shouldIndex, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  }
}

export default async function RegistryPage({ searchParams }: PageProps) {
  unstable_noStore()
  const sp = await searchParams
  const q = sp?.q?.trim() ?? ""
  const year = sp?.year?.trim() ?? ""
  const sort = sp?.sort?.trim() ?? "name"
  const cat = sp?.sector?.trim() ?? ""
  const country = sp?.country?.trim() ?? ""
  const page = Math.max(1, Number(sp?.page ?? 1))

  const [{ startups, total }, { years, cats, countries }] = await Promise.all([
    getData(q, year, sort, cat, country, page),
    getFilters(),
  ])

  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const isFiltered = !!(q || year || cat || country || (sort && sort !== "name"))

  const qs = (ov: Record<string, string | undefined>) => {
    const base: Record<string, string | undefined> = {
      q: q || undefined, year: year || undefined,
      sort: sort !== "name" ? sort : undefined,
      sector: cat || undefined, country: country || undefined,
      page: page > 1 ? String(page) : undefined,
    }
    const m = { ...base, ...ov }
    const p = new URLSearchParams()
    Object.entries(m).forEach(([k, v]) => { if (v) p.set(k, v) })
    const s = p.toString()
    return `/registry${s ? `?${s}` : ""}`
  }

  const pgHref = (p: number) => qs({ page: p === 1 ? undefined : String(p) })
  const winSize = Math.min(5, totalPages)
  const winStart = page <= 3 || totalPages <= 5 ? 1 : page >= totalPages - 2 ? totalPages - 4 : page - 2
  const pgNums = Array.from({ length: winSize }, (_, i) => winStart + i)

  const featured = page === 1 && !isFiltered ? startups.filter(s => s.is_featured).slice(0, 3) : []
  const featIds = new Set(featured.map(s => s.id))
  const grid = page === 1 && !isFiltered ? startups.filter(s => !featIds.has(s.id)) : startups
  const baseNum = (page - 1) * PAGE_SIZE
  const activeFilterCount = [year, cat, country, sort !== "name" ? sort : ""].filter(Boolean).length
  const canonicalParams: Record<string, string> = {}
  if (q) canonicalParams.q = q
  if (year) canonicalParams.year = year
  if (sort !== "name") canonicalParams.sort = sort
  if (cat) canonicalParams.sector = cat
  if (country) canonicalParams.country = country
  const canonicalUrl = buildPageUrl(page, canonicalParams)
  const prevUrl = page > 1 ? buildPageUrl(page - 1, canonicalParams) : undefined
  const nextUrl = page < totalPages ? buildPageUrl(page + 1, canonicalParams) : undefined
  const allPageStartups = [...featured, ...grid]

  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Dataset",
      "@id": `${BASE_URL}/registry#dataset`,
      name: "UpForge Global Startup Registry",
      description: `Open, verified database of ${total.toLocaleString()}+ startups worldwide. Each manually reviewed and assigned a UFRN.`,
      url: `${BASE_URL}/registry`,
      keywords: ["startups", "UFRN", "startup registry", "verified startups", "global startup database"],
      creator: { "@type": "Organization", "@id": `${BASE_URL}/#organization`, name: "UpForge" },
      license: "https://creativecommons.org/licenses/by/4.0/",
      isAccessibleForFree: true,
      temporalCoverage: "2010/..",
      spatialCoverage: { "@type": "Place", name: "Worldwide" },
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": `${canonicalUrl}#cp`,
      name: buildDynamicTitle(sp ?? {}, total).replace(" | UpForge", ""),
      url: canonicalUrl,
      description: buildDynamicDescription(sp ?? {}, total),
      numberOfItems: total,
      isPartOf: { "@id": `${BASE_URL}/#website` },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${canonicalUrl}#itemlist`,
      name: `Verified Startups — Page ${page}`,
      numberOfItems: allPageStartups.length,
      itemListElement: allPageStartups.map((s, idx) => ({
        "@type": "ListItem",
        position: baseNum + idx + 1,
        name: s.name,
        url: `https://www.upforge.in/startup/${s.slug}`,
        item: {
          "@type": "Organization",
          name: s.name,
          url: `https://www.upforge.in/startup/${s.slug}`,
          ...(s.description ? { description: s.description.slice(0, 200) } : {}),
          ...(s.founded_year ? { foundingDate: String(s.founded_year) } : {}),
          ...(s.ufrn ? { identifier: { "@type": "PropertyValue", propertyID: "UFRN", name: "UpForge Registry Number", value: s.ufrn } } : {}),
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "UpForge", item: BASE_URL },
        { "@type": "ListItem", position: 2, name: "Global Registry", item: `${BASE_URL}/registry` },
        ...(cat ? [{ "@type": "ListItem", position: 3, name: cat, item: `${BASE_URL}/registry?sector=${encodeURIComponent(cat)}` }] : []),
        ...(page > 1 ? [{ "@type": "ListItem", position: cat ? 4 : 3, name: `Page ${page}`, item: canonicalUrl }] : []),
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        { "@type": "Question", name: "What is a UFRN?", acceptedAnswer: { "@type": "Answer", text: "A UFRN (UpForge Registry Number) is a unique permanent identifier assigned to every approved startup. Format: UF-2026-IND-00001. It serves as proof of existence, shareable on LinkedIn, investor decks, and press kits." } },
        { "@type": "Question", name: "Is the UpForge Global Registry free?", acceptedAnswer: { "@type": "Answer", text: "Yes. Browsing and listing are completely free. Every approved startup receives a permanent UFRN at no cost." } },
        { "@type": "Question", name: "How does startup verification work?", acceptedAnswer: { "@type": "Answer", text: "Every submission undergoes manual editorial review. The team verifies existence, legitimacy, and accuracy before assigning a UFRN." } },
      ],
    },
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {prevUrl && <link rel="prev" href={prevUrl} />}
      {nextUrl && <link rel="next" href={nextUrl} />}
      <link rel="alternate" hrefLang="en" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en-IN" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/registry`} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');

        :root {
          --ink:       #0D0D0D;
          --ink-2:     #1C1C1C;
          --parch:     #F9F6F0;
          --parch-2:   #F2EDE3;
          --parch-3:   #E8E1D4;
          --teal:      #0A7C6F;
          --teal-lt:   #12A093;
          --teal-pale: #E6F4F2;
          --gold:      #B8902A;
          --gold-lt:   #D4A94A;
          --gold-pale: #FDF8EC;
          --rule:      #D4CEC4;
          --rule-2:    #E0DAD0;
          --muted:     #6B6258;
          --red-acc:   #8B1A1A;
          --white:     #FEFEFE;
        }

        .rg-root { min-height: 100vh; background: var(--parch); font-family: 'Libre Baskerville', Georgia, serif; color: var(--ink); }

        /* ─── HERO ─── */
        .rg-hero {
          position: relative;
          background: var(--ink-2);
          overflow: hidden;
          border-bottom: 3px solid var(--teal);
        }
        .rg-hero::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 2px;
          background: linear-gradient(90deg, var(--red-acc) 0%, var(--gold) 33%, var(--teal) 66%, var(--red-acc) 100%);
          z-index: 3;
        }
        .rg-hero-texture {
          position: absolute; inset: 0; z-index: 0;
          background-image:
            radial-gradient(ellipse 80% 60% at 50% 50%, rgba(10,124,111,0.12) 0%, transparent 70%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(255,255,255,0.012) 40px,
              rgba(255,255,255,0.012) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 80px,
              rgba(255,255,255,0.008) 80px,
              rgba(255,255,255,0.008) 81px
            );
        }
        .rg-hero-content {
          position: relative; z-index: 10;
          max-width: 1300px; margin: 0 auto;
          padding: 80px 32px 64px;
          display: grid;
          grid-template-columns: 1fr 340px;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .rg-hero-content { grid-template-columns: 1fr; gap: 32px; padding: 120px 24px 48px; }
          .rg-hero-right { display: none; }
        }
        .rg-eyebrow {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: 'DM Mono', monospace; font-size: 9px;
          font-weight: 500; text-transform: uppercase; letter-spacing: 0.25em;
          color: var(--teal-lt); margin-bottom: 18px;
        }
        .rg-eyebrow-dot { width: 6px; height: 6px; background: var(--teal-lt); border-radius: 50%; animation: pulse-dot 2s infinite; }
        @keyframes pulse-dot {
          0%,100% { opacity: 1; transform: scale(1); }
          50%      { opacity: 0.5; transform: scale(0.8); }
        }
        .rg-h1 {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: clamp(44px, 5.5vw, 72px);
          font-weight: 700; color: var(--white);
          line-height: 1.05; letter-spacing: -0.02em;
          margin-bottom: 16px;
        }
        .rg-h1 em { font-style: italic; color: var(--gold-lt); }
        .rg-tagline {
          font-family: 'Libre Baskerville', Georgia, serif;
          font-size: 15px; font-style: italic;
          color: rgba(255,255,255,0.7);
          line-height: 1.75; margin-bottom: 32px;
          max-width: 520px;
        }
        .rg-hero-stats {
          display: flex; gap: 0; border: 1px solid rgba(255,255,255,0.12);
        }
        .rg-stat {
          flex: 1; padding: 16px 20px; text-align: center;
          border-right: 1px solid rgba(255,255,255,0.1);
        }
        .rg-stat:last-child { border-right: none; }
        .rg-stat-val {
          font-family: 'Cormorant Garamond', serif;
          font-size: 28px; font-weight: 700; color: var(--white); line-height: 1;
          margin-bottom: 4px;
        }
        .rg-stat-lbl {
          font-family: 'DM Mono', monospace;
          font-size: 8px; text-transform: uppercase; letter-spacing: 0.18em;
          color: rgba(255,255,255,0.4);
        }
        .rg-hero-right {
          display: flex; flex-direction: column; gap: 12px;
        }
        .rg-submit-card {
          background: var(--teal); padding: 24px;
          border: none; text-decoration: none;
          display: block; transition: background 0.2s;
        }
        .rg-submit-card:hover { background: var(--teal-lt); }
        .rg-submit-ey { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.6); margin-bottom: 8px; }
        .rg-submit-h { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--white); margin-bottom: 4px; line-height: 1.2; }
        .rg-submit-p { font-size: 11px; color: rgba(255,255,255,0.7); font-style: italic; line-height: 1.6; margin-bottom: 12px; }
        .rg-submit-btn { display: inline-flex; align-items: center; gap: 6px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.15em; color: var(--white); font-weight: 500; }
        .rg-ufrn-sample {
          background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.12);
          padding: 16px; display: flex; align-items: center; gap: 14px;
        }
        .rg-ufrn-icon { width: 36px; height: 36px; background: rgba(184,144,42,0.2); border: 1px solid rgba(184,144,42,0.4); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .rg-ufrn-label { font-family: 'DM Mono', monospace; font-size: 7px; text-transform: uppercase; letter-spacing: 0.2em; color: rgba(255,255,255,0.4); margin-bottom: 3px; }
        .rg-ufrn-val { font-family: 'DM Mono', monospace; font-size: 13px; font-weight: 500; color: var(--gold-lt); letter-spacing: 0.05em; }

        /* ─── SECTOR RIBBON ─── */
        .rg-sectors {
          background: var(--white); border-bottom: 1px solid var(--rule);
          overflow-x: auto; scrollbar-width: none;
        }
        .rg-sectors::-webkit-scrollbar { display: none; }
        .rg-sectors-inner {
          max-width: 1300px; margin: 0 auto; padding: 0 32px;
          display: flex; align-items: stretch; gap: 0;
        }
        .rg-sector-all {
          padding: 14px 20px; font-family: 'DM Mono', monospace;
          font-size: 9px; text-transform: uppercase; letter-spacing: 0.14em;
          font-weight: 500; color: var(--muted); text-decoration: none;
          border-bottom: 2px solid transparent; white-space: nowrap;
          border-right: 1px solid var(--rule-2); flex-shrink: 0;
          transition: color 0.2s, border-color 0.2s;
        }
        .rg-sector-all.on { color: var(--teal); border-bottom-color: var(--teal); }
        .rg-sector-all:hover:not(.on) { color: var(--ink); }
        .rg-sector-tab {
          padding: 14px 16px; font-family: 'DM Mono', monospace;
          font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--muted); text-decoration: none;
          border-bottom: 2px solid transparent; white-space: nowrap;
          flex-shrink: 0; transition: color 0.2s, border-color 0.2s;
        }
        .rg-sector-tab.on { color: var(--teal); border-bottom-color: var(--teal); }
        .rg-sector-tab:hover:not(.on) { color: var(--ink); }

        /* ─── TOOLBAR ─── */
        .rg-toolbar {
          position: sticky; top: 0; z-index: 30;
          background: rgba(249,246,240,0.97); backdrop-filter: blur(10px);
          border-bottom: 1px solid var(--rule);
          box-shadow: 0 1px 0 rgba(0,0,0,0.04);
        }
        .rg-toolbar-inner { max-width: 1300px; margin: 0 auto; padding: 12px 32px; }
        @media (max-width: 768px) { .rg-toolbar-inner { padding: 10px 16px; } }

        .rg-search-row {
          display: flex; align-items: center;
          background: var(--white); border: 1px solid var(--rule);
          margin-bottom: 10px; height: 48px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .rg-search-row:focus-within { border-color: var(--teal); box-shadow: 0 0 0 3px rgba(10,124,111,0.1); }
        .rg-search-icon { padding: 0 16px; color: var(--rule); flex-shrink: 0; }
        .rg-search-input {
          flex: 1; border: none; background: transparent; outline: none;
          font-family: 'Libre Baskerville', serif; font-size: 13px; font-style: italic;
          color: var(--ink); min-width: 0; padding: 0;
        }
        .rg-search-input::placeholder { color: var(--rule); }
        .rg-search-btn {
          height: 40px; padding: 0 24px; margin: 4px;
          background: var(--ink); color: var(--white); border: none; cursor: pointer;
          font-family: 'DM Mono', monospace; font-size: 9px; font-weight: 500;
          text-transform: uppercase; letter-spacing: 0.15em;
          transition: background 0.2s;
        }
        .rg-search-btn:hover { background: var(--teal); }

        .rg-controls {
          display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        }
        .rg-filter-btn {
          display: inline-flex; align-items: center; gap: 6px;
          height: 34px; padding: 0 14px;
          background: var(--white); border: 1px solid var(--rule);
          cursor: pointer; font-family: 'DM Mono', monospace;
          font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.12em;
          color: var(--muted); transition: all 0.2s;
        }
        .rg-filter-btn:hover, .rg-filter-btn.on { border-color: var(--teal); color: var(--teal); }
        .rg-filter-count { background: var(--teal); color: var(--white); font-size: 8px; padding: 1px 6px; border-radius: 100px; }
        .rg-divider { width: 1px; height: 20px; background: var(--rule-2); }
        .rg-sort-link { padding: 0 10px; font-family: 'DM Mono', monospace; font-size: 8.5px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--rule); text-decoration: none; transition: color 0.2s; }
        .rg-sort-link.on { color: var(--teal); font-weight: 500; }
        .rg-sort-link:hover:not(.on) { color: var(--ink); }
        .rg-clear { margin-left: auto; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--red-acc); text-decoration: none; padding: 5px 12px; border: 1px solid rgba(139,26,26,0.3); transition: background 0.2s; }
        .rg-clear:hover { background: rgba(139,26,26,0.06); }

        .rg-filter-panel {
          overflow: hidden; max-height: 0; opacity: 0;
          transition: max-height 0.3s ease, opacity 0.25s ease, margin 0.25s;
          margin-top: 0;
        }
        .rg-filter-panel.open { max-height: 200px; opacity: 1; margin-top: 10px; }
        .rg-filter-inner {
          background: var(--white); border: 1px solid var(--rule-2);
          padding: 16px 20px; display: flex; flex-wrap: wrap; gap: 16px; align-items: flex-end;
        }
        .rg-fg { display: flex; flex-direction: column; gap: 4px; }
        .rg-flabel { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.18em; color: var(--rule); }
        .rg-fsel {
          height: 34px; border: 1px solid var(--rule-2); background: var(--white);
          font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted);
          padding: 0 10px; cursor: pointer; min-width: 140px; outline: none;
          transition: border-color 0.2s;
        }
        .rg-fsel:focus, .rg-fsel.on { border-color: var(--teal); color: var(--teal); }

        /* ─── RESULTS BAR ─── */
        .rg-results-bar {
          max-width: 1300px; margin: 0 auto; padding: 14px 32px;
          display: flex; align-items: center; gap: 12px;
          border-bottom: 1px solid var(--rule-2);
        }
        @media (max-width: 768px) { .rg-results-bar { padding: 12px 16px; } }
        .rg-results-q { font-family: 'Cormorant Garamond', serif; font-size: 16px; font-weight: 600; font-style: italic; color: var(--ink); }
        .rg-results-n { font-family: 'DM Mono', monospace; font-size: 10px; color: var(--muted); }
        .rg-results-rule { flex: 1; height: 1px; background: var(--rule-2); }
        .rg-results-pg { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--rule); }

        /* ─── MAIN ─── */
        .rg-main { max-width: 1300px; margin: 0 auto; padding: 36px 32px 64px; }
        @media (max-width: 768px) { .rg-main { padding: 24px 16px 48px; } }
        .rg-grid { display: grid; grid-template-columns: 1fr 280px; gap: 48px; align-items: start; }
        @media (max-width: 1024px) { .rg-grid { grid-template-columns: 1fr; } .rg-aside { display: none; } }

        .rg-sh { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; }
        .rg-sh-lbl { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.28em; color: var(--rule); white-space: nowrap; }
        .rg-sh-line { flex: 1; height: 1px; background: var(--rule-2); }
        .rg-sh-mark { color: var(--teal); font-size: 10px; flex-shrink: 0; }

        /* ─── FEATURED CARDS ─── */
        .rg-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 48px; }
        @media (max-width: 820px) { .rg-feat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .rg-feat-grid { grid-template-columns: 1fr; } }
        .rg-feat-card { text-decoration: none; display: block; border: 1px solid var(--rule-2); background: var(--white); overflow: hidden; transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s; }
        .rg-feat-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.1); border-color: var(--teal); }
        .rg-feat-img { width: 100%; aspect-ratio: 16/9; position: relative; background: var(--parch-2); overflow: hidden; }
        .rg-feat-img img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .rg-feat-card:hover .rg-feat-img img { transform: scale(1.04); }
        .rg-feat-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(13,13,13,0.75) 0%, transparent 55%); }
        .rg-feat-cap { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; }
        .rg-feat-cat { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.18em; color: rgba(255,255,255,0.55); margin-bottom: 4px; }
        .rg-feat-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 700; color: var(--white); line-height: 1.2; }
        .rg-feat-body { padding: 16px; border-top: 1px solid var(--rule-2); }
        .rg-feat-desc { font-size: 11.5px; color: var(--muted); font-style: italic; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 10px; }
        .rg-feat-meta { display: flex; align-items: center; justify-content: space-between; }
        .rg-feat-chips { font-family: 'DM Mono', monospace; font-size: 9px; color: var(--rule); display: flex; gap: 10px; }

        /* ─── LIST CARDS ─── */
        .rg-list { display: flex; flex-direction: column; }
        .rg-card {
          display: flex; background: var(--white); text-decoration: none;
          border: 1px solid var(--rule-2); border-top: none; overflow: hidden;
          position: relative; transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
        }
        .rg-card:first-child { border-top: 1px solid var(--rule-2); }
        .rg-card:hover { border-color: var(--teal); box-shadow: 0 4px 24px rgba(10,124,111,0.1); background: rgba(10,124,111,0.01); z-index: 1; }
        .rg-card:hover + .rg-card { border-top: 1px solid var(--rule-2); }
        .rg-card-stripe { width: 3px; flex-shrink: 0; background: var(--rule-2); transition: background 0.2s; }
        .rg-card:hover .rg-card-stripe { background: var(--teal); }
        .rg-card-stripe.accent { background: var(--teal); }
        .rg-card-body { flex: 1; padding: 20px 22px; display: flex; align-items: flex-start; gap: 18px; min-width: 0; }
        .rg-logo { width: 50px; height: 50px; flex-shrink: 0; border: 1px solid var(--rule-2); background: var(--parch-2); display: flex; align-items: center; justify-content: center; overflow: hidden; }
        .rg-logo img { width: 100%; height: 100%; object-fit: cover; }
        .rg-logo-init { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 700; color: var(--rule); }
        .rg-content { flex: 1; min-width: 0; }
        .rg-top { display: flex; align-items: center; flex-wrap: wrap; gap: 8px; margin-bottom: 6px; }
        .rg-name { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--ink); line-height: 1.2; }
        .rg-card:hover .rg-name { color: var(--teal); }
        .rg-badge-cat { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--muted); background: var(--parch-2); padding: 2px 8px; white-space: nowrap; }
        .rg-badge-cc { font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--white); background: var(--teal); padding: 2px 7px; white-space: nowrap; }
        .rg-badge-ufrn { display: inline-flex; align-items: center; gap: 3px; font-family: 'DM Mono', monospace; font-size: 8px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--teal); }
        .rg-desc { font-size: 12px; color: var(--muted); font-style: italic; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 10px; }
        .rg-meta { display: flex; flex-wrap: wrap; gap: 14px; align-items: center; }
        .rg-meta-item { display: flex; align-items: center; gap: 5px; font-family: 'DM Mono', monospace; font-size: 9.5px; color: var(--muted); }
        .rg-meta-item svg { opacity: 0.5; }
        .rg-ufrn-tag { font-family: 'DM Mono', monospace; font-size: 8.5px; color: var(--gold); letter-spacing: 0.04em; background: var(--gold-pale); border: 1px solid rgba(184,144,42,0.25); padding: 2px 8px; }
        .rg-card-right { display: flex; flex-direction: column; align-items: flex-end; justify-content: space-between; padding: 20px 20px 20px 0; gap: 12px; flex-shrink: 0; }
        .rg-rank { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; color: var(--rule); line-height: 1; transition: color 0.2s; }
        .rg-card:hover .rg-rank { color: var(--teal); }
        .rg-rank.top { color: var(--teal); }
        .rg-arrow { width: 32px; height: 32px; display: flex; align-items: center; justify-content: center; background: var(--parch-2); transition: all 0.2s; }
        .rg-card:hover .rg-arrow { background: var(--teal); }
        .rg-card:hover .rg-arrow svg { color: var(--white) !important; }

        @media (max-width: 600px) {
          .rg-card-body { padding: 14px 0 14px 14px; gap: 12px; }
          .rg-card-right { padding: 14px 14px 14px 0; }
          .rg-name { font-size: 16px; }
          .rg-logo { width: 44px; height: 44px; }
          .rg-rank { font-size: 18px; }
        }

        .rg-empty { text-align: center; padding: 80px 32px; border: 1px solid var(--rule-2); background: var(--white); }
        .rg-empty-icon { font-size: 48px; display: block; margin-bottom: 16px; opacity: 0.4; }
        .rg-empty-h { font-family: 'Cormorant Garamond', serif; font-size: 24px; font-weight: 700; margin-bottom: 8px; }
        .rg-empty-p { font-size: 13px; color: var(--muted); font-style: italic; }

        /* ─── PAGINATION ─── */
        .rg-pag { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 48px; padding-top: 28px; border-top: 1px solid var(--rule-2); }
        .rg-pag-btn { padding: 9px 20px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.1em; border: 1px solid var(--rule); background: var(--white); color: var(--muted); text-decoration: none; transition: all 0.2s; }
        .rg-pag-btn:hover:not(.dis) { border-color: var(--teal); color: var(--teal); }
        .rg-pag-btn.dis { opacity: 0.3; pointer-events: none; }
        .rg-pag-num { width: 40px; height: 40px; display: flex; align-items: center; justify-content: center; font-family: 'DM Mono', monospace; font-size: 12px; font-weight: 500; border: 1px solid var(--rule); text-decoration: none; color: var(--muted); transition: all 0.2s; }
        .rg-pag-num:hover { border-color: var(--teal); color: var(--teal); }
        .rg-pag-num.on { background: var(--teal); color: var(--white); border-color: var(--teal); }

        /* ─── SIDEBAR ─── */
        .rg-aside { display: flex; flex-direction: column; gap: 20px; }
        .rg-aside-box { border: 1px solid var(--rule-2); background: var(--white); padding: 22px; }
        .rg-aside-box.dark { background: var(--ink-2); border-color: transparent; }
        .rg-aside-box.teal { background: var(--teal-pale); border-color: rgba(10,124,111,0.25); }
        .rg-aside-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.25em; color: var(--rule); margin-bottom: 10px; }
        .rg-aside-box.dark .rg-aside-ey { color: rgba(10,160,147,0.7); }
        .rg-aside-box.teal .rg-aside-ey { color: var(--teal); }
        .rg-aside-h { font-family: 'Cormorant Garamond', serif; font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .rg-aside-box.dark .rg-aside-h { color: var(--white); }
        .rg-aside-p { font-size: 12px; color: var(--muted); font-style: italic; line-height: 1.65; margin-bottom: 14px; }
        .rg-aside-btn { display: block; text-align: center; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.14em; font-weight: 500; background: var(--teal); color: var(--white); padding: 13px; text-decoration: none; transition: background 0.2s; }
        .rg-aside-btn:hover { background: var(--teal-lt); }
        .rg-aside-list { list-style: none; padding: 0; margin: 0; }
        .rg-aside-list li { border-bottom: 1px solid var(--rule-2); }
        .rg-aside-list li:last-child { border-bottom: none; }
        .rg-aside-list a { display: flex; align-items: center; justify-content: space-between; padding: 9px 0; font-family: 'DM Mono', monospace; font-size: 9.5px; color: var(--muted); text-decoration: none; transition: color 0.2s; text-transform: uppercase; letter-spacing: 0.08em; }
        .rg-aside-list a:hover { color: var(--teal); }

        /* ─── CTA BLOCK ─── */
        .rg-cta {
          background: var(--ink-2); padding: 44px 48px;
          display: flex; flex-wrap: wrap; align-items: center;
          justify-content: space-between; gap: 28px; margin-top: 56px;
          border-left: 3px solid var(--teal);
        }
        @media (max-width: 640px) { .rg-cta { padding: 28px 24px; } }
        .rg-cta-ey { font-family: 'DM Mono', monospace; font-size: 7.5px; text-transform: uppercase; letter-spacing: 0.28em; color: rgba(10,160,147,0.7); margin-bottom: 10px; }
        .rg-cta-h { font-family: 'Cormorant Garamond', serif; font-size: 26px; font-weight: 700; color: var(--white); margin-bottom: 6px; line-height: 1.2; }
        .rg-cta-p { font-size: 12px; color: rgba(255,255,255,0.4); font-style: italic; }
        .rg-cta-btn { display: inline-flex; align-items: center; gap: 10px; background: var(--teal); color: var(--white); padding: 14px 28px; font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 500; text-decoration: none; border: none; transition: all 0.2s; flex-shrink: 0; }
        .rg-cta-btn:hover { background: var(--teal-lt); transform: translateX(2px); }

        /* ─── FOOTER LINKS ─── */
        .rg-links { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-top: 36px; padding-top: 36px; border-top: 1px solid var(--rule-2); }
        @media (max-width: 700px) { .rg-links { grid-template-columns: repeat(2, 1fr); } }
        .rg-link-card { padding: 14px 16px; border: 1px solid var(--rule-2); background: var(--white); text-decoration: none; transition: all 0.2s; }
        .rg-link-card:hover { border-color: var(--teal); transform: translateY(-2px); }
        .rg-link-title { font-family: 'DM Mono', monospace; font-size: 9px; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); display: flex; align-items: center; gap: 5px; margin-bottom: 4px; }
        .rg-link-desc { font-size: 10px; color: var(--rule); font-family: 'DM Mono', monospace; }

        @media (max-width: 768px) { .rg-hero-content { padding: 120px 20px 48px; } }
        @media (max-width: 480px) { .rg-h1 { font-size: 38px; } }
      `}</style>

      <div className="rg-root">
        <Navbar />

        {/* ── HERO ── */}
        <div className="rg-hero">
          <div className="rg-hero-texture" />
          <div className="rg-hero-content">
            <div>
              <div className="rg-eyebrow">
                <span className="rg-eyebrow-dot" />
                Live · {total.toLocaleString()} Verified Profiles
              </div>
              <h1 className="rg-h1">
                The Global<br /><em>Startup Registry</em>
              </h1>
              <p className="rg-tagline">
                Open, independent, and permanent. Every startup is manually verified
                and assigned a unique UFRN — the world standard for startup identity.
              </p>
              <div className="rg-hero-stats">
                {[
                  { v: `${total.toLocaleString()}+`, l: "Verified Startups" },
                  { v: "50+", l: "Countries" },
                  { v: "Free", l: "Forever" },
                  { v: "UFRN", l: "Standard" },
                ].map((s, i) => (
                  <div key={i} className="rg-stat">
                    <div className="rg-stat-val">{s.v}</div>
                    <div className="rg-stat-lbl">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rg-hero-right">
              <a href="https://www.upforge.in/submit" className="rg-submit-card">
                <div className="rg-submit-ey">✦ Get Your UFRN — Free</div>
                <div className="rg-submit-h">List Your Startup</div>
                <div className="rg-submit-p">Independently verified. Permanently indexed. Cited by investors and press worldwide.</div>
                <div className="rg-submit-btn">Submit for Free <ArrowRight size={11} /></div>
              </a>
              <div className="rg-ufrn-sample">
                <div className="rg-ufrn-icon">
                  <Shield size={16} color="#B8902A" />
                </div>
                <div>
                  <div className="rg-ufrn-label">Sample UFRN</div>
                  <div className="rg-ufrn-val">UF-2026-IND-00001</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTOR RIBBON ── */}
        <nav className="rg-sectors" aria-label="Browse by sector">
          <div className="rg-sectors-inner">
            <Link href="/registry" className={`rg-sector-all${!cat && !q && !country ? " on" : ""}`}>All Sectors</Link>
            {cats.slice(0, 14).map(c => (
              <Link key={c} href={`/registry?sector=${encodeURIComponent(c)}`} className={`rg-sector-tab${cat === c ? " on" : ""}`}>{c}</Link>
            ))}
            {cats.length > 14 && <Link href="/registry/sectors" className="rg-sector-tab">More →</Link>}
          </div>
        </nav>

        {/* ── TOOLBAR ── */}
        <div className="rg-toolbar" id="rg-toolbar">
          <div className="rg-toolbar-inner">
            <form action="/registry" method="GET" className="rg-search-row" id="search-form">
              {year && <input type="hidden" name="year" value={year} />}
              {cat && <input type="hidden" name="sector" value={cat} />}
              {country && <input type="hidden" name="country" value={country} />}
              {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} />}
              <span className="rg-search-icon"><Globe size={15} /></span>
              <input type="search" name="q" defaultValue={q} className="rg-search-input"
                placeholder="Search startups, founders, sectors, cities, countries…"
                aria-label="Search global registry" autoComplete="off" />
              <button type="submit" className="rg-search-btn">Search</button>
            </form>
            <div className="rg-controls">
              <button type="button" className={`rg-filter-btn${activeFilterCount > 0 ? " on" : ""}`} id="filter-toggle-btn" aria-expanded="false" aria-controls="filter-panel">
                <Zap size={11} />
                Filters
                {activeFilterCount > 0 && <span className="rg-filter-count">{activeFilterCount}</span>}
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" id="filter-chevron">
                  <polyline points="2,3 5,7 8,3" />
                </svg>
              </button>
              <div className="rg-divider" />
              <Link href={qs({ sort: "name", page: undefined })} className={`rg-sort-link${sort === "name" ? " on" : ""}`}>A–Z</Link>
              <Link href={qs({ sort: "newest", page: undefined })} className={`rg-sort-link${sort === "newest" ? " on" : ""}`}>Newest</Link>
              <Link href={qs({ sort: "year", page: undefined })} className={`rg-sort-link${sort === "year" ? " on" : ""}`}>Founded</Link>
              {isFiltered && <Link href="/registry" className="rg-clear">✕ Clear</Link>}
            </div>
            <div className="rg-filter-panel" id="filter-panel" role="region" aria-label="Filters">
              <div className="rg-filter-inner">
                <div className="rg-fg">
                  <label className="rg-flabel" htmlFor="rg-year-sel">Year Founded</label>
                  <select className={`rg-fsel${year ? " on" : ""}`} id="rg-year-sel">
                    <option value="">Any Year</option>
                    {years.map(yr => <option key={yr} value={String(yr)} selected={year === String(yr)}>{yr}</option>)}
                  </select>
                </div>
                <div className="rg-fg">
                  <label className="rg-flabel" htmlFor="rg-cat-sel">Sector</label>
                  <select className={`rg-fsel${cat ? " on" : ""}`} id="rg-cat-sel">
                    <option value="">All Sectors</option>
                    {cats.map(c => <option key={c} value={c} selected={cat === c}>{c}</option>)}
                  </select>
                </div>
                <div className="rg-fg">
                  <label className="rg-flabel" htmlFor="rg-country-sel">Country</label>
                  <select className={`rg-fsel${country ? " on" : ""}`} id="rg-country-sel">
                    <option value="">All Countries</option>
                    {countries.map(ct => <option key={ct.code} value={ct.code} selected={country === ct.code}>{ct.name} ({ct.code})</option>)}
                  </select>
                </div>
                {isFiltered && <Link href="/registry" className="rg-clear" style={{ alignSelf: "flex-end", height: 34, display: "flex", alignItems: "center" }}>✕ Clear all</Link>}
              </div>
            </div>
          </div>
        </div>

        {/* ── RESULTS BAR ── */}
        <div className="rg-results-bar">
          <span className="rg-results-q">
            {q ? `"${q}"` : cat ? cat : country ? (countries.find(c => c.code === country)?.name ?? country) : year ? `Est. ${year}` : "All Startups"}
          </span>
          <span className="rg-results-n">{total.toLocaleString()} profiles</span>
          <span className="rg-results-rule" />
          <span className="rg-results-pg">Page {page} / {totalPages || 1}</span>
        </div>

        <div className="rg-main">
          <div className="rg-grid">
            <div>
              {/* Featured */}
              {featured.length > 0 && (
                <section style={{ marginBottom: 48 }}>
                  <div className="rg-sh">
                    <span className="rg-sh-mark">◆</span>
                    <span className="rg-sh-lbl">Featured Startups</span>
                    <div className="rg-sh-line" />
                  </div>
                  <div className="rg-feat-grid">
                    {featured.map((s, fi) => (
                      <a key={s.id} href={`https://www.upforge.in/startup/${s.slug}`} className="rg-feat-card">
                        <div className="rg-feat-img">
                          {s.logo_url
                            ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                            : <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%", background: "var(--parch-2)" }}>
                                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700, color: "var(--rule)" }}>{s.name.charAt(0)}</span>
                              </div>
                          }
                          <div className="rg-feat-overlay" />
                          <div className="rg-feat-cap">
                            <div className="rg-feat-cat">{s.category ?? "Startup"}</div>
                            <div className="rg-feat-name">{s.name}</div>
                          </div>
                        </div>
                        <div className="rg-feat-body">
                          <p className="rg-feat-desc">{s.description?.slice(0, 100) ?? "Building for tomorrow."}</p>
                          <div className="rg-feat-meta">
                            <div className="rg-feat-chips">
                              {s.founded_year && <span>{s.founded_year}</span>}
                              {s.city && <span>{s.city}</span>}
                            </div>
                            <ArrowUpRight size={12} color="var(--rule)" />
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </section>
              )}

              {/* Grid list */}
              {grid.length > 0 ? (
                <section>
                  {featured.length > 0 && (
                    <div className="rg-sh" style={{ marginBottom: 16 }}>
                      <span className="rg-sh-lbl">All Startups</span>
                      <div className="rg-sh-line" />
                    </div>
                  )}
                  <div className="rg-list">
                    {grid.map((s, idx) => {
                      const rank = baseNum + idx + 1
                      const isTop = rank <= 3
                      return (
                        <a key={s.id} href={`https://www.upforge.in/startup/${s.slug}`} className="rg-card">
                          <div className={`rg-card-stripe${isTop ? " accent" : ""}`} />
                          <div className="rg-card-body">
                            <div className="rg-logo">
                              {s.logo_url
                                ? <Image src={s.logo_url} alt={s.name} width={50} height={50} loading="lazy" style={{ objectFit: "cover", width: "100%", height: "100%" }} />
                                : <span className="rg-logo-init">{s.name.charAt(0)}</span>
                              }
                            </div>
                            <div className="rg-content">
                              <div className="rg-top">
                                <span className="rg-name">{s.name}</span>
                                {s.category && <span className="rg-badge-cat">{s.category}</span>}
                                {s.country_code && <span className="rg-badge-cc">{s.country_code}</span>}
                                <span className="rg-badge-ufrn">
                                  <svg width="8" height="8" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 6L5 9L10 3" /></svg>
                                  UFRN
                                </span>
                              </div>
                              {s.description && <p className="rg-desc">{s.description.slice(0, 130)}</p>}
                              <div className="rg-meta">
                                {s.founders && <div className="rg-meta-item"><Users size={10} /><span>{s.founders}</span></div>}
                                {s.founded_year && <div className="rg-meta-item"><Calendar size={10} /><span>{s.founded_year}</span></div>}
                                {s.city && <div className="rg-meta-item"><MapPin size={10} /><span>{s.city}{s.country_name && s.country_name !== "India" ? `, ${s.country_name}` : ""}</span></div>}
                                {s.ufrn && <span className="rg-ufrn-tag">{s.ufrn}</span>}
                              </div>
                            </div>
                          </div>
                          <div className="rg-card-right">
                            <span className={`rg-rank${isTop ? " top" : ""}`}>{rank < 10 ? `0${rank}` : rank}</span>
                            <div className="rg-arrow"><ArrowUpRight size={13} color="var(--rule)" /></div>
                          </div>
                        </a>
                      )
                    })}
                  </div>
                </section>
              ) : (
                <div className="rg-empty">
                  <span className="rg-empty-icon">🌐</span>
                  <p className="rg-empty-h">No startups found</p>
                  <p className="rg-empty-p">{q ? `Nothing matched "${q}".` : "Try adjusting your filters."}</p>
                  <Link href="/registry" style={{ display: "inline-block", background: "var(--teal)", color: "var(--white)", padding: "11px 24px", fontSize: 10, marginTop: 20, textDecoration: "none", fontFamily: "'DM Mono', monospace", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                    Clear Filters
                  </Link>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <nav className="rg-pag" aria-label="Registry pagination">
                  <Link href={pgHref(page - 1)} className={`rg-pag-btn${page === 1 ? " dis" : ""}`} aria-disabled={page === 1} rel={page > 1 ? "prev" : undefined}>← Prev</Link>
                  {pgNums.map(p => (
                    <Link key={p} href={pgHref(p)} className={`rg-pag-num${p === page ? " on" : ""}`} aria-current={p === page ? "page" : undefined}>{p}</Link>
                  ))}
                  <Link href={pgHref(page + 1)} className={`rg-pag-btn${page === totalPages ? " dis" : ""}`} aria-disabled={page === totalPages} rel={page < totalPages ? "next" : undefined}>Next →</Link>
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <aside className="rg-aside" style={{ position: "sticky", top: 80 }}>
              <div className="rg-aside-box dark">
                <p className="rg-aside-ey">✦ Get Your UFRN</p>
                <p className="rg-aside-h">List Your Startup</p>
                <p className="rg-aside-p">Free, independent verification. Permanent UFRN assigned. Trusted by investors and press worldwide.</p>
                <a href="https://www.upforge.in/submit" className="rg-aside-btn">Submit Free →</a>
              </div>
              <div className="rg-aside-box teal">
                <p className="rg-aside-ey">🔏 What is UFRN?</p>
                <p className="rg-aside-h">Your startup's global ID</p>
                <p className="rg-aside-p">A unique permanent identifier. Format: UF-2026-IND-00001. Share on investor decks, LinkedIn, and press kits.</p>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, fontWeight: 500, color: "var(--gold)", background: "var(--white)", padding: "8px 12px", textAlign: "center", border: "1px solid rgba(184,144,42,0.3)" }}>
                  UF-2026-IND-00001
                </div>
              </div>
              {cats.length > 0 && (
                <div className="rg-aside-box">
                  <p className="rg-aside-ey">📂 By Sector</p>
                  <ul className="rg-aside-list">
                    {cats.slice(0, 8).map(c => (
                      <li key={c}><Link href={`/registry?sector=${encodeURIComponent(c)}`}><span>{c}</span><span style={{ color: "var(--rule)" }}>→</span></Link></li>
                    ))}
                  </ul>
                </div>
              )}
              {countries.length > 0 && (
                <div className="rg-aside-box">
                  <p className="rg-aside-ey">🌍 By Country</p>
                  <ul className="rg-aside-list">
                    {countries.slice(0, 8).map(ct => (
                      <li key={ct.code}><Link href={`/registry?country=${encodeURIComponent(ct.code)}`}><span>{ct.name}</span><span style={{ fontFamily: "'DM Mono', monospace", fontSize: 9, color: "var(--teal)" }}>{ct.code}</span></Link></li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>

          {/* CTA */}
          <div className="rg-cta">
            <div>
              <p className="rg-cta-ey">🌍 UpForge Global Registry</p>
              <p className="rg-cta-h">Your founder story starts with a verified profile.</p>
              <p className="rg-cta-p">Get your UFRN. Free forever. Trusted by investors and press worldwide.</p>
            </div>
            <a href="https://www.upforge.in/submit" className="rg-cta-btn">
              List Free — Get UFRN <ArrowRight size={13} />
            </a>
          </div>

          {/* Footer links */}
          <div className="rg-links">
            {[
              { l: "Global Registry", h: "/registry", d: "Full verified database" },
              { l: "Founder Chronicle", h: "https://www.upforge.in/", d: "Indian startup stories" },
              { l: "The Forge Blog", h: "https://www.upforge.in/blog", d: "Startup intelligence" },
              { l: "Submit Your Startup", h: "https://www.upforge.in/submit", d: "Get listed + UFRN free" },
            ].map((lnk, i) => (
              <a key={i} href={lnk.h} className="rg-link-card">
                <div className="rg-link-title">{lnk.l} <ArrowUpRight size={9} /></div>
                <div className="rg-link-desc">{lnk.d}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="sr-only">
        <h2>Global Startup Registry — Verified UFRN Database</h2>
        <p>Browse {total.toLocaleString()}+ verified startups from India, Southeast Asia, Africa, Latin America, Middle East, Europe, and North America. Every startup gets a permanent UFRN (UpForge Registry Number) upon approval.</p>
        <nav aria-label="Startup sectors">
          <ul>{cats.map(c => <li key={c}><a href={`/registry?sector=${encodeURIComponent(c)}`}>{c} Startups — Global Registry</a></li>)}</ul>
        </nav>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var btn = document.getElementById('filter-toggle-btn');
          var panel = document.getElementById('filter-panel');
          var chevron = document.getElementById('filter-chevron');
          var hasActive = ${activeFilterCount > 0 ? "true" : "false"};
          if (btn && panel) {
            if (hasActive) { panel.classList.add('open'); btn.classList.add('on'); btn.setAttribute('aria-expanded', 'true'); }
            btn.addEventListener('click', function() {
              var isOpen = panel.classList.toggle('open');
              btn.classList.toggle('on', isOpen);
              btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
              if (chevron) chevron.style.transform = isOpen ? 'rotate(180deg)' : '';
            });
          }
          function buildUrl(p) {
            var u = new URLSearchParams();
            if (p.q) u.set('q', p.q);
            if (p.year) u.set('year', p.year);
            if (p.sector) u.set('sector', p.sector);
            if (p.country) u.set('country', p.country);
            if (p.sort && p.sort !== 'name') u.set('sort', p.sort);
            var s = u.toString();
            return '/registry' + (s ? '?' + s : '');
          }
          function getCurrent() {
            var u = new URLSearchParams(window.location.search);
            return { q: u.get('q')||'', year: u.get('year')||'', sector: u.get('sector')||'', country: u.get('country')||'', sort: u.get('sort')||'name' };
          }
          var ySel = document.getElementById('rg-year-sel');
          var cSel = document.getElementById('rg-cat-sel');
          var ctSel = document.getElementById('rg-country-sel');
          if (ySel) ySel.addEventListener('change', function() { var c=getCurrent(); c.year=this.value; window.location.href=buildUrl(c); });
          if (cSel) cSel.addEventListener('change', function() { var c=getCurrent(); c.sector=this.value; window.location.href=buildUrl(c); });
          if (ctSel) ctSel.addEventListener('change', function() { var c=getCurrent(); c.country=this.value; window.location.href=buildUrl(c); });
          var sf = document.getElementById('search-form');
          if (sf) sf.addEventListener('submit', function(e) { e.preventDefault(); var c=getCurrent(); c.q=this.querySelector('input[name="q"]').value; window.location.href=buildUrl(c); });
        })();
      `}} />
    </>
  )
}
