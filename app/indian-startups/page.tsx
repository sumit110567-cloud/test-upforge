// app/indian-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Startups 2026: The Complete Guide to India's Startup Ecosystem | UpForge",
  description:
    "Everything you need to know about Indian startups in 2026 — the ecosystem overview, top companies by sector, funding trends, unicorn count, city-wise breakdown, and the founders reshaping India's economy. The most comprehensive Indian startup guide online.",
  keywords: [
    "Indian startups 2026",
    "India startup ecosystem",
    "best startups in India",
    "Indian startup companies list",
    "top Indian startups to watch 2026",
    "Indian startup funding 2026",
    "startup ecosystem India overview",
    "Indian founders 2026",
    "India startup hubs Bangalore Mumbai Delhi",
    "Indian startup news 2026",
    "how many startups in India 2026",
    "India third largest startup ecosystem",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/indian-startups" },
  openGraph: {
    title: "Indian Startups 2026: The Complete Guide to India's Startup Ecosystem",
    description:
      "India has 140,000+ startups, 111 unicorns, and the world's third-largest startup ecosystem. This is the complete guide — sectors, cities, founders, funding, and the stories behind India's most important companies.",
    url: "https://upforge.in/indian-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-indian-startups.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Startups 2026: Complete Ecosystem Guide | UpForge",
    description:
      "140,000+ startups. 111 unicorns. $340B+ in combined value. India's startup revolution — the definitive guide on UpForge.",
  },
};

/* ─────────────────────────────────────────────
   IMAGES
───────────────────────────────────────────── */
const IMGS = {
  hero:       "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=85&auto=format",
  bangalore:  "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=900&q=80&auto=format",
  mumbai:     "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=900&q=80&auto=format",
  delhi:      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900&q=80&auto=format",
  hyderabad:  "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=900&q=80&auto=format",
  fintech:    "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80&auto=format",
  edtech:     "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=80&auto=format",
  saas:       "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=900&q=80&auto=format",
  d2c:        "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900&q=80&auto=format",
  ai:         "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=900&q=80&auto=format",
  health:     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format",
  nithin:     "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=900&q=80&auto=format",
  deepinder:  "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=900&q=80&auto=format",
  falguni:    "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=900&q=80&auto=format",
  banner:     "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80&auto=format",
};

/* ─────────────────────────────────────────────
   TOP-LINE STATS
───────────────────────────────────────────── */
const MACRO_STATS = [
  { val: "140,000+", label: "Registered Startups in India" },
  { val: "111",      label: "Unicorns ($1B+ Companies)" },
  { val: "#3",       label: "World's Largest Startup Ecosystem" },
  { val: "$14B+",    label: "VC Funding in India (2024)" },
];

/* ─────────────────────────────────────────────
   SECTOR HUB CARDS
───────────────────────────────────────────── */
const SECTORS = [
  {
    name: "FinTech",
    count: "22 Unicorns",
    desc: "Payments, lending, wealth, insurance — India's most funded sector.",
    accent: "#B45309",
    bg: "#FEF3C7",
    img: IMGS.fintech,
    href: "/fintech-startups",
    examples: ["Zerodha", "Razorpay", "CRED", "PhonePe", "Groww"],
  },
  {
    name: "EdTech",
    count: "11 Unicorns",
    desc: "Online learning platforms disrupting India's ₹2L Cr education market.",
    accent: "#7C3AED",
    bg: "#F5F3FF",
    img: IMGS.edtech,
    href: "/edtech-startups",
    examples: ["PhysicsWallah", "Unacademy", "Vedantu", "Scaler", "Skill-Lync"],
  },
  {
    name: "SaaS",
    count: "14 Unicorns",
    desc: "Indian software built for global enterprises — from Chennai to San Francisco.",
    accent: "#059669",
    bg: "#ECFDF5",
    img: IMGS.saas,
    href: "/best-saas-startups",
    examples: ["Freshworks", "Chargebee", "Postman", "BrowserStack", "Zoho"],
  },
  {
    name: "D2C Brands",
    count: "800+ Funded",
    desc: "Consumer brands built for Indian tastes, at Indian prices, with global ambition.",
    accent: "#DB2777",
    bg: "#FDF2F8",
    img: IMGS.d2c,
    href: "/d2c-startups",
    examples: ["Mamaearth", "boAt", "Lenskart", "Sugar", "Wakefit"],
  },
  {
    name: "AI & Deep Tech",
    count: "7 Unicorns",
    desc: "Indic language models, drone AI, and enterprise automation — India's fastest growing sector.",
    accent: "#1D4ED8",
    bg: "#EFF6FF",
    img: IMGS.ai,
    href: "/top-ai-startups",
    examples: ["Krutrim", "Sarvam AI", "ideaForge", "Frugal AI", "Haptik"],
  },
  {
    name: "HealthTech",
    count: "9 Unicorns",
    desc: "Telemedicine, diagnostics, pharma delivery — democratising healthcare for 1.4 billion.",
    accent: "#0F766E",
    bg: "#F0FDFA",
    img: IMGS.health,
    href: "/startup?sector=healthtech",
    examples: ["Practo", "PharmEasy", "Pristyn Care", "MediBuddy", "1mg"],
  },
];

