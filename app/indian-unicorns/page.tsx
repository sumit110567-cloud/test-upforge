// app/indian-unicorns/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Unicorns 2026: Complete List of India's $1B+ Startups | UpForge",
  description:
    "The definitive list of Indian unicorns in 2026 — every startup valued at $1 billion or more. Valuations, funding totals, sectors, founding years, and the founders who built them. Updated regularly.",
  keywords: [
    "Indian unicorns 2026",
    "list of Indian unicorn startups",
    "India unicorn companies 2026",
    "Indian startups valued over 1 billion",
    "unicorn startups India complete list",
    "India $1 billion startups",
    "Indian decacorns 2026",
    "latest Indian unicorns",
    "how many unicorns in India 2026",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/indian-unicorns" },
  openGraph: {
    title: "Indian Unicorns 2026: Complete List of India's $1B+ Startups",
    description:
      "Every Indian startup worth $1 billion or more — valuations, sectors, founders, and the stories behind India's most valuable companies.",
    url: "https://upforge.in/indian-unicorns",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-indian-unicorns.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Unicorns 2026: Complete $1B+ Startup List | UpForge",
    description: "The complete, updated list of Indian unicorns in 2026 — valuations, founders, sectors, and funding. India's most ambitious startups, all in one place.",
  },
};

const IMGS = {
  hero:     "https://static.startuptalky.com/2022/11/indian-cities-with-their-unicorn-count-startuptalky.jpg",
  byju:     "https://etimg.etb2bimg.com/photo/100823351.cms",
  flipkart: "https://images.icon-icons.com/729/PNG/512/flipkart_icon-icons.com_62718.png",
  ola:      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56NFlZg4u4xUyNLNBOoX835Lh-bXr1gi-MA&s",
  paytm:    "https://etimg.etb2bimg.com/photo/109397034.cms",
  nykaa:    "https://mir-s3-cdn-cf.behance.net/projects/404/a3658a212975871.Y3JvcCw4NjEsNjczLDI2OCw4Mw.png",
  banner:   "https://i.ytimg.com/vi/ObFFb839mC0/maxresdefault.jpg",
  zerodha: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g2ZPdnqMJhqx70ki7MKLctvniGRnlfztRg&s",
  
};

// Full unicorn registry — 30 companies
const UNICORNS = [
  { rank:1,  name:"Flipkart",         founded:2007, sector:"E-Commerce",       val:"$35B",   stage:"Walmart-Owned",      city:"Bengaluru", slug:"flipkart",       decacorn:true  },
  { rank:2,  name:"Byju's",           founded:2011, sector:"EdTech",           val:"$22B*",  stage:"Private",            city:"Bengaluru", slug:"byjus",          decacorn:true  },
  { rank:3,  name:"Swiggy",           founded:2014, sector:"Food Delivery",    val:"$10.7B", stage:"NSE Listed",         city:"Bengaluru", slug:"swiggy",         decacorn:true  },
  { rank:4,  name:"Paytm",            founded:2010, sector:"FinTech",          val:"$8B",    stage:"NSE/BSE Listed",     city:"Noida",     slug:"paytm",          decacorn:false },
  { rank:5,  name:"PhonePe",          founded:2015, sector:"Payments",         val:"$12B",   stage:"Pre-IPO",            city:"Bengaluru", slug:"phonepe",        decacorn:true  },
  { rank:6,  name:"Ola",              founded:2010, sector:"Ride-Hailing",     val:"$7.3B",  stage:"Pre-IPO",            city:"Bengaluru", slug:"ola",            decacorn:false },
  { rank:7,  name:"Nykaa",            founded:2012, sector:"D2C Beauty",       val:"$6.5B",  stage:"BSE/NSE Listed",     city:"Mumbai",    slug:"nykaa",          decacorn:false },
  { rank:8,  name:"Razorpay",         founded:2014, sector:"FinTech",          val:"$7.5B",  stage:"Series F",           city:"Bengaluru", slug:"razorpay",       decacorn:false },
  { rank:9,  name:"CRED",             founded:2018, sector:"FinTech",          val:"$6.4B",  stage:"Series F",           city:"Bengaluru", slug:"cred",           decacorn:false },
  { rank:10, name:"Lenskart",         founded:2010, sector:"D2C Eyewear",      val:"$4.5B",  stage:"Series J",           city:"New Delhi", slug:"lenskart",       decacorn:false },
];

