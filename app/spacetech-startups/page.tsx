// app/spacetech-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top SpaceTech Startups in India 2026: Rockets, Satellites & Space Economy | UpForge",
  description:
    "The definitive list of India's top spacetech startups in 2026 — Skyroot Aerospace, Pixxel, Agnikul Cosmos, Dhruva Space, Digantara and more. Launch vehicles, hyperspectral satellites, space debris tracking. Funding, founders, and the story of India's new space revolution. Updated March 2026.",
  keywords: [
    "top spacetech startups India 2026",
    "Indian space startups 2026",
    "Skyroot Aerospace funding valuation",
    "Pixxel satellite startup India",
    "Agnikul Cosmos rocket India",
    "Dhruva Space India",
    "Digantara space debris India",
    "India new space economy 2026",
    "private space companies India",
    "Indian rocket startups",
    "ISRO private sector startups",
    "IN-SPACe startups India",
    "spacetech funding India 2026",
    "small satellite startups India",
    "India $44 billion space economy",
    "GalaxEye SatSure India",
    "Indian aerospace defence startups",
    "NewSpace India 2026",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/spacetech-startups" },
  openGraph: {
    title: "Top SpaceTech Startups in India 2026: Rockets, Satellites & Space Economy",
    description:
      "Skyroot, Pixxel, Agnikul, Dhruva Space — India's private space revolution profiled. Funding, founders, and what each company is actually building. Updated March 2026.",
    url: "https://upforge.in/spacetech-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-spacetech.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top SpaceTech Startups in India 2026 | UpForge",
    description:
      "India's top spacetech startups — Skyroot, Pixxel, Agnikul, Dhruva Space. Rockets, satellites, space debris. The complete guide to India's new space economy.",
  },
};

const IMGS = {
  hero:      "https://cdn.ourcrowd.com/wp-content/uploads/2022/01/bigstock-Astronaut-Spaceman-Do-Spacewal-408180596.jpg",
  skyroot:   "https://upload.wikimedia.org/wikipedia/commons/e/eb/Skyroot_Aerospace_logo.jpg",
  pixxel:    "https://cdn.dribbble.com/userupload/20163615/file/original-b29b3f7103cc7804ff37b68b3a82ea73.jpg",
  agnikul:   "https://pbs.twimg.com/profile_images/969651847072854016/O1wofIxB_400x400.jpg",
  dhruva:    "https://pbs.twimg.com/profile_images/1932042984830447616/Y02wMTBf_400x400.jpg",
  digantara: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnWmzqNYglUkpoRfwbkuLqYYaNpFIAMjdXuw&s",
  banner:    "https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?w=1600&q=80&auto=format",
};

const REGISTRY = [
  { rank:1,  name:"Skyroot Aerospace",    founded:2018, sector:"Launch Vehicles",            funding:"$99.8M",  stage:"Series C",  city:"Hyderabad",  slug:"skyroot-aerospace"   },
  { rank:2,  name:"Pixxel",              founded:2019, sector:"Hyperspectral Satellites",    funding:"$95M",    stage:"Series B",  city:"Bengaluru",  slug:"pixxel"              },
  { rank:3,  name:"Agnikul Cosmos",      founded:2017, sector:"Rocket Manufacturing",        funding:"$85.8M",  stage:"Series B",  city:"Chennai",    slug:"agnikul-cosmos"      },
  { rank:4,  name:"Dhruva Space",        founded:2012, sector:"Satellites & Ground Stations",funding:"$21.8M",  stage:"Series A",  city:"Hyderabad",  slug:"dhruva-space"        },
  { rank:5,  name:"Digantara",           founded:2018, sector:"Space Situational Awareness", funding:"$14.4M",  stage:"Series A",  city:"Bengaluru",  slug:"digantara"           },
  { rank:6,  name:"GalaxEye",            founded:2020, sector:"Multi-Sensor Earth Obs.",     funding:"$13.6M",  stage:"Series A",  city:"Chennai",    slug:"galaxeye"            },
  { rank:7,  name:"SatSure",             founded:2017, sector:"Satellite Data Analytics",    funding:"$24.6M",  stage:"Series B",  city:"Bengaluru",  slug:"satsure"             },
  { rank:8,  name:"Manastu Space",       founded:2017, sector:"In-Space Propulsion",         funding:"$9M",     stage:"Series A",  city:"Mumbai",     slug:"manastu-space"       },
  { rank:9,  name:"Astrogate Labs",      founded:2018, sector:"Optical Comms",               funding:"$5M",     stage:"Seed+",     city:"Bengaluru",  slug:"astrogate-labs"      },
  { rank:10, name:"Bellatrix Aerospace", founded:2015, sector:"Satellite Propulsion",        funding:"$8M",     stage:"Series A",  city:"Bengaluru",  slug:"bellatrix-aerospace" },
  { rank:11, name:"D-Propulse",          founded:2022, sector:"Advanced Propulsion",         funding:"₹25Cr",   stage:"Seed",      city:"Bengaluru",  slug:"d-propulse"          },
  { rank:12, name:"The Guild",           founded:2021, sector:"Satellite Communications",    funding:"$25.5M",  stage:"Series A",  city:"Bengaluru",  slug:"the-guild"           },
];

