// app/blog/top-indian-unicorns-2026/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top Indian Unicorns 2026: The Stories Behind India's $1B+ Startups | UpForge Blog",
  description:
    "The stories behind India's top unicorns in 2026 — Flipkart, Zomato, PhonePe, CRED, Zerodha, Razorpay, and the new generation of $1B+ companies. What made them unicorns, what keeps them there, and what every founder can learn from their journeys.",
  keywords: [
    "top indian unicorns 2026",
    "india unicorn startup stories",
    "indian startups worth 1 billion 2026",
    "flipkart zomato cred zerodha unicorn",
    "indian unicorn founder stories",
    "how indian startups became unicorns",
    "india decacorn companies 2026",
    "indian unicorn list 2026",
    "billion dollar startups india",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/blog/top-indian-unicorns-2026" },
  openGraph: {
    title: "Top Indian Unicorns 2026: The Stories Behind India's $1B+ Startups",
    description: "The founding stories, growth inflection points, and hard-won lessons from India's most valuable startups in 2026.",
    url: "https://upforge.in/blog/top-indian-unicorns-2026",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-blog-unicorns.png", width: 1200, height: 630 }],
    locale: "en_IN", type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top Indian Unicorns 2026: Founding Stories & Lessons | UpForge",
    description: "Flipkart, Zomato, CRED, Zerodha — how India's unicorns were built, what made them $1B+ companies, and what every founder can learn.",
  },
};

const IMGS = {
  hero:      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&q=85&auto=format",
  flipkart:  "https://seagm-media.seagmcdn.com/item_480/1033.png",
  zomato:    "https://play-lh.googleusercontent.com/Zqv3j3gWCWrxuHW1VkRKNWso3beRsrwPCj58kG_Ile6iGGSf1YfkPYhKExXKY7_L0lU=w240-h480-rw",
  cred:      "https://images.indianexpress.com/2021/10/cred-app-fb.jpg",
  zerodha:   "https://media.assettype.com/freepressjournal/2024-08-23/ulynglaz/Untitled%20design%20-%202023-06-14T135717.704.jpg",
  phonepe:   "https://etimg.etb2bimg.com/thumb/msid-113378266,width-1200,height-900,resizemode-4/.jpg",
  razorpay:  "https://www.marcamoney.com/wp-content/uploads/2024/11/Razorpay-launches-Venture-Investment-Programme-in-partnership-with-Peak-XV-Partners-and-Lightspeed.jpg",
  nykaa:     "https://shyamfuture.com/wp-content/uploads/2025/05/f056d677604d8b19d493e95dbab10fe3.jpg",
  closing:   "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80&auto=format",
};