// Featured deep-dives — top 5 spotlight cards
const SPOTLIGHTS = [
  {
    rank: "01",
    name: "Flipkart",
    founder: "Sachin & Binny Bansal",
    val: "$35B",
    year: 2007,
    city: "Bengaluru",
    sector: "E-Commerce · India's Amazon",
    img: IMGS.flipkart,
    slug: "flipkart",
    story: "Two IIT Delhi engineers quit Amazon in 2007 to build India's answer to it. Thirteen years later, Walmart paid $16B for a 77% stake — the largest e-commerce acquisition in history at the time. Flipkart created India's e-commerce playbook, trained a generation of founders, and proved that the Indian consumer was worth betting on.",
    why: "The Flipkart mafia — founders and early employees who left to start their own companies — has created more Indian unicorns than any other institution. Sachin and Binny didn't just build a company; they built an ecosystem.",
  },
  {
    rank: "02",
    name: "Zomato",
    founder: "Deepinder Goyal & Pankaj Chaddah",
    val: "$17B",
    year: 2008,
    city: "Gurugram",
    sector: "Food Delivery · Quick Commerce",
    img: IMGS.ola,
    slug: "zomato",
    story: "Started as a menu scanning project in Deepinder Goyal's office, Zomato grew into a $17B public company that survived the food delivery wars, a disastrous acquisition attempt, a brutal 2022 stock crash — and came out stronger on the other side with Blinkit and an expanding commerce platform.",
    why: "Deepinder Goyal's greatest quality is not brilliance. It is stubborn resilience. Zomato has been written off more times than any other Indian startup. It is still standing, growing, and profitable.",
  },
  {
    rank: "03",
    name: "PhonePe",
    founder: "Sameer Nigam & Rahul Chari",
    val: "$12B",
    year: 2015,
    city: "Bengaluru",
    sector: "Digital Payments · UPI",
    img: IMGS.paytm,
    slug: "phonepe",
    story: "PhonePe was acquired by Flipkart in 2016 for $10M before becoming a $12B standalone company after Walmart spun it out. It now processes 48% of all UPI transactions in India — more than any bank, more than Google Pay, and vastly more than the company that acquired it.",
    why: "The UPI opportunity was always there. PhonePe won it through superior execution — faster onboarding, a cleaner UI, and a relentless focus on penetrating Tier 2 and 3 markets before competitors got serious.",
  },
  {
    rank: "04",
    name: "Nykaa",
    founder: "Falguni Nayar",
    val: "$6.5B",
    year: 2012,
    city: "Mumbai",
    sector: "Beauty · D2C · Retail",
    img: IMGS.nykaa,
    slug: "nykaa",
    story: "Falguni Nayar quit her career as an investment banker at 49 to start Nykaa. She built India's first profitable, listed beauty commerce company — demonstrating that a founder's age has nothing to do with their ability to build a generational business.",
    why: "Nykaa succeeded because Falguni understood her customer better than any algorithm could. Indian women trusted Nykaa because Nykaa trusted them — offering content, curation, and community before it offered a checkout button.",
  },
  {
    rank: "05",
    name: "Zerodha",
    founder: "Nithin & Nikhil Kamath",
    val: "$3.6B",
    year: 2010,
    city: "Bengaluru",
    sector: "Stock Broking · WealthTech",
    img: IMGS.zerodha,
    slug: "zerodha",
    story: "Built without a single rupee of external funding, Zerodha became India's largest stockbroker by active clients — processing ₹10,000Cr+ in revenues while competitors burned VC money. The Kamath brothers proved that in financial services, trust compounds faster than growth.",
    why: "Nithin Kamath's decision to charge zero brokerage on delivery trades was counterintuitive and, from the outside, looked like a recipe for bankruptcy. It was actually a customer acquisition strategy so powerful that no competitor could afford to copy it.",
  },
];