const SPOTLIGHTS = [
  {
    rank:"01", name:"Skyroot Aerospace",
    founder:"Pawan Kumar Chandana & Naga Bharath Daka",
    funding:"$99.8M", year:2018, city:"Hyderabad",
    sector:"Launch Vehicles · Orbital Access",
    badge:"India's 1st Private Rocket",
    img:IMGS.skyroot, slug:"skyroot-aerospace",
    story:"On 18 November 2022, Skyroot became the first private Indian company to launch a rocket into space — the Vikram-S, named after ISRO's founding father Dr Vikram Sarabhai. Founded by two former ISRO scientists, Skyroot uses 3D-printed engines, carbon-composite structures, and all-electric avionics to build modular small-lift launch vehicles at a fraction of traditional cost. It has raised $99.8M from GIC Singapore, Greenko, and Solar Industries, and is building the Vikram-1 orbital vehicle.",
    why:"What Skyroot proved is not just that a private Indian company can build a rocket. It proved that two ex-ISRO engineers with deep institutional knowledge — and the freedom to move like a startup — can compress a decade of aerospace R&D into four years. The Vikram series targets the global small satellite launch market, where demand will outpace supply for the next decade.",
  },
  {
    rank:"02", name:"Pixxel",
    founder:"Awais Ahmed & Kshitij Khandelkar",
    funding:"$95M", year:2019, city:"Bengaluru",
    sector:"Hyperspectral Satellites · Earth Intelligence",
    badge:"Alphabet-Backed",
    img:IMGS.pixxel, slug:"pixxel",
    story:"Pixxel is building a constellation of hyperspectral imaging satellites capable of detecting chemical compositions, crop disease, pollution, and climate anomalies with a resolution and spectral range that no commercial satellite has previously achieved. Its Firefly satellite — launched in January 2025 — delivers 5-metre resolution across 150+ spectral bands. Alphabet invested $36M, validating Pixxel's potential as the sensing layer of a planetary intelligence platform.",
    why:"The satellite imaging market has been commoditised at the low end by companies like Planet Labs. Pixxel is building at the high end — hyperspectral data that governments, insurers, miners, and agricultural corporations cannot obtain anywhere else at any price. That is a defensible wedge that no competitor can replicate without rebuilding the satellite stack from scratch.",
  },
  {
    rank:"03", name:"Agnikul Cosmos",
    founder:"Srinath Ravichandran & Moin SPM",
    funding:"$85.8M", year:2017, city:"Chennai",
    sector:"Rocket Manufacturing · 3D-Printed Propulsion",
    badge:"World's 1st 3D-Printed Engine",
    img:IMGS.agnikul, slug:"agnikul-cosmos",
    story:"Agnikul built the world's first rocket powered by a fully 3D-printed, single-piece semi-cryogenic engine — a feat that aerospace engineers believed was years away. The Agnibaan SOrTeD sub-orbital demonstrator flew from Agnikul's own private launchpad at Sriharikota in June 2024, making it the first Indian company to launch from a privately owned pad on Indian soil. Its Agnibaan orbital rocket is now in active development.",
    why:"The 3D-printed engine is not a marketing story — it collapses manufacturing time from months to weeks, eliminates hundreds of individual assembly parts, and makes engine iteration as fast as software. Agnikul's manufacturing philosophy, built around additive manufacturing from day one, gives it a structural cost and speed advantage that conventionally manufactured rockets cannot close regardless of funding.",
  },
  {
    rank:"04", name:"Dhruva Space",
    founder:"Sanjay Nekkanti",
    funding:"$21.8M", year:2012, city:"Hyderabad",
    sector:"Satellite Platforms · Ground Station Networks",
    badge:"Full-Stack Space",
    img:IMGS.dhruva, slug:"dhruva-space",
    story:"Dhruva Space is India's oldest private space company — founded eight years before the 2020 policy reforms that opened the sector to private players. It builds complete satellite solutions: spacecraft design and manufacturing, ground station networks, and full mission operations. In 2022, its Thybolt satellites launched aboard ISRO's PSLV-C54, becoming among the first private Indian commercial satellites to reach orbit. Its modular CubeSat platforms now serve defence and commercial clients across 12 countries.",
    why:"Dhruva's decade-long head start means its engineers have built, failed, iterated, and succeeded through three technology generations — a compounding advantage no 2021-vintage competitor can buy. In space, institutional memory and hardware experience compound faster than capital.",
  },
  {
    rank:"05", name:"Digantara",
    founder:"Anirudh Sharma, Tanveer Ahmed & Rajashekar Reddy",
    funding:"$14.4M", year:2018, city:"Bengaluru",
    sector:"Space Situational Awareness · Debris Tracking",
    badge:"Space Safety",
    img:IMGS.digantara, slug:"digantara",
    story:"There are over 27,000 tracked debris objects in orbit and 130 million too small to track but large enough to destroy a satellite. Digantara is building in-orbit sensor devices — its SCOT (Space Camera for Object Tracking) — that track debris from space itself, providing real-time situational awareness that ground-based radar cannot. The company is expanding into the US and is targeting Rs 260 crore in revenue as global satellite operators seek orbital insurance.",
    why:"As the constellation race intensifies — Starlink, OneWeb, Amazon Kuiper, and Indian government constellations all launching simultaneously — orbital collision probability rises exponentially. Digantara is building the insurance policy for the entire satellite industry: a business with no ceiling as long as humanity keeps launching objects into space and governments mandate space traffic management.",
  },
];

