// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  BadgeCheck,
  Calculator,
  ArrowRight,
  Shield,
  FileText,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();

  const { data: recent } = await supabase
    .from("startups")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  const { count: totalStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  const { data: yearsData } = await supabase
    .from("startups")
    .select("founded_year")
    .not("founded_year", "is", null)
    .order("founded_year", { ascending: false });

  const uniqueYears = Array.from(
    new Set(yearsData?.map((item) => item.founded_year))
  ).slice(0, 8);

  const verifiedStartups = recent?.map((s) => ({
    ...s,
    verified: true,
  }));

  return (
    <div className="bg-[#FAFAFA] text-[#111111] font-sans antialiased">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8 pt-28 pb-24 space-y-32">

        {/* ================= HERO ================= */}
        <section className="max-w-4xl mx-auto text-center space-y-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            India’s Structured
            <br />
            Startup Registry
          </h1>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A neutral, structured database of Indian startups —
            verified, documented, and openly accessible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/startup"
              className="px-8 py-4 bg-[#111111] text-white text-sm tracking-wide hover:bg-black transition"
            >
              Explore Registry
            </Link>

            <Link
              href="/submit"
              className="px-8 py-4 border border-gray-300 text-sm hover:border-black transition"
            >
              Submit Startup
            </Link>
          </div>

          <p className="text-xs text-gray-400 flex items-center justify-center gap-2 pt-4">
            <Shield className="w-4 h-4" />
            Independent • Neutral • Publicly Accessible
          </p>
        </section>

        {/* ================= VALUE BLOCK ================= */}
        <section className="grid md:grid-cols-3 gap-16 max-w-6xl mx-auto">
          {[
            {
              icon: BadgeCheck,
              title: "Verified Listings",
              description:
                "Each submission undergoes manual review to maintain authenticity and structural integrity.",
            },
            {
              icon: FileText,
              title: "Structured Profiles",
              description:
                "Clear data formatting, organized information, and consistent documentation standards.",
            },
            {
              icon: Calculator,
              title: "Valuation Insights",
              description:
                "AI-assisted estimation tools based on industry stage and market benchmarks.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div key={title} className="space-y-6">
              <Icon className="w-8 h-8 text-gray-700" />
              <h3 className="font-serif text-2xl">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* ================= METRICS ================= */}
        <section className="border-y border-gray-200 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center max-w-6xl mx-auto">
            <div>
              <p className="text-4xl font-serif">{totalStartups ?? 0}+</p>
              <p className="text-gray-500 text-sm mt-2">Registered Startups</p>
            </div>
            <div>
              <p className="text-4xl font-serif">8+</p>
              <p className="text-gray-500 text-sm mt-2">Industries</p>
            </div>
            <div>
              <p className="text-4xl font-serif">100%</p>
              <p className="text-gray-500 text-sm mt-2">Open Access</p>
            </div>
            <div>
              <p className="text-4xl font-serif">∞</p>
              <p className="text-gray-500 text-sm mt-2">Visibility Potential</p>
            </div>
          </div>
        </section>

        {/* ================= RECENT ================= */}
        <section className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="font-serif text-4xl">Recently Added</h2>
            <Link
              href="/startup"
              className="text-sm text-gray-600 hover:text-black flex items-center gap-2"
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {verifiedStartups?.map((startup) => (
              <article
                key={startup.id}
                className="bg-white border border-gray-200 p-8 hover:border-gray-400 transition"
              >
                <div className="flex justify-between items-start mb-4">
                  <Link
                    href={`/startup/${startup.slug}`}
                    className="font-serif text-xl hover:underline"
                  >
                    {startup.name}
                  </Link>

                  {startup.verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600" />
                  )}
                </div>

                <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                  {startup.description}
                </p>

                <div className="mt-6 flex justify-between text-xs text-gray-500">
                  <span>{startup.founded_year}</span>
                  <span className="uppercase tracking-wide">
                    {startup.industry}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= YEAR BROWSE ================= */}
        <section className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl mb-12 border-b pb-6">
            Browse by Year
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {uniqueYears.map((year) => (
              <Link
                key={year}
                href={`/startup?year=${year}`}
                className="bg-white border border-gray-200 py-6 text-center text-sm hover:border-black transition"
              >
                {year}
              </Link>
            ))}
          </div>
        </section>

        {/* ================= CLOSING ================= */}
        <section className="max-w-4xl mx-auto text-center space-y-8 border-t pt-20">
          <h2 className="font-serif text-4xl">
            A Public Infrastructure for Startups
          </h2>

          <p className="text-gray-600 leading-relaxed">
            UpForge documents publicly available startup information
            in a neutral, structured, and accessible format.
            We do not provide investment advice —
            our mission is documentation and visibility.
          </p>

          <Link
            href="/submit"
            className="inline-block px-8 py-4 bg-black text-white text-sm tracking-wide hover:bg-gray-900 transition"
          >
            Add Your Startup
          </Link>
        </section>

      </div>
    </div>
  );
}
