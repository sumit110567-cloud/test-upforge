"use client"
/**
 * components/verify-client.tsx — UpForge UFRN Verification
 * Matches upforge.org editorial aesthetic.
 * NO footer rendered here — footer lives in layout.tsx only.
 */

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle2, Search, Share2, RotateCcw,
  ShieldCheck, MapPin, Calendar, Layers, Globe, ArrowRight, XCircle
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

/* ─── World cities (x/y within 700×360 viewBox Mercator) ─── */
const CITIES: { x: number; y: number }[] = [
  { x:145, y:148 }, // New York
  { x:115, y:142 }, // Chicago
  { x: 92, y:162 }, // Los Angeles
  { x:125, y:195 }, // São Paulo
  { x:390, y: 98 }, // London
  { x:408, y:102 }, // Paris
  { x:445, y: 96 }, // Berlin
  { x:500, y: 88 }, // Moscow
  { x:420, y:122 }, // Cairo
  { x:412, y:165 }, // Lagos
  { x:448, y:205 }, // Nairobi
  { x:432, y:255 }, // Johannesburg
  { x:488, y:140 }, // Dubai
  { x:548, y:132 }, // Delhi
  { x:540, y:148 }, // Mumbai
  { x:555, y:168 }, // Chennai
  { x:592, y:118 }, // Beijing
  { x:608, y:130 }, // Shanghai
  { x:638, y:118 }, // Tokyo
  { x:648, y:112 }, // Seoul
  { x:628, y:148 }, // Bangkok
  { x:635, y:162 }, // Singapore
  { x:655, y:290 }, // Sydney
  { x:670, y:308 }, // Melbourne
]

