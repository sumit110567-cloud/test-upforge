// app/startup/page.tsx — REDESIGN v8 + UFRN
// Same as original v8 design — only changes:
//   • createClient → createReadClient (faster, no session overhead)
//   • ufrn field added to select + display on cards
//   • Stats bar REMOVED (per request)

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

        @keyframes riseIn { from { opacity:0; transform:translateY(8px) } to { opacity:1; transform:none } }
        .ri-0 { animation: riseIn .38s .00s ease both }
        .ri-1 { animation: riseIn .38s .07s ease both }
        .ri-2 { animation: riseIn .38s .14s ease both }
        .ri-3 { animation: riseIn .38s .20s ease both }
        .ri-4 { animation: riseIn .38s .27s ease both }

        .sh { display:flex; align-items:center; gap:10px; margin-bottom:14px }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.3em; color:#AAA; font-family:system-ui,sans-serif; white-space:nowrap }
        .sh-r { flex:1; height:1px; background:#D8D2C4 }

        ::-webkit-scrollbar { width:3px }
        ::-webkit-scrollbar-thumb { background:#C8C2B4 }

        body { background:#F3EFE5 }

        .mast { background:#F3EFE5; border-bottom:3px solid #1A1208 }
        .mast-nameplate { text-align:center; padding:clamp(28px,5vw,64px) 16px clamp(20px,4vw,48px); border-bottom:1px solid #C8C2B4 }

        .gold-strip { height:3px; background:linear-gradient(90deg,#92400E,#D97706,#E8C547,#D97706,#92400E) }

        .live-badge { display:inline-flex; align-items:center; gap:7px; border:1px solid rgba(21,128,61,.35); background:#F0FDF4; padding:5px 16px; border-radius:999px; margin-bottom:20px }
        .live-dot { width:6px; height:6px; border-radius:50%; background:#15803D }

        .cat-tabs { display:flex; overflow-x:auto; border-bottom:1px solid #C8C2B4; scrollbar-width:none; background:#F3EFE5 }
        .cat-tabs::-webkit-scrollbar { display:none }
        .cat-tab { flex-shrink:0; padding:12px 18px; font-family:system-ui,sans-serif; font-size:8.5px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#888; text-decoration:none; border-bottom:2.5px solid transparent; transition:all .15s; white-space:nowrap }
        .cat-tab:hover { color:#1A1208 }
        .cat-tab.on { color:#B45309; border-bottom-color:#B45309 }

        .toolbar { position:sticky; top:0; z-index:40; background:#F3EFE5; border-bottom:1px solid #C8C2B4 }
        .toolbar-inner { max-width:1300px; margin:0 auto; padding:0 clamp(16px,4vw,48px) }

        .t-search-row { display:flex; align-items:center; height:48px; border-bottom:1px solid #D8D2C4 }
        .t-icon { display:flex; align-items:center; padding:0 14px; color:#AAA; font-size:16px; flex-shrink:0 }
        .t-inp { flex:1; height:100%; border:none; background:transparent; font-family:Georgia,'Times New Roman',serif; font-size:15px; font-style:italic; color:#1A1208; outline:none; padding:0; min-width:0 }
        .t-inp::placeholder { color:#C8C2B4 }
        .t-btn { height:100%; padding:0 22px; background:#1A1208; color:#fff; border:none; font-family:system-ui,sans-serif; font-size:8px; font-weight:900; letter-spacing:.2em; text-transform:uppercase; cursor:pointer; flex-shrink:0; transition:opacity .15s; white-space:nowrap }
        .t-btn:hover { opacity:.85 }

        .t-filter-row { display:flex; align-items:center; height:36px; overflow-x:auto; scrollbar-width:none; gap:0 }
        .t-filter-row::-webkit-scrollbar { display:none }
        .t-filter-lbl { display:flex; align-items:center; gap:5px; padding:0 12px 0 0; font-family:system-ui,sans-serif; font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.2em; color:#C8C2B4; flex-shrink:0; white-space:nowrap }
        .t-sel { height:100%; border:none; background:transparent; font-family:system-ui,sans-serif; font-size:11px; color:#6B5C40; padding:0 6px; outline:none; cursor:pointer; flex-shrink:0; border-right:1px solid #EDE9DF; max-width:130px }
        .t-div { width:1px; height:18px; background:#D8D2C4; flex-shrink:0; margin:0 2px }
        .t-sort { height:100%; padding:0 11px; display:flex; align-items:center; font-family:system-ui,sans-serif; font-size:8px; font-weight:600; letter-spacing:.1em; text-transform:uppercase; color:#AAA; text-decoration:none; transition:color .15s; flex-shrink:0; white-space:nowrap; border-right:1px solid #EDE9DF }
        .t-sort:hover { color:#1A1208 }
        .t-sort.on { color:#1A1208; font-weight:900 }
        .t-clear { height:100%; padding:0 10px; display:flex; align-items:center; font-family:system-ui,sans-serif; font-size:8px; font-weight:700; text-transform:uppercase; color:#DC2626; flex-shrink:0; white-space:nowrap }

        @media(max-width:600px) {
          .t-inp::placeholder { font-size:13px }
          .t-btn { padding:0 14px; font-size:7.5px; letter-spacing:.12em }
          .t-filter-lbl { display:none }
        }

        .results-bar { max-width:1300px; margin:0 auto; padding:10px clamp(16px,4vw,48px); display:flex; align-items:center; gap:12px; border-bottom:1px solid #D8D2C4; background:#F3EFE5 }
        .results-q { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; color:#1A1208; font-style:italic }
        .results-n { font-size:12px; color:#6B5C40; font-style:italic }
        .results-rule { flex:1; height:1px; background:#D8D2C4 }
        .results-pg { font-family:system-ui,sans-serif; font-size:9px; color:#AAA }

        .page-body { background:#F3EFE5; min-height:60vh }

        .main-wrap { max-width:1300px; margin:0 auto; padding:clamp(20px,3.5vw,40px) clamp(16px,4vw,48px) 0 }
        .main-grid { display:grid; grid-template-columns:1fr 286px; gap:clamp(20px,3vw,32px); align-items:start }
        @media(max-width:1060px) { .main-grid { grid-template-columns:1fr } .rg-aside { display:none } }

        .feat-grid { display:grid; grid-template-columns:repeat(3,1fr); border:1.5px solid #1A1208; background:#1A1208; gap:1.5px; margin-bottom:clamp(20px,3.5vw,36px) }
        @media(max-width:720px) { .feat-grid { grid-template-columns:1fr } }
        .feat-card { background:#F3EFE5; display:flex; flex-direction:column; text-decoration:none; transition:all .18s; position:relative; overflow:hidden }
        .feat-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#92400E,#D97706,#E8C547); opacity:0; transition:opacity .2s }
        .feat-card:hover { background:#fff; transform:translate(-2px,-2px); box-shadow:4px 4px 0 #1A1208; z-index:1 }
        .feat-card:hover::before { opacity:1 }
        .feat-img-wrap { width:100%; aspect-ratio:16/9; position:relative; background:#EDE9DF; overflow:hidden; flex-shrink:0 }
        .feat-img-wrap img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:sepia(10%) contrast(108%); transition:transform .55s ease }
        .feat-card:hover .feat-img-wrap img { transform:scale(1.04) }
        .feat-ph { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#EDE9DF,#C8C2B4) }
        .feat-ph-letter { font-family:'Playfair Display',serif; font-size:3.8rem; font-weight:900; color:#AAA }
        .feat-overlay { position:absolute; inset:0; background:linear-gradient(to top,rgba(26,18,8,.85) 0%,transparent 55%) }
        .feat-edition { position:absolute; top:11px; left:12px; background:#1A1208; color:#fff; font-family:system-ui,sans-serif; font-size:7.5px; font-weight:900; padding:2px 9px; letter-spacing:.14em }
        .feat-caption { position:absolute; bottom:0; left:0; right:0; padding:14px }
        .feat-sector { display:block; font-family:system-ui,sans-serif; font-size:7px; font-weight:700; text-transform:uppercase; letter-spacing:.2em; color:rgba(255,255,255,.55); margin-bottom:3px }
        .feat-company { display:block; font-family:'Playfair Display',serif; font-size:clamp(.9rem,1.4vw,1.1rem); font-weight:700; color:#fff; line-height:1.2 }
        .feat-body { padding:14px; flex:1; display:flex; flex-direction:column; gap:7px }
        .feat-desc { font-size:11.5px; color:#5A4A30; font-style:italic; line-height:1.7; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; flex:1 }
        .feat-foot { display:flex; align-items:center; justify-content:space-between; padding-top:9px; border-top:1px solid #D8D2C4; margin-top:auto }
        .feat-chips { font-family:system-ui,sans-serif; font-size:8.5px; color:#AAA; display:flex; gap:6px; align-items:center; flex-wrap:wrap }
        .feat-ufrn { font-family:monospace; font-size:8px; font-weight:700; color:#C59A2E; background:#FBF8F3; border:1px solid #E8DFCC; padding:1px 5px }

        .startup-list { display:flex; flex-direction:column; gap:0 }
        .s-row { display:grid; grid-template-columns:52px 1fr auto; align-items:stretch; border:1.5px solid #D8D2C4; border-bottom:none; text-decoration:none; background:#F3EFE5; transition:all .15s; position:relative }
        .s-row:first-child { border-top-color:#1A1208 }
        .s-row:last-child { border-bottom:1.5px solid #D8D2C4 }
        .s-row:hover { background:#fff; transform:translate(-2px,-2px); box-shadow:4px 4px 0 #1A1208; z-index:1; border-color:#1A1208 }
        @media(max-width:560px) { .s-row { grid-template-columns:1fr auto } .s-num-col { display:none } }
        .s-num-col { display:flex; align-items:flex-start; justify-content:center; padding:20px 0; border-right:1px solid #EDE9DF }
        .s-num { font-family:'Playfair Display',serif; font-size:.8rem; font-weight:700; color:#C8C2B4 }
        .s-row:hover .s-num { color:#D97706 }
        .s-body { padding:18px 22px; display:flex; flex-direction:column; gap:7px }
        .s-head { display:flex; align-items:flex-start; gap:12px }
        .s-logo-wrap { width:38px; height:38px; border:1px solid #D8D2C4; background:#EDE9DF; display:flex; align-items:center; justify-content:center; overflow:hidden; flex-shrink:0 }
        .s-meta { flex:1; min-width:0 }
        .s-name { font-family:'Playfair Display',serif; font-size:clamp(.9rem,1.1vw,1.05rem); font-weight:700; color:#1A1208; line-height:1.25; margin-bottom:1px }
        .s-row:hover .s-name { text-decoration:underline }
        .s-cat { font-family:system-ui,sans-serif; font-size:8px; color:#AAA; text-transform:uppercase; letter-spacing:.12em }
        .s-verified { display:inline-flex; align-items:center; gap:4px; font-family:system-ui,sans-serif; font-size:8px; font-weight:800; text-transform:uppercase; letter-spacing:.14em; color:#15803D; margin-top:1px }
        .s-desc { font-size:12px; color:#5A4A30; font-style:italic; line-height:1.68; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden }
        .s-founders { font-size:10.5px; color:#AAA; display:-webkit-box; -webkit-line-clamp:1; -webkit-box-orient:vertical; overflow:hidden }
        .s-chips { display:flex; gap:8px; flex-wrap:wrap; align-items:center }
        .s-chip { font-family:system-ui,sans-serif; font-size:8.5px; color:#6B5C40; border:1px solid #C8C2B4; padding:2px 9px; background:#EDE9DF }
        .s-ufrn { font-family:monospace; font-size:8px; font-weight:700; color:#C59A2E; background:#FBF8F3; border:1px solid #E8DFCC; padding:2px 7px }
        .s-arrow-col { display:flex; align-items:center; justify-content:center; padding:0 16px; border-left:1px solid #EDE9DF }
        .s-arrow { width:30px; height:30px; display:flex; align-items:center; justify-content:center; border:1px solid #D8D2C4; transition:all .15s }
        .s-row:hover .s-arrow { background:#1A1208; border-color:#1A1208 }
        .s-row:hover .s-arrow svg { color:#fff }

        .empty-state { text-align:center; padding:60px 24px; border:1.5px dashed #C8C2B4; background:#F3EFE5 }

        .pag { display:flex; align-items:center; justify-content:center; gap:4px; margin-top:clamp(24px,3.5vw,36px); padding-top:clamp(18px,3vw,28px); border-top:1px solid #D8D2C4 }
        .pag-btn { padding:7px 18px; font-family:system-ui,sans-serif; font-size:9px; font-weight:700; letter-spacing:.12em; text-transform:uppercase; border:1px solid #C8C2B4; background:#F3EFE5; color:#6B5C40; text-decoration:none; transition:all .15s }
        .pag-btn:hover { border-color:#1A1208; color:#1A1208; background:#fff }
        .pag-btn.dis { color:#C8C2B4; pointer-events:none }
        .pag-num { width:36px; height:36px; display:flex; align-items:center; justify-content:center; font-family:system-ui,sans-serif; font-size:11px; font-weight:700; border:1px solid #C8C2B4; text-decoration:none; color:#6B5C40; transition:all .15s }
        .pag-num:hover { border-color:#1A1208; color:#1A1208; background:#fff }
        .pag-num.on { background:#1A1208; color:#fff; border-color:#1A1208 }

        .rg-aside { display:flex; flex-direction:column; gap:14px }
        .aside-box { border:1.5px solid #1A1208; background:#F3EFE5; padding:18px }
        .aside-box.dk { background:#1A1208 }
        .aside-ey { font-family:system-ui,sans-serif; font-size:7.5px; font-weight:900; text-transform:uppercase; letter-spacing:.28em; color:#AAA; margin-bottom:9px }
        .aside-box.dk .aside-ey { color:#E8C547 }
        .aside-h { font-family:'Playfair Display',serif; font-size:1rem; font-weight:700; color:#1A1208; margin-bottom:5px; line-height:1.3 }
        .aside-box.dk .aside-h { color:#fff }
        .aside-p { font-size:11.5px; color:#5A4A30; font-style:italic; line-height:1.65; margin-bottom:13px }
        .aside-box.dk .aside-p { color:rgba(255,255,255,.38) }
        .aside-btn { display:block; text-align:center; font-family:system-ui,sans-serif; font-size:8.5px; font-weight:900; text-transform:uppercase; letter-spacing:.2em; background:#fff; color:#1A1208; padding:10px; text-decoration:none; transition:background .15s }
        .aside-btn:hover { background:#E8C547 }
        .aside-list { list-style:none; padding:0; margin:0 }
        .aside-list li { border-bottom:1px solid #D8D2C4 }
        .aside-list li:last-child { border-bottom:none }
        .aside-list a { display:flex; align-items:center; justify-content:space-between; padding:8px 0; font-size:12.5px; color:#5A4A30; text-decoration:none; font-style:italic; transition:color .15s }
        .aside-list a:hover { color:#1A1208; text-decoration:underline }
        .aside-nums { display:flex; flex-direction:column }
        .aside-num-row { display:flex; justify-content:space-between; align-items:baseline; padding:7px 0; border-bottom:1px solid rgba(255,255,255,.08) }
        .aside-num-row:last-child { border-bottom:none }
        .aside-num-l { font-family:system-ui,sans-serif; font-size:8px; color:rgba(255,255,255,.4); text-transform:uppercase; letter-spacing:.12em }
        .aside-num-v { font-family:'Playfair Display',serif; font-size:1.15rem; font-weight:900; color:#E8C547 }

        .cta-block { background:#1A1208; padding:clamp(22px,4vw,44px) clamp(16px,3.5vw,40px); display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:20px; margin-top:clamp(24px,4vw,40px); position:relative; overflow:hidden }
        .cta-block::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#92400E,#D97706,#E8C547,#D97706,#92400E) }
        .cta-ey { font-family:system-ui,sans-serif; font-size:7.5px; font-weight:900; text-transform:uppercase; letter-spacing:.3em; color:rgba(232,197,71,.65); margin-bottom:7px }
        .cta-h { font-family:'Playfair Display',serif; font-size:clamp(1.1rem,2.2vw,1.5rem); font-weight:700; color:#fff; margin-bottom:5px; line-height:1.25 }
        .cta-p { font-size:12px; color:rgba(255,255,255,.38); font-style:italic }
        .cta-btn { flex-shrink:0; display:inline-flex; align-items:center; gap:7px; background:#D97706; color:#1A1208; padding:13px 26px; font-family:system-ui,sans-serif; font-size:9.5px; font-weight:800; text-transform:uppercase; letter-spacing:.14em; text-decoration:none; transition:opacity .15s; box-shadow:3px 3px 0 #92400E; white-space:nowrap }
        .cta-btn:hover { opacity:.88 }

        .links-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:10px }
        @media(max-width:800px) { .links-grid { grid-template-columns:repeat(2,1fr) } }
        .link-card { display:flex; flex-direction:column; gap:4px; padding:12px 13px; border:1px solid #D8D2C4; background:#F3EFE5; text-decoration:none; transition:all .15s }
        .link-card:hover { border-color:#1A1208; background:#fff }
        .link-title { font-family:system-ui,sans-serif; font-size:9.5px; font-weight:700; text-transform:uppercase; letter-spacing:.12em; color:#1A1208; display:flex; align-items:center; gap:3px }
        .link-desc { font-family:system-ui,sans-serif; font-size:8.5px; color:#AAA }

        .pg-footer { border-top:1px solid #D8D2C4; padding-top:1rem; margin-top:clamp(22px,3.5vw,36px); padding-bottom:10px; background:#F3EFE5 }
        .footer-note { font-family:system-ui,sans-serif; font-size:8.5px; color:#BBB0A0; line-height:1.75 }
        .footer-nav { display:flex; flex-wrap:wrap; gap:6px 16px; list-style:none; margin:12px 0 0; padding:0 }
        .footer-nav a { font-family:system-ui,sans-serif; font-size:8.5px; color:#AAA; text-transform:uppercase; letter-spacing:.1em; text-decoration:none; transition:color .15s }
        .footer-nav a:hover { color:#1A1208 }
      `}</style>

      <Navbar />

      <header className="mast" role="banner">
        <div className="mast-nameplate ri-0">
          <p className="ri-0" style={{ fontFamily:"system-ui,sans-serif", fontSize:8.5, fontWeight:700, letterSpacing:".42em", textTransform:"uppercase", color:"#AAA", marginBottom:16 }}>
            UpForge · Independent Startup Registry · India Edition · 2026
          </p>
          <h1 className="pf ri-0" style={{ fontSize:"clamp(2.2rem,6vw,5.2rem)", fontWeight:900, letterSpacing:"-.025em", color:"#1A1208", lineHeight:1.02, marginBottom:12 }}>
            Startup Registry
          </h1>
          <p className="ri-1" style={{ fontSize:"clamp(13px,1.8vw,16px)", color:"#6B5C40", fontStyle:"italic", lineHeight:1.75, maxWidth:560, margin:"0 auto 22px" }}>
            India's independent registry of verified builders — free, structured, permanent.
          </p>
          <div className="ri-1" style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:22 }}>
            <div style={{ height:1, width:60, background:"#C8C2B4" }} />
            <span style={{ color:"#C8C2B4", fontSize:14 }} aria-hidden="true">✦</span>
            <div style={{ height:1, width:60, background:"#C8C2B4" }} />
          </div>
          <div className="live-badge ri-1">
            <span className="live-dot" />
            <span style={{ fontFamily:"system-ui,sans-serif", fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:".2em", color:"#15803D" }}>
              Live · {total.toLocaleString()} Profiles · All Verified
            </span>
          </div>
          {/* Stats bar REMOVED */}
        </div>

        <nav className="cat-tabs ri-2" aria-label="Browse by sector" style={{ padding:"0 clamp(16px,4vw,48px)" }}>
          <span style={{ fontFamily:"system-ui,sans-serif", fontSize:7.5, color:"#BBB", textTransform:"uppercase", letterSpacing:".2em", padding:"12px 6px 12px 0", flexShrink:0, display:"inline-flex", alignItems:"center" }}>Browse:</span>
          <Link href="/startup" className={`cat-tab${!cat && !q ? " on" : ""}`}>All</Link>
          {cats.slice(0, 8).map(c => (
            <Link key={c} href={`/startup?category=${encodeURIComponent(c)}${q ? `&q=${encodeURIComponent(q)}` : ""}`} className={`cat-tab${cat === c ? " on" : ""}`}>{c}</Link>
          ))}
          {cats.length > 8 && <Link href="/startups" className="cat-tab">More Sectors →</Link>}
        </nav>
      </header>

      <div className="toolbar" id="rg-toolbar">
        <div className="toolbar-inner">
          <form action="/startup" method="GET" className="t-search-row">
            {year && <input type="hidden" name="year" value={year} />}
            {cat  && <input type="hidden" name="category" value={cat} />}
            {sort && sort !== "name" && <input type="hidden" name="sort" value={sort} />}
            <span className="t-icon" aria-hidden="true">⌕</span>
            <input type="search" name="q" defaultValue={q} className="t-inp"
              placeholder="Search startups, founders, sectors, cities…"
              aria-label="Search startup registry" autoComplete="off" />
            <button type="submit" className="t-btn">Search →</button>
          </form>
          <div className="t-filter-row" aria-label="Filter and sort controls">
            <span className="t-filter-lbl">
              <svg width="10" height="9" viewBox="0 0 10 9" fill="none" aria-hidden="true">
                <path d="M0.5 1h9M2 4.5h6M3.5 8h3" stroke="#C8C2B4" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
              Filter
            </span>
            <select className="t-sel" aria-label="Filter by year" defaultValue={year} id="rg-year-sel" name="year">
              <option value="">Any Year</option>
              {years.map(yr => <option key={yr} value={String(yr)}>{yr}</option>)}
            </select>
            <select className="t-sel" aria-label="Filter by sector" defaultValue={cat} id="rg-cat-sel" name="category">
              <option value="">All Sectors</option>
              {cats.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <span className="t-div" />
            <Link href={qs({ sort:"name",   page:undefined })} className={`t-sort${sort==="name"   ? " on":""}`}>A–Z</Link>
            <Link href={qs({ sort:"newest", page:undefined })} className={`t-sort${sort==="newest" ? " on":""}`}>Newest</Link>
            <Link href={qs({ sort:"year",   page:undefined })} className={`t-sort${sort==="year"   ? " on":""}`}>Founded</Link>
            {isFiltered && <Link href="/startup" className="t-clear">✕ Clear</Link>}
          </div>
        </div>
      </div>

      <div className="page-body">
        <div className="results-bar ri-2" aria-live="polite">
          <span className="results-q">{q ? `"${q}"` : cat ? cat : year ? `Est. ${year}` : "All Startups"}</span>
          <span className="results-n">— {total.toLocaleString()} profiles</span>
          <span className="results-rule" />
          <span className="results-pg">Pg. {page} / {totalPages || 1}</span>
        </div>

        <div className="main-wrap">
          <div className="main-grid">

            <div>
              {featured.length > 0 && (
                <section aria-label="Featured startups" style={{ marginBottom:"clamp(20px,3.5vw,36px)" }}>
                  <div className="sh ri-2">
                    <span style={{ color:"#B45309", fontSize:10, marginRight:2 }}>✦</span>
                    <span className="sh-l">Featured This Edition</span>
                    <div className="sh-r" />
                  </div>
                  <div className="gold-strip" style={{ marginBottom:1 }} />
                  <div className="feat-grid">
                    {featured.map((s, fi) => (
                      <Link key={s.id} href={`/startup/${s.slug}`} className="feat-card">
                        <div className="feat-img-wrap">
                          {s.logo_url
                            ? <img src={s.logo_url} alt={s.name} loading={fi === 0 ? "eager" : "lazy"} />
                            : <div className="feat-ph"><span className="feat-ph-letter">{s.name.charAt(0)}</span></div>
                          }
                          <div className="feat-overlay" />
                          <span className="feat-edition">No.{String(fi + 1).padStart(2,"0")}</span>
                          <div className="feat-caption">
                            <span className="feat-sector">{s.category ?? "Startup"}</span>
                            <span className="feat-company pf">{s.name}</span>
                          </div>
                        </div>
                        <div className="feat-body">
                          <p className="feat-desc">{s.description ?? "Building for India's next decade."}</p>
                          <div className="feat-foot">
                            <div className="feat-chips">
                              {s.founded_year && <span>Est. {s.founded_year}</span>}
                              {s.city && <span>· {s.city}</span>}
                              {s.ufrn && <span className="feat-ufrn">{s.ufrn}</span>}
                            </div>
                            <ArrowUpRight style={{ width:12, height:12, color:"#C8C2B4" }} aria-hidden="true" />
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
                      <Link key={s.id} href={`/startup/${s.slug}`} className="s-row ri-2" style={{ animationDelay:`${Math.min(idx * 0.035, 0.28)}s` }}>
                        <div className="s-num-col">
                          <span className="s-num">{String(baseNum + idx + 1).padStart(2,"0")}</span>
                        </div>
                        <div className="s-body">
                          <div className="s-head">
                            <div className="s-logo-wrap">
                              {s.logo_url
                                ? <Image src={s.logo_url} alt={s.name} width={38} height={38} className="object-contain" loading="lazy" />
                                : <span style={{ fontSize:14, fontWeight:700, color:"#AAA", fontFamily:"'Playfair Display',serif" }}>{s.name.charAt(0)}</span>
                              }
                            </div>
                            <div className="s-meta">
                              <div className="s-name pf">{s.name}</div>
                              <div className="s-cat">{s.category ?? ""}</div>
                              <div className="s-verified">
                                <svg width="8" height="7" viewBox="0 0 8 7" fill="none" aria-label="Verified">
                                  <path d="M1 3.5L3 5.5L7 1.5" stroke="#15803D" strokeWidth="1.4" strokeLinecap="round"/>
                                </svg>
                                Verified
                              </div>
                            </div>
                          </div>
                          {s.description && <p className="s-desc">{s.description}</p>}
                          {s.founders && <p className="s-founders">↳ {s.founders}</p>}
                          <div className="s-chips">
                            {s.founded_year && <span className="s-chip">Est. {s.founded_year}</span>}
                            {s.city && <span className="s-chip">{s.city}</span>}
                            {s.ufrn && <span className="s-ufrn">{s.ufrn}</span>}
                          </div>
                        </div>
                        <div className="s-arrow-col">
                          <div className="s-arrow">
                            <ArrowUpRight style={{ width:12, height:12, color:"#C8C2B4" }} aria-hidden="true" />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </section>
              ) : (
                <div className="empty-state">
                  <span className="pf" style={{ fontSize:"3rem", color:"#C8C2B4", display:"block", marginBottom:14 }}>∅</span>
                  <p className="pf" style={{ fontSize:"1.3rem", color:"#1A1208", marginBottom:7, fontWeight:700 }}>No startups found</p>
                  <p style={{ fontSize:13, color:"#5A4A30", fontStyle:"italic", marginBottom:18 }}>
                    {q ? `Nothing matched "${q}". Try a different term.` : "Try adjusting your filters."}
                  </p>
                  <Link href="/startup" style={{ display:"inline-block", background:"#1A1208", color:"#fff", padding:"9px 22px", fontFamily:"system-ui,sans-serif", fontSize:9, fontWeight:900, textTransform:"uppercase", letterSpacing:".18em", textDecoration:"none" }}>
                    Clear filters
                  </Link>
                </div>
              )}

              {totalPages > 1 && (
                <nav className="pag" aria-label="Registry pagination">
                  <Link href={pgHref(page - 1)} className={`pag-btn${page === 1 ? " dis" : ""}`} aria-disabled={page === 1}>← Prev</Link>
                  {pgNums.map(p => (
                    <Link key={p} href={pgHref(p)} className={`pag-num${p === page ? " on" : ""}`} aria-current={p === page ? "page" : undefined}>{p}</Link>
                  ))}
                  <Link href={pgHref(page + 1)} className={`pag-btn${page === totalPages ? " dis" : ""}`} aria-disabled={page === totalPages}>Next →</Link>
                </nav>
              )}
            </div>

            <aside className="rg-aside ri-3" style={{ position:"sticky", top:88 }}>
              <div className="aside-box dk" style={{ position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,#92400E,#D97706,#E8C547)" }} />
                <p className="aside-ey">List Free · UpForge</p>
                <p className="aside-h pf">Got a startup to list?</p>
                <p className="aside-p">Get independently verified. Receive your UFRN. Free forever.</p>
                <Link href="/submit" className="aside-btn">Submit Startup →</Link>
              </div>

              {cats.length > 0 && (
                <div className="aside-box">
                  <p className="aside-ey">Browse by Sector</p>
                  <ul className="aside-list">
                    {cats.slice(0, 10).map(c => (
                      <li key={c}>
                        <Link href={`/startups/${c.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)/g,"")}`}>
                          <span>{c}</span>
                          <span style={{ color:"#C8C2B4", fontSize:12 }}>›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {cats.length > 10 && (
                    <Link href="/startups" style={{ display:"block", marginTop:8, paddingTop:8, borderTop:"1px solid #D8D2C4", fontFamily:"system-ui,sans-serif", fontSize:"8px", fontWeight:700, textTransform:"uppercase", letterSpacing:".18em", color:"#AAA", textDecoration:"none" }}>
                      All {cats.length} sectors →
                    </Link>
                  )}
                </div>
              )}

              <div className="aside-box dk" style={{ position:"relative", overflow:"hidden" }}>
                <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"linear-gradient(90deg,#92400E,#D97706,#E8C547)" }} />
                <p className="aside-ey">By The Numbers</p>
                <p className="pf" style={{ fontSize:"1rem", fontWeight:700, color:"#fff", fontStyle:"italic", marginBottom:14, lineHeight:1.3 }}>
                  India's Startup<br /><span style={{ color:"#E8C547" }}>Ecosystem 2026</span>
                </p>
                <div className="aside-nums">
                  {[
                    { v:`${total.toLocaleString()}+`, l:"Verified on UpForge" },
                    { v:"126+", l:"Indian Unicorns"   },
                    { v:"$9.2B", l:"Q1 2026 Funding"  },
                    { v:"3rd",  l:"Largest Ecosystem"  },
                  ].map((s, i) => (
                    <div key={i} className="aside-num-row">
                      <span className="aside-num-l">{s.l}</span>
                      <span className="aside-num-v pf">{s.v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="aside-box">
                <p className="aside-ey">From The Forge</p>
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
                        <span style={{ color:"#C8C2B4", fontSize:12 }}>›</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          <div className="cta-block ri-4">
            <div>
              <p className="cta-ey">UpForge Intelligence</p>
              <p className="cta-h pf">Your founder story starts with a verified profile.</p>
              <p className="cta-p">Free forever. Trusted by investors and press across India.</p>
            </div>
            <Link href="/submit" className="cta-btn">
              List Free <ArrowRight style={{ width:13, height:13 }} aria-hidden="true" />
            </Link>
          </div>

          <section className="ri-4" style={{ paddingTop:"clamp(20px,3.5vw,32px)", borderTop:"1px solid #C8C2B4", marginTop:"clamp(20px,3.5vw,30px)" }}>
            <p style={{ fontFamily:"system-ui,sans-serif", fontSize:8.5, letterSpacing:".3em", textTransform:"uppercase", color:"#AAA", marginBottom:14 }}>Explore on UpForge</p>
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
                    <ChevronRight style={{ width:9, height:9, flexShrink:0 }} aria-hidden="true" />
                  </span>
                  <span className="link-desc">{lnk.desc}</span>
                </Link>
              ))}
            </div>
          </section>

          <footer className="pg-footer ri-4">
            <p className="footer-note">
              * Registry data sourced from DPIIT, Tracxn, Inc42, Forbes India, Hurun India 2025, and company announcements as of March 2026.
              UpForge is an independent registry — no paid placements, no sponsored rankings.
            </p>
            <nav aria-label="Footer navigation">
              <ul className="footer-nav">
                {[
                  { l:"The Founder Chronicle",  h:"/"        },
                  { l:"Startup Registry India", h:"/startup" },
                  { l:"Browse by Sector",       h:"/startups"},
                  { l:"Indian Unicorns 2026",   h:"/blog/top-indian-unicorns-2026" },
                  { l:"The Forge — Blog",       h:"/blog"    },
                  { l:"Free Valuation Tool",    h:"/report"  },
                  { l:"Submit Startup",         h:"/submit"  },
                ].map(lnk => (
                  <li key={lnk.h + lnk.l}><Link href={lnk.h}>{lnk.l}</Link></li>
                ))}
              </ul>
            </nav>
          </footer>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{ __html: `
        (function(){
          function getP(){ var p=new URLSearchParams(window.location.search); return {q:p.get('q')||'',sort:p.get('sort')||'name',year:p.get('year')||'',cat:p.get('category')||''}; }
          function buildUrl(ov){ var c=getP(),m=Object.assign({},c,ov),p=new URLSearchParams(); if(m.q)p.set('q',m.q); if(m.year)p.set('year',m.year); if(m.cat)p.set('category',m.cat); if(m.sort&&m.sort!=='name')p.set('sort',m.sort); var s=p.toString(); return '/startup'+(s?'?'+s:''); }
          var y=document.getElementById('rg-year-sel'); if(y) y.addEventListener('change',function(){ window.location.href=buildUrl({year:this.value}); });
          var c=document.getElementById('rg-cat-sel');  if(c) c.addEventListener('change',function(){ window.location.href=buildUrl({cat:this.value});  });
        })();
      `}} />
    </>
  )
}
