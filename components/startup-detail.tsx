"use client"

import React, { useRef, useState, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Startup } from "@/types/startup"
import {
  ArrowLeft,
  Download,
  CheckCircle2,
  ExternalLink,
  Globe,
  MapPin,
  Calendar,
  Building2,
  Tag,
} from "lucide-react"
import { Button } from "@/components/ui/button"

type RelatedStartup = Pick<
  Startup,
  "name" | "slug" | "description" | "logo_url" | "category"
>

interface StartupDetailProps {
  startup: Startup
  relatedStartups: RelatedStartup[]
  profileUrl: string
}

function getCleanUrl(url?: string | null): string | null {
  if (!url) return null
  const formatted = /^https?:\/\//i.test(url.trim())
    ? url.trim()
    : "https://" + url.trim()
  try {
    new URL(formatted)
    return formatted
  } catch {
    return null
  }
}

function getCategorySlug(category?: string | null): string | null {
  if (!category) return null
  return category.toLowerCase().replace(/\s+/g, "-")
}

function getCitySlug(city?: string | null): string | null {
  if (!city) return null
  return city.toLowerCase().replace(/\s+/g, "-")
}

function getVerificationCode(name: string, id: string): string {
  const prefix = name.replace(/[^a-zA-Z]/g, "").slice(0, 3).toUpperCase()
  const suffix = id.replace(/-/g, "").slice(-5).toUpperCase()
  return "UPF-" + prefix + "-" + suffix
}

function StartupLogo({
  name,
  logo_url,
  size,
  className,
}: {
  name: string
  logo_url?: string | null
  size: number
  className?: string
}) {
  if (logo_url) {
    return (
      <Image
        src={logo_url}
        alt={name + " logo"}
        width={size}
        height={size}
        className={"object-contain " + (className || "")}
      />
    )
  }
  return (
    <span className="text-2xl font-semibold text-slate-400" aria-hidden="true">
      {name.charAt(0).toUpperCase()}
    </span>
  )
}

function RelatedStartupCard({ startup }: { startup: RelatedStartup }) {
  return (
    <Link
      href={"/startup/" + startup.slug}
      className="group flex items-start gap-4 p-4 border border-slate-100 rounded-lg hover:border-slate-300 hover:bg-slate-50 transition-all duration-150"
    >
      <div className="h-10 w-10 rounded-lg border border-slate-100 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden">
        <StartupLogo
          name={startup.name}
          logo_url={startup.logo_url}
          size={40}
          className="p-1"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-slate-900 group-hover:underline truncate">
          {startup.name}
        </p>
        {startup.category && (
          <p className="text-xs text-slate-500 mt-0.5">{startup.category}</p>
        )}
        {startup.description && (
          <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
            {startup.description}
          </p>
        )}
      </div>
    </Link>
  )
}

