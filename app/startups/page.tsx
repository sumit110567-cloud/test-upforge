// app/startups/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// /startups — Category Hub Page
// FULLY DYNAMIC — derives all categories from Supabase approved startups.
// STYLE — matches about page: warm #F3EFE5 newspaper aesthetic, Playfair Display,
//         golden accents (#E8C547), sepia borders, editorial card hover.
//
// FIXES vs previous version:
//   1. Uses createClient() with await — matches about page pattern (not createReadClient)
//   2. Warm newspaper design — #F3EFE5 background, Playfair serif, golden accents
//   3. Full search bar + category filter strip (SEO + UX)
//   4. Proper category cards with startup count, description, hover animation
//   5. Structured data: CollectionPage + BreadcrumbList + ItemList
// ─────────────────────────────────────────────────────────────────────────────

import { createClient } from "@/lib/supabase/server"
import type { Metadata } from "next"
import Link from "next/link"
import { BadgeCheck, TrendingUp, Layers, ArrowUpRight, ArrowRight, Search } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  categoryToSlug,
  getDisplayName,
  generateCategoryDescription,
} from "@/lib/categories"

// ─────────────────────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────────────────────
interface CategoryStat {
  dbCategory: string
  slug: string
  displayName: string
  description: string
  count: number
}

// ─────────────────────────────────────────────────────────────────────────────
// DATA FETCHER — uses await createClient() to match about page pattern
// ─────────────────────────────────────────────────────────────────────────────
async function getCategoryStats(): Promise<{ categories: CategoryStat[]; total: number }> {
  const supabase = await createClient()

  const { data, error } = await supabase
    .from("startups")
    .select("category")
    .eq("status", "approved")
    .not("category", "is", null)

  if (error) {
    console.error("[startups hub] Supabase error:", error.message)
    return { categories: [], total: 0 }
  }

  if (!data || data.length === 0) return { categories: [], total: 0 }

  // Count per raw DB category
  const counts: Record<string, number> = {}
  for (const row of data) {
    const cat = row.category as string
    if (cat) counts[cat] = (counts[cat] ?? 0) + 1
  }

  // Deduplicate by slug, build stats
  const seenSlugs = new Set<string>()
  const stats: CategoryStat[] = []

  for (const [dbCategory, count] of Object.entries(counts)) {
    const slug = categoryToSlug(dbCategory)
    if (seenSlugs.has(slug)) continue
    seenSlugs.add(slug)
    stats.push({
      dbCategory,
      slug,
      displayName: getDisplayName(dbCategory),
      description: generateCategoryDescription(dbCategory, count),
      count,
    })
  }

  // Sort: most startups first
  stats.sort((a, b) => b.count - a.count)

  const total = stats.reduce((sum, c) => sum + c.count, 0)
  return { categories: stats, total }
}

// ─────────────────────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────────────────────
export async function generateMetadata(): Promise<Metadata> {
  const { total, categories } = await getCategoryStats()
  const n = total > 0 ? total.toLocaleString() : "1,000+"
  const sectors = categories.length > 0 ? categories.length : "30+"

  return {
    title: `Browse Indian Startups by Category 2026 | UpForge`,
    description: `Explore ${n}+ verified Indian startups organised across ${sectors} sectors — AI, FinTech, SaaS, EdTech, HealthTech, Climate Tech and more. India's most trusted independent startup registry.`,
    alternates: { canonical: "https://www.upforge.in/startups" },
    openGraph: {
      title: `Indian Startups by Category 2026 | UpForge`,
      description: `Browse ${n}+ verified Indian startups across ${sectors} sectors. India's most trusted independent startup registry.`,
      url: "https://www.upforge.in/startups",
      siteName: "UpForge",
      images: [{ url: "https://www.upforge.in/og/registry.png", width: 1200, height: 630 }],
      locale: "en_IN",
      type: "website",
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" } },
  }
}

export const revalidate = 3600 // 1h ISR

// ─────────────────────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────────────────────
function buildSchemas(categories: CategoryStat[], total: number) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",            item: "https://www.upforge.in" },
        { "@type": "ListItem", position: 2, name: "Startup Registry", item: "https://www.upforge.in/startup" },
        { "@type": "ListItem", position: 3, name: "Browse by Category", item: "https://www.upforge.in/startups" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "@id": "https://www.upforge.in/startups#collectionpage",
      name: "Indian Startups by Category 2026 — UpForge",
      description: `Browse ${total.toLocaleString()}+ verified Indian startups across ${categories.length} sectors.`,
      url: "https://www.upforge.in/startups",
      inLanguage: "en-IN",
      numberOfItems: total,
      publisher: { "@id": "https://www.upforge.in/#organization" },
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: "Indian Startup Categories on UpForge",
      numberOfItems: categories.length,
      itemListElement: categories.map((cat, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: `${cat.displayName} Startups in India`,
        url: `https://www.upforge.in/startups/${cat.slug}`,
      })),
    },
  ]
}

