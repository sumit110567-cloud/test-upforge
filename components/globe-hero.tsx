"use client"

// components/globe-hero.tsx — EDITORIAL REDESIGN v3
// FT.com / Economist inspired: ivory background, maroon/burgundy, serif typography
// Pure SVG globe, no external libs

import { useEffect, useRef, useState } from "react"

const CITIES = [
  { name: "Bangalore", lat: 12.97, lng: 77.59, region: "India" },
  { name: "Mumbai", lat: 19.07, lng: 72.87, region: "India" },
  { name: "San Francisco", lat: 37.77, lng: -122.41, region: "US" },
  { name: "London", lat: 51.5, lng: -0.12, region: "UK" },
  { name: "Singapore", lat: 1.35, lng: 103.82, region: "SEA" },
  { name: "Dubai", lat: 25.2, lng: 55.27, region: "ME" },
  { name: "Nairobi", lat: -1.29, lng: 36.82, region: "Africa" },
  { name: "São Paulo", lat: -23.55, lng: -46.63, region: "LatAm" },
  { name: "Berlin", lat: 52.52, lng: 13.4, region: "Europe" },
  { name: "Tokyo", lat: 35.68, lng: 139.69, region: "Asia" },
  { name: "Sydney", lat: -33.86, lng: 151.2, region: "Pacific" },
  { name: "Delhi", lat: 28.61, lng: 77.2, region: "India" },
]

function project(lat: number, lng: number, rotationDeg: number) {
  const CX = 200, CY = 200, RX = 175, RY = 175
  const latR = (lat * Math.PI) / 180
  const lngR = ((lng + rotationDeg) * Math.PI) / 180
  const x = CX + RX * Math.cos(latR) * Math.sin(lngR)
  const y = CY - RY * Math.sin(latR)
  const visible = Math.cos(latR) * Math.cos(lngR) > -0.1
  return { x, y, visible }
}

