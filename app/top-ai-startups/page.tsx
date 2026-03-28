// app/top-ai-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top AI Startups in India 2026: Complete List of AI Companies to Watch | UpForge",
  description:
    "The definitive list of India's top AI startups in 2026 — Krutrim, Sarvam AI, ideaForge, Frugal AI, Haptik and more. Generative AI, LLMs, voice AI, and enterprise automation startups with funding, founders, and valuations. Updated March 2026.",
  keywords: [
    "top AI startups India 2026",
    "best artificial intelligence startups India",
    "AI companies India 2026",
    "generative AI startups India",
    "Indian AI unicorns 2026",
    "Krutrim AI startup",
    "Sarvam AI India",
    "Indic language AI startups",
    "machine learning startups India",
    "AI startup founders India 2026",
    "funded AI startups India",
    "enterprise AI startups India",
    "top AI companies Bengaluru Mumbai",
    "India AI ecosystem 2026",
    "AI soonicorns India",
    "NLP startups India",
    "computer vision startups India",
    "AI agent startups India 2026",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/top-ai-startups" },
  openGraph: {
    title: "Top AI Startups in India 2026: Complete List of AI Companies to Watch",
    description:
      "India's most ambitious AI startups ranked and profiled — Krutrim, Sarvam AI, ideaForge and more. Funding, founders, technology focus, and growth trajectory. March 2026.",
    url: "https://upforge.in/top-ai-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-ai-startups.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top AI Startups in India 2026 | UpForge",
    description:
      "India's top AI startups in 2026 — Krutrim, Sarvam AI, Frugal AI, Haptik. Generative AI, Indic LLMs, voice AI, and enterprise automation. Funding, founders, and stories.",
  },
};

const IMGS = {
  hero:     "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=85&auto=format",
  krutrim:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD9SuT2ylgUwaMfUCq5Hk_UkYPZgiiqgyShQ&s",
  sarvam:   "https://techgenyz.com/wp-content/uploads/2026/02/sarvam-ai-global.webp",
  ideaForge:"https://uavgarage.com/wp-content/uploads/2025/06/Ideaforge-Mobile-Banner-Website-For-brand-page.jpg.webp",
  frugal:   "https://i.cdn.newsbytesapp.com/images/l99620250727181248.jpeg",
  haptik:   "https://www.haptik.ai/hs-fs/hubfs/Business%20Blog/Haptik%20Reborn/haptik-app-logo.png?width=512&name=haptik-app-logo.png",
  banner:   "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1600&q=80&auto=format",
};

