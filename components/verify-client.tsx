"use client"
/**
 * components/verify-client.tsx
 * UFRN Verification — Premium Editorial Design
 * Proper SVG world map, cinematic search states, zero duplicate footers.
 */

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle2, Search, Share2, RotateCcw,
  ShieldCheck, MapPin, Calendar, Layers, Globe, ArrowRight
} from "lucide-react"

interface StartupRecord {
  id: string; name: string; slug: string; ufrn: string
  description?: string | null; founders?: string | null
  founded_year?: number | null; category?: string | null
  city?: string | null; country_code?: string | null; country_name?: string | null
  status: string; logo_url?: string | null; website?: string | null
  funding_stage?: string | null; funding_amount?: number | null
  created_at?: string; updated_at?: string
}

type Phase = "idle" | "searching" | "found" | "notfound" | "error"
interface Props { totalCount: number; isOrg: boolean }

/* ─── World Map: simplified continent outlines as SVG paths ─── */
/* viewBox="0 0 1000 500" — Mercator-ish projection */
const CONTINENT_PATHS = [
  // North America
  "M 120 80 L 100 100 L 90 130 L 95 160 L 115 185 L 130 200 L 145 210 L 160 220 L 175 215 L 185 195 L 195 175 L 200 155 L 210 135 L 215 110 L 205 90 L 190 75 L 170 65 L 150 68 Z",
  // Greenland
  "M 220 40 L 210 55 L 215 70 L 230 72 L 245 60 L 240 45 Z",
  // South America
  "M 185 240 L 175 255 L 170 280 L 165 310 L 168 340 L 175 365 L 185 385 L 195 390 L 205 375 L 210 350 L 215 320 L 212 290 L 208 265 L 200 245 Z",
  // Europe
  "M 430 75 L 420 85 L 415 100 L 420 115 L 430 120 L 445 118 L 460 110 L 468 95 L 460 80 L 447 73 Z",
  // Scandinavia
  "M 440 50 L 430 60 L 432 75 L 445 78 L 455 68 L 452 55 Z",
  // Africa
  "M 435 135 L 420 150 L 415 175 L 418 205 L 425 235 L 435 265 L 445 295 L 450 315 L 455 300 L 462 270 L 465 240 L 462 205 L 458 175 L 455 150 L 448 133 Z",
  // Russia / Central Asia
  "M 480 55 L 460 65 L 458 80 L 470 90 L 495 95 L 525 92 L 555 88 L 580 85 L 600 80 L 615 70 L 610 58 L 590 52 L 560 50 L 530 52 L 505 54 Z",
  // Middle East
  "M 470 130 L 460 140 L 462 155 L 475 162 L 490 158 L 498 145 L 495 132 L 480 126 Z",
  // South Asia (India)
  "M 560 130 L 548 145 L 545 165 L 550 185 L 560 200 L 572 205 L 582 195 L 585 175 L 580 155 L 572 138 Z",
  // Southeast Asia
  "M 620 150 L 610 160 L 612 175 L 622 180 L 635 175 L 638 162 L 630 153 Z",
  // China / East Asia
  "M 600 90 L 585 100 L 580 115 L 590 130 L 610 135 L 630 128 L 645 115 L 640 100 L 625 92 Z",
  // Japan
  "M 660 95 L 654 105 L 658 115 L 668 112 L 672 102 L 666 93 Z",
  // Australia
  "M 660 290 L 645 305 L 643 325 L 650 345 L 665 355 L 682 350 L 692 335 L 690 310 L 680 295 L 668 287 Z",
  // New Zealand
  "M 718 345 L 713 358 L 718 368 L 726 364 L 727 352 L 722 343 Z",
]

/* Pulse dots — notable world cities */
const CITY_DOTS: { x: number; y: number; label: string }[] = [
  { x: 160, y: 155, label: "New York" },
  { x: 130, y: 145, label: "Chicago" },
  { x: 108, y: 168, label: "Los Angeles" },
  { x: 212, y: 310, label: "São Paulo" },
  { x: 440, y: 100, label: "London" },
  { x: 460, y: 97,  label: "Paris" },
  { x: 490, y: 88,  label: "Moscow" },
  { x: 447, y: 175, label: "Lagos" },
  { x: 462, y: 295, label: "Nairobi" },
  { x: 565, y: 175, label: "Mumbai" },
  { x: 612, y: 110, label: "Beijing" },
  { x: 635, y: 120, label: "Shanghai" },
  { x: 659, y: 140, label: "Tokyo" },
  { x: 668, y: 320, label: "Sydney" },
  { x: 555, y: 145, label: "Delhi" },
  { x: 480, y: 148, label: "Dubai" },
  { x: 625, y: 162, label: "Bangkok" },
  { x: 637, y: 170, label: "Singapore" },
]

