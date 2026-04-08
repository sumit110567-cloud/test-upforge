"use client"

// components/top-videos.tsx — EDITORIAL VIDEO SECTION v2
// Uses real YouTube video IDs — thumbnail from YouTube's CDN (hqdefault.jpg)
// FT/Economist aesthetic: ivory background, maroon accents, serif typography
// No external library needed — pure YouTube thumbnail API

import { useState } from "react"

export interface VideoItem {
  youtubeId: string         // Real YouTube video ID — e.g. "dQw4w9WgXcQ"
  title: string
  standfirst: string        // Short editorial deck
  channel: string
  duration: string
  views: string
  tag: string
  date: string
  href: string              // Can be YouTube URL or internal page
}

// ── EDIT THIS ARRAY — replace youtubeId with your actual video IDs ────────────
export const TOP_VIDEOS: VideoItem[] = [
  {
    youtubeId: "nNxh7PQOcnM",
    title: "How Zepto Cracked 10-Minute Delivery",
    standfirst: "The engineering and operational obsession behind India's fastest growing quick-commerce startup.",
    channel: "UpForge",
    duration: "18:42",
    views: "124K",
    tag: "Operations",
    date: "2 April 2026",
    href: "https://www.youtube.com/watch?v=nNxh7PQOcnM",
  },
  {
    youtubeId: "3fumBcKC6RE",
    title: "Zerodha's Zero-Marketing Playbook",
    standfirst: "How Nithin Kamath built India's largest brokerage without spending a rupee on advertising.",
    channel: "UpForge",
    duration: "22:15",
    views: "98K",
    tag: "Growth",
    date: "28 March 2026",
    href: "https://www.youtube.com/watch?v=3fumBcKC6RE",
  },
  {
    youtubeId: "5qap5aO4i9A",
    title: "CRED: Why Give Rewards to Rich People?",
    standfirst: "The counterintuitive strategy that turned a credit card app into a $6.4 billion ecosystem.",
    channel: "UpForge",
    duration: "15:30",
    views: "87K",
    tag: "Strategy",
    date: "22 March 2026",
    href: "https://www.youtube.com/watch?v=5qap5aO4i9A",
  },
  {
    youtubeId: "jNQXAC9IVRw",
    title: "Nykaa IPO: The Beauty Unicorn Story",
    standfirst: "Falguni Nayar's patient capital approach that took Nykaa from startup to India's first D2C IPO.",
    channel: "UpForge",
    duration: "20:08",
    views: "76K",
    tag: "D2C",
    date: "15 March 2026",
    href: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  },
  {
    youtubeId: "M7FIvfx5J10",
    title: "PhysicsWallah: ₹1 Crore to $2.8B",
    standfirst: "The most improbable unicorn in Indian edtech — Alakh Pandey's journey from YouTube teacher to global founder.",
    channel: "UpForge",
    duration: "24:55",
    views: "210K",
    tag: "Edtech",
    date: "8 March 2026",
    href: "https://www.youtube.com/watch?v=M7FIvfx5J10",
  },
  {
    youtubeId: "LXb3EKWsInQ",
    title: "Meesho: Social Commerce Revolution",
    standfirst: "How Vidit Aatrey bet on Tier-3 India before anyone else — and why it's paying off at unicorn scale.",
    channel: "UpForge",
    duration: "17:22",
    views: "65K",
    tag: "Commerce",
    date: "1 March 2026",
    href: "https://www.youtube.com/watch?v=LXb3EKWsInQ",
  },
]

const TAG_COLORS: Record<string, string> = {
  Operations: "#8b1a1a",
  Growth: "#1a3d5c",
  Strategy: "#2d5a1a",
  D2C: "#5a3d1a",
  Edtech: "#3d1a5a",
  Commerce: "#5a4d1a",
}

// ─────────────────────────────────────────────────────────────────────────────