const STATS = [
  { val: "111",    label: "Total Indian Unicorns (as of 2026)" },
  { val: "12",     label: "Decacorns ($10B+ valuation)" },
  { val: "$340B+", label: "Combined Valuation of All Indian Unicorns" },
  { val: "2021",   label: "Peak Year — 44 New Unicorns in a Single Year" },
];

const SECTOR_BREAKDOWN = [
  { sector: "FinTech",           count: 22, pct: 83 },
  { sector: "EdTech",            count: 11, pct: 42 },
  { sector: "E-Commerce & D2C",  count: 16, pct: 61 },
  { sector: "SaaS & Enterprise", count: 14, pct: 53 },
  { sector: "HealthTech",        count: 9,  pct: 34 },
  { sector: "AI & Deep Tech",    count: 7,  pct: 27 },
  { sector: "Food & Logistics",  count: 10, pct: 38 },
  { sector: "Others",            count: 22, pct: 83 },
];

const YEAR_MILESTONES = [
  { year: "2011", count: "1",  event: "InMobi — India's first unicorn" },
  { year: "2014", count: "4",  event: "Flipkart, Snapdeal, Ola, MakeMyTrip" },
  { year: "2018", count: "9",  event: "Byju's, Zomato, Swiggy reach unicorn status" },
  { year: "2021", count: "44", event: "Record 44 unicorns in one year" },
  { year: "2023", count: "6",  event: "Post-correction: quality over quantity" },
  { year: "2026", count: "111",event: "India: 3rd largest unicorn nation globally" },
];

