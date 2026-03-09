// app/startup/ola/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bhavish Aggarwal — Ola Founder | India's EV & Ride-Hailing Giant | UpForge",
  description: "Bhavish Aggarwal co-founded Ola in 2010 after a bad taxi experience. Now building Ola Electric with India's first gigafactory. Full founder story, funding, and EV strategy on UpForge.",
  keywords: ['Bhavish Aggarwal', 'Ola founder', 'Ola Electric', 'Ola cabs India', 'Ola valuation', 'India EV startup', 'Ola gigafactory', 'ride hailing India', 'UpForge startup profile'],
  alternates: { canonical: "https://upforge.in/startup/ola" },
  openGraph: {
    title: "Ola — Bhavish Aggarwal | UpForge",
    description: "Bhavish Aggarwal co-founded Ola in 2010 after a bad taxi experience. Now building Ola Electric with India's first gigafactory. Full founder story, funding, and EV strategy on UpForge.",
    url: "https://upforge.in/startup/ola",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/ola.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ola — Bhavish Aggarwal | UpForge",
    description: "Bhavish Aggarwal co-founded Ola in 2010 after a bad taxi experience. Now building Ola Electric with India's first gigafactory. Full founder story, funding, and EV strategy on UpForge.",
    images: ["https://upforge.in/og/ola.png"],
  },
}

export default function OlaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
