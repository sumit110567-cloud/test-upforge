// app/iit-madras-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top IIT Madras Startups 2026: From Research Park to $1B+ Valuations | UpForge",
  description:
    "The definitive guide to India's top IIT Madras startups in 2026 — Detect Technologies, Haber, Planys Technologies, Saama Technologies, Mad Street Den and more. Deep tech, AI, robotics, biotech from India's #1 innovation campus. Funding, founders, and the IITM story. Updated March 2026.",
  keywords: [
    "top IIT Madras startups 2026",
    "IITM startups India",
    "IIT Madras Research Park startups",
    "Detect Technologies IIT Madras",
    "Haber startup IIT Madras",
    "Planys Technologies IIT Madras",
    "Mad Street Den IIT Madras",
    "IITM incubation cell startups",
    "IIT Madras deep tech startups",
    "IITM Chennai startups 2026",
    "India best engineering college startups",
    "IIT Madras Research Park companies",
    "Chennai deep tech startup hub",
    "IITM alumni startups funding",
    "IIT Madras entrepreneurship",
    "India IIT startup ecosystem",
    "IITM biotech AI robotics startups",
    "IIT Madras unicorn startups",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/iit-madras-startups" },
  openGraph: {
    title: "Top IIT Madras Startups 2026: From Research Park to $1B+ Valuations",
    description:
      "Detect Technologies, Haber, Planys, Mad Street Den — IITM's finest startups profiled. Funding, founders, and what each company is actually building. Updated March 2026.",
    url: "https://upforge.in/iit-madras-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-iitm.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top IIT Madras Startups 2026 | UpForge",
    description:
      "IIT Madras startups — Detect Technologies, Haber, Planys, Mad Street Den. Deep tech, AI, robotics from India's #1 innovation campus.",
  },
};

const IMGS = {
  hero:    "https://images.unsplash.com/photo-1562774053-701939374585?w=1600&q=85&auto=format",
  detect:  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80&auto=format",
  haber:   "https://images.unsplash.com/photo-1628348070889-cb656235b4eb?w=600&q=80&auto=format",
  planys:  "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80&auto=format",
  mad:     "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=600&q=80&auto=format",
  shatam:  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format",
  banner:  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=80&auto=format",
};

const REGISTRY = [
  { rank:1,  name:"Detect Technologies",   founded:2016, sector:"Industrial AI · Computer Vision",   funding:"$26M",   stage:"Series B",  city:"Chennai", slug:"detect-technologies" },
  { rank:2,  name:"Haber",                 founded:2017, sector:"Water & Process Intelligence AI",   funding:"$44M",   stage:"Series C",  city:"Chennai", slug:"haber" },
  { rank:3,  name:"Planys Technologies",   founded:2015, sector:"Subsea Robotics & Inspection",      funding:"$8M",    stage:"Series A",  city:"Chennai", slug:"planys-technologies" },
  { rank:4,  name:"Mad Street Den",        founded:2013, sector:"AI Retail & Visual Commerce",       funding:"$30M",   stage:"Series C",  city:"Chennai", slug:"mad-street-den" },
  { rank:5,  name:"Shatam Infra",          founded:2018, sector:"AI Infrastructure & Smart City",   funding:"$5.2M",  stage:"Series A",  city:"Chennai", slug:"shatam-infra" },
  { rank:6,  name:"Ossus Biorenewables",   founded:2019, sector:"Synthetic Biology · Biomaterials", funding:"$2.1M",  stage:"Seed",      city:"Chennai", slug:"ossus-biorenewables" },
  { rank:7,  name:"Safeducate",            founded:2010, sector:"Skill Dev & EdTech Platform",      funding:"$8M",    stage:"Series A",  city:"Noida",   slug:"safeducate" },
  { rank:8,  name:"AgniKul Cosmos",        founded:2017, sector:"Rocket Manufacturing",             funding:"$85.8M", stage:"Series B",  city:"Chennai", slug:"agnikul-cosmos" },
  { rank:9,  name:"Turno",                 founded:2021, sector:"EV Commercial Vehicles",           funding:"$17M",   stage:"Series A",  city:"Bengaluru",slug:"turno" },
  { rank:10, name:"OneCell Diagnostics",   founded:2019, sector:"Liquid Biopsy · Cancer Dx",       funding:"$3.5M",  stage:"Seed+",     city:"Chennai", slug:"onecell-diagnostics" },
  { rank:11, name:"SciRio",               founded:2020, sector:"Computational Drug Discovery",     funding:"$2.8M",  stage:"Seed",      city:"Chennai", slug:"scirio" },
  { rank:12, name:"Krishitantra",          founded:2020, sector:"AgriTech · Precision Farming AI", funding:"₹3.5Cr", stage:"Seed",      city:"Chennai", slug:"krishitantra" },
];

