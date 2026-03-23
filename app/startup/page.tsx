// app/startup/page.tsx — REDESIGN v13 (Hero Background + Compact Cards)
// Indian Startup Registry — Hero background image, compact cards, mobile optimized

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

        @keyframes riseIn { 
          from { opacity:0; transform:translateY(12px) } 
          to { opacity:1; transform:none } 
        }
        .ri-0 { animation: riseIn .5s .00s ease both }
        .ri-1 { animation: riseIn .5s .08s ease both }
        .ri-2 { animation: riseIn .5s .16s ease both }
        .ri-3 { animation: riseIn .5s .24s ease both }

        .sh { display:flex; align-items:center; gap:10px; margin-bottom:14px }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.3em; color:#AAA; font-family:system-ui,sans-serif; white-space:nowrap }
        .sh-r { flex:1; height:1px; background:var(--rule2) }

        body { background:var(--parch) }

        /* Hero Section with Background Image */
        .hero-section {
          position: relative;
          background: linear-gradient(135deg, rgba(26,18,8,0.85) 0%, rgba(26,18,8,0.7) 100%);
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
          background-position: center 30%;
          background-repeat: no-repeat;
          opacity: 0.25;
          z-index: 0;
        }
        
        .hero-bg::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, rgba(26,18,8,0.9) 0%, rgba(26,18,8,0.6) 50%, rgba(26,18,8,0.85) 100%);
        }
        
        /* Tricolour overlay effect */
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
          padding: clamp(40px, 8vw, 80px) 20px clamp(36px, 6vw, 60px);
        }

        .mast-heading-wrap {
          position: relative;
          display: inline-block;
          margin-bottom: 12px;
        }
        
        .mast-h1 {
          font-family: 'Playfair Display', Georgia, serif !important;
          font-size: clamp(2rem, 8vw, 4.5rem);
          font-weight: 900;
          letter-spacing: -0.02em;
          color: white;
          line-height: 1.1;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
          position: relative;
          z-index: 1;
        }

        .mast-rule {
          display: block;
          width: clamp(100px, 20vw, 220px);
          height: 2px;
          background: linear-gradient(90deg, transparent, var(--saffron), var(--accent), var(--saffron), transparent);
          margin: 14px auto 18px;
        }

        .mast-tagline {
          font-family: Georgia, 'Times New Roman', serif;
          font-size: clamp(12px, 2vw, 14px);
          color: rgba(255,255,255,0.9);
          font-style: italic;
          line-height: 1.6;
          max-width: 520px;
          margin: 0 auto 20px;
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .live-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 6px 18px;
          border-radius: 40px;
        }
        .live-dot { 
          width: 6px; 
          height: 6px; 
          border-radius: 50%; 
          background: #22c55e; 
          box-shadow: 0 0 0 2px rgba(34,197,94,0.3);
          animation: pulse 2s infinite;
        }
        .live-text {
          font-family: system-ui, sans-serif;
          font-size: 9px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          color: white;
        }
        @keyframes pulse { 
          0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.4); } 
          70% { box-shadow: 0 0 0 6px rgba(34,197,94,0); } 
          100% { box-shadow: 0 0 0 0 rgba(34,197,94,0); }
        }

        @media (max-width: 640px) {
          .mast-content {
            padding: 32px 16px 28px;
          }
          .mast-h1 {
            font-size: 1.8rem;
          }
          .mast-tagline br {
            display: none;
          }
        }

        .cat-tabs { 
          display: flex; 
          overflow-x: auto; 
          border-bottom: 1px solid var(--rule); 
          scrollbar-width: none; 
          background: white; 
          padding: 0 16px;
          position: relative;
          z-index: 5;
        }
        .cat-tabs::-webkit-scrollbar { display: none }
        .cat-tab { 
          flex-shrink: 0; 
          padding: 10px 16px; 
          font-family: system-ui, sans-serif; 
          font-size: 8px; 
          font-weight: 700; 
          letter-spacing: 0.12em; 
          text-transform: uppercase; 
          color: #888; 
          text-decoration: none; 
          border-bottom: 2.5px solid transparent; 
          transition: all .2s; 
          white-space: nowrap 
        }
        .cat-tab:hover { color: var(--ink); border-bottom-color: var(--rule) }
        .cat-tab.on { color: var(--accent); border-bottom-color: var(--accent) }

        /* Toolbar */
        .toolbar { 
          position: sticky; 
          top: 0; 
          z-index: 20; 
          background: rgba(253,250,245,0.96); 
          backdrop-filter: blur(8px);
          border-bottom: 1px solid var(--rule);
        }
        .toolbar-inner { max-width: 1300px; margin: 0 auto; padding: 0 clamp(12px, 4vw, 48px) }

        .t-search-row { 
          display: flex; 
          align-items: center; 
          height: 48px; 
          background: white; 
          border-radius: 12px; 
          margin: 10px 0; 
          border: 1px solid var(--rule2);
        }
        .t-icon { padding: 0 12px; color: #AAA; font-size: 14px; flex-shrink: 0 }
        .t-inp { 
          flex: 1; 
          border: none; 
          background: transparent; 
          font-size: 13px; 
          font-style: italic; 
          color: var(--ink); 
          outline: none; 
          padding: 0; 
          min-width: 0 
        }
        .t-inp::placeholder { color: var(--rule); font-size: 12px }
        .t-btn { 
          height: 38px; 
          padding: 0 18px; 
          background: var(--ink); 
          color: #fff; 
          border: none; 
          font-size: 8px; 
          font-weight: 800; 
          letter-spacing: 0.16em; 
          text-transform: uppercase; 
          cursor: pointer; 
          flex-shrink: 0; 
          border-radius: 8px;
          margin-right: 6px;
        }
        .t-btn:hover { background: var(--accent) }

        .t-filter-row { 
          display: flex; 
          align-items: center; 
          height: 40px; 
          overflow-x: auto; 
          gap: 8px;
          background: white; 
          border-radius: 12px; 
          padding: 0 12px; 
          margin-bottom: 10px;
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
          height: 30px; 
          border: 1px solid var(--rule2); 
          border-radius: 8px; 
          background: white; 
          font-size: 10px; 
          color: var(--muted); 
          padding: 0 10px; 
          cursor: pointer; 
          flex-shrink: 0;
        }
        .t-div { width: 1px; height: 20px; background: var(--rule2); flex-shrink: 0; margin: 0 4px }
        .t-sort { 
          padding: 0 10px; 
          font-size: 8px; 
          font-weight: 600; 
          letter-spacing: 0.1em; 
          text-transform: uppercase; 
          color: #AAA; 
          text-decoration: none; 
          flex-shrink: 0;
          white-space: nowrap;
        }
        .t-sort.on { color: var(--accent); font-weight: 900 }
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

        .results-bar { 
          max-width: 1300px; 
          margin: 0 auto; 
          padding: 12px clamp(12px, 4vw, 48px); 
          display: flex; 
          align-items: center; 
          gap: 12px; 
          background: var(--parch) 
        }
        .results-q { font-size: 13px; font-weight: 700; color: var(--ink); font-style: italic }
        .results-n { font-size: 11px; color: var(--muted) }
        .results-rule { flex: 1; height: 1px; background: var(--rule2) }
        .results-pg { font-size: 9px; color: #AAA }

        .main-wrap { max-width: 1300px; margin: 0 auto; padding: 20px clamp(12px, 4vw, 48px) 0 }
        .main-grid { display: grid; grid-template-columns: 1fr 280px; gap: 24px; align-items: start }
        @media(max-width: 1000px) { .main-grid { grid-template-columns: 1fr } .rg-aside { display: none } }

        /* Compact Featured Cards */
        .feat-grid { 
          display: grid; 
          grid-template-columns: repeat(3, 1fr); 
          gap: 16px; 
          margin-bottom: 28px;
        }
        @media(max-width: 800px) { .feat-grid { grid-template-columns: repeat(2, 1fr) } }
        @media(max-width: 500px) { .feat-grid { grid-template-columns: 1fr } }
        
        .feat-card { 
          background: white; 
          border-radius: 12px; 
          text-decoration: none; 
          transition: all .2s ease;
          overflow: hidden; 
          border: 1px solid var(--rule2); 
        }
        .feat-card:hover { 
          transform: translateY(-2px); 
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
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
          background: linear-gradient(to top, rgba(0,0,0,.65) 0%, transparent 55%);
        }
        .feat-caption { position: absolute; bottom: 0; left: 0; right: 0; padding: 12px }
        .feat-sector { 
          font-size: 7px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.12em; 
          color: rgba(255,255,255,.7); 
        }
        .feat-company { 
          font-family: 'Playfair Display', serif; 
          font-size: 14px; 
          font-weight: 700; 
          color: #fff; 
          line-height: 1.25 
        }
        .feat-body { padding: 12px; }
        .feat-desc { 
          font-size: 11px; 
          color: #5A4A30; 
          font-style: italic; 
          line-height: 1.45; 
          display: -webkit-box; 
          -webkit-line-clamp: 2; 
          -webkit-box-orient: vertical; 
          overflow: hidden;
          margin-bottom: 8px;
        }
        .feat-foot { display: flex; align-items: center; justify-content: space-between; }
        .feat-chips { font-size: 9px; color: #AAA; display: flex; gap: 8px; flex-wrap: wrap }

        /* Compact List Items */
        .startup-list { display: flex; flex-direction: column; gap: 8px }
        .s-row { 
          display: grid; 
          grid-template-columns: 44px 1fr auto; 
          background: white; 
          border-radius: 12px; 
          text-decoration: none; 
          transition: all .2s ease;
          border: 1px solid var(--rule2); 
          overflow: hidden;
        }
        .s-row:hover { 
          transform: translateX(3px); 
          border-color: var(--accent); 
        }
        @media(max-width: 560px) { 
          .s-row { grid-template-columns: 1fr auto } 
          .s-num-col { display: none } 
        }
        .s-num-col { display: flex; align-items: flex-start; justify-content: center; padding: 14px 0; border-right: 1px solid var(--rule2) }
        .s-num { font-family: 'Playfair Display', serif; font-size: 12px; font-weight: 700; color: var(--rule) }
        .s-body { padding: 12px 14px; }
        .s-head { display: flex; align-items: center; gap: 10px; margin-bottom: 6px }
        .s-logo-wrap { 
          width: 36px; 
          height: 36px; 
          border-radius: 10px; 
          border: 1px solid var(--rule2); 
          background: var(--parch-dark); 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          flex-shrink: 0 
        }
        .s-meta { flex: 1; min-width: 0 }
        .s-name { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: var(--ink); line-height: 1.3 }
        .s-cat { font-size: 8px; color: #AAA; text-transform: uppercase; letter-spacing: 0.1em; margin-top: 2px }
        .s-verified { display: inline-flex; align-items: center; gap: 4px; font-size: 7px; font-weight: 800; text-transform: uppercase; color: var(--green); margin-left: 6px }
        .s-desc { font-size: 11px; color: #5A4A30; font-style: italic; line-height: 1.45; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 4px }
        .s-founders { font-size: 10px; color: #AAA; display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden }
        .s-chips { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 6px }
        .s-chip { font-size: 8px; color: var(--muted); border: 1px solid var(--rule); padding: 2px 8px; background: var(--parch); border-radius: 16px }
        .s-ufrn { font-family: monospace; font-size: 7px; font-weight: 700; color: var(--accent); background: #FEF9E6; border: 1px solid #FDE68A; padding: 2px 6px; border-radius: 10px }
        .s-arrow-col { display: flex; align-items: center; justify-content: center; padding: 0 14px; border-left: 1px solid var(--rule2) }
        .s-arrow { 
          width: 28px; 
          height: 28px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          border-radius: 8px; 
          background: var(--parch); 
        }
        .s-row:hover .s-arrow { background: var(--accent) }
        .s-row:hover .s-arrow svg { color: white }

        .empty-state { text-align: center; padding: 50px 20px; border-radius: 16px; border: 2px dashed var(--rule); background: white }

        .pag { display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: 28px; padding-top: 20px; border-top: 1px solid var(--rule2) }
        .pag-btn { 
          padding: 6px 16px; 
          font-size: 8px; 
          font-weight: 700; 
          letter-spacing: 0.1em; 
          text-transform: uppercase; 
          border: 1px solid var(--rule); 
          background: white; 
          color: var(--muted); 
          text-decoration: none; 
          border-radius: 8px;
        }
        .pag-btn:hover { border-color: var(--accent); color: var(--accent) }
        .pag-btn.dis { opacity: 0.4; pointer-events: none }
        .pag-num { 
          width: 34px; 
          height: 34px; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          font-size: 11px; 
          font-weight: 700; 
          border: 1px solid var(--rule); 
          text-decoration: none; 
          color: var(--muted); 
          border-radius: 8px;
        }
        .pag-num:hover { border-color: var(--accent); color: var(--accent) }
        .pag-num.on { background: var(--accent); color: white; border-color: var(--accent) }

        .rg-aside { display: flex; flex-direction: column; gap: 16px }
        .aside-box { border-radius: 12px; border: 1px solid var(--rule2); background: white; padding: 16px; }
        .aside-box.dk { background: linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); border-color: var(--accent) }
        .aside-ey { font-size: 7px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.28em; color: #AAA; margin-bottom: 10px }
        .aside-box.dk .aside-ey { color: var(--accent-light) }
        .aside-h { font-family: 'Playfair Display', serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 6px }
        .aside-box.dk .aside-h { color: white }
        .aside-p { font-size: 11px; color: #5A4A30; font-style: italic; line-height: 1.5; margin-bottom: 12px }
        .aside-btn { 
          display: block; 
          text-align: center; 
          font-size: 8px; 
          font-weight: 900; 
          text-transform: uppercase; 
          letter-spacing: 0.16em; 
          background: var(--accent); 
          color: white; 
          padding: 10px; 
          text-decoration: none; 
          border-radius: 10px;
        }
        .aside-list { list-style: none; padding: 0; margin: 0 }
        .aside-list li { border-bottom: 1px solid var(--rule2) }
        .aside-list li:last-child { border-bottom: none }
        .aside-list a { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          padding: 8px 0; 
          font-size: 11px; 
          color: #5A4A30; 
          text-decoration: none; 
          font-style: italic; 
        }
        .aside-list a:hover { color: var(--accent) }

        .cta-block { 
          background: linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); 
          border-radius: 16px; 
          padding: 24px 28px; 
          display: flex; 
          flex-wrap: wrap; 
          align-items: center; 
          justify-content: space-between; 
          gap: 20px; 
          margin-top: 32px; 
        }
        .cta-ey { font-size: 7px; font-weight: 900; text-transform: uppercase; letter-spacing: 0.3em; color: rgba(232,197,71,.7); margin-bottom: 6px }
        .cta-h { font-family: 'Playfair Display', serif; font-size: 16px; font-weight: 700; color: white; margin-bottom: 4px }
        .cta-p { font-size: 11px; color: rgba(255,255,255,.5); font-style: italic }
        .cta-btn { 
          flex-shrink: 0; 
          display: inline-flex; 
          align-items: center; 
          gap: 8px; 
          background: var(--accent); 
          color: white; 
          padding: 10px 24px; 
          font-size: 9px; 
          font-weight: 800; 
          text-transform: uppercase; 
          letter-spacing: 0.1em; 
          text-decoration: none; 
          border-radius: 40px; 
        }

        .links-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 10px }
        @media(max-width: 700px) { .links-grid { grid-template-columns: repeat(2,1fr) } }
        .link-card { 
          padding: 10px 12px; 
          border-radius: 10px; 
          border: 1px solid var(--rule2); 
          background: white; 
          text-decoration: none; 
        }
        .link-title { 
          font-size: 9px; 
          font-weight: 700; 
          text-transform: uppercase; 
          letter-spacing: 0.08em; 
          color: var(--ink); 
          display: flex; 
          align-items: center; 
          gap: 4px;
        }
        .link-desc { font-size: 8px; color: #AAA }
      `}</style>

      <Navbar />

      {/* Hero Section with Background Image */}
      <div className="hero-section">
        <div className="hero-bg"></div>
        
        <header className="mast" role="banner">
          <div className="mast-content ri-0">
            <div className="mast-heading-wrap">
              <h1 className="mast-h1 pf">Indian Registry</h1>
            </div>

            <span className="mast-rule" />

            <p className="mast-tagline ri-1">
              India's independent registry of verified builders —<br />free, structured, permanent.
            </p>

            <div className="live-badge ri-1">
              <span className="live-dot" />
              <span className="live-text">Live · {total.toLocaleString()} Profiles · All Verified</span>
            </div>
          </div>
        </header>
      </div>

      <nav className="cat-tabs ri-2" aria-label="Browse by sector">
        <span style={{ fontSize: 8, color: "#BBB", textTransform: "uppercase", letterSpacing: ".2em", padding: "10px 6px 10px 0", flexShrink: 0 }}>
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
              placeholder="Search startups, founders, sectors…"
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
        <div className="results-bar ri-2">
          <span className="results-q">
            {q ? `"${q}"` : cat ? cat : year ? `Est. ${year}` : "All Startups"}
          </span>
          <span className="results-n">{total.toLocaleString()} profiles</span>
          <span className="results-rule" />
          <span className="results-pg">Page {page} of {totalPages || 1}</span>
        </div>

        <div className="main-wrap">
          <div className="main-grid">

            <div>
              {featured.length > 0 && (
                <section>
                  <div className="sh ri-2">
                    <span style={{ color:"var(--accent)", fontSize:11 }}>✦</span>
                    <span className="sh-l">Featured</span>
                    <div className="sh-r" />
                  </div>
                  <div className="feat-grid">
                    {featured.map((s, fi) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="feat-card">
                        <div className="feat-img-wrap">
                          {s.logo_url
                            ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                            : <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100%", background:"var(--parch-dark)" }}>
                                <span style={{ fontSize:28, fontWeight:700, color:"#AAA" }}>{s.name.charAt(0)}</span>
                              </div>
                          }
                          <div className="feat-overlay" />
                          <div className="feat-caption">
                            <span className="feat-sector">{s.category ?? "Startup"}</span>
                            <span className="feat-company">{s.name}</span>
                          </div>
                        </div>
                        <div className="feat-body">
                          <p className="feat-desc">{s.description?.slice(0, 80) ?? "Building for India's next decade."}</p>
                          <div className="feat-foot">
                            <div className="feat-chips">
                              {s.founded_year && <span>📅 {s.founded_year}</span>}
                              {s.city && <span>📍 {s.city}</span>}
                            </div>
                            <ArrowUpRight size={12} style={{ color:"var(--rule)" }} />
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
                    <div className="sh ri-2">
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
                                ? <Image src={s.logo_url} alt={s.name} width={36} height={36} className="object-contain" loading="lazy" />
                                : <span style={{ fontSize:14, fontWeight:700, color:"#AAA" }}>{s.name.charAt(0)}</span>
                              }
                            </div>
                            <div className="s-meta">
                              <div className="s-name">{s.name}</div>
                              <div className="s-cat">{s.category ?? "Startup"}<span className="s-verified">✓ Verified</span></div>
                            </div>
                          </div>
                          {s.description && <p className="s-desc">{s.description.slice(0, 100)}</p>}
                          <div className="s-chips">
                            {s.founded_year && <span className="s-chip">📅 {s.founded_year}</span>}
                            {s.city && <span className="s-chip">📍 {s.city}</span>}
                            {s.ufrn && <span className="s-ufrn">{s.ufrn}</span>}
                          </div>
                        </div>
                        <div className="s-arrow-col">
                          <div className="s-arrow">
                            <ArrowUpRight size={12} style={{ color:"var(--rule)" }} />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="empty-state">
                  <span style={{ fontSize:48, color:"var(--rule)", display:"block", marginBottom:12 }}>🔍</span>
                  <p style={{ fontSize:18, fontWeight:700, marginBottom:6 }}>No startups found</p>
                  <p style={{ fontSize:12, color:"#5A4A30" }}>{q ? `Nothing matched "${q}".` : "Try adjusting your filters."}</p>
                  <Link href="/startup" style={{ display:"inline-block", background:"var(--accent)", color:"white", padding:"8px 20px", borderRadius:"40px", fontSize:10, marginTop:16, textDecoration:"none" }}>
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
