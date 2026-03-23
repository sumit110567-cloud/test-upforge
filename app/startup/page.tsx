// app/startup/page.tsx — REDESIGN v12
// Indian Startup Registry — Premium Newspaper/Magazine Aesthetic
// Centered Layout, India Map Integration, Fixed Header/Collapse
// Authentic Indian Design with Saffron-Gold Palette

import { createReadClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ArrowUpRight, ChevronRight, Award, Building2, MapPin, Calendar, Users, Verified, Globe, TrendingUp, Star, Eye } from "lucide-react"

const PAGE_SIZE = 10

interface StartupRow {
  id: string; name: string; slug: string
  description?: string | null; logo_url?: string | null
  founders?: string | null; founded_year?: number | null
  category?: string | null; city?: string | null
  is_featured?: boolean; ufrn?: string | null
}
interface PageProps {
  searchParams?: Promise<{ page?: string; q?: string; year?: string; sort?: string; category?: string }>
}

async function getData(q: string, year: string, sort: string, cat: string, page: number) {
  const sb = createReadClient()
  const from = (page - 1) * PAGE_SIZE
  let query = sb.from("startups")
    .select("id,name,slug,description,logo_url,founders,founded_year,category,city,is_featured,ufrn", { count: "exact" })
    .eq("status", "approved")
  if (q)    query = query.or(`name.ilike.%${q}%,description.ilike.%${q}%,founders.ilike.%${q}%,category.ilike.%${q}%,city.ilike.%${q}%`)
  if (year) query = query.eq("founded_year", Number(year))
  if (cat)  query = query.eq("category", cat)
  const col = sort === "year" ? "founded_year" : sort === "newest" ? "created_at" : "name"
  const { data, count, error } = await query
    .order(col, { ascending: sort !== "newest" })
    .range(from, from + PAGE_SIZE - 1)
  if (error) console.error("[registry]", error.message)
  return { startups: (data ?? []) as StartupRow[], total: count ?? 0 }
}

async function getFilters() {
  const sb = createReadClient()
  const [{ data: yd }, { data: cd }] = await Promise.all([
    sb.from("startups").select("founded_year").eq("status","approved").not("founded_year","is",null).gte("founded_year",2010).order("founded_year",{ascending:false}),
    sb.from("startups").select("category").eq("status","approved").not("category","is",null),
  ])
  return {
    years: [...new Set((yd ?? []).map(r => r.founded_year as number))].filter(Boolean),
    cats:  [...new Set((cd ?? []).map(r => r.category as string))].filter(Boolean).sort(),
  }
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const sp = await searchParams
  const { total } = await getData("","","name","",1)
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  const isFiltered = !!(sp?.q || sp?.year || sp?.sort || sp?.category)
  const page = Number(sp?.page ?? 1)
  return {
    title: `Indian Startup Registry 2026 — ${n}+ Verified Startups | UpForge`,
    description: `India's definitive startup registry. ${n}+ verified companies across AI, FinTech, SaaS, and more. Search by name, founder, city, or sector. Updated daily.`,
    keywords: "Indian startups 2026, startup registry India, verified startups, AI startups India, fintech startups India, SaaS startups India, edtech startups, healthtech India, startup founders India, Bengaluru startups, Mumbai startups, Delhi NCR startups, Indian unicorns 2026",
    alternates: { canonical: "https://www.upforge.in/startup" },
    openGraph: {
      title: `Indian Startup Registry 2026 — ${n}+ Verified | UpForge`,
      description: `India's definitive startup database. ${n}+ verified companies. Free, structured, updated daily.`,
      url: "https://www.upforge.in/startup", siteName: "UpForge",
      images: [{ url: "https://www.upforge.in/og/registry.png", width: 1200, height: 630 }],
      locale: "en_IN", type: "website",
    },
    robots: {
      index: !isFiltered && page <= 1,
      follow: true,
    },
  }
}
export const revalidate = 300

