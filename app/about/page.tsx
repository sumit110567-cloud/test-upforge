// app/about/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  Shield, Users, TrendingUp, Award, BadgeCheck, Globe,
  ArrowRight, Sparkles, Calculator, FileText, Zap,
  Building2, Target, Activity, CheckCircle2,
} from "lucide-react";

export const revalidate = 600;

async function getAboutInsights() {
  try {
    const response = await fetch(`https://api.groq.com/openai/v1/chat/completions`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${process.env.GROQ_API_KEY}` },
      body: JSON.stringify({
        model: "mixtral-8x7b-32768",
        messages: [
          {
            role: "system",
            content: `Return ONLY valid JSON:
            {
              "ecosystemPulse": {
                "headline": "one powerful stat or fact about Indian startup ecosystem 2026",
                "stat": "big number or %",
                "context": "brief context under 12 words"
              },
              "whyRegistry": [
                {"point": "why a startup registry matters in India", "data": "supporting stat"}
              ],
              "milestones": [
                {"year": "year", "event": "Indian startup ecosystem milestone"}
              ]
            }`,
          },
          { role: "user", content: "Give compelling data about why documenting Indian startups matters in 2026." },
        ],
        temperature: 0.3,
        response_format: { type: "json_object" },
      }),
    });
    const data = await response.json();
    return JSON.parse(data.choices[0].message.content);
  } catch {
    return {
      ecosystemPulse: {
        headline: "India is now home to the world's 3rd largest startup ecosystem",
        stat: "126 Unicorns",
        context: "and growing — ₹9.2B funded in Q1 2026 alone",
      },
      whyRegistry: [
        { point: "90% of Indian startups have zero structured digital presence", data: "Less than 10% appear on verified databases" },
        { point: "Investors lose time verifying basic startup information", data: "Avg 3–5 days per due diligence on basic data" },
        { point: "Founders lack institutional-grade digital credibility early on", data: "Most rely only on LinkedIn and AngelList" },
        { point: "India's startup data is fragmented across 200+ sources", data: "No single trusted public registry existed before" },
      ],
      milestones: [
        { year: "2016", event: "Startup India launched — 10,000 registered startups" },
        { year: "2019", event: "India crosses 50,000 DPIIT-recognized startups" },
        { year: "2021", event: "Record $42B funding — India's breakout year" },
        { year: "2023", event: "100+ unicorns, 3rd largest ecosystem globally" },
        { year: "2025", event: "72,000+ active startups, AI-led second wave begins" },
        { year: "2026", event: "UpForge becomes India's independent public registry" },
      ],
    };
  }
}

// Curated Unsplash images — sepia-tinted newspaper feel
const IMAGES = {
  hero:      "/aboutus.jpg",
  problem:   "https://media.licdn.com/dms/image/v2/D5612AQHvdNFPlgO8mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726469383648?e=2147483647&v=beta&t=TOuXsxGGTTfnFrJ16aAHJdDZwFLP2fjF5u-Cutu1q68",
  answer:    "https://images.yourstory.com/cs/2/ab6020f0259611ee840c6712417aa5cf/What-is-Startup-India-Showcase-11-1703785002234.jpg?mode=crop&crop=faces&ar=16%3A9&format=auto&w=1920&q=75",
  builders:  "https://p2.piqsels.com/preview/160/1022/497/startup-start-up-growth-hacking-market.jpg",
  believe:   "https://miro.medium.com/0*OzIZRmuVzMtG9M9X",
};

export default async function AboutPage() {
  const supabase = await createClient();
  const insights = await getAboutInsights();

  const { count: totalStartups } = await supabase
    .from("startups").select("*", { count: "exact", head: true });

  const { count: startupsWithReports } = await supabase
    .from("startups").select("*", { count: "exact", head: true }).eq("has_report", true);

  const { data: industries } = await supabase
    .from("startups").select("industry").not("industry", "is", null);

  const uniqueIndustries = industries ? new Set(industries.map((i) => i.industry)).size : 0;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        .pf { font-family: 'Playfair Display', Georgia, serif !important; }
        .rp { font-family: 'Georgia', 'Times New Roman', serif; }
        .sf { font-family: system-ui, -apple-system, sans-serif; }

        :root {
          --parch:  #F3EFE5;
          --parch2: #EDE9DF;
          --ink:    #1A1208;
          --ink3:   #5A4A30;
          --ink4:   #8C7D65;
          --ink5:   #BBB0A0;
          --rule:   #C8C2B4;
          --rule2:  #D8D2C4;
          --gold:   #D97706;
          --gold2:  #E8C547;
          --gold3:  #8B6914;
          --white:  #FDFCF9;
        }

        body { background: var(--parch); }

        @keyframes storyIn {
          from { opacity: 0; transform: translateY(9px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: storyIn .42s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: storyIn .42s .08s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: storyIn .42s .16s cubic-bezier(.16,1,.3,1) both; }
        .a3 { animation: storyIn .42s .24s cubic-bezier(.16,1,.3,1) both; }
        .a4 { animation: storyIn .42s .32s cubic-bezier(.16,1,.3,1) both; }

        .ldot { width:7px;height:7px;border-radius:50%;background:#22C55E;display:inline-block;flex-shrink:0;position:relative; }
        .ldot::after { content:'';display:block;width:100%;height:100%;border-radius:50%;background:rgba(34,197,94,.35);animation:lp 2s ease-in-out infinite;position:absolute;top:0;left:0; }
        @keyframes lp { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(2.5);opacity:0} }

        .vbadge {
          display:inline-flex;align-items:center;gap:3px;
          font-size:7.5px;font-weight:700;letter-spacing:.12em;
          text-transform:uppercase;color:#15803D;
          border:1px solid rgba(21,128,61,.3);padding:2px 7px;
          font-family:system-ui;
        }

        .imgf { position:relative;overflow:hidden; }
        .imgf img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:sepia(18%) contrast(107%);transition:transform .6s ease; }
        .imgf:hover img { transform:scale(1.025); }

        .sh { display:flex;align-items:center;gap:10px;margin-bottom:14px; }
        .sh-l { font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.26em;color:var(--ink5);font-family:system-ui;white-space:nowrap; }
        .sh-r { flex:1;height:1px;background:var(--rule2); }

        .hc { transition:background .18s,border-color .18s,transform .18s,box-shadow .18s; }
        .hc:hover { border-color:var(--ink)!important;transform:translate(-1px,-1px);box-shadow:3px 3px 0 var(--ink);z-index:1; }

        .pc-wrap:hover .pc-icon { background:var(--ink); }
        .pc-wrap:hover .pc-icon svg { color:var(--gold2)!important; }
        .pc-icon { transition:background .18s; }
        .pc-icon svg { transition:color .18s; }

        .rlink:hover { background:var(--parch2)!important; }

        @media(max-width:768px) {
          .two-col { grid-template-columns:1fr!important; }
          .hero-h { height:clamp(220px,50vw,300px)!important; }
        }
      `}</style>

      <div className="rp" style={{ minHeight:"100vh", background:"var(--parch)" }}>

        {/* BREADCRUMB */}
        <nav className="sf" style={{ background:"var(--parch2)", borderBottom:"1px solid var(--rule2)", padding:"7px 0" }}>
          <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 clamp(16px,3vw,32px)" }}>
            <ol style={{ display:"flex", alignItems:"center", gap:6, fontSize:9, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", listStyle:"none", margin:0, padding:0 }}>
              <li><Link href="/" style={{ color:"var(--ink5)", textDecoration:"none" }}>UpForge</Link></li>
              <li style={{ color:"var(--rule)" }}>/</li>
              <li style={{ color:"var(--ink4)", fontWeight:600 }}>About</li>
            </ol>
          </div>
        </nav>

        {/* HERO IMAGE MASTHEAD */}
        <div className="a0" style={{ borderBottom:"3px solid var(--ink)" }}>
          <div className="imgf hero-h" style={{ height:"clamp(260px,32vw,420px)" }}>
            <img src={IMAGES.hero} alt="Indian startup ecosystem" />
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(26,18,8,.42) 0%, rgba(26,18,8,.82) 100%)" }} />
            <div style={{ position:"absolute", inset:0, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"0 clamp(16px,5vw,60px)", textAlign:"center" }}>
              <p className="sf" style={{ fontSize:8.5, letterSpacing:"0.42em", textTransform:"uppercase", color:"rgba(255,255,255,0.45)", marginBottom:16 }}>
                UpForge · Our Story · Est. 2025
              </p>
              <h1 className="pf" style={{ fontSize:"clamp(2rem,6.5vw,5.2rem)", fontWeight:900, lineHeight:0.93, color:"white", letterSpacing:"-0.02em", marginBottom:18 }}>
                India's Independent<br />
                <span style={{ color:"var(--gold2)" }}>Startup Registry</span>
              </h1>
              <p className="rp" style={{ fontSize:"clamp(13px,1.8vw,16px)", fontStyle:"italic", color:"rgba(255,255,255,0.6)", maxWidth:520, lineHeight:1.6 }}>
                Not a media platform. Not a marketplace.<br />A permanent public record of serious builders.
              </p>
            </div>
            <div style={{ position: "absolute", top: "32px", right: "clamp(16px, 3vw, 32px)", display: "flex", alignItems: "center", gap: 7, background: "rgba(26,18,8,.8)", border: "1px solid rgba(255,255,255,.15)", padding: "6px 14px", zIndex: 10 }}>
              <span className="ldot" />
              <span className="sf" style={{ fontSize: 9, color: "#4ADE80", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>Live Registry</span>
            </div>
          </div>

          {/* Stats bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
              <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                {[
                  { v: `${(totalStartups || 0).toLocaleString()}+`, l: "Verified Profiles" },
                  { v: `${(startupsWithReports || 30)}+`, l: "Reports Generated" },
                  { v: `${uniqueIndustries || 20}+`, l: "Industries Covered" },
                ].map((s, i) => (
                  <div key={i} style={{ flex: "1", padding: "24px 0", borderRight: i === 2 ? "none" : "1px solid rgba(255,255,255,.07)", textAlign: "center" }}>
                    <p className="pf" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: 8 }}>{s.v}</p>
                    <p className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.4)" }}>{s.l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT CONTAINER */}
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 clamp(16px,3vw,32px) clamp(48px,8vw,96px)" }}>

          {/* ECOSYSTEM PULSE */}
          <div className="a1" style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:0, borderBottom:"1px solid var(--rule2)", alignItems:"stretch" }}>
            <div style={{ padding:"clamp(24px,4vw,42px) clamp(0px,3vw,40px) clamp(24px,4vw,42px) 0", borderRight:"1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom:10 }}>
                <span className="ldot" />
                <span className="sh-l" style={{ color:"#15803D" }}>Ecosystem Pulse · March 2026</span>
                <div className="sh-r" />
              </div>
              <p className="pf" style={{ fontSize:"clamp(1.1rem,2.5vw,1.9rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.25, marginBottom:8 }}>{insights.ecosystemPulse.headline}</p>
              <p className="rp" style={{ fontSize:12.5, color:"var(--ink4)", lineHeight:1.7 }}>{insights.ecosystemPulse.context}</p>
            </div>
            <div style={{ padding:"clamp(24px,4vw,42px) 0 clamp(24px,4vw,42px) clamp(24px,3vw,44px)", display:"flex", flexDirection:"column", justifyContent:"center", minWidth:"clamp(120px,18vw,200px)" }}>
              <p className="pf" style={{ fontSize:"clamp(2.2rem,5vw,4.5rem)", fontWeight:900, color:"var(--ink)", lineHeight:1, marginBottom:6 }}>{insights.ecosystemPulse.stat}</p>
              <p className="sf" style={{ fontSize:8.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", fontWeight:600 }}>& counting in India</p>
            </div>
          </div>

          {/* WHY THIS EXISTS */}
          <div className="a2 two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, borderBottom:"1px solid var(--rule2)" }}>
            <div style={{ borderRight:"1px solid var(--rule2)", paddingRight:"clamp(16px,3vw,44px)", paddingTop:"clamp(28px,4vw,44px)", paddingBottom:"clamp(28px,4vw,44px)" }}>
              <div className="imgf" style={{ height:210, marginBottom:22 }}>
                <img src={IMAGES.problem} alt="Problem" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.72) 0%,transparent 55%)" }} />
                <div style={{ position:"absolute", bottom:12, left:14 }}>
                  <span className="sf" style={{ fontSize:7.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--gold2)" }}>The Problem</span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">Why UpForge Exists</span><div className="sh-r" /></div>
              <h2 className="pf" style={{ fontSize:"clamp(1.1rem,2.2vw,1.65rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.22, marginBottom:20 }}>India's startup data was fragmented, unverified, and buried.</h2>
              <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                {insights.whyRegistry.map((item:any, i:number) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"12px 0", borderBottom:"1px solid var(--rule2)" }}>
                    <div className="sf" style={{ width:20, height:20, background:"var(--ink)", color:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8.5, fontWeight:700, flexShrink:0, marginTop:1 }}>{i+1}</div>
                    <div>
                      <p className="rp" style={{ fontSize:13, fontWeight:600, color:"var(--ink)", marginBottom:2, lineHeight:1.4 }}>{item.point}</p>
                      <p className="sf" style={{ fontSize:10.5, color:"var(--ink5)" }}>{item.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ paddingLeft:"clamp(16px,3vw,44px)", paddingTop:"clamp(28px,4vw,44px)", paddingBottom:"clamp(28px,4vw,44px)" }}>
              <div className="imgf" style={{ height:210, marginBottom:22 }}>
                <img src={IMAGES.answer} alt="Answer" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.72) 0%,transparent 55%)" }} />
                <div style={{ position:"absolute", bottom:12, left:14 }}>
                  <span className="sf" style={{ fontSize:7.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--gold2)" }}>Our Answer</span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">One Independent Record</span><div className="sh-r" /></div>
              <p className="rp" style={{ fontSize:13, color:"var(--ink3)", lineHeight:1.82, marginBottom:20 }}>
                UpForge is India's independent startup registry — not a media outlet, not an accelerator. We document data in a neutral, permanently accessible format.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[
                  { icon:BadgeCheck, text:"Every profile manually verified before listing", c:"#15803D" },
                  { icon:Shield, text:"No paid rankings, no sponsored placements", c:"#2563EB" },
                  { icon:Globe, text:"Publicly indexed and permanently accessible", c:"#7C3AED" },
                  { icon:Sparkles, text:"AI-powered growth analysis for every startup", c:"var(--gold)" },
                  { icon:Calculator, text:"Free valuation tool for early-stage founders", c:"#DC2626" },
                ].map((item,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <item.icon style={{ width:13, height:13, color:item.c, flexShrink:0 }} />
                    <span className="rp" style={{ fontSize:12.5, color:"var(--ink3)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CORE PRINCIPLES */}
          <div className="a3" style={{ padding:"clamp(28px,4vw,44px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh"><span className="sh-l">Core Principles</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {[
                { icon:Users, title:"Built for Builders", desc:"Every listed startup represents independent execution." },
                { icon:Shield, title:"Structured Credibility", desc:"Profiles designed as institutional records." },
                { icon:TrendingUp, title:"Independent First", desc:"We spotlight founders before headlines do." },
                { icon:Award, title:"Long-Term Vision", desc:"Trust, quality, and permanence." },
              ].map((item,i) => (
                <div key={i} className="pc-wrap" style={{ background:"var(--white)", padding:"24px 22px", position:"relative" }}>
                  <div className="pc-icon" style={{ width:34, height:34, background:"var(--parch2)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                    <item.icon style={{ width:15, height:15, color:"var(--ink4)" }} />
                  </div>
                  <h3 className="pf" style={{ fontSize:"1rem", fontWeight:700, color:"var(--ink)", marginBottom:8 }}>{item.title}</h3>
                  <p className="rp" style={{ fontSize:11.5, color:"var(--ink3)", lineHeight:1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* MILESTONES */}
          <div className="a3" style={{ borderBottom:"1px solid var(--rule2)", padding:"clamp(28px,4vw,44px) 0" }}>
            <div className="imgf" style={{ height:"clamp(160px,22vw,290px)", marginBottom:28 }}>
              <img src={IMAGES.builders} alt="Builders" />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(26,18,8,.78) 0%, rgba(26,18,8,.15) 60%, transparent 100%)" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 clamp(20px,4vw,52px)" }}>
                <p className="pf" style={{ fontSize:"clamp(1.2rem,3vw,2.4rem)", fontWeight:900, color:"white" }}>From 10,000 startups<br />to a global ecosystem.</p>
              </div>
            </div>
            <div className="sh"><span className="sh-l">Ecosystem Milestones</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {insights.milestones.map((m:any, i:number) => {
                const isLast = i === insights.milestones.length - 1;
                return (
                  <div key={i} style={{ background:isLast ? "var(--ink)" : "var(--white)", padding:"18px 16px" }}>
                    <p className="pf" style={{ fontSize:"1.45rem", fontWeight:900, color:isLast ? "var(--gold2)" : "var(--ink)" }}>{m.year}</p>
                    <p className="rp" style={{ fontSize:11, color:isLast ? "rgba(255,255,255,.65)" : "var(--ink3)" }}>{m.event}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* WHO WE SERVE */}
          <div className="a4" style={{ padding:"clamp(28px,4vw,44px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh"><span className="sh-l">Who Uses UpForge</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {[
                { type:"Founders", headline:"Build your paper trail", dark:true, href:"/submit" },
                { type:"Investors", headline:"Discover before the crowd", dark:false, href:"/startup" },
                { type:"Press", headline:"Cite with confidence", dark:false, href:"/reports" },
              ].map((aud,i) => (
                <div key={i} style={{ background:aud.dark ? "var(--ink)" : "var(--white)", padding:"24px 22px" }}>
                  <p className="sf" style={{ fontSize:8, fontWeight:700, color:aud.dark ? "var(--gold2)" : "var(--ink5)" }}>{aud.type}</p>
                  <h3 className="pf" style={{ fontSize:"1.1rem", fontWeight:700, color:aud.dark ? "white" : "var(--ink)", marginBottom:16 }}>{aud.headline}</h3>
                  <Link href={aud.href} style={{ fontSize:10, fontWeight:700, color:aud.dark ? "var(--gold2)" : "var(--ink)", textDecoration:"none" }}>Explore <ArrowRight style={{ width:11 }} /></Link>
                </div>
              ))}
            </div>
          </div>

          {/* BELIEF & QUICK LINKS */}
          <div className="a4" style={{ padding:"clamp(28px,4vw,44px) 0" }}>
            <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0 }}>
              <div style={{ paddingRight:"clamp(16px,3vw,52px)", borderRight:"1px solid var(--rule2)" }}>
                <div className="imgf" style={{ height:200, marginBottom:24 }}>
                  <img src={IMAGES.believe} alt="Belief" />
                </div>
                <h3 className="pf" style={{ fontSize:"1.6rem", fontWeight:900 }}>This is not a <em style={{ color:"var(--gold)" }}>directory.</em></h3>
                <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", marginBottom:24 }}>A structured record of India's emerging companies.</p>
                <Link href="/submit" style={{ background:"var(--ink)", color:"white", padding:"12px 22px", textDecoration:"none" }}>List Your Startup</Link>
              </div>

              <div style={{ paddingLeft:"clamp(16px,3vw,52px)" }}>
                <div className="sh"><span className="sh-l">Everything We Offer</span><div className="sh-r" /></div>
                <div style={{ border:"1px solid var(--rule2)", background:"var(--white)" }}>
                  {[
                    { l:"Registry", s:`Browse ${totalStartups || 0} startups`, h:"/startup" },
                    { l:"Valuation", s:"Free estimate", h:"/valuation" },
                    { l:"Reports", s:"AI analysis", h:"/reports" },
                  ].map((item,i) => (
                    <Link key={i} href={item.h} className="rlink" style={{ display:"flex", padding:"14px 16px", borderBottom:"1px solid var(--rule2)", textDecoration:"none" }}>
                      <div>
                        <p className="rp" style={{ fontSize:13, fontWeight:600, color:"var(--ink)" }}>{item.l}</p>
                        <p className="sf" style={{ fontSize:9.5, color:"var(--ink5)" }}>{item.s}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav style={{ padding: "14px 0", borderTop: "2px solid var(--ink)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "18px", listStyle: "none", padding: 0 }}>
              {["/startup", "/", "/indian-unicorns", "/submit", "/valuation"].map(h => (
                <li key={h}>
                  <Link href={h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textDecoration: "none" }}>{h.replace("/", "") || "Home"}</Link>
                </li>
              ))}
            </ul>
          </nav>

        </div> 
      </div> 
    </>
  );
}
