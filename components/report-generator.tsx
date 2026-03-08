// components/report-generator.tsx
"use client";

import { useState, useEffect, useRef, ChangeEvent } from "react";
import {
  Sparkles, FileText, Download, Shield, Target, Zap,
  AlertTriangle, Users, Globe, BarChart2, CheckCircle2,
  ChevronRight, Award, RefreshCw, Search, Info, TrendingUp,
} from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer,
} from "recharts";

// ─── TYPES ─────────────────────────────────────────────────────────────────────
interface FormData {
  startupName: string; founderName: string; foundedYear: string;
  industry: string; city: string; website: string; description: string;
  targetMarket: string; businessModel: string; currentRevenue: string;
  teamSize: string; fundingStage: string; fundingRaised: string;
  keyCompetitors: string; uniqueAdvantage: string;
}
interface ValuationRange { low: string; high: string; midpoint: string; methodology: string; confidence: "high" | "medium" | "low"; confidenceNote: string; }
interface Scores { overall: number; market: number; team: number; product: number; traction: number; moat: number; financials: number; }
interface Strength { title: string; detail: string; }
interface Risk { level: "high" | "medium" | "low"; title: string; detail: string; mitigation: string; }
interface Competitor { name: string; threat: "high" | "medium" | "low"; difference: string; }
interface MarketOpp { tam: string; sam: string; som: string; insight: string; }
interface GrowthLever { lever: string; impact: string; timeline: string; }
interface FocusArea { area: string; priority: "critical" | "high" | "medium"; action: string; }
interface InvestorReadiness { score: number; verdict: string; improvements: string[]; }
interface RoadmapPhase { phase: string; timeline: string; goals: string[]; }
interface Benchmark { metric: string; startup: string; industry: string; verdict: "above" | "below" | "on-par"; }
interface ReportData {
  dataSourcesFound: string[]; publicDataNote: string; executiveSummary: string;
  valuationRange: ValuationRange; scores: Scores; strengths: Strength[]; risks: Risk[];
  competitorAnalysis: Competitor[]; marketOpportunity: MarketOpp; growthLevers: GrowthLever[];
  focusAreas: FocusArea[]; investorReadiness: InvestorReadiness; roadmap: RoadmapPhase[];
  benchmarks: Benchmark[]; verdict: string; reportId: string; disclaimer: string;
}

const STEPS = [
  { label: "Searching public news & media mentions",      ms: 2400 },
  { label: "Scanning Crunchbase, Inc42, YourStory data",  ms: 2200 },
  { label: "Mapping competitive landscape",               ms: 1800 },
  { label: "Running DCF & revenue-multiple models",       ms: 2600 },
  { label: "Calculating sector-adjusted risk scores",     ms: 2000 },
  { label: "Benchmarking against 500+ Indian startups",   ms: 1900 },
  { label: "Generating founder-grade narrative",          ms: 2200 },
  { label: "Compiling report & confidence signals",       ms: 1500 },
];

// ─── DESIGN SYSTEM CSS — same vars as homepage, scoped to .uf-root ──────────
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,700&display=swap');

/* ── TOKENS (same as homepage) ── */
.uf-root {
  --parch:  #F5F1E8;
  --parch2: #EDE9DF;
  --parch3: #E6E1D6;
  --ink:    #1A1208;
  --ink2:   #2C2010;
  --ink3:   #5A4A30;
  --ink4:   #8C7D65;
  --ink5:   #BBB0A0;
  --rule:   #C8C2B4;
  --rule2:  #D8D2C4;
  --gold:   #B45309;
  --gold2:  #D97706;
  --gold3:  #92400E;
  --goldlt: #FEF3C7;
  --white:  #FDFCF9;
  --green:  #15803D;
  --red:    #B91C1C;
  background: var(--parch);
  font-family: 'Georgia','Times New Roman',serif;
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
}
.uf-root *, .uf-root *::before, .uf-root *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── FONTS ── */
.pf { font-family: 'Playfair Display', Georgia, serif !important; }
.sf { font-family: system-ui, -apple-system, sans-serif !important; }

/* ── LABELS ── */
.uf-lbl {
  font-size: 9px; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: var(--ink4);
  font-family: system-ui, sans-serif;
}
.uf-lbl2 {
  display: block; font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: .16em;
  color: var(--ink4); margin-bottom: 5px;
  font-family: system-ui, sans-serif;
}

/* ── SECTION HEAD (same .sh pattern) ── */
.uf-sh {
  display: flex; align-items: center; gap: 10px;
  margin-bottom: 18px;
}
.uf-sh::after {
  content: ''; flex: 1; height: 1px; background: var(--rule);
}

/* ── INPUTS ── */
.uf-inp {
  width: 100%;
  border: 1px solid var(--rule2);
  background: var(--white);
  padding: 10px 13px;
  font-size: 13px;
  color: var(--ink);
  outline: none;
  transition: border-color .18s;
  font-family: 'Georgia', serif;
  border-radius: 0;
  appearance: none;
}
.uf-inp:focus { border-color: var(--ink); }
.uf-inp::placeholder { color: var(--ink5); }
select.uf-inp { background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 6 5-6z' fill='%238C7D65'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 12px center; padding-right: 32px; }

/* ── WRAPPER ── */
.uf-w { max-width: 1200px; margin: 0 auto; padding: 0 clamp(16px, 3vw, 32px); }

/* ── ANIMATIONS (same as homepage) ── */
@keyframes uf-up { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.a0 { animation: uf-up .5s .00s cubic-bezier(.16,1,.3,1) both; }
.a1 { animation: uf-up .5s .08s cubic-bezier(.16,1,.3,1) both; }
.a2 { animation: uf-up .5s .16s cubic-bezier(.16,1,.3,1) both; }
.a3 { animation: uf-up .5s .24s cubic-bezier(.16,1,.3,1) both; }
.a4 { animation: uf-up .5s .32s cubic-bezier(.16,1,.3,1) both; }

/* ── LIVE DOT ── */
.ldot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); flex-shrink: 0; position: relative; }
.ldot::after { content: ''; position: absolute; inset: -3px; border-radius: 50%; background: rgba(21,128,61,.2); animation: ldot-p 2s ease-in-out infinite; }
@keyframes ldot-p { 0%,100% { transform: scale(1); } 50% { transform: scale(2.2); opacity: 0; } }

/* ── SECTIONS ── */
.uf-sec { padding: clamp(24px, 4vw, 40px) 0; border-bottom: 1px solid var(--rule); }

/* ── CARD — same ink border style ── */
.uf-card {
  background: var(--white);
  border: 1px solid var(--rule2);
  transition: transform .18s, box-shadow .18s, border-color .18s;
}
.uf-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); border-color: var(--ink); }

