import React, { useState, useEffect, useMemo } from 'react';
import { 
  Globe, 
  Search, 
  ShieldCheck, 
  ArrowRight, 
  Play, 
  Star, 
  CheckCircle2, 
  Menu, 
  X,
  ExternalLink,
  Award,
  Zap,
  TrendingUp,
  FileText
} from 'lucide-react';

// --- MOCK DATA ---
const MOCK_FOUNDERS = [
  { name: "Aadit Palicha", role: "Co-founder & CEO", company: "Zepto", slug: "zepto", category: "Operations" },
  { name: "Kunal Shah", role: "Founder", company: "CRED", slug: "cred", category: "Strategy" },
  { name: "Nithin Kamath", role: "Co-founder & CEO", company: "Zerodha", slug: "zerodha", category: "Fintech" },
  { name: "Falguni Nayar", role: "Founder & CEO", company: "Nykaa", slug: "nykaa", category: "E-commerce" },
  { name: "Lalit Keshre", role: "Co-founder & CEO", company: "Groww", slug: "groww", category: "Fintech" }
];

const MOCK_REVIEWS = [
  {
    name: "Arjun Mehta",
    role: "Co-founder, Finstack",
    text: "UpForge gave our startup instant credibility. The UFRN is now part of our pitch deck, and investors actually recognize it.",
    initials: "AM"
  },
  {
    name: "Priya Krishnan",
    role: "VC, Elevation Capital",
    text: "The data accuracy is genuinely impressive. We use it to verify startups before meetings. A true source of truth for the ecosystem.",
    initials: "PK"
  },
  {
    name: "Sahil Taneja",
    role: "Founder, GrowthX",
    text: "Finally, a place for real startup research. The Founder Chronicle is the best long-form content in India. No PR fluff.",
    initials: "ST"
  }
];

const TOP_STORIES = [
  {
    title: "How Zepto is Rewriting the Logistics Playbook",
    category: "Operations",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    author: "Editorial Team",
    date: "April 02, 2026"
  },
  {
    title: "The Silent Rise of Zerodha: No Funding, Pure Profit",
    category: "Fintech",
    img: "https://images.unsplash.com/photo-1611974714024-4621c0cc128d?auto=format&fit=crop&w=800&q=80",
    author: "UpForge Research",
    date: "March 28, 2026"
  },
  {
    title: "Why Kunal Shah's CRED is a Masterclass in Branding",
    category: "Strategy",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&w=800&q=80",
    author: "Founder Analysis",
    date: "March 20, 2026"
  }
];

const VIDEOS = [
  { id: "nNxh7PQOcnM", title: "Unpacking the 10-Minute Delivery Model", tag: "Logistics", views: "45K" },
  { id: "3fumBcKC6RE", title: "Why Most Fintechs Fail to Scale in India", tag: "Strategy", views: "32K" },
  { id: "5qap5aO4i9A", title: "The Math Behind Unicorn Valuations", tag: "Finance", views: "28K" }
];

// --- COMPONENTS ---

const Nav = () => (
  <nav className="fixed w-full z-50 bg-[#faf7f2]/90 backdrop-blur-md border-b border-[#e8ddd0]">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="bg-[#8b1a1a] p-1.5 text-white font-serif font-black text-xl">UF</div>
        <span className="font-serif font-bold text-xl tracking-tighter">UPFORGE</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.2em]">
        <a href="#" className="hover:text-[#8b1a1a] transition-colors">Registry</a>
        <a href="#" className="hover:text-[#8b1a1a] transition-colors">Chronicle</a>
        <a href="#" className="hover:text-[#8b1a1a] transition-colors">UFRN Lookup</a>
        <a href="#" className="bg-[#8b1a1a] text-white px-6 py-2.5 hover:bg-[#6b1212] transition-colors">Submit Startup</a>
      </div>
      <button className="md:hidden"><Menu className="w-6 h-6" /></button>
    </div>
  </nav>
);