const SPOTLIGHTS = [
  {
    rank:"01", name:"Detect Technologies",
    founder:"Tarun Kumar, Harikrishnan Tulsidas & Karthik Bhatt",
    funding:"$26M", year:2016, city:"Chennai",
    sector:"Industrial AI · Computer Vision · Asset Inspection",
    badge:"IITM Incubated",
    img:IMGS.detect, slug:"detect-technologies",
    story:"Detect Technologies was born inside IIT Madras's Research Park — three engineers who saw that India's oil & gas infrastructure was being inspected by hand, at enormous cost and risk. They built D-Sense, a guided-wave ultrasonic inspection system that detects corrosion inside live pipelines without shutdown, combined with a Visual AI platform that automates safety monitoring across plants in real time. Clients include Indian Oil, BPCL, Shell, and ONGC, across 40+ facilities globally. The company raised $26M and is expanding in the Middle East and Southeast Asia.",
    why:"India has over 35,000 km of gas pipelines, 11,000 km of product pipelines, and hundreds of aging refineries — virtually all inspected by conventional methods that miss subsurface corrosion until it fails. Detect's technology shifts inspection from reactive to predictive, at a cost that makes financial sense for operators. As India's energy infrastructure doubles over the next decade under the National Infrastructure Pipeline, Detect's TAM grows proportionally.",
  },
  {
    rank:"02", name:"Haber",
    founder:"Nitesh Per & Viren Gupta",
    funding:"$44M", year:2017, city:"Chennai",
    sector:"Water & Industrial Process Intelligence · AI SaaS",
    badge:"Industrial AI Pioneer",
    img:IMGS.haber, slug:"haber",
    story:"Haber uses AI and IoT to optimise water treatment, cooling systems, and industrial processes at scale — reducing chemical consumption, energy use, and wastewater output simultaneously. Its platform installs sensor networks across water treatment and industrial facilities and runs ML models that continuously adjust chemical dosing, pump speeds, and process parameters. The company operates in 18 countries, has processed over 1.3 trillion litres of water, and counts Unilever, Tata, and Coca-Cola among its clients. It raised a $44M Series C in 2023.",
    why:"Water scarcity and industrial water treatment are among the most urgent infrastructure problems of the 2030s. Haber's AI delivers 20–35% reduction in chemical and energy consumption per facility — payback periods of 6–18 months that make the ROI conversation simple. With over 1.3 trillion litres processed and 18 countries of presence, Haber has the operational data moat that no new entrant can build without a decade of deployment.",
  },
  {
    rank:"03", name:"Planys Technologies",
    founder:"Tanuj Jhunjhunwala & Vineet Upadhyay",
    funding:"$8M", year:2015, city:"Chennai",
    sector:"Subsea Robotics · Underwater Inspection · NDT",
    badge:"Navy & Port Trusted",
    img:IMGS.planys, slug:"planys-technologies",
    story:"Planys builds miniaturised ROVs (Remotely Operated Vehicles) — underwater inspection robots — for ports, ships, pipelines, dams, and offshore structures. Where conventional inspection requires divers or dry-dock — expensive, slow, and dangerous — a Planys ROV can inspect a ship hull in hours, stream HD video and sonar data, and generate inspection reports automatically. The Indian Navy, ONGC, and multiple port trusts use Planys for routine and emergency inspection. Its technology replaces jobs that cost Rs 50,000 per diver-day at a fraction of the cost.",
    why:"India has the world's second-longest coastline, 12 major ports, and an offshore oil infrastructure that requires constant inspection. As drone and ROV regulations open up globally, Planys has a path to international markets where the same inspection deficit exists. Its deep relationship with the Indian Navy provides both reference clients and national security alignment — a moat that civilian competitors cannot replicate.",
  },
  {
    rank:"04", name:"Mad Street Den (vue.ai)",
    founder:"Ashwini Asokan & Anand Chandrasekaran",
    funding:"$30M", year:2013, city:"Chennai",
    sector:"AI Retail · Visual Commerce · Fashion Intelligence",
    badge:"$1B GMV Impacted",
    img:IMGS.mad, slug:"mad-street-den",
    story:"Mad Street Den built vue.ai — one of the world's first AI-powered visual intelligence platforms for retail and fashion. Its technology automatically tags, styles, and merchandises millions of SKUs, personalises storefronts in real time, automates fashion photoshoots with AI models, and powers size recommendations. Clients include ASOS, PVH (Calvin Klein, Tommy Hilfiger), Myntra, and over 100 global retailers. The platform impacts over $1B GMV, reduces catalogue production costs by 60%, and has become the infrastructure layer for AI-native retail operations.",
    why:"Every fashion retailer globally will be an AI-native operation by 2028. The competitive pressure to automate catalogue creation, personalisation, and inventory intelligence is existential — and vue.ai has a head start of five years, a client base of 100+ global brands, and a proprietary training dataset built from hundreds of millions of fashion images. That dataset advantage compounds and cannot be replicated by new entrants.",
  },
  {
    rank:"05", name:"Agnikul Cosmos",
    founder:"Srinath Ravichandran & Moin SPM",
    funding:"$85.8M", year:2017, city:"Chennai",
    sector:"Rocket Manufacturing · 3D-Printed Propulsion · Launch Vehicles",
    badge:"World's 1st 3D-Printed Engine",
    img:IMGS.shatam, slug:"agnikul-cosmos",
    story:"Agnikul Cosmos was incubated at IIT Madras and became one of India's most significant aerospace companies in under a decade. Building the world's first rocket powered by a fully 3D-printed, single-piece semi-cryogenic engine — the Agnilet — it completed the world's first private launchpad launch from Sriharikota in June 2024. Its Agnibaan orbital rocket is in development, targeting the global small satellite launch market. IIT Madras's Research Park and testing infrastructure provided the critical early-stage access that enabled Agnikul to iterate through three engine generations in four years.",
    why:"Agnikul is the clearest demonstration of what IITM's ecosystem can enable: a company that required simultaneous breakthroughs in materials, manufacturing, propulsion, and systems engineering — achieved by a team that came directly from and around IITM's technical infrastructure. The 3D-printed engine collapses manufacturing timelines from months to weeks. No conventionally-manufactured rocket can match that iteration speed regardless of funding.",
  },
];

