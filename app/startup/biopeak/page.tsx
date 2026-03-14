"use client"

// app/startup/biopeak/page.tsx
// UpForge — BioPeak · Rishi Pardal & Shiva Subramanian Founder Chronicle
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
      "@id": "https://upforge.in/startup/biopeak#article",
      "headline": "BioPeak — How Rishi Pardal & Shiva Subramanian Built India's First Full-Stack Longevity Platform Backed by Nikhil Kamath, Accel and Manipal Group",
      "description": "BioPeak founder story — Rishi Pardal (ex-CEO United Breweries, ex-HUL, ex-Avery Dennison) and Shiva Subramanian (University of Nottingham, ex-Phitons Bioengineering, ex-STEER Engineering) founded BioPeak in 2024 to build India's first precision longevity platform. $6.2M raised across seed and follow-on rounds from NKSquared (Nikhil Kamath/Zerodha), Accel founding partner Prashanth Prakash, and Claypond Capital (Manipal Group family office). India's first longevity clinic launched in Bengaluru (March 2025). 130+ biomarker blood panels. BHARAT Study partner at IISc. Modern Mayr Medicine partnership. CXO Program. Women's Vitality Program. The deepest clinical bet on Indian healthspan.",
      "url": "https://upforge.in/startup/biopeak",
      "datePublished": "2026-03-14T00:00:00+05:30",
      "dateModified": "2026-03-14T00:00:00+05:30",
      "inLanguage": "en-IN",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.upforge.in/Upforge-biopeak.webp",
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
      "about": [
        {
          "@type": "Person",
          "name": "Rishi Pardal",
          "jobTitle": "Co-Founder & CEO",
          "worksFor": { "@type": "Organization", "name": "BioPeak" },
          "description": "Rishi Pardal is a 28-year FMCG and consumer goods veteran who served as CEO & MD of United Breweries Ltd. (2020–2023), VP & GM at Avery Dennison (2010–2020 across South Asia and Asia Pacific), MD at Marico Bangladesh, General Manager South India at Unilever, and Business Head at Hindustan Unilever Ltd. (1996–2010). He holds High Performance Leadership certification from IMD Lausanne and is an active angel investor with a portfolio of 18 companies including Truemeds and goSTOPS. He co-founded BioPeak in June 2024.",
          "sameAs": ["https://www.linkedin.com/in/rishi-pardal-8a21b15/"]
        },
        {
          "@type": "Person",
          "name": "Shiva Subramanian",
          "jobTitle": "Co-Founder & CTO/CIO",
          "worksFor": { "@type": "Organization", "name": "BioPeak" },
          "alumniOf": { "@type": "CollegeOrUniversity", "name": "University of Nottingham" },
          "description": "Shiva Subramanian is Co-Founder and CTO/CIO of BioPeak. A University of Nottingham graduate with Z Health Performance Solutions certification, he previously worked at Phitons Bioengineering Pvt. Ltd., Connect Ventures, Potential Health Development, and STEER Engineering. He brings deep expertise in bioengineering, health technology infrastructure, and precision performance systems.",
          "sameAs": ["https://www.linkedin.com/company/biopeak-health/"]
        }
      ],
      "mentions": {
        "@type": "Organization",
        "name": "BioPeak",
        "url": "https://biopeak.com",
        "legalName": "Biopeak Wellness Private Limited",
        "foundingDate": "2024",
        "foundingLocation": {
          "@type": "Place",
          "addressLocality": "Bengaluru",
          "addressRegion": "Karnataka",
          "addressCountry": "IN"
        },
        "description": "BioPeak is India's first full-stack precision health and longevity platform, headquartered in Bengaluru. It operates India's first dedicated longevity clinics, delivering AI-driven multiomics diagnostics, advanced imaging, wearable integration, and expert-led personalised health programmes designed for Indian biology and disease patterns. Its proprietary Longevity Hexacode integrates six diagnostic layers. Clients undergo 130+ biomarker blood panels, DEXA scans, VO₂ max testing, whole-exome genomics, microbiome mapping, and salivary cortisol rhythm analysis. BioPeak is backed by NKSquared (Nikhil Kamath/Zerodha), Accel India founding partner Prashanth Prakash, and Claypond Capital (Manipal Group family office). It is a partner in IISc's BHARAT Study — India's first comprehensive ageing database — and has partnered with Austria's Modern Mayr Medicine for a 150-year clinical legacy integration.",
        "sameAs": [
          "https://biopeak.com",
          "https://www.linkedin.com/company/biopeak-health/"
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://upforge.in" },
        { "@type": "ListItem", "position": 2, "name": "Startup Registry", "item": "https://upforge.in/startup" },
        { "@type": "ListItem", "position": 3, "name": "Health Tech Startups India", "item": "https://upforge.in/healthtech-startups-india" },
        { "@type": "ListItem", "position": 4, "name": "BioPeak", "item": "https://upforge.in/startup/biopeak" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who founded BioPeak and what is the founders' background?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BioPeak was co-founded in June 2024 by Rishi Pardal (CEO) and Shiva Subramanian (CTO/CIO), based in Bengaluru. Rishi Pardal is a 28-year FMCG veteran with roles including CEO & MD of United Breweries Ltd. (Kingfisher), VP & GM at Avery Dennison across South Asia and Asia Pacific, MD at Marico Bangladesh, and Business Head at Hindustan Unilever. He holds a High Performance Leadership certification from IMD Lausanne and is an active angel investor with 18 portfolio companies. Shiva Subramanian studied at the University of Nottingham and holds Z Health Performance Solutions certification; he previously built bioengineering and health technology systems at Phitons Bioengineering and STEER Engineering."
          }
        },
        {
          "@type": "Question",
          "name": "How much has BioPeak raised and who are its investors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BioPeak has raised approximately $6.2 million in total across multiple rounds. The seed round ($3.5M, approximately ₹29 crore) was raised in mid-2025 from Accel India founding partner Prashanth Prakash, Claypond Capital (the family office of Manipal Group chairman Ranjan Pai), and NKSquared (the investment vehicle of Zerodha co-founder Nikhil Kamath). A follow-on round of $2.7M was led by NKSquared in January 2026 — Nikhil Kamath's second investment in the company after a $1.43M initial contribution in August 2024. Total raised: approximately $6.2M. Capital is deployed toward clinic expansion, AI tool development, research, and clinical programmes."
          }
        },
        {
          "@type": "Question",
          "name": "What is India's first longevity clinic and what does BioPeak offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BioPeak launched India's first dedicated longevity clinic in Bengaluru in March 2025. A second clinic is planned for 2026. Unlike conventional clinics, BioPeak offers programmes that begin with 130+ biomarker blood panels, DEXA scans, VO₂ max testing, whole-exome functional genomics, gut and oral microbiome mapping, salivary cortisol rhythm analysis, organic acid profiling, and non-invasive imaging (MRI, CT, DXA, ECHO). Clients undergo more than six hours of consultations with a multidisciplinary team including clinicians, nutritionists, and specialists. The proprietary Longevity Hexacode integrates six diagnostic layers into a personalised health blueprint. BioPeak's model is described as a 'family health office' approach — continuous, data-driven, specialist-guided health management."
          }
        },
        {
          "@type": "Question",
          "name": "What is the BHARAT Study and how is BioPeak involved?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The BHARAT Study (Biomarkers of Healthy Aging, Resilience, Adversity, and Transitions) is India's first comprehensive ageing database, led by IISc Bengaluru's Longevity India Programme. It maps physiological, molecular, and environmental indicators that influence ageing in Indian populations — building a Bharat Baseline reference for what is biologically normal in Indians. BioPeak is a partner in the BHARAT Study and a Tier 1 sponsor of IISc's RISE 2025 conference. Chief Scientific Officer Dr. Deepak Kumar Saini is an IISc professor of Developmental Biology and Genetics. The study directly informs BioPeak's approach — building longevity programmes calibrated to Indian genetics, diet, and disease patterns rather than Western biomarker norms."
          }
        },
        {
          "@type": "Question",
          "name": "Who does BioPeak serve and what are its flagship programmes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "BioPeak serves three core client segments: CXOs and high-performance executives (the CXO Program — transforming reactive health management into a proactive longevity strategy); women navigating health transitions (the Women's Vitality Program — covering hormonal, metabolic, cognitive, and resilience objectives); and high achievers seeking peak performance. All programmes combine advanced diagnostics, AI-driven insight generation, wearable data integration, and continuous multidisciplinary specialist support. The BioPeak–Modern Mayr Medicine partnership (announced October 2025) adds a 150-year European clinical legacy in gut health, detoxification, and metabolic restoration, adapted to Indian ethnicity."
          }
        },
        {
          "@type": "Question",
          "name": "How is BioPeak different from conventional health check-ups or wellness programmes in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Conventional health check-ups in India measure 20–30 biomarkers and deliver a report. BioPeak measures 130+ biomarkers, adds genomic and epigenetic profiling, microbiome mapping, imaging, VO₂ max, and cortisol rhythms — then uses its AI Longevity Hexacode to identify early biological dysfunction before disease manifests, organ by organ. The critical differentiator is continuity: BioPeak does not stop at testing. It partners clients through personalised intervention protocols, lifestyle programmes, wearable monitoring, and specialist follow-up until measurable outcomes are achieved. Its data is calibrated to Indian biology — not imported from Western population studies. This is the distinction between a health check and a precision health programme."
          }
        }
      ]
    }
  ]
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const STATS = [
  { l: "Total Raised", v: "$6.2M" },
  { l: "Founded", v: "2024" },
  { l: "HQ", v: "Bengaluru" },
  { l: "Biomarkers", v: "130+" },
  { l: "Clinics", v: "2 (2026)" },
  { l: "Model", v: "Precision AI" },
]

