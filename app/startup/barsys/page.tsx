"use client"

// app/startup/barsys/page.tsx
// UpForge — Barsys · Akshet Tewari Founder Chronicle
// SEO: FAQPage ONLY in JSON-LD. Zero microdata on FAQ HTML = no duplicate error.
// SEO: mainEntity is a proper JSON array [].

import { useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react"

// ─── JSON-LD ──────────────────────────────────────────────────────────────────
const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://upforge.in/startup/barsys#article",
      "headline": "Barsys — How Akshet Tewari Built the World's First App-Powered Automated Cocktail Maker From a Manipal Lab to New York and India",
      "description": "Barsys founder story — Manipal Institute of Technology mechatronics graduate Akshet Tewari conceived Barsys during a final-year robotics experiment in 2014 and built it into the world's first automated, app-connected cocktail maker. 1M+ drinks mixed. USA Today Reviewed Award at CES 2024. Partnerships with The Dead Rabbit (world's best bar), Patrón, Bacardi, Stoli, and ReserveBar. Products: Barsys 360, Coaster 2.0, Barsys AI. $3.8M ARR. Sold on Amazon US and India. The Indian-origin hardware startup that reimagined home mixology for 10+ years.",
      "url": "https://upforge.in/startup/barsys",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-barsys.webp",
        "width": 1200,
        "height": 630
      },
      "publisher": {
        "@type": "Organization",
        "name": "UpForge",
        "url": "https://upforge.in",
        "logo": { "@type": "ImageObject", "url": "https://upforge.in/logo.png" }
      },
      "author": { "@type": "Organization", "name": "UpForge Editorial" },
      "about": {
        "@type": "Person",
        "name": "Akshet Tewari",
        "jobTitle": "Founder & CEO",
        "worksFor": { "@type": "Organization", "name": "Barsys" },
        "alumniOf": {
          "@type": "CollegeOrUniversity",
          "name": "Manipal Institute of Technology"
        },
        "description": "Akshet Tewari is a Manipal Institute of Technology mechatronics and robotics engineering graduate (B.E., 2014) and the Founder & CEO of Barsys — the world's first app-powered automated cocktail maker. A DPS International school alumnus passionate about automated lifestyle products since childhood, he conceived Barsys during a final-year robotics lab experiment, relocated to New York with no connections, raised angel funding through cold calls, and has spent a decade building a global mixology technology brand.",
        "sameAs": ["https://www.linkedin.com/in/akshet-tewari-17461a36/"]
      },
      "mentions": {
        "@type": "Organization",
        "name": "Barsys",
        "url": "https://barsys.com",
        "foundingDate": "2014",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "description": "Barsys is a consumer electronics and hospitality technology company headquartered in New York City. It designs and manufactures app-powered automated cocktail makers — the Barsys 360 and Coaster 2.0 — alongside a free SaaS app with 1,000+ cocktail recipes, brand integrations, and AI-powered personalization. Barsys has mixed over 1 million drinks, won the USA Today Reviewed Award at CES 2024, partnered with The Dead Rabbit (world's best cocktail bar), Patrón, Bacardi, Stoli, Bathtub Gin, and ReserveBar, and sells its products across the US and India. Annual revenue reached $3.8M. The Indian-origin founder leads a 46-person team across North America and Asia.",
        "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 40, "maxValue": 50 },
        "award": ["USA Today Network Reviewed Award — CES 2024"],
        "sameAs": [
          "https://barsys.com",
          "https://www.linkedin.com/company/barsys-llc/",
          "https://www.amazon.com/stores/Barsys/page/B0"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Consumer Tech Startups India", "item": "https://upforge.in/consumer-tech-startups" },
        { "@type": "ListItem", "position": 4, "name": "Barsys", "item": "https://upforge.in/startup/barsys" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded Barsys and what is the founder's background?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barsys was founded by Akshet Tewari, a mechatronics, robotics, and automation engineering graduate from Manipal Institute of Technology (B.E., 2014) and a DPS International school alumnus. He conceptualised Barsys during his final-year robotics lab experiment in 2014 — while working a conveyor belt at 3am after a night out, he imagined a machine that could mix and deliver a cocktail on demand. He declined conventional career paths, convinced his father to seed the venture (leveraging his 30 years of supply chain experience), and relocated to New York with no investor connections. After months of cold calls and waiting in reception areas, he raised angel funding and spent two years with a team of 15 — mostly MIT Manipal graduates — building the first product in a basement. Barsys was officially incorporated and launched its first automated home bartender in 2018."
          }
        },
        {
          "@type": "Question",
          "name": "What are the Barsys 360 and Coaster 2.0?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Barsys 360 is an automated countertop cocktail maker that holds up to six ingredients (spirits, fresh juice, mixers — 900ml per canister) and crafts a precision cocktail in under 10 seconds with a single tap via the Barsys app. Available in Midnight Black and Polar White, it uses proprietary algorithms to measure and mix ingredients and keeps liquids cold for up to 8 hours. It connects via Bluetooth to the Barsys app, which includes 1,000+ recipes. The Coaster 2.0 is a compact smart coaster that uses interactive LED lighting and a digital scale to guide manual cocktail-making step-by-step — ideal for enthusiasts who enjoy the pour but want bartender-level precision. Both devices launched in India in 2024. Barsys AI, an upcoming feature, will learn user taste profiles, offer personalised pairings, and enable voice-controlled mixing."
          }
        },
        {
          "@type": "Question",
          "name": "What partnerships has Barsys built with bars and spirits brands?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barsys has built a curated ecosystem of world-class bar and brand partnerships delivered through its app. Bar partnerships include The Dead Rabbit (named the world's best cocktail bar), David Morton Kitchens, and Bathtub Gin — all with exclusive recipe collections on the Barsys platform. Spirits brand collaborations include Patrón (co-branded smart coaster kits for home margarita making), Bacardi, and Stoli. In January 2024 at CES, Barsys partnered with ReserveBar, the leading US premium spirits e-commerce platform, to launch the AI-powered Barsys Subscription Box — a curated monthly delivery of spirits and mixers personalised by the app."
          }
        },
        {
          "@type": "Question",
          "name": "What awards has Barsys won and where is it sold?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barsys won the USA Today Network Reviewed Award at CES 2024, where it showcased the Barsys 360 and Coaster 2.0. The Barsys 360 was also featured in Rolling Stone's list of best tech gifts for gadget lovers and BuzzFeed's top products list. Barsys is available on Amazon US, Barsys.com, and — since early 2024 — in India through in.thebarsys.com and Amazon India. The Coaster 2.0 (priced at ₹8,000 in India) began shipping to Indian customers from January 27, 2024. The brand has shipped to customers across North America, Asia, and Europe."
          }
        },
        {
          "@type": "Question",
          "name": "What is Barsys AI and what is the company's roadmap?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Barsys AI is the company's next-generation product layer — an AI system built into the Barsys app that learns a user's taste preferences over time, suggests personalised cocktail pairings, and enables voice-powered mixing controls. The company's roadmap positions it as a full hospitality technology platform: hardware (automated dispensers), SaaS (recipe marketplace and brand integrations), and AI (personalised cocktail intelligence). With 1M+ drinks mixed to date and $3.8M in annual revenue as of July 2025, the company is expanding its Indian market presence and scaling its subscription box model in partnership with ReserveBar."
          }
        },
        {
          "@type": "Question",
          "name": "How is Barsys different from Bartesian and other cocktail machines?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The key distinction is the business model. Bartesian and Drinkworks (Keurig/AB InBev) are pod-based systems — like a Nespresso for cocktails, with proprietary capsules containing flavourings and bitters. Barsys uses the user's own full bottles of spirits and mixers without capsules or pods, giving users complete control over ingredients and brands. This means no recurring pod costs, real spirits in every drink, and no artificial flavourings. Barsys's SaaS platform also integrates world-class bar recipes and brand content in a way pod systems cannot. The Coaster 2.0 specifically requires no machine at all — making it a $40–$80 entry point versus a $300+ automated maker."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Founded", v: "2014" },
  { l: "HQ", v: "New York" },
  { l: "Drinks Mixed", v: "1M+" },
  { l: "Revenue (ARR)", v: "$3.8M" },
  { l: "Team", v: "46 People" },
  { l: "Markets", v: "US & India" },
]

