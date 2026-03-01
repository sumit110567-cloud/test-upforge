// app/about/page.tsx
import { Shield, Users, TrendingUp, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-[#FCFCFC] text-[#1A1A1A] font-sans antialiased min-h-screen">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        {/* HEADER */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-8">
            About <span className="text-gray-400">UpForge.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            An independent registry documenting emerging Indian startups. 
            Not a media platform. Not a marketplace. A public record of serious builders.
          </p>

          {/* Decorative divider */}
          <div className="flex items-center justify-center gap-3 mt-12">
            <div className="h-px w-12 bg-gray-200" />
            <div className="h-1.5 w-1.5 bg-gray-400" />
            <div className="h-px w-12 bg-gray-200" />
          </div>
        </div>

        {/* STATS BANNER - Trust signals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 max-w-5xl mx-auto">
          {[
            { value: "3,200+", label: "Verified Startups" },
            { value: "15,000+", label: "Monthly Visitors" },
            { value: "8", label: "Industries" },
            { value: "2025", label: "Founded" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-4xl md:text-5xl font-serif text-[#1A1A1A] tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-wider text-gray-400 mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CORE PRINCIPLES */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-32">
          {[
            {
              icon: Users,
              title: "Built for Builders",
              desc: "Every listed startup represents independent execution. We prioritize clarity, structured documentation, and long-term visibility over short-term hype.",
            },
            {
              icon: Shield,
              title: "Structured Credibility",
              desc: "Profiles are designed as institutional records — ensuring founders build digital credibility that compounds over time.",
            },
            {
              icon: TrendingUp,
              title: "Independent First",
              desc: "We spotlight founders before headlines do. Discoverability is structured around substance, not social noise.",
            },
            {
              icon: Award,
              title: "Long-Term Vision",
              desc: "UpForge aims to become India's most trusted independent founder network — defined by quality, structure, and permanence.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white p-10 border border-gray-200 hover:border-gray-400 transition-all duration-300"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-3 bg-gray-50 text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-300">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A]">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CLOSING STATEMENT */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] mb-8 tracking-tight">
            This is not a <span className="text-gray-400">Directory.</span>
          </h3>

          <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
            It is a signal that serious founders are building.
            A structured record of India's emerging companies.
            A quiet infrastructure layer beneath the ecosystem.
          </p>

          {/* Decorative element */}
          <div className="mt-16 flex justify-center">
            <div className="h-px w-24 bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}