const TIMELINE = [
  {
    year: "Jun 2024",
    event: "Rishi Pardal — ex-CEO United Breweries, ex-Business Head HUL, ex-VP Avery Dennison — co-founds BioPeak Wellness Private Limited in Bengaluru with Shiva Subramanian (ex-Phitons Bioengineering, University of Nottingham). The founding thesis: Western longevity science does not apply to Indian bodies, Indian disease patterns, or Indian diets. BioPeak will build the first longevity platform calibrated entirely to Indian biology.",
  },
  {
    year: "Aug 2024",
    event: "First funding: $1.43M from Nikhil Kamath's NKSquared. Kamath — Zerodha co-founder, India's most visible young billionaire — invests as an individual believer in the longevity thesis. Product development begins. Chief Scientific Officer Dr. Deepak Kumar Saini, IISc professor of Developmental Biology and Genetics, joins the leadership team. Deepak Saini also serves as Chief Scientific Officer at Longevity India (IISc).",
  },
  {
    year: "Jun 2025",
    event: "Seed round closed: $3.5M (₹29 crore) from Accel India founding partner Prashanth Prakash, Claypond Capital (family office of Manipal Group chairman Ranjan Pai), and NKSquared. Prashanth Prakash, Founding Patron of Longevity India, also becomes a mentor to BioPeak. Funds deployed toward clinic build-out, AI platform development, and clinical programme design.",
  },
  {
    year: "Mar 2025",
    event: "India's first dedicated longevity clinic launches in Bengaluru. The clinic opens as BioPeak's first physical manifestation — offering 130+ biomarker blood panels, DEXA, VO₂ max, whole-exome genomics, microbiome mapping, and 6+ hour multidisciplinary consultations. The Longevity Hexacode — BioPeak's proprietary six-layer diagnostic and intervention system — goes live for clients.",
  },
  {
    year: "Aug 2025",
    event: "India's first longevity clinic formally announced to media. BioPeak becomes a Tier 1 sponsor and Longevity Luminaries partner of IISc's RISE 2025 conference — Longevity India's flagship annual event. The BHARAT Study partnership deepens: BioPeak's clinical data and Indian client cohort contributes to India's first comprehensive ageing biomarker database. Exclusive longevity partner at Rainmatter's peakst8 Festival.",
  },
  {
    year: "Oct 2025",
    event: "BioPeak announces landmark partnership with Austria's Modern Mayr Medicine — bringing 150 years of European preventive health wisdom (gut health, detoxification, metabolic restoration) to India via culturally adapted programmes. Prof. Dr. Harald Stossier and Irina Sharma join BioPeak's advisory board. A joint BioPeak–Modern Mayr programme is slated for 2026. BioPeak is now described as India's first full-stack precision health and longevity platform.",
  },
  {
    year: "Jan 2026",
    event: "$2.7M follow-on round from NKSquared — Nikhil Kamath's second investment in BioPeak. Total raised: $6.2M. Proceeds: second Bengaluru clinic (opening within weeks), enhanced AI diagnostics, research initiatives with IISc, and expansion of clinical programmes. Rishi Pardal in The Economic Times: 'Longevity in India needs to be built carefully; with strong clinical foundations and a long-term view.' The second clinic is BioPeak's proof of the model.",
  },
]