const STATS = [
  { val:"300+",     label:"Private Space Startups in India (2025)" },
  { val:"$467M+",   label:"Total SpaceTech Funding (last 10 years)" },
  { val:"$44B",     label:"India's Target Space Economy by 2030" },
  { val:"₹1,000Cr", label:"Govt VC Fund for Space Startups (2024)" },
];

const SECTORS = [
  { name:"Launch Vehicles & Propulsion",   count:38, pct:85 },
  { name:"Earth Observation Satellites",   count:52, pct:92 },
  { name:"Satellite Communications",       count:44, pct:78 },
  { name:"Space Data & Analytics",         count:36, pct:64 },
  { name:"Space Situational Awareness",    count:14, pct:25 },
  { name:"In-Space Services & Propulsion", count:22, pct:39 },
];

const TIMELINE = [
  { year:"2020", event:"Govt opens space to private companies; IN-SPACe established" },
  { year:"2021", event:"Skyroot and Agnikul receive ISRO facility access for engine testing" },
  { year:"2022", event:"Skyroot launches Vikram-S — India's first private rocket; Dhruva's Thybolt in orbit" },
  { year:"2023", event:"100+ startups register with ISRO; Space Policy 2023 allows 100% FDI" },
  { year:"2024", event:"Agnikul launches from India's first private launchpad; Govt announces ₹1,000Cr VC fund" },
  { year:"2025", event:"Pixxel's Firefly satellite launches; 300+ space companies active; Digantara eyes US expansion" },
  { year:"2026", event:"$93.7M raised YTD; orbital launches imminent; Bellatrix opens US manufacturing" },
];

