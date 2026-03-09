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
  hero:     "/aboutus.jpg",
  problem:  "https://media.licdn.com/dms/image/v2/D5612AQHvdNFPlgO8mA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726469383648?e=2147483647&v=beta&t=TOuXsxGGTTfnFrJ16aAHJdDZwFLP2fjF5u-Cutu1q68",
  answer:   "data:image/jpeg;base64,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",
  builders: "https://p2.piqsels.com/preview/160/1022/497/startup-start-up-growth-hacking-market.jpg",
  believe:  "https://miro.medium.com/0*OzIZRmuVzMtG9M9X",
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

        /* live dot */
        .ldot { width:7px;height:7px;border-radius:50%;background:#22C55E;display:inline-block;flex-shrink:0;position:relative; }
        .ldot::after { content:'';display:block;width:100%;height:100%;border-radius:50%;background:rgba(34,197,94,.35);animation:lp 2s ease-in-out infinite;position:absolute;top:0;left:0; }
        @keyframes lp { 0%,100%{transform:scale(1);opacity:1} 50%{transform:scale(2.5);opacity:0} }

        /* verified badge */
        .vbadge {
          display:inline-flex;align-items:center;gap:3px;
          font-size:7.5px;font-weight:700;letter-spacing:.12em;
          text-transform:uppercase;color:#15803D;
          border:1px solid rgba(21,128,61,.3);padding:2px 7px;
          font-family:system-ui;
        }

        /* image frame */
        .imgf { position:relative;overflow:hidden; }
        .imgf img { position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;filter:sepia(18%) contrast(107%);transition:transform .6s ease; }
        .imgf:hover img { transform:scale(1.025); }

        /* section head */
        .sh { display:flex;align-items:center;gap:10px;margin-bottom:14px; }
        .sh-l { font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.26em;color:var(--ink5);font-family:system-ui;white-space:nowrap; }
        .sh-r { flex:1;height:1px;background:var(--rule2); }

        /* hover card */
        .hc { transition:background .18s,border-color .18s,transform .18s,box-shadow .18s; }
        .hc:hover { border-color:var(--ink)!important;transform:translate(-1px,-1px);box-shadow:3px 3px 0 var(--ink);z-index:1; }

        /* principle card icon */
        .pc-wrap:hover .pc-icon { background:var(--ink); }
        .pc-wrap:hover .pc-icon svg { color:var(--gold2)!important; }
        .pc-icon { transition:background .18s; }
        .pc-icon svg { transition:color .18s; }

        /* row link hover */
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

        {/* ══ HERO IMAGE MASTHEAD ══ */}
        <div className="a0" style={{ borderBottom:"3px solid var(--ink)" }}>
          {/* Full-bleed image */}
          <div className="imgf hero-h" style={{ height:"clamp(260px,32vw,420px)" }}>
            <img src={IMAGES.hero} alt="Indian startup ecosystem — founders building" />
            {/* Gradient overlays */}
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(26,18,8,.42) 0%, rgba(26,18,8,.82) 100%)" }} />
            {/* Centered headline */}
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
           {/* Live badge — top right */}
          <div style={{ 
            position: "absolute", 
            top: "32px", // Increased from 18 to clear the header
            right: "clamp(16px, 3vw, 32px)", 
            display: "flex", 
            alignItems: "center", 
            gap: 7, 
            background: "rgba(26,18,8,.8)", 
            border: "1px solid rgba(255,255,255,.15)", 
            padding: "6px 14px",
            zIndex: 10 // Ensures it stays above the gradient
          }}>
            <span className="ldot" />
            <span className="sf" style={{ fontSize: 9, color: "#4ADE80", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.16em" }}>
              Live Registry
            </span>
          </div>

          {/* Stats bar */}
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 clamp(16px, 3vw, 32px)" }}>
              <div style={{ 
                display: "flex", 
                flexDirection: "row", // Force horizontal
                justifyContent: "space-between", // Spread them out
                alignItems: "center"
              }}>
                {[
                  { v: `${(totalStartups || 0).toLocaleString()}+`, l: "Verified Profiles" },
                  { v: `${(startupsWithReports || 30)}+`, l: "Reports Generated" },
                  { v: `${uniqueIndustries || 20}+`, l: "Industries Covered" },
                ].map((s, i) => (
                  <div key={i} style={{ 
                    flex: "1", // Distribute space equally
                    padding: "24px 0", // Consistent vertical padding
                    borderRight: i === 2 ? "none" : "1px solid rgba(255,255,255,.07)",
                    textAlign: "center" // Keep numbers and text aligned
                  }}>
                    <p className="pf" style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 900, color: "white", lineHeight: 1, marginBottom: 8 }}>
                      {s.v}
                    </p>
                    <p className="sf" style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.4)" }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        {/* MAIN */}
        <div style={{ maxWidth:1300, margin:"0 auto", padding:"0 clamp(16px,3vw,32px) clamp(48px,8vw,96px)" }}>

          {/* ── ECOSYSTEM PULSE ── */}
          <div className="a1" style={{ display:"grid", gridTemplateColumns:"1fr auto", gap:0, borderBottom:"1px solid var(--rule2)", alignItems:"stretch" }}>
            <div style={{ padding:"clamp(24px,4vw,42px) clamp(0px,3vw,40px) clamp(24px,4vw,42px) 0", borderRight:"1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom:10 }}>
                <span className="ldot" />
                <span className="sh-l" style={{ color:"#15803D" }}>Ecosystem Pulse · March 2026</span>
                <div className="sh-r" />
              </div>
              <p className="pf" style={{ fontSize:"clamp(1.1rem,2.5vw,1.9rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.25, marginBottom:8 }}>
                {insights.ecosystemPulse.headline}
              </p>
              <p className="rp" style={{ fontSize:12.5, color:"var(--ink4)", lineHeight:1.7 }}>{insights.ecosystemPulse.context}</p>
            </div>
            <div style={{ padding:"clamp(24px,4vw,42px) 0 clamp(24px,4vw,42px) clamp(24px,3vw,44px)", display:"flex", flexDirection:"column", justifyContent:"center", minWidth:"clamp(120px,18vw,200px)" }}>
              <p className="pf" style={{ fontSize:"clamp(2.2rem,5vw,4.5rem)", fontWeight:900, color:"var(--ink)", lineHeight:1, marginBottom:6 }}>
                {insights.ecosystemPulse.stat}
              </p>
              <p className="sf" style={{ fontSize:8.5, color:"var(--ink5)", textTransform:"uppercase", letterSpacing:"0.18em", fontWeight:600 }}>& counting in India</p>
            </div>
          </div>

          {/* ── WHY THIS EXISTS — 2-col with images ── */}
          <div className="a2 two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, borderBottom:"1px solid var(--rule2)" }}>

            {/* Left — Problem */}
            <div style={{ borderRight:"1px solid var(--rule2)", paddingRight:"clamp(16px,3vw,44px)", paddingTop:"clamp(28px,4vw,44px)", paddingBottom:"clamp(28px,4vw,44px)" }}>
              <div className="imgf" style={{ height:210, marginBottom:22 }}>
                <img src={IMAGES.problem} alt="Fragmented startup data problem in India" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.72) 0%,transparent 55%)" }} />
                <div style={{ position:"absolute", bottom:12, left:14 }}>
                  <span className="sf" style={{ fontSize:7.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--gold2)" }}>The Problem</span>
                </div>
                <div style={{ position:"absolute", top:12, right:12 }}>
                  <span className="sf" style={{ fontSize:8, fontWeight:700, color:"white", background:"rgba(26,18,8,.55)", padding:"3px 9px", letterSpacing:"0.1em" }}>India 2026</span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">Why UpForge Exists</span><div className="sh-r" /></div>
              <h2 className="pf" style={{ fontSize:"clamp(1.1rem,2.2vw,1.65rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.22, marginBottom:20 }}>
                India's startup data was fragmented, unverified, and buried.
              </h2>
              <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
                {insights.whyRegistry.map((item:any, i:number) => (
                  <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:12, padding:"12px 0", borderBottom:"1px solid var(--rule2)" }}>
                    <div className="sf" style={{ width:20, height:20, background:"var(--ink)", color:"white", display:"flex", alignItems:"center", justifyContent:"center", fontSize:8.5, fontWeight:700, flexShrink:0, marginTop:1 }}>
                      {i+1}
                    </div>
                    <div>
                      <p className="rp" style={{ fontSize:13, fontWeight:600, color:"var(--ink)", marginBottom:2, lineHeight:1.4 }}>{item.point}</p>
                      <p className="sf" style={{ fontSize:10.5, color:"var(--ink5)" }}>{item.data}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Answer */}
            <div style={{ paddingLeft:"clamp(16px,3vw,44px)", paddingTop:"clamp(28px,4vw,44px)", paddingBottom:"clamp(28px,4vw,44px)" }}>
              <div className="imgf" style={{ height:210, marginBottom:22 }}>
                <img src={IMAGES.answer} alt="UpForge as India's trusted startup registry" />
                <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.72) 0%,transparent 55%)" }} />
                <div style={{ position:"absolute", bottom:12, left:14 }}>
                  <span className="sf" style={{ fontSize:7.5, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.2em", color:"var(--gold2)" }}>Our Answer</span>
                </div>
              </div>
              <div className="sh"><span className="sh-l">Our Answer</span><div className="sh-r" /></div>
              <h2 className="pf" style={{ fontSize:"clamp(1.1rem,2.2vw,1.65rem)", fontWeight:700, color:"var(--ink)", lineHeight:1.22, marginBottom:14 }}>
                One structured, independent public record.
              </h2>
              <p className="rp" style={{ fontSize:13, color:"var(--ink3)", lineHeight:1.82, marginBottom:20 }}>
                UpForge is India's independent startup registry — not a media outlet, not an accelerator,
                not a ranking system. We document publicly available and founder-submitted data in a
                neutral, structured, permanently accessible format.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                {[
                  { icon:BadgeCheck, text:"Every profile manually verified before listing",  c:"#15803D" },
                  { icon:Shield,     text:"No paid rankings, no sponsored placements",       c:"#2563EB" },
                  { icon:Globe,      text:"Publicly indexed and permanently accessible",     c:"#7C3AED" },
                  { icon:Sparkles,   text:"AI-powered growth analysis for every startup",   c:"var(--gold)" },
                  { icon:Calculator, text:"Free valuation tool for early-stage founders",   c:"#DC2626" },
                ].map((item,i) => (
                  <div key={i} style={{ display:"flex", alignItems:"center", gap:10 }}>
                    <item.icon style={{ width:13, height:13, color:item.c, flexShrink:0 }} />
                    <span className="rp" style={{ fontSize:12.5, color:"var(--ink3)" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── CORE PRINCIPLES ── */}
          <div className="a3" style={{ padding:"clamp(28px,4vw,44px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh"><span className="sh-l">Core Principles</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {[
                { icon:Users,      title:"Built for Builders",     desc:"Every listed startup represents independent execution. We prioritize clarity and structured documentation over short-term hype." },
                { icon:Shield,     title:"Structured Credibility", desc:"Profiles are designed as institutional records — founders build digital credibility that compounds over time." },
                { icon:TrendingUp, title:"Independent First",      desc:"We spotlight founders before headlines do. Discoverability is structured around substance, not social noise." },
                { icon:Award,      title:"Long-Term Vision",       desc:"UpForge aims to become India's most trusted independent founder network — defined by quality, structure, and permanence." },
              ].map((item,i) => (
                <div key={i} className="pc-wrap" style={{ background:"var(--white)", padding:"24px 22px", position:"relative", cursor:"default" }}>
                  <div style={{ position:"absolute", top:0, left:0, right:0, height:2, background:"var(--rule2)", transition:"background .18s" }} />
                  <div className="pc-icon" style={{ width:34, height:34, background:"var(--parch2)", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:14 }}>
                    <item.icon style={{ width:15, height:15, color:"var(--ink4)" }} />
                  </div>
                  <h3 className="pf" style={{ fontSize:"1rem", fontWeight:700, color:"var(--ink)", marginBottom:8, lineHeight:1.2 }}>{item.title}</h3>
                  <p className="rp" style={{ fontSize:11.5, color:"var(--ink3)", lineHeight:1.75 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── BUILDERS IMAGE + TIMELINE ── */}
          <div className="a3" style={{ borderBottom:"1px solid var(--rule2)", padding:"clamp(28px,4vw,44px) 0" }}>
            {/* Full-width editorial image */}
            <div className="imgf" style={{ height:"clamp(160px,22vw,290px)", marginBottom:28 }}>
              <img src={IMAGES.builders} alt="Indian startup founders building together" />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to right, rgba(26,18,8,.78) 0%, rgba(26,18,8,.15) 60%, transparent 100%)" }} />
              <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", padding:"0 clamp(20px,4vw,52px)" }}>
                <div>
                  <p className="sf" style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.3em", color:"var(--gold2)", marginBottom:10 }}>
                    India's Startup Journey
                  </p>
                  <p className="pf" style={{ fontSize:"clamp(1.2rem,3vw,2.4rem)", fontWeight:900, color:"white", lineHeight:1.12, maxWidth:440 }}>
                    From 10,000 startups<br />to a global ecosystem.
                  </p>
                </div>
              </div>
              <div style={{ position:"absolute", top:16, right:18, display:"flex", alignItems:"center", gap:7, background:"rgba(26,18,8,.6)", padding:"5px 12px" }}>
                <span className="ldot" />
                <span className="sf" style={{ fontSize:8.5, color:"#4ADE80", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em" }}>We Are Here</span>
              </div>
            </div>

            <div className="sh"><span className="sh-l">Ecosystem Milestones</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(155px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {insights.milestones.map((m:any, i:number) => {
                const isLast = i === insights.milestones.length - 1;
                return (
                  <div key={i} style={{ background:isLast ? "var(--ink)" : "var(--white)", padding:"18px 16px" }}>
                    <p className="pf" style={{ fontSize:"1.45rem", fontWeight:900, color:isLast ? "var(--gold2)" : "var(--ink)", lineHeight:1, marginBottom:6 }}>{m.year}</p>
                    <p className="rp" style={{ fontSize:11, color:isLast ? "rgba(255,255,255,.65)" : "var(--ink3)", lineHeight:1.65 }}>{m.event}</p>
                    {isLast && (
                      <div style={{ display:"flex", alignItems:"center", gap:6, marginTop:8 }}>
                        <span className="ldot" />
                        <span className="sf" style={{ fontSize:8, color:"#4ADE80", fontWeight:700 }}>Now</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── WHO WE SERVE ── */}
          <div className="a4" style={{ padding:"clamp(28px,4vw,44px) 0", borderBottom:"1px solid var(--rule2)" }}>
            <div className="sh"><span className="sh-l">Who Uses UpForge</span><div className="sh-r" /></div>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(260px,1fr))", gap:1, background:"var(--rule2)", border:"1px solid var(--rule2)" }}>
              {[
                {
                  type:"Founders",
                  headline:"Build your digital paper trail",
                  benefits:[
                    "Free verified listing that compounds over time",
                    "AI-generated growth analysis report",
                    "Institutional credibility before press coverage",
                    "Free startup valuation estimate",
                  ],
                  cta:{ label:"List Your Startup", href:"/submit" },
                  dark:true,
                },
                {
                  type:"Investors & VCs",
                  headline:"Discover before the crowd",
                  benefits:[
                    "Browse 72,000+ structured startup profiles",
                    "Filter by sector, city, founding year",
                    "Verified data — no noise, no duplicates",
                    "Track emerging sectors with live data",
                  ],
                  cta:{ label:"Explore Registry", href:"/startup" },
                  dark:false,
                },
                {
                  type:"Researchers & Press",
                  headline:"Cite with confidence",
                  benefits:[
                    "Structured, verified data you can reference",
                    "Sector-level momentum reports",
                    "Live ecosystem metrics, updated regularly",
                    "Independent — no commercial bias",
                  ],
                  cta:{ label:"View Insights", href:"/reports" },
                  dark:false,
                },
              ].map((aud,i) => (
                <div key={i} style={{ background:aud.dark ? "var(--ink)" : "var(--white)", padding:"24px 22px", display:"flex", flexDirection:"column" }}>
                  <p className="sf" style={{ fontSize:8, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.24em", color:aud.dark ? "var(--gold2)" : "var(--ink5)", marginBottom:6 }}>
                    {aud.type}
                  </p>
                  <h3 className="pf" style={{ fontSize:"1.1rem", fontWeight:700, color:aud.dark ? "white" : "var(--ink)", lineHeight:1.2, marginBottom:16 }}>
                    {aud.headline}
                  </h3>
                  <div style={{ display:"flex", flexDirection:"column", gap:9, flex:1, marginBottom:18 }}>
                    {aud.benefits.map((b,j) => (
                      <div key={j} style={{ display:"flex", alignItems:"flex-start", gap:8 }}>
                        <CheckCircle2 style={{ width:12, height:12, marginTop:1, flexShrink:0, color:aud.dark ? "#4ADE80" : "#15803D" }} />
                        <span className="rp" style={{ fontSize:11.5, color:aud.dark ? "rgba(255,255,255,.65)" : "var(--ink3)", lineHeight:1.6 }}>{b}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={aud.cta.href} style={{ display:"inline-flex", alignItems:"center", gap:6, fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", fontFamily:"system-ui", color:aud.dark ? "var(--gold2)" : "var(--ink)", textDecoration:"none" }}>
                    {aud.cta.label} <ArrowRight style={{ width:11, height:11 }} />
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* ── CLOSING — belief + image + quick links ── */}
          <div className="a4" style={{ padding:"clamp(28px,4vw,44px) 0" }}>
            <div className="two-col" style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:0, alignItems:"start" }}>

              {/* Left — belief statement with image */}
              <div style={{ paddingRight:"clamp(16px,3vw,52px)", borderRight:"1px solid var(--rule2)" }}>
                {/* Editorial image */}
                <div className="imgf" style={{ height:"clamp(180px,20vw,250px)", marginBottom:24 }}>
                  <img src={IMAGES.believe} alt="Founders building India's future" />
                  <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(26,18,8,.65) 0%,rgba(26,18,8,.15) 60%,transparent 100%)" }} />
                  {/* Pull quote on image */}
                  <div style={{ position:"absolute", bottom:0, left:0, right:0, padding:"14px 16px" }}>
                    <p className="pf" style={{ fontSize:"clamp(0.85rem,1.8vw,1.05rem)", fontStyle:"italic", color:"white", lineHeight:1.35 }}>
                      "Built to last, not to trend."
                    </p>
                  </div>
                </div>

                <div className="sh"><span className="sh-l">Our Belief</span><div className="sh-r" /></div>
                <h3 className="pf" style={{ fontSize:"clamp(1.6rem,3.5vw,2.8rem)", fontWeight:900, color:"var(--ink)", lineHeight:1.04, marginBottom:16 }}>
                  This is not a{" "}
                  <em style={{ color:"var(--gold)", fontStyle:"italic" }}>directory.</em>
                </h3>
                <p className="rp" style={{ fontSize:13.5, color:"var(--ink3)", lineHeight:1.85, marginBottom:24, maxWidth:460 }}>
                  It is a signal that serious founders are building. A structured record of India's emerging companies.
                  A quiet infrastructure layer beneath the ecosystem — built to last, not to trend.
                </p>
                <div style={{ display:"flex", gap:10, flexWrap:"wrap" }}>
                  <Link href="/startup" style={{ display:"inline-flex", alignItems:"center", gap:7, background:"var(--ink)", color:"white", padding:"12px 22px", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", fontFamily:"system-ui", textDecoration:"none" }}>
                    Explore Registry <ArrowRight style={{ width:11, height:11 }} />
                  </Link>
                  <Link href="/submit" style={{ display:"inline-flex", alignItems:"center", gap:7, border:"2px solid var(--ink)", color:"var(--ink)", padding:"12px 22px", fontSize:10, fontWeight:700, textTransform:"uppercase", letterSpacing:"0.14em", fontFamily:"system-ui", textDecoration:"none", background:"transparent" }}>
                    List Your Startup
                  </Link>
                </div>
              </div>

              {/* Right — quick links */}
              <div style={{ paddingLeft:"clamp(16px,3vw,52px)" }}>
                <div className="sh"><span className="sh-l">Everything We Offer</span><div className="sh-r" /></div>
                <div style={{ border:"1px solid var(--rule2)", background:"var(--white)" }}>
                  {[
                    { icon:Building2,  label:"Startup Registry",    sub:`Browse ${(totalStartups||0).toLocaleString()}+ verified startups`, href:"/startup" },
                    { icon:Calculator, label:"Valuation Tool",      sub:"Free estimate in 2 minutes",                href:"/valuation" },
                    { icon:FileText,   label:"Growth Reports",      sub:"AI-generated analysis per startup",         href:"/reports"   },
                    { icon:Zap,        label:"Sector Intelligence", sub:"Live funding & momentum data",              href:"/"          },
                    { icon:Target,     label:"Submit a Startup",    sub:"Free listing, always",                      href:"/submit"    },
                  ].map((item,i) => (
                    <Link key={i} href={item.href} className="rlink" style={{ display:"flex", alignItems:"center", gap:12, padding:"14px 16px", borderBottom:"1px solid var(--rule2)", textDecoration:"none", background:"transparent", transition:"background .13s" }}>
                      <item.icon style={{ width:14, height:14, color:"var(--ink5)", flexShrink:0 }} />
                      <div style={{ flex:1, minWidth:0 }}>
                        <p className="rp" style={{ fontSize:13, fontWeight:600, color:"var(--ink)", lineHeight:1, marginBottom:2 }}>{item.label}</p>
                        <p className="sf" style={{ fontSize:9.5, color:"var(--ink5)" }}>{item.sub}</p>
                      </div>
                      <ArrowRight style={{ width:10, height:10, color:"var(--ink5)", flexShrink:0 }} />
                    </Link>
                  ))}
                </div>

                {/* Inline pull quote card */}
                <div style={{ marginTop:1, background:"var(--parch2)", border:"1px solid var(--rule2)", borderTop:"none", padding:"18px 18px" }}>
                  <div style={{ position:"relative", paddingLeft:14, borderLeft:"2px solid var(--gold)" }}>
                    <p className="pf" style={{ fontSize:"clamp(0.9rem,1.8vw,1.05rem)", fontStyle:"italic", color:"var(--ink)", lineHeight:1.5, marginBottom:6 }}>
                      "India's most comprehensive startup database — verified, structured, free forever."
                    </p>
                    <div className="vbadge"><BadgeCheck style={{ width:8, height:8 }} /> Independent Registry</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

   {/* ── FOOTER NAV ── */}
          <nav style={{ padding: "14px 0", borderTop: "2px solid var(--ink)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 18px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Startup Registry", h: "/startup" },
                { l: "Indian Startup Founders", h: "/" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "Submit Your Startup", h: "/submit" },
                { l: "Valuation Tool", h: "/valuation" },
              ].map(lnk => (
                <li key={lnk.h}>
                  <Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div> 
      </div> 
    </>
  );
}