const TIMELINE = [
  {
    year: "2014",
    event: "Akshet Tewari, a final-year mechatronics student at Manipal Institute of Technology, works a 3am robotics lab session after a night out. Watching a conveyor move boxes between stations, the idea crystallises: a machine that could move a glass under different liquid stations and mix a perfect cocktail on demand. He founds Vulcantronics first to hone hardware skills, then turns his full attention to Barsys.",
  },
  {
    year: "2014–16",
    event: "After convincing his father — a 30-year supply chain veteran — to seed the venture and contribute operational expertise, Tewari moves to New York with no investor network. He cold-calls private equity firms, waits in reception areas for weeks, and eventually secures angel funding from investors who bring both capital and mentorship. A 15-person team, mostly MIT Manipal graduates, builds the first prototype in a basement.",
  },
  {
    year: "2016–18",
    event: "Two years of intense development combining computer science, mechatronics, robotics, electronics, fluid mechanics, industrial design, and aesthetics engineering. Three product models are developed: Barsys (home), Barsys Elite (home premium), and Barsys Pro (commercial/hospitality). The first automated home bartender with 2,000+ preloaded cocktail recipes launches commercially in 2018 — the world's first of its kind.",
  },
  {
    year: "2019–22",
    event: "YourStory covers Barsys as one of India's most surprising hardware exports. Brand partnerships deepen: The Dead Rabbit (world's best cocktail bar), David Morton Kitchens, Bathtub Gin, Bacardi, and Stoli integrate exclusive recipe collections into the Barsys app. Patrón partnership launches co-branded smart coaster kits for home margarita making. The SaaS platform grows into a full marketplace connecting users with world-class mixology content.",
  },
  {
    year: "Jan 2024",
    event: "CES 2024: Barsys unveils Barsys 360 and Coaster 2.0 at booth 50420, Tech West, The Venetian. USA Today Network Reviewed Award won on the show floor. ReserveBar partnership announced on January 9 — launching the AI-powered Barsys Subscription Box, a personalized monthly spirits and mixer delivery. Barsys 360 begins shipping. Coaster 2.0 ships to India from January 27, 2024 (₹8,000 price point).",
  },
  {
    year: "2024",
    event: "India market formally entered with in.thebarsys.com and Amazon India listings. Rolling Stone and BuzzFeed feature the Barsys 360 in top gift lists. 1M+ total drinks mixed milestone passed. Team grows to 46 across North America and Asia. Annual revenue hits $3.8M. Barsys AI — a personalised taste-learning and voice-control layer — enters development as the next product frontier.",
  },
  {
    year: "2025–26",
    event: "Barsys AI in development with voice-powered cocktail controls and AI taste profiling. India market expands through Amazon and direct-to-consumer channels. Subscription Box model scales in the US in partnership with ReserveBar. Barsys positions itself as a full hospitality technology platform: hardware, SaaS, AI — connecting home bartenders, world-class bars, spirits brands, and a global community of mixology enthusiasts.",
  },
]

