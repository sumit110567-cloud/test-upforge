// app/about/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import Image from "next/image";
import {
  Shield, Users, TrendingUp, Award, BadgeCheck, Globe,
  ArrowRight, Sparkles, Calculator, FileText, Zap,
  Building2, Target, ExternalLink, Activity, CheckCircle2,
} from "lucide-react";

export const revalidate = 600;

async function getAboutInsights() {
  try {
    const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: `Return ONLY valid JSON:
            {
              "ecosystemPulse": {
                "headline": "one powerful stat or fact about Indian startup ecosystem 2026",
                "stat": "big number or %",
                "context": "brief context under 12 words"
              },
              "whyRegistry": [
                {"point": "why a startup registry matters in India", "data": "supporting stat"}
              ],
              "milestones": [
                {"year": "year", "event": "Indian startup ecosystem milestone"}
              ]
            }`,
          },
          {
            role: "user",
            content: "Give compelling data about why documenting Indian startups matters in 2026.",
          },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });
    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return {
      ecosystemPulse: {
        headline: "India is now home to the world's 3rd largest startup ecosystem",
        stat: "118 Unicorns",
        context: "and growing — ₹9.2B funded in Q1 2026 alone",
      },
      whyRegistry: [
        { point: "90% of Indian startups have zero structured digital presence", data: "Less than 10% appear on verified databases" },
        { point: "Investors lose time verifying basic startup information", data: "Avg 3–5 days per due diligence on basic data" },
        { point: "Founders lack institutional-grade digital credibility early on", data: "Most rely only on LinkedIn and AngelList" },
        { point: "India's startup data is fragmented across 200+ sources", data: "No single trusted public registry existed before" },
      ],
      milestones: [
        { year: "2016", event: "Startup India launched — 10,000 registered startups" },
        { year: "2019", event: "India crosses 50,000 DPIIT-recognized startups" },
        { year: "2021", event: "Record $42B funding — India's breakout year" },
        { year: "2023", event: "100+ unicorns, 3rd largest ecosystem globally" },
        { year: "2025", event: "72,000+ active startups, AI-led second wave begins" },
        { year: "2026", event: "UpForge becomes India's independent public registry" },
      ],
    };
  }
}

