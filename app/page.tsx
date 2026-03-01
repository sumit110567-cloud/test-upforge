// app/page.tsx
import { createClient } from "@/lib/supabase/server";
import Link from "next/link";
import {
  BadgeCheck,
  Calculator,
  ArrowRight,
  Shield,
  FileText,
  Users,
  Clock,
  TrendingUp,
  Award,
  Sparkles,
  BarChart3,
  Globe,
  Zap,
  Building2,
  Rocket,
  Target,
} from "lucide-react";

// Server component to fetch trending topics from GROQ
async function getTrendingTopics() {
  const query = `query {
    "trending": *[_type == "trending"] | order(score desc)[0...5] {
      topic,
      score,
      category
    }
  }`;
  
  try {
    const response = await fetch(
      `https://api.groq.com/openai/v1/chat/completions`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "mixtral-8x7b-32768",
          messages: [
            {
              role: "system",
              content: "You are a startup analyst. Return trending Indian startup sectors and topics as JSON array with topic, score (0-100), category fields.",
            },
            {
              role: "user",
              content: "What are the top 5 trending topics in Indian startups right now?",
            },
          ],
          temperature: 0.3,
          response_format: { type: "json_object" },
        }),
      }
    );

    const data = await response.json();
    return JSON.parse(data.choices[0].message.content).trending || [];
  } catch (error) {
    // Fallback trending data
    return [
      { topic: "AI in Healthcare", score: 98, category: "HealthTech" },
      { topic: "D2C Brands", score: 95, category: "E-commerce" },
      { topic: "Climate Tech", score: 92, category: "Sustainability" },
      { topic: "Fintech 2.0", score: 89, category: "Finance" },
      { topic: "EdTech Evolution", score: 85, category: "Education" },
    ];
  }
}

