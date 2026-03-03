"use client";

import React, { useRef, useState } from "react";
import {
  ShieldCheck, CheckCircle2, Loader2, Globe, Rocket,
  BadgeCheck, ArrowRight, ChevronRight, Building2,
  Users, TrendingUp, FileText, Sparkles, Calendar,
  IndianRupee, Target, AlertCircle, ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── EmailJS Config ─────────────────────────────────────────────────────────
const EJ_SERVICE = "service_iq9nja3"; 
const EJ_TEMPLATE = "template_p20jq83";
const EJ_PUBLIC_KEY = "BrDAjFcKnUX8zcFB8";

// ─── Types ───────────────────────────────────────────────────────────────────

interface FormState {
  founder_name: string;
  startup_name: string;
  email: string;
  phone: string;
  founded_year: string;
  industry: string;
  city: string;
  website: string;
  description: string;
  problem_solved: string;
  target_market: string;
  business_model: string;
  team_size: string;
  funding_stage: string;
  funding_raised: string;
  current_revenue: string;
  co_founders: string;
  unique_advantage: string;
  social_media: string;
  how_heard: string;
}

const EMPTY: FormState = {
  founder_name: "", startup_name: "", email: "", phone: "",
  founded_year: "", industry: "", city: "", website: "", description: "", problem_solved: "",
  target_market: "", business_model: "", team_size: "", funding_stage: "", funding_raised: "", current_revenue: "",
  co_founders: "", unique_advantage: "", social_media: "", how_heard: "",
};

// ─── Shared UI Components ─────────────────────────────────────────────────────

function Field({
  label, required, hint, children,
}: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] font-bold uppercase tracking-wider text-[#555]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-[#999] italic">{hint}</p>}
    </div>
  );
}

const inputCls = "w-full border border-[#D5D0C8] bg-white px-4 py-3 text-[14px] text-[#1C1C1C] placeholder-[#AAA] focus:outline-none focus:border-[#A89060] transition-all hover:border-[#BBB]";
const selectCls = "w-full border border-[#D5D0C8] bg-white px-4 py-3 text-[14px] text-[#1C1C1C] focus:outline-none focus:border-[#A89060] transition-all appearance-none cursor-pointer";

const STEPS = [
  { label: "Identity", icon: Users },
  { label: "Business", icon: Building2 },
  { label: "Traction & Final", icon: TrendingUp },
];

// ─── Main Component ───────────────────────────────────────────────────────────

