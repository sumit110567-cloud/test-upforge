// app/startup/zomato/layout.tsx
// SERVER COMPONENT — metadata lives here, NOT in page.tsx

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Deepinder Goyal — Zomato / Eternal Founder | India's $25B FoodTech Empire | UpForge",
  description:
    "Deepinder Goyal built Zomato from a free menu digitisation project into India's most valuable food-tech and quick commerce company. Now rebranded as Eternal with Blinkit, Hyperpure & District. Full founder story, funding, and IPO details on UpForge.",
  keywords: [
    "Deepinder Goyal", "Zomato founder", "Eternal company India",
    "Zomato valuation 2025", "Blinkit founder", "Zomato IPO",
    "food delivery India unicorn", "quick commerce Blinkit",
    "Zomato Eternal rebranding", "FoodTech India",
    "Zomato story India", "UpForge startup profile"
  ],
  alternates: { canonical: "https://upforge.in/startup/zomato" },
  openGraph: {
    title: "Deepinder Goyal — Zomato / Eternal | India's $25B FoodTech Giant | UpForge",
    description: "A free side project digitising canteen menus at Bain & Company became India's largest food delivery and quick commerce empire. Deepinder Goyal's full founder story on UpForge.",
    url: "https://upforge.in/startup/zomato",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og/zomato.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepinder Goyal — How Zomato Became India's $25B Food & Commerce Giant | UpForge",
    description: "From digitising canteen menus to IPO to Eternal — the full Zomato story on UpForge.",
    images: ["https://upforge.in/og/zomato.png"],
  },
}

export default function ZomatoLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