/* ─────────────────────────────────────────────
   CITY HUB
───────────────────────────────────────────── */
const CITIES = [
  {
    name: "Bengaluru",
    nickname: "India's Silicon Valley",
    startups: "15,000+",
    unicorns: "60+",
    known: "SaaS, FinTech, AI, E-Commerce",
    img: IMGS.bangalore,
    companies: ["Flipkart","Zerodha","Razorpay","Swiggy","Unacademy","Postman"],
  },
  {
    name: "Mumbai",
    nickname: "India's Financial Capital",
    startups: "12,000+",
    unicorns: "22+",
    known: "FinTech, D2C, Media, HealthTech",
    img: IMGS.mumbai,
    companies: ["Nykaa","BrowserStack","Zepto","Jupiter","Meesho"],
  },
  {
    name: "Delhi NCR",
    nickname: "India's Commerce Hub",
    startups: "11,000+",
    unicorns: "18+",
    known: "E-Commerce, D2C, EdTech, Logistics",
    img: IMGS.delhi,
    companies: ["Zomato","OYO","boAt","PhysicsWallah","Noise","Lenskart"],
  },
  {
    name: "Hyderabad",
    nickname: "HITEC City's Rising Ecosystem",
    startups: "6,000+",
    unicorns: "8+",
    known: "SaaS, HealthTech, AI, AgriTech",
    img: IMGS.hyderabad,
    companies: ["LeadSquared","Darwinbox","Zetwerk","Global-e"],
  },
];

/* ─────────────────────────────────────────────
   FEATURED FOUNDER SPOTLIGHTS
───────────────────────────────────────────── */
const FOUNDERS = [
  {
    name: "Nithin Kamath",
    company: "Zerodha",
    role: "Co-Founder & CEO",
    val: "$3.6B",
    city: "Bengaluru",
    sector: "FinTech",
    img: IMGS.nithin,
    slug: "zerodha",
    quote: "Bootstrapped India's largest stockbroker without a single rupee of VC funding — by making contrarian bets that turned out to be obvious in hindsight.",
    lesson: "Zero brokerage on delivery trades was not a gimmick. It was the product.",
    accentColor: "#B45309",
  },
  {
    name: "Deepinder Goyal",
    company: "Zomato",
    role: "Founder & CEO",
    val: "$17B",
    city: "Gurugram",
    sector: "Food & Quick Commerce",
    img: IMGS.deepinder,
    slug: "zomato",
    quote: "Started by photographing restaurant menus in his office and uploading them online. Ended up building India's most resilient consumer internet company.",
    lesson: "Zomato has been written off six times. Stubborn resilience is the only unfair advantage that can't be copied.",
    accentColor: "#DC2626",
  },
  {
    name: "Falguni Nayar",
    company: "Nykaa",
    role: "Founder & CEO",
    val: "$6.5B",
    city: "Mumbai",
    sector: "Beauty & D2C",
    img: IMGS.falguni,
    slug: "nykaa",
    quote: "Quit her investment banking career at 49 to start Nykaa — proving that entrepreneurship has no age limit and that the best founders often come with the sharpest industry insight.",
    lesson: "The best time to start a company is when you understand the customer better than the market does.",
    accentColor: "#DB2777",
  },
];

/* ─────────────────────────────────────────────
   FUNDING TIMELINE
───────────────────────────────────────────── */
const FUNDING_YEARS = [
  { year: "2015", amt: "$5.5B",  note: "E-Commerce & OTA dominate" },
  { year: "2017", amt: "$13.7B", note: "Paytm, Flipkart mega rounds" },
  { year: "2019", amt: "$14.5B", note: "SaaS & FinTech accelerate" },
  { year: "2021", amt: "$42B",   note: "Peak year — 44 new unicorns" },
  { year: "2022", amt: "$24B",   note: "Correction begins globally" },
  { year: "2023", amt: "$8.6B",  note: "Quality over quantity era" },
  { year: "2024", amt: "$14.2B", note: "Recovery — AI leads new cycle" },
  { year: "2025", amt: "$18B+",  note: "AI, D2C, quick commerce surge" },
];
const MAX_FUND = 42;

/* ─────────────────────────────────────────────
   WHY NOW CARDS
───────────────────────────────────────────── */
const WHY_NOW = [
  { icon: "📱", title: "850M+ Smartphone Users", body: "India's internet infrastructure is now world-class — 5G, cheap data, and a smartphone in nearly every adult hand." },
  { icon: "🏛️", title: "India Stack", body: "UPI, Aadhaar, DigiLocker, Account Aggregator — the government built the infrastructure layer that startups build products on top of." },
  { icon: "🧑‍💻", title: "Deepest Tech Talent Pool", body: "India produces more software engineers per year than any country on earth. The talent required to build world-class tech companies is local and abundant." },
  { icon: "💰", title: "Domestic Capital Growing", body: "Indian HNIs, family offices, and domestic VCs now deploy ₹10,000Cr+ annually — reducing dependence on US-dollar capital." },
  { icon: "🌍", title: "Global Ambition, Local Origin", body: "The Freshworks, Postman, and Zerodha generations proved Indian companies can compete globally. That proof point unlocks a new generation of ambition." },
  { icon: "📊", title: "Consumption-Led Growth", body: "India's middle class is adding 50M households per decade — the largest organic consumer market expansion happening anywhere on earth." },
];