/* ── LOADING SCREEN ── */
.uf-loading {
  background: #0E0C08;
  overflow: hidden;
  position: relative;
  min-height: 580px;
  display: flex;
  flex-direction: column;
}
@keyframes ld-sw { 0% { top: -100px; opacity: 0; } 3% { opacity: 1; } 97% { opacity: 1; } 100% { top: 100%; opacity: 0; } }
@keyframes ld-gf { 0%,100% { opacity: .03; } 60% { opacity: .07; } }
@keyframes ld-cur { 0%,49% { opacity: 1; } 50%,100% { opacity: 0; } }
@keyframes ld-sf { from { opacity: 0; transform: translateX(-8px); } to { opacity: 1; transform: translateX(0); } }
@keyframes ld-pl { 0%,100% { opacity: 1; } 50% { opacity: .4; } }
.ld-sw { animation: ld-sw 5s linear infinite; position: absolute; left: 0; right: 0; top: 0; height: 120px; background: linear-gradient(to bottom, transparent, rgba(180,83,9,.06) 40%, rgba(180,83,9,.12) 50%, rgba(180,83,9,.06) 60%, transparent); pointer-events: none; z-index: 1; }
.ld-gf { animation: ld-gf 4s ease-in-out infinite; position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(rgba(180,83,9,.1) 1px, transparent 1px); background-size: 30px 30px; }
.ld-cur { animation: ld-cur .9s step-end infinite; }
.ld-sf { animation: ld-sf .35s cubic-bezier(.16,1,.3,1) both; }
.ld-pl { animation: ld-pl 1.4s ease-in-out infinite; }

/* ── STICKY TOOLBAR ── */
.uf-toolbar {
  position: sticky;
  top: var(--site-header-height, 64px);
  z-index: 20;
  background: var(--ink);
  border-bottom: 1px solid rgba(255,255,255,.08);
}

/* ── PROGRESS BAR ── */
@keyframes pb-fill { from { width: 0%; } }
.uf-pb { height: 2px; background: var(--gold); transition: width .6s ease; }

/* ── SCORE BAR ── */
.uf-bar-bg { height: 4px; background: var(--rule); position: relative; }
.uf-bar-fill { height: 4px; position: absolute; left: 0; top: 0; transition: width .8s cubic-bezier(.16,1,.3,1); }

/* ── VERDICT BOX ── */
.uf-verdict { background: var(--ink); padding: clamp(24px,5vw,44px); }