const UNICORNS = [
  {
    num: "01",
    name: "Flipkart",
    founders: "Sachin & Binny Bansal",
    val: "$35B",
    year: 2007,
    sector: "E-Commerce",
    city: "Bengaluru",
    stage: "Walmart-Owned",
    img: IMGS.flipkart,
    slug: "flipkart",
    story: `Sachin and Binny Bansal both worked at Amazon before leaving in 2007 to build India's version of it — starting with books shipped from a rented apartment in Koramangala, Bengaluru. The idea seemed pedestrian. The execution was anything but.

Flipkart cracked the two hardest problems in Indian e-commerce simultaneously: logistics (by building Ekart, their own delivery network) and consumer trust (by introducing cash on delivery at scale before most companies had tried it). By solving infrastructure problems that no marketplace player could avoid, Flipkart created a moat that Snapdeal and others never fully crossed.

The $16B Walmart acquisition in 2018 was the moment India's startup ecosystem grew up. It proved — definitively and at scale — that Indian consumer internet companies could reach global valuation thresholds. Every Indian unicorn that followed owes a small debt of proof to the Bansals.`,
    lesson: "Build the infrastructure your market needs, not just the product your market wants. The infrastructure is the moat.",
    keyword: "Flipkart Startup Story India",
  },
  {
    num: "02",
    name: "Zomato",
    founders: "Deepinder Goyal & Pankaj Chaddah",
    val: "$17B",
    year: 2008,
    sector: "Food Delivery & Quick Commerce",
    city: "Gurugram",
    stage: "NSE/BSE Listed",
    img: IMGS.zomato,
    slug: "zomato",
    story: `Deepinder Goyal noticed that colleagues in his consulting firm were crowding around a scanned lunch menu. He photographed it, uploaded it, and watched the traffic pour in. That single observation — that people wanted restaurant information online before they wanted food delivery — became the founding insight of a $17B company.

Zomato's story is not about a linear ascent. It is about six near-death experiences and one stubborn founder who refused to accept any of them as the final one. There was the pivot from restaurant discovery to food delivery. The failed Uber Eats acquisition talks. The disastrous Grofers acquisition that turned into Blinkit — and then became Zomato's fastest-growing revenue line.

Zomato went public at ₹76 per share. The stock fell to ₹40. Then it climbed to ₹280. The arc of the stock chart mirrors the arc of every great startup: absurd volatility around a long-term line that goes up.`,
    lesson: "Resilience is not about never failing. It is about refusing to let any failure be the last one.",
    keyword: "Zomato Unicorn Story India",
  },
  {
    num: "03",
    name: "CRED",
    founders: "Kunal Shah",
    val: "$6.4B",
    year: 2018,
    sector: "FinTech · Premium Consumer",
    city: "Bengaluru",
    stage: "Series F",
    img: IMGS.cred,
    slug: "cred",
    story: `Kunal Shah's first startup FreeCharge was acquired by Snapdeal for $400M. His second, CRED, is valued at $6.4B. The pattern suggests a founder who learns at an unusually high rate — but the CRED story is more interesting than that trajectory implies.

CRED was built on an insight most fintech founders ignored: India's 25M+ credit card holders are the country's most high-value consumer segment — and they were being served by terrible bank apps and zero rewards for responsible financial behaviour. CRED rewarded credit card bill payments with points redeemable for premium experiences, and in doing so, built an extraordinarily loyal member base that became the distribution for every subsequent product.

The sceptics asked for years how CRED would monetise. The answer — lending, commerce, and a UPI app with premium positioning — is now generating meaningful revenue from a base that trusts the brand completely. Kunal Shah's delta 4 theory (the idea that for a behaviour to change permanently, the new behaviour must be at least 4 points better on a 10-point scale) is the strategic framework behind every CRED product decision.`,
    lesson: "Premium positioning in a market dominated by value players is not a niche strategy — it is the highest-margin strategy available.",
    keyword: "CRED Startup Story Kunal Shah",
  },
  {
    num: "04",
    name: "Zerodha",
    founders: "Nithin & Nikhil Kamath",
    val: "$3.6B",
    year: 2010,
    sector: "FinTech · Stock Broking",
    city: "Bengaluru",
    stage: "Bootstrapped",
    img: IMGS.zerodha,
    slug: "zerodha",
    story: `Nithin Kamath was a day trader before he was a founder. He understood the brokerage industry from the inside — as a customer who knew exactly how badly incumbents were treating their users and how much of his returns were being captured in fees.

Zerodha's zero-brokerage model on delivery trades was not an act of charity. It was the most calculated customer acquisition strategy in Indian fintech history: eliminate the fee that matters most to long-term investors, acquire 13M+ clients at effectively zero marginal cost, and monetise through trading commissions from the fraction of users who are active traders.

The company has never taken external funding. Revenues exceeded ₹8,320Cr in FY24 on a bootstrapped capital structure. Nithin Kamath's approach to growth — transparent, contrarian, and relentlessly focused on customer outcomes — has made Zerodha not just India's most profitable fintech but its most trusted one. In an industry where trust is the only durable moat, that distinction is worth considerably more than the $3.6B headline valuation.`,
    lesson: "Bootstrapping forces the discipline that venture capital can mask. Build for profitability first — scale is the consequence, not the goal.",
    keyword: "Zerodha Nithin Kamath Startup Story",
  },
  {
    num: "05",
    name: "Razorpay",
    founders: "Harshil Mathur & Shashank Kumar",
    val: "$7.5B",
    year: 2014,
    sector: "Payments Infrastructure",
    city: "Bengaluru",
    stage: "Series F",
    img: IMGS.razorpay,
    slug: "razorpay",
    story: `Harshil Mathur and Shashank Kumar were IIT Roorkee graduates when they got into Y Combinator's Winter 2015 batch with a problem most Indian entrepreneurs had stopped trying to solve: payment integrations in India were broken, slow, and inaccessible to small businesses.

Their insight was developer-first: if you make it trivially easy to integrate payments (5 lines of code instead of weeks of bank liaison), every startup in India will use you by default. That developer-first positioning, borrowed from Stripe's US playbook, worked with extraordinary effectiveness in the Indian context — where thousands of startups were building products and needed payments infrastructure immediately.

Razorpay has since expanded from payment gateway to neobanking (RazorpayX), payroll (Opfin), and lending — building a full financial operating system for Indian businesses. Processing $150B+ in annual TPV through 8M+ businesses, Razorpay is now the default financial infrastructure layer for the Indian startup ecosystem itself.`,
    lesson: "Developer-first distribution is the most capital-efficient B2B go-to-market strategy in technology. Make the integration frictionless and the business follows.",
    keyword: "Razorpay Startup Story India",
  },
  {
    num: "06",
    name: "PhonePe",
    founders: "Sameer Nigam & Rahul Chari",
    val: "$12B",
    year: 2015,
    sector: "Digital Payments · UPI",
    city: "Bengaluru",
    stage: "Pre-IPO",
    img: IMGS.phonepe,
    slug: "phonepe",
    story: `PhonePe was acquired by Flipkart in 2016 for $10M — a transaction that seemed like a reasonable acqui-hire at the time. By 2022, Walmart had spun it out as a standalone business at a $12B valuation, making it one of the most remarkable value creation stories in the history of corporate acquisitions.

The secret was UPI. PhonePe was one of the first movers on the National Payments Corporation of India's Unified Payments Interface — betting on the infrastructure before it had reached critical mass. By the time the UPI hockey stick inflected (2018–2020), PhonePe had built a user base and merchant network that was almost impossible to dislodge.

Today PhonePe processes 48% of all UPI transactions in India — more than Google Pay, Paytm, and every bank-owned UPI app combined. The company has expanded into insurance, mutual funds, and international payments. An IPO is expected in 2026 at a valuation that will make it one of the largest fintech listings in Asian history.`,
    lesson: "Betting on infrastructure before it reaches critical mass is the highest-risk, highest-reward strategy in consumer technology. The founders who get the timing right become category monopolists.",
    keyword: "PhonePe Startup Story UPI India",
  },
  {
    num: "07",
    name: "Nykaa",
    founders: "Falguni Nayar",
    val: "$6.5B",
    year: 2012,
    sector: "Beauty & D2C",
    city: "Mumbai",
    stage: "NSE/BSE Listed",
    img: IMGS.nykaa,
    slug: "nykaa",
    story: `Falguni Nayar was 49 years old and managing director at Kotak Mahindra Capital when she decided to start Nykaa. She had spent two decades as an investment banker — studying industries, valuing companies, and understanding market structures. When she identified the Indian beauty market as a broken distribution problem with a digital solution, she had more conviction than most 25-year-old founders could muster.

Nykaa solved a trust problem. Indian women buying beauty products online faced a simple question: how do I know what I am getting is genuine? Nykaa's answer — a curated, brand-authorised marketplace with content and education built around every product — solved that trust problem in a way that neither Amazon nor Myntra fully could.

Nykaa's 2021 IPO made Falguni Nayar one of India's wealthiest self-made women. More importantly for the ecosystem, it demonstrated that D2C commerce and content businesses built for Indian consumers could command premium public market valuations — a proof point that unlocked a wave of D2C funding that continues in 2026.`,
    lesson: "Content builds trust. Trust enables commerce. The brands that invest in educating their customers before selling to them build the most durable customer relationships.",
    keyword: "Nykaa Falguni Nayar Startup Story",
  },
];

