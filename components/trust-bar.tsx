// components/trust-bar.tsx
"use client"

import React from "react"

export function TrustBar() {
  const trustItems = [
    "🇮🇳 5000+ Verified Startups",
    "🌍 50+ Countries",
    "✅ UFRN Certified",
    "🔍 Free to Search",
    "📊 Real Funding Data",
    "🏆 India's #1 Registry",
    "🔐 Manually Verified",
    "📈 Updated Daily",
    "🌍 Global Reach",
    "🇮🇳 5000+ Verified Startups",
    "✅ UFRN Certified",
    "📊 Real Funding Data",
  ]

  return (
    <div className="bg-white border-y border-gray-100 py-6 overflow-hidden">
      <div className="flex gap-12 animate-marquee whitespace-nowrap items-center">
        {trustItems.map((item, i) => (
          <span key={i} className="text-sm font-semibold text-gray-500 flex items-center gap-2 flex-shrink-0">
            {item}
            <span className="w-1 h-1 rounded-full bg-gray-300 ml-6" />
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { 
          animation: marquee 30s linear infinite; 
        }
      `}</style>
    </div>
  )
}