const COLS = [
  {
    h: "The Conveyor Belt and the Cocktail That Started Everything",
    b: `It was 3am. Akshet Tewari had been out, and now he was in his final-year robotics lab at Manipal Institute of Technology, working on a project that required him to move boxes on a conveyor belt between different stations. He was tired. He needed a drink. And in that unremarkable, fluorescent-lit room, he had the thought that would consume the next decade of his life.\n\nWhat if the glass was the box? What if instead of moving objects between industrial stations, you moved a drinking glass under a series of liquid dispensers — spirits, mixers, bitters — each measured precisely, each calibrated to a recipe? What if a machine could do, in ten seconds and with perfect consistency, what a good bartender spent years learning to do by feel?\n\nTewari had been obsessed with automated lifestyle products since a 2008 school science competition where he built a robot car under a strict deadline with limited resources. The spark from that night never really went out. What changed in that 3am lab session was that the problem became specific: cocktails were poorly automated, inconsistently made, locked behind expensive bar training, and entirely unavailable at home without skill. He had just spent his engineering degree learning exactly how to fix that. He founded Vulcantronics to hone his hardware skills, then pivoted all his energy toward Barsys.`,
  },
  {
    h: "Cold Calls, a Basement in New York and the World's First Automated Bartender",
    b: `The move to New York was an act of audacity. Tewari arrived with no connections in the private equity world, no warm introductions, and a hardware product — the most capital-intensive, supply-chain-intensive, go-to-market-intensive category in consumer tech. "After two years of creating and fine-tuning prototypes, I landed in New York with absolutely no connects," he said later. "After countless cold calls and squatting in reception areas of potential investors, I was finally able to bring on board investors who not only brought in the required capital, but, more importantly, rich experience."\n\nHis father's thirty years of supply chain experience had already been secured — the first and most important investor. The angel round that followed brought capital and mentorship together. In a basement, a team of fifteen — most of them MIT Manipal alumni — built the product from first principles, combining computer science, mechatronics, robotics, electronics, electromechanical engineering, fluid mechanics, industrial design, and aesthetics. "It required working day and night," Tewari said.\n\nThe first automated home bartender launched in 2018. It came pre-loaded with over 2,000 cocktail recipes, connected to a mobile app, and mixed drinks using a moving tray system that shifted a glass across different nozzle stations. It was the world's first. Not the world's first good one. The world's first. The category did not exist until Barsys built it.`,
  },
  {
    h: "Dead Rabbit, CES 2024 and the Mixology Platform Play",
    b: `Ten years from the conveyor belt experiment, Barsys is something its founding night never promised: a platform. The Barsys 360 — launched at CES 2024 and built for a home bar that holds six ingredients, crafts a drink in under ten seconds, and keeps everything cold for eight hours — is the most advanced piece of hardware the company has shipped. The Coaster 2.0 is the accessible entry point: a smart scale and LED guidance system that teaches precision manual mixing without requiring a machine at all.\n\nBut the hardware is increasingly just the surface. The Dead Rabbit partnership — with the bar named the world's best — put exclusive recipe collections from New York's most acclaimed cocktail destination into every Barsys app. Patrón's co-branded coaster kits made Barsys the default platform for at-home margarita culture. Bacardi, Stoli, Bathtub Gin, and David Morton Kitchens followed. ReserveBar — the US's leading premium spirits e-commerce platform — partnered for the AI-powered Barsys Subscription Box at CES 2024: a monthly curated delivery of spirits and mixers personalised by the app to each user's taste.\n\nThe USA Today Reviewed Award at CES 2024 confirmed what the product pipeline was already saying: Barsys had gone from a founder's 3am idea to a legitimate platform business. With $3.8M in annual revenue, 1M+ drinks mixed, 46 people across two continents, and Barsys AI in development, Akshet Tewari's decade-long bet on automated home mixology is proving out — one perfect pour at a time.`,
  },
]

