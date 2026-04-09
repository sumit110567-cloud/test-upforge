import type { Metadata } from "next";

// Massive SEO Optimization for Google & Global Ranking
export const metadata: Metadata = {
  title: "Indian Unicorns 2026: Complete List of India's $1B+ Startups | UpForge Registry",
  description:
    "The definitive verified list of all Indian unicorn startups in 2026. 126+ companies with $1B+ valuations — funding data, founders, sectors, and UFRN registry numbers. Manually verified by UpForge editors.",
  keywords: [
    "indian unicorns 2026", "india unicorn list", "unicorn startups india",
    "billion dollar startups india", "india startup valuation", "indian startup funding 2026",
    "upforge unicorn registry", "ufrn unicorn verified", "india decacorn 2026",
    "zepto cred zerodha phonepe razorpay unicorn india",
  ].join(", "),
  alternates: { 
    canonical: "https://upforge.in/blog/top-indian-unicorns-2026" 
  },
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
  openGraph: {
    title: "Indian Unicorns 2026: All 126+ Verified $1B+ Startups",
    description: "The world's most comprehensive verified registry of Indian unicorn startups. Manually verified by UpForge editors.",
    url: "https://upforge.in/blog/top-indian-unicorns-2026",
    siteName: "UpForge",
    images: [{ 
      url: "https://upforge.in/og-unicorns.png", 
      width: 1200, 
      height: 630,
      alt: "Indian Unicorns 2026 Registry"
    }],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Unicorns 2026: 126+ Verified $1B+ Startups | UpForge",
    description: "The definitive, manually verified registry of all Indian unicorn startups in 2026.",
    images: ["https://upforge.in/og-unicorns.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Google Search logic will prioritize this server-side metadata */}
      {children}
    </section>
  );
}
