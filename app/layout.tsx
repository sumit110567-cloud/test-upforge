import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ClientLayout } from "@/components/client-layout"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.upforge.in"),

  title: {
    default: "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge",
    template: "%s | UpForge",
  },

  description:
    "10 verified stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda. Independent startup registry. March 2026.",

  keywords: [
    "Indian startup founder stories 2026",
    "startup founders India",
    "Indian entrepreneur success story",
    "Aadit Palicha Zepto founder",
    "Alakh Pandey PhysicsWallah founder",
    "Deepinder Goyal Zomato founder",
    "Nithin Kamath Zerodha founder",
    "Falguni Nayar Nykaa founder",
    "Ritesh Agarwal OYO founder",
    "Bhavish Aggarwal Ola founder",
    "Kunal Shah CRED founder",
    "Vijay Shekhar Sharma Paytm founder",
    "Indian startup database",
    "startup registry India",
    "verified Indian startups",
    "Indian unicorns 2026",
    "startup funding India",
    "list your startup India",
    "startup ecosystem India"
  ].join(", "),

  authors: [{ name: "UpForge Editorial", url: "https://www.upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business",

  alternates: {
    canonical: "https://www.upforge.in",
    languages: { "en-IN": "https://www.upforge.in" },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.upforge.in",
    siteName: "UpForge",
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge",
    description:
      "10 verified stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa and more.",
    images: [
      {
        url: "/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "The Founder Chronicle — India's Greatest Startup Founders 2026 | UpForge",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "The Founder Chronicle — India's Top Startup Founders 2026 | UpForge",
    description:
      "10 verified founder stories — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm.",
    images: ["/og/founder-chronicle.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  other: {
    "theme-color": "#F3EFE5",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.upforge.in/#website",
  url: "https://www.upforge.in",
  name: "UpForge",
  description:
    "India's independent startup registry — verified founder profiles and startup data.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.upforge.in/#organization",
    name: "UpForge",
    url: "https://www.upforge.in",
    logo: {
      "@type": "ImageObject",
      url: "https://www.upforge.in/logo.png",
    },
  },
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.upforge.in/startup?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
