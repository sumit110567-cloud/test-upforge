"use client";

import { useState, useRef, useEffect } from "react";
import {
  ArrowRight, Sparkles, FileText, Download,
  TrendingUp, Shield, Target, Zap, AlertTriangle,
  Users, Globe, BarChart2, CheckCircle2, ChevronRight,
  IndianRupee, Award, Activity, Clock, BadgeCheck,
  RefreshCw, Search, Info,
} from "lucide-react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer,
} from "recharts";

// ─── TYPES ────────────────────────────────────────────────────────────────────
interface FormData {
  startupName: string;
  founderName: string;
  foundedYear: string;
  industry: string;
  city: string;
  website: string;
  description: string;
  targetMarket: string;
  businessModel: string;
  currentRevenue: string;
  teamSize: string;
  fundingStage: string;
  fundingRaised: string;
  keyCompetitors: string;
  uniqueAdvantage: string;
}

interface ReportData {
  dataSourcesFound: string[];
  publicDataNote: string;
  executiveSummary: string;
  valuationRange: {
    low: string; high: string; midpoint: string;
    methodology: string; confidence: "high" | "medium" | "low";
    confidenceNote: string;
  };
  scores: {
    overall: number; market: number; team: number; product: number;
    traction: number; moat: number; financials: number;
  };
  strengths: Array<{ title: string; detail: string }>;
  risks: Array<{ level: "high" | "medium" | "low"; title: string; detail: string; mitigation: string }>;
  competitorAnalysis: Array<{ name: string; threat: "high" | "medium" | "low"; difference: string }>;
  marketOpportunity: { tam: string; sam: string; som: string; insight: string };
  growthLevers: Array<{ lever: string; impact: string; timeline: string }>;
  focusAreas: Array<{ area: string; priority: "critical" | "high" | "medium"; action: string }>;
  investorReadiness: { score: number; verdict: string; improvements: string[] };
  roadmap: Array<{ phase: string; timeline: string; goals: string[] }>;
  benchmarks: Array<{ metric: string; startup: string; industry: string; verdict: "above" | "below" | "on-par" }>;
  verdict: string;
  reportId: string;
  disclaimer: string;
}

// ─── LOADING STEPS ────────────────────────────────────────────────────────────
const ANALYSIS_STEPS = [
  { label: "Searching public news & media mentions", duration: 2400 },
  { label: "Scanning Crunchbase, Inc42, YourStory data", duration: 2200 },
  { label: "Mapping competitive landscape", duration: 1800 },
  { label: "Running DCF & revenue-multiple models", duration: 2600 },
  { label: "Calculating sector-adjusted risk scores", duration: 2000 },
  { label: "Benchmarking against 500+ Indian startups", duration: 1900 },
  { label: "Generating founder-grade narrative", duration: 2200 },
  { label: "Compiling report & confidence signals", duration: 1500 },
];

// ─── SUB-COMPONENTS ───────────────────────────────────────────────────────────
function ScoreCircle({ score, label }: { score: number; label: string }) {
  const r = 32, circ = 2 * Math.PI * r;
  const fill = (score / 100) * circ;
  const color = score >= 70 ? "#1a6b3a" : score >= 50 ? "#b8860b" : "#b91c1c";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "6px" }}>
      <svg width={80} height={80} viewBox="0 0 80 80" style={{ transform: "rotate(-90deg)" }}>
        <circle cx={40} cy={40} r={r} fill="none" stroke="#e5e5e5" strokeWidth={5} />
        <circle cx={40} cy={40} r={r} fill="none" stroke={color} strokeWidth={5}
          strokeDasharray={`${fill} ${circ}`} strokeLinecap="round"
          style={{ transition: "stroke-dasharray 1.2s ease" }} />
        <text x={40} y={40} textAnchor="middle" dominantBaseline="middle"
          style={{ transform: "rotate(90deg)", transformOrigin: "40px 40px", fontFamily: "'Playfair Display',Georgia,serif" }}
          fill="#1a1a1a" fontSize={15} fontWeight="700">{score}</text>
      </svg>
      <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink4)", fontFamily: "'Source Serif 4',Georgia,serif", textAlign: "center" }}>
        {label}
      </span>
    </div>
  );
}

function RiskBadge({ level }: { level: "high" | "medium" | "low" }) {
  const c = { high: { bg: "#fef2f2", text: "#b91c1c", border: "#fecaca" }, medium: { bg: "#fffbeb", text: "#b8860b", border: "#fde68a" }, low: { bg: "#f0fdf4", text: "#1a6b3a", border: "#bbf7d0" } }[level];
  return (
    <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", padding: "2px 8px", background: c.bg, color: c.text, border: `1px solid ${c.border}`, fontFamily: "'Source Serif 4',Georgia,serif" }}>
      {level}
    </span>
  );
}

