"use client"
// components/top-videos.tsx — AUTO-FETCH YOUTUBE v3
// Give only a YouTube ID → auto-fetches title, thumbnail, channel via oEmbed API
// No manual title/thumbnail entry needed — fully automated
// FT/Economist editorial aesthetic

import { useState, useEffect } from "react"

// ── ONLY SET THESE — everything else auto-fetches ─────────────────────────────
export const YOUTUBE_IDS: { id: string; tag: string; date: string }[] = [
  { id: "nNxh7PQOcnM", tag: "Operations", date: "2 April 2026" },
  { id: "3fumBcKC6RE", tag: "Growth", date: "28 March 2026" },
  { id: "5qap5aO4i9A", tag: "Strategy", date: "22 March 2026" },
  { id: "jNQXAC9IVRw", tag: "D2C", date: "15 March 2026" },
  { id: "M7FIvfx5J10", tag: "Edtech", date: "8 March 2026" },
  { id: "LXb3EKWsInQ", tag: "Commerce", date: "1 March 2026" },
]

const TAG_COLORS: Record<string, string> = {
  Operations: "#8b1a1a",
  Growth: "#1a3d5c",
  Strategy: "#2d5a1a",
  D2C: "#5a3d1a",
  Edtech: "#3d1a5a",
  Commerce: "#5a4d1a",
}

interface VideoMeta {
  id: string
  title: string
  author: string // channel name
  thumbnail: string
  tag: string
  date: string
  loaded: boolean
  error: boolean
}

// YouTube oEmbed gives us title + author_name + thumbnail_url for free
async function fetchYouTubeMeta(id: string): Promise<{ title: string; author: string; thumbnail: string }> {
  try {
    const res = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${id}&format=json`
    )
    if (!res.ok) throw new Error("oEmbed failed")
    const data = await res.json()
    return {
      title: data.title ?? "Untitled",
      author: data.author_name ?? "UpForge",
      // Use maxresdefault for HD, fallback to hqdefault
      thumbnail: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    }
  } catch {
    return {
      title: "UpForge Video",
      author: "UpForge",
      thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    }
  }
}

// ─────────────────────────────────────────────────────────────────────────────

function VideoSkeleton({ featured }: { featured?: boolean }) {
  if (featured) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="animate-pulse bg-[#e8ddd0]" style={{ aspectRatio: "16/9" }} />
        <div className="flex flex-col gap-4 justify-center">
          <div className="h-6 bg-[#e8ddd0] animate-pulse rounded w-3/4" />
          <div className="h-4 bg-[#e8ddd0] animate-pulse rounded w-full" />
          <div className="h-4 bg-[#e8ddd0] animate-pulse rounded w-5/6" />
        </div>
      </div>
    )
  }
  return (
    <div className="flex gap-4 py-6 border-b" style={{ borderColor: "#e8ddd0" }}>
      <div className="flex-shrink-0 animate-pulse bg-[#e8ddd0]" style={{ width: 140, aspectRatio: "16/9" }} />
      <div className="flex-1 flex flex-col gap-2 justify-center">
        <div className="h-4 bg-[#e8ddd0] animate-pulse rounded w-3/4" />
        <div className="h-3 bg-[#e8ddd0] animate-pulse rounded w-1/2" />
      </div>
    </div>
  )
}

function FeaturedVideoCard({ video }: { video: VideoMeta }) {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const tagColor = TAG_COLORS[video.tag] ?? "#8b1a1a"
  const href = `https://www.youtube.com/watch?v=${video.id}`

  if (!video.loaded) return <VideoSkeleton featured />

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block pb-8 mb-0 border-b-2"
      style={{ borderColor: "#8b1a1a" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Thumbnail */}
        <div
          className="relative overflow-hidden"
          style={{ aspectRatio: "16/9", background: "#2a1010" }}
        >
          {!imgFailed ? (
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: hovered ? "scale(1.04)" : "scale(1)" }}
              onError={() => setImgFailed(true)}
            />
          ) : (
            <img
              src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
              alt={video.title}
              className="w-full h-full object-cover"
            />
          )}

          {/* Play overlay */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              background: `rgba(26,10,10,${hovered ? 0.35 : 0.22})`,
              transition: "background 0.2s",
            }}
          >
            <div
              className="w-16 h-16 flex items-center justify-center border-2 transition-all duration-200"
              style={{
                background: hovered ? "#8b1a1a" : "rgba(250,247,242,0.92)",
                borderColor: hovered ? "#8b1a1a" : "rgba(250,247,242,0.92)",
              }}
            >
              <svg className="w-7 h-7 ml-1" fill={hovered ? "#faf7f2" : "#8b1a1a"} viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
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
              fontSize: "clamp(18px, 2.5vw, 28px)",
              color: "#1a0a0a",
              fontWeight: 700,
            }}
          >
            {video.title}
          </h3>

          <div className="flex items-center justify-between mt-2">
            <span
              className="text-xs"
              style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
            >
              {video.author} · {video.date}
            </span>
            <span
              className="text-sm font-semibold flex items-center gap-1 transition-all group-hover:gap-2"
              style={{ fontFamily: "'Times New Roman', Georgia, serif", color: "#8b1a1a" }}
            >
              Watch →
            </span>
          </div>
        </div>
      </div>
    </a>
  )
}