function VideoCard({ video, index, featured }: { video: VideoItem; index: number; featured?: boolean }) {
  const [hovered, setHovered] = useState(false)
  const tagColor = TAG_COLORS[video.tag] ?? "#8b1a1a"

  // YouTube thumbnail URL (hqdefault = 480×360, maxresdefault for HD)
  const thumbUrl = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`

  if (featured) {
    return (
      <a
        href={video.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block col-span-1 lg:col-span-2 border-b-2 pb-8 mb-0"
        style={{ borderColor: "#8b1a1a" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Thumbnail */}
          <div className="relative overflow-hidden" style={{ aspectRatio: "16/9" }}>
            <img
              src={thumbUrl}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered ? "scale(1.03)" : "scale(1)" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none"
              }}
            />
            {/* Overlay */}
            <div
              className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
              style={{ background: "rgba(26,10,10,0.25)", opacity: hovered ? 1 : 0.6 }}
            >
              <div
                className="w-16 h-16 flex items-center justify-center border-2 transition-all duration-200"
                style={{
                  background: hovered ? "#8b1a1a" : "rgba(250,247,242,0.9)",
                  borderColor: hovered ? "#8b1a1a" : "rgba(250,247,242,0.9)",
                }}
              >
                <svg
                  className="w-7 h-7 ml-1"
                  fill={hovered ? "#faf7f2" : "#8b1a1a"}
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Duration */}
            <div
              className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-bold"
              style={{ background: "#1a0a0a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
            >
              {video.duration}
            </div>
            {/* Tag */}
            <div
              className="absolute top-3 left-3 px-2.5 py-1 text-[9px] tracking-widest uppercase font-bold"
              style={{ background: tagColor, color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
            >
              {video.tag}
            </div>
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <h3
              className="leading-tight mb-4 group-hover:text-[#8b1a1a] transition-colors"
              style={{
                fontFamily: "'Times New Roman', Georgia, serif",
                fontSize: "clamp(20px, 2.5vw, 30px)",
                color: "#1a0a0a",
                fontWeight: 700,
              }}
            >
              {video.title}
            </h3>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#3d2b2b" }}
            >
              {video.standfirst}
            </p>
            <div className="flex items-center justify-between">
              <span
                className="text-xs"
                style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
              >
                {video.channel} · {video.views} views · {video.date}
              </span>
              <span
                className="text-sm font-semibold text-[#8b1a1a]"
                style={{ fontFamily: "'Times New Roman', Georgia, serif" }}
              >
                Watch →
              </span>
            </div>
          </div>
        </div>
      </a>
    )
  }

  return (
    <a
      href={video.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border-b py-6"
      style={{ borderColor: "#e8ddd0" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex gap-4 items-start">
        {/* Thumbnail */}
        <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 140, aspectRatio: "16/9" }}>
          <img
            src={thumbUrl}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-400"
            style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
            onError={(e) => {
              const el = e.target as HTMLImageElement
              el.style.display = "none"
              if (el.parentElement) {
                el.parentElement.style.background = "#2a1010"
              }
            }}
          />
          {/* Play */}
          <div
            className="absolute inset-0 flex items-center justify-center transition-opacity duration-200"
            style={{ opacity: hovered ? 1 : 0.7, background: "rgba(26,10,10,0.3)" }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center"
              style={{ background: "rgba(250,247,242,0.9)" }}
            >
              <svg className="w-4 h-4 ml-0.5" fill="#8b1a1a" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
          {/* Duration */}
          <div
            className="absolute bottom-1 right-1 px-1.5 py-0.5 text-[9px] font-bold"
            style={{ background: "#1a0a0a", color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
          >
            {video.duration}
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span
              className="text-[9px] tracking-[0.18em] uppercase font-bold px-2 py-0.5"
              style={{ background: tagColor, color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
            >
              {video.tag}
            </span>
          </div>
          <h3
            className="leading-snug mb-1.5 group-hover:text-[#8b1a1a] transition-colors line-clamp-2"
            style={{
              fontFamily: "'Times New Roman', Georgia, serif",
              fontSize: "15px",
              color: "#1a0a0a",
              fontWeight: 700,
            }}
          >
            {video.title}
          </h3>
          <div
            className="text-[10px]"
            style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
          >
            {video.channel} · {video.views} · {video.date}
          </div>
        </div>

        {/* Index number */}
        <div
          className="flex-shrink-0 text-3xl font-bold leading-none"
          style={{ color: "#e8ddd0", fontFamily: "'Times New Roman', Georgia, serif" }}
        >
          {String(index + 2).padStart(2, "0")}
        </div>
      </div>
    </a>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export function TopVideosSection() {
  const featured = TOP_VIDEOS[0]
  const rest = TOP_VIDEOS.slice(1)

  return (
    <section
      className="overflow-hidden"
      style={{ background: "#f5f0e8", borderTop: "1px solid #e8ddd0" }}
    >
      {/* Section masthead */}
      <div
        className="border-b-2"
        style={{ borderColor: "#8b1a1a" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-baseline justify-between flex-wrap gap-4">
          <div className="flex items-baseline gap-5">
            <svg
              className="w-5 h-5 flex-shrink-0 mb-0.5"
              fill="#8b1a1a"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
            <h2
              className="text-2xl font-bold"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#1a0a0a" }}
            >
              Watch & Learn
            </h2>
            <span
              className="text-[10px] tracking-[0.2em] uppercase text-[#8b6a6a]"
              style={{ fontFamily: "'Times New Roman', serif" }}
            >
              Deep-dive video analysis
            </span>
          </div>
          <a
            href="https://www.youtube.com/@upforge"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs tracking-widest uppercase text-[#8b1a1a] hover:text-[#6b1212] transition-colors font-semibold"
            style={{ fontFamily: "'Times New Roman', serif" }}
          >
            YouTube Channel →
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Featured video — full width */}
        <div className="mb-10">
          <VideoCard video={featured} index={0} featured />
        </div>

        {/* Rest — 2 column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {rest.map((video, i) => (
            <VideoCard key={video.youtubeId} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