export function StartupDetail({
  startup,
  relatedStartups,
  profileUrl,
}: StartupDetailProps) {
  const posterRef = useRef<HTMLDivElement>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const websiteUrl       = getCleanUrl(startup.website)
  const categorySlug     = getCategorySlug(startup.category)
  const citySlug         = getCitySlug(startup.city)
  const verificationCode = getVerificationCode(startup.name, startup.id)

  const handleDownload = useCallback(async function() {
    if (!posterRef.current || isGenerating) return
    setIsGenerating(true)
    try {
      const [{ toBlob }, { saveAs }] = await Promise.all([
        import("html-to-image"),
        import("file-saver"),
      ])
      const blob = await toBlob(posterRef.current, {
        cacheBust: true,
        backgroundColor: "#ffffff",
        pixelRatio: 3,
      })
      if (!blob) throw new Error("toBlob returned null")
      saveAs(blob, startup.name + "-UpForge-Recognition.png")
    } catch (err) {
      console.error("[StartupDetail] Poster generation failed:", err)
    } finally {
      setIsGenerating(false)
    }
  }, [isGenerating, startup.name])

  return (
    <div className="min-h-screen bg-white text-slate-900">

      {/* HIDDEN POSTER */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: 0, pointerEvents: "none" }}
      >
        <div
          ref={posterRef}
          style={{
            width: 1080,
            height: 1080,
            backgroundColor: "#ffffff",
            padding: 80,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            color: "#1e293b",
            fontFamily: "Georgia, serif",
          }}
        >
          <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 28, fontWeight: 900, letterSpacing: "-0.04em" }}>
              UP<span style={{ color: "#94a3b8" }}>FORGE</span>
            </span>
            <span style={{ fontSize: 13, color: "#64748b" }}>www.upforge.in</span>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: 13, color: "#94a3b8", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 32 }}>
              Verified Indian Startup
            </p>
            <h1 style={{ fontSize: 48, fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 24 }}>
              {startup.name}
            </h1>
            {startup.category && (
              <p style={{ fontSize: 18, color: "#64748b", marginBottom: 24 }}>
                {startup.category}
              </p>
            )}
            <p style={{ fontSize: 15, color: "#94a3b8", maxWidth: 600, margin: "0 auto", lineHeight: 1.7 }}>
              {startup.description || "Recognized as a Promising Startup within the UpForge Institutional Network."}
            </p>
          </div>
          <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 24, display: "flex", justifyContent: "space-between", fontSize: 13, color: "#94a3b8" }}>
            <span>{"upforge.in/startup/" + startup.slug}</span>
            <span>{"Verification: " + verificationCode}</span>
          </div>
        </div>
      </div>

      {/* BACK NAV */}
      <div className="border-b bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">
          <Link
            href="/startup"
            className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Startup Registry</span>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            disabled={isGenerating}
            aria-label={isGenerating ? "Generating poster" : "Download recognition poster"}
          >
            <Download className="mr-2 h-3.5 w-3.5" aria-hidden="true" />
            {isGenerating ? "Generating" : "Download"}
          </Button>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="border-b bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 h-10 flex items-center">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-xs text-slate-500">
              <li>
                <Link href="/" className="hover:text-slate-900 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">/</li>
              <li>
                <Link href="/startup" className="hover:text-slate-900 transition-colors">
                  Startup Registry
                </Link>
              </li>
              {startup.category && categorySlug && (
                <React.Fragment>
                  <li aria-hidden="true" className="text-slate-300">/</li>
                  <li>
                    <Link
                      href={"/startups/" + categorySlug}
                      className="hover:text-slate-900 transition-colors"
                    >
                      {startup.category}
                    </Link>
                  </li>
                </React.Fragment>
              )}
              <li aria-hidden="true" className="text-slate-300">/</li>
              <li className="text-slate-900 font-medium truncate max-w-[200px]">
                {startup.name}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* MAIN */}
      <main className="max-w-6xl mx-auto px-6 py-12" id="main-content">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-8">

            {/* Logo + Name + Location */}
            <div className="flex items-start gap-6">
              <div className="h-20 w-20 rounded-xl border border-slate-200 bg-white flex items-center justify-center flex-shrink-0 overflow-hidden shadow-sm">
                <StartupLogo
                  name={startup.name}
                  logo_url={startup.logo_url}
                  size={80}
                  className="p-3"
                />
              </div>
              <div>
                <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
                  {startup.name}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
                  {startup.city && citySlug ? (
                    <Link
                      href={"/startups/" + citySlug}
                      className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{startup.city + ", India"}</span>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-1.5 text-sm text-slate-500">
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      India
                    </span>
                  )}
                  {startup.category && categorySlug && (
                    <Link
                      href={"/startups/" + categorySlug}
                      className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-900 transition-colors"
                    >
                      <Tag className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{startup.category}</span>
                    </Link>
                  )}
                  {startup.founded_year && (
                    <span className="flex items-center gap-1.5 text-sm text-slate-500">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {"Est. " + startup.founded_year}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            {startup.description && (
              <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                {startup.description}
              </p>
            )}

            {/* External website link */}
            {websiteUrl && (
              <a
                href={websiteUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 border border-slate-200 rounded-lg px-4 py-2.5 hover:bg-slate-50 hover:border-slate-400 transition-all duration-150"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
                <span>Visit Official Website</span>
                <ExternalLink className="h-3.5 w-3.5 opacity-40" aria-hidden="true" />
              </a>
            )}

            {/* Founders */}
            {startup.founders && (
              <div className="border-t border-slate-100 pt-8">
                <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-widest mb-4">
                  Founders
                </h2>
                <p className="text-base text-slate-700 leading-relaxed">
                  {startup.founders}
                </p>
              </div>
            )}

            {/* Related Startups */}
            {relatedStartups.length > 0 && (
              <div className="border-t border-slate-100 pt-8">
                <div className="flex items-center justify-between mb-5">
                  <h2 className="text-sm font-semibold text-slate-900 uppercase tracking-widest">
                    Related Startups
                    {startup.category && (
                      <span className="ml-2 text-slate-400 normal-case tracking-normal font-normal">
                        {"in " + startup.category}
                      </span>
                    )}
                  </h2>
                  {categorySlug && (
                    <Link
                      href={"/startups/" + categorySlug}
                      className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1"
                    >
                      View all
                      <ExternalLink className="h-3 w-3" aria-hidden="true" />
                    </Link>
                  )}
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {relatedStartups.map(function(related) {
                    return (
                      <RelatedStartupCard key={related.slug} startup={related} />
                    )
                  })}
                </div>
              </div>
            )}

          </div>

          {/* RIGHT COLUMN */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-4">

              {/* Verification Card */}
              <div className="border border-slate-200 rounded-xl p-6 space-y-5 bg-white shadow-sm">

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-50 border border-green-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-5 w-5 text-green-600" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Verified Profile</p>
                    <p className="text-xs text-slate-500">UpForge Registry</p>
                  </div>
                </div>

                <div className="border-t border-slate-100 pt-4 space-y-3">

                  {startup.category && (
                    <div className="flex items-center gap-3 text-sm">
                      <Building2 className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      {categorySlug ? (
                        <Link
                          href={"/startups/" + categorySlug}
                          className="text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                        >
                          {startup.category}
                        </Link>
                      ) : (
                        <span className="text-slate-700">{startup.category}</span>
                      )}
                    </div>
                  )}

                  {startup.founded_year && (
                    <div className="flex items-center gap-3 text-sm">
                      <Calendar className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                      <span className="text-slate-700">{"Est. " + startup.founded_year}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 text-sm">
                    <MapPin className="h-4 w-4 text-slate-400 flex-shrink-0" aria-hidden="true" />
                    {startup.city && citySlug ? (
                      <Link
                        href={"/startups/" + citySlug}
                        className="text-slate-700 hover:text-slate-900 hover:underline transition-colors"
                      >
                        {startup.city + ", India"}
                      </Link>
                    ) : (
                      <span className="text-slate-700">India</span>
                    )}
                  </div>

                </div>

                <div className="border-t border-slate-100 pt-4">
                  <p className="text-xs text-slate-400 font-mono">{verificationCode}</p>
                </div>

                <Link
                  href="/contact"
                  className="block text-center text-xs text-slate-400 hover:text-slate-600 hover:underline transition-colors"
                >
                  Report incorrect information
                </Link>

              </div>

              {/* Category CTA */}
              {startup.category && categorySlug && (
                <div className="border border-slate-100 rounded-xl p-5 bg-slate-50">
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-3">
                    Explore Category
                  </p>
                  <Link
                    href={"/startups/" + categorySlug}
                    className="flex items-center justify-between group"
                  >
                    <span className="text-sm font-semibold text-slate-900 group-hover:underline">
                      {startup.category + " Startups in India"}
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" aria-hidden="true" />
                  </Link>
                </div>
              )}

            </div>
          </div>

        </div>
      </main>

      {/* BOTTOM INTERNAL LINKS */}
      <footer className="border-t border-slate-100 bg-slate-50 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav aria-label="Explore more startups">
            <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold mb-4">
              Explore UpForge Registry
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li>
                <Link
                  href="/startup"
                  className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                >
                  All Indian Startups
                </Link>
              </li>
              {categorySlug && startup.category && (
                <li>
                  <Link
                    href={"/startups/" + categorySlug}
                    className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                  >
                    {startup.category + " Startups"}
                  </Link>
                </li>
              )}
              {citySlug && startup.city && (
                <li>
                  <Link
                    href={"/startups/" + citySlug}
                    className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                  >
                    {"Startups in " + startup.city}
                  </Link>
                </li>
              )}
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                >
                  Startup Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/submit"
                  className="text-sm text-slate-600 hover:text-slate-900 hover:underline transition-colors"
                >
                  Submit Your Startup
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>

    </div>
  )
}
