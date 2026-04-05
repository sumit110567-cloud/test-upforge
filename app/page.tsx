// app/page.tsx — SERVER COMPONENT
// No "use client" — all content renders as static HTML visible to Google on first crawl.
//
// DESIGN: FT.com × The Economist × upforge.org
// LAYOUT: 3-column newspaper grid (fixed centering + alignment)
// IDENTITY: Global — no India Edition references in layout
// RESPONSIVE: 3-col → 2-col → 1-col stacked

import type { Metadata } from "next"
import { headers } from "next/headers"
import { FounderChronicleClient } from "../components/founder-chronicle-client"
import { FOUNDERS } from "../data/founders"
import { createClient } from "@/lib/supabase/server"

// ---------------------------------------------------------------------------
// DOMAIN
// ---------------------------------------------------------------------------
async function getDomain(): Promise<"org" | "in"> {
  const h = await headers()
  const ctx = h.get("x-upforge-domain")
  if (ctx === "org" || ctx === "in") return ctx as "org" | "in"
  return (h.get("host") ?? "").includes("upforge.org") ? "org" : "in"
}

// ---------------------------------------------------------------------------
// LIVE DATA
// ---------------------------------------------------------------------------
async function getLatestDate(): Promise<string> {
  try {
    const supabase = await createClient()
    const { data } = await supabase.from("startups").select("updated_at")
      .eq("status","approved").order("updated_at",{ascending:false}).limit(1).single()
    if (data?.updated_at) return new Date(data.updated_at).toISOString().split("T")[0]
  } catch (_) {}
  return new Date().toISOString().split("T")[0]
}

async function getStartupCount(): Promise<number> {
  try {
    const supabase = await createClient()
    const { count } = await supabase.from("startups")
      .select("*",{count:"exact",head:true}).eq("status","approved")
    return count ?? FOUNDERS.length
  } catch (_) {}
  return 5000
}

// ---------------------------------------------------------------------------
// METADATA
// ---------------------------------------------------------------------------
export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain()
  const isOrg  = domain === "org"
  const canonical = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const og        = "https://www.upforge.in/og/founder-chronicle.png"

  if (isOrg) return {
    title: "Global Startup Registry — Verified UFRN Database | UpForge",
    description: "The official global startup registry. Every listing is manually verified and assigned a unique UpForge Registry Number (UFRN). Access open startup data, verified founder profiles, and global ecosystem intelligence.",
    keywords: ["global startup registry","verified startup database","UFRN registry","UpForge Registry Number","open startup data","startup proof of existence","independent startup registry","startup verification"],
    alternates: { canonical },
    openGraph: { title:"Global Startup Registry — Verified UFRN Database", description:"The independent global registry for startups. Verified proof of existence via UFRN. 5000+ companies.", url:canonical, siteName:"UpForge Global Registry", locale:"en", type:"website", images:[{url:og,width:1200,height:630,alt:"UpForge Global Startup Registry",type:"image/png"}] },
    twitter: { card:"summary_large_image", site:"@upforge_in", title:"UpForge Global Startup Registry", description:"Open, verified registry of startups. Every company gets a unique UFRN.", images:[og] },
    robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-snippet":-1,"max-image-preview":"large","max-video-preview":-1} },
  }

  return {
    title: "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026",
    description: "Explore verified stories of India's greatest startup founders — Zepto, CRED, Zerodha, Nykaa, OYO, Groww, Meesho & more. Funding data, valuations, and entrepreneurial lessons.",
    keywords: ["Indian startup founders 2026","India unicorn stories","startup success stories India","Aadit Palicha Zepto","Kunal Shah CRED","Nithin Kamath Zerodha","Falguni Nayar Nykaa","Indian unicorn list 2026","UpForge Founder Chronicle"],
    alternates: { canonical },
    openGraph: { title:"Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026", description:"10 deep-dive profiles of India's most iconic startup founders. Verified funding data, unicorn valuations.", url:canonical, siteName:"UpForge", locale:"en_IN", type:"website", images:[{url:og,width:1200,height:630,alt:"UpForge Founder Chronicle 2026",type:"image/png"}] },
    twitter: { card:"summary_large_image", site:"@upforge_in", creator:"@upforge_in", title:"Indian Startup Founders & Unicorn Stories", description:"Verified founder profiles: Zepto, CRED, Zerodha, Nykaa, OYO & more.", images:[og] },
    robots: { index:true, follow:true, googleBot:{index:true,follow:true,"max-snippet":-1,"max-image-preview":"large","max-video-preview":-1} },
  }
}

