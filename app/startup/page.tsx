// app/startup/page.tsx — REDESIGN v12 (Clean Indian Look)
// Indian Startup Registry — Clean parchment palette with subtle saffron accents

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
          --saffron-light: #FFB347;
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
        .ri-4 { animation: riseIn .5s .32s ease both }

        .sh { display:flex; align-items:center; gap:12px; margin-bottom:16px }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.3em; color:#AAA; font-family:system-ui,sans-serif; white-space:nowrap }
        .sh-r { flex:1; height:1px; background:var(--rule2) }

        ::-webkit-scrollbar { width:4px }
        ::-webkit-scrollbar-track { background:var(--parch-dark) }
        ::-webkit-scrollbar-thumb { background:var(--rule) }

        body { background:var(--parch) }

        /* Subtle tricolour background behind header only */
        .header-tricolour-bg {
          position: relative;
          background: linear-gradient(135deg, 
            rgba(255,153,51,0.08) 0%,
            rgba(255,255,255,0.02) 50%,
            rgba(19,136,8,0.06) 100%);
          border-bottom: 1px solid var(--rule);
        }

        .gold-strip { height:2px; background:linear-gradient(90deg,var(--saffron),var(--accent),var(--accent-light),var(--accent),var(--saffron)) }

        /* ── MASTHEAD ── */
        .mast { background:var(--parch); position:relative; overflow:hidden }

        .mast-content {
          position:relative;
          z-index:10;
          text-align:center;
          padding: clamp(32px,5vw,60px) 20px clamp(28px,4vw,48px);
        }

        .mast-heading-wrap {
          position:relative;
          display:inline-block;
          margin-bottom:16px;
        }
        .mast-heading-wrap::before {
          content:'"';
          font-family:'Playfair Display',serif;
          font-size:clamp(90px,16vw,200px);
          font-weight:900;
          color:var(--rule2);
          opacity:.35;
          position:absolute;
          left:-32px;
          top:-32px;
          line-height:1;
          pointer-events:none;
          z-index:0;
          user-select:none;
        }

        .mast-h1 {
          font-family:'Playfair Display',Georgia,serif !important;
          font-size:clamp(2.5rem,6.5vw,5.2rem);
          font-weight:900;
          letter-spacing:-.02em;
          color:var(--ink);
          line-height:1;
          position:relative;
          z-index:1;
        }

        .mast-rule {
          display:block;
          width:clamp(140px,26vw,300px);
          height:2px;
          background:linear-gradient(90deg,transparent,var(--saffron),var(--accent),var(--accent-light),var(--accent),var(--saffron),transparent);
          margin:16px auto 20px;
        }

        .mast-tagline {
          font-family:Georgia,'Times New Roman',serif;
          font-size:clamp(13px,1.8vw,15px);
          color:#6B5C40;
          font-style:italic;
          line-height:1.7;
          max-width:520px;
          margin:0 auto 20px;
        }

        .live-badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          border:1px solid rgba(21,128,61,.25);
          background:#F0FDF4;
          padding:6px 20px;
          border-radius:40px;
          margin-bottom:0;
        }
        .live-dot { 
          width:6px; 
          height:6px; 
          border-radius:50%; 
          background:var(--green); 
          box-shadow: 0 0 0 2px rgba(19,136,8,0.2);
          animation: pulse 2s infinite;
        }
        @keyframes pulse { 
          0% { box-shadow: 0 0 0 0 rgba(19,136,8,0.4); } 
          70% { box-shadow: 0 0 0 6px rgba(19,136,8,0); } 
          100% { box-shadow: 0 0 0 0 rgba(19,136,8,0); }
        }

        @media(max-width:680px) {
          .mast-map-panel { display:none }
          .mast-heading-wrap::before { display:none }
        }

        .cat-tabs { 
          display:flex; 
          overflow-x:auto; 
          border-bottom:1px solid var(--rule); 
          scrollbar-width:none; 
          background:var(--parch); 
          padding:0 20px 
        }
        .cat-tabs::-webkit-scrollbar { display:none }
        .cat-tab { 
          flex-shrink:0; 
          padding:12px 20px; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:700; 
          letter-spacing:.12em; 
          text-transform:uppercase; 
          color:#888; 
          text-decoration:none; 
          border-bottom:2.5px solid transparent; 
          transition:all .2s; 
          white-space:nowrap 
        }
        .cat-tab:hover { color:var(--ink); border-bottom-color:var(--rule) }
        .cat-tab.on { color:var(--accent); border-bottom-color:var(--accent) }

        .toolbar { 
          position:sticky; 
          top:0; 
          z-index:20; 
          background:rgba(253,250,245,0.95); 
          backdrop-filter:blur(8px);
          border-bottom:1px solid var(--rule);
        }
        .toolbar-inner { max-width:1300px; margin:0 auto; padding:0 clamp(16px,4vw,48px) }

        .t-search-row { 
          display:flex; 
          align-items:center; 
          height:52px; 
          border-bottom:1px solid var(--rule2);
          background:white; 
          border-radius:12px; 
          margin:12px 0; 
          padding:0 4px;
        }
        .t-icon { display:flex; align-items:center; padding:0 12px; color:#AAA; font-size:16px; flex-shrink:0 }
        .t-inp { 
          flex:1; 
          height:100%; 
          border:none; 
          background:transparent; 
          font-family:Georgia,'Times New Roman',serif; 
          font-size:15px; 
          font-style:italic; 
          color:var(--ink); 
          outline:none; 
          padding:0; 
          min-width:0 
        }
        .t-inp::placeholder { color:var(--rule) }
        .t-btn { 
          height:40px; 
          padding:0 24px; 
          background:var(--ink); 
          color:#fff; 
          border:none; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:800; 
          letter-spacing:.2em; 
          text-transform:uppercase; 
          cursor:pointer; 
          flex-shrink:0; 
          transition:all .2s; 
          border-radius:8px;
        }
        .t-btn:hover { background:var(--accent); transform:translateY(-1px) }

        .t-filter-row { 
          display:flex; 
          align-items:center; 
          height:44px; 
          overflow-x:auto; 
          scrollbar-width:none; 
          gap:12px;
          background:white; 
          border-radius:12px; 
          padding:0 16px; 
          margin-bottom:12px;
        }
        .t-filter-row::-webkit-scrollbar { display:none }
        .t-filter-lbl { 
          display:flex; 
          align-items:center; 
          gap:6px; 
          padding:0 8px 0 0; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:700; 
          text-transform:uppercase; 
          letter-spacing:.18em; 
          color:var(--rule); 
          flex-shrink:0; 
          white-space:nowrap 
        }
        .t-sel { 
          height:34px; 
          border:1px solid var(--rule2); 
          border-radius:8px; 
          background:white; 
          font-family:system-ui,sans-serif; 
          font-size:11px; 
          color:var(--muted); 
          padding:0 12px; 
          outline:none; 
          cursor:pointer; 
          flex-shrink:0;
        }
        .t-sel:hover { border-color:var(--accent) }
        .t-div { width:1px; height:24px; background:var(--rule2); flex-shrink:0; margin:0 4px }
        .t-sort { 
          height:34px; 
          padding:0 14px; 
          display:flex; 
          align-items:center; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:600; 
          letter-spacing:.1em; 
          text-transform:uppercase; 
          color:#AAA; 
          text-decoration:none; 
          transition:all .2s; 
          flex-shrink:0; 
          white-space:nowrap; 
          border-radius:8px;
        }
        .t-sort:hover { color:var(--ink); background:var(--parch-dark) }
        .t-sort.on { color:var(--accent); font-weight:900; background:rgba(217,119,6,0.08) }
        .t-clear { 
          height:34px; 
          padding:0 14px; 
          display:flex; 
          align-items:center; 
          gap:6px;
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:700; 
          text-transform:uppercase; 
          color:#DC2626; 
          flex-shrink:0; 
          white-space:nowrap; 
          text-decoration:none; 
          border-radius:8px;
        }
        .t-clear:hover { background:rgba(220,38,38,0.08) }

        .results-bar { 
          max-width:1300px; 
          margin:0 auto; 
          padding:16px clamp(16px,4vw,48px); 
          display:flex; 
          align-items:center; 
          gap:16px; 
          border-bottom:1px solid var(--rule2); 
          background:var(--parch) 
        }
        .results-q { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; color:var(--ink); font-style:italic }
        .results-n { font-size:12px; color:var(--muted); font-style:italic }
        .results-rule { flex:1; height:1px; background:var(--rule2) }
        .results-pg { font-family:system-ui,sans-serif; font-size:9px; color:#AAA }

        .page-body { background:var(--parch); min-height:60vh }

        .main-wrap { max-width:1300px; margin:0 auto; padding:clamp(24px,4vw,48px) clamp(16px,4vw,48px) 0 }
        .main-grid { display:grid; grid-template-columns:1fr 300px; gap:clamp(24px,4vw,40px); align-items:start }
        @media(max-width:1060px) { .main-grid { grid-template-columns:1fr } .rg-aside { display:none } }

        /* Featured Cards */
        .feat-grid { 
          display:grid; 
          grid-template-columns:repeat(3,1fr); 
          gap:20px; 
          margin-bottom:clamp(24px,4vw,40px);
        }
        @media(max-width:820px) { .feat-grid { grid-template-columns:repeat(2,1fr) } }
        @media(max-width:560px) { .feat-grid { grid-template-columns:1fr } }
        
        .feat-card { 
          background:white; 
          border-radius:16px; 
          text-decoration:none; 
          transition:all .3s ease;
          position:relative; 
          overflow:hidden; 
          border:1px solid var(--rule2); 
          box-shadow:0 2px 8px rgba(0,0,0,0.02);
        }
        .feat-card:hover { 
          transform:translateY(-4px); 
          box-shadow:0 12px 24px -12px rgba(0,0,0,0.12);
          border-color:var(--accent);
        }
        .feat-img-wrap { 
          width:100%; 
          aspect-ratio:16/9; 
          position:relative; 
          background:var(--parch-dark); 
          overflow:hidden;
        }
        .feat-img-wrap img { 
          position:absolute; 
          inset:0; 
          width:100%; 
          height:100%; 
          object-fit:cover; 
          transition:transform .5s ease;
        }
        .feat-card:hover .feat-img-wrap img { transform:scale(1.05) }
        .feat-ph { 
          position:absolute; 
          inset:0; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          background:linear-gradient(135deg, var(--parch-dark), var(--rule))
        }
        .feat-ph-letter { font-family:'Playfair Display',serif; font-size:3.5rem; font-weight:900; color:#AAA }
        .feat-overlay { 
          position:absolute; 
          inset:0; 
          background:linear-gradient(to top, rgba(0,0,0,.7) 0%, transparent 60%);
        }
        .feat-edition { 
          position:absolute; 
          top:12px; 
          left:12px; 
          background:rgba(0,0,0,0.6); 
          backdrop-filter:blur(8px);
          color:#fff; 
          font-family:system-ui,sans-serif; 
          font-size:7px; 
          font-weight:800; 
          padding:4px 10px; 
          letter-spacing:.1em; 
          border-radius:20px;
        }
        .feat-caption { position:absolute; bottom:0; left:0; right:0; padding:16px }
        .feat-sector { 
          display:block; 
          font-family:system-ui,sans-serif; 
          font-size:7px; 
          font-weight:700; 
          text-transform:uppercase; 
          letter-spacing:.16em; 
          color:rgba(255,255,255,.7); 
          margin-bottom:4px 
        }
        .feat-company { 
          display:block; 
          font-family:'Playfair Display',serif; 
          font-size:clamp(1rem,1.6vw,1.15rem); 
          font-weight:700; 
          color:#fff; 
          line-height:1.25 
        }
        .feat-body { padding:16px; flex:1; display:flex; flex-direction:column; gap:8px }
        .feat-desc { 
          font-size:12px; 
          color:#5A4A30; 
          font-style:italic; 
          line-height:1.55; 
          display:-webkit-box; 
          -webkit-line-clamp:2; 
          -webkit-box-orient:vertical; 
          overflow:hidden;
        }
        .feat-foot { display:flex; align-items:center; justify-content:space-between; padding-top:10px; border-top:1px solid var(--rule2); margin-top:auto }
        .feat-chips { font-family:system-ui,sans-serif; font-size:9px; color:#AAA; display:flex; gap:8px; align-items:center; flex-wrap:wrap }
        .feat-ufrn { font-family:monospace; font-size:8px; font-weight:700; color:var(--accent); background:#FEF9E6; border:1px solid #FDE68A; padding:2px 8px; border-radius:12px }

        /* List Items */
        .startup-list { display:flex; flex-direction:column; gap:12px }
        .s-row { 
          display:grid; 
          grid-template-columns:48px 1fr auto; 
          align-items:stretch; 
          background:white; 
          border-radius:14px; 
          text-decoration:none; 
          transition:all .25s ease;
          position:relative; 
          border:1px solid var(--rule2); 
          overflow:hidden;
        }
        .s-row:hover { 
          transform:translateX(4px); 
          border-color:var(--accent); 
          box-shadow:0 6px 16px rgba(0,0,0,0.06);
        }
        @media(max-width:560px) { .s-row { grid-template-columns:1fr auto } .s-num-col { display:none } }
        .s-num-col { display:flex; align-items:flex-start; justify-content:center; padding:20px 0; border-right:1px solid var(--rule2) }
        .s-num { font-family:'Playfair Display',serif; font-size:.8rem; font-weight:700; color:var(--rule) }
        .s-row:hover .s-num { color:var(--accent) }
        .s-body { padding:16px 20px; display:flex; flex-direction:column; gap:8px }
        .s-head { display:flex; align-items:flex-start; gap:14px }
        .s-logo-wrap { 
          width:44px; 
          height:44px; 
          border-radius:12px; 
          border:1px solid var(--rule2); 
          background:var(--parch-dark); 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          overflow:hidden; 
          flex-shrink:0 
        }
        .s-meta { flex:1; min-width:0 }
        .s-name { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; color:var(--ink); line-height:1.3; margin-bottom:2px }
        .s-row:hover .s-name { color:var(--accent) }
        .s-cat { font-family:system-ui,sans-serif; font-size:8px; color:#AAA; text-transform:uppercase; letter-spacing:.12em; margin-top:2px }
        .s-verified { display:inline-flex; align-items:center; gap:5px; font-family:system-ui,sans-serif; font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:.12em; color:var(--green); margin-top:3px }
        .s-desc { font-size:12px; color:#5A4A30; font-style:italic; line-height:1.55; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden }
        .s-founders { font-size:10.5px; color:#AAA; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden }
        .s-chips { display:flex; gap:8px; flex-wrap:wrap; align-items:center; margin-top:4px }
        .s-chip { font-family:system-ui,sans-serif; font-size:9px; color:var(--muted); border:1px solid var(--rule); padding:3px 10px; background:var(--parch); border-radius:20px }
        .s-ufrn { font-family:monospace; font-size:8px; font-weight:700; color:var(--accent); background:#FEF9E6; border:1px solid #FDE68A; padding:2px 8px; border-radius:12px }
        .s-arrow-col { display:flex; align-items:center; justify-content:center; padding:0 20px; border-left:1px solid var(--rule2) }
        .s-arrow { 
          width:32px; 
          height:32px; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          border-radius:10px; 
          background:var(--parch); 
          transition:all .2s;
        }
        .s-row:hover .s-arrow { background:var(--accent); transform:translateX(4px) }
        .s-row:hover .s-arrow svg { color:white }

        .empty-state { text-align:center; padding:70px 24px; border-radius:24px; border:2px dashed var(--rule); background:white }

        .pag { display:flex; align-items:center; justify-content:center; gap:6px; margin-top:clamp(28px,4vw,40px); padding-top:clamp(20px,3.5vw,32px); border-top:1px solid var(--rule2) }
        .pag-btn { 
          padding:8px 20px; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:700; 
          letter-spacing:.12em; 
          text-transform:uppercase; 
          border:1px solid var(--rule); 
          background:white; 
          color:var(--muted); 
          text-decoration:none; 
          transition:all .2s; 
          border-radius:10px;
        }
        .pag-btn:hover { border-color:var(--accent); color:var(--accent); background:var(--parch) }
        .pag-btn.dis { color:var(--rule); pointer-events:none; opacity:0.5 }
        .pag-num { 
          width:40px; 
          height:40px; 
          display:flex; 
          align-items:center; 
          justify-content:center; 
          font-family:system-ui,sans-serif; 
          font-size:12px; 
          font-weight:700; 
          border:1px solid var(--rule); 
          text-decoration:none; 
          color:var(--muted); 
          transition:all .2s; 
          border-radius:10px;
        }
        .pag-num:hover { border-color:var(--accent); color:var(--accent); background:var(--parch) }
        .pag-num.on { background:var(--accent); color:white; border-color:var(--accent) }

        .rg-aside { display:flex; flex-direction:column; gap:20px }
        .aside-box { border-radius:16px; border:1px solid var(--rule2); background:white; padding:20px; transition:all .2s }
        .aside-box.dk { background:linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); border-color:var(--accent) }
        .aside-ey { font-family:system-ui,sans-serif; font-size:7.5px; font-weight:900; text-transform:uppercase; letter-spacing:.28em; color:#AAA; margin-bottom:12px }
        .aside-box.dk .aside-ey { color:var(--accent-light) }
        .aside-h { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; color:var(--ink); margin-bottom:8px; line-height:1.35 }
        .aside-box.dk .aside-h { color:white }
        .aside-p { font-size:12px; color:#5A4A30; font-style:italic; line-height:1.6; margin-bottom:16px }
        .aside-box.dk .aside-p { color:rgba(255,255,255,.5) }
        .aside-btn { 
          display:block; 
          text-align:center; 
          font-family:system-ui,sans-serif; 
          font-size:9px; 
          font-weight:900; 
          text-transform:uppercase; 
          letter-spacing:.18em; 
          background:var(--accent); 
          color:white; 
          padding:12px; 
          text-decoration:none; 
          transition:all .2s; 
          border-radius:12px;
        }
        .aside-btn:hover { background:var(--accent-light); transform:translateY(-1px) }
        .aside-list { list-style:none; padding:0; margin:0 }
        .aside-list li { border-bottom:1px solid var(--rule2) }
        .aside-list li:last-child { border-bottom:none }
        .aside-list a { 
          display:flex; 
          align-items:center; 
          justify-content:space-between; 
          padding:10px 0; 
          font-size:12.5px; 
          color:#5A4A30; 
          text-decoration:none; 
          font-style:italic; 
          transition:all .2s;
        }
        .aside-list a:hover { color:var(--accent); padding-left:6px }
        .aside-nums { display:flex; flex-direction:column }
        .aside-num-row { display:flex; justify-content:space-between; align-items:baseline; padding:9px 0; border-bottom:1px solid rgba(255,255,255,.1) }
        .aside-num-row:last-child { border-bottom:none }
        .aside-num-l { font-family:system-ui,sans-serif; font-size:8px; color:rgba(255,255,255,.5); text-transform:uppercase; letter-spacing:.12em }
        .aside-num-v { font-family:'Playfair Display',serif; font-size:1.2rem; font-weight:900; color:var(--accent-light) }

        .cta-block { 
          background:linear-gradient(135deg, var(--ink) 0%, #2A2012 100%); 
          border-radius:20px; 
          padding:clamp(28px,5vw,48px) clamp(24px,4vw,48px); 
          display:flex; 
          flex-wrap:wrap; 
          align-items:center; 
          justify-content:space-between; 
          gap:24px; 
          margin-top:clamp(32px,5vw,48px); 
          position:relative; 
          overflow:hidden;
        }
        .cta-block::before { 
          content:''; 
          position:absolute; 
          top:0; 
          left:0; 
          right:0; 
          height:3px; 
          background:linear-gradient(90deg,var(--saffron),var(--accent),var(--accent-light),var(--accent),var(--saffron)) 
        }
        .cta-ey { font-family:system-ui,sans-serif; font-size:7.5px; font-weight:900; text-transform:uppercase; letter-spacing:.3em; color:rgba(232,197,71,.7); margin-bottom:8px }
        .cta-h { font-family:'Playfair Display',serif; font-size:clamp(1.2rem,2.5vw,1.6rem); font-weight:700; color:white; margin-bottom:6px; line-height:1.3 }
        .cta-p { font-size:12px; color:rgba(255,255,255,.5); font-style:italic }
        .cta-btn { 
          flex-shrink:0; 
          display:inline-flex; 
          align-items:center; 
          gap:8px; 
          background:var(--accent); 
          color:white; 
          padding:14px 32px; 
          font-family:system-ui,sans-serif; 
          font-size:10px; 
          font-weight:800; 
          text-transform:uppercase; 
          letter-spacing:.12em; 
          text-decoration:none; 
          transition:all .2s; 
          border-radius:40px; 
          white-space:nowrap;
        }
        .cta-btn:hover { background:var(--accent-light); transform:translateY(-2px); gap:12px }

        .links-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:12px }
        @media(max-width:800px) { .links-grid { grid-template-columns:repeat(2,1fr) } }
        .link-card { 
          display:flex; 
          flex-direction:column; 
          gap:6px; 
          padding:14px 16px; 
          border-radius:14px; 
          border:1px solid var(--rule2); 
          background:white; 
          text-decoration:none; 
          transition:all .2s;
        }
        .link-card:hover { border-color:var(--accent); background:var(--parch); transform:translateY(-2px) }
        .link-title { 
          font-family:system-ui,sans-serif; 
          font-size:10px; 
          font-weight:700; 
          text-transform:uppercase; 
          letter-spacing:.1em; 
          color:var(--ink); 
          display:flex; 
          align-items:center; 
          gap:4px;
        }
        .link-desc { font-family:system-ui,sans-serif; font-size:8.5px; color:#AAA }
      `}</style>

      <Navbar />

      {/* Subtle tricolour background only behind header section */}
      <div className="header-tricolour-bg">
        {/* ── MASTHEAD ── */}
        <header className="mast" role="banner">
          <div className="mast-content ri-0">
            <div className="mast-heading-wrap">
              <h1 className="mast-h1 pf ri-0">Indian Registry</h1>
            </div>

            <span className="mast-rule" />

            <p className="mast-tagline ri-1">
              India's independent registry of verified builders —<br />free, structured, permanent.
            </p>

            <div className="live-badge ri-1">
              <span className="live-dot" />
              <span style={{ fontFamily:"system-ui,sans-serif", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:".18em", color:"var(--green)" }}>
                Live · {total.toLocaleString()} Profiles · All Verified
              </span>
            </div>
          </div>

          <nav className="cat-tabs ri-2" aria-label="Browse by sector">
            <span style={{ fontFamily:"system-ui,sans-serif", fontSize:8, color:"#BBB", textTransform:"uppercase", letterSpacing:".2em", padding:"12px 6px 12px 0", flexShrink:0 }}>
              Browse:
            </span>
            <Link href="/startup" className={`cat-tab${!cat && !q ? " on" : ""}`}>All</Link>
            {cats.slice(0, 12).map(c => (
              <Link key={c} href={`/startup?category=${encodeURIComponent(c)}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={`cat-tab${cat === c ? " on" : ""}`}>{c}</Link>
            ))}
            {cats.length > 12 && <Link href="/startups" className="cat-tab">More →</Link>}
          </nav>
        </header>
      </div>

      {/* ── TOOLBAR ── */}
      <div className="toolbar" id="rg-toolbar">
        <div className="toolbar-inner">
          <form action="/startup" method="GET" className="t-search-row" id="search-form">
            {year && <input type="hidden" name="year" value={year} id="hidden-year" />}
            {cat  && <input type="hidden" name="category" value={cat} id="hidden-cat" />}
            {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} id="hidden-sort" />}
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
            <button type="submit" className="t-btn">Search →</button>
          </form>
          
          <div className="t-filter-row" aria-label="Filter and sort controls">
            <span className="t-filter-lbl">
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path d="M1 1h10M3 4h6M5 7h2" stroke="#C8C2B4" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Filter
            </span>
            <select className="t-sel" aria-label="Filter by year" id="rg-year-sel">
              <option value="">Any Year</option>
              {years.map(yr => <option key={yr} value={String(yr)} selected={year === String(yr)}>{yr}</option>)}
            </select>
            <select className="t-sel" aria-label="Filter by sector" id="rg-cat-sel">
              <option value="">All Sectors</option>
              {cats.map(c => <option key={c} value={c} selected={cat === c}>{c}</option>)}
            </select>
            <span className="t-div" />
            <Link href={qs({ sort:"name",   page:undefined })} className={`t-sort${sort==="name"   ? " on":""}`}>A–Z</Link>
            <Link href={qs({ sort:"newest", page:undefined })} className={`t-sort${sort==="newest" ? " on":""}`}>Newest</Link>
            <Link href={qs({ sort:"year",   page:undefined })} className={`t-sort${sort==="year"   ? " on":""}`}>Founded</Link>
            {isFiltered && (
              <Link href="/startup" className="t-clear">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
                Clear
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* ── PAGE BODY ── */}
      <div className="page-body">
        <div className="results-bar ri-2" aria-live="polite">
          <span className="results-q">
            {q ? `"${q}"` : cat ? cat : year ? `Est. ${year}` : "All Startups"}
          </span>
          <span className="results-n">— {total.toLocaleString()} profiles</span>
          <span className="results-rule" />
          <span className="results-pg">Page {page} of {totalPages || 1}</span>
        </div>

        <div className="main-wrap">
          <div className="main-grid">

            <div>
              {featured.length > 0 && (
                <section aria-label="Featured startups">
                  <div className="sh ri-2">
                    <span style={{ color:"var(--accent)", fontSize:12, marginRight:4 }}>⭐</span>
                    <span className="sh-l">Featured This Edition</span>
                    <div className="sh-r" />
                  </div>
                  <div className="gold-strip" style={{ marginBottom:20 }} />
                  <div className="feat-grid">
                    {featured.map((s, fi) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="feat-card">
                        <div className="feat-img-wrap">
                          {s.logo_url
                            ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                            : <div className="feat-ph"><span className="feat-ph-letter">{s.name.charAt(0)}</span></div>
                          }
                          <div className="feat-overlay" />
                          <span className="feat-edition">Featured #{fi + 1}</span>
                          <div className="feat-caption">
                            <span className="feat-sector">{s.category ?? "Startup"}</span>
                            <span className="feat-company pf">{s.name}</span>
                          </div>
                        </div>
                        <div className="feat-body">
                          <p className="feat-desc">{s.description ?? "Building for India's next decade."}</p>
                          <div className="feat-foot">
                            <div className="feat-chips">
                              {s.founded_year && <span>📅 {s.founded_year}</span>}
                              {s.city && <span>📍 {s.city}</span>}
                              {s.ufrn && <span className="feat-ufrn">{s.ufrn}</span>}
                            </div>
                            <ArrowUpRight size={14} style={{ color:"var(--rule)" }} aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              )}

              {grid.length > 0 ? (
                <section aria-label="All startups">
                  {featured.length > 0 && (
                    <div className="sh ri-2">
                      <span className="sh-l">All Startups</span>
                      <div className="sh-r" />
                      <span className="sh-l">{total.toLocaleString()} total</span>
                    </div>
                  )}
                  <div className="startup-list">
                    {grid.map((s, idx) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="s-row ri-2" style={{ animationDelay:`${Math.min(idx * 0.03, 0.3)}s` }}>
                        <div className="s-num-col">
                          <span className="s-num">{String(baseNum + idx + 1).padStart(3,"0")}</span>
                        </div>
                        <div className="s-body">
                          <div className="s-head">
                            <div className="s-logo-wrap">
                              {s.logo_url
                                ? <Image src={s.logo_url} alt={s.name} width={44} height={44} className="object-contain" loading="lazy" />
                                : <span style={{ fontSize:16, fontWeight:700, color:"#AAA", fontFamily:"'Playfair Display',serif" }}>{s.name.charAt(0)}</span>
                              }
                            </div>
                            <div className="s-meta">
                              <div className="s-name pf">{s.name}</div>
                              <div className="s-cat">{s.category ?? "Startup"}</div>
                              <div className="s-verified">
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1.5 4L4 6.5L8.5 1.5" stroke="var(--green)" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                                Verified
                              </div>
                            </div>
                          </div>
                          {s.description && <p className="s-desc">{s.description}</p>}
                          {s.founders && <p className="s-founders">👥 {s.founders}</p>}
                          <div className="s-chips">
                            {s.founded_year && <span className="s-chip">📅 {s.founded_year}</span>}
                            {s.city && <span className="s-chip">📍 {s.city}</span>}
                            {s.ufrn && <span className="s-ufrn">{s.ufrn}</span>}
                          </div>
                        </div>
                        <div className="s-arrow-col">
                          <div className="s-arrow">
                            <ArrowUpRight size={14} style={{ color:"var(--rule)" }} aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="empty-state">
                  <span className="pf" style={{ fontSize:"3.5rem", color:"var(--rule)", display:"block", marginBottom:16 }}>🔍</span>
                  <p className="pf" style={{ fontSize:"1.4rem", color:"var(--ink)", marginBottom:8, fontWeight:700 }}>No startups found</p>
                  <p style={{ fontSize:13, color:"#5A4A30", fontStyle:"italic", marginBottom:20 }}>
                    {q ? `Nothing matched "${q}". Try a different search term.` : "Try adjusting your filters."}
                  </p>
                  <Link href="/startup" style={{ display:"inline-block", background:"var(--accent)", color:"white", padding:"10px 24px", borderRadius:"40px", fontFamily:"system-ui,sans-serif", fontSize:10, fontWeight:800, textTransform:"uppercase", letterSpacing:".12em", textDecoration:"none" }}>
                    Clear all filters
                  </Link>
                </div>
              )}

              {totalPages > 1 && (
                <nav className="pag" aria-label="Registry pagination">
                  <Link href={pgHref(page - 1)} className={`pag-btn${page === 1 ? " dis" : ""}`} aria-disabled={page === 1}>← Previous</Link>
                  {pgNums.map(p => (
                    <Link key={p} href={pgHref(p)} className={`pag-num${p === page ? " on" : ""}`} aria-current={p === page ? "page" : undefined}>{p}</Link>
                  ))}
                  <Link href={pgHref(page + 1)} className={`pag-btn${page === totalPages ? " dis" : ""}`} aria-disabled={page === totalPages}>Next →</Link>
                </nav>
              )}
            </div>

            {/* ── ASIDE ── */}
            <aside className="rg-aside ri-3" style={{ position:"sticky", top:90 }}>
              <div className="aside-box dk">
                <p className="aside-ey">✨ List Free on UpForge</p>
                <p className="aside-h pf">Got a startup to list?</p>
                <p className="aside-p">Get independently verified. Receive your UFRN. Free forever.</p>
                <Link href="/submit" className="aside-btn">Submit Your Startup →</Link>
              </div>

              {cats.length > 0 && (
                <div className="aside-box">
                  <p className="aside-ey">📂 Browse by Sector</p>
                  <ul className="aside-list">
                    {cats.slice(0, 8).map(c => (
                      <li key={c}>
                        <Link href={`/startup?category=${encodeURIComponent(c)}`}>
                          <span>{c}</span>
                          <span style={{ color:"var(--rule)", fontSize:12 }}>→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {cats.length > 8 && (
                    <Link href="/startups" style={{ display:"block", marginTop:12, paddingTop:12, borderTop:"1px solid var(--rule2)", fontFamily:"system-ui,sans-serif", fontSize:"8px", fontWeight:700, textTransform:"uppercase", letterSpacing:".16em", color:"var(--accent)", textDecoration:"none", textAlign:"center" }}>
                      View all {cats.length} sectors →
                    </Link>
                  )}
                </div>
              )}

              <div className="aside-box">
                <p className="aside-ey">📖 From The Forge</p>
                <ul className="aside-list">
                  {[
                    { l:"Top AI Startups India 2026",  h:"/blog/top-ai-startups-india-2026" },
                    { l:"How to Get Startup Funding",   h:"/blog/how-to-get-startup-funding-india-2026" },
                    { l:"Top Indian Unicorns 2026",     h:"/blog/top-indian-unicorns-2026" },
                    { l:"How to Start a Startup India", h:"/blog/how-to-start-startup-india-2026" },
                  ].map(lnk => (
                    <li key={lnk.h}>
                      <Link href={lnk.h}>
                        <span>{lnk.l}</span>
                        <span style={{ color:"var(--rule)", fontSize:12 }}>→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* CTA */}
          <div className="cta-block ri-4">
            <div>
              <p className="cta-ey">🚀 UpForge Intelligence</p>
              <p className="cta-h pf">Your founder story starts with a verified profile.</p>
              <p className="cta-p">Free forever. Trusted by investors and press across India.</p>
            </div>
            <Link href="/submit" className="cta-btn">
              List Your Startup <ArrowRight size={14} />
            </Link>
          </div>

          {/* Internal links */}
          <section className="ri-4" style={{ paddingTop:"clamp(24px,4vw,36px)", borderTop:"1px solid var(--rule2)", marginTop:"clamp(24px,4vw,36px)" }}>
            <p style={{ fontFamily:"system-ui,sans-serif", fontSize:9, letterSpacing:".3em", textTransform:"uppercase", color:"#AAA", marginBottom:16 }}>Explore on UpForge</p>
            <div className="links-grid">
              {[
                { l:"Startup Registry India",     h:"/startup",                                    desc:"Full verified database"   },
                { l:"Browse All Sectors",         h:"/startups",                                   desc:"30+ categories"           },
                { l:"Top AI Startups 2026",       h:"/blog/top-ai-startups-india-2026",            desc:"Sarvam, Krutrim & more"   },
                { l:"Funding Guide 2026",         h:"/blog/how-to-get-startup-funding-india-2026", desc:"DPIIT, SISFS & VCs"       },
                { l:"Indian Unicorns 2026",       h:"/blog/top-indian-unicorns-2026",              desc:"All 126+ profiled"        },
                { l:"AI Startups India",          h:"/startups/ai-ml",                             desc:"India's AI builders"      },
                { l:"The Forge — Blog",           h:"/blog",                                       desc:"Startup intelligence"     },
                { l:"Submit Your Startup",        h:"/submit",                                     desc:"Get listed + UFRN free"   },
              ].map(lnk => (
                <Link key={lnk.h + lnk.l} href={lnk.h} className="link-card">
                  <span className="link-title">
                    {lnk.l}
                    <ChevronRight size={10} />
                  </span>
                  <span className="link-desc">{lnk.desc}</span>
                </Link>
              ))}
            </div>
          </section>

        </div>
      </div>

      {/* Filter JS */}
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
            yearSelect.addEventListener('change', function(e) {
              var current = getCurrentParams();
              current.year = this.value;
              window.location.href = buildUrl(current);
            });
          }
          
          if(catSelect) {
            catSelect.addEventListener('change', function(e) {
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
