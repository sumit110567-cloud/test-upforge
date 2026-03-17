// components/founder-chronicle-client.tsx  ←  CLIENT COMPONENT
"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"
import type { Founder } from "@/data/founders"

// ---------------------------------------------------------------------------
// YOUTUBE FACADE COMPONENT
// Loads a thumbnail image instead of the full YouTube iframe.
// The actual iframe is only injected into the DOM when the user clicks Play.
// This saves ~500KB of third-party JS on initial page load.
// ---------------------------------------------------------------------------
function YouTubeFacade({
  videoId,
  title,
  accent,
}: {
  videoId: string
  title: string
  accent: string
}) {
  const [isPlaying, setIsPlaying] = useState(false)
  const thumbnailUrl = `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`

  if (isPlaying) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#0A0A0A" }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    )
  }

  return (
    <button
      className="relative w-full group cursor-pointer"
      style={{ paddingBottom: "56.25%", background: "#0A0A0A", display: "block" }}
      onClick={() => setIsPlaying(true)}
      aria-label={`Play video: ${title}`}
    >
      <img
        src={thumbnailUrl}
        alt={`${title} — YouTube thumbnail`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0 transition-opacity group-hover:opacity-70"
        style={{ background: "rgba(0,0,0,0.35)" }}
        aria-hidden="true"
      />
      {/* Play button */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        aria-hidden="true"
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
          style={{ background: "rgba(255,0,0,0.9)" }}
        >
          <div
            style={{
              width: 0, height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "18px solid white",
              marginLeft: 4,
            }}
          />
        </div>
      </div>
    </button>
  )
}

// ---------------------------------------------------------------------------
// FOUNDER PHOTO COMPONENT
// ---------------------------------------------------------------------------
function FounderPhoto({
  src, alt, initials, accent, accentBg, className = "", style = {}
}: {
  src: string; alt: string; initials: string
  accent: string; accentBg: string
  className?: string; style?: React.CSSProperties
}) {
  const [failed, setFailed] = useState(false)
  const show = src && !src.includes("www.sample.com") && !failed

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accentBg, ...style }}>
      {show && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
          width={400}
          height={500}
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "clamp(1.4rem,4vw,2rem)", fontFamily: "Georgia,serif" }}
            aria-hidden="true"
          >
            {initials}
          </div>
          <p className="text-[9px] uppercase tracking-[0.22em] text-center px-6 leading-relaxed"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>
            {alt}
          </p>
        </div>
      )}
    </div>
  )
}

// ---------------------------------------------------------------------------
// PROPS
// ---------------------------------------------------------------------------
interface Props {
  founders: Founder[]
  internalLinks: { l: string; h: string; desc: string }[]
  footerLinks: { l: string; h: string }[]
}

