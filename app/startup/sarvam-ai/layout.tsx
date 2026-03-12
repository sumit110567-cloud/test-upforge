// app/startup/sarvam-ai/layout.tsx
// SERVER COMPONENT — metadata lives here, NOT in page.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vivek Raghavan & Pratyush Kumar — Sarvam AI Founders | India's Own LLM | UpForge",
  description:
    "Sarvam AI is building India's sovereign large language models for Hindi, Tamil, Telugu and 20+ Indian languages. Co-founders Vivek Raghavan & Pratyush Kumar raised $70M+. Read the full founder story on UpForge.",
  keywords: [
    "Sarvam AI founder", "Vivek Raghavan", "Pratyush Kumar", "India AI startup",
    "Indian LLM", "Bharat AI model", "Sarvam AI funding", "Indian language AI",
    "sovereign AI India", "AI unicorn India 2025", "Sarvam AI $1 billion",
    "AI4Bharat", "UpForge startup profile"
  ],
  alternates: { canonical: "https://upforge.in/startup/sarvam-ai" },
  openGraph: {
    title: "Sarvam AI — India's Own LLM | Vivek Raghavan & Pratyush Kumar | UpForge",
    description: "Building AI infrastructure for India's 1.4 billion people — in their own languages. Sarvam AI founder story, funding, valuation & insights on UpForge.",
    url: "https://upforge.in/startup/sarvam-ai",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/sarvam-ai.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarvam AI — Vivek Raghavan's Mission to Build India's Own AI | UpForge",
    description: "India's sovereign LLM story — $70M raised, 22 Indian languages, and a vision bigger than GPT. Full profile on UpForge.",
    images: ["https://upforge.in/og/sarvam-ai.png"],
  },
}

export default function SarvamAILayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