const COLS = [
  {
    h: "The Problem With Borrowing Western Longevity Science",
    b: `Rishi Pardal had spent 28 years watching India misapply frameworks designed for someone else. At Hindustan Unilever, Avery Dennison, Marico Bangladesh, and finally United Breweries — where he served as CEO from 2020 to 2023 — he had seen how deeply context-specific the right solution needed to be. What worked in Europe or America often needed to be rebuilt almost entirely for the Indian consumer, the Indian market, and the Indian body.\n\nThe longevity industry was committing the same error, and at far higher stakes. The ageing clocks, the biomarker reference ranges, the dietary protocols, the supplementation regimens being imported into India's premium wellness market were all calibrated to Western populations — to European and American diets, genetics, disease histories, and environmental exposures. An Indian body that consumed turmeric daily, ate predominantly vegetarian, lived in a high-pollution urban environment, and carried a genetic susceptibility to metabolic disease was being evaluated against a reference point that did not describe it.\n\nPardal co-founded BioPeak in June 2024 with Shiva Subramanian — a bioengineering specialist with deep expertise in precision performance systems — to build the alternative: a full-stack longevity platform that was built on Indian data, staffed by Indian scientists, designed for Indian disease patterns, and delivered through India's first dedicated longevity clinic.`,
  },
  {
    h: "Nikhil Kamath, Accel, Manipal Group and the Clinical Build",
    b: `The investor lineup that backed BioPeak was itself a statement about where India's most sophisticated capital was pointing. Nikhil Kamath — Zerodha co-founder, India's most visible young billionaire, and a founder who has spoken publicly about his own interest in longevity science — invested $1.43M in August 2024, months before BioPeak had a clinic or a product. It was a thesis investment in Rishi Pardal's ability to build something clinically serious.\n\nThe seed round that followed in mid-2025 brought in two more validation-grade names. Prashanth Prakash, the founding partner of Accel India who backed Flipkart and Swiggy, joined as investor and mentor. He is also the Founding Patron of Longevity India, IISc's research platform — making his investment in BioPeak an extension of his institutional conviction about ageing science in India. Claypond Capital — the family office of Ranjan Pai, chairman of the Manipal Group — brought the credibility of India's largest private healthcare and education empire.\n\nThe clinic that opened in Bengaluru in March 2025 delivered on the thesis. 130+ biomarker blood panels. DEXA scans. VO₂ max testing. Whole-exome functional genomics. Gut microbiome mapping. Salivary cortisol rhythm analysis. Organic acid profiling. Non-invasive imaging across MRI, CT, DXA, and ECHO. More than six hours of consultations with a multidisciplinary team. The Longevity Hexacode — BioPeak's proprietary six-layer system — translated all of it into a personalised health blueprint. It was unlike anything else available in India.`,
  },
  {
    h: "BHARAT Study, Modern Mayr and the Long Game",
    b: `The most consequential thing BioPeak has built is not the clinic — it is the data layer underneath it. Chief Scientific Officer Dr. Deepak Kumar Saini is an IISc professor who leads research on cellular signalling, ageing, and inflammation, and whose team is anchoring the BHARAT Study (Biomarkers of Healthy Aging, Resilience, Adversity, and Transitions) — India's first comprehensive ageing database. BioPeak is the BHARAT Study's clinical partner and a Tier 1 sponsor of IISc's RISE 2025 conference. Every client who walks through BioPeak's doors contributes data to the effort to understand how Indians actually age, organ by organ, in the context of their own genetics and environment.\n\nThe Modern Mayr Medicine partnership — announced in October 2025 with Prof. Dr. Harald Stossier, a global authority on gut health and metabolic restoration — added 150 years of European clinical heritage to the platform. The BioPeak–Modern Mayr programme, scheduled for 2026, will bring Mayr diagnostics and protocols adapted to Indian ethnicity and lifestyle. Advisory board members Dr. Satchin Panda (Salk Institute, circadian medicine expert) and Irina Sharma (Modern Mayr practitioner) complete a scientific bench that is genuinely world-class.\n\nNikhil Kamath's second investment in January 2026 — $2.7M — funds the second Bengaluru clinic, deeper AI tools, and the IISc research programme. Pardal's framing remains deliberately measured: "Longevity in India needs to be built carefully — with strong clinical foundations and a long-term view." In a category full of supplement brands and wellness apps, BioPeak is choosing to be the institution.`,
  },
]

