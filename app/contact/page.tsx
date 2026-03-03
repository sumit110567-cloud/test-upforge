// app/contact/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Loader2, CheckCircle2, Mail, ChevronRight, ArrowRight } from "lucide-react";

// ─── Same EmailJS config as submit page ──────────────────────────────────────
const WORKING_SERVICE_ID  = "service_jwpk5li";
const WORKING_TEMPLATE_ID = "template_ah89eas";
const WORKING_PUBLIC_KEY  = "2N6-20rWXZApcyd_K";

// ─── Field ────────────────────────────────────────────────────────────────────

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#666] mb-1.5">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full border border-[#D5D0C8] bg-white px-4 py-3 text-[14px] text-[#1C1C1C] placeholder-[#AAA] focus:outline-none focus:border-[#1C1C1C] transition-all hover:border-[#BBB]";

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", title: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent]       = useState(false);
  const [error, setError]     = useState("");

  const update = (f: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((p) => ({ ...p, [f]: e.target.value }));

  const isValid = form.name && form.email && form.message;

  const handleSubmit = async () => {
    if (!isValid) return;
    setLoading(true);
    setError("");
    try {
      await emailjs.send(
        WORKING_SERVICE_ID,
        WORKING_TEMPLATE_ID,
        {
          name:    form.name,
          title:   form.title || "Contact Form",
          email:   form.email,
          phone:   "N/A",
          message: form.message,
        },
        WORKING_PUBLIC_KEY
      );
      setSent(true);
    } catch (err) {
      console.error("EmailJS error:", err);
      setError("Something went wrong. Email us directly at contact@upforge.in");
    } finally {
      setLoading(false);
    }
  };

  // ── Success ────────────────────────────────────────────────────────────────

  if (sent) {
    return (
      <div className="bg-[#F7F5F0] min-h-screen flex items-center justify-center px-4" style={{ fontFamily: "system-ui, sans-serif" }}>
        <div className="max-w-md w-full bg-white border border-[#D5D0C8] p-12 text-center">
          <CheckCircle2 className="w-10 h-10 text-[#A89060] mx-auto mb-6" />
          <h2
            className="text-2xl text-[#1C1C1C] mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Message received.
          </h2>
          <p className="text-sm text-[#888] leading-relaxed mb-8">
            We'll get back to you at <span className="text-[#1C1C1C] font-medium">{form.email}</span> within 1–2 business days.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#555] hover:text-[#1C1C1C] transition-colors"
          >
            Back to UpForge <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    );
  }

  // ── Form ───────────────────────────────────────────────────────────────────

  return (
    <div className="bg-[#F7F5F0] min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(14px); } to { opacity:1; transform:translateY(0); } }
        .fu { animation: fadeUp 0.45s ease both; }
        .fu-2 { animation: fadeUp 0.45s 0.1s ease both; }
        .fu-3 { animation: fadeUp 0.45s 0.2s ease both; }
      `}</style>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* ── MASTHEAD ── */}
        <div className="border-b-2 border-[#1C1C1C] pb-6 mb-0 fu">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-3">UpForge · Get in Touch</p>
              <h1
                className="text-[2.4rem] sm:text-[3.2rem] lg:text-[4rem] tracking-tight leading-[1.0] text-[#1C1C1C]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                Contact <em className="text-[#A89060] not-italic">Us</em>
              </h1>
            </div>
            <div className="pb-1">
              <p className="text-[11px] text-[#888] lg:text-right">
                We respond within 1–2 business days.
              </p>
            </div>
          </div>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="grid lg:grid-cols-3 gap-0 fu-2">

          {/* ── FORM ── */}
          <div className="lg:col-span-2 py-10 pr-0 lg:pr-12 border-r border-[#D5D0C8]">
            <div className="space-y-5 max-w-xl">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Your Name" required>
                  <input
                    value={form.name}
                    onChange={update("name")}
                    placeholder="Rahul Sharma"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email Address" required>
                  <input
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@startup.in"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Subject">
                <select value={form.title} onChange={update("title")} className={`${inputCls} appearance-none cursor-pointer`}>
                  <option value="">Select a topic…</option>
                  {[
                    "Listing my startup",
                    "Verification query",
                    "Update my profile",
                    "Report / analysis question",
                    "Partnership or press",
                    "Data / API access",
                    "Other",
                  ].map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </Field>

              <Field label="Message" required>
                <textarea
                  value={form.message}
                  onChange={update("message")}
                  placeholder="How can we help you?"
                  rows={6}
                  className={`${inputCls} resize-none`}
                />
              </Field>

              {error && (
                <p className="text-[11px] text-red-500">{error}</p>
              )}

              <div className="flex items-center justify-between pt-2">
                <p className="text-[10px] text-[#BBB]">
                  Or email directly:{" "}
                  <a
                    href="mailto:contact@upforge.in"
                    className="text-[#888] hover:text-[#1C1C1C] underline underline-offset-2 transition-colors"
                  >
                    contact@upforge.in
                  </a>
                </p>

                <button
                  onClick={handleSubmit}
                  disabled={!isValid || loading}
                  className={`flex items-center gap-2 px-7 py-3 text-[11px] font-bold uppercase tracking-wider transition-colors ${
                    isValid && !loading
                      ? "bg-[#1C1C1C] text-white hover:bg-[#333]"
                      : "bg-[#EEEAE3] text-[#BBB] cursor-not-allowed"
                  }`}
                >
                  {loading ? (
                    <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending…</>
                  ) : (
                    <><Mail className="w-3.5 h-3.5" /> Send Message</>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="py-10 lg:pl-10 fu-3">
            <div className="space-y-6">

              {/* Direct contact */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#AAA] mb-4">Direct Contact</p>
                <a
                  href="mailto:contact@upforge.in"
                  className="flex items-center gap-3 group mb-2"
                >
                  <div className="w-8 h-8 border border-[#E2DDD5] bg-white flex items-center justify-center group-hover:bg-[#1C1C1C] transition-colors">
                    <Mail className="w-3.5 h-3.5 text-[#AAA] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm text-[#555] group-hover:text-[#1C1C1C] transition-colors">
                    contact@upforge.in
                  </span>
                </a>
                <p className="text-[10px] text-[#BBB] ml-11">Response within 1–2 business days</p>
              </div>

              <div className="h-px bg-[#E8E4DC]" />

              {/* Quick links */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#AAA] mb-4">Quick Links</p>
                <div className="space-y-1">
                  {[
                    { label: "List your startup",   href: "/submit" },
                    { label: "Verification info",   href: "/verification" },
                    { label: "Free analysis report",href: "/reports" },
                    { label: "Browse the registry", href: "/startup" },
                    { label: "FAQ",                 href: "/faq" },
                  ].map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center justify-between py-2.5 border-b border-[#EEEAE3] last:border-0 group"
                    >
                      <span className="text-[12px] text-[#666] group-hover:text-[#1C1C1C] transition-colors">
                        {item.label}
                      </span>
                      <ChevronRight className="w-3 h-3 text-[#CCC] group-hover:text-[#888] transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="h-px bg-[#E8E4DC]" />

              {/* Sister products */}
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#AAA] mb-4">Our Platforms</p>
                <div className="space-y-3">
                  {[
                    { name: "InternAdda", sub: "India's internship platform", href: "https://internadda.com" },
                    { name: "Arjuna AI",  sub: "AI mock interview platform",  href: "https://arjunaai.in"   },
                  ].map((p) => (
                    <a
                      key={p.name}
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between group"
                    >
                      <div>
                        <p className="text-[12px] font-semibold text-[#555] group-hover:text-[#1C1C1C] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                          {p.name}
                        </p>
                        <p className="text-[10px] text-[#BBB]">{p.sub}</p>
                      </div>
                      <ChevronRight className="w-3 h-3 text-[#CCC] group-hover:text-[#888] transition-colors flex-shrink-0" />
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