export function VerifyClient({ totalCount, isOrg }: Props) {
  const [input, setInput]     = useState("")
  const [phase, setPhase]     = useState<Phase>("idle")
  const [result, setResult]   = useState<StartupRecord | null>(null)
  const [copied, setCopied]   = useState(false)
  const [beamX, setBeamX]     = useState(-80)
  const [scanLog, setScanLog] = useState<string[]>([])
  const inputRef   = useRef<HTMLInputElement>(null)
  const rafRef     = useRef<number>(0)
  const logTimers  = useRef<ReturnType<typeof setTimeout>[]>([])
  const startTs    = useRef<number>(0)

  /* ── Radar beam — smooth rAF loop ── */
  useEffect(() => {
    if (phase !== "searching") {
      cancelAnimationFrame(rafRef.current)
      setBeamX(-80)
      return
    }
    startTs.current = 0
    const SWEEP = 2800 // ms per pass
    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts
      const t = ((ts - startTs.current) % SWEEP) / SWEEP
      setBeamX(-80 + t * 860) // -80 → 780
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase])

  /* ── Terminal scan log ── */
  const startScanLog = (ufrn: string) => {
    const msgs = [
      `QUERY  ${ufrn}`,
      "NODE   Connecting to registry cluster…",
      "AUTH   Secure channel established",
      "SCAN   Cross-referencing global index…",
      "INDEX  Checking editorial audit ledger…",
      "VERIFY Validating UFRN signature…",
    ]
    setScanLog([])
    msgs.forEach((m, i) => {
      const t = setTimeout(() => setScanLog(p => [...p, m]), i * 340)
      logTimers.current.push(t)
    })
  }
  const clearScanLog = () => {
    logTimers.current.forEach(clearTimeout)
    logTimers.current = []
    setScanLog([])
  }

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
    startScanLog(ufrn)
    try {
      const sb = createClient()
      const { data, error } = await sb
        .from("startups").select("*")
        .eq("ufrn", ufrn).eq("status", "approved").single()
      await new Promise(r => setTimeout(r, 2500))
      clearScanLog()
      if (error || !data) setPhase("notfound")
      else { setResult(data as StartupRecord); setPhase("found") }
    } catch { clearScanLog(); setPhase("error") }
  }, [input, isOrg])

  const handleReset = () => {
    clearScanLog()
    setPhase("idle"); setResult(null); setInput("")
    setTimeout(() => inputRef.current?.focus(), 80)
  }

  const handleCopy = () => {
    if (!result) return
    const domain = isOrg ? "upforge.org" : "upforge.in"
    navigator.clipboard.writeText(`https://www.${domain}/verify?ufrn=${result.ufrn}`)
    setCopied(true); setTimeout(() => setCopied(false), 2500)
  }

  const isScanning = phase === "searching"

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Space+Mono:wght@400;700&display=swap');

        .vf { font-family: system-ui,-apple-system,sans-serif; color: #1C1C1C; }

        .vf-search { display:flex; max-width:680px; margin:0 auto; border:2px solid #1C1C1C; background:#FFF; transition:box-shadow .22s,transform .22s; }
        .vf-search:focus-within { transform:translateY(-2px); box-shadow:5px 5px 0 #E0D8C8; }
        .vf-input  { flex:1; padding:18px 22px; border:none; outline:none; font-family:'Space Mono',monospace; font-size:.92rem; background:transparent; color:#1C1C1C; letter-spacing:.04em; }
        .vf-input::placeholder { color:#C0BBB0; }
        .vf-btn    { background:#1C1C1C; color:#fff; border:none; padding:0 28px; font-size:10px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; cursor:pointer; white-space:nowrap; transition:background .18s; }
        .vf-btn:hover:not(:disabled) { background:#C59A2E; }
        .vf-btn:disabled { opacity:.4; cursor:not-allowed; }

        .vf-map-section { width:100%; background:#F7F5F0; border-top:1px solid #E2DDD5; border-bottom:1px solid #E2DDD5; overflow:hidden; }
        .vf-map-svg     { display:block; width:100%; }

        .vf-terminal { max-width:680px; margin:0 auto; background:#0D0D0D; padding:22px 26px; min-height:148px; border:1px solid #2A2A2A; }
        .vf-log-line { font-family:'Space Mono',monospace; font-size:11px; line-height:1.85; color:#4AAFFF; opacity:0; animation:logIn .22s ease forwards; }
        .vf-log-line.past { color:#5FDD90; }
        @keyframes logIn { from{opacity:0;transform:translateY(3px)} to{opacity:1;transform:none} }
        .vf-cursor { display:inline-block; width:6px; height:11px; background:#C59A2E; animation:blink .85s step-end infinite; vertical-align:middle; margin-left:3px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        .vf-cert { max-width:820px; margin:0 auto 80px; background:#FFF; border:1px solid #D8D2C8; animation:certIn .6s cubic-bezier(.16,1,.3,1); }
        @keyframes certIn { from{opacity:0;transform:translateY(22px)} to{opacity:1;transform:none} }
        .vf-cert-head { background:#1C1C1C; color:#fff; padding:30px 42px; display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap; }
        .vf-cert-body { padding:42px 48px; }
        .vf-fg { display:grid; grid-template-columns:repeat(3,1fr); gap:30px; border-top:1px solid #F0EDE8; padding-top:30px; margin-top:30px; }
        @media(max-width:660px){ .vf-fg{grid-template-columns:1fr 1fr;} .vf-cert-body{padding:22px;} .vf-cert-head{padding:22px;} }
        @media(max-width:400px){ .vf-fg{grid-template-columns:1fr;} }

        @keyframes shake { 0%,100%{transform:none} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        .vf-shake { animation:shake .34s ease; }

        .vf-step { border-left:2px solid #1C1C1C; padding:6px 0 6px 22px; transition:border-color .2s; text-align:left; }
        .vf-step:hover { border-color:#C59A2E; }

        .vf-action { display:inline-flex; align-items:center; gap:8px; padding:13px 26px; font-size:10px; font-weight:700; letter-spacing:.2em; text-transform:uppercase; cursor:pointer; transition:background .18s; text-decoration:none; }
        .vf-action-primary { background:#1C1C1C; color:#fff; border:none; }
        .vf-action-primary:hover { background:#C59A2E; }
        .vf-action-outline { background:transparent; color:#1C1C1C; border:2px solid #1C1C1C; }
        .vf-action-outline:hover { background:#F5F3EE; }
      `}</style>

      <div className="vf">

        {/* ═══ MASTHEAD ══════════════════════════════════════════════════════════ */}
        <header style={{ textAlign:"center", padding:"72px 24px 56px", background:"#FDFCF8" }}>
          <div style={{ display:"inline-flex", alignItems:"center", gap:7, padding:"5px 14px", background:"#1C1C1C", color:"#fff", fontSize:9, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", marginBottom:30 }}>
            <ShieldCheck size={11} /> Official Verification · UpForge Global Registry
          </div>

          <h1 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"clamp(2.8rem,7vw,5rem)", color:"#1C1C1C", lineHeight:1.05, letterSpacing:"-.025em", marginBottom:18 }}>
            Registry Lookup
          </h1>
          <p style={{ color:"#888", fontSize:"1rem", maxWidth:500, margin:"0 auto 44px", lineHeight:1.8 }}>
            Confirm operational status, verified founders, and official records of any entity in the UpForge Global Index.
          </p>

          {/* Search */}
          <div className="vf-search">
            <input
              ref={inputRef}
              className="vf-input"
              placeholder="UF-2026-IND-00013  ·  or just enter 13"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !isScanning && handleVerify()}
              disabled={isScanning}
            />
            <button className="vf-btn" onClick={handleVerify} disabled={!input.trim() || isScanning}>
              {isScanning ? "Scanning…" : "Verify →"}
            </button>
          </div>

          <div style={{ marginTop:14, display:"flex", justifyContent:"center", gap:18, fontSize:9, color:"#BBBBAA", letterSpacing:"0.16em", textTransform:"uppercase", fontFamily:"'Space Mono',monospace", flexWrap:"wrap" }}>
            <span>{totalCount.toLocaleString()}+ entities indexed</span>
            <span style={{ color:"#D8D2C8" }}>·</span>
            <span>Free · Instant · No login</span>
            <span style={{ color:"#D8D2C8" }}>·</span>
            <span>Global coverage</span>
          </div>
        </header>

        {/* ═══ WORLD MAP ════════════════════════════════════════════════════════ */}
        <section className="vf-map-section">
          <svg className="vf-map-svg" viewBox="0 0 700 360" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="vfBeam" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%"   stopColor="#C59A2E" stopOpacity="0"/>
                <stop offset="42%"  stopColor="#C59A2E" stopOpacity="0.08"/>
                <stop offset="50%"  stopColor="#C59A2E" stopOpacity="0.9"/>
                <stop offset="58%"  stopColor="#C59A2E" stopOpacity="0.08"/>
                <stop offset="100%" stopColor="#C59A2E" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="vfClip"><rect x="0" y="0" width="700" height="360"/></clipPath>
            </defs>

            {/* Ocean */}
            <rect width="700" height="360" fill="#F7F5F0"/>

            {/* Grid */}
            {[60,120,180,240,300].map(y => <line key={y} x1="0" y1={y} x2="700" y2={y} stroke="#E2DDD5" strokeWidth=".5" opacity=".6"/>)}
            {[100,200,300,400,500,600].map(x => <line key={x} x1={x} y1="0" x2={x} y2="360" stroke="#E2DDD5" strokeWidth=".5" opacity=".6"/>)}

            {/* North America */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M78 55 L85 48 L100 44 L115 40 L130 42 L148 48 L162 55 L170 65 L175 78 L172 92 L165 105 L158 118 L155 132 L148 142 L152 154 L158 162 L165 170 L168 180 L162 190 L155 198 L148 204 L140 198 L132 188 L128 175 L130 162 L125 152 L118 142 L108 136 L98 130 L90 122 L85 108 L80 92 L75 75 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M30 52 L45 44 L58 48 L65 58 L58 68 L45 65 L35 60 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M195 22 L210 18 L225 22 L228 35 L220 45 L208 48 L198 40 L192 30 Z"/>

            {/* Central America */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M130 205 L138 210 L132 220 L125 228 L120 220 L122 210 Z"/>

            {/* South America */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M122 228 L132 222 L144 225 L155 232 L162 242 L165 258 L162 275 L158 295 L155 315 L152 332 L148 345 L142 350 L136 348 L130 338 L125 320 L120 300 L118 278 L118 258 L116 242 Z"/>

            {/* UK */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".6" d="M378 82 L385 78 L392 80 L396 88 L392 96 L384 98 L378 92 Z"/>

            {/* Europe mainland */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M398 70 L415 66 L435 62 L455 64 L472 68 L488 72 L502 78 L510 88 L505 100 L495 108 L482 112 L468 116 L455 118 L442 116 L428 112 L415 108 L405 102 L398 94 L394 84 Z"/>
            {/* Scandinavia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".6" d="M432 42 L442 36 L452 38 L460 46 L458 58 L450 64 L442 62 L435 56 L430 48 Z"/>
            {/* Iberia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M368 108 L380 104 L392 106 L396 116 L390 126 L378 128 L368 120 L365 112 Z"/>
            {/* Italy */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M418 118 L426 114 L432 120 L435 130 L430 142 L424 148 L418 140 L415 128 Z"/>

            {/* Africa */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M370 128 L390 124 L410 122 L428 124 L442 130 L452 140 L458 155 L460 172 L458 190 L455 210 L452 230 L448 252 L444 272 L440 288 L436 298 L430 302 L422 298 L415 285 L410 268 L408 248 L406 228 L402 208 L395 188 L385 172 L375 158 L368 145 L365 135 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".4" d="M468 230 L474 225 L478 235 L476 248 L470 252 L465 244 L464 234 Z"/>

            {/* Middle East */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".7" d="M468 118 L488 112 L505 115 L515 125 L518 138 L512 150 L502 158 L490 162 L478 158 L468 148 L462 135 Z"/>

            {/* Russia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M510 55 L530 48 L555 44 L580 42 L605 44 L625 48 L640 54 L650 64 L645 76 L635 84 L618 90 L598 94 L575 96 L552 95 L530 92 L512 88 L502 78 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".6" d="M640 55 L655 50 L668 48 L678 54 L680 65 L672 72 L660 75 L648 70 Z"/>

            {/* Indian subcontinent */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M520 128 L535 122 L552 118 L568 120 L580 128 L585 142 L582 158 L575 172 L565 185 L555 195 L545 198 L535 192 L528 178 L522 162 L518 145 Z"/>

            {/* Southeast Asia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".7" d="M580 130 L600 125 L618 128 L632 136 L638 148 L632 162 L622 170 L610 175 L598 172 L588 162 L578 150 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M628 168 L635 175 L638 186 L634 194 L628 192 L624 182 L624 172 Z"/>

            {/* China & East Asia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M572 92 L592 86 L614 84 L632 86 L648 92 L658 102 L660 115 L655 128 L642 136 L628 140 L612 138 L596 132 L582 124 L572 112 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M642 100 L650 96 L656 100 L654 112 L648 116 L642 112 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M658 95 L665 88 L672 90 L674 100 L668 108 L660 106 Z"/>

            {/* Australia */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".8" d="M600 248 L620 240 L640 238 L658 242 L672 250 L682 262 L685 278 L682 295 L674 308 L660 316 L645 318 L630 314 L618 304 L608 290 L600 272 L596 258 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".4" d="M690 295 L696 288 L700 296 L698 308 L692 312 L688 304 Z"/>

            {/* Indonesia islands */}
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".5" d="M584 198 L598 195 L608 200 L610 208 L600 212 L588 208 Z"/>
            <path fill="#E8E4DC" stroke="#D5D0C8" strokeWidth=".4" d="M618 202 L630 200 L638 206 L634 214 L622 212 Z"/>

            {/* ── SCAN BEAM ── */}
            {isScanning && (
              <g clipPath="url(#vfClip)">
                <rect x={beamX - 70} y={0} width={140} height={360} fill="url(#vfBeam)" style={{ pointerEvents:"none" }}/>
                <line x1={beamX} y1={0} x2={beamX} y2={360} stroke="#C59A2E" strokeWidth={1.2} opacity={.7} style={{ pointerEvents:"none" }}/>
              </g>
            )}

            {/* ── CITY DOTS ── */}
            {CITIES.map((c, i) => {
              const dist  = Math.abs(c.x - beamX)
              const isLit = isScanning && dist < 55
              const glow  = isLit ? Math.max(0, 1 - dist / 55) : 0
              return (
                <g key={i}>
                  {isLit && <circle cx={c.x} cy={c.y} r={4 + glow * 9} fill="none" stroke="#C59A2E" strokeWidth={.7} opacity={glow * .55} style={{ transition:"all .1s linear" }}/>}
                  <circle cx={c.x} cy={c.y} r={isLit ? 3.2 : 1.8} fill={isLit ? "#C59A2E" : "#A8A09A"} opacity={isLit ? 1 : .5} style={{ transition:"all .12s linear" }}/>
                </g>
              )
            })}

            {/* Legend */}
            <text x="12"  y="353" fontSize="7" fill="#B8B2AA" fontFamily="system-ui" letterSpacing="1.5">GLOBAL NODE AUDIT</text>
            <text x="350" y="353" fontSize="7" fill="#B8B2AA" fontFamily="system-ui" letterSpacing="1.5" textAnchor="middle">{totalCount.toLocaleString()}+ VERIFIED</text>
            <text x="688" y="353" fontSize="7" fill="#B8B2AA" fontFamily="system-ui" letterSpacing="1.5" textAnchor="end">REAL-TIME INDEX</text>
          </svg>
        </section>

        {/* ═══ RESULT AREA ══════════════════════════════════════════════════════ */}
        <div style={{ background:"#FDFCF8", padding:"0 24px" }}>

          {/* ── SCANNING terminal ── */}
          {phase === "searching" && (
            <div style={{ maxWidth:680, margin:"0 auto", padding:"44px 0 64px" }}>
              <div className="vf-terminal">
                {scanLog.map((line, i) => (
                  <div key={i} className={`vf-log-line${i < scanLog.length - 1 ? " past" : ""}`}
                    style={{ animationDelay:"0ms" }}>
                    {line}
                  </div>
                ))}
                {scanLog.length > 0 && <span className="vf-cursor"/>}
              </div>
            </div>
          )}

          {/* ── FOUND ── */}
          {phase === "found" && result && (
            <div className="vf-cert" style={{ marginTop:48 }}>
              <div className="vf-cert-head">
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ background:"#22C55E", borderRadius:"50%", padding:9, display:"flex", flexShrink:0, boxShadow:"0 0 0 5px rgba(34,197,94,.14)" }}>
                    <CheckCircle2 size={18} color="#fff"/>
                  </div>
                  <div>
                    <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", opacity:.42, marginBottom:4, fontFamily:"'Space Mono',monospace" }}>Identity Confirmed</div>
                    <div style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.5rem", letterSpacing:"-.01em" }}>{result.name}</div>
                  </div>
                </div>
                <div style={{ textAlign:"right", borderLeft:"1px solid rgba(255,255,255,.12)", paddingLeft:22 }}>
                  <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", opacity:.38, marginBottom:5, fontFamily:"'Space Mono',monospace" }}>UFRN</div>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:".95rem", color:"#D4AF5A", fontWeight:700, letterSpacing:".04em" }}>{result.ufrn}</div>
                </div>
              </div>

              <div className="vf-cert-body">
                <div style={{ display:"flex", gap:22, alignItems:"flex-start", flexWrap:"wrap" }}>
                  <div style={{ width:78, height:78, background:"#F5F3EE", border:"1px solid #E2DDD5", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {result.logo_url
                      ? <img src={result.logo_url} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt={result.name}/>
                      : <span style={{ fontFamily:"'EB Garamond',serif", fontSize:"2.1rem", color:"#D5D0C8" }}>{result.name[0]}</span>
                    }
                  </div>
                  <div style={{ flex:1 }}>
                    <span style={{ display:"inline-block", padding:"3px 9px", background:"#FEF3C7", color:"#92400E", fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", border:"1px solid #FDE68A", marginBottom:9 }}>
                      {result.category}
                    </span>
                    <h3 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.6rem", color:"#1C1C1C", marginBottom:4, letterSpacing:"-.01em" }}>{result.name}</h3>
                    <p style={{ fontSize:".85rem", color:"#888" }}>{result.founders}</p>
                    {result.description && <p style={{ marginTop:9, fontSize:".82rem", color:"#444", lineHeight:1.72, maxWidth:440 }}>{result.description}</p>}
                  </div>
                </div>

                <div className="vf-fg">
                  <FField icon={ShieldCheck} label="Audit Status" value="Editorial Board Verified"/>
                  <FField icon={MapPin}      label="HQ"           value={`${result.city || "Global"}, ${result.country_code}`}/>
                  <FField icon={Layers}      label="Stage"        value={result.funding_stage || "Private"}/>
                  <FField icon={Calendar}    label="Founded"      value={result.founded_year?.toString() || "2026"}/>
                  <FField icon={RotateCcw}   label="Updated"      value={new Date(result.updated_at || "").toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}/>
                  <FField icon={Globe}       label="Ledger ID"    value={`#${result.id.slice(0,8).toUpperCase()}`}/>
                </div>

                <div style={{ marginTop:38, display:"flex", flexWrap:"wrap", alignItems:"center", gap:10 }}>
                  <Link href={`/startup/${result.slug}`} className="vf-action vf-action-primary">
                    Full Dossier <ArrowRight size={11}/>
                  </Link>
                  <button onClick={handleCopy} className="vf-action vf-action-outline">
                    <Share2 size={11}/> {copied ? "Copied!" : "Share"}
                  </button>
                  <button onClick={handleReset} style={{ marginLeft:"auto", background:"none", border:"none", fontSize:9, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#AAA", cursor:"pointer" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#1C1C1C")}
                    onMouseLeave={e=>(e.currentTarget.style.color="#AAA")}
                  >New Search</button>
                </div>
              </div>
            </div>
          )}

          {/* ── NOT FOUND ── */}
          {phase === "notfound" && (
            <div className="vf-shake" style={{ maxWidth:520, margin:"48px auto 80px", textAlign:"center", padding:"54px 30px", border:"2px dashed #D8D2C8", background:"#F7F5F0" }}>
              <div style={{ color:"#D5D0C8", display:"flex", justifyContent:"center", marginBottom:18 }}>
                <XCircle size={40} strokeWidth={1}/>
              </div>
              <h3 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.65rem", color:"#1C1C1C", marginBottom:10 }}>Record Not Located</h3>
              <p style={{ color:"#888", fontSize:".88rem", lineHeight:1.75, marginBottom:30 }}>
                <code style={{ fontFamily:"'Space Mono',monospace", fontWeight:700, color:"#1C1C1C", fontSize:".78rem" }}>{normalizeUFRN(input)}</code>
                {" "}does not match any approved entity in our global index.
              </p>
              <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
                <button onClick={handleReset} className="vf-action vf-action-outline">Try Again</button>
                <Link href="/submit" className="vf-action vf-action-primary">Submit Entity</Link>
              </div>
            </div>
          )}

          {/* ── ERROR ── */}
          {phase === "error" && (
            <div style={{ textAlign:"center", padding:"48px 24px 80px" }}>
              <p style={{ color:"#888", marginBottom:20, fontSize:".88rem" }}>Something went wrong. Please try again.</p>
              <button onClick={handleReset} className="vf-action vf-action-outline">Retry</button>
            </div>
          )}
        </div>

        {/* ═══ HOW IT WORKS ════════════════════════════════════════════════════ */}
        <section style={{ padding:"92px 32px", borderTop:"1px solid #E2DDD5", textAlign:"center", background:"#FDFCF8" }}>
          <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.28em", textTransform:"uppercase", color:"#C59A2E", marginBottom:14, fontFamily:"'Space Mono',monospace" }}>
            System Architecture
          </div>
          <h2 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"clamp(1.8rem,4vw,2.7rem)", color:"#1C1C1C", marginBottom:60, letterSpacing:"-.02em" }}>
            Registry Workflow
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))", maxWidth:980, margin:"0 auto", gap:40 }}>
            <VStep num="01" title="Data Ingestion"  desc="Entities submit operational data through secure encrypted gateways."/>
            <VStep num="02" title="Manual Audit"    desc="Our editorial board performs manual due diligence on founders and status."/>
            <VStep num="03" title="UFRN Assignment" desc="Upon approval, a unique sequential Registry Number is permanently issued."/>
            <VStep num="04" title="Public Ledger"   desc="The record enters the global searchable index for instant verification."/>
          </div>
        </section>

      </div>
    </>
  )
}

function FField({ icon: Icon, label, value }: { icon: any; label: string; value: string }) {
  return (
    <div>
      <div style={{ display:"flex", alignItems:"center", gap:5, marginBottom:6 }}>
        <Icon size={10} color="#C59A2E"/>
        <span style={{ fontSize:8, fontWeight:700, letterSpacing:"0.22em", textTransform:"uppercase", color:"#AAA", fontFamily:"'Space Mono',monospace" }}>{label}</span>
      </div>
      <div style={{ fontSize:".9rem", fontWeight:600, color:"#1C1C1C", letterSpacing:"-.005em" }}>{value}</div>
    </div>
  )
}

function VStep({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="vf-step">
      <div style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"2.8rem", color:"#E2DDD5", lineHeight:1, marginBottom:12 }}>{num}</div>
      <h4 style={{ fontSize:9, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1C1C1C", marginBottom:9 }}>{title}</h4>
      <p style={{ fontSize:".8rem", color:"#888", lineHeight:1.75 }}>{desc}</p>
    </div>
  )
}