const STATS = [
  { val:"600+",   label:"Startups from IITM Ecosystem (2026)" },
  { val:"$800M+", label:"Total Funding by IITM-linked Startups" },
  { val:"4",      label:"IITM-linked Unicorns & Soonicorns" },
  { val:"#1",     label:"NIRF Innovation Ranking, India (2024)" },
];

const SECTORS = [
  { name:"Industrial AI & Computer Vision",    count:72, pct:82 },
  { name:"Robotics & Autonomous Systems",      count:54, pct:62 },
  { name:"BioTech & Life Sciences",            count:48, pct:55 },
  { name:"Space & Aerospace Technology",       count:38, pct:43 },
  { name:"Clean Energy & Sustainability",      count:34, pct:39 },
  { name:"EdTech & Skill Development",         count:28, pct:32 },
];

const TIMELINE = [
  { year:"2010", event:"IIT Madras Research Park inaugurated — India's first university-linked research park" },
  { year:"2013", event:"Mad Street Den (vue.ai) founded; IITM Incubation Cell formalized" },
  { year:"2015", event:"Planys Technologies incubated; IITM becomes #1 in NIRF innovation category" },
  { year:"2016", event:"Detect Technologies founded; IITM Research Park crosses 100 companies" },
  { year:"2017", event:"Haber and Agnikul Cosmos both founded from IITM ecosystem" },
  { year:"2019", event:"IITM Research Park Phase 2 inaugurated; 300+ companies in ecosystem" },
  { year:"2021", event:"Agnikul completes India's first private rocket engine test at IITM" },
  { year:"2024", event:"Agnikul launches from world's first private launchpad; IITM crosses 500 startups" },
  { year:"2025", event:"IITM ecosystem surpasses $800M in total funding; 600+ startups active" },
  { year:"2026", event:"Haber expands to 25 countries; Detect Technologies opens Middle East HQ" },
];

const FAQ = [
  {
    q:"Which are the top IIT Madras startups in 2026?",
    a:"The top IIT Madras-linked startups in 2026 are Agnikul Cosmos ($85.8M, world's first 3D-printed rocket engine), Haber ($44M, industrial water AI in 18 countries), Mad Street Den/vue.ai ($30M, AI retail platform for ASOS and Calvin Klein), Detect Technologies ($26M, industrial inspection AI), and Planys Technologies ($8M, subsea inspection robots). The IITM ecosystem has produced 600+ startups with $800M+ in total funding.",
  },
  {
    q:"What is the IIT Madras Research Park and how does it help startups?",
    a:"The IIT Madras Research Park, inaugurated in 2010, is India's first university-linked research park — a 1.2 million sq ft campus that co-locates R&D labs, startups, and industry partners adjacent to IIT Madras. It provides startups with lab space, IITM faculty mentors, student talent pipelines, testing infrastructure (including propulsion test facilities used by Agnikul), and access to IITM's IP portfolio. Over 300 companies are active in the park, with several progressing to Series A+ funding.",
  },
  {
    q:"How many startups has IIT Madras produced?",
    a:"IIT Madras's broader ecosystem — including the Research Park, the IITM Incubation Cell, and alumni-founded companies — has produced over 600 active startups as of 2026. These startups have collectively raised over $800 million in funding and span sectors from aerospace to AI to biotech to robotics. IIT Madras has been ranked #1 in NIRF's Innovation category for multiple consecutive years.",
  },
  {
    q:"Which IIT Madras startups have raised the most funding?",
    a:"The highest-funded IITM-linked startups are Agnikul Cosmos ($85.8M, rocket manufacturing), Haber ($44M, industrial water AI), Mad Street Den ($30M, AI retail), Detect Technologies ($26M, industrial inspection), and Turno ($17M, EV commercial vehicles). Several IITM-linked companies including Saama Technologies have achieved significant scale and are considered soonicorn or unicorn-stage.",
  },
  {
    q:"Is Chennai a major deep tech and startup hub?",
    a:"Yes. Chennai, anchored by IIT Madras and its Research Park, is India's second-largest deep tech hub after Bengaluru. The city is home to over 150 deep tech startups, with particular strength in industrial AI, robotics, aerospace, and biotech. The presence of IITM, Anna University, manufacturing clusters, and port infrastructure creates a unique combination that Bengaluru lacks — making Chennai the natural home for hardware-heavy deep tech companies.",
  },
];