const PULL_QUOTE = {
  text: "We're at a unique point where developments in molecular diagnostics, AI, and imaging allow us to understand the human body in unprecedented ways. Our platform translates these insights into actionable, individualised health plans aimed at extending one's healthspan, not just lifespan. And it has to be built on Indian data — not borrowed from the West.",
  by: "Rishi Pardal, Co-Founder & CEO, BioPeak (June 2025)",
}

const LESSON =
  "The longevity industry's fundamental error is importing frameworks designed for Western bodies. Rishi Pardal built BioPeak on a single conviction: Indian biology, Indian genetics, and Indian disease patterns require Indian data. The BHARAT Study partnership, the 130+ biomarker Indian baseline, the programmes calibrated to Indian diets — these are not differentiators. They are the entire product. The companies that own the data own the future of precision medicine."

const INVESTORS = [
  "NKSquared / Nikhil Kamath — Zerodha Co-Founder (Lead, Jan 2026 Follow-On)",
  "NKSquared — $1.43M First Investment (Aug 2024)",
  "Prashanth Prakash — Accel India Founding Partner (Seed 2025, Mentor)",
  "Claypond Capital — Manipal Group Family Office (Seed 2025)",
]

const ADVISORS = [
  "Dr. Deepak Kumar Saini — IISc, Chief Scientific Officer",
  "Dr. Satchin Panda — Salk Institute, Circadian Medicine Expert",
  "Prof. Dr. Harald Stossier — Pioneer, Modern Mayr Medicine",
  "Irina Sharma — Modern Mayr Medicine Expert & Advisory Board",
]

