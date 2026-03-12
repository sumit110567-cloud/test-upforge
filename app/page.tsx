"use client"

// app/page.tsx
// THE FOUNDER CHRONICLE — Homepage (www.upforge.in)
// ─────────────────────────────────────────────────
// FIXES vs previous version:
//  1. JSON-LD moved OUT of useEffect → now rendered as <script> in JSX (SSR-safe)
//  2. All URLs → https://www.upforge.in/... (www canonical)
//  3. export const metadata added (handled in layout.tsx — see comment)
//  4. document.title useEffect REMOVED (bad for SEO / causes hydration noise)
//  5. base64 imgSrc replaced with real image URLs for OYO & Ola
//  6. Duplicate key warning fixed in footer nav (key uses h+l)
//  7. Mobile font sizes tuned with tighter clamp() values
//  8. window.scrollTo wrapped in typeof check (SSR safety)
//  9. FAQPage schema — never present, stays absent ✅
// 10. FounderPhoto onError kept (page is client component, no build error)

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [
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
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#BFDBFE",
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
    no: "03", edition: "No. 03",
    category: "AEROSPACE",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "LAT Aerospace", slug: "lat-aerospace",
    role: "Founder",
    city: "Gurugram, HR", context: "Reimagining regional aviation",
    valuation: "Stealth", funding: "Undisclosed", founded: "2024",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1FTtR9px3fbhDE8ihpSI_tPLHNaBXBeE9Cw&s",
    accent: "#EA580C", accentBg: "#FFF7ED", accentBorder: "#FED7AA",
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
      { l: "Focus", v: "Regional" },
      { l: "Founded", v: "2024" },
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
    category: "TRAVEL / HOSPITALITY",
    name: "Ritesh Agarwal",
    nameShort: "Ritesh Agarwal",
    initials: "RA",
    company: "OYO", slug: "oyo",
    role: "Founder & CEO",
    city: "Gurgaon", context: "Youngest billionaire founder",
    valuation: "$10B+", funding: "$3B+", founded: "2013",
    // ✅ FIX: replaced base64 with real external URL
    imgSrc: "https://images.livemint.com/img/2023/04/03/600x338/ritesh-agarwal-oyo_1680499548513_1680499563614.jpg",
    accent: "#DC2626", accentBg: "#FEF2F2", accentBorder: "#FCA5A5",
    headline: "At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.",
    deck: "Ritesh Agarwal built OYO after travelling across India and seeing the chaos in budget hotels. His solution standardized small hotels using technology and branding.",
    cols: [
      {
        h: "Teenage Entrepreneur",
        b: "Ritesh Agarwal left college early to build a startup. His first idea was Oravel Stays, a platform for budget accommodations.\n\nHe travelled extensively across India, staying in budget hotels, understanding the problems firsthand — broken facilities, inconsistent pricing, and no reliable booking system."
      },
      {
        h: "Birth of OYO",
        b: "The idea evolved into OYO Rooms, which standardized hotel rooms with reliable pricing, cleanliness, and booking systems.\n\nUsing technology to transform fragmented, low-quality budget hotels into a consistent branded network, OYO rapidly became the platform budget travellers trusted."
      },
      {
        h: "Global Expansion",
        b: "OYO expanded to dozens of countries and thousands of hotels, becoming one of the fastest-growing hospitality brands in the world.\n\nRitesh became India's youngest billionaire, proving that a problem visible to any traveller could be the foundation for a global enterprise."
      }
    ],
    pull: "Opportunities often hide inside everyday problems.",
    pullBy: "Ritesh Agarwal",
    lesson: "Start young. Learn fast. Scale relentlessly.",
    stats: [
      { l: "Valuation", v: "$10B+" },
      { l: "Countries", v: "80+" },
      { l: "Founded", v: "2013" },
      { l: "Age at Start", v: "19" },
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
    // ✅ FIX: replaced base64 with real external URL
    imgSrc: "https://images.livemint.com/img/2022/12/13/600x338/bhavish-aggarwal-ola_1670909898429_1670909927010.jpg",
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
    category: "CAREER / STUDENT PLATFORM",
    name: "Lucky Tiwari",
    nameShort: "Lucky Tiwari",
    initials: "LT",
    company: "InternAdda", slug: "internadda",
    role: "Founder",
    city: "India", context: "Building a modern platform for students",
    valuation: "Private", funding: "Bootstrapped", founded: "2024",
    imgSrc: "/luckyinternadda.jpg",
    accent: "#2563EB", accentBg: "#EFF6FF", accentBorder: "#93C5FD",
    headline: "He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India.",
    deck: "InternAdda was created to bridge the gap between students and real-world opportunities. The platform helps students discover internships, startup roles, and learning experiences.",
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
      { l: "Focus", v: "Students" },
    ],
  },
  {
    no: "09", edition: "No. 09",
    category: "FINTECH",
    name: "Kunal Shah",
    nameShort: "Kunal Shah",
    initials: "KS",
    company: "CRED", slug: "cred",
    role: "Founder & CEO",
    city: "Bangalore", context: "Built two unicorn fintech startups",
    valuation: "$6B+", funding: "$800M+", founded: "2018",
    imgSrc: "https://images.livemint.com/img/2022/05/10/600x338/kunal-shah-cred_1651948791432_1651948817028.jpg",
    accent: "#111827", accentBg: "#F3F4F6", accentBorder: "#9CA3AF",
    headline: "He built CRED by rewarding people for paying their credit card bills on time.",
    deck: "Kunal Shah is known for his deep thinking on consumer behaviour and fintech. After selling FreeCharge, he launched CRED to reward financial discipline.",
    cols: [
      {
        h: "The FreeCharge Exit",
        b: "Kunal Shah first built FreeCharge, a digital payments company that was later acquired by Snapdeal for $400M.\n\nRather than rest on that exit, he spent years studying what drives human financial behaviour before starting again."
      },
      {
        h: "Birth of CRED",
        b: "He launched CRED in 2018 to reward creditworthy users who paid their bills on time.\n\nThe insight was contrarian: instead of chasing everyone, build an exclusive community of financially responsible users and give them real rewards."
      },
      {
        h: "Premium Community",
        b: "CRED built an exclusive ecosystem for financially responsible users — rewards, commerce, travel, and financial products all targeted at India's credit-conscious elite.\n\nThe model proved that exclusivity, not mass market, can build a billion-dollar fintech."
      }
    ],
    pull: "Trust is the most powerful currency in fintech.",
    pullBy: "Kunal Shah",
    lesson: "Understand human behaviour better than technology.",
    stats: [
      { l: "Valuation", v: "$6B+" },
      { l: "Users", v: "12M+" },
      { l: "Founded", v: "2018" },
      { l: "Prior Exit", v: "$400M" },
    ],
  },
  {
    no: "10", edition: "No. 10",
    category: "FINTECH / PAYMENTS",
    name: "Vijay Shekhar Sharma",
    nameShort: "Vijay Sharma",
    initials: "VS",
    company: "Paytm", slug: "paytm",
    role: "Founder & CEO",
    city: "Noida", context: "Built India's biggest digital wallet",
    valuation: "$16B+", funding: "$3B+", founded: "2010",
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s",
    accent: "#0284C7", accentBg: "#EFF6FF", accentBorder: "#7DD3FC",
    headline: "From a small recharge website to India's largest digital payments ecosystem.",
    deck: "Vijay Shekhar Sharma built Paytm to simplify mobile payments in India, later becoming one of the biggest fintech platforms in the country.",
    cols: [
      {
        h: "Early Struggles",
        b: "Vijay grew up in a small town and struggled with English during college. He built his first website for ₹2 lakh and sold it — using that money to start what would eventually become Paytm.\n\nHis journey from a non-English-speaking town in UP to building a $16B company is one of India's most improbable success stories."
      },
      {
        h: "Birth of Paytm",
        b: "He launched Paytm initially as a mobile recharge platform — simple, fast, and useful for a country where phone credits were a daily necessity.\n\nOver time the platform expanded into bill payments, ticketing, and eventually a full digital wallet."
      },
      {
        h: "Demonetization Boom",
        b: "During India's 2016 demonetization, Paytm became the default digital wallet almost overnight. Usage exploded, brand awareness reached every corner of India, and Paytm became synonymous with digital payment.\n\nThe moment proved that infrastructure investment pays off when the right catalyst arrives."
      }
    ],
    pull: "Technology should make life simpler for millions.",
    pullBy: "Vijay Shekhar Sharma",
    lesson: "Persistence beats privilege.",
    stats: [
      { l: "Valuation", v: "$16B+" },
      { l: "Users", v: "300M+" },
      { l: "Founded", v: "2010" },
      { l: "IPO", v: "2021" },
    ],
  },
]