export default function IITMadrasStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        .pf { font-family:'Playfair Display',Georgia,serif !important; }
        .ss { font-family:'Source Serif 4',Georgia,serif; }
        .dm { font-family:'DM Sans',system-ui,sans-serif; }

        :root {
          --bg:      #F3F1EE;
          --bg2:     #EAE7E2;
          --bg3:     #DED9D2;
          --ink:     #18100A;
          --ink2:    #261A10;
          --ink3:    #4A3520;
          --ink4:    #7A6048;
          --ink5:    #A89070;
          --ink6:    #C8B8A0;
          --rule:    #D8CCB8;
          --rule2:   #E4DAC8;
          --iit:     #3D1A00;
          --iit2:    #7A3800;
          --iit3:    #C46000;
          --iit4:    #F0A040;
          --nova:    #B05000;
          --nova2:   #D47020;
          --glow:    #F0C060;
          --white:   #FEFCF8;
        }

        * { box-sizing:border-box; }
        body { background:var(--bg); margin:0; }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(18px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position:-400% center; }
          100% { background-position:400% center; }
        }
        @keyframes barGrow {
          from { width:0 !important; }
          to   { width:var(--w); }
        }
        @keyframes lampGlow {
          0%,100% { opacity:.3; } 50% { opacity:.75; }
        }

        .a0 { animation:fadeUp .5s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .5s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .5s .22s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation:fadeUp .5s .34s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position:relative; overflow:hidden; }
        .imgf img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; transition:transform .7s ease; }
        .imgf:hover img { transform:scale(1.05); }

        /* Lamp grid overlay */
        .lamps { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
        .lamps::before {
          content:''; position:absolute; width:2px; height:2px; border-radius:50%; background:rgba(240,192,96,.7);
          box-shadow:100px 80px 0 rgba(240,192,96,.4),250px 140px 0 rgba(240,192,96,.6),400px 60px 0 rgba(240,192,96,.3),580px 200px 0 rgba(240,192,96,.5),720px 100px 0 rgba(240,192,96,.4),900px 170px 0 rgba(240,192,96,.6),1050px 80px 0 rgba(240,192,96,.3),180px 330px 0 rgba(240,192,96,.5),460px 380px 0 rgba(240,192,96,.4),780px 310px 0 rgba(240,192,96,.6);
          animation:lampGlow 4s ease-in-out infinite;
        }
        .lamps::after {
          content:''; position:absolute; width:1px; height:1px; border-radius:50%; background:rgba(196,96,0,.7);
          box-shadow:200px 120px 0 rgba(196,96,0,.5),420px 220px 0 rgba(196,96,0,.6),540px 90px 0 rgba(196,96,0,.4),760px 160px 0 rgba(196,96,0,.5),940px 250px 0 rgba(196,96,0,.6),280px 410px 0 rgba(196,96,0,.5);
          animation:lampGlow 6s 2s ease-in-out infinite;
        }

        .sh { display:flex; align-items:center; gap:12px; }
        .sh-l { font-family:'DM Sans',system-ui,sans-serif; font-size:7.5px; font-weight:700; text-transform:uppercase; letter-spacing:.32em; color:var(--ink5); white-space:nowrap; }
        .sh-r { flex:1; height:1px; background:var(--rule2); }
        .sh-dot { width:4px; height:4px; background:var(--nova); border-radius:50%; flex-shrink:0; }

        .stat-box { border:1.5px solid var(--ink); background:var(--white); padding:24px 20px; text-align:center; position:relative; overflow:hidden; }
        .stat-box::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--iit),var(--nova),var(--iit3),var(--glow)); }

        .spot-card {
          border:1.5px solid var(--ink); background:var(--white);
          overflow:hidden; position:relative;
          display:grid; grid-template-columns:300px 1fr;
          min-height:380px;
          transition:box-shadow .2s,transform .2s;
        }
        .spot-card:hover { box-shadow:5px 5px 0 var(--ink); transform:translate(-2px,-2px); }
        .spot-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--iit),var(--nova),var(--iit3),var(--glow),var(--iit3),var(--nova),var(--iit));
          background-size:400% auto; animation:shimmer 5s linear infinite; z-index:3;
        }

        .spot-img { position:relative; border-right:1.5px solid var(--ink); overflow:hidden; background:var(--iit); }
        .spot-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:saturate(60%) brightness(.72); transition:transform .7s ease; }
        .spot-card:hover .spot-img img { transform:scale(1.05); }
        .spot-img-ov { position:absolute; inset:0; background:linear-gradient(to right,rgba(61,26,0,.0) 0%,rgba(61,26,0,.55) 100%); pointer-events:none; }
        .arch-ring { position:absolute; bottom:-44px; left:-44px; width:200px; height:200px; border-radius:50%; border:1px solid rgba(240,192,96,.15); pointer-events:none; }
        .arch-ring::after { content:''; position:absolute; inset:28px; border-radius:50%; border:1px solid rgba(240,192,96,.1); }
        .spot-rank { position:absolute; bottom:16px; left:18px; font-family:'Playfair Display',serif; font-size:5rem; font-weight:900; color:rgba(240,192,96,.08); line-height:1; user-select:none; }
        .spot-badge { position:absolute; top:16px; left:16px; font-family:'DM Sans',system-ui,sans-serif; font-size:7px; font-weight:700; text-transform:uppercase; letter-spacing:.18em; padding:3px 9px; background:var(--nova); color:white; z-index:2; }

        .spot-body { padding:clamp(22px,3vw,36px); display:flex; flex-direction:column; justify-content:space-between; }

        .dropcap::first-letter { font-family:'Playfair Display',serif; font-size:3.2em; font-weight:900; float:left; line-height:.78; margin-right:5px; color:var(--nova); }
        .pull-quote { border-left:4px solid var(--nova); padding:10px 0 10px 20px; margin:20px 0; }

        .fund-pill { display:inline-block; padding:2px 9px; border:1px solid rgba(176,80,0,.28); background:rgba(176,80,0,.08); font-family:'DM Sans',system-ui,sans-serif; font-size:11px; font-weight:800; color:var(--nova); }

        .uni-row { display:grid; grid-template-columns:38px 1fr 100px 180px 80px 100px 74px; align-items:center; padding:11px 16px; border-bottom:1px solid var(--rule2); background:var(--white); transition:background .1s; text-decoration:none; color:inherit; }
        .uni-row:hover { background:var(--bg2); }
        .uni-row.header { background:var(--ink); color:rgba(255,255,255,.42); position:sticky; top:0; z-index:4; }

        .bar-track { background:var(--rule2); height:5px; overflow:hidden; }
        .bar-fill { height:100%; background:linear-gradient(90deg,var(--iit),var(--nova),var(--iit3)); animation:barGrow 1.3s cubic-bezier(.16,1,.3,1) .5s both; }

        .tl-dot { width:9px; height:9px; border-radius:50%; background:var(--nova); border:2px solid var(--white); box-shadow:0 0 0 2px var(--nova),0 0 8px rgba(176,80,0,.35); flex-shrink:0; margin-top:4px; }

        .faq-item { border-bottom:1px solid var(--rule2); padding:14px 0; }
        .faq-q { font-family:'DM Sans',system-ui,sans-serif; font-size:13.5px; font-weight:600; color:var(--ink); }
        .faq-a { font-family:'Source Serif 4',Georgia,serif; font-size:13px; color:var(--ink3); line-height:1.85; padding-top:10px; max-width:760px; }

        .iitm-badge { display:inline-flex; align-items:center; gap:8px; background:var(--iit); color:var(--glow); padding:6px 14px; font-family:'DM Sans',system-ui,sans-serif; font-size:9px; font-weight:800; text-transform:uppercase; letter-spacing:0.2em; }

        #rpbar3 { position:fixed; top:0; left:0; height:2px; background:linear-gradient(90deg,var(--iit),var(--nova),var(--iit3),var(--glow)); z-index:999; width:0%; transition:width .1s; pointer-events:none; }

        @media (max-width:860px) {
          .spot-card   { grid-template-columns:1fr !important; }
          .spot-img    { min-height:240px !important; border-right:none !important; border-bottom:1.5px solid var(--ink); }
          .uni-row     { grid-template-columns:30px 1fr 90px 80px !important; }
          .uni-hide    { display:none !important; }
          .stat-grid   { grid-template-columns:repeat(2,1fr) !important; }
          .sector-grid { grid-template-columns:1fr !important; }
          .sb-grid     { grid-template-columns:1fr !important; }
        }
        @media (max-width:560px) { .stat-grid { grid-template-columns:1fr !important; } }
      `}</style>

      <div id="rpbar3" />
      <script dangerouslySetInnerHTML={{ __html:`window.addEventListener('scroll',function(){var el=document.getElementById('rpbar3');if(!el)return;var d=document.documentElement;el.style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight))*100)+'%';});` }} />

      <main itemScope itemType="https://schema.org/CollectionPage" style={{minHeight:"100vh",background:"var(--bg)"}}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Top IIT Madras Startups 2026",description:"The definitive guide to India's top IIT Madras-linked startups in 2026.",url:"https://upforge.in/iit-madras-startups",publisher:{"@type":"Organization",name:"UpForge",url:"https://upforge.in"},dateModified:new Date().toISOString().split("T")[0]}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQ.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

        {/* BREADCRUMB */}
        <nav className="dm a0" style={{background:"var(--bg2)",borderBottom:"1px solid var(--rule2)",padding:"9px 0"}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
            <ol style={{display:"flex",alignItems:"center",gap:7,fontSize:9,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.18em",listStyle:"none",margin:0,padding:0}}>
              <li><Link href="/" style={{color:"var(--ink5)",textDecoration:"none"}}>UpForge</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li><Link href="/startup" style={{color:"var(--ink5)",textDecoration:"none"}}>Startups</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li style={{color:"var(--ink4)",fontWeight:700}}>IIT Madras 2026</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{borderBottom:"3px solid var(--ink)"}}>
          <div className="imgf" style={{height:"clamp(320px,42vw,540px)",background:"var(--iit)"}}>
            <img src={IMGS.hero} alt="IIT Madras startups 2026 — research park innovation ecosystem" style={{filter:"brightness(.42) saturate(40%)"}} />
            <div className="lamps" />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(61,26,0,.2) 0%,rgba(61,26,0,.92) 100%)"}} />
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 clamp(18px,5vw,72px)",textAlign:"center"}}>
              <div style={{marginBottom:16}}>
                <span className="iitm-badge">India's #1 Innovation Campus · NIRF 2024</span>
              </div>
              <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap",justifyContent:"center"}}>
                {["600+ Startups","$800M+ Funded","4 Unicorns & Soonicorns","Research Park Since 2010"].map(t=>(
                  <span key={t} className="dm" style={{fontSize:7.5,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(240,192,96,.45)",border:"1px solid rgba(240,192,96,.18)",padding:"3px 11px"}}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{fontSize:"clamp(1.9rem,5.5vw,4.4rem)",fontWeight:900,lineHeight:1.0,color:"white",letterSpacing:"-0.03em",marginBottom:20,maxWidth:960}}>
                IIT Madras Startups 2026:{" "}
                <em style={{color:"#F0C060",fontStyle:"italic"}}>From Research Park to Rockets, Robots & AI at Scale</em>
              </h1>
              <p className="ss" style={{fontSize:"clamp(13.5px,1.8vw,16px)",color:"rgba(240,192,96,.5)",fontStyle:"italic",maxWidth:640,lineHeight:1.65}}>
                India's premier engineering institution has produced rockets, underwater robots, AI-powered retail platforms, and industrial intelligence systems. The IIT Madras ecosystem is not just a campus — it is a startup engine.
              </p>
            </div>
          </div>
          <div style={{background:"var(--ink)"}}>
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}}>
                {[{l:"Updated",v:"March 2026"},{l:"Active Startups",v:"600+"},{l:"Total Funding",v:"$800M+"},{l:"NIRF Innovation Rank",v:"#1 India (2024)"}].map((m,i)=>(
                  <div key={i} style={{padding:"13px 22px",borderRight:"1px solid rgba(255,255,255,.06)"}}>
                    <p className="dm" style={{fontSize:7,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"rgba(255,255,255,.28)",marginBottom:3}}>{m.l}</p>
                    <p className="dm" style={{fontSize:11,color:"rgba(240,192,96,.65)",fontWeight:600}}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,100px)"}}>

          {/* INTRO */}
          <div className="a1" style={{padding:"clamp(30px,5vw,52px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">The IITM Startup Story</span><div className="sh-r" /></div>
            <div className="sb-grid" style={{display:"grid",gridTemplateColumns:"1fr clamp(180px,22vw,240px)",gap:"clamp(24px,3vw,44px)",alignItems:"start"}}>
              <div>
                <p className="pf" itemProp="description" style={{fontSize:"clamp(1.1rem,2.3vw,1.4rem)",fontWeight:400,lineHeight:1.72,color:"var(--ink)",marginBottom:18,maxWidth:780}}>
                  IIT Madras has been ranked India's #1 institution for innovation for five consecutive years — and the numbers justify it. Over 600 startups have emerged from its campus, its Research Park, and its alumni network. These companies have raised $800 million in cumulative funding, created thousands of jobs, and built technology deployed across 40+ countries. The IITM Research Park, inaugurated in 2010 as India's first university-adjacent research park, has become the institutional anchor of Chennai's deep tech ecosystem.
                </p>
                <p className="ss" style={{fontSize:13.5,color:"var(--ink3)",lineHeight:1.88,maxWidth:740}}>
                  This is UpForge's definitive guide to IITM's most significant startups — profiling the companies, the founders, and the institutional ecosystem that produced them. From Agnikul's 3D-printed rocket engine to Haber's water intelligence platform to Detect Technologies' pipeline inspection AI, this is what India's best engineering minds are building.
                </p>
              </div>
              <div style={{borderLeft:"1px solid var(--rule2)",paddingLeft:"clamp(16px,2.5vw,30px)"}}>
                <p className="dm" style={{fontSize:7.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.22em",color:"var(--ink5)",marginBottom:12}}>IITM Quick Facts · 2026</p>
                {[["Founded","1959"],["Research Park","Est. 2010"],["NIRF Rank","#1 Innovation"],["Active Startups","600+"],["Total Funding","$800M+"],["Incubation Cell","Since 2003"]].map(([k,v])=>(
                  <div key={k} style={{display:"flex",justifyContent:"space-between",padding:"6px 0",borderBottom:"1px solid var(--rule2)"}}>
                    <span className="dm" style={{fontSize:10,color:"var(--ink5)"}}>{k}</span>
                    <span className="dm" style={{fontSize:10,fontWeight:700,color:"var(--ink3)"}}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* STATS */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">IIT Madras Ecosystem · Key Numbers 2026</span><div className="sh-r" /></div>
            <div className="stat-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
              {STATS.map((s,i)=>(
                <div key={i} className="stat-box">
                  <p className="pf" style={{fontSize:"clamp(1.4rem,2.5vw,2.1rem)",fontWeight:900,color:"var(--ink)",marginBottom:7,lineHeight:1}}>{s.val}</p>
                  <p className="dm" style={{fontSize:9,color:"var(--ink4)",lineHeight:1.5,textTransform:"uppercase",letterSpacing:"0.1em"}}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">IITM Innovation Timeline · 2010 → 2026</span><div className="sh-r" /></div>
            <div style={{position:"relative",paddingLeft:30}}>
              <div style={{position:"absolute",left:4,top:8,bottom:8,width:2,background:"linear-gradient(to bottom,var(--nova),var(--rule2))"}} />
              {TIMELINE.map((m,i)=>(
                <div key={i} style={{display:"flex",gap:18,marginBottom:18,alignItems:"flex-start"}}>
                  <div className="tl-dot" />
                  <div style={{display:"flex",gap:14,alignItems:"baseline",flexWrap:"wrap"}}>
                    <span className="dm" style={{fontSize:8.5,fontWeight:800,color:"var(--nova)",textTransform:"uppercase",letterSpacing:"0.15em",minWidth:38}}>{m.year}</span>
                    <p className="ss" style={{fontSize:13.5,color:"var(--ink3)",lineHeight:1.5,margin:0}}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR BARS */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">IITM Startup Sector Breakdown · 2026</span><div className="sh-r" /></div>
            <div className="sector-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"13px 44px"}}>
              {SECTORS.map((s,i)=>(
                <div key={i}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                    <span className="dm" style={{fontSize:10.5,fontWeight:700,color:"var(--ink3)"}}>{s.name}</span>
                    <span className="dm" style={{fontSize:9,color:"var(--ink5)",fontWeight:600}}>{s.count} startups</span>
                  </div>
                  <div className="bar-track"><div className="bar-fill" style={{width:`${s.pct}%`,"--w":`${s.pct}%`} as React.CSSProperties} /></div>
                </div>
              ))}
            </div>
          </div>

          {/* SPOTLIGHT CARDS */}
          <div style={{marginTop:"clamp(32px,5vw,58px)"}}>
            <div className="sh" style={{marginBottom:22}}><div className="sh-dot" /><span className="sh-l">5 IITM Deep Dives · Founders & Missions</span><div className="sh-r" /></div>
            <p className="ss" style={{fontSize:13,color:"var(--ink4)",marginBottom:26,fontStyle:"italic"}}>
              Five companies that define what IIT Madras's ecosystem is capable of building — the technology, the milestones, and what each one is really building toward.
            </p>

            {SPOTLIGHTS.map((s,idx)=>(
              <article key={idx} className="spot-card" style={{marginBottom:24}} itemScope itemType="https://schema.org/Organization">
                <div className="spot-img">
                  <img src={s.img} alt={`${s.name} — IIT Madras startup 2026`} itemProp="logo" />
                  <div className="spot-img-ov" />
                  <div className="arch-ring" />
                  <span className="spot-rank">{s.rank}</span>
                  <span className="spot-badge">{s.badge}</span>
                </div>
                <div className="spot-body">
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                      <span className="dm" style={{fontSize:8,fontWeight:800,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--nova)"}}>Rank {s.rank}</span>
                      <div style={{flex:1,height:1,background:"var(--rule2)"}} />
                      <span className="dm" style={{fontSize:7.5,color:"var(--ink5)",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase"}}>{s.city} · {s.year}</span>
                    </div>
                    <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:5,flexWrap:"wrap"}}>
                      <h2 className="pf" itemProp="name" style={{fontSize:"clamp(1.3rem,2.5vw,2rem)",fontWeight:700,color:"var(--ink)",lineHeight:1.1}}>{s.name}</h2>
                      <span className="fund-pill">{s.funding}</span>
                    </div>
                    <p className="dm" style={{fontSize:9.5,color:"var(--ink4)",marginBottom:18,textTransform:"uppercase",letterSpacing:"0.14em",fontWeight:600}}>{s.sector}</p>
                    <p className="ss dropcap" style={{fontSize:13.5,color:"var(--ink2)",lineHeight:1.88,marginBottom:0}}>{s.story}</p>
                    <div className="pull-quote">
                      <p className="ss" style={{fontSize:13,color:"var(--ink3)",lineHeight:1.82,fontStyle:"italic",margin:0}}>{s.why}</p>
                    </div>
                  </div>
                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,paddingTop:16,borderTop:"1px solid var(--rule2)",marginTop:4}}>
                    <div>
                      <p className="dm" style={{fontSize:7.5,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3}}>Founded by</p>
                      <p className="dm" style={{fontSize:11,fontWeight:700,color:"var(--ink)"}} itemProp="founder">{s.founder}</p>
                    </div>
                    <Link href={`/startup/${s.slug}`} style={{display:"inline-flex",alignItems:"center",gap:7,background:"var(--ink)",color:"white",padding:"9px 18px",textDecoration:"none",fontSize:8.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",fontFamily:"'DM Sans',system-ui"}}>
                      Full Profile →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* REGISTRY TABLE */}
          <div style={{marginTop:"clamp(36px,6vw,68px)"}}>
            <div className="sh" style={{marginBottom:16}}><div className="sh-dot" /><span className="sh-l">Complete IITM Startup Registry · 2026</span><div className="sh-r" /></div>
            <p className="ss" style={{fontSize:12.5,color:"var(--ink4)",marginBottom:18,fontStyle:"italic"}}>IIT Madras-linked funded startups — industrial AI, robotics, biotech, aerospace, clean energy, and edtech.</p>
            <div style={{border:"1.5px solid var(--ink)",overflow:"hidden"}}>
              <div className="uni-row header">
                {["#","Company","Funding","Sector","City","Stage","Founded"].map((h,i)=>(
                  <span key={i} className={`dm${i>3?" uni-hide":""}`} style={{fontSize:7.5,fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase"}}>{h}</span>
                ))}
              </div>
              {REGISTRY.map(u=>(
                <Link key={u.rank} href={`/startup/${u.slug}`} className="uni-row">
                  <span className="dm" style={{fontSize:9,fontWeight:700,color:"var(--ink5)"}}>{u.rank}</span>
                  <span className="dm" style={{fontSize:12,fontWeight:800,color:"var(--ink)"}}>{u.name}</span>
                  <span className="dm uni-hide" style={{fontSize:11,fontWeight:800,color:"var(--nova)"}}>{u.funding}</span>
                  <span className="dm uni-hide" style={{fontSize:9.5,color:"var(--ink4)",fontWeight:600}}>{u.sector}</span>
                  <span className="dm uni-hide" style={{fontSize:9.5,color:"var(--ink5)"}}>{u.city}</span>
                  <span className="dm uni-hide" style={{fontSize:9,color:"var(--ink4)"}}>{u.stage}</span>
                  <span className="dm uni-hide" style={{fontSize:10,color:"var(--ink5)"}}>{u.founded}</span>
                </Link>
              ))}
              <div style={{background:"var(--bg2)",padding:"14px 16px",borderTop:"1px solid var(--rule2)",textAlign:"center"}}>
                <Link href="/startup" className="dm" style={{fontSize:9,fontWeight:700,color:"var(--nova)",textTransform:"uppercase",letterSpacing:"0.16em",textDecoration:"none"}}>View Full Startup Registry →</Link>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div style={{marginTop:"clamp(36px,6vw,68px)"}}>
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">Frequently Asked Questions · IIT Madras Startups</span><div className="sh-r" /></div>
            <div style={{border:"1.5px solid var(--ink)",background:"var(--white)",overflow:"hidden"}}>
              <div style={{background:"var(--ink)",padding:"12px 20px"}}>
                <span className="dm" style={{fontSize:9,fontWeight:700,color:"rgba(255,255,255,.4)",textTransform:"uppercase",letterSpacing:"0.2em"}}>Questions · People Also Ask</span>
              </div>
              <div style={{padding:"4px 24px 20px"}}>
                {FAQ.map((f,i)=>(
                  <div key={i} className="faq-item" itemScope itemType="https://schema.org/Question">
                    <p className="faq-q" itemProp="name">{f.q}</p>
                    <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                      <p className="faq-a" itemProp="text">{f.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CLOSING BANNER */}
          <div style={{marginTop:"clamp(36px,6vw,68px)",border:"1.5px solid var(--ink)",background:"var(--iit)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--iit),var(--nova),var(--iit3),var(--glow),var(--iit3),var(--nova),var(--iit))",backgroundSize:"400% auto",animation:"shimmer 6s linear infinite"}} />
            <div className="imgf" style={{height:210}}>
              <img src={IMGS.banner} alt="IIT Madras campus innovation research 2026" style={{filter:"brightness(.15) saturate(25%)"}} />
              <div className="lamps" />
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 clamp(24px,5vw,72px)",textAlign:"center"}}>
                <p className="pf" style={{fontSize:"clamp(1.2rem,2.8vw,2.1rem)",fontWeight:700,color:"white",lineHeight:1.22,fontStyle:"italic"}}>
                  "The best IITM startups are not commercialising research. They are commercialising{" "}
                  <em style={{color:"#F0C060"}}>the questions that research could not answer fast enough.</em>"
                </p>
              </div>
            </div>
            <div style={{padding:"clamp(20px,3vw,36px)"}}>
              <p className="ss" style={{fontSize:13.5,color:"rgba(240,192,96,.55)",lineHeight:1.88,maxWidth:780}}>
                UpForge tracks every significant startup from India's top engineering institutions. IIT Madras's Research Park, incubation cell, and faculty network have created the most productive deep tech startup ecosystem in South Asia. The next Agnikul, the next Detect Technologies, is being built somewhere on that campus right now.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Related pages" style={{padding:"18px 0",borderTop:"2px solid var(--ink)",marginTop:"clamp(32px,5vw,56px)"}}>
            <ul style={{display:"flex",flexWrap:"wrap",gap:"8px 22px",listStyle:"none",margin:0,padding:0}}>
              {[
                {l:"Deep Tech Startups",h:"/deep-tech-startups"},
                {l:"SpaceTech Startups",h:"/spacetech-startups"},
                {l:"Top AI Startups 2026",h:"/top-ai-startups"},
                {l:"Indian Unicorns 2026",h:"/indian-unicorns"},
                {l:"Top Funded Startups",h:"/top-funded-startups"},
                {l:"Startup Registry",h:"/startup"},
                {l:"Submit Your Startup",h:"/submit"},
              ].map(lnk=>(
                <li key={lnk.h}><Link href={lnk.h} className="dm" style={{fontSize:8.5,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.15em",textDecoration:"none"}}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
