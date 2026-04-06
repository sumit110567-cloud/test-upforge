// app/page.tsx
// THE UPFORGE GLOBAL INTELLIGENCE REDESIGN 
// Competitive Stance: FT.com meets Bloomberg Terminal

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"
import Link from "next/link"

// ---------------------------------------------------------------------------
// DATA & DOMAIN LOGIC
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers()
  const context = headersList.get("x-upforge-domain")
  if (context === "org" || context === "in") return context as "org" | "in"
  const host = headersList.get("host") ?? ""
  return host.includes("upforge.org") ? "org" : "in"
}

async function getRegistryStats() {
  try {
    const supabase = await createClient()
    const { count } = await supabase.from("startups").select("*", { count: "exact", head: true }).eq("status", "approved")
    return { count: count ?? 5240, date: new Date().toISOString().split("T")[0] }
  } catch {
    return { count: 5240, date: new Date().toISOString().split("T")[0] }
  }
}

// ---------------------------------------------------------------------------
// SEO & AUTHORITY METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const title = isOrg ? "UpForge Global | The International Startup Registry" : "UpForge India | The Registry Chronicles"
  
  return {
    title,
    description: "The world's first manually verified startup registry. Every company assigned a permanent UFRN. Peer-reviewed editorial intelligence.",
    openGraph: {
      type: "website",
      images: [{ url: "/og-authority.png", width: 1200, height: 630 }],
    },
    alternates: {
      canonical: isOrg ? "https://upforge.org" : "https://upforge.in",
    }
  }
}

