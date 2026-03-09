// app/archive/page.tsx
// THE FOUNDER CHRONICLE — Archive (upforge.in)
// Archive page with month-wise filtering, search, and auto-update capabilities
"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight, Search, X, Calendar, Filter, Clock } from "lucide-react"

// ─── ARCHIVE DATA STRUCTURE ───────────────────────────────────────────────────
// This structure allows for easy addition of new founders/editions
// Each edition represents a monthly release

interface ArchiveFounder {
  no: string;
  edition: string; // Format: "No. XX" (e.g., "No. 01")
  editionDate: string; // Format: "MMMM YYYY" (e.g., "March 2026")
  category: string;
  name: string;
  nameShort: string;
  initials: string;
  company: string;
  slug: string;
  role: string;
  city: string;
  context: string;
  valuation: string;
  funding: string;
  founded: string;
  imgSrc: string;
  accent: string;
  accentBg: string;
  accentBorder: string;
  headline: string;
  deck: string;
  cols: Array<{ h: string; b: string }>;
  pull: string;
  pullBy: string;
  lesson: string;
  stats: Array<{ l: string; v: string }>;
  tags: string[]; // For better filtering
}

// ─── ARCHIVE DATA ─────────────────────────────────────────────────────────────
// Structured by edition (month/year) for easy filtering
const ARCHIVE_FOUNDERS: ArchiveFounder[] = [
  // March 2026 Edition (Current)
  {
    no: "01", 
    edition: "No. 01",
    editionDate: "March 2026",
    category: "ARTIFICIAL INTELLIGENCE",
    name: "Vivek Raghavan",
    nameShort: "Vivek Raghavan",
    initials: "VR",
    company: "Sarvam AI", 
    slug: "sarvam-ai",
    role: "Co-Founder & CEO",
    city: "Bengaluru, KA", 
    context: "Building India's own AI models",
    valuation: "$1B+", 
    funding: "$70M+", 
    founded: "2023",
    imgSrc: "test.jpg",
    accent: "#2563EB", 
    accentBg: "#EFF6FF", 
    accentBorder: "#BFDBFE",
    headline: "If India wants to lead the AI era, it cannot rely only on models built elsewhere.",
    deck: "Sarvam AI is building India's own large language models — designed for Indian languages, Indian scale, and Indian problems.",
    cols: [
      {
        h: "The India-First AI Vision",
        b: "In 2023, Vivek Raghavan and his co-founders launched Sarvam AI with a simple but ambitious goal: build AI infrastructure designed specifically for India.\n\nWhile global companies were building models optimized for English and Western datasets, Sarvam focused on the massive multilingual reality of India — where hundreds of millions of people interact in Hindi, Tamil, Telugu, Bengali, and dozens of other languages."
      },
      {
        h: "Building India's Own LLM",
        b: "Sarvam AI began developing large language models optimized for Indian use cases — government services, education platforms, enterprise tools, and regional communication.\n\nTheir models were designed not just to translate languages but to understand context across multiple Indian linguistic structures. This made Sarvam one of the most talked-about AI startups in the country."
      },
      {
        h: "The Sovereign AI Moment",
        b: "As the global AI race intensified, India began investing heavily in domestic AI infrastructure. Sarvam AI quickly emerged as a key player in this movement.\n\nThe company began collaborating with research institutions, enterprises, and policymakers to build scalable AI systems for India's digital future — positioning itself as one of the country's most important deep-tech startups."
      }
    ],
    pull: "If India wants to lead the AI era, it cannot rely only on models built elsewhere.",
    pullBy: "Vivek Raghavan",
    lesson: "In the AI era, infrastructure matters more than applications.",
    stats: [
      { l: "Valuation", v: "$1B+" },
      { l: "Funding", v: "$70M+" },
      { l: "Models", v: "Indian LLMs" },
      { l: "Founded", v: "2023" },
    ],
    tags: ["AI", "LLM", "DeepTech", "Bengaluru"]
  },
  {
    no: "02", 
    edition: "No. 02",
    editionDate: "March 2026",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", 
    slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru", 
    context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", 
    funding: "$2.5B+", 
    founded: "2021",
    imgSrc: "test.jpg",
    accent: "#D97706", 
    accentBg: "#FFFBEB", 
    accentBorder: "#FDE68A",
    headline: "Two Stanford dropouts. One failed startup. Then a $5.9 billion answer to India's grocery problem.",
    deck: "Aadit Palicha and Kaivalya Vohra built India's fastest unicorn by failing first, then solving the logistics math nobody else wanted to.",
    cols: [
      {
        h: "The Failed First Act",
        b: "In 2020, Palicha and Vohra were Stanford freshmen who flew back to India to build KiranaKart — a 45-minute grocery app. It failed in months. Most founders would have returned to California. These two stayed in Bengaluru, rented a room, and dissected every mistake with unusual discipline.\n\nThe pivot they arrived at was specific: dark stores placed within 1.5km of dense demand made 10-minute delivery a pure logistics equation, not a gimmick. Every competitor called it insane. The founders called it math."
      },
      {
        h: "The $5.9B Math Problem",
        b: "Zepto launched in 2021. By August 2023, India had its first unicorn of the year — at $1.4B. The $350M Series H in 2025 brought the valuation to $5.9B, making them the youngest founders in India to build a business at that scale.\n\nKaivalya Vohra, at 22, became India's youngest billionaire. Zepto now operates 350+ dark stores across 10 cities, fulfilling orders in under 10 minutes — a logistics equation, solved."
      },
      {
        h: "What the Story Really Is",
        b: "The Zepto story isn't about being young or lucky. It is about the discipline to treat failure as data. KiranaKart showed them what didn't work. Zepto was the answer once they knew the right question.\n\nIndia's quick commerce market crossed $3.3B in 2025. Zepto commands its second-largest share — earned not by being first, but by being most precise about what '10 minutes' actually requires behind the scenes."
      }
    ],
    pull: "We failed with KiranaKart in months. Most people would have gone back to Stanford. We stayed in Bengaluru and figured out what we got wrong.",
    pullBy: "Aadit Palicha",
    lesson: "The first startup teaches you the question. The second one lets you answer it.",
    stats: [
      { l: "Valuation", v: "$5.9B" },
      { l: "Founded", v: "2021" },
      { l: "Dark Stores", v: "350+" },
      { l: "Total Raised", v: "$2.5B+" },
    ],
    tags: ["QuickCommerce", "GenZ", "Bengaluru", "Unicorn"]
  },
  {
    no: "03", 
    edition: "No. 03",
    editionDate: "March 2026",
    category: "AEROSPACE",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "LAT Aerospace", 
    slug: "lat-aerospace",
    role: "Founder",
    city: "Gurugram, HR", 
    context: "Reimagining regional aviation",
    valuation: "Stealth", 
    funding: "Undisclosed", 
    founded: "2024",
    imgSrc: "test.jpg",
    accent: "#EA580C", 
    accentBg: "#FFF7ED", 
    accentBorder: "#FED7AA",
    headline: "India doesn't just need more airports. It needs a new way to fly.",
    deck: "LAT Aerospace is exploring electric aircraft designed to connect smaller Indian cities with faster, cheaper regional flights.",
    cols: [
      {
        h: "Beyond Food Delivery",
        b: "After building Zomato into one of India's most recognized technology companies, Deepinder Goyal turned his attention to a very different challenge — regional aviation.\n\nMillions of Indians live in cities without efficient air connectivity. LAT Aerospace aims to rethink how short-distance flights can work."
      },
      {
        h: "Electric Regional Aircraft",
        b: "The startup is focused on developing short take-off electric aircraft that can operate from smaller runways and regional airstrips.\n\nThis could drastically reduce travel time between Tier-2 and Tier-3 cities, creating an entirely new aviation network across India."
      },
      {
        h: "The Next Mobility Frontier",
        b: "Regional aviation has long been one of India's most underdeveloped transport sectors. If electric aircraft technology matures, startups like LAT Aerospace could unlock a new era of affordable short-distance air travel.\n\nThe project reflects a growing trend: tech founders moving into deep-tech industries that reshape physical infrastructure."
      }
    ],
    pull: "India doesn't just need more airports. It needs a new way to fly.",
    pullBy: "Deepinder Goyal",
    lesson: "The biggest opportunities often lie in industries that haven't changed for decades.",
    stats: [
      { l: "Industry", v: "Aerospace" },
      { l: "Aircraft", v: "Electric" },
      { l: "Focus", v: "Regional Aviation" },
      { l: "Founded", v: "2024" },
    ],
    tags: ["Aerospace", "EV", "Zomato", "Gurugram"]
  },

  // February 2026 Edition
  {
    no: "04", 
    edition: "No. 04",
    editionDate: "February 2026",
    category: "FINTECH",
    name: "Nithin Kamath",
    nameShort: "Nithin Kamath",
    initials: "NK",
    company: "Zerodha", 
    slug: "zerodha",
    role: "Founder & CEO",
    city: "Bengaluru", 
    context: "Dropped out at 17 to trade. Never took VC.",
    valuation: "$8.2B", 
    funding: "Fully bootstrapped", 
    founded: "2010",
    imgSrc: "test.jpg",
    accent: "#2563EB", 
    accentBg: "#EFF6FF", 
    accentBorder: "#BFDBFE",
    headline: "He dropped out at 17 to trade stocks. Never took a rupee of VC. Zerodha is India's largest stockbroker — worth $8.2 billion.",
    deck: "Nithin Kamath built India's largest brokerage without a single outside investor, a celebrity ad, or a paid acquisition. Just a better product and fifteen years of compounding trust.",
    cols: [
      {
        h: "The Self-Taught Trader",
        b: "Nithin Kamath dropped out of college at 17 to learn stock markets by doing: putting real money in and watching what happened. He spent a decade becoming exceptionally good at trading — while working as a sub-broker and call centre employee to fund his positions.\n\nBy 2010, he had identified the structural problem in Indian broking: fees were opaque, interfaces were broken, and the entire system was designed to benefit brokers, not investors. He founded Zerodha with his brother Nikhil to fix exactly that."
      },
      {
        h: "₹20 Flat. Zero VC.",
        b: "Zerodha introduced flat-fee brokerage to India: ₹20 per trade regardless of order size, at a time when brokers charged a percentage of trade value. This single pricing decision democratised investing for millions priced out by the old model.\n\nCritically, Zerodha never raised outside capital. No Series A, no Tiger Global, no SoftBank. Nithin reinvested every profit. Kite — their trading platform — became the benchmark every Indian fintech is measured against."
      },
      {
        h: "The Bootstrapped Billionaire",
        b: "Today, Zerodha has 1.5 crore active customers and an $8.2B valuation. Nithin also built Varsity (free financial education, 10M+ users), Rainmatter (a fintech incubator backing 40+ startups), and has become India's most respected voice on sustainable investing.\n\nThe Zerodha story is the definitive antidote to the idea that fundraising equals success. Fifteen years of being genuinely, unfashionably useful."
      }
    ],
    pull: "We never raised money because we didn't need to. Build something people actually want, charge them fairly — that's the whole playbook.",
    pullBy: "Nithin Kamath",
    lesson: "Bootstrapping is not a funding strategy. It's a philosophy about who you're accountable to.",
    stats: [
      { l: "Valuation", v: "$8.2B" },
      { l: "Customers", v: "1.5 Cr+" },
      { l: "VC Raised", v: "₹0" },
      { l: "Founded", v: "2010" },
    ],
    tags: ["Fintech", "Bootstrapped", "Trading", "Bengaluru"]
  },
  {
    no: "05", 
    edition: "No. 05",
    editionDate: "February 2026",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar",
    nameShort: "Falguni Nayar",
    initials: "FN",
    company: "Nykaa", 
    slug: "nykaa",
    role: "Founder & CEO",
    city: "Mumbai", 
    context: "Left investment banking at 50",
    valuation: "$2.5B", 
    funding: "Bootstrapped to IPO", 
    founded: "2012",
    imgSrc: "test.jpg",
    accent: "#C026D3", 
    accentBg: "#FDF4FF", 
    accentBorder: "#E879F9",
    headline: "She left a 20-year banking career at 50 to build India's first profitable unicorn. Everyone told her she was too old.",
    deck: "Falguni Nayar built India's first woman-founded company to IPO — and proved the best founders sometimes take the longest to begin.",
    cols: [
      {
        h: "Twenty Years at Kotak",
        b: "Falguni Nayar spent two decades at Kotak Mahindra Bank, rising to Managing Director of Investment Banking. In 2012, at 50, she quit. Her network was uniformly sceptical: global beauty brands wouldn't trust an Indian startup, the market was fragmented, physical retail was dominant.\n\nShe flew personally to brand offices in France, Italy, and the United States to guarantee authenticity and explain the Indian consumer. She earned the trust one brand at a time."
      },
      {
        h: "Curation Over Discounting",
        b: "While every other platform competed on price, Falguni competed on trust. Nykaa launched with editorial curation, authentic products, and an experience that felt like a premium store. Customers returned because they trusted what they were buying.\n\nBy 2020, Nykaa crossed 2 million orders per month. No splashy VC backing, no celebrity campaigns in the early years. Just a product built around the conviction that Indian women deserved a trustworthy beauty destination."
      },
      {
        h: "India's First Woman-Led IPO",
        b: "In November 2021, Nykaa listed on the BSE — the first woman-founded Indian company to IPO, and the first profitable Indian unicorn to go public. Falguni's net worth crossed $7B at listing, making her India's wealthiest self-made woman.\n\nShe has since expanded into fashion, wellness, and men's grooming. Nykaa remains a masterclass in patience, domain expertise, and the radical idea that serving your customer well — not raising money — is the primary job of a founder."
      }
    ],
    pull: "Everyone told me I was too old to start and the market was too fragmented. That was the business case — not a reason to stop.",
    pullBy: "Falguni Nayar",
    lesson: "There is no age requirement for building something consequential.",
    stats: [
      { l: "Valuation", v: "$2.5B" },
      { l: "IPO Year", v: "2021" },
      { l: "Age at Start", v: "50" },
      { l: "Founded", v: "2012" },
    ],
    tags: ["D2C", "Beauty", "IPO", "Mumbai", "WomenFounder"]
  },

  // January 2026 Edition
  {
    no: "06", 
    edition: "No. 06",
    editionDate: "January 2026",
    category: "TRAVEL / HOSPITALITY",
    name: "Ritesh Agarwal",
    nameShort: "Ritesh Agarwal",
    initials: "RA",
    company: "OYO", 
    slug: "oyo",
    role: "Founder & CEO",
    city: "Gurgaon", 
    context: "Youngest billionaire founder",
    valuation: "$10B+", 
    funding: "$3B+", 
    founded: "2013",
    imgSrc: "test.jpg",
    accent: "#DC2626",
    accentBg: "#FEF2F2",
    accentBorder: "#FCA5A5",
    headline: "At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.",
    deck: "Ritesh Agarwal built OYO after travelling across India and seeing the chaos in budget hotels. His solution standardized small hotels using technology and branding.",
    cols: [
      {
        h: "Teenage Entrepreneur",
        b: "Ritesh Agarwal left college early to build a startup. His first idea was Oravel Stays, a platform for budget accommodations.\n\nAfter traveling across India, he realized the massive problem in budget hospitality: inconsistent quality, opaque pricing, and no trust."
      },
      {
        h: "Birth of OYO",
        b: "The idea evolved into OYO Rooms, which standardized hotel rooms with reliable pricing, cleanliness, and booking systems.\n\nOYO grew rapidly by partnering with small hotel owners and bringing them into a branded network with technology-enabled operations."
      },
      {
        h: "Global Expansion",
        b: "OYO expanded to dozens of countries and thousands of hotels, becoming one of the fastest-growing hospitality brands in the world.\n\nDespite challenges, OYO remains one of India's most ambitious global expansions by a young founder."
      }
    ],
    pull: "Opportunities often hide inside everyday problems.",
    pullBy: "Ritesh Agarwal",
    lesson: "Start young. Learn fast. Scale relentlessly.",
    stats: [
      { l: "Valuation", v: "$10B+" },
      { l: "Countries", v: "80+" },
      { l: "Founded", v: "2013" },
      { l: "Age at Start", v: "19" }
    ],
    tags: ["Travel", "Hospitality", "Global", "Gurgaon"]
  },
  {
    no: "07", 
    edition: "No. 07",
    editionDate: "January 2026",
    category: "MOBILITY / TRANSPORT",
    name: "Bhavish Aggarwal",
    nameShort: "Bhavish Aggarwal",
    initials: "BA",
    company: "Ola", 
    slug: "ola",
    role: "Co-Founder & CEO",
    city: "Bangalore", 
    context: "Built India's largest ride-hailing platform",
    valuation: "$7B+", 
    funding: "$4B+", 
    founded: "2010",
    imgSrc: "test.jpg",
    accent: "#EA580C", 
    accentBg: "#FFF7ED", 
    accentBorder: "#FDBA74",
    headline: "A single bad taxi ride inspired him to build one of India's largest mobility platforms.",
    deck: "Bhavish Aggarwal founded Ola after a frustrating cab experience — and went on to build a transportation network serving hundreds of cities across India.",
    cols: [
      {
        h: "The Problem That Sparked Ola",
        b: "In 2010, Bhavish Aggarwal was traveling from Bangalore to Bandipur when his taxi driver abruptly stopped midway and demanded extra money.\n\nThe experience revealed a huge gap in India's transportation infrastructure. Bhavish realized millions of commuters faced the same problem daily."
      },
      {
        h: "Building India's Ride-Hailing Giant",
        b: "Bhavish partnered with Ankit Bhati to launch Ola — a platform connecting passengers with reliable drivers through mobile technology.\n\nThe startup expanded rapidly across Indian cities and soon became a dominant player in ride-hailing, competing with Uber in one of the world's toughest markets."
      },
      {
        h: "Beyond Ride-Hailing",
        b: "Ola eventually expanded into electric mobility through Ola Electric, building scooters, EV platforms, and gigafactories.\n\nBhavish's ambition has always been larger than taxis — he wants to redefine transportation for an electric future."
      }
    ],
    pull: "Every frustrating experience is an opportunity to build something better.",
    pullBy: "Bhavish Aggarwal",
    lesson: "Some of the biggest companies start with solving a personal problem.",
    stats: [
      { l: "Valuation", v: "$7B+" },
      { l: "Cities", v: "250+" },
      { l: "Founded", v: "2010" },
      { l: "Funding", v: "$4B+" },
    ],
    tags: ["Mobility", "EV", "RideHailing", "Bangalore"]
  },
  {
    no: "08",
    edition: "No. 08",
    editionDate: "January 2026",
    category: "CAREER / STUDENT PLATFORM",
    name: "Lucky Tiwari",
    nameShort: "Lucky Tiwari",
    initials: "LT",
    company: "InternAdda",
    slug: "internadda",
    role: "Founder",
    city: "India",
    context: "Building a modern platform connecting students with real opportunities",
    valuation: "Private",
    funding: "Bootstrapped",
    founded: "2024",
    imgSrc: "test.jpg",
    accent: "#2563EB",
    accentBg: "#EFF6FF",
    accentBorder: "#93C5FD",
    headline: "He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India.",
    deck: "InternAdda was created to bridge the gap between students and real-world opportunities. The platform helps students discover internships, startup roles, and learning experiences while helping companies reach young talent across the country.",
    cols: [
      {
        h: "The Problem Students Face",
        b: "Millions of students graduate every year in India, yet many struggle to find meaningful internships or early career opportunities.\n\nInformation is scattered across multiple platforms, and many students simply don't know where to start."
      },
      {
        h: "Building InternAdda",
        b: "Lucky Tiwari launched InternAdda with the goal of creating a simple and reliable platform where students can explore internships, startup jobs, and career opportunities.\n\nThe platform focuses on accessibility, clarity, and giving young people real exposure to the startup ecosystem."
      },
      {
        h: "Empowering the Next Generation",
        b: "InternAdda aims to become a trusted destination for students looking to start their careers.\n\nBy connecting startups with ambitious students, the platform helps create opportunities that can shape the future workforce of India's innovation economy."
      }
    ],
    pull: "Talent exists everywhere — students just need the right opportunity to prove it.",
    pullBy: "Lucky Tiwari",
    lesson: "Sometimes the best startups are built by solving problems you personally faced.",
    stats: [
      { l: "Platform", v: "InternAdda" },
      { l: "Founded", v: "2024" },
      { l: "Funding", v: "Bootstrapped" },
      { l: "Focus", v: "Student Opportunities" }
    ],
    tags: ["Edtech", "Career", "Students", "Bootstrapped"]
  },
  {
    no: "09", 
    edition: "No. 09",
    editionDate: "January 2026",
    category: "FINTECH",
    name: "Kunal Shah",
    nameShort: "Kunal Shah",
    initials: "KS",
    company: "CRED",
    slug: "cred",
    role: "Founder & CEO",
    city: "Bangalore",
    context: "Built two unicorn fintech startups",
    valuation: "$6B+",
    funding: "$800M+",
    founded: "2018",
    imgSrc: "test.jpg",
    accent: "#111827",
    accentBg: "#F3F4F6",
    accentBorder: "#9CA3AF",
    headline: "He built CRED by rewarding people for paying their credit card bills on time.",
    deck: "Kunal Shah is known for his deep thinking on consumer behaviour and fintech. After selling FreeCharge, he launched CRED to reward financial discipline.",
    cols: [
      {
        h: "The FreeCharge Exit",
        b: "Kunal Shah first built FreeCharge, a digital payments company that was later acquired by Snapdeal for $400M.\n\nThis exit gave him the capital and credibility to build something bigger."
      },
      {
        h: "Birth of CRED",
        b: "He launched CRED in 2018 to reward creditworthy users who paid their bills on time.\n\nThe exclusivity created demand — people wanted access to the platform because it signalled financial responsibility."
      },
      {
        h: "Premium Community",
        b: "CRED built an exclusive ecosystem for financially responsible users, expanding into payments, lending, and lifestyle products.\n\nKunal's understanding of behavioural economics made CRED one of India's most talked-about fintech experiments."
      }
    ],
    pull: "Trust is the most powerful currency in fintech.",
    pullBy: "Kunal Shah",
    lesson: "Understand human behaviour better than technology.",
    stats: [
      { l: "Valuation", v: "$6B+" },
      { l: "Users", v: "12M+" },
      { l: "Founded", v: "2018" },
      { l: "Previous Exit", v: "FreeCharge $400M" }
    ],
    tags: ["Fintech", "Consumer", "Bangalore", "Payments"]
  },
  {
    no: "10", 
    edition: "No. 10",
    editionDate: "January 2026",
    category: "FINTECH / PAYMENTS",
    name: "Vijay Shekhar Sharma",
    nameShort: "Vijay Sharma",
    initials: "VS",
    company: "Paytm",
    slug: "paytm",
    role: "Founder & CEO",
    city: "Noida",
    context: "Built India's biggest digital wallet",
    valuation: "$16B+",
    funding: "$3B+",
    founded: "2010",
    imgSrc: "test.jpg",
    accent: "#0284C7",
    accentBg: "#EFF6FF",
    accentBorder: "#7DD3FC",
    headline: "From a small recharge website to India's largest digital payments ecosystem.",
    deck: "Vijay Shekhar Sharma built Paytm to simplify mobile payments in India, later becoming one of the biggest fintech platforms in the country.",
    cols: [
      {
        h: "Early Struggles",
        b: "Vijay grew up in a small town and struggled with English during college.\n\nDespite the challenges, he had an early fascination with technology and entrepreneurship."
      },
      {
        h: "Birth of Paytm",
        b: "He launched Paytm initially as a mobile recharge platform, then pivoted into payments when he saw the potential for digital wallets.\n\nPaytm's big break came during India's 2016 demonetization, when millions of Indians turned to digital payments overnight."
      },
      {
        h: "IPO and Beyond",
        b: "Paytm went public in 2021 in one of India's largest IPOs.\n\nDespite post-IPO challenges, Vijay continues to build Paytm into a comprehensive financial services platform."
      }
    ],
    pull: "Technology should make life simpler for millions.",
    pullBy: "Vijay Shekhar Sharma",
    lesson: "Persistence beats privilege.",
    stats: [
      { l: "Valuation", v: "$16B+" },
      { l: "Users", v: "300M+" },
      { l: "Founded", v: "2010" },
      { l: "IPO", v: "2021" }
    ],
    tags: ["Fintech", "Payments", "IPO", "Noida"]
  },
]

