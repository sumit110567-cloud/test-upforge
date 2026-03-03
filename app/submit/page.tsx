"use client";

import React, { useRef, useState } from "react";
import {
  ShieldCheck, CheckCircle2, Loader2, Globe, Rocket,
  BadgeCheck, ArrowRight, ChevronRight, Building2,
  Users, TrendingUp, FileText, Sparkles,
  IndianRupee, Target, AlertCircle, ChevronLeft,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

// ─── Working EmailJS Config ─────────────────────────────────────────────────
const WORKING_SERVICE_ID = "service_jwpk5li"; 
const WORKING_TEMPLATE_ID = "template_ah89eas";
const WORKING_PUBLIC_KEY = "2N6-20rWXZApcyd_K";

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

// ─── Field component ──────────────────────────────────────────────────────────

function Field({
  label, required, hint, children,
}: { label: string; required?: boolean; hint?: string; children: React.ReactNode }) {
  return (
    <div className="space-y-1.5">
      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#666]">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children}
      {hint && <p className="text-[10px] text-[#999] italic">{hint}</p>}
    </div>
  );
}

const inputCls = "w-full border border-[#D5D0C8] bg-white px-4 py-3 text-[14px] text-[#1C1C1C] placeholder-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-all hover:border-[#BBB]";
const selectCls = "w-full border border-[#D5D0C8] bg-white px-4 py-3 text-[14px] text-[#1C1C1C] focus:outline-none focus:border-[#1C1C1C] transition-all appearance-none cursor-pointer";

const STEPS = [
  { label: "Identity", icon: Users },
  { label: "Business", icon: Building2 },
  { label: "Final Details", icon: Sparkles },
];

export default function SubmitPage() {
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
    true, 
  ];

  const handleSubmit = async () => {
    setIsLoading(true);
    setError("");

    try {
      // Synchronized with your working test keys
      const templateParams = {
        name: form.founder_name,         // matching your "lucky" test
        title: form.startup_name,      // matching your "hey" test
        email: form.email,               // matching your "lucky784..." test
        phone: form.phone || "N/A",
        message: `
          Startup Registry Submission
          -------------------------
          Founder: ${form.founder_name}
          Company: ${form.startup_name}
          Year: ${form.founded_year}
          Sector: ${form.industry}
          City: ${form.city}
          Website: ${form.website}
          Description: ${form.description}
          Advantage: ${form.unique_advantage}
          Source: ${form.how_heard}
        `.trim(),
      };

      await emailjs.send(
        WORKING_SERVICE_ID, 
        WORKING_TEMPLATE_ID, 
        templateParams, 
        WORKING_PUBLIC_KEY
      );

      setStep(3); // Show Success
    } catch (err) {
      console.error("EmailJS Final Error:", err);
      setError("Please try again or contact support.");
    } finally {
      setIsLoading(false);
    }
  };

  if (step === 3) return <SuccessScreen startupName={form.startup_name} founderName={form.founder_name} />;

  return (
    <div className="bg-[#F7F5F0] min-h-screen py-16 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Simplified Header */}
        <div className="border-b border-[#1C1C1C] pb-8 mb-12">
          <h1 className="text-4xl lg:text-5xl text-[#1C1C1C] mb-2" style={{ fontFamily: "serif" }}>
            Submit to <span className="text-[#A89060]">UpForge</span>
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#888]">The startup registry for the next generation</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 bg-white border border-[#D5D0C8] p-8 sm:p-12">
            
            {/* Minimal Stepper */}
            <div className="flex gap-8 mb-12 overflow-x-auto pb-2 border-b border-[#F0EFEA]">
              {STEPS.map((s, i) => (
                <div key={i} className={`flex items-center gap-2 pb-4 border-b-2 transition-all ${step === i ? "border-[#1C1C1C] opacity-100" : "border-transparent opacity-30"}`}>
                  <span className="text-[10px] font-black">{i + 1}</span>
                  <span className="text-[10px] font-bold uppercase tracking-tighter whitespace-nowrap">{s.label}</span>
                </div>
              ))}
            </div>

            <form className="space-y-8">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div key="s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid sm:grid-cols-2 gap-6">
                    <Field label="Founder Name" required><input value={form.founder_name} onChange={update("founder_name")} placeholder="Full Name" className={inputCls} /></Field>
                    <Field label="Startup Name" required><input value={form.startup_name} onChange={update("startup_name")} placeholder="Company Name" className={inputCls} /></Field>
                    <Field label="Work Email" required><input type="email" value={form.email} onChange={update("email")} placeholder="name@startup.com" className={inputCls} /></Field>
                    <Field label="Phone Number"><input type="tel" value={form.phone} onChange={update("phone")} placeholder="+91..." className={inputCls} /></Field>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div key="s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <Field label="Founded Year" required><input type="number" value={form.founded_year} onChange={update("founded_year")} placeholder="2024" className={inputCls} /></Field>
                      <Field label="Industry" required>
                        <select value={form.industry} onChange={update("industry")} className={selectCls}>
                          <option value="">Select Sector</option>
                          {["AI/ML", "SaaS", "FinTech", "Health", "D2C", "Other"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                        </select>
                      </Field>
                    </div>
                    <Field label="One-Line Description" required><input value={form.description} onChange={update("description")} placeholder="What do you build?" className={inputCls} /></Field>
                    <Field label="Website URL"><input value={form.website} onChange={update("website")} placeholder="https://..." className={inputCls} /></Field>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div key="s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <Field label="Unique Advantage"><textarea value={form.unique_advantage} onChange={update("unique_advantage")} placeholder="Why you?" rows={3} className={inputCls} /></Field>
                    <Field label="How did you hear about us?">
                      <select value={form.how_heard} onChange={update("how_heard")} className={selectCls}>
                        <option value="">Select Option</option>
                        {["LinkedIn", "Twitter", "Google", "Friend"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
                      </select>
                    </Field>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && <div className="text-red-500 text-[10px] font-bold uppercase">{error}</div>}

              <div className="flex items-center justify-between pt-8">
                <button type="button" onClick={() => setStep(s => s - 1)} className={`text-[10px] font-bold uppercase tracking-widest ${step === 0 ? "invisible" : ""}`}>Back</button>
                {step < 2 ? (
                  <button type="button" onClick={() => setStep(s => s + 1)} disabled={!stepValid[step]} className="bg-[#1C1C1C] text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest disabled:opacity-20">Continue</button>
                ) : (
                  <button type="button" onClick={handleSubmit} disabled={isLoading} className="bg-[#A89060] text-white px-10 py-4 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                    {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Submit Registry"}
                  </button>
                )}
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="border border-[#D5D0C8] p-8 bg-white">
              <p className="text-[10px] font-black uppercase mb-4">The Process</p>
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-[#F7F5F0] flex items-center justify-center text-[10px] font-bold">01</div>
                  <p className="text-[11px] leading-relaxed text-[#555]">Submit details via this encrypted form.</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-[#F7F5F0] flex items-center justify-center text-[10px] font-bold">02</div>
                  <p className="text-[11px] leading-relaxed text-[#555]">Manual review by the UpForge team (3-5 days).</p>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="w-6 h-6 bg-[#F7F5F0] flex items-center justify-center text-[10px] font-bold">03</div>
                  <p className="text-[11px] leading-relaxed text-[#555]">Startup live on registry with permanent URL.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SuccessScreen({ startupName, founderName }: { startupName: string; founderName: string }) {
  return (
    <div className="min-h-screen bg-[#F7F5F0] flex items-center justify-center p-6">
      <div className="bg-white border border-[#D5D0C8] p-12 max-w-lg text-center shadow-sm">
        <CheckCircle2 className="w-12 h-12 text-[#A89060] mx-auto mb-6" />
        <h2 className="text-3xl mb-4 text-[#1C1C1C]" style={{ fontFamily: "serif" }}>Submission Received</h2>
        <p className="text-[#666] text-sm leading-relaxed mb-8">
          Thank you, {founderName.split(' ')[0]}. <strong>{startupName}</strong> is now in the review queue.
        </p>
        <button onClick={() => window.location.href = '/'} className="bg-[#1C1C1C] text-white px-8 py-3 text-[10px] font-bold uppercase tracking-widest">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