/* ─── Component ─── */
export function VerifyClient({ totalCount, isOrg }: Props) {
  const [input, setInput]     = useState("")
  const [phase, setPhase]     = useState<Phase>("idle")
  const [result, setResult]   = useState<StartupRecord | null>(null)
  const [copied, setCopied]   = useState(false)
  const [scanLine, setScanLine] = useState(0)           // 0–1000 x-pos for radar sweep
  const [litDots, setLitDots] = useState<Set<number>>(new Set())
  const inputRef  = useRef<HTMLInputElement>(null)
  const rafRef    = useRef<number>(0)
  const startTime = useRef<number>(0)

  /* Radar sweep animation */
  const animateScan = useCallback((t: number) => {
    if (!startTime.current) startTime.current = t
    const elapsed = (t - startTime.current) % 3000          // 3s per sweep
    const x = (elapsed / 3000) * 1000
    setScanLine(x)
    // Light up dots near the sweep
    const lit = new Set<number>()
    CITY_DOTS.forEach((d, i) => { if (Math.abs(d.x - x) < 60) lit.add(i) })
    setLitDots(lit)
    rafRef.current = requestAnimationFrame(animateScan)
  }, [])

  useEffect(() => {
    if (phase === "searching") {
      startTime.current = 0
      rafRef.current = requestAnimationFrame(animateScan)
    } else {
      cancelAnimationFrame(rafRef.current)
      setScanLine(0); setLitDots(new Set())
    }
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase, animateScan])

  function normalizeUFRN(raw: string): string {
    const s = raw.trim().toUpperCase().replace(/\s/g, "")
    if (/^UF-\d{4}-[A-Z]{2,4}-\d+$/.test(s)) return s
    const stripped = s.startsWith("UF-") ? s.slice(3) : s
    if (/^\d{4}-[A-Z]{2,4}-\d+$/.test(stripped)) return `UF-${stripped}`
    if (/^[A-Z]{2,4}-\d+$/.test(stripped))       return `UF-2026-${stripped}`
    if (/^\d+$/.test(stripped)) {
      const cc = isOrg ? "AUS" : "IND"
      return `UF-2026-${cc}-${stripped.padStart(5, "0")}`
    }
    return s.startsWith("UF-") ? s : `UF-${s}`
  }

  const handleVerify = useCallback(async () => {
    const raw = input.trim()
    if (!raw) return
    const ufrn = normalizeUFRN(raw)
    setPhase("searching"); setResult(null)
    try {
      const sb = createClient()
      const { data, error } = await sb
        .from("startups")
        .select("*")
        .eq("ufrn", ufrn)
        .eq("status", "approved")
        .single()
      await new Promise(r => setTimeout(r, 2200))   // let the radar breathe
      if (error || !data) setPhase("notfound")
      else { setResult(data as StartupRecord); setPhase("found") }
    } catch { setPhase("error") }
  }, [input, isOrg])

  const handleReset = () => {
    setPhase("idle"); setResult(null); setInput("")
    setTimeout(() => inputRef.current?.focus(), 80)
  }

  const handleCopy = () => {
    if (!result) return
    const domain = isOrg ? "upforge.org" : "upforge.in"
    navigator.clipboard.writeText(`https://www.${domain}/verify?ufrn=${result.ufrn}`)
    setCopied(true); setTimeout(() => setCopied(false), 2500)
  }

  return (
    <>
      <style>{`
        /* ── fonts ── */
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        /* ── tokens ── */
        :root {
          --gold:   #B8952A;
          --gold-l: #D4AF5A;
          --ink:    #0F0F0F;
          --ink-2:  #3A3A3A;
          --muted:  #8A8A8A;
          --border: #E2DDD5;
          --bg:     #FDFCF8;
          --bg-2:   #F5F3EE;
          --white:  #FFFFFF;
        }

        /* ── search box ── */
        .v-wrap        { font-family: 'Syne', system-ui, sans-serif; }
        .v-search      { display: flex; max-width: 660px; margin: 0 auto; background: var(--white); border: 2px solid var(--ink); position: relative; transition: box-shadow .25s, transform .25s; }
        .v-search:focus-within { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(184,149,42,.18); border-color: var(--gold); }
        .v-input       { flex:1; padding: 20px 24px; border:none; outline:none; font-family: 'DM Mono', monospace; font-size: 1rem; font-weight: 500; background: transparent; color: var(--ink); letter-spacing: .06em; }
        .v-input::placeholder { color: #BBBBAA; }
        .v-btn         { background: var(--ink); color:#fff; border:none; padding: 0 32px; font-family: 'Syne', sans-serif; font-weight: 800; font-size: 11px; letter-spacing:.22em; text-transform:uppercase; cursor:pointer; transition: background .2s; white-space: nowrap; }
        .v-btn:hover:not(:disabled) { background: var(--gold); }
        .v-btn:disabled { opacity: .45; cursor:not-allowed; }

        /* ── world map ── */
        .v-map-wrap    { position: relative; width:100%; max-width: 900px; margin: 0 auto; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 48px 0; overflow: hidden; background: var(--bg); }
        .v-map-svg     { width:100%; display:block; }
        .v-map-overlay { position:absolute; inset:0; pointer-events:none; }
        .v-scan-beam   { position:absolute; top:0; bottom:0; width:2px; background: linear-gradient(to bottom, transparent, var(--gold), transparent); opacity: .9; transition: left 0s linear; }
        .v-scan-glow   { position:absolute; top:0; bottom:0; width:120px; background: linear-gradient(to right, transparent, rgba(184,149,42,.06), transparent); pointer-events:none; }

        /* ── certificate ── */
        .v-cert        { max-width: 820px; margin: 0 auto 80px; background: var(--white); border: 1px solid var(--border); animation: certIn .65s cubic-bezier(.16,1,.3,1); }
        @keyframes certIn { from { opacity:0; transform: translateY(28px); } to { opacity:1; transform: none; } }
        .v-cert-head   { background: var(--ink); color: #fff; padding: 32px 44px; display:flex; justify-content:space-between; align-items:center; gap:20px; }
        .v-cert-body   { padding: 44px 52px; }
        .v-grid        { display:grid; grid-template-columns: repeat(3,1fr); gap:36px; border-top: 1px solid var(--border); padding-top:36px; margin-top:36px; }
        @media(max-width:700px){ .v-grid{grid-template-columns:1fr;} .v-cert-body{padding:24px;} .v-cert-head{padding:24px;flex-direction:column;align-items:flex-start;} }

        /* ── search state: pulse ring ── */
        @keyframes ringPulse { 0%,100%{opacity:.3;transform:scale(1);} 50%{opacity:1;transform:scale(1.08);} }
        .v-ring { animation: ringPulse 1.4s ease-in-out infinite; }

        /* ── notfound shake ── */
        @keyframes shake { 0%,100%{transform:none;} 20%{transform:translateX(-6px);} 40%{transform:translateX(6px);} 60%{transform:translateX(-4px);} 80%{transform:translateX(4px);} }
        .v-shake { animation: shake .4s ease; }

        /* ── scanning text blink ── */
        @keyframes blink { 0%,100%{opacity:1;} 50%{opacity:.25;} }
        .v-blink { animation: blink 1.1s ease-in-out infinite; }

        /* ── step hover ── */
        .v-step { transition: border-color .2s, transform .2s; }
        .v-step:hover { border-color: var(--gold); transform: translateY(-2px); }
      `}</style>

      <div className="v-wrap">

        {/* ── Masthead ── */}
        <header style={{ textAlign:"center", padding:"72px 24px 56px" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"6px 14px", background: "var(--ink)", color:"#fff", fontSize:9, fontWeight:800, letterSpacing:"0.28em", textTransform:"uppercase", marginBottom:32 }}>
            <ShieldCheck size={11} /> UpForge · Global Verification Layer
          </div>

          <h1 style={{ fontFamily:"'DM Serif Display', Georgia, serif", fontSize:"clamp(2.6rem,6vw,4.5rem)", color:"var(--ink)", lineHeight:1.08, marginBottom:20, letterSpacing:"-.02em" }}>
            Registry Lookup
          </h1>
          <p style={{ color:"var(--muted)", fontSize:"1.1rem", maxWidth:560, margin:"0 auto 48px", lineHeight:1.7, fontWeight:500 }}>
            Confirm operational status, verified founders, and official records of any entity within the UpForge Global Index.
          </p>

          {/* Search */}
          <div className="v-search">
            <input
              ref={inputRef}
              className="v-input"
              placeholder="UF-2026-IND-00013 or just 13"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleVerify()}
              disabled={phase === "searching"}
            />
            <button className="v-btn" onClick={handleVerify} disabled={!input.trim() || phase === "searching"}>
              {phase === "searching" ? "Scanning…" : "Verify →"}
            </button>
          </div>
          <p style={{ marginTop:14, fontSize:10, color:"#BBBBAA", letterSpacing:"0.15em", textTransform:"uppercase", fontFamily:"'DM Mono', monospace" }}>
            {totalCount.toLocaleString()}+ entities in the global index · Free · Instant
          </p>
        </header>

        {/* ── World Map ── */}
        <section className="v-map-wrap">
          <svg className="v-map-svg" viewBox="0 0 1000 500" xmlns="http://www.w3.org/2000/svg">
            {/* ocean base */}
            <rect width="1000" height="500" fill="var(--bg)" />

            {/* grid lines */}
            {[100,200,300,400].map(y => (
              <line key={y} x1="0" y1={y} x2="1000" y2={y} stroke="var(--border)" strokeWidth=".4" />
            ))}
            {[200,400,600,800].map(x => (
              <line key={x} x1={x} y1="0" x2={x} y2="500" stroke="var(--border)" strokeWidth=".4" />
            ))}

            {/* continents */}
            {CONTINENT_PATHS.map((d, i) => (
              <path key={i} d={d} fill="var(--bg-2)" stroke="var(--border)" strokeWidth=".8" />
            ))}

            {/* city dots */}
            {CITY_DOTS.map((dot, i) => {
              const lit = litDots.has(i)
              return (
                <g key={i}>
                  {lit && (
                    <circle cx={dot.x} cy={dot.y} r={10} fill="none" stroke={`var(--gold)`} strokeWidth=".8" opacity={.4} className="v-ring" />
                  )}
                  <circle
                    cx={dot.x} cy={dot.y}
                    r={lit ? 3.5 : 2}
                    fill={lit ? "var(--gold)" : "var(--muted)"}
                    opacity={lit ? 1 : .4}
                    style={{ transition:"all .15s ease" }}
                  />
                </g>
              )
            })}

            {/* scan beam drawn in SVG for crisp sub-pixel placement */}
            {phase === "searching" && (
              <>
                <line
                  x1={scanLine} y1={0} x2={scanLine} y2={500}
                  stroke="var(--gold)" strokeWidth={1.5} opacity={.85}
                />
                <rect
                  x={scanLine - 60} y={0} width={120} height={500}
                  fill="url(#scanGrad)"
                  opacity={.25}
                />
                <defs>
                  <linearGradient id="scanGrad" x1="0" x2="1" y1="0" y2="0">
                    <stop offset="0%" stopColor="var(--gold)" stopOpacity="0" />
                    <stop offset="50%" stopColor="var(--gold)" stopOpacity="1" />
                    <stop offset="100%" stopColor="var(--gold)" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </>
            )}
          </svg>

          {/* map legend */}
          <div style={{ display:"flex", justifyContent:"space-around", padding:"0 24px 8px", fontSize:9, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--muted)", fontFamily:"'DM Mono', monospace" }}>
            <span>Global Node Audit</span>
            <span>{totalCount.toLocaleString()}+ Verified</span>
            <span>Real-time Index</span>
          </div>
        </section>

        {/* ── Result Area ── */}
        <div style={{ padding:"48px 24px 0" }}>

          {/* Searching */}
          {phase === "searching" && (
            <div style={{ textAlign:"center", padding:"64px 0 80px" }}>
              <div style={{ width:64, height:64, borderRadius:"50%", border:"2px solid var(--border)", borderTop:"2px solid var(--gold)", margin:"0 auto 28px", animation:"spin 1s linear infinite" }} />
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
              <div className="v-blink" style={{ fontFamily:"'DM Mono', monospace", fontSize:11, letterSpacing:"0.35em", textTransform:"uppercase", color:"var(--gold)", marginBottom:10 }}>
                Cross-referencing global database
              </div>
              <div style={{ fontFamily:"'DM Mono', monospace", fontSize:10, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)" }}>
                {normalizeUFRN(input)}
              </div>
            </div>
          )}

          {/* Found */}
          {phase === "found" && result && (
            <div className="v-cert">
              {/* Header strip */}
              <div className="v-cert-head">
                <div style={{ display:"flex", alignItems:"center", gap:16 }}>
                  <div style={{ background:"#22c55e", borderRadius:"50%", padding:10, display:"flex", boxShadow:"0 0 0 6px rgba(34,197,94,.15)" }}>
                    <CheckCircle2 size={20} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", opacity:.5, marginBottom:4, fontFamily:"'DM Mono', monospace" }}>
                      Identity Confirmed
                    </div>
                    <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:"1.6rem", letterSpacing:"-.01em" }}>
                      {result.name}
                    </div>
                  </div>
                </div>
                <div style={{ textAlign:"right", borderLeft:"1px solid rgba(255,255,255,.15)", paddingLeft:28 }}>
                  <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", opacity:.45, marginBottom:6, fontFamily:"'DM Mono', monospace" }}>UFRN</div>
                  <div style={{ fontFamily:"'DM Mono', monospace", fontSize:"1.1rem", color:"var(--gold-l)", fontWeight:600, letterSpacing:"0.06em" }}>{result.ufrn}</div>
                </div>
              </div>

              {/* Body */}
              <div className="v-cert-body">
                <div style={{ display:"flex", gap:28, alignItems:"flex-start", flexWrap:"wrap" }}>
                  {/* Logo */}
                  <div style={{ width:88, height:88, background:"var(--bg-2)", border:"1px solid var(--border)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {result.logo_url
                      ? <img src={result.logo_url} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt="" />
                      : <span style={{ fontFamily:"'DM Serif Display', serif", fontSize:"2.5rem", color:"var(--border)" }}>{result.name[0]}</span>
                    }
                  </div>
                  {/* Info */}
                  <div>
                    <span style={{ display:"inline-block", padding:"4px 12px", background:"#FEF3C7", color:"#92400E", fontSize:9, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", border:"1px solid #FDE68A", marginBottom:12 }}>
                      {result.category}
                    </span>
                    <h3 style={{ fontFamily:"'DM Serif Display', serif", fontSize:"1.8rem", color:"var(--ink)", marginBottom:6, letterSpacing:"-.01em" }}>{result.name}</h3>
                    <p style={{ fontSize:"0.9rem", color:"var(--muted)", fontWeight:500 }}>{result.founders}</p>
                    {result.description && (
                      <p style={{ marginTop:12, fontSize:"0.85rem", color:"var(--ink-2)", lineHeight:1.65, maxWidth:480 }}>{result.description}</p>
                    )}
                  </div>
                </div>

                {/* Field grid */}
                <div className="v-grid">
                  <Field icon={ShieldCheck} label="Audit Status"      value="Editorial Board Verified" />
                  <Field icon={MapPin}      label="HQ"                value={`${result.city || "Global"}, ${result.country_code}`} />
                  <Field icon={Layers}      label="Stage"             value={result.funding_stage || "Private"} />
                  <Field icon={Calendar}    label="Founded"           value={result.founded_year?.toString() || "2026"} />
                  <Field icon={RotateCcw}   label="Last Updated"      value={new Date(result.updated_at || "").toLocaleDateString("en-GB", { day:"2-digit", month:"short", year:"numeric" })} />
                  <Field icon={Globe}       label="Ledger ID"         value={`#${result.id.slice(0, 8).toUpperCase()}`} />
                </div>

                {/* Actions */}
                <div style={{ marginTop:44, display:"flex", flexWrap:"wrap", alignItems:"center", gap:12 }}>
                  <Link href={`/startup/${result.slug}`} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 32px", background:"var(--ink)", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"0.22em", textTransform:"uppercase", textDecoration:"none", transition:"background .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--gold)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "var(--ink)")}
                  >
                    Full Dossier <ArrowRight size={12} />
                  </Link>
                  <button onClick={handleCopy} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"14px 28px", background:"transparent", border:"2px solid var(--ink)", fontSize:10, fontWeight:800, letterSpacing:"0.22em", textTransform:"uppercase", cursor:"pointer", transition:"background .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.background = "var(--bg-2)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <Share2 size={12} /> {copied ? "Copied!" : "Share"}
                  </button>
                  <button onClick={handleReset} style={{ marginLeft:"auto", background:"none", border:"none", fontSize:10, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--muted)", cursor:"pointer", fontFamily:"'Syne', sans-serif", transition:"color .2s" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    New Search
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Not Found */}
          {phase === "notfound" && (
            <div className="v-shake" style={{ maxWidth:520, margin:"0 auto 80px", textAlign:"center", padding:"64px 32px", border:"2px dashed var(--border)", background:"var(--bg)" }}>
              <div style={{ color:"var(--border)", marginBottom:24, display:"flex", justifyContent:"center" }}>
                <Search size={44} />
              </div>
              <h3 style={{ fontFamily:"'DM Serif Display', serif", fontSize:"1.8rem", color:"var(--ink)", marginBottom:12 }}>Record Not Located</h3>
              <p style={{ color:"var(--muted)", fontSize:"0.9rem", lineHeight:1.7, marginBottom:32 }}>
                <code style={{ fontFamily:"'DM Mono', monospace", fontWeight:600, color:"var(--ink)", fontSize:"0.85rem" }}>
                  {normalizeUFRN(input)}
                </code>
                {" "}does not match any approved entity in our global index.
              </p>
              <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
                <button onClick={handleReset} style={{ padding:"12px 28px", border:"2px solid var(--ink)", background:"transparent", fontSize:10, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer" }}>
                  Try Again
                </button>
                <Link href="/submit" style={{ padding:"12px 28px", background:"var(--ink)", color:"#fff", fontSize:10, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", textDecoration:"none" }}>
                  Submit Entity
                </Link>
              </div>
            </div>
          )}

          {/* Error */}
          {phase === "error" && (
            <div style={{ textAlign:"center", padding:"48px 24px 80px" }}>
              <p style={{ color:"var(--muted)", marginBottom:20 }}>Something went wrong. Please try again.</p>
              <button onClick={handleReset} style={{ padding:"12px 28px", border:"2px solid var(--ink)", background:"transparent", fontSize:10, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", cursor:"pointer" }}>
                Retry
              </button>
            </div>
          )}
        </div>

        {/* ── How It Works ── */}
        <section style={{ padding:"100px 24px", borderTop:"1px solid var(--border)", textAlign:"center" }}>
          <span style={{ display:"block", fontSize:10, fontWeight:700, letterSpacing:"0.3em", textTransform:"uppercase", color:"var(--gold)", marginBottom:16, fontFamily:"'DM Mono', monospace" }}>
            System Architecture
          </span>
          <h2 style={{ fontFamily:"'DM Serif Display', serif", fontSize:"clamp(2rem,4vw,3rem)", color:"var(--ink)", marginBottom:64, letterSpacing:"-.02em" }}>
            Registry Workflow
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px,1fr))", maxWidth:1000, margin:"0 auto", gap:40 }}>
            <Step num="01" title="Data Ingestion"     desc="Entities submit operational data through secure encrypted gateways." />
            <Step num="02" title="Manual Audit"       desc="Our editorial board performs manual due diligence on founders and status." />
            <Step num="03" title="UFRN Assignment"    desc="Upon approval, a unique sequential Registry Number is permanently issued." />
            <Step num="04" title="Public Ledger"      desc="The record is added to the global searchable index for instant verification." />
          </div>
        </section>

      </div>
    </>
  )
}

/* ── Field ── */
function Field({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:6, marginBottom:8 }}>
        <Icon size={11} color="var(--gold)" />
        <span style={{ fontSize:9, fontWeight:700, letterSpacing:"0.25em", textTransform:"uppercase", color:"var(--muted)", fontFamily:"'DM Mono', monospace" }}>{label}</span>
      </div>
      <div style={{ fontSize:"0.95rem", fontWeight:700, color:"var(--ink)", letterSpacing:"-.01em" }}>{value}</div>
    </div>
  )
}

/* ── Step ── */
function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="v-step" style={{ textAlign:"left", borderLeft:"2px solid var(--ink)", paddingLeft:28, paddingTop:8, paddingBottom:8 }}>
      <div style={{ fontFamily:"'DM Serif Display', serif", fontSize:"3.5rem", color:"var(--border)", lineHeight:1, marginBottom:16 }}>{num}</div>
      <h4 style={{ fontSize:10, fontWeight:800, letterSpacing:"0.22em", textTransform:"uppercase", color:"var(--ink)", marginBottom:12, fontFamily:"'Syne', sans-serif" }}>{title}</h4>
      <p style={{ fontSize:"0.83rem", color:"var(--muted)", lineHeight:1.7 }}>{desc}</p>
    </div>
  )
}