const PULL_QUOTE = {
  text: "It is beyond many people's imagination that fine cocktails can be made by anyone and anywhere. With Barsys, we want to break this myth and bring out the bartender in every customer — whether they're in New York, Mumbai, or anywhere in the world.",
  by: "Akshet Tewari, Founder & CEO, Barsys (January 2024)",
}

const LESSON =
  "The best hardware companies are not really hardware companies — they are platform companies with a physical entry point. Barsys built the machine to earn the right to build the marketplace. The dead rabbit recipes, the Patrón kits, the ReserveBar subscription, the Barsys AI: none of these were possible without the device that justified putting the app on your phone. The hardware is the moat. The platform is the business."

const PARTNERSHIPS = [
  "The Dead Rabbit — World's Best Cocktail Bar",
  "Patrón Tequila — Co-branded Coaster Kits",
  "Bacardi — Brand Recipe Integration",
  "Stoli Vodka — Brand Recipe Integration",
  "Bathtub Gin — Exclusive Recipes",
  "David Morton Kitchens — Chef Collaboration",
  "ReserveBar — AI Subscription Box Partner",
  "Amazon US & Amazon India — Retail Distribution",
]

const FAQS = [
  {
    q: "What is the origin story of Barsys — where did the idea come from?",
    a: "Akshet Tewari conceived Barsys during a 3am robotics lab session at Manipal Institute of Technology in 2014. Working on a conveyor belt project that moved boxes between stations, he imagined applying the same principle to cocktail-making — moving a glass under different liquid stations to produce a precisely measured, consistently perfect drink. He had been passionate about automated lifestyle products since winning an inter-school robotics competition in 2008. After graduating with a B.E. in Mechatronics, Robotics, and Automation Engineering, he convinced his father to seed the venture (leveraging his 30 years of supply chain expertise), moved to New York with no connections, cold-called investors for months, and launched the world's first automated home bartender in 2018.",
  },
  {
    q: "How does the Barsys 360 work technically?",
    a: "The Barsys 360 connects to the Barsys app via Bluetooth. Users fill up to six ingredient canisters (900ml each) with spirits, fresh juices, or mixers. After selecting a recipe in the app — from 1,000+ curated options, including exclusive collections from The Dead Rabbit and other partner bars — the machine uses proprietary algorithms to precisely measure and dispense each ingredient into a glass placed beneath. A cocktail is ready in under 10 seconds. The device keeps liquids cold for up to 8 hours and is available in Midnight Black and Polar White. A quick-fill funnel simplifies loading, and a cleaning solution and cycle is included.",
  },
  {
    q: "Is Barsys available in India and where can it be bought?",
    a: "Yes. Barsys formally entered India in January 2024 with the Coaster 2.0 (₹8,000, available on in.thebarsys.com). The Barsys 360 followed in 2024 for the Indian market. Both products are available on Amazon India. Akshet Tewari has described India as a key strategic market, particularly for the premium home bar and gifting segment. Barsys runs India marketing operations with dedicated team members in Asia alongside its New York headquarters.",
  },
  {
    q: "What is the Barsys Subscription Box and how does the SaaS model work?",
    a: "The Barsys Subscription Box, launched with ReserveBar at CES 2024, is an AI-powered curated monthly delivery service. The Barsys app learns a subscriber's taste preferences over time and recommends a personalised selection of spirits, mixers, and recipe content delivered to their door. The broader SaaS model gives Barsys recurring revenue beyond hardware: the app is free to download and use without a device, with brand partnerships, recipe marketplaces, influencer collaborations, and now subscription deliveries generating ongoing engagement and revenue from the 1M+ drink community.",
  },
]