// ---------------------------------------------------------------------------
// SCHEMAS (all preserved + numberOfEmployees added)
// ---------------------------------------------------------------------------
function buildOrganizationSchema(isOrg:boolean, liveDate:string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"Organization","@id":`${base}/#organization`,name:"UpForge",url:base,logo:{"@type":"ImageObject",url:"https://www.upforge.in/logo.jpg",width:512,height:512},sameAs:["https://www.upforge.in","https://www.upforge.org","https://www.linkedin.com/company/upforge-india"],description:isOrg?"The global open startup registry — independent, verified, and free. Creator of the UFRN system.":"India's independent startup registry and discovery platform tracking 5000+ companies and founder stories.",foundingDate:"2024",areaServed:isOrg?"Worldwide":"India",numberOfEmployees:{"@type":"QuantitativeValue",value:"10+"},contactPoint:{"@type":"ContactPoint",contactType:"editorial",url:`${base}/contact`,availableLanguage:"English"},dateModified:liveDate }
}
function buildWebsiteSchema(isOrg:boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"WebSite","@id":`${base}/#website`,url:base,name:isOrg?"UpForge Global Registry":"UpForge",publisher:{"@id":`${base}/#organization`},potentialAction:{"@type":"SearchAction",target:{"@type":"EntryPoint",urlTemplate:`${base}/startup?q={search_term_string}`},"query-input":"required name=search_term_string"},inLanguage:isOrg?"en":"en-IN" }
}
function buildDatasetSchema(liveDate:string, startupCount:number) {
  return { "@context":"https://schema.org","@type":"Dataset","@id":"https://www.upforge.org/#dataset",name:"UpForge Global Startup Registry Dataset (UFRN)",description:"Open, verified database of global startups. Each startup is manually reviewed and assigned a permanent UpForge Registry Number (UFRN).",url:"https://www.upforge.org",creator:{"@type":"Organization","@id":"https://www.upforge.org/#organization",name:"UpForge",url:"https://www.upforge.org"},publisher:{"@type":"Organization",name:"UpForge",url:"https://www.upforge.org"},license:"https://creativecommons.org/licenses/by/4.0/",keywords:["startups","UFRN","startup registry","verified startups","global startup database"],variableMeasured:[{"@type":"PropertyValue",name:"UFRN",description:"UpForge Registry Number"},{"@type":"PropertyValue",name:"Status",description:"Verification Status"},{"@type":"PropertyValue",name:"Funding",description:"Funding Amount (USD)"}],measurementTechnique:"Manual verification by UpForge editorial team",size:`${startupCount}+ verified startup records`,isAccessibleForFree:true,temporalCoverage:"2020/..",dateModified:liveDate,datePublished:"2026-03-01" }
}
function buildCollectionPageSchema(isOrg:boolean, liveDate:string) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"CollectionPage","@id":`${base}/#collectionpage`,name:isOrg?"UpForge Global Startup Registry — Verified UFRN Database":"The Founder Chronicle 2026 — Indian Startup Founders & Unicorn Stories",description:isOrg?"Open, independent, verified database of startups. Every entry is assigned a unique UpForge Registry Number (UFRN).":"Verified deep-dive profiles of India's most iconic startup founders and unicorn companies.",url:base,inLanguage:isOrg?"en":"en-IN",isPartOf:{"@id":`${base}/#website`},publisher:{"@id":`${base}/#organization`},datePublished:"2026-03-01",dateModified:liveDate,image:{"@type":"ImageObject",url:"https://www.upforge.in/og/founder-chronicle.png",width:1200,height:630},breadcrumb:{"@id":`${base}/#breadcrumb`} }
}
function buildItemListSchema(isOrg:boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"ItemList","@id":`${base}/#founderlist`,name:"Top Startup Founders & Unicorn Profiles",numberOfItems:FOUNDERS.length,itemListOrder:"https://schema.org/ItemListOrderAscending",itemListElement:FOUNDERS.map((f,i)=>({"@type":"ListItem",position:i+1,item:{"@type":"Person",name:f.name,jobTitle:f.role,worksFor:{"@type":"Organization",name:f.company},url:`${base}/startup/${f.slug}`}})) }
}
function buildBreadcrumbSchema(isOrg:boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  return { "@context":"https://schema.org","@type":"BreadcrumbList","@id":`${base}/#breadcrumb`,itemListElement:[{"@type":"ListItem",position:1,name:"UpForge",item:base},{"@type":"ListItem",position:2,name:isOrg?"Global Registry":"The Founder Chronicle 2026",item:base}] }
}
function buildFAQSchema(isOrg:boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in"
  const qs = isOrg ? [
    {q:"What is the UFRN (UpForge Registry Number)?",a:"The UFRN is a unique permanent identifier assigned to every verified startup in the UpForge global registry. It serves as proof of existence and allows anyone to look up a startup's official listing at upforge.org/ufrn/[UFRN]."},
    {q:"How do I look up a startup's UFRN?",a:"Visit upforge.org/ufrn/[UFRN-ID] with the company's registry number, or search for the company at upforge.org/startup. Every approved listing displays its UFRN prominently."},
    {q:"Is UpForge free to use?",a:"Yes. UpForge is a free, independent startup registry. Both browsing and submitting a startup are completely free."},
    {q:"How does UpForge verify startups?",a:"Each submission is manually reviewed by the UpForge editorial team for legitimacy, active operations, and accurate data before being approved and assigned a UFRN."},
    {q:"Which countries are included in the UpForge global registry?",a:"UpForge covers startups from all major emerging markets including India, Southeast Asia, Africa, Latin America, and the Middle East, as well as global tech hubs worldwide."},
  ] : [
    {q:"Who are the top startup founders in India in 2026?",a:"India's top startup founders in 2026 include Aadit Palicha (Zepto), Kunal Shah (CRED), Nithin Kamath (Zerodha), Falguni Nayar (Nykaa), and Ritesh Agarwal (OYO). UpForge profiles all of these founders with verified funding and valuation data."},
    {q:"Which Indian startups are unicorns in 2026?",a:"Top Indian unicorns include Zepto, CRED, Groww, Meesho, Nykaa, PhysicsWallah, Rapido, and Zerodha. UpForge tracks all verified Indian unicorns with real funding data."},
    {q:"How do I find verified startups in India?",a:"Browse UpForge's verified Indian startup registry at upforge.in/startup. Filter by sector, city, funding stage, or founding year. All 5000+ listings are manually verified."},
    {q:"Which cities have the most startups in India?",a:"Bangalore leads India's startup ecosystem, followed by Mumbai, Delhi NCR, Hyderabad, and Pune. UpForge lets you filter startups by city to find companies in your region."},
    {q:"How do I submit my startup to UpForge?",a:"Submit your startup for free at upforge.in/submit. The editorial team reviews each application and assigns a UFRN (UpForge Registry Number) upon approval."},
  ]
  return { "@context":"https://schema.org","@type":"FAQPage","@id":`${base}/#faq`,mainEntity:qs.map(({q,a})=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}})) }
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------
export default async function HomePage() {
  const domain = await getDomain()
  const isOrg  = domain === "org"
  const [liveDate, startupCount] = await Promise.all([getLatestDate(), getStartupCount()])

  return (
    <>
      {/* ══════════════════════════════════════════
          GLOBAL DESIGN TOKENS + PAGE CSS
      ══════════════════════════════════════════ */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=EB+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        /* ── TOKENS (also used by Navbar/Footer) ── */
        :root {
          --uf-serif:  'Playfair Display','Georgia','Times New Roman',serif;
          --uf-body:   'EB Garamond','Georgia',serif;
          --uf-sans:   'DM Sans',system-ui,sans-serif;

          --uf-ink:    #0E0D08;
          --uf-ink2:   #27261E;
          --uf-ink3:   #4F4D44;
          --uf-ink4:   #888580;
          --uf-ink5:   #BAB7B0;

          --uf-paper:  #F8F7F2;
          --uf-paper2: #F0EFE8;
          --uf-paper3: #E6E4DC;
          --uf-paper4: #D8D5CA;

          --uf-gold:   #A87C0C;
          --uf-gold2:  #C9980F;
          --uf-accent: #8B1A1A;

          --uf-rule:       rgba(0,0,0,.13);
          --uf-rule-light: rgba(0,0,0,.07);
          --uf-navbar-h:   46px;
        }
        [data-theme="dark"] {
          --uf-ink:    #EDE9DC;
          --uf-ink2:   #D0CCB8;
          --uf-ink3:   #9A9688;
          --uf-ink4:   #625E54;
          --uf-ink5:   #3E3B34;
          --uf-paper:  #131210;
          --uf-paper2: #1A1916;
          --uf-paper3: #22201C;
          --uf-paper4: #2C2A24;
          --uf-gold:   #D4A90E;
          --uf-gold2:  #F0C520;
          --uf-accent: #D94040;
          --uf-rule:       rgba(255,255,255,.11);
          --uf-rule-light: rgba(255,255,255,.05);
        }

        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html {
          background:var(--uf-paper); color:var(--uf-ink);
          font-family:var(--uf-body); font-size:16px; line-height:1.65;
          scroll-behavior:smooth; transition:background .25s,color .25s;
        }

        /* ── OUTER WRAPPER ── */
        .uf-page { max-width:1440px; margin:0 auto; padding:0 24px; }
        @media(max-width:640px) { .uf-page { padding:0 16px; } }

        /* ══════════════════════════════
           HERO MASTHEAD BAND
        ══════════════════════════════ */
        .uf-hero {
          border-bottom:3px solid var(--uf-ink);
          padding:36px 0 28px;
          text-align:center;
          position:relative;
        }
        .uf-hero::before, .uf-hero::after {
          content:'';
          display:block;
          height:1px;
          background:var(--uf-ink4);
          margin:0 0 8px;
          opacity:.2;
        }
        .uf-hero::after { margin:8px 0 0; }
        .uf-hero-edition {
          font-family:var(--uf-sans);
          font-size:9px; font-weight:700; letter-spacing:.3em; text-transform:uppercase;
          color:var(--uf-ink5); margin-bottom:14px;
          display:flex; align-items:center; justify-content:center; gap:16px;
        }
        .uf-hero-edition-line { flex:1; height:1px; background:var(--uf-rule-light); max-width:120px; }
        .uf-hero-title {
          font-family:var(--uf-serif);
          font-size:clamp(36px,8vw,96px);
          font-weight:900; letter-spacing:-.02em; line-height:1;
          color:var(--uf-ink); margin-bottom:14px;
        }
        .uf-hero-subtitle {
          font-family:var(--uf-body);
          font-size:clamp(14px,2vw,18px);
          font-style:italic; color:var(--uf-ink4);
          margin-bottom:18px;
        }
        .uf-hero-rule {
          display:flex; align-items:center; justify-content:center; gap:8px;
          margin-bottom:0;
        }
        .uf-hero-rule-line { width:60px; height:1px; background:var(--uf-ink4); opacity:.4; }
        .uf-hero-rule-diamond { width:5px; height:5px; background:var(--uf-gold); transform:rotate(45deg); }

        /* ══════════════════════════════
           SCROLL TICKER (founder names)
        ══════════════════════════════ */
        .uf-ticker {
          background:var(--uf-ink); color:rgba(255,255,255,.7);
          font-family:var(--uf-sans); font-size:10px; font-weight:500; letter-spacing:.14em; text-transform:uppercase;
          overflow:hidden; white-space:nowrap; padding:7px 0;
          border-bottom:1px solid rgba(255,255,255,.05);
        }
        .uf-ticker-inner {
          display:inline-flex; gap:0;
          animation:uf-ticker 32s linear infinite;
        }
        .uf-ticker-inner:hover { animation-play-state:paused; }
        .uf-ticker-item { padding:0 28px; opacity:.7; }
        .uf-ticker-item b { color:var(--uf-gold2); font-weight:700; opacity:1; }
        @keyframes uf-ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }

        /* ══════════════════════════════
           EDITION BAR
        ══════════════════════════════ */
        .uf-edition-bar {
          display:flex; align-items:center; gap:0;
          border-bottom:1px solid var(--uf-rule-light);
          padding:12px 0;
        }
        .uf-edition-label {
          font-family:var(--uf-sans); font-size:10px; font-weight:700;
          letter-spacing:.2em; text-transform:uppercase; color:var(--uf-gold);
          padding-right:16px; border-right:1px solid var(--uf-rule-light);
          margin-right:16px; white-space:nowrap; flex-shrink:0;
        }
        .uf-edition-desc {
          font-family:var(--uf-body); font-size:14px; font-style:italic; color:var(--uf-ink4); flex:1;
        }
        .uf-edition-count {
          font-family:var(--uf-sans); font-size:10px; color:var(--uf-ink5);
          white-space:nowrap; margin-left:16px; flex-shrink:0;
        }

        /* ══════════════════════════════
           3-COLUMN FRONT GRID
        ══════════════════════════════ */
        .uf-front-grid {
          display:grid;
          grid-template-columns:1fr 1px 1.85fr 1px 1fr;
          align-items:start;
          padding:28px 0 0;
          gap:0;
        }
        .uf-col-divider { background:var(--uf-ink4); opacity:.18; width:1px; align-self:stretch; margin:0; }
        .uf-col-left   { padding-right:26px; }
        .uf-col-center { padding:0 26px; }
        .uf-col-right  { padding-left:26px; }

        /* ══════════════════════════════
           SECTION LABELS
        ══════════════════════════════ */
        .uf-section-label {
          font-family:var(--uf-sans); font-size:9px; font-weight:700;
          letter-spacing:.22em; text-transform:uppercase; color:var(--uf-gold);
          border-bottom:1px solid var(--uf-gold); padding-bottom:5px;
          margin-bottom:16px; display:inline-block;
        }
        .uf-section-label-plain {
          font-family:var(--uf-sans); font-size:9px; font-weight:700;
          letter-spacing:.22em; text-transform:uppercase; color:var(--uf-ink4);
          border-bottom:1px solid var(--uf-rule-light); padding-bottom:5px;
          margin-bottom:16px; display:block;
        }

        /* ══════════════════════════════
           LEAD STORY (centre column)
        ══════════════════════════════ */
        .uf-lead-eyebrow {
          font-family:var(--uf-sans); font-size:10px; font-weight:700;
          letter-spacing:.2em; text-transform:uppercase; color:var(--uf-accent);
          margin-bottom:10px;
        }
        .uf-lead-headline {
          font-family:var(--uf-serif);
          font-size:clamp(20px,3.2vw,38px);
          font-weight:700; line-height:1.1; letter-spacing:-.02em;
          color:var(--uf-ink); margin-bottom:14px;
        }
        .uf-lead-deck {
          font-family:var(--uf-body); font-size:16px; line-height:1.7;
          color:var(--uf-ink3); margin-bottom:14px; font-style:italic;
        }
        .uf-lead-byline {
          font-family:var(--uf-sans); font-size:10px; color:var(--uf-ink4);
          letter-spacing:.06em; text-transform:uppercase;
          border-top:1px solid var(--uf-rule-light); border-bottom:1px solid var(--uf-rule-light);
          padding:8px 0; margin-bottom:18px;
        }

        /* Image placeholder with visual depth */
        .uf-img-block { width:100%; margin-bottom:10px; position:relative; overflow:hidden; }
        .uf-img-placeholder {
          width:100%; aspect-ratio:16/9;
          background:var(--uf-paper3);
          border:1px solid var(--uf-rule-light);
          display:flex; flex-direction:column; align-items:center; justify-content:center; gap:6px;
          position:relative; overflow:hidden;
        }
        .uf-img-placeholder::before {
          content:''; position:absolute; inset:0;
          background:repeating-linear-gradient(
            -45deg,
            transparent 0px, transparent 10px,
            rgba(0,0,0,.018) 10px, rgba(0,0,0,.018) 11px
          );
        }
        .uf-img-co-name {
          font-family:var(--uf-serif); font-size:clamp(18px,3vw,36px);
          font-weight:900; color:var(--uf-ink3); letter-spacing:-.02em; position:relative; z-index:1;
        }
        .uf-img-co-val {
          font-family:var(--uf-sans); font-size:10px; font-weight:600;
          letter-spacing:.18em; text-transform:uppercase; color:var(--uf-ink5); position:relative; z-index:1;
        }
        .uf-img-ufrn {
          font-family:var(--uf-sans); font-size:9px;
          letter-spacing:.12em; text-transform:uppercase;
          color:var(--uf-gold); border:1px solid var(--uf-gold);
          padding:2px 9px; position:relative; z-index:1; margin-top:4px;
        }
        .uf-img-caption {
          font-family:var(--uf-sans); font-size:10px;
          color:var(--uf-ink5); margin-bottom:16px;
          font-style:italic; line-height:1.5;
        }

        /* body text */
        .uf-lead-body { font-family:var(--uf-body); font-size:15.5px; line-height:1.82; color:var(--uf-ink2); }
        .uf-lead-body p { margin-bottom:14px; }
        .uf-lead-body p:last-child { margin-bottom:0; }
        .uf-drop-cap::first-letter {
          font-family:var(--uf-serif); font-size:58px; font-weight:900;
          float:left; line-height:.82; margin:4px 9px 0 0; color:var(--uf-ink);
        }

        /* pull quote */
        .uf-pull {
          border-left:3px solid var(--uf-accent); padding:12px 18px;
          margin:20px 0; background:var(--uf-paper2);
        }
        .uf-pull-text {
          font-family:var(--uf-body); font-size:16.5px; font-style:italic;
          line-height:1.65; color:var(--uf-ink2);
        }
        .uf-pull-attr {
          font-family:var(--uf-sans); font-size:10px; font-weight:600;
          letter-spacing:.12em; text-transform:uppercase; color:var(--uf-ink4); margin-top:8px;
        }

        /* tags */
        .uf-tags { display:flex; flex-wrap:wrap; gap:6px; margin-top:18px; }
        .uf-tag  {
          font-family:var(--uf-sans); font-size:9px; font-weight:600;
          letter-spacing:.14em; text-transform:uppercase;
          border:1px solid var(--uf-rule); padding:3px 9px; color:var(--uf-ink4);
        }

        /* ══════════════════════════════
           SIDEBAR STORIES
        ══════════════════════════════ */
        .uf-story {
          border-bottom:1px solid var(--uf-rule-light); padding-bottom:18px; margin-bottom:18px;
        }
        .uf-story:last-child { border-bottom:none; margin-bottom:0; }
        .uf-story-sector {
          font-family:var(--uf-sans); font-size:9px; font-weight:700;
          letter-spacing:.18em; text-transform:uppercase; color:var(--uf-gold); margin-bottom:6px;
        }
        .uf-story-hed {
          font-family:var(--uf-serif); font-size:15px; font-weight:700;
          line-height:1.25; color:var(--uf-ink); margin-bottom:7px;
        }
        .uf-story-deck {
          font-family:var(--uf-body); font-size:13px; line-height:1.6;
          color:var(--uf-ink3); font-style:italic;
        }
        .uf-story-meta {
          font-family:var(--uf-sans); font-size:10px; color:var(--uf-ink5);
          margin-top:8px; letter-spacing:.04em;
        }

        /* ══════════════════════════════
           DATA TICKER (right column)
        ══════════════════════════════ */
        .uf-ticker-box {
          background:var(--uf-paper2); border:1px solid var(--uf-rule-light);
          padding:16px 18px; margin-bottom:22px;
        }
        .uf-ticker-box-label {
          font-family:var(--uf-sans); font-size:9px; font-weight:700;
          letter-spacing:.2em; text-transform:uppercase; color:var(--uf-ink4);
          border-bottom:1px solid var(--uf-rule-light); padding-bottom:8px; margin-bottom:10px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .uf-ticker-box-live {
          font-size:8px; letter-spacing:.14em; color:var(--uf-gold); text-transform:uppercase; font-weight:700;
          display:flex; align-items:center; gap:4px;
        }
        .uf-ticker-box-live::before {
          content:''; width:5px; height:5px; border-radius:50%; background:#2d7a3a;
          display:inline-block; animation:uf-pulse 2s ease-in-out infinite;
        }
        @keyframes uf-pulse { 0%,100%{opacity:1} 50%{opacity:.3} }
        .uf-data-row {
          display:flex; justify-content:space-between; align-items:baseline;
          padding:6px 0; border-bottom:1px solid var(--uf-rule-light);
          font-family:var(--uf-sans);
        }
        .uf-data-row:last-child { border-bottom:none; padding-bottom:0; }
        .uf-data-left    { display:flex; align-items:baseline; gap:0; }
        .uf-data-company { font-size:12px; font-weight:500; color:var(--uf-ink2); }
        .uf-data-sector  { font-size:10px; color:var(--uf-ink5); margin-left:5px; }
        .uf-data-val     { font-size:12px; font-weight:700; color:var(--uf-ink); }
        .uf-data-up      { color:#2d7a3a; }

        /* ══════════════════════════════
           UFRN WIDGET
        ══════════════════════════════ */
        .uf-ufrn-widget { border:2px solid var(--uf-ink); padding:18px; margin-bottom:24px; }
        .uf-ufrn-title  { font-family:var(--uf-serif); font-size:14px; font-weight:700; color:var(--uf-ink); margin-bottom:3px; }
        .uf-ufrn-sub    { font-family:var(--uf-sans); font-size:10px; color:var(--uf-ink4); margin-bottom:14px; letter-spacing:.05em; }
        .uf-ufrn-row    { display:flex; }
        .uf-ufrn-input  {
          flex:1; min-width:0; border:1px solid var(--uf-ink3); border-right:none;
          padding:8px 10px; font-family:var(--uf-sans); font-size:12px;
          background:var(--uf-paper); color:var(--uf-ink); outline:none;
        }
        .uf-ufrn-input::placeholder { color:var(--uf-ink5); }
        .uf-ufrn-btn {
          padding:8px 14px; background:var(--uf-ink); color:var(--uf-paper);
          font-family:var(--uf-sans); font-size:10px; font-weight:700;
          letter-spacing:.1em; text-transform:uppercase; border:none; cursor:pointer; flex-shrink:0;
          transition:background .15s;
        }
        .uf-ufrn-btn:hover { background:var(--uf-ink3); }
        .uf-ufrn-stats  { margin-top:10px; display:flex; gap:18px; font-family:var(--uf-sans); font-size:10px; color:var(--uf-ink4); }
        .uf-ufrn-stats b { color:var(--uf-gold); font-weight:700; }

        /* ══════════════════════════════
           BOTTOM FOUNDERS BAND
        ══════════════════════════════ */
        .uf-founders-band {
          border-top:2px solid var(--uf-ink);
          margin-top:32px; padding:24px 0 40px;
        }
        .uf-founders-header {
          display:flex; align-items:baseline; justify-content:space-between;
          margin-bottom:22px; gap:12px;
        }
        .uf-founders-title  { font-family:var(--uf-serif); font-size:20px; font-weight:700; color:var(--uf-ink); }
        .uf-founders-see-all {
          font-family:var(--uf-sans); font-size:10px; font-weight:600;
          letter-spacing:.14em; text-transform:uppercase; color:var(--uf-gold);
          text-decoration:none; white-space:nowrap; flex-shrink:0;
          transition:color .15s;
        }
        .uf-founders-see-all:hover { color:var(--uf-gold2); }

        .uf-founders-grid {
          display:grid; grid-template-columns:repeat(5,1fr); gap:0;
        }
        .uf-fc {
          border-right:1px solid var(--uf-rule-light);
          padding:0 22px 18px 0;
        }
        .uf-fc:last-child { border-right:none; padding-right:0; }
        .uf-fc + .uf-fc   { padding-left:22px; }
        .uf-fc-num {
          font-family:var(--uf-serif); font-size:32px; font-weight:900;
          color:var(--uf-paper4); line-height:1; margin-bottom:6px;
          transition:color .2s;
        }
        .uf-fc:hover .uf-fc-num { color:var(--uf-paper3); }
        .uf-fc-company {
          font-family:var(--uf-sans); font-size:9px; font-weight:700;
          letter-spacing:.18em; text-transform:uppercase; color:var(--uf-gold); margin-bottom:5px;
        }
        .uf-fc-name {
          font-family:var(--uf-serif); font-size:14px; font-weight:700;
          line-height:1.25; color:var(--uf-ink); margin-bottom:6px;
        }
        .uf-fc-tagline {
          font-family:var(--uf-body); font-size:12px; line-height:1.55;
          color:var(--uf-ink3); font-style:italic;
        }
        .uf-fc-val {
          font-family:var(--uf-sans); font-size:10px; font-weight:600;
          color:var(--uf-ink4); margin-top:10px; padding-top:10px;
          border-top:1px solid var(--uf-rule-light);
        }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media(max-width:1100px) {
          .uf-front-grid    { grid-template-columns:1fr 1px 1.6fr; }
          .uf-col-right     { display:none; }
          .uf-col-divider:last-of-type { display:none; }
          .uf-founders-grid { grid-template-columns:repeat(4,1fr); }
        }
        @media(max-width:768px) {
          .uf-front-grid    { grid-template-columns:1fr; padding-top:18px; }
          .uf-col-divider   { display:none; }
          .uf-col-left, .uf-col-center, .uf-col-right {
            padding:0 !important;
            border-bottom:1px solid var(--uf-rule-light);
            padding-bottom:24px !important;
            margin-bottom:8px !important;
          }
          .uf-col-right     { display:block; }
          .uf-founders-grid { grid-template-columns:repeat(2,1fr); gap:18px; }
          .uf-fc            { border-right:none; border-bottom:1px solid var(--uf-rule-light); padding:0 0 14px !important; }
          .uf-fc:last-child { border-bottom:none; }
          .uf-fc + .uf-fc   { padding-left:0 !important; }
          .uf-edition-bar   { flex-wrap:wrap; gap:6px; }
          .uf-edition-count { margin-left:0; }
          .uf-hero-title    { font-size:clamp(32px,10vw,64px); }
        }
        @media(max-width:480px) {
          .uf-founders-grid { grid-template-columns:1fr; }
          .uf-lead-headline { font-size:22px; }
          .uf-hero          { padding:22px 0 18px; }
        }
      `}</style>

      {/* ── JSON-LD SCHEMAS ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg,liveDate)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />
      {isOrg && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDatasetSchema(liveDate,startupCount)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCollectionPageSchema(isOrg,liveDate)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }} />

      {/* ══════════════════════════════════════════
          HERO — "The Founder Chronicle" masthead
      ══════════════════════════════════════════ */}
      <div className="uf-page">
        <div className="uf-hero">
          <div className="uf-hero-edition">
            <span className="uf-hero-edition-line" />
            Independent · Verified · Global
            <span className="uf-hero-edition-line" />
          </div>
          <h1 className="uf-hero-title">The Founder Chronicle</h1>
          <p className="uf-hero-subtitle">
            Verified stories of the visionaries defining the global startup era —{" "}
            {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
          </p>
          <div className="uf-hero-rule">
            <span className="uf-hero-rule-line" />
            <span className="uf-hero-rule-diamond" />
            <span className="uf-hero-rule-line" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════
          SCROLL TICKER
      ══════════════════════════════════════════ */}
      <div className="uf-ticker" aria-hidden="true">
        {/* doubled for seamless loop */}
        {[0,1].map(i => (
          <span key={i} className="uf-ticker-inner">
            {FOUNDERS.map((f) => (
              <span key={`${i}-${f.slug}`} className="uf-ticker-item">
                No.{String(FOUNDERS.indexOf(f)+1).padStart(2,"0")} · <b>{f.name}</b> · {f.company} &nbsp;·&nbsp;
              </span>
            ))}
          </span>
        ))}
      </div>

      {/* ══════════════════════════════════════════
          YOUR EXISTING FounderChronicleClient
          (unchanged — wraps your interactive UI)
      ══════════════════════════════════════════ */}
      <FounderChronicleClient
        founders={FOUNDERS}
        internalLinks={[
          { l: "Startup Registry",     h: "/startup", desc: "5000+ verified startups" },
          { l: "Submit Your Startup",  h: "/submit",  desc: "Get listed free"         },
          { l: "The Forge Blog",       h: "/blog",    desc: "Intelligence & analysis" },
          { l: "About UpForge",        h: "/about",   desc: "Our mission"             },
        ]}
        footerLinks={[
          { l: "The Founder Chronicle", h: "/"        },
          { l: "Startup Registry",      h: "/startup" },
          { l: "Blog",                  h: "/blog"    },
          { l: "Submit Startup",        h: "/submit"  },
          { l: "About UpForge",         h: "/about"   },
        ]}
      />

      {/* ══════════════════════════════════════════
          SEO CONTENT LAYER — crawlable, sr-only
      ══════════════════════════════════════════ */}
      <div className="sr-only" aria-label="SEO content">
        <section>
          <h2>
            {isOrg
              ? "Global Startup Registry — Verified UFRN Database"
              : "Indian Startup Founders & Unicorn Stories — The Founder Chronicle 2026"}
          </h2>
          <p>
            {isOrg
              ? "UpForge Global Registry provides verified proof of existence for startups worldwide through the UFRN system."
              : "Explore the verified stories of India's unicorn founders and the journeys behind their multi-billion dollar companies. Updated daily with real funding data."}
          </p>
          <nav aria-label="Founder profiles">
            <ul>
              {FOUNDERS.map((f) => (
                <li key={f.slug}>
                  <a href={`/startup/${f.slug}`}>{f.name} — {f.role} at {f.company}</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Startup categories">
            <ul>
              <li><a href="/startups/fintech">Fintech Startups</a></li>
              <li><a href="/startups/edtech">Edtech Startups</a></li>
              <li><a href="/startups/ai">AI Startups</a></li>
              <li><a href="/startups/saas">SaaS Startups</a></li>
              <li><a href="/startups/d2c">D2C Startups</a></li>
              <li><a href="/startups/logistics">Logistics Startups</a></li>
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