const FAQS = [
  {
    q: "What is the Longevity Hexacode and how does it work?",
    a: "The Longevity Hexacode is BioPeak's proprietary six-layer diagnostic and intervention framework — the core intellectual property of the platform. It integrates six data streams: molecular diagnostics (multiomics), advanced imaging (MRI, CT, DXA, ECHO), tissue-level screenings (toxin, mineral, oxidative stress), AI analytics, wearable data, and specialist clinical interpretation. Rather than a single test or a report, the Hexacode produces a personalised health blueprint that identifies biological dysfunction before it becomes disease — and maps it to actionable intervention protocols in nutrition, sleep, stress, movement, and lifestyle medicine. It is what differentiates BioPeak from any diagnostic lab or wellness app.",
  },
  {
    q: "Who is Rishi Pardal and why did he leave corporate India to build a longevity startup?",
    a: "Rishi Pardal spent 28 years in FMCG and consumer goods — Brand Manager at HUL (1998–2003), Business Head and GM at Hindustan Unilever (2003–2010), MD at Marico Bangladesh, VP & MD South Asia at Avery Dennison, VP & GM Asia Pacific at Avery Dennison, and CEO & MD of United Breweries Ltd. / Kingfisher (2020–2023). He is also an active angel investor with 18 portfolio companies. He left UBL in 2023 and founded BioPeak in June 2024 — drawn by the intersection of a problem he identified deeply (longevity science calibrated to Indian biology) and a market timing he believed was arriving: molecular diagnostics, AI, and imaging had all crossed a threshold where a genuinely different standard of preventive care became possible.",
  },
  {
    q: "What makes BioPeak's scientific advisory board significant?",
    a: "BioPeak's scientific bench is genuinely world-class for an early-stage Indian startup. Chief Scientific Officer Dr. Deepak Kumar Saini is an IISc professor specialising in cellular signalling and ageing who leads the BHARAT Study — India's first comprehensive ageing biomarker database. Dr. Satchin Panda is a globally recognised circadian biology expert from the Salk Institute whose research on time-restricted eating has shaped mainstream health guidance. Prof. Dr. Harald Stossier is the pioneer of Modern Mayr Medicine, a 150-year European tradition in gut health and metabolic restoration. This advisory structure means BioPeak's clinical programmes are shaped by the researchers actively advancing the science — not just applying published guidelines.",
  },
  {
    q: "What is the BioPeak CXO Programme and who is it for?",
    a: "The BioPeak CXO Programme is a dedicated longevity strategy for senior executives and leaders. It is designed on the insight that the demands of leadership — chronic stress, travel, high-stakes decisions, irregular sleep — create a specific and measurable biological toll. The programme delivers a full BioPeak diagnostic workup tailored to executive health patterns, then builds a proactive health roadmap that covers metabolic function, cognitive resilience, stress biology (salivary cortisol rhythms), sleep architecture, and physical performance. The goal is to shift health management from reactive — visiting a doctor when sick — to predictive and preventive. BioPeak's data shows that most CXO health issues begin as silent biological dysfunction visible in biomarkers, years before symptoms appear.",
  },
]