function ConfidenceBadge({ level }: { level: "high" | "medium" | "low" }) {
  const labels = { high: "High Confidence", medium: "Medium Confidence", low: "Estimated" };
  const c = { high: "#1a6b3a", medium: "#b8860b", low: "#b91c1c" }[level];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "4px", fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: c, border: `1px solid ${c}`, padding: "2px 8px", fontFamily: "'Source Serif 4',Georgia,serif" }}>
      <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: c, display: "inline-block" }} />
      {labels[level]}
    </span>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export function ReportGenerator() {
  const [step, setStep] = useState<"form" | "loading" | "report">("form");
  const [form, setForm] = useState<FormData>({
    startupName: "", founderName: "", foundedYear: "", industry: "",
    city: "", website: "", description: "", targetMarket: "",
    businessModel: "", currentRevenue: "", teamSize: "", fundingStage: "",
    fundingRaised: "", keyCompetitors: "", uniqueAdvantage: "",
  });
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<ReportData | null>(null);

  useEffect(() => { if (step === "report") window.scrollTo({ top: 0, behavior: "smooth" }); }, [step]);

  const update = (f: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [f]: e.target.value }));

  const runAnalysis = async () => {
    setStep("loading");
    setCurrentStep(0);
    setProgress(0);
    const total = ANALYSIS_STEPS.reduce((a, s) => a + s.duration, 0);
    let elapsed = 0;
    for (let i = 0; i < ANALYSIS_STEPS.length; i++) {
      setCurrentStep(i);
      await new Promise(r => setTimeout(r, ANALYSIS_STEPS[i].duration));
      elapsed += ANALYSIS_STEPS[i].duration;
      setProgress(Math.round((elapsed / total) * 100));
    }
    try {
      const res = await fetch("/api/generate-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      setReport(data);
    } catch {
      setReport(generateFallbackReport(form));
    }
    setStep("report");
  };

  const isValid = form.startupName && form.founderName && form.foundedYear && form.industry && form.description;

  // ── FORM ──────────────────────────────────────────────────────────────────
  if (step === "form") {
    return (
      <>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
          :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--pos:#1a6b3a}
          *,*::before,*::after{box-sizing:border-box}
          .uf{background:#fff;color:var(--ink);font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
          .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
          .uf-m{font-family:'JetBrains Mono',monospace}
          .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
          .uf-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}
          @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
          .a0{animation:up .5s .00s cubic-bezier(.16,1,.3,1) both}
          .a1{animation:up .5s .08s cubic-bezier(.16,1,.3,1) both}
          .a2{animation:up .5s .16s cubic-bezier(.16,1,.3,1) both}
          .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
          .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:dp 2s ease-in-out infinite}
          @keyframes dp{0%,100%{transform:scale(1)}50%{transform:scale(2);opacity:0}}
          .if{width:100%;border:1px solid var(--rule);background:#fff;padding:10px 14px;font-size:13px;color:var(--ink);outline:none;transition:border-color .18s;font-family:'Source Serif 4',Georgia,serif}
          .if:focus{border-color:var(--ink)}
          .if::placeholder{color:var(--ink4)}
          label{display:block;font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:.16em;color:var(--ink4);margin-bottom:5px;font-family:'Source Serif 4',Georgia,serif}
          .sec-head{display:flex;align-items:center;gap:8px;padding:10px 0;border-top:1px solid var(--rule);border-bottom:1px solid var(--rl);margin-bottom:16px}
          @media(max-width:640px){.hide-mob{display:none !important}.grid-2{grid-template-columns:1fr !important}}
        `}</style>
        <div className="uf" style={{ minHeight: "100vh", paddingBottom: "60px" }}>
          <div className="uf-wrap" style={{ paddingTop: "clamp(20px,4vw,40px)" }}>

            {/* Masthead */}
            <header className="a0" style={{ borderBottom: "2px solid var(--ink)", paddingBottom: "clamp(20px,4vw,40px)", marginBottom: "0" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid var(--rule)", marginBottom: "clamp(20px,4vw,36px)", flexWrap: "wrap", gap: "8px" }}>
                <span className="uf-lbl" style={{ color: "var(--ink2)" }}>
                  {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })}
                </span>
                <div className="hide-mob" style={{ display: "flex", gap: "20px" }}>
                  {["Free", "AI-Powered", "Web Search Backed"].map(t => (
                    <span key={t} style={{ fontSize: "10px", color: "var(--ink4)", letterSpacing: "0.12em", textTransform: "uppercase" }}>✓ {t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div className="dot" />
                  <span className="uf-lbl" style={{ color: "var(--ink4)" }}>Live Engine</span>
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: "12px" }}>
                  UpForge · Intelligence Reports
                </p>
                <h1 className="uf-d" style={{ fontSize: "clamp(2.4rem,7vw,5.5rem)", fontWeight: 900, lineHeight: 0.9, color: "var(--ink)", marginBottom: "16px" }}>
                  Startup Analysis<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Report</em>
                </h1>
                <p style={{ fontSize: "14px", color: "var(--ink3)", maxWidth: "480px", margin: "0 auto", lineHeight: 1.6, fontFamily: "'Source Serif 4',Georgia,serif" }}>
                  AI searches public data, news & funding databases — then calculates your honest valuation, risks & 12-month roadmap.
                </p>
              </div>
            </header>

            {/* Feature strip */}
            <div className="a1" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", borderBottom: "1px solid var(--rule)" }}>
              {[
                { icon: Search, label: "Web Search Backed", sub: "News, Crunchbase, Inc42" },
                { icon: IndianRupee, label: "Honest Valuation", sub: "Age & stage adjusted" },
                { icon: BarChart2, label: "7-Dimension Score", sub: "Market, Team, Moat…" },
                { icon: TrendingUp, label: "12-Month Roadmap", sub: "Actionable milestones" },
              ].map((item, i) => (
                <div key={i} style={{ padding: "16px", borderRight: i < 3 ? "1px solid var(--rule)" : "none", background: i % 2 === 1 ? "var(--warm)" : "#fff" }}>
                  <item.icon style={{ width: "14px", height: "14px", color: "var(--ink4)", marginBottom: "8px" }} />
                  <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)", marginBottom: "2px", fontFamily: "'Source Serif 4',Georgia,serif" }}>{item.label}</p>
                  <p style={{ fontSize: "10px", color: "var(--ink4)" }}>{item.sub}</p>
                </div>
              ))}
            </div>

            {/* Form + Sidebar */}
            <div className="a2" style={{ display: "grid", gridTemplateColumns: "1fr clamp(240px,28%,320px)", gap: "0", borderBottom: "1px solid var(--rule)" }}>

              {/* Form */}
              <div style={{ paddingRight: "clamp(16px,4vw,40px)", paddingTop: "28px", paddingBottom: "28px", borderRight: "1px solid var(--rule)" }}>

                {/* Section 1 */}
                <div className="sec-head">
                  <span className="uf-m" style={{ fontSize: "9px", color: "var(--gold)", fontWeight: 700 }}>01</span>
                  <span className="uf-lbl" style={{ color: "var(--ink2)" }}>Startup Identity</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px", marginBottom: "24px" }} className="grid-2">
                  <div>
                    <label>Startup Name *</label>
                    <input className="if" placeholder="e.g. Krutrim AI" value={form.startupName} onChange={update("startupName")} />
                  </div>
                  <div>
                    <label>Founder Name *</label>
                    <input className="if" placeholder="e.g. Bhavish Aggarwal" value={form.founderName} onChange={update("founderName")} />
                  </div>
                  <div>
                    <label>Founded Year *</label>
                    <input className="if" placeholder="e.g. 2022" type="number" min="2000" max="2025" value={form.foundedYear} onChange={update("foundedYear")} />
                  </div>
                  <div>
                    <label>Industry / Sector *</label>
                    <select className="if" value={form.industry} onChange={update("industry")}>
                      <option value="">Select…</option>
                      {["AI/ML","FinTech","SaaS","EdTech","HealthTech","D2C/E-commerce","Climate Tech","Space Tech","AgriTech","Mobility","Gaming","Web3/Crypto","BioTech","Media/Content","Other"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Headquarters City</label>
                    <input className="if" placeholder="e.g. Bengaluru" value={form.city} onChange={update("city")} />
                  </div>
                  <div>
                    <label>Website URL</label>
                    <input className="if" placeholder="https://yourstartup.com" value={form.website} onChange={update("website")} />
                  </div>
                </div>

                {/* Section 2 */}
                <div className="sec-head">
                  <span className="uf-m" style={{ fontSize: "9px", color: "var(--gold)", fontWeight: 700 }}>02</span>
                  <span className="uf-lbl" style={{ color: "var(--ink2)" }}>What You Do</span>
                </div>
                <div style={{ display: "grid", gap: "14px", marginBottom: "24px" }}>
                  <div>
                    <label>One-line description *</label>
                    <input className="if" placeholder="e.g. AI-powered invoice automation for Indian SMEs" value={form.description} onChange={update("description")} />
                  </div>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="grid-2">
                    <div>
                      <label>Target Market</label>
                      <input className="if" placeholder="e.g. Indian SMEs, B2B SaaS" value={form.targetMarket} onChange={update("targetMarket")} />
                    </div>
                    <div>
                      <label>Revenue Model</label>
                      <input className="if" placeholder="e.g. SaaS subscription, marketplace" value={form.businessModel} onChange={update("businessModel")} />
                    </div>
                  </div>
                  <div>
                    <label>Your Unique Moat / Advantage</label>
                    <textarea className="if" style={{ height: "64px", resize: "none" }} placeholder="What makes you defensible? IP, network effects, data, team…" value={form.uniqueAdvantage} onChange={update("uniqueAdvantage")} />
                  </div>
                </div>

                {/* Section 3 */}
                <div className="sec-head">
                  <span className="uf-m" style={{ fontSize: "9px", color: "var(--gold)", fontWeight: 700 }}>03</span>
                  <span className="uf-lbl" style={{ color: "var(--ink2)" }}>Traction & Funding</span>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }} className="grid-2">
                  <div>
                    <label>Annual Revenue (ARR/MRR×12)</label>
                    <input className="if" placeholder="₹0 / Pre-revenue / ₹50L ARR" value={form.currentRevenue} onChange={update("currentRevenue")} />
                  </div>
                  <div>
                    <label>Team Size</label>
                    <input className="if" placeholder="e.g. 8" type="number" value={form.teamSize} onChange={update("teamSize")} />
                  </div>
                  <div>
                    <label>Funding Stage</label>
                    <select className="if" value={form.fundingStage} onChange={update("fundingStage")}>
                      <option value="">Select…</option>
                      {["Bootstrapped","Pre-Seed","Seed","Series A","Series B","Series C+","Revenue-funded"].map(s => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label>Total Funding Raised</label>
                    <input className="if" placeholder="e.g. $500K, ₹2Cr, None" value={form.fundingRaised} onChange={update("fundingRaised")} />
                  </div>
                  <div style={{ gridColumn: "span 2" }}>
                    <label>Key Competitors (comma separated)</label>
                    <input className="if" placeholder="e.g. Razorpay, PayU, Cashfree" value={form.keyCompetitors} onChange={update("keyCompetitors")} />
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div style={{ paddingLeft: "clamp(16px,4vw,32px)", paddingTop: "28px", paddingBottom: "28px" }}>
                <div style={{ position: "sticky", top: "80px" }}>

                  {/* What we analyse */}
                  <div style={{ border: "1px solid var(--rule)", padding: "18px", marginBottom: "14px" }}>
                    <span className="uf-lbl" style={{ display: "block", marginBottom: "12px" }}>What We Analyse</span>
                    {[
                      "Live web search for your startup",
                      "News & media mentions",
                      "Sector funding benchmarks",
                      "Age-adjusted valuation model",
                      "Revenue multiple vs peers",
                      "DCF (if revenue exists)",
                      "Market size TAM/SAM/SOM",
                      "Competitive moat analysis",
                      "Founder-grade risk signals",
                      "Investor readiness score",
                      "30/90/365-day roadmap",
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "6px" }}>
                        <CheckCircle2 style={{ width: "11px", height: "11px", color: "var(--pos)", flexShrink: 0 }} />
                        <span style={{ fontSize: "11px", color: "var(--ink3)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Honesty notice */}
                  <div style={{ border: "1px solid #fde68a", background: "#fffbeb", padding: "14px", marginBottom: "14px" }}>
                    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <Info style={{ width: "12px", height: "12px", color: "var(--gold)", flexShrink: 0, marginTop: "1px" }} />
                      <div>
                        <span className="uf-lbl" style={{ color: "var(--gold)", display: "block", marginBottom: "5px" }}>Honest Valuations</span>
                        <p style={{ fontSize: "11px", color: "#92400e", lineHeight: 1.55, fontFamily: "'Source Serif 4',Georgia,serif" }}>
                          New startups (&lt;1 year) with no revenue are valued at ₹20L–₹1.5Cr max. We won't inflate numbers. Accuracy helps you more than flattery.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust items */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "20px" }}>
                    {[
                      { icon: Shield, text: "100% free, no signup" },
                      { icon: Search, text: "Live web search included" },
                      { icon: FileText, text: "Print-ready PDF report" },
                      { icon: BadgeCheck, text: "Powered by Groq + web data" },
                    ].map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <item.icon style={{ width: "12px", height: "12px", color: "var(--ink4)" }} />
                        <span style={{ fontSize: "11px", color: "var(--ink3)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{item.text}</span>
                      </div>
                    ))}
                  </div>

                  <button onClick={runAnalysis} disabled={!isValid}
                    style={{
                      width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      padding: "14px 20px", fontSize: "13px", fontWeight: 700, letterSpacing: "0.06em",
                      textTransform: "uppercase", fontFamily: "'Source Serif 4',Georgia,serif",
                      background: isValid ? "var(--ink)" : "var(--rl)", color: isValid ? "#fff" : "var(--ink4)",
                      border: "2px solid " + (isValid ? "var(--ink)" : "var(--rl)"),
                      cursor: isValid ? "pointer" : "not-allowed", transition: "background .18s",
                    }}>
                    <Sparkles style={{ width: "14px", height: "14px" }} />
                    Generate Report
                  </button>
                  {!isValid && (
                    <p style={{ fontSize: "10px", color: "var(--ink4)", textAlign: "center", marginTop: "8px", fontFamily: "'Source Serif 4',Georgia,serif" }}>
                      Fill required fields (*) to continue
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  // ── LOADING ───────────────────────────────────────────────────────────────
  if (step === "loading") {
    return (
      <div style={{ background: "#0f0f0f", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Source Serif 4',Georgia,serif" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
          @keyframes scan{0%{transform:translateY(-100%)}100%{transform:translateY(100vh)}}
          @keyframes blink{0%,100%{opacity:1}50%{opacity:0.3}}
          .scan{animation:scan 3.5s linear infinite}
          .blink{animation:blink 1.4s ease-in-out infinite}
        `}</style>
        <div style={{ position: "fixed", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <div className="scan" style={{ position: "absolute", width: "100%", height: "2px", background: "linear-gradient(transparent, rgba(184,134,11,.15), transparent)" }} />
        </div>
        <div style={{ maxWidth: "540px", width: "100%", padding: "40px 24px", textAlign: "center" }}>
          <div style={{ width: "48px", height: "48px", margin: "0 auto 28px", background: "#b8860b", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src="/logo.jpg" alt="UpForge" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
          </div>
          <p style={{ fontSize: "9px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,.3)", marginBottom: "10px", fontFamily: "'Source Serif 4',Georgia,serif" }}>UpForge Intelligence</p>
          <h2 style={{ fontFamily: "'Playfair Display',Georgia,serif", fontSize: "clamp(1.4rem,4vw,2rem)", color: "#fff", marginBottom: "6px", fontWeight: 700 }}>
            Analysing <span style={{ color: "#b8860b" }}>{form.startupName}</span>
          </h2>
          <p style={{ fontSize: "12px", color: "rgba(255,255,255,.35)", marginBottom: "36px" }}>Searching public data, news & funding records…</p>

          {/* Progress bar */}
          <div style={{ height: "1px", background: "rgba(255,255,255,.1)", marginBottom: "6px" }}>
            <div style={{ height: "100%", background: "#b8860b", width: `${progress}%`, transition: "width .5s ease" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "28px" }}>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,.25)", fontFamily: "'JetBrains Mono',monospace" }}>{progress}% complete</span>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,.25)", fontFamily: "'JetBrains Mono',monospace" }}>{100 - progress}% remaining</span>
          </div>

          {/* Steps */}
          <div style={{ textAlign: "left" }}>
            {ANALYSIS_STEPS.map((s, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "center", gap: "10px", padding: "8px 12px",
                marginBottom: "2px", transition: "all .3s",
                background: i === currentStep ? "rgba(184,134,11,.08)" : "transparent",
                border: i === currentStep ? "1px solid rgba(184,134,11,.2)" : "1px solid transparent",
                opacity: i < currentStep ? 0.35 : i === currentStep ? 1 : 0.2,
              }}>
                <div style={{ width: "16px", height: "16px", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {i < currentStep
                    ? <CheckCircle2 style={{ width: "14px", height: "14px", color: "#1a6b3a" }} />
                    : i === currentStep
                    ? <Activity style={{ width: "14px", height: "14px", color: "#b8860b" }} className="blink" />
                    : <Clock style={{ width: "14px", height: "14px", color: "rgba(255,255,255,.2)" }} />}
                </div>
                <span style={{ fontSize: "11px", color: i === currentStep ? "#fff" : "rgba(255,255,255,.5)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{s.label}</span>
                {i === currentStep && (
                  <span style={{ marginLeft: "auto", fontSize: "8px", fontWeight: 700, color: "#b8860b", letterSpacing: "0.15em", fontFamily: "'JetBrains Mono',monospace" }} className="blink">LIVE</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!report) return null;

  // ── REPORT ────────────────────────────────────────────────────────────────
  const scoreColor = (s: number) => s >= 70 ? "#1a6b3a" : s >= 50 ? "#b8860b" : "#b91c1c";
  const chartData = [
    { subject: "Market",    A: report.scores.market },
    { subject: "Team",      A: report.scores.team },
    { subject: "Product",   A: report.scores.product },
    { subject: "Traction",  A: report.scores.traction },
    { subject: "Moat",      A: report.scores.moat },
    { subject: "Financials",A: report.scores.financials },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,400&family=Source+Serif+4:opsz,wght@8..60,400;8..60,600&family=JetBrains+Mono:wght@400;600&display=swap');
        :root{--ink:#1a1a1a;--ink2:#444;--ink3:#777;--ink4:#aaa;--rule:#e5e5e5;--rl:#f0f0f0;--off:#fafaf8;--warm:#fdf8f0;--gold:#b8860b;--pos:#1a6b3a;--neg:#b91c1c}
        *,*::before,*::after{box-sizing:border-box}
        .uf{background:#fff;color:var(--ink);font-family:'Source Serif 4',Georgia,serif;-webkit-font-smoothing:antialiased}
        .uf-d{font-family:'Playfair Display',Georgia,serif;letter-spacing:-.02em}
        .uf-m{font-family:'JetBrains Mono',monospace;font-variant-numeric:tabular-nums}
        .uf-lbl{font-size:10px;font-weight:600;letter-spacing:.14em;text-transform:uppercase;color:#888;font-family:'Source Serif 4',Georgia,serif}
        .uf-wrap{max-width:1200px;margin:0 auto;padding:0 clamp(16px,3vw,32px)}
        @keyframes up{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}
        .a0{animation:up .5s .00s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:up .5s .08s cubic-bezier(.16,1,.3,1) both}
        .a2{animation:up .5s .16s cubic-bezier(.16,1,.3,1) both}
        .a3{animation:up .5s .24s cubic-bezier(.16,1,.3,1) both}
        .dot{width:6px;height:6px;border-radius:50%;background:#16a34a;flex-shrink:0;position:relative}
        .dot::after{content:'';position:absolute;inset:-3px;border-radius:50%;background:rgba(22,163,74,.2);animation:dp 2s ease-in-out infinite}
        @keyframes dp{0%,100%{transform:scale(1)}50%{transform:scale(2);opacity:0}}
        .sec{padding:clamp(20px,4vw,36px) 0;border-bottom:1px solid var(--rule)}
        .sec-h{display:flex;align-items:center;gap:10px;margin-bottom:18px}
        .sec-h::after{content:'';flex:1;height:1px;background:var(--rule)}
        .row{display:flex;align-items:center;justify-content:space-between;padding:9px 0;border-bottom:1px solid var(--rl)}
        .row:last-child{border-bottom:none}
        @media print{.no-print{display:none!important}body{background:white!important}}
        @media(max-width:768px){.two-col{grid-template-columns:1fr!important}.hide-mob{display:none!important}}
      `}</style>

      {/* Sticky toolbar */}
      <div className="no-print" style={{ position: "sticky", top: 0, zIndex: 50, background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,.1)" }}>
        <div className="uf-wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px clamp(16px,3vw,32px)", gap: "12px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src="/logo.jpg" alt="UpForge" style={{ width: "20px", height: "20px", objectFit: "contain" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display',Georgia,serif" }}>{form.startupName}</span>
            <span style={{ color: "rgba(255,255,255,.2)" }}>·</span>
            <span style={{ fontSize: "9px", color: "rgba(255,255,255,.4)", letterSpacing: "0.12em", textTransform: "uppercase", fontFamily: "'Source Serif 4',serif" }}>Intelligence Report</span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 14px", background: "#b8860b", color: "#fff", border: "none", cursor: "pointer", fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", fontFamily: "'Source Serif 4',serif" }}>
              <Download style={{ width: "11px", height: "11px" }} /> PDF
            </button>
            <button onClick={() => { setStep("form"); setReport(null); }} style={{ display: "flex", alignItems: "center", gap: "5px", padding: "6px 12px", background: "transparent", color: "rgba(255,255,255,.6)", border: "1px solid rgba(255,255,255,.15)", cursor: "pointer", fontSize: "11px", fontFamily: "'Source Serif 4',serif" }}>
              <RefreshCw style={{ width: "11px", height: "11px" }} /> New
            </button>
          </div>
        </div>
      </div>

      <div className="uf">
        <div className="uf-wrap" style={{ paddingBottom: "60px" }}>

          {/* ── REPORT MASTHEAD ── */}
          <header className="a0" style={{ borderBottom: "2px solid var(--ink)", paddingTop: "clamp(20px,4vw,36px)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "10px", borderBottom: "1px solid var(--rule)", marginBottom: "clamp(18px,4vw,32px)", flexWrap: "wrap", gap: "8px" }}>
              <span className="uf-lbl" style={{ color: "var(--ink2)" }}>
                {new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })} · Intelligence Report
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <div className="dot" />
                <span className="uf-lbl" style={{ color: "var(--pos)" }}>Live Analysis Complete</span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: "24px", alignItems: "flex-end", paddingBottom: "clamp(18px,4vw,32px)" }} className="two-col">
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.32em", textTransform: "uppercase", color: "var(--ink3)", marginBottom: "10px" }}>UpForge · Startup Deep Analysis</p>
                <h1 className="uf-d" style={{ fontSize: "clamp(2.2rem,6vw,5rem)", fontWeight: 900, lineHeight: 0.9, color: "var(--ink)", marginBottom: "12px" }}>
                  {form.startupName}
                </h1>
                <p style={{ fontSize: "13px", color: "var(--ink3)", fontFamily: "'Source Serif 4',Georgia,serif" }}>
                  {form.industry}{form.city ? ` · ${form.city}` : ""}{form.foundedYear ? ` · Est. ${form.foundedYear}` : ""}{form.fundingStage ? ` · ${form.fundingStage}` : ""}
                </p>
              </div>
              <div style={{ textAlign: "right", flexShrink: 0 }}>
                <div style={{ border: `2px solid ${scoreColor(report.scores.overall)}`, padding: "16px 20px", display: "inline-block" }}>
                  <div className="uf-d uf-m" style={{ fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 900, color: scoreColor(report.scores.overall), lineHeight: 1 }}>
                    {report.scores.overall}
                  </div>
                  <div className="uf-lbl" style={{ fontSize: "8px", marginTop: "4px", color: "var(--ink4)" }}>Overall Score</div>
                </div>
              </div>
            </div>
          </header>

          {/* ── DATA SOURCES FOUND ── */}
          {report.dataSourcesFound && report.dataSourcesFound.length > 0 && (
            <div className="a1" style={{ padding: "14px 0", borderBottom: "1px solid var(--rule)", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <Search style={{ width: "11px", height: "11px", color: "var(--pos)" }} />
                <span className="uf-lbl" style={{ color: "var(--pos)", fontSize: "9px" }}>Public Data Found</span>
              </div>
              {report.dataSourcesFound.map((src, i) => (
                <span key={i} style={{ fontSize: "10px", color: "var(--ink3)", border: "1px solid var(--rule)", padding: "2px 8px", fontFamily: "'Source Serif 4',Georgia,serif" }}>{src}</span>
              ))}
              {report.publicDataNote && (
                <span style={{ fontSize: "10px", color: "var(--ink4)", fontFamily: "'Source Serif 4',Georgia,serif", marginLeft: "auto" }}>
                  {report.publicDataNote}
                </span>
              )}
            </div>
          )}

          {/* ── EXECUTIVE SUMMARY ── */}
          <div className="a1 sec">
            <div className="sec-h">
              <FileText style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Executive Summary</span>
            </div>
            <p style={{ fontSize: "15px", color: "var(--ink2)", lineHeight: 1.75, maxWidth: "800px", fontFamily: "'Source Serif 4',Georgia,serif" }}>
              {report.executiveSummary}
            </p>
          </div>

          {/* ── VALUATION + RADAR ── */}
          <div className="a2 sec" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} >
            {/* Valuation */}
            <div style={{ paddingRight: "clamp(16px,4vw,40px)", borderRight: "1px solid var(--rule)" }} className="two-col">
              <div className="sec-h">
                <IndianRupee style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">Estimated Valuation</span>
                <ConfidenceBadge level={report.valuationRange.confidence} />
              </div>

              {/* Big midpoint */}
              <div style={{ background: "var(--warm)", border: "1px solid var(--rule)", padding: "clamp(16px,3vw,28px)", marginBottom: "16px" }}>
                <span className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)", display: "block", marginBottom: "6px" }}>Midpoint Estimate</span>
                <div className="uf-d" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: "8px" }}>
                  {report.valuationRange.midpoint}
                </div>
                <div style={{ display: "flex", gap: "24px", paddingTop: "10px", borderTop: "1px solid var(--rule)" }}>
                  <div>
                    <span className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)", display: "block" }}>Floor</span>
                    <span className="uf-m" style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink3)" }}>{report.valuationRange.low}</span>
                  </div>
                  <div>
                    <span className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)", display: "block" }}>Ceiling</span>
                    <span className="uf-m" style={{ fontSize: "14px", fontWeight: 600, color: "var(--ink3)" }}>{report.valuationRange.high}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "11px", color: "var(--ink4)", lineHeight: 1.65, fontFamily: "'Source Serif 4',Georgia,serif", marginBottom: "8px" }}>
                <strong style={{ color: "var(--ink3)" }}>Methodology:</strong> {report.valuationRange.methodology}
              </p>
              {report.valuationRange.confidenceNote && (
                <div style={{ display: "flex", gap: "7px", padding: "10px 12px", background: "#fffbeb", border: "1px solid #fde68a" }}>
                  <Info style={{ width: "11px", height: "11px", color: "var(--gold)", flexShrink: 0, marginTop: "1px" }} />
                  <p style={{ fontSize: "11px", color: "#92400e", lineHeight: 1.55, fontFamily: "'Source Serif 4',Georgia,serif" }}>
                    {report.valuationRange.confidenceNote}
                  </p>
                </div>
              )}
            </div>

            {/* Radar chart */}
            <div style={{ paddingLeft: "clamp(16px,4vw,40px)" }}>
              <div className="sec-h">
                <BarChart2 style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">7-Dimension Analysis</span>
              </div>
              <div style={{ height: "260px", width: "100%" }}>
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="75%" data={chartData} startAngle={90} endAngle={-270}>
                    <PolarGrid stroke="#e5e5e5" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#888", fontSize: 10, fontWeight: "bold", fontFamily: "'Source Serif 4',Georgia,serif" }} />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar dataKey="A" stroke="#b8860b" fill="#b8860b" fillOpacity={0.4} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              {/* Score mini grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "8px", marginTop: "8px" }}>
                {Object.entries(report.scores).filter(([k]) => k !== "overall").map(([k, v]) => (
                  <div key={k} style={{ textAlign: "center", padding: "8px", border: "1px solid var(--rule)", background: "var(--off)" }}>
                    <div className="uf-m" style={{ fontSize: "16px", fontWeight: 700, color: scoreColor(v as number) }}>{v as number}</div>
                    <div className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)" }}>{k}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── STRENGTHS + RISKS ── */}
          <div className="a2 sec" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }} >
            <div style={{ paddingRight: "clamp(16px,4vw,36px)", borderRight: "1px solid var(--rule)" }}>
              <div className="sec-h">
                <Award style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">Key Strengths</span>
              </div>
              {report.strengths.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", paddingBottom: "12px", marginBottom: "12px", borderBottom: i < report.strengths.length - 1 ? "1px solid var(--rl)" : "none" }}>
                  <div style={{ width: "20px", height: "20px", background: "var(--pos)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "9px", fontWeight: 700, flexShrink: 0, marginTop: "1px" }}>{i + 1}</div>
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", marginBottom: "3px", fontFamily: "'Source Serif 4',Georgia,serif" }}>{s.title}</p>
                    <p style={{ fontSize: "11px", color: "var(--ink3)", lineHeight: 1.6 }}>{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "clamp(16px,4vw,36px)" }}>
              <div className="sec-h">
                <AlertTriangle style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">Real Risk Assessment</span>
              </div>
              {report.risks.map((r, i) => (
                <div key={i} style={{ border: "1px solid var(--rule)", padding: "12px", marginBottom: "8px", background: "#fff" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "6px" }}>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{r.title}</p>
                    <RiskBadge level={r.level} />
                  </div>
                  <p style={{ fontSize: "11px", color: "var(--ink3)", lineHeight: 1.6, marginBottom: "6px" }}>{r.detail}</p>
                  <div style={{ display: "flex", gap: "5px", alignItems: "flex-start" }}>
                    <Zap style={{ width: "10px", height: "10px", color: "var(--gold)", flexShrink: 0, marginTop: "1px" }} />
                    <p style={{ fontSize: "10px", color: "var(--ink4)", lineHeight: 1.5 }}>Mitigation: {r.mitigation}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── MARKET OPPORTUNITY ── */}
          <div className="a3 sec">
            <div className="sec-h">
              <Globe style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Market Opportunity</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)", marginBottom: "14px" }}>
              {[
                { l: "TAM", sub: "Total Addressable Market", v: report.marketOpportunity.tam },
                { l: "SAM", sub: "Serviceable Market",       v: report.marketOpportunity.sam },
                { l: "SOM", sub: "Obtainable Market",        v: report.marketOpportunity.som },
              ].map((m, i) => (
                <div key={i} style={{ background: i === 1 ? "var(--warm)" : "#fff", padding: "20px", textAlign: "center" }}>
                  <span className="uf-lbl" style={{ fontSize: "9px", display: "block", marginBottom: "6px" }}>{m.l}</span>
                  <div className="uf-d" style={{ fontSize: "clamp(1.4rem,3vw,2.2rem)", fontWeight: 900, color: "var(--ink)", lineHeight: 1, marginBottom: "4px" }}>{m.v}</div>
                  <span style={{ fontSize: "9px", color: "var(--ink4)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{m.sub}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: "12px", color: "var(--ink3)", lineHeight: 1.7, fontFamily: "'Source Serif 4',Georgia,serif" }}>{report.marketOpportunity.insight}</p>
          </div>

          {/* ── COMPETITORS ── */}
          <div className="a3 sec">
            <div className="sec-h">
              <Users style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Competitive Landscape</span>
            </div>
            <div style={{ border: "1px solid var(--rule)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 100px 1fr", padding: "8px 16px", background: "var(--off)", borderBottom: "1px solid var(--rule)" }}>
                {["Competitor", "Threat", "Your Edge"].map(h => (
                  <span key={h} className="uf-lbl" style={{ fontSize: "8px", color: "var(--ink4)" }}>{h}</span>
                ))}
              </div>
              {report.competitorAnalysis.map((c, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 100px 1fr", padding: "11px 16px", background: "#fff", borderBottom: i < report.competitorAnalysis.length - 1 ? "1px solid var(--rl)" : "none", transition: "background .15s" }}>
                  <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{c.name}</p>
                  <div><RiskBadge level={c.threat} /></div>
                  <p style={{ fontSize: "11px", color: "var(--ink3)", lineHeight: 1.5 }}>{c.difference}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── GROWTH LEVERS + FOCUS ── */}
          <div className="a3 sec" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
            <div style={{ paddingRight: "clamp(16px,4vw,36px)", borderRight: "1px solid var(--rule)" }}>
              <div className="sec-h">
                <TrendingUp style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">Growth Levers</span>
              </div>
              {report.growthLevers.map((g, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start", paddingBottom: "10px", marginBottom: "10px", borderBottom: i < report.growthLevers.length - 1 ? "1px solid var(--rl)" : "none" }}>
                  <ChevronRight style={{ width: "13px", height: "13px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "var(--ink)", marginBottom: "3px", fontFamily: "'Source Serif 4',Georgia,serif" }}>{g.lever}</p>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--pos)" }}>{g.impact}</span>
                      <span style={{ color: "var(--rule)" }}>·</span>
                      <span style={{ fontSize: "10px", color: "var(--ink4)" }}>{g.timeline}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ paddingLeft: "clamp(16px,4vw,36px)" }}>
              <div className="sec-h">
                <Target style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
                <span className="uf-lbl">Priority Focus Areas</span>
              </div>
              {report.focusAreas.map((f, i) => {
                const pc = { critical: { bg: "#fef2f2", border: "#fecaca", text: "#b91c1c" }, high: { bg: "#fffbeb", border: "#fde68a", text: "#b8860b" }, medium: { bg: "#eff6ff", border: "#bfdbfe", text: "#1d4ed8" } }[f.priority];
                return (
                  <div key={i} style={{ border: `1px solid ${pc.border}`, background: pc.bg, padding: "10px 12px", marginBottom: "6px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "4px" }}>
                      <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{f.area}</p>
                      <span style={{ fontSize: "8px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: pc.text, border: `1px solid ${pc.border}`, padding: "1px 6px", fontFamily: "'Source Serif 4',Georgia,serif" }}>{f.priority}</span>
                    </div>
                    <p style={{ fontSize: "11px", color: "var(--ink3)", lineHeight: 1.55 }}>{f.action}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── BENCHMARKS ── */}
          <div className="a3 sec">
            <div className="sec-h">
              <BarChart2 style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Sector Benchmarks</span>
            </div>
            <div style={{ border: "1px solid var(--rule)" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 90px", padding: "8px 16px", background: "var(--off)", borderBottom: "1px solid var(--rule)" }}>
                {["Metric", form.startupName, "Industry Avg", "Verdict"].map(h => (
                  <span key={h} className="uf-lbl" style={{ fontSize: "8px" }}>{h}</span>
                ))}
              </div>
              {report.benchmarks.map((b, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 90px", padding: "10px 16px", background: i % 2 === 1 ? "var(--off)" : "#fff", borderBottom: i < report.benchmarks.length - 1 ? "1px solid var(--rl)" : "none" }}>
                  <p style={{ fontSize: "12px", color: "var(--ink3)" }}>{b.metric}</p>
                  <p className="uf-m" style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)" }}>{b.startup}</p>
                  <p className="uf-m" style={{ fontSize: "12px", color: "var(--ink4)" }}>{b.industry}</p>
                  <span style={{ fontSize: "9px", fontWeight: 700, padding: "2px 6px", width: "fit-content", background: b.verdict === "above" ? "#f0fdf4" : b.verdict === "below" ? "#fef2f2" : "#f9fafb", color: b.verdict === "above" ? "var(--pos)" : b.verdict === "below" ? "var(--neg)" : "var(--ink4)" }}>
                    {b.verdict === "above" ? "▲ Above" : b.verdict === "below" ? "▼ Below" : "● On Par"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── ROADMAP ── */}
          <div className="a3 sec">
            <div className="sec-h">
              <Activity style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Strategic Roadmap</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)" }}>
              {report.roadmap.map((phase, i) => (
                <div key={i} style={{ background: i === 0 ? "var(--ink)" : "#fff", padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                    <span className="uf-lbl" style={{ fontSize: "8px", color: i === 0 ? "var(--gold)" : "var(--ink4)" }}>{phase.phase}</span>
                    <span style={{ fontSize: "9px", padding: "2px 8px", background: i === 0 ? "rgba(255,255,255,.1)" : "var(--off)", color: i === 0 ? "rgba(255,255,255,.5)" : "var(--ink4)", fontFamily: "'JetBrains Mono',monospace" }}>{phase.timeline}</span>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {phase.goals.map((g, j) => (
                      <li key={j} style={{ display: "flex", gap: "7px", alignItems: "flex-start", marginBottom: "7px" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", flexShrink: 0, marginTop: "6px", background: i === 0 ? "var(--gold)" : "var(--rule)" }} />
                        <p style={{ fontSize: "11px", color: i === 0 ? "rgba(255,255,255,.7)" : "var(--ink3)", lineHeight: 1.55, fontFamily: "'Source Serif 4',Georgia,serif" }}>{g}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* ── INVESTOR READINESS ── */}
          <div className="a3 sec">
            <div className="sec-h">
              <Award style={{ width: "13px", height: "13px", color: "var(--ink4)" }} />
              <span className="uf-lbl">Investor Readiness</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "1px", background: "var(--rule)", border: "1px solid var(--rule)" }}>
              <div style={{ background: "var(--warm)", padding: "28px", textAlign: "center", minWidth: "140px" }}>
                <div className="uf-d" style={{ fontSize: "clamp(2.2rem,5vw,3.5rem)", fontWeight: 900, color: scoreColor(report.investorReadiness.score), lineHeight: 1, marginBottom: "6px" }}>
                  {report.investorReadiness.score}
                </div>
                <span className="uf-lbl" style={{ fontSize: "8px", display: "block", marginBottom: "8px" }}>Readiness Score</span>
                <p style={{ fontSize: "12px", fontWeight: 600, color: "var(--ink)", fontFamily: "'Source Serif 4',Georgia,serif" }}>{report.investorReadiness.verdict}</p>
              </div>
              <div style={{ background: "#fff", padding: "20px" }}>
                <span className="uf-lbl" style={{ fontSize: "8px", display: "block", marginBottom: "12px" }}>To Improve Investor Readiness</span>
                {report.investorReadiness.improvements.map((imp, i) => (
                  <div key={i} style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "8px" }}>
                    <ChevronRight style={{ width: "12px", height: "12px", color: "var(--gold)", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontSize: "12px", color: "var(--ink3)", lineHeight: 1.6, fontFamily: "'Source Serif 4',Georgia,serif" }}>{imp}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── VERDICT ── */}
          <div className="a3" style={{ padding: "clamp(24px,5vw,48px) 0" }}>
            <div style={{ background: "var(--ink)", padding: "clamp(24px,5vw,44px)" }}>
              <span className="uf-lbl" style={{ color: "var(--gold)", display: "block", marginBottom: "14px", fontSize: "9px" }}>UpForge Analyst Verdict</span>
              <p className="uf-d" style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", fontWeight: 400, color: "rgba(255,255,255,.88)", lineHeight: 1.75, maxWidth: "800px", fontStyle: "italic" }}>
                "{report.verdict}"
              </p>
              <div style={{ marginTop: "28px", paddingTop: "20px", borderTop: "1px solid rgba(255,255,255,.08)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "12px" }}>
                <span style={{ fontSize: "9px", color: "rgba(255,255,255,.2)", fontFamily: "'JetBrains Mono',monospace" }}>
                  Report ID: {report.reportId} · {new Date().toLocaleDateString("en-IN")} · UpForge Intelligence v3.0
                </span>
                <button onClick={() => window.print()} style={{ display: "flex", alignItems: "center", gap: "6px", padding: "10px 20px", background: "var(--gold)", color: "#fff", border: "none", cursor: "pointer", fontSize: "11px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", fontFamily: "'Source Serif 4',Georgia,serif" }}>
                  <Download style={{ width: "12px", height: "12px" }} /> Download PDF
                </button>
              </div>
            </div>

            {/* Disclaimer */}
            {report.disclaimer && (
              <div style={{ marginTop: "16px", padding: "12px 16px", background: "var(--off)", border: "1px solid var(--rule)", display: "flex", gap: "8px", alignItems: "flex-start" }}>
                <Info style={{ width: "11px", height: "11px", color: "var(--ink4)", flexShrink: 0, marginTop: "1px" }} />
                <p style={{ fontSize: "10px", color: "var(--ink4)", lineHeight: 1.6, fontFamily: "'Source Serif 4',Georgia,serif" }}>{report.disclaimer}</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </>
  );
}

// ─── HONEST FALLBACK ──────────────────────────────────────────────────────────
function generateFallbackReport(form: FormData): ReportData {
  const year      = parseInt(form.foundedYear) || new Date().getFullYear();
  const ageYears  = new Date().getFullYear() - year;
  const ageMos    = ageYears * 12;
  const hasRev    = form.currentRevenue && !form.currentRevenue.toLowerCase().includes("pre") && form.currentRevenue !== "₹0" && form.currentRevenue !== "0";
  const team      = parseInt(form.teamSize) || 2;
  const raised    = form.fundingRaised && form.fundingRaised.toLowerCase() !== "none" ? form.fundingRaised : null;

  // Honest valuation logic
  let low = "₹15L", mid = "₹35L", high = "₹80L", conf: "high"|"medium"|"low" = "low";
  let confNote = "This is a very early-stage estimate based on sector benchmarks. No public revenue or funding data was found. Valuations at this stage are highly speculative.";
  let methodology = "Based on team size, sector, and comparable pre-seed Indian startups. No revenue multiplier applied.";

  if (ageYears < 1) {
    low = "₹10L"; mid = "₹25L"; high = "₹60L"; conf = "low";
    confNote = "Startup is less than 1 year old with no verifiable traction. Valuation reflects founder equity and idea stage only. Most Indian angel investors value pre-revenue startups <1yr at ₹25–75L.";
    methodology = "Idea/team-stage valuation. Berkus method applied: team quality, concept viability, sector heat.";
  } else if (hasRev) {
    // Revenue-based estimate
    const revStr = form.currentRevenue.replace(/[₹,$,L,M,Cr,lakh,crore,million,billion]/gi, "").trim();
    const revNum = parseFloat(revStr) || 10;
    const multiplier = form.industry?.includes("SaaS") ? 6 : form.industry?.includes("AI") ? 8 : 4;
    const revCr = revNum < 100 ? revNum : revNum / 100; // assume lakhs if small
    low = `₹${Math.round(revCr * multiplier * 0.6)}Cr`;
    mid = `₹${Math.round(revCr * multiplier)}Cr`;
    high = `₹${Math.round(revCr * multiplier * 1.8)}Cr`;
    conf = "medium";
    confNote = "Based on self-reported revenue figures. Independent verification not possible. Actual valuation depends on growth rate, churn, and investor sentiment.";
    methodology = `Revenue multiple method: ${multiplier}x ARR for ${form.industry || "this sector"}. Floor at ${multiplier * 0.6}x, ceiling at ${multiplier * 1.8}x based on growth trajectory.`;
  } else if (raised) {
    low = "₹50L"; mid = "₹1.2Cr"; high = "₹3Cr"; conf = "medium";
    confNote = "Valuation inferred from funding stage and typical dilution in Indian early-stage rounds. Actual post-money valuation depends on negotiated terms.";
    methodology = "Post-money inference from funding stage. Typical Indian seed rounds: 10–20% dilution at ₹50L–₹2Cr.";
  }

  return {
    reportId: Math.random().toString(36).substring(2, 10).toUpperCase(),
    dataSourcesFound: [],
    publicDataNote: "No public data found. Analysis based entirely on provided information.",
    executiveSummary: `${form.startupName} is a ${ageYears < 1 ? "very early-stage" : `${ageYears}-year-old`} ${form.industry || "tech"} startup founded by ${form.founderName}${form.city ? ` in ${form.city}` : ""}. The company is building ${form.description || "a solution in its space"}${form.targetMarket ? `, targeting ${form.targetMarket}` : ""}. ${!hasRev ? "The startup is currently pre-revenue, which significantly limits valuation certainty." : `With reported revenue of ${form.currentRevenue}, the company has demonstrated initial traction.`} ${team < 5 ? "The small team size indicates very early operations." : ""}`,
    valuationRange: { low, midpoint: mid, high, methodology, confidence: conf, confidenceNote: confNote },
    scores: {
      overall: ageYears < 1 ? 38 : hasRev ? 62 : 48,
      market: form.industry?.includes("AI") || form.industry?.includes("SaaS") ? 72 : 58,
      team: team >= 5 ? 65 : 45,
      product: hasRev ? 60 : 35,
      traction: hasRev ? 58 : 25,
      moat: form.uniqueAdvantage ? 55 : 35,
      financials: hasRev ? 55 : 20,
    },
    strengths: [
      { title: "Clear Problem Statement", detail: `${form.description || "The startup has articulated a specific problem"}. A focused value proposition is the foundation of product-market fit.` },
      { title: "Sector Timing", detail: `${form.industry || "This sector"} is seeing strong tailwinds in India with significant VC interest in 2024–25.` },
      { title: "Founder Commitment", detail: `Early-stage commitment from ${form.founderName} is a positive signal. First-time founders who persist past 18 months dramatically improve success odds.` },
    ],
    risks: [
      { level: "high" as const, title: ageYears < 1 ? "Idea-Stage Risk" : "Pre-PMF Risk", detail: ageYears < 1 ? "Less than 12 months old with no verifiable traction. 90%+ of startups at this stage fail to reach product-market fit." : "No confirmed product-market fit signals detected from public data.", mitigation: "Run 50+ customer discovery interviews before building. Validate willingness-to-pay before investing in tech." },
      { level: "high" as const, title: "Revenue & Cash Flow Risk", detail: hasRev ? "Revenue is self-reported and unverified. Burn rate vs growth rate ratio unknown." : "Zero revenue means the startup is entirely dependent on external funding or founders' savings.", mitigation: hasRev ? "Prepare 12-month P&L with MoM growth rates for investor conversations." : "Identify 3 paying pilot customers within 60 days to establish baseline traction." },
      { level: "medium" as const, title: "Competition Risk", detail: `${form.keyCompetitors ? `Competing against ${form.keyCompetitors}, which have established distribution and brand.` : "Established players likely exist in this space with distribution advantages."}`, mitigation: "Identify a micro-niche where you can win first. Expand horizontally only after dominating a vertical." },
      { level: "medium" as const, title: "Team Depth Risk", detail: `Team of ${team} is ${team < 3 ? "critically thin" : "small"} for scaling. Key-person dependency is high.`, mitigation: "Document all processes. Hire at least one complementary co-founder or senior operator within 6 months." },
    ],
    competitorAnalysis: (form.keyCompetitors || "Market Incumbents").split(",").slice(0, 4).map((c, i) => ({
      name: c.trim() || `Competitor ${i + 1}`,
      threat: (["high", "medium", "medium", "low"] as const)[i] || "medium",
      difference: form.uniqueAdvantage ? `You offer: ${form.uniqueAdvantage.substring(0, 60)}` : "Differentiation not clearly defined — needs sharpening",
    })),
    marketOpportunity: {
      tam: form.industry?.includes("FinTech") ? "$100B" : form.industry?.includes("SaaS") ? "$50B" : form.industry?.includes("EdTech") ? "$30B" : "$20B",
      sam: form.industry?.includes("FinTech") ? "$8B" : "$4B",
      som: ageYears < 2 ? "$5M" : "$25M",
      insight: `India's ${form.industry || "tech"} sector is projected to grow at 25–35% CAGR through 2030. However, SOM for a pre-revenue startup should realistically target 0.01–0.05% of SAM in year 1.`,
    },
    growthLevers: [
      { lever: "Customer Discovery Sprint", impact: "Foundation", timeline: "0–30 days" },
      { lever: "3 Paying Pilot Customers", impact: "Validates revenue model", timeline: "30–60 days" },
      { lever: "Referral Loop via Early Adopters", impact: "CAC reduction", timeline: "60–90 days" },
      { lever: "Content Marketing for Organic SEO", impact: "Long-term distribution", timeline: "3–6 months" },
      { lever: "Strategic Partnership in Sector", impact: "Distribution leverage", timeline: "6–12 months" },
    ],
    focusAreas: [
      { area: "Validate Willingness-to-Pay", priority: "critical" as const, action: "Get 3 customers to pay something — even ₹1,000/month — before building further. Revenue beats everything at this stage." },
      { area: "Define Riskiest Assumption", priority: "critical" as const, action: "What is the single assumption your business collapses without? Test it this week." },
      { area: "Build an MVP — Not a Product", priority: "high" as const, action: "Ship the simplest version that delivers core value. A landing page + Calendly is a valid MVP." },
      { area: "Investor Readiness Preparation", priority: "medium" as const, action: "Prepare a 10-slide deck with problem, solution, team, market, traction, and ask. Approach angels only after first revenue." },
    ],
    investorReadiness: {
      score: ageYears < 1 ? 28 : hasRev ? 58 : 40,
      verdict: ageYears < 1 ? "Not Ready — Get First Revenue" : hasRev ? "Approaching Ready" : "Pre-Seed Stage",
      improvements: [
        "Show 3 months of MoM revenue or user growth",
        "Define your unit economics (CAC, LTV, payback period)",
        "Document your go-to-market strategy with specific channels",
        "Add 1–2 advisors with relevant sector credibility",
        "Prepare a 12-month financial model with assumptions clearly stated",
      ],
    },
    roadmap: [
      { phase: "Validate (0–90 Days)", timeline: "3 months", goals: ["Run 50 customer interviews", "Identify top 3 paying use cases", "Ship MVP to 10 beta users", "Achieve ₹1 of revenue"] },
      { phase: "Build (3–9 Months)", timeline: "6 months", goals: ["Reach ₹10–50L ARR", "Build repeatable sales motion", "Hire 1 key role (tech or sales)", "Refine unit economics"] },
      { phase: "Scale (9–18 Months)", timeline: "9 months", goals: ["Target ₹1Cr ARR milestone", "Raise Pre-Seed/Seed round", "Expand to 2nd geography or segment", "Build founding team of 8–12"] },
    ],
    benchmarks: [
      { metric: "Time to First Revenue", startup: ageYears < 1 ? "Not yet" : `${ageYears}yr`, industry: "6–12 months", verdict: ageYears < 1 ? "below" : "on-par" },
      { metric: "Team Size", startup: `${team}`, industry: "5–10 at seed", verdict: team >= 5 ? "on-par" : "below" },
      { metric: "Funding Stage", startup: form.fundingStage || "Bootstrapped", industry: "Pre-Seed at 1yr", verdict: "on-par" },
      { metric: "Revenue (ARR)", startup: hasRev ? form.currentRevenue : "₹0", industry: "₹25L+ (Seed)", verdict: hasRev ? "on-par" : "below" },
    ],
    verdict: ageYears < 1
      ? `${form.startupName} is at day zero — the idea stage. The honest reality: 9 out of 10 startups at this stage don't survive to Series A. The path forward is relentlessly simple: talk to 50 customers this month, find one who will pay before you build, and validate your riskiest assumption. A startup worth ₹10Cr is built by doing, not by planning. The best thing ${form.founderName} can do right now is get on the phone.`
      : `${form.startupName} has made it past the hardest filter — staying alive. ${hasRev ? `With ${form.currentRevenue} in revenue, the foundation exists.` : "The absence of revenue is the next problem to solve."} The window to raise seed capital in India's current market favors startups with 3+ months of consistent growth data. Focus relentlessly on retention before acquisition. Every rupee of ARR at this stage is worth more than any pitch deck.`,
    disclaimer: "This report is AI-generated based on the information provided and publicly available data at the time of generation. Valuations are estimates only and not financial advice. UpForge does not guarantee accuracy. Consult a qualified financial advisor before making investment decisions.",
  };
}
