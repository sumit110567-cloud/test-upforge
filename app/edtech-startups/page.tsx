// app/edtech-startups/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top EdTech Startups in India 2026: Best Education Technology Companies | UpForge",
  description:
    "India's top EdTech startups in 2026 — from BYJU'S and PhysicsWallah to Unacademy, Vedantu, and Skill-Lync. Explore funding, student reach, founder stories, and what's next for Indian education tech.",
  keywords: [
    "top edtech startups India 2026",
    "best education technology companies India",
    "Indian edtech unicorns 2026",
    "edtech startup funding India",
    "BYJU'S PhysicsWallah Unacademy",
    "online learning platforms India",
    "edtech founders India",
    "education startup India ranking",
  ].join(", "),
  alternates: { canonical: "https://upforge.in/edtech-startups" },
  openGraph: {
    title: "Top EdTech Startups in India 2026: Best Education Technology Companies",
    description:
      "India educates 250 million students. These are the EdTech startups building the infrastructure for the next generation.",
    url: "https://upforge.in/edtech-startups",
    siteName: "UpForge",
    images: [{ url: "https://upforge.in/og-edtech-startups.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Top EdTech Startups India 2026 | UpForge",
    description: "BYJU'S, PhysicsWallah, Unacademy — India's EdTech revolution, ranked and profiled.",
  },
};

const IMGS = {
  hero: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1600&q=85&auto=format",
  pw: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80&auto=format",
  unacademy: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&auto=format",
  vedantu: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=900&q=80&auto=format",
  skilllync: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=80&auto=format",
  scaler: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80&auto=format",
  banner: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1600&q=80&auto=format",
};

const STARTUPS = [
  {
    rank: "01",
    name: "PhysicsWallah",
    founder: "Alakh Pandey & Prateek Maheshwari",
    sector: "K-12 · JEE / NEET · Live Classes",
    city: "Noida",
    founded: 2014,
    students: "10M+ Students",
    stage: "Unicorn · $1.1B Valuation",
    slug: "physicswallah",
    img: IMGS.pw,
    what: "PhysicsWallah is India's most loved EdTech brand — starting as a YouTube channel by a passionate teacher, growing into a unicorn with 10M+ students and a presence across 200+ cities through Vidyapeeth offline centres.",
    why: "Most EdTech companies were premium. PW was radically affordable. ₹999/year for a JEE course that cost ₹80,000 at Kota coaching centres — and it worked just as well. Price disruption at education scale is nation-changing.",
    tags: ["K-12", "JEE/NEET", "Affordable EdTech"],
    link: "/startup/physicswallah",
  },
  {
    rank: "02",
    name: "Unacademy",
    founder: "Gaurav Munjal, Roman Saini & Hemesh Singh",
    sector: "Test Prep · Government Exams · UPSC",
    city: "Bengaluru",
    founded: 2015,
    students: "70M+ Learners",
    stage: "Unicorn · $3.4B Peak Valuation",
    slug: "unacademy",
    img: IMGS.unacademy,
    what: "Unacademy is India's largest learning platform — covering UPSC, SSC, banking, engineering, and school education through live classes, recorded content, and a network of 15,000+ educators.",
    why: "Roman Saini left medical school after cracking IAS at 22 to help others do the same. Unacademy was built with the conviction that quality teaching should reach every aspirant in India — not just those in Delhi or Pune.",
    tags: ["UPSC", "Government Exams", "Live Learning"],
    link: "/startup/unacademy",
  },
  {
    rank: "03",
    name: "Vedantu",
    founder: "Vamsi Krishna & Pulkit Jain",
    sector: "Live Tutoring · K-12",
    city: "Bengaluru",
    founded: 2011,
    students: "35M+ Students",
    stage: "Unicorn · Series E",
    slug: "vedantu",
    img: IMGS.vedantu,
    what: "Vedantu pioneered live online tutoring in India — connecting students directly with expert teachers for real-time, interactive sessions that feel like having a private tutor at ₹500/month.",
    why: "The founders were IIT Roorkee graduates who ran a coaching centre first. They saw what happened to students who couldn't get into the best physical coaching — and built the digital version that anyone could access.",
    tags: ["Live Tutoring", "Interactive Learning", "K-12"],
    link: "/startup/vedantu",
  },
  {
    rank: "04",
    name: "Scaler Academy",
    founder: "Abhimanyu Saxena & Anshuman Singh",
    sector: "Tech Education · Upskilling",
    city: "Bengaluru",
    founded: 2019,
    students: "30,000+ Engineers",
    stage: "Series B · $710M Valuation",
    slug: "scaler",
    img: IMGS.scaler,
    what: "Scaler Academy is a tech education platform that takes software engineers from mid-level to FAANG-ready — with live mentoring, peer cohorts, and a placement rate that embarrasses most engineering colleges.",
    why: "India produces 1.5M engineering graduates a year. Most are not industry-ready. Scaler exists to close that gap — and charges only after students get placed. The outcome-aligned model changed how premium upskilling works.",
    tags: ["Upskilling", "Placement Guarantee", "Tech Education"],
    link: "/startup/scaler",
  },
  {
    rank: "05",
    name: "Skill-Lync",
    founder: "Vignesh Rajendran",
    sector: "Engineering Upskilling · Core Tech",
    city: "Chennai",
    founded: 2018,
    students: "15,000+ Engineers",
    stage: "Series B",
    slug: "skill-lync",
    img: IMGS.skilllync,
    what: "Skill-Lync trains mechanical, electrical, and civil engineers in simulation tools, CAD software, and industry workflows — bridging the massive gap between engineering college curricula and actual industry requirements.",
    why: "While most EdTech chased software developers, Skill-Lync went after core engineering — a segment with 800,000+ graduates annually who had no quality upskilling option. Niche focus on an underserved market created a defensible business.",
    tags: ["Core Engineering", "CAD/CAE", "Simulation"],
    link: "/startup/skill-lync",
  },
];

const STATS = [
  { val: "₹16,000Cr", label: "EdTech Funding in India (FY24–25)" },
  { val: "8+", label: "EdTech Unicorns in India" },
  { val: "250M", label: "Students in India's Education System" },
  { val: "340M", label: "Potential Online Learners by 2027" },
];

const TRENDS = [
  { icon: "🧠", title: "AI-Personalized Learning", desc: "Adaptive platforms that tailor content to each student's learning pace and gaps." },
  { icon: "🌐", title: "Vernacular EdTech", desc: "Content in Hindi, Tamil, Telugu, Kannada — finally reaching Tier 3 India." },
  { icon: "🏫", title: "Phygital Hybrid Models", desc: "Online content + offline study centres — the post-BYJU'S correction in EdTech strategy." },
  { icon: "🎯", title: "Outcome-Linked Pricing", desc: "Pay after placement — Scaler's model is forcing the sector to be accountable for results." },
];

export default function EdTechStartupsPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');

        .pf  { font-family: 'Playfair Display', Georgia, serif !important; }
        .rp  { font-family: 'Georgia', 'Times New Roman', serif; }
        .sf  { font-family: system-ui, -apple-system, sans-serif; }

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
          --accent: #7C3AED;
          --accentlt: #F5F3FF;
          --white:  #FDFCF9;
        }

        body { background: var(--parch); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
        .a1 { animation: fadeUp .44s .10s cubic-bezier(.16,1,.3,1) both; }
        .a2 { animation: fadeUp .44s .20s cubic-bezier(.16,1,.3,1) both; }

        .imgf { position: relative; overflow: hidden; }
        .imgf img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          filter: sepia(10%) contrast(108%);
          transition: transform .6s ease;
        }
        .imgf:hover img { transform: scale(1.04); }

        .startup-card {
          border: 1.5px solid var(--ink);
          background: var(--white);
          overflow: hidden; position: relative;
          transition: transform .15s, box-shadow .15s;
        }
        .startup-card:hover { transform: translate(-2px,-2px); box-shadow: 4px 4px 0 var(--ink); }
        .startup-card::before {
          content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, #5B21B6, var(--accent), #A78BFA);
        }

        .stat-box {
          border: 1.5px solid var(--ink); background: var(--white);
          padding: 22px 18px; text-align: center; position: relative; overflow: hidden;
        }
        .stat-box::after {
          content: ''; position: absolute; bottom: 0; left: 0; right: 0;
          height: 2px; background: linear-gradient(90deg, #5B21B6, #A78BFA);
        }

        .trend-card {
          border: 1.5px solid var(--rule2); background: var(--white);
          padding: 18px; position: relative; overflow: hidden;
          transition: transform .15s, box-shadow .15s;
        }
        .trend-card:hover { transform: translate(-2px,-2px); box-shadow: 3px 3px 0 var(--ink); }

        .tag {
          display: inline-block; padding: 2px 8px;
          border: 1px solid rgba(124,58,237,.3); background: var(--accentlt);
          font-size: 8px; font-weight: 700; text-transform: uppercase;
          letter-spacing: .12em; color: var(--accent); font-family: system-ui;
        }

        .sh { display: flex; align-items: center; gap: 10px; }
        .sh-l { font-size: 8px; font-weight: 700; text-transform: uppercase; letter-spacing: .28em; color: var(--ink5); font-family: system-ui; white-space: nowrap; }
        .sh-r { flex: 1; height: 1px; background: var(--rule2); }

        @media (max-width: 900px) { .card-grid { grid-template-columns: 1fr !important; } .stat-grid { grid-template-columns: repeat(2,1fr) !important; } .trend-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 600px) { .stat-grid { grid-template-columns: 1fr !important; } .trend-grid { grid-template-columns: 1fr !important; } }
      `}</style>

      <main
        itemScope
        itemType="https://schema.org/CollectionPage"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              name: "Top EdTech Startups in India 2026",
              description: "India's top education technology startups — ranked by student reach, funding, and impact on learning outcomes.",
              url: "https://upforge.in/edtech-startups",
              publisher: { "@type": "Organization", name: "UpForge", url: "https://upforge.in" },
              dateModified: new Date().toISOString().split("T")[0],
            }),
          }}
        />

        {/* BREADCRUMB */}
        <nav className="sf a0" style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}>
              <li><Link href="/" style={{ color: "var(--ink5)", textDecoration: "none" }}>UpForge</Link></li>
              <li style={{ color: "var(--rule)" }}>/</li>
              <li style={{ color: "var(--ink4)", fontWeight: 700 }}>EdTech Startups</li>
            </ol>
          </div>
        </nav>

        {/* HERO */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,38vw,480px)" }}>
            <img src={IMGS.hero} alt="Top EdTech Startups India 2026" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(46,16,101,.4) 0%, rgba(46,16,101,.88) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px,5vw,64px)", textAlign: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["EdTech", "Education Technology", "India 2026"].map(tag => (
                  <span key={tag} className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 10px" }}>{tag}</span>
                ))}
              </div>
              <h1 className="pf" itemProp="name" style={{ fontSize: "clamp(1.8rem,5.5vw,4.2rem)", fontWeight: 900, lineHeight: 1.02, color: "white", letterSpacing: "-0.02em", marginBottom: 18, maxWidth: 860 }}>
                Top EdTech Startups in India 2026:{" "}
                <em style={{ color: "#A78BFA", fontStyle: "italic" }}>Rewriting How 250 Million Learn</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                From a YouTube channel in Allahabad to a unicorn valued at $1.1B — India's EdTech story is one for the ages.
              </p>
            </div>
            <div className="sf" style={{ position: "absolute", top: 18, right: 18, background: "rgba(46,16,101,.75)", border: "1px solid rgba(255,255,255,.1)", padding: "5px 12px", fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,.55)" }}>
              UpForge · EdTech Intelligence
            </div>
          </div>
          <div style={{ background: "var(--ink)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Updated", v: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" }) },
                  { l: "Startups Listed", v: "5 Featured · 8+ Unicorns Tracked" },
                  { l: "Category", v: "EdTech · Education Technology" },
                  { l: "Coverage", v: "K-12 · Higher Ed · Upskilling" },
                ].map((m, i) => (
                  <div key={i} style={{ padding: "12px 20px", borderRight: "1px solid rgba(255,255,255,.07)" }}>
                    <p className="sf" style={{ fontSize: 7.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.18em", color: "rgba(255,255,255,.3)", marginBottom: 3 }}>{m.l}</p>
                    <p className="sf" style={{ fontSize: 11, color: "rgba(255,255,255,.6)", fontWeight: 600 }}>{m.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* MAIN */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* INTRO */}
          <div className="a1" style={{ padding: "clamp(28px,4vw,48px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 18 }}><span className="sh-l">The EdTech Opportunity</span><div className="sh-r" /></div>
            <p className="pf" itemProp="description" style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18, maxWidth: 760 }}>
              India has 250 million students and one of the most competitive exam systems in the world. For decades, quality education was available only in major cities — and only to those who could pay Kota coaching centre fees.
            </p>
            <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, maxWidth: 720 }}>
              These are the startups that changed that equation — making world-class education accessible to a student in a small town in Bihar with a phone and a determination to learn.
            </p>
          </div>

          {/* STATS */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">India EdTech by the Numbers</span><div className="sh-r" /></div>
            <div className="stat-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {STATS.map((s, i) => (
                <div key={i} className="stat-box">
                  <p className="pf" style={{ fontSize: "clamp(1.4rem,2.5vw,2rem)", fontWeight: 900, color: "var(--ink)", marginBottom: 6, lineHeight: 1 }}>{s.val}</p>
                  <p className="sf" style={{ fontSize: 9.5, color: "var(--ink4)", lineHeight: 1.5, textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* TRENDS */}
          <div className="a2" style={{ padding: "clamp(24px,4vw,40px) 0", borderBottom: "1px solid var(--rule2)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">EdTech Trends · 2026</span><div className="sh-r" /></div>
            <div className="trend-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
              {TRENDS.map((t, i) => (
                <div key={i} className="trend-card">
                  <div style={{ fontSize: "1.6rem", marginBottom: 10 }}>{t.icon}</div>
                  <h3 className="sf" style={{ fontSize: 11, fontWeight: 800, color: "var(--ink)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>{t.title}</h3>
                  <p className="rp" style={{ fontSize: 12, color: "var(--ink4)", lineHeight: 1.65 }}>{t.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* STARTUPS */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            <div className="sh" style={{ marginBottom: 20 }}><span className="sh-l">Featured EdTech Startups · India 2026</span><div className="sh-r" /></div>

            {STARTUPS.map((s, idx) => (
              <div key={idx} className="startup-card" style={{ marginBottom: 20 }}>
                <div className="card-grid" style={{ display: "grid", gridTemplateColumns: idx % 2 === 0 ? "1fr 300px" : "300px 1fr", gap: 0, minHeight: 300 }}>
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(46,16,101,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,32px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--accent)" }}>Rank {s.rank}</span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.city} · Est. {s.founded}</span>
                      </div>
                      <h2 className="pf" style={{ fontSize: "clamp(1.3rem,2.5vw,1.9rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.1, marginBottom: 6 }}>{s.name}</h2>
                      <p className="sf" style={{ fontSize: 10, color: "var(--ink4)", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 600 }}>{s.sector}</p>
                      <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.85, marginBottom: 12 }}>{s.what}</p>
                      <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", lineHeight: 1.8, fontStyle: "italic" }}>{s.why}</p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 14 }}>
                        {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </div>

                    <div style={{ marginTop: 20, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
                      <div style={{ display: "flex", gap: 16 }}>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>Reach</p>
                          <p className="sf" style={{ fontSize: 13, fontWeight: 800, color: "var(--accent)" }}>{s.students}</p>
                        </div>
                        <div>
                          <p className="sf" style={{ fontSize: 7.5, textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ink5)", marginBottom: 2 }}>Stage</p>
                          <p className="sf" style={{ fontSize: 12, fontWeight: 700, color: "var(--ink)" }}>{s.stage}</p>
                        </div>
                      </div>
                      <Link href={s.link} style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "var(--ink)", color: "white", padding: "8px 16px", textDecoration: "none", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.14em", fontFamily: "system-ui" }}>
                        Full Profile →
                      </Link>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 280 }}>
                      <img src={s.img} alt={s.name} />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left, rgba(46,16,101,.65) 0%, transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.1)", lineHeight: 1 }}>{s.rank}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CLOSING */}
          <div style={{ marginTop: "clamp(36px,6vw,64px)", border: "1.5px solid var(--ink)", background: "var(--ink)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #5B21B6, var(--accent), #A78BFA, var(--accent), #5B21B6)" }} />
            <div className="imgf" style={{ height: 180 }}>
              <img src={IMGS.banner} alt="India EdTech ecosystem" style={{ filter: "sepia(30%) brightness(0.35) contrast(1.1)" }} />
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 clamp(20px,5vw,60px)", textAlign: "center" }}>
                <p className="pf" style={{ fontSize: "clamp(1.2rem,2.8vw,2rem)", fontWeight: 700, color: "white", lineHeight: 1.25, fontStyle: "italic" }}>
                  "The greatest startup opportunity in India is not fintech or AI.{" "}
                  <em style={{ color: "#A78BFA" }}>It is making quality education reach the last student.</em>"
                </p>
              </div>
            </div>
            <div style={{ padding: "clamp(20px,3vw,36px)" }}>
              <p className="rp" style={{ fontSize: 13.5, color: "rgba(255,255,255,.7)", lineHeight: 1.85, maxWidth: 720 }}>
                UpForge tracks every significant EdTech startup in India — from K-12 platforms to professional upskilling companies. Explore founder stories, funding timelines, and the leaders building the future of Indian education.
              </p>
            </div>
          </div>

          {/* FOOTER NAV */}
          <nav aria-label="Page navigation" style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}>
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {[
                { l: "Top AI Startups", h: "/top-ai-startups" },
                { l: "Best SaaS Startups", h: "/best-saas-startups" },
                { l: "FinTech Startups", h: "/fintech-startups" },
                { l: "Indian Unicorns 2026", h: "/indian-unicorns" },
                { l: "All Startups", h: "/startup" },
                { l: "Submit Startup", h: "/submit" },
              ].map(lnk => (
                <li key={lnk.h}><Link href={lnk.h} className="sf" style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}>{lnk.l}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