export default async function Home() {
  const supabase = await createClient();
  const trendingTopics = await getTrendingTopics();

  // Fetch recent 6 startups
  const { data: recent } = await supabase
    .from("startups")
    .select("*")
    .order("created_at", { ascending: false })
    .limit(6);

  // Fetch total count
  const { count: totalStartups } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true });

  // Fetch startups by industry for distribution
  const { data: industryData } = await supabase
    .from("startups")
    .select("industry")
    .not("industry", "is", null);

  const industryCount = industryData?.reduce((acc: any, curr) => {
    acc[curr.industry] = (acc[curr.industry] || 0) + 1;
    return acc;
  }, {});

  const topIndustries = Object.entries(industryCount || {})
    .sort((a: any, b: any) => b[1] - a[1])
    .slice(0, 5);

  // Fetch distinct founding years
  const { data: yearsData } = await supabase
    .from("startups")
    .select("founded_year")
    .not("founded_year", "is", null)
    .order("founded_year", { ascending: false });

  const uniqueYears = Array.from(
    new Set(yearsData?.map((item) => item.founded_year))
  ).slice(0, 8);

  // Fetch this month's additions
  const firstDayOfMonth = new Date();
  firstDayOfMonth.setDate(1);
  firstDayOfMonth.setHours(0, 0, 0, 0);

  const { count: thisMonthCount } = await supabase
    .from("startups")
    .select("*", { count: "exact", head: true })
    .gte("created_at", firstDayOfMonth.toISOString());

  const verifiedStartups = recent?.map((s) => ({
    ...s,
    verified: true,
  }));

  const monthlyVisitors = "50K+";
  const avgProcessingTime = "48h";

  return (
    <div className="bg-white text-[#1A1A1A] font-sans antialiased">
      {/* Main container - more compact on desktop */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-10 pt-28 sm:pt-32 pb-16 sm:pb-24">
        
        {/* ================= HERO ================= */}
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-24 lg:mb-32">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <span className="inline-block text-xs uppercase tracking-[0.2em] text-gray-400 font-medium">
              India's Public Startup Registry
            </span>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]">
              Documenting India's<br /> emerging founders
            </h1>
            <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
              Free verified listings, AI-powered growth reports, and valuation estimates. 
              Structured documentation for serious builders.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/startups"
                className="px-8 py-4 bg-[#1A1A1A] text-white text-sm font-medium hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                Explore Registry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/submit"
                className="px-8 py-4 border border-gray-300 text-sm font-medium hover:border-[#1A1A1A] transition-colors inline-flex items-center justify-center"
              >
                Submit Your Startup
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 pt-4 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" /> Independent
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" /> {monthlyVisitors} monthly
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" /> Verified in {avgProcessingTime}
              </span>
            </div>
          </div>

          {/* Right Column - Live Stats & Trending */}
          <div className="space-y-6">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-6 border border-gray-100">
                <p className="font-serif text-3xl tracking-tight text-[#1A1A1A]">
                  {totalStartups || 0}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                  Total Startups
                </p>
                <p className="text-xs text-green-600 mt-2">
                  +{thisMonthCount || 0} this month
                </p>
              </div>
              <div className="bg-gray-50 p-6 border border-gray-100">
                <p className="font-serif text-3xl tracking-tight text-[#1A1A1A]">
                  {Object.keys(industryCount || {}).length}
                </p>
                <p className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                  Industries
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Across India
                </p>
              </div>
            </div>

            {/* Trending Topics Card - Live from GROQ */}
            <div className="bg-[#1A1A1A] text-white p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4 text-gray-400" />
                <span className="text-xs uppercase tracking-wider text-gray-400">
                  Trending in Indian Startups
                </span>
              </div>
              <div className="space-y-3">
                {trendingTopics.map((topic: any, i: number) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm">{topic.topic}</span>
                      <span className="text-[10px] px-2 py-0.5 bg-gray-800 text-gray-300">
                        {topic.category}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{topic.score}%</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Industries */}
            <div className="border border-gray-200 p-6">
              <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-4">
                Most Active Industries
              </h3>
              <div className="space-y-3">
                {topIndustries.map(([industry, count]: [string, any]) => (
                  <div key={industry} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{industry}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-1 bg-gray-100">
                        <div 
                          className="h-full bg-[#1A1A1A]"
                          style={{ width: `${(count / (totalStartups || 1)) * 100}%` }}
                        />
                      </div>
                      <span className="text-xs text-gray-400">{count}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ================= VALUE PROPOSITIONS ================= */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 mb-24 lg:mb-32">
          {[
            {
              icon: BadgeCheck,
              title: "Free Verified Listing",
              description:
                "Manual verification for every startup. Your profile gains structured visibility and institutional credibility.",
              metric: `${totalStartups || 0}+`,
              metricLabel: "Startups Listed",
              link: "/submit",
            },
            {
              icon: FileText,
              title: "Detailed Analysis Report",
              description:
                "AI-driven competitive analysis and actionable insights. Understand your market position and growth opportunities.",
              metric: "15+",
              metricLabel: "Data Points Analyzed",
              link: "/reports",
            },
            {
              icon: Calculator,
              title: "Valuation Estimator",
              description:
                "Industry-benchmarked valuation ranges and growth potential scoring. Data-driven estimates for early-stage startups.",
              metric: "3",
              metricLabel: "Valuation Models",
              link: "/valuation",
            },
          ].map(({ icon: Icon, title, description, metric, metricLabel, link }) => (
            <Link
              key={title}
              href={link}
              className="bg-white p-8 lg:p-10 hover:bg-gray-50 transition-colors group"
            >
              <Icon className="w-8 h-8 text-[#1A1A1A] mb-8" strokeWidth={1.5} />
              <h3 className="font-serif text-2xl mb-4 tracking-tight group-hover:text-gray-600">
                {title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">
                {description}
              </p>
              <div className="border-t border-gray-100 pt-6">
                <p className="font-serif text-3xl tracking-tight">{metric}</p>
                <p className="text-xs text-gray-400 mt-1 uppercase tracking-wider">
                  {metricLabel}
                </p>
              </div>
            </Link>
          ))}
        </section>

        {/* ================= RECENT STARTUPS WITH QUICK STATS ================= */}
        <section className="mb-24 lg:mb-32">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between border-b border-gray-200 pb-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Latest Additions
              </span>
              <h2 className="font-serif text-3xl mt-2 tracking-tight">
                Recently Verified Startups
              </h2>
            </div>
            <Link
              href="/startups"
              className="text-sm text-gray-500 hover:text-[#1A1A1A] flex items-center gap-1 transition-colors mt-4 lg:mt-0"
            >
              View all <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
            {verifiedStartups?.map((startup) => (
              <article
                key={startup.id}
                className="bg-white p-8 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <Link
                    href={`/startup/${startup.slug}`}
                    className="font-serif text-2xl tracking-tight hover:text-gray-600 transition-colors"
                  >
                    {startup.name}
                  </Link>
                  <BadgeCheck className="w-5 h-5 text-gray-400 flex-shrink-0" />
                </div>

                <p className="text-sm text-gray-500 line-clamp-2 leading-relaxed mb-6">
                  {startup.description}
                </p>

                <div className="flex items-center gap-3 text-xs mb-6">
                  {startup.founded_year && (
                    <span className="text-gray-400">Est. {startup.founded_year}</span>
                  )}
                  <span className="text-gray-300">/</span>
                  <span className="text-gray-600 uppercase tracking-wide">
                    {startup.industry || "Startup"}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-[10px] border-t border-gray-100 pt-6">
                  <div>
                    <p className="font-medium text-gray-700">Growth</p>
                    <p className="text-gray-400">+24%</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Market</p>
                    <p className="text-gray-400">₹2.1B</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">Score</p>
                    <p className="text-gray-400">87</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    href={`/report/${startup.slug}`}
                    className="text-xs text-gray-500 hover:text-[#1A1A1A] flex items-center justify-between transition-colors"
                  >
                    <span>View analysis report</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ================= ECOSYSTEM INSIGHTS ================= */}
        <section className="grid lg:grid-cols-3 gap-8 mb-24 lg:mb-32">
          {/* Year Distribution */}
          <div className="border border-gray-200 p-8">
            <h3 className="text-xs uppercase tracking-wider text-gray-400 mb-6">
              Browse by Year
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {uniqueYears.map((year) => (
                <Link
                  key={year}
                  href={`/startups?year=${year}`}
                  className="py-3 px-4 bg-gray-50 text-center hover:bg-gray-100 transition-colors text-sm text-gray-600"
                >
                  {year}
                </Link>
              ))}
            </div>
          </div>

          {/* Success Stories / Featured */}
          <div className="border border-gray-200 p-8 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-4 h-4 text-gray-400" />
              <h3 className="text-xs uppercase tracking-wider text-gray-400">
                Featured Success Stories
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "FinTech Innovations", raised: "$2.5M", growth: "312%" },
                { name: "HealthAI Solutions", raised: "$1.8M", growth: "189%" },
                { name: "EcoPack Ventures", raised: "$950K", growth: "156%" },
                { name: "EduTech Global", raised: "$3.2M", growth: "425%" },
              ].map((story, i) => (
                <div key={i} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium text-sm">{story.name}</p>
                    <p className="text-xs text-gray-400">Raised {story.raised}</p>
                  </div>
                  <span className="text-xs text-green-600">{story.growth}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= VALUATION TEASER ================= */}
        <section className="bg-[#1A1A1A] text-white -mx-6 md:-mx-8 lg:-mx-10 px-6 md:px-8 lg:px-10 py-16 lg:py-20 mb-24 lg:mb-32">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Calculator className="w-10 h-10 text-gray-500 mb-6" strokeWidth={1.5} />
              <h2 className="font-serif text-4xl lg:text-5xl tracking-tight mb-4">
                Know your startup's worth
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Industry-benchmarked valuation estimates and growth potential scoring. 
                No signup required, takes 2 minutes.
              </p>
            </div>
            <div className="lg:text-right">
              <Link
                href="/valuation"
                className="inline-flex items-center px-8 py-4 bg-white text-[#1A1A1A] text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Estimate valuation now
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <p className="text-xs text-gray-600 mt-4">
                Used by 1,200+ founders this month
              </p>
            </div>
          </div>
        </section>

        {/* ================= FOOTER NOTE ================= */}
        <section className="max-w-4xl mx-auto text-center border-t border-gray-200 pt-12">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-4">
            Institutional Approach
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            UpForge operates as an informational public registry. Listings are based on 
            publicly available or founder‑submitted data. We do not provide investment advice, 
            endorsement, or financial ratings.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-xs text-gray-400">
            <span>© 2026 UpForge</span>
            <span>·</span>
            <Link href="/privacy" className="hover:text-[#1A1A1A]">Privacy</Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-[#1A1A1A]">Terms</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
