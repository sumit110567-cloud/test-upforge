// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  BadgeCheck,
  BarChart3,
  Calculator,
  ArrowRight,
  Shield,
  FileText,
  Users,
} from "lucide-react";

export default async function Home() {
  const supabase = await createClient();

  // Fetch recent 6 startups
  const { data: recent } = await supabase
    .from("startups")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  // Fetch total count of startups
  const { count: totalStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  // Fetch distinct founding years for browsing
  const { data: yearsData } = await supabase
    .from("startups")
    .select("founded_year")
    .not("founded_year", "is", null)
    .order("founded_year", { ascending: false });

  // Get unique years
  const uniqueYears = Array.from(
    new Set(yearsData?.map((item) => item.founded_year))
  ).slice(0, 8); // limit to 8 for display

  // Mark all recent startups as verified for demo
  const verifiedStartups = recent?.map((s) => ({
    ...s,
    verified: true,
  }));

  return (
    <div className="bg-[#FCFCFC] text-[#1A1A1A] font-sans antialiased">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-28 pb-12 md:pb-20 space-y-24 md:space-y-32">
        {/* pt-24 ensures content starts below fixed header (72px + some breathing) */}

        {/* ================= HERO ================= */}
        <section className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            India’s Startup Registry
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Get your startup verified for free, reach millions of visitors, and
            receive an AI‑powered growth report with competitor analysis and
            valuation estimates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
              href="/startups"
              className="group inline-flex items-center justify-center px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Explore Registry
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/submit"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Get Listed Free
            </Link>
            <Link
              href="/valuation"
              className="inline-flex items-center justify-center px-8 py-4 border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            >
              Valuation Estimator
            </Link>
          </div>
          <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
            <Shield className="w-4 h-4" /> Independent • Neutral • Updated
            Weekly
          </p>
        </section>

        {/* ================= VALUE PROPOSITIONS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {[
            {
              icon: BadgeCheck,
              title: "Free Verified Listing",
              description:
                "We verify every new startup to ensure authenticity. Your profile gets prime exposure to our millions of monthly visitors.",
            },
            {
              icon: FileText,
              title: "Detailed Analysis Report",
              description:
                "Our AI scans your online presence, competitors, and market to deliver a custom report with actionable improvements.",
            },
            {
              icon: Calculator,
              title: "Valuation Estimator",
              description:
                "Get an approximate valuation and growth potential score based on industry benchmarks and your stage.",
            },
          ].map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-8 bg-white border border-gray-200 hover:border-gray-400 transition-all hover:shadow-lg"
            >
              <Icon className="w-10 h-10 text-[#1A1A1A] mb-6" />
              <h3 className="font-serif text-xl mb-3">{title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </section>

        {/* ================= CREDIBILITY STRIP ================= */}
        <section className="border-y border-gray-200 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-sm">
            <div>
              <p className="font-semibold text-2xl">{totalStartups ?? 0}+</p>
              <p className="text-gray-500">Startups Listed</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">8</p> {/* Placeholder for industries count - you can make dynamic later */}
              <p className="text-gray-500">Industries</p>
            </div>
            <div>
              <p className="font-semibold text-2xl">100%</p>
              <p className="text-gray-500">Free Access</p>
            </div>
            <div>
              <p className="font-semibold text-2flex items-baseline">
                <span className="text-2xl">∞</span>
              </p>
              <p className="text-gray-500">Traffic Potential</p>
            </div>
          </div>
        </section>

        {/* ================= RECENT VERIFIED STARTUPS ================= */}
        <section>
          <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-10">
            <h2 className="font-serif text-3xl">Recently Verified</h2>
            <Link
              href="/startups"
              className="text-sm text-gray-600 hover:text-[#1A1A1A] flex items-center gap-1"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {verifiedStartups?.map((startup) => (
              <article
                key={startup.id}
                className="bg-white border border-gray-200 p-6 hover:border-gray-400 transition-colors group"
              >
                <div className="flex items-start justify-between mb-4">
                  <Link
                    href={`/startup/${startup.slug}`}
                    className="font-serif text-xl text-[#1A1A1A] group-hover:underline"
                  >
                    {startup.name}
                  </Link>
                  {startup.verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  )}
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                  {startup.description}
                </p>

                <div className="flex items-center gap-3 mt-6 text-xs text-gray-500">
                  {startup.founded_year && (
                    <span>{startup.founded_year}</span>
                  )}
                  <span className="bg-gray-100 px-3 py-1 uppercase tracking-wide">
                    {startup.industry}
                  </span>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-xs">
                  <span className="text-gray-400">Report available</span>
                  <Link
                    href={`/report/${startup.slug}`}
                    className="text-[#1A1A1A] font-medium hover:underline"
                  >
                    View analysis →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="bg-[#F4F4F4] -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center mb-16">
              From Listing to Growth in Three Steps
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  step: "01",
                  title: "Submit Your Startup",
                  description:
                    "Fill a simple form with your basic details – it takes less than 5 minutes.",
                },
                {
                  step: "02",
                  title: "Get Verified",
                  description:
                    "Our team manually reviews your submission to ensure authenticity and quality.",
                },
                {
                  step: "03",
                  title: "Receive Your Report",
                  description:
                    "We generate a detailed analysis with competitor insights and valuation estimate.",
                },
              ].map(({ step, title, description }) => (
                <div key={step} className="relative pl-8 border-l border-gray-300">
                  <span className="absolute -left-3 top-0 bg-[#1A1A1A] text-white text-xs font-mono w-6 h-6 flex items-center justify-center">
                    {step}
                  </span>
                  <h3 className="font-serif text-xl mb-3">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VALUATION ESTIMATOR TEASER ================= */}
        <section className="bg-[#1A1A1A] text-white -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <Calculator className="w-12 h-12 mx-auto text-gray-400" />
            <h2 className="font-serif text-3xl md:text-4xl">
              Know Your Startup’s Worth
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Our valuation estimator uses market data and machine learning to
              give you a realistic range and growth potential – completely free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/valuation"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#1A1A1A] text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Estimate Your Valuation
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <p className="text-xs text-gray-500">
              No signup required • Takes 2 minutes
            </p>
          </div>
        </section>

        {/* ================= BROWSE BY ESTABLISHED YEAR ================= */}
        <section>
          <h2 className="font-serif text-3xl border-b border-gray-200 pb-4 mb-10">
            Browse by Established Year
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {uniqueYears.map((year) => (
              <Link
                key={year}
                href={`/startups?year=${year}`}
                className="block py-4 px-4 bg-white border border-gray-200 text-center text-sm hover:border-gray-400 transition-colors"
              >
                {year}
              </Link>
            ))}
          </div>
        </section>

        {/* ================= TRUST & TRANSPARENCY NOTE ================= */}
        <section className="border-t border-gray-200 pt-16 max-w-4xl">
          <h2 className="font-serif text-3xl mb-6">Built on Open Data</h2>
          <p className="text-base text-gray-600 leading-relaxed">
            UpForge aggregates publicly available information and founder
            submissions into a structured, neutral registry. We do not offer
            investment advice – our mission is documentation, transparency,
            and helping early‑stage startups gain the visibility they deserve.
          </p>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="border border-gray-200 bg-white p-12 text-center space-y-6">
          <h2 className="font-serif text-3xl">
            Add Your Startup to the Registry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of Indian startups that have increased their
            structured public visibility and received actionable insights.
          </p>
          <Link
            href="/submit"
            className="inline-block px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Get Started – It's Free
          </Link>
          <p className="text-xs text-gray-400">
            Verification usually takes 1–2 business days
          </p>
        </section>

      </div>
    </div>
  );
}