/* ─────────────────────────────────────────────
   QUICK-ACCESS REGISTRY ROWS
───────────────────────────────────────────── */
const REGISTRY = [
  { name:"Flipkart",      sector:"E-Commerce",    city:"Bengaluru", stage:"Walmart-Owned",  slug:"flipkart"      },
  { name:"Zomato",        sector:"Food Delivery",  city:"Gurugram",  stage:"NSE Listed",     slug:"zomato"        },
  { name:"Razorpay",      sector:"FinTech",        city:"Bengaluru", stage:"Series F",       slug:"razorpay"      },
  { name:"CRED",          sector:"FinTech",        city:"Bengaluru", stage:"Series F",       slug:"cred"          },
  { name:"PhysicsWallah", sector:"EdTech",         city:"Noida",     stage:"Series B",       slug:"physicswallah" },
  { name:"Zerodha",       sector:"FinTech",        city:"Bengaluru", stage:"Bootstrapped",   slug:"zerodha"       },
  { name:"boAt",          sector:"Consumer Tech",  city:"New Delhi", stage:"Pre-IPO",        slug:"boat"          },
  { name:"Lenskart",      sector:"D2C Eyewear",    city:"New Delhi", stage:"Series J",       slug:"lenskart"      },
  { name:"Zepto",         sector:"Quick Commerce", city:"Mumbai",    stage:"Series F",       slug:"zepto"         },
  { name:"Mamaearth",     sector:"D2C Beauty",     city:"Gurugram",  stage:"NSE Listed",     slug:"mamaearth"     },
  { name:"Postman",       sector:"Dev Tools",      city:"Bengaluru", stage:"Series D",       slug:"postman"       },
  { name:"Krutrim",       sector:"AI / LLMs",      city:"Bengaluru", stage:"Series A",       slug:"krutrim"       },
  { name:"Chargebee",     sector:"SaaS",           city:"Chennai",   stage:"Series G",       slug:"chargebee"     },
  { name:"Groww",         sector:"WealthTech",     city:"Bengaluru", stage:"Series F",       slug:"groww"         },
  { name:"OYO",           sector:"HospTech",       city:"Gurugram",  stage:"Pre-IPO",        slug:"oyo"           },
  { name:"Meesho",        sector:"Social Commerce",city:"Bengaluru", stage:"Series F",       slug:"meesho"        },
  { name:"BrowserStack",  sector:"QA / DevOps",    city:"Mumbai",    stage:"Series B",       slug:"browserstack"  },
  { name:"Swiggy",        sector:"Food Delivery",  city:"Bengaluru", stage:"NSE Listed",     slug:"swiggy"        },
  { name:"Unacademy",     sector:"EdTech",         city:"Bengaluru", stage:"Series J",       slug:"unacademy"     },
  { name:"Sarvam AI",     sector:"AI / Voice",     city:"Bengaluru", stage:"Series A",       slug:"sarvam-ai"     },
];

