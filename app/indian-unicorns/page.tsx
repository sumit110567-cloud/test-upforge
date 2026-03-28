// app/indian-unicorns/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Unicorns 2026: Complete List of 126 Startups Worth $1B+ | UpForge",
  description:
    "The definitive list of all 126 Indian unicorn startups in 2026 — valuations, funding rounds, founders, sectors, and cities. Includes Flipkart IPO, PhonePe IPO, Zepto, Groww, and every $1B+ company in India. Updated March 2026.",
  keywords: [
    "Indian unicorns 2026",
    "list of Indian unicorn startups 2026",
    "India unicorn companies complete list",
    "how many unicorns in India 2026",
    "Indian startups valued over 1 billion",
    "Indian decacorns 2026",
    "Flipkart IPO 2026",
    "PhonePe IPO 2026",
    "Zepto unicorn valuation",
    "Groww startup valuation",
    "quick commerce unicorns India",
    "Indian AI startups unicorn",
    "India $1 billion startups",
    "unicorn startup meaning India",
    "Bengaluru unicorn startups",
    "India 3rd largest startup ecosystem",
    "Indian soonicorns 2026",
    "startup valuation India 2026",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/indian-unicorns" },
  openGraph: {
    title: "Indian Unicorns 2026: Complete List of 126 Startups Worth $1B+",
    description:
      "Every Indian startup worth $1 billion or more — valuations, sectors, founders, and the stories behind India's most valuable companies. Updated March 2026.",
    url: "https://upforge.in/indian-unicorns",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-indian-unicorns.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indian Unicorns 2026: All 126 Startups Worth $1B+ | UpForge",
    description:
      "The complete, updated list of Indian unicorns in 2026 — valuations, founders, sectors, and funding. Includes Zepto, Groww, PhonePe IPO, Flipkart IPO and more.",
  },
};

const IMGS = {
  hero:     "https://static.startuptalky.com/2022/11/indian-cities-with-their-unicorn-count-startuptalky.jpg",
  flipkart: "https://images.icon-icons.com/729/PNG/512/flipkart_icon-icons.com_62718.png",
  ola:      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR56NFlZg4u4xUyNLNBOoX835Lh-bXr1gi-MA&s",
  paytm:    "https://etimg.etb2bimg.com/photo/109397034.cms",
  nykaa:    "https://mir-s3-cdn-cf.behance.net/projects/404/a3658a212975871.Y3JvcCw4NjEsNjczLDI2OCw4Mw.png",
  banner:   "https://i.ytimg.com/vi/ObFFb839mC0/maxresdefault.jpg",
  zerodha:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9g2ZPdnqMJhqx70ki7MKLctvniGRnlfztRg&s",
};

const UNICORNS = [
  { rank:1,  name:"Flipkart",         founded:2007, sector:"E-Commerce",         val:"$35B",   stage:"Pre-IPO (2026)",      city:"Bengaluru", slug:"flipkart",       decacorn:true  },
  { rank:2,  name:"Byju's",           founded:2011, sector:"EdTech",             val:"$22B*",  stage:"Private",             city:"Bengaluru", slug:"byjus",          decacorn:true  },
  { rank:3,  name:"Swiggy",           founded:2014, sector:"Food Delivery",      val:"$10.7B", stage:"NSE Listed",          city:"Bengaluru", slug:"swiggy",         decacorn:true  },
  { rank:4,  name:"PhonePe",          founded:2015, sector:"Payments / UPI",     val:"$12B",   stage:"IPO Filed (2025)",    city:"Bengaluru", slug:"phonepe",        decacorn:true  },
  { rank:5,  name:"Paytm",            founded:2010, sector:"FinTech",            val:"$8B",    stage:"NSE/BSE Listed",      city:"Noida",     slug:"paytm",          decacorn:false },
  { rank:6,  name:"OYO",              founded:2013, sector:"Hospitality",        val:"$9B",    stage:"Pre-IPO",             city:"Gurugram",  slug:"oyo",            decacorn:false },
  { rank:7,  name:"Ola",              founded:2010, sector:"Ride-Hailing",       val:"$7.3B",  stage:"Pre-IPO",             city:"Bengaluru", slug:"ola",            decacorn:false },
  { rank:8,  name:"Nykaa",            founded:2012, sector:"D2C Beauty",         val:"$6.5B",  stage:"BSE/NSE Listed",      city:"Mumbai",    slug:"nykaa",          decacorn:false },
  { rank:9,  name:"Razorpay",         founded:2014, sector:"FinTech",            val:"$7.5B",  stage:"Series F",            city:"Bengaluru", slug:"razorpay",       decacorn:false },
  { rank:10, name:"CRED",             founded:2018, sector:"FinTech",            val:"$6.4B",  stage:"Series F",            city:"Bengaluru", slug:"cred",           decacorn:false },
  { rank:11, name:"Groww",            founded:2016, sector:"WealthTech",         val:"$3B",    stage:"Pre-IPO",             city:"Bengaluru", slug:"groww",          decacorn:false },
  { rank:12, name:"Zepto",            founded:2021, sector:"Quick Commerce",     val:"$5B",    stage:"Series F",            city:"Mumbai",    slug:"zepto",          decacorn:false },
  { rank:13, name:"Dream11",          founded:2008, sector:"Fantasy Sports",     val:"$8B",    stage:"Series D",            city:"Mumbai",    slug:"dream11",        decacorn:false },
  { rank:14, name:"Lenskart",         founded:2010, sector:"D2C Eyewear",        val:"$4.5B",  stage:"Series J",            city:"New Delhi", slug:"lenskart",       decacorn:false },
  { rank:15, name:"Meesho",           founded:2015, sector:"Social Commerce",    val:"$3.9B",  stage:"Series F",            city:"Bengaluru", slug:"meesho",         decacorn:false },
];

