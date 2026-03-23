// app/registry/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Served ONLY on upforge.org (middleware rewrites / → /registry)
// Wikipedia-style global startup registry homepage.
// No marketing, no animations — pure structured authority.
// ─────────────────────────────────────────────────────────────────────────────

import { createReadClient } from "@/lib/supabase/server"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const revalidate = 3600

export const metadata: Metadata = {
  title: "UpForge Global Startup Registry — Verified Startup Database",
  description:
    "The open, independent, verified global registry of startups. Every listing is manually reviewed and assigned a unique UpForge Registry Number (UFRN). Free to access, forever.",
  alternates: { canonical: "https://www.upforge.org" },
  openGraph: {
    title: "UpForge Global Startup Registry",
    url: "https://www.upforge.org",
    images: [{ url: "https://www.upforge.in/og/startup-default.png", width: 1200, height: 630 }],
  },
}

// ── JSON-LD — Dataset schema so Google treats this as a citable database ──
const datasetSchema = {
  "@context": "https://schema.org",
  "@type": "Dataset",
  name: "UpForge Global Startup Registry",
  description:
    "Open, verified database of startups from India and beyond. Each startup is assigned a unique UpForge Registry Number (UFRN).",
  url: "https://www.upforge.org",
  creator: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
  license: "https://creativecommons.org/licenses/by/4.0/",
  keywords: ["startups", "startup registry", "Indian startups", "UFRN", "verified startups"],
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
}

// ── Data fetch ─────────────────────────────────────────────────────────────
async function getStats(): Promise<{ total: number; categories: number; cities: number }> {
  const supabase = createReadClient()
  const { count } = await supabase
    .from("startups")
    .select("id", { count: "exact", head: true })
    .eq("status", "approved")
  return { total: count ?? 0, categories: 18, cities: 42 }
}

async function getRecentStartups(): Promise<RegistryRow[]> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("id, name, slug, description, logo_url, category, city, country_name, founded_year, ufrn")
    .eq("status", "approved")
    .order("created_at", { ascending: false })
    .limit(30)
  return (data ?? []) as RegistryRow[]
}

async function getCategories(): Promise<{ category: string; count: number }[]> {
  const supabase = createReadClient()
  const { data } = await supabase
    .from("startups")
    .select("category")
    .eq("status", "approved")
    .not("category", "is", null)

  if (!data) return []
  const counts: Record<string, number> = {}
  data.forEach((r) => {
    if (r.category) counts[r.category] = (counts[r.category] ?? 0) + 1
  })
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 12)
    .map(([category, count]) => ({ category, count }))
}

// ── Logo component ─────────────────────────────────────────────────────────
function StartupLogo({ name, logo_url }: { name: string; logo_url?: string | null }) {
  if (logo_url) {
    return (
      <Image
        src={logo_url}
        alt={name}
        width={36}
        height={36}
        className="object-contain w-9 h-9"
      />
    )
  }
  return (
    <span className="text-base font-bold text-[#A89060]">
      {name.charAt(0).toUpperCase()}
    </span>
  )
}