export default async function StartupPage({ searchParams }: PageProps) {
  const sp   = await searchParams
  const q    = sp?.q?.trim()        ?? ""
  const year = sp?.year?.trim()     ?? ""
  const sort = sp?.sort?.trim()     ?? "name"
  const cat  = sp?.category?.trim() ?? ""
  const page = Math.max(1, Number(sp?.page ?? 1))

  const [{ startups, total }, { years, cats }] = await Promise.all([
    getData(q, year, sort, cat, page),
    getFilters(),
  ])
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE))
  const isFiltered = !!(q || year || cat || (sort && sort !== "name"))

  const qs = (ov: Record<string, string | undefined>) => {
    const base: Record<string, string | undefined> = {
      q:        q    || undefined,
      year:     year || undefined,
      sort:     sort !== "name" ? sort : undefined,
      category: cat  || undefined,
      page:     page > 1 ? String(page) : undefined,
    }
    const m = { ...base, ...ov }
    const p = new URLSearchParams()
    Object.entries(m).forEach(([k, v]) => { if (v) p.set(k, v) })
    const s = p.toString()
    return `/startup${s ? `?${s}` : ""}`
  }
  const pgHref = (p: number) => qs({ page: p === 1 ? undefined : String(p) })

  const winSize  = Math.min(5, totalPages)
  const winStart = page <= 3 || totalPages <= 5 ? 1 : page >= totalPages - 2 ? totalPages - 4 : page - 2
  const pgNums   = Array.from({ length: winSize }, (_, i) => winStart + i)

  const featured = page === 1 && !isFiltered ? startups.filter(s => s.is_featured).slice(0, 3) : []
  const featIds  = new Set(featured.map(s => s.id))
  const grid     = page === 1 && !isFiltered ? startups.filter(s => !featIds.has(s.id)) : startups
  const baseNum  = (page - 1) * PAGE_SIZE

  const schemas = [
    { "@context":"https://schema.org","@type":"WebSite","name":"UpForge","url":"https://www.upforge.in",
      "potentialAction":{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://www.upforge.in/startup?q={search_term_string}"},"query-input":"required name=search_term_string"} },
    { "@context":"https://schema.org","@type":"CollectionPage","@id":"https://www.upforge.in/startup#cp",
      "name":"Indian Startup Registry 2026","url":"https://www.upforge.in/startup",
      "description":`India's independent registry of ${total.toLocaleString()}+ verified startups across 30+ sectors.`,
      "numberOfItems":total,"inLanguage":"en-IN" },
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&family=Inter:opsz,wght@14..32,300;14..32,400;14..32,500;14..32,600;14..32,700&display=swap');

        :root {
          --paper: #FDF8F0;
          --paper-dark: #F5EFE2;
          --ink: #2C2418;
          --ink-light: #5C5242;
          --saffron: #E67E22;
          --saffron-dark: #B85C1A;
          --saffron-light: #F5A65B;
          --green: #138808;
          --green-dark: #0A6605;
          --gold: #D4AF37;
          --border-color: #E8E0D0;
          --shadow-sm: 0 2px 4px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.03);
          --shadow-md: 0 4px 12px rgba(0,0,0,0.03), 0 2px 4px rgba(0,0,0,0.05);
          --shadow-lg: 0 8px 24px rgba(0,0,0,0.05), 0 4px 8px rgba(0,0,0,0.05);
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          background: var(--paper);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          color: var(--ink);
          line-height: 1.5;
        }

        /* Newspaper-style serif for headings */
        .serif {
          font-family: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 32px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 20px;
          }
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(15px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade {
          animation: fadeIn 0.5s ease forwards;
        }

        .delay-1 { animation-delay: 0.05s; opacity: 0; animation-fill-mode: forwards; }
        .delay-2 { animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards; }
        .delay-3 { animation-delay: 0.15s; opacity: 0; animation-fill-mode: forwards; }
        .delay-4 { animation-delay: 0.2s; opacity: 0; animation-fill-mode: forwards; }
        .delay-5 { animation-delay: 0.25s; opacity: 0; animation-fill-mode: forwards; }

        /* Tricolor Header - India's Pride */
        .tricolor-bar {
          height: 6px;
          display: flex;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
        }
        .saffron-strip { flex: 1; background: #FF9933; }
        .white-strip { flex: 1; background: #FFFFFF; }
        .green-strip { flex: 1; background: #138808; }

        /* Header/Masthead - Newspaper Style */
        .masthead {
          background: var(--paper);
          border-bottom: 2px solid var(--border-color);
          position: sticky;
          top: 0;
          z-index: 100;
          box-shadow: var(--shadow-sm);
        }

        .masthead-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          flex-wrap: wrap;
          gap: 16px;
        }

        .date-badge {
          font-family: 'Inter', monospace;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--ink-light);
          border-left: 2px solid var(--saffron);
          padding-left: 12px;
        }

        .masthead-logo {
          text-align: center;
          flex: 1;
        }

        .masthead-logo h1 {
          font-size: clamp(1.5rem, 4vw, 2.2rem);
          font-weight: 700;
          letter-spacing: -0.5px;
          color: var(--ink);
        }

        .masthead-logo .edition {
          font-size: 0.65rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--saffron);
          margin-top: 4px;
        }

        .stats-badge {
          display: flex;
          gap: 16px;
        }

        .stat-mini {
          text-align: right;
          font-size: 0.7rem;
          line-height: 1.3;
        }

        .stat-mini strong {
          font-size: 0.9rem;
          color: var(--saffron);
        }

        /* Hero Section with India Map */
        .hero {
          position: relative;
          background: linear-gradient(135deg, var(--paper) 0%, var(--paper-dark) 100%);
          border-bottom: 1px solid var(--border-color);
          overflow: hidden;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          padding: 48px 0;
        }

        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 32px;
            text-align: center;
          }
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(230, 126, 34, 0.1);
          padding: 6px 16px;
          border-radius: 40px;
          margin-bottom: 24px;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--saffron-dark);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 20px;
        }

        .hero-title .highlight {
          color: var(--saffron);
          position: relative;
          display: inline-block;
        }

        .hero-title .highlight::after {
          content: '';
          position: absolute;
          bottom: 8px;
          left: 0;
          right: 0;
          height: 8px;
          background: rgba(230, 126, 34, 0.2);
          z-index: -1;
        }

        .hero-description {
          font-size: 1rem;
          color: var(--ink-light);
          line-height: 1.6;
          margin-bottom: 32px;
          max-width: 500px;
        }

        @media (max-width: 900px) {
          .hero-description {
            margin-left: auto;
            margin-right: auto;
          }
        }

        /* India Map Container - Newspaper Style */
        .india-map-container {
          position: relative;
          background: var(--paper-dark);
          border-radius: 16px;
          padding: 24px;
          box-shadow: var(--shadow-md);
          border: 1px solid var(--border-color);
        }

        .map-caption {
          text-align: center;
          margin-top: 16px;
          font-size: 0.7rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--ink-light);
        }

        .map-svg-wrapper {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .map-svg-wrapper svg {
          width: 100%;
          max-width: 380px;
          height: auto;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.05));
        }

        .map-svg-wrapper svg path {
          fill: #E8DFD0;
          stroke: var(--saffron);
          stroke-width: 1.2;
          transition: fill 0.2s ease;
        }

        .map-svg-wrapper svg path:hover {
          fill: var(--saffron-light);
          cursor: pointer;
        }

        .ashoka-mark {
          position: absolute;
          bottom: -10px;
          right: -10px;
          width: 50px;
          height: 50px;
          opacity: 0.15;
          pointer-events: none;
        }

        /* Stats Grid - Newspaper Style */
        .stats-newspaper {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1px;
          background: var(--border-color);
          margin-top: 32px;
          border-radius: 12px;
          overflow: hidden;
        }

        @media (max-width: 680px) {
          .stats-newspaper {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .stat-newspaper-item {
          background: var(--paper);
          padding: 24px 16px;
          text-align: center;
          transition: all 0.2s ease;
        }

        .stat-newspaper-item:hover {
          background: #FFFBF5;
        }

        .stat-number {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 800;
          color: var(--saffron);
          margin-bottom: 8px;
        }

        .stat-label-newspaper {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--ink-light);
        }

        /* Sector Tabs - Magazine Style */
        .sector-strip {
          background: var(--paper);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 72px;
          z-index: 90;
        }

        .sector-tabs-scroll {
          display: flex;
          overflow-x: auto;
          gap: 4px;
          padding: 12px 0;
          scrollbar-width: thin;
        }

        .sector-tabs-scroll::-webkit-scrollbar {
          height: 3px;
        }

        .sector-tab-new {
          flex-shrink: 0;
          padding: 8px 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--ink-light);
          background: transparent;
          border-radius: 40px;
          text-decoration: none;
          transition: all 0.2s;
          white-space: nowrap;
        }

        .sector-tab-new:hover {
          color: var(--saffron);
          background: rgba(230, 126, 34, 0.05);
        }

        .sector-tab-new.active {
          background: var(--saffron);
          color: white;
        }

        /* Toolbar - Clean & Functional */
        .toolbar-new {
          background: var(--paper);
          border-bottom: 1px solid var(--border-color);
          position: sticky;
          top: 113px;
          z-index: 85;
          padding: 12px 0;
        }

        .toolbar-grid {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 16px;
        }

        .search-wrapper {
          flex: 2;
          min-width: 240px;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 48px;
          padding: 4px 4px 4px 20px;
          transition: all 0.2s;
        }

        .search-wrapper:focus-within {
          border-color: var(--saffron);
          box-shadow: 0 0 0 3px rgba(230, 126, 34, 0.1);
        }

        .search-input-new {
          flex: 1;
          background: transparent;
          border: none;
          padding: 10px 0;
          font-size: 0.85rem;
          outline: none;
          font-family: 'Inter', sans-serif;
        }

        .search-btn {
          background: var(--saffron);
          border: none;
          padding: 8px 24px;
          border-radius: 40px;
          color: white;
          font-weight: 600;
          font-size: 0.75rem;
          cursor: pointer;
          transition: background 0.2s;
        }

        .search-btn:hover {
          background: var(--saffron-dark);
        }

        .filter-group-new {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .filter-select-new {
          padding: 8px 16px;
          border: 1px solid var(--border-color);
          border-radius: 40px;
          background: white;
          font-size: 0.75rem;
          font-weight: 500;
          color: var(--ink);
          cursor: pointer;
          outline: none;
        }

        .sort-link-new {
          padding: 8px 16px;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          text-decoration: none;
          color: var(--ink-light);
          border-radius: 40px;
          transition: all 0.2s;
        }

        .sort-link-new.active {
          background: var(--ink);
          color: white;
        }

        .clear-link-new {
          padding: 8px 16px;
          font-size: 0.7rem;
          color: var(--saffron);
          text-decoration: none;
          font-weight: 600;
        }

        /* Results Header */
        .results-header-new {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          padding: 24px 0 16px;
          border-bottom: 1px solid var(--border-color);
          margin-bottom: 24px;
        }

        /* Featured Cards - Magazine Style */
        .featured-section {
          margin-bottom: 48px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .section-title-line {
          flex: 1;
          height: 1px;
          background: var(--border-color);
        }

        .featured-grid-new {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
        }

        .featured-card-new {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
        }

        .featured-card-new:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
          border-color: var(--saffron-light);
        }

        .featured-img {
          height: 180px;
          background: linear-gradient(135deg, #F5EFE2, #EDE5D8);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .featured-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .featured-tag {
          position: absolute;
          top: 12px;
          left: 12px;
          background: var(--saffron);
          color: white;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.65rem;
          font-weight: 600;
          text-transform: uppercase;
        }

        .featured-content-new {
          padding: 20px;
        }

        .featured-category-new {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          color: var(--saffron);
          letter-spacing: 0.5px;
          margin-bottom: 8px;
        }

        .featured-name-new {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .featured-desc-new {
          font-size: 0.8rem;
          color: var(--ink-light);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .featured-meta-new {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-top: 1px solid var(--border-color);
          padding-top: 12px;
          font-size: 0.7rem;
          color: var(--ink-light);
        }

        /* Startup List - Newspaper Directory Style */
        .startup-list-new {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .startup-item-new {
          display: grid;
          grid-template-columns: 48px 1fr auto;
          background: white;
          border: 1px solid var(--border-color);
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
          overflow: hidden;
        }

        .startup-item-new:hover {
          transform: translateX(4px);
          border-color: var(--saffron);
          box-shadow: var(--shadow-md);
        }

        .startup-number-new {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding-top: 20px;
          font-family: 'Cormorant Garamond', serif;
          font-weight: 700;
          font-size: 0.85rem;
          color: var(--ink-light);
          background: #FAF7F2;
        }

        .startup-body-new {
          padding: 16px 20px 16px 0;
        }

        .startup-header-new {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .startup-logo-new {
          width: 44px;
          height: 44px;
          background: var(--paper-dark);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-color);
          overflow: hidden;
          flex-shrink: 0;
        }

        .startup-info-new {
          flex: 1;
        }

        .startup-name-new {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
        }

        .verified-tag {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          background: #E8F5E9;
          padding: 2px 8px;
          border-radius: 20px;
          font-size: 0.6rem;
          font-weight: 600;
          color: var(--green);
        }

        .startup-category-new {
          font-size: 0.7rem;
          color: var(--saffron);
          font-weight: 500;
          text-transform: uppercase;
        }

        .startup-desc-new {
          font-size: 0.8rem;
          color: var(--ink-light);
          margin: 8px 0;
          line-height: 1.5;
        }

        .startup-meta-new {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 0.7rem;
          color: var(--ink-light);
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .ufrn-badge {
          background: var(--paper-dark);
          padding: 2px 8px;
          border-radius: 4px;
          font-family: monospace;
          font-size: 0.65rem;
        }

        .startup-arrow-new {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 24px;
          color: var(--ink-light);
        }

        /* Sidebar */
        .sidebar-sticky {
          position: sticky;
          top: 130px;
        }

        .sidebar-card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          border: 1px solid var(--border-color);
        }

        .sidebar-card.dark {
          background: var(--ink);
          border: none;
        }

        .sidebar-title {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--saffron);
          margin-bottom: 16px;
        }

        .sidebar-card.dark .sidebar-title {
          color: var(--gold);
        }

        .sidebar-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.2rem;
          font-weight: 700;
          margin-bottom: 12px;
        }

        .sidebar-text {
          font-size: 0.8rem;
          color: var(--ink-light);
          margin-bottom: 20px;
          line-height: 1.5;
        }

        .sidebar-card.dark .sidebar-text {
          color: rgba(255,255,255,0.7);
        }

        .sidebar-btn {
          display: block;
          background: var(--saffron);
          color: white;
          text-align: center;
          padding: 10px;
          border-radius: 40px;
          text-decoration: none;
          font-size: 0.75rem;
          font-weight: 600;
          transition: background 0.2s;
        }

        .sidebar-btn:hover {
          background: var(--saffron-dark);
        }

        .sector-list-new {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .sector-list-new li {
          border-bottom: 1px solid var(--border-color);
        }

        .sector-list-new li:last-child {
          border-bottom: none;
        }

        .sector-list-new a {
          display: flex;
          justify-content: space-between;
          padding: 12px 0;
          text-decoration: none;
          color: var(--ink);
          font-size: 0.8rem;
          transition: color 0.2s;
        }

        .sector-list-new a:hover {
          color: var(--saffron);
        }

        /* CTA Section */
        .cta-newspaper {
          background: var(--ink);
          border-radius: 16px;
          padding: 48px;
          margin: 48px 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 24px;
        }

        .cta-title-new {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: white;
          margin-bottom: 8px;
        }

        .cta-text-new {
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
        }

        .cta-btn-new {
          background: var(--saffron);
          color: white;
          padding: 14px 32px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: background 0.2s;
        }

        .cta-btn-new:hover {
          background: var(--saffron-dark);
        }

        /* Pagination */
        .pagination-new {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 48px;
          padding-top: 32px;
          border-top: 1px solid var(--border-color);
        }

        .page-link-new {
          padding: 10px 18px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--ink);
          font-weight: 500;
          transition: all 0.2s;
          border: 1px solid var(--border-color);
          background: white;
        }

        .page-link-new:hover {
          border-color: var(--saffron);
          color: var(--saffron);
        }

        .page-link-new.active {
          background: var(--saffron);
          color: white;
          border-color: var(--saffron);
        }

        .page-link-new.disabled {
          opacity: 0.5;
          pointer-events: none;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .toolbar-grid {
            flex-direction: column;
            align-items: stretch;
          }
          
          .startup-item-new {
            grid-template-columns: 1fr auto;
          }
          
          .startup-number-new {
            display: none;
          }
          
          .startup-body-new {
            padding: 16px;
          }
          
          .cta-newspaper {
            padding: 32px;
            flex-direction: column;
            text-align: center;
          }
          
          .sidebar-sticky {
            position: static;
            margin-top: 32px;
          }
        }

        @media (max-width: 1024px) {
          .stats-newspaper {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      {/* Fixed Tricolor Bar */}
      <div className="tricolor-bar">
        <div className="saffron-strip"></div>
        <div className="white-strip"></div>
        <div className="green-strip"></div>
      </div>

      <Navbar />

      {/* Newspaper Style Masthead */}
      <div className="masthead">
        <div className="container">
          <div className="masthead-content">
            <div className="date-badge">
              {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
            </div>
            <div className="masthead-logo">
              <h1 className="serif">THE UPFORGE REGISTRY</h1>
              <div className="edition">INDIA EDITION • VOL. III • 2026</div>
            </div>
            <div className="stats-badge">
              <div className="stat-mini">
                <strong>{total.toLocaleString()}+</strong><br />
                Startups
              </div>
              <div className="stat-mini">
                <strong>30+</strong><br />
                Sectors
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with India Map */}
      <div className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content animate-fade">
              <div className="hero-badge">
                <Star size={14} />
                <span>INDIA'S MOST TRUSTED DIRECTORY</span>
              </div>
              <h1 className="hero-title serif">
                The Definitive <span className="highlight">Indian Startup</span><br />
                Registry 2026
              </h1>
              <p className="hero-description">
                Discover, verify, and connect with {total.toLocaleString()}+ innovative Indian startups. 
                The most comprehensive, independent database of India's entrepreneurial ecosystem.
              </p>
              <div className="stats-newspaper">
                <div className="stat-newspaper-item">
                  <div className="stat-number">{total.toLocaleString()}+</div>
                  <div className="stat-label-newspaper">Verified Startups</div>
                </div>
                <div className="stat-newspaper-item">
                  <div className="stat-number">126+</div>
                  <div className="stat-label-newspaper">Indian Unicorns</div>
                </div>
                <div className="stat-newspaper-item">
                  <div className="stat-number">$9.2B</div>
                  <div className="stat-label-newspaper">Q1 2026 Funding</div>
                </div>
                <div className="stat-newspaper-item">
                  <div className="stat-number">3rd</div>
                  <div className="stat-label-newspaper">Global Ecosystem</div>
                </div>
                <div className="stat-newspaper-item">
                  <div className="stat-number">30+</div>
                  <div className="stat-label-newspaper">Sectors Covered</div>
                </div>
              </div>
            </div>
            <div className="india-map-container animate-fade delay-2">
              <div className="map-svg-wrapper">
                <img 
                  src="https://simplemaps.com/static/svg/country/in/admin1/in.svg"
                  alt="Map of India showing states and union territories"
                  style={{ width: '100%', maxWidth: '380px', height: 'auto' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <svg viewBox="0 0 400 400" style="width:100%; max-width:380px; height:auto;">
                        <path fill="#E8DFD0" stroke="#E67E22" stroke-width="1.5" d="M200,50 L350,150 L300,300 L150,350 L50,250 L80,120 Z" />
                        <circle cx="200" cy="200" r="80" fill="none" stroke="#E67E22" stroke-width="1.5" stroke-dasharray="4"/>
                        <text x="200" y="210" text-anchor="middle" fill="#E67E22" font-size="12">INDIA</text>
                      </svg>
                    `;
                  }}
                />
                <div className="ashoka-mark">
                  <svg viewBox="0 0 100 100" fill="none">
                    <circle cx="50" cy="50" r="45" stroke="#D4AF37" strokeWidth="2" fill="none"/>
                    <circle cx="50" cy="50" r="12" fill="#D4AF37"/>
                    {Array.from({length: 24}, (_, i) => {
                      const angle = (i * 15) * Math.PI / 180;
                      const x1 = 50 + 18 * Math.cos(angle);
                      const y1 = 50 + 18 * Math.sin(angle);
                      const x2 = 50 + 38 * Math.cos(angle);
                      const y2 = 50 + 38 * Math.sin(angle);
                      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="1.5"/>;
                    })}
                  </svg>
                </div>
              </div>
              <div className="map-caption">
                🇮🇳 28 States • 8 Union Territories • One Unified Ecosystem
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sector Tabs - Sticky */}
      <div className="sector-strip">
        <div className="container">
          <div className="sector-tabs-scroll">
            <Link href="/startup" className={`sector-tab-new ${!cat ? 'active' : ''}`}>All Startups</Link>
            {cats.slice(0, 14).map(c => (
              <Link key={c} href={`/startup?category=${encodeURIComponent(c)}`} className={`sector-tab-new ${cat === c ? 'active' : ''}`}>{c}</Link>
            ))}
            {cats.length > 14 && (
              <Link href="/startups" className="sector-tab-new">+{cats.length - 14} More</Link>
            )}
          </div>
        </div>
      </div>

      {/* Toolbar - Sticky */}
      <div className="toolbar-new">
        <div className="container">
          <div className="toolbar-grid">
            <form action="/startup" method="GET" className="search-wrapper">
              {year && <input type="hidden" name="year" value={year} />}
              {cat && <input type="hidden" name="category" value={cat} />}
              {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} />}
              <input type="search" name="q" defaultValue={q} placeholder="Search startups, founders, sectors, cities..." className="search-input-new" />
              <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="filter-group-new">
              <select className="filter-select-new" id="year-select" defaultValue={year}>
                <option value="">All Years</option>
                {years.map(yr => <option key={yr} value={yr}>{yr}</option>)}
              </select>
              <select className="filter-select-new" id="category-select" defaultValue={cat}>
                <option value="">All Sectors</option>
                {cats.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
              <Link href={qs({ sort: "name", page: undefined })} className={`sort-link-new ${sort === "name" ? "active" : ""}`}>A-Z</Link>
              <Link href={qs({ sort: "newest", page: undefined })} className={`sort-link-new ${sort === "newest" ? "active" : ""}`}>Newest</Link>
              <Link href={qs({ sort: "year", page: undefined })} className={`sort-link-new ${sort === "year" ? "active" : ""}`}>Founded</Link>
              {isFiltered && <Link href="/startup" className="clear-link-new">Clear all</Link>}
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="results-header-new">
          <div>
            <span style={{ fontWeight: 600 }}>
              {q ? `"${q}"` : cat ? cat : year ? `Est. ${year}` : "All Startups"}
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--ink-light)', marginLeft: '12px' }}>
              {total.toLocaleString()} results
            </span>
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--ink-light)' }}>
            Page {page} of {totalPages || 1}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '48px' }}>
          <div>
            {/* Featured Startups */}
            {featured.length > 0 && (
              <div className="featured-section">
                <div className="section-title">
                  <span>⭐ Featured This Edition</span>
                  <div className="section-title-line"></div>
                </div>
                <div className="featured-grid-new">
                  {featured.map((s, idx) => (
                    <Link key={s.id} href={`/startup/${s.slug}`} className="featured-card-new">
                      <div className="featured-img">
                        {s.logo_url ? (
                          <Image src={s.logo_url} alt={s.name} width={400} height={180} style={{ objectFit: 'cover' }} />
                        ) : (
                          <span style={{ fontSize: '3rem', fontWeight: 700, color: 'var(--saffron)' }}>{s.name.charAt(0)}</span>
                        )}
                        <span className="featured-tag">Featured</span>
                      </div>
                      <div className="featured-content-new">
                        <div className="featured-category-new">{s.category || "Startup"}</div>
                        <div className="featured-name-new">{s.name}</div>
                        <p className="featured-desc-new">{s.description || "Building India's future with innovation and determination."}</p>
                        <div className="featured-meta-new">
                          <span>{s.founded_year ? `Est. ${s.founded_year}` : ''}</span>
                          {s.city && <span>{s.city}</span>}
                          {s.ufrn && <span className="ufrn-badge">{s.ufrn}</span>}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Startup List */}
            {grid.length > 0 ? (
              <div>
                {featured.length > 0 && (
                  <div className="section-title" style={{ marginTop: '24px' }}>
                    <span>📋 All Startups</span>
                    <div className="section-title-line"></div>
                  </div>
                )}
                <div className="startup-list-new">
                  {grid.map((s, idx) => (
                    <Link key={s.id} href={`/startup/${s.slug}`} className="startup-item-new">
                      <div className="startup-number-new">
                        {String(baseNum + idx + 1).padStart(2, '0')}
                      </div>
                      <div className="startup-body-new">
                        <div className="startup-header-new">
                          <div className="startup-logo-new">
                            {s.logo_url ? (
                              <Image src={s.logo_url} alt={s.name} width={44} height={44} style={{ objectFit: 'contain' }} />
                            ) : (
                              <span style={{ fontWeight: 700, fontSize: '1rem' }}>{s.name.charAt(0)}</span>
                            )}
                          </div>
                          <div className="startup-info-new">
                            <div className="startup-name-new">
                              {s.name}
                              <span className="verified-tag">
                                <Verified size={10} /> Verified
                              </span>
                            </div>
                            <div className="startup-category-new">{s.category || "Startup"}</div>
                          </div>
                        </div>
                        {s.description && <p className="startup-desc-new">{s.description}</p>}
                        <div className="startup-meta-new">
                          {s.founders && (
                            <span className="meta-item">
                              <Users size={12} /> {s.founders}
                            </span>
                          )}
                          {s.founded_year && (
                            <span className="meta-item">
                              <Calendar size={12} /> Est. {s.founded_year}
                            </span>
                          )}
                          {s.city && (
                            <span className="meta-item">
                              <MapPin size={12} /> {s.city}
                            </span>
                          )}
                          {s.ufrn && <span className="ufrn-badge">{s.ufrn}</span>}
                        </div>
                      </div>
                      <div className="startup-arrow-new">
                        <ArrowUpRight size={18} />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '80px 20px', background: 'white', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <span style={{ fontSize: '3rem', display: 'block', marginBottom: '16px' }}>🔍</span>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>No startups found</h3>
                <p style={{ color: 'var(--ink-light)', marginBottom: '24px' }}>
                  {q ? `No results for "${q}". Try a different search term.` : 'Try adjusting your filters.'}
                </p>
                <Link href="/startup" style={{ background: 'var(--saffron)', color: 'white', padding: '10px 24px', borderRadius: '40px', textDecoration: 'none', fontWeight: 600 }}>
                  Clear Filters
                </Link>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-new">
                <Link href={pgHref(page - 1)} className={`page-link-new ${page === 1 ? 'disabled' : ''}`}>← Prev</Link>
                {pgNums.map(p => (
                  <Link key={p} href={pgHref(p)} className={`page-link-new ${p === page ? 'active' : ''}`}>{p}</Link>
                ))}
                <Link href={pgHref(page + 1)} className={`page-link-new ${page === totalPages ? 'disabled' : ''}`}>Next →</Link>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="sidebar-sticky">
            {/* Submit CTA */}
            <div className="sidebar-card dark">
              <div className="sidebar-title">Get Listed</div>
              <div className="sidebar-heading">Add Your Startup</div>
              <p className="sidebar-text">Join India's most trusted startup registry. Free, permanent listing with your unique UFRN.</p>
              <Link href="/submit" className="sidebar-btn">Submit Your Startup →</Link>
            </div>

            {/* Top Sectors */}
            <div className="sidebar-card">
              <div className="sidebar-title">Browse by Sector</div>
              <ul className="sector-list-new">
                {cats.slice(0, 8).map(c => (
                  <li key={c}>
                    <Link href={`/startup?category=${encodeURIComponent(c)}`}>
                      <span>{c}</span>
                      <span>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* India Ecosystem Stats */}
            <div className="sidebar-card dark">
              <div className="sidebar-title">India's Ecosystem 2026</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Total Funding (YTD)</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>$12.4B</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>New Unicorns 2026</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>18</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Active Investors</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>2,300+</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.6)' }}>Jobs Created</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--gold)' }}>1.2M+</span>
                </div>
              </div>
            </div>

            {/* From The Forge */}
            <div className="sidebar-card">
              <div className="sidebar-title">From The Forge</div>
              <ul className="sector-list-new">
                <li><Link href="/blog/top-ai-startups-india-2026">Top AI Startups India 2026 →</Link></li>
                <li><Link href="/blog/how-to-get-startup-funding-india-2026">Startup Funding Guide 2026 →</Link></li>
                <li><Link href="/blog/top-indian-unicorns-2026">All 126+ Indian Unicorns →</Link></li>
                <li><Link href="/blog/how-to-start-startup-india-2026">How to Start a Startup in India →</Link></li>
              </ul>
            </div>
          </aside>
        </div>

        {/* CTA Section */}
        <div className="cta-newspaper">
          <div>
            <div className="cta-title-new">Ready to list your startup?</div>
            <div className="cta-text-new">Join 5,000+ founders who trust UpForge for visibility and credibility.</div>
          </div>
          <Link href="/submit" className="cta-btn-new">
            Get Listed Now <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      {/* JavaScript for filters */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          const yearSelect = document.getElementById('year-select');
          const categorySelect = document.getElementById('category-select');
          
          function updateUrl(param, value) {
            const params = new URLSearchParams(window.location.search);
            if (value && value !== '') {
              params.set(param, value);
            } else {
              params.delete(param);
            }
            params.delete('page');
            const newUrl = '/startup' + (params.toString() ? '?' + params.toString() : '');
            window.location.href = newUrl;
          }
          
          if (yearSelect) {
            yearSelect.addEventListener('change', (e) => updateUrl('year', e.target.value));
          }
          if (categorySelect) {
            categorySelect.addEventListener('change', (e) => updateUrl('category', e.target.value));
          }
        })();
      `}} />
    </>
  )
}
