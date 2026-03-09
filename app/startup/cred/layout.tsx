// app/startup/cred/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kunal Shah — CRED Founder | India's $6B Premium Fintech | UpForge",
  description: "Kunal Shah sold FreeCharge for $400M then built CRED — India's $6B fintech unicorn for creditworthy users. Full founder story, philosophy, and strategy on UpForge.",
  keywords: ['Kunal Shah', 'CRED founder', 'CRED valuation', 'FreeCharge Snapdeal acquisition', 'CRED app India', 'fintech unicorn India', 'premium fintech India', 'UpForge startup profile'],
  alternates: { canonical: "https://upforge.in/startup/cred" },
  openGraph: {
    title: "CRED — Kunal Shah | UpForge",
    description: "Kunal Shah sold FreeCharge for $400M then built CRED — India's $6B fintech unicorn for creditworthy users. Full founder story, philosophy, and strategy on UpForge.",
    url: "https://upforge.in/startup/cred",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/cred.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "CRED — Kunal Shah | UpForge",
    description: "Kunal Shah sold FreeCharge for $400M then built CRED — India's $6B fintech unicorn for creditworthy users. Full founder story, philosophy, and strategy on UpForge.",
    images: ["https://upforge.in/og/cred.png"],
  },
}

export default function CREDLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