const STARTUPS = [
  {
    rank: "01",
    name: "Krutrim",
    founder: "Bhavish Aggarwal",
    sector: "Generative AI · LLMs",
    city: "Bengaluru",
    founded: 2023,
    funding: "$50M+",
    stage: "Series A · Unicorn",
    slug: "krutrim",
    img: IMGS.krutrim,
    badge: "India's 1st AI Unicorn",
    what: "India's first AI unicorn, Krutrim builds large language models trained on Indic languages — enabling AI that genuinely understands the subcontinent's linguistic and cultural diversity across 22 official languages.",
    why: "Most global AI companies train on English-dominant data and retrofit multilingual capabilities. Krutrim bets that 1.4 billion Indians deserve AI that speaks their language from the ground up — and that building natively Indic AI creates a defensible moat that OpenAI or Google cannot easily replicate.",
    tags: ["LLMs", "Indic AI", "Unicorn", "GenAI"],
  },
  {
    rank: "02",
    name: "Sarvam AI",
    founder: "Vivek Raghavan & Pratyush Kumar",
    sector: "Multilingual AI · Voice Models",
    city: "Bengaluru",
    founded: 2023,
    funding: "$41M",
    stage: "Series A",
    slug: "sarvam-ai",
    img: IMGS.sarvam,
    badge: "Open-Source AI",
    what: "Sarvam AI builds open-source, full-stack AI for India — voice models, language models, and developer APIs that power Indic-language applications at scale. Its Sarvam-1 model supports 10 Indian languages natively.",
    why: "Backed by Lightspeed and Peak XV, Sarvam is quietly becoming the infrastructure layer for India's AI economy — the AWS of Indic AI. By releasing models open-source, it is training a generation of Indian developers on Indic AI tooling, creating a flywheel effect that proprietary players cannot match.",
    tags: ["Voice AI", "Open Source", "Indic Languages", "APIs"],
  },
  {
    rank: "03",
    name: "ideaForge",
    founder: "Ankit Mehta",
    sector: "Drone AI · Defence Tech",
    city: "Mumbai",
    founded: 2012,
    funding: "₹567Cr (Listed)",
    stage: "NSE Listed",
    slug: "ideaforge",
    img: IMGS.ideaForge,
    badge: "NSE Listed",
    what: "India's leading drone manufacturer uses onboard AI for autonomous navigation, target tracking, surveillance, and precision agriculture — with significant defence contracts from the Indian Army, Navy, and paramilitary forces.",
    why: "India's drone sector is projected to reach $23B by 2030. ideaForge has first-mover advantage in the most defensible segment: defence procurement, where trust, certification, and indigenous manufacturing requirements create near-impenetrable barriers to foreign competition.",
    tags: ["Drones", "Defence Tech", "Computer Vision", "Autonomous"],
  },
  {
    rank: "04",
    name: "Frugal AI",
    founder: "Gaurav Tekriwal",
    sector: "Enterprise AI · Document Automation",
    city: "Hyderabad",
    founded: 2021,
    funding: "$12M",
    stage: "Seed+",
    slug: "frugal-ai",
    img: IMGS.frugal,
    badge: "Enterprise AI",
    what: "Frugal AI builds intelligent document processing and enterprise automation tools — replacing manual knowledge work with AI agents that extract, classify, and act on unstructured data at scale across banking, insurance, and logistics sectors.",
    why: "India's BPO industry processes trillions of documents annually across BFSI, logistics, and government. Frugal AI is building the AI layer that automates this back-office economy — with a cost structure that makes it genuinely competitive against offshore manual processing.",
    tags: ["Enterprise AI", "Document AI", "Automation", "BFSI"],
  },
  {
    rank: "05",
    name: "Haptik",
    founder: "Aakrit Vaish & Swapan Rajdev",
    sector: "Conversational AI · CX Automation",
    city: "Mumbai",
    founded: 2013,
    funding: "$100M+ (JioMet)",
    stage: "Acquired · Jio",
    slug: "haptik",
    img: IMGS.haptik,
    badge: "Acquired by Jio",
    what: "Haptik builds enterprise conversational AI — WhatsApp chatbots, voice assistants, and AI agents — deployed by 500+ enterprises across 20+ countries including JioMart, CEAT, Kotak, and Bajaj Finserv.",
    why: "Acquired by Reliance for ₹700Cr, Haptik proved that Indian AI companies can build globally competitive B2B products from day one. With JioMart as a distribution channel reaching 200M+ users, Haptik's conversational AI now has the largest captive deployment of any Indian AI product.",
    tags: ["Conversational AI", "WhatsApp Bots", "Enterprise", "CX"],
  },
];

const STATS = [
  { val: "₹22,000Cr+", label: "Total AI Startup Funding in India (2024–25)" },
  { val: "3,200+",     label: "Active AI Startups in India" },
  { val: "1+",         label: "AI Unicorns — Krutrim leads, more incoming" },
  { val: "#3",         label: "India's Global Rank in AI Startup Density" },
];

const SECTORS = [
  { name: "Generative AI & LLMs",   count: 480, pct: 88 },
  { name: "Computer Vision",         count: 390, pct: 71 },
  { name: "NLP & Voice AI",          count: 340, pct: 62 },
  { name: "AI in FinTech",           count: 290, pct: 53 },
  { name: "Healthcare AI",           count: 210, pct: 38 },
  { name: "AgriTech AI",             count: 140, pct: 26 },
];