const FAQ = [
  {
    q:"Which are the top spacetech startups in India in 2026?",
    a:"The top Indian spacetech startups in 2026 are Skyroot Aerospace ($99.8M raised, India's first private rocket), Pixxel ($95M, hyperspectral satellites backed by Alphabet), Agnikul Cosmos ($85.8M, world's first 3D-printed engine rocket), Dhruva Space (full-stack satellite platforms), and Digantara (space debris and situational awareness). India now has over 300 active private space companies.",
  },
  {
    q:"Has India's private sector launched a rocket?",
    a:"Yes. Skyroot Aerospace launched India's first privately developed rocket — the Vikram-S — from Sriharikota on 18 November 2022. Agnikul Cosmos followed in June 2024 with its Agnibaan SOrTeD sub-orbital demonstrator, launching from India's first private launchpad.",
  },
  {
    q:"How large is India's space economy and what is the 2030 target?",
    a:"India's space economy was valued at approximately $8.4 billion in 2022 — about 2% of the $440B global market. The government has set a target of growing this to $44 billion by 2030, capturing 8–10% of the global share. The sector is projected to grow at 26% CAGR through 2030.",
  },
  {
    q:"What is IN-SPACe and how does it help Indian space startups?",
    a:"IN-SPACe (Indian National Space Promotion and Authorisation Centre) is India's dedicated space regulator for private companies, established in 2020. It grants private startups access to ISRO infrastructure, testing facilities, and launch support. Over 1,200 companies and 6,400 users have registered on its platform as of early 2025.",
  },
  {
    q:"Which investors are funding Indian spacetech startups?",
    a:"Key backers include Alphabet (Pixxel, $36M), GIC Singapore (Skyroot), Peak XV Partners, Lightspeed India, Blume Ventures, BIRAC, and the government's ₹1,000 crore VC fund managed through IN-SPACe. Total sector funding crossed $467M over the past decade, with $93.7M raised in 2025 alone.",
  },
];

