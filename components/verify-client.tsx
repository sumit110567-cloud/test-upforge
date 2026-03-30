"use client"
/**
 * components/verify-client.tsx — UpForge UFRN Verification
 * v2 — scan terminal overlaid on world map, cleaner UI, stronger trust signals
 */

import { useState, useRef, useCallback, useEffect } from "react"
import Link from "next/link"
import { createClient } from "@/lib/supabase/client"
import {
  CheckCircle2, Share2, RotateCcw,
  ShieldCheck, MapPin, Calendar, Layers, Globe, ArrowRight, XCircle, Building2
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

/* ── City dots (accurate world coords mapped to 800×400 viewBox) ── */
const CITIES = [
  { x:142, y:138, label:"New York" },
  { x:112, y:132, label:"Chicago" },
  { x: 88, y:152, label:"Los Angeles" },
  { x:100, y:200, label:"Mexico City" },
  { x:128, y:240, label:"São Paulo" },
  { x:122, y:210, label:"Rio" },
  { x:390, y: 94, label:"London" },
  { x:408, y: 98, label:"Paris" },
  { x:445, y: 90, label:"Berlin" },
  { x:460, y:108, label:"Rome" },
  { x:500, y: 82, label:"Moscow" },
  { x:418, y:138, label:"Cairo" },
  { x:418, y:182, label:"Nairobi" },
  { x:440, y:248, label:"Johannesburg" },
  { x:488, y:132, label:"Dubai" },
  { x:548, y:130, label:"Delhi" },
  { x:540, y:148, label:"Mumbai" },
  { x:558, y:165, label:"Bangalore" },
  { x:592, y:112, label:"Beijing" },
  { x:612, y:128, label:"Shanghai" },
  { x:638, y:112, label:"Tokyo" },
  { x:648, y:106, label:"Seoul" },
  { x:628, y:148, label:"Bangkok" },
  { x:636, y:162, label:"Singapore" },
  { x:654, y:288, label:"Sydney" },
  { x:342, y: 68, label:"Stockholm" },
  { x:352, y:102, label:"Madrid" },
  { x:554, y: 90, label:"Almaty" },
  { x:522, y:138, label:"Karachi" },
  { x:415, y:158, label:"Lagos" },
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

  /* ── Radar beam rAF loop ── */
  useEffect(() => {
    if (phase !== "searching") {
      cancelAnimationFrame(rafRef.current)
      setBeamX(-100)
      return
    }
    startTs.current = 0
    const SWEEP = 2600
    const step = (ts: number) => {
      if (!startTs.current) startTs.current = ts
      const t = ((ts - startTs.current) % SWEEP) / SWEEP
      setBeamX(-100 + t * 1000)
      rafRef.current = requestAnimationFrame(step)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [phase])

  /* ── Scan log ── */
  const startScanLog = (ufrn: string) => {
    const msgs = [
      `> QUERY   ${ufrn}`,
      "> NODE    Connecting to registry cluster…",
      "> AUTH    Secure channel established",
      "> SCAN    Cross-referencing global index…",
      "> INDEX   Checking editorial audit ledger…",
      "> VERIFY  Validating UFRN signature…",
    ]
    setScanLog([])
    msgs.forEach((m, i) => {
      const t = setTimeout(() => setScanLog(p => [...p, m]), i * 380)
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
      await new Promise(r => setTimeout(r, 2600))
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

        .vf { font-family: system-ui,-apple-system,sans-serif; color: #1C1C1C; background: #FDFCF8; }

        /* ── Search bar ── */
        .vf-search {
          display:flex; max-width:640px; margin:0 auto;
          border:1.5px solid #1C1C1C; background:#FFF;
          transition:box-shadow .2s,transform .2s;
        }
        .vf-search:focus-within { transform:translateY(-2px); box-shadow:4px 4px 0 #D4C9A8; }
        .vf-input  { flex:1; padding:17px 22px; border:none; outline:none; font-family:'Space Mono',monospace; font-size:.88rem; background:transparent; color:#1C1C1C; letter-spacing:.04em; }
        .vf-input::placeholder { color:#C4BEB4; }
        .vf-btn    { background:#1C1C1C; color:#fff; border:none; padding:0 26px; font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; cursor:pointer; white-space:nowrap; transition:background .18s; }
        .vf-btn:hover:not(:disabled) { background:#B8872A; }
        .vf-btn:disabled { opacity:.35; cursor:not-allowed; }

        /* ── Map wrapper ── */
        .vf-map-wrap { position:relative; width:100%; overflow:hidden; background:#F4F1EB; border-top:1px solid #E2DDD5; border-bottom:1px solid #E2DDD5; }
        .vf-map-svg  { display:block; width:100%; }

        /* ── Terminal overlay on map ── */
        .vf-terminal-overlay {
          position:absolute; top:50%; left:50%; transform:translate(-50%,-50%);
          width:min(480px, 88%);
          background:rgba(10,10,10,.92);
          backdrop-filter:blur(6px);
          border:1px solid rgba(255,255,255,.08);
          padding:22px 26px 24px;
          pointer-events:none;
        }
        .vf-term-header {
          display:flex; align-items:center; gap:7px; margin-bottom:16px;
          font-family:'Space Mono',monospace; font-size:9px; font-weight:700;
          letter-spacing:.22em; text-transform:uppercase; color:rgba(255,255,255,.28);
        }
        .vf-term-dot { width:7px; height:7px; border-radius:50%; }
        .vf-log-line { font-family:'Space Mono',monospace; font-size:11px; line-height:2; opacity:0; animation:logIn .18s ease forwards; }
        .vf-log-line.done  { color:#5FDD90; }
        .vf-log-line.active{ color:#4AAFFF; }
        @keyframes logIn { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:none} }
        .vf-cursor { display:inline-block; width:6px; height:11px; background:#C59A2E; animation:blink .85s step-end infinite; vertical-align:middle; margin-left:2px; }
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

        /* ── Certificate ── */
        .vf-cert { max-width:780px; margin:52px auto 72px; background:#FFF; border:1px solid #DDD8CE; animation:certIn .55s cubic-bezier(.16,1,.3,1); }
        @keyframes certIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:none} }
        .vf-cert-head { background:#1C1C1C; color:#fff; padding:28px 40px; display:flex; justify-content:space-between; align-items:center; gap:20px; flex-wrap:wrap; }
        .vf-cert-body { padding:40px 44px; }
        .vf-fg { display:grid; grid-template-columns:repeat(3,1fr); gap:28px; border-top:1px solid #F0EDE8; padding-top:28px; margin-top:28px; }
        @media(max-width:640px){ .vf-fg{grid-template-columns:1fr 1fr;} .vf-cert-body,.vf-cert-head{padding:22px;} }
        @media(max-width:380px){ .vf-fg{grid-template-columns:1fr;} }

        /* ── Action buttons ── */
        .vf-action { display:inline-flex; align-items:center; gap:8px; padding:12px 24px; font-size:9px; font-weight:700; letter-spacing:.22em; text-transform:uppercase; cursor:pointer; transition:background .18s; text-decoration:none; }
        .vf-action-primary { background:#1C1C1C; color:#fff; border:none; }
        .vf-action-primary:hover { background:#B8872A; }
        .vf-action-outline { background:transparent; color:#1C1C1C; border:1.5px solid #1C1C1C; }
        .vf-action-outline:hover { background:#F5F2EC; }

        /* ── Workflow steps ── */
        .vf-step { border-left:2px solid #E2DDD5; padding:4px 0 4px 20px; transition:border-color .2s; text-align:left; }
        .vf-step:hover { border-color:#C59A2E; }

        /* ── Trust badges ── */
        .vf-badge { display:inline-flex; align-items:center; gap:6px; padding:6px 13px; background:#F5F2EC; border:1px solid #E2DDD5; font-size:9px; font-weight:700; letter-spacing:.18em; text-transform:uppercase; color:#888; font-family:'Space Mono',monospace; }

        @keyframes shake { 0%,100%{transform:none} 25%{transform:translateX(-5px)} 75%{transform:translateX(5px)} }
        .vf-shake { animation:shake .32s ease; }
      `}</style>

      <div className="vf">

        {/* ═══ MASTHEAD ══════════════════════════════════════════════════════════ */}
        <header style={{ textAlign:"center", padding:"68px 24px 52px", background:"#FDFCF8" }}>
          {/* Trust badge */}
          <div style={{ display:"inline-flex", alignItems:"center", gap:6, padding:"5px 13px", background:"#1C1C1C", color:"#fff", fontSize:9, fontWeight:700, letterSpacing:"0.26em", textTransform:"uppercase", marginBottom:28, fontFamily:"'Space Mono',monospace" }}>
            <ShieldCheck size={10}/> UpForge Global Registry · Official Verification
          </div>

          <h1 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"clamp(2.6rem,6.5vw,4.6rem)", color:"#1C1C1C", lineHeight:1.06, letterSpacing:"-.025em", marginBottom:14 }}>
            UFRN Registry Lookup
          </h1>
          <p style={{ color:"#8A8478", fontSize:".95rem", maxWidth:460, margin:"0 auto 10px", lineHeight:1.85 }}>
            Enter any <strong style={{ fontWeight:600, color:"#1C1C1C" }}>UpForge Registry Number</strong> to instantly verify a startup's operational status, founders, and official record.
          </p>
          <p style={{ color:"#B0AAA2", fontSize:".78rem", fontFamily:"'Space Mono',monospace", marginBottom:40, letterSpacing:".04em" }}>
            Format: UF-2026-IND-00013 &nbsp;·&nbsp; or just type 13
          </p>

          {/* Search bar */}
          <div className="vf-search">
            <input
              ref={inputRef}
              className="vf-input"
              placeholder="UF-2026-IND-00013"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && !isScanning && handleVerify()}
              disabled={isScanning}
              aria-label="Enter UFRN to verify"
            />
            <button className="vf-btn" onClick={handleVerify} disabled={!input.trim() || isScanning}>
              {isScanning ? "Scanning…" : "Verify →"}
            </button>
          </div>

          {/* Stats row */}
          <div style={{ marginTop:24, display:"flex", justifyContent:"center", gap:8, flexWrap:"wrap" }}>
            <span className="vf-badge"><CheckCircle2 size={9}/> {totalCount.toLocaleString()}+ verified</span>
            <span className="vf-badge">Free · No login</span>
            <span className="vf-badge">Instant · Real-time</span>
          </div>
        </header>

        {/* ═══ WORLD MAP (always visible) + TERMINAL OVERLAY when scanning ══════ */}
        <div className="vf-map-wrap">
          <svg
            className="vf-map-svg"
            viewBox="0 0 800 400"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="World map showing UpForge verified startup locations"
          >
            <defs>
              <linearGradient id="vfBeam" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%"   stopColor="#C59A2E" stopOpacity="0"/>
                <stop offset="40%"  stopColor="#C59A2E" stopOpacity="0.06"/>
                <stop offset="50%"  stopColor="#C59A2E" stopOpacity="0.85"/>
                <stop offset="60%"  stopColor="#C59A2E" stopOpacity="0.06"/>
                <stop offset="100%" stopColor="#C59A2E" stopOpacity="0"/>
              </linearGradient>
              <clipPath id="vfClip"><rect x="0" y="0" width="800" height="400"/></clipPath>
            </defs>

            {/* Ocean */}
            <rect width="800" height="400" fill="#F0EDE6"/>

            {/* Subtle grid */}
            {[80,160,240,320].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="#E2DDD5" strokeWidth=".4" opacity=".7"/>)}
            {[100,200,300,400,500,600,700].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="#E2DDD5" strokeWidth=".4" opacity=".7"/>)}

            {/* ── CONTINENTS (accurate simplified outlines) ── */}

            {/* North America */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M60 40 L75 32 L95 28 L118 26 L140 30 L162 36 L180 46 L190 58 L194 72 L192 88
                 L185 102 L175 116 L168 130 L165 146 L168 160 L172 172 L170 186 L162 196
                 L154 202 L146 196 L138 184 L132 170 L134 156 L130 144 L122 136 L112 128
                 L100 122 L90 114 L82 100 L75 84 L68 68 Z"/>
            {/* Alaska bump */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M26 50 L40 42 L54 44 L62 54 L56 64 L42 65 L30 58 Z"/>
            {/* Greenland */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M196 18 L214 14 L230 16 L238 28 L234 42 L222 50 L208 48 L198 38 L192 26 Z"/>

            {/* Central America */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M152 202 L162 208 L156 220 L148 230 L142 220 L144 210 Z"/>

            {/* Caribbean islands (dots) */}
            <circle cx="186" cy="188" r="3" fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"/>
            <circle cx="192" cy="194" r="2" fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"/>

            {/* South America */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M142 230 L156 224 L170 226 L182 236 L188 250 L190 268 L186 288
                 L180 312 L174 334 L168 352 L162 362 L156 360 L150 348 L144 328
                 L140 306 L138 282 L136 258 L134 240 Z"/>

            {/* Europe */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M338 60 L354 54 L372 50 L392 48 L412 50 L430 54 L448 58 L462 64
                 L474 72 L478 84 L474 96 L464 104 L450 110 L435 114 L418 116 L402 114
                 L386 110 L372 106 L360 100 L348 92 L338 82 Z"/>
            {/* Iberia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M336 108 L350 103 L364 106 L368 118 L360 128 L346 130 L336 120 Z"/>
            {/* Scandinavia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M382 30 L394 22 L408 24 L418 34 L415 48 L405 56 L394 53 L384 44 Z"/>
            {/* Italy */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M428 114 L438 110 L446 116 L448 128 L443 140 L438 148 L432 140 L428 128 Z"/>
            {/* UK */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M360 74 L370 68 L380 70 L386 80 L380 90 L370 92 L362 84 Z"/>

            {/* Africa */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M362 120 L382 115 L402 113 L422 116 L440 122 L452 134 L458 150
                 L460 168 L458 186 L455 206 L452 228 L448 252 L444 272 L440 290
                 L435 302 L428 308 L420 304 L413 290 L408 270 L405 248 L402 226
                 L396 205 L388 184 L378 162 L368 142 L360 128 Z"/>
            {/* Madagascar */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M476 220 L482 216 L486 226 L484 240 L478 244 L472 236 L470 224 Z"/>

            {/* Russia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M478 40 L500 32 L530 27 L564 25 L596 26 L626 30 L650 36 L668 44
                 L674 56 L666 68 L650 76 L630 82 L608 86 L582 88 L556 87 L530 84
                 L506 80 L484 74 L474 62 Z"/>
            {/* Far East Russia bump */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M668 35 L686 28 L700 30 L704 42 L696 52 L680 56 L668 48 Z"/>

            {/* Middle East */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".6"
              d="M468 110 L490 104 L510 108 L522 118 L526 132 L520 146 L508 156
                 L494 160 L480 156 L468 146 L462 132 Z"/>

            {/* Central Asia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M486 80 L520 75 L554 74 L578 78 L588 90 L578 102 L556 108
                 L530 110 L508 108 L490 102 L480 90 Z"/>

            {/* Indian subcontinent */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M520 120 L538 114 L556 112 L572 116 L582 128 L586 144 L582 162
                 L574 178 L563 192 L553 200 L543 196 L534 182 L526 166 L520 148 Z"/>
            {/* Sri Lanka */}
            <circle cx="555" cy="206" r="3" fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"/>

            {/* Southeast Asia mainland */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".6"
              d="M582 118 L604 114 L622 118 L634 128 L638 142 L630 158 L618 168
                 L606 172 L594 168 L582 156 L576 140 Z"/>
            {/* Malay peninsula */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M620 168 L628 175 L632 188 L626 198 L620 192 L617 178 Z"/>

            {/* China + East Asia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M572 82 L600 76 L628 74 L652 78 L670 88 L676 102 L670 118
                 L656 130 L638 138 L618 140 L598 136 L580 126 L568 112 Z"/>
            {/* Korean peninsula */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M650 100 L660 96 L668 100 L667 112 L660 118 L652 114 Z"/>
            {/* Japan */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".5"
              d="M672 88 L682 82 L692 84 L696 96 L690 106 L680 108 L670 102 Z"/>

            {/* Indonesia (Sumatra) */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M590 192 L610 188 L624 195 L622 206 L606 210 L592 204 Z"/>
            {/* Java */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M618 206 L638 204 L648 210 L642 218 L622 214 Z"/>
            {/* Borneo */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M632 175 L648 172 L660 178 L662 190 L655 200 L640 202 L628 194 Z"/>

            {/* Australia */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".7"
              d="M634 248 L658 238 L680 236 L698 242 L714 254 L720 270 L717 290
                 L710 308 L698 320 L682 326 L664 324 L648 316 L636 302 L628 282
                 L626 262 Z"/>
            {/* Tasmania */}
            <circle cx="696" cy="336" r="5" fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"/>
            {/* New Zealand */}
            <path fill="#E4E0D8" stroke="#D2CEC6" strokeWidth=".4"
              d="M740 310 L748 304 L754 310 L752 324 L745 328 L738 320 Z"/>

            {/* ── SCAN BEAM ── */}
            {isScanning && (
              <g clipPath="url(#vfClip)">
                <rect x={beamX - 80} y={0} width={160} height={400} fill="url(#vfBeam)" style={{ pointerEvents:"none" }}/>
                <line x1={beamX} y1={0} x2={beamX} y2={400} stroke="#C59A2E" strokeWidth={1} opacity={.65} style={{ pointerEvents:"none" }}/>
              </g>
            )}

            {/* ── CITY DOTS ── */}
            {CITIES.map((c, i) => {
              const dist  = Math.abs(c.x - beamX)
              const isLit = isScanning && dist < 60
              const glow  = isLit ? Math.max(0, 1 - dist / 60) : 0
              return (
                <g key={i}>
                  {isLit && (
                    <circle cx={c.x} cy={c.y} r={5 + glow * 10} fill="none"
                      stroke="#C59A2E" strokeWidth={.8} opacity={glow * .5}
                      style={{ transition:"all .08s linear" }}/>
                  )}
                  <circle cx={c.x} cy={c.y} r={isLit ? 3 : 1.8}
                    fill={isLit ? "#C59A2E" : "#9E9890"}
                    opacity={isLit ? 1 : .55}
                    style={{ transition:"all .1s linear" }}/>
                </g>
              )
            })}

            {/* Map legend */}
            <text x="14" y="393" fontSize="7" fill="#B0AAA0" fontFamily="'Space Mono',monospace" letterSpacing="1.5">GLOBAL NODE AUDIT</text>
            <text x="400" y="393" fontSize="7" fill="#B0AAA0" fontFamily="'Space Mono',monospace" letterSpacing="1.5" textAnchor="middle">{totalCount.toLocaleString()}+ VERIFIED</text>
            <text x="786" y="393" fontSize="7" fill="#B0AAA0" fontFamily="'Space Mono',monospace" letterSpacing="1.5" textAnchor="end">REAL-TIME INDEX</text>
          </svg>

          {/* ── TERMINAL OVERLAY — shown only while scanning ── */}
          {isScanning && (
            <div className="vf-terminal-overlay">
              <div className="vf-term-header">
                <span className="vf-term-dot" style={{ background:"#FF5F57" }}/>
                <span className="vf-term-dot" style={{ background:"#FEBC2E" }}/>
                <span className="vf-term-dot" style={{ background:"#28C840" }}/>
                <span style={{ marginLeft:8 }}>UpForge Registry — UFRN Lookup</span>
              </div>
              {scanLog.map((line, i) => (
                <div
                  key={i}
                  className={`vf-log-line ${i < scanLog.length - 1 ? "done" : "active"}`}
                  style={{ animationDelay:"0ms" }}
                >
                  {line}
                </div>
              ))}
              {scanLog.length > 0 && <span className="vf-cursor"/>}
            </div>
          )}
        </div>

        {/* ═══ RESULT AREA ══════════════════════════════════════════════════════ */}
        <div style={{ padding:"0 24px" }}>

          {/* ── FOUND ── */}
          {phase === "found" && result && (
            <div className="vf-cert">
              <div className="vf-cert-head">
                <div style={{ display:"flex", alignItems:"center", gap:14 }}>
                  <div style={{ background:"#22C55E", borderRadius:"50%", padding:10, display:"flex", flexShrink:0, boxShadow:"0 0 0 5px rgba(34,197,94,.15)" }}>
                    <CheckCircle2 size={18} color="#fff"/>
                  </div>
                  <div>
                    <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.26em", textTransform:"uppercase", opacity:.4, marginBottom:4, fontFamily:"'Space Mono',monospace" }}>Identity Confirmed</div>
                    <div style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.5rem", letterSpacing:"-.01em" }}>{result.name}</div>
                  </div>
                </div>
                <div style={{ textAlign:"right", borderLeft:"1px solid rgba(255,255,255,.1)", paddingLeft:22 }}>
                  <div style={{ fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", opacity:.36, marginBottom:5, fontFamily:"'Space Mono',monospace" }}>UFRN</div>
                  <div style={{ fontFamily:"'Space Mono',monospace", fontSize:".9rem", color:"#D4AF5A", fontWeight:700, letterSpacing:".05em" }}>{result.ufrn}</div>
                </div>
              </div>

              <div className="vf-cert-body">
                <div style={{ display:"flex", gap:20, alignItems:"flex-start", flexWrap:"wrap" }}>
                  <div style={{ width:74, height:74, background:"#F5F2EC", border:"1px solid #E2DDD5", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                    {result.logo_url
                      ? <img src={result.logo_url} style={{ width:"100%", height:"100%", objectFit:"cover" }} alt={result.name}/>
                      : <span style={{ fontFamily:"'EB Garamond',serif", fontSize:"2rem", color:"#D0CAC0" }}>{result.name[0]}</span>
                    }
                  </div>
                  <div style={{ flex:1 }}>
                    <span style={{ display:"inline-block", padding:"3px 9px", background:"#FEF3C7", color:"#92400E", fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", border:"1px solid #FDE68A", marginBottom:9 }}>
                      {result.category}
                    </span>
                    <h2 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.55rem", color:"#1C1C1C", marginBottom:4, letterSpacing:"-.01em" }}>{result.name}</h2>
                    <p style={{ fontSize:".84rem", color:"#888" }}>{result.founders}</p>
                    {result.description && <p style={{ marginTop:9, fontSize:".82rem", color:"#555", lineHeight:1.78, maxWidth:420 }}>{result.description}</p>}
                  </div>
                </div>

                <div className="vf-fg">
                  <FField icon={ShieldCheck} label="Audit Status"  value="Editorial Board Verified"/>
                  <FField icon={MapPin}      label="HQ"            value={`${result.city || "Global"}, ${result.country_code}`}/>
                  <FField icon={Layers}      label="Stage"         value={result.funding_stage || "Private"}/>
                  <FField icon={Calendar}    label="Founded"       value={result.founded_year?.toString() || "2026"}/>
                  <FField icon={RotateCcw}   label="Last Updated"  value={new Date(result.updated_at || "").toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"})}/>
                  <FField icon={Globe}       label="Ledger ID"     value={`#${result.id.slice(0,8).toUpperCase()}`}/>
                </div>

                <div style={{ marginTop:36, display:"flex", flexWrap:"wrap", alignItems:"center", gap:10 }}>
                  <Link href={`/startup/${result.slug}`} className="vf-action vf-action-primary">
                    Full Dossier <ArrowRight size={11}/>
                  </Link>
                  <button onClick={handleCopy} className="vf-action vf-action-outline">
                    <Share2 size={11}/> {copied ? "Copied!" : "Share Verification"}
                  </button>
                  <button
                    onClick={handleReset}
                    style={{ marginLeft:"auto", background:"none", border:"none", fontSize:9, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#AAA", cursor:"pointer", transition:"color .18s" }}
                    onMouseEnter={e=>(e.currentTarget.style.color="#1C1C1C")}
                    onMouseLeave={e=>(e.currentTarget.style.color="#AAA")}
                  >New Search</button>
                </div>
              </div>
            </div>
          )}

          {/* ── NOT FOUND ── */}
          {phase === "notfound" && (
            <div className="vf-shake" style={{ maxWidth:500, margin:"52px auto 72px", textAlign:"center", padding:"52px 28px", border:"1.5px dashed #D8D2C8", background:"#F7F5F0" }}>
              <div style={{ color:"#D0CAC0", display:"flex", justifyContent:"center", marginBottom:16 }}>
                <XCircle size={38} strokeWidth={1.2}/>
              </div>
              <h3 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.6rem", color:"#1C1C1C", marginBottom:10 }}>Record Not Located</h3>
              <p style={{ color:"#888", fontSize:".87rem", lineHeight:1.8, marginBottom:28 }}>
                <code style={{ fontFamily:"'Space Mono',monospace", fontWeight:700, color:"#1C1C1C", fontSize:".76rem" }}>{normalizeUFRN(input)}</code>
                {" "}does not match any approved entity in our global index. Double-check the UFRN format or submit your startup for review.
              </p>
              <div style={{ display:"flex", gap:10, justifyContent:"center" }}>
                <button onClick={handleReset} className="vf-action vf-action-outline">Try Again</button>
                <Link href="/submit" className="vf-action vf-action-primary">Submit Entity</Link>
              </div>
            </div>
          )}

          {/* ── ERROR ── */}
          {phase === "error" && (
            <div style={{ textAlign:"center", padding:"48px 24px 72px" }}>
              <p style={{ color:"#888", marginBottom:18, fontSize:".87rem" }}>Something went wrong. Please try again.</p>
              <button onClick={handleReset} className="vf-action vf-action-outline">Retry</button>
            </div>
          )}
        </div>

        {/* ═══ HOW IT WORKS ════════════════════════════════════════════════════ */}
        <section style={{ padding:"88px 32px", borderTop:"1px solid #E2DDD5", textAlign:"center", background:"#FDFCF8" }}>
          <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.26em", textTransform:"uppercase", color:"#C59A2E", marginBottom:12, fontFamily:"'Space Mono',monospace" }}>
            System Architecture
          </div>
          <h2 style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"clamp(1.7rem,3.8vw,2.6rem)", color:"#1C1C1C", marginBottom:56, letterSpacing:"-.02em" }}>
            How UFRN Verification Works
          </h2>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(190px,1fr))", maxWidth:960, margin:"0 auto", gap:36 }}>
            <VStep num="01" title="Data Ingestion"  desc="Entities submit operational data through secure encrypted gateways." q="How does data ingestion work?"/>
            <VStep num="02" title="Manual Audit"    desc="Our editorial board performs manual due diligence on founders and status." q="How does the editorial audit work?"/>
            <VStep num="03" title="UFRN Assignment" desc="Upon approval, a unique sequential Registry Number is permanently issued." q="What is a UFRN?"/>
            <VStep num="04" title="Public Ledger"   desc="The verified record enters the global searchable index for instant verification." q="How is the public ledger maintained?"/>
          </div>
        </section>

        {/* ═══ TRUST SECTION ═══════════════════════════════════════════════════ */}
        <section style={{ padding:"64px 32px", borderTop:"1px solid #E2DDD5", background:"#F7F5F0", textAlign:"center" }}>
          <p style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"1.1rem", color:"#888", maxWidth:540, margin:"0 auto 32px", lineHeight:1.9, fontStyle:"italic" }}>
            "UpForge UFRN is the only independent startup verification standard with real editorial oversight — not just self-reported data."
          </p>
          <div style={{ display:"flex", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
            <span className="vf-badge"><Building2 size={9}/> Editorial Board Reviewed</span>
            <span className="vf-badge"><ShieldCheck size={9}/> Founder-Verified</span>
            <span className="vf-badge"><Globe size={9}/> Global Coverage</span>
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
        <span style={{ fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#AAA", fontFamily:"'Space Mono',monospace" }}>{label}</span>
      </div>
      <div style={{ fontSize:".88rem", fontWeight:600, color:"#1C1C1C", letterSpacing:"-.005em" }}>{value}</div>
    </div>
  )
}

function VStep({ num, title, desc, q }: { num:string; title:string; desc:string; q:string }) {
  return (
    <div className="vf-step">
      <div style={{ fontFamily:"'EB Garamond',Georgia,serif", fontSize:"2.6rem", color:"#E2DDD5", lineHeight:1, marginBottom:10 }}>{num}</div>
      <h4 style={{ fontSize:9, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"#1C1C1C", marginBottom:8 }}>{title}</h4>
      <p style={{ fontSize:".8rem", color:"#888", lineHeight:1.8 }}>{desc}</p>
    </div>
  )
}