// ── Page ───────────────────────────────────────────────────────────────────
export default async function RegistryHomePage() {
  const [stats, startups, categories] = await Promise.all([
    getStats(),
    getRecentStartups(),
    getCategories(),
  ])

  return (
    <div
      className="min-h-screen bg-[#FAFAF8]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datasetSchema) }}
      />

      {/* ── HEADER ── */}
      <header className="bg-white border-b-2 border-[#1C1C1C]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="UpForge" width={28} height={28} className="object-cover" />
            <div>
              <span
                className="text-xl font-bold tracking-tight text-[#1C1C1C]"
              >
                UP<span className="text-[#A89060]">FORGE</span>
              </span>
              <span className="ml-2 text-[9px] uppercase tracking-[0.25em] text-[#AAA]">
                Global Registry
              </span>
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest text-[#888]">
            <Link href="https://www.upforge.in" className="hover:text-[#1C1C1C] transition-colors">
              UpForge India
            </Link>
            <a
              href="https://www.upforge.in/submit"
              className="bg-[#1C1C1C] text-white px-4 py-1.5 hover:bg-[#333] transition-colors text-[10px] font-bold"
            >
              Submit Startup
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO — newspaper masthead style ── */}
      <div className="bg-white border-b border-[#E0DDD6]">
        <div className="max-w-5xl mx-auto px-6 py-12 text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#A89060] mb-4 font-bold">
            Open · Verified · Independent
          </p>
          <h1
            className="text-4xl sm:text-5xl font-bold text-[#1C1C1C] leading-tight mb-4"
          >
            The Global Startup Registry
          </h1>
          <p className="text-[15px] text-[#555] max-w-xl mx-auto leading-relaxed mb-8">
            Every startup listed here is manually verified and assigned a unique{" "}
            <strong>UpForge Registry Number (UFRN)</strong> — the internet's proof of existence
            for the companies building tomorrow.
          </p>

          {/* Stats bar */}
          <div className="inline-flex divide-x divide-[#E0DDD6] border border-[#E0DDD6] bg-[#F7F5F0]">
            {[
              { label: "Verified Startups", value: stats.total.toLocaleString("en-IN") },
              { label: "Sectors", value: stats.categories + "+" },
              { label: "Cities", value: stats.cities + "+" },
              { label: "Countries", value: "12+" },
            ].map((s) => (
              <div key={s.label} className="px-6 py-3 text-center">
                <p className="text-xl font-bold text-[#1C1C1C]">{s.value}</p>
                <p className="text-[9px] uppercase tracking-widest text-[#888] mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── MAIN GRID ── */}
      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* ── LEFT: Startup table ── */}
          <div className="lg:col-span-2">

            <div className="flex items-center justify-between mb-4">
              <h2 className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#888]">
                Recently Added · {stats.total.toLocaleString("en-IN")} total
              </h2>
              <a
                href="https://www.upforge.in/startup"
                className="text-[10px] uppercase tracking-widest text-[#A89060] hover:underline"
              >
                View all →
              </a>
            </div>

            {/* Table — Wikipedia infobox-inspired */}
            <div className="border border-[#D5D0C8] bg-white overflow-hidden">
              <table className="w-full text-[12px]">
                <thead>
                  <tr className="bg-[#1C1C1C] text-white">
                    <th className="px-4 py-2 text-left text-[9px] uppercase tracking-widest font-bold w-[40%]">
                      Company
                    </th>
                    <th className="px-4 py-2 text-left text-[9px] uppercase tracking-widest font-bold hidden sm:table-cell">
                      Sector
                    </th>
                    <th className="px-4 py-2 text-left text-[9px] uppercase tracking-widest font-bold hidden md:table-cell">
                      City
                    </th>
                    <th className="px-4 py-2 text-left text-[9px] uppercase tracking-widest font-bold">
                      UFRN
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F0EFEA]">
                  {startups.map((s) => (
                    <tr key={s.id} className="hover:bg-[#F7F5F0] transition-colors group">
                      <td className="px-4 py-3">
                        <a
                          href={`https://www.upforge.in/startup/${s.slug}`}
                          className="flex items-center gap-3"
                        >
                          <div className="w-9 h-9 border border-[#E8E4DC] bg-[#FAFAF8] flex items-center justify-center flex-shrink-0 overflow-hidden">
                            <StartupLogo name={s.name} logo_url={s.logo_url} />
                          </div>
                          <div>
                            <p className="font-bold text-[#1C1C1C] group-hover:underline leading-tight">
                              {s.name}
                            </p>
                            {s.description && (
                              <p className="text-[10px] text-[#888] mt-0.5 line-clamp-1 leading-tight max-w-[180px]">
                                {s.description}
                              </p>
                            )}
                          </div>
                        </a>
                      </td>
                      <td className="px-4 py-3 text-[#666] hidden sm:table-cell">
                        {s.category ?? "—"}
                      </td>
                      <td className="px-4 py-3 text-[#666] hidden md:table-cell">
                        {s.city ? `${s.city}, ${s.country_name ?? "India"}` : "—"}
                      </td>
                      <td className="px-4 py-3">
                        {s.ufrn ? (
                          <span className="font-mono text-[#A89060] text-[10px] font-bold">
                            {s.ufrn}
                          </span>
                        ) : (
                          <span className="text-[#CCC] text-[10px]">Pending</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://www.upforge.in/startup"
                className="inline-block border border-[#1C1C1C] px-8 py-3 text-[10px] uppercase tracking-widest font-bold text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors"
              >
                Browse Full Registry →
              </a>
            </div>
          </div>

          {/* ── RIGHT: Sidebar ── */}
          <div className="space-y-6">

            {/* What is UFRN */}
            <div className="border border-[#A89060] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#A89060] mb-3">
                What is a UFRN?
              </p>
              <p className="text-[12px] text-[#555] leading-relaxed mb-3">
                The <strong>UpForge Registry Number</strong> is every startup's official global ID.
                Format:{" "}
                <span className="font-mono text-[#A89060] text-[11px]">UF-2026-IND-00001</span>
              </p>
              <ul className="space-y-2 text-[11px] text-[#666]">
                <li className="flex gap-2">
                  <span className="text-[#A89060] font-bold flex-shrink-0">→</span>
                  Google indexes it as a unique identifier
                </li>
                <li className="flex gap-2">
                  <span className="text-[#A89060] font-bold flex-shrink-0">→</span>
                  Shareable on LinkedIn & investor decks
                </li>
                <li className="flex gap-2">
                  <span className="text-[#A89060] font-bold flex-shrink-0">→</span>
                  Third-party proof of existence
                </li>
              </ul>
              <a
                href="https://www.upforge.in/submit"
                className="mt-4 block text-center bg-[#A89060] text-white py-2.5 text-[10px] uppercase tracking-widest font-bold hover:bg-[#96804E] transition-colors"
              >
                Get Your UFRN →
              </a>
            </div>

            {/* Browse by sector */}
            <div className="border border-[#D5D0C8] bg-white p-5">
              <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#888] mb-4">
                Browse by Sector
              </p>
              <div className="space-y-1">
                {categories.map(({ category, count }) => (
                  <a
                    key={category}
                    href={`https://www.upforge.in/startups/${category.toLowerCase().replace(/\s+/g, "-").replace("/", "-")}`}
                    className="flex items-center justify-between py-1.5 border-b border-[#F0EFEA] last:border-0 group"
                  >
                    <span className="text-[12px] text-[#333] group-hover:text-[#A89060] transition-colors">
                      {category}
                    </span>
                    <span className="text-[10px] text-[#AAA] font-mono">{count}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* About this registry */}
            <div className="border border-[#D5D0C8] bg-[#F7F5F0] p-5">
              <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#888] mb-3">
                About this Registry
              </p>
              <p className="text-[11px] text-[#666] leading-relaxed">
                UpForge.org is the global open data vault of the startup world — independently
                maintained, free to access, and committed to verified data only. No paid listings.
                No sponsored rankings.
              </p>
              <div className="mt-4 space-y-1 text-[11px]">
                <a href="https://www.upforge.in/about" className="block text-[#1C1C1C] hover:underline">
                  About UpForge →
                </a>
                <a href="https://www.upforge.in/contact" className="block text-[#1C1C1C] hover:underline">
                  Contact the team →
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-[#E0DDD6] bg-white mt-8 py-8">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#AAA]">
          <div>
            <span className="font-bold text-[#1C1C1C] mr-1">UpForge</span>
            Global Registry · upforge.org
            <span className="mx-2 text-[#DDD]">·</span>
            <a href="https://www.upforge.in" className="hover:text-[#1C1C1C] transition-colors">
              India Hub at upforge.in
            </a>
          </div>
          <div className="flex gap-6">
            <a href="https://www.upforge.in/submit" className="hover:text-[#1C1C1C]">Submit Startup</a>
            <a href="https://www.upforge.in/privacy" className="hover:text-[#1C1C1C]">Privacy</a>
            <a href="https://www.upforge.in/terms" className="hover:text-[#1C1C1C]">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
