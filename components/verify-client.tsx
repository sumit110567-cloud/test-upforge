"use client"
/**
 * components/verify-client.tsx
 * UFRN Verification — Premium Editorial Design
 * Center-aligned visuals, dot-map scanning animation, and official registry certificate.
 */

import { useState, useRef, useCallback, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CheckCircle2, Search, Share2, RotateCcw, ShieldCheck, MapPin, Calendar, Layers } from "lucide-react"

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

// Landmass dot positions [x%, y%] for the background map
const DOTS: [number, number][] = [
  [13,28],[17,32],[21,30],[15,38],[20,42],[25,35],[28,40],[22,48],[19,52],[24,55],[27,36],[23,44],
  [26,58],[28,62],[30,68],[27,72],[29,76],[31,65],[25,64],[27,60],[29,70],
  [46,24],[50,26],[48,30],[52,28],[54,32],[56,27],[44,28],[58,30],[47,26],[53,24],[49,28],
  [48,42],[50,48],[52,54],[48,58],[50,64],[46,50],[54,46],[52,62],[50,55],[47,46],
  [64,26],[68,28],[72,32],[76,30],[80,34],[66,38],[70,42],[74,38],[78,26],[82,28],
  [68,34],[72,40],[76,44],[80,40],[62,30],[65,22],[70,20],[75,18],[84,30],[86,26],
  [70,46],[72,50],[68,52],[70,56],[69,48],[71,54],
  [78,48],[80,52],[82,48],[84,44],[79,50],[83,46],
  [82,62],[86,64],[84,68],[80,66],[88,60],[85,66],[83,64],
  [84,32],[86,34],[85,30],[44,22],[45,24],[24,12],[26,14],[28,12],
]

