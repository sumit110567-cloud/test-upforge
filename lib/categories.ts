// lib/categories.ts
// ─────────────────────────────────────────────────────────────────────────────
// Single source of truth for UpForge category definitions.
// Import this in:
//   • app/startups/page.tsx
//   • app/startups/[category]/page.tsx
//   • app/sitemap.ts
// ─────────────────────────────────────────────────────────────────────────────

export interface CategoryMeta {
  display: string
  description: string       // Short — used in meta description & cards
  longDescription: string   // Long — used in category page body copy
}

export const CATEGORY_REGISTRY: Record<string, CategoryMeta> = {
  "ai": {
    display: "Artificial Intelligence",
    description:
      "Discover AI & ML startups in India building the next generation of intelligent products — from language models to computer vision.",
    longDescription:
      "India's AI ecosystem is among the fastest-growing globally. From Bengaluru-based LLM studios to Mumbai deep-learning companies, Indian AI founders are solving problems at scale. Browse verified AI startup profiles, founding teams, and company details.",
  },
  "fintech": {
    display: "FinTech",
    description:
      "Explore India's leading FinTech startups — payments, lending, insurance, wealth management and financial infrastructure companies.",
    longDescription:
      "India is the world's third-largest FinTech ecosystem. With UPI processing billions of transactions monthly, Indian FinTech startups are redefining how 1.4 billion people interact with money. Find verified profiles of India's top financial technology companies.",
  },
  "edtech": {
    display: "EdTech",
    description:
      "Browse verified EdTech startups in India — from K-12 platforms to upskilling tools and university-alternative programs.",
    longDescription:
      "India's EdTech sector serves over 500 million learners. From test-prep giants to vocational training platforms, Indian education technology startups are democratising quality learning. Explore verified founder profiles and company data.",
  },
  "healthtech": {
    display: "HealthTech",
    description:
      "Find India's top HealthTech startups — telemedicine, diagnostics, hospital management, mental health, and biotech platforms.",
    longDescription:
      "India's healthcare system is being rebuilt from the ground up by a new generation of founders. HealthTech startups are solving access, affordability, and quality gaps for a population of 1.4 billion. Explore verified health technology companies.",
  },
  "saas": {
    display: "SaaS",
    description:
      "Discover India's SaaS startups — B2B software, developer tools, enterprise platforms, and cloud-native companies built for global markets.",
    longDescription:
      "India is the world's third-largest SaaS ecosystem, with Indian-origin companies serving enterprises across North America, Europe, and Southeast Asia. Browse verified SaaS startup profiles from Bengaluru, Hyderabad, Delhi NCR, and beyond.",
  },
  "ecommerce": {
    display: "E-Commerce",
    description:
      "Explore India's e-commerce and D2C startups — marketplaces, direct-to-consumer brands, and supply chain technology companies.",
    longDescription:
      "India's e-commerce market is set to reach $350 billion by 2030. From quick-commerce to luxury D2C brands, Indian e-commerce founders are building for the next 500 million online shoppers. Find verified company profiles here.",
  },
  "agritech": {
    display: "AgriTech",
    description:
      "Discover AgriTech startups solving India's agricultural challenges — precision farming, supply chain, crop insurance, and farmer fintech.",
    longDescription:
      "With over 140 million farming households, India's agricultural sector is a massive opportunity for technology. Indian AgriTech startups are digitising the farm-to-fork chain. Browse verified profiles of founders building for Bharat.",
  },
  "climate-tech": {
    display: "Climate Tech",
    description:
      "Find India's Climate Tech startups — renewable energy, EV infrastructure, carbon markets, sustainable agriculture, and green finance.",
    longDescription:
      "India is the world's largest renewable energy market. Climate Tech founders are building EV charging networks, carbon credit platforms, sustainable packaging solutions, and clean energy infrastructure. Explore verified company profiles.",
  },
  "logistics": {
    display: "Logistics & Supply Chain",
    description:
      "Browse India's logistics startups — last-mile delivery, freight tech, cold chain, port logistics, and supply chain visibility platforms.",
    longDescription:
      "India's logistics market is being transformed by technology. From hyperlocal delivery networks to AI-powered freight matching, Indian logistics startups are building the infrastructure for a $1 trillion economy. Explore verified profiles.",
  },
  "biotech": {
    display: "BioTech",
    description:
      "Discover India's BioTech startups — genomics, drug discovery, diagnostics, synthetic biology, and pharmaceutical technology companies.",
    longDescription:
      "India is emerging as a global biotech hub with world-class research institutions and a growing pool of deep science founders. From CRISPR-based therapeutics to rapid diagnostics, browse verified Indian biotech company profiles.",
  },
  "devtools": {
    display: "Developer Tools",
    description:
      "Find India's developer tool startups — APIs, SDKs, cloud infrastructure, developer productivity, and open-source companies.",
    longDescription:
      "India produces more software engineers than any other country. A growing cohort of these engineers are now building tools for other developers — APIs, infrastructure products, and developer experience platforms. Browse verified profiles.",
  },
  "web3": {
    display: "Web3 & Blockchain",
    description:
      "Explore India's Web3 startups — blockchain infrastructure, DeFi protocols, NFT platforms, crypto exchanges, and decentralised applications.",
    longDescription:
      "Despite regulatory uncertainty, India has one of the world's largest crypto user bases. Web3 founders are building DeFi, gaming, identity, and blockchain infrastructure solutions. Explore verified Web3 startup profiles.",
  },
  "robotics": {
    display: "Robotics",
    description:
      "Discover India's robotics startups — industrial automation, autonomous vehicles, drone technology, and human-robot interaction systems.",
    longDescription:
      "India's robotics ecosystem is growing rapidly, driven by manufacturing sector demand and aerospace ambitions. From agricultural drones to surgical robots, Indian founders are pushing the frontier of physical automation.",
  },
  "gaming": {
    display: "Gaming",
    description:
      "Browse India's gaming startups — mobile games, esports platforms, game development studios, and interactive entertainment companies.",
    longDescription:
      "India is the world's second-largest mobile gaming market with over 500 million gamers. Indian gaming startups are building globally competitive titles, esports infrastructure, and gaming creator platforms. Find verified profiles.",
  },
  "creator-economy": {
    display: "Creator Economy",
    description:
      "Find India's creator economy startups — monetisation tools, content platforms, fan engagement, and media technology companies.",
    longDescription:
      "India's 200 million+ content creators represent one of the world's largest creator economies. Startups building tools for creators — payments, community, analytics, and distribution — are a fast-growing segment. Browse verified profiles.",
  },
}

/**
 * Normalise a raw DB category string → URL slug.
 * "AI/ML"        → "ai"
 * "FinTech"      → "fintech"
 * "Climate Tech" → "climate-tech"
 */
export function categoryToSlug(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[/\\]/g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .trim()
}

/**
 * Given a slug, get display name — falls back to title-casing the slug.
 */
export function getDisplayName(slug: string): string {
  return (
    CATEGORY_REGISTRY[slug]?.display ??
    slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
  )
}
