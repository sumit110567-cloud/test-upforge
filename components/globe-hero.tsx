"use client"

// components/globe-hero.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Animated globe hero — pure CSS/SVG, no canvas, no external lib.
// Represents UpForge as a GLOBAL platform.
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useRef, useState } from "react"

// Cities on the globe (lat/lng → projected x/y for display)
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

// Project lat/lng to x,y on a 400×400 ellipse (simple orthographic-like)
function project(lat: number, lng: number, rotationDeg: number): { x: number; y: number; visible: boolean } {
  const CX = 200, CY = 200, RX = 180, RY = 180
  const latR = (lat * Math.PI) / 180
  const lngR = ((lng + rotationDeg) * Math.PI) / 180

  const x = CX + RX * Math.cos(latR) * Math.sin(lngR)
  const y = CY - RY * Math.sin(latR)
  const visible = Math.cos(latR) * Math.cos(lngR) > -0.15 // slightly past horizon

  return { x, y, visible }
}

// Generate latitude/longitude lines for the globe wireframe
function buildMeridians(rotation: number, count = 12) {
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

function buildParallels(rotation: number, count = 8) {
  const lines: string[] = []
  for (let i = 1; i < count; i++) {
    const lat = (i / count) * 180 - 90
    const pts: string[] = []
    let first = true
    for (let lng = -180; lng <= 180; lng += 5) {
      const { x, y, visible } = project(lat, lng, rotation)
      if (visible) {
        pts.push(`${first ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`)
        first = false
      } else {
        first = true
      }
    }
    if (pts.length > 1) lines.push(pts.join(" "))
  }
  return lines
}

export function GlobeHero({ isOrg }: { isOrg?: boolean }) {
  const [rotation, setRotation] = useState(0)
  const [activeCityIndex, setActiveCityIndex] = useState(0)
  const rafRef = useRef<number | null>(null)
  const lastRef = useRef<number>(0)

  useEffect(() => {
    const animate = (ts: number) => {
      const dt = ts - lastRef.current
      lastRef.current = ts
      setRotation((r) => (r + dt * 0.008) % 360)
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [])

  // Cycle active city every 2s
  useEffect(() => {
    const id = setInterval(() => {
      setActiveCityIndex((i) => (i + 1) % CITIES.length)
    }, 2000)
    return () => clearInterval(id)
  }, [])

  const meridians = buildMeridians(rotation)
  const parallels = buildParallels(rotation)
  const projectedCities = CITIES.map((c) => ({ ...c, ...project(c.lat, c.lng, rotation) }))
  const activeCity = CITIES[activeCityIndex]
  const activeCityProj = project(activeCity.lat, activeCity.lng, rotation)

  return (
    <section className="globe-hero relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#050b18] px-4">
      {/* Background starfield */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 60 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() > 0.9 ? "2px" : "1px",
              height: Math.random() > 0.9 ? "2px" : "1px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.5,
              animation: `twinkle ${2 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Glow behind globe */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Content layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-0 py-20">

        {/* LEFT — text */}
        <div className="flex-1 text-center lg:text-left lg:pr-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold px-4 py-2 rounded-full mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            {isOrg ? "Global Startup Registry" : "The Founder Chronicle 2026"}
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
            {isOrg ? (
              <>Where startups<br /><span className="text-blue-400">prove they exist.</span></>
            ) : (
              <>Stories that<br /><span className="text-blue-400">shape founders.</span></>
            )}
          </h1>

          <p className="text-blue-200/60 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10">
            {isOrg
              ? "Every startup deserves a verified identity. UpForge assigns the world's first independent startup registry number — the UFRN — to companies across 50+ countries."
              : "Deep research, verified data, and real lessons from the founders building India's next generation of unicorns. Updated weekly."}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
            {[
              { n: "5,000+", l: "Verified Startups" },
              { n: "50+", l: "Countries" },
              { n: "UFRN", l: "Unique Registry" },
            ].map((s) => (
              <div key={s.l} className="text-center lg:text-left">
                <div className="text-3xl font-black text-white">{s.n}</div>
                <div className="text-blue-300/50 text-xs font-medium tracking-wide">{s.l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a
              href="/startup"
              className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-xl shadow-blue-500/30 text-sm"
            >
              Explore Registry →
            </a>
            <a
              href="/submit"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 text-sm"
            >
              List Your Startup
            </a>
          </div>
        </div>

        {/* RIGHT — globe */}
        <div className="flex-1 flex items-center justify-center relative">
          {/* Active city tooltip */}
          {activeCityProj.visible && (
            <div
              className="absolute z-20 pointer-events-none transition-all duration-500"
              style={{
                left: `calc(50% + ${(activeCityProj.x - 200) * 1.2}px + 20px)`,
                top: `calc(50% + ${(activeCityProj.y - 200) * 1.2}px - 10px)`,
              }}
            >
              <div className="bg-white/90 backdrop-blur text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap">
                📍 {activeCity.name}
                <span className="text-gray-400 font-normal ml-1">{activeCity.region}</span>
              </div>
            </div>
          )}

          <svg
            viewBox="0 0 400 400"
            className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px] drop-shadow-2xl"
            aria-hidden="true"
          >
            <defs>
              <radialGradient id="globeGlow" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                <stop offset="60%" stopColor="#1e3a8a" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="globeBase" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </radialGradient>
              <filter id="cityGlow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
            </defs>

            {/* Base sphere */}
            <circle cx="200" cy="200" r="180" fill="url(#globeBase)" />
            <circle cx="200" cy="200" r="180" fill="url(#globeGlow)" />

            {/* Wireframe lines */}
            {meridians.map((d, i) => (
              <path key={`m${i}`} d={d} stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.25" />
            ))}
            {parallels.map((d, i) => (
              <path key={`p${i}`} d={d} stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.2" />
            ))}

            {/* City dots */}
            {projectedCities.map((c, i) => {
              if (!c.visible) return null
              const isActive = i === activeCityIndex
              return (
                <g key={c.name}>
                  {isActive && (
                    <circle cx={c.x} cy={c.y} r="8" fill="#60a5fa" opacity="0.2">
                      <animate attributeName="r" values="5;12;5" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={isActive ? 4 : 2.5}
                    fill={isActive ? "#60a5fa" : "#93c5fd"}
                    opacity={isActive ? 1 : 0.7}
                    filter={isActive ? "url(#cityGlow)" : undefined}
                  />
                </g>
              )
            })}

            {/* Sphere rim highlight */}
            <circle cx="200" cy="200" r="180" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.4" />
            <ellipse cx="155" cy="140" rx="60" ry="35" fill="white" opacity="0.03" transform="rotate(-30 155 140)" />
          </svg>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-blue-300/40 text-xs">
        <span>Scroll to explore</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-300/40 to-transparent animate-bounce" />
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.6; }
        }
      `}</style>
    </section>
  )
}