// ---------------------------------------------------------------------------
// THE GLOBAL INTELLIGENCE INTERFACE
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg = domain === "org"
  const { count, date } = await getRegistryStats()

  return (
    <main className="upforge-intelligence-layer">
      
      {/* 1. THE MASTHEAD: FT/ECONOMIST STYLE */}
      <header className="global-header">
        <div className="header-top-bar">
          <span className="timestamp">LATEST UPDATE: {date} • EDITION 4.0</span>
          <div className="global-nodes">
            <span className={isOrg ? "active-node" : ""}>GLOBAL.ORG</span>
            <span className={!isOrg ? "active-node" : ""}>INDIA.IN</span>
          </div>
        </div>
        
        <nav className="main-nav">
          <div className="brand-group">
            <h1 className="brand-logo">UPFORGE</h1>
            <span className="brand-tagline">The Registry of Record</span>
          </div>
          <Link href="/registry" className="cta-button-primary">
            ACCESS THE REGISTRY <span className="arrow">→</span>
          </Link>
        </nav>
      </header>

      {/* 2. THE HERO: AUTHORITATIVE INTENT */}
      <section className="hero-viewport">
        <div className="hero-content">
          <h2 className="super-headline">
            {isOrg ? "Verifying the World’s New Economy." : "The Chronicles of Indian Enterprise."}
          </h2>
          <p className="hero-subtext">
            UpForge is the independent global standard for startup verification. We replace algorithmic noise with editorial rigor, assigning every verified entity a permanent <strong>UFRN (UpForge Registry Number)</strong>.
          </p>
          
          <div className="data-ribbon">
            <div className="data-point">
              <span className="data-value">{count.toLocaleString()}</span>
              <span className="data-label">VERIFIED ENTITIES</span>
            </div>
            <div className="data-point">
              <span className="data-value">100%</span>
              <span className="data-label">MANUAL AUDIT</span>
            </div>
            <div className="data-point">
              <span className="data-value">UFRN</span>
              <span className="data-label">SOVEREIGN ID SYSTEM</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE CHRONICLES: BOOK-STYLE READING EXPERIENCE */}
      <section className="stories-reader-container">
        <div className="section-meta">
          <span className="eyebrow">THE REGISTRY CHRONICLES</span>
          <h3 className="section-title">Deep-Dive Intelligence</h3>
        </div>

        {/* This component handles the Lateral "Next/Prev" Reading UI */}
        <div className="reader-wrapper">
          <FounderChronicleClient
            founders={FOUNDERS}
            // We've rebranded internal links to be "Registry Actions"
            internalLinks={[
              { l: "Global Registry", h: "/registry", desc: "Search the verified database" },
              { l: "UFRN Protocol", h: "/ufrn", desc: "Our verification standard" },
              { l: "Intelligence", h: "/blog", desc: "Market analysis & reports" },
              { l: "Submit Entity", h: "/submit", desc: "Apply for UFRN" },
            ]}
          />
          
          {/* Visual Cues for Book Reading Mode */}
          <div className="reader-controls-overlay">
            <div className="nav-hint left">← Swipe to Explore</div>
            <div className="nav-hint right">Swipe for Next Story →</div>
          </div>
        </div>
      </section>

      {/* 4. THE ACTION FOOTER: CONVERSION TO REGISTRY */}
      <section className="registry-cta-section">
        <div className="cta-card">
          <div className="cta-text">
            <h3>Beyond the Stories.</h3>
            <p>Access the full raw data. Filter by funding, UFRN, sector, and verification tier.</p>
          </div>
          <Link href="/registry" className="mega-cta">
            EXPLORE THE FULL REGISTRY
          </Link>
        </div>
      </section>

      {/* 5. GLOBAL FOOTER */}
      <footer className="intelligence-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h4>UPFORGE</h4>
            <p>© 2026 UpForge Global. All rights reserved. UFRN is a registered trademark.</p>
          </div>
          <div className="footer-links">
            <Link href="/registry">Registry</Link>
            <Link href="/ufrn">Verification Standards</Link>
            <Link href="/about">Ethical Statement</Link>
            <Link href="/contact">Institutional Access</Link>
          </div>
        </div>
      </footer>

      {/* ---------------------------------------------------------------------------
          STYLES: GLOBAL AUTHORITY CSS (FT/FORBES INFLUENCE)
      --------------------------------------------------------------------------- */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --paper-white: #FCFAFA;
          --ink-black: #121212;
          --ft-pink: #FFF1E5; /* The Financial Times classic feel */
          --upforge-gold: #B89643;
          --border-muted: rgba(18, 18, 18, 0.1);
          --serif: 'Georgia', serif;
          --sans: 'Inter', -apple-system, sans-serif;
        }

        .upforge-intelligence-layer {
          background: var(--paper-white);
          color: var(--ink-black);
          font-family: var(--sans);
          overflow-x: hidden;
        }

        /* 1. Header Styles */
        .global-header {
          border-bottom: 3px solid var(--ink-black);
          padding: 1rem 2rem;
          background: white;
        }
        .header-top-bar {
          display: flex;
          justify-content: space-between;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 1px;
          border-bottom: 1px solid var(--border-muted);
          padding-bottom: 0.5rem;
          margin-bottom: 1rem;
        }
        .active-node { color: var(--upforge-gold); }
        .main-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .brand-logo {
          font-size: clamp(1.5rem, 5vw, 2.5rem);
          font-family: var(--serif);
          font-weight: 900;
          letter-spacing: -1px;
          margin: 0;
        }
        .brand-tagline { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 2px; }

        /* 2. Hero Section */
        .hero-viewport {
          padding: clamp(3rem, 10vh, 8rem) 2rem;
          max-width: 1200px;
          margin: 0 auto;
          text-align: center;
        }
        .super-headline {
          font-family: var(--serif);
          font-size: clamp(2.5rem, 8vw, 4.5rem);
          line-height: 1.05;
          margin-bottom: 2rem;
        }
        .hero-subtext {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          max-width: 800px;
          margin: 0 auto 3rem;
          color: #444;
          line-height: 1.6;
        }
        .data-ribbon {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          border-top: 1px solid var(--border-muted);
          border-bottom: 1px solid var(--border-muted);
          padding: 2rem 0;
        }
        .data-value { display: block; font-size: 2.5rem; font-family: var(--serif); font-weight: bold; }
        .data-label { font-size: 0.75rem; letter-spacing: 2px; color: #777; }

        /* 3. Reader Section */
        .stories-reader-container {
          background: #fff;
          padding: 4rem 0;
        }
        .section-meta { text-align: center; margin-bottom: 3rem; }
        .eyebrow { color: var(--upforge-gold); font-weight: 700; letter-spacing: 3px; font-size: 0.8rem; }
        .section-title { font-family: var(--serif); font-size: 2.5rem; margin-top: 0.5rem; }
        
        .reader-wrapper {
          position: relative;
          background: #fff;
        }
        /* Mobile-optimized reader overlay */
        .reader-controls-overlay {
          display: none;
          position: absolute;
          bottom: 20px;
          width: 100%;
          justify-content: space-between;
          padding: 0 1rem;
          pointer-events: none;
          opacity: 0.6;
        }
        @media (max-width: 768px) {
          .reader-controls-overlay { display: flex; }
          .nav-hint { font-size: 0.65rem; background: var(--ink-black); color: white; padding: 4px 10px; border-radius: 20px; }
        }

        /* 4. Conversion Area */
        .registry-cta-section {
          padding: 6rem 2rem;
          background: var(--ink-black);
          color: white;
          text-align: center;
        }
        .cta-card {
          max-width: 900px;
          margin: 0 auto;
        }
        .mega-cta {
          display: inline-block;
          margin-top: 2rem;
          padding: 1.5rem 3rem;
          background: var(--upforge-gold);
          color: white;
          font-weight: 700;
          text-decoration: none;
          font-size: 1.2rem;
          transition: transform 0.2s ease;
        }
        .mega-cta:hover { transform: scale(1.05); }

        /* 5. Footer */
        .intelligence-footer {
          padding: 4rem 2rem;
          border-top: 1px solid var(--border-muted);
          font-size: 0.9rem;
        }
        .footer-grid {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a { text-decoration: none; color: inherit; font-weight: 600; }

        /* Buttons */
        .cta-button-primary {
          background: var(--ink-black);
          color: white;
          padding: 0.8rem 1.5rem;
          text-decoration: none;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        /* Image Optimization for Mobile */
        img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
          content-visibility: auto;
        }
      ` }} />
    </main>
  )
}