// ---------------------------------------------------------------------------
// CLIENT COMPONENT
// ---------------------------------------------------------------------------
export function FounderChronicleClient({ founders, internalLinks, footerLinks }: Props) {
  const [idx, setIdx] = useState(0)
  const f = founders[idx]
  const isFirst = idx === 0
  const isLast  = idx === founders.length - 1

  const goTo = useCallback((i: number) => {
    setIdx(i)
    // Scroll to top of story — UX only, no SEO impact
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [])

  return (
    <div
      style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}
    >
      <style>{`
        .pf { font-family: var(--font-display), Georgia, serif !important; }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: storyIn .3s ease both; }

        @media (min-width: 640px) {
          .newspaper-cols {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .newspaper-cols > div {
            padding: 0 1.2rem;
            border-right: 1px solid #C8C2B4;
          }
          .newspaper-cols > div:first-child { padding-left: 0; }
          .newspaper-cols > div:last-child { border-right: none; padding-right: 0; }
        }

        .dropcap::first-letter {
          font-family: var(--font-display), Georgia, serif;
          font-size: 3.4em; font-weight: 900;
          line-height: 0.82; float: left;
          margin-right: 0.07em; margin-top: 0.06em;
          color: #1A1208;
        }
        @media (max-width: 639px) {
          .dropcap::first-letter { font-size: 2.8em; }
        }

        .nbtn:not([disabled]):hover {
          background: #1A1208 !important;
          color: white !important;
        }

        @media (min-width: 1024px) {
          .right-sticky {
            position: sticky; top: 0;
            max-height: 100vh; overflow-y: auto;
          }
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        .tabs-strip { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .tabs-strip::-webkit-scrollbar { display: none; }

        @media (max-width: 480px) { .cta-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }} role="banner">
        <div className="text-center px-4 pt-10 sm:pt-14 pb-5 sm:pb-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[9px] tracking-[0.42em] text-[#AAA] uppercase mb-3 font-sans">
            Independent Indian Startup Registry
          </p>
          <h1 className="pf font-black leading-none tracking-tight text-[#1A1208]"
            style={{ fontSize: "clamp(1.9rem,5.5vw,4.6rem)" }}>
            The Founder Chronicle
          </h1>
          <p className="italic mt-3 text-[#6B5C40] leading-relaxed"
            style={{ fontSize: "clamp(13px,1.8vw,16px)" }}>
            Verified stories of the visionaries building India's future — March 2026 Edition
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-16 sm:w-32 bg-[#C8C2B4]" />
            <span className="text-[#C8C2B4] text-xs" aria-hidden="true">✦</span>
            <div className="h-px w-16 sm:w-32 bg-[#C8C2B4]" />
          </div>
        </div>

        {/* Edition tabs */}
        <nav
          aria-label="Edition Selection"
          className="tabs-strip flex items-center overflow-x-auto bg-white/30"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#999] uppercase tracking-[0.2em] px-5 py-4 font-bold flex-shrink-0 border-r border-[#D8D2C4] hidden md:inline">
            In This Edition
          </span>
          <ul className="flex flex-nowrap m-0 p-0 list-none">
            {founders.map((s, i) => (
              <li key={i} className="flex-shrink-0">
                <button
                  onClick={() => goTo(i)}
                  aria-label={`Read story of ${s.name} at ${s.company}`}
                  aria-current={i === idx ? "page" : undefined}
                  className="px-5 py-4 text-[9px] font-bold uppercase tracking-wider transition-all relative"
                  style={{
                    color: i === idx ? "#1A1208" : "#888",
                    background: i === idx ? "#FFF" : "transparent",
                    borderRight: "1px solid #D8D2C4",
                    fontFamily: "system-ui,sans-serif",
                  }}
                >
                  {s.edition} · {s.nameShort}
                  {i === idx && (
                    <div className="absolute bottom-0 left-0 right-0 h-[3px]"
                      style={{ background: s.accent }} />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* ── STORY CONTENT — animates on tab change ── */}
      <main
        className="story-in max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-14"
        id="main-content"
        // key removed — use CSS animation instead of DOM remount
      >
        {/* Two-column layout */}
        <div
          className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >
          {/* LEFT: Editorial */}
          <article className="py-7 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span className="text-[8px] font-black tracking-[0.26em] uppercase px-3 py-1.5 text-white"
                style={{ background: f.accent }}>{f.category}</span>
              <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">
                {f.edition} · March 2026
              </span>
            </div>

            {/*
              HEADING HIERARCHY FIX:
              h1 = "The Founder Chronicle" (in masthead above)
              h2 = founder name (most important identifier on this view)
              h3 = column headings within the story
            */}
            <h2 className="pf font-black leading-tight text-[#1A1208] mb-1"
              style={{ fontSize: "clamp(1.4rem,2.8vw,2.2rem)" }}>
              {f.name}
            </h2>
            <p className="text-[9px] uppercase tracking-wider text-[#AAA] mb-4"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {f.role} · {f.company} · Est. {f.founded}
            </p>

            <p className="pf font-black leading-[1.06] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.3rem,2.8vw,2.2rem)" }}>
              {f.headline}
            </p>

            <p className="italic leading-[1.72] mb-5 pb-5"
              style={{ color: "#5A4A30", fontSize: "clamp(13px,1.7vw,16px)", borderBottom: "1px solid #C8C2B4" }}>
              {f.deck}
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-7"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", f.city, f.context].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{item}</span>
                  {i < arr.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* Mobile photo */}
            <div className="lg:hidden mb-7">
              <FounderPhoto
                src={f.imgSrc}
                alt={`${f.name}, ${f.role} at ${f.company}`}
                initials={f.initials} accent={f.accent} accentBg={f.accentBg}
                className="w-full"
                style={{ height: "min(260px, 54vw)", minHeight: 180 }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: "clamp(11px,3vw,13px)" }}>{f.name}</p>
                <p className="text-white/40 text-[8.5px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* 3-column newspaper body */}
            <div className="newspaper-cols">
              {f.cols.map((col, ci) => (
                <div key={ci} className="mb-5 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.12em] mb-3 pb-1.5"
                    style={{ fontSize: "clamp(9px,1.1vw,11px)", color: "#1A1208", borderBottom: `1.5px solid ${f.accent}`, fontFamily: "system-ui,sans-serif" }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.88] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(12px,1.2vw,13.5px)", fontFamily: "'Georgia','Times New Roman',serif" }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-9 pt-6 pb-6 text-center"
              style={{ borderTop: `3px solid ${f.accent}`, borderBottom: "1px solid #C8C2B4" }}>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 14, marginBottom: 10 }} aria-hidden="true">❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(14px,1.8vw,19px)" }}
                cite={`https://www.upforge.in/startup/${f.slug}`}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 14, margin: "10px 0 8px" }} aria-hidden="true">❧</span>
              <p className="text-[8.5px] uppercase tracking-[0.24em] text-[#AAA]"
                style={{ fontFamily: "system-ui,sans-serif" }}>
                — {f.pullBy}, {f.company}
              </p>
            </div>
          </article>

          {/* RIGHT: Sidebar */}
          <aside className="hidden lg:block" aria-label={`${f.name} profile and key metrics`}>
            <div className="right-sticky pl-7 pt-7 pb-7 flex flex-col gap-4">
              <div className="relative w-full" style={{ height: 360 }}>
                <FounderPhoto
                  src={f.imgSrc}
                  alt={`${f.name}, ${f.role} at ${f.company} — UpForge Founder Chronicle`}
                  initials={f.initials} accent={f.accent} accentBg={f.accentBg}
                  className="w-full h-full"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 55%, transparent)" }}
                >
                  <p className="pf text-white font-bold leading-snug"
                    style={{ fontSize: "clamp(11px,1.1vw,13px)" }}>{f.name}</p>
                  <p className="text-white/40 text-[8.5px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}>
                    {f.role} · {f.company}
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div style={{ border: "2px solid #1A1208" }} role="region" aria-label="Key metrics">
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {f.stats.map((s, si) => (
                    <div key={si} className="px-3 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                        style={{ fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none"
                        style={{ fontSize: "clamp(1.1rem,1.3vw,1.3rem)" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Lesson */}
              <div className="px-4 py-4"
                style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}>
                <p className="text-[7.5px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]"
                  style={{ fontSize: "clamp(11.5px,1.1vw,13px)", fontFamily: "'Georgia',serif" }}>
                  {f.lesson}
                </p>
              </div>

              {/* Profile link */}
              <Link
                href={`/startup/${f.slug}`}
                className="group flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-70"
                style={{ border: `1.5px solid ${f.accent}` }}
                aria-label={`View ${f.company} full profile on UpForge`}
              >
                <span className="text-[9.5px] font-bold uppercase tracking-wider"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>
                  View {f.company} on UpForge
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: f.accent }} aria-hidden="true" />
              </Link>

              <p className="text-[8.5px] text-[#AAA] italic pt-2"
                style={{ borderTop: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
                {f.context} · {f.city} · Est. {f.founded}
              </p>
            </div>
          </aside>
        </div>

        {/* ── PAGINATION ── */}
        <nav
          className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Story pagination"
        >
          <button
            onClick={() => !isFirst && goTo(idx - 1)}
            disabled={isFirst}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isFirst ? "First story" : `Previous: ${founders[idx - 1].nameShort}`}
            style={{ border: `1px solid ${isFirst ? "#D8D2C4" : "#1A1208"}`, color: isFirst ? "#C8C2B4" : "#1A1208", cursor: isFirst ? "not-allowed" : "pointer", fontSize: "clamp(8px,1vw,10px)", background: "transparent", fontFamily: "system-ui,sans-serif" }}
          >
            <ChevronLeft className="w-3 h-3" aria-hidden="true" />
            <span className="hidden sm:inline">{isFirst ? "First Story" : founders[idx - 1].nameShort}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          <div className="flex items-center gap-1.5" role="tablist" aria-label="Story selector">
            {founders.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Story ${i + 1}: ${s.nameShort}`}
                className="h-1.5 rounded-sm transition-all"
                style={{ width: i === idx ? 24 : 5, background: i === idx ? f.accent : "#C8C2B4" }}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && goTo(idx + 1)}
            disabled={isLast}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isLast ? "Last story" : `Next: ${founders[idx + 1].nameShort}`}
            style={{ border: `1px solid ${isLast ? "#D8D2C4" : "#1A1208"}`, color: isLast ? "#C8C2B4" : "#1A1208", cursor: isLast ? "not-allowed" : "pointer", fontSize: "clamp(8px,1vw,10px)", background: "transparent", fontFamily: "system-ui,sans-serif" }}
          >
            <span className="hidden sm:inline">{isLast ? "Last Story" : founders[idx + 1].nameShort}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </nav>

        {/* ── VIDEO SECTION — YouTube Facade ── */}
        <section
          className="py-7"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label={`Featured video — ${f.name}`}
        >
          <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
            <span className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA]">Featured Watch</span>
            <div className="flex-1 h-px" style={{ background: "#D8D2C4" }} />
            <span className="text-[8px] font-black uppercase tracking-[0.2em]" style={{ color: f.accent }}>
              {f.edition} · {f.name}
            </span>
          </div>

          <div
            className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px] gap-0"
            style={{ border: "1.5px solid #1A1208" }}
          >
            {/* YouTube facade — no iframe until click */}
            <YouTubeFacade
              videoId={f.videoId}
              title={f.videoTitle}
              accent={f.accent}
            />

            {/* Info panel */}
            <div
              className="flex flex-col justify-between p-5 sm:p-6"
              style={{ background: "#1A1208", borderLeft: "1.5px solid #1A1208" }}
            >
              <div>
                <p className="text-[8px] font-black uppercase tracking-[0.28em] mb-3"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>Now Watching</p>
                <p className="pf font-black text-white leading-snug mb-2"
                  style={{ fontSize: "clamp(1rem,1.4vw,1.25rem)" }}>{f.name}</p>
                <p className="text-white/50 text-[10px] uppercase tracking-wider mb-4"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
                <p className="text-white/70 leading-relaxed"
                  style={{ fontSize: "clamp(11px,1.1vw,12.5px)", fontFamily: "system-ui,sans-serif" }}>
                  {f.deck}
                </p>
              </div>
              <div className="mt-5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <p className="text-[7.5px] font-black uppercase tracking-[0.24em] text-white/30 mb-3"
                  style={{ fontFamily: "system-ui,sans-serif" }}>Jump to another founder</p>
                <div className="flex flex-wrap gap-1.5">
                  {founders.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => goTo(i)}
                      aria-label={`Watch ${s.nameShort}`}
                      className="text-[8px] font-bold uppercase tracking-wider px-2 py-1 transition-all"
                      style={{
                        background: i === idx ? f.accent : "rgba(255,255,255,0.08)",
                        color: i === idx ? "white" : "rgba(255,255,255,0.45)",
                        border: `1px solid ${i === idx ? f.accent : "rgba(255,255,255,0.12)"}`,
                        fontFamily: "system-ui,sans-serif",
                      }}
                    >
                      {s.no}
                    </button>
                  ))}
                </div>
                <Link
                  href={`/startup/${f.slug}`}
                  className="mt-4 flex items-center gap-2 text-[9px] font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  Full {f.company} Profile <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── INSIGHT STRIP ── */}
        <section className="py-7" style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="UpForge founder insights">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}>UpForge Founder Insights</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { v: "~80%", l: "First-generation founders", b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying." },
              { v: "$950B", l: "Value created by under-40s", b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing." },
              { v: "126", l: "Unicorns — and rising", b: "India just crossed 126 unicorns. The founders reading these stories today will build the next 126. UpForge exists to help them get discovered." },
            ].map((item, i) => (
              <div key={i} className="p-4" style={{ background: "white", border: "1px solid #D8D2C4" }}>
                <p className="pf font-black text-[#1A1208] leading-none mb-1"
                  style={{ fontSize: "clamp(1.7rem,2.4vw,2.1rem)" }}>{item.v}</p>
                <p className="text-[7.5px] font-black uppercase tracking-[0.18em] mb-2"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{item.l}</p>
                <p className="text-[11px] leading-relaxed"
                  style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── INTERNAL LINKS — live routes only ── */}
        <section className="py-7" style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Explore more on UpForge">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}>Explore on UpForge</p>
          <div className="cta-grid grid grid-cols-2 sm:grid-cols-4 gap-3">
            {internalLinks.map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex flex-col gap-1 p-3 transition-all hover:border-[#1A1208]"
                style={{ border: "1px solid #D8D2C4", background: "white" }}
              >
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#1A1208] flex items-center gap-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span className="text-[8.5px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER CTA ── */}
        <section className="pt-7 grid sm:grid-cols-2 gap-6 items-center"
          aria-label="List your startup on UpForge">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.24em] mb-2"
              style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>UpForge Registry</p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2"
              style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)" }}>
              Your founder story starts with a verified profile.
            </p>
            <p className="text-[11.5px] leading-relaxed"
              style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
              Get independently verified and indexed in India's most trusted startup registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: "clamp(9px,1vw,11px)", fontFamily: "system-ui,sans-serif" }}
              aria-label="List your Indian startup on UpForge for free"
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="mt-7 pb-2">
          <p className="text-[8.5px] leading-relaxed"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}>
            * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn, and company announcements as of March 2026. UpForge is an independent registry — no paid placements, no sponsored rankings. Founder valuations are approximate and reflect latest available public data.
          </p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {footerLinks.map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[8.5px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>

      </main>
    </div>
  )
}