const RELATED = [
  { name: "Indian Unicorns Registry",         slug: "/indian-unicorns",                              sector: "Full List"  },
  { name: "India Startup Ecosystem 2026",     slug: "/blog/india-startup-ecosystem-2026",            sector: "Ecosystem"  },
  { name: "Top Indian Founders to Follow",   slug: "/blog/best-indian-startup-founders-to-follow-2026", sector: "People" },
  { name: "How to Get Startup Funding",      slug: "/blog/how-to-get-startup-funding-india-2026",   sector: "Guide"     },
];

export default function BlogUnicorns() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
        .pf{font-family:'Playfair Display',Georgia,serif!important}
        .rp{font-family:'Georgia','Times New Roman',serif}
        .sf{font-family:system-ui,-apple-system,sans-serif}
        :root{
          --parch:#F5F1E8;--parch2:#EDE9DF;--ink:#1A1208;--ink3:#5A4A30;
          --ink4:#8C7D65;--ink5:#BBB0A0;--rule:#C8C2B4;--rule2:#D8D2C4;
          --gold:#B45309;--gold2:#D97706;--gold3:#92400E;--white:#FDFCF9;
        }
        body{background:var(--parch)}
        @keyframes fadeUp{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
        @keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}
        .a0{animation:fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both}
        .a1{animation:fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both}
        .imgf{position:relative;overflow:hidden}
        .imgf img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:sepia(14%) contrast(108%);transition:transform .6s ease}
        .imgf:hover img{transform:scale(1.03)}
        .lesson-card{border:1.5px solid var(--ink);background:var(--white);overflow:hidden;position:relative}
        .lesson-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547,#FCD34D);background-size:200% auto;animation:shimmer 3s linear infinite}
        .qblock{background:var(--ink);border-left:4px solid var(--gold2);padding:16px 20px;margin-top:14px}
        .insight{display:inline-flex;align-items:center;gap:8px;background:#FEF3C7;border:1px solid rgba(180,83,9,.25);padding:9px 14px;width:100%;margin-top:10px}
        .sh{display:flex;align-items:center;gap:10px}
        .sh-l{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.28em;color:var(--ink5);font-family:system-ui;white-space:nowrap}
        .sh-r{flex:1;height:1px;background:var(--rule2)}
        .rel-card{display:flex;flex-direction:column;background:var(--white);text-decoration:none;transition:transform .15s,box-shadow .15s;position:relative}
        .rel-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2.5px;background:transparent;transition:background .15s}
        .rel-card:hover{transform:translate(-2px,-2px);box-shadow:4px 4px 0 var(--ink);z-index:1}
        .rel-card:hover::before{background:var(--gold2)}
        .dropcap::first-letter{font-family:'Playfair Display',Georgia,serif;font-size:3.8em;font-weight:900;float:left;line-height:.82;margin-right:8px;margin-top:6px;color:var(--ink)}
        .val-chip{display:inline-flex;align-items:center;background:rgba(180,83,9,.1);border:1px solid rgba(180,83,9,.25);padding:3px 10px}
        @media(max-width:900px){.lesson-two{grid-template-columns:1fr!important}}
      `}</style>

      <article itemScope itemType="https://schema.org/Article" style={{ minHeight:"100vh", background:"var(--parch)" }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context":"https://schema.org","@type":"Article",
          headline:"Top Indian Unicorns 2026: The Stories Behind India's $1B+ Startups",
          description:"The founding stories and lessons from India's top unicorn startups — Flipkart, Zomato, CRED, Zerodha, Razorpay, PhonePe, and Nykaa.",
          author:{"@type":"Organization","name":"UpForge"},
          publisher:{"@type":"Organization","name":"UpForge","url":"https://upforge.in"},
          datePublished:new Date().toISOString().split("T")[0],
          url:"https://upforge.in/blog/top-indian-unicorns-2026",
          keywords:"top indian unicorns 2026, flipkart zomato cred zerodha startup stories, indian billion dollar startups",
        })}} />

        {/* BREADCRUMB */}
        <nav className="sf a0" style={{ background:"var(--parch2)", borderBottom:"1px solid var(--rule2)", padding:"8px 0" }}>
          <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", listStyle:"none", margin:0, padding:0 }}>
              <li><Link href="/" style={{ color:"var(--ink5)", textDecoration:"none" }}>UpForge</Link></li>
              <li style={{ color:"var(--rule)" }}>/</li>
              <li><Link href="/blog" style={{ color:"var(--ink5)", textDecoration:"none" }}>Blog</Link></li>
              <li style={{ color:"var(--rule)" }}>/</li>
              <li style={{ color:"var(--ink4)", fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap", maxWidth:220 }}>Top Indian Unicorns 2026</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{ borderBottom:"3px solid var(--ink)" }}>
          <div className="imgf" style={{ height:"clamp(280px,38vw,480px)" }}>
            <img src={IMGS.hero} alt="Top Indian Unicorns 2026 — Founding Stories" />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom,rgba(26,18,8,.35) 0%,rgba(26,18,8,.88) 100%)" }} />
            <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 clamp(16px,5vw,64px)", textAlign:"center" }}>
              <div style={{ display:"flex", gap:8, marginBottom:18, flexWrap:"wrap", justifyContent:"center" }}>
                {["Unicorns","Founder Stories","India 2026"].map(t=>(
                  <span key={t} className="sf" style={{ fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,0.65)", border:"1px solid rgba(255,255,255,0.2)", padding:"3px 10px" }}>{t}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="headline" style={{ fontSize:"clamp(1.8rem,5.5vw,4.2rem)", fontWeight:900, lineHeight:1.02, color:"white", letterSpacing:"-0.02em", marginBottom:18, maxWidth:860 }}>
                Top Indian Unicorns 2026:{" "}
                <em style={{ color:"#FCD34D", fontStyle:"italic" }}>The Stories Behind India's $1B+ Startups</em>
              </h1>
              <p className="rp" style={{ fontSize:"clamp(13px,1.8vw,16px)", color:"rgba(255,255,255,0.62)", fontStyle:"italic", maxWidth:580, lineHeight:1.6 }}>
                7 unicorn stories. 7 different paths to $1B+. The same founding-era conviction that the Indian market was bigger than anyone believed.
              </p>
            </div>
            <div className="sf" style={{ position:"absolute", top:18, right:18, background:"rgba(26,18,8,.7)", border:"1px solid rgba(255,255,255,.1)", padding:"5px 12px", fontSize:8, fontWeight:700, letterSpacing:"0.2em", textTransform:"uppercase", color:"rgba(255,255,255,.55)" }}>
              UpForge · Blog
            </div>
          </div>
          <div style={{ background:"var(--ink)" }}>
            <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 clamp(16px,3vw,36px)" }}>
              <div style={{ display:"flex", flexWrap:"wrap", alignItems:"center" }}>
                {[
                  { l:"Published", v:new Date().toLocaleDateString("en-IN",{day:"numeric",month:"long",year:"numeric"}) },
                  { l:"Reading Time", v:"~12 min" },
                  { l:"Unicorns Profiled", v:"7 Companies" },
                  { l:"Combined Value", v:"$83B+" },
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

        {/* MAIN */}
        <div style={{ maxWidth:1080, margin:"0 auto", padding:"0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* INTRO + TOC */}
          <div className="a1" style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:0, borderBottom:"1px solid var(--rule2)", alignItems:"start" }}>
            <div style={{ padding:"clamp(28px,4vw,48px) clamp(16px,3vw,40px) clamp(28px,4vw,48px) 0", borderRight:"1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom:18 }}><span className="sh-l">Introduction</span><div className="sh-r" /></div>
              <p className="pf" itemProp="description" style={{ fontSize:"clamp(1.05rem,2.2vw,1.35rem)", fontWeight:400, lineHeight:1.72, color:"var(--ink)", marginBottom:18 }}>
                India's 126 unicorns are not a list. They are an argument. An argument that the Indian market is real.
              </p>
              <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.85 }}>
                This article profiles seven of those companies in depth — not the fundraise numbers, not the PowerPoint milestones, but the actual founding stories.
              </p>
            </div>
            <div style={{ padding:"clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth:"clamp(200px,26vw,280px)" }}>
              <div className="sh" style={{ marginBottom:14 }}><span className="sh-l">7 Unicorn Stories</span><div className="sh-r" /></div>
              {UNICORNS.map((u,i)=>(
                <a key={i} href={`#unicorn-${u.num}`} style={{ display:"flex", alignItems:"baseline", gap:8, marginBottom:9, textDecoration:"none" }}>
                  <span className="sf" style={{ fontSize:8, fontWeight:700, color:"var(--gold2)", flexShrink:0, minWidth:18 }}>{u.num}</span>
                  <div>
                    <span className="rp" style={{ fontSize:11.5, color:"var(--ink)", lineHeight:1.4, fontWeight:600 }}>{u.name}</span>
                    <span className="sf" style={{ fontSize:8, color:"var(--gold2)", marginLeft:6, fontWeight:700 }}>{u.val}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* UNICORN STORIES */}
          <div style={{ marginTop:"clamp(32px,5vw,56px)" }}>
            {UNICORNS.map((u,idx)=>(
              <div key={idx} id={`unicorn-${u.num}`} className="lesson-card" style={{ marginBottom:20 }}>
                <div className="lesson-two" style={{ display:"grid", gridTemplateColumns:idx%2===0?"1fr 340px":"340px 1fr", gap:0, minHeight:360 }}>
                  {idx%2!==0&&(
                    <div className="imgf" style={{ borderRight:"1.5px solid var(--ink)", minHeight:320 }}>
                      <img src={u.img} alt={u.name} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right,rgba(26,18,8,.65) 0%,transparent 60%)" }} />
                      <div style={{ position:"absolute", bottom:20, left:20 }}>
                        <span className="pf" style={{ fontSize:"4rem", fontWeight:900, color:"rgba(255,255,255,0.12)", lineHeight:1 }}>{u.num}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding:"clamp(20px,3vw,36px)", display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <div>
                      <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16 }}>
                        <span className="sf" style={{ fontSize:9, fontWeight:800, letterSpacing:"0.2em", textTransform:"uppercase", color:"var(--gold2)" }}>{u.num} of 07</span>
                        <div style={{ flex:1, height:1, background:"var(--rule2)" }} />
                        <span className="sf" style={{ fontSize:8, color:"var(--ink5)", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase" }}>{u.keyword}</span>
                      </div>

                      <div style={{ display:"flex", alignItems:"baseline", gap:12, flexWrap:"wrap", marginBottom:4 }}>
                        <h2 className="pf" style={{ fontSize:"clamp(1.3rem,2.5vw,1.9rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.1 }}>{u.name}</h2>
                        <span className="pf val-chip" style={{ fontSize:"1rem", fontWeight:900, color:"var(--gold2)" }}>{u.val}</span>
                      </div>
                      <p className="sf" style={{ fontSize:9.5, color:"var(--ink4)", marginBottom:16, textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:600 }}>{u.founders} · {u.sector} · {u.city} · Est. {u.year}</p>

                      {u.story.split("\n\n").map((para,pi)=>(
                        <p key={pi} className={`rp${pi===0?" dropcap":""}`} style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.88, marginBottom:14 }}>{para}</p>
                      ))}
                    </div>

                    <div style={{ marginTop:16 }}>
                      <div className="qblock">
                        <p className="sf" style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"rgba(232,197,71,.7)", marginBottom:8 }}>The Lesson · {u.name}</p>
                        <p className="rp" style={{ fontSize:13, color:"rgba(255,255,255,.8)", lineHeight:1.75, fontStyle:"italic" }}>{u.lesson}</p>
                      </div>
                      <Link href={`/startup/${u.slug}`} style={{ display:"inline-flex", marginTop:12, alignItems:"center", gap:6, fontSize:9.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", color:"var(--gold2)", textDecoration:"none", fontFamily:"system-ui" }}>
                        Read Full {u.name} Story on UpForge →
                      </Link>
                    </div>
                  </div>

                  {idx%2===0&&(
                    <div className="imgf" style={{ borderLeft:"1.5px solid var(--ink)", minHeight:320 }}>
                      <img src={u.img} alt={u.name} />
                      <div style={{ position:"absolute", inset:0, background:"linear-gradient(to left,rgba(26,18,8,.65) 0%,transparent 60%)" }} />
                      <div style={{ position:"absolute", bottom:20, right:20, textAlign:"right" }}>
                        <span className="pf" style={{ fontSize:"4rem", fontWeight:900, color:"rgba(255,255,255,0.12)", lineHeight:1 }}>{u.num}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div style={{ marginTop:"clamp(36px,6vw,64px)", border:"1.5px solid var(--ink)", background:"var(--ink)", position:"relative", overflow:"hidden" }}>
            <div style={{ position:"absolute", top:0, left:0, right:0, height:3, background:"linear-gradient(90deg,var(--gold3),var(--gold2),#E8C547,#FCD34D,#E8C547,var(--gold2),var(--gold3))", backgroundSize:"200% auto", animation:"shimmer 4s linear infinite" }} />
            <div className="imgf" style={{ height:190 }}>
              <img src={IMGS.closing} alt="Indian unicorns future" style={{ filter:"sepia(40%) brightness(0.32) contrast(1.1)" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center", padding:"0 clamp(20px,5vw,60px)", textAlign:"center" }}>
                <p className="pf" style={{ fontSize:"clamp(1.3rem,3vw,2.2rem)", fontWeight:700, color:"white", lineHeight:1.22, fontStyle:"italic" }}>
                  "Every Indian unicorn started as an idea that most people{" "}
                  <em style={{ color:"#FCD34D" }}>told the founder not to pursue.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding:"clamp(24px,4vw,40px)" }}>
              <p className="rp" style={{ fontSize:14, color:"rgba(255,255,255,.75)", lineHeight:1.88, maxWidth:760 }}>
                The common thread across every unicorn story in India is not genius, not connections, and not timing alone. It is a founder who understood a problem more deeply than anyone else, built a solution more determined than the competition, and kept going long after most rational people would have stopped. India's next unicorn is being built right now — by someone who has not been on this page yet.
              </p>
            </div>
          </div>

          {/* RELATED */}
          <div style={{ marginTop:"clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom:16 }}><span className="sh-l">Related Reading on UpForge</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(200px,1fr))", border:"1.5px solid var(--ink)", background:"var(--ink)", gap:1.5 }}>
              {RELATED.map((r,i)=>(
                <Link key={i} href={r.slug} className="rel-card">
                  <div style={{ height:80, background:["#E8E0D0","#E0D8CC","#D8D0C4","#D0C8BC"][i], display:"flex", alignItems:"center", justifyContent:"center", borderBottom:"1px solid var(--rule2)" }}>
                    <span className="pf" style={{ fontSize:"2.8rem", fontWeight:900, color:"rgba(26,18,8,0.1)" }}>{r.name.charAt(0)}</span>
                  </div>
                  <div style={{ padding:"13px 14px 12px" }}>
                    <h3 className="pf" style={{ fontSize:"0.9rem", fontWeight:700, color:"var(--ink)", marginBottom:4, lineHeight:1.2 }}>{r.name}</h3>
                    <span className="sf" style={{ fontSize:8, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.12em", fontWeight:700 }}>{r.sector}</span>
                    <div style={{ marginTop:8 }}><span className="sf" style={{ fontSize:8.5, color:"var(--gold2)", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.1em" }}>Read →</span></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <nav aria-label="Blog navigation" style={{ padding:"16px 0", borderTop:"2px solid var(--ink)", marginTop:"clamp(32px,5vw,52px)" }}>
            <ul style={{ display:"flex", flexWrap:"wrap", gap:"8px 20px", listStyle:"none", margin:0, padding:0 }}>
              {[
                { l:"Indian Unicorns Registry", h:"/indian-unicorns"   },
                { l:"Indian Startups",          h:"/indian-startups"   },
                { l:"FinTech Startups",         h:"/fintech-startups"  },
                { l:"D2C Startups",             h:"/d2c-startups"      },
                { l:"Top AI Startups",          h:"/top-ai-startups"   },
                { l:"Back to Blog",             h:"/blog"              },
              ].map(lnk=>(
                <li key={lnk.h}><Link href={lnk.h} className="sf" style={{ fontSize:8.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.14em", textDecoration:"none" }}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </article>
    </>
  );
}