function buildMeridians(rotation: number, count = 10) {
  const lines: string[] = []
  for (let i = 0; i < count; i++) {
    const lng = (i / count) * 360 - 180
    const pts: string[] = []
    for (let lat = -80; lat <= 80; lat += 5) {
      const { x, y, visible } = project(lat, lng, rotation)
      if (visible) pts.push(`${pts.length === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
    }
    if (pts.length > 1) lines.push(pts.join(" "))
  }
  return lines
}

function buildParallels(rotation: number, count = 7) {
  const lines: string[] = []
  for (let i = 1; i < count; i++) {
    const lat = (i / count) * 180 - 90
    const pts: string[] = []
    let first = true
    for (let lng = -180; lng <= 180; lng += 4) {
      const { x, y, visible } = project(lat, lng, rotation)
      if (visible) {
        pts.push(`${first ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
        first = false
      } else { first = true }
    }
    if (pts.length > 1) lines.push(pts.join(" "))
  }
  return lines
}

export function GlobeHero({ isOrg }: { isOrg?: boolean }) {
  const [rotation, setRotation] = useState(0)
  const [activeCityIndex, setActiveCityIndex] = useState(0)
  const [mounted, setMounted] = useState(false)
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number>(0)

  useEffect(() => {
    setMounted(true)
    const animate = (ts: number) => {
      const dt = ts - lastRef.current
      lastRef.current = ts
      setRotation((r) => (r + dt * 0.006) % 360)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  useEffect(() => {
    const id = setInterval(() => setActiveCityIndex((i) => (i + 1) % CITIES.length), 2500)
    return () => clearInterval(id)
  }, [])

  const meridians = buildMeridians(rotation)
  const parallels = buildParallels(rotation)
  const projectedCities = CITIES.map((c) => ({ ...c, ...project(c.lat, c.lng, rotation) }))
  const activeCity = CITIES[activeCityIndex]
  const activeCityProj = project(activeCity.lat, activeCity.lng, rotation)

  return (
    <section
      className="globe-hero-editorial relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      style={{ background: "linear-gradient(160deg, #faf7f2 0%, #f5f0e8 40%, #f0ebe0 100%)" }}
    >
      {/* Top rule */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#8b1a1a]" />

      {/* Faint editorial grid texture */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none" style={{
        backgroundImage: "linear-gradient(#8b1a1a 1px, transparent 1px), linear-gradient(90deg, #8b1a1a 1px, transparent 1px)",
        backgroundSize: "80px 80px"
      }} />

      {/* Pull quote decorative marks */}
      <div className="absolute top-24 left-8 text-[120px] leading-none text-[#8b1a1a] opacity-[0.06] font-serif select-none pointer-events-none">"</div>
      <div className="absolute bottom-24 right-8 text-[120px] leading-none text-[#8b1a1a] opacity-[0.06] font-serif select-none pointer-events-none">"</div>

      {/* Dateline bar */}
      <div className="absolute top-6 left-0 right-0 flex items-center justify-center">
        <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase text-[#8b1a1a] font-medium" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
          <span>Est. 2024</span>
          <span className="w-8 h-px bg-[#8b1a1a] opacity-40" />
          <span>Global Startup Registry</span>
          <span className="w-8 h-px bg-[#8b1a1a] opacity-40" />
          <span>5,000+ Verified</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-8 py-28">

        {/* LEFT — Editorial text */}
        <div className="flex-1 text-center lg:text-left lg:pr-16 max-w-2xl">

          {/* Section label */}
          <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
            <div className="h-px w-8 bg-[#8b1a1a]" />
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#8b1a1a] font-semibold" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
              {isOrg ? "The Independent Registry" : "The Founder Chronicle · 2026"}
            </span>
          </div>

          {/* Main headline — big editorial serif */}
          <h1
            className="leading-[1.0] tracking-tight mb-8"
            style={{
              fontFamily: "'Times New Roman', Georgia, 'Palatino Linotype', serif",
              fontSize: "clamp(42px, 6vw, 80px)",
              color: "#1a0a0a",
              fontWeight: 700,
            }}
          >
            {isOrg ? (
              <>Where Startups<br />
              <span style={{ color: "#8b1a1a", fontStyle: "italic" }}>Prove They Exist.</span></>
            ) : (
              <>Stories That<br />
              <span style={{ color: "#8b1a1a", fontStyle: "italic" }}>Shape Founders.</span></>
            )}
          </h1>

          {/* Horizontal rule */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            <div className="h-px flex-1 max-w-[60px] bg-[#8b1a1a]" />
            <div className="w-1.5 h-1.5 bg-[#8b1a1a] rotate-45" />
            <div className="h-px flex-1 max-w-[60px] bg-[#8b1a1a]" />
          </div>

          {/* Body copy */}
          <p
            className="text-lg leading-[1.75] mb-10 max-w-lg mx-auto lg:mx-0"
            style={{
              fontFamily: "'Times New Roman', Georgia, serif",
              color: "#3d2b2b",
            }}
          >
            {isOrg
              ? "The world's first independent startup registry. Every company is manually verified and assigned a permanent UpForge Registry Number — the global standard for startup identity."
              : "Deep research, verified data, and real lessons from the founders building India's next generation of unicorn companies. Updated weekly by our editorial team."}
          </p>

          {/* Stats — editorial table style */}
          <div
            className="grid grid-cols-3 gap-0 mb-10 border-t border-b"
            style={{ borderColor: "#c9b99a" }}
          >
            {[
              { n: "5,000+", l: "Verified Startups" },
              { n: "50+", l: "Countries" },
              { n: "UFRN™", l: "Registry Standard" },
            ].map((s, i) => (
              <div
                key={s.l}
                className="py-5 text-center"
                style={{
                  borderRight: i < 2 ? "1px solid #c9b99a" : "none",
                }}
              >
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#8b1a1a" }}
                >
                  {s.n}
                </div>
                <div className="text-[10px] tracking-[0.15em] uppercase text-[#8b6a6a]" style={{ fontFamily: "'Times New Roman', serif" }}>
                  {s.l}
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/startup"
              className="editorial-btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: "#8b1a1a",
                color: "#faf7f2",
                fontFamily: "'Times New Roman', Georgia, serif",
                letterSpacing: "0.05em",
                border: "1px solid #8b1a1a",
              }}
            >
              Explore Registry
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold transition-all duration-200"
              style={{
                background: "transparent",
                color: "#8b1a1a",
                fontFamily: "'Times New Roman', Georgia, serif",
                letterSpacing: "0.05em",
                border: "1px solid #8b1a1a",
              }}
            >
              List Your Startup
            </a>
          </div>
        </div>

        {/* RIGHT — Globe, now with maroon/cream palette */}
        <div className="flex-1 flex items-center justify-center relative">

          {/* Active city label */}
          {mounted && activeCityProj.visible && (
            <div
              className="absolute z-20 pointer-events-none transition-all duration-700"
              style={{
                left: `calc(50% + ${(activeCityProj.x - 200) * 1.15}px + 18px)`,
                top: `calc(50% + ${(activeCityProj.y - 200) * 1.15}px - 12px)`,
              }}
            >
              <div
                className="text-xs font-semibold px-3 py-1.5 whitespace-nowrap shadow-lg"
                style={{
                  background: "#faf7f2",
                  color: "#8b1a1a",
                  border: "1px solid #c9b99a",
                  fontFamily: "'Times New Roman', Georgia, serif",
                }}
              >
                {activeCity.name} <span style={{ color: "#8b6a6a", fontWeight: 400 }}>· {activeCity.region}</span>
              </div>
            </div>
          )}

          <svg
            viewBox="0 0 400 400"
            className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px]"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="eGlobeBase" cx="38%" cy="32%" r="65%">
                <stop offset="0%" stopColor="#faf7f2" />
                <stop offset="70%" stopColor="#f0e8dc" />
                <stop offset="100%" stopColor="#e8ddd0" />
              </radialGradient>
              <radialGradient id="eGlobeShade" cx="70%" cy="70%" r="50%">
                <stop offset="0%" stopColor="#3d1515" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#3d1515" stopOpacity="0" />
              </radialGradient>
              <filter id="eCityGlow">
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <filter id="eGlobeShadow">
                <feDropShadow dx="12" dy="16" stdDeviation="20" floodColor="#3d1515" floodOpacity="0.15" />
              </filter>
            </defs>

            {/* Shadow */}
            <ellipse cx="220" cy="370" rx="130" ry="12" fill="#3d1515" opacity="0.08" />

            {/* Base sphere */}
            <circle cx="200" cy="200" r="175" fill="url(#eGlobeBase)" filter="url(#eGlobeShadow)" />
            <circle cx="200" cy="200" r="175" fill="url(#eGlobeShade)" />

            {/* Grid lines — maroon, subtle */}
            {meridians.map((d, i) => (
              <path key={`m${i}`} d={d} stroke="#8b1a1a" strokeWidth="0.6" fill="none" opacity="0.18" />
            ))}
            {parallels.map((d, i) => (
              <path key={`p${i}`} d={d} stroke="#8b1a1a" strokeWidth="0.6" fill="none" opacity="0.14" />
            ))}

            {/* City dots */}
            {projectedCities.map((c, i) => {
              if (!c.visible) return null
              const isActive = i === activeCityIndex
              return (
                <g key={c.name}>
                  {isActive && (
                    <circle cx={c.x} cy={c.y} r="8" fill="#8b1a1a" opacity="0.15">
                      <animate attributeName="r" values="4;12;4" dur="2.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.2;0;0.2" dur="2.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={c.x} cy={c.y}
                    r={isActive ? 4.5 : 2.5}
                    fill={isActive ? "#8b1a1a" : "#c9836e"}
                    opacity={isActive ? 1 : 0.6}
                    filter={isActive ? "url(#eCityGlow)" : undefined}
                  />
                </g>
              )
            })}

            {/* Rim */}
            <circle cx="200" cy="200" r="175" fill="none" stroke="#8b1a1a" strokeWidth="1" opacity="0.25" />
            {/* Specular highlight */}
            <ellipse cx="148" cy="132" rx="52" ry="28" fill="white" opacity="0.22" transform="rotate(-35 148 132)" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.25em] uppercase text-[#8b6a6a]" style={{ fontFamily: "'Times New Roman', serif" }}>
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-[#8b1a1a]/40 to-transparent" style={{
          animation: "editorialBounce 2s ease-in-out infinite"
        }} />
      </div>

      <style jsx>{`
        @keyframes editorialBounce {
          0%, 100% { opacity: 0.4; transform: scaleY(1); }
          50% { opacity: 0.9; transform: scaleY(1.15); }
        }
        .editorial-btn-primary:hover {
          background: #6b1212 !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(139,26,26,0.25);
        }
      `}</style>
    </section>
  )
}