export default function IndianStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        .pf  { font-family:'Playfair Display',Georgia,serif !important; }
        .rp  { font-family:'Georgia','Times New Roman',serif; }
        .sf  { font-family:system-ui,-apple-system,sans-serif; }

        :root {
          --parch:  #F5F1E8;
          --parch2: #EDE9DF;
          --parch3: #E6E1D6;
          --ink:    #1A1208;
          --ink2:   #2C2010;
          --ink3:   #5A4A30;
          --ink4:   #8C7D65;
          --ink5:   #BBB0A0;
          --rule:   #C8C2B4;
          --rule2:  #D8D2C4;
          --gold:   #B45309;
          --gold2:  #D97706;
          --gold3:  #92400E;
          --white:  #FDFCF9;
        }

        body { background:var(--parch); }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(16px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes barRise {
          from { height:0; }
          to   { height:var(--h); }
        }
        @keyframes barGrow {
          from { width:0; }
          to   { width:var(--w); }
        }
        @keyframes pulse {
          0%,100% { opacity:1; }
          50%     { opacity:.55; }
        }

        .a0 { animation:fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .44s .16s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation:fadeUp .44s .24s cubic-bezier(.16,1,.3,1) both; }

        /* ── image frame ── */
        .imgf { position:relative; overflow:hidden; }
        .imgf img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(12%) contrast(108%);
          transition:transform .6s ease;
        }
        .imgf:hover img { transform:scale(1.04); }

        /* ── hero live badge ── */
        .live-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:rgba(255,255,255,.12);
          border:1px solid rgba(255,255,255,.2);
          padding:5px 12px;
        }
        .live-dot {
          width:6px; height:6px; border-radius:50%;
          background:#4ADE80;
          animation:pulse 1.8s ease infinite;
        }

        /* ── section header ── */
        .sh { display:flex; align-items:center; gap:10px; }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.28em; color:var(--ink5); font-family:system-ui; white-space:nowrap; }
        .sh-r { flex:1; height:1px; background:var(--rule2); }

        /* ── stat box ── */
        .stat-box {
          border:1.5px solid var(--ink); background:var(--white);
          padding:22px 18px; text-align:center;
          position:relative; overflow:hidden;
          transition:transform .15s,box-shadow .15s;
        }
        .stat-box:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 var(--ink); }
        .stat-box::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547);
          background-size:200% auto;
          animation:shimmer 3s linear infinite;
        }

        /* ── sector hub card ── */
        .sector-card {
          border:1.5px solid var(--ink); background:var(--white);
          overflow:hidden; position:relative;
          transition:transform .15s,box-shadow .15s;
          text-decoration:none; color:inherit;
          display:flex; flex-direction:column;
        }
        .sector-card:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 var(--ink); }
        .sector-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          transition:background .15s;
        }

        /* ── city card ── */
        .city-card {
          border:1.5px solid var(--ink); background:var(--white);
          overflow:hidden; position:relative;
          transition:transform .15s,box-shadow .15s;
        }
        .city-card:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 var(--ink); }

        /* ── founder card ── */
        .founder-card {
          border:1.5px solid var(--ink); background:var(--white);
          overflow:hidden; position:relative;
          transition:transform .15s,box-shadow .15s;
        }
        .founder-card:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 var(--ink); }

        /* ── why now card ── */
        .why-card {
          border:1.5px solid var(--rule2); background:var(--white);
          padding:20px 18px;
          transition:transform .15s,box-shadow .15s;
        }
        .why-card:hover { transform:translate(-2px,-2px); box-shadow:3px 3px 0 var(--ink); border-color:var(--ink); }

        /* ── bar chart ── */
        .bar-col { display:flex; flex-direction:column; align-items:center; gap:6px; flex:1; }
        .bar-col-fill {
          width:100%; background:var(--gold2);
          animation:barRise 1.2s cubic-bezier(.16,1,.3,1) .4s both;
          position:relative;
        }
        .bar-col-fill.peak { background:linear-gradient(to top,var(--gold3),#E8C547); }

        /* ── registry table ── */
        .reg-row {
          display:grid;
          grid-template-columns:1fr 130px 110px 120px;
          align-items:center;
          padding:9px 14px;
          border-bottom:1px solid var(--rule2);
          background:var(--white);
          transition:background .1s;
          text-decoration:none; color:inherit;
        }
        .reg-row:hover { background:var(--parch2); }
        .reg-row.hdr { background:var(--ink); color:white; }

        /* ── tags ── */
        .tag {
          display:inline-block; padding:2px 8px;
          border:1px solid rgba(180,83,9,.28); background:#FEF3C7;
          font-size:7.5px; font-weight:700; text-transform:uppercase;
          letter-spacing:.12em; color:var(--gold3); font-family:system-ui;
        }

        /* ── pull quote ── */
        .pull-quote {
          background:var(--ink); border-left:4px solid var(--gold2);
          padding:16px 20px; margin-top:14px;
        }

        @media (max-width:1024px) {
          .sector-grid { grid-template-columns:repeat(3,1fr) !important; }
        }
        @media (max-width:900px) {
          .sector-grid  { grid-template-columns:repeat(2,1fr) !important; }
          .city-grid    { grid-template-columns:repeat(2,1fr) !important; }
          .stat-grid    { grid-template-columns:repeat(2,1fr) !important; }
          .founder-grid { grid-template-columns:1fr !important; }
          .why-grid     { grid-template-columns:repeat(2,1fr) !important; }
          .reg-row      { grid-template-columns:1fr 110px !important; }
          .reg-hide     { display:none !important; }
        }
        @media (max-width:600px) {
          .sector-grid { grid-template-columns:1fr !important; }
          .city-grid   { grid-template-columns:1fr !important; }
          .stat-grid   { grid-template-columns:1fr !important; }
          .why-grid    { grid-template-columns:1fr !important; }
        }
      `}</style>

      <main
        itemScope
        itemType="https://schema.org/CollectionPage"
        style={{ minHeight:"100vh", background:"var(--parch)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"CollectionPage",
            name:"Indian Startups 2026: Complete Ecosystem Guide",
            description:"The most comprehensive guide to India's startup ecosystem — sectors, cities, unicorns, founders, funding trends, and the companies reshaping India's economy.",
            url:"https://upforge.in/indian-startups",
            publisher:{ "@type":"Organization", name:"UpForge", url:"https://upforge.in" },
            dateModified:new Date().toISOString().split("T")[0],
            about:{ "@type":"Thing", name:"Indian Startup Ecosystem" },
            keywords:"Indian startups 2026, India startup ecosystem, Indian unicorns, top startups India",
          })}}
        />

        {/* ══ BREADCRUMB ══ */}
        <nav className="sf a0" style={{ background:"var(--parch2)", borderBottom:"1px solid var(--rule2)", padding:"8px 0" }}>
          <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", listStyle:"none", margin:0, padding:0 }}>
              <li><Link href="/" style={{ color:"var(--ink5)", textDecoration:"none" }}>UpForge</Link></li>
              <li style={{ color:"var(--rule)" }}>/</li>
              <li style={{ color:"var(--ink4)", fontWeight:700 }}>Indian Startups 2026</li>
            </ol>
          </div>
        </nav>

        {/* ══ HERO ══ */}
        <div className="a0" style={{ borderBottom:"3px solid var(--ink)" }}>
          <div className="imgf" style={{ height:"clamp(300px,42vw,540px)" }}>
            <img src={IMGS.hero} alt="Indian Startups 2026 — Complete Ecosystem Guide" />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(160deg,rgba(26,18,8,.3) 0%,rgba(26,18,8,.92) 100%)" }} />

            <div style={{
              position:"absolute", inset:0,
              display:"flex", flexDirection:"column",
              alignItems:"center", justifyContent:"center",
              padding:"0 clamp(16px,5vw,72px)", textAlign:"center",
            }}>
              {/* Live badge */}
              <div className="live-badge sf" style={{ marginBottom:20, fontSize:8, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.7)" }}>
                <div className="live-dot" />
                Live Registry · Updated {new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"})}
              </div>

              {/* Category tags */}
              <div style={{ display:"flex", gap:8, marginBottom:20, flexWrap:"wrap", justifyContent:"center" }}>
                {["Ecosystem Guide","111 Unicorns","140,000+ Startups","FinTech · EdTech · SaaS · AI · D2C"].map(t=>(
                  <span key={t} className="sf" style={{ fontSize:8, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,0.6)", border:"1px solid rgba(255,255,255,0.18)", padding:"3px 10px" }}>{t}</span>
                ))}
              </div>

              <h1 className="pf" itemProp="name" style={{
                fontSize:"clamp(2rem,6vw,4.8rem)",
                fontWeight:900, lineHeight:.98,
                color:"white", letterSpacing:"-0.03em",
                marginBottom:20, maxWidth:920,
              }}>
                Indian Startups 2026:{" "}
                <em style={{ color:"#E8C547", fontStyle:"italic" }}>The Definitive Guide to India's Startup Ecosystem</em>
              </h1>

              <p className="rp" style={{
                fontSize:"clamp(13px,1.9vw,17px)",
                color:"rgba(255,255,255,0.6)", fontStyle:"italic",
                maxWidth:600, lineHeight:1.65,
              }}>
                From a bootstrapped stockbroker in Bengaluru to 44 unicorns in a single year — everything you need to understand the most exciting startup story on earth.
              </p>
            </div>

            <div className="sf" style={{ position:"absolute", top:18, right:18, background:"rgba(26,18,8,.7)", border:"1px solid rgba(255,255,255,.1)", padding:"5px 12px", fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,.55)" }}>
              UpForge · Ecosystem Intelligence
            </div>
          </div>

          {/* Meta strip */}
          <div style={{ background:"var(--ink)" }}>
            <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center" }}>
                {[
                  { l:"Registry Updated",  v:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}) },
                  { l:"Total Startups",    v:"140,000+ Registered" },
                  { l:"Unicorns",          v:"111 Companies" },
                  { l:"Combined Value",    v:"$340B+" },
                  { l:"Ecosystem Rank",    v:"#3 Globally" },
                ].map((m,i)=>(
                  <div key={i} style={{ padding:"12px 18px", borderRight:"1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize:7, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"rgba(255,255,255,.28)", marginBottom:3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize:11, color:"rgba(255,255,255,.6)", fontWeight:700 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN CONTENT ══ */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px) clamp(56px,8vw,100px)" }}>

          {/* ── INTRO + TOC ── */}
          <div className="a1" style={{
            display:"grid", gridTemplateColumns:"1fr 260px",
            gap:0, borderBottom:"1px solid var(--rule2)", alignItems:"start",
          }}>
            <div style={{ padding:"clamp(28px,4vw,52px) clamp(16px,3vw,40px) clamp(28px,4vw,52px) 0", borderRight:"1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom:20 }}>
                <span className="sh-l">India's Startup Story</span>
                <div className="sh-r" />
              </div>
              <p className="pf" itemProp="description" style={{ fontSize:"clamp(1.05rem,2.2vw,1.38rem)", fontWeight:400, lineHeight:1.72, color:"var(--ink)", marginBottom:18, maxWidth:720 }}>
                India became the world's third-largest startup ecosystem in under a decade. It happened not because of government policy, not because of a single investor, and not because of one industry. It happened because an entire generation of smart, ambitious Indians looked at broken markets — stock broking, food delivery, education, eyewear, credit cards — and decided to fix them.
              </p>
              <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.88, maxWidth:680, marginBottom:16 }}>
                This is UpForge's master guide to the Indian startup ecosystem in 2026 — covering every sector, every major startup hub, the founders who built the most important companies, and the structural forces that make India the most compelling startup market on earth right now.
              </p>
              <p className="rp" style={{ fontSize:13, color:"var(--ink4)", lineHeight:1.85, maxWidth:680, fontStyle:"italic" }}>
                Whether you're a founder, investor, researcher, or simply someone trying to understand what is happening to the Indian economy — this is the guide you need.
              </p>
            </div>

            {/* TOC */}
            <div style={{ padding:"clamp(24px,3vw,44px) 0 clamp(24px,3vw,44px) clamp(16px,3vw,32px)" }}>
              <div className="sh" style={{ marginBottom:16 }}>
                <span className="sh-l">In This Guide</span>
                <div className="sh-r" />
              </div>
              {[
                { label:"Ecosystem at a Glance",   anchor:"#stats"    },
                { label:"Startup Sectors",          anchor:"#sectors"  },
                { label:"India Startup Hubs",       anchor:"#cities"   },
                { label:"Funding Timeline",         anchor:"#funding"  },
                { label:"Featured Founders",        anchor:"#founders" },
                { label:"Why India, Why Now",       anchor:"#why"      },
                { label:"Quick Registry (20)",      anchor:"#registry" },
                { label:"Indian Unicorns List",     anchor:"/indian-unicorns" },
              ].map((item,i)=>(
                <a key={i} href={item.anchor} style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:10, textDecoration:"none" }}>
                  <span className="sf" style={{ fontSize:8, fontWeight:800, color:"var(--gold2)", flexShrink:0, minWidth:16 }}>
                    {String(i+1).padStart(2,"0")}
                  </span>
                  <span className="rp" style={{ fontSize:11.5, color:"var(--ink4)", lineHeight:1.4 }}>{item.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* ── MACRO STATS ── */}
          <div id="stats" className="a2" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:20 }}>
              <span className="sh-l">Ecosystem at a Glance · 2026</span>
              <div className="sh-r" />
            </div>
            <div className="stat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
              {MACRO_STATS.map((s,i)=>(
                <div key={i} className="stat-box">
                  <p className="pf" style={{ fontSize:"clamp(1.5rem,2.8vw,2.3rem)", fontWeight:900, color:"var(--ink)", marginBottom:8, lineHeight:1 }}>{s.val}</p>
                  <p className="sf" style={{ fontSize:9.5, color:"var(--ink4)", lineHeight:1.55, textTransform:"uppercase", letterSpacing:"0.1em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── SECTOR HUBS ── */}
          <div id="sectors" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">Startup Sectors · Explore by Industry</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:22, fontStyle:"italic" }}>
              Every major sector of India's startup economy — click to explore full rankings, profiles, and founder stories.
            </p>

            <div className="sector-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
              {SECTORS.map((sec,i)=>(
                <Link key={i} href={sec.href} className="sector-card" style={{ "--accent-col":sec.accent } as React.CSSProperties}>
                  <style>{`.sector-card:nth-child(${i+1})::before{background:${sec.accent};}`}</style>

                  {/* Sector image */}
                  <div className="imgf" style={{ height:140 }}>
                    <img src={sec.img} alt={sec.name} />
                    <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom,rgba(26,18,8,0) 40%,rgba(26,18,8,.75) 100%)` }} />
                    <div style={{ position:"absolute", bottom:12, left:14, right:14 }}>
                      <p className="sf" style={{ fontSize:9, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.14em", color:sec.accent === "#B45309" ? "#FCD34D" : "rgba(255,255,255,.85)", marginBottom:2 }}>{sec.count}</p>
                    </div>
                  </div>

                  <div style={{ padding:"14px 16px 18px", flex:1, display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <div>
                      <h2 className="pf" style={{ fontSize:"1.1rem", fontWeight:700, color:"var(--ink)", marginBottom:6, lineHeight:1.1 }}>{sec.name}</h2>
                      <p className="rp" style={{ fontSize:12, color:"var(--ink4)", lineHeight:1.65, marginBottom:12 }}>{sec.desc}</p>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                        {sec.examples.map(e=>(
                          <span key={e} className="sf" style={{ fontSize:8, color:"var(--ink5)", background:"var(--parch2)", border:"1px solid var(--rule2)", padding:"1px 6px", fontWeight:600 }}>{e}</span>
                        ))}
                      </div>
                    </div>
                    <div style={{ marginTop:14, display:"flex", alignItems:"center", gap:6 }}>
                      <span className="sf" style={{ fontSize:8.5, fontWeight:800, color:sec.accent, textTransform:"uppercase", letterSpacing:"0.12em" }}>
                        Explore {sec.name} →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CITY HUBS ── */}
          <div id="cities" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">India Startup Hubs · City-by-City</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:22, fontStyle:"italic" }}>
              India's startup geography — four cities that account for 80%+ of all venture capital deployed.
            </p>

            <div className="city-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:14 }}>
              {CITIES.map((city,i)=>(
                <div key={i} className="city-card">
                  <div className="imgf" style={{ height:160 }}>
                    <img src={city.img} alt={city.name} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(26,18,8,.1) 0%,rgba(26,18,8,.8) 100%)" }} />
                    <div style={{ position:"absolute", bottom:12, left:12, right:12 }}>
                      <h2 className="pf" style={{ fontSize:"1.15rem", fontWeight:900, color:"white", lineHeight:1.1, marginBottom:2 }}>{city.name}</h2>
                      <p className="sf" style={{ fontSize:8, color:"rgba(255,255,255,.55)", textTransform:"uppercase", letterSpacing:"0.14em", fontWeight:600 }}>{city.nickname}</p>
                    </div>
                  </div>
                  <div style={{ padding:"14px" }}>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8, marginBottom:12 }}>
                      <div>
                        <p className="sf" style={{ fontSize:7.5, textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--ink5)", marginBottom:2 }}>Startups</p>
                        <p className="sf" style={{ fontSize:13, fontWeight:800, color:"var(--ink)" }}>{city.startups}</p>
                      </div>
                      <div>
                        <p className="sf" style={{ fontSize:7.5, textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--ink5)", marginBottom:2 }}>Unicorns</p>
                        <p className="sf" style={{ fontSize:13, fontWeight:800, color:"var(--gold2)" }}>{city.unicorns}</p>
                      </div>
                    </div>
                    <p className="sf" style={{ fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:8, fontWeight:600 }}>Known For</p>
                    <p className="rp" style={{ fontSize:11.5, color:"var(--ink4)", lineHeight:1.55, marginBottom:10 }}>{city.known}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:4 }}>
                      {city.companies.slice(0,4).map(c=>(
                        <span key={c} className="sf" style={{ fontSize:7.5, color:"var(--ink5)", background:"var(--parch2)", border:"1px solid var(--rule2)", padding:"1px 5px" }}>{c}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── FUNDING TIMELINE BAR CHART ── */}
          <div id="funding" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">India Startup Funding · 2015 → 2025</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:28, fontStyle:"italic" }}>
              Annual venture capital deployed in Indian startups — from the first wave to the AI-led recovery.
            </p>

            {/* Bar chart */}
            <div style={{ border:"1.5px solid var(--ink)", background:"var(--white)", padding:"28px 24px 20px" }}>
              <div style={{ display:"flex", alignItems:"flex-end", gap:clamp("6px","1.2vw","14px"), height:200, marginBottom:12 }}>
                {FUNDING_YEARS.map((y,i)=>{
                  const pct = Math.round((parseFloat(y.amt)/MAX_FUND)*100);
                  const isPeak = y.year === "2021";
                  return (
                    <div key={i} className="bar-col">
                      <div
                        className={`bar-col-fill${isPeak?" peak":""}`}
                        style={{ "--h":`${pct*2}px`, height:`${pct*2}px` } as React.CSSProperties}
                        title={`${y.year}: ${y.amt}`}
                      />
                    </div>
                  );
                })}
              </div>
              {/* X-axis labels */}
              <div style={{ display:"flex", gap:clamp("6px","1.2vw","14px") }}>
                {FUNDING_YEARS.map((y,i)=>(
                  <div key={i} style={{ flex:1, textAlign:"center" }}>
                    <p className="sf" style={{ fontSize:8.5, fontWeight:y.year==="2021"?800:600, color:y.year==="2021"?"var(--gold2)":"var(--ink5)", marginBottom:2 }}>{y.year}</p>
                    <p className="sf" style={{ fontSize:8, color:y.year==="2021"?"var(--gold2)":"var(--ink4)", fontWeight:700 }}>{y.amt}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop:14, paddingTop:12, borderTop:"1px solid var(--rule2)" }}>
                {FUNDING_YEARS.map((y,i)=>(
                  <div key={i} style={{ display:"flex", gap:8, marginBottom:4, flexWrap:"wrap" }}>
                    <span className="sf" style={{ fontSize:8.5, fontWeight:700, color:"var(--gold2)", minWidth:32 }}>{y.year}</span>
                    <span className="rp" style={{ fontSize:11.5, color:"var(--ink4)", fontStyle:"italic" }}>{y.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── FEATURED FOUNDERS ── */}
          <div id="founders" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">Featured Founders · Three Stories That Define Indian Startups</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:22, fontStyle:"italic" }}>
              Three founders. Three radically different companies. One common thread: they all bet on India before India believed in itself.
            </p>

            <div className="founder-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }}>
              {FOUNDERS.map((f,i)=>(
                <div key={i} className="founder-card" style={{ position:"relative" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:`linear-gradient(90deg,${f.accentColor},${f.accentColor}99)` }} />

                  <div className="imgf" style={{ height:200 }}>
                    <img src={f.img} alt={f.company} />
                    <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(26,18,8,0) 30%,rgba(26,18,8,.85) 100%)" }} />
                    <div style={{ position:"absolute", bottom:14, left:14, right:14 }}>
                      <p className="pf" style={{ fontSize:"1.25rem", fontWeight:900, color:"white", lineHeight:1.1, marginBottom:3 }}>{f.name}</p>
                      <p className="sf" style={{ fontSize:8, color:"rgba(255,255,255,.55)", textTransform:"uppercase", letterSpacing:"0.16em", fontWeight:700 }}>{f.role} · {f.company}</p>
                    </div>
                  </div>

                  <div style={{ padding:"16px" }}>
                    <div style={{ display:"flex", gap:12, marginBottom:12 }}>
                      <div>
                        <p className="sf" style={{ fontSize:7.5, textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--ink5)", marginBottom:2 }}>Valuation</p>
                        <p className="sf" style={{ fontSize:13, fontWeight:800, color:f.accentColor }}>{f.val}</p>
                      </div>
                      <div>
                        <p className="sf" style={{ fontSize:7.5, textTransform:"uppercase", letterSpacing:"0.12em", color:"var(--ink5)", marginBottom:2 }}>Sector</p>
                        <p className="sf" style={{ fontSize:11, fontWeight:700, color:"var(--ink)" }}>{f.sector}</p>
                      </div>
                    </div>

                    <p className="rp" style={{ fontSize:12.5, color:"var(--ink3)", lineHeight:1.75, marginBottom:0 }}>{f.quote}</p>

                    <div className="pull-quote">
                      <p className="rp" style={{ fontSize:11.5, color:"rgba(255,255,255,.75)", fontStyle:"italic", lineHeight:1.65 }}>{f.lesson}</p>
                    </div>

                    <Link href={`/startup/${f.slug}`} style={{ display:"inline-flex", marginTop:14, alignItems:"center", gap:6, fontSize:8.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", color:f.accentColor, textDecoration:"none", fontFamily:"system-ui" }}>
                      Read Full Story →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── WHY INDIA WHY NOW ── */}
          <div id="why" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">Why India. Why Now. · 6 Structural Forces</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:22, fontStyle:"italic" }}>
              India's startup boom is not a cyclical phenomenon. It is driven by structural forces that took two decades to converge — and will take decades more to fully play out.
            </p>
            <div className="why-grid" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:12 }}>
              {WHY_NOW.map((w,i)=>(
                <div key={i} className="why-card">
                  <div style={{ fontSize:"1.8rem", marginBottom:10 }}>{w.icon}</div>
                  <h3 className="sf" style={{ fontSize:11, fontWeight:800, color:"var(--ink)", marginBottom:8, textTransform:"uppercase", letterSpacing:"0.08em" }}>{w.title}</h3>
                  <p className="rp" style={{ fontSize:12.5, color:"var(--ink4)", lineHeight:1.72 }}>{w.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── QUICK REGISTRY ── */}
          <div id="registry" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:8 }}>
              <span className="sh-l">Quick Registry · 20 Companies to Know</span>
              <div className="sh-r" />
            </div>
            <p className="rp" style={{ fontSize:13, color:"var(--ink4)", marginBottom:18, fontStyle:"italic" }}>
              The 20 Indian startups that every founder, investor, and analyst should understand. Click any row for the full story.
            </p>

            <div style={{ border:"1.5px solid var(--ink)", overflow:"hidden" }}>
              <div className="reg-row hdr">
                <span className="sf" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Company</span>
                <span className="sf reg-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Sector</span>
                <span className="sf reg-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>City</span>
                <span className="sf" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Stage</span>
              </div>
              {REGISTRY.map((r,i)=>(
                <Link key={i} href={`/startup/${r.slug}`} className="reg-row">
                  <span className="sf" style={{ fontSize:12, fontWeight:800, color:"var(--ink)" }}>{r.name}</span>
                  <span className="sf reg-hide" style={{ fontSize:10, color:"var(--ink4)", fontWeight:600 }}>{r.sector}</span>
                  <span className="sf reg-hide" style={{ fontSize:10, color:"var(--ink5)" }}>{r.city}</span>
                  <span className="sf" style={{ fontSize:9.5, color:"var(--gold2)", fontWeight:700 }}>{r.stage}</span>
                </Link>
              ))}
              <div style={{ background:"var(--parch2)", padding:"12px 14px", borderTop:"1px solid var(--rule2)", textAlign:"center" }}>
                <Link href="/startup" className="sf" style={{ fontSize:9, fontWeight:700, color:"var(--gold2)", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none" }}>
                  Browse All 140,000+ Startups in the Full Registry →
                </Link>
              </div>
            </div>
          </div>

          {/* ── RELATED PAGES ── */}
          <div style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:20 }}>
              <span className="sh-l">Explore by Sector · Deep Dive Pages</span>
              <div className="sh-r" />
            </div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", border:"1.5px solid var(--ink)", background:"var(--ink)", gap:1.5 }}>
              {[
                { l:"Top AI Startups",     h:"/top-ai-startups",    tag:"3,200+ AI Companies" },
                { l:"Best SaaS Startups",  h:"/best-saas-startups", tag:"$50B by 2030"        },
                { l:"EdTech Startups",     h:"/edtech-startups",    tag:"250M Students"       },
                { l:"FinTech Startups",    h:"/fintech-startups",   tag:"22 Unicorns"         },
                { l:"D2C Startups",        h:"/d2c-startups",       tag:"800+ Funded Brands"  },
                { l:"Indian Unicorns",     h:"/indian-unicorns",    tag:"111 Companies"       },
              ].map((p,i)=>(
                <Link key={i} href={p.h} style={{
                  display:"flex", flexDirection:"column", justifyContent:"space-between",
                  background:"var(--white)", textDecoration:"none",
                  padding:"18px 16px 16px",
                  transition:"transform .15s,box-shadow .15s",
                  borderBottom:"none",
                  position:"relative",
                }}>
                  <style>{`a:nth-child(${i+1}):hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink);z-index:1;}`}</style>
                  <div>
                    <p className="sf" style={{ fontSize:8.5, fontWeight:700, color:"var(--gold2)", textTransform:"uppercase", letterSpacing:"0.14em", marginBottom:6 }}>{p.tag}</p>
                    <h3 className="pf" style={{ fontSize:"1rem", fontWeight:700, color:"var(--ink)", lineHeight:1.2, marginBottom:10 }}>{p.l}</h3>
                  </div>
                  <span className="sf" style={{ fontSize:8.5, fontWeight:700, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.1em" }}>
                    Explore →
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ── CLOSING BANNER ── */}
          <div style={{ marginTop:"clamp(36px,6vw,64px)", border:"1.5px solid var(--ink)", background:"var(--ink)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:4, background:"linear-gradient(90deg,var(--gold3),var(--gold),var(--gold2),#E8C547,#FCD34D,#E8C547,var(--gold2),var(--gold3))", backgroundSize:"200% auto", animation:"shimmer 4s linear infinite" }} />
            <div className="imgf" style={{ height:220 }}>
              <img src={IMGS.banner} alt="India startup ecosystem" style={{ filter:"sepia(40%) brightness(0.28) contrast(1.15)" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 clamp(20px,5vw,72px)", textAlign:"center", gap:16 }}>
                <p className="pf" style={{ fontSize:"clamp(1.3rem,3.2vw,2.4rem)", fontWeight:900, color:"white", lineHeight:1.15, fontStyle:"italic", maxWidth:780 }}>
                  "The Indian startup story is not about the companies that were built.{" "}
                  <em style={{ color:"#E8C547" }}>It is about the ones being built right now — by someone who has not been on this page yet.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding:"clamp(20px,3vw,40px)", borderTop:"1px solid rgba(255,255,255,.08)" }}>
              <div style={{ display:"flex", flexWrap:"wrap", gap:20, alignItems:"center", justifyContent:"space-between" }}>
                <p className="rp" style={{ fontSize:13.5, color:"rgba(255,255,255,.65)", lineHeight:1.85, maxWidth:680 }}>
                  UpForge tracks every significant startup in India — from seed-stage companies to NASDAQ-listed giants. Our registry is updated continuously, our founder stories are written with depth, and our mission is simple: help India's builders understand the ecosystem they are a part of.
                </p>
                <div style={{ display:"flex", gap:12, flexWrap:"wrap" }}>
                  <Link href="/startup" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"var(--gold2)", color:"var(--ink)", padding:"11px 22px", textDecoration:"none", fontSize:10, fontWeight:800, textTransform:"uppercase", letterSpacing:"0.16em", fontFamily:"system-ui" }}>
                    Browse All Startups →
                  </Link>
                  <Link href="/submit" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"rgba(255,255,255,.7)", border:"1px solid rgba(255,255,255,.25)", padding:"11px 22px", textDecoration:"none", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.16em", fontFamily:"system-ui" }}>
                    Submit Your Startup
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ── FOOTER NAV ── */}
          <nav aria-label="Ecosystem navigation" style={{ padding:"18px 0", borderTop:"2px solid var(--ink)", marginTop:"clamp(32px,5vw,52px)" }}>
            <ul style={{ display:"flex", flexWrap:"wrap", gap:"10px 24px", listStyle:"none", margin:0, padding:0 }}>
              {[
                { l:"Top AI Startups",     h:"/top-ai-startups"    },
                { l:"Best SaaS Startups",  h:"/best-saas-startups" },
                { l:"EdTech Startups",     h:"/edtech-startups"    },
                { l:"FinTech Startups",    h:"/fintech-startups"   },
                { l:"D2C Startups",        h:"/d2c-startups"       },
                { l:"Indian Unicorns",     h:"/indian-unicorns"    },
                { l:"Startup Registry",    h:"/startup"            },
                { l:"Indian Unicorns 2026",h:"/indian-unicorns"    },
                { l:"Submit Startup",      h:"/submit"             },
                { l:"Valuation Tool",      h:"/valuation"          },
                { l:"Blog",               h:"/blog"               },
              ].map(lnk=>(
                <li key={lnk.h}><Link href={lnk.h} className="sf" style={{ fontSize:8.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none" }}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>

        </div>
      </main>
    </>
  );
}

/* tiny helper so clamp() works inside JS strings */
function clamp(min:string,val:string,max:string){ return `clamp(${min},${val},${max})`; }
