// app/layout.tsx

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
    "Verified stories of India's most influential startup founders — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm and more. Independent startup registry by UpForge.",

  keywords: [
    "Indian startup founders",
    "startup founders India",
    "Indian entrepreneurs",
    "Zepto founder Aadit Palicha",
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
    "Indian unicorn founders",
    "startup ecosystem India",
  ].join(", "),

  authors: [{ name: "UpForge Editorial", url: "https://www.upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  category: "Business",

  alternates: {
    canonical: "https://www.upforge.in",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.upforge.in",
    siteName: "UpForge",
    title: "The Founder Chronicle — India's Greatest Startup Builders 2026",
    description:
      "Explore verified founder stories behind India's most influential startups.",
    images: [
      {
        url: "/og/founder-chronicle.png",
        width: 1200,
        height: 630,
        alt: "UpForge Founder Chronicle",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "India's Top Startup Founders | UpForge",
    description:
      "Verified founder stories from Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa and more.",
    images: ["/og/founder-chronicle.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "@id": "https://www.upforge.in/#organization",
      name: "UpForge",
      url: "https://www.upforge.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.upforge.in/logo.png",
      },
      sameAs: [
        "https://twitter.com/upforge_in"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://www.upforge.in/#website",
      url: "https://www.upforge.in",
      name: "UpForge",
      publisher: {
        "@id": "https://www.upforge.in/#organization"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.upforge.in/startup?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.upforge.in/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.upforge.in/"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "The Founder Chronicle",
          item: "https://www.upforge.in/"
        }
      ]
    }

  ]
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