export default function SpaceTechStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        .pf { font-family:'Playfair Display',Georgia,serif !important; }
        .ss { font-family:'Source Serif 4',Georgia,serif; }
        .dm { font-family:'DM Sans',system-ui,sans-serif; }

        :root {
          --bg:      #F4F2F7;
          --bg2:     #EAE8F0;
          --bg3:     #E0DDE8;
          --ink:     #0E0C18;
          --ink2:    #1C1830;
          --ink3:    #3A3558;
          --ink4:    #6B6588;
          --ink5:    #9E99B8;
          --ink6:    #C4C0D8;
          --rule:    #CCC8DC;
          --rule2:   #DAD6E8;
          --space:   #1E0A4E;
          --space2:  #3730A3;
          --space3:  #818CF8;
          --space4:  #C7D2FE;
          --nova:    #7C3AED;
          --nova2:   #A78BFA;
          --glow:    #38BDF8;
          --white:   #FDFCFF;
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
        @keyframes starPulse {
          0%,100% { opacity:.55; } 50% { opacity:1; }
        }

        .a0 { animation:fadeUp .5s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .5s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .5s .22s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation:fadeUp .5s .34s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position:relative; overflow:hidden; }
        .imgf img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; object-position:center; transition:transform .7s ease; }
        .imgf:hover img { transform:scale(1.05); }

        /* Starfield */
        .stars { position:absolute; inset:0; pointer-events:none; overflow:hidden; }
        .stars::before {
          content:''; position:absolute; width:2px; height:2px; border-radius:50%; background:white;
          box-shadow:80px 60px 0 rgba(255,255,255,.7),200px 120px 0 rgba(255,255,255,.5),340px 40px 0 rgba(255,255,255,.8),500px 180px 0 rgba(255,255,255,.4),650px 80px 0 rgba(255,255,255,.6),820px 150px 0 rgba(255,255,255,.5),980px 60px 0 rgba(255,255,255,.7),140px 300px 0 rgba(255,255,255,.5),400px 350px 0 rgba(255,255,255,.6),720px 280px 0 rgba(255,255,255,.4),900px 320px 0 rgba(255,255,255,.7),280px 460px 0 rgba(255,255,255,.5),560px 400px 0 rgba(255,255,255,.6);
          animation:starPulse 4s ease-in-out infinite;
        }
        .stars::after {
          content:''; position:absolute; width:1px; height:1px; border-radius:50%; background:white;
          box-shadow:160px 100px 0 rgba(200,220,255,.8),360px 200px 0 rgba(200,220,255,.6),480px 60px 0 rgba(200,220,255,.9),700px 130px 0 rgba(200,220,255,.5),860px 220px 0 rgba(200,220,255,.7),220px 380px 0 rgba(200,220,255,.8),600px 340px 0 rgba(200,220,255,.5);
          animation:starPulse 6s 2s ease-in-out infinite;
        }

        /* Divider */
        .sh { display:flex; align-items:center; gap:12px; }
        .sh-l { font-family:'DM Sans',system-ui,sans-serif; font-size:7.5px; font-weight:700; text-transform:uppercase; letter-spacing:.32em; color:var(--ink5); white-space:nowrap; }
        .sh-r { flex:1; height:1px; background:var(--rule2); }
        .sh-dot { width:4px; height:4px; background:var(--nova); border-radius:50%; flex-shrink:0; }

        /* Stat */
        .stat-box { border:1.5px solid var(--ink); background:var(--white); padding:24px 20px; text-align:center; position:relative; overflow:hidden; }
        .stat-box::after { content:''; position:absolute; bottom:0; left:0; right:0; height:3px; background:linear-gradient(90deg,var(--space),var(--nova),var(--space3),var(--glow)); }

        /* Spotlight card — image ALWAYS LEFT */
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
          background:linear-gradient(90deg,var(--space),var(--nova),var(--space3),var(--glow),var(--space3),var(--nova),var(--space));
          background-size:400% auto; animation:shimmer 5s linear infinite; z-index:3;
        }

        .spot-img { position:relative; border-right:1.5px solid var(--ink); overflow:hidden; background:var(--space); }
        .spot-img img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; filter:saturate(75%) brightness(.82); transition:transform .7s ease; }
        .spot-card:hover .spot-img img { transform:scale(1.05); }
        .spot-img-ov { position:absolute; inset:0; background:linear-gradient(to right,rgba(14,12,24,.0) 0%,rgba(14,12,24,.58) 100%); pointer-events:none; }
        .orbit-ring { position:absolute; bottom:-40px; left:-40px; width:200px; height:200px; border-radius:50%; border:1px solid rgba(167,139,250,.15); pointer-events:none; }
        .orbit-ring::after { content:''; position:absolute; inset:30px; border-radius:50%; border:1px solid rgba(167,139,250,.1); }
        .spot-rank { position:absolute; bottom:16px; left:18px; font-family:'Playfair Display',serif; font-size:5rem; font-weight:900; color:rgba(167,139,250,.1); line-height:1; user-select:none; }
        .spot-badge { position:absolute; top:16px; left:16px; font-family:'DM Sans',system-ui,sans-serif; font-size:7px; font-weight:700; text-transform:uppercase; letter-spacing:.18em; padding:3px 9px; background:var(--nova); color:white; z-index:2; }

        .spot-body { padding:clamp(22px,3vw,36px); display:flex; flex-direction:column; justify-content:space-between; }

        .dropcap::first-letter { font-family:'Playfair Display',serif; font-size:3.2em; font-weight:900; float:left; line-height:.78; margin-right:5px; color:var(--nova); }
        .pull-quote { border-left:4px solid var(--nova); padding:10px 0 10px 20px; margin:20px 0; }

        .fund-pill { display:inline-block; padding:2px 9px; border:1px solid rgba(124,58,237,.28); background:rgba(124,58,237,.08); font-family:'DM Sans',system-ui,sans-serif; font-size:11px; font-weight:800; color:var(--nova); }

        /* Registry */
        .uni-row { display:grid; grid-template-columns:38px 1fr 100px 140px 80px 100px 74px; align-items:center; padding:11px 16px; border-bottom:1px solid var(--rule2); background:var(--white); transition:background .1s; text-decoration:none; color:inherit; }
        .uni-row:hover { background:var(--bg2); }
        .uni-row.header { background:var(--ink); color:rgba(255,255,255,.42); position:sticky; top:0; z-index:4; }

        .bar-track { background:var(--rule2); height:5px; overflow:hidden; }
        .bar-fill { height:100%; background:linear-gradient(90deg,var(--space),var(--nova),var(--space3)); animation:barGrow 1.3s cubic-bezier(.16,1,.3,1) .5s both; }

        .tl-dot { width:9px; height:9px; border-radius:50%; background:var(--nova); border:2px solid var(--white); box-shadow:0 0 0 2px var(--nova),0 0 8px rgba(124,58,237,.35); flex-shrink:0; margin-top:4px; }

        .faq-item { border-bottom:1px solid var(--rule2); padding:14px 0; }
        .faq-q { font-family:'DM Sans',system-ui,sans-serif; font-size:13.5px; font-weight:600; color:var(--ink); }
        .faq-a { font-family:'Source Serif 4',Georgia,serif; font-size:13px; color:var(--ink3); line-height:1.85; padding-top:10px; max-width:760px; }

        #rpbar { position:fixed; top:0; left:0; height:2px; background:linear-gradient(90deg,var(--space),var(--nova),var(--space3),var(--glow)); z-index:999; width:0%; transition:width .1s; pointer-events:none; }

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

      <div id="rpbar" />
      <script dangerouslySetInnerHTML={{ __html:`window.addEventListener('scroll',function(){var el=document.getElementById('rpbar');if(!el)return;var d=document.documentElement;el.style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight))*100)+'%';});` }} />

      <main itemScope itemType="https://schema.org/CollectionPage" style={{minHeight:"100vh",background:"var(--bg)"}}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({"@context":"https://schema.org","@type":"CollectionPage",name:"Top SpaceTech Startups in India 2026",description:"The definitive list of India's top spacetech and new space startups in 2026.",url:"https://upforge.in/spacetech-startups",publisher:{"@type":"Organization",name:"UpForge",url:"https://upforge.in"},dateModified:new Date().toISOString().split("T")[0]}) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html:JSON.stringify({"@context":"https://schema.org","@type":"FAQPage",mainEntity:FAQ.map(f=>({"@type":"Question",name:f.q,acceptedAnswer:{"@type":"Answer",text:f.a}}))}) }} />

        {/* BREADCRUMB */}
        <nav className="dm a0" style={{background:"var(--bg2)",borderBottom:"1px solid var(--rule2)",padding:"9px 0"}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
            <ol style={{display:"flex",alignItems:"center",gap:7,fontSize:9,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.18em",listStyle:"none",margin:0,padding:0}}>
              <li><Link href="/" style={{color:"var(--ink5)",textDecoration:"none"}}>UpForge</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li><Link href="/startup" style={{color:"var(--ink5)",textDecoration:"none"}}>Startups</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li style={{color:"var(--ink4)",fontWeight:700}}>SpaceTech 2026</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{borderBottom:"3px solid var(--ink)"}}>
          <div className="imgf" style={{height:"clamp(320px,42vw,540px)",background:"var(--space)"}}>
            <img src={IMGS.hero} alt="Indian spacetech startups 2026 — rockets satellites new space economy" style={{filter:"brightness(.52) saturate(65%)"}} />
            <div className="stars" />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(14,12,24,.25) 0%,rgba(14,12,24,.88) 100%)"}} />
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 clamp(18px,5vw,72px)",textAlign:"center"}}>
              <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap",justifyContent:"center"}}>
                {["300+ Companies","$467M Funded","$44B by 2030","NewSpace India"].map(t=>(
                  <span key={t} className="dm" style={{fontSize:7.5,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(199,210,254,.5)",border:"1px solid rgba(199,210,254,.16)",padding:"3px 11px"}}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{fontSize:"clamp(1.9rem,5.5vw,4.4rem)",fontWeight:900,lineHeight:1.0,color:"white",letterSpacing:"-0.03em",marginBottom:20,maxWidth:960}}>
                SpaceTech Startups India 2026:{" "}
                <em style={{color:"#A78BFA",fontStyle:"italic"}}>The Complete Guide to India's New Space Revolution</em>
              </h1>
              <p className="ss" style={{fontSize:"clamp(13.5px,1.8vw,16px)",color:"rgba(199,210,254,.58)",fontStyle:"italic",maxWidth:640,lineHeight:1.65}}>
                Rockets launching from Hyderabad. Hyperspectral satellites watching the Earth. Debris trackers guarding the orbital commons. India's space economy is no longer only ISRO's story.
              </p>
            </div>
          </div>
          <div style={{background:"var(--ink)"}}>
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}}>
                {[{l:"Updated",v:"March 2026"},{l:"Active Startups",v:"300+"},{l:"Total Funding (10yr)",v:"$467M+"},{l:"2030 Target",v:"$44B Space Economy"}].map((m,i)=>(
                  <div key={i} style={{padding:"13px 22px",borderRight:"1px solid rgba(255,255,255,.06)"}}>
                    <p className="dm" style={{fontSize:7,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"rgba(255,255,255,.28)",marginBottom:3}}>{m.l}</p>
                    <p className="dm" style={{fontSize:11,color:"rgba(167,139,250,.7)",fontWeight:600}}>{m.v}</p>
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
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">India's New Space Story</span><div className="sh-r" /></div>
            <div className="sb-grid" style={{display:"grid",gridTemplateColumns:"1fr clamp(180px,22vw,240px)",gap:"clamp(24px,3vw,44px)",alignItems:"start"}}>
              <div>
                <p className="pf" itemProp="description" style={{fontSize:"clamp(1.1rem,2.3vw,1.4rem)",fontWeight:400,lineHeight:1.72,color:"var(--ink)",marginBottom:18,maxWidth:780}}>
                  Until 2020, India's space story was entirely ISRO's story. Then the government opened the sector to private companies — and in five years, India went from zero private space firms to over 300. Two rockets have launched from Indian soil. Hyperspectral satellites are in orbit. Debris trackers are being deployed on commercial payloads. The $44 billion target for 2030 is no longer an aspiration.
                </p>
                <p className="ss" style={{fontSize:13.5,color:"var(--ink3)",lineHeight:1.88,maxWidth:740}}>
                  This is UpForge's definitive guide to India's top spacetech startups — ranked by funding, technological depth, and strategic significance. From Skyroot's Vikram rockets to Pixxel's hyperspectral constellation to Digantara's orbital debris trackers, these are the companies rewriting what India can build, launch, and observe from space.
                </p>
              </div>
              <div style={{borderLeft:"1px solid var(--rule2)",paddingLeft:"clamp(16px,2.5vw,30px)"}}>
                <p className="dm" style={{fontSize:7.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.22em",color:"var(--ink5)",marginBottom:12}}>Quick Facts · 2026</p>
                {[["Private Companies","300+"],["Sector Opened","June 2020"],["1st Private Rocket","Skyroot (Nov 2022)"],["1st Private Launchpad","Agnikul (2024)"],["Govt VC Fund","₹1,000 Cr"],["2030 Target","$44B economy"]].map(([k,v])=>(
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
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">India SpaceTech · Key Numbers 2026</span><div className="sh-r" /></div>
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
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">India NewSpace Timeline · 2020 → 2026</span><div className="sh-r" /></div>
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
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">SpaceTech Sector Breakdown · India 2026</span><div className="sh-r" /></div>
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
            <div className="sh" style={{marginBottom:22}}><div className="sh-dot" /><span className="sh-l">5 SpaceTech Deep Dives · Founders & Missions</span><div className="sh-r" /></div>
            <p className="ss" style={{fontSize:13,color:"var(--ink4)",marginBottom:26,fontStyle:"italic"}}>
              Five companies at the frontier of India's space economy — the technology, the milestones, and what each one is really building toward.
            </p>

            {SPOTLIGHTS.map((s,idx)=>(
              <article key={idx} className="spot-card" style={{marginBottom:24}} itemScope itemType="https://schema.org/Organization">
                {/* IMAGE — always LEFT */}
                <div className="spot-img">
                  <img src={s.img} alt={`${s.name} — Indian spacetech startup 2026`} itemProp="logo" />
                  <div className="spot-img-ov" />
                  <div className="orbit-ring" />
                  <span className="spot-rank">{s.rank}</span>
                  <span className="spot-badge">{s.badge}</span>
                </div>
                {/* CONTENT */}
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
            <div className="sh" style={{marginBottom:16}}><div className="sh-dot" /><span className="sh-l">Complete SpaceTech Registry · India 2026</span><div className="sh-r" /></div>
            <p className="ss" style={{fontSize:12.5,color:"var(--ink4)",marginBottom:18,fontStyle:"italic"}}>India's funded spacetech startups — launch vehicles, satellites, data analytics, and in-space services.</p>
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
            <div className="sh" style={{marginBottom:20}}><div className="sh-dot" /><span className="sh-l">Frequently Asked Questions · India SpaceTech</span><div className="sh-r" /></div>
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
          <div style={{marginTop:"clamp(36px,6vw,68px)",border:"1.5px solid var(--ink)",background:"var(--space)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--space),var(--nova),var(--space3),var(--glow),var(--space3),var(--nova),var(--space))",backgroundSize:"400% auto",animation:"shimmer 6s linear infinite"}} />
            <div className="imgf" style={{height:210}}>
              <img src={IMGS.banner} alt="India new space economy 2026" style={{filter:"brightness(.2) saturate(45%)"}} />
              <div className="stars" />
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 clamp(24px,5vw,72px)",textAlign:"center"}}>
                <p className="pf" style={{fontSize:"clamp(1.2rem,2.8vw,2.1rem)",fontWeight:700,color:"white",lineHeight:1.22,fontStyle:"italic"}}>
                  "India spent 60 years watching space from below. Now it is building the rockets, the satellites, and the data layers that will let the world watch Earth{" "}
                  <em style={{color:"#A78BFA"}}>from above.</em>"
                </p>
              </div>
            </div>
            <div style={{padding:"clamp(20px,3vw,36px)"}}>
              <p className="ss" style={{fontSize:13.5,color:"rgba(199,210,254,.6)",lineHeight:1.88,maxWidth:780}}>
                UpForge tracks every significant spacetech and aerospace startup in India — from seed to orbital launch. India's $44 billion space economy target by 2030 requires dozens more companies like Skyroot and Pixxel to succeed. The next private rocket launch from Indian soil could happen any day now.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Related pages" style={{padding:"18px 0",borderTop:"2px solid var(--ink)",marginTop:"clamp(32px,5vw,56px)"}}>
            <ul style={{display:"flex",flexWrap:"wrap",gap:"8px 22px",listStyle:"none",margin:0,padding:0}}>
              {[{l:"Top AI Startups 2026",h:"/top-ai-startups"},{l:"Indian Unicorns 2026",h:"/indian-unicorns"},{l:"Defence Tech Startups",h:"/defence-startups"},{l:"DeepTech Startups India",h:"/deeptech-startups"},{l:"FinTech Startups India",h:"/fintech-startups"},{l:"Startup Registry",h:"/startup"},{l:"Submit Your Startup",h:"/submit"}].map(lnk=>(
                <li key={lnk.h}><Link href={lnk.h} className="dm" style={{fontSize:8.5,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.15em",textDecoration:"none"}}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
