// app/startup/internadda/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Lucky Tiwari — InternAdda Founder | India's Student Career Platform | UpForge",
  description: "Lucky Tiwari founded InternAdda to connect Indian students with internships, startups, and real career opportunities. Full founder story and platform vision on UpForge.",
  keywords: ['InternAdda', 'Lucky Tiwari', 'India internship platform', 'student career platform India', 'startup internships India', 'InternAdda founder', 'career opportunities students India', 'UpForge startup profile'],
  alternates: { canonical: "https://upforge.in/startup/internadda" },
  openGraph: {
    title: "InternAdda — Lucky Tiwari | UpForge",
    description: "Lucky Tiwari founded InternAdda to connect Indian students with internships, startups, and real career opportunities. Full founder story and platform vision on UpForge.",
    url: "https://upforge.in/startup/internadda",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/internadda.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "InternAdda — Lucky Tiwari | UpForge",
    description: "Lucky Tiwari founded InternAdda to connect Indian students with internships, startups, and real career opportunities. Full founder story and platform vision on UpForge.",
    images: ["https://upforge.in/og/internadda.png"],
  },
}

export default function InternAddaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
