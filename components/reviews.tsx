"use client"

// components/reviews.tsx
// ─────────────────────────────────────────────────────────────────────────────
// STANDALONE REVIEWS COMPONENT — update this file independently at any time.
// Reviews data is hardcoded here for now. To update: just edit the `reviews`
// array below. Later you can swap to a Supabase fetch without changing the UI.
// ─────────────────────────────────────────────────────────────────────────────

import { useState } from "react"

export interface Review {
  id: string
  author: string
  role: string
  location: string
  avatar: string // initials or emoji
  rating: number // 1-5
  text: string
  date: string
  verified: boolean
}

// ── EDIT THIS ARRAY to add/update/remove reviews anytime ─────────────────────
export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Arjun Mehta",
    role: "Startup Founder",
    location: "Bangalore",
    avatar: "AM",
    rating: 5,
    text: "UpForge gave our startup instant credibility. The UFRN number is now on our pitch deck — investors recognize it. Getting listed was the easiest thing we did this quarter.",
    date: "2026-03-15",
    verified: true,
  },
  {
    id: "r2",
    author: "Priya Krishnan",
    role: "VC Analyst",
    location: "Mumbai",
    avatar: "PK",
    rating: 5,
    text: "We use UpForge to verify startups before first meetings. The data accuracy is impressive — we've stopped using 3 other databases since discovering this platform.",
    date: "2026-03-20",
    verified: true,
  },
  {
    id: "r3",
    author: "Sahil Taneja",
    role: "Entrepreneur",
    location: "Delhi NCR",
    avatar: "ST",
    rating: 5,
    text: "The Founder Chronicle is genuinely the best content about Indian startups. Not PR fluff — real lessons, real numbers. I share it with my entire founder network.",
    date: "2026-02-28",
    verified: true,
  },
  {
    id: "r4",
    author: "Meera Nair",
    role: "Angel Investor",
    location: "Hyderabad",
    avatar: "MN",
    rating: 5,
    text: "What Crunchbase charges thousands for, UpForge does better and free. The Indian startup ecosystem finally has an independent, trustworthy registry.",
    date: "2026-03-10",
    verified: true,
  },
  {
    id: "r5",
    author: "Rohan Das",
    role: "Product Manager → Founder",
    location: "Pune",
    avatar: "RD",
    rating: 5,
    text: "I read 3 founder stories on UpForge before quitting my PM job to build my own startup. The research depth is unmatched. This is the Bloomberg of Indian startups.",
    date: "2026-03-18",
    verified: true,
  },
  {
    id: "r6",
    author: "Fatima Sheikh",
    role: "MBA Student",
    location: "IIM Ahmedabad",
    avatar: "FS",
    rating: 5,
    text: "Used UpForge for my thesis on Indian unicorns. The data is cited, verified, and up-to-date. My professor asked me where I found such clean data — the answer is UpForge.",
    date: "2026-02-14",
    verified: true,
  },
]

// ── GOOGLE FORM LINK — replace with your actual Google Form URL ───────────────
export const GOOGLE_REVIEW_FORM_URL =
  "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"

// ─────────────────────────────────────────────────────────────────────────────

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review, index }: { review: Review; index: number }) {
  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-emerald-500 to-teal-600",
    "from-violet-500 to-purple-600",
    "from-orange-500 to-amber-600",
    "from-rose-500 to-pink-600",
    "from-cyan-500 to-blue-600",
  ]
  const grad = gradients[index % gradients.length]

  return (
    <div
      className="review-card group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {/* Verified badge */}
      {review.verified && (
        <div className="absolute top-4 right-4 flex items-center gap-1 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-0.5 rounded-full">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
          Verified
        </div>
      )}

      {/* Rating */}
      <StarRating rating={review.rating} />

      {/* Review text */}
      <p className="text-gray-700 text-sm leading-relaxed flex-1">"{review.text}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-gray-50">
        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${grad} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
          {review.avatar}
        </div>
        <div>
          <div className="font-semibold text-gray-900 text-sm">{review.author}</div>
          <div className="text-gray-500 text-xs">{review.role} · {review.location}</div>
        </div>
      </div>
    </div>
  )
}

// ── GOOGLE FORM POPUP MODAL ───────────────────────────────────────────────────
function ReviewFormModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden animate-slideUp z-10">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            <h3 className="text-xl font-bold text-gray-900">Share Your Experience</h3>
            <p className="text-sm text-gray-500 mt-0.5">Help founders trust UpForge with your honest review</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
            aria-label="Close"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Embedded Google Form */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={GOOGLE_REVIEW_FORM_URL}
            className="w-full h-full min-h-[500px]"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Submit your review"
          >
            Loading form...
          </iframe>
        </div>
      </div>
    </div>
  )
}

// ── MAIN EXPORT ───────────────────────────────────────────────────────────────
export function ReviewsSection() {
  const [showForm, setShowForm] = useState(false)

  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1)

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
        backgroundSize: "40px 40px"
      }} />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 text-xs font-bold px-4 py-2 rounded-full mb-6 tracking-wider uppercase">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Founder Reviews
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight mb-4">
            Trusted by the ecosystem
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            From first-time founders to seasoned VCs — here's what the community says.
          </p>

          {/* Aggregate rating */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="text-5xl font-black text-gray-900">{avgRating}</div>
            <div>
              <StarRating rating={5} />
              <div className="text-sm text-gray-500 mt-1">{REVIEWS.length} verified reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={review.id} review={review} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">Had a great experience? Let the world know.</p>
          <button
            onClick={() => setShowForm(true)}
            className="inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-gray-900/20"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
            Submit Your Review
          </button>
        </div>
      </div>

      {/* Modal */}
      {showForm && <ReviewFormModal onClose={() => setShowForm(false)} />}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease; }
        .animate-slideUp { animation: slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
        .review-card { animation: fadeIn 0.5s ease both; }
      `}</style>
    </section>
  )
}