export default function SubmitPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0); 
  const [form, setForm] = useState<FormState>(EMPTY);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [field]: e.target.value }));

  const stepValid = [
    form.founder_name && form.startup_name && form.email,
    form.founded_year && form.industry && form.description,
    true, // Final step is optional
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");

    try {
      const templateParams = {
        from_name: form.founder_name,
        business_name: form.startup_name,
        reply_to: form.email,
        website: form.website || "Not provided",
        message: `
          New Startup Registry Submission:
          --------------------------------
          FOUNDER: ${form.founder_name}
          STARTUP: ${form.startup_name}
          EMAIL: ${form.email}
          PHONE: ${form.phone || "N/A"}
          
          BUSINESS INFO:
          Founded: ${form.founded_year}
          Industry: ${form.industry}
          City: ${form.city}
          Website: ${form.website}
          Description: ${form.description}
          Problem: ${form.problem_solved}
          
          TRACTION & DETAILS:
          Market: ${form.target_market}
          Model: ${form.business_model}
          Team: ${form.team_size}
          Stage: ${form.funding_stage}
          Funding: ${form.funding_raised}
          Revenue: ${form.current_revenue}
          Co-founders: ${form.co_founders}
          Advantage: ${form.unique_advantage}
          How heard: ${form.how_heard}
        `.trim(),
      };

      await emailjs.send(EJ_SERVICE, EJ_TEMPLATE, templateParams, EJ_PUBLIC_KEY);
      setStep(3); // Success state
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Submission failed. Please check your connection or email us directly at contact@upforge.in");
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 3) return <SuccessScreen startupName={form.startup_name} founderName={form.founder_name} />;

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12 text-center lg:text-left">
          <p className="text-[10px] tracking-[0.3em] text-[#A89060] font-bold uppercase mb-2">UpForge Startup Registry</p>
          <h1 className="text-4xl lg:text-6xl text-[#1C1C1C] leading-tight mb-4" style={{ fontFamily: "serif" }}>
            List Your Startup. <span className="italic opacity-60">Build in Public.</span>
          </h1>
          <div className="flex items-center gap-3 justify-center lg:justify-start">
             <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
             <p className="text-xs text-[#666]">Applications open for Q1 2026 • 5 min setup</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Form Side */}
          <div className="lg:col-span-2">
            <div className="bg-white border border-[#D5D0C8] p-6 sm:p-10">
              
              {/* Stepper */}
              <div className="flex items-center gap-4 mb-10 overflow-x-auto pb-2">
                {STEPS.map((s, i) => (
                  <div key={i} className={`flex items-center gap-2 flex-shrink-0 ${step === i ? "opacity-100" : "opacity-40"}`}>
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${step === i ? "bg-[#1C1C1C] text-white" : "bg-[#DDD] text-[#555]"}`}>
                      {i + 1}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{s.label}</span>
                    {i < STEPS.length - 1 && <ChevronRight className="w-3 h-3 text-[#CCC]" />}
                  </div>
                ))}
              </div>

              <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
                <AnimatePresence mode="wait">
                  {step === 0 && (
                    <motion.div key="s0" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="grid sm:grid-cols-2 gap-6">
                      <Field label="Founder Name" required><input value={form.founder_name} onChange={update("founder_name")} placeholder="Full Name" className={inputCls} /></Field>
                      <Field label="Startup Name" required><input value={form.startup_name} onChange={update("startup_name")} placeholder="Company Name" className={inputCls} /></Field>
                      <Field label="Work Email" required><input type="email" value={form.email} onChange={update("email")} placeholder="name@company.com" className={inputCls} /></Field>
                      <Field label="Phone (WhatsApp)"><input type="tel" value={form.phone} onChange={update("phone")} placeholder="+91..." className={inputCls} /></Field>
                    </motion.div>
                  )}

                  {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Founded Year" required><input type="number" value={form.founded_year} onChange={update("founded_year")} placeholder="2024" className={inputCls} /></Field>
                        <Field label="Industry" required>
                          <select value={form.industry} onChange={update("industry")} className={selectCls}>
                            <option value="">Select Sector</option>
                            {["AI", "SaaS", "FinTech", "EdTech", "Health", "D2C", "Web3", "Other"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                          </select>
                        </Field>
                      </div>
                      <Field label="One-Line Pitch" required hint="Max 100 characters"><input value={form.description} onChange={update("description")} placeholder="What do you build?" className={inputCls} /></Field>
                      <Field label="Website URL"><input value={form.website} onChange={update("website")} placeholder="https://..." className={inputCls} /></Field>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div key="s2" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <Field label="Funding Stage">
                          <select value={form.funding_stage} onChange={update("funding_stage")} className={selectCls}>
                             <option value="Bootstrapped">Bootstrapped</option>
                             <option value="Seed">Seed / Angel</option>
                             <option value="Series A+">Series A+</option>
                          </select>
                        </Field>
                        <Field label="Team Size"><input type="number" value={form.team_size} onChange={update("team_size")} placeholder="1" className={inputCls} /></Field>
                      </div>
                      <Field label="Unique Advantage"><textarea value={form.unique_advantage} onChange={update("unique_advantage")} placeholder="What's your secret sauce?" rows={3} className={inputCls} /></Field>
                    </motion.div>
                  )}
                </AnimatePresence>

                {error && <div className="p-3 bg-red-50 text-red-600 text-xs border border-red-100">{error}</div>}

                <div className="flex items-center justify-between pt-6 border-t border-[#EEE]">
                  <button type="button" onClick={() => setStep(s => s - 1)} className={`text-xs font-bold uppercase tracking-widest ${step === 0 ? "invisible" : ""}`}>Back</button>
                  {step < 2 ? (
                    <button type="button" onClick={() => setStep(s => s + 1)} disabled={!stepValid[step]} className="bg-[#1C1C1C] text-white px-8 py-4 text-xs font-bold uppercase tracking-widest disabled:opacity-20 transition-all">Continue</button>
                  ) : (
                    <button type="button" onClick={handleSubmit} disabled={isLoading} className="bg-[#A89060] text-white px-10 py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#1C1C1C] transition-all flex items-center gap-2">
                      {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Application"}
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="space-y-6">
             <div className="bg-[#1C1C1C] p-8 text-white">
                <h3 className="text-xl mb-4" style={{ fontFamily: "serif" }}>Registry Perks</h3>
                <ul className="space-y-4">
                  {[
                    "Search Engine Optimization (SEO)",
                    "Direct Founder Network Access",
                    "Investor Visibility Pipeline",
                    "Free Weekly Growth Reports"
                  ].map((text, i) => (
                    <li key={i} className="flex gap-3 text-xs opacity-80">
                      <BadgeCheck className="w-4 h-4 text-[#A89060] flex-shrink-0" />
                      {text}
                    </li>
                  ))}
                </ul>
             </div>
             <div className="border border-[#D5D0C8] p-8 bg-white/50">
                <p className="text-[10px] font-bold uppercase mb-4 text-[#AAA]">Review Timeline</p>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="text-xs font-bold">01</div>
                    <div className="text-[11px] leading-relaxed">Our analysts verify your website and founder social profiles.</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-xs font-bold">02</div>
                    <div className="text-[11px] leading-relaxed">Your startup goes live on the public directory within 48 hours.</div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ startupName, founderName }: { startupName: string; founderName: string }) {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center p-6 text-center">
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="bg-white border border-[#D5D0C8] p-12 max-w-xl shadow-xl">
        <div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h2 className="text-3xl mb-4 text-[#1C1C1C]" style={{ fontFamily: "serif" }}>Submission Received</h2>
        <p className="text-[#666] text-sm leading-relaxed mb-8">
          Excellent, {founderName.split(' ')[0]}. <strong>{startupName}</strong> has been added to our verification queue. You will receive a confirmation email shortly.
        </p>
        <button onClick={() => window.location.href = '/'} className="bg-[#1C1C1C] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest">
          Return to Home
        </button>
      </motion.div>
    </div>
  );
}
