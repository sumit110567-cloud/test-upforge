// lib/sector-heroes.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Unique India-themed SVG hero illustrations for each startup sector.
// Server-rendered — zero JS, zero external dependencies.
// Each hero is 100% pure inline SVG that embeds directly in the category page.
// 
// Design language:
//   • Cream #F2EFE6 backgrounds (matches page)
//   • #1A1208 ink for structural lines
//   • Sector accent color as dominant visual element
//   • India-specific iconography — Taj Mahal dome, circuit patterns, 
//     rupee symbols, wheat fields, satellite dishes, etc.
//   • Clean geometric + editorial — no gradients, no glow
//   • 680px wide, height varies by sector
// ─────────────────────────────────────────────────────────────────────────────

export type SectorSlug = string

interface HeroConfig {
  svg: string        // raw SVG string
  bgColor: string    // background color for hero section
  height: number     // viewBox height
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTOR HERO LIBRARY
// ─────────────────────────────────────────────────────────────────────────────

const HEROES: Record<string, HeroConfig> = {

  // ── AI / ML ─────────────────────────────────────────────────────────────
  "ai-ml": {
    bgColor: "#EEF2FF",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Neural network grid — India-style, saffron-blue palette -->
  <!-- Dot grid background -->
  ${Array.from({length:9},(_,row)=>Array.from({length:17},(_,col)=>`<circle cx="${40+col*37}" cy="${20+row*20}" r="1.5" fill="#C7D2FE" opacity="0.6"/>`).join("")).join("")}
  
  <!-- Neural net nodes layer 1 -->
  <circle cx="80"  cy="60"  r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="80"  cy="100" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="80"  cy="140" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  
  <!-- Layer 2 nodes -->
  <circle cx="200" cy="70"  r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="200" cy="100" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="200" cy="130" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  
  <!-- Layer 3 nodes — active -->
  <circle cx="320" cy="80"  r="12" fill="#4F46E5" stroke="#312E81" stroke-width="1.5"/>
  <circle cx="320" cy="120" r="12" fill="#4F46E5" stroke="#312E81" stroke-width="1.5"/>
  
  <!-- Layer 4 -->
  <circle cx="440" cy="70"  r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="440" cy="100" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  <circle cx="440" cy="130" r="9" fill="#EEF2FF" stroke="#4F46E5" stroke-width="1.5"/>
  
  <!-- Output node -->
  <circle cx="560" cy="100" r="14" fill="#312E81" stroke="#1E1B4B" stroke-width="2"/>
  <text x="560" y="105" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="700" fill="#E0E7FF">AI</text>

  <!-- Connections layer1→layer2 -->
  <line x1="89" y1="63"  x2="191" y2="73"  stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="63"  x2="191" y2="103" stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="100" x2="191" y2="73"  stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="100" x2="191" y2="103" stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="100" x2="191" y2="133" stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="140" x2="191" y2="103" stroke="#C7D2FE" stroke-width="0.8"/>
  <line x1="89" y1="140" x2="191" y2="133" stroke="#C7D2FE" stroke-width="0.8"/>

  <!-- Connections layer2→layer3 — highlighted -->
  <line x1="209" y1="73"  x2="308" y2="84"  stroke="#818CF8" stroke-width="1.5"/>
  <line x1="209" y1="100" x2="308" y2="84"  stroke="#818CF8" stroke-width="2"/>
  <line x1="209" y1="100" x2="308" y2="124" stroke="#818CF8" stroke-width="2"/>
  <line x1="209" y1="130" x2="308" y2="124" stroke="#818CF8" stroke-width="1.5"/>
  
  <!-- Connections layer3→layer4 -->
  <line x1="332" y1="84"  x2="431" y2="73"  stroke="#818CF8" stroke-width="1.5"/>
  <line x1="332" y1="84"  x2="431" y2="103" stroke="#818CF8" stroke-width="1.5"/>
  <line x1="332" y1="124" x2="431" y2="103" stroke="#818CF8" stroke-width="1.5"/>
  <line x1="332" y1="124" x2="431" y2="133" stroke="#818CF8" stroke-width="1.5"/>

  <!-- Connections layer4→output -->
  <line x1="449" y1="73"  x2="546" y2="100" stroke="#4F46E5" stroke-width="1.5"/>
  <line x1="449" y1="103" x2="546" y2="100" stroke="#4F46E5" stroke-width="2"/>
  <line x1="449" y1="133" x2="546" y2="100" stroke="#4F46E5" stroke-width="1.5"/>

  <!-- India Saffron accent — Ashoka Chakra simplified ring -->
  <circle cx="620" cy="100" r="44" fill="none" stroke="#FF9933" stroke-width="1.5" opacity="0.5"/>
  <circle cx="620" cy="100" r="36" fill="none" stroke="#FF9933" stroke-width="0.8" opacity="0.3"/>
  ${Array.from({length:24},(_,i)=>{const a=i*(360/24)*Math.PI/180;const x1=620+32*Math.cos(a);const y1=100+32*Math.sin(a);const x2=620+40*Math.cos(a);const y2=100+40*Math.sin(a);return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#FF9933" stroke-width="1" opacity="0.4"/>`}).join("")}
  <circle cx="620" cy="100" r="5" fill="#FF9933" opacity="0.6"/>

  <!-- Label -->
  <text x="340" y="185" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#312E81" letter-spacing="0.5">Artificial Intelligence · India 2026</text>
</svg>`,
  },

  // ── FINTECH ────────────────────────────────────────────────────────────────
  "fintech": {
    bgColor: "#ECFDF5",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- UPI pattern — India's payment revolution -->
  
  <!-- Background grid lines -->
  ${Array.from({length:5},(_,i)=>`<line x1="0" y1="${40+i*30}" x2="680" y2="${40+i*30}" stroke="#BBF7D0" stroke-width="0.5"/>`).join("")}
  ${Array.from({length:11},(_,i)=>`<line x1="${60+i*56}" y1="0" x2="${60+i*56}" y2="200" stroke="#BBF7D0" stroke-width="0.5"/>`).join("")}

  <!-- Rupee symbol large -->
  <text x="80" y="130" font-family="Georgia,serif" font-size="100" font-weight="700" fill="#059669" opacity="0.08">₹</text>
  
  <!-- UPI flow diagram -->
  <!-- Phone sender -->
  <rect x="40" y="60" width="60" height="80" rx="8" fill="#ECFDF5" stroke="#059669" stroke-width="1.5"/>
  <rect x="50" y="70" width="40" height="55" rx="3" fill="#D1FAE5"/>
  <circle cx="70" cy="135" r="4" fill="#059669" opacity="0.5"/>
  <text x="70" y="158" text-anchor="middle" font-family="system-ui" font-size="9" fill="#065F46" font-weight="700">Sender</text>

  <!-- Flow arrows + UPI tag -->
  <line x1="105" y1="100" x2="200" y2="100" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/>
  <defs><marker id="arr-green" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#059669" stroke-width="1.5" stroke-linecap="round"/></marker></defs>
  
  <!-- UPI server -->
  <rect x="200" y="72" width="100" height="56" rx="6" fill="#059669"/>
  <text x="250" y="96" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="900" fill="#fff">UPI</text>
  <text x="250" y="112" text-anchor="middle" font-family="system-ui" font-size="8" fill="#A7F3D0">Instant · Free</text>
  <text x="250" y="148" text-anchor="middle" font-family="system-ui" font-size="8" fill="#065F46">₹8.7B txns/month</text>
  
  <line x1="305" y1="100" x2="400" y2="100" stroke="#059669" stroke-width="2" marker-end="url(#arr-green)"/>
  
  <!-- Phone receiver -->
  <rect x="400" y="60" width="60" height="80" rx="8" fill="#ECFDF5" stroke="#059669" stroke-width="1.5"/>
  <rect x="410" y="70" width="40" height="55" rx="3" fill="#D1FAE5"/>
  <circle cx="430" cy="135" r="4" fill="#059669" opacity="0.5"/>
  <text x="430" y="158" text-anchor="middle" font-family="system-ui" font-size="9" fill="#065F46" font-weight="700">Receiver</text>

  <!-- Rising chart (right side) -->
  <polyline points="500,160 520,140 545,145 570,120 595,125 620,95 640,80" fill="none" stroke="#059669" stroke-width="2" stroke-linejoin="round"/>
  <polyline points="500,160 520,140 545,145 570,120 595,125 620,95 640,80 640,160 500,160" fill="#059669" opacity="0.1"/>
  <!-- Chart axis -->
  <line x1="497" y1="75" x2="497" y2="163" stroke="#059669" stroke-width="1" opacity="0.5"/>
  <line x1="497" y1="162" x2="645" y2="162" stroke="#059669" stroke-width="1" opacity="0.5"/>
  
  <text x="340" y="185" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#065F46" letter-spacing="0.5">FinTech · UPI-Powered India 2026</text>
</svg>`,
  },

  // ── HEALTHTECH ─────────────────────────────────────────────────────────────
  "healthtech": {
    bgColor: "#FFF1F2",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- ECG heartbeat line across full width — clean medical aesthetic -->
  
  <!-- Background subtle grid -->
  ${Array.from({length:7},(_,i)=>`<line x1="0" y1="${20+i*25}" x2="680" y2="${20+i*25}" stroke="#FECDD3" stroke-width="0.5"/>`).join("")}
  ${Array.from({length:14},(_,i)=>`<line x1="${i*52}" y1="0" x2="${i*52}" y2="200" stroke="#FECDD3" stroke-width="0.5"/>`).join("")}

  <!-- ECG line -->
  <polyline fill="none" stroke="#DC2626" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"
    points="0,100 40,100 55,100 65,90 70,115 78,50 85,150 92,100 107,100 145,100 160,90 165,115 173,50 180,150 187,100 202,100 240,100 255,90 260,115 268,50 275,150 282,100 297,100 335,100 350,90 355,115 363,50 370,150 377,100 392,100 430,100 445,90 450,115 458,50 465,150 472,100 487,100 525,100 540,90 545,115 553,50 560,150 567,100 580,100 620,100 635,90 640,115 648,50 655,150 662,100 680,100"/>
  
  <!-- Heart icon -->
  <g transform="translate(320,60)">
    <path d="M0,10 C0,5 -8,0 -12,5 C-16,10 -8,18 0,24 C8,18 16,10 12,5 C8,0 0,5 0,10Z" fill="#DC2626" opacity="0.9"/>
  </g>
  
  <!-- Medical cross -->
  <rect x="600" y="60" width="8" height="30" rx="2" fill="#DC2626" opacity="0.7"/>
  <rect x="590" y="70" width="28" height="8"  rx="2" fill="#DC2626" opacity="0.7"/>
  
  <!-- India map outline (simplified) -->
  <path d="M130,30 L160,25 L185,35 L190,50 L185,70 L175,85 L160,95 L140,90 L125,75 L120,55 Z" 
    fill="none" stroke="#FCA5A5" stroke-width="1.5" opacity="0.6"/>
  <circle cx="155" cy="60" r="3" fill="#DC2626" opacity="0.5"/>
  <circle cx="140" cy="75" r="2.5" fill="#DC2626" opacity="0.4"/>
  <circle cx="168" cy="52" r="2.5" fill="#DC2626" opacity="0.4"/>

  <!-- Stats -->
  <text x="480" y="55" font-family="system-ui" font-size="9" fill="#9F1239" font-weight="700">1.4B People</text>
  <text x="480" y="70" font-family="system-ui" font-size="9" fill="#9F1239" font-weight="700">To Serve</text>
  <line x1="478" y1="77" x2="560" y2="77" stroke="#FECDD3" stroke-width="1"/>
  <text x="480" y="88" font-family="system-ui" font-size="8" fill="#BE123C">Telemedicine · Diagnostics</text>
  <text x="480" y="100" font-family="system-ui" font-size="8" fill="#BE123C">Mental Health · AI Dx</text>

  <text x="340" y="185" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#9F1239" letter-spacing="0.5">HealthTech · Serving 1.4 Billion</text>
</svg>`,
  },

  // ── EDTECH ─────────────────────────────────────────────────────────────────
  "edtech": {
    bgColor: "#FFFBEB",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Open book with digital elements — India education theme -->
  
  <!-- Book left page -->
  <rect x="120" y="35" width="180" height="130" rx="3" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
  <!-- Book spine -->
  <line x1="310" y1="35" x2="310" y2="165" stroke="#D97706" stroke-width="3"/>
  <!-- Book right page -->
  <rect x="310" y="35" width="180" height="130" rx="3" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
  
  <!-- Left page text lines -->
  ${Array.from({length:6},(_,i)=>`<line x1="135" y1="${60+i*16}" x2="${i%3===2?245:285}" y2="${60+i*16}" stroke="#D97706" stroke-width="1.2" opacity="0.5"/>`).join("")}
  <!-- Left page chart -->
  <polyline points="135,140 165,130 195,118 225,108 255,95 285,85" fill="none" stroke="#D97706" stroke-width="2"/>
  <polyline points="135,140 165,130 195,118 225,108 255,95 285,85 285,140 135,140" fill="#D97706" opacity="0.1"/>
  
  <!-- Right page — digital elements -->
  <rect x="325" y="55" width="50" height="30" rx="4" fill="#D97706" opacity="0.8"/>
  <text x="350" y="75" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="900" fill="#fff">LIVE</text>
  <circle cx="330" cy="60" r="4" fill="#fff" opacity="0.8"/>
  
  <!-- Students icons -->
  ${Array.from({length:5},(_,i)=>`
    <circle cx="${340+i*28}" cy="110" r="8" fill="#FEF3C7" stroke="#D97706" stroke-width="1.2"/>
    <text x="${340+i*28}" y="114" text-anchor="middle" font-family="system-ui" font-size="8" fill="#92400E">👤</text>
  `).join("")}
  <text x="450" y="140" text-anchor="middle" font-family="system-ui" font-size="8" fill="#92400E">500M+ Learners</text>
  
  <!-- Graduation cap -->
  <polygon points="60,85 100,70 140,85 100,100" fill="#D97706" opacity="0.7"/>
  <rect x="95" y="100" width="10" height="15" fill="#D97706" opacity="0.5"/>
  <line x1="120" y1="78" x2="130" y2="105" stroke="#D97706" stroke-width="2" opacity="0.7"/>
  <circle cx="130" cy="107" r="4" fill="#D97706" opacity="0.7"/>
  
  <!-- Hindi alphabet hint -->
  <text x="60" y="148" font-family="Georgia,serif" font-size="18" fill="#D97706" opacity="0.3">अ</text>
  <text x="80" y="148" font-family="Georgia,serif" font-size="18" fill="#D97706" opacity="0.25">क</text>

  <text x="340" y="185" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#92400E" letter-spacing="0.5">EdTech · Democratising Education</text>
</svg>`,
  },

  // ── SAAS ───────────────────────────────────────────────────────────────────
  "saas": {
    bgColor: "#F5F3FF",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Cloud architecture with India globe — SaaS theme -->
  
  <!-- Cloud shape (simplified geometric) -->
  <ellipse cx="340" cy="80" rx="130" ry="48" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.5"/>
  <circle cx="250" cy="85" r="38" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.2"/>
  <circle cx="430" cy="85" r="38" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.2"/>
  
  <!-- Cloud label -->
  <text x="340" y="77" text-anchor="middle" font-family="system-ui" font-size="11" font-weight="900" fill="#5B21B6">CLOUD</text>
  <text x="340" y="92" text-anchor="middle" font-family="system-ui" font-size="8" fill="#7C3AED">Global SaaS Infrastructure</text>
  
  <!-- Connection lines from cloud to devices -->
  <line x1="270" y1="118" x2="100" y2="155" stroke="#A78BFA" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="320" y1="125" x2="240" y2="160" stroke="#A78BFA" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="360" y1="125" x2="400" y2="160" stroke="#A78BFA" stroke-width="1.2" stroke-dasharray="4 3"/>
  <line x1="400" y1="118" x2="560" y2="155" stroke="#A78BFA" stroke-width="1.2" stroke-dasharray="4 3"/>

  <!-- Device icons -->
  <!-- Laptop -->
  <rect x="60" y="155" width="50" height="30" rx="3" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.2"/>
  <rect x="50" y="186" width="70" height="5"  rx="2" fill="#7C3AED" opacity="0.4"/>
  <!-- Phone -->
  <rect x="218" y="158" width="24" height="38" rx="4" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.2"/>
  <circle cx="230" cy="192" r="3" fill="#7C3AED" opacity="0.5"/>
  <!-- Tablet -->
  <rect x="375" y="158" width="38" height="28" rx="3" fill="#EDE9FE" stroke="#7C3AED" stroke-width="1.2"/>
  <!-- Server -->
  <rect x="530" y="152" width="50" height="12" rx="2" fill="#7C3AED" opacity="0.7"/>
  <rect x="530" y="167" width="50" height="12" rx="2" fill="#7C3AED" opacity="0.5"/>
  <rect x="530" y="182" width="50" height="12" rx="2" fill="#7C3AED" opacity="0.3"/>

  <!-- Stats floating -->
  <text x="340" y="30" text-anchor="middle" font-family="system-ui" font-size="9" font-weight="700" fill="#5B21B6">India: World's 3rd Largest SaaS Ecosystem</text>
  
  <!-- India flag saffron stripe hint -->
  <rect x="0"   y="0" width="680" height="3" fill="#FF9933" opacity="0.6"/>
  <rect x="0"   y="3" width="680" height="3" fill="#fff" opacity="0.6"/>
  <rect x="0"   y="6" width="680" height="3" fill="#138808" opacity="0.6"/>

  <text x="340" y="185" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#4C1D95" letter-spacing="0.5">SaaS · Built in India, Sold to the World</text>
</svg>`,
  },

  // ── AGRITECH ───────────────────────────────────────────────────────────────
  "agritech": {
    bgColor: "#F0FDF4",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Wheat fields with drone + digital overlay — India agriculture -->
  
  <!-- Sky band -->
  <rect x="0" y="0" width="680" height="90" fill="#F0FDF4" opacity="0.5"/>
  
  <!-- Field rows (wheat) -->
  ${Array.from({length:8},(_,i)=>{
    const y = 90 + i*12;
    const opacity = 0.3 + i*0.07;
    return `<line x1="0" y1="${y}" x2="680" y2="${y}" stroke="#15803D" stroke-width="${1+i*0.2}" opacity="${opacity.toFixed(2)}"/>
    ${Array.from({length:24},(_,j)=>{
      const x = j*29 + 10;
      return `<line x1="${x}" y1="${y}" x2="${x}" y2="${y-8}" stroke="#16A34A" stroke-width="1.2" opacity="${(opacity*0.8).toFixed(2)}"/>
      <ellipse cx="${x}" cy="${y-10}" rx="4" ry="6" fill="#16A34A" opacity="${(opacity*0.7).toFixed(2)}"/>`;
    }).join("")}`;
  }).join("")}

  <!-- Ground line -->
  <line x1="0" y1="170" x2="680" y2="170" stroke="#15803D" stroke-width="2" opacity="0.4"/>
  
  <!-- Drone top -->
  <g transform="translate(340,40)">
    <!-- Body -->
    <rect x="-15" y="-10" width="30" height="20" rx="5" fill="#15803D" opacity="0.9"/>
    <!-- Arms -->
    <line x1="-15" y1="0" x2="-40" y2="-8" stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
    <line x1="15"  y1="0" x2="40"  y2="-8" stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
    <line x1="-15" y1="0" x2="-40" y2="8"  stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
    <line x1="15"  y1="0" x2="40"  y2="8"  stroke="#15803D" stroke-width="3" stroke-linecap="round"/>
    <!-- Propellers -->
    <ellipse cx="-40" cy="-8" rx="12" ry="3" fill="#16A34A" opacity="0.6"/>
    <ellipse cx="40"  cy="-8" rx="12" ry="3" fill="#16A34A" opacity="0.6"/>
    <ellipse cx="-40" cy="8"  rx="12" ry="3" fill="#16A34A" opacity="0.6"/>
    <ellipse cx="40"  cy="8"  rx="12" ry="3" fill="#16A34A" opacity="0.6"/>
    <!-- Camera dot -->
    <circle cx="0" cy="12" r="4" fill="#fff" opacity="0.8"/>
    <!-- Scan beam -->
    <line x1="0" y1="15" x2="-30" y2="90" stroke="#15803D" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
    <line x1="0" y1="15" x2="30"  y2="90" stroke="#15803D" stroke-width="0.8" stroke-dasharray="3 3" opacity="0.5"/>
  </g>

  <!-- Data overlay box -->
  <rect x="480" y="20" width="160" height="65" rx="5" fill="#DCFCE7" stroke="#15803D" stroke-width="1"/>
  <text x="490" y="37" font-family="system-ui" font-size="8" font-weight="700" fill="#14532D">CROP ANALYSIS</text>
  <text x="490" y="50" font-family="system-ui" font-size="8" fill="#15803D">Yield: +34% ↑</text>
  <text x="490" y="63" font-family="system-ui" font-size="8" fill="#15803D">Water use: -22% ↓</text>
  <text x="490" y="76" font-family="system-ui" font-size="8" fill="#15803D">140M farmers served</text>

  <text x="340" y="190" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#14532D" letter-spacing="0.5">AgriTech · Feeding a Billion, Digitally</text>
</svg>`,
  },

  // ── CLIMATE TECH ──────────────────────────────────────────────────────────
  "climate-tech": {
    bgColor: "#F0FDFA",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Solar panels + wind turbine + EV charger — India clean energy -->
  
  <!-- Sun -->
  <circle cx="600" cy="50" r="30" fill="#FEF08A" stroke="#CA8A04" stroke-width="1.5" opacity="0.8"/>
  ${Array.from({length:8},(_,i)=>{const a=i*45*Math.PI/180;const x1=600+33*Math.cos(a);const y1=50+33*Math.sin(a);const x2=600+42*Math.cos(a);const y2=50+42*Math.sin(a);return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#CA8A04" stroke-width="2" stroke-linecap="round" opacity="0.7"/>`;}).join("")}
  
  <!-- Solar panel array -->
  ${Array.from({length:3},(_,row)=>Array.from({length:5},(_,col)=>{
    const x=40+col*55, y=50+row*28;
    return `<rect x="${x}" y="${y}" width="48" height="22" rx="2" fill="#0D9488" stroke="#0F766E" stroke-width="1"/>
    <line x1="${x+16}" y1="${y}" x2="${x+16}" y2="${y+22}" stroke="#0F766E" stroke-width="0.8"/>
    <line x1="${x+32}" y1="${y}" x2="${x+32}" y2="${y+22}" stroke="#0F766E" stroke-width="0.8"/>
    <line x1="${x}" y1="${y+11}" x2="${x+48}" y2="${y+11}" stroke="#0F766E" stroke-width="0.8"/>`;
  }).join("")).join("")}
  
  <!-- Wind turbine -->
  <line x1="450" y1="160" x2="450" y2="50" stroke="#0D9488" stroke-width="3" stroke-linecap="round"/>
  <circle cx="450" cy="55" r="5" fill="#0F766E"/>
  <!-- Blades -->
  <ellipse cx="450" cy="35" rx="6" ry="18" fill="#0D9488" opacity="0.8" transform="rotate(-30 450 55)"/>
  <ellipse cx="450" cy="35" rx="6" ry="18" fill="#0D9488" opacity="0.8" transform="rotate(90 450 55)"/>
  <ellipse cx="450" cy="35" rx="6" ry="18" fill="#0D9488" opacity="0.8" transform="rotate(210 450 55)"/>
  
  <!-- EV charger -->
  <rect x="510" y="100" width="36" height="60" rx="4" fill="#CCFBF1" stroke="#0D9488" stroke-width="1.5"/>
  <rect x="518" y="110" width="20" height="14" rx="2" fill="#0D9488" opacity="0.7"/>
  <line x1="528" y1="124" x2="528" y2="145" stroke="#0D9488" stroke-width="2"/>
  <path d="M522,145 L534,145 L530,158 L526,150 L526,158 L522,145Z" fill="#0D9488" opacity="0.8"/>
  
  <!-- Ground line -->
  <line x1="0" y1="162" x2="680" y2="162" stroke="#0D9488" stroke-width="1.5" opacity="0.3"/>
  
  <!-- CO2 reduction indicator -->
  <rect x="555" y="100" width="110" height="50" rx="5" fill="#CCFBF1" stroke="#0D9488" stroke-width="1"/>
  <text x="610" y="118" text-anchor="middle" font-family="system-ui" font-size="8" font-weight="700" fill="#134E4A">India: 500GW</text>
  <text x="610" y="130" text-anchor="middle" font-family="system-ui" font-size="8" fill="#0F766E">Renewable Target</text>
  <text x="610" y="142" text-anchor="middle" font-family="system-ui" font-size="8" fill="#0F766E">by 2030</text>
  
  <!-- Energy flow lines -->
  <line x1="355" y1="100" x2="440" y2="90" stroke="#0D9488" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>
  <line x1="470" y1="100" x2="508" y2="130" stroke="#0D9488" stroke-width="1" stroke-dasharray="3 3" opacity="0.6"/>

  <text x="340" y="186" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#134E4A" letter-spacing="0.5">Climate Tech · India's Green Revolution</text>
</svg>`,
  },

  // ── ECOMMERCE ──────────────────────────────────────────────────────────────
  "ecommerce": {
    bgColor: "#FFF7ED",
    height: 200,
    svg: `<svg viewBox="0 0 680 200" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- India map with delivery routes — ecommerce logistics -->
  
  <!-- Simplified India map silhouette -->
  <path d="M200,20 L260,15 L320,25 L360,20 L400,35 L420,60 L430,90 L420,120 L400,150 L370,175 L340,185 L310,175 L280,160 L260,140 L240,115 L220,90 L195,70 L185,45 Z" 
    fill="#FED7AA" stroke="#EA580C" stroke-width="1.5" opacity="0.7"/>
  
  <!-- City dots -->
  <circle cx="300" cy="70"  r="6" fill="#EA580C" opacity="0.9"/><!-- Delhi -->
  <circle cx="240" cy="140" r="6" fill="#EA580C" opacity="0.9"/><!-- Mumbai -->
  <circle cx="330" cy="150" r="6" fill="#EA580C" opacity="0.9"/><!-- Bengaluru -->
  <circle cx="360" cy="90"  r="5" fill="#EA580C" opacity="0.7"/><!-- Kolkata -->
  <circle cx="290" cy="120" r="5" fill="#EA580C" opacity="0.7"/><!-- Hyderabad -->
  
  <!-- City labels -->
  <text x="315" y="66"  font-family="system-ui" font-size="7" fill="#9A3412" font-weight="700">Delhi</text>
  <text x="200" y="145" font-family="system-ui" font-size="7" fill="#9A3412" font-weight="700">Mumbai</text>
  <text x="340" y="158" font-family="system-ui" font-size="7" fill="#9A3412" font-weight="700">Bengaluru</text>
  
  <!-- Route lines -->
  <line x1="300" y1="70"  x2="240" y2="140" stroke="#EA580C" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="240" y1="140" x2="330" y2="150" stroke="#EA580C" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="300" y1="70"  x2="360" y2="90"  stroke="#EA580C" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
  <line x1="300" y1="70"  x2="290" y2="120" stroke="#EA580C" stroke-width="1.2" stroke-dasharray="4 3" opacity="0.6"/>
  
  <!-- Package icon (right side) -->
  <rect x="470" y="50" width="60" height="55" rx="3" fill="#FED7AA" stroke="#EA580C" stroke-width="2"/>
  <line x1="470" y1="70" x2="530" y2="70" stroke="#EA580C" stroke-width="1.5"/>
  <line x1="500" y1="50" x2="500" y2="105" stroke="#EA580C" stroke-width="1.5"/>
  <text x="500" y="42" text-anchor="middle" font-family="system-ui" font-size="8" fill="#9A3412" font-weight="700">DELIVERY</text>
  
  <!-- Stats -->
  <rect x="450" y="120" width="180" height="55" rx="5" fill="#FFF7ED" stroke="#EA580C" stroke-width="1"/>
  <text x="460" y="137" font-family="system-ui" font-size="8" font-weight="700" fill="#9A3412">India eCommerce 2026</text>
  <text x="460" y="150" font-family="system-ui" font-size="8" fill="#EA580C">Market: $350B by 2030</text>
  <text x="460" y="163" font-family="system-ui" font-size="8" fill="#EA580C">500M+ online shoppers</text>
  
  <!-- Quick commerce badge -->
  <rect x="60" y="140" width="100" height="30" rx="4" fill="#EA580C"/>
  <text x="110" y="152" text-anchor="middle" font-family="system-ui" font-size="8" font-weight="900" fill="#fff">10-MIN</text>
  <text x="110" y="163" text-anchor="middle" font-family="system-ui" font-size="7" fill="#FED7AA">DELIVERY</text>

  <text x="340" y="196" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#9A3412" letter-spacing="0.5">E-Commerce · India's Digital Bazaar</text>
</svg>`,
  },

  // ── DEFAULT (fallback for any unrecognised sector) ─────────────────────────
  "default": {
    bgColor: "#F9F7F4",
    height: 160,
    svg: `<svg viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block">
  <!-- Ashoka Chakra — universal India startup symbol -->
  ${Array.from({length:24},(_,i)=>{const a=(i*15-90)*Math.PI/180;const x1=340+55*Math.cos(a);const y1=80+55*Math.sin(a);const x2=340+72*Math.cos(a);const y2=80+72*Math.sin(a);return `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#1A1208" stroke-width="1.5" opacity="0.15"/>`;}).join("")}
  <circle cx="340" cy="80" r="72" fill="none" stroke="#1A1208" stroke-width="1" opacity="0.1"/>
  <circle cx="340" cy="80" r="55" fill="none" stroke="#1A1208" stroke-width="1" opacity="0.1"/>
  <circle cx="340" cy="80" r="12" fill="#1A1208" opacity="0.1"/>
  
  <!-- India flag stripe hint -->
  <rect x="0" y="0"   width="680" height="4" fill="#FF9933" opacity="0.4"/>
  <rect x="0" y="4"   width="680" height="4" fill="#fff"    opacity="0.4"/>
  <rect x="0" y="8"   width="680" height="4" fill="#138808" opacity="0.4"/>
  
  <!-- Dot grid -->
  ${Array.from({length:6},(_,r)=>Array.from({length:14},(_,c)=>`<circle cx="${45+c*45}" cy="${30+r*22}" r="1.5" fill="#1A1208" opacity="0.06"/>`).join("")).join("")}

  <text x="340" y="148" text-anchor="middle" font-family="'Playfair Display',Georgia,serif" font-size="13" font-weight="700" fill="#1A1208" opacity="0.5" letter-spacing="0.5">Verified Indian Startups · UpForge Registry 2026</text>
</svg>`,
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// PUBLIC API
// ─────────────────────────────────────────────────────────────────────────────

/** Get hero config for a given sector slug. Falls back to default. */
export function getSectorHero(slug: string): HeroConfig {
  // Normalize slug
  const normalized = slug.toLowerCase().replace(/\s+/g, "-")
  return HEROES[normalized] ?? HEROES["default"]
}

/** Get just the SVG string */
export function getSectorHeroSvg(slug: string): string {
  return getSectorHero(slug).svg
}

/** Get the background color for the hero section */
export function getSectorHeroBg(slug: string): string {
  return getSectorHero(slug).bgColor
}
