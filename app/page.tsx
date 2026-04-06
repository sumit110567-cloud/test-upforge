import type { Metadata } from "next";
import { headers } from "next/headers";
import { FounderChronicleClient } from "@/components/founder-chronicle-client";
import { FOUNDERS } from "@/data/founders";
import { createClient } from "@/lib/supabase/server";

async function getDomain(): Promise<"org" | "in"> {
  const headersList = await headers();
  const context = headersList.get("x-upforge-domain");
  if (context === "org" || context === "in") return context as "org" | "in";
  const host = headersList.get("host") ?? "";
  return host.includes("upforge.org") ? "org" : "in";
}

async function getLatestDate(): Promise<string> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("startups")
      .select("updated_at")
      .eq("status", "approved")
      .order("updated_at", { ascending: false })
      .limit(1)
      .single();
    if (data?.updated_at) {
      return new Date(data.updated_at).toISOString().split("T")[0];
    }
  } catch (_) {}
  return new Date().toISOString().split("T")[0];
}

async function getStartupCount(): Promise<number> {
  try {
    const supabase = await createClient();
    const { count } = await supabase
      .from("startups")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved");
    return count ?? 5000;
  } catch (_) {}
  return 5000;
}

async function getFounderCount(): Promise<number> {
  try {
    const supabase = await createClient();
    const { count } = await supabase
      .from("founders")
      .select("*", { count: "exact", head: true })
      .eq("verified", true);
    return count ?? 2847;
  } catch (_) {}
  return 2847;
}

async function getCountryCount(): Promise<number> {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("startups")
      .select("country")
      .eq("status", "approved");
    const uniqueCountries = new Set(data?.map((s) => s.country).filter(Boolean));
    return uniqueCountries.size ?? 47;
  } catch (_) {}
  return 47;
}

async function getLatestStartups() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("startups")
      .select("name, slug, ufrn, founded_year, city, country, verified")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .limit(6);
    return data ?? [];
  } catch (_) {
    return [];
  }
}

async function getVerifiedFounders() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("founders")
      .select("name, slug, company, role, avatar_url, verified")
      .eq("verified", true)
      .order("created_at", { ascending: false })
      .limit(6);
    return data ?? [];
  } catch (_) {
    return [];
  }
}

async function getTrendingCompanies() {
  try {
    const supabase = await createClient();
    const { data } = await supabase
      .from("startups")
      .select("name, slug, ufrn, view_count, verified")
      .eq("status", "approved")
      .order("view_count", { ascending: false })
      .limit(6);
    return data ?? [];
  } catch (_) {
    return [];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const domain = await getDomain();
  const isOrg = domain === "org";
  const canonicalUrl = isOrg ? "https://www.upforge.org" : "https://www.upforge.in";
  const ogImage = "https://www.upforge.in/og/homepage.png";

  if (isOrg) {
    return {
      title: "Global Startup Registry — Verified UFRN Database | UpForge",
      description:
        "The official global startup registry. Every listing is manually verified and assigned a unique UpForge Registry Number (UFRN). Access open startup data, verified founder profiles, and global ecosystem intelligence.",
      keywords: [
        "global startup registry",
        "verified startup database",
        "UFRN registry",
        "UpForge Registry Number",
        "open startup data",
        "startup proof of existence",
        "independent startup registry",
        "startup verification",
        "UFRN lookup",
        "global founder database",
        "startup identity number",
        "verified startup number",
      ],
      alternates: { canonical: canonicalUrl },
      openGraph: {
        title: "Global Startup Registry — Verified UFRN Database",
        description:
          "The independent global registry for startups. Verified proof of existence via UFRN. Features 5000+ companies and world-class founders.",
        url: canonicalUrl,
        siteName: "UpForge Global Registry",
        locale: "en",
        type: "website",
        images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Global Startup Registry", type: "image/png" }],
      },
      twitter: {
        card: "summary_large_image",
        site: "@upforge_in",
        title: "UpForge Global Startup Registry",
        description: "Open, verified registry of startups. Every company gets a unique UFRN.",
        images: [ogImage],
      },
      robots: {
        index: true,
        follow: true,
        googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
      },
    };
  }

  return {
    title: "Discover Startups Before They Become Unicorns | UpForge India",
    description:
      "Explore verified founders, breakout companies, and emerging innovations across India and globally. Join 5000+ verified startups in the fastest-growing discovery platform.",
    keywords: [
      "discover startups",
      "startup discovery platform",
      "verified founders",
      "breakout companies",
      "emerging innovations",
      "startup registry India",
      "find startups early",
      "unicorn tracker",
      "startup ecosystem India",
      "founder profiles",
      "startup database",
      "early stage startups",
      "investment opportunities",
      "startup research",
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: "Discover Startups Before They Become Unicorns | UpForge India",
      description:
        "Explore verified founders, breakout companies, and emerging innovations across India and globally. Track the next generation of unicorns.",
      url: canonicalUrl,
      siteName: "UpForge",
      locale: "en_IN",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: "UpForge Startup Discovery Platform", type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@upforge_in",
      creator: "@upforge_in",
      title: "Discover Startups Before They Become Unicorns",
      description: "Track verified founders and breakout companies. The fastest-growing startup discovery platform.",
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 },
    },
  };
}

