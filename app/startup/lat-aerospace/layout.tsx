// app/startup/lat-aerospace/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deepinder Goyal — LAT Aerospace Founder | Electric Regional Aviation India | UpForge",
  description: "Deepinder Goyal, founder of Zomato, is now building LAT Aerospace — India's electric short take-off aircraft startup for regional aviation. Full founder story, vision, and insights on UpForge.",
  keywords: ["LAT Aerospace", "Deepinder Goyal", "electric aircraft India", "regional aviation India", "India aerospace startup", "electric aviation startup", "short takeoff aircraft India", "UpForge startup profile"],
  alternates: { canonical: "https://upforge.in/startup/lat-aerospace" },
  openGraph: {
    title: "LAT Aerospace — Deepinder Goyal's Electric Aviation Bet | UpForge",
    description: "After Zomato, Deepinder Goyal is building electric aircraft for India's underconnected cities. Full story on UpForge.",
    url: "https://upforge.in/startup/lat-aerospace",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/lat-aerospace.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "LAT Aerospace — Deepinder Goyal Bets on Electric Aviation | UpForge",
    description: "India doesn't just need more airports. It needs a new way to fly. Deepinder Goyal's aerospace startup on UpForge.",
    images: ["https://upforge.in/og/lat-aerospace.png"],
  },
}

export default function LATAerospaceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