const FAQ = [
  {
    q: "Which is India's first AI unicorn?",
    a: "Krutrim, founded by Ola's Bhavish Aggarwal in 2023, became India's first AI unicorn in early 2024 — reaching a $1 billion valuation within just one year of founding. It builds large language models trained natively on Indic languages.",
  },
  {
    q: "How many AI startups are there in India in 2026?",
    a: "India has over 3,200 active AI startups as of 2026, making it the third-largest AI startup ecosystem globally after the United States and China. Bengaluru, Hyderabad, and Mumbai are the top three hubs.",
  },
  {
    q: "What is Sarvam AI and why is it important?",
    a: "Sarvam AI is an open-source AI company building full-stack Indic language models and voice APIs. Founded by IIT and IISc alumni, it is backed by Lightspeed and Peak XV, and is considered the foundational AI infrastructure layer for India's vernacular internet.",
  },
  {
    q: "Which Indian AI startups are funded in 2025–26?",
    a: "Notable recently funded Indian AI startups include Krutrim ($50M+), Sarvam AI ($41M), Neysa AI ($30M), Frugal AI ($12M), and several enterprise AI automation companies. Total AI startup funding in India crossed ₹22,000 crore in 2024–25.",
  },
  {
    q: "What makes Indian AI startups different from global AI companies?",
    a: "Indian AI startups uniquely focus on Indic language support, low-bandwidth deployment, price-sensitive enterprise customers, and vernacular voice interfaces — problems that Silicon Valley companies are not structurally incentivised to solve. This creates genuine product differentiation.",
  },
];

