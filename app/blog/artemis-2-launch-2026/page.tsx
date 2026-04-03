// app/blog/artemis-2-launch-2026/page.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Target keywords: "artemis 2", "artemis 2 launch", "nasa artemis ii",
//                  "artemis 2 launch time", "artemis 2 launch date",
//                  "nasa artemis ii astronauts", "artemis 2 launch time in india"
// ─────────────────────────────────────────────────────────────────────────────

import Link from "next/link"
import type { Metadata } from "next"
import {
  buildBlogMetadata,
  buildBlogJsonLd,
  SAFE_BLOG_FOOTER_LINKS,
  ALL_BLOG_SLUGS,
} from "../_config/blog.config"

const POST = {
  slug:          "artemis-2-launch-2026",
  title:         "Artemis II Has Launched: Humanity Returns to the Moon — Full Mission Guide (2026)",
  description:   "NASA's Artemis II lifted off on April 1, 2026 at 6:35 PM EDT — the first crewed lunar mission in over 50 years. Full coverage: crew profiles, launch time in IST, mission timeline, what the astronauts will do near the Moon, and what it means for India's space ambitions.",
  keywords: [
    "artemis 2",
    "artemis 2 launch",
    "nasa artemis ii",
    "nasa artemis ii astronauts",
    "artemis 2 launch date",
    "artemis 2 launch time",
    "artemis 2 launch time in india",
    "artemis 2 launch time ist",
    "artemis ii crew",
    "nasa artemis rocket launch",
    "artemis 2 mission details",
    "artemis 2 moon flyby",
    "nasa artemis launch 2026",
    "artemis ii splashdown date",
    "reid wiseman victor glover christina koch jeremy hansen",
    "sls orion spacecraft moon 2026",
    "first humans moon 2026",
    "india nasa artemis 2026",
    "artemis 2 pictures images",
  ],
  datePublished: "2026-04-03",
  dateModified:  "2026-04-03",
  readTime:      "12 min",
  category:      "Space & Science",
  heroImage:     "https://images.unsplash.com/photo-1517976487492-5750f3195933?w=1600&q=85&auto=format",
  heroImageAlt:  "NASA Artemis II rocket launch 2026 — first crewed lunar mission in 50 years",
  wordCount:     3100,
}

export const metadata: Metadata = buildBlogMetadata(POST)

// ─────────────────────────────────────────────────────────────────────────────
// MISSION TIMELINE
// ─────────────────────────────────────────────────────────────────────────────
const TIMELINE = [
  { date: "April 1, 6:35 PM EDT",   ist: "April 2, 4:05 AM IST",  label: "Liftoff",              desc: "SLS rocket clears Launch Pad 39B, Kennedy Space Center. All four RS-25 engines + twin solid boosters. 8.8 million lbs of thrust." },
  { date: "April 2, ~7:49 PM EDT",  ist: "April 3, 5:19 AM IST",  label: "Translunar Injection", desc: "Six-minute engine burn sets Orion on free-return trajectory around the Moon. Crew now bound for deep space." },
  { date: "April 5, Daytime EDT",   ist: "April 5/6, IST",        label: "Record Distance",      desc: "Crew surpasses Apollo 13's record — 248,655 miles from Earth — becoming the humans who have travelled farthest from Earth in history: ~252,799 miles." },
  { date: "April 6, ~6 PM EDT",     ist: "April 7, 3:30 AM IST",  label: "Lunar Flyby",          desc: "Orion performs multi-hour flyby of the Moon's far side. First humans to see some areas of the lunar far side with their own eyes." },
  { date: "April 11, 2026",         ist: "April 11, 2026",        label: "Splashdown",           desc: "Pacific Ocean, off San Diego. US Navy San Antonio-class ship recovers crew. ~10-day mission concludes." },
]

