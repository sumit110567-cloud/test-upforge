// components/founder-chronicle-client.tsx  ←  CLIENT COMPONENT
"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"
import type { Founder } from "@/data/founders"

// ---------------------------------------------------------------------------
// SHARED "WHY UPFORGE?" VIDEO — one video for the whole page, not per founder
// Swap UPFORGE_VIDEO_ID if the YouTube URL changes.
// ---------------------------------------------------------------------------
const UPFORGE_VIDEO_ID = "QN7FRDlZhRg"
const UPFORGE_VIDEO_TITLE = "Why UpForge? — The Global Startup Registry Explained"

// ---------------------------------------------------------------------------
// YOUTUBE FACADE
// Renders a thumbnail + play button; injects iframe only on click.
// Saves ~500 KB of third-party JS on initial load.
// ---------------------------------------------------------------------------
function YouTubeFacade({ videoId, title }: { videoId: string; title: string }) {
  const [playing, setPlaying] = useState(false)
  const thumb = `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`

  if (playing) {
    return (
      <div className="relative w-full" style={{ paddingBottom: "56.25%", background: "#000" }}>
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
      className="relative w-full group cursor-pointer block"
      style={{ paddingBottom: "56.25%", background: "#0A0A0A" }}
      onClick={() => setPlaying(true)}
      aria-label={`Play: ${title}`}
    >
      <img
        src={thumb}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div
        className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-60"
        style={{ background: "rgba(0,0,0,0.28)" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-110 shadow-xl"
          style={{ background: "rgba(220,38,38,0.92)" }}
        >
          <div style={{ width: 0, height: 0, borderTop: "10px solid transparent", borderBottom: "10px solid transparent", borderLeft: "18px solid white", marginLeft: 4 }} />
        </div>
      </div>
    </button>
  )
}

// ---------------------------------------------------------------------------
// FOUNDER PHOTO
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
      {show ? (
        <img
          src={src} alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy" width={400} height={500}
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "clamp(1.4rem,4vw,2rem)", fontFamily: "Georgia,serif" }}
            aria-hidden="true"
          >{initials}</div>
          <p className="text-[9px] uppercase tracking-[0.2em] text-center px-6 leading-relaxed"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}>{alt}</p>
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
// MAIN CLIENT COMPONENT
// ---------------------------------------------------------------------------
export function FounderChronicleClient({ founders, internalLinks, footerLinks }: Props) {
  const [idx, setIdx] = useState(0)
  const f = founders[idx]
  const isFirst = idx === 0
  const isLast  = idx === founders.length - 1

  const goTo = useCallback((i: number) => {
    setIdx(i)
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" })
  }, [])

  return (
    <div style={{ minHeight: "100vh", background: "#F5F1EA", fontFamily: "'Georgia','Times New Roman',serif" }}>
      <style>{`
        .pf { font-family: Georgia, 'Times New Roman', serif !important; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: fadeUp .28s ease both; }

        /* newspaper three-column body */
        @media (min-width: 640px) {
          .ncols {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .ncols > div { padding: 0 1.1rem; border-right: 1px solid #D5CFBF; }
          .ncols > div:first-child { padding-left: 0; }
          .ncols > div:last-child  { border-right: none; padding-right: 0; }
        }

        .dropcap::first-letter {
          font-family: Georgia, serif;
          font-size: 3.2em; font-weight: 900;
          line-height: 0.82; float: left;
          margin-right: 0.07em; margin-top: 0.08em;
          color: #1A1208;
        }
        @media (max-width: 639px) { .dropcap::first-letter { font-size: 2.6em; } }

        .nbtn:not([disabled]):hover { background: #1A1208 !important; color: #fff !important; }

        @media (min-width: 1024px) {
          .sticky-col { position: sticky; top: 0; max-height: 100vh; overflow-y: auto; }
        }

        .tabs-strip { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .tabs-strip::-webkit-scrollbar { display: none; }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        @media (max-width: 480px) { .cta-grid { grid-template-columns: 1fr !important; } }

        /* pill hover */
        .pill-btn:hover { opacity: 0.82 !important; }

        /* subtle card hover */
        .explore-card:hover { border-color: #1A1208 !important; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════════════════════════════ */}
      <header style={{ background: "#F5F1EA", borderBottom: "3px solid #1A1208" }} role="banner">

        {/* Top bar — domain + date line */}
        <div
          className="flex items-center justify-between px-5 sm:px-8 py-2"
          style={{ borderBottom: "1px solid #D5CFBF", background: "#1A1208" }}
        >
          <span className="text-[8px] tracking-[0.32em] uppercase text-white/40"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            upforge.in · upforge.org
          </span>
          <span className="text-[8px] tracking-[0.24em] uppercase text-white/40"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            March 2026 Edition
          </span>
          <span className="text-[8px] tracking-[0.24em] uppercase text-white/40 hidden sm:inline"
            style={{ fontFamily: "system-ui,sans-serif" }}>
            Global Startup Registry
          </span>
        </div>

        {/* Nameplate */}
        <div className="text-center px-4 pt-9 pb-6" style={{ borderBottom: "1px solid #D5CFBF" }}>
          <p className="text-[8.5px] tracking-[0.46em] uppercase mb-3"
            style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            Independent · Verified · Global
          </p>
          <h1 className="pf font-black leading-none tracking-tight text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.8vw,5rem)" }}>
            The Founder Chronicle
          </h1>
          <p className="italic mt-3 text-[#6B5C40]"
            style={{ fontSize: "clamp(12px,1.6vw,15px)" }}>
            Verified stories of the visionaries defining the global startup era — March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-12 sm:w-28" style={{ background: "#D5CFBF" }} />
            <span className="text-[#C8C2B4] text-xs" aria-hidden="true">✦</span>
            <div className="h-px w-12 sm:w-28" style={{ background: "#D5CFBF" }} />
          </div>
        </div>

        {/* Edition tabs */}
        <nav
          aria-label="Edition Selection"
          className="tabs-strip flex items-center overflow-x-auto"
          style={{ borderBottom: "1px solid #D5CFBF", background: "rgba(255,255,255,0.4)" }}
        >
          <span className="hidden md:inline text-[7.5px] font-black tracking-[0.22em] uppercase px-5 py-4 flex-shrink-0 border-r"
            style={{ color: "#AAA", borderColor: "#D5CFBF", fontFamily: "system-ui,sans-serif" }}>
            In This Edition
          </span>
          <ul className="flex flex-nowrap m-0 p-0 list-none">
            {founders.map((s, i) => (
              <li key={i} className="flex-shrink-0">
                <button
                  onClick={() => goTo(i)}
                  aria-label={`Read story of ${s.name} at ${s.company}`}
                  aria-current={i === idx ? "page" : undefined}
                  className="px-4 py-4 text-[8.5px] font-bold uppercase tracking-wider transition-colors relative"
                  style={{
                    color: i === idx ? "#1A1208" : "#999",
                    background: i === idx ? "#FFF" : "transparent",
                    borderRight: "1px solid #D5CFBF",
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

      {/* ══════════════════════════════════════════════════════════════════
          STORY — animates on tab change
      ══════════════════════════════════════════════════════════════════ */}
      <main
        className="story-in max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-14"
        id="main-content"
        key={idx}   /* remount triggers fade animation per story */
      >

        {/* Two-column: editorial left + sidebar right */}
        <div
          className="grid lg:grid-cols-[1fr_336px] xl:grid-cols-[1fr_372px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >

          {/* ── LEFT: Article ── */}
          <article className="py-7 lg:pr-8" style={{ borderRight: "1px solid #D5CFBF" }}>

            {/* Category + edition */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[7.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: f.accent }}
              >{f.category}</span>
              <span className="text-[8px] uppercase tracking-wider" style={{ color: "#AAA" }}>
                {f.edition} · March 2026
              </span>
            </div>

            {/* Founder name + meta */}
            <h2 className="pf font-black leading-tight text-[#1A1208] mb-1"
              style={{ fontSize: "clamp(1.4rem,2.6vw,2.1rem)" }}>
              {f.name}
            </h2>
            <p className="text-[8.5px] uppercase tracking-wider mb-4"
              style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
              {f.role} · {f.company} · Est. {f.founded}
            </p>

            {/* Headline */}
            <p className="pf font-black leading-[1.06] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.2rem,2.6vw,2rem)" }}>
              {f.headline}
            </p>

            {/* Deck */}
            <p className="italic leading-[1.76] mb-5 pb-5"
              style={{ color: "#5A4A30", fontSize: "clamp(12.5px,1.6vw,15px)", borderBottom: "1px solid #D5CFBF" }}>
              {f.deck}
            </p>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-7"
              style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", f.city, f.context].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[8px] uppercase tracking-wider" style={{ color: "#AAA" }}>{item}</span>
                  {i < arr.length - 1 && <span className="text-[10px]" style={{ color: "#D5CFBF" }}>·</span>}
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
                style={{ height: "min(240px, 52vw)", minHeight: 160 }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: "clamp(11px,3vw,13px)" }}>{f.name}</p>
                <p className="text-white/40 text-[8px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}>{f.role} · {f.company}</p>
              </div>
            </div>

            {/* 3-column newspaper body */}
            <div className="ncols">
              {f.cols.map((col, ci) => (
                <div key={ci} className="mb-5 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.11em] mb-3 pb-1.5"
                    style={{
                      fontSize: "clamp(8.5px,1vw,10.5px)",
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${f.accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >{col.h}</h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{ fontSize: "clamp(11.5px,1.15vw,13px)", fontFamily: "'Georgia','Times New Roman',serif" }}
                    >{para}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div className="mt-9 pt-6 pb-6 text-center"
              style={{ borderTop: `3px solid ${f.accent}`, borderBottom: "1px solid #D5CFBF" }}>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 13, marginBottom: 8 }} aria-hidden="true">❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.72] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(13px,1.7vw,18px)" }}
                cite={`https://www.upforge.in/startup/${f.slug}`}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 13, margin: "8px 0 6px" }} aria-hidden="true">❧</span>
              <p className="text-[8px] uppercase tracking-[0.24em]"
                style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
                — {f.pullBy}, {f.company}
              </p>
            </div>

          </article>

          {/* ── RIGHT: Sidebar ── */}
          <aside className="hidden lg:block" aria-label={`${f.name} profile and key metrics`}>
            <div className="sticky-col pl-7 pt-7 pb-7 flex flex-col gap-4">

              {/* Founder photo */}
              <div className="relative w-full" style={{ height: 420 }}>
                <FounderPhoto
                  src={f.imgSrc}
                  alt={`${f.name}, ${f.role} at ${f.company} — UpForge`}
                  initials={f.initials} accent={f.accent} accentBg={f.accentBg}
                  className="w-full h-full"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 55%, transparent)" }}
                >
                  <p className="pf text-white font-bold leading-snug" style={{ fontSize: 13 }}>{f.name}</p>
                  <p className="text-white/40 text-[8px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}>{f.role} · {f.company}</p>
                </div>
              </div>

              {/* Stats */}
              <div style={{ border: "2px solid #1A1208" }} role="region" aria-label="Key metrics">
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[7.5px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}>By the Numbers</p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D5CFBF" }}>
                  {f.stats.map((s, si) => (
                    <div key={si} className="px-3 py-3" style={{ borderColor: "#D5CFBF" }}>
                      <dt className="text-[7px] uppercase tracking-[0.16em] mb-1"
                        style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>{s.l}</dt>
                      <dd className="pf font-black text-[#1A1208] leading-none"
                        style={{ fontSize: "clamp(1rem,1.25vw,1.25rem)" }}>{s.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Lesson */}
              <div className="px-4 py-4"
                style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}>
                <p className="text-[7px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>The Lesson</p>
                <p className="italic text-[#1A1208] leading-[1.72]"
                  style={{ fontSize: "clamp(11px,1vw,12.5px)", fontFamily: "'Georgia',serif" }}>
                  {f.lesson}
                </p>
              </div>

              {/* CTA — List Your Startup */}
              <Link
                href="/submit"
                className="group flex items-center justify-between px-4 py-3.5 text-white transition-opacity hover:opacity-85"
                style={{ background: "#1A1208" }}
                aria-label="List your startup on UpForge for free"
              >
                <span className="text-[9px] font-black uppercase tracking-wider"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  List Your Startup — Free
                </span>
                <ArrowRight className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              </Link>

              {/* UFRN certificate nudge */}
              <Link
                href="/submit"
                className="group flex items-center justify-between px-4 py-3 transition-all"
                style={{ border: `1.5px solid ${f.accent}` }}
                aria-label="Get your UFRN certificate from UpForge"
              >
                <div>
                  <p className="text-[7.5px] font-black uppercase tracking-[0.2em] mb-0.5"
                    style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>
                    Get Your UFRN Certificate
                  </p>
                  <p className="text-[8px]" style={{ color: "#888", fontFamily: "system-ui,sans-serif" }}>
                    Your startup's verified identity number
                  </p>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 flex-shrink-0" style={{ color: f.accent }} aria-hidden="true" />
              </Link>

              <p className="text-[7.5px] italic pt-2"
                style={{ color: "#BBB0A0", borderTop: "1px solid #D5CFBF", fontFamily: "system-ui,sans-serif" }}>
                {f.context} · {f.city} · Est. {f.founded}
              </p>
            </div>
          </aside>
        </div>

        {/* ══════════════════════════════════════════════════════════════════
            PAGINATION
        ══════════════════════════════════════════════════════════════════ */}
        <nav
          className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #D5CFBF" }}
          aria-label="Story pagination"
        >
          <button
            onClick={() => !isFirst && goTo(idx - 1)}
            disabled={isFirst}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isFirst ? "First story" : `Previous: ${founders[idx - 1].nameShort}`}
            style={{
              border: `1px solid ${isFirst ? "#D5CFBF" : "#1A1208"}`,
              color: isFirst ? "#C8C2B4" : "#1A1208",
              cursor: isFirst ? "not-allowed" : "pointer",
              fontSize: "clamp(8px,1vw,10px)",
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <ChevronLeft className="w-3 h-3" aria-hidden="true" />
            <span className="hidden sm:inline">{isFirst ? "First Story" : founders[idx - 1].nameShort}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Dot strip */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Story selector">
            {founders.map((s, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Story ${i + 1}: ${s.nameShort}`}
                className="h-1.5 rounded-sm transition-all duration-200"
                style={{ width: i === idx ? 22 : 5, background: i === idx ? f.accent : "#C8C2B4" }}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && goTo(idx + 1)}
            disabled={isLast}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isLast ? "Last story" : `Next: ${founders[idx + 1].nameShort}`}
            style={{
              border: `1px solid ${isLast ? "#D5CFBF" : "#1A1208"}`,
              color: isLast ? "#C8C2B4" : "#1A1208",
              cursor: isLast ? "not-allowed" : "pointer",
              fontSize: "clamp(8px,1vw,10px)",
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <span className="hidden sm:inline">{isLast ? "Last Story" : founders[idx + 1].nameShort}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </nav>

        {/* ══════════════════════════════════════════════════════════════════
            SHARED "WHY UPFORGE?" VIDEO
            One video for all stories — no per-founder video clutter
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-7"
          style={{ borderBottom: "1px solid #D5CFBF" }}
          aria-label="Why UpForge — explainer video"
        >
          <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
            <span className="text-[8px] tracking-[0.3em] uppercase" style={{ color: "#AAA" }}>
              Watch
            </span>
            <div className="flex-1 h-px" style={{ background: "#D5CFBF" }} />
            <span className="text-[7.5px] font-black uppercase tracking-[0.2em]" style={{ color: "#1A1208" }}>
              Why UpForge?
            </span>
          </div>

          <div
            className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
            style={{ border: "1.5px solid #1A1208" }}
          >
            <YouTubeFacade videoId={UPFORGE_VIDEO_ID} title={UPFORGE_VIDEO_TITLE} />

            {/* Info panel */}
            <div
              className="flex flex-col justify-between p-5 sm:p-6"
              style={{ background: "#1A1208", borderLeft: "1.5px solid #1A1208" }}
            >
              <div>
                <p className="text-[7.5px] font-black uppercase tracking-[0.28em] mb-3 text-white/40"
                  style={{ fontFamily: "system-ui,sans-serif" }}>Now Playing</p>
                <p className="pf font-black text-white leading-snug mb-2"
                  style={{ fontSize: "clamp(1rem,1.4vw,1.2rem)" }}>
                  Why UpForge?
                </p>
                <p className="text-white/40 text-[8.5px] uppercase tracking-wider mb-4"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  The Global Startup Registry — Explained
                </p>
                <p className="text-white/60 leading-relaxed"
                  style={{ fontSize: "clamp(11px,1.1vw,12.5px)", fontFamily: "system-ui,sans-serif" }}>
                  UpForge is the world's independent startup registry — open, verified, and free.
                  Every startup gets a permanent UFRN (UpForge Registry Number), proof of existence,
                  and global discovery. Watch to see why 5000+ founders trust UpForge.
                </p>
              </div>

              <div className="mt-5 pt-4 flex flex-col gap-3"
                style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <Link
                  href="/submit"
                  className="pill-btn inline-flex items-center gap-2 px-4 py-3 text-white font-bold uppercase tracking-wider transition-opacity"
                  style={{ background: "#fff", color: "#1A1208", fontSize: 10, fontFamily: "system-ui,sans-serif" }}
                  aria-label="List your startup on UpForge"
                >
                  List Your Startup — Free
                  <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </Link>
                <Link
                  href="/submit"
                  className="pill-btn inline-flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-opacity"
                  style={{ border: "1px solid rgba(255,255,255,0.18)", color: "rgba(255,255,255,0.55)", fontSize: 9, fontFamily: "system-ui,sans-serif" }}
                  aria-label="Get your UFRN certificate"
                >
                  Get Your UFRN Certificate
                  <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            INSIGHT STRIP
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-7"
          style={{ borderBottom: "1px solid #D5CFBF" }}
          aria-label="Global startup ecosystem insights"
        >
          <p className="text-[8px] tracking-[0.32em] uppercase mb-4"
            style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            Global Startup Ecosystem · 2026
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                v: "5000+",
                l: "Verified Startups on UpForge",
                b: "Every listing is manually reviewed and assigned a permanent UFRN. UpForge is the only open registry that gives every startup proof of verified existence.",
              },
              {
                v: "$950B",
                l: "Value built by under-40 founders",
                b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's GDP — most started with nothing but a clear problem to solve.",
              },
              {
                v: "190+",
                l: "Countries in the registry",
                b: "UpForge tracks startups from every major emerging market — India, SEA, Africa, LATAM, MENA — and every global tech hub, free and open.",
              },
            ].map((item, i) => (
              <div key={i} className="p-5"
                style={{ background: "white", border: "1px solid #D5CFBF" }}>
                <p className="pf font-black text-[#1A1208] leading-none mb-1"
                  style={{ fontSize: "clamp(1.7rem,2.2vw,2rem)" }}>{item.v}</p>
                <p className="text-[7px] font-black uppercase tracking-[0.18em] mb-2.5"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>{item.l}</p>
                <p className="leading-relaxed"
                  style={{ fontSize: 11, color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>{item.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            EXPLORE LINKS
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-7"
          style={{ borderBottom: "1px solid #D5CFBF" }}
          aria-label="Explore more on UpForge"
        >
          <p className="text-[8px] tracking-[0.32em] uppercase mb-4"
            style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
            Explore on UpForge
          </p>
          <div className="cta-grid grid grid-cols-2 sm:grid-cols-4 gap-3">
            {internalLinks.map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="explore-card flex flex-col gap-1.5 p-4 transition-all"
                style={{ border: "1px solid #D5CFBF", background: "white" }}
              >
                <span className="text-[9px] font-black uppercase tracking-wider text-[#1A1208] flex items-center gap-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l}
                  <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span className="text-[8px]" style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}>
                  {lnk.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════════════════════════════ */}
        <section
          className="py-8 grid sm:grid-cols-2 gap-6 items-center"
          style={{ borderBottom: "1px solid #D5CFBF" }}
          aria-label="List your startup on UpForge"
        >
          <div>
            <p className="text-[7.5px] font-black uppercase tracking-[0.26em] mb-2"
              style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>
              UpForge Global Registry
            </p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2"
              style={{ fontSize: "clamp(1rem,1.8vw,1.25rem)" }}>
              Every startup deserves a verified identity.
            </p>
            <p className="leading-relaxed"
              style={{ fontSize: 11.5, color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
              Submit your startup, get independently verified, and receive your UFRN certificate —
              your startup's permanent proof of existence. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-white font-black uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: "clamp(9px,1vw,11px)", fontFamily: "system-ui,sans-serif" }}
              aria-label="List your startup on UpForge for free and get your UFRN"
            >
              List Your Startup — Free
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3 font-bold uppercase tracking-wider hover:opacity-80 transition-opacity"
              style={{ border: "1.5px solid #1A1208", color: "#1A1208", fontSize: "clamp(8px,0.9vw,10px)", fontFamily: "system-ui,sans-serif" }}
              aria-label="Get your UFRN certificate"
            >
              Get Your UFRN Certificate
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════════
            FOOTER
        ══════════════════════════════════════════════════════════════════ */}
        <footer className="mt-6 pb-2">
          <p className="text-[8px] leading-relaxed pt-5"
            style={{ color: "#BBB0A0", borderTop: "1px solid #D5CFBF", fontFamily: "system-ui,sans-serif" }}>
            * Story details sourced from public interviews, Forbes, Inc42, Hurun 2025, Tracxn, Crunchbase, and
            company announcements as of March 2026. UpForge is an independent registry — no paid placements,
            no sponsored rankings. Valuations are approximate and reflect latest available public data.
          </p>
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {footerLinks.map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[8px] uppercase tracking-wider hover:text-[#1A1208] transition-colors"
                    style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                  >{lnk.l}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>

      </main>

      {/* ── SEO CONTENT LAYER — in DOM for crawlers, invisible to users ── */}
      <div className="sr-only" aria-label="SEO content">
        <nav aria-label="Founder profiles">
          <ul>
            {founders.map((fo) => (
              <li key={fo.slug}>
                <Link href={`/startup/${fo.slug}`}>
                  {fo.name} — {fo.role} at {fo.company}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