const SPOTLIGHTS = [
  {
    rank: "01",
    name: "Flipkart",
    founder: "Sachin & Binny Bansal",
    val: "$35B",
    year: 2007,
    city: "Bengaluru",
    sector: "E-Commerce",
    badge: "IPO 2026",
    img: IMGS.flipkart,
    slug: "flipkart",
    story: "Two IIT Delhi engineers quit Amazon in 2007 to build India's answer to it. Thirteen years later, Walmart paid $16B for a 77% stake — the largest e-commerce acquisition in history at the time. Flipkart is now expected to list on Indian exchanges in 2026 as the country's largest-ever startup IPO, after completing its long-planned reverse flip from Singapore back to India.",
    why: "The 'Flipkart mafia' — founders and early employees who left to start their own companies — has produced more Indian unicorns than any other institution. Sachin and Binny didn't just build a company; they built an ecosystem that trained an entire generation of founders.",
  },
  {
    rank: "02",
    name: "Zomato",
    founder: "Deepinder Goyal & Pankaj Chaddah",
    val: "$17B",
    year: 2008,
    city: "Gurugram",
    sector: "Food Delivery · Quick Commerce",
    badge: "NSE Listed",
    img: IMGS.ola,
    slug: "zomato",
    story: "Started as a menu-scanning project in Deepinder Goyal's office, Zomato grew into a $17B public company that survived the food delivery wars, a brutal 2022 stock crash, and came out profitable on the other side — powered by Blinkit's quick commerce dominance and an expanding commerce platform.",
    why: "Deepinder Goyal's greatest quality is not brilliance. It is stubborn resilience. Zomato has been written off more times than any other Indian startup. It remains standing, growing, and profitable — and Blinkit is now arguably worth more than the food business that started it all.",
  },
  {
    rank: "03",
    name: "PhonePe",
    founder: "Sameer Nigam & Rahul Chari",
    val: "$12B",
    year: 2015,
    city: "Bengaluru",
    sector: "Digital Payments · UPI",
    badge: "IPO Filed",
    img: IMGS.paytm,
    slug: "phonepe",
    story: "Acquired by Flipkart in 2016 for $10M, PhonePe is now a $12B standalone company after Walmart spun it out. It processes 48% of all UPI transactions in India. In September 2025, PhonePe filed draft IPO papers through SEBI's confidential pre-filing route — a Rs 12,000 crore public issue that will be one of India's largest fintech listings.",
    why: "The UPI opportunity was always there. PhonePe won it through superior execution — faster onboarding, a cleaner UI, and a relentless focus on Tier 2 and Tier 3 penetration before competitors got serious. Being spun out of Flipkart gave it the freedom to move like a startup while keeping Walmart's balance sheet as backstop.",
  },
  {
    rank: "04",
    name: "Nykaa",
    founder: "Falguni Nayar",
    val: "$6.5B",
    year: 2012,
    city: "Mumbai",
    sector: "Beauty · D2C · Retail",
    badge: "BSE/NSE Listed",
    img: IMGS.nykaa,
    slug: "nykaa",
    story: "Falguni Nayar quit her career as an investment banker at 49 to start Nykaa. She built India's first profitable, listed beauty commerce company — proof that a founder's age has no bearing on their ability to build a generational business. Nykaa now runs physical stores across 22 cities alongside its dominant digital platform.",
    why: "Nykaa succeeded because Falguni understood her customer better than any algorithm could. Indian women trusted Nykaa because Nykaa trusted them — offering content, curation, and community before it offered a checkout button. That sequence is almost never replicated correctly.",
  },
  {
    rank: "05",
    name: "Zerodha",
    founder: "Nithin & Nikhil Kamath",
    val: "$3.6B",
    year: 2010,
    city: "Bengaluru",
    sector: "Stock Broking · WealthTech",
    badge: "Bootstrapped",
    img: IMGS.zerodha,
    slug: "zerodha",
    story: "Built without a single rupee of external funding, Zerodha became India's largest stockbroker by active clients — with ₹10,000Cr+ in annual revenues while competitors burned VC money. The Kamath brothers proved that in financial services, trust compounds faster than growth hacking ever could.",
    why: "Nithin Kamath's decision to charge zero brokerage on delivery trades looked like a recipe for bankruptcy. It was actually a customer acquisition strategy so powerful that no competitor could afford to copy it — and those who tried lost money doing so. Zerodha remains the only large Indian fintech that needs no external capital.",
  },
];

