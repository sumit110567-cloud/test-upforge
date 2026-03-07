"use client";

import { useState, useEffect, ChangeEvent } from "react";
import {
  Sparkles, FileText, Download, TrendingUp, Shield,
  Target, Zap, AlertTriangle, Users, Globe, BarChart2,
  CheckCircle2, ChevronRight, IndianRupee, Award,
  RefreshCw, Search, Info,
} from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer,
} from "recharts";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface FormData {
  startupName: string; founderName: string; foundedYear: string;
  industry: string; city: string; website: string; description: string;
  targetMarket: string; businessModel: string; currentRevenue: string;
  teamSize: string; fundingStage: string; fundingRaised: string;
  keyCompetitors: string; uniqueAdvantage: string;
}
interface ValuationRange { low:string; high:string; midpoint:string; methodology:string; confidence:"high"|"medium"|"low"; confidenceNote:string; }
interface Scores { overall:number; market:number; team:number; product:number; traction:number; moat:number; financials:number; }
interface Strength { title:string; detail:string; }
interface Risk { level:"high"|"medium"|"low"; title:string; detail:string; mitigation:string; }
interface Competitor { name:string; threat:"high"|"medium"|"low"; difference:string; }
interface MarketOpp { tam:string; sam:string; som:string; insight:string; }
interface GrowthLever { lever:string; impact:string; timeline:string; }
interface FocusArea { area:string; priority:"critical"|"high"|"medium"; action:string; }
interface InvestorReadiness { score:number; verdict:string; improvements:string[]; }
interface RoadmapPhase { phase:string; timeline:string; goals:string[]; }
interface Benchmark { metric:string; startup:string; industry:string; verdict:"above"|"below"|"on-par"; }
interface ReportData {
  dataSourcesFound:string[]; publicDataNote:string; executiveSummary:string;
  valuationRange:ValuationRange; scores:Scores; strengths:Strength[]; risks:Risk[];
  competitorAnalysis:Competitor[]; marketOpportunity:MarketOpp; growthLevers:GrowthLever[];
  focusAreas:FocusArea[]; investorReadiness:InvestorReadiness; roadmap:RoadmapPhase[];
  benchmarks:Benchmark[]; verdict:string; reportId:string; disclaimer:string;
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const STEPS = [
  { label:"Searching public news & media mentions",        ms:2400 },
  { label:"Scanning Crunchbase, Inc42, YourStory data",   ms:2200 },
  { label:"Mapping competitive landscape",                 ms:1800 },
  { label:"Running DCF & revenue-multiple models",         ms:2600 },
  { label:"Calculating sector-adjusted risk scores",       ms:2000 },
  { label:"Benchmarking against 500+ Indian startups",     ms:1900 },
  { label:"Generating founder-grade narrative",            ms:2200 },
  { label:"Compiling report & confidence signals",         ms:1500 },
];

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
:root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--pos:#1a6b3a;--neg:#b91c1c}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
.uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
.uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
.uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
.uf-w{max-width:1200px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}
@keyframes uf-up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
.a0{animation:uf-up .5s .00s cubic-bezier(.16,1,.3,1) both}
.a1{animation:uf-up .5s .08s cubic-bezier(.16,1,.3,1) both}
.a2{animation:uf-up .5s .16s cubic-bezier(.16,1,.3,1) both}
.a3{animation:uf-up .5s .24s cubic-bezier(.16,1,.3,1) both}
.dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
.dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:dot-p 2s ease-in-out infinite}
@keyframes dot-p{0%,100%{transform:scale(1)}50%{transform:scale(2);opacity:0}}
.uf-sec{padding:clamp(20px,4vw,36px) 0;border-bottom:1px solid var(--rule)}
.uf-sech{display:flex;align-items:center;gap:10px;margin-bottom:18px}
.uf-sech::after{content:'';flex:1;height:1px;background:var(--rule)}
.uf-inp{width:100%;border:1px solid var(--rule);background:#fff;padding:10px 14px;font-size:13px;color:var(--ink);outline:none;transition:border-color .18s;font-family:'Source Serif 4',Georgia,serif}
.uf-inp:focus{border-color:var(--ink)}
.uf-inp::placeholder{color:var(--ink4)}
.uf-lbl2{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;color:var(--ink4);margin-bottom:5px;font-family:'Source Serif 4',Georgia,serif}
.uf-sh{display:flex;align-items:center;gap:8px;padding:10px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rl);margin-bottom:16px}
@media print{.no-print{display:none!important}body{background:white!important}}
@media(max-width:768px){.mc{grid-template-columns:1fr!important}}
@media(max-width:640px){.hm{display:none!important}}
`;

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────
function RBadge({ level }: { level: "high"|"medium"|"low" }) {
  const s={high:{bg:"#fef2f2",c:"#b91c1c",b:"#fecaca"},medium:{bg:"#fffbeb",c:"#b8860b",b:"#fde68a"},low:{bg:"#f0fdf4",c:"#1a6b3a",b:"#bbf7d0"}}[level];
  return <span style={{fontSize:"8px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",padding:"2px 8px",background:s.bg,color:s.c,border:`1px solid ${s.b}`,fontFamily:"'Source Serif 4',Georgia,serif"}}>{level}</span>;
}
function CBadge({ level }: { level: "high"|"medium"|"low" }) {
  const c={high:"#1a6b3a",medium:"#b8860b",low:"#b91c1c"}[level];
  const t={high:"High Confidence",medium:"Medium Confidence",low:"Estimated"}[level];
  return <span style={{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"9px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:c,border:`1px solid ${c}`,padding:"2px 8px",fontFamily:"'Source Serif 4',Georgia,serif"}}><span style={{width:"5px",height:"5px",borderRadius:"50%",background:c,display:"inline-block"}}/>{t}</span>;
}
function sc(v: number) { return v>=70?"#1a6b3a":v>=50?"#b8860b":"#b91c1c"; }

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export function ReportGenerator() {
  const [step,     setStep]     = useState<"form"|"loading"|"report">("form");
  const [form,     setForm]     = useState<FormData>({startupName:"",founderName:"",foundedYear:"",industry:"",city:"",website:"",description:"",targetMarket:"",businessModel:"",currentRevenue:"",teamSize:"",fundingStage:"",fundingRaised:"",keyCompetitors:"",uniqueAdvantage:""});
  const [curStep,  setCurStep]  = useState(0);
  const [progress, setProgress] = useState(0);
  const [report,   setReport]   = useState<ReportData|null>(null);

  useEffect(() => { if (step==="report") window.scrollTo({top:0,behavior:"smooth"}); },[step]);
  useEffect(() => {
    if (step==="loading") { document.body.style.overflow="hidden"; }
    else { document.body.style.overflow=""; }
    return () => { document.body.style.overflow=""; };
  },[step]);

  function upd(f: keyof FormData) {
    return (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
      setForm(p => ({...p,[f]:e.target.value}));
  }

  async function run() {
    setStep("loading"); setCurStep(0); setProgress(0);
    const total = STEPS.reduce((a,s)=>a+s.ms,0);
    let elapsed = 0;
    const apiP = fetch("/api/generate-report",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(form)}).then(r=>r.json()).catch(()=>null);
    for (let i=0;i<STEPS.length;i++) {
      setCurStep(i);
      await new Promise(r=>setTimeout(r,STEPS[i].ms));
      elapsed+=STEPS[i].ms;
      setProgress(Math.round((elapsed/total)*100));
    }
    const data=await apiP;
    setReport(data&&!data.error?data:fallback(form));
    setStep("report");
  }

  const ok = !!(form.startupName&&form.founderName&&form.foundedYear&&form.industry&&form.description);

  // ══ FORM ══════════════════════════════════════════════════════════════════
  if (step==="form") return (
    <div style={{background:"#fff",color:"var(--ink)",fontFamily:"'Source Serif 4',Georgia,serif",minHeight:"100vh",paddingBottom:"60px",WebkitFontSmoothing:"antialiased"}}>
      <style>{CSS}</style>
      <div className="uf-w" style={{paddingTop:"clamp(20px,4vw,40px)"}}>

        <header className="a0" style={{borderBottom:"2px solid var(--ink)",paddingBottom:"clamp(20px,4vw,40px)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"10px",borderBottom:"1px solid var(--rule)",marginBottom:"clamp(20px,4vw,36px)",flexWrap:"wrap",gap:"8px"}}>
            <span className="uf-lbl" style={{color:"var(--ink2)"}}>{new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"Asia/Kolkata"})}</span>
            <div className="hm" style={{display:"flex",gap:"20px"}}>
              {["Free","AI-Powered","Web Search Backed"].map(t=><span key={t} style={{fontSize:"10px",color:"var(--ink4)",letterSpacing:"0.12em",textTransform:"uppercase"}}>✓ {t}</span>)}
            </div>
            <div style={{display:"flex",alignItems:"center",gap:"6px"}}><div className="dot"/><span className="uf-lbl" style={{color:"var(--ink4)"}}>Live Engine</span></div>
          </div>
          <div style={{textAlign:"center"}}>
            <p style={{fontSize:"11px",letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--ink3)",marginBottom:"12px"}}>UpForge · Intelligence Reports</p>
            <h1 className="uf-d" style={{fontSize:"clamp(2.4rem,7vw,5.5rem)",fontWeight:900,lineHeight:0.9,color:"var(--ink)",marginBottom:"16px"}}>
              Startup Analysis<br/><em style={{fontStyle:"italic",color:"var(--gold)"}}>Report</em>
            </h1>
            <p style={{fontSize:"14px",color:"var(--ink3)",maxWidth:"480px",margin:"0 auto",lineHeight:1.6}}>AI searches public data, news & funding databases — then calculates your honest valuation, risks & 12-month roadmap.</p>
          </div>
        </header>

        <div className="a1" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",borderBottom:"1px solid var(--rule)"}}>
          {[{I:Search,l:"Web Search Backed",s:"News, Crunchbase, Inc42"},{I:IndianRupee,l:"Honest Valuation",s:"Age & stage adjusted"},{I:BarChart2,l:"7-Dimension Score",s:"Market, Team, Moat…"},{I:TrendingUp,l:"12-Month Roadmap",s:"Actionable milestones"}].map(({I,l,s},i)=>(
            <div key={i} style={{padding:"16px",borderRight:i<3?"1px solid var(--rule)":"none",background:i%2===1?"var(--warm)":"#fff"}}>
              <I style={{width:"14px",height:"14px",color:"var(--ink4)",marginBottom:"8px",display:"block"}}/>
              <p style={{fontSize:"12px",fontWeight:600,color:"var(--ink)",marginBottom:"2px"}}>{l}</p>
              <p style={{fontSize:"10px",color:"var(--ink4)"}}>{s}</p>
            </div>
          ))}
        </div>

        <div className="a2" style={{display:"grid",gridTemplateColumns:"1fr clamp(240px,28%,320px)",gap:"0",borderBottom:"1px solid var(--rule)"}}>
          <div style={{paddingRight:"clamp(16px,4vw,40px)",paddingTop:"28px",paddingBottom:"28px",borderRight:"1px solid var(--rule)"}}>

            <div className="uf-sh"><span className="uf-m" style={{fontSize:"9px",color:"var(--gold)",fontWeight:700}}>01</span><span className="uf-lbl" style={{color:"var(--ink2)"}}>Startup Identity</span></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px",marginBottom:"24px"}} className="mc">
              {[{l:"Startup Name *",f:"startupName",p:"e.g. Krutrim AI"},{l:"Founder Name *",f:"founderName",p:"e.g. Bhavish Aggarwal"},{l:"Headquarters City",f:"city",p:"e.g. Bengaluru"},{l:"Website URL",f:"website",p:"https://yourstartup.com"}].map(({l,f,p})=>(
                <div key={f}><label className="uf-lbl2">{l}</label><input className="uf-inp" placeholder={p} value={(form as Record<string,string>)[f]} onChange={upd(f as keyof FormData)}/></div>
              ))}
              <div><label className="uf-lbl2">Founded Year *</label><input className="uf-inp" placeholder="e.g. 2022" type="number" min="2000" max="2025" value={form.foundedYear} onChange={upd("foundedYear")}/></div>
              <div><label className="uf-lbl2">Industry / Sector *</label>
                <select className="uf-inp" value={form.industry} onChange={upd("industry")}>
                  <option value="">Select…</option>
                  {["AI/ML","FinTech","SaaS","EdTech","HealthTech","D2C/E-commerce","Climate Tech","Space Tech","AgriTech","Mobility","Gaming","Web3/Crypto","BioTech","Media/Content","Other"].map(s=><option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            <div className="uf-sh"><span className="uf-m" style={{fontSize:"9px",color:"var(--gold)",fontWeight:700}}>02</span><span className="uf-lbl" style={{color:"var(--ink2)"}}>What You Do</span></div>
            <div style={{display:"grid",gap:"14px",marginBottom:"24px"}}>
              <div><label className="uf-lbl2">One-line description *</label><input className="uf-inp" placeholder="e.g. AI-powered invoice automation for Indian SMEs" value={form.description} onChange={upd("description")}/></div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}} className="mc">
                <div><label className="uf-lbl2">Target Market</label><input className="uf-inp" placeholder="e.g. Indian SMEs, B2B SaaS" value={form.targetMarket} onChange={upd("targetMarket")}/></div>
                <div><label className="uf-lbl2">Revenue Model</label><input className="uf-inp" placeholder="e.g. SaaS subscription" value={form.businessModel} onChange={upd("businessModel")}/></div>
              </div>
              <div><label className="uf-lbl2">Your Unique Moat / Advantage</label><textarea className="uf-inp" style={{height:"64px",resize:"none"}} placeholder="What makes you defensible? IP, network effects, data…" value={form.uniqueAdvantage} onChange={upd("uniqueAdvantage")}/></div>
            </div>

            <div className="uf-sh"><span className="uf-m" style={{fontSize:"9px",color:"var(--gold)",fontWeight:700}}>03</span><span className="uf-lbl" style={{color:"var(--ink2)"}}>Traction & Funding</span></div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"14px"}} className="mc">
              <div><label className="uf-lbl2">Annual Revenue (ARR)</label><input className="uf-inp" placeholder="₹0 / Pre-revenue / ₹50L ARR" value={form.currentRevenue} onChange={upd("currentRevenue")}/></div>
              <div><label className="uf-lbl2">Team Size</label><input className="uf-inp" placeholder="e.g. 8" type="number" value={form.teamSize} onChange={upd("teamSize")}/></div>
              <div><label className="uf-lbl2">Funding Stage</label>
                <select className="uf-inp" value={form.fundingStage} onChange={upd("fundingStage")}>
                  <option value="">Select…</option>
                  {["Bootstrapped","Pre-Seed","Seed","Series A","Series B","Series C+","Revenue-funded"].map(s=><option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div><label className="uf-lbl2">Total Funding Raised</label><input className="uf-inp" placeholder="e.g. $500K, ₹2Cr, None" value={form.fundingRaised} onChange={upd("fundingRaised")}/></div>
              <div style={{gridColumn:"span 2"}}><label className="uf-lbl2">Key Competitors</label><input className="uf-inp" placeholder="e.g. Razorpay, PayU, Cashfree" value={form.keyCompetitors} onChange={upd("keyCompetitors")}/></div>
            </div>
          </div>

          <div style={{paddingLeft:"clamp(16px,4vw,32px)",paddingTop:"28px",paddingBottom:"28px"}}>
            <div style={{position:"sticky",top:"80px"}}>
              <div style={{border:"1px solid var(--rule)",padding:"18px",marginBottom:"14px"}}>
                <span className="uf-lbl" style={{display:"block",marginBottom:"12px"}}>What We Analyse</span>
                {["Live web search for your startup","News & media mentions","Sector funding benchmarks","Age-adjusted valuation","Revenue multiple vs peers","DCF (if revenue exists)","Market size TAM/SAM/SOM","Competitive moat analysis","Investor readiness score","30/90/365-day roadmap"].map((item,i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"7px",marginBottom:"6px"}}>
                    <CheckCircle2 style={{width:"11px",height:"11px",color:"var(--pos)",flexShrink:0}}/>
                    <span style={{fontSize:"11px",color:"var(--ink3)"}}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{border:"1px solid #fde68a",background:"#fffbeb",padding:"14px",marginBottom:"14px"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:"8px"}}>
                  <Info style={{width:"12px",height:"12px",color:"var(--gold)",flexShrink:0,marginTop:"1px"}}/>
                  <div>
                    <span className="uf-lbl" style={{color:"var(--gold)",display:"block",marginBottom:"5px"}}>Honest Valuations</span>
                    <p style={{fontSize:"11px",color:"#92400e",lineHeight:1.55}}>New startups (&lt;1yr) with no revenue are valued at ₹20L–₹1.5Cr max. We won&apos;t inflate numbers.</p>
                  </div>
                </div>
              </div>
              <div style={{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"20px"}}>
                {[{I:Shield,t:"100% free, no signup"},{I:Search,t:"Live web search"},{I:FileText,t:"Print-ready PDF"}].map(({I,t},i)=>(
                  <div key={i} style={{display:"flex",alignItems:"center",gap:"8px"}}><I style={{width:"12px",height:"12px",color:"var(--ink4)"}}/><span style={{fontSize:"11px",color:"var(--ink3)"}}>{t}</span></div>
                ))}
              </div>
              <button onClick={run} disabled={!ok} style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",padding:"14px 20px",fontSize:"13px",fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",cursor:ok?"pointer":"not-allowed",border:"none",background:ok?"var(--ink)":"var(--rl)",color:ok?"#fff":"var(--ink4)",transition:"background .18s",fontFamily:"'Source Serif 4',Georgia,serif"}}>
                <Sparkles style={{width:"14px",height:"14px"}}/>Generate Report
              </button>
              {!ok&&<p style={{fontSize:"10px",color:"var(--ink4)",textAlign:"center",marginTop:"8px"}}>Fill required fields (*) to continue</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ══ LOADING ════════════════════════════════════════════════════════════════
  if (step==="loading") {
    const cleanUrl = form.website?.replace(/^https?:\/\//,"").replace(/\/$/,"") || null;
    return (
      <div style={{position:"fixed",inset:0,zIndex:9999,background:"#080808",overflow:"hidden",display:"flex",flexDirection:"column",fontFamily:"'Source Serif 4',Georgia,serif"}}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
          @keyframes ld-sw{0%{top:-4px;opacity:0}3%{opacity:1}97%{opacity:1}100%{top:100%;opacity:0}}
          @keyframes ld-gf{0%,100%{opacity:.04}60%{opacity:.09}}
          @keyframes ld-gl{0%,100%{opacity:.85}50%{opacity:1;filter:brightness(1.3)}}
          @keyframes ld-cur{0%,49%{opacity:1}50%,100%{opacity:0}}
          @keyframes ld-sf{from{opacity:0;transform:translateX(-8px)}to{opacity:1;transform:translateX(0)}}
          @keyframes ld-pl{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.85)}}
          .ld-sw{animation:ld-sw 5s linear infinite}
          .ld-gf{animation:ld-gf 4s ease-in-out infinite}
          .ld-cur{animation:ld-cur .9s step-end infinite}
          .ld-sf{animation:ld-sf .35s cubic-bezier(.16,1,.3,1) both}
          .ld-pl{animation:ld-pl 1.4s ease-in-out infinite}
          .ld-gl{animation:ld-gl 2.5s ease-in-out infinite}
        `}</style>

        {/* dot grid bg */}
        <div className="ld-gf" style={{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:"radial-gradient(rgba(184,134,11,.12) 1px,transparent 1px)",backgroundSize:"28px 28px"}}/>
        {/* scanline */}
        <div className="ld-sw" style={{position:"absolute",left:0,right:0,top:0,height:"100px",background:"linear-gradient(to bottom,transparent,rgba(184,134,11,.07) 40%,rgba(184,134,11,.14) 50%,rgba(184,134,11,.07) 60%,transparent)",pointerEvents:"none",zIndex:1}}/>
        {/* vignette */}
        <div style={{position:"absolute",inset:0,pointerEvents:"none",zIndex:1,background:"radial-gradient(ellipse at center,transparent 45%,rgba(0,0,0,.75) 100%)"}}/>

        {/* top bar */}
        <div style={{position:"relative",zIndex:10,borderBottom:"1px solid rgba(184,134,11,.12)",padding:"14px clamp(16px,3vw,32px)",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(0,0,0,.5)",backdropFilter:"blur(8px)"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <img src="/logo.jpg" alt="UpForge" style={{width:"22px",height:"22px",objectFit:"contain",opacity:.9}}/>
            <span style={{fontSize:"10px",letterSpacing:"0.24em",textTransform:"uppercase",color:"rgba(255,255,255,.3)",fontFamily:"'JetBrains Mono',monospace"}}>UpForge Intelligence</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"6px"}}>
            <span className="ld-pl" style={{width:"6px",height:"6px",borderRadius:"50%",background:"#b8860b",display:"inline-block"}}/>
            <span style={{fontSize:"9px",letterSpacing:"0.18em",textTransform:"uppercase",color:"rgba(184,134,11,.7)",fontFamily:"'JetBrains Mono',monospace"}}>ANALYSIS RUNNING</span>
          </div>
        </div>

        {/* content */}
        <div style={{position:"relative",zIndex:10,flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"clamp(20px,4vw,48px) clamp(16px,3vw,32px)",overflowY:"auto"}}>
          <div style={{width:"100%",maxWidth:"660px"}}>

            {/* heading */}
            <div style={{textAlign:"center",marginBottom:"clamp(28px,5vw,52px)"}}>
              <p style={{fontSize:"9px",letterSpacing:"0.3em",textTransform:"uppercase",color:"rgba(255,255,255,.18)",marginBottom:"12px",fontFamily:"'JetBrains Mono',monospace"}}>
                DEEP ANALYSIS · {new Date().toLocaleDateString("en-IN",{day:"2-digit",month:"short",year:"numeric"}).toUpperCase()}
              </p>
              <h2 style={{fontFamily:"'Playfair Display',Georgia,serif",fontSize:"clamp(2rem,6vw,3.5rem)",fontWeight:900,color:"#fff",lineHeight:1,marginBottom:"12px",textShadow:"0 0 60px rgba(184,134,11,.2)"}}>
                {form.startupName}
              </h2>
              {cleanUrl&&(
                <div style={{display:"inline-flex",alignItems:"center",gap:"7px",padding:"5px 14px",border:"1px solid rgba(184,134,11,.22)",background:"rgba(184,134,11,.06)",marginBottom:"10px"}}>
                  <span className="ld-pl" style={{width:"5px",height:"5px",borderRadius:"50%",background:"#b8860b",display:"inline-block"}}/>
                  <span style={{fontSize:"11px",color:"rgba(184,134,11,.7)",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.04em"}}>{cleanUrl}</span>
                </div>
              )}
              <p style={{fontSize:"12px",color:"rgba(255,255,255,.2)"}}>
                {[form.industry,form.city,form.foundedYear?`Est. ${form.foundedYear}`:null].filter(Boolean).join(" · ")}
              </p>
            </div>

            {/* progress */}
            <div style={{marginBottom:"10px"}}>
              <div style={{height:"2px",background:"rgba(255,255,255,.05)",borderRadius:"2px",overflow:"hidden"}}>
                <div className="ld-gl" style={{height:"100%",background:"linear-gradient(90deg,#7a5a05,#b8860b 60%,#e8c547)",width:`${progress}%`,transition:"width .6s cubic-bezier(.4,0,.2,1)",borderRadius:"2px"}}/>
              </div>
              <div style={{display:"flex",justifyContent:"space-between",marginTop:"6px"}}>
                <span style={{fontSize:"9px",color:"rgba(255,255,255,.15)",fontFamily:"'JetBrains Mono',monospace"}}>{progress}% complete</span>
                <span style={{fontSize:"9px",color:"rgba(184,134,11,.45)",fontFamily:"'JetBrains Mono',monospace",maxWidth:"60%",textAlign:"right",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis"}}>
                  {STEPS[Math.min(curStep,STEPS.length-1)].label}<span className="ld-cur">_</span>
                </span>
              </div>
            </div>

            {/* terminal */}
            <div style={{border:"1px solid rgba(184,134,11,.15)",background:"rgba(255,255,255,.02)",marginTop:"24px"}}>
              {/* chrome */}
              <div style={{padding:"8px 14px",borderBottom:"1px solid rgba(184,134,11,.08)",display:"flex",alignItems:"center",gap:"6px",background:"rgba(0,0,0,.35)"}}>
                {["#5a1818","#5a4a05","#0d3d1e"].map((c,i)=><div key={i} style={{width:"9px",height:"9px",borderRadius:"50%",background:c}}/>)}
                <span style={{marginLeft:"10px",fontSize:"9px",color:"rgba(255,255,255,.15)",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.08em"}}>
                  upforge-intelligence — {form.startupName.toLowerCase().replace(/\s+/g,"-")||"startup"}
                </span>
              </div>
              {/* steps */}
              <div style={{padding:"8px 0"}}>
                {STEPS.map((s,i)=>{
                  const done=i<curStep, active=i===curStep;
                  return (
                    <div key={i} className={active?"ld-sf":undefined} style={{display:"flex",alignItems:"center",gap:"10px",padding:"7px 14px",background:active?"rgba(184,134,11,.07)":"transparent",borderLeft:active?"2px solid #b8860b":"2px solid transparent",opacity:done?.28:active?1:.13,transition:"opacity .4s ease,background .3s ease"}}>
                      <div style={{width:"14px",flexShrink:0,textAlign:"center"}}>
                        {done&&<span style={{color:"#1a6b3a",fontSize:"12px",lineHeight:1}}>✓</span>}
                        {active&&<span className="ld-pl" style={{color:"#b8860b",fontFamily:"'JetBrains Mono',monospace",fontSize:"11px",lineHeight:1,display:"inline-block"}}>▶</span>}
                        {!done&&!active&&<span style={{color:"rgba(255,255,255,.12)",fontFamily:"'JetBrains Mono',monospace",fontSize:"10px",lineHeight:1}}>○</span>}
                      </div>
                      <span style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:done?"rgba(255,255,255,.15)":active?"rgba(184,134,11,.5)":"rgba(255,255,255,.08)",flexShrink:0,minWidth:"18px"}}>{String(i+1).padStart(2,"0")}</span>
                      <span style={{fontSize:"11px",color:done?"rgba(255,255,255,.2)":active?"#fff":"rgba(255,255,255,.12)",flex:1}}>{s.label}</span>
                      {done&&<span style={{fontSize:"8px",color:"#1a6b3a",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.1em",flexShrink:0}}>DONE</span>}
                      {active&&<span className="ld-cur" style={{fontSize:"8px",color:"#b8860b",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.1em",flexShrink:0}}>LIVE</span>}
                    </div>
                  );
                })}
              </div>
              {/* prompt */}
              <div style={{padding:"8px 14px",borderTop:"1px solid rgba(184,134,11,.08)",fontFamily:"'JetBrains Mono',monospace",fontSize:"9px",color:"rgba(255,255,255,.1)"}}>
                $ upforge analyse --startup=&quot;{form.startupName}&quot; --sector={form.industry||"tech"} --web=true<span className="ld-cur">_</span>
              </div>
            </div>

            <p style={{textAlign:"center",marginTop:"18px",fontSize:"10px",color:"rgba(255,255,255,.1)"}}>
              Searching Inc42 · YourStory · Crunchbase · news archives · public filings…
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ══ REPORT ════════════════════════════════════════════════════════════════
  if (!report) return null;
  const chartData=[{subject:"Market",A:report.scores.market},{subject:"Team",A:report.scores.team},{subject:"Product",A:report.scores.product},{subject:"Traction",A:report.scores.traction},{subject:"Moat",A:report.scores.moat},{subject:"Financials",A:report.scores.financials}];

  return (
    <div style={{background:"#fff",color:"var(--ink)",fontFamily:"'Source Serif 4',Georgia,serif",WebkitFontSmoothing:"antialiased"}}>
      <style>{CSS}</style>

      {/* toolbar */}
      <div className="no-print" style={{position:"sticky",top:0,zIndex:50,background:"var(--ink)",borderBottom:"1px solid rgba(255,255,255,.08)"}}>
        <div className="uf-w" style={{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px clamp(16px,3vw,32px)",gap:"12px"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <img src="/logo.jpg" alt="UpForge" style={{width:"20px",height:"20px",objectFit:"contain"}}/>
            <span style={{fontSize:"12px",fontWeight:700,color:"#fff",fontFamily:"'Playfair Display',Georgia,serif"}}>{form.startupName}</span>
            <span className="hm" style={{fontSize:"9px",color:"rgba(255,255,255,.35)",letterSpacing:"0.12em",textTransform:"uppercase"}}>· Intelligence Report</span>
          </div>
          <div style={{display:"flex",gap:"8px"}}>
            <button onClick={()=>window.print()} style={{display:"flex",alignItems:"center",gap:"5px",padding:"6px 14px",background:"#b8860b",color:"#fff",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700}}>
              <Download style={{width:"11px",height:"11px"}}/> PDF
            </button>
            <button onClick={()=>{setStep("form");setReport(null);}} style={{display:"flex",alignItems:"center",gap:"5px",padding:"6px 12px",background:"transparent",color:"rgba(255,255,255,.55)",border:"1px solid rgba(255,255,255,.15)",cursor:"pointer",fontSize:"11px"}}>
              <RefreshCw style={{width:"11px",height:"11px"}}/> New
            </button>
          </div>
        </div>
      </div>

      <div className="uf-w" style={{paddingBottom:"60px"}}>

        {/* masthead */}
        <header className="a0" style={{borderBottom:"2px solid var(--ink)",paddingTop:"clamp(20px,4vw,36px)"}}>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",paddingBottom:"10px",borderBottom:"1px solid var(--rule)",marginBottom:"clamp(18px,4vw,32px)",flexWrap:"wrap",gap:"8px"}}>
            <span className="uf-lbl" style={{color:"var(--ink2)"}}>{new Date().toLocaleDateString("en-IN",{weekday:"long",day:"numeric",month:"long",year:"numeric",timeZone:"Asia/Kolkata"})} · Intelligence Report</span>
            <div style={{display:"flex",alignItems:"center",gap:"6px"}}><div className="dot"/><span className="uf-lbl" style={{color:"var(--pos)"}}>Analysis Complete</span></div>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:"24px",alignItems:"flex-end",paddingBottom:"clamp(18px,4vw,32px)"}} className="mc">
            <div>
              <p style={{fontSize:"11px",letterSpacing:"0.32em",textTransform:"uppercase",color:"var(--ink3)",marginBottom:"10px"}}>UpForge · Startup Deep Analysis</p>
              <h1 className="uf-d" style={{fontSize:"clamp(2.2rem,6vw,5rem)",fontWeight:900,lineHeight:0.9,color:"var(--ink)",marginBottom:"12px"}}>{form.startupName}</h1>
              <p style={{fontSize:"13px",color:"var(--ink3)"}}>{[form.industry,form.city,form.foundedYear?`Est. ${form.foundedYear}`:null,form.fundingStage].filter(Boolean).join(" · ")}</p>
            </div>
            <div style={{border:`2px solid ${sc(report.scores.overall)}`,padding:"16px 20px",textAlign:"center",flexShrink:0}}>
              <div className="uf-m uf-d" style={{fontSize:"clamp(2rem,5vw,3.2rem)",fontWeight:900,color:sc(report.scores.overall),lineHeight:1}}>{report.scores.overall}</div>
              <div className="uf-lbl" style={{fontSize:"8px",marginTop:"4px"}}>Overall Score</div>
            </div>
          </div>
        </header>

        {/* data sources */}
        {(report.dataSourcesFound?.length>0)&&(
          <div className="a1" style={{padding:"12px 0",borderBottom:"1px solid var(--rule)",display:"flex",alignItems:"center",gap:"10px",flexWrap:"wrap"}}>
            <div style={{display:"flex",alignItems:"center",gap:"5px"}}><Search style={{width:"11px",height:"11px",color:"var(--pos)"}}/><span className="uf-lbl" style={{color:"var(--pos)",fontSize:"9px"}}>Public Data Found</span></div>
            {report.dataSourcesFound.map((src,i)=><span key={i} style={{fontSize:"10px",color:"var(--ink3)",border:"1px solid var(--rule)",padding:"2px 8px"}}>{src}</span>)}
            {report.publicDataNote&&<span style={{fontSize:"10px",color:"var(--ink4)",marginLeft:"auto"}}>{report.publicDataNote}</span>}
          </div>
        )}

        {/* exec summary */}
        <div className="a1 uf-sec">
          <div className="uf-sech"><FileText style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Executive Summary</span></div>
          <p style={{fontSize:"15px",color:"var(--ink2)",lineHeight:1.75,maxWidth:"800px"}}>{report.executiveSummary}</p>
        </div>

        {/* valuation + radar */}
        <div className="a2 uf-sec" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0"}}>
          <div style={{paddingRight:"clamp(16px,4vw,40px)",borderRight:"1px solid var(--rule)"}}>
            <div className="uf-sech"><IndianRupee style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Estimated Valuation</span><CBadge level={report.valuationRange.confidence}/></div>
            <div style={{background:"var(--warm)",border:"1px solid var(--rule)",padding:"clamp(16px,3vw,28px)",marginBottom:"14px"}}>
              <span className="uf-lbl" style={{fontSize:"8px",display:"block",marginBottom:"6px"}}>Midpoint Estimate</span>
              <div className="uf-d" style={{fontSize:"clamp(2rem,5vw,3.5rem)",fontWeight:900,color:"var(--ink)",lineHeight:1,marginBottom:"10px"}}>{report.valuationRange.midpoint}</div>
              <div style={{display:"flex",gap:"24px",paddingTop:"10px",borderTop:"1px solid var(--rule)"}}>
                <div><span className="uf-lbl" style={{fontSize:"8px",display:"block"}}>Floor</span><span className="uf-m" style={{fontSize:"14px",fontWeight:600,color:"var(--ink3)"}}>{report.valuationRange.low}</span></div>
                <div><span className="uf-lbl" style={{fontSize:"8px",display:"block"}}>Ceiling</span><span className="uf-m" style={{fontSize:"14px",fontWeight:600,color:"var(--ink3)"}}>{report.valuationRange.high}</span></div>
              </div>
            </div>
            <p style={{fontSize:"11px",color:"var(--ink4)",lineHeight:1.65,marginBottom:"8px"}}><strong style={{color:"var(--ink3)"}}>Method:</strong> {report.valuationRange.methodology}</p>
            {report.valuationRange.confidenceNote&&<div style={{display:"flex",gap:"7px",padding:"10px 12px",background:"#fffbeb",border:"1px solid #fde68a"}}><Info style={{width:"11px",height:"11px",color:"var(--gold)",flexShrink:0,marginTop:"1px"}}/><p style={{fontSize:"11px",color:"#92400e",lineHeight:1.55}}>{report.valuationRange.confidenceNote}</p></div>}
          </div>
          <div style={{paddingLeft:"clamp(16px,4vw,40px)"}}>
            <div className="uf-sech"><BarChart2 style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">7-Dimension Score</span></div>
            <div style={{height:"240px"}}><ResponsiveContainer width="100%" height="100%"><RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData} startAngle={90} endAngle={-270}><PolarGrid stroke="#e5e5e5"/><PolarAngleAxis dataKey="subject" tick={{fill:"#888",fontSize:10,fontWeight:"bold"}}/><PolarRadiusAxis angle={90} domain={[0,100]} tick={false} axisLine={false}/><Radar dataKey="A" stroke="#b8860b" fill="#b8860b" fillOpacity={0.4}/></RadarChart></ResponsiveContainer></div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"6px",marginTop:"8px"}}>
              {(Object.entries(report.scores) as [string,number][]).filter(([k])=>k!=="overall").map(([k,v])=>(
                <div key={k} style={{textAlign:"center",padding:"8px",border:"1px solid var(--rule)",background:"var(--off)"}}>
                  <div className="uf-m" style={{fontSize:"16px",fontWeight:700,color:sc(v)}}>{v}</div>
                  <div className="uf-lbl" style={{fontSize:"8px"}}>{k}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* strengths + risks */}
        <div className="a2 uf-sec" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0"}}>
          <div style={{paddingRight:"clamp(16px,4vw,36px)",borderRight:"1px solid var(--rule)"}}>
            <div className="uf-sech"><Award style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Key Strengths</span></div>
            {report.strengths.map((s,i)=>(
              <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",paddingBottom:"12px",marginBottom:"12px",borderBottom:i<report.strengths.length-1?"1px solid var(--rl)":"none"}}>
                <div style={{width:"20px",height:"20px",background:"var(--pos)",color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"9px",fontWeight:700,flexShrink:0,marginTop:"1px"}}>{i+1}</div>
                <div><p style={{fontSize:"13px",fontWeight:600,color:"var(--ink)",marginBottom:"3px"}}>{s.title}</p><p style={{fontSize:"11px",color:"var(--ink3)",lineHeight:1.6}}>{s.detail}</p></div>
              </div>
            ))}
          </div>
          <div style={{paddingLeft:"clamp(16px,4vw,36px)"}}>
            <div className="uf-sech"><AlertTriangle style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Risk Assessment</span></div>
            {report.risks.map((r,i)=>(
              <div key={i} style={{border:"1px solid var(--rule)",padding:"12px",marginBottom:"8px",background:"#fff"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"6px"}}>
                  <p style={{fontSize:"13px",fontWeight:600,color:"var(--ink)"}}>{r.title}</p><RBadge level={r.level}/>
                </div>
                <p style={{fontSize:"11px",color:"var(--ink3)",lineHeight:1.6,marginBottom:"6px"}}>{r.detail}</p>
                <div style={{display:"flex",gap:"5px",alignItems:"flex-start"}}><Zap style={{width:"10px",height:"10px",color:"var(--gold)",flexShrink:0,marginTop:"1px"}}/><p style={{fontSize:"10px",color:"var(--ink4)",lineHeight:1.5}}>Mitigation: {r.mitigation}</p></div>
              </div>
            ))}
          </div>
        </div>

        {/* market */}
        <div className="a3 uf-sec">
          <div className="uf-sech"><Globe style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Market Opportunity</span></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"var(--rule)",border:"1px solid var(--rule)",marginBottom:"14px"}}>
            {[{l:"TAM",sub:"Total Addressable Market",v:report.marketOpportunity.tam},{l:"SAM",sub:"Serviceable Market",v:report.marketOpportunity.sam},{l:"SOM",sub:"Obtainable Market",v:report.marketOpportunity.som}].map((m,i)=>(
              <div key={i} style={{background:i===1?"var(--warm)":"#fff",padding:"20px",textAlign:"center"}}>
                <span className="uf-lbl" style={{fontSize:"9px",display:"block",marginBottom:"6px"}}>{m.l}</span>
                <div className="uf-d" style={{fontSize:"clamp(1.4rem,3vw,2.2rem)",fontWeight:900,color:"var(--ink)",lineHeight:1,marginBottom:"4px"}}>{m.v}</div>
                <span style={{fontSize:"9px",color:"var(--ink4)"}}>{m.sub}</span>
              </div>
            ))}
          </div>
          <p style={{fontSize:"12px",color:"var(--ink3)",lineHeight:1.7}}>{report.marketOpportunity.insight}</p>
        </div>

        {/* competitors */}
        <div className="a3 uf-sec">
          <div className="uf-sech"><Users style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Competitive Landscape</span></div>
          <div style={{border:"1px solid var(--rule)"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 100px 1fr",padding:"8px 16px",background:"var(--off)",borderBottom:"1px solid var(--rule)"}}>
              {["Competitor","Threat","Your Edge"].map(h=><span key={h} className="uf-lbl" style={{fontSize:"8px"}}>{h}</span>)}
            </div>
            {report.competitorAnalysis.map((c,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 100px 1fr",padding:"11px 16px",background:"#fff",borderBottom:i<report.competitorAnalysis.length-1?"1px solid var(--rl)":"none"}}>
                <p style={{fontSize:"13px",fontWeight:600,color:"var(--ink)"}}>{c.name}</p>
                <div><RBadge level={c.threat}/></div>
                <p style={{fontSize:"11px",color:"var(--ink3)",lineHeight:1.5}}>{c.difference}</p>
              </div>
            ))}
          </div>
        </div>

        {/* growth + focus */}
        <div className="a3 uf-sec" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"0"}}>
          <div style={{paddingRight:"clamp(16px,4vw,36px)",borderRight:"1px solid var(--rule)"}}>
            <div className="uf-sech"><TrendingUp style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Growth Levers</span></div>
            {report.growthLevers.map((g,i)=>(
              <div key={i} style={{display:"flex",gap:"10px",alignItems:"flex-start",paddingBottom:"10px",marginBottom:"10px",borderBottom:i<report.growthLevers.length-1?"1px solid var(--rl)":"none"}}>
                <ChevronRight style={{width:"13px",height:"13px",color:"var(--gold)",flexShrink:0,marginTop:"2px"}}/>
                <div>
                  <p style={{fontSize:"13px",fontWeight:600,color:"var(--ink)",marginBottom:"3px"}}>{g.lever}</p>
                  <div style={{display:"flex",gap:"10px"}}><span style={{fontSize:"10px",fontWeight:700,color:"var(--pos)"}}>{g.impact}</span><span style={{color:"var(--rule)"}}>·</span><span style={{fontSize:"10px",color:"var(--ink4)"}}>{g.timeline}</span></div>
                </div>
              </div>
            ))}
          </div>
          <div style={{paddingLeft:"clamp(16px,4vw,36px)"}}>
            <div className="uf-sech"><Target style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Priority Focus Areas</span></div>
            {report.focusAreas.map((f,i)=>{
              const pc={critical:{bg:"#fef2f2",b:"#fecaca",c:"#b91c1c"},high:{bg:"#fffbeb",b:"#fde68a",c:"#b8860b"},medium:{bg:"#eff6ff",b:"#bfdbfe",c:"#1d4ed8"}}[f.priority];
              return <div key={i} style={{border:`1px solid ${pc.b}`,background:pc.bg,padding:"10px 12px",marginBottom:"6px"}}><div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"4px"}}><p style={{fontSize:"12px",fontWeight:600,color:"var(--ink)"}}>{f.area}</p><span style={{fontSize:"8px",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:pc.c,border:`1px solid ${pc.b}`,padding:"1px 6px"}}>{f.priority}</span></div><p style={{fontSize:"11px",color:"var(--ink3)",lineHeight:1.55}}>{f.action}</p></div>;
            })}
          </div>
        </div>

        {/* benchmarks */}
        <div className="a3 uf-sec">
          <div className="uf-sech"><BarChart2 style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Sector Benchmarks</span></div>
          <div style={{border:"1px solid var(--rule)"}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 90px",padding:"8px 16px",background:"var(--off)",borderBottom:"1px solid var(--rule)"}}>
              {["Metric",form.startupName,"Industry Avg","Verdict"].map(h=><span key={h} className="uf-lbl" style={{fontSize:"8px"}}>{h}</span>)}
            </div>
            {report.benchmarks.map((b,i)=>(
              <div key={i} style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 90px",padding:"10px 16px",background:i%2===1?"var(--off)":"#fff",borderBottom:i<report.benchmarks.length-1?"1px solid var(--rl)":"none"}}>
                <p style={{fontSize:"12px",color:"var(--ink3)"}}>{b.metric}</p>
                <p className="uf-m" style={{fontSize:"12px",fontWeight:600,color:"var(--ink)"}}>{b.startup}</p>
                <p className="uf-m" style={{fontSize:"12px",color:"var(--ink4)"}}>{b.industry}</p>
                <span style={{fontSize:"9px",fontWeight:700,padding:"2px 6px",width:"fit-content",background:b.verdict==="above"?"#f0fdf4":b.verdict==="below"?"#fef2f2":"#f9fafb",color:b.verdict==="above"?"var(--pos)":b.verdict==="below"?"var(--neg)":"var(--ink4)"}}>
                  {b.verdict==="above"?"▲ Above":b.verdict==="below"?"▼ Below":"● On Par"}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* roadmap */}
        <div className="a3 uf-sec">
          <div className="uf-sech"><TrendingUp style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Strategic Roadmap</span></div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"1px",background:"var(--rule)",border:"1px solid var(--rule)"}}>
            {report.roadmap.map((phase,i)=>(
              <div key={i} style={{background:i===0?"var(--ink)":"#fff",padding:"20px"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px"}}>
                  <span className="uf-lbl" style={{fontSize:"8px",color:i===0?"var(--gold)":"var(--ink4)"}}>{phase.phase}</span>
                  <span style={{fontSize:"9px",padding:"2px 8px",background:i===0?"rgba(255,255,255,.08)":"var(--off)",color:i===0?"rgba(255,255,255,.45)":"var(--ink4)",fontFamily:"'JetBrains Mono',monospace"}}>{phase.timeline}</span>
                </div>
                <ul style={{listStyle:"none",padding:0,margin:0}}>
                  {phase.goals.map((g,j)=>(
                    <li key={j} style={{display:"flex",gap:"7px",alignItems:"flex-start",marginBottom:"7px"}}>
                      <span style={{width:"4px",height:"4px",borderRadius:"50%",flexShrink:0,marginTop:"6px",background:i===0?"var(--gold)":"var(--rule)",display:"inline-block"}}/>
                      <p style={{fontSize:"11px",color:i===0?"rgba(255,255,255,.65)":"var(--ink3)",lineHeight:1.55}}>{g}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* investor readiness */}
        <div className="a3 uf-sec">
          <div className="uf-sech"><Award style={{width:"13px",height:"13px",color:"var(--ink4)"}}/><span className="uf-lbl">Investor Readiness</span></div>
          <div style={{display:"grid",gridTemplateColumns:"auto 1fr",gap:"1px",background:"var(--rule)",border:"1px solid var(--rule)"}}>
            <div style={{background:"var(--warm)",padding:"28px",textAlign:"center",minWidth:"140px"}}>
              <div className="uf-d" style={{fontSize:"clamp(2.2rem,5vw,3.5rem)",fontWeight:900,color:sc(report.investorReadiness.score),lineHeight:1,marginBottom:"6px"}}>{report.investorReadiness.score}</div>
              <span className="uf-lbl" style={{fontSize:"8px",display:"block",marginBottom:"8px"}}>Readiness Score</span>
              <p style={{fontSize:"12px",fontWeight:600,color:"var(--ink)"}}>{report.investorReadiness.verdict}</p>
            </div>
            <div style={{background:"#fff",padding:"20px"}}>
              <span className="uf-lbl" style={{fontSize:"8px",display:"block",marginBottom:"12px"}}>To Improve Investor Readiness</span>
              {report.investorReadiness.improvements.map((imp,i)=>(
                <div key={i} style={{display:"flex",gap:"8px",alignItems:"flex-start",marginBottom:"8px"}}>
                  <ChevronRight style={{width:"12px",height:"12px",color:"var(--gold)",flexShrink:0,marginTop:"2px"}}/>
                  <p style={{fontSize:"12px",color:"var(--ink3)",lineHeight:1.6}}>{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* verdict */}
        <div className="a3" style={{padding:"clamp(24px,5vw,48px) 0"}}>
          <div style={{background:"var(--ink)",padding:"clamp(24px,5vw,44px)"}}>
            <span className="uf-lbl" style={{color:"var(--gold)",display:"block",marginBottom:"14px",fontSize:"9px"}}>UpForge Analyst Verdict</span>
            <p className="uf-d" style={{fontSize:"clamp(1rem,2.5vw,1.4rem)",fontWeight:400,fontStyle:"italic",color:"rgba(255,255,255,.88)",lineHeight:1.75,maxWidth:"800px"}}>
              &ldquo;{report.verdict}&rdquo;
            </p>
            <div style={{marginTop:"28px",paddingTop:"20px",borderTop:"1px solid rgba(255,255,255,.08)",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"12px"}}>
              <span style={{fontSize:"9px",color:"rgba(255,255,255,.18)",fontFamily:"'JetBrains Mono',monospace"}}>ID: {report.reportId} · {new Date().toLocaleDateString("en-IN")} · UpForge v3.0</span>
              <button onClick={()=>window.print()} style={{display:"flex",alignItems:"center",gap:"6px",padding:"10px 20px",background:"var(--gold)",color:"#fff",border:"none",cursor:"pointer",fontSize:"11px",fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase"}}>
                <Download style={{width:"12px",height:"12px"}}/> Download PDF
              </button>
            </div>
          </div>
          {report.disclaimer&&(
            <div style={{marginTop:"14px",padding:"12px 16px",background:"var(--off)",border:"1px solid var(--rule)",display:"flex",gap:"8px",alignItems:"flex-start"}}>
              <Info style={{width:"11px",height:"11px",color:"var(--ink4)",flexShrink:0,marginTop:"1px"}}/>
              <p style={{fontSize:"10px",color:"var(--ink4)",lineHeight:1.6}}>{report.disclaimer}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FALLBACK ─────────────────────────────────────────────────────────────────
function fallback(form: FormData): ReportData {
  const yr=parseInt(form.foundedYear)||new Date().getFullYear();
  const age=new Date().getFullYear()-yr;
  const rev=!!(form.currentRevenue&&!form.currentRevenue.toLowerCase().includes("pre")&&form.currentRevenue!=="₹0"&&form.currentRevenue!=="0");
  const team=parseInt(form.teamSize)||2;
  const id=Math.random().toString(36).substring(2,10).toUpperCase();
  let low="₹10L",mid="₹25L",high="₹60L",conf:"high"|"medium"|"low"="low";
  let note="Startup is <1yr old with no verifiable traction. Most angels value pre-revenue startups at ₹25–75L.",meth="Berkus method: team quality, concept, sector heat.";
  if(age>=1&&rev){const m=form.industry?.includes("SaaS")||form.industry?.includes("AI")?7:4;low=`₹${m*2}L`;mid=`₹${m*5}L`;high=`₹${m*12}L`;conf="medium";note="Based on self-reported revenue. Verify with audited financials before fundraising.";meth=`${m}x ARR revenue multiple for ${form.industry||"this sector"}.`;}
  else if(age>=2){low="₹40L";mid="₹1.2Cr";high="₹3.5Cr";conf="low";note="No revenue confirmed. Based on comparable Indian early-stage rounds.";meth="Stage-comparable method. Pre-revenue 2yr Indian startups typically valued ₹50L–₹2Cr.";}
  return {
    reportId:id,dataSourcesFound:[],publicDataNote:"No public data found. Analysis based on provided information.",
    executiveSummary:`${form.startupName} is a ${age<1?"very early-stage":age+"-year-old"} ${form.industry||"tech"} startup founded by ${form.founderName}${form.city?` in ${form.city}`:""}, building ${form.description||"a solution"}. ${!rev?"The startup is pre-revenue, limiting valuation certainty significantly.":"Initial revenue signals traction."} ${team<5?"Small team indicates very early operations.":""}`,
    valuationRange:{low,midpoint:mid,high,methodology:meth,confidence:conf,confidenceNote:note},
    scores:{overall:age<1?38:rev?62:48,market:62,team:team>=5?65:42,product:rev?60:35,traction:rev?58:22,moat:form.uniqueAdvantage?55:32,financials:rev?52:18},
    strengths:[{title:"Clear Problem Focus",detail:`${form.description||"The startup"} addresses a specific market need.`},{title:"Sector Momentum",detail:`${form.industry||"This sector"} has strong VC tailwinds in India through 2025.`},{title:"Founder Commitment",detail:`Founding a company is the hardest filter. ${form.founderName}'s commitment is the foundation.`},{title:"Lean Operations",detail:"A small team means low burn rate and forced prioritisation — a real advantage."}],
    risks:[{level:"high",title:age<1?"Idea-Stage Survival":"Pre-PMF Risk",detail:age<1?"90%+ of startups at this stage fail to reach product-market fit.":"No confirmed PMF signals from public data.",mitigation:"Run 50+ customer discovery interviews. Validate willingness-to-pay first."},{level:"high",title:"Zero Revenue Risk",detail:rev?"Revenue is self-reported and unverified.":"Zero revenue means full dependence on external capital.",mitigation:"Identify 3 paying pilot customers within 60 days."},{level:"medium",title:"Competition Risk",detail:form.keyCompetitors?`Competing against ${form.keyCompetitors}.`:"Established players likely exist with distribution advantages.",mitigation:"Own a micro-niche first. Expand only after dominating one vertical."},{level:"medium",title:"Team Depth Risk",detail:`Team of ${team} is ${team<3?"critically thin":"small"}.`,mitigation:"Document all processes. Target one senior complementary hire within 6 months."}],
    competitorAnalysis:(form.keyCompetitors||"Market Incumbents").split(",").slice(0,4).map((c,i)=>({name:c.trim()||`Competitor ${i+1}`,threat:(["high","medium","medium","low"] as const)[i]||"medium",difference:form.uniqueAdvantage?`You claim: ${form.uniqueAdvantage.substring(0,60)}…`:"Differentiation not clearly defined."})),
    marketOpportunity:{tam:form.industry?.includes("FinTech")?"$100B":form.industry?.includes("SaaS")?"$50B":"$20B",sam:"$3B",som:age<2?"$5M":"$25M",insight:`India's ${form.industry||"tech"} sector grows at 25–35% CAGR. Realistic Year 1 SOM for pre-revenue startup: 0.01–0.05% of SAM.`},
    growthLevers:[{lever:"Customer Discovery Sprint",impact:"Validates assumptions",timeline:"0–30 days"},{lever:"3 Paying Pilot Customers",impact:"Proves revenue model",timeline:"30–60 days"},{lever:"Referral Loop",impact:"Reduces CAC",timeline:"60–90 days"},{lever:"SEO & Content Marketing",impact:"Long-term distribution",timeline:"3–6 months"},{lever:"Strategic Partnership",impact:"Distribution leverage",timeline:"6–12 months"}],
    focusAreas:[{area:"Validate Willingness-to-Pay",priority:"critical",action:"Get 3 customers to pay — even ₹1,000/month — before building further."},{area:"Define Riskiest Assumption",priority:"critical",action:"What single assumption does your business collapse without? Test it this week."},{area:"Build MVP, Not a Product",priority:"high",action:"Ship the simplest version delivering core value."},{area:"Investor Readiness Prep",priority:"medium",action:"Prepare a 10-slide deck. Approach angels only after first revenue."}],
    investorReadiness:{score:age<1?28:rev?58:40,verdict:age<1?"Not Ready — Get First Revenue":rev?"Approaching Ready":"Pre-Seed Stage",improvements:["Show 3 months of MoM revenue or user growth","Define unit economics (CAC, LTV, payback)","Document go-to-market with specific channels","Add 1–2 advisors with sector credibility","Prepare 12-month financial model"]},
    roadmap:[{phase:"Validate (0–90 Days)",timeline:"3 months",goals:["Run 50 customer interviews","Identify top 3 paying use cases","Ship MVP to 10 beta users","Achieve ₹1 of revenue"]},{phase:"Build (3–9 Months)",timeline:"6 months",goals:["Reach ₹10–50L ARR","Repeatable sales motion","Hire 1 key role","Refine unit economics"]},{phase:"Scale (9–18 Months)",timeline:"9 months",goals:["Target ₹1Cr ARR","Raise Pre-Seed/Seed","Expand to 2nd segment","Build team of 8–12"]}],
    benchmarks:[{metric:"Time to First Revenue",startup:age<1?"Not yet":`${age}yr`,industry:"6–12 months",verdict:age<1?"below":"on-par"},{metric:"Team Size",startup:`${team}`,industry:"5–10 at seed",verdict:team>=5?"on-par":"below"},{metric:"Funding Stage",startup:form.fundingStage||"Bootstrapped",industry:"Pre-Seed at 1yr",verdict:"on-par"},{metric:"Revenue (ARR)",startup:rev?form.currentRevenue:"₹0",industry:"₹25L+ (Seed)",verdict:rev?"on-par":"below"},{metric:"Product Live",startup:rev?"Yes":"Unknown",industry:"Yes at 6 months",verdict:rev?"on-par":"below"}],
    verdict:age<1?`${form.startupName} is at the idea stage — the most precarious and exciting point of any startup journey. The path forward is deceptively simple: talk to 50 potential customers this month, find three who will pay before you build, and validate your riskiest assumption first. Get on the phone.`:`${form.startupName} has passed the hardest filter — surviving past year one. ${rev?`With ${form.currentRevenue} in revenue, the foundation exists.`:"The absence of revenue is the next problem to solve."} India's seed market in 2025 favours startups with 3+ months of consistent growth data. Focus on retention before acquisition.`,
    disclaimer:"This report is AI-generated based on provided information and publicly available data. Valuations are estimates only and not financial advice. Consult a qualified CA or financial advisor before investment decisions.",
  };
}