const RELATED = [
  { name: "Aurassure", slug: "aurassure", cat: "Climate Tech / IoT", val: "₹29 Cr raised" },
  { name: "Bolna", slug: "bolna", cat: "AI / Voice Automation", val: "$6.92M raised" },
  { name: "Ather Energy", slug: "ather-energy-ev", cat: "Electric Vehicles", val: "$502M raised" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BarsysPage() {
  const accent = "#b45309"
  const accentDark = "#92400e"
  const accentBg = "#fffbeb"
  const accentBorder = "#fde68a"

  useEffect(() => {
    const existing = document.getElementById("page-jsonld")
    if (!existing) {
      const s = document.createElement("script")
      s.id = "page-jsonld"
      s.type = "application/ld+json"
      s.textContent = JSON.stringify(JSON_LD)
      document.head.appendChild(s)
    }
    return () => {
      document.getElementById("page-jsonld")?.remove()
    }
  }, [])

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#F3EFE5",
        fontFamily: "'Georgia','Times New Roman',serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&display=swap');
        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .dropcap::first-letter {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 4em; font-weight: 900; line-height: 0.82;
          float: left; margin-right: 0.08em; margin-top: 0.06em; color: #1A1208;
        }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .4s ease both; }
        @media (min-width:640px) {
          .ncols { display:grid; grid-template-columns:1fr 1fr 1fr; gap:0; }
          .ncols > div { padding:0 1.5rem; border-right:1px solid #C8C2B4; }
          .ncols > div:first-child { padding-left:0; }
          .ncols > div:last-child { border-right:none; padding-right:0; }
        }
        ::-webkit-scrollbar { width:3px; }
        ::-webkit-scrollbar-thumb { background:#C8C2B4; }
      `}</style>

      {/* Hidden H1 for SEO */}
      <h1 className="sr-only">
        Barsys Founder Story — Akshet Tewari | World's First App-Powered Automated Cocktail Maker | CES 2024 Award | India Launch | UpForge
      </h1>

      {/* ── BREADCRUMB ── */}
      <nav
        aria-label="Breadcrumb"
        className="px-4 sm:px-8 py-2"
        style={{
          background: "#EDE9DF",
          borderBottom: "1px solid #D8D2C4",
          fontFamily: "system-ui,sans-serif",
        }}
      >
        <ol className="flex flex-wrap items-center gap-1.5 text-[9px] text-[#AAA] uppercase tracking-widest">
          {[
            { n: "UpForge", h: "/" },
            { n: "Startup Registry", h: "/startup" },
            { n: "Consumer Tech Startups", h: "/consumer-tech-startups" },
            { n: "Barsys", h: "/startup/barsys" },
          ].map((b, i, arr) => (
            <li key={i} className="flex items-center gap-1.5">
              {i < arr.length - 1 ? (
                <Link href={b.h} className="hover:text-[#1A1208] transition-colors">
                  {b.n}
                </Link>
              ) : (
                <span className="text-[#1A1208] font-semibold">{b.n}</span>
              )}
              {i < arr.length - 1 && (
                <ChevronRight className="w-2.5 h-2.5 text-[#C8C2B4]" />
              )}
            </li>
          ))}
        </ol>
      </nav>

      {/* ── MASTHEAD ── */}
      <header style={{ background: "#F3EFE5", borderBottom: "3px solid #1A1208" }}>
        <div
          className="text-center px-4 pt-3 pb-6"
          style={{ borderBottom: "1px solid #C8C2B4" }}
        >
          <p
            className="text-[8px] tracking-[0.44em] text-[#AAA] uppercase mb-2"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            UpForge · Startup Registry · Consumer Technology
          </p>
          <p
            className="pf font-black leading-none text-[#1A1208]"
            style={{ fontSize: "clamp(2rem,5.5vw,4.2rem)" }}
          >
            The Founder Chronicle
          </p>
          <p className="italic mt-2 text-[#6B5C40]" style={{ fontSize: "clamp(12px,1.8vw,15px)" }}>
            India's independent startup registry — verified, editorial, March 2026
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
            <span style={{ color: "#C8C2B4", fontSize: 12 }}>✦</span>
            <div className="h-px w-20 sm:w-36" style={{ background: "#C8C2B4" }} />
          </div>
        </div>
        <div
          className="flex items-center px-4 sm:px-8 py-2 gap-4"
          style={{ fontFamily: "system-ui,sans-serif", borderBottom: "1px solid #C8C2B4" }}
        >
          <span className="text-[8px] text-[#AAA] uppercase tracking-widest flex-shrink-0">
            Edition · Consumer Hardware
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Hospitality Tech · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">New York, USA · Origin: India</span>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main className="fade-up max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div
          className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px]"
          style={{ borderBottom: "2px solid #1A1208" }}
        >
          {/* ────── LEFT: EDITORIAL ────── */}
          <article className="py-8 lg:pr-8" style={{ borderRight: "1px solid #C8C2B4" }}>

            {/* Category tag */}
            <div className="flex items-center gap-3 mb-5" style={{ fontFamily: "system-ui,sans-serif" }}>
              <span
                className="text-[8.5px] font-black tracking-[0.28em] uppercase px-3 py-1.5 text-white"
                style={{ background: accent }}
              >
                CONSUMER HARDWARE / MIXOLOGY TECH
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              A 3am robotics lab. A conveyor belt. A Manipal engineer who moved to New York and{" "}
              <em style={{ color: accent }}>
                invented the world's first automated cocktail maker.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Akshet Tewari left Manipal with a mechatronics degree, a hardware idea, and no
              investors. He cold-called his way to angel funding, built the first prototype in a
              New York basement with 15 MIT Manipal graduates, and spent a decade turning a
              late-night thought experiment into a global mixology platform. 1M+ drinks. CES 2024
              Award. The Dead Rabbit. Patrón. Now Barsys AI. The story of the Indian founder who
              poured everything into the perfect cocktail.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "New York, USA",
                "Est. 2014",
                "World's First Automated Home Bartender",
              ].map((t, i, a) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="text-[9px] text-[#AAA] uppercase tracking-wider">{t}</span>
                  {i < a.length - 1 && (
                    <span className="text-[#C8C2B4] text-[10px]">·</span>
                  )}
                </span>
              ))}
            </div>

            {/* Mobile hero image */}
            <div className="lg:hidden mb-8">
              <img
                src="/Upforge-barsys.webp"
                alt="Akshet Tewari, Founder & CEO of Barsys — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Akshet Tewari
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Founder & CEO · Barsys
                </p>
              </div>
            </div>

            {/* 3-col newspaper body */}
            <div className="ncols">
              {COLS.map((col, ci) => (
                <div key={ci} className="mb-6 sm:mb-0">
                  <h3
                    className="font-black uppercase tracking-[0.13em] mb-3 pb-1.5"
                    style={{
                      fontSize: 11,
                      color: "#1A1208",
                      borderBottom: `1.5px solid ${accent}`,
                      fontFamily: "system-ui,sans-serif",
                    }}
                  >
                    {col.h}
                  </h3>
                  {col.b.split("\n\n").map((p, pi) => (
                    <p
                      key={pi}
                      className={`leading-[1.9] mb-3 text-[#2C2010] ${
                        ci === 0 && pi === 0 ? "dropcap" : ""
                      }`}
                      style={{ fontSize: "clamp(12.5px,1.3vw,13.5px)" }}
                    >
                      {p}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <div
              className="mt-10 pt-6 pb-6 text-center"
              style={{
                borderTop: `3px double ${accent}`,
                borderBottom: "1px solid #C8C2B4",
              }}
            >
              <span
                style={{ display: "block", color: accentDark, fontSize: 24, marginBottom: 10 }}
              >
                ❝
              </span>
              <blockquote
                className="pf italic text-[#1A1208] leading-[1.7] max-w-2xl mx-auto px-4"
                style={{ fontSize: "clamp(16px,2.2vw,22px)" }}
              >
                "{PULL_QUOTE.text}"
              </blockquote>
              <p
                className="text-[9px] uppercase tracking-[0.24em] text-[#AAA] mt-4"
                style={{ fontFamily: "system-ui,sans-serif" }}
              >
                — {PULL_QUOTE.by}
              </p>
            </div>

            {/* Company Timeline */}
            <div className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Company Timeline
              </p>
              <ol style={{ fontFamily: "system-ui,sans-serif" }}>
                {TIMELINE.map((t, i) => (
                  <li key={i} className="flex gap-4 mb-4">
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div
                        className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: accent }}
                      />
                      {i < TIMELINE.length - 1 && (
                        <div
                          className="w-px flex-1 mt-1"
                          style={{ background: accentBorder, minHeight: 24 }}
                        />
                      )}
                    </div>
                    <div>
                      <span
                        className="text-[9px] font-black uppercase tracking-wider"
                        style={{ color: accent }}
                      >
                        {t.year}
                      </span>
                      <p className="text-[12px] text-[#2C2010] mt-0.5 leading-relaxed">
                        {t.event}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* FAQ — visual only, NO microdata */}
            <section className="mt-8">
              <p
                className="text-[8.5px] font-black uppercase tracking-[0.26em] mb-4"
                style={{
                  color: accent,
                  fontFamily: "system-ui,sans-serif",
                  borderBottom: `1px solid ${accentBorder}`,
                  paddingBottom: 8,
                }}
              >
                Frequently Asked Questions
              </p>
              {FAQS.map((faq, i) => (
                <div
                  key={i}
                  className="mb-4 pb-4"
                  style={{ borderBottom: "1px solid #D8D2C4" }}
                >
                  <h3
                    className="font-bold text-[#1A1208] mb-1.5"
                    style={{ fontSize: 13, fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.q}
                  </h3>
                  <p
                    className="text-[12.5px] text-[#5A4A30] leading-relaxed"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    {faq.a}
                  </p>
                </div>
              ))}
            </section>
          </article>

          {/* ────── RIGHT: SIDEBAR ────── */}
          <aside className="hidden lg:block pl-8 pt-8 pb-8">
            <div className="sticky top-4 flex flex-col gap-5">

              {/* Founder image */}
              <div className="relative w-full overflow-hidden" style={{ height: 340 }}>
                <img
                  src="/Upforge-barsys.webp"
                  alt="Akshet Tewari, Founder & CEO of Barsys — UpForge Founder Chronicle"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3.5"
                  style={{
                    background: "linear-gradient(to top, rgba(12,7,2,0.96) 60%, transparent)",
                  }}
                >
                  <p className="pf text-white font-bold" style={{ fontSize: 14 }}>
                    Akshet Tewari
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Founder & CEO · Barsys
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://barsys.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit Barsys official website"
                >
                  <div className="flex items-center gap-2">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={accent}
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                    >
                      barsys.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/barsys-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View Barsys on LinkedIn"
                >
                  <div className="flex items-center gap-2">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="#0077b5">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                    <span
                      className="text-[10px] font-bold uppercase tracking-wider"
                      style={{ color: "#0077b5", fontFamily: "system-ui,sans-serif" }}
                    >
                      LinkedIn — Barsys LLC
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: "#0077b5" }} />
                </a>
              </div>

              {/* By the Numbers */}
              <div style={{ border: "2px solid #1A1208" }}>
                <div className="px-4 py-2.5" style={{ background: "#1A1208" }}>
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.3em] text-white"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    By the Numbers
                  </p>
                </div>
                <dl
                  className="grid grid-cols-2 divide-x divide-y"
                  style={{ borderColor: "#D8D2C4" }}
                >
                  {STATS.map((s, i) => (
                    <div key={i} className="px-4 py-3" style={{ borderColor: "#D8D2C4" }}>
                      <dt
                        className="text-[7.5px] text-[#AAA] uppercase tracking-[0.16em] mb-1"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {s.l}
                      </dt>
                      <dd
                        className="pf font-black text-[#1A1208] leading-none"
                        style={{ fontSize: "1.25rem" }}
                      >
                        {s.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Awards */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Awards & Recognition
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {[
                    "USA Today Network Reviewed Award — CES 2024",
                    "Rolling Stone — Best Tech Gifts for Gadget Lovers",
                    "BuzzFeed — 33 Best Products List",
                    "YourStory — India Hardware Export Feature",
                    "BusinessToday — In-Home Luxury Drinking Feature",
                  ].map((award, i) => (
                    <p
                      key={i}
                      className="flex items-center gap-2 text-[11px] text-[#2C2010]"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 1,
                          background: accent,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {award}
                    </p>
                  ))}
                </div>
              </div>

              {/* The Lesson */}
              <div
                className="px-4 py-4"
                style={{ background: accentBg, border: `1px solid ${accentBorder}` }}
              >
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-2"
                  style={{ color: accent, fontFamily: "system-ui,sans-serif" }}
                >
                  The Lesson
                </p>
                <p className="italic text-[#1A1208] leading-[1.72]" style={{ fontSize: 13 }}>
                  {LESSON}
                </p>
              </div>

              {/* Key Partnerships */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Key Partnerships
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {PARTNERSHIPS.map((p, i) => (
                    <p
                      key={i}
                      className="flex items-center gap-2 text-[11px] text-[#2C2010]"
                      style={{ fontFamily: "system-ui,sans-serif" }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: 1,
                          background: accent,
                          display: "inline-block",
                          flexShrink: 0,
                        }}
                      />
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Also Read */}
              <div>
                <p
                  className="text-[8px] font-black uppercase tracking-[0.26em] mb-3"
                  style={{ color: "#AAA", fontFamily: "system-ui,sans-serif" }}
                >
                  Also Read on UpForge
                </p>
                {RELATED.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/startup/${r.slug}`}
                    className="flex items-center justify-between py-2.5 hover:opacity-70 transition-opacity"
                    style={{ borderBottom: "1px solid #EDE9DF", textDecoration: "none" }}
                  >
                    <div>
                      <p
                        className="text-[11px] font-bold text-[#1A1208]"
                        style={{ fontFamily: "system-ui,sans-serif" }}
                      >
                        {r.name}
                      </p>
                      <p className="text-[9px] text-[#AAA] uppercase tracking-wider">
                        {r.cat} · {r.val}
                      </p>
                    </div>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#AAA]" />
                  </Link>
                ))}
              </div>

            </div>
          </aside>
        </div>

        {/* ── SEO INTERNAL LINKS ── */}
        <section className="py-8" style={{ borderBottom: "1px solid #C8C2B4" }}>
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-[#AAA] mb-4"
            style={{ fontFamily: "system-ui,sans-serif" }}
          >
            Explore More Consumer Tech Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Consumer Tech Startups India 2026", h: "/consumer-tech-startups" },
              { l: "Indian Founders in USA", h: "/indian-founders-usa" },
              { l: "Manipal Institute of Technology Startups", h: "/manipal-startups" },
              { l: "Hardware Startups India", h: "/hardware-startups-india" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Food & Beverage Tech India", h: "/food-beverage-tech" },
              { l: "Startup Registry India", h: "/startup" },
              { l: "Submit Your Startup", h: "/submit" },
            ].map((lnk) => (
              <Link
                key={lnk.h}
                href={lnk.h}
                className="flex items-center gap-1 p-3 hover:border-[#1A1208] transition-all"
                style={{
                  border: "1px solid #D8D2C4",
                  background: "white",
                  textDecoration: "none",
                }}
              >
                <span
                  className="text-[10px] font-bold uppercase tracking-wider text-[#1A1208]"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  {lnk.l}
                </span>
                <ChevronRight className="w-2.5 h-2.5 text-[#AAA] flex-shrink-0 ml-auto" />
              </Link>
            ))}
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pt-8 pb-2">
          <div
            className="grid sm:grid-cols-2 gap-6 items-center pb-8"
            style={{ borderBottom: "1px solid #D8D2C4" }}
          >
            <div>
              <p className="pf font-bold text-[#1A1208] mb-2" style={{ fontSize: "1.2rem" }}>
                Building India's next global product? Get verified on UpForge.
              </p>
              <p className="text-[12px] text-[#6B5C40]" style={{ fontFamily: "system-ui,sans-serif" }}>
                Free startup profiles. Independent verification. Indexed by Google.
              </p>
            </div>
            <div className="flex sm:justify-end">
              <Link
                href="/submit"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-white font-bold uppercase tracking-wider hover:opacity-90"
                style={{
                  background: "#1A1208",
                  fontSize: 11,
                  fontFamily: "system-ui,sans-serif",
                  textDecoration: "none",
                }}
                aria-label="List your Indian startup on UpForge for free"
              >
                List Your Startup — Free <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <p
            className="text-[9px] leading-relaxed mt-4"
            style={{ color: "#BBB0A0", fontFamily: "system-ui,sans-serif" }}
          >
            * Data sourced from YourStory, BusinessToday, Inter-Bev Magazine, The Week, LeadIQ,
            Crunchbase, The Org, PRNewswire, and Barsys press releases as of March 2026. UpForge
            is an independent registry — no paid placements, no sponsored rankings. Revenue figures
            and team sizes reflect latest available public data from third-party intelligence
            platforms and company announcements.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Consumer Tech Startups", h: "/consumer-tech-startups" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Founders in USA", h: "/indian-founders-usa" },
                { l: "Aurassure Profile", h: "/startup/aurassure" },
                { l: "Bolna Profile", h: "/startup/bolna" },
                { l: "BharatPe Profile", h: "/startup/bharatpe-fintech" },
                { l: "Submit Startup", h: "/submit" },
              ].map((lnk) => (
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