const STATS = [
  { val: "126",    label: "Total Indian Unicorns (March 2026)" },
  { val: "12",     label: "Decacorns ($10B+ valuation)" },
  { val: "$365B+", label: "Combined Valuation of All Indian Unicorns" },
  { val: "2021",   label: "Peak Year — 44 New Unicorns in One Year" },
];

const SECTOR_BREAKDOWN = [
  { sector: "FinTech & Payments",    count: 24, pct: 90 },
  { sector: "E-Commerce & D2C",      count: 18, pct: 68 },
  { sector: "SaaS & Enterprise",     count: 15, pct: 57 },
  { sector: "EdTech",                count: 11, pct: 42 },
  { sector: "Food & Quick Commerce", count: 12, pct: 46 },
  { sector: "HealthTech",            count: 9,  pct: 34 },
  { sector: "AI & Deep Tech",        count: 8,  pct: 30 },
  { sector: "Others",                count: 29, pct: 83 },
];

const YEAR_MILESTONES = [
  { year: "2011", count: "1",   event: "InMobi — India's first unicorn, valued at $1B" },
  { year: "2014", count: "4",   event: "Flipkart, Snapdeal, Ola, MakeMyTrip join the club" },
  { year: "2018", count: "9",   event: "Byju's, Zomato, Swiggy all reach unicorn status" },
  { year: "2021", count: "44",  event: "Record: 44 new unicorns in a single calendar year" },
  { year: "2023", count: "6",   event: "Post-funding-winter correction — quality over quantity" },
  { year: "2025", count: "125", event: "India crosses 125 unicorns; $365B combined value" },
  { year: "2026", count: "126+",event: "Neysa AI latest entry; Flipkart & PhonePe eye IPO" },
];

const FAQ = [
  {
    q: "How many unicorns does India have in 2026?",
    a: "As of March 2026, India has 126 unicorn startups — companies valued at $1 billion or more — making it the world's third-largest unicorn nation after the United States and China.",
  },
  {
    q: "Which is the most valuable Indian unicorn in 2026?",
    a: "Flipkart remains India's most valuable startup at approximately $35 billion, ahead of PhonePe ($12B), Swiggy ($10.7B), and Byju's ($22B — though under financial restructuring).",
  },
  {
    q: "Which Indian unicorns are going public (IPO) in 2026?",
    a: "Flipkart, PhonePe, and Zepto are the most anticipated Indian unicorn IPOs of 2026. PhonePe has already filed draft papers with SEBI. Flipkart completed its reverse flip to India in preparation for listing.",
  },
  {
    q: "What is a decacorn? Which Indian startups are decacorns?",
    a: "A decacorn is a private startup valued at $10 billion or more. India has 12 decacorns, including Flipkart, Byju's, PhonePe, Swiggy, and Zomato (now public).",
  },
  {
    q: "Which city has the most unicorns in India?",
    a: "Bengaluru leads with over 40% of all Indian unicorns — home to Flipkart, Swiggy, PhonePe, Razorpay, CRED, Zerodha, and dozens more. Mumbai and Gurugram are second and third.",
  },
];