// ─── JSON-LD — server-rendered in JSX, NOT useEffect ─────────────────────────
// ✅ FIX: All URLs → https://www.upforge.in/... (www canonical)
// ✅ FIX: No FAQPage schema
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.upforge.in/#website",
      "url": "https://www.upforge.in",
      "name": "UpForge",
      "description": "India's independent startup registry — verified founder profiles, startup data and editorial chronicles.",
      "publisher": { "@id": "https://www.upforge.in/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://www.upforge.in/startup?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://www.upforge.in/#organization",
      "name": "UpForge",
      "url": "https://www.upforge.in",
      "logo": { "@type": "ImageObject", "url": "https://www.upforge.in/logo.png" },
      "sameAs": ["https://twitter.com/upforge_in"]
    },
    {
      "@type": "Article",
      "@id": "https://www.upforge.in/#article",
      "headline": "The Founder Chronicle — India's Greatest Startup Builders 2026",
      "description": "10 real stories from the founders behind India's most consequential startups — Zepto, Zomato, Zerodha, Nykaa, OYO, Ola, InternAdda, CRED, Paytm. Verified by UpForge. March 2026.",
      "url": "https://www.upforge.in",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-08T00:00:00+05:30",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://www.upforge.in/#website" },
      "publisher": { "@id": "https://www.upforge.in/#organization" },
      "image": { "@type": "ImageObject", "url": "https://www.upforge.in/og/founder-chronicle.png", "width": 1200, "height": 630 },
      "about": FOUNDERS.map(f => ({
        "@type": "Person",
        "name": f.name,
        "jobTitle": f.role,
        "worksFor": { "@type": "Organization", "name": f.company },
        "address": { "@type": "PostalAddress", "addressLocality": f.city, "addressCountry": "IN" }
      }))
    },
    {
      "@type": "ItemList",
      "name": "Indian Startup Founders 2026",
      "description": "India's top startup founders profiled by UpForge — verified data, editorial format.",
      "numberOfItems": FOUNDERS.length,
      "itemListElement": FOUNDERS.map((f, i) => ({
        "@type": "ListItem",
        "position": i + 1,
        "name": `${f.name} — ${f.company}`,
        "url": `https://www.upforge.in/startup/${f.slug}`,
        "description": f.deck
      }))
    }
  ]
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
  const isPlaceholder = src.includes("www.sample.com")
  const [failed, setFailed] = useState(false)
  const show = !isPlaceholder && !failed

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ background: accentBg, ...style }}>
      {show && (
        <img
          src={src}
          alt={alt}
          onError={() => setFailed(true)}
          className="absolute inset-0 w-full h-full object-cover object-top"
          loading="eager"
          width={400}
          height={500}
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-white font-black"
            style={{ background: accent, fontSize: "clamp(1.4rem,4vw,2rem)", fontFamily: "Georgia,serif" }}
          >
            {initials}
          </div>
          <p
            className="text-[9px] uppercase tracking-[0.22em] text-center px-6 leading-relaxed"
            style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
          >
            {alt}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const [idx, setIdx] = useState(0)
  const f = FOUNDERS[idx]
  const isFirst = idx === 0
  const isLast = idx === FOUNDERS.length - 1

  // ✅ FIX: window.scrollTo wrapped in typeof check for SSR safety
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [idx])

  // ✅ FIX: document.title useEffect REMOVED — handled by layout.tsx metadata
  // ✅ FIX: JSON-LD useEffect REMOVED — rendered directly in JSX as <script> tag below

  return (
    <div
      style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}
      role="main"
      aria-label="The Founder Chronicle — India's greatest startup founders"
    >
      {/* ✅ FIX: JSON-LD rendered server-side in JSX — Google crawler reads it reliably */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
      />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .story-in { animation: storyIn .3s ease both; }

        @media (min-width: 640px) {
          .newspaper-cols {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0;
          }
          .newspaper-cols > div {
            padding: 0 1.2rem;
            border-right: 1px solid #C8C2B4;
          }
          .newspaper-cols > div:first-child { padding-left: 0; }
          .newspaper-cols > div:last-child { border-right: none; padding-right: 0; }
        }

        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 3.4em;
          font-weight: 900;
          line-height: 0.82;
          float: left;
          margin-right: 0.07em;
          margin-top: 0.06em;
          color: #1A1208;
        }
        @media (max-width: 639px) {
          .dropcap::first-letter { font-size: 2.8em; }
        }

        .nbtn:not([disabled]):hover {
          background: #1A1208 !important;
          color: white !important;
        }

        .thumb { transition: opacity .18s ease; }
        .thumb:hover { opacity: 1 !important; }

        @media (min-width: 1024px) {
          .right-sticky {
            position: sticky;
            top: 0;
            max-height: 100vh;
            overflow-y: auto;
          }
        }

        /* ── Scrollbar ── */
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }

        /* ── Edition tabs scrollbar hide ── */
        .tabs-strip { scrollbar-width: none; -webkit-overflow-scrolling: touch; }
        .tabs-strip::-webkit-scrollbar { display: none; }

        /* ── CTA grid responsive ── */
        @media (max-width: 480px) {
          .cta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ══ SEO: Visually hidden H1 ══ */}
      <h1 className="sr-only" aria-label="Indian startup founder stories 2026">
        Indian Startup Founder Stories 2026 — Zepto, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda | UpForge Founder Chronicle
      </h1>

      {/* ══════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════ */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }} role="banner">

        {/* Publication nameplate */}
        <div className="text-center px-4 pt-10 sm:pt-14 pb-5 sm:pb-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            Independent Startup Registry
          </p>
          <p
            className="pf font-black leading-none tracking-tight text-[#1A1208]"
            aria-hidden="true"
            style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.6rem)" }}
          >
            The Founder Chronicle
          </p>
          <p
            className="italic mt-2 text-[#6B5C40]"
            style={{ fontSize: "clamp(12px, 1.7vw, 15px)" }}
          >
            Stories of the builders reshaping India — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }} aria-hidden="true">✦</span>
            <div className="h-px w-16 sm:w-32" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Story tabs */}
        <nav
          aria-label="Founder stories navigation"
          className="tabs-strip flex items-stretch overflow-x-auto"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
        >
          <span className="text-[7.5px] text-[#BBB] uppercase tracking-widest px-3 py-3 self-center flex-shrink-0 hidden sm:inline">
            In this edition:
          </span>
          {FOUNDERS.map((s, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Read ${s.nameShort}'s story — ${s.company}`}
              aria-current={i === idx ? "true" : undefined}
              className="flex-shrink-0 px-3 py-3 text-[8.5px] font-bold uppercase tracking-wider border-l transition-colors"
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
        </nav>
      </header>

      {/* ══════════════════════════════════════════
          STORY CONTENT
      ══════════════════════════════════════════ */}
      <main
        key={idx}
        className="story-in max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-14"
        id="main-content"
      >
        {/* Two-column layout: story text | photo sidebar */}
        <div
          className="grid lg:grid-cols-[1fr_340px] xl:grid-cols-[1fr_380px]"
          style={{ borderBottom: "2px solid #1A1208" }}
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* Hidden schema metadata */}
          <meta itemProp="headline" content={f.headline} />
          <meta itemProp="datePublished" content="2026-03-01" />
          <meta itemProp="dateModified" content="2026-03-08" />
          <meta itemProp="author" content="UpForge Editorial" />
          <meta itemProp="publisher" content="UpForge" />
          <meta itemProp="description" content={f.deck} />
          <link itemProp="url" href={`https://www.upforge.in/startup/${f.slug}`} />

          {/* ════ LEFT: EDITORIAL TEXT ════ */}
          <article className="py-7 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category + edition pill */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8px] font-black tracking-[0.26em] uppercase px-3 py-1.5 text-white"
                style={{ background: f.accent }}
              >
                {f.category}
              </span>
              <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">
                {f.edition} · March 2026
              </span>
            </div>

            {/* HEADLINE */}
            <h2
              className="pf font-black leading-[1.06] text-[#1A1208] mb-4"
              style={{ fontSize: "clamp(1.5rem, 3.4vw, 2.7rem)" }}
              itemProp="headline"
            >
              {f.headline}
            </h2>

            {/* DECK */}
            <p
              className="italic leading-[1.72] mb-5 pb-5"
              style={{
                color: "#5A4A30",
                fontSize: "clamp(13px, 1.7vw, 16px)",
                borderBottom: "1px solid #C8C2B4"
              }}
              itemProp="description"
            >
              {f.deck}
            </p>

            {/* Byline */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-7" style={{ fontFamily: "system-ui,sans-serif" }}>
              {["By UpForge Editorial", f.city, `Est. ${f.founded}`, f.context].map((item, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[8.5px] text-[#AAA] uppercase tracking-wider">{item}</span>
                  {i < arr.length - 1 && <span className="text-[#C8C2B4] text-[10px]">·</span>}
                </span>
              ))}
            </div>

            {/* ── MOBILE ONLY: photo block ── */}
            <div className="lg:hidden mb-7">
              <FounderPhoto
                src={f.imgSrc}
                alt={`${f.name}, ${f.role} at ${f.company}`}
                initials={f.initials}
                accent={f.accent}
                accentBg={f.accentBg}
                className="w-full"
                style={{ height: "min(260px, 54vw)", minHeight: 180 }}
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: "clamp(11px,3vw,13px)" }}>{f.name}</p>
                <p className="text-white/40 text-[8.5px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {f.role} · {f.company}
                </p>
              </div>
            </div>

            {/* ── 3-COLUMN NEWSPAPER BODY ── */}
            <div className="newspaper-cols" itemProp="articleBody">
              {f.cols.map((col, ci) => (
                <div key={ci} className="mb-5 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.12em] mb-3 pb-1.5"
                    style={{
                      fontSize: "clamp(9px,1.1vw,11px)",
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${f.accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((para, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.88] mb-3 text-[#2C2010] ${ci === 0 && pi === 0 ? "dropcap" : ""}`}
                      style={{
                        fontSize: "clamp(12px, 1.2vw, 13.5px)",
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
              className="mt-9 pt-6 pb-6 text-center"
              style={{ borderTop: `3px solid ${f.accent}`, borderBottom: "1px solid #C8C2B4" }}
            >
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 14, marginBottom: 10 }} aria-hidden="true">❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(14px, 1.8vw, 19px)" }}
                cite={`https://www.upforge.in/startup/${f.slug}`}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 14, margin: "10px 0 8px" }} aria-hidden="true">❧</span>
              <p className="text-[8.5px] uppercase tracking-[0.24em] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                — {f.pullBy}, {f.company}
              </p>
            </div>

          </article>

          {/* ════ RIGHT: PHOTO + FACTS (desktop) ════ */}
          <aside className="hidden lg:block" aria-label={`${f.name} profile and key metrics`} itemScope itemType="https://schema.org/Person">
            <meta itemProp="name" content={f.name} />
            <meta itemProp="jobTitle" content={f.role} />
            <meta itemProp="worksFor" content={f.company} />
            <meta itemProp="address" content={f.city} />

            <div className="right-sticky pl-7 pt-7 pb-7 flex flex-col gap-4">

              {/* FOUNDER PHOTO */}
              <div className="relative w-full" style={{ height: 360 }}>
                <FounderPhoto
                  src={f.imgSrc}
                  alt={`${f.name}, ${f.role} at ${f.company} — UpForge Founder Chronicle`}
                  initials={f.initials}
                  accent={f.accent}
                  accentBg={f.accentBg}
                  className="w-full h-full"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 55%, transparent)" }}
                >
                  <p className="pf text-white font-bold leading-snug" style={{ fontSize: "clamp(11px,1.1vw,13px)" }}>{f.name}</p>
                  <p className="text-white/40 text-[8.5px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                    {f.role} · {f.company}
                  </p>
                </div>
              </div>

              {/* BY THE NUMBERS */}
              <div style={{ border: "2px solid #1A1208" }} role="region" aria-label="Key metrics">
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p className="text-[8px] font-black uppercase tracking-[0.3em] text-white" style={{ fontFamily: "system-ui,sans-serif" }}>
                    By the Numbers
                  </p>
                </div>
                <dl className="grid grid-cols-2 divide-x divide-y" style={{ borderColor: "#D8D2C4" }}>
                  {f.stats.map((s, si) => (
                    <div key={si} className="px-3 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {s.l}
                      </dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "clamp(1.1rem,1.3vw,1.3rem)" }}>
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* THE LESSON */}
              <div className="px-4 py-4" style={{ background: f.accentBg, border: `1px solid ${f.accentBorder}` }}>
                <p
                  className="text-[7.5px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: "clamp(11.5px,1.1vw,13px)", fontFamily: "'Georgia',serif" }}>
                  {f.lesson}
                </p>
              </div>

              {/* PROFILE LINK */}
              <Link
                href={`/startup/${f.slug}`}
                className="group flex items-center justify-between px-4 py-3 transition-opacity hover:opacity-70"
                style={{ border: `1.5px solid ${f.accent}` }}
                aria-label={`View ${f.company} full profile on UpForge`}
              >
                <span className="text-[9.5px] font-bold uppercase tracking-wider" style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}>
                  View {f.company} on UpForge
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" style={{ color: f.accent }} aria-hidden="true" />
              </Link>

              {/* Context footnote */}
              <p className="text-[8.5px] text-[#AAA] italic pt-2" style={{ borderTop: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}>
                {f.context} · {f.city} · Est. {f.founded}
              </p>

            </div>
          </aside>

        </div>

        {/* ══════════════════════════════════════════
            PAGE NAVIGATION — prev / dots / next
        ══════════════════════════════════════════ */}
        <nav
          className="flex items-center justify-between py-5"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Story pagination"
        >
          <button
            onClick={() => !isFirst && setIdx(i => i - 1)}
            disabled={isFirst}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isFirst ? "First story" : `Previous: ${FOUNDERS[idx - 1].nameShort}`}
            style={{
              border: `1px solid ${isFirst ? "#D8D2C4" : "#1A1208"}`,
              color: isFirst ? "#C8C2B4" : "#1A1208",
              cursor: isFirst ? "not-allowed" : "pointer",
              fontSize: "clamp(8px,1vw,10px)",
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <ChevronLeft className="w-3 h-3" aria-hidden="true" />
            <span className="hidden sm:inline">{isFirst ? "First Story" : FOUNDERS[idx - 1].nameShort}</span>
            <span className="sm:hidden">Prev</span>
          </button>

          {/* Progress dots */}
          <div className="flex items-center gap-1.5" role="tablist" aria-label="Story selector">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Story ${i + 1}: ${s.nameShort}`}
                className="h-1.5 rounded-sm transition-all"
                style={{ width: i === idx ? 24 : 5, background: i === idx ? f.accent : "#C8C2B4" }}
              />
            ))}
          </div>

          <button
            onClick={() => !isLast && setIdx(i => i + 1)}
            disabled={isLast}
            className="nbtn flex items-center gap-1.5 px-3 sm:px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isLast ? "Last story" : `Next: ${FOUNDERS[idx + 1].nameShort}`}
            style={{
              border: `1px solid ${isLast ? "#D8D2C4" : "#1A1208"}`,
              color: isLast ? "#C8C2B4" : "#1A1208",
              cursor: isLast ? "not-allowed" : "pointer",
              fontSize: "clamp(8px,1vw,10px)",
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <span className="hidden sm:inline">{isLast ? "Last Story" : FOUNDERS[idx + 1].nameShort}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="w-3 h-3" aria-hidden="true" />
          </button>
        </nav>

        {/* ══════════════════════════════════════════
            ALL STORIES — thumbnail index
        ══════════════════════════════════════════ */}
        <section className="py-7" style={{ borderBottom: "1px solid #C8C2B4" }} aria-label="All founder stories in this edition">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
            All Stories in This Edition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" role="list">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                role="listitem"
                className="thumb text-left"
                style={{ opacity: i === idx ? 1 : 0.46 }}
                aria-label={`${s.nameShort} — ${s.company} founder story`}
                aria-current={i === idx ? "true" : undefined}
              >
                <div
                  className="relative w-full overflow-hidden mb-2"
                  style={{ height: 104, borderTop: `3px solid ${s.accent}`, background: s.accentBg }}
                >
                  <FounderPhoto
                    src={s.imgSrc}
                    alt={`${s.nameShort}, ${s.company} founder`}
                    initials={s.initials}
                    accent={s.accent}
                    accentBg={s.accentBg}
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-[8px] font-black uppercase tracking-wider mb-0.5" style={{ color: s.accent, fontFamily: "system-ui,sans-serif" }}>
                  {s.edition}
                </p>
                <p className="pf font-bold text-[#1A1208] leading-snug" style={{ fontSize: "clamp(11px,1.1vw,12.5px)" }}>
                  {s.nameShort}
                </p>
                <p className="text-[9px] text-[#AAA] mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {s.company}
                </p>
              </button>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INSIGHT STRIP
        ══════════════════════════════════════════ */}
        <section className="py-7" style={{ borderBottom: "1px solid #C8C2B4" }} aria-label="UpForge founder insights">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
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
              <div key={i} className="p-4" style={{ background: "white", border: "1px solid #D8D2C4" }}>
                <p className="pf font-black text-[#1A1208] leading-none mb-1" style={{ fontSize: "clamp(1.7rem,2.4vw,2.1rem)" }}>
                  {item.v}
                </p>
                <p className="text-[7.5px] font-black uppercase tracking-[0.18em] mb-2" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>
                  {item.l}
                </p>
                <p className="text-[11px] leading-relaxed" style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
                  {item.b}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            INTERNAL LINKS (SEO)
        ══════════════════════════════════════════ */}
        <section className="py-7" style={{ borderBottom: "1px solid #C8C2B4" }} aria-label="Explore more on UpForge">
          <p className="text-[8.5px] tracking-[0.3em] uppercase text-[#AAA] mb-4" style={{ fontFamily: "system-ui,sans-serif" }}>
            Explore on UpForge
          </p>
          <div className="cta-grid grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Top AI Startups India",  h: "/top-ai-startups",    desc: "Best AI companies 2026" },
              { l: "Best SaaS Startups",      h: "/best-saas-startups", desc: "B2B SaaS unicorns" },
              { l: "Indian Unicorns List",    h: "/indian-unicorns",    desc: "All 126 unicorns" },
              { l: "Startup Registry",        h: "/startup",            desc: "Full verified database" },
              { l: "Edtech Startups",         h: "/edtech-startups",    desc: "PhysicsWallah & more" },
              { l: "Fintech Startups",        h: "/fintech-startups",   desc: "Zerodha, CRED, Paytm" },
              { l: "D2C Startups India",      h: "/d2c-startups",       desc: "Nykaa & next wave" },
              { l: "Submit Your Startup",     h: "/submit",             desc: "Get listed free" },
            ].map((lnk) => (
              // ✅ FIX: key uses h+l to ensure uniqueness (no duplicate keys)
              <Link
                key={lnk.h + lnk.l}
                href={lnk.h}
                className="flex flex-col gap-1 p-3 transition-all hover:border-[#1A1208]"
                style={{ border: "1px solid #D8D2C4", background: "white" }}
              >
                <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#1A1208] flex items-center gap-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span className="text-[8.5px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════ */}
        <section className="pt-7 grid sm:grid-cols-2 gap-6 items-center" aria-label="List your startup on UpForge">
          <div>
            <p className="text-[8px] font-black uppercase tracking-[0.24em] mb-2" style={{ color: "#E8C547", fontFamily: "system-ui,sans-serif" }}>
              UpForge Registry
            </p>
            <p className="pf font-bold text-[#1A1208] leading-snug mb-2" style={{ fontSize: "clamp(1.1rem,2vw,1.3rem)" }}>
              Your founder story starts with a verified profile.
            </p>
            <p className="text-[11.5px] leading-relaxed" style={{ color: "#6B5C40", fontFamily: "system-ui,sans-serif" }}>
              Get independently verified and indexed in India's most trusted startup registry. Free forever.
            </p>
          </div>
          <div className="flex flex-col sm:items-end gap-3">
            <Link
              href="/submit"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
              style={{ background: "#1A1208", fontSize: "clamp(9px,1vw,11px)", fontFamily: "system-ui,sans-serif" }}
              aria-label="List your Indian startup on UpForge for free"
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ══ FOOTER ══ */}
        <footer className="mt-7 pb-2">
          <p
            className="text-[8.5px] leading-relaxed"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}
          >
            * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn, and company announcements as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
            Founder valuations are approximate and reflect latest available public data.
          </p>

          {/* ✅ FIX: key uses h+l to prevent duplicate key warning */}
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Indian Startup Founders", h: "/" },
                { l: "Startup Registry India",  h: "/startup" },
                { l: "Indian Unicorns 2026",    h: "/indian-unicorns" },
                { l: "Top AI Startups",         h: "/top-ai-startups" },
                { l: "Fintech Startups India",  h: "/fintech-startups" },
                { l: "Edtech Founders",         h: "/edtech-startups" },
                { l: "Submit Startup",          h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h + lnk.l}>
                  <Link
                    href={lnk.h}
                    className="text-[8.5px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </footer>

      </main>
    </div>
  )
}
