// app/startup/paytm/layout.tsx
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Vijay Shekhar Sharma — Paytm Founder | India's Digital Payments Pioneer | UpForge",
  description: "Vijay Shekhar Sharma founded Paytm in 2010, building India's largest digital wallet. Paytm IPO 2021, demonetisation growth, and the full founder story on UpForge.",
  keywords: ['Vijay Shekhar Sharma', 'Paytm founder', 'Paytm IPO', 'India digital payments', 'Paytm demonetisation', 'Paytm valuation', 'One97 Communications', 'India fintech unicorn', 'UpForge startup profile'],
  alternates: { canonical: "https://upforge.in/startup/paytm" },
  openGraph: {
    title: "Paytm — Vijay Shekhar Sharma | UpForge",
    description: "Vijay Shekhar Sharma founded Paytm in 2010, building India's largest digital wallet. Paytm IPO 2021, demonetisation growth, and the full founder story on UpForge.",
    url: "https://upforge.in/startup/paytm",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/paytm.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paytm — Vijay Shekhar Sharma | UpForge",
    description: "Vijay Shekhar Sharma founded Paytm in 2010, building India's largest digital wallet. Paytm IPO 2021, demonetisation growth, and the full founder story on UpForge.",
    images: ["https://upforge.in/og/paytm.png"],
  },
}

export default function PaytmLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