export function VerifyClient({ totalCount, isOrg }: Props) {
  const [input, setInput]           = useState("")
  const [phase, setPhase]           = useState<Phase>("idle")
  const [result, setResult]         = useState<StartupRecord | null>(null)
  const [copied, setCopied]         = useState(false)
  const [activeDots, setActiveDots] = useState<Set<number>>(new Set())
  const inputRef  = useRef<HTMLInputElement>(null)
  const scanTimer = useRef<ReturnType<typeof setInterval> | null>(null)

  function normalizeUFRN(raw: string): string {
    const s = raw.trim().toUpperCase().replace(/\s/g, "")
    if (/^UF-\d{4}-[A-Z]{2,4}-\d+$/.test(s)) return s
    const stripped = s.startsWith("UF-") ? s.slice(3) : s
    if (/^\d{4}-[A-Z]{2,4}-\d+$/.test(stripped)) return `UF-${stripped}`
    if (/^[A-Z]{2,4}-\d+$/.test(stripped))       return `UF-2026-${stripped}`
    if (/^\d+$/.test(stripped)) {
        const country = isOrg ? "AUS" : "IND";
        return `UF-2026-${country}-${stripped.padStart(5, '0')}`;
    }
    return s.startsWith("UF-") ? s : `UF-${s}`
  }

  function startScan() {
    scanTimer.current = setInterval(() => {
      const set = new Set<number>()
      while (set.size < 12) set.add(Math.floor(Math.random() * DOTS.length))
      setActiveDots(set)
    }, 100)
  }
  
  function stopScan() {
    if (scanTimer.current) clearInterval(scanTimer.current)
    setActiveDots(new Set())
  }

  const handleVerify = useCallback(async () => {
    const raw = input.trim()
    if (!raw) return
    const ufrn = normalizeUFRN(raw)
    setPhase("searching"); setResult(null); startScan()
    
    try {
      const sb = createClient()
      const { data, error } = await sb
        .from("startups")
        .select("*")
        .eq("ufrn", ufrn)
        .eq("status", "approved")
        .single()
      
      await new Promise(r => setTimeout(r, 1600))
      stopScan()
      
      if (error || !data) setPhase("notfound")
      else { setResult(data as StartupRecord); setPhase("found") }
    } catch { stopScan(); setPhase("error") }
  }, [input, isOrg])

  const handleReset = () => {
    setPhase("idle"); setResult(null); setInput("")
    setTimeout(() => inputRef.current?.focus(), 80)
  }

  const handleCopy = () => {
    if (!result) return
    const url = isOrg ? "upforge.org" : "upforge.in"
    navigator.clipboard.writeText(`https://www.${url}/verify?ufrn=${result.ufrn}`)
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }

  const fmt = (amt?: number | null) => {
    if (!amt) return null
    if (amt >= 1e9) return `$${(amt/1e9).toFixed(1)}B`
    if (amt >= 1e6) return `$${(amt/1e6).toFixed(1)}M`
    return `$${amt.toLocaleString()}`
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;1,400&display=swap');
        
        .vp-wrap { 
          --cream: #FDFCF8; --ink: #111111; --gold: #C59A2E; --border: #D8D2C8;
          background: var(--cream); color: var(--ink); min-height: 100vh; display: flex; flex-col: column;
        }

        .vp-main { flex: 1; padding-top: 80px; text-align: center; }
        
        .vp-header { max-width: 800px; margin: 0 auto; padding: 40px 24px; }
        .vp-label { font-size: 10px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: block; }
        .vp-title { font-family: 'Playfair Display', serif; font-size: clamp(2.5rem, 6vw, 4rem); font-weight: 900; line-height: 1.1; margin-bottom: 20px; letter-spacing: -0.02em; }
        .vp-title em { font-style: italic; font-weight: 400; }
        .vp-desc { font-family: 'EB Garamond', serif; font-size: 1.25rem; font-style: italic; color: #666; max-width: 540px; margin: 0 auto 40px; line-height: 1.6; }

        .vp-search-box { 
          max-width: 600px; margin: 0 auto 60px; position: relative;
          background: #FFF; border: 2px solid var(--ink); display: flex;
          box-shadow: 12px 12px 0px rgba(17, 17, 17, 0.04); transition: transform 0.2s ease;
        }
        .vp-search-box:focus-within { transform: translate(-2px, -2px); box-shadow: 14px 14px 0px rgba(197, 154, 46, 0.15); }
        .vp-input { flex: 1; padding: 20px 24px; border: none; font-family: 'EB Garamond', serif; font-size: 1.2rem; font-style: italic; outline: none; }
        .vp-submit { background: var(--ink); color: #FFF; border: none; padding: 0 32px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em; font-size: 12px; cursor: pointer; transition: 0.2s; }
        .vp-submit:hover:not(:disabled) { background: var(--gold); }
        .vp-submit:disabled { opacity: 0.5; }

        .vp-map-container { max-width: 1000px; margin: 0 auto; position: relative; border-top: 1px solid var(--border); overflow: hidden; padding: 40px 0; }
        .vp-dot-map { width: 100%; height: 220px; opacity: 0.8; }
        .vp-map-label { position: absolute; bottom: 20px; width: 100%; display: flex; justify-content: space-around; font-size: 9px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.2em; color: #AAA; }

        .vp-certificate { 
          max-width: 800px; margin: 0 auto 80px; background: #FFF; border: 1px solid var(--border); 
          text-align: left; position: relative; animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes slideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: none; } }
        
        .vp-cert-top { background: var(--ink); color: #FFF; padding: 32px; display: flex; justify-content: space-between; align-items: center; }
        .vp-cert-body { padding: 40px; }
        .vp-field-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; margin-top: 32px; border-top: 1px solid #EEE; pt: 32px; }
        .vp-f-label { font-size: 9px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #AAA; margin-bottom: 4px; }
        .vp-f-value { font-size: 14px; font-weight: 600; }

        .vp-how-section { background: #F6F3ED; padding: 80px 24px; border-top: 1px solid var(--border); }
        .vp-step-grid { display: grid; grid-template-columns: repeat(4, 1fr); max-width: 1100px; margin: 40px auto 0; gap: 40px; }
        @media (max-width: 768px) { .vp-step-grid { grid-template-columns: 1fr; } .vp-field-grid { grid-template-columns: 1fr; } }
      `}</style>

      <div className="vp-wrap">
        <Navbar />
        
        <main className="vp-main">
          {/* Hero Section */}
          <header className="vp-header">
            <span className="vp-label">Official Registry Certificate</span>
            <h1 className="vp-title">Verify Startup <br/><em>Identity & Status</em></h1>
            <p className="vp-desc">
              Cross-reference founders, funding, and registry status. Access the official record of any verified entity in the global ecosystem.
            </p>

            <div className="vp-search-box">
              <input 
                ref={inputRef}
                className="vp-input"
                placeholder="Enter UFRN (e.g. 00013 or UF-2026-IND-00013)"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleVerify()}
                disabled={phase === "searching"}
              />
              <button 
                className="vp-submit"
                onClick={handleVerify}
                disabled={!input || phase === "searching"}
              >
                {phase === "searching" ? "Scanning..." : "Verify"}
              </button>
            </div>
          </header>

          {/* Interactive Map Section */}
          <section className="vp-map-container">
            <svg className="vp-dot-map" viewBox="0 0 100 50">
              {DOTS.map(([x, y], i) => (
                <circle 
                  key={i} cx={x} cy={y} 
                  r={activeDots.has(i) ? 0.9 : 0.5} 
                  fill={activeDots.has(i) ? "var(--gold)" : "#D8D2C8"}
                  style={{ transition: 'all 0.1s ease', opacity: activeDots.has(i) ? 1 : 0.3 }}
                />
              ))}
            </svg>
            <div className="vp-map-label">
              <span>UpForge Global Registry Index</span>
              <span>{totalCount.toLocaleString()}+ Verified Entities</span>
              <span>Real-time Audit Active</span>
            </div>
          </section>

          {/* Results Display */}
          <section className="px-6">
            {phase === "searching" && (
              <div className="py-20 animate-pulse text-[10px] font-bold uppercase tracking-[0.4em] text-gray-400">
                Searching Secure Database...
              </div>
            )}

            {phase === "found" && result && (
              <div className="vp-certificate">
                <div className="vp-cert-top">
                  <div className="flex items-center gap-4">
                    <div className="bg-emerald-500 p-2 rounded-full"><CheckCircle2 className="text-white" size={20}/></div>
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">Status: Approved</div>
                      <div className="text-xl font-serif font-bold">{result.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[9px] font-bold uppercase tracking-widest opacity-60">UFRN ID</div>
                    <div className="font-mono text-sm text-[#C59A2E] font-bold">{result.ufrn}</div>
                  </div>
                </div>

                <div className="vp-cert-body">
                   <div className="flex gap-8 items-start">
                      <div className="w-24 h-24 bg-[#F9F9F9] border border-[#EEE] flex items-center justify-center shrink-0">
                         {result.logo_url ? <img src={result.logo_url} className="w-full h-full object-cover"/> : <span className="text-4xl font-serif text-gray-300">{result.name[0]}</span>}
                      </div>
                      <div>
                        <span className="inline-block px-2 py-1 bg-amber-50 text-amber-700 text-[9px] font-bold uppercase tracking-wider border border-amber-100 mb-2">
                           {result.category}
                        </span>
                        <h3 className="text-2xl font-serif font-bold mb-1">{result.name}</h3>
                        <p className="text-sm font-serif italic text-gray-500">Founded by {result.founders}</p>
                      </div>
                   </div>

                   <div className="vp-field-grid pt-8">
                      <Field icon={ShieldCheck} label="Verification" value="Editorial Board Verified" />
                      <Field icon={MapPin} label="Location" value={`${result.city || 'Global'}, ${result.country_code}`} />
                      <Field icon={Layers} label="Funding" value={result.funding_stage || 'Undisclosed'} />
                      <Field icon={Calendar} label="Registered" value={result.founded_year?.toString() || '2026'} />
                      <Field icon={RotateCcw} label="Last Audit" value={new Date(result.updated_at || "").toLocaleDateString()} />
                      <Field icon={Search} label="Index" value={`#${result.id.slice(0,6).toUpperCase()}`} />
                   </div>

                   <div className="mt-10 flex gap-4">
                      <Link href={`/startup/${result.slug}`} className="bg-black text-white px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-[#C59A2E] transition-all">View Full Dossier</Link>
                      <button onClick={handleCopy} className="border border-gray-200 px-6 py-3 text-[10px] font-bold uppercase tracking-widest hover:bg-gray-50 flex items-center gap-2">
                        <Share2 size={12}/> {copied ? "Link Copied" : "Share Link"}
                      </button>
                      <button onClick={handleReset} className="ml-auto text-gray-400 hover:text-black text-[10px] font-bold uppercase tracking-widest">New Search</button>
                   </div>
                </div>
              </div>
            )}

            {phase === "notfound" && (
              <div className="max-w-[500px] mx-auto py-20 border border-dashed border-gray-200 mb-20">
                <div className="text-gray-300 mb-4 flex justify-center"><Search size={40}/></div>
                <h3 className="text-xl font-serif font-bold mb-2">Registry Record Not Found</h3>
                <p className="text-sm italic text-gray-400 mb-6 px-10">We couldn't find an approved startup with that UFRN. Please check the ID or ensure the startup has been approved.</p>
                <div className="flex gap-4 justify-center">
                  <button onClick={handleReset} className="text-[10px] font-bold uppercase tracking-widest border border-black px-6 py-2">Try Again</button>
                  <Link href="/submit" className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-6 py-2">Submit Startup</Link>
                </div>
              </div>
            )}
          </section>

          {/* How It Works Section */}
          <section className="vp-how-section">
             <span className="vp-label">System Architecture</span>
             <h2 className="text-3xl font-serif font-bold">How the Registry Works</h2>
             <div className="vp-step-grid">
                <Step num="01" title="Data Ingestion" desc="Startups submit operational data through our secure gateway." />
                <Step num="02" title="Manual Review" desc="Our editorial board audits the founding team and legal status." />
                <Step num="03" title="UFRN Issuance" desc="Upon approval, a unique Registry Number is cryptographically issued." />
                <Step num="04" title="Public Ledger" desc="The entity is added to the searchable global database for due diligence." />
             </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}

function Field({ icon: Icon, label, value }: { icon: any, label: string, value: string }) {
    return (
        <div>
            <div className="vp-f-label flex items-center gap-2">
                <Icon size={10} className="text-[#C59A2E]"/> {label}
            </div>
            <div className="vp-f-value">{value}</div>
        </div>
    )
}

function Step({ num, title, desc }: { num: string, title: string, desc: string }) {
    return (
        <div className="text-left border-l border-gray-200 pl-6 py-4">
            <div className="text-4xl font-serif font-black text-gray-100 mb-2">{num}</div>
            <h4 className="text-sm font-bold uppercase tracking-tight mb-2">{title}</h4>
            <p className="text-xs font-serif italic text-gray-500 leading-relaxed">{desc}</p>
        </div>
    )
}