// ─────────────────────────────────────────────────────────────────────────────
// CREW
// ─────────────────────────────────────────────────────────────────────────────
const CREW = [
  {
    name:   "Reid Wiseman",
    role:   "Commander",
    agency: "NASA",
    img:    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80&auto=format",
    bio:    "Wiseman is a former US Navy test pilot and NASA astronaut who spent 165 days aboard the ISS in 2014. As commander of Artemis II, he is responsible for overall mission safety and crew readiness. He has described the mission as the most complex thing he has ever prepared for.",
  },
  {
    name:   "Victor Glover",
    role:   "Pilot",
    agency: "NASA",
    img:    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80&auto=format",
    bio:    "Glover is a decorated US Navy pilot and the first Black astronaut to live aboard the ISS long-term. As pilot of Artemis II, he will operate the Orion spacecraft's manual pilot demonstration during high Earth orbit — one of the mission's critical early tests.",
  },
  {
    name:   "Christina Koch",
    role:   "Mission Specialist",
    agency: "NASA",
    img:    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80&auto=format",
    bio:    "Koch holds the record for the longest single spaceflight by a woman — 328 days. She will become the first woman to travel to deep space on Artemis II. During the lunar flyby, she will photograph the Moon's surface and lead science investigations including the AVATAR human health study.",
  },
  {
    name:   "Jeremy Hansen",
    role:   "Mission Specialist",
    agency: "Canadian Space Agency",
    img:    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80&auto=format",
    bio:    "Hansen is the first Canadian to travel to deep space — ever. A former CF-18 pilot, this is his first spaceflight. After the translunar injection burn, he told mission controllers: \"Humanity has once again shown what we are capable of.\"",
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// SECTIONS
// ─────────────────────────────────────────────────────────────────────────────
const SECTIONS = [
  {
    num:     "01",
    title:   "The Launch: April 1, 2026 — The Night Earth Looked Up",
    keyword: "Artemis 2 Launch Time IST EDT 2026",
    img:     "https://images.unsplash.com/photo-1541185933-ef5d8ed016c2?w=900&q=80&auto=format",
    imgAlt:  "NASA Artemis II SLS rocket launch Kennedy Space Center April 2026",
    body: `At 6:35 PM EDT on April 1, 2026, NASA's Space Launch System — the most powerful rocket ever flown — lifted off from Launch Complex 39B at Kennedy Space Center in Florida, carrying four astronauts into the night sky on the first crewed mission to lunar space since Eugene Cernan left the Moon in December 1972.

For viewers in India, the launch time was 4:05 AM IST on April 2. The SLS's twin solid rocket boosters, combining with four RS-25 main engines already at full thrust, generated 8.8 million pounds of force at liftoff — lifting a vehicle weighing 5.75 million pounds off the ground and accelerating it through the atmosphere in under nine minutes. The umbilicals — the connections that provided power, fuel, and data during prelaunch — disconnected and retracted automatically as the rocket rose, cutting the spacecraft free for autonomous flight.

The launch had been delayed from an initial February 8, 2026 attempt after issues surfaced during a wet dress rehearsal: a liquid hydrogen leak, a helium flow problem with the upper stage, and cold weather that pushed back fuelling operations. The rocket was rolled back into the Vehicle Assembly Building in late February to preserve an April window, then rolled back to the pad on March 20. The April 1 launch date was the first day of a two-hour window — and the team used it precisely. Liftoff was at 6:35 PM, eleven minutes after the targeted T-0 of 6:24 PM, following a brief hold to investigate a sensor reading on the launch abort system's attitude control motor controller battery. The delay was resolved; the window remained open; the rocket flew.`,
    stat: { val: "8.8M lbs", label: "Thrust at Artemis II Liftoff — Most Powerful Crewed Rocket Since Saturn V" },
    insight: "The last time humans left Earth's gravitational neighbourhood for the Moon was December 1972. The people alive today who watched Apollo 17 launch are now in their 60s and 70s. Artemis II is the first time an entire generation has seen this happen.",
    internal: null,
  },
  {
    num:     "02",
    title:   "The Crew: Four Astronauts, One Historic Mission",
    keyword: "NASA Artemis II Astronauts Crew 2026",
    img:     "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=900&q=80&auto=format",
    imgAlt:  "NASA Artemis II crew Reid Wiseman Victor Glover Christina Koch Jeremy Hansen",
    body: `Artemis II carries four astronauts — three from NASA and one from the Canadian Space Agency — each selected for a specific reason, and each carrying a different piece of history.

Commander Reid Wiseman, a former US Navy test pilot with 165 days of ISS experience, is responsible for the overall safety and execution of the mission. Pilot Victor Glover — a decorated naval aviator and the first Black astronaut to live aboard the ISS long-term — will conduct the manual pilot demonstration that tests Orion's handling capabilities during high Earth orbit. The demonstration is not ceremonial: it is a critical test of the spacecraft's ability to be controlled manually by crew, which will be essential data for future missions that approach the lunar surface.

Mission Specialist Christina Koch becomes the first woman to travel to deep space in history. Koch holds the record for the longest single spaceflight by a woman — 328 continuous days aboard the ISS — and her presence on Artemis II is the culmination of decades of preparation. Mission Specialist Jeremy Hansen of the Canadian Space Agency becomes the first Canadian in deep space, ever. His inclusion reflects the international nature of the Artemis programme — which is built on the Artemis Accords, a set of bilateral agreements between NASA and partner nations including Japan, the European Space Agency, and the UAE. India has observer status in Artemis-adjacent discussions and ISRO has ongoing data-sharing agreements with NASA, though India is not yet a full Artemis partner.

The crew named the Orion spacecraft "Integrity." The zero-gravity indicator for the flight — a small stuffed mascot tethered inside the capsule that floats when the crew reaches microgravity — is "Rise," a design created by 8-year-old Lucas Ye of Mountain View, California, selected from over 2,600 submissions from 50 countries.`,
    stat: { val: "50+ Years", label: "Since Any Humans Last Flew to Deep Space — Apollo 17, December 1972" },
    insight: "The Artemis II crew represents a generational shift in who gets to explore space. A Black pilot. The first woman in deep space. The first Canadian beyond Earth orbit. The mission's composition is not incidental — it is policy made visible.",
    internal: null,
  },
  {
    num:     "03",
    title:   "The Mission: What the Crew Is Actually Doing Near the Moon",
    keyword: "Artemis 2 Mission Plan Moon Flyby Timeline",
    img:     "https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=900&q=80&auto=format",
    imgAlt:  "Artemis II mission trajectory Moon flyby free return 2026",
    body: `Artemis II is a test flight, not a landing. Its purpose is to demonstrate that Orion's life support systems work with humans aboard — something that could not be confirmed during Artemis I, which flew the same trajectory in 2022 without crew. The mission plan has five distinct phases, each designed to gather specific data for future missions that will land on and eventually establish a presence on the Moon.

Phase one: High Earth orbit. After launch, Orion spent approximately one day in a high Earth orbit, where Commander Wiseman conducted the manual pilot demonstration — flying the spacecraft through a series of manoeuvres to test its handling characteristics. Mission Control in Houston confirmed all systems remained healthy. Phase two: Translunar injection. On April 2, Orion's European-built service module fired for five minutes and 49 seconds, setting the spacecraft on a free-return trajectory — a path that uses the Moon's gravity to slingshot the crew back to Earth without requiring a second engine burn. This is the same fundamental concept used by Apollo 13.

Phase three: Deep space transit. The crew spent approximately three days travelling to the lunar vicinity. During this period, science investigations were conducted including the AVATAR study, which uses organ-on-a-chip devices to measure the effects of radiation and microgravity on human tissue. The crew surpassed Apollo 13's record distance from Earth — 248,655 miles — on April 5, reaching approximately 252,799 miles, making them the humans who have travelled farthest from their home planet in recorded history.

Phase four: Lunar flyby, April 6. For several hours, Orion flew through the Moon's shadow, briefly losing communications with Earth as it passed behind the far side. The crew photographed the lunar surface and made observations that will be shared with scientists. The far side was partially illuminated during the flyby, creating shadow conditions that reveal surface relief — ridges, slopes, and crater rims — that full illumination obscures. Phase five: Return and splashdown in the Pacific Ocean off San Diego, April 11.`,
    stat: { val: "252,799 mi", label: "Farthest Distance Humans Have Ever Travelled From Earth — New Record" },
    insight: "Artemis II's free-return trajectory means the mission can return safely to Earth even if all propulsion is lost after the translunar injection burn. The same design saved Apollo 13. NASA chose it for Artemis II precisely because the mission cannot afford to fail.",
    internal: null,
  },
  {
    num:     "04",
    title:   "Artemis II & India: What This Means for ISRO and the Indian Space Sector",
    keyword: "Artemis 2 India ISRO Gaganyaan Space 2026",
    img:     "https://images.unsplash.com/photo-1516849677043-ef67c9557e16?w=900&q=80&auto=format",
    imgAlt:  "India ISRO Gaganyaan space mission 2026 Artemis partnership",
    body: `India is watching Artemis II more closely than most outsiders might expect. ISRO's Gaganyaan programme — India's first crewed orbital spaceflight mission — is targeting its first uncrewed flight test in 2024 and a crewed flight no earlier than 2025-26, making India one of only a handful of nations actively developing an independent human spaceflight capability.

The technologies demonstrated by Artemis II have direct relevance to Gaganyaan's design. Orion's life support systems, its thermal protection shield, and its autonomous abort systems are all areas where ISRO engineers have studied the NASA approach carefully. The heat shield erosion issue discovered after Artemis I — which caused mission managers to modify the reentry profile for Artemis II and plan a redesigned shield for Artemis III — is precisely the type of operational learning that ISRO has incorporated into Gaganyaan's development philosophy.

India is not a signatory to the Artemis Accords, the bilateral agreements that govern NASA's international lunar partnerships. This is a deliberate choice: India maintains its traditional policy of strategic autonomy in space, similar to its approach to other multilateral frameworks. However, ISRO has data-sharing agreements with NASA, and Indian scientists are actively involved in several NASA payloads currently operating on the Moon's surface. The Chandrayaan-3 rover's successful landing in the lunar south pole region in August 2023 — a region that Artemis surface missions are targeting for future landings — makes India a scientifically relevant partner even outside formal treaty structures.

For the Indian startup space sector, Artemis II is a market signal. Space technology companies — including Agnikul Cosmos, Skyroot Aerospace, Pixxel, and Dhruva Space — are building towards a world where commercial lunar logistics, in-space manufacturing, and deep space communication are real markets. That world moves closer to existence with every successful crewed mission.`,
    stat: { val: "2025–26", label: "Target Window for ISRO's Gaganyaan First Crewed Mission" },
    insight: "India does not need to join the Artemis Accords to benefit from Artemis. Every data point about deep space life support, heat shield performance, and free-return trajectories that NASA publishes from Artemis II is a lesson ISRO can incorporate into Gaganyaan — and has already begun to.",
    internal: "/blog/top-ai-startups-india-2026",
  },
  {
    num:     "05",
    title:   "Why Artemis II Matters Beyond the Headlines",
    keyword: "Why Artemis 2 Matters Moon Space Exploration 2026",
    img:     "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=900&q=80&auto=format",
    imgAlt:  "Moon exploration significance Artemis 2026 humanity deep space",
    body: `The instinct when covering a space mission is to reach for superlatives. The first time since 1972. The most powerful rocket. The farthest humans from Earth. These facts are real, but they can obscure what Artemis II actually is: a test flight. The astronauts are not landing on the Moon. They are demonstrating that the hardware and software that will eventually land astronauts on the Moon actually works with people inside it.

This matters because the gap between "we flew this vehicle once uncrewed" (Artemis I) and "we are confident enough to send humans to the surface" (Artemis III) is enormous — and Artemis II is the essential bridge. Every system that functions correctly in the actual environment of deep space is a system that can be trusted closer to the surface. Every anomaly found on Artemis II is an anomaly that will not kill a crew on Artemis III.

The commercial and economic stakes are equally significant. Artemis missions are being executed through an ecosystem of commercial contracts that did not exist during Apollo. SpaceX's Starship is the lander for Artemis III. Axiom Space is building the lunar spacesuits. Commercial lunar payload services companies are delivering scientific instruments to the surface ahead of crewed visits. This is a different model of space exploration — one that creates real markets for private companies and enables nations without their own launch vehicles to participate in lunar science.

For startups following the UpForge model of tracking where ambition meets execution, the Artemis programme is one of the most important case studies of the decade: a programme that has survived administration changes, budget pressures, technical failures, and years of delay to successfully put humans in deep space. The lesson — that the thing worth doing hardest is the thing hardest to stop — applies equally well at 252,799 miles from Earth and in the first weeks of building something new in Bengaluru.`,
    stat: { val: "Artemis III", label: "Next Mission — Human Lunar Landing, Targeting 2027" },
    insight: "Artemis II is not the destination. It is the proof that the destination is reachable. Every great mission — in space or in business — has an Artemis II moment: the test that proves the bet was worth making.",
    internal: "/",
  },
]

const RELATED_SLUGS = [
  "india-startup-ecosystem-2026",
  "top-ai-startups-india-2026",
  "how-to-start-startup-india-2026",
  "top-indian-unicorns-2026",
]
const RELATED = ALL_BLOG_SLUGS.filter((b) => RELATED_SLUGS.includes(b.slug))

// ─────────────────────────────────────────────────────────────────────────────
// CSS — deep navy/space palette with UpForge parchment base
// ─────────────────────────────────────────────────────────────────────────────
const PAGE_CSS = `
  .pf  { font-family: var(--font-display), Georgia, serif !important; }
  .rp  { font-family: Georgia, 'Times New Roman', serif; }
  .sf  { font-family: system-ui, -apple-system, sans-serif; }

  :root {
    --parch: #F5F1E8; --parch2: #EDE9DF; --ink: #1A1208;
    --ink3: #5A4A30; --ink4: #8C7D65; --ink5: #BBB0A0;
    --rule: #C8C2B4; --rule2: #D8D2C4;
    --white: #FDFCF9;
    --space: #0F1729; --space2: #1E2D4A;
    --blue: #1D4ED8; --blue2: #2563EB; --blue3: #1E3A8A;
    --cyan: #67E8F9; --star: #E0F2FE;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .a0 { animation: fadeUp .44s .00s cubic-bezier(.16,1,.3,1) both; }
  .a1 { animation: fadeUp .44s .08s cubic-bezier(.16,1,.3,1) both; }
  .a2 { animation: fadeUp .44s .16s cubic-bezier(.16,1,.3,1) both; }

  @keyframes twinkle {
    0%, 100% { opacity: .6; } 50% { opacity: 1; }
  }
  .star-pulse { animation: twinkle 2.4s ease-in-out infinite; }

  .imgf { position: relative; overflow: hidden; }
  .imgf img {
    position: absolute; inset: 0;
    width: 100%; height: 100%;
    object-fit: cover; object-position: center;
    filter: sepia(8%) contrast(108%);
    transition: transform .6s ease;
  }
  .imgf:hover img { transform: scale(1.03); }

  .blog-card {
    border: 1.5px solid var(--ink);
    background: var(--white);
    overflow: hidden; position: relative;
  }
  .blog-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    background: linear-gradient(90deg, var(--blue3), var(--blue2), var(--cyan));
  }

  .stat-pill {
    display: flex; align-items: center; gap: 14px;
    background: var(--space); padding: 14px 18px; margin: 16px 0;
  }
  .insight {
    display: inline-flex; align-items: center; gap: 8px;
    background: #EFF6FF; border: 1px solid rgba(29,78,216,.2);
    padding: 9px 14px; width: 100%;
  }
  .sh { display: flex; align-items: center; gap: 10px; }
  .sh-l {
    font-size: 8px; font-weight: 700; text-transform: uppercase;
    letter-spacing: .28em; color: var(--ink5);
    font-family: system-ui; white-space: nowrap;
  }
  .sh-r { flex: 1; height: 1px; background: var(--rule2); }

  .toc-link {
    display: flex; align-items: baseline; gap: 8px;
    margin-bottom: 9px; text-decoration: none;
  }
  .toc-link:hover span { color: var(--blue2); }

  .crew-card {
    background: var(--white); border: 1.5px solid var(--ink);
    overflow: hidden; position: relative;
  }
  .crew-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2px; background: linear-gradient(90deg, var(--blue3), var(--cyan));
  }

  .timeline-item {
    display: flex; gap: 16px; padding: 14px 0;
    border-bottom: 1px solid var(--rule2);
  }
  .timeline-item:last-child { border-bottom: none; }
  .tl-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--blue2); flex-shrink: 0; margin-top: 4px;
  }

  .rel-card {
    display: flex; flex-direction: column;
    background: var(--white); text-decoration: none;
    transition: transform .15s, box-shadow .15s; position: relative;
  }
  .rel-card::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0;
    height: 2.5px; background: transparent; transition: background .15s;
  }
  .rel-card:hover {
    transform: translate(-2px, -2px);
    box-shadow: 4px 4px 0 var(--ink); z-index: 1;
  }
  .rel-card:hover::before { background: var(--blue2); }

  .dropcap::first-letter {
    font-family: var(--font-display), Georgia, serif;
    font-size: 3.8em; font-weight: 900;
    float: left; line-height: .82;
    margin-right: 8px; margin-top: 6px; color: var(--ink);
  }

  .mission-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--blue2); padding: 3px 12px;
    font-family: system-ui; font-size: 8px; font-weight: 900;
    text-transform: uppercase; letter-spacing: .2em; color: white;
    margin-bottom: 10px;
  }

  @media (max-width: 900px) {
    .section-grid { grid-template-columns: 1fr !important; }
    .toc-grid     { grid-template-columns: 1fr !important; }
    .crew-grid    { grid-template-columns: 1fr 1fr !important; }
  }
`

// ─────────────────────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function BlogArtemis2Launch2026() {
  const jsonLd = buildBlogJsonLd(POST)

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: PAGE_CSS }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article
        itemScope
        itemType="https://schema.org/NewsArticle"
        style={{ minHeight: "100vh", background: "var(--parch)" }}
      >

        {/* ── BREADCRUMB ── */}
        <nav
          className="sf a0"
          aria-label="Breadcrumb"
          style={{ background: "var(--parch2)", borderBottom: "1px solid var(--rule2)", padding: "8px 0" }}
        >
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
            <ol
              style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 9, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.18em", listStyle: "none", margin: 0, padding: 0 }}
              itemScope itemType="https://schema.org/BreadcrumbList"
            >
              {[
                { href: "/",     label: "UpForge", pos: "1" },
                { href: "/blog", label: "Blog",    pos: "2" },
              ].map((b) => (
                <li key={b.pos} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                  <Link href={b.href} style={{ color: "var(--ink5)", textDecoration: "none" }} itemProp="item">
                    <span itemProp="name">{b.label}</span>
                  </Link>
                  <meta itemProp="position" content={b.pos} />
                  <span style={{ color: "var(--rule)", marginLeft: 6 }}>/</span>
                </li>
              ))}
              <li
                style={{ color: "var(--ink4)", fontWeight: 700, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 280 }}
                itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem"
              >
                <span itemProp="name">Artemis II Launch 2026</span>
                <meta itemProp="position" content="3" />
              </li>
            </ol>
          </div>
        </nav>

        {/* ── MISSION STATUS BANNER ── */}
        <div style={{ background: "var(--space)", padding: "8px 0" }}>
          <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)", display: "flex", alignItems: "center", gap: 12 }}>
            <span className="star-pulse" style={{ fontSize: 12 }}>🚀</span>
            <p className="sf" style={{ fontSize: 10, color: "var(--cyan)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", margin: 0 }}>
              Mission Live — Artemis II crew in transit to Moon · Launched April 1, 6:35 PM EDT · Lunar flyby: April 6 · Splashdown: ~April 11
            </p>
          </div>
        </div>

        {/* ── HERO ── */}
        <div className="a0" style={{ borderBottom: "3px solid var(--ink)" }}>
          <div className="imgf" style={{ height: "clamp(280px,40vw,500px)" }}>
            <img src={POST.heroImage} alt={POST.heroImageAlt} loading="eager" />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom,rgba(15,23,41,.4) 0%,rgba(15,23,41,.94) 100%)" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 clamp(16px,5vw,64px)", textAlign: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 18, flexWrap: "wrap", justifyContent: "center" }}>
                {["Space & Science", "Mission Live", "April 2026"].map((t) => (
                  <span key={t} className="sf" style={{ fontSize: 8, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", border: "1px solid rgba(255,255,255,0.2)", padding: "3px 10px" }}>
                    {t}
                  </span>
                ))}
              </div>
              <h1
                className="pf"
                itemProp="headline"
                style={{ fontSize: "clamp(1.8rem,5.5vw,4rem)", fontWeight: 900, lineHeight: 1.02, color: "white", letterSpacing: "-0.02em", marginBottom: 18, maxWidth: 860 }}
              >
                Artemis II Has Launched:{" "}
                <em style={{ color: var(--cyan) ?? "#67E8F9" }}>Humanity Returns to the Moon</em>
              </h1>
              <p className="rp" style={{ fontSize: "clamp(13px,1.8vw,16px)", color: "rgba(255,255,255,0.62)", fontStyle: "italic", maxWidth: 560, lineHeight: 1.6 }}>
                The complete mission guide — crew profiles, launch time in IST, trajectory, science, and what it means for India.
              </p>
            </div>
          </div>

          {/* Meta bar */}
          <div style={{ background: "var(--space)" }}>
            <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
                {[
                  { l: "Launch Date",   v: "April 1, 2026"         },
                  { l: "Launch Time",   v: "6:35 PM EDT / 4:05 AM IST" },
                  { l: "Reading Time",  v: POST.readTime            },
                  { l: "Mission Type",  v: "Crewed Lunar Flyby"    },
                  { l: "Splashdown",    v: "~April 11, Pacific"    },
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

        {/* ── MAIN ── */}
        <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 clamp(16px,3vw,36px) clamp(48px,8vw,96px)" }}>

          {/* Intro + TOC */}
          <div
            className="a1 toc-grid"
            style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 0, borderBottom: "1px solid var(--rule2)", alignItems: "start" }}
          >
            <div style={{ padding: "clamp(28px,4vw,48px) clamp(16px,3vw,40px) clamp(28px,4vw,48px) 0", borderRight: "1px solid var(--rule2)" }}>
              <div className="sh" style={{ marginBottom: 18 }}>
                <span className="sh-l">Mission Overview</span>
                <div className="sh-r" />
              </div>
              <p
                className="pf"
                itemProp="description"
                style={{ fontSize: "clamp(1.05rem,2.2vw,1.35rem)", fontWeight: 400, lineHeight: 1.72, color: "var(--ink)", marginBottom: 18 }}
              >
                For the first time since December 1972, humans are travelling to the Moon. NASA's Artemis II mission lifted off from Kennedy Space Center on April 1, 2026, carrying four astronauts into deep space on a 10-day journey around the Moon.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}>
                This is not a symbolic mission. Artemis II tests the Orion spacecraft's life support systems for the first time with crew aboard — data that is essential before NASA can send astronauts to the lunar surface on Artemis III. It also sets distance records, conducts real science, and demonstrates that the global infrastructure built for lunar exploration actually works.
              </p>
              <p className="rp" style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88 }}>
                UpForge covers everything India's builders need to know about the forces shaping the world they are building in. Artemis II is one of those forces — and not just for NASA. This guide covers the full mission, the crew, the launch time in IST, and what it means for India's space ambitions.
              </p>
            </div>

            {/* TOC */}
            <nav
              aria-label="Article sections"
              style={{ padding: "clamp(24px,3vw,40px) 0 clamp(24px,3vw,40px) clamp(16px,3vw,32px)", minWidth: "clamp(200px,26vw,280px)" }}
            >
              <div className="sh" style={{ marginBottom: 14 }}>
                <span className="sh-l">In This Guide</span>
                <div className="sh-r" />
              </div>
              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {SECTIONS.map((s, i) => (
                  <li key={i}>
                    <a href={`#section-${s.num}`} className="toc-link">
                      <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--blue2)", flexShrink: 0, minWidth: 18 }}>{s.num}</span>
                      <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4 }}>{s.title}</span>
                    </a>
                  </li>
                ))}
                <li style={{ marginTop: 12, paddingTop: 12, borderTop: "1px solid var(--rule2)" }}>
                  <a href="#crew" className="toc-link">
                    <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--blue2)", flexShrink: 0, minWidth: 18 }}>→</span>
                    <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4, fontWeight: 700 }}>Crew Profiles</span>
                  </a>
                </li>
                <li>
                  <a href="#timeline" className="toc-link">
                    <span className="sf" style={{ fontSize: 8, fontWeight: 700, color: "var(--blue2)", flexShrink: 0, minWidth: 18 }}>→</span>
                    <span className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.4, fontWeight: 700 }}>Full Mission Timeline (IST)</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* ── SECTIONS ── */}
          <div style={{ marginTop: "clamp(32px,5vw,56px)" }}>
            {SECTIONS.map((sec, idx) => (
              <div
                key={idx}
                id={`section-${sec.num}`}
                className="blog-card"
                style={{ marginBottom: 20 }}
              >
                <div
                  className="section-grid"
                  style={{
                    display: "grid",
                    gridTemplateColumns: idx % 2 === 0 ? "1fr 340px" : "340px 1fr",
                    gap: 0,
                    minHeight: 340,
                  }}
                >
                  {idx % 2 !== 0 && (
                    <div className="imgf" style={{ borderRight: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right,rgba(15,23,41,.7) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "clamp(20px,3vw,36px)", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
                        <span className="sf" style={{ fontSize: 9, fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--blue2)" }}>
                          Section {sec.num}
                        </span>
                        <div style={{ flex: 1, height: 1, background: "var(--rule2)" }} />
                        <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                          {sec.keyword}
                        </span>
                      </div>
                      <div className="mission-badge">🚀 Artemis II</div>
                      <h2
                        className="pf"
                        style={{ fontSize: "clamp(1.2rem,2.5vw,1.75rem)", fontWeight: 700, color: "var(--ink)", lineHeight: 1.15, marginBottom: 18 }}
                      >
                        {sec.title}
                      </h2>
                      {sec.body.split("\n\n").map((para, pi) => (
                        <p
                          key={pi}
                          className={`rp${pi === 0 ? " dropcap" : ""}`}
                          style={{ fontSize: 13.5, color: "var(--ink3)", lineHeight: 1.88, marginBottom: 14 }}
                        >
                          {para}
                        </p>
                      ))}
                      {sec.internal && (
                        <Link
                          href={sec.internal}
                          style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 8, fontFamily: "system-ui", fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".18em", color: "var(--blue2)", textDecoration: "none" }}
                        >
                          Read on UpForge →
                        </Link>
                      )}
                    </div>
                    <div style={{ marginTop: 16 }}>
                      <div className="stat-pill">
                        <p className="pf" style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--cyan)", lineHeight: 1, flexShrink: 0 }}>
                          {sec.stat.val}
                        </p>
                        <p className="sf" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", textTransform: "uppercase", letterSpacing: "0.1em", lineHeight: 1.5 }}>
                          {sec.stat.label}
                        </p>
                      </div>
                      <div className="insight">
                        <div style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--blue2)", flexShrink: 0 }} aria-hidden="true" />
                        <p className="rp" style={{ fontSize: 12, color: "var(--blue3)", fontStyle: "italic", lineHeight: 1.6 }}>
                          {sec.insight}
                        </p>
                      </div>
                    </div>
                  </div>

                  {idx % 2 === 0 && (
                    <div className="imgf" style={{ borderLeft: "1.5px solid var(--ink)", minHeight: 300 }}>
                      <img src={sec.img} alt={sec.imgAlt} loading="lazy" />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to left,rgba(15,23,41,.7) 0%,transparent 60%)" }} />
                      <div style={{ position: "absolute", bottom: 20, right: 20, textAlign: "right" }}>
                        <span className="pf" style={{ fontSize: "4rem", fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{sec.num}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ── CREW PROFILES ── */}
          <div id="crew" style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l" style={{ color: "var(--blue2)" }}>★ The Crew</span>
              <div className="sh-r" />
            </div>
            <h2
              className="pf"
              style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.15 }}
            >
              Four Astronauts. One Historic Journey.
            </h2>
            <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", fontStyle: "italic", marginBottom: 24, lineHeight: 1.65 }}>
              Reid Wiseman, Victor Glover, Christina Koch, and Jeremy Hansen — the crew of NASA Artemis II. Who they are and why they are on this mission.
            </p>
            <div
              className="crew-grid"
              style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}
            >
              {CREW.map((c, i) => (
                <div key={i} className="crew-card">
                  <div style={{ height: 120, background: ["#1E2D4A","#0F2345","#172554","#1E3A8A"][i], display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--rule2)", position: "relative", overflow: "hidden" }}>
                    <span className="sf" style={{ fontSize: "3rem", opacity: 0.08, position: "absolute" }}>🚀</span>
                    <div style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                      <p className="pf" style={{ fontSize: "2rem", fontWeight: 900, color: "rgba(103,232,249,0.3)", lineHeight: 1 }}>{c.name.split(" ").map(w => w[0]).join("")}</p>
                    </div>
                  </div>
                  <div style={{ padding: "14px 14px 16px" }}>
                    <p className="sf" style={{ fontSize: 8, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".16em", color: "var(--blue2)", marginBottom: 4 }}>{c.role} · {c.agency}</p>
                    <h3 className="pf" style={{ fontSize: "1rem", fontWeight: 700, color: "var(--ink)", marginBottom: 8, lineHeight: 1.2 }}>{c.name}</h3>
                    <p className="rp" style={{ fontSize: 11.5, color: "var(--ink4)", lineHeight: 1.65, fontStyle: "italic" }}>{c.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── MISSION TIMELINE ── */}
          <div id="timeline" style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l" style={{ color: "var(--blue2)" }}>📡 Mission Timeline</span>
              <div className="sh-r" />
            </div>
            <h2
              className="pf"
              style={{ fontSize: "clamp(1.3rem,2.5vw,1.8rem)", fontWeight: 700, color: "var(--ink)", marginBottom: 6, lineHeight: 1.15 }}
            >
              Artemis II: Full Timeline with India Time (IST)
            </h2>
            <p className="rp" style={{ fontSize: 13, color: "var(--ink4)", fontStyle: "italic", marginBottom: 20, lineHeight: 1.65 }}>
              Every major mission milestone from launch to splashdown, with EDT and IST times. All times are approximate; mission operations adapt in real time.
            </p>
            <div style={{ border: "1.5px solid var(--ink)", background: "var(--white)", padding: "4px 20px 4px" }}>
              {TIMELINE.map((item, i) => (
                <div key={i} className="timeline-item">
                  <div className="tl-dot" style={{ marginTop: 6 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px 12px", marginBottom: 4 }}>
                      <p className="sf" style={{ fontSize: 10, fontWeight: 700, color: "var(--ink)" }}>{item.label}</p>
                      <p className="sf" style={{ fontSize: 9, color: "var(--blue2)", fontWeight: 600 }}>{item.date} EDT</p>
                      <p className="sf" style={{ fontSize: 9, color: "var(--ink5)", fontWeight: 600 }}>{item.ist}</p>
                    </div>
                    <p className="rp" style={{ fontSize: 12.5, color: "var(--ink4)", lineHeight: 1.65, fontStyle: "italic" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12, padding: "10px 14px", background: "#EFF6FF", border: "1px solid rgba(29,78,216,.15)" }}>
              <p className="rp" style={{ fontSize: 12, color: "var(--blue3)", fontStyle: "italic", lineHeight: 1.6 }}>
                Live coverage is available on NASA+ and Amazon Prime. Follow mission updates at nasa.gov/mission/artemis-ii and on NASA's YouTube channel. IST times are UTC+5:30.
              </p>
            </div>
          </div>

          {/* ── RELATED POSTS ── */}
          <div style={{ marginTop: "clamp(44px,6vw,72px)" }}>
            <div className="sh" style={{ marginBottom: 16 }}>
              <span className="sh-l">Related Reading on UpForge</span>
              <div className="sh-r" />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))", border: "1.5px solid var(--ink)", background: "var(--ink)", gap: 1.5 }}>
              {RELATED.map((r, i) => (
                <Link key={i} href={`/blog/${r.slug}`} className="rel-card">
                  <div style={{ height: 80, background: ["#E8E0D0","#E0D8CC","#D8D0C4","#D0C8BC"][i % 4], display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid var(--rule2)" }}>
                    <span className="pf" style={{ fontSize: "2.8rem", fontWeight: 900, color: "rgba(26,18,8,0.1)" }} aria-hidden="true">
                      {r.title.charAt(0)}
                    </span>
                  </div>
                  <div style={{ padding: "13px 14px 12px" }}>
                    <h3 className="pf" style={{ fontSize: ".9rem", fontWeight: 700, color: "var(--ink)", marginBottom: 4, lineHeight: 1.2 }}>{r.title}</h3>
                    <span className="sf" style={{ fontSize: 8, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: ".12em", fontWeight: 700 }}>{r.category}</span>
                    <div style={{ marginTop: 8 }}>
                      <span className="sf" style={{ fontSize: 8.5, color: "var(--blue2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em" }}>Read</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* ── FOOTER NAV ── */}
          <nav
            aria-label="Explore UpForge"
            style={{ padding: "16px 0", borderTop: "2px solid var(--ink)", marginTop: "clamp(32px,5vw,52px)" }}
          >
            <ul style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", listStyle: "none", margin: 0, padding: 0 }}>
              {SAFE_BLOG_FOOTER_LINKS.map((lnk) => (
                <li key={lnk.h}>
                  <Link
                    href={lnk.h}
                    className="sf"
                    style={{ fontSize: 8.5, color: "var(--ink5)", textTransform: "uppercase", letterSpacing: "0.14em", textDecoration: "none" }}
                  >
                    {lnk.l}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>
      </article>
    </>
  )
}