const RELATED = [
  { name: "Barsys", slug: "barsys", cat: "Consumer Hardware / Mixology", val: "$3.8M ARR" },
  { name: "Bolna", slug: "bolna", cat: "AI / Voice Automation", val: "$6.92M raised" },
  { name: "Aurassure", slug: "aurassure", cat: "Climate Tech / IoT", val: "₹29 Cr raised" },
]

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function BioPeakPage() {
  const accent = "#7e22ce"
  const accentDark = "#6b21a8"
  const accentBg = "#faf5ff"
  const accentBorder = "#e9d5ff"

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
        BioPeak Founder Story — Rishi Pardal & Shiva Subramanian | India's First Longevity Clinic | Nikhil Kamath NKSquared Backed | $6.2M Raised | UpForge
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
            { n: "Health Tech India", h: "/healthtech-startups-india" },
            { n: "BioPeak", h: "/startup/biopeak" },
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
            UpForge · Startup Registry · Health Technology
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
            Edition · Longevity / Precision Health
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span
            className="text-[9px] font-black uppercase tracking-wider"
            style={{ color: accent }}
          >
            Health Tech · March 2026
          </span>
          <div className="h-3 w-px bg-[#C8C2B4]" />
          <span className="text-[9px] text-[#AAA]">Bengaluru, Karnataka</span>
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
                LONGEVITY / PRECISION HEALTH
              </span>
              <span className="text-[9px] text-[#AAA] uppercase tracking-wider">March 2026</span>
            </div>

            {/* Headline */}
            <h2
              className="pf font-black leading-[1.05] text-[#1A1208] mb-5"
              style={{ fontSize: "clamp(1.8rem,4vw,3.2rem)" }}
            >
              A 28-year FMCG career. A conviction that Western longevity science doesn't fit Indian bodies.{" "}
              <em style={{ color: accent }}>
                India's first longevity clinic — backed by Nikhil Kamath, Accel and Manipal.
              </em>
            </h2>

            {/* Deck */}
            <p
              className="italic leading-[1.75] mb-6 pb-6 text-[#5A4A30]"
              style={{ fontSize: "clamp(14px,1.9vw,17px)", borderBottom: "1px solid #C8C2B4" }}
            >
              Rishi Pardal left the CEO chair of United Breweries in 2023 and built BioPeak — India's
              first full-stack precision longevity platform — on a single insight: every ageing clock,
              biomarker norm, and supplement protocol being sold to India was calibrated for someone
              else's body. 130+ biomarkers, IISc's BHARAT Study, Modern Mayr Medicine, and Nikhil
              Kamath's repeat investment later, BioPeak is the deepest clinical bet ever placed
              on the Indian healthspan.
            </p>

            {/* Byline */}
            <div
              className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-8"
              style={{ fontFamily: "system-ui,sans-serif" }}
            >
              {[
                "By UpForge Editorial",
                "Bengaluru, Karnataka",
                "Est. 2024",
                "India's Longevity Science Pioneer",
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
                src="/Upforge-biopeak.webp"
                alt="Rishi Pardal and Shiva Subramanian, Co-Founders of BioPeak — UpForge Founder Chronicle"
                className="w-full object-cover object-top"
                style={{ height: "min(300px,60vw)", display: "block" }}
                loading="eager"
              />
              <div className="px-4 py-3" style={{ background: "#1A1208" }}>
                <p className="pf text-white font-bold" style={{ fontSize: 13 }}>
                  Rishi Pardal & Shiva Subramanian
                </p>
                <p
                  className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                  style={{ fontFamily: "system-ui,sans-serif" }}
                >
                  Co-Founders · BioPeak
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
                  src="/Upforge-biopeak.webp"
                  alt="Rishi Pardal and Shiva Subramanian, Co-Founders of BioPeak — UpForge Founder Chronicle"
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
                    Rishi Pardal & Shiva Subramanian
                  </p>
                  <p
                    className="text-white/40 text-[9px] uppercase tracking-wide mt-0.5"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Co-Founders · BioPeak
                  </p>
                </div>
              </div>

              {/* Website + LinkedIn */}
              <div className="flex flex-col gap-2">
                <a
                  href="https://biopeak.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: `1.5px solid ${accent}`, textDecoration: "none" }}
                  aria-label="Visit BioPeak official website"
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
                      biopeak.com — Official Website
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" style={{ color: accent }} />
                </a>
                <a
                  href="https://www.linkedin.com/company/biopeak-health/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 transition-all hover:opacity-80"
                  style={{ border: "1.5px solid #0077b5", textDecoration: "none" }}
                  aria-label="View BioPeak on LinkedIn"
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
                      LinkedIn — BioPeak Health
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

              {/* Investors */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Key Investors
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {INVESTORS.map((inv, i) => (
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
                      {inv}
                    </p>
                  ))}
                </div>
              </div>

              {/* Scientific Advisors */}
              <div style={{ border: "1px solid #D8D2C4" }}>
                <div
                  className="px-4 py-2"
                  style={{ background: "#F9F7F2", borderBottom: "1px solid #D8D2C4" }}
                >
                  <p
                    className="text-[8px] font-black uppercase tracking-[0.24em] text-[#1A1208]"
                    style={{ fontFamily: "system-ui,sans-serif" }}
                  >
                    Scientific Advisory Board
                  </p>
                </div>
                <div className="px-4 py-3 space-y-1.5">
                  {ADVISORS.map((adv, i) => (
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
                      {adv}
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
            Explore More Health Tech Startups on UpForge
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { l: "Health Tech Startups India 2026", h: "/healthtech-startups-india" },
              { l: "Indian Unicorns Full List", h: "/indian-unicorns" },
              { l: "Longevity Startups India", h: "/longevity-startups-india" },
              { l: "Nikhil Kamath NKSquared Portfolio", h: "/nksquared-portfolio" },
              { l: "Women Health Tech India", h: "/women-health-tech-india" },
              { l: "Bengaluru Startups", h: "/bengaluru-startups" },
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
                Building India's next breakthrough company? Get verified on UpForge.
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
            * Data sourced from Entrepreneur India, Entrackr, StartupNews.fyi, Medical Buyer,
            Digital Health News, BW Wellbeing World, Digital Terminal, The Tribune, PitchBook,
            Crunchbase, ContactOut, and BioPeak press releases as of March 2026. UpForge is an
            independent registry — no paid placements, no sponsored rankings. Funding figures
            reflect latest available public data including press releases and media reports.
          </p>

          <nav aria-label="Footer navigation" className="mt-3">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                { l: "Health Tech India", h: "/healthtech-startups-india" },
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Unicorns", h: "/indian-unicorns" },
                { l: "Barsys Profile", h: "/startup/barsys" },
                { l: "Bolna Profile", h: "/startup/bolna" },
                { l: "Aurassure Profile", h: "/startup/aurassure" },
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