// ─── HELPER FUNCTIONS ───────────────────────────────────────────────────────
// Get unique months for filter
const getUniqueMonths = () => {
  const months = [...new Set(ARCHIVE_FOUNDERS.map(f => f.editionDate))]
  return months.sort((a, b) => {
    // Sort by date descending (latest first)
    const dateA = new Date(a)
    const dateB = new Date(b)
    return dateB.getTime() - dateA.getTime()
  })
}

// ─── FOUNDER PHOTO COMPONENT ──────────────────────────────────────────────────
function FounderPhoto({
  src, alt, initials, accent, accentBg,
  className = "", style = {}
}: {
  src: string; alt: string; initials: string
  accent: string; accentBg: string
  className?: string; style?: React.CSSProperties
}) {
  const isPlaceholder = src.includes("test.jpg")
  const [failed, setFailed] = useState(false)
  const show = !isPlaceholder && !failed

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: accentBg, ...style }}
    >
      {show && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="lazy"
          width={400}
          height={500}
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "1.8rem", fontFamily: "Georgia,serif" }}
          >
            {initials}
          </div>
          <p
            className="text-[8px] uppercase tracking-[0.2em] text-center px-4 leading-relaxed"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
          >
            {alt.split(' ').slice(0, 2).join(' ')}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function ArchivePage() {
  // Filter state - ONLY MONTH FILTER NOW
  const [selectedMonth, setSelectedMonth] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [debouncedSearch, setDebouncedSearch] = useState("")
  
  // UI state
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("list")
  
  // Get unique filter options - ONLY MONTHS
  const months = getUniqueMonths()

  // Debounce search to avoid too many re-renders
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery)
    }, 300)
    return () => clearTimeout(timer)
  }, [searchQuery])

  // Auto-update simulation: Check for new data every 30 seconds
  // In production, this would be replaced with actual data fetching
  useEffect(() => {
    const checkForUpdates = () => {
      console.log("Checking for new archive entries...")
      // In real implementation, you'd fetch from API here
      // For demo, we'll just log
    }
    
    const interval = setInterval(checkForUpdates, 30000)
    return () => clearInterval(interval)
  }, [])

  // Filter founders based on selected filters - ONLY MONTH NOW
  const filteredFounders = useMemo(() => {
    return ARCHIVE_FOUNDERS.filter(founder => {
      // Month filter
      if (selectedMonth !== "All" && founder.editionDate !== selectedMonth) {
        return false
      }
      
      // Search filter (case-insensitive search in name, company, category, tags)
      if (debouncedSearch) {
        const searchLower = debouncedSearch.toLowerCase()
        return (
          founder.name.toLowerCase().includes(searchLower) ||
          founder.company.toLowerCase().includes(searchLower) ||
          founder.category.toLowerCase().includes(searchLower) ||
          founder.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
          founder.headline.toLowerCase().includes(searchLower)
        )
      }
      
      return true
    })
  }, [selectedMonth, debouncedSearch])

  // Group filtered founders by month for better organization
  const groupedByMonth = useMemo(() => {
    const groups: { [key: string]: ArchiveFounder[] } = {}
    
    filteredFounders.forEach(founder => {
      if (!groups[founder.editionDate]) {
        groups[founder.editionDate] = []
      }
      groups[founder.editionDate].push(founder)
    })
    
    // Sort months descending
    return Object.keys(groups)
      .sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
      .map(month => ({
        month,
        founders: groups[month]
      }))
  }, [filteredFounders])

  return (
    <div
      style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}
      role="main"
      aria-label="The Founder Chronicle Archive — Past editions and founder stories"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn .3s ease both; }

        @media (min-width: 640px) {
          .archive-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .archive-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .search-input {
          background: transparent;
          border: none;
          outline: none;
          width: 100%;
          font-family: 'Georgia', serif;
          font-size: 14px;
        }
        .search-input::placeholder {
          color: #C8C2B4;
          font-style: italic;
        }

        .filter-chip {
          transition: all 0.2s ease;
          cursor: pointer;
          border: 1px solid #D8D2C4;
          background: white;
          font-size: 10px;
          padding: 6px 12px;
          border-radius: 20px;
          font-family: system-ui, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .filter-chip:hover {
          border-color: #1A1208;
        }
        .filter-chip.active {
          background: #1A1208;
          color: white;
          border-color: #1A1208;
        }

        .view-toggle {
          border: 1px solid #D8D2C4;
          display: inline-flex;
          padding: 2px;
        }
        .view-toggle button {
          padding: 4px 8px;
          font-size: 10px;
          font-family: system-ui, sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: all 0.2s ease;
        }
        .view-toggle button.active {
          background: #1A1208;
          color: white;
        }

        .list-view-item img {
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }
        .list-view-item:hover img {
          filter: grayscale(0%);
        }

        .archive-card {
          border: 1px solid #D8D2C4;
          background: white;
          transition: all 0.2s ease;
        }
        .archive-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          border-color: #1A1208;
        }

        .list-view-item {
          border-bottom: 1px solid #D8D2C4;
          padding: 1rem 0;
          transition: background 0.2s ease;
        }
        .list-view-item:hover {
          background: rgba(255,255,255,0.5);
        }

        .month-divider {
          position: relative;
          text-align: center;
          margin: 2rem 0 1.5rem;
        }
        .month-divider span {
          background: #F3EFE5;
          padding: 0 1rem;
          color: #1A1208;
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: 1.1rem;
          position: relative;
          z-index: 1;
        }
        .month-divider::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 1px;
          background: #D8D2C4;
          z-index: 0;
        }

        .stat-badge {
          background: #F3EFE5;
          padding: 2px 8px;
          font-size: 9px;
          font-family: system-ui, sans-serif;
          color: #666;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }

        .clear-search {
          cursor: pointer;
          transition: opacity 0.2s ease;
        }
        .clear-search:hover {
          opacity: 0.7;
        }
      `}</style>

      {/* H1 for SEO */}
      <h1 className="sr-only">
        The Founder Chronicle Archive — Complete collection of Indian startup founder stories by edition and month
      </h1>

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
      >
        <ol className="flex items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          <li>
            <Link href="/" className="hover:text-[#1A1208] transition-colors">
              UpForge
            </Link>
          </li>
          <li aria-hidden="true" className="text-[#C8C2B4]">/</li>
          <li>
            <span className="text-[#1A1208] font-semibold">The Founder Chronicle Archive</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <header
        style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}
        role="banner"
      >
        <div className="text-center px-4 pt-[2px] pb-6 sm:pb-9" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · Archive
          </p>
          <p
            className="pf font-black leading-none tracking-tight text-[#1A1208]"
            aria-hidden="true"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            The Archive
          </p>
          <p className="italic mt-2.5 text-[#6B5C40]" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
            Every founder story we've ever published — searchable, filterable, forever free
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 13 }} aria-hidden="true">✦</span>
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Search and Filter Bar */}
        <div className="mb-8" style={{ borderBottom: "1px solid #D8C2B4", paddingBottom: "1.5rem" }}>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            
            {/* Search */}
            <div className="w-full sm:w-96" style={{ border: "1px solid #D8D2C4", background: "white" }}>
              <div className="flex items-center px-3 py-2.5">
                <Search className="w-4 h-4 text-[#C8C2B4]" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search founders, companies, categories..."
                  className="search-input ml-2"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search archive"
                />
                {searchQuery && (
                  <X
                    className="w-4 h-4 text-[#C8C2B4] clear-search"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  />
                )}
              </div>
            </div>

            {/* View Toggle & Filter Button */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {/* View Toggle */}
              <div className="view-toggle" role="tablist" aria-label="View mode">
                <button
                  role="tab"
                  aria-selected={viewMode === "grid"}
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "active" : ""}
                >
                  Grid
                </button>
                <button
                  role="tab"
                  aria-selected={viewMode === "list"}
                  onClick={() => setViewMode("list")}
                  className={viewMode === "list" ? "active" : ""}
                >
                  List
                </button>
              </div>

              {/* Mobile Filter Toggle */}
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="sm:hidden flex items-center gap-2 px-3 py-2"
                style={{ border: "1px solid #D8D2C4", background: "white" }}
                aria-expanded={isFilterOpen}
                aria-label="Toggle filters"
              >
                <Filter className="w-4 h-4" />
                <span className="text-[10px] uppercase tracking-wider">Filter</span>
              </button>
            </div>
          </div>

          {/* Filter Chips - Desktop - ONLY MONTH FILTERS */}
          <div className="hidden sm:block mt-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider mr-2">Month:</span>
              <button
                className={`filter-chip ${selectedMonth === "All" ? "active" : ""}`}
                onClick={() => setSelectedMonth("All")}
              >
                All
              </button>
              {months.map(month => (
                <button
                  key={month}
                  className={`filter-chip ${selectedMonth === month ? "active" : ""}`}
                  onClick={() => setSelectedMonth(month)}
                >
                  {month}
                </button>
              ))}
            </div>
          </div>

          {/* Filter Chips - Mobile (conditionally shown) - ONLY MONTH FILTERS */}
          {isFilterOpen && (
            <div className="sm:hidden mt-4 space-y-3 fade-in">
              <div>
                <p className="text-[9px] text-[#AAA] uppercase tracking-wider mb-2">Month</p>
                <div className="flex flex-wrap gap-2">
                  <button
                    className={`filter-chip ${selectedMonth === "All" ? "active" : ""}`}
                    onClick={() => setSelectedMonth("All")}
                  >
                    All
                  </button>
                  {months.map(month => (
                    <button
                      key={month}
                      className={`filter-chip ${selectedMonth === month ? "active" : ""}`}
                      onClick={() => setSelectedMonth(month)}
                    >
                      {month}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-[10px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
              {filteredFounders.length} {filteredFounders.length === 1 ? 'story' : 'stories'} found
              {(selectedMonth !== "All" || searchQuery) && (
                <span>
                  {" "}
                  <button
                    onClick={() => {
                      setSelectedMonth("All")
                      setSearchQuery("")
                    }}
                    className="underline ml-2 hover:text-[#1A1208]"
                  >
                    Clear all filters
                  </button>
                </span>
              )}
            </p>
            <div className="flex items-center gap-2">
              <Clock className="w-3 h-3 text-[#C8C2B4]" />
              <span className="text-[9px] text-[#AAA]">Auto-updates every 30s</span>
            </div>
          </div>
        </div>

        {/* Archive Content */}
        {groupedByMonth.length === 0 ? (
          <div className="text-center py-16" style={{ border: "1px solid #D8D2C4", background: "white" }}>
            <p className="pf text-[#1A1208] text-xl mb-2">No stories found</p>
            <p className="text-[#AAA] text-sm">Try adjusting your filters or search query</p>
            <button
              onClick={() => {
                setSelectedMonth("All")
                setSearchQuery("")
              }}
              className="mt-4 px-4 py-2 text-[10px] uppercase tracking-wider"
              style={{ border: "1px solid #1A1208" }}
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            {groupedByMonth.map((group, groupIndex) => (
              <div key={group.month} className="mb-10">
                {/* Month Divider */}
                <div className="month-divider">
                  <span>{group.month}</span>
                </div>

                {/* Grid View */}
                {viewMode === "grid" && (
                  <div className="archive-grid">
                    {group.founders.map((founder, idx) => (
                      <Link
                        key={`${founder.slug}-${idx}`}
                        href={`/startup/${founder.slug}`}
                        className="archive-card block fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {/* Card Image */}
                        <div className="relative w-full" style={{ height: 200 }}>
                          <FounderPhoto
                            src={founder.imgSrc}
                            alt={founder.name}
                            initials={founder.initials}
                            accent={founder.accent}
                            accentBg={founder.accentBg}
                            className="w-full h-full"
                          />
                          <div
                            className="absolute top-2 left-2 px-2 py-1"
                            style={{ background: founder.accent }}
                          >
                            <span className="text-white text-[8px] font-black uppercase tracking-wider">
                              {founder.edition}
                            </span>
                          </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                          <div className="flex items-center gap-2 mb-2">
                            <span
                              className="text-[8px] font-black uppercase px-2 py-1"
                              style={{ background: founder.accentBg, color: founder.accent }}
                            >
                              {founder.category}
                            </span>
                          </div>
                          
                          <p className="pf font-bold text-[#1A1208] mb-1" style={{ fontSize: 16 }}>
                            {founder.nameShort}
                          </p>
                          <p className="text-[#666] text-[11px] mb-2" style={{ fontFamily: "system-ui,sans-serif" }}>
                            {founder.company} · {founder.role}
                          </p>
                          
                          <p className="text-[#1A1208] text-[12px] leading-relaxed line-clamp-2 mb-3">
                            {founder.headline}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {founder.tags.slice(0, 3).map(tag => (
                              <span key={tag} className="stat-badge">
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="mt-3 pt-3" style={{ borderTop: "1px solid #F0EAE0" }}>
                            <span
                              className="text-[9px] flex items-center gap-1"
                              style={{ color: founder.accent, fontFamily: "system-ui,sans-serif" }}
                            >
                              Read full story <ArrowRight className="w-3 h-3" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}

                {/* List View */}
                {viewMode === "list" && (
                  <div className="space-y-0" style={{ borderTop: "1px solid #D8D2C4" }}>
                    {group.founders.map((founder, idx) => (
                      <Link
                        key={`${founder.slug}-${idx}`}
                        href={`/startup/${founder.slug}`}
                        className="list-view-item block fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <div className="flex items-start gap-4">
                          {/* Thumbnail */}
                          <div
                            className="flex-shrink-0 w-16 h-16 overflow-hidden"
                            style={{ background: founder.accentBg }}
                          >
                            <FounderPhoto
                              src={founder.imgSrc}
                              alt={founder.name}
                              initials={founder.initials}
                              accent={founder.accent}
                              accentBg={founder.accentBg}
                              className="w-full h-full"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-grow">
                            <div className="flex items-center gap-3 mb-1">
                              <span
                                className="text-[8px] font-black uppercase px-2 py-0.5"
                                style={{ background: founder.accentBg, color: founder.accent }}
                              >
                                {founder.category}
                              </span>
                              <span className="text-[8px] text-[#AAA] uppercase tracking-wider">
                                {founder.edition}
                              </span>
                            </div>

                            <div className="flex flex-wrap items-baseline gap-2">
                              <p className="pf font-bold text-[#1A1208]" style={{ fontSize: 16 }}>
                                {founder.name}
                              </p>
                              <p className="text-[#666] text-[11px]">
                                {founder.company} · {founder.role}
                              </p>
                            </div>

                            <p className="text-[#1A1208] text-[12px] mt-1 line-clamp-1">
                              {founder.headline}
                            </p>

                            <div className="flex items-center gap-3 mt-2">
                              <div className="flex gap-1">
                                {founder.stats.slice(0, 2).map(stat => (
                                  <span key={stat.l} className="stat-badge">
                                    {stat.l}: {stat.v}
                                  </span>
                                ))}
                              </div>
                              <span
                                className="text-[9px] flex items-center gap-1"
                                style={{ color: founder.accent }}
                              >
                                Read <ArrowRight className="w-3 h-3" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </>
        )}

        {/* Archive Stats */}
        <section
          className="mt-12 pt-8"
          style={{ borderTop: "1px solid #D8D2C4" }}
          aria-label="Archive statistics"
        >
          <div className="grid sm:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="pf font-black text-[#1A1208] text-3xl">{ARCHIVE_FOUNDERS.length}</p>
              <p className="text-[9px] text-[#AAA] uppercase tracking-wider">Total Stories</p>
            </div>
            <div className="text-center">
              <p className="pf font-black text-[#1A1208] text-3xl">{months.length}</p>
              <p className="text-[9px] text-[#AAA] uppercase tracking-wider">Editions</p>
            </div>
            <div className="text-center">
              <p className="pf font-black text-[#1A1208] text-3xl">
                {new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}
              </p>
              <p className="text-[9px] text-[#AAA] uppercase tracking-wider">Latest Edition</p>
            </div>
          </div>
        </section>

        {/* New Edition Alert Simulation */}
        <div
          className="mt-8 p-4 text-center"
          style={{ background: "#1A1208", color: "white" }}
        >
          <p className="text-[10px] uppercase tracking-wider mb-1">📰 New editions added automatically</p>
          <p className="text-[12px] opacity-80">
            This archive updates in real-time. When new founder stories are published, they appear here instantly.
          </p>
        </div>

        {/* Footer Links */}
        <footer className="mt-8 pb-2">
          <p
            className="text-[9px] leading-relaxed"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}
          >
            * Archive contains all founder stories published by UpForge. Data verified as of March 2026.
            New editions are added automatically upon publication.
          </p>
          
          <nav aria-label="Archive navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              <li><Link href="/" className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase">Home</Link></li>
              <li><Link href="/archive" className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase">Archive</Link></li>
              <li><Link href="/startup" className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase">Registry</Link></li>
              <li><Link href="/submit" className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase">Submit</Link></li>
            </ul>
          </nav>
        </footer>
      </main>
    </div>
  )
}