export default function IndianUnicornsPage() {
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
          --accent:  #1A3A6B;
          --accentlt:#EBF1FB;
          --white:   #FDFCF9;
          --deca:    #6528C8;
          --ipo:     #0D6E3A;
          --ipobt:   #D8F0E4;
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
        @keyframes fadeIn {
          from { opacity:0; } to { opacity:1; }
        }

        .a0 { animation:fadeUp .5s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation:fadeUp .5s .12s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation:fadeUp .5s .22s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation:fadeUp .5s .34s cubic-bezier(.16,1,.3,1) both; }

        /* ── Image Frame ── */
        .imgf { position:relative; overflow:hidden; }
        .imgf img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(10%) contrast(108%);
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
        .sh-dot { width:4px; height:4px; background:var(--gold2); border-radius:50%; flex-shrink:0; }

        /* ── Stat Box ── */
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
          background:linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold4));
        }

        /* ── Spotlight Card — always image LEFT ── */
        .spot-card {
          border:1.5px solid var(--ink);
          background:var(--white);
          overflow:hidden;
          position:relative;
          display:grid;
          grid-template-columns:300px 1fr;
          min-height:360px;
          transition:box-shadow .2s, transform .2s;
        }
        .spot-card:hover {
          box-shadow:5px 5px 0 var(--ink);
          transform:translate(-2px,-2px);
        }
        .spot-card::before {
          content:''; position:absolute; top:0; left:0; right:0; height:3px;
          background:linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold4),var(--gold2),var(--gold3));
          background-size:300% auto;
          animation:shimmer 4s linear infinite;
          z-index:3;
        }

        /* Image pane — always left column */
        .spot-img {
          position:relative;
          border-right:1.5px solid var(--ink);
          overflow:hidden;
          background:var(--ink2);
        }
        .spot-img img {
          position:absolute; inset:0; width:100%; height:100%;
          object-fit:cover; object-position:center;
          filter:sepia(14%) contrast(108%) brightness(.92);
          transition:transform .7s ease;
        }
        .spot-card:hover .spot-img img { transform:scale(1.05); }
        .spot-img-overlay {
          position:absolute; inset:0;
          background:linear-gradient(
            to right,
            rgba(18,12,6,.0) 0%,
            rgba(18,12,6,.55) 100%
          );
          pointer-events:none;
        }
        .spot-rank {
          position:absolute; bottom:16px; left:18px;
          font-family:'Playfair Display',serif;
          font-size:5rem; font-weight:900;
          color:rgba(255,255,255,.10);
          line-height:1;
          user-select:none;
        }
        .spot-badge {
          position:absolute; top:16px; left:16px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:7px; font-weight:700;
          text-transform:uppercase; letter-spacing:.2em;
          padding:3px 8px;
          background:var(--gold2); color:white;
          z-index:2;
        }

        /* Content pane */
        .spot-body {
          padding:clamp(22px,3vw,36px);
          display:flex; flex-direction:column; justify-content:space-between;
          position:relative;
        }

        /* Drop cap for first story paragraph */
        .dropcap::first-letter {
          font-family:'Playfair Display',serif;
          font-size:3.2em; font-weight:900;
          float:left; line-height:.78; margin-right:5px;
          color:var(--gold2);
        }

        /* ── Registry Table Row ── */
        .uni-row {
          display:grid;
          grid-template-columns:38px 1fr 100px 110px 84px 124px 72px;
          align-items:center;
          padding:11px 16px;
          border-bottom:1px solid var(--rule2);
          background:var(--white);
          transition:background .1s;
          text-decoration:none;
          color:inherit;
        }
        .uni-row:hover { background:var(--parch2); }
        .uni-row.header {
          background:var(--ink);
          color:rgba(255,255,255,.45);
          position:sticky; top:0; z-index:4;
        }

        /* ── Badges ── */
        .badge-deca {
          display:inline-flex; align-items:center; gap:3px;
          background:rgba(101,40,200,.1); border:1px solid rgba(101,40,200,.25);
          padding:1px 6px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:6.5px; font-weight:800;
          text-transform:uppercase; letter-spacing:.18em; color:var(--deca);
        }
        .badge-ipo {
          display:inline-flex; align-items:center;
          background:var(--ipobt); border:1px solid rgba(13,110,58,.25);
          padding:1px 6px;
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:6.5px; font-weight:800;
          text-transform:uppercase; letter-spacing:.18em; color:var(--ipo);
        }
        .tag {
          display:inline-block; padding:2px 9px;
          border:1px solid rgba(26,58,107,.28); background:var(--accentlt);
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:8px; font-weight:700;
          text-transform:uppercase; letter-spacing:.12em; color:var(--accent);
        }

        /* ── Bar Chart ── */
        .bar-track { background:var(--rule2); height:5px; overflow:hidden; }
        .bar-fill {
          height:100%;
          background:linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold4));
          animation:barGrow 1.3s cubic-bezier(.16,1,.3,1) .5s both;
        }

        /* ── Timeline ── */
        .tl-dot {
          width:9px; height:9px; border-radius:50%;
          background:var(--gold2); border:2px solid var(--white);
          box-shadow:0 0 0 2px var(--gold2);
          flex-shrink:0; margin-top:4px;
        }

        /* ── FAQ Accordion ── */
        .faq-item {
          border-bottom:1px solid var(--rule2);
          padding:14px 0;
        }
        .faq-q {
          font-family:'DM Sans',system-ui,sans-serif;
          font-size:13.5px; font-weight:600; color:var(--ink);
          cursor:pointer; display:flex; justify-content:space-between; align-items:center;
        }
        .faq-a {
          font-family:'Source Serif 4',Georgia,serif;
          font-size:13px; color:var(--ink3); line-height:1.85;
          padding-top:10px; max-width:760px;
        }

        /* ── Pull Quote ── */
        .pull-quote {
          border-left:4px solid var(--gold2);
          padding:12px 0 12px 22px;
          margin:24px 0;
        }

        /* ── Reading Progress Bar ── */
        #rpbar {
          position:fixed; top:0; left:0; height:2px;
          background:linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold4));
          z-index:999; width:0%;
          transition:width .1s;
          pointer-events:none;
        }

        /* ── Responsive ── */
        @media (max-width:860px) {
          .spot-card { grid-template-columns:1fr !important; }
          .spot-img  { min-height:220px !important; border-right:none !important; border-bottom:1.5px solid var(--ink); }
          .uni-row   { grid-template-columns:30px 1fr 90px 80px !important; }
          .uni-hide  { display:none !important; }
          .stat-grid { grid-template-columns:repeat(2,1fr) !important; }
        }
        @media (max-width:560px) {
          .stat-grid { grid-template-columns:1fr !important; }
          .sector-grid { grid-template-columns:1fr !important; }
        }
      `}</style>

      {/* Reading progress bar */}
      <div id="rpbar" />
      <script dangerouslySetInnerHTML={{ __html: `
        window.addEventListener('scroll',function(){
          var el=document.getElementById('rpbar');
          if(!el)return;
          var d=document.documentElement;
          var pct=(d.scrollTop/(d.scrollHeight-d.clientHeight))*100;
          el.style.width=pct+'%';
        });
      `}} />

      <main
        itemScope
        itemType="https://schema.org/CollectionPage"
        style={{ minHeight:"100vh", background:"var(--parch)" }}
      >
        {/* Schema.org */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"CollectionPage",
            name:"Indian Unicorns 2026: Complete List of 126 Startups Worth $1B+",
            description:"Every Indian startup valued at $1 billion or more — the definitive, updated list with valuations, sectors, and founder stories. March 2026.",
            url:"https://upforge.in/indian-unicorns",
            publisher:{"@type":"Organization","name":"UpForge","url":"https://upforge.in"},
            dateModified:new Date().toISOString().split("T")[0],
            mainEntity:{
              "@type":"ItemList",
              numberOfItems:126,
              itemListElement:[
                {
                  "@type":"ListItem", position:1,
                  item:{"@type":"Organization","name":"Flipkart","url":"https://flipkart.com","description":"India's largest e-commerce company, valued at $35B, founded 2007"}
                },
              ]
            }
          })}}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context":"https://schema.org",
            "@type":"FAQPage",
            mainEntity: FAQ.map(f=>({
              "@type":"Question",
              name:f.q,
              acceptedAnswer:{"@type":"Answer","text":f.a}
            }))
          })}}
        />

        {/* BREADCRUMB */}
        <nav className="dm a0" style={{background:"var(--parch2)",borderBottom:"1px solid var(--rule2)",padding:"9px 0"}}>
          <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
            <ol style={{display:"flex",alignItems:"center",gap:7,fontSize:9,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.18em",listStyle:"none",margin:0,padding:0}}>
              <li><Link href="/" style={{color:"var(--ink5)",textDecoration:"none"}}>UpForge</Link></li>
              <li style={{color:"var(--rule)"}}>›</li>
              <li style={{color:"var(--ink4)",fontWeight:700}}>Indian Unicorns 2026</li>
            </ol>
          </div>
        </nav>

        {/* ══════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════ */}
        <div className="a0" style={{borderBottom:"3px solid var(--ink)"}}>
          <div className="imgf" style={{height:"clamp(300px,40vw,520px)"}}>
            <img src={IMGS.hero} alt="Indian unicorn startups 2026 — complete list of 126 billion-dollar companies" />
            <div style={{position:"absolute",inset:0,background:"linear-gradient(to bottom,rgba(10,8,4,.5) 0%,rgba(10,8,4,.92) 100%)"}} />
            <div style={{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"0 clamp(18px,5vw,72px)",textAlign:"center"}}>
              <div style={{display:"flex",gap:8,marginBottom:20,flexWrap:"wrap",justifyContent:"center"}}>
                {["126 Unicorns","$365B Value","India 2026","IPO Season"].map(t=>(
                  <span key={t} className="dm" style={{fontSize:7.5,fontWeight:700,letterSpacing:"0.22em",textTransform:"uppercase",color:"rgba(255,255,255,0.55)",border:"1px solid rgba(255,255,255,0.18)",padding:"3px 11px"}}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{fontSize:"clamp(1.9rem,5.8vw,4.6rem)",fontWeight:900,lineHeight:1.0,color:"white",letterSpacing:"-0.03em",marginBottom:20,maxWidth:920}}>
                Indian Unicorns 2026:{" "}
                <em style={{color:"#F5C842",fontStyle:"italic"}}>The Complete List of India's $1B+ Startups</em>
              </h1>
              <p className="ss" style={{fontSize:"clamp(13.5px,1.8vw,16.5px)",color:"rgba(255,255,255,0.58)",fontStyle:"italic",maxWidth:600,lineHeight:1.65}}>
                126 companies. $365B+ in combined value. One generation of founders who refused to think small.
              </p>
            </div>
          </div>

          {/* Metadata bar */}
          <div style={{background:"var(--ink)"}}>
            <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px)"}}>
              <div style={{display:"flex",flexWrap:"wrap",alignItems:"stretch"}}>
                {[
                  {l:"Registry Updated", v:"March 2026"},
                  {l:"Total Unicorns",   v:"126 Companies"},
                  {l:"Combined Value",   v:"$365B+"},
                  {l:"IPOs Expected",    v:"Flipkart · PhonePe · Zepto"},
                ].map((m,i)=>(
                  <div key={i} style={{padding:"13px 22px",borderRight:"1px solid rgba(255,255,255,.06)"}}>
                    <p className="dm" style={{fontSize:7,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.2em",color:"rgba(255,255,255,.28)",marginBottom:3}}>{m.l}</p>
                    <p className="dm" style={{fontSize:11,color:"rgba(255,255,255,.58)",fontWeight:600}}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════════════
            MAIN CONTENT
        ══════════════════════════════════════════════ */}
        <div style={{maxWidth:1100,margin:"0 auto",padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,100px)"}}>

          {/* INTRO — magazine lede */}
          <div className="a1" style={{padding:"clamp(30px,5vw,52px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">India's Unicorn Story</span>
              <div className="sh-r" />
            </div>

          <div style={{display:"grid",gridTemplateColumns:"1fr clamp(180px,22vw,240px)",gap:"clamp(24px,3vw,44px)",alignItems:"start"}}>
            <div>
              <p className="pf" itemProp="description" style={{fontSize:"clamp(1.1rem,2.3vw,1.4rem)",fontWeight:400,lineHeight:1.72,color:"var(--ink)",marginBottom:18,maxWidth:780}}>
                India became the world&apos;s third-largest startup ecosystem in under a decade.
              </p>
              <p className="ss" style={{fontSize:13.5,color:"var(--ink3)",lineHeight:1.88,maxWidth:740}}>
                {"This is UpForge's live unicorn registry — every Indian startup valued at $1 billion or more."}
              </p> 
            </div>
              <div style={{borderLeft:"1px solid var(--rule2)",paddingLeft:"clamp(16px,2.5vw,30px)"}}>
                <p className="dm" style={{fontSize:7.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.22em",color:"var(--ink5)",marginBottom:12}}>Quick Facts · 2026</p>
                {[
                  ["Founded","2011 (InMobi)"],
                  ["Newest","Neysa AI (Feb 2026)"],
                  ["Top City","Bengaluru (40%+)"],
                  ["Top Sector","FinTech (24)"],
                  ["Top Investor","Sequoia (20+)"],
                  ["IPO Season","2026"],
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
              <span className="sh-l">India Unicorn Numbers · March 2026</span>
              <div className="sh-r" />
            </div>
            <div className="stat-grid" style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:12}}>
              {STATS.map((s,i)=>(
                <div key={i} className="stat-box">
                  <p className="pf" style={{fontSize:"clamp(1.5rem,2.8vw,2.3rem)",fontWeight:900,color:"var(--ink)",marginBottom:7,lineHeight:1}}>{s.val}</p>
                  <p className="dm" style={{fontSize:9,color:"var(--ink4)",lineHeight:1.5,textTransform:"uppercase",letterSpacing:"0.1em"}}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TIMELINE */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">India Unicorn Timeline · 2011 → 2026</span>
              <div className="sh-r" />
            </div>
            <div style={{position:"relative",paddingLeft:30}}>
              <div style={{position:"absolute",left:4,top:8,bottom:8,width:2,background:"linear-gradient(to bottom,var(--gold2),var(--rule2))"}} />
              {YEAR_MILESTONES.map((m,i)=>(
                <div key={i} style={{display:"flex",gap:18,marginBottom:18,alignItems:"flex-start"}}>
                  <div className="tl-dot" />
                  <div style={{display:"flex",gap:14,alignItems:"baseline",flexWrap:"wrap"}}>
                    <span className="dm" style={{fontSize:8.5,fontWeight:800,color:"var(--gold2)",textTransform:"uppercase",letterSpacing:"0.15em",minWidth:38}}>{m.year}</span>
                    <span className="pf" style={{fontSize:"1.55rem",fontWeight:900,color:"var(--ink)",lineHeight:1,minWidth:32}}>{m.count}</span>
                    <p className="ss" style={{fontSize:13,color:"var(--ink3)",lineHeight:1.5}}>{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTOR BARS */}
          <div className="a2" style={{padding:"clamp(24px,4vw,42px) 0",borderBottom:"1px solid var(--rule2)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">Unicorns by Sector · India 2026</span>
              <div className="sh-r" />
            </div>
            <div className="sector-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"13px 44px"}}>
              {SECTOR_BREAKDOWN.map((s,i)=>(
                <div key={i}>
                  <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
                    <span className="dm" style={{fontSize:10.5,fontWeight:700,color:"var(--ink3)"}}>{s.sector}</span>
                    <span className="dm" style={{fontSize:9,color:"var(--ink5)",fontWeight:600}}>{s.count} unicorns</span>
                  </div>
                  <div className="bar-track">
                    <div className="bar-fill" style={{width:`${s.pct}%`,"--w":`${s.pct}%`} as React.CSSProperties} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ SPOTLIGHT CARDS — IMAGE ALWAYS LEFT ══ */}
          <div style={{marginTop:"clamp(32px,5vw,58px)"}}>
            <div className="sh" style={{marginBottom:22}}>
              <div className="sh-dot" />
              <span className="sh-l">5 Unicorn Deep Dives · Founders & Stories</span>
              <div className="sh-r" />
            </div>
            <p className="ss" style={{fontSize:13,color:"var(--ink4)",marginBottom:26,fontStyle:"italic"}}>
              Five companies that defined India's startup generation — the decisions, the doubts, and the breakthroughs.
            </p>

            {SPOTLIGHTS.map((s,idx)=>(
              <article key={idx} className="spot-card" style={{marginBottom:22}} itemScope itemType="https://schema.org/Organization">
                {/* IMAGE — always on the left */}
                <div className="spot-img">
                  <img src={s.img} alt={`${s.name} — Indian unicorn startup`} itemProp="logo" />
                  <div className="spot-img-overlay" />
                  <span className="spot-rank">{s.rank}</span>
                  <span className="spot-badge">{s.badge}</span>
                </div>

                {/* CONTENT */}
                <div className="spot-body">
                  <div>
                    <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:14}}>
                      <span className="dm" style={{fontSize:8,fontWeight:800,letterSpacing:"0.22em",textTransform:"uppercase",color:"var(--gold2)"}}>Rank {s.rank}</span>
                      <div style={{flex:1,height:1,background:"var(--rule2)"}} />
                      <span className="dm" style={{fontSize:7.5,color:"var(--ink5)",fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase"}}>{s.city} · {s.year}</span>
                    </div>

                    <div style={{display:"flex",alignItems:"baseline",gap:12,marginBottom:5}}>
                      <h2 className="pf" itemProp="name" style={{fontSize:"clamp(1.3rem,2.6vw,2rem)",fontWeight:700,color:"var(--ink)",lineHeight:1.1}}>{s.name}</h2>
                      <span className="pf" style={{fontSize:"clamp(1rem,2vw,1.45rem)",fontWeight:900,color:"var(--gold2)"}}>{s.val}</span>
                    </div>
                    <p className="dm" style={{fontSize:9.5,color:"var(--ink4)",marginBottom:18,textTransform:"uppercase",letterSpacing:"0.14em",fontWeight:600}}>{s.sector}</p>

                    <p className="ss dropcap" style={{fontSize:13.5,color:"var(--ink2)",lineHeight:1.88,marginBottom:12}}>{s.story}</p>

                    <div className="pull-quote">
                      <p className="ss" style={{fontSize:13,color:"var(--ink3)",lineHeight:1.82,fontStyle:"italic",margin:0}}>{s.why}</p>
                    </div>
                  </div>

                  <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10,paddingTop:16,borderTop:"1px solid var(--rule2)",marginTop:4}}>
                    <div>
                      <p className="dm" style={{fontSize:7.5,color:"var(--ink5)",textTransform:"uppercase",letterSpacing:"0.14em",marginBottom:3}}>Founded by</p>
                      <p className="dm" style={{fontSize:11.5,fontWeight:700,color:"var(--ink)"}} itemProp="founder">{s.founder}</p>
                    </div>
                    <Link href={`/startup/${s.slug}`} style={{display:"inline-flex",alignItems:"center",gap:7,background:"var(--ink)",color:"white",padding:"9px 18px",textDecoration:"none",fontSize:8.5,fontWeight:700,textTransform:"uppercase",letterSpacing:"0.15em",fontFamily:"'DM Sans',system-ui"}}>
                      Full Story →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* ══ FULL REGISTRY TABLE ══ */}
          <div style={{marginTop:"clamp(36px,6vw,68px)"}}>
            <div className="sh" style={{marginBottom:16}}>
              <div className="sh-dot" />
              <span className="sh-l">Complete Indian Unicorn Registry · 2026</span>
              <div className="sh-r" />
            </div>
            <p className="ss" style={{fontSize:12.5,color:"var(--ink4)",marginBottom:18,fontStyle:"italic"}}>
              Every Indian startup valued at $1B+. Click any row to read the full founder story.
            </p>

            <div style={{border:"1.5px solid var(--ink)",overflow:"hidden"}}>
              <div className="uni-row header">
                {["#","Company","Valuation","Sector","City","Stage","Founded"].map((h,i)=>(
                  <span key={i} className={`dm${i>3?"uni-hide":""}`} style={{fontSize:7.5,fontWeight:800,letterSpacing:"0.2em",textTransform:"uppercase"}}>{h}</span>
                ))}
              </div>

              {UNICORNS.map((u)=>(
                <Link key={u.rank} href={`/startup/${u.slug}`} className="uni-row">
                  <span className="dm" style={{fontSize:9,fontWeight:700,color:"var(--ink5)"}}>{u.rank}</span>
                  <div style={{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"}}>
                    <span className="dm" style={{fontSize:12,fontWeight:800,color:"var(--ink)"}}>{u.name}</span>
                    {u.decacorn && <span className="badge-deca">Decacorn</span>}
                    {u.stage.includes("IPO") && <span className="badge-ipo">IPO</span>}
                  </div>
                  <span className="dm uni-hide" style={{fontSize:11,fontWeight:800,color:"var(--gold2)"}}>{u.val}</span>
                  <span className="dm uni-hide" style={{fontSize:9.5,color:"var(--ink4)",fontWeight:600}}>{u.sector}</span>
                  <span className="dm uni-hide" style={{fontSize:9.5,color:"var(--ink5)"}}>{u.city}</span>
                  <span className="dm uni-hide" style={{fontSize:9,color:"var(--ink4)"}}>{u.stage}</span>
                  <span className="dm uni-hide" style={{fontSize:10,color:"var(--ink5)"}}>{u.founded}</span>
                </Link>
              ))}

              <div style={{background:"var(--parch2)",padding:"14px 16px",borderTop:"1px solid var(--rule2)",textAlign:"center"}}>
                <Link href="/startup" className="dm" style={{fontSize:9,fontWeight:700,color:"var(--gold2)",textTransform:"uppercase",letterSpacing:"0.16em",textDecoration:"none"}}>
                  View All 126 Unicorns in the Full Registry →
                </Link>
              </div>
            </div>
          </div>

          {/* ══ FAQ — Wikipedia-style ══ */}
          <div style={{marginTop:"clamp(36px,6vw,68px)"}}>
            <div className="sh" style={{marginBottom:20}}>
              <div className="sh-dot" />
              <span className="sh-l">Frequently Asked Questions · Indian Unicorns</span>
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
            <div style={{position:"absolute",top:0,left:0,right:0,height:3,background:"linear-gradient(90deg,var(--gold3),var(--gold2),var(--gold4),var(--gold4),var(--gold2),var(--gold3))",backgroundSize:"300% auto",animation:"shimmer 5s linear infinite"}} />
            <div className="imgf" style={{height:200}}>
              <img src={IMGS.banner} alt="India startup ecosystem 2026" style={{filter:"sepia(45%) brightness(0.28) contrast(1.1)"}} />
              <div style={{position:"absolute",inset:0,display:"flex",alignItems:"center",justifyContent:"center",padding:"0 clamp(24px,5vw,72px)",textAlign:"center"}}>
                <p className="pf" style={{fontSize:"clamp(1.2rem,2.9vw,2.1rem)",fontWeight:700,color:"white",lineHeight:1.22,fontStyle:"italic"}}>
                  "The next Indian unicorn is being built right now —{" "}
                  <em style={{color:"#F5C842"}}>probably by someone who was told their idea was too ambitious.</em>"
                </p>
              </div>
            </div>
            <div style={{padding:"clamp(20px,3vw,36px)"}}>
              <p className="ss" style={{fontSize:13.5,color:"rgba(255,255,255,.65)",lineHeight:1.88,maxWidth:780}}>
                UpForge tracks every Indian unicorn, decacorn, and emerging soonicorn in real time. Read the founding stories, explore the funding timelines, and understand what made each of these 126 companies worth $1 billion. With Flipkart and PhonePe IPOs on the horizon, India's startup story is entering its most consequential chapter yet.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Related pages" style={{padding:"18px 0",borderTop:"2px solid var(--ink)",marginTop:"clamp(32px,5vw,56px)"}}>
            <ul style={{display:"flex",flexWrap:"wrap",gap:"8px 22px",listStyle:"none",margin:0,padding:0}}>
              {[
                {l:"Top AI Startups 2026",  h:"/top-ai-startups"},
                {l:"FinTech Startups",       h:"/fintech-startups"},
                {l:"SaaS Startups India",    h:"/best-saas-startups"},
                {l:"EdTech Startups",        h:"/edtech-startups"},
                {l:"Quick Commerce India",   h:"/quick-commerce"},
                {l:"D2C Startups",           h:"/d2c-startups"},
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