function PulseDot({ color = "green" }: { color?: "green" | "blue" | "amber" }) {
  const colors = {
    green: { ring: "bg-green-400", dot: "bg-green-500" },
    blue: { ring: "bg-blue-400", dot: "bg-blue-500" },
    amber: { ring: "bg-amber-400", dot: "bg-amber-500" },
  };
  return (
    <span className="relative flex h-2 w-2 flex-shrink-0">
      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${colors[color].ring} opacity-75`}></span>
      <span className={`relative inline-flex rounded-full h-2 w-2 ${colors[color].dot}`}></span>
    </span>
  );
}

export default async function AboutPage() {
  const supabase = await createClient();
  const insights = await getAboutInsights();

  const { count: totalStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  const { count: verifiedStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true })
    .eq("is_verified", true);

  const { count: startupsWithReports } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true })
    .eq("has_report", true);

  const { data: industries } = await supabase
    .from("startups")
    .select("industry")
    .not("industry", "is", null);

  const uniqueIndustries = industries ? new Set(industries.map((i) => i.industry)).size : 0;

  return (
    <div className="bg-[#F7F5F0] text-[#1C1C1C] min-h-screen" style={{ fontFamily: "system-ui, sans-serif" }}>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fu-1 { animation: fadeUp 0.55s 0.05s ease both; }
        .fu-2 { animation: fadeUp 0.55s 0.15s ease both; }
        .fu-3 { animation: fadeUp 0.55s 0.28s ease both; }
        .fu-4 { animation: fadeUp 0.55s 0.42s ease both; }
        .fu-5 { animation: fadeUp 0.55s 0.55s ease both; }
        .card-hover { transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease; }
        .card-hover:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(0,0,0,0.08); border-color: #1C1C1C !important; }
        .num-font { font-variant-numeric: tabular-nums; }
      `}</style>

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20">

        {/* ── MASTHEAD ── */}
        <div className="border-b-2 border-[#1C1C1C] pb-6 mb-0 fu-1">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
            <div>
              <p className="text-[9px] tracking-[0.28em] text-[#AAA] uppercase mb-3">UpForge · Our Story</p>
              <h1
                className="text-[2.6rem] sm:text-[3.5rem] lg:text-[4.4rem] tracking-tight leading-[1.0] text-[#1C1C1C]"
                style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
              >
                India's Independent<br />
                <em className="text-[#A89060] not-italic">Startup Registry</em>
              </h1>
            </div>
            <div className="flex flex-col gap-2 lg:items-end pb-1">
              <div className="flex items-center gap-2 border border-[#DDD] bg-white px-3 py-1.5 w-fit">
                <PulseDot color="green" />
                <span className="text-[10px] font-semibold text-[#555] tracking-wide uppercase">Live · Est. 2025</span>
              </div>
              <p className="text-[11px] text-[#888] max-w-xs text-left lg:text-right">
                Not a media platform. Not a marketplace.<br />A public record of serious builders.
              </p>
            </div>
          </div>
        </div>

        {/* ── LIVE ECOSYSTEM PULSE ── */}
        <div className="grid lg:grid-cols-3 border-b border-[#D5D0C8] fu-2">
          {/* Big statement */}
          <div className="lg:col-span-2 py-8 lg:py-10 pr-0 lg:pr-12 border-r border-[#D5D0C8] flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <PulseDot color="amber" />
              <span className="text-[9px] text-[#AAA] uppercase tracking-widest font-bold">Ecosystem Pulse · March 2026</span>
            </div>
            <p
              className="text-xl sm:text-2xl lg:text-[1.7rem] leading-snug text-[#1C1C1C] mb-3"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {insights.ecosystemPulse.headline}
            </p>
            <p className="text-[12px] text-[#888]">{insights.ecosystemPulse.context}</p>
          </div>

          {/* Big stat */}
          <div className="py-8 lg:py-10 lg:pl-10 flex flex-col justify-center">
            <p
              className="num-font text-[3.5rem] sm:text-[4.5rem] lg:text-[5rem] font-semibold text-[#1C1C1C] leading-none tracking-tight mb-2"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              {insights.ecosystemPulse.stat}
            </p>
            <p className="text-[11px] text-[#AAA] uppercase tracking-widest">& counting in India</p>
          </div>
        </div>

        {/* ── REGISTRY LIVE STATS ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 border-b border-[#D5D0C8] fu-3">
          {[
            { value: `${totalStartups || 0}+`, label: "Startups Documented", icon: Building2, dark: false },
            { value: `${totalStartups || 0}+`, label: "Verified Profiles", icon: BadgeCheck, dark: true },
            { value: `${startupsWithReports || 30}+`, label: "Reports Generated", icon: FileText, dark: false },
            { value: `${uniqueIndustries || 20}+`, label: "Industries Covered", icon: Globe, dark: false },
          ].map((stat, i) => (
            <div
              key={i}
              className={`py-7 px-5 border-r border-[#D5D0C8] last:border-r-0 ${
                stat.dark ? "bg-[#1C1C1C]" : "bg-[#F7F5F0] hover:bg-white"
              } transition-colors`}
            >
              <stat.icon className={`w-4 h-4 mb-3 ${stat.dark ? "text-[#E8C547]" : "text-[#CCC]"}`} />
              <p
                className={`num-font text-3xl sm:text-4xl font-semibold tracking-tight leading-none mb-2 ${stat.dark ? "text-white" : "text-[#1C1C1C]"}`}
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {stat.value}
              </p>
              <p className={`text-[9px] font-bold tracking-wider uppercase ${stat.dark ? "text-white/40" : "text-[#AAA]"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* ── WHY THIS EXISTS ── */}
        <div className="grid lg:grid-cols-2 gap-0 border-b border-[#D5D0C8] fu-3">
          {/* Left — The Problem */}
          <div className="py-10 lg:py-12 lg:pr-12 border-r border-[#D5D0C8]">
            <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-4 font-bold">Why UpForge Exists</p>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2rem] tracking-tight leading-snug text-[#1C1C1C] mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              India's startup data was{" "}
              <em className="text-[#A89060] not-italic">fragmented, unverified,</em>{" "}
              and buried.
            </h2>
            <div className="space-y-4">
              {insights.whyRegistry.map((item: any, i: number) => (
                <div key={i} className="flex items-start gap-3 border-b border-[#EEEAE3] pb-4 last:border-0 last:pb-0">
                  <div className="w-5 h-5 bg-[#1C1C1C] text-white flex items-center justify-center text-[9px] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#1C1C1C] mb-0.5" style={{ fontFamily: "'Georgia', serif" }}>
                      {item.point}
                    </p>
                    <p className="text-[11px] text-[#888]">{item.data}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Our Answer */}
          <div className="py-10 lg:py-12 lg:pl-12">
            <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-4 font-bold">Our Answer</p>
            <h2
              className="text-2xl sm:text-3xl lg:text-[2rem] tracking-tight leading-snug text-[#1C1C1C] mb-6"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              One structured,<br />
              <em className="text-[#A89060] not-italic">independent</em> public record.
            </h2>
            <p className="text-sm text-[#666] leading-relaxed mb-6">
              UpForge is India's independent startup registry — not a media outlet, not an accelerator,
              not a ranking system. We document publicly available and founder-submitted data in a
              neutral, structured, permanently accessible format.
            </p>
            <div className="space-y-3">
              {[
                { icon: BadgeCheck, text: "Every profile manually verified before listing", color: "text-emerald-600" },
                { icon: Shield, text: "No paid rankings, no sponsored placements", color: "text-blue-600" },
                { icon: Globe, text: "Publicly indexed and permanently accessible", color: "text-purple-600" },
                { icon: Sparkles, text: "AI-powered growth analysis for every startup", color: "text-amber-600" },
                { icon: Calculator, text: "Free valuation tool for early-stage founders", color: "text-red-500" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <item.icon className={`w-4 h-4 ${item.color} flex-shrink-0`} />
                  <span className="text-[12px] text-[#555]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CORE PRINCIPLES ── */}
        <div className="py-10 lg:py-12 border-b border-[#D5D0C8] fu-4">
          <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-8 font-bold">Core Principles</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#D5D0C8] border border-[#D5D0C8]">
            {[
              {
                icon: Users,
                title: "Built for Builders",
                desc: "Every listed startup represents independent execution. We prioritize clarity and structured documentation over short-term hype.",
              },
              {
                icon: Shield,
                title: "Structured Credibility",
                desc: "Profiles are designed as institutional records — founders build digital credibility that compounds over time.",
              },
              {
                icon: TrendingUp,
                title: "Independent First",
                desc: "We spotlight founders before headlines do. Discoverability is structured around substance, not social noise.",
              },
              {
                icon: Award,
                title: "Long-Term Vision",
                desc: "UpForge aims to become India's most trusted independent founder network — defined by quality, structure, and permanence.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F7F5F0] p-6 lg:p-8 card-hover group border border-transparent"
              >
                <div className="w-8 h-8 bg-[#EEEAE3] group-hover:bg-[#1C1C1C] flex items-center justify-center mb-4 transition-colors">
                  <item.icon className="w-4 h-4 text-[#888] group-hover:text-[#E8C547] transition-colors" />
                </div>
                <h3
                  className="text-[1rem] font-semibold text-[#1C1C1C] mb-2"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {item.title}
                </h3>
                <p className="text-[12px] text-[#777] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── ECOSYSTEM TIMELINE ── */}
        <div className="py-10 lg:py-12 border-b border-[#D5D0C8] fu-4">
          <div className="flex items-center gap-2 mb-8">
            <Activity className="w-4 h-4 text-[#AAA]" />
            <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase font-bold">India's Startup Journey</p>
            <div className="flex items-center gap-1.5 ml-auto">
              <PulseDot color="green" />
              <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-widest">We Are Here</span>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-px bg-[#D5D0C8] border border-[#D5D0C8]">
            {insights.milestones.map((m: any, i: number) => {
              const isLast = i === insights.milestones.length - 1;
              return (
                <div
                  key={i}
                  className={`p-4 lg:p-5 ${isLast ? "bg-[#1C1C1C]" : "bg-[#F7F5F0] hover:bg-white"} transition-colors`}
                >
                  <p
                    className={`num-font text-xl font-bold mb-2 ${isLast ? "text-[#E8C547]" : "text-[#1C1C1C]"}`}
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {m.year}
                  </p>
                  <p className={`text-[11px] leading-snug ${isLast ? "text-white/70" : "text-[#666]"}`}>
                    {m.event}
                  </p>
                  {isLast && (
                    <div className="flex items-center gap-1 mt-2">
                      <PulseDot color="green" />
                      <span className="text-[9px] text-emerald-400 font-bold">Now</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── WHO WE SERVE ── */}
        <div className="py-10 lg:py-12 border-b border-[#D5D0C8] fu-4">
          <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-8 font-bold">Who Uses UpForge</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              {
                type: "Founders",
                headline: "Build your digital paper trail",
                benefits: [
                  "Free verified listing that compounds over time",
                  "AI-generated growth analysis report",
                  "Institutional credibility before press coverage",
                  "Free startup valuation estimate",
                ],
                cta: { label: "List Your Startup", href: "/submit" },
                accent: true,
              },
              {
                type: "Investors & VCs",
                headline: "Discover before the crowd",
                benefits: [
                  "Browse 72,000+ structured startup profiles",
                  "Filter by sector, city, founding year",
                  "Verified data — no noise, no duplicates",
                  "Track emerging sectors with live momentum data",
                ],
                cta: { label: "Explore Registry", href: "/startup" },
                accent: false,
              },
              {
                type: "Researchers & Press",
                headline: "Cite with confidence",
                benefits: [
                  "Structured, verified data you can reference",
                  "Sector-level momentum reports",
                  "Live ecosystem metrics updated every 10 min",
                  "Independent — no commercial bias",
                ],
                cta: { label: "View Insights", href: "/reports" },
                accent: false,
              },
            ].map((audience, i) => (
              <div
                key={i}
                className={`p-6 lg:p-7 border card-hover flex flex-col ${
                  audience.accent
                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                    : "bg-white border-[#E2DDD5]"
                }`}
              >
                <div className="mb-4">
                  <p className={`text-[9px] font-bold uppercase tracking-widest mb-2 ${audience.accent ? "text-[#E8C547]" : "text-[#AAA]"}`}>
                    {audience.type}
                  </p>
                  <h3
                    className={`text-lg font-semibold leading-tight ${audience.accent ? "text-white" : "text-[#1C1C1C]"}`}
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {audience.headline}
                  </h3>
                </div>
                <ul className="space-y-2 flex-1 mb-5">
                  {audience.benefits.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <CheckCircle2 className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${audience.accent ? "text-emerald-400" : "text-emerald-500"}`} />
                      <span className={`text-[11px] leading-snug ${audience.accent ? "text-white/70" : "text-[#666]"}`}>{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={audience.cta.href}
                  className={`inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider mt-auto transition-colors ${
                    audience.accent
                      ? "text-[#E8C547] hover:text-white"
                      : "text-[#1C1C1C] hover:text-[#444]"
                  }`}
                >
                  {audience.cta.label} <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* ── SISTER PRODUCTS ── */}
        <div className="py-10 lg:py-12 border-b border-[#D5D0C8] fu-5">
          <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-2 font-bold">Our Ecosystem</p>
          <p className="text-sm text-[#888] mb-8 max-w-lg">
            UpForge is part of a broader mission — building trusted, independent platforms for India's professional and entrepreneurial community.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
            {/* InternAdda */}
            <a
              href="https://www.internadda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-white border border-[#E2DDD5] p-5 card-hover"
            >
              <div className="relative w-11 h-11 flex-shrink-0 border border-[#E8E4DC] overflow-hidden bg-gray-50">
                <Image
                  src="https://www.internadda.com/_next/image?url=%2Flogo.jpg&w=1920&q=75"
                  alt="InternAdda"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <p className="font-semibold text-[#1C1C1C] group-hover:text-[#A89060] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    InternAdda
                  </p>
                  <ExternalLink className="w-3 h-3 text-[#CCC] group-hover:text-[#A89060] transition-colors" />
                </div>
                <p className="text-[10px] text-[#AAA] font-bold uppercase tracking-wider mb-1.5">Internship & Career Platform</p>
                <p className="text-[12px] text-[#777] leading-snug">
                  India's dedicated internship and early-career opportunity platform — connecting students and fresh graduates with their first real role.
                </p>
              </div>
            </a>

            {/* ArjunaAI */}
            <a
              href="https://www.arjunaai.in"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 bg-white border border-[#E2DDD5] p-5 card-hover"
            >
              <div className="relative w-11 h-11 flex-shrink-0 border border-[#E8E4DC] overflow-hidden bg-gray-50 flex items-center justify-center">
                <Image
                  src="https://www.arjunaai.in/_next/image?url=%2Farjuna_logo.png&w=32&q=75"
                  alt="Arjuna AI"
                  fill
                  className="object-contain p-1"
                  unoptimized
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <p className="font-semibold text-[#1C1C1C] group-hover:text-[#A89060] transition-colors" style={{ fontFamily: "'Georgia', serif" }}>
                    Arjuna AI
                  </p>
                  <ExternalLink className="w-3 h-3 text-[#CCC] group-hover:text-[#A89060] transition-colors" />
                </div>
                <p className="text-[10px] text-[#AAA] font-bold uppercase tracking-wider mb-1.5">AI Interview Practice</p>
                <p className="text-[12px] text-[#777] leading-snug">
                  AI-powered mock interview platform — practice real interview scenarios, receive instant feedback, and build confidence before the actual interview.
                </p>
              </div>
            </a>
          </div>
        </div>

        {/* ── CLOSING STATEMENT ── */}
        <div className="py-12 lg:py-16 fu-5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-5 font-bold">Our Belief</p>
              <h3
                className="text-[2rem] sm:text-[2.8rem] lg:text-[3.2rem] tracking-tight leading-[1.05] text-[#1C1C1C] mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                This is not a{" "}
                <em className="text-[#A89060] not-italic">directory.</em>
              </h3>
              <p className="text-base text-[#666] leading-relaxed max-w-lg mb-6">
                It is a signal that serious founders are building. A structured record of India's emerging companies.
                A quiet infrastructure layer beneath the ecosystem — built to last, not to trend.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/startup"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#1C1C1C] text-white text-[11px] font-bold tracking-wider uppercase hover:bg-[#333] transition-colors"
                >
                  Explore the Registry <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/submit"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-[#1C1C1C] text-[#1C1C1C] text-[11px] font-bold tracking-wider uppercase hover:bg-[#1C1C1C] hover:text-white transition-colors"
                >
                  List Your Startup
                </Link>
              </div>
            </div>

            {/* Right — Quick links */}
            <div className="border border-[#D5D0C8] bg-white p-6 lg:p-8">
              <p className="text-[9px] tracking-[0.25em] text-[#AAA] uppercase mb-5 font-bold">Everything We Offer</p>
              <div className="divide-y divide-[#EEEAE3]">
                {[
                  { icon: Building2, label: "Startup Registry", sub: "Browse 72,000+ verified startups", href: "/startup" },
                  { icon: Calculator, label: "Valuation Tool", sub: "Free estimate in 2 minutes", href: "/valuation" },
                  { icon: FileText, label: "Growth Reports", sub: "AI-generated analysis per startup", href: "/reports" },
                  { icon: Zap, label: "Sector Intelligence", sub: "Live funding & momentum data", href: "/" },
                  { icon: Target, label: "Submit a Startup", sub: "Free listing, always", href: "/submit" },
                ].map((item, i) => (
                  <Link
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 py-3.5 group hover:bg-[#F7F5F0] px-2 -mx-2 transition-colors"
                  >
                    <item.icon className="w-4 h-4 text-[#CCC] group-hover:text-[#1C1C1C] transition-colors flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-semibold text-[#1C1C1C] leading-none mb-0.5">{item.label}</p>
                      <p className="text-[10px] text-[#AAA]">{item.sub}</p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-[#CCC] group-hover:text-[#1C1C1C] transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