function buildOrganizationSchema(isOrg: boolean, liveDate: string, startupCount: number) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in";
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/#organization`,
    name: "UpForge",
    url: base,
    logo: {
      "@type": "ImageObject",
      url: "https://www.upforge.in/logo.png",
      width: 512,
      height: 512,
    },
    sameAs: ["https://www.upforge.in", "https://www.upforge.org", "https://www.linkedin.com/company/upforge"],
    description: isOrg
      ? "The global open startup registry — independent, verified, and free. Creator of the UFRN system."
      : "India's independent startup registry and discovery platform tracking 5000+ companies and founder stories.",
    foundingDate: "2024",
    areaServed: isOrg ? "Worldwide" : "India",
    numberOfEmployees: { "@type": "QuantitativeValue", value: 24 },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "editorial",
      url: `${base}/contact`,
      availableLanguage: "English",
    },
    dateModified: liveDate,
  };
}

function buildWebsiteSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in";
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${base}/#website`,
    url: base,
    name: isOrg ? "UpForge Global Registry" : "UpForge",
    publisher: { "@id": `${base}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: { "@type": "EntryPoint", urlTemplate: `${base}/startup?q={search_term_string}` },
      "query-input": "required name=search_term_string",
    },
    inLanguage: isOrg ? "en" : "en-IN",
  };
}

function buildDatasetSchema(liveDate: string, startupCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Dataset",
    "@id": "https://www.upforge.org/#dataset",
    name: "UpForge Global Startup Registry Dataset (UFRN)",
    description:
      "Open, verified database of global startups. Each startup is manually reviewed and assigned a permanent UpForge Registry Number (UFRN).",
    url: "https://www.upforge.org",
    creator: { "@type": "Organization", "@id": "https://www.upforge.org/#organization", name: "UpForge", url: "https://www.upforge.org" },
    publisher: { "@type": "Organization", name: "UpForge", url: "https://www.upforge.org" },
    license: "https://creativecommons.org/licenses/by/4.0/",
    keywords: ["startups", "UFRN", "startup registry", "verified startups", "global startup database"],
    variableMeasured: [
      { "@type": "PropertyValue", name: "UFRN", description: "UpForge Registry Number" },
      { "@type": "PropertyValue", name: "Status", description: "Verification Status" },
      { "@type": "PropertyValue", name: "Funding", description: "Funding Amount (USD)" },
    ],
    measurementTechnique: "Manual verification by UpForge editorial team",
    recordSet: { "@type": "DataFeedItem", item: { "@type": "Dataset", name: "Startup records", identifier: "ufrn-dataset" } },
    size: `${startupCount}+ verified startup records`,
    isAccessibleForFree: true,
    temporalCoverage: "2020/..",
    dateModified: liveDate,
    datePublished: "2026-03-01",
  };
}

function buildItemListSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in";
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${base}/#startuplist`,
    name: "Verified Startups and Founders",
    numberOfItems: 5000,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    itemListElement: [
      { "@type": "ListItem", position: 1, item: { "@type": "Thing", name: "Latest Startups", url: `${base}/startup?sort=newest` } },
      { "@type": "ListItem", position: 2, item: { "@type": "Thing", name: "Verified Founders", url: `${base}/founders` } },
      { "@type": "ListItem", position: 3, item: { "@type": "Thing", name: "Trending Companies", url: `${base}/startup?sort=trending` } },
    ],
  };
}

