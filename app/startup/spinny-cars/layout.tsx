// app/startup/spinny-cars/layout.tsx
// SERVER COMPONENT — metadata lives here, NOT in page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Niraj Singh — Spinny Founder | India's Trusted Used Car Unicorn | UpForge",
  description:
    "Spinny was founded in 2015 by Niraj Singh to fix India's broken used car market with full-stack quality assurance. From Gurgaon to a $1.8B unicorn backed by Tiger Global and General Atlantic — read the full founder story on UpForge.",
  keywords: [
    "Spinny founder", "Niraj Singh Spinny", "Spinny used cars",
    "Spinny valuation", "Spinny funding", "Spinny unicorn India",
    "used car startup India", "certified pre-owned cars India",
    "Tiger Global India startup", "General Atlantic India",
    "online used car platform India", "CarDekho competitor",
    "cars24 competitor India", "UpForge startup profile"
  ],
  alternates: { canonical: "https://upforge.in/startup/spinny-cars" },
  openGraph: {
    title: "Spinny — Niraj Singh | India's Trusted Used Car Unicorn | UpForge",
    description: "Fixing India's broken used car market — one transparent transaction at a time. Spinny founder story, $1.8B valuation, Tiger Global backing & insights on UpForge.",
    url: "https://upforge.in/startup/spinny-cars",
    siteName: "UpForge",
    images: [{ url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxhEGcchrkMFMKY10CKmOUHWAIo3T06-9dPA&s", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spinny — Niraj Singh's Mission to Fix India's Used Car Market | UpForge",
    description: "India's most trusted used car platform. $315M raised, $1.8B valuation, Tiger Global backed. Full founder story on UpForge.",
    images: ["https://upforge.in/og/spinny-cars.png"],
  },
}

export default function SpinnyCarsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