/* ── PRINT ── */
@media print { .no-print { display: none !important; } }
@media (max-width: 768px) { .mc { grid-template-columns: 1fr !important; } }
@media (max-width: 640px) { .hm { display: none !important; } }
`;

// ─── HELPERS ──────────────────────────────────────────────────────────────────
function sc(v: number) { return v >= 70 ? "#15803D" : v >= 50 ? "#B45309" : "#B91C1C"; }

function RiskBadge({ level }: { level: "high" | "medium" | "low" }) {
  const s = {
    high:   { bg: "#FEF2F2", c: "#B91C1C", b: "#FECACA" },
    medium: { bg: "#FEF3C7", c: "#B45309", b: "#FDE68A" },
    low:    { bg: "#F0FDF4", c: "#15803D", b: "#BBF7D0" },
  }[level];
  return (
    <span className="sf" style={{ fontSize: "8px", fontWeight: 700, letterSpacing: ".14em", textTransform: "uppercase", padding: "2px 8px", background: s.bg, color: s.c, border: `1px solid ${s.b}` }}>
      {level}
    </span>
  );
}

function ConfBadge({ level }: { level: "high" | "medium" | "low" }) {
  const c = { high: "#15803D", medium: "#B45309", low: "#B91C1C" }[level];
  const t = { high: "High Confidence", medium: "Medium Confidence", low: "Estimated" }[level];
  return (
    <span className="sf" style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontSize: "9px", fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", color: c, border: `1.5px solid ${c}`, padding: "3px 9px" }}>
      <span style={{ width: 5, height: 5, borderRadius: "50%", background: c, display: "inline-block" }} />
      {t}
    </span>
  );
}

function ScoreBar({ label, value }: { label: string; value: number }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 5 }}>
        <span className="uf-lbl" style={{ fontSize: 8 }}>{label}</span>
        <span className="pf" style={{ fontSize: 13, fontWeight: 900, color: sc(value) }}>{value}</span>
      </div>
      <div className="uf-bar-bg">
        <div className="uf-bar-fill" style={{ width: `${value}%`, background: sc(value) }} />
      </div>
    </div>
  );
}

// ─── MAIN EXPORT ──────────────────────────────────────────────────────────────
export function ReportGenerator() {
  const [step,     setStep]     = useState<"form" | "loading" | "report">("form");
  const [form,     setForm]     = useState<FormData>({ startupName: "", founderName: "", foundedYear: "", industry: "", city: "", website: "", description: "", targetMarket: "", businessModel: "", currentRevenue: "", teamSize: "", fundingStage: "", fundingRaised: "", keyCompetitors: "", uniqueAdvantage: "" });
  const [curStep,  setCurStep]  = useState(0);
  const [progress, setProgress] = useState(0);
  const [report,   setReport]   = useState<ReportData | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (step === "report" && rootRef.current) {
      const headerH = parseInt(getComputedStyle(document.documentElement).getPropertyValue("--site-header-height") || "64");
      const rect = rootRef.current.getBoundingClientRect();
      window.scrollTo({ top: window.scrollY + rect.top - headerH - 16, behavior: "smooth" });
    }
  }, [step]);

  function upd(f: keyof FormData) {
    return (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm(p => ({ ...p, [f]: e.target.value }));
  }

  async function run() {
    setStep("loading"); setCurStep(0); setProgress(0);
    const total = STEPS.reduce((a, s) => a + s.ms, 0);
    let elapsed = 0;
    const apiP = fetch("/api/generate-report", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) }).then(r => r.json()).catch(() => null);
    for (let i = 0; i < STEPS.length; i++) {
      setCurStep(i);
      await new Promise(r => setTimeout(r, STEPS[i].ms));
      elapsed += STEPS[i].ms;
      setProgress(Math.round((elapsed / total) * 100));
    }
    const data = await apiP;
    setReport(data && !data.error ? data : fallback(form));
    setStep("report");
  }

  const ok = !!(form.startupName && form.founderName && form.foundedYear && form.industry && form.description);

  // ══════════════════════════════════════════════════════════════════════
  //  FORM VIEW
  // ══════════════════════════════════════════════════════════════════════
  if (step === "form") return (
    <div ref={rootRef} className="uf-root" style={{ paddingBottom: 60 }}>
      <style>{CSS}</style>
      <div className="uf-w" style={{ paddingTop: "clamp(20px,4vw,44px)" }}>

        {/* ── MASTHEAD — exact same structure as homepage ── */}
        <header className="a0" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "clamp(20px,4vw,36px)" }}>

          {/* Dateline row */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid var(--rule)", marginBottom: "clamp(16px,3vw,28px)", flexWrap: "wrap", gap: 8 }}>
            <span className="uf-lbl">
              {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })}
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <span className="ldot" />
              <span className="uf-lbl" style={{ color: "var(--green)" }}>Intelligence Engine Active</span>
            </div>
          </div>

          {/* Title */}
          <div style={{ textAlign: "center", paddingBottom: "clamp(16px,3vw,28px)", borderBottom: "1px solid var(--rule)" }}>
            <p className="uf-lbl" style={{ marginBottom: 12 }}>UpForge · Independent Startup Intelligence · India Edition</p>
            <h1 className="pf" style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.02, letterSpacing: "-.02em", color: "var(--ink)" }}>
              Startup Valuation Report
            </h1>
            <p style={{ fontStyle: "italic", marginTop: 10, color: "var(--ink3)", fontSize: "clamp(13px,1.8vw,16px)" }}>
              AI-powered · Benchmarked against 500+ Indian startups · Free forever
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 18 }}>
              <div style={{ height: 1, width: "clamp(48px,10vw,120px)", background: "var(--rule)" }} />
              <span style={{ color: "var(--rule)", fontSize: 13 }}>✦</span>
              <div style={{ height: 1, width: "clamp(48px,10vw,120px)", background: "var(--rule)" }} />
            </div>
          </div>

          {/* Sub-nav strip — same as homepage edition tabs */}
          <div style={{ display: "flex", gap: 0, borderBottom: "1px solid var(--rule)", overflowX: "auto", scrollbarWidth: "none" }}>
            {[["01", "Startup Identity"], ["02", "What You Do"], ["03", "Traction & Funding"]].map(([n, l]) => (
              <div key={n} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRight: "1px solid var(--rule)", flexShrink: 0 }}>
                <span className="sf" style={{ fontSize: 8, fontWeight: 800, color: "var(--gold)", letterSpacing: ".16em" }}>§{n}</span>
                <span className="uf-lbl" style={{ color: "var(--ink3)" }}>{l}</span>
              </div>
            ))}
          </div>
        </header>

        {/* ── FORM BODY ── */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: 0, alignItems: "start" }} className="mc">

          {/* Left: form fields */}
          <div style={{ paddingRight: "clamp(16px,4vw,40px)", paddingTop: 28, paddingBottom: 28, borderRight: "1px solid var(--rule)" }}>

            {/* §01 */}
            <div className="uf-sh" style={{ marginBottom: 18 }}>
              <span className="sf" style={{ fontSize: 9, color: "var(--gold)", fontWeight: 800 }}>§01</span>
              <span className="uf-lbl" style={{ color: "var(--ink2)" }}>Startup Identity</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 28 }} className="mc">
              {[
                { l: "Startup Name *", f: "startupName", p: "e.g. Krutrim AI" },
                { l: "Founder Name *",  f: "founderName",  p: "e.g. Bhavish Aggarwal" },
                { l: "Headquarters",    f: "city",         p: "e.g. Bengaluru" },
                { l: "Website URL",     f: "website",      p: "https://yourstartup.com" },
              ].map(({ l, f, p }) => (
                <div key={f}>
                  <label className="uf-lbl2">{l}</label>
                  <input className="uf-inp" placeholder={p} value={form[f as keyof FormData]} onChange={upd(f as keyof FormData)} />
                </div>
              ))}
              <div>
                <label className="uf-lbl2">Founded Year *</label>
                <input className="uf-inp" placeholder="e.g. 2022" type="number" min="2000" max="2025" value={form.foundedYear} onChange={upd("foundedYear")} />
              </div>
              <div>
                <label className="uf-lbl2">Industry / Sector *</label>
                <select className="uf-inp" value={form.industry} onChange={upd("industry")}>
                  <option value="">Select…</option>
                  {["AI/ML", "FinTech", "SaaS", "EdTech", "HealthTech", "D2C/E-commerce", "Climate Tech", "Space Tech", "AgriTech", "Mobility", "Gaming", "Web3/Crypto", "BioTech", "Media/Content", "Other"].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>

            {/* §02 */}
            <div className="uf-sh" style={{ marginBottom: 18 }}>
              <span className="sf" style={{ fontSize: 9, color: "var(--gold)", fontWeight: 800 }}>§02</span>
              <span className="uf-lbl" style={{ color: "var(--ink2)" }}>What You Do</span>
            </div>
            <div style={{ display: "grid", gap: 14, marginBottom: 28 }}>
              <div>
                <label className="uf-lbl2">One-line description *</label>
                <input className="uf-inp" placeholder="e.g. AI-powered invoice automation for Indian SMEs" value={form.description} onChange={upd("description")} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="mc">
                <div>
                  <label className="uf-lbl2">Target Market</label>
                  <input className="uf-inp" placeholder="e.g. Indian SMEs, B2B SaaS" value={form.targetMarket} onChange={upd("targetMarket")} />
                </div>
                <div>
                  <label className="uf-lbl2">Revenue Model</label>
                  <input className="uf-inp" placeholder="e.g. SaaS subscription" value={form.businessModel} onChange={upd("businessModel")} />
                </div>
              </div>
              <div>
                <label className="uf-lbl2">Unique Moat / Advantage</label>
                <textarea className="uf-inp" style={{ height: 68, resize: "none" }} placeholder="What makes you defensible? IP, network effects, proprietary data…" value={form.uniqueAdvantage} onChange={upd("uniqueAdvantage")} />
              </div>
            </div>

            {/* §03 */}
            <div className="uf-sh" style={{ marginBottom: 18 }}>
              <span className="sf" style={{ fontSize: 9, color: "var(--gold)", fontWeight: 800 }}>§03</span>
              <span className="uf-lbl" style={{ color: "var(--ink2)" }}>Traction & Funding</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="mc">
              <div>
                <label className="uf-lbl2">Annual Revenue (ARR)</label>
                <input className="uf-inp" placeholder="₹0 / Pre-revenue / ₹50L ARR" value={form.currentRevenue} onChange={upd("currentRevenue")} />
              </div>
              <div>
                <label className="uf-lbl2">Team Size</label>
                <input className="uf-inp" placeholder="e.g. 8" type="number" value={form.teamSize} onChange={upd("teamSize")} />
              </div>
              <div>
                <label className="uf-lbl2">Funding Stage</label>
                <select className="uf-inp" value={form.fundingStage} onChange={upd("fundingStage")}>
                  <option value="">Select…</option>
                  {["Bootstrapped", "Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Revenue-funded"].map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="uf-lbl2">Total Funding Raised</label>
                <input className="uf-inp" placeholder="e.g. $500K, ₹2Cr, None" value={form.fundingRaised} onChange={upd("fundingRaised")} />
              </div>
              <div style={{ gridColumn: "span 2" }}>
                <label className="uf-lbl2">Key Competitors</label>
                <input className="uf-inp" placeholder="e.g. Razorpay, PayU, Cashfree" value={form.keyCompetitors} onChange={upd("keyCompetitors")} />
              </div>
            </div>
          </div>

          {/* Right: sidebar — same sticky panel style */}
          <div style={{ paddingLeft: "clamp(16px,3vw,28px)", paddingTop: 28, paddingBottom: 28 }}>
            <div style={{ position: "sticky", top: "calc(var(--site-header-height, 64px) + 16px)" }}>

              {/* What We Analyse — same "By the Numbers" dark header style */}
              <div style={{ marginBottom: 12 }}>
                <div style={{ background: "var(--ink)", padding: "10px 14px" }}>
                  <p className="uf-lbl" style={{ color: "white" }}>What We Analyse</p>
                </div>
                <div style={{ border: "1px solid var(--rule2)", borderTop: "none", padding: 14 }}>
                  {["Live web search for your startup", "News & media mentions", "Sector funding benchmarks", "Age-adjusted valuation", "Revenue multiple vs peers", "Market size TAM/SAM/SOM", "Competitive moat analysis", "Investor readiness score", "30/90/365-day roadmap"].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 7 }}>
                      <CheckCircle2 style={{ width: 10, height: 10, color: "var(--green)", flexShrink: 0 }} />
                      <span className="sf" style={{ fontSize: 11, color: "var(--ink3)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Honest Valuations — same "The Lesson" accent box */}
              <div style={{ background: "var(--goldlt)", border: "1px solid #FDE68A", padding: "12px 14px", marginBottom: 12 }}>
                <div style={{ display: "flex", gap: 8 }}>
                  <Info style={{ width: 11, height: 11, color: "var(--gold)", flexShrink: 0, marginTop: 1 }} />
                  <div>
                    <p className="uf-lbl" style={{ color: "var(--gold)", marginBottom: 4 }}>Honest Valuations</p>
                    <p className="sf" style={{ fontSize: 11, color: "var(--gold3)", lineHeight: 1.55 }}>New startups (&lt;1yr) with no revenue are valued at ₹20L–₹1.5Cr max. We won't inflate numbers.</p>
                  </div>
                </div>
              </div>

              {/* Badges */}
              <div style={{ display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
                {[{ I: Shield, t: "100% free, no signup" }, { I: Search, t: "Live web search" }, { I: FileText, t: "Print-ready PDF" }].map(({ I, t }, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <I style={{ width: 11, height: 11, color: "var(--ink4)" }} />
                    <span className="sf" style={{ fontSize: 11, color: "var(--ink3)" }}>{t}</span>
                  </div>
                ))}
              </div>

              {/* CTA — same homepage "List Your Startup" button */}
              <button
                onClick={run}
                disabled={!ok}
                style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px 20px", fontSize: 12, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", cursor: ok ? "pointer" : "not-allowed", border: "none", background: ok ? "var(--ink)" : "var(--rule2)", color: ok ? "#FDFCF9" : "var(--ink5)", transition: "opacity .18s", fontFamily: "system-ui,sans-serif" }}
              >
                <Sparkles style={{ width: 13, height: 13 }} /> Generate Report
              </button>
              {!ok && <p className="uf-lbl" style={{ textAlign: "center", marginTop: 8, fontSize: 8 }}>Fill required fields (*) to continue</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════════════
  //  LOADING VIEW — dark contained block
  // ══════════════════════════════════════════════════════════════════════
  if (step === "loading") return (
    <div ref={rootRef} className="uf-root">
      <style>{CSS}</style>
      <div className="uf-loading">
        <div className="ld-gf" />
        <div className="ld-sw" />
        {/* vignette */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 1, background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.7) 100%)" }} />

        {/* top bar — same masthead dateline strip */}
        <div style={{ position: "relative", zIndex: 10, borderBottom: "1px solid rgba(180,83,9,.12)", padding: "12px clamp(16px,3vw,32px)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(0,0,0,.4)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img src="/logo.jpg" alt="UpForge" style={{ width: 20, height: 20, objectFit: "contain", opacity: .85 }} />
            <span className="sf" style={{ fontSize: 9, letterSpacing: ".24em", textTransform: "uppercase", color: "rgba(255,255,255,.3)" }}>UpForge Intelligence</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <span className="ld-pl" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
            <span className="sf" style={{ fontSize: 8, letterSpacing: ".2em", textTransform: "uppercase", color: "rgba(180,83,9,.7)" }}>Analysis Running</span>
          </div>
        </div>

        {/* progress bar */}
        <div style={{ position: "relative", zIndex: 10, height: 2, background: "rgba(255,255,255,.04)" }}>
          <div className="uf-pb" style={{ width: `${progress}%` }} />
        </div>

        {/* centre content */}
        <div style={{ position: "relative", zIndex: 10, flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "clamp(24px,5vw,56px) clamp(16px,3vw,32px)", textAlign: "center" }}>

          {/* Big Playfair title — same masthead style */}
          <p className="uf-lbl" style={{ color: "rgba(180,83,9,.5)", marginBottom: 16, letterSpacing: ".3em" }}>Analysing</p>
          <h2 className="pf" style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)", fontWeight: 900, color: "rgba(255,255,255,.88)", lineHeight: 1.05, marginBottom: 8 }}>
            {form.startupName || "Your Startup"}
          </h2>
          <p style={{ fontSize: "clamp(12px,1.5vw,14px)", color: "rgba(255,255,255,.3)", fontStyle: "italic", marginBottom: 40 }}>
            {form.founderName} · {form.industry} · {form.city || "India"}
          </p>

          {/* Steps — same section-head divider feel */}
          <div style={{ width: "100%", maxWidth: 520, textAlign: "left" }}>
            {STEPS.map((s, i) => {
              const done = i < curStep;
              const active = i === curStep;
              return (
                <div
                  key={i}
                  className={active ? "ld-sf" : ""}
                  style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10, opacity: done ? .35 : active ? 1 : .15, transition: "opacity .3s" }}
                >
                  <div style={{ width: 18, height: 18, borderRadius: "50%", border: `1.5px solid ${done ? "rgba(21,128,61,.5)" : active ? "rgba(180,83,9,.6)" : "rgba(255,255,255,.1)"}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    {done
                      ? <CheckCircle2 style={{ width: 10, height: 10, color: "#15803D" }} />
                      : active
                        ? <span className="ld-pl" style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
                        : null
                    }
                  </div>
                  <span className="sf" style={{ fontSize: 11, color: active ? "rgba(255,255,255,.8)" : done ? "rgba(255,255,255,.3)" : "rgba(255,255,255,.15)", letterSpacing: ".04em" }}>
                    {s.label}
                  </span>
                  {done && <CheckCircle2 style={{ width: 10, height: 10, color: "#15803D", marginLeft: "auto", flexShrink: 0 }} />}
                </div>
              );
            })}
          </div>

          {/* Progress percent — same Playfair number style */}
          <p className="pf" style={{ fontSize: "3.5rem", fontWeight: 900, color: "rgba(180,83,9,.7)", marginTop: 32, lineHeight: 1 }}>{progress}%</p>
          <p className="uf-lbl" style={{ color: "rgba(255,255,255,.15)", marginTop: 8 }}>Complete</p>
        </div>

        {/* bottom disclaimer */}
        <div style={{ position: "relative", zIndex: 10, borderTop: "1px solid rgba(180,83,9,.08)", padding: "10px clamp(16px,3vw,32px)", textAlign: "center" }}>
          <p className="sf" style={{ fontSize: 9, color: "rgba(255,255,255,.15)", letterSpacing: ".12em" }}>
            UpForge Intelligence · India's independent startup registry
          </p>
        </div>
      </div>
    </div>
  );

  // ══════════════════════════════════════════════════════════════════════
  //  REPORT VIEW
  // ══════════════════════════════════════════════════════════════════════
  if (!report) return null;
  const radarData = [
    { subject: "Market",     value: report.scores.market },
    { subject: "Team",       value: report.scores.team },
    { subject: "Product",    value: report.scores.product },
    { subject: "Traction",   value: report.scores.traction },
    { subject: "Moat",       value: report.scores.moat },
    { subject: "Financials", value: report.scores.financials },
  ];

  return (
    <div ref={rootRef} className="uf-root">
      <style>{CSS}</style>

      {/* ── STICKY TOOLBAR ── */}
      <div className="uf-toolbar no-print">
        <div className="uf-w" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px clamp(16px,3vw,32px)", flexWrap: "wrap", gap: 8 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="ldot" />
            <span className="uf-lbl" style={{ color: "rgba(255,255,255,.5)" }}>Report ID: {report.reportId}</span>
            <span style={{ color: "rgba(255,255,255,.12)" }}>·</span>
            <span className="uf-lbl" style={{ color: "rgba(255,255,255,.35)" }}>{form.startupName}</span>
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button onClick={() => setStep("form")} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "transparent", border: "1px solid rgba(255,255,255,.15)", color: "rgba(255,255,255,.5)", cursor: "pointer", fontSize: 9, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "system-ui,sans-serif" }}>
              <RefreshCw style={{ width: 10, height: 10 }} /> New Report
            </button>
            <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: 6, padding: "7px 14px", background: "var(--gold)", border: "none", color: "#FDFCF9", cursor: "pointer", fontSize: 9, fontWeight: 700, letterSpacing: ".12em", textTransform: "uppercase", fontFamily: "system-ui,sans-serif" }}>
              <Download style={{ width: 10, height: 10 }} /> Download PDF
            </button>
          </div>
        </div>
      </div>

      <div className="uf-w" style={{ paddingTop: "clamp(24px,4vw,48px)", paddingBottom: 60 }}>

        {/* ══ REPORT MASTHEAD — same as homepage masthead ══ */}
        <header className="a0" style={{ borderBottom: "3px solid var(--ink)", paddingBottom: "clamp(20px,4vw,36px)" }}>
          {/* Dateline */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: 10, borderBottom: "1px solid var(--rule)", marginBottom: "clamp(16px,3vw,28px)", flexWrap: "wrap", gap: 8 }}>
            <span className="uf-lbl">{new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })}</span>
            <ConfBadge level={report.valuationRange.confidence} />
          </div>

          {/* Title block — same "The Founder Chronicle" pattern */}
          <div style={{ textAlign: "center", borderBottom: "1px solid var(--rule)", paddingBottom: "clamp(16px,3vw,28px)", marginBottom: "clamp(16px,3vw,24px)" }}>
            <p className="uf-lbl" style={{ marginBottom: 12 }}>UpForge · Startup Intelligence Report</p>
            <h1 className="pf" style={{ fontSize: "clamp(2.2rem,5.5vw,4.5rem)", fontWeight: 900, lineHeight: 1.02, color: "var(--ink)" }}>
              {form.startupName}
            </h1>
            <p style={{ fontStyle: "italic", marginTop: 8, color: "var(--ink3)", fontSize: "clamp(13px,1.8vw,16px)" }}>
              {form.industry} · {form.city || "India"} · Est. {form.foundedYear}
            </p>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginTop: 16 }}>
              <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: "var(--rule)" }} />
              <span style={{ color: "var(--rule)", fontSize: 13 }}>✦</span>
              <div style={{ height: 1, width: "clamp(40px,8vw,100px)", background: "var(--rule)" }} />
            </div>
          </div>

          {/* Meta strip — same as homepage "By UpForge Editorial" byline row */}
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 16px" }}>
            {[
              `Founder: ${form.founderName}`,
              form.fundingStage || "Bootstrapped",
              form.teamSize ? `Team: ${form.teamSize}` : null,
              form.currentRevenue || "Pre-revenue",
              `Report: ${report.reportId}`,
            ].filter(Boolean).map((item, i, arr) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <span className="uf-lbl" style={{ color: "var(--ink4)" }}>{item}</span>
                {i < arr.length - 1 && <span style={{ color: "var(--rule)", fontSize: 10 }}>·</span>}
              </span>
            ))}
          </div>
        </header>

        {/* Data sources note */}
        {report.publicDataNote && (
          <div className="a1" style={{ padding: "10px 14px", background: "var(--goldlt)", border: "1px solid #FDE68A", borderTop: "none", display: "flex", gap: 8 }}>
            <Info style={{ width: 11, height: 11, color: "var(--gold)", flexShrink: 0, marginTop: 1 }} />
            <p className="sf" style={{ fontSize: 10, color: "var(--gold3)", lineHeight: 1.55 }}>{report.publicDataNote}</p>
          </div>
        )}

        {/* ══ §1 — EXECUTIVE SUMMARY + VALUATION ══ */}
        <div className="a1 uf-sec" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }} id="valuation">

          {/* Executive Summary */}
          <div style={{ paddingRight: "clamp(16px,3vw,36px)", borderRight: "1px solid var(--rule)" }}>
            <div className="uf-sh">
              <Globe style={{ width: 11, height: 11, color: "var(--ink4)" }} />
              <span className="uf-lbl">Executive Summary</span>
            </div>
            <p className="pf" style={{ fontSize: "clamp(1rem,1.8vw,1.25rem)", fontWeight: 700, fontStyle: "italic", color: "var(--ink)", lineHeight: 1.6, marginBottom: 16 }}>
              {report.executiveSummary}
            </p>
            {report.dataSourcesFound?.length > 0 && (
              <div>
                <p className="uf-lbl" style={{ marginBottom: 8 }}>Sources Found</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {report.dataSourcesFound.map((s, i) => (
                    <span key={i} className="sf" style={{ fontSize: 9, padding: "2px 8px", border: "1px solid var(--rule2)", color: "var(--ink3)" }}>{s}</span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Valuation — same "By the Numbers" DL grid */}
          <div style={{ paddingLeft: "clamp(16px,3vw,36px)" }}>
            <div className="uf-sh">
              <TrendingUp style={{ width: 11, height: 11, color: "var(--ink4)" }} />
              <span className="uf-lbl">Valuation Range</span>
            </div>

            {/* Big number — same Playfair stat display */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px", marginBottom: 12 }}>
              {[["Low", report.valuationRange.low, "var(--red)"], ["Midpoint", report.valuationRange.midpoint, "var(--ink)"], ["High", report.valuationRange.high, "var(--green)"]].map(([l, v, c]) => (
                <div key={l as string} style={{ background: "var(--white)", padding: "16px 14px", textAlign: "center" }}>
                  <p className="uf-lbl" style={{ fontSize: 7, marginBottom: 6 }}>{l as string}</p>
                  <p className="pf" style={{ fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 900, color: c as string, lineHeight: 1 }}>{v as string}</p>
                </div>
              ))}
            </div>

            <p className="sf" style={{ fontSize: 11, color: "var(--ink3)", lineHeight: 1.6, marginBottom: 10 }}>
              <strong>Methodology:</strong> {report.valuationRange.methodology}
            </p>
            <div style={{ background: "var(--parch2)", border: "1px solid var(--rule2)", padding: "10px 12px" }}>
              <p className="sf" style={{ fontSize: 10, color: "var(--ink3)", lineHeight: 1.6, fontStyle: "italic" }}>{report.valuationRange.confidenceNote}</p>
            </div>
          </div>
        </div>

        {/* ══ §2 — SCORES ══ */}
        <div className="a2 uf-sec" style={{ display: "grid", gridTemplateColumns: "1fr 260px", gap: "clamp(24px,4vw,48px)", alignItems: "start" }}>

          {/* Score bars */}
          <div>
            <div className="uf-sh">
              <BarChart2 style={{ width: 11, height: 11, color: "var(--ink4)" }} />
              <span className="uf-lbl">Startup Scorecard</span>
            </div>

            {/* Overall score — same Playfair number display */}
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 24, paddingBottom: 18, borderBottom: "1px solid var(--rule)" }}>
              <span className="pf" style={{ fontSize: "clamp(3rem,6vw,5rem)", fontWeight: 900, color: sc(report.scores.overall), lineHeight: 1 }}>
                {report.scores.overall}
              </span>
              <div>
                <span className="pf" style={{ fontSize: "1.1rem", color: "var(--ink4)", fontWeight: 700 }}>/100</span>
                <p className="uf-lbl" style={{ marginTop: 2 }}>Overall Score</p>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
              {[["Market Opportunity", report.scores.market], ["Team Quality", report.scores.team], ["Product Readiness", report.scores.product], ["Traction", report.scores.traction], ["Competitive Moat", report.scores.moat], ["Financials", report.scores.financials]].map(([l, v]) => (
                <ScoreBar key={l as string} label={l as string} value={v as number} />
              ))}
            </div>
          </div>

          {/* Radar chart */}
          <div>
            <div style={{ background: "var(--white)", border: "1px solid var(--rule2)", padding: 16 }}>
              <p className="uf-lbl" style={{ textAlign: "center", marginBottom: 8 }}>Score Radar</p>
              <ResponsiveContainer width="100%" height={200}>
                <RadarChart data={radarData} margin={{ top: 4, right: 4, bottom: 4, left: 4 }}>
                  <PolarGrid stroke="var(--rule)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fontSize: 9, fill: "var(--ink4)", fontFamily: "system-ui" }} />
                  <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar name="Score" dataKey="value" stroke={sc(report.scores.overall)} fill={sc(report.scores.overall)} fillOpacity={0.12} strokeWidth={1.5} />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* ══ §3 — STRENGTHS ══ */}
        <div className="a2 uf-sec">
          <div className="uf-sh">
            <Zap style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">Strengths</span>
          </div>
          {/* Same ink-border grid as startup registry cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px" }}>
            {report.strengths.map((s, i) => (
              <div key={i} className="uf-card" style={{ padding: 18, borderTop: `3px solid var(--green)` }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 8 }}>
                  <CheckCircle2 style={{ width: 11, height: 11, color: "var(--green)", flexShrink: 0 }} />
                  <p className="sf" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--green)" }}>{s.title}</p>
                </div>
                <p style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.7 }}>{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ §4 — RISKS ══ */}
        <div className="a2 uf-sec">
          <div className="uf-sh">
            <AlertTriangle style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">Risk Assessment</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px" }}>
            {report.risks.map((r, i) => {
              const tc = r.level === "high" ? "#B91C1C" : r.level === "medium" ? "#B45309" : "#15803D";
              return (
                <div key={i} className="uf-card" style={{ padding: 18, borderTop: `3px solid ${tc}` }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
                    <p className="sf" style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: tc }}>{r.title}</p>
                    <RiskBadge level={r.level} />
                  </div>
                  <p style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.7, marginBottom: 10 }}>{r.detail}</p>
                  <div style={{ display: "flex", gap: 7, padding: "8px 10px", background: "var(--parch2)", borderLeft: `2px solid ${tc}` }}>
                    <Target style={{ width: 10, height: 10, color: tc, flexShrink: 0, marginTop: 2 }} />
                    <p className="sf" style={{ fontSize: 10.5, color: "var(--ink3)", lineHeight: 1.6, fontStyle: "italic" }}>{r.mitigation}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══ §5 — MARKET OPPORTUNITY ══ */}
        <div className="a2 uf-sec">
          <div className="uf-sh">
            <Globe style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">Market Opportunity</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
            {/* TAM/SAM/SOM — same "By the Numbers" grid */}
            <div style={{ paddingRight: "clamp(16px,3vw,32px)", borderRight: "1px solid var(--rule)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px", marginBottom: 14 }}>
                {[["TAM", report.marketOpportunity.tam, "Total Addressable"], ["SAM", report.marketOpportunity.sam, "Serviceable"], ["SOM", report.marketOpportunity.som, "Obtainable"]].map(([l, v, sub]) => (
                  <div key={l as string} style={{ background: "var(--white)", padding: "16px 12px", textAlign: "center" }}>
                    <p className="uf-lbl" style={{ fontSize: 7, color: "var(--ink4)", marginBottom: 4 }}>{l}</p>
                    <p className="pf" style={{ fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: 4 }}>{v}</p>
                    <p className="sf" style={{ fontSize: 8, color: "var(--ink5)" }}>{sub}</p>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: 12.5, color: "var(--ink3)", lineHeight: 1.75, fontStyle: "italic" }}>{report.marketOpportunity.insight}</p>
            </div>

            {/* Competitors */}
            <div style={{ paddingLeft: "clamp(16px,3vw,32px)" }}>
              <p className="uf-lbl" style={{ marginBottom: 12 }}>Competitive Landscape</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--rule2)" }}>
                {report.competitorAnalysis.map((c, i) => {
                  const tc = c.threat === "high" ? "#B91C1C" : c.threat === "medium" ? "#B45309" : "#15803D";
                  return (
                    <div key={i} style={{ padding: "12px 14px", borderBottom: "1px solid var(--rule2)", display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 3, alignSelf: "stretch", background: tc, flexShrink: 0 }} />
                      <div style={{ flex: 1 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4 }}>
                          <p className="sf" style={{ fontSize: 11, fontWeight: 700, color: "var(--ink)" }}>{c.name}</p>
                          <RiskBadge level={c.threat} />
                        </div>
                        <p className="sf" style={{ fontSize: 10.5, color: "var(--ink4)", lineHeight: 1.5 }}>{c.difference}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* ══ §6 — GROWTH LEVERS + FOCUS AREAS ══ */}
        <div className="a3 uf-sec" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>

          {/* Growth Levers */}
          <div style={{ paddingRight: "clamp(16px,3vw,32px)", borderRight: "1px solid var(--rule)" }}>
            <div className="uf-sh">
              <TrendingUp style={{ width: 11, height: 11, color: "var(--ink4)" }} />
              <span className="uf-lbl">Growth Levers</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--rule2)" }}>
              {report.growthLevers.map((g, i) => (
                <div key={i} style={{ padding: "12px 14px", borderBottom: "1px solid var(--rule2)", display: "flex", gap: 10 }}>
                  <span className="pf" style={{ fontSize: 14, fontWeight: 900, color: "var(--gold)", lineHeight: 1, flexShrink: 0, paddingTop: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="sf" style={{ fontSize: 11, fontWeight: 700, color: "var(--ink)", marginBottom: 3 }}>{g.lever}</p>
                    <p className="sf" style={{ fontSize: 10, color: "var(--ink4)", marginBottom: 2 }}>{g.impact}</p>
                    <p className="sf" style={{ fontSize: 9, color: "var(--gold)", letterSpacing: ".08em" }}>{g.timeline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Focus Areas */}
          <div style={{ paddingLeft: "clamp(16px,3vw,32px)" }}>
            <div className="uf-sh">
              <Target style={{ width: 11, height: 11, color: "var(--ink4)" }} />
              <span className="uf-lbl">Priority Focus Areas</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 0, border: "1px solid var(--rule2)" }}>
              {report.focusAreas.map((f, i) => {
                const pc = f.priority === "critical" ? "#B91C1C" : f.priority === "high" ? "#B45309" : "var(--ink4)";
                return (
                  <div key={i} style={{ padding: "12px 14px", borderBottom: "1px solid var(--rule2)", borderLeft: `3px solid ${pc}` }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                      <p className="sf" style={{ fontSize: 11, fontWeight: 700, color: "var(--ink)" }}>{f.area}</p>
                      <span className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: pc, border: `1px solid ${pc}`, padding: "2px 7px" }}>{f.priority}</span>
                    </div>
                    <p className="sf" style={{ fontSize: 10.5, color: "var(--ink4)", lineHeight: 1.55 }}>{f.action}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ══ §7 — ROADMAP ══ */}
        <div className="a3 uf-sec">
          <div className="uf-sh">
            <ChevronRight style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">90-Day Roadmap</span>
          </div>
          {/* Same ink-border grid */}
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${report.roadmap.length}, 1fr)`, border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px" }}>
            {report.roadmap.map((ph, i) => (
              <div key={i} style={{ background: "var(--white)", padding: "20px 18px", borderTop: `3px solid var(--gold)` }}>
                <p className="pf" style={{ fontSize: 14, fontWeight: 900, color: "var(--gold)", marginBottom: 2 }}>Phase {i + 1}</p>
                <p className="sf" style={{ fontSize: 11, fontWeight: 700, color: "var(--ink)", marginBottom: 2 }}>{ph.phase}</p>
                <p className="uf-lbl" style={{ fontSize: 8, marginBottom: 14 }}>{ph.timeline}</p>
                {ph.goals.map((g, gi) => (
                  <div key={gi} style={{ display: "flex", gap: 7, marginBottom: 7 }}>
                    <ChevronRight style={{ width: 10, height: 10, color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                    <p className="sf" style={{ fontSize: 11, color: "var(--ink3)", lineHeight: 1.6 }}>{g}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* ══ §8 — BENCHMARKS ══ */}
        <div className="a3 uf-sec">
          <div className="uf-sh">
            <Users style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">Industry Benchmarks</span>
          </div>
          <div style={{ border: "1.5px solid var(--ink)", background: "var(--ink)", display: "flex", flexDirection: "column", gap: "1.5px" }}>
            {/* Header row */}
            <div style={{ background: "var(--ink)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 90px", padding: "8px 16px", gap: 16 }}>
              {["Metric", "Your Startup", "Industry Avg", "Verdict"].map(h => (
                <p key={h} className="uf-lbl" style={{ color: "rgba(255,255,255,.35)", fontSize: 8 }}>{h}</p>
              ))}
            </div>
            {report.benchmarks.map((b, i) => {
              const vc = b.verdict === "above" ? "var(--green)" : b.verdict === "below" ? "var(--red)" : "var(--gold)";
              return (
                <div key={i} style={{ background: "var(--white)", display: "grid", gridTemplateColumns: "1fr 1fr 1fr 90px", padding: "12px 16px", gap: 16, alignItems: "center" }}>
                  <p className="sf" style={{ fontSize: 11, fontWeight: 600, color: "var(--ink)" }}>{b.metric}</p>
                  <p className="pf" style={{ fontSize: 13, fontWeight: 700, color: "var(--ink2)" }}>{b.startup}</p>
                  <p className="sf" style={{ fontSize: 11, color: "var(--ink4)" }}>{b.industry}</p>
                  <span className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: vc, border: `1px solid ${vc}`, padding: "2px 8px", textAlign: "center" }}>{b.verdict}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ══ §9 — INVESTOR READINESS ══ */}
        <div className="a3 uf-sec">
          <div className="uf-sh">
            <Award style={{ width: 11, height: 11, color: "var(--ink4)" }} />
            <span className="uf-lbl">Investor Readiness</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: "1.5px" }}>
            {/* Score block */}
            <div style={{ background: "var(--parch2)", padding: "32px 28px", textAlign: "center", minWidth: 150 }}>
              <p className="pf" style={{ fontSize: "clamp(2.5rem,5vw,4rem)", fontWeight: 900, color: sc(report.investorReadiness.score), lineHeight: 1, marginBottom: 6 }}>{report.investorReadiness.score}</p>
              <p className="uf-lbl" style={{ fontSize: 8, marginBottom: 10 }}>Readiness Score</p>
              <p className="sf" style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)" }}>{report.investorReadiness.verdict}</p>
            </div>
            {/* Improvements */}
            <div style={{ background: "var(--white)", padding: "20px 22px" }}>
              <p className="uf-lbl" style={{ fontSize: 8, marginBottom: 14 }}>To Improve Investor Readiness</p>
              {report.investorReadiness.improvements.map((imp, i) => (
                <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start", marginBottom: 10 }}>
                  <ChevronRight style={{ width: 11, height: 11, color: "var(--gold)", flexShrink: 0, marginTop: 2 }} />
                  <p className="sf" style={{ fontSize: 12, color: "var(--ink3)", lineHeight: 1.65 }}>{imp}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ══ §10 — VERDICT — same dark box as homepage "List Your Startup" ══ */}
        <div className="a3" style={{ padding: "clamp(24px,5vw,48px) 0" }}>
          <div className="uf-verdict">
            <span className="uf-lbl" style={{ color: "var(--gold)", display: "block", marginBottom: 14, fontSize: 9 }}>
              ✦ UpForge Analyst Verdict
            </span>
            {/* Pull quote — same as homepage pull quote style */}
            <p className="pf" style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", fontWeight: 400, fontStyle: "italic", color: "rgba(253,252,249,.88)", lineHeight: 1.75, maxWidth: 820 }}>
              &ldquo;{report.verdict}&rdquo;
            </p>
            <div style={{ marginTop: 28, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
              <span className="sf" style={{ fontSize: 9, color: "rgba(255,255,255,.18)", letterSpacing: ".1em" }}>
                ID: {report.reportId} · {new Date().toLocaleDateString("en-IN")} · UpForge v3.0
              </span>
              <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 20px", background: "var(--gold)", color: "#FDFCF9", border: "none", cursor: "pointer", fontSize: 11, fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", fontFamily: "system-ui,sans-serif" }}>
                <Download style={{ width: 12, height: 12 }} /> Download PDF
              </button>
            </div>
          </div>
          {report.disclaimer && (
            <div style={{ marginTop: 14, padding: "12px 16px", background: "var(--parch2)", border: "1px solid var(--rule)", display: "flex", gap: 8, alignItems: "flex-start" }}>
              <Info style={{ width: 11, height: 11, color: "var(--ink5)", flexShrink: 0, marginTop: 1 }} />
              <p className="sf" style={{ fontSize: 10, color: "var(--ink4)", lineHeight: 1.65 }}>{report.disclaimer}</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

// ─── FALLBACK DATA ─────────────────────────────────────────────────────────────
function fallback(form: FormData): ReportData {
  const yr  = parseInt(form.foundedYear) || new Date().getFullYear();
  const age = new Date().getFullYear() - yr;
  const rev = !!(form.currentRevenue && !form.currentRevenue.toLowerCase().includes("pre") && form.currentRevenue !== "₹0" && form.currentRevenue !== "0");
  const team = parseInt(form.teamSize) || 2;
  const id = Math.random().toString(36).substring(2, 10).toUpperCase();
  let low = "₹10L", mid = "₹25L", high = "₹60L", conf: "high" | "medium" | "low" = "low";
  let note = "Startup is <1yr old with no verifiable traction. Most angels value pre-revenue startups at ₹25–75L.", meth = "Berkus method: team quality, concept, sector heat.";
  if (age >= 1 && rev) { const m = form.industry?.includes("SaaS") || form.industry?.includes("AI") ? 7 : 4; low = `₹${m * 2}L`; mid = `₹${m * 5}L`; high = `₹${m * 12}L`; conf = "medium"; note = "Based on self-reported revenue. Verify with audited financials before fundraising."; meth = `${m}x ARR revenue multiple for ${form.industry || "this sector"}.`; }
  else if (age >= 2) { low = "₹40L"; mid = "₹1.2Cr"; high = "₹3.5Cr"; conf = "low"; note = "No revenue confirmed. Based on comparable Indian early-stage rounds."; meth = "Stage-comparable method. Pre-revenue 2yr Indian startups typically valued ₹50L–₹2Cr."; }
  return {
    reportId: id, dataSourcesFound: [], publicDataNote: "No public data found. Analysis based on provided information.",
    executiveSummary: `${form.startupName} is a ${age < 1 ? "very early-stage" : age + "-year-old"} ${form.industry || "tech"} startup founded by ${form.founderName}${form.city ? ` in ${form.city}` : ""}, building ${form.description || "a solution"}. ${!rev ? "The startup is pre-revenue, limiting valuation certainty significantly." : "Initial revenue signals traction."} ${team < 5 ? "Small team indicates very early operations." : ""}`,
    valuationRange: { low, midpoint: mid, high, methodology: meth, confidence: conf, confidenceNote: note },
    scores: { overall: age < 1 ? 38 : rev ? 62 : 48, market: 62, team: team >= 5 ? 65 : 42, product: rev ? 60 : 35, traction: rev ? 58 : 22, moat: form.uniqueAdvantage ? 55 : 32, financials: rev ? 52 : 18 },
    strengths: [{ title: "Clear Problem Focus", detail: `${form.description || "The startup"} addresses a specific market need.` }, { title: "Sector Momentum", detail: `${form.industry || "This sector"} has strong VC tailwinds in India through 2025.` }, { title: "Founder Commitment", detail: `Founding a company is the hardest filter. ${form.founderName}'s commitment is the foundation.` }, { title: "Lean Operations", detail: "A small team means low burn rate and forced prioritisation — a real advantage." }],
    risks: [{ level: "high", title: age < 1 ? "Idea-Stage Survival" : "Pre-PMF Risk", detail: age < 1 ? "90%+ of startups at this stage fail to reach product-market fit." : "No confirmed PMF signals from public data.", mitigation: "Run 50+ customer discovery interviews. Validate willingness-to-pay first." }, { level: "high", title: "Zero Revenue Risk", detail: rev ? "Revenue is self-reported and unverified." : "Zero revenue means full dependence on external capital.", mitigation: "Identify 3 paying pilot customers within 60 days." }, { level: "medium", title: "Competition Risk", detail: form.keyCompetitors ? `Competing against ${form.keyCompetitors}.` : "Established players likely exist with distribution advantages.", mitigation: "Own a micro-niche first. Expand only after dominating one vertical." }, { level: "medium", title: "Team Depth Risk", detail: `Team of ${team} is ${team < 3 ? "critically thin" : "small"}.`, mitigation: "Document all processes. Target one senior complementary hire within 6 months." }],
    competitorAnalysis: (form.keyCompetitors || "Market Incumbents").split(",").slice(0, 4).map((c, i) => ({ name: c.trim() || `Competitor ${i + 1}`, threat: (["high", "medium", "medium", "low"] as const)[i] || "medium", difference: form.uniqueAdvantage ? `You claim: ${form.uniqueAdvantage.substring(0, 60)}…` : "Differentiation not clearly defined." })),
    marketOpportunity: { tam: form.industry?.includes("FinTech") ? "$100B" : form.industry?.includes("SaaS") ? "$50B" : "$20B", sam: "$3B", som: age < 2 ? "$5M" : "$25M", insight: `India's ${form.industry || "tech"} sector grows at 25–35% CAGR. Realistic Year 1 SOM for pre-revenue startup: 0.01–0.05% of SAM.` },
    growthLevers: [{ lever: "Customer Discovery Sprint", impact: "Validates assumptions", timeline: "0–30 days" }, { lever: "3 Paying Pilot Customers", impact: "Proves revenue model", timeline: "30–60 days" }, { lever: "Referral Loop", impact: "Reduces CAC", timeline: "60–90 days" }, { lever: "SEO & Content Marketing", impact: "Long-term distribution", timeline: "3–6 months" }, { lever: "Strategic Partnership", impact: "Distribution leverage", timeline: "6–12 months" }],
    focusAreas: [{ area: "Validate Willingness-to-Pay", priority: "critical", action: "Get 3 customers to pay — even ₹1,000/month — before building further." }, { area: "Define Riskiest Assumption", priority: "critical", action: "What single assumption does your business collapse without? Test it this week." }, { area: "Build MVP, Not a Product", priority: "high", action: "Ship the simplest version delivering core value." }, { area: "Investor Readiness Prep", priority: "medium", action: "Prepare a 10-slide deck. Approach angels only after first revenue." }],
    investorReadiness: { score: age < 1 ? 28 : rev ? 58 : 40, verdict: age < 1 ? "Not Ready — Get First Revenue" : rev ? "Approaching Ready" : "Pre-Seed Stage", improvements: ["Show 3 months of MoM revenue or user growth", "Define unit economics (CAC, LTV, payback)", "Document go-to-market with specific channels", "Add 1–2 advisors with sector credibility", "Prepare 12-month financial model"] },
    roadmap: [{ phase: "Validate (0–90 Days)", timeline: "3 months", goals: ["Run 50 customer interviews", "Identify top 3 paying use cases", "Ship MVP to 10 beta users", "Achieve ₹1 of revenue"] }, { phase: "Build (3–9 Months)", timeline: "6 months", goals: ["Reach ₹10–50L ARR", "Repeatable sales motion", "Hire 1 key role", "Refine unit economics"] }, { phase: "Scale (9–18 Months)", timeline: "9 months", goals: ["Target ₹1Cr ARR", "Raise Pre-Seed/Seed", "Expand to 2nd segment", "Build team of 8–12"] }],
    benchmarks: [{ metric: "Time to First Revenue", startup: age < 1 ? "Not yet" : `${age}yr`, industry: "6–12 months", verdict: age < 1 ? "below" : "on-par" }, { metric: "Team Size", startup: `${team}`, industry: "5–10 at seed", verdict: team >= 5 ? "on-par" : "below" }, { metric: "Funding Stage", startup: form.fundingStage || "Bootstrapped", industry: "Pre-Seed at 1yr", verdict: "on-par" }, { metric: "Revenue (ARR)", startup: rev ? form.currentRevenue : "₹0", industry: "₹25L+ (Seed)", verdict: rev ? "on-par" : "below" }, { metric: "Product Live", startup: rev ? "Yes" : "Unknown", industry: "Yes at 6 months", verdict: rev ? "on-par" : "below" }],
    verdict: age < 1 ? `${form.startupName} is at the idea stage — the most precarious and exciting point of any startup journey. The path forward is deceptively simple: talk to 50 potential customers this month, find three who will pay before you build, and validate your riskiest assumption first. Get on the phone.` : `${form.startupName} has passed the hardest filter — surviving past year one. ${rev ? `With ${form.currentRevenue} in revenue, the foundation exists.` : "The absence of revenue is the next problem to solve."} India's seed market in 2025 favours startups with 3+ months of consistent growth data. Focus on retention before acquisition.`,
    disclaimer: "This report is AI-generated based on provided information and publicly available data. Valuations are estimates only and not financial advice. Consult a qualified CA or financial advisor before investment decisions.",
  };
}