function buildFAQSchema(isOrg: boolean) {
  const base = isOrg ? "https://www.upforge.org" : "https://www.upforge.in";
  const questions = [
    {
      q: "What makes UpForge different from other startup directories?",
      a: "UpForge combines manual verification (every startup is reviewed by our team), unique UFRN identifiers, real-time ecosystem analytics, and founder-centric storytelling. We're not just a directory — we're a discovery platform for the next generation of unicorns.",
    },
    {
      q: "How does startup verification work on UpForge?",
      a: "Each submission undergoes manual review by our editorial team. We verify legal registration, active operations, founding team credentials, and funding data before assigning a permanent UpForge Registry Number (UFRN).",
    },
    {
      q: "Is UpForge free for startups and founders?",
      a: "Yes. UpForge is completely free for startups to list and for founders to create verified profiles. We believe in open, accessible data for the global startup ecosystem.",
    },
    {
      q: "How can investors use UpForge for deal flow?",
      a: "Investors use UpForge to discover early-stage, verified startups before they gain mainstream attention. Filter by sector, geography, funding stage, and growth metrics to find investment opportunities.",
    },
    {
      q: "What is the UFRN and why does it matter?",
      a: "The UpForge Registry Number (UFRN) is a permanent unique identifier for every verified startup. It serves as proof of existence, enables easy lookup, and builds trust with investors, partners, and customers.",
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${base}/#faq`,
    mainEntity: questions.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };
}

export default async function HomePage() {
  const domain = await getDomain();
  const isOrg = domain === "org";

  const [liveDate, startupCount, founderCount, countryCount, latestStartups, verifiedFounders, trendingCompanies] = await Promise.all([
    getLatestDate(),
    getStartupCount(),
    getFounderCount(),
    getCountryCount(),
    getLatestStartups(),
    getVerifiedFounders(),
    getTrendingCompanies(),
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildOrganizationSchema(isOrg, liveDate, startupCount)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildWebsiteSchema(isOrg)) }} />
      {isOrg && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildDatasetSchema(liveDate, startupCount)) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildItemListSchema(isOrg)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(isOrg)) }} />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] dark:bg-grid-slate-800/20 pointer-events-none" />

          <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex justify-center gap-2 mb-6">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700 dark:bg-emerald-950/30 dark:text-emerald-400 ring-1 ring-inset ring-emerald-600/20">
                  ✨ Verified Platform
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-gradient-to-r from-slate-900 via-emerald-800 to-slate-900 dark:from-white dark:via-emerald-400 dark:to-white bg-clip-text text-transparent">
                Discover Startups Before They Become Unicorns
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
                Explore verified founders, breakout companies, and emerging innovations across India and globally.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="/startup"
                  className="rounded-md bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600 transition-all duration-200 transform hover:scale-105"
                >
                  Explore Registry
                </a>
                <a
                  href="/submit"
                  className="text-sm font-semibold leading-6 text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                >
                  Submit Startup <span aria-hidden="true">→</span>
                </a>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Global founders
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  Verified registry
                </span>
                <span className="flex items-center gap-2">
                  <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  Early discovery
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
            <dl className="grid grid-cols-1 gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">Verified Startups</dt>
                <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{startupCount.toLocaleString()}+</dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">Verified Founders</dt>
                <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{founderCount.toLocaleString()}+</dd>
              </div>
              <div className="flex flex-col items-center text-center">
                <dt className="text-sm font-semibold leading-6 text-slate-600 dark:text-slate-400">Countries Covered</dt>
                <dd className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">{countryCount}+</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Latest from the Registry</h2>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">Discover the newest verified startups, founders, and trending companies</p>
          </div>

          <div className="space-y-16">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-1.5 h-6 rounded-full"></span>
                Latest Startups
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {latestStartups.map((startup) => (
                  <a key={startup.slug} href={`/startup/${startup.slug}`} className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition-all duration-200 hover:border-emerald-200 dark:hover:border-emerald-800">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{startup.name}</h4>
                        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{startup.city}, {startup.country}</p>
                        <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">UFRN: {startup.ufrn}</p>
                      </div>
                      {startup.verified && (
                        <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-1.5 h-6 rounded-full"></span>
                Verified Founders
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {verifiedFounders.map((founder) => (
                  <a key={founder.slug} href={`/founder/${founder.slug}`} className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition-all duration-200 hover:border-emerald-200 dark:hover:border-emerald-800">
                    <div className="flex items-start gap-4">
                      {founder.avatar_url && (
                        <img src={founder.avatar_url} alt={founder.name} className="h-12 w-12 rounded-full object-cover" />
                      )}
                      <div className="flex-1">
                        <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{founder.name}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{founder.role} at {founder.company}</p>
                        <div className="mt-2 flex items-center gap-1">
                          <svg className="h-4 w-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                          <span className="text-xs text-slate-500 dark:text-slate-400">Verified</span>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 w-1.5 h-6 rounded-full"></span>
                Trending Companies
              </h3>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {trendingCompanies.map((startup) => (
                  <a key={startup.slug} href={`/startup/${startup.slug}`} className="group relative rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-lg transition-all duration-200 hover:border-emerald-200 dark:hover:border-emerald-800">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{startup.name}</h4>
                          <span className="inline-flex items-center rounded-full bg-orange-50 px-2 py-0.5 text-xs font-medium text-orange-700 dark:bg-orange-950/30 dark:text-orange-400">🔥 Trending</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{startup.view_count?.toLocaleString()} views</p>
                      </div>
                      {startup.verified && (
                        <svg className="h-5 w-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/startup" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors">
              View all registry entries
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
          </div>
        </div>

        <div className="bg-slate-50 dark:bg-slate-900/50 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Why UpForge</h2>
              <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">The trusted platform for startup discovery and founder credibility</p>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-all duration-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Startup Visibility</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Get discovered by investors, partners, and customers actively searching for innovative companies like yours.</p>
              </div>
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-all duration-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Founder Credibility</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Build trust with a verified badge and permanent UFRN identifier that proves your startup's legitimacy.</p>
              </div>
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-all duration-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Early Discovery Advantage</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Get noticed before the mainstream. Our platform surfaces emerging startups to forward-looking investors.</p>
              </div>
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 hover:shadow-lg transition-all duration-200">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">SEO Discoverability</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Our SEO-first architecture ensures your startup appears in relevant searches, driving organic growth.</p>
              </div>
            </div>
          </div>
        </div>

        <FounderChronicleClient
          founders={FOUNDERS}
          internalLinks={[
            { l: "Startup Registry", h: "/startup", desc: "Browse 5000+ verified startups" },
            { l: "Submit Startup", h: "/submit", desc: "Get your startup listed for free" },
            { l: "Insights", h: "/blog", desc: "Startup ecosystem analysis and trends" },
            { l: "About", h: "/about", desc: "Learn about our mission and team" },
          ]}
          footerLinks={[
            { l: "Archive", h: "/archive", desc: "Historical startup data" },
            { l: "Registry", h: "/startup", desc: "Browse all verified startups" },
            { l: "Submit", h: "/submit", desc: "Add your startup to UpForge" },
          ]}
        />
      </main>

      <div className="sr-only" aria-label="SEO content">
        <section>
          <h1>UpForge - Global Startup Discovery Platform</h1>
          <p>UpForge is the leading platform for discovering verified startups and founders before they become unicorns. Track emerging innovations across India and global markets.</p>
          <nav aria-label="Startup categories">
            <ul>
              <li><a href="/startups/fintech">Fintech Startups</a></li>
              <li><a href="/startups/saas">SaaS Startups</a></li>
              <li><a href="/startups/ai">AI Startups</a></li>
              <li><a href="/startups/edtech">Edtech Startups</a></li>
              <li><a href="/startups/healthtech">Healthtech Startups</a></li>
              <li><a href="/startups/ecommerce">E-commerce Startups</a></li>
            </ul>
          </nav>
          <nav aria-label="Founder profiles">
            <ul>
              {FOUNDERS.slice(0, 5).map((f) => (
                <li key={f.slug}><a href={`/startup/${f.slug}`}>{f.name} - {f.company}</a></li>
              ))}
            </ul>
          </nav>
        </section>
      </div>
    </>
  );
}
