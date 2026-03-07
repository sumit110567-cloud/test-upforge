"use client"

// app/founder-stories/page.tsx
// THE FOUNDER CHRONICLE — Broadsheet Newspaper UI
//
// ─── HOW TO ADD IMAGES ───────────────────────────────────────────────────────
// All founder image URLs are set to "https://www.sample.com/FOUNDER_NAME.jpg"
// Search for "www.sample.com" to find all 5 placeholders and replace with real URLs.
// Images are plain <img> tags — any public URL (direct link, CDN, Cloudinary, etc.) works.
// Recommended size: 800×1000px or taller portrait, JPG/WebP.
// ─────────────────────────────────────────────────────────────────────────────

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [
  {
    no: "01", edition: "No. 01",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru", context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
    // ▼ REPLACE THIS URL with real founder photo
    imgSrc: "https://i.ytimg.com/vi/HBSOii00H68/maxresdefault.jpg",
    accent: "#D97706", accentBg: "#FFFBEB", accentBorder: "#FDE68A",
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
  },
  {
    no: "02", edition: "No. 02",
    category: "EDTECH",
    name: "Alakh Pandey",
    nameShort: "Alakh Pandey",
    initials: "AP",
    company: "PhysicsWallah", slug: "physicswallah",
    role: "Founder & CEO",
    city: "Prayagraj, UP", context: "YouTube teacher turned unicorn CEO",
    valuation: "$2.8B", funding: "$700M", founded: "2014",
    // ▼ REPLACE THIS URL with real founder photo
    imgSrc: "https://i0.wp.com/globalkashmir.net/wp-content/uploads/2024/08/Physicswallah.jpg",
    accent: "#059669", accentBg: "#ECFDF5", accentBorder: "#A7F3D0",
    headline: "BYJU's charged ₹80,000 for what he taught for ₹2,000. That wasn't a mission — it was just obviously the right thing to do.",
    deck: "Alakh Pandey disrupted Indian edtech without a Harvard MBA or a term sheet — just a bedroom camera and an impossibly fair price.",
    cols: [
      {
        h: "The Bedroom Studio",
        b: "In 2014, Alakh Pandey was preparing for engineering entrance exams in Prayagraj and teaching the same material to earn money. He set up a camera in his room — not a studio, just a room — and started filming Physics lessons.\n\nThe difference was palpable: he taught like he was talking to a friend, not performing for an institution. No script, no production budget. Just clarity and genuine care for the student sitting somewhere in UP, unable to afford the alternatives."
      },
      {
        h: "The Price That Changed Everything",
        b: "By 2020, his YouTube channel had 5M subscribers. In 2021, he launched the PW app at ₹2,000/year — against BYJU's ₹80,000. Six million students enrolled within weeks. He raised $100M, hit unicorn status, and built the edtech story India had been waiting for — while BYJU's collapsed under its own weight.\n\nAlakh understood the real market: not 20M rich students, but 350M students who need something they can actually pay for."
      },
      {
        h: "Profitable. By Design.",
        b: "PhysicsWallah remained profitable through its entire growth — a near-impossibility in a sector that burned billions on celebrity ads. By 2025, it served 10M+ learners across JEE, NEET, and UPSC prep — and successfully listed on Indian exchanges in November 2025.\n\nAlakh grew up watching his parents manage tight budgets. He built his entire company around never making affordability the barrier. It is the only Indian edtech unicorn that is both affordable and profitable."
      }
    ],
    pull: "BYJU's charged ₹80,000 for what I teach for ₹2,000. That wasn't a mission statement. It was just obviously the right thing to do.",
    pullBy: "Alakh Pandey",
    lesson: "Affordability is not a positioning strategy. It can be the entire moat.",
    stats: [
      { l: "Valuation", v: "$2.8B" },
      { l: "Students", v: "10M+" },
      { l: "Annual Fee", v: "₹2,000" },
      { l: "Founded", v: "2014" },
    ],
  },
  {
    no: "03", edition: "No. 03",
    category: "FOODTECH",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "Zomato / Eternal", slug: "zomato",
    role: "Founder & CEO",
    city: "Delhi", context: "IIT Delhi → Bain & Co → Foodiebay at 25",
    valuation: "$33B", funding: "$3.2B+", founded: "2008",
    // ▼ REPLACE THIS URL with real founder photo
    imgSrc: "https://pbs.twimg.com/media/GSiTEQ2WcAAwE4b.png",
    accent: "#DC2626", accentBg: "#FFF1F2", accentBorder: "#FECDD3",
    headline: "#1 on Hurun India 2025. Zomato is worth ₹3.2 lakh crore. It started as scanned restaurant menus.",
    deck: "Deepinder Goyal tops India's self-made entrepreneur rankings. The Zomato story is 17 years of pivots, a brutal stock crash, and one very public bet on profitability.",
    cols: [
      {
        h: "Scanned Menus, 2008",
        b: "Deepinder Goyal was 25, consulting at Bain & Company, when he noticed colleagues spending long lunches passing around printed restaurant menus. He scanned them, put them on a website, and called it Foodiebay. Traffic arrived without advertising.\n\nHe quit Bain within months. Rebranded to Zomato in 2010 — a name that meant nothing but was clean, sticky, and available. What followed was a decade of relentless iteration: discovery, reviews, delivery, groceries, Blinkit quick commerce."
      },
      {
        h: "The Public Company Bet",
        b: "Zomato's 2021 IPO was the defining moment for Indian startup optimism. It listed at a premium — then fell 70% in 2022 as global markets repriced every loss-making tech company. Deepinder doubled down: cut costs, killed zombie products, set a public profitability target.\n\nZomato posted its first quarterly profit in Q2 FY2024. By 2025, the parent was renamed Eternal and valued at ₹3.2 lakh crore — up 27% year-on-year. Hurun India placed Deepinder at No. 1."
      },
      {
        h: "17 Years. Still Reinventing.",
        b: "The Eternal of 2025 — profitable food delivery, Blinkit, District ticketing, LAT Aerospace — is unrecognisable from the Foodiebay of 2008. That is the point.\n\nDeepinder's story is about adaptation above everything else. The companies that survive 17 years aren't the ones with the best original idea. They are the ones willing to change — and courageous enough to do it publicly."
      }
    ],
    pull: "We have to keep reinventing Zomato. The product that got us here will not get us to where we need to go.",
    pullBy: "Deepinder Goyal",
    lesson: "The company that survives is rarely the one that started. It's the one that kept reinventing.",
    stats: [
      { l: "Mkt. Cap", v: "₹3.2L Cr" },
      { l: "Hurun 2025", v: "#1" },
      { l: "Founded", v: "2008" },
      { l: "Raised", v: "$3.2B+" },
    ],
  },
  {
    no: "04", edition: "No. 04",
    category: "FINTECH",
    name: "Nithin Kamath",
    nameShort: "Nithin Kamath",
    initials: "NK",
    company: "Zerodha", slug: "zerodha",
    role: "Founder & CEO",
    city: "Bengaluru", context: "Dropped out at 17 to trade. Never took VC.",
    valuation: "$8.2B", funding: "Fully bootstrapped", founded: "2010",
    // ▼ REPLACE THIS URL with real founder photo
    imgSrc: "https://www.businessoutreach.in/wp-content/uploads/2023/08/Nithin-Kamath-1.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
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
  },
  {
    no: "05", edition: "No. 05",
    category: "D2C / BEAUTY",
    name: "Falguni Nayar",
    nameShort: "Falguni Nayar",
    initials: "FN",
    company: "Nykaa", slug: "nykaa",
    role: "Founder & CEO",
    city: "Mumbai", context: "Left investment banking at 50",
    valuation: "$2.5B", funding: "Bootstrapped to IPO", founded: "2012",
    // ▼ REPLACE THIS URL with real founder photo
    imgSrc: "https://i.cdn.newsbytesapp.com/images/l12420211110152610.jpeg",
    accent: "#C026D3", accentBg: "#FDF4FF", accentBorder: "#E879F9",
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
  },

  {
  no: "06", edition: "No. 06",
  category: "FINTECH / BROKERAGE",
  name: "Nithin Kamath",
  nameShort: "Nithin Kamath",
  initials: "NK",
  company: "Zerodha", slug: "zerodha",
  role: "Founder & CEO",
  city: "Bangalore", context: "Bootstrapped fintech revolution",
  valuation: "$3B+", funding: "Bootstrapped", founded: "2010",
  imgSrc: "data:image/jpeg;base64,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",
  accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#93C5FD",
  headline: "He built India's largest stock brokerage without raising venture capital — and forced the entire industry to cut fees.",
  deck: "Nithin Kamath transformed Indian retail investing by proving that technology, transparency, and low fees could beat decades-old brokerage giants.",

  cols: [
    {
      h: "The Trader Who Built a Platform",
      b: "Before Zerodha existed, Nithin Kamath was already trading in the markets. As an active trader in the early 2000s, he constantly faced high brokerage costs and outdated trading platforms.\n\nInstead of accepting the system, he decided to build something better. In 2010, along with his brother Nikhil Kamath, he launched Zerodha — India's first discount brokerage."
    },
    {
      h: "Disrupting a Billion-Dollar Industry",
      b: "At the time, brokerages charged high commissions for every trade. Zerodha introduced a radically simple idea: flat pricing.\n\nThe platform also built modern trading tools like Kite and Coin that simplified investing for a new generation of retail investors.\n\nWithin a decade, Zerodha became India's largest brokerage by active clients."
    },
    {
      h: "Bootstrapped and Profitable",
      b: "Unlike most fintech startups, Zerodha never raised venture capital. The company grew entirely through profits and product innovation.\n\nToday Zerodha serves millions of investors and processes billions in daily trades — proving that sustainable businesses don't always require venture funding."
    }
  ],

  pull: "If you build something that genuinely improves people's financial lives, growth will follow naturally.",
  pullBy: "Nithin Kamath",

  lesson: "Great companies are built by solving real problems — not chasing valuations.",

  stats: [
    { l: "Valuation", v: "$3B+" },
    { l: "Users", v: "10M+" },
    { l: "Founded", v: "2010" },
    { l: "Funding", v: "Bootstrapped" },
  ],
},

  {
  no: "07", edition: "No. 07",
  category: "MOBILITY / TRANSPORT",
  name: "Bhavish Aggarwal",
  nameShort: "Bhavish Aggarwal",
  initials: "BA",
  company: "Ola", slug: "ola",
  role: "Co-Founder & CEO",
  city: "Bangalore", context: "Built India's largest ride-hailing platform",
  valuation: "$7B+", funding: "$4B+", founded: "2010",
  imgSrc: "data:image/jpeg;base64,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",
  accent: "#EA580C", accentBg: "#FFF7ED", accentBorder: "#FDBA74",
  headline: "A single bad taxi ride inspired him to build one of India's largest mobility platforms.",
  deck: "Bhavish Aggarwal founded Ola after a frustrating cab experience — and went on to build a transportation network serving hundreds of cities across India.",

  cols: [
    {
      h: "The Problem That Sparked Ola",
      b: "In 2010, Bhavish Aggarwal was traveling from Bangalore to Bandipur when his taxi driver abruptly stopped midway and demanded extra money.\n\nThe experience revealed a huge gap in India's transportation infrastructure. Bhavish realized millions of commuters faced the same problem daily."
    },
    {
      h: "Building India's Ride-Hailing Giant",
      b: "Bhavish partnered with Ankit Bhati to launch Ola — a platform connecting passengers with reliable drivers through mobile technology.\n\nThe startup expanded rapidly across Indian cities and soon became a dominant player in ride-hailing."
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
},


  {
  no: "08", edition: "No. 08",
  category: "STARTUP DATA / MEDIA",
  name: "Your Name",
  nameShort: "Your Name",
  initials: "YN",
  company: "Upforge",
  slug: "upforge",
  role: "Founder",
  city: "India",
  context: "Building India's largest startup registry",
  valuation: "Private",
  funding: "Bootstrapped",
  founded: "2024",
  imgSrc: "/luckyinternadda.jpg",
  accent: "#16A34A",
  accentBg: "#F0FDF4",
  accentBorder: "#86EFAC",

  headline: "He is building India's most comprehensive startup intelligence platform — one verified company at a time.",

  deck: "Upforge was created with a simple idea: India needed a transparent, structured, and searchable database of its startups. A place where founders, investors, and researchers could discover companies that are actually building the future.",

  cols: [
    {
      h: "The Problem With Startup Data",
      b: "India's startup ecosystem has exploded in the last decade, yet reliable information about early-stage companies remains fragmented across news articles, social media, and outdated directories.\n\nUpforge aims to organize this chaos into a single verified registry."
    },
    {
      h: "A New Kind of Startup Platform",
      b: "Instead of focusing on hype or headlines, the platform focuses on structured data: founders, sectors, funding, traction, and verified company profiles.\n\nThe goal is to make Upforge the most trusted startup intelligence platform in India."
    },
    {
      h: "Building a Public Record of Innovation",
      b: "Every great ecosystem needs a historical record. Upforge aims to become that archive — documenting the founders, ideas, and companies shaping India's future.\n\nFrom early startups to unicorns, the mission is simple: build the most reliable startup registry in the country."
    }
  ],

  pull: "If the future is being built by startups, someone needs to document that future.",
  pullBy: "Founder, Upforge",

  lesson: "Great platforms start by organizing information others ignore.",

  stats: [
    { l: "Startups Indexed", v: "72,000+" },
    { l: "Founded", v: "2024" },
    { l: "Funding", v: "Bootstrapped" },
    { l: "Mission", v: "Startup Intelligence" },
  ],
},
]

// ─── FOUNDER PHOTO COMPONENT ──────────────────────────────────────────────────
// Shows image if URL is real, else shows a clean monogram card
function FounderPhoto({
  src, alt, initials, accent, accentBg,
  className = "", style = {}
}: {
  src: string; alt: string; initials: string
  accent: string; accentBg: string
  className?: string; style?: React.CSSProperties
}) {
  const isPlaceholder = src.includes("www.sample.com")
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
          loading="eager"
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          {/* Big initial circle */}
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "2.2rem", fontFamily: "Georgia,serif" }}
          >
            {initials}
          </div>
          <p
            className="text-[9px] uppercase tracking-[0.22em] text-center px-6 leading-relaxed"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
          >
            {alt}
          </p>
          {/* Placeholder hint */}
          <p
            className="text-[8px] uppercase tracking-wider px-4 text-center"
            style={{ color: accent + "60", fontFamily: "system-ui,sans-serif" }}
          >
            Replace src URL to show photo
          </p>
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function FounderStoriesPage() {
  const [idx, setIdx] = useState(0)
  const f = FOUNDERS[idx]
  const isFirst = idx === 0
  const isLast = idx === FOUNDERS.length - 1

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [idx])

  return (
    <div style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: storyIn .3s ease both; }

        /* 3 newspaper columns with rule lines */
        @media (min-width: 640px) {
          .newspaper-cols {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .newspaper-cols > div {
            padding: 0 1.4rem;
            border-right: 1px solid #C8C2B4;
          }
          .newspaper-cols > div:first-child {
            padding-left: 0;
          }
          .newspaper-cols > div:last-child {
            border-right: none;
            padding-right: 0;
          }
        }

        /* Drop cap */
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.9em;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.07em;
          margin-top: 0.05em;
          color: #1A1208;
        }
        @media (max-width: 639px) {
          .dropcap::first-letter { font-size: 3em; }
        }

        /* Nav button hover */
        .nbtn:not([disabled]):hover {
          background: #1A1208 !important;
          color: white !important;
        }

        /* Thumb hover */
        .thumb { transition: opacity .18s ease; }
        .thumb:hover { opacity: 1 !important; }

        /* Right column sticky on tall screens */
        @media (min-width: 1024px) {
          .right-sticky {
            position: sticky;
            top: 0;
            max-height: 100vh;
            overflow-y: auto;
          }
        }

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }
      `}</style>

      {/* ══════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════ */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>

        {/* Dateline bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-8 py-1.5"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <Link href="/" className="text-[9px] text-[#888] uppercase tracking-widest hover:text-[#1A1208] transition-colors">
              upforge.in
            </Link>
            <span className="text-[#C8C2B4]"> / </span>
            <span className="text-[9px] text-[#888] uppercase tracking-widest">Founder Series</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-[9px] text-[#AAA] uppercase tracking-widest">Vol. I · India</span>
            <span className="text-[9px] text-[#AAA] uppercase tracking-widest">March 2026</span>
          </div>
        </div>

        {/* Publication name */}
        <div className="text-center px-4 py-6 sm:py-9" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · India Edition
          </p>
          <h1 className="pf font-black leading-none tracking-tight text-[#1A1208]"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}>
            The Founder Chronicle
          </h1>
          <p className="italic mt-2.5 text-[#6B5C40]" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
            Stories of the builders reshaping India — verified, editorial, March 2026
          </p>
          {/* Ornament rule */}
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 13 }}>✦</span>
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Story tabs */}
        <div
          className="flex items-stretch overflow-x-auto"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif", scrollbarWidth: "none" }}
        >
          <span className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-4 py-3 self-center flex-shrink-0">
            In this edition:
          </span>
          {FOUNDERS.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className="flex-shrink-0 px-4 py-3 text-[9px] font-bold uppercase tracking-wider border-l transition-colors"
              style={{
                borderColor: "#D8D2C4",
                color: i === idx ? s.accent : "#888",
                borderBottom: `2.5px solid ${i === idx ? s.accent : "transparent"}`,
                background: i === idx ? "rgba(255,255,255,0.55)" : "transparent",
                marginBottom: "-1px",
              }}
            >
              {s.edition} · {s.nameShort}
            </button>
          ))}
        </div>
      </header>

      {/* ══════════════════════════════════════════
          STORY CONTENT
      ══════════════════════════════════════════ */}
      <main key={idx} className="story-in max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {/* Two-column layout: story text | photo sidebar */}
        <div
          className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >

          {/* ════ LEFT: EDITORIAL TEXT ════ */}
          <div className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category + edition pill */}
            <div className="flex items-center gap-3 mb-6" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: f.accent }}
              >
                {f.category}
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">
                {f.edition} · March 2026
              </span>
            </div>

            {/* HEADLINE */}
            <h2
              className="pf font-black leading-[1.06] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 3rem)" }}
            >
              {f.headline}
            </h2>

            {/* DECK */}
            <p
              className="italic leading-[1.72] mb-6 pb-6"
              style={{
                color: "#5A4A30",
                fontSize: "clamp(14px, 2vw, 17px)",
                borderBottom: "1px solid #C8C2B4"
              }}
            >
              {f.deck}
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {["By UpForge Editorial", f.city, `Est. ${f.founded}`, f.context].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{item}</span>
                  {i < arr.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* ── MOBILE ONLY: photo block ── */}
            <div className="lg:hidden mb-8">
              <FounderPhoto
                src={f.imgSrc}
                alt={`${f.name} — ${f.company} founder`}
                initials={f.initials}
                accent={f.accent}
                accentBg={f.accentBg}
                className="w-full"
                style={{ height: "min(280px, 56vw)", minHeight: 200 }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>{f.name}</p>
                <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* ── 3-COLUMN NEWSPAPER BODY ── */}
            <div className="newspaper-cols">
              {f.cols.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  {/* Column head with accent underline */}
                  <h3
                    className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{
                      fontSize: 11,
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${f.accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {col.h}
                  </h3>

                  {/* Body paragraphs */}
                  {col.b.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{
                        fontSize: "clamp(12.5px, 1.3vw, 13.5px)",
                        fontFamily: "'Georgia','Times New Roman',serif",
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* ── PULL QUOTE ── */}
            <div
              className="mt-10 pt-6 pb-6 text-center"
              style={{
                borderTop: `3px solid ${f.accent}`,
                borderBottom: "1px solid #C8C2B4",
              }}
            >
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, marginBottom: 10 }}>❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, margin: "10px 0 8px" }}>❧</span>
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[#AAA]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {f.pullBy}, {f.company}
              </p>
            </div>

          </div>

          {/* ════ RIGHT: PHOTO + FACTS (desktop) ════ */}
          <div className="hidden lg:block">
            <div className="right-sticky pl-8 pt-8 pb-8 flex flex-col gap-5">

              {/* FOUNDER PHOTO */}
              <div className="relative w-full" style={{ height: 380 }}>
                <FounderPhoto
                  src={f.imgSrc}
                  alt={`${f.name} — ${f.company} founder`}
                  initials={f.initials}
                  accent={f.accent}
                  accentBg={f.accentBg}
                  className="w-full h-full"
                />
                {/* Caption gradient overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{
                    background: "linear-gradient(to top, rgba(12,7,2,0.96) 55%, transparent)",
                  }}
                >
                  <p className="pf text-white font-bold leading-snug" style={{ fontSize: 13.5 }}>{f.name}</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {f.role} · {f.company}
                  </p>
                </div>
              </div>

              {/* BY THE NUMBERS */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                    By the Numbers
                  </p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {f.stats.map((s, si) => (
                    <div key={si} className="px-4 py-3.5" style={{ borderColor: "#D8D2C4" }}>
                      <p className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {s.l}
                      </p>
                      <p className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.35rem" }}>
                        {s.v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* THE LESSON */}
              <div className="px-4 py-4" style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  The Lesson
                </p>
                <p
                  className="italic text-[#1A1208] leading-[1.72]"
                  style={{ fontSize: 13.5, fontFamily: "'Georgia',serif" }}
                >
                  {f.lesson}
                </p>
              </div>

              {/* PROFILE LINK */}
              <Link
                href={`/startup/${f.slug}`}
                className="group flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-70"
                style={{ border: `1.5px solid ${f.accent}` }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  View {f.company} on UpForge
                </span>
                <ArrowUpRight className="w-4 h-4" style={{ color: f.accent }} />
              </Link>

              {/* Context footnote */}
              <p
                className="text-[9px] text-[#AAA] italic pt-2"
                style={{ borderTop: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
              >
                {f.context} · {f.city} · Est. {f.founded}
              </p>

            </div>
          </div>

        </div>

        {/* ══════════════════════════════════════════
            PAGE NAVIGATION — prev / dots / next
        ══════════════════════════════════════════ */}
        <div
          className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <button
            onClick={() => !isFirst && setIdx(i => i - 1)}
            disabled={isFirst}
            className="nbtn flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            style={{
              border: `1px solid ${isFirst ? "#D8D2C4" : "#1A1208"}`,
              color: isFirst ? "#C8C2B4" : "#1A1208",
              cursor: isFirst ? "not-allowed" : "pointer",
              fontSize: 10,
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            {isFirst ? "First Story" : FOUNDERS[idx - 1].nameShort}
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to story ${i + 1}`}
                className="h-1.5 rounded-sm transition-all"
                style={{
                  width: i === idx ? 28 : 6,
                  background: i === idx ? f.accent : "#C8C2B4",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && setIdx(i => i + 1)}
            disabled={isLast}
            className="nbtn flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            style={{
              border: `1px solid ${isLast ? "#D8D2C4" : "#1A1208"}`,
              color: isLast ? "#C8C2B4" : "#1A1208",
              cursor: isLast ? "not-allowed" : "pointer",
              fontSize: 10,
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            {isLast ? "Last Story" : FOUNDERS[idx + 1].nameShort}
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* ══════════════════════════════════════════
            ALL STORIES — thumbnail index
        ══════════════════════════════════════════ */}
        <div className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            All Stories in This Edition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                className="thumb text-left"
                style={{ opacity: i === idx ? 1 : 0.48 }}
              >
                {/* Thumbnail photo */}
                <div
                  className="relative w-full overflow-hidden mb-2.5"
                  style={{
                    height: 116,
                    borderTop: `3px solid ${s.accent}`,
                    background: s.accentBg,
                  }}
                >
                  <FounderPhoto
                    src={s.imgSrc}
                    alt={s.nameShort}
                    initials={s.initials}
                    accent={s.accent}
                    accentBg={s.accentBg}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p
                  className="text-[8.5px] font-black uppercase tracking-wider mb-0.5"
                  style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  {s.edition}
                </p>
                <p className="pf font-bold text-[#1A1208] leading-snug" style={{ fontSize: 12.5 }}>
                  {s.nameShort}
                </p>
                <p className="text-[9.5px] text-[#AAA] mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {s.company}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            INSIGHT STRIP
        ══════════════════════════════════════════ */}
        <div className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge Founder Insights
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              {
                v: "~80%", l: "First-generation founders",
                b: "India's under-40 unicorn builders mostly had no inherited capital or legacy networks. They built in public — which is exactly why their stories are worth studying."
              },
              {
                v: "$950B", l: "Value created by under-40s",
                b: "Avendus-Hurun India 2025: founders under 40 manage businesses worth more than Switzerland's entire GDP — and most started with nothing."
              },
              {
                v: "126", l: "Unicorns — and rising",
                b: "India just crossed 126 unicorns. The founders reading these stories today will build the next 126. UpForge exists to help them get discovered."
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4"
                style={{ background: "white", border: "1px solid #D8D2C4" }}
              >
                <p className="pf font-black text-[#1A1208] leading-none mb-1" style={{ fontSize: "2.1rem" }}>
                  {item.v}
                </p>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.18em] mb-2.5"
                  style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
                >
                  {item.l}
                </p>
                <p
                  className="text-[11.5px] leading-relaxed"
                  style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}
                >
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════ */}
        <div className="pt-8 grid sm:grid-cols-2 gap-6 items-center">
          <div>
            <p
              className="text-[8.5px] font-black uppercase tracking-[0.24em] mb-2.5"
              style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}
            >
              UpForge Registry
            </p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "1.3rem" }}>
              Your founder story starts with a verified profile.
            </p>
            <p
              className="text-[12px] leading-relaxed"
              style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}
            >
              Get independently verified and indexed in India's most trusted startup registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: 11, fontFamily: "system-ui,sans-serif" }}
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <div className="flex flex-wrap gap-3">
              {[
                { l: "AI Startups", h: "/top-ai-startups" },
                { l: "SaaS", h: "/best-saas-startups" },
                { l: "Unicorns", h: "/indian-unicorns" },
                { l: "All Registry", h: "/startup" },
              ].map((lnk) => (
                <Link
                  key={lnk.h}
                  href={lnk.h}
                  className="flex items-center gap-0.5 text-[9px] uppercase tracking-wider hover:text-[#1A1208] transition-colors"
                  style={{ color: "#888", fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p
          className="mt-8 pb-2 text-[9px] leading-relaxed"
          style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
        >
          * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn and company announcements as of March 2026.
          Founder images: replace all <code>www.sample.com</code> URLs with real direct image links.
          UpForge is an independent registry — no paid placements.
        </p>

      </main>
    </div>
  )
}
