// app/startup/oyo/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ritesh Agarwal — OYO Founder | World's Largest Hotel Chain Story | UpForge",
  description: "Ritesh Agarwal founded OYO at 19, making it one of the world's largest hotel chains. Full founder story, funding, valuation and global expansion on UpForge.",
  keywords: ['Ritesh Agarwal', 'OYO founder', 'OYO valuation', 'OYO Rooms India', 'youngest billionaire India', 'budget hotel startup India', 'OYO global expansion', 'UpForge startup profile'],
  alternates: { canonical: "https://upforge.in/startup/oyo" },
  openGraph: {
    title: "OYO — Ritesh Agarwal | UpForge",
    description: "Ritesh Agarwal founded OYO at 19, making it one of the world's largest hotel chains. Full founder story, funding, valuation and global expansion on UpForge.",
    url: "https://upforge.in/startup/oyo",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/oyo.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "OYO — Ritesh Agarwal | UpForge",
    description: "Ritesh Agarwal founded OYO at 19, making it one of the world's largest hotel chains. Full founder story, funding, valuation and global expansion on UpForge.",
    images: ["https://upforge.in/og/oyo.png"],
  },
}

export default function OYOLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