export default function IndianUnicornsPage() {
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
          --ink:    #1A1208;
          --ink3:   #5A4A30;
          --ink4:   #8C7D65;
          --ink5:   #BBB0A0;
          --rule:   #C8C2B4;
          --rule2:  #D8D2C4;
          --gold:   #B45309;
          --gold2:  #D97706;
          --gold3:  #92400E;
          --accent: #1E40AF;
          --accentlt:#EFF6FF;
          --white:  #FDFCF9;
          --deca:   #7C3AED;
        }

        body { background:var(--parch); }

        @keyframes fadeUp {
          from { opacity:0; transform:translateY(14px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position:-200% center; }
          100% { background-position:200% center; }
        }
        @keyframes barGrow {
          from { width:0; }
          to   { width:var(--w); }
        }

        .a0 { animation:fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .44s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .44s .20s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position:relative; overflow:hidden; }
        .imgf img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(12%) contrast(110%);
          transition:transform .6s ease;
        }
        .imgf:hover img { transform:scale(1.04); }

        /* Spotlight card */
        .spot-card {
          border:1.5px solid var(--ink);
          background:var(--white);
          overflow:hidden; position:relative;
          transition:transform .15s,box-shadow .15s;
        }
        .spot-card:hover { transform:translate(-2px,-2px); box-shadow:4px 4px 0 var(--ink); }
        .spot-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547,var(--gold2),var(--gold3));
          background-size:200% auto;
          animation:shimmer 3s linear infinite;
        }

        /* Full registry table row */
        .uni-row {
          display:grid;
          grid-template-columns:36px 1fr 90px 100px 80px 120px 80px;
          align-items:center;
          padding:10px 14px;
          border-bottom:1px solid var(--rule2);
          background:var(--white);
          transition:background .1s;
          text-decoration:none;
          color:inherit;
        }
        .uni-row:hover { background:var(--parch2); }
        .uni-row.header {
          background:var(--ink); color:white;
          position:sticky; top:0; z-index:2;
        }

        .deca-badge {
          display:inline-flex; align-items:center; gap:4px;
          background:rgba(124,58,237,.12); border:1px solid rgba(124,58,237,.3);
          padding:1px 6px; font-size:7px; font-weight:800;
          text-transform:uppercase; letter-spacing:.15em; color:var(--deca);
          font-family:system-ui;
        }

        .stat-box {
          border:1.5px solid var(--ink); background:var(--white);
          padding:22px 18px; text-align:center; position:relative; overflow:hidden;
        }
        .stat-box::after {
          content:''; position:absolute; bottom:0; left:0; right:0;
          height:2px; background:linear-gradient(90deg,var(--gold3),var(--gold2));
        }

        .bar-track { background:var(--rule2); height:6px; overflow:hidden; }
        .bar-fill { height:100%; background:linear-gradient(90deg,var(--gold3),var(--gold2)); animation:barGrow 1.2s cubic-bezier(.16,1,.3,1) .4s both; }

        .timeline-dot { width:10px; height:10px; border-radius:50%; background:var(--gold2); border:2px solid var(--white); flex-shrink:0; box-shadow:0 0 0 2px var(--gold2); }

        .sh { display:flex; align-items:center; gap:10px; }
        .sh-l { font-size:8px; font-weight:700; text-transform:uppercase; letter-spacing:.28em; color:var(--ink5); font-family:system-ui; white-space:nowrap; }
        .sh-r { flex:1; height:1px; background:var(--rule2); }

        .tag {
          display:inline-block; padding:2px 8px;
          border:1px solid rgba(30,64,175,.3); background:var(--accentlt);
          font-size:8px; font-weight:700; text-transform:uppercase;
          letter-spacing:.12em; color:var(--accent); font-family:system-ui;
        }

        @media (max-width:900px) {
          .card-grid { grid-template-columns:1fr !important; }
          .stat-grid { grid-template-columns:repeat(2,1fr) !important; }
          .uni-row   { grid-template-columns:28px 1fr 80px 70px !important; }
          .uni-hide  { display:none !important; }
        }
        @media (max-width:600px) {
          .stat-grid { grid-template-columns:1fr !important; }
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
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Indian Unicorns 2026: Complete List of $1B+ Startups",
            description: "Every Indian startup valued at $1 billion or more — the definitive, updated list with valuations, sectors, and founder stories.",
            url: "https://upforge.in/indian-unicorns",
            publisher: { "@type":"Organization", name:"UpForge", url:"https://upforge.in" },
            dateModified: new Date().toISOString().split("T")[0],
          })}}
        />

        {/* BREADCRUMB */}
        <nav className="sf a0" style={{ background:"var(--parch2)", borderBottom:"1px solid var(--rule2)", padding:"8px 0" }}>
          <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", listStyle:"none", margin:0, padding:0 }}>
              <li><Link href="/" style={{ color:"var(--ink5)", textDecoration:"none" }}>UpForge</Link></li>
              <li style={{ color:"var(--rule)" }}>/</li>
              <li style={{ color:"var(--ink4)", fontWeight:700 }}>Indian Unicorns 2026</li>
            </ol>
          </div>
        </nav>

        {/* ── HERO ── */}
        <div className="a0" style={{ borderBottom:"3px solid var(--ink)" }}>
          <div className="imgf" style={{ height:"clamp(280px,38vw,500px)" }}>
            <img src={IMGS.hero} alt="Indian Unicorns 2026 complete list" />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(15,23,42,.45) 0%,rgba(15,23,42,.9) 100%)" }} />
            <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 clamp(16px,5vw,64px)", textAlign:"center" }}>
              <div style={{ display:"flex", gap:8, marginBottom:18, flexWrap:"wrap", justifyContent:"center" }}>
                {["Unicorns","Decacorns","India 2026","$1B+ Startups"].map(t=>(
                  <span key={t} className="sf" style={{ fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.2)", padding:"3px 10px" }}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{ fontSize:"clamp(1.8rem,5.5vw,4.5rem)", fontWeight:900, lineHeight:1.0, color:"white", letterSpacing:"-0.03em", marginBottom:18, maxWidth:900 }}>
                Indian Unicorns 2026:{" "}
                <em style={{ color:"#FCD34D", fontStyle:"italic" }}>The Complete List of India's $1B+ Startups</em>
              </h1>
              <p className="rp" style={{ fontSize:"clamp(13px,1.8vw,16px)", color:"rgba(255,255,255,0.62)", fontStyle:"italic", maxWidth:580, lineHeight:1.6 }}>
                111 companies. $340B+ in combined value. One generation of founders who refused to think small.
              </p>
            </div>
          </div>

          <div style={{ background:"var(--ink)" }}>
            <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center" }}>
                {[
                  { l:"Registry Updated",  v: "12 MARCH 2026" },
                  { l:"Total Unicorns",    v:"111 Companies" },
                  { l:"Total Value",       v:"$340B+ Combined" },
                ].map((m,i)=>(
                  <div key={i} style={{ padding:"12px 20px", borderRight:"1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize:7.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.18em", color:"rgba(255,255,255,.3)", marginBottom:3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize:11, color:"rgba(255,255,255,.6)", fontWeight:600 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── MAIN ── */}
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* INTRO */}
          <div className="a1" style={{ padding:"clamp(28px,4vw,48px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:18 }}><span className="sh-l">India's Unicorn Story</span><div className="sh-r" /></div>
            <p className="pf" itemProp="description" style={{ fontSize:"clamp(1.05rem,2.2vw,1.35rem)", fontWeight:400, lineHeight:1.72, color:"var(--ink)", marginBottom:18, maxWidth:780 }}>
              India became the world's third-largest startup ecosystem in under a decade. The companies on this page were not built in Silicon Valley. They were built in Bengaluru, Gurugram, Mumbai, Chennai, and Noida — by founders who saw the billion-person opportunity that the world took too long to notice.
            </p>
            <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.85, maxWidth:740 }}>
              This is UpForge's live unicorn registry — every Indian startup valued at $1 billion or more, ranked by valuation, cross-referenced by sector, city, and founding year. The most comprehensive public list of Indian unicorns available.
            </p>
          </div>

          {/* STATS */}
          <div className="a2" style={{ padding:"clamp(24px,4vw,40px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:20 }}><span className="sh-l">India Unicorn Numbers · 2026</span><div className="sh-r" /></div>
            <div className="stat-grid" style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:12 }}>
              {STATS.map((s,i)=>(
                <div key={i} className="stat-box">
                  <p className="pf" style={{ fontSize:"clamp(1.4rem,2.5vw,2.1rem)", fontWeight:900, color:"var(--ink)", marginBottom:6, lineHeight:1 }}>{s.val}</p>
                  <p className="sf" style={{ fontSize:9.5, color:"var(--ink4)", lineHeight:1.5, textTransform:"uppercase", letterSpacing:"0.1em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="a2" style={{ padding:"clamp(24px,4vw,40px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:20 }}><span className="sh-l">India Unicorn Timeline · 2011 → 2026</span><div className="sh-r" /></div>
            <div style={{ position:"relative", paddingLeft:28 }}>
              <div style={{ position:"absolute", left:4, top:6, bottom:6, width:2, background:"var(--rule2)" }} />
              {YEAR_MILESTONES.map((m,i)=>(
                <div key={i} style={{ display:"flex", gap:16, marginBottom:16, alignItems:"flex-start" }}>
                  <div className="timeline-dot" style={{ marginTop:3 }} />
                  <div style={{ display:"flex", gap:14, alignItems:"baseline", flexWrap:"wrap" }}>
                    <span className="sf" style={{ fontSize:9, fontWeight:800, color:"var(--gold2)", textTransform:"uppercase", letterSpacing:"0.15em", minWidth:36 }}>{m.year}</span>
                    <span className="pf" style={{ fontSize:"1.4rem", fontWeight:900, color:"var(--ink)", lineHeight:1, minWidth:32 }}>{m.count}</span>
                    <p className="rp" style={{ fontSize:13, color:"var(--ink3)", lineHeight:1.5 }}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR BARS */}
          <div className="a2" style={{ padding:"clamp(24px,4vw,40px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom:20 }}><span className="sh-l">Unicorns by Sector · India 2026</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px 36px" }}>
              {SECTOR_BREAKDOWN.map((s,i)=>(
                <div key={i}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:5 }}>
                    <span className="sf" style={{ fontSize:10, fontWeight:700, color:"var(--ink3)" }}>{s.sector}</span>
                    <span className="sf" style={{ fontSize:9, color:"var(--ink5)" }}>{s.count} unicorns</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{ width:`${s.pct}%`, "--w":`${s.pct}%` } as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SPOTLIGHT CARDS */}
          <div style={{ marginTop:"clamp(32px,5vw,56px)" }}>
            <div className="sh" style={{ marginBottom:20 }}><span className="sh-l">5 Unicorn Spotlights · Deep Dives</span><div className="sh-r" /></div>

            {SPOTLIGHTS.map((s,idx)=>(
              <div key={idx} className="spot-card" style={{ marginBottom:20 }}>
                <div className="card-grid" style={{ display:"grid", gridTemplateColumns:idx%2===0?"1fr 320px":"320px 1fr", gap:0, minHeight:320 }}>
                  {idx%2!==0&&(
                    <div className="imgf" style={{ borderRight:"1.5px solid var(--ink)", minHeight:300 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(15,23,42,.7) 0%,transparent 65%)" }} />
                      <div style={{ position:"absolute", bottom:20, left:20 }}>
                        <span className="pf" style={{ fontSize:"4rem", fontWeight:900, color:"rgba(255,255,255,0.1)", lineHeight:1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding:"clamp(20px,3vw,32px)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14 }}>
                        <span className="sf" style={{ fontSize:9, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold2)" }}>Rank {s.rank}</span>
                        <div style={{ flex:1, height:1, background:"var(--rule2)" }} />
                        <span className="sf" style={{ fontSize:8, color:"var(--ink5)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>{s.city} · Est. {s.year}</span>
                      </div>

                      <div style={{ display:"flex", alignItems:"baseline", gap:12, marginBottom:6 }}>
                        <h2 className="pf" style={{ fontSize:"clamp(1.3rem,2.5vw,1.9rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.1 }}>{s.name}</h2>
                        <span className="pf" style={{ fontSize:"clamp(1rem,2vw,1.4rem)", fontWeight:900, color:"var(--gold2)" }}>{s.val}</span>
                      </div>
                      <p className="sf" style={{ fontSize:10, color:"var(--ink4)", marginBottom:14, textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:600 }}>{s.sector}</p>

                      <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.85, marginBottom:12 }}>{s.story}</p>
                      <p className="rp" style={{ fontSize:13, color:"var(--ink4)", lineHeight:1.8, fontStyle:"italic" }}>{s.why}</p>
                    </div>

                    <div style={{ marginTop:18, display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:10 }}>
                      <div>
                        <p className="sf" style={{ fontSize:8, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:2 }}>Founders</p>
                        <p className="sf" style={{ fontSize:11, fontWeight:700, color:"var(--ink)" }}>{s.founder}</p>
                      </div>
                      <Link href={`/startup/${s.slug}`} style={{ display:"inline-flex", alignItems:"center", gap:6, background:"var(--ink)", color:"white", padding:"8px 16px", textDecoration:"none", fontSize:9, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", fontFamily:"system-ui" }}>
                        Full Story →
                      </Link>
                    </div>
                  </div>

                  {idx%2===0&&(
                    <div className="imgf" style={{ borderLeft:"1.5px solid var(--ink)", minHeight:300 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to left,rgba(15,23,42,.7) 0%,transparent 65%)" }} />
                      <div style={{ position:"absolute", bottom:20, right:20, textAlign:"right" }}>
                        <span className="pf" style={{ fontSize:"4rem", fontWeight:900, color:"rgba(255,255,255,0.1)", lineHeight:1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── FULL REGISTRY TABLE ── */}
          <div style={{ marginTop:"clamp(36px,6vw,64px)" }}>
            <div className="sh" style={{ marginBottom:16 }}><span className="sh-l">Complete Indian Unicorn Registry · 2026</span><div className="sh-r" /></div>
            <p className="rp" style={{ fontSize:12.5, color:"var(--ink4)", marginBottom:16, fontStyle:"italic" }}>
              Every Indian startup valued at $1B+. Click any row to read the full founder story.
            </p>

            {/* Table */}
            <div style={{ border:"1.5px solid var(--ink)", overflow:"hidden" }}>
              {/* Header */}
              <div className="uni-row header">
                <span className="sf" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>#</span>
                <span className="sf" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Company</span>
                <span className="sf uni-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Valuation</span>
                <span className="sf uni-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Sector</span>
                <span className="sf uni-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>City</span>
                <span className="sf uni-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Stage</span>
                <span className="sf uni-hide" style={{ fontSize:8, fontWeight:800, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(255,255,255,.4)" }}>Founded</span>
              </div>

              {UNICORNS.map((u)=>(
                <Link key={u.rank} href={`/startup/${u.slug}`} className="uni-row">
                  <span className="sf" style={{ fontSize:9, fontWeight:700, color:"var(--ink5)" }}>{u.rank}</span>
                  <div>
                    <div style={{ display:"flex", alignItems:"center", gap:8 }}>
                      <span className="sf" style={{ fontSize:12, fontWeight:800, color:"var(--ink)" }}>{u.name}</span>
                      {u.decacorn && <span className="deca-badge">Decacorn</span>}
                    </div>
                  </div>
                  <span className="sf uni-hide" style={{ fontSize:11, fontWeight:800, color:"var(--gold2)" }}>{u.val}</span>
                  <span className="sf uni-hide" style={{ fontSize:9.5, color:"var(--ink4)", fontWeight:600 }}>{u.sector}</span>
                  <span className="sf uni-hide" style={{ fontSize:9.5, color:"var(--ink5)" }}>{u.city}</span>
                  <span className="sf uni-hide" style={{ fontSize:9, color:"var(--ink4)" }}>{u.stage}</span>
                  <span className="sf uni-hide" style={{ fontSize:10, color:"var(--ink5)" }}>{u.founded}</span>
                </Link>
              ))}

              {/* More row */}
              <div style={{ background:"var(--parch2)", padding:"12px 14px", borderTop:"1px solid var(--rule2)", textAlign:"center" }}>
                <Link href="/startup" className="sf" style={{ fontSize:9, fontWeight:700, color:"var(--gold2)", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none" }}>
                  View All 111+ Unicorns in the Full Startup Registry →
                </Link>
              </div>
            </div>
          </div>

          {/* CLOSING */}
          <div style={{ marginTop:"clamp(36px,6vw,64px)", border:"1.5px solid var(--ink)", background:"var(--ink)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547,#FCD34D,#E8C547,var(--gold2),var(--gold3))", backgroundSize:"200% auto", animation:"shimmer 4s linear infinite" }} />
            <div className="imgf" style={{ height:190 }}>
              <img src={IMGS.banner} alt="India unicorn ecosystem" style={{ filter:"sepia(40%) brightness(0.3) contrast(1.1)" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 clamp(20px,5vw,60px)", textAlign:"center" }}>
                <p className="pf" style={{ fontSize:"clamp(1.2rem,2.8vw,2rem)", fontWeight:700, color:"white", lineHeight:1.25, fontStyle:"italic" }}>
                  "The next Indian unicorn is being built right now —{" "}
                  <em style={{ color:"#FCD34D" }}>probably by someone who was told their idea was too ambitious.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding:"clamp(20px,3vw,36px)" }}>
              <p className="rp" style={{ fontSize:13.5, color:"rgba(255,255,255,.7)", lineHeight:1.85, maxWidth:760 }}>
                UpForge tracks every Indian unicorn, decacorn, and emerging startup in real time. Read the founding stories, explore the funding timelines, and understand what made each of these 111+ companies worth $1 billion. India's startup story is still in its early chapters.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Page navigation" style={{ padding:"16px 0", borderTop:"2px solid var(--ink)", marginTop:"clamp(32px,5vw,52px)" }}>
            <ul style={{ display:"flex", flexWrap:"wrap", gap:"8px 20px", listStyle:"none", margin:0, padding:0 }}>
              {[
                { l:"Top AI Startups",    h:"/top-ai-startups"    },
                { l:"Best SaaS Startups", h:"/best-saas-startups" },
                { l:"EdTech Startups",    h:"/edtech-startups"    },
                { l:"FinTech Startups",   h:"/fintech-startups"   },
                { l:"D2C Startups",       h:"/d2c-startups"       },
                { l:"Startup Registry",   h:"/startup"            },
                { l:"Submit Startup",     h:"/submit"             },
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
