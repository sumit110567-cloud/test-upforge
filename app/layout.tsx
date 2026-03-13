// app/layout.tsx
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

// Viewport settings for better mobile SEO
export const viewport: Viewport = {
  themeColor: "#F3EFE5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  // Sabhi links ko 'www' par force karne ke liye
  metadataBase: new URL("https://www.upforge.in"),

title: {
    default: "The Founder Chronicle | India's Startup Registry 2026",
    template: "%s | UpForge",
  },

 description: "Verified stories of India's top startup founders including Zepto, Zomato, and Zerodha. Explore the 2026 edition of The Founder Chronicle.",
  keywords: [
    "Indian startup founders",
    "Indian entrepreneurs 2026",
    "Zepto founder Aadit Palicha",
    "Lucky Tiwari InternAdda",
    "Alakh Pandey PhysicsWallah",
    "Deepinder Goyal Zomato",
    "Nithin Kamath Zerodha",
    "Indian unicorn database",
    "startup registry India",
    "verified startup stories",
    "Indian deep-tech startups",
  ],

  authors: [{ name: "UpForge Editorial", url: "https://www.upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business",

  // Canonical error fix: Explicitly using 'www' version
  alternates: {
    canonical: "https://www.upforge.in",
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },

  manifest: "https://www.upforge.in/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.upforge.in",
    siteName: "UpForge",
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026",
    description: "Explore verified founder stories behind India's most influential and consequential startups.",
    images: [
      {
        url: "/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "UpForge Founder Chronicle 2026",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "India's Top Startup Founders | UpForge Chronicle",
    description: "Verified stories of India's top builders: Zepto, Zomato, Zerodha, InternAdda and more.",
    images: ["/og/founder-chronicle.png"],
  },

  // Advanced Robots rules to help indexing
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

/* UPDATED STRUCTURED DATA WITH WWW CONSISTENCY */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.upforge.in/#organization",
      "name": "UpForge",
      "url": "https://www.upforge.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/logo.png",
      },
      "sameAs": ["https://twitter.com/upforge_in"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.upforge.in/#website",
      "url": "https://www.upforge.in",
      "name": "UpForge",
      "publisher": {
        "@id": "https://www.upforge.in/#organization",
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.upforge.in/startup?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-IN" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
