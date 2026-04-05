// components/founder-chronicle-client.tsx
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

type Founder = {
  name: string
  role: string
  company: string
  slug: string
  image?: string
  valuation?: string
  funding?: string
  description: string
}

type LinkItem = {
  l: string
  h: string
  desc?: string
}

type FounderChronicleClientProps = {
  founders: Founder[]
  internalLinks: LinkItem[]
  footerLinks: LinkItem[]
}

export function FounderChronicleClient({ founders, internalLinks, footerLinks }: FounderChronicleClientProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="founder-chronicle">
      {/* Global Styles — Premium Magazine Aesthetic */}
      <style jsx global>{`
        :root {
          --ft-navy: #0a2540;
          --ft-gold: #d4af37;
          --ft-silver: #e8ecef;
          --ft-charcoal: #2c3e50;
          --ft-ash: #f8f9fa;
          --forbes-serif: 'Cormorant Garamond', 'Times New Roman', Georgia, serif;
          --ft-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: var(--ft-sans);
          background: white;
          color: #1a1a1a;
          line-height: 1.5;
          scroll-behavior: smooth;
        }

        /* Premium Header */
        .premium-header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .premium-header.scrolled {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
          border-bottom-color: rgba(212, 175, 55, 0.3);
        }

        .header-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo-area h1 {
          font-family: var(--forbes-serif);
          font-size: 1.75rem;
          font-weight: 600;
          letter-spacing: -0.02em;
          background: linear-gradient(135deg, var(--ft-navy) 0%, var(--ft-charcoal) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .logo-badge {
          font-size: 0.7rem;
          color: var(--ft-gold);
          letter-spacing: 0.5px;
          font-weight: 500;
        }

        .nav-links {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-links a {
          text-decoration: none;
          color: var(--ft-navy);
          font-weight: 500;
          font-size: 0.9rem;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: var(--ft-gold);
        }

        .cta-button {
          background: var(--ft-navy);
          color: white !important;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          font-weight: 600;
        }

        .cta-button:hover {
          background: var(--ft-charcoal);
          transform: translateY(-1px);
        }

        /* Hero Section — Forbes/FT Inspired */
        .hero {
          background: linear-gradient(135deg, var(--ft-ash) 0%, white 100%);
          border-bottom: 1px solid #eef2f5;
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 2rem 5rem;
          text-align: center;
        }

        .hero-eyebrow {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 3px;
          color: var(--ft-gold);
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .hero h2 {
          font-family: var(--forbes-serif);
          font-size: 3.5rem;
          font-weight: 500;
          line-height: 1.2;
          max-width: 900px;
          margin: 0 auto 1rem;
          color: var(--ft-navy);
        }

        .hero-lead {
          font-size: 1.25rem;
          color: #4a5568;
          max-width: 700px;
          margin: 0 auto 2rem;
          line-height: 1.6;
        }

        .trust-badge {
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 100px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          font-size: 0.85rem;
        }

        .trust-badge span {
          color: var(--ft-gold);
          font-weight: 700;
        }

        /* Stats Row */
        .stats-row {
          max-width: 1400px;
          margin: -2rem auto 0;
          padding: 2rem;
          display: flex;
          justify-content: center;
          gap: 4rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
          position: relative;
          z-index: 10;
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-family: var(--forbes-serif);
          font-size: 2rem;
          font-weight: 700;
          color: var(--ft-navy);
        }

        .stat-label {
          font-size: 0.8rem;
          color: #666;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Founder Grid — Magazine Layout */
        .founders-section {
          max-width: 1400px;
          margin: 5rem auto;
          padding: 0 2rem;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-header h3 {
          font-family: var(--forbes-serif);
          font-size: 2rem;
          font-weight: 500;
          color: var(--ft-navy);
        }

        .section-header p {
          color: #666;
          margin-top: 0.5rem;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 2rem;
        }

        .founder-card {
          background: white;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #eef2f5;
        }

        .founder-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border-color: var(--ft-gold);
        }

        .card-image {
          height: 200px;
          background: linear-gradient(135deg, var(--ft-silver), white);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 700;
          color: var(--ft-navy);
          font-family: var(--forbes-serif);
        }

        .card-content {
          padding: 1.5rem;
        }

        .card-name {
          font-family: var(--forbes-serif);
          font-size: 1.35rem;
          font-weight: 600;
          color: var(--ft-navy);
          margin-bottom: 0.25rem;
        }

        .card-role {
          font-size: 0.85rem;
          color: var(--ft-gold);
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .card-company {
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        .card-desc {
          font-size: 0.9rem;
          color: #4a5568;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .card-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.75rem;
          color: #888;
          border-top: 1px solid #eef2f5;
          padding-top: 0.75rem;
          margin-top: 0.5rem;
        }

        .read-link {
          display: inline-block;
          margin-top: 0.75rem;
          color: var(--ft-navy);
          text-decoration: none;
          font-weight: 600;
          font-size: 0.85rem;
        }

        .read-link:hover {
          color: var(--ft-gold);
        }

        /* Internal Links Section */
        .resources-section {
          background: var(--ft-ash);
          padding: 4rem 2rem;
          border-top: 1px solid #eef2f5;
        }

        .resources-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 2rem;
        }

        .resource-card {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
          border: 1px solid #eef2f5;
        }

        .resource-card:hover {
          border-color: var(--ft-gold);
          transform: translateY(-2px);
        }

        .resource-title {
          font-weight: 700;
          color: var(--ft-navy);
          margin-bottom: 0.5rem;
        }

        .resource-desc {
          font-size: 0.85rem;
          color: #666;
        }

        /* Footer */
        .premium-footer {
          background: var(--ft-navy);
          color: white;
          padding: 3rem 2rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.85rem;
        }

        .footer-links a:hover {
          color: var(--ft-gold);
        }

        .copyright {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 768px) {
          .hero h2 { font-size: 2rem; }
          .stats-row { flex-direction: column; gap: 1rem; align-items: center; }
          .nav-links { display: none; }
          .founder-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Premium Header */}
      <header className={`premium-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          <div className="logo-area">
            <h1>UpForge</h1>
            <div className="logo-badge">GLOBAL REGISTRY · UFRN</div>
          </div>
          <div className="nav-links">
            {internalLinks.slice(0, 3).map((link, i) => (
              <Link key={i} href={link.h}>{link.l}</Link>
            ))}
            <Link href="/submit" className="cta-button">Submit →</Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-eyebrow">THE AUTHORITATIVE SOURCE</div>
          <h2>Global Startup Registry &<br />Founder Intelligence</h2>
          <p className="hero-lead">
            Every startup manually verified. Every founder profiled.<br />
            The UpForge Registry Number (UFRN) — global proof of existence.
          </p>
          <div className="trust-badge">
            ✓ <span>5,000+</span> Verified Startups · ✓ <span>UFRN</span> Certified · ✓ Open & Free
          </div>
        </div>
      </section>

      {/* Founder Grid — The Chronicle */}
      <section className="founders-section">
        <div className="section-header">
          <h3>The Founder Chronicle 2026</h3>
          <p>Exclusive deep-dive profiles of the world's most influential startup builders</p>
        </div>
        <div className="founder-grid">
          {founders.map((founder, idx) => (
            <article key={idx} className="founder-card">
              <div className="card-image">
                {founder.name.charAt(0)}
              </div>
              <div className="card-content">
                <div className="card-name">{founder.name}</div>
                <div className="card-role">{founder.role}</div>
                <div className="card-company">{founder.company}</div>
                <p className="card-desc">{founder.description.substring(0, 120)}...</p>
                <div className="card-meta">
                  {founder.valuation && <span>💰 {founder.valuation}</span>}
                  {founder.funding && <span>💵 {founder.funding}</span>}
                </div>
                <Link href={`/startup/${founder.slug}`} className="read-link">
                  Read full profile →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Resources Section */}
      <section className="resources-section">
        <div className="resources-container">
          {internalLinks.map((link, i) => (
            <Link key={i} href={link.h} className="resource-card">
              <div className="resource-title">{link.l}</div>
              {link.desc && <div className="resource-desc">{link.desc}</div>}
            </Link>
          ))}
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="premium-footer">
        <div className="footer-container">
          <div className="footer-links">
            {footerLinks.map((link, i) => (
              <Link key={i} href={link.h}>{link.l}</Link>
            ))}
          </div>
          <div className="copyright">
            © 2026 UpForge · Global Startup Registry · UFRN™
          </div>
        </div>
      </footer>
    </div>
  )
}
