// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/client-layout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upforge.in"),
  title: {
    default: "UpForge — India's #1 Independent Startup Registry 2026",
    template: "%s | UpForge",
  },
  description:
    "Discover, research and track 72,000+ verified Indian startups. Free listings, AI-powered growth reports, real-time funding news, unicorn tracker and live market intelligence.",
  keywords: [
    "Indian startups",
    "India startup database",
    "startup registry India",
    "verified Indian startups",
    "Indian unicorns 2026",
    "startup funding India",
    "list your startup India",
    "startup ecosystem India",
    "Indian founders",
    "VC deals India",
  ].join(", "),
  authors: [{ name: "UpForge", url: "https://upforge.in" }],
  creator: "UpForge",
  publisher: "UpForge",
  alternates: { canonical: "https://upforge.in" },

  // ── Favicon & Icons ──────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#1C1C1C" },
    ],
  },
  manifest: "/site.webmanifest",

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://upforge.in",
    siteName: "UpForge",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description:
      "72,000+ verified Indian startups. Free listings · AI growth reports · Live funding news · Unicorn tracker.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "UpForge — India's Independent Startup Registry",
      },
    ],
  },

  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    site: "@upforge_in",
    creator: "@upforge_in",
    title: "UpForge — India's #1 Independent Startup Registry 2026",
    description:
      "72,000+ verified Indian startups. Free listings · AI growth reports · Real-time funding news.",
    images: ["/og-image.png"],
  },

  // ── Robots ────────────────────────────────────────────────────────────────
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── MS Tile (Windows pinned sites) ───────────────────────────────────────
  other: {
    "msapplication-TileColor": "#1C1C1C",
    "msapplication-config": "/browserconfig.xml",
    "theme-color": "#F7F5F0",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-background text-foreground flex flex-col min-h-screen antialiased font-sans">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