// ─────────────────────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export default async function StartupsHubPage() {
  const { categories, total } = await getCategoryStats()
  const schemas = buildSchemas(categories, total)

  // Top 5 by count for featured strip
  const topCategories = categories.slice(0, 5)
  const restCategories = categories.slice(5)

  return (
    <>
      {/* Structured Data */}
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf  { font-family: 'Playfair Display', Georgia, serif !important; }
        .rp  { font-family: Georgia, 'Times New Roman', serif; }
        .sys { font-family: system-ui, -apple-system, sans-serif; }

        /* Animations */
        @keyframes fadeUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        .au0{animation:fadeUp .4s .00s ease both}
        .au1{animation:fadeUp .4s .06s ease both}
        .au2{animation:fadeUp .4s .12s ease both}
        .au3{animation:fadeUp .4s .18s ease both}

        /* Card hover — editorial newspaper */
        .cat-card {
          transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
          cursor: pointer;
        }
        .cat-card:hover {
          transform: translate(-2px,-2px);
          box-shadow: 4px 4px 0 #1A1208;
          border-color: #1A1208 !important;
          position: relative;
          z-index: 1;
        }

        /* Top card — featured */
        .top-card {
          transition: transform .15s ease, box-shadow .15s ease, border-color .15s ease;
        }
        .top-card:hover {
          transform: translate(-2px,-2px);
          box-shadow: 4px 4px 0 #E8C547;
          border-color: #E8C547 !important;
          position: relative;
          z-index: 1;
        }

        /* Search bar */
        .hub-search {
          width: 100%;
          background: #FDFCF9;
          border: 1.5px solid #C8C2B4;
          padding: 10px 16px 10px 40px;
          font-size: 13px;
          color: #1A1208;
          font-family: Georgia, serif;
          outline: none;
          transition: border-color .2s;
        }
        .hub-search:focus { border-color: #1A1208; }
        .hub-search::placeholder { color: #AAA; font-style: italic; }

        /* Section divider */
        .sh { display:flex; align-items:center; gap:10px; margin-bottom:16px; }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.3em; color:#AAA; font-family:system-ui,sans-serif; white-space:nowrap; }
        .sh-r { flex:1; height:1px; background:#D8D2C4; }

        /* Grid */
        .cat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: #D8D2C4;
          border: 1px solid #D8D2C4;
        }
        @media(max-width:1024px){ .cat-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:768px){  .cat-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:480px){  .cat-grid { grid-template-columns: 1fr !important; } }

        /* Top 5 featured grid */
        .top-grid {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 1px;
          background: #1A1208;
          border: 1px solid #1A1208;
        }
        @media(max-width:1024px){ .top-grid { grid-template-columns: repeat(3,1fr) !important; } }
        @media(max-width:640px){  .top-grid { grid-template-columns: repeat(2,1fr) !important; } }

        /* Tag strip */
        .tag-strip {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          padding: 16px 0;
        }
        .tag {
          font-size: 10px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: .12em;
          padding: 4px 10px;
          border: 1px solid #C8C2B4;
          color: #6B5C40;
          background: #FDFCF9;
          transition: all .15s;
          font-family: system-ui, sans-serif;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 5px;
        }
        .tag:hover { border-color: #1A1208; color: #1A1208; background: #F3EFE5; }
        .tag-count { color: #C8C2B4; font-size:9px; }

        /* Stats bar */
        .stats-bar { display:flex; border: 1px solid #D8D2C4; background: #1A1208; }
        .stat-item { flex:1; padding:20px 0; text-align:center; border-right:1px solid rgba(255,255,255,.07); }
        .stat-item:last-child { border-right:none; }
        @media(max-width:640px){
          .stats-bar { flex-direction:column !important; }
          .stat-item { border-right:none !important; border-bottom:1px solid rgba(255,255,255,.07) !important; }
          .stat-item:last-child { border-bottom:none !important; }
        }

        /* Empty state */
        .empty-search {
          text-align: center;
          padding: 60px 20px;
          border: 1px dashed #D8D2C4;
          background: #FDFCF9;
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        /* CTA button — hover via CSS only (Server Component safe) */
        .cta-btn {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: #1A1208;
          padding: 12px 28px;
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.18em;
          font-family: system-ui, sans-serif;
          text-decoration: none;
          transition: background .15s;
        }
        .cta-btn:hover { background: #E8C547; }
      `}</style>

      <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "Georgia, 'Times New Roman', serif" }}>
        <Navbar />

        {/* ── MASTHEAD ── */}
        <header
          className="au0"
          style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}
        >
          {/* Breadcrumb */}
          <div style={{ borderBottom: "1px solid #D8D2C4", background: "#FDFCF9" }}>
            <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px,4vw,48px)" }}>
              <ol
                className="sys"
                style={{ display:"flex", alignItems:"center", gap:6, height:36, fontSize:10, color:"#AAA", listStyle:"none", margin:0, padding:0 }}
              >
                <li><Link href="/" style={{ color:"#AAA", textDecoration:"none" }} className="hover:text-[#1A1208] transition-colors">Home</Link></li>
                <li style={{ color:"#D8D2C4" }}>/</li>
                <li><Link href="/startup" style={{ color:"#AAA", textDecoration:"none" }} className="hover:text-[#1A1208] transition-colors">Startup Registry</Link></li>
                <li style={{ color:"#D8D2C4" }}>/</li>
                <li style={{ color:"#1A1208", fontWeight:600 }}>Browse by Category</li>
              </ol>
            </div>
          </div>

          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "clamp(32px,5vw,60px) clamp(16px,4vw,48px) clamp(24px,4vw,44px)" }}>
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <Layers style={{ width:13, height:13, color:"#AAA" }} aria-hidden="true" />
              <p className="sys" style={{ fontSize:8, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.38em", color:"#AAA" }}>
                UpForge Registry · India Edition 2026
              </p>
            </div>

            {/* H1 */}
            <h1 className="pf" style={{ fontSize:"clamp(2rem,5vw,4rem)", fontWeight:900, color:"#1A1208", lineHeight:1.1, marginBottom:16, letterSpacing:"-0.02em" }}>
              Browse Indian Startups<br />
              <span style={{ color:"#8C7D65", fontStyle:"italic" }}>by Category</span>
            </h1>

            <p style={{ fontSize:"clamp(12px,1.5vw,14px)", color:"#5A4A30", lineHeight:1.8, maxWidth:620, marginBottom:28, fontStyle:"italic" }}>
              India's independent registry of{" "}
              <strong style={{ color:"#1A1208", fontStyle:"normal" }}>{total > 0 ? total.toLocaleString() : "—"}+ verified startups</strong>{" "}
              organised across{" "}
              <strong style={{ color:"#1A1208", fontStyle:"normal" }}>{categories.length > 0 ? categories.length : "—"} sectors</strong>.
              Every profile is manually verified — free for founders, trusted by investors and press.
            </p>

            {/* Search bar */}
            <div style={{ position:"relative", maxWidth:560 }}>
              <Search style={{ position:"absolute", left:13, top:"50%", transform:"translateY(-50%)", width:14, height:14, color:"#AAA" }} aria-hidden="true" />
              <input
                type="search"
                className="hub-search"
                placeholder="Search categories — AI, FinTech, SaaS…"
                aria-label="Search startup categories"
                id="category-search"
              />
            </div>
          </div>
        </header>

        {/* ── STATS BAR ── */}
        <div className="au1" style={{ maxWidth:1300, margin:"0 auto", padding:"0 clamp(16px,4vw,48px)" }}>
          <div className="stats-bar">
            {[
              { v: total > 0 ? `${total.toLocaleString()}+` : "—",      l: "Verified Startups" },
              { v: categories.length > 0 ? `${categories.length}` : "—", l: "Sectors Covered"   },
              { v: "Daily",                                                l: "Registry Updated"  },
              { v: "Free",                                                 l: "Forever for Founders" },
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <p className="pf" style={{ fontSize:"clamp(1.4rem,2.5vw,1.9rem)", fontWeight:900, color:"white", lineHeight:1, marginBottom:4 }}>{s.v}</p>
                <p className="sys" style={{ fontSize:"8px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"rgba(255,255,255,.4)" }}>{s.l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN CONTENT ── */}
        <main style={{ maxWidth:1300, margin:"0 auto", padding:"clamp(28px,4vw,52px) clamp(16px,4vw,48px) 60px" }}>

          {/* ── TOP CATEGORIES — dark featured strip ── */}
          {topCategories.length > 0 && (
            <section className="au1" style={{ marginBottom:40 }}>
              <div className="sh">
                <span className="sh-l">Most Active Sectors</span>
                <div className="sh-r" />
              </div>
              <div className="top-grid">
                {topCategories.map((cat, i) => (
                  <Link
                    key={cat.slug}
                    href={`/startups/${cat.slug}`}
                    className="top-card"
                    style={{ background:"#1A1208", padding:"22px 18px", display:"flex", flexDirection:"column", gap:10, textDecoration:"none" }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="pf" style={{ fontSize:"clamp(1.6rem,2.5vw,2.2rem)", fontWeight:900, color:"#E8C547", lineHeight:1 }}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                      <ArrowUpRight style={{ width:14, height:14, color:"rgba(255,255,255,.3)", marginTop:4 }} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="pf" style={{ fontSize:"clamp(0.9rem,1.4vw,1.05rem)", fontWeight:700, color:"white", lineHeight:1.2, marginBottom:6 }}>
                        {cat.displayName}
                      </p>
                      <p className="sys" style={{ fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"#E8C547" }}>
                        {cat.count.toLocaleString()} verified
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* ── TAG QUICK-JUMP STRIP ── */}
          {categories.length > 0 && (
            <section className="au2" style={{ borderTop:"1px solid #D8D2C4", borderBottom:"1px solid #D8D2C4", marginBottom:36 }}>
              <nav className="tag-strip" aria-label="Jump to category">
                {categories.map((cat) => (
                  <Link key={cat.slug} href={`/startups/${cat.slug}`} className="tag">
                    {cat.displayName}
                    <span className="tag-count">{cat.count}</span>
                  </Link>
                ))}
              </nav>
            </section>
          )}

          {/* ── ALL CATEGORIES GRID ── */}
          {categories.length > 0 ? (
            <section className="au2" id="all-categories">
              <div className="sh">
                <span className="sh-l">All Sectors — {categories.length} categories</span>
                <div className="sh-r" />
              </div>

              <div className="cat-grid" id="category-grid">
                {categories.map((cat, i) => (
                  <Link
                    key={cat.slug}
                    href={`/startups/${cat.slug}`}
                    className="cat-card"
                    data-category={cat.displayName.toLowerCase()}
                    style={{ background:"#FDFCF9", padding:"22px 20px", display:"flex", flexDirection:"column", gap:12, textDecoration:"none", borderBottom:"none" }}
                  >
                    {/* Rank + arrow */}
                    <div className="flex items-start justify-between">
                      <span className="pf" style={{ fontSize:"clamp(1.8rem,2.5vw,2.4rem)", fontWeight:900, color:"#EDE8DF", lineHeight:1 }}>
                        {String(i+1).padStart(2,"0")}
                      </span>
                      <ArrowUpRight style={{ width:13, height:13, color:"#C8C2B4", marginTop:4 }} className="card-arrow" aria-hidden="true" />
                    </div>

                    {/* Name */}
                    <h2 className="pf" style={{ fontSize:"clamp(0.9rem,1.3vw,1.05rem)", fontWeight:700, color:"#1A1208", lineHeight:1.25, margin:0 }}>
                      {cat.displayName}
                    </h2>

                    {/* Description */}
                    <p style={{ fontSize:11.5, color:"#5A4A30", lineHeight:1.72, margin:0, fontStyle:"italic", flex:1,
                      display:"-webkit-box", WebkitLineClamp:3, WebkitBoxOrient:"vertical", overflow:"hidden" }}>
                      {cat.description}
                    </p>

                    {/* Footer */}
                    <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", borderTop:"1px solid #EDE8DF", paddingTop:10, marginTop:"auto" }}>
                      <span className="flex items-center gap-1">
                        <BadgeCheck style={{ width:10, height:10, color:"#15803D" }} aria-hidden="true" />
                        <span className="sys" style={{ fontSize:8.5, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.14em", color:"#15803D" }}>
                          {cat.count.toLocaleString()} verified
                        </span>
                      </span>
                      <span className="sys" style={{ fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:"#AAA" }}>
                        Explore →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          ) : (
            /* ── EMPTY STATE — shown when DB has 0 approved startups ── */
            <div className="empty-search au2">
              <p className="pf" style={{ fontSize:"1.4rem", color:"#1A1208", marginBottom:8 }}>No categories yet</p>
              <p style={{ fontSize:13, color:"#6B5C40", fontStyle:"italic", marginBottom:20 }}>
                Categories appear automatically once startups are approved in the registry.
              </p>
              <Link
                href="/submit"
                style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#1A1208", color:"white", padding:"10px 24px", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.16em", fontFamily:"system-ui,sans-serif", textDecoration:"none" }}
              >
                Submit First Startup <ArrowRight style={{ width:11, height:11 }} />
              </Link>
            </div>
          )}

          {/* ── PROMISE STRIP ── */}
          <section className="au3" style={{ marginTop:48, borderTop:"1px solid #C8C2B4", borderBottom:"1px solid #C8C2B4" }}>
            <div style={{ display:"flex", flexWrap:"wrap", background:"#FDFCF9", border:"1px solid #D8D2C4", borderTop:"none" }}>
              {[
                { label:"Manually Verified",   desc:"Every profile reviewed before listing",   color:"#15803D" },
                { label:"No Paid Rankings",    desc:"Zero sponsored placements, ever",         color:"#2563EB" },
                { label:"Permanently Indexed", desc:"Public, structured, always accessible",   color:"#7C3AED" },
                { label:"Free for Founders",   desc:"Listing and tools — always free",         color:"#DC2626" },
              ].map((item, i) => (
                <div key={i} style={{ flex:1, minWidth:180, padding:"18px 20px", borderRight:"1px solid #D8D2C4", display:"flex", alignItems:"flex-start", gap:10 }}
                  className={i === 3 ? "[border-right:none!important]" : ""}
                >
                  <div style={{ width:8, height:8, background:item.color, flexShrink:0, marginTop:5, borderRadius:"50%" }} />
                  <div>
                    <p className="sys" style={{ fontSize:9, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.16em", color:"#1A1208", marginBottom:3 }}>{item.label}</p>
                    <p style={{ fontSize:11.5, color:"#6B5C40", fontStyle:"italic", lineHeight:1.5 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── CTA ── */}
          <section className="au3" style={{ marginTop:40 }}>
            <div style={{ background:"#1A1208", padding:"clamp(28px,4vw,48px) clamp(20px,4vw,48px)", display:"flex", flexWrap:"wrap", alignItems:"center", justifyContent:"space-between", gap:24 }}>
              <div>
                <p className="sys" style={{ fontSize:8, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.28em", color:"#E8C547", marginBottom:8 }}>
                  UpForge Registry
                </p>
                <p className="pf" style={{ fontSize:"clamp(1.1rem,2.2vw,1.55rem)", fontWeight:700, color:"white", lineHeight:1.25, marginBottom:8 }}>
                  Your founder story starts with a verified profile.
                </p>
                <p style={{ fontSize:12, color:"rgba(255,255,255,.5)", fontStyle:"italic", lineHeight:1.7 }}>
                  Independently verified and indexed in India's most trusted startup registry. Free forever.
                </p>
              </div>
              <Link
                href="/submit"
                className="cta-btn"
              >
                List Free <ArrowRight style={{ width:12, height:12 }} />
              </Link>
            </div>
          </section>

          {/* ── INTERNAL LINKS ── */}
          <nav className="au3" aria-label="Explore UpForge" style={{ marginTop:40, paddingTop:24, borderTop:"1px solid #D8D2C4" }}>
            <p className="sys" style={{ fontSize:8, fontWeight:900, textTransform:"uppercase", letterSpacing:"0.3em", color:"#AAA", marginBottom:14 }}>
              Explore UpForge
            </p>
            <ul style={{ display:"flex", flexWrap:"wrap", gap:"8px 24px", listStyle:"none", margin:0, padding:0 }}>
              {[
                { l:"All Indian Startups", h:"/startup" },
                { l:"Submit Your Startup", h:"/submit"  },
                { l:"Startup Journal",     h:"/blog"    },
                { l:"About UpForge",       h:"/about"   },
                ...categories.slice(0,6).map(c => ({ l:`${c.displayName} Startups`, h:`/startups/${c.slug}` })),
              ].map(lnk => (
                <li key={lnk.h + lnk.l}>
                  <Link
                    href={lnk.h}
                    style={{ fontSize:12, color:"#6B5C40", textDecoration:"none", fontStyle:"italic" }}
                    className="hover:text-[#1A1208] hover:underline transition-colors"
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </main>

        <Footer />
      </div>

      {/* ── CLIENT-SIDE SEARCH FILTER (no router, pure JS) ── */}
      <script dangerouslySetInnerHTML={{ __html: `
        (function() {
          var input = document.getElementById('category-search');
          var grid  = document.getElementById('category-grid');
          if (!input || !grid) return;
          input.addEventListener('input', function() {
            var q = this.value.toLowerCase().trim();
            var cards = grid.querySelectorAll('a[data-category]');
            var visible = 0;
            cards.forEach(function(card) {
              var name = card.getAttribute('data-category') || '';
              var show = !q || name.includes(q);
              card.style.display = show ? '' : 'none';
              if (show) visible++;
            });
          });
        })();
      `}} />
    </>
  )
}
