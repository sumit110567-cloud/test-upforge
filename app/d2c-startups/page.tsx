"use client"; // Is file ko Client Component banana sabse asan tareeka hai build error fix karne ke liye

import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronRight, ArrowUpRight } from "lucide-react"

// Note: Agar aapko SEO Metadata error aaye, toh Metadata ko layout.tsx mein move karein.
// Lekin filhal build pass karne ke liye ye simple code hai.

const COMPANIES = [
  {
    name: "Nykaa",
    nameShort: "Nykaa",
    founder: "Falguni Nayar",
    role: "Founder & CEO",
    city: "Mumbai",
    founded: "2012",
    valuation: "$2.5B",
    funding: "Bootstrapped to IPO",
    sector: "Beauty · Listed NSE",
    accent: "#C026D3",
    accentBg: "#FDF4FF",
    accentBorder: "#E879F9",
    slug: "nykaa",
    imgSrc: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
    initials: "FN",
    philosophy: "Category expertise + digital distribution beats pure technology",
    quote: "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop.",
    why: "Falguni Nayar left investment banking at 50 to build India's first profitable beauty unicorn. Nykaa listed in 2021 — the first woman-founded Indian company to IPO.",
    keyInsight: "Authenticity was the moat, not the catalog. Every D2C brand in beauty now competes on that same axis.",
    tags: ["IPO 2021", "First Woman-Founded Unicorn", "Beauty Vertical"],
  },
  {
    name: "Mamaearth",
    nameShort: "Mamaearth",
    founder: "Varun Alagh",
    role: "Co-founder & CEO",
    city: "Gurugram",
    founded: "2016",
    valuation: "$1.2B",
    funding: "$111M",
    sector: "Beauty · Listed NSE",
    accent: "#059669",
    accentBg: "#ECFDF5",
    accentBorder: "#6EE7B7",
    slug: "mamaearth",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    initials: "VA",
    philosophy: "Solve a problem you personally have",
    quote: "Ghazal and I could not find toxin-free products for our newborn. We built Mamaearth for every parent who had the same problem.",
    why: "Varun and Ghazal Alagh started Mamaearth from a deeply personal pain — no safe baby products for their newborn. They listed on NSE in 2023.",
    keyInsight: "Founding a brand on a problem you personally experienced creates authenticity that funded brands cannot replicate.",
    tags: ["Listed NSE", "House of Brands", "Clean Label"],
  },
  {
    name: "boAt",
    nameShort: "boAt",
    founder: "Aman Gupta",
    role: "Co-founder & CMO",
    city: "New Delhi",
    founded: "2016",
    valuation: "$1.6B",
    funding: "$177M",
    sector: "Consumer Electronics",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FCA5A5",
    slug: "boat",
    imgSrc: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    initials: "AG",
    philosophy: "In commoditised hardware, lifestyle branding is the moat",
    quote: "The product is the identity. boAt earphones are not just earphones — they are who you are when you wear them.",
    why: "boAt became India's #1 audio brand by volume through cultural branding. Aman Gupta became a household name via Shark Tank India.",
    keyInsight: "Specs are table stakes, culture is the moat. Brand identity is a D2C product feature.",
    tags: ["#1 Audio India", "Shark Tank Judge", "IPO Pipeline"],
  },
  {
    name: "Lenskart",
    nameShort: "Lenskart",
    founder: "Peyush Bansal",
    role: "Co-founder & CEO",
    city: "Gurugram",
    founded: "2010",
    valuation: "$4.5B",
    funding: "$1.8B",
    sector: "D2C Eyewear · Omnichannel",
    accent: "#0284C7",
    accentBg: "#EFF6FF",
    accentBorder: "#7DD3FC",
    slug: "lenskart",
    imgSrc: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
    initials: "PB",
    philosophy: "Vertical integration is the ultimate D2C moat",
    quote: "We manufacture our own frames, we own the stores, we control the customer experience. No marketplace can compete.",
    why: "Peyush Bansal built Lenskart into the world's largest vertically integrated eyewear brand with 2,000+ stores.",
    keyInsight: "Manufacturing your own products gives 60%+ gross margins and an uncopiable supply chain advantage.",
    tags: ["2,000+ Stores", "$4.5B Valuation", "Shark Tank Judge"],
  }
]