const TrustBar = ({ count }) => (
  <section className="bg-white border-y-2 border-[#1a0a0a]">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#1a0a0a]">
      {[
        { label: "Verified Startups", val: `${count.toLocaleString()}+`, icon: ShieldCheck },
        { label: "Active Countries", val: "50+", icon: Globe },
        { label: "Editorial Deep-dives", val: "120+", icon: FileText },
        { label: "Success Rate", val: "94%", icon: TrendingUp }
      ].map((item, idx) => (
        <div key={idx} className="p-8 text-center group hover:bg-[#faf7f2] transition-colors">
          <item.icon className="w-5 h-5 mx-auto mb-4 text-[#8b1a1a] opacity-60" />
          <div className="text-3xl md:text-4xl font-serif font-bold text-[#1a0a0a] mb-1">{item.val}</div>
          <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#8b6a6a]">{item.label}</div>
        </div>
      ))}
    </div>
  </section>
);

const GlobeHero = ({ isOrg }) => (
  <section className="relative pt-40 pb-24 overflow-hidden bg-[#faf7f2]">
    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
      style={{ backgroundImage: "radial-gradient(#8b1a1a 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
    
    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="flex flex-col items-center text-center">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px w-12 bg-[#8b1a1a]" />
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8b1a1a]">
            {isOrg ? "The Independent Standard" : "Verified Editorial Insight"}
          </span>
          <div className="h-px w-12 bg-[#8b1a1a]" />
        </div>

        <h1 className="text-5xl md:text-8xl font-serif text-[#1a0a0a] font-black leading-[0.9] mb-10 max-w-5xl">
          {isOrg ? (
            <>GLOBAL <span className="text-[#8b1a1a]">STARTUP</span> REGISTRY</>
          ) : (
            <>THE FOUNDER <span className="italic text-[#8b1a1a]">CHRONICLE</span> 2026</>
          )}
        </h1>

        <p className="max-w-2xl text-lg md:text-xl font-serif text-[#5a4040] leading-relaxed mb-12 opacity-80">
          {isOrg 
            ? "Access the independent, verified database for 5,200+ startups across 50+ countries. Every approved company carries a unique UFRN identity."
            : "Primary research and deep-dives on India's most iconic startup founders. No PR fluff. Verified funding, real lessons, and accurate valuations."
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16">
          <div className="relative group shadow-2xl">
            <input 
              type="text" 
              placeholder="Search Startup name or UFRN..." 
              className="w-full sm:w-96 px-8 py-5 bg-white border-2 border-[#1a0a0a] font-serif focus:outline-none focus:ring-4 focus:ring-[#8b1a1a]/10 text-lg"
            />
            <button className="absolute right-2 top-2 bottom-2 px-6 bg-[#1a0a0a] text-[#faf7f2] font-bold flex items-center gap-2 hover:bg-[#8b1a1a] transition-colors">
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
           <span className="font-serif font-bold text-sm tracking-widest">HARVARD GSB</span>
           <span className="font-serif font-bold text-sm tracking-widest">IIM AHMEDABAD</span>
           <span className="font-serif font-bold text-sm tracking-widest">STANFORD RESEARCH</span>
           <span className="font-serif font-bold text-sm tracking-widest">BLOOMBERG EQUITY</span>
        </div>
      </div>
    </div>
  </section>
);

const EditorialSection = () => (
  <section className="py-24 bg-[#faf7f2]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center justify-between mb-16 pb-6 border-b-2 border-[#8b1a1a]">
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#1a0a0a]">The Founder Chronicle</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8b6a6a] mt-2">Deep-dives into the architects of the new economy</p>
        </div>
        <a href="#" className="hidden sm:flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-[#8b1a1a] hover:underline">
          Browse Archive <ArrowRight className="w-4 h-4" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {TOP_STORIES.map((story, i) => (
          <article key={i} className="group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden mb-8 border border-[#e8ddd0] shadow-sm group-hover:shadow-xl transition-all">
              <img 
                src={story.img} 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="bg-[#8b1a1a] text-white px-2 py-0.5 text-[9px] font-bold uppercase tracking-widest">{story.category}</span>
              <span className="text-[10px] text-[#8b6a6a] font-bold uppercase tracking-widest">{story.date}</span>
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1a0a0a] leading-tight mb-4 group-hover:text-[#8b1a1a] transition-colors">
              {story.title}
            </h3>
            <p className="text-[#5a4040] font-serif text-sm leading-relaxed line-clamp-2 opacity-70 mb-6">
              Exclusive research into how this company leveraged specific operational efficiencies to reach unicorn status...
            </p>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-[#e8ddd0]" />
              <span className="text-[11px] text-[#8b6a6a] font-serif italic">By {story.author}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section className="py-24 bg-[#f5f0e8] border-y border-[#e8ddd0]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="flex items-center gap-6 mb-16">
        <div className="w-16 h-16 bg-[#8b1a1a] flex items-center justify-center shadow-xl">
          <Play className="w-7 h-7 text-white fill-current ml-1" />
        </div>
        <div>
          <h2 className="text-4xl font-serif font-bold text-[#1a0a0a]">Watch & Learn</h2>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#8b6a6a] mt-2">Primary analysis from the research lab</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {VIDEOS.map((vid, i) => (
          <div key={i} className="group cursor-pointer">
            <div className="relative aspect-video overflow-hidden mb-6 bg-[#1a0a0a] shadow-lg">
              <img 
                src={`https://img.youtube.com/vi/${vid.id}/maxresdefault.jpg`} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-90 transition-opacity duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center backdrop-blur-sm">
                  <Play className="w-6 h-6 text-white fill-current ml-1" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-[#8b1a1a] text-white px-2 py-1 text-[8px] font-bold uppercase tracking-widest">{vid.tag}</span>
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-[#1a0a0a] group-hover:text-[#8b1a1a] leading-tight mb-2">
              {vid.title}
            </h3>
            <div className="flex items-center gap-4 text-[10px] text-[#8b6a6a] font-bold uppercase tracking-widest">
              <span>{vid.views} Views</span>
              <span className="w-1 h-1 rounded-full bg-[#8b6a6a]" />
              <span>Verified Video Analysis</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ReviewSection = () => (
  <section className="py-24 bg-[#faf7f2]">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <div className="flex justify-center gap-1 mb-6 text-[#8b1a1a]">
          {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
        </div>
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a0a0a] mb-4">Trusted by the Ecosystem</h2>
        <p className="text-[#8b6a6a] font-serif italic max-w-xl mx-auto">Verified testimonials from the founders, investors, and researchers who depend on our data every day.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {MOCK_REVIEWS.map((rev, i) => (
          <div key={i} className="bg-white p-10 border border-[#e8ddd0] hover:border-[#8b1a1a] hover:shadow-2xl transition-all group flex flex-col relative overflow-hidden">
            <div className="text-6xl text-[#8b1a1a] font-serif mb-6 leading-none opacity-10 absolute -right-2 -top-2">“</div>
            <p className="text-[#2d1a1a] font-serif italic mb-12 flex-1 leading-relaxed text-lg">
              {rev.text}
            </p>
            <div className="flex items-center justify-between pt-8 border-t border-[#f5f0e8]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#1a0a0a] text-white flex items-center justify-center font-serif font-bold text-sm tracking-tighter">
                  {rev.initials}
                </div>
                <div>
                  <div className="font-bold text-sm text-[#1a0a0a]">{rev.name}</div>
                  <div className="text-[10px] text-[#8b6a6a] uppercase tracking-widest font-bold">{rev.role}</div>
                </div>
              </div>
              <div className="text-[#2d5a1a] flex flex-col items-end">
                <CheckCircle2 className="w-5 h-5 mb-1" />
                <span className="text-[8px] font-bold uppercase tracking-widest">Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 py-10 border-t border-[#e8ddd0] flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-8 opacity-40 grayscale grayscale-0 transition-all overflow-x-auto w-full md:w-auto">
          <span className="font-black text-xl tracking-tighter shrink-0">SEQUOIA</span>
          <span className="font-black text-xl tracking-tighter shrink-0">Y COMBINATOR</span>
          <span className="font-black text-xl tracking-tighter shrink-0">GOLDMAN SACHS</span>
          <span className="font-black text-xl tracking-tighter shrink-0">SOFTBANK</span>
        </div>
        <button className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] border-2 border-[#1a0a0a] px-8 py-4 hover:bg-[#1a0a0a] hover:text-white transition-all whitespace-nowrap">
          View Transparency Report <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#1a0a0a] text-[#faf7f2] pt-24 pb-12 border-t border-[#8b1a1a]/30">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-8">
            <div className="bg-[#8b1a1a] p-1.5 text-white font-serif font-black text-xl">UF</div>
            <span className="font-serif font-bold text-xl tracking-tighter">UPFORGE</span>
          </div>
          <p className="text-[#c9b99a]/60 font-serif text-sm leading-relaxed mb-8">
            The world's first independent global startup registry. Building a transparent future for venture capital and entrepreneurship.
          </p>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8b1a1a] transition-colors cursor-pointer opacity-60"><Globe className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8b1a1a] transition-colors cursor-pointer opacity-60"><Award className="w-4 h-4" /></div>
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-[#8b1a1a] transition-colors cursor-pointer opacity-60"><Zap className="w-4 h-4" /></div>
          </div>
        </div>
        
        {[
          { title: "Registry", links: ["Browse All", "Recent Approvals", "UFRN Protocol", "Sector Maps"] },
          { title: "Chronicle", links: ["Founder Deep-dives", "Unicorn Tracking", "Research Lab", "Video Analysis"] },
          { title: "Organization", links: ["About Us", "Editorial Policy", "Transparency", "Contact Support"] }
        ].map((col, i) => (
          <div key={i}>
            <h4 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#8b1a1a] mb-8">{col.title}</h4>
            <ul className="flex flex-col gap-4 text-sm font-serif text-[#c9b99a]/80">
              {col.links.map(l => <li key={l} className="hover:text-white cursor-pointer transition-colors">{l}</li>)}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] text-[#c9b99a]/40 uppercase tracking-widest font-bold">
          © 2026 UpForge Global Registry · All Rights Reserved
        </div>
        <div className="flex gap-8 text-[10px] text-[#c9b99a]/40 uppercase tracking-widest font-bold">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">UFRN Standard</a>
        </div>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  const [isOrg, setIsOrg] = useState(true);
  const [startupCount, setStartupCount] = useState(5241);

  useEffect(() => {
    // Simulate domain detection or loading
    const timer = setTimeout(() => {
      // Logic for .org vs .in could go here
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="antialiased selection:bg-[#8b1a1a] selection:text-white">
      <Nav />
      <main>
        <GlobeHero isOrg={isOrg} />
        <TrustBar count={startupCount} />
        <EditorialSection />
        <VideoSection />
        <ReviewSection />
        
        {/* Mission CTA */}
        <section className="py-32 bg-[#1a0a0a] text-center border-t border-[#8b1a1a]/40 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
            style={{ backgroundImage: "linear-gradient(#faf7f2 1px, transparent 1px), linear-gradient(90deg, #faf7f2 1px, transparent 1px)", backgroundSize: "80px 80px" }} />
          
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <div className="inline-flex items-center gap-4 mb-10">
              <div className="h-px w-10 bg-[#8b1a1a]" />
              <div className="w-2 h-2 rotate-45 bg-[#8b1a1a]" />
              <span className="text-[10px] tracking-[0.5em] uppercase font-bold text-[#c9b99a]">Join the Standard</span>
              <div className="w-2 h-2 rotate-45 bg-[#8b1a1a]" />
              <div className="h-px w-10 bg-[#8b1a1a]" />
            </div>

            <h2 className="text-4xl md:text-7xl font-serif font-bold text-[#faf7f2] mb-10 leading-[1.1]">
              Every startup deserves <br />
              <span className="italic text-[#c9b99a]">a verified identity.</span>
            </h2>
            
            <p className="text-lg md:text-2xl font-serif text-[#c9b99a]/60 mb-16 max-w-2xl mx-auto leading-relaxed italic">
              "We are building the trust layer for the global startup ecosystem. Independent verification is no longer optional—it's essential."
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
              <button className="w-full sm:w-auto px-16 py-6 bg-[#8b1a1a] text-[#faf7f2] font-serif font-bold text-sm tracking-[0.2em] uppercase transition-all hover:scale-105 hover:shadow-2xl hover:shadow-[#8b1a1a]/30">
                Register Your Startup →
              </button>
              <button className="w-full sm:w-auto px-16 py-6 border border-[#faf7f2]/20 text-[#faf7f2] font-serif font-bold text-sm tracking-[0.2em] uppercase hover:bg-white/5 transition-all">
                Learn About UFRN
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
