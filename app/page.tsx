"use client"

// app/page.tsx
// THE FOUNDER CHRONICLE — Homepage (upforge.in)
// SEO: JSON-LD injected client-side, BreadcrumbList, structured data for all founders
// Canonical, OG, Twitter handled in app/layout.tsx (see comment at bottom of file)

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight, ArrowRight, ArrowUpRight } from "lucide-react"

// ─── FOUNDER DATA ─────────────────────────────────────────────────────────────
const FOUNDERS = [


    {
    no: "01", edition: "No. 01",
    category: "EDTECH",
    name: "Alakh Pandey",
    nameShort: "Alakh Pandey",
    initials: "AP",
    company: "PhysicsWallah", slug: "physicswallah",
    role: "Founder & CEO",
    city: "Prayagraj, UP", context: "YouTube teacher turned unicorn CEO",
    valuation: "$2.8B", funding: "$700M", founded: "2014",
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
    no: "02", edition: "No. 02",
    category: "QUICK COMMERCE",
    name: "Aadit Palicha & Kaivalya Vohra",
    nameShort: "Palicha & Vohra",
    initials: "Z",
    company: "Zepto", slug: "zepto",
    role: "Co-Founders — CEO & CTO",
    city: "Bengaluru", context: "Dropped out of Stanford at 19",
    valuation: "$5.9B", funding: "$2.5B+", founded: "2021",
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
    no: "03", edition: "No. 03",
    category: "FOODTECH",
    name: "Deepinder Goyal",
    nameShort: "Deepinder Goyal",
    initials: "DG",
    company: "Zomato / Eternal", slug: "zomato",
    role: "Founder & CEO",
    city: "Delhi", context: "IIT Delhi → Bain & Co → Foodiebay at 25",
    valuation: "$33B", funding: "$3.2B+", founded: "2008",
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

  imgSrc: "data:image/jpeg;base64,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",

  accent: "#DC2626",
  accentBg: "#FEF2F2",
  accentBorder: "#FCA5A5",

  headline: "At 19, he started fixing India's budget hotel problem — and built one of the world's largest hotel chains.",

  deck: "Ritesh Agarwal built OYO after travelling across India and seeing the chaos in budget hotels. His solution standardized small hotels using technology and branding.",

  cols: [
    {
      h: "Teenage Entrepreneur",
      b: "Ritesh Agarwal left college early to build a startup. His first idea was Oravel Stays, a platform for budget accommodations."
    },
    {
      h: "Birth of OYO",
      b: "The idea evolved into OYO Rooms, which standardized hotel rooms with reliable pricing, cleanliness, and booking systems."
    },
    {
      h: "Global Expansion",
      b: "OYO expanded to dozens of countries and thousands of hotels, becoming one of the fastest-growing hospitality brands in the world."
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
  no: "08",
  edition: "No. 08",
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

  imgSrc: "/luckyinternadda.jpg",

  accent: "#2563EB",
  accentBg: "#EFF6FF",
  accentBorder: "#93C5FD",

  headline:
    "He is building InternAdda to make internships, startups, and career opportunities accessible to every student in India.",

  deck:
    "InternAdda was created to bridge the gap between students and real-world opportunities. The platform helps students discover internships, startup roles, and learning experiences while helping companies reach young talent across the country.",

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

  pull:
    "Talent exists everywhere — students just need the right opportunity to prove it.",

  pullBy: "Lucky Tiwari",

  lesson:
    "Sometimes the best startups are built by solving problems you personally faced.",

  stats: [
    { l: "Platform", v: "InternAdda" },
    { l: "Founded", v: "2024" },
    { l: "Funding", v: "Bootstrapped" },
    { l: "Focus", v: "Student Opportunities" }
  ],
},

  {
  no: "09", edition: "No. 09",
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

  imgSrc: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTERUTEhMVFRUXGBkbFRgYGRgYGBgaGBYYGxceFxcYICghGhomHhgaITEhJSkrLi8uGh8zODUsNygtLisBCgoKDg0OGRAQGy8lHyUuLysrLTUrLS0tLS0tLS0tLS0tLS0rLSstLS0rNS0tLS0rLS0tLS0tLS0tLTcrLS0tLf/AABEIAKcBLQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xABFEAABBAAEAgcEBgcHAwUAAAABAAIDEQQSITEFQQYTIlFhcYEHMpGxFCNSocHwM0JicrLR4SQ0Q3OCkqIVwvFUVWSDk//EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQADAAICAgIDAAAAAAAAAAABAhEDIRIxBCJBUhMycf/aAAwDAQACEQMRAD8A4aiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIvQL0CleC4doJllaHNF5WE0HEVd+Av80g08Pw+V4tkbiN7o18dln/AOh4ir6p24GtA67aXal2cTa2nuAdIXbnRrdB7rG7+FnTQ63S2cX0vdQbC0tq8zgGlz9TV5gaAvvN+HOcgV88EnG7QPN7BV99u09VgxnD5IvfbXiCHD/c0kK18CfJICWdZIQDTS+nb7tG0lbkCjptotwveGujMjXuca7DLea3q7IPfpzA8ExLnyK6u4ZFLTTGWkigeyHgi9X5BQ0aTRvl4lV/iHCMgL43Z2a+YANWeRH/AJ21Uf6YikREQIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiCQwUba1rMRbT3Fp2PmPw8V9sxFuzVoBoOXqT+d1qtdr4Dwv42s+GhkkNMF7Wa/PcnoeSRF7ga0INedEgfILA5gB08CPxv88ldejnRAyE59G8/K1dGez/DEA5QfHvWF/kUrOOinx72jXKuCTOaaa4Am+WpB3ojU1vXgCNQrZwjDGI9Zmke52xNvzb5u0GuB7rI3V8wXQKEAVE34KTZ7PYHA6UDuLNHzF0VFflRP4TPxs92Uno9wsudI6VpaX6nNmLg0miBoGgHTvFVotXpFDhsDFl7LpX21jLGjHaSFxN5RRI117Xfq3oGG9n7IjTXvyVWUPc0N5dkDY+O65f7UehDsI8TxF74Xup2YlzmP2FuOpBrQny7lrHNW3WM54rVjYlTOL8PYwB8ZOU0HNJBc0kWNRWZpokGgdPImLU7iIHiEh4JPV2072Otbr36W7T9ryUErshERAREQEREBERARdK6B9DcPjOHGeVpuLFvMpYXGV8EeGDzHEwGnPLiOVgWb0pVzjHC4pMG7iMLRCx2MMDMO3M4MaIRID1jnEudrR8bOmyCsIuj8R9nWGw5xTsRjHtiw2IjiLmw5nP6yJr7Dc2ht1b7A+SxY72dw4b6TJi8aWQRSRxRPZEXukfLC2VtszDKAxwvXXX1DnqLpXFuh8ODwfEmktnfE3Avily0W9e8l4brsRp4hZejXAsDPgI+qw7MViSyU4lgxBixcbgTkdBETkewDU6G9Nzog5gi6pP0LweJ+gQsm+j4mfARvYxsRc2SQNkc50slii4NrQH3fIGN4N7PsPIcHDNjTFicWxsscYhL2CJ+bLcmYdshpNVWldxQc9RdRZ0QwUuF4ZHJN9HnnfiYmubEXmWQYoxxmU5hlaOy3n73IC1zbiGEMUskTqLo3uY6tra4g14aINdERAREQEREBERAREQSGGjBJu75Dlvue7/z5q59EeHNEYJ/Ws+d6BVPh2GJF8jp466eh1I+KuzMQ3DxN6w5Q0AHzrl3m1ly7MZDbhyJ2V04bHVVV6eitGFBIA38VynB+0DDModXI6udsHw1Vy4P7RME40ZGx1vmc0A+trivw3947K81PUSvsZIWaN55Kr4np1gA0kYrDuIugJWa6eagZvai0ACAMkOl02SQ77AMG6vWss7TDo93r+KgumHCRiMLJEdy0kebdQqzw/p7i5LzYSVovSoJTYvuNH0F7qz8O423ENJALHt95jmua5t2ASx4Dg00aJGtFWtWYjUUnZxwTHRPizXdbEnY9lwcBystIHLRvM6KnFd26Z8MjqQtaM1g1pVEHUacnAab6LhLjquqk7GubkjJx4iIrsxERAREQEREE7wrpXiMPAyGFwYI8SMSx4BziQR9XV3RYW6Fta2Vvx9PZwJm9RhCyaTrurdCHMjmy5TJE1xOVxHfY8FU0QWfjvTfE4pk7JWxAYiVksmVpBzRxhjctuNCgNNdVtn2j4omXrIsNKyXq80csWeMOiYGMe1rjo/K0XyNbKI6P8CGIjmkLpaiMYyww9c89Zn1y520Bk3vmEj6LzuaHMDDmDXBmdgl6t5AY90d2GnMDfcb21QbvGOnWKxLcQ2URf2lsDZSGkH+zm2FutAnn91L64N09xWGhZExsDjEHiCV8YdNCJLz9W/ludwd+7RRmE6OzyZ8rW9h72PJe1oDmRySOsk1QbG83tosh6LzWbdCGBrXCUysETs5eGhrydXExyCtxkddUUG1B01xDJ8LiAI8+EhEMVtOUsDXt7Yzaup51FclucJ9o+KgZA0R4Z7sOMsMskQdKxn2A+wQ3UjTWiRa08f0OmZK5jCw0Q2MOcxj5XZGucI2E9ojNWm50FnRRHEuFvgDDIWXI1rw1r2ucGuY17C8NPZtrwQDqgk3dL5ycGaj/scj5IeydXPn645+1qMw5Vp8VDY/FullkldWaR7nurQW5xJod1la6ICIiAiIgIiICIiAiIgtXQ7DmZ7WA1k7bjlLicrgQAARued6KR4hiwJZg/tGOSSJumnYNOeAdi66/ZANam1F8BxJaIRQy6WRoQTPRJI1IILR8FaMDwpjzKwitQ8k6/pOy42eYdGPV/iom0YtWs6g2Y2Eg3G8htXkbZ18yAPzstjH8NjY5uhyuAIzsAsXrqCRyOho+CtHDuhmW3wyeha13zUd0lwD2ua1z7kecrMxoDmSQNAANT5d6wjkiZ6bzxWiO2Pglk5n4f8As+dsTsQ5+VmXr2sfQqiertp7Q/WIs6Kf431kcz42NaS0nKy8oO1AAafhoVe+hPCYxgvozmiSIsykOF5wR2s3iTZUWOAMc/6JiDnmjbcEpNSSwjQHMNS9nuvHk7QOCz2J7hf1PjKLw2InayJ7oGxF2jsh05e80nI+9dWnMNPJaHTbjskcbZID9eHZWuDbOWTsuaW63dggEbtadwKt7ejgrKS41tmc53zJpamL4dGJMJCxtuMomk72xQhxDndwMvVtHebrY0rfvcTauR7UXgGFxcsrp8cMQ6IwPDmPcGlxFOIYxoHVs0AJ0Oq5r0iwLYMVNEy8rHuDb3y3oCe8DRfo11fS4Wn9ZswHmWDQ+FA6L838cxgmxM0o2fI9w8nOJH3UtOG02nfxjLmrFYz8tFERdDnEREBERAREQEREG9hOJujhlhbtK6NxdZDh1eeqrvzn4KSi6Uua0FkUbZxG2Lr+0XdWxrWtGQnJmyNDC6vd8dVD8OgEk0bDYD3taa3pzgDXjqujdJcLwLB4qXCvwuNe6J2UubKyjoDYvzQVibpf2ZGx4eOMSmR0lOebfLDLE4jMdBUpIHKua1cP0iHUsglgZLExoABc9pzNknka7Mwj/wBQ9pGxFcxat8eA4U4BzeE8WIIBBBsEHUEEDUL6/wCm8L/9o4v+fRBX3dPJSSXRtsHNHlfKxrCQ0EFjXASNtuYB3MncaKucTxxmeHuABDImUL2iiZGDrzIYD6rpnBeDcHxGMhwjsDxCB8xIaZXhuzSboiyNFy/HQhkr2DZrnNF70CRqgwIiICIiAiIgIiICIiAiIgmOF4uoZG825XN//SMkfFo+9XnBY0OLXtdlzNIzCrAd7w10I0GhBGg0sCue8MyZZczqdkGUd/bbY86HzU5wjEUMvqPXuWd466aUnuNdU4dwx5ZpjXNFfqxR36kgi/RVHi+KwsOLeZDLK6Jmr3nM4ufppQDWgAbNAHaW7gce+OJ0hNhoJ8NFRjxp0jnbB0jiXO57dkeQ0C5+OtrTLq5LVrEO19A+nWHfE1mokaBbKN1oBQ3NqU4xjIcXCZThpScO+3iSN8T2gjtGNxpwcAQ4FpvRcdwJJijkhljaWvJkjDwHlo2NmmuJ7rV94V7Qeqh+ucx4JrcECyRWZttOgBJ8aUzTOolWLb3MLbgeC4eVgLZsWWkXX0vEc/EPv71tfQ4YGObCxrATbyNXPIFW957T3crJJVU6GcSBc9kRuI9qLwa4+6f3TbfIKZ4/xAMABO936Ann4hZTa0/WWkUrE7CDjxpdj4q2Gett8r2gDx1XC+k/DDhsXPAf1JHAfu3bf+JCvHSzGyQxCdkhZLmYGlvvDfUn/wCs/wC4+F84xWJfI90kji97iS5zjZJO5JXTw0mrm5r6xIiLdgIiICIiAiIgIiIN7gf95g/zY/4wukdKei0eM4rxWWbFDDRYZ0bnv6p0t5wGjstIO48d1zfgf95g/wA2P+MLrfSL9J0l/dw38YQaGH4rHGxrGdKJmta0NaBhZ6DWigB2tgAo3pH0rnhja7C8fnxbi6nM6qSHK2ic2Z5IOtCvFVzpvwKLCHCCIuPXYKCd+Yg9uUOzVQFN00CrSDufDsZJNjejssr3PkfFMXOcbJPa3K4vxf8ATy/5j/4iugezzhWIi4lwmSaTNHMJHQDM52RoY8EUdG68guf8X/Ty/wCY/wDiKDUREQEREBERAREQEREBERB9MNG1M4KWjnAuqv10UPEyyFs4ebf7/iEF0wfGAYXRu1DmkEXZ1pp8Ae7zUJgoGNfmdGxwGzXbeHntv4ha2AnDHkk6UCb57/HX891jwrGgNe9uYljXltUA1xAbr4WDfIcuap4ZE4089mNWLh/S9sEYcMBB2aHuZCSe67sb67Keg46OJxOZPgI2AimEtsgjnbm0BXMEquYN+Cjja4xxuP7VXd8g467Dw2PirA/pdDCwdWxriGlpIBAG+p020+IrvWUx+sNon9pVzodM/CTdVeYOsN1ObsnXSrI132/Ca6TcUa58bSQBrZ8K29SANO47alUyfiZ62OQuAOpNnnlAG9akNr4J/wBT62dm4GosnRp0q7I5X9/grfxbbyU/lyvi+elsglbExxLc9uBOwLWhou9x2j5KiTRFri1wog0Quje0jCCIYJo3DJb880Z+ZKruOwbJIxIW9qqJBq6Gn3fILSncM7x2rCLfm4a7dgLx4DUeBH4jf7lpSMLTRBB7iKKso+UREBERAREQEREG5wd4biIS4gASMJJ0AAeLJPcuwdJZGQY7iTMcyaPC8SEQhxUbRIwZBmB0vMDWw1oba2uJqy9Gem2KwbTEC2bDu9/DzDrIXA700+6fEV42gvnEYSzCxs4jAziGAYwMw/EMHXXQsaCGhx2porsv0B3LisEfDW4jBujwmFi4fw45etx2Nozy5SHDIfPkzQnQEahfHRzF4eWTrOD4o8OxTvfwc7s2Gm7xHI7Q70GuF91brzpFjcNFJ1vFsUeJYtvu4SB2XCwnufINNKotaL773QS3RmZmI4hw76EyaTB8OZI2XFSNEbDma4k6+6NRodaO2lrjvFHgzSkGwXvII2ILjVKa6TdNcVjGiNxbFh2/o8PCBHC0DYZR71d5vwpVtAREQEREBERAREQEWxhcK5500HeVKMwUbGh5GYXTj3eiYIZsZOwTIrLPg68Rv6LQxWEDSDRykHYE/L1U4IkO1te3razTQVq02PBYEG1BJqHd23gRsddPRWQzHqxJ7wdG5rhs2qoB3fRGbXvA7rqcbqPgpnCYmRrfq323lzIo7FpsEUSCCKKbicZjiS0hxJeA1vMtq62G52r09Fv4bHMe0to5PsZ8tnQCwbNe6DtzUS+Jzm9mPUu1ABrQCiOQF2K8Apbh/AZ59MoYT7xN2Lq6rvF8+dKJvWPcpilp9Q04J3F+hqzVgeddnlto0bc9ld+h3RN0lTP0jvQHUuAA+F7XzAGh3W/wDoLE11ydu9+TrGtkhXuDDtYwMaAGjZo5/nvXNyfIiequjj4JjuzlftXNy4Y+Evw+r/FQGGb9XR7r+8V8lJ+0TG9fjywEVCxrf9TiS6v+I9FHTHKK7/kPz81vxx9IY8n95auG8r/l4/nl4LJii0ssta4UazAEit/L08145tDX0WKSZuVwomwQK2B1qz3jUd+pHleY1V4zAwPja/qwMw5EivvWtJwBrmh0TyL2Dvu1H8l8xSkYPTfMW/FS0XvHubTB512j8ab6FVyTpUsXgnxmntrx5fFa6vUkYe0hw0PeqxxXhTou0NWd/d5/zSJRMIxERSgREQF9yROaAXNIBFtsEWO8d4Vu9kmHgk4rh24gNLbcWNd7rpA0mMO/1VpzNBS/SzifHpcLiW4+B/0dr2Z3SQMYIjnIb1LqBLSaGZubSte1qHPpcJI1uZzHtadiWkA3tqV7FgZXC2xvcDsQ1xHxAX6QxeMy4cl85mij4XG6XACIEvD2kCXrDy7NEDar5i4XoXins4FgckuNjJOJ/ukAnJ+vfXWAsdlHdtdlBwhuDkLS4RvLRdkNNCt7PJYF2fgHEOJR8Bhdw8SnEOx0gkDIxIaLXF2dpaQ0ZqsmlT/bFh4mcTcImsa8xxuxDWe62dzbkAr0J8SUFIREQEREBERAWXDxFzgAsS2cM2wfNBNMwxAArTlWv3hYJHdWTesb9JB3XzHiN1m4fi81RSHK/wDw3/a7mvvQ+BK3nw20h405kDb94cvl4hWH1wwExmN2ro9j9pjhbSF62K8zDuNR5LV4c8wyNY/a6aeTmOO3o4g+Tit3in1ckUnIOyn9139VIh8dgOY0PeFETNIOuqvGIw248VFYvhgO4UTAgIsLmFtIJ5jmPRSnBcKc+UaO5A7Orl5rWxPDC1hey7bqfLvHl/NbvCsWJSAezINRWl1qC2tnCr+8Kto2MTWcnXS+j3CWuHabrzCs+H4G1uoAHosHQPFNxUWtCaOhIO8H3XtrYHWxsCDpVK6Mw+lUvMvW0TkvRreubCHgw+i1OkGOGGhfK/kLAU7MWs1Oi5N7T+MddIIGnQdp/wD2g+uvoO9OPjm1ohN75WZc/nne57p3Cy4kvA317vJSBlzNa5gzg6aUK7rs6fBazTbqHI/m16+cxvDQAGuPa01PdXh4r1YjHm6wMlLxIHCi3QAE9178/uX3GzQVsQPzXcvtkdS3ycKPhVrKyM5R+zp8PHyUoRMA+rDP/kAH4f0UyyQWe4E+riSXegJ18lHwt+ud4TMd/wAHlZIXXoeQt/rrX4n+qgb0Dybcdzt4N/qsuJg6yN0ZPvDfuPL76WBjjutmJyi0JhRpGFpIOhBojuI3XyrD0lwH+K0eD/TY/h8FXlBIiIiHrXEGxoRspDiHHcVO0MnxM8rW+62SR7wPIOJCjkQSbOkOLEgkGJnEjWdW13WPzCMbMBv3P2dllwHSnGwxiOHF4iKNt5WMle1oskmmg0LJJ9VDoglsH0mxsTCyLF4iNhJJayV7QS73jTTue9Rcjy4kuJJJsk6kk7knmV8ogIiICIiAiIgKRwLdAo5SmFFVzQb5wYkZ8+8HxWxw7EOLhFISJB7jubh583D71r9uM9bHr9tp2I8R+K2poY52B7NPmx3d4Kw94nhi5mUABx1YRo1zv2fsPPdsb5brPj3dfgi79YCz5t94fP4Jw/FF+aOUfWD3gf1x9ofj8Vl4OMsksLjYd22k82u0Py18VI2GS5mxv5OaD615L6Lb8Vp4A/2ZrTvG9zT6OIW5G786KYGNkQzee/55qB4vwcMuRlgA24Dl4t+asb2LyYBwIOzhR9UmB50X6QSYbEMcCDIG2Ds2aN3vB32Tp8QCNtf0Hw7HxzQsmjsse2xehHIhw5OBBB8QV+YcHhg5roXkh8Luw4bhrtq7x4eK6B7MOlzoxJgcQacAXxO5Oodqv3gL8webiubnr9da8U/bFv6c8cbDG5252aO93Ifj5ArjMUrnuc95t7yXOJ2v8Bp6BTPSHihxU3WX9W0kM7tat3iSR8PMqCxUYbGQLp1kA9xPPw8E4OPxrs+5TzX8pyPUI6TFjrGMZ7pcMx+1rsP2fmpPiTLcfIfJQr46lj/eCsGMHa9B8lvDFia6wFmYPJYGj8hZo3FSIuaTLJOe7KR5mMgfNfeDblaAd9z5rHxEAPk7j1XrV/yWTCuvU9/3qBusFfissblrh39PwWYHkpGzVtIVLx8Qa7TQHUDu3BHxBVybLXiofiPDgY2nmNM3KySdf2SSdfLxWc9St7VxF64VoV4pVEREBERAREQEREBERAREQehSsDdQiJAmsPssE0Zhd10e3+I3k4fzRFcbssLZWsew5T70b+Y8D3hfBxOschFPjf1cg/e00PMXR9SiIMrBT8Sz9oPH+tocsmGl0XqJA2Os0Xp+SIrCPxTMszH/AGg5jvQFzf4T9y9mw7ZJGmvcJHccxrTyGh8z5oiqNjq2tIDjrsNNBfIVsFFzTZnuPIGvgvUQaXEW0WOHJw+a6H0bxGFaG9Y2F0jyQRIx7trcKIaabkGwI1HO9CII3js+BdGDhCzP1pLgGzA5HNdoDJ2Q0GtAPs0G0QYAOooikRHGn/WADmG/EOd/NZYnUKGw0RFUbeGdev8At+NEr7zr1FIzs/aXnEK6tw7xQ8zt99L1FSy0Kjjf0j/3j81gREVEREBERAREQEREBERAREQf/9k=",

  accent: "#111827",
  accentBg: "#F3F4F6",
  accentBorder: "#9CA3AF",

  headline: "He built CRED by rewarding people for paying their credit card bills on time.",

  deck: "Kunal Shah is known for his deep thinking on consumer behaviour and fintech. After selling FreeCharge, he launched CRED to reward financial discipline.",

  cols: [
    {
      h: "The FreeCharge Exit",
      b: "Kunal Shah first built FreeCharge, a digital payments company that was later acquired by Snapdeal for $400M."
    },
    {
      h: "Birth of CRED",
      b: "He launched CRED in 2018 to reward creditworthy users who paid their bills on time."
    },
    {
      h: "Premium Community",
      b: "CRED built an exclusive ecosystem for financially responsible users."
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
},

  {
  no: "10", edition: "No. 10",
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

  imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy1fDX9NPnpOxew45ikgwwdyfE1sR-kTBZgg&s",

  accent: "#0284C7",
  accentBg: "#EFF6FF",
  accentBorder: "#7DD3FC",

  headline: "From a small recharge website to India's largest digital payments ecosystem.",

  deck: "Vijay Shekhar Sharma built Paytm to simplify mobile payments in India, later becoming one of the biggest fintech platforms in the country.",

  cols: [
    {
      h: "Early Struggles",
      b: "Vijay grew up in a small town and struggled with English during college."
    },
    {
      h: "Birth of Paytm",
      b: "He launched Paytm initially as a mobile recharge platform."
    },
    {
      h: "Demonetization Boom",
      b: "During India's 2016 demonetization, Paytm became the default digital wallet."
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
},
]

// ─── JSON-LD structured data (injected client-side since page is a client component)
// For server-side injection, move this to app/layout.tsx
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://upforge.in/#website",
      "url": "https://upforge.in",
      "name": "UpForge",
      "description": "India's independent startup registry — verified founder profiles, startup data and editorial chronicles.",
      "publisher": { "@id": "https://upforge.in/#organization" },
      "potentialAction": {
        "@type": "SearchAction",
        "target": { "@type": "EntryPoint", "urlTemplate": "https://upforge.in/startup?q={search_term_string}" },
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://upforge.in/#organization",
      "name": "UpForge",
      "url": "https://upforge.in",
      "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" },
      "sameAs": ["https://twitter.com/upforge_in"]
    },
    {
      "@type": "Article",
      "@id": "https://upforge.in/#article",
      "headline": "The Founder Chronicle — India's Greatest Startup Builders 2026",
      "description": "10 real stories from the founders behind India's most consequential startups — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, InternAdda, CRED, Paytm. Verified by UpForge. March 2026.",
      "url": "https://upforge.in",
      "datePublished": "2026-03-01T00:00:00+05:30",
      "dateModified": "2026-03-08T00:00:00+05:30",
      "inLanguage": "en-IN",
      "isPartOf": { "@id": "https://upforge.in/#website" },
      "publisher": { "@id": "https://upforge.in/#organization" },
      "image": { "@type": "ImageObject", "url": "https://upforge.in/og/founder-chronicle.png", "width": 1200, "height": 630 },
      "about": FOUNDERS.map(f => ({
        "@type": "Person",
        "name": f.name,
        "jobTitle": f.role,
        "worksFor": { "@type": "Organization", "name": f.company },
        "address": { "@type": "PostalAddress", "addressLocality": f.city, "addressCountry": "IN" }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "The Founder Chronicle", "item": "https://upforge.in" }
      ]
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
        "url": `https://upforge.in/startup/${f.slug}`,
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
          width={400}
          height={500}
        />
      )}
      {!show && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
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

  // Inject JSON-LD structured data (client-side since this is a client component)
  // For best SEO, move this logic to app/layout.tsx as a server component
  useEffect(() => {
    const existingScript = document.getElementById("founder-chronicle-jsonld")
    if (!existingScript) {
      const script = document.createElement("script")
      script.id = "founder-chronicle-jsonld"
      script.type = "application/ld+json"
      script.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(script)
    }
    return () => {
      const s = document.getElementById("founder-chronicle-jsonld")
      if (s) s.remove()
    }
  }, [])

  // Update document title per founder for SPA navigation signals
  useEffect(() => {
    document.title = `${f.name} · ${f.company} Founder Story | UpForge`
    return () => {
      document.title = "The Founder Chronicle — India's Greatest Startup Builders 2026 | UpForge"
    }
  }, [idx, f.name, f.company])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [idx])

  return (
    <div
      style={{ minHeight: "100vh", background: "#F3EFE5", fontFamily: "'Georgia','Times New Roman',serif" }}
      // aria attributes for SEO / accessibility
      role="main"
      aria-label="The Founder Chronicle — India's greatest startup founders"
    >

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
            padding: 0 1.4rem;
            border-right: 1px solid #C8C2B4;
          }
          .newspaper-cols > div:first-child { padding-left: 0; }
          .newspaper-cols > div:last-child { border-right: none; padding-right: 0; }
        }

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

        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #C8C2B4; }
      `}</style>

      {/* ══════════════════════════════════════════
          SEO: Visually hidden H1 for homepage keyword targeting
          Visible to Google, hidden from design
      ══════════════════════════════════════════ */}
      <h1
        className="sr-only"
        aria-label="Indian startup founder stories 2026"
      >
        Indian Startup Founder Stories 2026 — Zepto, PhysicsWallah, Zomato, Zerodha, Nykaa, OYO, Ola, CRED, Paytm, InternAdda | UpForge Founder Chronicle
      </h1>

      {/* ══════════════════════════════════════════
          SEO: Breadcrumb nav (visible + schema-aligned)
      ══════════════════════════════════════════ */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{ background: "#EDE9DF", borderBottom: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
      >
        <ol
          className="flex items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <Link
              href="/"
              itemProp="item"
              className="hover:text-[#1A1208] transition-colors"
            >
              <span itemProp="name">UpForge</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li aria-hidden="true" className="text-[#C8C2B4]">/</li>
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name" className="text-[#666]">The Founder Chronicle</span>
            <meta itemProp="position" content="2" />
          </li>
          <li aria-hidden="true" className="text-[#C8C2B4]">/</li>
          <li
            itemScope
            itemProp="itemListElement"
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name" className="text-[#1A1208] font-semibold">{f.nameShort} · {f.company}</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ══════════════════════════════════════════
          MASTHEAD
      ══════════════════════════════════════════ */}
      <header
        style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}
        role="banner"
      >

        {/* Dateline bar */}
        <div
          className="flex items-center justify-between px-4 sm:px-8 py-1.5"
          style={{ borderBottom: "1px solid #C8C2B4", fontFamily: "system-ui,sans-serif" }}
        >
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="text-[9px] text-[#888] uppercase tracking-widest hover:text-[#1A1208] transition-colors"
              aria-label="UpForge homepage"
            >
              upforge.in
            </Link>
            <span className="text-[#C8C2B4]"> / </span>
            <span className="text-[9px] text-[#888] uppercase tracking-widest">Founder Series</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:block text-[9px] text-[#AAA] uppercase tracking-widest">Vol. I · India</span>
            <time
              dateTime="2026-03"
              className="text-[9px] text-[#AAA] uppercase tracking-widest"
            >
              March 2026
            </time>
          </div>
        </div>

        {/* Publication name */}
        <div className="text-center px-4 py-6 sm:py-9" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p className="text-[8px] tracking-[0.42em] text-[#AAA] uppercase mb-3" style={{ fontFamily: "system-ui,sans-serif" }}>
            UpForge · Independent Startup Registry · India Edition
          </p>
          {/* This is styled as display title — real H1 is hidden above for SEO */}
          <p
            className="pf font-black leading-none tracking-tight text-[#1A1208]"
            aria-hidden="true"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5rem)" }}
          >
            The Founder Chronicle
          </p>
          <p className="italic mt-2.5 text-[#6B5C40]" style={{ fontSize: "clamp(13px, 2vw, 16px)" }}>
            Stories of the builders reshaping India — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-5">
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 13 }} aria-hidden="true">✦</span>
            <div className="h-px w-24 sm:w-40" style={{ background: "#C8C2B4" }} />
          </div>
        </div>

        {/* Story tabs */}
        <nav
          aria-label="Founder stories navigation"
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
              aria-label={`Read ${s.nameShort}'s story — ${s.company}`}
              aria-current={i === idx ? "true" : undefined}
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
        </nav>
      </header>

      {/* ══════════════════════════════════════════
          STORY CONTENT
      ══════════════════════════════════════════ */}
      <main
        key={idx}
        className="story-in max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pb-16"
        id="main-content"
      >

        {/* Two-column layout: story text | photo sidebar */}
        <div
          className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_400px]"
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
          <link itemProp="url" href={`https://upforge.in/startup/${f.slug}`} />

          {/* ════ LEFT: EDITORIAL TEXT ════ */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

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

            {/* HEADLINE — H2 for article (H1 is the hidden SEO title above) */}
            <h2
              className="pf font-black leading-[1.06] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.75rem, 3.8vw, 3rem)" }}
              itemProp="headline"
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
              itemProp="description"
            >
              {f.deck}
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                f.city,
                `Est. ${f.founded}`,
                f.context
              ].map((item, i, arr) => (
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
                alt={`${f.name}, ${f.role} at ${f.company}`}
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
            <div className="newspaper-cols" itemProp="articleBody">
              {f.cols.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
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
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, marginBottom: 10 }} aria-hidden="true">❧</span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(15px, 2vw, 20px)" }}
                cite={`https://upforge.in/startup/${f.slug}`}
              >
                "{f.pull}"
              </blockquote>
              <span style={{ display: "block", color: "#C8C2B4", fontSize: 16, margin: "10px 0 8px" }} aria-hidden="true">❧</span>
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[#AAA]"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {f.pullBy}, {f.company}
              </p>
            </div>

          </article>

          {/* ════ RIGHT: PHOTO + FACTS (desktop) ════ */}
          <aside
            className="hidden lg:block"
            aria-label={`${f.name} profile and key metrics`}
            itemScope
            itemType="https://schema.org/Person"
          >
            <meta itemProp="name" content={f.name} />
            <meta itemProp="jobTitle" content={f.role} />
            <meta itemProp="worksFor" content={f.company} />
            <meta itemProp="address" content={f.city} />

            <div className="right-sticky pl-8 pt-8 pb-8 flex flex-col gap-5">

              {/* FOUNDER PHOTO */}
              <div className="relative w-full" style={{ height: 380 }}>
                <FounderPhoto
                  src={f.imgSrc}
                  alt={`${f.name}, ${f.role} at ${f.company} — UpForge Founder Chronicle`}
                  initials={f.initials}
                  accent={f.accent}
                  accentBg={f.accentBg}
                  className="w-full h-full"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{ background: "linear-gradient(to top, rgba(12,7,2,0.96) 55%, transparent)" }}
                >
                  <p className="pf text-white font-bold leading-snug" style={{ fontSize: 13.5 }}>{f.name}</p>
                  <p className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5" style={{ fontFamily: "system-ui,sans-serif" }}>
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
                    <div key={si} className="px-4 py-3.5" style={{ borderColor: "#D8D2C4" }}>
                      <dt className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1" style={{ fontFamily: "system-ui,sans-serif" }}>
                        {s.l}
                      </dt>
                      <dd className="pf font-black text-[#1A1208] leading-none" style={{ fontSize: "1.35rem" }}>
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
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
                aria-label={`View ${f.company} full profile on UpForge`}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: f.accent, fontFamily: "system-ui,sans-serif" }}
                >
                  View {f.company} on UpForge
                </span>
                <ArrowUpRight className="w-4 h-4" style={{ color: f.accent }} aria-hidden="true" />
              </Link>

              {/* Context footnote */}
              <p
                className="text-[9px] text-[#AAA] italic pt-2"
                style={{ borderTop: "1px solid #D8D2C4", fontFamily: "system-ui,sans-serif" }}
              >
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
            className="nbtn flex items-center gap-2 px-4 py-2.5 font-bold uppercase tracking-wider transition-all"
            aria-label={isFirst ? "First story" : `Previous: ${FOUNDERS[idx - 1].nameShort}`}
            style={{
              border: `1px solid ${isFirst ? "#D8D2C4" : "#1A1208"}`,
              color: isFirst ? "#C8C2B4" : "#1A1208",
              cursor: isFirst ? "not-allowed" : "pointer",
              fontSize: 10,
              background: "transparent",
              fontFamily: "system-ui,sans-serif",
            }}
          >
            <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
            {isFirst ? "First Story" : FOUNDERS[idx - 1].nameShort}
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
            aria-label={isLast ? "Last story" : `Next: ${FOUNDERS[idx + 1].nameShort}`}
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
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </nav>

        {/* ══════════════════════════════════════════
            ALL STORIES — thumbnail index
        ══════════════════════════════════════════ */}
        <section
          className="py-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="All founder stories in this edition"
        >
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            All Stories in This Edition
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4" role="list">
            {FOUNDERS.map((s, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                role="listitem"
                className="thumb text-left"
                style={{ opacity: i === idx ? 1 : 0.48 }}
                aria-label={`${s.nameShort} — ${s.company} founder story`}
                aria-current={i === idx ? "true" : undefined}
              >
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
                    alt={`${s.nameShort}, ${s.company} founder`}
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
        </section>

        {/* ══════════════════════════════════════════
            INSIGHT STRIP
        ══════════════════════════════════════════ */}
        <section
          className="py-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="UpForge founder insights"
        >
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
                itemScope
                itemType="https://schema.org/StatisticalVariable"
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
        </section>

        {/* ══════════════════════════════════════════
            INTERNAL LINKS SECTION (SEO: keyword-rich anchor text)
        ══════════════════════════════════════════ */}
        <section
          className="py-8"
          style={{ borderBottom: "1px solid #C8C2B4" }}
          aria-label="Explore more on UpForge"
        >
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-5"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Explore on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Top AI Startups India", h: "/top-ai-startups", desc: "Best AI companies 2026" },
              { l: "Best SaaS Startups", h: "/best-saas-startups", desc: "B2B SaaS unicorns" },
              { l: "Indian Unicorns List", h: "/indian-unicorns", desc: "All 126 unicorns" },
              { l: "Startup Registry", h: "/startup", desc: "Full verified database" },
              { l: "Edtech Startups", h: "/edtech-startups", desc: "PhysicsWallah & more" },
              { l: "Fintech Startups", h: "/fintech-startups", desc: "Zerodha, CRED, Paytm" },
              { l: "D2C Startups India", h: "/d2c-startups", desc: "Nykaa & next wave" },
              { l: "Submit Your Startup", h: "/submit", desc: "Get listed free" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex flex-col gap-1 p-3 transition-all hover:border-[#1A1208]"
                style={{ border: "1px solid #D8D2C4", background: "white" }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208] flex items-center gap-1"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l} <ChevronRight className="w-2.5 h-2.5 flex-shrink-0" aria-hidden="true" />
                </span>
                <span className="text-[9px] text-[#AAA]" style={{ fontFamily: "system-ui,sans-serif" }}>
                  {lnk.desc}
                </span>
              </Link>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER CTA
        ══════════════════════════════════════════ */}
        <section
          className="pt-8 grid sm:grid-cols-2 gap-6 items-center"
          aria-label="List your startup on UpForge"
        >
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
              aria-label="List your Indian startup on UpForge for free"
            >
              List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            FOOTER DISCLAIMER
        ══════════════════════════════════════════ */}
        <footer className="mt-8 pb-2">
          <p
            className="text-[9px] leading-relaxed"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif", borderTop: "1px solid #D8D2C4", paddingTop: "1rem" }}
          >
            * Story details sourced from public interviews, Forbes India, Inc42, Hurun India 2025, Tracxn, and company announcements as of March 2026.
            UpForge is an independent registry — no paid placements, no sponsored rankings.
            Founder valuations are approximate and reflect latest available public data.
          </p>
          {/* SEO: keyword-dense footer links */}
          <nav aria-label="Footer navigation" className="mt-4">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Indian Startup Founders", h: "/" },
                { l: "Startup Registry India", h: "/startup" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Top AI Startups", h: "/top-ai-startups" },
                { l: "Fintech Startups India", h: "/fintech-startups" },
                { l: "Edtech Founders", h: "/edtech-startups" },
                { l: "Submit Startup", h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="text-[9px] text-[#AAA] hover:text-[#1A1208] uppercase tracking-wider transition-colors"
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