const ECOSYSTEM_STATS = [
  { v: "18",     l: "D2C Unicorns" },
  { v: "$800M+", l: "Raised in 2025" },
  { v: "500M",   l: "Online Shoppers" },
  { v: "$100B",  l: "D2C Market 2025" },
]

export default function D2CStartupsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "serif", color: "#1A1208" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap');
        .pf { font-family: 'Playfair Display', serif; }
        .company-grid { display: grid; grid-template-columns: 1fr 200px; border: 1.5px solid #1A1208; margin-bottom: 20px; background: #fff; }
        @media (max-width: 640px) { .company-grid { grid-template-columns: 1fr; } }
      `}</style>

      {/* Hero Section */}
      <header style={{ padding: "60px 20px", textAlign: "center", borderBottom: "3px solid #1A1208" }}>
        <h1 className="pf" style={{ fontSize: "3rem", marginBottom: "10px" }}>D2C Startups India 2026</h1>
        <p style={{ maxWidth: "700px", margin: "0 auto", opacity: 0.8 }}>
          Top brands, founders, and playbooks defining the direct-to-consumer revolution.
        </p>
      </header>

      <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 20px" }}>
        
        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "10px", marginBottom: "40px" }}>
          {ECOSYSTEM_STATS.map((s, i) => (
            <div key={i} style={{ background: "#1A1208", color: "#fff", padding: "20px", textAlign: "center" }}>
              <h2 style={{ fontSize: "2rem", color: "#C026D3" }}>{s.v}</h2>
              <p style={{ fontSize: "0.8rem", textTransform: "uppercase" }}>{s.l}</p>
            </div>
          ))}
        </div>

        {/* Profiles */}
        <section>
          {COMPANIES.map((c, i) => (
            <div key={i} className="company-grid">
              <div style={{ padding: "30px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
                  <h3 className="pf" style={{ fontSize: "1.5rem" }}>{c.name}</h3>
                  <span style={{ fontSize: "0.7rem", padding: "2px 8px", border: "1px solid", borderRadius: "4px" }}>{c.sector}</span>
                </div>
                <p style={{ fontSize: "0.95rem", marginBottom: "20px", lineHeight: "1.6" }}>{c.why}</p>
                <blockquote style={{ borderLeft: "4px solid #C026D3", paddingLeft: "15px", fontStyle: "italic", marginBottom: "20px" }}>
                  "{c.quote}"
                </blockquote>
                <div style={{ fontSize: "0.85rem", fontWeight: "bold" }}>Founder: {c.founder}</div>
              </div>

              {/* Image Section - Simplified to avoid build error */}
              <div style={{ background: c.accent, padding: "20px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", color: "#fff" }}>
                <div style={{ width: "100px", height: "100px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2rem", marginBottom: "10px" }}>
                  {c.initials}
                </div>
                <div style={{ fontWeight: "bold" }}>{c.name}</div>
                <div style={{ fontSize: "0.7rem", opacity: 0.8 }}>{c.valuation}</div>
              </div>
            </div>
          ))}
        </section>

        {/* Footer CTA */}
        <footer style={{ marginTop: "60px", padding: "40px", background: "#1A1208", color: "#fff", textAlign: "center" }}>
          <h2 className="pf" style={{ fontSize: "1.8rem", marginBottom: "10px" }}>Want to list your D2C brand?</h2>
          <p style={{ marginBottom: "20px", opacity: 0.7 }}>Get verified and join India's top startup registry.</p>
          <Link href="/submit" style={{ display: "inline-block", background: "#C026D3", color: "#fff", padding: "12px 24px", textDecoration: "none", fontWeight: "bold" }}>
            Submit Now
          </Link>
        </footer>
      </main>
    </div>
  )
}
