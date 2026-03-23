// app/startup/page.tsx — FINAL VERSION
// Indian Startup Registry — Hero background, compact cards, mobile optimized
// Reference: app/page.tsx for spacing and typography standards

import { createReadClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

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
    title: `Indian Startup Registry 2026 — ${n}+ Verified Indian Startups | UpForge`,
    description: `Discover ${n}+ verified Indian startups across AI, FinTech, SaaS, EdTech, HealthTech, Climate Tech, AgriTech, Web3 and 30+ sectors. Search by founder, city, year. India's most trusted free startup database — updated daily.`,
    keywords: "Indian startups 2026, startup registry India, verified startups India, AI startups India, fintech startups India, SaaS startups India, edtech startups India, healthtech India, startup founders India, Bengaluru startups, Mumbai startups, Delhi NCR startups, Indian unicorns 2026",
    alternates: { canonical: "https://www.upforge.in/startup" },
    openGraph: {
      title: `Indian Startup Registry 2026 — ${n}+ Verified | UpForge`,
      description: `Browse ${n}+ verified Indian startups. Free, structured, updated daily.`,
      url: "https://www.upforge.in/startup", siteName: "UpForge",
      images: [{ url: "https://www.upforge.in/og/registry.png", width: 1200, height: 630 }],
      locale: "en_IN", type: "website",
    },
    other: {
      "article:publisher": "https://www.upforge.in",
      "article:modified_time": new Date().toISOString(),
      "article:section": "Indian Startup Registry",
    },
    robots: {
      index: !isFiltered && page <= 1,
      follow: true,
      googleBot: { index: !isFiltered && page <= 1, follow: true, "max-snippet": -1, "max-image-preview": "large" },
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
    { "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
      {"@type":"ListItem","position":1,"name":"UpForge","item":"https://www.upforge.in"},
      {"@type":"ListItem","position":2,"name":"Startup Registry","item":"https://www.upforge.in/startup"},
    ]},
  ]

  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        :root {
          --saffron: #FF9933;
          --green: #138808;
          --ink: #1A1208;
          --parch: #FDFAF5;
          --parch-dark: #F5F0E6;
          --rule: #E2D9CC;
          --rule2: #D8D2C4;
          --muted: #8B7355;
          --accent: #D97706;
          --accent-light: #F59E0B;
        }

        * { margin: 0; padding: 0; box-sizing: border-box; }

        body { background: var(--parch); }

        @keyframes riseIn { 
          from { opacity: 0; transform: translateY(12px); } 
          to { opacity: 1; transform: none; } 
        }
        .ri-0 { animation: riseIn 0.5s 0s ease both; }
        .ri-1 { animation: riseIn 0.5s 0.08s ease both; }
        .ri-2 { animation: riseIn 0.5s 0.16s ease both; }
        .ri-3 { animation: riseIn 0.5s 0.24s ease both; }

        /* Hero Section */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, rgba(26,18,8,0.88) 0%, rgba(26,18,8,0.75) 100%);
          overflow: hidden;
          border-bottom: 1px solid var(--rule);
        }
        
        .hero-bg {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: url('https://img.myloview.com/posters/graffiti-image-of-a-youth-from-andhra-pradesh-an-indian-state-on-a-colorful-backwall-of-city-streets-concept-of-promoting-indian-states-and-indian-youth-with-modern-art-400-538653280.jpg');
          background-size: cover;
          background-position: center 25%;
          background-repeat: no-repeat;
          opacity: 0.22;
          z-index: 0;
        }
        
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.5) 50%, rgba(26,18,8,0.85) 100%);
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF9933 0%, #FFFFFF 50%, #138808 100%);
          z-index: 2;
        }

        .mast {
          position: relative;
          z-index: 2;
          background: transparent;
        }

        .mast-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 64px 24px 56px;
        }

        .mast-h1 {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 56px;
          font-weight: 900;
          letter-spacing: -0.02em;
          color: white;
          line-height: 1.1;
          text-shadow: 0 2px 12px rgba(0,0,0,0.3);
          margin-bottom: 16px;
        }

        .mast-rule {
          display: block;
          width: 180px;
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--saffron), var(--accent), var(--saffron), transparent);
          margin: 16px auto 20px;
        }

        .mast-tagline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: 15px;
          color: rgba(255,255,255,0.92);
          font-style: italic;
          line-height: 1.65;
          max-width: 560px;
          margin: 0 auto 24px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 8px 22px;
          border-radius: 100px;
        }
        .live-dot { 
          width: 7px; 
          height: 7px; 
          border-radius: 50%; 
          background: #22c55e; 
          box-shadow: 0 0 0 2px rgba(34,197,94,0.3);
          animation: pulse 2s infinite;
        }
        .live-text {
          font-family: system-ui, -apple-system, sans-serif;
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          color: white;
        }
        @keyframes pulse { 
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 
          70% { box-shadow: 0 0 0 8px rgba(34,197,94,0); } 
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        /* Category Tabs */
        .cat-tabs { 
          display: flex; 
          overflow-x: auto; 
          border-bottom: 1px solid var(--rule); 
          scrollbar-width: none; 
          background: white; 
          padding: 0 20px;
          position: relative;
          z-index: 5;
        }
        .cat-tabs::-webkit-scrollbar { display: none; }
        .cat-tab { 
          flex-shrink: 0; 
          padding: 14px 20px; 
          font-family: system-ui, -apple-system, sans-serif; 
          font-size: 9px; 
          font-weight: 700; 
          letter-spacing: 0.12em; 
          text-transform: uppercase; 
          color: #888; 
          text-decoration: none; 
          border-bottom: 2.5px solid transparent; 
          transition: all 0.2s; 
          white-space: nowrap; 
        }
        .cat-tab:hover { color: var(--ink); border-bottom-color: var(--rule); }
        .cat-tab.on { color: var(--accent); border-bottom-color: var(--accent); }

        /* Toolbar */
        .toolbar { 
          position: sticky; 
          top: 0; 
          z-index: 20; 
          background: rgba(253,250,245,0.96); 
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--rule);
        }
        .toolbar-inner { 
          max-width: 1300px; 
          margin: 0 auto; 
          padding: 0 24px; 
        }

        .t-search-row { 
          display: flex; 
          align-items: center; 
          height: 52px; 
          background: white; 
          border-radius: 14px; 
          margin: 12px 0; 
          border: 1px solid var(--rule2);
        }
        .t-icon { padding: 0 14px; color: #AAA; font-size: 15px; flex-shrink: 0; }
        .t-inp { 
          flex: 1; 
          border: none; 
          background: transparent; 
          font-size: 14px; 
          font-style: italic; 
          color: var(--ink); 
          outline: none; 
          padding: 0; 
          min-width: 0; 
        }
        .t-inp::placeholder { color: var(--rule); font-size: 13px; }
        .t-btn { 
          height: 40px; 
          padding: 0 24px; 
          background: var(--ink); 
          color: #fff; 
          border: none; 
          font-size: 9px; 
          font-weight: 800; 
          letter-spacing: 0.16em; 
          text-transform: uppercase; 
          cursor: pointer; 
          flex-shrink: 0; 
          border-radius: 10px;
          margin-right: 8px;
        }
        .t-btn:hover { background: var(--accent); }

        .t-filter-row { 
          display: flex; 
          align-items: center; 
          height: 44px; 
          overflow-x: auto; 
          gap: 10px;
          background: white; 
          border-radius: 14px; 
          padding: 0 14px; 
          margin-bottom: 12px;
          border: 1px solid var(--rule2);
        }
        .t-filter-lbl { 
          display: flex; 
          align-items: center; 
          gap: 5px; 
          font-size: 8px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.16em; 
          color: var(--rule); 
          flex-shrink: 0;
        }
        .t-sel { 
          height: 32px; 
          border: 1px solid var(--rule2); 
          border-radius: 8px; 
          background: white; 
          font-size: 10px; 
          color: var(--muted); 
          padding: 0 12px; 
          cursor: pointer; 
          flex-shrink: 0;
        }
        .t-div { width: 1px; height: 22px; background: var(--rule2); flex-shrink: 0; margin: 0 6px; }
        .t-sort { 
          padding: 0 12px; 
          font-size: 9px; 
          font-weight: 600; 
          letter-spacing: 0.1em; 
          text-transform: uppercase; 
          color: #AAA; 
          text-decoration: none; 
          flex-shrink: 0;
          white-space: nowrap;
        }
        .t-sort.on { color: var(--accent); font-weight: 900; }
        .t-clear { 
          display: flex; 
          align-items: center; 
          gap: 4px;
          font-size: 8px; 
          font-weight: 700; 
          color: #DC2626; 
          text-decoration: none;
          flex-shrink: 0;
        }

        /* Results Bar */
        .results-bar { 
          max-width: 1300px; 
          margin: 0 auto; 
          padding: 16px 24px; 
          display: flex; 
          align-items: center; 
          gap: 14px; 
          background: var(--parch); 
          border-bottom: 1px solid var(--rule2);
        }
        .results-q { font-size: 14px; font-weight: 700; color: var(--ink); font-style: italic; }
        .results-n { font-size: 12px; color: var(--muted); }
        .results-rule { flex: 1; height: 1px; background: var(--rule2); }
        .results-pg { font-size: 10px; color: #AAA; }

        /* Main Layout */
        .main-wrap { 
          max-width: 1300px; 
          margin: 0 auto; 
          padding: 28px 24px 0; 
        }
        .main-grid { 
          display: grid; 
          grid-template-columns: 1fr 300px; 
          gap: 32px; 
          align-items: start; 
        }
        @media (max-width: 1000px) { 
          .main-grid { grid-template-columns: 1fr; } 
          .rg-aside { display: none; } 
        }

        .sh { display: flex; align-items: center; gap: 12px; margin-bottom: 18px; }
        .sh-l { font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.3em; color: #AAA; font-family: system-ui, sans-serif; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        /* Featured Cards */
        .feat-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 20px; 
          margin-bottom: 40px;
        }
        @media (max-width: 800px) { .feat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .feat-grid { grid-template-columns: 1fr; } }
        
        .feat-card { 
          background: white; 
          border-radius: 16px; 
          text-decoration: none; 
          transition: all 0.25s ease;
          overflow: hidden; 
          border: 1px solid var(--rule2); 
          box-shadow: 0 1px 3px rgba(0,0,0,0.03);
        }
        .feat-card:hover { 
          transform: translateY(-4px); 
          box-shadow: 0 12px 24px -12px rgba(0,0,0,0.12);
          border-color: var(--accent);
        }
        .feat-img-wrap { 
          width: 100%; 
          aspect-ratio: 16/9; 
          position: relative; 
          background: var(--parch-dark); 
          overflow: hidden;
        }
        .feat-img-wrap img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
        }
        .feat-overlay { 
          position: absolute; 
          inset: 0; 
          background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
        }
        .feat-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 16px; }
        .feat-sector { 
          font-size: 8px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.12em; 
          color: rgba(255,255,255,0.7); 
          margin-bottom: 4px;
        }
        .feat-company { 
          font-family: 'Playfair Display', serif; 
          font-size: 18px; 
          font-weight: 700; 
          color: #fff; 
          line-height: 1.25; 
        }
        .feat-body { padding: 16px; }
        .feat-desc { 
          font-size: 12px; 
          color: #5A4A30; 
          font-style: italic; 
          line-height: 1.5; 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden;
          margin-bottom: 12px;
        }
        .feat-foot { display: flex; align-items: center; justify-content: space-between; }
        .feat-chips { font-size: 10px; color: #AAA; display: flex; gap: 10px; flex-wrap: wrap; }

        /* List Items */
        .startup-list { display: flex; flex-direction: column; gap: 10px; }
        .s-row { 
          display: grid; 
          grid-template-columns: 48px 1fr auto; 
          background: white; 
          border-radius: 14px; 
          text-decoration: none; 
          transition: all 0.2s ease;
          border: 1px solid var(--rule2); 
          overflow: hidden;
        }
        .s-row:hover { 
          transform: translateX(4px); 
          border-color: var(--accent); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.06);
        }
        @media (max-width: 560px) { 
          .s-row { grid-template-columns: 1fr auto; } 
          .s-num-col { display: none; } 
        }
        .s-num-col { display: flex; align-items: flex-start; justify-content: center; padding: 18px 0; border-right: 1px solid var(--rule2); }
        .s-num { font-family: 'Playfair Display', serif; font-size: 13px; font-weight: 700; color: var(--rule); }
        .s-body { padding: 14px 18px; }
        .s-head { display: flex; align-items: center; gap: 12px; margin-bottom: 8px; }
        .s-logo-wrap { 
          width: 40px; 
          height: 40px; 
          border-radius: 12px; 
          border: 1px solid var(--rule2); 
          background: var(--parch-dark); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          flex-shrink: 0; 
        }
        .s-meta { flex: 1; min-width: 0; }
        .s-name { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: var(--ink); line-height: 1.3; }
        .s-cat { font-size: 9px; color: #AAA; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 3px; }
        .s-verified { display: inline-flex; align-items: center; gap: 4px; font-size: 8px; font-weight: 800; text-transform: uppercase; color: var(--green); margin-left: 8px; }
        .s-desc { font-size: 12px; color: #5A4A30; font-style: italic; line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 6px; }
        .s-founders { font-size: 11px; color: #AAA; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 4px; }
        .s-chips { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 8px; }
        .s-chip { font-size: 9px; color: var(--muted); border: 1px solid var(--rule); padding: 3px 10px; background: var(--parch); border-radius: 20px; }
        .s-ufrn { font-family: monospace; font-size: 8px; font-weight: 700; color: var(--accent); background: #FEF9E6; border: 1px solid #FDE68A; padding: 2px 8px; border-radius: 12px; }
        .s-arrow-col { display: flex; align-items: center; justify-content: center; padding: 0 20px; border-left: 1px solid var(--rule2); }
        .s-arrow { 
          width: 30px; 
          height: 30px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border-radius: 10px; 
          background: var(--parch); 
        }
        .s-row:hover .s-arrow { background: var(--accent); }
        .s-row:hover .s-arrow svg { color: white; }

        .empty-state { text-align: center; padding: 60px 24px; border-radius: 20px; border: 2px dashed var(--rule); background: white; }

        /* Pagination */
        .pag { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 36px; padding-top: 28px; border-top: 1px solid var(--rule2); }
        .pag-btn { 
          padding: 8px 20px; 
          font-size: 9px; 
          font-weight: 700; 
          letter-spacing: 0.12em; 
          text-transform: uppercase; 
          border: 1px solid var(--rule); 
          background: white; 
          color: var(--muted); 
          text-decoration: none; 
          border-radius: 10px;
        }
        .pag-btn:hover { border-color: var(--accent); color: var(--accent); }
        .pag-btn.dis { opacity: 0.4; pointer-events: none; }
        .pag-num { 
          width: 38px; 
          height: 38px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 12px; 
          font-weight: 700; 
          border: 1px solid var(--rule); 
          text-decoration: none; 
          color: var(--muted); 
          border-radius: 10px;
        }
        .pag-num:hover { border-color: var(--accent); color: var(--accent); }
        .pag-num.on { background: var(--accent); color: white; border-color: var(--accent); }

        /* Aside */
        .rg-aside { display: flex; flex-direction: column; gap: 20px; }
        .aside-box { border-radius: 16px; border: 1px solid var(--rule2); background: white; padding: 20px; }
        .aside-box.dk { background: linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); border-color: var(--accent); }
        .aside-ey { font-size: 8px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.28em; color: #AAA; margin-bottom: 12px; }
        .aside-box.dk .aside-ey { color: var(--accent-light); }
        .aside-h { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 8px; }
        .aside-box.dk .aside-h { color: white; }
        .aside-p { font-size: 12px; color: #5A4A30; font-style: italic; line-height: 1.55; margin-bottom: 16px; }
        .aside-btn { 
          display: block; 
          text-align: center; 
          font-size: 9px; 
          font-weight: 900; 
          text-transform: uppercase; 
          letter-spacing: 0.16em; 
          background: var(--accent); 
          color: white; 
          padding: 12px; 
          text-decoration: none; 
          border-radius: 12px;
        }
        .aside-btn:hover { background: var(--accent-light); }
        .aside-list { list-style: none; padding: 0; margin: 0; }
        .aside-list li { border-bottom: 1px solid var(--rule2); }
        .aside-list li:last-child { border-bottom: none; }
        .aside-list a { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding: 10px 0; 
          font-size: 12px; 
          color: #5A4A30; 
          text-decoration: none; 
          font-style: italic; 
        }
        .aside-list a:hover { color: var(--accent); }

        /* CTA Block */
        .cta-block { 
          background: linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); 
          border-radius: 20px; 
          padding: 32px 36px; 
          display: flex; 
          flex-wrap: wrap; 
          align-items: center; 
          justify-content: space-between; 
          gap: 24px; 
          margin-top: 48px; 
        }
        .cta-ey { font-size: 8px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(232,197,71,0.7); margin-bottom: 8px; }
        .cta-h { font-family: 'Playfair Display', serif; font-size: 18px; font-weight: 700; color: white; margin-bottom: 6px; }
        .cta-p { font-size: 12px; color: rgba(255,255,255,0.5); font-style: italic; }
        .cta-btn { 
          flex-shrink: 0; 
          display: inline-flex; 
          align-items: center; 
          gap: 10px; 
          background: var(--accent); 
          color: white; 
          padding: 12px 28px; 
          font-size: 10px; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 0.1em; 
          text-decoration: none; 
          border-radius: 40px; 
        }

        /* Links Grid */
        .links-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 32px; padding-top: 32px; border-top: 1px solid var(--rule2); }
        @media (max-width: 700px) { .links-grid { grid-template-columns: repeat(2, 1fr); } }
        .link-card { 
          padding: 12px 14px; 
          border-radius: 12px; 
          border: 1px solid var(--rule2); 
          background: white; 
          text-decoration: none; 
        }
        .link-title { 
          font-size: 10px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.08em; 
          color: var(--ink); 
          display: flex; 
          align-items: center; 
          gap: 5px;
          margin-bottom: 4px;
        }
        .link-desc { font-size: 9px; color: #AAA; }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .mast-content { padding: 48px 20px 40px; }
          .mast-h1 { font-size: 40px; }
          .mast-tagline { font-size: 13px; }
          .live-text { font-size: 9px; letter-spacing: 0.16em; }
          .toolbar-inner { padding: 0 16px; }
          .results-bar { padding: 12px 16px; }
          .main-wrap { padding: 20px 16px 0; }
          .main-grid { gap: 24px; }
          .feat-grid { gap: 16px; margin-bottom: 32px; }
          .feat-company { font-size: 16px; }
          .cta-block { padding: 24px 20px; }
          .cta-h { font-size: 16px; }
        }

        @media (max-width: 480px) {
          .mast-h1 { font-size: 32px; }
          .mast-tagline { font-size: 12px; }
          .t-search-row { height: 48px; }
          .t-inp { font-size: 13px; }
          .t-btn { padding: 0 16px; font-size: 8px; }
          .results-q { font-size: 12px; }
          .s-name { font-size: 14px; }
          .s-body { padding: 12px 14px; }
        }
      `}</style>

      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-bg"></div>
        
        <div className="mast">
          <div className="mast-content ri-0">
            <h1 className="mast-h1">Indian Registry</h1>
            <span className="mast-rule" />
            <p className="mast-tagline">
              India's independent registry of verified builders —<br />free, structured, permanent.
            </p>
            <div className="live-badge">
              <span className="live-dot" />
              <span className="live-text">Live · {total.toLocaleString()} Profiles · All Verified</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <nav className="cat-tabs" aria-label="Browse by sector">
        <span style={{ fontSize: 8, color: "#BBB", textTransform: "uppercase", letterSpacing: ".2em", padding: "14px 6px 14px 0", flexShrink: 0 }}>
          Browse:
        </span>
        <Link href="/startup" className={`cat-tab${!cat && !q ? " on" : ""}`}>All</Link>
        {cats.slice(0, 12).map(c => (
          <Link key={c} href={`/startup?category=${encodeURIComponent(c)}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={`cat-tab${cat === c ? " on" : ""}`}>{c}</Link>
        ))}
        {cats.length > 12 && <Link href="/startups" className="cat-tab">More →</Link>}
      </nav>

      {/* Toolbar */}
      <div className="toolbar" id="rg-toolbar">
        <div className="toolbar-inner">
          <form action="/startup" method="GET" className="t-search-row" id="search-form">
            {year && <input type="hidden" name="year" value={year} />}
            {cat  && <input type="hidden" name="category" value={cat} />}
            {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} />}
            <span className="t-icon" aria-hidden="true">🔍</span>
            <input 
              type="search" 
              name="q" 
              defaultValue={q} 
              className="t-inp"
              placeholder="Search startups, founders, sectors, cities…"
              aria-label="Search startup registry" 
              autoComplete="off" 
            />
            <button type="submit" className="t-btn">Search</button>
          </form>
          
          <div className="t-filter-row">
            <span className="t-filter-lbl">
              <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                <path d="M1 1h8M2.5 4h5M4.5 7h1" stroke="#C8C2B4" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Filter
            </span>
            <select className="t-sel" id="rg-year-sel">
              <option value="">Any Year</option>
              {years.map(yr => <option key={yr} value={String(yr)} selected={year === String(yr)}>{yr}</option>)}
            </select>
            <select className="t-sel" id="rg-cat-sel">
              <option value="">All Sectors</option>
              {cats.map(c => <option key={c} value={c} selected={cat === c}>{c}</option>)}
            </select>
            <span className="t-div" />
            <Link href={qs({ sort:"name", page:undefined })} className={`t-sort${sort==="name" ? " on":""}`}>A–Z</Link>
            <Link href={qs({ sort:"newest", page:undefined })} className={`t-sort${sort==="newest" ? " on":""}`}>Newest</Link>
            <Link href={qs({ sort:"year", page:undefined })} className={`t-sort${sort==="year" ? " on":""}`}>Founded</Link>
            {isFiltered && (
              <Link href="/startup" className="t-clear">
                ✕ Clear
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Page Body */}
      <div className="page-body">
        <div className="results-bar">
          <span className="results-q">
            {q ? `"${q}"` : cat ? cat : year ? `Est. ${year}` : "All Startups"}
          </span>
          <span className="results-n">{total.toLocaleString()} profiles</span>
          <span className="results-rule" />
          <span className="results-pg">Page {page} of {totalPages || 1}</span>
        </div>

        <div className="main-wrap">
          <div className="main-grid">

            {/* Main Content */}
            <div>
              {featured.length > 0 && (
                <section>
                  <div className="sh">
                    <span style={{ color:"var(--accent)", fontSize:12 }}>✦</span>
                    <span className="sh-l">Featured Startups</span>
                    <div className="sh-r" />
                  </div>
                  <div className="feat-grid">
                    {featured.map((s, fi) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="feat-card">
                        <div className="feat-img-wrap">
                          {s.logo_url
                            ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                            : <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100%", background:"var(--parch-dark)" }}>
                                <span style={{ fontSize:32, fontWeight:700, color:"#AAA" }}>{s.name.charAt(0)}</span>
                              </div>
                          }
                          <div className="feat-overlay" />
                          <div className="feat-caption">
                            <span className="feat-sector">{s.category ?? "Startup"}</span>
                            <span className="feat-company">{s.name}</span>
                          </div>
                        </div>
                        <div className="feat-body">
                          <p className="feat-desc">{s.description?.slice(0, 90) ?? "Building for India's next decade."}</p>
                          <div className="feat-foot">
                            <div className="feat-chips">
                              {s.founded_year && <span>📅 {s.founded_year}</span>}
                              {s.city && <span>📍 {s.city}</span>}
                            </div>
                            <ArrowUpRight size={14} style={{ color:"var(--rule)" }} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {grid.length > 0 ? (
                <section>
                  {featured.length > 0 && (
                    <div className="sh">
                      <span className="sh-l">All Startups</span>
                      <div className="sh-r" />
                    </div>
                  )}
                  <div className="startup-list">
                    {grid.map((s, idx) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="s-row">
                        <div className="s-num-col">
                          <span className="s-num">{baseNum + idx + 1}</span>
                        </div>
                        <div className="s-body">
                          <div className="s-head">
                            <div className="s-logo-wrap">
                              {s.logo_url
                                ? <Image src={s.logo_url} alt={s.name} width={40} height={40} className="object-contain" loading="lazy" />
                                : <span style={{ fontSize:16, fontWeight:700, color:"#AAA" }}>{s.name.charAt(0)}</span>
                              }
                            </div>
                            <div className="s-meta">
                              <div className="s-name">{s.name}</div>
                              <div className="s-cat">{s.category ?? "Startup"}<span className="s-verified">✓ Verified</span></div>
                            </div>
                          </div>
                          {s.description && <p className="s-desc">{s.description.slice(0, 100)}</p>}
                          {s.founders && <p className="s-founders">👥 {s.founders}</p>}
                          <div className="s-chips">
                            {s.founded_year && <span className="s-chip">📅 {s.founded_year}</span>}
                            {s.city && <span className="s-chip">📍 {s.city}</span>}
                            {s.ufrn && <span className="s-ufrn">{s.ufrn}</span>}
                          </div>
                        </div>
                        <div className="s-arrow-col">
                          <div className="s-arrow">
                            <ArrowUpRight size={13} style={{ color:"var(--rule)" }} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="empty-state">
                  <span style={{ fontSize:48, color:"var(--rule)", display:"block", marginBottom:16 }}>🔍</span>
                  <p style={{ fontSize:20, fontWeight:700, marginBottom:8 }}>No startups found</p>
                  <p style={{ fontSize:13, color:"#5A4A30" }}>{q ? `Nothing matched "${q}".` : "Try adjusting your filters."}</p>
                  <Link href="/startup" style={{ display:"inline-block", background:"var(--accent)", color:"white", padding:"10px 24px", borderRadius:"40px", fontSize:11, marginTop:20, textDecoration:"none" }}>
                    Clear filters
                  </Link>
                </div>
              )}

              {totalPages > 1 && (
                <nav className="pag">
                  <Link href={pgHref(page - 1)} className={`pag-btn${page === 1 ? " dis" : ""}`}>← Prev</Link>
                  {pgNums.map(p => (
                    <Link key={p} href={pgHref(p)} className={`pag-num${p === page ? " on" : ""}`}>{p}</Link>
                  ))}
                  <Link href={pgHref(page + 1)} className={`pag-btn${page === totalPages ? " dis" : ""}`}>Next →</Link>
                </nav>
              )}
            </div>

            {/* Sidebar */}
            <aside className="rg-aside" style={{ position:"sticky", top:80 }}>
              <div className="aside-box dk">
                <p className="aside-ey">✨ List Free</p>
                <p className="aside-h">Got a startup to list?</p>
                <p className="aside-p">Get verified. Free forever.</p>
                <Link href="/submit" className="aside-btn">Submit →</Link>
              </div>

              {cats.length > 0 && (
                <div className="aside-box">
                  <p className="aside-ey">📂 Sectors</p>
                  <ul className="aside-list">
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
              )}
            </aside>
          </div>

          {/* CTA */}
          <div className="cta-block">
            <div>
              <p className="cta-ey">🚀 UpForge</p>
              <p className="cta-h">Your founder story starts here.</p>
              <p className="cta-p">Free verified profile. Trusted by investors.</p>
            </div>
            <Link href="/submit" className="cta-btn">
              List Free <ArrowRight size={12} />
            </Link>
          </div>

          {/* Internal Links */}
          <div className="links-grid">
            <Link href="/startup" className="link-card">
              <span className="link-title">Startup Registry →</span>
              <span className="link-desc">5000+ verified startups</span>
            </Link>
            <Link href="/submit" className="link-card">
              <span className="link-title">Submit Your Startup →</span>
              <span className="link-desc">Get listed free</span>
            </Link>
            <Link href="/blog" className="link-card">
              <span className="link-title">The Forge Blog →</span>
              <span className="link-desc">Startup intelligence</span>
            </Link>
            <Link href="/about" className="link-card">
              <span className="link-title">About UpForge →</span>
              <span className="link-desc">Our mission</span>
            </Link>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          function buildUrl(params) {
            var p = new URLSearchParams();
            if(params.q) p.set('q', params.q);
            if(params.year) p.set('year', params.year);
            if(params.category) p.set('category', params.category);
            if(params.sort && params.sort !== 'name') p.set('sort', params.sort);
            var s = p.toString();
            return '/startup' + (s ? '?' + s : '');
          }
          
          function getCurrentParams() {
            var urlParams = new URLSearchParams(window.location.search);
            return {
              q: urlParams.get('q') || '',
              year: urlParams.get('year') || '',
              category: urlParams.get('category') || '',
              sort: urlParams.get('sort') || 'name'
            };
          }
          
          var yearSelect = document.getElementById('rg-year-sel');
          var catSelect = document.getElementById('rg-cat-sel');
          
          if(yearSelect) {
            yearSelect.addEventListener('change', function() {
              var current = getCurrentParams();
              current.year = this.value;
              window.location.href = buildUrl(current);
            });
          }
          
          if(catSelect) {
            catSelect.addEventListener('change', function() {
              var current = getCurrentParams();
              current.category = this.value;
              window.location.href = buildUrl(current);
            });
          }
          
          var searchForm = document.getElementById('search-form');
          if(searchForm) {
            searchForm.addEventListener('submit', function(e) {
              e.preventDefault();
              var searchInput = this.querySelector('input[name="q"]');
              var current = getCurrentParams();
              current.q = searchInput.value;
              window.location.href = buildUrl(current);
            });
          }
        })();
      `}} />
    </>
  )
}
