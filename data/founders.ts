// data/founders.ts
// Founder data extracted from app/page.tsx.
// Shared between the server page (for JSON-LD + SEO index)
// and the client component (for interactive rendering).

export interface FounderCol {
  h: string
  b: string
}

export interface FounderStat {
  l: string
  v: string
}

export interface Founder {
  no: string
  edition: string
  category: string
  name: string
  nameShort: string
  initials: string
  company: string
  slug: string
  role: string
  city: string
  context: string
  valuation: string
  funding: string
  founded: string
  imgSrc: string
  videoId: string
  videoTitle: string
  accent: string
  accentBg: string
  accentBorder: string
  headline: string
  deck: string
  cols: FounderCol[]
  pull: string
  pullBy: string
  lesson: string
  stats: FounderStat[]
}

export const FOUNDERS: Founder[] = [
  {
    no: "01", edition: "No. 01",
    category: "ARTIFICIAL INTELLIGENCE",
    name: "Vivek Raghavan",
    nameShort: "Vivek Raghavan",
    initials: "VR",
    company: "Sarvam AI", slug: "sarvam-ai",
    role: "Co-Founder & CEO",
    city: "Bengaluru, KA", context: "Building India's own AI models",
    valuation: "$1B+", funding: "$70M+", founded: "2023",
    imgSrc: "https://static.businessworld.in/sarvam_20250427233307_original_image_44.webp",
    videoId: "c8Dc6vRE7VI",
    videoTitle: "Vivek Raghavan on Building India's Sovereign LLM — Sarvam AI",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
    headline: "If India wants to lead the AI era, it cannot rely only on models built elsewhere.",
    deck: "Sarvam AI is building India's own large language models — designed for Indian languages, Indian scale, and Indian problems.",
    cols: [
      { h: "The India-First AI Vision", b: "In 2023, Vivek Raghavan and his co-founders launched Sarvam AI with a simple but ambitious goal: build AI infrastructure designed specifically for India.\n\nWhile global companies were building models optimized for English and Western datasets, Sarvam focused on the massive multilingual reality of India — where hundreds of millions of people interact in Hindi, Tamil, Telugu, Bengali, and dozens of other languages." },
      { h: "Building India's Own LLM", b: "Sarvam AI began developing large language models optimized for Indian use cases — government services, education platforms, enterprise tools, and regional communication.\n\nTheir models were designed not just to translate languages but to understand context across multiple Indian linguistic structures. This made Sarvam one of the most talked-about AI startups in the country." },
      { h: "The Sovereign AI Moment", b: "As the global AI race intensified, India began investing heavily in domestic AI infrastructure. Sarvam AI quickly emerged as a key player in this movement.\n\nThe company began collaborating with research institutions, enterprises, and policymakers to build scalable AI systems for India's digital future — positioning itself as one of the country's most important deep-tech startups." },
    ],
    pull: "If India wants to lead the AI era, it cannot rely only on models built elsewhere.",
    pullBy: "Vivek Raghavan",
    lesson: "In the AI era, infrastructure matters more than applications.",
    stats: [
      { l: "Valuation", v: "$1B+" },
      { l: "Funding",   v: "$70M+" },
      { l: "Models",    v: "Indian LLMs" },
      { l: "Founded",   v: "2023" },
    ],
  },
  {
    no: "02", edition: "No. 02",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru", context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
    imgSrc: "https://i.ytimg.com/vi/HBSOii00H68/hqdefault.jpg",
    videoId: "nR2jv-r55bg",
    videoTitle: "Aadit Palicha & Kaivalya Vohra — How Zepto Was Built",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    deck: "Aadit Palicha and Kaivalya Vohra built India's fastest unicorn by failing first, then solving the logistics math nobody else wanted to.",
    cols: [
      { h: "The Failed First Act", b: "In 2020, Palicha and Vohra were Stanford freshmen who flew back to India to build KiranaKart — a 45-minute grocery app. It failed in months. Most founders would have returned to California. These two stayed in Bengaluru, rented a room, and dissected every mistake with unusual discipline.\n\nThe pivot they arrived at was specific: dark stores placed within 1.5km of dense demand made 10-minute delivery a pure logistics equation, not a gimmick. Every competitor called it insane. The founders called it math." },
      { h: "The $5.9B Math Problem", b: "Zepto launched in 2021. By August 2023, India had its first unicorn of the year — at $1.4B. The $350M Series H in 2025 brought the valuation to $5.9B, making them the youngest founders in India to build a business at that scale.\n\nKaivalya Vohra, at 22, became India's youngest billionaire. Zepto now operates 350+ dark stores across 10 cities, fulfilling orders in under 10 minutes — a logistics equation, solved." },
      { h: "What the Story Really Is", b: "The Zepto story isn't about being young or lucky. It is about the discipline to treat failure as data. KiranaKart showed them what didn't work. Zepto was the answer once they knew the right question.\n\nIndia's quick commerce market crossed $3.3B in 2025. Zepto commands its second-largest share — earned not by being first, but by being most precise about what '10 minutes' actually requires behind the scenes." },
    ],
    pull: "We failed with KiranaKart in months. Most people would have gone back to Stanford. We stayed in Bengaluru and figured out what we got wrong.",
    pullBy: "Aadit Palicha",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    stats: [
      { l: "Valuation",    v: "$5.9B"  },
      { l: "Founded",      v: "2021"   },
      { l: "Dark Stores",  v: "350+"   },
      { l: "Total Raised", v: "$2.5B+" },
    ],
  },
  // ... remaining 8 founders follow the same pattern
  // Copy founders 03-10 from the original FOUNDERS array in app/page.tsx
  // They are unchanged — just moved to this file
]