export default function TopAIStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,700&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,600;1,8..60,300;1,8..60,400&family=DM+Sans:wght@400;500;600;700&display=swap');

        .pf  { font-family:'Playfair Display',Georgia,serif !important; }
        .ss  { font-family:'Source Serif 4',Georgia,serif; }
        .dm  { font-family:'DM Sans',system-ui,sans-serif; }

        :root {
          --parch:   #F7F4EE;
          --parch2:  #EDE9E0;
          --parch3:  #E4DFD3;
          --ink:     #18120A;
          --ink2:    #2C2218;
          --ink3:    #4A3C28;
          --ink4:    #7A6A52;
          --ink5:    #A89880;
          --ink6:    #C8B8A2;
          --rule:    #D4CCBE;
          --rule2:   #E0D8CC;
          --gold:    #A84E00;
          --gold2:   #C96B0A;
          --gold3:   #8B3E00;
          --gold4:   #E8A830;
          --accent:  #1A3A8F;
          --accent2: #2563EB;
          --accent3: #60A5FA;
          --accentlt:#EBF1FB;
          --white:   #FDFCF9;
        }

        * { box-sizing:border-box; }
        body { background:var(--parch); margin:0; }

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

        .a0 { animation:fadeUp .5s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .5s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .5s .20s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation:fadeUp .5s .32s cubic-bezier(.16,1,.3,1) both; }

        /* ── Image Frame ── */
        .imgf { position:relative; overflow:hidden; }
        .imgf img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(8%) contrast(108%);
          transition:transform .7s ease;
        }
        .imgf:hover img { transform:scale(1.05); }

        /* ── Divider ── */
        .sh { display:flex; align-items:center; gap:12px; }
        .sh-l {
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:7.5px; font-weight:700;
          text-transform:uppercase; letter-spacing:.32em;
          color:var(--ink5); white-space:nowrap;
        }
        .sh-r { flex:1; height:1px; background:var(--rule2); }
        .sh-dot { width:4px; height:4px; background:var(--accent2); border-radius:50%; flex-shrink:0; }

        /* ── Stat box ── */
        .stat-box {
          border:1.5px solid var(--ink);
          background:var(--white);
          padding:24px 20px;
          text-align:center;
          position:relative;
          overflow:hidden;
        }
        .stat-box::after {
          content:'';
          position:absolute; bottom:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));
        }

        /* ── Startup Card — image ALWAYS LEFT ── */
        .startup-card {
          border:1.5px solid var(--ink);
          background:var(--white);
          overflow:hidden;
          position:relative;
          display:grid;
          grid-template-columns:300px 1fr;
          min-height:360px;
          transition:box-shadow .2s, transform .2s;
        }
        .startup-card:hover {
          box-shadow:5px 5px 0 var(--ink);
          transform:translate(-2px,-2px);
        }
        .startup-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3),var(--accent2),var(--accent));
          background-size:300% auto;
          animation:shimmer 4s linear infinite;
          z-index:3;
        }

        /* Image pane — always left */
        .card-img {
          position:relative;
          border-right:1.5px solid var(--ink);
          overflow:hidden;
          background:var(--ink2);
        }
        .card-img img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(12%) contrast(108%) brightness(.92);
          transition:transform .7s ease;
        }
        .startup-card:hover .card-img img { transform:scale(1.05); }
        .card-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(to right,rgba(10,20,50,.0) 0%,rgba(10,20,50,.52) 100%);
          pointer-events:none;
        }
        .card-rank {
          position:absolute; bottom:16px; left:18px;
          font-family:'Playfair Display',serif;
          font-size:5rem; font-weight:900;
          color:rgba(255,255,255,.09); line-height:1;
          user-select:none;
        }
        .card-badge {
          position:absolute; top:16px; left:16px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:7px; font-weight:700;
          text-transform:uppercase; letter-spacing:.18em;
          padding:3px 8px;
          background:var(--accent2); color:white;
          z-index:2;
        }

        /* Content pane */
        .card-body {
          padding:clamp(22px,3vw,36px);
          display:flex; flex-direction:column; justify-content:space-between;
        }

        /* Drop cap */
        .dropcap::first-letter {
          font-family:'Playfair Display',serif;
          font-size:3.2em; font-weight:900;
          float:left; line-height:.78; margin-right:5px;
          color:var(--accent2);
        }

        /* Pull quote */
        .pull-quote {
          border-left:4px solid var(--accent2);
          padding:10px 0 10px 20px;
          margin:20px 0;
        }

        /* Tag */
        .tag {
          display:inline-block; padding:2px 9px;
          border:1px solid rgba(26,58,143,.28); background:var(--accentlt);
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:8px; font-weight:700;
          text-transform:uppercase; letter-spacing:.12em; color:var(--accent);
        }

        /* Bar */
        .bar-track { background:var(--rule2); height:5px; overflow:hidden; }
        .bar-fill {
          height:100%;
          background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));
          animation:barGrow 1.3s cubic-bezier(.16,1,.3,1) .5s both;
        }

        /* FAQ */
        .faq-item { border-bottom:1px solid var(--rule2); padding:14px 0; }
        .faq-q { font-family:'DM Sans',system-ui,sans-serif; font-size:13.5px; font-weight:600; color:var(--ink); }
        .faq-a { font-family:'Source Serif 4',Georgia,serif; font-size:13px; color:var(--ink3); line-height:1.85; padding-top:10px; max-width:760px; }

        /* Reading progress */
        #rpbar {
          position:fixed; top:0; left:0; height:2px;
          background:linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3));
          z-index:999; width:0%; transition:width .1s; pointer-events:none;
        }

        @media (max-width:860px) {
          .startup-card { grid-template-columns:1fr !important; }
          .card-img { min-height:220px !important; border-right:none !important; border-bottom:1.5px solid var(--ink); }
          .stat-grid { grid-template-columns:repeat(2,1fr) !important; }
          .sector-grid { grid-template-columns:1fr !important; }
        }
        @media (max-width:560px) {
          .stat-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      <div id="rpbar" />
      <script dangerouslySetInnerHTML={{ __html:`
        window.addEventListener('scroll',function(){
          var el=document.getElementById('rpbar');
          if(!el)return;
          var d=document.documentElement;
          el.style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight))*100)+'%';
        });
      `}} />

      <main
        itemScope
        itemType="https://schema.org/CollectionPage"
        style={{ minHeight:"100vh", background:"var(--parch)" }}
      >
        {/* Schema.org */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"CollectionPage",
          name:"Top AI Startups in India 2026",
          description:"A curated, ranked list of India's top artificial intelligence startups in 2026 — Krutrim, Sarvam AI, ideaForge, Frugal AI, Haptik — by funding, technical depth, and founder pedigree.",
          url:"https://upforge.in/top-ai-startups",
          publisher:{"@type":"Organization","name":"UpForge","url":"https://upforge.in"},
          dateModified:new Date().toISOString().split("T")[0],
        })}} />

        {/* FAQ Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org",
          "@type":"FAQPage",
          mainEntity: FAQ.map(f=>({
            "@type":"Question",
            name:f.q,
            acceptedAnswer:{"@type":"Answer","text":f.a}
          }))
        })}} />

        {/* BREADCRUMB */}
        <nav className="dm a0" style={{background:"var(--parch2)",borderBottom:"1px solid var(--rule2)",padding:"9px 0"}}>
          <div style={{maxWidth:1080,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
            <ol style={{display:"flex",alignItems:"center",gap:7,fontSize:9,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.18em",listStyle:"none",margin:0,padding:0}}>
              <li><Link href="/" style={{color:"var(--ink5)",textDecoration:"none"}}>UpForge</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li style={{color:"var(--ink4)",fontWeight:700}}>Top AI Startups 2026</li>
            </ol>
          </div>
        </nav>

        {/* ══ HERO ══ */}
        <div className="a0" style={{borderBottom:"3px solid var(--ink)"}}>
          <div className="imgf" style={{height:"clamp(300px,40vw,520px)"}}>
            <img src={IMGS.hero} alt="Top AI startups in India 2026 — generative AI, LLMs, voice AI companies" />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(8,14,40,.5) 0%,rgba(8,14,40,.92) 100%)"}} />
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 clamp(18px,5vw,72px)",textAlign:"center"}}>
              <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap",justifyContent:"center"}}>
                {["Artificial Intelligence","India 2026","LLMs · Voice AI","Enterprise AI"].map(t=>(
                  <span key={t} className="dm" style={{fontSize:7.5,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.5)",border:"1px solid rgba(255,255,255,0.16)",padding:"3px 11px"}}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{fontSize:"clamp(1.9rem,5.8vw,4.6rem)",fontWeight:900,lineHeight:1.0,color:"white",letterSpacing:"-0.03em",marginBottom:20,maxWidth:920}}>
                Top AI Startups in India 2026:{" "}
                <em style={{color:"#60A5FA",fontStyle:"italic"}}>The Companies Rewriting the Future</em>
              </h1>
              <p className="ss" style={{fontSize:"clamp(13.5px,1.8vw,16.5px)",color:"rgba(255,255,255,0.55)",fontStyle:"italic",maxWidth:600,lineHeight:1.65}}>
                From Indic language models to drone intelligence — India's AI revolution, ranked and profiled.
              </p>
            </div>
          </div>

          {/* Meta strip */}
          <div style={{background:"var(--ink)"}}>
            <div style={{maxWidth:1080,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}}>
                {[
                  {l:"Registry Updated",  v:"March 2026"},
                  {l:"Category",          v:"AI · Machine Learning"},
                  {l:"Coverage",          v:"Pan-India"},
                  {l:"AI Unicorns",       v:"Krutrim + more in pipeline"},
                ].map((m,i)=>(
                  <div key={i} style={{padding:"13px 22px",borderRight:"1px solid rgba(255,255,255,.06)"}}>
                    <p className="dm" style={{fontSize:7,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"rgba(255,255,255,.28)",marginBottom:3}}>{m.l}</p>
                    <p className="dm" style={{fontSize:11,color:"rgba(255,255,255,.55)",fontWeight:600}}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAIN ══ */}
        <div style={{maxWidth:1080,margin:"0 auto",padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,100px)"}}>

          {/* INTRO */}
          <div className="a1" style={{padding:"clamp(30px,5vw,52px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">The AI Opportunity · India 2026</span>
              <div className="sh-r" />
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr clamp(180px,22vw,240px)",gap:"clamp(24px,3vw,44px)",alignItems:"start"}}>
              <div>
                <p className="pf" itemProp="description" style={{fontSize:"clamp(1.1rem,2.3vw,1.4rem)",fontWeight:400,lineHeight:1.72,color:"var(--ink)",marginBottom:18,maxWidth:760}}>
                  India is not just consuming artificial intelligence — it is beginning to produce it. In 2026, a generation of Indian AI founders is building language models, vision systems, and intelligent agents designed specifically for the world's most linguistically diverse market.
                </p>
                <p className="ss" style={{fontSize:13.5,color:"var(--ink3)",lineHeight:1.88,maxWidth:720}}>
                  This is UpForge's curated ranking of the top AI startups in India — selected on the basis of technical depth, market traction, funding quality, and founder calibre. Krutrim became India's first AI unicorn in 2024. Sarvam AI is becoming the infrastructure layer for Indic language AI. ideaForge is winning defence drone contracts. The story is just beginning.
                </p>
              </div>
              <div style={{borderLeft:"1px solid var(--rule2)",paddingLeft:"clamp(16px,2.5vw,30px)"}}>
                <p className="dm" style={{fontSize:7.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.22em",color:"var(--ink5)",marginBottom:12}}>Quick Facts · 2026</p>
                {[
                  ["AI Startups","3,200+"],
                  ["1st AI Unicorn","Krutrim (2024)"],
                  ["Top Hub","Bengaluru"],
                  ["Total Funding","₹22,000Cr+"],
                  ["Global Rank","#3"],
                  ["Fastest Sector","GenAI / LLMs"],
                ].map(([k,v])=>(
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
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">India AI Numbers · 2026</span>
              <div className="sh-r" />
            </div>
            <div className="stat-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
              {STATS.map((s,i)=>(
                <div key={i} className="stat-box">
                  <p className="pf" style={{fontSize:"clamp(1.4rem,2.5vw,2rem)",fontWeight:900,color:"var(--ink)",marginBottom:7,lineHeight:1}}>{s.val}</p>
                  <p className="dm" style={{fontSize:9,color:"var(--ink4)",lineHeight:1.5,textTransform:"uppercase",letterSpacing:"0.1em"}}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR BARS */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">AI Sector Breakdown · India 2026</span>
              <div className="sh-r" />
            </div>
            <div className="sector-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"13px 44px"}}>
              {SECTORS.map((sec,i)=>(
                <div key={i}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                    <span className="dm" style={{fontSize:10.5,fontWeight:700,color:"var(--ink3)"}}>{sec.name}</span>
                    <span className="dm" style={{fontSize:9,color:"var(--ink5)",fontWeight:600}}>{sec.count} startups</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{width:`${sec.pct}%`,"--w":`${sec.pct}%`} as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ STARTUP CARDS — IMAGE ALWAYS LEFT ══ */}
          <div style={{marginTop:"clamp(32px,5vw,58px)"}}>
            <div className="sh" style={{marginBottom:22}}>
              <div className="sh-dot" />
              <span className="sh-l">Featured AI Startups · India 2026</span>
              <div className="sh-r" />
            </div>
            <p className="ss" style={{fontSize:13,color:"var(--ink4)",marginBottom:26,fontStyle:"italic"}}>
              Five companies building the technology that will define India's AI decade — the founders, the bets, and the breakthroughs.
            </p>

            {STARTUPS.map((s,idx)=>(
              <article key={idx} className="startup-card" style={{marginBottom:22}} itemScope itemType="https://schema.org/Organization">

                {/* IMAGE — always on the left */}
                <div className="card-img">
                  <img src={s.img} alt={`${s.name} — top AI startup India 2026`} itemProp="logo" />
                  <div className="card-img-overlay" />
                  <span className="card-rank">{s.rank}</span>
                  <span className="card-badge">{s.badge}</span>
                </div>

                {/* CONTENT */}
                <div className="card-body">
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                      <span className="dm" style={{fontSize:8,fontWeight:800,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--accent2)"}}>Rank {s.rank}</span>
                      <div style={{flex:1,height:1,background:"var(--rule2)"}} />
                      <span className="dm" style={{fontSize:7.5,color:"var(--ink5)",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase"}}>{s.city} · {s.founded}</span>
                    </div>

                    <div style={{display:"flex",alignItems:"baseline",gap:10,marginBottom:5}}>
                      <h2 className="pf" itemProp="name" style={{fontSize:"clamp(1.3rem,2.6vw,2rem)",fontWeight:700,color:"var(--ink)",lineHeight:1.1}}>{s.name}</h2>
                      <span className="dm" style={{fontSize:11,fontWeight:800,color:"var(--accent2)",padding:"1px 8px",border:"1px solid rgba(37,99,235,.2)",background:"var(--accentlt)"}}>{s.funding}</span>
                    </div>
                    <p className="dm" style={{fontSize:9.5,color:"var(--ink4)",marginBottom:18,textTransform:"uppercase",letterSpacing:"0.14em",fontWeight:600}}>{s.sector}</p>

                    <p className="ss dropcap" style={{fontSize:13.5,color:"var(--ink2)",lineHeight:1.88,marginBottom:0}}>{s.what}</p>

                    <div className="pull-quote">
                      <p className="ss" style={{fontSize:13,color:"var(--ink3)",lineHeight:1.82,fontStyle:"italic",margin:0}}>{s.why}</p>
                    </div>

                    <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:4}}>
                      {s.tags.map(t=><span key={t} className="tag">{t}</span>)}
                    </div>
                  </div>

                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,paddingTop:16,borderTop:"1px solid var(--rule2)",marginTop:16}}>
                    <div style={{display:"flex",gap:22}}>
                      <div>
                        <p className="dm" style={{fontSize:7.5,textTransform:"uppercase",letterSpacing:"0.14em",color:"var(--ink5)",marginBottom:2}}>Funding</p>
                        <p className="dm" style={{fontSize:12,fontWeight:800,color:"var(--ink)"}}>{s.funding}</p>
                      </div>
                      <div>
                        <p className="dm" style={{fontSize:7.5,textTransform:"uppercase",letterSpacing:"0.14em",color:"var(--ink5)",marginBottom:2}}>Stage</p>
                        <p className="dm" style={{fontSize:12,fontWeight:800,color:"var(--ink)"}}>{s.stage}</p>
                      </div>
                      <div>
                        <p className="dm" style={{fontSize:7.5,textTransform:"uppercase",letterSpacing:"0.14em",color:"var(--ink5)",marginBottom:2}}>Founded by</p>
                        <p className="dm" style={{fontSize:12,fontWeight:700,color:"var(--ink3)"}} itemProp="founder">{s.founder}</p>
                      </div>
                    </div>
                    <Link href={`/startup/${s.slug}`} style={{display:"inline-flex",alignItems:"center",gap:7,background:"var(--ink)",color:"white",padding:"9px 18px",textDecoration:"none",fontSize:8.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",fontFamily:"'DM Sans',system-ui"}}>
                      Full Profile →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ══ FAQ ══ */}
          <div style={{marginTop:"clamp(36px,6vw,68px)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">Frequently Asked Questions · India AI Startups</span>
              <div className="sh-r" />
            </div>
            <div style={{border:"1.5px solid var(--ink)",background:"var(--white)",overflow:"hidden"}}>
              <div style={{background:"var(--ink)",padding:"12px 20px"}}>
                <span className="dm" style={{fontSize:9,fontWeight:700,color:"rgba(255,255,255,.45)",textTransform:"uppercase",letterSpacing:"0.2em"}}>Questions · People Also Ask</span>
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

          {/* ══ CLOSING BANNER ══ */}
          <div style={{marginTop:"clamp(36px,6vw,68px)",border:"1.5px solid var(--ink)",background:"var(--ink)",position:"relative",overflow:"hidden"}}>
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--accent),var(--accent2),var(--accent3),var(--accent2),var(--accent))",backgroundSize:"300% auto",animation:"shimmer 5s linear infinite"}} />
            <div className="imgf" style={{height:200}}>
              <img src={IMGS.banner} alt="India AI ecosystem 2026" style={{filter:"sepia(30%) brightness(0.28) contrast(1.1)"}} />
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 clamp(24px,5vw,72px)",textAlign:"center"}}>
                <p className="pf" style={{fontSize:"clamp(1.2rem,2.9vw,2.1rem)",fontWeight:700,color:"white",lineHeight:1.22,fontStyle:"italic"}}>
                  "India is not just the world's largest democracy. In 2026, it is becoming its most ambitious{" "}
                  <em style={{color:"#60A5FA"}}>AI laboratory.</em>"
                </p>
              </div>
            </div>
            <div style={{padding:"clamp(20px,3vw,36px)"}}>
              <p className="ss" style={{fontSize:13.5,color:"rgba(255,255,255,.65)",lineHeight:1.88,maxWidth:780}}>
                UpForge tracks every significant AI startup in India — from seed to IPO. Explore the full registry, read founder stories, and understand what is actually being built. The next Krutrim is being founded right now — probably in a Bengaluru co-working space by someone who just quit a FAANG job.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Related pages" style={{padding:"18px 0",borderTop:"2px solid var(--ink)",marginTop:"clamp(32px,5vw,56px)"}}>
            <ul style={{display:"flex",flexWrap:"wrap",gap:"8px 22px",listStyle:"none",margin:0,padding:0}}>
              {[
                {l:"Indian Unicorns 2026",  h:"/indian-unicorns"},
                {l:"FinTech Startups",       h:"/fintech-startups"},
                {l:"SaaS Startups India",    h:"/best-saas-startups"},
                {l:"EdTech Startups",        h:"/edtech-startups"},
                {l:"D2C Startups India",     h:"/d2c-startups"},
                {l:"Startup Registry",       h:"/startup"},
                {l:"Submit Your Startup",    h:"/submit"},
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