function SecondaryVideoCard({ video, index }: { video: VideoMeta; index: number }) {
  const [hovered, setHovered] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const tagColor = TAG_COLORS[video.tag] ?? "#8b1a1a"
  const href = `https://www.youtube.com/watch?v=${video.id}`

  if (!video.loaded) return <VideoSkeleton />

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex gap-4 items-start py-6 border-b"
      style={{ borderColor: "#e8ddd0" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{ width: 148, aspectRatio: "16/9", background: "#2a1010" }}
      >
        {!imgFailed ? (
          <img
            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-300"
            style={{ transform: hovered ? "scale(1.05)" : "scale(1)" }}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center" style={{ background: "#2a1010" }}>
            <svg className="w-8 h-8" fill="#8b1a1a" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        )}

        {/* Play */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: "rgba(26,10,10,0.28)", opacity: hovered ? 1 : 0.6, transition: "opacity 0.2s" }}
        >
          <div className="w-8 h-8 flex items-center justify-center" style={{ background: "rgba(250,247,242,0.9)" }}>
            <svg className="w-4 h-4 ml-0.5" fill="#8b1a1a" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <div className="mb-1.5">
          <span
            className="text-[8px] tracking-[0.2em] uppercase font-bold px-2 py-0.5"
            style={{ background: tagColor, color: "#faf7f2", fontFamily: "'Times New Roman', serif" }}
          >
            {video.tag}
          </span>
        </div>
        <h3
          className="leading-snug mb-1.5 group-hover:text-[#8b1a1a] transition-colors line-clamp-2"
          style={{ fontFamily: "'Times New Roman', Georgia, serif", fontSize: 15, color: "#1a0a0a", fontWeight: 700 }}
        >
          {video.title}
        </h3>
        <div
          className="text-[10px]"
          style={{ fontFamily: "'Times New Roman', serif", color: "#8b6a6a" }}
        >
          {video.author} · {video.date}
        </div>
      </div>

      {/* Index */}
      <div
        className="flex-shrink-0 text-3xl font-bold leading-none"
        style={{ color: "#e8ddd0", fontFamily: "'Times New Roman', Georgia, serif" }}
      >
        {String(index + 2).padStart(2, "0")}
      </div>
    </a>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export function TopVideosSection() {
  const [videos, setVideos] = useState<VideoMeta[]>(
    YOUTUBE_IDS.map(({ id, tag, date }) => ({
      id, tag, date,
      title: "", author: "", thumbnail: "",
      loaded: false, error: false,
    }))
  )

  // Fetch metadata for all videos in parallel
  useEffect(() => {
    YOUTUBE_IDS.forEach(async ({ id }, i) => {
      try {
        const meta = await fetchYouTubeMeta(id)
        setVideos(prev => prev.map((v, vi) =>
          vi === i ? { ...v, ...meta, loaded: true } : v
        ))
      } catch {
        setVideos(prev => prev.map((v, vi) =>
          vi === i ? { ...v, loaded: true, error: true, title: "UpForge Video" } : v
        ))
      }
    })
  }, [])

  const featured = videos[0]
  const rest = videos.slice(1)

  return (
    <section
      className="overflow-hidden"
      style={{ background: "#f5f0e8", borderTop: "1px solid #e8ddd0" }}
    >
      {/* Masthead */}
      <div className="border-b-2" style={{ borderColor: "#8b1a1a" }}>
        <div className="max-w-[1400px] mx-auto px-6 py-5 flex items-baseline justify-between flex-wrap gap-4">
          <div className="flex items-baseline gap-5">
            <svg className="w-5 h-5 flex-shrink-0" fill="#8b1a1a" viewBox="0 0 24 24">
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
            className="text-xs tracking-widest uppercase font-semibold transition-colors hover:text-[#6b1212]"
            style={{ fontFamily: "'Times New Roman', serif", color: "#8b1a1a" }}
          >
            YouTube Channel →
          </a>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 py-10">
        {/* Featured */}
        <div className="mb-10">
          <FeaturedVideoCard video={featured} />
        </div>
        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10">
          {rest.map((video, i) => (
            <SecondaryVideoCard key={video.id} video={video} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
